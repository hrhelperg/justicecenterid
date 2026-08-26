# Wave 20 research plan — public safety, emergency powers and civil protection

Branch `feat/knowledge-expansion-wave-20`, cut from `fe1a1e4`. Written 2026-08-26.

## 1. The question

**How do modern justice systems provide extraordinary public-safety capacity without making
extraordinary power legally unlimited?**

The thesis is neither that emergency powers are dangerous nor that they are benign. It is that
**effective emergency government and rule-of-law constraint are complementary institutional
requirements** — that a state which cannot act in a flood has failed, and a state whose action in
a flood is unbounded has failed differently. Every page in this wave has to be readable by someone
who came looking for either half.

## 2. Thirty-four dimensions, and what each returned

The brief named thirty-four research dimensions. They were collapsed into twenty machine-gradable
dimensions for the evidence sweep and then read back against the original list.

| Brief's dimension                                           | Outcome                                                                                                                                                                                                               |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public safety as a governmental function                    | **Established** — statutory definitions of the field found in Spain (Ley 17/2015 Art. 1), Switzerland (BZG Art. 3), Czechia (ústavní zákon 110/1998 Čl. 3), Brazil (CF Art. 144)                                      |
| Civil protection / civil defence                            | **Established, and the distinction is real** — Switzerland BV Art. 61 splits them in one article; Norway's sivilbeskyttelsesloven § 1 spans both; Germany splits federal _Zivilschutz_ from Land _Katastrophenschutz_ |
| Emergency management institutions                           | **Established for 14 systems**, and the finding is that the institutional form does not recur (see model findings)                                                                                                    |
| Disaster-response legal authority                           | **Established**                                                                                                                                                                                                       |
| States of emergency                                         | **Established for 14 systems**; two systems have none in the relevant sense                                                                                                                                           |
| Constitutional emergency powers                             | **Established**                                                                                                                                                                                                       |
| Statutory emergency powers                                  | **Established**                                                                                                                                                                                                       |
| Temporary extraordinary measures                            | **Established** — the range runs from 7 days to no fixed term                                                                                                                                                         |
| Institutional competence during emergencies                 | **Established**, with a strong counter-case in Norway                                                                                                                                                                 |
| National ↔ regional ↔ local coordination                    | **Established for 15 systems**                                                                                                                                                                                        |
| Civilian authority                                          | **Established**                                                                                                                                                                                                       |
| Police role                                                 | **Established for 11 systems**                                                                                                                                                                                        |
| Fire/rescue role                                            | **Partially** — reached only through the integrated-system statutes (Czechia IZS, Switzerland BZG); not researched as a discipline                                                                                    |
| Emergency medical role                                      | **Partially** — same route, same limit                                                                                                                                                                                |
| Civil-protection role                                       | **Established**                                                                                                                                                                                                       |
| Military assistance to civilian authorities                 | **Established for 11 systems** — the strongest single dimension in the wave                                                                                                                                           |
| Parliamentary / legislative oversight                       | **Established for all 16**                                                                                                                                                                                            |
| Judicial review                                             | **Established for 9**, and the finding is that it is not uniform                                                                                                                                                      |
| Proportionality                                             | **Deliberately not developed** — owned by `/law-enforcement/police-use-of-force`                                                                                                                                      |
| Necessity                                                   | **Deliberately not developed** — same                                                                                                                                                                                 |
| Temporariness                                               | **Established**                                                                                                                                                                                                       |
| Sunset / termination                                        | **Established for 13**                                                                                                                                                                                                |
| Derogation where legally recognised                         | **Established for 7**; five systems have no derogation architecture at all                                                                                                                                            |
| Non-derogable rights where supported                        | **Established for 9**                                                                                                                                                                                                 |
| Continuity of courts                                        | **Established for 5, partially for 6**                                                                                                                                                                                |
| Continuity of prosecution                                   | **Not established anywhere.** No researched text makes the charging decision work differently under a declaration. Recorded as an absence, and the candidate page was rejected on that ground                         |
| Continuity of defence / legal representation                | **Established only as a condition on emergency detention** (South Africa s. 37(6))                                                                                                                                    |
| Detention under exceptional conditions                      | **Established**                                                                                                                                                                                                       |
| Public-order emergencies                                    | **Established**, but the publishable part is held by existing pages                                                                                                                                                   |
| Natural disasters                                           | **Established**                                                                                                                                                                                                       |
| Major accidents                                             | **Established** — Germany's _besonders schwerer Unglücksfall_, Sweden's _lag om skydd mot olyckor_                                                                                                                    |
| Public-health emergencies (institutional architecture only) | **Established, and kept to architecture** — France's Art. 66 reservation on quarantine, New Zealand's Epidemic Preparedness Act as an activation mechanism, Ireland's Health Act s. 31A sunset                        |
| Constitutional-order emergencies                            | **Established** — Germany Art. 91, Czechia _stav ohrožení státu_, Brazil Art. 34                                                                                                                                      |
| Cross-border / supranational coordination                   | **Established** — EU Decision 1313/2013, TFEU Arts. 6(f) and 222, Sendai Framework                                                                                                                                    |

## 3. Method

1. **Merge gate.** Wave 19 verified in `main` by ten artifact checks, not by the merge message.
2. **Baseline measured**, not copied. `docs/research/knowledge-expansion-wave-20-baseline.md`.
3. **Cannibalization audit before research.** 161 existing records mapped; 41 candidates
   classified in four independent groups; cross-group collisions reconciled afterwards.
4. **Evidence sweep.** Nine parallel researchers over 16 national systems and four supranational
   instruments, each required to quote verbatim, record the URL actually fetched, and grade
   honestly. 415 findings: 327 ESTABLISHED, 50 PARTIALLY, 38 NOT ESTABLISHED.
5. **Adversarial verification.** Three independent verifiers, one per failure mode — source
   authenticity, overgeneralisation, country-scope leakage — each instructed to refute and to
   re-fetch. 313 verdicts, 2 refutations and 31 overstatements, all acted on.
6. **Publish set fixed against the verified evidence**, not against the candidate list.

## 4. The publish set

Twelve routes. The section split is the thesis made architectural: **`/public-safety` carries the
capacity side, `/justice` and `/courts` carry the constraint side.**

### `/public-safety` — eight routes

| Route                                      | Reader question                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `what-public-safety-covers`                | What does "public safety" actually cover, and is it just a broader word for policing?                  |
| `what-civil-protection-is`                 | What is civil protection, and is it the same thing as civil defence?                                   |
| `who-is-in-charge-in-an-emergency`         | When a flood or an earthquake happens, which body is legally responsible?                              |
| `national-and-local-emergency-authority`   | When an emergency outgrows the authority handling it, what legal step moves it up?                     |
| `military-assistance-to-civil-authorities` | When may a country send its own armed forces to act inside its borders, and whose orders do they take? |
| `what-a-state-of-emergency-changes`        | What actually changes in law when a government declares a state of emergency?                          |
| `who-can-declare-a-state-of-emergency`     | Who is legally able to declare one, and does anyone else have to agree?                                |
| `how-emergency-powers-end`                 | Does a state of emergency actually end, and what happens to what was done under it?                    |

### `/justice` — three routes

| Route                                 | Reader question                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `which-rights-can-never-be-suspended` | Which rights may a government suspend in a declared emergency, and which can it never touch?            |
| `reviewing-an-emergency-declaration`  | Can a court be asked whether the declaration itself was lawful, or only whether a measure under it was? |
| `detention-under-emergency-powers`    | Can a person be held under emergency powers without being suspected of an offence?                      |

### `/courts` — one route

| Route                                | Reader question                                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `courts-during-a-state-of-emergency` | If an emergency is declared, do the courts keep sitting — and can an emergency court try you instead? |

## 5. What was deliberately not published

- **`prosecution-during-emergencies`** — rejected. Not an evidence problem: an absence of a
  question. No researched text makes charging work differently under a declaration.
- **`emergency-powers-and-the-rule-of-law`** — rejected. Its every proposition is owned by
  `/justice/what-is-the-rule-of-law` and `/justice/why-government-is-bound-by-law`, or belongs
  inside each Wave 20 page rather than in a page of its own.
- **`public-order-emergencies`** — rejected. The non-operational part is held by
  `/law-enforcement/police-use-of-force` and `/law-enforcement/police-jurisdiction`.
- **`emergency-powers-and-proportionality`, `emergency-powers-and-necessity`** — merged away.
  `/law-enforcement/police-use-of-force` owns both doctrines.
- **`judicial-authorisation-during-emergencies`** — deferred. The corpus has no routed page on
  warrants at all, so it would have to build its own baseline first.
- **Country modules** — none published. See model findings.
- **Fire, rescue and emergency-medical services as disciplines** — deferred. They were reached only
  through integrated-system statutes, which is enough to name them as partners and not enough to
  describe them.

## 6. Standing scope limits

Every page in this wave states, in its own text, that it describes institutional and legal
structure only. None describes what to do in an emergency, how any measure is applied, how to
comply with or resist one, or what any individual's position is. That is not a disclaimer bolted
on: three of the four rejected candidates were rejected because their honest content would have
been operational, and the safety tests enforce it.
