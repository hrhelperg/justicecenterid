# Wave 22 baseline — digital investigations, surveillance and investigative authority

Branch `feat/knowledge-expansion-wave-22`, cut from `origin/main` at
`8d6f47d36a467d810daeaa18b88fc6f2c540f824`. Measured 2026-09-05. No push during implementation.

Every number below was measured on this tree. None was copied from the Wave 21 report.

## 1. Merge gate — Wave 21 verified in main by artifact

The instruction was to distrust the branch name, the PR title, the merge commit message, the
previous report and the user's statement, and to verify artifacts instead. `origin/main` moved
from `d588372` to `8d6f47d` (`Merge pull request #34 from hrhelperg/feat/knowledge-expansion-wave-21`),
and `git merge-base --is-ancestor` confirms the Wave 21 tip is now an ancestor. That was treated
as a claim to check, not as evidence.

Twelve checks, all on `origin/main` at `8d6f47d`:

| #   | Artifact                            | Method                                               | Result                                                         |
| --- | ----------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------- |
| 1   | Repository identity                 | `git remote -v`                                      | `hrhelperg/justicecenterid`                                    |
| 2   | All 12 Wave 21 route slugs          | grep of `src/content/guides/*.ts`                    | 12/12, exactly one occurrence each                             |
| 3   | Wave 21 test guard                  | `tests/content/wave21-constitutional-rights.test.ts` | present, 54,662 B                                              |
| 4   | Wave 21 e2e spec                    | `e2e/wave21-constitutional-rights.spec.ts`           | present, 9,692 B                                               |
| 5   | Constitutional-rights research docs | 7 files including the rights matrix                  | 7/7 present, matrix 54,508 B                                   |
| 6   | Source additions                    | grep `cz-listina`, `us-bill-of-rights`               | 1 each                                                         |
| 7   | Source extensions                   | grep `WAVE 21 ADDITION`                              | **14** markers (2 new + 12 extended)                           |
| 8   | Full suite executes                 | `npm ci`, `npm test`                                 | exit 0 — 6,642 passed / 76 files                               |
| 9   | Route registry and sitemap parity   | `npm run build`, `npm run verify:output`             | exit 0 — 474 routes, 476 pages, 474 sitemap                    |
| 10  | Wave 21 routes actually rendered    | read `out/`                                          | 12/12 HTML files, 191–335 KB each                              |
| 11  | Representative rendered page parsed | `out/investigations/searching-a-home.html`           | unique title/H1/canonical, 4 JSON-LD, German quotation present |
| 12  | Link graph                          | `node scripts/link-graph-audit.mjs`                  | exit 0 — 476 pages, 0 orphans, 0 weak, 0 dead ends             |

On the three route names the Wave 22 brief guessed at — `privacy-and-criminal-investigations`,
`home-searches-and-legal-safeguards`, `interception-and-legal-authority` — none exists. The actual
merged Wave 21 equivalents are `/investigations/what-privacy-protects-in-law`,
`/investigations/searching-a-home` and `/investigations/intercepting-communications`, and all three
are present and rendered.

**Wave 21 is merged and substantively present. Wave 22 proceeds from `8d6f47d`.**

## 2. Registry counts

| Metric                                       | Baseline         |
| -------------------------------------------- | ---------------- |
| Public route paths                           | **474**          |
| Sitemap URLs                                 | **474**          |
| Exported HTML pages                          | **476**          |
| Guides (all / published)                     | 133 / **133**    |
| Institution types (all / published / routed) | 17 / 17 / **15** |
| Professions (all / published / routed)       | 7 / 7 / **7**    |
| Glossary terms (all / published / routed)    | 32 / 32 / **5**  |
| Country dossiers (all / published)           | 32 / **32**      |
| Source records                               | **327**          |
| History entries                              | **7**            |
| Restricted-claim patterns                    | **10**           |
| `ScheduledChange` records                    | **4**            |

Guides by section: justice 31 · corrections 19 · courts 19 · law-enforcement 17 · defence 11 ·
investigations 10 · forensics 9 · prosecution 9 · public-safety 8.

Routes by top segment: `/countries` 280 · `/justice` 32 · `/courts` 20 · `/corrections` 20 ·
`/law-enforcement` 18 · `/institutions` 16 · `/defence` 12 · `/investigations` 11 ·
`/prosecution` 10 · `/forensics` 10 · `/public-safety` 9 · `/history` 8 · `/professions` 8 ·
`/glossary` 6 · 14 single-page platform and hub routes.

Sources by jurisdiction: INT 37 · DE 30 · US 20 · GB 18 · FR 18 · CA 13 · IE 12 · CZ 11 · BR 10 ·
NO 10 · NZ 10 · JP 9 · AU 9 · SE 9 · AT 8 · ES 7 · CH 7 · NL 7 · DK 7 · FI 7 · ID 7 · ZA 7 ·
IT 6 · PL 6 · SG 6 · KE 6 · KR 5 · AR 5 · PT 4 · NG 4 · BE 3 · IN 3 · MX 3 · GR 2 · unscoped 1.

## 3. Tests and performance

| Metric                                | Baseline                                             |
| ------------------------------------- | ---------------------------------------------------- |
| Vitest files                          | **76**                                               |
| Vitest tests                          | **6,642**                                            |
| Playwright spec files                 | **15**                                               |
| Playwright tests                      | **1,088** (1,084 passed, 4 skipped)                  |
| Client JS bytes (`out/_next/**/*.js`) | **663,525** across 12 files                          |
| CSS bytes (`out/_next/**/*.css`)      | **29,961** across 1 file                             |
| `out/` total                          | **131,361,836** bytes / 4,513 files (144 MB on disk) |

## 4. Digital-content inventory

Every Part A term, counted across all 133 published guides. This is the finding that shapes the
wave: the corpus now has a strong **constitutional** investigation layer and almost no **digital**
vocabulary at all.

| Term                                                  | Files | Hits | Reading                                                                                                                                            |
| ----------------------------------------------------- | ----- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                            | 0     | 0    | **absent from the corpus entirely**                                                                                                                |
| `traffic data`                                        | 0     | 0    | **absent entirely**                                                                                                                                |
| `subscriber` (data)                                   | 0     | 0    | **absent entirely**                                                                                                                                |
| `stored communications`                               | 0     | 0    | **absent entirely**                                                                                                                                |
| `remote access` / `remote search`                     | 0     | 0    | **absent entirely**                                                                                                                                |
| `location data` / `geolocation` / `location tracking` | 0     | 0    | **absent entirely**                                                                                                                                |
| `digital forensic*`                                   | 0     | 0    | **absent entirely**                                                                                                                                |
| `encrypt*`                                            | 0     | 0    | **absent entirely**                                                                                                                                |
| `electronic data`                                     | 0     | 0    | **absent entirely**                                                                                                                                |
| `data retention`                                      | 0     | 0    | **absent entirely**                                                                                                                                |
| `computer`                                            | 0     | 0    | **absent entirely**                                                                                                                                |
| `device search` / `searching a device`                | 0     | 0    | **absent entirely**                                                                                                                                |
| `forensic extraction`                                 | 0     | 0    | **absent entirely**                                                                                                                                |
| prosecutor authorisation                              | 0     | 0    | **absent entirely** as a phrase                                                                                                                    |
| `digital evidence`                                    | 1     | 1    | one mention, inside a list of police disciplines                                                                                                   |
| `phone`                                               | 1     | 1    | "a phone call", an idiom in a Wave 20 page                                                                                                         |
| `surveillance`                                        | 5     | 15   | 3 are the section's own out-of-scope disclaimers; the substantive ones are GG Art. 13(3)–(4) acoustic surveillance **of a home**, owned by Wave 21 |
| `monitor*`                                            | 3     | 20   | 15 are **electronic monitoring in corrections** — sentence enforcement, a different domain                                                         |
| `intercept*`                                          | 3     | 27   | 24 in `investigations.ts` — Wave 21's constitutional page                                                                                          |
| `communications`                                      | 7     | 66   | 45 in `investigations.ts` — same page                                                                                                              |
| `warrant`                                             | 6     | 33   | 21 in `investigations.ts` — Wave 21's home-search page                                                                                             |
| judicial authorisation                                | 6     | 50   | 24 in `investigations.ts` — same                                                                                                                   |
| emergency authorisation                               | 3     | 6    | _Gefahr im Verzuge_ / "time is of the essence", in Wave 21 pages                                                                                   |

No institution type mentions digital, cyber, forensic units or interception. No glossary term
does either; the 32 terms include `Warrant`, `Evidence`, `Chain of custody` and `Disclosure`, none
digital.

## 5. Existing ownership, and the two gaps Wave 21 signposted

**`/investigations` (10 pages).** Seven are institutional — who investigates, investigative
jurisdiction, investigating judge, judicial police, police-vs-prosecutor investigation, what a
criminal investigation is, investigation to prosecution. Three are Wave 21's constitutional layer:
what privacy protects, searching a home, intercepting communications.

**`/forensics` (9 pages).** Forensic science _as evidence_ — reliability, admissibility, chain of
custody, laboratories, expert evidence. Its `outOfScope` bars "Laboratory protocols or method
detail" and "Anything describing how a technique is performed, defeated, or evaded".

**`/justice`.** Wave 19 owns unlawfully obtained evidence, judicial review, constitutional review,
procedural error and remedies; Wave 21 owns limitation, proportionality, rights-holder scope.

Two gaps are named by Wave 21's own uncertainty statements, in its own words:

1. `searching-a-home`: _"The procedural codes that operate under them — which is where most of the
   detail of any real authorisation lives — were not researched for any system here."_
2. `intercepting-communications`: _"The interception statutes operating under them were not
   researched, and in every system here the operative detail is statutory."_ And: _"Whether any of
   these texts reaches a form of communication that did not exist when it was drafted is a question
   of interpretation, not of text, and was not researched."_

That fixes Wave 22's ownership precisely. **Wave 21 owns the constitutional right and its limit.
Wave 22 owns the statutory authority operating beneath it, and the categories of digital object
that authority is drawn around.**

## 6. Existing safety architecture Wave 22 inherits

`/investigations` already declares an `outOfScope` list — "Investigative technique at operational
specificity", "Surveillance capability, thresholds, or detection detail", "Anything that could
assist evasion, concealment, or interference with an investigation". `/forensics` declares its
own. Wave 22 does not need a new safety concept; it needs the existing one enforced by tests at
the granularity this subject demands, which the Wave 16 and Wave 21 suites established.
