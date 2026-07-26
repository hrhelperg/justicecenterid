import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const FI = getDossier('finland');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Finland dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/fi)', () => {
    expect(FI?.status).toBe('published');
    expect(FI?.countryCode).toBe('FI');
    expect(FI?.slug).toBe('finland');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/fi')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/finland')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(FI?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(FI!).map((m) => m.moduleId);
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
    for (const m of deferredModules(FI!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/finland/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Finland-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(FI!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['FI', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Finland's distinctive features: twin apex courts, two guardians of legality, police under the
 * Interior ministry, and the Åland asymmetry. */
describe('Finland — twin apex courts, two guardians, and a police service in another ministry', () => {
  it('states two supreme courts and no constitutional court', () => {
    const co = JSON.stringify(getModule(FI!, 'courts')?.blocks);
    expect(co).toMatch(/Supreme Court|korkein oikeus/);
    expect(co).toMatch(/Supreme Administrative Court|korkein hallinto-oikeus/);
    expect(co).toMatch(/two (branches|apex|supreme)/i);
    expect(co).toMatch(/no constitutional court/i);
  });

  it('names both guardians of legality (Chancellor of Justice and Parliamentary Ombudsman)', () => {
    const ov = JSON.stringify(getModule(FI!, 'oversight')?.blocks);
    expect(ov).toMatch(/Chancellor of Justice|oikeuskansleri/);
    expect(ov).toMatch(/Parliamentary Ombudsman|oikeusasiamies/);
    expect(ov).toMatch(/108/);
    expect(ov).toMatch(/109/);
  });

  it('states the police sit under the Ministry of the Interior', () => {
    const le = JSON.stringify(getModule(FI!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Ministry of the Interior/);
    expect(le).toMatch(/National Police Board|Poliisihallitus/);
    expect(le).toMatch(/different ministry|Ministry of Justice/);
  });

  it('states the prosecution is decisionally independent within the Ministry of Justice branch', () => {
    const pr = JSON.stringify(getModule(FI!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Syyttäjälaitos|National Prosecution Authority/);
    expect(pr).toMatch(/32\/2019/);
    expect(pr).toMatch(/administrative branch of the Ministry of Justice/);
    expect(pr).toMatch(/President of the Republic/);
  });
});

/* The model-pressure feature: Åland validates the autonomous-community level by reuse. */
describe('Finland — the Åland asymmetry (autonomous-community reused)', () => {
  it('models Finland as fi (country) plus fi-aland (autonomous-community)', () => {
    const fiRecords = JURISDICTIONS.filter((j) => j.countryCode === 'FI');
    expect(fiRecords.map((j) => j.id).sort()).toEqual(['fi', 'fi-aland']);
    const fi = getJurisdiction('fi')!;
    expect(fi.level).toBe('country');
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(fi[f], `fi ${f}`).toBe('own');
    }
  });

  it('gives Åland own policing but national courts/prosecution/corrections', () => {
    const aland = getJurisdiction('fi-aland')!;
    expect(aland.level).toBe('autonomous-community');
    expect(aland.parentJurisdictionId).toBe('fi');
    expect(aland.policingScope).toBe('own');
    expect(aland.courtScope).toBe('national');
    expect(aland.prosecutionScope).toBe('national');
    expect(aland.correctionalScope).toBe('national');
    expect(aland.legislativeCompetence?.policing).toBe('exclusive-subnational');
  });

  it('does not create a public Åland page', () => {
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/aland')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/finland/aland')).toBe(false);
  });

  it('explains the Åland competence split in the law-enforcement prose', () => {
    const le = JSON.stringify(getModule(FI!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Åland/);
    expect(le).toMatch(/18\(6\)|public order and security/);
    expect(le).toMatch(/Section 27|reserved to the State|criminal law/i);
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Finland restricted claim (over capacity)', () => {
  const claim = getModule(FI!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('fi-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is above capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/3,041/);
    expect(claim!.statement).toMatch(/2,958/);
    expect(claim!.statement).toMatch(/102\.8/);
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
describe('rendered Finland HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Finland, the demonym, and the Åland row with accents', async () => {
    const html = await read('out/countries/finland.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Finland/);
    expect(html).toMatch(/not a Finnish government body/);
    // The Åland jurisdiction row appears in the hub table, with its accented name.
    expect(html).toMatch(/Åland/);
  });

  it('never emits /countries/fi or an Åland route in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/finland</);
    expect(sitemap).not.toMatch(/\/countries\/fi</);
    expect(sitemap).not.toMatch(/\/countries\/aland</);
  });
});
