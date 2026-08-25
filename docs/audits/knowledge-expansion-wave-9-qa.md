# Knowledge Expansion Wave 9 — QA record

Courts and judicial systems. Twelve jurisdictions used, ten routes published, one source added.

## 1. Merge gate

| Check                               | Result                                                                                                                       |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Repository                          | `hrhelperg/justicecenterid`                                                                                                  |
| `origin/main`                       | `3f5795a9e151f7b04ab8bb1f99905eefd767292b` — Merge PR #26 from Wave 8                                                        |
| Wave 8 an ancestor of `origin/main` | Yes                                                                                                                          |
| All six Wave 8 guides               | Present in `src/content/guides/investigations.ts`; four **rebuilt to HTML** from a clean `rm -rf out .next && npm run build` |
| Wave 8 docs                         | plan, country matrix, cannibalization and QA all present                                                                     |
| Wave 8 safeguards                   | `OPERATIONAL_PATTERNS`, `hasSourceFor`, reserved prosecution/courts boundary tests all live                                  |
| Wave 8 sources                      | `de-stpo-162-ermittlungsrichter` present; 246 records                                                                        |
| Working tree                        | Clean                                                                                                                        |

Wave 8's courts boundary test — which forbids court hierarchy and appellate structure on
investigations pages — was inherited as a constraint and still passes. Wave 9's material went to
`/courts`, not back into `/investigations`.

## 2. The architecture decision

`/courts/[slug]` was already wired to every guide carrying `section: 'courts'`. Wave 9 added nine
guide records and one institution record — **no route file, no competing hub**. Part A satisfied by
construction, for the third wave running.

## 3. Sources

**Reuse again was the correct answer.** All 32 dossiers carry a verified `courts` module, so the
comparative material was largely already sourced. **One source was added**: the Latin text of
_Pro Cluentio_ §§ 146–147, because no existing record carried it. 246 → 247.

### The Cicero verification changed what was published

The brief supplied _"Legum servi sumus ut liberi esse possimus"_ and required attribution and
context to be verified first. Reading the text at _Pro Cluentio_ LIII showed the common rendering
is a **truncation**. The sentence is:

> Legum ministri magistratus, legum interpretes iudices, legum denique idcirco omnes servi sumus
> ut liberi esse possimus.

The truncation drops `omnes` and both preceding clauses — the ones naming **magistrates and
judges** as bound by law. And the sentences immediately following ask the presiding judge and the
jurors what entitles them to sit and to judge at all.

Read whole, the passage is an argument about the authority of _courts_ being derived from and
limited by law. Read truncated, it becomes an argument for citizen obedience — which is the
reading the brief explicitly did not want, and the form in which the quote usually circulates.
The site publishes the full sentence, names the truncation, and says what it removes.

## 4. Cannibalization

28 guide candidates and 10 institution candidates assessed. **PUBLISH 9 guides + 1 institution ·
MERGE 10 · DEFER 2 · REJECT 5 guides and 6 institution candidates.**

The constraint: the glossary already owns **seven** court-related terms, `/professions/judge` owns
the judicial role, and `what-do-courts-do` owns the function question. The space left was
structural and comparative, which is what all ten pages hold.

**One institution route, and that is the finding.** Only the constitutional court recurs
structurally — Germany, Spain and Belgium each maintain a body separate from the ordinary
judiciary with authority over legislation. "Supreme court" was rejected as an institution family
because the label covers a final appellate court, a constitutional court, both at once, and one
apex among several; it ships as a guide about that variation instead.

## 5. Validation

| Gate                               | Result                                                 |
| ---------------------------------- | ------------------------------------------------------ |
| `npm ci`                           | clean, exit 0                                          |
| `npm run format:check`             | pass                                                   |
| `npm run lint`                     | pass, no warnings                                      |
| `npm run typecheck`                | pass                                                   |
| `npm test`                         | **3088 passed / 61 files**, exit 0                     |
| `npm run build`                    | pass                                                   |
| `npm run verify:output`            | **372 routes / 374 pages / 372 sitemap URLs**          |
| `npm run test:e2e`                 | **614 tests, 610 passed, 4 skipped, 0 failed**, exit 0 |
| Route matrix (local static server) | **467/467** — 372 routes + 95 must-404                 |

### Deltas against the baseline

| Metric                  | Baseline  | Wave 9    | Delta     |
| ----------------------- | --------- | --------- | --------- |
| Routes                  | 362       | 372       | +10       |
| Exported pages          | 364       | 374       | +10       |
| Sitemap URLs            | 362       | 372       | +10       |
| Courts routes           | 1         | 10        | +9        |
| Institution routes      | 14        | 15        | +1        |
| Unit tests              | 2882      | 3088      | +206      |
| Unit test files         | 60        | 61        | +1        |
| Playwright tests        | 510       | 614       | +104      |
| Source records          | 246       | 247       | +1        |
| Restricted claims       | 10        | 10        | 0         |
| ScheduledChange records | 4         | 4         | 0         |
| **JS bundle**           | 663,403 B | 663,403 B | **0**     |
| **CSS bundle**          | 29,625 B  | 29,625 B  | **0**     |
| `out/`                  | 84,928 KB | 88,324 KB | +3,396 KB |

Both bundle figures byte-identical: **no chart library, no graph library, no client-side hierarchy
engine, no new CSS rule.** The `out/` growth is ten prerendered pages and their text variants.

## 6. Mutation proofs

Seven mutations applied to real source files, suite run, failure read before acceptance, each
reverted and the tree confirmed clean. No exit codes masked.

| #   | Mutation                                                   | Expected | Observed                                                                            |
| --- | ---------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------- |
| M1  | Remove both Netherlands sources from `court-hierarchy`     | FAIL     | FAIL — `discusses Netherlands with no source scoped to or naming it`                |
| M2  | Flatten Germany into one hierarchy                         | FAIL     | FAIL — 2 assertions: `three distinct categories` and `Federal Administrative Court` |
| M3  | Equate the BVerfG with the German supreme court            | FAIL     | FAIL — `expected … to match /not among them/`                                       |
| M4  | State appeals are always a complete retrial                | FAIL     | FAIL — 2 assertions: the qualifier, and the universal-appeal prohibition            |
| M5  | Insert "Germany has an independent judiciary"              | FAIL     | FAIL — `unsourced independence claim about Germany`                                 |
| M6  | Reproduce the glossary definition of judicial independence | FAIL     | FAIL — `a Wave 9 page reproduces the glossary definition`                           |
| M7  | Give a court page the judge profession's question          | FAIL     | **Initially PASSED — see below**                                                    |

### M7 found a real gap, and was not accepted until it failed

M7's first run reported a passing suite. The anchor string had been reflowed by the formatter, so
the mutation never applied — a proof against unchanged content is not a proof, and it was rejected.

Applying it correctly then exposed a genuine hole: the duplicate-question test compared Wave 9
only against other **guides**, leaving the **profession** routes unguarded. `/professions/judge`
already asks how a judge can be accountable and independent at once, which is exactly the question
a court-independence page drifts toward.

A test was added asserting no Wave 9 page shares a question with any profession route. M7 was then
re-run and observed failing for its intended reason. The gap is closed because the mutation proof
was taken seriously rather than recorded as passed.

## 7. Adversarial QA

The fifteen questions were run against all ten new pages and the two enhanced ones.

| #   | Finding                                                                                                                                                                                                                                                 | Severity | Resolution                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| 1   | Three pages named a country with no source scoped to or naming it — Canada, Japan, Spain                                                                                                                                                                | **P1**   | Genuine omissions; sources added                                                       |
| 2   | `why-judicial-independence-matters` used the phrase "manages judicial careers", which reads as profession material the judge route owns                                                                                                                 | P2       | Reworded to "manages judges’ appointments and discipline" — the guard was not weakened |
| 3   | Two internal links pointed at `/glossary/rule-of-law` and `/glossary/jurisdiction`, which are **owned elsewhere** and carry no glossary route                                                                                                           | P2       | Repointed at the owning pages. Caught by the existing link crawler                     |
| 4   | **Part Y names five defence rights court pages should acknowledge; only three were present.** The page explaining why courts matter omitted the presumption of innocence and the right to be heard — the two that most directly answer "matter to whom" | **P1**   | Both added and locked by a test asserting all five                                     |
| 5   | Mutation proof M7 initially passed against unchanged content                                                                                                                                                                                            | **P1**   | Rejected, re-run correctly, and the test gap it exposed was closed                     |

All five fixed. No P0. Nothing left open.

Questions returning clean on first pass: no legal-advice phrasing anywhere; the formal-versus-
empirical distinction stated seven times; no blind-obedience framing; all 16 `claim: 'fact'`
blocks carry sources; the "specialised courts sit under the ordinary supreme court" phrasing
appears only as a corrected misconception; country balance is genuinely comparative — Germany 39
mentions but France 16, Spain 20, Brazil 21, Japan 15, Ireland 18, Netherlands 15, so no system is
universalised and the federal page is not the 90%-United States page the brief warned against.

## 8. Neutrality and restricted claims

No court, country or appointment method is ranked. No statistics were added — no backlog,
conviction rate, reversal rate, court speed or trust figure, asserted by test. Restricted-claim and
ScheduledChange counts unchanged at 10 and 4.

The neutrality tests go in both directions: courts are never claimed to be always right, and
lawful criticism and appeal are framed as participation rather than disrespect — asserted by three
separate assertions.

## 9. Temporal integrity

Two temporal facts were carried from verified dossier content: Ireland's Court of Appeal was
established on 28 October 2014 under the Thirty-third Amendment, "recently enough that older
descriptions of the Irish courts omit it"; and Switzerland's unified Criminal Procedure Code
replaced 26 cantonal codes on 1 January 2011. **No ScheduledChange record was added** — neither
is a future enacted change.

## 10. Limitations

- Several systems are recorded in this corpus with detailed competences and appeal routes
  unresearched — Germany's Land tiers, Switzerland's cantonal detail, Canada's appeal routes and
  appointment process, Spain's higher-court composition. Those gaps are carried forward as gaps
  and stated on the pages.
- **Open justice and precedent were deferred**, both for want of sourced material. The brief
  conditioned precedent on source feasibility and the corpus does not carry it; writing either
  from general knowledge would have broken the source standard this wave otherwise held to.
- Belgium appears once in the guides and mainly on the institution page, because its courts module
  supports the constitutional-court material more than the structural material.
- The Cicero passage is cited from a text repository rather than a critical edition. The Latin was
  read directly and the surrounding sections confirmed; no scholarly apparatus was consulted.
