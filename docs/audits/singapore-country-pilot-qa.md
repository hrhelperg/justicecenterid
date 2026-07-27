# Singapore — country-pilot QA

Author: pilot program, Batch C (global diversity), country 3 of 10.
Research date: 2026-07-27. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                                                              | source                             | verified                            |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ----------------------------------- |
| Unitary city-state; single Supreme Court; no sub-national tier                                                     | Constitution Art. 93               | ✅                                  |
| Supreme Court = Court of Appeal + High Court (Appellate + General Divisions)                                       | Constitution Art. 94               | ✅ (re-confirmed by hand)           |
| Judicial tenure; removal only via a tribunal of Supreme Court judges                                               | Constitution Art. 98               | ✅ (re-confirmed by hand)           |
| Attorney-General advises the Government (35(7)) and is the Public Prosecutor (35(8))                               | Constitution Art. 35               | ✅ (35(8) re-confirmed by hand)     |
| "The Attorney-General is the Public Prosecutor and has the control and direction of criminal prosecutions"         | Criminal Procedure Code s 11       | ✅                                  |
| AGC evaluates law-enforcement evidence and prosecutes; PP controls all criminal proceedings                        | Attorney-General's Chambers        | ✅                                  |
| Court of Appeal final; State Courts handle >80% overall / >90% criminal caseload                                   | Judiciary                          | ✅ (corrected from a misquote)      |
| Single national police (SPF) under the Ministry of Home Affairs                                                    | Singapore Police Force             | ✅                                  |
| Prisons run by the Singapore Prison Service under the MHA; 10,792 at 31 Dec 2024; rate 178; capacity 16,249 (2013) | World Prison Brief (ICPR)          | ✅ (re-confirmed by hand)           |
| No general ombudsman / no NHRI / no independent police-complaints body; CPIB in the PMO                            | recorded negatives; CPIB secondary | ⚠ absences are researched negatives |

## Restricted claim

`sg-prison-population-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-12-31'`,
jurisdiction SG, sourced to `wpb-singapore`. Because the only official capacity the source carries is
from 2013, the claim states population + rate and makes **no** current occupancy/density claim; a
test asserts the statement never presents a current occupancy percentage. `validateRestrictedClaim`
passes; stripping `metricPeriod` fails (asserted).

## Honesty checks

- **No fabrication.** Fetched-source facts (constitution, CPC, courts, police, WPB) re-confirmed; the
  key articles and the WPB figures re-checked by hand. The sitting Attorney-General's name (a
  fabrication risk) is deliberately not asserted.
- **One correction applied.** The "90% of all cases" State Courts figure was a misquote; replaced
  with the Judiciary's own wording.
- **Absences recorded, not implied.** No general ombudsman / no NHRI / no independent
  police-complaints body — stated as researched negatives; the unverifiable 2026 UPR back-and-forth
  is excluded.
- **Stale-capacity honesty.** 2024 population not divided by 2013 capacity; no occupancy asserted.
- **Model discipline.** No new schema.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(SINGAPORE, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/singapore` renders the facts date, the demonym ("not a Singaporean government body"), and
the sitemap emits `/countries/singapore` and never `/countries/sg`.
