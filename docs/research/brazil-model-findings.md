# Brazil pilot — model findings

Brazil forced **no new schema** — no field, no level, no enum value — and that is the headline
finding. It is the most institutionally complex country on the platform (six constitutional
police forces, an autonomous Ministério Público, a five-branch judiciary, a sui-generis Federal
District), and the model absorbed all of it by **reusing** machinery the five earlier pilots
built. Because the brief warns that a pilot which changes nothing must be checked for
shallowness rather than maturity, most of this document is the examination that confirms it is
maturity — including two genuinely hard questions that were argued on both sides before being
answered in prose.

---

## BR1 — Federal law, decentralised administration: already expressible

**Fact.** Penal and procedural law are the **exclusive** competence of the Union (CF Art. 22, I),
so there is one criminal law for the whole country; but the police, courts, prosecution and
prisons are run at both the federal and the state level, and penitentiary law is a **concurrent**
competence (Art. 24, I).

**Change.** None. This is the Germany finding — administration and legislation are separate
questions — reused and sharpened. The federal record `br` carries every institutional function
as `shared`; each state carries them as `own`; and the divergence between administering a
function and legislating on it is recorded with `legislativeCompetence`, exactly as Germany did.

**The one sharp value.** `legislativeCompetence['legal-system'] = 'exclusive-federal'` on the
state records is the decisive, verified point: a Brazilian state administers justice but does not
write the criminal law, the **inverse of a United States state** (whose `legalSystemScope` is
`shared` because it writes its own code). This is why the Brazilian state records carry
`legalSystemScope: 'national'` — the same value Japan's prefectures carry, for the same reason.

---

## BR2 — Function-split state policing: institutional, so prose (A-question a)

**Fact.** A single state runs two constitutionally distinct police forces: the investigative
Polícia Civil (polícia judiciária, directed by career delegados — Art. 144 §4) and the preventive
Polícia Militar (polícia ostensiva and public order — Art. 144 §5), both under the Governor (§6).

**Considered change.** A typed Force/PoliceBody record with tier and function enums — the
approach an independent research critic recommended, so that a state could own two force rows.

**Decision: no change; prose.** This is the United States finding (US3/US4). The jurisdiction
model records **which tier administers** a function, not the internal composition of that tier's
institutions. `policingScope: 'own'` correctly says the state administers its own policing; that
the policing is carried out by two forces with divided functions is institutional composition —
exactly what the US pilot described in prose for its 17,541 agencies, and what it explicitly
declined to turn into typed records until a cross-country **comparison** need earns them. A
country pilot describes; it does not need the typed registry. Encoding a "force" structure now,
for one country, would be the opposite of the smallest honest change.

**Guard.** The law-enforcement module names all six Art. 144 forces and the two-force state
split in prose, states that the federal forces do not command the state forces, and the Brazil
test asserts both; the jurisdiction test asserts `policingScope: 'own'` with no invented force
field.

---

## BR3 — The Ministério Público: autonomous, so prose (A-question b)

**Fact.** The Ministério Público is a permanent institution independent of all three branches
(Art. 127), both the exclusive holder of the public criminal action and the guardian of the
legal order (Art. 129), structured as the MPU (with four ramos) plus the state MPs (Art. 128),
and overseen by the CNMP (Art. 130-A).

**Considered change.** Promote it to a first-class institution entity (peer to the three
branches) with a multi-valued functions set — again the critic's recommendation.

**Decision: no change; prose.** The model's `prosecutionScope` records who administers
prosecution: `shared` at the federal level (MPU + state MPs), `own` at the state level. The MP's
autonomous, guardian-of-the-legal-order character is institutional and is described in the
prosecution module — as Ireland's DPP independence was prose, and as the US pilot held that
typed institution records are earned by a cross-country comparison need, not by a single pilot.
The prosecution page states plainly that the Ministério Público is not a prosecutor's office,
that it is independent of all three branches, and that its remit exceeds criminal charging — so
nothing is understated by keeping it in prose.

---

## BR4 — The sui-generis Federal District: reuses `alsoExercisesLevels`

**Fact.** The Federal District cannot be divided into municipalities and accumulates the
legislative competences reserved to both the states and the municipalities (Art. 32 §1); its
police, courts and Ministério Público are organised and maintained by the Union (Art. 21,
XIII–XIV) while the police answer to the DF Governor (Art. 144 §6).

**Change.** None. The DF record uses `alsoExercisesLevels: ['state', 'municipality']` — the
field France added for the _collectivités territoriales uniques_ of Martinique and Guyane — to
record that one unit exercises two tiers' competences. The Union's organisation of its
institutions is recorded by making policing, courts and prosecution `shared` (between the DF and
the Union) rather than `own`. Both are reuse, not invention.

---

## BR5 — The restricted claim: a real, scoped statistic (published)

Unlike Japan (deferred), Brazil publishes one restricted claim, because the official SISDEPEN
report states a single-day total for a precisely defined population with its own capacity:
670,265 people in physical cells against 494,379 places (deficit 175,886) at 31 December 2024.
It carries the same discipline as the German and US claims — it aggregates 27 separately
administered systems, describes none individually, excludes the separately tabulated
home-detention population, prints no occupancy rate, and supports no cross-country comparison.

---

## Translation integrity: prose, not a field

Brazilian law is authoritative only in Portuguese, and there is no official English translation.
Because the pilot cites the **Portuguese originals** (not translations), the Japan
`translationStatus` / `authoritativeLanguage` fields are not used; the translation-integrity
point is carried in prose. No `lang` wrapping is added, because Portuguese is Latin script and
the France and Germany pages already set the precedent of carrying French and German terms
unwrapped.

---

## Was no change too little?

The shallowness check. Evidence that the restraint is maturity, not thin research:

- The pilot **verified** the hardest facts verbatim against the authoritative Planalto text
  (Art. 144's six forces and their functions, Art. 22 I / Art. 24 I competences, Arts. 127–130
  on the Ministério Público, Art. 92 / 102 / 103-B on the courts, Art. 21 XIII–XIV / Art. 32 on
  the DF, the Lei de Execução Penal and the SISDEPEN totals), and an independent adversarial pass
  re-checked 23 load-bearing claims against official sources with zero refutations.
- Brazil **reused four distinct earlier findings** rather than reinventing them — Germany's
  administration/legislation split (now with an `exclusive-federal` legal system), the US
  `authorityBasis: reserved-powers`, France's `alsoExercisesLevels`, and the US "institutions in
  prose, not typed records" rule that governed both hard questions.
- Brazil **declined** to over-model against a critic's explicit recommendation — no typed force
  registry, no first-class MP entity — because those are cross-country-comparison features a
  single country pilot does not earn.

A model that can absorb the most complex federation on the platform without a new field, while
representing its two genuinely novel institutions accurately in prose, is a mature model. That is
the finding.
