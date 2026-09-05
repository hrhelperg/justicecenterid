# Wave 22 cannibalization audit — 48 candidates, 7 published

Part F makes this the first publication gate. Every candidate was compared against all 133
published guides, not against a section, and the question asked of each was: **does this answer a
reader question no existing page owns?**

Verdicts: **PUBLISH** · **MERGE** (belongs inside another Wave 22 page) · **ALIAS** (same question,
different words) · **DEFER** (real gap, insufficient evidence or safety-constrained this wave) ·
**REJECT** (the corpus already owns it).

## Summary

| Verdict   | Count  |
| --------- | ------ |
| PUBLISH   | 7      |
| MERGE     | 14     |
| ALIAS     | 4      |
| DEFER     | 12     |
| REJECT    | 11     |
| **Total** | **48** |

Non-publication rate 85%. That is higher than Wave 21's 74%, and the reason is stated in §4.

## The boundary this wave respects

| Layer                                     | Owner                                                                                                                                                  | What it answers                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Constitutional right and its limit        | **Wave 21** — `/investigations/what-privacy-protects-in-law`, `searching-a-home`, `intercepting-communications`; `/justice/how-a-right-can-be-limited` | _Why_ the state's reach is bounded                                                             |
| **Statutory authority and its structure** | **Wave 22**                                                                                                                                            | _What authority exists, over which object, authorised by whom, for how long, with what review_ |
| Forensic science as evidence              | **Wave 16** — `/forensics/*`                                                                                                                           | _What an examination can establish, and whether a court may receive it_                        |
| Review and remedy                         | **Wave 19** — `/justice/what-happens-to-unlawfully-obtained-evidence`, `constitutional-review`, `effective-remedy`                                     | _What follows when authority was exceeded_                                                     |

Wave 21 signposted this wave's territory in its own uncertainty statements: `searching-a-home`
records that "the procedural codes that operate under them — which is where most of the detail of
any real authorisation lives — were not researched", and `intercepting-communications` that "the
interception statutes operating under them were not researched, and in every system here the
operative detail is statutory."

## PUBLISH — 7

| #   | Route                                                            | Reader question it owns                                                                 | Why nothing else owns it                                                                                                                                                                                                                                                                       |
| --- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `/investigations/legal-authority-and-technical-capability`       | If investigators can technically obtain something, does that mean they may?             | The corpus states the principle nowhere. Japan's CCP Art. 197(1) states it as a national rule — compulsory dispositions require a special provision in the Code — and Spain's LECrim 588 bis a(2) bars measures aimed at discovering offences or dispelling suspicion without objective basis. |
| 2   | `/investigations/device-seizure-and-device-examination`          | Officials have taken a device. Does that mean they may read what is on it?              | `device search`, `computer` and `forensic extraction` occur **zero times** in the corpus. Germany's StPO answers by assigning the two acts to different provisions **and different authorities** (§ 94 vs § 110).                                                                              |
| 3   | `/investigations/interception-and-stored-data`                   | Is listening to a conversation the same legal act as obtaining messages already stored? | `stored communications` occurs **zero times**. The Convention splits them across Articles 19/18 and 21; Japan routes interception out of the CCP entirely (Art. 222-2).                                                                                                                        |
| 4   | `/investigations/content-and-communications-data`                | Is who a person contacted treated the same as what they said?                           | `metadata`, `traffic data` and `subscriber` occur **zero times**. The Convention defines subscriber information as data "other than traffic or content data" (Art. 18(3)); US law states the line twice.                                                                                       |
| 5   | `/investigations/preserving-data-and-producing-it`               | If data is "preserved", has anyone read it?                                             | Nothing in the corpus distinguishes the two. Convention Art. 16 preserves for up to 90 days **"to enable the competent authorities to seek its disclosure"** — the disclosure is a separate Art. 18 act.                                                                                       |
| 6   | `/investigations/who-authorises-a-digital-investigative-measure` | Who decides that an investigator may take a digital investigative step?                 | `prosecutor authorisation` occurs **zero times**. Four systems answer differently, and the Convention says "judicial **or other independent** supervision" (Art. 15(2)).                                                                                                                       |
| 7   | `/investigations/scope-duration-and-notification`                | Once a measure is authorised, what bounds it, and is the person ever told?              | Nothing in the corpus covers duration limits or notification duties. Germany's § 100e(3) and § 101 supply a complete architecture; Spain's 588 bis b and 588 bis e another.                                                                                                                    |

## MERGE — 14

| Candidate                                                                                 | Merged into | Reason                                                                                                                                              |
| ----------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `what-is-a-digital-investigation`                                                         | #1          | The honest answer is that it is not a distinct legal category, which is #1's thesis. A separate page would have to pad.                             |
| `digital-investigations-and-the-rule-of-law`                                              | #1          | Same question in the corpus's existing vocabulary.                                                                                                  |
| `why-digital-investigative-powers-need-legal-authority`                                   | #1          | Same question.                                                                                                                                      |
| `digital-evidence-vs-digital-investigation`                                               | #1 and #2   | The distinction is between an object and an act; both pages need it and neither can cede it.                                                        |
| `searching-digital-devices` / `computer-and-phone-searches` / `device-search-and-privacy` | #2          | Part Z names this family as the overlap risk. One page, one question.                                                                               |
| `forensic-examination-after-device-seizure`                                               | #2          | The seizure→examination relationship **is** #2. Method belongs to Wave 16 and is not published here at all.                                         |
| `seizure-vs-search-of-a-device`                                                           | #2          | Identical question.                                                                                                                                 |
| `interception-vs-stored-communications`                                                   | #3          | Identical question.                                                                                                                                 |
| `subscriber-data-vs-traffic-data` / `communications-data-vs-content`                      | #4          | One three-way distinction, one page. Splitting it would leave each half unable to state the line.                                                   |
| `production-orders-for-digital-data`                                                      | #5          | The production order is one half of #5's pair.                                                                                                      |
| `judicial-vs-prosecutorial-authorisation` / `warrants-and-digital-investigations`         | #6          | Both are #6's subject. "Warrant" is also a jurisdiction-specific word this wave declines to universalise.                                           |
| `emergency-authorisation`                                                                 | #6          | Urgency is an authorisation route, not a separate power. Germany's _Gefahr im Verzug_ with three-working-day judicial confirmation is stated on #6. |
| `scope-and-duration-of-authorisations` / `minimisation-and-scope-limits`                  | #7          | Identical subject.                                                                                                                                  |
| `notice-and-secrecy`                                                                      | #7          | Notification and its deferral are one mechanism.                                                                                                    |

## ALIAS — 4

| Candidate                                     | Existing owner                                                                                                 |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `digital-investigation-and-privacy`           | `/investigations/what-privacy-protects-in-law` (Wave 21) — Part F names this one explicitly                    |
| `interception-and-judicial-authorisation`     | `/investigations/intercepting-communications` (Wave 21) for the constitutional half; #6 for the statutory half |
| `remedies-for-unlawful-digital-investigation` | `/justice/what-happens-to-unlawfully-obtained-evidence` + `/justice/effective-remedy` (Wave 19)                |
| `surveillance-and-proportionality`            | `/justice/what-proportionality-requires` (Wave 21)                                                             |

## DEFER — 12

Real gaps. The evidence or the safety position was insufficient **this wave**, and that is stated
rather than papered over.

| Candidate                                      | Why deferred                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `what-is-covert-surveillance`                  | Part K permits deferral where intelligence law is too broad for a precise institutional guide, and it is. This wave researched **criminal-procedure** powers only. A surveillance page that did not separate intelligence authority from criminal procedure would commit the error test 11 exists to prevent, and separating them properly needs intelligence-law research not done here. |
| `digital-surveillance-and-legal-authority`     | Same.                                                                                                                                                                                                                                                                                                                                                                                     |
| `targeted-surveillance-vs-general-monitoring`  | The principle is established — Spain's 588 bis a(2) bars measures to "prevent or discover offences or dispel suspicions without objective basis" — but on **one** jurisdiction. Carried as a sourced finding on #1 rather than as a comparative page.                                                                                                                                     |
| `location-tracking-and-the-law`                | Germany's § 100g(1) draws a precise line: stored (_retrograd_) location data only under the stricter § 100g(2) conditions, other location data only prospectively or in real time. **One jurisdiction is not a comparative page.** The finding is carried on #4, where it belongs as a traffic-data question.                                                                             |
| `remote-access-and-digital-investigation`      | Three sources exist — Convention Art. 19(2), StPO § 110(3) sentence 2, StPO § 100b — but they describe two different acts (extending a search to accessible storage; intruding into a system). Carried on #2 and #6 respectively. A page resting on two provisions from one country plus a treaty would overstate.                                                                        |
| `cloud-data-and-investigative-authority`       | Needs the cross-border question below, and the same evidence.                                                                                                                                                                                                                                                                                                                             |
| `cross-border-digital-evidence`                | Part P permits deferral. The Convention's Second Additional Protocol on enhanced co-operation and electronic evidence was located but **not read**, and the EU e-Evidence Regulation was not researched.                                                                                                                                                                                  |
| `foreign-service-providers-and-evidence`       | Same, and Part P bars procedural instruction for obtaining data from providers, which is most of what a thin version would contain.                                                                                                                                                                                                                                                       |
| `mutual-legal-assistance-for-digital-evidence` | Same.                                                                                                                                                                                                                                                                                                                                                                                     |
| `data-retention`                               | A general retention mandate is a different instrument from a preservation order, and the retention regimes are in flux across the systems researched. Not established well enough to publish; the **distinction** from preservation is stated on #5.                                                                                                                                      |
| `independent-review-of-surveillance`           | Germany's § 101(7) supplies a review route; that is one system, and it is stated on #7. A comparative page on review bodies needs research not done.                                                                                                                                                                                                                                      |
| `retention-and-deletion-as-legal-safeguards`   | Deletion regimes were not researched.                                                                                                                                                                                                                                                                                                                                                     |

## REJECT — 11

The corpus already owns the question.

| Candidate                                           | Owner                                                                                                                                                      |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `privacy-and-criminal-investigations`               | `/investigations/what-privacy-protects-in-law`                                                                                                             |
| `home-searches-and-legal-safeguards`                | `/investigations/searching-a-home`                                                                                                                         |
| `interception-and-legal-authority` (constitutional) | `/investigations/intercepting-communications`                                                                                                              |
| `who-investigates-digital-crime`                    | `/investigations/who-investigates-crime`, `investigative-jurisdiction`                                                                                     |
| `digital-evidence-in-court`                         | `/forensics/expert-evidence-in-court`, `evidence-integrity-and-admissibility`                                                                              |
| `chain-of-custody-for-digital-evidence`             | `/forensics/evidence-integrity-and-admissibility`                                                                                                          |
| `digital-forensics-methods`                         | Rejected on safety grounds and owned in principle by `/forensics`; method detail is out of scope in both sections' declared `outOfScope`.                  |
| `unlawful-digital-evidence`                         | `/justice/what-happens-to-unlawfully-obtained-evidence`                                                                                                    |
| `proportionality-in-digital-investigation`          | `/justice/what-proportionality-requires`                                                                                                                   |
| `digital-rights-and-the-constitution`               | `/justice/who-a-constitutional-right-belongs-to`, `how-a-right-can-be-limited`                                                                             |
| `can-police-search-your-phone`                      | Rejected on Part Z grounds **as a title**. The subject is published as #2 under a name that does not adopt a sensational frame or one system's vocabulary. |

## 4. Why the non-publication rate is so high

Two reasons, and neither is caution for its own sake.

**The corpus is now deep enough that most digital questions have an analogue owner.** Remedies,
proportionality, admissibility, privacy, the home, competence to investigate and expert evidence
are all owned. What was genuinely missing was not "digital" content but the **statutory authority
layer** — and that turns out to be seven questions, not thirty.

**This wave's subject has a safety floor the others did not.** Twelve of the deferrals are
evidence-driven, but three — covert surveillance, digital surveillance authority, and forensic
method — would each have required either operational specificity this platform refuses to publish
or an intelligence-law boundary this wave did not research. Part K and Part S both authorise
declining, and declining with the reason recorded is the honest form of that.
