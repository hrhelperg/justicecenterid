# Country research workflow

The repeatable process for taking a country from nothing to a published dossier without weakening
source integrity, jurisdictional accuracy, temporal integrity, restricted-claim controls, or the
publication gate. It is the same process the ten pilots followed, written down.

This is the long form. The short operational version is
`docs/editorial/country-authoring-checklist.md`. The contract is
`docs/architecture/country-dossier-contract.md`.

## 0. Scaffold

`npm run scaffold:country -- --slug <slug> --name "<Name>" --code <ISO2>`. This gives you an
unpublished skeleton and the four document templates. Everything below fills them in.

## 1. Jurisdiction scoping

Decide, from sources, what kind of state this is: unitary, federal, or asymmetric. Then decide
**which tiers do institutional work** — and record a jurisdiction only for those. A territory can
exist administratively without being a legal jurisdiction; do not mint a record per subdivision.
Tier records (one per uniform tier, as in France) vs unit records (one per unit, as in a
federation) is a research decision, not a default.

## 2. Research questions

Write the specific questions the pilot must answer before drafting: who polices, who prosecutes,
who runs the courts and prisons, at what level, under whose law. Name the constitutional articles
and codes you will need to read.

## 3. Source hierarchy

Prefer, in order: the constitution and consolidated legislation; official gazettes and government
publications; court records; international-organisation material. Journalism supports
contemporary context only and never a restricted claim. Record every source in the source
register with what it supports and nothing more.

## 4. Source identity verification

Confirm each source **is what it claims to be** and **says what you cite it for**. Record
`verifiedOn` and `verificationMethod`. `content-confirmed` is the only method meaning the
document was actually read. Do not record a source as verified from a search snippet.

### Difficult sources

- **WAF-blocked official sites** (many national gazettes return 403 to automated requests while
  serving browsers normally): retrieve with a browser user agent or an official PDF endpoint, read
  the content, and record how. A status-code probe is not verification in either direction.
- **Official PDFs / consolidated legislation:** cite the consolidated version and record the
  amendment date it reflects.
- **Official translations:** record `translationStatus` and `authoritativeLanguage`. If only the
  original-language text has legal effect, say so; cite the translation as reference, not authority.
- **Inaccessible source text:** if you could not read it, do not cite it and never claim you did.
  Defer the claim.
- **Search-retrieved official pages:** follow through to the official document and verify it
  directly; the search result is a pointer, not the source.
- **Archived sources / link rot:** prefer a stable official URL; where a document has moved, cite
  the current official location and record the access date.

## 5. Current-law verification

Confirm every load-bearing provision is **in force now**. Constitutions are amended; codes are
recodified. Read the version information, not just the article.

## 6. Scheduled-change review

If a cited provision carries a known future repeal, replacement, or reorganisation — or has just
changed — record a `ScheduledChange`. Do not assert anything about the replacement text you have
not read; record only that the current provision will cease, on the stated date. Once the date
passes, the staleness gate forces a re-review.

## 7. Translation status

For any source cited in a language other than its authoritative one, record the translation
status. Keep multilingual institution names in prose (e.g. the Swiss Federal Supreme Court in
German, French and Italian) rather than inventing a translated data field.

## 8. Restricted-claim assessment

For any assertion in the nine restricted categories (detention capacity, compensation, crime
levels, corruption, effectiveness, public trust, occupational harm, staffing, political control,
human-rights performance): either publish it as a fully specified `RestrictedClaim` with an
official statistic, its metric period, its scope, and a limitation — or **defer it**. Prefer one
strong, well-scoped claim to several weak ones, and **prefer deferral to a manufactured figure**.
France, Japan and Spain each publish none, by choice.

## 9. Model stress test

Test the real system against the jurisdiction model. **Default to reuse.** Add a new field or
enum value only when an existing value would state something false, and prefer a second forcing
case before minting an abstraction (as `contracted` waited for Australia to confirm Canada).
Record what reused, what needed a change and why, and what stayed in prose, in the model-findings
document.

## 10. Draft module selection

Draft the modules the sources support. The minimum published set is `justice-system`,
`law-enforcement`, `courts`, `prosecution`, `investigations`, `sources`; add `corrections`,
`oversight`, and others where the evidence supports them. Defer the rest with an honest reason.
Do not stub.

## 11. Publication gate

Run `validateCountryPublication`. It must return nothing. Register the dossier in
`dossiers/index.ts`, add a per-country test, and extend the dossier-slug guard.

## 12. Adversarial verification

Have the load-bearing constitutional and statutory facts independently checked against their
sources, and treat any surviving refutation as a correction (as the Spain pilot corrected
Navarre's policing scope). Record the result in QA.

## 13. Browser QA

Load the hub and representative modules in a browser, desktop and mobile: keyboard navigation,
skip link, focus, 320px reflow, 200% zoom, the jurisdiction table, and multilingual names.
Inspect screenshots — do not rely only on automated assertions.

## 14. Final review

Confirm review status, review dates, safety review for safety-sensitive modules, and that the
sitemap and output verifier agree.

## 15. Re-review schedule

Record `factsVerifiedOn`. Any scheduled change with a future effective date will force a
re-review when it lands; beyond that, revisit when a cited law is known to have changed.
