import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const PL = getDossier('poland');
const SOURCE_IDS = SOURCES.map((s) => s.id);

/** Everything a reader could see, as one blob, for the neutrality scan. */
const ALL_PL_PROSE =
  JSON.stringify(PL!.blocks) +
  JSON.stringify(PL!.modules.map((m) => m.blocks)) +
  JSON.stringify(PL!.summary);

describe('Poland dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/pl)', () => {
    expect(PL?.status).toBe('published');
    expect(PL?.countryCode).toBe('PL');
    expect(PL?.slug).toBe('poland');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/pl')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/poland')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(PL?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(PL!).map((m) => m.moduleId);
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
    for (const m of deferredModules(PL!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/poland/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Poland-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(PL!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['PL', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Poland's distinctive features: prosecution head = Minister of Justice; three separate top bodies;
 * the contested-governance material handled strictly by dated attribution. */
describe('Poland — Prosecutor-General is the Minister of Justice, three top bodies', () => {
  it('states the Prosecutor-General is held by the Minister of Justice (Art. 1 §2)', () => {
    const pr = JSON.stringify(getModule(PL!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Prosecutor-General/);
    expect(pr).toMatch(/Minister of Justice/);
    expect(pr).toMatch(/personal union|Article 1 § 2|§ 2/);
    expect(pr).toMatch(/statutory|no dedicated basis|not.*constitution/i);
  });

  it('states three separate top bodies including the Constitutional Tribunal', () => {
    const co = JSON.stringify(getModule(PL!, 'courts')?.blocks);
    expect(co).toMatch(/Sąd Najwyższy|Supreme Court/);
    expect(co).toMatch(/Naczelny Sąd Administracyjny|Administrative Court/);
    expect(co).toMatch(/Trybunał Konstytucyjny|Constitutional Tribunal/);
    expect(co).toMatch(/188|190/);
  });

  it('carries the NSA naming caveat honestly (both renderings)', () => {
    const co = JSON.stringify(getModule(PL!, 'courts')?.blocks);
    expect(co).toMatch(/Chief Administrative Court/);
    expect(co).toMatch(/Supreme Administrative Court/);
  });
});

/* The neutrality discipline — enacted facts stated with statute; contested assessments only by
 * dated attribution; NO partisan language anywhere in the reader-facing prose. */
describe('Poland — strict neutrality on the contested judiciary question', () => {
  it('states the enacted 2017 KRS change factually, with its statutory basis', () => {
    const ov = JSON.stringify(getModule(PL!, 'oversight')?.blocks);
    expect(ov).toMatch(/National Council of the Judiciary|Krajowa Rada Sądownictwa/);
    expect(ov).toMatch(/2017|Dz\.U\. 2018 poz\. 3|Article 9a/);
    expect(ov).toMatch(/Sejm/);
    expect(ov).toMatch(/assemblies of judges/);
  });

  it('carries the contested assessment only by dated attribution (CJEU + Commission)', () => {
    const ov = JSON.stringify(getModule(PL!, 'oversight')?.blocks);
    expect(ov).toMatch(/C-204\/21|Court of Justice/);
    expect(ov).toMatch(/5 June 2023/);
    expect(ov).toMatch(/2025 Rule of Law Report|European Commission/);
    expect(ov).toMatch(/takes no position|adds no view|attributed/i);
  });

  it('distinguishes proposed from enacted (PG–MoJ separation is "yet to be adopted")', () => {
    const pr = JSON.stringify(getModule(PL!, 'prosecution')?.blocks);
    expect(pr).toMatch(/yet to be adopted|proposed, not enacted|still stands/i);
  });

  it('contains no partisan or characterising language anywhere reader-facing', () => {
    const forbidden = [
      /\bcaptured?\b/i,
      /\bbacksliding\b/i,
      /\bauthoritarian\b/i,
      /\bPiS\b/,
      /\bLaw and Justice\b/,
      /\billiberal\b/i,
      /\bpoliticis(?:ed|ation)\b/i,
      /\bpurge\b/i,
      /\bcrisis\b/i,
      /\bassault on\b/i,
      /\bpacking\b/i,
    ];
    for (const rx of forbidden) {
      expect(ALL_PL_PROSE, `partisan/characterising term matched ${rx}`).not.toMatch(rx);
    }
  });
});

/* The model result: Poland is unitary; all justice national; no region record. */
describe('Poland — unitary, all justice national', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const plRecords = JURISDICTIONS.filter((j) => j.countryCode === 'PL');
    expect(plRecords.map((j) => j.id)).toEqual(['pl']);
    const record = getJurisdiction('pl')!;
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

  it('states the unitary form (Art. 3) in prose', () => {
    const hub =
      JSON.stringify(PL!.blocks) + JSON.stringify(getModule(PL!, 'justice-system')?.blocks);
    expect(hub).toMatch(/unitary/i);
    expect(hub).toMatch(/\b3\b/);
  });

  it('creates no accidental region pages', () => {
    for (const slug of ['mazovia', 'warsaw', 'silesia', 'krakow']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/poland/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Poland restricted claim (under capacity)', () => {
  const claim = getModule(PL!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('pl-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is under capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/73,822/);
    expect(claim!.statement).toMatch(/86,109/);
    expect(claim!.statement).toMatch(/85\.7/);
    expect(claim!.limitation).toMatch(/fewer people than its stated capacity/i);
    expect(claim!.limitation).toMatch(/snapshot|not an? .*average/i);
  });

  it('does not smuggle the imprisonment rate into a cross-country comparison', () => {
    // The high per-100k rate is deliberately kept out of the claim (SPACE I: not comparable).
    expect(claim!.statement).not.toMatch(/per 100,000|highest|compared/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Poland HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Poland, and shows the derived demonym', async () => {
    const html = await read('out/countries/poland.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Poland/);
    expect(html).toMatch(/not a Polish government body/);
  });

  it('never emits /countries/pl in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/poland</);
    expect(sitemap).not.toMatch(/\/countries\/pl</);
  });
});
