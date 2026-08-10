# Knowledge Expansion Wave 3 — QA record

**Branch:** `feat/knowledge-expansion-wave-3`
**Base SHA:** `547d7eb90386c40248b2ff2e71d5b022f9e1a7a8`
**Date:** 2026-08-10

Baseline: `docs/audits/knowledge-expansion-wave-3-baseline.md`.
Plans: `docs/research/glossary-routing-plan.md`,
`docs/research/subnational-policing-cluster-plan.md`.
Matrices: `docs/seo/glossary-route-cannibalization.md`,
`docs/seo/knowledge-expansion-wave-3-cannibalization.md`.

---

## 1. What shipped

| Cluster                   | Candidates | Published | Merged/Aliased | Hub-only | Rejected |
| ------------------------- | ---------- | --------- | -------------- | -------- | -------- |
| A — Glossary              | 32         | **5**     | 0              | 27       | 0        |
| B — Sub-national policing | 8          | **4**     | 3              | 0        | 1        |
| **Total**                 | **40**     | **9**     | **3**          | **27**   | **1**    |

```
/glossary/judicial-independence      /institutions/state-police
/glossary/appeal                     /institutions/provincial-police
/glossary/judicial-review            /institutions/prefectural-police
/glossary/chain-of-custody           /institutions/autonomous-community-police
/glossary/disclosure
```

## 2. Metrics

| Metric                | Before    | After         | Delta     |
| --------------------- | --------- | ------------- | --------- |
| Registered routes     | 333       | **342**       | +9        |
| Sitemap URLs          | 333       | **342**       | +9        |
| Exported pages        | 335       | **344**       | +9        |
| Unit / content tests  | 2289      | **2347**      | +58       |
| Test files            | 54        | **55**        | +1        |
| Playwright tests      | 220       | **284**       | +64       |
| Routed glossary terms | 0         | **5**         | +5        |
| Institution records   | 9         | **13**        | +4        |
| Source records        | 225       | 225           | 0         |
| **Shared JS**         | 663,374 B | **663,403 B** | **+29 B** |
| CSS                   | 29,406 B  | 29,406 B      | 0         |
| `out/` on disk        | 74 MB     | 76 MB         | +2 MB     |

**Client JS grew by 29 bytes for nine pages, and CSS not at all.** Part K holds by
construction: no registry is serialised into a client island, all three page templates are
server components, and the glossary routing decision is computed at build time.

**No new sources were needed.** Every Wave 3 claim rests on the 225 records already
verified in earlier phases — which is the point of having built the registry.

## 3. Validation

```
npm ci                  clean install
npm run format:check    PASS
npm run lint            PASS
npm run typecheck       PASS
npm test                PASS — 55 files, 2347 tests
npm run build           PASS
npm run verify:output   PASS — 342 routes / 344 pages / 342 sitemap URLs
npm run test:e2e        PASS — 280 passed, 4 skipped (desktop + mobile Chromium)
route matrix            PASS — 342 routes + 36 must-404 paths, 378/378
```

The route matrix was extended with eight Wave 3 paths that must 404: six hub-only glossary
terms and the two merged sub-national candidates.

## 4. Adversarial QA (Part N)

Run over all nine new pages against the brief's ten questions.

### Two findings, both fixed by strengthening rather than softening

Both arose the same way: a source note had been read in **truncated** form when the page was
drafted, and the full note turned out to support something more precise.

- **Nigeria counterexample understated its own source.** The page said Nigerian states "do
  not operate their own police forces: policing is constitutionally a federal function".
  The 1999 Constitution is more decisive — s 214(1) provides that "There shall be a police
  force for Nigeria … no other police force shall be established for the Federation or any
  part thereof". The page now quotes it. State police in Nigeria is not merely absent, it is
  prohibited, and that is a far better counterexample.
- **Brazil example was vague where the source is specific.** "Divided by function between
  distinct bodies" is now Article 144's actual division: the _polícias civis_ exercising
  judicial-police functions and investigating criminal offences, the _polícias militares_
  holding ostensive policing and preservation of public order, both subordinate to the
  Governors.

A browser test now asserts the Nigerian quotation appears in the counterexample section, so
the strengthened claim cannot be quietly reverted.

### Questions that produced no finding

- **Q1, distinctness.** Every routed glossary term was checked against the guide, institution
  and profession corpus; the 15 that failed are hub-only. The four sub-national pages differ
  from one another on the legal source of the competence, not on vocabulary.
- **Q3, over-generalised definitions.** Prefectural policing states that prefectures are not
  sovereign and hold no legislative power over criminal law. Autonomous-community policing
  turns on the conditional wording of Organic Law 2/1986 and makes no claim about which
  communities currently operate which bodies.
- **Q4, national example as universal.** Every sub-national page carries a typed
  counterexample, asserted by test.
- **Q5, country example sourced.** Extended the Wave 2 invariant to counterexamples; both
  are enforced.
- **Q6, legal-system-specific terms.** `judicial-review` is routed precisely _because_ it is
  system-specific, and the page's subject is that variation. `probable cause` and
  `reasonable suspicion` remain absent from the platform entirely, as Wave 1 decided.
- **Q7, alias mistaken for a concept.** No alias was routed; `local-police` remains an alias
  of `municipal-police`, `regional-police` and `territorial-police` merged.
- **Q9, overstating independence or command.** The Canadian example separates holding the
  competence from owning the force and records that the contracted force remains federally
  governed. The Japanese page describes the commission model without assessing it, and says
  so explicitly.

## 5. Non-vacuity and mutation testing

Both critical invariants were **mutation-tested**, not assumed:

| Mutation                                    | Result                                                                                                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add `appeal` to `GLOSSARY_OWNED_ELSEWHERE`  | `routes exactly the terms that satisfy the gate` **FAILS**                                                                                                                |
| Strip `counterExamples` from `state-police` | `state-police carries at least one counterexample` **FAILS**, and the other three still pass — so the check is per-record, not an aggregate one good record could satisfy |

Twelve further broken glossary records drive every individual gate condition — missing
context, purpose, question, jurisdiction note, one source, unknown source, no country
example, an unresearched country, too few related concepts, missing dates, a malformed
date, a non-fact-checked review state — each asserted to fail, with the unmodified terms
asserted to pass so the rejections are meaningful.

The **ownership map is itself tested**: every slug it names must exist in the glossary, must
not be routed, and for the eight it says a guide owns, that guide's path must be in the
published route set. A map that suppressed a page by pointing at a guide that did not exist
would otherwise look identical to a correct one.

## 6. Accessibility

Tested on `/glossary`, `/glossary/disclosure`, `/glossary/appeal`, `/institutions`,
`/institutions/state-police`, `/institutions/autonomous-community-police`,
`/institutions/provincial-police`.

| Check                                                       | Result     |
| ----------------------------------------------------------- | ---------- |
| One `h1` per page                                           | Pass (9/9) |
| Breadcrumbs present, registry-derived                       | Pass       |
| Skip link first in tab order, focuses `main`                | Pass       |
| No horizontal overflow at 320px                             | Pass       |
| No horizontal overflow at 200% text                         | Pass       |
| Long institution names (`autonomous-community-police`) wrap | Pass       |
| Sources rendered visibly                                    | Pass       |
| Ecosystem banner + cookie settings present                  | Pass (9/9) |
| No page bypasses SiteShell                                  | Pass       |

Contrast, reduced motion and focus styling are inherited unchanged; no new colour,
animation or component was introduced.

## 7. SEO and structured data

- Unique title, description and canonical per route; uniqueness asserted across all nine.
- Glossary term pages emit a **`DefinedTerm`** node whose `@id` is its own URL, declaring
  `inDefinedTermSet` back to the hub's `DefinedTermSet` — the term page and the hub describe
  the same object at different scopes rather than competing for it.
- Sub-national pages use the existing `WebPage` + `BreadcrumbList` pattern.
- `GovernmentOrganization` asserted absent.
- Sitemap parity 342/342.
- No banned superlative in any new copy.
- **No redirects** — no existing URL changed. Part G satisfied.

## 8. Known limitations

1. **27 of 32 glossary terms remain hub-only**, 15 because an existing page owns the query
   and 12 because a one-sentence definition on a single source is not a page. This is the
   correct outcome, not a shortfall — but it does mean "glossary route expansion" produced
   five routes rather than a large set.
2. **`standard-of-proof` is the best unrouted content on the platform.** The beyond-reasonable-doubt
   versus inner-conviction contrast is genuinely valuable and is not routed only because no
   second source in the registry supports the comparative claim. First candidate for Wave 4.
3. **Two close pairs kept separate**: `disclosure` against `/professions/prosecutor`, and
   `judicial-independence` against `/professions/judge`. Both on a concept-versus-role split,
   both cross-linked, both flagged to revisit if they converge.
4. **The autonomous-community page names no specific community.** Catalonia, the Basque
   Country and Navarre are not asserted, because `es-lofcs` establishes the framework rather
   than the current roster. The page is about the mechanism and its asymmetry.
5. **No new sources were added**, so Wave 3 inherits every scope limit of the 225 existing
   records.

## 9. Recommended next cluster

**Municipal policing inside federal systems** — the interaction between a state force and
the city forces operating within it. It is the natural completion of the sub-national tier,
it is the arrangement most readers actually encounter, and the United States dossier already
carries the agency-count sourcing that the global page would need.

Second: give `standard-of-proof` and `burden-of-proof` the comparative sourcing they need,
and route them as a pair.
