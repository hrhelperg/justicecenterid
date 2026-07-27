import type { CountryProfile, PresenceState } from './types';

/**
 * The country PLANNING registry — countries that do NOT yet have a published dossier.
 *
 * This is a *planning* registry, not a knowledge base. A country appears here only until its
 * pilot ships; once its dossier is published it is REMOVED from this list and lives in the
 * dossier registry (`src/content/dossiers`) instead. So every entry here is genuinely at
 * coverage `planned`, and the fields that are themselves factual claims — `legalSystemFamilies`
 * and `institutionPresence` — are left empty on purpose.
 *
 * Classifying a country's legal-system family, or recording whether an institution type exists
 * there, is a research output requiring sources. Populating those fields from general impression
 * would be exactly the kind of plausible-but-unsourced content the content model exists to
 * prevent, and `tests/content/countries.test.ts` fails the build if a country below `partial`
 * coverage carries narrative content — or if a published dossier's code is still listed here (the
 * drift that once made /about announce "0 countries researched" while dozens were live).
 *
 * See docs/architecture/content-model.md and docs/roadmap/foundation-roadmap.md.
 */
export const COUNTRIES: readonly CountryProfile[] = [
  {
    code: 'GH',
    name: 'Ghana',
    region: 'Africa',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'KE',
    name: 'Kenya',
    region: 'Africa',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
];

/*
 * The module set a country is assembled from is NOT redeclared here. It lives once, in
 * src/content/country-modules.ts (the route registry), and the /countries page renders that
 * canonical list. A second module array here had drifted — it omitted investigations and
 * forensics (real published modules) and advertised five that never route — so it was removed
 * (finding F3 of the country-scaling audit).
 */

export const PRESENCE_STATE_LABELS: Record<PresenceState, string> = {
  present: 'Present',
  absent: 'Not present',
  'different-function': 'Present under this name, but with a different function',
  historical: 'Formerly present; no longer exists',
  unknown: 'Not established',
};

export const PRESENCE_STATE_DESCRIPTIONS: Record<PresenceState, string> = {
  present:
    'The institution type exists and performs broadly the function this platform describes for that type.',
  absent:
    'No institution of this type exists. Recorded explicitly, because a blank would be indistinguishable from unresearched.',
  'different-function':
    'An institution carrying this name exists but performs a materially different role. The most important state in the model: flattening it into “present” would be a factual error.',
  historical:
    'The institution type existed in the past and no longer does. Never presented in the present tense.',
  unknown:
    'We researched the question and could not establish an answer from acceptable sources.',
};

/**
 * Planning-registry countries **that do not yet have a published dossier**, grouped by region.
 *
 * The exclusion is the whole point (finding F2 of the country-scaling audit): the previous
 * version listed every planning entry, so a country that had since been published still appeared
 * in the "Coverage status" queue badged "Planned" — right beside the link to its researched
 * page. `publishedCodes` is passed in rather than imported from the dossier registry, so this
 * module stays free of a content-layer cycle and the filter is testable with synthetic input.
 */
export function plannedCountriesByRegion(
  publishedCodes: ReadonlySet<string> = new Set(),
): { region: string; countries: CountryProfile[] }[] {
  const regions = new Map<string, CountryProfile[]>();
  for (const country of COUNTRIES) {
    if (publishedCodes.has(country.code)) continue;
    const list = regions.get(country.region);
    if (list) list.push(country);
    else regions.set(country.region, [country]);
  }
  return [...regions.entries()]
    .map(([region, countries]) => ({
      region,
      countries: countries.toSorted((a, b) => a.name.localeCompare(b.name, 'en')),
    }))
    .toSorted((a, b) => a.region.localeCompare(b.region, 'en'));
}

/**
 * The distinct number of countries the site tracks: published dossiers plus planning entries
 * that are not yet published. This is the honest denominator for "N of M countries have
 * researched coverage" — the old code used the raw planning-registry length, which both double
 * counted the six already-published planning entries and ignored the four published countries
 * their pilots had removed from the registry.
 */
export function countryCoverageTotal(publishedCodes: ReadonlySet<string>): number {
  const remainingPlanned = COUNTRIES.filter((c) => !publishedCodes.has(c.code)).length;
  return publishedCodes.size + remainingPlanned;
}
