# Knowledge Expansion Wave 2 — QA record

**Branch:** `feat/knowledge-expansion-wave-2`
**Base SHA:** `869fcd08262639311990665ad16937e7dbc74aa4`
**Date:** 2026-08-10

Baseline in `docs/audits/knowledge-expansion-wave-2-baseline.md`. Candidate classification in
`docs/seo/knowledge-expansion-wave-2-cannibalization.md`.

---

## 1. What shipped

| Cluster          | Candidates | Published    | Merged/Aliased | Deferred | Rejected |
| ---------------- | ---------- | ------------ | -------------- | -------- | -------- |
| A — Institutions | 18         | **7 routes** | 4              | 5        | 4        |
| B — Professions  | 17         | **6 routes** | 5              | 6        | 0        |
| C — History      | 20         | **0**        | 2              | 18       | 0        |
| **Total**        | **55**     | **13**       | **11**         | **29**   | **4**    |

The seven institution routes include two records (`prosecution-service`,
`correctional-service`) that were existing registry entries rather than candidates on the
brief's list of 18; five of the 18 candidates were published directly.

---

## 2. Metrics

| Metric               | Before    | After         | Delta     |
| -------------------- | --------- | ------------- | --------- |
| Registered routes    | 320       | **333**       | +13       |
| Sitemap URLs         | 320       | **333**       | +13       |
| Exported pages       | 322       | **335**       | +13       |
| Unit / content tests | 2219      | **2289**      | +70       |
| Test files           | 53        | **54**        | +1        |
| Playwright tests     | 162       | **220**       | +58       |
| Institution records  | 8         | **9**         | +1        |
| Profession records   | 6         | 6             | 0         |
| Source records       | 224       | **225**       | +1        |
| **Shared JS**        | 663,309 B | **663,374 B** | **+65 B** |
| CSS                  | 29,658 B  | 29,406 B      | −252 B    |
| `out/` on disk       | 72 MB     | 74 MB         | +2 MB     |

**Client JS grew by 65 bytes for thirteen new pages.** Part K's requirement is met by
construction: both registries are imported by server components only, no reference data is
serialised into a client island, and the two detail templates are server-rendered with no
interactivity of their own. The CSS reduction is the hubs shedding grid utilities they no
longer need as indexes.

---

## 3. Validation

```
npm ci                  clean install
npm run format:check    PASS
npm run lint            PASS
npm run typecheck       PASS
npm test                PASS — 54 files, 2289 tests
npm run build           PASS
npm run verify:output   PASS — 333 routes / 335 pages / 333 sitemap URLs
npm run test:e2e        PASS — 216 passed, 4 skipped (desktop + mobile Chromium)
route matrix            PASS — 333 routes + 28 must-404 paths, 361/361
```

The route matrix is registry-derived (`scripts/route-matrix.mjs`) and was extended with the
eleven Wave 2 paths that must 404: the two hub-only institution types and the nine candidates
the matrix merged, aliased or rejected.

---

## 4. Adversarial content QA (Part Q)

Run over all thirteen new pages against the brief's ten questions. **One systematic P1 and
two P2s were found, all in content written earlier in this same phase.**

### P1 — country examples unsupported by the citing page's own sources

The brief's question 1 ("does the cited source actually support the claim?") and question 2
("is a country-specific fact presented as global?") both caught this.

Several worked examples made specific factual claims about a named country while the page
cited nothing scoped to that country:

| Page                                 | Claim                                                            | Cited                              |
| ------------------------------------ | ---------------------------------------------------------------- | ---------------------------------- |
| `/institutions/prosecution-service`  | French prosecutors are magistrats without irremovability         | UN guidelines + general UNODC only |
| `/professions/judge`                 | What the German Basic Law provides on tenure                     | ICCPR only                         |
| `/professions/detective`             | Germany's prosecutor-led investigation model                     | no German source                   |
| `/institutions/correctional-service` | Japanese and Canadian arrangements                               | Mandela Rules only                 |
| `/professions/patrol-officer`        | French three-tier officer types; Japanese prefectural employment | no FR/JP source                    |

The claims are accurate — they restate material already researched in the dossiers — but the
pages could not show it. On a hub summary that is survivable; on a canonical page it is the
precise failure the registry's `note` field exists to prevent.

**Fixed** by attaching the supporting country source to each page: `fr-justice-parquet`,
`de-grundgesetz`, `de-stpo-160`, `jp-moj-prosecutors`, `jp-moj-corrections`,
`jp-courts-judicial-system`, `ca-statcan-corrections`, `us-bjs-csllea-2018`,
`fr-code-defense-l3211-3`, `fr-csi-l511-1`, `jp-npa-police-of-japan-2020`.

**Prevented from recurring** by a test: every country example must be backed by a source whose
`jurisdiction` matches that dossier's `countryCode`.

### P2 — two claims that could not be sourced at all, and were changed

- `/professions/prosecutor` asserted that many American prosecutors are elected. True, and
  **no source in the registry establishes it** — the US prosecution sources are federal and
  describe presidentially appointed officials. The example was replaced with Japan, which is
  sourced. The elected-prosecutor point is a genuine gap and is listed in §8.
- `/institutions/transport-police` asserted how France distributes network policing. Nothing
  established it. The note now makes the narrower point that France organises policing by
  authority and territory rather than by network, which `fr-csi-l511-1` does support.

### Questions that produced no finding

- **Q3, terminology falsely equated.** The gendarmerie page carries an explicit `uncertainty`
  entry stating that the French and Spanish forces differ from one another and neither is a
  template. `commonConfusions` on every page names the adjacent type.
- **Q4, historical continuity overstated.** Only one page carries history
  (`transport-police`), it is `temporalScope: 'mixed'` with an explicit historical period, and
  its `uncertainty` states the dated material is British and is one documented national case.
- **Q7, respect turning into advocacy.** Each page states purpose _and_ constraint in the same
  structure; `accountabilityNote` is a required field on every institution, and the municipal
  police page states plainly that local accountability is "a genuine strength and a genuine
  weakness of the same design".
- **Q10, occupational conditions generalised.** No page carries pay, staffing, attrition,
  injury or entry requirements. The profession template renders a standing scope callout
  saying so, and the constraint is inherited from the pre-existing registry rule.

---

## 5. Non-vacuity of the new tests

The publication gate is driven with nineteen deliberately broken records — one source, an
unknown source, no country example, an example naming an unresearched country, a malformed
date, a missing governance/accountability/purpose/ethics note, no oversight, no related
record, an unregistered route — and each is asserted to fail.

The country-source invariant was **mutation-tested**: removing `fr-justice-parquet` from
`prosecution-service` produces `prosecution-service cites france but no source scoped to FR`,
and restoring it returns the suite to green. This is recorded because the first mutation
attempt silently failed to apply against prettier's reformatting and appeared to prove the
test vacuous — an invariant nobody has watched fail is not yet an invariant.

Two negative route tests carry the rest of the weight: one asserts that a published record
which is not fact-checked has no route and cannot be resolved by slug (first asserting the
hub-only case exists, so it cannot pass vacuously), and one asserts no route exists for any
of eleven merged, aliased or rejected candidates.

---

## 6. Accessibility

Tested on representative new pages (`/institutions/transport-police`,
`/institutions/federal-investigative-agency`, `/professions/judge`, `/professions/prosecutor`,
`/institutions`).

| Check                                               | Result                                            |
| --------------------------------------------------- | ------------------------------------------------- |
| Exactly one `h1` per page                           | Pass (13/13)                                      |
| Breadcrumb navigation present, registry-derived     | Pass                                              |
| Skip link first in tab order, moves focus to `main` | Pass                                              |
| No horizontal overflow at 320px                     | Pass                                              |
| No horizontal overflow at 200% text                 | Pass                                              |
| Long institution names wrap without overflow        | Pass — measure-width column, no fixed-width cells |
| Sources rendered visibly, not only in markup        | Pass                                              |
| Ecosystem banner + cookie settings present (Part J) | Pass (13/13)                                      |
| Headings/landmarks via SiteShell                    | Pass — no page bypasses the shell                 |

Reduced motion and contrast are inherited unchanged; no new colour or animation was
introduced. `tests/unit/contrast.test.ts` still passes.

---

## 7. SEO and structured data

- Unique title, description and canonical per route; canonical asserted per page in the
  browser suite and checked for duplicates across all thirteen.
- Both hubs re-typed as `CollectionPage`; detail pages are `WebPage` with `BreadcrumbList`.
- JSON-LD parses on every exported page; `GovernmentOrganization` asserted absent.
- Sitemap parity 333/333.
- No banned superlative appears in any new copy.
- **No redirects required** — no existing URL was renamed, removed or re-parented. Part F is
  satisfied: the hubs changed content, not paths.

---

## 8. Known limitations

1. **Part C shipped no history pages.** The corpus was tested host by host rather than
   assumed: National Archives, British Library, Library of Congress and Historic Hansard are
   reachable; Smithsonian, the Metropolitan Police, the Gendarmerie nationale, parliament.uk
   and Britannica all return 403. Hansard has no sitting records indexed for 1829, so the
   provenance of the "nine Peelian principles" could not be settled from the primary
   parliamentary record and no Peel page was written. The one archival source that did verify
   is used, on `/institutions/transport-police`.
2. **Two institution types remain hub-only.** No border, customs, coast-guard or maritime
   source exists in the registry.
3. **`/professions/prosecutor` overlaps `/prosecution/what-does-a-prosecutor-do`** more
   closely than any other pair. Kept separate on a role-versus-function split, documented, and
   flagged as the first thing to revisit if the two converge.
4. **Elected prosecutors are unsourced.** A significant feature of American prosecution that
   the registry cannot currently support.
5. **Country examples are drawn from nine dossiers**, weighted to France, Japan, Spain,
   Germany, the US, Brazil, Switzerland and Canada. Coverage of the other 24 researched
   countries in the reference layer is thin.

---

## 9. Recommended next cluster

**Route the glossary, then the state/provincial policing tier.**

The glossary holds 32 terms with no individual routes — the same shape this phase found in
institutions and professions, and the same fix, at lower cost because the records already
exist and the gate is now written.

After that, `state-police` / `provincial-police` is the largest genuine gap in the institution
layer, and it is the one that most needs the per-system sourcing this phase deferred: the US,
Brazilian, Canadian and Australian arrangements share a name and very little else.
