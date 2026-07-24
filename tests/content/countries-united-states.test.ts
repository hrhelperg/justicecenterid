import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { JurisdictionRecord, RestrictedClaim } from '@/content/types';

const US = getDossier('united-states');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('United States dossier', () => {
  it('exists, is published, and uses the readable slug rather than an abbreviation', () => {
    expect(US).toBeDefined();
    expect(US?.status).toBe('published');
    expect(US?.countryCode).toBe('US');
    expect(US?.slug).toBe('united-states');
    for (const bad of ['/countries/us', '/countries/usa', '/countries/america']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === bad)).toBe(false);
    }
  });

  it('records a fixed research date rather than following the clock', () => {
    expect(US?.factsVerifiedOn).toBe('2026-07-24');
  });

  it('publishes the modules the phase required', () => {
    const ids = publishedModules(US!).map((m) => m.moduleId);
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
  });

  it('publishes only modules with sources, content and a fact-checked review', () => {
    for (const m of publishedModules(US!)) {
      expect(m.sources.length, `${m.moduleId} has no source`).toBeGreaterThan(0);
      expect(m.review, `${m.moduleId} published unreviewed`).toBe('fact-checked');
      expect(m.blocks.length, `${m.moduleId} has no content`).toBeGreaterThan(0);
      expect(m.safetyReview, `${m.moduleId} safety review still pending`).not.toBe('pending');
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const deferred = deferredModules(US!);
    expect(deferred.length).toBeGreaterThan(0);
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferred) {
      expect(m.deferredReason, `${m.moduleId} defers without a reason`).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/united-states/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only US-scoped sources and records how each was verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(US!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['US', 'INT']).toContain(s!.jurisdiction);
      }
    }
    for (const s of SOURCES.filter((x) => x.id.startsWith('us-'))) {
      expect(s.verificationMethod, `${s.id} verification method`).toBe('content-confirmed');
    }
  });

  /*
   * The national-uniformity guards. The US pages must actively refuse the summaries the brief
   * forbids, not merely omit them.
   */
  it('refuses a single national police claim and the "FBI is in charge" assumption', () => {
    const le = getModule(US!, 'law-enforcement');
    const text = JSON.stringify(le?.blocks);
    expect(text).toMatch(/17,541/);
    expect(text).toMatch(/no national police|not a force but a field/i);
    expect(text).toMatch(/FBI is in charge|do not command|assistance, not command/i);
  });

  it('states that most criminal justice is a state matter, not federal', () => {
    const js = JSON.stringify(getModule(US!, 'justice-system')?.blocks);
    expect(js).toMatch(/reserv\w+ to the states/i);
    expect(js).toMatch(/exclusive-subnational|each state legislates/i);
  });

  it('distinguishes prisons from jails on the corrections page', () => {
    const c = JSON.stringify(getModule(US!, 'corrections')?.blocks);
    expect(c).toMatch(/prisons and jails are not the same/i);
    expect(c).toMatch(/excludes local jail/i);
  });

  it('treats tribal jurisdiction as inherent sovereignty, not a local carve-out', () => {
    const le = JSON.stringify(getModule(US!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/inherent sovereignty|not a subordinate local|not a delegation/i);
    expect(le).toMatch(/Public Law 280|Indian country/i);
  });
});

describe('US jurisdiction records and the authorityBasis finding', () => {
  const us = JURISDICTIONS.filter((j) => j.countryCode === 'US');

  it('models the federal level plus a deliberate sample', () => {
    expect(us.map((j) => j.id).sort()).toEqual(['us', 'us-ca', 'us-dc', 'us-la', 'us-tribal']);
  });

  it.each(us.map((j) => [j.id, j] as const))('jurisdiction %s is valid', (_id, j) => {
    expect(validateJurisdiction(j)).toEqual([]);
  });

  it('treats the United States as a federal root record with no parent', () => {
    const root = getJurisdiction('us');
    expect(root?.level).toBe('federal');
    expect(root?.parentJurisdictionId).toBeUndefined();
  });

  it('records the reserved-powers inversion on the states', () => {
    const ca = getJurisdiction('us-ca')!;
    expect(ca.authorityBasis).toBe('reserved-powers');
    // The sharp contrast with a German Land: US state courts are exclusively state-legislated.
    expect(ca.legislativeCompetence?.courts).toBe('exclusive-subnational');
    expect(getJurisdiction('de-by')!.legislativeCompetence?.courts).toBe('concurrent');
  });

  it('records the District of Columbia as federal-plenary, not a state', () => {
    const dc = getJurisdiction('us-dc')!;
    expect(dc.authorityBasis).toBe('federal-plenary');
    expect(dc.level).not.toBe('state');
  });

  it('models tribal jurisdiction as an inherent sovereign at the tribal level', () => {
    const t = getJurisdiction('us-tribal')!;
    expect(t.level).toBe('tribal');
    expect(t.authorityBasis).toBe('inherent-sovereign');
    expect(t.legalSystemScope).toBe('own');
  });

  /*
   * The load-bearing new rule: an inherent-sovereign record's parent link is geographic
   * containment, not derivation, and the record must say so. Without this, a tribal record
   * with parent `us` reads as "subdivision of the federal government".
   */
  it('requires an inherent-sovereign record to explain the non-derivation in notes', () => {
    const base = getJurisdiction('us-tribal')!;

    const noNotes: JurisdictionRecord = { ...base, notes: undefined };
    expect(validateJurisdiction(noNotes, JURISDICTIONS).join(' ')).toMatch(
      /must explain in notes/,
    );

    const wrongNotes: JurisdictionRecord = {
      ...base,
      notes: 'A tribe located in the United States.',
    };
    expect(validateJurisdiction(wrongNotes, JURISDICTIONS).join(' ')).toMatch(
      /authority is not.*derived|inherent/,
    );

    // The real record, which explains it, passes.
    expect(validateJurisdiction(base, JURISDICTIONS)).toEqual([]);
  });

  it('exempts inherent-sovereign records from the federal legislative-competence rule', () => {
    // The tribal record sits under a federal parent but carries no legislativeCompetence,
    // because inherent sovereignty is not a division of the federation's competence.
    const t = getJurisdiction('us-tribal')!;
    expect(t.parentJurisdictionId).toBe('us');
    expect(t.legislativeCompetence).toBeUndefined();
    expect(validateJurisdiction(t, JURISDICTIONS)).toEqual([]);

    // A NON-sovereign researched record under the federal parent still requires it.
    const { legislativeCompetence: _dropped, ...caNoComp } = getJurisdiction('us-ca')!;
    expect(
      validateJurisdiction(caNoComp as JurisdictionRecord, JURISDICTIONS).join(' '),
    ).toMatch(/must declare legislativeCompetence/);
  });

  it('does not regress France or Germany records', () => {
    for (const j of JURISDICTIONS.filter((x) => x.countryCode !== 'US')) {
      expect(validateJurisdiction(j), `${j.id} regressed`).toEqual([]);
    }
  });
});

describe('the published US restricted claim', () => {
  const claim = getModule(US!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('us-prison-population-2023');
    expect(claim?.category).toBe('detention-capacity');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records that the count excludes jails and aggregates state systems', () => {
    expect(claim!.limitation).toMatch(/excludes local jail/i);
    expect(claim!.limitation).toMatch(/fifty separately administered|state prison systems/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });

  it('fails when its jurisdiction is removed', () => {
    expect(
      validateRestrictedClaim({ ...claim!, jurisdiction: '' }, SOURCE_IDS).join(' '),
    ).toMatch(/ISO 3166-1/);
  });

  it('fails when its limitation note is removed', () => {
    expect(
      validateRestrictedClaim({ ...claim!, limitation: '' }, SOURCE_IDS).join(' '),
    ).toMatch(/limitation is required/);
  });
});
