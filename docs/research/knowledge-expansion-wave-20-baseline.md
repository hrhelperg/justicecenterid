# Wave 20 baseline — public safety, emergency powers and civil protection

Branch `feat/knowledge-expansion-wave-20`, cut from `origin/main` at
`fe1a1e4e333ebd2e4199866a9559ad467d41fb9f`. Measured 2026-08-26. No push during implementation.

Every number below was measured on this tree. None was copied from a previous wave's report.

## 1. Merge gate — Wave 19 verified in main by artifact

The instruction was to distrust the PR title, the merge commit message, the branch name and the
statement that the merge happened, and to verify artifacts instead. Ten checks, all on
`origin/main` at `fe1a1e4`:

| #   | Artifact                                  | Method                                                                                | Result                           |
| --- | ----------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------- |
| 1   | Repository identity                       | `git remote -v`                                                                       | `hrhelperg/justicecenterid`      |
| 2   | Seven Wave 19 guide slugs                 | grep of `src/content/guides/`                                                         | 7/7, one occurrence each         |
| 3   | `de-stpo-revision` source record          | grep of `src/content/sources.ts`                                                      | present                          |
| 4   | Wave 19 test suite                        | file present, executed                                                                | 144 tests, exit 0                |
| 5   | Remedies/review safeguards                | 11 invariant `describe` groups enumerated                                             | all present                      |
| 6   | Wave 19 routes build and render           | `npm run build`, then read `out/`                                                     | 7/7 rendered, 0 `__next_error__` |
| 7   | `scripts/link-graph-audit.mjs`            | file present, executed                                                                | exit 0                           |
| 8   | Emphasis renderer fix `1cb8a54`           | `INLINE_EMPHASIS` in `src/lib/content.ts`; `emphasis === 'strong'` in `BlockRenderer` | present                          |
| 9   | Emphasis renders on **pre-Wave-19** pages | `<em>notwendige Verteidigung</em>` in `/defence/right-to-counsel`; 0 literal `**`     | confirmed                        |
| 10  | Mutation-test infrastructure              | 31 live-catch companion tests across 10 content test files                            | present                          |

Full suite on `main` before any Wave 20 change: `npm ci` 0 · `typecheck` 0 · `npm test` 0
(5559 passed / 74 files) · `build` 0 · `verify:output` 0.

**Reviewer decision on `1cb8a54` is KEEP.** It is present and will not be reverted. Wave 20
inherits it and the corpus-wide marker-resolution guard that came with it.

## 2. Registry counts

| Metric                                    | Baseline        |
| ----------------------------------------- | --------------- |
| Public route paths                        | **450**         |
| Sitemap URLs                              | **450**         |
| Exported HTML pages                       | **452**         |
| Guides (all / published)                  | 109 / **109**   |
| Institution types (all / published)       | 17 / **17**     |
| Professions (all / published / routed)    | 7 / 7 / **7**   |
| Glossary terms (all / published / routed) | 32 / 32 / **5** |
| Country dossiers (all / published)        | 32 / **32**     |
| Source records                            | **289**         |
| History entries                           | **7**           |
| Restricted-claim patterns                 | **10**          |
| `ScheduledChange` records                 | **4**           |

Guides by section: justice 22 · corrections 19 · courts 17 · law-enforcement 17 · defence 9 ·
forensics 9 · prosecution 9 · investigations 7 · **public-safety 0**.

Routes by top segment: `/countries` 280 · `/justice` 23 · `/corrections` 20 · `/courts` 18 ·
`/law-enforcement` 18 · `/institutions` 16 · `/defence` 10 · `/forensics` 10 · `/prosecution` 10 ·
`/investigations` 8 · `/history` 8 · `/professions` 8 · `/glossary` 6 · **`/public-safety` 1** ·
16 single-page platform and hub routes.

Sources by jurisdiction: INT 34 · DE 29 · GB 18 · FR 17 · US 15 · CA 11 · BR 9 · NZ 9 · IE 8 ·
NO 8 · AT 8 · JP 7 · AU 7 · NL 7 · DK 7 · SE 7 · FI 7 · CZ 7 · ID 7 · IT 6 · PL 6 · SG 6 · CH 5 ·
KR 5 · AR 5 · ZA 5 · KE 5 · ES 4 · PT 4 · NG 4 · BE 3 · IN 3 · MX 3 · GR 2 · unscoped 1.

## 3. Tests and performance

| Metric                                | Baseline                        |
| ------------------------------------- | ------------------------------- |
| Vitest files                          | **74**                          |
| Vitest tests                          | **5559**                        |
| Playwright spec files                 | **13**                          |
| Playwright tests                      | **800** (796 passed, 4 skipped) |
| Client JS bytes (`out/_next/**/*.js`) | **663,491** across 12 files     |
| CSS bytes (`out/_next/**/*.css`)      | **29,961** across 1 file        |
| Exported HTML bytes                   | **40,637,648**                  |
| `out/` total                          | **115.44 MB**                   |

The `out/` total is dominated by prerendered HTML and the Next build's per-route payloads. An
increase in it from adding pages is additional content, not a regression; client JS is the number
that must not move materially.

## 4. `/public-safety` inventory — the finding this wave exists to act on

`/public-safety` is a **section hub with no children**. It is the only section in the corpus in
that state.

- Routes under `/public-safety`: **1** — the hub itself.
- Guides in the section: **0**.
- Institution types assigned to the section: **2** — `border-and-customs-authority` and
  `coast-guard`. Neither is a civil-protection or emergency-management body.
- Country modules pointing at the section: **1** — `border-and-customs`.
- Glossary terms assigned to the section: `public-safety` itself (unrouted).

The section definition in `src/content/sections.ts` is already substantial: it has a summary, an
intro, five key ideas, a variation note, three out-of-scope statements, and related sections. It
promises a section that does not exist yet. Notably its own text already commits to positions this
wave must honour — "public safety is a crowded institutional space", "civil protection is largely
preventive", and an out-of-scope line reading "Emergency instructions of any kind".

### Link state

Measured on editorial links only (inside `<main>`), which is the measure `link-graph-audit.mjs`
uses — site chrome links every page to every hub and would make the metric meaningless.

- Editorial links **out of** `/public-safety`: **6**, and all six are section hubs generated from
  `relatedSections` (`/`, `/corrections`, `/glossary`, `/institutions`, `/justice`,
  `/law-enforcement`). Not one is a content page.
- Editorial links **into** `/public-safety`: **6**, of which four are real pages (`/`,
  `/corrections`, `/justice-system`, `/law-enforcement`) and two are the 404 pages.

The section currently passes the link-graph audit only because hub-to-hub links count. It has no
editorial gravity of any kind.

## 5. Existing emergency and public-safety references in the corpus

Measured by scanning every published guide's full prose, misconceptions and uncertainty
statements.

| Term                             | Pages | Where                                                                                     |
| -------------------------------- | ----- | ----------------------------------------------------------------------------------------- |
| "state of emergency"             | **0** | —                                                                                         |
| "emergency power"                | 1     | `/justice/reviewing-detention`                                                            |
| "civil protection"               | 1     | `/law-enforcement/why-societies-need-law-enforcement`                                     |
| "civil defence"                  | **0** | —                                                                                         |
| "emergency management"           | **0** | —                                                                                         |
| "disaster"                       | **0** | —                                                                                         |
| "derogat*"                       | **0** | —                                                                                         |
| "martial law"                    | **0** | —                                                                                         |
| "curfew"                         | 2     | both `/corrections`, and both mean a community-order requirement                          |
| "public safety"                  | 4     | 2 `/defence`, 2 `/law-enforcement`                                                        |
| "public order"                   | 7     | 1 `/courts`, 6 `/law-enforcement`                                                         |
| "fire and rescue / fire service" | **0** | —                                                                                         |
| "military"                       | 5     | 2 `/courts`, 3 `/law-enforcement`                                                         |
| "armed forces"                   | 1     | `/law-enforcement/police-and-law-enforcement-difference`                                  |
| "proportionalit*"                | 3     | `/corrections`, `/justice/limits-on-public-power`, `/law-enforcement/police-use-of-force` |
| "necessity"                      | 1     | `/law-enforcement/police-use-of-force`                                                    |

The corpus is close to virgin on this subject. Nine of the sixteen probes return zero. The two
concepts with real existing coverage — proportionality and necessity — are held by
`/justice/limits-on-public-power` and `/law-enforcement/police-use-of-force`, and Wave 20 must
link to them rather than restate them.

The `curfew` result is a trap worth recording: both occurrences are the sentencing sense of the
word, not the emergency sense. A naive keyword audit would have reported existing coverage.

## 6. Route architecture — `/public-safety/[slug]` is reuse, not a new family

Every content section in the app router has an identical eighteen-line `[slug]/page.tsx`
delegating to the shared `GuidePage` component:

```
/corrections/[slug]   /courts/[slug]      /defence/[slug]     /forensics/[slug]
/investigations/[slug] /justice/[slug]    /law-enforcement/[slug] /prosecution/[slug]
```

`/public-safety` has a `page.tsx` and no `[slug]` directory. `public-safety` is already a member
of the `SectionId` union in `src/content/types.ts`, is already a `SECTIONS` entry, and
`PUBLIC_ROUTE_PATHS` already derives guide routes generically from `PUBLISHED_GUIDES` via
`guidePath`. Adding the segment therefore introduces **no new routing concept**: it is the same
file the other eight sections already have, and the registry, sitemap and output verifier pick the
routes up without change.

## 7. Source-access methodology inherited

Recorded here because Wave 20's subject sits behind more bot walls than any previous wave's.

- `HTTP 200 is not verification` — the fetched document must be confirmed to contain the text
  cited. `verificationMethod: 'content-confirmed'` is the only value meaning that happened.
- `HTTP 403 does not mean unavailable` — established by the France pilot, where
  `legifrance.gouv.fr` and `interieur.gouv.fr` serve readers normally and 403 automated requests.
  A status probe would have rejected the authentic text of French legislation.
- URLs are never constructed from a pattern. The France register records a concrete case where a
  guessed identifier was wrong.
- A blocked source is recorded as blocked. It is never described as read.

## 8. What this baseline commits the wave to

1. `/public-safety` gets child routes through the existing guide architecture, or it gets nothing.
   No new route family.
2. Proportionality, necessity, judicial review, constitutional review, detention review and
   effective remedy are all already owned. Wave 20 links to them; it does not re-explain them.
3. Nine of sixteen subject probes are at zero, so the cannibalization risk on the emergency-powers
   material specifically is low — and correspondingly the sourcing burden is entirely on this wave.
4. Client JS is 663,491 bytes and must not move materially. This is a content wave.
