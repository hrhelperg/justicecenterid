# India — country-pilot QA

Author: pilot program, Batch C (global diversity), country 4 of 10 — the flagship federal case.
Research date: 2026-07-27. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                                   | source                         | verified                  |
| --------------------------------------------------------------------------------------- | ------------------------------ | ------------------------- |
| Federation; Seventh Schedule divides power (Union/State/Concurrent lists)               | Constitution Art. 246          | ✅ (verbatim)             |
| Police (Entry 2), Public order (Entry 1), Prisons (Entry 4) = exclusive State subjects  | Constitution, State List       | ✅ (verbatim)             |
| Criminal law/procedure (Entries 1,2), subordinate courts (Entry 11A) = Concurrent       | Constitution, Concurrent List  | ✅ (verbatim)             |
| Separation of judiciary from executive                                                  | Constitution Art. 50           | ✅                        |
| Supreme Court of India; its law binds all courts                                        | Constitution Arts. 124, 141    | ✅ (verbatim)             |
| A High Court for each State; HC controls subordinate courts                             | Constitution Arts. 214, 235    | ✅ (verbatim)             |
| BNS/BNSS/BSA notified 25 Dec 2023, in force 1 July 2024, replaced IPC/CrPC/Evidence Act | Press Information Bureau       | ✅ (verbatim)             |
| Prisons administered by State/UT governments; 511,542 / 453,769 / 112.7% at 31 Dec 2024 | World Prison Brief (from NCRB) | ✅ (re-confirmed by hand) |
| Directorate of Prosecution (State, BNSS s. 20); police investigation (BNSS s. 175)      | secondary                      | ⚠ secondary, flagged      |
| CBI (DSPE Act 1946), NIA (NIA Act 2008); NHRC (1993); collegium; Prakash Singh (2006)   | secondary                      | ⚠ secondary, flagged      |

## Model (the federal exercise)

Modelled as a **Union record** (`in`, level `federal`: `courtScope: 'own'` for the integrated
judiciary, `policingScope`/`prosecutionScope` `shared`, `correctionalScope: 'none'` — no Union
prisons; `legislativeCompetence` marks policing and corrections `exclusive-subnational`) plus **three
illustrative State records** (`in-mh`, `in-tn`, `in-up`, level `state`, parent `in`): each `own`s
police, prosecution and prisons, with `courtScope: 'shared'` (integrated judiciary — subordinate
courts administered under a national High Court). A test asserts the Union/State scope split, and
`validateJurisdiction` passes for every record. No new schema — reuse of the Germany/US pattern.

## Restricted claim

`in-prison-density-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-12-31'`,
jurisdiction IN, sourced to `wpb-india`. Stated as a **national aggregate across separately
administered State/UT systems** (occupancy 112.7%, above capacity), with the aggregate and
not-comparable limitations. `validateRestrictedClaim` passes; stripping `metricPeriod` fails
(asserted).

## Honesty checks

- **No fabrication.** The federalism tier allocation — the load-bearing point — is verbatim from the
  primary constitutional text; the codes and the prison figures are primary/re-confirmed by hand.
- **Primary vs secondary stated plainly.** The CBI/NIA/BNSS/NHRC/collegium/Prakash Singh detail is
  described from reputable secondary sources and flagged; the Constitution and PIB are primary.
- **Aggregate honesty.** The prison figure is explicitly a State-aggregated national total.
- **Neutral omission.** A decided (Feb 2026) challenge to a BNSS prosecution provision was left out
  as not load-bearing rather than described half-sourced.
- **Model discipline.** No new schema; reuse of the federal/state pattern.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(INDIA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/india` renders the facts date, the demonym ("not an Indian government body"), and the
sitemap emits `/countries/india` and never `/countries/in`. The State records produce no public
routes (jurisdiction records, not pages).
