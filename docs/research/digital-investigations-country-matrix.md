# Digital investigation — comparative matrix (Wave 22)

Every cell was read from the publisher's own text. Status vocabulary is the brief's:
**ESTABLISHED** (primary text read and confirmed), **PARTIALLY ESTABLISHED** (text read, but the
proposition needs material not researched here), **NOT ESTABLISHED** (text read and it does not say
this), **NOT RESEARCHED** (not looked at — never rendered as "no").

Four national systems and one treaty were researched to primary text. The brief listed sixteen
jurisdictions; **twelve carry no Wave 22 claim at all** and are recorded as NOT RESEARCHED in §9
rather than inferred from neighbours.

## 1. Where the powers live

| System            | Instrument                                                                            | Architecture                                                                                                        | Status      |
| ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| Council of Europe | Convention on Cybercrime (ETS 185), Arts. 14–21                                       | Eight distinct procedural powers, each in its own article, all subject to Arts. 14–15                               | ESTABLISHED |
| Germany           | Strafprozessordnung §§ 94, 100a, 100b, 100e, 100g, 100j, 101, 110                     | **Inside the general procedure code**, as a graduated ladder of separately-conditioned powers                       | ESTABLISHED |
| Spain             | Ley de Enjuiciamiento Criminal, arts. 588 bis a – 588 octies (inserted by LO 13/2015) | **One dedicated chapter** governing all "medidas de investigación tecnológica" under five shared guiding principles | ESTABLISHED |
| United States     | 18 U.S.C. ch. 119 (interception), ch. 121 (stored communications), ch. 206 (pen/trap) | **Three separate chapters**, each with its own instrument and standard                                              | ESTABLISHED |
| Japan             | Code of Criminal Procedure arts. 197, 218, 219, 222-2                                 | General warrant power in the Code; **interception expressly routed to a different Act** by Art. 222-2               | ESTABLISHED |

**Finding.** There is no common location for these powers. One system puts them in the procedure
code, one in a dedicated chapter of it, one across three separate statutory chapters, and one
partly outside the code altogether. A page assuming a single "digital investigation statute" would
be wrong about three of the four.

## 2. Device seizure and device examination

| System            | Taking the device                                                                                                                                                                                                    | Examining its contents                                                                                                                                                                                                                                                                                                                          | Same act?                                                                                                        | Status                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------- |
| Germany           | StPO § 94: items of evidential significance are to be taken into custody (_Sicherstellung_); where they are in a person's custody and not surrendered voluntarily, **§ 94(2) requires _Beschlagnahme_**              | StPO § 110: the _Durchsicht_ of papers **belongs to the Staatsanwaltschaft** and, on its order, its investigators; other officials may examine only with the holder's consent, failing which the material is sealed in the holder's presence and delivered to the prosecution office. § 110(3) applies the same to **electronic storage media** | **No — and they belong to different authorities**                                                                | ESTABLISHED           |
| Council of Europe | Art. 19(3)(a): power to seize or similarly secure a computer system or storage medium                                                                                                                                | Art. 19(1): power to **search or similarly access**; Art. 19(3)(b) separately, to **make and retain a copy**                                                                                                                                                                                                                                    | **No — three separately enumerated powers**                                                                      | ESTABLISHED           |
| Japan             | Art. 218(1): search, seizure or inspection **upon a warrant issued by a judge**. Art. 219(1) requires the warrant to state the articles to be seized **and, separately**, the place, body or articles to be searched | same warrant instrument, separately specified                                                                                                                                                                                                                                                                                                   | Distinguished **within one warrant**                                                                             | ESTABLISHED           |
| Spain             | LECrim art. 588 sexies governs seizure of computer storage devices found during a search                                                                                                                             | The same chapter's guiding principles (588 bis a) apply                                                                                                                                                                                                                                                                                         | PARTIALLY ESTABLISHED — the chapter was located and its principles read; article 588 sexies was not read in full | PARTIALLY ESTABLISHED |
| United States     | —                                                                                                                                                                                                                    | —                                                                                                                                                                                                                                                                                                                                               | NOT RESEARCHED — device search is largely Fourth Amendment case law, which this wave did not read                | NOT RESEARCHED        |

**Finding — the strongest in the wave.** German law separates possession from reading so completely
that it assigns them to different institutions: the police may hold the device, and the
_Durchsicht_ of its storage media is the prosecution office's. Part H's warning — do not assume
possession by police equals authority to examine all data — is not a caution here, it is a rule of
positive law in at least one system.

**Extension to data not on the device.** StPO § 110(3) second sentence permits the examination to
extend to **spatially separated storage media** accessible from the device, but only where loss of
the sought data would otherwise be feared. Convention Art. 19(2) permits the same extension where
the further data is "lawfully accessible from or available to the initial system". Both are
extensions of an authorised examination, not free-standing powers.

## 3. Interception and stored data

| System            | Real-time interception of content                                                                                                                                                                   | Access to stored data                                                            | Status                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Council of Europe | Art. 21 — interception of **content data**, available only "in relation to a range of serious offences to be determined by domestic law"                                                            | Art. 19 (search and seizure of stored computer data); Art. 18 (production order) | ESTABLISHED                                                                                |
| Germany           | StPO § 100a — _Telekommunikationsüberwachung_: specific facts grounding suspicion of a **schwere Straftat** from the § 100a(2) catalogue, serious **also in the individual case**, and subsidiarity | § 94/§ 110 for seized media; § 100b for remote collection from a system          | ESTABLISHED                                                                                |
| United States     | 18 U.S.C. ch. 119 (not read in full this wave)                                                                                                                                                      | **18 U.S.C. § 2703** — a graded scheme; see §4                                   | PARTIALLY ESTABLISHED — the stored-communications scheme was read; the Wiretap Act was not |
| Japan             | **Art. 222-2**: compulsory measures for interception of electronic communications without the consent of either party "shall be executed based upon **other acts**" — i.e. not under the Code       | Art. 218(1) warrant                                                              | ESTABLISHED                                                                                |

**Finding.** The two are never the same power in any system read. Japan makes the point structurally
by excluding interception from the procedure code entirely; the Convention gives each its own
article and makes content interception the narrower of the two. US law reaches the same result
through separate statutory chapters.

**A sub-finding on the boundary between them.** German law does not treat "on the device" and "in
transit" as watertight: § 100a(1) sentence 3 permits monitoring of content **stored on** the
person's system only where it could also have been monitored during the ongoing transmission in
encrypted form. The category boundary is drawn by reference to what the interception power would
have reached, not by where the data sits.

## 4. Content, traffic data and subscriber information

| System            | Content                                                                          | Traffic / communications data                                                                                                                                                                  | Subscriber information                                                                                                                                                                                                                                  | Status      |
| ----------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Council of Europe | Art. 21                                                                          | **Art. 20** — real-time collection of traffic data, a separate article                                                                                                                         | **Art. 18(3)** defines subscriber information as information "relating to subscribers of its services **other than traffic or content data**" — a three-way line in one definition                                                                      | ESTABLISHED |
| Germany           | § 100a — serious-offence catalogue + subsidiarity                                | § 100g — offences "of significant weight in the individual case" or committed by means of telecommunications, with necessity and proportionality                                               | § 100j — available where necessary to investigate the facts or determine a suspect's whereabouts; **but** where the request reaches data protecting access to terminal devices, only on the stricter statutory conditions and for § 100b-level offences | ESTABLISHED |
| United States     | § 2703(a)–(b): a **warrant** for contents in electronic storage 180 days or less | § 3127(3): a pen register records "dialing, routing, addressing, or signaling information", "provided, however, that such information **shall not include the contents of any communication**" | § 2703(c)(1): "a record or other information pertaining to a subscriber ... **(not including the contents of communications)**"; § 2703(c)(2) lists six items obtainable on **an administrative or grand-jury subpoena**                                | ESTABLISHED |

**Finding.** The three-way distinction is textual in both instruments that define it, and the
graduation is consistent in direction even where the instruments differ: subscriber information is
the least protected, content the most, traffic data between them. The Convention makes the
direction explicit — Art. 14(3)(a) permits a Party to restrict the traffic-data power (Art. 20) to
listed offences only if that range is **"not more restricted than"** the range for content
interception (Art. 21).

**Location data is a traffic-data question, and Germany splits it by time.** StPO § 100g(1)
provides that collection of **stored (_retrograd_) location data** is permitted only on the
stricter § 100g(2) conditions, and that otherwise location data may be collected only for **future**
traffic data or **in real time**. Whether other systems draw the same historical/prospective line
was NOT RESEARCHED.

## 5. Preservation and production

| System            | Preservation                                                                                                                                                                                                                                                                                                                                                                                    | Production                                                                                                                    | Same act?                                              | Status                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------- |
| Council of Europe | **Art. 16** — expedited preservation of specified stored computer data including traffic data; where done by order to a person, that person must preserve and maintain integrity "for a period of time as long as necessary, **up to a maximum of ninety days**, to enable the competent authorities **to seek its disclosure**"; renewable; the custodian must keep the procedure confidential | **Art. 18** — order a person to submit specified stored computer data, or a service provider to submit subscriber information | **No — Art. 16 exists to enable a later Art. 18 step** | ESTABLISHED           |
| Council of Europe | Art. 17 — preserved traffic data, with **partial** disclosure of enough traffic data to identify the service providers and the route                                                                                                                                                                                                                                                            |                                                                                                                               | a deliberately narrow disclosure                       | ESTABLISHED           |
| United States     | —                                                                                                                                                                                                                                                                                                                                                                                               | § 2703(b)–(c) production routes, differing by what is sought and whether notice is required                                   | production established, preservation NOT RESEARCHED    | PARTIALLY ESTABLISHED |

**Finding.** Preservation freezes; production hands over. The Convention states the relationship in
the preservation article itself, and caps preservation at ninety days precisely because it is a
holding step rather than an acquisition. A retention **mandate** — a general obligation on
providers to keep data about everyone — is a third and different instrument, and was NOT RESEARCHED.

## 6. Who authorises

| System            | Ordinary route                                                                                                                                                                                                                                                                                                                        | Urgency route                                                                                                                       | Escalation                                                                                                         | Status      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| Germany, § 100a   | **Court, on application of the prosecution office** (§ 100e(1))                                                                                                                                                                                                                                                                       | Prosecution office **where there is danger in delay**; the order **lapses unless confirmed by the court within three working days** | max 3 months, renewable in 3-month steps                                                                           | ESTABLISHED |
| Germany, § 100b   | **A panel of the Landgericht**, on application of the prosecution office (§ 100e(2))                                                                                                                                                                                                                                                  | the presiding judge, lapsing unless the chamber confirms within three working days                                                  | max **1 month**; after six months in total, further extensions are decided by the **Oberlandesgericht**            | ESTABLISHED |
| Germany, § 100j   | no judicial order stated for the ordinary case                                                                                                                                                                                                                                                                                        | —                                                                                                                                   | stricter conditions for access-credential data                                                                     | ESTABLISHED |
| Spain             | **The judge**, always — of the judge's own motion or on application of the Ministerio Fiscal or the Policía Judicial (588 bis b(1))                                                                                                                                                                                                   | NOT RESEARCHED for the general chapter                                                                                              | duration per measure, extension by **auto motivado** (588 bis e)                                                   | ESTABLISHED |
| United States     | **Three different instruments**: an administrative or grand-jury **subpoena** for the § 2703(c)(2) list; a **§ 2703(d) court order** on "specific and articulable facts showing ... reasonable grounds to believe" the material is "relevant and material to an ongoing criminal investigation"; a **warrant** for contents ≤180 days | NOT RESEARCHED                                                                                                                      | —                                                                                                                  | ESTABLISHED |
| Japan             | **A judge's warrant**, on the request of a public prosecutor, an assistant officer or a judicial police officer (Art. 218(1), (3))                                                                                                                                                                                                    | NOT RESEARCHED                                                                                                                      | warrant states a **valid period**, after which the measure may not begin and the warrant is returned (Art. 219(1)) | ESTABLISHED |
| Council of Europe | Art. 15(2): safeguards shall include "**judicial or other independent supervision**", grounds justifying application, and limitation of scope and duration                                                                                                                                                                            | —                                                                                                                                   | —                                                                                                                  | ESTABLISHED |

**Finding — the refutation of the universal-warrant assumption.** Within US law alone, three
different instruments authorise three different categories of digital material, and only one of
them is a warrant. Within German law alone, one power is authorised by a single judge, another by a
three-judge panel with a higher court taking over after six months, and a third requires no judicial
order in the ordinary case. And the Convention, which binds its Parties to provide safeguards, says
"judicial **or other** independent supervision" rather than requiring a judge.

**Urgency does not remove the authoriser; it reorders the sequence.** Germany's _Gefahr im Verzug_
route substitutes the prosecution office for the court and then imposes a three-working-day
confirmation deadline on pain of the order lapsing. The judicial decision is deferred, not
dispensed with.

## 7. Scope, duration, notification and review

| Requirement             | Germany                                                                                                                                                                                                                                                                                                                                                                                              | Spain                                                                                                                                                                                                                                                                                                                                                 | Council of Europe                                                                                                                                | Status           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| Written, reasoned order | § 100e(3): in writing, stating so far as possible the name and address of the person affected, the offence alleged, the **type, extent, duration and end-point** of the measure, the type of information to be collected and its significance, and for § 100a the number or identifier of the connection or terminal                                                                                 | 588 bis b(2): the request must state the act and the identity of the person investigated **or anyone else affected**, the reasons under the guiding principles, the indicia, the **extension of the measure with specification of its content**, the unit that will carry it out, the form of execution, the duration sought, and the obliged subject | Art. 15(2): "limitation of the scope and the duration of such power or procedure"                                                                | ESTABLISHED      |
| Duration                | § 100e(1)–(2): 3 months / 1 month, renewable                                                                                                                                                                                                                                                                                                                                                         | 588 bis e: the duration specified for each measure, **not exceeding the time indispensable**; extension by reasoned order; on expiry without extension the measure "cesará a todos los efectos"                                                                                                                                                       | Art. 15(2)                                                                                                                                       | ESTABLISHED      |
| Data marking            | § 101(3): personal data so collected must be **marked**, and the marking maintained after transmission to another body                                                                                                                                                                                                                                                                               | NOT RESEARCHED                                                                                                                                                                                                                                                                                                                                        | —                                                                                                                                                | ESTABLISHED (DE) |
| Notification            | § 101(4): an itemised duty naming **who** must be told for each measure — for § 100a "the participants in the monitored telecommunication", for § 100b "the target person and significantly co-affected persons" — and the notification must point out the possibility of subsequent judicial protection and its time limit. Notification is withheld where overriding protectable interests require | NOT RESEARCHED                                                                                                                                                                                                                                                                                                                                        | Arts. 16(3), 20(3), 21(3) impose **confidentiality on the custodian or provider**, which is the opposite duty and addressed to a different party | ESTABLISHED (DE) |
| Post-hoc review         | § 101(7): the persons named in § 101(4) may apply to the court, up to **two weeks after notification**, for review of **the lawfulness of the measure and the manner of its execution**; immediate complaint lies against the decision                                                                                                                                                               | 588 bis e(3) cessation; further review NOT RESEARCHED                                                                                                                                                                                                                                                                                                 | Art. 15(2) independent supervision                                                                                                               | ESTABLISHED (DE) |

**Finding.** Notification is what converts a covert measure into a reviewable one, and Germany's
architecture makes the chain explicit: mark the data, notify the named categories of person, tell
them their remedy and its deadline, and give them two weeks to ask a court whether the measure was
lawful **and whether it was executed properly**. The Convention imposes confidentiality on
providers and custodians — a duty running the other way, on a different party, for a different
reason.

## 8. Guiding principles, where a system states them generally

Spain is the only system read that states a general test for all technological measures.
LECrim 588 bis a requires judicial authorisation "con plena sujeción a los principios de
**especialidad, idoneidad, excepcionalidad, necesidad y proporcionalidad**", and then defines each:

- **Especialidad** — the measure must relate to a **specific** offence. "No podrán autorizarse
  medidas de investigación tecnológica que tengan por objeto prevenir o descubrir delitos o
  despejar sospechas sin base objetiva."
- **Idoneidad** — defines the objective and subjective scope and the duration by reference to the
  measure's usefulness.
- **Excepcionalidad and necesidad** — available only where no less burdensome measure equally
  useful is available, or where the investigation would otherwise be gravely hindered.
- **Proporcionalidad** — proportionate only where the sacrifice of the affected rights is not
  greater than the benefit, weighing the gravity of the act, its social significance, the
  technological context, the strength of the indicia and the relevance of the result sought.

Japan states a different kind of general rule. CCP Art. 197(1) provides that in investigation "such
examination as is necessary to achieve its objective may be conducted; **provided, however, that
compulsory dispositions shall not be applied unless special provisions have been established in
this Code**."

**Finding.** These two provisions state the wave's core principle from opposite directions. Spain
bars the exploratory use of an authorised power; Japan bars the use of a power that has not been
authorised at all. Neither makes technical feasibility relevant to either question.

## 9. What was NOT researched

Recorded so a later wave does not mistake absence for a finding.

- **Twelve of the sixteen jurisdictions the brief listed carry no Wave 22 claim**: France, Canada,
  United Kingdom / England & Wales, Ireland, Netherlands, Czechia, Switzerland, Brazil, South
  Africa, Kenya, Australia, New Zealand. None was read for this subject and none is asserted about.
- **Case law everywhere.** Every cell is statutory or treaty text.
- **United States**: the Wiretap Act (ch. 119) itself, and Fourth Amendment device-search doctrine.
- **Spain**: arts. 588 ter to 588 octies in full; only the chapter's guiding principles,
  authorisation-request and duration articles were read.
- **Japan**: the Act on Wiretapping for Criminal Investigation to which Art. 222-2 refers. The
  translation read is a Japanese Law Translation version reflecting amendments to 2006 and may lag
  later amendments; only structural propositions present in that version are used.
- **Cross-border**: the Convention's Second Additional Protocol on enhanced co-operation and
  electronic evidence was located but not read. The EU e-Evidence Regulation and the European
  Investigation Order Directive were not researched.
- **Data retention mandates**, deletion regimes, and intelligence-service powers in every system.
