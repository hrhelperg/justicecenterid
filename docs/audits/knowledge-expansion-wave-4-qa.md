# Knowledge Expansion Wave 4 — QA record

**Branch:** `feat/knowledge-expansion-wave-4`
**Base SHA:** `0eb9425233a44f3f3f24ed875818a44428a9c4fa`
**Date:** 2026-08-10

Baseline: `docs/audits/knowledge-expansion-wave-4-baseline.md`.
Plans: `docs/research/local-municipal-policing-cluster-plan.md`,
`docs/research/jurisdiction-relationships-research.md`.
Matrix: `docs/seo/knowledge-expansion-wave-4-cannibalization.md`.

---

## 1. What shipped

18 candidates → **7 published, 8 merged, 3 deferred, 0 rejected**.

```
/law-enforcement/police-jurisdiction                     six senses of the word; concurrent authority
/law-enforcement/how-policing-is-divided-between-levels  four allocation patterns, five countries
/law-enforcement/contract-policing                       provider / client / owner kept apart
/law-enforcement/police-command-and-coordination         cooperation is not hierarchy
/law-enforcement/municipal-and-national-police           two tiers, one territory
/law-enforcement/local-police-governance                 who directs, and why there is no rule
/law-enforcement/sheriffs-and-city-police                US-scoped by declaration
```

## 2. Metrics

| Metric               | Before    | After         | Delta |
| -------------------- | --------- | ------------- | ----- |
| Registered routes    | 342       | **349**       | +7    |
| Sitemap URLs         | 342       | **349**       | +7    |
| Exported pages       | 344       | **351**       | +7    |
| Unit / content tests | 2347      | **2527**      | +180  |
| Test files           | 55        | **56**        | +1    |
| Playwright tests     | 284       | **346**       | +62   |
| Source records       | 225       | 225           | **0** |
| **Shared JS**        | 663,403 B | **663,403 B** | **0** |
| **CSS**              | 29,406 B  | **29,406 B**  | **0** |
| `out/` on disk       | 76 MB     | 78 MB         | +2 MB |

**Zero JS and zero CSS delta.** Part U is satisfied absolutely rather than approximately:
the cluster adds no client code, no relationship engine, no graph library and no
visualisation. It also adds **no route infrastructure** — `/law-enforcement/[slug]` already
routed `PUBLISHED_GUIDES`, so a relationship page is a `Guide` record and nothing else.

**No new sources.** All seven pages rest on the 225 records verified in earlier waves.

## 3. Validation

```
npm ci                  clean install
npm run format:check    PASS
npm run lint            PASS
npm run typecheck       PASS
npm test                PASS — 56 files, 2527 tests
npm run build           PASS
npm run verify:output   PASS — 349 routes / 351 pages / 349 sitemap URLs
npm run test:e2e        PASS — 342 passed, 4 skipped (desktop + mobile Chromium)
route matrix            PASS — 349 routes + 46 must-404 paths, 395/395
```

## 4. Mutation proofs

All three required invariants were mutation-tested. **Two of the three exposed a weakness in
the test rather than in the content**, which is the point of doing it.

### M1 — country-scoped source invariant · PROVEN

Removing `ca-rcmp-contract` from `contract-policing` fails three tests, including
`contract-policing cites canada without a CA source`. It also surfaced a second check worth
having: a paragraph citing a source the guide omits from its own `sources` array, so the
citation never reaches the rendered source list.

### M2 — counterexample requirement · PROVEN

Stripping `counterExamples` from `contract-policing` fails that page's assertion while the
other five comparative pages still pass — so the check is per-record rather than an aggregate
that one good page could satisfy.

### M3 — contracted vs shared · PROVEN, after two failed attempts

Worth recording in full, because both failures were informative.

**First attempt:** the test asserted only that the words _shared_ and _contracted_ appeared
somewhere on the page. A mutation deleting the sentence that explains the difference **still
passed**, because the words survived in a neighbouring note. A test a paraphrase can satisfy
is not a test. Strengthened to pin the substance: _shared is run jointly between peers_,
_contracted is one jurisdiction buying from another_.

**Second attempt:** a three-point mutation still passed. Investigation showed the distinction
is stated in **five** separate places on the page — definition, client-jurisdiction
definition-list entry, the "Contracted is not shared" callout, the misconception reality, and
the Switzerland counterexample note. Only a five-point mutation breaks the test.

That redundancy is a property of the content, not a defect in the assertion, and it is
recorded here so a future reader does not mistake a passing single-point mutation for a
vacuous test.

## 5. Adversarial QA

Run over all seven pages against the brief's twelve questions.

### Findings fixed

**P1 — a counterexample with no source behind it.** `police-command-and-coordination` used
France as its counterexample while citing no French source. Caught by the invariant, not by
reading. Fixed by adding `fr-code-defense-l3211-3`, which supports the claim made.

**P1 (test defect) — a safety test that punished its own safeguard.** The check for universal
sheriff claims searched the whole page for "all sheriffs run jails" and failed on the page's
_disclaimer_, which says the sources "do not support a claim that … all sheriffs run jails".
A substring search cannot distinguish an assertion from its negation, and a safety test that
flags disclaimers is satisfied by deleting them. Rewritten to check only paragraphs marked
`claim: 'fact'` — the page's sourced assertions — with a separate test requiring the
disclaimer to be present.

**P2 — a brittle Wave 1 assertion.** A test pinned the law-enforcement section at exactly
seven guides. It was a tripwire for every later wave rather than a check on Wave 1; it now
names the three pre-existing records it is actually about.

### Questions producing no finding

- **Q1, distinct from an institution page.** No relationship page carries a "what is X"
  section; each links to the institution page instead.
- **Q2, secretly US-only.** The flagship page draws four allocation patterns from five
  countries. The genuinely US-specific material has its own page, declared `jurisdiction: ['US']`
  and stating on the page that the office does not travel.
- **Q3, "jurisdiction" used consistently.** Six senses defined once and used consistently
  across the cluster.
- **Q4/Q5, coordination as command, contract as ownership.** Each has a page whose subject is
  the distinction, and tests assert the negative phrasings are absent.
- **Q6, peers portrayed as hierarchical.** Switzerland's "not a superordinate authority" is
  quoted on two pages.
- **Q8, missing counterexample.** Six of seven pages carry one; the jurisdiction page is
  conceptual rather than comparative and is exempted explicitly in the test.
- **Q10, operational exposure.** No page describes how boundaries could be used to advantage.
  A test asserts eight evasion phrasings are absent, and the jurisdiction page carries a scope
  callout stating it is not guidance for any encounter.

## 6. Accessibility

Verified on `/law-enforcement/contract-policing`, `/police-jurisdiction`,
`/sheriffs-and-city-police`, `/how-policing-is-divided-between-levels`,
`/local-police-governance`.

| Check                               | Result     |
| ----------------------------------- | ---------- |
| One `h1` per page                   | Pass (7/7) |
| Breadcrumbs, registry-derived       | Pass       |
| Skip link first, focuses `main`     | Pass       |
| No horizontal overflow at 320px     | Pass       |
| No horizontal overflow at 200% text | Pass       |
| Sources rendered visibly            | Pass       |
| Ecosystem banner + cookie settings  | Pass (7/7) |
| No page bypasses SiteShell          | Pass       |

**No comparison tables were used.** The material is comparative but the structure is prose
and definition lists, which avoids the table-accessibility requirements entirely rather than
satisfying them. Country evidence renders as a description list with a link per country.

## 7. SEO and structured data

- Unique title, description, canonical and reader question per route; uniqueness asserted.
- Existing `Article` + `BreadcrumbList` pattern reused. **No new schema type was created.**
- `GovernmentOrganization`, `GovernmentService` and `PoliceStation` all asserted absent.
- Sitemap parity 349/349.
- No banned superlative in any new copy.
- **No redirects** — no existing URL changed.

## 8. Known limitations

1. **Three candidates deferred for want of sources**: local public-order authorities,
   special-purpose police agencies, campus police. Only transport policing is sourced, and it
   already has an institution page.
2. **No typed relationship vocabulary.** Assessed and declined — the distinctions are the
   subject of the prose, not metadata about it, and an enum whose values only appear in a test
   does not clear the bar for reversing the project's earlier rejection of a relationship
   graph. No architecture document was created, per the brief's instruction.
3. **The governance page is patterns, not a survey.** Its `uncertainty` field says so: it
   describes recurring arrangements from France, Japan and Spain and does not establish who
   controls the police in any country not named.
4. **The levels page is comparative but not exhaustive.** Four patterns from five countries,
   with two counterexamples. Unitary states with strong regional policing beyond Spain are
   not covered.
5. **Country coverage is weighted** to the eleven dossiers with the strongest institutional
   sourcing. The other 21 researched countries do not appear in this cluster.

## 9. Recommended Wave 5

**Police oversight bodies as a routed institution family.** The cluster now explains who
directs police and who may act where; the missing piece is the bodies that examine them —
independent complaints bodies, inspectorates, ombudsman offices, and judicial supervision.
`/law-enforcement/how-police-are-held-to-account` describes them as mechanisms; none is an
institution page, and the Wave 2 gate plus the `counterExamples` field are already in place to
build them properly.

Second: give `standard-of-proof` and `burden-of-proof` the comparative sourcing they need and
route them as a pair — still the best unrouted content on the platform, carried over from
Wave 3.
