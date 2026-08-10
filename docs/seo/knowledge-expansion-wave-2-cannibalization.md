# Knowledge Expansion Wave 2 — semantic collision matrix

Every candidate in the three Wave 2 clusters, audited against existing routes, guides,
country modules, the law-enforcement Wave 1 cluster, the glossary, and each other.

Verdicts: **SEPARATE** · **MERGE** · **ALIAS** · **REDIRECT** · **DEFER** · **REJECT**

**The operating rule is unchanged from Wave 1:** a vocabulary difference alone never
justifies a page. Two pages may exist only when a reader arriving at one would feel they
had landed on the wrong one.

---

## 0. The collision this phase created for itself

Before anything else. Both `/institutions` and `/professions` rendered **every field of
every record inline**, because no record had a route. Adding thirteen detail routes without
touching the hubs would have produced thirteen pages duplicating two pages word for word.

This is the largest cannibalization event in the phase and it is caused by the routing work
rather than by any new content — which is exactly the kind of collision an audit that only
compares _new pages against old pages_ never finds.

**Resolution: both hubs become indexes.** Summary and link only. The detail moves to the
detail page and exists in one place.

---

## 1. Institution candidates (18)

| #   | Candidate                   | Verdict                                                                  | Reason                                                                                                                                                                                                                                                            |
| --- | --------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Police                      | **REJECT**                                                               | Owned twice already: `/law-enforcement/police-and-law-enforcement-difference` answers "what is police vs law enforcement", and the glossary holds `police`. A third page is a synonym for the section itself.                                                     |
| 2   | National Police             | **SEPARATE — published**                                                 | `/institutions/national-police`                                                                                                                                                                                                                                   |
| 3   | Federal Police              | **MERGE → `federal-investigative-agency`**                               | The defining feature is subject-matter jurisdiction, not the word "federal". Publishing both would split one concept across two URLs.                                                                                                                             |
| 4   | State Police                | **DEFER**                                                                | Genuinely distinct in federal systems, but needs sourcing per system; "state police" in the US and in Brazil are not the same object.                                                                                                                             |
| 5   | Provincial Police           | **MERGE → State Police** (then deferred)                                 | Same tier, different national vocabulary.                                                                                                                                                                                                                         |
| 6   | Municipal Police            | **SEPARATE — published**                                                 | `/institutions/municipal-police`                                                                                                                                                                                                                                  |
| 7   | Local Police                | **ALIAS of Municipal Police**                                            | Pure vocabulary variant. Same intent, same answer.                                                                                                                                                                                                                |
| 8   | Gendarmerie                 | **SEPARATE — published**                                                 | `/institutions/gendarmerie`                                                                                                                                                                                                                                       |
| 9   | Constabulary                | **DEFER**                                                                | Jurisdiction-bound (UK, Ireland, historic colonial forces) and partly historical. Needs the history cluster first.                                                                                                                                                |
| 10  | Sheriff's Office            | **DEFER**                                                                | The name denotes categorically different offices between countries — an elected county law-enforcement head, a court officer, a judicial office, a ceremonial post. Publishing it without that research would do the precise harm the platform exists to prevent. |
| 11  | Marshal Service             | **REJECT**                                                               | A named national agency, not an institution type. Belongs in the United States dossier, which already cites `us-usmarshals-duties`.                                                                                                                               |
| 12  | Judicial Police             | **DEFER**                                                                | A civil-law concept whose meaning is set by each system's code of criminal procedure.                                                                                                                                                                             |
| 13  | Criminal Police             | **MERGE → Judicial Police** (then deferred)                              | Overlapping vocabulary for the same function in different systems.                                                                                                                                                                                                |
| 14  | Border Police               | **MERGE → `border-and-customs-authority`**, which is itself **hub-only** | See §4.                                                                                                                                                                                                                                                           |
| 15  | Transport Police            | **SEPARATE — published, new**                                            | `/institutions/transport-police`. The only new record in the phase, and the only one with an archival source.                                                                                                                                                     |
| 16  | Military Police             | **DEFER**                                                                | Distinct from a gendarmerie — it polices the armed forces rather than the public — and the distinction is worth a page once sourced. The gendarmerie page carries the confusion explicitly in the meantime.                                                       |
| 17  | Highway Patrol              | **REJECT**                                                               | A United States term for a state-level function. As a global page title it would present one country's vocabulary as a category.                                                                                                                                  |
| 18  | Specialized Police Agencies | **REJECT**                                                               | Not a type. A residual bucket, and a page about "everything else" has no reader question.                                                                                                                                                                         |

**Published: 7** (the six above plus `prosecution-service` and `correctional-service`, which
were existing records rather than candidates on this list, less the two hub-only).

Exact routes:

```
/institutions/municipal-police
/institutions/national-police
/institutions/gendarmerie
/institutions/federal-investigative-agency
/institutions/transport-police
/institutions/prosecution-service
/institutions/correctional-service
```

### The named collisions

- **Police vs Law Enforcement** — already resolved in Wave 1 by a page whose entire subject
  is the distinction. Nothing added.
- **National Police vs Federal Police** — kept apart as _scope of jurisdiction_ (whole
  territory, general policing) versus _subject-matter jurisdiction_ (specified offences,
  nationwide). Both pages state the distinction, and each names the other in
  `commonConfusions`. This is the one pair where two pages genuinely earn their place.
- **Municipal vs Local Police** — aliased. One concept.
- **Judicial vs Criminal Police** — merged, then deferred together.
- **State Police vs Highway Patrol** — the second rejected as a national term; the first
  deferred.
- **Gendarmerie vs Military Police** — the distinction is real and is currently carried
  _inside_ the gendarmerie page's `commonConfusions` rather than as a second page, because
  only one of the two is sourced.
- **Constabulary vs Police** — deferred; largely a historical and jurisdiction-bound term.

---

## 2. Profession candidates (17)

| #   | Candidate                | Verdict                                                    | Reason                                                                                               |
| --- | ------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1   | Police Officer           | **MERGE → `patrol-officer`**                               | Same intent. The existing record is the general uniformed role; a second page would be a synonym.    |
| 2   | Patrol Officer           | **SEPARATE — published**                                   | `/professions/patrol-officer`                                                                        |
| 3   | Detective                | **SEPARATE — published**                                   | `/professions/detective`                                                                             |
| 4   | Criminal Investigator    | **MERGE → `detective`**                                    | Already merged in the record's own title, "Detective / investigator".                                |
| 5   | Police Dispatcher        | **DEFER**                                                  | A real and under-covered role. No source in the registry supports it.                                |
| 6   | Crime Analyst            | **DEFER**                                                  | As above.                                                                                            |
| 7   | Forensic Investigator    | **MERGE → `forensic-scientist`**                           | Vocabulary variant.                                                                                  |
| 8   | Crime Scene Investigator | **MERGE → `forensic-scientist`**                           | Scene work is a specialism within the discipline, not a separate profession at this level.           |
| 9   | Police Chief             | **DEFER**                                                  | Leadership roles differ so much between systems that a global page needs comparative sourcing first. |
| 10  | Sheriff                  | **DEFER**                                                  | Paired with Sheriff's Office; same reason.                                                           |
| 11  | Constable                | **DEFER**                                                  | Paired with Constabulary; partly historical.                                                         |
| 12  | Gendarme                 | **MERGE → `patrol-officer` + `/institutions/gendarmerie`** | The role is the general policing role; what differs is the institution, which now has its own page.  |
| 13  | Border Officer           | **DEFER**                                                  | No border source exists — the same blocker as the institution.                                       |
| 14  | Corrections Officer      | **SEPARATE — published**                                   | `/professions/corrections-officer`                                                                   |
| 15  | Probation Officer        | **DEFER**                                                  | Sits inside corrections in some systems and separate in others; needs its own sourcing.              |
| 16  | Prosecutor               | **SEPARATE — published, parent/child with the guide**      | See below.                                                                                           |
| 17  | Judge                    | **SEPARATE — published**                                   | `/professions/judge`                                                                                 |

Exact routes:

```
/professions/patrol-officer
/professions/detective
/professions/prosecutor
/professions/judge
/professions/forensic-scientist
/professions/corrections-officer
```

### The one risky pair: `/professions/prosecutor` vs `/prosecution/what-does-a-prosecutor-do`

The closest collision in the phase, and it was nearly a merge.

|           | `/prosecution/what-does-a-prosecutor-do`                       | `/professions/prosecutor`                                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Owns      | The **function** — what the prosecution stage of a case is for | The **role** — what the office may decide, what constrains it, who reviews it   |
| Reader    | Wants to understand the process                                | Wants to understand the job and its authority                                   |
| Structure | Guide: definition, why it exists, misconceptions, variation    | Reference: responsibilities, decision authority, constraints, oversight, ethics |

They are kept separate because the reference page answers questions the guide does not
(what the role decides, what regulates it, what the training route looks like) and the guide
answers questions the reference page does not. **The risk is real and is recorded here so a
future wave can revisit it**: if the two ever converge in content, the reference page is the
one to merge away, because the guide owns the higher-intent query.

The same relationship holds, more loosely, for `/professions/judge` against
`/courts/what-do-courts-do` — looser because a court is an institution and a judge is a
person, which readers do distinguish.

---

## 3. History candidates (20) — all DEFERRED

| Candidate                                                                                                                                               | Verdict                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| History of Law Enforcement · History of Policing                                                                                                        | **MERGE → `/law-enforcement/how-policing-institutions-changed`** (Wave 1, published) |
| Law Enforcement in Ancient Greece · Public Order in Ancient Rome · Roman Vigiles · Roman Urban Cohorts                                                  | **DEFER** — no ancient-history source verified                                       |
| Medieval Law Enforcement · Medieval Watch and Ward · History of Constables · History of Sheriffs                                                        | **DEFER** — no medieval source verified                                              |
| Bow Street Runners · Early Detective Policing                                                                                                           | **DEFER**                                                                            |
| London Metropolitan Police and Professional Policing · Robert Peel and the Peelian Tradition                                                            | **DEFER** — see §5                                                                   |
| Development of Criminal Investigation · Police Communications · Police Transport · Forensic Policing · Policing in the 20th Century · Women in Policing | **DEFER**                                                                            |

**The concept-level history is already published** as
`/law-enforcement/how-policing-institutions-changed`, which deliberately declines to name
"the first police force" and records in an `uncertainty` callout why that claim depends
entirely on the definition chosen. Every synonym candidate merges into it.

What Wave 2 adds instead: the one piece of archival history that **is** sourced now lives in
`/institutions/transport-police`, drawn from The National Archives — including the documented
detail that men employed as "Policemen" on British railways from 1826 were directing trains
like signalmen. That is the anti-presentism point the brief asks the history cluster to make,
evidenced rather than asserted, and it is on a page whose subject it actually belongs to.

---

## 4. Records that exist but are not routed

`border-and-customs-authority` and `coast-guard` remain **published summaries on the hub with
no route**.

The source registry was searched: it contains **no** border, customs, coast-guard or maritime
enforcement source of any kind. Their current text rests on a general UNODC landing page,
which is survivable for a hub summary and is not survivable for a canonical page asserting
that this platform has researched the subject.

This is not a cannibalization decision — it is a sourcing one — but it belongs here because
the alternative would have been two more indexable URLs competing for queries the platform
cannot yet answer well.

---

## 5. Provenance note: Robert Peel and the "nine principles"

Recorded here because it constrains a future page rather than a current one.

The brief asks that the widely circulated nine "Peelian principles" not be attributed to
Robert Peel without source verification. **Verification was attempted and failed.** Historic
Hansard returns 200 for `sittings/1829` but lists that year's months unlinked — the digitised
set holds no sitting records for 1829 — and every candidate debate URL returns 404. The
primary parliamentary record that would settle what Peel said is not retrievable from the
sources available here.

The Metropolitan Police Act 1829 itself **is** verified and already in the registry, and the
Wave 1 guide cites it for what it actually establishes: the statutory creation of a
full-time, centrally organised force for the Metropolitan area of London, and nothing about
arrangements elsewhere.

**Consequence:** a Peel page may be written when a scholarly source on the provenance of the
nine principles is verified. It may not reproduce the nine principles as Peel's words on the
strength of their ubiquity.

---

## 6. Totals

|              | Candidates | Published                                | Merged/Aliased | Deferred | Rejected |
| ------------ | ---------- | ---------------------------------------- | -------------- | -------- | -------- |
| Institutions | 18         | 5 of the 18 (+2 existing records routed) | 4              | 5        | 4        |
| Professions  | 17         | 6                                        | 5              | 6        | 0        |
| History      | 20         | 0                                        | 2              | 18       | 0        |
| **Total**    | **55**     | **13 routes**                            | **11**         | **29**   | **4**    |

**No redirects were required.** No existing URL was renamed, removed or re-parented, so
`netlify.toml` gains no redirect rule. The two hubs changed their _content_ but kept their
paths, which is what URL stability means here.
