import type { SectionId } from './types';

export interface SectionDefinition {
  id: SectionId;
  title: string;
  shortTitle: string;
  /** Doubles as the meta description. Plain language, one meaning. */
  summary: string;
  /** Rendered as the section's opening paragraph. */
  intro: string;
  /** 4–6 framings of what makes this domain hard to understand. */
  keyIdeas: { title: string; body: string }[];
  /** The comparative caveat, stated up front rather than buried. */
  variationNote: string;
  /** Stated explicitly on the page. Scope discipline is a reader service. */
  outOfScope: string[];
  relatedSections: SectionId[];
}

export const SECTIONS: readonly SectionDefinition[] = [
  {
    id: 'justice',
    title: 'Justice',
    shortTitle: 'Justice',
    summary:
      'What justice means as an organising idea for institutions: the rule of law, due process, the presumption of innocence, and the oversight arrangements that are supposed to keep systems honest.',
    intro:
      'This section covers the ideas that justice systems are built on, rather than the organisations that carry them out. It explains what the rule of law requires, what due process means in practice, why the presumption of innocence exists, and why systems that hold coercive power are designed to be checked by other bodies.',
    keyIdeas: [
      {
        title: 'Justice is a standard, not a verdict',
        body: 'In institutional terms, justice describes how a decision is reached — by whom, on what authority, under what safeguards, and open to what challenge — rather than whether a particular outcome feels right.',
      },
      {
        title: 'Procedure is not an obstacle to justice',
        body: 'Rules about evidence, disclosure, time limits, and representation frequently look like impediments to reaching the obvious answer. They exist because the obvious answer has often been wrong, and because a system that can be right quickly can also be wrong quickly.',
      },
      {
        title: 'The same words carry different meanings',
        body: 'Due process, fair trial, and equality before the law are near-universal aspirations expressed through very different legal machinery. Two systems can honour the same principle through arrangements that look nothing alike.',
      },
      {
        title: 'Rights operate as constraints on power',
        body: 'A right in a justice system is normally a limit on what an institution may do — the requirement of a warrant, of disclosure, of a reasoned decision — rather than an entitlement a person claims directly.',
      },
      {
        title: 'Oversight is part of the design',
        body: 'Complaint bodies, inspectorates, appeal routes, and judicial review are not admissions that a system has failed. They are the mechanism by which a system that will inevitably make errors is able to find and correct them.',
      },
    ],
    variationNote:
      'The concepts in this section are close to universal in aspiration and very different in implementation. Where a guide describes how a principle is applied, it names the jurisdiction it is describing.',
    outOfScope: [
      'Advice about any reader’s legal situation',
      'Political theory beyond what is needed to explain how institutions work',
      'Assessment of whether any particular country’s system is just',
    ],
    relatedSections: ['courts', 'law-enforcement', 'corrections'],
  },
  {
    id: 'law-enforcement',
    title: 'Law Enforcement',
    shortTitle: 'Law Enforcement',
    summary:
      'How policing and other enforcement institutions are organised, what authority they hold, what limits that authority, and how the same job is structured differently around the world.',
    intro:
      'This section covers the organisations that enforce law in public: municipal, regional, national and federal police, gendarmeries, constabularies, sheriffs, and the specialised enforcement bodies that sit alongside them. It explains what they are empowered to do, what constrains that power, and how their structures differ between countries.',
    keyIdeas: [
      {
        title: '“The police” is not one kind of organisation',
        body: 'Some countries have a single national force. Others have thousands of separate local agencies, several national bodies with overlapping remits, or a police service alongside a military-status gendarmerie. Assuming one model is the source of most cross-border misunderstanding.',
      },
      {
        title: 'Most policing is not crime response',
        body: 'A large share of the work is public order, missing persons, road policing, safeguarding, mental-health-related incidents, dispute resolution, and administrative tasks. The investigative work that dominates fiction is a minority of the job.',
      },
      {
        title: 'Authority is conditional',
        body: 'Powers to stop, search, arrest, detain, and use force are granted for specified purposes, at specified thresholds, and are reviewable afterwards. Officers routinely cannot do things that fictional officers do without comment.',
      },
      {
        title: 'Enforcement is not the same as prosecution',
        body: 'In many systems the decision to bring a charge belongs to a prosecutor, not to the officers who investigated. Where that separation exists, it is a deliberate safeguard.',
      },
      {
        title: 'Accountability runs in several directions at once',
        body: 'Internal discipline, an independent complaints body, judicial supervision, an inspectorate, and political oversight are typically all present, each answering a different question, and none of them sufficient alone.',
      },
    ],
    variationNote:
      'Police powers derive from national law and differ substantially even between neighbouring countries. This section describes structures and constraints generally, and names the jurisdiction whenever it describes a specific rule.',
    outOfScope: [
      'Tactics, operational procedure, and equipment',
      'Recruitment marketing, or any content that reads as promotion of a career',
      'Any material that could assist a person in evading or obstructing law enforcement',
    ],
    relatedSections: ['investigations', 'public-safety', 'justice'],
  },
  {
    id: 'courts',
    title: 'Courts',
    shortTitle: 'Courts',
    summary:
      'What courts actually do, how court systems are structured, the difference between adversarial and inquisitorial procedure, and why judicial independence is treated as a structural requirement.',
    intro:
      'This section explains the function of courts: resolving disputes, testing the state’s case against an individual, interpreting law, and reviewing the decisions of public bodies. It covers how court hierarchies are built, how appeals work, and why the independence of judges is a matter of institutional design rather than personal virtue.',
    keyIdeas: [
      {
        title: 'Courts do more than criminal trials',
        body: 'Civil disputes, family matters, administrative review of government decisions, and constitutional questions occupy most courts most of the time. Criminal trials are the most visible part of the work, not the largest.',
      },
      {
        title: 'Adversarial and inquisitorial are a spectrum',
        body: 'The distinction between systems where parties drive the case and systems where the court investigates is real but overstated. Most systems mix elements, and the mix has changed over time in both directions.',
      },
      {
        title: 'A trial is a test of a case, not a search for the whole truth',
        body: 'A criminal court decides whether the case brought meets the required standard on the admissible evidence. That is a narrower question than "what happened", and the difference explains many outcomes that appear inexplicable from outside.',
      },
      {
        title: 'Appeals are not a second opinion',
        body: 'Appellate courts generally review for legal error or procedural unfairness rather than re-deciding the facts. This is why an appeal can succeed without any finding that the original outcome was factually wrong, and fail despite doubts about it.',
      },
      {
        title: 'Independence is structural',
        body: 'Appointment procedures, security of tenure, protected pay, immunity for judicial acts, and public reasoning exist so that independence does not depend on individual courage.',
      },
    ],
    variationNote:
      'Court structures, the role of the judge, the use of juries or lay judges, and the availability of appeal differ profoundly between legal traditions and between countries within the same tradition. The single most common structural error is to assume one pyramid rising to one supreme court: Germany’s Basic Law vests judicial power in three distinct categories and names five federal supreme courts, and France runs two separate court orders chosen by the nature of the dispute.',
    outOfScope: [
      'Coverage of individual cases or outcomes',
      'Profiles of individual judges',
      'Litigation strategy or advice on conducting a case',
    ],
    relatedSections: ['prosecution', 'justice', 'corrections'],
  },
  {
    id: 'prosecution',
    title: 'Prosecution',
    shortTitle: 'Prosecution',
    summary:
      'Who decides that a criminal case goes ahead, on what basis, and how prosecutorial independence, discretion, and disclosure duties are arranged in different systems.',
    intro:
      'This section covers the prosecution function: the decision to bring or not to bring a criminal charge, the standards applied to that decision, the relationship between prosecutors and investigators, and the duties prosecutors owe to the court and to the accused.',
    keyIdeas: [
      {
        title: 'The charging decision is a filter, not a formality',
        body: 'Prosecution services typically apply both an evidential test and a public-interest test. Cases that fail either are not brought, including cases where the prosecutor believes the person is probably guilty.',
      },
      {
        title: 'Discretion is deliberate and constrained',
        body: 'The power not to prosecute is as significant as the power to prosecute. It is normally structured by published guidance and is reviewable, precisely because unstructured discretion is where inconsistency and improper influence enter.',
      },
      {
        title: 'Independence from the executive varies enormously',
        body: 'In some systems the prosecution service is constitutionally separate; in others it sits within a ministry of justice; in others prosecutors are judicial officers. Assuming one arrangement is the norm produces serious misreadings of other countries.',
      },
      {
        title: 'A prosecutor is not the victim’s lawyer',
        body: 'Prosecutors act for the public interest. They consult victims and in many systems have duties towards them, but they do not represent them, and the distinction matters when a case is discontinued.',
      },
      {
        title: 'Disclosure duties cut against the prosecutor’s own case',
        body: 'Prosecutors are generally obliged to disclose material that undermines their case or assists the defence. Failures of disclosure are one of the most common documented causes of wrongful conviction.',
      },
    ],
    variationNote:
      'The prosecution function is one of the most structurally variable parts of any justice system. Terminology from one country rarely transfers safely to another. Several countries have no national prosecution service at all: Germany places an office at every court, and the United States runs federal prosecution alongside separately organised state and local prosecution. Nor is there a universal charging test — Germany’s code obliges its prosecutors to act on sufficient factual indications and asks nothing about the prospects of conviction.',
    outOfScope: [
      'Commentary on live or recent cases',
      'Named prosecutions or prosecutors',
      'Advice to anyone facing a charge',
    ],
    relatedSections: ['courts', 'investigations', 'justice'],
  },
  {
    id: 'investigations',
    title: 'Investigations',
    shortTitle: 'Investigations',
    summary:
      'What a criminal investigation is as a legal process: how it is authorised, how evidence is handled and tested, what safeguards apply, and how investigative failures are identified.',
    intro:
      'This section explains criminal investigation as a legally structured process rather than as a technique. It covers who may authorise investigative steps, why the chain of custody matters, what safeguards apply to interviews and searches, and how miscarriages of justice are identified and reviewed.',
    keyIdeas: [
      {
        title: 'An investigation is a legal process, not a hunt',
        body: 'Its steps are authorised, recorded, and later examined by people who were not present. Much of the work exists so that a decision can be reviewed afterwards.',
      },
      {
        title: 'Authorisation is the main constraint',
        body: 'Intrusive steps generally require approval from someone outside the investigating team — a supervisor, a prosecutor, a judge — at a defined threshold of suspicion. That external approval is the safeguard, and it is why investigations are slower than fiction suggests.',
      },
      {
        title: 'Evidence has a lifecycle',
        body: 'How material is found, recorded, stored, transferred, and examined determines whether it can be relied on at all. Chain-of-custody failures do not merely weaken evidence; they can remove it from the case entirely.',
      },
      {
        title: 'Investigators are required to test their own theory',
        body: 'Many systems place an explicit duty to pursue lines of enquiry that point away from a suspect. Confirmation bias is a documented and studied failure mode, not a hypothetical one.',
      },
      {
        title: 'Interview safeguards exist because of documented failures',
        body: 'Recording requirements, access to legal advice, and protections for vulnerable interviewees were introduced in response to established cases of unreliable admissions, not as abstract courtesies.',
      },
    ],
    variationNote:
      'Who leads an investigation differs fundamentally between systems: police-led with prosecutorial oversight, prosecutor-led, or supervised by an investigating judge. The rest of the process follows from that difference. The difference does not track legal families — Germany, an archetypal civil-law system, has no judge who leads an investigation, and its prosecution carries the legal responsibility that police in other systems hold.',
    outOfScope: [
      'Investigative technique at operational specificity',
      'Surveillance capability, thresholds, or detection detail',
      'Anything that could assist evasion, concealment, or interference with an investigation',
    ],
    relatedSections: ['forensics', 'prosecution', 'law-enforcement'],
  },
  {
    id: 'forensics',
    title: 'Forensics',
    shortTitle: 'Forensics',
    summary:
      'What forensic science can and cannot establish, how its reliability is assessed, what quality assurance and accreditation exist, and how expert evidence is tested in court.',
    intro:
      'This section explains forensic science as evidence rather than as method. It covers what different disciplines claim to establish, the difference between measurement and interpretation, how error and uncertainty are handled, and how courts assess expert testimony.',
    keyIdeas: [
      {
        title: 'Forensic science answers narrow questions',
        body: 'A result typically addresses whether two samples share characteristics, not who committed an offence or when. The gap between the scientific finding and the legal conclusion is where most misunderstanding occurs.',
      },
      {
        title: 'Interpretation is not measurement',
        body: 'Many disciplines rest on a trained examiner’s comparative judgement rather than a numerical output. That does not make them worthless, but it does make examiner reliability, proficiency testing, and blind verification central rather than peripheral.',
      },
      {
        title: 'The scientific foundation varies between disciplines',
        body: 'Major reviews have found that disciplines differ substantially in how well their underlying assumptions have been tested. Treating "forensic evidence" as a single category with a single reliability is a mistake.',
      },
      {
        title: 'Quality systems are part of the evidence',
        body: 'Accreditation, validated methods, proficiency testing, and documented procedures are what allow a result to be relied on. Where they are absent, the result is weaker regardless of the technique used.',
      },
      {
        title: 'Expert evidence is meant to be challenged',
        body: 'Admissibility rules, disclosure of underlying data, and independent expert review exist so that a finding presented to a court can be tested rather than accepted.',
      },
    ],
    variationNote:
      'Accreditation regimes, admissibility standards, and the role of court-appointed versus party-instructed experts differ markedly between jurisdictions.',
    outOfScope: [
      'Laboratory protocols or method detail',
      'Anything describing how a technique is performed, defeated, or evaded',
      'Case-specific forensic analysis',
    ],
    relatedSections: ['investigations', 'courts', 'justice'],
  },
  {
    id: 'corrections',
    title: 'Corrections',
    shortTitle: 'Corrections',
    summary:
      'What happens after sentencing: the purposes of punishment, custodial and non-custodial systems, probation and parole, rehabilitation, and the oversight of places of detention.',
    intro:
      'This section covers the part of the justice system that operates after a court decision: prisons and other places of detention, community sentences, probation and parole supervision, rehabilitation and reintegration work, and the independent inspection arrangements that apply to closed institutions.',
    keyIdeas: [
      {
        title: 'Sentencing pursues several purposes at once',
        body: 'Punishment, public protection, deterrence, rehabilitation, and reparation are frequently in tension. Sentencing frameworks are attempts to structure a trade-off, not to apply a single objective.',
      },
      {
        title: 'Most sentences are not custodial',
        body: 'Fines, community orders, and supervision account for the large majority of sentences in many systems, and the supervision workforce is correspondingly significant.',
      },
      {
        title: 'Detention removes liberty, not rights',
        body: 'International standards treat detained people as retaining rights other than those necessarily restricted by lawful detention. This is the basis on which conditions are inspected and challenged.',
      },
      {
        title: 'Closed institutions require external eyes',
        body: 'Independent inspection and monitoring of places of detention exists because closed environments are structurally resistant to internal scrutiny.',
      },
      {
        title: 'Release is a process, not an event',
        body: 'Parole decisions, licence conditions, recall, and resettlement support mean that the boundary between custody and community is gradual in most systems.',
      },
    ],
    variationNote:
      'Sentencing frameworks, release mechanisms, and prison oversight arrangements are among the most nationally specific parts of any justice system.',
    outOfScope: [
      'Facility-by-facility conditions reporting',
      'Individual case advocacy',
      'Advice to anyone in or facing detention',
    ],
    relatedSections: ['courts', 'justice', 'public-safety'],
  },
  {
    id: 'public-safety',
    title: 'Public Safety',
    shortTitle: 'Public Safety',
    summary:
      'The institutions that sit alongside policing: border and customs authorities, coast guards, civil protection, emergency coordination, and public-safety administration.',
    intro:
      'This section covers the wider public-safety landscape. Border guards, customs authorities, coast guards, civil-protection agencies, emergency communications, and public-safety administrators all carry statutory responsibilities that overlap with policing without being policing, and their mandates are frequently misunderstood.',
    keyIdeas: [
      {
        title: 'Public safety is a crowded institutional space',
        body: 'Several bodies commonly hold overlapping authority over the same territory or activity. Coordination arrangements — not a single chain of command — are what make the system function.',
      },
      {
        title: 'Border and customs are different functions',
        body: 'Immigration control and the movement of goods are distinct legal regimes with distinct powers, frequently exercised by different bodies at the same physical location.',
      },
      {
        title: 'Coast guards vary from military to civilian',
        body: 'The same name covers armed military services in some countries and civilian search-and-rescue or regulatory bodies in others.',
      },
      {
        title: 'Emergency communications is a profession',
        body: 'Call handling and dispatch involve triage, risk assessment, and resource allocation under time pressure, and are a distinct professional discipline rather than an administrative support function.',
      },
      {
        title: 'Civil protection is largely preventive',
        body: 'Most of the work is planning, risk assessment, exercising, and coordination, long before any incident occurs.',
      },
    ],
    variationNote:
      'Which body holds which mandate varies more in this section than in any other. The same institutional name can denote a military service in one country and a civilian regulator in another.',
    outOfScope: [
      'Emergency instructions of any kind — readers in an emergency should contact their local emergency services',
      'Screening, inspection, or selection criteria',
      'Operational procedures of any public-safety body',
    ],
    relatedSections: ['law-enforcement', 'justice', 'corrections'],
  },
];

const SECTION_INDEX = new Map(SECTIONS.map((section) => [section.id, section]));

export function getSection(id: SectionId): SectionDefinition {
  const section = SECTION_INDEX.get(id);
  if (!section) throw new Error(`Unknown section: ${id}`);
  return section;
}
