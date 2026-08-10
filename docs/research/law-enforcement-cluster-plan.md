# Law Enforcement & Policing Knowledge Cluster — Wave 1 plan

**Status:** Wave 1 published 2026-08-10.
**Base:** `main` at `777197d`.
**Branch:** `feat/law-enforcement-cluster-and-predeployment-ui`.

This is the first major non-country cluster on the platform. It sets the pattern for
how a global topic cluster is scoped here, so the reasoning is recorded in full —
including the parts that reduced the wave rather than expanded it.

---

## 1. The editorial objective

Institutional literacy. A reader should finish these pages better able to answer:
what is this institution for, what may it do, what may it not do, and who can examine
whether it stayed inside those limits.

Three things this cluster is explicitly **not**:

- It is not advocacy for police, and not advocacy against them.
- It does not tell a reader what political position to hold on policing.
- It does not give legal advice, and it does not tell anyone what to do in an encounter
  with police.

The platform's existing editorial machinery already enforces most of this: restricted
claims (§6), the `analysis` claim type for the site's own readings, and the
`uncertainty` field for what could not be established.

---

## 2. What the platform already had

This was the single most consequential input to scoping, and it was established by
reading the content registries rather than by assuming.

| Family                 | Where it lives                          | Members | Routable?                                               |
| ---------------------- | --------------------------------------- | ------- | ------------------------------------------------------- |
| Law-enforcement guides | `src/content/guides/law-enforcement.ts` | 3       | Yes — `/law-enforcement/{slug}`                         |
| Justice guides         | `src/content/guides/justice.ts`         | 5       | Yes — `/justice/{slug}`                                 |
| Process guides         | `src/content/guides/process.ts`         | 4       | Yes — courts / prosecution / investigations / forensics |
| **Institution types**  | `src/content/institutions.ts`           | 8       | **No** — rendered on the `/institutions` hub            |
| **Professions**        | `src/content/professions.ts`            | 6       | **No** — rendered on the `/professions` hub             |
| Country dossiers       | `src/content/dossiers/`                 | 33      | Yes, with modules                                       |
| Glossary               | `src/content/glossary.ts`               | 32      | Hub only                                                |

The two bolded rows changed the shape of this wave. See §4.

Pre-existing law-enforcement guides:

- `why-societies-need-law-enforcement`
- `police-and-law-enforcement-difference`
- `how-policing-institutions-changed`

---

## 3. Source feasibility — established before writing, not after

The brief's source standard is Tier 1 first: legislation, constitutions, official
institutions, courts, oversight bodies, UNODC, OHCHR, Council of Europe, EU
institutions, national statistics bodies, official archives.

Feasibility was tested by fetching. The result materially constrained the wave:

| Host                        | Result                             | Consequence                                                                                |
| --------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------ |
| `ohchr.org`                 | **HTTP 403** to automated requests | The 1979 Code of Conduct and 1990 Basic Principles could not be cited from their publisher |
| `echr.coe.int`              | **HTTP 403**                       | ECHR text unavailable for direct citation                                                  |
| `rm.coe.int`                | **HTTP 403** (Cloudflare)          | European Code of Police Ethics unavailable directly                                        |
| `unodc.org`                 | 200, content confirmed             | **Usable** — and it quotes the blocked instruments verbatim                                |
| `digitallibrary.un.org`     | 200, content confirmed             | **Usable** — official UN record of A/RES/34/169                                            |
| `legislation.gov.uk`        | 200, content confirmed             | **Usable** — jurisdiction-specific worked example                                          |
| `un.org`, `treaties.un.org` | Already verified in registry       | Reusable (`udhr`, `iccpr`)                                                                 |

This is the same failure mode the source registry already documents for
`legifrance.gouv.fr`: the most authoritative hosts are the most likely to refuse a
programmatic request. The registry's rule — _a document whose identity could not be
confirmed is not listed_ — was applied rather than worked around.

**The consequence is stated on the pages themselves.** Where a guide reproduces
treaty language it reproduces what UNODC quotes, and says so. That is a weaker claim
than citing the instrument, and it is the claim actually supported.

Sources added in Wave 1: `un-code-of-conduct-1979`, `unodc-e4j-use-of-force`,
`unodc-e4j-police-accountability`, `uk-pace-1984`.

---

## 4. Classification of every candidate

Vocabulary: **publish-now** · **merge** · **defer** · **reject**.

A candidate is publishable only if it has a genuinely distinct reader question _and_
enough authoritative sourcing to justify a standalone route. Failing either test is
not a reason to write a thinner page; it is a reason not to have the route.

### Group 1 — Foundations (10 candidates)

| Candidate                     | Decision              | Reason                                                                                                                                           |
| ----------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| What Is Law Enforcement?      | **merge**             | Answered by the published `why-societies-need-law-enforcement` + `police-and-law-enforcement-difference`. A third page would restate both.       |
| What Is Policing?             | **merge**             | Same intent as the above at search level. See cannibalization doc, pair L1.                                                                      |
| Why Do Societies Need Police? | **merge**             | Already published as `why-societies-need-law-enforcement`.                                                                                       |
| Police vs Law Enforcement     | **already published** | `police-and-law-enforcement-difference`.                                                                                                         |
| What Is Public Order?         | **defer**             | Distinct concept, but `/public-safety` is an existing Tier-1 section with no guides yet. Belongs to a public-safety wave, not here.              |
| What Is Public Safety?        | **defer**             | Same — it is a section, and a guide must not compete with its own section page.                                                                  |
| Civilian Policing             | **defer**             | Real distinction (civilian vs military-status), but the sourcing available is comparative-historical and thin. Revisit with a gendarmerie route. |
| Preventive Policing           | **defer**             | Requires effectiveness literature to be useful, which triggers restricted-claim rules the wave cannot yet satisfy.                               |
| Reactive Policing             | **reject**            | Not a reader question. It exists only as the counterpart in a textbook dichotomy.                                                                |
| Community Policing            | **defer**             | Substantial topic, heavily contested effectiveness claims. Needs its own sourcing pass.                                                          |

### Group 2 — What police do (9 candidates)

| Candidate                       | Decision              | Reason                                                                                                                              |
| ------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Crime Prevention                | **defer**             | Effectiveness-claim heavy; see Group 1 preventive policing.                                                                         |
| Emergency Response              | **defer**             | Sourcing is national and operational; risks becoming advice.                                                                        |
| Criminal Investigation          | **already published** | `/investigations/what-is-a-criminal-investigation`.                                                                                 |
| Maintaining Public Order        | **defer**             | Pair with public order (Group 1) in a public-safety wave.                                                                           |
| Traffic Enforcement             | **defer**             | Almost entirely jurisdiction-specific. Better as country-module prose.                                                              |
| Missing Persons Investigations  | **defer**             | Safety-sensitive and service-specific; high risk of reading as guidance.                                                            |
| Protection of Vulnerable People | **defer**             | Same, and overlaps social-care systems outside this platform's scope.                                                               |
| Crowd and Event Policing        | **defer**             | Good sourcing exists (UNODC/OHCHR model protocol on peaceful protests) but was not read in full this wave. Strong Wave 2 candidate. |
| Crisis and Disaster Support     | **reject**            | Belongs to civil protection, not law enforcement, in most systems.                                                                  |

The general function list is already covered as a `definitionList` inside
`why-societies-need-law-enforcement` §howItWorks. Splitting it into nine routes would
be the exact "100 thin pages" failure the brief prohibits.

### Group 3 — Powers and limits (11 candidates)

| Candidate                    | Decision                           | Reason                                                                                                                           |
| ---------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Use of Force                 | **PUBLISH-NOW**                    | Distinct question, genuinely international framework, Tier-1 sourcing confirmed.                                                 |
| Arrest                       | **merge → `arrest-and-detention`** | See cannibalization pair L4.                                                                                                     |
| Detention                    | **merge → `arrest-and-detention`** | The governing instrument treats them as one subject.                                                                             |
| Search                       | **defer**                          | Separating "search" from "search warrant" is a US-shaped distinction; needs a non-US frame first.                                |
| Search Warrants              | **defer**                          | As above.                                                                                                                        |
| Stop and Search              | **defer**                          | Name is jurisdiction-bound (England and Wales). Publishing under this title would present one country's vocabulary as universal. |
| Police Questioning           | **defer**                          | Planned Wave 2 with right to silence, on ICCPR 14(3)(g). Not written this wave.                                                  |
| Right to Silence             | **defer**                          | As above — merge target, not a separate page.                                                                                    |
| Reasonable Suspicion         | **reject**                         | A jurisdiction-bound term of art. A global page under this title would misdescribe every system that does not use it.            |
| Probable Cause               | **reject**                         | US constitutional term. Publishing it as a global concept is precisely the error the brief names.                                |
| Entry and Search of Property | **defer**                          | Merge candidate with search; same blocker.                                                                                       |

**This is the group where the "do not present US concepts as universal" instruction
did the most work.** Two candidates were rejected outright for that reason, and three
more deferred until a non-US framing is properly sourced.

### Group 4 — Accountability (12 candidates)

| Candidate                            | Decision                                     | Reason                                                                                           |
| ------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Why Police Accountability Matters    | **PUBLISH-NOW**                              | Distinct structural argument, distinct from justice-wide oversight.                              |
| Internal Affairs                     | **merge → `how-police-are-held-to-account`** | One of several answers to one reader question.                                                   |
| Civilian Oversight                   | **merge → same**                             | As above.                                                                                        |
| Independent Police Complaints Bodies | **merge → same**                             | As above.                                                                                        |
| Judicial Oversight of Police         | **merge → same**                             | As above.                                                                                        |
| Complaints Against Police            | **merge → same**                             | Reader-facing "how do I" framing risks becoming advice; covered as a mechanism.                  |
| Prosecuting Police Officers          | **merge → same**                             | Covered as one mechanism among six.                                                              |
| Police Discipline                    | **merge → same**                             | Covered via the disciplinary-vs-criminal distinction.                                            |
| Police Misconduct                    | **defer**                                    | Cannot be written honestly without prevalence claims, which need restricted-claim-grade sources. |
| Body-Worn Cameras                    | **defer**                                    | Effectiveness literature is contested; restricted-claim territory.                               |
| Police Transparency                  | **defer**                                    | Overlaps accountability without a distinct question.                                             |
| Use-of-Force Reporting               | **merge**                                    | Covered inside `police-use-of-force` §rightsAndAccountability.                                   |

Seven merges into one page is the largest consolidation in the wave, and deliberate:
these are not twelve reader questions, they are one question — _who can examine what
the police did, and what can they actually do about it?_ — with several answers.

### Group 5 — Types of institution (14 candidates)

**All 14: defer — architectural, not editorial.**

`src/content/institutions.ts` already models institution types with
`distinguishingFeatures`, `typicalMandate`, `commonConfusions` and `presenceNote`, and
already covers municipal police, national police, gendarmerie, federal investigative
agency, border and customs, coast guard, prosecution service and correctional service.
They currently render on the `/institutions` hub with **no individual routes**.

Writing `/law-enforcement/gendarmerie` as a guide would create a second description of
a thing the platform already describes, in a different content family, with different
fields — a duplicate by construction.

**The correct move is to route the existing `InstitutionType` records**
(`/institutions/{slug}`), not to write parallel guides. That is a route-architecture
change with its own sitemap, breadcrumb and verifier implications, and it is recorded
here as the recommended Wave 2 opening rather than smuggled into a content wave.

### Group 6 — History (14 candidates)

**All 14: defer — sourcing gate not met.**

The brief is unusually specific here: national archives, museums, academic books and
journals, official police museums, Library of Congress, UK National Archives,
Metropolitan Police historical records, recognised university sources — with
Britannica-level works only as secondary support. It also forbids teleological framing
("policing naturally evolved toward today's superior system").

No archive or museum source was verified in this wave, so none of these pages can be
written to that standard yet. Publishing them from general reference works would
breach the stated source standard on the exact topic where the brief set it highest.

The concept-level history is already published as `how-policing-institutions-changed`,
which deliberately declines to name "the first police force" and records why in an
`uncertainty` callout.

### Group 7 — Professions (14 candidates)

**All 14: defer — same architectural reason as Group 5.**

`src/content/professions.ts` already models patrol officer, detective, prosecutor,
judge, forensic scientist and corrections officer, with `responsibilities`,
`decisionAuthority`, `constraints`, `oversight` and a required `jurisdictionNote`.
`Police Officer` / `Patrol Officer` and `Detective` / `Criminal Investigator` are the
same records under different names.

The four context pages (Police Training, Occupational Risks, Stress and
Decision-Making, Ethics in Policing) are deferred for a different reason: each is
dominated by statistics on salary, staffing, injury, mortality, workload or stress,
and every one of those is a **restricted claim** requiring a dated, jurisdiction-scoped
source. None was available. Partially, ethics in policing is already covered inside
`why-police-accountability-matters` §howItWorks, sourced to UNODC.

### "Why justice matters" sub-cluster (8 candidates)

| Candidate                             | Decision   | Reason                                                                                                                                                                         |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/justice/why-justice-matters`        | **defer**  | Competes with the published `/justice/what-is-justice`.                                                                                                                        |
| `/justice/why-rule-of-law-matters`    | **merge**  | `/justice/what-is-the-rule-of-law` already answers it.                                                                                                                         |
| `/law-enforcement/why-police-matter`  | **reject** | Advocacy framing. `why-societies-need-law-enforcement` covers the institutional argument neutrally; a "why they matter" page invites exactly the propaganda the brief forbids. |
| `/courts/why-courts-matter`           | **merge**  | `/courts/what-do-courts-do`.                                                                                                                                                   |
| `/prosecution/why-prosecutors-matter` | **merge**  | `/prosecution/what-does-a-prosecutor-do`.                                                                                                                                      |
| `/justice/why-due-process-matters`    | **merge**  | `/justice/what-is-due-process`.                                                                                                                                                |
| `/justice/security-and-liberty`       | **defer**  | Genuinely distinct and genuinely hard; needs a considered sourcing pass to avoid becoming an essay.                                                                            |
| `/justice/equality-before-the-law`    | **defer**  | Distinct, sourceable from UDHR Art. 7; a justice-wave candidate rather than law-enforcement.                                                                                   |

Six of eight are variations on "why X matters" for a page that already exists. Search
intent for `why courts matter` and `what do courts do` is the same intent.

---

## 5. Wave 1 outcome

| Decision                     | Count  |
| ---------------------------- | ------ |
| Candidates assessed          | **92** |
| **Publish-now**              | **4**  |
| Merged into a published page | 20     |
| Deferred                     | 63     |
| Rejected outright            | 5      |

Published routes:

1. `/law-enforcement/police-use-of-force`
2. `/law-enforcement/arrest-and-detention`
3. `/law-enforcement/why-police-accountability-matters`
4. `/law-enforcement/how-police-are-held-to-account`

Section total: 3 pre-existing + 4 new = **7 law-enforcement guides**.

### Why 4 and not 30–45

The brief targeted 30–45 and required the count to be evidence-driven. The evidence
drove it down, for four separate reasons, each documented above:

1. **Two whole groups (28 candidates) are already-modelled content families.** The fix
   is to route `InstitutionType` and `Profession` records, not to duplicate them as
   guides. Writing them would have created 28 cannibalising pages.
2. **The history group (14 candidates) fails the brief's own source gate.** No archive
   or museum source was verified; the standard set for that group is the highest in the
   brief.
3. **The primary UN instruments are unreachable programmatically.** OHCHR, ECHR and
   Council of Europe all refuse automated requests, so the powers-and-limits group had
   to be built on a UN body that quotes them, which supports fewer pages than citing
   them directly would.
4. **Restricted claims block the statistics-heavy candidates.** Misconduct prevalence,
   body-worn camera effectiveness, occupational risk and community-policing outcomes
   all require dated, jurisdiction-scoped sourcing that this wave does not have.

Publishing 30–45 pages against this evidence would have required either duplicating
existing families, writing history from general reference works, or asserting
effectiveness claims without sources. Each is prohibited by the brief that asked for
the count.

---

## 6. Editorial controls applied

- **Jurisdiction scoping.** Every powers page carries a `scope` callout stating it is
  not legal advice and does not state the law of any country, plus an `uncertainty`
  entry recording that thresholds are domestic.
- **No US-as-universal.** `probable cause` and `reasonable suspicion` rejected as page
  titles; `stop and search` deferred as jurisdiction-bound vocabulary. The one national
  statute cited (`uk-pace-1984`) appears as an explicit worked example, with its note
  stating it supports nothing outside England and Wales.
- **No operational detail.** Use of force describes the standard of review, not tactics.
  Arrest and detention describes safeguards, not how to behave in custody.
- **No effectiveness claims.** `why-police-accountability-matters` states in its
  `uncertainty` field that it makes no claim that oversight works.
- **Site voice separated from sourced fact.** Every interpretive passage is either
  `claim: 'analysis'` or an `analysis` callout titled "Our reading".

---

## 7. Recommended Wave 2

In priority order, with the blocker each must clear:

1. **Route the institution types** — `/institutions/{slug}` for the 8 existing records.
   Architecture, not content. Unblocks 14 Group 5 candidates.
2. **Route the professions** — `/professions/{slug}` for the 6 existing records.
   Unblocks most of Group 7.
3. **Police questioning and the right to silence** — needs ICCPR Art. 14(3)(g) read
   directly from the treaty text already in the registry.
4. **Crowd and event policing** — the OHCHR model protocol on peaceful protests is
   reachable via `unodc.org` and was confirmed to return 200; it needs a full read.
5. **Public order / public safety** — as a `/public-safety` wave, with the section page
   as the hub.
6. **History** — blocked until archive and museum sources are verified. Start with the
   UK National Archives and the Metropolitan Police historical records named in the brief.
