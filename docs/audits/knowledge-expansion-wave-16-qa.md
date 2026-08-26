# Wave 16 QA record — forensics and evidence systems

Branch `feat/knowledge-expansion-waves-16-18`. Written 2026-08-26. No push during this wave.

## 1. What shipped

Eight guides under `/forensics`, a section that held one. Ten new sources
(`src/content/sources.ts` 268 → 278). No new section, no new institution record, no new
profession record, no schema change.

Route counts: **429 routes / 431 exported pages / 429 sitemap entries** (baseline 421/423/421).
Suite: **4543 → 4856 tests, 69 files**. Route matrix 560/560. Playwright accessibility spec
50 passed, 4 skipped.

| Route                                  | Anchor evidence                                           |
| -------------------------------------- | --------------------------------------------------------- |
| `what-forensic-science-cannot-decide`  | StPO § 81e; CrimPR r. 19.2                                |
| `expert-evidence-in-court`             | StPO §§ 73, 78; CrimPR rr. 19.2, 19.4                     |
| `who-regulates-forensic-science`       | Forensic Science Regulator Act 2021 ss. 1–7               |
| `what-forensic-laboratories-do`        | NFI; FSR "About us"; StPO § 87(2)                         |
| `the-limits-of-forensic-evidence`      | NISTIR 8351 (final); NIST SFR programme; NAS 2009         |
| `what-dna-analysis-establishes`        | StPO § 81e; NISTIR 8351                                   |
| `who-investigates-a-death`             | Coroners and Justice Act 2009 ss. 1, 19; StPO § 87        |
| `evidence-integrity-and-admissibility` | FSR Act s. 4; FSR "About us"; CrimPR r. 19.4; NISTIR 8351 |

## 2. Findings

**F1 — two systems bound the science from opposite ends.** Germany bounds the _examination_:
StPO § 81e lists what a molecular-genetic examination may determine and then provides that other
findings may not be made and examinations directed at them are inadmissible. England and Wales
bounds the _testimony_: CrimPR r. 19.2 requires opinion to stay within the expert's area of
expertise and requires the expert, when giving evidence in person, to draw the court's attention
to any question whose answer would fall outside it. Neither leaves the boundary to the
examiner's modesty — which is the point, because a boundary depending on individual restraint
fails exactly where the pressure is greatest.

**F2 — whose expert the expert is, answered two ways.** StPO § 73(1) gives the judge the
selection of experts and the determination of their number; § 78 has the judge direct their
activity so far as necessary; § 73(2) prefers publicly appointed experts. CrimPR r. 19.2(2)
keeps party instruction and ranks the loyalties instead: the duty to the court "overrides any
obligation to the person from whom the expert receives instructions or by whom the expert is
paid". One system removes the conflict; the other manages it. Describing either as a stricter
version of the other would misdescribe both.

**F3 — forensic quality is enforced evidentially, not penally.** FSR Act 2021 s. 4: a failure to
act in accordance with the code "does not of itself make that person liable to civil or criminal
proceedings" — but the code is admissible in criminal and civil proceedings and a court "may in
particular take into account a failure … in determining a question". The consequence of poor
practice is that the evidence it produced is worth less, decided by the body deciding the case.
That is coherent with the problem: prosecuting a provider does nothing for the case its work is
in. The code also requires approval by resolution of _each House_ of Parliament (s. 3).

**F4 — "coroner = medical examiner" is wrong in the one jurisdiction where both words are
native.** The Coroners and Justice Act 2009 creates both. A senior coroner — a judicial office —
_must_ investigate where there is reason to suspect violent or unnatural death, unknown cause, or
death in custody or state detention (s. 1). Medical examiners are registered medical
practitioners of at least five years' standing (s. 19(3)), with a statutory firewall barring any
NHS body from a role in their professional judgment (s. 19(5)). Germany has neither and routes
the work through prosecutor and judge: the prosecution conducts the external examination, the
judge orders the autopsy, two physicians perform it, and the treating physician is excluded from
performing it (StPO § 87).

**F5 — one technique, two reliability profiles.** The final NISTIR 8351 records that for
high-quality single-source samples different laboratories arrive at the same result regardless
of instruments, tests and software, and that multiple interlaboratory studies over two decades
have shown laboratories can produce **a wide range of results** interpreting the same DNA
mixtures. That single contrast defeats both "DNA proves guilt" and "DNA is unreliable", and it
is why "how reliable is forensic evidence" has no answer as asked.

**F6 — a technical improvement created a legal problem.** The same report records that in the
1990s a sample needed thousands of cells whereas a profile can now be extracted from the few skin
cells left when handling an object, and that people shed DNA constantly and can transfer
someone else's from surface to surface. Better detection made mixtures ordinary. Progress in a
forensic method does not automatically make forensic conclusions safer.

**F7 — no `/institutions/forensic-laboratory`.** The Netherlands has a national institute inside
the Ministry of Justice and Security. England and Wales has **no** national forensic service:
the Regulator's own priorities name "private companies, public laboratories, police forces or
individuals" as providers to whom standards apply equally. Germany's procedural code presupposes
public forensic-medical and pathological institutes. The third system has no member of the
family — its answer to "who does forensic science" is "a regulated market". **Eighth consecutive
wave** in which the recurring thing is a function whose embodiments differ in kind.

## 3. Source-integrity decisions

- **The final NIST DNA review was used, not the draft.** NISTIR 8351-DRAFT (June 2021) was
  fetched first; the programme page revealed a December 2024 final, which was fetched and used.
  A test asserts the source URL does not point at a draft, and mutation W16-M8 proves it.
- **The bitemark review was rejected as authority.** NISTIR 8352 remains a draft with its comment
  period closed. Nothing is quoted from it. A test asserts no Wave 16 guide cites a bitemark
  source and that every mention of bitemark in prose says the review is a draft.
- **The Criminal Procedure Rules 2020 are revoked.** SI 2020/759 Part 19 was fetched first and
  legislation.gov.uk records it revoked from 6 October 2025 by SI 2025/909. The 2025 Rules were
  used. Assuming currency would have produced a page citing revoked law. A test asserts the
  source note records the revocation and that no guide cites the 2020 id.
- **The NFI site is JavaScript-dependent.** The institutional statements used were recovered from
  the served HTML; nothing was inferred from parts that did not render. Recorded in the source
  note as an access limitation.

## 4. Safety posture

`forensics` was already safety-sensitive; all eight guides carry `safetyReview: 'cleared'` and a
test enforces it. Every guide opens with a scope or safety callout; the two highest-risk pages —
DNA and evidence integrity — carry an explicit `safety` callout, pinned separately.

**The anti-forensics guard is directional, not lexical.** Every page here contains a sentence
saying it does not describe how a result could be affected, so a substring test would report the
safety disclaimers as the violation — exactly what the brief warns against.
`isOperationalInstruction` combines two signals: a negation governing the match from _before_ it
(Wave 14's directive rule), and explicit disclaimer vocabulary anywhere in the sentence. A
planted instruction fires it; three planted disclaimers do not; and a non-vacuity test confirms
those disclaimers actually match the topic patterns, so the direction check is exercised rather
than bypassed.

Deferred on safety as well as evidence: **digital evidence**. It is the topic where the line
between institutional description and anti-forensic instruction is thinnest, and no primary
institutional source was obtained that would keep a page on the right side of it.

## 5. Mutation proofs

Eleven, under the programme's validity rule: anchor asserted unique, file hash checked, `git diff
--stat` non-empty, `npm run typecheck` required to pass, test exit status read directly, tree
reverted and re-verified clean.

| ID      | Guard attacked                                       | First pass       | After fix        |
| ------- | ---------------------------------------------------- | ---------------- | ---------------- |
| W16-M1  | no affirmative anti-forensic instruction             | failed correctly | —                |
| W16-M2  | a disclaimer must not be read as an instruction      | **PASSED**       | failed correctly |
| W16-M3  | no forensic overclaim                                | failed correctly | —                |
| W16-M4  | no wholesale dismissal                               | failed correctly | —                |
| W16-M5  | coroner ≠ medical examiner                           | failed correctly | —                |
| W16-M6  | country claims are country-sourced                   | failed correctly | —                |
| W16-M7  | the DNA finding keeps both halves in one block       | failed correctly | —                |
| W16-M8  | the final NIST review, not the draft                 | failed correctly | —                |
| W16-M9  | every fact block carries a source                    | failed correctly | —                |
| W16-M10 | no forensic-laboratory institution record            | **PASSED**       | failed correctly |
| W16-M11 | safety review required in a safety-sensitive section | failed correctly | —                |

**11/11 valid after the fixes.** Both survivors exposed test weaknesses, not content problems.

- **W16-M2** disabled the `negatedForwards` half of the direction check entirely and the suite
  passed: all three planted disclaimers carried disclaimer vocabulary, so `disclaims` caught
  every one and the negation half was never exercised. An untested branch of a safety guard is an
  unproven branch. Each half now has a case the other cannot clear.
- **W16-M10** inverted "These are **not** two designs of one institution" and the suite passed:
  the assertion accepted either that phrase _or_ the separate statement that no institution page
  follows, so deleting one left the other matching — and the page was left contradicting itself
  inside a single callout. Both limbs are now required.

## 6. Defects found and fixed during the wave

**D1 — an unsupported field.** `relatedProfessions` was written on a guide; `Guide` has no such
field, only `relatedInstitutions`. Caught by the typechecker. Recorded as an architectural
observation in §8 rather than fixed by extending the schema.

**D2 — a link to an unrouted glossary term.** A page linked to `/glossary/standard-of-proof`.
Only five of thirty-two glossary terms are routed. Replaced with a routed target.

**D3 — a semantic denial the guard could not see.** A misconception denied its claim with "That
overstates the findings in the opposite direction" — accurate, and containing no negation the
helper recognises. Fixed in the content, which is clearer prose as well.

**D4 — a status word separated from what it qualified.** A sentence named the bitemark review and
said it "is not" final, with "draft" only in the preceding sentence. Rewritten so the status sits
with the name.

## 7. Adversarial review

| Lens                  | Result                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Scientific integrity  | No P0/P1. Overclaim and dismissal both tested, with a correction-sentence test proving neither fires on accurate prose. |
| Source interpretation | No P0/P1. Three source-currency decisions recorded in §3, each verified rather than assumed.                            |
| Jurisdiction scope    | No P0/P1. Every England-and-Wales claim scoped away from Scotland; a test enforces the mention.                         |
| Universality          | No P0/P1. "Every country has a coroner" and "every country has a national forensic laboratory" both tested for.         |
| Taxonomy              | No P0/P1. The forensic-laboratory family was examined and rejected on evidence.                                         |
| Safety                | No P0/P1. Directional guard, both halves proven; digital evidence deferred.                                             |
| Cannibalization       | No P0/P1. No paragraph of the pre-existing guide or section key idea reproduced; tests are non-vacuous.                 |
| Accessibility         | No P0/P1. Three forensics pages added to the 320px reflow list; all pass.                                               |
| Architecture          | No P0/P1. No schema change, no new route segment, no client JavaScript.                                                 |

## 8. What was not done, and why

- **No new schema.** Nothing in the evidence required one.
- **`Guide` cannot declare related professions.** It has `relatedInstitutions` only. Adding a
  field for one wave's convenience would be speculative architecture; recorded as **P3**.
- **Nine candidate disciplines deferred**, including fingerprint and firearms examination — NIST
  reviews exist but no final report was obtained — and toxicology, chemistry, anthropology and
  odontology, for which no primary institutional source was obtained at all.
- **No `/institutions/forensic-laboratory`, no coroner or medical-examiner profession record.**
  The comparative material lives in prose where the evidence supports it.
- **Digital evidence deferred** on both evidence and safety grounds.
