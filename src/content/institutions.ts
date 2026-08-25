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
     Wave 5 — oversight and accountability institutions.

     The platform already explains WHY police accountability matters and HOW
     police may be held to account. What was missing is institutional: which
     kinds of body actually do the examining.

     Two types are published, and the number is the evidence talking rather than
     a target being met. The source registry contains six national police-
     oversight bodies and five ombuds/rights institutions, all verified in
     earlier waves — and NO internal-affairs or police-inspectorate source at
     all. Internal affairs, professional standards, police inspectorates,
     integrity commissions, anti-corruption bodies, data-protection authorities
     and audit institutions are therefore deferred, not published thin.

     A note on the word "independent". It is used here only where a source
     establishes a statutory or constitutional basis for it. `oversightPosture`
     records POSITION — inside or outside the police organisation — which is a
     different and weaker claim, and the one that can be made about every body
     here.
     ------------------------------------------------------------------------ */
  {
    slug: 'independent-police-complaints-body',
    title: 'Independent police complaints body',
    shortTitle: 'Police complaints body',
    question: 'What is an independent police complaints body, and what can it actually do?',
    summary:
      'An external body, outside the police organisation, that receives complaints about police conduct and in many systems investigates them. Its powers vary enormously — some investigate crime and prosecute it, some are limited to the most serious incidents.',
    section: 'law-enforcement',
    oversightPosture: 'external',
    purpose:
      'A police service investigating itself has an interest in the outcome, and everyone involved knows it. An external body exists to remove that interest — not because internal investigation is assumed to be dishonest, but because its findings are hard to rely on when the investigator and the investigated share an employer.',
    distinguishingFeatures: [
      'Sits outside the police organisation, with its own staff and its own statutory basis',
      'Receives complaints from the public directly, rather than through the police service',
      'Powers set by its founding statute, and narrower than the name usually suggests',
    ],
    typicalMandate: [
      'Receiving and triaging complaints about police conduct',
      'Investigating some categories of matter directly — commonly deaths, serious injury and allegations of criminality',
      'Referring, recommending or, in a minority of systems, prosecuting',
    ],
    commonConfusions: [
      'That such a body investigates every complaint. Several are confined by statute to defined serious categories and refer the rest back to the police.',
      'That being outside the police makes a body independent. Position and independence are different claims; independence rests on statutory basis, appointment, removal and budget.',
      'With a general ombuds or rights institution, whose mandate covers public administration broadly rather than police specifically.',
      'That every country has one. Several do not, and route complaints through commissions, courts or the police themselves.',
      'With a body whose mandate is criminal only. Norway’s and Czechia’s bodies investigate offences by officers and take no conduct complaints — the first by a statutory duty to reject them, the second because its Act provides for none. Those belong to a different family.',
    ],
    governanceNote:
      'Statutory basis is what distinguishes these bodies from an internal unit with an external-sounding name. New Zealand’s Independent Police Conduct Authority was set up by Parliament in 1989 and states that it is not part of the New Zealand Police and is fully independent under law; South Africa’s Independent Police Investigative Directorate was created by Act 1 of 2011; Czechia’s General Inspection of Security Forces rests on Act No. 341/2011 Coll.; Denmark’s Police Complaints Authority was enacted in 2010 and became operational in 2012, with its council chaired by a High Court judge and standing independent of both the police and the prosecution service.',
    accountabilityNote:
      'The powers question is the one that matters and the one most often skipped. Investigating is not the same as recommending; recommending is not the same as disciplining; and disciplining is not the same as prosecuting. Norway’s Bureau for the Investigation of Police Affairs is a national investigation AND prosecution agency for offences by police and prosecution employees, which is at the strong end. South Africa’s Directorate investigates a defined list — deaths in custody or resulting from police action, discharge of official firearms, and allegations of torture, assault or corruption — which is a different and narrower thing. Neither arrangement is a template for the other.',
    presenceNote:
      'Present in many but not all systems, under many names, and with mandates that do not correspond. Where no such body exists, complaints may run to a constitutional commission, to the ordinary courts, to a prosecutor, or to the police service itself.',
    historyNote:
      'These bodies are replaced and reconstituted more often than most institutions, which makes naming the current one a live problem rather than a formality. Ireland is the clearest recent case: on 2 April 2025 the Policing, Security and Community Safety Act 2024 was commenced, and the Garda Síochána Ombudsman Commission became Fiosrú, the Office of the Police Ombudsman. A page naming GSOC as the current complaints body would now be wrong.',
    countryExamples: [
      {
        countrySlug: 'new-zealand',
        note: 'The Independent Police Conduct Authority was established by Parliament in 1989, is an Independent Crown Entity accountable only to Parliament, and states that it is not part of the New Zealand Police and is fully independent under law. Under section 12 it receives complaints of misconduct or neglect of duty and complaints about police practice, policy or procedure, and investigates incidents causing death or serious bodily harm; under sections 27 and 28 it must determine whether police conduct was unlawful, unreasonable, unjustified, unfair or undesirable — and section 27 denies it the power to lay criminal charges or take disciplinary action. The clearest statutory statement of external position on this page, and a clear statement of its limits in the same Act.',
      },
      {
        countrySlug: 'south-africa',
        note: 'The Independent Police Investigative Directorate, created by Act 1 of 2011, investigates a defined list under section 28(1): deaths in custody, deaths as a result of police action, discharge of an official firearm, rape by an officer or of a person in custody, torture or assault in the execution of duty, and corruption within the police. Section 35(6)(b) sends ordinary service complaints about the police to the police service instead. A powerful body with a deliberately bounded remit, and not the destination for every complaint against the police.',
      },
      {
        countrySlug: 'norway',
        note: 'A body that belongs on this page only as a limit to it. The Norwegian Bureau for the Investigation of Police Affairs investigates and prosecutes criminal offences committed in the course of duty by police and prosecuting-authority employees — and chapter 34 of the prosecution instruction requires its chief to REJECT a report falling outside that, expressly including one where the reported matter is not criminal. It is not a complaints body, and is covered by [independent police investigative bodies](/institutions/independent-police-investigative-body).',
      },
      {
        countrySlug: 'czechia',
        note: 'The other limit. The General Inspection of Security Forces investigates suspected crimes by officers of the Police, the Prison Service and the Customs Administration — and Act No. 341/2011 Coll. contains no complaint procedure for those forces at all. A member of the public may alert it to an officer’s conduct only where that conduct amounts to a criminal offence. It is an [independent police investigative body](/institutions/independent-police-investigative-body), and it is not police-only.',
      },
      {
        countrySlug: 'denmark',
        note: 'Den Uafhængige Politiklagemyndighed, whose own English name is the Police Complaints Authority, holds both mandates at once: it handles conduct complaint cases AND investigates criminal cases against police and prosecution personnel, and it opens investigations where a person dies or is seriously injured in a police intervention or in custody. It is independent of both the police and the prosecution service, and its governing council is chaired by a High Court judge. It appears on this page and on [independent police investigative bodies](/institutions/independent-police-investigative-body) because it genuinely does both.',
      },
      {
        countrySlug: 'ireland',
        note: 'Fiosrú, the Office of the Police Ombudsman, opened on 2 April 2025 and receives and investigates complaints from the public about Garda personnel. It replaced the Garda Síochána Ombudsman Commission, which is historical from that date.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'nigeria',
        note: 'Nigeria splits police oversight between two constitutional bodies under section 153 and the Third Schedule — the Police Service Commission, which appoints, promotes and disciplines officers other than the Inspector-General, and the Nigeria Police Council for policy and general supervision. There is no separate independent police-complaints board. A country can have constitutional police oversight and no body of this type at all.',
      },
      {
        countrySlug: 'france',
        note: 'France divides the two halves of this page’s definition between different bodies, and no French body holds both. The police-specific bodies are internal: the Inspection générale de la Police nationale is, by its founding décret, “un service actif de la direction générale de la police nationale”, and the Code de la défense has the director general of the gendarmerie “dispose” of its inspection générale. The external bodies are general-mandate: the Défenseur des droits reviews security deontology across national and municipal police, gendarmes, prison staff, customs officers, transport surveillance agents and private security employees alike. No external, police-specific complaints body appears in the French instruments read for this page. France also inverts the assumption that external means stronger — the internal IGPN conducts criminal investigations on its own initiative, while the external Défenseur des droits can recommend, enjoin and refer, but not sanction.',
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: [
      'independent-police-investigative-body',
      'ombuds-and-rights-institution',
      'national-police',
      'prosecution-service',
    ],
    uncertainty: [
      'This page describes a recurring institutional form. It does not establish that any of these bodies is effective, and it makes no comparison between them: the existence of an independent body is a fact about design, not about outcomes.',
      'Mandates differ so much that the shared label is the weakest thing these bodies have in common. Nothing here should be read across from one country to another.',
    ],
    temporalScope: 'current',
    sources: [
      'nz-ipca',
      'za-ipid',
      'no-spesialenheten',
      'cz-gibs',
      'dk-police-complaints',
      'ie-fiosru',
      'ie-pscsa-2024-act',
      'nz-ipca-legislative-functions',
      'za-ipid-act-gazette',
      'no-pataleinstruksen-kap34',
      'cz-act-341-2011-consolidated',
      'dk-politiklagemyndighed-about',
      'ng-constitution',
      'fr-decret-2013-784-igpn',
      'fr-code-defense-iggn',
      'fr-ddd-deontologie-securite',
      'unodc-e4j-police-accountability',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
  },
  {
    slug: 'independent-police-investigative-body',
    title: 'Independent police investigative body',
    shortTitle: 'Police investigative body',
    question:
      'What is an independent police investigative body, and how is it different from a complaints body?',
    summary:
      'An external body whose statutory job is to investigate suspected CRIMES by police officers. Some also handle conduct complaints; two of the clearest examples handle none at all, and must turn away a report that discloses no offence.',
    section: 'law-enforcement',
    oversightPosture: 'external',
    purpose:
      'When a police officer is suspected of a crime, the ordinary answer — the police investigate it — puts a force in charge of building a case against its own. These bodies exist to move that specific decision outside the force. The question they are built for is narrow and criminal: was an offence committed. That narrowness is the design, not a gap in it.',
    distinguishingFeatures: [
      'The trigger is a criminal allegation or a mandatory referral, not a complaint about conduct',
      'Investigative powers are police-type powers — search, seizure, compelling evidence — held under criminal procedure',
      'What happens at the end is a prosecution decision, taken by the body itself or by a prosecutor it must refer to',
    ],
    typicalMandate: [
      'Investigating suspected criminal offences committed by police officers, usually in the course of duty',
      'Investigating deaths and serious injuries caused by police action or occurring in custody, whether or not an offence is suspected',
      'Referring the file to a prosecutor, or in a minority of systems deciding the prosecution question directly',
    ],
    commonConfusions: [
      'That this is the same thing as a police complaints body. Some systems combine them; Norway and Czechia do not, and both are required to turn away matters that disclose no criminal offence.',
      'That such a body can discipline the officers it investigates. None of the bodies researched for this page can. Discipline runs through the police hierarchy, sometimes under a statutory duty to act on a recommendation.',
      'That investigating crime implies prosecuting it. One of the bodies here prosecutes; the rest must refer to a prosecution service, which takes the charging decision itself.',
      'That the remit is always police-only. Czechia’s body covers the police, the customs administration and the prison service alike.',
    ],
    governanceNote:
      'The arrangements differ so much that the only safe generalisation is that each rests on a statute. Norway’s body is constituted by chapter 34 of the prosecution instruction as a nationwide investigating and prosecuting authority whose staff may not simultaneously be employed in the police or the prosecuting authority. Czechia’s is an armed security force in its own right, whose director is appointed and removed by the prime minister and whose budget is a separate chapter of the state budget. South Africa’s functions independently from the police service under section 4(1) of its Act, while its Executive Director is nominated by the Minister, confirmed by a parliamentary committee, and removable by the Minister — a statement of independence with a stated scope.',
    accountabilityNote:
      'Independence here is bounded in ways the word does not convey, and the bounds are usually in the same instrument that grants it. Norway’s Director of Public Prosecutions may order the bureau to open an investigation, to carry it out, and to stop it. Kenya’s Authority may not investigate a matter that is before a court. South Africa’s Act states independence from the Service and is silent about the Minister who appoints and may remove its head. Reading any of these bodies as unconstrained misdescribes them.',
    presenceNote:
      'Present in a minority of systems, and by no means the default. Where no such body exists the investigation of a suspected offence by an officer may fall to another police force, to a specialised unit inside the same force, to a prosecutor, or to an investigating judge. Sweden is the clearest case of the alternative: the investigating department sits inside the police authority and a prosecutor outside it directs every case.',
    historyNote:
      'Several of these bodies replaced an arrangement judged too close to the police. Czechia’s inspection replaced the Inspectorate of the Police of the Czech Republic, which sat in the Interior Ministry, and the 2011 Act moved the whole staff and budget across. Naming a predecessor as though it were current is the recurring error with this family, because the replacements are recent and the names are similar.',
    countryExamples: [
      {
        countrySlug: 'norway',
        note: 'Spesialenheten for politisaker is the purest case, and the one that shows the family is not a complaints body. Chapter 34 of the prosecution instruction makes it a nationwide investigating AND prosecuting authority for criminal acts committed in the course of duty by police or prosecution employees — and requires its chief to reject a report that falls outside that, expressly including one where the reported matter is not criminal. It must investigate a death or serious injury caused by police duty even with no suspicion of an offence, and where a case suggests an administrative response it sends it to the officer’s own commander rather than acting itself.',
      },
      {
        countrySlug: 'czechia',
        note: 'The General Inspection of Security Forces is the case that breaks the police-only assumption twice over. It investigates crimes by officers of the police, the customs administration and the prison service; and it is itself an armed security force under section 1(1) of Act No. 341/2011, with powers to detain and to use coercive means. Its Act contains no complaint procedure: a member of the public may alert it to conduct by another force’s officer only where that conduct amounts to a criminal offence. It does not prosecute — the state prosecutor decides that, and offences by the inspection’s own members are investigated by the state prosecutor rather than by itself.',
      },
      {
        countrySlug: 'south-africa',
        note: 'The Independent Police Investigative Directorate shows the bounded-list model. Section 28(1) of Act 1 of 2011 requires it to investigate deaths in custody, deaths from police action, discharge of an official firearm, rape by an officer or of a person in custody, torture or assault in the execution of duty, and corruption within the police — and section 35(6)(b) sends ordinary service complaints to the police service instead. Its remit covers municipal police services as well as the national one. It must refer criminal offences to the National Prosecuting Authority, and on a disciplinary recommendation the Commissioner must begin proceedings within 30 days: a duty on the police to act, not a power in the Directorate to decide.',
      },
      {
        countrySlug: 'denmark',
        note: 'Den Uafhængige Politiklagemyndighed holds both mandates at once, which is why the two families on this site overlap rather than divide. It handles conduct complaint cases and investigates criminal cases against police and prosecution personnel, and it opens an investigation where a person dies or is seriously injured in a police intervention or in custody. Its governing council is chaired by a High Court judge and it states independence of both the police and the prosecution service.',
      },
      {
        countrySlug: 'ireland',
        note: 'Fiosrú, the Office of the Police Ombudsman, is the other combined body. Under Part 6 of the Policing, Security and Community Safety Act 2024 it takes public complaints and also investigates, with powers equivalent to a member of An Garda Síochána and a power to search Garda premises, referring to the Director of Public Prosecutions under section 214. It is not the destination for every complaint: sections 200 to 202 route defined categories back to An Garda Síochána for resolution.',
      },
      {
        countrySlug: 'kenya',
        note: 'The Independent Policing Oversight Authority reaches furthest of any body here, and still does not prosecute or discipline. It investigates disciplinary and criminal offences alike, inspects police premises including detention facilities, audits the Service’s own Internal Affairs Unit, and may take over an internal investigation that is inordinately delayed or manifestly unreasonable. Prosecution is recommended to the Director of Public Prosecutions, whom it may require to respond.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'sweden',
        note: 'Sweden has no body of this type and investigates police crime anyway. The Department for Special Investigations is, in the police authority’s own words, "en oberoende avdelning inom Polismyndigheten, avskild från övrig polisverksamhet" — an independent department inside the Police Authority, separated from other police activity — and a prosecutor at the Särskilda åklagarkammaren always leads the preliminary investigation. The function is split between a ring-fenced department inside the police and a chamber inside the prosecution service. Sweden shows that a dedicated external body is one design for this problem, not the definition of solving it.',
      },
      {
        countrySlug: 'france',
        note: 'France places the criminal-investigation power inside the forces. The Inspection générale de la Police nationale is a service of the police’s own director general and opens judicial investigations on its own initiative, while the external Défenseur des droits may recommend, enjoin and refer but cannot investigate a crime or impose a sanction. Where this page’s bodies are external and criminal, France’s are internal and criminal, and external and neither.',
      },
      {
        countrySlug: 'new-zealand',
        note: 'The Independent Police Conduct Authority is external, statutory and police-specific, and is still not a body of this type. Section 27 of its Act denies it the power to lay criminal charges. It investigates incidents causing death or serious bodily harm and may recommend criminal proceedings, but the criminal decision is not its to take — which is the line this page is drawn along.',
      },
    ],
    oversightBodies: [
      {
        id: 'no-spesialenheten-body',
        nameOriginal: 'Spesialenheten for politisaker',
        nameEnglish: 'The Norwegian Bureau for the Investigation of Police Affairs',
        nameStatus: 'official-english',
        countrySlug: 'norway',
        jurisdiction: 'NO',
        posture: 'external',
        policeSpecific: true,
        temporalScope: 'current',
        powers: {
          'receives-complaints': 'no',
          'investigates-misconduct': 'no',
          'investigates-crime': 'yes',
          prosecutes: 'yes',
          disciplines: 'no',
          refers: 'yes',
          inspects: 'not-established',
          audits: 'not-established',
          recommends: 'not-established',
        },
        sources: ['no-pataleinstruksen-kap34', 'no-spesialenheten'],
      },
      {
        id: 'cz-gibs-body',
        nameOriginal: 'Generální inspekce bezpečnostních sborů',
        nameEnglish: 'General Inspection of Security Forces',
        nameStatus: 'official-english',
        terminologyCaveat:
          'The English name contains no word meaning police, and that is faithful: the remit covers the police, the customs administration and the prison service. "Inspection" here also does not mean a body that inspects an organisation — it is an armed security force that investigates individuals for crimes.',
        countrySlug: 'czechia',
        jurisdiction: 'CZ',
        posture: 'external',
        policeSpecific: false,
        temporalScope: 'current',
        powers: {
          'receives-complaints': 'partial',
          'investigates-misconduct': 'no',
          'investigates-crime': 'yes',
          prosecutes: 'no',
          disciplines: 'no',
          recommends: 'yes',
          refers: 'yes',
          inspects: 'not-established',
          audits: 'not-established',
        },
        sources: ['cz-act-341-2011-consolidated', 'cz-gibs'],
      },
      {
        id: 'za-ipid-body',
        nameOriginal: 'Independent Police Investigative Directorate',
        nameStatus: 'not-a-translation',
        countrySlug: 'south-africa',
        jurisdiction: 'ZA',
        posture: 'external',
        policeSpecific: true,
        temporalScope: 'current',
        powers: {
          'receives-complaints': 'partial',
          'investigates-misconduct': 'yes',
          'investigates-crime': 'yes',
          prosecutes: 'no',
          disciplines: 'no',
          recommends: 'yes',
          refers: 'yes',
          inspects: 'not-established',
          audits: 'not-established',
        },
        sources: ['za-ipid-act-gazette', 'za-ipid'],
      },
      {
        id: 'dk-politiklagemyndighed-body',
        nameOriginal: 'Den Uafhængige Politiklagemyndighed',
        nameEnglish: 'The Police Complaints Authority',
        nameStatus: 'official-english',
        terminologyCaveat:
          'The body’s own English name drops the word its Danish name carries: "Uafhængige" means independent. The English name is used here because the body itself publishes it, and the Danish name is given first so the difference is visible rather than silently resolved.',
        countrySlug: 'denmark',
        jurisdiction: 'DK',
        posture: 'external',
        policeSpecific: true,
        temporalScope: 'current',
        powers: {
          'receives-complaints': 'yes',
          'investigates-misconduct': 'yes',
          'investigates-crime': 'yes',
          prosecutes: 'not-established',
          disciplines: 'not-established',
          recommends: 'not-established',
          refers: 'not-established',
          inspects: 'not-established',
          audits: 'not-established',
        },
        sources: ['dk-politiklagemyndighed-about', 'dk-police-complaints'],
      },
      {
        id: 'ie-fiosru-body',
        nameOriginal: 'Fiosrú',
        nameEnglish: 'Office of the Police Ombudsman',
        nameStatus: 'official-english',
        terminologyCaveat:
          'Fiosrú is an Irish word meaning inquiry or investigation; it is the body’s name, not an abbreviation, and it is not translated in official use.',
        countrySlug: 'ireland',
        jurisdiction: 'IE',
        posture: 'external',
        policeSpecific: true,
        temporalScope: 'current',
        powers: {
          'receives-complaints': 'yes',
          'investigates-misconduct': 'yes',
          'investigates-crime': 'yes',
          prosecutes: 'no',
          disciplines: 'no',
          recommends: 'yes',
          refers: 'yes',
          inspects: 'not-established',
          audits: 'not-established',
        },
        sources: ['ie-pscsa-2024-act', 'ie-fiosru'],
      },
      {
        id: 'ke-ipoa-body',
        nameOriginal: 'Independent Policing Oversight Authority',
        nameStatus: 'not-a-translation',
        countrySlug: 'kenya',
        jurisdiction: 'KE',
        posture: 'external',
        policeSpecific: true,
        temporalScope: 'current',
        powers: {
          'receives-complaints': 'yes',
          'investigates-misconduct': 'yes',
          'investigates-crime': 'yes',
          prosecutes: 'no',
          disciplines: 'no',
          recommends: 'yes',
          refers: 'yes',
          inspects: 'yes',
          audits: 'yes',
        },
        sources: ['ke-ipoa-act-cap86'],
      },
      {
        id: 'ie-gsoc-body',
        nameOriginal: 'Garda Síochána Ombudsman Commission',
        nameStatus: 'not-a-translation',
        countrySlug: 'ireland',
        jurisdiction: 'IE',
        posture: 'external',
        policeSpecific: true,
        temporalScope: 'historical',
        supersededBy: 'ie-fiosru-body',
        supersededOn: '2025-04-02',
        powers: {
          'receives-complaints': 'yes',
          'investigates-misconduct': 'yes',
        },
        sources: ['ie-fiosru', 'ie-gov-pscsa-2024'],
      },
    ],
    relatedProfessions: ['patrol-officer'],
    relatedInstitutions: [
      'independent-police-complaints-body',
      'prosecution-service',
      'ombuds-and-rights-institution',
    ],
    uncertainty: [
      'Whether Denmark’s authority holds prosecuting authority of its own was not established from a primary source, and no claim is made either way. Its investigative and complaint-handling mandates are established; the prosecution question is not.',
      'This page describes how these bodies are designed. It establishes nothing about whether any of them works, and makes no comparison of effectiveness between them.',
      'The set of bodies here overlaps with the independent police complaints body page rather than dividing from it. Denmark, Ireland and Kenya hold both mandates; Norway and Czechia hold only this one.',
    ],
    temporalScope: 'current',
    sources: [
      'no-pataleinstruksen-kap34',
      'no-spesialenheten',
      'cz-act-341-2011-consolidated',
      'cz-gibs',
      'za-ipid-act-gazette',
      'za-ipid',
      'ke-ipoa-act-cap86',
      'ie-pscsa-2024-act',
      'ie-fiosru',
      'dk-politiklagemyndighed-about',
      'dk-police-complaints',
      'se-polisen-sarskilda-utredningar',
      'nz-ipca-legislative-functions',
      'fr-decret-2013-784-igpn',
      'unodc-e4j-police-accountability',
    ],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
  },
  {
    slug: 'ombuds-and-rights-institution',
    title: 'Ombuds and rights institutions',
    shortTitle: 'Ombuds and rights institutions',
    question:
      'How do ombuds and human-rights bodies oversee police, and are they police bodies?',
    summary:
      'General-mandate bodies — parliamentary ombuds, public defenders of rights, national human-rights institutions — whose remit covers public administration broadly. Police fall inside that remit without these being police bodies.',
    section: 'justice',
    oversightPosture: 'external',
    purpose:
      'Some scrutiny of the state should not depend on which part of the state is being scrutinised. An ombuds institution exists to give a person a route of complaint against public administration generally, and it reaches police because police are public administration — not because it was built for them.',
    distinguishingFeatures: [
      'A general mandate over public administration, of which policing is one part',
      'Frequently appointed by and reporting to a parliament rather than a government',
      'Powers commonly to investigate, inspect and recommend rather than to discipline',
    ],
    typicalMandate: [
      'Complaints of maladministration against public authorities',
      'Inspection of places where people are deprived of liberty, including police custody',
      'Reporting to a parliament, and publishing findings',
    ],
    commonConfusions: [
      'With a police complaints body. A general ombuds is not a police-specific mandate, and treating it as one overstates what it was created to do.',
      'That an ombuds can discipline an officer. These bodies typically recommend and report; the disciplinary power normally stays elsewhere.',
      'That every national human-rights institution handles police complaints. Whether police conduct falls within the mandate is a question about that body’s founding instrument.',
    ],
    governanceNote:
      'The reporting line is the structural feature worth noticing: several of these bodies answer to a parliament rather than to a government. Sweden’s Parliamentary Ombudsmen are appointed by the Riksdag to ensure that public authorities and their staff comply with the law, on a constitutional basis in the Instrument of Government. Norway’s Parliamentary Ombud is elected by the Storting and is an independent body. Austria’s Ombudsman Board is a constitutional body under Article 148a B-VG to which anyone may complain of alleged maladministration in federal administration.',
    accountabilityNote:
      'A distinctive and often-missed function is preventive rather than reactive. Norway’s Parliamentary Ombud hosts the country’s National Preventive Mechanism under OPCAT and visits police custody facilities, prisons and psychiatric institutions; Austria’s Ombudsman Board serves the same role with human-rights commissions; Czechia’s Public Defender of Rights conducts inspections of places where people are deprived of liberty. That is systemic, ex-ante oversight of conditions, not case-by-case adjudication of complaints.',
    presenceNote:
      'Widespread, under many names — ombudsman, public defender of rights, parliamentary ombud, ombudsman board, human-rights commission — and with mandates that differ. Presence tells you a general complaints route exists; it does not tell you that police conduct is within it.',
    countryExamples: [
      {
        countrySlug: 'sweden',
        note: 'The Parliamentary Ombudsmen are appointed by the Riksdag to ensure that public authorities and their staff comply with the laws governing their actions — an oversight body under the parliament rather than the government, with a constitutional basis in the Instrument of Government.',
      },
      {
        countrySlug: 'norway',
        note: 'The Parliamentary Ombud is elected by the Storting to safeguard the rights of individuals in dealings with the public administration, and hosts Norway’s National Preventive Mechanism under OPCAT — visiting police custody facilities, prisons and psychiatric institutions.',
      },
      {
        countrySlug: 'austria',
        note: 'The Volksanwaltschaft is a constitutional body under Article 148a B-VG to which anyone may complain of alleged maladministration in federal administration, and it serves as Austria’s National Preventive Mechanism with human-rights commissions.',
      },
      {
        countrySlug: 'czechia',
        note: 'The Public Defender of Rights handles complaints against the conduct or inaction of public authorities, inspects places where people are deprived of liberty, and acts as the national equality body — three distinct functions in one institution.',
      },
      {
        countrySlug: 'france',
        note: 'The Défenseur des droits is established by Article 71-1 of the Constitution, appointed for a single non-renewable six-year term, and reports on his activity to the President of the Republic and to Parliament; the organic law of 2011 describes him as an independent administrative authority who neither receives nor seeks any instruction. Oversight of security conduct is one of five mandates and is not police-specific — it reaches municipal police, prison staff, customs officers and private security employees as well. He may require explanations and documents, verify on premises, recommend, enjoin, publish a special report where an injunction is not followed, and refer facts to the authority holding the disciplinary power. He cannot impose a sanction, which is the general shape of this institutional type stated in one country’s law.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'south-africa',
        note: 'South Africa routes serious police matters to a police-specific statutory body instead: the Independent Police Investigative Directorate, created by Act 1 of 2011 for deaths in custody, deaths resulting from police action, firearm discharges and allegations of torture, assault or corruption. A general rights institution is not the police-complaints route everywhere, and where a dedicated body exists the two are not interchangeable.',
      },
    ],
    relatedProfessions: ['judge'],
    relatedInstitutions: ['independent-police-complaints-body', 'correctional-service'],
    uncertainty: [
      'Whether police conduct falls inside a given ombuds or rights institution’s mandate depends on that body’s founding instrument, and this page does not establish it for any country not named here.',
      'The bodies described here are cited for their mandate and structure. Nothing on this page assesses how any of them performs.',
    ],
    temporalScope: 'current',
    sources: [
      'se-jo',
      'no-sivilombudet',
      'at-volksanwaltschaft',
      'cz-ochrance',
      'za-ipid',
      'fr-constitution-1958',
      'fr-loi-organique-2011-333',
      'fr-ddd-deontologie-securite',
      'mandela-rules',
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
