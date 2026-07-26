# Austria — country-pilot QA

Author: pilot program, Batch B (Central & Southern Europe), country 3 of 6.
Research date: 2026-07-26. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                               | source                                        | verified                |
| ----------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------- |
| Federation of nine Länder; justice functions all federal                            | B-VG Art. 10(1) Z 6+Z 7                       | ✅                      |
| Ordinary jurisdiction emanates from the Federation                                  | B-VG Art. 82(1)                               | ✅ (re-fetched by hand) |
| Judges independent                                                                  | B-VG Art. 87(1)                               | ✅                      |
| OGH = highest instance in civil/criminal                                            | B-VG Art. 92(1)                               | ✅                      |
| Three co-equal apex courts (OGH/VfGH/VwGH), none superior                           | OGH official site; Arts. 133, 144             | ✅ (re-fetched by hand) |
| Each Land organises its own administrative court (2014 reform)                      | B-VG Arts. 129, 10(1) Z 1                     | ✅                      |
| Prosecutors are organs of the ordinary judiciary, instruction-bound                 | B-VG Art. 90a                                 | ✅ (re-fetched by hand) |
| Prosecution subordinate up to the Federal Minister of Justice                       | StAG §2(1)                                    | ✅ (re-fetched by hand) |
| Prosecutor leads the investigation; criminal police obey                            | StPO §101(1), §99(1)                          | ✅                      |
| Single national police under the Interior Minister; nine federal directorates       | B-VG Arts. 78a(1), 78b(1); BMI                | ✅                      |
| Prisons run federally by the Ministry of Justice (Justizanstalten)                  | BMJ Strafvollzug                              | ✅                      |
| Volksanwaltschaft = constitutional ombudsman + NPM                                  | B-VG Art. 148a; Volksanwaltschaft             | ✅                      |
| 2026 reform to an independent federal prosecution — consultation draft, not enacted | oesterreich.gv.at consultation portal         | ✅                      |
| 9,258 inmates / rate 101.1 per 100k at 31 Jan 2024; NO capacity reported            | SPACE I 2024, Table 3 (Table 16 blank for AT) | ✅                      |

## Restricted claim

`at-prison-population-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-01-31'`,
jurisdiction AT, sourced to `coe-space-i-2024`. Because SPACE I reported no capacity for Austria, the
statement gives the population and rate and makes **no** density/occupancy claim; the limitation says
so, and a test asserts the statement never claims over/under capacity. `validateRestrictedClaim`
passes; stripping `metricPeriod` fails the validator (asserted).

## Honesty checks

- **No fabrication.** Every figure and citation is traceable to a fetched source; four load-bearing
  passages were re-fetched by hand at authoring time.
- **Incomplete-source honesty.** No capacity data → no density claimed. Reported exactly what the
  source supports.
- **Neutral reform handling.** The 2026 prosecution reform is a consultation draft, not enacted;
  described in prose with attribution, never as current law or a scheduled change.
- **Model discipline.** No new schema; Austria reuses the Belgium `federal`/`exclusive-federal`
  model and the multi-apex-court prose pattern.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred with reasons,
  no content, no routes.
- **Safety.** law-enforcement and investigations carry safety callouts; forensics/border deferred
  rather than half-sourced.

## Uncertainty carried on the page

- No Southern-European-style judicial council; described rather than asserted from one source.
- No dedicated independent police-complaints authority confirmed from a fetched source.
- Weisungsrat / StAG §29a noted in general terms, not quoted this pass; WKStA not described.

## Gate

`validateCountryPublication(AUSTRIA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/austria` renders the facts date, the correct demonym ("not an Austrian government
body"), and the sitemap emits `/countries/austria` and never `/countries/at`.
