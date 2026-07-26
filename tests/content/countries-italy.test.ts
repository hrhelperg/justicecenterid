import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const IT = getDossier('italy');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Italy dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/it)', () => {
    expect(IT?.status).toBe('published');
    expect(IT?.countryCode).toBe('IT');
    expect(IT?.slug).toBe('italy');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/it')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/italy')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(IT?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(IT!).map((m) => m.moduleId);
    for (const required of [
      'justice-system',
      'law-enforcement',
      'courts',
      'prosecution',
      'investigations',
      'corrections',
      'oversight',
      'sources',
    ]) {
      expect(ids, `required module "${required}" not published`).toContain(required);
    }
    for (const d of ['forensics', 'border-and-customs', 'history', 'timeline']) {
      expect(ids).not.toContain(d);
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferredModules(IT!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/italy/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Italy-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(IT!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['IT', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Italy's distinctive features: prosecution inside the judiciary + mandatory prosecution; three
 * top courts incl. a dedicated constitutional court; multiple national police forces. */
describe('Italy — magistrate-prosecutors, mandatory prosecution, and three top courts', () => {
  it('states the prosecution is part of the judiciary with mandatory prosecution (Art. 112)', () => {
    const pr = JSON.stringify(getModule(IT!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Pubblico Ministero|Public Prosecutor/);
    expect(pr).toMatch(/magistrat/i);
    expect(pr).toMatch(/112/);
    expect(pr).toMatch(/mandatory|obligation to initiate/i);
  });

  it('states a dedicated Constitutional Court plus Cassation and Council of State', () => {
    const co = JSON.stringify(getModule(IT!, 'courts')?.blocks);
    expect(co).toMatch(/Corte Suprema di Cassazione|Court of Cassation/);
    expect(co).toMatch(/Constitutional Court|Corte costituzionale/);
    expect(co).toMatch(/Consiglio di Stato|Council of State/);
    expect(co).toMatch(/134|135/);
  });

  it('states multiple national police forces in prose', () => {
    const le = JSON.stringify(getModule(IT!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Polizia di Stato/);
    expect(le).toMatch(/Carabinieri/);
    expect(le).toMatch(/Guardia di Finanza/);
    expect(le).toMatch(/121/);
    expect(le).toMatch(/polizia locale|local administrative police|municipal/i);
  });

  it('records the proposed 2025 separation-of-careers reform neutrally, not as current law', () => {
    const js = JSON.stringify(getModule(IT!, 'justice-system')?.blocks);
    expect(js).toMatch(/30 October 2025|2025/);
    expect(js).toMatch(/not in force|referendum/i);
    expect(js).toMatch(/138/);
    // must not present it as current law
    expect(js).toMatch(/proposed|NOT in force|not in force/);
  });
});

/* The model result: Italy is unitary for justice despite five special-autonomy regions — the
 * contrast to Finland's Åland. */
describe('Italy — regionalised state, but justice fully national (contrast to Åland)', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const itRecords = JURISDICTIONS.filter((j) => j.countryCode === 'IT');
    expect(itRecords.map((j) => j.id)).toEqual(['it']);
    const record = getJurisdiction('it')!;
    expect(record.level).toBe('country');
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(record[f], `${f}`).toBe('own');
    }
  });

  it('states in prose that the special-autonomy regions hold no justice competence', () => {
    const hub = JSON.stringify(IT!.blocks);
    expect(hub).toMatch(/special autonomy|autonomous/i);
    expect(hub).toMatch(/117/);
    expect(hub).toMatch(/Åland|opposite|entirely national|no.*competence/i);
  });

  it('creates no accidental region pages', () => {
    for (const slug of ['sicily', 'sardinia', 'south-tyrol', 'lombardy']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/italy/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Italy restricted claim (well over capacity)', () => {
  const claim = getModule(IT!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('it-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is above capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/60,637/);
    expect(claim!.statement).toMatch(/51,347/);
    expect(claim!.statement).toMatch(/118\.1/);
    expect(claim!.limitation).toMatch(/above capacity/i);
    expect(claim!.limitation).toMatch(/snapshot|not an average/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Italy HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Italy, and shows the derived demonym', async () => {
    const html = await read('out/countries/italy.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Italy/);
    expect(html).toMatch(/not an Italian government body/);
  });

  it('never emits /countries/it in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/italy</);
    expect(sitemap).not.toMatch(/\/countries\/it</);
  });
});
