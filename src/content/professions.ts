import type { Profession } from './types';

/**
 * Profession registry.
 *
 * There is deliberately no field for salary, staffing level, mortality, attrition, or entry
 * requirements. Those are country-specific, time-sensitive, and the most common site of
 * fabrication in writing about these roles. When they are added they will sit on a country
 * module, where a jurisdiction and a dated official source are mandatory.
 *
 * `trainingRouteShape` describes the *structure* of training routes, not any country's
 * requirements.
 */
export const PROFESSIONS: readonly Profession[] = [
  {
    slug: 'patrol-officer',
    title: 'Patrol officer',
    summary:
      'The uniformed officer who attends incidents, maintains public order, and is usually the first point of contact between the public and the justice system.',
    section: 'law-enforcement',
    responsibilities: [
      'Attending reported incidents and establishing what is happening',
      'Resolving immediate risk to people present',
      'Preserving a scene and identifying witnesses so that any later investigation is possible',
      'Public order and the policing of events and gatherings',
      'Recording what was done and why, in a form that can be examined afterwards',
    ],
    decisionAuthority: [
      'Whether the legal threshold for a stop, a search, or an arrest is met on the information available',
      'Whether an incident is resolved without formal action, where the system permits that discretion',
      'What immediate steps are needed to protect people at the scene',
    ],
    constraints: [
      'Powers may be exercised only for the purpose for which they were granted and at the threshold the law specifies',
      'Force must be justified against a legal standard and is reviewed afterwards',
      'Entry, search, and detention are subject to authorisation requirements that differ by system',
      'Most decisions generate a record that is disclosable in later proceedings',
    ],
    oversight: [
      'Supervisory review of recorded decisions',
      'Independent complaints bodies, whose powers range from direct investigation to review of an internal investigation',
      'Judicial scrutiny where evidence obtained is challenged in court',
      'Inspectorates examining patterns across an organisation rather than individual incidents',
    ],
    trainingRouteShape: [
      'An initial training period combining law, procedure, and practical skills',
      'A supervised probationary period in operational duties',
      'Continuing professional development and periodic re-certification in specific powers',
      'Specialist qualification for particular functions, obtained after initial service in most systems',
    ],
    commonMisunderstandings: [
      'That most of the work is crime investigation. Across many services the majority of demand is public order, road policing, missing persons, safeguarding, and incidents involving mental health.',
      'That an officer decides whether someone is prosecuted. In most systems that decision belongs to a prosecutor.',
    ],
    jurisdictionNote:
      'Powers, training length, rank structures, and whether officers routinely carry firearms are set nationally and differ substantially, including between neighbouring countries.',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'detective',
    title: 'Detective / investigator',
    summary:
      'An officer or official responsible for establishing what happened in a reported offence and gathering evidence capable of being tested in court.',
    section: 'investigations',
    responsibilities: [
      'Developing and testing lines of enquiry, including lines that point away from a suspect',
      'Obtaining authorisation for investigative steps that require it',
      'Managing the integrity of evidence from collection to examination',
      'Conducting interviews under the applicable safeguards',
      'Preparing a file that a prosecutor and a court can examine',
    ],
    decisionAuthority: [
      'Which lines of enquiry to pursue and in what order',
      'What material to seek authorisation for',
      'What to recommend to a prosecutor, where the system separates the two roles',
    ],
    constraints: [
      'Intrusive steps generally require approval from outside the investigating team',
      'Disclosure obligations require material that undermines the case to be provided to the defence',
      'Interview safeguards, including recording and access to legal advice, are mandatory rather than discretionary',
      'Evidence obtained in breach of the applicable rules may be excluded',
    ],
    oversight: [
      'Prosecutorial or judicial supervision, depending on who leads investigations in the system',
      'Judicial scrutiny of authorisations and of the admissibility of evidence',
      'Post-conviction review bodies or appellate courts examining possible miscarriages of justice',
      'Independent complaints bodies',
    ],
    trainingRouteShape: [
      'Qualification in investigative practice, usually after a period in general duties',
      'Accreditation in interviewing, evidence handling, and disclosure',
      'Specialist training for particular categories of investigation',
    ],
    commonMisunderstandings: [
      'That investigations move at the pace shown in fiction. Much of the elapsed time is authorisation, examination queues, and disclosure review.',
      'That a confession resolves a case. Unreliable admissions are a documented cause of wrongful conviction, and many systems require supporting evidence.',
    ],
    jurisdictionNote:
      'Whether investigations are led by police, directed by a prosecutor, or supervised by an investigating judge is a fundamental structural difference, and most of the rest of the role follows from it.',
    sources: ['unodc-cpcj', 'iccpr'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'prosecutor',
    title: 'Prosecutor',
    summary:
      'The public official who decides whether a criminal case is brought, on what charges, and who presents it in court on behalf of the public.',
    section: 'prosecution',
    responsibilities: [
      'Applying the evidential and public-interest tests to the charging decision',
      'Selecting charges and advising investigators on what evidence would be required',
      'Disclosing material that undermines the prosecution case or assists the defence',
      'Presenting the case in court and making submissions where the system provides for it',
    ],
    decisionAuthority: [
      'Whether to bring, continue, or discontinue a prosecution',
      'What charges to bring, where discretion exists',
      'Applications to the court for orders affecting the accused before trial',
    ],
    constraints: [
      'Duties owed to the court and to the accused, not only to the case',
      'Published charging guidance, against which decisions are made and reviewed',
      'Disclosure obligations enforceable by the court, with failure capable of stopping proceedings',
      'Professional conduct regulation in addition to employer requirements',
    ],
    oversight: [
      'Internal review of significant decisions, including decisions not to prosecute',
      'Victim-initiated review mechanisms in some systems',
      'Judicial supervision of pre-trial applications and of disclosure',
      'Professional regulators',
    ],
    trainingRouteShape: [
      'A legal qualification, followed by entry to a prosecution service or to a judicial career track',
      'Structured training in charging standards, disclosure, and advocacy',
      'Progressive authorisation to handle more serious categories of case',
    ],
    commonMisunderstandings: [
      'That the prosecutor is the victim’s lawyer. Prosecutors act in the public interest and may take decisions a victim opposes.',
      'That sufficient evidence requires a prosecution. The public-interest stage exists so that prosecution is not automatic.',
    ],
    jurisdictionNote:
      'One of the most structurally variable roles in any justice system. Prosecutors may be civil servants, judicial officers, political appointees, or elected officials, and the service may sit inside a ministry or be constitutionally separate.',
    sources: ['un-prosecutors-guidelines'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'judge',
    title: 'Judge',
    summary:
      'The official who decides cases by applying law to established facts, gives reasons for the decision, and determines consequences within limits set by law.',
    section: 'courts',
    responsibilities: [
      'Ensuring proceedings are conducted fairly and that parties can present their case',
      'Deciding questions of law, and in many systems questions of fact',
      'Giving reasons capable of being examined, challenged, and appealed',
      'Determining sentence, remedy, or order within the limits law provides',
    ],
    decisionAuthority: [
      'Rulings on admissibility, procedure, and the conduct of the hearing',
      'Findings of fact, where the system assigns that to the judge rather than to a jury or lay panel',
      'The final determination and its consequences',
    ],
    constraints: [
      'Bound by legislation and, in common-law systems, by binding precedent',
      'Required to give reasons, which makes the decision reviewable',
      'Required to recuse where there is a conflict of interest',
      'Subject to appellate correction of legal error and procedural unfairness',
    ],
    oversight: [
      'Appeal, which is the primary corrective for a wrong decision',
      'Publication of judgments and, generally, public hearings',
      'Judicial conduct bodies examining behaviour as distinct from the merits of decisions',
    ],
    trainingRouteShape: [
      'Either appointment from legal practice, or entry to a judicial career with dedicated initial training, depending on the system',
      'Structured induction and continuing judicial education',
      'Assignment to progressively more serious categories of case',
    ],
    commonMisunderstandings: [
      'That security of tenure is a privilege of office. It exists so that a judge cannot be removed for deciding against the government, which is a protection for the people appearing before the court.',
      'That judges are unaccountable. Accountability is deliberately narrow — conduct and process, not the substance of decisions — because a mechanism able to punish conclusions would eliminate independence.',
    ],
    jurisdictionNote:
      'Appointment, tenure, and discipline arrangements differ fundamentally, and are frequently where the practical differences in judicial independence lie.',
    sources: ['iccpr'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'forensic-scientist',
    title: 'Forensic scientist',
    summary:
      'A specialist who examines material and reports findings for use in legal proceedings, stating what the findings establish and what they do not.',
    section: 'forensics',
    responsibilities: [
      'Examining material using validated methods',
      'Reporting findings with their limits, assumptions, and degree of confidence stated',
      'Maintaining records sufficient for the work to be checked by another examiner',
      'Giving evidence and being available to have the work challenged',
    ],
    decisionAuthority: [
      'What examination is appropriate to the question asked',
      'What conclusion the findings support, and how strongly',
      'When a question cannot be answered from the material available',
    ],
    constraints: [
      'Bound by validated methods and by the laboratory’s quality-management system',
      'Required to disclose underlying data and notes, not only conclusions',
      'Must not express a conclusion beyond what the method supports',
      'Independence from the investigative theory of the case',
    ],
    oversight: [
      'Accreditation bodies and proficiency testing',
      'Independent verification of interpretive conclusions',
      'Judicial admissibility scrutiny and cross-examination',
      'Post-conviction review where a discipline’s scientific foundation is re-examined',
    ],
    trainingRouteShape: [
      'A scientific qualification followed by discipline-specific competency training',
      'Assessed competence before independent casework',
      'Periodic proficiency testing and continuing competence assessment',
      'Separate training and assessment for giving evidence in court',
    ],
    commonMisunderstandings: [
      'That forensic results are conclusive. Many disciplines rest on comparative judgement, and a responsible finding states its limits.',
      'That absence of a finding means nothing happened. Material may never have been present, recoverable, or examined.',
    ],
    jurisdictionNote:
      'Whether experts are court-appointed or party-instructed, and whether accreditation is mandatory, differ substantially between systems.',
    sources: ['nas-forensic-2009', 'enfsi'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'corrections-officer',
    title: 'Corrections officer',
    summary:
      'The officer responsible for the safety, security, and lawful treatment of people held in custody, and for the daily operation of a place of detention.',
    section: 'corrections',
    responsibilities: [
      'The safety of people in custody, of colleagues, and of visitors',
      'Lawful and decent treatment consistent with applicable standards',
      'Supporting regimes, education, work, and health access',
      'Accurate recording of incidents, force, and decisions affecting detained people',
    ],
    decisionAuthority: [
      'Immediate operational decisions about safety and order',
      'Decisions within delegated authority on daily regime matters',
      'Referral of concerns about welfare, risk, or safeguarding',
    ],
    constraints: [
      'Detention removes liberty, not other rights; treatment is governed by standards that are externally inspected',
      'Force and restraint are subject to legal thresholds, recording, and review',
      'Disciplinary processes affecting detained people are procedurally regulated',
    ],
    oversight: [
      'Independent inspection of places of detention by bodies separate from the prison administration',
      'Monitoring boards, ombudsman offices, and complaints mechanisms',
      'Judicial oversight of detention and of decisions affecting release',
    ],
    trainingRouteShape: [
      'Initial training in law, safety, security, and interpersonal skills',
      'Supervised operational period',
      'Continuing training in safeguarding, restraint, and health-related recognition',
    ],
    commonMisunderstandings: [
      'That the role is only security. Regime delivery, safeguarding, and support for rehabilitation are core rather than incidental.',
      'That detained people lose their rights. International standards treat them as retaining rights other than those necessarily restricted by lawful detention.',
    ],
    jurisdictionNote:
      'Prison systems, oversight arrangements, and the balance between custodial and community sentences are among the most nationally specific parts of any justice system.',
    sources: ['mandela-rules'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
];

export const PUBLISHED_PROFESSIONS: readonly Profession[] = PROFESSIONS.filter(
  (profession) => profession.status === 'published',
);
