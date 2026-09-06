# Wave 25 QA — country recruitment and police career entry paths

## 1. Wave 24 merge gate

Ran **three times, failed twice.** On the first two runs `origin/main` was still at `ae1cf16` with
every Wave 24 element absent, verified three independent ways: the tip SHA, `git branch -r --contains`
on both the head and the first commit of the branch, and direct content reads. Work stopped both
times.

On the third run `origin/main` had moved to **`cb549847ca7331af9511e6cee63082957bc73a3e`** (PR #37).
Verified substantively, not by ancestry: 12/12 guides, `emergency-dispatcher`, career fields on 8
records, 9/9 sources, hub grouping, counts 29/8/353, 12/12 files, **8/8 named guards**, roadmap
Phase 38, `npm ci` + full suite exit 0 (7,769 tests), build and `verify:output` exit 0, graph 0/0/0,
Playwright 1,486 passed, and corpus-wide visible raw Markdown **0**.

One method note: an early per-branch content probe printed nothing for any branch, **including the
Wave 24 branch itself**. It was self-tested, found broken, and discarded rather than reported.

## 2. Deltas

| Measure                   | Before (`cb54984`) | After      | Delta     |
| ------------------------- | ------------------ | ---------- | --------- |
| Published routes          | 502                | 512        | +10       |
| Exported pages            | 504                | 514        | +10       |
| Sitemap URLs              | 502                | 512        | +10       |
| Published guides          | 160                | 165        | +5        |
| Country modules published | 247                | 252        | +5        |
| Country module types      | 12                 | 13         | +1        |
| Sources                   | 353                | 358        | +5        |
| Unit tests                | 7,769              | 8,016      | +247      |
| Unit test files           | 79                 | 80         | +1        |
| Playwright tests          | 1,486              | 1,626      | +140      |
| E2E specs                 | 18                 | 19         | +1        |
| **Client JS**             | 800 KB             | 800 KB     | **+0 KB** |
| **CSS**                   | 30,022 B           | 30,022 B   | **+0 B**  |
| `out/`                    | 155,336 KB         | 157,752 KB | +2,416 KB |

No interactive eligibility checker, quiz, tracker, job widget or client-side comparison engine. The
comparison is a server-rendered definition list. **No component was changed at all.**

## 3. Architecture

A thirteenth country module: `/countries/{country}/police-recruitment`. Chosen over three
alternatives because every fact is jurisdiction-specific, and because the module inherits both the
registry (routes, navigation, breadcrumbs, sitemap, verifier) and `factsVerifiedOn`, which the
country publication gate already makes mandatory. **Not** added to `REQUIRED_PUBLISHED_MODULES`:
32 dossiers exist and six were researched, so requiring it would either break 26 countries or invite
thin templates. A test asserts both facts.

## 4. Mutation proofs — 15 run, 15 valid, 15 caught, 3 caught only after the fixes they forced

| Id     | Mutation                                             | Result                    |
| ------ | ---------------------------------------------------- | ------------------------- |
| W25M1  | Berlin requirement widened to Germany                | CAUGHT                    |
| W25M2  | One department's requirement widened to the US       | CAUGHT                    |
| W25M3  | Residency/nationality collapsed to citizenship       | CAUGHT                    |
| W25M4  | Universal degree requirement                         | **SURVIVED**, then CAUGHT |
| W25M5  | Campaign age window restated as permanent            | CAUGHT                    |
| W25M6  | Country-scoped source removed, claim retained        | CAUGHT                    |
| W25M7  | Block cites an undeclared source                     | CAUGHT                    |
| W25M8  | Vetting-evasion advice                               | CAUGHT                    |
| W25M9  | Medical-concealment advice                           | **SURVIVED**, then CAUGHT |
| W25M10 | Interview model answers                              | CAUGHT                    |
| W25M11 | Invented live vacancy with deadline and place count  | CAUGHT                    |
| W25M12 | Individualised eligibility advice                    | CAUGHT                    |
| W25M13 | Recruitment appeal filing procedure                  | **SURVIVED**, then CAUGHT |
| W25M14 | Fake later `factsVerifiedOn` with no re-verification | CAUGHT                    |
| W25M15 | Recruitment ranking published                        | CAUGHT                    |

### W25M4 — the most general finding in the wave

The mutation injected "police officers need a degree in every system" into a sentence beginning
"the comparison confirms **rather than** complicates:". `deniesForward` scanned the entire preceding
text, found "rather than", and neutralised a claim it had nothing to do with. All 153 tests passed.

Two fixes, in order. First a 60-character window, on the ground that a governing negation sits next
to what it governs. **That was not enough** — "rather than" was inside the window. The second fix is
the real one: **a negation cannot govern across a clause boundary**, so only text after the last
colon, semicolon or dash counts. Here "rather than" belonged entirely to the clause before the
colon, where its own object already sat.

This is a weakness inherited from Wave 21's original helper and carried through Waves 23 and 24. It
is now fixed in the lineage.

### W25M13 — a scope rule that applied only to new pages

The mutation inserted a recruitment appeal filing procedure into a **Wave 24** page and survived,
because the procedural guards ran only over Wave 25's units. A product-scope rule that applies only
to the newest pages is not a product-scope rule.

Made corpus-wide — at which point both guards fired on legitimate pre-existing content: "police
investigate, then hand a **file** to a prosecutor" (the noun) and "contest a **decision**" in a
rule-of-law sentence about access to justice. So `file` now needs its verb sense and an object, and
the appeal guard needs recruitment context. Both then passed corpus-wide and caught the mutation.

### W25M9

"leave out disclosing **any** medical condition" — the object need not follow the verb immediately.

## 5. Adversarial QA — 24 lenses

**Findings: 2 P1, 1 P2. Four candidates refuted.** Every finding reproduced before being acted on.

### P1

1. **The Germany module carried no affiliation disclaimer.** Found by the wave's own e2e. Four of
   five country pages had one; Germany did not. Reproduced by grepping each dossier (`ireland: 1,
netherlands: 1, new-zealand: 1, germany: 0, united-states: 1` — the US one had itself been added
   earlier the same session after a test failure). Fixed on the page.
2. **The e2e asserted the wrong thing about external links.** It required country pages to contain
   _no_ outbound links, and all five failed. That assertion was backwards: Part AJ wants official
   sources unusually visible, because they are the only current position and handing the reader to
   the authority is part of the page's purpose. Reproduced by inspecting the rendered source list.
   The test now asserts official sources **are** reachable, while the prose itself carries none.

### P2

3. **Three test guards were over-broad on first run**, and the content was not changed for any of
   them. `isAsserted` fired on a page's own self-refuting quotation — 'Writing that as "you must be
   an Irish citizen" excludes, on paper, most of the people the rule actually admits' — so it now
   exempts a quoted formulation that the same sentence corrects, requiring both the quotation marks
   and a correcting verb. The ranking guard fired on the sentence refusing rankings. And
   `PROCEDURAL_HOWTO` matched "then **serve** a probationary period", an ordinary career sentence
   caught by a guard aimed at serving legal process.

### Refuted

Four automated flags, all checked and none a defect: the unresearched-country hits are the sentences
disclaiming them; "police officers need a degree" and "must be an Irish citizen" are a misconception
claim and a corrected quotation; and "US police require" is `"the US police requirements"` inside a
sentence stating that asking for it "asks for something that does not exist" — matched by an ad-hoc
probe looser than the real guard, which does not fire.

Also verified clean: zero fact paragraphs without sources; all five new sources `government`,
jurisdiction-tagged, content-confirmed and carrying a `SCOPE:` note; all `relatedGuides` resolve;
`factsVerifiedOn` present on all five modules and never later than the newest source's `verifiedOn`;
zero money, vacancy, gaming or individualised-advice matches.

## 6. Safety and scope architecture

- **Source scope ≥ claim scope.** Eight patterns for country-level widening, plus a per-module check
  that no country page states a requirement for another country. Proved by W25M1 and W25M2.
- **Campaign scope ≠ permanent rule.** The Irish age figures may appear only in a sentence carrying
  the campaign anchor; the source record itself must be marked `CAMPAIGN-SPECIFIC`. Proved by W25M5.
- **Selection-gaming safety.** Seven patterns for vetting evasion, medical concealment, interview
  gaming and test exploitation, run **corpus-wide**. Proved by W25M8, M9, M10.
- **Freshness integrity.** `factsVerifiedOn` must be an ISO date and must not post-date the newest
  source's own verification. Proved by W25M14.
- **No live vacancy.** Four patterns for recruiting status, deadlines and place counts. Proved by
  W25M11.
- **Product scope.** Procedural-depth and appeal guards, both corpus-wide. Proved by W25M13.

## 7. Accessibility

Per page across desktop and mobile, on all ten new pages: one `h1`, no heading-level jump above one,
a description over 60 characters that is not the title, no horizontal overflow at 320px **or** 200%
text, and skip-link → `main` keyboard focus. Seven official terms are asserted present and
non-overflowing at 320px, including `erweiterte Berufsbildungsreife`, `bachelor Politiekunde
Wijkagent`, `Qualifikationsebene`, `An Garda Síochána` and `toelatingstoets`.

## 8. Final validation

| Gate                            | Result                                                |
| ------------------------------- | ----------------------------------------------------- |
| `npm ci`                        | exit 0                                                |
| `npm run format:check`          | exit 0                                                |
| `npm run lint`                  | exit 0                                                |
| `npm run typecheck`             | exit 0                                                |
| `npm test`                      | exit 0 — 8,016 tests / 80 files                       |
| `npm run build`                 | exit 0                                                |
| `npm run verify:output`         | exit 0 — 512 routes, 514 pages, 512 sitemap URLs      |
| `node scripts/route-matrix.mjs` | exit 0                                                |
| `npm run test:e2e`              | exit 0 — 1,626 passed, 4 skipped, 19 specs            |
| Link graph                      | 0 orphans, 0 weakly linked, 0 dead ends               |
| Pre-existing inbound audit      | all 10 new pages linked from pages predating the wave |

## 9. Known limitations

- **Five country pages, not the 6–10 the brief targets.** England & Wales was researched to a
  publishable standard but **has no country dossier** to attach a module to, and inventing one is
  out of scope; its evidence powers the comparative guides instead. Czechia and Norway failed on
  source currency. The alternative was a thinner sixth page, which Part C forbids.
- **Germany means Berlin and Bavaria.** Fourteen Länder and the Bundespolizei were not researched.
- **The United States page states no entry requirement**, because none was established. The role of
  state standards bodies could not be verified: `post.ca.gov` refused connections and the only
  federal material located dated from the 1970s.
- **The Irish evidence is a 2024 campaign booklet.** The underlying Regulations were named but not
  read directly.
- **No selection stage, order or content was researched** for England & Wales or Germany.
- **No fitness standard, medical criterion or vetting criterion exists anywhere in this wave**, by
  policy rather than for want of research.
- **The wave publishes no criminal-history guidance.** Two systems require conviction disclosure;
  neither publishes the criteria applied, and a page on it would be individualised advice.
