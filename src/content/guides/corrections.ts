import type { Guide } from '../types';

/**
 * Corrections, sentencing and reintegration — Wave 13.
 *
 * The section had zero guides before this wave, while holding a section page, an institution
 * record and a profession record. Those three establish WHO operates custody and WHAT the role
 * involves. None of them, and no country dossier, addressed why custodial systems exist or what
 * a legislature says punishment is for. That is the gap these pages fill.
 *
 * Two disciplines govern the whole file.
 *
 * NORMATIVE NEUTRALITY. Four legislatures are quoted, and they are presented as four answers
 * rather than as one answer and three variants. The pages describe what statutes say. They do
 * not tell a reader which theory of punishment is correct, and they do not treat any national
 * arrangement as the baseline. Where the platform has no verified figure — Japanese detention
 * capacity is the standing example — the absence is stated rather than approximated.
 *
 * SAFETY. `corrections` was added to SAFETY_SENSITIVE_SECTIONS by this wave, on the same
 * reasoning that added `defence` in Wave 11: material about how custody, supervision and
 * release operate is one step from material about defeating them. Nothing here describes how
 * to evade supervision, defeat a recall decision, bypass any security arrangement, or minimise
 * a sentence, and nothing here predicts an outcome in any case.
 */
export const CORRECTIONS_GUIDES: readonly Guide[] = [
  /* ---------------------------------------------------------------------- */
  /* Purpose                                                                */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'why-correctional-systems-exist',
    title: 'Why correctional systems exist',
    shortTitle: 'Why corrections exists',
    question: 'Why does a society need a separate system for what happens after sentencing?',
    summary:
      'Because a sentence is a decision that still has to be carried out, by someone other than the court that made it, over a period of time. Two statutes state the purpose of that work expressly — and they state it differently.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-sentencing-is-for',
      'conviction-sentence-and-execution',
      'what-reintegration-means',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: ['de-stvollzg-2-vollzugsziel', 'br-lep-1984', 'mandela-rules'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['accountability', 'oversight'],
    uncertainty: [
      'This page describes the purposes two legislatures state for the execution of custodial sentences. It does not assess whether either system achieves them, which would require outcome evidence the platform does not hold.',
      'Two statutes were read from primary text. Nothing here describes the purposes any other country states, and several countries state none in legislation at all.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A correctional system is the part of a justice system that operates after the court has finished. It carries out sentences — custodial and non-custodial — supervises people serving them, and prepares for and manages the point at which a sentence ends. It is a separate function because carrying out a decision is a different task from making one, and a society that authorises imprisonment has to do both.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes an institutional function and what two statutes say it is for. It is not a theory of punishment, it does not say which purpose is the right one, and it is not advice to anyone in or facing detention.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The plainest reason is temporal. A judgment is delivered in an afternoon; a sentence of years is served across them. Something has to exist in the interval, and whatever exists there will be making decisions — about where a person is held, what they can do, who they see, when they are considered for release. Those decisions are consequential enough that leaving them unstructured is not an option.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The second reason is separation. The body that carries out a sentence should not be the body that imposed it, for the same reason the body that investigates should not be the body that tries. A court that both sentenced and administered would be reviewing its own work daily, and a person serving the sentence would have no one to appeal to who was not already committed to the decision.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The uncomfortable part of the answer',
        text: 'Corrections exists because the alternatives a society might otherwise reach for are worse: informal punishment, indefinite detention without a stated end, or no consequence at all. Saying that is not the same as saying the systems that exist are good ones. It is saying that the function is not optional once a society decides that some conduct carries consequences imposed by the state.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Some legislatures answer the question directly, in the text of the law. Germany’s Prison Act does so in a single provision headed *Aufgaben des Vollzuges* — the tasks of execution. Section 2 states that in the execution of a custodial sentence the prisoner *soll … fähig werden, künftig in sozialer Verantwortung ein Leben ohne Straftaten zu führen* — shall become capable of leading a life in social responsibility without offences in future. The statute names this the *Vollzugsziel*, the goal of execution. It then adds that execution *dient auch dem Schutz der Allgemeinheit vor weiteren Straftaten* — also serves the protection of the general public from further offences.',
        claim: 'fact',
        sources: ['de-stvollzg-2-vollzugsziel'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Read the word “also”',
        text: 'German law does not present the two purposes as equals. One is named the goal; the other is introduced as something execution additionally serves. That ordering is a legislative choice, and it is the kind of detail that disappears when a system is summarised as “aiming at rehabilitation and public protection”.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil answers in the opening article of its execution statute, and answers differently. Article 1 of the Lei de Execução Penal states that penal execution *tem por objetivo efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado* — has as its objective to give effect to the provisions of the sentence or criminal decision, and to provide conditions for the harmonious social integration of the convicted person.',
        claim: 'fact',
        sources: ['br-lep-1984'],
      },
      {
        kind: 'paragraph',
        text: 'The two provisions share one idea and differ on the other. Both name the person’s future life outside as something execution is for. Germany then names public protection; Brazil instead names giving effect to what the court decided. Those are not the same second purpose, and a system built on each would answer differently when the two pull apart.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Where a statute says nothing, the purpose has to be inferred from what the system does — which is a weaker basis for any claim about it. Silence in legislation is common and is not evidence that a system has no purpose; it is evidence that the purpose was not fixed by the legislature.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Alongside national purposes sit international minimum standards. The United Nations Standard Minimum Rules for the Treatment of Prisoners set out what is expected of the function regardless of who operates it, including the requirement that prisons be inspected by a body independent of the prison administration. These are agreed standards rather than the law of any particular state, and they bind only through whatever domestic law adopts them.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
    ],
    misconceptions: [
      {
        claim: 'Prisons exist to punish, and everything else is decoration.',
        reality:
          'Some legislatures say otherwise in their own text. Germany’s Prison Act names the capacity to live without offences as the goal of execution and public protection as something it also serves; punishment is not the word the provision uses. Whether that describes practice is a separate question the statute does not answer.',
      },
      {
        claim: 'Every system agrees that rehabilitation is the point.',
        reality:
          'They do not, and the ones that name it do not mean the same thing by it. Brazil pairs social integration with giving effect to the court’s decision; Germany pairs it with protecting the public. The second half of each pairing is where the systems diverge.',
      },
      {
        claim: 'Corrections is simply the last stage of the court process.',
        reality:
          'It is a separate function with its own decisions, its own decision-makers and, in some systems, its own courts. Treating it as an appendix to the trial hides where most of the decisions affecting a sentenced person are actually made.',
      },
      {
        claim: 'International standards decide what prisons are for.',
        reality:
          'They set minimum conditions and require independent inspection. They do not settle the purpose of imprisonment, which every legislature answers for itself or leaves unanswered.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The most useful comparative question is not what a system says its purpose is, but where it says it.',
      },
      {
        kind: 'list',
        items: [
          'In a dedicated execution statute, as a named goal — Germany, StVollzG § 2.',
          'In the opening article of an execution statute, paired with giving effect to the sentence — Brazil, LEP Art. 1.',
          'Nowhere in legislation, so that the purpose is whatever practice and case law make it.',
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A purpose stated is not a purpose achieved',
        text: 'Every statement quoted here is a statement of aim. None of it is evidence about conditions, outcomes, reoffending, or whether the system does what its statute says. Those require separate evidence, and this page makes no claim about them.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A stated purpose is useful to a reader precisely because it can be held up against practice. A system that names reintegration as its goal has given anyone inspecting it a standard drawn from its own law, which is harder to dismiss than a standard imported from elsewhere.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The structural point that follows is the one the international standards make: closed institutions are the part of a justice system where the people affected are least able to be seen or heard, which is why external inspection here is a standing function rather than a response to complaints.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what sentencing is for](/corrections/what-sentencing-is-for), [conviction, sentence and execution](/corrections/conviction-sentence-and-execution), and [the correctional service](/institutions/correctional-service).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Sentencing                                                             */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'what-sentencing-is-for',
    title: 'What sentencing is for',
    shortTitle: 'What sentencing is for',
    question: 'What is a sentence supposed to achieve?',
    summary:
      'Four legislatures answer in their own words, and they do not agree — not on the purposes, and not even on whether the question belongs in sentencing law at all. Where a system puts its answer turns out to be as informative as the answer.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-correctional-systems-exist',
      'custodial-and-non-custodial-sentences',
      'conviction-sentence-and-execution',
    ],
    sources: [
      'uk-sentencing-act-2020-s57',
      'ca-criminal-code-718',
      'de-stgb-46-strafzumessung',
      'de-stvollzg-2-vollzugsziel',
      'br-lep-1984',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 11,
    keyTerms: ['due-process', 'rule-of-law'],
    uncertainty: [
      'Four statutory frameworks were read from primary text. They are four answers, not a survey — most countries are not described here, and some state no purposes in legislation.',
      'This page describes what statutes require courts to have regard to. It says nothing about what sentence any offence attracts, and nothing about how any court weighs the purposes in practice, which is a matter of case law the platform has not researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Sentencing is the decision about what follows a conviction. It is a separate decision from the finding of guilt, made on a wider range of material, and in most systems it is structured by law rather than left at large. The question of what it is *for* is answered expressly in some legal systems and not at all in others.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This sets out what four legislatures say sentencing is for. It does not say what sentence any offence carries, it cannot indicate what any court would do in any case, and it is not advice. It also does not say which of the four answers is right — that is a question about moral and political theory, not about what the law states.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Conviction establishes that a person did something the law forbids. It does not follow from that finding alone what should happen next, and the range of possible answers is enormous — a fine, supervision, unpaid work, a suspended term, years of custody. Something has to narrow it, and the choice is between narrowing it by rule and narrowing it by whatever the individual judge thinks appropriate.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Stating purposes is one way of narrowing without dictating. A list of purposes does not tell a court what to impose; it tells the court what considerations the decision must be answerable to. That is a weaker constraint than a tariff and a stronger one than nothing, and it makes the reasoning reviewable — a sentence can be challenged for having ignored a purpose the statute names.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the purposes conflict on purpose',
        text: 'Punishment, deterrence, rehabilitation, public protection and reparation do not point the same way in any hard case. A statute that names all of them is not confused; it is declining to resolve in advance a conflict it expects to arise differently in each case, and assigning the resolution to the sentencing court. The tension is the design.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'England and Wales sets out a list. Section 57 of the Sentencing Act 2020 provides that where a court is dealing with an offender aged 18 or over when convicted, the court *must have regard to* five purposes of sentencing: the punishment of offenders; the reduction of crime, including its reduction by deterrence; the reform and rehabilitation of offenders; the protection of the public, including victims of crime; and the making of reparation by offenders to persons affected by their offences.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-s57'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A current amendment',
        text: 'The words “including victims of crime” in the fourth purpose were inserted on 22 March 2026 by the Sentencing Act 2026. The revised text on the statute book carries the amendment, and this page quotes the amended version.',
      },
      {
        kind: 'paragraph',
        text: 'The section also states where it does not bite. Subsection (3) provides that subsection (1) — the provision that makes the section apply at all — does not apply to an offence in relation to which a mandatory sentence requirement applies, nor in relation to the making of hospital orders, interim hospital orders, hospital directions or limitation directions under Part 3 of the Mental Health Act 1983.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-s57'],
      },
      {
        kind: 'paragraph',
        text: 'The effect is that the purposes govern the discretionary sentencing decision: where Parliament has removed the discretion, the provision structuring how it is exercised goes with it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'This is the law of England and Wales',
        text: 'The Sentencing Act 2020 provisions described here are extent-marked for England and Wales. They are not the law in Scotland or Northern Ireland, which have separate sentencing arrangements, and they say nothing about any other country.',
      },
      {
        kind: 'paragraph',
        text: 'Canada uses a different structure for the same material. Section 718 of the Criminal Code states one *fundamental purpose* — to protect society and to contribute, along with crime prevention initiatives, to respect for the law and the maintenance of a just, peaceful and safe society — and then makes everything else subordinate to it: this is achieved *by imposing just sanctions that have one or more of the following objectives*. The six objectives are denunciation, deterrence, separation of offenders from society where necessary, assisting in rehabilitation, reparation, and promoting a sense of responsibility in offenders and acknowledgment of the harm done.',
        claim: 'fact',
        sources: ['ca-criminal-code-718'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'One purpose with six objectives is not five purposes',
        text: 'The difference is not presentational. A court applying the English list weighs five things the statute treats as co-ordinate. A court applying the Canadian provision pursues one stated purpose, and the six objectives are the means — any one or more of which may serve it in a given case. A sentence in Canada that achieved an objective while defeating the fundamental purpose has not satisfied section 718.',
      },
      {
        kind: 'paragraph',
        text: 'Canada then adds a constraint the English section does not contain. Section 718.1, marginal-noted the *fundamental principle*, provides that a sentence must be proportionate to the gravity of the offence and the degree of responsibility of the offender. Section 718.2 adds further principles: aggravating and mitigating circumstances, with an enumerated list of circumstances deemed aggravating; parity, that a sentence should be similar to sentences imposed on similar offenders for similar offences committed in similar circumstances; totality, that where consecutive sentences are imposed the combined sentence should not be unduly long or harsh; restraint, that an offender should not be deprived of liberty if less restrictive sanctions may be appropriate; and that all available sanctions other than imprisonment that are reasonable in the circumstances should be considered for all offenders, with particular attention to the circumstances of Aboriginal offenders.',
        claim: 'fact',
        sources: ['ca-criminal-code-718'],
      },
      {
        kind: 'paragraph',
        text: 'Germany does not open with purposes at all. Section 46(1) of the Criminal Code states instead that *die Schuld des Täters ist Grundlage für die Zumessung der Strafe* — the offender’s guilt is the basis for determining the sentence — and that the effects to be expected from the sentence for the offender’s future life in society are to be taken into account. Section 46(2) then lists what the court weighs: the motives and aims of the offender, expressly including racist, xenophobic, antisemitic, gender-specific and otherwise dehumanising motives; the attitude expressed by the act; the degree of breach of duty; the manner of execution and the culpable effects; the offender’s prior life and personal and economic circumstances; and conduct after the act, particularly efforts to make good the damage and to reach a settlement with the victim.',
        claim: 'fact',
        sources: ['de-stgb-46-strafzumessung'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'The German Criminal Code names a basis rather than a purpose, and the German reintegration goal appears somewhere else entirely — in section 2 of the Prison Act, which governs execution rather than sentencing. Brazil does the same thing: its purpose statement sits in Article 1 of the execution statute. England and Wales and Canada state purposes in sentencing law; Germany and Brazil state them in the law of what happens afterwards. Those are answers to different questions — why is this sentence being imposed, versus what is the custodial term for once imposed — and two systems that both “aim at rehabilitation” can mean structurally different things by it.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil’s Article 1 of the Lei de Execução Penal states that penal execution has as its objective to give effect to the provisions of the sentence and to provide conditions for the harmonious social integration of the convicted person; Germany’s Prison Act section 2 names the capacity to live in social responsibility without offences as the goal of execution, adding that execution also serves the protection of the general public. Neither provision tells a sentencing court anything about what sentence to impose.',
        claim: 'fact',
        sources: ['br-lep-1984', 'de-stvollzg-2-vollzugsziel'],
      },
    ],
    misconceptions: [
      {
        claim: 'All legal systems recognise the same purposes of sentencing.',
        reality:
          'They do not. England and Wales names five purposes a court must have regard to; Canada names one fundamental purpose served by any of six objectives; Germany names culpability as the basis of measurement and states its reintegration goal in its prison law rather than its criminal code. These are different provisions doing different work.',
      },
      {
        claim: 'Naming several purposes means the law has failed to decide.',
        reality:
          'It means the resolution has been assigned to the sentencing court rather than fixed in advance. The purposes conflict in hard cases by design, and a statute that resolved the conflict in the abstract would be resolving it without the facts.',
      },
      {
        claim: 'Proportionality is a general principle every system applies to sentencing.',
        reality:
          'Canada states it in its Criminal Code as the fundamental principle, tied to gravity of the offence and degree of responsibility. That is a specific statutory provision in one country, and it should be cited as such rather than assumed everywhere.',
      },
      {
        claim: 'Statutory purposes apply to every sentence a court passes.',
        reality:
          'Not necessarily. In England and Wales the five purposes do not apply where a mandatory sentence requirement applies, or to specified orders under the Mental Health Act 1983. Where the legislature has removed the discretion, the purposes that structure the discretion go with it.',
      },
      {
        claim: 'A sentencing statute tells you what sentence an offence attracts.',
        reality:
          'The provisions described here do not. They state purposes and principles the decision must answer to. What any particular case attracts depends on the offence, the facts, the applicable framework and the court — none of which this page addresses.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four systems, four structures for the same subject matter.',
      },
      {
        kind: 'list',
        items: [
          'A list of five co-ordinate purposes the court must have regard to, with stated exclusions — England and Wales, Sentencing Act 2020 s. 57.',
          'One fundamental purpose served by any of six objectives, plus proportionality as a separately named fundamental principle — Canada, Criminal Code ss. 718–718.2.',
          'Culpability as the basis of measurement, with the reintegration goal placed in the law of execution rather than the criminal code — Germany, StGB § 46 and StVollzG § 2.',
          'Purpose stated in the opening article of the execution statute, pairing social integration with giving effect to the sentence — Brazil, LEP Art. 1.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Four is not a survey',
        text: 'These four were chosen because each has an authoritative text that states something explicit, not because they represent the range. Many systems state no purposes in legislation, and nothing here should be read as describing them.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Stated purposes make a sentence reviewable on grounds other than length. If a statute requires a court to have regard to reparation, a sentence passed without regard to it is challengeable for that reason, independently of whether the outcome was severe or lenient.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The parity principle does similar work from the other direction. Canada’s section 718.2(b) makes a sentence answerable to what comparable cases have attracted, which converts consistency from an aspiration into something a court can be asked about.',
        claim: 'fact',
        sources: ['ca-criminal-code-718'],
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'This page cannot tell you what will happen in a case',
        text: 'Nothing here supports a prediction of any outcome. Statutory purposes are not a formula, sentencing frameworks differ by jurisdiction and offence, and anyone facing a criminal case needs a lawyer in that jurisdiction rather than a general description of what legislatures say sentencing is for.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why correctional systems exist](/corrections/why-correctional-systems-exist), [custodial and non-custodial sentences](/corrections/custodial-and-non-custodial-sentences), and [what courts do](/courts/what-do-courts-do).',
      },
    ],
  },
  {
    slug: 'conviction-sentence-and-execution',
    title: 'Conviction, sentence and execution',
    shortTitle: 'Three separate decisions',
    question: 'Is being sentenced one decision, or several?',
    summary:
      'Three, and in some systems three different decision-makers. Brazil gives execution its own judge — the Juízo da Execução — which makes visible a stage most descriptions of criminal justice leave out entirely.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['what-sentencing-is-for', 'why-correctional-systems-exist', 'who-runs-prisons'],
    relatedInstitutions: ['correctional-service', 'prosecution-service'],
    sources: ['br-lep-1984', 'de-stgb-46-strafzumessung', 'de-stvollzg-2-vollzugsziel'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['court', 'jurisdiction'],
    uncertainty: [
      'One system’s execution architecture is described from its primary statute. Systems that place execution decisions with administrative bodies rather than a court were not researched and are not described.',
      'This page describes which body decides at each stage. It does not describe the procedures any of them follow.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Three questions are answered separately in a criminal case that ends in a sentence. Did the person do it? What follows from that? And how is what follows actually carried out? The first is conviction, the second is sentencing, and the third is execution. Collapsing them is the single most common error in describing how a justice system works.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes the structure of decision-making after conviction and which bodies hold each decision. It is not procedural guidance, and nothing here describes how to influence any of these decisions.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The separation exists because the three decisions need different material. Guilt is decided on evidence about a past event, under a demanding standard of proof, with rules tightly restricting what can be considered. Sentencing takes in a much wider field — the offender’s circumstances, conduct after the act, the effect on victims — on which those rules would be unworkable. Execution decisions turn on things that had not happened yet at either earlier stage.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'German law makes the widening explicit. Section 46(2) of the Criminal Code directs the sentencing court to weigh the offender’s prior life, personal and economic circumstances, and conduct after the act, including efforts to make good the damage and to reach a settlement with the victim. None of that would be admissible in deciding whether the offence was committed; all of it bears on what the sentence should be.',
        claim: 'fact',
        sources: ['de-stgb-46-strafzumessung'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the third stage gets forgotten',
        text: 'Trial is public, adversarial and legible; it is what accounts of criminal justice describe. Execution is administrative, continuous and closed, and it is where most of the decisions affecting a sentenced person are actually taken — how they are classified, where they are held, what regime applies, when release is considered. A description of a justice system that stops at the verdict has stopped before most of the decisions.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Brazil structures the third stage as a judicial one and names the bodies that hold it. Article 61 of the Lei de Execução Penal lists the *órgãos da execução penal* — the organs of penal execution — and they include the Juízo da Execução, the Ministério Público, the Conselho Penitenciário and the penitentiary departments. Execution is not left to the prison administration alone; a court sits within it.',
        claim: 'fact',
        sources: ['br-lep-1984'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A court of execution is not an appeal court',
        text: 'The Juízo da Execução is not reviewing whether the conviction or the sentence was right. It is deciding questions that arise while the sentence runs. That is a different judicial function from appeal, and a system can have one without the other.',
      },
      {
        kind: 'paragraph',
        text: 'The same statute allocates administration between levels of government. Article 71 places the Departamento Penitenciário Nacional as the federal executive body subordinate to the Ministry of Justice, while Article 74 provides that the local penitentiary department, or similar body, supervises and coordinates the penal establishments of the federal unit to which it belongs. So in Brazil the execution court, the prosecution service, a penitentiary council and two tiers of administration are all engaged with what happens after sentence.',
        claim: 'fact',
        sources: ['br-lep-1984'],
      },
      {
        kind: 'paragraph',
        text: 'Germany separates the stages in a different way — not by creating an execution court but by putting the two subjects in different statutes. Sentencing is governed by the Criminal Code, which names culpability as the basis of measurement; execution is governed by the Prison Act, which states the goal of execution. A reader who consulted only the Criminal Code would not find the reintegration goal at all.',
        claim: 'fact',
        sources: ['de-stgb-46-strafzumessung', 'de-stvollzg-2-vollzugsziel'],
      },
      {
        kind: 'paragraph',
        text: 'What follows for a reader is a practical question to ask of any system: after sentence, who decides — a court, an administrative body, a specialist board, or the prison administration itself? The answer determines what kind of challenge is available to the person serving the sentence, and it varies more than almost anything else in criminal justice.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Sentencing is the end of the court’s involvement.',
        reality:
          'Not necessarily. Brazil’s execution statute lists the Juízo da Execução among the organs of penal execution, so a court is engaged with questions arising while the sentence runs. Whether that is so elsewhere depends entirely on the system.',
      },
      {
        claim: 'The verdict and the sentence are one decision.',
        reality:
          'They rest on different material under different rules. German law directs the sentencing court to weigh the offender’s prior life, circumstances and conduct after the act — none of which bears on whether the offence was committed.',
      },
      {
        claim: 'Once a sentence is imposed, its content is fixed.',
        reality:
          'The stated term may be fixed, but decisions about how it is served continue throughout. That is what execution is, and it is a stage with its own decision-makers.',
      },
      {
        claim: 'Prison administration and penal execution are the same thing.',
        reality:
          'Brazil’s statute distinguishes them: the penitentiary departments are one of several organs of execution, alongside a court, the prosecution service and a penitentiary council. Administration is part of execution, not the whole of it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The comparative question is where the third stage sits.',
      },
      {
        kind: 'list',
        items: [
          'With a dedicated execution court named in statute alongside other organs — Brazil, LEP Art. 61.',
          'In a separate statute from sentencing, without a dedicated execution court — Germany, StGB and StVollzG.',
          'Split between levels of government, so that the administering body depends on the federal unit — Brazil, LEP Arts. 71 and 74.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Where a court holds execution decisions, the person serving the sentence has a judicial route for questions arising during it. Where those decisions sit with an administrative body, the route is whatever administrative and judicial review that system provides. The difference is not formal — it determines what can be contested and before whom.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also determines who else is present. Brazil’s statute places the Ministério Público among the organs of execution, so the prosecution service has a continuing role after conviction rather than a role that ends at the verdict.',
        claim: 'fact',
        sources: ['br-lep-1984'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what sentencing is for](/corrections/what-sentencing-is-for), [who runs prisons](/corrections/who-runs-prisons), and [appeal and the rule of law](/justice/appeal-and-the-rule-of-law).',
      },
    ],
  },
  {
    slug: 'custodial-and-non-custodial-sentences',
    title: 'Custodial and non-custodial sentences',
    shortTitle: 'Custodial and non-custodial',
    question: 'Is imprisonment the normal outcome of a criminal conviction?',
    summary:
      'In the systems whose statutes are quoted here, it is the outcome the law tells courts to reach for last. Two legislatures write restraint into the text — one as a principle of sentencing, one as a rule about specific sentence lengths.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-sentencing-is-for',
      'what-a-suspended-sentence-is',
      'probation-is-three-different-things',
    ],
    sources: ['ca-criminal-code-718', 'de-stgb-56-strafaussetzung', 'mandela-rules'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['due-process'],
    uncertainty: [
      'Two statutory frameworks are described from primary text. The page makes no claim about how frequently custodial or non-custodial sentences are imposed in either, which would require sentencing statistics the platform has not verified.',
      'The range of non-custodial sanctions available differs enormously between systems and is not catalogued here.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A custodial sentence deprives a person of liberty by holding them in a place of detention. A non-custodial sentence imposes something else — a financial penalty, unpaid work, supervision, conditions on conduct, a requirement to attend a programme, or a custodial term that is not activated unless something further happens. The distinction matters because deprivation of liberty is the most severe thing a criminal court routinely does.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what legislatures say about choosing between custody and other sanctions. It is not a catalogue of available sentences in any jurisdiction, it does not indicate what any case would attract, and it is not advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A system that had only one sanction could respond to every offence in only one way, scaled by duration. The range exists because offences and offenders differ in ways that duration alone cannot express, and because some of what sentencing is asked to achieve — reparation, for instance — cannot be achieved by detention at all.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Restraint is not leniency',
        text: 'A principle directing a court away from custody where a less restrictive sanction would do is not an instruction to be lenient. It is an instruction that the most severe available response requires a reason, which is the same logic that requires a warrant before a search. Severity that is not necessary is severity without justification.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Canada states restraint twice in consecutive paragraphs. Section 718.2(d) of the Criminal Code provides that an offender should not be deprived of liberty if less restrictive sanctions may be appropriate in the circumstances. Section 718.2(e) goes further, requiring that all available sanctions other than imprisonment that are reasonable in the circumstances and consistent with the harm done to victims or to the community should be considered for all offenders, with particular attention to the circumstances of Aboriginal offenders.',
        claim: 'fact',
        sources: ['ca-criminal-code-718'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two different instructions',
        text: 'Paragraph (d) is a prohibition of sorts — do not deprive of liberty where something less restrictive may be appropriate. Paragraph (e) is a duty to consider, which applies to every offender regardless of what the court eventually imposes. A court can comply with (d) by imposing custody where nothing less would do; it cannot comply with (e) by never having looked.',
      },
      {
        kind: 'paragraph',
        text: 'Germany approaches the same problem through thresholds rather than principles. Section 56(1) of the Criminal Code provides that on a conviction to a custodial sentence of not more than one year, the court suspends execution of the sentence on probation where it is to be expected that the convicted person will let the conviction itself serve as a warning and will commit no further offences even without the influence of imprisonment — having regard in particular to their personality, prior life, the circumstances of the act, conduct after the act, their circumstances of life, and the effects to be expected from suspension.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung'],
      },
      {
        kind: 'paragraph',
        text: 'Section 56(2) extends the possibility upwards: the court may suspend a higher custodial sentence not exceeding two years where, on an overall appraisal of the act and the personality of the convicted person, special circumstances are present — with efforts to make good the damage caused expressly among the considerations.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Numbers instead of judgment, up to a point',
        text: 'The German provisions bound the question by sentence length before any assessment of the individual begins: one year, then two years on special circumstances. A statutory threshold produces more consistency than an open principle and less flexibility. Neither approach is the correct one — they are different settlements of the same trade-off between predictability and fit.',
      },
      {
        kind: 'paragraph',
        text: 'Underneath both sits a point the international standards make about what custody is. The United Nations Standard Minimum Rules for the Treatment of Prisoners proceed on the basis that people in detention retain rights other than those necessarily restricted by the fact of lawful detention. Custody removes liberty; it is not authority to remove anything else, and the standards exist to make that operable rather than rhetorical.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
    ],
    misconceptions: [
      {
        claim: 'Prison is the standard sentence and everything else is an exception.',
        reality:
          'The statutes quoted here are drafted the other way round. Canada’s Criminal Code requires that sanctions other than imprisonment be considered for all offenders, and directs that liberty not be removed where a less restrictive sanction may be appropriate.',
      },
      {
        claim: 'A suspended sentence means the court decided the offence was not serious.',
        reality:
          'In German law the court has already fixed a custodial term and then suspends its execution on stated statutory conditions. The seriousness was assessed in setting the term; suspension is a separate judgment about what execution would achieve.',
      },
      {
        claim: 'Non-custodial sentences are not really punishment.',
        reality:
          'They impose obligations backed by the possibility of custody if breached. What distinguishes them is not the absence of consequence but the absence of detention.',
      },
      {
        claim: 'Considering alternatives to custody is optional if the offence is serious.',
        reality:
          'Canada’s section 718.2(e) frames it as applying to all offenders. The duty is to consider; what the court imposes after considering is a separate question governed by the rest of the framework.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two ways of steering courts away from custody.',
      },
      {
        kind: 'list',
        items: [
          'By stated principle applying to every offender — Canada, Criminal Code s. 718.2(d) and (e).',
          'By statutory threshold tied to the length of the term fixed — Germany, StGB § 56(1) at one year and § 56(2) at two years on special circumstances.',
          'By international standard, which addresses how detention is conducted rather than when it is imposed — the Nelson Mandela Rules.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What the law says is not what the courts do',
        text: 'Every statement on this page is about statutory text. How often custody is imposed in either country, and for what, would require sentencing statistics with stated definitions and periods. The platform does not hold them, so this page makes no such claim.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A statutory restraint principle gives a sentenced person something specific to point to. A custodial sentence imposed without consideration of alternatives has failed to comply with a provision, which is a reviewable defect distinct from the sentence being too long.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'Not a route to a lighter sentence',
        text: 'Nothing here describes how to obtain a non-custodial outcome, and none of it can be applied to a case. These are provisions addressed to courts, they operate differently in every jurisdiction, and anyone facing a criminal case needs a lawyer rather than a description of what two criminal codes say.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a suspended sentence is](/corrections/what-a-suspended-sentence-is), [probation is three different things](/corrections/probation-is-three-different-things), and [what sentencing is for](/corrections/what-sentencing-is-for).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Supervision, suspension and release                                    */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'what-a-suspended-sentence-is',
    title: 'What a suspended sentence is',
    shortTitle: 'Suspended sentences',
    question: 'If a sentence is suspended, has the person been sentenced at all?',
    summary:
      'Yes. The court fixes a custodial term and then suspends its execution on conditions. German law sets out both halves in a single provision, and the order of the two steps is the thing most descriptions get backwards.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['DE'],
    temporalScope: 'current',
    related: [
      'custodial-and-non-custodial-sentences',
      'probation-is-three-different-things',
      'conviction-sentence-and-execution',
    ],
    sources: ['de-stgb-56-strafaussetzung', 'de-stgb-46-strafzumessung'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['due-process'],
    uncertainty: [
      'One system’s provisions are described from primary text. What happens on breach, how supervision during the operational period is conducted, and the conditions a court may attach were not researched here and are not described.',
      'Other systems use the term “suspended sentence” for arrangements that differ from this one. Nothing here describes them.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A suspended sentence is a custodial sentence whose execution is held back. The court decides the offence merits a term of imprisonment and fixes that term; it then decides, separately, that the term will not be carried out unless something further happens. Both decisions are real, and the first one is not undone by the second.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes German statutory provisions, read in the original. It is not a description of suspended sentences generally, it does not indicate whether any case would attract one, and it is not advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The mechanism answers a problem a binary choice cannot. A court may conclude both that an offence is serious enough for custody and that actually imposing custody would achieve less than not imposing it. Without suspension the court must pick one of those conclusions and abandon the other. With it, the court can record the seriousness in the term and act on the assessment in the execution.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What the suspended term does while suspended',
        text: 'It is not symbolic. The fixed term is the consequence that follows if the conditions are not met, which is what gives the conditions their force. A suspended sentence works by holding a specific, already-quantified custodial term in reserve — which is why the court has to fix it first.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Section 56(1) of the German Criminal Code states the primary case. On a conviction to a custodial sentence of not more than one year, the court *setzt die Vollstreckung der Strafe zur Bewährung aus* — suspends execution of the sentence on probation — where it is to be expected that the convicted person will let the conviction itself serve as a warning and will commit no further offences even without the influence of imprisonment.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The test is about what imprisonment would add',
        text: 'The statutory question is not whether the person deserves custody — the fixed term has already answered that. It is whether the warning carried by the conviction will suffice *even without the influence of imprisonment*. The provision is asking what actually carrying out the term would achieve that has not already been achieved by convicting.',
      },
      {
        kind: 'paragraph',
        text: 'The assessment is not free-form. Section 56(1) directs the court to have regard in particular to the personality of the convicted person, their prior life, the circumstances of the act, their conduct after the act, their circumstances of life, and the effects to be expected from suspension. These overlap substantially with the factors section 46(2) directs the court to weigh in fixing the term in the first place, applied to a different question.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung', 'de-stgb-46-strafzumessung'],
      },
      {
        kind: 'paragraph',
        text: 'Section 56(2) opens a second, narrower route. The court *may* suspend a higher custodial sentence not exceeding two years where, on an overall appraisal of the act and the personality of the convicted person, special circumstances are present. The convicted person’s efforts to make good the damage caused are expressly among the considerations.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two thresholds, two grammars',
        text: 'At one year or less the statute says the court suspends where the expectation is made out. Above one year and up to two, it says the court may suspend where special circumstances are present. The change from obligation to discretion, and the addition of a further requirement, both happen at the same point.',
      },
    ],
    misconceptions: [
      {
        claim: 'A suspended sentence means the person got off without a sentence.',
        reality:
          'A custodial term has been fixed. What is suspended is its execution, on stated statutory conditions, with the fixed term held in reserve.',
      },
      {
        claim: 'The court suspends because it thinks the offence was minor.',
        reality:
          'German law puts the seriousness assessment in fixing the term and asks a different question at the suspension stage — whether the person will commit no further offences even without the influence of imprisonment. A serious offence can produce a term the statute still permits to be suspended.',
      },
      {
        claim: 'Suspension is available for any sentence if the court is persuaded.',
        reality:
          'The German provisions are bounded by length: not more than one year under section 56(1), and not exceeding two years under section 56(2), which additionally requires special circumstances on an overall appraisal.',
      },
      {
        claim: 'Suspended sentence and probation are the same thing.',
        reality:
          'The German provision suspends execution "zur Bewährung" — on probation — so the two are connected in that system. But probation names several different arrangements across systems, only one of which is the suspension of a fixed custodial term.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The German structure has two features worth isolating when comparing systems.',
      },
      {
        kind: 'list',
        items: [
          'The custodial term is fixed first and suspended second, so the sentence has a quantified content throughout.',
          'The threshold is stated in the statute as a length, not left to judicial assessment of seriousness.',
          'The test at the suspension stage asks what imprisonment would add, not what the offence deserves.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Other systems, other mechanisms',
        text: 'Systems using the English phrase “suspended sentence” do not all work this way, and some suspend without fixing a term at all. This page describes one statute and should not be generalised.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Because the term is fixed and recorded, the consequence of breach is knowable in advance rather than determined afterwards. That is a legal-certainty point as much as a corrections one: the person knows what is being held in reserve.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'Not applicable to any case',
        text: 'These are provisions of one country’s criminal code, addressed to its courts. Nothing here indicates what any case would attract anywhere, and anyone facing a criminal case needs a lawyer in the relevant jurisdiction.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [custodial and non-custodial sentences](/corrections/custodial-and-non-custodial-sentences), [probation is three different things](/corrections/probation-is-three-different-things), and [legal certainty](/justice/legal-certainty).',
      },
    ],
  },
  {
    slug: 'probation-is-three-different-things',
    title: 'Probation is three different things',
    shortTitle: 'Probation, three senses',
    question: 'What does “probation” actually mean?',
    summary:
      'Three unrelated things, depending on the system: an organisation, a status attached to a suspended custodial term, and supervision after release from custody. English supplies one word; the statutes do not.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-a-suspended-sentence-is',
      'release-before-the-end-of-a-sentence',
      'custodial-and-non-custodial-sentences',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: [
      'de-stgb-56-strafaussetzung',
      'de-stgb-57-reststrafe',
      'dk-rigsrevisionen-prisons',
      'se-kriminalvarden',
      'ca-criminal-code-718',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['jurisdiction'],
    uncertainty: [
      'This page distinguishes senses of a word using the arrangements four systems actually have. It is not a complete taxonomy, and systems exist that use the word in ways none of the three senses captures.',
      'How supervision is conducted in any of these systems was not researched and is not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Probation is one English word covering at least three distinct things. It names an organisation — in several countries the same body that runs prisons. It names a status — the condition on which a fixed custodial term is held back. And it names a period of supervision after release from custody. A sentence about "probation" that does not say which is meant is close to uninformative.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This distinguishes senses of a term using the arrangements four systems have. It is not a guide to supervision requirements anywhere, and nothing here describes what any supervision involves in practice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The ambiguity is not sloppiness — it is what happens when one language is used to describe institutions built in others. Each system named its own arrangement in its own language, and English translation has flattened several unlike things onto one word that happens to exist. The result is a false friend that survives translation in both directions.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why it matters more here than for most terms',
        text: 'The three senses attach to different points in a sentence, and therefore to different rights. Supervision attached to a suspended term operates while no custody has been served; supervision after release operates when part of a term has been served and the remainder is held back. Confusing them makes it impossible to say what happens on breach, because what is held in reserve is different in each case.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Sense one — the organisation. In Denmark, prisons and probation are run by a single national body, the Prison and Probation Service (Kriminalforsorgen), under the Ministry of Justice; it executes custodial sentences and supervises suspended sentences, electronic monitoring and parole. Sweden is arranged the same way: Kriminalvården operates prisons, remand prisons and a national transport service and is responsible for supervising people serving sentences in the community.',
        claim: 'fact',
        sources: ['dk-rigsrevisionen-prisons', 'se-kriminalvarden'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'One body, several senses at once',
        text: 'The Danish description is the clearest illustration of the problem. A single organisation supervises suspended sentences *and* parole — two of the three senses — while also running the prisons. So in Denmark all three senses of the word point at the same institution while still describing different things about a sentenced person.',
      },
      {
        kind: 'paragraph',
        text: 'Sense two — the status attached to a suspended term. German law suspends execution of a custodial sentence *zur Bewährung*, on probation, under section 56 of the Criminal Code. Here no part of the custodial term has been served: the whole of it is held in reserve, and the person is in the community on the strength of the court’s expectation that the conviction alone will suffice.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung'],
      },
      {
        kind: 'paragraph',
        text: 'Sense three — supervision after release. Section 57 of the same code suspends the *remainder* of a fixed-term custodial sentence on probation once a stated fraction has been served. The word is identical in the German text as well as in translation, and the situation is materially different: part of the term has been carried out and only the balance is held back.',
        claim: 'fact',
        sources: ['de-stgb-57-reststrafe'],
      },
      {
        kind: 'paragraph',
        text: 'Canadian statute avoids the collapse by naming the arrangements separately. Section 718.2(a)(vi) of the Criminal Code treats as an aggravating circumstance evidence that an offence was committed while the offender was subject to a conditional sentence order, or released on parole, statutory release or unescorted temporary absence — four distinct statuses, enumerated as four rather than described as one.',
        claim: 'fact',
        sources: ['ca-criminal-code-718'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What to ask instead',
        text: 'Three questions disambiguate the term in any system: has any part of a custodial term been served; what exactly is held in reserve; and which body supervises and decides on breach. The answers, not the word, tell you what the arrangement is.',
      },
    ],
    misconceptions: [
      {
        claim: 'Probation means being let off with supervision instead of prison.',
        reality:
          'That is one of the senses. It also names supervision after release from custody, where a term has been partly served, and in several countries it names the organisation that runs the prisons as well.',
      },
      {
        claim: 'Probation and parole are simply different words for the same thing.',
        reality:
          'Canadian statute enumerates conditional sentence orders, parole, statutory release and unescorted temporary absence as distinct statuses in a single provision. A system that names four things has not named one thing four times.',
      },
      {
        claim: 'A probation service is by definition separate from the prison service.',
        reality:
          'In Denmark and Sweden a single national body does both. Whether the functions are separated is a national arrangement, not a feature of the concept.',
      },
      {
        claim: 'If a person is on probation, no custodial sentence was imposed.',
        reality:
          'Under German section 56 a custodial term has been fixed and its execution suspended; under section 57 a term has been partly served and its remainder suspended. In both, a custodial sentence exists.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The same word, three referents, in four systems.',
      },
      {
        kind: 'list',
        items: [
          'An organisation running prisons and community supervision together — Denmark (Kriminalforsorgen) and Sweden (Kriminalvården).',
          'The status on which a wholly unserved custodial term is held back — Germany, StGB § 56.',
          'The status on which the remainder of a partly served term is held back — Germany, StGB § 57.',
          'Four separately named statuses rather than one — Canada, Criminal Code s. 718.2(a)(vi).',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Precision here is not pedantry. What is held in reserve determines what is at stake on breach, and a description that does not distinguish the senses cannot state that accurately. For anyone trying to understand their own position, the question that matters is which term is being held back and by whom.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'This page does not describe supervision requirements',
        text: 'Nothing here sets out what any supervision involves, what conditions attach, or what happens on breach in any jurisdiction. Anyone subject to supervision should rely on the terms they were given and on a lawyer in that jurisdiction.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a suspended sentence is](/corrections/what-a-suspended-sentence-is), [release before the end of a sentence](/corrections/release-before-the-end-of-a-sentence), and [the correctional service](/institutions/correctional-service).',
      },
    ],
  },
  {
    slug: 'release-before-the-end-of-a-sentence',
    title: 'Release before the end of a sentence',
    shortTitle: 'Release before the end',
    question: 'Why are people released before their sentence has run its full term?',
    summary:
      'Because the statute says so, on stated criteria, decided by a court. German law sets fractions, requires that release be justifiable against the security interest of the public — and requires the convicted person’s consent.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['DE'],
    temporalScope: 'current',
    related: [
      'why-a-sentence-length-is-not-time-served',
      'probation-is-three-different-things',
      'what-reintegration-means',
    ],
    sources: ['de-stgb-57-reststrafe', 'ca-criminal-code-718', 'de-stvollzg-2-vollzugsziel'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['court', 'accountability'],
    uncertainty: [
      'One system’s provisions are described from primary text. How the assessment is conducted, what conditions attach on release, and what happens on breach were not researched and are not described.',
      'Release mechanisms differ so widely between systems that nothing here should be read as describing any other country.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Release before the end of a term is not the shortening of a sentence. The sentence remains what the court imposed; what changes is that the remainder is suspended rather than carried out in custody, usually on conditions and usually with the possibility of return if they are not met. It is a decision about how the balance of the term is served, not about how long it is.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes German statutory criteria, read in the original, and one Canadian provision that names release statuses. It does not describe how any release decision is made in practice, does not indicate what would happen in any case, and is not advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A sentence fixed at the moment of conviction is fixed on what was known then. Everything that happens during the term — conduct, circumstances, what preparation for release has been possible — is unavailable to the sentencing court by definition. A mechanism for revisiting the balance is how a system uses information that did not exist when the term was set.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'There is a second reason specific to systems that state a reintegration goal. German law names the capacity to live in social responsibility without offences as the goal of execution. A term that ran to its last day and ended abruptly at the gate would give that goal no mechanism; a suspended remainder with conditions is the mechanism.',
        claim: 'fact',
        sources: ['de-stvollzg-2-vollzugsziel'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The public-protection question is asked, not assumed',
        text: 'It would be easy to read early release as a system deciding that public protection has stopped mattering. The German provision does the opposite: it makes public protection an express condition of the decision, so release is granted because that interest has been weighed, not despite it.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Section 57(1) of the German Criminal Code states three cumulative conditions for suspending the remainder of a fixed-term custodial sentence on probation. Two-thirds of the sentence imposed, and at least two months, must have been served. The suspension must be one that *unter Berücksichtigung des Sicherheitsinteresses der Allgemeinheit verantwortet werden kann* — that can be justified taking account of the security interest of the general public. And the convicted person must consent.',
        claim: 'fact',
        sources: ['de-stgb-57-reststrafe'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The consent requirement is the surprising one',
        text: 'Release on conditions is not unambiguously better for the person released. A suspended remainder carries obligations and the possibility of return; serving to the end carries neither. By requiring consent, the statute treats supervised release as something that cannot be imposed on someone who prefers to serve the term — which is a recognition that it is a different thing, not simply a lesser one.',
      },
      {
        kind: 'paragraph',
        text: 'The assessment has stated content. Section 57(1) directs that the decision take into account in particular the personality of the convicted person, their prior life, the circumstances of the act, the weight of the legal interest endangered in the event of relapse, their conduct during execution, their circumstances of life, and the effects to be expected from suspension.',
        claim: 'fact',
        sources: ['de-stgb-57-reststrafe'],
      },
      {
        kind: 'paragraph',
        text: 'Section 57(2) provides an earlier point in narrower circumstances: after half of a fixed-term sentence, and at least six months, where the convicted person is serving a custodial sentence for the first time and it does not exceed two years, among the conditions the provision states.',
        claim: 'fact',
        sources: ['de-stgb-57-reststrafe'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Fractions are a threshold, not an entitlement',
        text: 'Reaching the German two-thirds point does not produce release. It makes the question askable; the public-security condition and the consent requirement still have to be satisfied, and the assessment factors still have to be weighed. A fraction in a statute is where a decision becomes possible, not where it becomes automatic.',
      },
      {
        kind: 'paragraph',
        text: 'That release statuses are plural rather than singular is visible in other systems too. Canadian statute, in a provision about aggravating circumstances, names conditional sentence orders, parole, statutory release and unescorted temporary absence separately — four distinct arrangements under which a person may be in the community while a sentence runs.',
        claim: 'fact',
        sources: ['ca-criminal-code-718'],
      },
    ],
    misconceptions: [
      {
        claim: 'Early release means the sentence was reduced.',
        reality:
          'The sentence stands. Under the German provision what is suspended is the remainder, on conditions, with the possibility of the balance being enforced. Nothing about the term the court imposed has changed.',
      },
      {
        claim: 'Release at two-thirds is automatic once the point is reached.',
        reality:
          'Under the German provision the fraction is one of three cumulative conditions. The suspension must also be justifiable taking account of the security interest of the general public, and the convicted person must consent.',
      },
      {
        claim: 'Release decisions are made by the prison administration.',
        reality:
          'Under the German provision it is the court that suspends the remainder, on statutory criteria. Which body decides varies between systems, and it determines what kind of challenge is available.',
      },
      {
        claim: 'Nobody would refuse supervised release, so consent is a formality.',
        reality:
          'Supervised release carries conditions and the possibility of return that serving to the end of the term does not. The statute requires consent because the two are genuinely different positions.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What differs between systems is not whether early release exists but who decides and on what.',
      },
      {
        kind: 'list',
        items: [
          'A court, on statutory fractions plus a public-security condition plus consent — Germany, StGB § 57(1).',
          'An earlier fraction for a first custodial sentence not exceeding two years — Germany, StGB § 57(2).',
          'Several separately named statuses rather than a single mechanism — Canada, Criminal Code s. 718.2(a)(vi).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Fractions do not travel',
        text: 'The two-thirds and one-half points are provisions of one criminal code — Germany’s. They are not a general rule, and applying them to any other system would be an invention.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Stated criteria make a release decision contestable. A refusal that ignored a factor the statute names, or that treated the public-security condition as unsatisfiable in principle, has departed from the provision — which is a different kind of complaint from disagreeing with the outcome.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Placing the decision with a court rather than the administration also separates it from the body whose daily judgments about conduct in custody feed into it. That is the same separation logic that keeps sentencing away from the service that carries sentences out.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'Nothing here indicates any outcome',
        text: 'These are the criteria one statute states. They cannot be applied to a case from outside it, this page does not describe how any assessment is conducted, and anyone affected by a release decision needs a lawyer in that jurisdiction.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why a sentence length is not time served](/corrections/why-a-sentence-length-is-not-time-served), [what reintegration means](/corrections/what-reintegration-means), and [probation is three different things](/corrections/probation-is-three-different-things).',
      },
    ],
  },
  {
    slug: 'why-a-sentence-length-is-not-time-served',
    title: 'Why a sentence length is not time served',
    shortTitle: 'Sentence length vs time served',
    question: 'Why is the number announced in court not the number of years in custody?',
    summary:
      'Because they are answers to different questions. The announced term is what the court imposed; time in custody is what execution produces after suspension, release provisions and rules about combining terms have operated on it.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'release-before-the-end-of-a-sentence',
      'conviction-sentence-and-execution',
      'what-a-suspended-sentence-is',
    ],
    sources: ['ca-criminal-code-718', 'de-stgb-56-strafaussetzung', 'de-stgb-57-reststrafe'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['legal-certainty'],
    uncertainty: [
      'This page describes categories of provision that separate an imposed term from time in custody, using two systems as worked examples. It is not a method for calculating anything, and it deliberately does not attempt one.',
      'Which of these provisions exist, and how they interact, differs in every jurisdiction. Nothing here transfers.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Two different quantities get called "the sentence". One is what the court imposed — the term fixed at sentencing, which is a judicial decision about the offence and the offender. The other is the period actually spent in custody, which is what remains after the provisions governing execution have operated. They are related but not the same, and in most systems they are not designed to be.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'This page cannot be used to work anything out',
        text: 'Nothing here supports estimating how long anyone will spend in custody. The provisions described exist in some systems and not others, interact differently everywhere, and depend on facts this page does not have. Anyone with a real question about a real case needs a lawyer in that jurisdiction. This page explains why the two numbers differ, not what either would be.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The gap is not a defect that systems have failed to close. It follows from the decision to separate sentencing from execution. Once a system decides that a court fixes a term and a different process carries it out, the second process needs rules — and any rule about suspension, combination or release will produce a custodial period different from the term on its face.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why this gets reported as a scandal',
        text: 'The announced term is the part of the process that is public, quotable and easy to report. The execution provisions that operate on it are statutory, technical and invisible. So the two numbers reach the public through completely different channels, and the difference between them arrives without the explanation that would make it intelligible — which is a communication problem more than a legal one.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Three categories of provision separate the two quantities, and each is a deliberate feature of the system that has it.',
      },
      {
        kind: 'paragraph',
        text: 'First, suspension. A fixed term may never be executed at all. German law directs that on a custodial sentence of not more than one year the court suspends execution where the statutory expectation is made out, and permits suspension of a term not exceeding two years where special circumstances are present. In both cases the term stands and the custody does not occur unless something further happens.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung'],
      },
      {
        kind: 'paragraph',
        text: 'Second, release provisions. Where a term is executed, statutes commonly permit the remainder to be suspended once a stated fraction has been served — under German law two-thirds, and one-half in the narrower first-sentence case, each subject to further conditions including public security and the convicted person’s consent.',
        claim: 'fact',
        sources: ['de-stgb-57-reststrafe'],
      },
      {
        kind: 'paragraph',
        text: 'Third, rules about combining terms. Where a person is sentenced for more than one offence, the individual terms do not necessarily aggregate arithmetically. Canadian statute states the principle directly: where consecutive sentences are imposed, the combined sentence should not be unduly long or harsh. So the total is subject to a judgment about the total, not just to addition.',
        claim: 'fact',
        sources: ['ca-criminal-code-718'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Totality is not a discount',
        text: 'The principle is not that a person who commits several offences should pay less for each. It is that a combined sentence has to be assessed as the thing it actually is — a single period of custody — rather than accepted as whatever the arithmetic produced. Adding proportionate individual terms can produce a disproportionate total, and the provision exists because that is a real possibility rather than a theoretical one.',
      },
      {
        kind: 'paragraph',
        text: 'Each of these operates at a different stage: suspension at sentencing, release provisions during execution, combination rules when the terms are set. A system may have all three, some, or others this page does not describe.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim:
          'A shorter time in custody than the announced term means the sentence was not enforced.',
        reality:
          'It usually means statutory provisions operated on it. Suspension, release of a remainder and rules about combining terms are enacted law, applied by courts, not departures from the sentence.',
      },
      {
        claim: 'The court that imposed the term decides how much of it is served.',
        reality:
          'Not necessarily the same court and not necessarily at the same time. Under the German provisions the suspension of a remainder is a separate judicial decision taken later, on criteria the sentencing court did not apply.',
      },
      {
        claim: 'Consecutive sentences simply add up.',
        reality:
          'Canadian statute provides that where consecutive sentences are imposed the combined sentence should not be unduly long or harsh, which makes the total subject to its own assessment rather than to arithmetic alone.',
      },
      {
        claim: 'You can estimate time in custody from the announced term.',
        reality:
          'Not from anything on this page. Which provisions apply depends on the jurisdiction, the offence, the framework and facts that are not general. This page explains why the numbers differ, and deliberately provides no method for relating them.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The categories, and where two systems place them.',
      },
      {
        kind: 'list',
        items: [
          'Suspension before any custody — Germany, StGB § 56.',
          'Suspension of the remainder during execution — Germany, StGB § 57.',
          'A constraint on the combined length of consecutive terms — Canada, Criminal Code s. 718.2(c).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Three categories, not a complete list',
        text: 'Other provisions separate imposed term from time in custody in other systems — arrangements for time already spent in detention, remission schemes, and mechanisms this page has not researched. The three described here are examples with authoritative text behind them, not a taxonomy.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The gap between the two numbers is a legal-certainty question as much as a corrections one. A person sentenced is entitled to know what the term means, which requires the execution provisions to be stated in law rather than left to administrative practice.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Public understanding matters for a second reason. A system whose announced terms are widely believed to be fictional loses something in the announcement itself, and the fix is explaining the provisions rather than adjusting the terms to match expectations they were never measuring.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [release before the end of a sentence](/corrections/release-before-the-end-of-a-sentence), [conviction, sentence and execution](/corrections/conviction-sentence-and-execution), and [legal certainty](/justice/legal-certainty).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Detention: who is held, by whom, and how it is counted                 */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'what-remand-detention-is',
    title: 'What remand detention is',
    shortTitle: 'Remand detention',
    question: 'Are the people in prison all serving sentences?',
    summary:
      'No — and in one measured system, most of those in provincial custody were not. Remand is detention before conviction or sentence, which makes it a different thing from punishment despite looking identical from inside.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-prison-capacity-is-measured',
      'who-runs-prisons',
      'conviction-sentence-and-execution',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: ['ca-statcan-corrections', 'mandela-rules'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['presumption-of-innocence', 'due-process'],
    uncertainty: [
      'One measured figure is used, from one country, for one fiscal year, on a stated counting definition. It supports no comparison with any other country and no general claim about how common remand is.',
      'The grounds on which remand may be ordered, and the procedures for reviewing it, differ in every system and are not described here.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Remand detention is being held in custody before the case is over — before conviction, or after conviction but before sentence. The person has not been sentenced to anything. It is ordered for reasons connected with the proceedings rather than as a consequence of them, and it ends when the case does, either by release or by the beginning of a sentence.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what remand is, how it is counted, and why the distinction matters. It does not describe the grounds for ordering it in any jurisdiction, does not describe how it is challenged, and is not advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A system that could never detain before trial would have to accept that some proceedings will not be completed. A system that detained everyone before trial would be punishing people it has not convicted. Remand is the compromise, and it is uncomfortable in a way that neither of the alternatives it replaces would be less so.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The tension is not resolvable, only structured',
        text: 'A person on remand is presumed innocent and is in custody. No formulation makes those comfortable together. What legal systems do instead is structure the decision — requiring stated grounds, a judicial decision, time limits and periodic review — so that the detention is at least answerable. Structure is what is available; resolution is not.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Remand is a significant share of custody where it has been measured, and in at least one measured system it was the larger share. Statistics Canada records that in fiscal year 2023/2024 the average daily count of adults in provincial and territorial custody in Canada was 25,349.8, of which 19,334.5 were held on remand and 5,895.1 were serving a sentence.',
        claim: 'fact',
        sources: ['ca-statcan-corrections'],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What that figure is, exactly',
        text: 'Five qualifications travel with it and none is optional. It covers provincial and territorial custody only, excluding federal custody — sentences of two years or more, administered by Correctional Service Canada — so it is not the total number of adults in custody in Canada. It is an average daily count over the fiscal year, not a single-day snapshot. It aggregates ten provinces and three territories and describes none of them individually. It counts adults, not youth. And it supports no comparison with any other country.',
      },
      {
        kind: 'paragraph',
        text: 'The counting point generalises even though the number does not. Any figure described as a prison population is answering a question about who is included, and remand is the category most often assumed away. A population that mixes sentenced and unsentenced people is not a measure of how many people a system has punished, and treating it as one produces a claim the data does not support.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Conditions are a separate question from status. The United Nations Standard Minimum Rules for the Treatment of Prisoners proceed on the basis that people in detention retain rights other than those necessarily restricted by lawful detention, and the requirement of inspection by a body independent of the prison administration applies to places of detention as such.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why remand is easy to overlook institutionally',
        text: 'Remand sits between two systems and is fully owned by neither. The court has ordered it but does not run it; the prison administration runs it but did not order it and cannot end it. Responsibility that is split this way tends to be reported on less than responsibility that is single, which is a structural reason for a gap rather than an accusation about anyone.',
      },
    ],
    misconceptions: [
      {
        claim: 'People in prison have been convicted of something.',
        reality:
          'Not all of them. In Canadian provincial and territorial custody, the average daily count for fiscal 2023/2024 recorded more people on remand than serving a sentence. Remand means the case is not over.',
      },
      {
        claim: 'Remand is a short administrative step before trial.',
        reality:
          'Its length depends on how long proceedings take, which is not fixed. That is why time limits and periodic review are features of the systems that structure it.',
      },
      {
        claim: 'Remand is punishment that starts early.',
        reality:
          'It is ordered for reasons connected with the proceedings, not as a consequence of a finding of guilt — there has been no such finding. The person is presumed innocent throughout.',
      },
      {
        claim: 'A prison population figure tells you how many people a country has sentenced.',
        reality:
          'Only if it excludes remand, and many published figures do not. What a population figure measures depends entirely on the counting definition attached to it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where remand sits institutionally differs, and it changes what can be measured.',
      },
      {
        kind: 'list',
        items: [
          'Held in the sub-national system alongside short sentences, so a sub-national figure mixes both — Canada, where remand and sentences under two years are provincial or territorial.',
          'Counted inside the headline prison population, so the total is not a count of sentenced people.',
          'Counted separately, so sentenced and unsentenced populations can be stated independently.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The presumption of innocence is not suspended by remand; it is the reason remand needs justification at all. A system that could detain before trial without stating grounds would have converted the presumption into a formality that operates only at the verdict.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Accurate counting is part of the same accountability. A figure that silently includes unconvicted people, presented as a measure of punishment, misdescribes what the system is doing in a direction that is hard to detect from the outside.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how prison capacity is measured](/corrections/how-prison-capacity-is-measured), [the presumption of innocence](/justice/what-is-the-presumption-of-innocence), and [arrest and detention](/law-enforcement/arrest-and-detention).',
      },
    ],
  },
  {
    slug: 'who-runs-prisons',
    title: 'Who runs prisons',
    shortTitle: 'Who runs prisons',
    question: 'Is there one prison system in a country?',
    summary:
      'Frequently not. Custody is split by level of government, by sentence length, or by both — and where it is split, a national prison figure is an aggregation of separate systems rather than a measurement of one.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-prison-capacity-is-measured',
      'conviction-sentence-and-execution',
      'what-remand-detention-is',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: [
      'jp-moj-corrections',
      'ca-constitution-1867',
      'ca-statcan-corrections',
      'br-lep-1984',
      'de-grundgesetz',
      'dk-rigsrevisionen-prisons',
      'se-kriminalvarden',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['jurisdiction', 'oversight'],
    uncertainty: [
      'Six systems are described from official sources. No individual sub-national prison administration has been researched, so nothing here describes conditions, regimes or organisation in any Land, province, state or institution.',
      'Contracted operation of prisons exists in several countries and has not been researched here.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Asking who runs prisons in a country usually produces more than one answer. Custody may be administered nationally by a ministry, divided between levels of government, divided by the length of the sentence, or combined with community supervision in a single agency. The arrangement is not a detail of organisation — it determines what a national statistic can mean and what a reader can ask for.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes who administers custody in six systems, from official sources. It does not describe conditions, regimes, staffing or operations anywhere, and it makes no comparison between the systems it names.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The variation follows constitutional structure rather than penal policy. Where the constitution allocates the administration of justice to sub-national units, prisons usually go with it; where the constitution does not, they usually do not. Nobody designs a prison system in isolation from the state it sits in.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The consequence that matters most',
        text: 'Where custody is split, there is no single system to measure, so every national figure is an aggregation of separately administered systems. That is not a caveat to be appended after the number; it changes what the number is. A national aggregate can be perfectly accurate and still describe none of the systems it is built from.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Japan administers custody nationally. The Ministry of Justice states that prisons, juvenile prisons and detention houses are collectively referred to as penal institutions, and that these are under its jurisdiction and under the supervision of its Correction Bureau together with eight regional correction headquarters as field offices.',
        claim: 'fact',
        sources: ['jp-moj-corrections'],
      },
      {
        kind: 'paragraph',
        text: 'Canada splits custody by the length of the sentence. The administration of justice is provincial under section 92(14) of the Constitution Act 1867 while the criminal law is federal, and the practical division in corrections is that sentences of two years or more are federal, administered by Correctional Service Canada, while shorter sentences and remand are provincial or territorial.',
        claim: 'fact',
        sources: ['ca-constitution-1867', 'ca-statcan-corrections'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A split by sentence length is unusual and consequential',
        text: 'It means the identity of the administering body, the applicable rules and the inspection regime follow from the term the court imposed rather than from where the person is or what they did. Two people convicted of similar conduct can end up in systems run by different orders of government, and a statistic about one of those systems is silent about the other.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil splits by federal unit. Article 71 of the Lei de Execução Penal places the national penitentiary department under the Ministry of Justice as the federal executive body, while Article 74 provides that the local penitentiary department, or a similar body, supervises and coordinates the penal establishments of the federal unit to which it belongs — so each state runs its own prisons.',
        claim: 'fact',
        sources: ['br-lep-1984'],
      },
      {
        kind: 'paragraph',
        text: 'Germany reaches a similar outcome by a general constitutional rule rather than a penal one. Prisons are administered by the Länder, following Article 83 of the Basic Law, under which the Länder execute federal laws in their own right.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'Denmark and Sweden do the opposite, and combine rather than divide. Denmark runs prisons and probation through a single national body under the Ministry of Justice, which executes custodial sentences and supervises suspended sentences, electronic monitoring and parole. Sweden’s single national service operates prisons, remand prisons and a national transport service and is responsible for supervising people serving sentences in the community.',
        claim: 'fact',
        sources: ['dk-rigsrevisionen-prisons', 'se-kriminalvarden'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two axes, not one',
        text: 'Systems divide along two independent lines: between levels of government, and between custody and community supervision. Japan is national and Brazil is sub-national on the first axis; Denmark and Sweden are combined on the second. A country can be split on one and unified on the other, so "who runs prisons" needs both answers.',
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has a national prison service.',
        reality:
          'Brazil’s execution statute assigns supervision of penal establishments to the penitentiary department of each federal unit, and German prisons are administered by the Länder under the general rule of Article 83 of the Basic Law.',
      },
      {
        claim: 'Federal countries always run prisons federally.',
        reality:
          'Brazil and Germany do the reverse. Canada does both at once, dividing custody by sentence length rather than by offence or location.',
      },
      {
        claim: 'Prisons and probation are naturally separate organisations.',
        reality:
          'In Denmark and Sweden a single national body does both. Whether the functions are separated is a national arrangement rather than a property of the functions.',
      },
      {
        claim: 'A national prison figure describes the country’s prison system.',
        reality:
          'Where custody is split it describes an aggregation of separately administered systems and none of them individually. That is a property of the figure, not a caveat about its accuracy.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six systems, four arrangements.',
      },
      {
        kind: 'list',
        items: [
          'National, inside a justice ministry — Japan, Ministry of Justice Correction Bureau with eight regional headquarters.',
          'Split by sentence length between federal and sub-national administrations — Canada, two years or more federal.',
          'Split by federal unit, with a federal department alongside — Brazil, LEP Arts. 71 and 74; Germany, Basic Law Art. 83.',
          'National and combined with community supervision in one body — Denmark and Sweden.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not researched here',
        text: 'No individual Land, state, province or institution has been researched. Contracted operation of prisons, which exists in several countries, is also outside what this page can describe.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Who administers custody determines who inspects it, who answers a complaint, and which legislature can change the rules. For anyone trying to raise a concern, that is the first question rather than a technical one — the correct recipient of a complaint about a prison depends on which government runs it.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also determines what can be known. A country with sub-national administration may have sixteen or twenty-seven answers to a question a reader assumes has one, and the honest response to "what are conditions like there" may be that it depends on a unit the enquirer has not yet named.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how prison capacity is measured](/corrections/how-prison-capacity-is-measured), [the correctional service](/institutions/correctional-service), and [conviction, sentence and execution](/corrections/conviction-sentence-and-execution).',
      },
    ],
  },
  {
    slug: 'how-prison-capacity-is-measured',
    title: 'How prison capacity is measured',
    shortTitle: 'Measuring prison capacity',
    question: 'Why do figures about how full prisons are disagree with each other?',
    summary:
      'Because each is built on a different counting rule, and the rule usually travels separately from the number. Four official sources are compared here — not to produce a figure, but to show what any figure of this kind is actually measuring.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['who-runs-prisons', 'what-remand-detention-is', 'why-correctional-systems-exist'],
    sources: [
      'coe-space-i-2024',
      'ca-statcan-corrections',
      'br-sisdepen-2s2024',
      'jp-moj-corrections',
      'de-grundgesetz',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['accountability'],
    uncertainty: [
      'This page is about how figures of this kind are constructed. It deliberately states no cross-country comparison, because the intergovernmental source used here warns in its own text against exactly that.',
      'The platform holds no verified capacity statistic for several countries, including Japan. Those absences are stated rather than estimated.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Figures about how full a prison system is combine two separately constructed quantities: how many people are held, and how many places there are. Each depends on decisions that are usually recorded in a methodological note rather than in the headline — who counts as held, on what date or over what period, at what level of aggregation, and what a place is. Change any one and the figure changes without anything happening in any prison.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how such figures are built and what they can support. It is not a comparison of countries, it does not publish a rate for any system, and it makes no claim about conditions in any institution. Where the platform has no verified figure, the page says so.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The subject attracts strong statements and weak evidence in roughly inverse proportion. A single number is easy to repeat and the qualifications attached to it are not, so the number circulates and the counting rule stays behind. The result is confident claims resting on measurements that were never designed to support them.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Four conversions to refuse',
        text: 'Most misuse of these figures is one of four moves: turning a population into an occupancy rate the source did not publish; turning a raw count into a prevalence without a denominator; turning a single-day snapshot into an annual average, or the reverse; and turning a national aggregate into a statement about an individual facility. Each looks like arithmetic and each is an assertion the source does not make.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Start with the intergovernmental source, because it is explicit about its own limits. The Council of Europe Annual Penal Statistics collect data supplied by national prison administrations through an agreed questionnaire, with a stated reference date for the prison population. The report’s aim is comparable data, and it nonetheless warns in its own text that "any comparisons of the levels (in rates, ratios and percentages) shown by the countries according to different indicators are always problematic".',
        claim: 'fact',
        sources: ['coe-space-i-2024'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Take the warning at face value',
        text: 'It is tempting to read that as routine statistical modesty and proceed to compare anyway. The people who assembled the data are saying that the indicators are built differently in different countries, which is not a caveat about precision — it is a statement that the comparison does not mean what it appears to mean. A source that declines to support a comparison cannot be cited for one.',
      },
      {
        kind: 'paragraph',
        text: 'Now three national sources, each counting something different. Statistics Canada publishes average daily counts over a fiscal year for adults in provincial and territorial correctional programs. That is an average over a period, not a snapshot; it excludes federal custody, which covers sentences of two years or more; it aggregates ten provinces and three territories; and it counts adults, not youth.',
        claim: 'fact',
        sources: ['ca-statcan-corrections'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil’s penitentiary statistics report works differently again. Its published totals for the second half of 2024 use a snapshot date of 31 December 2024 and the category *presos em cela física* — people who, regardless of daytime release for work or study, sleep in the prison establishment. Home detention is tabulated separately and excluded from that category, so the figure is not the total number of people under penal custody. The report prints population, capacity of places and deficit of places, and does not print an occupancy percentage on its totals pages.',
        claim: 'fact',
        sources: ['br-sisdepen-2s2024'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A deficit is published; a rate is derived',
        text: 'The Brazilian report gives population, capacity and the difference between them. An occupancy percentage is not among the figures it prints, so any rate quoted from it is a calculation performed by whoever quoted it. That may be a reasonable calculation — but it should be attributed to the person who did it, not to the report.',
      },
      {
        kind: 'paragraph',
        text: 'Aggregation level is the fourth variable, and it is set by who administers custody rather than by the statistician. Where prisons are administered by sub-national units — as in Germany, following the general rule of Article 83 of the Basic Law that the Länder execute federal laws in their own right — a national figure is an aggregation of separate systems and describes none of them individually.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'And sometimes the honest answer is that there is no figure. This platform publishes no detention-capacity statistic for Japan. The Ministry of Justice page that establishes the national administration of penal institutions carries no such figure, and the official prison numbers are released in linked spreadsheet tables and a large annual publication that could not be verified to the standard the other country pages meet. The claim was deferred rather than approximated.',
        claim: 'fact',
        sources: ['jp-moj-corrections'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Five questions to ask of any figure of this kind',
        text: 'Who is included — sentenced only, or remand as well; adults only, or youth; custody only, or home detention? What date or period? What level of aggregation — one system, or many summed? Was the rate published, or derived by someone? And does the source itself say what it may be compared with?',
      },
    ],
    misconceptions: [
      {
        claim: 'A prison population figure is a straightforward count.',
        reality:
          'It is a count of a defined category. Brazil’s published total counts people who sleep in the establishment and excludes home detention, which is tabulated separately; Canada’s provincial figures exclude federal custody entirely.',
      },
      {
        claim: 'International statistics exist so that countries can be compared.',
        reality:
          'The Council of Europe report states its aim is comparable data and warns in the same document that comparisons of levels between countries according to different indicators are always problematic.',
      },
      {
        claim: 'If a report gives population and capacity, it gives an occupancy rate.',
        reality:
          'Not necessarily. The Brazilian report prints population, capacity and deficit but no occupancy percentage on its totals pages, so a rate taken from it is a derivation by whoever calculated it.',
      },
      {
        claim: 'A national figure tells you what an individual prison is like.',
        reality:
          'It does not, and where custody is administered sub-nationally it does not describe any of the constituent systems either. Facility-level conditions require facility-level evidence.',
      },
      {
        claim: 'Where no figure is published, an estimate is better than nothing.',
        reality:
          'An approximation presented alongside verified figures is indistinguishable from them to a reader. Stating that a figure was not verified — as this platform does for Japanese detention capacity — carries information; an estimate would destroy it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four official sources, four counting rules.',
      },
      {
        kind: 'list',
        items: [
          'Intergovernmental collection with a stated reference date, warning against comparison of levels — Council of Europe SPACE I.',
          'Average daily counts over a fiscal year, sub-national only, adults only — Statistics Canada.',
          'Single-day snapshot of a named custody category, with home detention tabulated separately and no printed occupancy rate — Brazil, SISDEPEN.',
          'No verified capacity figure at all, stated as such rather than estimated — Japan.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Measurement discipline is an accountability question, not a statistical nicety. Conditions in closed institutions are contested precisely because the people inside cannot readily be seen or heard, and a figure that is overstated is as damaging to that argument as one that is understated — both give whoever disagrees a reason to dismiss the whole account.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The practical consequence for a reader is a habit rather than a fact: when a figure of this kind appears, find the counting definition before deciding what it shows. If the definition is not available, the figure is not usable for the claim it is being made to support.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who runs prisons](/corrections/who-runs-prisons), [what remand detention is](/corrections/what-remand-detention-is), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Reintegration                                                          */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'what-reintegration-means',
    title: 'What reintegration means',
    shortTitle: 'Reintegration',
    question: 'What is a prison system supposed to have achieved by the time someone leaves?',
    summary:
      'Two legislatures answer in their own text, and neither answer is “that the person has been reformed”. One names a capacity; the other names conditions the state must provide. The difference is where the obligation sits.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-correctional-systems-exist',
      'release-before-the-end-of-a-sentence',
      'what-sentencing-is-for',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: [
      'br-lep-1984',
      'de-stvollzg-2-vollzugsziel',
      'de-stgb-57-reststrafe',
      'mandela-rules',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['accountability'],
    uncertainty: [
      'Two statutory formulations are described from primary text. Whether either system achieves what its statute states would require outcome evidence the platform does not hold, and this page makes no such claim.',
      'What reintegration work actually consists of — education, employment, housing, health, family contact — was not researched here and is not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Reintegration is the name for what a correctional system is supposed to be doing with respect to the person’s life after the sentence ends. It is a statement of aim rather than a description of an activity, and the two systems quoted here state the aim in importantly different grammar — one as something the person becomes capable of, the other as conditions the state provides.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This sets out what two statutes say the aim is. It does not assess whether either system achieves it, does not describe programmes anywhere, and is not advice to anyone leaving custody or supporting someone who is.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Almost every custodial sentence ends. That is the observation the aim rests on, and it does not depend on any view about what punishment is for. A system that took no interest in what happens afterwards would still be releasing people, having had them in its custody for the intervening period, and having chosen to do nothing with it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why this is not the same as arguing for leniency',
        text: 'German law places the reintegration goal beside the protection of the public in the same provision, which is the clearest available demonstration that the two are not opposed in the statute’s own terms. Someone who leaves custody better placed to live without offending is not a concession to that person at the public’s expense. The argument for reintegration does not require any position on how severe sentences should be.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany states the aim as a capacity the person acquires. Section 2 of the Prison Act provides that in the execution of a custodial sentence the prisoner *soll … fähig werden, künftig in sozialer Verantwortung ein Leben ohne Straftaten zu führen* — shall become capable of leading a life in social responsibility without offences in future. The statute names this the Vollzugsziel, the goal of execution, and adds that execution also serves the protection of the general public from further offences.',
        claim: 'fact',
        sources: ['de-stvollzg-2-vollzugsziel'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil states it as conditions the state supplies. Article 1 of the Lei de Execução Penal provides that penal execution has as its objective to give effect to the provisions of the sentence and *proporcionar condições para a harmônica integração social do condenado* — to provide conditions for the harmonious social integration of the convicted person.',
        claim: 'fact',
        sources: ['br-lep-1984'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The grammatical difference is the substantive one',
        text: 'The German provision describes something the person is to become capable of; the Brazilian provision describes something the administration is to provide. Read strictly, they place the obligation in different places — one is a statement about an outcome in the person, the other about an input from the state. A system can fail the Brazilian formulation by providing nothing even if no one reoffends, and can satisfy it by providing conditions that are not taken up.',
      },
      {
        kind: 'paragraph',
        text: 'Release mechanisms are where the aim becomes operational rather than declaratory. German law permits the remainder of a fixed-term sentence to be suspended on probation once a stated fraction has been served, subject to the public-security condition and the convicted person’s consent, with the assessment expressly taking into account their conduct during execution and their circumstances of life. A supervised transition is the structure through which a stated reintegration goal has any mechanism at all.',
        claim: 'fact',
        sources: ['de-stgb-57-reststrafe'],
      },
      {
        kind: 'paragraph',
        text: 'Underneath both national formulations sit the international minimum standards, which address the treatment of people in detention throughout and require inspection by a body independent of the prison administration. They set conditions rather than outcomes, and they apply regardless of what purpose a national statute states.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
    ],
    misconceptions: [
      {
        claim: 'Reintegration means the person has been reformed.',
        reality:
          'Neither statute says that. German law names the capacity to lead a life without offences in social responsibility; Brazilian law names conditions the state provides for social integration. Both stop short of asserting a change in character.',
      },
      {
        claim: 'Aiming at reintegration means treating public protection as less important.',
        reality:
          'The German provision states both in the same section — the reintegration goal, and that execution also serves protection of the general public from further offences. The statute does not present them as alternatives.',
      },
      {
        claim: 'A statute stating a reintegration goal shows the system achieves it.',
        reality:
          'It shows what the legislature stated. Whether it is achieved requires outcome evidence, which is a separate question this page does not address and makes no claim about.',
      },
      {
        claim: 'Reintegration is something that starts at the gate on the day of release.',
        reality:
          'Where it is a statutory goal it applies to the execution of the sentence throughout, and release provisions that suspend a remainder on conditions are the mechanism by which the transition is structured rather than abrupt.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two formulations, placed differently and phrased differently.',
      },
      {
        kind: 'list',
        items: [
          'As a capacity the person is to acquire, named as the goal of execution, alongside public protection — Germany, StVollzG § 2.',
          'As conditions the state is to provide, paired with giving effect to the sentence — Brazil, LEP Art. 1.',
          'As minimum conditions of treatment and a requirement of independent inspection, stated internationally rather than nationally — the Nelson Mandela Rules.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What is not claimed here',
        text: 'Nothing on this page describes reoffending, employment, housing or any other outcome in either country, or the programmes either system operates. Those require evidence the platform has not gathered.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A statutory aim is a standard drawn from the system’s own law, which makes it usable in a way an imported standard is not. An administration that provided no conditions for social integration would be departing from its own execution statute, and that is a stronger objection than a disagreement about priorities.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The inspection requirement completes the picture. A goal stated in law, in a setting the public cannot observe, is only meaningful if someone independent of the administration is able to go and look.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why correctional systems exist](/corrections/why-correctional-systems-exist), [release before the end of a sentence](/corrections/release-before-the-end-of-a-sentence), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     Wave 17 — sentencing institutions and community corrections.

     Wave 13 owns the purposes of sentencing, the custodial/non-custodial
     distinction, suspension, release, reintegration and who administers custody.
     None of that is restated. What was absent was the machinery: how a fine is
     calculated, what must be true before each kind of sentence becomes available,
     who writes the guidelines and how binding they are, what a community order
     actually requires, who tells the court about the offender before it decides,
     who inspects a prison, and how a prisoner complains.
     ------------------------------------------------------------------------ */
  {
    slug: 'how-fines-are-calculated',
    title: 'How fines are calculated',
    shortTitle: 'How fines work',
    question: 'How can one fine be fair to a rich person and a poor person at once?',
    summary:
      'Two systems answer by separating what the offence deserves from what the offender can pay. Germany splits the fine into a number of daily units and a value per unit; England and Wales fixes one amount that must reflect seriousness and take account of means — upwards as well as downwards.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'when-a-court-may-imprison',
      'custodial-and-non-custodial-sentences',
      'what-sentencing-is-for',
    ],
    sources: ['de-stgb-40-43-geldstrafe', 'uk-sentencing-act-2020-thresholds'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['justice', 'due-process'],
    uncertainty: [
      'Two systems are described from primary text. How often fines are imposed, at what levels, and how reliably they are collected are empirical questions this platform has not researched.',
      'Nothing here indicates what any offence attracts. It describes the mechanics of calculation, not any outcome.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A fine is the most frequently imposed criminal sanction in many systems and the least examined. It carries a problem no other sanction has in the same form: the same sum is a minor inconvenience to one person and a catastrophe to another, so a fixed amount punishes unequally while appearing to punish identically.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes how two systems calculate a fine. It states no amount for any offence, is not legal advice, and cannot indicate what would happen in any case.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Every other sanction is measured in something the state distributes equally. A day of custody is a day for everyone; an hour of unpaid work is an hour. Money is the exception: a unit of it means different things to different people, so a sanction denominated in money cannot be equal and fixed at the same time.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'This is an equality-before-the-law problem, not an accounting one',
        text: 'A court that fined everyone the same would be treating unlike situations alike and calling it consistency. A court that simply fined wealthy people more would be punishing them for their means. The designs below are attempts to be equal in the thing that is supposed to be equal — the severity of the punishment — rather than in the number.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany splits the calculation in two. Section 40(1) of the Criminal Code provides that the fine is imposed in daily units — *Tagessätze* — at least five and, unless the law provides otherwise, at most 360 full units. The number of units expresses the offence.',
        claim: 'fact',
        sources: ['de-stgb-40-43-geldstrafe'],
      },
      {
        kind: 'paragraph',
        text: 'The value of a unit expresses the offender. Section 40(2) directs the court to determine it taking into account the personal and economic circumstances of the offender, as a rule proceeding from the net income the offender has or could have on average in one day, while ensuring that the offender is left at least the minimum income indispensable for living. A daily unit is set at not less than one euro and not more than thirty thousand.',
        claim: 'fact',
        sources: ['de-stgb-40-43-geldstrafe'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Two people who commit the same offence in the same circumstances receive the same number of daily units and different totals. The number is the sentence; the money is the conversion. Section 40(4) requires the decision to state both — so the record shows what the court thought of the offence separately from what it thought the offender could pay, and an appeal can attack either without disturbing the other.',
      },
      {
        kind: 'paragraph',
        text: 'The statute accepts that the second figure is often unknowable precisely. Section 40(3) permits the offender’s income, assets and other bases for assessing a daily unit to be estimated — which keeps the system working without requiring a financial investigation in every case.',
        claim: 'fact',
        sources: ['de-stgb-40-43-geldstrafe'],
      },
      {
        kind: 'paragraph',
        text: 'England and Wales reaches the same problem with one figure and two requirements. Section 125(1) of the Sentencing Act 2020 provides that the amount of any fine must be such as, in the opinion of the court, reflects the seriousness of the offence. Section 125(2) requires the court, in fixing the amount, to take into account the circumstances of the case including in particular the financial circumstances of the offender so far as they are known or appear to the court.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Means can raise a fine as well as lower it',
        text: 'Section 125(3) states expressly that subsection (2) applies whether taking financial circumstances into account has the effect of increasing or reducing the amount. The provision is not a hardship discount. It is a direction that the figure track the effect on this offender in both directions.',
      },
      {
        kind: 'paragraph',
        text: 'What happens when a fine is not paid is where the two designs meet again. German law converts: section 43 provides that an irrecoverable fine is replaced by a default custodial sentence, with two daily units corresponding to one day, and a minimum of one day. The unit that was the sentence becomes the unit of the conversion.',
        claim: 'fact',
        sources: ['de-stgb-40-43-geldstrafe'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The conversion rate is itself a policy choice',
        text: 'Two daily units to one day of custody is a number a legislature picked, and it can be changed without changing anything about fines or about custody. It determines how much custody an unpaid fine ultimately represents — which is why a provision that looks arithmetical is one of the more consequential lines in the sentencing code.',
      },
    ],
    misconceptions: [
      {
        claim: 'A fine is a fixed amount attached to an offence.',
        reality:
          'Not in the systems described here. German law imposes a number of daily units whose value depends on the offender’s circumstances; English law requires the amount to reflect seriousness and to take account of financial circumstances.',
      },
      {
        claim: 'Taking means into account is a discount for poor offenders.',
        reality:
          'Section 125(3) of the Sentencing Act 2020 states that the duty applies whether the effect is to increase or reduce the fine. The point is equal severity, not lower figures.',
      },
      {
        claim: 'A day-fine system means the court decides how much someone can afford.',
        reality:
          'It decides two things separately: how many units the offence merits, and what a unit is worth for this person. Section 40(4) requires both to be stated in the decision.',
      },
      {
        claim: 'An unpaid fine is simply a debt.',
        reality:
          'Under German law an irrecoverable fine is replaced by a default custodial sentence at a statutory conversion rate of two daily units to one day. The sanction does not disappear; it changes form.',
      },
      {
        claim: 'Fines are a minor sanction not worth explaining.',
        reality:
          'They are the most frequently imposed criminal sanction in many systems, and the one whose severity varies most between people receiving the same nominal penalty. That is exactly why two legislatures legislate the calculation in detail.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two mechanics for the same equality problem.',
      },
      {
        kind: 'list',
        items: [
          'A number of daily units for the offence, and a separate value per unit for the offender, both stated in the decision — Germany, StGB § 40.',
          'Estimation permitted where the financial basis cannot be established — Germany, StGB § 40(3).',
          'One amount that must reflect seriousness and take account of means, increasing or reducing — England and Wales, Sentencing Act 2020 s. 125.',
          'A statutory conversion of an irrecoverable fine into default custody at two units to one day — Germany, StGB § 43.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Mechanics, not levels',
        text: 'Nothing here states what any offence attracts in either system, and nothing compares how severe fines actually are. The sources support the method of calculation and no more.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Stating the number of units and their value separately makes a fine reviewable in two independent ways. A person can say the offence did not merit that many units, or that a unit was valued on a mistaken view of their circumstances, and the two arguments do not collapse into one another.',
        claim: 'fact',
        sources: ['de-stgb-40-43-geldstrafe'],
      },
      {
        kind: 'paragraph',
        text: 'The default-custody rule is the reason the calculation matters beyond money. Where an unpaid fine converts into custody at a fixed rate, an amount set without regard to what the person can pay is a route into a prison, and the provisions requiring means to be considered are the safeguard against it.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [when a court may imprison](/corrections/when-a-court-may-imprison), [custodial and non-custodial sentences](/corrections/custodial-and-non-custodial-sentences), and [equality before the law](/justice/equality-before-the-law).',
      },
    ],
  },
  {
    slug: 'when-a-court-may-imprison',
    title: 'When a court may imprison',
    shortTitle: 'The custody threshold',
    question: 'What has to be true before a court is allowed to send someone to prison?',
    summary:
      'In one system, a ladder written into statute. A community order needs the offence to be serious enough; custody needs it to be so serious that neither a fine alone nor a community sentence can be justified; and if custody follows, it must be the shortest term commensurate with the seriousness.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['GB'],
    temporalScope: 'current',
    related: [
      'how-fines-are-calculated',
      'what-a-community-order-requires',
      'custodial-and-non-custodial-sentences',
    ],
    sources: ['uk-sentencing-act-2020-thresholds', 'uk-sentencing-act-2020-reports-guidelines'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['due-process', 'rule-of-law'],
    uncertainty: [
      'One system’s thresholds are described from primary text. How courts apply "so serious" in practice is case law this platform has not researched.',
      'Nothing here indicates whether any offence would cross any threshold. It sets out what the statute requires the court to be satisfied of, not any outcome.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A threshold is a condition that has to be met before a kind of sentence becomes available at all. It is a different mechanism from a maximum, which caps what may be imposed, and from a guideline, which structures the choice within what is available. A threshold decides whether the choice arises.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes statutory conditions addressed to courts in one jurisdiction. It cannot be applied to a case, it indicates no outcome, and it is not legal advice. Anyone facing a criminal case needs a lawyer in that jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A system that only capped sentences would leave the most severe sanction available in every case within the cap, with nothing but judgement between an offence and a prison. Thresholds put the question the other way round: not how much custody is too much, but whether custody may be reached for at all.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A threshold is a stronger constraint than a principle',
        text: 'A principle directing courts towards the least restrictive sanction can be satisfied by a court that considered the alternatives and preferred custody. A threshold cannot: if the statutory opinion is not formed, the sentence is not available. That is why this page sits beside rather than inside the restraint principles other systems use.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The lowest rung is the community order. Section 204(2) of the Sentencing Act 2020 provides that the court must not make a community order unless it is of the opinion that the offence, or the combination of the offence and one or more offences associated with it, was serious enough to warrant the making of such an order.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
      {
        kind: 'paragraph',
        text: 'Crossing a threshold does not compel the sentence above it. Section 204(5) states that the fact the court may make a community order does not require it to do so — so the threshold opens a door rather than pushing the court through it, and a fine remains available above the line as well as below.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
      {
        kind: 'paragraph',
        text: 'The custody threshold is drafted as a comparison rather than a level. Section 230(2) provides that the court must not pass a custodial sentence unless it is of the opinion that the offence, or the combination, was so serious that *neither a fine alone nor a community sentence can be justified* for the offence.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'The custody test does not ask whether the offence is serious. It asks whether the two less severe sanctions can be justified — which means a court reaching for custody has to have formed a view about a fine and about a community sentence first. The alternatives are not options the court may consider; they are the terms in which the custody question is posed.',
      },
      {
        kind: 'paragraph',
        text: 'And crossing the threshold does not settle the length. Section 231(2) provides that a custodial sentence must be for the shortest term, not exceeding the permitted maximum, that in the opinion of the court is commensurate with the seriousness of the offence or the combination — subject to stated exceptions for sentences fixed by law and required life sentences.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where the ladder stops applying',
        text: 'Section 230(3) disapplies the custody threshold where a mandatory sentence requirement applies. The pattern matches what this platform found in the purposes provision: where Parliament has removed the discretion, the machinery that structures the discretion goes with it. Thresholds constrain choices, and where there is no choice there is nothing to constrain.',
      },
      {
        kind: 'paragraph',
        text: 'The thresholds outrank the guidelines rather than the other way round. The general duty to follow sentencing guidelines is expressly subject to an enumerated list of provisions that includes the fine rule, the community-order restriction, the custody threshold and the shortest-term rule.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'paragraph',
        text: 'Forming these opinions is not meant to be done on the papers alone. Section 204(3) requires the court, in forming its opinion about the community-order threshold, to take into account all the information available about the circumstances of the offence, including any aggravating or mitigating factors; and the pre-sentence report requirements apply to that opinion.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
    ],
    misconceptions: [
      {
        claim: 'A court may imprison whenever the offence carries a prison sentence.',
        reality:
          'Section 230(2) requires the court to be of the opinion that the offence was so serious that neither a fine alone nor a community sentence can be justified. Availability in the offence definition is not the same as availability in the case.',
      },
      {
        claim: 'Crossing the community-order threshold means a community order should follow.',
        reality:
          'Section 204(5) states that the fact the court may make a community order does not require it to do so. A threshold makes a sentence available, not obligatory.',
      },
      {
        claim: 'Once custody is justified, the length is a matter for the court alone.',
        reality:
          'Section 231(2) requires the shortest term commensurate with the seriousness of the offence, within the permitted maximum, subject to stated exceptions.',
      },
      {
        claim: 'Sentencing guidelines override the statutory thresholds.',
        reality:
          'The duty to follow guidelines is expressly subject to a list of provisions that includes the custody threshold and the shortest-term rule. The statute outranks the guideline.',
      },
      {
        claim: 'The custody threshold applies to every offence.',
        reality:
          'Section 230(3) disapplies it where a mandatory sentence requirement applies, with narrow exceptions. Where Parliament has fixed the sentence, the threshold has nothing to operate on.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'One statute, four rungs, in the order they are tested.',
      },
      {
        kind: 'list',
        items: [
          'A fine, whose amount must reflect seriousness and take account of means — s. 125.',
          'A community order, available only if the offence was serious enough to warrant one, and not required even then — s. 204(2) and (5).',
          'Custody, available only if the offence was so serious that neither a fine alone nor a community sentence can be justified — s. 230(2).',
          'If custody, the shortest term commensurate with the seriousness, within the permitted maximum — s. 231(2).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'England and Wales only',
        text: 'These provisions are extent-marked E+W. Scotland and Northern Ireland have separate sentencing law which is not described here, and no other system structures its sanctions this way merely because this one does.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A threshold expressed as an opinion the court must form is a reviewable step. A custodial sentence passed without the section 230(2) opinion has a defect in the route to it, which is a different complaint from arguing that the term was too long.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The comparative drafting also creates a record. Because the custody test is framed against a fine and a community sentence, a court crossing it has necessarily addressed both — and what it says about them is available to anyone examining the decision afterwards.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a community order requires](/corrections/what-a-community-order-requires), [sentencing guidelines and who writes them](/corrections/sentencing-guidelines-and-who-writes-them), and [what sentencing is for](/corrections/what-sentencing-is-for).',
      },
    ],
  },
  {
    slug: 'sentencing-guidelines-and-who-writes-them',
    title: 'Sentencing guidelines and who writes them',
    shortTitle: 'Sentencing guidelines',
    question: 'Who decides what a typical sentence should be, if not the judge?',
    summary:
      'In one system a statutory Council writes guidelines and courts must follow them — unless satisfied that following them would be contrary to the interests of justice. That formulation is neither advisory nor mandatory, and the difference is the whole design.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'when-a-court-may-imprison',
      'what-a-pre-sentence-report-is',
      'what-sentencing-is-for',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'uk-cja-2009-sentencing-council',
      'uk-sentencing-act-2020-reports-guidelines',
      'de-stgb-46-strafzumessung',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['judicial-independence', 'rule-of-law', 'legal-certainty'],
    uncertainty: [
      'One guidelines system is described from primary text, together with a system that has no equivalent body. The composition of the Council, the content of any guideline, and their effect on sentencing outcomes were not researched.',
      'Nothing here indicates what any guideline says or what any case would attract.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A sentencing guideline is a published statement of how a court should approach a category of case. It sits between the statute, which sets thresholds and maxima, and the individual decision, which applies them to facts. The interesting question is not what guidelines say but how far a court is bound by one — because the answer determines whether they structure judicial judgement or replace it.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes the legal status of sentencing guidelines in one system and their absence in another. It quotes no guideline, states no sentence level, and is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Two people who did the same thing in the same circumstances should not receive very different sentences because they appeared before different judges. That is a consistency problem, and it is real: sentencing involves so many variables that unstructured discretion produces variation nobody intended and nobody can defend.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the cure has its own disease',
        text: 'Guidelines rigid enough to guarantee consistency would sentence categories rather than people, and would relocate the decision from a judge who heard the case to a body that did not. Every guidelines system is a position on that trade-off, which is why the binding formula matters more than the guidance itself.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'England and Wales created a standing body for the task. Section 118(1) of the Coroners and Justice Act 2009 provides, in a single sentence, that there is to be a Sentencing Council for England and Wales, with Schedule 15 making provision about it. The subsection came into force on 6 April 2010.',
        claim: 'fact',
        sources: ['uk-cja-2009-sentencing-council'],
      },
      {
        kind: 'paragraph',
        text: 'The duty on courts is now in the sentencing code. Section 59(1) of the Sentencing Act 2020 provides that every court must, in sentencing an offender, follow any sentencing guidelines relevant to the offender’s case, and must follow relevant guidelines in exercising any other function relating to sentencing — *unless the court is satisfied that it would be contrary to the interests of justice to do so*.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Neither "advisory" nor "mandatory" describes that. The default is compliance — a court must follow — and the exit is not judicial preference but a stated conclusion that following would be contrary to the interests of justice. Departure is available and has to be reasoned, which means guidelines bind by requiring an explanation rather than by removing the choice.',
      },
      {
        kind: 'paragraph',
        text: 'The duty is also expressly subordinate. Section 59(2) makes it subject to an enumerated list of provisions including the rule that a fine must reflect seriousness, the restriction on community orders, the threshold for a discretionary custodial sentence, the requirement that a custodial sentence be the shortest term commensurate with seriousness, and the mandatory-minimum provisions.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The order of authority is explicit',
        text: 'Statute, then guideline, then judgement. A guideline cannot lower the custody threshold or lengthen a sentence beyond the shortest commensurate term, because the provisions doing that work are listed as ones the guidelines duty yields to. A reader who assumed guidelines were the operative rule would have the hierarchy inverted.',
      },
      {
        kind: 'paragraph',
        text: 'Not every system has such a body, and the absence is not an oversight. German sentencing rests on the code rather than on published guidance: section 46(1) of the Criminal Code makes the offender’s guilt the basis for determining the sentence, and section 46(2) enumerates the circumstances the court weighs — motives and aims, the attitude expressed by the act, the degree of breach of duty, the manner of execution, prior life, personal and economic circumstances, and conduct after the act.',
        claim: 'fact',
        sources: ['de-stgb-46-strafzumessung'],
      },
      {
        kind: 'paragraph',
        text: 'Those are two answers to the consistency problem, not one answer and a gap. A statutory list of factors constrains reasoning without prescribing outcomes; a guideline constrains outcomes and leaves the reasoning to the court. Which produces more consistency is an empirical question neither statute answers and this page does not either.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Sentencing guidelines are advisory.',
        reality:
          'Section 59(1) says a court must follow relevant guidelines unless satisfied that doing so would be contrary to the interests of justice. The default is compliance and departure requires a stated conclusion.',
      },
      {
        claim: 'Sentencing guidelines are binding, so judges have no discretion.',
        reality:
          'The same provision supplies the exit, and the duty is expressly subject to statutory provisions including the custody threshold and the shortest-term rule. Guidelines structure a discretion they do not remove.',
      },
      {
        claim: 'A guideline can override the statutory sentencing rules.',
        reality:
          'Section 59(2) lists the provisions the guidelines duty is subject to, including the fine rule, the community-order restriction, the custody threshold and the mandatory minimums.',
      },
      {
        claim: 'Every system has a sentencing council.',
        reality:
          'Germany has no equivalent body. Its Criminal Code names culpability as the basis of measurement and enumerates the factors a court weighs, leaving the outcome to the court.',
      },
      {
        claim: 'A system without guidelines has unstructured sentencing.',
        reality:
          'Section 46 of the German Criminal Code constrains the reasoning rather than the result, listing what the court must weigh. Structure can be applied to the process instead of to the outcome.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two ways to constrain a sentencing decision.',
      },
      {
        kind: 'list',
        items: [
          'A statutory Council producing guidelines, with courts required to follow relevant ones unless satisfied it would be contrary to the interests of justice — England and Wales, CJA 2009 s. 118 and Sentencing Act 2020 s. 59(1).',
          'That duty expressly subordinate to the statutory thresholds and mandatory minimums — Sentencing Act 2020 s. 59(2).',
          'No guidelines body: culpability as the basis of measurement, with the weighing factors enumerated in the code — Germany, StGB § 46.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Status, not content or effect',
        text: 'This page describes how binding guidelines are and where the body comes from. It quotes no guideline, and it makes no claim about whether either arrangement produces more consistent sentencing — no evidence supporting such a comparison was obtained.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A duty that can be departed from only on a stated basis produces reasons, and reasons are what an appeal works on. A sentence outside the guideline range is not thereby wrong, but the court has had to say why — which is more than an unstructured discretion would leave behind.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Published guidelines also do something for the public that the code alone cannot. They make the ordinary approach to a category of case knowable in advance by someone who is not a lawyer, which is the legal-certainty argument for having them at all.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [when a court may imprison](/corrections/when-a-court-may-imprison), [legal certainty](/justice/legal-certainty), and [why judicial independence matters](/courts/why-judicial-independence-matters).',
      },
    ],
  },
  {
    slug: 'what-a-community-order-requires',
    title: 'What a community order requires',
    shortTitle: 'Community orders',
    question: 'Is a community sentence just a warning with paperwork?',
    summary:
      'No. In one system the statute lists fifteen kinds of requirement a court may attach — unpaid work, curfews, exclusion, residence, treatment, electronic monitoring of compliance and of whereabouts — and the order is whatever combination the court imposes.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['GB'],
    temporalScope: 'current',
    related: [
      'when-a-court-may-imprison',
      'probation-is-three-different-things',
      'custodial-and-non-custodial-sentences',
    ],
    sources: ['uk-sentencing-act-2020-reports-guidelines', 'uk-sentencing-act-2020-thresholds'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['due-process'],
    uncertainty: [
      'One system’s requirement types are listed from primary text. What each involves in practice, how they are supervised, and what happens on breach were not researched and are not described.',
      'Nothing here indicates what requirements any case would attract, or how onerous any of them is.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A community order is not a single sanction. It is a container: the court makes an order and attaches requirements to it, and what the sentence actually consists of is whichever requirements were attached. Two community orders can therefore have almost nothing in common beyond the name.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This lists the requirement types one statute provides and explains what kind of sentence that makes a community order. It describes no requirement in operational detail, says nothing about breach, and is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A single non-custodial sanction would have to be either too light for the serious end of its range or too heavy for the light end. Building the sentence from components lets one legal form cover the whole span between a fine and custody, and lets the court address what the case actually calls for rather than choosing the nearest available shape.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why "leniency" is the wrong axis',
        text: 'The word "community" describes where the sentence is served, not how demanding it is. A curfew, an exclusion requirement and electronic whereabouts monitoring are restrictions on liberty imposed continuously outside a prison. Treating the custodial line as the line between punishment and not-punishment misses most of what the sanction system does.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Section 201 of the Sentencing Act 2020 sets out the community order requirements table. The requirement types it lists are: unpaid work; rehabilitation activity; programme; prohibited activity; curfew; exclusion; residence; foreign travel prohibition; mental health treatment; drug rehabilitation; drug testing; alcohol treatment; alcohol abstinence and monitoring; attendance centre; electronic compliance monitoring; and electronic whereabouts monitoring.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The list is doing three different jobs',
        text: 'Some requirements take something away — unpaid work takes time, a curfew takes hours, exclusion and foreign travel prohibition take places. Some address a cause — mental health, drug and alcohol treatment. And two do neither: electronic compliance monitoring and electronic whereabouts monitoring exist to make the others verifiable. A sanction, a treatment and a verification mechanism sit in one table because the court needs all three to build a workable order.',
      },
      {
        kind: 'paragraph',
        text: 'The table is not static. The drug testing requirement was inserted into it on 28 June 2022 by the Police, Crime, Sentencing and Courts Act 2022 — which is a reminder that the menu of community requirements is a policy instrument a legislature adjusts, rather than a fixed feature of the sentence.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'paragraph',
        text: 'Availability is bounded at both ends. A court must not make a community order unless it is of the opinion that the offence, or the combination of the offence and associated offences, was serious enough to warrant one — and the fact that it may make such an order does not require it to do so.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
      {
        kind: 'paragraph',
        text: 'The upper bound is the custody threshold, and it is expressed in terms of this sanction: a court must not pass a custodial sentence unless the offence was so serious that neither a fine alone *nor a community sentence* can be justified. The community order is therefore not merely an alternative to custody; it is one of the two things a court must have ruled out before custody becomes available.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Building the order requires information',
        text: 'Deciding which requirements fit a person is not something a court can do on the offence alone, which is why the pre-sentence report requirements apply to the opinion under the community-order threshold. The report and the order are parts of the same mechanism.',
      },
    ],
    misconceptions: [
      {
        claim: 'A community sentence means no real consequences.',
        reality:
          'The statutory requirement types include unpaid work, curfews, exclusion, residence, foreign travel prohibition and electronic whereabouts monitoring. These are continuing restrictions on liberty, imposed outside a prison rather than instead of consequence.',
      },
      {
        claim: 'A community order is one sanction.',
        reality:
          'It is an order with requirements attached from a statutory table of sixteen entries. What the sentence consists of is whichever requirements the court imposed.',
      },
      {
        claim: 'Community requirements are all about rehabilitation.',
        reality:
          'The table mixes three kinds: requirements that take something away, requirements that address a cause, and two electronic monitoring requirements whose function is to make the others verifiable.',
      },
      {
        claim:
          'If the offence is serious enough for a community order, the court should make one.',
        reality:
          'Section 204(5) provides that the fact the court may make a community order does not require it to do so. Passing the threshold makes the sentence available, not obligatory.',
      },
      {
        claim: 'The list of available requirements is a permanent feature of the sentence.',
        reality:
          'It is amended by statute — the drug testing requirement was inserted on 28 June 2022 by the Police, Crime, Sentencing and Courts Act 2022.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What the statutory table contains, grouped by what each kind of requirement does.',
      },
      {
        kind: 'list',
        items: [
          'Requirements that take something away — unpaid work, curfew, exclusion, residence, foreign travel prohibition, prohibited activity, attendance centre.',
          'Requirements that address a cause — rehabilitation activity, programme, mental health treatment, drug rehabilitation, drug testing, alcohol treatment, alcohol abstinence and monitoring.',
          'Requirements that make the others verifiable — electronic compliance monitoring and electronic whereabouts monitoring.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'One system’s list',
        text: 'These are the requirement types the Sentencing Act 2020 provides for England and Wales. Other systems build community sanctions from different components, and nothing here describes them.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A statutory list is a limit as well as a menu. A court may attach requirements the table provides for, which means a person subject to a community order can identify what has been imposed on them and by what authority, rather than being subject to whatever an administering body considers appropriate.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The monitoring requirements make that limit practical from the other direction. Where compliance is verified electronically rather than by assertion, both the person subject to the order and the body supervising it are working from the same record.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [when a court may imprison](/corrections/when-a-court-may-imprison), [what a pre-sentence report is](/corrections/what-a-pre-sentence-report-is), and [probation is three different things](/corrections/probation-is-three-different-things).',
      },
    ],
  },
  {
    slug: 'what-a-pre-sentence-report-is',
    title: 'What a pre-sentence report is',
    shortTitle: 'Pre-sentence reports',
    question: 'Who tells the court about the person before it sentences them?',
    summary:
      'In one system, an officer of a provider of probation services — and the court must obtain and consider the report unless it thinks that unnecessary. It is the point where the community-corrections service shapes a sentence it has not yet been asked to administer.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['GB'],
    temporalScope: 'current',
    related: [
      'what-a-community-order-requires',
      'when-a-court-may-imprison',
      'conviction-sentence-and-execution',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: ['uk-sentencing-act-2020-reports-guidelines', 'uk-sentencing-act-2020-thresholds'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['due-process', 'fair-trial'],
    uncertainty: [
      'One system is described from primary text. What a report contains in practice, how it is prepared, and how courts use it were not researched and are not described.',
      'The equivalent function in other systems — where one exists — was not researched. Nothing here should be generalised.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Between conviction and sentence there is a gap the trial did not fill. The court knows what was proved; it does not necessarily know anything reliable about the person, their circumstances, or what a proposed sentence would actually do. A pre-sentence report is the mechanism for closing that gap, and in one system the statute says who writes it and when the court must have it.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes a statutory reporting requirement and who discharges it. It does not describe what a report contains, how one is prepared, or how to respond to one, and it is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Sentencing asks questions a trial is not designed to answer. Whether a person could complete unpaid work, whether treatment would be viable, what a curfew would mean for their employment — none of that is in issue at trial, and none of it can be assumed from the offence. Someone has to find out, and it cannot be the court.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The service that will administer the sentence helps shape it',
        text: 'The report is written by the same kind of body that would supervise a community order. That is deliberate rather than awkward: an order built without regard to whether it can be delivered is an order that will fail. It also means the community-corrections service influences sentencing before it has any role in the case — which is the clearest link between the two halves of this section.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The duty is conditional but the default is to obtain one. Section 30(2) of the Sentencing Act 2020 provides that where the pre-sentence report requirements apply and the offender is aged 18 or over, the court must obtain and consider a pre-sentence report before forming the opinion, *unless, in the circumstances of the case, it considers that it is unnecessary* to obtain one.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'paragraph',
        text: 'For offenders under 18 the exception is narrower. Section 30(3) permits the court to proceed without a fresh report only where a previous pre-sentence report exists and the court, having had regard to the information in it or in the most recent of several, considers a new one unnecessary in the circumstances.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'paragraph',
        text: 'The statute then says who writes it. Section 31(1) defines a pre-sentence report as one made or submitted by an appropriate officer *with a view to assisting the court in determining the most suitable method of dealing with an offender*, containing information as prescribed by rules; and section 31(2)(a) provides that for an offender aged 18 or over the appropriate officer is an officer of a provider of probation services.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Read "a provider of probation services"',
        text: 'The statute does not name a probation service. It refers to a provider of probation services — a formulation that presupposes there may be several and does not assume any particular institutional form. That is why this platform publishes no probation-service institution page: the drafting of the one system examined here argues against a single institutional family rather than for one.',
      },
      {
        kind: 'paragraph',
        text: 'The form is flexible. Section 31(4) allows the court to accept a pre-sentence report given orally in open court, subject to rules and to section 31(5), which requires a written report for an offender under 18 in specified cases including the seriousness threshold for custody.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A duty whose breach does not undo the sentence',
        text: 'Section 30(4) provides that where a court does not obtain and consider a report when the requirements applied, no custodial sentence or community sentence is invalidated by that fact. The obligation is real and its breach does not produce nullity — the same design this platform found in the forensic code of practice, where non-compliance is not an offence but is admissible and weighable. Systems reach for this shape when the remedy of voiding the outcome would harm the person it is meant to protect.',
      },
      {
        kind: 'paragraph',
        text: 'The report is tied to the thresholds rather than free-floating. The pre-sentence report requirements apply to the court in forming its opinion on whether an offence was serious enough to warrant a community order — the same opinion in which the court must take into account all available information about the circumstances, including aggravating and mitigating factors.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-thresholds'],
      },
    ],
    misconceptions: [
      {
        claim: 'A pre-sentence report is optional background material.',
        reality:
          'Where the pre-sentence report requirements apply, section 30(2) requires the court to obtain and consider one unless it considers that unnecessary in the circumstances of the case — and the rule is stricter for offenders under 18.',
      },
      {
        claim: 'The report tells the court what sentence to pass.',
        reality:
          'It is defined as a report made with a view to assisting the court in determining the most suitable method of dealing with an offender. Assisting a determination is not making one.',
      },
      {
        claim: 'A missing report invalidates the sentence.',
        reality:
          'Section 30(4) provides that no custodial sentence or community sentence is invalidated by the fact that the court did not obtain and consider one. The duty exists without that consequence attached.',
      },
      {
        claim: 'Pre-sentence reports are always written documents prepared in advance.',
        reality:
          'Section 31(4) allows a court to accept a report given orally in open court, subject to rules; writing is required for offenders under 18 in specified cases.',
      },
      {
        claim: 'Probation only becomes involved after the sentence.',
        reality:
          'For an adult offender the appropriate officer who prepares the report is an officer of a provider of probation services. The involvement begins before the sentence exists.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What the statute fixes, and what it leaves open.',
      },
      {
        kind: 'list',
        items: [
          'Fixed: the court must obtain and consider a report where the requirements apply, unless it considers that unnecessary — s. 30(2).',
          'Fixed: for adults the author is an officer of a provider of probation services — s. 31(2)(a).',
          'Open: the form, which may be oral in open court, except where writing is required for an offender under 18 — s. 31(4)–(5).',
          'Open: the content, which is prescribed by rules made by the Secretary of State — s. 31(1)(b).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'One system only',
        text: 'Whether other systems have an equivalent function, and who performs it, was not researched. Nothing here describes any system but England and Wales.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A report prepared to assist the court is material about a person that will influence what happens to them, which makes its accuracy a matter of consequence. That is the argument for a defined author, a prescribed content and a form the court receives in open proceedings rather than privately.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The stricter rule for offenders under 18 is the clearest signal of what the mechanism is for. Where the person is least able to explain their own circumstances, the statute is least willing to let the court proceed without someone having established them.',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a community order requires](/corrections/what-a-community-order-requires), [when a court may imprison](/corrections/when-a-court-may-imprison), and [conviction, sentence and execution](/corrections/conviction-sentence-and-execution).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Looking in: inspection and complaint                                   */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'who-inspects-a-prison',
    title: 'Who inspects a prison',
    shortTitle: 'Who inspects a prison',
    question: 'Who checks what happens inside a prison?',
    summary:
      'Two different bodies, by design. The international standards require a twofold system — internal inspection by the prison administration itself, and external inspection by a body independent of it — and set out the powers without which the second would be theatre.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-a-prisoner-raises-a-complaint',
      'who-runs-prisons',
      'why-justice-systems-need-oversight',
    ],
    relatedInstitutions: ['correctional-service', 'ombuds-and-rights-institution'],
    sources: ['mandela-rules', 'uk-prison-act-1952-s5a'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['oversight', 'inspectorate', 'accountability'],
    uncertainty: [
      'One agreed international standard and one national statute are described. What inspections find, how often they occur, and whether recommendations are implemented are empirical questions this platform has not researched.',
      'The Optional Protocol to the Convention against Torture and the national preventive mechanisms established under it could not be retrieved from an authoritative source — ohchr.org returned HTTP 403 — so nothing is claimed about them.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Inspection of a prison is not one activity. The agreed international standard treats it as two: the administration checking its own institutions, and a body from outside checking them. Both are called inspection and only one of them is independent, which is why the word on its own tells a reader very little.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what the international standards require of prison inspection and one statutory instantiation of the external limb. It reports no inspection finding, assesses no prison system, and is not a route for raising a concern about any institution.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A prison is the one part of a justice system whose subjects cannot leave, cannot easily be seen, and are least able to be believed. Every other institution is checked partly by the people who deal with it complaining effectively. Inspection exists because that mechanism is weakest exactly where the power is greatest.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why internal inspection is not a lesser version of external',
        text: 'The two answer different questions. Internal inspection asks whether institutions are following the administration’s own rules, and the administration is well placed to know. External inspection asks whether the rules and their application are acceptable at all, which is the question an administration cannot ask of itself. Requiring both is not belt and braces; it is two different examinations.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Rule 83 of the United Nations Standard Minimum Rules for the Treatment of Prisoners states the structure directly: there shall be a twofold system for regular inspections of prisons and penal services — internal or administrative inspections conducted by the central prison administration, and external inspections conducted by a body *independent of the prison administration*, which may include competent international or regional bodies.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'paragraph',
        text: 'The stated objective covers both limbs: to ensure that prisons are managed in accordance with existing laws, regulations, policies and procedures, with a view to bringing about the objectives of penal and corrections services, and that the rights of prisoners are protected.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'The powers are the standard, not the label. Rule 84 gives inspectors authority to access all information on numbers of prisoners and places of detention and everything relevant to treatment including records and conditions; to freely choose which prisons to visit, including unannounced visits at their own initiative, and which prisoners to interview; and to conduct private and fully confidential interviews with prisoners and prison staff. An inspection regime lacking any one of those is not a weaker version of this — it is a different thing wearing the name.',
      },
      {
        kind: 'paragraph',
        text: 'Rule 84 also composes the team: external inspection teams shall consist of qualified and experienced inspectors appointed by a competent authority and *shall encompass health-care professionals*, with due regard to balanced gender representation. Detention raises medical questions that a purely administrative inspectorate could not evaluate.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'paragraph',
        text: 'And the standard does not stop at looking. Rule 85 requires every inspection to be followed by a written report to the competent authority, with due consideration given to making external inspection reports publicly available excluding personal data unless the prisoner has consented; and requires the administration to indicate, within a reasonable time, whether it will implement the recommendations.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The obligation is to answer, not to obey',
        text: 'Rule 85(2) does not require the administration to accept recommendations. It requires it to say whether it will, within a reasonable time. That is a smaller demand and a more enforceable one — and it converts a disagreement about prison conditions into a documented position someone can be held to.',
      },
      {
        kind: 'paragraph',
        text: 'England and Wales puts the external limb in statute. Section 5A of the Prison Act 1952 provides for the appointment of a Chief Inspector of Prisons whose duty is to inspect or arrange for the inspection of prisons in England and Wales and report to the Secretary of State on them, and who shall *in particular* report on the treatment of prisoners and conditions in prisons.',
        claim: 'fact',
        sources: ['uk-prison-act-1952-s5a'],
      },
      {
        kind: 'paragraph',
        text: 'The reporting route is the accountability mechanism. Section 5A(5) requires the Chief Inspector to submit an annual report to the Secretary of State, and requires the Secretary of State to *lay a copy of that report before Parliament* — so the department that runs prisons cannot be the last body to see what an inspection found.',
        claim: 'fact',
        sources: ['uk-prison-act-1952-s5a'],
      },
      {
        kind: 'paragraph',
        text: 'The remit reaches beyond prisons. Section 5A(5A) and (5B) apply the inspection and reporting duties to immigration removal centres, short-term holding facilities, pre-departure accommodation and escort arrangements, and do so anywhere in the United Kingdom — because the argument for inspection follows detention rather than the building it happens in.',
        claim: 'fact',
        sources: ['uk-prison-act-1952-s5a'],
      },
    ],
    misconceptions: [
      {
        claim: 'Prison inspection means an independent body looking at prisons.',
        reality:
          'Rule 83 requires a twofold system: internal inspections conducted by the central prison administration and external inspections by a body independent of it. Only the second is independent, and both are called inspection.',
      },
      {
        claim: 'Oversight of prisons means running them properly.',
        reality:
          'Inspection examines whether institutions are managed in accordance with existing rules and whether prisoners’ rights are protected. It does not manage the institutions, and the external limb must be independent of the body that does.',
      },
      {
        claim:
          'An inspectorate that visits prisons on a published schedule meets the standard.',
        reality:
          'Rule 84 gives inspectors authority to freely choose which prisons to visit, including by making unannounced visits at their own initiative, and which prisoners to interview. Announced visits alone do not carry that authority.',
      },
      {
        claim: 'An inspection report obliges the prison administration to act on it.',
        reality:
          'Rule 85(2) requires the administration to indicate within a reasonable time whether it will implement the recommendations. The obligation is to respond, not to comply.',
      },
      {
        claim: 'Prison inspection covers prisons.',
        reality:
          'In England and Wales the statutory duties extend to immigration removal centres, short-term holding facilities, pre-departure accommodation and escort arrangements, anywhere in the United Kingdom.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The standard, and one national instantiation of its external limb.',
      },
      {
        kind: 'list',
        items: [
          'Twofold inspection — internal by the administration, external by a body independent of it — Mandela Rule 83.',
          'Powers that make the external limb real: full information access, free choice of prison and prisoner, unannounced visits, confidential interviews — Rule 84.',
          'A written report every time, publication considered, and a reasoned response within a reasonable time — Rule 85.',
          'A statutory Chief Inspector reporting annually, with the report laid before Parliament, covering detention beyond prisons — England and Wales, Prison Act 1952 s. 5A.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'A gap this page states rather than fills',
        text: 'The Optional Protocol to the Convention against Torture requires states party to designate national preventive mechanisms with a visiting mandate, and it is central to this subject. The authoritative text could not be retrieved — ohchr.org returned HTTP 403 behind a challenge page — so nothing about it is asserted here. That is an access limitation on this platform, not a statement about the instrument.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Confidential interviews are the part of the standard that makes the rest usable. A prisoner who can only speak to an inspector in the hearing of staff is a prisoner who will be careful, and an inspection built on careful answers records something other than what it set out to find.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'paragraph',
        text: 'Laying an annual report before Parliament does similar work at the other end. The value is not that legislators read every report; it is that the executive cannot decide which findings become public, so a poor inspection outcome cannot be managed by being kept internal.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how a prisoner raises a complaint](/corrections/how-a-prisoner-raises-a-complaint), [who runs prisons](/corrections/who-runs-prisons), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },
  {
    slug: 'how-a-prisoner-raises-a-complaint',
    title: 'How a prisoner raises a complaint',
    shortTitle: 'Complaints in custody',
    question: 'If something is wrong inside a prison, who can the person tell?',
    summary:
      'The agreed standard builds three routes, not one — daily to the prison, confidentially to an inspector, and uncensored to authorities outside — because a complaints system with a single channel runs through the institution being complained about.',
    entityType: 'concept',
    section: 'corrections',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['who-inspects-a-prison', 'why-correctional-systems-exist', 'effective-remedy'],
    relatedInstitutions: ['correctional-service', 'ombuds-and-rights-institution'],
    sources: ['mandela-rules'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['accountability', 'oversight', 'due-process'],
    uncertainty: [
      'This describes what one agreed international standard requires. It is not a description of the complaints system in any country, and whether any system meets the standard is not assessed.',
      'National complaint and ombudsman arrangements for prisons were not researched for this page.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A complaint from inside a prison has a structural problem no other complaint has. The person cannot leave, depends on the people they are complaining about for everything from meals to medical care, and will still be there tomorrow. Any complaints system that ignores that is describing a procedure rather than providing a remedy.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes what the international standards require of prison complaints systems. It is not a route for making a complaint, describes no country’s procedure, and is not legal advice. Anyone with a concern about a person in custody should seek help from a lawyer or an oversight body in the relevant jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Rights that cannot be asserted are descriptions. The Standard Minimum Rules set out at length what people in detention are entitled to, and every one of those entitlements depends on someone being able to say when it is not being provided — to somebody who can do something, without being punished for it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Retaliation is the design constraint',
        text: 'This is why the standard reads the way it does. A single internal channel would work perfectly for the complaints the institution is happy to receive, and would be useless for the ones that matter most. Multiple routes, confidentiality and an express protection against retaliation are not three separate good ideas — they are one answer to one problem.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'It begins before any complaint arises. Rule 54 requires that on admission every prisoner be promptly provided with written information about the prison law and applicable regulations; about their rights, including authorised methods of seeking information, access to legal advice including through legal aid schemes, and the procedures for making requests or complaints; about their obligations, including applicable disciplinary sanctions; and about all other matters necessary to adapt to prison life.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'paragraph',
        text: 'Rule 55 makes that information reach people rather than merely exist. It must be available in the most commonly used languages according to the needs of the prison population, with interpretation assistance where a prisoner understands none of them; conveyed orally where a prisoner is illiterate; and provided in an appropriate manner to prisoners with sensory disabilities.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Rule 56 provides three routes and they are not alternatives. Daily opportunity to make requests or complaints to the prison director or an authorised staff member. The opportunity to make them to the inspector of prisons during inspections, speaking freely and in full confidentiality, without the director or other staff present. And the right to make a request or complaint about treatment, without censorship as to substance, to the central prison administration and to the judicial or other competent authorities, including those vested with reviewing or remedial power. One channel is close and quick, one is confidential, and one leaves the prison system entirely.',
      },
      {
        kind: 'paragraph',
        text: 'The routes extend beyond the prisoner. Rule 56(4) provides that the rights extend to the prisoner’s legal adviser, and that where neither the prisoner nor the legal adviser can exercise them, a member of the prisoner’s family or any other person with knowledge of the case may do so.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'paragraph',
        text: 'Rule 57 then addresses what happens next. Every request or complaint shall be promptly dealt with and replied to without delay; and if it is rejected, or in the event of undue delay, the complainant is entitled to bring it before a judicial or other authority. Silence is treated the same as refusal, which closes the most obvious way of defeating a complaints system.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'paragraph',
        text: 'The protection is stated in terms. Rule 57(2) requires safeguards ensuring prisoners can make requests or complaints safely and, if requested, confidentially, and provides that a complainant — or a family member or other person acting for them — must not be exposed to any risk of retaliation, intimidation or other negative consequences as a result of having submitted a request or complaint.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'One category is removed from the ordinary process',
        text: 'Rule 57(3) provides that allegations of torture or other cruel, inhuman or degrading treatment or punishment shall be dealt with immediately and shall result in a prompt and impartial investigation conducted by an independent national authority. That does not run through the complaints system at all — the standard treats it as too serious to be handled by the institution complained of, however good its procedure.',
      },
    ],
    misconceptions: [
      {
        claim: 'Prison complaints go to the prison.',
        reality:
          'Rule 56 provides three routes: daily to the director or an authorised staff member, confidentially to the inspector during inspections, and without censorship as to substance to the central administration and to judicial or other competent authorities.',
      },
      {
        claim: 'A complaint that gets no answer has failed.',
        reality:
          'Rule 57(1) entitles the complainant to bring the matter before a judicial or other authority if the complaint is rejected “or in the event of undue delay”. Delay is treated as a refusal.',
      },
      {
        claim: 'Only the prisoner can complain.',
        reality:
          'Rule 56(4) extends the rights to the prisoner’s legal adviser and, where neither can exercise them, to a family member or any other person with knowledge of the case.',
      },
      {
        claim: 'Serious allegations are handled through the same complaints process.',
        reality:
          'Rule 57(3) requires allegations of torture or other cruel, inhuman or degrading treatment to be dealt with immediately and to result in a prompt and impartial investigation by an independent national authority.',
      },
      {
        claim: 'Telling prisoners their rights is a formality.',
        reality:
          'Rules 54 and 55 require the information on admission to cover complaint procedures and legal advice, and to be provided in a language the prisoner understands, orally where they are illiterate and appropriately where they have sensory disabilities.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What the standard requires, in the order a complaint would travel.',
      },
      {
        kind: 'list',
        items: [
          'Information on admission about rights, legal advice and complaint procedures, in a form the person can actually receive — Rules 54 and 55.',
          'Three routes: daily internal, confidential to an inspector, and uncensored to authorities outside the prison — Rule 56.',
          'A prompt reply, with rejection or undue delay opening a route to a judicial or other authority — Rule 57(1).',
          'Express protection against retaliation, intimidation or other negative consequences — Rule 57(2).',
          'Torture allegations removed from the ordinary process to a prompt, impartial, independent national investigation — Rule 57(3).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'A standard, not a description',
        text: 'These are agreed minimum standards. They are not the law of any state, they bind only through whatever domestic law adopts them, and nothing here assesses whether any system meets them.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The confidential route to an inspector is where this page and prison inspection meet. The same rule that lets an inspector interview prisoners privately is the rule that gives a prisoner somewhere to speak — which is why the inspection powers are not a technicality about inspectors but a condition of anyone inside being heard.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
      {
        kind: 'paragraph',
        text: 'The anti-retaliation provision is the one that makes the others operable. Every route in the standard depends on a person being willing to use it, and willingness depends on what happens afterwards to people who did.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who inspects a prison](/corrections/who-inspects-a-prison), [effective remedy](/justice/effective-remedy), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },
];
