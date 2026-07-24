import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const GERMANY = getDossier('germany');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Germany dossier', () => {
  it('exists, is published, and uses the readable slug rather than the ISO code', () => {
    expect(GERMANY).toBeDefined();
    expect(GERMANY?.status).toBe('published');
    expect(GERMANY?.countryCode).toBe('DE');
    expect(GERMANY?.slug).toBe('germany');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/de')).toBe(false);
  });

  it('records a fixed research date rather than following the clock', () => {
    expect(GERMANY?.factsVerifiedOn).toBe('2026-07-24');
  });

  it('publishes only modules with sources, content and a fact-checked review', () => {
    const published = publishedModules(GERMANY!);
    expect(published.length).toBeGreaterThan(0);
    for (const m of published) {
      expect(m.sources.length, `${m.moduleId} has no source`).toBeGreaterThan(0);
      expect(m.review, `${m.moduleId} published unreviewed`).toBe('fact-checked');
      expect(m.blocks.length, `${m.moduleId} has no content`).toBeGreaterThan(0);
      expect(m.safetyReview, `${m.moduleId} safety review still pending`).not.toBe('pending');
    }
  });

  it('publishes the modules the phase required', () => {
    const ids = publishedModules(GERMANY!).map((m) => m.moduleId);
    for (const required of [
      'justice-system',
      'law-enforcement',
      'courts',
      'prosecution',
      'corrections',
      'sources',
    ]) {
      expect(ids, `required module "${required}" not published`).toContain(required);
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const deferred = deferredModules(GERMANY!);
    expect(deferred.length).toBeGreaterThan(0);
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferred) {
      expect(m.deferredReason, `${m.moduleId} defers without a reason`).toBeTruthy();
      expect(m.deferredReason!.length).toBeGreaterThan(80);
      expect(m.blocks).toEqual([]);
      expect(m.sources).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/germany/${def?.slug}`)).toBe(false);
    }
  });

  it('resolves every source it cites, and cites only Germany-scoped sources', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    const cited = [...GERMANY!.sources, ...GERMANY!.modules.flatMap((m) => m.sources)];
    expect(cited.length).toBeGreaterThan(0);
    for (const id of cited) {
      expect(byId.has(id), `unresolved source "${id}"`).toBe(true);
      expect(['DE', 'INT'], `source ${id} is not Germany-scoped`).toContain(
        byId.get(id)!.jurisdiction,
      );
    }
  });

  it('records how every German source was verified', () => {
    const german = SOURCES.filter((s) => s.jurisdiction === 'DE');
    expect(german.length).toBeGreaterThan(0);
    for (const s of german) {
      expect(s.verifiedOn, `${s.id} missing verifiedOn`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.verificationMethod, `${s.id} does not record verification method`).toBe(
        'content-confirmed',
      );
    }
  });

  /*
   * The national-uniformity guard. Germany's whole point is that a single national
   * description is often wrong, so the pages must actively say so.
   */
  it('states that policing is a Land matter and refuses a single national police claim', () => {
    const le = getModule(GERMANY!, 'law-enforcement');
    const text = JSON.stringify(le?.blocks);
    expect(text).toMatch(/primarily a Land matter/i);
    // The module must state the limit on federal bodies rather than leave it implied.
    expect(text).toMatch(/rather than a national force with general jurisdiction/i);
    expect(text).toMatch(/federal power of direction over Land police/i);
    // And it must explicitly reject the two foreign analogies the brief singles out.
    expect(text).toMatch(/Germany’s FBI|Germany's FBI/i);
    expect(text).toMatch(/Germany’s national police|Germany's national police/i);
  });

  /*
   * Regression guard. The independence notice hardcoded "a French public body" from the
   * France pilot, so every Germany page disclaimed independence from the wrong state. The
   * existing tests only checked that a disclosure existed, not what it said.
   */
  it('names the right country in the independence disclosure', async () => {
    const { readFileSync, existsSync } = await import('node:fs');
    // React splits text nodes with <!-- --> markers, so strip them before matching —
    // asserting against raw markup would give a false pass on a broken page.
    const textOf = (f: string) => readFileSync(f, 'utf8').replaceAll('<!-- -->', '');

    const germanyFile = 'out/countries/germany/courts.html';
    const franceFile = 'out/countries/france/courts.html';
    if (!existsSync(germanyFile) || !existsSync(franceFile)) {
      throw new Error('run `npm run build` before this test — it asserts on exported output');
    }

    const germany = textOf(germanyFile);
    expect(germany, 'Germany pages must not claim independence from France').not.toMatch(
      /not a French public body/,
    );
    expect(germany).toMatch(/not a German public body/);
    expect(textOf(franceFile)).toMatch(/not a French public body/);
  });

  it('discloses on the hub that only sample Länder are modelled', () => {
    const text = JSON.stringify(GERMANY!.blocks) + JSON.stringify(GERMANY!.uncertainty);
    expect(text).toMatch(/sample|Only three Länder/i);
    expect(text).toMatch(/not been researched/i);
  });
});

describe('German federal jurisdiction records', () => {
  const german = JURISDICTIONS.filter((j) => j.countryCode === 'DE');

  it('models the Bund plus three sample Länder', () => {
    expect(german.map((j) => j.id).sort()).toEqual(['de', 'de-be', 'de-by', 'de-nw']);
  });

  it.each(german.map((j) => [j.id, j] as const))(
    'jurisdiction %s passes every validation rule',
    (_id, j) => {
      expect(validateJurisdiction(j)).toEqual([]);
    },
  );

  it('treats the federation as a root record with no parent', () => {
    const bund = getJurisdiction('de');
    expect(bund?.level).toBe('federal');
    expect(bund?.parentJurisdictionId).toBeUndefined();
  });

  it('attaches every Land to the Bund', () => {
    for (const id of ['de-by', 'de-be', 'de-nw']) {
      expect(getJurisdiction(id)?.parentJurisdictionId).toBe('de');
    }
  });

  /*
   * The core federal finding: who administers and who legislates are different questions,
   * and the model must be able to say so in the same record.
   */
  it('separates administrative execution from legislative competence', () => {
    const bund = getJurisdiction('de')!;
    const bavaria = getJurisdiction('de-by')!;

    // The Länder administer policing; the Bund does not administer it generally.
    expect(bavaria.policingScope).toBe('own');
    expect(bund.policingScope).toBe('shared');

    // But legislative competence over criminal law and court organisation is concurrent,
    // i.e. NOT the same answer as the administrative one.
    expect(bund.legislativeCompetence?.courts).toBe('concurrent');
    expect(bavaria.legislativeCompetence?.courts).toBe('concurrent');
    expect(bavaria.courtScope).toBe('own');
  });

  it('records corrections as administered by the Länder and not by the federation', () => {
    expect(getJurisdiction('de')!.correctionalScope).toBe('none');
    for (const id of ['de-by', 'de-be', 'de-nw']) {
      expect(getJurisdiction(id)!.correctionalScope).toBe('own');
    }
  });

  it('models the city-state as exercising the municipal level as well', () => {
    const berlin = getJurisdiction('de-be')!;
    expect(berlin.level).toBe('state');
    expect(berlin.alsoExercisesLevels).toContain('municipality');
    // A territorial Land must NOT carry the same marker.
    expect(getJurisdiction('de-by')!.alsoExercisesLevels).toBeUndefined();
  });

  it('requires legislative competence on a researched record under a federal parent', () => {
    const bavaria = getJurisdiction('de-by')!;
    const { legislativeCompetence: _dropped, ...withoutCompetence } = bavaria;
    const problems = validateJurisdiction(withoutCompetence as typeof bavaria, JURISDICTIONS);
    expect(problems.join(' ')).toMatch(/must declare legislativeCompetence/);
  });

  it('does not impose the federal rule on France, which has no federal parent', () => {
    for (const j of JURISDICTIONS.filter((x) => x.countryCode === 'FR')) {
      expect(validateJurisdiction(j), `${j.id} regressed`).toEqual([]);
    }
  });
});

describe('the published restricted claim', () => {
  const corrections = getModule(GERMANY!, 'corrections');
  const claim = corrections?.restrictedClaims?.[0];

  it('exists and is attached to the corrections module', () => {
    expect(claim, 'the pilot must publish a real restricted claim').toBeDefined();
    expect(claim!.id).toBe('de-prison-occupancy-2024');
    expect(claim!.category).toBe('detention-capacity');
  });

  it('is fully valid as published', () => {
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('carries the reference period, jurisdiction and verification date', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.jurisdiction).toBe('DE');
    expect(claim!.verifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('records that the figure aggregates separately administered Land systems', () => {
    expect(claim!.limitation).toMatch(/aggregate/i);
    expect(claim!.limitation).toMatch(/Länder/);
  });

  it('records the source’s own warning against cross-country comparison', () => {
    expect(claim!.limitation).toMatch(/comparison|comparab/i);
  });

  /*
   * A4 requires proof that the claim FAILS when its metadata is removed. Without these, the
   * validator could return an empty array unconditionally and every assertion above would
   * still pass.
   */
  it('fails when its reference period is removed', () => {
    const { metricPeriod: _dropped, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });

  it('fails when its jurisdiction is removed or malformed', () => {
    expect(
      validateRestrictedClaim({ ...claim!, jurisdiction: '' }, SOURCE_IDS).join(' '),
    ).toMatch(/ISO 3166-1/);
  });

  it('fails when its limitation note is removed', () => {
    expect(
      validateRestrictedClaim({ ...claim!, limitation: '' }, SOURCE_IDS).join(' '),
    ).toMatch(/limitation is required/);
  });

  it('fails when its source scope is removed', () => {
    expect(
      validateRestrictedClaim({ ...claim!, sourceScope: '  ' }, SOURCE_IDS).join(' '),
    ).toMatch(/sourceScope must state/);
  });

  it('fails when its source is removed', () => {
    expect(validateRestrictedClaim({ ...claim!, sources: [] }, SOURCE_IDS).join(' ')).toMatch(
      /requires at least one source/,
    );
  });
});
