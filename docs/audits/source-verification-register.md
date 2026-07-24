# Source verification register

**Audit date:** 2026-07-24
**Audited base commit:** `e7905dff8dc3875e203f1f8d398ce928a4daaeec` (merge of PR #1 into `main`)
**Registry audited:** `src/content/sources.ts` — 14 records
**Method:** every record read in full; every URL requested live with `curl -L` using a browser
User-Agent, following redirects, 25 s timeout; publisher, type, and date fields checked against
the resolved document; every citing entity located with `grep` across `src/content/` and the
claim it supports compared against the source's scope.

## Summary

| Outcome                                                         | Count |
| --------------------------------------------------------------- | ----- |
| Verified — URL resolves, attribution correct, used within scope | 13    |
| Corrected                                                       | 1     |
| Narrowed                                                        | 0     |
| Removed                                                         | 0     |
| Unresolved                                                      | 0     |

**All 14 URLs returned HTTP 200 on 2026-07-24.** All 14 carry a `verifiedOn` date, which the
test suite already enforces for any record with a URL (`tests/content/references.test.ts`). No
fabricated title, publisher, or URL was found. No source was constructed by URL pattern.

The one correction is a **framing** correction on the citing side, not a defect in the source
record itself — see `iccpr` below.

## Register

| ID                          | Title                                                                                 | Issuing body                                                                                       | Type                       | HTTP | Scope supported                                                                                                                  | Limitations                                                                                                                                                                                                | Action                    | Verified   |
| --------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------- |
| `udhr`                      | Universal Declaration of Human Rights                                                 | United Nations                                                                                     | international-organization | 200  | Declared equality before the law, effective remedy, fair and public hearing, presumption of innocence. Adopted 10 December 1948. | A declaration, **not** a binding treaty. Cannot support any claim that a state is legally obliged to do something. The timeline entry states this explicitly.                                              | Verified                  | 2026-07-24 |
| `iccpr`                     | International Covenant on Civil and Political Rights (UNTS vol. 999, I-14668)         | United Nations                                                                                     | international-organization | 200  | Article 14 fair-trial guarantees as treaty obligations for ratifying states.                                                     | Binds **ratifying states only**; says nothing about implementation in any particular state. The UNTS volume records the _opening for signature_ (19 Dec 1966), not the adoption date (16 Dec 1966).        | **Corrected** — see below | 2026-07-24 |
| `un-rule-of-law`            | What is the Rule of Law?                                                              | United Nations (Rule of Law Unit)                                                                  | international-organization | 200  | The UN's own working definition of the rule of law.                                                                              | An institutional definition, not a universally agreed one. Must be attributed to the UN, never presented as the definition.                                                                                | Verified                  | 2026-07-24 |
| `un-prosecutors-guidelines` | Guidelines on the Role of Prosecutors (1990)                                          | United Nations — adopted by the Eighth UN Congress on the Prevention of Crime                      | international-organization | 200  | Standards for prosecutorial role, independence, and duties.                                                                      | Non-binding guidelines. Not evidence that any state follows them.                                                                                                                                          | Verified                  | 2026-07-24 |
| `mandela-rules`             | UN Standard Minimum Rules for the Treatment of Prisoners (Nelson Mandela Rules, 2015) | UNODC                                                                                              | international-organization | 200  | International minimum standards for treatment of prisoners.                                                                      | Standards, not law. UNODC is the publishing/hosting body; the rules were adopted by the General Assembly. Publisher field names UNODC, which is accurate for the document as published.                    | Verified                  | 2026-07-24 |
| `rome-statute`              | Rome Statute of the International Criminal Court (1998)                               | United Nations (Office of Legal Affairs)                                                           | international-organization | 200  | Establishment of the ICC; complementarity to national jurisdictions.                                                             | Applies to States Parties. Complementarity claim is in the Statute itself and is correctly stated.                                                                                                         | Verified                  | 2026-07-24 |
| `met-police-act-1829`       | Metropolitan Police Act 1829, as enacted                                              | legislation.gov.uk (The National Archives)                                                         | legislation                | 200  | The statutory creation of a salaried police force for the Metropolitan area.                                                     | Applies to the named area **only**. Cannot support any claim about "the first modern police force" — the timeline entry explicitly refuses that framing.                                                   | Verified                  | 2026-07-24 |
| `magna-carta-1297`          | Magna Carta (1297 confirmation), contents                                             | legislation.gov.uk (The National Archives)                                                         | legislation                | 200  | That specific clauses of the 1297 confirmation remain on the statute book.                                                       | The **1297** text, not the 1215 text. The two must not be conflated.                                                                                                                                       | Verified                  | 2026-07-24 |
| `tna-magna-carta`           | Magna Carta educational resource                                                      | The National Archives (UK)                                                                         | archive                    | 200  | Historical context and provenance of Magna Carta.                                                                                | Educational material, not primary text. Secondary to the legislation record.                                                                                                                               | Verified                  | 2026-07-24 |
| `loc-magna-carta`           | Magna Carta: Muse and Mentor (exhibition)                                             | Library of Congress (US)                                                                           | archive                    | 200  | Reception and later influence of Magna Carta.                                                                                    | An exhibition, interpretive by nature. Supports influence, not legal content.                                                                                                                              | Verified                  | 2026-07-24 |
| `nas-forensic-2009`         | Strengthening Forensic Science in the United States: A Path Forward (2009)            | National Research Council (National Academy of Sciences); hosted by the Office of Justice Programs | academic                   | 200  | Documented limits, variability, and quality-assurance gaps in forensic disciplines.                                              | **United States, 2009.** Does not describe forensic science elsewhere, and does not describe the position after 2009. The OJP page is a catalogue record with the full report linked, not the report body. | Verified                  | 2026-07-24 |
| `nist-forensic-science`     | Forensic Science (topic hub)                                                          | NIST (US)                                                                                          | government                 | 200  | That measurement science and standards work applies to forensic disciplines.                                                     | A topic landing page, not a study. Weak as a citation for any specific finding; used only for general framing.                                                                                             | Verified                  | 2026-07-24 |
| `enfsi`                     | European Network of Forensic Science Institutes                                       | ENFSI                                                                                              | institutional              | 200  | ENFSI's own account of its role in European forensic quality assurance.                                                          | **Institutional self-description.** Must be attributed as such wherever cited.                                                                                                                             | Verified                  | 2026-07-24 |
| `unodc-cpcj`                | Justice and Prison Reform                                                             | UNODC                                                                                              | international-organization | 200  | UNODC's programme framing for criminal justice and prison reform.                                                                | A programme landing page. Supports framing, not statistics.                                                                                                                                                | Verified                  | 2026-07-24 |

## Corrections applied

### `iccpr` — manufactured date uncertainty on the citing entity

**Where:** `src/content/timeline.ts`, entry `iccpr-1966`.

**Before:**

> `displayDate: '1966'`
> `uncertainty: 'Sources differ on whether to give the adoption date as 16 or 19 December 1966. We give the year only rather than pick between them.'`

**Problem.** The two dates are not a disagreement between sources. They mark **different
events**: the Covenant was adopted by General Assembly resolution 2200A (XXI) on
**16 December 1966**, and was **opened for signature on 19 December 1966** — the latter being
the date recorded in the UN Treaty Series volume that this entry actually cites. Presenting a
well-established adoption date as contested is a fabricated uncertainty. It is the mirror image
of a fabricated fact: it degrades a checkable claim into a hedge, and it does so on a page whose
purpose is dated, sourced accuracy.

**After:** `displayDate: '16 December 1966'`, with the uncertainty note rewritten to explain
that the two dates mark distinct steps and to state which one the cited UNTS volume records.

**Residual limitation.** The cited UNTS volume evidences the opening for signature, not the
adoption. The adoption date rests on GA resolution 2200A (XXI), which is **not currently a
record in the registry**. The entry is now accurate and self-explaining, but a first-tier
citation for the adoption date should be added when the timeline is next extended. Logged as an
open item rather than closed silently.

## Citation UX findings

Checked against rendered output in `out/`, not source:

- Source entries render title, publisher, type label, and date. A reader can distinguish all
  four. **Sound.**
- External source links carry `rel="noopener"` and do **not** set `target="_blank"`, so no link
  opens a new tab without protection, and no link changes context without warning. **Sound.**
- **Fixed during this audit:** the glossary claimed "_N_ terms, each linked to the sources that
  support it" while rendering no per-term source at all — only a single generic link to
  `/sources` — and hardcoded a `Fact-checked` badge onto every entry regardless of the term's
  actual `review` value. Both are now derived from the term record: each entry lists its own
  sources with publisher, and the badge reflects real review state. The claim is now true.
- **Fixed during this audit:** 28 paragraph-level citations existed in the guides but were
  never validated. All 28 resolve and all 28 already appear in their guide's rendered source
  list, so nothing was hidden from readers — but nothing enforced that. Two invariants now do
  (`tests/content/references.test.ts`), guarded by a third test that fails if the citation set
  ever becomes empty and makes the other two vacuous.

## Link rot

No automated re-verification exists. All 14 URLs were confirmed manually on 2026-07-24 and
`verifiedOn` reflects that. Re-verification is a scheduled editorial task, not an automated
check — recorded as an accepted limitation in the main audit report rather than presented as a
solved problem.
