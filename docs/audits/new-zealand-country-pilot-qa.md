# New Zealand — country-pilot QA

Author: pilot program, Batch C (global diversity), country 1 of 10.
Research date: 2026-07-27. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                                                 | source                                   | verified                  |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------- |
| Unitary common-law state; no sub-national justice competence                                          | Constitution Act 1986; general structure | ✅                        |
| Uncodified constitution; three branches; separation of powers                                         | Constitution Act 1986; Courts of NZ      | ✅                        |
| Judicial independence — removal only on address; salary protected                                     | Constitution Act 1986 ss 23, 24          | ✅ (re-confirmed by hand) |
| Parliamentary sovereignty; declarations of inconsistency (no strike-down)                             | NZ Bill of Rights Act 1990 (context)     | ✅ (described)            |
| Supreme Court = final court of appeal; replaced Privy Council 1 July 2004                             | Ministry of Justice                      | ✅                        |
| Tikanga "the first law of Aotearoa New Zealand"                                                       | Ellis v R [2022] NZSC 114                | ✅ (by attribution)       |
| Law-Officer prosecution (AG + Solicitor-General + Crown Solicitors); police prosecute lesser          | Crown Law Office                         | ✅                        |
| Single national police; Commissioner acts independently of ministers on investigations                | Policing Act 2008 s 16                   | ✅ (re-confirmed by hand) |
| External police-complaints body fully independent (est. 1989)                                         | IPCA                                     | ✅                        |
| Prisons run by the Department of Corrections; 11,255 at 31 Mar 2026; rate 211; capacity 10,633 (2019) | World Prison Brief (ICPR)                | ✅ (re-confirmed by hand) |

## Restricted claim

`nz-prison-population-2026` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2026-03-31'`,
jurisdiction NZ, sourced to `wpb-new-zealand`. Because the only official capacity the source carries
is from 2019, the claim states population + rate and makes **no** current occupancy/density claim; a
test asserts the statement never presents a current occupancy percentage. `validateRestrictedClaim`
passes; stripping `metricPeriod` fails the validator (asserted).

## Honesty checks

- **No fabrication.** Every figure and citation is traceable to a fetched source; ss 23/24, s 16 and
  the World Prison Brief figures re-confirmed by hand. The Solicitor-General's name (a fabrication
  risk) checked out in the workflow.
- **One corrected overstatement dropped.** The research flagged that a "mandatory aggravating factor"
  gang-law claim was wrong (discretionary, and in a different Act); sentencing-policy reforms are not
  institutional structure and are simply not described.
- **Stale-capacity honesty.** 2026 population is not divided by 2019 capacity; no occupancy asserted.
- **Indigenous law by attribution.** Tikanga stated via Ellis v R, as a source within the common law.
- **Access limits named.** legislation.govt.nz WAF-walled (mirrors used); Corrections/Ombudsman/HRC
  sites 403 (secondary reading, flagged).
- **Model discipline.** No new schema.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(NEW_ZEALAND, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/new-zealand` renders the facts date, the demonym ("not a New Zealand government body"),
a macronised Māori court name on the courts page, and the sitemap emits `/countries/new-zealand` and
never `/countries/nz`.
