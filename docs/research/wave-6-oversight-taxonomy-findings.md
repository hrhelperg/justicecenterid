# Wave 6 — oversight taxonomy findings

**Decision date 2026-08-10.** Input: `france-police-oversight-deep-dive.md` and
`france-oversight-function-matrix.md`. Input from Wave 5:
`police-oversight-institutions-plan.md` §3, which deferred eight institution families for want
of any source at all.

Wave 5 deferred those families because the corpus was **empty**. Wave 6 gives France. The
question this document answers is whether France changes any of those deferrals — and the
answer is that it changes the _reasons_ without changing the _verdicts_.

## 1. The forcing test

For each deferred family: take the English label, try to make the French bodies fit it, and
record what breaks. A label passes only if the French institution can be described accurately
under it without discarding or distorting a fact from the matrix.

### Internal Affairs Unit — **FAILS**

The label denotes an internal unit investigating officer misconduct for disciplinary purposes.

Both French bodies exceed it in one direction and fall short in another:

- **Exceeds**: the IGPN conducts **criminal** investigations, on its own initiative or on the
  instruction of the judicial authority. An internal-affairs page would have to explain that
  its subject sometimes acts as judicial police under a prosecutor — which is not what the
  label describes anywhere it is native.
- **Exceeds**: both carry a wide organisational remit — audit, evaluation, information-systems
  security, data protection, personnel health and safety, finance, logistics, environment.
  That is an inspection function attached to the management of an organisation, not a
  misconduct function.
- **Falls short**: the IGPN cannot open an administrative investigation of its own motion; it
  needs instruction from the Minister, the DGPN, the DGSI or the préfet de police.

To publish `internal-affairs-unit` on this evidence, the page would have to either drop the
inspection and audit mandate or redefine the label. **DEFER.**

### Police Inspectorate — **FAILS, and fails on the most important axis**

In the corpus, "inspectorate" is known through Ireland's Garda Síochána Inspectorate — an
**external** body inspecting a police service, and dissolved on 2 April 2025.

The French _inspection générale_ is the opposite: a directorate **inside** the force. Décret
n° 2013-784 art. 1 makes the IGPN « un service actif de la direction générale de la police
nationale »; Code de la défense art. D3122-12 has the DGGN « disposer » of the IGGN.

Translating _inspection générale_ as "inspectorate" would invert the internal/external axis —
the single fact a reader most needs from such a page. The words are cognates; the institutions
are not the same category of thing.

**Recurrence also fails independently.** A global institution type needs the form to recur.
The corpus holds: France (two current internal inspections générales) and Ireland (one
external inspectorate, historical since 2 April 2025). That is one country with a current
instance of one form, and one country with a dissolved instance of a different form. No
additional country's arrangements were researched to the required standard in this wave.

**DEFER.** The brief anticipated this: _France alone does NOT automatically justify a global
institution type._

### Professional Standards Unit — **FAILS**

The same object as internal affairs under a different name, and no French instrument uses a
"professional standards" concept. What France has instead is a **code**: Code de la sécurité
intérieure art. R434-1 constitutes the code de déontologie of both national forces, and
R434-2 makes them subject to common rules plus rules specific to each. Standards here are set
by regulation binding both forces, not owned by a unit inside one of them. **DEFER.**

### Independent Police Complaints Body — **already published; France is a COUNTEREXAMPLE**

France has no external, police-specific complaints or investigation body. The police-specific
bodies are internal; the external bodies are general-mandate. Nothing sits at the
intersection.

That is not a gap in the research — it is a fact about France, and it is the most useful thing
this wave can contribute to an existing page. Added to `counterExamples` on
`/institutions/independent-police-complaints-body`, joining Nigeria.

### Anti-Corruption Commission — **still DEFERRED**

Wave 6 did surface a French anti-corruption unit: the arrêté of 26 August 2025, in force
1 September 2025, renamed the IGPN's _division nationale des enquêtes_ as the **délégation
nationale anti-corruption**. But that is a sub-unit of an internal police inspection, not a
commission, and one renamed sub-unit is not a recurring institutional form. **DEFER.**

### Ombuds and rights institution — **already published; France is an EXAMPLE**

The Défenseur des droits fits the published `/institutions/ombuds-and-rights-institution`
precisely on every distinguishing feature that page already asserts: a general mandate over
public administration of which policing is one part; a reporting line to Parliament (and here
also the President of the Republic); and powers to investigate, verify and recommend rather
than to discipline.

Added as a country example. **No new route.** Creating a French-specific ombuds page would
split one concept across two URLs, which is the cannibalisation failure Waves 2–5 were built
to avoid.

One claim is deliberately **not** made: the Défenseur des droits is not described as France's
accredited national human-rights institution. That status was not researched and is not
asserted.

### Data Protection Authority, Public Audit Institution, Police Integrity Commission, Police Standards Commission — **unchanged, DEFER**

France produced no evidence bearing on any of them.

## 2. Result

| Family                                          | Wave 5 verdict    | Wave 6 verdict                        | What changed                                                                                     |
| ----------------------------------------------- | ----------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Internal Affairs Unit                           | DEFER — no source | **DEFER**                             | Now deferred because the label misdescribes the sourced institutions, not because there are none |
| Police Inspectorate                             | DEFER — no source | **DEFER**                             | Two sourced instances exist; they are internal, and "inspectorate" would invert that             |
| Professional Standards Unit                     | DEFER — no source | **DEFER**                             | France sets standards by code, not by unit                                                       |
| Anti-Corruption Commission                      | DEFER — no source | **DEFER**                             | One renamed internal sub-unit is not a form                                                      |
| Independent Police Complaints Body              | PUBLISHED         | **PUBLISHED + France counterexample** | France shows a system with none                                                                  |
| Ombuds and rights institution                   | PUBLISHED         | **PUBLISHED + France example**        | Défenseur des droits fits the existing type                                                      |
| Data protection / audit / integrity / standards | DEFER             | **DEFER**                             | No evidence                                                                                      |

**Zero new institution routes.** Two existing institution pages strengthened, one existing
guide strengthened, and one country module published.

This is the outcome the brief described as acceptable and successful: _France demonstrates the
concept, but insufficient recurrence exists, therefore the global route remains deferred._

## 3. What France did justify

`/countries/france/oversight` — the France dossier's oversight module, deferred since the
France pilot in July 2026. Its `deferredReason` named the exact obstacle:

> Several relevant bodies were identified — the Conseil supérieur de la magistrature, the
> Contrôleur général des lieux de privation de liberté, the Défenseur des droits, and the
> internal inspectorates — but their legal bases, mandates and powers were not confirmed from
> primary sources within this pilot.

Wave 6 confirmed the legal bases, mandates and powers of the internal inspectorates, the
Défenseur des droits and the CGLPL from primary sources, and read the constitutional text for
the CSM. The stated obstacle is removed for four of the four bodies named, and the module is
published with the CSM present only as a boundary marker.

Publishing a country module rather than a global type is the correct direction of travel here:
the evidence is deep in one jurisdiction and absent in the others, and a country module is
exactly the artefact for evidence shaped that way.

## 4. Where a future wave should look

To reopen `police-inspectorate` as a global type, a wave needs current, primary-sourced
inspection arrangements from **at least two more countries**, and must resolve whether the
internal and external forms are one type or two. On the French evidence they are two, and the
answer determines whether one page or two is correct.

No candidate bodies are named here. Naming institutions that have not been verified is how
research plans turn into assertions.
