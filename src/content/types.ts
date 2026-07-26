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

/*
 * The module vocabulary. Every member except `overview` is a routable module in the country
 * module registry (src/content/country-modules.ts); `overview` is deliberately the country hub
 * itself, not a child route, and a test pins that it is absent from the route registry.
 *
 * Four aspirational members from the original foundation — ranks-and-organisation,
 * training-and-academies, professional-conditions, museums-and-archives — were removed by the
 * country-scaling audit (finding F3): no dossier ever used them and they had no route, so they
 * were hypothetical architecture described as current. Where such material exists it is covered
 * inside an existing module's prose, not as a separate route.
 */
export const COUNTRY_MODULE_IDS = [
  'overview',
  'justice-system',
  'law-enforcement',
  'courts',
  'prosecution',
  'investigations',
  'forensics',
  'corrections',
  'border-and-customs',
  'oversight',
  'history',
  'timeline',
  'sources',
] as const;
export type CountryModuleId = (typeof COUNTRY_MODULE_IDS)[number];

/* -------------------------------------------------------------------------- */
/* Jurisdictions (precondition A1)                                            */
/* -------------------------------------------------------------------------- */

/**
 * Levels at which a jurisdiction can sit.
 *
 * Deliberately a flat vocabulary rather than a universal geopolitical ontology. It covers the
 * systems we can foresee needing — France, US, UK, Germany, Canada, autonomous regions,
 * dependent territories — and stops there. Adding a level later is cheap; unwinding an
 * over-general ontology is not.
 */
export const JURISDICTION_LEVELS = [
  'international',
  'supranational',
  'country',
  'federal',
  'constituent-country',
  /*
   * Added by the Spain pilot. A Spanish autonomous community (comunidad autónoma) is a
   * politically autonomous region with its own Statute of Autonomy, elected assembly and
   * devolved competences — some run their own police and prison administration. Filing it under
   * `region` (a French-style administrative tier with no legislative power) would group two
   * categorically different things, exactly the miscategorisation the Japan pilot avoided by
   * adding `prefecture`. Spain is a decentralised UNITARY state, not a federation — its
   * Constitution (art. 145.1) expressly forbids federation of the communities.
   */
  'autonomous-community',
  'state',
  'province',
  'region',
  'department',
  /*
   * Added by the Japan pilot. A Japanese prefecture (todofuken) is the first-level sub-national
   * division and, crucially for this platform, the level at which police are administered.
   * `province` would be the nearest existing fit, but Japan's prefectures are institutionally
   * central to the pilot (prefectural police, prefectural public safety commissions), so a
   * `province` label would obscure exactly what the pilot is testing. Adding a level is cheap.
   */
  'prefecture',
  'county',
  'municipality',
  'local',
  'territory',
  /*
   * Added by the United States pilot. A tribal nation is not a state, a territory or a special
   * subdivision — it is a separate sovereign. Filing it under `special` (the previous grab-bag)
   * would group an inherent sovereign with administrative special-status regions and quietly
   * misdescribe it. See `authorityBasis`.
   */
  'tribal',
  'special',
] as const;
export type JurisdictionLevel = (typeof JURISDICTION_LEVELS)[number];

/**
 * Where a jurisdiction's authority comes from — as distinct from where it geographically sits.
 *
 * Forced by the United States pilot. The parent link (`parentJurisdictionId`) had one meaning
 * in the France and Germany pilots: the child derives its competences from the parent (a
 * département from the Republic, a Land from the federation, both under the national
 * constitution). The US breaks that, because geographic inclusion is not legal subordination:
 *
 *   - A tribal nation sits geographically within the United States and usually within a state,
 *     but its sovereignty is INHERENT — it predates the Constitution and is not derived from
 *     the federal government. Recording its parent as `us` without this field would assert that
 *     a tribe is a subdivision of the federal government, which is false and is exactly the
 *     error the platform exists to prevent.
 *   - The states hold RESERVED powers (Tenth Amendment): authority not delegated to the
 *     federation is reserved to them, the inverse of a system where sub-national bodies derive
 *     their powers from the centre.
 *   - The District of Columbia is under Congress's PLENARY authority — neither a reserved-power
 *     state nor an inherent sovereign.
 *
 * Optional. Every France and Germany record omits it and is unaffected; the default
 * (`delegated`) is the parent-derives meaning those pilots already assumed.
 */
export const AUTHORITY_BASES = [
  /** Derived from and subordinate to the parent jurisdiction. The prior default meaning. */
  'delegated',
  /** Powers reserved to this level; the centre holds only what is enumerated to it. */
  'reserved-powers',
  /** Inherent sovereignty not derived from the parent; parent link is geographic only. */
  'inherent-sovereign',
  /** Under the plenary authority of the national legislature; not a reserved-power unit. */
  'federal-plenary',
  /** Not researched. */
  'unknown',
] as const;
export type AuthorityBasis = (typeof AUTHORITY_BASES)[number];

/**
 * How a jurisdiction relates to one institutional function.
 *
 * This exists because **a geographic subdivision is not automatically a legal jurisdiction**,
 * and conflating the two is the commonest error in comparative writing. A French département
 * is a real administrative territory, but it does not have its own court system — the judicial
 * map is drawn separately and does not follow departmental boundaries. Recording that as
 * `national` rather than `own` is the difference between an accurate page and a
 * plausible-sounding wrong one.
 */
export const FUNCTION_SCOPES = [
  /** This jurisdiction has its own distinct arrangement for this function. */
  'own',
  /** The function is organised nationally; this level is not where it is decided. */
  'national',
  /** Shared with, or exercised jointly with, another jurisdiction. */
  'shared',
  /** Exercised here, but under authority delegated from a parent jurisdiction. */
  'delegated',
  /**
   * This jurisdiction holds the function but procures its DELIVERY from an institution of
   * another order of government under an agreement — the provider stays owned and governed by
   * the other order; the client funds the service but does not own the institution.
   *
   * Added by the Canada pilot. RCMP contract policing is the forcing case: policing is
   * constitutionally the province's (Constitution Act 1867 s.92(14)), but in eight provinces
   * and the three territories it is delivered by the Royal Canadian Mounted Police — a federal
   * institution that remains federally governed (RCMP Act ss.3, 5) — under a cost-shared Police
   * Service Agreement (RCMP Act s.20). None of `own` (not the province's force), `delegated`
   * (delegation runs parent→child; here a province procures a federal service), `national` (the
   * province decides and pays most of the cost) or `shared` (implies concurrent authority that
   * does not exist) states this honestly. The provider's identity and the agreement's terms live
   * in the module PROSE, not in a typed institution registry — this is a scope value, not a
   * relationship graph. Contrast the s.96 superior courts, which the province OWNS (courtScope
   * `own`) with federally appointed judges: that is a note on an owned institution, not procured
   * delivery, so it stays `own`.
   */
  'contracted',
  /** The function does not exist at this level at all. */
  'none',
  /** Not yet researched. Never a substitute for `none`. */
  'unknown',
] as const;
export type FunctionScope = (typeof FUNCTION_SCOPES)[number];

/**
 * The five institutional functions the jurisdiction model tracks.
 */
export const INSTITUTIONAL_FUNCTIONS = [
  'legal-system',
  'policing',
  'courts',
  'prosecution',
  'corrections',
] as const;
export type InstitutionalFunction = (typeof INSTITUTIONAL_FUNCTIONS)[number];

/**
 * WHO MAY LEGISLATE on a function — as distinct from who administers it.
 *
 * Forced by the Germany pilot. The Basic Law separates these two questions explicitly and
 * they do not track each other: Article 74(1) no. 1 places criminal law and court organisation
 * under *concurrent* legislative power, while Article 83 provides that "the Länder shall
 * execute federal laws in their own right". Federal law, Land administration, in the same
 * sentence of constitutional design.
 *
 * `FunctionScope` answers only the administration question. Recording Germany with
 * `courtScope: 'own'` at Land level is correct and, on its own, actively misleading — it
 * suggests the Länder also write the law of court organisation, which they largely do not.
 * France never exposed this because a unitary state collapses the two.
 */
export const LEGISLATIVE_COMPETENCES = [
  /** Only the federal/national level may legislate. */
  'exclusive-federal',
  /** Both levels may legislate, typically with federal law taking precedence when exercised. */
  'concurrent',
  /** The federal level sets a framework; the sub-national level fills it in. */
  'framework',
  /** Only the sub-national level may legislate. */
  'exclusive-subnational',
  /** No legislative competence attaches at this level. */
  'none',
  /** Not researched. */
  'unknown',
] as const;
export type LegislativeCompetence = (typeof LEGISLATIVE_COMPETENCES)[number];

export interface JurisdictionRecord {
  id: string;
  /** URL-safe segment. Unique within a country. */
  slug: string;
  name: string;
  shortName?: string;
  /** ISO 3166-1 alpha-2, or 'INT'/'EU' for international and supranational records. */
  countryCode: string;
  level: JurisdictionLevel;
  /**
   * Additional tiers whose competences this jurisdiction also exercises.
   *
   * Forced by the France pilot. Martinique and Guyane are *collectivités territoriales
   * uniques*: a single body exercising both departmental and regional competences, created
   * under the last paragraph of Constitution Article 73. A flat `level` cannot express that,
   * and picking either tier alone would be factually wrong.
   */
  alsoExercisesLevels?: JurisdictionLevel[];
  /**
   * The parent this jurisdiction sits under.
   *
   * Its meaning is usually derivation — the child's competences come from the parent. But
   * where `authorityBasis` is `inherent-sovereign`, the parent link records GEOGRAPHIC
   * containment ONLY, not derivation of authority. A tribal nation within the United States is
   * located within it without being a subdivision of it.
   *
   * Omitted only for `country`, `supranational`, `international` and `federal` records.
   */
  parentJurisdictionId?: string;
  /**
   * Where this jurisdiction's authority comes from. See `AuthorityBasis`. Optional; the
   * absence of the field means the ordinary "derived from parent" relationship.
   */
  authorityBasis?: AuthorityBasis;
  /*
   * The five *Scope fields answer ONE question: who administers or executes this function.
   * They do not say who legislates on it. See `legislativeCompetence`.
   */
  legalSystemScope: FunctionScope;
  policingScope: FunctionScope;
  courtScope: FunctionScope;
  prosecutionScope: FunctionScope;
  correctionalScope: FunctionScope;
  /**
   * Who may legislate on each function, where that differs from who administers it.
   *
   * Optional: in a unitary state the question is usually not interesting and the field is
   * omitted. In a federal state omitting it on a sub-national record is a research gap, not a
   * neutral default, and validation says so once coverage passes 'in-research'.
   */
  legislativeCompetence?: Partial<Record<InstitutionalFunction, LegislativeCompetence>>;
  temporalScope: TemporalScope;
  /** Required when temporalScope is not 'current'. */
  historicalPeriod?: string;
  coverage: CoverageState;
  sources: string[];
  /** Structural explanation only. Not a place for unsourced narrative. */
  notes?: string;
  status: ContentStatus;
}

/* -------------------------------------------------------------------------- */
/* Country modules (precondition A2)                                          */
/* -------------------------------------------------------------------------- */

/**
 * One module of a country dossier.
 *
 * `status` alone decides whether a route exists. A module that has not been researched to
 * publication standard stays `draft`, produces no route, appears in no sitemap and no
 * navigation, and must carry a `deferredReason` that is shown on the country hub — so a
 * reader can see what is missing rather than inferring that it does not exist.
 */
export interface CountryModuleContent {
  moduleId: CountryModuleId;
  /** Page title. Always names the country: "Law enforcement in France". */
  title: string;
  /** Reader-facing summary; also the meta description. */
  summary: string;
  blocks: Block[];
  sources: string[];
  status: ContentStatus;
  review: ReviewStatus;
  safetyReview: SafetyReview;
  updatedOn: string;
  reviewedOn?: string;
  /** ISO date the institutional facts on this module were checked against sources. */
  factsVerifiedOn?: string;
  temporalScope: TemporalScope;
  restrictedClaims?: RestrictedClaim[];
  /** Slugs of global guides this module should link to. */
  relatedGuides?: string[];
  uncertainty?: string[];
  /** Required when status is not 'published'. Rendered on the country hub. */
  deferredReason?: string;
}

export interface CountryDossier {
  /** ISO 3166-1 alpha-2. */
  countryCode: string;
  /** URL segment: the English country name, lowercased. */
  slug: string;
  name: string;
  /**
   * The name as it reads after a preposition, where it takes a definite article: "the United
   * States", "the Netherlands". Optional; falls back to `name`. Added by the US pilot, where
   * "Justice and public safety in United States" was ungrammatical.
   */
  articleName?: string;
  officialName?: string;
  /**
   * How to name this state's public bodies in the independence disclosure — "a French public
   * body", "a Swiss government body". Grammatical, not researched: it carries the correct
   * article and demonym so the notice reads naturally.
   *
   * Optional, and DATA rather than a lookup inside the reusable component (the finding F4 of the
   * country-scaling audit): a new country carries its own noun on its dossier instead of
   * requiring an edit to a shared map. The renderer falls back to a grammatical default
   * ("a government body of X") when it is absent, so omitting it is safe but unpolished — the
   * publication gate and the scaffold both require it for a new country.
   */
  independentBodyNoun?: string;
  /** Reader-facing summary of the hub page. */
  summary: string;
  /** The hub page body. */
  blocks: Block[];
  sources: string[];
  status: ContentStatus;
  review: ReviewStatus;
  safetyReview: SafetyReview;
  updatedOn: string;
  reviewedOn?: string;
  factsVerifiedOn?: string;
  modules: CountryModuleContent[];
  /** Jurisdiction record ids belonging to this country. */
  jurisdictionIds: string[];
  uncertainty?: string[];
}

export interface CountryModuleDefinition {
  id: CountryModuleId;
  /** URL segment under /countries/{country}/. Identical to `id` by rule — see the A2 review. */
  slug: string;
  title: string;
  shortTitle: string;
  /** The reader question this module answers. */
  purpose: string;
  /**
   * The global Tier 1 section this module relates to, for cross-linking only. It does NOT
   * nest the route: country modules live under /countries/{code}/, never under the global
   * section.
   */
  relatedSection?: SectionId;
}

/* -------------------------------------------------------------------------- */
/* Restricted claims (precondition A4)                                        */
/* -------------------------------------------------------------------------- */

/**
 * The nine claim categories the editorial policy restricts: the assertions most often made
 * from impression rather than evidence, and the most damaging when wrong.
 */
export const RESTRICTED_CLAIM_CATEGORIES = [
  /*
   * Added by the Germany pilot. The original nine were derived from claims about
   * institutions and their personnel; a claim about the *detained population* — prison
   * numbers, capacity, occupancy, overcrowding — had no category at all, despite being one
   * of the most frequently asserted and most frequently mis-sourced figures in this field.
   */
  'detention-capacity',
  'compensation',
  'crime-levels',
  'corruption',
  'institutional-effectiveness',
  'public-trust',
  'occupational-harm',
  'staffing',
  'political-control',
  'human-rights-performance',
] as const;
export type RestrictedClaimCategory = (typeof RESTRICTED_CLAIM_CATEGORIES)[number];

/**
 * A restricted claim may only be published as a fully specified record.
 *
 * Every field is required for a reason. The failure mode here is not a missing citation — it
 * is a citation that exists but does not support the claim at the scope, jurisdiction or date
 * asserted. `sourceScope`, `jurisdiction`, `metricPeriod` and `limitation` are what make that
 * checkable instead of assumed.
 */
export interface RestrictedClaim {
  id: string;
  category: RestrictedClaimCategory;
  /** The claim exactly as it is made to the reader. */
  statement: string;
  claimType: ClaimType;
  /** Minimum one. Journalism alone is never sufficient for a restricted claim. */
  sources: string[];
  /** What the cited source actually establishes — not what the claim needs it to. */
  sourceScope: string;
  /** ISO 3166-1 alpha-2, or 'INT'. */
  jurisdiction: string;
  temporalScope: TemporalScope;
  /** ISO date the claim was checked against the source. */
  verifiedOn: string;
  /** The year or period the figure describes. Required whenever the claim is a measurement. */
  metricPeriod?: string;
  /** Required. What the claim does not establish. */
  limitation: string;
}

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
  /**
   * How that verification was performed.
   *
   * Forced by the France pilot. legifrance.gouv.fr and interieur.gouv.fr return HTTP 403 to
   * an automated request while serving the document normally to a browser, so a status-code
   * probe produces false negatives on exactly the most authoritative French sources — the
   * mirror of the false positives HTTP 200 produces elsewhere. Recording the method is what
   * keeps "verified" meaningful in both directions.
   *
   * `content-confirmed` is the only value meaning the document was actually read and
   * confirmed to say what the citation claims.
   */
  verificationMethod?: 'content-confirmed' | 'status-probe' | 'offline';
  /** ISO 3166-1 alpha-2, or 'INT' for international instruments. */
  jurisdiction?: string;
  /**
   * For a source that is a TRANSLATION, its status. Forced by the Japan pilot.
   *
   * The Japanese Law Translation database (Ministry of Justice) states that its English texts
   * are "to be used solely as reference materials … with only the original Japanese texts
   * having legal effect". That is a machine-checkable fact the note field could only carry as
   * prose, and translation integrity is the whole point of the Japan phase — so the
   * distinction earns a structured, testable field.
   *
   * `not-a-translation` is the default meaning for a source in its own authoritative language
   * (most sources), and is left unset there. The value matters when a source is cited in a
   * language other than the one whose text has legal effect.
   */
  translationStatus?:
    'not-a-translation' | 'official-reference' | 'official-authoritative' | 'unofficial';
  /**
   * The language (BCP-47 / ISO 639) whose text has legal effect, where that differs from the
   * language cited. Recorded alongside `translationStatus` so a reader and a test can both see
   * that, e.g., a Japanese statute cited in English English is authoritative only in Japanese.
   */
  authoritativeLanguage?: string;
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

/* -------------------------------------------------------------------------- */
/* Scheduled change (resolves France finding F3)                              */
/* -------------------------------------------------------------------------- */

export const SCHEDULED_CHANGE_TYPES = [
  'amendment',
  'repeal',
  'replacement',
  'reorganization',
  'transfer-of-competence',
  'merger',
  'dissolution',
  'renaming',
  'jurisdiction-change',
  'planned',
  'unknown',
] as const;
export type ScheduledChangeType = (typeof SCHEDULED_CHANGE_TYPES)[number];

/**
 * How firm the change is. The model must not assume every announced reform takes effect.
 * Only `enacted-with-date` may be presented to a reader as something that *will* happen.
 */
export const CHANGE_CERTAINTIES = [
  'enacted-with-date',
  'announced',
  'proposed',
  'uncertain',
] as const;
export type ChangeCertainty = (typeof CHANGE_CERTAINTIES)[number];

export const SCHEDULED_CHANGE_STATUSES = [
  /** Enacted or announced, effective date still in the future. */
  'pending',
  /** The effective date has passed and affected content has been re-reviewed. */
  'taken-effect',
  /** Replaced by a later instrument before taking effect. */
  'superseded',
  /** Abandoned, repealed before commencement, or struck down. */
  'cancelled',
] as const;
export type ScheduledChangeStatus = (typeof SCHEDULED_CHANGE_STATUSES)[number];

/**
 * A known future change to law or institutional arrangement.
 *
 * Deliberately NOT a legislative-tracking system. It exists to stop one specific failure:
 * a page stating current law correctly, and still being wrong later because a repeal date was
 * already known when the page was written.
 *
 * The load-bearing rule is the staleness gate. Once `effectiveOn` has passed, a `pending`
 * change fails validation until someone records `reviewedAfterEffect` — so the build breaks
 * rather than the site quietly describing superseded law as current.
 */
export interface ScheduledChange {
  id: string;
  changeType: ScheduledChangeType;
  /** ISO date the change takes effect. */
  effectiveOn: string;
  enactedOn?: string;
  announcedOn?: string;
  /** Ids of entities, jurisdictions or country modules the change affects. Minimum one. */
  affectedEntityIds: string[];
  /** Ids of restricted claims the change affects. */
  affectedClaimIds?: string[];
  description: string;
  /** Minimum one. A scheduled change without authoritative support is not published. */
  sources: string[];
  certainty: ChangeCertainty;
  status: ScheduledChangeStatus;
  /** The change this one replaces, where applicable. */
  supersedes?: string;
  /**
   * ISO date on which affected content was re-reviewed against the new position. Required
   * once `effectiveOn` is in the past and the change is still `pending`.
   */
  reviewedAfterEffect?: string;
  notes?: string;
}
