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
     Wave 3 — the sub-national policing tier.

     Wave 2 deferred this whole family, and it was the largest genuine gap in the
     institution taxonomy. It is also the family where false universalisation does
     the most damage, because English supplies one word for arrangements that are
     constitutionally unalike: a US state police force, a Brazilian Polícia Civil,
     a Japanese prefectural force and a Catalan force answer to different orders of
     government under different constitutional theories.

     Every record here therefore carries `counterExamples` — countries at the same
     geographic level that do NOT own the function — because the useful thing to
     know about sub-national policing is that having sub-national government does
     not imply having sub-national police.
     ------------------------------------------------------------------------ */
  {
    slug: 'state-police',
    title: 'State police',
    shortTitle: 'State police',
    question: 'What is a state police force, and does every federation have one?',
    summary:
      'A police force established by and accountable to a constituent state of a federation, rather than to the federal government or a municipality.',
    section: 'law-enforcement',
    purpose:
      'In a federation, policing has to sit somewhere. Where the constitution leaves it to the constituent states, each state builds its own force, and the result is a police landscape that is genuinely plural rather than a single national service with regional offices. The arrangement follows from how competence was divided at the founding, not from a judgement about what size a police force ought to be.',
    distinguishingFeatures: [
      'Established under the law of a constituent state, not of the federation',
      'Accountable to a state government or a state-level authority rather than to a national ministry',
      'General policing jurisdiction within the state, alongside municipal forces where those exist',
    ],
    typicalMandate: [
      'General policing across the state, frequently with a rural and inter-urban emphasis where municipal forces cover the cities',
      'Traffic and highway policing on state road networks',
      'State-level investigative and specialist capabilities',
    ],
    commonConfusions: [
      'With a federal agency, which holds jurisdiction over specified offences nationwide rather than general policing of one state',
      'With a highway patrol. Some states run a single force doing both; others separate general policing from traffic enforcement into distinct organisations; others use neither term.',
      'That the English phrase denotes one arrangement. Brazil’s state-level Polícia Civil and Polícia Militar are constitutionally distinct bodies with different functions, and neither maps onto the American usage.',
    ],
    governanceNote:
      'Authority runs to the state, and the constitutional route matters. In the United States the states hold reserved powers, so state policing is an exercise of authority never given to the federation. In Brazil the 1988 Constitution is explicit about the federation of Union, States, Federal District and Municipalities as autonomous entities and sets out policing competences in the constitutional text itself, so the boundary between federal and state policing is a constitutional question rather than a statutory one.',
    accountabilityNote:
      'Oversight is normally state-level too, which means a federation can contain many separate complaints and inspection regimes with no single national standard between them. That is a structural consequence of the design rather than a defect in it, and it is why a complaint route that works in one state may not exist in the next.',
    presenceNote:
      'Present in some federations and absent from others. A federation may place policing with the states, with the federation, or split it by function — and the existence of state governments tells you nothing about which. See the counterexamples.',
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'Policing is dispersed across thousands of separate agencies, with state-level forces sitting alongside county and municipal ones; federal authority is tied to federal offences by statute rather than being a superior tier of general policing.',
      },
      {
        countrySlug: 'brazil',
        note: 'Article 144 of the 1988 Constitution lists the organs of public security and divides state policing by FUNCTION between two distinct bodies subordinate to the state Governors: the polícias civis, which exercise judicial-police functions and investigate criminal offences, and the polícias militares, which hold ostensive policing and the preservation of public order. "State police" in Brazil therefore names two institutions with different work, not one force on the American model.',
      },
      {
        countrySlug: 'australia',
        note: 'The states and the Northern Territory run their own forces — the Northern Territory Police Force is the Territory’s own — while the Australian Capital Territory’s policing is delivered by the federal police under arrangement. One country, both models.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'nigeria',
        note: 'Nigeria is a federation of 36 states whose constitution forecloses state police in terms: section 214(1) provides that "There shall be a police force for Nigeria … no other police force shall be established for the Federation or any part thereof". Having states does not imply having state police — here it is expressly prohibited.',
      },
    ],
    relatedProfessions: ['patrol-officer', 'detective'],
    relatedInstitutions: [
      'municipal-police',
      'federal-investigative-agency',
      'provincial-police',
    ],
    uncertainty: [
      'This page describes a pattern of constitutional allocation, not a shared institutional model. The American, Brazilian and Australian forces cited here differ in function, command and oversight, and none is a template for the others.',
    ],
    temporalScope: 'current',
    sources: [
      'us-bjs-csllea-2018',
      'br-cf-1988',
      'au-nt-police',
      'ng-constitution',
      'unodc-cpcj',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'provincial-police',
    title: 'Provincial police',
    shortTitle: 'Provincial police',
    question: 'What is a provincial police force, and does every province have one?',
    summary:
      'A police force belonging to a province, in systems where policing is a provincial responsibility — a responsibility a province may discharge by running a force or by buying the service from another order of government.',
    section: 'law-enforcement',
    purpose:
      'Where a constitution assigns policing to the provinces, each province must decide how to deliver it. Owning a force is one answer. Contracting the service from a national force is another, and it is the answer most Canadian provinces have chosen — which is why this category is about who holds the RESPONSIBILITY, not about who wears the uniform.',
    distinguishingFeatures: [
      'Policing is a provincial competence under the constitution or a founding statute',
      'The province may own a force, contract delivery, or combine both across its territory',
      'Municipal forces frequently operate inside the same province under separate arrangements',
    ],
    typicalMandate: [
      'General policing outside municipalities that maintain their own forces',
      'Provincial highways and inter-municipal matters',
      'Provincial investigative and specialist capabilities',
    ],
    commonConfusions: [
      'That a national force policing a province makes the province’s policing national. Where the province holds the competence and buys the service, the responsibility remains provincial.',
      'That every province in a country is arranged the same way. Provincial policing is frequently asymmetric within one country.',
      'With regional police in unitary states, where a region administers a service it does not constitutionally own.',
    ],
    governanceNote:
      'Canada is the clearest worked case. Policing is a provincial responsibility under the Constitution Act 1867, and the Royal Canadian Mounted Police delivers it under contract to eight provinces, three territories and around 150 municipalities — while Ontario and Quebec maintain their own provincial services. The contracted force remains federally governed; the province funds and directs the service without owning the institution.',
    accountabilityNote:
      'Asymmetry inside one country produces asymmetric oversight. Where a province owns its force, provincial complaint and inspection bodies apply; where it contracts a national force, the reviewing body may be a federal one. A resident cannot infer the route from the province they live in without checking.',
    presenceNote:
      'Present where a constitution assigns policing to provinces. Provinces that hold the competence may still not own a force, and provinces in unitary states may have no policing competence at all.',
    countryExamples: [
      {
        countrySlug: 'canada',
        note: 'Quebec maintains its own provincial service, the Sûreté du Québec, while eight provinces and three territories receive policing from the RCMP under cost-shared agreements — the competence is provincial in every case, the delivery is not.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'kenya',
        note: 'Kenya devolved substantial government to 47 counties, and policing was not among the devolved functions: the Constitution’s Fourth Schedule places police services, criminal law and correctional services with the national government. Strong sub-national government without sub-national police.',
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: ['state-police', 'municipal-police', 'national-police'],
    temporalScope: 'current',
    sources: [
      'ca-sq',
      'ca-rcmp-contract',
      'ca-constitution-1867',
      'ke-constitution',
      'unodc-cpcj',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'prefectural-police',
    title: 'Prefectural police',
    shortTitle: 'Prefectural police',
    question: 'What is prefectural policing, and is it the same as state police?',
    summary:
      'Policing administered at the prefectural level within a unitary state, under a single national legal framework rather than under separate sub-national law.',
    section: 'law-enforcement',
    purpose:
      'A unitary state can still decentralise administration without dividing sovereignty. Prefectural policing does exactly that: officers are employed and deployed locally, while the law they enforce, the standards they meet and the coordination between forces remain national. It is decentralised delivery of a national function, not a federal division of authority.',
    distinguishingFeatures: [
      'Administered at prefectural level inside a unitary state, so there is no separate sub-national criminal law',
      'A national body coordinates standards, training and inter-prefectural matters',
      'Civilian supervision exercised through public safety commissions rather than by a minister directly',
    ],
    typicalMandate: [
      'General policing within the prefecture',
      'Investigation, traffic and public order under nationally set law',
    ],
    commonConfusions: [
      'With state police in a federation. This is the most consequential confusion on this page: prefectures are not sovereign, they hold no legislative power over criminal law, and prefectural forces are not the counterpart of American or Brazilian state forces.',
      'That national coordination means national command of day-to-day policing',
    ],
    governanceNote:
      'Japan interposes commissions rather than ministers. The National Public Safety Commission and the National Police Agency constitute the national police organisation, with the Commission supervising the Agency, while operational policing is administered by the prefectures. The arrangement is national framework, local administration, civilian supervision — three separate ideas that a single phrase like "prefectural police" tends to collapse.',
    accountabilityNote:
      'Supervision through a commission is itself an accountability design: it puts a civilian body between the police organisation and the government of the day. Whether that produces more or less effective oversight than a ministerial model is an empirical question this platform does not answer, and the design is described here rather than assessed.',
    presenceNote:
      'A specific arrangement rather than a general category. Terms such as prefecture, department and province name administrative tiers in many countries without implying that policing is administered at that tier.',
    countryExamples: [
      {
        countrySlug: 'japan',
        note: 'The National Public Safety Commission and the National Police Agency form the national organisation, the Commission supervising the Agency, while the prefectures administer operational policing — one national legal system with local administration, and nothing like state-by-state legal variation.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'france',
        note: 'France also has strong sub-national administrative tiers, and they do not administer general policing: the national police holds general competence, while municipal agents act under the mayor with narrower powers under the Code de la sécurité intérieure. A comparable administrative geography producing a completely different policing arrangement.',
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: ['national-police', 'state-police'],
    uncertainty: [
      'Prefectural policing is described here from the Japanese case, which is the system this platform has researched. The term is not asserted to describe arrangements in any other country that uses the word prefecture.',
    ],
    temporalScope: 'current',
    sources: ['jp-npa-police-of-japan-2020', 'fr-csi-l511-1', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
  },
  {
    slug: 'autonomous-community-police',
    title: 'Autonomous-community police',
    shortTitle: 'Autonomous-community police',
    question: 'What is an autonomous-community police force, and does every region have one?',
    summary:
      'A police force belonging to an autonomous region of a decentralised unitary state, created where the region’s own statute of autonomy provides for one.',
    section: 'law-enforcement',
    purpose:
      'A decentralised unitary state can grant a region genuine competences without becoming a federation. Where policing is among them, the region may create its own force — but the competence flows from that region’s statute of autonomy, which is why the arrangement is asymmetric by design rather than by accident.',
    distinguishingFeatures: [
      'Created under a region’s own statute of autonomy, not under a uniform national rule',
      'Coexists with national security forces operating in the same territory',
      'Asymmetric: regions of the same state may have full forces, limited bodies, or none',
    ],
    typicalMandate: [
      'General policing within the community, where the statute so provides',
      'Functions shared or divided with the national forces under national framework law',
    ],
    commonConfusions: [
      'That every autonomous community has an equivalent force. It does not, and assuming so is the single commonest error about Spanish policing.',
      'With federal state police. The state remains unitary; the competence is devolved rather than reserved.',
      'With municipal or local police, which sit at a different tier again.',
    ],
    governanceNote:
      'Spain’s Organic Law 2/1986 structures security forces in three tiers — the state security forces, the police of the autonomous communities, and local police — and provides for autonomous communities to create their own forces where their statutes so provide. The Constitution frames the same asymmetry, recognising the right to autonomy of nationalities and regions within the indissoluble unity of the Spanish nation.',
    accountabilityNote:
      'Where several forces operate in one territory under different orders of government, identifying which body acted is the precondition for using any complaint route at all — and it is harder here than in a two-tier system. Oversight follows the force rather than the place.',
    presenceNote:
      'Specific to decentralised unitary states whose regions hold devolved policing competence. The existence of an autonomous or devolved region implies nothing about whether it polices.',
    countryExamples: [
      {
        countrySlug: 'spain',
        note: 'Organic Law 2/1986 names three tiers and provides for the autonomous communities that so provide in their statutes to create their own police forces — the conditional wording is the point, and it is why Spanish policing is asymmetric across communities.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'kenya',
        note: 'Kenya’s 47 counties hold substantial devolved competences, and policing is not one of them — the Fourth Schedule keeps police services national. Devolution and policing competence are separable, and in Kenya they are separated.',
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: ['national-police', 'municipal-police', 'gendarmerie'],
    uncertainty: [
      'This page describes the Spanish arrangement, which is the decentralised unitary system this platform has researched. It does not establish how devolved policing works in any other state, and it makes no claim about which Spanish communities currently operate which bodies beyond the framework the cited law sets out.',
    ],
    temporalScope: 'current',
    sources: ['es-lofcs', 'es-constitution', 'ke-constitution', 'unodc-cpcj'],
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
