import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The South Korea dossier — a unitary civil-law republic with dual apex courts and a prosecution
 * in mid-restructuring (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the 1987 Constitution (Constitute), the U.S.
 * Federal Judicial Center's Korea profile, the Supreme Prosecutors' Office site, the World Prison
 * Brief, and Korea Herald reporting on the 2025 restructuring; independently re-verified in an
 * adversarial pass (constitution articles, court facts, prosecution structure, and the World Prison
 * Brief figures all re-confirmed).
 *
 * The model result: South Korea is unitary — all four functions national, no sub-national record.
 * Distinctive: two apex courts (a Supreme Court and a separate Constitutional Court with
 * concentrated review); a prosecution under the executive that a 2020–2021 reform stripped of most
 * direct investigation; and an ENACTED 2025 restructuring — recorded as a scheduled change — that
 * will abolish the Prosecution Service on 1 October 2026. The reform area is politically charged and
 * is handled by dated attribution, not in the site's voice.
 */
const KR_PRISON_DENSITY: RestrictedClaim = {
  id: 'kr-prison-density-2026',
  category: 'detention-capacity',
  statement:
    'On 29 January 2026, South Korean prisons held 65,279 people including those on remand, against an official capacity of 50,614 places — an occupancy level of 129.0%, that is, above capacity.',
  claimType: 'fact',
  sources: ['wpb-south-korea'],
  sourceScope:
    'World Prison Brief (ICPR) country page for the Republic of (South) Korea: total prison population 65,279 including pre-trial detainees at 29 January 2026 (source: the national prison administration); official capacity 50,614 at the same date; occupancy level 129.0% at 29 January 2026. Population and capacity carry the same reference date.',
  jurisdiction: 'KR',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2026-01-29',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the Korea Correctional Service), at one reference date. An occupancy of 129.0% means the system as a whole held about a third more people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const SOUTH_KOREA: CountryDossier = {
  countryCode: 'KR',
  slug: 'south-korea',
  name: 'South Korea',
  officialName: 'the Republic of Korea',
  independentBodyNoun: 'a South Korean government body',
  summary:
    'South Korea is a unitary, civil-law republic under its 1987 Constitution, with all justice functions national. It has two apex courts — a Supreme Court and a separate Constitutional Court — and a prosecution that sits under the executive. A 2020–2021 reform moved most investigation to the police, and an enacted 2025 restructuring, not yet in force, is to abolish the Prosecution Service in October 2026 and separate the power to investigate from the power to indict.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['kr'],
  sources: ['kr-constitution', 'kr-fjc-judiciary'],
  uncertainty: [
    'The placement of the Korean National Police Agency under the Ministry of the Interior and Safety, and the 2020–2021 investigation-power rebalance, are established from reform reporting and secondary reading rather than a fetched police organic law; described with that limit.',
    'The National Human Rights Commission, the Anti-Corruption and Civil Rights Commission, and the Corruption Investigation Office for High-ranking Officials are named from secondary/tertiary reading, not fetched official pages; the court-administration point is from the U.S. Federal Judicial Center.',
    'The 2025 restructuring rests on Korea Herald reporting; the primary gazette and the implementing statutes were not fetchable. The current arrangement is stated as in force until the effective date.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'South Korea (대한민국, Daehanmin-guk) is a unitary parliamentary-presidential republic with a civil-law tradition, governed by the Constitution of 1948 as wholly revised in 1987 (the Sixth Republic). Its territory is a single indivisible unit (Article 3), and local self-government is confined to local administrative and welfare matters — so all four justice functions are national. Judges "rule independently according to their conscience and in conformity with the Constitution and law" (Article 103).',
      claim: 'fact',
      sources: ['kr-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'A prosecution being taken apart',
      text: "South Korea's most distinctive current feature is that its prosecution is mid-restructuring. A 2020–2021 reform already moved most criminal investigation from prosecutors to the police. Then an amendment to the Government Organization Act, approved by the Cabinet on 30 September 2025, is set to abolish the Supreme Prosecutors' Office on 1 October 2026 and split its powers between a new investigative agency under the Ministry of the Interior and Safety and a new indictment office under the Ministry of Justice. This is enacted but not yet in force; the prosecution page records it neutrally and by attribution.",
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions: a three-tier ordinary judiciary under the Supreme Court, a separate Constitutional Court, the single Korean National Police Agency, the Prosecution Service, and the Korea Correctional Service. Two apex courts, concentrated constitutional review, and — for now — a prosecution under the Ministry of Justice.',
      claim: 'fact',
      sources: ['kr-fjc-judiciary', 'kr-spo'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of South Korea',
      summary:
        'A unitary republic under the 1987 Constitution, with independent judges, two apex courts and concentrated constitutional review.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['kr-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'South Korea is a unitary state: its territory is a single indivisible unit (Article 3), and local governments deal only with local administrative and welfare matters, not the courts, prosecution, police or prisons (Articles 117–118). Judicial power is vested in the courts (Article 101), judges are independent (Article 103), and their tenure is protected — removal only by impeachment or criminal punishment (Article 106).',
          claim: 'fact',
          sources: ['kr-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Concentrated constitutional review',
          text: "Constitutional review in South Korea is concentrated, not diffuse: an ordinary court that doubts a statute's constitutionality must refer the question to the Constitutional Court (Article 107), which alone may rule the statute unconstitutional. This is the opposite of the diffuse model where every court decides constitutionality for itself.",
        },
      ],
      uncertainty: [
        'Constitutional articles are cited from the Constitute translation; the Korean text is authoritative.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in South Korea',
      summary:
        'A single national force, the Korean National Police Agency, under the Ministry of the Interior and Safety — with a community-policing layer added in 2021.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['kr-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing is a single national function. The Korean National Police Agency (경찰청, Gyeongchalcheong) is one national force under the Ministry of the Interior and Safety; there is no separate state or provincial police. Under the constitutional warrant clause, a judge issues warrants for arrest, detention, seizure or search "upon the request of a prosecutor" (Article 12).',
          claim: 'fact',
          sources: ['kr-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'National, with a 2021 community-policing layer',
          text: 'A 2021 reform created an autonomous-police (자치경찰) system of metropolitan and provincial commissions for community-policing functions — but the officers remain part of the single national force. It is administrative decentralisation within one national police, not a set of separate local forces. This is stated from reform reporting rather than a fetched police organic law.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the force's national structure and its ministry. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        "The KNPA's ministry placement and internal structure rest on secondary reading; the official police organic law was not fetched.",
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in South Korea',
      summary:
        'A three-tier ordinary judiciary under the Supreme Court, and a separate, dedicated Constitutional Court — two apex bodies.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['kr-fjc-judiciary', 'kr-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The ordinary judiciary is three-tier: eighteen District Courts (지방법원) at first instance, High Courts (고등법원) on appeal, and at the apex the Supreme Court (대법원), the court of final appeal for all ordinary cases, with fourteen Justices including the Chief Justice.',
          claim: 'fact',
          sources: ['kr-fjc-judiciary'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A separate Constitutional Court',
          text: 'Standing outside the three-tier system is the Constitutional Court (헌법재판소, Heonbeop Jaepanso) — "an independent entity and not part of Korea\'s three tier court system", with exclusive jurisdiction over constitutional matters (Article 111): the constitutionality of statutes on a court\'s referral, impeachment, dissolution of political parties, competence disputes, and constitutional complaints. It has nine adjudicators, and a finding of unconstitutionality requires six votes. So South Korea has two apex courts, each final in its domain.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The specialised courts (family, administrative, patent) and the detailed jurisdiction of each tier were not set out beyond the hierarchy and the two apex bodies.',
        },
      ],
      uncertainty: [
        'The court structure is cited from the U.S. Federal Judicial Center and the Constitution; the Court Organization Act was not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in South Korea',
      summary:
        'A prosecution under the Ministry of Justice, headed by the Prosecutor General — reduced in investigative power by a 2020–2021 reform, and set to be abolished and split by an enacted 2025 restructuring.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['kr-spo', 'kr-koreaherald-prosecution-2025'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prosecution is conducted by the Prosecution Service (검찰청), an external agency of the Ministry of Justice, headed by the Prosecutor General (검찰총장), who \"handles all affairs and directs all staff members of the Prosecutors' Offices\". It is structured as one Supreme Prosecutors' Office, six High Prosecutors' Offices, eighteen District Prosecutors' Offices and forty-two branch offices. It is not part of the judiciary and is not constitutionally independent.",
          claim: 'fact',
          sources: ['kr-spo'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A 2020–2021 rebalancing of investigative power',
          text: "Historically the prosecution directed police investigations and held near-exclusive indictment power. A 2020–2021 adjustment (검경 수사권 조정), through amendments to the Criminal Procedure Act and the Prosecutors' Office Act, moved most criminal investigation to the police (which set up a National Investigation Headquarters in January 2021), narrowing prosecutors' direct-investigation authority while leaving them the warrant-request role and control over indictment. This is stated from reform reporting.",
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'An enacted 2025 restructuring, recorded as a scheduled change',
          text: "A further, enacted-but-not-yet-effective step goes much further. An amendment to the Government Organization Act, approved by the Cabinet on 30 September 2025, is set to abolish the Supreme Prosecutors' Office on 1 October 2026 (after a one-year grace period) and split its powers — investigation to a new agency under the Ministry of the Interior and Safety, indictment to a new office within the Ministry of Justice — separating the power to investigate from the power to indict. Its proponents present this as curbing the concentration of prosecutorial power; its constitutionality has been contested. This is recorded neutrally and by attribution to Korea Herald reporting; the current arrangement remains in force until the effective date.",
        },
      ],
      uncertainty: [
        "The 2025 restructuring rests on Korea Herald reporting; the primary gazette and implementing statutes were not fetchable. The exact current number of prosecutors' direct-investigation categories is not stated.",
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in South Korea',
      summary:
        'Since 2021 the police lead most investigations; prosecutors retain the warrant request, a supplementary role, and control of indictment — a balance the 2025 restructuring will shift again.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['kr-constitution', 'kr-koreaherald-prosecution-2025'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "The direction of criminal investigation in South Korea has been in transition. Since the 2020–2021 reform, the police — through the National Investigation Headquarters — lead and conduct most primary investigations, with authority to refer or close cases, while prosecutors retain a supplementary and completing role and control over indictment. Warrants still require a prosecutor's request to the judge (Constitution, Article 12).",
          claim: 'fact',
          sources: ['kr-constitution', 'kr-koreaherald-prosecution-2025'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A moving line between investigating and indicting',
          text: 'The 2020–2021 reform already separated much of the investigating from the prosecuting, and the enacted 2025 restructuring will formalise that split at the institutional level — an investigative agency under one ministry, an indictment office under another. The "who directs the investigation" answer for South Korea is therefore explicitly time-dependent, which is why the prosecution restructuring is also recorded as a scheduled change.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who leads investigations and who indicts. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The precise post-2021 allocation of direct-investigation categories rests on reform reporting, not a fetched primary statute.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in South Korea',
      summary:
        'The Korea Correctional Service under the Ministry of Justice — and a Council-of-Europe-style figure showing the system well above capacity at the start of 2026.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['wpb-south-korea'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [KR_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in South Korea are run nationally by the Korea Correctional Service (교정본부), under the Ministry of Justice. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['wpb-south-korea'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: 'The World Prison Brief records that on 29 January 2026 South Korean prisons held 65,279 people including those on remand, against an official capacity of 50,614 places — an occupancy level of 129.0%, that is, well above capacity, with the population and the capacity carrying the same reference date. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national occupancy does not establish the position of any individual prison; and because the World Prison Brief compiles national figures collected under differing definitions, these levels are not reliably comparable between countries.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons, the treatment of detainees, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The administering service and ministry are taken from the World Prison Brief; the Administration and Treatment of Correctional Institution Inmates Act was not fetched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in South Korea',
      summary:
        'A national human-rights commission, an ombudsman-and-anti-corruption commission, a police-policy commission, and a dedicated agency that investigates senior officials — with court administration internal to the judiciary.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['kr-fjc-judiciary'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'National Human Rights Commission of Korea (국가인권위원회)',
              description:
                'An independent statutory body (from 2001) that handles human-rights complaints, including against the police and correctional facilities. Named from secondary reading.',
            },
            {
              term: 'Anti-Corruption and Civil Rights Commission (국민권익위원회)',
              description:
                'A body launched in 2008 that houses the Ombudsman, anti-corruption and administrative-appeals functions. Named from secondary reading.',
            },
            {
              term: 'Corruption Investigation Office for High-ranking Officials (공수처)',
              description:
                'An independent agency operational from January 2021 that investigates — and in defined cases prosecutes — crimes by high-ranking officials and their families, expressly including judges, prosecutors, lawmakers and the President. Named from secondary/tertiary reading.',
            },
            {
              term: 'Court administration',
              description:
                'There is no European-style external judicial council. Court administration runs through the National Court Administration, "under the jurisdiction of the Supreme Court", with authority "delegated by the Chief Justice".',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the oversight bodies and their basis. It does not assess how effective any of them is, and the human-rights, anti-corruption and senior-official-investigation bodies are named from secondary reading — only the court-administration point is from a fetched source.',
        },
      ],
      uncertainty: [
        'Only the court-administration point (U.S. Federal Judicial Center) was directly fetched; the commissions and the senior-official investigation office are named from secondary/tertiary reading.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for South Korea',
      summary:
        'Every source used for the South Korea pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [
        'kr-constitution',
        'kr-fjc-judiciary',
        'kr-spo',
        'kr-koreaherald-prosecution-2025',
        'wpb-south-korea',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The South Korea pages rest on the 1987 Constitution (the Constitute translation), the U.S. Federal Judicial Center's Korea profile for the courts, the Supreme Prosecutors' Office site for the prosecution structure, Korea Herald reporting for the enacted 2025 restructuring, and the World Prison Brief for the prison figures. Each was read or retrieved and confirmed on 27 July 2026 and independently re-checked; the constitution articles, court facts, prosecution structure and World Prison Brief figures were re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Access notes and honest limits',
          text: "The Constitution is an unofficial translation (the Korean text is authoritative). The Korean police organic law and the human-rights/anti-corruption bodies' official pages were not fetched, so those facts rest on secondary reading and are described as such. The 2025 restructuring is attributed to Korea Herald because the primary gazette and implementing statutes were not fetchable (the Library of Congress page was bot-walled). The prosecution's placement under the Ministry of Justice is attributed to the Government Organization Act / Prosecutors' Office Act rather than to the prosecution's own page, which does not state it.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/south-korea-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in South Korea',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in South Korea (the National Forensic Service) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in South Korea',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in South Korea involve the Korea Immigration Service, the Korea Customs Service and the Korea Coast Guard, and could not be researched to the standard required here without risking an inaccurate description of a security-adjacent function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of South Korea',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "South Korea's institutional history — the 1987 democratic transition and the Sixth Republic, the creation of the Constitutional Court, and the successive reforms of the prosecution — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for South Korea',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1987 Constitution, the 2020–2021 investigation-power reform, and the 2025 restructuring effective in 2026 — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
