# France pilot — model findings

The point of the France pilot was not to publish France. It was to run a real jurisdiction
through the content model and find out where the model is wrong.

It found seven things. Five forced a change. Two are recorded as accepted limitations.

Each entry follows the required form: the real-world fact, the source, the model limitation it
exposed, the smallest adequate correction, the effect on future countries, and the migration
impact.

---

## F1 — A geographic subdivision is not a legal jurisdiction

**Real-world fact.** France has régions, départements and communes as territorial
collectivities named in Article 72 of the Constitution. None of them is a level of the court
system. The judicial map is drawn in its own ressorts and does not follow the administrative
map. One criminal court is even called the _cour criminelle départementale_ without the
department constituting or administering it.

**Source.** `fr-constitution-1958` (Article 72); `fr-justice-courts`.

**Model limitation.** The pre-pilot model had `CountryProfile` and nothing between a country
and an institution. Any sub-national modelling would have had to represent a département as
either "a jurisdiction" or "not a jurisdiction", and both are wrong: it is a real jurisdiction
for administrative competences and not one for courts.

**Correction.** `FunctionScope` — `own` · `national` · `shared` · `delegated` · `none` ·
`unknown` — recorded separately for legal system, policing, courts, prosecution and
corrections on every `JurisdictionRecord`.

**Effect on future countries.** This is the field that makes federal systems expressible
without a second model. A US state is `own` for courts, prosecution and corrections; a French
département is `national` for all three. The same schema states both accurately.

**Migration impact.** None. New type, new registry, no existing record changed.

---

## F2 — One body can exercise two tiers at once

**Real-world fact.** Martinique and Guyane are _collectivités territoriales uniques_: a single
collectivity exercising the competences of both a department and a region, created under the
last paragraph of Article 73 and referenced directly by Article 72-3.

**Source.** `fr-constitution-1958` (Articles 72-3, 73).

**Model limitation.** `level` is a single value. Recording Martinique as `department` or as
`region` would each have been factually wrong, and inventing a `department-region` level would
have started an unbounded proliferation of hyphenated levels.

**Correction.** Optional `alsoExercisesLevels: JurisdictionLevel[]`, validated so it cannot
repeat the record's own level.

**Effect on future countries.** Directly reusable — German city-states and several unitary
authorities have the same shape.

**Migration impact.** None; optional field.

---

## F3 — "In force" and "permanent" are different things

**Real-world fact.** Légifrance records Article 12 of the Code de procédure pénale as in force
since 1958 **and** as scheduled for repeal by Ordonnance n° 2025-1091 of 19 November 2025 with
effect from **1 January 2029**. Article L511-1 of the Code de la sécurité intérieure carries the
same 2029 end date. This is not an edge case: it is a recodification affecting a large body of
current French law.

**Source.** `fr-cpp-art-12`, `fr-csi-l511-1` (both content-confirmed on Légifrance).

**Model limitation.** `TemporalScope` offers `current` · `historical` · `mixed`. A provision in
force today with a known future repeal date is `current` under that vocabulary, and the model
had nowhere to put the repeal date. A page written today and re-reviewed in 2030 would have
looked correct and been wrong.

**Correction — partial, deliberately.** The scheduled change is recorded in the source record's
`note` and surfaced to the reader in an `uncertainty` callout on each affected page. A
structured `scheduledChangeOn` field was **not** added.

**Why not.** One country produced this pattern. Adding a dated-supersession field to the schema
on a single country's evidence risks designing for France rather than for the model. The
correct trigger is a second country showing the same need; at that point the field should carry
the date, the instrument that makes the change, and the affected provision.

**Effect on future countries.** Flagged as the highest-priority schema question for country
two. If Germany or the UK shows the same pattern, add the field.

**Migration impact.** None yet. When added, existing records default to no scheduled change.

---

## F4 — HTTP status is not verification, in either direction

**Real-world fact.** `legifrance.gouv.fr` and `interieur.gouv.fr` return **HTTP 403** to an
automated request while serving the documents normally to a browser. WebFetch retrieved the
full authentic text of Article 12 CPP from a URL that `curl` rejected.

**Source.** Direct observation, 2026-07-24, recorded in
[france-source-register.md](./france-source-register.md).

**Model limitation.** The previous audit's source register recorded "HTTP 200" as the
verification result for all fourteen sources. That method, applied to France, would have
rejected the single most authoritative source of French law available. The known rule was
"200 does not mean verified"; the inverse — "403 does not mean unavailable" — was not modelled
at all.

**Correction.** `SourceRecord.verificationMethod: 'content-confirmed' | 'status-probe' |
'offline'`, and a test requiring every French source to be `content-confirmed`.

**Effect on future countries.** Substantial. Official legal databases in many countries are
bot-walled. Any future automated link-rot check must treat a non-200 from a known-good host as
"needs human re-check", never as "dead source".

**Migration impact.** Optional field; the fourteen pre-existing sources are unchanged and
remain accurate, since they were genuinely confirmed by content in the audit.

---

## F5 — An unresearched territory must not inherit its parent's arrangement

**Real-world fact.** France has ten named overseas territories under two different
constitutional regimes plus New Caledonia under its own title of the Constitution. Their
institutional arrangements follow their individual statutes and were not researched here.

**Source.** `fr-constitution-1958` (Articles 72-3, 73, 74, Title XIII).

**Model limitation.** With scopes defaulting to anything other than `unknown`, an overseas
collectivity would silently have appeared to share the metropolitan arrangement simply because
it is part of the same Republic. That is the single most dangerous failure mode available to a
country model: confident wrongness produced by inheritance.

**Correction.** A coverage ceiling on jurisdictions, mirroring the existing country rule: a
record at coverage `none` or `planned` must record **every** functional scope as `unknown`, and
`unknown` is never a synonym for `none`. All eleven French overseas records sit at
`in-research` — their constitutional basis is sourced, their institutional detail is not — and
carry `unknown` for courts, prosecution and corrections. The hub renders this in a table with
the distinction spelled out.

**Effect on future countries.** Directly reusable for any country with dependent territories,
autonomous regions, or asymmetric devolution.

**Migration impact.** None.

---

## F6 — Registry-derived validation was already necessary, not merely tidier

**Real-world fact.** France produced 7 routes from 1 dossier. Twelve modules across ~200
countries is ~2,400 potential routes.

**Model limitation.** `verify-output.mjs` re-derived routes by regex-parsing TypeScript. The
prior audit judged this acceptable because a bidirectional check caught drift. That judgement
does not survive generated routes: the regex would have had to model a nested
country × module structure, and a parse matching fewer records checks fewer routes while still
reporting success.

**Correction.** `src/content/public-routes.ts` as a machine-readable registry boundary,
imported directly by the verifier under Node's native type stripping.

**Effect on future countries.** Removes the scaling blocker identified as precondition A3.

**Migration impact.** `src/lib/routes.ts` now derives from the same array; route titles are
preserved through an override map.

---

## F7 — Lexical claim-guards cannot distinguish use from mention

**Real-world fact.** The France prosecution module contains the sentence "Any page asserting
either that French prosecutors are wholly independent of government, or that ministers direct
them in individual cases, would be stating a conclusion the sources cited here do not support."
An earlier draft used the phrase "politically controlled" in that same construction — saying we
would _not_ make the claim — and the restricted-claim guard flagged it.

**Source.** Test output, `tests/content/restricted-claims.test.ts`.

**Model limitation.** The lexical layer matches strings. It cannot tell an assertion from a
discussion of that assertion, and it never will.

**Correction — none to the model.** The prose was rephrased. Weakening the guard to allow
negated or quoted contexts would have opened the exact evasion it exists to close, and the
false-positive cost is one rewritten sentence.

**Effect on future countries.** Expect occasional false positives on pages that discuss
contested claims — which is most oversight and prosecution modules. The guard is a tripwire,
not the control; editorial review remains the control.

**Migration impact.** None. Documented as an accepted limitation in
`src/content/restricted-claims.ts`.

---

## Was the research deep enough to trust these findings?

The brief asks that if France forced no model changes, we should ask whether the research was
too shallow. It forced five, so the inverse question applies: are they real, or artefacts of a
thin pass?

Evidence they are real: F1, F2 and F5 all come from the text of the Constitution itself and
would have surfaced for any researcher reading Articles 72–74. F3 and F4 were discovered by
attempting the work rather than by reading about it — the 2029 repeal date is visible only on
the Légifrance record for each provision, and the 403 behaviour only when a script actually
requests the page.

Evidence of remaining shallowness, stated plainly: six of twelve modules are unpublished, and
the two richest sources of model stress are almost certainly among them. Corrections would have
exercised the restricted-claim schema against real statistics, which nothing in this pilot did
— every restricted claim in the codebase today is a test fixture, not published content. The
first country whose pages carry real figures will test A4 far harder than France did.
