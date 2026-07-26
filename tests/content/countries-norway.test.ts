import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const NO = getDossier('norway');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Norway dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/no)', () => {
    expect(NO?.status).toBe('published');
    expect(NO?.countryCode).toBe('NO');
    expect(NO?.slug).toBe('norway');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/no')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/norway')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(NO?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(NO!).map((m) => m.moduleId);
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
    for (const m of deferredModules(NO!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/norway/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Norway-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(NO!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['NO', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Norway's distinctive features: a prosecution the minister cannot instruct; no constitutional court. */
describe('Norway — independent prosecution and constitutional review by ordinary courts', () => {
  it('states only the King in Council (not the minister) may instruct the prosecution', () => {
    const pr = JSON.stringify(getModule(NO!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Påtalemyndigheten|Prosecution Authority/);
    expect(pr).toMatch(/Riksadvokaten|Director of Public Prosecutions/);
    expect(pr).toMatch(/King in Council/);
    expect(pr).toMatch(/independent/i);
    expect(pr).toMatch(/embedded (in|inside) the police|inside the police|police lawyers/i);
  });

  it('states constitutional review is by the ordinary courts (Art. 89), no constitutional court', () => {
    const js = JSON.stringify(getModule(NO!, 'justice-system')?.blocks);
    expect(js).toMatch(/89/);
    expect(js).toMatch(/no (separate )?constitutional court/i);
    const co = JSON.stringify(getModule(NO!, 'courts')?.blocks);
    expect(co).toMatch(/Høyesterett|Supreme Court/);
    expect(co).toMatch(/23 district courts|six courts of appeal/);
  });

  it('records the 2016 proximity-police reform (27 to 12 districts) in prose', () => {
    const le = JSON.stringify(getModule(NO!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/twelve|12/);
    expect(le).toMatch(/27|twenty-seven/);
    expect(le).toMatch(/2016|nærpolitireformen|proximity-police/i);
  });

  it('names the independent Bureau for the Investigation of Police Affairs in oversight', () => {
    const ov = JSON.stringify(getModule(NO!, 'oversight')?.blocks);
    expect(ov).toMatch(/Spesialenheten|Investigation of Police Affairs/);
    expect(ov).toMatch(/Sivilombudet|Parliamentary Ombud/);
  });
});

describe('Norway jurisdiction record', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const noRecords = JURISDICTIONS.filter((j) => j.countryCode === 'NO');
    expect(noRecords.map((j) => j.id)).toEqual(['no']);
    const no = getJurisdiction('no')!;
    expect(no.level).toBe('country');
    expect(no.parentJurisdictionId).toBeUndefined();
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(no[f], `${f}`).toBe('own');
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Norway restricted claim (lowest density in the batch)', () => {
  const claim = getModule(NO!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('no-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and the national, single-day scope', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/3,004/);
    expect(claim!.statement).toMatch(/3,616/);
    expect(claim!.statement).toMatch(/83\.1/);
    expect(claim!.limitation).toMatch(/national aggregate|single.*system/i);
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
describe('rendered Norway HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Norway, and shows the derived demonym', async () => {
    const html = await read('out/countries/norway.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Norway/);
    expect(html).toMatch(/not a Norwegian government body/);
  });

  it('never emits /countries/no in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/norway</);
    expect(sitemap).not.toMatch(/\/countries\/no</);
  });
});
