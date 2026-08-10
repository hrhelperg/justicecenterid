# Knowledge Expansion Wave 6 — baseline

Measured on branch `feat/knowledge-expansion-wave-6`, cut from `main` at
**`32e1b7dcd93f8948a578e674a63958d5df9cd022`** (merge of PR #23, Wave 5), working tree clean.

## 1. Wave 5 merge gate

Wave 5 was verified by artefact, not by merge-commit title. Every item below was checked in
the working tree at the base SHA, and the three Wave 5 routes were rebuilt from source.

| #   | Artefact                                                                  | Result                                                         |
| --- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1   | `/institutions/independent-police-complaints-body` record + exported page | present                                                        |
| 2   | `/institutions/ombuds-and-rights-institution` record + exported page      | present                                                        |
| 3   | `/law-enforcement/who-investigates-police` guide + exported page          | present                                                        |
| 4   | `oversightPosture` on `InstitutionType` in `src/content/types.ts`         | present                                                        |
| 5   | `oversightPosture: 'external'` carried by both new records                | present                                                        |
| 6   | Ireland Fiosrú / GSOC temporal invariant asserted in tests                | present                                                        |
| 7   | Current/historical handling in the rendered page                          | verified — see §2                                              |
| 8   | `docs/seo/knowledge-expansion-wave-5-cannibalization.md`                  | present, 76 lines                                              |
| 9   | `docs/audits/knowledge-expansion-wave-5-qa.md`                            | present                                                        |
| 10  | `tests/content/wave5-oversight.test.ts`                                   | present, 413 lines                                             |
| 11  | Route registry / sitemap integration                                      | 352 routes, 354 pages, 352 sitemap URLs, `verify:output` green |

## 2. Historical GSOC cannot render as current

The exported `/institutions/independent-police-complaints-body` page was parsed with markup
and scripts stripped. Every sentence naming the Garda Síochána Ombudsman Commission carries a
past-tense marker — _replaced_, _became_, _historical_, _predecessor_, _former_ or _would now
be wrong_. Fiosrú is named as the current body, and the commencement date 2 April 2025 appears
on the page, matching the modelled `ScheduledChange` `ie-policing-oversight-reform-2025`.

## 3. Baseline measurements

| Metric                                       | Value            |
| -------------------------------------------- | ---------------- |
| Routes in registry                           | 352              |
| Exported HTML pages                          | 354              |
| Sitemap URLs                                 | 352              |
| Unit tests                                   | 2584 in 57 files |
| Playwright tests                             | 376 in 7 files   |
| `InstitutionType` records                    | 15               |
| Routed institution types                     | 13               |
| Law-enforcement guides                       | 15               |
| Source records                               | 225              |
| France-scoped sources (`jurisdiction: 'FR'`) | 6                |
| `ScheduledChange` records                    | 4                |
| JS bundle                                    | 663,403 B        |
| CSS bundle                                   | 29,406 B         |
| `out/` on disk                               | 79 MB            |

## 4. France routes at baseline

```
/countries/france
/countries/france/justice-system
/countries/france/courts
/countries/france/law-enforcement
/countries/france/prosecution
/countries/france/investigations
/countries/france/sources
```

`/countries/france/oversight` **does not exist** and is deferred. Whether it graduates is a
Wave 6 decision, to be made from evidence rather than from the name of the phase.

## 5. What Wave 5 explicitly did not establish

`docs/research/police-oversight-institutions-plan.md` §2 records that the corpus carried **no
IGPN source, no IGGN source and no Défenseur des droits source**, and §3 deferred the
`police-inspectorate` and `internal-affairs` families for want of any source at all.

Those deferrals are the input to this wave. They are **NOT ESTABLISHED**, not **NO** — Wave 6
tests whether French primary evidence changes them, and is permitted to leave them deferred.
