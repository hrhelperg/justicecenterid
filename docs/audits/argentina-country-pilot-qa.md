# Argentina — country-pilot QA

Author: pilot program, Batch C (global diversity), country 8 of 10 — a second federation.
Research date: 2026-07-27. Gate applied: the same publication gate as every prior country. The
adversarial verification pass found **zero corrections**.

## Fact-check ledger

| claim                                                                                             | source                                          | verified                  |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------- |
| Federation; provinces keep undelegated power; each guarantees own justice                         | Constitution Arts. 121, 5                       | ✅ (verbatim)             |
| National codes, applied by federal OR provincial courts "without altering local jurisdictions"    | Constitution Art. 75 inc. 12                    | ✅ (verbatim)             |
| Judicial independence — good behaviour tenure, irreducible pay                                    | Constitution Art. 110                           | ✅ (verbatim)             |
| Supreme Court of the Nation the apex; diffuse review; no constitutional court                     | Constitution Art. 108 + academic                | ✅                        |
| Federal prosecution constitutionally autonomous (fourth organ)                                    | Constitution Art. 120                           | ✅ (verbatim)             |
| Council of the Magistracy selects federal judges + administers judiciary                          | Constitution Art. 114                           | ✅                        |
| Federal accusatory system; prosecution directs the investigation                                  | Federal Code of Criminal Procedure (Law 27.482) | ✅ (two passes)           |
| Four federal forces under the Ministry of Security; provincial police per province                | argentina.gob.ar                                | ✅                        |
| Federal Penitentiary Service transferred to the Ministry of Security                              | Decree 8/2024 (Official Gazette)                | ✅ (two passes)           |
| Ombudsman (Art. 86) vacant since 2009                                                             | Constitution + record                           | ✅                        |
| 133,585 in custody (incl. 12,885 in police lock-ups); rate 284; capacity 98,199; occupancy 122.9% | World Prison Brief (from SNEEP)                 | ✅ (re-confirmed by hand) |

## Model (the federal exercise)

Modelled as a **federal record** (`ar`, level `federal`: `legalSystemScope: 'own'` /
`legislativeCompetence.legal-system: 'exclusive-federal'` — national codes; the other four functions
`shared`) plus **two representative Province records** (`ar-b` Buenos Aires, `ar-x` Córdoba, level
`province`, parent `ar`, four functions `own`). A test asserts the federal-`shared`/province-`own`
split and the `exclusive-federal` legal-system competence; `validateJurisdiction` passes for every
record. No new schema. The unified-national-law point is the schema distinction from Mexico (whose
substantive law is split).

## Restricted claim

`ar-prison-density-2024` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2024-12-31'`,
jurisdiction AR, sourced to `wpb-argentina`. Stated honestly across the source's two bases: a custody
total of 133,585 (with the ~12,885 police-lock-up count named) and a prison-system occupancy of 122.9%
(excluding those lock-ups). `validateRestrictedClaim` passes; stripping `metricPeriod` fails
(asserted).

## Honesty checks

- **No fabrication; zero corrections.** Federalism and prosecution-autonomy articles verbatim; prison
  figures re-confirmed by hand.
- **Vacant body recorded.** The Ombudsman is named as vacant since 2009 — a paper body without an
  incumbent, stated as such.
- **Figure caveat handled.** The custody/occupancy bases differ (with/without police lock-ups); both
  stated as the source presents them.
- **Contested proposal omitted.** A 2026 proposal about the Procurator-General's term is not described
  (proposed, niche).
- **Model discipline.** No new schema.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(ARGENTINA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/argentina` renders the facts date, the demonym ("not an Argentine government body"), and
the sitemap emits `/countries/argentina` and never `/countries/ar`. The Province records produce no
public routes.
