# Knowledge Expansion Wave 27 — QA record

Police units, vehicles and specialisations. Branch `feat/police-units-vehicles-wave-27`, based on
`ea85ed0` (origin/main after Wave 26 merged).

Four guides, four sources, two services. Findings in
`docs/research/police-units-model-findings.md`.

## Mutation proofs — 11 run, 11 caught

Each mutation is applied to a clean tree, verified to touch exactly one file and change the content
hash, tested by direct exit code, then reverted with a post-revert clean check.

| #      | Mutation                                                   | Result                        |
| ------ | ---------------------------------------------------------- | ----------------------------- |
| W27M1  | Unit page re-enumerates Wave 24's ten specialisation areas | CAUGHT                        |
| W27M2  | Vehicle capability claim (top speed) inserted              | CAUGHT                        |
| W27M3  | Pursuit tactics described                                  | CAUGHT                        |
| W27M4  | ANPR detection capability attributed to a vehicle category | CAUGHT                        |
| W27M5  | Marking description made reproducible                      | CAUGHT                        |
| W27M6  | Procurement/where-to-buy sentence added                    | CAUGHT                        |
| W27M7  | **Official source URL swapped for a commerce/review host** | **SURVIVED → fixed → CAUGHT** |
| W27M8  | Country example re-pointed to an unsourced service         | CAUGHT                        |
| W27M9  | Reach statement generalised to all services                | CAUGHT                        |
| W27M10 | Step-sequenced procedural drift                            | CAUGHT                        |
| W27M11 | Build vocabulary reintroduced into rendered prose          | CAUGHT                        |

### W27M7 — a genuine corpus hole, not a self-containment gap

Wave 26's suite contains a guard that a source is not a retailer, marketplace or review site. It
iterates `WAVE_26_SOURCES` — its own five ids. Nothing checked the other 364.

Before treating this as a per-suite artefact, the Wave 26 suite was re-run against the same
mutation. It **passed**. That distinguishes this from Wave 26's own W26M10, where the Wave 25 suite
caught the mutation and only self-containment was missing. Here the corpus was genuinely unguarded:
any source in the registry could have been repointed at a retailer and nothing would have noticed.

The replacement guard is corpus-wide and checks the **hostname** rather than the whole URL. Checking
the URL produces one false positive —
`nist.gov/forensic-science/interdisciplinary-topics/scientific-foundation-reviews` is a research
programme, not a product review. A path may legitimately contain "review"; a host that does is a
different kind of thing. An unparseable URL counts as an offender.

## Adversarial QA — 1 P1, 0 P2

Passes run: absolute quantifiers; source-attachment of every `claim: 'fact'` block; source-id
existence; cannibalisation against Wave 24; capability and tactics leakage; commerce and procurement
leakage; impersonation; procedural drift; uncertainty vocabulary; date coherence; inbound link
graph; restricted-claims tripwires.

Clean on all but one.

### P1 — the corpus was addressing its readers in its own build vocabulary

Eleven **rendered** strings across four files were written in internal process language:

- `law-enforcement.ts` ×5 — "Wave 24 established that…", "Wave 24 found that…"
- `investigations.ts` ×3 — "is Wave 21's and is not repeated here", "is Wave 19's subject"
- `justice.ts` ×1 — "is Wave 19's subject, not this page's"
- `czechia.ts`, `norway.ts` ×2 — "Wave 25 DEFERRED Czechia", "Wave 25 ABANDONED Norway"

A wave number is an internal unit of work. It has no page, no navigation entry and no meaning to a
member of the public. A sentence built on one is unreadable exactly where the corpus claims to be
explaining itself — and two of them appeared in dossier `uncertainty` lists, which are the
safety-relevant statements of what was not researched.

**Three were this wave's own. Eight predated it** and had been rendering to readers since the waves
that wrote them. All eleven now name the page they mean, which incidentally adds four real internal
links where there had been an unresolvable reference.

Verified reader-facing before fixing, not assumed: `Source.note` renders at
`src/components/content/SourceList.tsx:46` and on `/sources`; guide `text` and dossier `uncertainty`
render on their pages.

### Two carve-outs, recorded rather than silently taken

**`Source.note` provenance is not walked.** Notes carry records like "WAVE 23 ADDITION" and
"re-verified for Wave 25.5" — research provenance rendered as secondary text on the source list
rather than as explanatory prose. Rewriting 369 of them is its own maintenance task and rewording a
verified attribution risks damaging it. Left as debt.

**The phrase "this wave" stays in 63 scope statements.** It is still jargon, but not the same class:
the eleven fixed strings pointed at a _different_ numbered unit of work a reader cannot resolve to
anything, while "this wave" is self-referential and reads approximately as "this round of research".
These are the corpus's most safety-relevant sentences — they state what was NOT researched — and
rewording 63 of them as a side effect of a wave about police vehicles is how a scope statement
quietly stops being accurate. A test caps the count at 70 so the debt cannot grow unnoticed.

## Recurring failure modes, both of which recurred

**Citation is not referral — the third time.** The e2e spec was written asserting the units pages
carry no outbound links. All four failed, because every guide renders a source list of official
government pages. This is the identical error made in Wave 25 about recruitment pages and Wave 26
about equipment pages. Corrected to assert outbound links _are_ official sources and none is a
retailer.

**The self-referential cluster — the fourth time.** The link graph passed at 0 orphans / 0 weakly
linked / 0 dead ends while all four new pages had no inbound link from any pre-existing page. The
audit does not detect this, because the new pages link to each other. Four editorial backlinks added
from `specialist-roles-in-policing`, `how-police-officers-are-identified`,
`what-police-equipment-is-for` and `police-command-and-coordination`.

**Over-broad guards on first run, in three cases; no content was changed for any of them.** `engine`
matched "search engine"; `bulletproof` matched the UN Basic Principles citation ("shields, helmets
and bulletproof vests"); and the corpus-wide capability check fired on the investigations layer's
own refusal sentence, so it was made denial-aware.

## Cannibalisation control

Wave 24's `specialist-roles-in-policing` owns "what specialisations exist" across ten named areas.
This wave is one careless sentence from re-answering that question under a different slug and
splitting the ownership of the corpus's most-searched career question.

A test asserts no Wave 27 guide re-enumerates more than two of those ten areas. Measured: 2, 1, 2, 0.
Each page routes the career question to Wave 24 explicitly, and the e2e asserts the link is visible.

## Validation

Full gate, run end to end on a clean `npm ci`:

| Step                                  | Result                                               |
| ------------------------------------- | ---------------------------------------------------- |
| `format:check` / `lint` / `typecheck` | clean                                                |
| `vitest run`                          | **8,494 tests / 83 files** passed                    |
| `next build`                          | success                                              |
| `verify:output`                       | **526 routes**, 528 exported pages, 526 sitemap URLs |
| `route-matrix`                        | **678 passed, 0 failed** (526 routes + 152 must-404) |
| `playwright test`                     | **1,816 passed**, 4 skipped — 58 of them this wave's |
| link graph                            | 0 orphans, 0 weakly linked, 0 dead ends              |

- **369 sources**
- 11/11 mutation proofs valid, one caught only after the fix it forced
- Client JS +0 KB, CSS +0 bytes, no component changed
