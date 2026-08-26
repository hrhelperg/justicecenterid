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
