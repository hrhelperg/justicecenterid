import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { JurisdictionRecord, RestrictedClaim } from '@/content/types';

const BE = getDossier('belgium');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Belgium dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/be)', () => {
    expect(BE?.status).toBe('published');
    expect(BE?.countryCode).toBe('BE');
    expect(BE?.slug).toBe('belgium');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/be')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/belgium')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(BE?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(BE!).map((m) => m.moduleId);
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
    for (const m of deferredModules(BE!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/belgium/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Belgium-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(BE!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['BE', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/*
 * The central model finding: federal state, but justice is a FEDERAL competence — the inverse of
 * Germany. Carried entirely by the jurisdiction scope values, with no new schema.
 */
describe('Belgium — federal state, federal justice (the inverse of Germany)', () => {
  it('models Belgium as one federal record with every function own and exclusive-federal', () => {
    const beRecords = JURISDICTIONS.filter((j) => j.countryCode === 'BE');
    expect(beRecords.map((j) => j.id)).toEqual(['be']);
    const be = getJurisdiction('be')!;
    expect(be.level).toBe('federal');
    expect(be.parentJurisdictionId).toBeUndefined();
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(be[f], `${f}`).toBe('own');
    }
    for (const fn of [
      'legal-system',
      'policing',
      'courts',
      'prosecution',
      'corrections',
    ] as const) {
      expect(be.legislativeCompetence?.[fn]).toBe('exclusive-federal');
    }
  });

  it('contrasts with Germany, whose federal record shares the functions', () => {
    const de = getJurisdiction('de')!;
    // Germany: federal but justice devolved → shared. Belgium: federal but centralised → own.
    expect(de.courtScope).toBe('shared');
    expect(getJurisdiction('be')!.courtScope).toBe('own');
  });

  it('states in prose that justice is federal, not a Community/Region competence', () => {
    const js = JSON.stringify(getModule(BE!, 'justice-system')?.blocks);
    expect(js).toMatch(/federal State|federal state/);
    expect(js).toMatch(/for all Belgium/);
    expect(js).toMatch(/inverse of Germany|not devolved|Communities and Regions/i);
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  // Non-vacuity of the federal-parent legislativeCompetence rule reused here.
  it('would reject a researched sub-national record under be without legislativeCompetence', () => {
    const synthetic: JurisdictionRecord = {
      id: 'be-test',
      slug: 'be-test',
      name: 'Test',
      countryCode: 'BE',
      level: 'region',
      parentJurisdictionId: 'be',
      legalSystemScope: 'own',
      policingScope: 'own',
      courtScope: 'own',
      prosecutionScope: 'own',
      correctionalScope: 'own',
      temporalScope: 'current',
      coverage: 'partial',
      sources: ['be-constitution'],
      status: 'draft',
    };
    expect(validateJurisdiction(synthetic, [...JURISDICTIONS, synthetic]).join(' ')).toMatch(
      /must declare legislativeCompetence/,
    );
  });
});

describe('Belgium — three top courts and the Supreme Court translation point', () => {
  it('distinguishes the Court of Cassation, Constitutional Court, and Council of State', () => {
    const co = JSON.stringify(getModule(BE!, 'courts')?.blocks);
    expect(co).toMatch(/Court of Cassation|Hof van Cassatie|Cour de cassation/);
    expect(co).toMatch(/Constitutional Court|Grondwettelijk Hof|Cour constitutionnelle/);
    expect(co).toMatch(/Council of State|Raad van State|Conseil d'État/);
    expect(co).toMatch(/five courts of appeal|Antwerp/);
  });

  it('surfaces the official "Supreme Court" translation of Article 147', () => {
    const js = JSON.stringify(getModule(BE!, 'justice-system')?.blocks);
    expect(js).toMatch(/Supreme Court/);
    expect(js).toMatch(/147/);
    expect(js).toMatch(/translation/i);
  });
});

describe('Belgium — prosecution and police', () => {
  it('states the prosecutor is independent in the case but the minister may order prosecutions', () => {
    const pr = JSON.stringify(getModule(BE!, 'prosecution')?.blocks);
    expect(pr).toMatch(/151/);
    expect(pr).toMatch(/independent in conducting individual|independent in deciding/i);
    expect(pr).toMatch(/order prosecutions|criminal policy/i);
    expect(pr).toMatch(/parket|parquet|standing judges|magistrature debout/);
  });

  it('states the integrated two-level police under the 1998 law', () => {
    const le = JSON.stringify(getModule(BE!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/7 December 1998|1998/);
    expect(le).toMatch(/two levels|integrated police/i);
    expect(le).toMatch(/federal.*local|gendarmerie/i);
  });
});

describe('the published Belgium restricted claim (over capacity)', () => {
  const claim = getModule(BE!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('be-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is above capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/12,041/);
    expect(claim!.statement).toMatch(/10,680/);
    expect(claim!.statement).toMatch(/112\.7/);
    expect(claim!.limitation).toMatch(/above capacity/i);
    expect(claim!.limitation).toMatch(/snapshot|not an average/i);
    expect(claim!.limitation).toMatch(/comparison|comparab/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Belgium HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Belgium, and shows the derived demonym and accents', async () => {
    const html = await read('out/countries/belgium.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Belgium/);
    expect(html).toMatch(/not a Belgian government body/);
    const co = await read('out/countries/belgium/courts.html');
    expect(co).toMatch(/Cour de cassation|Conseil d'État/);
  });

  it('never emits /countries/be or a region route in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/belgium</);
    expect(sitemap).not.toMatch(/\/countries\/be</);
    for (const slug of ['flanders', 'wallonia', 'brussels']) {
      expect(sitemap).not.toMatch(new RegExp(`/countries/belgium/${slug}<`));
    }
  });
});
