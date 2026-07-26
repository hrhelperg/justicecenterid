# The canonical country dossier contract

Derived from the ten working countries (France, Germany, United States, Ireland, Japan, Brazil,
Canada, Australia, Spain, Switzerland), not designed from theory. It states what a country
dossier is, which data lives where, what must be true to publish, and — just as importantly —
what stays in prose. Types: `src/content/types.ts`. Registries: `src/content/dossiers/`,
`jurisdictions.ts`, `sources.ts`, `restricted-claims.ts`, `scheduled-changes.ts`. Gate:
`src/content/publication-gate.ts`.

## The five stores, and what belongs in each

A country's knowledge is deliberately split across five typed stores plus prose. The split is
the contract's core decision: put a fact where it can be validated, and leave in prose what a
schema would flatten.

| Store                    | File                             | Holds                                                                      | Does NOT hold                                 |
| ------------------------ | -------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------- |
| **Dossier**              | `dossiers/<slug>.ts`             | Country identity, hub prose, the module list, jurisdiction ids, sources    | Institution names as data; statistics as data |
| **Jurisdiction records** | `jurisdictions.ts`               | Per-territory, per-function scope; authority basis; legislative competence | Narrative; agency names                       |
| **Sources**              | `sources.ts`                     | Typed, verified citations with what each supports                          | A claim the source does not cover             |
| **Restricted claims**    | in a module's `restrictedClaims` | The nine most-abused claim categories, fully specified                     | Any measured claim without a metric period    |
| **Scheduled changes**    | `scheduled-changes.ts`           | Known future or just-completed legal changes with a staleness gate         | A legislative-tracking system                 |

Everything else — institution names (RCMP, Sûreté du Québec, Ministério Público), institutional
composition (a state running two police forces), one-off arrangements, multilingual court names
(`Bundesgericht` / `Tribunal fédéral` / `Tribunale federale`) — stays in **prose**, by rule.

## `CountryDossier` — required vs optional

### Required identity

| Field                     | Rule                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `countryCode`             | ISO 3166-1 alpha-2, uppercase. Unique across dossiers.                                                                   |
| `slug`                    | The English country name, lowercased and kebab-cased. The URL segment (`/countries/<slug>`), never the ISO code. Unique. |
| `name`                    | The English country name. Used in every heading and the jurisdiction-table caption.                                      |
| `summary`                 | The hub lead and meta description — one string, one meaning.                                                             |
| `blocks`                  | Substantive hub prose. Non-empty to publish.                                                                             |
| `sources`                 | ≥ 1 to publish.                                                                                                          |
| `status`                  | `published` is the ONLY value that produces a route.                                                                     |
| `review` / `safetyReview` | `review` ≠ `unreviewed` to publish.                                                                                      |
| `updatedOn`               | ISO date; the entity's own, never a build timestamp.                                                                     |
| `modules`                 | The module list (see below).                                                                                             |
| `jurisdictionIds`         | ≥ 1 jurisdiction record.                                                                                                 |

### Optional

| Field                 | When to set                                                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `articleName`         | When the name takes a definite article after a preposition: "the United States", "the Netherlands". Falls back to `name`.                                                                                                         |
| `officialName`        | The formal state name, where useful.                                                                                                                                                                                              |
| `independentBodyNoun` | The demonym for the independence notice ("a French public body"). DATA on the dossier so a new country is self-contained; falls back to a component map (the ten pilots) then a grammatical default. Grammatical, not researched. |
| `factsVerifiedOn`     | ISO date the institutional facts were checked. Required by the publication gate.                                                                                                                                                  |
| `reviewedOn`          | ISO date, when reviewed.                                                                                                                                                                                                          |
| `uncertainty`         | What could not be established. Rendered to the reader.                                                                                                                                                                            |

## `CountryModuleContent` — the module contract

Modules are the country's sub-pages. `status` alone decides routing.

**A published module MUST have:** non-empty `blocks`; ≥ 1 `sources`; `factsVerifiedOn` (ISO);
`review: 'fact-checked'`; `safetyReview` ≠ `pending`; a registered route.

**A deferred module (status ≠ published) MUST have:** a non-empty `deferredReason` (shown on the
hub as a stated gap); **empty** `blocks`; **empty** `sources`. It produces no route, no sitemap
entry, no nav link, and returns 404.

**The minimum published set** (enforced by the gate, = the intersection all ten publish):
`justice-system`, `law-enforcement`, `courts`, `prosecution`, `investigations`, `sources`.
`corrections` is NOT required — France legitimately defers it. The published-module COUNT varies
by country by design (6–8): it is a research output, never a quota.

The module vocabulary (`COUNTRY_MODULE_IDS`) is: `overview` (the hub itself, never a route),
plus the twelve routable modules in `country-modules.ts`. There is exactly one module registry;
the `/countries` "how a country is modelled" section renders it directly.

## Jurisdiction records

One record per territory that does **institutional work** — never one per administrative
subdivision. Per-function `FunctionScope` (`own` / `national` / `shared` / `delegated` /
`contracted` / `none` / `unknown`), with `none` a researched finding and `unknown` an admission,
never interchangeable. `authorityBasis` and `legislativeCompetence` where administration and
legislation, or geography and derivation, diverge. **Tier records vs unit records is a per-country
research decision** the model supports without change (France: 15 tier records; Ireland: 1).

See `jurisdiction-model.md` for the full rules and the `contracted` / `autonomous-community`
histories.

## Sources

Every source is typed, carries what it supports (`note`), and — where it has a URL — a
`verifiedOn` date and a `verificationMethod`. `content-confirmed` is the only method meaning the
document was actually read. A country page may cite only its own-country or `INT` sources
(enforced per country). Journalism alone never supports a restricted claim.

## Restricted claims

The nine most-abused claim categories may be published only as a fully specified `RestrictedClaim`
(category, statement, claim type, ≥ 1 source, `sourceScope`, ISO jurisdiction, temporal scope,
`verifiedOn`, `metricPeriod` for measurements, and a `limitation`). **Prefer deferral to a
manufactured statistic** — France, Japan and Spain each carry none, by choice. A lexical tripwire
(`RESTRICTED_PATTERNS`) additionally fails the build if prose makes such an assertion without a
declared claim.

## Scheduled changes

Optional, and NOT a legislative tracker. One record per known future or just-completed legal
change, existing to stop one failure: a page stating current law that is already known to change.
The load-bearing rule is the staleness gate — once `effectiveOn` passes, a still-`pending` change
fails validation until `reviewedAfterEffect` is recorded. Direct democracy, staged commencement,
and completed transitions all fit without new fields (see `scheduled-change-model.md`).

## Invariants (machine-checked)

1. Only `status: 'published'` dossiers and modules produce routes; drafts are 404 with a stated gap.
2. `/countries/<slug>` uses the readable slug, never the ISO code (`/countries/fr` is 404).
3. Every published dossier passes `validateCountryPublication` (the gate test).
4. No published reader-facing string contains placeholder residue.
5. Every cited source resolves; no source is orphaned; country pages cite only own-country/`INT`.
6. Restricted claims validate; scheduled changes validate against an injected `today`.
7. The route registry, sitemap, and exported output agree (`verify:output`).
8. `factsVerifiedOn` is a fixed research date, never the build clock.

## Invalid combinations (rejected)

- A published dossier missing a required module, a source, a facts date, or hub content.
- A deferred module carrying content or sources, or missing its reason.
- A country code or slug duplicating an existing one; a `/countries/<slug>` route collision.
- A measured restricted claim without a `metricPeriod`, or a claim citing an unresolved source.
- `coverage: 'none' | 'planned'` on a jurisdiction with any researched (non-`unknown`) scope.
- A country below `partial` coverage carrying legal-family, presence, or narrative content.

## What is intentionally prose, not schema

Named institutions and their composition; multilingual names; the enabling instrument behind a
`contracted` arrangement; disputed classifications (a `disputed` claim type on the prose, plus
`notes`); anything where a typed field would assert a false uniformity across countries. The rule
the pilots converged on: **automate structure, keep truth in prose that a source can back.**

## Worked examples (real repository behaviour)

- **Reuse over invention:** Brazil forced no new field — a unified federal criminal law with
  state administration is `legalSystemScope: 'own'` on the federation and `'national'` on the
  states, values the model already had.
- **The smallest honest fix:** Canada's RCMP contract policing earned exactly one enum member
  (`contracted`), not a relationship graph; Australia validated it by repetition; Switzerland drew
  its boundary (`shared` concordats).
- **Deferral over fabrication:** Spain publishes seven modules and **no** restricted claim,
  because its split prison statistics could not be reconciled to one honest figure.
- **A stated gap, not a stub:** France defers corrections — the hub says so, in prose, and no
  corrections route exists.

## Anti-patterns

- A universal schema that tries to model every institution. (Institution identity is prose.)
- An `autonomyLevel` / ranking score. (Asymmetry is a set of per-function facts, not a rank.)
- A second copy of the module list, or a hand-maintained country queue. (Derive from one registry.)
- A "coming soon" stub for an unresearched country. (Absence is shown, never filled.)
- A demonym or country name hardcoded in a reusable component. (It is a prop, or dossier data.)
- Publishing by flipping `status` alone. (The gate binds the boolean to the substance.)
