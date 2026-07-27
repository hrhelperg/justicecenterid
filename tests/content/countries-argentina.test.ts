import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const AR = getDossier('argentina');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Argentina dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/ar)', () => {
    expect(AR?.status).toBe('published');
    expect(AR?.countryCode).toBe('AR');
    expect(AR?.slug).toBe('argentina');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/ar')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/argentina')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(AR?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(AR!).map((m) => m.moduleId);
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
    for (const m of deferredModules(AR!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/argentina/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Argentina-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(AR!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['AR', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Federal: national codes but provincial administration; a federal record + Province records. */
describe('Argentina — federal: national codes, provincial courts/police/prisons', () => {
  it('models a federal record (functions shared, legal-system own) + Province records (own)', () => {
    const fed = getJurisdiction('ar')!;
    expect(fed.level).toBe('federal');
    expect(fed.legalSystemScope).toBe('own'); // Congress enacts the national codes
    for (const f of [
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(fed[f], `federal ${f}`).toBe('shared');
    }
    expect(fed.legislativeCompetence?.['legal-system']).toBe('exclusive-federal');
    const provinces = JURISDICTIONS.filter(
      (j) => j.countryCode === 'AR' && j.level === 'province',
    );
    expect(provinces.map((p) => p.id).sort()).toEqual(['ar-b', 'ar-x']);
    for (const p of provinces) {
      expect(p.parentJurisdictionId, `${p.id} parent`).toBe('ar');
      for (const f of [
        'policingScope',
        'courtScope',
        'prosecutionScope',
        'correctionalScope',
      ] as const) {
        expect(p[f], `${p.id} ${f}`).toBe('own');
      }
    }
  });

  it('states the national-codes / provincial-application split (Art. 75 inc. 12)', () => {
    const js =
      JSON.stringify(getModule(AR!, 'justice-system')?.blocks) + JSON.stringify(AR!.blocks);
    expect(js).toMatch(/75 inc\. 12|national code/);
    expect(js).toMatch(/provinc/i);
    expect(js).toMatch(/121/);
    expect(js).toMatch(/diffuse/i);
    expect(js).toMatch(/no separate constitutional court|no constitutional court/i);
  });

  it('states the prosecution is a constitutionally autonomous fourth organ (Art. 120)', () => {
    const pr = JSON.stringify(getModule(AR!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Ministerio Público Fiscal|Public Prosecution Service/);
    expect(pr).toMatch(/120/);
    expect(pr).toMatch(/autonom|fourth branch|independent organ/i);
    expect(pr).toMatch(/directs the (criminal )?investigation/i);
  });

  it('states the Ombudsman has been vacant since 2009', () => {
    const ov = JSON.stringify(getModule(AR!, 'oversight')?.blocks);
    expect(ov).toMatch(/Defensor del Pueblo|Ombudsman/);
    expect(ov).toMatch(/vacant/i);
    expect(ov).toMatch(/2009/);
  });
});

describe('Argentina — jurisdiction records valid; no public sub-national pages', () => {
  it('validates every record without regressing others', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no public sub-national pages (Provinces are records, not routes)', () => {
    for (const slug of ['buenos-aires-province', 'cordoba', 'mendoza', 'rosario']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/argentina/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });
});

describe('the published Argentina restricted claim (custody total + prison occupancy)', () => {
  const claim = getModule(AR!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('ar-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the WPB figure with the police-lock-up nuance honestly', () => {
    expect(claim!.metricPeriod).toBe('2024-12-31');
    expect(claim!.statement).toMatch(/133,585/);
    expect(claim!.statement).toMatch(/12,885/);
    expect(claim!.statement).toMatch(/122\.9%/);
    expect(claim!.statement).toMatch(/comisar|police lock-ups/i);
    expect(claim!.limitation).toMatch(/different bases|excluding those lock-ups/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Argentina HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Argentina, and shows the derived demonym', async () => {
    const html = await read('out/countries/argentina.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Argentina/);
    expect(html).toMatch(/not an Argentine government body/);
  });

  it('never emits /countries/ar in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/argentina</);
    expect(sitemap).not.toMatch(/\/countries\/ar</);
  });
});
