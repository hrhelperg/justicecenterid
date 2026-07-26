# Country scaling framework — QA

Verification record for the country-scaling framework, branch `feat/country-scaling-framework`
off `main` at `93e6aec`. Companion to `country-scaling-baseline.md` and
`ten-country-consistency-audit.md`.

## Verdict: ready with minor limitations

The framework is complete, validated, and preserves all existing public behaviour. The minor
limitations are documented below (multilingual name tagging; the demonym map retained for the ten
pilots) — none blocks use, and none is a regression.

## Validation results (all executed on this branch)

| Check              | Command                                   | Result                                                                      |
| ------------------ | ----------------------------------------- | --------------------------------------------------------------------------- |
| Format             | `npm run format:check`                    | pass                                                                        |
| Lint               | `npm run lint`                            | pass                                                                        |
| Types              | `npm run typecheck`                       | pass                                                                        |
| Unit tests         | `npm test`                                | **1081 passed / 26 files** (was 972 / 22)                                   |
| Build              | `npm run build`                           | pass — 120 pages                                                            |
| Output verify      | `npm run verify:output`                   | **118 routes / 118 sitemap / 120 pages**                                    |
| E2E                | `npm run test:e2e`                        | **98 passed, 4 skipped** (smoke + accessibility, desktop + mobile Chromium) |
| Scaffold dry-run   | `npm run scaffold:country -- … --dry-run` | plans 5 files, writes nothing; rejects duplicates/collisions/`--publish`    |
| Static HTTP matrix | `serve out/` (no SPA fallback)            | see below                                                                   |

`npm run validate` (the composite gate) exits 0.

## Route, canonical, and sitemap stability

The public surface is **unchanged** from baseline — the framework adds tooling, tests, docs, and
fixes, not routes:

| Metric                       | Baseline (`93e6aec`) | This branch |
| ---------------------------- | -------------------- | ----------- |
| Public routes                | 118                  | 118         |
| Sitemap URLs                 | 118                  | 118         |
| Exported pages               | 120                  | 120         |
| Country hubs / module routes | 10 / 70              | 10 / 70     |

No canonical changed. The `/countries` page content changed (F2/F3 fixes) but its URL, and every
country route and canonical, are identical.

## Static HTTP route matrix (served `out/`, no `--single`)

| Class             | Example                                                       | Expected | Actual |
| ----------------- | ------------------------------------------------------------- | -------- | ------ |
| Country hub       | all ten `/countries/<slug>`                                   | 200      | 200    |
| Published module  | `/countries/germany/justice-system`                           | 200      | 200    |
| Deferred module   | `/countries/france/corrections`                               | 404      | 404    |
| Two-letter alias  | `/countries/fr`, `/countries/de`                              | 404      | 404    |
| Sub-national slug | `/countries/germany/bavaria`, `/countries/switzerland/zurich` | 404      | 404    |
| Scaffold fixture  | `/countries/exampleland`                                      | 404      | 404    |
| Nonexistent       | `/countries/nonexistent`                                      | 404      | 404    |
| Old routes        | `/`, `/law-enforcement`, `/glossary`                          | 200      | 200    |

404s are genuine (the 404 page), not an SPA fallback. Netlify CDN behaviour is not asserted here —
no deployment was made.

## Client-bundle before/after (Part K)

Measured from `out/_next/static`. **Unchanged** — the framework added zero client bytes:

|                          | Baseline | This branch |
| ------------------------ | -------- | ----------- |
| Client JS (uncompressed) | 624 KB   | 624 KB      |
| Client JS (gzipped)      | 187 KB   | 187 KB      |
| Client CSS               | 26 KB    | 26 KB       |
| Total `_next/static`     | 772 KB   | 772 KB      |

The publication gate, placeholder detector, scaffold, and metrics script are test/tooling code,
imported by no page. The sole client component (`SiteNav`) imports none of the content layer,
gate, placeholder, or scaffold — the country content registries stay server-side (RSC). Verified
by import scan.

## Reusable UI audit (Part K)

| Component                                                    | Reusable? | Country assumptions                                                | Verdict                                                                                           |
| ------------------------------------------------------------ | --------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `CountryHub` / `CountryModulePage`                           | Yes       | Held two — a hardcoded table caption (F1) and the demonym map (F4) | Fixed: caption derives from `dossier.name`; demonym is dossier data with the map as fallback      |
| `IndependenceNotice`                                         | Yes       | Demonym via prop                                                   | Correct — prop-driven                                                                             |
| `ModuleNav`, `NotResearched`, `RelatedGuides`, `Uncertainty` | Yes       | None                                                               | Genuinely reusable                                                                                |
| Jurisdiction table                                           | Yes       | Was the F1 leak                                                    | Fixed; keeps `role="region"` + label + `tabIndex` (keyboard-reachable) + `<caption>` + `th scope` |
| `BlockRenderer` / `ScriptText`                               | Yes       | None (Japanese runs `lang`-tagged generically)                     | Correct                                                                                           |

No new component abstraction was created — the fixes were to existing shared components, which
already represent stable semantic patterns. No reusable-JSX-for-its-own-sake extraction.

## Accessibility (WCAG 2.2 AA, tested scope)

Automated (Playwright, desktop + mobile): landmarks with distinct accessible names, no
heading-level skips, no 320px horizontal overflow (incl. `/countries`), usable at 200% zoom,
mobile-nav focus management (open/Escape/restore), descriptive link text, `<html lang>` present.
All pass.

Manual inspection of the surface the framework changed — the jurisdiction table on a non-France
hub (`out/countries/germany.html`):

- `<caption class="sr-only">Functional scope of each modelled Germany jurisdiction</caption>` —
  now names the subject country (was "French" for every country: F1).
- The scroll region's `aria-label` names the same country; the two no longer contradict.
- 5 `<th scope="col">`, 4 `<th scope="row">`, one `<h1>`, skip link and `id="main"` present, and
  the region is keyboard-reachable (`tabIndex={0}` + `role="region"`).

**Documented limitation.** Multilingual institution names (e.g. Swiss `Tribunal fédéral`) are not
`lang`-tagged. They are Latin-script proper nouns, which WCAG 3.1.2 exempts; the load-bearing
non-Latin case (Japanese) _is_ tagged via `ScriptText`. Not changed.

## Findings and fixes (from the consistency audit)

| ID                                   | Severity | Fixed | Verified                                                                                             |
| ------------------------------------ | -------- | ----- | ---------------------------------------------------------------------------------------------------- |
| F1 caption leak                      | P2       | yes   | built HTML: caption names its own country on all ten hubs; semantic regression pins it               |
| F2 published-as-Planned + count      | P1       | yes   | `/countries` queue = the 10 unresearched countries; count "10 of 20"                                 |
| F3 module-registry drift + dead enum | P2       | yes   | model section names investigations/forensics; four dead ids removed; gate test guards the vocabulary |
| F4 demonym in component              | P3       | yes   | optional `independentBodyNoun`; component prefers it; output byte-identical for the ten              |

## Non-vacuity proofs (Part N)

The gate test injects six controlled defects into in-memory clones of real dossiers and asserts
each is caught (missing required module, no hub sources, placeholder residue, malformed restricted
claim, deferred-module-with-content, unregistered route), plus a scaffold skeleton that fails on
many counts at once. The registry is never mutated. The placeholder and scaffold suites likewise
assert both the positive (residue/clean prose) and negative (rejections) directions.

One additional **file-level** proof was run by hand and reverted: flipping the first
`review: 'fact-checked'` in `src/content/dossiers/germany.ts` to `'unreviewed'` (the
dossier-level review) made `country-publication-gate.test.ts` fail —
`expected [ 'the dossier is unreviewed' ] to deeply equal []` — and `git checkout` on the file
restored green (18 passed). This confirms the gate is wired to the real registry, not only to
synthetic clones.

## What the framework does NOT claim

- It does **not** verify facts. The gate checks that the structure required for honesty is
  present, never that a cited statute says what the page claims.
- The scaffold does **not** research, translate, or generate factual prose; it generates an
  unpublished, unmistakably-incomplete skeleton.
- No claim is made about Netlify production behaviour — nothing was deployed.
- Coverage is not complete: ten countries, with an honest, count-derived "10 of 20" on `/countries`.

## Recommended first production batch

Batch A (Northern and Western Europe) — see `docs/roadmap/country-expansion-batches.md`. It is the
lowest-risk way to add volume on well-documented civil-law ground and mostly exercises model reuse
before the harder decentralised and non-European systems. Each country is authored one at a time
through the workflow and gate; a batch is a planning grouping, not a bulk import.
