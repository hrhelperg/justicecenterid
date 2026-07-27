# Indonesia — country-pilot QA

Author: pilot program, Batch C (global diversity), country 5 of 10.
Research date: 2026-07-27. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                             | source                               | verified                                  |
| --------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------- |
| Unitary decentralised state; all justice functions national                       | Constitution Pasal 1(1), 18          | ✅ (verbatim, two passes)                 |
| Judicial power independent                                                        | Constitution Pasal 24(1)             | ✅                                        |
| Two apex courts — Supreme Court (4 environments) + Constitutional Court           | Constitution Pasal 24(2)             | ✅                                        |
| Concentrated review of statutes in the Constitutional Court                       | Constitution Pasal 24C               | ✅                                        |
| Judicial Commission (Komisi Yudisial)                                             | Constitution Pasal 24B               | ✅                                        |
| POLRI is under the President; the Chief is responsible to the President           | Police Law (UU 2/2002) Pasal 8       | ✅ (verbatim, two passes)                 |
| Prosecution within the executive but functionally independent                     | Prosecution Law (UU 11/2021) Pasal 2 | ✅ (verbatim)                             |
| New KUHP (Law 1/2023) + new KUHAP (Law 20/2025) in force 2 Jan 2026               | State Secretariat                    | ✅ (two passes)                           |
| Prisons run by the new Ministry of Immigration and Corrections (Perpres 157/2024) | ministry + Perpres                   | ✅                                        |
| Aceh applies Islamic criminal law via Sharia courts under the national judiciary  | Law 11/2006; Qanun 6/2014            | ✅ (two passes)                           |
| 287,571 / 152,707 / 188.3% at 30 Jun 2026 (severe overcrowding)                   | World Prison Brief (ICPR)            | ✅ (re-confirmed by hand; current values) |
| Oversight: Komnas HAM (1999), Ombudsman (2008), Kompolnas (2005), KPK (2002/2019) | official hosts                       | ✅ (KPK-2019 effect by attribution)       |

## Restricted claim

`id-prison-density-2026` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2026-06-30'`,
jurisdiction ID, sourced to `wpb-indonesia`. Same-date population and capacity, so a current
occupancy (188.3%, severe overcrowding) is validly stated, with the single-day-snapshot and
not-comparable limitations. The World Prison Brief figures had updated since the research pass, so
the current 30 June 2026 values are used. `validateRestrictedClaim` passes; stripping `metricPeriod`
fails (asserted).

## Honesty checks

- **No fabrication.** Load-bearing constitutional/statutory passages confirmed verbatim in two
  passes; the prison figure re-confirmed by hand (and updated to current values).
- **Two currency points named.** The corrections ministry changed in 2024 (so WPB's label is used no
  further), and the WPB figures updated between research and authoring — both handled by using the
  current value and naming the stale one.
- **Aceh in prose.** The Islamic-criminal-law feature is described factually and by attribution,
  within the national judiciary — not modelled as a separate jurisdiction (the Mount Athos treatment).
- **Neutral on the contested KPK change.** The 2019 amendment's effect on KPK independence is
  attributed to its sources, not stated in the site's voice.
- **Honest gaps.** The new-KUHAP investigative mechanics and any KUHP human-rights assessment are not
  asserted (not primary-fetched).
- **Model discipline.** No new schema.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(INDONESIA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/indonesia` renders the facts date, the demonym ("not an Indonesian government body"), and
the sitemap emits `/countries/indonesia` and never `/countries/id`. Aceh produces no route.
