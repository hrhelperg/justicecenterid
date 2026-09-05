# Wave 21 model findings — what the evidence changed, and what it refused

## 1. Model decisions

### No new entity type, and the argument for one was tested rather than waved away

The candidate was an `InstitutionType` for a constitutional-rights body — a human-rights
commission, an ombuds institution with a rights mandate, a data-protection authority. The wave
declines it, and the ground is narrow enough to be falsifiable: **no Wave 21 page rests on the
existence of such a body**, because the wave's evidence is constitutional text and constitutional
text creates rights and limits rather than institutions. Where an institution does appear in these
texts — the Bundestag panel under GG Art. 13(6), the agencies under GG Art. 10(2) — it appears as
a reviewer of one power in one system, which is a fact about that provision and not a family.

The corpus already routes `/institutions/ombuds-and-rights-institution`, and a second family would
have overlapped it.

### No new `Block` kind, no new field on `Guide`

Considered and rejected. The comparative structure of this wave — provision, wording, holder,
authorising authority — is carried adequately by `definitionList` and `list`, which is what those
blocks are for. A "provision" block would have been a table in disguise, and the corpus has no
table renderer for good accessibility reasons.

### No `ScheduledChange`

Four exist and four remain. Part X asks for repeal, amendment, commencement and pending future
effect to be checked, and they were: every provision cited is in a consolidated text current at
the date the record was verified, and none carries a commencement date in the future. Brazil's
CF Art. 5º § 3º was **added** by Emenda Constitucional 45 of 2004, which is a past amendment
recorded in the note rather than a scheduled change. Inventing a fifth record for a temporal
situation the model does not have would be worse than having four.

### No restricted claims

Part T predicted this wave should need very few statistics, and it needed none. Twelve pages carry
zero restricted claims, zero rankings and zero prevalence figures. The only numbers on any page
are constitutional periods — 24, 48 and 72 hours — each of which is a quoted rule rather than a
measurement, and each of which is sourced to the constitution that states it.

## 2. Taxonomy findings

### There is no universal limitation architecture, and the phrase that looks universal is the trap

Three constitutions ask whether a limit is "reasonable and justifiable in a free/open and
democratic society". Reading that as a shared test would flatten the three most consequential
differences between them: Canada names no factors, South Africa names five, and Kenya names five
and then adds a validity rule, a core-content bar and an express burden of proof. Six architectures
were found across eleven systems.

### Proportionality is not one doctrine, and the strongest evidence is an absence

The word occurs **zero times** in the European Convention and **zero times** in the Covenant — the
two instruments most often cited for the doctrine. Switzerland then supplies the finding that
matters most for the taxonomy: BV Art. 5(2) requires _all state activity_ to be proportionate,
which means proportionality is not only a rights doctrine even in the system that states it most
plainly.

### Search and seizure is a taxonomy, not a subject

This is the wave's central model decision and it came from rejecting a page title. Once
`/investigations/search-and-seizure` was rejected on Part B grounds, the question of what the page
was actually about had to be answered from the texts — and they answer differently. South Africa
and Kenya define privacy _by_ the searches it forbids and state no warrant rule at all. Japan and
the United States state a warrant rule and never use the word privacy. The split into a home page
and a communications page then followed from evidence rather than from a plan: the Netherlands
requires a judge for communications and not for the home, and Germany does the reverse.

### Silence is four things, and no system carries the same four

The privilege against self-incrimination, a right to remain silent, a duty to tell someone about
it, and a rule about what may be done with a statement obtained anyway. South Africa states silence
at arrest and silence at trial in different subsections. Canada and the United States use opposite
mechanisms — use immunity against a right of refusal. Japan adds a corroboration rule with no
counterpart elsewhere. Germany's constitution contains none of the four.

### Rights-holder scope is a taxonomy question, not a drafting detail

Six patterns, several of them inside one instrument. The sharpest is Irish: Art. 40.4.1° words the
right against deprivation of liberty for the **citizen**, and Art. 40.4.2° — the next subsection —
opens the habeas procedure to **any person**. The right and its remedy have different holders in
consecutive sentences.

## 3. Findings the evidence refused

Recorded because a wave that only reports what it confirmed is not reporting.

| Proposition the research started with                          | What the evidence did                                                                                                                                                                    |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Proportionality is the European limitation test"              | **Refuted.** The word is absent from the Convention text. The formula is "necessary in a democratic society" with a closed list of aims.                                                 |
| "Common-law systems share a self-incrimination model"          | **Refuted.** Canada compels the witness and immunises the testimony; the United States permits refusal.                                                                                  |
| "Civil-law systems require a judge for investigative measures" | **Refuted.** The Dutch Grondwet Art. 12 requires no judicial authorisation for entering a dwelling, and requires identification, a statement of purpose and a written report instead.    |
| "A constitution outranks a treaty inside its own system"       | **Refuted for one system.** Dutch courts may not review statutes against the Constitution (Art. 120) but must decline to apply them against a self-executing treaty provision (Art. 94). |
| "Equality of arms is an ECHR doctrine"                         | **Refuted as to the text.** The phrase occurs zero times. What Art. 6(3)(d) requires is examination "under the same conditions".                                                         |
| A page on the lawful judge and the impartial tribunal          | **Withdrawn.** `courts-during-a-state-of-emergency` already carries GG Art. 101, CF Art. 5º XXXVII and CE Art. 117(5)–(6). Publishing would have duplicated Wave 20.                     |
| A page on police discretion                                    | **Withdrawn.** `why-police-accountability-matters` owns the structural argument and this wave obtained no police-act evidence.                                                           |

## 4. A deferral lifted, and the discipline of lifting it

Wave 11 deferred `equality-of-arms` with a stated ground: "ECHR unreachable". That is a
source-access deferral, not an ownership finding, and the distinction is what makes it liftable.
Wave 21 obtained the Convention text from the official Dutch treaty database and added the Czech
Charter, which supplies Art. 37(3) — "All parties to such proceedings are equal", the only
statement of the principle itself found in any constitutional text across both waves.

The lift is narrow in three ways. Only that one slug moved; every other slug on the Wave 11 list
stays forbidden by the same test. The amendment is documented in the test file and in the Wave 11
plan rather than made silently. And a companion test pins the route to the two records that lifted
it, so removing either fails the build rather than leaving an unearned page standing.

## 5. Safety decisions

Three candidate pages were **not** published for safety reasons rather than for want of a question:
digital investigations and rights, surveillance and legal authority, and bodily samples. The
reasoning is the Wave 16 anti-forensics lesson applied before the fact: the honest version of each
page would have needed operational specificity to say anything a reader could use, and the version
that avoided operational specificity would have said nothing worth publishing.

The three investigation pages that _were_ published carry the strictest scope callouts in the
corpus, and each states what it deliberately does not describe rather than only what it is not.
Mutation proofs M7 and M8 planted warrant-evasion advice and anti-forensics guidance in them; both
were caught by three guards each.
