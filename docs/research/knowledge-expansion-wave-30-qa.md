# Knowledge Expansion Wave 30 — QA record

Lay participation in judging. Branch `feat/lay-participation-wave-30`, based on `7d864c3`
(origin/main after Wave 29 merged).

Four guides on three new sources with two reused, all in `/courts`. Findings in
`docs/research/lay-participation-model-findings.md`.

## Merge gate

Wave 29 was **not stated as merged**; the gate was run anyway and it had been (PR #43). Verified
substantively: all four guides in their two sections, both spec files with every named guard, the
three corrected pre-existing tests carrying their new form, docs and Phase 43, both refreshed
profession records still country-free, and every Wave 29 file byte-identical to the branch tip.

## The P0: the previous wave shipped corrupted characters to production

This is the finding of the wave, and it is a failure of mine that reached readers.

An authoring step re-decoded UTF-8 bytes as latin-1. Every em dash became `â` followed by two C1
control characters; every typographic apostrophe became the same shape. **Ninety sequences across
four files**, of which **thirty-three were in rendered content already merged and live** — fifteen
in the forensics guides and eighteen in the public-safety guides, both from Wave 29 — with
forty-one more in this wave's unpushed courts file.

The German statutory quotations were among the casualties. "Schöffengericht" was not spelled that
way on the page.

### Why nothing caught it

- **Tests assert what text says, not that it is well-formed.** Every content guard in the corpus
  matches meaning; none looks at characters.
- **prettier, eslint and tsc all accept it**, because the bytes are valid strings. They simply spell
  the wrong characters.
- **The e2e suites passed**, because their assertions quoted the same corrupted strings.
- **My own spot-check missed it.** After adding sources I checked for `Ã`, the cp1252 rendering of
  this corruption. Latin-1 decoding produces raw C1 control characters instead, which that check
  cannot see. Checking for the wrong signature is worse than not checking, because it reports clean.

### The fix

All ninety sequences were repaired by re-encoding as latin-1 and decoding as UTF-8, which restores
the original characters rather than deleting the broken ones.

Two guards now exist. The unit suite walks every string in guides, sources and dossiers and fails on
any C1 control character or latin-1 mojibake signature, with a companion assertion that the em dash
and typographic apostrophe still render as themselves — so a later "fix" that strips punctuation
instead of decoding it also fails. The e2e reads character codes from the rendered page.

C1 controls (U+0080–U+009F) are the right thing to test for: they are the tail bytes every such
corruption leaves, they are invisible when printed, and they belong in prose in no language. That
also means the guard cannot be written using a literal example of what it forbids.

## Mutation proofs — 11 run, 11 caught

| #      | Mutation                                                             | Result                        |
| ------ | -------------------------------------------------------------------- | ----------------------------- |
| W30M1  | A mixed panel called a jury                                          | CAUGHT                        |
| W30M2  | Japan given a jury system, plus an unsourced size                    | CAUGHT                        |
| W30M3  | An unsourced jury size published                                     | CAUGHT                        |
| W30M4  | **The verdict-only model asserted, contradicting the cited statute** | **SURVIVED → fixed → CAUGHT** |
| W30M5  | Disqualifications described from an unread Schedule                  | CAUGHT                        |
| W30M6  | An outcome claim never researched                                    | CAUGHT                        |
| W30M7  | Advice to a reader about their own summons                           | CAUGHT                        |
| W30M8  | A reference translation upgraded to authoritative text               | CAUGHT                        |
| W30M9  | **The composition ratio inverted in the summary list**               | **SURVIVED → fixed → CAUGHT** |
| W30M10 | An Austrian provision published that could not be read               | CAUGHT                        |
| W30M11 | A corrupted em dash reintroduced into rendered prose                 | CAUGHT                        |

### Both survivors were internal contradictions

**W30M4** replaced the German limit provision with "Lay judges reach the verdict and the
professional judge decides the sentence" — the popular model, and false of both systems here. A
misconception on the page already corrected the belief, and nothing guarded the body text against
asserting it. **A misconception is not a guard**: the same lesson the previous wave learned about
the accreditation limit, arriving again in a different subject.

**W30M9** inverted the German ratio in the summary list while the paragraph citing the statute a few
blocks above still said the opposite. A cited-source check and a page-wide presence check both pass
on that, because each looks at only one of the two places. What was missing was a check that the
page agrees with itself; composition pairs are now read and compared directly.

W30M8's first anchor matched four records and was re-run against a unique one. Three anchors also
had to be read from the file rather than retyped, because non-ASCII does not survive being passed
through a shell.

## Adversarial QA — 1 P0, 1 P2

Beyond the encoding failure above:

**P2 — a jurisdiction declared without a source, and a source cited without declaring it.** The
anchor page declared `GB` while citing no England and Wales source, and cited a US source it did not
declare. Found by comparing every page's declared jurisdictions against the jurisdictions its own
sources carry. Corrected to `DE`, `JP`, `US`, with the uncertainty reworded to match.

Other passes were clean: fact-block sourcing; "jury" used of a mixed panel; advice and procedure
leakage; outcome and ranking claims; markdown inside misconceptions. Two flags were misconception
`claim` fields — the belief being corrected — and one "untraceable" quotation is mention-use rather
than citation.

## An open finding this wave could not close

The Austria dossier states that lay participation is constitutionally required, citing `at-bvg` for
Article 91. **That record's note does not itemise Article 91** among the articles it lists as
supported, and the note is the corpus's mechanism for stopping a source being reused for a claim it
does not cover. Either the note is incomplete or the claim was never verified against the article.

It could not be resolved this wave: `ris.bka.gv.at` returned HTTP 503 to every automated request
across three paths. Recorded here rather than guessed in either direction. The next wave that can
reach RIS should read Article 91 and then either itemise it in the note or correct the dossier.

## Recurring failure modes

**The self-referential cluster — the seventh consecutive wave.** Four editorial backlinks added.

**One guard needed disclosure-awareness on first run**, the case named in the previous wave: it
matched the page's own sentence recording that the disqualification Schedule was NOT READ, which is
the honesty the guard exists to require.

## Validation

Full gate on a clean `npm ci`:

| Step                                  | Result                                               |
| ------------------------------------- | ---------------------------------------------------- |
| `format:check` / `lint` / `typecheck` | clean                                                |
| `vitest run`                          | **8,875 tests / 86 files** passed                    |
| `next build`                          | success                                              |
| `verify:output`                       | **539 routes**, 541 exported pages, 539 sitemap URLs |
| `route-matrix`                        | 691 passed, 0 failed                                 |
| `playwright test`                     | **2,074 passed**, 4 skipped — 84 of them this wave's |
| link graph                            | 0 orphans, 0 weakly linked, 0 dead ends              |

- **385 sources**
- 11/11 mutation proofs valid, two caught only after the fixes they forced
- Client JS +0 KB, CSS +0 bytes, no component changed
