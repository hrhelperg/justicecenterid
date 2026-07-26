# Czechia — country-pilot QA

Author: pilot program, Batch B (Central & Southern Europe), country 4 of 6.
Research date: 2026-07-26. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                                     | source                                 | verified |
| ----------------------------------------------------------------------------------------- | -------------------------------------- | -------- |
| Unitary state; justice functions all national                                             | Constitution 1993; e-Justice           | ✅       |
| Judicial power exercised by independent courts; only a court decides guilt                | Constitution Arts. 81, 90              | ✅       |
| Court system = Supreme Court, Supreme Administrative Court, high/regional/district        | Constitution Art. 91(1)                | ✅       |
| Supreme Court is highest, save Constitutional / Supreme Administrative Court              | Constitution Art. 92                   | ✅       |
| Separate Constitutional Court, 15 Justices, 10-year terms                                 | Constitution Arts. 83–84; e-Justice    | ✅       |
| Prosecution in executive power; "part of the Ministry of Justice"; Act 283/1993           | Constitution Art. 80; prosecution site | ✅       |
| Prosecutor General's Office (Brno) apex of a hierarchical service                         | prosecution site                       | ✅       |
| 2024 reform: adopted 7 Mar 2024, in force 1 Jul 2024; 7-yr non-renewable PG term          | EC 2024 Rule of Law Report             | ✅       |
| Police = single national force under the Interior Ministry; Act 273/2008; 14 directorates | police site                            | ✅       |
| Prisons = Vězeňská služba under the Ministry of Justice; Act 555/1992; Judicial Guard     | prison-service site                    | ✅       |
| Ombudsman (Public Defender of Rights) remit incl. inspections of detention                | ombudsman site                         | ✅       |
| GIBS investigates crimes by police/prison/customs officers; Act 341/2011                  | GIBS site                              | ✅       |
| No national judicial council; ministerial court administration; advisory councils only    | e-Justice                              | ✅       |
| 19,569 inmates / 20,301 places / density 96.4 at 31 Jan 2024                              | SPACE I 2024, Tables 3 & 16            | ✅       |

## Restricted claim

`cz-prison-density-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-01-31'`,
jurisdiction CZ, sourced to `coe-space-i-2024`, with a limitation stating it is a single-day
snapshot, a national aggregate, under (not over) capacity, and not comparable across countries.
`validateRestrictedClaim` passes; stripping `metricPeriod` fails the validator (asserted).

## Honesty checks

- **No fabrication.** Every figure and citation is traceable to a fetched source.
- **One flagged limit, honoured.** The exact Criminal Procedure Code section for pre-trial
  prosecutorial supervision was not fetched from primary text; the investigations page anchors the
  role to the Constitution and the prosecution's account and asserts no section number.
- **Neutral reform handling.** The 2024 prosecution reform is stated as enacted law with its dates,
  attributed to the Commission — not characterised beyond the source.
- **Absence recorded honestly.** No national judicial council; the pages say so explicitly and a
  test asserts it.
- **Model discipline.** No new schema; reuses unitary/national values and the multi-apex prose
  pattern.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred with reasons,
  no content, no routes.
- **Safety.** law-enforcement and investigations carry safety callouts; forensics/border deferred.

## Uncertainty carried on the page

- Exact CPC section for prosecutorial pre-trial supervision not fetched from primary text.
- Police Act (273/2008) and Prison Service Act (555/1992) named from the institutions' own
  references; primary statutes not separately fetched.

## Gate

`validateCountryPublication(CZECHIA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/czechia` renders the facts date, the correct demonym ("not a Czech government body"),
and the sitemap emits `/countries/czechia` and never `/countries/cz`.
