# Wave 23 research plan — cross-border digital evidence and international cooperation

Written after the baseline, before any page was drafted. Evidence in
`cross-border-digital-evidence-country-matrix.md` and
`cross-border-digital-evidence-treaty-status.md`; publication decisions in
`cross-border-digital-evidence-cannibalization.md`.

## 1. The problem

The baseline found the cross-border layer absent from the corpus in the most literal sense:
`cross-border`, `mutual legal assistance`, `MLAT`, `Second Additional Protocol`, `EIO`,
`e-Evidence`, `foreign provider`, `cloud`, `extraterritorial`, `direct cooperation`,
`emergency disclosure`, `international cooperation`, `letters rogatory`, `dual criminality` and
`central authority` each occur **zero times** across 140 published guides, and **no country dossier
mentions any of them**.

Wave 22's own record fixes the boundary. Its Convention source is titled "Articles 14–21", every
one of its seven Convention citations is from Chapter II Section 2 — the domestic powers — and its
STATUS line records that the Second Additional Protocol "was located but NOT read for this wave."

## 2. Method

**Instruments first, taxonomy second** (Part B). No page is organised around a country or a
technology. Each is organised around a legal question that only arises because the authority and
the thing sought are in different places: whose law connects them, who is asked, what is frozen
before anything is handed over, and whether the instrument relied on actually operates yet.

**Legal status is researched, never inferred** (Parts C, S, X). Signature, conclusion, entry into
force, application and transposition were treated as five separate facts, and the wave established
different ones for different instruments. Where the register was unreachable, the fact is recorded
as NOT RESEARCHED and no count is stated.

**Verified negatives are scoped to the text.** The strongest findings in this wave are things
instruments do _not_ say: the Convention has no unilateral remote-access provision, the Protocol's
direct route does not reach traffic data, and § 2713 does not confer access anywhere.

## 3. The distinctions the evidence had to carry

Part AG lists twenty-five. The load-bearing ones were tested against primary text before any page
relied on them:

| Distinction                                                              | Established by                                                                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| domestic authority ≠ global executive power                              | Convention Arts. 29, 31 (data in the _other Party's_ territory); Art. 32 (only two unilateral situations)                       |
| preservation ≠ disclosure, internationally                               | Convention Art. 29(1),(2)(f) against Art. 31; Regulation Art. 3(2)                                                              |
| provider request ≠ state-to-state request                                | Protocol Art. 7 against Art. 8; Regulation Art. 3(1) against Directive 2014/41/EU Art. 1(1)                                     |
| signature ≠ entry into force                                             | Protocol: concluded 12 May 2022, no entry-into-force date recorded                                                              |
| ratification ≠ identical domestic implementation                         | Convention Art. 25(2)                                                                                                           |
| Regulation ≠ Directive                                                   | Regulation 2023/1543 (directly applicable, applies from 18 Aug 2026) against Directive 2023/1544 (transposition by 18 Feb 2026) |
| EIO ≠ European Production Order                                          | Directive 2014/41/EU Art. 1(1) against Regulation Art. 3(1), with the Regulation's recital 8 stating why both exist             |
| subscriber ≠ traffic ≠ content — and the categories differ by instrument | Convention Art. 18(3) against Regulation Arts. 3(9)–(12), which add a fourth                                                    |
| transborder access ≠ unrestricted foreign access                         | Convention Art. 32                                                                                                              |
| central authority ≠ court or prosecutor                                  | Convention Art. 27(2)(a): sending, answering, executing **or transmitting**                                                     |
| cooperation ≠ one universal mechanism                                    | seven distinct addressee routes in §3 of the matrix                                                                             |

Each is also a test in `tests/content/wave23-cross-border-evidence.test.ts`.

## 4. What was deliberately not published

**Anything about which jurisdictions or providers are easier or harder to reach.** Part T and
Part U forbid it and a test enforces it. No provider is named, no jurisdiction is characterised by
its cooperativeness, and no timing figure appears that a reader could use to predict a window.

**National implementation.** No implementing legislation was read for any of the thirteen
jurisdictions Part F lists. That absence is a finding — it is what Convention Art. 25(2) predicts —
and it is stated on the page that owns instrument lifecycle rather than hidden.

**Treaty party lists.** The Council of Europe Treaty Office returned HTTP 403 three times.
Secondary summaries with ratification counts were found and are not used.

**Nine further candidates**, each with the reason recorded: dual criminality as a standalone page,
data protection, judicial review of foreign orders, conflicting obligations as a page, a US
CLOUD Act page, joint investigation teams, video conferencing, police-to-police cooperation, and
national implementation.

## 5. The editorial spine

> Digital evidence crosses borders faster than legal authority does. Every mechanism in this wave
> exists because that gap has to be closed by law rather than by capability — and none of them
> closes it the same way.

The second half is what keeps the wave honest. There is no single cross-border mechanism, no single
connecting factor, and no instrument that operates merely because it was adopted.
