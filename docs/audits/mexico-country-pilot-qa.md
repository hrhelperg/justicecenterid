# Mexico — country-pilot QA

Author: pilot program, Batch C (global diversity), country 7 of 10 — federal + Poland-class
neutrality. Research date: 2026-07-27. Gate applied: the same publication gate as every prior
country, plus a neutrality tripwire test.

## Fact-check ledger

| claim                                                                                      | source                                    | verified                                  |
| ------------------------------------------------------------------------------------------ | ----------------------------------------- | ----------------------------------------- |
| Federation; free and sovereign states + Mexico City; residual powers to states             | Constitution Arts. 40, 124                | ✅ (verbatim)                             |
| All four functions dual (federal + state)                                                  | Constitution Arts. 94, 116, 102-A, 21, 18 | ✅                                        |
| Single national procedural code + sentence execution for both orders                       | Constitution Art. 73-XXI-c                | ✅ (verbatim)                             |
| Accusatory oral process nationwide (2016)                                                  | Constitution Art. 20                      | ✅                                        |
| Supreme Court reduced to 9 Ministers; new discipline/administration bodies                 | Constitution Art. 94                      | ✅ (verbatim)                             |
| Federal prosecution constitutionally autonomous (Fiscalía General)                         | Constitution Art. 102-A                   | ✅ (verbatim)                             |
| Prosecutor directs investigation; police under its command                                 | Constitution Art. 21                      | ✅ (paraphrased from current text)        |
| Guardia Nacional placed under Defence (Sept 2024 gazette)                                  | Constitution Art. 21 / DOF                | ✅                                        |
| CNDH (federal) + state human-rights commissions; non-binding recommendations               | Constitution Art. 102-B                   | ✅ (verbatim)                             |
| ENACTED: judges elected by popular vote (Art. 96), imposed on states (116-III)             | DOF 15 Sept 2024                          | ✅ (verbatim)                             |
| Implemented: first elections 1 Jun 2025; new Supreme Court 1 Sep 2025; second round 2027   | DOF / official record                     | ✅                                        |
| CONTESTED (attributed): IACHR concerns; OAS ~13% turnout, "does not recommend replicating" | IACHR PR 213/2024; OAS EOM 2025           | ✅ (attributed)                           |
| 268,245 / 227,658 / 117.8% at 31 May 2026                                                  | World Prison Brief (ICPR)                 | ✅ (re-confirmed by hand; current values) |

## Model (the federal exercise)

Modelled as a **federal record** (`mx`, level `federal`, all four functions `shared`) plus **two
representative State records** (`mx-jal`, `mx-nle`, level `state`, parent `mx`, all four functions
`own`) — the US/India pattern. A test asserts the federal-`shared`/state-`own` split, and
`validateJurisdiction` passes for every record. No new schema.

## Restricted claim

`mx-prison-density-2026` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2026-05-31'`,
jurisdiction MX, sourced to `wpb-mexico`. Stated as a **national aggregate across the federal and 32
state systems** (117.8%, above capacity, ~43% pre-trial). Current values used (WPB updated since
research). `validateRestrictedClaim` passes; stripping `metricPeriod` fails (asserted).

## Neutrality controls (the load-bearing part)

- **Enacted vs. contested kept distinct.** The reform's facts are stated with the gazette citation
  and dates; the assessments are carried only by dated attribution to the IACHR and the OAS.
- **No site-voice characterisation.** The pages explicitly take no position.
- **Mechanical tripwire.** A test scans all reader-facing Mexico prose and fails on partisan terms
  (power grab, authoritarian, captured, backsliding, party names, court-packing, sham, politicised,
  crisis). Passes with zero matches.

## Honesty checks

- **No fabrication.** Federalism and reform texts verbatim; prison figures re-confirmed by hand.
- **Two corrections applied.** Art. 21 paraphrased (stale-quote fix); Guardia Nacional article-list
  not enumerated (incomplete-list fix).
- **Two currency points named.** WPB figures updated (current used); WPB ministry label stale (not
  used).
- **Model discipline.** No new schema.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(MEXICO, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/mexico` renders the facts date, the demonym ("not a Mexican government body"), and the
sitemap emits `/countries/mexico` and never `/countries/mx`. The State records produce no public
routes.
