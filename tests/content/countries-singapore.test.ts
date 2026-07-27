import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const SG = getDossier('singapore');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Singapore dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/sg)', () => {
    expect(SG?.status).toBe('published');
    expect(SG?.countryCode).toBe('SG');
    expect(SG?.slug).toBe('singapore');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/sg')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/singapore')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(SG?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(SG!).map((m) => m.moduleId);
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
    for (const m of deferredModules(SG!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/singapore/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Singapore-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(SG!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['SG', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Distinctive: AG = adviser + Public Prosecutor fusion; diffuse review, no constitutional court;
 * honestly recorded oversight absences. */
describe('Singapore — the Attorney-General is the Public Prosecutor', () => {
  it('states the adviser + prosecutor fusion (Arts. 35(7)/(8), CPC s 11)', () => {
    const pr =
      JSON.stringify(getModule(SG!, 'prosecution')?.blocks) + JSON.stringify(SG!.blocks);
    expect(pr).toMatch(/Attorney-General/);
    expect(pr).toMatch(/Public Prosecutor/);
    expect(pr).toMatch(/35\(7\)/);
    expect(pr).toMatch(/35\(8\)/);
    expect(pr).toMatch(/section 11|CPC|Criminal Procedure Code/);
    expect(pr).toMatch(/fus/i);
  });

  it('states diffuse review with no dedicated constitutional court', () => {
    const js = JSON.stringify(getModule(SG!, 'justice-system')?.blocks);
    const co = JSON.stringify(getModule(SG!, 'courts')?.blocks);
    expect(js + co).toMatch(/diffuse/i);
    expect(js + co).toMatch(/no dedicated constitutional court|no.*constitutional court/i);
    expect(co).toMatch(/Court of Appeal/);
  });

  it('records the oversight absences as researched negatives', () => {
    const ov = JSON.stringify(getModule(SG!, 'oversight')?.blocks);
    expect(ov).toMatch(/no general.*ombudsman/i);
    expect(ov).toMatch(/no.*human-rights institution|no.*national human-rights/i);
    expect(ov).toMatch(/no.*police-complaints/i);
    expect(ov).toMatch(/CPIB|Corrupt Practices Investigation Bureau/);
  });
});

/* Model result: unitary city-state, single national bodies, no sub-national record. */
describe('Singapore — unitary city-state, all justice national', () => {
  it('is a single country-level record with all functions own', () => {
    const sgRecords = JURISDICTIONS.filter((j) => j.countryCode === 'SG');
    expect(sgRecords.map((j) => j.id)).toEqual(['sg']);
    const record = getJurisdiction('sg')!;
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

  it('creates no accidental sub-national pages', () => {
    for (const slug of ['jurong', 'tampines', 'woodlands']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/singapore/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Singapore restricted claim (no current capacity → no occupancy)', () => {
  const claim = getModule(SG!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention claim', () => {
    expect(claim?.id).toBe('sg-prison-population-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the population and rate but makes no current occupancy/density claim', () => {
    expect(claim!.metricPeriod).toBe('2024-12-31');
    expect(claim!.statement).toMatch(/10,792/);
    expect(claim!.statement).toMatch(/178/);
    expect(claim!.statement).toMatch(/2013/);
    expect(claim!.limitation).toMatch(/no occupancy or density/i);
    expect(claim!.statement).not.toMatch(/79\.2|occupancy level of/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Singapore HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Singapore, and shows the derived demonym', async () => {
    const html = await read('out/countries/singapore.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Singapore/);
    expect(html).toMatch(/not a Singaporean government body/);
  });

  it('never emits /countries/sg in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/singapore</);
    expect(sitemap).not.toMatch(/\/countries\/sg</);
  });
});
