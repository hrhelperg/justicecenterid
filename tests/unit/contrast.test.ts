import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Parses the REAL token values out of globals.css and re-checks every contrast pair
 * documented in docs/design/design-system.md.
 *
 * Reading the stylesheet rather than a duplicated TypeScript copy is deliberate: it means the
 * documented ratios cannot drift from what actually ships.
 */

const CSS = readFileSync(
  fileURLToPath(new URL('../../src/app/globals.css', import.meta.url)),
  'utf8',
);

function token(name: string): string {
  const match = CSS.match(new RegExp(`--color-${name}:\\s*(#[0-9a-fA-F]{6});`));
  if (!match?.[1]) throw new Error(`Token --color-${name} not found in globals.css`);
  return match[1];
}

function luminance(hex: string): number {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * (r ?? 0) + 0.7152 * (g ?? 0) + 0.0722 * (b ?? 0);
}

function contrast(a: string, b: string): number {
  const [l1, l2] = [luminance(a), luminance(b)];
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

/** WCAG 2.2 SC 1.4.3 — normal text requires 4.5:1. */
const TEXT_PAIRS: [string, string, string][] = [
  ['ink', 'surface', 'body text on the page background'],
  ['ink', 'surface-raised', 'body text on raised surfaces'],
  ['ink', 'surface-sunken', 'body text on sunken surfaces'],
  ['ink', 'accent-soft', 'body text on accent callouts'],
  ['ink', 'gold-soft', 'body text on uncertainty callouts'],
  ['ink', 'alert-soft', 'body text on correction callouts'],
  ['ink-muted', 'surface', 'secondary text on the page background'],
  ['ink-muted', 'surface-raised', 'secondary text on raised surfaces'],
  ['ink-subtle', 'surface', 'metadata on the page background'],
  ['brand', 'surface', 'wordmark and eyebrows'],
  ['accent', 'surface', 'links'],
  ['accent', 'surface-raised', 'links on raised surfaces'],
  ['accent-strong', 'surface', 'link hover and focus ring'],
  ['accent-strong', 'accent-soft', 'active navigation text on its background'],
  ['gold', 'surface', 'editorial-state text'],
  ['affirm', 'surface', 'fact-checked state'],
  ['alert', 'surface', 'correction notices'],
  ['ink-inverse', 'surface-inverse', 'footer text'],
  ['ink-inverse-muted', 'surface-inverse', 'secondary footer text'],
  ['accent-inverse', 'surface-inverse', 'links in the footer'],
];

/** WCAG 2.2 SC 1.4.11 — meaningful non-text boundaries require 3:1. */
const NON_TEXT_PAIRS: [string, string, string][] = [
  ['line-strong', 'surface', 'interactive boundaries on the page background'],
  ['line-strong', 'surface-raised', 'interactive boundaries on raised surfaces'],
  ['line-strong', 'surface-sunken', 'interactive boundaries on sunken surfaces'],
  ['accent-strong', 'surface', 'focus ring on light surfaces'],
  ['ink-inverse', 'surface-inverse', 'focus ring on the inverse footer'],
];

describe('colour contrast (WCAG 2.2 AA)', () => {
  it.each(TEXT_PAIRS)('%s on %s meets 4.5:1 — %s', (fg, bg) => {
    const ratio = contrast(token(fg), token(bg));
    expect(ratio, `${fg} on ${bg} is ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(4.5);
  });

  it.each(NON_TEXT_PAIRS)('%s against %s meets 3:1 — %s', (fg, bg) => {
    const ratio = contrast(token(fg), token(bg));
    expect(ratio, `${fg} against ${bg} is ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(3);
  });

  it('declares color-scheme explicitly so browsers do not auto-invert controls', () => {
    expect(CSS).toMatch(/color-scheme:\s*light/);
  });

  it('honours prefers-reduced-motion globally', () => {
    expect(CSS).toMatch(/prefers-reduced-motion:\s*reduce/);
  });
});
