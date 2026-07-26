import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const NL = getDossier('netherlands');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Netherlands dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/nl)', () => {
    expect(NL?.status).toBe('published');
    expect(NL?.countryCode).toBe('NL');
    expect(NL?.slug).toBe('netherlands');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/nl')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/netherlands')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(NL?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(NL!).map((m) => m.moduleId);
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
    for (const m of deferredModules(NL!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/netherlands/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Netherlands-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(NL!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['NL', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/*
 * The two facts that make the Netherlands not a common-law default: prosecution inside the
 * judiciary but under the minister (NOT an independent DPP), and no judicial review of statutes.
 */
describe('Netherlands — the two distinguishing facts', () => {
  it('states the OM is part of the judiciary but under the Minister — not independent', () => {
    const pr = JSON.stringify(getModule(NL!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Openbaar Ministerie|Public Prosecution Service/);
    expect(pr).toMatch(/College van procureurs-generaal|Board of Prosecutors General/);
    expect(pr).toMatch(/make up the judiciary|part of the judiciary/i);
    expect(pr).toMatch(/Minister/);
    expect(pr).toMatch(/not the independent|not an independent|under ministerial/i);
  });

  it('states there is no constitutional court and no review of statutes (Art. 120)', () => {
    const js = JSON.stringify(getModule(NL!, 'justice-system')?.blocks);
    expect(js).toMatch(/120/);
    expect(js).toMatch(/no constitutional court/i);
    expect(js).toMatch(/shall not be reviewed by the courts|not be reviewed/i);
    const co = JSON.stringify(getModule(NL!, 'courts')?.blocks);
    expect(co).toMatch(/Hoge Raad/);
    expect(co).toMatch(/cassation/i);
  });

  it('uses the single national police and its dual authority', () => {
    const le = JSON.stringify(getModule(NL!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Police Act 2012|Politiewet 2012/);
    expect(le).toMatch(/one national police|single national/i);
    expect(le).toMatch(/gezag|authority.*prosecutor|mayor|burgemeester/i);
  });

  it('describes prosecutor-led investigation', () => {
    const inv = JSON.stringify(getModule(NL!, 'investigations')?.blocks);
    expect(inv).toMatch(/prosecutor/i);
    expect(inv).toMatch(
      /in charge of investigations|directs the investigation|prosecutor-led/i,
    );
  });
});

describe('Netherlands jurisdiction record', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const nlRecords = JURISDICTIONS.filter((j) => j.countryCode === 'NL');
    expect(nlRecords.map((j) => j.id)).toEqual(['nl']);
    const nl = getJurisdiction('nl')!;
    expect(nl.level).toBe('country');
    expect(nl.parentJurisdictionId).toBeUndefined();
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(nl[f], `${f}`).toBe('own');
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no accidental province/municipality pages', () => {
    for (const slug of ['holland', 'amsterdam', 'rotterdam']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/netherlands/${slug}`)).toBe(
        false,
      );
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });
});

describe('the published Netherlands restricted claim (national detainee count)', () => {
  const claim = getModule(NL!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('nl-prison-density-2024');
    expect(claim?.category).toBe('detention-capacity');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and the national, single-day scope', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/9,683/);
    expect(claim!.statement).toMatch(/10,344/);
    expect(claim!.statement).toMatch(/93\.6/);
    expect(claim!.limitation).toMatch(/national aggregate|single.*prison system/i);
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
describe('rendered Netherlands HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names the country, and shows the derived demonym', async () => {
    const html = await read('out/countries/netherlands.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in the Netherlands/);
    // F4: independentBodyNoun on the dossier drives the disclosure — "a Dutch government body".
    expect(html).toMatch(/not a Dutch government body/);
    // F1 regression: caption names the Netherlands, not another country.
    expect(html).not.toMatch(/modelled French jurisdiction/);
  });

  it('never emits /countries/nl in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/netherlands</);
    expect(sitemap).not.toMatch(/\/countries\/nl</);
  });
});
