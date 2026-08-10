import { describe, expect, it } from 'vitest';
import {
  INSTITUTION_TYPES,
  PUBLISHED_INSTITUTION_TYPES,
  ROUTED_INSTITUTION_TYPES,
  getInstitutionType,
  institutionPath,
} from '@/content/institutions';
import {
  PROFESSIONS,
  PUBLISHED_PROFESSIONS,
  ROUTED_PROFESSIONS,
  getProfession,
  professionPath,
} from '@/content/professions';
import {
  validateInstitutionPublication,
  validateProfessionPublication,
  type ReferencePublicationContext,
} from '@/content/reference-publication-gate';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { SOURCES, getSource } from '@/content/sources';
import { PUBLIC_ROUTES, PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import { SECTION_IDS } from '@/content/types';
import type { InstitutionType, Profession } from '@/content/types';

/**
 * The Wave 2 reference routes.
 *
 * The registries existed before this phase; what is new is that some of their records are
 * now canonical pages. These tests pin the distinction — which records earn a route, what a
 * routed record must contain, and that the two hub-only records stay unreachable.
 */

const ctx: ReferencePublicationContext = {
  knownSourceIds: SOURCES.map((source) => source.id),
  publishedCountrySlugs: PUBLISHED_DOSSIERS.map((dossier) => dossier.slug),
  routePaths: PUBLIC_ROUTE_PATHS,
};

/* -------------------------------------------------------------------------- */
/* Registry integrity                                                         */
/* -------------------------------------------------------------------------- */

describe('registry integrity', () => {
  it('has unique institution slugs', () => {
    const slugs = INSTITUTION_TYPES.map((i) => i.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has unique profession slugs', () => {
    const slugs = PROFESSIONS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('assigns every record to a real section', () => {
    for (const record of [...INSTITUTION_TYPES, ...PROFESSIONS]) {
      expect(SECTION_IDS, `${record.slug}`).toContain(record.section);
    }
  });

  it('never uses one title for two records', () => {
    const titles = [...INSTITUTION_TYPES, ...PROFESSIONS].map((r) => r.title.toLowerCase());
    expect(new Set(titles).size).toBe(titles.length);
  });
});

/* -------------------------------------------------------------------------- */
/* Which records are routed                                                   */
/* -------------------------------------------------------------------------- */

describe('routing is earned, not assumed', () => {
  it('routes exactly the fact-checked published institution types', () => {
    const expected = PUBLISHED_INSTITUTION_TYPES.filter((i) => i.review === 'fact-checked');
    expect(ROUTED_INSTITUTION_TYPES.map((i) => i.slug)).toEqual(expected.map((i) => i.slug));
    expect(ROUTED_INSTITUTION_TYPES.length).toBeGreaterThan(0);
  });

  it('routes exactly the fact-checked published professions', () => {
    const expected = PUBLISHED_PROFESSIONS.filter((p) => p.review === 'fact-checked');
    expect(ROUTED_PROFESSIONS.map((p) => p.slug)).toEqual(expected.map((p) => p.slug));
    expect(ROUTED_PROFESSIONS.length).toBeGreaterThan(0);
  });

  it('registers a route for every routed record', () => {
    for (const institution of ROUTED_INSTITUTION_TYPES) {
      expect(PUBLIC_ROUTE_PATHS).toContain(institutionPath(institution));
    }
    for (const profession of ROUTED_PROFESSIONS) {
      expect(PUBLIC_ROUTE_PATHS).toContain(professionPath(profession));
    }
  });

  /*
   * The load-bearing negative. Two institution types are published summaries on the hub and
   * must NOT be reachable at a URL — the source registry holds nothing that supports a
   * canonical page about them.
   */
  it('creates no route for a record that is published but not fact-checked', () => {
    const hubOnly = PUBLISHED_INSTITUTION_TYPES.filter((i) => i.review !== 'fact-checked');
    expect(
      hubOnly.length,
      'the hub-only case must actually exist to be tested',
    ).toBeGreaterThan(0);

    for (const institution of hubOnly) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(institutionPath(institution));
      expect(getInstitutionType(institution.slug)).toBeUndefined();
    }
  });

  it('names border-and-customs-authority and coast-guard as the hub-only pair', () => {
    const hubOnly = PUBLISHED_INSTITUTION_TYPES.filter((i) => i.review !== 'fact-checked').map(
      (i) => i.slug,
    );
    expect(hubOnly.sort()).toEqual(['border-and-customs-authority', 'coast-guard']);
  });

  it('resolves a routed slug and refuses an unrouted one', () => {
    expect(getInstitutionType('gendarmerie')?.slug).toBe('gendarmerie');
    expect(getInstitutionType('coast-guard')).toBeUndefined();
    expect(getProfession('detective')?.slug).toBe('detective');
    expect(getProfession('not-a-role')).toBeUndefined();
  });
});

/* -------------------------------------------------------------------------- */
/* The publication gate                                                       */
/* -------------------------------------------------------------------------- */

describe('the publication gate', () => {
  it.each(ROUTED_INSTITUTION_TYPES.map((i) => [i.slug, i] as const))(
    'institution %s satisfies every publication condition',
    (_slug, institution) => {
      expect(validateInstitutionPublication(institution, ctx)).toEqual([]);
    },
  );

  it.each(ROUTED_PROFESSIONS.map((p) => [p.slug, p] as const))(
    'profession %s satisfies every publication condition',
    (_slug, profession) => {
      expect(validateProfessionPublication(profession, ctx)).toEqual([]);
    },
  );
});

/*
 * NON-VACUITY. A gate that passes everything is worth nothing, so each condition is driven
 * with a deliberately broken record and asserted to fail. Without this block the suite above
 * would still be green if the gate returned [] unconditionally.
 */
describe('the gate rejects what it claims to reject', () => {
  const base = ROUTED_INSTITUTION_TYPES[0]!;
  const baseProfession = ROUTED_PROFESSIONS[0]!;

  const brokenInstitutions: [string, InstitutionType][] = [
    ['a single source', { ...base, sources: ['unodc-cpcj'] }],
    ['an unknown source', { ...base, sources: ['unodc-cpcj', 'does-not-exist'] }],
    ['no country example', { ...base, countryExamples: [] }],
    [
      'an unresearched country example',
      { ...base, countryExamples: [{ countrySlug: 'atlantis', note: 'x' }] },
    ],
    ['no reviewedOn', { ...base, reviewedOn: undefined }],
    ['no factsVerifiedOn', { ...base, factsVerifiedOn: undefined }],
    ['a malformed date', { ...base, reviewedOn: '10-08-2026' }],
    ['no governance note', { ...base, governanceNote: '' }],
    ['no accountability note', { ...base, accountabilityNote: '' }],
    ['no purpose', { ...base, purpose: '' }],
    ['no related profession', { ...base, relatedProfessions: [] }],
    ['an unreviewed record', { ...base, review: 'unreviewed' as const }],
  ];

  it.each(brokenInstitutions)('rejects an institution with %s', (_label, institution) => {
    expect(validateInstitutionPublication(institution, ctx).length).toBeGreaterThan(0);
  });

  const brokenProfessions: [string, Profession][] = [
    ['a single source', { ...baseProfession, sources: ['unodc-cpcj'] }],
    ['no country example', { ...baseProfession, countryExamples: [] }],
    ['no ethics note', { ...baseProfession, ethicsNote: '' }],
    ['no institutional context', { ...baseProfession, institutionalContext: '' }],
    ['no oversight', { ...baseProfession, oversight: [] }],
    ['no jurisdiction note', { ...baseProfession, jurisdictionNote: '' }],
    ['no related institution', { ...baseProfession, relatedInstitutions: [] }],
  ];

  it.each(brokenProfessions)('rejects a profession with %s', (_label, profession) => {
    expect(validateProfessionPublication(profession, ctx).length).toBeGreaterThan(0);
  });

  it('rejects a routed record whose route was never registered', () => {
    const orphan = { ...base, slug: 'never-registered' };
    const problems = validateInstitutionPublication(orphan, ctx);
    expect(problems.some((p) => p.includes('no registered route'))).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* Sources and the knowledge graph                                            */
/* -------------------------------------------------------------------------- */

describe('sourcing', () => {
  it.each(
    [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS].map((r) => [r.slug, r] as const),
  )('%s cites at least two resolvable sources', (_slug, record) => {
    expect(record.sources.length).toBeGreaterThanOrEqual(2);
    for (const id of record.sources) {
      expect(getSource(id), `unresolved source: ${id}`).toBeDefined();
    }
  });

  it('cites a source with a recorded verification wherever it has a URL', () => {
    for (const record of [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS]) {
      for (const id of record.sources) {
        const source = getSource(id)!;
        if (source.url) expect(source.verifiedOn, `${id}`).toBeTruthy();
      }
    }
  });

  /*
   * The source-reuse rule, made checkable. A country-scoped source may support a worked
   * example about that country; it must not be the only thing a global page rests on. Every
   * routed record therefore cites at least one source that is international in scope.
   */
  /*
   * The inverse rule, and the one the Wave 2 adversarial pass had to introduce.
   *
   * A worked example makes a factual claim about a named country. The page must therefore
   * cite a source scoped to that country — otherwise the example is an assertion the page's
   * own citations cannot support, which is exactly the failure mode the source registry's
   * `note` field exists to prevent. Several examples failed this on first write.
   */
  it('backs every country example with a source scoped to that country', () => {
    for (const record of [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS]) {
      const scopes = new Set(record.sources.map((id) => getSource(id)!.jurisdiction));
      for (const example of record.countryExamples ?? []) {
        const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug)!;
        expect(
          scopes.has(dossier.countryCode),
          `${record.slug} cites ${example.countrySlug} but no source scoped to ${dossier.countryCode}`,
        ).toBe(true);
      }
    }
  });

  it('never rests a global page solely on country-scoped sources', () => {
    for (const record of [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS]) {
      const scopes = record.sources.map((id) => getSource(id)!.jurisdiction);
      const hasGlobal = scopes.some((j) => j === undefined || j === 'INT');
      expect(hasGlobal, `${record.slug} cites only national sources`).toBe(true);
    }
  });
});

describe('the knowledge graph resolves', () => {
  it('resolves every related institution to a routed institution', () => {
    for (const record of [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS]) {
      for (const slug of record.relatedInstitutions ?? []) {
        expect(getInstitutionType(slug), `${record.slug} -> ${slug}`).toBeDefined();
      }
    }
  });

  it('resolves every related profession to a routed profession', () => {
    for (const record of [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS]) {
      for (const slug of record.relatedProfessions ?? []) {
        expect(getProfession(slug), `${record.slug} -> ${slug}`).toBeDefined();
      }
    }
  });

  it('never relates a record to itself', () => {
    for (const institution of ROUTED_INSTITUTION_TYPES) {
      expect(institution.relatedInstitutions ?? []).not.toContain(institution.slug);
    }
    for (const profession of ROUTED_PROFESSIONS) {
      expect(profession.relatedProfessions ?? []).not.toContain(profession.slug);
    }
  });

  it('anchors every routed record to at least one published dossier', () => {
    const published = PUBLISHED_DOSSIERS.map((d) => d.slug);
    for (const record of [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS]) {
      const examples = record.countryExamples ?? [];
      expect(examples.length, `${record.slug}`).toBeGreaterThan(0);
      for (const example of examples) {
        expect(published, `${record.slug} -> ${example.countrySlug}`).toContain(
          example.countrySlug,
        );
      }
    }
  });

  it('gives each country example a note that is not a restatement of the summary', () => {
    for (const record of [...ROUTED_INSTITUTION_TYPES, ...ROUTED_PROFESSIONS]) {
      for (const example of record.countryExamples ?? []) {
        expect(example.note.length).toBeGreaterThan(60);
        expect(example.note).not.toBe(record.summary);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Route hygiene                                                              */
/* -------------------------------------------------------------------------- */

describe('route hygiene', () => {
  it('produces unique paths across the whole registry', () => {
    expect(new Set(PUBLIC_ROUTE_PATHS).size).toBe(PUBLIC_ROUTE_PATHS.length);
  });

  it('files reference routes under their hub', () => {
    for (const route of PUBLIC_ROUTES) {
      if (route.kind === 'institution') expect(route.parent).toBe('/institutions');
      if (route.kind === 'profession') expect(route.parent).toBe('/professions');
    }
  });

  it('creates no route for a candidate the cannibalization matrix rejected', () => {
    const rejected = [
      '/institutions/police',
      '/institutions/local-police',
      '/institutions/highway-patrol',
      '/institutions/marshal-service',
      '/institutions/specialized-police-agencies',
      '/institutions/federal-police',
      '/professions/police-officer',
      '/professions/criminal-investigator',
      '/professions/crime-scene-investigator',
      '/professions/forensic-investigator',
      '/professions/gendarme',
    ];
    for (const path of rejected) {
      expect(PUBLIC_ROUTE_PATHS, `${path} was merged, aliased or rejected`).not.toContain(path);
    }
  });

  it('keeps both hubs registered as their own routes', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain('/institutions');
    expect(PUBLIC_ROUTE_PATHS).toContain('/professions');
  });
});
