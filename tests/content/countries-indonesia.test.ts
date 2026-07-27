import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const ID = getDossier('indonesia');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Indonesia dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/id)', () => {
    expect(ID?.status).toBe('published');
    expect(ID?.countryCode).toBe('ID');
    expect(ID?.slug).toBe('indonesia');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/id')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/indonesia')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(ID?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(ID!).map((m) => m.moduleId);
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
    for (const m of deferredModules(ID!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/indonesia/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Indonesia-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(ID!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['ID', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Distinctive: POLRI under the President; dual apex courts; new codes 2026; Aceh in prose. */
describe('Indonesia — police under the President, dual apex, new codes, Aceh', () => {
  it('states POLRI is under the President, not a ministry (UU 2/2002 Pasal 8)', () => {
    const le =
      JSON.stringify(getModule(ID!, 'law-enforcement')?.blocks) + JSON.stringify(ID!.blocks);
    expect(le).toMatch(/POLRI|Kepolisian Negara/);
    expect(le).toMatch(/under the President|responsible to the President/i);
    expect(le).toMatch(/Pasal 8|Law No\. 2 of 2002/);
    expect(le).toMatch(/not (to )?a ministry|not to a Minister/i);
  });

  it('states two apex courts with concentrated review in the Constitutional Court', () => {
    const co = JSON.stringify(getModule(ID!, 'courts')?.blocks);
    expect(co).toMatch(/Mahkamah Agung|Supreme Court/);
    expect(co).toMatch(/Mahkamah Konstitusi|Constitutional Court/);
    expect(co).toMatch(/concentrated/i);
    expect(co).toMatch(/24C|constitutionality of statutes/);
  });

  it('states the new national codes in force from 2 January 2026', () => {
    const js = JSON.stringify(getModule(ID!, 'justice-system')?.blocks);
    expect(js).toMatch(/KUHP|Criminal Code/);
    expect(js).toMatch(/KUHAP|Criminal Procedure Code/);
    expect(js).toMatch(/2 January 2026|2026/);
  });

  it('describes Aceh Islamic criminal law in prose, within the national judiciary', () => {
    const js = JSON.stringify(getModule(ID!, 'justice-system')?.blocks);
    expect(js).toMatch(/Aceh/);
    expect(js).toMatch(/qanun jinayat|Islamic criminal law|Sharia court|Mahkamah Syar/i);
    expect(js).toMatch(/within the national|under the Supreme Court|not.*federal/i);
  });
});

/* Model result: unitary, one country record; Aceh not a separate jurisdiction record. */
describe('Indonesia — unitary, all justice national, no sub-national record', () => {
  it('is a single country-level record with all functions own', () => {
    const idRecords = JURISDICTIONS.filter((j) => j.countryCode === 'ID');
    expect(idRecords.map((j) => j.id)).toEqual(['id']);
    const record = getJurisdiction('id')!;
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

  it('creates no accidental sub-national pages (incl. Aceh)', () => {
    for (const slug of ['aceh', 'java', 'jakarta', 'bali']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/indonesia/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Indonesia restricted claim (severe overcrowding)', () => {
  const claim = getModule(ID!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('id-prison-density-2026');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the current WPB figure and that it is far above capacity', () => {
    expect(claim!.metricPeriod).toBe('2026-06-30');
    expect(claim!.statement).toMatch(/287,571/);
    expect(claim!.statement).toMatch(/152,707/);
    expect(claim!.statement).toMatch(/188\.3%/);
    expect(claim!.statement).toMatch(/overcrowd|above capacity|twice capacity/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Indonesia HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Indonesia, and shows the derived demonym', async () => {
    const html = await read('out/countries/indonesia.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Indonesia/);
    expect(html).toMatch(/not an Indonesian government body/);
  });

  it('never emits /countries/id in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/indonesia</);
    expect(sitemap).not.toMatch(/\/countries\/id</);
  });
});
