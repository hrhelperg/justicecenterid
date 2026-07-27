import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Nigeria dossier — a federation whose police and prisons are federal, but whose courts,
 * prosecution and criminal law operate at both levels (Batch C, country 10 of 10).
 *
 * Research date: facts checked on 2026-07-27 against the Constitution of the Federal Republic of
 * Nigeria 1999 (as amended) — the full official PDF hosted by the National Human Rights Commission,
 * read verbatim including the Second Schedule legislative lists — the World Prison Brief, a 2004
 * Human Rights Watch report (for the dating of the northern Sharia penal codes), and the National
 * Assembly Library Trust Fund (for the status of the pending state-police bill); independently
 * re-verified in an adversarial pass, which confirmed every load-bearing constitutional quote, the
 * tier allocation, the prison figures and the twelve-state Sharia list exactly.
 *
 * The model result: Nigeria is a genuine federation, but a counter-intuitive one — the police and
 * prisons are constitutionally centralised at the federal level, while the states run their own
 * courts, prosecute state offences and legislate their own criminal law. Two illustrative state
 * records (Kano, Lagos) capture the inverse-federation split; the twelve northern Sharia-penal-code
 * states and the pending state-police reform are handled in prose by dated attribution.
 */
const NG_PRISON_DENSITY: RestrictedClaim = {
  id: 'ng-prison-density-2026',
  category: 'detention-capacity',
  statement:
    'On 22 June 2026, Nigerian prisons held 81,902 people including pre-trial detainees — a rate of about 34 per 100,000 of the national population, among the lowest imprisonment rates on this site. The most recent official capacity the source records is 65,035 places, dated 30 June 2025, against which the source reports an occupancy of 125.6% as of 30 June 2025 — above capacity — but the population figure is dated June 2026 while the capacity and occupancy are dated June 2025, so no single, same-dated occupancy is stated.',
  claimType: 'fact',
  sources: ['wpb-nigeria'],
  sourceScope:
    'World Prison Brief (ICPR) country page for Nigeria, from the national prison administration (the Nigerian Correctional Service): total prison population 81,902 including pre-trial detainees at 22 June 2026; rate 34 per 100,000 based on an estimated national population of 238.95 million at mid-2026 (UN figures); official capacity 65,035 dated 30 June 2025; occupancy level 125.6% dated 30 June 2025.',
  jurisdiction: 'NG',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2026-06-22',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the federal Nigerian Correctional Service), reported by the World Prison Brief. Two reference dates travel with these figures and must not be conflated: the population of 81,902 is dated 22 June 2026, whereas the capacity of 65,035 and the occupancy of 125.6% are dated 30 June 2025. The rate of 34 per 100,000 is low by international standards, but a low rate is not a claim about conditions — the same source shows the system above its stated capacity on the 2025 date. A national occupancy does not establish the position of any individual prison. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page.',
};

export const NIGERIA: CountryDossier = {
  countryCode: 'NG',
  slug: 'nigeria',
  name: 'Nigeria',
  officialName: 'the Federal Republic of Nigeria',
  independentBodyNoun: 'a Nigerian government body',
  summary:
    'Nigeria is a federation of 36 states under the 1999 Constitution — but a counter-intuitive one. Its police and prisons are centralised at the federal level (the Constitution bars any other police force), while its courts, prosecution and criminal law operate at both levels: the states run their own high courts, prosecute state offences, and legislate their own criminal codes — the common-law Criminal Code in the south, the Penal Code in the north, and Sharia penal codes in twelve northern states. The apex is a single federal Supreme Court.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['ng', 'ng-kn', 'ng-la'],
  sources: ['ng-constitution', 'wpb-nigeria'],
  uncertainty: [
    "The twelve northern states that adopted Sharia penal codes from 1999 to 2001 are stated by dated attribution to a 2004 Human Rights Watch report; the report's own assessments of that legislation's human-rights effects are contested and are not asserted here as fact.",
    'The Constitution (Alteration) (State Police) Bill is described only as a pending reform, by dated attribution to the National Assembly Library Trust Fund (26 June 2026); it was not law as of late July 2026, and whether its safeguards are sufficient is a contested question recorded by attribution, not as a verdict.',
    'The federal anti-corruption prosecutors (the EFCC and the ICPC), the Administration of Criminal Justice Act 2015, and the Nigerian Correctional Service Act 2019 are named from secondary sources; their establishing statutes were not re-fetched line by line, and the 2019 renaming is dated only to August 2019.',
    'The Public Complaints Commission (the statutory ombudsman) and the detailed membership of the police-oversight bodies are described at the level of the body and its function; their founding statutes were not re-fetched.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Nigeria is a federation — 36 states and the Federal Capital Territory (Abuja) — under the 1999 Constitution, with a mixed legal tradition of English common law, customary law and Islamic (Sharia) law. Legislative power is divided by the Second Schedule into an Exclusive Legislative List (matters for the Federation alone), a Concurrent List (both tiers), and residual matters, which fall to the states (section 4(7)).',
      claim: 'fact',
      sources: ['ng-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'A federation with federal police and prisons',
      text: 'Nigeria inverts the usual federal pattern. Its police and its prisons are constitutionally centralised at the federal level — the Constitution provides for a single Nigeria Police Force and bars any other, and lists "Prisons" as a matter for the Federation alone. But its courts, prosecution and criminal law operate at both levels: the states run their own high courts, their own attorneys-general prosecute state offences, and the states legislate their own criminal codes. So — unlike Mexico, Argentina, India or the United States, where the states or provinces run their own police and prisons — in Nigeria the sub-national tier does courts, prosecution and criminal law but not policing or corrections. Two illustrative state records (Kano and Lagos) capture that split.',
    },
    {
      kind: 'paragraph',
      text: 'The apex is a single federal Supreme Court, and constitutional questions are decided by the ordinary superior courts (there is no separate constitutional court). The chapters that follow set out policing, the courts, prosecution, investigations, corrections and oversight in turn.',
      claim: 'fact',
      sources: ['ng-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Nigeria',
      summary:
        'A federation whose police and prisons are federal, but whose courts, prosecution and criminal law run at both levels — with three substantive criminal-law traditions.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ng-constitution', 'ng-hrw-sharia'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Nigeria is a federal republic under the 1999 Constitution, which is the supreme law. The Second Schedule sets an Exclusive Legislative List for the Federation, a Concurrent List for both tiers, and leaves residual matters to the states (section 4(7)). Criminal law is not an item on the Exclusive List, so it is largely a state/residual matter: each state has its own substantive criminal code — the common-law Criminal Code in the southern states, and the Penal Code in the northern states.',
          claim: 'fact',
          sources: ['ng-constitution'],
        },
        {
          kind: 'paragraph',
          text: 'From 1999 to 2001, twelve northern states extended Sharia to criminal matters by adopting Sharia penal codes; a 2004 Human Rights Watch report records that "by 2002, twelve states had adopted some form of Shari\'a into their criminal legislation", with Zamfara the first. These codes apply principally to Muslims and coexist with the federal Constitution. Their content and application have been the subject of contested human-rights assessment, which this site records by attribution rather than stating as fact.',
          claim: 'fact',
          sources: ['ng-constitution', 'ng-hrw-sharia'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Three criminal-law traditions in one federation',
          text: 'The result is that Nigeria carries three substantive criminal-law traditions at once — the southern Criminal Code, the northern Penal Code, and the Sharia penal codes of twelve northern states — all under a single federal Constitution and a single apex court. The judiciary is unified administratively (appointments, discipline and funding run through the federal National Judicial Council), but the substantive law a court applies can differ from state to state.',
        },
      ],
      uncertainty: [
        "The Sharia-penal-code adoption and its dating are attributed to a 2004 Human Rights Watch report; the report's human-rights assessments are contested and not asserted here.",
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Nigeria',
      summary:
        'A single federal force, the Nigeria Police Force — with a constitutional bar on any other police force, and a pending reform that would change that.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ng-constitution', 'ng-naltf'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing is a federal function. The Constitution provides for "a police force for Nigeria, which shall be known as the Nigeria Police Force", and states that "no other police force shall be established for the Federation or any part thereof" (section 214(1)); "Police" is also a matter on the Exclusive Legislative List. There are currently no state police forces. The force is commanded by an Inspector-General of Police (section 215), with a Commissioner of Police heading each state contingent under the Inspector-General\'s authority.',
          claim: 'fact',
          sources: ['ng-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Federal command, and a limit on judicial review of directions',
          text: 'The President — or a Minister the President authorises — may give the Inspector-General lawful directions on the maintenance of public safety and public order (section 215(3)). A state Governor may give the state Commissioner lawful public-order directions, but the Commissioner may refer the matter to the President before complying, so ultimate control is federal. The Constitution adds that whether any such direction was given "shall not be inquired into in any court" (section 215(5)).',
        },
        {
          kind: 'paragraph',
          text: 'A change to this centralised arrangement is pending but not yet in force. According to the National Assembly Library Trust Fund (26 June 2026), a Constitution (Alteration) (State Police) Bill had been passed by both chambers of the National Assembly, but — in the Trust Fund\'s words — "to become law, the bill must now be ratified by at least 24 State Houses of Assembly before being transmitted to President Bola Tinubu for his assent". As of late July 2026 it was therefore not yet law; if enacted, it would end the single-force monopoly and allow state police services. Whether the bill\'s safeguards adequately guard against misuse is a contested question, recorded here by attribution to its proponents and critics rather than as a verdict.',
          claim: 'fact',
          sources: ['ng-naltf'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the force's national structure and command line, and a pending constitutional reform. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        'The state-police bill is described only as pending, by dated attribution; its final text, its prospects and the sufficiency of its safeguards are not assessed here.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Nigeria',
      summary:
        'A single integrated hierarchy topped by the federal Supreme Court, with state high courts and Sharia and customary courts of appeal below — and diffuse constitutional review.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ng-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The superior courts of record (section 6(5)) are, at the federal level, the Supreme Court, the Court of Appeal, the Federal High Court and the High Court of the Federal Capital Territory; and, at the state level, the State High Courts, the Sharia Courts of Appeal and the Customary Courts of Appeal. At the apex is the Supreme Court of Nigeria (section 230), whose determinations are final: "no appeal shall lie to any other body or person from any determination of the Supreme Court" (section 235). The Court of Appeal (section 237) hears appeals from the high courts and the state courts of appeal.',
          claim: 'fact',
          sources: ['ng-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'State courts, but a federally unified judiciary and diffuse review',
          text: 'The states genuinely run their own superior courts — a State High Court, a Sharia Court of Appeal (headed by a Grand Kadi, for Islamic personal law) and a Customary Court of Appeal — which is why courts are shared between the tiers rather than purely federal. But appointment, discipline and funding are unified under the federal National Judicial Council, and the apex is federal, so this is closer to an integrated national judiciary than to two separate court systems. Constitutional review is diffuse: any superior court of record can decide a constitutional question, with the Supreme Court the final word — there is no separate constitutional court.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: "The detailed jurisdiction of each court, the subordinate courts (magistrates', area, Sharia and customary courts created by state law), and the differences between individual states' court arrangements were not set out beyond the constitutional hierarchy and the apex.",
        },
      ],
      uncertainty: [
        "The court hierarchy is cited from the Constitution; the individual states' court statutes were not read.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Nigeria',
      summary:
        'A dual, executive prosecution — the Attorney-General of the Federation for federal offences and each State Attorney-General for state offences, both Cabinet ministers.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ng-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution is dual and sits inside the executive. The Attorney-General of the Federation is "the Chief Law Officer of the Federation and a Minister of the Government of the Federation" (section 150), with power to institute and undertake, take over, or discontinue criminal proceedings for federal offences (section 174). Each state mirrors this: a State Attorney-General, who is "the Chief Law Officer of the State and Commissioner for Justice" (section 195), holds the same powers for state offences (section 211).',
          claim: 'fact',
          sources: ['ng-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prosecution inside the executive, at two levels',
          text: "Unlike the constitutionally independent prosecuting offices elsewhere in this batch (Kenya's Director of Public Prosecutions, South Africa's single national authority), Nigeria's prosecutors are Cabinet ministers — the office is expressly political, and the only textual restraint is a duty to have regard to the public interest, the interest of justice and the need to prevent abuse of legal process. The structure is also dual: federal offences go to the Attorney-General of the Federation, state offences to the State Attorney-General, a two-level pattern under identical wording. Specialised federal bodies (the EFCC and the ICPC) additionally investigate and prosecute corruption and financial crime nationwide.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The current office-holders are not named; the internal structure of the federal and state ministries of justice, and the statutes governing the EFCC and the ICPC, were not researched in detail.',
        },
      ],
      uncertainty: [
        'The EFCC and ICPC are named from secondary sources; their establishing Acts were not re-fetched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Nigeria',
      summary:
        'The federal police investigate; the federal or state attorney-general decides whether to prosecute — with specialised federal agencies for corruption and financial crime.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ng-constitution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation follows the common-law division of labour, with a federal twist: the Nigeria Police Force — a federal force — investigates, while the decision to prosecute rests with the Attorney-General of the Federation for federal offences or the State Attorney-General for state offences (sections 174 and 211), either of whom may take over or discontinue a prosecution. For corruption and financial crime, the specialised federal agencies (the EFCC and the ICPC) both investigate and prosecute nationwide.',
          claim: 'fact',
          sources: ['ng-constitution'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who prosecutes. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        "The investigate/prosecute division is stated from the Constitution; the Administration of Criminal Justice Act 2015 and the anti-corruption agencies' procedures were not researched in detail.",
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Nigeria',
      summary:
        'A federal Nigerian Correctional Service — with one of the lower imprisonment rates on this site, but a system above its stated capacity.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['wpb-nigeria'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [NG_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Nigeria are run federally by the Nigerian Correctional Service (renamed from the Nigerian Prisons Service by a 2019 Act, which added a non-custodial arm); "Prisons" is a matter on the Exclusive Legislative List, so there are no state prison services. Because the system is federal, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['wpb-nigeria'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A low rate, and an over-capacity system, stated with their dates',
          text: 'The World Prison Brief records a prison population of 81,902 including pre-trial detainees at 22 June 2026 — a rate of about 34 per 100,000, among the lowest imprisonment rates on this site — and, separately, an official capacity of 65,035 with an occupancy of 125.6%, both dated 30 June 2025. Those figures carry different dates: the population is a June 2026 figure, the capacity and occupancy June 2025. A low imprisonment rate is not a statement about conditions; on the 2025 date the system held more people than its stated capacity. As always, a national occupancy does not establish the position of any individual prison, and these levels are not reliably comparable between countries.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons, the high pre-trial-detention share, the non-custodial regime, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The administering service and the figures are from the World Prison Brief; the Nigerian Correctional Service Act 2019 was not read in full and its renaming is dated only to August 2019.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Nigeria',
      summary:
        'A federal judicial council, a quasi-judicial human-rights commission, a statutory ombudsman, and police oversight split across two constitutional bodies.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ng-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Oversight built around a federal judicial council',
          text: "Nigeria's oversight architecture is anchored on the National Judicial Council, the federal body that unifies an otherwise two-tier judiciary, and is filled out by a human-rights commission, an ombudsman, and two constitutional police-oversight bodies. There is no single dedicated police-complaints ombudsman — that role is split.",
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'National Judicial Council (NJC)',
              description:
                'The federal constitutional body (section 153 and the Third Schedule) that recommends the appointment and removal of, and exercises disciplinary control over, federal and state judicial officers, and controls and disburses judiciary funds (section 81(3)) — chaired by the Chief Justice of Nigeria. It is what makes the state and federal courts one nationally unified judiciary.',
            },
            {
              term: 'National Human Rights Commission (NHRC)',
              description:
                'The national human-rights body, established by the National Human Rights Commission Act 1995 and given quasi-judicial powers by a later amendment — to summon and take evidence, award enforceable compensation, and inspect places of detention.',
            },
            {
              term: 'Public Complaints Commission (PCC)',
              description:
                "Nigeria's statutory ombudsman for administrative complaints (maladministration) against public bodies. It is a standing federal body; its founding statute was not re-fetched for this pilot, so it is described here at the level of the body and its function.",
            },
            {
              term: 'Police Service Commission and Nigeria Police Council',
              description:
                'Police oversight is split between two constitutional bodies (section 153 and the Third Schedule): the Police Service Commission, which appoints, promotes and disciplines police officers other than the Inspector-General; and the Nigeria Police Council, chaired by the President, for policy and general supervision. There is no separate independent police-complaints board.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the oversight bodies and their basis. It does not assess how effective any of them is, and the Public Complaints Commission and the detailed membership of the police-oversight bodies were not re-fetched line by line.',
        },
      ],
      uncertainty: [
        'The NJC and the police-oversight bodies are established from the Constitution; the NHRC from its Act (amended after 1995, assented in 2011); the Public Complaints Commission statute was not re-fetched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Nigeria',
      summary:
        'Every source used for the Nigeria pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ng-constitution', 'ng-hrw-sharia', 'ng-naltf', 'wpb-nigeria'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Nigeria pages rest on the Constitution of the Federal Republic of Nigeria 1999 (as amended), retrieved as the full official PDF hosted by the National Human Rights Commission and read verbatim including the Second Schedule legislative lists; the World Prison Brief; a 2004 Human Rights Watch report (for the dating of the northern Sharia penal codes); and the National Assembly Library Trust Fund (for the status of the pending state-police bill). Each was read or retrieved and confirmed on 27 July 2026 and independently re-checked; the constitutional quotes, the tier allocation, the prison figures and the twelve-state Sharia list were confirmed verbatim.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'What is attributed, and what is left out',
          text: "English is the language of the Constitution and these federal institutions. Two contested or fast-moving matters are stated only by dated attribution, not as settled fact: the twelve northern states' Sharia penal codes (attributed to the 2004 Human Rights Watch report, whose human-rights assessments are not adopted here), and the pending Constitution (Alteration) (State Police) Bill (attributed to the National Assembly Library Trust Fund, 26 June 2026, and not yet law). Current office-holders are not named, and the anti-corruption agencies, the 2015 criminal-procedure Act and the 2019 correctional-service Act are named from secondary sources without re-fetching their statutes.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/nigeria-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Nigeria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Nigeria (the police forensic capabilities and the forensic-pathology services) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Nigeria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Nigeria involve the Immigration Service, the Customs Service and the security agencies, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Nigeria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Nigeria's institutional history — the succession of constitutions, the federal structure and its centralised police, and the 1999–2001 extension of Sharia to criminal law in the north — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Nigeria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1999 Constitution, the 1999–2001 Sharia penal codes, the 2015 criminal-procedure Act, the 2019 correctional-service Act and the pending 2026 state-police bill — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
