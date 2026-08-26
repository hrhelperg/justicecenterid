# Wave 20 cannibalization matrix — public safety, emergency powers and civil protection

Branch `feat/knowledge-expansion-wave-20`. Written 2026-08-26.

Forty-one candidate questions were audited against the merged corpus before any page was written.
The audit was performed by first mapping **161 existing records** — every published guide, plus
the glossary, institution-type and profession registries — recording for each the reader question
it already owns and whether it already touches emergency, public-safety, civil-protection,
military-role, proportionality, necessity, derogation, public-order or justice-continuity
territory.

## 1. What the corpus already owns

**63 of 161 records** returned some adjacency. Read carefully, most are near-misses, and the
distinction matters more than the count: a page that mentions "public order" as an abstract reason
for having courts has not taken the territory, and treating it as though it had would suppress a
page the corpus needs.

The genuinely load-bearing prior claims, each of which Wave 20 must link to rather than restate:

| Existing route                                     | What it already owns                                                                                                                                                | Consequence for Wave 20                                                                                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/law-enforcement/police-use-of-force`             | **Necessity, proportionality and precaution** as the international principles governing force                                                                       | No Wave 20 page may re-derive proportionality. A separate `emergency-powers-and-proportionality` page is barred.                                                                                 |
| `/justice/limits-on-public-power`                  | The four recurring limits, the residue of things that may not be done at all, Brazil Art. 5º XXXVII (no exceptional courts), Germany Art. 19(2) (essential content) | Wave 20 links here for the absolute-limits argument. **It also explicitly disclaims proportionality doctrine** — a real gap, but one the use-of-force page partly holds.                         |
| `/justice/why-government-is-bound-by-law`          | The answer to the "being bound by law stops decisive government" objection, verbatim: _"These provisions govern how power is exercised, not whether."_              | Wave 20's capacity-versus-constraint framing must cite this page, not re-argue it.                                                                                                               |
| `/justice/reviewing-detention`                     | Habeas mechanics across four systems                                                                                                                                | It **disclaims emergency detention twice** — the only two occurrences of "emergency" in the entire guides directory. That disclaimer is an invitation, not a barrier.                            |
| `/law-enforcement/police-command-and-coordination` | Command versus coordination, and that mutual assistance confers no authority                                                                                        | An incident-command page is barred. An **escalation-of-legal-responsibility** page is not.                                                                                                       |
| `/law-enforcement/arrest-and-detention`            | Arrest thresholds                                                                                                                                                   | Flags the administrative/criminal detention distinction as one it deliberately does not develop, and cites the ICCPR **without its derogation article**.                                         |
| `/institutions/constitutional-court`               | Who reviews what, and the models                                                                                                                                    | **Zero emergency content** — recorded by the audit as the single most consequential gap, since a constitutional court is the natural venue for review of an emergency decree.                    |
| `/defence/why-the-right-to-defence-matters`        | Rejects the defence-versus-public-safety framing, twice                                                                                                             | A `defence-rights-during-emergencies` page would restate it. Merged away.                                                                                                                        |
| `/glossary/public-safety` (hub-only, unrouted)     | One sentence defining the field and naming civil protection as a member                                                                                             | The strongest existing hit in the whole corpus is a single sentence. **`/glossary/public-safety` must remain a 404** — `scripts/route-matrix.mjs` and `e2e/wave3-routes.spec.ts` both assert it. |

Two traps the audit caught that a keyword scan would have failed:

- **"Curfew" is already in the corpus twice, and both are the sentencing sense** — a community-order
  requirement imposed on an individual by a court. Not an emergency measure. A keyword audit would
  have reported coverage that does not exist.
- **`/prosecution/how-prosecution-systems-are-organised` mentions an army** — as a figure of speech
  about national organisation ("one institution, nationally organised, in the way it has an army or
  a central bank"). Not a military-role claim.

## 2. The decision matrix

Vocabulary as required: PUBLISH · MERGE · ALIAS · DEFER · REJECT.

| Candidate                                        | Decision                                                | Collides with                                                                                                   | Reasoning (condensed)                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access-to-courts-during-emergencies`            | **PUBLISH**                                             | /justice/access-to-justice, /courts/why-courts-matter, /justice/why-government-is-bound-by-law, /justice/why-c… | The corpus has an access page (/justice/access-to-justice) but it owns access as an ordinary constitutional entitlement — Kenya's guarantee, Brazil's Art. 5º XXXV bar on legislating the route away, Germany's Art. 19(4) recourse. It says nothing about whether that route survives a declaration, whethe… |
| `detention-during-emergencies`                   | **PUBLISH**                                             | /justice/reviewing-detention, /law-enforcement/arrest-and-detention, /corrections/what-remand-detention-is, /d… | The corpus does not merely leave this open — it explicitly fences it out. /justice/reviewing-detention disclaims emergency detention twice, in the only two occurrences of the word 'emergency' in the entire guides directory, and /law-enforcement/arrest-and-detention flags the administrative/criminal … |
| `emergency-management-institutions`              | **PUBLISH**                                             | /law-enforcement/police-command-and-coordination (owns command-versus-coordination and that mutual assistance … | The corpus explicitly warns that /law-enforcement/police-command-and-coordination already owns who is in charge of a multi-agency operation, so an incident-command page is barred. This page survives only by owning something that page cannot: a statutory threshold at which legal responsibility for an… |
| `how-emergency-powers-end`                       | **PUBLISH**                                             | /justice/legal-certainty, /justice/effective-remedy                                                             | A genuinely separate question from who declares: the time dimension and the residue. Two findings carry it, and neither is anywhere in the corpus. First, duration limits attach to the declaration, not to what was done under it — so a lapsed declaration does not by itself undo a detention, a prohibit… |
| `judicial-control-of-emergency-powers`           | **PUBLISH**                                             | /courts/appeal-and-judicial-review-are-different, /glossary/judicial-review, /courts/what-a-reviewing-court-ca… | This is exactly the case the wave brief describes as justifying itself. The corpus owns generic judicial review twice (/glossary/judicial-review: legality not wisdom, and the non-portability of the term; /courts/appeal-and-judicial-review-are-different: review versus appeal), and owns remedial outpu… |
| `judicial-review-during-emergencies`             | **PUBLISH**                                             | /courts/appeal-and-judicial-review-are-different, /glossary/judicial-review, /justice/reviewing-detention, /in… | This survives the wave's own test case only in the narrow form the rule describes, and it does. It owns neither what judicial review is (/glossary/judicial-review) nor the review-versus-appeal boundary (/courts/appeal-and-judicial-review-are-different), but a question no existing page raises: that a… |
| `military-assistance-to-civil-authorities`       | **PUBLISH**                                             | /institutions/gendarmerie, /law-enforcement/police-command-and-coordination, /courts/specialized-courts         | Nothing in 109 pages addresses domestic deployment. /institutions/gendarmerie is the corpus's military page and its own record confirms it holds military status only, 'not any emergency deployment'; /courts/specialized-courts holds military courts; /law-enforcement/police-command-and-coordination ho… |
| `national-vs-local-emergency-authority`          | **PUBLISH**                                             | /law-enforcement/how-policing-is-divided-between-levels, /law-enforcement/police-command-and-coordination, /la… | how-policing-is-divided-between-levels is the nearest existing page and asks a static question — which tier of government polices — and its own record confirms it does NOT address emergency powers, federal intervention or disaster response. This candidate's question is dynamic and structurally diffe… |
| `non-derogable-rights`                           | **PUBLISH**                                             | /justice/legality-and-non-retroactivity, /justice/what-is-due-process, /defence/representing-yourself, hub-onl… | This is the largest genuine hole in the 109 pages: the corpus cites ICCPR Art. 14 in its fair-trial glossary entry and Art. 4 appears nowhere at all, so the mechanism by which a state may lawfully step back from treaty obligations is entirely unheld. The owned finding is that derogation is a procedu… |
| `parliamentary-control-of-emergency-powers`      | **PUBLISH**                                             | /justice/why-justice-systems-need-oversight, /justice/why-government-is-bound-by-law                            | The corpus is almost silent on legislatures. /justice/why-justice-systems-need-oversight lists parliamentary scrutiny as one item in a catalogue of mechanisms for examining justice institutions, and /justice/why-government-is-bound-by-law is about courts and constitutional text binding the executive… |
| `police-and-civil-protection`                    | **PUBLISH**                                             | /law-enforcement/why-societies-need-law-enforcement, /law-enforcement/police-and-law-enforcement-difference, g… | The corpus names civil protection exactly twice — one clause in why-societies-need-law-enforcement saying it sits inside the police in some countries and in separate institutions in others, and one sentence in the unrouted 'public safety' glossary entry listing it as a member of the field. Both name… |
| `what-is-a-state-of-emergency`                   | **PUBLISH**                                             | /justice/limits-on-public-power, /justice/what-is-the-rule-of-law, hub-only glossary entry 'public safety'      | The distinct question is definitional and mechanical: a declaration is an instrument that unlocks an enumerated set of powers over a named area for a named period, and the finding that carries the page is that 'state of emergency' is not one thing — Spain has three graded regimes and Brazil two, and… |
| `what-is-civil-protection`                       | **PUBLISH**                                             | glossary hub-only entry 'Public safety' (names civil protection in one clause), hub-only coast-guard summary (… | This is the corpus's strongest recurring genre — a translation and false-friend problem with legal consequences, the same shape as /investigations/judicial-police and /defence/how-defence-is-funded. Two English phrases that sound interchangeable denote, in the instruments, a wartime protection regim… |
| `what-is-public-safety`                          | **PUBLISH**                                             | /law-enforcement/police-and-law-enforcement-difference, /law-enforcement/why-societies-need-law-enforcement, g… | The corpus names this field exactly once, in a hub-only glossary sentence that fails the publication gate, and the adjacency notes say explicitly that this is a naming claim to build on rather than territory already held. The distinct question is not 'what do enforcement bodies do' — /law-enforcemen… |
| `who-can-declare-a-state-of-emergency`           | **PUBLISH**                                             | /justice/why-government-is-bound-by-law, /institutions/constitutional-court                                     | A distinct question from what a declaration is: who holds the power to make one, and whose consent gates it. The finding that makes it a page rather than a list is that the approval requirement tracks the severity of the regime rather than the identity of the declaring body — the same Spanish Govern… |
| `civil-protection-and-civil-defence`             | **MERGE** → `what-is-civil-protection`                  | what-is-civil-protection                                                                                        | Identical territory. The distinction from civil defence is the sharpest thing the civil-protection page has to say, and the definition is unusable without it — splitting them yields one page that defines a term without distinguishing it and one that distinguishes a term without defining it. One page… |
| `civilian-and-military-emergency-roles`          | **MERGE** → `military-assistance-to-civil-authorities`  | /institutions/gendarmerie, /law-enforcement/police-and-law-enforcement-difference, /law-enforcement/how-polici… | The framing is too loose to own anything. 'Civilian and military roles' invites restating the military-status-versus-mission point that /institutions/gendarmerie holds explicitly ('Military status is a statement about status, not about mission'), which police-and-law-enforcement-difference and the g… |
| `courts-during-emergencies`                      | **MERGE** → `access-to-courts-during-emergencies`       | access-to-courts-during-emergencies, /courts/why-courts-matter                                                  | 'Courts during emergencies' and 'access to courts during emergencies' are the same reader question asked from the institution's side and the person's side. A reader does not ask whether courts are functioning as an abstraction; they ask whether a court is reachable. Split into two pages, one would i… |
| `defence-rights-during-emergencies`              | **MERGE** → `detention-during-emergencies`              | /defence/why-the-right-to-defence-matters, /defence/lawyer-client-confidentiality, /defence/representing-yours… | Every argument such a page would make is already made. /defence/why-the-right-to-defence-matters opens by rejecting the defence-versus-public-safety framing and repeats the rejection as a misconception entry. /defence/lawyer-client-confidentiality already owns the pattern of a narrow security carve-… |
| `disaster-response-institutions`                 | **MERGE** → `emergency-management-institutions`         | emergency-management-institutions, what-is-civil-protection                                                     | A near-synonym of emergency-management-institutions with no question of its own — 'who responds' and 'who is responsible' are the same enquiry, and answering them on two routes would split one page's evidence across two. As written it also risks the worst failure mode available here: a list of named… |
| `emergency-command-and-coordination`             | **MERGE** → `police-and-civil-protection`               | /law-enforcement/police-command-and-coordination, /law-enforcement/how-justice-institutions-work-together       | The corpus record for /law-enforcement/police-command-and-coordination states outright that it already owns the 'who is in charge during a multi-agency operation' question and flags that an emergency incident-command page would collide with it. That page already draws the command-versus-coordination… |
| `emergency-powers-and-necessity`                 | **MERGE** → `judicial-review-during-emergencies`        | /law-enforcement/police-use-of-force, /corrections/when-a-court-may-imprison, /corrections/custodial-and-non-c… | Necessity is triply held already. /law-enforcement/police-use-of-force sets out the three elements of necessity in law enforcement; /corrections/when-a-court-may-imprison is the corpus's necessity-as-statutory-threshold page and owns the threshold-versus-principle distinction outright; /corrections/… |
| `emergency-powers-and-parliament`                | **MERGE** → `who-can-declare-a-state-of-emergency`      | /justice/why-government-is-bound-by-law                                                                         | This answers the same reader question as who-can-declare from the other end of the same provision. Authorisation, renewal approval, the power to fix the extent and conditions of the declaration, the bar on dissolving the chamber and the automatic convocation of it are all clauses of Spain Art. 116 a… |
| `emergency-powers-and-proportionality`           | **MERGE** → `judicial-review-during-emergencies`        | /law-enforcement/police-use-of-force, /justice/limits-on-public-power, /corrections/what-sentencing-is-for      | Standing alone this collides head-on with the corpus's proportionality holdings. /law-enforcement/police-use-of-force owns necessity, proportionality and precaution as limiting principles and the argument that limits are constitutive of the power; /corrections/what-sentencing-is-for owns proportiona… |
| `emergency-powers-and-rights`                    | **MERGE** → `non-derogable-rights`                      | /justice/limits-on-public-power, /justice/what-is-due-process, hub-only glossary entry 'fair trial'             | As a route of its own this is the cannibalisation pattern exactly — rights, with 'during emergencies' appended — and it cannot be answered without the derogation machinery that non-derogable-rights must set out anyway. The suspendable half and the non-suspendable half are two readings of the same pr… |
| `how-public-safety-systems-are-organised`        | **MERGE** → `what-is-public-safety`                     | /law-enforcement/why-societies-need-law-enforcement (already states the variable-placement finding), /law-enfo… | The finding this page would carry is already asserted in the corpus: /law-enforcement/why-societies-need-law-enforcement states that traffic, immigration, customs, coast guard and civil protection sit inside the police in some countries and in entirely separate institutions in others. Building a rou… |
| `national-regional-local-emergency-coordination` | **MERGE** → `emergency-management-institutions`         | /law-enforcement/police-command-and-coordination, /law-enforcement/how-policing-is-divided-between-levels, eme… | As a standalone it restates two existing pages with 'during an emergency' appended — the tier-allocation question is held by /law-enforcement/how-policing-is-divided-between-levels and the assistance-does-not-confer-authority point is held verbatim by /law-enforcement/police-command-and-coordination… |
| `oversight-of-emergency-powers`                  | **MERGE** → `parliamentary-control-of-emergency-powers` | /justice/why-justice-systems-need-oversight, /law-enforcement/how-police-are-held-to-account, judicial-control… | An umbrella page here would be a catalogue of mechanisms — courts, legislature, ombuds, inspectorates — which is precisely the structure /justice/why-justice-systems-need-oversight and /law-enforcement/how-police-are-held-to-account already own, with 'during an emergency' appended. Once the two real… |
| `police-fire-and-rescue`                         | **MERGE** → `police-and-civil-protection`               | police-and-civil-protection (this wave), /law-enforcement/police-and-law-enforcement-difference                 | This answers the same reader question as police-and-civil-protection — which body does the protecting, and is it the police. Standing alone it would be a catalogue of institutional variants (municipal fire service, state fire service, fire service inside the police, volunteer corps) with no argument… |
| `prevention-vs-emergency-response`               | **MERGE** → `what-is-public-safety`                     | what-is-public-safety, what-is-civil-protection                                                                 | A conceptual pairing rather than a question a reader types, and the corpus standard is pages anchored in legal text. The substance that is real — that prevention work is typically regulatory (inspection, standards, licensing, warning) while response work rests on operational powers of a different le… |
| `public-safety-vs-law-enforcement`               | **MERGE** → `what-is-public-safety`                     | /law-enforcement/police-and-law-enforcement-difference, /law-enforcement/why-societies-need-law-enforcement, w… | This is the boundary half of the definitional question and cannot be separated from it: any honest 'what is public safety' page has to say what it is not, and any honest 'public safety vs law enforcement' page has to define both terms first. Publishing both would produce two pages competing for the … |
| `remedies-during-emergencies`                    | **MERGE** → `judicial-control-of-emergency-powers`      | /justice/effective-remedy, /courts/what-a-reviewing-court-can-do, /justice/appeal-and-the-rule-of-law           | This is the clearest cannibalization case in the chunk. /justice/effective-remedy already owns what a forum can concretely give — release from unlawful detention, review of an official decision, written reasons, invalidity of inconsistent law, indemnity — and /courts/what-a-reviewing-court-can-do al… |
| `temporary-emergency-powers`                     | **MERGE** → `how-emergency-powers-end`                  | /justice/legal-certainty                                                                                        | Identical question to how-emergency-powers-end, phrased from the front instead of the back. Fixed maximum periods, extension requiring a fresh decision and automatic lapse are the mechanisms by which emergency powers end; a separate page would set out the same Spanish and Brazilian duration clauses … |
| `why-emergency-powers-are-temporary`             | **MERGE** → `parliamentary-control-of-emergency-powers` | parliamentary-control-of-emergency-powers, /justice/legal-certainty                                             | Tempting as a standalone, because the textual material is concrete — fixed maxima, renewal votes, automatic lapse, prospective-only effect. But it draws on exactly the same provisions as parliamentary control (Brazil Art. 136 §2, Spain Art. 116, South Africa s. 37(2)), and the reason those durations… |
| `why-emergency-powers-exist`                     | **MERGE** → `what-is-a-state-of-emergency`              | /justice/why-government-is-bound-by-law, /justice/what-is-the-rule-of-law                                       | On its own this is thin and half-answered elsewhere. The containment argument — that the alternative to written emergency powers is not the absence of emergency action but unrecorded emergency action — is one paragraph, and its main rhetorical move is already owned by /justice/why-government-is-boun… |
| `why-public-safety-institutions-matter`          | **MERGE** → `what-is-public-safety`                     | /law-enforcement/why-societies-need-law-enforcement, /justice/why-justice-systems-need-oversight                | The 'why this function exists at all' genre is already occupied for enforcement by /law-enforcement/why-societies-need-law-enforcement, which owns the absence argument, the five categories of work, and the legitimacy conditions. Re-running that argument with a wider set of bodies produces no reader … |
| `emergency-powers-and-constitutional-order`      | **DEFER**                                               | /justice/why-government-is-bound-by-law, /justice/limits-on-public-power, /justice/what-is-the-rule-of-law, an… | The question is good and is not answered anywhere in the 109 pages. The problem is placement. As written this is the wave's anchor page — what a state of emergency is as a constitutional instrument — and that is almost certainly the territory a sibling chunk is being asked to publish under a name li… |
| `judicial-authorisation-during-emergencies`      | **DEFER**                                               | /investigations/investigating-judge, the hub-only glossary warrant entry, /defence/lawyer-client-confidentiali… | A real and distinct question — prior authorisation is a different safeguard from after-the-fact review, and no page covers what happens to it under exceptional conditions. But the corpus has no routed page on warrants at all (the warrant entry is hub-only and fails the publication gate), so this pag… |
| `emergency-powers-and-the-rule-of-law`           | **REJECT**                                              | /justice/what-is-the-rule-of-law, /justice/why-government-is-bound-by-law, /justice/limits-on-public-power      | This is the archetype the wave rule forbids: an existing concept with 'during emergencies' appended. Its only available thesis — that emergency powers are a legal regime rather than a hole in law, so the government remains bound while exercising them — is precisely what /justice/why-government-is-bo… |
| `prosecution-during-emergencies`                 | **REJECT**                                              | /prosecution/how-charging-decisions-work, /prosecution/prosecutorial-discretion-and-legality, /prosecution/why… | The prosecution section owns the charging threshold, the legality/opportunity axis, the taxonomy of independence, accountability mechanisms, objectivity duties, and the presumption stated from the institution's side. A page here would either restate one of those with 'during an emergency' appended, … |
| `public-order-emergencies`                       | **REJECT**                                              | /professions/patrol-officer, /law-enforcement/police-use-of-force, /law-enforcement/how-policing-is-divided-be… | This is the cannibalisation pattern the wave rule names. Ordinary public order is already held in five places: patrol-officer owns 'public order and the policing of events and gatherings' as routine demand and its record warns a new page must not restate it; police-use-of-force owns necessity, propo… |

**First-pass tally: 15 PUBLISH · 21 MERGE · 0 ALIAS · 2 DEFER · 3 REJECT.**

MERGE is the most common answer, which is the expected shape. Most of the brief's candidate list
is a decomposition of about a dozen real reader questions into forty thin ones.

## 3. Cross-chunk consolidation — collisions the first pass could not see

The forty-one candidates were classified in four independent groups so that no single pass could
rationalise a whole cluster into existence. That independence has a cost: a classifier could not
see what a sibling was publishing. One of them said so explicitly, deferring
`emergency-powers-and-constitutional-order` on the ground that _"this is almost certainly the
territory a sibling chunk is being asked to publish"_ — which was correct.

Reconciling the four sets against each other produces three collisions:

### Collision 1 — the same question published twice

| Candidate                              | Chunk            | Owned question                                                                                                                       |
| -------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `judicial-review-during-emergencies`   | emergency-powers | "what exactly can a court examine — the declaration itself, or only the measures taken under it?"                                    |
| `judicial-control-of-emergency-powers` | accountability   | "Can a court be asked whether the emergency declaration itself was lawful, or only whether a particular measure taken under it was?" |

These are the same question in two phrasings, and both were independently allocated the same
load-bearing evidence (South Africa s. 37(3), which separates validity of the declaration, of an
extension, and of action taken in consequence). **Consolidated into one page.**

### Collision 2 — the authorisation chain split three ways

`who-can-declare-a-state-of-emergency` ("who is legally able to declare, and does anyone else have
to agree before or after?"), `parliamentary-control-of-emergency-powers` ("who has to approve it —
and what makes it stop?") and `how-emergency-powers-end` all draw on the same three provisions:
Spain CE Art. 116, Brazil CF Arts. 136–138, South Africa s. 37(2).

Two pages survive, split on a real seam rather than a verbal one:

- **the authorisation chain** — who declares, who must agree, and when. Absorbs
  `parliamentary-control-of-emergency-powers` and `emergency-powers-and-parliament`.
- **the time dimension and the residue** — duration, renewal, lapse, and what happens to measures
  already taken when the declaration ends. Absorbs `temporary-emergency-powers`,
  `why-emergency-powers-are-temporary` and the non-judicial residue of
  `oversight-of-emergency-powers`.

The seam is load-bearing and is itself a finding: **duration limits attach to the declaration, not
to what was done under it.**

### Collision 3 — the institutional cluster

`police-and-civil-protection`, `emergency-management-institutions` and
`national-vs-local-emergency-authority` were each allocated German GG Art. 35 as principal
evidence. Three pages quoting one article to make adjacent points is the padding the brief
forbids. They consolidate on the seam between **which function** and **which level**.

## 4. Rejections, with reasons

- **`emergency-powers-and-the-rule-of-law`** — REJECT. The thesis page for the whole wave, and
  therefore the page most likely to be an essay rather than a reference entry. Every proposition it
  would make is either owned by `/justice/what-is-the-rule-of-law` and
  `/justice/why-government-is-bound-by-law`, or is the framing that belongs in every Wave 20
  page's own text rather than in a page of its own.
- **`prosecution-during-emergencies`** — REJECT, and on the strongest available ground: _"this is
  not an evidence problem, it is an absence of a question."_ No researched text makes the charging
  decision work differently under a declaration, and the two live issues nearby (trial by a forum
  constituted for the emergency; official answerability for acts done under emergency powers) are
  already allocated to other pages.
- **`public-order-emergencies`** — REJECT. Sits on the boundary the brief's own safety section
  polices, and the material that is not operational is held by `/law-enforcement/police-use-of-force`
  and `/law-enforcement/police-jurisdiction`.

## 5. Deferrals

- **`judicial-authorisation-during-emergencies`** — DEFER. A real and distinct question (prior
  authorisation is a different safeguard from after-the-fact review), but the corpus has **no
  routed page on warrants at all** — `/glossary/warrant` is hub-only and fails the publication
  gate — so the page would have to build its own baseline before reaching its subject. Held.
- **`emergency-powers-and-constitutional-order`** — DEFER, on placement rather than merit, for the
  reason given above.

## 6. The rule applied throughout

A candidate that restates an existing concept with "during emergencies" appended is
cannibalization, not knowledge. Every PUBLISH decision below had to name a reader question that no
existing page answers, and name the primary text that would carry it. Where the second could not
be produced, the decision became DEFER — not PUBLISH-and-hope.

The publish set is finalised against actual retrieved evidence in
`public-safety-emergency-model-findings.md`. A candidate that survived this audit but whose
evidence did not arrive does not ship.
