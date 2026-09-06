# Wave 24 QA — law enforcement careers, training and professional pathways

The first wave of the Audience, Careers and Commercial Foundation programme. Details of the
strategic transition are in `docs/roadmap/foundation-roadmap.md`.

## 1. Wave 23 merge gate

Run before any Wave 24 work, and **it failed on the first attempt**. `origin/main` was still at
`3045bc4` (the Wave 22 merge) with every element of Wave 23 absent — all eight guides, all five
sources, both test files, all six research documents, and no Phase 37 in the roadmap. Work stopped
and the gap was reported rather than stacked on.

After the merge, the gate ran again from scratch. `origin/main` at
**`ae1cf169e3c1f98ad5bdd6a422a7638ae14656e3`** (PR #36). Ancestry confirmed, and then verified
substantively rather than trusted: 8/8 guides, 5/5 sources, both specs, 6/6 documents, Phase 37
present, counts 24/344/152 exactly as expected, five load-bearing quotations present, `npm ci` and
the full suite at exit 0 (7,365 tests / 78 files), build and `verify:output` at exit 0 (489 routes,
491 pages, 489 sitemap URLs), link graph 0/0/0, and three rendered pages checked for canonical, a
single `h1`, a description and absence of raw Markdown.

## 2. Deltas

| Measure            | Before (`ae1cf16`) | After      | Delta     |
| ------------------ | ------------------ | ---------- | --------- |
| Published routes   | 489                | 502        | +13       |
| Exported pages     | 491                | 504        | +13       |
| Sitemap URLs       | 489                | 502        | +13       |
| Published guides   | 148                | 160        | +12       |
| Profession records | 7                  | 8          | +1        |
| Sources            | 344                | 353        | +9        |
| Unit tests         | 7,365              | 7,768      | +403      |
| Unit test files    | 78                 | 79         | +1        |
| Playwright tests   | 1,322              | 1,486      | +164      |
| E2E specs          | 17                 | 18         | +1        |
| **Client JS**      | 800 KB             | 800 KB     | **+0 KB** |
| CSS                | 29,961 B           | 30,022 B   | +61 B     |
| `out/`             | 151,456 KB         | 156,416 KB | +4,960 KB |

Seven existing profession records were also substantially expanded. **Twenty pages new or
substantially expanded**, inside Part I's 15–25 target.

No carousel, chart, quiz or personalisation library was added. The one component change —
`InlineText` — is a server-rendered function with no client directive.

## 3. Architecture decision

**Reuse `/professions`; do not create `/careers`.** A parallel family would cannibalise the
canonical records by construction, and the corpus is organised by function rather than by audience.
Comparative questions that are not about one role go to `/law-enforcement`. Full reasoning and the
rejected alternatives are in `careers-training-research-plan.md` §1; a test asserts no `/careers`
route exists.

## 4. Mutation proofs — 15 run, 15 valid, 15 caught, 2 caught only after the fix they forced

| Id     | Mutation                                               | Result                    |
| ------ | ------------------------------------------------------ | ------------------------- |
| W24M1  | Every police officer worldwide needs a degree          | CAUGHT                    |
| W24M2  | Every country uses a police academy                    | CAUGHT                    |
| W24M3  | Detective is universally a police rank                 | CAUGHT                    |
| W24M4  | Step-by-step restraint instruction                     | CAUGHT                    |
| W24M5  | Weapon-use instruction                                 | CAUGHT                    |
| W24M6  | Procedural filing guide added to a career page         | **SURVIVED**, then CAUGHT |
| W24M7  | Invented salary                                        | CAUGHT                    |
| W24M8  | Country-scoped source removed, claim retained          | **SURVIVED**, then CAUGHT |
| W24M9  | Duplicate route beside its canonical profession page   | CAUGHT                    |
| W24M10 | Affiliate and product recommendation inserted          | CAUGHT                    |
| W24M11 | Police work described as primarily arrests and weapons | CAUGHT                    |
| W24M12 | Pursuit and surveillance tactics                       | CAUGHT                    |
| W24M13 | Universal physical standard published                  | CAUGHT                    |
| W24M14 | Unresearched system described                          | CAUGHT                    |
| W24M15 | Promotional framing                                    | CAUGHT                    |

### W24M6 — the wave's own safeguard failed

The procedural-depth guard is this wave's central architectural control, and a filing manual
inserted into `working-life-in-policing` passed every one of 187 tests. Two independent defects:

1. **One missing comma.** `PROCEDURAL_HOWTO` required `first,` and the injected text read "To
   appeal, first file a notice of appeal". The sequencing word is the signal; the punctuation is
   not.
2. **Proportion alone was too permissive.** Three procedural paragraphs on an 88-sentence page sit
   at 3.4%, under the 8% threshold, while reading as a filing guide.

Fixed by making the sequencing pattern punctuation-independent and adding an absolute count
(≤2 procedural sentences per page) alongside the proportion. The absolute count is the tighter
constraint on a long page and the proportion on a short one, so both apply. Re-proved: CAUGHT.

### W24M8 — the publication gate checks the wrong thing

Changing a country example's `countrySlug` from `netherlands` to `france`, while leaving the Dutch
note and Dutch sources untouched, passed everything. The reference publication gate checks only
that an example points at a **published dossier** — and France is published. The record would have
claimed a French example supported entirely by Dutch sources.

The missing rule is one the platform already applies to guides: a country claim needs a source
scoped to that country. Now asserted for the records this wave touches. Re-proved: CAUGHT.

## 5. Adversarial QA — twenty lenses

**Findings: 1 P0, 3 P2. Twenty-one candidates refuted.** Every finding reproduced before being
acted on.

### P0 — shipped-breaking, found by this wave's own e2e

**Raw Markdown rendered as visible syntax on eight profession pages.** Reference records had never
contained a Markdown link, so `Bullets` rendered its items as raw text and nothing in the corpus
noticed. Wave 24's career fields cross-reference the educational guides — which is the point of
them — and the first build shipped **93 literal `[text](/path)` strings** across all eight
profession pages.

Reproduced by grepping the built HTML (`out/professions/*.html`) and confirming the pre-Wave-24
file contained zero Markdown links, so the defect was entirely this wave's. Fixed with `InlineText`
in `ReferencePage`, which resolves internal links and **renders any non-internal target as plain
text** — so the "no external links from reference pages" rule is enforced by the renderer rather
than by review. A content test now asserts every link target is a registered route. Visible
Markdown in `<main>`: **0**.

### P2 — corrected

1. **Eleven over-broad guards on first run.** The commercial patterns matched "public order", "in
   what order" and "Referral of concerns about welfare"; the false-universal guard matched this
   wave's own page titles and every cross-reference to them. Fixed by narrowing the patterns to
   genuinely transactional constructions and by adding `isAsserted`, which excludes interrogatives
   and Markdown link labels — a question is not an assertion and a link label is not a claim. The
   guards were narrowed; the content was not changed.
2. **A guard with the wrong scope.** "Describes no system that was not researched" ran over every
   profession record and caught a sourced Canadian sentence in the pre-existing
   `corrections-officer` record — a correct catch against the wrong target. Canada was researched
   for an earlier wave. Scoped to what Wave 24 itself asserts.
3. **A self-referential cluster the graph audit could not see.** The link-graph audit returned
   0 orphans / 0 weakly linked / 0 dead ends while **ten of the twelve new pages had no inbound link
   from any page that predated the wave**. The metric counts all links, so a cluster that only links
   to itself passes. Eleven editorial backlinks were added from existing pages, and a test now
   asserts inbound linkage specifically from non-Wave-24 pages.

### Refuted — checked, not defects

Every "unresearched country" hit is the sentence disclaiming them; every "detective is a rank",
"every country has a police academy", "training takes the same time everywhere" and "you would
pass" hit is a misconception **claim**, denied by construction. All 35 numeric duration figures sit
in sourced paragraphs. Zero fact paragraphs without a source. Twelve distinct questions across
twelve guides. Zero money symbols, zero salary vocabulary, zero commercial verbs, zero tactical
patterns. All nine sources are `government` type, jurisdiction-tagged and content-confirmed. Zero
procedural-depth sentences across all twelve pages.

One item examined and deliberately **not** acted on: `prosecutor`, `judge` and `defence-lawyer` have
no edges into the career layer. That is correct rather than a gap — the layer is policing-specific,
and linking a judge to police-training pages would be graph padding, which Part AF forbids.

## 6. Safety and product-scope architecture

- **Tactical safety (Part AG).** Six patterns for technique, weapon handling, pursuit, surveillance
  and step-sequenced physical instruction, run **corpus-wide** rather than only on new pages.
  Proofs W24M4, W24M5 and W24M12 confirm they fire.
- **Product scope (Part AJ).** The proportional guard above, with both halves tested: a test asserts
  the brief's own legitimate sentence does **not** trip it, and another asserts a drifted page does.
- **Commercial integrity (Parts W, X, Y).** Six patterns for transactional language, plus checks for
  external links, invented institutions, and equipment commerce. A separate guard asserts that
  monetisation vocabulary from the internal opportunity map appears in **no** published guide, **no**
  profession record and **no** source note. Proof W24M10 confirms it fires.
- **Legal-advice boundary (Part AH).** Five patterns for individualised eligibility, run on the
  denial-aware unit set so a misconception that names the error is not itself flagged.
- **No salary (Part AA).** Four patterns, including currency symbols. Zero occurrences. Proof W24M7
  confirms.

## 7. Accessibility

Per page across desktop and mobile projects, on all twelve guides and five profession pages:
exactly one `h1`, no heading-level jump greater than one, a description over 60 characters that is
not the title, no horizontal overflow at 320px **or** at 200% text, and skip-link → `main` keyboard
focus. Eight official terms in four languages — `erweiterte Berufsbildungsreife`,
`Fachhochschulreife`, `basispolitieopleiding`, `bachelor Politiekunde Wijkagent`,
`Vorbereitungsdienst`, `centralist meldkamer`, `bachelor Rechercheur`, `Templemore` — are asserted
present and non-overflowing at 320px on the page carrying each.

## 8. Final validation

| Gate                            | Result                                           |
| ------------------------------- | ------------------------------------------------ |
| `npm ci`                        | exit 0                                           |
| `npm run format:check`          | exit 0                                           |
| `npm run lint`                  | exit 0                                           |
| `npm run typecheck`             | exit 0                                           |
| `npm test`                      | exit 0 — 7,768 tests / 79 files                  |
| `npm run build`                 | exit 0                                           |
| `npm run verify:output`         | exit 0 — 502 routes, 504 pages, 502 sitemap URLs |
| `node scripts/route-matrix.mjs` | exit 0                                           |
| `npm run test:e2e`              | exit 0 — 1,486 passed, 4 skipped, 18 specs       |
| Link graph audit                | 0 orphans, 0 weakly linked, 0 dead ends          |

## 9. Known limitations

- **Five systems, not fifteen.** France was attempted and blocked; ten others were not attempted.
  No claim about any of them appears, and a test enforces it.
- **Germany means Berlin.** Each of the sixteen Länder recruits separately, as does the
  Bundespolizei. Nothing here establishes what any other Land does.
- **The subject-hour curriculum data is United States 2022 only.** No comparable published
  breakdown was obtained for any other system, so that page compares one country's curriculum
  against nothing.
- **The Irish material is tied to the 2024 competition**, not to standing Irish law.
- **The Dutch prior qualification per route was not researched** — only the level and duration of
  the programmes.
- **`college.police.uk` is the authoritative body for the England and Wales entry routes and could
  not be read.** Route facts are cited to the official recruitment service instead, and the PCEP
  start date is recorded as partially established rather than quoted.
- **No promotion system, selection process, vetting standard, medical standard or fitness standard
  was researched anywhere.** These are the questions readers ask most, and they are the ones that
  change most; a country recruitment layer is a later wave's work.
