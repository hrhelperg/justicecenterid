# Careers cannibalization audit — Wave 24

Every candidate was tested against the existing route families before anything was written:
`/professions/*`, `/institutions/*`, `/law-enforcement/*`, `/investigations/*`, `/forensics/*`,
`/corrections/*`, `/courts/*`, `/prosecution/*`, `/defence/*`, `/justice/*`.

## 1. The collision that decided the architecture

`/professions/detective` against a hypothetical `/law-enforcement/what-does-a-detective-do`.

These answer the same question. One canonical owner is required, and it is `/professions/detective`
— it already exists, already carries `relatedInstitutions`, `relatedProfessions` and
`countryExamples`, and already passes the reference publication gate. The duplicate was not
created, and a test asserts that no Wave 24 guide slug equals a profession slug, `what-does-a-X-do`,
or `X-career`.

The same reasoning removed the whole `/careers` family. See
`careers-training-research-plan.md` §1.

## 2. The seventeen existing law-enforcement guides — no overlap

The section's existing guides are about institutional structure, powers and accountability:
why law enforcement exists, police against law enforcement, how institutions changed, use of force,
arrest and detention, accountability, oversight, complaints, jurisdiction, levels of government,
contract policing, command and coordination, municipal and national police, local governance,
sheriffs and city police, and who investigates the police.

None is about careers, training, academies, skills, progression or working life. The baseline
audit confirms it numerically: `police academy`, `recruitment`, `career progression`,
`physical fitness`, `shift work` and `report writing` occurred **zero** times corpus-wide.

## 3. The three near-collisions, resolved

| New page                                  | Existing page                                                         | How the boundary holds                                                                                                                                                                                                             |
| ----------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `professional-standards-in-policing-work` | `why-police-accountability-matters`, `how-police-are-held-to-account` | The existing pages own the **institutional machinery** — who reviews, complains, inspects. The new page owns what standards ask of **an individual doing the work**, and says so in its own scope callout. Each links to the other |
| `what-police-recruits-are-taught`         | `police-use-of-force`                                                 | The existing page owns the **legal test** for force. The new page reports **how many hours a curriculum devotes** to subjects including force. One is law, the other is a published training statistic                             |
| `specialist-roles-in-policing`            | `legal-authority-and-technical-capability` (Wave 22)                  | The existing page owns whether a capability may lawfully be used. The new page owns what the specialist areas are as **careers**, and explicitly defers the authority question to it                                               |

## 4. Profession records against institution records

No profession slug collides with an institution slug; a test asserts it. The distinction is stable
in the corpus: an institution is a body, a profession is a role held inside one, and every routed
profession names the institutions it works within.

`emergency-dispatcher` was checked against `/institutions/*` for a control-room or
emergency-communications institution type. None exists, and none was created — Wave 20 established
on fourteen systems that the civil-protection coordination function has too many institutional
forms to support a cross-country type, and Wave 24 carries that guard forward in its own suite.

## 5. Search-intent duplication inside the wave

Twelve guides, twelve distinct questions, asserted by test: no two Wave 24 guides share a question,
a title or a short title. The closest pair is #1 (what a police academy is) and #3 (training against
education) — resolved by ownership: #1 owns the **institutions**, #3 owns the **distinction**.

## 6. What the wave deliberately did not take

- **Country recruitment pages.** `how-to-become-a-police-officer-in-<country>` would rank, and would
  rot. Requirements are employer-set and change; a maintained country layer is a later wave's work
  under Part V.
- **Salary pages.** The highest-volume career query in this field, excluded under Part AA.
- **"Best academy" rankings.** Excluded under Part Y, which forbids exactly the page a commercial
  layer would most want.

Each is a deliberate forgone opportunity, recorded so a later wave knows it was a decision rather
than an oversight.
