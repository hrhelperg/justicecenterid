# Knowledge Expansion Wave 6 — QA record

**Branch** `feat/knowledge-expansion-wave-6`, cut from `main` at `32e1b7d` (Wave 5, PR #23).
**Date** 2026-08-10.

## 1. Merge gate

Wave 5 was verified artefact by artefact rather than by the merge commit's title: both
institution records, the guide, `oversightPosture`, the Ireland temporal invariant, the
cannibalization and QA documents, the tests, the route registry and the sitemap. The three
Wave 5 routes were rebuilt from source, and the exported complaints-body page was parsed to
confirm that every sentence naming GSOC carries a past-tense marker. Recorded in
`docs/audits/knowledge-expansion-wave-6-baseline.md`.

## 2. What shipped

| Change                                                                       | Route effect |
| ---------------------------------------------------------------------------- | ------------ |
| `/countries/france/oversight` published                                      | **+1 route** |
| France counterexample on `independent-police-complaints-body`                | none         |
| France example on `ombuds-and-rights-institution`                            | none         |
| France example on `who-investigates-police`                                  | none         |
| Ten France sources added; Constitution note extended to Articles 65 and 71-1 | none         |
| Four rejected labels added to the must-404 list                              | none         |

**Zero new institution types.** The taxonomy decisions are in
`docs/research/wave-6-oversight-taxonomy-findings.md`; the evidence is in
`docs/research/france-police-oversight-deep-dive.md` and
`docs/research/france-oversight-function-matrix.md`.

## 3. Measurements

| Metric                       | Wave 5 end (`32e1b7d`) | Wave 6 end       | Δ           |
| ---------------------------- | ---------------------- | ---------------- | ----------- |
| Routes                       | 352                    | 353              | +1          |
| Sitemap URLs                 | 352                    | 353              | +1          |
| Exported pages               | 354                    | 355              | +1          |
| Unit tests                   | 2584 in 57 files       | 2620 in 58 files | +36         |
| Playwright tests             | 376 in 7 files         | 406 in 8 files   | +30         |
| Route matrix                 | 406/406                | 412/412          | +6 must-404 |
| Source records               | 225                    | 235              | +10         |
| France-scoped sources        | 6                      | 16               | +10         |
| Institution records / routed | 15 / 13                | 15 / 13          | 0           |
| Law-enforcement guides       | 15                     | 15               | 0           |
| JS bundle                    | 663,403 B              | 663,403 B        | **0**       |
| CSS bundle                   | 29,406 B               | 29,625 B         | +219 B      |
| `out/`                       | 79 MB                  | 79 MB            | 0           |

E2E: 402 passed, 4 skipped, 0 failed. `npm run validate` exit 0 (format, lint, typecheck,
test, build, verify:output).

## 4. Mutation proofs

Each mutation was applied to the real source, the suite was run, and the failure was read
before the proof was accepted. All five were re-run after the test file was edited for lint,
because a proof against a superseded file is not a proof.

| #   | Mutation                                                                    | Result                                                                                                 |
| --- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| M1a | Remove `fr-decret-2013-784-igpn` from the oversight module's sources        | FAILS — _rests on the specific instruments the claims come from_                                       |
| M1b | Repoint that source's `jurisdiction` from `FR` to `BE`                      | FAILS — _cites only sources that exist and are scoped to France_                                       |
| M2  | Rewrite the IGPN as "a body independent of the police"                      | FAILS — 2 tests: the statutory-attachment quote, and the `(internal)` marker                           |
| M3  | Present the abrogated arrêté of 15 January 2019 as the IGGN's current basis | FAILS — 2 tests: the current instrument is not named, and the 2019 text appears without its abrogation |
| M4  | Route an institution type under a rejected label (`police-inspectorate`)    | FAILS — _routes no institution type for a label the French evidence rejected_                          |

**M1's first attempt was not a proof and was recorded as such.** The pattern matched twice in
`france.ts` and the replacement landed in the _sources_ module rather than the _oversight_
module; the suite stayed green. The mutation was retargeted with an anchor unique to the
oversight module and then failed correctly.

Two design decisions in the rules themselves:

- **M2 reads for the statutory attachment rather than blocklisting "independent".** A
  blocklist is beaten by paraphrase, and it would also flag the page's own accurate use of the
  word about the Défenseur des droits.
- **M3 is a positive rule plus a per-sentence check.** The page is _allowed_ to name the 2019
  arrêté, and must, so a blocklist on the old date would forbid exactly the sentence that keeps
  a reader right. The rule requires the current instrument to be named, and requires every
  sentence mentioning the old one to carry an abrogation marker.

## 5. Adversarial QA of the rendered page

The exported HTML was parsed with markup and scripts stripped.

- **Heading order**: one `h1`, then `h2`s. Two `h2`s read "Sources" — the sources landmark and
  the sources section, which is the pattern every country module already uses.
- **Effectiveness language**: five matches for `effectiv*`, and every one is inside a source
  note stating that the source does **not** support a claim about effectiveness. No assertion.
- **"corruption"**: two matches, both the actual name of the IGPN's _délégation nationale
  anti-corruption_ in a source note.
- **"should"**: one match — "none should be inferred", the page's own restraint.
- **No** caseload, substantiation rate, public-confidence or comparative-superiority language.
- No horizontal overflow at 320 px or at 200 % text; reachable by keyboard from the skip link;
  apex canonical; no `GovernmentOrganization` or `PoliceStation` JSON-LD.

## 6. Restricted claims

**None added.** The module's `restrictedClaims` is empty and a test asserts it. The page states
in terms that the existence of an oversight body is a fact about institutional design and not
evidence about results.

## 7. Uncertainty carried onto the page rather than resolved silently

- The IGPN's express deontology mandate is **NOT ESTABLISHED** in the instruments read, while
  the IGGN's is express. Recorded as unestablished, not as an absence, and asserted by test.
- The IGPN's relationship to the procureur in those texts is direction rather than referral; no
  separate duty to report was established.
- Two powers of the Défenseur des droits — informing the procureur, and presenting observations
  before courts — could not be pinned to a single article number across two independent reads,
  so they are described without one. The powers themselves were confirmed twice.
- The Défenseur des droits is **not** described as France's accredited national human-rights
  institution; that was not researched, and a test forbids the claim.

## 8. Source verification

All ten new sources are `content-confirmed` — read, not status-probed. Légifrance served every
legal text requested. The two interior-ministry prose pages describing the IGPN and IGGN
returned HTTP 403 to automated requests; per the rule already recorded on
`SourceRecord.verificationMethod`, that was not treated as evidence against them, and nothing
was cited from them. The IGPN facts come from the décret and arrêté instead, and the reporting
platform's description came from a Ma Sécurité page that did serve.

One conflict was found and resolved in favour of the consolidated legal text: ministry prose
still refers to the IGPN's _division nationale des enquêtes_, while the consolidated arrêté
names the _délégation nationale anti-corruption_ following the arrêté of 26 August 2025. The
page follows the legal text and says why.

One factual conflict was resolved by re-reading: a search summary reported the Défenseur des
droits as an "autorité constitutionnelle indépendante", while two independent reads of the
consolidated Article 2 both returned "autorité administrative indépendante". The page states
both halves — established by the Constitution, classified by statute as an independent
administrative authority — because neither alone is accurate.

## 9. Not done

No push beyond the single final push, no PR, no merge, no deploy, no Netlify invocation, no DNS
change. `SITE.operator` and `SITE.contact.email` remain `null`, so the launch blockers recorded
in the deployment runbook are unchanged by this wave.
