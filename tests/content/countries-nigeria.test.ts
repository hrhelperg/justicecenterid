import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const NG = getDossier('nigeria');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Nigeria dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/ng)', () => {
    expect(NG?.status).toBe('published');
    expect(NG?.countryCode).toBe('NG');
    expect(NG?.slug).toBe('nigeria');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/ng')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/nigeria')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(NG?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(NG!).map((m) => m.moduleId);
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
    for (const m of deferredModules(NG!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/nigeria/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Nigeria-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(NG!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['NG', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Distinctive: federal police + federal prisons, but state courts/prosecution/criminal-law; three
 * criminal-law traditions (Sharia by attribution); diffuse review + Supreme Court finality; dual
 * executive prosecution; a pending state-police bill (attributed, not yet law). */
describe('Nigeria — a federation with federal police and prisons, but state courts and law', () => {
  it('states federal policing with the single-force bar (s 214(1)) and the pending state-police bill', () => {
    const le = JSON.stringify(getModule(NG!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Nigeria Police Force/);
    expect(le).toMatch(/no other police force/i);
    expect(le).toMatch(/214/);
    expect(le).toMatch(/State Police Bill|state police services|State Houses of Assembly/i);
    expect(le).toMatch(/not yet law|awaits|must now be ratified/i);
  });

  it('states the three criminal-law traditions incl. Sharia by dated attribution', () => {
    const js = JSON.stringify(getModule(NG!, 'justice-system')?.blocks);
    expect(js).toMatch(/Criminal Code/);
    expect(js).toMatch(/Penal Code/);
    expect(js).toMatch(/Shari/);
    expect(js).toMatch(/twelve/i);
    expect(js).toMatch(/Human Rights Watch/);
    // the source is attributed, not asserted as the site's own verdict
    const jsMod = getModule(NG!, 'justice-system')!;
    expect(jsMod.sources).toContain('ng-hrw-sharia');
  });

  it('states the federal Supreme Court apex, finality (s 235) and diffuse review', () => {
    const co = JSON.stringify(getModule(NG!, 'courts')?.blocks);
    expect(co).toMatch(/Supreme Court/);
    expect(co).toMatch(/no appeal shall lie|235|final/i);
    expect(co).toMatch(/no separate constitutional court|diffuse/i);
    expect(co).toMatch(/Sharia Court of Appeal|Customary Court of Appeal/);
    expect(co).toMatch(/National Judicial Council/);
  });

  it('states a dual, executive prosecution (AGF a Minister; State AGs mirror)', () => {
    const pr = JSON.stringify(getModule(NG!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Attorney-General of the Federation/);
    expect(pr).toMatch(/Minister/);
    expect(pr).toMatch(/150/);
    expect(pr).toMatch(/State Attorney-General/);
    expect(pr).toMatch(/174/);
    expect(pr).toMatch(/211/);
  });

  it('states the oversight set (NJC, NHRC, PCC, split police oversight)', () => {
    const ov = JSON.stringify(getModule(NG!, 'oversight')?.blocks);
    expect(ov).toMatch(/National Judicial Council/);
    expect(ov).toMatch(/National Human Rights Commission|NHRC/);
    expect(ov).toMatch(/Public Complaints Commission/);
    expect(ov).toMatch(/Police Service Commission/);
    expect(ov).toMatch(/Nigeria Police Council/);
  });
});

/* The model: a federal record + two illustrative state records; the sub-national tier runs courts,
 * prosecution and criminal law but NOT police or prisons (the inverse of India/Mexico/Argentina). */
describe('Nigeria — federal record + representative states (the inverse-federation split)', () => {
  it('has exactly the federal record plus Kano and Lagos', () => {
    const ngRecords = JURISDICTIONS.filter((j) => j.countryCode === 'NG');
    expect(ngRecords.map((j) => j.id).sort()).toEqual(['ng', 'ng-kn', 'ng-la']);
    expect(getJurisdiction('ng')!.level).toBe('federal');
    expect(getJurisdiction('ng-kn')!.level).toBe('state');
    expect(getJurisdiction('ng-la')!.level).toBe('state');
  });

  it('models federal police and prisons, but shared courts/prosecution/legal-system', () => {
    const ng = getJurisdiction('ng')!;
    expect(ng.policingScope).toBe('own');
    expect(ng.correctionalScope).toBe('own');
    expect(ng.courtScope).toBe('shared');
    expect(ng.prosecutionScope).toBe('shared');
    expect(ng.legalSystemScope).toBe('shared');
  });

  it('models each state as running courts/prosecution/law but NOT police or prisons', () => {
    for (const id of ['ng-kn', 'ng-la']) {
      const s = getJurisdiction(id)!;
      expect(s.parentJurisdictionId).toBe('ng');
      expect(s.courtScope, `${id} courts`).toBe('own');
      expect(s.prosecutionScope, `${id} prosecution`).toBe('own');
      expect(s.legalSystemScope, `${id} legal-system`).toBe('own');
      expect(s.policingScope, `${id} policing`).toBe('none');
      expect(s.correctionalScope, `${id} corrections`).toBe('none');
      // federal-parent competence rule: each state must declare legislativeCompetence
      expect(Object.keys(s.legislativeCompetence ?? {}).length).toBeGreaterThan(0);
      expect(s.legislativeCompetence?.policing).toBe('exclusive-federal');
      expect(s.legislativeCompetence?.corrections).toBe('exclusive-federal');
    }
  });

  it('creates no accidental state pages', () => {
    for (const slug of ['kano', 'lagos', 'abuja', 'rivers']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/nigeria/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Nigeria restricted claim (over capacity, dual-dated, low rate)', () => {
  const claim = getModule(NG!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('ng-prison-density-2026');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact WPB figures and keeps the two reference dates distinct', () => {
    expect(claim!.metricPeriod).toBe('2026-06-22');
    expect(claim!.statement).toMatch(/81,902/);
    expect(claim!.statement).toMatch(/65,035/);
    expect(claim!.statement).toMatch(/125\.6%/);
    expect(claim!.statement).toMatch(/34 per 100,000/);
    expect(claim!.statement).toMatch(/30 June 2025/);
    expect(claim!.limitation).toMatch(/not be conflated|different dates|two reference dates/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Nigeria HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Nigeria, and shows the derived demonym', async () => {
    const html = await read('out/countries/nigeria.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Nigeria/);
    expect(html).toMatch(/not a Nigerian government body/);
  });

  it('never emits /countries/ng in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/nigeria</);
    expect(sitemap).not.toMatch(/\/countries\/ng</);
  });
});
