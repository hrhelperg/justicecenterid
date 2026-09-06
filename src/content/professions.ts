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
    question: 'What does a patrol officer actually do?',
    purpose:
      'Someone has to be available to attend when something happens, without knowing in advance what it will be. That is the patrol officer’s function: general availability. It is why the role is defined by breadth rather than specialism, and why most of what it handles is not crime.',
    institutionalContext:
      'Found in municipal, national and gendarmerie-type forces alike, and the employing institution changes who directs the work and who reviews it far more than it changes the work itself.',
    ethicsNote:
      'The United Nations Code of Conduct for Law Enforcement Officials sets the baseline: officials perform the duty imposed on them by law, and force may be used only to the extent required for the performance of their duty. Because so many decisions are taken alone and at speed, the profession relies on standards that hold when nobody is watching rather than on supervision alone.',
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
    workingEnvironment: [
      'Shift work is the norm, because the function is availability and incidents do not keep office hours. Rotating shifts covering nights, weekends and public holidays are common, and the pattern is set by the employer rather than by any general rule.',
      'Most of a shift is spent outside a police building — in a vehicle, on foot, or at the address of whoever called.',
      'Work is usually done in a small crewed team or alone with radio contact, under a supervisor who reviews decisions afterwards rather than directing them at the time.',
      'Contact with the public is continuous and mostly with people who are not suspected of anything: callers, witnesses, people in distress, people who are lost, injured, or in mental-health crisis.',
      'A substantial part of the job is writing. What was done and why has to be recorded in a form that can be read by a supervisor, a prosecutor, a defence lawyer and sometimes a court, months later.',
      'Some of what the role attends is distressing, and exposure to it is not occasional. Employers differ in what support they provide, and that provision was not researched.',
    ],
    skills: [
      'Communication above all: explaining, de-escalating, questioning, and being understood by people who are frightened, angry, unwell or unwilling.',
      'Observation and recall — noticing what is present, what is absent, and what changed, and being able to account for it later.',
      'Judgement under time pressure and incomplete information, against a legal threshold rather than a hunch.',
      "Written accuracy. A record that cannot be understood, or that does not match what happened, damages a case and the officer's credibility.",
      'Teamwork and handover, because incidents pass between shifts and between units.',
      'Emotional steadiness and the ability to keep behaving professionally when the other person is not.',
    ],
    careerProgressionShape: [
      'The first period after training is normally probationary and supervised, whatever the system calls it.',
      'Progression tends to run along two separate axes: rank, which is supervisory and managerial authority, and specialisation, which is a different kind of work at the same or a similar rank. They are not the same ladder, and a system may allow movement along one without the other.',
      'Movement into investigation is treated differently between systems — in some it follows service in uniform, and in at least one it is a separate entry route from the start.',
      'Many systems require a qualifying period, an examination, a selection process, or all three, before a specialist or supervisory role is open.',
      'Continuing professional development and periodic re-certification in specific powers are usual, and are not optional extras.',
    ],
    adjacentCareers: [
      'Detective or investigator, for whom the patrol role is the usual route in many systems but not all — see [detective](/professions/detective).',
      'How entry, training and progression are organised across systems — see [what a police academy is](/law-enforcement/what-a-police-academy-is), [do police officers need a degree](/law-enforcement/do-police-officers-need-a-degree) and [how policing careers develop](/law-enforcement/how-policing-careers-develop).',
      'How people actually enter the role in a given country — see [who recruits police officers](/law-enforcement/who-recruits-police-officers) and [police entry requirements across systems](/law-enforcement/police-entry-requirements-across-systems).',
      'What a service issues for the work, and why the uniform is part of it — see [what police equipment is for](/law-enforcement/what-police-equipment-is-for) and [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform).',
      'What the work is like day to day, and the professional qualities it relies on — see [working life in policing](/law-enforcement/working-life-in-policing), [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on) and [physical readiness in policing careers](/law-enforcement/physical-readiness-in-policing-careers).',
      'Emergency dispatcher, which handles the same incidents from the other end of the radio — see [emergency dispatcher](/professions/emergency-dispatcher).',
      'Corrections officer, a custodial role with comparable shift patterns and a different legal function — see [corrections officer](/professions/corrections-officer).',
    ],
    jurisdictionNote:
      'Powers, training length, rank structures, and whether officers routinely carry firearms are set nationally and differ substantially, including between neighbouring countries.',
    relatedInstitutions: ['municipal-police', 'national-police', 'gendarmerie'],
    relatedProfessions: ['detective'],
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'A French officer may be a national police officer, a gendarme of military status, or a municipal agent acting under the mayor’s authority with narrower powers. The uniform on the street does not tell a member of the public which, and the three answer to different authorities.',
      },
      {
        countrySlug: 'japan',
        note: 'Japanese officers are employed by prefectural police under a national framework supervised by the National Public Safety Commission — national standards, local employment.',
      },
    ],
    sources: [
      'un-code-of-conduct-1979',
      'unodc-e4j-use-of-force',
      'unodc-cpcj',
      'fr-code-defense-l3211-3',
      'fr-csi-l511-1',
      'jp-npa-police-of-japan-2020',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'detective',
    title: 'Detective / investigator',
    summary:
      'An officer or official responsible for establishing what happened in a reported offence and gathering evidence capable of being tested in court.',
    section: 'investigations',
    question: 'What does a detective do, and who supervises the work?',
    purpose:
      'Establishing what happened after the fact is a distinct skill from responding while it happens, and it carries a distinct danger: an investigator who forms a view early can gather evidence that confirms it. Most of the structure around the role exists to counter that.',
    institutionalContext:
      'Sits inside general police services and inside federal or national investigative agencies. The single most consequential variable is whether the investigation is led by the police, directed by a prosecutor, or supervised by an investigating judge.',
    ethicsNote:
      'The obligation that defines the role is the duty to pursue lines of enquiry that point away from the suspect, and to disclose material that undermines the case. Both are professional duties before they are legal ones, and both cut against the natural incentive of the person who built the case.',
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
    workingEnvironment: [
      'Work is organised around cases rather than shifts, though shift or on-call patterns are common where investigations must begin immediately.',
      'More time is spent at a desk than the popular image suggests: reviewing material, planning, writing, and preparing files.',
      'Interviews and enquiries are conducted with victims, witnesses and suspects, and the majority of contact is with people who are not suspects.',
      'Investigations are usually team efforts with a supervisor accountable for direction, and in many systems a prosecutor or investigating judge has a formal role in that direction.',
      'Cases can run for months, and holding several at once at different stages is normal.',
      'Some material examined is distressing, and in some specialisms that is routine rather than exceptional.',
    ],
    skills: [
      'Structured analytical thinking: building an account from incomplete material and testing it rather than confirming it.',
      'Interviewing, which is a trained professional skill governed by law and standards in most systems.',
      'Written communication, because the product of an investigation is a file that other professionals must be able to follow.',
      'Organisation and disclosure discipline — knowing what exists, where it is, and what must be revealed to the defence.',
      'Working with specialists whose findings the investigator must understand well enough to use accurately and not overstate.',
      "Scepticism about one's own conclusions, which is the professional habit most directly protective of an innocent person.",
    ],
    careerProgressionShape: [
      'Entry differs fundamentally between systems: in many, investigation is reached after service in uniform; in the Netherlands a bachelor Rechercheur is one of the entry routes into the police, so a person may be admitted to investigative training at the start.',
      'Where investigation is reached later, a qualifying period, selection and a specialist course are typical.',
      'Specialisation within investigation is extensive — economic crime, cybercrime, serious violence, child protection, and others.',
      'In some systems detective is a rank; in others a designation or assignment held at an ordinary rank; and in others again a separate occupational structure — see [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation).',
      'Supervisory progression usually means managing investigations and investigators rather than conducting enquiries personally.',
    ],
    adjacentCareers: [
      'Patrol officer, the route into investigation in many systems — see [patrol officer](/professions/patrol-officer).',
      'Forensic scientist, whose findings an investigator uses but does not produce — see [forensic scientist](/professions/forensic-scientist).',
      'Prosecutor, who in several systems directs or reviews the investigation — see [prosecutor](/professions/prosecutor).',
      'How investigative work is reached, and how it sits against rank and specialisation — see [how policing careers develop](/law-enforcement/how-policing-careers-develop) and [specialist roles in policing](/law-enforcement/specialist-roles-in-policing).',
    ],
    jurisdictionNote:
      'Whether investigations are led by police, directed by a prosecutor, or supervised by an investigating judge is a fundamental structural difference, and most of the rest of the role follows from it.',
    relatedInstitutions: ['federal-investigative-agency', 'national-police'],
    relatedProfessions: ['patrol-officer', 'prosecutor', 'forensic-scientist'],
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'Investigation is spread across thousands of separate agencies plus federal bodies whose authority is tied to federal offences by statute, so "the investigating agency" depends on which offence is alleged rather than on where it happened.',
      },
      {
        countrySlug: 'germany',
        note: 'Germany illustrates the prosecutor-led model, in which the investigation is formally directed by the prosecution service rather than concluded by police and passed on — a different distribution of the same work.',
      },
    ],
    sources: ['unodc-cpcj', 'iccpr', 'uk-pace-1984', 'de-stpo-160', 'us-bjs-csllea-2018'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'prosecutor',
    title: 'Prosecutor',
    summary:
      'The public official who decides whether a criminal case is brought, on what charges, and who presents it in court on behalf of the public.',
    section: 'prosecution',
    question: 'What does a prosecutor decide, and on whose behalf?',
    purpose:
      'The prosecutor exists so that the decision to put someone on trial is taken by somebody other than the person who investigated them, against published standards, in the public interest rather than any party’s interest.',
    institutionalContext:
      'Employed by a prosecution service whose placement — constitutionally separate, inside a ministry, or within a judicial career — is what determines how insulated the office is from the executive.',
    ethicsNote:
      'The United Nations Guidelines on the Role of Prosecutors state the standards: impartiality, protection of the public interest, respect for human dignity, and the separation of prosecutorial from judicial functions. The duty to disclose material that damages one’s own case is the clearest expression of a role that is not simply an advocate for conviction.',
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
    workingEnvironment: [
      'Substantially office and court based, with case files as the main material.',
      'Caseloads are typically carried in parallel at different stages, with court dates fixed by the court rather than by the prosecutor.',
      'The work is largely reading, assessing and writing, punctuated by hearings.',
      'Contact is mostly with other professionals — investigators, defence lawyers, courts, and in many systems victims and witnesses directly.',
      'Deadlines are externally imposed and often statutory, which shapes the working pattern more than in most professions.',
    ],
    skills: [
      'Legal analysis applied to evidence that is incomplete, contested, or both.',
      'Judgement about sufficiency and public interest, which is a decision the role owns.',
      'Written and oral advocacy, addressed to a court rather than to a general audience.',
      'Disclosure discipline, which is a professional duty owed regardless of its effect on the case.',
      'Independence of mind, including from the investigators whose work is being assessed.',
    ],
    careerProgressionShape: [
      'Entry normally requires a legal qualification, and in many systems a specific professional examination or training period beyond the law degree.',
      'Whether prosecutors and judges form one career or two is a structural difference between systems, not a detail — in some, movement between them is a normal career step.',
      'Progression commonly runs through case seriousness and complexity before it runs through management.',
      'Specialisation by offence type is common in larger services.',
    ],
    adjacentCareers: [
      'Judge, which in some systems is part of the same career structure — see [judge](/professions/judge).',
      'Defence lawyer, the opposing professional function with a different duty — see [defence lawyer](/professions/defence-lawyer).',
      'Detective or investigator, whose work the prosecutor assesses and in several systems directs — see [detective](/professions/detective).',
    ],
    jurisdictionNote:
      'One of the most structurally variable roles in any justice system. Prosecutors may be civil servants, judicial officers, political appointees, or elected officials, and the service may sit inside a ministry or be constitutionally separate.',
    relatedInstitutions: ['prosecution-service'],
    relatedProfessions: ['judge', 'detective'],
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'French prosecutors are magistrats of the parquet — the same professional body as judges, but without the guarantee of irremovability judges hold, which is exactly where the debate about their independence sits.',
      },
      {
        countrySlug: 'japan',
        note: 'Japan places prosecutors within the Ministry of Justice, a placement that puts the independence question in institutional rather than electoral terms — the same function, insulated by a quite different mechanism from the French one above.',
      },
    ],
    sources: [
      'un-prosecutors-guidelines',
      'unodc-cpcj',
      'fr-justice-parquet',
      'jp-moj-prosecutors',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'judge',
    title: 'Judge',
    summary:
      'The official who decides cases by applying law to established facts, gives reasons for the decision, and determines consequences within limits set by law.',
    section: 'courts',
    question:
      'What does a judge do, and how can a judge be accountable and independent at once?',
    purpose:
      'Disputes need a decision-maker with no stake in the outcome. Everything distinctive about the office — tenure, reasons, recusal, appeal — follows from that single requirement, which is why the protections look like privileges and function as constraints.',
    institutionalContext:
      'Sits in a court system whose relationship to the executive is set constitutionally. Whether judges are appointed from practice or enter a career judiciary changes training, promotion and discipline substantially.',
    ethicsNote:
      'The obligation is to decide on the law and the evidence, to give reasons that can be examined, and to step aside where interest or appearance of interest arises. The International Covenant on Civil and Political Rights frames the reader-facing side of this as a right: a competent, independent and impartial tribunal established by law.',
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
    workingEnvironment: [
      'Court sitting time is only part of the work; reading papers before a hearing and writing decisions afterwards occupy a large share of it.',
      'Much of the role is conducted alone, and in many systems the writing of reasons is done individually even where a panel decides.',
      'Hearings are scheduled, so the working pattern is more predictable than in operational roles, and less flexible.',
      'The role is deliberately insulated from the parties, which limits the ordinary professional contact other roles rely on.',
    ],
    skills: [
      'Reasoned decision-making, and the ability to explain a decision so that the losing party can understand why.',
      'Impartiality in practice, including recognising when one should not hear a case.',
      'Listening, and managing a hearing so that both sides are genuinely heard.',
      'Legal analysis and the discipline of deciding on the evidence and argument actually presented.',
      "Clear writing, because in most systems the reasons are the decision's public form.",
    ],
    careerProgressionShape: [
      'Entry routes differ structurally: appointment from practice after a substantial career, and career judiciaries entered by examination soon after qualification, are both established models.',
      'Where a career judiciary exists, progression through court levels is a normal expectation; where judges are appointed from practice, it usually is not.',
      'Specialisation by jurisdiction — criminal, civil, family, administrative — is common at all levels.',
      'Judicial independence constrains how progression may operate, because a promotion system controlled by the executive would compromise it.',
    ],
    adjacentCareers: [
      'Prosecutor, which in some systems shares a career structure with the judiciary — see [prosecutor](/professions/prosecutor).',
      'Defence lawyer, one of the practice backgrounds judges are appointed from in many systems — see [defence lawyer](/professions/defence-lawyer).',
    ],
    jurisdictionNote:
      'Appointment, tenure, and discipline arrangements differ fundamentally, and are frequently where the practical differences in judicial independence lie.',
    relatedInstitutions: ['prosecution-service'],
    relatedProfessions: ['prosecutor'],
    countryExamples: [
      {
        countrySlug: 'germany',
        note: 'The Basic Law states judicial independence directly — judges are independent and subject only to the law — and provides that permanently appointed judges may not be dismissed, suspended, transferred or retired without their consent. Tenure is written into the constitution rather than left to practice.',
      },
      {
        countrySlug: 'japan',
        note: 'Japan vests the whole judicial power in the Supreme Court and inferior courts established by law, with no extraordinary tribunal permitted and judges bound by the Constitution and the laws — the same principle expressed through a different constitutional architecture.',
      },
    ],
    sources: ['iccpr', 'un-rule-of-law', 'de-grundgesetz', 'jp-courts-judicial-system'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'forensic-scientist',
    title: 'Forensic scientist',
    summary:
      'A specialist who examines material and reports findings for use in legal proceedings, stating what the findings establish and what they do not.',
    section: 'forensics',
    question: 'What does a forensic scientist do, and how reliable are the findings?',
    purpose:
      'Courts need physical material interpreted by someone competent to say what it does and does not establish. The value of the role lies as much in stating limits as in stating conclusions, because an overstated forensic conclusion is very difficult for a court to correct.',
    institutionalContext:
      'Works in laboratories that may sit inside a police service, in a separate state institute, or in a private provider — a placement that bears directly on the independence of the interpretation.',
    ethicsNote:
      'The governing duty is to the court rather than to the party instructing the work, and not to express a conclusion beyond what the method supports. The 2009 United States National Academy of Sciences review found that several forensic disciplines lacked the research foundation to support the strength of the claims then being made for them — which is why understating certainty is the professional norm rather than a courtesy.',
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
    workingEnvironment: [
      'Predominantly laboratory based, with formal procedures governing how material is received, handled, examined and recorded.',
      'Some roles include scene attendance, which introduces irregular hours; many do not.',
      'The work is methodical and documented, because the record of what was done is part of what is being produced.',
      'Court attendance to give evidence is periodic rather than constant, and is a distinct skill from the examination itself.',
      'Casework is usually prioritised by others, and backlogs are a normal feature of the environment.',
    ],
    skills: [
      'Scientific method applied under quality-management and accreditation requirements.',
      'Precision about what a finding does and does not establish — the single most important professional skill in the role.',
      'Written reporting for a non-scientific audience that will rely on it.',
      'Giving evidence: explaining a method and its limits under questioning without overstating the conclusion.',
      'Contamination awareness and procedural discipline, since an examination that cannot be trusted is worse than none.',
    ],
    careerProgressionShape: [
      'Entry normally requires a relevant scientific qualification, with the discipline determining which.',
      'Competence in a specific examination type is usually certified separately from the underlying degree, and is what actually authorises casework.',
      'Progression runs through discipline specialisation, reporting authority and expert-witness status rather than through supervising officers.',
      'Movement into quality management, research or training is common at senior levels.',
    ],
    adjacentCareers: [
      'Detective or investigator, who commissions and uses the examination — see [detective](/professions/detective).',
      'Civilian analytical and support roles inside police organisations — see [civilian roles in police organisations](/law-enforcement/civilian-roles-in-police-organisations).',
    ],
    jurisdictionNote:
      'Whether experts are court-appointed or party-instructed, and whether accreditation is mandatory, differ substantially between systems.',
    relatedInstitutions: ['national-police', 'federal-investigative-agency'],
    relatedProfessions: ['detective'],
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'The 2009 National Academy of Sciences review examined the American forensic system specifically, and its findings about the research foundation of several disciplines were a critique of arrangements in one country — not a global audit, though the scientific questions it raised travel.',
      },
    ],
    uncertainty: [
      'The two principal sources here are a United States review and a European network’s standards. Both are authoritative for the systems they address, and neither establishes how forensic science is organised or regulated outside them.',
    ],
    sources: ['nas-forensic-2009', 'enfsi'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'corrections-officer',
    title: 'Corrections officer',
    summary:
      'The officer responsible for the safety, security, and lawful treatment of people held in custody, and for the daily operation of a place of detention.',
    section: 'corrections',
    question: 'What does a corrections officer do?',
    purpose:
      'A sentence of imprisonment has to be carried out by someone, safely and lawfully, every day. The role exists to make custody something a state can impose without it becoming something other than what the court ordered.',
    institutionalContext:
      'Employed by a prison administration that may be a ministry, an executive agency, a regional authority or a contracted provider, and in federal states the answer often differs by level of government within one country.',
    ethicsNote:
      'The United Nations Standard Minimum Rules for the Treatment of Prisoners set the baseline: people in custody retain rights other than those necessarily restricted by lawful detention. The role holds daily authority over people who cannot leave, which is why recording, restraint thresholds and external inspection are treated as core rather than administrative.',
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
    workingEnvironment: [
      'Shift work covering nights, weekends and holidays, because a custodial institution operates continuously.',
      'The workplace is a single secure site, and the same people are encountered daily over long periods — a relationship pattern unlike any other role in the justice system.',
      'Most of the work is routine operation: movement, roll calls, supervision of activities, and responding to requests.',
      'The role is relational far more than it is physical. Knowing the people held, noticing change, and defusing situations before they escalate is the substance of it.',
      'Recording is continuous, because decisions affecting a detained person must be accountable.',
      'The environment includes exposure to distress, self-harm and violence. Employers differ in what support they provide, and that provision was not researched.',
    ],
    skills: [
      'Communication and de-escalation, used constantly and far more often than any physical intervention.',
      'Consistency and fairness, because perceived arbitrariness is itself a source of instability.',
      'Observation — recognising when something about a person or a landing has changed.',
      'Procedural discipline, since security routines fail when they are performed inconsistently.',
      "Written accuracy in records affecting a person's liberty, treatment and release.",
      'Emotional resilience and the ability to maintain professional boundaries over long-term contact.',
    ],
    careerProgressionShape: [
      'An initial training period followed by a supervised probationary period is the usual shape.',
      'Progression runs through supervisory rank, and separately through specialist functions such as security, intelligence, offender management or training.',
      'Movement into rehabilitation, resettlement and offender-management roles is a common direction.',
      'Whether the service is run by a ministry, an agency, or contracted providers changes the employer and the career structure, but less often the daily work.',
    ],
    adjacentCareers: [
      'Patrol officer, a comparable shift-based public-service role with a different legal function — see [patrol officer](/professions/patrol-officer).',
      'Probation and offender-management work, which continues with the same people outside custody — see [what reintegration means](/corrections/what-reintegration-means).',
      'Emergency dispatcher, another continuously staffed control role — see [emergency dispatcher](/professions/emergency-dispatcher).',
      'The shift-based working pattern shared across continuously staffed public-safety roles — see [working life in policing](/law-enforcement/working-life-in-policing).',
    ],
    jurisdictionNote:
      'Prison systems, oversight arrangements, and the balance between custodial and community sentences are among the most nationally specific parts of any justice system.',
    relatedInstitutions: ['correctional-service'],
    relatedProfessions: ['patrol-officer'],
    countryExamples: [
      {
        countrySlug: 'canada',
        note: 'Canada divides custody between federal and provincial administrations by sentence length, so an officer’s employer, rules and inspection regime depend on the sentence the court imposed rather than on the offence.',
      },
      {
        countrySlug: 'japan',
        note: 'Japan places corrections inside the Ministry of Justice, keeping custody administratively close to the rest of the justice system rather than in a separate agency.',
      },
    ],
    sources: [
      'mandela-rules',
      'coe-space-i-2024',
      'ca-statcan-corrections',
      'jp-moj-corrections',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },

  /* ------------------------------------------------------------------------
     Wave 14 — the defence lawyer.

     Wave 11 identified this as a genuine gap and did not fill it, because the
     evidence then in hand described defence FUNDING rather than the profession.
     The gate applied here was whether primary text supports each field the record
     must carry. Two systems constitute the lawyer in law — BRAO § 1 and CF Art. 133
     with Lei 8.906 Art. 2 — and both vest admission and discipline in a professional
     body. That earns the record. What is NOT earned, and is stated rather than
     invented, is the qualification route in any country: no source for it was
     obtained, so trainingRouteShape stays structural, as the schema requires.
     ------------------------------------------------------------------------ */
  {
    slug: 'defence-lawyer',
    title: 'Defence lawyer',
    shortTitle: 'Defence lawyer',
    summary:
      'The legally admitted professional who acts for a person facing a criminal case — constituted in some systems as an organ of the administration of justice rather than as a private service provider.',
    section: 'defence',
    question: 'What is a defence lawyer, and who decides who may be one?',
    purpose:
      'The International Covenant on Civil and Political Rights states the declared standard that a person charged is entitled to defend themselves in person or through legal assistance of their own choosing, and to communicate with counsel — a declared standard rather than the law of any particular state. Domestically, a person facing the state in a criminal case is opposed by professionals and bound by procedure they did not design. The role exists so that the case against them is actually tested — which is a condition of the verdict being worth anything, not a favour to the accused. Two of the systems described here say so in their own texts: the lawyer is placed inside the administration of justice rather than beside it.',
    institutionalContext:
      'Germany constitutes the Rechtsanwalt by statute as an independent organ of the administration of justice, admitted by a Rechtsanwaltskammer formed for the district of each Oberlandesgericht. Brazil makes the advogado constitutionally indispensable to the administration of justice, with the exercise of advocacy and the designation itself exclusive to those inscribed in the Ordem dos Advogados do Brasil. In both, admission sits with a professional body rather than with a government department — Brazilian statute stating expressly that the body maintains no functional or hierarchical link with organs of public administration.',
    ethicsNote:
      'German law states the basic duties directly: the Rechtsanwalt may enter into no ties that endanger their professional independence; is bound to confidentiality covering everything that has become known in the exercise of the profession, excepting facts that are obvious or by their significance require no secrecy; may not conduct themselves unobjectively, which the provision defines as including the knowing dissemination of untruths or disparaging statements the proceedings gave no occasion for; and may not act where they have already advised or represented another client in the same matter in a conflicting interest. Independence, confidentiality, objectivity and freedom from conflicts are not aspirations attached to the role — they are its statutory content.',
    responsibilities: [
      'Advising the accused person on their legal position and on the decisions that are theirs to make',
      'Obtaining and examining the material the case rests on, so far as the applicable code allows',
      'Testing whether the case is proved to the standard the law requires',
      'Ensuring the procedures the law provides are actually followed',
      'Acting for the client’s legal interests, which is not the same as acting on their instructions in every particular',
    ],
    decisionAuthority: [
      'How the defence is conducted, within the client’s instructions and the professional rules',
      'What applications to make and what material to challenge',
      'Whether a conflict prevents acting at all — a decision the lawyer must take against their own interest',
    ],
    constraints: [
      'Confidentiality binds the lawyer and is not absolute in any system researched here',
      'Acting is prohibited where the lawyer has advised or represented another client in the same matter in a conflicting interest',
      'Conduct in proceedings is regulated: German law forbids unobjective conduct in defined terms',
      'Access to case material is governed by the applicable code and may be restricted at defined stages',
    ],
    oversight: [
      'Admission and discipline by a professional body rather than by a government department',
      'In Germany, the Rechtsanwaltskammer that admitted or received the member',
      'In Brazil, the OAB, which statute gives exclusively the representation, defence, selection and discipline of advogados nationwide, through a Conselho Federal and Conselhos Seccionais',
      'Judicial control of the proceedings in which the lawyer appears',
    ],
    trainingRouteShape: [
      'A law qualification, followed by a period of supervised or practical preparation',
      'Admission by the professional body that will hold the disciplinary jurisdiction, rather than by the state directly',
      'Continuing professional obligations that persist for as long as admission does',
    ],
    commonMisunderstandings: [
      'That the role is to secure an acquittal whatever the facts. It is to protect the accused person’s legal interests and to make the case be proved, which is a different assignment and one the law defines.',
      'That a defence lawyer is a private service provider like any other. German law makes the Rechtsanwalt an independent organ of the administration of justice; Brazilian law makes the advogado indispensable to that administration and describes their private ministry as rendering a public service.',
      'That "defence lawyer" names one thing across systems. Lawyer, barrister, solicitor, advocate, attorney, advogado and Rechtsanwalt are terms of the systems that use them, several coexist within a single system with different rights, and none is a translation of the others.',
      'That a court-appointed or publicly funded lawyer is a state employee. Appointment assigns a lawyer to a case; employment is a relationship between a lawyer and an organisation, and the defence cluster sets out how differently systems combine the two.',
      'That because the profession is regulated, it answers to the government. In the systems described here admission and discipline sit with a professional body, and Brazilian statute states expressly that the body maintains no functional or hierarchical link with public administration.',
    ],
    workingEnvironment: [
      'A mixture of office work, custodial visits, and court attendance, with the balance depending on the stage of the case.',
      'Attendance at a police station can be required at short notice, including at night, where the system provides for it.',
      'Multiple cases are carried in parallel, with court listing controlling the diary.',
      'Contact with clients is direct and often at the worst point in their lives, which shapes the working experience of the role.',
      'Whether the work is salaried, contracted or privately instructed changes the working pattern considerably.',
    ],
    skills: [
      'Legal analysis directed at testing the prosecution case rather than constructing one.',
      'Client communication — explaining law, options and consequences to someone under acute stress.',
      'Advocacy, written and oral.',
      'Judgement about what to challenge and what not to, which is where experience shows most.',
      'Confidentiality and independence, which are professional duties rather than preferences.',
    ],
    careerProgressionShape: [
      'Entry requires a legal qualification and, in most systems, a further professional stage before independent practice.',
      'Early practice is normally supervised, whatever the system calls the arrangement.',
      'Progression runs through case seriousness and rights of audience before higher courts, and separately through practice management or a salaried defender structure.',
      'Whether defence is organised as private practice, a public defender service, or a mixed model changes the career shape substantially.',
    ],
    adjacentCareers: [
      'Prosecutor, the opposing function with a different professional duty — see [prosecutor](/professions/prosecutor).',
      'Judge, appointed from practice in many systems — see [judge](/professions/judge).',
    ],
    jurisdictionNote:
      'What a defence lawyer may do, what they are called, who admits them and what they are constituted as differ in every system. England and Wales does not constitute lawyers as a status at all — the Legal Services Act reserves six named activities and determines entitlement by authorisation or exemption for each. Nothing in this record should be read as describing a system it does not name.',
    uncertainty: [
      'Qualification routes were not researched for any country: no source establishing examinations, training periods or entry requirements was obtained, so trainingRouteShape is structural only and names no country.',
      'Remuneration, numbers, distribution and specialisation within the profession were not researched and are not described.',
      'Only two systems constitute the profession in the primary text read here. The English and Welsh material describes the regulation of activities, not the profession, and no French source could be obtained — legifrance.gouv.fr returned HTTP 403, which is an access limitation and not evidence about French arrangements.',
    ],
    relatedInstitutions: ['prosecution-service'],
    relatedProfessions: ['prosecutor', 'judge'],
    countryExamples: [
      {
        countrySlug: 'germany',
        note: 'Section 1 of the Federal Lawyers’ Act consists of a single sentence — the Rechtsanwalt is an independent organ of the administration of justice — and section 3 adds that everyone has the right, within the statutory provisions, to be advised and represented by a Rechtsanwalt of their choice, with the right of audience restrictable only by federal statute.',
      },
      {
        countrySlug: 'brazil',
        note: 'Article 133 of the Constitution makes the advogado indispensable to the administration of justice and inviolable for their acts and statements in the exercise of the profession, within the limits of the law. Lei 8.906/1994 reserves postulation and legal consultancy to those inscribed in the OAB — expressly excepting the petition of habeas corpus, which anyone may make.',
      },
    ],
    sources: [
      'de-brao-anwaltschaft',
      'br-cf-1988',
      'br-lei-8906-1994-oab',
      'uk-legal-services-act-2007',
      'iccpr',
      'de-stpo-137-verteidiger',
      'de-stpo-147-akteneinsicht',
      'de-stpo-148-verkehr-verteidiger',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
  },
  /*
   * WAVE 24. Two civilian records, added because the corpus portrayed police organisations as
   * consisting only of sworn officers — `dispatcher` occurred ZERO times across the whole corpus
   * and `analyst` once, in a forensic-science aside. Part T of the wave brief treats that as an
   * accuracy problem before it is an audience problem: a police organisation that is described
   * as entirely sworn is described wrongly.
   *
   * Neither record states any country's entry requirements, for the reason given at the top of
   * this file.
   */
  {
    slug: 'emergency-dispatcher',
    title: 'Emergency dispatcher',
    shortTitle: 'Dispatcher',
    summary:
      'The person who answers an emergency call, works out what is happening and who should go, and passes on what responders need — a decision taken before anyone has seen the incident.',
    section: 'public-safety',
    question: 'What does an emergency dispatcher do?',
    purpose:
      'Someone has to convert an incomplete, often frightened account into a decision about what to send and how urgently. That decision is made before any responder has seen anything, which is why it is a distinct profession rather than an administrative step.',
    institutionalContext:
      'Employed in control rooms that may serve one service or several. Whether a control room handles police alone, or police, fire and ambulance together, and whether it is run by the police organisation or by a separate authority, differs between systems and sometimes within one country.',
    ethicsNote:
      'The role holds information about people at their most vulnerable and makes decisions that allocate scarce resources. Confidentiality, impartiality between callers, and accurate recording are professional obligations, not preferences — the recording of a call is frequently examined afterwards.',
    responsibilities: [
      'Answering emergency and non-emergency contacts and establishing what is happening',
      'Classifying and prioritising an incident against the service\u2019s own criteria',
      'Deciding or recommending what resource is sent, and passing the information responders need',
      'Giving instructions to a caller where the service provides for it, including safety and first-aid guidance',
      'Maintaining a live picture of an incident and of which units are committed',
      'Creating the record on which everything that follows depends',
    ],
    decisionAuthority: [
      'How an incident is classified and how urgently it is treated, within the service\u2019s criteria',
      'What is dispatched, or what is recommended to a supervisor where dispatch is separately controlled',
      'When to escalate to a supervisor or to another service',
    ],
    constraints: [
      'Classification and dispatch follow published criteria rather than personal judgement alone',
      'Calls and dispatch decisions are recorded and are routinely reviewed afterwards',
      'The role does not attend incidents and does not exercise police powers',
      'Information handling is governed by data-protection and confidentiality rules',
    ],
    oversight: [
      'Supervisory review of recorded calls and dispatch decisions',
      'Service-level performance monitoring of the control room as a whole',
      'Examination of call recordings in complaints, inquests and criminal proceedings',
    ],
    trainingRouteShape: [
      'An initial training period covering call handling, classification criteria, systems and legal duties',
      'A supervised period taking live calls before working unsupervised',
      'Separate certification for specific functions, such as giving pre-arrival medical instructions, where the service provides them',
      'Continuing training as criteria and systems change',
    ],
    workingEnvironment: [
      'Control-room based, seated, at a workstation with multiple screens and a radio channel.',
      'Continuous shift coverage including nights, weekends and holidays, because emergency contact does not stop.',
      'The work is auditory and verbal almost entirely — the dispatcher never sees the incident.',
      'Sustained concentration across a shift, with calls arriving in unpredictable bursts.',
      'Exposure to distressing calls is routine rather than exceptional, and the caller often cannot be helped in the way they want.',
      'Colleagues are physically present in the same room, which makes the role more team-based than it appears from outside.',
    ],
    skills: [
      'Listening for the information that matters while a caller is giving information in the order it occurs to them.',
      'Questioning that is structured and calm without sounding indifferent.',
      'Rapid classification against criteria, under time pressure, on incomplete information.',
      'Simultaneous working: talking, typing and reading a live resource picture at once.',
      'Emotional control, and the professional discipline of staying useful to a caller who is not.',
      'Accurate, fast written recording, because the responder acts on what was typed rather than what was heard.',
    ],
    careerProgressionShape: [
      'An initial supervised period is standard before working independently.',
      'Progression commonly runs through call handling to dispatch to supervisory control-room roles, though services organise these differently and some combine them.',
      'Specialisation exists in training, quality assurance, systems, and major-incident coordination.',
      'Movement into other roles within the same organisation is a normal path, including into analysis and, where a person is eligible and chooses to apply, into sworn roles.',
    ],
    adjacentCareers: [
      'Patrol officer, who is at the other end of the radio and acts on the dispatcher\u2019s classification — see [patrol officer](/professions/patrol-officer).',
      'Civilian analytical and support roles inside police organisations — see [civilian roles in police organisations](/law-enforcement/civilian-roles-in-police-organisations).',
      'Corrections officer, a comparable continuously staffed public-service role — see [corrections officer](/professions/corrections-officer).',
    ],
    commonMisunderstandings: [
      'That the role simply passes calls on. Classification and prioritisation are decisions, made against criteria, and they determine what happens next.',
      'That the role is simply a telephone job. Classification and prioritisation are decisions taken against published criteria before any responder has seen anything.',
      'That call handling and dispatch are one job. Many services separate them, and a large control room may have people doing only one.',
    ],
    jurisdictionNote:
      'Whether a control room serves one emergency service or several, whether it is operated by the police or by a separate authority, whether call handling and dispatch are separate roles, and what emergency number reaches it, are all set nationally or locally and differ substantially. No entry requirement is stated here for any country.',
    countryExamples: [
      {
        countrySlug: 'netherlands',
        note: 'The Dutch national police call the role centralist meldkamer, and describe the regional meldkamer task in one sentence that contains both halves of the job: "je neemt de spoedeisende meldingen (112) aan en stuurt de eenheden op straat aan" — you take the emergency 112 reports and direct the units on the street. Taking the call and directing the response are named together, which is not how every service divides the work.',
      },
    ],
    relatedInstitutions: ['national-police', 'municipal-police'],
    relatedProfessions: ['patrol-officer'],
    uncertainty: [
      'Only the Netherlands was researched for this role, and only the published description of the function. No country\u2019s entry requirements, selection process, training length or working conditions were researched.',
      'Whether and how services provide psychological support for exposure to distressing calls was NOT RESEARCHED, though the exposure itself is inherent to the role.',
      'Whether the role is held by civilian staff or by sworn officers was NOT ESTABLISHED for the Netherlands: the official page describing the work does not state the employment classification, and it is not assumed here.',
    ],
    sources: ['nl-politie-meldkamer', 'nl-politie-opleidingsoverzicht', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
  },
];

export const PUBLISHED_PROFESSIONS: readonly Profession[] = PROFESSIONS.filter(
  (profession) => profession.status === 'published',
);

/**
 * The records that become canonical pages at /professions/{slug}.
 *
 * Same rule as the institution registry: `fact-checked` is the claim a canonical page
 * makes, so it is what earns a route, and `validateProfessionPublication` checks the
 * substance behind the label. See the note at the head of src/content/institutions.ts.
 */
export const ROUTED_PROFESSIONS: readonly Profession[] = PUBLISHED_PROFESSIONS.filter(
  (profession) => profession.review === 'fact-checked',
);

export function getProfession(slug: string): Profession | undefined {
  return ROUTED_PROFESSIONS.find((profession) => profession.slug === slug);
}

/** Canonical path for a routed profession. */
export function professionPath(profession: Profession): string {
  return `/professions/${profession.slug}`;
}
