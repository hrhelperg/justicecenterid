# South Korea — country-pilot QA

Author: pilot program, Batch C (global diversity), country 2 of 10.
Research date: 2026-07-27. Gate applied: the same publication gate as every prior country, plus the
scheduled-change validator.

## Fact-check ledger

| claim                                                                                            | source                                      | verified                                |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------- | --------------------------------------- |
| Unitary state; local self-government not over justice                                            | Constitution Arts. 3, 117–118               | ✅                                      |
| Judicial independence; tenure protected                                                          | Constitution Arts. 101, 103, 106            | ✅                                      |
| Concentrated review — courts refer to the Constitutional Court                                   | Constitution Art. 107                       | ✅                                      |
| Constitutional Court separate; 9 adjudicators; exclusive constitutional jurisdiction             | Constitution Arts. 111–113; FJC             | ✅                                      |
| Three-tier ordinary courts; Supreme Court, 14 Justices                                           | U.S. Federal Judicial Center                | ✅                                      |
| Prosecution under the executive; Prosecutor General directs; 1/6/18/42 structure                 | Supreme Prosecutors' Office                 | ✅                                      |
| 2020–2021 reform moved most investigation to the police (National Investigation HQ, 2021)        | reform reporting (secondary)                | ⚠ secondary, flagged                    |
| Enacted 2025 restructuring: SPO abolished 1 Oct 2026; split MOIS/MOJ                             | Korea Herald (Cabinet approval 30 Sep 2025) | ✅ (by attribution)                     |
| KNPA single national force under the Ministry of the Interior and Safety                         | secondary reading                           | ⚠ secondary, flagged                    |
| Prisons run by the Korea Correctional Service under MoJ; 65,279 / 50,614 / 129.0% at 29 Jan 2026 | World Prison Brief (ICPR)                   | ✅ (re-confirmed by hand)               |
| NHRCK (2001), ACRC (2008), CIO (2021); court admin via NCA under the Supreme Court               | FJC (court admin); rest secondary           | ⚠ commissions secondary; court admin ✅ |

## Restricted claim

`kr-prison-density-2026` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2026-01-29'`,
jurisdiction KR, sourced to `wpb-south-korea`. Population and capacity carry the same date, so a
current occupancy (129.0%, above capacity) is validly stated, with the single-day-snapshot and
not-comparable limitations. `validateRestrictedClaim` passes; stripping `metricPeriod` fails
(asserted).

## Scheduled change

`kr-prosecution-restructuring-2026` — `changeType: 'reorganization'`, `certainty:
'enacted-with-date'`, `status: 'pending'`, `effectiveOn: '2026-10-02'`, `enactedOn: '2025-10-01'`,
sourced to `kr-koreaherald-prosecution-2025`. Passes `validateScheduledChange` (future effective
date, enacted-with-date certainty, ≥1 source, affected entities named). The first non-European and
first genuinely `pending` scheduled change since the foundation pilots. Recorded in prose too (the
model has no render path), neutrally and by attribution.

## Honesty checks

- **No fabrication.** Fetched-source facts (constitution, courts, prosecution structure, WPB) all
  re-confirmed; the Prosecutor General's role and the WPB figures re-checked by hand.
- **Neutrality on the reform.** Enacted facts + dates; pro-reform rationale and constitutionality
  controversy attributed to their sources; enacted-but-not-yet-effective kept distinct.
- **Secondary sourcing named.** The KNPA ministry, the 2020–2021 rebalance, and the human-rights/
  anti-corruption bodies rest on secondary reading and say so; only the court-administration point
  in oversight is from a fetched source.
- **Over-capacity handled honestly.** Same-date population and capacity, so occupancy is stated.
- **Model discipline.** No new jurisdiction schema; the scheduled change reuses the existing shape.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(SOUTH_KOREA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/south-korea` renders the facts date, the demonym ("not a South Korean government body"),
a Hangul court name on the courts page, and the sitemap emits `/countries/south-korea` and never
`/countries/kr`.
