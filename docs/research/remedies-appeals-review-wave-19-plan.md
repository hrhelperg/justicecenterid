# Wave 19 — Remedies, Appeals & Review

Branch `feat/knowledge-expansion-wave-19`. Researched and written 2026-08-26. No push.
Base SHA `c8ac5ff94daa15fdd7eda988781e965a1461d1e7`.

## 1. Scope, after cannibalization

The corpus already carries nine pages that touch this ground, and two of the brief's flagship
suggestions collide head-on with existing pages: "Why Appeals Matter" is
`/justice/appeal-and-the-rule-of-law`, and "What Is a Legal Remedy?" is
`/justice/effective-remedy`. Of 34 candidates, **7 publish, 14 merge, 2 hub-only, 5 defer, 6
reject**. Full matrix in `docs/seo/knowledge-expansion-wave-19-cannibalization.md`.

What the corpus does **not** have is the layer between "correction mechanisms exist" and "here is
a court": the distinction between appeal and review, the models of constitutional review, what a
reviewing court can actually order, and three specific misconceptions that no page currently
refutes — that a procedural breach voids a proceeding, that unlawfully obtained evidence is
always excluded, and that habeas corpus is the universal detention remedy.

## 2. The architectural decision: no single taxonomy

The brief lists 21 terms and warns against flattening them. Research confirms the warning, and
the reason is that they are **different kinds of thing**:

| Kind                     | Examples                                                              | Why it cannot share an enum with the others    |
| ------------------------ | --------------------------------------------------------------------- | ---------------------------------------------- |
| A forum's _jurisdiction_ | appellate jurisdiction, constitutional review                         | Answers "which body may decide this at all"    |
| A _mode_ of examination  | appeal, cassation/Revision, judicial review                           | Answers "what does the reviewing body look at" |
| A _ground_               | violation of law, procedural unfairness, ultra vires                  | Answers "what makes review available"          |
| A _legal effect_         | quash, reverse, modify, remand, declare, compensate, release, exclude | Answers "what changes as a result"             |
| A _procedural posture_   | rehearing, retrial, remand                                            | Answers "what happens next, and where"         |

`Revision` is a mode and a ground at once; `remand` is an effect and a posture at once; `habeas
corpus` is a forum, a mode and an effect depending on the system. **No enum, no new schema, and
no relationship vocabulary was added.** The distinctions are carried in prose and pinned by test,
which is how the corpus has handled every previous family that refused to flatten.

Terminology explicitly **not** treated as equivalent: quash / annul / cassate / vacate / set
aside. They overlap and are not interchangeable, and a test forbids asserting that they are.

## 3. Route plan

| Route                                          | Section | Load-bearing evidence                                                   |
| ---------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| `appeal-and-judicial-review-are-different`     | courts  | GG 94, 100; StPO § 337; NL Art. 120; ES Art. 53.2                       |
| `cassation-review`                             | courts  | StPO §§ 333, 337, 352; `fr-justice-courts`; `be-cassation`; NL Art. 118 |
| `what-a-reviewing-court-can-do`                | courts  | FR Art. 62; StPO § 337; ICCPR 14(5)–(6); BR Art. 5º LXXV                |
| `constitutional-review`                        | justice | GG 93(5), 94(1)2/4a, 100; FR 61, 61-1, 62; NL 120; ES 53.2              |
| `reviewing-detention`                          | justice | BR Art. 5º LXVIII, XXXV; ZA s 35(2)(d); FR Art. 66; the 1679 Act        |
| `when-a-procedural-error-changes-the-outcome`  | justice | StPO § 337(1) "beruhe"; § 338 absolute grounds                          |
| `what-happens-to-unlawfully-obtained-evidence` | justice | BR Art. 5º LVI; ZA s 35(5); KE Art. 50(4)                               |

Seven routes. The brief set no target; the cannibalization matrix set the number.

## 4. Evidence

One new source record; **six existing notes extended** rather than duplicated, on the pattern
established in Wave 14.

| Source                 | Status           | Establishes                                                                                                                          |
| ---------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `de-stpo-revision`     | **new**          | Revision only on a violation the judgment _rests on_; seven absolute grounds; available below the apex court                         |
| `de-grundgesetz`       | extended         | Abstract review, concrete referral, individual complaint, exhaustion — **and that jurisdiction is now Art. 94, composition Art. 93** |
| `fr-constitution-1958` | extended         | Arts. 61, 61-1, 62 — pre-enactment and incidental review, with different effects                                                     |
| `es-constitution`      | extended         | Art. 53.2 — ordinary courts first, amparo where appropriate                                                                          |
| `iccpr`                | extended         | Art. 14(5) "according to law"; Art. 14(6) compensation after final reversal                                                          |
| `ke-constitution`      | extended         | Art. 50(4) — conditional exclusion of unlawfully obtained evidence                                                                   |
| `za-constitution`      | extended         | s 35(5) — the same conditional formulation                                                                                           |
| `nl-constitution`      | reused unchanged | Art. 120 — courts shall **not** review the constitutionality of Acts of Parliament                                                   |

### 4.1 A numbering trap, verified rather than assumed

Almost every secondary source cites **GG Article 93** for the jurisdiction of the Federal
Constitutional Court. In the current official text, **Article 93 is composition and Article 94 is
jurisdiction** — the two have been swapped. The pages and the source note cite Art. 94 for the
abstract-review and constitutional-complaint competences because that is what the current text
says. This is the fourth currency trap this programme series has caught by reading revised text
(after the revoked Criminal Procedure Rules 2020, the repealed CJA 2009 s. 125, and a NIST draft
mistaken for a final report).

## 5. Findings

**F1 — appeal and judicial review answer different questions.** An appeal asks whether a
_decision_ was right; judicial review asks whether a _body_ acted within its powers and followed
a lawful process. The German structure makes the difference concrete from both ends: a Revision
lies only where the judgment rests on a violation of the law (§ 337), while a court that thinks
a _statute_ is unconstitutional may not disapply it and must refer (GG 100(1)). Two different
defects, two different bodies, two different outcomes.

**F2 — constitutional review has at least four models and one refusal.** Abstract review on
political application (Germany, France before promulgation); concrete review by compulsory
referral (Germany); incidental review filtered by apex courts (France); individual complaint by
any person (Germany) or after the ordinary courts (Spain). And the Netherlands forbids review of
Acts of Parliament outright. A model built from Germany and France alone would be wrong about a
system in this corpus.

**F3 — the effect of a successful challenge depends on the route, in the same constitution.**
France: a provision struck down before promulgation may not be promulgated or applied; one struck
down on a QPC is _abrogated from publication of the decision or a later date the decision fixes_,
with the Council controlling whether effects already produced may be reopened. Same court, same
constitution, different consequences.

**F4 — cassation is a mode, and the German case proves it is not a rank.** The Revision is
confined to legal error and lies against first-instance judgments of the Oberlandesgerichte —
courts that are not the apex. Wave 9's invariant survives contact with a second system.

**F5 — a procedural breach does not void a proceeding, and one statute says so twice.**
StPO § 337(1) requires the judgment to _rest on_ the violation. § 338 then lists seven grounds
where that is _always_ presumed. Materiality is the rule; the enumerated exceptions are the
proof. This is the third time this programme series has found a duty whose breach produces no
automatic nullity — after the forensic code of practice and the pre-sentence report requirement.

**F6 — unlawfully obtained evidence is not universally excluded.** Brazil's Art. 5º LVI states
inadmissibility without a balancing condition. South Africa and Kenya require exclusion only
where admission "would render the trial unfair or otherwise be detrimental to the administration
of justice". Two structures, three constitutions, and the common English claim is false of both
of them in different directions.

**F7 — "habeas corpus" is a name, not the mechanism.** Brazil names it in the constitution and
makes the action free. South Africa protects the same interest without the name, through
s 35(2)(d). France routes it through Art. 66, the judicial authority as guardian of individual
liberty. And Wave 18 already established that the 1679 Act enforced a writ that already existed.

## 6. Preserved invariants

- Wave 9: constitutional court ≠ supreme court; cassation ≠ court rank.
- Wave 12: respect for courts is compatible with challenging their decisions through the
  procedures the legal system provides.
- Wave 18: the Habeas Corpus Act 1679 did not create habeas corpus.
- Waves 16–17: a duty can exist without its breach voiding anything.

Each is asserted by a Wave 19 test against the live corpus, not merely honoured in the prose.

## 7. Safety posture

`justice` and `courts` are not safety-sensitive sections, but this wave's subject matter is the
closest the corpus comes to procedural advice. Nothing here states a time limit, a filing route,
a form, a forum choice, or a tactic. An **assertion-aware** safety guard is added: it fires on
affirmative instruction and not on the disclaimers every page carries, on the directional pattern
Wave 16 established after a mutation showed a lexical test would flag the disclaimers themselves.

## 8. Institutions and professions

**None created.** `constitutional-court`, `ombuds-and-rights-institution` and the court records
already exist and already carry this ground. An "appellate court" institution record was
considered and rejected: `/courts/trial-and-appellate-courts` and `/courts/court-hierarchy`
establish that appellate function is a role a court holds rather than a kind of court, and Ireland's
Circuit Court — first instance and appellate at once — is already in the corpus as the
counter-example. This is the **tenth consecutive wave** without a new institution record.
