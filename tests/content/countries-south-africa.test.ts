import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const ZA = getDossier('south-africa');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('South Africa dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/za)', () => {
    expect(ZA?.status).toBe('published');
    expect(ZA?.countryCode).toBe('ZA');
    expect(ZA?.slug).toBe('south-africa');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/za')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/south-africa')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(ZA?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(ZA!).map((m) => m.moduleId);
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
    for (const m of deferredModules(ZA!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/south-africa/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only South Africa-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(ZA!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['ZA', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Distinctive: constitutional supremacy (courts can strike down); ConCourt apex all matters;
 * NPA single national under the Justice Minister's final responsibility; rich oversight. */
describe('South Africa — constitutional supremacy, ConCourt apex, single national NPA', () => {
  it('states constitutional supremacy — courts can strike down statutes (contrast NZ)', () => {
    const js = JSON.stringify(getModule(ZA!, 'justice-system')?.blocks);
    const co = JSON.stringify(getModule(ZA!, 'courts')?.blocks);
    expect(js).toMatch(/supreme law|supremacy/i);
    expect(js + co).toMatch(/strike down|invalidate|declare legislation invalid/i);
    expect(js + co).toMatch(/New Zealand|parliamentary sovereignty/);
  });

  it('states the Constitutional Court is the apex for all matters (since 2013)', () => {
    const co = JSON.stringify(getModule(ZA!, 'courts')?.blocks);
    expect(co).toMatch(/Constitutional Court/);
    expect(co).toMatch(/highest court|apex/i);
    expect(co).toMatch(/Seventeenth Amendment|2013|all matters/);
    expect(co).toMatch(/Supreme Court of Appeal/);
  });

  it("states a single national prosecuting authority under the Justice Minister's final responsibility", () => {
    const pr = JSON.stringify(getModule(ZA!, 'prosecution')?.blocks);
    expect(pr).toMatch(/single national prosecuting authority|National Prosecuting Authority/);
    expect(pr).toMatch(/179/);
    expect(pr).toMatch(/without fear, favour/i);
    expect(pr).toMatch(/final responsibility/i);
  });

  it('states the rich oversight set (Public Protector, JSC, IPID, JICS)', () => {
    const ov = JSON.stringify(getModule(ZA!, 'oversight')?.blocks);
    expect(ov).toMatch(/Public Protector/);
    expect(ov).toMatch(/Judicial Service Commission/);
    expect(ov).toMatch(/Independent Police Investigative Directorate|IPID/);
    expect(ov).toMatch(/Judicial Inspectorate for Correctional Services|JICS/);
  });
});

/* The model result: quasi-federal but justice national — one country record, no sub-national. */
describe('South Africa — quasi-federal, but all justice national (no sub-national record)', () => {
  it('is a single country-level record with all functions own', () => {
    const zaRecords = JURISDICTIONS.filter((j) => j.countryCode === 'ZA');
    expect(zaRecords.map((j) => j.id)).toEqual(['za']);
    const record = getJurisdiction('za')!;
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

  it('states provinces hold only police oversight, not their own justice functions', () => {
    const le =
      JSON.stringify(getModule(ZA!, 'law-enforcement')?.blocks) + JSON.stringify(ZA!.blocks);
    expect(le).toMatch(/oversight|monitor/i);
    expect(le).toMatch(/provinc/i);
    expect(le).toMatch(/single national|no.*own force|not command/i);
  });

  it('creates no accidental province pages', () => {
    for (const slug of ['gauteng', 'western-cape', 'kwazulu-natal', 'johannesburg']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/south-africa/${slug}`)).toBe(
        false,
      );
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published South Africa restricted claim (severe overcrowding)', () => {
  const claim = getModule(ZA!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('za-prison-density-2026');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact WPB figure and that it is well above capacity', () => {
    expect(claim!.metricPeriod).toBe('2026-02-26');
    expect(claim!.statement).toMatch(/168,672/);
    expect(claim!.statement).toMatch(/107,067/);
    expect(claim!.statement).toMatch(/157\.5%/);
    expect(claim!.statement).toMatch(/above capacity/i);
    expect(claim!.limitation).toMatch(/snapshot|not an? .*average/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered South Africa HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names South Africa, and shows the derived demonym', async () => {
    const html = await read('out/countries/south-africa.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in South Africa/);
    expect(html).toMatch(/not a South African government body/);
  });

  it('never emits /countries/za in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/south-africa</);
    expect(sitemap).not.toMatch(/\/countries\/za</);
  });
});
