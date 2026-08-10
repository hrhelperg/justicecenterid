# Pre-deployment phase — QA record

**Branch:** `feat/law-enforcement-cluster-and-predeployment-ui`
**Base:** `main` at `777197d`
**Date:** 2026-08-10

Covers all four deliverables of the phase: the law-enforcement Wave 1 cluster, the consent
layer, the ecosystem banner, and the pre-deployment readiness work.

---

## 1. Repository gate

| Check                                     | Result                                             |
| ----------------------------------------- | -------------------------------------------------- |
| Repository is `hrhelperg/justicecenterid` | Confirmed via `git remote -v`                      |
| Remotes fetched                           | `git fetch --all --prune --tags`                   |
| Local `main` synchronised                 | Was 22 commits behind; fast-forwarded to `777197d` |
| Working tree clean at branch point        | Confirmed                                          |

**Substantive presence verified, not trusted from merge names.** Every prior branch was
tested with `git merge-base --is-ancestor`, and the subsystems were read directly:

| Subsystem                 | Evidence                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| Country dossiers          | 33 files in `src/content/dossiers/`                              |
| Route registry            | `src/content/public-routes.ts` → `src/lib/routes.ts`             |
| Source registry           | 220 records in `src/content/sources.ts`                          |
| Sitemap                   | `src/app/sitemap.ts`, 316 URLs at base                           |
| Output verifier           | `scripts/verify-output.mjs`, passing at base                     |
| Restricted claims         | `src/content/restricted-claims.ts` + 10 categories               |
| Scheduled changes         | `src/content/scheduled-changes.ts` + staleness gate              |
| Publication gates         | `src/content/publication-gate.ts` (+ country gate)               |
| Country-scaling framework | `feat/country-scaling-framework` confirmed an ancestor of `main` |

---

## 2. Law-enforcement Wave 1

92 candidates assessed → **4 published**, 20 merged, 63 deferred, 5 rejected. Full
reasoning in `docs/research/law-enforcement-cluster-plan.md`.

| Route                                                | Group                            |
| ---------------------------------------------------- | -------------------------------- |
| `/law-enforcement/police-use-of-force`               | Powers and limits                |
| `/law-enforcement/arrest-and-detention`              | Powers and limits (merged pair)  |
| `/law-enforcement/why-police-accountability-matters` | Accountability (parent)          |
| `/law-enforcement/how-police-are-held-to-account`    | Accountability (child, 6 merged) |

### Source integrity

Four sources added, all `content-confirmed`:
`un-code-of-conduct-1979`, `unodc-e4j-use-of-force`, `unodc-e4j-police-accountability`,
`uk-pace-1984`.

**A sourcing constraint shaped this wave and is disclosed on the pages themselves.** The
two central instruments — the 1979 Code of Conduct and the 1990 Basic Principles — are
published by OHCHR, which returns **HTTP 403** to automated requests, as do
`echr.coe.int` and `rm.coe.int`. The registry's standing rule is that a document whose
identity could not be confirmed is not listed, so those pages are absent. The instruments
are instead cited through a UNODC module that quotes them verbatim and was read directly;
each page's `uncertainty` field says so, and a test enforces the disclosure.

### Editorial checks

| Check                                                 | Method           | Result |
| ----------------------------------------------------- | ---------------- | ------ |
| Jurisdiction-sensitive pages carry a scope callout    | test             | Pass   |
| …state "not legal advice"                             | test             | Pass   |
| …record in `uncertainty` that thresholds are domestic | test             | Pass   |
| No US-bound term of art in any Wave 1 prose           | test (6 terms)   | Pass   |
| National statute cited with an explicit scope limit   | test             | Pass   |
| No banned superlative or promotional phrasing         | test (8 phrases) | Pass   |
| Every factual paragraph carries block-level citations | test             | Pass   |
| Site voice separated from sourced fact                | test             | Pass   |
| No effectiveness claim without a source               | test             | Pass   |
| No route for any rejected/deferred candidate          | test (11 paths)  | Pass   |
| Links outward to country dossiers and other sections  | test             | Pass   |

---

## 3. Test results

```
npm test          53 files, 2219 tests   PASS   (base: 48 files, 2017 tests)
npm run test:e2e  158 tests, 4 skipped   PASS   (desktop-chromium + mobile-chromium)
npm run typecheck                        PASS
npm run lint                             PASS
npm run format:check                     PASS
npm run build                            PASS
npm run verify:output                    PASS — 320 routes, 322 pages, 320 sitemap URLs
```

New suites: `tests/unit/layers.test.ts`, `tests/unit/csp.test.ts`,
`tests/unit/consent.test.ts`, `tests/content/ecosystem.test.ts`,
`tests/content/law-enforcement-cluster.test.ts`, `e2e/global-layers.spec.ts`.

---

## 4. Defects found and fixed during this phase

Three, all found by the new tests rather than by inspection.

### D1 — Ecosystem rail overflowed the document at 200% text size (fixed)

**Severity: high.** 51px of horizontal scroll on every page, breaking WCAG 2.2 SC 1.4.4
and 1.4.10 sitewide — the same class of regression the France pilot previously fixed for
the primary navigation.

**Cause:** the rail is hidden below the `nav` breakpoint, and the assumption was that at
200% text the breakpoint would also scale and keep it hidden. It does not. **A CSS media
query resolves `rem` against the browser's initial font size, not the root element's
computed size**, so the breakpoint never moves and the rail rendered at double size.

**Fix:** the rail wraps (`flex-wrap` + `min-w-0`) instead of being hidden at a larger
breakpoint, which would have failed for the same reason. Wrapping keeps every node visible
and focusable; clipping with `overflow-hidden` would have traded a reflow failure for a
focus-visibility one. Regression test added at 320px, 320px-with-drawer-open, and 200%.

The same misconception had already produced a second latent bug — a hard-coded header
offset would have covered the ecosystem controls at 200% — which is why the bar and header
share one sticky wrapper.

### D2 — `netlify.toml` claimed a test that did not exist (fixed)

`netlify.toml` has asserted since the foundation phase that _"tests/unit/csp.test.ts
asserts this directive against the inline scripts the build actually emits, so the two
cannot drift apart again."_ **That file did not exist.** The claim was written, the test
was not. It now exists and asserts the full policy, including that no fetch directive
names an external origin.

### D3 — `/privacy` became inaccurate the moment consent shipped (fixed)

The page stated the site _"stores nothing in your browser's local storage"_. Once a reader
can record a consent preference, that is false. The _Cookies and local storage_ section was
rewritten to state exactly what may be stored (`jcid-consent`), what it contains, that
nothing is written until the reader acts, and how to remove it. The ecosystem bar's
outbound links are also now disclosed under _Third-party services_.

A fourth, cosmetic issue was found and fixed: a doc comment naming a Tailwind utility
caused a dead `z-index: 50` rule to be emitted, because Tailwind scans source files as
plain text for class candidates.

---

## 5. Accessibility

WCAG 2.2 AA maintained. Browser-verified unless noted.

| Check                                               | Result                                             |
| --------------------------------------------------- | -------------------------------------------------- |
| Skip link is the first focusable control            | Pass                                               |
| Skip link visible above the ecosystem bar           | Pass — moved to the top layer                      |
| Skip link moves focus to `<main>`                   | Pass                                               |
| Drawer: `role="dialog"`, `aria-modal`, labelled     | Pass                                               |
| Drawer: focus moved in on open                      | Pass                                               |
| Drawer: `Tab` trapped (40 presses)                  | Pass                                               |
| Drawer: `Escape` closes                             | Pass                                               |
| Drawer: focus returns to trigger                    | Pass                                               |
| Drawer: keyboard-only operation                     | Pass                                               |
| `aria-expanded` on both disclosures                 | Pass                                               |
| Preferences: dialog semantics, Escape, focus return | Pass                                               |
| Necessary checkbox checked and disabled             | Pass                                               |
| Optional categories unchecked by default            | Pass                                               |
| Accept and Reject comparable in size                | Pass — bounding boxes compared                     |
| Body scroll restored after both overlays            | Pass                                               |
| No horizontal overflow at 320px                     | Pass                                               |
| No horizontal overflow at 320px with drawer open    | Pass                                               |
| No horizontal overflow at 200% text                 | Pass (after D1)                                    |
| Header does not cover ecosystem controls at 200%    | Pass                                               |
| Sticky chrome reserves its space                    | Pass — bounding boxes compared                     |
| Touch targets ≥ 44px on interactive controls        | `min-h-11` on all dialog controls                  |
| Safe-area insets                                    | `env(safe-area-inset-*)` on both dialogs           |
| Reduced motion                                      | Inherited global rule; no new animation added      |
| Contrast                                            | `tests/unit/contrast.test.ts`, 28 assertions, pass |

**Combination states tested:** ecosystem open + cookie closed; ecosystem closed + cookie
open; ecosystem open then cookie opened (coordinator closes the first); consent stored;
consent absent.

---

## 6. Performance

Measured on identical builds of the same repository.

| Metric                              | Before (`777197d`) | After     | Delta                 |
| ----------------------------------- | ------------------ | --------- | --------------------- |
| Shared JS (all `_next/static/*.js`) | 638,963 B          | 663,309 B | **+24,346 B (+3.8%)** |
| CSS                                 | 27,018 B           | 29,481 B  | +2,463 B (+9.1%)      |
| HTML files                          | 318                | 322       | +4                    |
| Routes                              | 316                | 320       | +4                    |

The JS increase is two client islands plus the 29-record registry, landing once in a chunk
served under `Cache-Control: immutable`. Article content remains server-rendered; no page
gained a client component beyond the two global islands.

An intermediate implementation passing the registry as a prop was measured at 652,141 B JS
but **78 MB** of static output; importing it instead moved 11 KB into the cached chunk and
removed ~8 MB from `out/`. See `docs/architecture/ecosystem-banner.md` §3.

---

## 7. Static HTTP matrix

Served from `out/` with `serve` and no SPA fallback.

| Path                                                    | Status  | Canonical                     |
| ------------------------------------------------------- | ------- | ----------------------------- |
| `/`                                                     | 200     | `https://justicecenterid.com` |
| `/law-enforcement`                                      | 200     | apex, no trailing slash       |
| All four new cluster routes                             | 200     | apex, correct per-page        |
| `/countries/united-states`, `/france`, `/japan`         | 200     | correct                       |
| `/countries/france/law-enforcement`                     | 200     | correct                       |
| `/privacy`, `/terms`, `/about`                          | 200     | correct                       |
| `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/llms.txt` | 200     | —                             |
| `/law-enforcement/probable-cause` (rejected)            | **404** | no SPA fallback               |
| `/law-enforcement/stop-and-search` (deferred)           | **404** |                               |
| `/law-enforcement/gendarmerie` (deferred)               | **404** |                               |
| `/ecosystem` (not created)                              | **404** |                               |
| `/cookie-policy` (not created)                          | **404** |                               |
| `/countries/france/corrections` (deferred module)       | **404** |                               |
| `/nope`                                                 | **404** |                               |

Ecosystem bar present in served HTML; consent banner correctly absent; `Cookie settings`
present; source panels render; hashed assets return 200.

---

## 8. Security

- CSP unchanged and **not weakened**. No external origin added; `connect-src` stays
  `'self'`. `localStorage` requires no directive, and both islands load nothing remote.
- `tests/unit/csp.test.ts` now pins the policy, including the absence of
  `'unsafe-eval'` and of any external fetch origin.
- External ecosystem links use `rel="noopener noreferrer"`; asserted for every drawer link
  in the browser suite.
- No `dangerouslySetInnerHTML` introduced; no user input is rendered.
- `Strict-Transport-Security` still deliberately unset until the domain is confirmed
  HTTPS-only — asserted as a header _assignment_ rather than as a substring, so the
  explanatory comment cannot satisfy the test.

---

## 9. Known limitations

1. **Wave 1 published 4 pages, not the 30–45 the brief targeted.** The count was
   evidence-driven and the evidence pushed it down; the four reasons are documented in the
   cluster plan §5 and summarised in the phase report. Deferred candidates are individually
   classified with the blocker each must clear.
2. **The two central UN instruments are cited second-hand** through UNODC, because their
   publisher blocks automated access. Disclosed on every affected page and enforced by test.
3. **No `/ecosystem` page and no `/cookie-policy` page.** Both were assessed and neither is
   justified by current data; the trigger for revisiting each is recorded.
4. **`justicecenterid.com` did not resolve during verification**, because the site is not
   deployed. The current product is therefore the one `unverified` record in the registry.
5. **Institution types and professions remain unrouted.** This is the largest single
   opportunity found during the phase and is the recommended Wave 2 opening.
