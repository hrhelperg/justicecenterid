# Poland — country-pilot QA

Author: pilot program, Batch B (Central & Southern Europe), country 5 of 6 — the honesty-critical
case. Research date: 2026-07-26. Gate applied: the same publication gate as every prior country,
plus a neutrality tripwire test.

## Fact-check ledger

| claim                                                                                  | source                                          | verified                  |
| -------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------- |
| Unitary state; justice functions all national                                          | Constitution Art. 3, 175                        | ✅                        |
| Courts a separate, independent power; judges appointed on KRS motion                   | Constitution Arts. 173, 178–179                 | ✅                        |
| Supreme Court supervises common/military courts                                        | Constitution Art. 183                           | ✅                        |
| Separate supreme administrative court (NSA / "Chief Administrative Court")             | Constitution Art. 184                           | ✅                        |
| Separate Constitutional Tribunal; judgments universally binding and final              | Constitution Arts. 188, 190                     | ✅                        |
| Prosecution has no dedicated constitutional basis; statutory (2016)                    | Constitution; Law on the Prosecutor's Office    | ✅                        |
| Prosecutor-General held by the Minister of Justice (personal union)                    | Law on the Prosecutor's Office, Art. 1 § 2      | ✅ (re-confirmed by hand) |
| Single national police under the Interior Minister; Chief Commissioner                 | Law on the Police, Arts. 1(1), 5(1)             | ✅ (re-confirmed by hand) |
| Prosecutor directs pre-trial; śledztwo by prosecutor, dochodzenie by police            | Code of Criminal Procedure, Arts. 298, 311, 326 | ✅                        |
| Prison Service subordinate to the Minister of Justice                                  | Law on the Prison Service, Art. 1               | ✅ (re-confirmed by hand) |
| Ombudsman (Commissioner for Citizens' Rights); KRS role & composition                  | Constitution Arts. 208–210, 186–187             | ✅                        |
| ENACTED: 2017 amendment — Sejm elects the 15 judicial KRS members                      | Law of 8 Dec 2017 (Dz.U. 2018 poz. 3), Art. 9a  | ✅ (re-confirmed by hand) |
| CONTESTED (attributed): CJEU held Poland failed Art. 19(1) TEU re Disciplinary Chamber | CJEU C-204/21, 5 June 2023 (FRA reference)      | ✅                        |
| PROPOSED (attributed): PG–MoJ separation "yet to be adopted"; laws referred to CT      | EC 2025 Rule of Law Report, 8 July 2025         | ✅                        |
| 73,822 inmates / 86,109 places / density 85.7 at 31 Jan 2024                           | SPACE I 2024, Tables 3 & 16                     | ✅                        |

## Restricted claim

`pl-prison-density-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-01-31'`,
jurisdiction PL, sourced to `coe-space-i-2024`, limitation states single-day snapshot, national
aggregate, under capacity, not comparable across countries. The high per-100k rate is deliberately
withheld; a test asserts the statement carries no "per 100,000 / highest / compared" phrasing.
`validateRestrictedClaim` passes; stripping `metricPeriod` fails the validator (asserted).

## Neutrality controls (the load-bearing part for Poland)

- **Enacted vs. contested kept distinct.** Enacted measures (2016 PG–MoJ union; 2017 KRS change)
  stated as facts with statutory citations; contested assessments (CJEU, Commission) carried only by
  dated attribution; proposed measures labelled as proposed.
- **No site-voice characterisation.** The pages explicitly state they take no position.
- **Mechanical tripwire.** A test scans all reader-facing Poland prose and fails on partisan or
  characterising terms (captured, backsliding, authoritarian, party names, illiberal, politicised,
  purge, crisis, assault-on, court-packing). Passes with zero matches.
- **News-media developments excluded.** Only dated official/EU sources are load-bearing.

## Honesty checks

- **No fabrication.** Every figure and citation is traceable to a fetched source; four Polish
  statutory passages re-confirmed by hand.
- **Honest naming.** NSA shown in both renderings (official-translation "Chief Administrative Court"
  - conventional "Supreme Administrative Court").
- **Honest gaps.** Common-court tier names not asserted; no dedicated police-complaints body claimed.
- **Model discipline.** No new schema.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred with reasons, no
  content, no routes.

## Gate

`validateCountryPublication(POLAND, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/poland` renders the facts date, the correct demonym ("not a Polish government body"),
and the sitemap emits `/countries/poland` and never `/countries/pl`.
