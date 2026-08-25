# Knowledge Expansion Wave 10 — QA record

Prosecution systems. Twelve jurisdictions used, eight routes published, three sources added, one
existing accuracy defect and one latent rendering defect corrected.

## 1. Merge gate

| Check                                                 | Result                                                                                                   |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Repository                                            | `hrhelperg/justicecenterid`                                                                              |
| `origin/main`                                         | `5fcd0f01d8e07d53487dacea1dc15de8ec8ee500` — Merge PR #27 from Wave 9                                    |
| Wave 9 an ancestor of `origin/main`                   | Yes                                                                                                      |
| All nine Wave 9 court guides + `constitutional-court` | Present in the registry; six routes **rebuilt to HTML** from a clean `rm -rf out .next && npm run build` |
| Wave 9 docs                                           | plan, court matrix, cannibalization and QA all present                                                   |
| Wave 9 safeguards                                     | the unsourced-independence gate, `hasSourceFor`, and the profession-intent guard M7 forced — all live    |
| Sources / routes / tests at base                      | 247 / 372 / 3088                                                                                         |
| Working tree                                          | Clean                                                                                                    |

Wave 9's boundary test forbids courts pages from discussing charging standards, prosecutorial
discretion, plea bargaining or prosecution independence — all four of which are Wave 10's subject.
It still passes, because the material went to `/prosecution`.

## 2. The architecture decision

`/prosecution/[slug]` was already wired. Wave 10 added eight guide records and no route file, no
competing hub. Fourth wave running.

## 3. Sources

**Reuse again.** All 32 dossiers carry a verified `prosecution` module. Three sources added, all
German, because no record carried the charging provisions: `de-stpo-152-legalitaetsgrundsatz`,
`de-stpo-170-anklageerhebung`, `de-stpo-153-geringfuegigkeit`. 247 → 250.

### The accuracy defect this wave inherited and corrected

`what-does-a-prosecutor-do` stated that prosecution services "typically apply a two-stage test",
with an evidential stage asking whether there is "a realistic prospect of conviction" — on the
authority of `un-prosecutors-guidelines` and `iccpr` and **no country-scoped source at all**.

That is the England-and-Wales Full Code Test generalised, and § 152(2) StPO contradicts it: the
German prosecution is _obliged_ to act on "zureichende tatsächliche Anhaltspunkte" — sufficient
factual indications — and the provision asks nothing about prospects of conviction. An
international instrument can establish a normative standard; it cannot establish how a country's
charging decision works.

The passage was rewritten to attribute the two-stage formulation to the systems that use it, to
carry Germany's provision alongside it, and the page was given country-scoped sources it did not
previously have. This removed an existing universalisation rather than adding a competing page.

## 4. Cannibalization

34 guide candidates and 7 institution candidates. **PUBLISH 8 · KEEP-AND-CORRECT 1 · MERGE 14 ·
DEFER 6 · REJECT 5**, and **zero institution routes**.

**Zero institution routes is the finding**, and it is the third wave to reach it. The prosecuting
_function_ recurs everywhere; the _institution_ does not. In Nigeria the prosecuting authority is
a serving Minister; in the United States there is no national service and most chief local
prosecutors are elected; in Germany offices attach to each court; in Brazil the body sits outside
all three branches with a remit far wider than prosecution. A single institution page would be
empty or wrong about half of them.

## 5. Validation

| Gate                               | Result                                                 |
| ---------------------------------- | ------------------------------------------------------ |
| `npm ci`                           | clean, exit 0                                          |
| `npm run format:check`             | pass                                                   |
| `npm run lint`                     | pass, no warnings                                      |
| `npm run typecheck`                | pass                                                   |
| `npm test`                         | **3308 passed / 62 files**, exit 0                     |
| `npm run build`                    | pass                                                   |
| `npm run verify:output`            | **380 routes / 382 pages / 380 sitemap URLs**          |
| `npm run test:e2e`                 | **700 tests, 696 passed, 4 skipped, 0 failed**, exit 0 |
| Route matrix (local static server) | **492/492** — 380 routes + 112 must-404                |

### Deltas against the baseline

| Metric                  | Baseline  | Wave 10   | Delta     |
| ----------------------- | --------- | --------- | --------- |
| Routes                  | 372       | 380       | +8        |
| Exported pages          | 374       | 382       | +8        |
| Sitemap URLs            | 372       | 380       | +8        |
| Prosecution routes      | 1         | 9         | +8        |
| Unit tests              | 3088      | 3308      | +220      |
| Unit test files         | 61        | 62        | +1        |
| Playwright tests        | 614       | 700       | +86       |
| Source records          | 247       | 250       | +3        |
| Institution routes      | 15        | 15        | 0         |
| Restricted claims       | 10        | 10        | 0         |
| ScheduledChange records | 4         | 4         | 0         |
| **JS bundle**           | 663,403 B | 663,403 B | **0**     |
| **CSS bundle**          | 29,625 B  | 29,625 B  | **0**     |
| `out/`                  | 88,324 KB | 91,324 KB | +3,000 KB |

Both bundle figures byte-identical: **no visualization framework, no charging calculator, no new
CSS rule.**

## 6. Mutation proofs

Eight mutations applied to real source files. Every one was confirmed to have modified the
intended content — a Python assertion aborts if the anchor is not found — and the failure read
before acceptance. Each reverted, tree confirmed clean. No exit codes masked.

| #   | Mutation                                                                           | Expected | Observed                                                                     |
| --- | ---------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------- |
| M1  | Remove Kenya's sources from the independence page                                  | FAIL     | FAIL — `discusses Kenya with no source scoped to or naming it`               |
| M2  | "Once charged, the offender has been identified by the state"                      | FAIL     | FAIL — guilt-implying language pattern                                       |
| M3  | "Prosecutors everywhere ask whether there is a realistic prospect of conviction"   | FAIL     | FAIL — 2 tests: the attribution check and the universal-charging prohibition |
| M4  | Retitle "Hierarchy is not political control" → "Hierarchy means political control" | FAIL     | FAIL — 2 tests: the required statement and the political-control prohibition |
| M5  | Flatten the Ministério Público into "Brazilian district attorneys"                 | FAIL     | FAIL — 2 tests: the wider-remit requirement and the flattening prohibition   |
| M6  | "Prosecutors never investigate directly"                                           | FAIL     | **Initially PASSED — see below**                                             |
| M7  | "Prosecutorial independence means an absence of accountability"                    | FAIL     | FAIL — the required distinction disappeared                                  |
| M8  | Give a page the prosecutor profession's question                                   | FAIL     | FAIL — `restates a profession question`                                      |

### M6 found a real gap, and was not accepted until it failed

M6 applied cleanly and the suite passed. There was no assertion forbidding the claim that
prosecutors do not investigate — which contradicts the site's own Wave 8 material: § 160 StPO
places legal responsibility for the German investigation on the prosecution, CPP Art. 12 has the
French police judiciaire exercised under the direction of the procureur, and a Japanese public
prosecutor may investigate an offence himself.

Worse, the cluster was nearly silent on the point: the only acknowledgement was a clause inside a
misconception. A prosecution cluster implying investigation is always someone else's work would
have contradicted four of this site's own sourced pages.

A positive acknowledgement was added to `why-public-prosecution-exists`, two guards were added,
and M6 was re-run and observed failing for its intended reason. This is the second consecutive
wave in which a mutation proof exposed a missing test rather than confirming an existing one.

## 7. Adversarial QA

The twenty-one questions were run against all eight new pages and the corrected foundational one.

| #   | Finding                                                                                                                                                                                                                                                  | Severity | Resolution                                                                                                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Two pages named a country with no scoped source — Nigeria, France                                                                                                                                                                                        | **P1**   | Genuine omissions; sources added                                                                                                                                                                        |
| 2   | **`Misconception.reality` renders as plain text, not through the internal-link resolver.** Two markdown links in new content — and **one pre-existing link in a law-enforcement guide** — were reaching readers as raw `[text](/url)` syntax on the page | **P1**   | All three rewritten; the Wave 8 link moved to a prose block where it resolves; a corpus-wide test added forbidding markdown in misconception fields, with a non-vacuity check                           |
| 3   | **Four brief-named jurisdictions with verified prosecution modules were unused — Australia, Canada, Switzerland, Japan — and an uncertainty note wrongly stated three of them "were not researched"**                                                    | **P1**   | All four added to the organisation page, Japan's charging discretion added to the discretion page, the false note corrected, sources added, and the coverage locked by test                             |
| 4   | Mutation proof M6 initially passed against applied content                                                                                                                                                                                               | **P1**   | Rejected, gap closed, re-run and observed failing                                                                                                                                                       |
| 5   | Germany carries 41 mentions against France's 9 and Ireland's 5                                                                                                                                                                                           | P3       | Recorded, not "fixed". Germany is the only system in this corpus with primary charging provisions, and the pages say so in their uncertainty notes rather than padding other countries to look balanced |

All P1 findings fixed. No P0. P3 recorded honestly above.

Questions returning clean on first pass: no legal-advice or prosecution-tactics phrasing anywhere;
every use of "offender" is either the code comment stating the rule, the official title of the UN
Congress on the _Treatment of Offenders_, or the sentence stating the editorial rule itself; the
formal-versus-empirical distinction appears 19 times; no defence-cluster material; no political
characterisation of any prosecution service.

## 8. The two standing rules, and how they are enforced

**A charge is not a finding.** Seven language patterns are forbidden across the cluster, each
proved live against a fixture sentence that must match it — so a typo cannot silently disable one.
The presumption page states the terminology rule the cluster follows and uses _suspect_, _accused_,
_defendant_ and _convicted person_ according to stage.

**A provision establishes an arrangement, never a performance.** No country is described as having
an independent prosecution. Ireland's independence is reported as the office's own statement and
the page says that is a different claim from establishing it. France's and Germany's positions are
recorded as contested, and no page describes either as wholly independent of government or as
taking ministerial instructions in individual cases.

## 9. Neutrality and restricted claims

No prosecution system, appointment method or arrangement is ranked. No statistics added — no
conviction, charging, declination or plea rate, no backlog, no trust figure. Restricted-claim and
ScheduledChange counts unchanged at 10 and 4. No prosecution service is characterised politically.

## 10. Temporal integrity

No ScheduledChange record was added; nothing in this wave is a future enacted change. The German
provisions were read in their current consolidated form on 26 August 2026.

## 11. Limitations

- **Germany carries the comparative weight on charging** because it is the only system in this
  corpus with primary charging provisions. Ireland's, Kenya's, France's, Spain's and Brazil's
  charging tests were not established and are explicitly not described.
- The relationship between a prosecuting office and the government that appoints it is recorded as
  unresearched for Canada, Australia, Switzerland, Japan, Spain, Brazil and the United States, and
  is not described for any of them.
- Czechia, South Africa, Norway, Sweden, Denmark and Austria were named in the brief and are not
  used. Their prosecution modules were not read for this wave.
- Prosecutorial immunity, private prosecution, special prosecutors, prosecutors and victims, and
  plea agreements were all deferred for want of sourced comparative material.
