import type { Guide } from '../types';

/** Guides for the courts, prosecution, investigations, and forensics sections. */
export const PROCESS_GUIDES: readonly Guide[] = [
  {
    slug: 'what-do-courts-do',
    title: 'What do courts do?',
    shortTitle: 'What courts do',
    question: 'What do courts do?',
    summary:
      'Courts resolve disputes, test the state’s case against individuals, interpret law, and review public decisions. This guide explains those functions and why judicial independence is structural.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-courts-matter',
      'court-hierarchy',
      'why-judicial-independence-matters',
      'what-is-due-process',
      'what-does-a-prosecutor-do',
      'what-is-the-rule-of-law',
    ],
    sources: ['iccpr', 'udhr', 'rome-statute'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['court', 'judicial-independence', 'jurisdiction', 'appeal', 'judicial-review'],
    definition: [
      {
        kind: 'paragraph',
        text: 'A court is a body with legal authority to decide disputes and to determine the consequences of its decisions. It applies law to established facts and gives reasons that can be examined afterwards.',
      },
      {
        kind: 'paragraph',
        text: 'Courts perform four distinguishable functions: resolving disputes between private parties, deciding criminal cases brought by the state, reviewing decisions made by public bodies, and interpreting what the law means for cases that follow.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Two problems make courts necessary. First, disputes need an authoritative ending — a decision the parties are required to accept even when one of them disagrees with it. Second, the state needs to be capable of being told that it is wrong, by a body it does not control.',
      },
      {
        kind: 'paragraph',
        text: 'The second function is the harder one to build, because the institution that must be constrained is also the institution that funds, appoints, and can in principle abolish the constraint. Almost every structural feature of a judiciary — appointment procedure, security of tenure, protected pay, immunity for judicial acts, published reasoning — is an answer to that problem.',
      },
      {
        kind: 'paragraph',
        text: 'International instruments treat independent adjudication as a requirement rather than a preference. The International Covenant on Civil and Political Rights provides in Article 14 for a fair and public hearing by a competent, independent and impartial tribunal established by law, and the Universal Declaration expresses the same principle.',
        claim: 'fact',
        sources: ['iccpr', 'udhr'],
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Establishing facts',
            description:
              'Deciding what happened, on admissible evidence, to the standard the type of case requires. Criminal cases require a higher standard than civil disputes.',
          },
          {
            term: 'Applying law to those facts',
            description:
              'Determining what the applicable rules require in the situation found. Where the law is unclear, the court decides what it means.',
          },
          {
            term: 'Giving reasons',
            description:
              'Explaining the basis of the decision, which is what allows it to be challenged, criticised, and relied on in later cases.',
          },
          {
            term: 'Determining consequences',
            description: 'Sentence, remedy, order, or compensation, within limits set by law.',
          },
          {
            term: 'Reviewing other public decisions',
            description:
              'Deciding whether a public body acted within its powers and followed a lawful process — a question about legality rather than about whether the decision was wise.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Court systems are arranged in hierarchies. First-instance courts hear cases initially and establish the facts. Appellate courts review for legal error or procedural unfairness. A supreme or constitutional court sits at the top, usually hearing a small number of cases that raise questions of general importance.',
      },
      {
        kind: 'paragraph',
        text: 'International courts operate alongside national ones with defined and limited jurisdiction. The International Criminal Court, established by the Rome Statute of 1998, is complementary to national jurisdictions rather than superior to them — it acts where national systems are unwilling or unable to do so, and only in respect of the crimes and states within its jurisdiction.',
        claim: 'fact',
        sources: ['rome-statute'],
      },
    ],
    misconceptions: [
      {
        claim: 'Courts exist mainly to try criminal cases.',
        reality:
          'Civil disputes, family matters, employment claims, and administrative review occupy most courts most of the time. Criminal trials are the most visible part of the work rather than the largest.',
      },
      {
        claim: 'A trial establishes what really happened.',
        reality:
          'A criminal trial decides whether the case brought meets the required standard on the admissible evidence. That is a narrower question than "what happened", and the difference explains outcomes that look inexplicable from outside — including acquittals in cases where a court has not concluded that nothing occurred.',
      },
      {
        claim: 'An appeal is a fresh hearing.',
        reality:
          'In most systems appellate courts review for legal error or procedural unfairness rather than re-deciding the facts, and are reluctant to disturb findings made by the court that saw the witnesses. Some systems do provide full rehearing at the first appellate level; which applies is a national question.',
      },
      {
        claim: 'Judges make the law they apply.',
        reality:
          'Judges interpret law and, in common-law systems, develop it incrementally through decisions that bind later courts. Both are constrained activities: legislation prevails over judicial interpretation, and reasoning must be published and defensible. The scope of judicial development varies substantially between legal traditions.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Who decides the facts differs: a professional judge alone, a panel of professional judges, a jury of citizens, or a mixed panel of professional and lay judges sitting together.',
          'Adversarial systems leave the parties to build and present the case; inquisitorial systems give the court a stronger investigative role. Most systems mix elements, and the mix has moved in both directions over time.',
          'Constitutional review may sit with a single specialised court, with all courts, or be unavailable against primary legislation.',
          'Administrative decisions may be reviewed by ordinary courts or by a separate hierarchy of administrative courts.',
          'The role of prior decisions differs: binding precedent in common-law systems, persuasive but formally non-binding in many civil-law systems, with the practical gap between the two often narrower than the doctrine suggests.',
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Reading foreign court reporting',
        text: 'Terms such as arraignment, committal, plea bargain, examining magistrate, and cassation belong to particular systems and do not have exact equivalents elsewhere. A procedure with a familiar-sounding name may occupy a completely different position in another system’s sequence.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Courts are simultaneously an accountability mechanism for other institutions and a body that must itself be accountable. That dual position shapes how their accountability is designed: it must be real without allowing decisions to be punished.',
      },
      {
        kind: 'list',
        items: [
          'Hearings are generally public, and judgments are generally published, so reasoning is open to scrutiny.',
          'Decisions are subject to appeal, which is the primary corrective for a wrong decision.',
          'Judicial conduct — as distinct from the merits of decisions — is examined by judicial councils, specialised tribunals, or parliamentary procedures depending on the system.',
          'Security of tenure exists so that a judge cannot be removed for deciding against the government. It is a protection for the public rather than a privilege for the judge.',
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Judicial accountability is deliberately narrow: it addresses conduct and process, not the substance of decisions, because a mechanism that could punish judges for their conclusions would eliminate the independence the mechanism exists to protect. This is frequently mistaken for judges being unaccountable. The corrective for a wrong decision is an appeal, not a complaint.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'This guide explains what courts do. How court systems are STRUCTURED, and how much they differ, is covered by [court hierarchy](/courts/court-hierarchy), [why courts matter](/courts/why-courts-matter) and [why judicial independence matters](/courts/why-judicial-independence-matters). Related: [due process](/justice/what-is-due-process), [what a prosecutor does](/prosecution/what-does-a-prosecutor-do), [why hearings are public](/courts/why-hearings-are-public), and [the rule of law](/justice/what-is-the-rule-of-law). For a court system built on almost none of the components this page assumes, see [how Athenian courts worked](/history/how-athenian-courts-worked).',
      },
    ],
  },

  {
    slug: 'what-does-a-prosecutor-do',
    title: 'What does a prosecutor do?',
    shortTitle: 'What a prosecutor does',
    question: 'What does a prosecutor do?',
    summary:
      'A prosecutor decides whether a criminal case should be brought, on what charges, and presents it in court. This guide explains the tests applied, the duties owed, and how the role differs between systems.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-public-prosecution-exists',
      'how-charging-decisions-work',
      'prosecutorial-objectivity',

      'what-do-courts-do',
      'what-is-a-criminal-investigation',
      'what-is-the-presumption-of-innocence',
    ],
    sources: [
      'un-prosecutors-guidelines',
      'iccpr',
      'de-stpo-152-legalitaetsgrundsatz',
      'de-stpo-153-geringfuegigkeit',
      'de-stpo-170-anklageerhebung',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['prosecutor', 'charging-decision', 'prosecutorial-discretion', 'disclosure'],
    definition: [
      {
        kind: 'paragraph',
        text: 'A prosecutor is the public official who decides whether a criminal case should be brought, on what charges, and who then presents that case in court on behalf of the public.',
      },
      {
        kind: 'paragraph',
        text: 'The prosecutor is not the lawyer for the victim and not an investigator, although in several systems prosecutors direct investigations. The role is defined by acting in the public interest, which sometimes means declining to bring a case that a victim wants brought, and sometimes means disclosing material that damages the prosecutor’s own case.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Separating the decision to charge from the decision to investigate places a check between the body that has built a theory of a case and the court that will decide it. The person applying that check has not spent months pursuing the suspect.',
      },
      {
        kind: 'paragraph',
        text: 'It also concentrates a consequential decision in a role that can be regulated, trained, and held to published standards. A prosecution imposes serious costs on a person before any determination of guilt, and a filter applied consistently is preferable to one applied case by case at the discretion of whoever investigated.',
      },
      {
        kind: 'paragraph',
        text: 'International guidance reflects this. The United Nations Guidelines on the Role of Prosecutors, adopted by the Eighth United Nations Congress on the Prevention of Crime and the Treatment of Offenders in 1990, address the impartiality expected of prosecutors, their duty to protect the public interest, and the separation of prosecutorial from judicial functions.',
        claim: 'fact',
        sources: ['un-prosecutors-guidelines'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Several prosecution services — including those in the common-law systems whose published guidance uses this vocabulary — apply a two-stage test to the charging decision, in which the order matters: a case that fails the evidential stage is not saved by being important. This is not a universal structure. Germany’s Code of Criminal Procedure takes a different approach entirely: under § 152(2) StPO the prosecution is OBLIGED to act on all prosecutable offences where sufficient factual indications are present, and the provision asks nothing about the prospects of conviction. Where a system uses the two-stage vocabulary below, that is a fact about that system. [How charging decisions work](/prosecution/how-charging-decisions-work) sets out the comparison.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The evidential stage',
            description:
              'In the services that apply this test: is there sufficient admissible, reliable evidence to provide a realistic prospect of conviction? This is an objective assessment of the evidence, not a view about whether the person did it — and the phrase belongs to the systems that adopted it rather than to prosecution generally.',
          },
          {
            term: 'The public-interest stage',
            description:
              'In those same services: even where the evidence is sufficient, is a prosecution the right response? Factors commonly include seriousness, harm, the suspect’s age and circumstances, the impact on the victim, and whether an alternative disposal is more appropriate. Under a principle of legality this question is not a general second stage at all — in Germany a public-interest judgement enters through defined statutory exceptions such as § 153 StPO.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Beyond charging, the prosecutor’s work includes selecting charges, advising investigators on what evidence would be needed, applying to the court for orders, presenting the case at trial, disclosing material to the defence, and in many systems making submissions on sentence.',
      },
      {
        kind: 'paragraph',
        text: 'The duty of disclosure is the one that most clearly distinguishes a prosecutor from an advocate for one side. Prosecutors are generally obliged to disclose material that undermines their own case or assists the defence, whether or not they intend to rely on it.',
      },
    ],
    misconceptions: [
      {
        claim: 'The prosecutor represents the victim.',
        reality:
          'Prosecutors act in the public interest. Many systems give victims rights to information, to be consulted, and to review a decision not to prosecute, but the prosecutor is not their lawyer and may take decisions the victim opposes.',
      },
      {
        claim: 'If there is evidence, a prosecution must follow.',
        reality:
          'Sufficient evidence is necessary but not sufficient. The public-interest stage exists precisely so that prosecution is not automatic, and discretion not to prosecute is a deliberate feature rather than a loophole.',
      },
      {
        claim: 'Prosecutors work for the police.',
        reality:
          'In most systems they are a separate service with distinct duties, including duties owed to the court and to the accused. Depending on the system, prosecutors direct investigations, advise on them, or receive completed files — but a prosecutor who simply endorsed investigators’ conclusions would not be performing the function.',
      },
      {
        claim: 'Dropping a case means the prosecutor believed the accused was innocent.',
        reality:
          'A case may be discontinued because a key witness cannot give evidence, because material is inadmissible, or because the public-interest test is not met. The decision concerns whether a prosecution can and should proceed, not a conclusion about what happened.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The prosecution function is one of the most structurally variable parts of any justice system, and terminology transfers particularly badly here.',
      },
      {
        kind: 'list',
        items: [
          'Institutional position differs: a constitutionally separate service, a body within a ministry of justice, or a corps of judicial officers within the judiciary.',
          'Some systems apply a principle of mandatory prosecution where the evidence permits; others give prosecutors broad discretion. In practice most sit somewhere between, with exceptions to the stated rule.',
          'Whether prosecutors direct investigations, supervise them, or receive completed files is a fundamental structural difference that shapes the whole pre-trial process.',
          'Selection differs: career civil servants, judicial appointees, political appointees, or elected officials, depending on the country.',
          'Whether a decision not to prosecute can be challenged, and by whom, varies — through internal review, a court, or a victim’s right to bring a private prosecution.',
          'Negotiated resolutions range from formal plea agreements to systems that do not recognise them at all.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Because prosecutorial discretion is broad and largely exercised out of public view, it is structured by mechanisms that make it examinable.',
      },
      {
        kind: 'list',
        items: [
          'Published charging guidance, so decisions are made against stated criteria rather than case by case.',
          'Recorded reasons for significant decisions, particularly decisions not to prosecute.',
          'Review mechanisms allowing a decision not to prosecute to be reconsidered, in some systems on the application of the victim.',
          'Judicial supervision, including of applications for orders affecting the accused before trial.',
          'Disclosure obligations enforced by the court, with a failure capable of stopping proceedings or founding an appeal.',
          'Professional regulation, since prosecutors are usually subject to a professional conduct regime in addition to their employer’s.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Fair-trial guarantees under the International Covenant on Civil and Political Rights, including the requirement of adequate time and facilities to prepare a defence, are among the obligations that shape prosecutorial practice in states party to it.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Prosecutorial decisions are less visible than judicial ones and frequently more consequential: a case that is never charged produces no hearing, no judgment, and no public reasoning. This is why published guidance and recorded reasons matter more here than the comparatively low public attention to the role would suggest.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what courts do](/courts/what-do-courts-do), [what a criminal investigation is](/investigations/what-is-a-criminal-investigation), and [the presumption of innocence](/justice/what-is-the-presumption-of-innocence).',
      },
    ],
  },

  {
    slug: 'what-is-a-criminal-investigation',
    title: 'What is a criminal investigation?',
    shortTitle: 'Criminal investigation',
    question: 'What is a criminal investigation?',
    summary:
      'A criminal investigation is a legally authorised process for establishing whether an offence occurred and gathering evidence that can be tested in court. This guide explains its structure, safeguards, and known failure modes.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-investigates-crime',
      'police-vs-prosecutor-investigation',
      'what-does-a-prosecutor-do',
      'what-is-forensic-science',
      'why-societies-need-law-enforcement',
    ],
    sources: ['iccpr', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['criminal-investigation', 'evidence', 'chain-of-custody', 'warrant'],
    definition: [
      {
        kind: 'paragraph',
        text: 'A criminal investigation is a legally authorised process for establishing whether a criminal offence has occurred, who was involved, and whether there is evidence capable of being tested in court.',
      },
      {
        kind: 'paragraph',
        text: 'It is better understood as a legal procedure than as a search. Each significant step requires a basis in law, is recorded, and is capable of being examined afterwards by people who were not present — a prosecutor, a court, a complaints body, or an appellate judge.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this guide does not cover',
        text: 'This guide explains how investigations are authorised and constrained, and how their reliability is assessed. It does not describe investigative techniques, surveillance capability, or detection thresholds. That boundary is a standing editorial rule, set out in our content-safety standards.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A court cannot decide a criminal case on assertion. Someone has to establish what can be shown, to a standard that will survive challenge, and to do so through means the law permits.',
      },
      {
        kind: 'paragraph',
        text: 'The formality exists because of what is at stake in both directions. Evidence gathered without authority may be excluded, ending a case against someone who did commit an offence. Evidence gathered carelessly may be unreliable, contributing to the conviction of someone who did not. The procedural structure is an attempt to reduce both errors at once.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Investigations vary in sequence, but the same structural elements recur across systems.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Authorisation',
            description:
              'Intrusive steps generally require approval from someone outside the investigating team — a supervisor, a prosecutor, or a judge — at a threshold defined in law. That external approval is the principal constraint on the process.',
          },
          {
            term: 'Preservation',
            description:
              'Securing material before it is lost or altered. What is not preserved early frequently cannot be recovered later.',
          },
          {
            term: 'Recording',
            description:
              'Documenting what was found, where, by whom, and when. The record is what allows a finding to be verified rather than accepted.',
          },
          {
            term: 'Chain of custody',
            description:
              'An unbroken account of who held material and when. A gap does not merely weaken evidence; it can remove it from the case entirely.',
          },
          {
            term: 'Interviews under safeguards',
            description:
              'Questioning conducted with recording, access to legal advice, and protections for vulnerable interviewees. These requirements exist because of documented cases of unreliable admissions.',
          },
          {
            term: 'Testing the theory',
            description:
              'Many systems place an explicit duty to pursue lines of enquiry that point away from a suspect, because confirmation bias is a documented failure mode rather than a hypothetical one.',
          },
          {
            term: 'Disclosure',
            description:
              'Material that undermines the case or assists the defence must generally be provided to the defence, whether or not the prosecution relies on it.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Fair-trial guarantees, including adequate time and facilities to prepare a defence, constrain what an investigation must produce and when, in states party to the International Covenant on Civil and Political Rights.',
        claim: 'fact',
        sources: ['iccpr'],
      },
    ],
    misconceptions: [
      {
        claim: 'Investigators can pursue any line of enquiry they judge useful.',
        reality:
          'Intrusive steps require legal authority and generally external authorisation. An investigator who wants to search premises, obtain communications data, or hold someone for questioning must satisfy a defined threshold and, in most cases, convince someone outside the team.',
      },
      {
        claim: 'A confession settles a case.',
        reality:
          'Admissions obtained without required safeguards may be inadmissible, and unreliable confessions are a documented cause of wrongful conviction. Many systems require supporting evidence and treat an uncorroborated admission with caution.',
      },
      {
        claim: 'Investigations are fast when investigators are competent.',
        reality:
          'Much of the elapsed time is authorisation, forensic examination queues, disclosure review, and coordination between agencies. These are features of a process designed to be reviewable, not symptoms of a process being performed badly.',
      },
      {
        claim: 'If the investigation is thorough, the right outcome follows.',
        reality:
          'Thoroughness is necessary and not sufficient. Documented miscarriages of justice have involved substantial investigative effort directed by an early theory that was not tested — which is why the duty to pursue exculpatory lines is a formal requirement rather than a matter of professional instinct.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Who leads differs fundamentally: police-led investigations with prosecutorial oversight, prosecutor-led investigations, or investigations supervised by an investigating judge. Almost everything else follows from this difference.',
          'Judicial authorisation thresholds for searches, communications data, and detention vary, as do the maximum periods a person may be held before being charged or brought before a court.',
          'The scope of disclosure obligations, and the point at which they arise, differ substantially between systems.',
          'Rules on the consequences of unlawfully obtained evidence range from automatic exclusion, through judicial discretion, to admission with the breach going to weight.',
          'Post-conviction review of possible miscarriages is handled by a dedicated body in some countries and by the appellate courts or a ministry in others.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'United Nations standards and norms in crime prevention and criminal justice address several of these areas, though implementation is a matter for each state.',
        claim: 'fact',
        sources: ['unodc-cpcj'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The rights that apply during an investigation are mostly constraints on investigators, and each generates a record that makes later review possible.',
      },
      {
        kind: 'list',
        items: [
          'To be informed of the reason for arrest or detention, in a language the person understands.',
          'To have detention reviewed by a court within a defined period.',
          'To access legal advice, with the point at which this arises differing between systems.',
          'To have interviews recorded, and to have safeguards where the person is a child or otherwise vulnerable.',
          'To disclosure of material relevant to the defence.',
          'To complain to a body outside the investigating organisation.',
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The investigative safeguards that matter most are the least visible: authorisation by someone outside the team, recording, disclosure, and the duty to test the working theory. None of them appears in the outcome of a case, which is why their absence is usually discovered years later, in a review of a conviction that has already been served.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'This guide explains what an investigation is. Who is legally competent to run one, and how systems differ, is covered by [who investigates crime](/investigations/who-investigates-crime), [police and prosecutor investigation](/investigations/police-vs-prosecutor-investigation) and [the investigating judge](/investigations/investigating-judge). Also related: [what a prosecutor does](/prosecution/what-does-a-prosecutor-do), [what forensic science is](/forensics/what-is-forensic-science), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight). For what an investigative act touches rather than who may perform it, see [what privacy protects in law](/investigations/what-privacy-protects-in-law), [searching a home](/investigations/searching-a-home) and [intercepting communications](/investigations/intercepting-communications). For the statutory authority beneath those constitutional rules, see [legal authority and technical capability](/investigations/legal-authority-and-technical-capability).',
      },
    ],
  },

  {
    slug: 'what-is-forensic-science',
    title: 'What is forensic science?',
    shortTitle: 'Forensic science',
    question: 'What is forensic science?',
    summary:
      'Forensic science is the application of scientific methods to questions arising in legal proceedings. This guide explains what it can establish, where its limits lie, and how its reliability is assessed.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-is-a-criminal-investigation',
      'what-do-courts-do',
      'why-justice-systems-need-oversight',
    ],
    sources: ['nas-forensic-2009', 'nist-forensic-science', 'enfsi'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['forensic-science', 'expert-evidence', 'accreditation', 'chain-of-custody'],
    definition: [
      {
        kind: 'paragraph',
        text: 'Forensic science is the application of scientific methods to questions that arise in legal proceedings. It covers a wide range of disciplines, from chemical and biological analysis to the examination of documents, marks, and digital records.',
      },
      {
        kind: 'paragraph',
        text: 'The essential point for a reader is that forensic science answers narrow questions. A result typically addresses whether two samples share measurable characteristics, or whether a mark is consistent with a proposed origin. It does not establish who committed an offence, or intent, or, in most cases, when something happened.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this guide does not cover',
        text: 'This guide explains what forensic disciplines establish, what limits their conclusions, and how their reliability is assessed. It does not describe laboratory methods or procedures, and it does not address how any technique might be performed, defeated, or evaded. That boundary applies to all forensic content on this platform.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Courts frequently face questions that cannot be answered by witnesses: what a substance is, whether two samples share a common origin, whether a document has been altered, what a set of records shows. Forensic science exists to answer such questions by methods that can be described, checked, and challenged.',
      },
      {
        kind: 'paragraph',
        text: 'The requirement that the method be checkable is not incidental. Evidence that a court cannot examine is evidence a court cannot properly weigh, which is why disclosure of underlying data and access to independent expert review are treated as part of the discipline rather than as concessions.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Several structural features determine how much weight a forensic finding can bear.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The question asked',
            description:
              'A finding answers a specific question about material. Moving from that finding to a conclusion about a person involves further inference that is a matter for the court, not for the scientist.',
          },
          {
            term: 'Measurement and interpretation',
            description:
              'Some disciplines produce measurements; others rest on a trained examiner’s comparative judgement. Both can be reliable, but interpretive disciplines depend heavily on examiner proficiency, documented criteria, and independent verification.',
          },
          {
            term: 'Uncertainty',
            description:
              'A responsible finding states its limits: what the result does not exclude, and what assumptions it depends on. A conclusion expressed without qualification is usually overstated.',
          },
          {
            term: 'Quality systems',
            description:
              'Validated methods, accreditation, proficiency testing, and documented procedures are what allow a result to be relied on. Where they are absent, the result is weaker regardless of the technique used.',
          },
          {
            term: 'Continuity of material',
            description:
              'A result is only as good as the account of how the material reached the laboratory. Chain-of-custody failures can remove evidence from a case entirely.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'A major review by the National Research Council in 2009 examined forensic practice in the United States and found substantial variation between disciplines in scientific foundation, standardisation, and quality assurance, concluding that interpretation of evidence varied between jurisdictions. Its findings concern the United States as of 2009 and do not describe forensic practice in other countries or the position today.',
        claim: 'fact',
        sources: ['nas-forensic-2009'],
      },
      {
        kind: 'paragraph',
        text: 'Standards and scientific-foundation work has continued since. In the United States, the National Institute of Standards and Technology conducts foundation reviews of forensic methods and administers a body that develops forensic science standards. In Europe, forensic institutes participate in a network engaged in quality assurance and best-practice work, according to that network’s own description of itself.',
        claim: 'fact',
        sources: ['nist-forensic-science', 'enfsi'],
      },
    ],
    misconceptions: [
      {
        claim: 'Forensic evidence is objective and therefore conclusive.',
        reality:
          'Many disciplines involve a trained examiner’s comparative judgement rather than a numerical output. That does not make them worthless, but it does mean examiner reliability, documented criteria, and verification are central rather than administrative details.',
      },
      {
        claim: 'A match identifies a person.',
        reality:
          'A finding of shared characteristics is a statement about material, expressed with a degree of confidence and subject to stated assumptions. Moving from that to identification of a person is an inference for the court, and the strength of that inference depends on the case as a whole.',
      },
      {
        claim: 'All forensic disciplines have the same scientific standing.',
        reality:
          'Major reviews have found that disciplines differ substantially in how well their underlying assumptions have been tested. Treating "forensic evidence" as a single category with a single reliability is one of the most consequential errors a reader can make.',
      },
      {
        claim: 'Results are available quickly.',
        reality:
          'Examination is a queued laboratory process with validation, verification, and reporting stages. The compressed timelines shown in fiction are among the most persistent misconceptions about the field.',
      },
      {
        claim: 'An absence of forensic evidence means nothing happened.',
        reality:
          'Material may never have been present, may not have been recoverable, or may not have been examined. Absence of a finding is not a finding of absence, and courts are generally directed accordingly.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Admissibility standards for expert evidence differ substantially between legal systems, including how far a court examines the reliability of the underlying method.',
          'Some systems rely on court-appointed experts; others on experts instructed by the parties. This changes how disagreement between experts is resolved.',
          'Accreditation requirements differ: mandatory for certain disciplines in some countries, voluntary in others.',
          'Forensic services may be delivered by state laboratories, by police-operated laboratories, by universities, or by commercial providers, and the arrangement affects both independence and quality assurance.',
          'Whether the defence can obtain independent examination of the same material, and who pays, varies considerably and materially affects the ability to challenge a finding.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Forensic evidence is meant to be contestable. The mechanisms that make it so are the accountability mechanisms of the discipline.',
      },
      {
        kind: 'list',
        items: [
          'Disclosure of underlying data, notes, and method, not only the conclusion.',
          'Access to independent expert review, which requires both the material and the funding to examine it.',
          'Admissibility rules allowing a court to exclude evidence whose method is insufficiently reliable.',
          'Accreditation and proficiency testing, which make examiner and laboratory performance measurable rather than assumed.',
          'Post-conviction review where a discipline’s foundation is later re-examined, which has led to convictions being reopened in several jurisdictions.',
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The most significant developments in forensic science over the past two decades have been about honesty in reporting rather than about new techniques: stating uncertainty, defining what a conclusion does and does not mean, and testing the assumptions behind long-established methods. That work is less visible than a new capability and has probably had a larger effect on outcomes.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a criminal investigation is](/investigations/what-is-a-criminal-investigation), [what courts do](/courts/what-do-courts-do), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },
];
