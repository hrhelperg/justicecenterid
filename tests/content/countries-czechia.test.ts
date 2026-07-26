import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const CZ = getDossier('czechia');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Czechia dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/cz)', () => {
    expect(CZ?.status).toBe('published');
    expect(CZ?.countryCode).toBe('CZ');
    expect(CZ?.slug).toBe('czechia');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/cz')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/czechia')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(CZ?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(CZ!).map((m) => m.moduleId);
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
    for (const m of deferredModules(CZ!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/czechia/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Czechia-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(CZ!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['CZ', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Czechia's distinctive features: a tri-apex court structure; a prosecution that is part of the
 * Ministry of Justice; an enacted 2024 insulation reform; no national judicial council. */
describe('Czechia — tri-apex courts, prosecution in the Ministry of Justice, no judicial council', () => {
  it('states three apex courts including a separate Constitutional Court', () => {
    const co = JSON.stringify(getModule(CZ!, 'courts')?.blocks);
    expect(co).toMatch(/Nejvyšší soud|Supreme Court/);
    expect(co).toMatch(/Nejvyšší správní soud|Supreme Administrative Court/);
    expect(co).toMatch(/91/);
    expect(co).toMatch(/three apex|tri-apex|Constitutional Court/i);
  });

  it('states the prosecution is part of the Ministry of Justice (Art. 80, Act 283/1993)', () => {
    const pr = JSON.stringify(getModule(CZ!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Public Prosecutor's Office|státní zastupitelství/);
    expect(pr).toMatch(/part of the Ministry of Justice|component of the executive/i);
    expect(pr).toMatch(/80|283\/1993/);
  });

  it('records the enacted 2024 prosecution reform with its dates, attributed', () => {
    const pr = JSON.stringify(getModule(CZ!, 'prosecution')?.blocks);
    expect(pr).toMatch(/2024/);
    expect(pr).toMatch(/7 March 2024|1 July 2024|seven-year/);
    expect(pr).toMatch(/Rule of Law|Commission/);
  });

  it('states there is no national judicial council', () => {
    const js = JSON.stringify(getModule(CZ!, 'justice-system')?.blocks);
    const ov = JSON.stringify(getModule(CZ!, 'oversight')?.blocks);
    expect(js + ov).toMatch(/no national.*judicial council|no national self-governing/i);
    expect(js + ov).toMatch(/Ministry of Justice/);
  });
});

/* The model result: Czechia is unitary; all justice national; no region record. */
describe('Czechia — unitary, all justice national', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const czRecords = JURISDICTIONS.filter((j) => j.countryCode === 'CZ');
    expect(czRecords.map((j) => j.id)).toEqual(['cz']);
    const record = getJurisdiction('cz')!;
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

  it('states the regional courts and police directorates are national, not regional government', () => {
    const hub =
      JSON.stringify(CZ!.blocks) + JSON.stringify(getModule(CZ!, 'law-enforcement')?.blocks);
    expect(hub).toMatch(/unitary/i);
    expect(hub).toMatch(/national/i);
  });

  it('creates no accidental region pages', () => {
    for (const slug of ['prague', 'moravia', 'bohemia', 'brno']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/czechia/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Czechia restricted claim (just under capacity)', () => {
  const claim = getModule(CZ!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('cz-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is under capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/19,569/);
    expect(claim!.statement).toMatch(/20,301/);
    expect(claim!.statement).toMatch(/96\.4/);
    expect(claim!.limitation).toMatch(/fewer people than its stated capacity/i);
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
describe('rendered Czechia HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Czechia, and shows the derived demonym', async () => {
    const html = await read('out/countries/czechia.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Czechia/);
    expect(html).toMatch(/not a Czech government body/);
  });

  it('never emits /countries/cz in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/czechia</);
    expect(sitemap).not.toMatch(/\/countries\/cz</);
  });
});
