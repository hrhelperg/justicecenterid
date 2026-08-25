# Wave 8 — criminal investigations: research plan and source feasibility

## What this wave opens, and what it must not consume

Wave 8 opens the criminal-investigation pillar. Three neighbouring clusters are explicitly
reserved and were treated as boundaries, not as material:

| Reserved for | Owned today by | Wave 8's permitted contact |
| --- | --- | --- |
| Prosecution (a later wave) | `/prosecution/what-does-a-prosecutor-do` | Prosecutors appear only as actors *in* investigation. Charging standards, discretion, plea bargaining, prosecution ethics and prosecution independence are untouched |
| Courts (Wave 9) | `/courts/what-do-courts-do` | Judges appear only where they authorise, direct or review investigative acts. No court taxonomy |
| Forensics / evidence | `/forensics/what-is-forensic-science`, `/glossary/chain-of-custody`, `/glossary/evidence` | Named and linked, never re-explained |

## The architecture already exists

`/investigations/[slug]` is already wired to every guide carrying `section: 'investigations'`,
and `/investigations` is already a `SectionPage` with its own `keyIdeas`, `variationNote` and —
importantly — an `outOfScope` list that already names investigative technique, surveillance
capability and anything assisting evasion.

**Wave 8 therefore creates no route file, no new hub and no parallel taxonomy.** Adding a guide
with that section value routes it automatically. Part A is satisfied by construction, and a
`/criminal-investigation` tree would have been strictly worse than what was already built.

The section's existing `outOfScope` list is the safety boundary this wave inherits rather than
invents.

## Source feasibility, established before authoring

The decisive finding of the source survey: **all 32 country dossiers already carry an
`investigations` module**, each with country-scoped, content-confirmed sources. The comparative
material this wave needs is largely already verified.

| Country | Existing investigation sources | Supports |
| --- | --- | --- |
| France | `fr-cpp-art-12`, `fr-justice-parquet` | CPP Art. 12; police judiciaire as a legal *function*; prosecutor direction; referral to an investigating judge |
| Germany | `de-stpo-160`, `de-stpo-163` | § 160(1)–(2) prosecution's duty incl. exculpatory; § 163(1) police's own duty |
| Ireland | `ie-garda-act-2005`, `ie-dpp` | Garda investigation; DPP charging decision on indictment |
| Japan | `jp-code-criminal-procedure`, `jp-npa-police-of-japan-2020` | Police as judicial police officials; prosecutor may investigate; prosecutor alone charges |
| Brazil | `br-cpp-1941`, `br-cf-1988`, `br-pf-competencias` | CPP Art. 4 polícia judiciária; Art. 12 inquérito; Const. Art. 129 I |
| Spain | `es-constitution`, `es-lofcs` | Which force investigates where; judicial and prosecutorial direction |
| Italy | `it-constitution`, `it-legge-121-1981` | Const. Art. 109; Law 121/1981 Art. 17; GIP |
| Belgium | `be-constitution`, `be-ejustice-justice` | Two-track: prosecutor enquiry, investigating judge for intrusive measures |
| Portugal | `pt-cpp`, `pt-loic` | Two-phase inquérito / instrução |
| Argentina | `ar-cppf` | Accusatory reform replacing the investigating-judge model |
| Kenya | `ke-constitution` | Art. 157(4) DPP may direct the IG; Art. 245(4) no one else may |
| United States | `us-fbi-28usc533`, `us-bjs-csllea-2018`, `us-usmarshals-duties`, `us-const-amend-10` | Fragmentation; enumerated federal competence |
| New Zealand | `nz-policing-act`, `nz-crown-law` | Police-led investigation, separate prosecution |
| Netherlands | `nl-gov-police`, `nl-ejustice-professions` | Investigating judge noted, powers not researched |

**Reuse over addition was the correct answer here**, and the brief's instruction to prefer
existing verified sources is what this wave followed. Two sources were added, both because a
claim was made that no existing source carried.

## The two new sources, and why each was necessary

1. **`de-stpo-162-ermittlungsrichter`** — the authoritative German text of § 162 StPO, headed
   *Ermittlungsrichter*. Needed because the investigating-judge page makes a claim about what the
   German judge does (acts on the prosecution's application; examines legal permissibility) that
   `de-stpo-160` and `de-stpo-163` do not cover.
2. **`de-stpo-english-translation`** — the Ministry's own English rendering, cited for one narrow
   fact: it translates § 162's heading as **"Investigating judge"**. That is the evidence that the
   English phrase is officially applied to an office quite unlike the French one.

## The error this wave nearly shipped

The first working hypothesis was that Germany, as an archetypal civil-law system, has **no**
investigating judge — which would have been a clean proof that the label is not universal in
civil-law systems.

Reading § 162 disproved it. Germany does have an office the Ministry's own English text calls an
*investigating judge*. What differs is not existence but **function**: § 162(1) has the
prosecution *submit applications* to the court, and § 162(2) requires the court only to examine
"ob die beantragte Handlung nach den Umständen des Falles gesetzlich zulässig ist" — whether the
requested act is legally permissible. The German judge checks legality on application. The French
and Belgian judge conducts the investigation.

That is a better finding than the hypothesis, and it is the reason the investigating-judge page
exists. It is recorded here because a research plan that hides its corrections is not a record.

## Method

Function first, label second — the same discipline as Wave 7. For each system the questions were:
who holds legal responsibility for the investigation; who performs the acts; who may direct whom;
who authorises intrusive measures; who decides the charge. Only then was the system compared to a
model name.

## Safety method

Every page was drafted against the section's existing `outOfScope` list and then re-read
adversarially for operational content. The rule applied throughout: describe **who** may do
something and **what constrains them**, never **how** it is done or **what threshold triggers
it**. A test suite asserts the absence of evasion, concealment, forensic-defeat and
threshold-exploitation content across every new page.
