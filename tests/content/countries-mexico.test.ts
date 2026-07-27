import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const MX = getDossier('mexico');
const SOURCE_IDS = SOURCES.map((s) => s.id);
const ALL_MX_PROSE =
  JSON.stringify(MX!.blocks) +
  JSON.stringify(MX!.modules.map((m) => m.blocks)) +
  JSON.stringify(MX!.summary);

describe('Mexico dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/mx)', () => {
    expect(MX?.status).toBe('published');
    expect(MX?.countryCode).toBe('MX');
    expect(MX?.slug).toBe('mexico');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/mx')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/mexico')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(MX?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(MX!).map((m) => m.moduleId);
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
    for (const m of deferredModules(MX!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/mexico/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Mexico-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(MX!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['MX', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* The dual-tier federation: a federal record + representative State records, all four functions. */
describe('Mexico — federal: dual-tier federation across all four functions', () => {
  it('models a federal record (all four shared) + State records (all four own)', () => {
    const fed = getJurisdiction('mx')!;
    expect(fed.level).toBe('federal');
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(fed[f], `federal ${f}`).toBe('shared');
    }
    const states = JURISDICTIONS.filter((j) => j.countryCode === 'MX' && j.level === 'state');
    expect(states.map((s) => s.id).sort()).toEqual(['mx-jal', 'mx-nle']);
    for (const s of states) {
      expect(s.parentJurisdictionId, `${s.id} parent`).toBe('mx');
      for (const f of [
        'policingScope',
        'courtScope',
        'prosecutionScope',
        'correctionalScope',
      ] as const) {
        expect(s[f], `${s.id} ${f}`).toBe('own');
      }
    }
  });

  it('states all four functions are dual, harmonised by one national procedural code', () => {
    const js =
      JSON.stringify(getModule(MX!, 'justice-system')?.blocks) + JSON.stringify(MX!.blocks);
    expect(js).toMatch(/federation/i);
    expect(js).toMatch(/national code|single national/i);
    expect(js).toMatch(/accusatory/i);
    expect(js).toMatch(/73-XXI|fuero común|fuero comun/);
  });

  it('states an autonomous federal prosecution that directs the investigation', () => {
    const pr = JSON.stringify(getModule(MX!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Fiscalía General de la República|autonomous public body/);
    expect(pr).toMatch(/102-A/);
    expect(pr).toMatch(/conduct and command|directs the investigation/i);
  });
});

/* Neutrality on the 2024 judicial reform: enacted facts + attribution only; no site verdict. */
describe('Mexico — strict neutrality on the 2024 judicial reform', () => {
  it('states the enacted facts with the gazette citation and dates', () => {
    const co = JSON.stringify(getModule(MX!, 'courts')?.blocks);
    expect(co).toMatch(/15 September 2024|Diario Oficial/);
    expect(co).toMatch(/elected|election/i);
    expect(co).toMatch(/1 June 2025|1 September 2025/);
    expect(co).toMatch(/Article 96|Article 116/);
  });

  it('carries the assessments only by dated attribution (IACHR + OAS)', () => {
    const co = JSON.stringify(getModule(MX!, 'courts')?.blocks);
    expect(co).toMatch(/Inter-American Commission on Human Rights|IACHR/);
    expect(co).toMatch(/OAS|Electoral Observation Mission/);
    expect(co).toMatch(/does not recommend|takes no position|attributed/i);
  });

  it('contains no partisan or characterising language anywhere reader-facing', () => {
    const forbidden = [
      /\bpower grab\b/i,
      /\bauthoritarian\b/i,
      /\bcaptured?\b/i,
      /\bbacksliding\b/i,
      /\bMorena\b/,
      /\bpacking\b/i,
      /\bsham\b/i,
      /\bassault on\b/i,
      /\bcrisis\b/i,
      /\bpolitici[sz]ed\b/i,
    ];
    for (const rx of forbidden) {
      expect(ALL_MX_PROSE, `partisan/characterising term matched ${rx}`).not.toMatch(rx);
    }
  });
});

describe('Mexico — jurisdiction records valid; no public sub-national pages', () => {
  it('validates every record without regressing others', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no public sub-national pages (States are records, not routes)', () => {
    for (const slug of ['jalisco', 'nuevo-leon', 'mexico-city', 'guadalajara']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/mexico/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });
});

describe('the published Mexico restricted claim (above capacity, dual-system aggregate)', () => {
  const claim = getModule(MX!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('mx-prison-density-2026');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the current WPB figure and that it is a federal+state aggregate above capacity', () => {
    expect(claim!.metricPeriod).toBe('2026-05-31');
    expect(claim!.statement).toMatch(/268,245/);
    expect(claim!.statement).toMatch(/227,658/);
    expect(claim!.statement).toMatch(/117\.8%/);
    expect(claim!.statement).toMatch(/above capacity/i);
    expect(claim!.limitation).toMatch(/federal and the 32 state|aggregate across/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Mexico HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Mexico, and shows the derived demonym', async () => {
    const html = await read('out/countries/mexico.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Mexico/);
    expect(html).toMatch(/not a Mexican government body/);
  });

  it('never emits /countries/mx in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/mexico</);
    expect(sitemap).not.toMatch(/\/countries\/mx</);
  });
});
