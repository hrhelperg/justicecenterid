# Wave 26 QA — police equipment, uniforms and professional technology

## 0. A note on the brief

**The Wave 26 brief arrived truncated**, ending mid-list in the GENERAL DUTY EQUIPMENT cluster after
"gloves; general protective". I flagged that at the end of the previous run; the instruction to
continue was given, so this wave was executed on the program-level material that did arrive —
mission, research clusters, the hard commerce and safety boundary, the commercial direction and the
execution model — with the established wave pattern supplying the specifics that did not: baseline,
research, tests with named invariants, mutation proofs, adversarial QA, documentation, full gate,
one push.

Publication target was inferred at **7 pages**, proportionate to a foundation wave with five
sources and consistent with Waves 25 (10) and 25.5 (3).

## 1. Wave 25.5 merge gate

`origin/main` at **`ee2b5590455a660c40d70589dd95acd80e596079`** (PR #39). Verified substantively:
7/7 country recruitment modules, the England and Wales page, both Wave 25.5 sources, the
`RE-VERIFIED` and `CYCLE-ANCHORED` notes, counts 35/360, 4/4 files, Phase 39.5, `npm ci` and full
suite exit 0 (8,135 tests), build and `verify:output` exit 0 (515/517/515), graph 0/0/0.

## 2. Deltas

| Measure          | Before (`ee2b559`) | After      | Delta     |
| ---------------- | ------------------ | ---------- | --------- |
| Published routes | 515                | 522        | +7        |
| Exported pages   | 517                | 524        | +7        |
| Sitemap URLs     | 515                | 522        | +7        |
| Published guides | 166                | 173        | +7        |
| Sources          | 360                | 365        | +5        |
| Unit tests       | 8,135              | 8,353      | +218      |
| Unit test files  | 81                 | 82         | +1        |
| E2E specs        | 20                 | 21         | +1        |
| **Client JS**    | 800 KB             | 800 KB     | **+0 KB** |
| **CSS**          | 30,022 B           | 30,022 B   | **+0 B**  |
| `out/`           | 164,336 KB         | 167,184 KB | +2,848 KB |

No component changed. No client-side anything.

## 3. The boundary this wave is built on

**What equipment exists, why, who issues it, under what policy, to what standard — never how
anything is used, carried, configured, selected or bought.**

There is no product name, brand, manufacturer, supplier, price, specification, protection level or
capability figure anywhere in the wave, for regulated and unregulated categories alike. Restricted
categories are named only where a service's own published policy names them as issued, and the
question of when force may lawfully be used is routed to the existing legal page rather than
answered.

## 4. Findings

Full detail in `police-equipment-model-findings.md`. The three that reorganise the subject:

**Published equipment lists do not look like the popular picture.** The Garda policy puts "a
notebook, pen, medi-pouch" in the same sentence as the protective and restraint items, with no
hierarchy — the same imbalance Wave 24 found in measured training hours.

**A uniform's first stated function is not authority.** The Dutch police put visibility and
recognisability first, authority second, protection third. The common assumption reverses the first
two, and recognisability turns out to be an accountability function: it lets a person say afterwards
who dealt with them.

**Adoption is not governance.** Body-worn cameras reached 100% of United States departments serving
a million or more residents in 2020 while the overall figure stayed at 61.8% — so the question has
no single answer inside one country — and the same survey treats written policy as a separate
question from possession.

## 5. Mutation proofs — 12 run, 12 valid, 12 caught, 1 caught only after the fix it forced

| Id     | Mutation                                             | Result                    |
| ------ | ---------------------------------------------------- | ------------------------- |
| W26M1  | Commerce inserted into an equipment page             | CAUGHT                    |
| W26M2  | Weapon-use instruction                               | CAUGHT                    |
| W26M3  | Protection levels and ballistic capability published | CAUGHT                    |
| W26M4  | Identity-document security features described        | CAUGHT                    |
| W26M5  | Device capability and specification                  | CAUGHT                    |
| W26M6  | One service's list generalised to all services       | CAUGHT                    |
| W26M7  | US local figures widened to every country            | CAUGHT                    |
| W26M8  | Purchasing guidance with a price                     | CAUGHT                    |
| W26M9  | Official source replaced with a retailer             | CAUGHT                    |
| W26M10 | Procedural-law drift into the equipment layer        | **SURVIVED**, then CAUGHT |
| W26M11 | Manufacturer and brand recommendation                | CAUGHT                    |
| W26M12 | Tactical configuration and carry positioning         | CAUGHT                    |

### W26M10 — a guard that existed but not here

The mutation inserted a step-sequenced appeal procedure into an equipment page and survived this
wave's suite, because only the _proportional_ depth check had been carried over and one sentence
sits inside its allowance.

Before fixing it I checked whether the content was actually unprotected, by re-running the **Wave 25
suite** against the same mutation: it **caught it**, because that suite carries the corpus-wide
step-sequenced guard. So the regression would have failed a full run.

What was missing was self-containment. Mutation proofs run per-suite, and a guard living only in a
sibling file is easy to lose in a later refactor — so the guard is now carried into this wave's
suite too, corpus-wide, and the mutation re-proved as CAUGHT.

## 6. Adversarial QA

**Findings: 1 P1, 3 P2.** Every one reproduced before being acted on.

### P1

**The e2e asserted that equipment pages carry no outbound links**, and all seven failed — because
every guide renders a source list and the sources are official government pages. **Citation is not
referral.** This is the second time this exact assertion has been wrong: Wave 25 made it about
recruitment pages and I corrected it there for the same reason. The test now asserts every outbound
link is an official source, none is a retailer or marketplace, and every one is https — which is
both true and stronger than the original.

### P2 — three over-broad guards, content unchanged

1. **The commerce pattern matched the legal verb "order".** "order a search", "order a person to
   submit specified computer data", "order content preserved" — most of the investigations layer. A
   commerce guard needs a commercial object, not a transactional-sounding verb.
2. **The protection-level pattern matched the standards page's own denial** — the page states that
   "NO protection level, product, model, specification or performance figure appears on this page".
   Narrowed to require an actual level value.
3. **`-review$` matched `cassation-review` and `constitutional-review`** — legal-review pages among
   the oldest in the corpus, nothing to do with buying guides.

### Refuted

No brand, manufacturer, price or specification anywhere; zero fact paragraphs without sources; all
five sources `government`, jurisdiction-tagged, content-confirmed and carrying a `SCOPE:` note; no
source URL matching a shop, store or review host; graph 0/0/0.

### One structural finding, repeated

**The link-graph metric passed at 0/0/0 while all seven pages had no inbound link from any
pre-existing page** — the self-referential cluster Wave 24 first identified. Eight editorial
backlinks were added, including one from `who-regulates-forensic-science` because the verification
problem there is structurally identical.

## 7. Safety architecture

- **Commerce** — six patterns, run corpus-wide, plus a brand/manufacturer check.
- **Restricted-category misuse** — six patterns for use, configuration, selection and specification,
  corpus-wide. Naming a category as issued is permitted; explaining it is not.
- **Capability** — four patterns, because a page can avoid every commercial word and still become an
  equipment-intelligence database.
- **Impersonation** — five patterns, corpus-wide, because a page explaining how officers are
  identified is one edit from a page explaining how to appear to be one.
- **Scope** — four patterns against generalising one service's policy.
- **Procedural depth** — proportional and step-sequenced, both corpus-wide.

## 8. Final validation

| Gate                            | Result                                           |
| ------------------------------- | ------------------------------------------------ |
| `npm ci`                        | exit 0                                           |
| `npm run format:check`          | exit 0                                           |
| `npm run lint`                  | exit 0                                           |
| `npm run typecheck`             | exit 0                                           |
| `npm test`                      | exit 0 — 8,353 tests / 82 files                  |
| `npm run build`                 | exit 0                                           |
| `npm run verify:output`         | exit 0 — 522 routes, 524 pages, 522 sitemap URLs |
| `node scripts/route-matrix.mjs` | exit 0                                           |
| `npm run test:e2e`              | exit 0                                           |
| Link graph                      | 0 orphans, 0 weakly linked, 0 dead ends          |

## 9. Known limitations

- **Seven pages from five sources, and the clusters the brief listed are not all covered.** Duty
  bags, gloves, footwear, radios and the historical evolution of equipment were not researched. The
  truncated brief means the intended scope of those clusters is unknown.
- **The equipment list is one service's.** An Garda Síochána publishes its policy openly; most do
  not, and no other service's issued equipment was researched.
- **The uniform-purpose finding is one service's statement about itself**, not a comparative result.
- **The standards regime is one category in one country.** Whether comparable regimes exist
  elsewhere, or for other categories, was not researched.
- **The body-worn video figures are United States local police departments only**, for 2016 and
  2020, and say nothing about federal or state agencies or any other country.
- **What any body-worn video policy requires** — activation, retention, access — was not researched
  and is not described.
- **No historical material.** The evolution cluster the brief names was not researched.
