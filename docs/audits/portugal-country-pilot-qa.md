# Portugal — country-pilot QA

Author: pilot program, Batch B (Central & Southern Europe), country 2 of 6.
Research date: 2026-07-26. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                             | source                                                 | verified |
| --------------------------------------------------------------------------------- | ------------------------------------------------------ | -------- |
| Unitary state; Azores & Madeira autonomous regions                                | Constitution Art. 6                                    | ✅       |
| Justice competences reserved nationally, excluded from regional legislation       | Constitution Arts. 164(1)(u), 165(1)(c)+(p), 227(1)(b) | ✅       |
| Courts independent organs of sovereignty; diffuse review                          | Constitution Arts. 202–204                             | ✅       |
| Categories of courts (STJ, STA, Court of Auditors)                                | Constitution Art. 209                                  | ✅       |
| Dedicated Constitutional Court, 13 judges                                         | Constitution Arts. 221–222                             | ✅       |
| Public Prosecution Service autonomous — "own statute and autonomy"                | Constitution Art. 219                                  | ✅       |
| High Council for the Judiciary                                                    | Constitution Arts. 217–218                             | ✅       |
| Ombudsman (Provedor de Justiça)                                                   | Constitution Art. 23                                   | ✅       |
| Single national organisation per police force                                     | Constitution Art. 272(4)                               | ✅       |
| Three criminal-police bodies (PJ, GNR, PSP); most serious crimes reserved to PJ   | LOIC (Law 49/2008) Arts. 2, 3, 7(2)                    | ✅       |
| Prosecution directs the _inquérito_; investigating judge conducts the _instrução_ | Code of Criminal Procedure Arts. 263, 17               | ✅       |
| Prisons run by a single national DGRSP under the Ministry of Justice              | DGRSP portal                                           | ✅       |
| 12,193 inmates / 12,663 places / density 96.3 at 31 Jan 2024                      | SPACE I 2024, Tables 3 & 16                            | ✅       |

## Restricted claim

`pt-prison-density-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-01-31'`,
jurisdiction PT, sourced to `coe-space-i-2024`, with a limitation stating it is a single-day
snapshot, a national aggregate, under (not over) capacity, and not comparable across countries.
`validateRestrictedClaim` passes; stripping `metricPeriod` fails the validator (asserted).

## Honesty checks

- **No fabrication.** Every figure and citation is traceable to a fetched source.
- **Correction applied.** MP autonomy anchored to Constitution Art. 219, **not** the e-Justice page
  (flagged in adversarial verification). The e-Justice page is cited only for the court hierarchy.
- **Anti-conflation.** A scope callout distinguishes Portugal from Brazil; a test asserts it; no
  Brazilian content appears.
- **Model discipline.** No new schema; the autonomous-prosecution and unitary-for-justice results
  are carried in prose, not by minting levels.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred with reasons,
  no content, no routes.
- **Safety.** law-enforcement and investigations carry safety callouts stating what they do not
  describe; forensics/border deferred rather than half-sourced.

## Uncertainty carried on the page

- Ministerial placement of the police forces stated from general knowledge (organic-law tutelage
  articles not fetched).
- Statutes of the prosecution, courts organisation, Ombudsman and IGAI named but not fully fetched;
  constitutional bases are.
- IGAI's mandate reached through a search rather than a fetched official page.

## Gate

`validateCountryPublication(PORTUGAL, ctx)` — passes. Build + rendered-HTML tests confirm the
`/countries/portugal` page renders the facts date, the correct demonym ("not a Portuguese
government body"), and the sitemap emits `/countries/portugal` and never `/countries/pt`.
