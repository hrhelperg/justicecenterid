import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const DK = getDossier('denmark');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Denmark dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/dk)', () => {
    expect(DK?.status).toBe('published');
    expect(DK?.countryCode).toBe('DK');
    expect(DK?.slug).toBe('denmark');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/dk')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/denmark')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(DK?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(DK!).map((m) => m.moduleId);
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
    for (const m of deferredModules(DK!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/denmark/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Denmark-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(DK!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['DK', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Denmark's distinctive features: integrated police+prosecution, one ordinary court system. */
describe('Denmark — integrated police-prosecution and one court system', () => {
  it('states police and prosecution are integrated under the Police Commissioner', () => {
    const pr = JSON.stringify(getModule(DK!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Anklagemyndigheden|Prosecution Service/);
    expect(pr).toMatch(/Ministry of Justice/);
    expect(pr).toMatch(/politidirektør|Police Commissioner/);
    expect(pr).toMatch(/retsplejeloven|Administration of Justice Act/);
    const inv = JSON.stringify(getModule(DK!, 'investigations')?.blocks);
    expect(inv).toMatch(/same office|local prosecutor|integrated/i);
  });

  it('states there is no constitutional or separate administrative court (§63)', () => {
    const co = JSON.stringify(getModule(DK!, 'courts')?.blocks);
    expect(co).toMatch(/Højesteret|Supreme Court/);
    expect(co).toMatch(/no constitutional court/i);
    expect(co).toMatch(/administrative court/i);
    const js = JSON.stringify(getModule(DK!, 'justice-system')?.blocks);
    expect(js).toMatch(/62|independent of the executive/i);
  });

  it('names the independent Police Complaints Authority (2010/2012) in oversight', () => {
    const ov = JSON.stringify(getModule(DK!, 'oversight')?.blocks);
    expect(ov).toMatch(/Police Complaints Authority|Politiklagemyndighed/);
    expect(ov).toMatch(/2012/);
    expect(ov).toMatch(/independent of both the police and the prosecution/i);
    expect(ov).toMatch(/Ombudsman/);
  });
});

describe('Denmark jurisdiction record', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const dkRecords = JURISDICTIONS.filter((j) => j.countryCode === 'DK');
    expect(dkRecords.map((j) => j.id)).toEqual(['dk']);
    const dk = getJurisdiction('dk')!;
    expect(dk.level).toBe('country');
    expect(dk.parentJurisdictionId).toBeUndefined();
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(dk[f], `${f}`).toBe('own');
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Denmark restricted claim', () => {
  const claim = getModule(DK!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('dk-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and the national, single-day scope', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/4,129/);
    expect(claim!.statement).toMatch(/4,397/);
    expect(claim!.statement).toMatch(/93\.9/);
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
describe('rendered Denmark HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Denmark, and shows the derived demonym', async () => {
    const html = await read('out/countries/denmark.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Denmark/);
    expect(html).toMatch(/not a Danish government body/);
  });

  it('never emits /countries/dk in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/denmark</);
    expect(sitemap).not.toMatch(/\/countries\/dk</);
  });
});
