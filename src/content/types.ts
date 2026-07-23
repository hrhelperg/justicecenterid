/**
 * The content model.
 *
 * This module is the editorial safeguard expressed as types: honest content is easy to
 * express, and several classes of dishonest content are impossible to type. It knows
 * nothing about React, Next.js, or routing, so the whole validation suite runs in Node.
 *
 * Reasoning, and the four deviations from the brief's suggested shape, are documented in
 * docs/architecture/content-model.md.
 */

/* -------------------------------------------------------------------------- */
/* Enumerations                                                               */
/* -------------------------------------------------------------------------- */

export const CONTENT_STATUSES = [
  'draft',
  'research',
  'review',
  'published',
  'archived',
] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

export const REVIEW_STATUSES = [
  'unreviewed',
  'editorial-review',
  'fact-checked',
  'needs-update',
] as const;
export type ReviewStatus = (typeof REVIEW_STATUSES)[number];

export const SAFETY_REVIEWS = ['not-required', 'pending', 'cleared'] as const;
export type SafetyReview = (typeof SAFETY_REVIEWS)[number];

export const SOURCE_TYPES = [
  'legislation',
  'government',
  'court-record',
  'international-organization',
  'academic',
  'archive',
  'museum',
  'book',
  'journalism',
  'institutional',
  'other',
] as const;
export type SourceType = (typeof SOURCE_TYPES)[number];

export const ENTITY_TYPES = [
  'concept',
  'institution',
  'profession',
  'country',
  'jurisdiction',
  'historical-period',
  'legal-system',
  'investigation-method',
  'forensic-discipline',
  'glossary-term',
  'comparison',
] as const;
export type EntityType = (typeof ENTITY_TYPES)[number];

/** Addition: makes "historical is never presented as current" machine-checkable. */
export const TEMPORAL_SCOPES = ['current', 'historical', 'mixed'] as const;
export type TemporalScope = (typeof TEMPORAL_SCOPES)[number];

/** Addition: how the platform tells the truth about what it does not cover. */
export const COVERAGE_STATES = [
  'none',
  'planned',
  'in-research',
  'partial',
  'established',
] as const;
export type CoverageState = (typeof COVERAGE_STATES)[number];

/** Addition: fact/analysis separation at paragraph granularity. */
export const CLAIM_TYPES = [
  'fact',
  'analysis',
  'attributed-opinion',
  'uncertain',
  'disputed',
] as const;
export type ClaimType = (typeof CLAIM_TYPES)[number];

/**
 * Addition: the mechanism for "not every country has sheriffs".
 * `different-function` is the important member — a shared name across jurisdictions does
 * not imply a shared role, and flattening that into `present` would be a factual error.
 */
export const PRESENCE_STATES = [
  'present',
  'absent',
  'different-function',
  'historical',
  'unknown',
] as const;
export type PresenceState = (typeof PRESENCE_STATES)[number];

export const LEGAL_SYSTEM_FAMILIES = [
  'common-law',
  'civil-law',
  'customary',
  'religious',
  'mixed',
] as const;
export type LegalSystemFamily = (typeof LEGAL_SYSTEM_FAMILIES)[number];

/** Tier 1 knowledge sections. A section id is also its URL segment. */
export const SECTION_IDS = [
  'justice',
  'law-enforcement',
  'courts',
  'prosecution',
  'investigations',
  'forensics',
  'corrections',
  'public-safety',
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

/**
 * Sections where a safety review is mandatory before publication.
 * Enforced by tests/content/safety.test.ts.
 */
export const SAFETY_SENSITIVE_SECTIONS: readonly SectionId[] = [
  'law-enforcement',
  'investigations',
  'forensics',
  'public-safety',
];

export const COUNTRY_MODULE_IDS = [
  'overview',
  'justice-system',
  'law-enforcement',
  'courts',
  'prosecution',
  'corrections',
  'border-and-customs',
  'history',
  'ranks-and-organisation',
  'training-and-academies',
  'oversight',
  'professional-conditions',
  'museums-and-archives',
  'timeline',
  'sources',
] as const;
export type CountryModuleId = (typeof COUNTRY_MODULE_IDS)[number];

/* -------------------------------------------------------------------------- */
/* Sources                                                                    */
/* -------------------------------------------------------------------------- */

export interface SourceRecord {
  id: string;
  type: SourceType;
  title: string;
  /** The body responsible for the document, not the host that happens to serve it. */
  publisher: string;
  url?: string;
  /** ISO date or 'YYYY'. Required for sources supporting time-sensitive claims. */
  publishedOn?: string;
  accessedOn?: string;
  /**
   * ISO date the URL was confirmed to resolve to the cited document.
   * Mandatory whenever `url` is present — an unverified URL is not published.
   */
  verifiedOn?: string;
  /** ISO 3166-1 alpha-2, or 'INT' for international instruments. */
  jurisdiction?: string;
  /**
   * What this source actually supports, and what it does not. The most important field
   * for accuracy: it stops a source being reused for a claim it does not cover.
   */
  note?: string;
}

/* -------------------------------------------------------------------------- */
/* Renderable blocks                                                          */
/* -------------------------------------------------------------------------- */

export const CALLOUT_VARIANTS = [
  'note',
  'scope',
  'analysis',
  'uncertainty',
  'disputed',
  'safety',
] as const;
export type CalloutVariant = (typeof CALLOUT_VARIANTS)[number];

/**
 * Blocks carry no HTML. Inline links are written as `[text](/route)` and resolved by the
 * renderer against the route registry, which is what makes internal-link validation
 * possible without parsing rendered output.
 */
export type Block =
  | { kind: 'paragraph'; text: string; claim?: ClaimType; sources?: string[] }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  | { kind: 'definitionList'; items: { term: string; description: string }[] }
  | { kind: 'callout'; variant: CalloutVariant; title: string; text: string };

/* -------------------------------------------------------------------------- */
/* Entities                                                                   */
/* -------------------------------------------------------------------------- */

export interface ImageRecord {
  id: string;
  title: string;
  /** The page establishing the licence — not a hotlink to the file. */
  sourceUrl: string;
  creator: string;
  /** Specific: 'CC BY-SA 4.0', 'Public domain (US, pre-1930)'. Never 'free to use'. */
  license: string;
  attribution: string;
  originalPublishedOn?: string;
  /** Often more important than the publication date. */
  depictedDate?: string;
  jurisdiction?: string;
  /** Describes what is visually present, for a reader who cannot see it. */
  alt: string;
  /** Supplies context the image cannot carry. Must not duplicate the alt text. */
  caption: string;
  /** 'verified' is required to render, and is set by a person, never by default. */
  verification: 'unverified' | 'verified';
}

export interface EntityBase {
  slug: string;
  title: string;
  shortTitle?: string;
  /** Plain language, <= 320 chars. Doubles as the meta description — one string, one meaning. */
  summary: string;
  entityType: EntityType;
  section: SectionId;
  /** Scope of the entity's claims. 'INT' for general/comparative material. */
  jurisdiction?: string[];
  temporalScope: TemporalScope;
  /** Required when temporalScope !== 'current'. */
  historicalPeriod?: string;
  parent?: string;
  children?: string[];
  /** Slugs. Minimum 2 for published entities — forces authors to find real relationships. */
  related: string[];
  /** SourceRecord ids. Minimum 1 for published entities. */
  sources: string[];
  status: ContentStatus;
  review: ReviewStatus;
  safetyReview: SafetyReview;
  updatedOn: string;
  /** Recorded once at first publication; never overwritten by an edit, never backdated. */
  publishedOn?: string;
  /** Required when review !== 'unreviewed'. */
  reviewedOn?: string;
  /** What we could not establish. Rendered to the reader. */
  uncertainty?: string[];
  images?: ImageRecord[];
}

export interface Misconception {
  claim: string;
  reality: string;
  note?: string;
}

/**
 * The concept-guide record.
 *
 * Required blocks are separate fields rather than a loose section array precisely so they
 * cannot be skipped: omitting the jurisdictional-variation block is a type error, not an
 * oversight.
 */
export interface Guide extends EntityBase {
  entityType: 'concept' | 'institution' | 'investigation-method' | 'forensic-discipline';
  /** The reader's question, in the reader's words. */
  question: string;
  /** Plain-language answer. First thing on the page, before history or elaboration. */
  definition: Block[];
  whyItExists: Block[];
  howItWorks: Block[];
  misconceptions: Misconception[];
  /** Jurisdictional variation. Drafted early, not appended at the end. */
  variation: Block[];
  rightsAndAccountability: Block[];
  furtherReading?: Block[];
  /** Glossary slugs defined inline on this page. */
  keyTerms?: string[];
  readingTimeMinutes: number;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  alternateTerms?: string[];
  /** One or two sentences, jurisdiction-neutral. */
  definition: string;
  expandedNote?: string;
  /** How the term's meaning shifts between systems. */
  jurisdictionNote?: string;
  /** Terms it is commonly confused with — the largest single source of reader error. */
  falseFriends?: string[];
  section: SectionId;
  related: string[];
  sources: string[];
  status: ContentStatus;
  review: ReviewStatus;
  updatedOn: string;
  reviewedOn?: string;
}

export interface CountryProfile {
  /** ISO 3166-1 alpha-2, uppercase in data, lowercased in URLs. */
  code: string;
  name: string;
  officialName?: string;
  region: string;
  /** An array because most real systems are mixed; forcing one value would itself be an error. */
  legalSystemFamilies: LegalSystemFamily[];
  coverage: CoverageState;
  plannedModules: CountryModuleId[];
  institutionPresence?: Partial<Record<string, PresenceState>>;
  note?: string;
  sources: string[];
}

export interface Profession {
  slug: string;
  title: string;
  summary: string;
  section: SectionId;
  responsibilities: string[];
  /** What the role can decide, and on whose authority. */
  decisionAuthority: string[];
  constraints: string[];
  oversight: string[];
  /** Structural description only — never country-specific entry requirements. */
  trainingRouteShape: string[];
  commonMisunderstandings?: string[];
  /** Required. Roles vary enormously between systems. */
  jurisdictionNote: string;
  sources: string[];
  status: ContentStatus;
  review: ReviewStatus;
  updatedOn: string;
}

export interface InstitutionType {
  slug: string;
  title: string;
  summary: string;
  section: SectionId;
  /** What makes this type not the adjacent type. */
  distinguishingFeatures: string[];
  typicalMandate: string[];
  commonConfusions: string[];
  /** Required. Where this type does and does not exist. */
  presenceNote: string;
  temporalScope: TemporalScope;
  historicalPeriod?: string;
  sources: string[];
  status: ContentStatus;
  review: ReviewStatus;
  updatedOn: string;
}

export interface TimelineEntry {
  id: string;
  /** Negative for BCE. */
  year: number;
  /** As the source expresses it. */
  displayDate: string;
  title: string;
  description: string;
  region: string;
  /** Why it matters institutionally. */
  significance: string;
  claimType: ClaimType;
  /** Minimum 1, and every source must carry a verified URL or full bibliographic detail. */
  sources: string[];
  /** Dating disputes, contested attribution. */
  uncertainty?: string;
}

/* -------------------------------------------------------------------------- */
/* Type guards used by validation                                             */
/* -------------------------------------------------------------------------- */

export function isPublished(entity: { status: ContentStatus }): boolean {
  return entity.status === 'published';
}

export function isSafetySensitive(section: SectionId): boolean {
  return SAFETY_SENSITIVE_SECTIONS.includes(section);
}
