# Jurisdiction model

Implementation: `src/content/types.ts` (`JurisdictionRecord`, `JurisdictionLevel`,
`FunctionScope`) and `src/content/jurisdictions.ts` (registry + `validateJurisdiction`).

## What this model is for

To state, per territory and per institutional function, whether that territory has its own
arrangement, shares one, exercises a delegated one, sits under a national one, has none at all,
or has simply not been researched.

## What it is deliberately not

Not a geopolitical database, and not a universal ontology of political subdivision. A record
exists only where it does institutional work. There is no record for each of France's 101
departments or its 34,000+ communes.

## Levels

`international` · `supranational` · `country` · `federal` · `constituent-country` ·
`autonomous-community` · `state` · `province` · `region` · `department` · `prefecture` · `county` ·
`municipality` · `local` · `territory` · `tribal` · `special`

A flat vocabulary, sized to the systems we can foresee needing. Adding a level later is cheap.
`tribal` was added by the United States pilot (a separate sovereign, not a subdivision — see
authority basis); `prefecture` by the Japan pilot (the level at which police are administered, so
`province` would have obscured what the pilot tests); and `autonomous-community` by the Spain
pilot — a comunidad autónoma has a Statute of Autonomy, an assembly and (for some) its own police
and prisons, categorically distinct from a French administrative `region`, so filing it under
`region` would repeat the miscategorisation the Japan pilot avoided. Spain is a decentralised
UNITARY state (its Constitution, art. 145.1, forbids federation of the communities); its
asymmetric autonomy is carried entirely by divergent per-function scope values across sibling
community records — Catalonia and the Basque Country `own` police and prisons, Navarre `shared`
policing (its Policía Foral shares duties with the national forces) and `national` prisons,
Andalusia `national` throughout, while courts and prosecution stay `national` for every community
(judicial unity, art. 117.5). No `autonomyLevel` score was added; the asymmetry is a set of facts,
not a rank.

`alsoExercisesLevels` handles a body that exercises more than one tier's competences —
required by Martinique and Guyane, which are _collectivités territoriales uniques_.

## Authority basis — where power comes from, not where it sits

Added by the United States pilot. The parent link had one meaning in the France and Germany
pilots: the child derives its competences from the parent. The US breaks that, because
geographic inclusion is not legal subordination.

`authorityBasis` (optional): `delegated` (the prior default) · `reserved-powers` (US states,
Tenth Amendment) · `inherent-sovereign` (tribal nations) · `federal-plenary` (DC) · `unknown`.

The load-bearing case is `inherent-sovereign`. A tribal nation sits geographically within the
United States and usually within a state, but its sovereignty predates the Constitution and is
not derived from either. Its `parentJurisdictionId` therefore records **geographic containment
only**. Two validation rules enforce the honesty: an inherent-sovereign record must explain the
non-derivation in its notes, and it is exempt from the federal legislative-competence rule
(inherent sovereignty is not a division of the parent's legislative competence).

The field is optional; France and Germany records omit it and are unaffected.

## Function scopes

The heart of the model. Recorded separately for `legalSystemScope`, `policingScope`,
`courtScope`, `prosecutionScope` and `correctionalScope`.

| Scope        | Meaning                                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `own`        | This jurisdiction has its own distinct arrangement.                                                            |
| `national`   | The function is organised nationally; this level is not where it is decided.                                   |
| `shared`     | Shared with, or exercised jointly with, another jurisdiction.                                                  |
| `delegated`  | Exercised here under authority delegated from a parent.                                                        |
| `contracted` | Held here, but its delivery is procured from an institution of another order of government under an agreement. |
| `none`       | The function does not exist at this level at all.                                                              |
| `unknown`    | Not researched. **Never** a substitute for `none`.                                                             |

`contracted` was added by the Canada pilot for RCMP contract policing: policing is
constitutionally the province's (Constitution Act 1867 s.92(14)), but eight provinces and the
three territories procure it from the federal RCMP under a cost-shared Police Service Agreement
(RCMP Act s.20). The provider stays owned and governed by the other order; the client funds the
service but does not own the institution. It is the smallest honest fix — one enum member — and
the pilot **rejected** a typed inter-institutional relationship graph: the s.96 superior courts
(a function the province OWNS, with federally appointed judges) are the structural analogue and
are modelled with scope + prose, and a named-agency registry would break the "institution types,
not named agencies" invariant. Provider identity (RCMP, OPP, Sûreté du Québec) lives in the
module prose, not the schema. Contrast `own`: the province owns its s.96 courts (a note), but does
not own the police it contracts (`contracted`).

The Australia pilot **validated `contracted` by repetition**: the Australian Capital Territory
runs no police of its own, and the Commonwealth Australian Federal Police delivers its community
policing "on behalf of the ACT Government" under a purchase arrangement — the same shape as RCMP
contract policing, in a second, differently built federation — so the ACT is `contracted` while
the Northern Territory (its own force) is `own`. Because the enabling law differs (Canada:
holder-side agreement; Australia: the provider's Commonwealth statute), the value is defined
agnostically about which order's law creates the arrangement; the enabling instrument stays in
prose. Two independent countries now use it, which is what earns an abstraction.

The Switzerland pilot then drew the boundary of `contracted` from the other side. Swiss cantons
pool their prison systems through three inter-cantonal concordats (Constitution art. 48) — but
this is PEER pooling, cantons exercising their own competence jointly, not one order procuring a
service from another. So the concordats are `correctionalScope: 'shared'` ("exercised jointly with
another jurisdiction"), NOT `contracted`. The vocabulary now discriminates three real arrangements
without any relationship graph: a jurisdiction that owns its force (`own`), one that procures a
force from another order under agreement (`contracted`), and peers that pool a function (`shared`).
Swiss cantons are otherwise a full reuse of the reserved-powers state model (sovereign under art.
3, applying federal codes — `legalSystemScope: 'national'`), modelled at the existing `state`
level because `state` correctly categorises a federal constituent unit; no `canton` level is
minted.

The `none` / `unknown` distinction is the model's most important property. `none` is a
researched finding; `unknown` is an admission. Collapsing them would let an unresearched
territory silently inherit its parent's arrangement.

**Coordination without command (Japan pilot).** Japan is unitary, but its police are
administered prefecturally while courts, prosecution and corrections stay national. This is
recorded with scope alone: the national record (`jp`) has `policingScope: 'shared'` — the
National Police Agency coordinates and supervises on matters of national concern — while each
prefecture (`jp-tokyo`, `jp-osaka`) has `policingScope: 'own'` and `national` for the other
three functions. No "commands" relationship field was added; encoding one would assert an
operational chain of command that does not exist. Each prefecture also carries
`legislativeCompetence: { policing: 'framework' }` — police are administered prefecturally but
legislated nationally (the Police Act), the same administration-≠-legislation split the Germany
pilot recorded for courts, reused rather than reinvented.

**A unified law with decentralised institutions (Brazil pilot).** Brazil forced no new field. It
is a federation, but penal and procedural law are the _exclusive_ competence of the Union (CF
Art. 22, I), so the states administer justice without writing the criminal law. The model
records this with values it already had: the federal record `br` has every institutional
function `shared` but `legalSystemScope: 'own'` (the law is unified, not split federal/state as
in the United States, whose federal record is `shared` throughout); each state has its
institutions `own` but `legalSystemScope: 'national'` (the same value Japan's prefectures use),
with `legislativeCompetence['legal-system'] = 'exclusive-federal'`. Two institutional
peculiarities stayed in prose rather than the schema — a state running _two_ police forces (an
investigative Polícia Civil and a preventive Polícia Militar), and the Ministério Público as an
autonomous institution — following the United States rule that institutional composition is prose,
not typed records. The sui-generis Federal District reuses `alsoExercisesLevels: ['state',
'municipality']` (Art. 32 §1) and records the Union's organisation of its police, courts and
prosecution (Art. 21, XIII–XIV) as `shared` rather than `own`.

## Tier records vs unit records

France's tiers are legally uniform, so one record per tier states the arrangement accurately.
A federal system is not uniform and will need one record per unit — each US state has its own
courts, prosecution and corrections.

**The choice is a research output, not a schema property.** The model supports both without
change, and the decision must be made per country from sources, not assumed.

## Validation rules

Implemented as the pure function `validateJurisdiction(record, all)`, so invalid combinations
can be exercised with synthetic records rather than only asserted against a registry that
happens to be correct today.

| #   | Rule                                                                                     |
| --- | ---------------------------------------------------------------------------------------- |
| 1   | Slug is lowercase kebab-case; ids unique globally; slugs unique per country.             |
| 2   | `country`, `supranational` and `international` must have no parent.                      |
| 3   | Every other level must have a parent.                                                    |
| 4   | The parent must resolve, must not be the record itself, and must share its country code. |
| 5   | The parent chain must not contain a cycle.                                               |
| 6   | `temporalScope !== 'current'` requires `historicalPeriod`; `current` must not carry one. |
| 7   | `alsoExercisesLevels` must not repeat the record's own level.                            |
| 8   | Coverage `in-research`, `partial` or `established` requires at least one source.         |
| 9   | Coverage `none` or `planned` requires **every** functional scope to be `unknown`.        |
| 10  | A published record requires at least one source.                                         |

## Scenarios the model represents

| Scenario                           | How                                                                                                            |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Institution absent in a country    | `PresenceState: 'absent'` on the country profile; `FunctionScope: 'none'` on the jurisdiction.                 |
| Name exists, function differs      | `PresenceState: 'different-function'`.                                                                         |
| Existed historically, not now      | `temporalScope: 'historical'` + required `historicalPeriod`.                                                   |
| Function split across agencies     | Multiple institution records; scope recorded per jurisdiction rather than per agency.                          |
| Disputed classification            | `notes` + a `disputed` claim type on the prose that describes it.                                              |
| Incomplete research                | `coverage: 'in-research'` with `unknown` scopes.                                                               |
| Source supporting one narrow claim | `SourceRecord.note` states the scope; tests check citations resolve.                                           |
| Federal / regional variation       | One record per unit, `own` scopes where they differ.                                                           |
| Reform effective from a date       | **Partially.** Recorded in source `note` and a reader-facing callout; no structured field yet. See finding F3. |
