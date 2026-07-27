# Nigeria — country-pilot QA

Author: pilot program, Batch C (global diversity), country 10 of 10 — the inverse federation.
Research date: 2026-07-27. Gate applied: the same publication gate as every prior country.

## Fact-check ledger

| claim                                                                                         | source                                   | verified                                    |
| --------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| Federation; legislative power split Exclusive/Concurrent/residual (states get residual)       | Constitution s 4, Second Schedule        | ✅ (s 4(7) verbatim)                        |
| Police federal — single Nigeria Police Force; no other force                                  | Constitution s 214(1), Exclusive item 45 | ✅ (verbatim)                               |
| Prisons federal                                                                               | Constitution Exclusive List item 48      | ✅ (verbatim "48. Prisons")                 |
| Courts at both levels — federal + state superior courts of record                             | Constitution s 6(5)                      | ✅ (verbatim)                               |
| Supreme Court apex; determinations final                                                      | Constitution s 230, 235                  | ✅ (s 235 verbatim)                         |
| Diffuse review; no separate constitutional court                                              | Constitution (structure)                 | ✅                                          |
| Prosecution dual — AGF a Minister (s 150/174); State AGs mirror (s 195/211)                   | Constitution s 150, 174, 195, 211        | ✅ (verbatim)                               |
| IGP command; President's lawful directions; s 215(5) non-justiciability of directions         | Constitution s 215                       | ✅ (s 215(3),(5) verbatim)                  |
| Criminal law residual/state — Criminal Code (south), Penal Code (north)                       | Constitution s 4(7)                      | ✅                                          |
| Twelve northern states adopted Sharia penal codes, 1999–2001                                  | Human Rights Watch (2004)                | ✅ (attributed; "twelve states" verbatim)   |
| State Police Bill passed both chambers; awaits ≥24 state ratifications + assent; not law      | NALTF (26 Jun 2026)                      | ✅ (attributed; ratification line verbatim) |
| NJC (unifies judiciary); NHRC; PCC (ombudsman); PSC + Police Council (split police oversight) | Constitution s 153, Third Schedule       | ✅ (constitutional bodies); PCC hedged      |
| 81,902 (22.6.2026) / rate 34 / capacity 65,035 / occupancy 125.6% (30.6.2025)                 | World Prison Brief (ICPR)                | ✅ (re-confirmed by hand)                   |

## Model

A **federal record (`ng`) + two illustrative state records (`ng-kn` Kano, `ng-la` Lagos)**. The
federal record has policing and corrections `own` (federal), and courts, prosecution and
legal-system `shared`; each state has courts, prosecution and legal-system `own` but policing and
corrections `none` — the **inverse** of India/Mexico/Argentina, where the sub-national tier also runs
police and prisons. Each state declares `legislativeCompetence` (federal-parent rule), with
`policing`/`corrections` = `exclusive-federal`. States carry `coverage: 'in-research'` and produce no
public routes. A test asserts the exact record set and scopes; `validateJurisdiction` passes for
every record.

## Restricted claim

`ng-prison-density-2026` — detention-capacity, `claimType: 'fact'`, `metricPeriod: '2026-06-22'`,
jurisdiction NG, sourced to `wpb-nigeria`. **Two reference dates** kept distinct: population (81,902)
is 22 June 2026, capacity (65,035) and occupancy (125.6%) are 30 June 2025. The claim states the
low rate (~34/100,000) explicitly as _not_ a claim about conditions, and notes the system was above
capacity on the 2025 date. `validateRestrictedClaim` passes; stripping `metricPeriod` fails.

## Honesty checks

- **No fabrication.** Every load-bearing constitutional quote, the tier allocation, the prison figures
  and the twelve-state Sharia list confirmed verbatim in an adversarial pass.
- **Neutrality (tripwire-sensitive).** The Sharia penal codes and the state-police bill are stated by
  dated attribution (HRW 2004; NALTF 26 Jun 2026); the "safeguards sufficient" / "risk of abuse"
  debate is attributed to both sides, not adjudicated; HRW's own human-rights assessments are not
  adopted as the site's view. No editorializing.
- **Pending reform, not a ScheduledChange.** The state-police bill is not enacted with an effective
  date, so it is recorded in prose as pending — not as a `ScheduledChange` (which only admits
  enacted-with-date items as pending).
- **Corrections applied.** NCoS Act dated only to "August 2019"; NHRC amendment described without
  over-precise dating; two prison dates not conflated.
- **Hedged/omitted.** EFCC/ICPC/ACJA/NCoS statutes and the PCC statute named from secondary sources;
  itemized expanded Police Council membership not asserted; current office-holders not named.
- **Model discipline.** No new schema; the inverse split lives in the record scopes, the Sharia
  variant and pending reform in prose.
- **Deferrals honest.** forensics, border-and-customs, history, timeline — deferred, no routes.

## Gate

`validateCountryPublication(NIGERIA, ctx)` — passes. Build + rendered-HTML tests confirm
`/countries/nigeria` renders the facts date, the demonym ("not a Nigerian government body"), and the
sitemap emits `/countries/nigeria` and never `/countries/ng`, `/countries/nigeria/kano` or
`/countries/nigeria/lagos`.
