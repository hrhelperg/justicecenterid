# Wave 23 baseline — cross-border digital evidence and international cooperation

Branch `feat/knowledge-expansion-wave-23`, cut from `origin/main` at
`3045bc4d97a26762dd741b600fd4a5ea46d64ca0`. Measured 2026-09-05. No push during implementation.

Every number below was measured on this tree. None was copied from the Wave 22 report.

## 1. Merge gate — Wave 22 verified in main by artifact

`origin/main` moved from `8d6f47d` to `3045bc4`
(`Merge pull request #35 from hrhelperg/feat/knowledge-expansion-wave-22`), and
`git merge-base --is-ancestor` confirms the Wave 22 tip is now an ancestor. That was treated as a
claim to check, not as evidence.

| #   | Artifact                                  | Method                                                             | Result                                                                          |
| --- | ----------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 1   | Repository identity                       | `git remote -v`                                                    | `hrhelperg/justicecenterid`                                                     |
| 2   | All seven Wave 22 `/investigations` slugs | grep of `src/content/guides/*.ts`                                  | 7/7, exactly one occurrence each                                                |
| 3   | Wave 22 test guard                        | `tests/content/wave22-digital-investigations.test.ts`              | present, 45,777 B                                                               |
| 4   | Wave 22 e2e spec                          | `e2e/wave22-digital-investigations.spec.ts`                        | present, 9,777 B                                                                |
| 5   | Wave 22 research docs                     | 7 files                                                            | 7/7 present, matrix 35,733 B                                                    |
| 6   | Wave 22 source records                    | grep for the five named records                                    | 1 each; **13** `WAVE 22 ADDITION` markers                                       |
| 7   | **Cross-source citation invariant**       | grep `no block anywhere cites a source its guide does not declare` | present                                                                         |
| 8   | Section-traceability invariant            | grep `cites a record for every statutory section it names`         | present                                                                         |
| 9   | Wave 22 safety guard                      | grep `const OPERATIONAL`                                           | present                                                                         |
| 10  | Full suite executes                       | `npm ci`, `npm test`                                               | exit 0 — 7,015 passed / 77 files                                                |
| 11  | Route registry and sitemap parity         | `npm run build`, `npm run verify:output`                           | exit 0 — 481 routes, 483 pages, 481 sitemap                                     |
| 12  | Wave 22 routes actually rendered          | read `out/investigations/`                                         | 7/7 HTML, 113–163 KB each                                                       |
| 13  | Representative rendered page parsed       | `preserving-data-and-producing-it.html`                            | unique title/H1/canonical, 4 JSON-LD, carries the ninety-day Convention finding |
| 14  | Link graph                                | `node scripts/link-graph-audit.mjs`                                | exit 0 — 483 pages, 0 orphans, 0 weak, 0 dead ends                              |

**Wave 22 is merged and substantively present. Wave 23 proceeds from `3045bc4`.**

## 2. Registry counts

| Metric                                       | Baseline         |
| -------------------------------------------- | ---------------- |
| Public route paths                           | **481**          |
| Sitemap URLs                                 | **481**          |
| Exported HTML pages                          | **483**          |
| Guides (all / published)                     | 140 / **140**    |
| Institution types (all / published / routed) | 17 / 17 / **15** |
| Professions (all / published / routed)       | 7 / 7 / **7**    |
| Glossary terms (all / published / routed)    | 32 / 32 / **5**  |
| Country dossiers (all / published)           | 32 / **32**      |
| Source records                               | **339**          |
| Restricted-claim patterns                    | **10**           |
| `ScheduledChange` records                    | **4**            |

The four existing `ScheduledChange` records are `fr-recodification-2029` (pending),
`ie-policing-oversight-reform-2025` (taken-effect), `ch-bekj-justitia40-2027` (pending) and
`kr-prosecution-restructuring-2026` (pending). All four carry `certainty: 'enacted-with-date'`.
That matters for Part X: the model already distinguishes a pending future change from one that has
taken effect, and it already records certainty separately from status.

Guides by section: justice 31 · corrections 19 · courts 19 · investigations 17 · law-enforcement 17
· defence 11 · forensics 9 · prosecution 9 · public-safety 8.

Sources by jurisdiction: INT 38 · DE 38 · US 22 · GB 18 · FR 18 · CA 13 · IE 12 · CZ 11 · BR 10 ·
NO 10 · NZ 10 · JP 9 · AU 9 · SE 9 · ES 8 · AT 8 · CH 7 · NL 7 · DK 7 · FI 7 · ID 7 · ZA 7 · IT 6 ·
PL 6 · SG 6 · KE 6 · KR 5 · AR 5 · PT 4 · NG 4 · BE 3 · IN 3 · MX 3 · GR 2 · unscoped 1.

## 3. Tests and performance

| Metric                                | Baseline                            |
| ------------------------------------- | ----------------------------------- |
| Vitest files                          | **77**                              |
| Vitest tests                          | **7,015**                           |
| Playwright spec files                 | **16**                              |
| Playwright tests                      | **1,204** (1,200 passed, 4 skipped) |
| Client JS bytes (`out/_next/**/*.js`) | **663,525** across 12 files         |
| CSS bytes (`out/_next/**/*.css`)      | **29,961** across 1 file            |
| `out/` total                          | **134,329,748** bytes / 4,576 files |

## 4. Cross-border inventory

Every Part A term, counted across all 140 published guides.

| Term                                          | Files | Hits | Reading                                                                             |
| --------------------------------------------- | ----- | ---- | ----------------------------------------------------------------------------------- |
| `cross-border` (any form)                     | 0     | 0    | **absent from the corpus entirely**                                                 |
| `mutual legal assistance`                     | 0     | 0    | **absent entirely**                                                                 |
| `MLAT`                                        | 0     | 0    | **absent entirely**                                                                 |
| `Second Additional Protocol`                  | 0     | 0    | **absent entirely**                                                                 |
| `European Investigation Order` / `EIO`        | 0     | 0    | **absent entirely**                                                                 |
| `e-Evidence`                                  | 0     | 0    | **absent entirely**                                                                 |
| `foreign provider`                            | 0     | 0    | **absent entirely**                                                                 |
| `cloud`                                       | 0     | 0    | **absent entirely**                                                                 |
| `extraterritorial`                            | 0     | 0    | **absent entirely**                                                                 |
| `direct cooperation`                          | 0     | 0    | **absent entirely**                                                                 |
| `emergency disclosure`                        | 0     | 0    | **absent entirely**                                                                 |
| `international cooperation`                   | 0     | 0    | **absent entirely**                                                                 |
| `letters rogatory`                            | 0     | 0    | **absent entirely**                                                                 |
| `dual criminality`                            | 0     | 0    | **absent entirely**                                                                 |
| `central authority`                           | 0     | 0    | **absent entirely**                                                                 |
| `sovereign*`                                  | 1     | 1    | one incidental mention in a Wave 20 page                                            |
| Budapest / Convention on Cybercrime           | 1     | 7    | **all seven in `investigations.ts`, and all seven cite Arts. 14, 15, 16, 18 or 19** |
| `preservation order` / expedited preservation | 1     | 6    | Wave 22, all domestic                                                               |
| `production order`                            | 1     | 2    | Wave 22, all domestic                                                               |
| `subscriber`                                  | 1     | 32   | Wave 22                                                                             |
| `traffic data`                                | 1     | 13   | Wave 22                                                                             |
| `content data`                                | 1     | 8    | Wave 22                                                                             |
| `service provider`                            | 3     | 10   | Wave 22 mainly                                                                      |
| `territor*`                                   | 8     | 62   | almost all **territorial jurisdiction of courts and police**, a different subject   |

**Country dossiers: zero hits.** A scan of all 32 dossiers for cross-border, MLA, MLAT, Budapest,
EIO, e-Evidence, letters rogatory, dual criminality, central authority and extraterritoriality
returned **0 matches**. No dossier discusses any cooperation mechanism.

## 5. Where Wave 22 stopped, exactly

This is the finding that fixes Wave 23's ownership. Wave 22 cites the Convention on Cybercrime
**seven times, and every one is an Article from Chapter II Section 2** — the chapter of _domestic_
procedural powers:

- Art. 14 (scope of procedural provisions) ×2
- Art. 15 (conditions and safeguards)
- Art. 16 (expedited preservation)
- Art. 18 (production order, and the subscriber-information definition)
- Art. 19 (search and seizure of stored computer data) ×2

The existing source record is titled **"Articles 14–21"** and its own STATUS line records that the
Second Additional Protocol "was located but NOT read for this wave."

**Chapter III of the Convention — Articles 23 to 35, international co-operation — is entirely
unowned**, as is the Second Additional Protocol, the EU e-Evidence framework, the European
Investigation Order, and mutual legal assistance in any form.

## 6. What this means for Wave 23

The wave is not adding a topic to a section; it is adding the layer above an existing one.

| Layer                                         | Owner       | Question                                                            |
| --------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| Constitutional right and its limit            | Wave 21     | _Why_ the state's reach is bounded                                  |
| Domestic statutory authority                  | **Wave 22** | _What_ authority exists over digital objects, authorised by whom    |
| **Cross-border cooperation and jurisdiction** | **Wave 23** | _What happens when the authority is here and the data is elsewhere_ |
| Forensic science as evidence                  | Wave 16     | What an examination establishes                                     |
| Review and remedy                             | Wave 19     | What follows when authority was exceeded                            |

The temporal problem is this wave's distinctive one and is treated as first-class research rather
than as a footnote: the EU e-Evidence Regulation and Directive, and the Second Additional Protocol,
each have separate adoption, entry-into-force, application and transposition dates, and none of
those may be inferred from another.
