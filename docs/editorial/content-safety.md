# Content safety standards

These rules are absolute and override every other consideration, including completeness,
reader demand, and search opportunity. Where this document conflicts with any other, this
document wins.

---

## 1. The operational-instruction test

Applied to every page in `investigations`, `forensics`, `law-enforcement`, and `public-safety`,
and to any page elsewhere that touches technique.

> Could a reader use this page as a step toward evading law enforcement, committing or
> concealing an offence, defeating a forensic or security control, conducting surveillance on
> another person, obtaining restricted capability, or interfering with an investigation, a
> witness, or a proceeding?

If yes, the content is rewritten or dropped. There is no "educational purposes" exemption,
because the exemption is exactly the framing under which such content is normally requested.

### The line we hold

**Publish:** what a discipline establishes, what question it can answer, what its evidentiary
limits are, what error modes are known, what quality assurance and accreditation apply, how
its findings are tested in court, and what safeguards govern its use.

**Do not publish:** how to perform a technique, how to defeat one, the thresholds at which a
control succeeds or fails, or procedural detail whose only value is to someone performing or
countering the procedure.

### Worked examples

| Topic | Publishable | Not publishable |
| --- | --- | --- |
| Fingerprint comparison | What friction-ridge comparison claims to establish; that it is a comparative judgement rather than a numerical match; documented error and bias research; how examiner conclusions are challenged. | Development reagents and procedures; conditions affecting deposition or persistence; anything about surfaces, handling, or degradation. |
| DNA evidence | What a profile is; why match probabilities are probabilistic; contamination and transfer as a known limitation; chain-of-custody requirements; how defence experts test the analysis. | Laboratory protocols; sensitivity thresholds; anything concerning sample degradation or removal. |
| Digital forensics | That devices and services retain records; that access generally requires legal authorisation; how authenticity of digital evidence is contested. | Which artefacts exist where; acquisition tooling; retention periods at a level useful for anticipation; anything about deletion, encryption choices, or anti-forensics. |
| Surveillance powers | What authorisation regimes exist; who authorises; what oversight bodies review them; what proportionality tests apply. | Capability detail; detection thresholds; how to identify or defeat surveillance. |
| Border and customs | The institutional mandate; the legal basis for inspection; traveller rights and complaint routes. | Screening indicators; selection criteria; inspection procedures; anything concerning concealment. |
| Interviewing | Why safeguards exist; the research basis for false confessions; the right to legal advice and to an appropriate adult. | Interrogation techniques, tactics, or scripts — in either direction. |
| Use of force | The legal thresholds; authorisation and review; the accountability chain; what oversight bodies find. | Tactics, equipment specification, or operational deployment detail. |

---

## 2. No emergency guidance

The platform never tells a reader what to do in an emergency, a police encounter, an arrest,
a search, an interview, or a border stop.

The only permitted response:

> If you are in immediate danger or need urgent assistance, contact your local emergency
> services.

We do not publish emergency numbers by country, because a wrong or out-of-date number in an
emergency is a serious harm and we cannot maintain that data to the required standard.

## 3. No individualised legal advice

We describe systems, never a reader's situation. We do not assess a described scenario, do not
say whether described conduct was lawful, and do not tell a reader what to do next.

The standing statement appears on every substantive page and in the footer:

> JusticeCenterID provides general educational information about justice systems and
> public-safety institutions. It does not provide legal advice. Laws and procedures vary by
> jurisdiction and change over time. For a specific legal matter, consult a qualified
> professional in the relevant jurisdiction or the responsible official authority.

## 4. No sensational crime content

Prohibited:

- Case-by-case narration of crimes.
- Victim, perpetrator, or witness detail beyond what a legal principle strictly requires.
- Graphic description of violence, injury, death, or human remains.
- Crime-scene material of any kind.
- Named individual cases as page hooks or headline material.
- The register of true crime: "shocking", "chilling", "horrific", "brutal", "notorious".

Individual cases may be referenced **only** where a case is the reason a legal principle or
safeguard exists, sourced to court records or official inquiry findings, and described at the
level of the legal question rather than the events.

## 5. No glorification of violence or capability

Force is a legally constrained power. It is described in terms of thresholds, authorisation,
review, and consequence — never as capability, spectacle, or aesthetic.

Prohibited: tactical and weapons-focused framing; admiring description of equipment; "elite
unit" framing; anything that reads as recruitment material or as entertainment; militaristic
visual language in the interface.

## 6. Named individuals

- No profiles of individual officers, judges, prosecutors, defendants, victims, or witnesses.
- Individuals are named only where they are unavoidable to a documented institutional or
  historical fact, and only from official or archival record.
- No living private individual is identified in connection with an alleged offence.
- Historical figures are covered as institutional history, sourced to archives and scholarship,
  without moral characterisation beyond what sources support.

## 7. Vulnerable groups

Content touching children, detainees, asylum seekers, people with disabilities, and people
with mental-health conditions in justice contexts is written from official standards, statutory
safeguards, and oversight findings — describing the protections that exist and the bodies that
monitor them. Never from case narrative, and never in a way that identifies an individual.

## 8. Discrimination and disparity

Documented disparities in how justice systems operate are legitimate, important subject
matter. They are covered with:

- Official statistics or peer-reviewed research, with the measurement definition stated.
- Explicit acknowledgement of what the data can and cannot establish, particularly the
  distinction between disparity and its causes.
- Attribution of competing explanations to those who advance them.
- No inference about groups from aggregate statistics, in any direction.

Never: derogatory generalisation about any group, including any occupational group.

## 9. Political neutrality as a safety rule

Listed here as well as in the editorial policy because in this subject area partisan framing
is itself a harm — it converts a reference resource into campaign material and destroys its
usefulness to every audience.

No endorsement of parties, candidates, movements, or governments. No characterisation of a
government as legitimate or illegitimate beyond what an authoritative international-legal
source states, attributed.

## 10. Disputed and transitional jurisdictions

- Use the naming used by the relevant international body, and note where naming is itself
  disputed.
- Never assert sovereignty, recognition, or territorial status as fact. Attribute status
  claims to the bodies making them.
- Describe de facto arrangements as de facto, with a source.
- Where we cannot describe a jurisdiction neutrally and accurately, we do not cover it.

## 11. Enforcement

- `SafetyReview` is a field on every entity: `not-required` · `pending` · `cleared`.
- Entities in `investigations`, `forensics`, `law-enforcement`, and `public-safety` cannot be
  published with `pending`. This is enforced by `tests/content/safety.test.ts`, so a build
  fails rather than a page slipping through.
- Safety review happens after fact check and is a separate pass with a separate question:
  not "is this true?" but "what could this be used for?".
- Any published content later found to fail the operational-instruction test is treated as a
  critical correction: unpublished the same day, then fixed or dropped.

## 12. If in doubt

Do not publish. A missing page costs a reader a search result. A page that functions as
operational instruction, sensationalises a crime, or gives a reader the impression they have
received legal advice costs considerably more, and cannot be retracted from the people who
already read it.
