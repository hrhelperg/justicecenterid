import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const AT = getDossier('austria');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Austria dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/at)', () => {
    expect(AT?.status).toBe('published');
    expect(AT?.countryCode).toBe('AT');
    expect(AT?.slug).toBe('austria');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/at')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/austria')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(AT?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(AT!).map((m) => m.moduleId);
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
    for (const m of deferredModules(AT!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/austria/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Austria-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(AT!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['AT', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Austria's distinctive features: three co-equal apex courts; a prosecution under the Minister of
 * Justice with a pending (not enacted) reform; a single national police. */
describe('Austria — three co-equal apex courts, prosecution under the Minister, one national police', () => {
  it('states three co-equal apex courts (OGH, VfGH, VwGH)', () => {
    const co = JSON.stringify(getModule(AT!, 'courts')?.blocks);
    expect(co).toMatch(/Oberster Gerichtshof|Supreme Court of Justice/);
    expect(co).toMatch(/Verfassungsgerichtshof|Constitutional Court/);
    expect(co).toMatch(/Verwaltungsgerichtshof|Supreme Administrative Court/);
    expect(co).toMatch(/co-equal|same level|no superiority|three/i);
  });

  it('states the prosecution is subordinate to the Federal Minister of Justice (§2)', () => {
    const pr = JSON.stringify(getModule(AT!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Staatsanwaltschaft|public prosecution service/i);
    expect(pr).toMatch(/Minister of Justice/);
    expect(pr).toMatch(/instruction|subordinate/i);
    expect(pr).toMatch(/90a|§2/);
  });

  it('records the 2026 prosecution reform neutrally, as a draft, not as current law', () => {
    const pr = JSON.stringify(getModule(AT!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Bundesstaatsanwaltschaft|federal prosecution/i);
    expect(pr).toMatch(/2026|consultation|draft/i);
    expect(pr).toMatch(/not enacted|not.*current|remains the governing law/i);
  });

  it('states a single national police under the Interior Ministry (not Land forces)', () => {
    const le = JSON.stringify(getModule(AT!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Landespolizeidirektion/);
    expect(le).toMatch(/78a|78b/);
    expect(le).toMatch(/single national|not.*Land|federal authorities/i);
  });
});

/* The model result: a federation whose justice is fully federal — Belgium-type, inverse of
 * Germany. One federal record, all core competences exclusive-federal, no Land record. */
describe('Austria — federal state, justice fully federal (the Belgium result)', () => {
  it('is a single federal record with all functions own and core competences exclusive-federal', () => {
    const atRecords = JURISDICTIONS.filter((j) => j.countryCode === 'AT');
    expect(atRecords.map((j) => j.id)).toEqual(['at']);
    const record = getJurisdiction('at')!;
    expect(record.level).toBe('federal');
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(record[f], `${f}`).toBe('own');
    }
    for (const c of [
      'legal-system',
      'policing',
      'courts',
      'prosecution',
      'corrections',
    ] as const) {
      expect(record.legislativeCompetence?.[c], `${c}`).toBe('exclusive-federal');
    }
  });

  it('states in prose that justice is federal, contrasting Germany', () => {
    const hub =
      JSON.stringify(AT!.blocks) + JSON.stringify(getModule(AT!, 'justice-system')?.blocks);
    expect(hub).toMatch(/federation|federal/i);
    expect(hub).toMatch(/Belgium/);
    expect(hub).toMatch(/Germany/);
    expect(hub).toMatch(/82/);
  });

  it('creates no accidental Land pages', () => {
    for (const slug of ['vienna', 'tyrol', 'styria', 'salzburg']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/austria/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Austria restricted claim (no capacity reported → no density)', () => {
  const claim = getModule(AT!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention claim', () => {
    expect(claim?.id).toBe('at-prison-population-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the population and rate but makes no density/occupancy claim', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/9,258/);
    expect(claim!.statement).toMatch(/101\.1/);
    expect(claim!.statement).toMatch(/did not report a total prison capacity|no occupancy/i);
    expect(claim!.limitation).toMatch(/no capacity|no occupancy or density|no density/i);
    // must NOT assert over/under capacity, since capacity is unknown
    expect(claim!.statement).not.toMatch(/over capacity|above capacity|under capacity/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Austria HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Austria, and shows the derived demonym', async () => {
    const html = await read('out/countries/austria.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Austria/);
    expect(html).toMatch(/not an Austrian government body/);
  });

  it('never emits /countries/at in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/austria</);
    expect(sitemap).not.toMatch(/\/countries\/at</);
  });
});
