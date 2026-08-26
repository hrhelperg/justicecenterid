# Waves 12–15 — final QA and validation record

Branch `feat/knowledge-expansion-waves-12-15`. Written 2026-08-26.
Base SHA `6fedbe929f52cd90af9dc6f05b81cd50103646af`.

Per-wave detail lives in `docs/audits/knowledge-expansion-wave-{12,13,14}-qa.md` and the
research plans in `docs/research/`. This document records the programme-level gate.

## 1. Final validation gate — exact exit codes

Run from the final committed tree. Every command below was executed; none is reported from
memory, and the log is `scratchpad/final-gate.txt`.

| Check                  | Command                                               | Exit  |
| ---------------------- | ----------------------------------------------------- | ----- |
| Clean install          | `npm ci`                                              | **0** |
| Formatting             | `npm run format:check`                                | **0** |
| Lint                   | `npm run lint`                                        | **0** |
| TypeScript             | `npm run typecheck`                                   | **0** |
| Unit and content tests | `npm test`                                            | **0** |
| Production build       | `npm run build`                                       | **0** |
| Output verifier        | `npm run verify:output`                               | **0** |
| Static HTTP matrix     | `node scripts/route-matrix.mjs http://127.0.0.1:4173` | **0** |
| Playwright             | `npm run test:e2e`                                    | **0** |

Results: **4543 unit and content tests across 68 files**; **790 Playwright tests passed, 4
skipped, 0 failed** across 13 spec files; **route matrix 552/552** covering 421 registered
routes and 131 must-404 paths; **421 routes / 423 exported pages / 421 sitemap URLs**, with the
verifier confirming the export matches the registry.

Two checks failed on their first run and both were fixed rather than waived — see §3.

## 2. Programme performance comparison

Measured against the pre-Wave-12 baseline in
`docs/research/knowledge-expansion-waves-12-15-baseline.md`.

| Metric              | Baseline  | Final      | Δ              |
| ------------------- | --------- | ---------- | -------------- |
| Public routes       | 388       | 421        | **+33**        |
| Sitemap URLs        | 388       | 421        | **+33**        |
| Exported HTML pages | 390       | 423        | **+33**        |
| Source records      | 256       | 268        | **+12**        |
| Unit/content tests  | 3490      | 4543       | **+1053**      |
| Test files          | 63        | 68         | **+5**         |
| Playwright tests    | 786       | 790        | **+4**         |
| Country dossiers    | 32        | 32         | 0              |
| Routed institutions | 15        | 15         | **0**          |
| Routed professions  | 6         | 7          | **+1**         |
| JS bytes            | 663,431   | 663,463    | **+32 B**      |
| CSS bytes           | 29,685    | 29,749     | **+64 B**      |
| `out/` size         | 93,900 KB | 105,240 KB | **+11,340 KB** |

**Explaining the large change.** `out/` grew 12.1%, and the cause is content rather than
tooling: 33 new pages, and — more significantly — the `Connections` component now rendering on
every guide that declares `relatedInstitutions`, which is 58 of them. Sitemap parity is exact
and the verifier confirms no page exists that the registry does not know about.

**The small changes are real and small.** JS grew by 32 bytes: one top-level route entering the
build manifest. CSS grew by 64 bytes: the `break-words` utility class, which was not previously
in the emitted stylesheet. Neither is an optimisation and neither is described as one.

**No client JavaScript was added.** The lifecycle model renders as semantic HTML at build time.
No graph library was introduced, which the brief permitted only on evidence that a static
representation was materially inadequate; it was not.

## 3. Defects found by the final gate

**G1 — 320px horizontal overflow on `/sources`.** Wave 14 added source notes citing a second URL
for multi-provision sources (GVG §§ 184 and 187; LSA 2007 ss. 12 and 13). A 57-character URL
overflowed the viewport by 74px at 320px, failing the WCAG 1.4.10 reflow test in both Chromium
projects.

Fixed in `SourceList` as well as on `/sources`, because `SourceList` is the component every
entity page uses. Fixing only the page would have left the regression to reappear on whichever
page next cited a multi-provision source — and it had already done so, which the next finding
records.

**G2 — the same overflow on `/professions/defence-lawyer`,** found by extending the 320px test
from five paths to nine. The added paths are the hub, a corrections page and a courts page —
the widest new page and the two carrying long German and Portuguese statutory terms — plus the
profession page. Fixed by the same `SourceList` change.

**G3 — the route matrix asserted a Wave 14 route must 404.** `/professions/defence-lawyer` was on
the must-404 list, put there by Wave 11 when the route was deliberately deferred. Removed, with
the reason recorded in `scripts/route-matrix.mjs`; nothing else came off the list, and
`/institutions/bar-association` was **added** because Wave 14 examined it and rejected it.

## 4. Adversarial review, by category

The brief's eleven categories. Findings are classified P0–P3 and severity is not inflated.

| Category                   | Result                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Factual claims             | No P0/P1. Every fact block cites a source; a test enforces it per wave.                                                                                                                                                              |
| Source interpretation      | No P0/P1. One P2 fixed in Wave 13: an inference marked `claim: 'fact'` under a statutory citation, split into fact and analysis.                                                                                                     |
| Jurisdiction scope         | No P0/P1. One P2 fixed in Wave 13: s. 57(3) described as disapplying "the section" when the text disapplies subsection (1).                                                                                                          |
| Universality claims        | No P0/P1. Wave 14's `no-single-path` and the lifecycle's `variation` field are the systematic answer; tests pin the specific ones.                                                                                                   |
| Taxonomy                   | No P0/P1. Wave 14 examined a bar-association family and declined it on evidence.                                                                                                                                                     |
| Route ownership            | No P0/P1. Two P2s: Wave 11's test and the route matrix each asserted `/professions/defence-lawyer` must not exist; both narrowed with the reason recorded in the file.                                                               |
| Neutrality                 | No P0/P1. Tripwires run in both directions across four waves, with live-catch tests.                                                                                                                                                 |
| Safety                     | No P0/P1. `corrections` added to `SAFETY_SENSITIVE_SECTIONS`; every guide in a safety-sensitive section carries a cleared safety review, enforced corpus-wide.                                                                       |
| Historical interpretation  | Not engaged by these waves beyond what Wave 12 already carried.                                                                                                                                                                      |
| Institution status         | No P0/P1. Wave 13's German prison-law note records that the 2006 federalism reform makes execution substantially a Land competence, so the federal statute is cited for what it states rather than as a description of every regime. |
| Statistical interpretation | No P0/P1. The measurement page names the four conversions it refuses and publishes no derived rate; a test asserts no density figure appears.                                                                                        |

**P3, recorded honestly and not fixed.** Exact-match anchor repetition: `/justice/what-is-due-process`
receives 75 identical anchors and `/courts/what-do-courts-do` 71, because `related` cards render
the target page's own question as link text. This is descriptive, accessible and honest link
text, and varying it artificially would make it worse for readers using a screen reader. Recorded
rather than "fixed".

## 5. SEO conformance (brief section 35)

| Requirement                          | Status                                                                               |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| Every published page has a canonical | Yes — `buildMetadata` sets it for every route.                                       |
| Sitemap parity exact                 | Yes — 421 routes, 421 sitemap URLs, verifier exit 0.                                 |
| No deferred route in sitemap         | Yes — route matrix confirms 131 must-404 paths return 404.                           |
| No duplicate canonical               | Yes — one route per path; a test asserts the hub path is unique.                     |
| No generated thin pages              | Yes — every route is an authored record under a publication gate.                    |
| No indexable search/filter states    | Yes — the export is static with no query-parameter routes.                           |
| Structured data describes page type  | Yes — `WebPage` for the hub, `DefinedTerm` retained for glossary terms.              |
| No FAQPage/HowTo for SERP features   | Yes — `ContentPage` accepts only WebPage, AboutPage, ContactPage and CollectionPage. |
| No GovernmentOrganization claim      | Yes — unchanged.                                                                     |
| Static-export compatible             | Yes — `output: 'export'`, build exit 0.                                              |

## 6. Accessibility (brief section 39)

Tested, not assumed. The Playwright accessibility spec covers keyboard navigation, visible
focus, heading hierarchy, landmarks and their accessible names, descriptive link text, 320px
reflow, 200% zoom equivalent, reduced motion, target size, and coexistence with the ecosystem
drawer and consent UI. All pass.

**No WCAG conformance claim is made beyond what is tested.** The suite covers specific success
criteria on specific pages; it is not an audit of the site against WCAG 2.2 AA.

## 7. Architecture and infrastructure (brief sections 40–41, 51)

Preserved without exception. Static export retained; no Functions added; no server runtime; CSP
unchanged and verified by `verify:output` against the 9,783 inline scripts the build emits; no
third-party analytics or tracking; no DNS change; no deployment; no Netlify invocation; no
production configuration change; no dependency upgrade; no PR; no merge.

No new client code was added, so there is no new inline-script or CSP implication to audit.

## 8. Commits

Twenty local commits in the conceptual groups the brief suggests: research and sources, content,
tests and QA per wave, then the cross-wave audit, documentation and final validation fixes. No
squashing.
