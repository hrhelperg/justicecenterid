# Wave 12 — QA record

Rule of law, due process and justice principles. Four constitutions read from primary text, ten
routes published, one new source, three existing constitutional notes extended.

## Routes published

| Route | Owns |
| --- | --- |
| `/justice/why-government-is-bound-by-law` | Four different constitutional techniques for binding public power |
| `/justice/limits-on-public-power` | The four recurring limits: prior legal basis, hearing, review, absolute prohibitions |
| `/justice/legality-and-non-retroactivity` | No crime without prior law, and the one permitted direction of retroactivity |
| `/justice/legal-certainty` | Vested rights, perfect juridical acts, res judicata, and the temporal dimension |
| `/justice/equality-before-the-law` | Equality of application versus equal protection and benefit |
| `/justice/access-to-justice` | Access as a right in itself, and access as distinct from outcome |
| `/justice/effective-remedy` | What a forum can actually give, including compensation for judicial error |
| `/justice/procedural-fairness-and-its-many-names` | The comparative terminology question |
| `/justice/why-courts-must-be-respected` | What respect requires and what it does not |
| `/justice/appeal-and-the-rule-of-law` | Why a system builds machinery to say it was wrong |

## Candidate decisions

**PUBLISH 10 · DEFER 6 · MERGE into existing 4.** Deferred: proportionality, separation of powers,
open justice, reasoned judicial decisions, fair-hearing-and-fair-trial as its own page, and
equality of arms. Merged into existing guides: legality (already a rule-of-law sub-element,
published as the deeper non-retroactivity page instead), judicial independence
(`/courts/why-judicial-independence-matters`), judicial review (glossary), presumption of
innocence (two existing owners).

**Proportionality was deferred on evidence.** None of the four constitutions read states a
proportionality test in terms; the German doctrine is judicial rather than textual and the
jurisprudence was not read. A test asserts no universal proportionality test appears.

## The deep-dive risk the research surfaced

Corpus research found that `what-is-the-rule-of-law` already lists **Legality, Legal certainty,
Equality before the law and Access to justice** as six sub-elements with one-line descriptions.
Four Wave 12 pages go deeper on exactly those.

That is the site's normal pattern — glossary term, guide, deep dive — but it is also where
duplication would be invisible. A test now asserts that no Wave 12 page reproduces a rule-of-law
sub-element verbatim, and that each of the four deep dives carries constitutional provisions the
one-line summary does not.

## The due-process finding

The brief instructed that the American term must not be universalised. Research produced a sharper
result: **Article 5º LIV of Brazil's Constitution provides that no one shall be deprived of
liberty or property "sem o devido processo legal"** — a direct Portuguese rendering, in a
constitution that is not American.

So both simple statements are false. The term is not universal, and it is not American-only. The
page holds both halves, and the tests assert both: no page may call due process universal, and no
page may call it exclusively American.

Three other systems reach comparable ground under names that are not translations of it —
Germany's *rechtliches Gehör*, South Africa's "lawful, reasonable and procedurally fair", Kenya's
"fair hearing" — and they differ in scope as well as name.

## Jurisdictional diversity

A deliberate correction to the corpus's over-reliance on Germany. Four constitutions read from
primary text: Germany, **South Africa, Kenya and Brazil**. South Africa and Kenya in particular
carry material no previous wave used — s 33's three-part administrative-justice standard, s 9(1)'s
pairing of equality before the law with equal protection, Article 48's access guarantee with a fee
constraint, and Article 159(2)'s direction that justice be administered without undue regard to
procedural technicalities.

## Source integrity

One source added (`de-gg-rechtsstaat-articles`); three existing constitutional notes extended
rather than duplicated.

**One source was rejected.** The gov.za scanned PDF of the whole South African Constitution is an
OCR of a printed gazette with visible corruption ("Lefcre a court", "icdepi:ndent"). Nothing is
quoted from it. The clean digital text published by the Department of Justice was used instead and
corroborated against gov.za's chapter pages, and the rejection is recorded in the source note.

## Cicero — Wave 9's correction preserved

Wave 9 established the full sentence at *Pro Cluentio* § 146 and corrected the popular truncation.
`/courts/why-courts-matter` owns that material. **Wave 12 does not re-quote the passage at all** —
three tests assert the truncated form appears nowhere, that the passage is not re-quoted, and that
the courts page still carries the full sentence.

## Validation

| Gate | Result |
| --- | --- |
| typecheck / lint / format | pass |
| `npm test` | 3705 passed / 64 files |
| build | exit 0 |
| `verify:output` | 398 routes / 400 pages / 398 sitemap |

## Mutation proofs

| # | Mutation | Observed |
| --- | --- | --- |
| W12-M1 | Remove `za-constitution` from a page naming South Africa | FAIL — 2 tests |
| W12-M2 | Assert due process is universal | FAIL |
| W12-M3 | "Courts must never be criticised and their judgments are beyond criticism" | **PASSED twice — see below** |
| W12-M4 | Frame appeal as undermining courts | FAIL — 2 tests |
| W12-M5 | Reintroduce the Cicero truncation | FAIL — 2 tests |

### W12-M3 exposed a real flaw, and then a second one

**First failure of the test, not the content.** The sentence-level neutrality check asked whether
the sentence containing a flagged claim also contained a negation. Several tripwire patterns carry
a negation in their own text — "courts must **never** be criticised" — so the claim satisfied the
denial check *by being itself*. An inserted absolutist statement survived.

The fix removes the matched span before looking for a denial, so the negation has to come from the
surrounding sentence and actually operate on the claim. A non-vacuity test proves a bare claim is
now caught and a genuine correction is not.

**Second failure: the fix silently did not apply.** The edit was written with a conditional guard
rather than an assertion, and prettier had reflowed the target, so the absolutist block kept the
old logic while the delegitimising block got the new one. M3 passed a second time. The edit was
redone with a hard assertion, and M3 was then observed failing for its intended reason.

Both are recorded because the second is the more instructive: **a mutation proof that passes twice
is telling you something, and the second thing it was telling me was that my own patch had
no-opped.** Conditional edits to test files are how a safeguard silently reverts.

## Adversarial findings

| # | Finding | Severity | Resolution |
| --- | --- | --- | --- |
| 1 | The legal-advice check fired on scope callouts saying "does not describe how to bring a claim" | P2 | Made denial-aware, with a live-catch test proving an actual instruction is still caught |
| 2 | Four pages deep-dive rule-of-law sub-elements with no guard against restatement | **P1** | Verbatim-reproduction test plus a requirement that each deep dive carry constitutional text |
| 3 | The neutrality denial check could be satisfied by a negation inside the claim | **P1** | Tightened; see W12-M3 |
| 4 | The tightening silently failed to apply to the absolutist block | **P1** | Re-applied with a hard assertion |

No P0.
