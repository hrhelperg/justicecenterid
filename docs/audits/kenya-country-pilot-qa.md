# Kenya — country-pilot QA

Author: pilot program, Batch C (global diversity), country 9 of 10 — the devolved-unitary
counterpart to South Africa's constitutional-supremacy case. Research date: 2026-07-27. Gate applied:
the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                                    | source                              | verified                         |
| ---------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------- |
| Constitutional supremacy; inconsistent law void                                          | Constitution Art. 2                 | ✅ (verbatim)                    |
| Courts independent, subject only to the Constitution and the law                         | Constitution Art. 160(1)            | ✅ (verbatim)                    |
| Devolved unitary (47 counties) but courts/police/criminal law/corrections national       | Constitution Fourth Schedule Part 1 | ✅ (items 7–8 verbatim)          |
| Counties run none of the four justice functions                                          | Constitution Fourth Schedule Part 2 | ✅ (all 14 items read)           |
| Supreme Court apex (2010); binds all other courts                                        | Constitution Art. 163(1),(7)        | ✅ (verbatim)                    |
| High Court unlimited original + constitutional-review jurisdiction (diffuse review)      | Constitution Art. 165(3)(a),(d)     | ✅ (verbatim)                    |
| Kadhis' courts limited to Muslim personal status where all parties profess Islam         | Constitution Art. 170               | ✅                               |
| DPP independent, not under direction/control of any authority; single 8-year term        | Constitution Art. 157(5),(10)       | ✅ (verbatim)                    |
| DPP may direct the Inspector-General to investigate                                      | Constitution Art. 157(4)            | ✅ (verbatim)                    |
| AG is principal legal adviser; does not conduct criminal prosecutions                    | Constitution Art. 156(4)            | ✅ (verbatim)                    |
| One National Police Service throughout Kenya; two services; IG independent command       | Constitution Art. 243, 245(2)(b)    | ✅ (verbatim)                    |
| Investigation firewall — no one may direct the IG on a particular investigation          | Constitution Art. 245(4)            | ✅ (verbatim; (c) also noted)    |
| Article 59 commissions (KNCHR/NGEC/CAJ); JSC; NPSC                                       | Constitution Art. 59, 171–172, 246  | ✅ (verbatim basis)              |
| IPOA — statutory civilian police oversight                                               | IPOA Act (No. 35 of 2011)           | ⚠️ described; Act not re-fetched |
| 60,740 (avg 2025) / rate 101 / capacity 34,000 (Dec 2023) / occupancy ~176.5% (Dec 2023) | World Prison Brief (ICPR)           | ✅ (re-confirmed by hand)        |

## Model

One country-level record (`ke`, level `country`, all four functions `own`) — **no sub-national
record**. Despite 47 county governments, the Fourth Schedule puts all four justice functions in the
national sphere; the counties run none of them. This is the batch's second decentralised-but-national
case (with South Africa), and the deliberate counterpart to the sub-national federations (Mexico,
Argentina, India). A test asserts the single record; `validateJurisdiction` passes for every record.

## Restricted claim

`ke-prison-density-2025` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2025'`,
jurisdiction KE, sourced to `wpb-kenya`. **Two reference dates** travel with the figures: the
population (60,740) is a 2025 annual average, while the capacity (34,000) and occupancy (~176.5%) are
December 2023. The claim reports the source's dated figures faithfully and explicitly declines to
compute a fresh occupancy by mixing the 2025 population against the 2023 capacity.
`validateRestrictedClaim` passes; stripping `metricPeriod` fails (asserted).

## Honesty checks

- **No fabrication.** The constitutional articles and the Fourth Schedule are verbatim; the prison
  figures re-confirmed by hand, with the dual date kept distinct and the rate's UN population base
  correctly attributed.
- **Corrections applied.** Prison-stat provenance split (KNBS total vs UN population base); the two
  reference dates not conflated; Art. 245(4)(c) acknowledged so (a)/(b) is not presented as exhaustive.
- **Contested/current-events matter omitted.** The 2022 BBI litigation, the 2023 police-reform
  taskforce, pending proposals, and the 2024 protests and their policing are left out (contested,
  unresolved or non-structural).
- **Office-holders omitted.** No current Inspector-General, DPP or Commissioner-General named; one
  reported surname spelling could not be resolved against an official source.
- **Statutory basis flagged.** IPOA and the Article 59 commissions are described at the level of the
  body and function; their exact Acts were not re-fetched line by line — recorded in uncertainty.
- **Model discipline.** No new schema; devolution-without-devolved-justice, the DPP's investigative
  trigger, the diffuse review, and the Kadhis' courts live in prose.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(KENYA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/kenya` renders the facts date, the demonym ("not a Kenyan government body"), and the
sitemap emits `/countries/kenya` and never `/countries/ke`.
