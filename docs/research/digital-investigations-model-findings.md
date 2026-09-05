# Wave 22 model findings — what the evidence changed, and what it refused

## 1. Model decisions

### No `DigitalInvestigationType` enum, and the argument for one was tested

Part B warned against inventing one unless repeated evidence proved it useful. The evidence
proved the opposite. The four systems read place these powers in four structurally different
locations, define their categories differently, and do not agree on how many powers there are.
Germany has at least six separately-conditioned acts; the Convention enumerates eight; the United
States allocates three instruments across three chapters; Japan puts one of them outside its code
entirely.

An enum would have had to pick one system's carve-up and impose it on the rest, which is the exact
failure Part B exists to prevent. The pages carry the categories as prose, attributed to the
instrument that draws them.

### No new institution type, and no new profession

Part X named the temptation precisely: `digital-forensics-unit`, `surveillance-unit`,
`cybercrime-unit`, `interception-centre`. None was added, and the ground is falsifiable: **no
Wave 22 page rests on the existence of any such body.** The evidence is about powers and who may
authorise them, not about organisations. Where an institution does appear — the Bundestag panel
under GG Art. 13(6), the _Staatsanwaltschaft_ under StPO § 110(1), the _Kammer des Landgerichts_
under § 100e(2) — it appears as the authority named in one provision of one system, which is a
fact about that provision and not a family.

### No new `Block` kind and no new field on `Guide`

The comparative structure of this wave — power, object, authoriser, duration, notification — is
carried adequately by `definitionList` and `list`.

### No `ScheduledChange`

Four exist and four remain. Part U's audit found no provision cited with a future commencement.
The Spanish chapter commenced on 6 December 2015; the German and US texts are current
consolidations; the Convention is in force. The Netherlands' new Code of Criminal Procedure
(1 April 2029) is already recorded in prose on `nl-gov-ccp-2029`, and this wave makes no Dutch
claim.

### No restricted claims

Part W predicted the wave should need none, and it needed none. Seven pages carry zero statistics,
zero prevalence claims and zero capability figures. The only numbers are statutory: ninety days,
three months, one month, six months, three working days, one hundred and eighty days, twenty-four
hours — each a quoted rule sourced to the instrument that states it.

## 2. Taxonomy findings

### There is no common location for these powers, and that is the first finding

Four systems, four answers: inside the general procedure code (Germany), in a dedicated chapter of
it (Spain), across three separate statutory chapters (United States), and partly outside the code
altogether (Japan, whose Art. 222-2 routes interception to "other acts"). Any page assuming a
single "digital investigation statute" would be wrong about three of the four.

### Taking a thing and reading it are different acts, and can belong to different institutions

The strongest finding in the wave. German law separates them so completely that § 94 governs
taking the object and § 110 governs examining it — and § 110(1) assigns the _Durchsicht_ to the
public prosecution office, with other officials required under § 110(2) to seal material in an
envelope **in the holder's presence** and deliver it. Part H's warning is not a caution here; it
is a rule of positive law.

### The three-way communications line is textual, not inferred

Convention Art. 18(3) defines subscriber information as data "other than traffic or content data",
which states the line and confirms the other two categories in one definition. United States law
states it twice more, in § 3127(3) ("shall not include the contents of any communication") and
§ 2703(c)(1) ("not including the contents of communications").

### Authorisation is graduated, and the graduation is the design

Within German law alone: a single court for § 100a, a **panel** of the Landgericht for § 100b with
the **Oberlandesgericht** taking over extensions past six months, the prosecution office for the
§ 110 examination, and no judicial order stated for an ordinary § 100j request. Within US law
alone: subpoena, § 2703(d) order, warrant. And the Convention — an instrument written to harmonise
these powers across many systems — requires "judicial **or other independent** supervision".

### Preservation is a holding step, and the treaty says so in the power itself

Art. 16(2) requires preservation "for a period of time as long as necessary, up to a maximum of
ninety days, **to enable the competent authorities to seek its disclosure**". The relationship to
the separate Art. 18 production power is stated inside the preservation article.

### Urgency reorders the sequence rather than removing the authoriser

Germany's _Gefahr im Verzug_ route substitutes the prosecution office for the court and then
provides that the order **lapses** unless the court confirms within three working days. The
judicial decision is deferred, not dispensed with.

## 3. Findings the evidence refused

Recorded because a wave that reports only what it confirmed is not reporting.

| Proposition the research started with                                     | What the evidence did                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Digital investigation is governed by a digital-investigation law"        | **Refuted.** No system read has one. Four different locations across four systems.                                                                                                                                                                                         |
| "Whether data is stored or in transit decides which power applies"        | **Refuted for one system.** StPO § 100a(1) third sentence permits content stored on the person's own system to be monitored under the interception power where it could also have been monitored in transit in encrypted form. The boundary is functional, not locational. |
| "Subscriber data is the least protected category, so everything in it is" | **Refuted.** German § 100j inverts the graduation for data protecting access to terminal devices, pulling it up to the § 100b especially-serious-offence level.                                                                                                            |
| "Digital investigative measures require a warrant"                        | **Refuted.** Only one of three US routes is a warrant; German law uses no such instrument for these powers; the Convention requires independent supervision, not a judge.                                                                                                  |
| "Common-law systems use judges and civil-law systems use prosecutors"     | **Refuted.** Germany and Spain both require a court or judge; US law permits an administrative subpoena issued without any court.                                                                                                                                          |
| "Location data is one category"                                           | **Refuted for one system.** StPO § 100g(1) permits stored (_retrograd_) location data only on the stricter § 100g(2) conditions and otherwise only prospectively or in real time.                                                                                          |
| A page on covert surveillance                                             | **Withdrawn.** Doing it honestly needs the intelligence / criminal-procedure boundary this wave did not research, and test 11 exists to catch exactly the error a thin version would make.                                                                                 |
| A page on cross-border digital evidence                                   | **Withdrawn.** The Convention's Second Additional Protocol was located and not read.                                                                                                                                                                                       |
| A page on location tracking                                               | **Withdrawn.** One jurisdiction is not a comparative page; the finding is carried where it belongs, on the traffic-data page.                                                                                                                                              |
| A page on remote access                                                   | **Withdrawn.** Three sources describing two different acts. Carried on the pages that own each act.                                                                                                                                                                        |

## 4. Safety decisions

Three subjects were not published for safety reasons rather than for want of a question: covert
surveillance, digital forensic method, and anything about how a protection on a device operates.
The reasoning is Part S applied before the fact — the honest version of each would have needed
operational specificity this platform refuses, and the version avoiding it would have said nothing
worth publishing.

What was published instead states the boundary explicitly. Every one of the seven pages names what
it declines to describe rather than only what it is not, and the phrasing is specific to that
page's subject — "nothing about how data on a device is stored, protected, recovered or altered",
"no method of preserving, transferring or obtaining data", "nothing about how any decision could be
anticipated, influenced or avoided". Mutation proofs W22-M6, M7 and M8 planted evidence-wiping
instructions, surveillance-detection guidance and forensic-bypass advice including a named product;
each was caught by between two and four independent guards.

No forensic tool, spyware platform or interception product is named anywhere, and a test enforces
it.

## 5. Terminology decisions

The pages use each system's own term and translate none into another:

- **Sicherstellung**, **Beschlagnahme** and **Durchsicht** are kept apart; English "seizure" covers
  the first two and none maps cleanly.
- **Bestandsdaten** and **Verkehrsdaten** are not assumed to align with the Convention's
  **subscriber information** and **traffic data**, and the pages say so.
- **"Warrant"** appears only where a cited system uses it — Japan's Arts. 218–219, the US § 2703 —
  and a test requires any page using it to record that it is one system's instrument.
- **"Wiretap"** appears nowhere as this platform's vocabulary. It survives only as the proper name
  of a US statute inside an uncertainty statement disclosing that the statute was not read.
