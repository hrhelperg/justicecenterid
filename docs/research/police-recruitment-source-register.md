# Police recruitment source register

Every source content-confirmed: fetched and read. No URL guessed, no fact resting on a search
summary. Each note records three things beyond the usual — the geographic scope the source actually
proves, whether it is campaign-specific, and what it does not establish.

## Sources added

| Id                                 | Publisher                                       | Scope proved                          | Campaign-specific          | Verified   |
| ---------------------------------- | ----------------------------------------------- | ------------------------------------- | -------------------------- | ---------- |
| `ie-garda-eligibility-regulations` | An Garda Síochána / Public Appointments Service | An Garda Síochána                     | **YES — 2024 competition** | 2026-09-06 |
| `ew-police-eligibility-criteria`   | Join the Police (England & Wales)               | National criteria only, not any force | No                         | 2026-09-06 |
| `nz-police-eligibility`            | New Zealand Police                              | New Zealand Police                    | No                         | 2026-09-06 |
| `nl-politie-toelatingseisen`       | Nationale Politie                               | Dutch national police                 | No                         | 2026-09-06 |
| `de-bayern-polizei-ausbildung`     | Bayerische Polizei                              | **Bavaria only**                      | No                         | 2026-09-06 |

Wave 24 sources reused: `ie-garda-trainee-booklet-2024`, `ie-garda-educational-requirements`,
`de-berlin-polizei-ausbildung`, `de-berlin-polizei-studium`, `nl-politie-opleidingsoverzicht`,
`nl-politieacademie-basisopleidingen`, `us-bjs-training-academies-2022`.

## What each supports, and what it does not

- **`ie-garda-eligibility-regulations`** — the six numbered eligibility conditions verbatim, and the
  durable legal basis: the Garda Síochána (Admissions & Appointments) Regulations 2013 as amended by
  S.I. 602/2020, S.I. 757/2021 and S.I. 611/2023. **The age window is anchored to "midnight on
  Thursday, 8th of February 2024" and is never restated as a standing rule.** Pay figures in the
  same document are deliberately unused. Establishes nothing about any other Irish body.
- **`ew-police-eligibility-criteria`** — the application/appointment age split, the right-to-work
  formulation, the three-year residency point for vetting, and Level 3 education. Critically it also
  supports its own limit: "Police forces are also allowed to apply their own local criteria in
  addition to the national eligibility aspects." **A national criterion is a floor, not a force's
  complete requirement.** Nothing about Scotland or Northern Ireland.
- **`nz-police-eligibility`** — citizenship-or-residency, the two age thresholds and the express
  "There's no upper age limit", the licence rule, English, and the existence of fitness, eyesight,
  conviction-disclosure, overseas-clearance and medical-history requirements. No standard taken from
  it.
- **`nl-politie-toelatingseisen`** — age at start of training, Dutch nationality including as a
  second nationality, the vooropleiding alternatives with the toelatingstoets, Dutch at B1, and the
  category B licence within nine months. Nothing about the Koninklijke Marechaussee.
- **`de-bayern-polizei-ausbildung`** — the 2. Qualifikationsebene Ausbildung at "2,5 Jahre" in five
  six-month sections. **The page does not state a required school qualification, and none is
  claimed.** Used only to establish that Länder recruit and train separately.

## Access failures and link rot — recorded, not worked around

| Host                                                | Behaviour                                                                                                                                             | Consequence                                                                               |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `policie.cz`                                        | 301 → `policie.gov.cz` → 301 → **`archiv.policie.gov.cz`**; archive notice "Obsah zde nemusí být aktuální"; dated 17 May 2024; conditions not present | **Czechia deferred.** Described nowhere                                                   |
| `phs.no`                                            | 301 → `politihogskolen.no`, whose admission path returns **HTTP 404**                                                                                 | **Norway abandoned.** Described nowhere                                                   |
| `post.ca.gov`                                       | Connection refused (carried over from Wave 24, not retried)                                                                                           | No California claim; the US page states no entry requirement                              |
| `police-nationale.interieur.gouv.fr`                | HTTP 403 in Wave 24; not retried                                                                                                                      | **France described nowhere**                                                              |
| `newcops.govt.nz/eligibility`                       | 307 → `/can-i-be-a-cop/what-do-i-need`                                                                                                                | Redirect followed; **the destination is what is recorded**, re-checked to serve HTTPS 200 |
| `joiningthepolice.co.uk/.../am-i-eligible-to-apply` | Resolves, but is an interactive quiz containing none of the criteria                                                                                  | Not used. The criteria were taken from the common-questions page instead                  |

Two of these are worth recording as method rather than as incidents. The New Zealand case is why
**redirects are followed and the destination recorded** — the original URL would have gone stale
silently. The `am-i-eligible-to-apply` case is why **content-confirmation is not optional**: a
search summary asserted that page contained age and nationality criteria, and reading it showed it
contains neither.

## Rejected source classes

Not used to establish any requirement, per Part F: recruitment blogs, forums, SEO sites, commercial
preparation companies, search snippets and AI summaries. Also rejected: NCJRS abstracts on US POST
commissions, which were located during research and date from the 1970s — far too old to describe a
current position, and not used even as background.

## Deliberate exclusions

- **Pay.** Present in the Irish booklet and referenced on German and English recruitment material.
  Excluded under Part AS and the `compensation` restricted-claim category.
- **Fitness standards and test protocols.** Named as existing; no threshold published (Part Q).
- **Medical criteria.** Named as existing; no criterion published (Part R).
- **Vetting method.** Named as existing; nothing about how it is conducted (Part S).
- **Application deadlines, place counts and campaign openings.** Present in the Irish booklet.
  Excluded under Part AB — this is not a job board.
