# Waves 12–15 — cross-wave findings

Branch `feat/knowledge-expansion-waves-12-15`. Written 2026-08-26, after all four waves.
Base SHA `6fedbe929f52cd90af9dc6f05b81cd50103646af`.

## 1. The pattern that held for four more waves

**Where a legal system puts something is as informative as what it says.** This turned up
independently in three of the four waves and was not looked for.

- **Wave 12.** Legal certainty appears as a right against the legislature in Brazil, as a
  condition on punishment in Germany, and as a guiding principle of judicial authority in Kenya.
  Same commitment, three constitutional locations, three different things it constrains.
- **Wave 13.** England and Wales and Canada state sentencing purposes in **sentencing** law.
  Germany and Brazil state their reintegration purpose in the law of **execution** — StVollzG § 2
  and LEP Art. 1 — and German sentencing law names culpability as the _basis_ of measurement
  rather than opening with purposes at all. Two systems that both "aim at rehabilitation" mean
  structurally different things by it.
- **Wave 14.** Kenya puts court fees in the access provision itself; Brazil names specific
  gratuities in the bill of rights; England and Wales constitutes no status for lawyers and
  reserves six _activities_ instead.

A comparison that reads only the words and not their location gets all three of these wrong in
the same direction: it reports convergence where there is none.

## 2. Seven consecutive waves, zero new institution records

Waves 8 through 14 each researched a recurring function and each declined to create an
institution type for it. The reason is the same every time, and it has now been tested enough to
state as a finding rather than a coincidence: **the recurring thing is a function, and its
institutional embodiments differ in kind rather than in design.**

| Wave | Function                   | Why no record                                                                                            |
| ---- | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| 8    | Criminal investigation     | Judicial police, investigating judge and police-led models are not one institution                       |
| 9    | Final appellate authority  | Supreme court, cassation court and constitutional court do different jobs                                |
| 10   | Public prosecution         | Ministério Público, parquet and prosecution service differ constitutionally                              |
| 11   | Publicly organised defence | France has a funding scheme with no institution; Germany an appointment scheme that is neither           |
| 12   | —                          | No institution family arose                                                                              |
| 13   | Corrections                | `correctional-service` already existed; the gap was conceptual                                           |
| 14   | The bar                    | Germany and Brazil vest admission in a professional body; England and Wales constitutes no status at all |

Wave 14 produced the sharpest case. Two systems have a member of the family and the third has
nothing to put in it, so a taxonomy would have had to invent a category for England and Wales or
exclude it silently. The comparison stays in prose on `/defence/who-may-act-as-a-lawyer`.

Waves 12–15 did produce **one** new reference record: `/professions/defence-lawyer`, and only
after the brief's evidence gate was applied field by field.

## 3. Where the brief and the evidence disagreed

Three times, and each is recorded in the wave's own QA document.

**Wave 13 — the capacity route.** The brief proposed
`/corrections/prison-capacity-and-overcrowding`. `RESTRICTED_PATTERNS` blocks `overcrowd*`, the
guide scan hard-codes the declared-category list to `[]`, and `Guide` has no `restrictedClaims`
field — only dossier modules do. A guide is structurally incapable of carrying a declared
detention-capacity claim. The brief also requires preserving restricted-claim safeguards, so the
instructions conflict and the safeguard wins. Built as `how-prison-capacity-is-measured`.

**Wave 14 — most of the candidate list already existed.** `/justice/access-to-justice` and
`/justice/effective-remedy` from Wave 12; `/defence/right-to-counsel` and
`/defence/how-defence-is-funded` from Wave 11. The funding page already asks the brief's
question about legal aid versus public defenders versus court-appointed counsel, and already
carries the Defensoria Pública finding the brief asks to preserve. Brief sections 23, 24 and 26
describe work that was done. Wave 14 preserved and tested them and spent its routes on the
mechanics of access, which nothing covered.

**Wave 15 — six of eight supporting-page candidates were cannibalistic.**
`/justice/how-rights-limit-public-power` duplicates Wave 12's `/justice/limits-on-public-power`;
`/justice/from-judgment-to-sentence` duplicates Wave 13's
`/corrections/conviction-sentence-and-execution`;
`/justice/why-prosecution-and-defence-are-both-necessary` duplicates Wave 11's
`/defence/defence-counsel-and-prosecutor`; and so on. The brief anticipated this and permitted
"potentially fewer if a single strong hub plus typed connections does the job better". Wave 15
built the hub, one typed model and two genuinely new pages.

## 4. What the test suites learned from each other

Four waves produced three convergent test-design findings, each arrived at independently and
each after a mutation survived.

**The unit of analysis is usually the block, not the sentence.** Wave 11 established that a
denial must sit in the same sentence as the claim, after a neighbouring sentence's "cannot"
cleared an absolutist statement. That rule is right for assertions and wrong for three other
things, each discovered separately:

- **Wave 13**: attribution of a statutory quantity. A paragraph whose opening sentence names the
  German Criminal Code has attributed every figure in it.
- **Wave 14**: a qualification must sit with what it qualifies. "Sorb" and "where the accused has
  defence counsel" each appeared twice, so deleting the statement of the rule left the
  restatement and a presence-anywhere check passed.
- **Wave 15**: a page may state a false picture in order to demolish it in the next sentence.

**A misconception is one unit, not two sentences.** Wave 13. The schema guarantees `reality`
denies `claim`, so splitting the pair reports every misconception as an assertion of the thing it
corrects. A misconception whose reality does not deny its claim still fires, and a planted one
proves it.

**Denial-awareness is wrong for directives.** Wave 14. "If you cannot afford a lawyer you should
apply for legal aid" is advice; the incidental "cannot" has nothing to do with the directive. A
directive is neutralised only by a negation that precedes it.

**And the procedural lesson, from Wave 12:** a conditional edit to a test file silently reverts a
safeguard. Every patch in Waves 13–15 asserts its anchor is unique before writing.

## 5. Mutation proofs across the programme

| Wave | Proofs | Survived first pass                 | Final     |
| ---- | ------ | ----------------------------------- | --------- |
| 12   | 8      | 1, twice, for two distinct reasons  | all valid |
| 13   | 10     | 0                                   | 10/10     |
| 14   | 12     | 2                                   | 12/12     |
| 15   | 10     | 2, plus 1 invalid (broke the build) | 10/10     |

Five mutations survived a first pass across the programme, and **every one exposed a defect in a
test rather than in the content**. No content was changed to accommodate a surviving mutation.
One mutation was rejected as invalid because it broke the build — an unescaped apostrophe in a
single-quoted TypeScript string, the same failure mode as Wave 11's M5 — and was redone.

## 6. The link-graph defect

Wave 15's audit found that `Guide.relatedInstitutions` was populated on 58 guides, validated by
the content tests, and **never rendered**. Institution and profession pages rendered it; guides
did not. It was dead data on every guide since the field was introduced, and three institution
pages were reachable only from the institutions index as a direct result.

The `Connections` component is now extracted from `ReferencePage` and used by both, so they
cannot drift apart again. That one fix added 82 edges to the graph.

| Metric                      | Before Wave 15 | After |
| --------------------------- | -------------- | ----- |
| Orphan content pages        | 0              | 0     |
| Weakly linked (one inbound) | 6              | 0     |
| Dead ends                   | 0              | 0     |

The two pages that remained weak after the hub were fixed with **contextual** links, not
mechanical ones: transport police are jurisdiction defined by function, which is what
`/law-enforcement/police-jurisdiction` is about.

## 7. Deferrals carried forward, still deferred

Recorded so they are not mistaken for completed work.

- **Equality of arms.** The ECHR could not be read from an authoritative source in Wave 11 and
  still could not in Wave 14. Nothing is quoted from it.
- **General public-law proportionality.** Wave 12 deferred it. Wave 13 resolved it for the
  **sentencing** domain only, via Criminal Code s. 718.1. The general test remains deferred.
- **Mediation and ADR as a topic.** Only Kenya Art. 159(2), which Wave 12 already cites, and the
  LSA's definitional exclusion. Not enough for a page.
- **France's bar.** legifrance.gouv.fr returned HTTP 403. An access limitation, not evidence.
- **Japanese detention capacity.** Still unverified, still stated as absent rather than estimated.
- **Qualification routes for lawyers.** No source for any country. `trainingRouteShape` on the
  defence-lawyer record is structural, and the gap is stated on the page.
- **Court fee amounts.** No fee schedule obtained anywhere; none quoted.
