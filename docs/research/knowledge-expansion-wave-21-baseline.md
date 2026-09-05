# Wave 21 baseline — constitutional rights, state powers and fundamental safeguards

Branch `feat/knowledge-expansion-wave-21`, cut from `origin/main` at
`d588372810b8cc0be884aaabbf442b48785fe992`. Measured 2026-09-05. No push during implementation.

Every number below was measured on this tree with the commands recorded beside it. None was
copied from the Wave 20 report, from the roadmap, or from any prior wave's figures.

## 1. Merge gate — Wave 20 verified in main by artifact

The instruction was to treat the branch name, the PR title, the merge commit message, the previous
report and the user's statement as insufficient, and to verify representative substantive
artifacts individually. Wave 20's tip commit `682fc51` **is** an ancestor of `origin/main`
(`git merge-base --is-ancestor` exit 0), and `d588372` is the merge of PR #33 — but the merge
commit was treated as a claim to be checked, not as evidence.

Twelve checks, all on `origin/main` at `d588372`:

| #   | Artifact                           | Method                                                                   | Result                                              |
| --- | ---------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 1   | Repository identity                | `git remote -v`                                                          | `hrhelperg/justicecenterid`                         |
| 2   | `/public-safety` Wave 20 content   | read `src/content/guides/public-safety.ts`                               | 8 guide slugs, 123,190 bytes                        |
| 3   | Wave 20 routes export              | `src/app/public-safety/[slug]/page.tsx` present, `dynamicParams = false` | present, 18 lines, same shape as other 8            |
| 4   | Wave 20 routes actually built      | `npm run build`, then read `out/public-safety/`                          | 8/8 `.html` rendered                                |
| 5   | Rendered page is substantive       | parsed `what-a-state-of-emergency-changes.html`                          | 190,721 bytes, unique title/H1/canonical, 4 JSON-LD |
| 6   | Wave 20 source records             | grep `ch-bzg`, `cz-security-act`, `es-ley-17-2015` in `sources.ts`       | 1 occurrence each                                   |
| 7   | Wave 20 safeguards/tests           | `tests/content/wave20-public-safety-emergency.test.ts`                   | present, 56,045 bytes, executes green               |
| 8   | Wave 20 e2e spec                   | `e2e/wave20-public-safety.spec.ts`                                       | present, executes green                             |
| 9   | Wave 20 research/QA documentation  | `ls docs/research/`                                                      | 7 Wave 20 docs incl. baseline + QA                  |
| 10  | Route registry includes the routes | `PUBLIC_ROUTES` filtered on `/public-safety`                             | 9 (`/public-safety` + 8 children)                   |
| 11  | Sitemap / export parity            | `npm run verify:output`                                                  | exit 0 — 462 routes, 464 pages, 462 sitemap URLs    |
| 12  | Link graph functional              | `node scripts/link-graph-audit.mjs`                                      | exit 0 — 0 orphans, 0 weakly linked, 0 dead ends    |

Full suite on `main` before any Wave 21 change, exit codes read directly:
`npm ci` **0** · `npm test` **0** (6,152 passed / 75 files) · `npm run build` **0** ·
`npm run verify:output` **0** · `npm run test:e2e` **0** (924 passed, 4 skipped) ·
`link-graph-audit` **0**.

`npm run verify:production` (`scripts/route-matrix.mjs`) requires an `<origin>` argument and is a
production check against a live host; it is run in the final gate against the local static serve,
not against the deployed site.

**Wave 20 is merged and substantively present. Wave 21 proceeds.**

## 2. Registry counts

| Metric                                       | Baseline         |
| -------------------------------------------- | ---------------- |
| Public route paths                           | **462**          |
| Sitemap URLs                                 | **462**          |
| Exported HTML pages                          | **464**          |
| Guides (all / published)                     | 121 / **121**    |
| Institution types (all / published / routed) | 17 / 17 / **15** |
| Professions (all / published / routed)       | 7 / 7 / **7**    |
| Glossary terms (all / published / routed)    | 32 / 32 / **5**  |
| Country dossiers (all / published)           | 32 / **32**      |
| Source records                               | **325**          |
| History entries                              | **7**            |
| Restricted-claim patterns                    | **10**           |
| `ScheduledChange` records                    | **4**            |

Guides by section: justice 25 · corrections 19 · courts 18 · law-enforcement 17 · defence 9 ·
forensics 9 · prosecution 9 · public-safety 8 · investigations 7.

Routes by top segment: `/countries` 280 · `/justice` 26 · `/corrections` 20 · `/courts` 19 ·
`/law-enforcement` 18 · `/institutions` 16 · `/prosecution` 10 · `/defence` 10 · `/forensics` 10 ·
`/public-safety` 9 · `/investigations` 8 · `/history` 8 · `/professions` 8 · `/glossary` 6 ·
14 single-page platform and hub routes.

Sources by jurisdiction: INT 37 · DE 30 · US 19 · GB 18 · FR 18 · CA 13 · IE 12 · BR 10 · NO 10 ·
CZ 10 · NZ 10 · JP 9 · AU 9 · SE 9 · AT 8 · ES 7 · CH 7 · NL 7 · DK 7 · FI 7 · ID 7 · ZA 7 ·
IT 6 · PL 6 · SG 6 · KE 6 · KR 5 · AR 5 · PT 4 · NG 4 · BE 3 · IN 3 · MX 3 · GR 2 · unscoped 1.

## 3. Tests and performance

| Metric                                | Baseline                                             |
| ------------------------------------- | ---------------------------------------------------- |
| Vitest files                          | **75**                                               |
| Vitest tests                          | **6,152**                                            |
| Playwright spec files                 | **14**                                               |
| Playwright tests                      | **928** (924 passed, 4 skipped)                      |
| Client JS bytes (`out/_next/**/*.js`) | **663,525** across 12 files                          |
| CSS bytes (`out/_next/**/*.css`)      | **29,961** across 1 file                             |
| `out/` total                          | **118,138,759** bytes / 4,405 files (127 MB on disk) |

## 4. Rights inventory — what the corpus already says

This is the finding that shapes the whole wave. Wave 21's nominal subject is **already the
corpus's densest area**. The eleven sections were read page by page; the table records which
reader question each concept is already owned by.

### Already owned, and owned well

| Concept                                   | Owner                                                                                                     |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Rule of law                               | `/justice/what-is-the-rule-of-law` (six components enumerated)                                            |
| Legality, non-retroactivity               | `/justice/legality-and-non-retroactivity`                                                                 |
| Legal certainty                           | `/justice/legal-certainty`                                                                                |
| Equality before the law                   | `/justice/equality-before-the-law` (DE Art. 3, ZA s. 9, KE)                                               |
| Access to justice                         | `/justice/access-to-justice` (KE, ZA, BR, DE)                                                             |
| Effective remedy                          | `/justice/effective-remedy` (Wave 19)                                                                     |
| Limits on public power                    | `/justice/limits-on-public-power` — four recurring limits                                                 |
| Government bound by law                   | `/justice/why-government-is-bound-by-law`                                                                 |
| Due process                               | `/justice/what-is-due-process`                                                                            |
| Due process ≠ universal phrase            | `/justice/procedural-fairness-and-its-many-names` (BR _devido processo legal_)                            |
| Presumption of innocence                  | `/justice/what-is-the-presumption-of-innocence` + `/prosecution/prosecution-and-presumption-of-innocence` |
| Unlawfully obtained evidence              | `/justice/what-happens-to-unlawfully-obtained-evidence`                                                   |
| Detention review, habeas                  | `/justice/reviewing-detention` (Wave 19)                                                                  |
| Constitutional review                     | `/justice/constitutional-review` (Wave 19)                                                                |
| Non-derogable rights, derogation          | `/justice/which-rights-can-never-be-suspended` — **five architectures**                                   |
| Emergency detention                       | `/justice/detention-under-emergency-powers`                                                               |
| Reviewing an emergency declaration        | `/justice/reviewing-an-emergency-declaration`                                                             |
| Emergency powers machinery                | `/public-safety` ×8 (Wave 20)                                                                             |
| Courts in emergencies                     | `/courts/courts-during-a-state-of-emergency`                                                              |
| Judicial independence                     | `/courts/why-judicial-independence-matters`                                                               |
| Interpreter / court language              | `/courts/court-language-and-interpretation`                                                               |
| Cost as a barrier                         | `/courts/the-cost-of-going-to-court`                                                                      |
| Right to counsel, legal aid               | `/defence/right-to-counsel`, `/defence/how-defence-is-funded`                                             |
| Case-file access                          | `/defence/access-to-the-case-file`                                                                        |
| Lawyer–client confidentiality             | `/defence/lawyer-client-confidentiality`                                                                  |
| Arrest / detention safeguards             | `/law-enforcement/arrest-and-detention` (institutional register)                                          |
| Use of force, necessity + proportionality | `/law-enforcement/police-use-of-force` (UN instruments)                                                   |
| Prosecutorial discretion vs legality      | `/prosecution/prosecutorial-discretion-and-legality`                                                      |
| Appeal, cassation, judicial review        | `/courts` ×4, `/justice/appeal-and-the-rule-of-law` (Wave 19)                                             |

### Measured absence

Concept frequency across all eleven `src/content/guides/*.ts` files (`grep -oi`, whole corpus):

| Term                                 | Files | Hits | Reading                                                                                                                                             |
| ------------------------------------ | ----- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self-incriminat`                    | 0     | 0    | **absent from the corpus entirely**                                                                                                                 |
| `right to silence` / `remain silent` | 0     | 0    | **absent entirely**                                                                                                                                 |
| `equality of arms`                   | 0     | 0    | **absent entirely**                                                                                                                                 |
| `seizure`                            | 0     | 0    | **absent entirely**                                                                                                                                 |
| `freedom of expression`              | 0     | 0    | **absent entirely**                                                                                                                                 |
| `correspondence`                     | 1     | 1    | one incidental mention                                                                                                                              |
| `privacy`                            | 2     | 2    | both incidental — reporting restrictions, not a protected interest                                                                                  |
| `necessity`                          | 2     | 5    | use-of-force only                                                                                                                                   |
| `proportional`                       | 3     | 9    | use-of-force (UN instruments) and Wave 20 movement restrictions                                                                                     |
| `warrant`                            | 5     | 12   | **all incidental** — "warrant of arrest" in a quoted FR provision, "serious enough to warrant" ×4, sheriffs executing warrants                      |
| `assembly`                           | 4     | 20   | **all legislative** — National Assembly, UN General Assembly, Wave 20's bar on military policing of protest. Zero on freedom of assembly as a right |
| `liberty and security`               | 1     | 1    | one mention                                                                                                                                         |
| `bodily`                             | 2     | 3    | bodily integrity of officers; no sampling safeguards                                                                                                |
| `citizen`                            | 4     | 11   | not audited as a rights-holder term anywhere                                                                                                        |

`/investigations` has **seven pages, all institutional** — who investigates, investigative
jurisdiction, investigating judge, judicial police, police-vs-prosecutor investigation, what a
criminal investigation is, investigation to prosecution. It contains **nothing** on privacy, the
home, correspondence, search, seizure, judicial authorisation, sampling, or digital evidence as
legal categories. This is the largest single gap in the corpus.

## 5. What this means for Wave 21

The wave cannot be a rights catalogue. Every foundational right on the Part D list that could
carry a catalogue page is already owned by a page that answers that reader's question better than
a new page would. Publishing `/justice/rule-of-law-and-rights` or `/justice/right-to-due-process`
would be pure cannibalization of `what-is-the-rule-of-law` and `what-is-due-process`.

Three things the corpus does **not** yet have, and which its own pages point at:

1. **The ordinary limitation architecture.** `which-rights-can-never-be-suspended` states in terms
   that "a limitation clause asks whether a restriction is justified under a standing test that
   applies at all times" — and then does not explain that standing test, because its subject is
   emergencies. The corpus has the emergency exception without the ordinary rule it is an
   exception to. That is the keystone gap.
2. **Investigation as a rights problem.** The corpus explains who investigates and with what
   institutional competence, never what protected interest an investigative act touches or what
   authorisation it needs.
3. **Rights-holder scope.** No page in the corpus asks who a constitutional right belongs to, and
   `citizen` appears eleven times unaudited.

Candidate generation, the comparative matrix and the cannibalization audit are recorded in
`constitutional-rights-research-plan.md`, `constitutional-rights-matrix.md` and
`constitutional-rights-cannibalization-matrix.md`.
