import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Kenya dossier — a devolved unitary state under a supreme, transformative constitution, with
 * justice entirely national (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the Constitution of Kenya, 2010 (the full
 * official Kenya Law text, including a direct read of the Fourth Schedule), the Office of the
 * Director of Public Prosecutions, and the World Prison Brief; independently re-verified in an
 * adversarial pass (the constitutional articles and the Fourth Schedule confirmed verbatim, and the
 * World Prison Brief figures re-confirmed by hand). Corrections from verification applied: the
 * prison-population and general-population figures are attributed to their actual sources (the
 * national statistics bureau for the prison total; UN figures for the population base); the
 * operational Kenya Prisons Service is named without asserting an unresolved current office-holder;
 * and the 2024 protests, the BBI litigation and other reform churn are left out as non-structural.
 *
 * The model result: despite devolution to 47 counties, all four justice functions are national — no
 * county runs courts, prosecution, police or prisons — so one country record, no sub-national record
 * (like South Africa; the opposite of Mexico, Argentina and India). Distinctive: a constitutionally
 * independent prosecution that can direct the police to investigate, a police service whose
 * Inspector-General has an investigation firewall, diffuse constitutional review with a 2010 apex
 * Supreme Court, and Kadhis' courts for Muslim personal status.
 */
const KE_PRISON_DENSITY: RestrictedClaim = {
  id: 'ke-prison-density-2025',
  category: 'detention-capacity',
  statement:
    "Kenya's prison population averaged 60,740 over 2025 — a rate of about 101 per 100,000 of the national population. The most recent official system capacity the source records is 34,000 places, dated December 2023, against which the source reports an occupancy of about 176.5% as of December 2023 — well above capacity — but the population figure is a 2025 annual average while the capacity and occupancy carry a December 2023 date, so no single, same-dated occupancy is stated.",
  claimType: 'fact',
  sources: ['wpb-kenya'],
  sourceScope:
    'World Prison Brief (ICPR) country page for Kenya: prison population 60,740 as an average over 2025 (attributed to the national statistics bureau); rate 101 per 100,000 based on an estimated national population of 59.98 million at mid-2025 (from United Nations figures); official capacity 34,000 dated December 2023; occupancy level circa 176.5% dated December 2023. Administration: the Kenya Prisons Service under the State Department for Correctional Services.',
  jurisdiction: 'KE',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2025',
  limitation:
    "A national aggregate for a single, nationally administered prison system (the Kenya Prisons Service), reported by the World Prison Brief. Two reference dates travel with these figures and must not be conflated: the population of 60,740 is an average over the year 2025, whereas the capacity of 34,000 and the occupancy of about 176.5% are dated December 2023. The source's occupancy figure is therefore a December 2023 measure, not a current one, and computing a fresh occupancy by setting the 2025 average population against the 2023 capacity would mix reference dates, so that is not done here. The rate uses an estimated population denominator. A national occupancy does not establish the position of any individual prison. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page.",
};

export const KENYA: CountryDossier = {
  countryCode: 'KE',
  slug: 'kenya',
  name: 'Kenya',
  officialName: 'the Republic of Kenya',
  independentBodyNoun: 'a Kenyan government body',
  summary:
    'Kenya is a devolved unitary state under a supreme 2010 Constitution and a common-law tradition — its courts may strike down laws that conflict with the Constitution. Despite 47 county governments, all four justice functions are national: a single national judiciary topped by the Supreme Court, a constitutionally independent prosecuting authority that can direct the police to investigate, one national police service, and one national prison service. It has a rich set of oversight commissions.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['ke'],
  sources: ['ke-constitution', 'wpb-kenya'],
  uncertainty: [
    'The Independent Policing Oversight Authority (IPOA) is described as a statutory civilian police-oversight body; its establishing Act (widely cited as the IPOA Act, No. 35 of 2011) was not re-fetched line by line, so it is stated at the level of the body and its function, not its detailed statutory mandate.',
    'The statutory Act numbers for the human-rights and administrative-justice commissions were not re-fetched from primary text; the commissions themselves rest on Article 59 of the Constitution and its provision for restructuring into separate commissions.',
    'Current office-holders (the Inspector-General, the Director of Public Prosecutions, the Commissioner-General of Prisons) are not named — they change, and one reported surname spelling could not be resolved against an official source.',
    'Reform and current-events matters — the 2022 BBI litigation, the 2023 police-reform taskforce, proposals still before Parliament, and the 2024 protests and their policing — are not described; they are contested, unresolved or non-structural, and do not change the institutional map set out here.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Kenya is a devolved unitary state — one sovereign country with 47 county governments — under a supreme, transformative Constitution (2010), and a common-law tradition. The Constitution, not Parliament, is supreme: it is "the supreme law of the Republic", and "any law … that is inconsistent with this Constitution is void to the extent of the inconsistency" (Article 2). The courts are "subject only to this Constitution and the law" and not subject to the control or direction of any person or authority (Article 160).',
      claim: 'fact',
      sources: ['ke-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Counties, but a national justice system',
      text: 'Despite its 47 counties, Kenya runs justice nationally. The Constitution\'s Fourth Schedule assigns to the national government both "Courts" (item 8) and police services, criminal law and correctional services (item 7); prosecution sits with the national Director of Public Prosecutions. The counties are given agriculture, county health, transport, trade, planning, pre-primary education, firefighting and the like — none of the four justice functions. This is the same result as South Africa (a decentralised state whose justice is national), and the opposite of the federations elsewhere in this batch — Mexico, Argentina and India — where the states or provinces run their own courts, police and prisons. So Kenya needs no sub-national record.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions: a single judiciary topped by the Supreme Court, a constitutionally independent prosecuting authority, one national police service, and one national prison service — with a rich set of oversight commissions over them.',
      claim: 'fact',
      sources: ['ke-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Kenya',
      summary:
        'A supreme 2010 constitution under which the courts may invalidate inconsistent law — a devolved unitary state whose justice functions are all national.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ke-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Kenya\'s legal system rests on a common-law tradition and the transformative Constitution of 2010. The Constitution is supreme, and any law inconsistent with it is void to the extent of the inconsistency (Article 2); judicial authority derives from the people and is vested in courts that are independent and "subject only to this Constitution and the law" (Article 160). It is a devolved unitary state with 47 county governments, but the counties have no competence over the courts, prosecution, police or prisons.',
          claim: 'fact',
          sources: ['ke-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Devolution without devolved justice',
          text: 'Kenya devolves a great deal of government to its 47 counties — but not justice. The Fourth Schedule keeps courts, criminal law, policing and correctional services in the national sphere, so devolution here is a story about health, agriculture and local services, not about who runs the courts or the police. That makes Kenya a devolved-unitary counterpart to South Africa, whose provinces likewise run none of the four functions.',
        },
      ],
      uncertainty: [
        'Constitutional articles are cited from the official Kenya Law text; English and Kiswahili are the official languages, with English the working language of these national institutions.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Kenya',
      summary:
        'A single national force, the National Police Service, whose Inspector-General holds independent command — with a constitutional firewall against directing a particular investigation.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ke-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing is a single national function. The National Police Service is "a national service and shall function throughout Kenya" (Article 243), made up of two services — the Kenya Police Service and the Administration Police Service. The Inspector-General exercises "independent command over the National Police Service" (Article 245), appointed for a single, non-renewable four-year term. The counties have no police force of their own.',
          claim: 'fact',
          sources: ['ke-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'An investigation firewall',
          text: 'The Constitution insulates individual investigations from political direction: while a Cabinet Secretary may give the Inspector-General policy direction in writing, "no person may give a direction to the Inspector-General" with respect to the investigation of any particular offence, or the enforcement of the law against any particular person (Article 245(4)). The one exception is set elsewhere — the Director of Public Prosecutions may direct the Inspector-General to investigate (Article 157(4)) — so the prosecutor, not a minister, is the actor who can lawfully direct a particular investigation.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the service's national structure and command line. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        'The internal structure of the National Police Service was not researched beyond the constitutional command line and the two services.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Kenya',
      summary:
        'A single national hierarchy topped by the Supreme Court (created in 2010), with the High Court holding constitutional-review power — diffuse review, no separate constitutional court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ke-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The superior courts are the Supreme Court, the Court of Appeal and the High Court, with subordinate courts (the Magistrates\' Courts and others) below them (Articles 162–163). At the apex is the Supreme Court, established by the 2010 Constitution, whose decisions bind every other court (Article 163(7)). The High Court has "unlimited original jurisdiction in criminal and civil matters" (Article 165(3)(a)) and the jurisdiction to determine "the question whether any law is inconsistent with or in contravention of this Constitution" (Article 165(3)(d)). There are also two courts of High-Court status established for employment and labour relations and for the environment and land (Article 162).',
          claim: 'fact',
          sources: ['ke-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Constitutional supremacy with diffuse review',
          text: 'Because the Constitution is supreme, the courts may declare legislation invalid for inconsistency with it — but Kenya has no separate constitutional court. Constitutional questions are heard by the High Court under Article 165(3)(d), with appeals rising to the Court of Appeal and then the Supreme Court. This is a diffuse model of review with a dedicated apex Supreme Court on top — distinct from South Korea and Indonesia (a separate constitutional court) and from South Africa (an apex court that is itself the constitutional court).',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: "The Kadhis' courts",
          text: "Among the subordinate courts are the Kadhis' courts (Article 170), whose jurisdiction is limited to questions of Muslim law relating to personal status, marriage, divorce or inheritance, and only where all the parties profess the Muslim religion and submit to the court. They are a religious-personal-status court within the national court structure, not a parallel system of criminal justice.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: "The detailed jurisdiction of each court, and the full set of statutory subordinate courts, were not set out beyond the constitutional hierarchy, the apex and the specialised and Kadhis' courts named in the Constitution.",
        },
      ],
      uncertainty: [
        'The court hierarchy is cited from the Constitution; the statutes governing the specialised and subordinate courts were not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Kenya',
      summary:
        'A constitutionally independent Director of Public Prosecutions, de-linked from the Attorney-General, who can direct the police to investigate.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ke-constitution', 'ke-odpp'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prosecution is conducted by the Director of Public Prosecutions, the head of a national office (the ODPP) established by Article 157 of the Constitution and separate from the Attorney-General, who is the Government's principal legal adviser and does not conduct criminal prosecutions (Article 156). The Director has the power to institute and undertake criminal proceedings, to take over or discontinue them, and holds office for a single, non-renewable term of eight years (Article 157(5)).",
          claim: 'fact',
          sources: ['ke-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independent, and able to direct an investigation',
          text: 'The office is strongly protected: in exercising its powers the Director "shall not require the consent of any person or authority for the commencement of criminal proceedings and … shall not be under the direction or control of any person or authority" (Article 157(10)). And unusually, the Director may "direct the Inspector-General of the National Police Service to investigate any information or allegation of criminal conduct", with which the Inspector-General must comply (Article 157(4)) — a prosecutor who can set an investigation in motion, not merely receive its results.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The current Director is not named, and the internal structure of the ODPP was not researched.',
        },
      ],
      uncertainty: [
        "The ODPP is described from the Constitution and the office's own account; its internal divisions were not researched.",
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Kenya',
      summary:
        'The police investigate; the prosecuting authority decides whether to prosecute — with the distinctive feature that the prosecutor can direct the police to investigate.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ke-constitution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Kenya follows the common-law division of labour: the National Police Service investigates, and the Director of Public Prosecutions decides whether to prosecute and conducts the prosecution. What is distinctive is the link between the two — the Director may direct the Inspector-General to investigate an allegation of criminal conduct (Article 157(4)), while no one else may direct the Inspector-General about a particular investigation (Article 245(4)). So the prosecutor is the single office that can lawfully set a specific investigation going.',
          claim: 'fact',
          sources: ['ke-constitution'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who prosecutes. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The Directorate of Criminal Investigations within the police is not described in detail; the investigate/prosecute division and the direction power are stated from the Constitution.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Kenya',
      summary:
        'A national Kenya Prisons Service — with prison figures reported by the World Prison Brief under two different reference dates.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['wpb-kenya'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [KE_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Kenya are run nationally by the Kenya Prisons Service, under the State Department for Correctional Services. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['wpb-kenya'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Overcrowding, stated with its dates',
          text: "The World Prison Brief records a prison population of 60,740 as an average over 2025 (a rate of about 101 per 100,000), and — separately — an official capacity of 34,000 dated December 2023, against which it reports an occupancy of about 176.5% as of December 2023, well above capacity. Those two things carry different dates: the population is a 2025 annual average, while the capacity and the occupancy are December 2023 figures. So the source's occupancy is a December 2023 measure, and setting the 2025 average against the 2023 capacity to compute a fresh figure would mix reference dates — which is why no single, same-dated occupancy is stated here. As with every prison figure on this site, a national occupancy does not establish the position of any individual prison, and these levels are not reliably comparable between countries.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons, the remand share, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The administering service is confirmed on the World Prison Brief page; the Prisons Act and the Kenya Prisons Service structure were not read in full.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Kenya',
      summary:
        'A cluster of constitutional commissions — human rights, gender and equality, and administrative justice (the Ombudsman) — plus the Judicial Service Commission and a statutory police-oversight authority.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ke-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A rich constitutional oversight architecture',
          text: 'Kenya has a fuller set of oversight bodies than most systems on this site — the constitutional counterweight to the strong national institutions above, most of it built into the 2010 Constitution itself.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'The Article 59 commissions (KNCHR, NGEC, CAJ)',
              description:
                'Article 59 establishes a human-rights and equality commission and allows Parliament to restructure it into separate commissions — which it did: the Kenya National Commission on Human Rights (the national human-rights body), the National Gender and Equality Commission, and the Commission on Administrative Justice, which is the national Ombudsman with the constitutional function to investigate conduct in state affairs that is prejudicial or improper (Article 59(2)(h)).',
            },
            {
              term: 'Judicial Service Commission (JSC)',
              description:
                'The constitutional body (Articles 171–172) responsible for the judiciary — promoting its independence and accountability, recommending judicial appointments and handling the removal process — chaired by the Chief Justice and drawn from the judiciary, the professions and the public.',
            },
            {
              term: 'Independent Policing Oversight Authority (IPOA)',
              description:
                'The statutory civilian body that provides external oversight of the National Police Service — investigating deaths and serious injuries caused by police action and monitoring police conduct. It is established by statute (widely cited as the IPOA Act, No. 35 of 2011) rather than by the Constitution, and is described here at the level of the body and its function.',
            },
            {
              term: 'National Police Service Commission (NPSC)',
              description:
                "The constitutional commission (Article 246) that handles recruitment, appointment, promotion, transfer and discipline within the National Police Service — separating the service's human-resource decisions from its operational command.",
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the oversight bodies and their basis. It does not assess how effective any of them is, and the statutory Acts behind IPOA and the Article 59 commissions were not re-fetched line by line.',
        },
      ],
      uncertainty: [
        'The Article 59 commissions, the JSC and the NPSC are established from the Constitution; IPOA is a statutory body whose establishing Act was not re-fetched in detail.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Kenya',
      summary:
        'Every source used for the Kenya pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ke-constitution', 'ke-odpp', 'wpb-kenya'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Kenya pages rest on the Constitution of Kenya, 2010 (the full official Kenya Law text, including a direct read of the Fourth Schedule), the Office of the Director of Public Prosecutions, and the World Prison Brief. Each was read or retrieved and confirmed on 27 July 2026 and independently re-checked; the constitutional articles and the Fourth Schedule were confirmed verbatim, and the World Prison Brief figures were re-confirmed by hand.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'What is left out, and why',
          text: 'English and Kiswahili are the official languages, with English the working language of these national institutions. Several things are deliberately not described: the current office-holders (they change, and one reported surname spelling could not be resolved against an official source); the exact statutory Act numbers behind IPOA and the Article 59 commissions (not re-fetched line by line); and the reform and current-events matters — the 2022 BBI litigation, the 2023 police-reform taskforce, proposals still before Parliament, and the 2024 protests and their policing — which are contested, unresolved or non-structural and do not change the institutional map.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/kenya-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Kenya',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Kenya (the police forensic laboratory and the government chemist / forensic-pathology services) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Kenya',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Kenya involve the immigration department, the Kenya Revenue Authority and border-security arrangements, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Kenya',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Kenya's institutional history — the move from the independence constitution to the transformative 2010 Constitution, and its founding of constitutional supremacy, devolution and the Supreme Court — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Kenya',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The single dated fact established in this pilot — the 2010 Constitution and the institutions it created — is a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
