# Wave 19 — cannibalization matrix

Written **before** authoring, 2026-08-26. Branch `feat/knowledge-expansion-wave-19`.

The corpus is denser in this area than any previous wave's starting point. Nine existing pages
already answer parts of the brief's candidate list, and two of the brief's flagship suggestions
collide head-on with pages that already exist.

## 1. What already owns this ground

| Existing page                                     | What it already establishes                                                                                                                                                                                                                     |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/justice/appeal-and-the-rule-of-law`             | **Why** correction mechanisms exist; that no system claims first-instance decisions are always correct; finality and res judicata; that four mechanisms address different objects; that pursuing a remedy is not adversarial to the legal order |
| `/justice/effective-remedy`                       | What a remedy _is_; that remedies divide by what they operate on; UDHR and ICCPR declared standards; Brazil Art. 5º LXXV compensation for judicial error                                                                                        |
| `/justice/why-courts-must-be-respected`           | Respect ≠ infallibility; that every route for challenging a decision is created by the same legal order; Brazil Art. 5º XXXV                                                                                                                    |
| `/justice/why-justice-systems-need-oversight`     | That different oversight mechanisms answer different questions; ICCPR review by a higher tribunal as the treaty basis for appellate review                                                                                                      |
| `/courts/trial-and-appellate-courts`              | That appeal is **not** universally a complete new trial and **not** universally confined to law; three questions that establish what an appeal is; the Cour de cassation as a distinct mode                                                     |
| `/courts/supreme-courts-and-final-appeal`         | Apex courts; re-deciding versus reviewing legal correctness; Spain's Tribunal Supremo versus constitutional matters; four questions                                                                                                             |
| `/courts/court-hierarchy`                         | Where a case starts, where it can go, what ends it; France's two orders; Spain's jurisdictional unity                                                                                                                                           |
| `/law-enforcement/how-police-are-held-to-account` | Which bodies can examine police conduct and what each can do                                                                                                                                                                                    |
| `/prosecution/prosecutorial-accountability`       | Who holds prosecutors to account; three kinds of mechanism                                                                                                                                                                                      |
| `/glossary/appeal`, `/glossary/judicial-review`   | Short definitions, both routed                                                                                                                                                                                                                  |

## 2. Candidate classification

34 candidates from the brief. **7 PUBLISH · 14 MERGE · 0 ALIAS · 2 HUB-ONLY · 5 DEFER · 6 REJECT.**

### Foundational

| #   | Candidate                 | Decision     | Reason                                                                                                                                                                             |
| --- | ------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Why Legal Remedies Matter | **REJECT**   | `/justice/appeal-and-the-rule-of-law` answers exactly this.                                                                                                                        |
| 2   | What Is a Legal Remedy?   | **REJECT**   | `/justice/effective-remedy` owns it.                                                                                                                                               |
| 3   | What Is an Appeal?        | **REJECT**   | `/glossary/appeal` plus `/courts/trial-and-appellate-courts`.                                                                                                                      |
| 4   | Why Appeals Matter        | **REJECT**   | Direct collision with `/justice/appeal-and-the-rule-of-law`.                                                                                                                       |
| 5   | Appeal vs Judicial Review | **PUBLISH**  | Nothing distinguishes them. The single largest gap.                                                                                                                                |
| 6   | Appeal vs Retrial         | MERGE        | Into appeal-vs-judicial-review and the outcomes page.                                                                                                                              |
| 7   | Judicial Review Explained | MERGE        | Into appeal-vs-judicial-review; a separate page would split one distinction across two.                                                                                            |
| 8   | Constitutional Review     | **PUBLISH**  | Wave 9 owns the _court_; nothing owns the _models_.                                                                                                                                |
| 9   | Administrative Review     | MERGE        | Into appeal-vs-judicial-review, which is where the administrative/judicial line lives.                                                                                             |
| 10  | Effective Remedy          | **HUB-ONLY** | Keep `/justice/effective-remedy`; link into it. See §4.                                                                                                                            |
| 11  | Finality of Judgments     | MERGE        | `/justice/appeal-and-the-rule-of-law` already carries finality and res judicata; the new material (exhaustion, ICCPR 14(6)) goes into constitutional review and the outcomes page. |
| 12  | Error Correction          | **REJECT**   | Owned by appeal-and-the-rule-of-law.                                                                                                                                               |

### Court review

| #     | Candidate                                                  | Decision                                       | Reason                                                                                                            |
| ----- | ---------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 13–15 | Appellate jurisdiction / courts of appeal / supreme review | **REJECT**                                     | The courts trio owns all three.                                                                                   |
| 16    | Cassation Review                                           | **PUBLISH**                                    | Wave 9 established "cassation is a mode, not a rank" but no page owns it; StPO §§ 333–352 supply a second system. |
| 17–19 | Rehearing / retrial / remand                               | MERGE                                          | Into the outcomes page — three names for points on one taxonomy.                                                  |
| 20    | Reversal vs modification vs remand                         | **PUBLISH** as `what-a-reviewing-court-can-do` | The outcome taxonomy nothing covers.                                                                              |

### Public power

| #   | Candidate                          | Decision                             | Reason                                                                                   |
| --- | ---------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| 21  | Review of police action            | **REJECT**                           | `/law-enforcement/how-police-are-held-to-account` owns it.                               |
| 22  | Review of prosecutorial decisions  | **REJECT**                           | `/prosecution/prosecutorial-accountability` owns it.                                     |
| 23  | Review of administrative decisions | MERGE                                | Into appeal-vs-judicial-review.                                                          |
| 24  | Review of detention                | **PUBLISH** as `reviewing-detention` | Merged with 25 — one comparative guide, not two thin ones.                               |
| 25  | Habeas Corpus                      | MERGE into 24                        | A standalone habeas page would invite exactly the universalisation Part G warns against. |
| 26  | Constitutional complaints          | MERGE                                | Into constitutional review, where it is one of four models.                              |
| 27  | Ombuds and non-judicial remedies   | **HUB-ONLY**                         | `/institutions/ombuds-and-rights-institution` exists; linked, not duplicated.            |

### Remedy types

| #         | Candidate                                                 | Decision                                                      | Reason                                                                                                  |
| --------- | --------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 28–31, 34 | Injunctions, declarations, quashing, damages, restoration | MERGE                                                         | Into `what-a-reviewing-court-can-do` as one taxonomy by legal effect.                                   |
| 32        | Exclusion of evidence                                     | **PUBLISH** as `what-happens-to-unlawfully-obtained-evidence` | Nothing covers it, and "always excluded" is a live misconception with three-system evidence against it. |
| 33        | Release from unlawful detention                           | MERGE                                                         | Into `reviewing-detention`.                                                                             |

### Added by research, not in the brief's list

| Candidate                                   | Decision    | Reason                                                                                                                            |
| ------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| When a procedural error changes the outcome | **PUBLISH** | Part M's safeguard. StPO § 337's "beruhe" and § 338's absolute grounds are the materiality rule and its exception in one statute. |

### Deferred

`/justice/finality-and-exhaustion` (overlaps appeal-and-the-rule-of-law too heavily to stand
alone); interlocutory review (no primary source obtained); review of legislation by referendum;
EU preliminary reference (out of scope for this wave's sourcing); ombuds review as a standalone
comparative page (institution record already carries it).

## 3. The seven published routes

| Route                                                   | Distinct intent it owns                                        |
| ------------------------------------------------------- | -------------------------------------------------------------- |
| `/courts/appeal-and-judicial-review-are-different`      | "Are these the same thing?" — nothing answers it               |
| `/courts/cassation-review`                              | "What is cassation, and is a cassation court a supreme court?" |
| `/courts/what-a-reviewing-court-can-do`                 | "If I win, what actually happens?"                             |
| `/justice/constitutional-review`                        | "Who decides whether a law is constitutional, and when?"       |
| `/justice/reviewing-detention`                          | "What can a court do about someone being held?"                |
| `/justice/when-a-procedural-error-changes-the-outcome`  | "Does a mistake in procedure undo the case?"                   |
| `/justice/what-happens-to-unlawfully-obtained-evidence` | "Is evidence thrown out if it was obtained unlawfully?"        |

Each question is checked against every published guide question and every history entry question
by test.

## 4. `/justice/effective-remedy` — KEEP, not expand or merge

Assessed against the brief's four options. It answers "what is a person entitled to", rests on
Brazil, South Africa, Germany, the UDHR and the ICCPR, and is well linked. The new material does
not belong inside it: remedies-by-legal-effect is a _court powers_ question and sits in
`/courts/what-a-reviewing-court-can-do`; detention review is a distinct forum question. The page
is **kept unchanged in substance** and gains inbound links from three new pages.

## 5. Glossary boundaries

`/glossary/appeal` and `/glossary/judicial-review` stay as short definitions. Neither is expanded
into a long-form page, and no new page reproduces either definition — asserted by test. The new
guides answer _comparative_ and _consequential_ questions the definitions do not touch.
