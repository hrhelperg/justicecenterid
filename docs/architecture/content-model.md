# Content model

The content model is the platform's primary editorial safeguard. It is designed so that
honest content is easy to express and dishonest content is either impossible to type or
caught by validation.

Implementation: `src/content/types.ts`. This document explains the model and the reasoning;
the file is the source of truth for its exact shape.

---

## Design rules

1. **Absence is a value, not a blank.** "This country has no equivalent institution" is
   different from "we have not researched this country", which is different from "we
   researched it and could not determine the answer". All three are representable.
2. **Time is explicit.** Every entity declares whether it describes a current arrangement, a
   historical one, or a mixture. Historical entities must carry a period.
3. **Claims carry their own type.** A paragraph can be marked `fact`, `analysis`,
   `attributed-opinion`, `uncertain`, or `disputed`, and the renderer presents each
   differently. Analysis cannot silently occupy the voice of fact.
4. **Sources are records, not strings.** A source has a type, a publisher, and — where
   time-sensitive — a date and a verification date. Referenced by id, so a source is
   described once and reused.
5. **Structure is required, not encouraged.** A guide's required blocks are separate typed
   fields. Omitting the jurisdictional-variation block is a type error, not an oversight.
6. **Publication is a gate.** `status: 'published'` triggers additional validation that
   drafts do not have to satisfy.

---

## Enumerations

### `ContentStatus`

`draft` · `research` · `review` · `published` · `archived`

Only `published` entities are built into routes and included in the sitemap. `archived`
entities are retained in the repository for provenance but are not rendered.

### `ReviewStatus`

`unreviewed` · `editorial-review` · `fact-checked` · `needs-update`

Rendered to the reader on every substantive page. A `published` entity may not be
`unreviewed`.

`needs-update` is deliberately publishable: a page known to be stale is more useful with a
visible staleness notice than silently withdrawn. It renders a dated notice to the reader.

### `SafetyReview`

`not-required` · `pending` · `cleared`

Entities in `investigations`, `forensics`, `law-enforcement`, and `public-safety` may not be
published with `pending`. This is the mechanism behind principle 15 (no operational
instruction).

### `SourceType`

`legislation` · `government` · `court-record` · `international-organization` · `academic` ·
`archive` · `museum` · `book` · `journalism` · `institutional` · `other`

Ranked by [source-policy.md](../editorial/source-policy.md). `journalism` may support
contextual and contemporary-reporting claims only; it may not be the sole support for a
structural or legal claim.

### `EntityType`

`concept` · `institution` · `profession` · `country` · `jurisdiction` · `historical-period` ·
`legal-system` · `investigation-method` · `forensic-discipline` · `glossary-term` ·
`comparison`

### `TemporalScope`

`current` · `historical` · `mixed`

**Deviation from the brief's suggested shape — added.** The brief requires that historical
structures never be presented as current structures. Storing a `historicalPeriod` string is
not sufficient, because its absence is ambiguous. An explicit scope makes the rule checkable:
`historical` and `mixed` entities must carry a period; `current` entities render a
"described as of \<date>" line.

### `CoverageState`

`none` · `planned` · `in-research` · `partial` · `established`

**Added.** This is how the site tells the truth about what it does not cover. Only `partial`
and `established` produce indexable pages. Everything else appears as a row in a coverage
table.

### `ClaimType`

`fact` · `analysis` · `attributed-opinion` · `uncertain` · `disputed`

**Added.** Implements principle 8 (fact/interpretation/opinion separation) at paragraph
granularity rather than page granularity.

### `PresenceState`

`present` · `absent` · `different-function` · `historical` · `unknown`

**Added.** The mechanism for "not every country has sheriffs". `different-function` is the
important one: an institution may share a name across jurisdictions while doing something
materially different, and flattening that into `present` would be a factual error.

---

## Core records

### `SourceRecord`

```ts
{
  id: string;               // stable, kebab-case, referenced by entities
  type: SourceType;
  title: string;
  publisher: string;        // the institution responsible for the document
  url?: string;             // omitted for offline material (books, archives)
  publishedOn?: string;     // ISO date or 'YYYY'
  accessedOn?: string;      // ISO date
  verifiedOn?: string;      // ISO date the URL was last confirmed to resolve
  jurisdiction?: string;    // ISO 3166-1 alpha-2, or 'INT'
  note?: string;            // scope of what the source supports
}
```

Validation: `id` unique; `title` and `publisher` non-empty; if `url` is present it must be
absolute `https`; a source used to support a time-sensitive claim must have `publishedOn`;
any source with a `url` must have `verifiedOn`.

The `note` field is doing real work: it records _what the source actually supports_, which is
what stops a source being reused for a claim it does not cover.

### `EntityBase`

Shared by every content entity.

```ts
{
  slug: string;
  title: string;
  shortTitle?: string;        // navigation/breadcrumb form
  summary: string;            // plain-language, <= 320 chars, used as meta description
  entityType: EntityType;
  section: SectionId;         // Tier 1 home
  jurisdiction?: string[];    // scope of the entity's claims; 'INT' for general
  temporalScope: TemporalScope;
  historicalPeriod?: string;  // required when temporalScope !== 'current'
  parent?: string;            // slug
  children?: string[];        // slugs
  related: string[];          // slugs, min 2 for published entities
  sources: string[];          // SourceRecord ids, min 1 for published entities
  status: ContentStatus;
  review: ReviewStatus;
  safetyReview: SafetyReview;
  updatedOn: string;          // ISO date
  reviewedOn?: string;        // ISO date, required when review !== 'unreviewed'
  uncertainty?: string[];     // what we could not establish
  images?: ImageRecord[];
}
```

### `Block` — the renderable content unit

A discriminated union, rendered by `components/content/BlockRenderer.tsx`.

```ts
| { kind: 'paragraph'; text: string; claim?: ClaimType; sources?: string[] }
| { kind: 'list'; ordered?: boolean; items: string[] }
| { kind: 'definitionList'; items: { term: string; description: string }[] }
| { kind: 'callout'; variant: CalloutVariant; title: string; text: string }
```

`CalloutVariant`: `note` · `scope` · `analysis` · `uncertainty` · `disputed` · `safety`.

Blocks carry no HTML. Inline links are expressed as `[text](/route)` and resolved by the
renderer against the route registry, which is what makes internal-link validation possible
without parsing rendered output.

### `Guide`

The concept-guide record. Required blocks are separate fields precisely so they cannot be
skipped.

```ts
interface Guide extends EntityBase {
  question: string; // the reader's question, used as H1 where natural
  definition: Block[]; // required — plain-language answer, first on the page
  whyItExists: Block[]; // required
  howItWorks: Block[]; // required
  misconceptions: Misconception[]; // required, min 2
  variation: Block[]; // required — jurisdictional variation
  rightsAndAccountability: Block[]; // required
  furtherReading?: Block[]; // optional
  keyTerms?: string[]; // glossary slugs defined inline on this page
  readingTimeMinutes: number;
}

interface Misconception {
  claim: string;
  reality: string;
  note?: string;
}
```

The required field set is a direct encoding of the brief's per-page requirements: definition,
why it exists, how it functions, common misconceptions, jurisdictional variation,
relationship to rights and accountability, related topics, sources, review metadata.

### `GlossaryTerm`

```ts
{
  slug: string;
  term: string;
  alternateTerms?: string[];     // synonyms and jurisdictional variants
  definition: string;            // one or two sentences, jurisdiction-neutral
  expandedNote?: string;
  jurisdictionNote?: string;     // how the term's meaning shifts between systems
  falseFriends?: string[];       // terms it is commonly confused with
  section: SectionId;
  related: string[];
  sources: string[];
  status; review; updatedOn; reviewedOn?
}
```

`falseFriends` exists because the single largest source of reader error is applying one
system's vocabulary to another.

### `CountryProfile`

```ts
{
  code: string;                  // ISO 3166-1 alpha-2, uppercase in data, lowercase in URLs
  name: string;
  officialName?: string;
  region: string;
  legalSystemFamilies: LegalSystemFamily[];
  coverage: CoverageState;
  plannedModules: CountryModuleId[];
  institutionPresence?: Record<InstitutionTypeId, PresenceState>;
  note?: string;
  sources: string[];
}
```

`LegalSystemFamily`: `common-law` · `civil-law` · `customary` · `religious` · `mixed`.
Recorded as an array because most real systems are mixed, and forcing a single value would
be the model itself producing an inaccuracy.

`CountryModuleId`: `overview` · `justice-system` · `law-enforcement` · `courts` ·
`prosecution` · `investigations` · `forensics` · `corrections` · `border-and-customs` ·
`oversight` · `history` · `timeline` · `sources`. Every member except `overview` (the country
hub itself) is a routable module in `src/content/country-modules.ts`. Four aspirational members
from the original foundation (`ranks-and-organisation`, `training-and-academies`,
`professional-conditions`, `museums-and-archives`) were removed by the country-scaling audit —
no dossier used them and none produced a route.

**Rule:** a country's rendered content may not exceed its `coverage` state. A country at
`planned` may show its name, region, legal-system family, and planned modules — nothing else.
This is enforced by `tests/content/countries.test.ts`, which fails if a country below
`partial` carries narrative content.

### `Profession`

```ts
{
  slug; title; summary; section;
  responsibilities: string[];
  decisionAuthority: string[];     // what the role can decide, and on whose authority
  constraints: string[];           // legal limits on that authority
  oversight: string[];             // who reviews the role's decisions
  trainingRouteShape: string[];    // structural description only
  commonMisunderstandings?: string[];
  jurisdictionNote: string;        // required — roles vary enormously
  sources; status; review; updatedOn;
}
```

There is deliberately no field for salary, staffing level, mortality, attrition, or entry
requirements. Those are country-specific, time-sensitive, and the most common site of
fabrication. When they are added, they will be added on the _country module_, where a
jurisdiction and a dated source are mandatory — not on the general profession record.

### `InstitutionType`

```ts
{
  slug; title; summary; section;
  distinguishingFeatures: string[];   // what makes this type not the adjacent type
  typicalMandate: string[];
  commonConfusions: string[];         // types it is routinely conflated with
  presenceNote: string;               // required — where this type does and does not exist
  temporalScope; historicalPeriod?;
  sources; status; review; updatedOn;
}
```

### `TimelineEntry`

```ts
{
  id: string;
  year: number;                  // negative for BCE
  displayDate: string;           // as the source expresses it
  title: string;
  description: string;
  region: string;
  significance: string;          // why it matters institutionally
  claimType: ClaimType;          // 'fact' requires a primary or archival source
  sources: string[];             // min 1, and required to be verified
  uncertainty?: string;          // dating disputes, contested attribution
}
```

Every timeline entry requires at least one source whose URL has been verified. An entry
without one is not published. The timeline is explicitly a _selected_ set of milestones, not
a chronology, and the page says so.

### `ImageRecord`

No images ship in this phase; the record is defined so that the first image added must
already satisfy the policy.

```ts
{
  id; title; sourceUrl; creator; license; attribution;
  originalPublishedOn?; depictedDate?; jurisdiction?;
  alt: string; caption: string;
  verification: 'unverified' | 'verified';
}
```

`verification: 'verified'` is required for an image to render. See
[image-policy.md](../editorial/image-policy.md).

---

## Validation rules

Implemented in `tests/content/`. Each rule maps to a named test.

| #   | Rule                                                                                                                             | Suite                       |
| --- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| 1   | Slugs are unique within an entity family and globally within routable entities.                                                  | `slugs`                     |
| 2   | Every entity has a non-empty `title` and `summary`; `summary` ≤ 320 characters.                                                  | `entities`                  |
| 3   | Every entity has a valid `entityType` and `section`.                                                                             | `entities`                  |
| 4   | Every `related` slug resolves to an existing entity.                                                                             | `references`                |
| 5   | Every `sources` id resolves to a `SourceRecord`.                                                                                 | `references`                |
| 6   | Source records are well formed; `https` URLs; `verifiedOn` present when `url` is.                                                | `sources`                   |
| 7   | Published entities have `review !== 'unreviewed'` and a `reviewedOn` date.                                                       | `review`                    |
| 8   | `temporalScope !== 'current'` requires `historicalPeriod`.                                                                       | `temporal`                  |
| 9   | Published entities have ≥ 1 source and ≥ 2 `related` entries.                                                                    | `publication-gate`          |
| 10  | Guides have non-empty `definition`, `whyItExists`, `howItWorks`, `variation`, `rightsAndAccountability`, and ≥ 2 misconceptions. | `guides`                    |
| 11  | Every internal link in every `Block` resolves to a route in the registry.                                                        | `links`                     |
| 12  | No non-`published` entity appears in the route registry or sitemap.                                                              | `publication-gate`          |
| 13  | No two routes produce the same canonical URL.                                                                                    | `routes`                    |
| 14  | Country content does not exceed the country's `coverage` state.                                                                  | `countries`                 |
| 15  | Entities in safety-sensitive sections are not published with `safetyReview: 'pending'`.                                          | `safety`                    |
| 16  | Timeline entries have ≥ 1 source with a `verifiedOn` date.                                                                       | `timeline`                  |
| 17  | Every route in the registry has a corresponding file in the exported output, and vice versa.                                     | `scripts/verify-output.mjs` |

---

## Deviations from the brief's suggested shape

The brief invited a better-normalised model where justified. Four additions, each with its
reason:

| Addition                                      | Reason                                                                                                                             |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `TemporalScope`                               | Makes "historical is never presented as current" machine-checkable rather than dependent on an author remembering to add a period. |
| `CoverageState` + the country content ceiling | Turns "represent absence honestly" into an enforced rule instead of an aspiration.                                                 |
| `ClaimType` on paragraphs                     | Moves fact/analysis separation from page level to paragraph level, which is where the confusion actually occurs.                   |
| `PresenceState`                               | Represents "absent", "historical", and — critically — "same name, different function", which a boolean cannot.                     |

One subtraction: no `author` field. In this phase content is not individually bylined,
because a byline implies a named person taking responsibility and there is no editorial team
to name. Attribution is at platform level, and the editorial policy says so explicitly. Adding
a fabricated author or a fictitious editorial board would be exactly the kind of false
authority signal the brief prohibits. When real named reviewers exist, `reviewedBy` is added
alongside `reviewedOn`.
