import type { CountryModuleDefinition } from './types';

/**
 * The country-module registry — the single source of truth for country sub-routes.
 *
 * Pages, navigation, breadcrumbs, the sitemap and the output verifier all derive from this
 * list. Nothing re-declares a module slug by hand.
 *
 * ── A2: slug collision review ────────────────────────────────────────────────
 *
 * Seven module slugs are word-identical to a top-level section: `law-enforcement`, `courts`,
 * `prosecution`, `investigations`, `forensics`, `corrections`, `history`. There is no
 * technical collision — `/law-enforcement` is a depth-1 static route and
 * `/countries/france/law-enforcement` is depth-3 under a different parent — and Next resolves
 * them independently.
 *
 * The real risk is semantic, and it lands on a reader arriving from search who cannot tell
 * which of the two pages they are on. Reusing the vocabulary is still the right call: a reader
 * looking for how France polices is looking for the words "law enforcement", and inventing
 * country-specific synonyms (`policing-structure`, `enforcement-bodies`) would make the two
 * families harder to relate, not easier. The mitigations are:
 *
 *   1. Every country page title carries the country name: "Law enforcement in France", never
 *      "Law enforcement".
 *   2. Breadcrumbs always render Home › Countries › France › Law enforcement.
 *   3. Each module links explicitly to its global counterpart via `relatedSection`, and the
 *      global sections do not link back into a single country as though it were the default.
 *
 * `justice-system`, `border-and-customs`, `oversight`, `timeline` and `sources` are
 * deliberately NOT identical to any section slug. `timeline` and `sources` share a name with a
 * Tier 2 hub (`/timeline`, `/sources`), which is the same depth-based non-collision and the
 * same mitigation.
 *
 * One slug is deliberately absent: `overview`. The overview is the country hub itself at
 * `/countries/{country}`, not a child route. Publishing both would create two URLs competing
 * to be the country's canonical entry point.
 */
export const COUNTRY_MODULES: readonly CountryModuleDefinition[] = [
  {
    id: 'justice-system',
    slug: 'justice-system',
    title: 'Justice system',
    shortTitle: 'Justice system',
    purpose:
      'How the justice system is constituted, and how its main branches relate to each other.',
    relatedSection: 'justice',
  },
  {
    id: 'law-enforcement',
    slug: 'law-enforcement',
    title: 'Law enforcement',
    shortTitle: 'Law enforcement',
    purpose: 'Which bodies enforce the law, under what legal status, and over what territory.',
    relatedSection: 'law-enforcement',
  },
  {
    id: 'courts',
    slug: 'courts',
    title: 'Courts',
    shortTitle: 'Courts',
    purpose: 'How the court system is structured and which court does what.',
    relatedSection: 'courts',
  },
  {
    id: 'prosecution',
    slug: 'prosecution',
    title: 'Prosecution',
    shortTitle: 'Prosecution',
    purpose: 'Who decides whether to prosecute, and what constrains that decision.',
    relatedSection: 'prosecution',
  },
  {
    id: 'investigations',
    slug: 'investigations',
    title: 'Criminal investigations',
    shortTitle: 'Investigations',
    purpose: 'Who investigates crime, under whose direction, and subject to what supervision.',
    relatedSection: 'investigations',
  },
  {
    id: 'forensics',
    slug: 'forensics',
    title: 'Forensic system',
    shortTitle: 'Forensics',
    purpose: 'How forensic work is organised and how its findings reach a court.',
    relatedSection: 'forensics',
  },
  {
    id: 'corrections',
    slug: 'corrections',
    title: 'Corrections and probation',
    shortTitle: 'Corrections',
    purpose: 'How sentences are administered, and who oversees places of detention.',
    relatedSection: 'corrections',
  },
  {
    id: 'border-and-customs',
    slug: 'border-and-customs',
    title: 'Border and customs',
    shortTitle: 'Border and customs',
    purpose: 'Which authorities handle borders and customs, and how their mandates differ.',
    relatedSection: 'public-safety',
  },
  {
    id: 'oversight',
    slug: 'oversight',
    title: 'Oversight and accountability',
    shortTitle: 'Oversight',
    purpose: 'Which bodies review these institutions, with what mandate and what powers.',
    relatedSection: 'justice',
  },
  {
    id: 'history',
    slug: 'history',
    title: 'Institutional history',
    shortTitle: 'History',
    purpose: 'How these institutions developed — not a general history of the country.',
  },
  {
    id: 'timeline',
    slug: 'timeline',
    title: 'Institutional timeline',
    shortTitle: 'Timeline',
    purpose: 'Dated, sourced institutional milestones.',
  },
  {
    id: 'sources',
    slug: 'sources',
    title: 'Sources',
    shortTitle: 'Sources',
    purpose: 'Every source used for this country, with what each one supports.',
  },
];

export function getCountryModule(slug: string): CountryModuleDefinition | undefined {
  return COUNTRY_MODULES.find((m) => m.slug === slug);
}

/** Country hub path. Lowercase slug, never the ISO code, never a trailing slash. */
export function countryPath(countrySlug: string): string {
  return `/countries/${countrySlug}`;
}

export function countryModulePath(countrySlug: string, moduleSlug: string): string {
  return `/countries/${countrySlug}/${moduleSlug}`;
}
