# Waves 16–18 — final QA and validation record

Branch `feat/knowledge-expansion-waves-16-18`. Written 2026-08-26.
Base SHA `746f482fc5a6652126d5c6c9c3e86d88e7ecc334`.

Per-wave detail is in `docs/audits/knowledge-expansion-wave-{16,17,18}-qa.md` and the research
plans in `docs/research/`. This document records the programme-level gate.

## 1. Final validation gate — exact exit codes

Run from the final committed tree. Every command was executed; none is reported from memory, and
no critical command was piped in a way that masks its status. Log:
`scratchpad/final-gate-16-18.txt`.

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

Results: **5247 unit and content tests across 72 files**; **796 Playwright tests passed, 4
skipped, 0 failed**; **route matrix 591/591** over 443 registered routes and 148 must-404 paths;
**443 routes / 445 exported pages / 443 sitemap URLs**, verifier confirming the export matches
the registry.

## 2. Programme performance comparison

Against the baseline in `docs/research/knowledge-expansion-waves-16-18-baseline.md`.

| Metric                       | Baseline   | Final      | Δ             |
| ---------------------------- | ---------- | ---------- | ------------- |
| Public routes / sitemap URLs | 421        | 443        | **+22**       |
| Exported HTML pages          | 423        | 445        | **+22**       |
| Source records               | 268        | 288        | **+20**       |
| Published guides             | 87         | 102        | **+15**       |
| History entries              | 0          | 7          | **+7**        |
| Unit/content tests           | 4543       | 5247       | **+704**      |
| Test files                   | 68         | 72         | **+4**        |
| Playwright tests             | 794        | 800        | **+6**        |
| Routed institutions          | 15         | 15         | **0**         |
| Routed professions           | 7          | 7          | **0**         |
| Routed glossary terms        | 5          | 5          | **0**         |
| Restricted-claim patterns    | 10         | 10         | **0**         |
| ScheduledChange records      | 4          | 4          | **0**         |
| JS bytes                     | 663,463    | 663,491    | **+28 B**     |
| CSS bytes                    | 29,749     | 29,961     | **+212 B**    |
| `out/` size                  | 107,616 KB | 113,920 KB | **+6,304 KB** |

**Explaining the deltas.**

_JS +28 bytes._ One new top-level route segment (`/history/[slug]`) entering the build manifest.
No client JavaScript was added. No graph, chart or search library was introduced.

_CSS +212 bytes._ Utility classes newly reaching the emitted stylesheet from the history page's
definition list and index markup. Not an optimisation and not described as one.

_`out/` +5.9%._ Twenty-two new pages, each carrying the site chrome and JSON-LD every page
carries. Sitemap parity is exact and the verifier confirms no page exists that the registry does
not know about.

_Institutions, professions, glossary, restricted patterns and scheduled changes all unchanged._
That is the substantive result of three waves of institutional research, not an omission — see
§4.

## 3. Adversarial review, by lens

The brief's ten lenses. Findings are classified only after verification, and severity is not
inflated.

| Lens                           | Result                                                                                                                                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Factual / source integrity     | No P0/P1. Every fact block cites a source; enforced per wave and again across waves. Three source-currency traps caught by reading revised text: the revoked Criminal Procedure Rules 2020, the repealed CJA 2009 s. 125, and the NIST DNA review's draft-versus-final. |
| Legal / comparative integrity  | No P0/P1. Territorial extent stated on every England-and-Wales claim; Scotland named where it matters.                                                                                                                                                                  |
| Scientific integrity           | No P0/P1. Overclaim and wholesale dismissal both tested, with a correction-sentence test proving accurate prose fires neither. The draft bitemark review is cited for its status only and quoted nowhere.                                                               |
| Historical integrity           | No P0/P1. Nine presentism patterns; six of seven continuity claims are `none-established`; both hedged sources keep their hedges, proved by mutation.                                                                                                                   |
| Safety / operational misuse    | No P0/P1. The anti-forensics guard is directional and both of its branches are separately exercised after a mutation showed one was inert. Digital evidence deferred on safety as well as evidence.                                                                     |
| SEO / cannibalization          | No P0/P1. Exact and 5-gram near-duplicate guards, both non-vacuous. No duplicate questions corpus-wide, guides and history checked against each other.                                                                                                                  |
| Accessibility                  | No P0/P1. Three forensics pages added to the 320px reflow list; full spec passes.                                                                                                                                                                                       |
| Architecture / data model      | No P0/P1. Two new types, argued against the existing temporal model first. One new route segment following four existing precedents.                                                                                                                                    |
| Privacy / CSP / static hosting | No P0/P1. Static export retained, CSP unchanged and verified against the inline scripts the build emits, no analytics or tracking added, no production configuration touched.                                                                                           |
| Performance                    | No P0/P1. +28 B JS. No client-side library of any kind added.                                                                                                                                                                                                           |

**P2s found and fixed**, all recorded in the wave QA documents: a link to an unrouted glossary
term; an unsupported `relatedProfessions` field caught by the typechecker; four source notes
giving territorial extent without a negative-scope clause; two semantic denials the tripwires
could not see; a status word separated from what it qualified.

**P3, recorded and not fixed.** `Guide` can declare `relatedInstitutions` but not
`relatedProfessions`. Adding a field for one wave's convenience would be speculative
architecture; history pages link to guides through `relatedGuides` and prose instead.

## 4. Three structural results

**Nine consecutive waves with no new institution record.** Waves 8–14 each declined one; Waves
16 and 17 declined four more between them. The reason is the same every time and is now
well-tested: the recurring thing is a _function_, and its institutional embodiments differ in
kind rather than in design. Wave 16 produced the sharpest case yet — the Netherlands has a
national forensic institute, England and Wales has a regulated market and no national service,
so there is no third member of the family. Wave 17's is nearly as clean: England and Wales
legislates for "a provider of probation services", a formulation presupposing plural providers,
which argues against an institution record rather than for one.

**A duty whose breach produces no nullity, found twice independently.** Forensic Science
Regulator Act 2021 s. 4: failure to follow the code is not an offence, but the code is admissible
and a court may take a failure into account. Sentencing Act 2020 s. 30(4): a missing pre-sentence
report invalidates no sentence. Both are systems reaching for an obligation whose remedy is
evidential rather than nullifying, because voiding the outcome would harm the person the duty
protects.

**A check that does not know about a content family reports the content as wrong rather than
itself.** This failure recurred twice in Wave 18 alone — the source-usage test and the
link-graph audit both silently excluded `/history` — and the France pilot had recorded the same
lesson years of waves earlier. Both omissions are now fixed with a comment at the point of the
omission rather than only in a QA document.

## 5. Mutation proofs

| Wave | Proofs | Survived first pass              | Invalid | Final |
| ---- | ------ | -------------------------------- | ------- | ----- |
| 16   | 11     | 2                                | 0       | 11/11 |
| 17   | 12     | 1 (mis-aimed, not a test defect) | 0       | 12/12 |
| 18   | 8      | 0                                | 0       | 8/8   |

**31/31 valid.** Three needed a second pass:

- **W16-M2** disabled one half of the anti-forensics direction check and the suite passed,
  because every planted disclaimer happened to exercise the other half. Each half now has a case
  the other cannot clear. An untested branch of a safety guard is an unproven branch.
- **W16-M10** inverted "these are **not** two designs of one institution" and the suite passed,
  because the assertion accepted either that phrase or a separate one. Both limbs now required.
- **W17-M12** planted a _paraphrase_ against an exact-substring guard. That was a mis-aimed
  mutation rather than a test defect, and is recorded as such — but the gap was real, so a
  5-gram near-duplication guard was added and the mutation redone verbatim.

One anchor assertion refused to no-op after prettier reflowed its target (W17-M8), and two
refused during the link-graph edit. That safeguard exists because Wave 12 lost a fix to exactly
that failure.

## 6. SEO conformance

| Requirement                                        | Status                                                                                                                      |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Unique title and description per route             | Yes — `buildMetadata` from the typed registry.                                                                              |
| Canonical from the typed registry                  | Yes — verified on the new history pages specifically after they initially rendered without one.                             |
| One H1, correct breadcrumb                         | Yes — checked by `verify:output` on every exported page.                                                                    |
| Sitemap inclusion iff published                    | Yes — 443 routes, 443 sitemap URLs, verifier exit 0.                                                                        |
| No draft or deferred URL leakage                   | Yes — 148 must-404 paths return 404, now including this programme's rejected institution families and deferred disciplines. |
| Structured data appropriate to page type           | Yes — history pages use `WebPage`, not a novel type.                                                                        |
| No GovernmentOrganization                          | Yes — unchanged.                                                                                                            |
| No FAQPage/HowTo gaming                            | Yes — `ContentPage` accepts only WebPage, AboutPage, ContactPage, CollectionPage.                                           |
| No fake authors or review dates                    | Yes — every date is an entity's own `updatedOn`, never a build timestamp.                                                   |
| Historical pages not presented as current profiles | Yes — each states its period, its precision and its scope, and tests forbid present-tense institutional description.        |

## 7. Infrastructure

Preserved without exception. Static export retained; no Functions; no server runtime; CSP
unchanged and verified; no third-party analytics or tracking; no DNS change; no deployment; no
Netlify invocation; no production configuration change; no dependency change; no PR; no merge.

No new client code was added, so there is no new inline-script or CSP implication to audit.

## 8. Remaining limitations

- **Coverage is Eurocentric in the history section**, stated on `/history` before this programme
  and still true. Colonial policing history remains listed as planned and unresearched.
- **Nine forensic disciplines deferred**, including fingerprint and firearms examination, for
  want of a final scientific-foundation review.
- **Digital evidence deferred** on evidence and safety grounds together.
- **Prison history deferred**: the relevant nineteenth-century Acts are scanned-PDF-only.
- **Who decides release deferred**: the English life-sentence provisions are heavily amended and
  would need care Wave 17 could not give them.
- **OPCAT and national preventive mechanisms** unreachable (HTTP 403), stated on the page.
- **`public-safety` still holds zero guides.** Outside this programme's scope, recorded so it is
  not mistaken for covered.
