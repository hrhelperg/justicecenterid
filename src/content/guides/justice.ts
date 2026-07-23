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
];
