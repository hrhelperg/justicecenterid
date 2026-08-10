# Knowledge Expansion Wave 5 — QA record

**Branch:** `feat/knowledge-expansion-wave-5`
**Base SHA:** `d8932c1cb400e95d7476dc5e8794686644317b29`
**Date:** 2026-08-10

Baseline: `docs/audits/knowledge-expansion-wave-5-baseline.md`.
Plans: `docs/research/police-oversight-institutions-plan.md`,
`docs/research/police-oversight-country-matrix.md`.
Matrix: `docs/seo/knowledge-expansion-wave-5-cannibalization.md`.

---

## 1. What shipped

18 candidates → **2 published**, 5 merged, 2 aliased, 8 deferred, 2 rejected as entities.
Plus one comparative guide; two further guide candidates deferred.

```
/institutions/independent-police-complaints-body
/institutions/ombuds-and-rights-institution
/law-enforcement/who-investigates-police
```

**Two institution types, not the 6–10 the brief targeted, and the number is the evidence.**
The corpus holds six national police-oversight bodies and five ombuds/rights institutions —
and **no internal-affairs or police-inspectorate source at all**. The only "Inspectorate" in
the registry is Ireland's, dissolved on 2 April 2025; every "Inspector-General" is a police
chief. Eight candidates are deferred rather than published thin.

## 2. Metrics

| Metric               | Before    | After         | Delta |
| -------------------- | --------- | ------------- | ----- |
| Registered routes    | 349       | **352**       | +3    |
| Sitemap URLs         | 349       | **352**       | +3    |
| Exported pages       | 351       | **354**       | +3    |
| Institution routes   | 11        | **13**        | +2    |
| Unit / content tests | 2527      | **2584**      | +57   |
| Playwright tests     | 346       | **361**       | +15   |
| Source records       | 225       | 225           | **0** |
| **Shared JS**        | 663,403 B | **663,403 B** | **0** |
| **CSS**              | 29,406 B  | **29,406 B**  | **0** |
| `out/` on disk       | 78 MB     | 79 MB         | +1 MB |

**Zero JS and zero CSS delta**, and **no new sources**: every claim rests on records verified
in earlier waves. No new route family — the existing `InstitutionType` registry was extended,
not duplicated.

## 3. Validation

```
npm ci / format:check / lint / typecheck    PASS
npm test                                    PASS — 57 files, 2584 tests
npm run build                               PASS
npm run verify:output                       PASS — 352 routes / 354 pages / 352 sitemap
npm run test:e2e                            PASS — 357 passed, 4 skipped
route matrix                                PASS — 352 routes + 54 must-404 paths, 406/406
```

## 4. Mutation proofs

### M1 — country-scoped source invariant · PROVEN

Removing `ng-constitution` fails with
`independent-police-complaints-body cites nigeria without a NG source`.

### M3 — internal/external classification · PROVEN

Removing `oversightPosture` fails that record's check while the other still passes.

### M2 — current/historical body state · PROVEN, after two failed attempts

The one the brief made Ireland the test case for, and the one that took three versions.

**First:** a blocklist looking for "GSOC is the current" was defeated by an obvious
paraphrase — _"The Garda Síochána Ombudsman Commission (GSOC) is the current body …"_ matched
neither pattern, because of the parenthesis and the word order.

**Second:** rewritten as a positive rule — every sentence naming the predecessor must mark it
past — it then flagged the page's **own warning**: _"A page naming GSOC as the current
complaints body would now be wrong."_ That is precisely the sentence a reader benefits from,
and a rule that punishes the safeguard will be satisfied by deleting it. This is the same
shape as the Wave 4 safety test that failed on its own disclaimer; it is now a recognised
pattern rather than a surprise.

**Final:** reads the real prose fields rather than JSON, accepts that construction, and fails
on the mutation with the offending sentence quoted.

## 5. Adversarial QA

Run over all three pages against the brief's twelve questions. **No P0 or P1 survived.**

Findings and how each was addressed:

- **Q2, is "independent" sourced?** Every use is paired with a statutory or constitutional
  basis — Act 1 of 2011, Act No. 341/2011 Coll., Act no. 404 of 2010, Art. 148a B-VG,
  Instrument of Government Ch. 13 Art. 6, "under law we are fully independent". A test
  requires it, and forbids comparative or superlative independence language.
- **Q3, internal or external?** Recorded in a typed `oversightPosture` field rather than left
  to prose, and asserted per record. It deliberately records **position**, which is weaker
  than independence and true of every body here.
- **Q5, investigate or only review?** The pages state that investigating, recommending,
  disciplining and prosecuting are different powers, and show the range: Norway investigates
  and prosecutes; South Africa is confined to a statutory list; New Zealand watches and
  investigates while criminal decisions rest elsewhere.
- **Q7, predecessor as current?** Ireland handled through the existing ScheduledChange, with
  a test binding the page's transition date to it.
- **Q9, effectiveness inferred from design?** Stated on the page that existence is a fact
  about design and not about outcomes, and asserted by test.
- **Q10, generic rights body as police-specific?** The whole reason the ombuds page exists
  separately. It states its mandate is general and warns against the conflation.
- **Q11, does the source support the exact mandate?** Kenya's IPOA was **excluded** for this
  reason: the dossier records that its establishing Act was not re-fetched line by line, so
  mandate detail is unsupported. Using it would have been the exact failure.

## 6. Accessibility

Verified on both institution pages, the guide, and `/institutions`: one `h1` each,
registry-derived breadcrumbs, visible sources, skip link focusing `main`, no horizontal
overflow at 320px or at 200% text, ecosystem banner and cookie settings present, no page
bypassing SiteShell. No tables were introduced; country evidence renders as a description
list.

## 7. SEO and structured data

Unique title, description and canonical per route; existing `WebPage`/`Article` +
`BreadcrumbList` patterns reused with no new schema type; `GovernmentOrganization`,
`GovernmentService` and `PoliceStation` all asserted absent; sitemap parity 352/352; no
banned superlative; **no redirects** — no existing URL changed.

## 8. Known limitations

1. **Eight candidates deferred for want of sources**: internal affairs, professional
   standards, police inspectorate, integrity commission, anti-corruption commission, data
   protection authority, audit institution, police standards commission.
2. **The corpus did not match the brief's expected countries.** Nine of the twelve suggested
   have no oversight sourcing — no IOPC, no IGPN/IGGN, no Défenseur des droits, no CRCC, no US
   civilian-review or inspector-general source. The pages follow the corpus.
3. **Kenya's IPOA is excluded** despite being a strong example, because the dossier records
   that its Act was not verified in detail.
4. **`ombuds-and-rights-institution` merges three families** — parliamentary ombuds, public
   defenders of rights, and national human-rights institutions. They overlap heavily in the
   sourced examples, and splitting them would have created thin competing pages; if the corpus
   later distinguishes them, the page should be split.
5. **No new ScheduledChange was created.** Ireland's was already modelled, which is the system
   working — but it also means Wave 5 did not exercise the creation path.

## 9. Recommended Wave 6

**France, to unlock the internal/external contrast.** IGPN and IGGN as internal inspectorates
alongside the Défenseur des droits as a general rights institution would make an
`internal-affairs` and a `police-inspectorate` page possible for the first time — and France
is the one system where the internal body and the external body can be set directly against
each other. That single country closes the largest gap this wave found.

Second: the **United Kingdom (England and Wales)** IOPC, scoped precisely to the policing
jurisdiction it covers rather than to "the UK".

Third, still carried from Wave 3: give `standard-of-proof` and `burden-of-proof` the
comparative sourcing they need and route them as a pair.
