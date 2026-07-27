# Argentina — source register

Research date: **2026-07-27**. Every source below was confirmed on that date and independently
re-checked in an adversarial verification pass that **found zero corrections**. The federalism
articles and the autonomy of the prosecution were confirmed verbatim, and the World Prison Brief
figures re-confirmed by hand. Spanish is the authoritative language.

| id                | what it is                                                            | how accessed                         | supports                                                                                                                                                                                                                                                          | scope limit                                                                |
| ----------------- | --------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `ar-constitution` | Constitution of the Argentine Nation (1853, reformed 1994)            | Georgetown PDBA text, verbatim       | Art. 5 (provinces guarantee own justice); 75 inc. 12 (national codes, applied by federal OR provincial courts); 108 (Supreme Court); 110 (independence); 114 (Council of the Magistracy); 120 (autonomous Public Ministry); 121 (reserved powers); 86 (Ombudsman) | a constitutional text; the load-bearing federalism + prosecution facts     |
| `ar-forces`       | Federal security forces (Ministry of Security)                        | argentina.gob.ar, read directly      | the four federal forces (PFA, GNA, PNA, PSA) under the national Ministry of Security                                                                                                                                                                              | the federal police tier; provincial forces not detailed                    |
| `ar-cppf`         | Federal Code of Criminal Procedure (accusatory; Law 27.482)           | MPF / InfoLEG, two-pass confirmed    | the federal accusatory system: the prosecution directs the investigation, police as auxiliaries; phased rollout                                                                                                                                                   | the federal process; provincial codes vary                                 |
| `ar-spf-decreto`  | Decree 8/2024 — Federal Penitentiary Service → Ministry of Security   | Official Gazette, two-pass confirmed | the transfer of the federal prison service to the Ministry of Security (both federal police and prisons now there)                                                                                                                                                | the federal prison service's ministry                                      |
| `wpb-argentina`   | World Prison Brief — Argentina (ICPR, from Ministry of Justice SNEEP) | read directly, re-confirmed by hand  | 133,585 in custody at 31 Dec 2024 (incl. 12,885 in police lock-ups); rate 284; capacity 98,199; occupancy 122.9%                                                                                                                                                  | prison figures; the custody/occupancy bases differ (with/without lock-ups) |

## One figure caveat (handled honestly)

The World Prison Brief's **custody total (133,585)** includes about **12,885 people held in police
lock-ups (comisarías)**, while its **occupancy figure (122.9%)** and **capacity (98,199)** exclude
them. So the total and the occupancy are on slightly different bases. The restricted claim states the
custody total _with_ the lock-up count called out, and the occupancy as the prison system's own — the
way the source presents them.

## Model note

Argentina is a textbook federation needing **sub-national records**: substantive law is national
(Art. 75 inc. 12) but courts, prosecution, police and prisons for ordinary crime are provincial
(Arts. 5, 121). Modelled as a **federal record + two representative Province records** (Buenos Aires,
Córdoba), reusing the US/India/Mexico pattern; `legalSystemScope: 'own'` /
`legislativeCompetence.legal-system: 'exclusive-federal'` captures the national-codes point (a
distinction from Mexico, whose substantive law is split).

## Deferrals

`forensics`, `border-and-customs`, `history`, `timeline` — deferred with reasons, no content, no
routes.
