# Foundation adversarial audit

## 1. Executive conclusion

**Verdict: ready with minor limitations — after the fixes in this branch.**

The merged foundation is substantially what the implementation report claimed. Versions,
static-export behaviour, route counts, sitemap, generated endpoints, content-model enums,
source discipline, and the absence of third-party scripts, server functions, and invented
operator values all verified true by direct inspection of the artefact rather than the report.

It also shipped **one defect that would have broken the deployed site**, which no existing test
could see:

> The committed Netlify CSP declared `script-src 'self'`. Next.js inlines its bootstrap and RSC
> flight payload into every prerendered page — **755 executable inline `<script>` elements**
> across the 40 exported pages, none carrying a nonce or hash. On Netlify the browser would
> block every one: React never hydrates, the mobile navigation panel is dead, and the console
> fills with CSP violations. The prerendered HTML still renders and every link still works, so
> the failure is silent. Playwright could not detect it because `npx serve` applies no headers
> from `netlify.toml`.

That is fixed, and a check now derives the requirement from the real build output so the two
cannot drift apart again.

Three further defects were confirmed and fixed: an `Organization` logo referenced on all 40
pages that pointed at a file which did not exist; a home page shipping `<title>Understanding
Justice Worldwide</title>` with no brand in it; and a skip link that moved scroll but not
keyboard focus while its own test claimed to check focus.

Nothing found is an architectural dead end. The content model and route architecture can carry
the country pilots. **Country pilots may proceed**, subject to the four preconditions in §12.

## 2. Audit date

2026-07-24.

## 3. Audited commit

```
e7905dff8dc3875e203f1f8d398ce928a4daaeec
Merge pull request #1 from hrhelperg/feat/foundation-and-platform-architecture
```

Repository confirmed as `hrhelperg/justicecenterid` via `git remote -v`. Local `main`
fast-forwarded 11 commits to `origin/main`; working tree clean before any change. Audit branch
`audit/foundation-adversarial-qa` created from that commit.

## 4. Scope

All 16 dimensions of the audit brief: claim-to-code, technical architecture, static
export/Netlify, routing and IA, content model, editorial and factual (three independent passes),
sources and citations, SEO, structured data, accessibility, design and trust, performance and
build, test quality, security and content safety, and documentation.

Out of scope by instruction, and **not** done: new countries, content batches, search,
analytics, localisation, auth, CMS, redesign, deployment, Netlify connection, DNS.

## 5. Methods

- Clean `npm ci`; versions read from `node_modules/*/package.json`, not from `package.json`
  ranges.
- Full production build; `out/` snapshotted byte-for-byte before any modification so
  "file is missing" claims could be re-checked against the true baseline.
- **16 independent dimension audits run in parallel**, each grounded in file:line evidence or
  literal command output, producing **190 raw findings**.
- **Every finding then attacked by three independent verifiers** with distinct lenses:
  reproduce-the-evidence, attack-severity-and-scope, and hunt-for-counter-evidence-elsewhere.
  Verifiers defaulted to refuting. A finding survived only if a majority failed to refute it.
  **380 verdicts returned before the run hit an account spend limit** (see §11).
- **Every finding acted on in this branch was then re-verified by hand**, independently of the
  fleet. Nothing was fixed on an agent's word alone.
- Direct static HTTP matrix against `out/` served **without SPA fallback**.
- Real-browser verification with Playwright, including negative tests that reintroduce each
  defect to prove the new checks actually fail.
- All 14 source URLs requested live.

## 6. Claim-to-code verification matrix

| #   | Claim                                                   | Actual                                                                                                                                                                         | Verdict                  |
| --- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| 1   | Next.js 16 App Router                                   | `next@16.2.11`                                                                                                                                                                 | ✅                       |
| 2   | React 19                                                | `react@19.2.4`, `react-dom@19.2.4`                                                                                                                                             | ✅                       |
| 3   | Strict TypeScript                                       | `typescript@5.9.3`, `strict: true` **plus** `noUncheckedIndexedAccess`, `noImplicitOverride`, `noFallthroughCasesInSwitch`, `verbatimModuleSyntax`, `isolatedModules`          | ✅ stricter than claimed |
| 4   | Tailwind v4                                             | `tailwindcss@4.3.3`; tokens verified to compile into the shipped CSS                                                                                                           | ✅                       |
| 5   | Full static export to `out/`                            | `output: 'export'`; build reports only ○/● routes, no ƒ; no server artefacts in `out/_next`                                                                                    | ✅                       |
| 6   | 38 public routes                                        | 38 registered; 40 exported HTML (38 + `404.html` + `_not-found.html`)                                                                                                          | ✅                       |
| 7   | Sitemap                                                 | exactly 38 `<loc>`, apex host, no trailing slashes                                                                                                                             | ✅                       |
| 8   | robots.txt                                              | `Allow: /` + sitemap line                                                                                                                                                      | ✅                       |
| 9   | feed.xml                                                | valid RSS 2.0, 12 items                                                                                                                                                        | ✅                       |
| 10  | llms.txt                                                | present; states non-affiliation and no-legal-advice                                                                                                                            | ✅                       |
| 11  | JSON-LD                                                 | `Organization`, `WebSite`, `WebPage`, `CollectionPage`, `Article`, `BreadcrumbList`, `DefinedTerm(Set)`, `AboutPage`, `ContactPage`, `ImageObject`, `ListItem`, `CreativeWork` | ✅                       |
| 12  | No prohibited schema types                              | zero `GovernmentOrganization`, `GovernmentService`, `LegalService`, `Attorney`, `PoliceStation`, `FAQPage`, `HowTo`, `AggregateRating`, `Review`                               | ✅                       |
| 13  | Typed content model                                     | 13 enum groups in `src/content/types.ts`                                                                                                                                       | ✅                       |
| 14  | Source records                                          | 14 records; 14 with URL; **14/14 with `verifiedOn`**; 14/14 HTTP 200 live                                                                                                      | ✅                       |
| 15  | 12 guides                                               | 12, all `published` + `fact-checked`                                                                                                                                           | ✅                       |
| 16  | Country records planned-only                            | 16 records, all `coverage: 'planned'`, all narrative fields empty and test-enforced                                                                                            | ✅                       |
| 17  | Vitest + Playwright                                     | 333 unit/content tests, 100 Playwright tests (96 pass, 4 project-gated skips)                                                                                                  | ✅                       |
| 18  | Netlify build config                                    | `command = "npm run build"`, `publish = "out"`                                                                                                                                 | ✅                       |
| 19  | No server functions / runtime APIs                      | no `middleware.ts`, no `app/api`, no `process.env`/`next/headers` in `src`                                                                                                     | ✅                       |
| 20  | No third-party scripts/fonts                            | only self-hosted `/_next` chunks; zero `@font-face`; zero external `url()`                                                                                                     | ✅                       |
| 21  | No invented contact/operator values                     | `SITE.contact.email` and `SITE.operator` are literal `null`; zero email/phone/company-suffix matches in `src`, `docs`, or exported HTML                                        | ✅                       |
| 22  | **"No inline JavaScript beyond hashed bundles"**        | **755 executable inline `<script>` elements across 40 pages**                                                                                                                  | ❌ **false — P0**        |
| 23  | **"Build-time generated Open Graph card"**              | **no OG image exists**; `twitter:card` was `summary_large_image` with no image                                                                                                 | ❌ false                 |
| 24  | **`Organization.logo` → `/wordmark.svg`**               | **file did not exist**; no `public/` directory at all; no favicon either                                                                                                       | ❌ false — P1            |
| 25  | **Home title follows the brand template**               | shipped `<title>Understanding Justice Worldwide</title>`                                                                                                                       | ❌ false — P1            |
| 26  | **"No client component may import from `src/content`"** | violated transitively: `SiteNav` → `lib/navigation` → `content/sections`, putting the whole section registry in a 30 KB client chunk                                           | ❌ false — P1            |
| 27  | **Skip link "moves focus to main"**                     | moved scroll only; `<main>` had no `tabIndex`                                                                                                                                  | ❌ false — P1            |
| 28  | Contrast table "cannot drift from the implementation"   | test reads real tokens from `globals.css` (**not** circular), but did not cover every documented pair                                                                          | ⚠️ partly false          |

## 7. Findings by severity

Counts are **findings acted on or formally accepted**, after hand re-verification — not the 190
raw agent claims, most of which were duplicates across dimensions, refuted, or out of scope.

### P0 — one, fixed

**P0-1 · Deployed CSP blocks all hydration.** `netlify.toml` declared `script-src 'self'`; the
build emits 755 executable inline scripts with no nonce or hash. Independently confirmed by
three separate audit dimensions and then by hand.

_Evidence:_ `netlify.toml:54` (original) vs. parsing every `<script>` in `out/`.
_Fix:_ `script-src 'self' 'unsafe-inline'`, with the reasoning, the bounded-risk argument, and
a reversal criterion recorded inline in `netlify.toml`. Under `output: 'export'` there is no
server to mint a nonce, and the inline payload is build-specific so hashes would change every
build and silently start blocking again.
_Regression guard:_ `scripts/verify-output.mjs` §7 counts real inline scripts and fails if the
CSP does not permit them. **Proven non-vacuous**: reverting the CSP makes it exit 1 with
`the exported output contains 755 executable inline <script> elements…`.

### P1 — five, all fixed

| ID   | Finding                                                                                                              | Fix                                                                                                                                                            | Guard                                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1-1 | `Organization.logo` on all 40 pages pointed at `/wordmark.svg`, which did not exist; no `public/` dir; no favicon    | Authored `public/wordmark.svg` (typographic, no seal/crest/shield, per the image policy) and `src/app/icon.svg`                                                | `verify-output.mjs` §8 — fails if any referenced same-origin asset is missing. Proven by removing the file: _"40 page(s) reference /wordmark.svg"_             |
| P1-2 | Home page title carried no brand                                                                                     | `HOME_TITLE` shared by root metadata and the page; new `absoluteTitle` flag, because Next does not apply a layout's `title.template` to its own segment's page | existing title test                                                                                                                                            |
| P1-3 | Skip link did not move keyboard focus                                                                                | `tabIndex={-1}` on `<main id="main">`                                                                                                                          | e2e strengthened to assert `toBeFocused()` **and** that the next Tab lands inside main. **Proven**: reverting the fix fails with `unexpected value "inactive"` |
| P1-4 | Whole section content registry shipped in a 30 KB client chunk, violating a documented rule and a false code comment | `isActivePath` moved to content-free `lib/active-path`; header passes `PRIMARY_NAV` as a prop                                                                  | verified absent from client chunks post-build                                                                                                                  |
| P1-5 | `countriesResearched: 0` hand-written in `SITE_STATS`, directly under a comment forbidding hand-written counts       | derived from `COUNTRIES` coverage state; added `countriesTracked`                                                                                              | —                                                                                                                                                              |

### P2 — four, fixed

- **Glossary asserted per-term source links it did not render**, and hardcoded a `Fact-checked`
  badge on every entry regardless of `review`. Both now derived from the term record; the page's
  claim is now true. (Raised as P0 by one dimension; downgraded on hand-verification — all 32
  terms genuinely are `fact-checked`, so the badge was accurate-but-fragile rather than false.)
- **28 paragraph-level citations were unvalidated.** All resolve and all already appear in their
  guide's rendered source list, so **nothing was hidden from readers** — the widely-reported
  "citations discarded" framing was overstated. The real gap was the missing invariant; two
  tests now enforce it, plus a third that fails if the set ever empties and makes them vacuous.
- **Manufactured date uncertainty on the ICCPR timeline entry** — see the source register.
- **Documented contrast pair not covered by the contrast test**, contradicting the document's own
  "cannot drift" claim; pair added, and a documented `5.53` corrected to the measured `5.52`.

### P3 — noted, not changed

- 286 RSC `.txt` payloads totalling **3.96 MB against 2.49 MB of HTML** — the export footprint is
  roughly doubled, and every page's content is embedded twice (once as HTML, once as flight
  data). This is Next's functional client-navigation payload, not dead weight. Recorded, not
  "fixed".
- `reuseExistingServer: !process.env.CI` means a stale local server could serve an older build.
  CI is unaffected. Accepted.
- The `focus is visible` e2e test uses a loosely-anchored accessible-name selector that matches a
  footer link rather than the page under test. Harmless today; worth tightening later.

## 8. Exact evidence

Reproducible commands are recorded in the fix commits. Key artefacts:

```
$ node scripts/verify-output.mjs
Checked 38 routes and 40 exported pages.
  · sitemap lists 38 URLs
  · CSP script-src permits the 755 inline scripts the build emits
  · every same-origin asset referenced by the output exists
✓ Exported output matches the route registry.
```

Static hosting, `out/` served **without** SPA fallback:

| Path                                                                                  | Status    |
| ------------------------------------------------------------------------------------- | --------- |
| `/`, `/justice`, `/justice/`, `/justice/what-is-justice`, `/glossary`, `/sources`     | 200       |
| `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/llms.txt`, `/wordmark.svg`, `/icon.svg` | 200       |
| `/index.html`                                                                         | 301 → `/` |
| `/this-route-does-not-exist`, `/justice/nope`, `/countries/ie`                        | **404**   |

The 404s are the important line: **no catch-all rewrite masks missing exported files**, and
`404.html` is served with the correct title. `netlify.toml` contains exactly one redirect
(`www` → apex, 301, forced) and no rewrites.

**Honest caveat:** `/JUSTICE` returned 200 and `/justice%2Fwhat-is-justice` returned 200 in local
testing. Both are artefacts of a case-insensitive macOS filesystem and `serve`'s URL decoding.
They are **not** evidence about Netlify's case-sensitive CDN and are not reported as passes.

## 9. Fixes applied

| Area                   | Files                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CSP (P0)               | `netlify.toml`                                                                                                                 |
| Output verification    | `scripts/verify-output.mjs` (+ CSP check, + missing-asset check)                                                               |
| Missing assets         | `public/wordmark.svg`, `src/app/icon.svg`                                                                                      |
| Metadata               | `src/lib/metadata.ts`, `src/app/page.tsx`                                                                                      |
| Accessibility          | `src/components/layout/SiteShell.tsx`                                                                                          |
| Client-bundle boundary | `src/lib/active-path.ts`, `src/lib/navigation.ts`, `src/components/layout/SiteNav.tsx`, `src/components/layout/SiteHeader.tsx` |
| Derived statistics     | `src/lib/content.ts`                                                                                                           |
| Glossary honesty       | `src/app/glossary/page.tsx`, `src/components/content/ReviewMeta.tsx`                                                           |
| Content accuracy       | `src/content/timeline.ts`                                                                                                      |
| Tests                  | `tests/content/references.test.ts`, `tests/unit/contrast.test.ts`, `e2e/accessibility.spec.ts`                                 |
| Documentation          | `docs/seo/seo-architecture.md`, `docs/architecture/technical-architecture.md`, `docs/design/design-system.md`                  |

## 10. Unresolved findings

1. **Verification of the 190-finding set is incomplete.** The parallel run hit an account spend
   limit after 380 of ~570 verdicts. All findings acted on here were hand-verified, but a tail
   of lower-severity claims — mostly editorial phrasing and doc-drift — was never adjudicated.
   The raw set is preserved in the workflow journal.
2. **Adoption-date citation for the ICCPR.** The entry is now accurate, but GA resolution
   2200A (XXI) is not yet a source record.
3. **Sub-national jurisdiction modelling.** `CountryProfile` has no representation for federal
   vs. regional divergence. Not a defect today (no country is researched) but a real constraint
   for federal-state pilots — see §12.
4. **No automated source re-verification / link-rot detection.** Manual and scheduled.
5. **Netlify trailing-slash behaviour is inferred, not observed.** Canonicals are consistently
   slashless and the export is flat `.html`, but the exact `/justice/` behaviour on Netlify's CDN
   cannot be confirmed without deploying, which is out of scope.

## 11. Accepted limitations

- `script-src 'unsafe-inline'` is a genuine weakening, accepted because static export offers no
  nonce and hashes are build-unstable. Bounded: no user input, no query-driven rendering, no
  third-party script, no dynamic HTML. Reversal criterion recorded in `netlify.toml`.
- No Open Graph image. `twitter:card` is now `summary`, which is honest, rather than
  `summary_large_image` pointing at nothing.
- Doubled export footprint from RSC payloads.
- Local static-server behaviour differs from Netlify in case sensitivity and URL decoding.

## 12. Country-pilot readiness decision

**Proceed — with four preconditions.**

The route architecture is sound for pilots. `/countries/[country]` and its module children do
**not** collide with the top-level sections: guides live at `/{section}/{slug}` under static
section folders, and country modules sit two levels deeper under a distinct parent. The
`coverage` ceiling is real and test-enforced, so an unresearched country cannot leak narrative
claims.

Before the first pilot:

1. **Decide sub-national representation** (finding §10.3) _before_ choosing a federal country, or
   choose a unitary state first. Retrofitting this after country pages exist is far more costly.
2. **Confirm module slugs against top-level section names.** `/countries/ie/law-enforcement` and
   `/law-enforcement` are distinct routes but share vocabulary; breadcrumbs and internal-link
   text must make the scope obvious to a reader who lands on either from search.
3. **Extend `verify-output.mjs`'s route derivation** before country routes exist. It re-derives
   routes by regex-parsing TypeScript source. Its bidirectional check means drift surfaces as an
   "unexpected export" rather than silently passing, so it is not the "verifies nothing" hazard
   it was reported to be — but a per-country × per-module matrix is materially harder to parse
   than the current flat list, and it should import the registry instead.
4. **Add a country-level source-tier rule.** The nine restricted claim types (crime levels,
   corruption, effectiveness, public trust, officer mortality, staffing, political control,
   human-rights performance, salaries) are policy today but have no automated check. Country
   pages are exactly where they will first be tempting.

## 13. Recommended next phase

**One unitary-state country pilot, depth-first, behind the coverage gate**, before any second
country. Sequence: settle §12.1–§12.4 → research one country to `partial` → build only the
modules actually researched → re-run this audit's checks against the result → only then
generalise. The scaling risk here is not technical; it is the temptation to template a second
country from the first before the first has been reviewed.
