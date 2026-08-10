import type { InstitutionType } from './types';

/**
 * Institution *types*, not named agencies.
 *
 * `presenceNote` is required on every entry, because the single most useful thing this
 * registry can tell a reader is where a type does not exist and where a familiar name means
 * something else entirely.
 *
 * ---------------------------------------------------------------------------
 * WAVE 2: WHICH RECORDS BECOME PAGES
 * ---------------------------------------------------------------------------
 * Until Wave 2 every record rendered as a summary on the /institutions hub and none had a
 * route. A hub summary and a canonical page make different claims: the page asserts that
 * this platform has researched the subject, and it carries its own URL, sitemap entry and
 * structured data.
 *
 * `review` is therefore what decides. A record marked `fact-checked` is routed at
 * /institutions/{slug}; a record marked `editorial-review` stays on the hub only. That is
 * not a formality — `validateInstitutionPublication` checks the substance behind it, and
 * the gate test asserts that every routed record satisfies it, so marking a record
 * fact-checked without doing the work breaks the build rather than publishing a page.
 *
 * TWO RECORDS ARE DELIBERATELY HUB-ONLY. `border-and-customs-authority` and `coast-guard`
 * remain at `editorial-review` because the source registry contains **no** border, customs,
 * coast-guard or maritime-enforcement source at all — a fact established by searching it,
 * not assumed. Their current text is a reasonable summary, but a canonical page resting on
 * a general UNODC landing page would be exactly the failure the Wave 2 baseline audit
 * identified: a citation that exists and does not support the claim at the scope asserted.
 * They are published summaries, not researched pages, and the difference is now visible in
 * the data.
 */
export const INSTITUTION_TYPES: readonly InstitutionType[] = [
  {
    slug: 'municipal-police',
    title: 'Municipal police',
    shortTitle: 'Municipal police',
    question: 'What is a municipal police force, and who does it answer to?',
    summary:
      'A police service established by and accountable to a city or local authority, with jurisdiction over that area.',
    section: 'law-enforcement',
    purpose:
      'Municipal policing exists because some policing problems are irreducibly local. Rubbish, noise, markets, parking, licensed premises and neighbourhood disorder are matters a national force has little reason to prioritise and a local authority has every reason to. Placing a force under local control ties those decisions to the body that answers to the people affected by them.',
    distinguishingFeatures: [
      'Jurisdiction defined by local-authority boundaries',
      'Accountability arrangements that run to local government or a local body',
      'Funding wholly or partly from local sources',
    ],
    typicalMandate: [
      'Response, public order, and local crime',
      'Local regulatory enforcement, which in some countries is the larger part of the role',
      'Community engagement and problem-solving with other local services',
    ],
    commonConfusions: [
      'With national police operating locally, which is a different accountability structure',
      'With municipal enforcement officers who hold regulatory powers but are not police',
    ],
    governanceNote:
      'Authority normally runs to an elected local official or council rather than to a ministry, and the powers available are frequently narrower than those of the national force operating in the same streets. France states this division explicitly: municipal police agents act under the authority of the mayor, on tasks within the mayor’s competence relating to prevention and surveillance of public order, tranquillity, security and public health — and the provision opens by preserving the general competence of the national police, so the municipal role is defined as an addition rather than a replacement.',
    accountabilityNote:
      'Local accountability is a genuine strength and a genuine weakness of the same design. Decisions sit close to the people affected, and the reviewing body is frequently the same authority that funds and directs the force. Where an independent complaints body exists it may cover municipal forces, national forces, or both, and a complainant cannot assume the route is the same.',
    presenceNote:
      'Common in countries with strong municipal traditions and largely absent in countries with centralised policing. Where both municipal and national police exist, the division of responsibility between them is set nationally and varies.',
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'Article L511-1 of the Code de la sécurité intérieure places municipal police agents under the mayor’s authority for prevention and surveillance of public order, tranquillity, security and public health — expressly without prejudice to the general competence of the national police. The municipal tier is an addition to national policing, not a local substitute for it.',
      },
      {
        countrySlug: 'spain',
        note: 'Organic Law 2/1986 structures Spanish policing in three tiers — state security forces, the police of the autonomous communities, and local police — so a Spanish city force sits in a system where a regional force may also operate, which is a materially different arrangement from a two-tier state.',
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: ['national-police', 'gendarmerie'],
    temporalScope: 'current',
    sources: ['fr-csi-l511-1', 'es-lofcs', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'national-police',
    title: 'National police service',
    shortTitle: 'National police',
    question:
      'What is a national police service, and how does it differ from a federal agency?',
    summary:
      'A single police organisation with jurisdiction across a whole country, accountable to national government.',
    section: 'law-enforcement',
    purpose:
      'A national service answers a problem local forces cannot solve on their own: consistency. One organisation means one set of standards, one training pipeline, one command structure, and the same powers in every part of the territory — at the cost of distance between the people setting priorities and the places those priorities land.',
    distinguishingFeatures: [
      'Nationwide jurisdiction under a single command structure',
      'Accountability to a national ministry or an equivalent national body',
      'Consistent standards, training, and powers across the territory',
    ],
    typicalMandate: [
      'The full range of policing functions across the country',
      'Coordination of national capabilities such as major investigation and specialist units',
    ],
    commonConfusions: [
      'With federal agencies, which have jurisdiction over specified offences rather than general policing',
      'With gendarmeries, which are national in reach but of military status',
    ],
    governanceNote:
      'The interesting question is never whether the service is national but what stands between it and the government of the day. Arrangements range from direct ministerial control to a buffer body interposed deliberately. Japan is the clearest example of the second: the National Public Safety Commission supervises the National Police Agency, so national coordination is exercised through a commission rather than by a minister directly.',
    accountabilityNote:
      'A single national service concentrates both capability and risk: one set of standards means a failure of standards is also national. Countries that centralise policing therefore tend to invest in national inspection and complaint bodies, and the reach of those bodies — whether they cover every force in the country or only the national one — is the question worth asking of any specific system.',
    presenceNote:
      'Present in many unitary states. In federal states the equivalent function is normally divided between state or provincial forces and federal agencies with limited subject-matter jurisdiction.',
    countryExamples: [
      {
        countrySlug: 'japan',
        note: 'Japan shows that "national" describes the framework rather than the delivery. The National Public Safety Commission and the National Police Agency constitute the national organisation and the Commission supervises the Agency, while operational policing is administered at prefectural level — national standards, local execution.',
      },
      {
        countrySlug: 'spain',
        note: 'Spain has two national forces rather than one, alongside autonomous-community and local police under Organic Law 2/1986 — a reminder that "national police service" in the singular is not a safe assumption even within a single unitary state.',
      },
    ],
    relatedProfessions: ['patrol-officer', 'detective'],
    relatedInstitutions: ['municipal-police', 'gendarmerie', 'federal-investigative-agency'],
    temporalScope: 'current',
    sources: ['jp-npa-police-of-japan-2020', 'es-lofcs', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'gendarmerie',
    title: 'Gendarmerie',
    shortTitle: 'Gendarmerie',
    question: 'What is a gendarmerie, and is it a military or a police force?',
    summary:
      'A police force with military status performing ordinary civilian policing, usually alongside a separate civilian police service.',
    section: 'law-enforcement',
    purpose:
      'The gendarmerie model developed where states needed policing across dispersed rural territory that municipal forces could not cover and were willing to use a military-status body to do it. What makes it durable is not the military status itself but the combination: a force organised and disciplined as a military body, doing ordinary civilian police work under ordinary law.',
    distinguishingFeatures: [
      'Military status affecting the chain of command, discipline, and conditions of service',
      'Ordinary civilian policing duties, typically with a rural or nationwide remit',
      'A separate institutional history from municipal policing',
    ],
    typicalMandate: [
      'General policing in areas allocated to it, frequently rural and inter-urban',
      'Public order and certain national security-adjacent functions',
    ],
    commonConfusions: [
      'With military police, which police the armed forces rather than the public',
      'With paramilitary units inside a civilian police service, which are not of military status',
    ],
    governanceNote:
      'Military status is a statement about status, not about mission, and French law states both at once: Article L3211-3 of the Code de la défense defines the gendarmerie nationale as "une force armée instituée pour veiller à l’exécution des lois" — an armed force instituted to ensure the execution of the laws. A body can be constitutionally armed and functionally civilian, and which ministry it answers to for which purpose is a separate question again, answered differently by different states.',
    accountabilityNote:
      'Military status changes the disciplinary route without removing the ordinary ones. Officers remain subject to the criminal law and to the courts that supervise police action, while internal discipline may run through a military chain. That dual character is the single most useful thing to establish about any specific gendarmerie, because it determines which complaint route applies.',
    presenceNote:
      'Present in a number of countries and entirely absent from others. Where it exists, the division of territory or function between it and the civilian police is set nationally. It is not a general category into which any armed police force can be placed.',
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'The Code de la défense defines the gendarmerie nationale as an armed force instituted to ensure the execution of the laws, with military missions executed throughout the national territory — the clearest statutory statement anywhere that military status and civilian policing are not alternatives.',
      },
      {
        countrySlug: 'spain',
        note: 'Spain names two national security forces in Organic Law 2/1986, one of which is of military character, showing the model operating in a state whose overall police architecture — with autonomous-community forces as a third tier — is quite unlike France’s.',
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: ['national-police', 'municipal-police'],
    uncertainty: [
      'This page describes a recurring institutional pattern. It does not establish that gendarmeries in different countries share powers, command arrangements or oversight — the French and Spanish forces cited here differ from one another, and neither is a template for the others.',
    ],
    temporalScope: 'current',
    sources: ['fr-code-defense-l3211-3', 'es-lofcs', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'federal-investigative-agency',
    title: 'Federal or national investigative agency',
    shortTitle: 'Federal investigative agency',
    question: 'What is a federal investigative agency, and does it outrank local police?',
    summary:
      'A body with jurisdiction over specified categories of offence across a whole country, rather than general policing of a territory.',
    section: 'law-enforcement',
    purpose:
      'These agencies exist because some offences do not respect internal boundaries. Where policing is organised territorially, an offence crossing state or provincial lines belongs to everyone and therefore to no one. A body defined by subject matter rather than territory closes that gap — and is deliberately given a narrow subject list, because a federal body with general policing jurisdiction would displace the territorial forces rather than complete them.',
    distinguishingFeatures: [
      'Jurisdiction defined by subject matter rather than by territory',
      'Typically investigative rather than responsive; rarely the first point of public contact',
      'Frequently handles offences crossing internal borders or involving national institutions',
    ],
    typicalMandate: [
      'Serious and organised crime, financial crime, corruption, or offences against national institutions, depending on the country',
      'Coordination between territorial forces where an offence crosses their boundaries',
    ],
    commonConfusions: [
      'That such agencies outrank local police. They generally have different jurisdiction rather than superior authority.',
      'With intelligence services, which in most systems have no policing powers',
    ],
    governanceNote:
      'Authority is conferred by statute and bounded by it. In the United States, 28 U.S.C. § 533 empowers the Attorney General to appoint officials to detect and prosecute crimes against the United States — federal investigative authority tied to federal offences, not to a general police power. The pattern recurs: the agency can act where the statute reaches, and the statute is the limit.',
    accountabilityNote:
      'Because these agencies investigate rather than patrol, most of what they do is reviewed by prosecutors and courts rather than by a complaints body responding to street encounters. That makes judicial supervision and disclosure obligations the primary accountability mechanism, and it makes the scope of the enabling statute the primary constraint.',
    presenceNote:
      'Present in most federal states and in many unitary ones. The list of offences within its jurisdiction is defined by national law and is not comparable between countries without checking each.',
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'Federal investigative authority rests on statute — 28 U.S.C. § 533 — and sits alongside, not above, thousands of separate state and local agencies. It is the clearest case of subject-matter jurisdiction coexisting with territorial policing rather than superseding it.',
      },
      {
        countrySlug: 'brazil',
        note: 'Brazil sets the federal police’s competences in the 1988 Constitution itself rather than leaving them to ordinary statute, which places the boundary between federal and state policing at constitutional level.',
      },
      {
        countrySlug: 'switzerland',
        note: 'Switzerland shows the model in a strongly decentralised state, where cantonal forces do the general policing and the federal office holds a defined and comparatively narrow remit.',
      },
    ],
    relatedProfessions: ['detective'],
    relatedInstitutions: ['national-police'],
    temporalScope: 'current',
    sources: ['us-fbi-28usc533', 'br-pf-competencias', 'ch-fedpol', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'transport-police',
    title: 'Transport police',
    shortTitle: 'Transport police',
    question: 'What is a transport police force, and why does it exist separately?',
    summary:
      'A police force whose jurisdiction follows a transport network — railways, metros, ports or waterways — rather than a geographic territory.',
    section: 'law-enforcement',
    purpose:
      'A railway crosses every local police boundary on its route, and an incident on a moving train belongs to no single force. A body whose jurisdiction follows the network rather than the map solves a coordination problem that territorial policing creates. The same logic explains why such forces historically emerged from the operators themselves rather than from the state.',
    distinguishingFeatures: [
      'Jurisdiction defined by infrastructure and by the network, not by local-authority boundaries',
      'Historically often established by transport operators before being consolidated into public bodies',
      'Specialist knowledge of an operating environment — track, tunnels, rolling stock, stations — that general forces do not hold',
    ],
    typicalMandate: [
      'Crime and public order on the network and at its stations',
      'Safety of passengers and staff, and of people trespassing on the infrastructure',
      'Disruption, trespass and incidents that stop services',
    ],
    commonConfusions: [
      'With private security employed by an operator, which holds no police powers',
      'With the territorial force covering the ground the network crosses, which retains its own jurisdiction',
      'With early railway employees called "policemen", who were not police at all — see the historical note',
    ],
    governanceNote:
      'Governance frequently follows the funding rather than the territory: where a force polices a network, the body that owns or regulates the network tends to be the body it answers to. That is a different arrangement from either municipal or national policing, and it is why the complaint route for an incident on a train is often not the one a passenger expects.',
    accountabilityNote:
      'Passengers routinely cannot tell which force attended an incident, and that matters: the oversight body covering a territorial force may have no jurisdiction over a transport force operating in the same station. Establishing which body acted is the first step in any complaint, and it is harder here than almost anywhere else in policing.',
    historyNote:
      'British transport policing has an unusually well-documented institutional history. A police force specifically for transport began with the railways, and the first railway police force in Britain was formed in 1830. Before nationalisation each of the four largest railway companies maintained its own force under a Chief of Police; the British Transport Commission Police was created in 1949, incorporating those forces together with several minor canal and dock forces, and the London Transport Police was absorbed into it in 1958.',
    presenceNote:
      'Present in countries with substantial rail networks, in forms ranging from a national transport force to units inside a general police service to operator-employed security with no police powers. The name does not tell you which, and the difference is the difference between a constable and an employee.',
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'France organises policing by authority and territory — municipal agents under the mayor, the national police holding general competence — rather than by network. That is a different organising principle from the one described here, and it is why the British pattern of consolidating network forces into a single national body should not be read as the general case.',
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: ['national-police', 'municipal-police'],
    uncertainty: [
      'The dated institutional history on this page is British, drawn from The National Archives, and is presented as one documented national case rather than as the history of transport policing generally. We have not established comparable dated histories for other countries.',
    ],
    temporalScope: 'mixed',
    historicalPeriod: '1826 to present (British institutional history)',
    sources: ['tna-police-records', 'fr-csi-l511-1', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'prosecution-service',
    title: 'Prosecution service',
    shortTitle: 'Prosecution service',
    question: 'What does a prosecution service do, and why is it separate from the police?',
    summary:
      'The body responsible for deciding whether criminal cases are brought and for presenting them in court.',
    section: 'prosecution',
    purpose:
      'Separating the decision to charge from the body that investigated introduces a second judgement into a process that would otherwise be closed. The investigator has spent months forming a view; the prosecutor asks whether the evidence would actually survive a trial. That separation is a safeguard against the investigation marking its own work.',
    distinguishingFeatures: [
      'Holds the charging decision, separately from the body that investigated',
      'Owes duties to the court and to the accused, not only to its own case',
      'Operates against published charging standards in most systems',
    ],
    typicalMandate: [
      'Applying evidential and public-interest tests to charging decisions',
      'Disclosure to the defence',
      'Presenting cases and, in many systems, making submissions on sentence',
    ],
    commonConfusions: [
      'With the police, from whom it is separate in most systems',
      'With the judiciary, though in several countries prosecutors are part of a judicial career track',
      'Between country-specific titles that do not denote the same role',
    ],
    governanceNote:
      'Where the service sits determines how insulated it is from the executive, and placements range from constitutional independence, through an office inside a ministry, to a branch of the judicial career. The United Nations Guidelines on the Role of Prosecutors set out the standards expected of the office — impartiality, protection of the public interest, respect for human dignity, and separation of prosecutorial from judicial functions — without prescribing any particular institutional placement.',
    accountabilityNote:
      'Prosecutors are accountable in an unusual way: much of the review happens inside the case itself. Disclosure obligations, the court’s supervision, and the possibility that a decision is tested on appeal do more day-to-day work than any external complaints body. Where a prosecutor can also direct an investigation, that supervisory power is itself part of policing accountability.',
    presenceNote:
      'Nearly universal as a function; its institutional position varies more than almost any other body. It may be constitutionally separate, part of a ministry, or part of the judiciary, and that placement determines how independent it is of the executive.',
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'French prosecutors are magistrats, part of the same professional body as judges but without the guarantee of irremovability that judges hold — a placement that makes the independence question concrete rather than abstract.',
      },
      {
        countrySlug: 'japan',
        note: 'Japan shows the same function inside a quite different architecture, which is why prosecutorial independence has to be assessed per system rather than assumed from the existence of a prosecution service.',
      },
    ],
    relatedProfessions: ['prosecutor', 'judge'],
    relatedInstitutions: ['national-police', 'federal-investigative-agency'],
    temporalScope: 'current',
    sources: [
      'un-prosecutors-guidelines',
      'unodc-cpcj',
      'fr-justice-parquet',
      'jp-moj-prosecutors',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'correctional-service',
    title: 'Correctional service',
    shortTitle: 'Correctional service',
    question: 'What does a correctional service do, and who inspects it?',
    summary:
      'The body responsible for operating places of detention and, in many systems, for supervising people serving sentences in the community.',
    section: 'corrections',
    purpose:
      'A society that authorises imprisonment has to operate it, and operating it safely and lawfully is a specialist task distinct from investigating or judging. The correctional service exists to carry out a decision a court has already made — which is precisely why it must not be the body that made it.',
    distinguishingFeatures: [
      'Operates closed institutions, which is why external inspection is a defining feature',
      'Acts after a court decision rather than before it',
      'Frequently combines custodial operation with community supervision',
    ],
    typicalMandate: [
      'Safe and lawful custody',
      'Regime, education, work, and health access',
      'Preparation for release and, in many systems, supervision afterwards',
    ],
    commonConfusions: [
      'With the police, who operate short-term detention for entirely different purposes',
      'With probation, which is a separate service in some countries and part of the same body in others',
    ],
    governanceNote:
      'Prisons are run by ministries, executive agencies, regional authorities or contracted providers depending on the country, and in federal states the answer frequently differs between levels of government within one state. The United Nations Standard Minimum Rules for the Treatment of Prisoners set the baseline expected of the function regardless of who operates it.',
    accountabilityNote:
      'Closed institutions are the one part of the justice system where the people affected cannot readily be seen or heard, which is why independent inspection here is a standing function rather than a response to complaints. Regular unannounced access by an external body is the mechanism the international standards treat as essential, and its presence or absence is the most informative single fact about any prison system.',
    presenceNote:
      'Universal as a function. Whether prisons are run by a ministry, an executive agency, a regional authority, or contracted providers varies, as does whether probation is inside the same organisation.',
    countryExamples: [
      {
        countrySlug: 'japan',
        note: 'Japan places corrections within the Ministry of Justice, an arrangement that keeps custody administratively close to the rest of the justice system rather than in a separate agency.',
      },
      {
        countrySlug: 'canada',
        note: 'Canada splits custody by sentence length between federal and provincial administrations, so "the correctional service" is not one body and the applicable rules depend on the sentence imposed.',
      },
    ],
    relatedProfessions: ['corrections-officer'],
    relatedInstitutions: ['prosecution-service'],
    temporalScope: 'current',
    sources: [
      'mandela-rules',
      'coe-space-i-2024',
      'jp-moj-corrections',
      'ca-statcan-corrections',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },

  /* ------------------------------------------------------------------------
     HUB-ONLY records: published summaries, deliberately not routed.

     The source registry contains no border, customs, coast-guard or maritime
     enforcement source of any kind — established by searching it. Until one
     exists, these remain summaries on /institutions rather than canonical
     pages, and `review: 'editorial-review'` is what keeps them there.
     ------------------------------------------------------------------------ */
  {
    slug: 'border-and-customs-authority',
    title: 'Border and customs authority',
    summary:
      'Bodies controlling the movement of people and of goods across a border — two distinct legal regimes, frequently exercised at the same location.',
    section: 'public-safety',
    distinguishingFeatures: [
      'Powers derived from immigration or customs law rather than from general police powers',
      'Jurisdiction defined by the border and by designated control points',
      'Frequently a separate complaints and oversight route from policing',
    ],
    typicalMandate: [
      'Immigration control: the entry, stay, and departure of people',
      'Customs: duties, prohibitions, and restrictions on goods',
    ],
    commonConfusions: [
      'That border control and customs are the same body. They are distinct functions and are often distinct organisations.',
      'That police oversight bodies cover them. They usually do not.',
    ],
    presenceNote:
      'The functions exist wherever there is a controlled border. Whether they sit in one body, two bodies, the police, or the armed forces differs by country.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'coast-guard',
    title: 'Coast guard',
    summary:
      'A maritime body whose status ranges from an armed military service to a civilian search-and-rescue or regulatory organisation.',
    section: 'public-safety',
    distinguishingFeatures: [
      'Maritime jurisdiction, defined by waters rather than by land territory',
      'Status varying from military to civilian, with correspondingly different powers and oversight',
    ],
    typicalMandate: [
      'Search and rescue',
      'Maritime safety and regulatory enforcement',
      'Law enforcement at sea, where the body holds such powers',
    ],
    commonConfusions: [
      'That the name denotes the same kind of organisation everywhere. It does not, and the difference between a military service and a civilian regulator is substantial.',
      'With navies, which have a different mandate even where the coast guard is of military status',
    ],
    presenceNote:
      'Present in most coastal states in some form. Landlocked states may have an equivalent inland-waterway body or none. The name is one of the clearest cases where the same term denotes materially different institutions.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
];

export const PUBLISHED_INSTITUTION_TYPES: readonly InstitutionType[] = INSTITUTION_TYPES.filter(
  (institution) => institution.status === 'published',
);

/**
 * The records that become canonical pages at /institutions/{slug}.
 *
 * `fact-checked` is the claim a canonical page makes on the reader's behalf, so it is what
 * earns a route. The gate test asserts every member here satisfies
 * `validateInstitutionPublication`, so this predicate cannot be widened without doing the
 * research that goes with it.
 */
export const ROUTED_INSTITUTION_TYPES: readonly InstitutionType[] =
  PUBLISHED_INSTITUTION_TYPES.filter((institution) => institution.review === 'fact-checked');

export function getInstitutionType(slug: string): InstitutionType | undefined {
  return ROUTED_INSTITUTION_TYPES.find((institution) => institution.slug === slug);
}

/** Canonical path for a routed institution type. */
export function institutionPath(institution: InstitutionType): string {
  return `/institutions/${institution.slug}`;
}
