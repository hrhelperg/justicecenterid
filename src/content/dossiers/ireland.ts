import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Ireland dossier — the common-law-in-a-unitary-state pilot.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-25
 * (recorded as `factsVerifiedOn`, not a build date).
 *
 * Source access: Irish official legal and government sites (irishstatutebook.ie, gov.ie,
 * citizensinformation.ie, courts.ie, garda.ie) systematically WAF-block automated requests
 * while serving normally to a browser. The DPP's and the Police Ombudsman's own sites read
 * directly; other official pages were obtained by search retrieval of the exact official page
 * and cross-corroborated. The source register records the access path for each, and no
 * verbatim quotation is attributed to a source that was not read in full.
 *
 * Scope discipline, and the single most important thing about this dossier: "Ireland" here is
 * the sovereign State of Ireland. It is NOT the island of Ireland, and it is NOT Northern
 * Ireland (which is part of the United Kingdom, a separate jurisdiction). Every module holds
 * that line.
 */

/**
 * The pilot's real restricted claim.
 *
 * Ireland is a single national prison system administered by the Irish Prison Service, so —
 * unlike the German and US claims — there is no "aggregates N systems" caveat. The figure is a
 * national total that describes the whole system. What it is NOT is a claim about individual
 * prisons, and the density (above 100) is a national aggregate rather than a statement about
 * any one institution.
 */
const IRELAND_PRISON_DENSITY: RestrictedClaim = {
  id: 'ie-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Irish prisons held 4,808 people including those on remand, against a total capacity of 4,560 places — a prison density of 105.4 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees, and prison population rate) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'IE',
  temporalScope: 'current',
  verifiedOn: '2026-07-25',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison system, at one reference date. A density above 100 means the system as a whole held more people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I also publishes a prison population rate of 90.0 per 100,000 for Ireland, computed against a country population of 5,343,805. The report warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country. It is a snapshot count, not an average over the year.',
};

export const IRELAND: CountryDossier = {
  countryCode: 'IE',
  slug: 'ireland',
  name: 'Ireland',
  officialName: 'Ireland (Éire) — the sovereign State',
  summary:
    'Ireland is a unitary, common-law state with national justice institutions: one police service (An Garda Síochána), one independent prosecutor (the Director of Public Prosecutions), one court system, and one prison service. Ireland is the sovereign State, not the island of Ireland and not Northern Ireland.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-25',
  reviewedOn: '2026-07-25',
  factsVerifiedOn: '2026-07-25',
  jurisdictionIds: ['ie'],
  sources: ['ie-courts-service', 'ie-citizensinfo-gfa'],
  uncertainty: [
    'Nothing on these pages describes Northern Ireland, which is a separate jurisdiction within the United Kingdom.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'Ireland the State — not the island, not Northern Ireland',
      text: 'Everything here describes the sovereign State of Ireland (Éire). It does not describe the island of Ireland as a whole, and it does not describe Northern Ireland, which is part of the United Kingdom and has its own separate police, courts, prosecution and prison systems. The Constitution of Ireland once asserted a claim over the whole island; the Nineteenth Amendment in 1998, giving effect to the Good Friday Agreement, replaced that with an aspiration to a united Ireland achievable only by the consent of majorities in both jurisdictions on the island. Since then the two jurisdictions are treated as distinct, and these pages describe only the southern one.',
    },
    {
      kind: 'paragraph',
      text: 'Ireland is a unitary state with a common-law legal tradition. Unlike the federal systems described elsewhere on this site, there is no sub-national tier that runs its own police, courts, prosecution or prisons: the justice system is organised nationally, and one description of it is an accurate description of the whole state.',
      claim: 'fact',
      sources: ['ie-courts-service'],
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Common law, without the Anglo-American default',
      text: 'Ireland shares the common-law tradition with England and the United States, and its institutions carry familiar-looking names. That is a real similarity, and it is also a trap. Irish institutions are constituted by the Constitution of Ireland and by Irish statute, and several of them — an independent Director of Public Prosecutions, a single national police and security service, a written constitution with judicial review — do not map cleanly onto either the British or the American arrangement. Where these pages use Irish names and terms, it is because the nearest English or American equivalent would carry the wrong institutional meaning.',
    },
    {
      kind: 'paragraph',
      text: 'Four institutions carry most of the system. An Garda Síochána is the national police and security service. The Director of Public Prosecutions is the independent prosecuting authority. The courts — District, Circuit, High, Court of Appeal and Supreme — are administered by the Courts Service. The Irish Prison Service runs the prisons. Each is national; none is duplicated at a regional level.',
      claim: 'fact',
      sources: ['ie-courts-service', 'ie-dpp'],
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'A recent reform of police oversight',
      text: 'The bodies that oversee An Garda Síochána changed on 2 April 2025, when the Policing, Security and Community Safety Act 2024 was commenced. The police complaints body GSOC became Fiosrú, the Office of the Police Ombudsman, and a new Policing and Community Safety Authority replaced the former Policing Authority and Garda Síochána Inspectorate. The oversight module names the current bodies and marks the former ones as historical, with that date — because a page naming GSOC as the current complaints body would now be wrong.',
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Ireland',
      summary:
        'A unitary common-law system under a written constitution: the courts, the separation of police, prosecutor and judge, and the scope of the State.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['ie-courts-service', 'ie-dpp', 'ie-citizensinfo-gfa'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Ireland is a constitutional democracy with a common-law legal tradition. Its justice system rests on the Constitution of Ireland (Bunreacht na hÉireann), under which justice is administered in courts established by law, and on statute enacted by the Oireachtas, the national parliament.',
          claim: 'fact',
          sources: ['ie-courts-service'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Unitary, and why that simplifies the picture',
          text: 'Because Ireland is unitary, the questions that dominate the federal systems on this site — who legislates versus who administers, which tier runs the courts, whether a summary can stand in for sub-national variation — largely do not arise. There is one legislature, one police service, one prosecutor, one court system and one prison service, each operating across the whole State. This is our framing; the institutions it describes are set out from official sources below and on the module pages.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Separation of roles',
              description:
                'Investigation, prosecution and adjudication are held by distinct bodies: An Garda Síochána investigates, the Director of Public Prosecutions decides whether to prosecute, and the courts try and decide. The prosecution module explains why the DPP being separate from both the police and the government is a defining feature of the Irish system.',
            },
            {
              term: 'Written constitution and judicial review',
              description:
                "The High Court has jurisdiction to determine the validity of any law having regard to the Constitution — a power of constitutional review that distinguishes the Irish system from the United Kingdom's, despite the shared common-law inheritance.",
            },
            {
              term: 'One court system',
              description:
                'The District, Circuit, High, Court of Appeal and Supreme Courts form a single national hierarchy administered by the Courts Service. There is no separate regional or local court system.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'The State, not the island',
          text: 'This system is that of the State of Ireland only. Northern Ireland has its own police, courts, prosecution service and prisons under the law of the United Kingdom, and nothing here describes them.',
        },
      ],
      uncertainty: [
        'The specific articles of the Constitution are described through official Courts Service and Citizens Information material rather than quoted from the primary text, because the Irish Statute Book WAF-blocks automated access; the provisions are reader-accessible and cross-corroborated, but no verbatim constitutional quotation is asserted.',
        'The role of the Attorney General, and the relationship between the Oireachtas and the courts, have not been researched in detail.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Ireland',
      summary:
        'An Garda Síochána — the single national police and security service — its statutory basis, its national character, and why "the Irish police" understates what it is.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['ie-garda-act-2005', 'ie-fiosru'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Ireland has one national police service: An Garda Síochána. The name is Irish and is used officially rather than translated; it means "the Guardians of the Peace". It is governed by the Garda Síochána Act 2005 and provides policing and security services across the whole State.',
          claim: 'fact',
          sources: ['ie-garda-act-2005'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Police and security service in one body',
          text: 'An Garda Síochána is not only a police force in the everyday sense; it is also the State\'s security and intelligence service. This combination — ordinary policing and State security in a single national body — is a defining feature and one reason "the Irish police" understates the institution. Where these pages need the institution\'s name, they use the Irish "An Garda Síochána", with an individual officer being a "Garda" and the force collectively "the Gardaí".',
        },
        {
          kind: 'paragraph',
          text: 'The force is national and unitary. It traces to the Civic Guard formed in 1922, renamed An Garda Síochána in 1923, after the foundation of the State. There is no separate regional, county or municipal police in Ireland — the contrast with the United States, where policing is fragmented across thousands of agencies, could hardly be sharper.',
          claim: 'fact',
          sources: ['ie-garda-act-2005'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Who watches the Gardaí (and a 2025 change)',
          text: 'Independent oversight of An Garda Síochána is provided by bodies that changed on 2 April 2025: complaints about Garda personnel are now handled by Fiosrú, the Office of the Police Ombudsman, which replaced the Garda Síochána Ombudsman Commission. The oversight module sets this out, current bodies and historical predecessors alike.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the legal status and national character of An Garda Síochána. It does not describe deployment, tactics, surveillance or intelligence capability, or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The internal organisation, ranks and regional divisions of An Garda Síochána have not been researched and are not described.',
        'The security and intelligence functions are noted as existing but not detailed.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Ireland',
      summary:
        "The five courts of Ireland, the High Court's constitutional jurisdiction, the Court of Appeal established in 2014, and the non-jury Special Criminal Court in its proper context.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['ie-courts-service', 'ie-citizensinfo-scc'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Ireland has a single national court system of five courts, administered by the Courts Service: the District Court and Circuit Court (local and regional courts of first instance), the High Court, the Court of Appeal, and the Supreme Court as the court of final appeal.',
          claim: 'fact',
          sources: ['ie-courts-service'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'District and Circuit Courts',
              description:
                'The District Court is organised locally and handles lower-value civil claims, licensing, much family law, and summary criminal matters, as well as the initial stages of serious offences. The Circuit Court is organised regionally, handles higher-value civil claims and more serious criminal trials, and hears appeals from the District Court.',
            },
            {
              term: 'High Court',
              description:
                'The High Court has full original jurisdiction in all matters, civil or criminal, and — importantly — jurisdiction to determine the validity of any law having regard to the Constitution. Exercising its criminal jurisdiction it is known as the Central Criminal Court.',
            },
            {
              term: 'Court of Appeal',
              description:
                'Established on 28 October 2014 under the Thirty-third Amendment of the Constitution, it hears appeals from the High Court and the Circuit Court and from the Special Criminal Court. Its creation is recent enough that older descriptions of the Irish courts omit it.',
            },
            {
              term: 'Supreme Court',
              description:
                'The court of final appeal, hearing appeals from the Court of Appeal and, in limited constitutionally defined circumstances, directly from the High Court.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'disputed',
          title: 'The Special Criminal Court, in its proper context',
          text: 'Ireland maintains a Special Criminal Court that sits with three judges and no jury, set up under the Offences Against the State Act 1939 on the constitutional basis of Article 38.3, which permits special courts where the ordinary courts are inadequate to secure the effective administration of justice. The Director of Public Prosecutions certifies when a case goes to it. The court was designed for emergency situations and its continued use is contested and the subject of independent statutory review — this page states that it exists, its legal basis, and that its use is debated, and does not take a position on whether it should continue.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the routes and thresholds for appeals, and the specialised courts and tribunals have not been researched from the primary statutes and are not described.',
        },
      ],
      uncertainty: [
        'The monetary and offence thresholds that allocate cases between the courts have not been researched from the primary statutes.',
        'The history and current scope of the Special Criminal Court are stated at the level the cited sources support; the primary Act has not been read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Ireland',
      summary:
        'The Director of Public Prosecutions — an independent statutory office that decides whether to prosecute, separate from both the police who investigate and the government.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['ie-dpp'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prosecution in Ireland is led by the Director of Public Prosecutions (DPP), an independent statutory office established under the Prosecution of Offences Act 1974. The DPP's principal duty is to direct and supervise the prosecution of criminal offences on indictment — the more serious cases — in the name of the People of Ireland.",
          claim: 'fact',
          sources: ['ie-dpp'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Two separations that define the office',
          text: "The DPP sits between two other bodies and is separate from both. It is separate from An Garda Síochána: the Gardaí investigate, but the decision whether to prosecute is the DPP's, not the investigating officer's. And it is separate from the government: the office was created in 1974 precisely to take charging decisions out of the political sphere. This double separation — from the police and from the executive — is the feature that most distinguishes the Irish arrangement from systems where the prosecutor is part of the police, part of the judiciary, or answerable to a minister in individual cases.",
        },
        {
          kind: 'paragraph',
          text: 'The Director is, in the office\'s own words, "independent in the performance of her functions". For summary matters — the less serious offences — the DPP gives general directions to An Garda Síochána, and specific direction when it is requested; the Gardaí prosecute many summary cases within that framework.',
          claim: 'fact',
          sources: ['ie-dpp'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The office states its own independence; this page reports that. It does not research or characterise how that independence operates in any individual case, nor the relationship between the DPP and the Attorney General, which is a distinct office not examined here.',
        },
      ],
      uncertainty: [
        'The relationship between the DPP and the Attorney General has not been researched.',
        'The proportion of cases prosecuted by the DPP directly versus by An Garda Síochána under general direction has not been sourced.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Ireland',
      summary:
        'How investigation and prosecution are separated: An Garda Síochána investigates, the Director of Public Prosecutions decides whether to charge.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['ie-garda-act-2005', 'ie-dpp'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Ireland is conducted by An Garda Síochána, the national police service, as part of its statutory policing function. Because the force is national, so is the investigative capacity — there is no separate national investigation bureau standing apart from the police in the way some other systems have.',
          claim: 'fact',
          sources: ['ie-garda-act-2005'],
        },
        {
          kind: 'paragraph',
          text: 'Investigation and the decision to prosecute are held by different bodies. The Gardaí investigate and assemble the evidence; the Director of Public Prosecutions decides whether a serious case is prosecuted on indictment. The investigating officer does not make the charging decision for indictable matters — that separation is a deliberate safeguard.',
          claim: 'fact',
          sources: ['ie-dpp'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why the separation matters',
          text: 'Placing the charging decision with an independent prosecutor rather than the investigating police is a structural check: the body that decides whether the evidence justifies a prosecution is not the body that gathered it. This page describes that allocation of responsibility; it is our framing of why it matters, grounded in the official description of the two roles.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who decides to charge. It does not describe investigative techniques, surveillance or forensic methods, evidential thresholds at an operational level, or anything that would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The role of the courts in authorising investigative measures (warrants, detention) has not been researched from the primary statutes and is not described.',
        'Specialist investigative units within An Garda Síochána have not been researched.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Ireland',
      summary:
        'The Irish Prison Service runs a single national prison system — and a properly scoped figure showing it above capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [IRELAND_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Ireland are run by a single national body, the Irish Prison Service. Because the system is national and unitary, a figure for the whole system describes the whole system — there is none of the sub-national aggregation that qualifies a German or United States prison figure.',
          claim: 'fact',
          sources: ['coe-space-i-2024'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024, Irish prisons held 4,808 people, including those on remand, against a total capacity of 4,560 places — a prison density of 105.4 inmates per 100 places. That density above 100 means the system as a whole held more people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density above 100 does not by itself establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with France, Germany or the United States pages.",
        },
        {
          kind: 'paragraph',
          text: 'Because the system is unitary, questions that require sub-national qualification elsewhere on this site — which state, which Land — do not arise for Ireland. What this pilot has not researched is the internal structure: the individual prisons, the regimes, non-custodial sanctions, probation, and the oversight of prison conditions.',
          claim: 'analysis',
          sources: ['coe-space-i-2024'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons, non-custodial sanctions, the Probation Service, rehabilitation and reintegration, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The internal structure of the Irish Prison Service and the individual prisons have not been researched.',
        'The Probation Service and non-custodial sanctions are named but not described.',
        'Prison inspection and complaints mechanisms have not been researched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Ireland',
      summary:
        'Who oversees An Garda Síochána — the current bodies (Fiosrú, the Policing and Community Safety Authority) and the historical ones they replaced on 2 April 2025.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'mixed',
      sources: ['ie-fiosru', 'ie-gov-pscsa-2024'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'callout',
          variant: 'note',
          title: 'This architecture changed on 2 April 2025 — read the date, not the old names',
          text: 'Police oversight in Ireland was reorganised when the Policing, Security and Community Safety Act 2024 was commenced on 2 April 2025. Several bodies that older sources still name — GSOC, the Policing Authority, the Garda Síochána Inspectorate — no longer exist in that form. This page names the current bodies and marks the former ones as historical, with the transition date, because getting this wrong is the specific risk in a recently reformed system.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Fiosrú — Office of the Police Ombudsman (current)',
              description:
                'Since 2 April 2025, complaints from the public about Garda personnel are received and investigated by Fiosrú, the Office of the Police Ombudsman, established under the Policing, Security and Community Safety Act 2024. It replaced the Garda Síochána Ombudsman Commission (GSOC).',
            },
            {
              term: 'Policing and Community Safety Authority (current)',
              description:
                'Also established by the 2024 Act, the Policing and Community Safety Authority took over the oversight and inspection functions previously split between the Policing Authority and the Garda Síochána Inspectorate, which were dissolved.',
            },
            {
              term: 'The courts and the Oireachtas',
              description:
                'Beyond the dedicated policing-oversight bodies, the ordinary mechanisms apply: the courts review the legality of official action, and the Oireachtas exercises parliamentary scrutiny. These are named here to place the policing bodies in context, not described in detail.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Historical predecessors',
          text: 'GSOC (the Garda Síochána Ombudsman Commission), the Policing Authority, and the Garda Síochána Inspectorate are the historical predecessors of the current bodies, superseded on 2 April 2025. They are named here so that a reader meeting them in an older source can place them, not because they are current.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: "It states which bodies currently oversee An Garda Síochána and which they replaced. It does not assess how effective any of them is — the existence of an oversight body is not evidence that oversight is effective, and this pilot has not researched the bodies' findings or powers in the detail that such an assessment would require.",
        },
      ],
      uncertainty: [
        'The powers, procedures and findings of Fiosrú and the Policing and Community Safety Authority have not been researched in detail; only their identity, statutory basis and commencement date are stated.',
        'Oversight of prisons and of the courts, as distinct from policing, has not been researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Ireland',
      summary:
        'Every source used for the Ireland pages, what each supports, how it was accessed and verified, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [
        'ie-dpp',
        'ie-courts-service',
        'ie-garda-act-2005',
        'ie-fiosru',
        'ie-gov-pscsa-2024',
        'ie-citizensinfo-scc',
        'ie-citizensinfo-gfa',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Ireland pages rest on eight sources: the Office of the DPP, the Courts Service, the Garda Síochána Act 2005, Fiosrú, a Government of Ireland statement on the 2024 policing reform, two Citizens Information pages (the Special Criminal Court, and the constitutional change on the island of Ireland), and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 25 July 2026.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: "Irish official legal and government sites systematically block automated access while serving normally to a browser. The DPP's and the Police Ombudsman's own sites read directly. The Courts Service, Irish Statute Book, gov.ie and Citizens Information pages were obtained by search retrieval of the exact official page and cross-corroborated across sources — the reader-accessible official documents behind the block. The source register records the access path for each source, and no verbatim quotation is attributed to a source that was not read in full.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/ireland-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Ireland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'No source on the organisation of forensic science in Ireland (Forensic Science Ireland and the State Laboratory arrangements) has been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Ireland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Ireland involve a distinctive combination — the Common Travel Area with the United Kingdom, the European Union customs and Schengen context, and the land border with Northern Ireland — that must be distinguished carefully and could not be researched to that standard here. The scope-integrity risk (conflating the State with the island) is highest exactly on this topic, so it is better absent than approximated.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Ireland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Irish institutional history involves the transition from British administration, the foundation of the State in 1922, the Civil War, and the constitutional settlement — and cannot be written responsibly from general knowledge. It requires archival and scholarly sources not consulted here, and would need to handle the relationship with Northern Ireland with the same scope care the rest of the dossier applies.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Ireland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and jurisdiction. The dated facts established in this pilot — the Civic Guard (1922) and Garda renaming (1923), the Offences Against the State Act (1939), the Prosecution of Offences Act (1974), the Nineteenth Amendment (1998), the Court of Appeal (2014), and the policing-oversight reform (2 April 2025) — are the beginning of one, but assembling a responsible timeline needs primary sources for each, which the WAF blocking prevented here.',
    },
  ],
};
