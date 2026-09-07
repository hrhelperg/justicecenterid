# Wave 31 — adversarial QA

Independent pass over the terminology wave. Findings classified P0/P1/P2/P3/REFUTED.
P0 and P1 reproduced independently before being fixed.

## Findings

### P1 — the new routes had no editorial inbound links

**Reproduced:** grep over rendered output gave exactly one inbound page for each of
`/glossary/jury` and `/glossary/lay-judge`, and it was `out/glossary.html` — the hub,
which lists every routed term automatically.

A hub listing satisfies a naive graph metric and proves nothing: it would be there
whether or not the corpus had any editorial reason to reach the page. The programme
brief asks specifically for meaningful inbound links from the PRE-EXISTING corpus and
warns against relying on 0/0/0 metrics, which is exactly this trap.

**Fixed.** All four Wave 30 lay-participation pages now link to the definitions, which
is also the right editorial answer — a reader on "lay participation in judging" should
be able to ask what a jury is without going back to a hub. Guarded, and the guard is
proved by M17.

### P2 — two invariants were defeated by mutations and had to be rewritten

Both are recorded in full under "Mutation proofs" below. Neither reached the published
content: the mutations were synthetic and reverted. They are logged as findings because
the guards were wrong, and a guard that cannot catch the thing it names is worse than no
guard, since it reports success.

- **M4** flattened Austria's guilt/sentence split in a country example and survived,
  because the guard searched the union of the page's text and the two phrases were still
  present in `context`. This is the Wave 29/30 defect class exactly — one part of a page
  correct while another contradicts it — and a union search cannot detect it by
  construction. The guard now checks each part that mentions the Geschworene on its own.
- **M7** rewrote the lay-judge definition into "a person … who is a professional judge
  for the hearing" and survived for two reasons: the same union problem, and an equation
  guard keyed to specific nouns rather than to the claim, so a sentence whose subject was
  "a person" slipped past. The definition is now checked as a field of its own.

### REFUTED — "tactical formation" language on the lay-judge page

A safety sweep flagged the token `formation`. Reading it: "the Landesgericht sits in that
formation where the offence carries more than five years' imprisonment" — court
composition, not tactics. No change.

### REFUTED — jury size published against the Wave 30 omission

Wave 30 published no jury size and guarded against any. This wave publishes two, which
looks on its face like the omission being quietly filled.

It is not. Wave 30's guard is scoped to the Wave 30 pages and still passes unchanged:
those pages publish no jury size. The two numbers here are on a new route, each states a
named proceeding in a named system, and each is carried by a source that says the number
— a county court jury of eight (Juries Act 1974 s.17) and eight Geschworene in an
Austrian Geschworenengericht (BMJ). The number Wave 30 actually could not source — the
Crown Court complement — is still not published, is labelled NOT ESTABLISHED, and is held
open by three separate guards (M5, M11, and the s.17 source note).

## Dimension sweep

| Dimension              | Result                                                                        |
| ---------------------- | ----------------------------------------------------------------------------- |
| Factual accuracy       | 14/14 published claims traced to a read source                                |
| Primary-source quality | Tier 1 only: BMJ ×2, Irish Statute Book, legislation.gov.uk                   |
| Claim/source alignment | Every claim itemised in its source note; two `DOES NOT SUPPORT` clauses added |
| Geographic scope       | 5 systems, all named; `None of this generalises` asserted and guarded         |
| Temporal scope         | All sources accessed and verified 2026-09-07                                  |
| Taxonomy               | jury ≠ lay judge ≠ professional judge, guarded in both directions             |
| Canonical ownership    | 7 of 10 brief candidates refused as Wave 30 duplicates                        |
| Contradiction risk     | Per-part checks after M4/M7; cross-record threshold check (M10)               |
| Unicode integrity      | Corpus-wide guard, 9 families; rendered check by code point over 543 pages    |
| Procedural-law drift   | voir dire / peremptory / nullification / summons all guarded (M15)            |
| Safety                 | No tactical, evasion or operational content; sweep clean                      |
| Commercial bias        | No commerce, ranking or affiliate language; sweep clean                       |
| Fabricated data        | No invented institution, number or quotation                                  |
| SEO cannibalisation    | Two routes, both previously unowned; hub-only terms unchanged                 |
| Structured data        | No new @type introduced                                                       |
| Visual licensing       | No images added                                                               |
| Accessibility          | 2,074 e2e passed including 320px and keyboard paths                           |
| Performance            | Client JS 764 KB, unchanged. CSS unchanged. No component touched              |
| Graph                  | P1 above, fixed and guarded                                                   |
| Rendered output        | 543 pages, 0 corrupted, non-vacuity confirmed                                 |

## Mutation proofs — 17, all valid

A proof counts only where the anchor was unique, the mutation demonstrably applied, the
file hash changed, the diff was non-empty, the INTENDED guard failed by exit code, and
the tree reverted clean. Two survived on first run; both are findings, both invariants
were fixed, and the mutations were re-run unweakened.

| #   | Mutation                                          | Guard                              | Result                                 |
| --- | ------------------------------------------------- | ---------------------------------- | -------------------------------------- |
| M1  | Em dash re-decoded as latin-1 (the Wave 29 fault) | corpus character guard             | PROOF                                  |
| M2  | Jury redefined as a mixed bench                   | definition carries separateness    | PROOF                                  |
| M3  | False-friend cross-reference removed              | both directions required           | PROOF                                  |
| M4  | Austrian guilt/sentence split flattened           | per-part split check               | **SURVIVED → invariant fixed → PROOF** |
| M5  | Crown Court jury size published                   | no unsourced number                | PROOF                                  |
| M6  | Universal claim introduced                        | no universal claim                 | PROOF                                  |
| M7  | Lay judge defined as a professional judge         | definition-field check             | **SURVIVED → invariant fixed → PROOF** |
| M8  | Selection restated as an eligibility rule         | eligibility ≠ selection            | PROOF                                  |
| M9  | Procedural advice to the reader                   | no instruction about your own case | PROOF                                  |
| M10 | Austrian threshold contradicted across records    | cross-record consistency           | PROOF                                  |
| M11 | Source stops refusing the Crown Court number      | s.17 note must refuse it           | PROOF                                  |
| M12 | Attestation upgraded into citation                | RIS recorded as unread             | PROOF                                  |
| M13 | Jury term dropped below two sources               | two-source floor                   | PROOF                                  |
| M14 | Country example points at an unresearched system  | researched-systems only            | PROOF                                  |
| M15 | Jury-procedure expansion (voir dire, peremptory)  | no procedure                       | PROOF                                  |
| M16 | Corruption planted in `professions`               | corpus character guard             | PROOF                                  |
| M17 | Anchor page stops linking to the definitions      | pre-existing inbound               | PROOF                                  |

### M16 is the one that justifies the whole hardening step

The same corruption was run against Wave 30's guard and against the promoted one:

- **Wave 30 guard: 46/46 passed.** It walks guides, sources and dossiers, and
  `professions` is none of those, so the corruption would have shipped.
- **Corpus guard: 2 failures.**

The promotion was necessary rather than cosmetic, and that is the proof of it.
