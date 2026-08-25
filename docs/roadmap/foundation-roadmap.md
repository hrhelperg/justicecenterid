# Foundation roadmap

Status as of 2026-07-23. "Done" means committed on
`feat/foundation-and-platform-architecture` and covered by the validation suite.

---

## Phase 0 — Repository audit · done

The repository contained one commit (`afb5bd7 Initial commit`) with a Node `.gitignore` and a
one-line `README.md`. No application, no package configuration, no other branch. Nothing
unexpected was found and nothing had to be worked around.

## Phase 1 — Product, architecture, and editorial documentation · done

Eighteen documents under `docs/`. The editorial and safety documents are the load-bearing
ones: they define the rules the content model then enforces in code.

## Phase 2 — Technical scaffold · done

Next.js 16 App Router, TypeScript strict, Tailwind v4, ESLint 9 flat config, Prettier,
Vitest, Playwright, `netlify.toml`, static export, sitemap, robots, feed, `llms.txt`, typed
navigation/route/metadata/JSON-LD registries.

## Phase 3 — Design system · done

Token layer in `globals.css`, layout primitives, content components, one client component.

## Phase 4 — Foundation public pages · done

Eight section hubs, eight reference hubs, nine platform pages, home, 404.

## Phase 5 — Initial content · done

Twelve concept guides, the glossary, the source registry, the country and profession models,
and a small verified timeline.

## Phase 6 — Validation · done

Lint, typecheck, unit and content validation, production build, exported-output verification,
Playwright browser and accessibility checks. Results are in the implementation report.

---

# What comes next

Ordered by dependency, not by appetite. Each phase states its exit condition, because "more
pages" is not one.

## Next phase — Country model proof

**Why first.** The country model is the largest untested assumption in the architecture. It is
designed to represent absence, structural difference, and historical change, and none of that
has met a real jurisdiction yet. Building three country hubs will expose model defects that no
amount of further documentation will.

**Scope.** Three countries from three different legal-system families and three different
policing structures — deliberately including at least one federal system and one country
without a gendarmerie or sheriff equivalent, so the `PresenceState` model is genuinely
exercised.

Per country, only the modules that can be sourced to Tier 1/2 material: `overview`,
`justice-system`, `law-enforcement`, `courts`, `prosecution`, `oversight`, `sources`. Modules
that cannot be sourced are not published, and their absence is visible.

**Exit condition.** Three country hubs published, each module traceable to primary sources,
the coverage ceiling enforced by tests, and a written list of the model changes the exercise
forced. If it forces no changes, the exercise was done too shallowly.

**Explicitly not in scope.** A fourth country. The point is the model, not the coverage.

## Then — Institution types

The `/institutions` registry becomes detail pages for institution _types_ (police,
gendarmerie, sheriff, marshal, constabulary, federal/state/municipal police, border guard,
customs, coast guard, military police, prosecution service, correctional service, probation
service).

Depends on the country phase, because "what distinguishes a gendarmerie" is only answerable
with real examples of where the type exists, where it does not, and where the name means
something different.

**Exit condition.** Each type page states its distinguishing features, where it exists and
does not, and which types it is routinely confused with — all sourced.

## Then — Professions

Detail pages for the roles in the registry. Responsibilities, decision authority, constraints,
oversight, and training-route structure.

**Gate.** No pay, staffing, attrition, or mortality figures at the general-profession level,
ever. Those belong on a country module with a dated Tier 2 source, or nowhere.

## Then — History and timeline expansion

Historical period pages and a substantially expanded timeline. This is where MDX is likely to
earn its place, because narrative history with inline components is genuinely different from
the structured guide format.

**Gate.** Every timeline entry keeps its verified-source requirement. The timeline grows only
as fast as verification allows, and it continues to describe itself as a selected set of
milestones rather than a chronology.

## Then — Forensic and investigative disciplines

The highest-risk content on the platform. Each page goes through the operational-instruction
test in [content-safety.md](../editorial/content-safety.md) before it goes through fact check,
not after.

**Gate.** `safetyReview: 'cleared'` required. Any page that cannot be written within the
"what it establishes and what its limits are" boundary is not written.

## Then — Comparisons

`/comparisons` becomes real once there is enough country data to compare. A comparison
requires an explicit equivalence claim with a source on both sides, and a statement of what is
not comparable.

**Gate.** No comparison ships before its underlying country modules do.

## Later — Images

Governed by [image-policy.md](../editorial/image-policy.md). The first image requires a
complete verified `ImageRecord`, and the deployment model needs revisiting at that point
because static export gives no image optimisation.

## Later — Search

A prebuilt client-side index over titles, summaries, and glossary terms. Static, no backend,
no third-party search service. Justified only once the corpus is large enough that navigation
stops being sufficient — probably after the institutions phase.

## Later — Translation

The audience is international and reads English as a second language; translation is the
single highest-value expansion after coverage. It is deliberately last, because translating an
unstable content model means translating twice, and because translated legal terminology
needs jurisdiction-aware review rather than a translation pass.

---

## Deliberately deferred, with the reason

| Deferred                       | Reason                                                                                                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Country detail pages           | Require researched, sourced material. Publishing the model without the research would be the thin-programmatic-page failure the architecture exists to prevent. |
| Comparisons                    | Depend on country data that does not exist yet.                                                                                                                 |
| Dark mode                      | Doubles the contrast-validation surface for no reader requirement. Tokens are already semantic, so it is additive later.                                        |
| Images                         | Licensing, dignity, and tone questions that should not be resolved quickly.                                                                                     |
| MDX                            | No current content need. Introduced when narrative history arrives, alongside the typed model rather than replacing it.                                         |
| Analytics                      | No third-party script ships in this phase. Any future choice must be cookieless and disclosed before it ships.                                                  |
| Search                         | Navigation is sufficient at the current scale (~120 pages).                                                                                                     |
| Named editorial board          | There is no editorial team to name, and inventing one is the exact false-authority signal the positioning forbids.                                              |
| Newsletter, accounts, comments | Each adds a data-protection surface and a moderation obligation with no editorial benefit at this stage.                                                        |

## Known limitations of the foundation

Stated plainly so they are not mistaken for completeness:

1. **Coverage is thin by design.** Twelve guides and a glossary. The architecture is built for
   thousands of entities; the content is a demonstration of the standard, not a corpus.
2. **No country has been researched.** `/countries` publishes a model and a coverage table,
   not knowledge.
3. **The timeline is a selected set of verified milestones**, not a chronology, and says so.
4. **Nothing has been reviewed by a subject-matter expert.** Content is sourced to primary
   material and fact-checked against those sources, but no external legal or institutional
   reviewer has seen it. The editorial policy does not claim otherwise.
5. **No images.**
6. **Operator identity and contact addresses are unresolved** and are configuration values,
   not invented content.
7. **Nothing is deployed.** Netlify compatibility rests on a local production build and local
   verification of the exported artefact — not on a deploy.

---

## Phase 2 — France country-model pilot (delivered 2026-07-24)

Branch `feat/france-country-model-pilot`, based on `965b2cc`.

**Preconditions settled first.** All four audit preconditions were implemented and passed a
validation gate before any France content was written: the sub-national jurisdiction model (A1),
the typed country-module registry and slug-collision review (A2), registry-derived output
verification replacing regex parsing (A3), and automated restricted-claim enforcement (A4).

**Published — 7 routes.** `/countries/france` plus six modules: justice-system, courts,
law-enforcement, prosecution, investigations, sources.

**Deliberately unpublished — 6 modules.** forensics, corrections, border-and-customs, oversight,
history, timeline. Each produces no route and 404s on direct request; each carries a stated
reason rendered on the country hub. This is the publication gate working, not a shortfall.

**Coverage of France is partial and is not claimed otherwise.** There is no completion
percentage anywhere in the codebase.

**Model changes forced by real research:** five, documented with sources in
[france-model-findings.md](../research/france-model-findings.md) — `FunctionScope`,
`alsoExercisesLevels`, `SourceRecord.verificationMethod`, the jurisdiction coverage ceiling, and
the registry boundary. Two limitations were accepted rather than fixed: no structured field for
scheduled legal change (F3), and the lexical claim-guard's inability to distinguish use from
mention (F7).

**Also fixed:** a pre-existing sitewide horizontal overflow at 200% text size, caused by the
desktop primary navigation. Not introduced by this phase; found by its accessibility testing.

**Next.** A second country pilot — see the recommendation in
[france-country-pilot-qa.md](../audits/france-country-pilot-qa.md). The open schema question to
resolve first is F3, and the highest-value test of A4 is a country whose pages carry real
statistics.

---

## Phase 3 — Germany federal country pilot (delivered 2026-07-24)

Branch `feat/germany-federal-country-pilot`, based on `e527d5a`.

**Purpose.** Test whether the architecture can honestly represent a federal system. France is
unitary and had exercised only half the jurisdiction model.

**Part A, gated before content.** Structured `ScheduledChange` (closing France finding F3) with
a staleness gate that breaks the build once an effective date passes un-reviewed;
`legislativeCompetence` separating who legislates from who administers; `federal` corrected to a
root jurisdiction level; a `detention-capacity` restricted-claim category.

**Published — 8 routes.** `/countries/germany` plus justice-system, courts, law-enforcement,
prosecution, investigations, corrections, sources.

**Deferred — 5 modules.** forensics, border-and-customs, oversight, history, timeline. Oversight
and history are deferred specifically because a single national page would imply a uniformity
German federalism does not have.

**One real restricted claim published** — prison occupancy at 31 January 2024 from SPACE I, with
its aggregate nature, alternative count, comparability warning and capacity caveat all recorded.

**Land samples.** Bund plus Bavaria, Berlin and North Rhine-Westphalia, chosen for what each
tests. No public Land pages; no municipality records.

**Also fixed.** Every Germany page had shipped disclaiming independence from _France_ — a
hardcoded demonym no test caught, found by looking at a screenshot. And the jurisdictions table's
scroll region is now keyboard reachable.

**Next.** Country pilot three — see the recommendation in
[germany-country-pilot-qa.md](../audits/germany-country-pilot-qa.md).

---

## Phase 4 — United States multilevel country pilot (delivered 2026-07-24)

Branch `feat/united-states-multilevel-country-pilot`, based on `e53a8ff`.

**Purpose.** The decentralisation stress test — sub-national units holding reserved rather than
delegated powers, thousands of separately governed agencies, elected local offices, and more
than one kind of sovereign.

**One model change, evidence-forced.** `authorityBasis` distinguishes where a jurisdiction's
authority comes from (delegated / reserved-powers / inherent-sovereign / federal-plenary) from
where it geographically sits, so a tribal nation can be located within the United States without
being recorded as a subdivision of it. A `tribal` level and two validation rules accompany it.
Both `leadershipSelection` and a structured relationship field were considered and deliberately
not added (handled in prose; the latter deferred to the Canada RCMP pilot).

**Published — 8 routes.** hub, justice-system, law-enforcement, courts, prosecution,
investigations, corrections, sources.

**Deferred — 5 modules.** forensics, border-and-customs, oversight, history, timeline. History
and oversight are deferred because a national summary would erase the state, tribal and racial
complexity that makes them matter.

**One real restricted claim** — the BJS yearend-2023 prison population (1,254,200), with the
prison/jail distinction, the fifty-state aggregation, and the jurisdiction-not-custody basis all
recorded.

**Samples.** Federal, California, Louisiana (parishes), the District of Columbia, and tribal
jurisdiction as a category. No public state or tribal pages.

**Also fixed.** The independence-notice demonym and the "in the United States" article grammar —
both found by reading the rendered pages, neither caught by any test.

**Next.** Country pilot five — Ireland (`feat/ireland-common-law-country-pilot`) — per the
programme sequence. Awaits human review and merge of this branch first.

---

## Phase 5 — Ireland common-law country pilot (delivered 2026-07-25)

Branch `feat/ireland-common-law-country-pilot`, based on `68e4e85`.

**Purpose.** Test a unitary common-law state, and the scope-integrity discipline the earlier
pilots did not need.

**No schema change** — and that is the finding. The model already handles a unitary state
(France); common law versus civil law is content, not structure. Two of the brief's Ireland
model questions (structured NI-exclusion notice; structured bilingual aliases) were considered
and declined in favour of prose. The one structural contribution is behavioural: the first
exercise of the `ScheduledChange` `taken-effect` lifecycle, for the 2 April 2025
policing-oversight reform.

**Published — 9 routes.** hub, justice-system, law-enforcement, courts, prosecution,
investigations, corrections, oversight, sources.

**Deferred — 4 modules.** forensics, border-and-customs (highest scope-integrity risk), history,
timeline.

**One restricted claim** — the SPACE I prison density of 105.4 per 100 places at 31 January 2024
(above capacity), a single unitary national system.

**Scope integrity** held on every page: Ireland the sovereign State, not the island of Ireland
and not Northern Ireland.

**Also fixed:** three latent hardcoded defects inherited from the France pilot (facts-verified
date, "not about France" note, missing Ireland demonym), each shown wrongly on every country hub
and each now regression-tested.

**Next.** Country pilot six — Japan (`feat/japan-prefectural-country-pilot`). This branch was
reviewed and merged into `main` (PR #6), and Japan built on it.

## Phase 6 — Japan prefectural country pilot (delivered 2026-07-25)

Branch `feat/japan-prefectural-country-pilot`, based on `3bce176` (Ireland merge).

**Purpose.** Test a unitary, civil-law state whose **police are administered sub-nationally**
(the first such country), plus the **translation integrity** discipline none of the
English/French pilots needed.

**Two schema additions, both evidence-driven.** `translationStatus` + `authoritativeLanguage`
on `SourceRecord` (A1: Japanese statutes are authoritative only in Japanese); a `prefecture`
jurisdiction level (A3). A structured coordination/command relationship was **declined** — scope
alone (national `policingScope: 'shared'`, prefectural `'own'`) states it honestly, consistent
with the US finding. Each prefecture carries `legislativeCompetence: { policing: 'framework' }` —
administered prefecturally, legislated nationally — reusing the Germany administration/legislation
split for policing. Prefectural samples: **two** (Tokyo, the special Keishicho case; Osaka, the
ordinary model), not all 47, no public prefecture pages.

**Published — 8 routes.** hub, justice-system, law-enforcement, courts, prosecution,
investigations, corrections, sources.

**Deferred — 5 modules.** forensics, border-and-customs, oversight (unlike Ireland — no recent
reform to anchor it), history, timeline.

**No restricted claim (A4 deferred).** Japan's official prison figures are published only in
linked spreadsheets and an oversized White Paper PDF; no scoped, verifiable statistic could be
obtained, so the corrections page publishes none and says so.

**Accessibility.** Inline Japanese script is wrapped in `<span lang="ja">` (WCAG 3.1.2) via a
shared `ScriptText` component and `splitJapaneseRuns`; Latin-only text is byte-for-byte
unchanged, so other country pages are unaffected.

**Correctness discipline.** The NPA is never "Japan's FBI"; prefectural police are not branches
of it; the lay judge (saiban-in) system is a mixed panel for certain serious cases only, not a
jury and not for all trials; no Minister-of-Justice direction over prosecutors is asserted from
an untranslated Act.

**Next.** Country pilot seven — Brazil. This branch was reviewed and merged into `main` (PR #7),
and Brazil built on it.

## Phase 7 — Brazil federal country pilot (delivered 2026-07-25)

Branch `feat/brazil-federal-country-pilot`, based on `65a27d7` (Japan merge).

**Purpose.** Test the most institutionally complex country on the platform — a federation with
six constitutional police forces, an autonomous Ministério Público and a five-branch judiciary —
and the first Portuguese-language country.

**No new schema — and that is the finding.** Brazil reuses machinery every earlier pilot built:
Germany's federal-law / sub-national-administration split (sharpened, because penal and
procedural law are the Union's _exclusive_ competence, CF Art. 22 I, so state records carry
`legalSystemScope: 'national'` and `legislativeCompetence['legal-system'] = 'exclusive-federal'`
— the reverse of the United States); the US `authorityBasis: reserved-powers` (Art. 25 §1); and
France's `alsoExercisesLevels` for the sui-generis Federal District (Art. 32 §1). The two hard
questions — a state running two police forces (Polícia Civil + Polícia Militar), and the
Ministério Público as an autonomous institution — were argued on both sides and answered in
**prose**, per the US "institutions in prose, not typed records" rule, against a research
critic's push for heavier structures.

**Published — 8 routes.** hub, justice-system, law-enforcement, courts, prosecution,
investigations, corrections, sources.

**Deferred — 5 modules.** forensics, border-and-customs, oversight, history (the
military-dictatorship legacy needs careful sourcing), timeline.

**One restricted claim.** SISDEPEN's 31 December 2024 figure — 670,265 people in physical cells
against 494,379 places (deficit 175,886) — aggregating 27 state/DF systems, excluding home
detention, printing no occupancy rate, and supporting no comparison.

**Verification.** Every constitutional and statutory fact was read verbatim from the
authoritative Portuguese Planalto text (retrieved with a browser user-agent), and an independent
adversarial pass re-checked 23 load-bearing claims against official sources with zero
refutations.

**Samples.** br (federation), br-sp (ordinary state), br-df (sui-generis Federal District, whose
police/courts/MP are organised by the Union, Art. 21 XIII–XIV). Not all 26 states; no public
state pages.

**Next.** Country pilot eight — Canada. Brazil was merged into `main` (PR #24), and the
four-country program branch (Canada, Australia, Spain, Switzerland) builds on it.

## Phase 8 — Canada contract-policing pilot (delivered 2026-07-26)

Program branch `feat/canada-australia-spain-switzerland-program`, based on `5f9b517` (Brazil
merge). First country of a four-country program run.

**Purpose.** Resolve the question deferred since the US pilot: does contracted service delivery
between orders of government earn a structured inter-institutional relationship model?

**One additive schema change, and a rejected one.** A new `FunctionScope` value, `contracted`,
for RCMP contract policing (policing is the province's under Constitution Act 1867 s.92(14), but
eight provinces and three territories procure it from the federal RCMP under a Police Service
Agreement, RCMP Act s.20). A typed relationship graph was **rejected**: the s.96 superior courts
(a function the province owns, with federally appointed judges) are the structural analogue and
are modelled with scope + prose, and a named-agency registry would break the "institution types,
not named agencies" invariant. Provider identity (RCMP, OPP, Sûreté du Québec) stays in prose.
`authorityBasis: reserved-powers` was also rejected — Canada's residual (POGG) power is federal —
and the territory reuses `federal-plenary` (the DC value).

**Published — 8 routes.** hub, justice-system, law-enforcement, courts, prosecution,
investigations, corrections, sources. **Deferred — 5.** forensics, border-and-customs, oversight
(Canadian police oversight is genuinely non-uniform — CRCC for the RCMP, separate provincial
bodies — and cannot be shown without implying national uniformity), history, timeline.

**Restricted claim.** Statistics Canada FY2023/2024 provincial/territorial average daily custody
of 25,349.8 adults, of which remand (19,334.5) exceeds sentenced custody (5,895.1) — excludes
federal custody, no comparison.

**Samples.** ca (federal), ca-on and ca-qc (self-policing provinces; Quebec also bijural), ca-bc
(RCMP contract, `contracted`), ca-yt (territory, `federal-plenary`, national prosecution). Every
constitutional and statutory fact read verbatim from the bilingual Justice Laws Website; an
independent adversarial pass re-checked the load-bearing claims against official sources.

**Next in program.** Australia — independently testing whether `contracted` survives the AFP/ACT
community-policing arrangement (the repetition that would earn the abstraction, or refute it).

## Phase 9 — Australia (delivered 2026-07-26)

Second country of the four-country program branch. **No new schema** — Australia's job was to
adversarially test the Canada `contracted` value, and it validated it: the Australian Capital
Territory runs no police of its own (the Commonwealth AFP delivers its community policing "on
behalf of the ACT Government"), so au-act `policingScope: contracted`, while the Northern
Territory runs its own force (`own`). The value is now earned by two independent countries. The
contrast with Canada is captured by the existing `authorityBasis`: Australian states are
`reserved-powers` with their own criminal law (`legalSystemScope: own`) — the US pattern, the
inverse of Canada — and the ACT/NT are `federal-plenary` (the DC/Yukon value). Published 8 routes;
restricted claim the ABS 30 June 2025 census (46,998 prisoners; 27,051 sentenced, 19,850
unsentenced). Constitution s.107 and the AFP/ACT arrangement read verbatim; adversarial pass
11/11 supported. Next in program: Spain.

## Phase 10 — Spain (delivered 2026-07-26)

Third country of the program branch. **One additive schema change** — an `autonomous-community`
JurisdictionLevel — and the defining feature, ASYMMETRIC decentralisation, carried by existing
fields: divergent per-function scope values across sibling community records. Catalonia
(Mossos d'Esquadra) and the Basque Country (Ertzaintza) run their own police and prisons (transfers
by RD 3482/1983 and RD 474/2021); Navarre (Policía Foral) `shared` policing / `national` prisons;
Andalusia `national` throughout — while courts and prosecution are `national` for every community
(judicial unity, art. 117.5; the national Ministerio Fiscal, art. 124). Spain is a decentralised
unitary state (art. 145.1 forbids federation). Legislation on criminal/penitentiary law is
exclusively the State's (art. 149.1.6); administration is what is devolved. No prison statistic is
published — the official series are split by administration and could not be reconciled to one
verified figure. Constitution and the transfer decrees read verbatim from the BOE; adversarial
pass 9/10, with the one flagged item (Navarre's non-integral police) corrected in place. Published
8 routes. Next in program: Switzerland.

## Phase 11 — Switzerland (delivered 2026-07-26)

Final country of the four-country program branch, and a pure-reuse pilot: **no new field, level or
scope value**. Swiss cantons are sovereign with residual power (Constitution art. 3) but apply
federal unified codes (arts. 122/123) — modelled like a US/Brazil state (`reserved-powers`,
`legalSystemScope: national`), at the existing `state` level. There is no national police (fedpol
is narrow-federal) and no federal prison system; the cantons pool prisons through three
inter-cantonal concordats — PEER pooling, so `correctionalScope: shared`, NOT `contracted`, which
draws the boundary of the Canada value from the other side. Multilingual authoritative law
(German/French/Italian, art. 70) is handled in prose. It also exercises the `ScheduledChange` model
against a real direct-democracy change — the BEKJ (Justitia 4.0), enacted 20 Dec 2024 after a
lapsed optional referendum, in force 1 July 2027 — with no `directDemocracy` field. Restricted
claim: the FSO 31 Jan 2026 census of 7,119 detainees. Published 8 routes. This closes the
Canada–Australia–Spain–Switzerland program.

## Phase 12 — Country scaling framework (delivered 2026-07-26)

Converts the ten proven country pilots into a repeatable authoring system without weakening any
control. No new country, no new public route — the public surface is unchanged (118 routes / 118
sitemap / 120 pages).

- **Ten-country audit** (`docs/audits/ten-country-consistency-audit.md`) with a reproducible
  baseline (`docs/audits/country-scaling-baseline.md`, `scripts/country-metrics.mjs`). Four
  verified findings, all fixed: F1 (hardcoded "French" table caption leaked onto 9 hubs), F2 (the
  `/countries` queue showed published countries as "Planned" and mis-counted them), F3 (two
  `COUNTRY_MODULES` registries had drifted; the public one omitted investigations/forensics and
  advertised five phantom/dead modules), F4 (the independence demonym lived in a component, now
  optional dossier data).
- **The canonical dossier contract** (`docs/architecture/country-dossier-contract.md`): five typed
  stores plus prose, required/optional fields, invariants, and anti-patterns.
- **The publication gate** (`src/content/publication-gate.ts`): a single coherent condition set so
  publishing cannot happen by flipping `status` alone. Plus **placeholder/template-leak detection**
  (`src/content/placeholders.ts`) over editorial prose.
- **The unpublished scaffold** (`scripts/scaffold-country.mjs`, `npm run scaffold:country`):
  structure-only, publish-proof, dry-run, collision-safe, with a fictional Exampleland/`XZ` test
  fixture that never ships.
- **Tests**: ten-country semantic regression, gate non-vacuity (six controlled defects), scaffold,
  and placeholder detection — 1081 unit tests total.
- **Authoring docs**: research workflow, authoring checklist, and a proposed three-batch expansion
  plan (no files, routes, or rankings).

Delivered on `feat/country-scaling-framework`. Not merged, not deployed.

## Phase 13 — Batch A: Northern & Western Europe (delivered 2026-07-26)

The first authored country batch on the scaling framework: the Netherlands, Belgium, Denmark,
Norway, Sweden and Finland, each 8 published modules + 4 deferred, verified from primary sources and
an adversarial fact-check pass. Details in `docs/audits/batch-a-northern-western-europe-qa.md`.

- **No new schema.** Two model-pressure countries validated existing abstractions by reuse: Belgium
  is a federal state whose justice functions are federal (the inverse of Germany — one `federal`
  record, all `own`), and Finland's autonomous region Åland validates the `autonomous-community`
  level (policing own, courts/prosecution/corrections national). Everything else — the spread of
  prosecution-independence arrangements, integrated/prosecutor-led investigation, twin-apex courts —
  stayed in prose.
- **Six SPACE I 2024 restricted claims** (density 83.1–112.7), extracted from the primary Council of
  Europe PDF. **+7 jurisdiction records** (including `fi-aland`); no new scheduled changes (all Batch
  A reforms were already completed, recorded in prose).
- Validation: `npm run validate` exit 0; **1340 unit tests / 32 files**; **172 routes / 172 sitemap /
  174 pages**; e2e 98 passed / 4 skipped; static-HTTP matrix clean (aliases and Åland all 404).

Delivered on `feat/batch-a-northern-western-europe`, stacked on `feat/country-scaling-framework`.
Not merged, not deployed.

## Phase 15 — Pre-deployment expansion (delivered 2026-08-10)

The first major **non-country** cluster, plus the two global UI layers the site needs before it
can be public, plus the pre-deployment audit. Details in
`docs/audits/law-enforcement-wave-1-qa.md`.

- **Law-enforcement Wave 1.** 92 candidates assessed → **4 published**, 20 merged, 63 deferred,
  5 rejected (`docs/research/law-enforcement-cluster-plan.md`,
  `docs/seo/law-enforcement-cluster-cannibalization.md`). The brief targeted 30–45 and required
  the count to be evidence-driven; the evidence drove it down. Two whole candidate groups
  (28 items: institution types and professions) are **already-modelled content families** whose
  correct fix is to route the existing records, not to duplicate them as guides; the 14 history
  candidates fail the brief's own archive/museum source gate; OHCHR, ECHR and the Council of
  Europe all return 403 to automated requests, so the powers pages are built on a UN body that
  quotes those instruments — disclosed on every page and enforced by test; and the
  statistics-heavy candidates are restricted claims without dated, jurisdiction-scoped sources.
- **Consent layer, armed but not shown.** Full GDPR/ePrivacy architecture — centralised gate,
  versioned identifier-free record, preferences panel, persistent footer control — with **no
  banner**, because the site stores nothing on a device. Registering one optional technology arms
  it with no component change. `docs/privacy/cookie-consent-architecture.md`.
- **HELPERG ecosystem banner.** 29 owner-supplied products, all 35 URLs content-confirmed by
  reading back each page title. Neutral status vocabulary with no `active` member, no authored
  descriptions, order rather than invented dates, and no link for an unverified record. The
  current product declares no `canonicalUrl` and resolves from `SITE.origin`.
  `docs/architecture/ecosystem-banner.md`.
- **Six named stacking layers** and a reference-counted overlay coordinator enforcing one modal
  at a time. `docs/architecture/overlay-hierarchy.md`.
- **Three defects found by the new tests**: a 51px horizontal overflow at 200% text size (a media
  query resolves `rem` against the browser's initial font size, so the rail's breakpoint never
  moved), a `netlify.toml` claim about a CSP test file that did not exist, and a `/privacy` page
  that became inaccurate the moment consent could store anything. All fixed.
- Validation: `npm run validate` exit 0; **2219 unit tests / 53 files**; **320 routes / 320
  sitemap / 322 pages**; e2e **158 passed / 4 skipped** on desktop and mobile; static-HTTP matrix
  clean across 24 paths with no SPA fallback. Client JS +24,346 B (+3.8%) into an immutably
  cached chunk.

Delivered on `feat/law-enforcement-cluster-and-predeployment-ui`. Not merged, not deployed.

## Phase 16 — Knowledge Expansion Wave 2 (delivered 2026-08-10)

Converts two existing content registries into a routed knowledge graph. Wave 1 deferred 28
candidates on the ground that institution types and professions were already-modelled families
whose correct fix was to route the existing records rather than write parallel guides; this is
that fix. Details in `docs/audits/knowledge-expansion-wave-2-qa.md`.

- **55 candidates assessed → 13 routes.** Seven institution types, six professions, no history
  pages. Merged or aliased 11, deferred 29, rejected 4
  (`docs/seo/knowledge-expansion-wave-2-cannibalization.md`).
- **Routing alone was not enough.** Neither model carried country examples, related roles,
  governance or accountability — four of the twelve required page-contract items. Both were
  extended, and the new `CountryExample` type is the load-bearing addition: it ties a global
  pattern to dossiers the platform has actually researched, and validation rejects an example
  naming an unpublished country.
- **Two institution types are deliberately unrouted.** The source registry holds no border,
  customs, coast-guard or maritime source at all, so those remain hub summaries. `review`
  decides routing and `validateInstitutionPublication` checks the substance behind it.
- **Both hubs became indexes**, resolving the largest collision in the phase — one the routing
  work created rather than any new content.
- **Adversarial QA found a systematic P1**: several country examples asserted facts about a
  named country while the page cited nothing scoped to it. Fixed by attaching the supporting
  country source to each, and prevented from recurring by a mutation-tested invariant.
- **Part C shipped nothing, with the corpus tested host by host.** National Archives, British
  Library, Library of Congress and Historic Hansard reachable; Smithsonian, Met Police,
  Gendarmerie nationale, parliament.uk and Britannica 403. Hansard has no 1829 sittings
  indexed, so the "nine Peelian principles" provenance could not be settled and no Peel page
  was written.
- Validation: 2289 unit tests / 54 files; **333 routes / 333 sitemap / 335 pages**; e2e 216
  passed / 4 skipped; route matrix 361/361. **Client JS +65 bytes** for thirteen pages.

Delivered on `feat/knowledge-expansion-wave-2`. Not merged, not deployed.

## Phase 17 — Knowledge Expansion Wave 3 (delivered 2026-08-10)

Routes the glossary and closes the sub-national policing gap Wave 2 identified. Details in
`docs/audits/knowledge-expansion-wave-3-qa.md`.

- **40 candidates assessed → 9 routes.** Five glossary terms, four sub-national institution
  types; 3 merged or aliased, 27 hub-only, 1 rejected.
- **Glossary routing is derived from the gate, not declared by a flag.** All 32 terms are
  already `fact-checked`, so the Wave 2 discriminator carries no information here. A term is
  routed if and only if `validateGlossaryPublication` passes — there is no field an author
  can set to publish a page.
- **27 terms stay hub-only, and that is the correct result.** Fifteen restate a page that
  already exists (`due-process`, `rule-of-law`, `gendarmerie`, `public-safety` and more —
  `prosecutor` is owned twice); twelve are one-sentence definitions on a single source. The
  ownership map is itself tested: every guide it names must actually exist.
- **The sub-national tier carries typed counterexamples.** Nigeria's constitution forbids
  any police force other than the national one; Kenya's Fourth Schedule keeps policing
  national despite 47 counties; France has administrative tiers that police nothing. Typed
  rather than prose so the distinction survives editing and is asserted by test.
- **Both critical invariants mutation-tested**, and two adversarial findings fixed by
  strengthening: the Nigeria counterexample now quotes s 214(1) verbatim, and the Brazil
  example now states Article 144's actual division between _polícias civis_ and _polícias
  militares_.
- Validation: 2347 unit tests / 55 files; **342 routes / 342 sitemap / 344 pages**; e2e 280
  passed / 4 skipped; route matrix 378/378. **Client JS +29 bytes**, CSS unchanged, and no
  new sources required.

Delivered on `feat/knowledge-expansion-wave-3`. Not merged, not deployed.

## Phase 18 — Knowledge Expansion Wave 4 (delivered 2026-08-10)

The jurisdiction relationship cluster: how policing responsibilities are distributed between
levels of government, and what that means when several agencies hold authority in the same
place. Details in `docs/audits/knowledge-expansion-wave-4-qa.md`.

- **18 candidates → 7 published**, 8 merged, 3 deferred, 0 rejected. Eleven of eighteen were
  the same reader question in different words; merging them is the work.
- **Relationship pages, not institution pages.** No institution record was added and none
  rewritten. Every page is a `Guide` at `/law-enforcement/{slug}` — the first wave in four to
  add pages without adding a route family.
- **Zero JS delta, zero CSS delta.** No client code, no relationship engine, no graph library,
  and no new sources: all seven pages rest on the 225 records verified earlier.
- **Typed vocabulary assessed and declined.** The distinctions are the subject of the prose,
  not metadata about it; an enum whose values only appear in a test does not justify reversing
  the project's earlier rejection of a relationship graph. No architecture document created.
- **Counterexamples on six of seven pages**, typed and sourced: Nigeria (s 214(1) forbids any
  other police force), Kenya (Fourth Schedule), Japan (municipalities own no ordinary police),
  Switzerland (shared, not contracted), France (where hierarchy genuinely does run downwards).
- **Three mutation proofs**, two of which exposed weak tests rather than weak content — including
  a contracted-vs-shared assertion that a paraphrase could satisfy, and a safety test that
  failed on the page's own disclaimer.
- Validation: 2527 unit tests / 56 files; **349 routes / 349 sitemap / 351 pages**; e2e 342
  passed / 4 skipped; route matrix 395/395.

Delivered on `feat/knowledge-expansion-wave-4`. Not merged, not deployed.

## Phase 19 — Knowledge Expansion Wave 5 (delivered 2026-08-10)

Police oversight and accountability institutions: which kinds of body examine police, and
what they can actually do. Details in `docs/audits/knowledge-expansion-wave-5-qa.md`.

- **18 candidates → 2 institution types + 1 guide.** 5 merged, 2 aliased, 8 deferred, 2
  rejected as entities. The number is the evidence: the corpus holds six national
  police-oversight bodies and five ombuds/rights institutions, and **no internal-affairs or
  police-inspectorate source at all**.
- **The corpus did not match the brief's expected countries.** Nine of twelve suggested had no
  oversight sourcing; the countries that did — New Zealand, Norway, Czechia, Denmark, Sweden,
  Austria — were not on the list. The pages follow the corpus.
- **Position is not independence.** A new `oversightPosture` field records inside/outside;
  independence is claimed only alongside a statutory or constitutional basis, and comparative
  or superlative independence language is forbidden by test.
- **Powers are not flattened.** Norway investigates and prosecutes; South Africa is confined
  by statute to deaths, firearm discharges and torture/assault/corruption allegations;
  Czechia covers police, prison service and customs. "The shared label is the weakest thing
  these bodies have in common" is on the page.
- **Ireland exercised the temporal rule**: Fiosrú current, GSOC historical from 2 April 2025,
  bound by test to the ScheduledChange already modelled. No new ScheduledChange was needed.
- **Kenya's IPOA was excluded** despite being a strong example, because the dossier records
  that its establishing Act was not verified in detail — the `note` field doing its job.
- Validation: 2584 unit tests / 57 files; **352 routes / 352 sitemap / 354 pages**; e2e 357
  passed / 4 skipped; route matrix 406/406. **Zero JS delta, zero CSS delta, no new sources.**

Delivered on `feat/knowledge-expansion-wave-5`. Not merged, not deployed.

## Phase 20 — Knowledge Expansion Wave 6 (delivered 2026-08-10)

France oversight deepening: the police inspectorates, internal oversight and external rights
review, researched from French primary instruments before any English label was applied.
Details in `docs/audits/knowledge-expansion-wave-6-qa.md`.

- **The rule was followed literally.** The brief forbade starting from English labels and
  forcing French institutions into them. The research read the décret, the Code de la défense,
  the arrêtés, the loi organique and the Constitution in French first, and the labels were
  tested afterwards. `docs/research/france-oversight-function-matrix.md` records the result
  cell by cell.
- **Every candidate English label failed.** _Internal affairs_ fails because the IGPN conducts
  criminal investigations on its own initiative and both bodies carry a wide organisational
  audit remit. _Inspectorate_ fails on the axis that matters most: an `inspection générale` is
  a service **inside** the force, and the corpus's only inspectorate — Ireland's, dissolved
  2 April 2025 — was external. _Professional standards_ fails because France sets standards by
  a code binding both forces, not by a unit.
- **Zero new institution routes.** `police-inspectorate`, `internal-affairs` and
  `professional-standards` remain deferred — now for reasons rather than for want of sources,
  which is the substantive change Wave 6 makes to Wave 5's verdicts.
- **The finding of the wave: position and power run in opposite directions.** The internal
  IGPN can open a criminal investigation on its own initiative; the external, constitutionally
  established Défenseur des droits cannot investigate a crime or impose a sanction. This is the
  clearest demonstration in the corpus of why `oversightPosture` records position and stops
  there.
- **One route published**: `/countries/france/oversight`, deferred since the France pilot. Its
  `deferredReason` named four bodies whose legal bases were unconfirmed; all four were read
  from primary sources, and the module ships with the Conseil supérieur de la magistrature
  present only as a boundary marker.
- **Three existing pages strengthened**: France as a **counterexample** on
  `independent-police-complaints-body` (no external police-specific body exists), as an example
  on `ombuds-and-rights-institution` (Défenseur des droits), and as an example on
  `who-investigates-police` (two arrangements operating at once).
- **A distinction the labels would have destroyed**: the IGPN's public reporting platform is
  expressly "ni un service d'enquête, ni un service de plainte". A signalement is not a plainte,
  and the page says so.
- **Unlike Wave 5, this wave added sources**: 225 → 235, all France-scoped, all
  content-confirmed. Two ministry prose pages returned HTTP 403 to automated requests and
  nothing was cited from them.
- Validation: 2620 unit tests / 58 files; **353 routes / 353 sitemap / 355 pages**; e2e 402
  passed / 4 skipped; route matrix 412/412. Four mutation proofs, each observed failing for its
  intended reason. **Zero JS delta**, CSS +219 B.

Delivered on `feat/knowledge-expansion-wave-6`. Not merged, not deployed.

## Phase 21 — Knowledge Expansion Wave 7 (delivered 2026-08-25)

Police oversight institutions, phase 2. Ten jurisdictions researched function-first, from
statutes rather than from English labels. Details in
`docs/audits/knowledge-expansion-wave-7-qa.md`.

- **The merge gate stopped the wave once.** Wave 6 was pushed but unmerged, and `main` still
  carried the deferred France oversight module. Building on `main` would have recreated Wave 6's
  French research; building on the branch would have stacked on unmerged work. The wave resumed
  only after Wave 6 was merged, from base SHA `de2b757`.
- **Wave 6's open question is closed.** It made reopening `police-inspectorate` conditional on
  whether the internal and external forms are one type or two. They are **two**: France's
  inspections belong to the forces they examine and investigate individuals; Ireland's Policing
  and Community Safety Authority is external, statutory and investigates nobody. The route stays
  deferred, now with the question answered.
- **One institution family published**: `/institutions/independent-police-investigative-body`,
  on six jurisdictions. It exists because of a negative statutory finding — Norway's chief
  **must reject** a report disclosing no offence, and the Czech Act contains **no complaint
  procedure** for the forces it investigates. A body required to turn away complaints is not a
  complaints body.
- **An existing false equivalence was corrected.** Wave 5 listed Norway and Czechia as country
  examples of `independent-police-complaints-body`. Neither takes complaints. Both are now
  rendered as limits on that page, with tests pinning the correction.
- **Two guides published**, both reversing or extending earlier decisions on new evidence:
  `internal-vs-external-police-oversight` — deferred by Wave 5 as a restatement, reopened
  because Sweden's police authority calls its investigating department "en oberoende avdelning
  **inom** Polismyndigheten" and section 87 of Kenya's National Police Service Act insulates an
  **internal** unit from police command by statute; and
  `police-complaints-vs-criminal-investigation`, which separates the five stages that get called
  "an investigation".
- **The finding of the wave: almost nothing disciplines.** Across sixteen current bodies the
  disciplinary-decision column is `no` or `conditional` everywhere, and the one conditional is an
  _internal_ unit. The strongest arrangement found is South Africa's § 30, which compels a
  Commissioner to _begin_ proceedings within 30 days — a duty on the police to act, not a power
  in the oversight body to decide.
- **Powers are now structured, not prose.** `OversightBodyProfile` records position,
  police-specificity, temporal state, successor linkage, translation status and a nine-power map
  with five support values — including `not-established`, which a test forbids being rendered as
  `no`. `oversightPosture` was deliberately left unchanged: the failure mode it was tempting to
  extend for is a claim problem, not a posture problem.
- **The independence check keys on predication, not vocabulary.** A substring block would forbid
  "being outside the police is not the same as being independent", which is the thesis of one of
  the new pages. It carries its own non-vacuity guard.
- **Nine new sources**, 235 → 244, all content-confirmed. Four legal-information systems refused
  automated requests and nothing was cited from any document that was not read.
- Validation: 2724 unit tests / 59 files; **356 routes / 356 sitemap / 358 pages**; e2e 442
  passed / 4 skipped; route matrix 420/420. Six mutation proofs, each observed failing for its
  intended reason. **Zero JS delta, zero CSS delta.**

Delivered on `feat/knowledge-expansion-wave-7`. Not merged, not deployed.

## Phase 22 — Knowledge Expansion Wave 8 (delivered 2026-08-25)

The criminal-investigation pillar opens. Fourteen jurisdictions, six routes, no new institution
family. Details in `docs/audits/knowledge-expansion-wave-8-qa.md`.

- **No new architecture was needed.** `/investigations/[slug]` was already wired to every guide
  carrying `section: 'investigations'`, and the section already had an `outOfScope` list naming
  investigative technique, surveillance and evasion. Wave 8 added six guide records and no route
  file, no hub and no parallel taxonomy — and inherited the safety boundary rather than inventing
  one.
- **The wave nearly shipped an error and the research caught it.** The working hypothesis was
  that Germany, as an archetypal civil-law system, has no investigating judge. Section 162 StPO
  disproved it: Germany has an office its own ministry's English translation calls an
  _investigating judge_. What differs is function — § 162(1) has the prosecution submit
  applications, and § 162(2) requires the court to examine only "ob die beantragte Handlung nach
  den Umständen des Falles gesetzlich zulässig ist". **Two incompatible offices share one English
  name**, and that became the spine of the page.
- **Zero new institution routes, and that is the finding.** The one candidate with real
  cross-jurisdiction recurrence is judicial police — and its evidence shows it is not one
  institution: a legal _function_ in France (CPP Art. 12), an institutional _role_ under a
  delegado in Brazil (CPP Art. 4), a personnel _status_ in Italy (Const. Art. 109). It ships as a
  guide about the terminology, which is what the evidence supports.
- **The common-law / civil-law dichotomy is refuted on the corpus's own sources.** Japan applies a
  civil-law-derived code with police doing most investigation; Kenya is a common-law system whose
  DPP may constitutionally direct a specific police investigation under Art. 157(4) while Art.
  245(4) bars everyone else; Germany places the duty on the prosecution under § 160(1) while
  § 163(1) gives police their own. A test forbids the dichotomy being asserted anywhere.
- **Sources were reused, not multiplied.** All 32 dossiers already carried a verified
  `investigations` module, so 244 → 246: two German sources, each added because a claim was made
  that no existing source carried.
- **Safety patterns are proved non-vacuous.** Twelve operational patterns — evasion, evidence
  destruction, forensic defeat, warrant avoidance, jurisdiction exploitation, witness interference,
  threshold exploitation and more — are each asserted to match a fixture sentence, so a typo
  cannot silently disable one. Four candidates were deferred on safety grounds, suspect interviews
  deliberately among them.
- **The adversarial pass found a real editorial imbalance.** The cluster stated the constraint side
  of the platform's editorial principle 58 times and the capacity side twice. A capacity passage
  and a "both halves are the design" callout were added and locked by a test.
- Validation: 2882 unit tests / 60 files; **362 routes / 362 sitemap / 364 pages**; e2e 506 passed
  / 4 skipped; route matrix 439/439. Six mutation proofs, each observed failing for its intended
  reason. **Zero JS delta, zero CSS delta.**

Delivered on `feat/knowledge-expansion-wave-8`. Not merged, not deployed.

## Phase 23 — Knowledge Expansion Wave 9 (delivered 2026-08-25)

The courts pillar opens. Twelve jurisdictions, ten routes, one source added. Details in
`docs/audits/knowledge-expansion-wave-9-qa.md`.

- **No new architecture was needed, for the third wave running.** `/courts/[slug]` was already
  wired to guides carrying `section: 'courts'`. Wave 9 added nine guide records and one
  institution record — no route file, no competing hub.
- **The finding of the wave: there is no single court pyramid.** Article 92 of the German Basic
  Law vests judicial power in three distinct categories, and Article 95(1) names **five** federal
  supreme courts each heading a separate branch. France runs two court orders chosen by the nature
  of the dispute. The Netherlands routes administrative law away from its apex entirely. Brazil
  runs three specialised hierarchies alongside federal and state justice. Six of twelve systems
  have more than one hierarchy, and a test forbids the pyramid being asserted.
- **Constitutional court and supreme court are separate institutions, the same one, or neither.**
  Germany, Spain and Belgium keep them apart; Brazil and Japan merge them; Ireland disperses the
  function to the High Court; **Article 120 of the Netherlands Constitution forbids the courts
  from reviewing the constitutionality of Acts of Parliament**, and the place a constitutional
  court occupies elsewhere is deliberately empty.
- **One institution route.** Only the constitutional court recurs structurally. "Supreme court"
  was rejected as an institution family because the label covers four different things; it ships
  as a guide about that variation instead.
- **The Cicero verification changed what was published.** The brief supplied the maxim in its
  common form. Reading _Pro Cluentio_ LIII showed that form is a truncation which drops `omnes`
  and both clauses naming **magistrates and judges** as bound by law — and that the sentences
  immediately after ask the presiding judge and jurors what entitles them to sit at all. Read
  whole, the passage is about the authority of courts being derived from and limited by law, not
  about citizen obedience. The site publishes the full sentence and names the truncation.
- **A mutation proof was rejected and then earned.** M7 initially reported a passing suite because
  its anchor had been reflowed and the mutation never applied. Applied correctly it exposed a real
  hole — the duplicate-question test compared only against other guides, leaving
  `/professions/judge` unguarded. A test was added, and M7 then failed for its intended reason.
- **Sources were reused, not multiplied.** All 32 dossiers already carried verified `courts`
  modules, so 246 → 247: the Latin text of Pro Cluentio, added because no record carried it.
- **Open justice and precedent were deferred**, both for want of sourced material rather than for
  want of interest.
- Validation: 3088 unit tests / 61 files; **372 routes / 372 sitemap / 374 pages**; e2e 610 passed
  / 4 skipped; route matrix 467/467. Seven mutation proofs. **Zero JS delta, zero CSS delta.**

Delivered on `feat/knowledge-expansion-wave-9`. Not merged, not deployed.

## Phase 24 — Knowledge Expansion Wave 10 (delivered 2026-08-26)

The prosecution pillar opens, completing the investigation → prosecution → court chain. Twelve
jurisdictions, eight routes, three sources. Details in
`docs/audits/knowledge-expansion-wave-10-qa.md`.

- **The wave corrected an existing accuracy defect before adding anything.**
  `what-does-a-prosecutor-do` said prosecution services "typically apply a two-stage test" with an
  evidential stage asking about a "realistic prospect of conviction" — resting on two
  international instruments and **no country-scoped source**. § 152(2) StPO obliges the German
  prosecution to act on _zureichende tatsächliche Anhaltspunkte_ and asks nothing about prospects
  of conviction. The passage is now attributed to the systems that use it, and the page carries
  country-scoped sources it previously lacked.
- **The legality/opportunity binary fails on its own archetype.** Germany is the standard legality
  example, and § 153 StPO lets its prosecutors decline minor matters where there is no public
  interest — with the court's consent in the general case. A discretionary judgement inside a
  mandatory framework, and the legal family predicts neither half.
- **Eight different answers to "is the prosecution independent".** A constitutional bar on
  direction (Kenya, Art. 157(10)); functional autonomy outside all three branches (Brazil,
  Art. 127); an office's own statement (Ireland); ministerial authority with instructions barred
  from individual files (France); supervision allocated by statute (Germany, § 147 GVG);
  constitutional _dependencia jerárquica_ (Spain, Art. 124); a serving Minister (Nigeria); and
  mostly elected local officials (United States). Two of them are openly contested and the site
  says so rather than resolving them.
- **Zero institution routes, for the third wave running.** The prosecuting function recurs
  everywhere and the institution does not, so it ships as guides.
- **A latent rendering defect was found and fixed corpus-wide.** `Misconception.reality` renders as
  plain text rather than through the internal-link resolver, so markdown links there reach readers
  as raw `[text](/url)` syntax. Two new instances and **one pre-existing one on a law-enforcement
  guide** were corrected, and a corpus-wide test now forbids it.
- **A mutation proof exposed a missing test again.** M6 — "prosecutors never investigate directly"
  — applied cleanly and passed. The cluster had no guard, and was itself nearly silent on a fact
  four of this site's own pages establish. Acknowledgement added, guards added, M6 re-run and
  observed failing.
- **An adversarial pass found four unused jurisdictions and a false uncertainty note.** Australia,
  Canada, Switzerland and Japan all had verified prosecution modules, and the organisation page
  claimed three of them had not been researched. All four added; Australia's "whoever made the law
  that was broken provides the prosecutor" and Canada's two-axis split are now the clearest federal
  examples in the cluster.
- Validation: 3308 unit tests / 62 files; **380 routes / 380 sitemap / 382 pages**; e2e 696 passed
  / 4 skipped; route matrix 492/492. Eight mutation proofs. **Zero JS delta, zero CSS delta.**

Delivered on `feat/knowledge-expansion-wave-10`. Not merged, not deployed.

## Phase 25 — Knowledge Expansion Wave 11 (delivered 2026-08-26)

The defence pillar opens, completing the central institutional triangle: prosecution, court and
defence. A new top-level section, three jurisdictions, seven routes. Details in
`docs/audits/knowledge-expansion-wave-11-qa.md`.

- **The first wave to need a new section, and the hub name was decided against the brief's
  preference.** The brief proposed `/defense` and required the choice be made on route conventions,
  terminology and international neutrality rather than preference — which is what produced
  `/defence`. The corpus is consistently British English: `defence` appears 39 times in prose,
  `defense` 14 times and **every one a French proper noun**. Every section is a bare function noun,
  so `defence` is the exact parallel to `prosecution`. Added through `SECTION_IDS`, `sections.ts`,
  the router, the registry and the sitemap — and marked **safety-sensitive**, so nothing in it can
  publish without a safety review.
- **The forcing question was answered no.** Brazil's Defensoria Pública is not a public defender
  office. Article 134 gives it the constitutional formula Article 127 uses for the Ministério
  Público, a mandate covering human-rights promotion and collective and extrajudicial matters,
  members holding _inamovibilidade_, and a bar on private practice. Fourth consecutive wave to find
  that the recurring thing is a function whose institutional embodiments differ in kind — so **zero
  institution routes** again.
- **"Right to counsel" is three rights, and no system grants all three to everyone.** Germany's
  § 137 gives assistance at any stage to any accused; § 140 triggers mandatory defence on the
  **seriousness of the case, not on means**; France means-tests aid and pays "tout ou partie" of a
  private avocat's fees; Brazil requires proof of insufficient resources. Publicly organised
  defence is not everywhere a poverty programme.
- **The ECHR could not be read from an authoritative source** — 403 on three Council of Europe
  paths, scanned images on two mirrors. A search summary supplied Article 6(3)(c)'s wording and
  **nothing was quoted from it**; the equality-of-arms page was deferred as a direct consequence.
- **A mutation proof was rejected as invalid and another exposed a weak test.** M5's first attempt
  broke the build — a mutation that stops the module parsing proves nothing — and was redone. M7
  passed because the absolute-privilege check read a 300-character window and a neighbouring
  sentence's "cannot" satisfied it; the check now requires the denial in the same sentence.
- **Wave 10's guard caught Wave 11's content.** The corpus-wide markdown-in-misconception test,
  added one wave earlier after that defect shipped to readers, caught three new instances before
  they did.
- **An adversarial sweep found one false friend, and it was published.** Czechia's _Veřejný
  ochránce práv_ — the "Public Defender of Rights" — is the Ombudsman, not a defence institution.
  It now appears on the funding page as a terminology warning rather than being quietly avoided.
- Validation: 3490 unit tests / 63 files; **388 routes / 388 sitemap / 390 pages**; e2e 782 passed
  / 4 skipped; route matrix 519/519. Ten mutation proofs. **JS +28 B, CSS +30 B** — the first
  non-zero delta, attributable to a new top-level route entering the build manifest, and reported
  as measured rather than rounded.

Delivered on `feat/knowledge-expansion-wave-11`. Not merged, not deployed.
