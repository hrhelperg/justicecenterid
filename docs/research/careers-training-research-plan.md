# Careers and training — research plan and architecture decision

Wave 24. Written before content, and the architecture question is settled here on evidence rather
than on search intent.

## 1. The architecture decision (Part B)

### Decision

**Reuse `/professions`. Do not create `/careers`.**

Career content is split by _what kind of question it answers_:

| Layer                                          | Route family              | Owns                                                                                                                                                     |
| ---------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Profession identity **and** career orientation | `/professions/[slug]`     | One role: what it is, what it does, what it is like, how people enter it, where it leads                                                                 |
| Comparative educational questions              | `/law-enforcement/[slug]` | Questions that are **not about one role** — academies, training models, the degree question, ranks against roles, skills, working life, civilian careers |

### Why not `/careers`

Four reasons, in order of weight.

1. **It would cannibalise `/professions` by construction.** `/careers/detective` and
   `/professions/detective` answer the same question. Part AE forbids exactly this, and Part B
   says not to create the family "merely because careers has commercial search intent".
2. **`/professions` already carries the canonical records**, with `relatedInstitutions`,
   `relatedProfessions`, `countryExamples` and a publication gate. A parallel family would either
   duplicate that graph or fragment it.
3. **The corpus is organised by function, not by audience.** Every one of the nine sections is a
   bare function noun. `/careers` is an audience label, and would be the first route family in the
   corpus named after who is reading rather than what is being described.
4. **The gap the baseline found is depth, not location.** Eight career terms are at zero. Nothing
   about that gap implies a new route family; it implies the existing records were never asked to
   do career orientation.

### Why the second layer is not also on `/professions`

"What is a police academy?" is not about a profession. Neither is "do police officers need a
degree", "how do police ranks work", or "what civilian careers exist in police organisations".
Forcing them onto a profession record would make `/professions/patrol-officer` the owner of every
comparative training question in the corpus, which is precisely the "unwieldy" outcome Part B asks
to be tested for. They are comparative educational guides, and the corpus already has a place for
those: the section hub they belong to.

`/law-enforcement` is chosen over `/public-safety` because these are questions about police
organisations specifically, and over `/justice` because that section carries rights and
rule-of-law material.

### Consequence for the schema

The `Profession` record gains structural career fields. It does **not** gain country-specific entry
requirements, because `src/content/professions.ts` records a deliberate prior decision against
exactly that, on the ground that such requirements are "country-specific, time-sensitive, and the
most common site of fabrication". Part V independently asks for the same conservatism.

## 2. The procedural-law stop rule (Part G)

This wave does not expand procedural depth. Where research met procedural material, it was used
only as the minimum context needed to explain a role, and otherwise classified **OUT OF PRODUCT
SCOPE** in `careers-candidate-matrix.md`.

The rule is enforced mechanically, not only editorially: a **procedural-depth guard** (Part AJ)
tests that a career page has not become substantially about filing, deadlines, motions, warrants,
evidentiary objections or interrogation procedure. It is proportion-aware rather than
keyword-based, so a legitimate sentence such as "a detective may prepare material used by
prosecutors and courts" does not trip it. The design is documented in
`careers-model-findings.md`.

## 3. Jurisdictions researched, and why five

Part E lists fifteen candidate systems and says not to force all of them into every guide. Five
were researched to Tier 1 content-confirmed evidence, chosen because they instantiate _structurally
different_ models rather than because they are the largest:

| System           | Model it demonstrates                                               |
| ---------------- | ------------------------------------------------------------------- |
| England & Wales  | Multiple parallel entry routes, degree as an **output** of training |
| Ireland          | Single national training programme, secondary-level entry           |
| Germany (Berlin) | Two separate career tracks entered at different education levels    |
| Netherlands      | Occupational entry: you can enter _as a detective_                  |
| United States    | Decentralised academies with no single national programme           |

Five models, five different answers to "how do you become a police officer". That is the comparative
spine of the wave.

Jurisdictions **NOT RESEARCHED** for this wave: France, Czechia, Poland, Spain, Canada, Australia,
New Zealand, Japan, South Africa, Brazil. France was attempted and is recorded as an access failure
in `careers-source-register.md`; the rest were not attempted. No claim about any of them appears in
the wave.

## 4. Source standard applied (Part F)

Tier 1 only for career facts: official police recruitment sites, official police academies, and a
national statistical agency. Every URL was **content-confirmed** — fetched and read — and no URL was
guessed. Where a site blocked automated access, the failure is recorded and the fact is not
asserted from a search-engine summary.

## 5. Salary (Part AA)

**No salary content is published in this wave.** Pay figures were encountered in official
recruitment material during research and are deliberately not used. `compensation` is a restricted
claim category with an active lexical tripwire, and Part AA asks for salary architecture to be
deferred to a dedicated employment-data layer. A test asserts the absence.

## 6. Images (Part AC)

**No images are added.** No career page in this wave depends on an image to make its point, and the
licence-verification cost is not justified by the editorial benefit. Recorded rather than skipped
silently.

## 7. Structured data (Part Z)

Evaluated and **declined for this wave**. See `careers-model-findings.md` §9 — Schema.org
`Occupation` carries `estimatedSalary`, `occupationalCategory` and `experienceRequirements`, and its
semantics describe an occupation _in a labour market_. These pages describe a role across several
legal systems and deliberately publish no salary. Emitting the type without those properties would
assert a labour-market frame the pages do not support.
