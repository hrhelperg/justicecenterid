import type { FunctionScope, JurisdictionLevel, JurisdictionRecord } from './types';

/**
 * The jurisdiction registry.
 *
 * Scope discipline: this is NOT a geopolitical database. A record exists only where it does
 * institutional work — where a jurisdiction has, shares, lacks, or is explicitly excluded
 * from one of the five modelled functions. There is no record for each of France's 101
 * departments or 34,000+ communes, because in France those tiers are legally uniform and one
 * tier record states the arrangement accurately.
 *
 * That uniformity is itself a country-specific fact. A federal system will need one record
 * per unit (each US state has its own courts, prosecution and corrections), and the model
 * supports that without change: the tier-vs-unit choice is a research output, not a schema
 * property. Recorded in docs/architecture/jurisdiction-model.md.
 */
export const JURISDICTIONS: readonly JurisdictionRecord[] = [
  /* ---------------------------------------------------------------------- */
  /* France — national                                                      */
  /* ---------------------------------------------------------------------- */
  {
    id: 'fr',
    slug: 'france',
    name: 'French Republic',
    shortName: 'France',
    countryCode: 'FR',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958'],
    notes:
      'Article 1 of the Constitution of 4 October 1958 states that France is an indivisible Republic and that its organisation is decentralised. Decentralisation distributes administrative competences to territorial collectivities; it does not create separate legal systems, separate court hierarchies, or separate prosecution services beneath the national level.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* France — metropolitan administrative tiers                             */
  /* ---------------------------------------------------------------------- */
  /*
   * These three records are the reason FunctionScope exists. Each is a real territorial
   * collectivity named in Article 72, and each has genuine administrative competences — but
   * none of them is a legal jurisdiction for courts or prosecution. Recording courtScope as
   * `national` rather than `own` is the difference between an accurate page and a
   * plausible-sounding wrong one.
   */
  {
    id: 'fr-region',
    slug: 'region',
    name: 'Région (French regional tier)',
    countryCode: 'FR',
    level: 'region',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'national',
    policingScope: 'none',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958'],
    notes:
      'Named as a category of territorial collectivity in Article 72. Regions hold administrative competences. They are not a level of the court system, and there is no regional police force, prosecution service, or prison administration.',
    status: 'published',
  },
  {
    id: 'fr-departement',
    slug: 'departement',
    name: 'Département (French departmental tier)',
    countryCode: 'FR',
    level: 'department',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'national',
    policingScope: 'none',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958', 'fr-justice-courts'],
    notes:
      'Named as a category of territorial collectivity in Article 72. The departmental map and the judicial map are drawn separately and do not coincide: courts sit in their own ressorts, and one of the criminal courts is named cour criminelle départementale without the department being the body that organises it. Treating the department as a court jurisdiction would be a category error.',
    status: 'published',
  },
  {
    id: 'fr-commune',
    slug: 'commune',
    name: 'Commune (French municipal tier)',
    countryCode: 'FR',
    level: 'municipality',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'none',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958', 'fr-csi-l511-1'],
    notes:
      'The only French tier below the state with a policing function of its own. A commune may establish a police municipale whose agents act under the authority of the mayor. Article L511-1 of the Code de la sécurité intérieure states this is "sans préjudice de la compétence générale de la police nationale et de la gendarmerie nationale" — the municipal force does not displace the national ones. It is optional: many communes have none. policingScope is therefore `own` in the sense of a distinct legal arrangement, not in the sense that every commune exercises it.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* France — special-status and overseas                                   */
  /* ---------------------------------------------------------------------- */
  /*
   * Overseas: every one of these is at `in-research`, not `partial`.
   *
   * Article 72-3 names ten overseas territories, and Articles 73 and 74 tell us which regime
   * governs which. That is enough to record `legalSystemScope: 'delegated'` with a source.
   * It is NOT enough to say anything about how courts, prosecution or prison administration
   * are actually organised in each of them — those follow from each territory's own statute,
   * which has not been researched. Those scopes stay `unknown`.
   *
   * This is the single most important honesty property of the model: an unresearched
   * territory must not silently inherit the metropolitan arrangement just because it is part
   * of the same Republic.
   */
  {
    id: 'fr-guadeloupe',
    slug: 'guadeloupe',
    name: 'Guadeloupe',
    countryCode: 'FR',
    level: 'region',
    alsoExercisesLevels: ['department'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'An overseas department and region governed by Article 73, under which laws and regulations apply of right, subject to possible adaptations. legalSystemScope is `delegated` rather than `own` for that reason: the adaptation power is real but derives from the national legal order.',
    status: 'published',
  },
  {
    id: 'fr-martinique',
    slug: 'martinique',
    name: 'Martinique',
    countryCode: 'FR',
    level: 'special',
    alsoExercisesLevels: ['department', 'region'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'A single territorial collectivity exercising the competences of both a department and a region, created under the last paragraph of Article 73, which Article 72-3 references directly. This is the case that forced `alsoExercisesLevels` into the model: assigning it to either tier alone would be wrong.',
    status: 'published',
  },
  {
    id: 'fr-guyane',
    slug: 'guyane',
    name: 'Guyane',
    countryCode: 'FR',
    level: 'special',
    alsoExercisesLevels: ['department', 'region'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'A single territorial collectivity exercising both departmental and regional competences, created under the last paragraph of Article 73.',
    status: 'published',
  },
  {
    id: 'fr-la-reunion',
    slug: 'la-reunion',
    name: 'La Réunion',
    countryCode: 'FR',
    level: 'region',
    alsoExercisesLevels: ['department'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas department and region governed by Article 73.',
    status: 'published',
  },
  {
    id: 'fr-mayotte',
    slug: 'mayotte',
    name: 'Mayotte',
    countryCode: 'FR',
    level: 'region',
    alsoExercisesLevels: ['department'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'Named in Article 72-3 and governed by Article 73. Mayotte reached that status considerably later than the other overseas departments, and its arrangements have changed within living memory; any claim about its current institutional detail needs a source dated after the change rather than a general statement about overseas departments.',
    status: 'published',
  },
  {
    id: 'fr-polynesie-francaise',
    slug: 'polynesie-francaise',
    name: 'Polynésie française',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      "An overseas collectivity governed by Article 74, which provides a statute taking account of each collectivity's own interests. The specific division of competences is set by its own organic statute and has not been researched here.",
    status: 'published',
  },
  {
    id: 'fr-saint-pierre-et-miquelon',
    slug: 'saint-pierre-et-miquelon',
    name: 'Saint-Pierre-et-Miquelon',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-saint-barthelemy',
    slug: 'saint-barthelemy',
    name: 'Saint-Barthélemy',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-saint-martin',
    slug: 'saint-martin',
    name: 'Saint-Martin',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-wallis-et-futuna',
    slug: 'wallis-et-futuna',
    name: 'Îles Wallis et Futuna',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-nouvelle-caledonie',
    slug: 'nouvelle-caledonie',
    name: 'Nouvelle-Calédonie',
    countryCode: 'FR',
    level: 'special',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'New Caledonia is governed by neither Article 73 nor Article 74. It has its own title of the Constitution — Title XIII, "Dispositions transitoires relatives à la Nouvelle-Calédonie". It is deliberately recorded at level `special` rather than `territory`: grouping it with the Article 74 collectivities would misstate its constitutional position. Nothing about its institutional arrangements is asserted here without dated sources.',
    status: 'published',
  },
];

/* -------------------------------------------------------------------------- */
/* Lookup helpers                                                             */
/* -------------------------------------------------------------------------- */

export function getJurisdiction(id: string): JurisdictionRecord | undefined {
  return JURISDICTIONS.find((j) => j.id === id);
}

export function getJurisdictionsForCountry(countryCode: string): JurisdictionRecord[] {
  return JURISDICTIONS.filter((j) => j.countryCode === countryCode);
}

/** Levels that may exist without a parent. Everything else must be attached to one. */
const ROOT_LEVELS: readonly JurisdictionLevel[] = ['international', 'supranational', 'country'];

/**
 * Coverage states at which a jurisdiction may NOT assert any researched functional scope.
 * `in-research` is deliberately excluded: it is the state for a jurisdiction whose
 * constitutional basis is sourced but whose institutional detail is not, which is exactly
 * where every French overseas record sits.
 */
const UNRESEARCHED_COVERAGE = ['none', 'planned'] as const;

/** Coverage states that require at least one source. */
const SOURCED_COVERAGE = ['in-research', 'partial', 'established'] as const;

const FUNCTION_FIELDS = [
  'legalSystemScope',
  'policingScope',
  'courtScope',
  'prosecutionScope',
  'correctionalScope',
] as const;

/**
 * Validation rules for a jurisdiction record.
 *
 * Returns a list of human-readable problems; an empty list means valid. Implemented as a pure
 * function rather than inline in a test so the invalid combinations can be exercised directly
 * with synthetic records, instead of only being asserted against the registry that happens to
 * be correct today.
 */
export function validateJurisdiction(
  record: JurisdictionRecord,
  all: readonly JurisdictionRecord[] = JURISDICTIONS,
): string[] {
  const problems: string[] = [];

  if (!/^[a-z0-9-]+$/.test(record.slug)) {
    problems.push(`slug "${record.slug}" must be lowercase kebab-case`);
  }

  const isRoot = ROOT_LEVELS.includes(record.level);

  if (isRoot && record.parentJurisdictionId) {
    problems.push(`level "${record.level}" must not have a parent jurisdiction`);
  }
  if (!isRoot && !record.parentJurisdictionId) {
    problems.push(`level "${record.level}" requires a parentJurisdictionId`);
  }

  if (record.parentJurisdictionId) {
    const parent = all.find((j) => j.id === record.parentJurisdictionId);
    if (!parent) {
      problems.push(`parentJurisdictionId "${record.parentJurisdictionId}" does not resolve`);
    } else if (parent.id === record.id) {
      problems.push('a jurisdiction cannot be its own parent');
    } else if (parent.countryCode !== record.countryCode) {
      problems.push(
        `parent "${parent.id}" is in country ${parent.countryCode} but this record is in ${record.countryCode}`,
      );
    }
  }

  // Cycle detection, independent of the parent-exists check above.
  const seen = new Set<string>([record.id]);
  let cursor = record.parentJurisdictionId;
  while (cursor) {
    if (seen.has(cursor)) {
      problems.push(`parent chain contains a cycle at "${cursor}"`);
      break;
    }
    seen.add(cursor);
    cursor = all.find((j) => j.id === cursor)?.parentJurisdictionId;
  }

  if (record.temporalScope !== 'current' && !record.historicalPeriod) {
    problems.push(`temporalScope "${record.temporalScope}" requires a historicalPeriod`);
  }
  if (record.temporalScope === 'current' && record.historicalPeriod) {
    problems.push('a current jurisdiction must not carry a historicalPeriod');
  }

  if (record.alsoExercisesLevels?.includes(record.level)) {
    problems.push(`alsoExercisesLevels repeats the record's own level "${record.level}"`);
  }

  const unresearched = (UNRESEARCHED_COVERAGE as readonly string[]).includes(record.coverage);

  if (
    (SOURCED_COVERAGE as readonly string[]).includes(record.coverage) &&
    record.sources.length === 0
  ) {
    problems.push(`coverage "${record.coverage}" requires at least one source`);
  }

  /*
   * The coverage ceiling, mirroring the country rule. A jurisdiction that has not been
   * researched may not assert a researched functional scope — `unknown` is the only honest
   * value, and it is never interchangeable with `none`. This is what stops an unresearched
   * territory from silently inheriting the metropolitan arrangement.
   */
  if (unresearched) {
    for (const field of FUNCTION_FIELDS) {
      if (record[field] !== 'unknown') {
        problems.push(
          `coverage "${record.coverage}" but ${field} is "${record[field]}" — ` +
            'unresearched jurisdictions must record every functional scope as "unknown"',
        );
      }
    }
  }

  if (record.status === 'published' && record.sources.length === 0) {
    problems.push('a published jurisdiction requires at least one source');
  }

  return problems;
}

/** Scopes that assert a researched finding, as opposed to an admission of ignorance. */
export function isResearchedScope(scope: FunctionScope): boolean {
  return scope !== 'unknown';
}
