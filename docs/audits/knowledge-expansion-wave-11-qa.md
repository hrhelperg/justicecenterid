# Knowledge Expansion Wave 11 — QA record

Right to defence and legal representation. A new top-level section, three jurisdictions reached,
seven routes published, six sources added.

## 1. Merge gate

| Check                                | Result                                                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Repository                           | `hrhelperg/justicecenterid`                                                                                  |
| `origin/main`                        | `2a01b1dcd180886d572e108467916cc3fa16a3eb` — Merge PR #28 from Wave 10                                       |
| Wave 10 an ancestor of `origin/main` | Yes                                                                                                          |
| All eight Wave 10 prosecution guides | Present; five **rebuilt to HTML** from a clean `rm -rf out .next && npm run build`                           |
| Wave 10 docs                         | plan, matrix, cannibalization and QA all present                                                             |
| Wave 10 safeguards                   | guilt-language guard, **defence-boundary guard**, `hasSourceFor`, markdown-in-misconception guard — all live |
| Sources / routes / tests at base     | 250 / 380 / 3308                                                                                             |
| Working tree                         | Clean                                                                                                        |

Wave 10's defence-boundary test — forbidding prosecution pages from carrying public defenders,
legal aid, privilege or defence strategy — still passes. Wave 11 built the material in its own
section rather than back-filling `/prosecution`.

## 2. Part C — the canonical hub, and a documented deviation

**The brief named `/defense` as its preferred candidate. The evidence pointed to `/defence`, and
that is what was built.** The brief also instructed that the choice be made on route conventions,
terminology, international neutrality and extensibility rather than preference, which is the
instruction that produced the different answer.

| Test             | Finding                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Corpus spelling  | `defence` 39 times in prose; `defense` 14 times, **every one a French proper noun** (`fr-code-defense-*`, `defenseurdesdroits.fr`). Zero English-prose uses |
| Wider convention | `organisation` 212 / `organization` 36; `recognised` 6 / `recognized` 0                                                                                     |
| Route convention | Every section is a bare function noun. `defence` is the exact parallel to `prosecution`; `legal-defence` breaks the pattern                                 |
| Neutrality       | Nine of the 32 dossiers are jurisdictions that use `defence`                                                                                                |
| `SITE.htmlLang`  | `'en'` — neutral; the locale does not settle it, the prose does                                                                                             |

The section was added through `SECTION_IDS`, `sections.ts`, the app router, the route registry and
the sitemap — not hardcoded. `/defense`, `/legal-defence` and `/legal-defense` are all in the
route matrix's must-404 list and all return 404 against the built output.

**`defence` was also added to `SAFETY_SENSITIVE_SECTIONS`**, so a safety review is mandatory
before anything in it publishes. The brief's boundary is the risk profile that list exists for.

## 3. Sources

**The thinnest starting position of any wave**: six defence-related sources and no defence content
of any kind. Six sources added, 250 → 256:

`de-stpo-137-verteidiger`, `de-stpo-140-notwendige-verteidigung`, `de-stpo-141-pflichtverteidiger`,
`de-stpo-147-akteneinsicht`, `de-stpo-148-verkehr-verteidiger`,
`fr-service-public-aide-juridictionnelle`. Brazil rests on the existing `br-cf-1988` (Articles 134
and 5º LXXIV, read directly from Planalto).

### The ECHR could not be read, and the consequence was published

`echr.coe.int` returned HTTP 403 on three paths; the Council of Europe treaty list returned 403;
two PDF mirrors were scanned images. The UN Treaty Series ICCPR PDF is likewise scanned.

A web-search summary supplied wording for Article 6(3)(c). **That is not a read of an official
document.** No ECHR source was added, no Convention provision is quoted anywhere in this wave, and
**the equality-of-arms page was deferred as a direct consequence** rather than written from a
summary. A test asserts that the Convention is not quoted and that the limitation is stated on the
page most likely to have relied on it.

## 4. Cannibalization

36 guide candidates, 5 institution candidates, 1 profession candidate.
**PUBLISH 7 · MERGE 16 · DEFER 13 · REJECT 0.**

**Nothing was rejected.** Every unpublished candidate has a distinct intent and failed only on
evidence. That is a different verdict from the previous three waves and is recorded as one.

**Zero institution routes**, for the fourth consecutive wave, and the forcing question is why.

### The forcing result: Brazil's Defensoria Pública

The brief asked whether it belongs to the same family as a United States public defender office,
and warned against answering yes automatically. **It does not.** Article 134 makes it a permanent
institution essential to the jurisdictional function of the State — the same constitutional
formula Article 127 uses for the Ministério Público — with a mandate covering legal guidance, the
promotion of human rights, and the defence of individual **and collective** rights, **judicial and
extrajudicial**, in all degrees. Its members hold career posts by public competition, are
guaranteed _inamovibilidade_, and are **forbidden to practise privately**.

A public defender office provides criminal defence to indigent defendants. They share a function
and differ in kind, and no defence institution family was published because of it.

**Zero profession routes.** `/professions/defence-lawyer` is a real and conspicuous gap —
`prosecutor` and `judge` both exist — but a profession record on this site carries
responsibilities, decision authority, constraints, oversight and training-route shape, and none of
that was researched. Recorded as the clearest single opportunity for a later wave.

## 5. Validation

| Gate                    | Result                                                 |
| ----------------------- | ------------------------------------------------------ |
| `npm ci`                | clean, exit 0                                          |
| `npm run format:check`  | pass                                                   |
| `npm run lint`          | pass, no warnings                                      |
| `npm run typecheck`     | pass                                                   |
| `npm test`              | **3490 passed / 63 files**, exit 0                     |
| `npm run build`         | pass                                                   |
| `npm run verify:output` | **388 routes / 390 pages / 388 sitemap URLs**          |
| `npm run test:e2e`      | **786 tests, 782 passed, 4 skipped, 0 failed**, exit 0 |
| Route matrix            | **519/519** — 388 routes + 131 must-404                |

### Deltas against the baseline

| Metric                  | Baseline  | Wave 11   | Delta                                 |
| ----------------------- | --------- | --------- | ------------------------------------- |
| Routes                  | 380       | 388       | +8 (one section index + seven guides) |
| Exported pages          | 382       | 390       | +8                                    |
| Sitemap URLs            | 380       | 388       | +8                                    |
| Defence routes          | 0         | 7         | +7                                    |
| Sections                | 8         | 9         | +1                                    |
| Unit tests              | 3308      | 3490      | +182                                  |
| Unit test files         | 62        | 63        | +1                                    |
| Playwright tests        | 700       | 786       | +86                                   |
| Source records          | 250       | 256       | +6                                    |
| Institution routes      | 15        | 15        | 0                                     |
| Profession routes       | 6         | 6         | 0                                     |
| Restricted claims       | 10        | 10        | 0                                     |
| ScheduledChange records | 4         | 4         | 0                                     |
| **JS bundle**           | 663,403 B | 663,431 B | **+28 B**                             |
| **CSS bundle**          | 29,625 B  | 29,655 B  | **+30 B**                             |
| `out/`                  | 91,268 KB | 94,004 KB | +2,736 KB                             |

**This is the first wave with a non-zero bundle delta, and it is reported as measured rather than
rounded to zero.** +28 B of JS and +30 B of CSS are attributable to a new top-level route entering
the build manifest — the previous four waves added guides to existing sections and moved neither
figure. No client runtime, no eligibility tool, no lawyer matching and no external SDK were added.

## 6. Mutation proofs

Ten mutations. Every one asserted that it had applied before the suite ran, and two were rejected
and re-run.

| #   | Mutation                                             | Expected | Observed                                                                                    |
| --- | ---------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| M1  | Remove Brazil's sources from the funding page        | FAIL     | FAIL — 3 tests, including the country invariant and a pre-existing citation-integrity check |
| M2  | "Everyone has the right to a free lawyer"            | FAIL     | FAIL — universal free-counsel claim asserted                                                |
| M3  | Equate legal aid with public defenders               | FAIL     | FAIL — the conflation is never addressed                                                    |
| M4  | Equate court appointment with state employment       | FAIL     | FAIL — appointment/employment conflation                                                    |
| M5  | Flatten the Defensoria into a public defender office | FAIL     | **First attempt INVALID — see below.** On retry: FAIL, 2 tests                              |
| M6  | "Once charged, the offender…"                        | FAIL     | FAIL — guilt-implying language                                                              |
| M7  | Absolute privilege claim                             | FAIL     | **Initially PASSED — see below.** On retry: FAIL                                            |
| M8  | Tactical interrogation-evasion fixture               | FAIL     | FAIL — the avoiding-admissions pattern                                                      |
| M9  | Duplicate a prosecution guide's question             | FAIL     | FAIL — 2 tests                                                                              |
| M10 | Commercial / lead-generation copy                    | FAIL     | FAIL — commercial content                                                                   |

### M5 was rejected as an invalid proof

The first attempt inserted a straight apostrophe inside a single-quoted TypeScript string,
breaking the module. Only 246 unrelated tests ran. **A mutation that breaks the build is not a
proof** — it demonstrates that the file no longer parses, not that a guard fires. It was redone
with correct quoting, typechecked to confirm the module still compiled, and then observed failing
on the two intended assertions.

### M7 found a real weakness in the test

M7 applied cleanly and the suite passed. The absolute-privilege check read a 300-character window
around each hit for any negation — and the _following_ sentence happened to contain "cannot",
which satisfied it. An inserted absolute claim survived because of a neighbouring word.

The check now requires the denial to be **in the same sentence** as the claim, which is the only
place it can actually qualify it, and carries a non-vacuity test proving a nearby negation no
longer saves an unqualified claim. M7 was then re-run and observed failing.

This is the third consecutive wave in which a mutation proof exposed a missing or weak test rather
than confirming a working one.

## 7. Adversarial QA

The twenty questions were run against all seven pages and the section index.

| #   | Finding                                                                                                                                                                                                                                                                                                  | Severity                     | Resolution                                                                                                                                                                                                |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `defence-counsel-and-prosecutor` named France with no France-scoped source                                                                                                                                                                                                                               | **P1**                       | Genuine omission; `fr-justice-parquet` added                                                                                                                                                              |
| 2   | Three markdown links placed in `Misconception.reality`, which renders as plain text — caught by **Wave 10's corpus-wide guard**                                                                                                                                                                          | **P1**                       | All three rewritten as plain prose. The guard added one wave earlier did its job on the next wave's content                                                                                               |
| 3   | Mutation proof M5 was invalid (broke the build) and M7 passed against applied content                                                                                                                                                                                                                    | **P1**                       | M5 redone correctly; M7's check tightened to same-sentence and re-run                                                                                                                                     |
| 4   | Three safety and boundary patterns fired on **denials** — a page saying "does not describe trial procedure" was treated as describing it                                                                                                                                                                 | P2                           | Patterns made denial-aware by reading each hit in context, and the commercial patterns narrowed to instruction rather than explanation. Non-vacuity fixtures added so neither change created a dead check |
| 5   | **A corpus sweep for overlooked defence material found exactly one hit — and it was a false friend.** Czechia's _Veřejný ochránce práv_, the "Public Defender of Rights", is the Ombudsman: it handles maladministration complaints, inspects places of detention and acts as the national equality body | **P2, published as content** | Added to the funding page as a terminology warning with the Czech source, and locked by a test. The trap was worth publishing rather than merely avoiding                                                 |
| 6   | Germany carries 36 mentions against France's 19 and the United States' 3                                                                                                                                                                                                                                 | P3                           | Recorded, not padded. Germany is the only system with primary procedural provisions reached, and every page's uncertainty note says so                                                                    |

All P1 findings fixed. No P0.

Questions returning clean on first pass: **no legal-advice phrasing at all**; every use of
"offender" and "public defender office" is inside a misconception claim being refuted or a
sentence establishing the contrast; country variation stated nine times; no US doctrine
universalised — the Sixth Amendment and Miranda appear nowhere.

## 8. The three standing rules and how they are enforced

**"Right to counsel" names three rights.** Consult, appoint, and pay are separated on the page and
in the tests, with five patterns forbidding a universal free-counsel claim, each proved against a
fixture.

**Publicly funded is not publicly employed.** Four patterns forbid the appointment/employment
conflation; the pages carry Germany's Rechtsanwalt and France's avocat as private practitioners
and Brazil as the single exception.

**Nothing is tactical.** Eleven patterns cover avoiding admissions, resisting questioning, hiding
evidence, manufacturing privilege, exploiting disclosure, manipulating witnesses, false alibis,
obstruction, beating charges and avoiding conviction — each proved against a fixture sentence.

## 9. Limitations

- **Only three systems were reached from primary sources.** The brief named nineteen. Unlike Wave
  10 — where an adversarial sweep found four unused jurisdictions already in the corpus — the sweep
  here found none: no dossier carries defence or legal-aid material. The limitation is the corpus's,
  not an oversight, and every page states it.
- **The ECHR was unreachable**, and equality of arms was deferred rather than written from a search
  summary.
- Thirteen candidates were deferred on evidence, including several with strong intent: equality of
  arms, self-representation, the right to examine witnesses, the right to challenge evidence, and
  defence rights at trial and on appeal.
- **Seven routes against a suggested 8–16.** The brief subordinates count to evidence and source
  feasibility, and this is the wave where that constraint actually bound.
- The German exception under § 148(2) is stated as to its existence, its confinement to named
  offences and its routing through a court. Its operation is deliberately not described.
