# Wave 21 QA — constitutional rights, state powers and fundamental safeguards

Branch `feat/knowledge-expansion-wave-21`, cut from `origin/main` at `d588372`. Twelve routes
published from forty-seven candidates.

## 1. Deltas

| Metric                          | Baseline (`d588372`)        | After                       | Delta                      |
| ------------------------------- | --------------------------- | --------------------------- | -------------------------- |
| Public routes                   | 462                         | **474**                     | +12                        |
| Sitemap URLs                    | 462                         | **474**                     | +12                        |
| Exported HTML pages             | 464                         | **476**                     | +12                        |
| Published guides                | 121                         | **133**                     | +12                        |
| Source records                  | 325                         | **327**                     | +2 (12 extended)           |
| Vitest files                    | 75                          | **76**                      | +1                         |
| Vitest tests                    | 6,152                       | **6,642**                   | +490                       |
| Playwright specs                | 14                          | **15**                      | +1                         |
| Playwright tests                | 928                         | **1,088**                   | +160                       |
| Client JS                       | 663,525 B / 12 files        | **663,525 B / 12 files**    | **0**                      |
| CSS                             | 29,961 B / 1 file           | **29,961 B / 1 file**       | **0**                      |
| `out/`                          | 118,138,759 B / 4,405 files | 131,361,836 B / 4,513 files | +13,223,077 B / +108 files |
| Restricted-claim patterns       | 10                          | 10                          | 0                          |
| `ScheduledChange` records       | 4                           | 4                           | 0                          |
| Institution types / professions | 17 / 7                      | 17 / 7                      | 0                          |

**Client JS moved by zero bytes**, and so did CSS. The `out/` growth is prerendered HTML and its
RSC payloads for twelve new routes — nine files per route — which Part AB expressly says not to
report as a regression.

Guides by section after: justice 31 · corrections 19 · courts 19 · law-enforcement 17 ·
defence 11 · investigations 10 · forensics 9 · prosecution 9 · public-safety 8.

## 2. Link graph

|                | Baseline | After |
| -------------- | -------- | ----- |
| Pages          | 464      | 476   |
| Content routes | 434      | 446   |
| Orphans        | 0        | **0** |
| Weakly linked  | 0        | **0** |
| Dead ends      | 0        | **0** |

Ten editorial backlinks were added from existing flagship pages, each a sentence that page had a
reason to want — the largest being `which-rights-can-never-be-suspended`, which stated that a
limitation clause "applies at all times" and had nowhere to send a reader who wanted that test.

## 3. Mutation proofs — 16 run, 16 valid, 16 caught, 3 caught only after a fix

Every proof asserted a unique anchor, verified the mutation applied, compared the file hash before
and after, inspected the diff, ran the intended test, read the exit code directly, reverted, and
confirmed a clean tree. Three survived on the first run, and each survival produced a real
improvement rather than a weakened test.

| #   | Mutation                                                          | First run                      | Fix it forced                                                                                                               | Final             |
| --- | ----------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| M1  | Rights prevent the state exercising coercive authority            | **SURVIVED**                   | The two spine guards read only the wave's twelve pages; the stance was planted on a Wave 12 page. Both now run corpus-wide. | CAUGHT            |
| M2  | Lawful state power has no constitutional limits                   | —                              | —                                                                                                                           | CAUGHT            |
| M3  | All constitutional rights are absolute                            | **SURVIVED**                   | Its own trailing clause laundered strip-and-search. Absolutist guards are now forward-only.                                 | CAUGHT (2 guards) |
| M4  | Rights disappear once an emergency is declared                    | —                              | —                                                                                                                           | CAUGHT            |
| M5  | Universalise the US search-and-seizure model                      | —                              | —                                                                                                                           | CAUGHT            |
| M6  | Universalise Miranda-style warning rules                          | —                              | —                                                                                                                           | CAUGHT            |
| M7  | Warrant-evasion advice on the search page                         | —                              | —                                                                                                                           | CAUGHT (3 guards) |
| M8  | Anti-forensics guidance on the interception page                  | —                              | —                                                                                                                           | CAUGHT (3 guards) |
| M9  | Remove `nl-constitution` while keeping the Dutch claims           | —                              | —                                                                                                                           | CAUGHT (2 guards) |
| M10 | Publish `/investigations/search-and-seizure`                      | invalid, then rerun additively | The first version renamed a slug and was caught by a crash rather than the ownership guard; rewritten to add the route      | CAUGHT            |
| M11 | Treaty automatically part of domestic law                         | —                              | —                                                                                                                           | CAUGHT            |
| M12 | "Citizens have the right to privacy" beside a quoted provision    | **SURVIVED**                   | The quoted provision's own prohibitions laundered strip-and-search. Rights-holder guard now forward-only and corpus-wide.   | CAUGHT            |
| M13 | Convert the German textual negative into a claim about German law | —                              | —                                                                                                                           | CAUGHT            |
| M14 | Assert a four-step universal proportionality test                 | —                              | —                                                                                                                           | CAUGHT            |
| M15 | Insert a ranking and a prevalence statistic                       | —                              | —                                                                                                                           | CAUGHT            |
| M16 | Move a quoted provision out of a sourced fact block               | —                              | proves the invariant the adversarial pass added is not vacuous                                                              | CAUGHT            |

### The finding worth more than the proofs

Three survivals point at **one rule rather than three exceptions**: strip-and-search denial is the
wrong helper whenever the stance sits next to text that is itself made of negations. Constitutional
quotation is made of negations almost by definition, because rights are usually drafted as
prohibitions — so on a wave whose pages quote constitutions continuously, the helper that has
served since Wave 13 is systematically wrong and only a negation that _governs_ the stance
neutralises it. Every guard in the Wave 21 file that reads a sentence containing quoted
constitutional text is now forward-only, and two companion tests pin both halves: that
strip-and-search is laundered, and that forward-only is not.

## 4. Adversarial QA

Twenty lenses. **6 findings survived reproduction, 14 lenses clean, 21 candidate findings refuted.**

| Lens                                | Result                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Comparative constitutional accuracy | clean — every article number cross-checked against the note of a cited record                                                                                                                                                                                                                                                     |
| Terminology                         | clean                                                                                                                                                                                                                                                                                                                             |
| US-default bias                     | clean — the rejected title is pinned by a test                                                                                                                                                                                                                                                                                    |
| Rights-holder scope                 | **1 finding (P2)**: a quoted example of the error whose refutation followed rather than preceded it, which the corpus-wide forward-only guard flagged. Reworded so the refutation leads.                                                                                                                                          |
| State-capacity understatement       | clean — every page states why the power exists                                                                                                                                                                                                                                                                                    |
| State-power overstatement           | clean                                                                                                                                                                                                                                                                                                                             |
| Absolutist-rights language          | clean after M3's fix                                                                                                                                                                                                                                                                                                              |
| Emergency-law consistency           | clean — no emergency page recreated                                                                                                                                                                                                                                                                                               |
| Police-power safety                 | clean                                                                                                                                                                                                                                                                                                                             |
| Digital-investigation safety        | clean — three candidates deferred rather than thinned                                                                                                                                                                                                                                                                             |
| Legal-advice risk                   | clean                                                                                                                                                                                                                                                                                                                             |
| Political neutrality                | clean — zero evaluative statements about any state                                                                                                                                                                                                                                                                                |
| Source quality                      | **2 findings (P1)**: `/defence/equality-of-arms` quoted CE Art. 24(1)'s _sin que, en ningún caso, pueda producirse indefensión_ and no cited record carried it; `/justice/how-a-right-can-be-limited` claimed CE Art. 53(2) on a record establishing only 53(1). Both verified during research and both now in the note verbatim. |
| Source-to-claim alignment           | **2 findings (P2)**: two paragraphs asserted a provision inside an analysis block, where the suite demanded no source. Both split into sourced fact blocks; a new invariant enforces the class.                                                                                                                                   |
| Temporal accuracy                   | clean — no provision carries a future commencement                                                                                                                                                                                                                                                                                |
| Cannibalization                     | clean — the audit's rejected and deferred slugs are pinned by two tests                                                                                                                                                                                                                                                           |
| Knowledge graph                     | clean — 0 orphans, 0 weakly linked, 0 dead ends                                                                                                                                                                                                                                                                                   |
| SEO                                 | clean — titles, H1s, questions and summaries unique across all 133 guides; every description 201–299 chars                                                                                                                                                                                                                        |
| Accessibility                       | clean — see §5                                                                                                                                                                                                                                                                                                                    |
| Performance                         | clean — 0 bytes of client JS, 0 bytes of CSS                                                                                                                                                                                                                                                                                      |

**A finding the final gate produced, not the adversarial pass.** `scripts/route-matrix.mjs`
carries a hardcoded must-404 list, and `/defence/equality-of-arms` was on it — a third place, after
the Wave 11 test and the Wave 11 plan, where that deferral was recorded. The gate failed with
"expected 404, got 200 — possible SPA fallback", which is the check doing exactly its job: a route
that appears where a 404 is expected is indistinguishable, from outside, from a fallback masking a
missing page. The entry is removed and the amendment documented in the script; every other slug on
that list stays.

**A third correction, smaller and worth naming:** the page had lowercased Spain's _Sólo por ley_
to fit it mid-sentence, silently altering quoted constitutional text. The capital is restored.
This is the Wave 20 diacritics finding in a new form — a quotation altered for prose flow is a
quotation that no longer says what the source says.

### Two test-design defects found by writing the tests

1. The directive live-catch asserted against an **unsplit** string and would have passed whatever
   the guard did. It now proves both halves: that a preceding negation launders the instruction
   when the passage is one unit, and that the guard catches it once split into sentences — the
   W20-M4 finding re-proved on this wave's own units rather than assumed.
2. The first rights-holder guard was a sentence-level allowlist that grew an exception every time
   it met a correct sentence. That is the signature of a guard testing the wrong thing; it was
   replaced by a page-level attribution check, with the assertion guard doing the real work.

## 5. Accessibility

WCAG 2.2 AA architecture preserved; no new component, no new interaction, no new colour.

- Keyboard: every one of the twelve routes reachable from the skip link, focus landing on `main`.
- Headings: exactly one `h1` per page, no level skipped.
- 320px and 200% text: zero horizontal overflow on all twelve.
- **Fifteen multilingual constitutional phrases** checked individually at 320px, chosen for the
  longest tokens the corpus has ever carried — `Fernmeldeverkehr`,
  `brief- en telecommunicatiegeheim`, `Alle Deutschen genießen Freizügigkeit`,
  `asilo inviolável do indivíduo`, `Einschränkungen von Grundrechten`.
- Reduced motion, landmarks and contrast: unchanged, and covered by the standing suites.

## 6. Final gate

Run from the final committed tree. Exit codes read directly, never through a pipe.

| Command                                        | Exit | Result                                  |
| ---------------------------------------------- | ---- | --------------------------------------- |
| `npm ci`                                       | 0    |                                         |
| `npm run format:check`                         | 0    |                                         |
| `npm run lint`                                 | 0    |                                         |
| `npm run typecheck`                            | 0    |                                         |
| `npm test`                                     | 0    | 6,642 passed / 76 files                 |
| `npm run build`                                | 0    |                                         |
| `npm run verify:output`                        | 0    | 474 routes, 476 pages, 474 sitemap URLs |
| `node scripts/route-matrix.mjs <local origin>` | 0    |                                         |
| `npm run test:e2e`                             | 0    | 1,088 passed, 4 skipped / 15 specs      |
| `node scripts/link-graph-audit.mjs`            | 0    | 0 orphans, 0 weakly linked, 0 dead ends |

Also verified: registry/sitemap parity; real 404s with no SPA fallback; canonical integrity on all
twelve; every JSON-LD block parses, and the graph carries only `Organization`, `WebSite`,
`Article` and `BreadcrumbList`; no `localhost`, preview or Netlify host in reader-facing content;
no drafts, scaffold text or raw markdown; no unsupported country claim.

## 7. Known limitations

1. **Everything is text.** No case law was read for any system. Several of these doctrines are
   substantially judicial, and the pages say so rather than implying the text is the whole law.
2. **France and Australia carry no Wave 21 claim.** Recorded as NOT RESEARCHED, not as "no".
3. **Three subjects deferred on safety grounds** — digital investigation, surveillance regimes,
   sampling and DNA safeguards — with the reasoning recorded rather than the gap hidden.
4. **No statutory implementation was researched** for any constitutional provision cited.
5. **The Swiss consolidated text used is 3 March 2024**, because newer consolidation dates on
   Fedlex return an application shell rather than a document to an automated request.
6. **`route-matrix.mjs` was run against the local static serve**, not the deployed site, because
   this wave performs no deployment.
