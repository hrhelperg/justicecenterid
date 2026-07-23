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
    section: 'courts',
    related: ['court', 'rule-of-law', 'fair-trial'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'appeal',
    term: 'Appeal',
    definition:
      'A challenge to a decision, heard by a higher or different court, normally on the basis of legal error or procedural unfairness.',
    jurisdictionNote:
      'Some systems provide a full rehearing at the first appellate level; most review for error rather than re-deciding the facts.',
    falseFriends: ['Judicial review', 'Retrial'],
    section: 'courts',
    related: ['court', 'judicial-review', 'oversight'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
  },
  {
    slug: 'judicial-review',
    term: 'Judicial review',
    definition:
      'A court’s examination of whether a public body acted within its legal powers and followed a lawful process.',
    jurisdictionNote:
      'In some systems the phrase also covers review of legislation against a constitution. Whether courts may set aside primary legislation differs fundamentally between countries.',
    falseFriends: ['Appeal'],
    section: 'courts',
    related: ['appeal', 'rule-of-law', 'oversight'],
    sources: ['un-rule-of-law'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
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
      'Scope and timing differ substantially between systems, as does the consequence of a failure.',
    section: 'prosecution',
    related: ['prosecutor', 'criminal-investigation', 'fair-trial'],
    sources: ['iccpr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
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
    section: 'investigations',
    related: ['evidence', 'forensic-science'],
    sources: ['nas-forensic-2009'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
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
