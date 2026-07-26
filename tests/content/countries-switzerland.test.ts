import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { getScheduledChange, validateScheduledChange } from '@/content/scheduled-changes';
import { SOURCES } from '@/content/sources';
import type { JurisdictionRecord, RestrictedClaim } from '@/content/types';

const CH = getDossier('switzerland');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Switzerland dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/ch)', () => {
    expect(CH?.status).toBe('published');
    expect(CH?.countryCode).toBe('CH');
    expect(CH?.slug).toBe('switzerland');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/ch')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/switzerland')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(CH?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set and defers the rest', () => {
    const ids = publishedModules(CH!).map((m) => m.moduleId);
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
    for (const m of deferredModules(CH!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/switzerland/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Switzerland-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(CH!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['CH', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/*
 * CANTONAL FEDERALISM — full reuse. Cantons are reserved-powers with federal (national) law,
 * modelled at the `state` tier; corrections are `shared` (concordat pooling), not `contracted`.
 */
describe('Switzerland cantonal federalism (full reuse, no new schema)', () => {
  it('models the Confederation as federal with unified law (own) and shared functions', () => {
    const ch = getJurisdiction('ch')!;
    expect(ch.level).toBe('federal');
    expect(ch.legalSystemScope).toBe('own');
    for (const f of [
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(ch[f]).toBe('shared');
    }
    expect(ch.legislativeCompetence?.['legal-system']).toBe('exclusive-federal');
  });

  it('models each canton at the state tier: reserved-powers, national law, own institutions', () => {
    for (const id of ['ch-zurich', 'ch-geneva', 'ch-ticino']) {
      const c = getJurisdiction(id)!;
      expect(c.level, `${id} level`).toBe('state');
      expect(c.authorityBasis, `${id} authorityBasis`).toBe('reserved-powers');
      // Federal unified codes → the canton has no legal system of its own.
      expect(c.legalSystemScope, `${id} legalSystem`).toBe('national');
      expect(c.policingScope).toBe('own');
      expect(c.courtScope).toBe('own');
      expect(c.prosecutionScope).toBe('own');
    }
  });

  it('records the concordats as `shared` corrections, NOT `contracted`', () => {
    for (const id of ['ch-zurich', 'ch-geneva', 'ch-ticino']) {
      expect(getJurisdiction(id)!.correctionalScope, `${id} corrections`).toBe('shared');
      expect(getJurisdiction(id)!.correctionalScope).not.toBe('contracted');
    }
    const corr = JSON.stringify(getModule(CH!, 'corrections')?.blocks);
    expect(corr).toMatch(/concordat/i);
    expect(corr).toMatch(/PEER arrangement|pool|pooling/i);
    expect(corr).toMatch(/not.*procuring|not.*another order|shared/i);
  });

  it('states there is no national police force and fedpol is not superordinate', () => {
    const le = JSON.stringify(getModule(CH!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/does not have a national police|no national general police/i);
    expect(le).toMatch(/not a superordinate authority|not.*sitting above/i);
    expect(le).toMatch(/fedpol/i);
  });

  it('is valid, and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no accidental canton pages', () => {
    for (const slug of ['zurich', 'geneva', 'ticino']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/switzerland/${slug}`)).toBe(
        false,
      );
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  // Non-vacuity of the federal-parent legislativeCompetence rule.
  it('rejects a researched canton that omits legislativeCompetence', () => {
    const { legislativeCompetence: _d, ...bare } = getJurisdiction('ch-zurich')!;
    expect(validateJurisdiction(bare as JurisdictionRecord, JURISDICTIONS).join(' ')).toMatch(
      /must declare legislativeCompetence/,
    );
  });
});

describe('Switzerland — multilingual and unified procedure in prose', () => {
  it('names the Federal Supreme Court across the three official languages', () => {
    const co = JSON.stringify(getModule(CH!, 'courts')?.blocks);
    expect(co).toMatch(/Bundesgericht/);
    expect(co).toMatch(/Tribunal fédéral/);
    expect(co).toMatch(/Tribunale federale/);
  });

  it('states the criminal law is federal but the courts/prosecution are cantonal', () => {
    const js = JSON.stringify(getModule(CH!, 'justice-system')?.blocks);
    expect(js).toMatch(/art(icle)?\.?\s*122|art(icle)?\.?\s*123/);
    expect(js).toMatch(/one Criminal Code|federal.*unified|unified.*federal/i);
    const pr = JSON.stringify(getModule(CH!, 'prosecution')?.blocks);
    expect(pr).toMatch(/cantonal/i);
    expect(pr).toMatch(/Office of the Attorney General|Bundesanwaltschaft/);
  });
});

/*
 * THE SCHEDULED CHANGE — the referendum / staged-commencement test. The BEKJ exercises the
 * `pending` lifecycle and shows direct democracy needs no new field.
 */
describe('Switzerland scheduled change (BEKJ / Justitia 4.0)', () => {
  const change = getScheduledChange('ch-bekj-justitia40-2027');

  it('exists as a pending, enacted-with-date change', () => {
    expect(change).toBeDefined();
    expect(change!.status).toBe('pending');
    expect(change!.effectiveOn).toBe('2027-07-01');
    expect(change!.enactedOn).toBe('2024-12-20');
    expect(change!.certainty).toBe('enacted-with-date');
  });

  it('is valid as at today (the change is still in the future)', () => {
    expect(
      validateScheduledChange(change!, { today: '2026-07-26', knownSourceIds: SOURCE_IDS }),
    ).toEqual([]);
  });

  it('records the direct-democracy step in prose, with no directDemocracy field', () => {
    expect(change!.notes).toMatch(/referendum/i);
    expect('directDemocracy' in change!).toBe(false);
    // The justice-system module describes it for readers.
    const js = JSON.stringify(getModule(CH!, 'justice-system')?.blocks);
    expect(js).toMatch(/Justitia 4\.0|electronic|referendum/i);
  });

  it('resolves its source', () => {
    for (const id of change!.sources) {
      expect(SOURCE_IDS).toContain(id);
    }
  });
});

describe('the published Switzerland restricted claim (national detainee count)', () => {
  const claim = getModule(CH!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('ch-detainees-2026');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact figure and the cantonal/reference-day scope', () => {
    expect(claim!.metricPeriod).toBe('2026-01-31');
    expect(claim!.statement).toMatch(/7,119/);
    expect(claim!.limitation).toMatch(/no federal prison|cantonal/i);
    expect(claim!.limitation).toMatch(/census|single-reference-day/i);
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
describe('rendered Switzerland HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names the actual country, and shows accents', async () => {
    const html = await read('out/countries/switzerland.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).not.toMatch(/not about Spain/);
    expect(html).toMatch(/not about\s*Switzerland/);
    expect(html).toMatch(/<html lang="en"/);
    const co = await read('out/countries/switzerland/courts.html');
    expect(co).toMatch(/Tribunal fédéral/);
  });

  it('never emits /countries/ch or a canton route in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/switzerland</);
    expect(sitemap).not.toMatch(/\/countries\/ch</);
    for (const slug of ['zurich', 'geneva', 'ticino']) {
      expect(sitemap).not.toMatch(new RegExp(`/countries/switzerland/${slug}<`));
    }
  });
});
