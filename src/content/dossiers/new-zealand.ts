import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The New Zealand dossier — a unitary common-law state with an uncodified constitution (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the Constitution Act 1986 (via the UN FAO
 * FAOLEX mirror — legislation.govt.nz is behind an AWS WAF challenge), the Policing Act 2008 (s 16,
 * via a mirror), the judiciary's own site, the Ministry of Justice, the Crown Law Office, the IPCA,
 * the Supreme Court's judgment in Ellis v R [2022] NZSC 114, and the World Prison Brief; and
 * independently re-verified in an adversarial pass (ss 23/24 and s 16 re-confirmed verbatim; the
 * World Prison Brief figures re-confirmed by hand).
 *
 * The model result: New Zealand is unitary — all four functions national, no sub-national record.
 * Its distinctive features are an uncodified constitution with parliamentary sovereignty (courts
 * cannot strike down statutes), tikanga Māori as a recognised source of law, a Law-Officer
 * prosecution model rather than a Director of Public Prosecutions, and the common-law police-led
 * (not prosecutor-led) investigation — a clean contrast to the civil-law systems on this site.
 */
const NZ_PRISON_POPULATION: RestrictedClaim = {
  id: 'nz-prison-population-2026',
  category: 'detention-capacity',
  statement:
    'On 31 March 2026, New Zealand prisons held 11,255 people including those on remand — a prison population rate of 211 per 100,000 inhabitants. The most recent official system capacity the source records is from 2019 (10,633 places), so no current occupancy level or density can be stated.',
  claimType: 'fact',
  sources: ['wpb-new-zealand'],
  sourceScope:
    'World Prison Brief (ICPR) country page for New Zealand: total prison population 11,255 including pre-trial detainees at 31 March 2026 (source: Ministry of Justice); rate 211 per 100,000 based on an estimated national population of 5.34 million; official operational capacity 10,633 dated 30 June 2019. No occupancy figure is taken, because the capacity date is seven years earlier than the population date.',
  jurisdiction: 'NZ',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2026-03-31',
  limitation:
    'A national count and rate for a single, nationally administered prison system, at one reference date. The only official capacity the source carries is from 2019, so nothing is said here about whether the system was over or under capacity — no occupancy or density claim is made. The rate uses an estimated population denominator. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const NEW_ZEALAND: CountryDossier = {
  countryCode: 'NZ',
  slug: 'new-zealand',
  name: 'New Zealand',
  officialName: 'New Zealand',
  independentBodyNoun: 'a New Zealand government body',
  summary:
    'New Zealand (Aotearoa) is a unitary common-law state with no single written constitution: Parliament is sovereign and the courts cannot strike down statutes. Its justice functions are all national, its prosecution follows a Law-Officer model rather than a Director of Public Prosecutions, and — in the common-law manner — the police investigate independently of both ministers and prosecutors. Tikanga Māori is a recognised source of its law.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['nz'],
  sources: ['nz-constitution-act', 'nz-courts'],
  uncertainty: [
    'The Ombudsman and Human Rights Commission pages, and the Department of Corrections site, were not reachable (HTTP 403 / WAF); the OPCAT/torture-prevention and corrections-statute details rest on secondary reading and are described with that limit, while the administering department is taken from the World Prison Brief.',
    'The verbatim "apolitical"/prosecutor-independence wording lives in the Solicitor-General\'s Prosecution Guidelines, which were not re-fetched; the independence is described from the Law-Officer structure rather than quoted.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'New Zealand (Aotearoa) is a unitary parliamentary state with a common-law tradition and, unusually, no single supreme-law constitution. Its constitutional framework is uncodified — the Constitution Act 1986 together with convention, the common law, and the Treaty of Waitangi / Te Tiriti o Waitangi. The Constitution Act 1986 recognises the three branches of government, "each [operating] independently of the others" (the separation of powers), and protects judges\' tenure and salary (sections 23 and 24).',
      claim: 'fact',
      sources: ['nz-constitution-act', 'nz-courts'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Parliament, not a constitution, has the last word',
      text: 'Because there is no supreme-law constitution, Parliament is sovereign and the courts cannot strike down an Act of Parliament — the opposite of the constitutional-supremacy systems on this site. Under the New Zealand Bill of Rights Act 1990 the courts may issue a declaration that a statute is inconsistent with protected rights, but Parliament keeps the final say. The courts page sets this out.',
    },
    {
      kind: 'paragraph',
      text: 'Everything runs through national institutions: a unified court system topped by the Supreme Court, a single New Zealand Police force, the Crown\'s Law Officers and Crown Solicitors for prosecution, and the Department of Corrections. And tikanga Māori is a recognised source of the country\'s law — the Supreme Court has accepted it "was the first law of Aotearoa New Zealand".',
      claim: 'fact',
      sources: ['nz-courts', 'nz-ellis-v-r'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of New Zealand',
      summary:
        'An uncodified constitution under parliamentary sovereignty, with the Treaty of Waitangi and tikanga Māori as part of the constitutional and legal fabric.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['nz-constitution-act', 'nz-courts', 'nz-ellis-v-r'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'New Zealand has no single written constitution. The Constitution Act 1986 organises the State into the Sovereign, the Executive, the Legislature and the Judiciary, and the judiciary\'s independence rests on section 23 (a High Court judge may be removed only by the Sovereign or Governor-General on an address of the House of Representatives, and only for misbehaviour or incapacity) and section 24 (a judge\'s salary may not be reduced during their commission) — described by the courts as "ancient guarantees".',
          claim: 'fact',
          sources: ['nz-constitution-act', 'nz-courts'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The Treaty of Waitangi and tikanga Māori',
          text: 'The Treaty of Waitangi / Te Tiriti o Waitangi (1840) is part of the constitutional framework, and the Waitangi Tribunal is a standing commission of inquiry into Treaty claims (not a court). Beyond the Treaty, tikanga Māori is a recognised source of law: in Ellis v R [2022] NZSC 114 the Supreme Court accepted that tikanga "was the first law of Aotearoa New Zealand" and may be engaged as part of the common law — while noting it does not have the mandate to "declare" tikanga as it declares the common law. This is stated by attribution to the judgment.',
        },
      ],
      uncertainty: [
        'The Constitution Act is cited from the FAO mirror because the official legislation site was WAF-walled; ss 23/24 were re-confirmed verbatim.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in New Zealand',
      summary:
        'A single national force, the New Zealand Police, whose Commissioner must act independently of ministers on the investigation and enforcement of the law.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['nz-policing-act'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing is a single national function. The New Zealand Police (Ngā Pirihimana o Aotearoa), governed by the Policing Act 2008 and organised into districts, is one national force headed by the Commissioner of Police, who is responsible to the Minister of Police for carrying out the functions and general management of the Police (section 16(1)).',
          claim: 'fact',
          sources: ['nz-policing-act'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Operationally independent of ministers',
          text: 'Section 16(2) of the Policing Act 2008 requires the Commissioner to "act independently of" any Minister of the Crown on the maintenance of order, the enforcement of the law, "the investigation and prosecution of offences", and decisions about individual employees. So while the Police answer to a minister for management, no minister may direct them on an individual case or investigation — a statutory statement of operational independence.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the force's national structure and its statutory independence. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        'The internal district structure of the Police was not researched beyond the Act.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in New Zealand',
      summary:
        'A unified national hierarchy topped by the Supreme Court, which replaced appeals to the Privy Council in 2004 — with diffuse review and no power to strike down statutes.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['nz-moj-courts', 'nz-courts'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The courts form a single national hierarchy: the District Court (Te Kōti-ā-Rohe), the High Court (Te Kōti Matua), the Court of Appeal (Te Kōti Pīra), and at the apex the Supreme Court of New Zealand (Te Kōti Mana Nui). The Supreme Court is "New Zealand\'s final court of appeal", with "the role of maintaining overall coherence in the legal system"; it "replaced the Judicial Committee of the Privy Council in London … on 1 July 2004". Specialist courts include the Māori Land Court (Te Kōti Whenua Māori).',
          claim: 'fact',
          sources: ['nz-moj-courts', 'nz-courts'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Review without a power to strike down',
          text: 'There is no dedicated constitutional court, and review is diffuse — any court interprets rights in the cases before it. But because Parliament is sovereign, no court may invalidate an Act of Parliament; the strongest judicial remedy against an inconsistent statute is a declaration of inconsistency under the New Zealand Bill of Rights Act 1990, which does not strike the statute down.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The tribunals, the Court Martial, and the detailed jurisdiction of each court were not set out beyond the hierarchy and the apex.',
        },
      ],
      uncertainty: [
        'The court hierarchy is cited from the judiciary and Ministry of Justice sites; the Senior Courts Act 2016 was not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in New Zealand',
      summary:
        'A Law-Officer model — the Attorney-General and Solicitor-General superintend prosecutions, serious cases go to private-practice Crown Solicitors, and the police prosecute lesser matters — rather than a single Director of Public Prosecutions.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['nz-crown-law'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'New Zealand has no single Director of Public Prosecutions. Prosecution is superintended by the Crown\'s Law Officers — the Attorney-General (a Minister, the senior Law Officer) and the Solicitor-General (the junior Law Officer and chief executive of the Crown Law Office) — through Crown Law\'s Public Prosecutions Unit. Serious ("Crown") prosecutions are conducted by Crown Solicitors, private-practice lawyers holding the Crown warrant in each main centre; less serious matters are commonly prosecuted by the New Zealand Police.',
          claim: 'fact',
          sources: ['nz-crown-law'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A common-law prosecution model',
          text: "This is a distinctively common-law arrangement. Where the civil-law systems on this site place the prosecution inside the judiciary or under a justice ministry as a standing service, New Zealand splits the work between the Crown's Law Officers, private-practice Crown Solicitors, and the police. The Solicitor-General's independence in prosecution decisions is a matter of constitutional convention rather than of a statute placing the office outside the executive.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "The verbatim independence wording lives in the Solicitor-General's Prosecution Guidelines, which were not re-fetched; the independence is described from the structure, not quoted.",
        },
      ],
      uncertainty: [
        'The Crown Prosecution Regulations 2013 and the Prosecution Guidelines were not read in full.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in New Zealand',
      summary:
        'The common-law model: the police investigate and lay charges, independently of ministers, and prosecutors advise but do not direct the investigation.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['nz-policing-act', 'nz-crown-law'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in New Zealand follows the common-law pattern rather than the civil-law one: the police investigate and lay charges themselves, and the prosecuting Law Officers and Crown Solicitors advise on and conduct the resulting prosecution but do not command the investigation. The Policing Act 2008 (section 16(2)) makes the Commissioner act independently of ministers on "the investigation and prosecution of offences".',
          claim: 'fact',
          sources: ['nz-policing-act', 'nz-crown-law'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Police-led, not prosecutor-led',
          text: "This is the clean opposite of the magistrate-directed or prosecutor-directed investigation found in the civil-law systems on this site (where a prosecutor or investigating judge directs the pre-trial phase). Here the investigating and the prosecuting roles are institutionally separate, and the investigation is the police's.",
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who prosecutes. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The statutory powers exercised during an investigation (search, surveillance authorisations) were not set out beyond the independence provision.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in New Zealand',
      summary:
        'The Department of Corrections (Ara Poutama Aotearoa) runs the prisons — and a prison-population figure reported with an honest gap where the capacity data is stale.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['wpb-new-zealand'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [NZ_PRISON_POPULATION],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in New Zealand are run nationally by the Department of Corrections (Ara Poutama Aotearoa), a central-government department. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['wpb-new-zealand'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A figure reported only as far as the source allows',
          text: 'The World Prison Brief records that on 31 March 2026 New Zealand prisons held 11,255 people including those on remand — a rate of 211 per 100,000 inhabitants (source: Ministry of Justice). The most recent official capacity it carries, however, is from 2019 (10,633 places), so no current occupancy level is stated here: dividing a 2026 population by a 2019 capacity would mix reference dates. The count is a single-day snapshot, and because the World Prison Brief compiles national figures collected under differing definitions, these levels are not reliably comparable between countries.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons, community sentences, the Parole Board and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        "The administering department is taken from the World Prison Brief; the Corrections Act 2004 detail was not fetched from a primary source (the department's site was WAF-walled).",
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in New Zealand',
      summary:
        'The Independent Police Conduct Authority for the police, the Ombudsman as torture-prevention monitor, and judicial-conduct machinery in place of a judicial council.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['nz-ipca'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Independent Police Conduct Authority (IPCA)',
              description:
                'An independent body set up by Parliament (1989) to keep watch over the Police; on its own account "we are not part of the NZ Police" and "under law we are fully independent". It receives and investigates complaints against the Police.',
            },
            {
              term: 'Ombudsman (Kaitiaki Mana Tangata)',
              description:
                "An Officer of Parliament who investigates complaints about government administrative decisions, and a designated National Preventive Mechanism under the Optional Protocol to the UN Convention against Torture — monitoring places of detention including prisons. Described here from secondary reading, because the Ombudsman's site was not reachable.",
            },
            {
              term: 'Judicial conduct (no judicial council)',
              description:
                'New Zealand has no single judicial council of the continental type. Judicial appointments are made through the executive (the Attorney-General and Governor-General), and complaints about judicial conduct are handled by a Judicial Conduct Commissioner and, for serious cases, a Judicial Conduct Panel.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the bodies that oversee the police, detention and judicial conduct, and their basis. It does not assess how effective any of them is, and the Ombudsman and judicial-conduct details rest on secondary reading where the official sites were not reachable.',
        },
      ],
      uncertainty: [
        "Only the IPCA page was directly fetched; the Ombudsman's OPCAT role and the judicial-conduct statute names come from secondary reading and are described with that limit.",
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for New Zealand',
      summary:
        'Every source used for the New Zealand pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [
        'nz-constitution-act',
        'nz-courts',
        'nz-moj-courts',
        'nz-crown-law',
        'nz-policing-act',
        'nz-ipca',
        'nz-ellis-v-r',
        'wpb-new-zealand',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The New Zealand pages rest on the Constitution Act 1986 and the Policing Act 2008 (both fetched from mirrors because the official legislation site is behind a WAF), the judiciary's own site and the Ministry of Justice for the courts, the Crown Law Office for prosecution, the Independent Police Conduct Authority for oversight, the Supreme Court's judgment in Ellis v R for tikanga, and the World Prison Brief for the prison figures. Each was read or retrieved and confirmed on 27 July 2026 and independently re-checked; sections 23/24 of the Constitution Act, section 16 of the Policing Act, and the World Prison Brief figures were re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Access notes and honest limits',
          text: "The official legislation.govt.nz was behind an AWS WAF JavaScript challenge, so statute text was read from the UN FAO and a police-human-rights mirror; the Department of Corrections, Ombudsman and Human Rights Commission sites returned HTTP 403, so their content rests on secondary reading and is described as such. The prosecutor-independence wording is in the Solicitor-General's Prosecution Guidelines, not quoted here.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/new-zealand-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in New Zealand',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in New Zealand (the Institute of Environmental Science and Research, which provides forensic services to the Police) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in New Zealand',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in New Zealand involve the New Zealand Customs Service and Immigration New Zealand, and could not be researched to the standard required here without risking an inaccurate description of a security-adjacent function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of New Zealand',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "New Zealand's institutional history — the Treaty of Waitangi and its ongoing settlement process, the move from Privy Council appeals to a domestic Supreme Court, and the development of tikanga in the common law — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for New Zealand',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the Constitution Act 1986, the Policing Act 2008, the 2004 creation of the Supreme Court, and Ellis v R [2022] — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
