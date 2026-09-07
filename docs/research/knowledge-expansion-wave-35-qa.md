# Wave 35 — adversarial QA

Independent pass over the training-institutions wave, the last of the five-wave programme.

## Architecture decision, taken on evidence

The brief asked whether training institutions deserve first-class entities, and whether an existing
model could carry them. Both were investigated before any content was written.

**`/institutions` is a type taxonomy, not a directory.** All 17 slugs are categories —
`municipal-police`, `gendarmerie`, `constitutional-court`. `InstitutionType` has no field for an
official website, an operator or an operating status, and should not: "gendarmerie" has no website,
and "Politieacademie" is not a type. Extending it would corrupt a clean taxonomy to store something
it was not built for.

**So a named institution is genuinely a new entity — and it was specified rather than built.** Two
institutions were verified to the standard a directory entry needs, against a brief target of 15–30.
Two entries is not a directory, and one that looks like a directory makes a false claim about
coverage. Route families are close to permanent: `/academies/[slug]` published with two entries is a
commitment a later wave must either fill or retire.

The threshold that would reverse this is written down: **12 or more institutions content-confirmed
across at least 6 systems.** Access is the binding constraint — in Waves 33–35, `npas.police.uk`,
`hmicfrs.justiceinspectorates.gov.uk`, `ukas.com`, `911.gov`, `rijksoverheid.nl` and
`ris.bka.gv.at` all returned 403 or 404 to automated requests. A directory whose entries cannot be
re-verified on a schedule decays into the stale directory the brief forbids.

**The decision is tested, not only documented.** A guard asserts `InstitutionType` has not acquired
an `officialWebsite` or `operatingStatus` field, so a later wave cannot silently reverse it.

## Mutation proofs — 15 run, 15 caught

| #   | Mutation                                                 | Result                           |
| --- | -------------------------------------------------------- | -------------------------------- |
| M1  | A fabricated institution, named and ranked               | CAUGHT                           |
| M2  | Invented tuition and acceptance rate                     | CAUGHT                           |
| M3  | A ranking and a quality comparison                       | CAUGHT                           |
| M4  | A historical institution presented as operating          | CAUGHT                           |
| M5  | A degree-awarding claim no source states                 | CAUGHT                           |
| M6  | An inferred institutional relationship                   | CAUGHT                           |
| M7  | Internal B2B strategy leaking into content               | CAUGHT                           |
| M8  | **The zbo finding reversed in a list item**              | **SURVIVED → fixed → CAUGHT**    |
| M9  | **A legal consequence inferred from the zbo label**      | **SURVIVED → fixed → CAUGHT**    |
| M10 | A jurisdiction declared that no source carries           | CAUGHT                           |
| M11 | Pre-existing inbound link removed                        | CAUGHT                           |
| M12 | **A universal claim on the page that owns the question** | **SURVIVED ×2 → fixed → CAUGHT** |
| M13 | Character corruption in rendered prose                   | CAUGHT                           |
| M14 | `InstitutionType` corrupted into a directory             | CAUGHT                           |
| M15 | **A fabricated figure with a superlative**               | **SURVIVED → fixed → CAUGHT**    |

### M8 — the wave's own central finding was reversible

The finding that an institution can be part of the police _and_ legally independent was reversed in
a definition list item while the cited paragraph above still carried it. The contradiction class
from Waves 29–30 again, and the page most worth protecting from it was unguarded. Now checked per
part rather than over the union.

### M9 — recording a limit does not enforce it

The page's uncertainty says what the zbo form entails in law was NOT ESTABLISHED and that the
statute was not read. Nothing stopped the body asserting a consequence anyway.

### M12 — survived twice, and the second time taught more

First it slipped an ownership pattern that required the word "police" ("delivers initial _police_
training" vs "delivers initial training") — the one-inflection failure from Wave 32.

Then, after that was fixed, **it survived again** by landing on `what-a-police-academy-is` — the
page that _owns_ the question — because the universal-claim guard iterated only this wave's two
pages. That is the Wave 32 M1 lesson repeating exactly: a corpus-relevant invariant guarded on the
newest pages alone protects the least load-bearing ones and leaves the owner exposed.

### M15 — directory data is the easiest thing here to invent convincingly

Changing 5,190 students to 50,190 and adding "the largest police academy in the world" caught
nothing: the ranking pattern did not know that superlative form, and no guard checked figures
against sources. **Every figure a page states must now appear in a note of a source that page
cites.**

## Findings

### Two new guards were wrong on first run, both flagging the pages' own honesty

- The zbo guard matched the page's **disclaimers** — "The page glosses what zbo means" and "what the
  zbo form entails in law" was not researched. Both state the limit; a flat match read them as
  breaking it.
- The superlative guard matched **"the largest category of students in the institution"** — an
  internal proportion, and this wave's central finding, not a comparison between institutions. Fixed
  by requiring the institution word to be the superlative's head noun: "largest police academy" is
  the offence; "largest category … in the institution" is not.

### REFUTED — an apparent commercial leak

A QA sweep reported B2B vocabulary in published content. It was **"not affiliated with any police
service"** — a disclaimer, and the opposite of affiliate marketing. The sweep's pattern lacked a
word boundary; the wave guard uses one and passes correctly.

### Two quotations differed from their notes by a trailing period

Same hygiene issue as Waves 30 and 34. Notes aligned so provenance checks stay clean.

## Dimension sweep

| Dimension              | Result                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------- |
| Factual accuracy       | 7/7 published claims traced to a read source                                           |
| Primary-source quality | Tier 1 only: both institutions' own official pages                                     |
| Claim/source alignment | Every claim itemised; both notes carry explicit `DOES NOT SUPPORT` limits              |
| Geographic scope       | 2 systems, jurisdiction checked against source jurisdiction                            |
| Directory integrity    | No fake institution, no ranking, no tuition, acceptance rate or outcome                |
| Status model           | Historical body dated and never rendered as operating; old and new name are one entity |
| Structured data        | `EducationalOrganization`, `CollegeOrUniversity` and `ItemList` all refused            |
| Commercial separation  | Internal B2B strategy asserted absent from content and rendered output                 |
| Fabricated data        | Every figure traced to a cited source note, enforced by test                           |
| Character integrity    | 0 C1 controls, including Nordic and Dutch names                                        |
| Accessibility          | Keyboard, headings, 320px, 200% text                                                   |
| Performance            | Client JS +0 KB, CSS +0 bytes, no component changed                                    |
| Graph                  | 0/0/0 plus two editorial inbound links from Wave 24 pages                              |

## Validation

| Step                                             | Result                                      |
| ------------------------------------------------ | ------------------------------------------- |
| `npm ci` / `format:check` / `lint` / `typecheck` | exit 0                                      |
| `vitest run`                                     | **9,342 tests / 93 files**                  |
| `next build`                                     | exit 0                                      |
| `verify:output`                                  | **554 routes**, 556 pages, 554 sitemap URLs |
| `route-matrix`                                   | 706 passed, 0 failed                        |
| `playwright test`                                | **2,320 passed**                            |
| link graph                                       | 0 orphans, 0 weakly linked, 0 dead ends     |

402 sources. 15/15 mutation proofs valid, four caught only after the fixes they forced.
