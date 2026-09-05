# Wave 22 QA — digital investigations, surveillance and investigative authority

Branch `feat/knowledge-expansion-wave-22`, cut from `origin/main` at `8d6f47d`. Seven routes
published from forty-eight candidates.

## 1. Deltas

| Metric                          | Baseline (`8d6f47d`)            | After                               | Delta                    |
| ------------------------------- | ------------------------------- | ----------------------------------- | ------------------------ |
| Public routes                   | 474                             | **481**                             | +7                       |
| Sitemap URLs                    | 474                             | **481**                             | +7                       |
| Exported HTML pages             | 476                             | **483**                             | +7                       |
| Published guides                | 133                             | **140**                             | +7                       |
| `/investigations` routes        | 11                              | **18**                              | +7                       |
| Source records                  | 327                             | **339**                             | +12 (1 extended)         |
| Vitest files                    | 76                              | **77**                              | +1                       |
| Vitest tests                    | 6,642                           | **7,015**                           | +373                     |
| Playwright specs                | 15                              | **16**                              | +1                       |
| Playwright tests                | 1,088 (1,084 passed, 4 skipped) | **1,204 (1,200 passed, 4 skipped)** | +116                     |
| Client JS                       | 663,525 B / 12 files            | **663,525 B / 12 files**            | **0**                    |
| CSS                             | 29,961 B / 1 file               | **29,961 B / 1 file**               | **0**                    |
| `out/`                          | 131,361,836 B / 4,513 files     | 134,329,748 B / 4,576 files         | +2,967,912 B / +63 files |
| Restricted-claim patterns       | 10                              | 10                                  | 0                        |
| `ScheduledChange` records       | 4                               | 4                                   | 0                        |
| Institution types / professions | 17 / 7                          | 17 / 7                              | **0**                    |

**Client JS moved by zero bytes**, and so did CSS. No client-side visualisation library was added,
as Part AB required. The `out/` growth is prerendered HTML and RSC payloads for seven routes —
nine files each.

Guides by section after: justice 31 · corrections 19 · courts 19 · **investigations 17** ·
law-enforcement 17 · defence 11 · forensics 9 · prosecution 9 · public-safety 8.

## 2. Link graph

|                | Baseline | After |
| -------------- | -------- | ----- |
| Pages          | 476      | 483   |
| Content routes | 446      | 453   |
| Orphans        | 0        | **0** |
| Weakly linked  | 0        | **0** |
| Dead ends      | 0        | **0** |

Six editorial backlinks were added. Four go to Wave 21 pages that had recorded, in their own
uncertainty statements, that the statutes beneath them were not researched; those sentences now
point at the pages that researched them.

## 3. Mutation proofs — 15 run, 15 valid, 15 caught, 2 caught only after a fix

Every proof asserted a unique anchor, verified the mutation applied, compared file hashes before
and after, inspected the diff, ran the intended test, read the exit code directly, reverted, and
confirmed a clean tree.

| #   | Mutation                                                 | First run          | Fix it forced                                                                                                                                                                                                                                                                       | Final                          |
| --- | -------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| M1  | Seizure authorises full device examination               | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT (2 guards)              |
| M2  | Interception equals stored-communications access         | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT                         |
| M3  | Metadata equals content                                  | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT                         |
| M4  | All digital searches need the same warrant model         | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT (2 guards)              |
| M5  | Remove a country-scoped source for a digital-power claim | **SURVIVED**       | The country-scope invariant asks whether the _page_ cites a source scoped to a country it names — necessary and not sufficient, as Wave 20 recorded. Underneath it lay a narrower, fixable gap: a **block** could cite a source the page never declared. New corpus-wide invariant. | CAUGHT                         |
| M6  | Evidence-wiping instructions                             | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT (2 guards)              |
| M7  | Surveillance detection and evasion                       | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT (2 guards)              |
| M8  | Forensic-bypass advice with a named product              | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT (4 guards)              |
| M9  | Technical access creates legal authority                 | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT (2 guards, corpus-wide) |
| M10 | Intelligence merged with criminal procedure              | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT                         |
| M11 | Subject term replaced with "citizen"                     | **invalid, rerun** | The first attempt put an apostrophe inside a single-quoted string and was "caught" by a syntax error rather than by a guard. Rerun with a syntactically valid mutation.                                                                                                             | CAUGHT                         |
| M12 | Publish a route the audit aliased to Wave 21             | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT                         |
| M13 | Preservation equals disclosure                           | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT                         |
| M14 | Emergency removes the authorisation requirement          | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT                         |
| M15 | Unsupported capability and prevalence statistic          | —                  | —                                                                                                                                                                                                                                                                                   | CAUGHT                         |

### The finding worth more than the proofs

**M5 exposed a real hole in an invariant three waves have relied on.** The country-scope test asks
whether a page cites _a_ source scoped to a country it names. A page citing three German records
still passes when one is removed — even though the block asserting the removed provision still
names it at block level. The narrower rule underneath — **a block may cite only sources its guide
declares** — was satisfied by the whole corpus (629 block-level citations across 140 guides) and
enforced by nothing. It is now enforced corpus-wide.

## 4. Adversarial QA

Twenty lenses. **3 findings survived reproduction, 15 candidates refuted, 14 lenses clean.**

| Lens                                    | Result                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Comparative criminal-procedure accuracy | clean                                                                                                                                                                                                                                                                                                                                                                                                   |
| Constitutional-rights accuracy          | clean — the constitutional layer is Wave 21's and is linked, not restated                                                                                                                                                                                                                                                                                                                               |
| Terminology                             | clean after reproduction: the three "wiretap" hits are the proper name of a US statute inside uncertainty statements disclosing it was not read; the "subpoena" hits are comparison sentences correctly attributing it to the United States. **REFUTED ×3**                                                                                                                                             |
| Digital-law overgeneralisation          | clean after reproduction: seven "always/never" hits are misconception claims or statements scoped to a named system. **REFUTED ×7**                                                                                                                                                                                                                                                                     |
| Technical/legal conflation              | clean after reproduction: five hits are the distinction being drawn — "an investigator may be able to obtain something without being permitted to". **REFUTED ×5**                                                                                                                                                                                                                                      |
| Source quality                          | clean                                                                                                                                                                                                                                                                                                                                                                                                   |
| Source-to-claim alignment               | **2 findings (P2)**: two pages named StPO §§ 94, 110 and 100b in a variation list and a callout without citing the records establishing them. The Wave 21 fact-block check cannot reach those block kinds, because `list` and `callout` carry no `claim` or `sources` field. Both fixed; a page-level invariant now requires every section number in a page's prose to appear in a cited record's note. |
| Country-scope leakage                   | **1 finding (P1)**: `/investigations/legal-authority-and-technical-capability` asserted that the United States places these powers across "18 U.S.C. chs. 119, 121 and 206" while citing **no US source**, and the claim reached chapter 119, which the wave's own matrix records as not read. Narrowed to the two chapters read, both US records cited, and an uncertainty statement added.            |
| Temporal accuracy                       | clean — every cited record states a status                                                                                                                                                                                                                                                                                                                                                              |
| Privacy absolutism                      | clean                                                                                                                                                                                                                                                                                                                                                                                                   |
| State-power overstatement               | clean                                                                                                                                                                                                                                                                                                                                                                                                   |
| Surveillance safety                     | clean                                                                                                                                                                                                                                                                                                                                                                                                   |
| Anti-forensics risk                     | clean                                                                                                                                                                                                                                                                                                                                                                                                   |
| Cyber misuse risk                       | clean — no tool, platform or product named anywhere, enforced by test                                                                                                                                                                                                                                                                                                                                   |
| Legal-advice risk                       | clean after reproduction: the single second-person hit is the impersonal "it tells you what subscriber information is not", a construction appearing ten times across four waves of the existing corpus. **REFUTED ×1**                                                                                                                                                                                 |
| SEO cannibalization                     | clean — titles, summaries and questions unique across all 140 guides; no sensational framing; the rejected and deferred slugs pinned by test                                                                                                                                                                                                                                                            |
| Knowledge graph                         | clean — 0 orphans, 0 weakly linked, 0 dead ends                                                                                                                                                                                                                                                                                                                                                         |
| Accessibility                           | clean — see §6                                                                                                                                                                                                                                                                                                                                                                                          |
| Performance                             | clean — 0 bytes of client JS, 0 bytes of CSS                                                                                                                                                                                                                                                                                                                                                            |
| Taxonomy                                | clean — no institution type, no profession, no enum                                                                                                                                                                                                                                                                                                                                                     |

### Five content and four test defects found while writing the tests

Writing the suite found five real content defects before the adversarial pass began:

1. Two paragraphs asserted a provision inside an **analysis block**, where no source is demanded —
   the Convention's Art. 14(2) and StPO § 110(2). Both split into sourced fact blocks.
2. A quotation had been lowercased to fit mid-sentence — "soweit die Anordnung…" where the statute
   and the record both have a capital. This is the Wave 21 finding recurring: a quotation altered
   for prose flow no longer says what the source says.
3. A German clause was quoted that the source note had only **paraphrased**
   (_unter Berücksichtigung der gewonnenen Ermittlungsergebnisse_); the German is now in the record.
4. A misconception read "investigators are not trusted", which trips the repository's
   **public-trust restricted-claim pattern**. The claim was never about how any institution is
   regarded, and is reworded.

And four test-design defects, found the same way:

- The "wiretap" guard forbade the word outright and would have failed on the uncertainty statement
  disclosing that the US Wiretap Act was not read. It now targets generic use and proves it fires
  on one.
- The "warrant" guard was a sentence-level allowlist — the shape Wave 21 diagnosed as the signature
  of a guard testing the wrong thing. Replaced by a page-level attribution check, with the
  assertion guard doing the real work.
- **Two live-catch strings did not match the patterns they were meant to exercise** and would have
  passed whatever the guards did. Both fixed and re-verified.

## 5. Safety architecture

The `/investigations` section already declared an `outOfScope` list — "Investigative technique at
operational specificity", "Surveillance capability, thresholds, or detection detail", "Anything
that could assist evasion, concealment, or interference with an investigation". Wave 22 did not
need a new safety concept; it needed that one enforced at the granularity this subject demands.

- **Twelve directive patterns**, run on a separate sentence-split unit set, covering evasion of
  search, seizure, warrant, interception, surveillance and examination; concealment and destruction
  of data; device wiping and encryption framed as instruction; disabling biometrics; passcode
  refusal; anti-forensic and counter-surveillance technique; surveillance detection; warrant-gap and
  jurisdiction-difference exploitation; metadata manipulation; and reader-directed conduct.
- **A named-product guard** covering forensic tools, spyware platforms and interception products.
- **A per-page requirement** that each page state what it deliberately does not describe, in terms
  specific to its own subject.
- **Three deferrals on safety grounds**, documented rather than thinned.

## 6. Accessibility

WCAG 2.2 AA architecture preserved; no new component, no new interaction, no new colour, and no
interactive diagram — Part AA's caution was not needed because nothing visual was added.

- Keyboard: all seven routes reachable from the skip link, focus landing on `main`.
- Headings: exactly one `h1` per page, no level skipped.
- 320px and 200% text: zero horizontal overflow on all seven.
- **Twelve statutory terms checked individually at 320px**, chosen as the longest tokens and
  unbroken clauses the corpus now carries: `Staatsanwaltschaft`, `Oberlandesgericht`,
  `Ermittlungsergebnisse`, `Telekommunikation`, `Verkehrsdaten`, `Bestandsdaten`, `Beschlagnahme`,
  `Durchsicht`, `erheblich mitbetroffenen Personen`, `cualquier otro afectado por la medida`,
  `cesará a todos los efectos`, `despejar sospechas sin base objetiva`.

## 7. Final gate

Run from the final committed tree. Exit codes read directly, never through a pipe. See §8 of the
final report for the table.

## 8. Known limitations

1. **Four systems and one treaty.** Twelve of the sixteen jurisdictions the brief listed carry no
   Wave 22 claim and are recorded as NOT RESEARCHED, not as "no".
2. **Everything is statutory or treaty text.** No case law was read in any system, and in several
   the operative content of these rules is judicial.
3. **Three subjects deferred on safety or evidence grounds**: covert surveillance, cross-border
   digital evidence, and location tracking as a comparative subject.
4. **The Japanese translation may lag.** Its version identifier reflects amendments to 2006; only
   structural propositions present in that version are used, and the record says so.
5. **Two US records rest on a Tier-2 host** because uscode.house.gov timed out twice and govinfo.gov
   returned HTTP 502. Both are cited for statutory wording only and both carry the access note.
6. **Data retention, deletion regimes and intelligence powers** were not researched in any system.
