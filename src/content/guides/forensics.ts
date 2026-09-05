import type { Guide } from '../types';

/**
 * Forensics and evidence systems — Wave 16.
 *
 * The section held one guide before this wave: `what-is-forensic-science`, which lives in
 * process.ts and establishes the general case — forensic science answers narrow questions, does
 * not establish who committed an offence, and varies in scientific foundation between
 * disciplines. None of that is repeated here.
 *
 * What was absent everywhere is the INSTITUTIONAL and PROCEDURAL layer: who appoints the expert,
 * what a report must contain, who regulates quality and with what sanction, who investigates a
 * death, what a statute permits a DNA sample to be asked, and what the published
 * scientific-foundation work actually found.
 *
 * TWO DISCIPLINES GOVERN THE FILE.
 *
 * SAFETY. `forensics` is a safety-sensitive section. Nothing here describes how a technique is
 * performed, how a result could be defeated, avoided, degraded or contaminated, how a device
 * could be sanitised, or how any threshold could be exploited. `digital-evidence` was deferred
 * partly on that ground: it is where the line between institutional description and
 * anti-forensic instruction is thinnest.
 *
 * SCIENTIFIC INTEGRITY. Forensic science does not decide guilt, and it is also not unreliable.
 * Both overclaims are tested for. Where a limitation is stated it comes from a published
 * scientific-foundation review, in its final form, quoted rather than characterised.
 */
export const FORENSICS_GUIDES: readonly Guide[] = [
  /* ---------------------------------------------------------------------- */
  /* The boundary                                                           */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'what-forensic-science-cannot-decide',
    title: 'What forensic science cannot decide',
    shortTitle: 'What it cannot decide',
    question: 'If the science says it is a match, is the case not over?',
    summary:
      'No, and the reason is structural rather than a matter of caution. Examiners answer questions about material; courts answer questions about people. Two legal systems make the boundary visible in their own texts — one by bounding what an examination may determine, the other by bounding what an expert may say.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'expert-evidence-in-court',
      'the-limits-of-forensic-evidence',
      'what-is-forensic-science',
    ],
    sources: ['de-stpo-81e-dna', 'uk-crimpr-2025-part19', 'nist-scientific-foundation-reviews'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['forensic-science', 'expert-evidence', 'evidence'],
    uncertainty: [
      'Two legal systems are described from primary text. How courts in either weigh forensic evidence in practice is case law this platform has not researched.',
      'This page describes the boundary between examination and adjudication. It does not describe admissibility rules, which differ in every jurisdiction and are not set out here.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A forensic examination produces a statement about material: what a substance is, whether two samples share characteristics, what a record contains. A criminal case asks something else: whether a particular person did a particular thing, with a particular state of mind, in circumstances the law defines. The gap between those two questions is not a gap in the science. It is the difference between a measurement and a verdict.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains where forensic examination stops and legal decision begins, using provisions from two systems. It describes no technique, it is not legal advice, and it makes no claim about any case or any individual discipline’s reliability.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The confusion is not the public’s fault. A forensic result arrives with the authority of a laboratory and the vocabulary of certainty, and it is usually reported as though it answered the question everyone is actually asking. It rarely does. A finding that two samples share characteristics leaves open how the material got there, when, and whether its presence means anything at all.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The boundary protects the science as much as the court',
        text: 'An examiner asked to say whether someone is guilty is being asked to leave their field. The answer would carry the credibility of the discipline without any of its method behind it — which is worse for the discipline than declining. Keeping the boundary is how a forensic conclusion stays worth something.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'German law draws one half of the boundary at the earliest possible point: it bounds what the examination may even ask. Section 81e of the Code of Criminal Procedure permits a molecular-genetic examination to establish the DNA identification pattern, parentage and the sex of the person, and to compare those with reference material, so far as necessary to investigate the facts. It then adds: *Andere Feststellungen dürfen nicht erfolgen; hierauf gerichtete Untersuchungen sind unzulässig* — other findings may not be made, and examinations directed at them are inadmissible.',
        claim: 'fact',
        sources: ['de-stpo-81e-dna'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A statute deciding what a science may be asked',
        text: 'That provision is doing something unusual. It is not regulating how an examination is performed or how its result is used; it is limiting the questions the technique may be put to at all. A sample capable of yielding far more information is legally permitted to yield a defined list. The limit comes from law rather than from the method, which is the clearest possible demonstration that the two are different things.',
      },
      {
        kind: 'paragraph',
        text: 'The narrow exception proves the rule. Section 81e(2) permits examination of found, secured or seized material, and where it is unknown which person trace material came from, findings about eye, hair and skin colour and about age may additionally be made. The extra findings are permitted precisely where there is no person to compare against — and they stop at externally visible characteristics.',
        claim: 'fact',
        sources: ['de-stpo-81e-dna'],
      },
      {
        kind: 'paragraph',
        text: 'England and Wales draws the other half at the point of testimony. Under the Criminal Procedure Rules an expert must give opinion that is objective and unbiased and *within the expert’s area or areas of expertise*, must define that area both in the report and when giving evidence, and — when giving evidence in person — must draw the court’s attention to any question to which the answer would be outside it.',
        claim: 'fact',
        sources: ['uk-crimpr-2025-part19'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The duty runs the other way from intuition',
        text: 'An expert asked a question beyond their expertise is not required to do their best. They are required to say so, in the witness box, unprompted. The rule treats the admission as part of the job rather than as a failure of it.',
      },
      {
        kind: 'paragraph',
        text: 'The two provisions approach the same boundary from opposite ends — one limits the examination, the other limits the testimony — and neither leaves the decision to the examiner’s modesty. That is the point: a boundary that depended on individual restraint would fail in exactly the cases where the pressure to cross it is greatest.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It is worth stating what forensic science does do, because the boundary is not a criticism. In its own account of why it reviews forensic methods, the United States National Institute of Standards and Technology observes that forensic science can help investigators solve crimes, and that it can help exclude innocent people from an investigation or exonerate them in cases of wrongful conviction.',
        claim: 'fact',
        sources: ['nist-scientific-foundation-reviews'],
      },
    ],
    misconceptions: [
      {
        claim: 'A forensic match proves the person did it.',
        reality:
          'A match is a statement that two samples share characteristics. How the material came to be where it was found, when, and whether that matters are questions the examination does not address and the court must.',
      },
      {
        claim: 'The expert decides the case when the evidence is scientific.',
        reality:
          'The Criminal Procedure Rules require an expert to keep opinion within their area of expertise and to tell the court when a question falls outside it. Deciding the case is outside every expert’s area of expertise.',
      },
      {
        claim: 'A sample can be tested for whatever the investigation wants to know.',
        reality:
          'Not in German law. Section 81e permits a defined list of findings and provides that other findings may not be made and that examinations directed at them are inadmissible.',
      },
      {
        claim:
          'Saying forensic science cannot decide guilt is a criticism of forensic science.',
        reality:
          'It is a description of what the discipline is for. NIST notes that forensic science can exclude innocent people from an investigation and exonerate them in cases of wrongful conviction — which is the boundary working, not failing.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two systems, two ends of the same boundary.',
      },
      {
        kind: 'list',
        items: [
          'Bound what the examination may determine, by statute — Germany, StPO § 81e.',
          'Bound what the expert may say, by procedural rule, and require them to flag questions outside their expertise — England and Wales, Criminal Procedure Rules 2025 Part 19.',
          'A narrow exception where there is no person to compare against, limited to externally visible characteristics and age — Germany, StPO § 81e(2).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Two systems, not a survey',
        text: 'These two were chosen because each states something explicit in primary text. Most systems are not described here, and nothing about admissibility standards elsewhere should be inferred from either.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The boundary is what makes forensic evidence contestable. A conclusion stated within a defined scope can be tested against that scope; a conclusion about guilt cannot be tested at all, because no method supports it.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also determines what a defence can ask for. Where the expert must define their area of expertise in the report, the definition itself becomes something to examine — and a question that falls outside it is one the expert is obliged to identify rather than answer.',
        claim: 'fact',
        sources: ['uk-crimpr-2025-part19'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [expert evidence in court](/forensics/expert-evidence-in-court), [the limits of forensic evidence](/forensics/the-limits-of-forensic-evidence), and [what forensic science is](/forensics/what-is-forensic-science).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* The expert, and who the expert belongs to                              */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'expert-evidence-in-court',
    title: 'Expert evidence in court',
    shortTitle: 'Expert evidence',
    question: 'Whose expert is the expert?',
    summary:
      'Two systems answer that differently and both are answering the same worry — that an expert paid by one side will start arguing for it. Germany removes the party from the choice: the judge selects the expert. England and Wales keeps the party and subordinates the loyalty.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-forensic-science-cannot-decide',
      'evidence-integrity-and-admissibility',
      'what-do-courts-do',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-73-78-sachverstaendiger',
      'uk-crimpr-2025-part19',
      'de-stpo-87-leichenschau',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['expert-evidence', 'evidence', 'accreditation'],
    uncertainty: [
      'Two systems are described from primary text — a code of criminal procedure and a set of procedural rules. Admissibility standards, remuneration, and how courts actually treat competing experts are not described.',
      'Nothing here describes civil proceedings, which have their own expert rules in both systems.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Most evidence is testimony about what someone perceived. Expert evidence is different: it is opinion, offered because the question is outside ordinary experience. That makes it uniquely useful and uniquely dangerous, because an opinion delivered with authority is hard for a court to weigh unless the system has arranged in advance for it to be testable.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes how two systems arrange for expert opinion to be produced and presented. It is not legal advice, it describes no admissibility test, and it does not explain how to instruct or challenge an expert in any jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The problem every system faces is the same. Someone must explain a technical matter to a decision-maker who cannot assess it directly, and whoever explains it will have been chosen, instructed and paid by someone with an interest in the outcome. Left alone, that arrangement produces advocacy wearing a laboratory coat.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two solutions, and they are not degrees of the same one',
        text: 'A system can remove the conflict by taking the choice away from the parties, or it can accept the choice and rank the loyalties so that the duty to the court comes first. The first prevents the pressure; the second manages it. Neither is obviously right, and a comparison that described one as a stricter version of the other would have misunderstood both.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany takes the choice away. Section 73(1) of the Code of Criminal Procedure provides that *die Auswahl der zuzuziehenden Sachverständigen und die Bestimmung ihrer Anzahl erfolgt durch den Richter* — the selection of the experts to be consulted and the determination of their number is made by the judge — and that the judge should agree with them a period within which the reports can be delivered.',
        claim: 'fact',
        sources: ['de-stpo-73-78-sachverstaendiger'],
      },
      {
        kind: 'paragraph',
        text: 'It then goes further than selection. Section 78 provides, in a single sentence, that the judge shall so far as it appears necessary direct the activity of the experts. And section 73(2) adds that where experts are publicly appointed for certain kinds of report, other persons should be chosen only where special circumstances require it.',
        claim: 'fact',
        sources: ['de-stpo-73-78-sachverstaendiger'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The expert is the court’s',
        text: 'Selection by the judge, direction by the judge, and a preference for publicly appointed experts together make the expert an instrument of the court rather than of a party. That is coherent with a procedure in which the court investigates rather than umpires — and it is why importing the phrase "the prosecution’s expert" into this system describes something that does not exist there.',
      },
      {
        kind: 'paragraph',
        text: 'The same structure appears in the death-investigation provisions. Under section 87 the autopsy is ordered by the judge, and it is performed by two physicians, one of whom must be a court physician or from a public forensic-medical or pathological institute. The examination is arranged by the court before anyone has an interest in its result.',
        claim: 'fact',
        sources: ['de-stpo-87-leichenschau'],
      },
      {
        kind: 'paragraph',
        text: 'England and Wales keeps party instruction and solves the loyalty problem directly. Rule 19.2 of the Criminal Procedure Rules provides that an expert must help the court to achieve the overriding objective by giving opinion that is objective and unbiased and within their area of expertise — and then, in terms: *This duty overrides any obligation to the person from whom the expert receives instructions or by whom the expert is paid.*',
        claim: 'fact',
        sources: ['uk-crimpr-2025-part19'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What the report must contain',
        text: 'The duty is given teeth by a required content list. An expert’s report must give the expert’s qualifications, relevant experience and accreditation; identify the literature relied on; state the material facts given to the expert; summarise any range of opinion on the matters dealt with and give reasons for the expert’s own; state any qualification the expert must attach to an opinion; include such information as the court may need to decide whether the opinion is sufficiently reliable to be admissible; and carry a statement that the expert understands and has complied with the duty to the court.',
      },
      {
        kind: 'paragraph',
        text: 'Two of those requirements do the heaviest work. Summarising the range of opinion forces an expert to disclose that competent people disagree, rather than presenting one view as the field’s. And providing what the court needs to judge reliability makes admissibility a question the report must help answer rather than one the expert may leave to advocates.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The obligations continue after the report. The expert must inform all parties and the court if their opinion changes from what a served report stated, and must define their area of expertise both in the report and when giving evidence in person.',
        claim: 'fact',
        sources: ['uk-crimpr-2025-part19'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every system has experts instructed by the prosecution and the defence.',
        reality:
          'German law places selection of the experts and determination of their number with the judge, and directs the judge to lead their activity so far as necessary. The phrase "the prosecution’s expert" describes an arrangement that system does not use.',
      },
      {
        claim: 'An expert paid by one side is bound to favour it.',
        reality:
          'Where parties do instruct experts, the rules can rank the loyalties. Rule 19.2(2) provides that the duty to the court overrides any obligation to whoever instructs or pays the expert — which does not make bias impossible, but does make it a breach of a stated duty rather than an understandable tendency.',
      },
      {
        claim: 'An expert report is a statement of the scientific consensus.',
        reality:
          'It is one expert’s opinion, and the rules require it to say so: where there is a range of opinion on the matters dealt with, the report must summarise that range and give reasons for the expert’s own view.',
      },
      {
        claim: 'Whether expert evidence is reliable enough to admit is purely for the lawyers.',
        reality:
          'The required report content includes such information as the court may need to decide whether the opinion is sufficiently reliable to be admissible. The expert is required to supply the material for that decision.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two arrangements for the same problem.',
      },
      {
        kind: 'list',
        items: [
          'The judge selects the experts, sets their number and directs their activity — Germany, StPO §§ 73 and 78.',
          'A preference for publicly appointed experts where they exist for that kind of report — Germany, StPO § 73(2).',
          'Parties instruct, and the duty to the court overrides any obligation to whoever instructs or pays — England and Wales, CrimPR r. 19.2(2).',
          'A prescribed report content list, including range of opinion and the material the court needs to judge reliability — England and Wales, CrimPR r. 19.4.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Rules, not behaviour',
        text: 'Everything here is what the provisions require. Whether experts comply, how often courts exclude evidence, and how competing opinions are resolved in practice are empirical questions this platform has not researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Stated duties make expert evidence challengeable on grounds other than disagreement. A report that omits the range of opinion, or that fails to define the expert’s area of expertise, has departed from a requirement — which is a different objection from arguing that the conclusion is wrong.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Judicial selection creates a different accountability, not less of it. Where the court chooses and directs the expert, the choice itself becomes part of the record and part of what an appeal can examine.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what forensic science cannot decide](/forensics/what-forensic-science-cannot-decide), [who regulates forensic science](/forensics/who-regulates-forensic-science), and [what defence counsel does](/defence/what-defence-counsel-does).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Quality: who guarantees it, and with what sanction                     */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'who-regulates-forensic-science',
    title: 'Who regulates forensic science',
    shortTitle: 'Who regulates it',
    question: 'If a laboratory does poor work, what actually happens?',
    summary:
      'In one system, a statutory regulator publishes a code that Parliament must approve — and breaching it is not an offence. The sanction is evidential: the code is admissible, and a court may take a failure into account when deciding a question.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['GB'],
    temporalScope: 'current',
    related: [
      'what-forensic-laboratories-do',
      'expert-evidence-in-court',
      'the-limits-of-forensic-evidence',
    ],
    sources: ['uk-fsr-act-2021', 'uk-fsr-about', 'uk-crimpr-2025-part19', 'enfsi'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['accreditation', 'oversight', 'expert-evidence'],
    uncertainty: [
      'One statutory regulator is described from primary text. Whether the arrangement improves quality is an empirical question this platform has not researched and does not answer.',
      'Accreditation standards themselves — what a laboratory must demonstrate to be accredited — were not researched and are not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Quality assurance in forensic science is the set of arrangements that let a result be relied on: validated methods, competent examiners, documented procedures, and someone outside the laboratory checking that all of it is real. The interesting question is not whether such arrangements exist but who enforces them, and what happens when they are not met.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes a statutory regulatory scheme in England and Wales. It is not legal advice, it describes no laboratory procedure or standard, and it assesses the quality of no provider anywhere.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A forensic result reaches a court stripped of the conditions that produced it. The court sees a conclusion; it does not see whether the method was validated, whether the examiner was competent at that method, or whether the laboratory was following its own procedures that week. Regulation exists because those conditions are invisible at the point where they matter most.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Regulation is harder here than in most fields',
        text: 'A regulator of, say, food safety can inspect and prohibit. A forensic regulator is dealing with evidence that has already been produced and may already be before a court, in a field where prohibiting a provider mid-case has its own costs to justice. That constraint shapes the design described below — and explains why the sanction chosen is not the obvious one.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'England and Wales put the arrangement on a statutory footing in 2021. Section 1 of the Forensic Science Regulator Act 2021 provides, in a single sentence, that there is to be a Forensic Science Regulator; the section came into force on 25 July 2022.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021'],
      },
      {
        kind: 'paragraph',
        text: 'Section 2 requires the Regulator to prepare and publish a code of practice about the carrying on of forensic science activities in England and Wales. The code must specify the activities it applies to, need not make provision about every forensic science activity, and may make different provision for different purposes or descriptions of person.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021'],
      },
      {
        kind: 'paragraph',
        text: 'The code is not the Regulator’s alone. Section 3 requires consultation, including of persons representative of those carrying on the activities, and then provides that the Regulator may not publish the code or any alteration unless a draft has been sent to the Secretary of State, the Secretary of State has approved it and laid it before Parliament, and the draft has been approved by a resolution of *each House* of Parliament.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Section 4 is headed "Status of the code", and it does something counter-intuitive. "A failure by a person to act in accordance with the code does not of itself make that person liable to civil or criminal proceedings." Breaching the code is not an offence. But "the code is admissible in evidence in criminal and civil proceedings", and "a court may in particular take into account a failure by a person to act in accordance with the code in determining a question in any such proceedings". The sanction is evidential rather than penal: the consequence of poor practice is that the evidence it produced is worth less.',
      },
      {
        kind: 'paragraph',
        text: 'That design is coherent with the problem. Punishing a laboratory does nothing for the case its work is in; devaluing the evidence addresses the case directly, and does so through the body that has to decide it. It also means compliance is asserted and tested in the proceedings themselves rather than in a separate regulatory forum.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The Act does provide investigative powers. Section 5 applies where the Regulator has reason to believe a person may be carrying on a forensic science activity to which the code applies in a way that creates a substantial risk of adversely affecting any investigation, or of impeding or prejudicing the course of justice; the Regulator may then investigate and require documents and other information by written notice. Sections 6 and 7 provide for compliance notices and for completion certificates once the specified steps are taken or are found not to be needed.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021'],
      },
      {
        kind: 'paragraph',
        text: 'The scheme is deliberately provider-blind. The Regulator’s own statement of priorities is that appropriate quality standards should be in place for all forensic science disciplines and should apply equally whether services are delivered by small or large organisations, private companies, public laboratories, police forces or individuals — and that compliance should run from crime scene to court and in all sectors.',
        claim: 'fact',
        sources: ['uk-fsr-about'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where the regulator meets the courtroom',
        text: 'The two mechanisms interlock. The Criminal Procedure Rules require an expert’s report to give the expert’s qualifications, relevant experience and accreditation, and to include such information as the court may need to decide whether the opinion is sufficiently reliable to be admissible. The regulatory question therefore arrives in the report rather than only in a compliance file.',
      },
      {
        kind: 'paragraph',
        text: 'Not every arrangement is statutory. The European Network of Forensic Science Institutes describes itself as a network of forensic institutes engaged in quality-assurance and best-practice work — a body of practitioners rather than a regulator, and one whose output binds through adoption rather than through law.',
        claim: 'fact',
        sources: ['enfsi'],
      },
    ],
    misconceptions: [
      {
        claim: 'Breaking the forensic code of practice is a criminal offence.',
        reality:
          'Section 4 provides that a failure to act in accordance with the code does not of itself make a person liable to civil or criminal proceedings. What it does is make the code admissible and allow a court to take a failure into account.',
      },
      {
        claim: 'A regulator writes the rules for the industry it regulates.',
        reality:
          'In this scheme the Regulator prepares the code, but it cannot come into force until the Secretary of State has laid a draft before Parliament and each House has approved it by resolution.',
      },
      {
        claim: 'Quality regulation applies to laboratories.',
        reality:
          'The Regulator’s stated priority is that standards apply equally to private companies, public laboratories, police forces or individuals, and from crime scene to court. The unit being regulated is the activity, not the building.',
      },
      {
        claim: 'Accreditation and regulation are the same thing.',
        reality:
          'Accreditation is recognition that a provider meets defined standards of competence and method validation. Regulation here is a statutory scheme with a code, investigative powers and an evidential consequence. A system can have one without the other.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What differs between systems is the source of the obligation and the consequence of breach.',
      },
      {
        kind: 'list',
        items: [
          'A statutory regulator with a code Parliament must approve, and an evidential rather than penal sanction — England and Wales, Forensic Science Regulator Act 2021.',
          'Investigative powers triggered by substantial risk to an investigation or to the course of justice, with compliance notices and completion certificates — the same Act, ss. 5 to 7.',
          'A practitioner network producing best-practice work that binds through adoption rather than law — the European Network of Forensic Science Institutes.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'England and Wales only',
        text: 'The Act is extent-marked E+W. Scotland and Northern Ireland have separate arrangements which are not described here, and nothing about any other country should be inferred from it.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'An evidential sanction is, in one respect, stronger than a penal one for the person whose case it is. A prosecution of a provider would not help a defendant whose conviction rests on that provider’s work; a rule allowing the court to take the failure into account when determining a question in the proceedings does.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also makes compliance disclosable. Where the code is admissible and accreditation must appear in the expert’s report, the defence has a documented standard to measure the work against rather than only the conclusion to disagree with.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021', 'uk-crimpr-2025-part19'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what forensic laboratories do](/forensics/what-forensic-laboratories-do), [expert evidence in court](/forensics/expert-evidence-in-court), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },
  {
    slug: 'what-forensic-laboratories-do',
    title: 'What forensic laboratories do',
    shortTitle: 'Forensic laboratories',
    question: 'Is there a national forensic laboratory?',
    summary:
      'In some systems yes, in others emphatically not — and one of those others regulates a market instead of running an institute. Where forensic capability sits is a constitutional-shaped choice, and it determines who the examiner answers to.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-regulates-forensic-science',
      'expert-evidence-in-court',
      'who-investigates-a-death',
    ],
    relatedInstitutions: ['national-police', 'federal-investigative-agency'],
    sources: ['nl-nfi-about', 'uk-fsr-about', 'de-stpo-87-leichenschau', 'enfsi'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['forensic-science', 'accreditation', 'oversight'],
    uncertainty: [
      'Three arrangements are described from official sources. Caseload, capacity, turnaround, funding and quality are not described for any of them, and no comparison of performance is made or implied.',
      'What individual disciplines a given institute covers, and how work is allocated between providers, were not researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Forensic examination has to happen somewhere, by someone employed by somebody. The somebody matters more than it first appears: a laboratory inside a police service, a laboratory inside a justice ministry, and a private provider selling into a market are three different answers to the question of whose interests surround the examiner while they work.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes where forensic capability sits in three systems, from official sources. It describes no laboratory method or procedure, compares no provider’s quality, and makes no claim about capacity or performance anywhere.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The placement question is an independence question wearing an organisational-chart disguise. An examiner whose employer is the investigating body works alongside the people whose case the result will help or hurt. That does not make the result wrong, and the discipline’s controls exist precisely to make placement matter less — but it is why the arrangement is worth stating rather than assuming.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'There is no placement without a trade-off',
        text: 'A police laboratory is close to the investigation, which is good for speed and context and bad for distance. A ministry institute has distance and may have less operational immediacy. A market has capacity that flexes and a commercial relationship with whoever buys. Every arrangement buys something and pays for it somewhere, which is why systems that look careless about this usually are not.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Netherlands concentrates national capability in one body. The Netherlands Forensic Institute is a body of the Ministry of Justice and Security, and describes itself as an international centre of knowledge and expertise in forensic science with nearly forty areas of expertise.',
        claim: 'fact',
        sources: ['nl-nfi-about'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A ministry institute is not a police laboratory',
        text: 'Placing the institute in the justice ministry rather than in the police puts it beside the investigation rather than inside it. The distinction is easy to lose in English, where "state forensic laboratory" covers both — and the two arrangements differ on precisely the point that makes placement worth discussing.',
      },
      {
        kind: 'paragraph',
        text: 'England and Wales does the opposite and does not have a national forensic service at all. What holds the field together is a regulator rather than a provider: the Forensic Science Regulator’s own statement of priorities is that quality standards should apply equally whether services are delivered by small or large organisations, private companies, public laboratories, police forces or individuals, and should run from crime scene to court and in all sectors.',
        claim: 'fact',
        sources: ['uk-fsr-about'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'These are not two designs of one institution. The Netherlands has a national forensic institute; England and Wales has a regulated market and no such institute. The unifying thing in the second system is a set of standards, not a building — which is why this platform publishes no "forensic laboratory" institution page. There would be no member of the family to describe for England and Wales, and inventing a category to hold it would be a taxonomy imposed on the evidence rather than drawn from it.',
      },
      {
        kind: 'paragraph',
        text: 'Germany shows a third pattern, and it is visible in the procedural code rather than in an organisational chart. Section 87(2) of the Code of Criminal Procedure requires that one of the two physicians performing an autopsy be a court physician, or the head of a public forensic-medical or pathological institute, or a physician of that institute with forensic-medical expertise. The statute presupposes standing public institutes and routes work to them by naming them.',
        claim: 'fact',
        sources: ['de-stpo-87-leichenschau'],
      },
      {
        kind: 'paragraph',
        text: 'Across the arrangements sit voluntary networks. The European Network of Forensic Science Institutes describes itself as a network of forensic institutes engaged in quality-assurance and best-practice work — which is how institutes in unlike national structures reach common practice without a common employer.',
        claim: 'fact',
        sources: ['enfsi'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has a national forensic laboratory.',
        reality:
          'England and Wales does not. Provision there is mixed — private companies, public laboratories, police forces and individuals — held together by a regulator applying common standards rather than by a national provider.',
      },
      {
        claim: 'A state forensic institute is part of the police.',
        reality:
          'The Netherlands Forensic Institute is a body of the Ministry of Justice and Security. Whether forensic capability sits with the police, with a justice ministry, or outside government entirely is a national arrangement, and English usage tends to blur the three.',
      },
      {
        claim: 'Private forensic providers are unregulated.',
        reality:
          'In England and Wales the Regulator’s stated priority is that standards apply equally whether services are delivered by private companies, public laboratories, police forces or individuals.',
      },
      {
        claim: 'Where a laboratory sits is an administrative detail.',
        reality:
          'It determines who employs the examiner and who is nearby while the work is done. That is why systems state the arrangement in law or in institutional charter rather than leaving it to convenience.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three systems, three arrangements that are not variants of one another.',
      },
      {
        kind: 'list',
        items: [
          'One national institute inside the justice ministry — the Netherlands Forensic Institute.',
          'No national service; mixed provision unified by a statutory regulator applying common standards — England and Wales.',
          'Standing public forensic-medical and pathological institutes, presupposed and named by the procedural code — Germany, StPO § 87(2).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Structure, not performance',
        text: 'Nothing here compares the quality, capacity, speed or cost of these arrangements. No evidence supporting such a comparison was obtained, and the sources used would not support one if it were attempted.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Placement determines what a defence can ask about. Where the examiner is employed by the investigating body, the relationship is a proper subject for examination; where the examiner is a commercial provider, the commercial relationship is. Neither is an allegation — both are facts a court is entitled to know.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also determines what regulation has to reach. A system with one institute can regulate through the institute; a system with a market has to regulate the activity wherever it is carried on, which is why the English scheme is drafted around activities and persons rather than around organisations.',
        claim: 'fact',
        sources: ['uk-fsr-about'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who regulates forensic science](/forensics/who-regulates-forensic-science), [who investigates a death](/forensics/who-investigates-a-death), and [the forensic scientist](/professions/forensic-scientist).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Limits, and one discipline in detail                                   */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'the-limits-of-forensic-evidence',
    title: 'The limits of forensic evidence',
    shortTitle: 'The limits',
    question: 'How reliable is forensic evidence?',
    summary:
      'That question has no single answer, and the reason is the finding. Published scientific-foundation work shows the same technique can be highly reproducible on one kind of sample and produce a wide range of results between laboratories on another.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-dna-analysis-establishes',
      'what-forensic-science-cannot-decide',
      'who-regulates-forensic-science',
    ],
    sources: [
      'nist-ir-8351-dna-mixtures',
      'nist-scientific-foundation-reviews',
      'nas-forensic-2009',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['forensic-science', 'evidence', 'standard-of-proof'],
    uncertainty: [
      'The specific findings here come from one final scientific-foundation review, of one discipline, published by a United States federal body. They are not evidence about other disciplines and not evidence about practice in other countries.',
      'This page describes what published reviews found. It does not assess any laboratory, any provider, or any case.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Asking how reliable forensic evidence is treats a category as though it were a technique. It is not one thing, and even a single technique is not equally reliable on every kind of sample. The useful question is narrower: for this method, on this kind of material, what does the published evidence show about how consistently it produces the same answer?',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This reports what published scientific-foundation reviews found. It describes no technique or procedure, assesses no provider, and is not a basis for any claim about any case.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Two opposite errors circulate about forensic evidence, and both are damaging. One treats a laboratory result as settling a case. The other treats the existence of any limitation as showing that the discipline is worthless. A reader who holds either will misread every forensic finding they encounter.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the second error is as costly as the first',
        text: 'Overstated scepticism has victims too. Forensic evidence excludes people from investigations and supports exonerations, and a decision-maker taught that it is all unreliable discounts the results that would have helped. NIST states the point plainly in explaining why it reviews these methods: forensic science can help exclude innocent people from an investigation, and can help exonerate them in cases of wrongful conviction.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Start with the framing the reviewers themselves use. The final NIST scientific foundation review of DNA mixture interpretation opens: "All scientific methods have limits. To use a method appropriately, one must understand those limits, which are inevitably tied to the risk one is willing to accept either as an individual or as a society."',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
      {
        kind: 'paragraph',
        text: 'The same report supplies the sharpest available illustration of why a single reliability figure is impossible. For high-quality single-source samples, it records, it has been demonstrated that different laboratories will arrive at the same result regardless of the specific instruments, tests and software used. For mixtures, it records the opposite: multiple interlaboratory studies conducted by different groups over the past two decades have demonstrated that different laboratories can produce a wide range of results when interpreting the same DNA mixtures.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'One technique, two kinds of sample, two completely different reliability profiles — established not by argument but by repeated interlaboratory study. That is why "how reliable is DNA evidence" cannot be answered, and why the honest question is always about the method as applied to this kind of material. A reader who takes one thing from this page should take that.',
      },
      {
        kind: 'paragraph',
        text: 'The review also explains why the difficult case became common rather than exceptional. In the 1990s an evidence sample needed to contain thousands of cells, such as from a visible blood or semen stain. Analysts can now extract a profile from the few skin cells someone might leave when handling an object — which extended the technique’s usefulness and, at the same time, made mixtures ordinary.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
      {
        kind: 'paragraph',
        text: 'Sensitivity brings its own interpretive problem. People constantly shed small amounts of DNA into the environment, and by touching objects can transfer small amounts — including someone else’s DNA — from one surface to another. Where more than one contributor is detected, it can be difficult to distinguish one person’s DNA from another, to estimate how many people contributed, to determine whether the DNA is relevant to the crime or is contamination, and to determine whether a trace amount from a particular person is present at all.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A technical improvement can create a new legal problem',
        text: 'Nothing went wrong here. The method got better at detecting small quantities, which is unambiguously an advance — and the consequence is that samples now routinely contain material whose presence is harder to explain. Progress in a forensic method does not automatically make forensic conclusions safer, and the review is a worked example of why.',
      },
      {
        kind: 'paragraph',
        text: 'Reviews of this kind are a programme rather than an event. NIST states that its scientific foundation reviews identify the scientific foundations underpinning forensic methods, evaluate the empirical evidence for their reliability, explore capabilities and limitations, and identify knowledge gaps; that the method is to gather literature and publicly available information, convene NIST scientists and outside experts, publish a draft for public comment, and finalise after considering comments; and that the programme answers a call in the 2009 National Academy of Sciences report for studies establishing the scientific bases demonstrating the validity of forensic methods. Congress appropriated funds for the reviews from 2018.',
        claim: 'fact',
        sources: ['nist-scientific-foundation-reviews', 'nas-forensic-2009'],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Which reviews are finished matters',
        text: 'Not every review has reached a final report. The DNA mixture review is final; the bitemark analysis review remains a draft with its public comment period closed. This platform quotes nothing from that draft, because a draft is not authority for a conclusion about a discipline — and the distinction is exactly the kind that gets lost when reviews are cited second-hand.',
      },
    ],
    misconceptions: [
      {
        claim: 'DNA evidence is the gold standard, so it is reliable in every case.',
        reality:
          'The final NIST review records that different laboratories will arrive at the same result on high-quality single-source samples, and that interlaboratory studies over two decades have shown they can produce a wide range of results interpreting the same mixtures. Which kind of sample it is changes the answer.',
      },
      {
        claim: 'Forensic science has been shown to be unreliable.',
        reality:
          'That is not what the reviews found; it overstates them in the opposite direction. They describe capabilities as well as limitations, and NIST states that forensic science can exclude innocent people from investigations and help exonerate them in cases of wrongful conviction.',
      },
      {
        claim: 'More sensitive methods make forensic conclusions safer.',
        reality:
          'Increased sensitivity extended what DNA analysis can be used for and also made mixtures ordinary, because people shed DNA constantly and can transfer someone else’s from surface to surface. A better detector can produce a harder interpretive problem.',
      },
      {
        claim: 'A published review settles what a discipline is worth.',
        reality:
          'Some reviews are final and some are drafts under comment. The DNA mixture review is final; the bitemark analysis review is still a draft, and nothing on this platform is drawn from that draft.',
      },
      {
        claim: 'Stating limits means the evidence should be ignored.',
        reality:
          'The reviewers put it the other way: all scientific methods have limits, and using a method appropriately requires understanding them. Stating a limit is a condition of relying on a result, not a reason to discard it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What varies is not confidence but the thing being asked about.',
      },
      {
        kind: 'list',
        items: [
          'The same method on a high-quality single-source sample: reproducible between laboratories.',
          'The same method on a mixture: a wide range of results between laboratories, shown repeatedly over two decades.',
          'Across disciplines: the 2009 National Academy of Sciences review found substantial variation in scientific foundation, standardisation and quality assurance — a finding about the United States as of 2009.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'One country’s reviews',
        text: 'Both the NIST reviews and the 2009 National Academy of Sciences report are United States work describing United States practice at a stated time. They are the best available published foundation studies; they are not evidence about forensic practice elsewhere.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Limits are what make a forensic conclusion examinable. A result presented with its uncertainty can be tested against the evidence for that uncertainty; a result presented as certainty offers a court nothing to weigh and a defence nothing to challenge.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'That is why the honesty of reporting has mattered more than technical advance. The NIST review says as much: these challenges need to be carefully considered throughout the forensic science process and clearly communicated when describing forensic results, and failure to do so can lead to misunderstandings about the strength and relevance of the evidence.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what DNA analysis establishes](/forensics/what-dna-analysis-establishes), [what forensic science cannot decide](/forensics/what-forensic-science-cannot-decide), and [what courts do](/courts/what-do-courts-do).',
      },
    ],
  },
  {
    slug: 'what-dna-analysis-establishes',
    title: 'What DNA analysis establishes',
    shortTitle: 'What DNA establishes',
    question: 'What does a DNA result actually tell you?',
    summary:
      'Less than the phrase "DNA evidence" suggests, and one legal system says so in statute — listing what a molecular-genetic examination may determine and providing that other findings may not be made at all.',
    entityType: 'forensic-discipline',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'the-limits-of-forensic-evidence',
      'what-forensic-science-cannot-decide',
      'evidence-integrity-and-admissibility',
    ],
    sources: ['de-stpo-81e-dna', 'nist-ir-8351-dna-mixtures'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['forensic-science', 'evidence'],
    uncertainty: [
      'One statute and one final scientific review are used. DNA databases, retention rules, familial searching and investigative genetic genealogy were not researched and are not described.',
      'Nothing here describes how any examination is performed, and nothing here supports any claim about a case.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A DNA result is a statement about material. It says that a sample yielded a profile with certain characteristics, and that those characteristics do or do not correspond to a reference profile. It does not say how the material arrived where it was found, when it arrived, or what its presence means — and in one legal system it is not permitted to say very much else either.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes what a DNA result addresses and what bounds it, from a statute and a published scientific review. It describes no laboratory technique, no collection procedure, and nothing about how any result could be affected, avoided or altered. It is not legal advice and supports no claim about any case.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'No forensic technique carries as much public authority, and none is as routinely misdescribed. "The DNA matched" is reported as though it answered the case, when it is an answer to a question about two samples. The distance between those is where most of the misunderstanding about forensic evidence lives.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The authority is largely deserved, which is the difficulty',
        text: 'On a good single-source sample the technique is genuinely reproducible between laboratories, and that record is what earned it public confidence. The problem is that the confidence transferred to every use of the technique, including the uses where the published evidence says something quite different.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'German law lists what may be determined. Section 81e of the Code of Criminal Procedure permits a molecular-genetic examination of material lawfully obtained to establish the DNA identification pattern, parentage and the sex of the person, and to compare those findings with reference material, so far as necessary to investigate the facts.',
        claim: 'fact',
        sources: ['de-stpo-81e-dna'],
      },
      {
        kind: 'paragraph',
        text: 'It then closes the list: *Andere Feststellungen dürfen nicht erfolgen; hierauf gerichtete Untersuchungen sind unzulässig* — other findings may not be made, and examinations directed at them are inadmissible. The prohibition covers not only reporting other findings but conducting the examination that would produce them.',
        claim: 'fact',
        sources: ['de-stpo-81e-dna'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A permitted list is a statement about the technique',
        text: 'Identification pattern, parentage, sex. That is what the law lets the examination answer, and the list is short because a genetic sample could answer far more. The provision is a legislature deciding that the capacity of a method is not the same as the licence to use it — which is also, incidentally, the clearest available answer to anyone who thinks a DNA sample tells investigators everything about a person.',
      },
      {
        kind: 'paragraph',
        text: 'The exception is narrow and instructive. Section 81e(2) permits examination of found, secured or seized material, and where it is unknown which person trace material came from, findings about eye, hair and skin colour and about age may additionally be made. Where the person is known, the ordinary limits apply. The additional findings are permitted only where there is nobody to compare against, and they stop at externally visible characteristics.',
        claim: 'fact',
        sources: ['de-stpo-81e-dna'],
      },
      {
        kind: 'paragraph',
        text: 'Alongside the legal bound sits the scientific one, and it depends on the sample. The final NIST scientific foundation review of DNA mixture interpretation records that for high-quality single-source samples it has been demonstrated that different laboratories will arrive at the same result regardless of the specific instruments, tests and software used — and that multiple interlaboratory studies over the past two decades have demonstrated that different laboratories can produce a wide range of results when interpreting the same DNA mixtures.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
      {
        kind: 'paragraph',
        text: 'Mixtures are no longer the unusual case. The same review records that in the 1990s a sample needed to contain thousands of cells, such as from a visible blood or semen stain, whereas a profile can now be extracted from the few skin cells someone might leave when handling an object — and that people constantly shed small amounts of DNA and can transfer small amounts, including someone else’s, from one surface to another.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Presence is not an account of how',
        text: 'Where DNA can arrive on an object through ordinary handling, and can arrive second-hand through another person’s contact, the finding that a profile is present leaves the question of how it got there wide open. That question belongs to the case, not to the examination — which is the boundary this section keeps returning to because it is where forensic evidence is most often over-read.',
      },
    ],
    misconceptions: [
      {
        claim: 'DNA proves guilt.',
        reality:
          'A DNA result addresses whether a sample corresponds to a reference profile. How the material arrived, when, and whether that matters are questions the examination does not address. German law makes the point structurally by listing what the examination may determine and forbidding other findings.',
      },
      {
        claim: 'A DNA sample can be analysed for anything investigators want to know.',
        reality:
          'Under section 81e the permitted findings are the DNA identification pattern, parentage and sex, with a narrow additional category for unidentified trace material. Other findings may not be made and examinations directed at them are inadmissible.',
      },
      {
        claim: 'DNA evidence is equally reliable whatever the sample.',
        reality:
          'The final NIST review found different laboratories reach the same result on high-quality single-source samples and can produce a wide range of results interpreting the same mixtures. The kind of sample changes the answer.',
      },
      {
        claim: 'Finding someone’s DNA on an object means they handled it.',
        reality:
          'The review records that people shed DNA constantly and can transfer small amounts, including someone else’s, from one surface to another. Presence and the account of how it came to be present are different questions.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two kinds of bound sit on the same technique.',
      },
      {
        kind: 'list',
        items: [
          'A legal bound listing permitted findings and forbidding others — Germany, StPO § 81e(1).',
          'A narrow exception for unidentified trace material, limited to externally visible characteristics and age — Germany, StPO § 81e(2).',
          'A scientific bound that depends on the sample: reproducible between laboratories on single-source material, a wide range of results on mixtures — NISTIR 8351.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not researched here',
        text: 'DNA databases, how long profiles may be retained, familial searching and investigative genetic genealogy each raise distinct legal questions. None was researched for this page and none is described.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A statutory list of permitted findings is a privacy protection as much as an evidential one. It means a sample taken to answer one question cannot lawfully be mined for others, and that the limit does not depend on the restraint of whoever holds the sample.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The scientific limits do parallel work for the defence. Where a published review establishes that laboratories can differ substantially on mixture interpretation, the interpretation itself becomes a proper subject of challenge rather than a technical detail behind a conclusion.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [the limits of forensic evidence](/forensics/the-limits-of-forensic-evidence), [evidence integrity and admissibility](/forensics/evidence-integrity-and-admissibility), and [what a criminal investigation is](/investigations/what-is-a-criminal-investigation).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* Death investigation, and the terminology it destroys                   */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'who-investigates-a-death',
    title: 'Who investigates a death',
    shortTitle: 'Investigating a death',
    question: 'Is a coroner the same thing as a medical examiner?',
    summary:
      'No — and in England and Wales both exist and do different jobs, while Germany has neither and routes the question through the prosecutor and the judge instead. The English word "coroner" describes an office most legal systems do not have.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-forensic-laboratories-do',
      'expert-evidence-in-court',
      'what-remand-detention-is',
    ],
    relatedInstitutions: ['correctional-service'],
    sources: ['uk-coroners-justice-act-2009', 'de-stpo-87-leichenschau'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['jurisdiction', 'accountability', 'oversight'],
    uncertainty: [
      'Two systems are described from primary text. Scotland has a different arrangement again and is not described; nor is any system outside these two.',
      'Inquest procedure, what a coroner may conclude, and how findings are used were not researched and are not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'When someone dies unexpectedly, violently, or in the state’s custody, some body has to establish what happened. Which body, and whether it is judicial, medical, prosecutorial or some combination, differs so completely between systems that the English vocabulary for it is close to untranslatable.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes which institutions investigate deaths in two systems. It is not guidance for anyone dealing with a death, describes no procedure to follow, and is not legal advice. Anyone facing these processes should seek help in their own jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A death removes the person best placed to explain it. Everything that follows has to be reconstructed from a body, a scene and other people’s accounts — and unlike most investigations, there is no complainant with an interest in pressing it. That is why systems create a standing duty to investigate certain deaths rather than leaving it to whoever asks.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The category that explains the whole institution',
        text: 'Deaths in state custody are the clearest case for an independent death investigation, and both systems here treat them specially. The people who could describe what happened are, largely, the people whose conduct is in question. A duty that arises automatically — rather than on complaint — is the structural answer to that, and it is why this is as much an accountability mechanism as a medical one.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'England and Wales gives the duty to a judicial officer. Section 1 of the Coroners and Justice Act 2009 provides that a senior coroner who is made aware that the body of a deceased person is within that coroner’s area *must as soon as practicable conduct an investigation* if the coroner has reason to suspect that the deceased died a violent or unnatural death, that the cause of death is unknown, or that the deceased died while in custody or otherwise in state detention.',
        claim: 'fact',
        sources: ['uk-coroners-justice-act-2009'],
      },
      {
        kind: 'paragraph',
        text: 'The duty is drafted so it cannot easily be avoided. It arises on the coroner being *made aware* of a body in the area, not on any application; the coroner may make whatever enquiries seem necessary to decide whether it arises; and where the body has been destroyed, lost or is absent, the coroner may report to the Chief Coroner, who may direct a senior coroner to investigate anyway.',
        claim: 'fact',
        sources: ['uk-coroners-justice-act-2009'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Three triggers, and one of them is about the state',
        text: 'Violent or unnatural death, unknown cause, and death in custody or state detention. The first two are about what the death appears to be; the third is about who was holding the person when it happened. A system that investigates the third automatically has decided that state custody is itself a reason for independent scrutiny, regardless of how ordinary the death looks.',
      },
      {
        kind: 'paragraph',
        text: 'The same jurisdiction also has medical examiners, and they are a different office. Under section 19 of the same Act a person may be appointed a medical examiner only if at the time of appointment they are a registered medical practitioner and have been throughout the previous five years, and practise as such or have done within the previous five years. Regulations govern training required as a precondition of appointment, procedure, and the functions conferred.',
        claim: 'fact',
        sources: ['uk-coroners-justice-act-2009'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: '"Coroner equals medical examiner" is wrong in the one jurisdiction where both words are native, because both offices exist there and do different things. The coroner is a judicial office under a statutory duty to investigate; the medical examiner is a registered doctor of at least five years’ standing appointed to a defined statutory function. Treating the two as translations of each other loses the distinction between a judicial investigation and a medical scrutiny.',
      },
      {
        kind: 'paragraph',
        text: 'The Act protects the medical examiner’s judgement in terms. Section 19(5) provides that nothing in that section, or in regulations under it, gives an English or Welsh NHS body any role in relation to the way in which medical examiners exercise their professional judgment as medical practitioners — a statutory firewall between the employing health structure and the clinical opinion.',
        claim: 'fact',
        sources: ['uk-coroners-justice-act-2009'],
      },
      {
        kind: 'paragraph',
        text: 'Germany has no coroner and no medical examiner. Section 87 of the Code of Criminal Procedure distributes the same work between the prosecution, the judge and physicians. The *Leichenschau* — the external examination of the body — is conducted by the public prosecution office, or on its application by the judge, with a physician called in unless that is obviously dispensable for clarifying the facts.',
        claim: 'fact',
        sources: ['de-stpo-87-leichenschau'],
      },
      {
        kind: 'paragraph',
        text: 'The autopsy is bounded more tightly still. The *Leichenöffnung* is performed by two physicians, one of whom must be a court physician or the head of a public forensic-medical or pathological institute, or a physician of that institute with forensic-medical expertise. The physician who treated the deceased in the illness immediately preceding death may not be entrusted with it, though they may be asked to attend to give information from the medical history. And the autopsy is ordered by the judge — the prosecution being competent to order it only where delay would endanger the success of the investigation.',
        claim: 'fact',
        sources: ['de-stpo-87-leichenschau'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two physicians, and one of them excluded',
        text: 'Requiring two physicians builds disagreement into the procedure rather than hoping for it. Excluding the doctor who treated the deceased in the final illness removes the person with the strongest interest in the finding — not because they would falsify it, but because a system that let them perform it would have no answer when someone asked.',
      },
    ],
    misconceptions: [
      {
        claim: 'A coroner and a medical examiner are the same thing under different names.',
        reality:
          'England and Wales has both, created by the same Act and doing different things. The coroner is a judicial office under a duty to investigate defined deaths; the medical examiner is a registered doctor of at least five years’ standing appointed to a statutory function.',
      },
      {
        claim: 'Every legal system has a coroner.',
        reality:
          'Germany has none. Under section 87 the external examination is conducted by the prosecution or the judge, and the autopsy is ordered by the judge and performed by two physicians.',
      },
      {
        claim: 'A death investigation begins when a family or the police ask for one.',
        reality:
          'In England and Wales the duty arises on the senior coroner being made aware that a body is within the coroner’s area and having reason to suspect one of three matters. No application is required.',
      },
      {
        claim:
          'The doctor who treated the deceased is the obvious person to establish the cause of death.',
        reality:
          'German law excludes that physician from performing the autopsy, while allowing them to attend and give information from the medical history. The knowledge is wanted; the finding is placed elsewhere.',
      },
      {
        claim: 'Deaths in custody are investigated like any other death.',
        reality:
          'In England and Wales death in custody or otherwise in state detention is one of three triggers for a mandatory coronial investigation, alongside violent or unnatural death and unknown cause.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two systems, and no shared vocabulary.',
      },
      {
        kind: 'list',
        items: [
          'A senior coroner — a judicial office — under a statutory duty to investigate violent or unnatural death, unknown cause, or death in state detention — England and Wales, Coroners and Justice Act 2009 s. 1.',
          'Medical examiners as a separate office: registered practitioners of at least five years, with a statutory firewall protecting their professional judgment — the same Act, s. 19.',
          'No coroner and no medical examiner: the prosecution conducts the external examination, the judge orders the autopsy, two physicians perform it and the treating doctor is excluded — Germany, StPO § 87.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Not the whole of the United Kingdom',
        text: 'The Coroners and Justice Act provisions described here are extent-marked for England and Wales. Scotland has a different arrangement, which this page does not describe.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A mandatory duty is what makes death investigation an accountability mechanism rather than a service. Nobody has to be persuaded to start it, and no relative has to know it exists — which matters most for people who die in custody, where the family is furthest from the institution and least able to insist.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Independence is engineered into both systems by exclusion rather than by assertion. England and Wales bars the NHS body from any role in the medical examiner’s professional judgment; Germany bars the treating physician from performing the autopsy. In neither case is the safeguard a statement that the person will be objective.',
        claim: 'fact',
        sources: ['uk-coroners-justice-act-2009', 'de-stpo-87-leichenschau'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what forensic laboratories do](/forensics/what-forensic-laboratories-do), [what remand detention is](/corrections/what-remand-detention-is), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /* From the scene to the courtroom                                        */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'evidence-integrity-and-admissibility',
    title: 'Evidence integrity and admissibility',
    shortTitle: 'Integrity and admissibility',
    question: 'If the chain of custody is broken, is the evidence thrown out?',
    summary:
      'Not automatically, and the assumption hides two different questions. Integrity asks whether the item is what it is said to be; admissibility asks whether the law lets a court receive it. A system can answer one yes and the other no.',
    entityType: 'concept',
    section: 'forensics',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'expert-evidence-in-court',
      'what-dna-analysis-establishes',
      'what-is-a-criminal-investigation',
      'what-happens-to-unlawfully-obtained-evidence',
    ],
    sources: [
      'uk-fsr-act-2021',
      'uk-fsr-about',
      'uk-crimpr-2025-part19',
      'nist-ir-8351-dna-mixtures',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['chain-of-custody', 'evidence', 'expert-evidence'],
    uncertainty: [
      'Admissibility rules differ in every jurisdiction and none is set out here. This page describes the distinction between two questions, not the law of evidence in any system.',
      'Nothing here describes collection, packaging, storage or transfer procedures, and nothing here describes how any control could be affected.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Two questions get asked about an item of evidence and they are constantly confused. The first is whether the thing in the courtroom is the thing that was found, unaltered and correctly attributed — that is integrity, and chain of custody is the record that supports it. The second is whether the law permits a court to receive it at all — that is admissibility, and it turns on rules that have nothing to do with whether the item is genuine.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains the difference between two questions about evidence. It describes no collection, handling, storage or transfer procedure, nothing about how any record or control operates in practice, and nothing that would bear on affecting either. It is not legal advice and states no admissibility rule for any jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A forensic result is only about the item that was examined. If the item examined was not the item recovered — mislabelled, substituted, contaminated, or simply not traceable back — then the result is a true statement about the wrong thing. Everything the discipline does afterwards rests on a question answered before the science starts.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the two questions are worth keeping apart',
        text: 'Collapsing them produces two opposite errors. One is assuming that a documented item must be admissible, when the law may exclude it for reasons unconnected to its genuineness — how it was obtained, what it is being offered to prove. The other is assuming a gap in the record ends the matter, when the question for the court is usually what weight the item can bear rather than whether it exists.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Integrity is a continuity question. The record supporting it accounts for who held an item and when, from recovery through examination to presentation, so that the item examined can be tied to the item recovered. It is documentation rather than analysis, and it is produced by everyone who touches the item rather than by the laboratory alone.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'That is why the regulatory scheme in England and Wales is drafted to reach beyond laboratories. The Forensic Science Regulator’s stated priority is that quality standards apply equally whether services are delivered by small or large organisations, private companies, public laboratories, police forces or individuals — and that compliance runs *from crime scene to court and in all sectors*.',
        claim: 'fact',
        sources: ['uk-fsr-about'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The weakest point is rarely the laboratory',
        text: 'Accreditation and method validation address what happens once material reaches an examiner. Recovery, packaging and transfer happen earlier, in worse conditions, often by people who are not scientists. A quality regime that stopped at the laboratory door would be regulating the best-controlled part of the process, which is why this one is written to cover the activity wherever it is carried on.',
      },
      {
        kind: 'paragraph',
        text: 'Failures of integrity are handled evidentially rather than by exclusion. Under the Forensic Science Regulator Act 2021 a failure to act in accordance with the code does not of itself make a person liable to civil or criminal proceedings — but the code is admissible in criminal and civil proceedings, and a court may in particular take a failure into account in determining a question in such proceedings. The consequence is that the evidence is worth less, decided by the body deciding the case.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021'],
      },
      {
        kind: 'paragraph',
        text: 'Admissibility is a separate gate with separate keys. In England and Wales the reliability question reaches the court through the expert’s report, which must include such information as the court may need to decide whether the expert’s opinion is sufficiently reliable to be admissible as evidence — a requirement directed at the opinion rather than at the item.',
        claim: 'fact',
        sources: ['uk-crimpr-2025-part19'],
      },
      {
        kind: 'paragraph',
        text: 'Contamination shows why integrity is a scientific problem and not only a bureaucratic one. The final NIST review of DNA mixture interpretation records that people constantly shed small amounts of DNA into the environment and can transfer small amounts, including someone else’s, from one surface to another — and that among the interpretive difficulties is determining whether detected DNA is relevant to the crime being investigated or is from contamination.',
        claim: 'fact',
        sources: ['nist-ir-8351-dna-mixtures'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Sensitivity raises the stakes on handling',
        text: 'A method that can profile the few skin cells left when someone handles an object is a method for which incidental contact anywhere in the process matters. The more sensitive the technique, the more the continuity record is doing, which is the opposite of the intuition that better science needs less paperwork.',
      },
    ],
    misconceptions: [
      {
        claim: 'A break in the chain of custody means the evidence is thrown out.',
        reality:
          'Integrity and admissibility are different questions. Under the English regulatory scheme a failure to follow the code is not itself an offence; the code is admissible and a court may take the failure into account when determining a question — which is about weight, not automatic exclusion.',
      },
      {
        claim: 'If an item is properly documented, it will be admitted.',
        reality:
          'Admissibility turns on rules about how material was obtained and what it is offered to prove, which are unconnected to whether the item is genuine. A perfectly documented item can be inadmissible.',
      },
      {
        claim: 'Chain of custody is a laboratory matter.',
        reality:
          'The English regulator’s stated priority is compliance from crime scene to court and in all sectors, applying equally to private companies, public laboratories, police forces and individuals. Most of the chain happens before the laboratory.',
      },
      {
        claim: 'Contamination is a handling failure rather than a scientific issue.',
        reality:
          'The NIST review identifies determining whether detected DNA is relevant to the crime or is from contamination as one of the interpretive difficulties with mixtures. It is a question the interpretation has to confront, not only a question about procedure.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three distinct mechanisms, frequently described as one.',
      },
      {
        kind: 'list',
        items: [
          'Continuity of the item — the documented account of who held it and when, produced by everyone who handled it.',
          'Quality of the activity — regulated from crime scene to court and across all sectors, with an evidential rather than penal sanction (England and Wales).',
          'Admissibility of the opinion — a legal gate the expert’s report must supply the court with material to pass (England and Wales, CrimPR r. 19.4(h)).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'No admissibility law here',
        text: 'What makes evidence admissible differs completely between systems and none of it is stated on this page. The distinction between integrity and admissibility travels; the rules do not.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The continuity record is one of the few parts of a forensic case a non-scientist can examine. It does not require expertise in the method to ask who held an item and when, which makes it a practical route for testing evidence that is otherwise difficult to challenge from outside the discipline.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'That is also why documented standards matter more than assurances. Where the code is admissible and the report must state the expert’s accreditation, the defence has something written to measure the work against, rather than a conclusion to disbelieve.',
        claim: 'fact',
        sources: ['uk-fsr-act-2021', 'uk-crimpr-2025-part19'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [chain of custody](/glossary/chain-of-custody), [expert evidence in court](/forensics/expert-evidence-in-court), and [what a criminal investigation is](/investigations/what-is-a-criminal-investigation). Whether there was legal authority to examine an item in the first place, and whose competence that is, is [device seizure and device examination](/investigations/device-seizure-and-device-examination).',
      },
    ],
  },
];
