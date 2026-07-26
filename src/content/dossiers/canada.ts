import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Canada dossier — the contract-policing pilot.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-26.
 *
 * Source access: laws-lois.justice.gc.ca serves the full consolidated bilingual statutes to a
 * browser user-agent; the Constitution Acts, the Criminal Code, the RCMP Act, the Charter, the
 * Supreme Court Act and the Director of Public Prosecutions Act were read that way; the RCMP
 * contract-policing figures were read from the RCMP's own page; the corrections statistic was
 * read from the Statistics Canada primary CSV. No verbatim quotation is attributed to a source
 * not read in full.
 *
 * Two things define this dossier and every module holds the line on both:
 *
 *  1. FEDERAL CRIMINAL LAW, PROVINCIAL ADMINISTRATION. Parliament has exclusive authority over
 *     the criminal law (Constitution Act 1867 s.91(27)) — one Criminal Code — but the provinces
 *     administer justice (s.92(14)). Unlike the United States and Brazil, the residual power
 *     (Peace, Order, and good Government) is FEDERAL.
 *
 *  2. CONTRACT POLICING. In eight provinces and the three territories, provincial/territorial
 *     policing is delivered by the RCMP — a federal institution that stays federally governed —
 *     under a cost-shared Police Service Agreement. Ontario and Quebec run their own provincial
 *     police. These pages never say the RCMP is owned by a province, never imply every province
 *     contracts it, and never call it a single uniform nationwide general police service.
 */

/**
 * The pilot's restricted claim — a properly scoped provincial/territorial custody figure.
 *
 * Canada's corrections are split by sentence length: two years or more is federal (Correctional
 * Service Canada); under two years, plus remand, is provincial/territorial. Statistics Canada
 * publishes the two on different bases, so the honest scoped figure is the provincial/territorial
 * average daily count alone — which also surfaces a striking, well-sourced fact: remand
 * (people not yet convicted) outnumbers sentenced custody in the provincial/territorial systems.
 */
const CANADA_PT_CUSTODY: RestrictedClaim = {
  id: 'ca-pt-custody-2023-24',
  category: 'detention-capacity',
  statement:
    'In fiscal year 2023/2024, the average daily count of adults in provincial and territorial custody in Canada was 25,349.8, of which 19,334.5 were held on remand (not yet convicted or sentenced) and 5,895.1 were serving a sentence.',
  claimType: 'fact',
  sources: ['ca-statcan-corrections'],
  sourceScope:
    'Statistics Canada Table 35-10-0154-01, "Average counts of adults in provincial and territorial correctional programs", geography "Provinces and Territories", fiscal year 2023/2024, "actual-in" (in-custody) counts: total 25,349.8; remand 19,334.5; sentenced 5,895.1; other statuses 120.2.',
  jurisdiction: 'CA',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2023/2024',
  limitation:
    'Provincial and territorial custody only. It EXCLUDES federal custody — sentences of two years or more, administered by Correctional Service Canada — so it is not the total number of adults incarcerated in Canada. It is an average daily count over the fiscal year, not a single-day snapshot, and it aggregates the ten provinces and three territories, describing none individually. It counts adults only, not youth. Remand is pre-trial or pre-sentence detention of people who are not convicted. The figure supports no comparison with any other country and no inference about crime, effectiveness or conditions.',
};

export const CANADA: CountryDossier = {
  countryCode: 'CA',
  slug: 'canada',
  name: 'Canada',
  officialName: 'Canada',
  summary:
    'Canada is a federation with one federal criminal law but provincially administered justice. Its defining feature is contract policing: in eight provinces and the three territories the federal RCMP delivers provincial and territorial policing under agreement, while Ontario and Quebec run their own provincial police. Federal and provincial courts, prosecutors and prisons run in parallel, and the law is authoritative in both English and French.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['ca', 'ca-on', 'ca-qc', 'ca-bc', 'ca-yt'],
  sources: ['ca-constitution-1867'],
  uncertainty: [
    'Canadian federal law is authoritative in both English and French; sources are cited in English, with the French title recorded, and neither language version prevails over the other.',
    'The forensic system, border and customs arrangements, external oversight machinery and institutional history have not been researched to the required standard and are not described.',
    'No individual province or territory has been researched beyond the constitutional and agreement structure; Ontario, Quebec, British Columbia and the Yukon appear as jurisdiction samples, not as researched institutions. No Indigenous jurisdiction is described as such; First Nations policing arrangements are noted only in prose.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'One criminal law, delivered many ways',
      text: 'Canada is a federation, and its justice system splits along a line worth stating at the outset. The criminal LAW is federal: Parliament has exclusive authority over "The Criminal Law ... including the Procedure in Criminal Matters" (Constitution Act 1867, s.91(27)), so there is one Criminal Code for the whole country. But the ADMINISTRATION of justice is provincial (s.92(14)) — the provinces run the courts, the prosecutors and the prisons for shorter sentences, and either run their own police or arrange for policing. Unlike the United States and Brazil, the residual power in Canada is federal, not provincial.',
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Contract policing — the thing to understand about Canada',
      text: "The feature with no clean equivalent on the other country pages is how policing is delivered. Policing is constitutionally the province's responsibility, but most provinces do not run their own police force. In eight of the ten provinces and in all three territories, provincial and territorial policing is delivered by the RCMP — Canada's federal police force — under a Police Service Agreement, a cost-shared contract. The RCMP stays a federal institution, governed by Canada, even while it polices a province and enforces provincial priorities. Only Ontario (the Ontario Provincial Police) and Quebec (the Sûreté du Québec) run their own provincial forces. So a province can be responsible for policing without owning the police that do it — the arrangement the law-enforcement page sets out.",
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'The law is bilingual, and Quebec is bijural',
      text: 'Two more distinctions run through everything here. First, Canadian federal law is enacted in English and French and, by the equal-authenticity rule (Charter s.18(1)), both versions are equally authoritative — neither is a translation of the other. These pages cite the English and keep French institutional names, such as the Sûreté du Québec, without inventing English ones. Second, Canada is bijural: the common law governs private law in nine provinces and the territories, while Quebec applies the civil-law tradition to private-law matters. The criminal law, however, is the same federal Criminal Code everywhere.',
    },
    {
      kind: 'paragraph',
      text: 'The institutions that carry the system, then, come in federal and provincial pairs. Policing is federal (the RCMP), provincial (the Ontario Provincial Police, the Sûreté du Québec) and municipal at once. Prosecution is split between the federal Public Prosecution Service of Canada and the provincial Crown services. The courts run in two systems, federal and provincial, under the Supreme Court of Canada. And corrections are divided by sentence length — federal penitentiaries for two years or more, provincial custody for less. The module pages take each in turn.',
      claim: 'fact',
      sources: ['ca-constitution-1867'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Canada',
      summary:
        'A federation with one federal criminal law but provincially administered justice, Charter legal rights that run throughout, and a bijural, bilingual legal order.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ca-constitution-1867', 'ca-charter-1982', 'ca-criminal-code'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Canada is a constitutional federal state under the Constitution Acts of 1867 and 1982. The division of legislative powers is what shapes its justice system. Under the Constitution Act 1867, Parliament has exclusive authority over "The Criminal Law, except the Constitution of Courts of Criminal Jurisdiction, but including the Procedure in Criminal Matters" (s.91(27)) and over federal penitentiaries (s.91(28)); the provinces have exclusive authority over "The Administration of Justice in the Province, including the Constitution, Maintenance, and Organization of Provincial Courts" (s.92(14)) and over provincial prisons (s.92(6)).',
          claim: 'fact',
          sources: ['ca-constitution-1867'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Federal law, provincial administration — and a federal residual power',
          text: 'This produces the characteristic Canadian arrangement: one uniform Criminal Code, enacted federally, but administered through provincially organized courts, prosecutors and police. It resembles the German and Brazilian pattern of federal law with sub-national administration, with one sharp difference from both Brazil and the United States: the residual "Peace, Order, and good Government" power belongs to the FEDERAL Parliament (s.91), not to the provinces. Provincial authority is a set of constitutionally enumerated, exclusive powers (s.92), not a residual reserved to the provinces.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Charter legal rights',
              description:
                'The Canadian Charter of Rights and Freedoms (Constitution Act 1982) guarantees, under "Legal Rights", the right to "life, liberty and security of the person" (s.7), the right "to be presumed innocent until proven guilty according to law in a fair and public hearing by an independent and impartial tribunal" (s.11(d)), and the right "not to be subjected to any cruel and unusual treatment or punishment" (s.12). These apply across the whole country.',
            },
            {
              term: 'Bijural',
              description:
                'Canada uses two legal traditions. The common law governs private law in nine provinces and the territories; Quebec applies the civil-law tradition to private-law matters. The criminal law is federal and the same everywhere, so bijuralism is a feature of private law, not of the criminal justice this site describes — but it is why Quebec institutions are described in their own terms.',
            },
            {
              term: 'Bilingual and equally authoritative',
              description:
                'Federal statutes are enacted in English and French, and by the equal-authenticity rule (Charter s.18(1)) "both language versions are equally authoritative". Neither is a translation of the other; a point of law can turn on either version.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states the constitutional division of powers and the Charter rights that frame criminal justice. It does not resolve the many areas of overlapping or contested jurisdiction between Parliament and the provinces, which are the subject of a large constitutional case law not researched here.',
        },
      ],
      uncertainty: [
        'Constitutional provisions are cited from the official consolidated text; the French version is equally authoritative and any fine point may turn on it.',
        'The extensive case law on the federal/provincial division of powers has not been researched and is not described.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Canada',
      summary:
        'Contract policing — the RCMP delivering provincial and territorial policing under agreement in eight provinces and three territories, Ontario and Quebec running their own forces, and why a contracting province does not own the RCMP.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ca-rcmp-act', 'ca-rcmp-contract', 'ca-sq', 'ca-constitution-1867'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Canadian policing operates on three levels at once — federal, provincial and municipal — but the way it is delivered is unusual. The Royal Canadian Mounted Police is a federal force: under the RCMP Act "There shall continue to be a police force for Canada ... known as the Royal Canadian Mounted Police" (s.3), and the Commissioner "under the direction of the Minister, has the control and management of the Force" (s.5). It is, and remains, a federal institution governed by Canada.',
          claim: 'fact',
          sources: ['ca-rcmp-act'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Contract policing — a federal force delivering provincial policing',
          text: 'Policing is constitutionally the province\'s responsibility (Constitution Act 1867, s.92(14)), but most provinces do not run their own force. The RCMP Act lets the Minister "enter into an arrangement with the government of any province for the use or employment of the Force ... in aiding the administration of justice in the province" (s.20). Under these Police Service Agreements the RCMP states it "currently provides contract policing services to eight provinces (Ontario and Quebec have their own provincial police service), three territories and under direct contract to some 150 municipalities". The provinces and territories pay 70% of the cost and the federal government 30%. Crucially, the RCMP remains federal throughout: "As Canada\'s national police force, the RCMP maintains national standards and policies across contract policing jurisdictions." A contracting province is responsible for policing and pays most of the bill, but it does not own the force — the arrangement is a service under agreement, not a transfer of the institution.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'The provinces that run their own police',
              description:
                'Ontario and Quebec are the exceptions: Ontario is policed provincially by the Ontario Provincial Police, and Quebec by the Sûreté du Québec (named in French; no official English name is used here). These are the provinces\' own forces, not RCMP contracts, which is why they are the contrast that makes "contract policing" a meaningful category rather than a nationwide default.',
            },
            {
              term: 'Municipal policing, and variation within a province',
              description:
                'Even within a contract province, policing is not uniform. Larger municipalities may run their own municipal police (for example the Vancouver Police Department in British Columbia) or hold their own RCMP municipal contracts, on a different cost-share. So "the RCMP polices British Columbia" is true of the province generally but not of every city in it.',
            },
            {
              term: 'First Nations policing',
              description:
                'First Nations and Inuit communities are policed under a range of arrangements — some communities run their own police services, others are policed by the RCMP or a provincial force under agreement, through the federal First Nations and Inuit Policing Program. These arrangements are noted here in general terms and are not described in detail; this pilot creates no Indigenous-jurisdiction page.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'What the RCMP is, and is not',
          text: 'The RCMP is genuinely several things at once: a federal police force with federal duties, and — under contract — the provincial or territorial police in most of Canada, and the municipal police in many places. What it is not is a single uniform national police service that polices all of Canada directly, and it is not owned by, or a branch of, the provinces it polices. Ontario and Quebec are policed provincially without it. Independent oversight of RCMP conduct runs through the Civilian Review and Complaints Commission for the RCMP; provincial and municipal forces have their own, separate oversight bodies, which this pilot has not researched.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the constitutional and contractual structure of Canadian policing. It does not describe deployment, tactics, surveillance capability, operational procedure, or anything that would help a person anticipate, frustrate or evade the police, and it will not.',
        },
      ],
      uncertainty: [
        'The Police Service Agreements run to 2032 but are terminable earlier on notice and are renewable; the exact notice and renewal terms were not read from the agreements themselves and are stated only in general terms.',
        'The internal organisation and specialised units of the RCMP and the provincial forces have not been researched.',
        'The detail of First Nations policing arrangements, which vary by community and agreement, has not been researched and is deliberately not described.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Canada',
      summary:
        'The Supreme Court of Canada over two court systems — federal and provincial — and the s.96 hybrid: superior-court judges appointed and paid by the federal government in courts the provinces constitute and administer.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ca-scc-act', 'ca-constitution-1867'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'At the top of the Canadian court system is the Supreme Court of Canada, the final court of appeal for the whole country. Under the Supreme Court Act it "shall consist of a chief justice to be called the Chief Justice of Canada, and eight puisne judges" (s.4) — nine judges — and at least three of them must be appointed from Quebec (s.6), reflecting Quebec\'s distinct civil-law tradition.',
          claim: 'fact',
          sources: ['ca-scc-act'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Two court systems',
              description:
                'Below the Supreme Court, Canada has a federal system — the Federal Court and the Federal Court of Appeal, which handle federal-law matters and judicial review of federal decisions — and, in each province, the provincial courts. Most criminal cases are heard in the provincial system.',
            },
            {
              term: 'The provincial superior courts, and the s.96 hybrid',
              description:
                'Each province has superior courts (with names such as the Superior Court of Justice or the Court of King\'s Bench). Here the two orders of government meet in one institution: the province "constitutes, maintains and organizes" the court (s.92(14)), but the Governor General — the federal executive — "shall appoint the Judges of the Superior, District, and County Courts in each Province" (s.96), and Parliament fixes and pays their salaries (s.100). The province owns and administers the court; the federal government appoints and pays its judges.',
            },
            {
              term: 'The provincial (lower) courts',
              description:
                'Below the superior courts sit the provincial or territorial courts, whose judges are appointed by the province or territory. These courts handle the large majority of criminal matters at first instance.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'One institution, two orders of government',
          text: "The s.96 superior courts are the clearest example of a Canadian pattern: a single institution held by one order of government and staffed by another. The province owns the court; the federal government appoints the judge. It is the same shape as contract policing — a function that belongs to one level, delivered or staffed through another — and this site describes both in prose rather than treating the court as anything other than the province's own.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the appeal routes, the appointment process and the administrative bodies of the judiciary have not been researched from the primary sources beyond the constitutional outline and are not described.',
        },
      ],
      uncertainty: [
        'The jurisdictional boundaries between the federal and provincial court systems, and between the superior and provincial courts, are stated only at a structural level.',
        'The Tax Court of Canada and specialised federal tribunals are not described.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Canada',
      summary:
        'A split prosecution service — the federal Public Prosecution Service of Canada for federal offences and for everything in the territories, and provincial Crown services for most Criminal Code offences in the provinces.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ca-ppsc-about', 'ca-dpp-act', 'ca-constitution-1867'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Canada is split between the federal government and the provinces, along two axes: the type of offence, and geography. Federally, the Public Prosecution Service of Canada is headed by the Director of Public Prosecutions, whom "the Governor in Council shall, on the recommendation of the Attorney General, appoint" under the Director of Public Prosecutions Act (s.3(1)).',
          claim: 'fact',
          sources: ['ca-dpp-act'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Who prosecutes what, and where',
          text: 'The split has a clean logic. By offence type, the PPSC prosecutes offences under federal statutes (drug offences, regulatory and other federal laws), while in the provinces the great majority of Criminal Code offences are prosecuted by the PROVINCIAL Crown services. By geography, the territories are the exception: the PPSC states that "In the territories, we are the only prosecutors and conduct all prosecutions of offences against the Criminal Code and all federal laws/acts." So in a province, Criminal Code prosecutions are provincial; in a territory, they are federal. This is why the territories\' prosecution is recorded on this site as national rather than their own.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states who prosecutes which offences and where. It does not describe the relationship between the Director of Public Prosecutions and the Attorney General of Canada, the independence of the provincial Crown services, or the exercise of prosecutorial discretion, which were not researched from primary sources.',
        },
      ],
      uncertainty: [
        'The precise allocation of concurrent prosecutions (for example Criminal Code counts joined to federal charges) is stated only in general terms.',
        'The provincial Crown prosecution services are named collectively; no individual provincial service has been researched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Canada',
      summary:
        'Who investigates and who charges — the police investigate, and in most provinces the police lay the charge, while British Columbia, Quebec and New Brunswick require Crown pre-charge approval.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ca-ppsc-about', 'ca-criminal-code', 'ca-constitution-1867'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Canada is conducted by the police — the RCMP where it is the police of jurisdiction, the provincial forces in Ontario and Quebec, and municipal forces — applying the one federal Criminal Code. Because policing is delivered in different ways across the country, the investigating force in a given place depends on who polices it, but the criminal law and procedure they apply are federal and uniform.',
          claim: 'fact',
          sources: ['ca-constitution-1867'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Who lays the charge',
          text: 'How a charge is brought differs by province. In most of Canada the police lay the charge — they decide to commence a prosecution — and the Crown then conducts it. But British Columbia, Quebec and New Brunswick use Crown pre-charge approval ("charge approval"): a Crown prosecutor reviews the police investigation and approves the charge before it is laid. Either way, the decision to prosecute and the conduct of the case belong to the Crown, not the investigator. This page describes that allocation; the framing is ours, grounded in the official descriptions of the two roles.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who charges. It does not describe investigative techniques, interrogation or detention practice, surveillance, or forensic methods, and nothing here would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The rules on arrest, detention, and judicial authorisation of investigative measures have not been researched from the Criminal Code and are not described.',
        "The pre-charge-approval provinces are named; the detail of each province's charge-approval standard has not been researched.",
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Canada',
      summary:
        'A system split by sentence length — federal penitentiaries for two years or more, provincial and territorial custody for less and for remand — with a scoped figure in which remand outnumbers sentenced custody.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ca-constitution-1867', 'ca-criminal-code', 'ca-statcan-corrections'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [CANADA_PT_CUSTODY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Canadian corrections are split between the two orders of government by the length of the sentence. The Constitution assigns federal penitentiaries to Parliament (s.91(28)) and provincial prisons to the provinces (s.92(6)); the Criminal Code draws the line: a person sentenced to "life", or to "a term of two years or more", "shall be sentenced to imprisonment in a penitentiary" (s.743.1). So sentences of two years or more are served in federal penitentiaries, run by the Correctional Service of Canada, and sentences of under two years — together with remand (pre-trial detention) — are the responsibility of the provinces and territories.',
          claim: 'fact',
          sources: ['ca-constitution-1867', 'ca-criminal-code'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Two years is the dividing line — and it matters for every figure',
          text: 'Because custody is split at the two-year mark, a Canadian custody figure is only meaningful with its side of the line attached. Federal counts (Correctional Service of Canada) and provincial/territorial counts (the provinces and territories) are collected separately and on different bases, and adding them together mixes two systems. A "prison population" figure for Canada is therefore never a single number without a qualifier.',
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Provincial and territorial custody, stated with its limits',
          text: 'Statistics Canada records that in fiscal year 2023/2024 the average daily count of adults in provincial and territorial custody was 25,349.8 — of whom 19,334.5 were on remand (not yet convicted or sentenced) and only 5,895.1 were serving a sentence. That remand outnumbers sentenced custody is the striking, well-sourced fact here. Three qualifications travel with the figure: it is provincial and territorial only, excluding the federal penitentiary population (two years or more), so it is not the total incarcerated in Canada; it is an average daily count over the year, not a single-day snapshot; and it aggregates all provinces and territories, describing none individually. It supports no comparison with any other country.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The federal penitentiary system, the Parole Board of Canada, individual provincial and territorial systems, youth corrections, community supervision and the monitoring of conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'No individual province, territory or federal figure is stated; the claim is a provincial/territorial aggregate.',
        'The federal penitentiary population, published on a different basis, is deliberately not combined with the provincial/territorial figure.',
        'Parole and community supervision are named but not described.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Canada',
      summary:
        'Every source used for the Canada pages, what each supports, how it was accessed, and that federal law is authoritative in both English and French.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'ca-constitution-1867',
        'ca-charter-1982',
        'ca-criminal-code',
        'ca-rcmp-act',
        'ca-rcmp-contract',
        'ca-ppsc-about',
        'ca-dpp-act',
        'ca-scc-act',
        'ca-statcan-corrections',
        'ca-sq',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Canada pages rest on ten sources: the Constitution Act 1867, the Charter, the Criminal Code, the RCMP Act, the Supreme Court Act and the Director of Public Prosecutions Act (all from the federal Justice Laws Website); the RCMP's contract-policing page; the Public Prosecution Service of Canada's About page; the Statistics Canada corrections table; and the Sûreté du Québec's official site for its name. Each was read or extracted and confirmed on 26 July 2026.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'English and French are equally authoritative',
          text: "The federal statutes cited here are enacted in English and French, and by the equal-authenticity rule (Charter s.18(1)) both versions have legal effect. These pages cite the English and record the French where it matters; neither is a translation of the other, and a point of law can rest on either. Quebec's institutions are named in French.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/canada-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Canada',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "Forensic science in Canada is delivered through the RCMP's national forensic laboratories and separate provincial forensic services in Ontario and Quebec, and has not been read to the standard required. Forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.",
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Canada',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs functions in Canada are divided among the Canada Border Services Agency, the RCMP (between ports of entry) and the immigration system, and could not be distinguished to the required standard here. It is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Canada',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Police oversight in Canada is deliberately non-uniform: the Civilian Review and Complaints Commission handles the RCMP, while each province with its own police has its own oversight and special-investigations bodies. Presenting a single national oversight picture would imply a uniformity that does not exist, and the provincial bodies were not researched to the required standard, so the module is deferred. The RCMP complaints commission is noted on the law-enforcement page for context.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Canada',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Canadian institutional history — Confederation, the development of the RCMP from the North-West Mounted Police, and above all the justice system's relationship with Indigenous peoples, including the residential-school system and its findings — cannot be written responsibly from general knowledge and requires careful, well-sourced treatment not undertaken here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Canada',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established here — the Constitution Act 1867, the Charter (1982), and the current Police Service Agreements (2012–2032) — are only a beginning; a responsible timeline needs primary sources for each entry, which were not gathered.',
    },
  ],
};
