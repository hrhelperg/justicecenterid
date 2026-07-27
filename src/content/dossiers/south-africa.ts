import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The South Africa dossier — a quasi-federal state under a supreme constitution, with justice
 * entirely national (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the 1996 Constitution (gov.za chapters and
 * schedules), the IPID Act, the NPA's account of IDAC, and the World Prison Brief; independently
 * re-verified in an adversarial pass (the constitutional articles and the World Prison Brief figures
 * confirmed verbatim). Corrections from verification applied: an unattested nickname dropped, and the
 * active Madlanga-Commission personnel matters left out as unresolved and non-structural.
 *
 * The model result: despite nine provinces, all four justice functions are national — no province
 * runs courts, prosecution or prisons — so one country record, no sub-national record (the opposite
 * of Mexico, Argentina and India). Distinctive: constitutional supremacy (courts can strike down
 * statutes, the opposite of New Zealand), a Constitutional Court that is the apex for all matters,
 * and an unusually rich oversight architecture.
 */
const ZA_PRISON_DENSITY: RestrictedClaim = {
  id: 'za-prison-density-2026',
  category: 'detention-capacity',
  statement:
    'On 26 February 2026, South African prisons held 168,672 people including remand detainees, against an official capacity of 107,067 places — an occupancy level of 157.5%, that is, well above capacity.',
  claimType: 'fact',
  sources: ['wpb-south-africa'],
  sourceScope:
    'World Prison Brief (ICPR), from the Minister of Correctional Services: total prison population 168,672 including remand detainees at 26 February 2026; official capacity 107,067 at the same date; occupancy level 157.5% at 26 February 2026. Population and capacity carry the same reference date.',
  jurisdiction: 'ZA',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2026-02-26',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the Department of Correctional Services), at one reference date. An occupancy of 157.5% means the system as a whole held about half again as many people as its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. About 37% of those held were remand (pre-trial) detainees. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const SOUTH_AFRICA: CountryDossier = {
  countryCode: 'ZA',
  slug: 'south-africa',
  name: 'South Africa',
  officialName: 'the Republic of South Africa',
  independentBodyNoun: 'a South African government body',
  summary:
    'South Africa is a quasi-federal state under a supreme constitution — its courts may strike down laws that conflict with the Constitution, the opposite of parliamentary sovereignty. Despite its nine provinces, all four justice functions are national: a single national judiciary topped by the Constitutional Court, a single national prosecuting authority, one national police service, and one national prison service. It has an unusually rich set of oversight institutions.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['za'],
  sources: ['za-constitution', 'wpb-south-africa'],
  uncertainty: [
    'The permanent Investigating Directorate Against Corruption (IDAC) inside the NPA is described from the NPA and the 2024 amendment; commentary on whether it is sufficiently independent is contested and attributed, not stated as fact.',
    'Current leadership changes and the 2025–2026 judicial commission of inquiry into alleged police interference are not described — they are unresolved personnel and inquiry matters that do not change the institutional structure.',
    "The Judicial Inspectorate for Correctional Services and the IPID's detailed statutory mandate were not re-fetched line by line; the establishment of both bodies is established.",
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'South Africa is a quasi-federal state — one sovereign country with nine provinces — under a supreme Constitution (1996), and a mixed legal system (a Roman-Dutch civil-law base with English common-law procedure). The Constitution, not Parliament, is supreme: "This Constitution is the supreme law of the Republic; law or conduct inconsistent with it is invalid" (section 2), and the courts are "independent and subject only to the Constitution and the law" (section 165).',
      claim: 'fact',
      sources: ['za-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Provinces, but a national justice system',
      text: 'Despite its nine provinces, South Africa runs justice nationally. Courts, prosecution, prisons and criminal law appear in neither the concurrent (Schedule 4) nor the exclusive-provincial (Schedule 5) competence lists, so they fall to the national sphere; the only provincial justice-adjacent power is police oversight. This is the opposite of the federations elsewhere in this batch (Mexico, Argentina, India), where the states or provinces run their own courts, police and prisons — which is why South Africa needs no sub-national record.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions: a single judiciary topped by the Constitutional Court, a single national prosecuting authority, one national police service, and one national prison service — with an unusually rich set of oversight bodies over them.',
      claim: 'fact',
      sources: ['za-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of South Africa',
      summary:
        'A supreme constitution under which the courts may invalidate inconsistent law — a quasi-federal state whose justice functions are all national.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['za-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'South Africa is founded on the "supremacy of the constitution and the rule of law" (section 1), and the Constitution is the supreme law of the Republic, with any inconsistent law or conduct invalid (section 2). Judicial authority is vested in the courts, which are independent and subject only to the Constitution and the law (section 165). It is a quasi-federal state, but the provinces have no competence over the courts, prosecution or prisons.',
          claim: 'fact',
          sources: ['za-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Constitutional supremacy, not parliamentary sovereignty',
          text: "South Africa sits at the opposite pole from New Zealand on this site. Where New Zealand's Parliament is sovereign and its courts cannot strike down a statute, South Africa's Constitution is supreme and its courts can and do invalidate legislation inconsistent with it — the strongest form of constitutional review the site records.",
        },
      ],
      uncertainty: [
        'Constitutional articles are cited from the official gov.za text; the Constitution has multiple official languages, with English the working language of these national institutions.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in South Africa',
      summary:
        'A single national force, the South African Police Service, under the Minister of Police and the National Commissioner — with the provinces limited to oversight.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['za-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing is a single national function. The South African Police Service (SAPS) is one national service (section 205), for which a Cabinet member — the Minister of Police — determines national policing policy (section 206), and which the National Commissioner, appointed by the President, controls and manages (section 207). Provinces have no police force of their own: their role is limited to monitoring police conduct, overseeing effectiveness and liaising with the national Minister (section 206(3)).',
          claim: 'fact',
          sources: ['za-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'National command, provincial oversight',
          text: "The provinces oversee but do not command. Operational command runs from the National Commissioner down through provincial commissioners who act under the National Commissioner's control. So — unlike the federations in this batch — there is one police force, not one per province, and the provincial role is accountability rather than command.",
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the force's national structure and command line. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        'The internal structure of SAPS was not researched beyond the constitutional command line.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in South Africa',
      summary:
        'A single national hierarchy topped by the Constitutional Court, which has been the highest court for all matters since 2013.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['za-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The courts are the Constitutional Court, the Supreme Court of Appeal, the High Court of South Africa and the Magistrates\' Courts (section 166). At the apex is the Constitutional Court (a Chief Justice, a Deputy Chief Justice and nine other judges), which the Seventeenth Amendment of 2012 made "the highest court of the Republic" for all matters — constitutional and otherwise — with the Supreme Court of Appeal below it.',
          claim: 'fact',
          sources: ['za-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'An apex constitutional court that can strike down statutes',
          text: 'Because the Constitution is supreme, the courts may declare legislation invalid for inconsistency with it — and certain rulings (for instance on the constitutionality of an Act of Parliament) are reserved to, or must be confirmed by, the Constitutional Court. This is an apex-court model of review: not the diffuse, no-strike-down model of New Zealand, nor a separate constitutional court outside the ordinary hierarchy, but a single supreme court that is also the constitutional apex for everything.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, and the specialised courts established by statute, were not set out beyond the constitutional hierarchy and the apex.',
        },
      ],
      uncertainty: [
        'The court hierarchy is cited from the Constitution; the Superior Courts Act was not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in South Africa',
      summary:
        "A single national prosecuting authority (the NPA), operationally independent but under the Justice Minister's final responsibility, with an in-house corruption directorate.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['za-constitution', 'za-npa-idac'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution is conducted by a "single national prosecuting authority" (section 179) — the National Prosecuting Authority (NPA) — headed by the National Director of Public Prosecutions, appointed by the President. The NPA has the power to institute criminal proceedings on behalf of the State, and national legislation must ensure it exercises its functions "without fear, favour or prejudice"; at the same time, "the Cabinet member responsible for the administration of justice must exercise final responsibility" over it (section 179).',
          claim: 'fact',
          sources: ['za-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independent decisions, ministerial final responsibility',
          text: 'The NPA is a single national authority, not part of the judiciary. Its design pairs operational independence in prosecutorial decisions with the ultimate political responsibility of the Justice Minister — a middle position between a fully autonomous prosecution and one directed by a minister. Since 2024 the NPA also houses a permanent Investigating Directorate Against Corruption with its own investigators for serious corruption; whether that directorate is sufficiently independent is a contested question, recorded here by attribution rather than as a verdict.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The current National Director is not named, and the internal structure of the NPA and its directorates was not researched.',
        },
      ],
      uncertainty: [
        'The independence of the corruption directorate (IDAC) is contested; that debate is attributed to its sources.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in South Africa',
      summary:
        'The police investigate; the prosecuting authority decides whether to prosecute — the common-law division, with a national corruption directorate inside the prosecution.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['za-constitution', 'za-npa-idac'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in South Africa follows the common-law division of labour: the South African Police Service investigates, and the National Prosecuting Authority decides whether to prosecute and conducts the prosecution (section 179). The prosecution does not run general policing. The one investigative exception is the Investigating Directorate Against Corruption inside the NPA, which has its own investigators for serious corruption cases.',
          claim: 'fact',
          sources: ['za-constitution', 'za-npa-idac'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who prosecutes. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        "The corruption directorate's own investigative powers are described in general terms from the NPA account.",
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in South Africa',
      summary:
        'A national Department of Correctional Services — and one of the most overcrowded prison systems on this site.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['wpb-south-africa'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [ZA_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in South Africa are run nationally by the Department of Correctional Services. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['wpb-south-africa'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Severe overcrowding, stated with its limits',
          text: 'The World Prison Brief records that on 26 February 2026 South African prisons held 168,672 people including remand detainees, against an official capacity of 107,067 — an occupancy of 157.5%, well above capacity, with about 37% of those held being remand (pre-trial) detainees. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national occupancy does not establish the position of any individual prison; and because the World Prison Brief compiles national figures collected under differing definitions, these levels are not reliably comparable between countries.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons, the high remand share in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The administering department is confirmed on the World Prison Brief page; the Correctional Services Act was not read in full.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in South Africa',
      summary:
        'A constitutional ombudsman and human-rights commission, a Judicial Service Commission, an independent police-investigation directorate, and a judicial inspectorate for prisons.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['za-constitution', 'za-ipid'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'An unusually complete oversight architecture',
          text: 'South Africa has a fuller set of oversight bodies than most systems on this site — a distinctive feature in its own right, and the constitutional counterweight to the strong national institutions above.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Public Protector and Human Rights Commission (Chapter 9 institutions)',
              description:
                'The Public Protector is the national ombudsman (a non-renewable seven-year term), investigating improper conduct in state affairs; the South African Human Rights Commission is the national human-rights body. Both are Chapter 9 "state institutions supporting constitutional democracy" (section 181), independent and "subject only to the Constitution and the law".',
            },
            {
              term: 'Judicial Service Commission (JSC)',
              description:
                'The constitutional body (section 178) that handles judicial appointments and complaints, chaired by the Chief Justice and including senior judges, the Justice Minister, legal practitioners and members of Parliament.',
            },
            {
              term: 'Independent Police Investigative Directorate (IPID)',
              description:
                'The independent body (IPID Act 1 of 2011) that investigates serious matters involving the police — deaths in custody or from police action, the discharge of official firearms, and torture, assault or corruption by police.',
            },
            {
              term: 'Judicial Inspectorate for Correctional Services (JICS)',
              description:
                'The independent inspectorate of prisons, headed by an Inspecting Judge, which inspects correctional centres and reports on conditions of detention.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the oversight bodies and their basis. It does not assess how effective any of them is, and the JICS and the detailed IPID mandate were not re-fetched line by line.',
        },
      ],
      uncertainty: [
        'The Chapter 9 institutions and the JSC are established from the Constitution; the IPID from its Act; the JICS statute was not re-fetched in detail.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for South Africa',
      summary:
        'Every source used for the South Africa pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['za-constitution', 'za-ipid', 'za-npa-idac', 'wpb-south-africa'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The South Africa pages rest on the 1996 Constitution (the official gov.za chapters and schedules), the Independent Police Investigative Directorate Act, the National Prosecuting Authority for the corruption directorate, and the World Prison Brief. Each was read or retrieved and confirmed on 27 July 2026 and independently re-checked; the constitutional articles and schedules and the World Prison Brief figures were confirmed verbatim.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'What is left out, and why',
          text: 'English is the working language of these national institutions. Two things are deliberately not described: an unattested nickname for the current National Director (the official appointment source does not carry it), and the 2025–2026 judicial commission of inquiry and the leadership suspensions around it — unresolved personnel and inquiry matters that do not change the institutional structure. Whether the corruption directorate (IDAC) is sufficiently independent is a contested question, recorded by attribution.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/south-africa-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in South Africa',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in South Africa (the SAPS Forensic Science Laboratory and the forensic-pathology services) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in South Africa',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in South Africa involve the Border Management Authority, the Department of Home Affairs and the revenue service, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of South Africa',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "South Africa's institutional history — the transition from apartheid, the 1996 Constitution and its founding of constitutional supremacy, and the 2013 elevation of the Constitutional Court to the apex for all matters — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for South Africa',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1996 Constitution, the 2013 Seventeenth Amendment, the 2012 IPID Act and the 2024 permanent corruption directorate — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
