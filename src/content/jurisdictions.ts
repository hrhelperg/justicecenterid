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

  /* ---------------------------------------------------------------------- */
  /* Germany — federal level                                                */
  /* ---------------------------------------------------------------------- */
  /*
   * LAND SELECTION (A3). Four records, chosen for what each tests, not for familiarity:
   *   - `de`      the Bund, to test federal/Land parentage and the split between
   *               legislative competence and administrative execution;
   *   - `de-by`   Bavaria, a territorial Land with its own constitutional court — tests a
   *               Land owning a court function the Bund does not supply;
   *   - `de-be`   Berlin, a city-state — tests one body exercising Land AND municipal levels
   *               simultaneously, reusing `alsoExercisesLevels` from the France pilot;
   *   - `de-nw`   North Rhine-Westphalia — tests an INTERMEDIATE tier (Regierungsbezirke)
   *               that Berlin and Hamburg do not have at all, which is the cleanest available
   *               proof that Länder are not structurally interchangeable.
   *
   * No record is created for any Kreis, kreisfreie Stadt or municipality. Those tiers are not
   * uniform across Länder — which is itself the finding — and inventing tier records for them
   * would assert a uniformity the sources do not support.
   */
  {
    id: 'de',
    slug: 'germany',
    name: 'Federal Republic of Germany',
    shortName: 'Germany',
    countryCode: 'DE',
    level: 'federal',
    legalSystemScope: 'own',
    policingScope: 'shared',
    courtScope: 'shared',
    prosecutionScope: 'shared',
    correctionalScope: 'none',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['de-grundgesetz'],
    notes:
      'Article 20(1) of the Basic Law describes the Federal Republic as a federal state. Article 30 provides that the exercise of state powers is a matter for the Länder except as otherwise provided, and Article 83 that the Länder execute federal laws in their own right. The federal level therefore holds broad legislative competence while administering comparatively little: policing, courts, prosecution and prisons are largely administered by the Länder. correctionalScope is `none` at federal level because no federal prison administration is established by the Basic Law; policingScope is `shared` because Article 73(1) no. 10 and Article 87(1) permit defined federal police bodies alongside Land police, not instead of them.',
    status: 'published',
  },
  {
    id: 'de-by',
    slug: 'bayern',
    name: 'Freistaat Bayern (Bavaria)',
    shortName: 'Bavaria',
    countryCode: 'DE',
    level: 'state',
    parentJurisdictionId: 'de',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['de-grundgesetz', 'de-gvg-147'],
    notes:
      "A territorial Land. Under Article 92 of the Basic Law judicial power is vested in the Federal Constitutional Court, the federal courts and the courts of the Länder, so a Land owns its own court function rather than hosting a federal one. Under § 147 no. 2 GVG the Landesjustizverwaltung holds the right of supervision and direction over all prosecution officials of that Land. Bavaria's own institutional detail — its police organisation, its constitutional court, its prison administration — has NOT been researched and nothing specific to Bavaria is asserted.",
    status: 'published',
  },
  {
    id: 'de-be',
    slug: 'berlin',
    name: 'Land Berlin',
    shortName: 'Berlin',
    countryCode: 'DE',
    level: 'state',
    alsoExercisesLevels: ['municipality'],
    parentJurisdictionId: 'de',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['de-grundgesetz'],
    notes:
      'A city-state: a Land that is simultaneously a single municipality, so the Land and municipal levels are exercised by the same body. This is why a "German municipal police model" cannot be stated generally — in a city-state the municipal level is the Land level, and any statement about how municipalities relate to Land police means something different here than in a territorial Land. Berlin-specific institutional detail has NOT been researched.',
    status: 'published',
  },
  {
    id: 'de-nw',
    slug: 'nordrhein-westfalen',
    name: 'Land Nordrhein-Westfalen (North Rhine-Westphalia)',
    shortName: 'North Rhine-Westphalia',
    countryCode: 'DE',
    level: 'state',
    parentJurisdictionId: 'de',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['de-grundgesetz'],
    notes:
      'Included specifically because it maintains an intermediate administrative tier (Regierungsbezirke) that the city-states do not have at all. That asymmetry is the point: the German sub-national structure is not a single ladder repeated sixteen times, so a tier record of the kind used for France would misdescribe the country. No Regierungsbezirk record is created here, because their powers have not been researched and their existence varies by Land. NRW-specific institutional detail has NOT been researched.',
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
const ROOT_LEVELS: readonly JurisdictionLevel[] = [
  'international',
  'supranational',
  'country',
  /*
   * `federal` is a ROOT level, not a child of `country`. The Bund is the national-level record
   * for Germany exactly as `fr` is for France; the level says how power is organised, not how
   * deep the record sits. The France pilot never created a `federal` record, so this rule went
   * untested — Germany is what exposed it.
   */
  'federal',
];

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

  /*
   * Federal-competence rule (Germany finding). Where a record sits under a `federal` parent,
   * who legislates and who administers are different questions, and leaving the legislative
   * dimension blank silently implies the administrative answer covers both.
   */
  const parent = all.find((j) => j.id === record.parentJurisdictionId);
  if (
    parent?.level === 'federal' &&
    !unresearched &&
    (!record.legislativeCompetence || Object.keys(record.legislativeCompetence).length === 0)
  ) {
    problems.push(
      'a researched sub-national record under a federal parent must declare ' +
        'legislativeCompetence — who administers a function does not establish who legislates on it',
    );
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
