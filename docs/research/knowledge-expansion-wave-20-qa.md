# Wave 20 QA record — public safety, emergency powers and civil protection

Branch `feat/knowledge-expansion-wave-20`, off `fe1a1e4`. Written 2026-08-26. No push during
implementation; one push at the end, after this record was complete.

Central question: how do modern justice systems provide extraordinary public-safety capacity
without making extraordinary power legally unlimited? Central editorial requirement: **capacity
without arbitrariness** — the wave must read as neither "emergency powers are bad" nor "emergency
powers justify what government thinks necessary".

## 1. Merge gate — Wave 19 verified in `main` by artifact

The brief required distrusting the PR title, the merge commit message, the branch name and the
statement that the merge happened. Ten artifact checks on `origin/main` at `fe1a1e4`, all passing,
are tabulated in `knowledge-expansion-wave-20-baseline.md` §1. The two that mattered most:

- the seven Wave 19 routes were **built and read from `out/`**, not merely found in source —
  7/7 rendered, 0 `__next_error__`;
- the emphasis renderer from `1cb8a54` was verified by confirming `<em>` and `<strong>` elements
  and **zero literal asterisks on pre-Wave-19 pages**, which is what the commit was for.

The reviewer decision on `1cb8a54` was KEEP. It is present, untouched, and this wave inherits both
it and the corpus-wide marker-resolution guard that came with it.

## 2. What shipped

Twelve routes. `/public-safety` was the only section in the corpus that was a hub with no
children; it now has eight guides.

| Route                                      | Section       | Reader question                                                                     |
| ------------------------------------------ | ------------- | ----------------------------------------------------------------------------------- |
| `what-public-safety-covers`                | public-safety | Is "public safety" just a broader word for policing?                                |
| `what-civil-protection-is`                 | public-safety | What is civil protection, and is it the same as civil defence?                      |
| `who-is-in-charge-in-an-emergency`         | public-safety | When a flood or major accident happens, which body is legally responsible?          |
| `national-and-local-emergency-authority`   | public-safety | When an emergency outgrows the authority handling it, what moves it up?             |
| `military-assistance-to-civil-authorities` | public-safety | When soldiers are sent to help at home, who is actually in command?                 |
| `what-a-state-of-emergency-changes`        | public-safety | What actually changes in law when a government declares one?                        |
| `who-can-declare-a-state-of-emergency`     | public-safety | Who is legally able to declare one, and does anyone else have to agree?             |
| `how-emergency-powers-end`                 | public-safety | Does a state of emergency actually end, and what happens to what was done under it? |
| `which-rights-can-never-be-suspended`      | justice       | Can a government suspend rights in an emergency, and are any untouchable?           |
| `reviewing-an-emergency-declaration`       | justice       | Can a court be asked whether the declaration itself was lawful?                     |
| `detention-under-emergency-powers`         | justice       | Can a person be held without being suspected of an offence?                         |
| `courts-during-a-state-of-emergency`       | courts        | Do the courts keep sitting, and can an emergency court try you instead?             |

The section split is the thesis made architectural: `/public-safety` carries capacity,
`/justice` and `/courts` carry the boundaries.

## 3. Measured deltas

| Metric                   | Before     | After         | Δ         |
| ------------------------ | ---------- | ------------- | --------- |
| Public routes            | 450        | **462**       | +12       |
| Sitemap URLs             | 450        | **462**       | +12       |
| Exported pages           | 452        | **464**       | +12       |
| Published guides         | 109        | **121**       | +12       |
| Source records           | 289        | **325**       | +36       |
| Vitest files / tests     | 74 / 5559  | **75 / 6152** | +1 / +593 |
| Playwright specs / tests | 13 / 800   | **14 / 928**  | +1 / +128 |
| **Client JS bytes**      | 663,491    | **663,525**   | **+34**   |
| CSS bytes                | 29,961     | **29,961**    | **0**     |
| Exported HTML bytes      | 40,637,648 | 45,446,778    | +4.81 MB  |
| `out/` total             | 115.44 MB  | 128.10 MB     | +12.66 MB |

**Client JS moved by 34 bytes** — the route-manifest entry for the new segment. No library, no
component, no chart. CSS is unchanged. The `out/` growth is prerendered HTML and per-route
payloads for twelve new pages, which is additional content rather than a regression.

## 4. Research method and scale

- **16 national systems and 4 supranational instruments** researched by nine parallel agents.
- **133 unique documents fetched and read**; **79 access failures recorded**, not hidden.
- **415 findings**: 327 ESTABLISHED, 50 PARTIALLY, 38 NOT ESTABLISHED.
- **Three independent adversarial verifiers** — source authenticity, overgeneralisation,
  country-scope leakage — each instructed to refute and to re-fetch. **313 verdicts: 278
  CONFIRMED, 31 OVERSTATED, 2 REFUTED, 2 UNVERIFIABLE.**
- Country matrix: **256 cells, 21% NOT ESTABLISHED**. Not one converted to "no".

Both refutations changed the content rather than being deleted. ICCPR Art. 4 had been filed as
Canada's derogation rule — Canada has none, which became a finding. And "all US disaster
declaration requests must come from a Governor" is wrong: 42 U.S.C. § 5170(b)(1) gives tribal
governments a parallel power.

## 5. Findings the wave exists to record

1. **Declaration authority is the most jurisdiction-specific thing in the subject.** Czechia and
   Spain each run three regimes with three different declaring authorities. Germany's defence
   emergency is determined by the Bundestag on a two-thirds vote. Ireland's shield is switched on
   by a resolution of _each_ House. South Africa's Constitution never names the declaring
   authority at all — that comes from the State of Emergency Act 64 of 1997.
2. **"Temporary" carries no common content.** Initial limits run from fourteen days (Kenya) to no
   fixed term (Ireland, where the shield persists until both Houses resolve it has ceased).
3. **The default points both ways.** Switzerland's security ordinance lapses unless someone acts to
   keep it; a United States national emergency continues unless someone acts to end it.
4. **Five architectures for rights, not one.** A list of non-derogable rights; a protected core of
   every right; a closed list of permitted measures; a closed list of suspendable rights; and no
   derogation machinery at all.
5. **Judicial review of emergency powers is not uniform.** Any competent court (South Africa); the
   apex court only (Kenya); split by the rank of the instrument (Spain); the declaration in
   principle unreviewable (Czechia, Pl. ÚS 8/20); ordinary administrative law (New Zealand).
6. **Exceptional courts are prohibited in four constitutions and permitted in one.** Ireland's
   Art. 38.3.1 allows them where the ordinary courts are determined inadequate — and the machinery
   has been switched on since 1972.
7. **Assistance is not government, and tasking is not command.** Australia's Defence Act s. 40(3)
   says in terms that requiring a police request does not transfer command of the force.
8. **The constitution provides for the emergency; it does not yield to it.** Brazil bars amending
   the Constitution while a state of defence or siege runs; Spain bars dissolving the Congress.
9. **No amnesty flows from an emergency.** Brazil's Art. 141 preserves liability for unlawful acts
   after the regime ends; South Africa bars any emergency legislation from indemnifying anyone.

## 6. Model decisions — five refusals, each argued against evidence

Recorded in full in `public-safety-emergency-model-findings.md`.

| Question               | Decision                               | Basis                                                                                                |
| ---------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| New route family?      | **No** — reuse `/public-safety/[slug]` | Eight sections already carry the identical eighteen-line file                                        |
| New temporal type?     | **No**                                 | `ScheduledChange` models corpus maintenance, not a regime's internal clock                           |
| New `InstitutionType`? | **No, on narrowed grounds**            | Five forms across fourteen systems; the statutory locus is a different kind of object in each        |
| New `RestrictedClaim`? | **No**                                 | The wave publishes no statistic                                                                      |
| New country module?    | **No**                                 | Every candidate's sub-national half was unresearched — Germany included, despite 29 source documents |

The institution decision was **corrected during QA rather than defended**. Its original premise —
"in four systems there is no body to point at" — was refuted for Switzerland by the wave's own
`ch-bzg` record, which quotes BZG Art. 7(3) naming a federal coordination organ; and the original
table listed twelve of fourteen systems, omitting the three that make the standing agency the
modal form. Both corrections are recorded, the argument is restated on the ground that survives
them, and the counter-argument from `coast-guard` and `border-and-customs-authority` is recorded
with what a future summary-only record would need.

## 7. Mutation proofs — 10/10 valid

Every proof asserted the anchor unique, the file hash changed, `git diff --stat` non-empty, the
mutated tree still typechecking — **a mutation that does not compile is not a proof** — the suite
then failing, the failure message being the intended one, and the tree reverting clean. Exit codes
read directly.

| ID  | Mutation                                          | Guard tripped                    | Verdict         |
| --- | ------------------------------------------------- | -------------------------------- | --------------- |
| M1  | emergency powers implied legally unlimited        | capacity/constraint              | VALID           |
| M2  | public safety implied to mean policing            | police-conflation                | VALID           |
| M3  | deployment implied to transfer civilian authority | military-conflation (2 patterns) | VALID           |
| M4  | actionable checkpoint/curfew evasion inserted     | safety guard                     | VALID (2nd run) |
| M5  | country-scoped source removed, claim left         | country-source (3 tests)         | VALID           |
| M6  | all rights implied suspended                      | rights-overstatement             | VALID           |
| M7  | courts implied never to review emergency powers   | false-universality               | VALID           |
| M8  | duplicate guide question planted                  | ownership (9 tests, 4 waves)     | VALID           |
| M9  | unsupported response-time statistic inserted      | restricted-statistic             | VALID           |
| M10 | civil-protection `InstitutionType` invented       | institution + reference gates    | VALID (2nd run) |

**Two proofs required a second run, and both second runs were the point of running them.**

_M10 was rejected as INVALID first time_ because the synthetic record did not typecheck. The
harness refused it on its own rule rather than counting it, and the mutation was redone against
the real `InstitutionType` shape.

_M4 revealed a genuine test defect_, and the most interesting finding of the wave's testing work.
An actionable instruction planted at the end of a misconception's `reality` did not trip the
safety guard. The cause is structural: a misconception must be **one unit** for a denial-aware
check, because the schema guarantees `reality` denies `claim` and splitting the pair reports the
corpus's own corrections as violations — but a directive check reads only the text _before_ the
match, and a misconception's reality almost always opens with a negation, which clears anything
planted later in the same unit. **The two checks need different unit sets**, and now have them.

## 8. Adversarial QA

Five lens groups over the brief's twenty lenses, then an independent reproducer and a completeness
critic. **52 findings — 1 P0, 13 P1, 24 P2, 14 P3 — and 35 explicit refutations.** Every P0 and P1
was reproduced independently before being acted on; the reproducer returned 6 REPRODUCED, 1
PARTLY, and 4 NOT_REPRODUCED because the fix had already landed while it was writing.

### The P0

The summary of `/public-safety/how-emergency-powers-end` stated a **seven-day** lower bound. That
figure belongs to New Zealand, which the page does not cite; the page's own misconception block
and variation list both say fourteen. `GuidePage` renders the summary as the lead paragraph _and_
as the meta description, so the wrong number was the first thing a reader or a search result would
have seen. Corrected.

### Source-integrity failures, which matter more than their severity suggests

| Defect                                                                                                                             | Why it matters                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| The page quoted CF Art. 136 § 2 in Portuguese and **no record carried it**                                                         | The country-source invariant is record-granular: it asks only whether the page cites _some_ Brazilian source |
| Every Czech quotation was stored with **diacritics stripped** — psp.cz serves Windows-1250 without a surviving charset declaration | A phrase printed on a page was unfindable in the record cited for it                                         |
| Two Swiss records pointed at **Fedlex ELI permalinks**, which return HTTP 200 while serving a JavaScript shell with no legal text  | The wave's own register recorded this; the records did not                                                   |
| ICCPR Art. 4 was hung on a **treaties.un.org URL the register records as never retrieved**                                         | It was read from OHCHR's PDF; provenance now stated                                                          |
| `se-constitution`'s Wave 20 quotations are **Swedish** while its url and title are the **English edition**                         | Provenance now stated                                                                                        |

### The content P1s

Switzerland's six-month sunset is RVOG Art. 7d for Art. 185(3) security ordinances, not every
ordinance made on constitutional authority. Japan's variation bullet said "no emergency regime at
all" where the sourced body correctly says no emergency chapter in the **Constitution** — and this
same wave describes Japan's statutory state of emergency disaster elsewhere. Germany's summary
gave the _Verteidigungsfall_ two-thirds threshold as the general answer. The military-assistance
summary answered "who is in command" with "the civil authority" when Defence Act s. 40(3) says in
terms that the police-request requirement **does not transfer command** — a provision already in
the source note that the page had not used. Ireland's Special Criminal Court machinery was
described as dormant in the present tense when it has been switched on since 1972.

Three pages understated their own coverage in the `uncertainty` field — the one place the corpus
promises accuracy about its own limits — and one callout claimed seven institutional forms while
enumerating five.

### What the pass found clean, and checked to find it

The refutations are recorded because an audit that lists only problems does not say what was
examined. Among them: no deployment, capability, tactical or evasion content anywhere; no sentence
a person in a real situation could act on; no loaded vocabulary and no serving official named; no
constructed URL — the register instead volunteers four of its own failed pattern-guesses; the one
Tier-2 record labelled as such and used only for the narrow proposition it supports; both access
limitations stated accurately with no page claim exceeding them; no existing page's question
re-answered; and the editorial thesis held in both directions on every page.

One reviewer noted that the wave's **systematic tilt runs the opposite way from what a reviewer
might expect** — it overstates constraint rather than power. Three of the P1s are instances of
that, and all three are fixed.

### Two new tests, both claim-granular

The suite passed over four of these defects, so two derived checks were added and **both failed on
published content**:

1. Every multi-word non-English phrase a page emphasises must be findable in the note of a source
   record _that page cites_. It caught three further defects on its first run, including a Czech
   quotation that had silently dropped the word _vláda_.
2. No scope sentence may understate the coverage of its own page.

## 9. Safety boundary

Not published anywhere: evasion of emergency restrictions; checkpoint or curfew bypass; avoiding
detection; interference with emergency communications; exploitation of jurisdiction gaps;
obstruction of evacuation; defeating crowd control; manufacturing grounds for review; filing
tactics; deadlines usable as legal guidance; methods of delaying enforcement; loophole
exploitation; tactical or deployment information; vulnerability maps; infrastructure weaknesses.

The guard is assertion-aware. A sentence matching a prohibited topic fails only if it is an
affirmative instruction: it is cleared by a negation governing the match or by disclaimer
vocabulary, and **both branches are exercised alone**. The tactical-detail check had to be made
assertion-aware during the first run, because its naive version failed on the sentence promising
the absence — _"it contains nothing about deployments, capabilities, locations, tactics or rules
of engagement"_. That is the mistake the brief names, caught by the brief's own rule.

All twelve pages state they are not legal advice or not guidance. All eight `/public-safety`
guides carry `safetyReview: 'cleared'`, which that section requires.

## 10. Full gate

Every command run to completion on the final tree, exit codes read directly.

| Command                                               | Exit | Result                                                         |
| ----------------------------------------------------- | ---- | -------------------------------------------------------------- |
| `npm ci`                                              | 0    | clean                                                          |
| `npm run format:check`                                | 0    | all files match Prettier style                                 |
| `npm run lint`                                        | 0    | clean                                                          |
| `npm run typecheck`                                   | 0    | clean                                                          |
| `npm test`                                            | 0    | **6152 passed, 75 files**                                      |
| `npm run build`                                       | 0    | static export                                                  |
| `npm run verify:output`                               | 0    | **462 routes / 464 pages / 462 sitemap URLs**                  |
| `node scripts/route-matrix.mjs http://127.0.0.1:4173` | 0    | all registered routes 200, canonical-correct; must-404 set 404 |
| `npm run test:e2e`                                    | 0    | **924 passed, 4 skipped (928 total)**                          |
| `node scripts/link-graph-audit.mjs`                   | 0    | **0 orphans, 0 weakly linked, 0 dead ends**                    |
| `findRestrictedPhrasing` over all twelve pages        | —    | **0 hits**                                                     |

## 11. Known limitations, stated rather than implied

- **No country module.** Germany has the deepest source base in the wave — 29 documents — and is
  still disqualified: its evidence is federal constitutional while the operational level is a Land
  competence, and not one Land statute was read. The same is true of Swiss cantons and Spanish
  Autonomous Communities.
- **New Zealand's CDEM Act 2002 was never read directly.** legislation.govt.nz and NZLII both
  returned 403. Everything about the New Zealand architecture comes from gazetted declarations,
  Ministry of Justice guidance and the _Borrowdale_ judgment, and two claims that had generalised
  a statutory rule from a single gazetted instance were narrowed during verification.
- **The Council of Europe's own Convention PDF was never read.** The ECHR text used is the
  Netherlands government's official publication of the treaty.
- **Fire, rescue and emergency-medical services are named as statutory partners and not
  described.** They were reached only through integrated-system statutes.
- **Proportionality and necessity are not re-derived.** `/law-enforcement/police-use-of-force`
  owns both doctrines, and the wave links rather than repeating.
- **53 of 256 matrix cells are NOT ESTABLISHED.** Each is a gap in this platform's sourcing.
- **No statistic of any kind is published**, and no page states how often any power has been used
  or whether any use was justified.
- **The Czech source excerpts are restored, not re-fetched.** The encoding hazard is recorded on
  the record, the passages this platform quotes have been corrected and re-checked, and any
  excerpt still shown without diacritics is marked as a transcription of substance rather than a
  verbatim quotation. No page quotes one.
