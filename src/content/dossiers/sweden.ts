import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Sweden dossier — a unitary state whose justice agencies are constitutionally insulated from
 * ministerial direction (Batch A).
 *
 * Research date: facts checked against sources on 2026-07-26 and independently re-verified (no
 * factual errors; one citation strengthened — the four fundamental laws are enumerated in the
 * Instrument of Government itself, Ch. 1 Art. 3).
 *
 * The defining feature: the prohibition on "ministerstyre". Under the Instrument of Government
 * (Ch. 12 Art. 2), no public authority — including the Government or an individual minister — may
 * determine how an administrative authority decides an individual case or applies the law. So the
 * police, the prosecution and the prison service, though they come under the Government, are
 * constitutionally shielded from case-level ministerial command. Sweden also has two branches of
 * courts (general and administrative), each with its own supreme court, and no constitutional court.
 *
 * Source access: the Chancellor of Justice's site (jk.se) was unreachable (connection refused, in
 * both the research and verification passes), so JK is described only to the extent the
 * Constitution establishes it.
 */
const SE_PRISON_DENSITY: RestrictedClaim = {
  id: 'se-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Swedish prisons held 9,748 people including those on remand, against a total capacity of 9,295 places — a prison density of 104.9 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'SE',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison and probation system (Kriminalvården), at one reference date. A density of 104.9 means the system as a whole held more people than its stated capacity on that day — Sweden is above capacity at the national level. It does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const SWEDEN: CountryDossier = {
  countryCode: 'SE',
  slug: 'sweden',
  name: 'Sweden',
  officialName: 'the Kingdom of Sweden',
  independentBodyNoun: 'a Swedish government body',
  summary:
    'Sweden is a unitary, civil-law constitutional monarchy governed by four fundamental laws. Its defining feature is the constitutional prohibition on "ministerstyre": no minister may direct how the police, the prosecution or the prison service decides an individual case. It has two branches of courts — general and administrative — each with its own supreme court, and no constitutional court.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['se'],
  sources: ['se-constitution', 'se-polisen'],
  uncertainty: [
    'The Chancellor of Justice (Justitiekanslern) is described only to the extent the Constitution establishes it, because its own website was unreachable.',
    'The economic-crime authority, the courts administration, the judicial-nominations board, and the exact statutory thresholds for prosecutor-led versus police-led investigation were not verified from primary sources and are not described.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Sweden is a unitary constitutional monarchy with a civil-law legal tradition, governed by four fundamental laws (grundlagar). The central one for the structure of the state is the Instrument of Government (Regeringsformen), which under Chapter 1, Article 8 divides public bodies into courts, which administer justice, and administrative authorities, which carry out public administration. The police, the prosecution and the prison service are all administrative authorities.',
      claim: 'fact',
      sources: ['se-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'The defining feature: no minister may direct a case',
      text: 'The most important thing about the Swedish system is the constitutional prohibition on "ministerstyre" — ministerial rule. Chapter 12, Article 2 of the Instrument of Government provides that no public authority, including the Government, "may determine how an administrative authority shall decide in a particular case … or relating to the application of law". So although the Police Authority, the Prosecution Authority and the Prison and Probation Service come under the Government, no minister may tell them how to decide an individual case. The Government steers them collectively, through general rules and budgets, not through case-level command. This is a stronger form of agency autonomy than a system where the prosecution is directed by a justice ministry.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Two branches of courts, two supreme courts',
      text: "Sweden's courts come in two branches (Chapter 11, Article 1): the general courts — district courts, courts of appeal, and the Supreme Court (Högsta domstolen) — and the general administrative courts — administrative courts, administrative courts of appeal, and the Supreme Administrative Court (Högsta förvaltningsdomstolen). There are thus two apex courts, one per branch, and no separate constitutional court. The courts module keeps them distinct.",
    },
    {
      kind: 'paragraph',
      text: 'Four bodies carry the system. The Police Authority (Polismyndigheten) is a single national authority. The Prosecution Authority (Åklagarmyndigheten) is headed by the Prosecutor General. The two branches of courts run up to their respective supreme courts. And the Prison and Probation Service (Kriminalvården) runs prisons, remand, community supervision and prisoner transport. Each is national; none is a regional or municipal body.',
      claim: 'fact',
      sources: ['se-polisen', 'se-aklagare', 'se-kriminalvarden', 'se-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Sweden',
      summary:
        'A unitary state under four fundamental laws — with a constitutional prohibition on ministerial direction of its agencies, two branches of courts, and diffuse constitutional review instead of a constitutional court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['se-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Sweden is governed by four fundamental laws, enumerated in the Instrument of Government (Chapter 1, Article 3): the Instrument of Government itself, the Act of Succession, the Freedom of the Press Act and the Fundamental Law on Freedom of Expression. The Instrument of Government is the one that structures the state, dividing public bodies into courts and administrative authorities (Chapter 1, Article 8), and requiring both to observe objectivity and impartiality (Chapter 1, Article 9).',
          claim: 'fact',
          sources: ['se-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independence guaranteed twice, in two ways',
          text: 'Two separate constitutional guarantees are worth distinguishing. The courts are independent: Chapter 11, Article 3 provides that neither the Riksdag nor any public authority may determine how a court decides an individual case. And the administrative authorities — including the police, the prosecution and the prison service — are also insulated: Chapter 12, Article 2 forbids any public authority, the Government included, from determining how they decide an individual case or apply the law. The prohibition on ministerstyre is the reason a Swedish prosecutor can say the Government has no power to intervene in its decisions.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'No constitutional court',
          text: 'Sweden has no constitutional court. Instead, constitutional review is diffuse: Chapter 11, Article 14 provides that if any court finds a provision conflicts with a rule of fundamental law or other superior statute, "the provision shall not be applied". So every court, in the course of deciding an ordinary case, may decline to apply an unconstitutional provision — a different model from a dedicated constitutional court like Belgium\'s.',
        },
      ],
      uncertainty: [
        'The constitutional text is cited from the riksdagen.se official English edition; the authoritative text is Swedish.',
        'The three other fundamental laws are named but not described; only the Instrument of Government is used.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Sweden',
      summary:
        'A single national Police Authority (Polismyndigheten) organised into seven regions — insulated by the Constitution from case-level ministerial direction.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['se-polisen', 'se-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Sweden has one national police, the Police Authority (Polismyndigheten). It is a single administrative authority organised internally into seven police regions, twenty-five police districts and ninety-five local police districts, led by the National Police Commissioner. There is no regional or municipal police force; the regions are internal divisions of the one authority.',
          claim: 'fact',
          sources: ['se-polisen'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Under the Government, but not directed in cases',
          text: 'Like the other justice agencies, the Police Authority comes under the Government — but under the prohibition on ministerstyre (Chapter 12, Article 2) no minister may determine how it decides an individual case. It is steered through general rules and its budget, not through case-level ministerial command. The single national authority was formed by merging the former regional police authorities into one (in 2015, on the accounts consulted, though that date rests on secondary sources).',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the structure of the police and its constitutional position. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The 2015 merger date is well attested but rests on secondary sources; only the current single-authority structure is asserted as primary-verified.',
        'The National Operations Department, the National Forensic Centre and the Security Service are noted as parts of the authority but not described.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Sweden',
      summary:
        'Two branches — general courts up to the Supreme Court, and administrative courts up to the Supreme Administrative Court — with constitutional review exercised by every court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['se-constitution', 'se-domstol'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Sweden has two branches of courts, fixed by Chapter 11, Article 1 of the Constitution. The general courts hear civil and criminal cases: district courts (tingsrätt), courts of appeal (hovrätt), and at the apex the Supreme Court (Högsta domstolen), whose main task is to create precedent. The general administrative courts hear disputes with public authorities: administrative courts (förvaltningsrätt), administrative courts of appeal (kammarrätt), and at the apex the Supreme Administrative Court (Högsta förvaltningsdomstolen).',
          claim: 'fact',
          sources: ['se-constitution', 'se-domstol'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Two supreme courts, no constitutional court',
          text: 'There are two apex courts, one per branch, and no separate constitutional court. Constitutional questions are not sent to a special court; instead every court applies Chapter 11, Article 14 — if a provision conflicts with fundamental law, that court does not apply it. This "diffuse" review is a distinctively Nordic answer to constitutional adjudication.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Judicial independence',
          text: 'Chapter 11, Article 3 guarantees judicial independence in strong terms: neither the Riksdag nor any public authority may determine how a court adjudicates an individual case or otherwise applies the law in a particular case, nor how judicial responsibilities are distributed among judges.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the specialised courts, the lay-assessor (nämndemän) system, and the National Courts Administration have not been researched from the primary statutes and are not described.',
        },
      ],
      uncertainty: [
        'The National Courts Administration (Domstolsverket) and the judicial-nominations board (Domarnämnden) are named as existing but not described (not fetched from primary sources).',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Sweden',
      summary:
        'The Prosecution Authority (Åklagarmyndigheten) — an administrative authority the Government may not instruct in a case, whose prosecutors lead investigations.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['se-aklagare', 'se-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Sweden is conducted by the Prosecution Authority (Åklagarmyndigheten), headed by the Prosecutor General (Riksåklagaren). A prosecutor has three main tasks: to lead investigations, to bring prosecutions, and to appear in court. A prosecutor also has a duty of objectivity — an obligation to investigate and weigh evidence both for and against the suspect.',
          claim: 'fact',
          sources: ['se-aklagare'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independent because the Government may not intervene',
          text: 'In the Authority\'s own words, "Sweden\'s prosecutors are independent when they make decisions such as whether to file a prosecution or place someone under arrest", and "the Swedish Government has no powers to intervene in a public authority\'s decisions in specific matters relating to the application of the law". That independence is not a matter of convention: it is the constitutional prohibition on ministerstyre (Chapter 12, Article 2) applied to the prosecution. It is a different mechanism from the Norwegian one (where only the King in Council may instruct) but reaches a similar result — a prosecution the minister cannot direct in a case.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The prosecutor leads the investigation',
          text: 'In more serious matters the prosecutor leads the preliminary investigation and decides which inquiries the police should make; the police carry out the investigative work. This is set out on the investigations page.',
        },
      ],
      uncertainty: [
        'The exact statutory threshold at which the prosecutor rather than the police leads the preliminary investigation (in the Code of Judicial Procedure) was not verified from a fetched source.',
        'The separate Economic Crime Authority was not verified from a primary source and is not described.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Sweden',
      summary:
        'Prosecutor-led preliminary investigation in serious cases: the prosecutor decides which inquiries the police make, and the police carry them out.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['se-aklagare', 'se-polisen'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Sweden runs through a "preliminary investigation" (förundersökning). In more serious matters the prosecutor leads it: the prosecutor decides which inquiries the police should make, and the police carry out the investigative measures. The prosecutor\'s duty of objectivity applies throughout — evidence must be gathered and weighed both for and against the suspect.',
          claim: 'fact',
          sources: ['se-aklagare'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prosecutor-led, and case-insulated',
          text: "As in Norway, the investigation is prosecutor-led. What is distinctive in Sweden is why the prosecutor cannot be leaned on: the constitutional prohibition on ministerstyre means the Government may not direct the prosecutor's decisions in the case, so the direction of the investigation sits with an authority the minister cannot instruct. The check comes from that constitutional insulation and from the courts, not from separating the police and prosecutor into different chains. This page describes that allocation; it is our framing, grounded in the official sources.",
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who directs and who carries out the investigation. It does not describe investigative techniques, surveillance or forensic methods, or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The exact division between prosecutor-led and police-led investigations, and the judicial controls on coercive measures, were not researched from the primary Code of Judicial Procedure.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Sweden',
      summary:
        'A unified national service (Kriminalvården) running prisons, remand, community supervision and transport — and a properly scoped Council of Europe figure showing the system above capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['se-kriminalvarden', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [SE_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Corrections in Sweden are run by a single unified national body, the Prison and Probation Service (Kriminalvården). In its own words, it operates "prisons, remand prisons and a national transport service" and is "responsible for supervising people serving sentences in the community" — so prisons, remand detention, community supervision (probation) and prisoner transport are all in one authority, rather than split between separate prison and probation agencies. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['se-kriminalvarden'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Swedish prisons held 9,748 people, including those on remand, against a total capacity of 9,295 places — a prison density of 104.9 inmates per 100 places. That density above 100 means the system as a whole held more people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual institutions and their regimes, the detail of community supervision, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The internal structure of Kriminalvården and the individual institutions have not been researched.',
        "Sweden's rising prison population and its policy context are noted as beyond the scope of this snapshot.",
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Sweden',
      summary:
        'The Parliamentary Ombudsmen under the Riksdag, and the Chancellor of Justice under the Government — a two-track supervision that the Constitution itself sets up.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['se-jo', 'se-constitution', 'se-polisen'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Parliamentary Ombudsmen (Justitieombudsmannen, JO)',
              description:
                'Appointed by the Riksdag (Instrument of Government Chapter 13, Article 6) "to ensure that public authorities and their staff comply with the laws and other statutes governing their actions". As a body under Parliament rather than the Government, the JO supervises the courts, the administrative authorities and their staff, and may institute legal proceedings.',
            },
            {
              term: 'Chancellor of Justice (Justitiekanslern, JK)',
              description:
                'A central-government administrative authority under the Government (Chapter 12, Article 1), which — like the JO — may initiate disciplinary proceedings against justices of the two supreme courts (Chapter 11, Article 8). Its own website was unreachable during research, so it is described here only to the extent the Constitution establishes it.',
            },
            {
              term: 'Department of Special Investigations',
              description:
                "Within the Police Authority, this department investigates — on the direction of a special prosecution office — complaints and suspected crimes involving police officials, prosecutors, judges and members of Parliament. So the investigation of the police is itself prosecutor-directed rather than run by the police's ordinary chain.",
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Two ombuds-type tracks, set up by the Constitution',
          text: "Sweden's oversight has a deliberate parliamentary-versus-executive split written into the Constitution: the JO answers to the Riksdag, the JK to the Government, and both can pursue misconduct — including, for the two supreme courts, the removal of justices. It is a structural expression of the same objectivity the Constitution requires of every public body.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: "It states which bodies supervise the authorities and the courts, and their constitutional basis. It does not assess how effective any of them is, and — because its site was unreachable — it does not describe the Chancellor of Justice's other functions.",
        },
      ],
      uncertainty: [
        "The Chancellor of Justice's functions beyond its constitutional placement and disciplinary role were not verified (its website was unreachable).",
        'The detailed powers and findings of the JO were not researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Sweden',
      summary:
        'Every source used for the Sweden pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'se-constitution',
        'se-aklagare',
        'se-polisen',
        'se-kriminalvarden',
        'se-domstol',
        'se-jo',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Sweden pages rest on seven sources: the Instrument of Government (the riksdagen.se official English edition), the Prosecution Authority, the Police Authority, the Prison and Probation Service, the courts (the Supreme Court page), the Parliamentary Ombudsmen, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass that found no factual errors.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: 'The Instrument of Government was fetched as the riksdagen.se official English PDF and text-extracted; the prosecution, police, prison-and-probation, courts and ombudsmen pages were read from their own official sites. One site could not be reached: the Chancellor of Justice (jk.se) refused connections in both passes, so JK is described only from the Constitution. The 2015 police-merger date rests on secondary sources and is not asserted as primary-verified. The source register records the access path for each source.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/sweden-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Sweden',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Sweden (the National Forensic Centre within the Police Authority, and the National Board of Forensic Medicine) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Sweden',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Sweden involve the Police Authority, the Swedish Customs (Tullverket), the Coast Guard, and the Schengen and EU customs context, and could not be researched to the standard required here.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Sweden',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Swedish institutional history — the development of the four fundamental laws, the world's oldest ombudsman office (1809), and the 2015 unification of the police — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Sweden',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1974 Instrument of Government and the (secondary-sourced) 2015 police unification — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
