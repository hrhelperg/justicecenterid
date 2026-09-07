# Knowledge Expansion Wave 28 — QA record

How the justice professions are entered. Branch `feat/justice-careers-wave-28`, based on `dc3eb66`
(origin/main after Wave 27 merged).

Five guides, ten sources, two systems, spread across four sections — `courts`, `prosecution`,
`defence` and `corrections` — rather than piled into one. Findings in
`docs/research/justice-careers-model-findings.md`.

## Merge gate

Verified substantively rather than from the statement that Wave 27 had merged. On `origin/main`:
all four Wave 27 guides present (46 in the file), all four sources present (369 in the registry),
both test files present with all three corpus-wide guards intact, docs and roadmap Phase 41 in
place, the Wave 27 P1 fix holding at zero rendered wave references, and every Wave 27 file
byte-identical to the branch tip. Only the merge commit had landed.

Two checks flagged during that verification and both were artefacts of the checking script, not of
the merge: a case-sensitive search for a guard whose name begins "NO source", and a naive
comment filter that counted block-comment continuation lines.

## Mutation proofs — 10 run, 10 caught

| #      | Mutation                                                   | Result                        |
| ------ | ---------------------------------------------------------- | ----------------------------- |
| W28M1  | Careers advice plus a named provider category              | CAUGHT                        |
| W28M2  | **The two French training durations merged into one**      | **SURVIVED → fixed → CAUGHT** |
| W28M3  | The any-subject degree finding softened                    | CAUGHT                        |
| W28M4  | A published absence turned into a positive claim           | CAUGHT                        |
| W28M5  | **The regulator's "usually" dropped from the cited block** | **SURVIVED → fixed → CAUGHT** |
| W28M6  | A third system claimed that was never researched           | CAUGHT                        |
| W28M7  | A regulator source repointed at a course provider          | CAUGHT                        |
| W28M8  | A profession record starts naming a system                 | CAUGHT                        |
| W28M9  | An application step the reader could follow                | CAUGHT                        |
| W28M10 | A published money figure reproduced                        | CAUGHT                        |

### The two survivors failed for the same underlying reason

Both original guards asserted that correct wording was **present somewhere on the page**. A presence
check cannot see a contradiction elsewhere, and cannot see a hedge removed from the one place it was
load-bearing.

**W28M2** added a sentence claiming French judges train for 12 months _in all cases_. Both durations
and the warning that they belong to different routes were still on the page, so the check passed
while the page had begun saying something false. The guard now also looks for a duration paired with
a universal quantifier.

**W28M5** stripped "usually" from the sourced paragraph about pupillage. The phrase survives in a
misconception on the same page, so a page-wide search stayed satisfied while the actual citation had
become an absolute claim the Bar Standards Board does not make. The guard now reads the cited block
itself, selected by the source it cites.

Three mutations were also written with anchors that did not match — typographic quotes where the
file uses straight ones. Those were corrected and re-run rather than counted.

## Adversarial QA — 1 P2, 0 P1

Passes run: block census and fact-block sourcing; commerce, provider and money leakage; individual
advice and second-person address; unhedged universals; uncertainty vocabulary; declared jurisdiction
against the jurisdictions its sources actually cover; markdown inside misconceptions, which render
raw; internal link resolution; and verbatim-quotation provenance.

Clean except one.

### P2 — a quotation extended past what was verified

The pupillage citation opened its quotation marks at "is divided into two parts", but the page as
read supported that phrasing only as prose and quoted verbatim from "a non-practising period"
onward. The marks now cover the verified span exactly. Found by tracing all 25 quotations on the
five pages back to the source notes: 24 matched, one did not.

Three other flags were raised and all three were non-issues on inspection: `"you must have been
resident in the UK for the last 3 years"` is an attributed verbatim quotation rather than an
instruction; "the cost of being wrong" is metaphorical rather than a price; and a `?` jurisdiction
reading came from the QA script's own record-slicing, with all ten sources correctly scoped.

## A pattern worth naming: this corpus states its prohibitions in prose

Five guards in this wave — three in the unit suite, two in the e2e — failed on their first run by
matching the platform's own denial of the thing being guarded against. The same correction was
needed in each of the two preceding waves, and it is now clear that it is structural rather than
accidental.

The reason is that this corpus **writes its prohibitions down where readers can see them**. Scope
callouts say what a page will not do. Uncertainty lists say what was not established. And source
notes — which render inside `<main>` — are where an editor records what a citation must not be
turned into: the SRA note says in terms that the finding "must not be softened into 'usually a law
degree'".

So any prohibition-shaped assertion over rendered text will find the sentence prohibiting it. Every
such guard in this wave now tests sentence by sentence and ignores sentences carrying a denial. This
is worth carrying forward as a default rather than rediscovering each wave.

## Two failures in pre-existing tests, both real

**A closed-world count.** Wave 17 asserted that `/corrections` contains exactly Wave 13 plus Wave 17.
That is false the moment any later wave contributes to the section, and it never tested whether
Wave 17 itself had landed. It now asserts both cohorts are fully present and the section is at least
their sum.

**A note this wave discharged.** Wave 14 asserted that the `defence-lawyer` record says qualification
routes "were not researched for any country". This wave researched them for England and Wales, so
the sentence stopped being true. The record now points at the guides that answer it, and the test
asserts the still-true intent: the record must not become the place routes are described, must say
where they are, and must state how far they reach.

## Recurring failure modes

**The self-referential cluster — the fifth consecutive wave.** The link graph passed at 0 orphans / 0
weakly linked / 0 dead ends while no pre-existing page linked into the new cluster. Detected by a
test written for it, not by the graph. Five editorial backlinks added.

**Citation is not referral** did _not_ recur. The e2e was written from the start asserting outbound
links are official sources and none is a teaching or commerce host, after three consecutive waves of
making the opposite mistake.

## Cannibalisation control, in two directions

New this wave. Upward, against the profession records, whose `trainingRouteShape` is deliberately
country-free — a test now fails if one begins naming a system, because that is the moment the record
and these guides start answering the same question. Sideways, against
`/defence/who-may-act-as-a-lawyer`, which owns the reserved-activity question from primary statutory
text; this wave may link to it and may not restate it. Both lines held, and W28M8 proved the first
one is enforced.

## Validation

Full gate, run end to end on a clean `npm ci`:

| Step                                  | Result                                               |
| ------------------------------------- | ---------------------------------------------------- |
| `format:check` / `lint` / `typecheck` | clean                                                |
| `vitest run`                          | **8,658 tests / 84 files** passed                    |
| `next build`                          | success                                              |
| `verify:output`                       | **531 routes**, 533 exported pages, 531 sitemap URLs |
| `route-matrix`                        | 683 passed, 0 failed                                 |
| `playwright test`                     | **1,908 passed**, 4 skipped — 92 of them this wave's |
| link graph                            | 0 orphans, 0 weakly linked, 0 dead ends              |

- **379 sources**
- 10/10 mutation proofs valid, two caught only after the fixes they forced
- Client JS +0 KB, CSS +0 bytes, no component changed
