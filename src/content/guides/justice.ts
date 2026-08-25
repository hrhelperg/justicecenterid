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
    related: ['what-is-justice', 'what-is-due-process', 'what-do-courts-do'],
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
        text: 'Related: [what justice means institutionally](/justice/what-is-justice), [what due process requires](/justice/what-is-due-process), and [what courts do](/courts/what-do-courts-do).',
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
        text: 'Related: [why government is bound by law](/justice/why-government-is-bound-by-law), [legality and non-retroactivity](/justice/legality-and-non-retroactivity), and [what due process is](/justice/what-is-due-process).',
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
        text: 'Related: [access to justice](/justice/access-to-justice), [judicial review](/glossary/judicial-review), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
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
];
