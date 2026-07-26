import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Norway dossier — a unitary, non-EU civil-law monarchy with a strongly independent
 * prosecution (Batch A).
 *
 * Research date: facts checked against sources on 2026-07-26 and independently re-verified (no
 * factual errors found; the verification pass upgraded two conservative flags — the 12-district
 * figure is firmly confirmed, and the prosecution's statutory basis is the Criminal Procedure Act).
 *
 * The distinctive feature: the prosecution is independent to an unusual degree. Only the King in
 * Council — not the Minister of Justice — may give the prosecuting authority general instructions,
 * and it directs criminal investigation, with its lowest tier embedded inside the police. And, as
 * in the other Nordic pilots, there is no separate constitutional court: the ordinary courts
 * exercise constitutional review (Constitution Article 89).
 */
const NO_PRISON_DENSITY: RestrictedClaim = {
  id: 'no-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Norwegian prisons held 3,004 people including those on remand, against a total capacity of 3,616 places — a prison density of 83.1 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'NO',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered correctional system (Kriminalomsorgen, under the Ministry of Justice and Public Security), at one reference date. A density of 83.1 means the system as a whole held fewer people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const NORWAY: CountryDossier = {
  countryCode: 'NO',
  slug: 'norway',
  name: 'Norway',
  officialName: 'the Kingdom of Norway',
  independentBodyNoun: 'a Norwegian government body',
  summary:
    'Norway is a unitary, civil-law constitutional monarchy — and, unlike most of Europe, not an EU member. Its justice functions are national, under the Ministry of Justice and Public Security. Its prosecution is unusually independent: only the King in Council, not the Minister of Justice, may instruct it, and it directs criminal investigation from inside the police. The ordinary courts, headed by the Supreme Court, exercise constitutional review; there is no separate constitutional court.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['no'],
  sources: ['no-constitution', 'no-domstol-courts'],
  uncertainty: [
    'The internal regional tiering of the Correctional Service, and the internal structure of the police districts, were not confirmed from a directly-fetched official page (several official sites are client-side rendered).',
    'Norway is a non-EU state (a member of the EEA and Schengen); nothing here describes EU membership, which it does not have.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Norway is a unitary constitutional monarchy with a civil-law legal tradition, governed by the Constitution of 1814 — one of the oldest written constitutions still in force. It is not a member of the European Union (it belongs to the European Economic Area and Schengen). All four justice functions are national, under the Ministry of Justice and Public Security; municipalities and counties run none of them.',
      claim: 'fact',
      sources: ['no-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'The distinctive feature: a prosecution the minister cannot instruct',
      text: 'The most striking thing about the Norwegian system is how independent its prosecution is. The prosecuting authority makes its own decisions, and only the King in Council — the government acting formally as a body — may give it general instructions; the Minister of Justice has no power to direct it on the assessment or decision in a concrete case. The Director of Public Prosecutions (Riksadvokaten) is appointed by the King in Council and directs both the prosecutors and the police in investigations. This is a stronger form of prosecutorial independence than the Danish (ministry-led) or Dutch (minister-responsible) arrangements on this site.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'The prosecution reaches inside the police',
      text: "Norway's prosecution has three levels, and the lowest is embedded inside the police: police lawyers hold prosecutorial powers and lead investigations at district level, under the regional Public Prosecutors and ultimately the Director of Public Prosecutions. So the same independence that protects the top of the prosecution runs down into the police districts that do the investigating. The prosecution and investigations modules return to this.",
    },
    {
      kind: 'paragraph',
      text: 'Four institutions carry the system. The Police (Politiet), led by the National Police Directorate, is organised into twelve districts. The Prosecution Authority (Påtalemyndigheten) is headed by the Director of Public Prosecutions. The ordinary courts run from the district courts up to the Supreme Court (Høyesterett). And the Correctional Service (Kriminalomsorgen) runs the prisons and probation. Each is national.',
      claim: 'fact',
      sources: ['no-domstol-courts', 'no-prosecution', 'no-stortinget-reform'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Norway',
      summary:
        'A unitary civil-law monarchy under the 1814 Constitution: independent courts that exercise constitutional review themselves, and a prosecution the minister cannot instruct.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['no-constitution', 'no-domstol-courts'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Norway is governed by the Constitution of 1814. Article 87 provides that "the ordinary courts of justice are the Supreme Court, the courts of appeal and the district courts", and Article 88 that "the Supreme Court pronounces judgment in the final instance" and its judgments "may in no case be appealed". Article 91 requires the authorities of the State to "ensure the independent administration of the courts", and Article 90 protects judges\' security of tenure.',
          claim: 'fact',
          sources: ['no-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Constitutional review, but no constitutional court',
          text: 'Norway has no separate constitutional court. Instead, Article 89 gives the ordinary courts "the power and the duty to review whether applying a statutory provision is contrary to the Constitution" — so constitutional review is exercised by the same courts, up to the Supreme Court, that decide civil and criminal cases. This is a shared Nordic pattern (Denmark folds constitutional and administrative questions into its ordinary courts too), and it is worth noting for a reader used to a dedicated constitutional court.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Independent adjudication, and an independent prosecution',
          text: 'Two independences are worth separating. The courts are independent by the Constitution (Articles 90, 91, 95). And the prosecution is independent too — but by a different mechanism: only the King in Council may give it general instructions, and the Minister of Justice may not direct it in individual cases. The prosecution module sets out what that means.',
        },
      ],
      uncertainty: [
        "The Constitution is cited from Lovdata's official English translation; the authoritative text is Norwegian.",
        'The Court of Impeachment (Riksretten) and the land consolidation courts are noted as existing but not described.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Norway',
      summary:
        'A national police in twelve districts under the National Police Directorate — the result of the 2016 proximity-police reform that cut the districts from 27 to 12.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['no-stortinget-reform', 'no-prosecution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Norway has a single national police (Politiet), led by the National Police Directorate and organised into twelve police districts, each under a Chief of Police. There is no regional or municipal police. The twelve-district structure is the product of the "proximity-police reform" (nærpolitireformen).',
          claim: 'fact',
          sources: ['no-stortinget-reform'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The 2016 reform: from 27 districts to 12',
          text: 'On the basis of Proposition 61 LS (2014–2015), the Storting resolved to carry out a police reform, and from 1 January 2016 the police were consolidated from twenty-seven districts to twelve, with many local stations merged. This is a completed, enacted reform, and it is why older descriptions of the Norwegian police give a different district count. These pages state the current position (twelve districts) and record the reform in prose.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Who directs the investigation',
          text: "The police conduct criminal investigations, but they do not direct them: direction rests with the prosecution, whose lowest tier sits inside the police and whose higher tiers (the regional Public Prosecutors and the Director of Public Prosecutions) supervise and can instruct. The police act under the minister's responsibility for administration, but case-level investigative direction is prosecutorial, not ministerial.",
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the structure of the police and the reform that produced it. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        "Several of the police's own pages are client-side rendered; the twelve-district figure is confirmed across official descriptions and the reform is confirmed from the Storting case page, but the police's own site did not yield a directly-fetched paragraph.",
        "The National Police Directorate's specialist agencies and the Police Security Service (PST) are noted as existing but not described.",
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Norway',
      summary:
        'A three-instance ordinary hierarchy — 23 district courts, six courts of appeal, the Supreme Court — that also exercises constitutional review, administered by an independent Courts Administration.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['no-domstol-courts', 'no-constitution', 'no-domstoladm'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Norway has a three-instance ordinary court system. Cases begin in one of the 23 district courts (tingrettene), which sit at 59 court venues; appeals go to one of the six courts of appeal (lagmannsrettene); and the court of final instance is the Supreme Court (Høyesterett), which has twenty justices and is described as one of Norway's three highest constitutional authorities.",
          claim: 'fact',
          sources: ['no-domstol-courts'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'One apex, including for the Constitution',
          text: "There is no constitutional court and no separate supreme administrative court. The ordinary Supreme Court is the single apex for civil, criminal and constitutional-review matters, and the constitutional review is exercised by all the ordinary courts under Article 89. Compared with Belgium's three top courts, Norway concentrates everything in one hierarchy.",
        },
        {
          kind: 'callout',
          variant: 'note',
          title: "Courts administered at arm's length",
          text: 'The central administration of the courts is the responsibility of the Norwegian Courts Administration (Domstoladministrasjonen), a deliberately independent agency that gives effect to the constitutional requirement (Article 91) that the State ensure the independent administration of the courts. It does not interfere in judicial decisions.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the 2021 district-court consolidation, the Court of Impeachment and the land consolidation courts have not been researched from the primary statutes and are not described.',
        },
      ],
      uncertainty: [
        'The exact enabling instrument for the 2021 district-court consolidation was not separately fetched; the current outcome (23 district courts, 59 venues) is confirmed.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Norway',
      summary:
        'The Prosecution Authority (Påtalemyndigheten) — independent of ministerial instruction, headed by the Director of Public Prosecutions, with its lowest tier embedded inside the police.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['no-prosecution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Norway is conducted by the Prosecution Authority (Påtalemyndigheten), headed by the Director of Public Prosecutions (Riksadvokaten). It has three levels: the Director of Public Prosecutions at the top, the regional Public Prosecutors (statsadvokatene), and — at the lowest level — the prosecution authority embedded within the police, where police lawyers hold prosecutorial powers. The statutory framework is the Criminal Procedure Act (straffeprosessloven).',
          claim: 'fact',
          sources: ['no-prosecution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independence by a specific mechanism',
          text: "The Norwegian prosecution is independent in a precise, structural sense: the prosecuting authority makes its own decisions, and only the King in Council may prescribe general rules for it. The Minister of Justice cannot instruct it on the assessment or decision in a concrete case — doing so would violate the independence of the prosecution. The Director of Public Prosecutions is appointed by the King in Council and can direct subordinate prosecutors and the police, intervene in any case, and reverse decisions. This is a different and stronger independence than the Danish prosecution (under the Ministry of Justice) or the Dutch (under the minister's political responsibility).",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states the independence principle and the three-level structure as the official overview describes them. It does not research the precise statutory articles of the Criminal Procedure Act, nor the boundary between the administrative role of the ministry and the prosecutorial independence of the authority.',
        },
      ],
      uncertainty: [
        'The official overview relied on is a pre-2019 document (it gives an outdated police-district count); only its still-current independence and structure principles are used, corroborated in verification.',
        'The specific articles of the Criminal Procedure Act governing the prosecution were not read in full.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Norway',
      summary:
        'How prosecutor-led investigation works when the lowest prosecutors sit inside the police: the police investigate, but the prosecution directs — all the way down to the district.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['no-prosecution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Norway is carried out by the police but directed by the prosecution. Because the lowest tier of the prosecution is embedded inside the police — police lawyers with prosecutorial powers — the direction of the investigation and the police work happen within the same district, under prosecutorial rather than ministerial control. Above the district, the regional Public Prosecutors and the Director of Public Prosecutions supervise and can instruct.',
          claim: 'fact',
          sources: ['no-prosecution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prosecutor-led, and independent',
          text: 'Norway combines two features that appear separately elsewhere on this site: the investigation is prosecutor-led (as in the Netherlands), and the prosecution is strongly independent of the executive (unlike the Netherlands). The check on investigation therefore comes from an independent prosecutorial hierarchy and from the courts, rather than from ministerial oversight or from separating the police and prosecutor into different bodies. This page describes that allocation; it is our framing, grounded in the official overview.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who directs the investigation. It does not describe investigative techniques, surveillance or forensic methods, or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The specialised investigation bodies (ØKOKRIM for economic and environmental crime, KRIPOS/NCIS) are named in sources but not described here.',
        'The judicial controls on coercive investigative measures were not researched from the primary statutes.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Norway',
      summary:
        'The Correctional Service (Kriminalomsorgen) under the Ministry of Justice and Public Security — and a properly scoped Council of Europe figure showing the system well below capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['no-wpb-corrections', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [NO_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons and community sentences in Norway are run by a single national body, the Correctional Service (Kriminalomsorgen), whose directorate is the Directorate of the Norwegian Correctional Service (KDI), under the Ministry of Justice and Public Security. Because the system is national, a figure for the whole system describes the whole system, with none of the sub-national aggregation that qualifies a German or United States prison figure.',
          claim: 'fact',
          sources: ['no-wpb-corrections'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Norwegian prisons held 3,004 people, including those on remand, against a total capacity of 3,616 places — a prison density of 83.1 inmates per 100 places, the lowest in this Northern-European group. That density below 100 means the system as a whole held fewer people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The internal regional structure of the Correctional Service, the individual institutions and their regimes, community sanctions in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        "The responsible ministry and the national administrator (Kriminalomsorgen / KDI) are corroborated by a reputable international research source; Norway's own correctional-service page is client-side rendered and did not yield a directly-fetched official paragraph.",
        'The internal regional tiering of the Correctional Service was not confirmed from an official primary page.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Norway',
      summary:
        "The Parliamentary Ombud (also Norway's torture-prevention mechanism) and an independent bureau that investigates crimes by police and prosecutors.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['no-sivilombudet', 'no-spesialenheten', 'no-domstoladm'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Parliamentary Ombud (Sivilombudet)',
              description:
                'Appointed by the Storting to safeguard the rights of individuals in their dealings with the public administration, it "is an independent body". It also hosts Norway\'s National Preventive Mechanism under the UN torture-prevention protocol (OPCAT), visiting police custody facilities, prisons and psychiatric institutions.',
            },
            {
              term: 'Bureau for the Investigation of Police Affairs (Spesialenheten for politisaker)',
              description:
                'A national investigation and prosecution agency whose purpose is to investigate cases where employees of the police or the prosecuting authority are suspected of committing criminal offences in the course of duty — an independent body outside the ordinary police and prosecution chain. It is a meaningful check precisely because the prosecution otherwise reaches inside the police.',
            },
            {
              term: 'Norwegian Courts Administration (Domstoladministrasjonen)',
              description:
                'The independent agency responsible for the central administration of the courts, which does not interfere in judicial decisions — the institutional expression of the constitutional requirement (Article 91) of independent court administration.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why an independent police-crime bureau matters here',
          text: 'When the prosecution reaches into the police, an ordinary complaint route that ran through the prosecution would risk investigating its own. The Bureau for the Investigation of Police Affairs is designed to sit outside that chain, which is what makes it a real external check in the Norwegian design — much as the Independent Police Complaints Authority does in Denmark.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It states which bodies oversee the police, the administration and the courts, and their basis. It does not assess how effective any of them is, and the Supervisory Committee for Judges and the Judicial Appointments Board are noted from the Constitution rather than described in detail.',
        },
      ],
      uncertainty: [
        'The Supervisory Committee for Judges (Tilsynsutvalget for dommere) and the Judicial Appointments Board (Innstillingsrådet for dommere) are anchored to Constitution Article 90 but their own pages were not fetched.',
        'The detailed powers and findings of these bodies were not researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Norway',
      summary:
        'Every source used for the Norway pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'no-constitution',
        'no-domstol-courts',
        'no-prosecution',
        'no-stortinget-reform',
        'no-domstoladm',
        'no-sivilombudet',
        'no-spesialenheten',
        'no-wpb-corrections',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Norway pages rest on nine sources: the 1814 Constitution (Lovdata's official English translation), the Norwegian courts' own site, an official government overview of the prosecution, the Storting case page for the 2016 police reform, the Norwegian Courts Administration, the Parliamentary Ombud, the Bureau for the Investigation of Police Affairs, the World Prison Brief (for the responsible ministry), and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass that found no factual errors.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: "The Constitution was read from Lovdata; the courts, courts administration, ombud and police-affairs bureau from their own sites; the prosecution overview and the Storting reform page were fetched directly. Several official sites (the police's and the correctional service's own pages) are client-side rendered and did not yield directly-fetched paragraphs, so the police-district count is confirmed across official descriptions and the reform from the Storting, and the correctional-service ministry is corroborated by the World Prison Brief. The source register records the access path for each.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/norway-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Norway',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Norway (the forensic institutes and their relationship to the police and prosecution) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Norway',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "Border and customs in Norway involve the police, the customs administration (Tolletaten), and Norway's particular position in Schengen but outside the EU customs union, and could not be researched to the standard required here.",
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Norway',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Norwegian institutional history — the 1814 Constitution, the establishment of the Supreme Court in 1815, and the development of the independent prosecution — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Norway',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1814 Constitution and the 2016 proximity-police reform (27 to 12 districts) — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
