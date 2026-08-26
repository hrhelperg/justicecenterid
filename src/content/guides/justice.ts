import type { Guide } from '../types';

export const JUSTICE_GUIDES: readonly Guide[] = [
  {
    slug: 'what-is-justice',
    title: 'What is justice?',
    shortTitle: 'What is justice?',
    question: 'What is justice?',
    summary:
      'Justice is the principle that people should be treated according to rules that apply equally to everyone, decided by bodies that are authorised, constrained, and answerable. This guide explains what that means institutionally.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-is-the-rule-of-law',
      'what-is-due-process',
      'why-justice-systems-need-oversight',
    ],
    sources: ['udhr', 'un-rule-of-law'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 7,
    keyTerms: ['justice', 'rule-of-law', 'due-process', 'jurisdiction'],
    uncertainty: [
      'This guide describes justice as an organising principle for institutions. It does not attempt to settle the philosophical question of what justice ultimately requires, on which there is no consensus and on which this platform takes no position.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Justice, in the sense used across this platform, is the principle that people should be treated according to rules that apply equally to everyone, and that decisions affecting them should be made by bodies that are properly authorised, constrained by law, and answerable for what they decide.',
      },
      {
        kind: 'paragraph',
        text: 'That is a narrower idea than justice in ordinary conversation. It is concerned less with whether an outcome feels right and more with how the outcome was reached — on whose authority, under what safeguards, on what evidence, and open to what challenge.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this guide covers',
        text: 'This is an institutional account of justice: what justice systems are built to do. It is not a philosophical account of what justice ultimately requires, and it is not a description of any particular country’s system.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Any society in which people live together produces disputes, harms, and disagreements about facts. Without a shared way of resolving them, resolution falls to whoever is strongest, wealthiest, or best connected — and to retaliation, which tends to escalate.',
      },
      {
        kind: 'paragraph',
        text: 'A justice system is the arrangement a society uses to take those decisions out of private hands and give them to institutions that follow published rules. This is why justice institutions are given powers that private people do not have, and why those powers are hedged with conditions.',
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights, adopted by the United Nations General Assembly in 1948, expresses several of these ideas as declared principles: equality before the law, the right to an effective remedy, the right to a fair and public hearing by an independent and impartial tribunal, and the presumption of innocence. The Declaration is a statement of principle rather than a binding treaty, and it does not describe how any individual state actually operates.',
        claim: 'fact',
        sources: ['udhr'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'In institutional terms, justice is delivered through a chain of separate decisions, each made by a different body with a different job. Separating them is deliberate: it means no single institution both defines an offence, investigates it, decides guilt, and administers the consequence.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Rules are made in advance',
            description:
              'Conduct is defined as unlawful before it happens, and published. Punishing conduct that was lawful when it occurred is treated as a serious breach of principle in most legal traditions.',
          },
          {
            term: 'Facts are established through a process',
            description:
              'Evidence is gathered under authorisation, recorded, disclosed, and tested. What counts as admissible evidence is itself governed by rules.',
          },
          {
            term: 'Decisions are made by an independent body',
            description:
              'A court or tribunal decides, structurally separated from the body that investigated and the body that brought the case.',
          },
          {
            term: 'Reasons are given',
            description:
              'A reasoned decision can be examined, challenged, and appealed. An unexplained decision cannot.',
          },
          {
            term: 'Decisions can be challenged',
            description:
              'Appeal and review routes exist because systems make errors, and a system with no way to find its own errors accumulates them.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The United Nations describes the rule of law as requiring that all persons, institutions and entities — including the state itself — are accountable to laws that are publicly promulgated, equally enforced, independently adjudicated, and consistent with international human-rights norms. That is one authoritative formulation among several, and it is cited here as the United Nations’ own definition rather than as the definition.',
        claim: 'fact',
        sources: ['un-rule-of-law'],
      },
    ],
    misconceptions: [
      {
        claim: 'Justice means the guilty are punished and the innocent go free.',
        reality:
          'That is an outcome a justice system aims at but cannot guarantee. Institutionally, justice describes the quality of the process: whether the decision was properly authorised, properly evidenced, and open to challenge. A system judged only on outcomes would have every incentive to convict, because the errors would be invisible.',
      },
      {
        claim: 'Procedural rules are technicalities that let people escape justice.',
        reality:
          'Rules about evidence, disclosure, and representation exist because their absence produced wrongful convictions. They constrain the state in every case, including the ones where the state is right, because a safeguard that applies only when the state is wrong is not a safeguard.',
      },
      {
        claim: 'Justice and law are the same thing.',
        reality:
          'Law is the set of rules actually in force in a place. Justice is a standard against which those rules and their application can be assessed. The distinction is what makes it coherent to say that a law is unjust, and it is the basis of most legal reform.',
      },
      {
        claim: 'Every country means the same thing by justice.',
        reality:
          'The broad aspirations are widely shared and expressed in international instruments. The institutional machinery differs so much that the same principle produces very different arrangements — different courts, different roles, different safeguards.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Almost every country expresses commitment to equality before the law and to fair adjudication. What differs is how those commitments are built into institutions.',
      },
      {
        kind: 'list',
        items: [
          'Who decides the facts: a professional judge, a panel of judges, a jury of citizens, or a mixed panel of professional and lay judges.',
          'Who investigates and who directs the investigation: police acting independently, police under prosecutorial direction, or an investigating judge.',
          'Where the prosecution service sits: inside a government ministry, as a constitutionally separate body, or as part of the judiciary.',
          'How law is made: primarily by legislation, primarily by accumulated judicial decision, or through a mixture including customary and religious sources.',
          'How rights are enforced: through a constitutional court, through ordinary courts, through a regional human-rights court, or through a combination.',
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Why this matters for readers',
        text: 'Terms encountered in fiction or in foreign news reporting — grand jury, district attorney, examining magistrate, caution — belong to specific systems. Carrying them into another country’s system is the most common source of misunderstanding, and often produces confident but incorrect conclusions.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'In a justice system, most rights operate as limits on what institutions may do rather than as entitlements individuals claim directly. A right to legal representation is a constraint on how an interview may be conducted. A right to a reasoned decision is a constraint on how a court may dispose of a case.',
      },
      {
        kind: 'paragraph',
        text: 'Because those constraints are only meaningful if something enforces them, justice systems are built with bodies whose job is to examine other bodies: appellate courts, judicial review of administrative decisions, independent complaints bodies, inspectorates, ombudsman offices, and parliamentary scrutiny.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The presence of oversight is not evidence that a system is failing. It is evidence that a system has been designed on the assumption that it will make errors. A system claiming it does not need scrutiny is making a claim about itself that no institution has ever been able to sustain.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'To continue: [what the rule of law requires](/justice/what-is-the-rule-of-law), [what due process means in practice](/justice/what-is-due-process), and [why justice systems are built with oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },

  {
    slug: 'what-is-the-rule-of-law',
    title: 'What is the rule of law?',
    shortTitle: 'Rule of law',
    question: 'What is the rule of law?',
    summary:
      'The rule of law is the principle that everyone, including the government, is subject to law that is public, applied equally, and interpreted by independent courts. This guide explains what it requires and what it does not.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-is-justice',
      'what-is-due-process',
      'what-do-courts-do',
      'what-a-state-of-emergency-changes',
    ],
    sources: ['un-rule-of-law', 'iccpr', 'magna-carta-1297'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['rule-of-law', 'judicial-independence', 'legal-certainty', 'judicial-review'],
    definition: [
      {
        kind: 'paragraph',
        text: 'The rule of law is the principle that everyone in a society — including the people and institutions that govern it — is subject to law, and that the law is public, applied equally, and interpreted by courts that are independent of the government.',
      },
      {
        kind: 'paragraph',
        text: 'Its practical opposite is not disorder. It is a system where power is exercised according to the discretion of whoever holds it, and where the rules that apply to you depend on who you are.',
      },
      {
        kind: 'paragraph',
        text: 'The United Nations defines the rule of law as a principle of governance under which all persons, institutions and entities, public and private, including the state itself, are accountable to laws that are publicly promulgated, equally enforced and independently adjudicated, and which are consistent with international human-rights norms and standards.',
        claim: 'fact',
        sources: ['un-rule-of-law'],
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The rule of law addresses a problem that every society with a government faces: the body that enforces the rules is also the body most capable of ignoring them.',
      },
      {
        kind: 'paragraph',
        text: 'Historically, the idea developed as a set of constraints placed on rulers rather than as a theory of good government. Documents that limited a ruler’s power in specific ways are frequently treated as landmarks. Clauses of Magna Carta, in the form confirmed in 1297, remain on the statute book of England and Wales.',
        claim: 'fact',
        sources: ['magna-carta-1297'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A caution about origin stories',
        text: 'Magna Carta is often described as the origin of the rule of law. Its 1215 and 1297 texts differ, most of its clauses have been repealed, and much of its later significance comes from how it was reinterpreted centuries afterwards rather than from what it originally did. It is a genuine landmark and a poor origin myth.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The rule of law is usually broken down into requirements that can be examined separately. Formulations differ between authorities, but the following elements recur.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Legality',
            description:
              'Public bodies act only where law authorises them to act, and only within the limits of that authorisation.',
          },
          {
            term: 'Legal certainty',
            description:
              'Law is published, reasonably clear, and generally prospective, so that people can know in advance what is required of them.',
          },
          {
            term: 'Equality before the law',
            description:
              'The same rules apply to everyone, including officials, and are enforced without arbitrary distinction.',
          },
          {
            term: 'Independent adjudication',
            description:
              'Disputes about what the law requires are decided by courts that are structurally independent of the parties, including when one party is the government.',
          },
          {
            term: 'Access to justice',
            description:
              'People are able in practice to bring a claim or contest a decision. A right that cannot be exercised is not effective.',
          },
          {
            term: 'Prevention of arbitrariness',
            description:
              'Discretionary power is structured, reasoned, and reviewable rather than unconstrained.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The International Covenant on Civil and Political Rights expresses part of this in treaty form: Article 14 provides for a fair and public hearing by a competent, independent and impartial tribunal established by law. That obligation binds the states party to the Covenant.',
        claim: 'fact',
        sources: ['iccpr'],
      },
    ],
    misconceptions: [
      {
        claim: 'The rule of law means strict law enforcement.',
        reality:
          'It means law binds the government as much as the citizen. A state that enforces its criminal law rigorously while its own officials operate outside legal constraint is not exhibiting the rule of law. The phrase "law and order" describes a different idea.',
      },
      {
        claim: 'If a government follows its own written laws, the rule of law is satisfied.',
        reality:
          'Most formulations require more than formal legality: independent courts able to rule against the government, meaningful access to those courts, and consistency with human-rights standards. A written law that authorises arbitrary detention does not become unproblematic by being written down.',
      },
      {
        claim: 'The rule of law is a Western concept.',
        reality:
          'Constraints on rulers, published rules, and independent adjudication appear across many legal traditions and long predate the modern phrase. The specific institutional forms differ; the underlying problem of constraining power is not culturally specific.',
      },
      {
        claim: 'The rule of law is either present or absent.',
        reality:
          'It is a matter of degree across several dimensions at once. A country may have strong judicial independence and weak access to justice, or clear published law and inconsistent enforcement. Treating it as binary obscures exactly where a system is weak.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Different legal traditions build the same commitments through different institutions.',
      },
      {
        kind: 'list',
        items: [
          'Some systems place constitutional review in a single specialised constitutional court; others allow any court to disapply a law; others do not permit courts to set aside primary legislation at all.',
          'Some systems protect rights primarily through a written constitution; others through ordinary statute, judicial doctrine, and international treaty obligations.',
          'Judicial independence is protected through different combinations of appointment procedure, tenure, pay protection, and disciplinary arrangements — and these are frequently where the practical differences lie.',
          'Administrative decisions may be reviewed by ordinary courts or by a separate hierarchy of administrative courts.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What we do not do',
        text: 'This platform does not rank countries by adherence to the rule of law. Ranking requires a measurement methodology, and any ranking is only as defensible as the methodology behind it. Where an authoritative body has published an assessment, we would cite and attribute it rather than produce our own.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The rule of law is the frame that makes other rights enforceable. A right to a fair hearing means little without a court able to hear the complaint; a limit on police powers means little without a body able to rule that the limit was exceeded.',
      },
      {
        kind: 'paragraph',
        text: 'That is why the mechanisms most often examined when assessing the rule of law are structural: whether courts can rule against the government and have those rulings complied with; whether judges can be removed for their decisions; whether prosecution decisions can be directed politically; whether people can bring a claim without prohibitive cost.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The most informative question about a legal system is usually not whether the government can be taken to court, but what happens after the government loses. Compliance with adverse judgments is where the principle is tested.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what justice means institutionally](/justice/what-is-justice), [what due process requires](/justice/what-is-due-process), and [what courts do](/courts/what-do-courts-do). On the text most often invoked for this idea, see [which Magna Carta](/history/which-magna-carta).',
      },
    ],
  },

  {
    slug: 'what-is-due-process',
    title: 'What is due process?',
    shortTitle: 'Due process',
    question: 'What is due process?',
    summary:
      'Due process is the requirement that the state follow fair, established procedures before it takes action against a person. This guide explains what it typically includes and how it differs between systems.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-is-the-presumption-of-innocence',
      'what-is-the-rule-of-law',
      'what-do-courts-do',
    ],
    sources: ['iccpr', 'udhr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 7,
    keyTerms: ['due-process', 'fair-trial', 'burden-of-proof', 'standard-of-proof'],
    definition: [
      {
        kind: 'paragraph',
        text: 'Due process is the requirement that the state follow fair and established procedures before it deprives a person of liberty, property, or another important interest. It governs how a decision is made, not what the decision is.',
      },
      {
        kind: 'paragraph',
        text: 'The term itself comes from the constitutional vocabulary of some common-law countries. Other systems express the same requirements through different phrases — fair trial rights, procedural fairness, natural justice, or the guarantees written into a constitution or a treaty. The underlying idea travels; the label does not.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'A note on terminology',
        text: 'Because "due process" is a term of art in particular constitutional systems, this guide uses it in its general sense: the procedural protections that must be observed before the state acts against a person. Where a specific national doctrine is meant, the country is named.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The state can imprison people, take their property, remove their children, and deport them. Those powers are necessary for a functioning legal order, and they are also the powers most capable of doing irreversible harm when applied to the wrong person or on the wrong basis.',
      },
      {
        kind: 'paragraph',
        text: 'Due process is the set of checks placed between the power and its exercise. It exists because decisions made without notice, without evidence, or by an interested decision-maker have repeatedly turned out to be wrong, and because errors of this kind are frequently impossible to remedy afterwards.',
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights declares the right to a fair and public hearing by an independent and impartial tribunal in the determination of any criminal charge, and the International Covenant on Civil and Political Rights sets out fair-trial guarantees in treaty form in Article 14.',
        claim: 'fact',
        sources: ['udhr', 'iccpr'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The specific protections vary, but a recognisable core appears across systems and in international instruments.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Notice',
            description:
              'Being told, in a language you understand, what is alleged and what is at stake, in time to respond.',
          },
          {
            term: 'An opportunity to be heard',
            description:
              'A genuine chance to answer the case, present evidence, and challenge the evidence against you.',
          },
          {
            term: 'An impartial decision-maker',
            description:
              'Someone without a personal interest in the outcome and not part of the body bringing the case.',
          },
          {
            term: 'Legal assistance',
            description:
              'Access to representation, and in serious criminal cases, provision where the person cannot pay.',
          },
          {
            term: 'A reasoned decision',
            description:
              'Reasons that make the basis of the decision examinable — which is what makes an appeal possible.',
          },
          {
            term: 'A route of challenge',
            description: 'Appeal or review by a higher or different body.',
          },
          {
            term: 'Decision within a reasonable time',
            description:
              'Indefinite proceedings are themselves a harm, particularly where the person is detained meanwhile.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'These protections are not confined to criminal trials. Immigration decisions, professional disciplinary proceedings, welfare determinations, and school exclusions attract procedural protections in many systems, though usually at a lower intensity than criminal proceedings.',
      },
    ],
    misconceptions: [
      {
        claim: 'Due process guarantees a fair outcome.',
        reality:
          'It guarantees a fair procedure. A properly conducted process can still reach the wrong conclusion, which is why appeal routes and post-conviction review mechanisms exist alongside it.',
      },
      {
        claim: 'Due process only applies to criminal cases.',
        reality:
          'Procedural fairness applies wherever the state makes a decision that significantly affects someone. The protections are usually strongest in criminal proceedings, because the consequences are most severe, but they are not confined to them.',
      },
      {
        claim: 'Due process is a delay tactic used by the guilty.',
        reality:
          'It applies to everyone before any determination of guilt has been made — which is the point. A procedural protection available only to the innocent would require knowing the answer before the process that determines it.',
      },
      {
        claim: 'Countries without the phrase "due process" do not have it.',
        reality:
          'Most legal systems provide equivalent protections under different names, whether through constitutional fair-trial guarantees, administrative-law doctrines of procedural fairness, or treaty obligations. Searching for the phrase rather than the function produces the wrong answer.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Some constitutions contain an explicit due-process clause; others express the same protections as enumerated fair-trial rights; others rely on judge-made doctrine or on international treaty obligations given domestic effect.',
          'The stage at which a lawyer must be available differs: at first contact, at first questioning, on arrest, or on charge.',
          'Legal aid provision differs enormously in scope and in practice, and is one of the largest determinants of whether procedural rights are usable.',
          'Systems differ in whether pre-trial decisions are supervised by a judge, by a prosecutor, or internally by the investigating body.',
          'Remedies for a breach differ: exclusion of evidence, a reduced sentence, a stay of proceedings, or compensation — and some systems provide none of these automatically.',
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Why the remedy matters as much as the right',
        text: 'Two systems can guarantee the same protection and differ completely in what happens when it is breached. The remedy is often the more informative half of the comparison.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Due process is where individual rights and institutional accountability meet. Each protection is simultaneously a right held by a person and a limit on an institution, and each generates a record — a notice, a decision, a reason — that can be examined later.',
      },
      {
        kind: 'paragraph',
        text: 'That record is what makes appellate review, judicial review, complaints investigation, and inspection possible. A process that leaves no reasoned trail cannot be meaningfully reviewed, however fair it may have been.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The most consequential procedural protections are usually the least visible ones: disclosure of material that undermines the case, recording of interviews, and access to advice before questioning. They operate before anyone reaches a courtroom, and their absence is rarely apparent from the outcome alone.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [the presumption of innocence](/justice/what-is-the-presumption-of-innocence), [the rule of law](/justice/what-is-the-rule-of-law), and [what courts do](/courts/what-do-courts-do).',
      },
    ],
  },

  {
    slug: 'what-is-the-presumption-of-innocence',
    title: 'What is the presumption of innocence?',
    shortTitle: 'Presumption of innocence',
    question: 'What is the presumption of innocence?',
    summary:
      'The presumption of innocence means a person charged with an offence is treated as not guilty until guilt is proved. This guide explains what it requires of courts, states, and reporting — and what it does not prevent.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['what-is-due-process', 'what-does-a-prosecutor-do', 'what-do-courts-do'],
    sources: ['udhr', 'iccpr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 6,
    keyTerms: ['presumption-of-innocence', 'burden-of-proof', 'standard-of-proof', 'acquittal'],
    definition: [
      {
        kind: 'paragraph',
        text: 'The presumption of innocence means that a person charged with a criminal offence is treated as not guilty until guilt is proved according to law. The obligation to prove the case rests on the state, and the person charged is not required to prove innocence.',
      },
      {
        kind: 'paragraph',
        text: 'It is a rule about who must prove what, and to what standard. It is not a statement of belief about whether a particular person did something.',
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states that everyone charged with a penal offence has the right to be presumed innocent until proved guilty according to law in a public trial at which they have had all the guarantees necessary for their defence. The International Covenant on Civil and Political Rights states the same guarantee in treaty form in Article 14(2).',
        claim: 'fact',
        sources: ['udhr', 'iccpr'],
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'In a criminal case the state holds overwhelming advantages: investigative powers, resources, and the ability to detain. Placing the burden on the accused would mean requiring the weaker party to prove a negative against the stronger one.',
      },
      {
        kind: 'paragraph',
        text: 'The presumption also reflects a deliberate choice about which kind of error a system prefers to make. A high standard of proof means some guilty people are acquitted; a low standard means more innocent people are convicted. Criminal systems generally treat wrongful conviction as the more serious failure, because the state is then actively inflicting harm on someone who has done nothing, and because such errors are frequently irreversible.',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Burden of proof',
            description:
              'The obligation to prove the case sits with the prosecution. The accused does not have to give evidence or explain anything, though systems differ in what may be inferred from silence.',
          },
          {
            term: 'Standard of proof',
            description:
              'Criminal cases require a high standard, expressed as "beyond reasonable doubt", "intime conviction", or an equivalent formulation. It is deliberately higher than the standard used in civil disputes.',
          },
          {
            term: 'Treatment before trial',
            description:
              'The presumption shapes how a person is treated while proceedings are pending, including the approach to pre-trial detention, which is generally treated as exceptional rather than routine.',
          },
          {
            term: 'Statements by officials',
            description:
              'Public authorities are expected not to declare a person guilty before a court has decided, because official statements of guilt undermine the determination the court is there to make.',
          },
          {
            term: 'The consequence of acquittal',
            description:
              'An acquittal means the case was not proved to the required standard. It is a legal outcome, not a finding that the person is innocent as a matter of fact, and systems differ in whether they mark that distinction explicitly.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'The presumption of innocence means police cannot arrest someone.',
        reality:
          'It governs proof at trial and the treatment of a person before determination. Arrest, search, and pre-trial detention operate on lower thresholds — reasonable suspicion or equivalent — precisely because they are not determinations of guilt. What the presumption requires is that those measures not be treated as proof.',
      },
      {
        claim: 'An acquittal means the court found the person innocent.',
        reality:
          'In most systems an acquittal means the prosecution did not prove the case to the required standard. That is a different finding, and the difference is why some systems have separate verdicts or separate compensation regimes for those proved innocent.',
      },
      {
        claim: 'The presumption stops the press from reporting on cases.',
        reality:
          'Reporting restrictions come from separate rules — contempt of court, reporting restrictions, privacy and defamation law — which differ greatly between countries. The presumption itself binds the state and the court, not private publishers, although in several systems it strongly informs how restrictions are framed.',
      },
      {
        claim: 'It applies everywhere in a legal system.',
        reality:
          'It is a criminal-law principle. Civil cases use a lower standard, and regulatory and administrative proceedings have their own arrangements. Some systems also allow narrow, justified reversals of the burden for specific elements of specific offences, and those are frequently contested.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'How the standard of proof is expressed varies: "beyond reasonable doubt" in many common-law systems, the judge’s "inner conviction" in several civil-law systems. The formulations are not straightforwardly equivalent.',
          'Whether adverse inferences may be drawn from silence differs between systems and, within systems, between stages of the process.',
          'Pre-trial detention rules — the grounds, the maximum duration, and who reviews it — vary widely, and are one of the clearest practical measures of how seriously the presumption is taken.',
          'Some systems permit limited reverse burdens for defined elements of specific offences; whether these are compatible with the presumption is litigated.',
          'Rules on what officials and media may say about a pending case differ substantially, particularly between systems with strong pre-trial publicity restrictions and those without.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The presumption is enforced through several other mechanisms rather than on its own: rules on the admissibility of evidence, disclosure obligations on the prosecution, judicial supervision of detention, directions to juries or reasoned judgments explaining how the standard was applied, and appellate review.',
      },
      {
        kind: 'paragraph',
        text: 'Where it fails, the failure is usually visible somewhere in that chain — in undisclosed material, in unsupervised detention, or in a decision whose reasoning does not show the standard being applied.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The presumption is most tested outside the courtroom: in how long people are held before trial, in what officials say publicly about pending cases, and in the practical consequences a person suffers from being charged. A system can honour it perfectly at trial and undermine it substantially before trial.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [due process](/justice/what-is-due-process), [what a prosecutor does](/prosecution/what-does-a-prosecutor-do), and [what courts do](/courts/what-do-courts-do).',
      },
    ],
  },

  {
    slug: 'why-justice-systems-need-oversight',
    title: 'Why do justice systems need oversight?',
    shortTitle: 'Why oversight exists',
    question: 'Why do justice systems need oversight?',
    summary:
      'Justice institutions hold coercive powers, often operate out of public view, and make decisions that are hard to reverse. This guide explains the oversight mechanisms built to detect and correct errors, and their limits.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-is-justice',
      'what-is-the-rule-of-law',
      'why-societies-need-law-enforcement',
      'what-civil-protection-is',
    ],
    sources: ['mandela-rules', 'iccpr', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['oversight', 'accountability', 'judicial-review', 'inspectorate'],
    definition: [
      {
        kind: 'paragraph',
        text: 'Oversight is the set of arrangements by which the decisions of justice institutions are examined by bodies that did not make them. It includes appeal courts, judicial review of public decisions, independent complaints bodies, inspectorates, prison monitoring, audit bodies, and parliamentary scrutiny.',
      },
      {
        kind: 'paragraph',
        text: 'Oversight is not a response to an institution having failed. It is a standing feature of institutional design, built in from the start on the assumption that any system exercising power over people will produce errors.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Four features of justice institutions make external scrutiny structurally necessary rather than optional.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The powers are coercive',
            description:
              'Detention, search, use of force, and the removal of liberty are powers that private people do not hold. Powers of that kind are conventionally paired with scrutiny of that kind.',
          },
          {
            term: 'Much of the work is not public',
            description:
              'Investigations, custody, and detention take place away from public view. Closed environments are structurally resistant to internal scrutiny, which is why external inspection exists specifically for them.',
          },
          {
            term: 'Errors are hard to reverse',
            description:
              'Time spent wrongly detained cannot be returned. Systems that cannot undo their errors need to be good at finding them early.',
          },
          {
            term: 'The people affected are often least able to complain',
            description:
              'Those subject to justice-system power are frequently detained, unrepresented, unfamiliar with the language, or already disbelieved. Oversight bodies exist partly to compensate for that asymmetry.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'International standards reflect this. The United Nations Standard Minimum Rules for the Treatment of Prisoners provide for regular inspection of prisons by bodies independent of the prison administration, in addition to internal inspection.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Different oversight mechanisms answer different questions. None is sufficient alone, and confusing them is a common source of frustration when a complaint reaches the wrong body.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Appeal',
            description:
              'Asks whether a legal error or procedural unfairness affected a decision. It does not usually re-decide the facts.',
          },
          {
            term: 'Judicial review',
            description:
              'Asks whether a public body acted within its powers and followed a lawful process. It examines the legality of the decision, not its merits.',
          },
          {
            term: 'Complaints bodies',
            description:
              'Ask whether individual conduct fell below required standards, and can usually recommend or impose disciplinary consequences.',
          },
          {
            term: 'Inspectorates',
            description:
              'Ask whether an institution as a whole is operating to standard, examining systems and patterns rather than individual cases.',
          },
          {
            term: 'Detention monitoring',
            description:
              'Asks whether conditions and treatment in closed institutions meet required standards, typically through unannounced visits.',
          },
          {
            term: 'Post-conviction review',
            description:
              'Asks whether a conviction is safe in light of material that was not available or not disclosed at trial.',
          },
          {
            term: 'Audit and parliamentary scrutiny',
            description:
              'Ask whether resources and powers are being used as authorised, and hold institutional leadership to account publicly.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The International Covenant on Civil and Political Rights requires that a person’s conviction and sentence be reviewable by a higher tribunal according to law, which is the treaty basis for appellate review in the states party to it.',
        claim: 'fact',
        sources: ['iccpr'],
      },
    ],
    misconceptions: [
      {
        claim: 'Oversight means assuming institutions act in bad faith.',
        reality:
          'Most oversight findings concern process failures, resourcing, training, and systemic pressure rather than deliberate wrongdoing. Oversight is designed for the ordinary case of a competent institution making errors, not for the exceptional case of a corrupt one.',
      },
      {
        claim: 'Internal discipline is enough.',
        reality:
          'Internal processes handle much of the volume and are often faster. They are also, structurally, an institution examining itself. External bodies exist to answer the questions an internal process cannot answer credibly — which is why most systems have both.',
      },
      {
        claim: 'An oversight body can overturn any decision.',
        reality:
          'Most have narrow, specific powers. A complaints body typically cannot quash a conviction; an inspectorate typically cannot discipline an individual; an appeal court typically cannot reopen the facts. Knowing which body does what is often the difference between a complaint being resolved and being dismissed.',
      },
      {
        claim: 'More oversight always produces better outcomes.',
        reality:
          'Oversight consumes resources and time, and can produce defensive practice and duplicated reporting. The design question is not how much oversight exists but whether the right mechanism, with the right powers, examines the right question — and whether its findings are acted on.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Independent police complaints bodies exist in many countries, but their powers differ fundamentally: some investigate directly, some supervise internal investigations, some only review completed ones.',
          'Prison inspection may be carried out by a statutory inspectorate, by an ombudsman, by lay monitoring boards, by an international body, or by several in combination.',
          'Judicial conduct is overseen by judicial councils, specialised tribunals, or parliamentary procedures depending on the system, and the design has direct implications for judicial independence.',
          'Some countries have a dedicated body to review possible wrongful convictions; in others that function sits with the appellate courts or with a ministry.',
          'Access to oversight varies as much as the mechanisms: a complaints body with no route for a detained person to reach it is limited in practice regardless of its powers.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The United Nations crime prevention and criminal justice programme maintains standards and norms across policing, courts, and prisons that inform many of these arrangements.',
        claim: 'fact',
        sources: ['unodc-cpcj'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Oversight is the mechanism that turns rights into something more than statements. A protection against arbitrary detention becomes meaningful when a court can order release; a standard of treatment in detention becomes meaningful when an inspector can arrive unannounced and publish what they find.',
      },
      {
        kind: 'paragraph',
        text: 'Three features tend to determine whether an oversight body is effective in practice: whether it can obtain evidence without the cooperation of the body it examines, whether it can publish findings independently, and whether its recommendations produce any consequence when ignored.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Recurring findings in successive inspection reports are more informative than any single report. A finding that appears once may be a failure; a finding that appears for the fifth time is telling you about the mechanism that was supposed to act on it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what justice means institutionally](/justice/what-is-justice), [the rule of law](/justice/what-is-the-rule-of-law), and [why societies have law enforcement](/law-enforcement/why-societies-need-law-enforcement).',
      },
    ],
  },
  {
    slug: 'why-government-is-bound-by-law',
    title: 'Why government is bound by law',
    shortTitle: 'Why government is bound by law',
    question: 'What actually stops a government from doing as it likes?',
    summary:
      'Constitutions answer this in text, not in sentiment. Germany binds the executive and the judiciary to law and opens the courts against public authority; South Africa requires administrative action to be lawful, reasonable and procedurally fair; Brazil forbids any law excluding a rights claim from the courts.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-is-the-rule-of-law',
      'limits-on-public-power',
      'why-justice-systems-need-oversight',
      'who-can-declare-a-state-of-emergency',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'de-gg-rechtsstaat-articles',
      'za-constitution',
      'br-cf-1988',
      'ke-constitution',
      'udhr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['rule-of-law', 'judicial-review'],
    uncertainty: [
      'This page describes constitutional arrangements. It establishes nothing about whether any government complies with them, which is an empirical question no constitutional text can answer.',
      'Four constitutions were read from primary text for this page. Where a country is named the statement is limited to what its own instrument says.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The rule of law is often stated as a sentiment: that government should be under the law rather than above it. Constitutions state it as a provision, and reading the provisions is more instructive than reading the sentiment, because they show what the binding actually consists of.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how constitutions bind public power. It is not legal advice, it does not assess any government’s compliance, and it does not describe how to bring a claim in any country.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A state that makes law, applies it and adjudicates disputes about it holds every relevant power at once. The problem is not that officials are assumed to be dishonest; it is that a power with no external check produces decisions no one outside the institution has any reason to accept.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Binding government to law answers that by making the state a subject of the legal order rather than only its author. That is a structural claim, and constitutions make it in structural language.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The executive and the judiciary bound by law — Germany',
            description:
              'Article 20(3) of the Basic Law: "Die Gesetzgebung ist an die verfassungsmäßige Ordnung, die vollziehende Gewalt und die Rechtsprechung sind an Gesetz und Recht gebunden" — legislation is bound by the constitutional order, and the executive and the judiciary are bound by law and justice. The binding runs to all three, and it is stated in one sentence.',
          },
          {
            term: 'A guaranteed route to a court — Germany',
            description:
              'Article 19(4): "Wird jemand durch die öffentliche Gewalt in seinen Rechten verletzt, so steht ihm der Rechtsweg offen" — where a person’s rights are violated by public authority, recourse to the courts is open. A binding with no route to enforce it would be a statement of intent; this is the provision that makes it a claim.',
          },
          {
            term: 'A standard the administration must meet — South Africa',
            description:
              'Section 33(1): "Everyone has the right to administrative action that is lawful, reasonable and procedurally fair." Section 33(2) adds that a person whose rights have been adversely affected is entitled to written reasons, and section 33(3) requires legislation providing for review by a court or an independent tribunal. Lawfulness, reasonableness, fairness and reasons, in one section.',
          },
          {
            term: 'A prohibition on closing the courthouse — Brazil',
            description:
              'Article 5º XXXV: "a lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito" — the law shall not exclude from the appraisal of the Judiciary any injury or threat to a right. The provision binds the legislature specifically, by forbidding it to legislate access away. Article 5º XXXVII adds that there shall be no exceptional court or tribunal.',
          },
          {
            term: 'Values that bind every official act — Kenya',
            description:
              'Article 10 makes the national values and principles of governance, which expressly include the rule of law, binding on all State organs, State officers, public officers and all persons whenever any of them applies or interprets the Constitution, enacts, applies or interprets any law, or makes or implements public policy decisions. The binding attaches to the act, not to the office.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Four different mechanisms, not four phrasings of one',
        text: 'Germany binds the branches and then opens a route to court. South Africa sets a quality standard for administrative action and requires reasons. Brazil forbids the legislature to remove access. Kenya attaches the values to every application of law by anyone. These are genuinely different techniques, and a system can have one without the others.',
      },
    ],
    misconceptions: [
      {
        claim: 'Saying government is bound by law just means officials should obey the rules.',
        reality:
          'It means the state is a subject of the legal order and answerable within it. Germany’s Article 19(4) opens the courts against public authority, and Brazil’s Article 5º XXXV forbids the law itself from closing them. Those are enforceable positions, not exhortations.',
      },
      {
        claim: 'A constitution that says the right things means a government behaves well.',
        reality:
          'A provision establishes an arrangement. Whether it functions is an empirical question about practice, and this site describes the arrangements without inferring compliance from text.',
      },
      {
        claim: 'Being bound by law means the government cannot act decisively.',
        reality:
          'These provisions govern how power is exercised, not whether. Every system described here investigates, prosecutes, adjudicates and punishes; what the provisions require is that it be done on a legal basis and be capable of review.',
      },
      {
        claim: 'Only democracies bind their governments this way.',
        reality:
          'That is a claim about political systems this site does not make. The four constitutions described here are the ones read for this page, and nothing here is a survey of which states have such provisions or of whether they are honoured.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The useful question about any system is which of four things its constitution actually does.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Does it bind the branches to law in terms — Germany, Article 20(3)?',
          'Does it guarantee a route to a court against public authority — Germany, Article 19(4)?',
          'Does it set a quality standard for official action and require reasons — South Africa, section 33?',
          'Does it forbid the legislature from removing access — Brazil, Article 5º XXXV?',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'What these provisions share is that they make the state answerable to something other than its own judgement. The Universal Declaration of Human Rights states the declared principle of a right to an effective remedy by a competent tribunal for acts violating fundamental rights; the constitutions above are what turn a declared principle into a domestic claim.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Binding is not distrust',
        text: 'None of this assumes officials act badly. It assumes that a power capable of being exercised wrongly should be capable of being examined, which is a claim about institutions rather than about the people in them.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what the rule of law is](/justice/what-is-the-rule-of-law), [limits on public power](/justice/limits-on-public-power), and [constitutional courts](/institutions/constitutional-court).',
      },
    ],
  },
  {
    slug: 'limits-on-public-power',
    title: 'Limits on public power',
    shortTitle: 'Limits on public power',
    question: 'What limits does law place on what the state may do to a person?',
    summary:
      'Four recurring limits appear in constitutional text: an act must have a legal basis that existed beforehand, the person must be heard, the decision must be capable of review, and some things may not be done at all.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-government-is-bound-by-law',
      'legality-and-non-retroactivity',
      'what-is-due-process',
      'which-rights-can-never-be-suspended',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'de-gg-rechtsstaat-articles',
      'br-cf-1988',
      'za-constitution',
      'ke-constitution',
      'iccpr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['rule-of-law', 'due-process'],
    uncertainty: [
      'The four limits described here are drawn from the constitutions read for this wave. They are a way of reading those texts, not a universal scheme, and a system may organise the same protections differently.',
      'Proportionality — the doctrine several constitutional courts use to assess whether a limit on a right goes further than necessary — is not described. None of the four constitutions read here states it in terms, and the jurisprudence that develops it was not researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The state may search, arrest, prosecute, try, convict and detain. Every one of those is something a private person may not do, and every one is bounded. The bounds recur across systems in four recognisable forms, and they are worth separating because a system can be strong on one and weak on another.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains categories of legal limit on state action. It is not legal advice, it states no country’s procedure, and it contains nothing about how to resist, delay or avoid a lawful process.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Coercive power is granted because a society needs it exercised — against violence, fraud, and harms private parties cannot resolve between themselves. The limits exist because the same power exercised without basis, without hearing the person, or without any possibility of correction produces outcomes that are indistinguishable from arbitrary ones even when they are right.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A legal basis that existed first',
            description:
              'Brazil’s Article 5º XXXIX: "não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal" — no crime without a prior law defining it, no penalty without prior legal imposition. Germany’s Article 103(2) states the same limit from the other direction: an act may be punished only if its punishability was determined by law before the act was committed.',
          },
          {
            term: 'The person must be heard',
            description:
              'Germany’s Article 103(1): "Vor Gericht hat jedermann Anspruch auf rechtliches Gehör" — before a court, everyone is entitled to a hearing in accordance with law. Brazil’s Article 5º LV assures litigants in judicial and administrative proceedings, and the accused generally, "o contraditório e ampla defesa" — the adversarial principle and full defence, with the means and remedies inherent to it.',
          },
          {
            term: 'The decision must be reviewable',
            description:
              'Germany’s Article 19(4) opens the courts where public authority violates rights. Brazil’s Article 5º XXXV forbids the law from excluding an injury or threat to a right from judicial appraisal. South Africa’s section 33(3) requires legislation providing for review of administrative action by a court or an independent and impartial tribunal.',
          },
          {
            term: 'Some things may not be done at all',
            description:
              'Germany’s Article 19(2): a fundamental right may in no case be encroached upon in its essential content. Brazil’s Article 5º XXXVII forbids exceptional courts or tribunals, and Article 5º LVI makes evidence obtained by unlawful means inadmissible. These are not balancing rules; they are prohibitions.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The limits protect the process as much as the person',
        text: 'Brazil’s exclusion of unlawfully obtained evidence is the clearest case. It is stated as a rule about the process rather than as a remedy for the individual: material obtained unlawfully is inadmissible, whatever it shows. A system that admitted it would be accepting that the way a fact was obtained does not matter, which is a different proposition about what a finding is worth.',
      },
      {
        kind: 'paragraph',
        text: 'Some limits are about time rather than substance. Brazil’s Article 5º LXXVIII guarantees, in the judicial and administrative spheres, reasonable duration of proceedings and the means that guarantee the speed of their handling; Kenya’s Article 159(2)(b) states as a guiding principle that justice shall not be delayed. A process that is fair but never ends has failed the person in it.',
        claim: 'fact',
        sources: ['br-cf-1988', 'ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'Limits on state power make it harder to deal with crime.',
        reality:
          'They govern how the state acts, not whether. Every system described here investigates, prosecutes and punishes; what the limits require is a prior legal basis, a hearing, and the possibility of review.',
      },
      {
        claim: 'Everything the state does can be balanced against the public interest.',
        reality:
          'Some limits are absolute in their terms. Germany’s Article 19(2) bars encroachment on the essential content of a fundamental right, and Brazil’s Article 5º LVI excludes unlawfully obtained evidence without a balancing test on its face.',
      },
      {
        claim: 'These protections only matter to people who are accused of something.',
        reality:
          'Three of the four are about administrative and civil action as much as criminal. South Africa’s section 33 governs administrative action generally, and Brazil’s LXXVIII covers the administrative sphere expressly.',
      },
      {
        claim:
          'A law can be applied to conduct that happened before it existed if the conduct was bad enough.',
        reality:
          'Both Germany and Brazil forbid that in terms, and Brazil states the one permitted direction: Article 5º XL provides that criminal law shall not be retroactive, save to benefit the accused.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Systems differ in where they put each limit, which is why reading only one instrument gives a partial picture.',
      },
      {
        kind: 'list',
        items: [
          'In the constitution as a right — Germany’s Article 103, Brazil’s Article 5º.',
          'In the constitution as a standard for official conduct — South Africa’s section 33.',
          'In the constitution as a binding value applying to every act of interpretation — Kenya’s Article 10.',
          'In ordinary procedural law, where the constitution is silent and the code carries the guarantee.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The International Covenant on Civil and Political Rights carries fair-trial guarantees for states party to it, including the right to a competent, independent and impartial tribunal established by law. It states a standard; the constitutional provisions above are what make a claim available domestically, and only the second kind of provision can be enforced in a national court.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Limits are not the same as weakness',
        text: 'A state that acts on a legal basis, hears the person affected, and submits its decision to review is a state whose decisions can be relied on. The limits are what make the exercise of power something other than the assertion of it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why government is bound by law](/justice/why-government-is-bound-by-law), [legality and non-retroactivity](/justice/legality-and-non-retroactivity), and [what due process is](/justice/what-is-due-process). For limits drafted as answers to recited abuses, see [the 1689 declarations](/history/the-1689-declarations-and-what-caused-them).',
      },
    ],
  },
  {
    slug: 'legality-and-non-retroactivity',
    title: 'Legality and non-retroactivity',
    shortTitle: 'Legality and non-retroactivity',
    question:
      'Can a person be punished for something that was not an offence when they did it?',
    summary:
      'Constitutions answer no, and say so in almost identical words across very different systems: no crime without a prior law, no penalty without prior legal imposition. Brazil states the one permitted exception — retroactivity that benefits the accused.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['limits-on-public-power', 'legal-certainty', 'why-government-is-bound-by-law'],
    relatedInstitutions: ['constitutional-court'],
    sources: ['de-gg-rechtsstaat-articles', 'br-cf-1988', 'udhr', 'iccpr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['rule-of-law', 'legal-certainty'],
    uncertainty: [
      'Two constitutions were read from primary text for this page. The principle appears widely, but this page states it only for the systems whose text was read, and describes no country’s case law on how the principle is applied at the margins.',
      'How courts treat changes in sentencing law, in limitation periods, or in procedural rules is a body of jurisprudence that was not researched and is not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The principle is usually given in Latin — nullum crimen, nulla poena sine lege — and it contains two demands that are worth separating. The conduct must have been criminal when it was done, and the punishment must have been provided for when it was done.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains a constitutional principle and how two systems state it. It is not legal advice and describes no country’s case law.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A person can only regulate their conduct against rules that exist. Punishing someone under a rule created afterwards asks them to have complied with something unknowable, and it hands the state a power it could use against anyone by legislating after the fact.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'That is why the principle is usually placed among the strongest protections in a constitution rather than in ordinary law: it is a limit on the legislature, and a limit on the legislature has to sit somewhere the legislature cannot reach.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Brazil — stated as two prohibitions and one exception',
            description:
              'Article 5º XXXIX: "não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal" — there is no crime without a prior law defining it, and no penalty without prior legal imposition. Article 5º XL then states the exception, and its direction: "a lei penal não retroagirá, salvo para beneficiar o réu" — criminal law shall not be retroactive, save to benefit the accused.',
          },
          {
            term: 'Germany — stated as a condition on punishing',
            description:
              'Article 103(2) of the Basic Law: "Eine Tat kann nur bestraft werden, wenn die Strafbarkeit gesetzlich bestimmt war, bevor die Tat begangen wurde" — an act may be punished only if its punishability was determined by law before the act was committed. Article 103(3) adds ne bis in idem: no one may be punished more than once for the same act under the general criminal laws.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The asymmetry is deliberate',
        text: 'Brazil’s exception runs one way only. A later law may be applied backwards if it helps the accused — a reduced penalty, a decriminalised act — and may not if it harms them. That asymmetry follows from what the principle is for: it protects a person against being surprised by the state, not the state against being bound by its own change of mind.',
      },
      {
        kind: 'paragraph',
        text: 'The principle also does work beyond the criminal law’s edges. Brazil’s Article 5º XXXVI provides that the law shall not impair a vested right, a perfect juridical act or res judicata — the same underlying idea applied to settled legal positions rather than to offences, and the subject of [legal certainty](/justice/legal-certainty).',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Non-retroactivity means the law can never change.',
        reality:
          'It means a change cannot reach backwards to make past conduct punishable. Legislatures amend criminal law constantly; what they cannot do is apply the amendment to what was already done.',
      },
      {
        claim: 'Retroactivity is always forbidden.',
        reality:
          'Brazil expressly permits it in one direction: Article 5º XL allows criminal law to be retroactive where it benefits the accused.',
      },
      {
        claim: 'The principle protects wrongdoers from consequences.',
        reality:
          'It requires that the consequence existed in law before the act. Conduct criminal at the time remains punishable; the principle bars punishing conduct that was not.',
      },
      {
        claim: 'This is a technicality that rarely matters.',
        reality:
          'It is the limit that prevents a state from legislating against a person after identifying them. Both constitutions here place it among fundamental rights rather than in ordinary procedural law.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The two texts here express the same principle with different emphasis, and the difference is instructive.',
      },
      {
        kind: 'list',
        items: [
          'Brazil states it as two prohibitions — no crime, no penalty — and then names the exception.',
          'Germany states it as a single condition on the power to punish, and adds ne bis in idem beside it.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'International instruments state the principle for states party to them. The Universal Declaration of Human Rights carries the declared principle that no one shall be held guilty of a penal offence on account of an act which did not constitute a penal offence under national or international law at the time it was committed. As always on this site, that establishes an international standard and not the law of any particular state.',
        claim: 'fact',
        sources: ['udhr'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a reader, the practical significance is that the question "was this lawful?" always has a date attached. Whether conduct was an offence is answered by the law as it stood when the conduct occurred, not by the law as it stands when the question is asked.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A limit on the legislature, not on the courts',
        text: 'This principle constrains what may be enacted and applied, not whether a court may decide a case. A court applying a law that existed at the time is doing exactly what the principle requires of it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [limits on public power](/justice/limits-on-public-power), [legal certainty](/justice/legal-certainty), and [Brazil](/countries/brazil).',
      },
    ],
  },
  {
    slug: 'legal-certainty',
    title: 'Legal certainty',
    shortTitle: 'Legal certainty',
    question: 'Why does it matter that people can know where they stand in law?',
    summary:
      'Because a rule you cannot find, cannot understand, or that can be changed against you afterwards cannot guide anything. Constitutions protect settled positions directly — vested rights, completed acts, and decisions that have become final.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'legality-and-non-retroactivity',
      'why-government-is-bound-by-law',
      'what-is-the-rule-of-law',
      'how-emergency-powers-end',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: ['br-cf-1988', 'de-gg-rechtsstaat-articles', 'ke-constitution'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['legal-certainty', 'rule-of-law'],
    uncertainty: [
      'This page describes constitutional provisions protecting settled legal positions. The wider doctrine of legal certainty — including how courts treat legitimate expectations and changes of administrative practice — was not researched and is not described.',
      'Two constitutions were read from primary text. Nothing here describes any other system.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Legal certainty is the requirement that law be knowable in advance and stable enough to rely on. It is less dramatic than the other rule-of-law principles and it does more day-to-day work than most of them, because almost every decision a person makes about property, contracts, employment or conduct assumes the legal position will still be the legal position tomorrow.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains a principle and the constitutional provisions that carry it. It is not legal advice and describes no country’s case law.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Law claims to guide conduct. A rule that is unknowable cannot guide, and a rule that can be altered retrospectively guides only until someone decides otherwise. Certainty is the property that makes the other rule-of-law commitments operable rather than nominal.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also has a quieter function: it limits the advantage the state gains from being both the maker of rules and a party under them. A government that could reopen settled positions would hold a power no other litigant has.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Brazil protects three settled positions by name in a single clause. Article 5º XXXVI provides that the law shall not impair a vested right, a perfect juridical act, or res judicata — that is, an entitlement already acquired, a legal act already validly completed, and a judicial decision from which no appeal lies. The three cover most of the ways a legal position becomes settled.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Finality is a feature, not an oversight',
        text: 'Res judicata protection can look like a system defending its own mistakes. It is the price of a different guarantee: that a dispute once decided stays decided, and that a person cannot be pursued indefinitely by whoever has the resources to keep asking. Systems answer the tension by placing correction earlier — in appeal and review — rather than by leaving every judgment permanently open.',
      },
      {
        kind: 'paragraph',
        text: 'Certainty has a temporal dimension as well as a substantive one. Brazil’s Article 5º LXXVIII guarantees reasonable duration of proceedings and the means that guarantee the speed of their handling, in the judicial and administrative spheres; Kenya’s Article 159(2)(b) states as a guiding principle of judicial authority that justice shall not be delayed. A legal position that takes a decade to establish was not certain during the decade.',
        claim: 'fact',
        sources: ['br-cf-1988', 'ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'The criminal-law expression of the same idea is the prohibition on retroactivity, which [legality and non-retroactivity](/justice/legality-and-non-retroactivity) sets out. Germany’s Article 103(2) requires that punishability be determined by law before the act; that is legal certainty applied where the stakes are highest.',
        claim: 'fact',
        sources: ['de-gg-rechtsstaat-articles'],
      },
    ],
    misconceptions: [
      {
        claim: 'Legal certainty means the law should never change.',
        reality:
          'It means changes should operate prospectively and settled positions should hold. Legislatures amend law constantly; what certainty constrains is reaching backwards into positions already fixed.',
      },
      {
        claim: 'Certainty and fairness pull in opposite directions.',
        reality:
          'They frequently reinforce each other. A person cannot be treated fairly under a rule they could not have known, and a decision that can be reopened indefinitely is not a resolution.',
      },
      {
        claim: 'Res judicata exists to protect courts from being second-guessed.',
        reality:
          'It protects the parties from indefinite litigation. Systems place the opportunity to correct error before finality — in appeal and review — rather than removing finality.',
      },
      {
        claim: 'Certainty is only about written rules.',
        reality:
          'Brazil’s clause protects a vested right and a perfect juridical act alongside res judicata, which are positions created by conduct and decision rather than by legislation.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where a system places the principle tells you how strongly it holds.',
      },
      {
        kind: 'list',
        items: [
          'As a constitutional right against the legislature — Brazil, Article 5º XXXVI.',
          'As a constitutional condition on punishment — Germany, Article 103(2).',
          'As a guiding principle of judicial authority — Kenya, Article 159(2)(b) on delay.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The everyday consequence is that a person can act on the law as it is. That sounds modest until the alternative is described: a system in which the rules governing what you did yesterday are settled by what is decided tomorrow.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Certainty is not immunity',
        text: 'A settled legal position is protected; conduct that was unlawful when done is not made lawful by the passage of time. The principle governs the stability of the rules, not the consequences of breaking them.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [legality and non-retroactivity](/justice/legality-and-non-retroactivity), [what the rule of law is](/justice/what-is-the-rule-of-law), and [appeal](/glossary/appeal).',
      },
    ],
  },
  {
    slug: 'equality-before-the-law',
    title: 'Equality before the law',
    shortTitle: 'Equality before the law',
    question: 'What does it mean to say everyone is equal before the law?',
    summary:
      'At minimum, that the same rules apply regardless of who a person is. Some constitutions go further in the same sentence: South Africa pairs equality before the law with a right to equal protection and benefit of the law, which is a different and larger claim.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['why-government-is-bound-by-law', 'what-is-justice', 'access-to-justice'],
    relatedInstitutions: ['constitutional-court'],
    sources: ['za-constitution', 'de-gg-rechtsstaat-articles', 'ke-constitution', 'udhr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['justice', 'rule-of-law'],
    uncertainty: [
      'This page describes what constitutional texts provide. It makes no assessment of whether any system achieves equality in practice, which is an empirical question these sources cannot answer.',
      'Anti-discrimination law, the tests courts apply to differential treatment, and the jurisprudence on substantive equality were not researched and are not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The phrase is old and does less work on its own than it appears to. Read narrowly it means the law is applied to people without regard to their rank — the same rule, the same court, the same procedure. Read more widely it means something about what the law contains, not only about how it is applied. Constitutions differ on which they promise.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two claims in one sentence — South Africa',
        text: 'Section 9(1) reads: "Everyone is equal before the law and has the right to equal protection and benefit of the law." Equality BEFORE the law is about application: the same rules, applied the same way. Equal protection AND BENEFIT of the law is about content and reach: what the law provides, and whether it actually reaches the person. Placing both in one provision makes explicit a distinction that a shorter formula leaves ambiguous.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains what constitutional equality provisions say. It is not legal advice, it assesses no country, and it does not describe discrimination law.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A legal system that applied different rules according to a person’s standing would not be enforcing law; it would be recording who currently has influence. Equality before the law is the commitment that makes a rule a rule rather than an instruction about particular people.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It is also what makes the other principles coherent. A guarantee of a fair hearing, or of recourse against public authority, means little if it is available to some people and not others.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Germany — the narrow formula, stated first',
            description:
              'Article 3(1) of the Basic Law: "Alle Menschen sind vor dem Gesetz gleich" — all persons are equal before the law. Article 3(3) then lists grounds on which no one may be disadvantaged or favoured, and states separately that no one may be disadvantaged because of disability.',
          },
          {
            term: 'South Africa — application and content together',
            description:
              'Section 9(1) gives both equality before the law and the right to equal protection and benefit of the law. Section 9(2) then states that equality includes the full and equal enjoyment of all rights and freedoms, and that measures designed to protect or advance persons disadvantaged by unfair discrimination may be taken to promote its achievement.',
          },
          {
            term: 'Kenya — as a binding value on every official act',
            description:
              'Article 10 lists equality, human rights, non-discrimination and protection of the marginalised among the national values binding all State organs and officers whenever they apply or interpret law or make public policy. Article 159(2)(a) adds, as a principle of judicial authority, that justice shall be done to all "irrespective of status".',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Kenyan formulation is worth isolating because it addresses the failure mode directly. "Justice shall be done to all, irrespective of status" is a principle stated to the courts about how they exercise authority, rather than a right asserted by a litigant — a different mechanism for the same commitment.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Equality before the law means everyone is treated identically.',
        reality:
          'It means the rules apply without regard to status. Systems routinely and lawfully treat people differently on grounds the law makes relevant — age, capacity, role — and South Africa’s section 9(2) expressly contemplates measures to advance persons disadvantaged by unfair discrimination.',
      },
      {
        claim: 'Equality before the law and equal protection are the same thing.',
        reality:
          'South Africa’s section 9(1) states both, which would be redundant if they were. The first concerns how law is applied; the second concerns what it provides and whether it reaches the person.',
      },
      {
        claim: 'If a constitution guarantees equality, the system is equal.',
        reality:
          'A provision establishes a commitment. Whether it is realised is an empirical question this site does not answer from constitutional text.',
      },
      {
        claim: 'Equality before the law is only about criminal cases.',
        reality:
          'The provisions here are general. South Africa’s section 9 sits in the Bill of Rights and applies across the legal order, and Kenya’s Article 10 binds every application or interpretation of any law.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The three texts show three ways of carrying the same commitment, and the differences are not stylistic.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'As an equality of application — Germany, Article 3(1).',
          'As application plus content and reach — South Africa, section 9(1).',
          'As a value binding every act of interpretation, plus a principle addressed to courts — Kenya, Articles 10 and 159(2)(a).',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle that all are equal before the law and entitled without any discrimination to equal protection of the law. As with every international instrument on this site, that establishes a declared standard rather than the law of any state; the constitutional provisions above are what make the commitment domestically enforceable.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'A right that is formally equal but practically unusable is the subject of [access to justice](/justice/access-to-justice). Equality before the law is a claim about the rules; whether a person can actually invoke them is a separate question, and constitutions increasingly address it separately too.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [access to justice](/justice/access-to-justice), [what justice is](/justice/what-is-justice), and [South Africa](/countries/south-africa).',
      },
    ],
  },
  {
    slug: 'access-to-justice',
    title: 'Access to justice',
    shortTitle: 'Access to justice',
    question: 'What good is a legal right if a person cannot actually use it?',
    summary:
      'Constitutions increasingly treat access as a right in itself rather than assuming it. Kenya guarantees it expressly and constrains court fees; South Africa gives everyone the right to have a dispute decided by a court; Brazil forbids the law from excluding a rights claim from the judiciary.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['equality-before-the-law', 'effective-remedy', 'why-government-is-bound-by-law'],
    relatedInstitutions: ['constitutional-court', 'prosecution-service'],
    sources: [
      'ke-constitution',
      'za-constitution',
      'br-cf-1988',
      'de-gg-rechtsstaat-articles',
      'udhr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['justice', 'rule-of-law'],
    uncertainty: [
      'This page describes constitutional guarantees of access. It establishes nothing about whether courts are in practice accessible in any country — a question about cost, distance, delay, language and representation that constitutional text cannot answer.',
      'Legal aid and representation are described only where a constitution states them. How states fund and organise representation is covered separately in the defence cluster.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A right that exists in law and cannot be invoked in practice is a right in a weak sense. Access to justice is the name for the gap between the two, and for the arrangements that try to close it — courts a person can reach, procedures they can navigate, costs they can bear, and help where they cannot.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains access as a constitutional and institutional commitment. It is not legal advice, it does not tell anyone how to bring a case or obtain assistance, and it makes no assessment of any country’s courts.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Every other principle on this site assumes someone can get to a forum. The rule of law, the limits on public power, the right to be heard, the right to a remedy — all of them presuppose that the person affected can put the question to a body with authority to answer it. Access is the precondition rather than an addition.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Access is not outcome',
        text: 'It concerns the ability to use legal institutions, not what they decide. Access to justice does not mean winning, does not mean free representation in every matter, and does not mean every procedure is costless. A system can provide genuine access and decide against the person who used it — that is what deciding means.',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Kenya — an express guarantee, with a limit on fees',
            description:
              'Article 48: "The State shall ensure access to justice for all persons and, if any fee is required, it shall be reasonable and shall not impede access to justice." The provision is unusual in naming cost as the obstacle and constraining it directly, rather than leaving fees to ordinary legislation.',
          },
          {
            term: 'South Africa — a right to have a dispute decided',
            description:
              'Section 34: "Everyone has the right to have any dispute that can be resolved by the application of law decided in a fair public hearing before a court or, where appropriate, another independent and impartial tribunal or forum." Note what it covers: any dispute resolvable by law, not only criminal matters, and a forum that need not be a court.',
          },
          {
            term: 'Brazil — a prohibition on closing the route',
            description:
              'Article 5º XXXV forbids the law from excluding from the appraisal of the Judiciary any injury or threat to a right. Access is protected by binding the legislature rather than by promising a service.',
          },
          {
            term: 'Germany — recourse against public authority',
            description:
              'Article 19(4) opens the courts where a person’s rights are violated by public authority, with the ordinary courts available where no other jurisdiction is established. This is narrower than the others — it addresses access against the state specifically — and correspondingly firm.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Kenya also addresses the form of the obstacle',
        text: 'Article 159(2) directs that in exercising judicial authority the courts shall be guided by principles including that justice shall not be delayed, that alternative forms of dispute resolution — reconciliation, mediation, arbitration and traditional dispute resolution — shall be promoted, and that justice shall be administered "without undue regard to procedural technicalities". That last principle names something the other constitutions leave implicit: procedure itself can be the barrier.',
      },
      {
        kind: 'paragraph',
        text: 'Some constitutions attach assistance to access rather than leaving it to policy. South Africa’s section 35(2)(c) gives a detained person the right to have a legal practitioner assigned by the state and at state expense "if substantial injustice would otherwise result"; Brazil’s Article 5º LXXIV provides full and free legal assistance to those who prove insufficiency of resources. Those are different conditions — one about the consequence of going unrepresented, the other about means — and the difference is the subject of the defence cluster.',
        claim: 'fact',
        sources: ['za-constitution', 'br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Access to justice means free legal representation for everyone.',
        reality:
          'No constitution read here provides that. South Africa conditions state-funded counsel on substantial injustice otherwise resulting; Brazil conditions it on proof of insufficient resources; Kenya requires that fees be reasonable, not that they be absent.',
      },
      {
        claim: 'Access to justice means getting the outcome you want.',
        reality:
          'It concerns the ability to bring a matter to a body with authority to decide it. A decision against the person is a use of the right, not a denial of it.',
      },
      {
        claim: 'Access means going to court.',
        reality:
          'South Africa’s section 34 expressly contemplates another independent and impartial tribunal or forum, and Kenya’s Article 159(2)(c) directs that alternative forms of dispute resolution be promoted, including traditional mechanisms.',
      },
      {
        claim: 'If the courts are open, access is achieved.',
        reality:
          'Openness is one condition. Kenya’s Article 48 names fees and Article 159(2) names delay and procedural technicality, which are barriers that leave the doors formally open.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four constitutions, four different techniques for protecting the same thing.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A positive state duty, with a fee constraint — Kenya, Article 48.',
          'An individual right to have a dispute decided, before a court or another forum — South Africa, section 34.',
          'A prohibition binding the legislature — Brazil, Article 5º XXXV.',
          'A guaranteed route specifically against public authority — Germany, Article 19(4).',
        ],
      },
      {
        kind: 'paragraph',
        text: 'A system may have any one of these without the others, and the choice determines who the guarantee runs against — the state as service provider, the state as adversary, or the legislature.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle of a right to an effective remedy by a competent national tribunal for acts violating fundamental rights. Access is the operative half of that: a remedy that cannot be sought is not effective, whatever it provides.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What a person can obtain once they reach a forum is the subject of [effective remedy](/justice/effective-remedy). How states provide and pay for representation is covered in the defence cluster, and this page does not restate it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [effective remedy](/justice/effective-remedy), [equality before the law](/justice/equality-before-the-law), and [how defence is funded](/defence/how-defence-is-funded).',
      },
    ],
  },
  {
    slug: 'effective-remedy',
    title: 'Effective remedy',
    shortTitle: 'Effective remedy',
    question: 'When the state gets something wrong, what is a person actually entitled to?',
    summary:
      'A remedy is what a forum can give, and constitutions state it in concrete terms: release from unlawful detention, review of an official decision, written reasons, invalidity of inconsistent law — and, in Brazil, indemnity for a wrongful conviction.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'access-to-justice',
      'why-government-is-bound-by-law',
      'why-justice-systems-need-oversight',
      'reviewing-detention',
      'what-a-reviewing-court-can-do',
      'reviewing-an-emergency-declaration',
    ],
    relatedInstitutions: ['constitutional-court', 'ombuds-and-rights-institution'],
    sources: ['br-cf-1988', 'za-constitution', 'de-gg-rechtsstaat-articles', 'udhr', 'iccpr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['judicial-review', 'rule-of-law'],
    uncertainty: [
      'This page describes remedies stated in constitutional text. Whether a remedy is available on particular facts, and what a court would order, are questions of national law and procedure that are not described.',
      'The extensive body of law on damages against public authorities was not researched and is not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A right without a remedy is a description of how things ought to be. The remedy is the part that changes something: it is what the forum can actually do once it agrees the person was wronged.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains what remedies constitutions provide for. It is not legal advice, it states no entitlement on any facts, and it does not describe how to bring a claim.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Institutions make mistakes, and some of their mistakes are extremely costly to the person on the receiving end. A system that acknowledged this and provided nothing would be conceding that the error stands. Remedies are how a legal order absorbs its own failures without abandoning the claim to be lawful.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Release from unlawful detention',
            description:
              'South Africa’s section 35(2)(d): a detained person has the right to challenge the lawfulness of the detention in person before a court "and, if the detention is unlawful, to be released". The remedy is stated in the same breath as the right to challenge, which is what makes the challenge worth bringing.',
          },
          {
            term: 'Review of an official decision, and written reasons',
            description:
              'South Africa’s section 33(2) gives a person whose rights have been adversely affected by administrative action the right to written reasons, and section 33(3) requires legislation providing for review by a court or an independent and impartial tribunal. Reasons are a remedy in themselves: a decision that must be explained is a decision that can be contested.',
          },
          {
            term: 'Invalidity of inconsistent law',
            description:
              'South Africa’s section 2 provides that the Constitution is the supreme law and that law or conduct inconsistent with it is invalid. Where the wrong is the rule rather than its application, the remedy operates on the rule.',
          },
          {
            term: 'Compensation for judicial error',
            description:
              'Brazil’s Article 5º LXXV: the State shall indemnify the person convicted by judicial error, and also the person held beyond the term fixed in the sentence. Few constitutions state this so directly, and it is the clearest possible acknowledgement that a system can convict wrongly.',
          },
          {
            term: 'A guaranteed forum against public authority',
            description:
              'Germany’s Article 19(4) opens recourse to the courts where public authority violates a person’s rights. It supplies the route rather than the outcome, and the other remedies here are useless without one.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The Brazilian provision is worth pausing on',
        text: 'Article 5º LXXV places, in the constitution, the proposition that criminal justice sometimes convicts the wrong person and that the state owes something when it does. That is not an admission of institutional weakness. It is what distinguishes a system that treats its judgments as reliable-but-fallible from one that treats them as beyond question, and it belongs beside appeal and review rather than in opposition to them.',
      },
    ],
    misconceptions: [
      {
        claim: 'A remedy means compensation.',
        reality:
          'Most of the remedies here are not monetary: release, review, written reasons, invalidity of a rule. Brazil’s indemnity for judicial error is the exception rather than the pattern.',
      },
      {
        claim: 'If a right is in the constitution, a remedy follows automatically.',
        reality:
          'Not necessarily, which is why constitutions state remedies expressly. South Africa states release in the same subsection as the right to challenge detention, and requires legislation to give effect to administrative-justice rights.',
      },
      {
        claim: 'Providing remedies means the system does not trust its own decisions.',
        reality:
          'It means the system treats its decisions as capable of being wrong. Appeal, review and compensation are the mechanisms by which a legal order corrects itself, and their existence is a feature of lawful government rather than evidence against it.',
      },
      {
        claim: 'An effective remedy means the person gets what they asked for.',
        reality:
          'Effectiveness concerns whether the forum can address the wrong, not whether it agrees there was one. A claim properly heard and dismissed has been remedied in the sense the principle uses.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Remedies divide by what they operate on, and systems provide different combinations.',
      },
      {
        kind: 'list',
        items: [
          'On the person’s situation — release from unlawful detention.',
          'On the decision — review, and a duty to give reasons.',
          'On the rule — invalidity where inconsistent with the constitution.',
          'On the consequence — indemnity for judicial error, or for detention beyond sentence.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle of a right to an effective remedy by a competent national tribunal for acts violating fundamental rights granted by constitution or law, and the International Covenant on Civil and Political Rights carries fair-trial guarantees for states party to it. Both state standards; the constitutional provisions above are what supply a claim in a national court.',
        claim: 'fact',
        sources: ['udhr', 'iccpr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Remedies and respect for courts',
        text: 'Seeking a remedy — appealing, applying for review, claiming compensation — is participation in a legal order, not opposition to it. The mechanisms exist because the system provides them, and using them is using the system as designed.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [access to justice](/justice/access-to-justice), [judicial review](/glossary/judicial-review), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight). On what happens when a remedy exists and is evaded, see [what the Habeas Corpus Act 1679 actually did](/history/what-the-habeas-corpus-act-1679-actually-did).',
      },
    ],
  },
  {
    slug: 'procedural-fairness-and-its-many-names',
    title: 'Procedural fairness and its many names',
    shortTitle: 'Procedural fairness',
    question:
      'Is “due process” the same thing as a fair hearing, natural justice, or procedural fairness?',
    summary:
      'Not quite, and the differences are visible in constitutional text. Brazil constitutionalises “devido processo legal” — so the term is not only American — while Germany, South Africa and Kenya reach comparable ground under names that are not translations of it.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['what-is-due-process', 'limits-on-public-power', 'why-courts-must-be-respected'],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'br-cf-1988',
      'de-gg-rechtsstaat-articles',
      'za-constitution',
      'ke-constitution',
      'iccpr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['due-process', 'rule-of-law'],
    uncertainty: [
      'Four constitutions were read from primary text. This page compares what those texts say; it does not survey which systems use which term, and it does not describe the case law that gives each term its content.',
      '`/justice/what-is-due-process` owns the explanation of what due process requires. This page owns the comparative terminology question and does not restate that guide.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'English-language writing about justice systems tends to reach for "due process" as though it were the universal name for procedural protection. The reality is more interesting than either "it is universal" or "it is American".',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The term travelled; the bundle did not',
        text: 'Article 5º LIV of Brazil’s Constitution provides that no one shall be deprived of liberty or property "sem o devido processo legal" — a direct rendering of the phrase, in a constitution that is not American. So the term is not confined to one country. But Brazil pairs it immediately with Article 5º LV, assuring "o contraditório e ampla defesa" — the adversarial principle and full defence — which the American formula does not name. Meanwhile three other systems reach comparable ground under vocabulary that is not a translation of "due process" at all.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This is a comparative terminology page. It is not legal advice, it does not state what any system requires on particular facts, and it does not describe any country’s case law.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Terminology matters here more than usual because the words carry assumptions about what is guaranteed. Telling a reader that their system provides "due process" imports a body of American constitutional doctrine that may have no counterpart where they live — and telling them it does not may equally mislead, if their constitution uses the phrase.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Brazil — devido processo legal, plus what the phrase does not say',
            description:
              'Article 5º LIV states the guarantee against deprivation of liberty or property. Article 5º LV then names its components for both judicial and administrative proceedings: the contraditório — the right to know and answer what is said against you — and ampla defesa, full defence, "com os meios e recursos a ela inerentes", with the means and remedies inherent to it.',
          },
          {
            term: 'Germany — rechtliches Gehör',
            description:
              'Article 103(1): "Vor Gericht hat jedermann Anspruch auf rechtliches Gehör" — before a court, everyone is entitled to a hearing in accordance with law. The German guarantee is stated as a claim to be heard, and it is stated for courts specifically.',
          },
          {
            term: 'South Africa — procedurally fair administrative action, and a fair public hearing',
            description:
              'Section 33(1) requires administrative action to be "lawful, reasonable and procedurally fair" — three standards, of which fairness of procedure is one. Section 34 separately gives everyone the right to have a dispute decided in a "fair public hearing" before a court or another independent and impartial tribunal or forum.',
          },
          {
            term: 'Kenya — fair hearing',
            description:
              'Article 50(1) gives every person the right to have a dispute resolvable by law decided in a "fair and public hearing" before a court or another independent and impartial tribunal or body; Article 50(2) lists what fair trial includes for an accused person, beginning with the presumption of innocence.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Read side by side, the texts differ in scope as well as in name. Germany’s Article 103(1) addresses courts; South Africa’s section 33 addresses administrative action and section 34 addresses disputes; Brazil’s Article 5º LV addresses judicial and administrative proceedings together and extends to "os acusados em geral". A reader asking whether their system guarantees a hearing before an administrative decision will get different answers from these four texts.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What they share',
        text: 'Every one of them contains the same minimum: the person affected must be able to know the case and answer it before a body that decides. What differs is where that minimum applies, what else travels with it, and what the guarantee is called. Treating the names as synonyms hides the first two differences; treating the concept as untranslatable hides the shared minimum.',
      },
    ],
    misconceptions: [
      {
        claim: '“Due process” is an American term that other systems do not use.',
        reality:
          'Article 5º LIV of Brazil’s Constitution uses it in Portuguese translation: "devido processo legal". The claim is wrong on its own terms.',
      },
      {
        claim:
          'Due process, natural justice, procedural fairness and fair hearing are interchangeable.',
        reality:
          'They are not co-extensive. South Africa’s section 33 makes procedural fairness one of three standards for administrative action alongside lawfulness and reasonableness; Germany’s Article 103(1) is a claim to be heard before a court; Brazil’s LV adds the adversarial principle and full defence by name.',
      },
      {
        claim: 'If a system does not use the phrase, it lacks the protection.',
        reality:
          'Germany, South Africa and Kenya all guarantee that a person may know and answer the case before a decision. The absence of a phrase is a fact about vocabulary.',
      },
      {
        claim: 'These guarantees apply only to criminal trials.',
        reality:
          'Brazil’s LV covers judicial and administrative proceedings expressly; South Africa’s section 33 is about administrative action; section 34 and Kenya’s Article 50(1) cover any dispute resolvable by law.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three questions establish what a system actually guarantees, and the name answers none of them.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Does the guarantee apply to courts, to administrative decisions, or to both?',
          'Does it name its components — notice, the right to answer, reasons — or leave them to case law?',
          'Does it attach to the process, to the decision, or to both?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Brazil answers: both spheres; components named in LV; attaches to the process. South Africa answers: administrative action under section 33 and disputes under section 34; lawfulness, reasonableness and procedural fairness named, with written reasons in 33(2); attaches to the action and the decision.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The International Covenant on Civil and Political Rights carries fair-trial guarantees for states party to it, including the right to a competent, independent and impartial tribunal established by law. International instruments supply a common vocabulary for comparison; they do not settle what any state guarantees, which is why every statement above is attributed to a national text.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Why this site is careful here',
        text: 'A global educational platform that exported one country’s constitutional vocabulary to every system would be teaching readers to expect protections their own law may not contain, and to miss protections it does. Naming each system’s own term is more work and it is the only accurate option.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what due process is](/justice/what-is-due-process), [limits on public power](/justice/limits-on-public-power), and [Brazil](/countries/brazil).',
      },
    ],
  },
  {
    slug: 'why-courts-must-be-respected',
    title: 'Why courts must be respected',
    shortTitle: 'Why courts must be respected',
    question:
      'What does respecting a court actually require — and does it rule out disagreeing with one?',
    summary:
      'It requires complying with lawful judgments and using the legal order’s own procedures to challenge them. It does not require agreeing with a decision, refraining from criticism, or accepting that a court cannot be wrong — and the same constitutions that establish courts say so.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'appeal-and-the-rule-of-law',
      'effective-remedy',
      'why-government-is-bound-by-law',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'br-cf-1988',
      'za-constitution',
      'ke-constitution',
      'de-gg-rechtsstaat-articles',
      'udhr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['court', 'rule-of-law', 'judicial-independence'],
    uncertainty: [
      'This page describes what respect for courts consists of as an institutional matter. It makes no assessment of any court or any judgment, and it takes no position on any decided case.',
      'Contempt of court, and the limits national law places on comment about proceedings, differ substantially between systems and were not researched. Nothing here describes what any jurisdiction permits or prohibits.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The phrase is used to mean two very different things. One is a claim about conduct: that lawful judgments are complied with rather than ignored. The other is a claim about attitude: that courts should not be criticised. The first is a requirement of any legal order. The second is not, and the constitutions that establish courts do not ask for it.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'What respect requires',
            description:
              'That a lawful judgment is complied with while it stands; that disagreement is pursued through the procedures the legal system provides; that the institution is not attacked as a substitute for answering its reasoning.',
          },
          {
            term: 'What it does not require',
            description:
              'Agreement with the outcome. Silence about the reasoning. Acceptance that a court cannot be wrong. Abandoning an appeal, a review, a complaint or a constitutional challenge.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains an institutional relationship. It is not legal advice, it comments on no decided case or serving judge, and it does not describe what any jurisdiction treats as contempt.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A court’s authority is not physical. It decides, and something happens afterwards because institutions and people treat the decision as binding. Remove that and the decision is an opinion. This is why compliance with lawful judgments is structural rather than deferential: it is the mechanism by which adjudication does anything at all.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'But the same reasoning explains the limit. Courts are worth complying with because their decisions are reached through a process — hearing both sides, applying law, giving reasons — that makes them more reliable than the alternatives. A decision insulated from examination loses the property that justified compliance in the first place.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The constitutions provide the means of disagreement themselves',
        text: 'Every mechanism for challenging a judicial or official decision is created by the same legal order that creates the courts. Brazil forbids the law from excluding an injury or threat to a right from judicial appraisal, and separately provides that the State shall indemnify a person convicted by judicial error. South Africa gives a detained person the right to challenge the lawfulness of detention before a court and to be released if it is unlawful. Germany opens recourse to the courts against public authority. These are not loopholes in a system that would prefer obedience. They are the system.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Complying, and appealing',
            description:
              'These are compatible. A judgment binds while it stands, and appealing is how the legal order asks whether it should stand. A person who complies and appeals is doing exactly what the system provides for.',
          },
          {
            term: 'Criticising the reasoning',
            description:
              'Reasoned decisions exist to be read. A court that gives reasons is inviting examination of them — by higher courts, by other courts, by lawyers, by the public. Disagreeing with reasoning in public is ordinary legal and civic life.',
          },
          {
            term: 'Challenging the law rather than the judgment',
            description:
              'Where the problem is the rule, the remedy operates on the rule. South Africa’s section 2 makes law or conduct inconsistent with the Constitution invalid; Brazil’s Article 5º XXXVII forbids exceptional courts. Both are ways of contesting an outcome without contesting that courts decide.',
          },
          {
            term: 'Where it stops',
            description:
              'Refusing to comply with a lawful judgment, or attacking the institution to avoid answering its reasoning, is a different act from disagreeing with it. Those attack the mechanism that makes any decision — including a favourable one — worth anything.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Kenya states a related idea from inside the institution. Article 159(1) provides that judicial authority is derived from the people and vests in the courts; Article 159(2) then binds the courts, in exercising it, to principles including that justice shall be done to all irrespective of status and shall not be delayed. Authority derived from the people, exercised on stated conditions, is a claim about legitimacy rather than about deference.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil’s Article 5º LXXV is the plainest evidence that respect and infallibility are separate ideas: the State shall indemnify the person convicted by judicial error. A constitution that establishes courts, requires compliance with their judgments, and provides compensation when they convict wrongly is not describing an institution beyond question. It is describing one that is reliable enough to be obeyed and fallible enough to need correcting.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Respecting courts means never criticising a judgment.',
        reality:
          'Reasoned decisions are published so that they can be examined. Appellate courts overturn reasoning, lawyers argue it is wrong, and commentators say so publicly. None of that is disrespect; it is what a reasoned decision is for.',
      },
      {
        claim: 'Appealing a judgment shows disrespect for the court that gave it.',
        reality:
          'Appeal is provided by the legal system itself. Using a procedure the law creates is participation in the legal order, not defiance of it.',
      },
      {
        claim: 'If courts can be wrong, their judgments need not be obeyed.',
        reality:
          'The opposite follows. Because judgments can be wrong, systems provide appeal, review and — in Brazil’s case — indemnity for judicial error. Those mechanisms only function if the judgment binds while it stands.',
      },
      {
        claim: 'Courts are always right.',
        reality:
          'No source on this site supports that, and Brazil’s constitution contradicts it directly by providing compensation for wrongful conviction. What courts offer is a process more reliable than the alternatives, not a guarantee of correctness.',
      },
      {
        claim: 'Challenging government action in court is improper.',
        reality:
          'Germany’s Article 19(4) opens the courts precisely where public authority violates rights, and Brazil’s Article 5º XXXV forbids the law from closing them. Contesting official action in court is the arrangement working.',
      },
      {
        claim:
          'Respect for courts is the same as deference to the government that appointed the judges.',
        reality:
          'It is close to the opposite. Judicial independence exists so that a court can decide against whoever appointed it, and the courts-cluster material on this site sets out the arrangements that protect that.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What differs between systems is not whether disagreement is permitted but through which route.',
      },
      {
        kind: 'list',
        items: [
          'Appeal within the court hierarchy — available everywhere, with scope set by each system.',
          'Review of official action — South Africa’s section 33(3), Germany’s Article 19(4).',
          'Constitutional challenge to the rule itself — South Africa’s section 2.',
          'Compensation where the error has already caused harm — Brazil’s Article 5º LXXV.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'A reader in any of these systems has a lawful means of pressing a disagreement. Which one depends on whether the complaint is about the decision, the procedure, the rule, or the consequence.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle of a right to an effective remedy by a competent national tribunal and of a fair and public hearing by an independent and impartial tribunal. Both presuppose that decisions can be sought, tested and where necessary corrected — which is the same proposition this page makes about respect.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The formulation this page earns',
        text: 'Respect for courts is compatible with challenging decisions through the procedures the legal system itself provides. That is not a compromise between two positions. It is what the constitutional texts describe: institutions whose judgments bind, and which create the means of contesting them in the same document.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [appeal and the rule of law](/justice/appeal-and-the-rule-of-law), [why courts matter](/courts/why-courts-matter), and [why judicial independence matters](/courts/why-judicial-independence-matters).',
      },
    ],
  },
  {
    slug: 'appeal-and-the-rule-of-law',
    title: 'Appeal and the rule of law',
    shortTitle: 'Appeal and the rule of law',
    question: 'Why does a legal system build in a way of saying its own decisions were wrong?',
    summary:
      'Because a system that could not correct itself would have to claim it never errs. Appeal, review and compensation are how a legal order absorbs its own mistakes — and their existence is what makes its decisions worth relying on.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['why-courts-must-be-respected', 'effective-remedy', 'legal-certainty'],
    relatedInstitutions: ['constitutional-court'],
    sources: ['br-cf-1988', 'za-constitution', 'de-gg-rechtsstaat-articles', 'ke-constitution'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['appeal', 'rule-of-law', 'judicial-review'],
    uncertainty: [
      'What may be appealed, by whom and on what grounds is set by each system, and this page states no country’s appeal rules. `/courts/trial-and-appellate-courts` covers the structural question and this page does not restate it.',
      'This page concerns why correction mechanisms exist. It does not assess whether any system corrects error well.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Every legal system builds in machinery whose only purpose is to say that the system got something wrong. That is a strange thing for an institution to do, and it is worth asking why they all do it.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why correction mechanisms exist. It is not legal advice, it states no appeal rights, and it comments on no decided case.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The alternative is the claim that first-instance decisions are always correct, which no system makes. Once that claim is abandoned, a mechanism for correction follows necessarily — and the mechanism is what allows the system to insist on compliance in the meantime.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Correction is what licenses finality',
        text: 'A decision has to become final or nothing is ever resolved, and Brazil protects finality expressly by shielding res judicata from legislative impairment. But finality is only tolerable if there was a real opportunity to be wrong and be corrected first. Appeal and finality are not in tension; appeal is the price of finality.',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Correcting the decision',
            description:
              'Appeal within the court hierarchy. Scope varies sharply between systems, and `/courts/trial-and-appellate-courts` sets out why an appeal is neither universally a fresh trial nor universally confined to law.',
          },
          {
            term: 'Correcting the official act',
            description:
              'Review. South Africa’s section 33(3) requires legislation providing for review of administrative action by a court or independent tribunal; Germany’s Article 19(4) opens the courts where public authority violates rights.',
          },
          {
            term: 'Correcting the rule',
            description:
              'Constitutional review. South Africa’s section 2 makes law or conduct inconsistent with the Constitution invalid. Where the error is in the rule, correcting the individual decision would leave the problem in place.',
          },
          {
            term: 'Compensating where correction comes too late',
            description:
              'Brazil’s Article 5º LXXV: the State shall indemnify the person convicted by judicial error, and the person held beyond the term fixed in the sentence. Some errors cannot be undone, and the constitution says what is owed then.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Timeliness belongs here too, because a correction that arrives too late is not one. Brazil’s Article 5º LXXVIII guarantees reasonable duration of proceedings and the means guaranteeing the speed of their handling; Kenya’s Article 159(2)(b) makes it a guiding principle that justice shall not be delayed.',
        claim: 'fact',
        sources: ['br-cf-1988', 'ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'A high rate of successful appeals shows the system is failing.',
        reality:
          'This site publishes no such rates and draws no such inference. Appeals succeeding shows the correction mechanism operating; what it would mean about the system requires evidence about first-instance decisions that these sources do not provide.',
      },
      {
        claim: 'Appeals undermine the authority of courts.',
        reality:
          'Appellate courts are courts. A system correcting itself through its own hierarchy is exercising judicial authority, not eroding it.',
      },
      {
        claim: 'If a decision can be appealed, it need not be complied with.',
        reality:
          'A judgment binds while it stands. Compliance and appeal run together, which is what makes it possible to have both order and correction.',
      },
      {
        claim: 'Correction mechanisms exist because legal systems are unreliable.',
        reality:
          'They exist because the systems are reliable enough to be relied on and honest enough not to claim infallibility. Brazil writes compensation for judicial error into its constitution alongside the courts that may commit it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The four mechanisms address different objects, and a complaint has to be matched to the right one.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Wrong decision on the facts or the law → appeal.',
          'Unlawful or unfair official act → review.',
          'Unconstitutional rule → constitutional challenge.',
          'Harm already suffered and not reversible → compensation, where the system provides it.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a reader, the practical point is that disagreement has a route, and the route is part of the design. Nothing about pursuing it is adversarial to the legal order; the order built it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Self-correction is a feature of lawful government',
        text: 'A system with appeal, review, remedies and compensation is not a system admitting weakness. It is one that has decided its own decisions should be capable of being tested — and that is the same decision that makes them worth obeying.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why courts must be respected](/justice/why-courts-must-be-respected), [trial and appellate courts](/courts/trial-and-appellate-courts), and [appeal](/glossary/appeal).',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     Wave 14 — the participant the two-sided model leaves out.
     ------------------------------------------------------------------------ */
  {
    slug: 'victims-in-the-justice-process',
    title: 'Victims in the justice process',
    shortTitle: 'Victims in the process',
    question: 'Where does the victim of a crime stand in a criminal case?',
    summary:
      'Not as a party, in most systems — a public prosecution is brought by the state, not on the victim’s behalf. Some systems then create a route back in, and German law lets specified victims join the prosecution as an accessory prosecutor.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['why-public-prosecution-exists', 'access-to-justice', 'effective-remedy'],
    relatedInstitutions: ['prosecution-service'],
    sources: ['de-stpo-395-nebenklage', 'de-gvg-gerichtssprache', 'ke-constitution'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['prosecutor', 'fair-trial'],
    uncertainty: [
      'One participation mechanism is described in detail from primary text, and one constitutional mandate. Victim-support services, compensation schemes, protection measures and the rights that follow from joining a prosecution were not researched and are not described.',
      'This page describes where victims stand structurally. It is not guidance for anyone affected by a crime, and it describes no procedure for participating anywhere.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'In a criminal case the parties are the prosecution and the accused. The person harmed by the offence is, in most systems, neither — they are a witness to the case, and the case is not theirs. That is a structural fact about public prosecution rather than an oversight, and understanding it is what makes the mechanisms some systems build on top of it intelligible.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes where victims sit in the structure of a criminal process and one statutory route to participation. It is not advice or support for anyone affected by a crime, and it describes no procedure anywhere. Anyone in that position should contact the relevant authorities and support services in their own country.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Public prosecution exists precisely so that the response to crime does not depend on the resources, persistence or wishes of the person harmed. That is a genuine protection: it means a case can proceed where the victim cannot pursue it, and it removes the pressure that would otherwise fall on them to. The cost of the arrangement is that the person with the strongest interest in the outcome has no standing in the proceedings about it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the two-sided picture misleads here',
        text: 'Describing a criminal trial as the state against the accused is accurate about the parties and incomplete about the participants. It leaves the reader with no place to put the victim, which is why the common assumption — that the prosecutor is the victim’s lawyer — is so persistent. The prosecutor acts for the public interest, which frequently coincides with the victim’s and is not defined by it.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany builds a route in and defines it carefully. Section 395 of the Code of Criminal Procedure sets out who may join a public prosecution already brought, as a *Nebenkläger* — an accessory prosecutor. Subsection (1) lists offence groups whose victims may join, among them offences against sexual self-determination, attempted murder and manslaughter, bodily-injury offences including ill-treatment in office, and offences of trafficking, deprivation of liberty and coercion.',
        claim: 'fact',
        sources: ['de-stpo-395-nebenklage'],
      },
      {
        kind: 'paragraph',
        text: 'Two further categories follow. Subsection (2) extends the same power to persons whose children, parents, siblings, spouses or life partners were killed by an unlawful act, and to persons who brought about the raising of the public charge by an application for judicial decision. Subsection (3) allows joinder by a person injured by another unlawful act where this appears necessary for the protection of their interests for special reasons, in particular because of the grave consequences of the act.',
        claim: 'fact',
        sources: ['de-stpo-395-nebenklage'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'An enumerated list is a choice, not a limitation of imagination',
        text: 'The provision could have opened accessory prosecution to every victim of every offence. Instead it names offence groups, adds bereaved close relatives, and keeps a discretionary category for grave consequences elsewhere. That structure treats participation as something to be given where the harm is personal and severe, rather than as a general feature of being a complainant — and the third subsection exists so that the enumeration does not become the whole answer.',
      },
      {
        kind: 'paragraph',
        text: 'Timing is generous where the substance is narrow. Subsection (4) provides that joinder is permissible at any stage of the proceedings, and may occur after judgment for the purpose of lodging an appeal.',
        claim: 'fact',
        sources: ['de-stpo-395-nebenklage'],
      },
      {
        kind: 'paragraph',
        text: 'Participation once granted carries practical entitlements, and one of them shows how the mechanisms interlock. Section 187(4) of the Courts Constitution Act applies the interpreter and translator provision — including the entitlement to free engagement of an interpreter for the whole proceedings — correspondingly to persons entitled to join the public prosecution as a Nebenkläger. A route into the case brings the means of following it.',
        claim: 'fact',
        sources: ['de-gvg-gerichtssprache'],
      },
      {
        kind: 'paragraph',
        text: 'Other systems address victims by directing that the subject be legislated for rather than by creating a mechanism in the constitution itself. Kenya’s Article 50(9) provides that Parliament shall enact legislation providing for the protection, rights and welfare of victims of offences. Kenya’s Article 50(7) also lets a court allow an intermediary to assist a complainant — as well as an accused person — to communicate with the court.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'The prosecutor is the victim’s lawyer.',
        reality:
          'A public prosecution is brought in the public interest, not on the victim’s behalf. The interests frequently coincide; the prosecutor’s duty is not defined by them, and the victim is not the prosecutor’s client.',
      },
      {
        claim: 'The victim decides whether a case goes ahead.',
        reality:
          'That is what public prosecution was designed to avoid, so that a case does not depend on the victim’s resources or persistence and so that pressure does not fall on them. Systems vary in how much weight a victim’s wishes carry, but the decision is not theirs.',
      },
      {
        claim: 'Victims have no standing in a criminal case anywhere.',
        reality:
          'German law lets specified victims join a public prosecution as a Nebenkläger, at any stage of the proceedings and even after judgment for the purpose of appealing.',
      },
      {
        claim: 'Where victim participation exists, it is open to every complainant.',
        reality:
          'The German provision enumerates offence groups, adds bereaved close relatives and those who forced a prosecution, and keeps a discretionary category for grave consequences. It is a defined route rather than a general entitlement.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two techniques, at different levels of the legal order.',
      },
      {
        kind: 'list',
        items: [
          'A statutory route into the proceedings for defined categories of victim, available at any stage — Germany, StPO § 395.',
          'A constitutional direction to the legislature to provide for victims’ protection, rights and welfare — Kenya, Art. 50(9).',
          'A judicial discretion to allow an intermediary to assist a complainant to communicate with the court — Kenya, Art. 50(7).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'A narrow view of a wide subject',
        text: 'Support services, compensation schemes, protection from intimidation, information rights and the treatment of witnesses in court are all part of how systems deal with victims, and none was researched here. What this page describes is standing in the proceedings, which is one element of it.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Standing determines what a person can do when the system does something they disagree with. A witness who thinks a prosecution has gone wrong has no procedural route; a party has one. That is the practical difference the German mechanism creates, and it is why the question of who counts as a participant is not merely descriptive.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The interaction with fair-trial rights is real and is not a reason to dismiss either side. Participation by a victim adds a voice to proceedings whose subject is another person’s liberty, which is exactly why the systems that allow it define who may join and on what basis rather than opening it generally.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why public prosecution exists](/prosecution/why-public-prosecution-exists), [access to justice](/justice/access-to-justice), and [effective remedy](/justice/effective-remedy).',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     Wave 15 — integration.

     These two pages exist because the corpus had no page that reads across it.
     Neither concatenates existing articles: the first states what the shape of a
     justice system is NOT, using findings from six earlier waves as evidence, and
     the second describes the handoffs between institutions, which no page owned.
     ------------------------------------------------------------------------ */
  {
    slug: 'no-single-path-through-a-justice-system',
    title: 'There is no single path through a justice system',
    shortTitle: 'No single path',
    question: 'Does every case follow the same route from report to outcome?',
    summary:
      'No, and the familiar route is wrong at almost every step. Most matters leave before a court, most sentences are not custodial, and in several systems the prosecutor is legally responsible for the investigation rather than receiving a finished file.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-justice-institutions-work-together',
      'what-is-justice',
      'what-is-due-process',
    ],
    sources: [
      'de-stpo-160',
      'de-stgb-56-strafaussetzung',
      'ca-statcan-corrections',
      'ke-constitution',
      'uk-legal-services-act-2007',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['justice', 'jurisdiction'],
    uncertainty: [
      'This page assembles findings established elsewhere on this site, each from primary text. It introduces no new evidence and describes no system in full.',
      'The exceptions listed are examples of branching, not a taxonomy of every route a case may take. Systems contain routes that this corpus has not researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Accounts of criminal justice usually describe a line: an offence is reported, police investigate, a prosecutor charges, a jury decides, a prison follows. It is a serviceable picture of one branch of one kind of case in some systems. As a description of how justice systems work, almost every link in it is wrong somewhere.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why the process branches, using findings established elsewhere on this site. It is not legal advice, it does not describe what would happen in any case, and it is not a procedural code for any jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The linear picture is not merely incomplete. It teaches a reader to expect a court where there will be none, to treat an outcome without a conviction as a failure, and to assume that institutions in other countries do the same jobs under different names. Each of those is a specific error with consequences for how a person reads news about a case.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the line is so persistent',
        text: 'It is the shape of the cases that get reported. A matter that ends with no charge produces no hearing, no verdict and no story, so the visible cases are systematically the ones that travelled furthest. The line is not a myth invented by anyone — it is what you get if you generalise from what you can see.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Take the steps in order. First, that police investigate and then hand a file to a prosecutor. Section 160 of the German Code of Criminal Procedure places responsibility for investigating on the public prosecution office, which must ascertain not only incriminating but also exonerating circumstances. The prosecutor is not the recipient of an investigation there; the prosecutor is legally responsible for it.',
        claim: 'fact',
        sources: ['de-stpo-160'],
      },
      {
        kind: 'paragraph',
        text: 'Second, that a charge follows an investigation. It frequently does not. A matter may close without a suspect, close without sufficient evidence, be discontinued on a basis the law provides, be diverted, or be dealt with by an administrative penalty. Whether the prosecutor even has the choice differs: some systems make prosecution a duty subject to statutory exceptions, others a discretion structured by tests.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Third, that a court means a jury. Juries do not exist in most systems described on this site, and where they do they sit in a minority of cases. Professional judges, lay judges and mixed panels all appear among functioning systems, which is why "trial" is a word covering unlike things.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Fourth, that conviction means custody. German law directs that on a custodial sentence of not more than one year the court suspends execution on probation where the statutory expectation is made out, and permits suspension up to two years where special circumstances are present. A custodial term can be imposed and never executed.',
        claim: 'fact',
        sources: ['de-stgb-56-strafaussetzung'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the people in custody are not all serving sentences',
        text: 'Statistics Canada records that in fiscal 2023/2024 the average daily count of adults in provincial and territorial custody was 25,349.8, of which 19,334.5 were on remand and 5,895.1 were serving a sentence — provincial and territorial custody only, excluding federal custody for sentences of two years or more, averaged over the year rather than a snapshot, and describing none of the thirteen jurisdictions individually. Even the end of the line is not what the line implies.',
      },
      {
        kind: 'paragraph',
        text: 'Fifth, that the criminal route is the route. Kenya’s Article 159(2) directs that in exercising judicial authority the courts shall be guided by principles including that alternative forms of dispute resolution — reconciliation, mediation, arbitration and traditional dispute resolution mechanisms — shall be promoted. England and Wales excludes acting as a mediator from "legal activity" altogether under the Legal Services Act, placing it outside the regulated category rather than inside it.',
        claim: 'fact',
        sources: ['ke-constitution', 'uk-legal-services-act-2007'],
      },
      {
        kind: 'paragraph',
        text: 'Sixth, that the process ends. Appeal, review and retrial send decided matters back to courts, and in systems with an execution court, decisions taken during a sentence are judicial too. The shape is not a line with an end but a graph with loops, and the loops are the mechanisms by which a legal order corrects itself.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'A case that ends without a charge is a case the system failed on.',
        reality:
          'Ending is one of the outcomes the arrangement provides for. A system that charged everything reported would be applying no standard at the point where a standard matters most.',
      },
      {
        claim:
          'The prosecutor receives the police investigation and decides what to do with it.',
        reality:
          'In Germany the public prosecution office is responsible for investigating and must ascertain exonerating as well as incriminating circumstances. Where investigative responsibility sits is a question of law, and it is answered differently.',
      },
      {
        claim: 'A criminal conviction means a prison sentence.',
        reality:
          'German law requires suspension of execution on a custodial sentence of not more than one year where the statutory expectation is made out, and permits it up to two years on special circumstances. A term can be fixed and never carried out.',
      },
      {
        claim: 'Courts are where disputes go.',
        reality:
          'Kenya’s constitution directs courts to promote reconciliation, mediation, arbitration and traditional dispute resolution as guiding principles of judicial authority. Adjudication is one route among several that a system may provide.',
      },
      {
        claim: 'Once a court has decided, the case is over.',
        reality:
          'Appeal, review and retrial return matters to courts, and where an execution court exists, decisions taken while a sentence runs are judicial. The loops are how a legal order corrects itself.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six points where the familiar line breaks, and where this site sets out the evidence.',
      },
      {
        kind: 'list',
        items: [
          'Who investigates, and under whose legal responsibility — Germany, StPO § 160.',
          'Whether charging is a duty or a discretion, and what test applies.',
          'What a court is: professional judges, lay judges, mixed panels, juries.',
          'Whether a custodial term is executed at all — Germany, StGB § 56.',
          'Whether the matter belongs in a criminal court — Kenya, Art. 159(2).',
          'Whether the decision is final, or returns on appeal, review or during execution.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Examples of branching, not a taxonomy',
        text: 'These six are the branches this corpus can evidence. They are not a complete account of the routes a matter may take in any system, and a system will contain routes nobody here has researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The branches matter to a reader because they determine which safeguards apply. A matter resolved by an administrative penalty has not passed through the protections that attach to a criminal trial, and a person diverted from prosecution has not been convicted of anything. Knowing which route a matter took is how you know what standard it was held to.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also disciplines comparison. Two systems that appear to reach different outcomes may be routing the same conduct through different parts of their arrangements, and a comparison that assumed a single path would attribute to severity what is actually a difference in classification.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how a justice system works](/justice-system), [how justice institutions work together](/justice/how-justice-institutions-work-together), and [what is due process](/justice/what-is-due-process).',
      },
    ],
  },
  {
    slug: 'how-justice-institutions-work-together',
    title: 'How justice institutions work together',
    shortTitle: 'How institutions connect',
    question: 'What actually passes between the institutions in a justice system?',
    summary:
      'A case, a file and a person — and not the authority to decide. The handoffs are designed so that each body receives the work without inheriting the powers of the one before it, which is what makes the separations more than an org chart.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'no-single-path-through-a-justice-system',
      'why-justice-systems-need-oversight',
      'what-is-justice',
    ],
    relatedInstitutions: ['prosecution-service', 'correctional-service'],
    sources: [
      'de-stpo-160',
      'de-stpo-147-akteneinsicht',
      'br-lep-1984',
      'ke-constitution',
      'mandela-rules',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['accountability', 'oversight', 'jurisdiction'],
    uncertainty: [
      'This page describes the structure of handoffs using provisions established elsewhere on this site. It describes no country’s process end to end and introduces no new evidence.',
      'How information actually moves between institutions — case-management systems, records, timeliness — was not researched and is not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A justice system is a set of institutions that pass work to one another. What passes is concrete: a case, the material gathered about it, and frequently a person. What does not pass is the authority to decide, and that is the design rather than an omission.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how institutions connect and what the connections do not transfer. It is not a description of any country’s process, it is not legal advice, and it does not describe how to interact with any of these bodies.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Separation of function is easy to state and easy to hollow out. If a body could investigate, decide to prosecute and adjudicate, dividing it into three departments would change nothing. What makes the separation real is that each institution receives the work under its own legal authority, applies its own test, and cannot exercise the powers of the one before it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The handoff is where a system is strongest and most fragile',
        text: 'Each transfer is an opportunity for a fresh judgment by somebody with a different responsibility — which is the point. It is also where material can be lost, where delay accumulates, and where each body can assume another has checked something. Systems that take the transfers seriously write down what must be handed over rather than leaving it to practice.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Start with the first transfer, and notice that in some systems there is not one. Section 160 of the German Code of Criminal Procedure places responsibility for investigating on the public prosecution office and requires it to ascertain exonerating as well as incriminating circumstances. Where the law is drafted that way, the prosecutor did not receive the investigation — the prosecutor is answerable for it.',
        claim: 'fact',
        sources: ['de-stpo-160'],
      },
      {
        kind: 'paragraph',
        text: 'The second transfer is the file, and it is the one that is regulated most explicitly. German law grants defence counsel access to the files and to officially held evidence, permits refusal where access would endanger an ongoing investigation, and then requires access anyway once defined stages are reached. That is a handoff with a condition and a deadline attached, rather than a matter of professional cooperation.',
        claim: 'fact',
        sources: ['de-stpo-147-akteneinsicht'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What is withheld is as structural as what is passed',
        text: 'A rule that permits refusal at one stage and compels disclosure at another is doing two jobs at once: protecting an investigation that is still live, and guaranteeing that the protection expires. A system with only the first half would have discretion; a system with only the second would have no investigations. The interesting part of a handoff is usually its conditions.',
      },
      {
        kind: 'paragraph',
        text: 'The third transfer is to adjudication, and here the design is that almost nothing transfers except the case itself. The court receives the matter and applies its own standard; it does not inherit the prosecutor’s view of it, and the prosecutor’s decision that a case should be brought establishes nothing about whether it is proved. This is why the presumption of innocence is not in tension with a charging decision — the two answer different questions.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The fourth transfer is to execution, and Brazil shows how many bodies can be involved. Article 61 of the Lei de Execução Penal lists the organs of penal execution, and they include the Juízo da Execução, the Ministério Público, the Conselho Penitenciário and the penitentiary departments. A sentence does not pass from a court to a prison; it passes into an arrangement with a court still inside it.',
        claim: 'fact',
        sources: ['br-lep-1984'],
      },
      {
        kind: 'paragraph',
        text: 'Running alongside all of these is a set of bodies that receive nothing and decide nothing about any case. Kenya’s Judicial Service Commission promotes and facilitates the independence and accountability of the judiciary and the administration of justice, appoints and disciplines judicial officers and staff, and advises on efficiency — none of which is deciding a case. The international minimum standards for detention require inspection by a body independent of the prison administration, for the same reason: examining how an institution used its powers is a different function from exercising them.',
        claim: 'fact',
        sources: ['ke-constitution', 'mandela-rules'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Oversight is not a further stage',
        text: 'An inspectorate, a commission or a complaints body sits beside the process rather than after it. It does not overturn outcomes and is not an additional level of appeal — which is why a person seeking to change a decision needs the review mechanisms, and a person concerned about how an institution behaved needs the oversight ones. Sending a question to the wrong one is one of the more common practical mistakes about justice systems.',
      },
    ],
    misconceptions: [
      {
        claim: 'Each institution hands the next one its conclusions.',
        reality:
          'It hands over the case and, subject to rules, the material. The next body applies its own test under its own authority. A prosecutor’s decision that a case should be brought establishes nothing about whether it is proved.',
      },
      {
        claim: 'The police investigation is always complete before a prosecutor is involved.',
        reality:
          'Section 160 of the German code places responsibility for investigating on the public prosecution office, including ascertaining exonerating circumstances. Where investigative responsibility sits is a question of law and it varies.',
      },
      {
        claim: 'Once a sentence is passed, the courts are finished with the case.',
        reality:
          'Brazil’s execution statute lists the Juízo da Execução among the organs of penal execution, alongside the prosecution service, a penitentiary council and the penitentiary departments.',
      },
      {
        claim: 'An oversight body can overturn a decision you disagree with.',
        reality:
          'Oversight examines how institutions used their powers. Changing an outcome is what appeal and review are for, and confusing the two sends a question to a body with no power to answer it.',
      },
      {
        claim: 'Institutions cooperating closely is a sign the system is working well.',
        reality:
          'The separations exist so that each body forms its own judgment. Close cooperation is necessary for the work to move at all, and it is also the direction in which the separations erode.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three questions to ask about any handoff in any system.',
      },
      {
        kind: 'list',
        items: [
          'What passes — the case, the material, the person, or all three?',
          'What is withheld, on what condition, and when does the condition expire?',
          'What authority does the receiving body exercise, and whose test does it apply?',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Structure, not practice',
        text: 'Everything here describes how the transfers are constituted in law. How reliably material actually moves, how long it takes, and what is lost on the way are empirical questions this corpus has not researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The handoffs are where a person’s rights are most exposed, because responsibility can appear to sit with whoever had the case last. Rules that name what must be disclosed, and when, are how a system stops a right from falling into a gap between two institutions.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'They also determine where to direct a question. Which body holds a matter now, and which held it when something went wrong, are different questions with different answers — and for anything concerning conditions in a closed institution, the international standards treat independent inspection as the mechanism precisely because the people affected cannot readily be heard.',
        claim: 'fact',
        sources: ['mandela-rules'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how a justice system works](/justice-system), [there is no single path](/justice/no-single-path-through-a-justice-system), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     Wave 19 — the review layer, in /justice.
     ------------------------------------------------------------------------ */
  {
    slug: 'constitutional-review',
    title: 'Constitutional review',
    shortTitle: 'Constitutional review',
    question: 'Who decides whether a law is constitutional?',
    summary:
      'Four different arrangements in three constitutions — and one that answers "nobody". The Dutch Constitution provides that the constitutionality of Acts of Parliament shall not be reviewed by the courts, which any general account of the subject has to survive.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'appeal-and-judicial-review-are-different',
      'limits-on-public-power',
      'what-is-the-rule-of-law',
      'reviewing-an-emergency-declaration',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: ['de-grundgesetz', 'fr-constitution-1958', 'nl-constitution', 'es-constitution'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['judicial-review', 'rule-of-law', 'legal-certainty'],
    uncertainty: [
      'Four systems are described from primary constitutional text. How any of these mechanisms operates in practice, how often, and with what results were not researched.',
      'This page describes who may raise a constitutional question and when. It does not describe admissibility criteria, time limits or procedure in any system.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A constitution that binds the legislature raises an obvious question: who says when the legislature has broken it? Systems answer differently on four independent axes — which body decides, whether a live case is needed, who may raise it, and whether the question comes before or after the law takes effect. The combinations are not variations on one model.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes constitutional arrangements for reviewing legislation. It is not legal advice, it names no procedure or time limit, and it ranks no system.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A constitution that no body can enforce against the legislature is a statement of intent. But a court that can strike down statutes is an unelected body overruling an elected one, which is a real objection rather than a rhetorical one. Every arrangement below is a position on that tension, and the differences between them are attempts to have the enforcement without the whole of the objection.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which is why the axes matter more than the label',
        text: 'Requiring a live case narrows what a court can reach. Requiring referral from another court adds a filter. Letting only political actors initiate keeps the question inside the elected branches. Reviewing before promulgation avoids disturbing anything already relied on. Each is a way of limiting the power without abolishing it, and a system picks a combination rather than a model.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany allows the question to be asked in the abstract. Article 94(1) no. 2 of the Basic Law gives the Federal Constitutional Court jurisdiction in the event of disagreements or doubts concerning the formal or substantive compatibility of federal or Land law with the Basic Law — on application of the Federal Government, a Land government, **or one fourth of the Members of the Bundestag**. No case, no litigant, no injury: a political minority may put the question directly.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'It also allows the question to arrive from a live case, and compels it. Article 100(1) provides that if a court concludes that a law on whose validity its decision depends is unconstitutional, the proceedings shall be stayed and a decision obtained from the Federal Constitutional Court. The ordinary court may not resolve the point itself.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'And it allows the individual in. Article 94(1) no. 4a gives the Court jurisdiction over constitutional complaints, which may be filed by *any person* alleging that one of their basic rights, or one of the rights under the listed articles, has been infringed by public authority. Article 93(5) permits the governing statute to require that all other legal remedies be exhausted first, and to provide a separate proceeding deciding whether a complaint is accepted at all.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A numbering correction worth carrying',
        text: 'Most sources cite Article 93 for the jurisdiction of the Federal Constitutional Court. In the current text, Article 93 is its composition and Article 94 its jurisdiction. The articles were swapped, and this page cites the text as it now stands.',
      },
      {
        kind: 'paragraph',
        text: 'France places its main review **before** the law exists. Article 61 requires organic laws, referendum propositions under Article 11 and the rules of the parliamentary assemblies to be submitted to the Conseil constitutionnel before promulgation or entry into application; ordinary laws *may* be referred before promulgation by the President, the Prime Minister, the President of either assembly, or sixty deputies or sixty senators. The Council rules within a month, or eight days in urgency, and referral suspends promulgation.',
        claim: 'fact',
        sources: ['fr-constitution-1958'],
      },
      {
        kind: 'paragraph',
        text: 'Since Article 61-1 it also reviews afterwards, but only through a filter. Where, in the course of proceedings before a court, it is argued that a legislative provision infringes the rights and freedoms the Constitution guarantees, the Council may be seised **on referral from the Conseil d’État or the Cour de cassation**, which rules within a determined period. The litigant raises the point; the apex courts decide whether it travels.',
        claim: 'fact',
        sources: ['fr-constitution-1958'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The two French routes produce different consequences',
        text: 'Article 62 makes them different remedies as well as different procedures. A provision condemned before promulgation may not be promulgated or applied. One condemned on a referred question is abrogated from the publication of the decision or a later date the decision fixes — and the Council determines the conditions and limits within which effects already produced may be reopened. Timing is not a formality here; it is the substance of what the reader gets.',
      },
      {
        kind: 'paragraph',
        text: 'Spain sequences the individual route rather than opening it directly. Article 53.2 provides that any citizen may seek protection of the rights in Article 14 and Section 1 of Chapter 2 before the **ordinary courts**, by a procedure based on the principles of *preferencia y sumariedad* — preference and summariness, and *where appropriate* thereafter through the recurso de amparo before the Constitutional Court.',
        claim: 'fact',
        sources: ['es-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Article 120 of the Dutch Constitution provides that "the constitutionality of Acts of Parliament and treaties shall not be reviewed by the courts". Not a narrow jurisdiction, not a demanding threshold — an express exclusion, in the constitution, of the power the other three systems are busy allocating. Any general claim that rule-of-law systems provide judicial review of legislation is refuted by a system already documented on this platform.',
      },
      {
        kind: 'paragraph',
        text: 'That is not an absence of constitutional constraint. It is a decision about who enforces it — a question a constitution is entitled to answer differently, and one on which the systems here plainly disagree.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Every constitutional democracy lets courts strike down unconstitutional laws.',
        reality:
          'Article 120 of the Dutch Constitution provides that the constitutionality of Acts of Parliament and treaties shall not be reviewed by the courts.',
      },
      {
        claim: 'Constitutional review requires someone to have been harmed by the law.',
        reality:
          'Not in Germany or France. The German Basic Law lets the Federal Government, a Land government or one quarter of the Bundestag put the question directly, and France reviews certain laws before promulgation, when nobody can yet have been affected.',
      },
      {
        claim:
          'An individual can always take a constitutional question to a constitutional court.',
        reality:
          'Germany permits any person to file a constitutional complaint, subject to a possible exhaustion requirement and an acceptance procedure. France routes the question through the Conseil d’État or the Cour de cassation. Spain requires the ordinary courts first.',
      },
      {
        claim: 'A court that thinks a statute is unconstitutional will decline to apply it.',
        reality:
          'German Article 100(1) requires it to stay the proceedings and obtain a decision from the Federal Constitutional Court instead.',
      },
      {
        claim: 'Striking down a law has the same effect however the question arrived.',
        reality:
          'French Article 62 gives one effect for provisions condemned before promulgation and another for those condemned on a referred question, with the Council controlling how far back the consequences reach.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four axes, and the systems combine them differently.',
      },
      {
        kind: 'list',
        items: [
          'Abstract, on political application: Federal Government, a Land government, or one quarter of the Bundestag — Germany, Art. 94(1) no. 2.',
          'Concrete, by compulsory referral from the deciding court — Germany, Art. 100(1).',
          'Individual complaint by any person, exhaustion permitted — Germany, Arts. 94(1) no. 4a and 93(5).',
          'Before promulgation, mandatory for some instruments and optional for laws — France, Art. 61.',
          'After promulgation, but only on referral from an apex court — France, Art. 61-1.',
          'Ordinary courts first, amparo where appropriate — Spain, Art. 53.2.',
          'Not at all, by constitutional exclusion — the Netherlands, Art. 120.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not a taxonomy of the world',
        text: 'These labels describe what these four constitutions provide. Systems combine the axes in ways none of them illustrates, and several systems in this corpus were not researched for this page at all.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Who may raise a constitutional question determines whose complaints get answered. A system where only political actors may initiate protects minorities in parliament; one with an individual complaint protects people with no political route at all. Neither follows from having a constitution.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The exhaustion and filtering rules are not obstacles bolted on afterwards. They are what allows a constitutional court to exist without becoming a further tier of ordinary appeal — which is the same reasoning that keeps constitutional review and appeal apart as functions.',
        claim: 'fact',
        sources: ['de-grundgesetz', 'es-constitution'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [appeal and judicial review are different](/courts/appeal-and-judicial-review-are-different), [limits on public power](/justice/limits-on-public-power), and [the constitutional court](/institutions/constitutional-court).',
      },
    ],
  },
  {
    slug: 'reviewing-detention',
    title: 'Reviewing detention',
    shortTitle: 'Reviewing detention',
    question: 'What can a court do about someone being held?',
    summary:
      'More systems protect against unlawful detention than use the words "habeas corpus". Brazil names it in the constitution and makes the action free; South Africa gives the same protection without the name; France routes it through the judicial authority as guardian of individual liberty.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'constitutional-review',
      'effective-remedy',
      'what-remand-detention-is',
      'detention-under-emergency-powers',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: [
      'br-cf-1988',
      'za-constitution',
      'fr-constitution-1958',
      'uk-habeas-corpus-act-1679',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['due-process', 'jurisdiction', 'accountability'],
    uncertainty: [
      'Four systems are described from primary text. Grounds for detention, time limits, and the procedure for challenging it in any system were not researched and are not described.',
      'Immigration detention, mental-health detention and detention under emergency powers each raise distinct questions this page does not address.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Detention is the one exercise of public power whose subject cannot walk away from it to complain. Every other decision leaves the affected person free to seek advice, gather documents and choose a forum; this one does not. That asymmetry is why systems build a route to a court that works quickly and can order the one thing that matters — release.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes constitutional protections against unlawful detention in four systems. It names no procedure, no form, no time limit and no route, it cannot indicate whether any detention is lawful, and it is not legal advice. Anyone dealing with a real detention needs a lawyer in that jurisdiction immediately.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The protection has to be fast and it has to be cheap, and those two requirements do most of the work in shaping it. A remedy that takes months is no remedy for someone held unlawfully today, and one that costs money is no remedy for someone whose ability to earn or arrange anything has just been removed.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the English name misleads',
        text: '"Habeas corpus" is a specific writ from a specific tradition, and English-language accounts use it as a generic label for judicial control of detention. Two of the systems on this page protect the same interest without ever using the phrase. Reading its absence as an absence of protection would get all three wrong.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Brazil names the remedy in the constitution and then removes the barrier to using it. Article 5º LXVIII provides for habeas corpus, and Article 5º LXXVII makes actions of habeas corpus and habeas data free of charge.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Free of charge is the operative half',
        text: 'A remedy against unlawful detention that carries a fee is a remedy conditioned on the resources of a person the state has just deprived of the ability to arrange anything. Making the action free is not generosity; it is the difference between a right and a right for people who can pay. Brazil pairs it with a broader guarantee — Article 5º XXXV, that the law shall not exclude from judicial appreciation any injury or threat to a right.',
      },
      {
        kind: 'paragraph',
        text: 'South Africa gives the same protection and never uses the phrase. Section 35(2)(d) lets anyone who is detained appear in person before a court to contest whether the detention is lawful, and be released if it is not — and it says the right belongs to everyone detained, "including every sentenced prisoner". Two things sit in the provision rather than in procedure: the appearance in person, and release as the remedy.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'France places the protection in an institution rather than in a named action. Article 66 of the Constitution makes the judicial authority the guardian of individual liberty. The guarantee runs through which branch controls detention, rather than through a remedy a person invokes.',
        claim: 'fact',
        sources: ['fr-constitution-1958'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Three techniques for one protection',
        text: 'A named action the person brings (Brazil). A stated right to be heard and released (South Africa). An allocation of guardianship to a branch (France). All three answer the question "who stops unlawful detention", and only one of them produces a phrase an English speaker would recognise.',
      },
      {
        kind: 'paragraph',
        text: 'The historical record warns against the other error too. The Habeas Corpus Act 1679 did not create habeas corpus: its own recital describes officers evading writs already directed to them, contrary to their duty and the known laws of the land, leaving people who were bailable by law long detained. The Act attached a three-day deadline to a remedy that already existed.',
        claim: 'fact',
        sources: ['uk-habeas-corpus-act-1679'],
      },
      {
        kind: 'paragraph',
        text: 'Which is the more useful lesson than the name. What made the remedy work was not its existence but a consequence for delay — and that is the question to ask of any detention-review mechanism, whatever it is called.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Habeas corpus is the universal remedy against unlawful detention.',
        reality:
          'It is not universal. It is one tradition’s name for one mechanism: South Africa gives a right to challenge detention in person and be released without ever using the phrase, and France allocates guardianship of individual liberty to the judicial authority instead.',
      },
      {
        claim: 'A system without habeas corpus has no protection against unlawful detention.',
        reality:
          'Two of the four systems described here protect it by other means. The absence of a phrase is not the absence of a mechanism.',
      },
      {
        claim: 'Reviewing detention is a kind of appeal.',
        reality:
          'It asks whether the person may lawfully be held now, not whether an earlier decision was correct. South Africa states the remedy in the right itself — release if the detention is unlawful.',
      },
      {
        claim: 'Only people awaiting trial can challenge their detention.',
        reality:
          'South Africa’s section 35(2) applies to everyone who is detained, "including every sentenced prisoner".',
      },
      {
        claim: 'The Habeas Corpus Act 1679 created the remedy.',
        reality:
          'Its recital describes writs already being directed to officers and evaded. What the Act added was a three-day deadline.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four systems, three techniques, one protection.',
      },
      {
        kind: 'list',
        items: [
          'A constitutionally named action, free of charge — Brazil, Art. 5º LXVIII with LXXVII.',
          'A general bar on excluding injury or threat to a right from judicial appreciation — Brazil, Art. 5º XXXV.',
          'A right to challenge lawfulness in person and be released, extending to sentenced prisoners — South Africa, s 35(2)(d).',
          'Guardianship of individual liberty allocated to the judicial authority — France, Art. 66.',
          'A statutory deadline attached to an existing writ — England and Wales, Habeas Corpus Act 1679.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not researched here',
        text: 'The grounds on which detention may be ordered, how long it may last, and how any of these mechanisms is invoked were not researched. Immigration, mental-health and emergency detention each have their own law and are not described.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The features that make a detention remedy real are visible in the provisions themselves: speed, cost, who may bring it, and whether the court can order release rather than merely declare something. A mechanism missing any of those is weaker in a way the name will not reveal.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Extending the right to sentenced prisoners is the least obvious and most telling feature. It means lawful conviction does not exhaust the question of whether this detention, now, is lawful — which is the difference between reviewing a decision and reviewing a state of affairs.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what remand detention is](/corrections/what-remand-detention-is), [effective remedy](/justice/effective-remedy), and [what the Habeas Corpus Act 1679 actually did](/history/what-the-habeas-corpus-act-1679-actually-did).',
      },
    ],
  },
  {
    slug: 'when-a-procedural-error-changes-the-outcome',
    title: 'When a procedural error changes the outcome',
    shortTitle: 'Procedural error',
    question: 'Does breaking a rule mean the decision is void?',
    summary:
      'Usually not. Legal systems distinguish between a rule that was broken and a decision that rests on the breach — and they sometimes say so in the statute that creates the duty. German law calls the test "beruhe"; two English statutes state expressly that breach does not invalidate anything.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['what-a-reviewing-court-can-do', 'cassation-review', 'effective-remedy'],
    sources: [
      'de-stpo-revision',
      'uk-sentencing-act-2020-reports-guidelines',
      'uk-fsr-act-2021',
      'iccpr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['due-process', 'appeal', 'legal-certainty'],
    uncertainty: [
      'Three systems are described from primary text — Germany and, for two separate statutes, England and Wales. Whether any particular error would meet any of these tests is a question about a real case, and this page cannot answer it.',
      'How often reviewing courts find that a judgment rests on a violation was not researched and is not stated.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A procedural rule was broken. It does not follow that the decision falls. Between the breach and the remedy sits a question every system has to answer somehow: did this breach make a difference? The answer is rarely automatic in either direction, and the interesting part is that legislatures sometimes settle it in the same statute that creates the duty.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes how three statutes state the relationship between a procedural breach and the validity of a decision. It is not legal advice, it does not indicate whether any error is or is not material, and nothing here is a basis for deciding anything about a real case. It names no route, no ground and no procedure for raising an error, and it is not a guide to doing so.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Two failures are available and systems have to steer between them. If every breach voided the decision, procedure would become a lottery in which the most careful party is the one that finds the smallest slip. If no breach ever did, the rules would be advice. The materiality question is where a system decides how much its own procedure is worth.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The recurring shape',
        text: 'A statute creates a duty; a later subsection says what happens when the duty is not met; and the answer is frequently "less than you would expect". Reading only the duty gives the wrong picture of the law. This page exists because the second half is the part that is almost never quoted.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'German criminal procedure puts the test in a single word. StPO § 337(1) provides that a Revision "kann nur darauf gestützt werden, daß das Urteil auf einer Verletzung des Gesetzes beruhe" — it may be based only on the judgment resting on a violation of the law. Section 337(2) defines the violation: the law is violated where a legal norm was not applied or not correctly applied.',
        claim: 'fact',
        sources: ['de-stpo-revision'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why "beruhe" is the load-bearing word',
        text: 'It requires the judgment to rest on the violation, not merely to be accompanied by one. A breach that occurred alongside a correct outcome is a breach the provision does not reach. That single verb does more work in German appellate practice than any list of grounds could.',
      },
      {
        kind: 'paragraph',
        text: 'The same statute then names the exceptions. StPO § 338, headed "Absolute Revisionsgründe", provides that a judgment "ist stets als auf einer Verletzung des Gesetzes beruhend anzusehen" — is always to be regarded as resting on a violation of the law — in an enumerated list of cases.',
        claim: 'fact',
        sources: ['de-stpo-revision'],
      },
      {
        kind: 'list',
        items: [
          'The deciding court was not properly constituted (no. 1, subject to the detailed conditions the provision sets out).',
          'A judge or lay judge participated who was excluded from judicial office by operation of law (no. 2).',
          'A judge participated after a challenge for fear of bias had been declared well founded, or wrongly rejected (no. 3).',
          'The court wrongly assumed its jurisdiction (no. 4).',
          'The main hearing took place in the absence of the prosecution or of a person whose presence the law prescribes (no. 5).',
          'The provisions on the publicity of proceedings were violated at the oral hearing on which the judgment issued (no. 6).',
          'The judgment contains no grounds, or they were not placed on the file within the period arising from § 275(1) (no. 7).',
        ],
      },

      {
        kind: 'callout',
        variant: 'note',
        title: 'What the list is doing',
        text: 'These are not errors the legislature thought were worse. They are errors where asking whether the outcome would have differed is not a question that can be answered — an improperly constituted court, a judge who should not have sat, a hearing held in secret. The presumption exists because the counterfactual does not.',
      },
      {
        kind: 'paragraph',
        text: 'England and Wales supplies the same structure in the other direction, twice, in statutes about very different things. The Sentencing Act 2020 s. 30(2) requires a court to obtain and consider a pre-sentence report before forming certain opinions about an offender aged 18 or over, unless in the circumstances of the case it considers that unnecessary. Section 30(4) then provides that where a court does not obtain and consider such a report, "no custodial sentence or community sentence is invalidated by the fact that it did not do so".',
        claim: 'fact',
        sources: ['uk-sentencing-act-2020-reports-guidelines'],
      },
      {
        kind: 'paragraph',
        text: 'The Forensic Science Regulator Act 2021 does the same for a code of practice, in a section headed "Status of the code". Breaching the code "does not of itself make that person liable" to civil or criminal proceedings; the code is nevertheless admissible in evidence, and a court may take a failure to follow it into account in determining a question. Not nullity, not liability — relevance. [Who regulates forensic science](/forensics/who-regulates-forensic-science) sets the section out in full.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Three subsections, one drafting move',
        text: 'A duty is stated, and then the consequence of breaching it is stated separately and set deliberately low: not nullity, not liability, but relevance. The breach becomes something a court may weigh rather than something that decides anything by itself. Two English statutes and one German code arrive at the same design from different traditions, which suggests the problem is structural rather than national.',
      },
      {
        kind: 'paragraph',
        text: 'International law says nothing that settles the question either way. ICCPR Article 14(5) provides that everyone convicted of a crime shall have the right to have the conviction and sentence reviewed by a higher tribunal "according to law" — the review is guaranteed, and what counts as a reviewable error is left to each system.',
        claim: 'fact',
        sources: ['iccpr'],
      },
    ],
    misconceptions: [
      {
        claim: 'If a procedural rule was broken, the proceeding is void.',
        reality:
          'It does not follow, and statutes often say so expressly. Sentencing Act 2020 s. 30(4) provides that where a court does not obtain a pre-sentence report, no custodial or community sentence is invalidated by that fact.',
      },
      {
        claim: 'A breach of a statutory duty automatically creates liability.',
        reality:
          'Not automatically. Forensic Science Regulator Act 2021 s. 4 provides that a failure to act in accordance with the code does not of itself make that person liable to civil or criminal proceedings.',
      },
      {
        claim: 'German law lists the errors that are serious enough to overturn a judgment.',
        reality:
          'That inverts the structure. StPO § 337(1) states the general test — that the judgment rests on the violation — and § 338 lists the narrow cases where resting on it is presumed rather than shown.',
      },
      {
        claim: 'Absolute grounds are just the most serious mistakes.',
        reality:
          'They are the cases where the counterfactual cannot be run. An improperly constituted court or a hearing held contrary to the publicity provisions leaves nothing to compare the outcome against.',
      },
      {
        claim: 'International law fixes what counts as a reversible error.',
        reality:
          'It does not. ICCPR Article 14(5) guarantees review by a higher tribunal "according to law", leaving the content of reviewable error to each system.',
      },
      {
        claim: 'A rule that does not void anything when breached is not really a rule.',
        reality:
          'Consequence and status are different questions. The forensic code is admissible in evidence and a court may take a failure to follow it into account, which is a legal effect short of nullity.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four drafting techniques for the same problem, all read from primary text.',
      },
      {
        kind: 'list',
        items: [
          'A general test of causation stated in the appeal provision itself — Germany, StPO § 337(1) "beruhe".',
          'An enumerated list where that causation is presumed — Germany, StPO § 338.',
          'An express saving of validity attached to the duty — England and Wales, Sentencing Act 2020 s. 30(4).',
          'An express exclusion of liability combined with admissibility — England and Wales, Forensic Science Regulator Act 2021 s. 4.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'The German provisions are the law of Germany and concern the Revision in criminal proceedings. Both English statutes are extent-marked E+W and support nothing about Scotland or Northern Ireland. Nothing here describes the position in any other country.',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not researched here',
        text: 'Civil procedure, administrative procedure, and how any of these tests is applied in practice were not researched. No claim is made about how often any of them is satisfied.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A materiality test is where a system is most exposed to a fair criticism: set it too high and procedural rights become unenforceable, because every breach can be met with the answer that the outcome would have been the same. The German answer to that criticism is § 338, which removes the question entirely for a defined set of cases.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The English examples show the criticism has force in the other direction too. A duty to obtain a pre-sentence report that cannot invalidate a sentence is enforced, if at all, by something other than nullity — and the statute does not say what.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Asking what happens when a rule is broken is not an attack on the rule or on the court applying it. It is the question the legislature itself answered in each of these three statutes, and reading only the duty and not the consequence gives a false picture of what the law requires.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a reviewing court can do](/courts/what-a-reviewing-court-can-do), [cassation review](/courts/cassation-review), and [appeal](/glossary/appeal).',
      },
    ],
  },
  {
    slug: 'what-happens-to-unlawfully-obtained-evidence',
    title: 'What happens to unlawfully obtained evidence',
    shortTitle: 'Unlawful evidence',
    question: 'Is evidence obtained unlawfully always thrown out?',
    summary:
      'Three constitutions answer this in two different ways. Brazil states inadmissibility flatly. South Africa and Kenya make exclusion conditional on what admitting the evidence would do to the trial — which means the violation alone does not decide it.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'when-a-procedural-error-changes-the-outcome',
      'what-a-reviewing-court-can-do',
      'effective-remedy',
    ],
    sources: ['br-cf-1988', 'za-constitution', 'ke-constitution'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['evidence', 'due-process', 'fair-trial'],
    uncertainty: [
      'Three constitutional texts are described. What any of these tests means in practice, and how courts applying them decide, were not researched and are not stated.',
      'Germany appears in this platform’s comparative material for review of legal error, but no source here establishes its position on unlawfully obtained evidence. That is recorded as NOT ESTABLISHED rather than as an absence of any rule.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Evidence was obtained in a way that broke the law or violated a right. What follows? The intuitive answer — it cannot be used — is the answer one of the three constitutions on this page gives. The other two give a different one, in almost identical words to each other, and the difference is not a technicality.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes what three constitutions say about the admissibility of unlawfully obtained evidence. It is not legal advice, it does not indicate whether any evidence would be admitted or excluded anywhere, and nothing here is a technique for obtaining or resisting a ruling on evidence. It is a comparison of constitutional texts, nothing more.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'An exclusionary rule is a system’s answer to a genuinely hard question: what should a court do about reliable evidence of a serious offence that was obtained by violating someone’s rights? Excluding it can mean an unpunished offence. Admitting it can mean the violation cost the state nothing, which is another way of saying the right was not enforceable.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two things the rule is trying to do at once',
        text: 'Protect the fairness of this trial, and remove the incentive to violate rights in future cases. A conditional test aims mainly at the first; an absolute rule reaches the second more directly. Neither design is a mistake, and the constitutional texts show drafters choosing between them deliberately.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Brazil states the rule without a condition. Article 5º LVI of the 1988 Constitution provides that evidence obtained by unlawful means is inadmissible in the process. The constitutional text states the inadmissibility and attaches no balancing test to it.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'South Africa states a condition. Section 35(5) of the 1996 Constitution provides that evidence obtained in a manner that violates any right in the Bill of Rights **must be excluded if the admission of that evidence would render the trial unfair or otherwise be detrimental to the administration of justice**.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Kenya states materially the same condition. Article 50(4) of the 2010 Constitution provides that evidence obtained in a manner that violates any right or fundamental freedom in the Bill of Rights **shall be excluded if the admission of that evidence would render the trial unfair, or would otherwise be detrimental to the administration of justice**.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Where the condition bites',
        text: 'In both conditional formulations the operative word is "if". Exclusion follows from a judgment about the effect of admitting the evidence, not automatically from the fact of the violation. A court applying either provision has to reach a conclusion about the trial before it can reach one about the evidence — which is exactly the step the Brazilian text does not contain.',
      },
      {
        kind: 'paragraph',
        text: 'Both conditional provisions are also mandatory once the condition is met. Neither says a court may exclude; both say the evidence must, or shall, be excluded. The discretion is in the assessment, not in what follows from it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two constitutions, one formulation',
        text: 'The South African provision of 1996 and the Kenyan provision of 2010 are close enough in wording that the resemblance is unlikely to be coincidental. This page records the resemblance in the texts and makes no claim about how one came to resemble the other.',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What is not established here',
        text: 'No source used on this page establishes the position in Germany, in England and Wales, or in any system other than the three named. Their absence from this page is a gap in this platform’s sourcing and is not evidence that they have no rule.',
      },
    ],
    misconceptions: [
      {
        claim: 'Unlawfully obtained evidence is always excluded.',
        reality:
          'Not in two of the three constitutions described here. South Africa and Kenya both make exclusion conditional on whether admitting the evidence would render the trial unfair or be detrimental to the administration of justice.',
      },
      {
        claim: 'Exclusion of evidence is always a matter of judicial discretion.',
        reality:
          'That is not what the Brazilian text says. Article 5º LVI states that evidence obtained by unlawful means is inadmissible in the process, without attaching a balancing condition.',
      },
      {
        claim: 'A conditional rule means a court can admit the evidence if it wants to.',
        reality:
          'It does not. Both conditional provisions are mandatory once the condition is met — the evidence must, or shall, be excluded. What is assessed is the effect of admission, not whether to act on the answer.',
      },
      {
        claim: 'Every legal system has an exclusionary rule of some kind.',
        reality:
          'This page establishes no such thing. It describes three constitutions, and it records that the position in the other systems this platform covers was not established by any source used here.',
      },
      {
        claim: 'Excluding evidence is a loophole that lets guilty people go free.',
        reality:
          'That frames a rule about the state’s own conduct as a benefit to the accused. Both conditional provisions turn on the fairness of the trial and the administration of justice, which are the interests the rule exists to protect.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two designs, read from the constitutional texts themselves.',
      },
      {
        kind: 'list',
        items: [
          'Inadmissibility stated without a balancing condition — Brazil, Art. 5º LVI.',
          'Mandatory exclusion conditional on the effect of admission — South Africa, s 35(5).',
          'Mandatory exclusion on materially the same condition — Kenya, Art. 50(4).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each provision is the law of its own country and is described from its own constitutional text. Nothing here supports a claim about any other country, and no system described is a model for, or an equivalent of, any other.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The design choice has a consequence worth stating plainly. Under a conditional rule, a rights violation that produced reliable evidence and did not make the trial unfair may leave the evidence in place — so the violation has to be answered by something other than exclusion, if it is answered at all.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Under an unconditional rule the enforcement is automatic, and the cost is borne in the cases where the evidence was reliable and the offence serious. Both designs pay for what they protect; the constitutions differ on which price to pay.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Neither design implies distrust of courts. Both are choices made by constitutional drafters about the conditions under which a court may rely on evidence, and a court applying either is doing what its constitution requires of it.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [when a procedural error changes the outcome](/justice/when-a-procedural-error-changes-the-outcome), [chain of custody](/glossary/chain-of-custody), and [disclosure](/glossary/disclosure).',
      },
    ],
  },
  {
    slug: 'which-rights-can-never-be-suspended',
    title: 'Which rights can never be suspended',
    shortTitle: 'Non-derogable rights',
    question:
      'Can a government suspend rights in an emergency, and are any of them untouchable?',
    summary:
      'Neither "rights are suspended" nor "rights can never be limited" survives contact with the texts. Five different architectures do this job — a list of untouchable rights, a protected core of every right, a closed list of permitted measures, a closed list of suspendable rights, and no derogation machinery at all.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-a-state-of-emergency-changes',
      'limits-on-public-power',
      'detention-under-emergency-powers',
    ],
    sources: [
      'iccpr',
      'echr-convention',
      'za-constitution',
      'ke-constitution',
      'ch-constitution',
      'ca-charter-1982',
      'us-constitution-suspension-clause',
      'de-grundgesetz',
      'es-constitution',
      'br-cf-1988',
      'cz-constitution',
      'no-constitution',
      'jp-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 11,
    keyTerms: ['due-process', 'fair-trial', 'rule-of-law'],
    countryExamples: [
      {
        countrySlug: 'south-africa',
        note: 'Uses a Table of Non-Derogable Rights and adds two absolute bars that appear nowhere else in this wave: no emergency legislation may indemnify the state or any person for an unlawful act, and none may derogate from s. 37 itself.',
      },
      {
        countrySlug: 'kenya',
        note: 'Speaks of LIMITING rather than derogating, and lists four rights in Art. 25 that "shall not be limited" despite any other provision of the Constitution — freedom from torture and cruel, inhuman or degrading treatment; freedom from slavery or servitude; the right to a fair trial; and the right to an order of habeas corpus.',
      },
      {
        countrySlug: 'switzerland',
        note: 'Protects a CORE of every right instead of listing whole rights: BV Art. 36(4) provides that "Der Kerngehalt der Grundrechte ist unantastbar" — the essence of fundamental rights is inviolable — and it sits in the general limitation clause rather than in an emergency provision.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'canada',
        note: 'Has no domestic derogation mechanism at all. Limitation runs through the ordinary Charter s. 1 test and, for a legislature, the s. 33 declaration with its own five-year clock. The Emergencies Act preamble directs the Governor in Council to "have regard to" the ICCPR, which is a direction to consider and not an incorporation.',
      },
    ],
    uncertainty: [
      'Two treaties and five national systems are described in detail — South Africa, Kenya, Switzerland, Canada and the United States — with single sourced points about six more in the comparison list. What any other system provides was not researched, and the treaties are not evidence of any state’s domestic law.',
      'This page describes what the texts state. It does not indicate whether any measure anywhere was lawful, and it is not advice to anyone about their own position.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Two sentences get repeated about rights in emergencies and both are wrong. "Rights are suspended during a state of emergency" is wrong because every instrument here places something beyond reach. "Rights can never be limited during an emergency" is wrong because every instrument here permits something. What the texts actually contain is five different ways of drawing the line.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes the structure of rights protection in emergencies across two treaties and five national systems, with shorter sourced points about six more. It cannot indicate whether any measure was lawful, states no route of challenge, and is not legal advice. Anyone dealing with a real situation needs a lawyer in that jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The case for permitting some limitation is real: a government that cannot restrict movement during an epidemic, or requisition property during a flood, has been disarmed at the moment it is most needed. The case for placing some things beyond reach is equally real, and rests on the observation that the arguments for torture and for indefinite detention are always strongest in exactly the conditions an emergency creates.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Limitation and derogation are different operations',
        text: 'A limitation clause asks whether a restriction is justified under a standing test that applies at all times. A derogation clause asks whether a state may set an obligation aside for a period. Systems that have only the first — and several here do — are not thereby less protective; they are answering the question through a different instrument.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Covenant states four cumulative conditions and then a list. Article 4(1) of the ICCPR permits derogation *in time of public emergency which threatens the life of the nation and the existence of which is officially proclaimed*, only to the extent strictly required by the exigencies of the situation, provided the measures are not inconsistent with other obligations under international law and involve no discrimination solely on the ground of race, colour, sex, language, religion or social origin.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'paragraph',
        text: 'Article 4(2) then provides that *no derogation from articles 6, 7, 8 (paragraphs 1 and 2), 11, 15, 16 and 18 may be made under this provision* — the right to life; freedom from torture and from non-consensual medical or scientific experimentation; freedom from slavery and servitude; the bar on imprisonment for inability to fulfil a contractual obligation; the prohibition of retroactive criminal law; recognition as a person before the law; and freedom of thought, conscience and religion.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'paragraph',
        text: 'The European Convention has the same architecture and a shorter list. Article 15(2) makes Articles 2, 3, 4(1) and 7 non-derogable — with an express carve-out on the right to life *except in respect of deaths resulting from lawful acts of war*.',
        claim: 'fact',
        sources: ['echr-convention'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What is not on the European list',
        text: 'Article 5, liberty and security, and Article 6, fair trial, are absent from Article 15(2). The Convention text therefore permits derogation from guarantees that several national constitutions on this page place beyond reach — which is why a treaty floor and a constitutional ceiling are not the same measurement.',
      },
      {
        kind: 'paragraph',
        text: 'South Africa builds the fullest version of the list architecture. Section 37(4) allows emergency legislation to derogate from the Bill of Rights only to the extent that the derogation is strictly required by the emergency and the legislation is consistent with the Republic’s international-law obligations applicable to states of emergency. Section 37(5) then bars three things absolutely: indemnifying the state or any person for any unlawful act; derogating from section 37 itself; and derogating from the sections listed in the Table of Non-Derogable Rights, to the extent stated in the Table.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The bar on indemnity is the unusual one',
        text: 'Non-derogable rights are common; a constitutional prohibition on retrospectively excusing unlawful acts is not. It closes the gap between "you may not do this" and "and you may not be forgiven for having done it", which are separable and are separated in most systems.',
      },
      {
        kind: 'paragraph',
        text: 'Kenya uses different vocabulary for the same problem. Article 58(6) provides that emergency legislation may *limit* a right or fundamental freedom only to the extent that the limitation is strictly required by the emergency; and Article 25 provides that despite any other provision in the Constitution, four rights *shall not be limited* — freedom from torture and cruel, inhuman or degrading treatment or punishment; freedom from slavery or servitude; the right to a fair trial; and the right to an order of habeas corpus.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two of Kenya’s four are procedural',
        text: 'A fair trial and an order of habeas corpus are not on the ICCPR or ECHR non-derogable lists. Kenya has put the routes to a court beyond reach as well as the substantive protections — a design choice with direct consequences for what a court can be asked to do during an emergency.',
      },
      {
        kind: 'paragraph',
        text: 'Switzerland does it without a list at all. Article 36(4) of the Bundesverfassung provides that *der Kerngehalt der Grundrechte ist unantastbar* — the essence of fundamental rights is inviolable — and it sits in the general limitation clause, not in an emergency provision, so it is not textually disapplied when conditions become extraordinary.',
        claim: 'fact',
        sources: ['ch-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Which protects less of some rights and more of others than a list does. Every right keeps a core; no right is protected in its entirety. That is a different bargain from the treaty model, and neither is a weaker version of the other.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'And a system may have no derogation machinery whatever. Canada has none: limitation of Charter rights runs through the ordinary section 1 test — such reasonable limits prescribed by law as can be demonstrably justified in a free and democratic society — and a legislature may additionally invoke section 33, whose declaration ceases to have effect five years after it comes into force.',
        claim: 'fact',
        sources: ['ca-charter-1982'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why this is not a gap',
        text: 'A system without a derogation clause has not overlooked emergencies; it has decided that the ordinary justification test is capable of handling them, so that a measure taken in a crisis is assessed by the same standard as any other and the crisis is part of the justification rather than a reason to stop asking.',
      },
      {
        kind: 'paragraph',
        text: 'One more architecture is worth naming precisely because it is so often misdescribed. The Constitution of the United States contains a provision that permits a named legal protection to be withdrawn in an emergency: Article I, Section 9, Clause 2 provides that the privilege of the writ of habeas corpus *shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it*.',
        claim: 'fact',
        sources: ['us-constitution-suspension-clause'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A suspended remedy is not a derogated right',
        text: 'The clause reaches the privilege of a writ — the route to a court — rather than an obligation the state owes. Calling it a derogation clause borrows vocabulary from the ECHR and the ICCPR that has no counterpart in United States constitutional law, and invites a reader to expect a strictly-required test, a proclamation requirement and a non-derogable list that this text does not contain. It is also stated as a prohibition with an exception rather than as a grant of power.',
      },
    ],
    misconceptions: [
      {
        claim: 'Rights are suspended during a state of emergency.',
        reality:
          'Not in any instrument described here. ICCPR Article 4(2) makes seven provisions non-derogable, Kenya’s Article 25 lists four rights that shall not be limited at all, and Switzerland protects an inviolable core of every fundamental right.',
      },
      {
        claim: 'Rights can never be limited during an emergency.',
        reality:
          'Equally wrong. ICCPR Article 4(1) and ECHR Article 15(1) both permit derogation to the extent strictly required, and Canada’s Charter section 1 permits reasonable limits demonstrably justified in a free and democratic society.',
      },
      {
        claim: 'Every system has a list of non-derogable rights.',
        reality:
          'Switzerland has no list — it protects an inviolable core of every right through the general limitation clause. Brazil approaches it from the opposite side, listing the only measures that may be taken against persons.',
      },
      {
        claim:
          'A country that has ratified the ICCPR has its derogation rules in domestic law.',
        reality:
          'Not necessarily. The Covenant is unincorporated in Canada, and the Emergencies Act preamble directs the Governor in Council to have regard to it — a direction to consider, not an incorporation.',
      },
      {
        claim: 'The right to a fair trial is universally non-derogable.',
        reality:
          'Kenya places it beyond limitation, but it is absent from the ECHR Article 15(2) list. The treaty floors and the national constitutions do not draw the line in the same place.',
      },
      {
        claim:
          'A government may pass a law protecting officials who acted unlawfully in an emergency.',
        reality:
          'Not in South Africa. Section 37(5)(a) bars any Act authorising a declaration, and any legislation or action taken in consequence of one, from indemnifying the state or any person for an unlawful act.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five architectures for one problem.',
      },
      {
        kind: 'list',
        items: [
          'A list of non-derogable provisions — ICCPR Art. 4(2); ECHR Art. 15(2); South Africa’s Table of Non-Derogable Rights; Kenya Art. 25.',
          'A protected core of every right — Switzerland BV Art. 36(4); Germany’s Wesensgehaltsgarantie in GG Art. 19(2).',
          'A closed list of permitted measures, so that nothing unlisted is available — Brazil CF Art. 139.',
          'A closed list of suspendable rights, available only in the severer regimes — Spain CE Art. 55(1).',
          'No derogation machinery at all, the ordinary limitation test doing the work — Canada; Japan; Czechia’s Listina; Norway.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'The two treaties bind the states party to them and are not evidence of any particular state’s domestic law. Each constitutional provision is the law of its own country. Nothing here supports a claim about a system not named.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The practical value of a non-derogable list is that it removes a category of argument. Where torture is on the list, the question in an emergency is not whether the circumstances justify it — the text has answered that in advance, at a moment when nobody was under pressure to reach a different answer.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The core-content model does the same work with a different distribution. It concedes that most rights will be limited further in a crisis and insists that none may be hollowed out, which protects less at the margin and refuses to let any right disappear entirely.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: "Neither model is designed to reduce the state's capacity to protect people, and both operate on the same premise as the emergency powers themselves — that a government facing a catastrophe will need to act, and that deciding in advance what it may not do is what allows the rest to be done with confidence. That is not the same as saying the constraints never cost anything: a rule that puts a measure out of reach puts it out of reach in the hard case as well as the easy one, and the constitutions here accept that price knowingly.",
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a state of emergency changes](/public-safety/what-a-state-of-emergency-changes), [limits on public power](/justice/limits-on-public-power), and [detention under emergency powers](/justice/detention-under-emergency-powers).',
      },
    ],
  },
  {
    slug: 'reviewing-an-emergency-declaration',
    title: 'Reviewing an emergency declaration',
    shortTitle: 'Reviewing a declaration',
    question:
      'Can a court be asked whether the declaration itself was lawful, or only the measures under it?',
    summary:
      'Both, and systems answer them differently. South Africa lets any competent court decide the validity of a declaration, an extension, and anything done under it; Kenya narrows the forum to the Supreme Court; Spain splits it by the rank of the instrument; one constitutional court holds the declaration unreviewable.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-can-declare-a-state-of-emergency',
      'constitutional-review',
      'effective-remedy',
    ],
    sources: [
      'za-constitution',
      'ke-constitution',
      'es-tc-estados-excepcionales',
      'es-lo-4-1981',
      'cz-usoud-nouzovy-stav',
      'fr-cc-etats-exception',
      'fr-constitution-1958',
      'nz-borrowdale-2020',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 11,
    keyTerms: ['judicial-review', 'accountability', 'rule-of-law'],
    relatedInstitutions: ['constitutional-court'],
    countryExamples: [
      {
        countrySlug: 'south-africa',
        note: 'Decomposes the question in the constitutional text itself: s. 37(3) provides that any competent court may decide the validity of a declaration, of any extension of a declaration, and of any legislation enacted or other action taken in consequence of one — three separate objects of review, and no restriction on the forum.',
      },
      {
        countrySlug: 'kenya',
        note: 'Uses the same three-way decomposition and narrows the forum to one court: Art. 58(5) assigns validity of the declaration, of any extension, and of legislation or action taken in consequence to the SUPREME COURT.',
      },
      {
        countrySlug: 'spain',
        note: 'Splits review by the rank of the instrument. STC 83/2016 holds that a decree declaring or extending an estado de alarma has the rank or value of statute and is therefore challengeable only before the Tribunal Constitucional — while LO 4/1981 Art. 3 leaves administrative acts adopted during any of the three states challengeable in the ordinary courts.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'czechia',
        note: 'The counter-case. In Pl. ÚS 8/20 the plenum of the Constitutional Court held that a government resolution declaring a nouzový stav is primarily an act of applying constitutional law — an "akt vládnutí" with normative impact — which is in principle not subject to review.',
      },
    ],
    uncertainty: [
      'Six systems are described from primary text. What any other system provides was not researched, and the spread here is wide enough that nothing should be generalised from it.',
      'This page describes what may be reviewed and by whom. It states no procedure, no time limit and no route for bringing any challenge, and it is not legal advice.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Asking whether a court can review an emergency turns out to be at least three questions with different answers. Was the declaration lawful? Was the extension lawful? Was this particular measure taken under it lawful? Several constitutions separate them expressly, and the answers are not the same even inside one system.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes which court may examine what. It names no procedure, no deadline and no ground of challenge, it cannot indicate whether any measure was lawful, and it is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A declaration is an exercise of public power like any other, and this platform already explains that [judicial review asks whether power was exercised lawfully rather than whether the decision was right](/courts/appeal-and-judicial-review-are-different). What makes the emergency case distinctive is that the act under challenge may itself be the thing that switched on the powers — so the ordinary machinery has to answer a question about its own preconditions.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the decomposition matters more than the answer',
        text: 'A system can hold the declaration unreviewable and still review every measure taken under it, or review the declaration and give the government wide latitude on the measures. Those are very different arrangements that both answer "yes" to "can a court look at this", which is why the useful question is always which of the three objects is in issue.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'South Africa writes the decomposition into the constitution and then declines to narrow the forum. Section 37(3) provides that *any competent court* may decide on the validity of a declaration of a state of emergency, of any extension of a declaration, and of any legislation enacted or other action taken in consequence of a declaration.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Kenya uses an almost identical three-way structure and makes the opposite choice about who hears it. Article 58(5) provides that *the Supreme Court* may decide on the validity of a declaration, of any extension, and of any legislation enacted or other action taken in consequence of a declaration.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The same three objects, two different forums',
        text: 'These provisions are close enough in wording that the difference cannot be accidental. One system decided the question should be answerable wherever it arises; the other decided it should be answered once, at the top. Both are decisions about access as much as about review.',
      },
      {
        kind: 'paragraph',
        text: 'Spain divides by the rank of the instrument rather than by the object. In STC 83/2016 the Tribunal Constitucional held that decrees declaring or extending an *estado de alarma* possess *rango o valor de ley*, so they escape the administrative-law courts — and the Court was explicit that this does not make them immune from all judicial control, but channels it to the constitutional route.',
        claim: 'fact',
        sources: ['es-tc-estados-excepcionales'],
      },
      {
        kind: 'paragraph',
        text: 'The ordinary courts keep the rest. Article 3 of Ley Orgánica 4/1981 provides that acts and provisions of the public administration adopted during any of the three states are challengeable in the courts, with a right to compensation for those harmed in their person, rights or property by acts not attributable to their own conduct.',
        claim: 'fact',
        sources: ['es-lo-4-1981'],
      },
      {
        kind: 'paragraph',
        text: 'Czechia is the counter-case, and it is a constitutional court that supplies it. In Pl. ÚS 8/20 the plenum held that a government resolution declaring a *nouzový stav* is primarily an act of applying constitutional law — an *akt vládnutí*, an act of governing with normative impact — which in principle is not subject to review.',
        claim: 'fact',
        sources: ['cz-usoud-nouzovy-stav'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What that decision does and does not settle',
        text: 'It is about the declaration. It is not authority that measures taken under a declaration are beyond review, which is a different question that the decision distinguishes. A reader who took it for the broader proposition would be attributing to the Court something it did not decide.',
      },
      {
        kind: 'paragraph',
        text: 'France builds a clock into the constitution and then supplies ordinary routes beneath it. Since the 2008 revision, Article 16 provides that after thirty days of the exercise of exceptional powers the Conseil constitutionnel may be seised by the President of the National Assembly, the President of the Senate, sixty deputies or sixty senators, to examine whether the conditions for those powers remain met.',
        claim: 'fact',
        sources: ['fr-constitution-1958'],
      },
      {
        kind: 'paragraph',
        text: 'Beneath that, the ordinary judge does the work. In décision n° 2015-527 QPC the Conseil constitutionnel held that an *assignation à résidence* under the state of emergency, its duration, its conditions of application and any supplementary obligations must be justified and proportionate to the reasons that motivated the measure, under the control of the administrative judge — and in décision n° 2020-800 DC it imposed a reservation of interpretation requiring prior judicial authorisation before a quarantine or isolation measure prohibiting departure could continue beyond fourteen days.',
        claim: 'fact',
        sources: ['fr-cc-etats-exception'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A conceptual difference worth noticing',
        text: 'The Conseil constitutionnel treats the emergency regime not as a derogation from the Constitution but as an exercise of the legislature’s ordinary competence, subject to a duty to reconcile the prevention of disorder with constitutional rights. That framing makes ordinary proportionality review the natural tool rather than an exception to be argued for.',
      },
      {
        kind: 'paragraph',
        text: 'New Zealand shows the same instinct in a common-law system with no written emergency clause. In *Borrowdale v Director-General of Health* the High Court reviewed emergency measures on ordinary administrative-law and Bill of Rights grounds and concluded that for nine days there had been an unlawful limitation of certain rights and freedoms, while placing that in the context of a rapidly developing situation.',
        claim: 'fact',
        sources: ['nz-borrowdale-2020'],
      },
      {
        kind: 'paragraph',
        text: 'Which is worth stating plainly because of how it is often reported. A court finding part of an emergency measure unlawful is the system working as designed, not a constitutional crisis — and the same judgment upheld the rest.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Emergency powers are never reviewable by courts.',
        reality:
          'That is not true of any system described here, and two constitutions say so in terms. South Africa’s s. 37(3) lets any competent court decide the validity of a declaration, an extension, and anything done in consequence; Kenya’s Art. 58(5) assigns the same three questions to the Supreme Court.',
      },
      {
        claim: 'If a court can review an emergency, it can review everything about it.',
        reality:
          'Not in Spain, where a declaring decree has the rank of statute and is challengeable only before the Tribunal Constitucional while administrative acts under it go to the ordinary courts.',
      },
      {
        claim: 'Every constitutional court will examine whether a declaration was lawful.',
        reality:
          'The Czech Constitutional Court held in Pl. ÚS 8/20 that a government resolution declaring a nouzový stav is an act of governing which in principle is not subject to review.',
      },
      {
        claim: 'A declaration being unreviewable means the measures under it are too.',
        reality:
          'They are separate questions, and the Czech decision distinguishes them. Nothing in it holds that measures taken under a declaration escape review.',
      },
      {
        claim: 'Judicial review works the same way everywhere during an emergency.',
        reality:
          'It does not. One system opens it to any court, one confines it to the apex court, one splits it by the rank of the instrument, one holds the declaration in principle unreviewable, and one runs it through ordinary administrative law.',
      },
      {
        claim:
          'A court holding part of an emergency measure unlawful means the system has broken down.',
        reality:
          'It is the system operating. In Borrowdale the High Court found an unlawful limitation for nine days, situated it in a rapidly developing situation, and upheld the remainder.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six systems, five arrangements.',
      },
      {
        kind: 'list',
        items: [
          'Any competent court, three objects of review named in the constitution — South Africa, s. 37(3).',
          'The Supreme Court alone, the same three objects — Kenya, Art. 58(5).',
          'Split by rank: the constitutional court for the declaring decree, the ordinary courts for administrative acts — Spain, STC 83/2016 with LO 4/1981 Art. 3.',
          'The declaration in principle not reviewable — Czechia, Pl. ÚS 8/20.',
          'A thirty-day constitutional clock above, proportionality review by the administrative judge below — France, Art. 16 with the Conseil constitutionnel’s decisions.',
          'Ordinary administrative-law and Bill of Rights review — New Zealand, Borrowdale.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each arrangement is the law of its own country. Spain’s rango-de-ley reasoning in particular turns on a feature of Spanish constitutional law with no automatic counterpart elsewhere, and should not be carried across.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Naming the objects of review in the constitutional text is what makes the question answerable at all. Where a text says a court may decide the validity of a declaration, of an extension, and of action taken in consequence, nobody has to argue about whether the subject matter is justiciable — the argument moves to the merits, which is where it is useful.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Asking a court whether an emergency was lawfully declared is not an attack on the government that declared it, any more than [an appeal is a criticism of the judge who decided the case](/justice/appeal-and-the-rule-of-law). It is the question the constitution itself provides for in three of these systems, and the body answering it is doing what it was constituted to do.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The systems that limit review are not thereby lawless either. Spain channels it rather than removing it, and the Czech decision reaches the declaration alone. Recording the difference precisely is the whole point: "courts can review emergency powers" is true of every system here and describes none of them accurately.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [constitutional review](/justice/constitutional-review), [what a reviewing court can do](/courts/what-a-reviewing-court-can-do), and [courts during a state of emergency](/courts/courts-during-a-state-of-emergency).',
      },
    ],
  },
  {
    slug: 'detention-under-emergency-powers',
    title: 'Detention under emergency powers',
    shortTitle: 'Emergency detention',
    question:
      'Can a person be held under emergency powers without being suspected of an offence?',
    summary:
      'Where a constitution provides for it, it usually provides conditions in the same breath. South Africa attaches eight of them to detention without trial; Brazil requires an arrest under emergency powers to be communicated to a judge immediately; one system bars discriminatory internment outright.',
    entityType: 'concept',
    section: 'justice',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'reviewing-detention',
      'which-rights-can-never-be-suspended',
      'what-a-state-of-emergency-changes',
    ],
    sources: [
      'za-constitution',
      'br-cf-1988',
      'ca-emergencies-act',
      'ke-constitution',
      'fr-cc-etats-exception',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['due-process', 'fair-trial', 'accountability'],
    countryExamples: [
      {
        countrySlug: 'south-africa',
        note: 'Provides for detention without trial and then attaches eight mandatory conditions to it in s. 37(6)–(8), including notification of a family member or friend, publication of the detainee’s name in the Gazette within five days, court review within ten days and at ten-day intervals afterwards, appearance in person, legal representation at those hearings, and access to a chosen medical practitioner.',
      },
      {
        countrySlug: 'brazil',
        note: 'Does not create a detention-without-suspicion power at all under the estado de defesa. Art. 136 §3 instead constrains arrest for a crime against the State: it must be communicated immediately to the competent judge, who releases the detainee if the arrest is unlawful, and incommunicado detention is prohibited.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'canada',
        note: 'Places an absolute substantive bar in the statute rather than conditions on a power: Emergencies Act s. 4(b) provides that nothing in the Act confers power to make orders or regulations providing for the detention, imprisonment or internment of Canadian citizens or permanent residents on the basis of race, national or ethnic origin, colour, religion, sex, age or mental or physical disability.',
      },
    ],
    uncertainty: [
      'Five systems are described from primary text. What any other system permits was not researched.',
      'This page describes constitutional and statutory conditions. It cannot indicate whether any detention anywhere is or was lawful, states no route of challenge and no time limit applicable to anyone, and is not legal advice. Anyone dealing with a real detention needs a lawyer in that jurisdiction immediately.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Ordinary detention rests on suspicion of an offence, and this platform already describes [how systems allow a court to be asked whether someone may lawfully be held](/justice/reviewing-detention). Emergency detention raises a prior question that page does not reach: whether a person may be held at all when the ordinary ground is absent — and, where the answer is yes, what the same instrument requires in exchange.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes what five instruments provide. It names no procedure, no deadline applicable to anyone, and no route of challenge; it cannot indicate whether any detention is lawful; and it is not legal advice. Anyone dealing with a real detention needs a lawyer in that jurisdiction immediately.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Detention is the exercise of public power whose subject cannot walk away to complain about it, which is why it attracts more procedural protection than anything else a state does. An emergency is precisely the condition in which the arguments for holding someone without the ordinary ground are strongest — and therefore the condition in which written conditions do the most work.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Conditions in the same breath as the power',
        text: 'The instruments that permit the most also specify the most. That is not a coincidence: a drafter willing to authorise detention without trial is a drafter who has thought about what it would mean, and the enumeration is where that thinking is recorded.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'South Africa authorises detention without trial in consequence of a derogation and then makes eight conditions mandatory. Section 37(6) requires that an adult family member or friend be contacted as soon as reasonably possible; that the detainee’s name and place of detention be published in the national Gazette within five days; that a court review the detention as soon as reasonably possible and in any event within ten days, and again at ten-day intervals; and that the detainee be allowed to appear in person before any court considering the detention, to be represented by a legal practitioner at those hearings and to make representations.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'It also requires that the detainee be allowed to choose and be visited at any reasonable time by a medical practitioner and by a legal representative.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Why publication in the Gazette is on the list',
        text: 'The other conditions protect the detainee. Publishing the name and place of detention protects against the thing detention without trial has historically been used for — holding someone whose whereabouts nobody outside can establish. It is a condition addressed to the public rather than to the person.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil takes a different route: its milder emergency regime does not create a detention-without-suspicion power at all, and constrains the arrest power it does touch. Article 136 §3 provides that during an *estado de defesa*, arrest for a crime against the State ordered by the executor of the measure must be communicated immediately to the competent judge, who releases the detainee if the arrest is unlawful; that the detainee may request a forensic medical examination; that incommunicado detention is prohibited; and that detention for such an offence may not exceed ten days unless authorised by the Judiciary.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two designs, two different guarantees',
        text: 'South Africa permits detention without trial and buys back protection through review and publicity. Brazil declines to permit it in that regime and keeps a judge in the loop from the first hours. Both are answers to the same worry, and neither is a weaker version of the other.',
      },
      {
        kind: 'paragraph',
        text: 'Canada does something neither of the others does: it bars a category of detention outright in the enabling statute. Section 4(b) of the Emergencies Act provides that nothing in the Act confers power to make orders or regulations providing for the detention, imprisonment or internment of Canadian citizens or permanent residents on the basis of race, national or ethnic origin, colour, religion, sex, age or mental or physical disability.',
        claim: 'fact',
        sources: ['ca-emergencies-act'],
      },
      {
        kind: 'paragraph',
        text: 'That provision has an obvious history behind it and does not depend on knowing it. As a piece of drafting it is a limit on what the Act can ever be read to authorise, rather than a condition on the exercise of a power the Act grants.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Kenya places the routes themselves beyond reach. Article 25 provides that despite any other provision in the Constitution, the right to a fair trial and the right to an order of habeas corpus shall not be limited — and Article 58(6) permits emergency legislation to limit a right only to the extent strictly required by the emergency.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A non-limitable remedy is a strong form of protection',
        text: 'Placing habeas corpus itself beyond limitation means the question of whether a person may be held remains answerable by a court however the emergency develops. It protects the route rather than the outcome, which is the more durable of the two.',
      },
      {
        kind: 'paragraph',
        text: 'France shows a constitutional court drawing the line during an emergency rather than in advance. In décision n° 2020-800 DC the Conseil constitutionnel imposed a reservation of interpretation on health-emergency confinement: quarantine or isolation measures prohibiting the person from leaving the place of quarantine cannot continue beyond fourteen days without prior authorisation by a judge.',
        claim: 'fact',
        sources: ['fr-cc-etats-exception'],
      },
      {
        kind: 'paragraph',
        text: 'And in décision n° 2015-527 QPC it held the other side of the same line, finding that an *assignation à résidence* under the state of emergency is an administrative-police measure which, by its object and scope, does not amount to a deprivation of individual liberty within Article 66 — while still requiring it to be justified and proportionate under the control of the administrative judge.',
        claim: 'fact',
        sources: ['fr-cc-etats-exception'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Where the constitutional threshold sits is the whole question',
        text: 'One measure crosses into deprivation of liberty and pulls in the judicial guarantee; the other does not and is controlled by proportionality instead. A page that treated every emergency restriction on movement as detention would collapse a distinction the court took care to draw.',
      },
    ],
    misconceptions: [
      {
        claim: 'A state of emergency allows anyone to be detained indefinitely.',
        reality:
          'Not under these instruments. South Africa requires court review within ten days and again at ten-day intervals; Brazil limits detention for a crime against the State during an estado de defesa to ten days unless the Judiciary authorises more.',
      },
      {
        claim: 'Emergency detention means no lawyer and no court.',
        reality:
          'South Africa’s s. 37(6) requires that the detainee be allowed to appear in person before any court considering the detention, to be represented by a legal practitioner at those hearings, and to be visited by a legal representative and a chosen medical practitioner.',
      },
      {
        claim: 'Every emergency regime creates a power to detain without suspicion.',
        reality:
          'Brazil’s estado de defesa does not. Article 136 §3 constrains arrest for a crime against the State and requires immediate communication to a judge; it creates no detention power resting on something other than an offence.',
      },
      {
        claim: 'Habeas corpus can always be suspended in an emergency.',
        reality:
          'Kenya’s Article 25 places the right to an order of habeas corpus among the rights that shall not be limited, despite any other provision in the Constitution.',
      },
      {
        claim: 'Any emergency restriction on where a person may be is a detention.',
        reality:
          'The Conseil constitutionnel held otherwise for an assignation à résidence, treating it as an administrative-police measure not amounting to a deprivation of liberty under Article 66 — while requiring quarantine that prohibits departure to have prior judicial authorisation beyond fourteen days.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five instruments, four techniques.',
      },
      {
        kind: 'list',
        items: [
          'Authorise it, and attach eight mandatory conditions including periodic court review and publication of the name — South Africa, s. 37(6)–(8).',
          'Do not create the power, and keep a judge in the loop from the first hours — Brazil, CF Art. 136 §3.',
          'Bar a category of detention outright in the enabling statute — Canada, Emergencies Act s. 4(b).',
          'Place the remedy itself beyond limitation — Kenya, Art. 25 with Art. 58(6).',
          'Draw the constitutional threshold case by case, with judicial authorisation beyond a stated period — France, Conseil constitutionnel décisions 2015-527 QPC and 2020-800 DC.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each provision is the law of its own country. The periods and conditions stated are features of those texts, not rules applicable anywhere else, and none is described here as a model.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The recurring feature is that the strongest protections are procedural rather than substantive. Publishing a name, requiring a court to look again in ten days, forbidding incommunicado detention — none of these decides whether a person should be held, and all of them make the question answerable by someone other than the person holding them.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'That is also what makes them enforceable. A requirement that detention be justified invites an argument; a requirement that a court review it within ten days is either met or not.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'None of this implies that a state facing an insurrection or a catastrophe should be unable to hold anyone. The constitutions that provide these conditions provide the powers too, in the same sections — the conditions are what a system attaches to a power it has decided is necessary, not an argument that it is not.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [reviewing detention](/justice/reviewing-detention), [which rights can never be suspended](/justice/which-rights-can-never-be-suspended), and [courts during a state of emergency](/courts/courts-during-a-state-of-emergency).',
      },
    ],
  },
];
