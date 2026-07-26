import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const GR = getDossier('greece');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Greece dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/gr)', () => {
    expect(GR?.status).toBe('published');
    expect(GR?.countryCode).toBe('GR');
    expect(GR?.slug).toBe('greece');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/gr')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/greece')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(GR?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(GR!).map((m) => m.moduleId);
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
    for (const m of deferredModules(GR!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/greece/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Greece-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(GR!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['GR', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Greece's distinctive features: three co-equal supreme courts; diffuse review, no constitutional
 * court; a prosecution inside the judiciary; police and prisons under the same non-Justice ministry. */
describe('Greece — three co-equal supreme courts and no constitutional court', () => {
  it('names all three supreme courts in Greek and English', () => {
    const co = JSON.stringify(getModule(GR!, 'courts')?.blocks);
    expect(co).toMatch(/Άρειος Πάγος/);
    expect(co).toMatch(/Συμβούλιο της Επικρατείας/);
    expect(co).toMatch(/Ελεγκτικό Συνέδριο/);
    expect(co).toMatch(/three highest courts|three co-equal/i);
  });

  it('states diffuse review (Art. 93§4) and no dedicated constitutional court', () => {
    const co = JSON.stringify(getModule(GR!, 'courts')?.blocks);
    expect(co).toMatch(/93/);
    expect(co).toMatch(/not to apply a statute whose content is contrary to the Constitution/);
    expect(co).toMatch(/no.*constitutional court|no Kelsenian/i);
    expect(co).toMatch(/Ανώτατο Ειδικό Δικαστήριο|Special Highest Court/);
  });

  it('states the prosecution is an independent part of the judiciary', () => {
    const pr = JSON.stringify(getModule(GR!, 'prosecution')?.blocks);
    expect(pr).toMatch(/eisangel|εισαγγελ/i);
    expect(pr).toMatch(/judicial branch|part of the.*judiciary/i);
    expect(pr).toMatch(/operational and personal independence|independen/i);
    expect(pr).toMatch(/general conditions of service|service conditions/i);
  });

  it('states police and prisons are both under the Ministry of Citizen Protection', () => {
    const le = JSON.stringify(getModule(GR!, 'law-enforcement')?.blocks);
    const corr = JSON.stringify(getModule(GR!, 'corrections')?.blocks);
    expect(le).toMatch(/Ελληνική Αστυνομία|Hellenic Police/);
    expect(le).toMatch(/Citizen Protection/);
    expect(corr).toMatch(/Citizen Protection/);
  });

  it('is transparent that the ministry attribution rests on the US State Dept report', () => {
    const le = JSON.stringify(getModule(GR!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/State Department|foreign-government/i);
    expect(le).toMatch(/403|bot-walled|not reachable|returned HTTP/i);
  });
});

/* The model result: Greece is unitary; all justice national; Mount Athos noted in prose only. */
describe('Greece — unitary, all justice national, Mount Athos not a region record', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const grRecords = JURISDICTIONS.filter((j) => j.countryCode === 'GR');
    expect(grRecords.map((j) => j.id)).toEqual(['gr']);
    const record = getJurisdiction('gr')!;
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

  it('mentions Mount Athos in prose but creates no autonomy region record or page', () => {
    const js = JSON.stringify(getModule(GR!, 'justice-system')?.blocks);
    expect(js).toMatch(/Mount Athos|Άγιον Όρος/);
    for (const slug of ['mount-athos', 'aghion-oros', 'crete', 'attica']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/greece/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Greece restricted claim (under capacity)', () => {
  const claim = getModule(GR!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('gr-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is under capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/10,203/);
    expect(claim!.statement).toMatch(/10,775/);
    expect(claim!.statement).toMatch(/94\.7/);
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
describe('rendered Greece HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Greece, and shows the derived demonym', async () => {
    const html = await read('out/countries/greece.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Greece/);
    expect(html).toMatch(/not a Greek government body/);
  });

  it('renders the Greek-script court names', async () => {
    const html = await read('out/countries/greece/courts.html');
    expect(html).toMatch(/Άρειος Πάγος/);
    expect(html).toMatch(/Ελεγκτικό Συνέδριο/);
  });

  it('never emits /countries/gr in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/greece</);
    expect(sitemap).not.toMatch(/\/countries\/gr</);
  });
});
