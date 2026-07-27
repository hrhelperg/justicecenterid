import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const NZ = getDossier('new-zealand');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('New Zealand dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/nz)', () => {
    expect(NZ?.status).toBe('published');
    expect(NZ?.countryCode).toBe('NZ');
    expect(NZ?.slug).toBe('new-zealand');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/nz')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/new-zealand')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(NZ?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(NZ!).map((m) => m.moduleId);
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
    for (const m of deferredModules(NZ!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/new-zealand/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only New Zealand-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(NZ!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['NZ', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* New Zealand's distinctive features: uncodified constitution + parliamentary sovereignty;
 * tikanga Māori; Law-Officer prosecution; police-led (not prosecutor-led) investigation. */
describe('New Zealand — uncodified constitution, tikanga, Law-Officer prosecution', () => {
  it('states parliamentary sovereignty: courts cannot strike down statutes', () => {
    const js =
      JSON.stringify(getModule(NZ!, 'justice-system')?.blocks) + JSON.stringify(NZ!.blocks);
    const co = JSON.stringify(getModule(NZ!, 'courts')?.blocks);
    expect(js).toMatch(/uncodified|no single (written|supreme-law)/i);
    expect(co).toMatch(/cannot (strike down|invalidate)|declaration of inconsistency/i);
    expect(co + js).toMatch(/Bill of Rights Act 1990/);
  });

  it('states tikanga Māori as a recognised source of law, by attribution (Ellis v R)', () => {
    const js =
      JSON.stringify(getModule(NZ!, 'justice-system')?.blocks) + JSON.stringify(NZ!.blocks);
    expect(js).toMatch(/tikanga/);
    expect(js).toMatch(/Ellis v R|\[2022\] NZSC 114/);
    expect(js).toMatch(/first law of Aotearoa/);
  });

  it('states a Law-Officer prosecution model, not a Director of Public Prosecutions', () => {
    const pr = JSON.stringify(getModule(NZ!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Solicitor-General/);
    expect(pr).toMatch(/Crown Solicitor/);
    expect(pr).toMatch(
      /no single Director of Public Prosecutions|not a (standalone )?Director/i,
    );
  });

  it('states the common-law police-led investigation (Policing Act s 16(2))', () => {
    const inv = JSON.stringify(getModule(NZ!, 'investigations')?.blocks);
    expect(inv).toMatch(/police (investigate|-led)|police investigate/i);
    expect(inv).toMatch(/16\(2\)|independently of/);
    expect(inv).toMatch(/prosecutor|Law Officer/i);
  });
});

/* The model result: unitary, single national bodies, no sub-national record. */
describe('New Zealand — unitary, all justice national', () => {
  it('is a single country-level record with all functions own', () => {
    const nzRecords = JURISDICTIONS.filter((j) => j.countryCode === 'NZ');
    expect(nzRecords.map((j) => j.id)).toEqual(['nz']);
    const record = getJurisdiction('nz')!;
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
    for (const slug of ['auckland', 'wellington', 'canterbury', 'otago']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/new-zealand/${slug}`)).toBe(
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

describe('the published New Zealand restricted claim (no current capacity → no occupancy)', () => {
  const claim = getModule(NZ!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention claim', () => {
    expect(claim?.id).toBe('nz-prison-population-2026');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the population and rate but makes no current occupancy/density claim', () => {
    expect(claim!.metricPeriod).toBe('2026-03-31');
    expect(claim!.statement).toMatch(/11,255/);
    expect(claim!.statement).toMatch(/211/);
    expect(claim!.statement).toMatch(/2019/);
    expect(claim!.limitation).toMatch(/no occupancy or density|no current occupancy/i);
    // must not present a current occupancy percentage
    expect(claim!.statement).not.toMatch(/93\.8|occupancy level of/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered New Zealand HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names New Zealand, and shows the derived demonym', async () => {
    const html = await read('out/countries/new-zealand.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in New Zealand/);
    expect(html).toMatch(/not a New Zealand government body/);
  });

  it('renders a Māori institution name (macron survives)', async () => {
    const html = await read('out/countries/new-zealand/courts.html');
    expect(html).toMatch(/Te Kōti Mana Nui|Te Kōti-ā-Rohe/);
  });

  it('never emits /countries/nz in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/new-zealand</);
    expect(sitemap).not.toMatch(/\/countries\/nz</);
  });
});
