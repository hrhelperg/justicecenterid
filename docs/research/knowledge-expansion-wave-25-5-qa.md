# Wave 25.5 QA — recruitment coverage completion and country architecture hardening

## 1. Wave 25 merge gate

`origin/main` moved to **`440dd7944d851f32accb117fa3ed2e8c4cc45547`** (PR #38). Verified
substantively rather than by ancestry: 5/5 country modules with freshness metadata, 5/5 comparative
guides, 5/5 sources with `SCOPE:` notes and one marked `CAMPAIGN-SPECIFIC`, the module type
registered and correctly **absent** from `REQUIRED_PUBLISHED_MODULES`, counts 34/358, 12/12 files,
7/7 named guards, Phase 39, `npm ci` and full suite exit 0 (8,016 tests), Wave 25 suite alone 153,
build and `verify:output` exit 0 (512/514/512), graph 0/0/0, and all five rendered pages carrying
one `h1`, the verification date, the affiliation disclaimer and a correct canonical.

## 2. Deltas

| Measure                     | Before (`440dd79`) | After    | Delta           |
| --------------------------- | ------------------ | -------- | --------------- |
| Published routes            | 512                | 515      | +3              |
| Exported pages              | 514                | 517      | +3              |
| Sitemap URLs                | 512                | 515      | +3              |
| Published guides            | 165                | 166      | +1              |
| Country recruitment modules | 5                  | 7        | +2              |
| Sources                     | 358                | 360      | +2 (1 extended) |
| Unit tests                  | 8,016              | 8,135    | +119            |
| Unit test files             | 80                 | 81       | +1              |
| E2E specs                   | 19                 | 20       | +1              |
| Client JS                   | 800 KB             | 800 KB   | **+0 KB**       |
| CSS                         | 30,022 B           | 30,022 B | **+0 B**        |

Three pages, not thirty. This is a hardening wave.

## 3. Part A — the England and Wales architecture decision

**Decision: a canonical page in the global section, not a country module and not a new dossier.**

The reasoning is the entity model's own. `CountryDossier.countryCode` is documented as **ISO 3166-1
alpha-2**; England and Wales has no alpha-2 code (GB-EWL is a subdivision code). A dossier would
have required inventing a country.

Alternatives considered:

| Option                                                       | Verdict                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/countries/england-and-wales`                               | **Rejected.** Pretends a legal system is a sovereign state — the exact semantic corruption the brief forbids                                                                                                                                                                                                                                                             |
| A `united-kingdom` dossier with a UK-wide recruitment module | **Rejected for this wave.** Geographically correct as a container, but a UK-wide module would be wrong on its face: England and Wales recruitment describes neither Scotland nor Northern Ireland. Doing it properly needs jurisdiction records for three police systems and six researched modules to pass the publication gate — a country pilot, not a hardening wave |
| Extend the jurisdiction model                                | **Not needed.** `JurisdictionRecord` already has `constituent-country` and per-function `policingScope`; the records are data, not routes, so extending it would not have produced a page                                                                                                                                                                                |
| A canonical page in `/law-enforcement`                       | **Chosen**                                                                                                                                                                                                                                                                                                                                                               |

The precedent is the section's own: `sheriffs-and-city-police`, whose summary reads "A United States
page, deliberately", for a feature with no general equivalent elsewhere. `jurisdiction: ['GB']` is
honest — GB is the state; the page's text scopes to England and Wales inside it and says so.

**A United Kingdom dossier is recorded as the correct future home**, requiring a full country pilot.

## 4. Parts C and D — both deferrals resolved

Both were retried **from scratch**, not reinstated from Wave 25's notes.

**Czechia.** Wave 25 deferred it because `policie.cz`, `policie.gov.cz` and even
`nabor.policie.gov.cz/clanek/pozadujeme.aspx` all redirect into `archiv.policie.gov.cz` carrying
"Nacházíte se na archivní verzi webu Policie České republiky. Obsah zde nemusí být aktuální". The
**root of the recruitment portal is live** — 2026 copyright, no archive notice — and its own
`/pozadujeme-2` path carries the conditions. Published.

**Norway.** Wave 25 abandoned it when `phs.no` redirected to `politihogskolen.no` and the admission
path 404ed. The current location was found and content-confirmed. Published.

Neither was published to reach a count: both cleared the same six-question test Wave 25 applied.

## 5. Findings

**Czechia gives the fourth distinct status model**, completing the contrast set: a citizenship
requirement in the strict sense, alongside Ireland's nationality-or-protection-or-residence,
England and Wales's right-to-work, New Zealand's citizenship-or-residency, and the Netherlands'
nationality-possibly-second. It also states two things most systems do not publish at all: **defined
look-back periods** for previous convictions (ten years for intentional offences, five for
negligent), and a **bar on political party membership**.

**Norway is the clearest case in the corpus of an entry point outside the police organisation.** A
candidate applies through _samordnaopptak_, the national coordinated higher-education admissions
service, to a bachelor at Politihøgskolen, and competes on a points score like any other degree
applicant. One requirement — førerkort klasse B — falls due **1 August of the year before the
application year**.

**Norway also forced a third temporal shape.** Its deadlines are neither durable nor
campaign-specific: they are **cycle-anchored**, recurring annually. Collapsing that into
campaign-specific would understate their reliability; into durable, overstate it.

**England and Wales re-verification produced a stronger quotation** than Wave 24 had: the official
position on degrees is now stated directly as **"No, you don't need to have a degree before you
apply."** The page also confirmed its own geographic scope — it addresses 43 forces and mentions
neither Scotland nor Northern Ireland.

## 6. Mutation proofs — 10 run, 10 valid, 10 caught, 2 caught only after the fixes they forced

| Id      | Mutation                                                    | Result                    |
| ------- | ----------------------------------------------------------- | ------------------------- |
| W255M1  | England & Wales requirement widened to the UK               | CAUGHT                    |
| W255M2  | Berlin requirement widened to Germany                       | CAUGHT                    |
| W255M3  | Czech **archived** source used as current evidence          | CAUGHT                    |
| W255M4  | `factsVerifiedOn` removed from a published module           | CAUGHT                    |
| W255M5  | Campaign fact restated as permanent                         | CAUGHT                    |
| W255M6  | Duplicate recruitment intent for a country with a module    | CAUGHT                    |
| W255M7  | Fake "currently recruiting" with deadline and place count   | CAUGHT                    |
| W255M8  | One force's requirement presented as England-and-Wales-wide | **SURVIVED**, then CAUGHT |
| W255M9  | Jurisdiction upgraded to a sovereign country                | **SURVIVED**, then CAUGHT |
| W255M10 | Authoritative country source removed                        | CAUGHT                    |

### W255M8 — the widening one level down

The guards covered England and Wales → United Kingdom. They did not cover **one force → England and
Wales**, which is the widening the source itself warns about: "Police forces are also allowed to
apply their own local criteria in addition to the national eligibility aspects." The mutation wrote
"One force requires applicants to hold a full driving licence, so England and Wales police require a
full driving licence" and every test passed. Source scope must cover claim scope at _every_ level.

### W255M9 — a disclaimer that could be contradicted and still pass

The check accepted any of three phrasings, so the mutation deleted "This is not a United Kingdom
page" and wrote "England and Wales is a sovereign country" in its place — satisfying the guard while
asserting its opposite. The rule that matters is not what the page says about itself but that
England and Wales is never described as a sovereign state, which is the whole reason it has no
dossier. Now guarded positively and negatively.

### A process note

Both fixes were initially lost: a patch script asserted on its second replacement and threw before
writing, so the two new guards never reached the file while an unrelated fix landed separately.
W255M8 kept surviving until that was noticed. Recorded because the failure was invisible in the test
output — everything passed, because the guards were not there.

## 7. Adversarial QA

**Findings: 2 P1 (both from mutation proofs, above), 1 P2.** The P2: the Wave 25.5 suite initially
flagged the England and Wales page's own misconception claim, "These are the UK police entry
requirements." Framing units and safety units were separated, so a page can name the error it
refutes — the same failure Waves 23, 24 and 25 each recorded in a different form, and the fourth
time this exact shape has appeared.

Two Wave 25 guards required amendment, each documented in place: the researched-country list grows
to seven, and the duplicate-intent guard now checks against countries that actually have modules
rather than forbidding a slug prefix — England and Wales duplicates nothing, because it has no
module and cannot have one.

## 8. Final validation

| Gate                            | Result                                           |
| ------------------------------- | ------------------------------------------------ |
| `npm ci`                        | exit 0                                           |
| `npm run format:check`          | exit 0                                           |
| `npm run lint`                  | exit 0                                           |
| `npm run typecheck`             | exit 0                                           |
| `npm test`                      | exit 0 — 8,135 tests / 81 files                  |
| `npm run build`                 | exit 0                                           |
| `npm run verify:output`         | exit 0 — 515 routes, 517 pages, 515 sitemap URLs |
| `node scripts/route-matrix.mjs` | exit 0                                           |
| `npm run test:e2e`              | exit 0                                           |
| Link graph                      | 0 orphans, 0 weakly linked, 0 dead ends          |

The graph audit initially reported **1 weakly linked page** — the new England and Wales page, which
had no inbound editorial links. Six were added from pages that predate the wave, and it returned to
0/0/0.

## 9. Known limitations

- **England and Wales still has no country module**, and cannot until a United Kingdom dossier
  exists with jurisdiction records for its three police systems. That is a country pilot.
- **Scotland and Northern Ireland are not researched or described.** Their police services recruit
  separately and nothing here covers them.
- **No individual force's local criteria were researched**, and the England and Wales page says so —
  the national criteria are a floor, not a complete requirement for any force.
- **The Czech look-back periods and political-party condition are as the portal summarises them.**
  Zákon č. 361/2003 Sb. itself was not read, so what it contains beyond that is NOT ESTABLISHED.
- **Norway states no age requirement** because the official page states none. Silence is not an
  absence.
- **Czech municipal police (obecní policie) and other Norwegian entry routes** were not researched.
- **The platform does not monitor recruitment requirements continuously**, and no page says it does.
