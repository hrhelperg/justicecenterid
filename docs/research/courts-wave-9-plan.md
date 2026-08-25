# Wave 9 — courts and judicial systems: research plan and source feasibility

## What this wave opens, and what it must not consume

Wave 9 opens the courts pillar. Two neighbouring clusters are reserved:

| Reserved for | Owned today by | Wave 9's permitted contact |
| --- | --- | --- |
| Prosecution (Wave 10) | `/prosecution/what-does-a-prosecutor-do` | Prosecutors appear only as one of three functions in the adjudicative model. No charging standards, discretion, or prosecution independence |
| Defence & legal representation (a later wave) | nothing yet | Defence rights are **acknowledged** — counsel, challenging evidence, hearing rights — because they explain why courts matter. No page explains how defence works |

Wave 8's boundary test asserts that no investigations page discusses court hierarchy, trial
procedure or appellate structure. Wave 9 owns that material, and the assertion must keep passing:
the courts content goes into `/courts`, never back into `/investigations`.

## The architecture already exists

`/courts/[slug]` is already wired to every guide carrying `section: 'courts'`, and `/courts` is
already a `SectionPage`. Wave 9 creates no route file and no competing hub. Part A is satisfied
by construction.

## The cannibalization constraint, established before authoring

The glossary already owns **seven** of the terms in the Part B candidate list: `court`,
`judicial-independence`, `judicial-review`, `appeal`, `jurisdiction`, `due-process` and
`rule-of-law`. `/professions/judge` owns the judicial role — including, in its own question, "how
can a judge be accountable and independent at once". `/courts/what-do-courts-do` owns the
function question and already covers establishing facts, applying law, giving reasons,
determining consequences and reviewing public decisions.

So the space left is **structural and comparative**: how court systems are organised, how they
differ, and what those differences do — not the definition of any term already held elsewhere.

## Source feasibility

**All 32 dossiers already carry a `courts` module**, each with country-scoped, content-confirmed
sources. The comparative material this wave needs is largely already verified, and reuse is
therefore the correct answer again.

| Country | Supports |
| --- | --- |
| Germany | Art. 92 GG (three categories); Art. 95(1) (five federal supreme courts); BVerfG named separately; Art. 96; Land-administered courts |
| France | Two court orders with separate hierarchies; Cour de cassation as apex of the judicial order; cassation review directed at correct application of law |
| Netherlands | Separate highest administrative courts; **Art. 120 forbids constitutional review of Acts of Parliament** |
| Spain | Art. 117.5 *unidad jurisdiccional*; Tribunal Supremo vs Tribunal Constitucional; CGPJ as governing body that is not a court |
| Brazil | STF as apex **and** constitutional court, abstract and concrete review; STJ; federal and state justice; three specialised branches |
| Japan | Supreme Court with concrete-only constitutional review; no separate constitutional court; high, district, family and summary courts |
| Ireland | District, Circuit, High (with constitutional validity jurisdiction), Court of Appeal (2014), Supreme Court |
| United States | Two court systems; most litigation in state courts; federal three-tier shape not a template for states |
| Australia | s.71; s.77(iii) investing state courts with federal jurisdiction rather than a parallel system |
| Switzerland | Art. 188 Federal Supreme Court; Arts. 122–123 cantonal courts; unified federal procedure since 2011 |
| Canada | Supreme Court Act s.4 (nine judges), s.6 (three from Quebec) |
| Belgium | Constitutional Court of twelve judges that may annul and suspend legislation |

## The Cicero passage — verified, and the brief's rendering corrected

The brief asks for the maxim *"Legum servi sumus ut liberi esse possimus"* and requires that
attribution and context be verified before publication. They were, and the verification changed
what should be published.

The text of *Pro Cluentio* LIII (§146) reads:

> Legum ministri magistratus, legum interpretes iudices, legum denique idcirco omnes servi sumus
> ut liberi esse possimus.

Magistrates are the ministers of the laws; judges are the interpreters of the laws; and finally
we are all servants of the laws, so that we may be free.

Two things follow, and both matter for this wave.

**The common rendering is a truncation.** It drops `omnes` and, more importantly, the two clauses
that come first — the ones about *magistrates* and *judges*. The sentence names state officials as
servants of the law **before** it says anything about the rest of us.

**The immediately following sentences settle the meaning.** §147 opens by asking the presiding
judge and the jurors what entitles them to their authority: *"Quid est, Q. Naso, cur tu in isto
loco sedeas?"* — what is it, Quintus Naso, that entitles you to sit in that seat? — and *"Vos
autem, iudices, quam ob rem ex tanta multitudine civium tam pauci de hominum fortunis sententiam
fertis?"* — and you, judges, why do so few out of so many citizens pass judgment on men's
fortunes? The answer the passage gives is: the law, and nothing else.

So the passage is an argument about **the authority of courts being derived from and bounded by
law**. It is not an argument for obedience by citizens, and the truncated version is the form in
which it is most often used to suggest that it is. The site publishes the full sentence, names
the truncation, and uses the passage for the point it actually makes.

## Method

Structure first, label second — the discipline of Waves 7 and 8. For each system: how many
hierarchies are there; what decides which one hears a case; what sits at the top of each; who
administers the courts; and who may review legislation. Only then was any comparative label used.

## Source additions

One source was added: the Latin text of *Pro Cluentio* §146, because no existing record carries
it. Everything else reuses the verified country modules.
