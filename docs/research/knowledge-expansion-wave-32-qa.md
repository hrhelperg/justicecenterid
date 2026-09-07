# Wave 32 — adversarial QA

Independent pass over the police-functions wave. Findings classified P0/P1/P2/P3/REFUTED.

## Candidate audit

62 candidates audited against existing ownership before any research.

| Disposition                       | Count | Reason                                                                                                                                                                 |
| --------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PUBLISH                           | 6     | Named service, primary source, no existing owner                                                                                                                       |
| REJECT — already owned            | 21    | Taxonomy, unit form, unit geography and the ten-area enumeration are owned by four Wave 24/27 pages                                                                    |
| DEFER — no primary source reached | 18    | Mounted, transport in other systems, cybercrime units, intelligence analysis, missing persons, school liaison and others: no official page content-confirmed this wave |
| SAFETY-REJECT                     | 9     | Public-order and special tactical bodies. Institutional description is possible in principle; the value did not justify the profile                                    |
| OUT OF PRODUCT SCOPE              | 8     | Deployment, handling, patrol method, pursuit, covert work, tradecraft                                                                                                  |

The publish count is well below the brief's 15–25 target. That is an ownership result, not a
shortfall of effort: 21 of 62 candidates were already answered by pages this wave must not
duplicate, and 18 more had no primary source that could be content-confirmed. A page per candidate
would have meant either restating Wave 24 and Wave 27 or resting claims on search snippets.

## Mutation proofs — 18 run, 18 caught

| #   | Mutation                                                   | Result                        |
| --- | ---------------------------------------------------------- | ----------------------------- |
| M1  | Rank equated with role                                     | **SURVIVED → fixed → CAUGHT** |
| M2  | Assignment equated with rank                               | CAUGHT                        |
| M3  | Specialisation equated with promotion                      | CAUGHT                        |
| M4  | Dog handling made an entry route                           | **SURVIVED → fixed → CAUGHT** |
| M5  | False equivalence between two countries                    | CAUGHT                        |
| M6  | Handling/tactical instruction inserted                     | CAUGHT                        |
| M7  | Berth location and unit establishment published            | CAUGHT                        |
| M8  | Procedural-law drift                                       | CAUGHT                        |
| M9  | Re-enumerating the ten specialisation areas                | CAUGHT                        |
| M10 | A jurisdiction declared that no source carries             | CAUGHT                        |
| M11 | Ninety per cent reattributed to detection in the list      | CAUGHT                        |
| M12 | Police made the executor of all searches                   | CAUGHT                        |
| M13 | The unresolved Dutch tension resolved without evidence     | CAUGHT                        |
| M14 | Redefining what a unit is                                  | CAUGHT                        |
| M15 | A pre-existing inbound link removed                        | CAUGHT                        |
| M16 | Unit equated with profession, inside a misconception claim | **SURVIVED → fixed → CAUGHT** |
| M17 | Detective made a universal rank                            | CAUGHT                        |
| M18 | Em dash re-decoded as latin-1 (Wave 29/30 class)           | CAUGHT                        |

### M1 — a wave-scoped guard on a corpus-wide invariant

The taxonomy guards were scoped to this wave's six pages. M1 collapsed rank into role on
`rank-role-and-specialisation` — the page that _owns_ the distinction — and nothing fired. A
wave-scoped guard on a programme-wide invariant protects the newest pages and leaves the
load-bearing one exposed. Now covers this wave plus the pages whose questions it depends on.

### M4 — one missing inflection

The guard matched `dog handler` and not `dog handling`. The mutation wrote "Dog handling is an entry
route you can apply directly to" into the summary list while the cited paragraph above still carried
the five-year precondition. Contradiction class, defeated by an inflection.

### M16 — and a first fix that was wrong

M16 smuggled a taxonomy collapse into a misconception **claim** — the one field `assertedText`
deliberately excludes, because a claim is a belief being corrected rather than an assertion. That
exclusion is right and it left a hole: a claim nobody corrects is a false statement printed under a
heading promising an answer.

**The first fix was wrong and is recorded as such.** It required a claim and its reality to share
content words. Measured against the corpus, **20 of 30 existing pairs share none** — because a good
correction reframes rather than echoes. "Most police dogs are detection dogs" is answered by "patrol
teams make up ninety per cent of the capability", which is exactly right and shares no vocabulary.
That guard tested prose style, not coherence, and lowering its threshold until it passed would have
made it vacuous.

Replaced with the narrow invariant matching the actual defect: a claim stating one of the equations
this corpus depends on being false must be denied by the reality beside it.

## Findings

### P1 — a structured-data guard that was wrong, caught by the gate

The e2e forbade `Organization` outright and **failed twelve tests**. The site emits it twice for
legitimate reasons: its own publisher identity at site level, and one per cited source for the body
that published the document. Forbidding it would have forbidden the corpus from naming who wrote
what it cites.

Narrowed to the risk actually worth guarding — `GovernmentOrganization`, `PoliceStation`,
`EmergencyService` — because a page about a police function must never be marked up as a police
body. Recorded as P1 because it was committed before the gate caught it; it never reached a push.

### REFUTED — "handling" flagged on the dog page

A safety sweep flagged the token. Reading it: "dog handling is a later assignment rather than an
entry route" — a career statement, not a technique. The sweep's own denial list lacked "rather
than". No change.

### REFUTED — four untraceable quotations

The provenance sweep reported four quotations absent from their source notes. All four verify in
full; the sweep's 200-character cap had truncated them mid-quotation. Same artifact as Wave 29.

## Dimension sweep

| Dimension              | Result                                                                       |
| ---------------------- | ---------------------------------------------------------------------------- |
| Factual accuracy       | 16/16 published claims traced to a read source                               |
| Primary-source quality | Tier 1 only: two police services, one national force, all content-confirmed  |
| Claim/source alignment | Every claim itemised in its note; three `DELIBERATELY UNUSED` clauses        |
| Geographic scope       | 4 systems, all named; jurisdiction checked against source jurisdiction       |
| Taxonomy               | rank ≠ role ≠ profession ≠ unit ≠ assignment, guarded across wave and owners |
| Canonical ownership    | 21 of 62 candidates refused as already owned                                 |
| Contradiction risk     | Categorical claims checked per part, not over the union                      |
| Character integrity    | 0 C1 controls; 0 replacement characters; rendered check per page             |
| Safety                 | Every source contains operational material; none used                        |
| Commercial bias        | No ranking, recommendation, provider or supplier anywhere                    |
| Fabricated data        | Every number in prose traced to a source note                                |
| Accessibility          | Keyboard, headings, 320px, 200% text, all pages                              |
| Performance            | Client JS +0 KB, CSS +0 bytes, no component changed                          |
| Graph                  | 0/0/0 plus six editorial inbound links from pre-existing pages               |

## Validation

| Step                                             | Result                                      |
| ------------------------------------------------ | ------------------------------------------- |
| `npm ci` / `format:check` / `lint` / `typecheck` | exit 0                                      |
| `vitest run`                                     | **9,077 tests / 89 files**                  |
| `next build`                                     | exit 0                                      |
| `verify:output`                                  | **547 routes**, 549 pages, 547 sitemap URLs |
| `route-matrix`                                   | **699 passed, 0 failed**                    |
| `playwright test`                                | **2,164 passed**                            |
| link graph                                       | 0 orphans, 0 weakly linked, 0 dead ends     |

393 sources. 18/18 mutation proofs valid, three caught only after the fixes they forced.
