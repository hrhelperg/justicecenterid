# Wave 14 QA record — access to justice and legal institutions

Branch `feat/knowledge-expansion-waves-12-15`. Written 2026-08-26. No push during this wave.

## 1. What shipped

Seven guides across three existing sections and one profession record. Five new sources
(263 → 268) and four extended constitutional notes. No new section, no new institution record.

Route counts: **418 routes / 420 exported pages / 418 sitemap entries** (Wave 13 closed at
410/412/410). `npm run verify:output` reports the export matches the route registry.

Suite: **4120 → 4405 tests, 66 files**, all passing. Typecheck, lint and format clean.

| Route                                       | Section     |
| ------------------------------------------- | ----------- |
| `/courts/court-language-and-interpretation` | courts      |
| `/courts/taking-part-in-your-own-case`      | courts      |
| `/courts/the-cost-of-going-to-court`        | courts      |
| `/courts/who-runs-the-courts`               | courts      |
| `/defence/who-may-act-as-a-lawyer`          | defence     |
| `/defence/representing-yourself`            | defence     |
| `/justice/victims-in-the-justice-process`   | justice     |
| `/professions/defence-lawyer`               | professions |

## 2. The finding that reshaped the wave

Most of the brief's candidate list already exists. `/justice/access-to-justice` and
`/justice/effective-remedy` were built in Wave 12; `/defence/right-to-counsel` and
`/defence/how-defence-is-funded` in Wave 11. The funding page already asks, in terms, "What is
the difference between legal aid, a public defender and court-appointed counsel?" and answers it
across three systems — so brief sections **23 (public defender taxonomy)** and **24 (legal aid
distinctions)** describe work that is already done. Wave 12's access page already states the
access ≠ outcome distinction the brief's section 26 asks for.

Wave 14 therefore **preserves and tests** those rather than restating them, and spends its
routes on the mechanics of access, which nothing in the corpus covered: the language of
proceedings, participation, cost, court administration, who may act as a lawyer, whether a
person may act without one, and where victims stand.

Full reasoning in `docs/research/wave-14-access-to-justice-plan.md`.

## 3. Findings

**F1 — which way the language accommodation runs.** South Africa's s 35(3)(k) gives the right
to be _tried in_ a language the accused understands, with interpretation only _if that is not
practicable_. Germany's GVG § 184 fixes the court language absolutely — "Die Gerichtssprache ist
deutsch" — with one named exception, the Sorbian guarantee, and translates the person into the
proceedings through § 187. Canada's Charter s. 14 covers _a party or witness in any proceedings_
and names deafness in the same clause. Kenya's Art. 50(2)(m) gives an interpreter _without
payment_. Reporting all four as "the right to an interpreter" would erase the difference.

**F2 — one access mechanism changes another.** GVG § 187(2) allows an oral translation or
summary to replace the written translation of indictments, custodial orders, penal orders and
non-final judgments where procedural rights are preserved — which is _as a rule to be assumed
where the accused has defence counsel_. Having a lawyer alters what the court must translate.
Recorded on the participation page, and the co-location of the condition with the rule is now
pinned by test.

**F3 — Kenya constitutionalises court fees.** Article 48: "The State shall ensure access to
justice for all persons and, if any fee is required, it shall be reasonable and shall not impede
access to justice." The conditional matters — it does not abolish fees, and the same constitution
gives a right to a copy of the record "in return for a reasonable fee as prescribed by law".

**F4 — what Brazil makes free is not random.** Article 5º LXXVII makes habeas corpus and habeas
data free unconditionally, while Article 5º LXXVI makes birth registration and death
certificates free only for the recognisedly poor. The unconditional gratuities are the two
remedies a person brings against public power. Lei 8.906 Art. 1 § 1 goes further and excludes
the habeas corpus petition from the activities exclusive to advocacia — so the one thing anyone
may do without a lawyer is challenge a detention.

**F5 — no bar-association institution record, and the reason is structural.** Germany and Brazil
vest admission and discipline in a professional body; England and Wales reserves six _activities_
and determines entitlement by authorisation or exemption, without constituting lawyers as a
status at all. There is no third member of the family to describe. This is the **seventh
consecutive wave** in which the recurring thing is a function whose institutional embodiments
differ in kind. `/institutions/legal-aid-authority` and `/institutions/public-defender-institution`
are also not created, on Wave 11's finding that France has a funding scheme with no defence
institution and Germany an appointment scheme that is neither.

**F6 — advice is not a reserved activity in England and Wales.** Giving legal advice is not
among the six reserved legal activities in LSA 2007 s. 12(1), though exercising a right of
audience and conducting litigation are. Brazil places legal consultancy among its exclusive
activities. A reader who assumed reservation tracks "legal work" would have it backwards.

## 4. The `/professions/defence-lawyer` evidence gate

The brief required this be researched properly and routed only if the evidence supports it, and
explicitly forbade publishing it merely because it had previously been wanted. Assessed field by
field: `purpose`, `institutionalContext`, `ethicsNote`, `responsibilities`, `decisionAuthority`,
`constraints` and `oversight` are all carried by primary text — BRAO §§ 1, 3, 43a, 60; CF Art.
133 with Lei 8.906 Arts. 2, 3, 44, 45; and the Wave 11 StPO sources.

`trainingRouteShape` was **not** carried. No qualification-route source was obtained for any
system. The schema requires this field to be structural rather than country-specific, so the
record describes the shape — a qualification, a period of supervised preparation, admission by
the body that will hold the disciplinary jurisdiction — and the uncertainty block states that
qualification routes were not researched. A test asserts the field names no country, no duration
and no examination, and mutation W14-M6 proves it.

**Verdict: routed.** The gate was applied, not assumed.

## 5. Defects found and fixed during the wave

**D1 — a dropped separator.** "Rechtsanwaltnone of these is a translation" shipped into the
terminology callout when an em dash was lost. Caught on read-back before commit.

**D2 — an unsourced global page.** `reference-routes.test.ts` rejected the defence-lawyer record
for citing only DE, BR and GB sources: a global reference page may not rest solely on
country-scoped ones. The ICCPR was added, and the record's `purpose` now states what it declares
— and states that it is a declared standard rather than the law of any state.

**D3 — a statutory sentence quoted mid-sentence in lowercase.** GVG § 184 is a four-word
sentence and was rendered as an embedded clause. Now quoted as the statute writes it.

**D4 — a Wave 11 test asserting this wave's work must not exist.** `wave11-defence.test.ts`
asserted that `/professions/defence-lawyer` is not routed, which was correct when written and
recorded that the gap was deliberate. It is narrowed rather than deleted: `defence-lawyer` comes
off the list because Wave 14 obtained the evidence, every institution slug stays on it,
`bar-association` is **added** to it, and a new test requires that if the route exists it cites
the three sources that earned it. The reasoning is recorded in the test file, not only here.

## 6. Test-design findings

**T1 — `deniesClaim` is wrong for directives.** The Wave 12 helper asks whether a negation
survives outside the matched span, which is right for a factual assertion and wrong for advice.
"If you cannot afford a lawyer you should apply for legal aid" is advice; the incidental
"cannot" has nothing to do with the directive, and `deniesClaim` cleared it. The live-catch test
failed on exactly that, which is what the live-catch tests are for. Advice and evasion tripwires
now use `deniesDirective`, which examines only the text _before_ the match, because a directive
is neutralised only by a negation that governs it. A companion test confirms that a page saying
"this page does not tell you how to apply" is still cleared.

**T2 — presence-anywhere is not a guard.** Two mutations survived the first pass, and both
attacked tests asserting a string appeared somewhere on a page. "Sorb" and "where the accused
has defence counsel" each appear twice — once where the rule is stated, once in a misconception
restating it — so deleting the statement of the rule left the incidental occurrence and the
check was satisfied. Both are now **co-location** assertions on a single block: the block
stating "Die Gerichtssprache ist deutsch" must itself carry the Sorbian exception, and the block
stating the oral-translation substitution must itself carry the counsel condition. This is the
same conclusion Wave 13 reached about attributing statutory quantities, arrived at from a
different direction.

## 7. Mutation proofs

Twelve, under the programme's validity rule: anchor asserted unique before patching, file hash
must change, `git diff --stat` non-empty, `npm run typecheck` must still pass, test exit status
read directly and never masked, tree reverted and re-verified clean.

| ID      | Guard attacked                                | First pass       | After fix        |
| ------- | --------------------------------------------- | ---------------- | ---------------- |
| W14-M1  | titles are not translations of one another    | failed correctly | —                |
| W14-M2  | public defenders not universalised            | failed correctly | —                |
| W14-M3  | access is not outcome                         | failed correctly | —                |
| W14-M4  | no personalised advice                        | failed correctly | —                |
| W14-M5  | no procedural evasion                         | failed correctly | —                |
| W14-M6  | training route stays structural               | failed correctly | —                |
| W14-M7  | record rests on the evidence that earned it   | failed correctly | —                |
| W14-M8  | country claims are country-sourced            | failed correctly | —                |
| W14-M9  | the Sorbian exception is not dropped          | **PASSED**       | failed correctly |
| W14-M10 | no bar-association institution route          | failed correctly | —                |
| W14-M11 | Wave 12's access-is-not-outcome preserved     | failed correctly | —                |
| W14-M12 | the counsel-translation condition is recorded | **PASSED**       | failed correctly |

**12/12 valid after the fix.** Two survived the first pass and both exposed real weaknesses in
the suite rather than in the content; the content was not changed to accommodate either.

## 8. What was not done, and why

- **Equality of arms** remains deferred. The ECHR still could not be read from an authoritative
  source and nothing is quoted from it. Wave 12's `/justice/equality-before-the-law` covers the
  underlying constitutional provisions.
- **Mediation and alternative dispute resolution.** The only primary text obtained is Kenya Art.
  159(2), which Wave 12 already cites, and LSA s. 12(4) excluding mediation from "legal activity"
  — a definitional exclusion, not a description. Not enough for a page.
- **France's bar.** legifrance.gouv.fr returned HTTP 403 on the loi of 31 December 1971. An
  access limitation, never evidence against a source; nothing is claimed about French
  arrangements, and the limitation is recorded in the profession record's uncertainty block.
- **Fee amounts.** No fee schedule was obtained anywhere and none is quoted. A test asserts no
  currency figure appears on any Wave 14 page.
- **Victim support services, compensation and protection.** Only standing in the proceedings is
  described. The gap is stated on the page.
