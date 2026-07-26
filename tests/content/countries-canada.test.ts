import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import {
  JURISDICTIONS,
  getJurisdiction,
  isResearchedScope,
  validateJurisdiction,
} from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import { FUNCTION_SCOPES } from '@/content/types';
import type { JurisdictionRecord, RestrictedClaim } from '@/content/types';

const CA = getDossier('canada');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Canada dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/ca)', () => {
    expect(CA).toBeDefined();
    expect(CA?.status).toBe('published');
    expect(CA?.countryCode).toBe('CA');
    expect(CA?.slug).toBe('canada');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/ca')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/canada')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(CA?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set and defers the rest (incl. oversight)', () => {
    const ids = publishedModules(CA!).map((m) => m.moduleId);
    for (const required of [
      'justice-system',
      'law-enforcement',
      'courts',
      'prosecution',
      'investigations',
      'corrections',
      'sources',
    ]) {
      expect(ids, `required module "${required}" not published`).toContain(required);
    }
    for (const deferred of [
      'forensics',
      'border-and-customs',
      'oversight',
      'history',
      'timeline',
    ]) {
      expect(ids).not.toContain(deferred);
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const deferred = deferredModules(CA!);
    expect(deferred.map((m) => m.moduleId).sort()).toEqual([
      'border-and-customs',
      'forensics',
      'history',
      'oversight',
      'timeline',
    ]);
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferred) {
      expect(m.deferredReason, `${m.moduleId} defers without a reason`).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/canada/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Canada-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(CA!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['CA', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });

  it('publishes only reviewed modules with sources and content', () => {
    for (const m of publishedModules(CA!)) {
      expect(m.sources.length, `${m.moduleId} has no source`).toBeGreaterThan(0);
      expect(m.review).toBe('fact-checked');
      expect(m.blocks.length).toBeGreaterThan(0);
      expect(m.safetyReview).not.toBe('pending');
    }
  });
});

/*
 * CONTRACT POLICING — the central architecture test. The `contracted` FunctionScope value is the
 * one schema change: policing held by the province but delivered by the federal RCMP under
 * agreement. Ontario and Quebec run their own forces (`own`); BC and the Yukon contract (`contracted`).
 */
describe('Canada contract-policing model (the `contracted` scope)', () => {
  it('added `contracted` as a FunctionScope value', () => {
    expect(FUNCTION_SCOPES).toContain('contracted');
    // It is a researched scope, not a stand-in for `unknown`.
    expect(isResearchedScope('contracted')).toBe(true);
  });

  it('marks the contract province and territory `contracted`, the self-policing provinces `own`', () => {
    expect(getJurisdiction('ca-bc')!.policingScope).toBe('contracted');
    expect(getJurisdiction('ca-yt')!.policingScope).toBe('contracted');
    expect(getJurisdiction('ca-on')!.policingScope).toBe('own');
    expect(getJurisdiction('ca-qc')!.policingScope).toBe('own');
  });

  it('does NOT build a typed relationship graph — provider identity stays in prose', () => {
    // No relationship field was added to the jurisdiction record.
    expect('serviceArrangements' in getJurisdiction('ca-bc')!).toBe(false);
    expect('relationships' in (CA as object)).toBe(false);
    // The RCMP/OPP/SQ identities and the agreement live in the law-enforcement prose.
    const le = JSON.stringify(getModule(CA!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Royal Canadian Mounted Police|RCMP/);
    expect(le).toMatch(/Police Service Agreement/);
    expect(le).toMatch(/eight provinces/);
    expect(le).toMatch(/Ontario Provincial Police/);
    expect(le).toMatch(/Sûreté du Québec/);
  });

  it('states the RCMP stays federal and is not owned by the contracting province', () => {
    const le = JSON.stringify(getModule(CA!, 'law-enforcement')?.blocks);
    expect(le).toMatch(
      /federal institution|national police force|remains federal|stays.*federal/i,
    );
    expect(le).toMatch(/does not own|not owned|without owning/i);
  });

  // Non-vacuity: the validator treats `contracted` as researched, so an unresearched record may
  // not use it.
  it('rejects an unresearched record that claims a `contracted` scope', () => {
    const bogus = {
      ...getJurisdiction('ca-bc')!,
      id: 'ca-bogus',
      coverage: 'planned',
    } as JurisdictionRecord;
    expect(validateJurisdiction(bogus, JURISDICTIONS).join(' ')).toMatch(/unresearched/);
  });
});

describe('Canada federal / provincial / territorial integrity', () => {
  it('is a federation with all functions shared and a federal residual power', () => {
    const ca = getJurisdiction('ca')!;
    expect(ca.level).toBe('federal');
    expect(ca.parentJurisdictionId).toBeUndefined();
    for (const f of [
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(ca[f]).toBe('shared');
    }
    // POGG is federal — authorityBasis 'reserved-powers' must NOT be used on the provinces.
    for (const id of ['ca-on', 'ca-qc', 'ca-bc']) {
      expect(getJurisdiction(id)!.authorityBasis).toBeUndefined();
    }
  });

  it('distinguishes province from territory: the Yukon is federal-plenary with national prosecution', () => {
    const yt = getJurisdiction('ca-yt')!;
    expect(yt.level).toBe('territory');
    expect(yt.authorityBasis).toBe('federal-plenary');
    // The federal PPSC is the only prosecutor in the territories.
    expect(yt.prosecutionScope).toBe('national');
    // A province, by contrast, runs its own prosecution.
    expect(getJurisdiction('ca-on')!.prosecutionScope).toBe('own');
    expect(getJurisdiction('ca-qc')!.prosecutionScope).toBe('own');
  });

  it('records Quebec as the bijural case (its own private-law legal system)', () => {
    expect(getJurisdiction('ca-qc')!.legalSystemScope).toBe('own');
    const js = JSON.stringify(getModule(CA!, 'justice-system')?.blocks);
    expect(js).toMatch(/civil-law|civil law/i);
    expect(js).toMatch(/bijural/i);
  });

  it('is valid, and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no accidental province or territory pages', () => {
    for (const slug of ['ontario', 'quebec', 'british-columbia', 'yukon']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/canada/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  // Non-vacuity of the federal-parent legislativeCompetence rule.
  it('rejects a researched province that omits legislativeCompetence', () => {
    const { legislativeCompetence: _d, ...bare } = getJurisdiction('ca-on')!;
    expect(validateJurisdiction(bare as JurisdictionRecord, JURISDICTIONS).join(' ')).toMatch(
      /must declare legislativeCompetence/,
    );
  });
});

describe('Canada federal/provincial split and bilingual sourcing', () => {
  it('states the federal criminal law vs provincial administration split', () => {
    const js = JSON.stringify(getModule(CA!, 'justice-system')?.blocks);
    expect(js).toMatch(/s\.91\(27\)|Criminal Law/);
    expect(js).toMatch(/s\.92\(14\)|Administration of Justice/);
  });

  it('records the two-year federal/provincial corrections split', () => {
    const corr = JSON.stringify(getModule(CA!, 'corrections')?.blocks);
    expect(corr).toMatch(/two years/);
    expect(corr).toMatch(/penitentiar/i);
    expect(corr).toMatch(/s\.743\.1|743\.1/);
  });

  it('records the territories prosecution difference on the prosecution page', () => {
    const pr = JSON.stringify(getModule(CA!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Public Prosecution Service of Canada|PPSC/);
    expect(pr).toMatch(/only prosecutors|territories/i);
  });

  it('records that federal law is authoritative in English and French', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    const charter = byId.get('ca-charter-1982')!;
    expect(charter.note).toMatch(/equally authoritative/);
    const src = JSON.stringify(getModule(CA!, 'sources')?.blocks);
    expect(src).toMatch(/equally authoritative|equal.authenticity/i);
  });
});

describe('the published Canada restricted claim (provincial/territorial custody)', () => {
  const claim = getModule(CA!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('ca-pt-custody-2023-24');
    expect(claim?.category).toBe('detention-capacity');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact scoped figures and excludes federal custody', () => {
    expect(claim!.metricPeriod).toBe('2023/2024');
    expect(claim!.statement).toMatch(/25,349\.8/);
    expect(claim!.statement).toMatch(/19,334\.5/);
    expect(claim!.limitation).toMatch(/EXCLUDES federal|excludes federal/i);
    expect(claim!.limitation).toMatch(/average daily count/i);
    expect(claim!.limitation).toMatch(/comparison/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Canada HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the correct facts-verified date and names the actual country', async () => {
    const html = await read('out/countries/canada.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).not.toMatch(/not about France/);
    expect(html).not.toMatch(/not about Brazil/);
    expect(html).toMatch(/not about\s*Canada/);
    expect(html).toMatch(/<html lang="en"/);
  });

  it('renders the French institution name with accents (UTF-8)', async () => {
    const le = await read('out/countries/canada/law-enforcement.html');
    expect(le).toMatch(/Sûreté du Québec/);
  });

  it('never emits /countries/ca or a province route in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/canada</);
    expect(sitemap).not.toMatch(/\/countries\/ca</);
    for (const slug of ['ontario', 'quebec', 'british-columbia', 'yukon']) {
      expect(sitemap).not.toMatch(new RegExp(`/countries/canada/${slug}<`));
      expect(sitemap).not.toMatch(new RegExp(`/countries/${slug}<`));
    }
    for (const m of ['oversight', 'forensics', 'border-and-customs', 'history', 'timeline']) {
      expect(sitemap).not.toMatch(new RegExp(`/countries/canada/${m}<`));
    }
  });
});
