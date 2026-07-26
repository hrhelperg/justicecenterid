import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { JurisdictionRecord, RestrictedClaim } from '@/content/types';

const AU = getDossier('australia');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Australia dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/au)', () => {
    expect(AU?.status).toBe('published');
    expect(AU?.countryCode).toBe('AU');
    expect(AU?.slug).toBe('australia');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/au')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/australia')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(AU?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set and defers the rest', () => {
    const ids = publishedModules(AU!).map((m) => m.moduleId);
    for (const required of [
      'justice-system',
      'law-enforcement',
      'courts',
      'prosecution',
      'investigations',
      'corrections',
      'sources',
    ]) {
      expect(ids, `required module "${required}" not published`).toContain(required);
    }
    for (const d of ['forensics', 'border-and-customs', 'oversight', 'history', 'timeline']) {
      expect(ids).not.toContain(d);
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferredModules(AU!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/australia/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Australia-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(AU!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['AU', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/*
 * THE CONTRACT-POLICING TEST — Australia is the second, independent instance. The ACT/AFP case
 * must reuse `contracted`; the NT (its own force) must stay `own`. This is what earns the value.
 */
describe('Australia validates the `contracted` scope (AFP/ACT) — earned by repetition', () => {
  it('marks the ACT `contracted` (AFP delivers its policing) and the NT `own`', () => {
    expect(getJurisdiction('au-act')!.policingScope).toBe('contracted');
    expect(getJurisdiction('au-nt')!.policingScope).toBe('own');
    expect(getJurisdiction('au-nsw')!.policingScope).toBe('own');
  });

  it('reuses the value with no new schema and no relationship graph', () => {
    // No new relationship field on the record or the dossier.
    expect('serviceArrangements' in getJurisdiction('au-act')!).toBe(false);
    expect('relationships' in (AU as object)).toBe(false);
    const le = JSON.stringify(getModule(AU!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Australian Federal Police|AFP/);
    expect(le).toMatch(/on behalf of the ACT Government/);
    expect(le).toMatch(/community policing arm/);
    expect(le).toMatch(/Northern Territory Police/);
    // Explicitly ties it back to the Canada value.
    expect(le).toMatch(/contracted/);
  });

  it('states the ACT does not own a force and the NT does — the discrimination the value exists for', () => {
    const le = JSON.stringify(getModule(AU!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/does not own a force|runs no police of its own|no police of its own/i);
    expect(le).toMatch(/runs its OWN police|its own police force|its own force/i);
  });
});

/*
 * AUSTRALIA vs CANADA — the sharp contrast on the source-of-power axis. Australia is US-like:
 * states retain residual power (s.107) and write their own criminal law.
 */
describe('Australia federal / state / territory model (US-like, unlike Canada)', () => {
  it('is a federation with shared functions and residual power reserved to the states', () => {
    const au = getJurisdiction('au')!;
    expect(au.level).toBe('federal');
    for (const f of [
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(au[f]).toBe('shared');
    }
  });

  it('models states as reserved-powers with their own legal system (own criminal law)', () => {
    const nsw = getJurisdiction('au-nsw')!;
    expect(nsw.level).toBe('state');
    expect(nsw.authorityBasis).toBe('reserved-powers');
    // Unlike Canada (national), Australian states have their OWN legal system.
    expect(nsw.legalSystemScope).toBe('own');
  });

  it('models both territories as federal-plenary (self-governing under Commonwealth statute)', () => {
    for (const id of ['au-act', 'au-nt']) {
      const t = getJurisdiction(id)!;
      expect(t.level).toBe('territory');
      expect(t.authorityBasis).toBe('federal-plenary');
    }
  });

  it('states in prose that residual power sits with the states, unlike Canada', () => {
    const js = JSON.stringify(getModule(AU!, 'justice-system')?.blocks);
    expect(js).toMatch(/s\.107|Section 107/);
    expect(js).toMatch(/no national criminal code/i);
    expect(js).toMatch(/inverse of Canada|opposite of Canada|United States/i);
  });

  it('is valid, and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no accidental state or territory pages', () => {
    for (const slug of [
      'new-south-wales',
      'australian-capital-territory',
      'northern-territory',
    ]) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/australia/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('rejects a researched state that omits legislativeCompetence (non-vacuous)', () => {
    const { legislativeCompetence: _d, ...bare } = getJurisdiction('au-nsw')!;
    expect(validateJurisdiction(bare as JurisdictionRecord, JURISDICTIONS).join(' ')).toMatch(
      /must declare legislativeCompetence/,
    );
  });
});

describe('the published Australia restricted claim (national prisoner census)', () => {
  const claim = getModule(AU!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('au-prisoners-2025');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact figures and the state/territory-administered scope', () => {
    expect(claim!.metricPeriod).toBe('2025-06-30');
    expect(claim!.statement).toMatch(/46,998/);
    expect(claim!.statement).toMatch(/27,051/);
    expect(claim!.statement).toMatch(/19,850/);
    expect(claim!.limitation).toMatch(/no Commonwealth prison|state and territory/i);
    expect(claim!.limitation).toMatch(/census|single-day/i);
    expect(claim!.limitation).toMatch(/comparison/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Australia HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the correct facts-verified date and names the actual country', async () => {
    const html = await read('out/countries/australia.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).not.toMatch(/not about Canada/);
    expect(html).not.toMatch(/not about France/);
    expect(html).toMatch(/not about\s*Australia/);
    expect(html).toMatch(/<html lang="en"/);
  });

  it('never emits /countries/au or a state/territory route in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/australia</);
    expect(sitemap).not.toMatch(/\/countries\/au</);
    for (const slug of [
      'new-south-wales',
      'australian-capital-territory',
      'northern-territory',
    ]) {
      expect(sitemap).not.toMatch(new RegExp(`/countries/australia/${slug}<`));
    }
    for (const m of ['oversight', 'forensics', 'border-and-customs', 'history', 'timeline']) {
      expect(sitemap).not.toMatch(new RegExp(`/countries/australia/${m}<`));
    }
  });
});
