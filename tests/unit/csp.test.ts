import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * The Content-Security-Policy declared in netlify.toml.
 *
 * netlify.toml has claimed since the foundation phase that "tests/unit/csp.test.ts
 * asserts this directive against the inline scripts the build actually emits, so the two
 * cannot drift apart again". That file did not exist. This is it.
 *
 * The pre-deployment phase is the right moment for it: two client islands and a
 * localStorage-backed consent record were just added, and the question "did that need a
 * CSP change?" should be answered by a test rather than by recollection. It did not —
 * localStorage needs no directive, and neither island loads anything from a third party.
 */

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const NETLIFY_TOML = readFileSync(join(ROOT, 'netlify.toml'), 'utf8');

function cspDirectives(): Map<string, string[]> {
  const match = NETLIFY_TOML.match(/Content-Security-Policy = "([^"]+)"/);
  if (!match) throw new Error('No Content-Security-Policy found in netlify.toml');

  const directives = new Map<string, string[]>();
  for (const part of match[1]!.split(';')) {
    const tokens = part.trim().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) continue;
    directives.set(tokens[0]!, tokens.slice(1));
  }
  return directives;
}

describe('the deployed CSP', () => {
  const csp = cspDirectives();

  it('defaults to self', () => {
    expect(csp.get('default-src')).toEqual(["'self'"]);
  });

  it('keeps the containment directives that bound the unsafe-inline concession', () => {
    expect(csp.get('object-src')).toEqual(["'none'"]);
    expect(csp.get('frame-ancestors')).toEqual(["'none'"]);
    expect(csp.get('base-uri')).toEqual(["'self'"]);
    expect(csp.get('form-action')).toEqual(["'self'"]);
  });

  /*
   * The documented, reasoned exception: under output: 'export' there is no server to mint
   * a per-request nonce, and Next inlines its bootstrap and flight payload into every
   * page. Without 'unsafe-inline' React never hydrates and the failure is silent.
   */
  it('permits inline script, which static export requires, and nothing more', () => {
    expect(csp.get('script-src')).toEqual(["'self'", "'unsafe-inline'"]);
  });

  it("does not permit 'unsafe-eval'", () => {
    for (const [directive, values] of csp) {
      expect(values, directive).not.toContain("'unsafe-eval'");
    }
  });

  /*
   * The check that matters for this phase. The ecosystem bar links OUT to other origins,
   * which needs no directive — a link is a navigation, not a fetch. Nothing about the
   * ecosystem or consent layers may quietly add a script, style, frame or connect origin.
   */
  it('loads no resource from any third-party origin', () => {
    const fetchDirectives = [
      'default-src',
      'script-src',
      'style-src',
      'img-src',
      'font-src',
      'connect-src',
      'object-src',
    ];
    for (const directive of fetchDirectives) {
      for (const value of csp.get(directive) ?? []) {
        expect(
          value.startsWith("'") || value === 'data:',
          `${directive} allows external origin: ${value}`,
        ).toBe(true);
      }
    }
  });

  it('restricts connect-src to self, so no beacon can be sent off-origin', () => {
    expect(csp.get('connect-src')).toEqual(["'self'"]);
  });

  it('upgrades insecure requests', () => {
    expect(csp.has('upgrade-insecure-requests')).toBe(true);
  });
});

describe('the other security headers', () => {
  it('sets the headers the deployment strategy names', () => {
    expect(NETLIFY_TOML).toContain('X-Content-Type-Options = "nosniff"');
    expect(NETLIFY_TOML).toContain('X-Frame-Options = "DENY"');
    expect(NETLIFY_TOML).toContain('Referrer-Policy = "strict-origin-when-cross-origin"');
    expect(NETLIFY_TOML).toContain('Cross-Origin-Opener-Policy = "same-origin"');
  });

  /*
   * Deliberately absent until the domain is confirmed HTTPS-only. Asserted as absent so
   * that adding it becomes a conscious decision with a failing test attached, rather than
   * something that drifts in before the domain is live.
   */
  it('still omits Strict-Transport-Security, pending a live HTTPS domain', () => {
    /*
     * Matched as a header ASSIGNMENT, not as a substring: the file explains at length why
     * the header is deliberately not set yet, and that explanation must not be what makes
     * the test pass or fail.
     */
    expect(NETLIFY_TOML).not.toMatch(/^\s*Strict-Transport-Security\s*=/m);
  });

  it('publishes the static export without an SPA fallback', () => {
    expect(NETLIFY_TOML).toContain('publish = "out"');
    expect(NETLIFY_TOML).not.toMatch(/from = "\/\*"[\s\S]{0,80}to = "\/index\.html"/);
  });

  it('redirects the www host to the apex', () => {
    expect(NETLIFY_TOML).toMatch(/from = "https:\/\/www\.justicecenterid\.com\/\*"/);
    expect(NETLIFY_TOML).toMatch(/to = "https:\/\/justicecenterid\.com\/:splat"/);
    expect(NETLIFY_TOML).toContain('status = 301');
  });
});
