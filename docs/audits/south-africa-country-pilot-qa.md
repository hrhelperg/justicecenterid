# South Africa — country-pilot QA

Author: pilot program, Batch C (global diversity), country 9 of 10 — the constitutional-supremacy
exemplar. Research date: 2026-07-27. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                                                | source                                | verified                                 |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------- |
| Constitutional supremacy; inconsistent law is invalid                                                | Constitution ss 1(c), 2               | ✅ (verbatim)                            |
| Courts independent, subject only to the Constitution and law                                         | Constitution s 165                    | ✅ (verbatim)                            |
| Quasi-federal, but courts/prosecution/prisons/criminal law are national                              | Constitution Schedules 4 & 5          | ✅ (verbatim; absent from both)          |
| Courts: Constitutional Court, SCA, High Court, Magistrates' Courts                                   | Constitution s 166                    | ✅ (verbatim)                            |
| Constitutional Court the highest court for all matters (2013 amendment)                              | Constitution s 167(3); 17th Amendment | ✅                                       |
| Single national prosecuting authority; NDPP appointed by the President                               | Constitution s 179                    | ✅ (verbatim)                            |
| Without fear/favour/prejudice; Justice Minister's final responsibility                               | Constitution s 179(4),(6)             | ✅ (verbatim)                            |
| Single national SAPS; Minister sets policy; National Commissioner commands; provinces oversight-only | Constitution ss 205–207               | ✅ (verbatim)                            |
| National Department of Correctional Services runs the prisons                                        | World Prison Brief                    | ✅                                       |
| Chapter 9 institutions (Public Protector, SAHRC); JSC (s 178)                                        | Constitution ss 181, 178              | ✅ (verbatim)                            |
| IPID investigates serious police matters                                                             | IPID Act 1 of 2011                    | ✅                                       |
| Permanent corruption directorate (IDAC) inside the NPA                                               | NPA / Amendment Act 10 of 2024        | ✅ (independence contested → attributed) |
| 168,672 / 107,067 / 157.5% at 26 Feb 2026 (~37% remand)                                              | World Prison Brief (ICPR)             | ✅ (re-confirmed by hand)                |

## Model

One country-level record (`za`, level `country`, all four functions `own`) — **no sub-national
record**. Despite nine provinces, the schedules put all four justice functions in the national
sphere; provinces hold only police oversight. This is the deliberate counter-case to Mexico,
Argentina and India (which earned sub-national records). A test asserts the single record and that
the pages state the provinces' oversight-only role; `validateJurisdiction` passes for every record.

## Restricted claim

`za-prison-density-2026` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2026-02-26'`,
jurisdiction ZA, sourced to `wpb-south-africa`. Same-date population and capacity, so a current
occupancy (157.5%, well above capacity, ~37% remand) is validly stated, with the single-day-snapshot
and not-comparable limitations. `validateRestrictedClaim` passes; stripping `metricPeriod` fails
(asserted).

## Honesty checks

- **No fabrication.** The constitutional articles/schedules and the prison figures are verbatim /
  re-confirmed by hand.
- **Corrections applied.** An unattested nickname for the current National Director dropped; the NPA
  Amendment signing/gazette dates not conflated.
- **Contested item by attribution.** IDAC's independence is a contested question, attributed, not a
  verdict.
- **Unresolved matters omitted.** The 2025–2026 commission of inquiry and the leadership suspensions
  are left out (personnel/inquiry, not structure); an unverified IPID Amendment assent is not asserted.
- **Model discipline.** No new schema; the constitutional-supremacy pole and the quasi-federal-but-
  national modelling live in prose.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(SOUTH_AFRICA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/south-africa` renders the facts date, the demonym ("not a South African government
body"), and the sitemap emits `/countries/south-africa` and never `/countries/za`.
