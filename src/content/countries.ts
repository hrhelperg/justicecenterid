import type { CountryModuleId, CountryProfile, PresenceState } from './types';

/**
 * The country registry.
 *
 * IMPORTANT: at this stage this is a *planning* registry, not a knowledge base. No country
 * has been researched, so every entry is at coverage `planned` and the fields that are
 * themselves factual claims — `legalSystemFamilies` and `institutionPresence` — are left
 * empty on purpose.
 *
 * Classifying a country's legal-system family, or recording whether an institution type
 * exists there, is a research output requiring sources. Populating those fields from general
 * impression would be exactly the kind of plausible-but-unsourced content the content model
 * exists to prevent, and `tests/content/countries.test.ts` fails the build if a country below
 * `partial` coverage carries narrative content.
 *
 * See docs/architecture/content-model.md and docs/roadmap/foundation-roadmap.md.
 */
export const COUNTRIES: readonly CountryProfile[] = [
  {
    code: 'BR',
    name: 'Brazil',
    region: 'South America',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'CA',
    name: 'Canada',
    region: 'North America',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'DE',
    name: 'Germany',
    region: 'Europe',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'FR',
    name: 'France',
    region: 'Europe',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
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
    code: 'ID',
    name: 'Indonesia',
    region: 'Asia',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'IE',
    name: 'Ireland',
    region: 'Europe',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'IN',
    name: 'India',
    region: 'Asia',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'JP',
    name: 'Japan',
    region: 'Asia',
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
  {
    code: 'MX',
    name: 'Mexico',
    region: 'North America',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'NL',
    name: 'Netherlands',
    region: 'Europe',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    region: 'Oceania',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'PL',
    name: 'Poland',
    region: 'Europe',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'SE',
    name: 'Sweden',
    region: 'Europe',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
  {
    code: 'ZA',
    name: 'South Africa',
    region: 'Africa',
    legalSystemFamilies: [],
    coverage: 'planned',
    plannedModules: [],
    sources: [],
  },
];

/** Fixed module slugs, shared across every country so URLs stay comparable. */
export const COUNTRY_MODULES: readonly {
  id: CountryModuleId;
  title: string;
  description: string;
}[] = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'How the justice system is organised, in outline.',
  },
  {
    id: 'justice-system',
    title: 'Justice system',
    description: 'Legal traditions in force, sources of law, and the constitutional framework.',
  },
  {
    id: 'law-enforcement',
    title: 'Law enforcement',
    description: 'Which bodies enforce law, at which level, with which powers.',
  },
  {
    id: 'courts',
    title: 'Courts',
    description: 'Court hierarchy, who decides facts, and routes of appeal.',
  },
  {
    id: 'prosecution',
    title: 'Prosecution',
    description: 'Where the prosecution service sits and how charging decisions are made.',
  },
  {
    id: 'corrections',
    title: 'Corrections',
    description: 'Custodial and non-custodial arrangements, and release mechanisms.',
  },
  {
    id: 'border-and-customs',
    title: 'Border and customs',
    description: 'Which bodies control the movement of people and of goods.',
  },
  {
    id: 'history',
    title: 'History',
    description: 'How the present institutions came to exist, including discontinuities.',
  },
  {
    id: 'ranks-and-organisation',
    title: 'Ranks and organisation',
    description: 'Structure and rank systems, described rather than translated.',
  },
  {
    id: 'training-and-academies',
    title: 'Training and academies',
    description: 'Entry routes and training institutions.',
  },
  {
    id: 'oversight',
    title: 'Oversight',
    description: 'Which bodies examine which institutions, and with what powers.',
  },
  {
    id: 'professional-conditions',
    title: 'Professional conditions',
    description: 'Working conditions and entry requirements, only with dated official sources.',
  },
  {
    id: 'museums-and-archives',
    title: 'Museums and archives',
    description: 'Where the documentary record is held.',
  },
  {
    id: 'timeline',
    title: 'Timeline',
    description: 'Dated institutional milestones, each individually sourced.',
  },
  {
    id: 'sources',
    title: 'Sources',
    description: 'Every source used for this country, in one place.',
  },
];

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

export function countriesByRegion(): { region: string; countries: CountryProfile[] }[] {
  const regions = new Map<string, CountryProfile[]>();
  for (const country of COUNTRIES) {
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
