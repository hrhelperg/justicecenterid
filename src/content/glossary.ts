import type { GlossaryTerm } from './types';

/**
 * Glossary terms.
 *
 * Definitions are deliberately jurisdiction-neutral. Where a term's meaning shifts between
 * systems, `jurisdictionNote` says so, and `falseFriends` records the terms it is most often
 * confused with — the largest single source of reader error on this subject.
 */
export const GLOSSARY: readonly GlossaryTerm[] = [
  {
    slug: 'justice',
    term: 'Justice',
    definition:
      'The principle that people should be treated according to rules that apply equally to everyone, and that decisions affecting them should be made by authorised bodies that are constrained by law and answerable for their decisions.',
    jurisdictionNote:
      'Broad agreement on the principle coexists with very different institutional arrangements for delivering it.',
    section: 'justice',
    related: ['rule-of-law', 'due-process'],
    sources: ['udhr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'rule-of-law',
    term: 'Rule of law',
    definition:
      'The principle that everyone, including the government, is subject to law that is public, applied equally, and interpreted by independent courts.',
    expandedNote:
      'Usually broken down into legality, legal certainty, equality before the law, independent adjudication, access to justice, and the prevention of arbitrariness.',
    jurisdictionNote:
      'Formulations differ between authorities. The United Nations definition also requires consistency with international human-rights norms.',
    falseFriends: ['Law and order', 'Rule by law'],
    section: 'justice',
    related: ['justice', 'judicial-independence'],
    sources: ['un-rule-of-law'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'due-process',
    term: 'Due process',
    alternateTerms: ['Procedural fairness', 'Natural justice', 'Fair trial rights'],
    definition:
      'The requirement that the state follow fair and established procedures before depriving a person of liberty, property, or another important interest.',
    jurisdictionNote:
      'A term of art in some constitutional systems. Others express the same protections as fair-trial rights, procedural fairness, or natural justice.',
    section: 'justice',
    related: ['presumption-of-innocence', 'fair-trial'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'fair-trial',
    term: 'Fair trial',
    definition:
      'A hearing before a competent, independent and impartial tribunal established by law, at which the person has the guarantees necessary for their defence.',
    jurisdictionNote:
      'Expressed in Article 14 of the International Covenant on Civil and Political Rights and in regional human-rights instruments, with domestic effect depending on how each state gives effect to its treaty obligations.',
    section: 'justice',
    related: ['due-process', 'judicial-independence'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'presumption-of-innocence',
    term: 'Presumption of innocence',
    definition:
      'The rule that a person charged with a criminal offence is treated as not guilty until guilt is proved according to law, with the obligation to prove the case resting on the state.',
    expandedNote:
      'A rule about who must prove what, and to what standard — not a statement of belief about whether a particular person did something.',
    section: 'justice',
    related: ['burden-of-proof', 'standard-of-proof', 'acquittal'],
    sources: ['udhr', 'iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'burden-of-proof',
    term: 'Burden of proof',
    definition:
      'The obligation to prove a disputed fact. In criminal cases it normally rests on the prosecution throughout.',
    jurisdictionNote:
      'Some systems permit limited, defined reverse burdens for specific elements of specific offences. Whether these are compatible with the presumption of innocence is frequently litigated.',
    falseFriends: ['Standard of proof'],
    section: 'justice',
    related: ['standard-of-proof', 'presumption-of-innocence'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'standard-of-proof',
    term: 'Standard of proof',
    definition:
      'How convinced the decision-maker must be before a fact is treated as established. Criminal cases use a higher standard than civil disputes.',
    jurisdictionNote:
      'Expressed as "beyond reasonable doubt" in many common-law systems and as the judge’s inner conviction in several civil-law systems. The formulations are not straightforwardly equivalent.',
    falseFriends: ['Burden of proof'],
    section: 'justice',
    related: ['burden-of-proof', 'presumption-of-innocence'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'acquittal',
    term: 'Acquittal',
    definition:
      'A decision that a person is not guilty of the charge. In most systems it means the case was not proved to the required standard.',
    expandedNote:
      'Not the same as a finding of factual innocence. Some systems mark the distinction explicitly, including through separate compensation arrangements.',
    section: 'courts',
    related: ['presumption-of-innocence', 'standard-of-proof'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'jurisdiction',
    term: 'Jurisdiction',
    definition:
      'The authority of a body to act in a matter, defined by territory, subject, or type of person. Also used to mean the territory itself.',
    jurisdictionNote:
      'The double meaning causes frequent confusion: "in this jurisdiction" refers to a place, while "the court has jurisdiction" refers to authority.',
    section: 'courts',
    related: ['court', 'judicial-review'],
    sources: ['rome-statute'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'court',
    term: 'Court',
    alternateTerms: ['Tribunal'],
    definition:
      'A body with legal authority to decide disputes and determine the consequences of its decisions, applying law to established facts and giving reasons.',
    jurisdictionNote:
      'What counts as a court rather than a tribunal, and which bodies are treated as part of the judiciary, differs between systems.',
    section: 'courts',
    related: ['jurisdiction', 'judicial-independence', 'appeal'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'judicial-independence',
    term: 'Judicial independence',
    definition:
      'The structural arrangements that allow judges to decide cases without direction from the government or the parties, including appointment procedures, security of tenure, and protected pay.',
    expandedNote:
      'A protection for the people appearing before the court rather than a privilege of the office.',
    question: 'What is judicial independence, and who is it actually for?',
    purpose:
      'A judge who can be removed, demoted or defunded for deciding against the government is not deciding at all. Independence exists so that the outcome of a case turns on the law and the evidence rather than on who the parties are — which makes it a protection for the litigant, not a perk of the office.',
    context:
      'Independence is structural before it is personal. It is built from appointment procedures, security of tenure, protected remuneration, and rules on transfer and discipline, and it is limited on purpose: accountability for judges is deliberately narrow — conduct and process rather than the substance of decisions — because a mechanism able to punish conclusions would eliminate the thing it was policing.',
    jurisdictionNote:
      'Nearly universal as a stated principle and highly variable in institutional form. Some constitutions write tenure into the text; others leave it to statute or convention. Appointment, discipline and removal arrangements are where the practical differences lie.',
    countryExamples: [
      {
        countrySlug: 'germany',
        note: 'The Basic Law states it directly — judges are independent and subject only to the law — and provides that permanently appointed judges may not be dismissed, suspended, transferred or retired without their consent. Tenure is constitutional text rather than practice.',
      },
      {
        countrySlug: 'japan',
        note: 'Japan vests the whole judicial power in the Supreme Court and inferior courts established by law, permits no extraordinary tribunal, and binds judges to the Constitution and the laws — the same principle secured through a different constitutional architecture.',
      },
    ],
    relatedProfessions: ['judge'],
    section: 'courts',
    related: ['court', 'rule-of-law', 'fair-trial'],
    sources: ['iccpr', 'de-grundgesetz', 'jp-courts-judicial-system'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'appeal',
    term: 'Appeal',
    definition:
      'A challenge to a decision, heard by a higher or different court, normally on the basis of legal error or procedural unfairness.',
    jurisdictionNote:
      'Some systems provide a full rehearing at the first appellate level; most review for error rather than re-deciding the facts. How many tiers exist, and whether reaching the highest court is a right or requires permission, differ substantially.',
    falseFriends: ['Judicial review', 'Retrial'],
    question: 'What is an appeal, and how is it different from a retrial?',
    purpose:
      'First-instance decisions are made once, at speed, by people who can be wrong. Appeal is the mechanism that admits this: it exists so that an error of law or a procedural unfairness can be corrected without requiring the whole case to be tried again, and it is the primary corrective in every system that has one.',
    context:
      'Most appellate courts review rather than re-decide. They ask whether the law was applied correctly and whether the process was fair, and they generally defer to the first-instance findings of fact — which is why "the appeal court disagreed with the verdict" is usually the wrong way to describe what happened. Access is frequently filtered: many systems require permission to appeal, and the highest court commonly takes cases for their legal significance rather than to correct individual outcomes.',
    countryExamples: [
      {
        countrySlug: 'canada',
        note: 'The Supreme Court Act establishes a general court of appeal for Canada sitting at the apex of both the provincial and federal court systems — an unusual arrangement in which one court is final for every kind of law in a federation.',
      },
      {
        countrySlug: 'japan',
        note: 'Japan vests the whole judicial power in a Supreme Court and inferior courts established by law, with no extraordinary tribunal permitted, so the appellate route is a single hierarchy rather than parallel systems.',
      },
    ],
    relatedProfessions: ['judge'],
    section: 'courts',
    related: ['court', 'judicial-review', 'oversight'],
    sources: ['iccpr', 'ca-scc-act', 'jp-courts-judicial-system'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'judicial-review',
    term: 'Judicial review',
    definition:
      'A court’s examination of whether a public body acted within its legal powers and followed a lawful process.',
    jurisdictionNote:
      'One of the least portable terms in this glossary. In some systems it means review of administrative action only; in others it also covers testing legislation against a constitution. Whether any court may set aside primary legislation — and whether that power sits in every court or in one specialised constitutional court — differs fundamentally between countries.',
    falseFriends: ['Appeal'],
    question: 'What is judicial review, and does it mean the same thing everywhere?',
    purpose:
      'Public bodies act under powers granted by law, and someone has to be able to ask whether a particular act stayed inside them. Judicial review is that question put to a court. It is a check on legality rather than on wisdom: the court asks whether the body was entitled to decide as it did, not whether the decision was the best one available.',
    context:
      'The decisive structural variable is who may do it. Diffuse review lets any court disapply a law it finds unconstitutional in the case before it; concentrated review reserves that power to a single constitutional court, and ordinary courts must refer the question. The two produce different case law, different timelines and different politics, and translating the phrase between them without saying which applies is how comparative writing goes wrong.',
    countryExamples: [
      {
        countrySlug: 'czechia',
        note: 'Czechia concentrates constitutional review: a separate Constitutional Court is the judicial body responsible for the protection of constitutionality, sitting outside the ordinary court hierarchy, with jurisdiction to annul statutes that conflict with the constitutional order and to decide individual constitutional complaints.',
      },
      {
        countrySlug: 'germany',
        note: 'Germany likewise separates constitutional adjudication from the ordinary courts, so a German judge who doubts a statute refers the question rather than disapplying it — the opposite of the diffuse model.',
      },
    ],
    relatedProfessions: ['judge'],
    section: 'courts',
    related: ['appeal', 'rule-of-law', 'oversight'],
    sources: ['un-rule-of-law', 'cz-constitution', 'de-grundgesetz'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'legal-certainty',
    term: 'Legal certainty',
    definition:
      'The requirement that law be published, reasonably clear, and generally prospective, so that people can know in advance what is required of them.',
    section: 'justice',
    related: ['rule-of-law', 'justice'],
    sources: ['un-rule-of-law'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'prosecutor',
    term: 'Prosecutor',
    alternateTerms: ['Public prosecutor', 'State prosecutor'],
    definition:
      'The public official who decides whether a criminal case should be brought, on what charges, and who presents that case in court on behalf of the public.',
    jurisdictionNote:
      'Institutional position varies fundamentally: a constitutionally separate service, a body within a ministry, or a corps of judicial officers. Titles do not transfer safely between countries.',
    falseFriends: ['District attorney', 'Advocate', 'Investigating judge'],
    section: 'prosecution',
    related: ['charging-decision', 'prosecutorial-discretion', 'disclosure'],
    sources: ['un-prosecutors-guidelines'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'charging-decision',
    term: 'Charging decision',
    definition:
      'The decision whether to bring a criminal case, typically applying an evidential test and then a public-interest test.',
    expandedNote:
      'The order matters: a case that fails the evidential test is not saved by being important.',
    section: 'prosecution',
    related: ['prosecutor', 'prosecutorial-discretion'],
    sources: ['un-prosecutors-guidelines'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'prosecutorial-discretion',
    term: 'Prosecutorial discretion',
    definition:
      'The authority to decide whether to bring, continue, or discontinue a prosecution where the evidence would permit it.',
    jurisdictionNote:
      'Some systems apply a principle of mandatory prosecution where evidence permits; others grant broad discretion. Most sit between the two, with exceptions to the stated rule.',
    section: 'prosecution',
    related: ['prosecutor', 'charging-decision'],
    sources: ['un-prosecutors-guidelines'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'disclosure',
    term: 'Disclosure',
    alternateTerms: ['Discovery'],
    definition:
      'The obligation to provide the defence with relevant material, including material that undermines the prosecution case or assists the defence.',
    expandedNote:
      'Failures of disclosure are among the most commonly documented causes of wrongful conviction.',
    jurisdictionNote:
      'Scope and timing differ substantially between systems, as does the consequence of a failure. Adversarial systems tend to frame it as a duty owed by one party to the other; inquisitorial systems tend to place the obligation earlier, on an investigation required to gather exculpatory material in the first place.',
    question:
      'What is disclosure, and why must a prosecutor hand over material that damages the case?',
    purpose:
      'A criminal trial is not a contest between equally resourced parties. The state holds the investigation, the files and the forensic capability, and the accused generally holds none of them. Disclosure exists to stop that asymmetry from deciding outcomes: it obliges the side with the material to surrender the parts that do not help it.',
    context:
      'The obligation cuts directly against the natural incentive of the people who built the case, which is why it is enforced from outside — by the court, and by the possibility that proceedings are stopped or a conviction overturned. The United Nations Guidelines on the Role of Prosecutors place it among the duties of an office that acts in the public interest rather than as an advocate for conviction.',
    countryExamples: [
      {
        countrySlug: 'germany',
        note: 'Germany illustrates the inquisitorial framing: the prosecution service directs the investigation and is required to ascertain exculpatory circumstances as part of it, so the obligation attaches to how the case is built rather than only to what is handed over afterwards.',
      },
    ],
    relatedInstitutions: ['prosecution-service'],
    relatedProfessions: ['prosecutor', 'detective'],
    section: 'prosecution',
    related: ['prosecutor', 'criminal-investigation', 'fair-trial'],
    sources: ['iccpr', 'un-prosecutors-guidelines', 'de-stpo-160'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'criminal-investigation',
    term: 'Criminal investigation',
    definition:
      'A legally authorised process for establishing whether a criminal offence occurred, who was involved, and whether there is evidence capable of being tested in court.',
    jurisdictionNote:
      'Who leads differs fundamentally: police with prosecutorial oversight, a prosecutor, or an investigating judge.',
    section: 'investigations',
    related: ['evidence', 'chain-of-custody', 'warrant'],
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'evidence',
    term: 'Evidence',
    definition:
      'Material that may be used to establish a fact in a legal proceeding, subject to rules governing what may be admitted and how much weight it carries.',
    jurisdictionNote:
      'Rules on admissibility, and on the consequences of unlawfully obtained material, differ substantially between systems.',
    section: 'investigations',
    related: ['chain-of-custody', 'expert-evidence', 'criminal-investigation'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'chain-of-custody',
    term: 'Chain of custody',
    definition:
      'The documented account of who held an item of evidence, and when, from collection to examination and presentation.',
    expandedNote:
      'A gap does not merely weaken evidence; it can remove it from a case entirely.',
    question: 'What is chain of custody, and why can a gap in it destroy evidence?',
    purpose:
      'An item only means something in court if the court can be sure it is the same item, unaltered, that was taken from the scene. Chain of custody is the record that makes that assurance checkable by someone who was not there — which is why it is documentation rather than physical security.',
    context:
      'It runs from seizure through storage, transfer, examination and return, and every handover is a point at which the account can break. The record is what allows a defence to test handling and a laboratory to demonstrate that what it examined is what was collected. Because interpretation rests on the integrity of the item, a custody failure can defeat an otherwise sound examination entirely.',
    jurisdictionNote:
      'The principle is close to universal; the formalities are not. What must be recorded, who may sign, how long material is retained, and the consequence of a break — exclusion, reduced weight, or an argument for the jury — are set by national law and by laboratory accreditation requirements.',
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'The 2009 National Academy of Sciences review of American forensic science examined evidence handling as part of a system-wide critique, and its findings about the discipline’s research foundation are a critique of arrangements in one country rather than a global audit.',
      },
    ],
    relatedProfessions: ['forensic-scientist', 'detective'],
    section: 'investigations',
    related: ['evidence', 'forensic-science'],
    sources: ['nas-forensic-2009', 'enfsi'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'warrant',
    term: 'Warrant',
    definition:
      'An authorisation, normally issued by a judge or other independent authority, permitting an action that would otherwise be unlawful, such as a search or an arrest.',
    jurisdictionNote:
      'Who may issue a warrant, on what threshold, and which actions require one differ substantially between systems.',
    section: 'investigations',
    related: ['criminal-investigation', 'due-process'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'forensic-science',
    term: 'Forensic science',
    definition:
      'The application of scientific methods to questions arising in legal proceedings, covering disciplines from chemical and biological analysis to the examination of documents, marks, and digital records.',
    expandedNote:
      'Disciplines differ substantially in how well their underlying assumptions have been tested. Treating forensic evidence as a single category with a single reliability is a common and consequential error.',
    section: 'forensics',
    related: ['expert-evidence', 'accreditation', 'chain-of-custody'],
    sources: ['nas-forensic-2009', 'nist-forensic-science'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'expert-evidence',
    term: 'Expert evidence',
    definition:
      'Evidence given by a person with specialist knowledge, offering an opinion on matters outside ordinary experience.',
    jurisdictionNote:
      'Admissibility standards and whether experts are appointed by the court or instructed by the parties differ substantially between legal systems.',
    section: 'forensics',
    related: ['forensic-science', 'evidence', 'court'],
    sources: ['nas-forensic-2009'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'accreditation',
    term: 'Accreditation',
    definition:
      'Formal recognition that a laboratory or provider meets defined standards of competence, method validation, and quality management.',
    jurisdictionNote:
      'Mandatory for certain forensic disciplines in some countries and voluntary in others.',
    section: 'forensics',
    related: ['forensic-science', 'expert-evidence'],
    sources: ['enfsi', 'nist-forensic-science'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'police',
    term: 'Police',
    definition:
      'A civil body with broad legal authority over a defined territory to prevent and detect offences, maintain public order, and protect people from harm.',
    jurisdictionNote:
      'Structures range from a single national service to thousands of separate local agencies. Some countries also maintain a military-status gendarmerie alongside a civilian police service.',
    falseFriends: ['Law enforcement', 'Gendarmerie', 'Sheriff'],
    section: 'law-enforcement',
    related: ['law-enforcement', 'gendarmerie', 'accountability'],
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'law-enforcement',
    term: 'Law enforcement',
    definition:
      'The function of applying and upholding the law. Performed by police and also by customs, border, tax, regulatory, and other bodies with specific statutory powers.',
    expandedNote:
      'A function, not an institution. Conflating it with "police" makes it hard to identify which body acted and therefore which oversight route applies.',
    falseFriends: ['Police'],
    section: 'law-enforcement',
    related: ['police', 'public-safety', 'accountability'],
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'gendarmerie',
    term: 'Gendarmerie',
    definition:
      'A police force with military status, performing ordinary civilian policing, typically alongside a separate civilian police service.',
    jurisdictionNote:
      'Present in a number of countries and entirely absent from others. Military status principally affects the chain of command and discipline rather than the day-to-day work.',
    falseFriends: ['Military police', 'Police'],
    section: 'law-enforcement',
    related: ['police', 'law-enforcement'],
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'public-safety',
    term: 'Public safety',
    definition:
      'The wider field of institutions responsible for protecting people from harm, including border and customs authorities, coast guards, civil protection, and emergency coordination.',
    jurisdictionNote:
      'Which body holds which mandate varies more here than in any other part of the justice landscape. The same name can denote a military service in one country and a civilian regulator in another.',
    section: 'public-safety',
    related: ['law-enforcement', 'police'],
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'accountability',
    term: 'Accountability',
    definition:
      'The obligation of an institution or official to explain and justify decisions to a body with standing to examine them, and to accept consequences where standards were not met.',
    section: 'justice',
    related: ['oversight', 'judicial-review', 'inspectorate'],
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'oversight',
    term: 'Oversight',
    definition:
      'Arrangements by which the decisions of an institution are examined by a body that did not make them, including appeals, complaints bodies, inspectorates, and detention monitoring.',
    expandedNote:
      'Different mechanisms answer different questions. A complaints body typically cannot quash a conviction, and an inspectorate typically cannot discipline an individual.',
    section: 'justice',
    related: ['accountability', 'inspectorate', 'judicial-review'],
    sources: ['mandela-rules'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'inspectorate',
    term: 'Inspectorate',
    definition:
      'A body that examines whether an institution as a whole is operating to standard, looking at systems and patterns rather than individual cases.',
    jurisdictionNote:
      'Inspection of places of detention may be carried out by a statutory inspectorate, an ombudsman, lay monitoring boards, an international body, or several in combination.',
    section: 'corrections',
    related: ['oversight', 'accountability'],
    sources: ['mandela-rules'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
];

export const PUBLISHED_GLOSSARY: readonly GlossaryTerm[] = GLOSSARY.filter(
  (term) => term.status === 'published',
).toSorted((a, b) => a.term.localeCompare(b.term, 'en'));

const GLOSSARY_INDEX = new Map(GLOSSARY.map((term) => [term.slug, term]));

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_INDEX.get(slug);
}

/* -------------------------------------------------------------------------- */
/* Wave 3: which terms become pages                                           */
/* -------------------------------------------------------------------------- */

/**
 * Terms whose reader intent is already owned by a published route elsewhere.
 *
 * This is the single largest reason a glossary entry does not become a page, and it is
 * held here as data so the gate can stay generic and the ownership claim can be checked.
 * Every entry names a route that exists today:
 *
 *   justice, rule-of-law, due-process, presumption-of-innocence -> /justice/{guide}
 *   court                   -> /courts/what-do-courts-do
 *   prosecutor              -> /prosecution/what-does-a-prosecutor-do AND
 *                              /professions/prosecutor
 *   criminal-investigation  -> /investigations/what-is-a-criminal-investigation
 *   forensic-science        -> /forensics/what-is-forensic-science
 *   police, law-enforcement -> /law-enforcement/police-and-law-enforcement-difference
 *   accountability, oversight -> /law-enforcement/why-police-accountability-matters and
 *                              /justice/why-justice-systems-need-oversight
 *   gendarmerie             -> /institutions/gendarmerie
 *   inspectorate            -> /law-enforcement/how-police-are-held-to-account
 *   public-safety           -> /public-safety, a SECTION route: the guide-vs-section
 *                              collision class first recorded in the Wave 1 matrix
 *
 * Routing any of these would put two URLs on this platform competing for one query.
 */
export const GLOSSARY_OWNED_ELSEWHERE: readonly string[] = [
  'justice',
  'rule-of-law',
  'due-process',
  'presumption-of-innocence',
  'court',
  'prosecutor',
  'criminal-investigation',
  'forensic-science',
  'police',
  'law-enforcement',
  'accountability',
  'oversight',
  'gendarmerie',
  'inspectorate',
  'public-safety',
];

/** Canonical path for a routed glossary term. */
export function glossaryPath(term: GlossaryTerm): string {
  return `/glossary/${term.slug}`;
}
