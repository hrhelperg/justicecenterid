# Wave 19 QA record — remedies, appeals and review

Branch `feat/knowledge-expansion-wave-19`, off `c8ac5ff`. Written 2026-08-26. No push during
implementation; one push at the end, after this record was complete.

Central reader question: what does a justice system do when a decision, procedure or exercise of
public power may be wrong, unlawful or unfair? Central principle: **lawful challenge is part of
the justice system** — which is a claim with two edges, and both are guarded.

## 1. What shipped

Seven guides across two sections. One new source record, seven source notes extended. No new
type, no new enum, no new route segment, no new component.

| Route                                          | Section | Load-bearing evidence                                                        |
| ---------------------------------------------- | ------- | ---------------------------------------------------------------------------- |
| `appeal-and-judicial-review-are-different`     | courts  | StPO § 337; GG Arts 94(1) no. 4a, 100(1); CE art. 53.2; NL Grondwet art. 120 |
| `cassation-review`                             | courts  | StPO §§ 333, 337, 352; Cour de cassation; NL Grondwet art. 120               |
| `what-a-reviewing-court-can-do`                | courts  | Constitution française art. 62; StPO § 337; ICCPR 14(5)–(6); CF/88           |
| `constitutional-review`                        | justice | GG Arts 93(5), 94(1) nos. 2 and 4a, 100(1); Const. fr. arts 61, 61-1, 62     |
| `reviewing-detention`                          | justice | CF/88 art. 5º LXVIII, LXXVII, XXXV; ZA s 35(2)(d); Const. fr. art. 66        |
| `when-a-procedural-error-changes-the-outcome`  | justice | StPO §§ 337(1), 338; Sentencing Act 2020 s. 30(4); FSR Act 2021 s. 4         |
| `what-happens-to-unlawfully-obtained-evidence` | justice | CF/88 art. 5º LVI; ZA s 35(5); KE art. 50(4)                                 |

Counts, measured rather than estimated:

| Metric             | Wave 18 close | Wave 19 close |
| ------------------ | ------------- | ------------- |
| Routes             | 443           | **450**       |
| Exported pages     | 445           | **452**       |
| Sitemap entries    | 443           | **450**       |
| Source records     | 288           | **289**       |
| Published guides   | 102           | **109**       |
| Tests / test files | 5247 / 72     | **5559 / 74** |

Link graph after the wave: 452 pages, 422 content routes, **0 orphans, 0 weakly linked, 0 dead
ends**.

## 2. The architectural decision: no taxonomy

The brief supplied twenty-one terms and warned against flattening them. They were classified
before anything was written, and the classification is why no enum exists:

| Kind               | Examples                                                     |
| ------------------ | ------------------------------------------------------------ |
| Jurisdiction       | constitutional review; cassation jurisdiction; habeas corpus |
| Mode of review     | appeal; Revision; judicial review; amparo                    |
| Ground             | violation of law; absolute ground; unconstitutionality       |
| Legal effect       | nullity; abrogation; quashing; exclusion; release            |
| Procedural posture | pre-promulgation; concrete referral; post-conviction         |

Several terms are two of these at once — _cassation_ is both a jurisdiction and a mode; _amparo_
is a mode with its own posture. An enum would have forced a choice the sources do not make. So
**nothing was added to the schema**: no `RemedyType`, no relationship vocabulary, no
predecessor/successor edges. A test asserts this negatively — no institution type, profession or
glossary term was invented to carry a review taxonomy, and every new page is modelled with the
existing `concept` entity type.

## 3. Findings the wave exists to record

**F1 — Article 120 of the Dutch Constitution.** "The constitutionality of Acts of Parliament and
treaties shall not be reviewed by the courts." Not a narrow jurisdiction and not a demanding
threshold: an express exclusion, in a constitution, of the power the other three systems on the
same page are busy allocating. Any general account of judicial review as a rule-of-law feature has
to survive that sentence.

**F2 — cassation is a mode, not a rank.** StPO § 333 provides that Revision lies against the
judgments of the Strafkammern and Schwurgerichte _and against first-instance judgments of the
Oberlandesgerichte_. A review confined to legal error is therefore available against courts that
are not the apex, and heard by courts that are not necessarily the apex either.

**F3 — the load-bearing word is a verb form.** StPO § 337(1): the Revision may be based only on
the judgment resting on a violation of the law — _beruhe_. Accompanied by a violation is not
enough. § 338 then lists the cases where resting on it is presumed, and those are not the _worst_
errors but the ones where the counterfactual cannot be run: a court not properly constituted, a
judge who should not have sat, a hearing held contrary to the publicity provisions.

**F4 — a duty whose breach produces no nullity, found for the third and fourth time.** Sentencing
Act 2020 s. 30(4): where a court does not obtain a pre-sentence report, "no custodial sentence or
community sentence is invalidated by the fact that it did not do so". FSR Act 2021 s. 4: failure
to follow the code "does not of itself make that person liable" to civil or criminal proceedings,
yet the code is admissible and a court may take the failure into account. Not nullity, not
liability — relevance. Two English statutes and one German code arrive at the same design from
different traditions, which suggests the problem is structural rather than national.

**F5 — two answers on unlawfully obtained evidence, not one.** Brazil (art. 5º LVI) states
inadmissibility with no balancing condition. South Africa (s 35(5)) and Kenya (art. 50(4)) make
exclusion mandatory _if_ admission would render the trial unfair or otherwise be detrimental to
the administration of justice. The discretion is in the assessment, not in what follows from it.

**F6 — three techniques for detention review, one of which has the famous name.** A named
constitutional action, free of charge (Brazil). A stated right to appear in person and be released
(South Africa). An allocation of guardianship to a branch (France). The English habit of calling
every detention-review mechanism "habeas corpus" gets two of the three wrong.

**F7 — the 1679 Act did not create the writ.** Its own recital describes officers evading writs
already directed to them "contrary to their Duty and the knowne Lawes of the Land". What the Act
added was a consequence for delay: three days.

## 4. Defects found and fixed during the wave

| #   | Defect                                                                                                                                                                                  | Where found                                       | Fix                                                                 |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | 93 emphasis marker pairs across the corpus printed as literal asterisks on live pages — `parseInline` knew only about link markers                                                      | corpus scan while authoring                       | renderer fixed; corpus-wide guard test added                        |
| 2   | Two Wave 19 source extensions landed on the wrong record: Spanish art. 53.2 on `ch-crimpc`, Kenyan art. 50(4) on `ke-odpp` — the append helper matched only single-quoted note literals | audit of which records carried a Wave 19 addition | both moved; pinned by test                                          |
| 3   | `za-constitution` note did not carry three features of s 35(2)(d) the page asserted                                                                                                     | quotation-vs-note audit                           | note extended with the chapeau and the whole of (d)                 |
| 4   | "one quarter of the Members of the Bundestag" presented as a quotation where the official translation says "one fourth"                                                                 | same audit                                        | corrected on the page                                               |
| 5   | Spain's art. 53.2 and France's art. 62 rendered only in English, where the notes carry the authoritative text                                                                           | same audit                                        | both now quote the original and gloss it                            |
| 6   | `appeal-and-judicial-review-are-different` carried a lightly edited copy of a scope sentence from `/forensics/what-forensic-science-cannot-decide`                                      | duplication measure, once corrected               | rewritten                                                           |
| 7   | FSR Act s. 4 treatment reproduced most of a paragraph of `/forensics/who-regulates-forensic-science`                                                                                    | duplication measure                               | shortened to what the argument needs; links to the fuller treatment |
| 8   | Two new pages had no inbound related link                                                                                                                                               | link-reachability test                            | back-links added from three existing guides                         |
| 9   | One pre-existing misconception carried `*emphasis*` in text that renders raw                                                                                                            | corpus scan                                       | replaced with quotation marks                                       |
| 10  | `Block` `list` accepts no `title` and no `sources`                                                                                                                                      | typechecker, first append                         | attribution moved to the set-up paragraph                           |

Four **test-design** defects, found by writing the tests and fixed rather than worked around:

1. The habeas-universality misconception denied its claim semantically, with no negation the
   helper could see. Content fixed to deny explicitly — Wave 13's lesson, paid for again.
2. The unreviewable-power tripwires contain negations in their own text, so a sentence stating
   that stance cleared itself through an incidental `no` elsewhere. Those patterns now use a
   forward-only denial check, and the live-catch test asserts that the strip-and-search check
   would _not_ have caught it, so the reason for the split is pinned.
3. The forward-negation branch of the safety guard was exercised with "Nowhere does this
   platform…", and `nowhere` is not in the negation vocabulary — the branch was reported inert
   when it was fine.
4. The duplication measure counted `furtherReading` blocks, which are link lists by construction,
   and reported a 32% "duplicate" on the strength of the word "Related" and two shared link
   targets. Duplication is now measured on prose blocks only.

## 5. Mutation proofs

Ten required proofs, all run through the harness that asserts the mutation applied (anchor unique,
file hash changed, `git diff --stat` non-empty), that the mutated tree still typechecks — a build
failure is not a proof — that the suite then failed, that the failure message was the intended
one, and that the tree reverted clean. Exit codes read directly; none masked.

| ID  | Mutation                                               | Guard                     | typecheck | test rc | Verdict |
| --- | ------------------------------------------------------ | ------------------------- | --------- | ------- | ------- |
| M1  | remove `za-constitution` from `reviewing-detention`    | country-scoped source     | 0         | 1       | VALID   |
| M2  | assert an appeal gives a new trial                     | appeal is not a retrial   | 0         | 1       | VALID   |
| M3  | assert judicial review is an appeal                    | mechanisms not flattened  | 0         | 1       | VALID   |
| M4  | assert any procedural violation voids the proceeding   | no automaticity           | 0         | 1       | VALID   |
| M5  | assert unlawfully obtained evidence is always excluded | no automaticity           | 0         | 1       | VALID   |
| M6  | assert a cassation court is always the highest         | cassation is not a rank   | 0         | 1       | VALID   |
| M7  | assert appealing is disrespect for the court           | framing, hostile end      | 0         | 1       | VALID   |
| M8  | insert "How to file an appeal: …"                      | safety, actionable topics | 0         | 1       | VALID   |
| M9  | assert habeas corpus is the universal remedy           | detention review          | 0         | 1       | VALID   |
| M10 | copy another guide's question verbatim                 | no duplication            | 0         | 1       | VALID   |

**10/10 valid.** M1 failed two assertions rather than one, which is expected: removing the source
also removes the basis for the "describes at least two systems" check.

## 6. Safety boundary

Not provided anywhere on the seven pages: filing instructions; deadlines for real jurisdictions;
appeal tactics; loopholes; how to manufacture an appellate issue or create reversible error; how
to evade finality; forum shopping; how to exploit habeas procedures; how to suppress evidence
tactically; how to delay enforcement.

Provided: institutional structure, general concepts, comparative models, why remedies exist, types
of outcome, high-level safeguards.

The guard is **assertion-aware**, as the brief required. A sentence matching a prohibited topic
fails only if it is an affirmative instruction: it is cleared by a negation that governs the match
(examined before it, not after) or by disclaimer vocabulary anywhere in the sentence. Both branches
are exercised separately, because Wave 16's M2 proved that an untested branch of a safety guard is
an unproven one. A test also asserts no page anywhere states a period of days, weeks or months
following a judgment.

Every page carries a `safety` or `scope` callout naming what it is not, and **all seven** state
explicitly that they are not legal advice — four inside a `safety` callout, three inside a `scope`
callout. Verified by reading the callouts rather than assumed from the variant.

## 7. Country matrix vocabulary

`docs/research/remedies-appeals-review-country-matrix.md` uses YES / NO / CONDITIONAL / NOT
ESTABLISHED, and `NOT ESTABLISHED` appears 19 times. No unknown was converted into a no.

The vocabulary is carried into the prose and tested. `/justice/what-happens-to-unlawfully-obtained-evidence`
names Germany in order to record that no source used establishes its position — and the
country-source check is sentence-level and assertion-aware precisely so that an honest gap
statement is not forced either to disappear or to cite a source that supports nothing about it.
A companion test asserts the exemption is genuinely exercised and that the page cites no German
source, so it cannot pass vacuously.

## 8. Full gate

Every command run to completion on the final tree, exit codes read directly:

| Command                                               | Exit | Result                                    |
| ----------------------------------------------------- | ---- | ----------------------------------------- |
| `npm run format:check`                                | 0    | all files match Prettier style            |
| `npm run lint`                                        | 0    | clean                                     |
| `npm run typecheck`                                   | 0    | clean                                     |
| `npm test`                                            | 0    | 5559 passed, 74 files                     |
| `npm run build`                                       | 0    | static export                             |
| `npm run verify:output`                               | 0    | 450 routes / 452 pages / 450 sitemap URLs |
| `node scripts/route-matrix.mjs http://127.0.0.1:4173` | 0    | 598 passed, 0 failed                      |
| `npm run test:e2e`                                    | 0    | 796 passed, 4 skipped                     |
| `node scripts/link-graph-audit.mjs`                   | 0    | 0 orphans, 0 weakly linked, 0 dead ends   |

## 9. Limitations, stated rather than hidden

- Every page describes between three and five systems. None is a survey, and each says so.
- Procedure is absent by design. No page states how any mechanism is invoked, by whom, or when.
- How often any of these mechanisms succeeds was not researched and is not stated anywhere.
- Germany's position on unlawfully obtained evidence is NOT ESTABLISHED by any source used here.
- Civil and administrative procedure are largely out of scope; the German material is criminal.
- Immigration, mental-health and emergency detention each have their own law and are not covered.
- The renderer change in `1cb8a54` alters how 93 pre-existing marker pairs display across the
  corpus. That is the point of it, but it is a corpus-wide visual change made inside a content
  wave, and a reviewer who wants the content without it can drop that commit alone.
