# Batch B — Central & Southern Europe: QA and summary

The second authored country batch on the scaling framework: Italy, Portugal, Austria, Czechia,
Poland and Greece. Branch `feat/batch-b-central-southern-europe`, based directly on `main` (the
framework and Batch A are already merged).

## Verdict: ready

Six countries published, each through the publication gate, verified from primary sources and an
independent adversarial fact-check pass. No new schema; no fabrication. Batch B's distinctive
contribution is comparative and disciplinary rather than structural — it mapped a full spectrum of
prosecution independence and stress-tested the honesty controls on a politically contested subject.

## What was built

| Country  | Slug       | Published modules | Restricted claim (SPACE I 2024)                                    | Distinctive feature                                                                                                                                               |
| -------- | ---------- | ----------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Italy    | `italy`    | 8                 | density 118.1 (over)                                               | Regionalised unitary but justice fully national (the anti-Åland); magistrate-prosecutors, mandatory prosecution; multiple national police forces                  |
| Portugal | `portugal` | 8                 | density 96.3 (under)                                               | Constitutionally **autonomous** prosecution (neither judiciary nor executive); four top courts + diffuse review; two-phase investigation                          |
| Austria  | `austria`  | 8                 | 9,258 inmates / rate 101.1 — **no density** (no capacity reported) | Federal but justice fully **federal** (Belgium-shape); three co-equal apex courts; prosecution under the minister, with a 2026 draft reform                       |
| Czechia  | `czechia`  | 8                 | density 96.4 (under)                                               | Prosecution **part of** the Ministry of Justice; tri-apex courts; **no** national judicial council; enacted 2024 insulation reform                                |
| Poland   | `poland`   | 8                 | density 85.7 (under)                                               | Prosecutor-General **is** the Minister of Justice (personal union); contested judiciary governance handled strictly by dated attribution                          |
| Greece   | `greece`   | 8                 | density 94.7 (under)                                               | Three co-equal supreme courts and **no** constitutional court (diffuse review); prosecution inside the judiciary; police + prisons under one non-Justice ministry |

Each country: 8 published modules (justice-system, law-enforcement, courts, prosecution,
investigations, corrections, oversight, sources) + 4 deferred (forensics, border-and-customs,
history, timeline). No public sub-national page anywhere (Mount Athos is prose only; no region
record for any country).

## Model findings — no new schema, one spectrum mapped

Batch B added **no new field, level, or scope value.** Its findings are comparative:

1. **A full prosecution-independence spectrum, in one batch.** Portugal (constitutionally autonomous)
   → Greece / Italy (inside the independent judiciary) → Austria (a separate service under the
   Minister of Justice) → Czechia (part of the Ministry of Justice) → **Poland (the Prosecutor-General
   _is_ the Minister of Justice)**. Every point is carried by `prosecutionScope: 'own'` plus prose —
   the value never moved, the description did.
2. **Austria re-validated the Belgium `federal`/`exclusive-federal` shape.** A federation whose four
   justice functions are federal competences: one `federal` record, all core competences
   `exclusive-federal`, no Land record — the inverse of Germany, the same as Belgium. Two countries
   now use the shape.
3. **Two unitary states with autonomous regions that hold no justice competence** (Italy's five
   special-autonomy regions; Portugal's Azores/Madeira) both resolve to one country record with no
   region record — the deliberate counter-example to Finland's Åland, stated in prose.
4. **A complete constitutional-review spectrum:** dedicated court + diffuse review (Portugal,
   Czechia); dedicated court only (Italy's Corte costituzionale, Austria's VfGH); and **diffuse
   review with no constitutional court** (Greece, with a conflict-resolving Special Highest Court).
5. **Reform handling by kind:** Italy's separation-of-careers bill (enacted-but-conditional, awaiting
   referendum) and Austria's Bundesstaatsanwaltschaft draft (in consultation) are described in prose,
   not as `ScheduledChange` (neither has a fixed commencement); Czechia's 2024 prosecution reform is
   stated as enacted law with dates. No new `ScheduledChange` records — the count stays at 3.

## Honesty — the load-bearing part of this batch

- **Poland neutrality.** Enacted measures (2016 PG–MoJ union; 2017 KRS judicial-member selection)
  are stated as facts with statutory citations; the contested _assessment_ is carried only by dated
  attribution to the CJEU (C-204/21, 5 June 2023) and the European Commission's 2025 Rule of Law
  Report; proposed measures are labelled proposed; news-media-only developments are excluded. A
  dedicated test scans all reader-facing Poland prose and fails on partisan/characterising terms
  (captured, backsliding, authoritarian, party names, purge, crisis, court-packing).
- **Austria incomplete-source honesty.** SPACE I reported no capacity for Austria, so the restricted
  claim states the population and rate and makes **no** density/occupancy claim; a test asserts the
  statement never says "over/under capacity".
- **Greece under bot walls.** The Constitution is quoted from an unofficial (Constitute) translation
  because the Hellenic Parliament's official EN PDF was HTTP 403, cross-checked against e-Justice;
  the police/prisons ministry placement comes from the U.S. State Department's 2022 report (a
  foreign-government secondary source) because the Greek official sites were 403 — both named openly
  on the pages. CPC article numbers and the corrections-transfer instrument are not asserted.
- **Withheld comparisons.** Every SPACE I claim carries the "not comparable between countries"
  limitation; Poland's and Czechia's high per-100k rates are deliberately kept out of the claims.
- **Named translation caveats.** Poland's NSA is shown in both the official-translation rendering
  ("Chief Administrative Court") and its conventional name; Czechia's "State Attorney's Office" /
  "Public Prosecutor's Office" dual-rendering is noted.

## Sources

Load-bearing constitutional/statutory facts were verified from official primary sources, several
fetched and re-confirmed by hand: the **Italian Constitution** (Corte costituzionale EN PDF); the
**Portuguese Constitution** (parlamento.pt official EN), LOIC and Code of Criminal Procedure; the
**Austrian B-VG, StAG and StPO** (RIS — Arts. 82, 90a, StAG §2 re-fetched by hand); the **Czech
Constitution** (usoud.cz) and the EC 2024 Rule of Law Report; the **Polish Constitution**
(trybunal.gov.pl) and four Sejm ELI statutes (four passages re-confirmed by hand), the CJEU C-204/21
judgment (via the FRA reference) and the EC 2025 Rule of Law Report; and the **Greek Constitution**
(Constitute), e-Justice and the U.S. State Department 2022 report. Prison figures come from the
**Council of Europe SPACE I 2024** report, extracted from the primary PDF and read against Tables 3
and 16 (column reading validated against a known country's published values).

## Validation

| Check              | Result                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run validate` | exit 0 (format, lint, typecheck, test, build, verify:output)                                                                                               |
| Unit tests         | **1610 passed / 38 files** (was 1340 / 32 at the Batch A close)                                                                                            |
| Build              | 228 exported pages                                                                                                                                         |
| verify:output      | **226 routes / 226 sitemap / 228 pages**                                                                                                                   |
| `npm run test:e2e` | **98 passed, 4 skipped** (smoke + accessibility, desktop + mobile)                                                                                         |
| Static HTTP matrix | 6 new hubs + 30 published module routes → 200; every deferred module and every two-letter alias (`/countries/it` … `/countries/gr`) → 404; no SPA fallback |

Census after Batch B: **22 published dossiers**, 226 public routes, **19 restricted claims** (+6),
**62 jurisdiction records** (+6, one per country — all unitary/federal country-level), **3 scheduled
changes** (unchanged — every Batch B reform is recorded in prose, not as a pending change), 170
source records. Each new country has a per-country test (`tests/content/countries-<slug>.test.ts`),
and the semantic-regression suite automatically extended to all twenty-two.

## Accessibility

The framework's WCAG 2.2 AA guards held for the new pages: single `h1`, skip link and landmarks,
jurisdiction-table caption/region label derived from the country name, and non-Latin names — Greek
(Άρειος Πάγος, Ελεγκτικό Συνέδριο), Czech (Nejvyšší soud), Polish (Krajowa Rada Sądownictwa) — render
in the page, asserted for Greece by a rendered-HTML test. The e2e accessibility suite (heading
structure, landmarks, 320px reflow, 200% zoom, mobile nav) passes for the whole site.

## Not done (per instruction)

No PR opened, nothing merged, no deployment, no Netlify connection, no DNS change. The branch
`feat/batch-b-central-southern-europe` is pushed and left for review.
