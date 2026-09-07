# Knowledge Expansion Wave 29 — QA record

Completing the professions arc: forensic science and emergency call handling. Branch
`feat/forensic-dispatch-careers-wave-29`, based on `3c52e66` (origin/main after Wave 28 merged).

Four guides on three new sources with two reused, landing two each in `/forensics` and
`/public-safety` — the two thinnest sections at eight guides apiece. Findings in
`docs/research/professions-arc-model-findings.md`.

## Merge gate

Verified substantively. On `origin/main`: all five Wave 28 guides in their four sections, 10/10
sources (379 in the registry), both spec files present with every named guard, both corrected
pre-existing tests carrying their new form, docs and Phase 42, the discharged notes pointing at the
right guides, `trainingRouteShape` still country-free, and every Wave 28 file byte-identical to the
branch tip.

One check flagged and it was again the checking script rather than the merge: a plain-string search
for `/defence/what-qualifying-as-a-lawyer-requires` missed it because the file stores the regex form
with escaped slashes. The byte-identical comparison in the same run already contradicted the flag.
Second consecutive wave where the only merge-gate flag was self-inflicted.

## Mutation proofs — 10 run, 10 caught

| #      | Mutation                                                         | Result                        |
| ------ | ---------------------------------------------------------------- | ----------------------------- |
| W29M1  | Unit/activity architecture collapsed into individual licensing   | CAUGHT                        |
| W29M2  | **The most-but-not-all limit overstated into a blanket rule**    | **SURVIVED → fixed → CAUGHT** |
| W29M3  | Laboratory method detail inserted into `/forensics`              | CAUGHT                        |
| W29M4  | An emergency instruction inserted into `/public-safety`          | CAUGHT                        |
| W29M5  | A centre count published from a self-contradicting source        | CAUGHT                        |
| W29M6  | An official source repointed at a membership/course association  | CAUGHT                        |
| W29M7  | A profession record starts naming systems                        | CAUGHT                        |
| W29M8  | A pay figure reproduced                                          | CAUGHT                        |
| W29M9  | **The enforcement question restated, cannibalising a neighbour** | **SURVIVED → fixed → CAUGHT** |
| W29M10 | **A requirement contradicted by its own quotation**              | **SURVIVED → fixed → CAUGHT** |

W29M8 was invalid on first run — the anchor was retyped rather than read from the file, so an em
dash did not match. Re-run with the anchor extracted from the source.

### W29M9 was a guard design error, not a missing guard

This is the finding worth carrying forward.

Wave 28 established that prohibition-shaped guards must be **denial-aware**, because this corpus
writes its prohibitions into rendered prose. That lesson was applied here to the cannibalisation
guards — and it was the wrong lesson for them.

W29M9 inserted "Breaching the code is not an offence, and the sanction is evidential" into a
forensics page. That is a verbatim restatement of the central finding of
`/forensics/who-regulates-forensic-science`, which owns the enforcement question. It contains "not",
so the denial-aware filter removed the sentence before the pattern ran.

The distinction, now written where it is used:

- A guard asking **"does this page ASSERT X"** must ignore denials and refutations. A sentence
  saying the page will not do X is the prohibition, not the offence.
- A guard asking **"does this page DISCUSS X at all"** must not. A restatement phrased as a denial
  is still a restatement, and topic ownership is what is being protected.

The same trap appeared a third time in the e2e, in a different form: the rendered corpus labels each
misconception "Common belief:", and "Common belief: Forensic scientists are licensed the way lawyers
are admitted" carries no denial word at all. Rendered-text guards must skip that prefix exactly as
unit guards skip the `claim` field it comes from.

### W29M2 and W29M10 were ordinary missing guards

W29M2 replaced the limit with "required for all forensic science activities without exception" and
survived, because the suite only had a _misconception_ correcting that belief — which a mutation to
the body text leaves untouched. A misconception is not a guard.

W29M10 changed "state a level rather than a subject" into "require a university degree" while
leaving the quoted "mbo 3 werk- en denkniveau" in place beside it. The quotation was still present
and correctly attributed, and the sentence around it had become false. Nothing checked coherence
between a claim and the quotation it introduces; now something does.

## Adversarial QA — 0 P1, 0 P2

Passes run: block census and fact-block sourcing; method and technique leakage in `/forensics`;
emergency-instruction leakage in `/public-safety`; unhedged universals and ranking language;
declared jurisdiction against the jurisdictions its sources cover; markdown inside misconceptions,
which render raw; and verbatim-quotation provenance.

Four flags, all non-issues on inspection:

- "protocol" in the competence page appears inside its own denial that any protocol is described.
- "when you call" and "better than" are both misconception `claim` fields — the belief being
  corrected, exactly where they belong.
- Two of seven "untraceable" quotations were truncation artifacts of the QA script's own 200-character
  cap; both verify against their source notes in full.

The remaining "untraceable" strings are mention-use quotation — `"the laboratory is accredited"`,
`"forensic scientist"` — where the surrounding construction makes the hypothetical reading
unmistakable. Noted rather than changed, and worth remembering before any future guard asserts that
all quoted text on a page is verbatim from a source.

## Two pre-existing test families failed, both legitimately

**Three more closed-world counts**, the second consecutive wave to find them. Wave 16 asserted set
equality between `/forensics` and its own eight guides and pinned the section's published count
exactly; Wave 20 did the same for `/public-safety`. All three are false as soon as any later wave
contributes, and none tested whether the wave that wrote them had landed. Each now asserts its own
guides are present and routed with the count as a floor.

**One over-broad safety pattern.** The Wave 24 sequencing guard matched "first, which is why the
entry conditions can be short". The risk it guards is a step-sequenced forced-entry technique;
"entry" is also the ordinary word for getting into a profession, and as careers coverage spread
across the corpus the bare word began matching ordinary sentences. It now matches forced, dynamic
and effecting entry — a precision fix rather than a relaxation, since a technique description says
which kind of entry it means. The colliding sentence was reworded as well.

## An emergency-specific refusal, new to this wave

The dispatch pages are about people who answer emergency calls. Marking one as `EmergencyService`,
or attaching a `ContactPoint` or telephone number, would let a search engine or assistant present
this platform as somewhere to contact in an emergency. That harm is immediate rather than
reputational.

Both pages are therefore asserted to carry no emergency-service markup, no `tel:` link, no
telephone-shaped text, and no number formatted as something to dial — while still naming 111, 112
and 105 as call streams, which is unavoidable and correct. Both must also tell a reader in an
emergency, in visible prose, to contact their local emergency number.

## Recurring failure modes

**The self-referential cluster — the sixth consecutive wave.** The link graph passed at 0/0/0 while
no pre-existing page linked into the new cluster. Caught by a test written for it. Four editorial
backlinks added.

**Citation is not referral** did not recur, for the second wave running.

## Validation

Full gate on a clean `npm ci`:

| Step                                  | Result                                               |
| ------------------------------------- | ---------------------------------------------------- |
| `format:check` / `lint` / `typecheck` | clean                                                |
| `vitest run`                          | **8,764 tests / 85 files** passed                    |
| `next build`                          | success                                              |
| `verify:output`                       | **535 routes**, 537 exported pages, 535 sitemap URLs |
| `route-matrix`                        | 687 passed, 0 failed                                 |
| `playwright test`                     | **1,990 passed**, 4 skipped — 82 of them this wave's |
| link graph                            | 0 orphans, 0 weakly linked, 0 dead ends              |

- **382 sources**
- 10/10 mutation proofs valid, three caught only after the fixes they forced
- Client JS +0 KB, CSS +0 bytes, no component changed
