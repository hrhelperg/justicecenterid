# Greece — country-pilot QA

Author: pilot program, Batch B (Central & Southern Europe), country 6 of 6 (final).
Research date: 2026-07-26. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                              | source                                   | verified                   |
| ---------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------- |
| Unitary, decentralised state; justice functions all national                       | Constitution Arts. 26, 101–102           | ✅                         |
| Judges independent, life-appointed by presidential decree                          | Constitution Arts. 87, 88                | ✅                         |
| Three co-equal supreme courts (Areios Pagos, Council of State, Court of Audit)     | e-Justice; Constitution Arts. 95, 98     | ✅                         |
| Court of Audit not subject to the Council of State (co-equal apex)                 | Constitution Art. 98§3                   | ✅                         |
| Diffuse review — courts must not apply unconstitutional statutes                   | Constitution Art. 93§4                   | ✅ (re-confirmed by hand)  |
| No dedicated constitutional court; Special Highest Court resolves conflicts        | Constitution Art. 100; e-Justice         | ✅                         |
| Prosecution in the "judicial branch"; operational and personal independence        | e-Justice; Constitution Arts. 87–88      | ✅                         |
| Ministry of Justice sets only prosecutors' general service conditions              | e-Justice                                | ✅                         |
| Prosecutor directs/supervises investigations; examining magistrate for felonies    | e-Justice; Constitution Art. 6           | ✅                         |
| Hellenic Police = single national force under the Ministry of Citizen Protection   | U.S. State Dept 2022                     | ✅ (foreign-gov secondary) |
| Prisons under the Ministry of Citizen Protection via the Anti-crime Secretariat    | U.S. State Dept 2022                     | ✅ (foreign-gov secondary) |
| Ombudsman (Synígoros tou Políti) constitutional, runs the NPM                      | Constitution Art. 103§9; U.S. State Dept | ✅                         |
| Mount Athos self-governed; State exclusively responsible for public order/security | Constitution Art. 105                    | ✅ (re-confirmed by hand)  |
| 10,203 inmates / 10,775 places / density 94.7 at 31 Jan 2024                       | SPACE I 2024, Tables 3 & 16              | ✅                         |

## Restricted claim

`gr-prison-density-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-01-31'`,
jurisdiction GR, sourced to `coe-space-i-2024`, limitation states single-day snapshot, national
aggregate, under capacity, not comparable across countries. `validateRestrictedClaim` passes;
stripping `metricPeriod` fails the validator (asserted).

## Honesty checks (sourcing friction handled openly)

- **No fabrication.** Every figure and citation is traceable to a fetched source; Arts. 93§4 & 105
  re-confirmed by hand.
- **Unofficial-translation flag.** The Constitution is quoted from the Constitute translation
  (Parliament's official EN PDF was HTTP 403), cross-checked against e-Justice, and labelled
  unofficial on the page.
- **Foreign-government-secondary flag.** The police/prisons ministry placement is taken from the
  U.S. State Department report because the Greek official sites were HTTP 403; the source is named
  openly and the facts stated no more firmly than it supports.
- **Honest gaps.** CPC article numbers and the corrections-transfer instrument not asserted;
  no external police-complaints body claimed.
- **Mount Athos** described in prose, not modelled as a region record.
- **Model discipline.** No new schema.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred with reasons, no
  content, no routes (forensics/border additionally constrained by bot-walled Greek sites).
- **Greek script** given with transliteration and English throughout; a rendered-HTML test asserts
  the Greek-script court names survive to the page.

## Gate

`validateCountryPublication(GREECE, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/greece` renders the facts date, the correct demonym ("not a Greek government body"),
the Greek-script court names on the courts page, and the sitemap emits `/countries/greece` and never
`/countries/gr`.
