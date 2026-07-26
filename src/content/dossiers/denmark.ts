import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Denmark dossier — a unitary civil-law monarchy with an integrated police and prosecution
 * (Batch A).
 *
 * Research date: facts checked against sources on 2026-07-26 and independently re-verified (no
 * factual errors found; three minor refinements applied — the ombudsman's constitutional section
 * number is not asserted, the Police Complaints Authority is dated 2010/2012, and police
 * leadership is stated only to the extent the fetched source supports it).
 *
 * Source access: the Folketing's official Constitution PDF was behind a Cloudflare challenge, so
 * the 1953 Constitutional Act is cited from the Constitute Project reproduction of the official
 * English translation (cross-confirmed in verification). The institutional facts rest on the EU
 * e-Justice Portal, the Prosecution Service, the National Police, the Police Complaints Authority,
 * the Parliamentary Ombudsman, and a National Audit Office report.
 *
 * The defining feature: prosecution and police are INTEGRATED under a single district head. The
 * Police Commissioner (politidirektør) is at once the head of the police district and the local
 * prosecutor, and both the police and the Prosecution Service sit under the Ministry of Justice.
 */
const DK_PRISON_DENSITY: RestrictedClaim = {
  id: 'dk-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Danish prisons held 4,129 people including those on remand, against a total capacity of 4,397 places — a prison density of 93.9 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'DK',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison and probation system (Kriminalforsorgen, under the Ministry of Justice), at one reference date. A density of 93.9 means the system as a whole held fewer people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const DENMARK: CountryDossier = {
  countryCode: 'DK',
  slug: 'denmark',
  name: 'Denmark',
  officialName: 'the Kingdom of Denmark',
  independentBodyNoun: 'a Danish government body',
  summary:
    'Denmark is a unitary, civil-law constitutional monarchy with national justice institutions under the Ministry of Justice. Its defining feature is an integrated police and prosecution: the district Police Commissioner is both the head of the police district and the local prosecutor. The ordinary courts, headed by the Supreme Court, decide constitutional and administrative questions too — there is no constitutional or separate administrative court.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['dk'],
  sources: ['dk-constitution', 'dk-ejustice-justice'],
  uncertainty: [
    'This describes the country of Denmark. The Faroe Islands and Greenland are self-governing within the Realm and each has its own court and police district; those arrangements are noted but not described here.',
    "The 1953 Constitutional Act is cited from a reproduction of the official English translation, because the Folketing's own PDF was unreachable; the authoritative text is Danish.",
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Denmark is a unitary constitutional monarchy with a civil-law legal tradition, governed by the Constitutional Act of 1953 (Danmarks Riges Grundlov). All four justice functions are national and sit under the Ministry of Justice: there is no regional or municipal police, court, prosecution or prison authority.',
      claim: 'fact',
      sources: ['dk-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'The distinctive feature: police and prosecution in one hand',
      text: 'The single most important thing to understand about Denmark is that its police and its prosecution are integrated. At district level the same official — the Police Commissioner (politidirektør) — is both the head of the police district and the local prosecutor, responsible for the investigations the district carries out and for prosecuting the resulting cases before the district court. Both the police and the Prosecution Service sit under the Ministry of Justice. This is a different design from the systems on this site that deliberately separate the investigator from the charging authority, and the prosecution and investigations modules return to it.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Independent courts, ministry-led prosecution',
      text: 'Two things are true at once and must be held together. The courts are constitutionally independent: Section 62 of the Constitution provides that "the administration of justice shall always remain independent of the executive power", and judges are "directed solely by the law" (Section 64). But the Prosecution Service is under the authority of the Ministry of Justice — so prosecution is not independent of the executive, even though adjudication is. And there is no constitutional court and no separate administrative court: the ordinary courts decide constitutional and administrative questions too (Section 63).',
    },
    {
      kind: 'paragraph',
      text: 'Four institutions carry the system. The National Police (Rigspolitiet) is deconcentrated into twelve districts. The Prosecution Service (Anklagemyndigheden) is headed by the Director of Public Prosecutions (Rigsadvokaten). The ordinary courts run from the district courts up to the Supreme Court (Højesteret). And the Prison and Probation Service (Kriminalforsorgen) runs the prisons and probation. Each is national and under the Ministry of Justice.',
      claim: 'fact',
      sources: ['dk-politi', 'dk-ejustice-justice', 'dk-anklagemyndigheden'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Denmark',
      summary:
        'A unitary civil-law monarchy under the 1953 Constitution: independent courts, a ministry-led prosecution, and ordinary courts that decide constitutional and administrative questions without a separate court for either.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['dk-constitution', 'dk-ejustice-justice'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Denmark is a constitutional monarchy governed by the Constitutional Act of 1953. Section 3 vests the judicial power in the courts of justice; Section 62 guarantees that "the administration of justice shall always remain independent of the executive power"; and Section 64 provides that judges are "directed solely by the law" and enjoy security of tenure. These are the constitutional foundations of an independent judiciary.',
          claim: 'fact',
          sources: ['dk-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'One court system for everything',
          text: 'Denmark has no constitutional court and no separate branch of administrative courts. Under Section 63 of the Constitution the ordinary courts "shall be entitled to decide any question bearing upon the scope of the authority of the executive power", so constitutional and administrative challenges are heard within the same courts that try civil and criminal cases. A reader used to a system with a dedicated constitutional court, or a separate administrative-court hierarchy, should note that Denmark folds both into its ordinary courts.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Independent adjudication, ministry-led prosecution',
          text: 'The independence guaranteed by Section 62 attaches to the administration of justice by the courts. The Prosecution Service is a separate matter: it operates under the authority of the Ministry of Justice, so the prosecutor, unlike the judge, is not independent of the executive. The prosecution module sets out what that means and how it combines with the police.',
        },
      ],
      uncertainty: [
        'The Constitution is cited from a reproduction of the official English translation; the authoritative text is Danish.',
        "The precise scope of the Minister of Justice's power to instruct prosecutors was not established from the sources fetched.",
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Denmark',
      summary:
        'The National Police (Rigspolitiet) in twelve districts, plus the nationwide Special Crime Unit created in 2022 — under the Ministry of Justice, and integrated with the prosecution at district level.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['dk-politi', 'dk-ejustice-professions'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Denmark has one national police, the Rigspolitiet, organised into twelve geographical police districts. The Faroe Islands Police and the Greenland Police each form a further district. In 2022 a nationwide "fifteenth police district" was created — the National Special Crime Unit — to investigate the most complex economic crime, organised crime and cybercrime across the whole country.',
          claim: 'fact',
          sources: ['dk-politi'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Where the police meet the prosecution',
          text: 'The twelve districts are not just operational commands: each is headed by a Police Commissioner who is simultaneously the local prosecutor. So a Danish police district is, in one office, both the body that investigates and the body that prosecutes the resulting cases before the district court. This integration — set out on the prosecution page — is what most distinguishes the Danish police from forces that are kept structurally separate from the prosecutors.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the structure of the police and its place under the Ministry of Justice. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The specific sentence naming the National Commissioner (Rigspolitichef) as head of the Rigspolitiet was not on the fetched page; the national force and its twelve districts are stated to the extent the source supports.',
        'The internal organisation of the districts and of the Special Crime Unit was not researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Denmark',
      summary:
        'One ordinary hierarchy — district courts, two high courts, the Supreme Court — that also decides constitutional and administrative cases, administered by the independent Danish Court Administration.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['dk-ejustice-justice', 'dk-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Denmark has a single ordinary court system. Cases begin in one of the twenty-four district courts (byretterne); appeals go to one of the two high courts, the High Court of Eastern Denmark (Østre Landsret) and the High Court of Western Denmark (Vestre Landsret); and the court of final instance is the Supreme Court (Højesteret). There are also two specialised courts of first instance, the Maritime and Commercial Court and the Land Registration Court.',
          claim: 'fact',
          sources: ['dk-ejustice-justice'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'No constitutional court, no administrative court',
          text: 'Denmark has neither a constitutional court nor a separate branch of administrative courts. Constitutional questions and challenges to administrative action are decided within these same ordinary courts, on the basis of Section 63 of the Constitution. This keeps the court map simpler than systems like Belgium (which has three top courts) or Germany, at the cost of concentrating every kind of case in one hierarchy.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: "Courts run at arm's length from the ministry",
          text: 'The day-to-day administration of the courts is not run by the Ministry of Justice but by the Danish Court Administration (Domstolsstyrelsen), created as an independent institution on 1 July 1999. It falls formally under the ministry, but the Minister "has no powers of instruction and cannot change decisions" it makes — a deliberate arrangement to keep court administration out of ministerial hands.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction and appeal thresholds of each court, the use of lay judges, and the Special Court of Indictment and Revision have not been researched from the primary Administration of Justice Act and are not described.',
        },
      ],
      uncertainty: [
        'The court hierarchy is taken from the EU e-Justice Portal; the Administration of Justice Act was not read in full.',
        "Denmark's distinctive lay-judge participation is noted as existing but not described.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Denmark',
      summary:
        'The Prosecution Service (Anklagemyndigheden) under the Ministry of Justice — a three-tier hierarchy in which the district prosecutor and the district police chief are the same person.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['dk-ejustice-professions', 'dk-anklagemyndigheden'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Denmark is conducted by the Prosecution Service (Anklagemyndigheden), which is "under the authority of the Ministry of Justice". Its functions and organisation are set out in Chapter 10 of the Administration of Justice Act (retsplejeloven), sections 95 to 107. It is a three-tier hierarchy: the Director of Public Prosecutions (Rigsadvokaten) at the top, the regional Public Prosecutors (statsadvokaterne), and the Police Commissioners (politidirektørerne) at district level.',
          claim: 'fact',
          sources: ['dk-ejustice-professions'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The integrated model, and what it means',
          text: 'The bottom tier of the prosecution is the police. The Police Commissioners are, in the words of the official description, "responsible for the investigations carried out by the police district and the activities of the local prosecution service" — so the same office that heads the district police is the district prosecutor. This is the opposite of the Irish design, where the decision to prosecute is deliberately taken out of the investigating body\'s hands. In Denmark the check comes from the hierarchy above (the regional prosecutors and the Director of Public Prosecutions can direct and review) and from the independent courts, rather than from separating the police from the prosecutor at district level.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "This page states the structure and the ministry subordination as the official sources describe them. It does not research the precise scope of the Minister of Justice's power to instruct prosecutors in individual cases, which the fetched sources did not establish.",
        },
      ],
      uncertainty: [
        'The exact scope of ministerial instruction over prosecutors was not established from the sources fetched.',
        'The Special Court of Indictment and Revision, before which the Director of Public Prosecutions appears, is named but not described.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Denmark',
      summary:
        'How investigation works when the investigator and the prosecutor are the same office: the police district, headed by the Police Commissioner who is also the local prosecutor.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['dk-ejustice-professions', 'dk-politi'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Denmark is carried out by the police districts. Because the head of each district — the Police Commissioner — is simultaneously the local prosecutor, the same office directs the investigation and brings the prosecution before the district court. The nationwide Special Crime Unit does the same for the most complex cases across the whole country.',
          claim: 'fact',
          sources: ['dk-ejustice-professions', 'dk-politi'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Where the safeguard sits',
          text: 'When the investigator and the charging authority are the same office, the structural check that other systems get from separating the two has to come from elsewhere. In Denmark it comes from above and from the side: the regional prosecutors and the Director of Public Prosecutions supervise and can direct, and the constitutionally independent courts decide the case. This page describes that allocation of responsibility; it is our framing, grounded in the official description of the integrated model.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who prosecutes. It does not describe investigative techniques, surveillance or forensic methods, or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The judicial controls on coercive investigative measures were not researched from the primary Administration of Justice Act.',
        'The internal police/prosecution division within the Special Crime Unit was not confirmed from an official page.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Denmark',
      summary:
        'The Prison and Probation Service (Kriminalforsorgen) under the Ministry of Justice — and a properly scoped Council of Europe figure showing the system below capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['dk-rigsrevisionen-prisons', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [DK_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons and probation in Denmark are run by a single national body, the Prison and Probation Service (Kriminalforsorgen), under the Ministry of Justice. It executes custodial sentences and supervises suspended sentences, electronic monitoring and parole. Because the system is national, a figure for the whole system describes the whole system, with none of the sub-national aggregation that qualifies a German or United States prison figure.',
          claim: 'fact',
          sources: ['dk-rigsrevisionen-prisons'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Danish prisons held 4,129 people, including those on remand, against a total capacity of 4,397 places — a prison density of 93.9 inmates per 100 places. That density below 100 means the system as a whole held fewer people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual institutions, the regimes, non-custodial sanctions and probation in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The internal structure of Kriminalforsorgen and the individual institutions have not been researched.',
        'The operation of prisons in Greenland and the Faroe Islands is noted as existing but not described.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Denmark',
      summary:
        'Two strong external bodies — the Parliamentary Ombudsman and the Independent Police Complaints Authority — plus the independent Danish Court Administration.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['dk-ombudsman', 'dk-police-complaints', 'dk-ejustice-justice'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Parliamentary Ombudsman (Folketingets Ombudsmand)',
              description:
                'Elected by the Folketing to investigate complaints about the public administration, on the statutory basis of the Ombudsman Act. As an officer of Parliament rather than the government, the Ombudsman is the general external avenue for complaints about administrative action, including by the police.',
            },
            {
              term: 'Independent Police Complaints Authority (Den Uafhængige Politiklagemyndighed)',
              description:
                'Enacted in 2010 and operational from 1 January 2012, it investigates criminal cases against police and prosecution personnel, handles complaints about police conduct, and investigates deaths and serious injuries during police interventions or in custody. It "is independent of both the police and the prosecution service", and its council is chaired by a High Court judge — an important safeguard precisely because the police and prosecution are otherwise integrated.',
            },
            {
              term: 'Danish Court Administration (Domstolsstyrelsen)',
              description:
                'The independent body that administers the courts (created 1 July 1999), over which the Minister of Justice has no power of instruction — separating court administration from the ministry that runs the police and prosecution.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why the independent complaints authority matters here',
          text: 'In a system where the police and the prosecution are integrated under one district head, an ordinary complaint route that ran through the prosecution would be investigating its own. The Independent Police Complaints Authority is designed to sit outside both — independent of the police and of the prosecution service alike — which is what makes it a meaningful external check in the Danish design.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It states which bodies oversee the police, the administration and the courts, and their statutory basis. It does not assess how effective any of them is, nor research their findings, which would require sources beyond those consulted here.',
        },
      ],
      uncertainty: [
        'The constitutional section number authorising the Ombudsman was not asserted (the accessible rendering and the widely-cited official number differ); the statutory basis is used instead.',
        'The detailed powers and findings of these bodies were not researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Denmark',
      summary:
        'Every source used for the Denmark pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'dk-constitution',
        'dk-ejustice-justice',
        'dk-ejustice-professions',
        'dk-anklagemyndigheden',
        'dk-politi',
        'dk-police-complaints',
        'dk-ombudsman',
        'dk-rigsrevisionen-prisons',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Denmark pages rest on nine sources: the 1953 Constitution (a reproduction of the official English translation), two European e-Justice Portal pages (the courts, and the legal professions), the Prosecution Service, the National Police, the Independent Police Complaints Authority, the Parliamentary Ombudsman, a National Audit Office report on the Prison and Probation Service, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: 'The official Constitution PDF (Folketing) and the domstol.dk court pages were behind Cloudflare or bot walls, so the Constitution is cited from a reproduction of the official English translation and the court hierarchy from the EU e-Justice Portal. The Prosecution Service, National Police, Police Complaints Authority and Parliamentary Ombudsman pages were read directly; the prison authority from a National Audit Office report PDF. The source register records the access path for each.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/denmark-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Denmark',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Denmark (the forensic institutes and their relationship to the police and prosecution) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Denmark',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Denmark involve the national police, the customs administration (Toldstyrelsen), the Schengen and EU customs context, and the temporary border controls Denmark has operated, and could not be researched to the standard required here.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Denmark',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Danish institutional history — the 1849 and 1953 Constitutions, the development of the integrated police and prosecution, and the 1999 removal of court administration from the ministry — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Denmark',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1953 Constitution, the 1999 Danish Court Administration, the 2010/2012 Police Complaints Authority, and the 2022 Special Crime Unit — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
