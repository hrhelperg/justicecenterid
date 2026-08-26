import type { Guide } from '../types';

/**
 * Guides for the public-safety section.
 *
 * Wave 20. The section existed as a hub with a defined scope and no children; these are its first
 * pages. The editorial line the whole cluster holds is that capacity and constraint are the same
 * design rather than opposing forces — a state that cannot act in a flood has failed, and a state
 * whose action in a flood is unbounded has failed differently.
 *
 * Nothing here describes what to do in an emergency, how any measure is applied, or how to comply
 * with or resist one. That is not a disclaimer bolted on: three candidate pages were rejected in
 * the cannibalization audit precisely because their honest content would have been operational.
 */
export const PUBLIC_SAFETY_GUIDES: Guide[] = [
  {
    slug: 'what-public-safety-covers',
    title: 'What public safety covers',
    shortTitle: 'What public safety covers',
    question: 'Is "public safety" just a broader word for policing?',
    summary:
      'No. Where statutes define the field, policing is one named partner among several — fire, emergency medicine, technical utilities, civil protection. Two constitutions and two statutes list the members, and in none of them does one body hold the field.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-civil-protection-is',
      'who-is-in-charge-in-an-emergency',
      'police-and-law-enforcement-difference',
    ],
    sources: ['ch-bzg', 'cz-security-act', 'es-ley-17-2015', 'br-cf-1988'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['public-safety', 'police', 'accountability'],
    uncertainty: [
      'Four systems are described from primary text. What any other system means by the phrase was not researched, and the English words "public safety" translate imperfectly into every language quoted here.',
      'Fire, rescue and emergency-medical services are named on this page as statutory partners. They were reached only through integrated-system statutes, and none is described as a discipline.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Public safety is the field of institutions responsible for protecting people from harm — and the useful question is not what the phrase means in the abstract but which bodies a legal system actually puts inside it. Four systems answer that in their own texts, and in none of them is the answer "the police".',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes how four legal systems constitute the field. It is not emergency guidance, it names no procedure, it describes nothing anyone should do in an emergency, and it is not legal advice. Anyone in an emergency should contact their local emergency services.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A society facing a flood, a chemical release or a collapsed building needs several capabilities at once: someone to keep order, someone to pull people out, someone to treat them, someone to restore water and power, and someone to plan for all of it beforehand. Those are different skills held by different organisations, and the legal question is how they are made to work as one.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the police-shaped assumption is so persistent',
        text: 'Policing is the most visible of these capabilities and the one with the widest ordinary contact. It is also the one this platform already covers most fully. That makes it the default mental model for the whole field — and the statutes below are the evidence against it.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Switzerland names the members of the field in a statute, and the police are item (a) of five. Article 3(2) of the Bevölkerungs- und Zivilschutzgesetz lists the partner organisations that work together: *die Polizei zur Aufrechterhaltung von Sicherheit und Ordnung*, the fire service for rescue and damage control, the health system including emergency medical services, the technical utilities for the availability of indispensable goods and services, and civil protection itself.',
        claim: 'fact',
        sources: ['ch-bzg'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What a list like that is doing',
        text: 'It is not a description of who turns up. It is a statutory allocation: each partner is named with the function it is there to discharge, which is what makes the coordination obligation enforceable rather than aspirational.',
      },
      {
        kind: 'paragraph',
        text: 'Czechia puts the same idea in its constitutional order. Article 3(1) of the constitutional act on the security of the Czech Republic provides that the security of the Republic is secured by *ozbrojené síly, ozbrojené bezpečnostní sbory, záchranné sbory a havarijní služby* — the armed forces, the armed security corps, the rescue corps and the emergency services. Four categories, and the police are inside one of them rather than being the whole.',
        claim: 'fact',
        sources: ['cz-security-act'],
      },
      {
        kind: 'paragraph',
        text: 'Article 3(2) then does something the other texts do not: it places State bodies, territorial self-government bodies, and legal and natural persons under a duty to participate in securing the security of the State, with the scope of that duty left to statute.',
        claim: 'fact',
        sources: ['cz-security-act'],
      },
      {
        kind: 'paragraph',
        text: 'Spain defines the field by its object rather than by its members. Article 1 of Ley 17/2015 provides that civil protection, *como instrumento de la política de seguridad pública*, is the public service that protects persons and property by guaranteeing an adequate response to emergencies and catastrophes of natural origin or arising from human action, whether accidental or intentional.',
        claim: 'fact',
        sources: ['es-ley-17-2015'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two ways to draw the same boundary',
        text: 'Switzerland and Czechia enumerate the bodies; Spain states the purpose and lets the bodies follow. The enumerating approach tells a reader who is in the field; the purposive approach tells them what would put a body in it. Neither is wrong, and a comparison that assumed both systems must do it the same way would misread one of them.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil shows why the assumption fails even inside a policing provision. Article 144 of the 1988 Constitution lists the organs through which public security is exercised, and one of them is the *corpos de bombeiros militares* — the military fire brigades. Paragraph 5 gives the military police ostensive policing and preservation of public order, and gives the fire brigades, beyond their statutory duties, the execution of civil-defence activities.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A fire service inside the public-security article',
        text: 'The Brazilian text places a rescue organisation in the same constitutional list as the police forces, and then gives it a civil-defence mandate on top. A reader who equated "public security" with policing would have to explain what a fire brigade is doing in Article 144.',
      },
      {
        kind: 'paragraph',
        text: 'Article 144 is also, on its face, the ordinary allocation rather than an emergency one. Nothing in it is conditioned on a declaration, which is worth noticing before reaching any page about emergency powers: most of what a state does about public safety happens under ordinary law, on an ordinary day.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Public safety is another way of saying policing.',
        reality:
          'It is not. Switzerland’s Article 3(2) BZG names five partner organisations and the police are one of them; Czechia’s constitutional act names four categories of body; Brazil puts military fire brigades in the same constitutional list as its police forces.',
      },
      {
        claim: 'Every public-safety body is a law-enforcement body.',
        reality:
          'No. Fire services, emergency medical services and technical utilities appear in these statutes as partners with defined functions, and none of those functions is enforcement.',
      },
      {
        claim: 'Public safety is what happens after something goes wrong.',
        reality:
          'Most of it is not. Spain defines civil protection as a public service guaranteeing an adequate response, and the section it belongs to is built on planning, risk assessment and coordination that happen long before any incident.',
      },
      {
        claim: 'Every country divides the field the same way.',
        reality:
          'They do not. Switzerland and Czechia enumerate the bodies, Spain states the purpose, and Brazil places a fire service inside its constitutional public-security article. Reading any one of those as the general rule misdescribes the others.',
      },
      {
        claim: 'Public-safety powers only exist during an emergency.',
        reality:
          'Brazil’s Article 144 is the ordinary allocation and is not conditioned on any declaration. Most public-safety work is done under ordinary law.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four systems, three drafting techniques.',
      },
      {
        kind: 'list',
        items: [
          'An enumerated list of partner organisations, each with a stated function — Switzerland, BZG Art. 3(2).',
          'An enumerated list of categories at constitutional level, plus a participation duty — Czechia, ústavní zákon č. 110/1998 Sb. Čl. 3.',
          'A statutory definition by object, with the bodies following from it — Spain, Ley 17/2015 Art. 1.',
          'A closed constitutional list of public-security organs that includes a rescue service — Brazil, CF Art. 144.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not established here',
        text: 'No source used on this page establishes how any other system draws the boundary. Their absence is a gap in this platform’s sourcing and is not evidence that they draw it the same way, or differently.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Knowing which body holds a function is the precondition for holding anyone to account for it. Where several organisations operate in the same space, a person harmed by a failure has to know whose failure it was, and a statute that names the partner and its function answers that question in advance.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It matters in the other direction too. Powers that belong to a police force — and the [oversight arrangements](/law-enforcement/how-police-are-held-to-account) that attach to them — do not travel to a fire service or a utility merely because both are in the same statutory list. Each partner is named with the function it holds, and no more.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what civil protection is](/public-safety/what-civil-protection-is), [who is in charge in an emergency](/public-safety/who-is-in-charge-in-an-emergency), and [police and law enforcement are not the same thing](/law-enforcement/police-and-law-enforcement-difference).',
      },
    ],
  },
  {
    slug: 'what-civil-protection-is',
    title: 'What civil protection is',
    shortTitle: 'Civil protection',
    question: 'What is civil protection, and is it the same as civil defence?',
    summary:
      'They started as different things and some systems still separate them in the constitution. Switzerland assigns armed-conflict protection to the federation in one sentence and disaster deployment in the next; Germany splits them between two levels of government; Norway runs both in one statute.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-public-safety-covers',
      'who-is-in-charge-in-an-emergency',
      'national-and-local-emergency-authority',
    ],
    sources: [
      'ch-constitution',
      'de-zskg',
      'no-emergency-statutes',
      'eu-civil-protection-mechanism',
      'ke-disaster-risk-management-act-2026',
      'se-civil-defence-agency',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['public-safety', 'jurisdiction'],
    countryExamples: [
      {
        countrySlug: 'switzerland',
        note: 'Splits the two ideas inside a single constitutional article: Art. 61(1) BV makes legislation on civil protection against the effects of ARMED CONFLICT a federal matter, and Art. 61(2) separately has the Confederation legislate on the DEPLOYMENT of civil protection in disasters and emergencies.',
      },
      {
        countrySlug: 'germany',
        note: 'Splits them by level of government rather than by article. Federal Zivilschutz is defined by the ZSKG as protection against the effects of war by non-military means; Katastrophenschutz is a Land matter, and the Länder execute the federal statute on federal commission.',
      },
      {
        countrySlug: 'norway',
        note: 'Runs the whole continuum through one statute. The purpose clause of the sivilbeskyttelseslov covers unwanted events in peacetime, war, the threat of war, and danger to the realm’s independence or security — in one sentence.',
      },
    ],
    uncertainty: [
      'Five national systems and one supranational instrument are described — Switzerland, Germany and Norway on the civil-protection/civil-defence line, and Kenya and Sweden on the institutional form. How any other system draws the line, or whether it draws one at all, was not researched.',
      'This page describes the legal architecture of the function. It describes no civil-protection activity, no plan, no exercise and no capability.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Civil protection is the protection of the civilian population and of civilian assets by non-military means. Civil defence is the older term, and in its original sense it meant that protection specifically against the effects of war. Several systems still keep the two apart in their own texts — which is the reason the words are not interchangeable even though they are often used as though they were.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes how three constitutions and statutes allocate the function, and what one supranational instrument may and may not do about it. It is not preparedness guidance, describes no protective measure, and is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The function exists because the harms it addresses do not respect the categories the rest of government is organised around. A flood is not a crime, a chemical release is not a war, and a power failure in winter is not a medical emergency — but each can kill people, and none of them belongs to a single ministry.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the wartime origin still shows',
        text: 'The vocabulary and much of the machinery came from planning for aerial bombardment: shelters, warning of the population, and the protection of cultural property. Systems that later extended the same apparatus to earthquakes and floods inherited its language, which is why a statute about disasters can still be headed with the word "defence".',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Switzerland states both halves in one constitutional article and keeps them distinct. Article 61(1) of the Bundesverfassung makes legislation on *den zivilen Schutz von Personen und Gütern vor den Auswirkungen bewaffneter Konflikte* a federal matter. Article 61(2) then provides separately that the Confederation issues rules on the deployment of civil protection *bei Katastrophen und in Notlagen*.',
        claim: 'fact',
        sources: ['ch-constitution'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two sentences, two competences',
        text: 'The first is about protection against armed conflict; the second is about deployment in disasters and emergencies. A constitution that meant them as one idea would not need two paragraphs.',
      },
      {
        kind: 'paragraph',
        text: 'Germany draws the same distinction and then uses it to allocate power between two levels of government. The Zivilschutz- und Katastrophenhilfegesetz defines the task of Zivilschutz as protecting the population, their homes and workplaces, vital or defence-critical civilian installations and cultural property *vor Kriegseinwirkungen* by non-military means, adding that official measures supplement the population’s own self-help.',
        claim: 'fact',
        sources: ['de-zskg'],
      },
      {
        kind: 'paragraph',
        text: 'Katastrophenschutz is a different matter, in both senses. Section 2(1) of the same Act provides that where its execution falls to the Länder, including municipalities and municipal associations, they act *im Auftrage des Bundes* — on federal commission — and that unless otherwise provided, authority competence and administrative procedure follow the Länder’s own disaster-protection rules. Section 16(3) adds that the Länder’s competence for operational crisis management remains unaffected.',
        claim: 'fact',
        sources: ['de-zskg'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why this makes Germany hard to summarise',
        text: 'The federal statute is the easy half to find and the smaller half of the picture. The body that actually runs a response to a German flood is acting under Land law that this platform has not read. A page that described the federal frame and stopped would leave a reader believing they had been told how the system works.',
      },
      {
        kind: 'paragraph',
        text: 'Norway does not split them at all. Section 1 of the sivilbeskyttelseslov states one purpose covering the whole continuum: to protect life, health, environment, material assets and critical infrastructure, and to facilitate the use of civil society’s combined resources through non-military means *når riket er i krig, når krig truer, når rikets selvstendighet eller sikkerhet er i fare, og ved uønskede hendelser i fredstid* — at war, when war threatens, when the realm’s independence or security is in danger, and in unwanted peacetime events.',
        claim: 'fact',
        sources: ['no-emergency-statutes'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'One sentence spanning war and a peacetime accident',
        text: 'The Norwegian drafting choice is the opposite of the Swiss one and is equally deliberate. It treats the distinction between war and peace as a fact about the situation rather than a fact about which body is competent.',
      },
      {
        kind: 'paragraph',
        text: 'Above the national level the picture is deliberately thin, and the treaty says so. Article 6(f) of the Treaty on the Functioning of the European Union places civil protection among the areas where the Union may only *support, coordinate or supplement* Member State action, and Article 1(3) of the Union Civil Protection Mechanism decision expressly preserves Member States’ primary responsibility for protecting people, environment and property on their own territory.',
        claim: 'fact',
        sources: ['eu-civil-protection-mechanism'],
      },
      {
        kind: 'paragraph',
        text: 'Which sets the ceiling on what the Mechanism can be. It runs a standing coordination centre and a request-based assistance system; it does not hold a competence that could displace a national one, because the Treaty did not give it one.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The field is also still being built. Kenya’s National Disaster Risk Management Act, Act No. 16 of 2026, establishes a National Disaster Risk Management Authority and, matching the devolved structure of Kenyan government, a County Disaster Risk Management Committee in each county.',
        claim: 'fact',
        sources: ['ke-disaster-risk-management-act-2026'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two currency traps in one paragraph',
        text: 'The Kenyan framework is months old, so material written before mid-2026 describes a different arrangement. And Sweden’s national agency is no longer named what most writing calls it: the body instituted by förordning (2008:1002) is now the Myndigheten för civilt försvar, the Riksdag recording the change of heading with effect from 1 January 2026. Either mistake would make an otherwise careful page wrong.',
      },
      {
        kind: 'paragraph',
        text: 'That Swedish instruction gives the agency a national coordinating responsibility for civil defence, societal crisis preparedness and protection against accidents — the same three-part span Norway puts in one purpose clause, allocated to one body rather than stated as a statutory purpose.',
        claim: 'fact',
        sources: ['se-civil-defence-agency'],
      },
    ],
    misconceptions: [
      {
        claim: 'Civil protection and civil defence are two names for the same thing.',
        reality:
          'Not in every system. Switzerland assigns protection against the effects of armed conflict and deployment in disasters to two separate paragraphs of Article 61, and Germany splits the two between the federation and the Länder.',
      },
      {
        claim: 'Civil defence is a wartime relic with no current legal content.',
        reality:
          'It is a live federal competence in both systems described here. Germany’s ZSKG defines the Zivilschutz task in operative terms, and Switzerland’s Article 61(1) makes the legislation a federal matter.',
      },
      {
        claim:
          'A country with a national civil-protection statute has a national civil-protection system.',
        reality:
          'That does not follow. Germany’s federal statute is executed by the Länder on federal commission under their own disaster-protection rules, and the Act states expressly that their competence for operational crisis management is unaffected.',
      },
      {
        claim: 'The European Union runs civil protection for its member states.',
        reality:
          'It cannot. Civil protection is a supporting competence under Article 6(f) TFEU, and the Mechanism decision expressly preserves each Member State’s primary responsibility on its own territory.',
      },
      {
        claim: 'Civil protection is emergency response.',
        reality:
          'Response is part of it. The Norwegian purpose clause also covers protection of critical infrastructure and the marshalling of civil society’s resources, and the German statute covers warning of the population, shelter and the protection of cultural property.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five systems, four ways to place the same function.',
      },
      {
        kind: 'list',
        items: [
          'Two constitutional paragraphs, one for armed conflict and one for disasters — Switzerland, BV Art. 61(1) and (2).',
          'A federal task for war effects, with disaster protection left to the Länder and the federal Act executed on commission — Germany, ZSKG §§ 1 and 2(1).',
          'One statutory purpose spanning war, the threat of war, danger to the realm, and peacetime events — Norway, sivilbeskyttelsesloven § 1.',
          'A supporting supranational competence that cannot displace the national one — EU, TFEU Art. 6(f) with Decision 1313/2013 Art. 1(3).',
          'A brand-new statutory authority with a matching committee in every county — Kenya, National Disaster Risk Management Act 2026 ss. 5 and 31.',
          'A national coordinating agency constituted by instruction, recently renamed — Sweden, förordning (2008:1002).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not established here',
        text: 'No cantonal or Land instrument was read. Germany’s operational level in particular is a Land competence and is not described. That is a gap in this platform’s sourcing, not a finding about how those levels work.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Where a function is split between levels of government, the question a person harmed by a failure has to answer first is which level owed the duty. Germany’s Act answers it expressly — the Länder act on federal commission and their operational competence is unaffected — which is more useful to that person than a general statement that the federation is responsible for civil protection.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The supranational layer has the same property in reverse. Because the Union’s competence is a supporting one, a Member State cannot answer for a failure by pointing upward: Article 1(3) of the Mechanism decision leaves primary responsibility where it was.',
        claim: 'fact',
        sources: ['eu-civil-protection-mechanism'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what public safety covers](/public-safety/what-public-safety-covers), [who is in charge in an emergency](/public-safety/who-is-in-charge-in-an-emergency), and [how policing is divided between levels](/law-enforcement/how-policing-is-divided-between-levels).',
      },
    ],
  },
  {
    slug: 'who-is-in-charge-in-an-emergency',
    title: 'Who is in charge in an emergency',
    shortTitle: 'Who is in charge',
    question: 'When a flood or a major accident happens, which body is legally responsible?',
    summary:
      'Usually the lowest level that can cope, and often not the one people expect. Norway gives the default lead to the police by ordinary statute; Japan gives it to the municipal mayor; Czechia names four basic components of one rescue system. None of them starts at the centre.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-civil-protection-is',
      'national-and-local-emergency-authority',
      'police-command-and-coordination',
    ],
    sources: [
      'no-emergency-statutes',
      'jp-disaster-management-basic-act',
      'cz-crisis-management-acts',
      'ie-emergency-management',
      'ca-emergency-management-act',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['public-safety', 'jurisdiction', 'accountability'],
    countryExamples: [
      {
        countrySlug: 'norway',
        note: 'Places the DEFAULT lead with the police by ordinary statute: politiloven § 27 makes it the police’s task to initiate and organise rescue effort where life or health is threatened, unless another authority is charged with the responsibility.',
      },
      {
        countrySlug: 'japan',
        note: 'Places operational primacy with the municipality, not the police and not the centre. The mayor implements emergency measures; police and coast guard may exercise the mayor’s restricted-area power only subsidiarily.',
      },
      {
        countrySlug: 'czechia',
        note: 'Names four basic components of one integrated rescue system, with the Fire Rescue Corps first and the Police of the Czech Republic fourth — the reverse of the ordering an outsider would guess.',
      },
    ],
    uncertainty: [
      'Four systems are described from primary text and one government self-description. What any other system does was not researched.',
      'This page states which body holds legal responsibility. It describes no response procedure, no command arrangement in operation, and nothing about how any incident was or should be handled.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Somebody has to be legally responsible, and the answer is written down. It is rarely the answer a reader expects, it differs sharply between systems that otherwise look alike, and in three of the four described here the starting point is local rather than national.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes statutory allocations of responsibility. It gives no guidance for an emergency, describes no operational procedure, and is not legal advice. Anyone in an emergency should contact their local emergency services.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason to fix responsibility in advance is that an emergency is the worst possible time to work out who holds it. Two organisations that each believe the other has the lead produce the same outcome as no organisation at all, and the cost is measured in the interval before anyone acts.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the answer is usually local',
        text: 'The body already present is the body that can act first, and every additional layer between the incident and the decision costs time. Systems that centralise the lead have to justify the delay; systems that localise it have to solve the harder problem of what happens when the local level is overwhelmed — which is a different page.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Norway gives the police the default lead, and does it in the ordinary Police Act rather than in an emergency statute. Section 27 of the politilov provides that it falls to the police to initiate and organise rescue effort where life or health is threatened, *hvis ikke en annen myndighet er pålagt ansvaret* — unless another authority is charged with the responsibility — and, in accident and disaster situations, to take the measures necessary to avert danger and limit damage, organising and coordinating the relief effort until another authority takes responsibility over.',
        claim: 'fact',
        sources: ['no-emergency-statutes'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A default, expressly stated as one',
        text: 'The words that matter are "unless another authority is charged with the responsibility" and "until responsibility is taken over". Norway is not saying the police own rescue; it is saying the police hold it while nobody else does, which is a rule about gaps rather than a rule about ownership.',
      },
      {
        kind: 'paragraph',
        text: 'Japan puts operational primacy with the municipality. Under the Basic Act on Disaster Management the mayor of a municipality must promptly implement fire-fighting, flood prevention, rescue and other emergency measures, and escalation runs upward by request rather than downward by command.',
        claim: 'fact',
        sources: ['jp-disaster-management-basic-act'],
      },
      {
        kind: 'paragraph',
        text: 'The Act then draws the subsidiarity line explicitly for other bodies. Police officers and coast guard officers may exercise the mayor’s restricted-area power only where the mayor or an official exercising the mayor’s authority is not on site, or on the mayor’s request, and must notify the mayor afterwards. Self-Defence Forces personnel on disaster relief may exercise it only where neither the mayor nor anyone able to exercise the mayor’s authority is present.',
        claim: 'fact',
        sources: ['jp-disaster-management-basic-act'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The most precise civil-primacy rule in the wave',
        text: 'A power is defined once and given to a civilian office. Everyone else — police, coast guard, military — may exercise the same power only in the office-holder’s absence, and must tell them afterwards. That is a stronger statement of civilian primacy than a declaration of principle, because it is enforceable in the individual case.',
      },
      {
        kind: 'paragraph',
        text: 'Czechia constitutes a single system and names its members in statutory order. The basic components of the integrated rescue system are the Fire Rescue Corps of the Czech Republic, fire-protection units in the region’s area-coverage plan, providers of the emergency medical service, and the Police of the Czech Republic. Other components include allocated forces and resources of the armed forces, other armed security corps, public-health protection bodies, civil-protection facilities and non-profit organisations.',
        claim: 'fact',
        sources: ['cz-crisis-management-acts'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where the armed forces sit in that list',
        text: 'Not among the basic components. Allocated forces and resources of the armed forces are an "other component", alongside non-profit organisations and citizens’ associations — a structural statement about who is normally expected to do this work.',
      },
      {
        kind: 'paragraph',
        text: 'Ireland describes its own arrangements as resting on three designated Principal Response Agencies — An Garda Síochána, the Health Service Executive and the Local Authorities — any one of which may declare a major emergency. The Department that operates the framework describes the National Directorate for Fire and Emergency Management as a section within the Department rather than a free-standing agency.',
        claim: 'fact',
        sources: ['ie-emergency-management'],
      },
      {
        kind: 'paragraph',
        text: 'Canada goes further in the same direction and constitutes no body at all. Under the Emergency Management Act the Minister is responsible for exercising leadership relating to emergency management in Canada by coordinating among government institutions and in cooperation with the provinces, and the Act defines a "provincial emergency" as one occurring in a province where the province or a local authority has the primary responsibility for dealing with it.',
        claim: 'fact',
        sources: ['ca-emergency-management-act'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Five institutional forms, one function',
        text: 'Across the fourteen systems researched for this wave the civil-protection function is discharged by a standing agency in six, by a centre inside a department in one, by a council in a cabinet office in one, by a statutory system of named partners in four, and — in Ireland — by a section of a ministry. Five forms, and the modal one accounts for fewer than half. The function recurs everywhere; the institution recurs only loosely, which is why this platform describes it in prose rather than adding an institution type for it.',
      },
    ],
    misconceptions: [
      {
        claim: 'The national government is in charge when a disaster happens.',
        reality:
          'Not as the starting point in any of these systems. Japan gives operational primacy to the municipal mayor, Norway to the police as a default, Czechia to an integrated system whose first named component is the Fire Rescue Corps.',
      },
      {
        claim: 'The police are in charge of emergencies.',
        reality:
          'Not as a general rule, and not unconditionally where they do hold the lead. Norway’s § 27 gives the police the lead unless another authority is charged with it and until another takes over; in Czechia’s integrated system the police are the fourth of four basic components.',
      },
      {
        claim: 'When soldiers arrive at a disaster, they take over.',
        reality:
          'Not in the systems described here. Japan’s Act lets Self-Defence Forces personnel exercise a mayor’s restricted-area power only where neither the mayor nor anyone able to exercise the mayor’s authority is present, and Czechia places the armed forces among the "other components" of its rescue system.',
      },
      {
        claim: 'Every country has a national disaster agency that runs the response.',
        reality:
          'Several have no such body at all. In four of the systems researched the statute constitutes a system of named partners rather than an institution, and Ireland’s directorate is a section within a department.',
      },
      {
        claim: 'Whoever arrives first is in charge.',
        reality:
          'That is what these statutes exist to prevent. Responsibility is allocated in advance to a named office, and Japan’s Act requires anyone exercising a power in the office-holder’s absence to notify them afterwards.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four systems, four starting points.',
      },
      {
        kind: 'list',
        items: [
          'The police, by default and only until another authority takes over — Norway, politiloven § 27.',
          'The municipal mayor, with everyone else subsidiary and under a duty to notify — Japan, Basic Act on Disaster Management arts. 62–64.',
          'A statutory integrated system of four basic components, the armed forces being an "other" component — Czechia, zákon č. 239/2000 Sb. § 4.',
          'Three designated Principal Response Agencies, any of which may declare — Ireland, as described by the responsible Department.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each allocation is the law of its own country. The Irish description is the Department’s own account of arrangements it operates and is attributed to it as such rather than cited as a statutory provision. Nothing here supports a claim about any other country.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A named office is what makes a failure attributable. Where a statute says the mayor must promptly implement emergency measures, there is a person who did or did not do so; where it says a system of partners will coordinate, the same failure has no addressee. That is not an argument for one design over the other, but it is the cost of the second one.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The notification duties do similar work at a smaller scale. Requiring a police officer who used a mayor’s power to tell the mayor afterwards creates a record of who exercised what, which is the precondition for [holding anyone to account](/justice/why-justice-systems-need-oversight) for it later.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [national and local emergency authority](/public-safety/national-and-local-emergency-authority), [military assistance to civil authorities](/public-safety/military-assistance-to-civil-authorities), and [police command and coordination](/law-enforcement/police-command-and-coordination).',
      },
    ],
  },
  {
    slug: 'national-and-local-emergency-authority',
    title: 'National and local emergency authority',
    shortTitle: 'National and local',
    question: 'When an emergency outgrows the authority handling it, what moves it up?',
    summary:
      'A legal step, not a phone call. Germany makes federal direction conditional on more than one Land being endangered; Switzerland lists the grounds on which the Confederation assumes command; Norway does the opposite and keeps responsibility where it already sat.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-is-in-charge-in-an-emergency',
      'what-civil-protection-is',
      'how-policing-is-divided-between-levels',
    ],
    sources: [
      'de-grundgesetz',
      'ch-bzg',
      'es-ley-17-2015',
      'us-stafford-act',
      'no-samfunnssikkerhetsinstruksen',
      'se-emergency-preparedness-statutes',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['jurisdiction', 'public-safety'],
    countryExamples: [
      {
        countrySlug: 'germany',
        note: 'Conditions federal direction on a stated fact: the Federal Government may instruct Land governments only where the disaster or accident endangers the territory of MORE THAN ONE Land, and its measures must be rescinded at any time on the Bundesrat’s demand.',
      },
      {
        countrySlug: 'switzerland',
        note: 'Lists the grounds on which the Confederation takes command — matters for which it is competent, armed conflicts, and events affecting several cantons or the whole country — rather than leaving escalation to discretion.',
      },
      {
        countrySlug: 'spain',
        note: 'Creates a sub-constitutional escalation, the emergencia de interés nacional, declared by the Interior Minister, which is distinct from the Article 116 states and expressly includes emergencies requiring application of LO 4/1981.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'norway',
        note: 'The counter-case to escalation itself. The ansvarsprinsippet in the samfunnssikkerhetsinstruks provides that the organisation responsible for a field in a normal situation also bears responsibility for preparedness and for handling extraordinary events — so the default is that nothing moves.',
      },
    ],
    uncertainty: [
      'Five national systems and one cross-government instruction are described — Germany, Switzerland, Spain and the United States from statute, Sweden from ordinary statute, and Norway from the samfunnssikkerhetsinstruks. Whether any of these thresholds has ever been met, and what happened, was not researched and is not stated.',
      'No sub-national instrument was read in any federal system described here, so the receiving end of each escalation is not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Escalation sounds operational and is usually legal. In the systems described here, an emergency does not move up a level because it has become serious; it moves because a stated condition has been met and a named authority has taken a step that the law provides for. The condition is generally about territory or capability, not about severity.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes legal thresholds for escalation between levels of government. It describes no operational arrangement, no command structure in use, and nothing about how any emergency has been handled. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Two failures are available. A level that cannot call for help fails the people in front of it; a level that can be overridden at will has no responsibility of its own, and a responsibility that can be taken away at any moment is not one anybody plans around. The threshold is where a system decides how much local responsibility is worth.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the condition is usually territorial',
        text: 'A capability test is a judgement about someone else’s competence and is contestable at exactly the moment nobody has time to contest it. A territorial test — does this cross a boundary — is a question of fact that can be answered quickly and reviewed afterwards. Two of the systems here use one, and it is the more common design.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany builds the whole escalation into one constitutional article and separates request from direction. Article 35(2) sentence 2 of the Basic Law lets a Land call for police forces of other Länder, personnel and facilities of other administrations, of the Federal Border Police and of the armed forces to assist in a natural disaster or a particularly serious accident.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'Article 35(3) is the different step. Where the disaster or accident endangers the territory of more than one Land, the Federal Government may instruct Land governments to place police forces at other Länder’s disposal and may deploy Federal Border Police and armed forces units in support of the police, *soweit es zur wirksamen Bekämpfung erforderlich ist*. Measures taken under it must be rescinded at any time on the Bundesrat’s demand, and otherwise without delay once the danger is removed.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Three conditions in one paragraph',
        text: 'A factual threshold — more than one Land endangered. A necessity limit — only so far as required for effective response. And an off-switch held by the chamber representing the Länder. The paragraph grants a power and bounds it in the same breath.',
      },
      {
        kind: 'paragraph',
        text: 'Switzerland states the grounds rather than a single threshold. Article 7 of the Bevölkerungs- und Zivilschutzgesetz provides that the Confederation assumes command and coordination in catastrophes and emergencies for whose handling it is competent, and in armed conflicts; and for events affecting several cantons, the whole of Switzerland or neighbouring countries it coordinates the response in agreement with the cantons.',
        claim: 'fact',
        sources: ['ch-bzg'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: '"In agreement with the cantons" is the operative phrase',
        text: 'It distinguishes the two limbs of the same article. Where the Confederation is competent, it commands. Where the event merely crosses cantonal boundaries, it coordinates by agreement — which is a weaker verb attached to a lower threshold, and the pairing is the design rather than an inconsistency.',
      },
      {
        kind: 'paragraph',
        text: 'Spain adds a tier below its constitutional emergency regimes. Articles 28 to 30 of Ley 17/2015 define an *emergencia de interés nacional*, which expressly includes emergencies requiring application of Ley Orgánica 4/1981 for the protection of persons and property, and which is declared by the Minister of the Interior. Once declared, the Minister assumes the direction of the emergency.',
        claim: 'fact',
        sources: ['es-ley-17-2015'],
      },
      {
        kind: 'paragraph',
        text: 'The United States routes escalation through a request and then makes one narrow exception to it. Under 42 U.S.C. § 5170(a) a Governor requesting a major disaster declaration must have taken appropriate response action under State law and directed execution of the State’s emergency plan; § 5170(b) gives the Chief Executive of an affected Indian tribal government a parallel power to request one directly.',
        claim: 'fact',
        sources: ['us-stafford-act'],
      },
      {
        kind: 'paragraph',
        text: 'The exception is confined to emergency declarations. Section 5191(b) permits the President to act *without regard to* the request requirement where primary responsibility for response rests with the United States because the emergency involves a subject area of exclusive or preeminent federal responsibility — while still requiring consultation with the Governor of any affected State if practicable. Major-disaster declarations under § 5170 have no equivalent override.',
        claim: 'fact',
        sources: ['us-stafford-act'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A distinction worth keeping straight',
        text: 'Two different declarations, two different rules. Treating the § 5191(b) override as though it applied to major-disaster declarations would describe a federal power that does not exist, and dropping the consultation requirement would describe one broader than the statute grants.',
      },
      {
        kind: 'paragraph',
        text: 'Norway answers the question by declining it. Its cross-government instruction states the *ansvarsprinsippet*: the organisation responsible for a field in a normal situation also bears responsibility for necessary preparedness measures and for handling extraordinary events in that field.',
        claim: 'fact',
        sources: ['no-samfunnssikkerhetsinstruksen'],
      },
      {
        kind: 'paragraph',
        text: 'Which is a real design choice and not an absence of one. A system built on that principle does not need an escalation threshold for most events, because nothing is supposed to change hands — and the argument for it is precisely that a body which has been doing something all year is better placed than one that arrives on the day.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Sweden reaches a similar place by a different route: it escalates inside the municipality rather than upward from it. Every municipality and region must have a crisis management committee — a *krisledningsnämnd* — to discharge tasks during extraordinary events in peacetime, and the municipality is separately the primary duty-bearer for protection against accidents under the lag om skydd mot olyckor.',
        claim: 'fact',
        sources: ['se-emergency-preparedness-statutes'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where the far-reaching powers actually sit',
        text: 'Not in an emergency decree. Swedish rescue commanders may enter property, cordon off or evacuate areas and use, remove or destroy property under ordinary statute, subject to an express test: only where danger to life, health, property or the environment cannot suitably be prevented in another way. The power is large, the authority is ordinary, and the limit is written beside it.',
      },
    ],
    misconceptions: [
      {
        claim: 'When an emergency gets serious enough, the national government takes over.',
        reality:
          'Seriousness is not the test in any system described here. Germany’s Article 35(3) turns on whether more than one Land is endangered; Switzerland’s Article 7 BZG turns on competence and on how many cantons are affected.',
      },
      {
        claim: 'Federal assistance means federal control.',
        reality:
          'Germany separates them in consecutive paragraphs: Article 35(2) is a Land requesting help, Article 35(3) is the Federal Government directing, and only the second has a territorial threshold and a Bundesrat off-switch.',
      },
      {
        claim: 'Every emergency reallocates responsibility to a higher level.',
        reality:
          'Norway’s responsibility principle does the opposite by design — whoever owns a field in normal times owns it in an extraordinary event, so the default is that nothing moves.',
      },
      {
        claim: 'In the United States the President can declare a disaster wherever he likes.',
        reality:
          'Not for a major disaster. That route is request-gated under 42 U.S.C. § 5170, and the § 5191(b) override applies only to emergency declarations and only where primary responsibility rests with the United States.',
      },
      {
        claim: 'Escalation is an operational decision made on the ground.',
        reality:
          'It is a legal step with a named actor. A Land calls, a Federal Government instructs, a Minister declares, a Governor requests — and each of those is provided for in a text that also states when it may be undone.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six systems, six answers.',
      },
      {
        kind: 'list',
        items: [
          'More than one Land endangered, only so far as necessary, revocable on the Bundesrat’s demand — Germany, GG Art. 35(3).',
          'Federal competence or armed conflict for command; several cantons or the whole country for coordination in agreement — Switzerland, BZG Art. 7.',
          'A sub-constitutional emergency of national interest, declared by the Interior Minister — Spain, Ley 17/2015 Arts. 28–30.',
          'A State or tribal request, with a narrow federal-responsibility override for emergency declarations only — United States, 42 U.S.C. §§ 5170 and 5191(b).',
          'No default escalation at all — Norway, the ansvarsprinsippet.',
          'Escalation inside the municipality rather than upward from it, with far-reaching powers held under ordinary statute — Sweden, lag (2006:544) and lag (2003:778).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not established here',
        text: 'No Land, cantonal, Autonomous Community or State instrument was read. What each of these escalations looks like from below is not described, and the omission is a gap in this platform’s sourcing rather than a finding.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'An escalation threshold is also an accountability boundary. If federal direction requires more than one Land to be endangered, then a federal instruction issued where only one was is unlawful and can be said so afterwards — which is only possible because the condition was written down in advance.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The off-switches matter for the same reason. Germany’s Article 35(3) requires measures to be rescinded at any time on the Bundesrat’s demand and otherwise without delay once the danger is removed, which means the end of the emergency is a legal event with an addressee rather than a matter of the federal government losing interest.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who is in charge in an emergency](/public-safety/who-is-in-charge-in-an-emergency), [military assistance to civil authorities](/public-safety/military-assistance-to-civil-authorities), and [how policing is divided between levels](/law-enforcement/how-policing-is-divided-between-levels).',
      },
    ],
  },
  {
    slug: 'military-assistance-to-civil-authorities',
    title: 'Military assistance to civil authorities',
    shortTitle: 'Military assistance',
    question: 'When soldiers are sent to help at home, who is actually in command?',
    summary:
      'The civil authority decides whether and for what — a police request, a governor’s request, an express constitutional permission, a criminal prohibition. Command of the deployed force stays military, and one of these statutes says so in terms, which is a distinction the phrase “in command” usually loses.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-is-in-charge-in-an-emergency',
      'national-and-local-emergency-authority',
      'police-and-law-enforcement-difference',
    ],
    sources: [
      'us-military-domestic-deployment',
      'de-grundgesetz',
      'au-defence-act-callout',
      'no-constitution',
      'jp-self-defense-forces-act',
      'ie-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['jurisdiction', 'accountability', 'public-safety'],
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'States the boundary as a CRIMINAL prohibition rather than an allocation: 18 U.S.C. § 1385 makes it an offence to use the armed forces to execute the laws except where expressly authorised by the Constitution or an Act of Congress.',
      },
      {
        countrySlug: 'australia',
        note: 'Subordinates the deployed force to civil policing in operative terms — the ADF must not be used for a particular task in a State or Territory unless a police member of that jurisdiction requests it — and separately forbids using it to stop or restrict protest, dissent, assembly or industrial action except where death, serious injury or serious property damage is reasonably likely.',
      },
      {
        countrySlug: 'norway',
        note: 'Puts the bar in the Constitution itself: § 25(3) provides that the Government has no right to use military force against the inhabitants except pursuant to statute, save where an assembly disturbs the public peace and does not immediately disperse after the law has been read to it.',
      },
      {
        countrySlug: 'japan',
        note: 'Makes disaster dispatch request-driven from a prefectural governor, and lets Self-Defence Forces personnel exercise a municipal mayor’s restricted-area power only where neither the mayor nor anyone able to exercise it is present.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'ireland',
        note: 'The counter-case on remedies rather than on command. Article 40.4.5 of the Constitution provides that nothing in the habeas corpus section may be invoked to prohibit, control or interfere with any act of the Defence Forces during the existence of a state of war or armed rebellion — so the ordinary route of challenge is expressly withdrawn in that situation.',
      },
    ],
    uncertainty: [
      'Six systems are described from primary text — the United States, Germany, Australia, Norway, Japan and Ireland. Whether any of these powers has been used, how often, or with what result was not researched and is not stated.',
      'This page describes legal boundaries. It contains nothing about deployments, capabilities, locations, tactics or rules of engagement, and no such material was researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Soldiers appear at floods, earthquakes and sandbagged rivers in most countries, and their presence tells a reader almost nothing about who is in command. The legal question is separate from the visible one: what power do they hold while they are there, whose instructions do they take, and what may they not be used for at all.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes constitutional and statutory boundaries on domestic use of armed forces. It contains no operational, tactical or deployment information of any kind, describes no capability, and is not legal advice. It states nothing about any actual deployment.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Armed forces bring things civil authorities often lack at scale and at speed: transport, engineering, logistics, communications, and large numbers of organised people. The reason systems still fence that capability round is not squeamishness — it is that an organisation trained and equipped for armed conflict is holding a different tool from the one a flood requires, and the boundary is what keeps the tool matched to the task.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The two things this page keeps apart',
        text: 'Assistance is not government, and deployment is not a transfer of authority. Every instrument below authorises a military organisation to do something inside its own country while leaving the civil authority in charge of it. A page that ran those together would describe something none of these systems provides for.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The United States states the boundary as a criminal prohibition and then supplies the exception separately. Under 18 U.S.C. § 1385, whoever, except in cases and under circumstances expressly authorized by the Constitution or Act of Congress, wilfully uses any part of the Army, the Navy, the Marine Corps, the Air Force or the Space Force as a *posse comitatus* or otherwise to execute the laws commits an offence.',
        claim: 'fact',
        sources: ['us-military-domestic-deployment'],
      },
      {
        kind: 'paragraph',
        text: 'The Insurrection Act is that express authorisation, and it is not one rule but several. Under 10 U.S.C. § 251, where there is an insurrection in a State against its government, the President may act *upon the request of its legislature or of its governor if the legislature cannot be convened*.',
        claim: 'fact',
        sources: ['us-military-domestic-deployment'],
      },
      {
        kind: 'paragraph',
        text: 'The neighbouring sections are not conditioned on a request. Section 252 reaches unlawful obstructions, combinations or assemblages, or rebellion against the authority of the United States, that make it impracticable to enforce the laws by the ordinary course of judicial proceedings — a ground that turns on the situation rather than on who asked.',
        claim: 'fact',
        sources: ['us-military-domestic-deployment'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Why the two must be read together',
        text: 'Section 1385 alone would describe a country whose military may never act domestically, which is wrong. Section 251 alone would describe a power that always requires a State to ask, which is also wrong — § 252 does not. The structure is a prohibition displaced only by an express authorisation, and the conditions attach to the particular section relied on rather than to the Act as a whole.',
      },
      {
        kind: 'paragraph',
        text: 'Germany makes the same point as a constitutional rule about permission. Article 87a(2) provides that *außer zur Verteidigung dürfen die Streitkräfte nur eingesetzt werden, soweit dieses Grundgesetz es ausdrücklich zuläßt* — apart from defence, the armed forces may be deployed only insofar as the Basic Law expressly permits.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'Where Article 87a(4) does permit internal deployment — to avert a danger to the existence or free democratic basic order of the Federation or a Land, where the conditions of Article 91(2) are met and police and Federal Border Police do not suffice — the deployment must be discontinued if the Bundestag or the Bundesrat so demands.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Either chamber, on demand',
        text: 'Not a majority of both, and not subject to a threshold. A power that can be switched off by one chamber acting alone is a power exercised on sufferance, and that is the design.',
      },
      {
        kind: 'paragraph',
        text: 'Australia writes the subordination into the operative sections. Under the Defence Act 1903, as far as reasonably practicable the Defence Force must assist and cooperate with State and Territory police, and it is not to be utilised for any particular task in those jurisdictions — except in relation to airborne aircraft — unless a member of the police force of that jurisdiction requests it.',
        claim: 'fact',
        sources: ['au-defence-act-callout'],
      },
      {
        kind: 'paragraph',
        text: 'And the same section that requires the police request refuses to turn it into command. Section 40(3) provides that subsection (1) *does not require or permit the Chief of the Defence Force to transfer to any extent command of the Defence Force to a State or Territory, or to a police force or member of the police force of that State or Territory*.',
        claim: 'fact',
        sources: ['au-defence-act-callout'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title:
          'Two different questions, and only one of them is answered “the civil authority”',
        text: 'Whether the force may be used at all, and for what task, is decided by a civil authority in every instrument on this page. Who commands the force while it is doing that task is a separate question, and Australia answers it expressly: command is not transferred. A page that ran the two together would describe soldiers taking orders from a sergeant, which is not what any of these statutes provides for — and it would make the civilian-primacy point sound stronger than it is while actually describing something weaker.',
      },
      {
        kind: 'paragraph',
        text: 'The same Act contains an express civil-liberties restraint. The Chief of the Defence Force must not use the Defence Force to *stop or restrict any protest, dissent, assembly or industrial action*, except where there is a reasonable likelihood of the death of, or serious injury to, persons, or of serious damage to property.',
        claim: 'fact',
        sources: ['au-defence-act-callout'],
      },
      {
        kind: 'paragraph',
        text: 'And civil-emergency use sits outside that regime entirely. Section 123AA is a ministerial-direction and immunity scheme for Defence assistance in preparing for, responding to or recovering from a natural disaster or other emergency, and it confers no coercive power.',
        claim: 'fact',
        sources: ['au-defence-act-callout'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two doors, and only one of them has powers behind it',
        text: 'A call out under Part IIIAAA and disaster assistance under s. 123AA are different legal events. Sandbagging a river is the second, and nothing about it puts a soldier in the position of a constable.',
      },
      {
        kind: 'paragraph',
        text: 'Norway states the limit in the Constitution. Section 25(3) of the Grunnlov provides that the Government has no right to use military force against the inhabitants except pursuant to statute, unless an assembly disturbs the public peace and does not immediately disperse after the articles of the law concerning riot have been read aloud to it by the civil authority.',
        claim: 'fact',
        sources: ['no-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Japan approaches it from the other end, through who asks. Article 83 of the Self-Defense Forces Act provides that a prefectural governor or other person specified by Cabinet Order may request the dispatch of units to the Defence Minister where necessary for the protection of human life or property in a disaster, and the Minister may dispatch units for relief where such a request has been made and the situation is unavoidable.',
        claim: 'fact',
        sources: ['jp-self-defense-forces-act'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Five instruments, one shape',
        text: 'A prohibition displaced by express authorisation; a constitutional permission requirement with a parliamentary off-switch; a statutory duty to act only at police request with a named exclusion; a constitutional bar on force against the inhabitants; and a request-driven dispatch. Different traditions, different drafting, and the same answer to the question they all address — who decides that the force is used, and for what.',
      },
    ],
    misconceptions: [
      {
        claim: 'Sending in the army means the military is running things.',
        reality:
          'Not under any instrument described here. Australia’s Act requires a police request before the Defence Force is used for a particular task; Japan’s dispatch is requested by a prefectural governor; Germany requires the Basic Law to permit the deployment expressly.',
      },
      {
        claim: 'A deployment transfers civilian authority to the military commander.',
        reality:
          'It does not. Australia’s disaster-assistance section confers no coercive power at all, and Japan lets Self-Defence Forces personnel exercise a mayor’s power only where nobody able to exercise it is present.',
      },
      {
        claim: 'Every country allows its armed forces the same domestic role.',
        reality:
          'They do not. The United States makes domestic use to execute the laws a criminal offence absent express authorisation, Norway bars military force against the inhabitants except pursuant to statute, and Germany permits non-defence deployment only where the Basic Law expressly allows it.',
      },
      {
        claim:
          'Once soldiers are deployed domestically, only the government can send them home.',
        reality:
          'Not in Germany. An Article 87a(4) deployment must be discontinued if the Bundestag or the Bundesrat so demands — either chamber, acting alone.',
      },
      {
        claim: 'Soldiers helping after a disaster have police powers.',
        reality:
          'Not by virtue of being there. Australia’s s. 123AA assistance scheme confers no coercive power, and Japan’s Act makes the mayor’s power exercisable by others only in the mayor’s absence.',
      },
      {
        claim: 'Armed forces can be used to manage a protest.',
        reality:
          'Australia forbids it in terms, except where death, serious injury or serious property damage is reasonably likely; Norway’s constitutional exception is confined to an assembly that does not disperse after the riot provisions have been read aloud by the civil authority.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five techniques for one boundary.',
      },
      {
        kind: 'list',
        items: [
          'A criminal prohibition displaced only by express authorisation — United States, 18 U.S.C. § 1385 with 10 U.S.C. § 251.',
          'A constitutional permission requirement, with either chamber able to end the deployment — Germany, GG Art. 87a(2) and (4).',
          'A statutory duty to act only at police request, with protest and industrial action expressly excluded — Australia, Defence Act 1903 ss. 39–40.',
          'A constitutional bar on military force against the inhabitants except pursuant to statute — Norway, Grunnloven § 25(3).',
          'A request-driven dispatch initiated by a prefectural governor — Japan, Self-Defense Forces Act art. 83.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each provision is the law of its own country and is described from its own text. None is a model for any other, and the fact that five systems reach a similar answer does not make it a general rule — the systems not researched are simply not described.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The most useful feature of these provisions is that they create addressees. A deployment that required a police request either had one or did not; a use of the force against a protest either met the statutory exception or did not. Each is a question with an answer, which is what makes the boundary enforceable rather than declaratory.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Ireland shows what the absence of that looks like. Article 40.4.5 provides that nothing in the habeas corpus section may be invoked to prohibit, control or interfere with any act of the Defence Forces during a state of war or armed rebellion — so in that situation the ordinary route of challenge is not narrowed but withdrawn.',
        claim: 'fact',
        sources: ['ie-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Recording that is not an argument that Ireland has it wrong. It is the reason a comparative page has to say which system it is describing: the same sentence about the ordinary route of challenge is true of the five systems above and false of Ireland during a state of war or armed rebellion.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who is in charge in an emergency](/public-safety/who-is-in-charge-in-an-emergency), [gendarmerie](/institutions/gendarmerie), and [police and law enforcement are not the same thing](/law-enforcement/police-and-law-enforcement-difference).',
      },
    ],
  },
  {
    slug: 'what-a-state-of-emergency-changes',
    title: 'What a state of emergency changes',
    shortTitle: 'What it changes',
    question: 'What actually changes in law when a government declares a state of emergency?',
    summary:
      'Less, and more specifically, than the phrase suggests. Two constitutions answer it with closed lists of what may be done; one bars amending the constitution while it runs; two systems have no such regime at all, and handle emergencies under ordinary law.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-can-declare-a-state-of-emergency',
      'how-emergency-powers-end',
      'which-rights-can-never-be-suspended',
    ],
    sources: [
      'br-cf-1988',
      'es-constitution',
      'cz-security-act',
      'jp-constitution',
      'za-disaster-management-act-2002',
      'au-national-emergency-declaration-act',
      'br-lei-12608-2012',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['rule-of-law', 'due-process', 'legal-certainty'],
    countryExamples: [
      {
        countrySlug: 'brazil',
        note: 'Answers with a closed list twice over: Art. 136 §1 enumerates what may be restricted under an estado de defesa, and Art. 139 provides that under an estado de sítio on the Art. 137(I) ground ONLY seven listed measures may be taken against persons.',
      },
      {
        countrySlug: 'spain',
        note: 'Answers with a closed list of suspendable rights in Art. 55(1) — and makes it unavailable in the mildest of the three regimes, since suspension is possible only under an estado de excepción or estado de sitio, never an estado de alarma.',
      },
      {
        countrySlug: 'czechia',
        note: 'Requires the answer to be given at the moment of declaration: Čl. 6(1) obliges the Government, simultaneously with declaring a nouzový stav, to specify which rights laid down in a special statute are restricted and to what extent.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'japan',
        note: 'Has no emergency chapter in its Constitution at all, and therefore no derogation or suspension clause. Limitation of Chapter III rights runs through the "public welfare" qualifier written into individual articles, which operates in ordinary times and in extraordinary ones alike.',
      },
    ],
    uncertainty: [
      'Five systems are described from primary text. What a declaration changes anywhere else was not researched.',
      'This page describes what the instruments permit. It states nothing about what any government has done under one, and nothing about whether any measure was justified.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A state of emergency is a legal act with a name, made under a named provision, that switches on a defined set of powers for a defined time. It is not a description of a situation and it is not a general licence. The most useful thing to know about it is that in the systems that provide for one, the constitution usually says in advance exactly what it makes available.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes what five legal systems provide for. It states no procedure, no deadline, no route of challenge and nothing about compliance with any measure, and it is not legal advice. It cannot indicate whether anything done under any declaration was lawful.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A government facing an armed insurrection or a catastrophe may need to do things ordinary law does not let it do — requisition property, restrict movement, spend without the usual authority. The alternative to providing for that in advance is not that it never happens; it is that it happens without a legal basis, without a time limit, and without anyone having decided beforehand what is off limits.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why a closed list is the strongest form',
        text: 'A provision that lists what may be done answers the hard question at the moment of drafting, when nobody is under pressure, rather than at the moment of use, when everyone is. It also inverts the burden of argument: the question stops being whether a measure is justified and becomes whether it is on the list.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Brazil enumerates twice. Under an *estado de defesa*, Article 136 §1 permits restrictions on the rights of assembly — including within associations — on the secrecy of correspondence, and on the secrecy of telegraphic and telephone communication, plus temporary occupation and use of public property in the event of a public calamity.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'Under an *estado de sítio* decreed on the Article 137(I) ground, Article 139 provides that *só poderão ser tomadas contra as pessoas as seguintes medidas* — only the following measures may be taken against persons — and then lists seven.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The word doing the work is "only"',
        text: 'Article 139 is not a list of examples. Anything not on it is unavailable, which makes the provision function as the inverse of a derogation clause: instead of naming what is protected, it names what may be reached.',
      },
      {
        kind: 'paragraph',
        text: 'Spain lists on the other side of the line, and then withholds the list from its mildest regime. Article 55(1) of the Constitution names the articles that may be suspended, and provides that they may be suspended only when an *estado de excepción* or an *estado de sitio* is declared — not an *estado de alarma*.',
        claim: 'fact',
        sources: ['es-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Which matters because the *alarma* is the regime a government reaches for first. A system with three graded states has decided that the easiest one to declare is the one that changes least.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Czechia requires the answer to be given when the declaration is made. Article 6(1) of the constitutional act on security provides that a *nouzový stav* may be declared only with a statement of reasons, for a defined time and for a defined territory, and that simultaneously with the declaration *musí vláda vymezit, která práva stanovená ve zvláštním zákoně* — the Government must specify which rights laid down in a special statute — are restricted and to what extent.',
        claim: 'fact',
        sources: ['cz-security-act'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Three constraints in one sentence',
        text: 'Reasons, a period, a territory — and then a specification of which rights are restricted and how far. A declaration that met three of those and not the fourth would not comply with the article, which is a more demanding standard than declaring an emergency and working the detail out afterwards.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil adds a structural lock that has nothing to do with rights. Article 60 §1 provides that the Constitution may not be amended while a federal intervention, an *estado de defesa* or an *estado de sítio* is in force.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The constitution provides for the emergency; it does not yield to it',
        text: 'A text that suspends its own amendment procedure during an emergency is saying that the emergency operates inside the constitutional order rather than above it. Spain does the same thing differently, providing that the Congress may not be dissolved while any of the three states is in force and that the functioning of the constitutional powers may not be interrupted.',
      },
      {
        kind: 'paragraph',
        text: 'And some systems provide for none of this. The Constitution of Japan contains no emergency chapter, and therefore no derogation or suspension clause: limitation of Chapter III rights runs through the *public welfare* qualifier written into individual rights articles, which operates in ordinary conditions and extraordinary ones alike.',
        claim: 'fact',
        sources: ['jp-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'South Africa shows a third possibility — that the same country may operate a disaster regime and an emergency regime side by side, with materially different controls. A national state of disaster under the Disaster Management Act lapses three months after declaration, may be terminated earlier by the Minister by notice in the Gazette, and may be extended by the Minister a month at a time.',
        claim: 'fact',
        sources: ['za-disaster-management-act-2002'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil has the same doubling, and it runs the other way. Alongside the constitutional regimes of Articles 136 to 141, Lei nº 12.608/2012 provides an ordinary disaster emergency — *situação de emergência* and *estado de calamidade pública* — which municipalities declare from the bottom up, and which is about protection and relief rather than about restricting rights.',
        claim: 'fact',
        sources: ['br-lei-12608-2012'],
      },
      {
        kind: 'paragraph',
        text: 'Australia shows a third technique: an emergency power drafted as a closed list of things it may touch. While a national emergency declaration is in force a responsible Minister may vary, disapply or substitute provisions of Commonwealth law dealing with an enumerated set of administrative formalities — writing, signature, production of documents, witnessing and the like — and section 15(8) expressly walls the power off from the criminal-procedure, intelligence, surveillance, interception and integrity statutes.',
        claim: 'fact',
        sources: ['au-national-emergency-declaration-act'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What that list is not',
        text: 'It is a power to switch off paperwork, not a power over people. A reader who saw "may vary or disapply Commonwealth law" and stopped reading would take it for something far larger than the section grants, and the exclusion in subsection (8) is where the drafter says so.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two regimes, and the weaker parliamentary control is on the disaster one',
        text: 'Extension of a South African state of emergency requires the National Assembly and escalating majorities. Extension of a state of disaster requires a ministerial notice. The country therefore has two answers to "what changes", and which one applies depends on which instrument was used — a distinction easily lost in ordinary usage, where both get called an emergency.',
      },
    ],
    misconceptions: [
      {
        claim: 'A state of emergency suspends the constitution.',
        reality:
          'The opposite is stated in two of these texts. Brazil’s Article 60 §1 bars amending the Constitution while a state of defence or state of siege is in force, and Spain’s Article 116(5) provides that the functioning of the constitutional powers may not be interrupted.',
      },
      {
        claim: 'A state of emergency lets a government do whatever the situation requires.',
        reality:
          'Not where the text is a closed list. Brazil’s Article 139 provides that only the seven listed measures may be taken against persons, and Czechia requires the Government to specify at the moment of declaration which rights are restricted and to what extent.',
      },
      {
        claim: 'Declaring any state of emergency allows rights to be suspended.',
        reality:
          'Not in Spain. Article 55(1) permits suspension only under an estado de excepción or an estado de sitio, and never under the estado de alarma — which is the regime most readily declared.',
      },
      {
        claim: 'Every country has a state of emergency in its constitution.',
        reality:
          'Japan’s Constitution has no emergency chapter and no derogation or suspension clause at all, and limitation of rights runs through the ordinary "public welfare" qualifier instead.',
      },
      {
        claim: 'A state of disaster and a state of emergency are the same thing.',
        reality:
          'Not in South Africa, which has both. A national state of disaster lapses after three months and is extended by ministerial notice; a state of emergency is limited to twenty-one days and extended only by the National Assembly on rising majorities.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five systems, four answers.',
      },
      {
        kind: 'list',
        items: [
          'A closed list of permitted measures, stated twice for two regimes — Brazil, CF Arts. 136 §1 and 139.',
          'A closed list of suspendable rights, unavailable in the mildest regime — Spain, CE Art. 55(1) with Art. 116.',
          'A duty to specify the restricted rights at the moment of declaration — Czechia, ústavní zákon č. 110/1998 Sb. Čl. 6(1).',
          'No emergency chapter in the constitution, so no derogation or suspension clause and the ordinary “public welfare” qualifier does the rights work — while a declared state of emergency disaster and a narrow Cabinet Order power sit in ordinary statute — Japan.',
          'Two parallel regimes with different controls — South Africa, Disaster Management Act 2002 alongside Constitution s. 37.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not established here',
        text: 'No source used on this page establishes what a declaration changes in any system other than the five named. Their absence is a gap in this platform’s sourcing and is not evidence either way.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Specifying in advance what an emergency makes available is what allows anyone to say afterwards that a particular measure was outside it. That is the practical value of a closed list: not that it prevents a government from acting, but that it makes the boundary of the action a question of law rather than of judgement.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The locks on the constitutional order do related work. A government that cannot amend the constitution or dissolve the chamber while the emergency runs cannot use the emergency to change the rules under which it will be judged for the emergency.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'None of which is an argument that these powers should not exist. Each of these constitutions provides for them deliberately, having decided that a state which cannot act in a catastrophe is not protecting anyone — and then having decided, equally deliberately, exactly how far the action may go.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who can declare a state of emergency](/public-safety/who-can-declare-a-state-of-emergency), [how emergency powers end](/public-safety/how-emergency-powers-end), and [limits on public power](/justice/limits-on-public-power).',
      },
    ],
  },
  {
    slug: 'who-can-declare-a-state-of-emergency',
    title: 'Who can declare a state of emergency',
    shortTitle: 'Who can declare',
    question: 'Who is legally able to declare one, and does anyone else have to agree?',
    summary:
      'No two systems answer alike. Czechia and Spain each run three regimes with three different declaring authorities; Germany requires a two-thirds Bundestag vote before the state of defence; Ireland needs a resolution of both Houses; South Africa’s Constitution does not name the declaring authority at all.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-a-state-of-emergency-changes',
      'how-emergency-powers-end',
      'reviewing-an-emergency-declaration',
    ],
    sources: [
      'cz-security-act',
      'es-lo-4-1981',
      'de-grundgesetz',
      'za-state-of-emergency-act-1997',
      'ie-constitution',
      'br-cf-1988',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['rule-of-law', 'accountability', 'jurisdiction'],
    countryExamples: [
      {
        countrySlug: 'czechia',
        note: 'Three tiers, three declaring authorities: the Government declares a nouzový stav; Parliament declares a stav ohrožení státu on a government proposal, needing an absolute majority of ALL deputies and ALL senators; and Parliament decides on a válečný stav under the Constitution itself.',
      },
      {
        countrySlug: 'spain',
        note: 'Three regimes, three authorities, ascending: the Government declares an estado de alarma by decree; an estado de excepción requires prior authorisation of the Congress; and an estado de sitio is declared by the Congress itself by absolute majority, on the Government’s proposal.',
      },
      {
        countrySlug: 'germany',
        note: 'Makes one determination a parliamentary act: the Verteidigungsfall under Art. 115a, decided by the Bundestag with the Bundesrat’s consent, on the Federal Government’s application, by two-thirds of votes cast and at least a majority of members, with a substitute route through the Joint Committee. That threshold governs the DEFENCE emergency alone — the disaster and internal-emergency instruments of Arts. 35(3) and 91(2) carry no such requirement.',
      },
      {
        countrySlug: 'ireland',
        note: 'Where the armed conflict is one Ireland is not party to, the Art. 28.3.3 shield is switched on not by the Government but by EACH of the two Houses of the Oireachtas resolving that a national emergency exists affecting the vital interests of the State.',
      },
    ],
    uncertainty: [
      'Six systems are described from primary text. What any other system provides was not researched, and the range here is wide enough that no general rule should be inferred from it.',
      'This page names declaring authorities. It records no declaration, and it states nothing about whether any declaration was justified or lawful.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The answer to who may declare an emergency is one of the most jurisdiction-specific things in this whole subject. It is not usually "the president", it is often not one body, and in several systems it depends on which of several graded regimes is being declared. The instinct to generalise from one country here is the single largest source of error about emergency powers.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes who holds declaring authority under six legal systems. It states no procedure, no deadline and no route of challenge, records no declaration, and is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Whoever may declare an emergency may switch on the powers that come with it, so the allocation of that decision is a decision about how easily extraordinary power becomes available. A system that requires two-thirds of a chamber has made it hard on purpose; one that lets a cabinet decide alone has made it fast on purpose. Both are defensible and they are not the same choice.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why graded regimes are common',
        text: 'Speed and control pull in opposite directions, and a single regime has to pick one. Systems with three tiers avoid the choice: the mildest is declared quickly by the executive and changes least, the severest needs the legislature and changes most. The grading is how a system gets both.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Czechia allocates each of its three regimes differently. Under Article 5, the Government may declare a *nouzový stav* in cases of natural disasters, ecological or industrial accidents, accidents or other danger substantially threatening life, health, property or internal order and security.',
        claim: 'fact',
        sources: ['cz-security-act'],
      },
      {
        kind: 'paragraph',
        text: 'The middle tier is Parliament’s. Article 7 provides that Parliament may declare a *stav ohrožení státu* on a government proposal where the sovereignty or territorial integrity of the State, or its democratic foundations, are immediately threatened — and the resolution requires an absolute majority of all deputies and of all senators.',
        claim: 'fact',
        sources: ['cz-security-act'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'All members, not those present',
        text: 'A majority of all deputies and all senators is a different and higher threshold from a majority of those voting, because abstention and absence count against it. The choice of denominator is doing real work.',
      },
      {
        kind: 'paragraph',
        text: 'Spain grades the same way and states it in the organic law the Constitution requires. The *estado de alarma* is declared by the Government by decree agreed in the Council of Ministers; the *estado de excepción* is declared by the Government by decree in the Council of Ministers but only after prior authorisation of the Congress of Deputies; and the *estado de sitio* is declared by the Congress of Deputies itself by absolute majority, exclusively on the Government’s proposal.',
        claim: 'fact',
        sources: ['es-lo-4-1981'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Executive, executive-with-permission, legislature',
        text: 'Three regimes on one ladder, and the rung determines who decides. It is the clearest statement in this wave that "who declares an emergency" has no single answer even within one country.',
      },
      {
        kind: 'paragraph',
        text: 'Germany makes the determination itself a parliamentary act. Article 115a(1) of the Basic Law provides that the determination that the federal territory is being attacked by armed force, or that such an attack is imminent, is made by the Bundestag with the consent of the Bundesrat, on the application of the Federal Government, and requires a majority of two-thirds of the votes cast and at least a majority of the members of the Bundestag.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'The same article provides for the case where that is impossible. Where the situation imperatively requires immediate action and insurmountable obstacles prevent the timely convening of the Bundestag, or it lacks a quorum, the Joint Committee makes the determination on the same majorities; and where the territory is attacked and the competent federal organs are unable to make the determination at all, it is deemed to have been made and promulgated at the moment the attack began.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A deeming provision, not a gap',
        text: 'The last limb is unusual and worth reading carefully. It does not give anyone a power; it supplies a legal fact where no organ was able to act, so that the constitutional consequences attach from the moment of the attack rather than from whenever someone was next able to meet.',
      },
      {
        kind: 'paragraph',
        text: 'Ireland puts the switch in the legislature and in an unexpected place. Article 28.3.3 provides that "time of war" includes a time when there is taking place an armed conflict in which the State is not a participant but in respect of which each of the Houses of the Oireachtas shall have resolved that a national emergency exists affecting the vital interests of the State.',
        claim: 'fact',
        sources: ['ie-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'South Africa produces the most instructive gap. The Constitution’s section 37 sets out the conditions on a state of emergency in considerable detail — but it does not say who may declare one. That comes from the State of Emergency Act 64 of 1997, under which the President may by proclamation in the Gazette declare a state of emergency, briefly stating the reasons.',
        claim: 'fact',
        sources: ['za-state-of-emergency-act-1997'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Where a rule lives is itself a finding',
        text: 'A reader searching the South African Constitution for the declaring authority will not find it, and would be entitled to conclude something false about the system from that. The conditions are constitutional and the authority is statutory — which also means the authority can be changed by ordinary legislation and the conditions cannot.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil separates declaring from authorising along the same seam. The President may decree an *estado de defesa* alone, after hearing two advisory councils, with Congress deciding on the decree within ten days by absolute majority; but an *estado de sítio* requires the President to request authorisation from Congress before decreeing it.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'The president or prime minister declares a state of emergency.',
        reality:
          'Not in several systems described here. Germany’s determination is made by the Bundestag with the Bundesrat’s consent; Spain’s estado de sitio is declared by the Congress of Deputies itself; Ireland’s shield is switched on by a resolution of each House.',
      },
      {
        claim: 'A country has one procedure for declaring an emergency.',
        reality:
          'Czechia has three regimes with three different declaring authorities, and Spain has three regimes on an ascending ladder from a government decree to a decision of the Congress itself.',
      },
      {
        claim: 'The declaring authority is always in the constitution.',
        reality:
          'In South Africa it is not. Section 37 states the conditions but never names who declares; the power comes from the State of Emergency Act 64 of 1997.',
      },
      {
        claim: 'Parliamentary involvement means parliament decides first.',
        reality:
          'Not necessarily. Brazil’s Congress decides on an estado de defesa decree within ten days after it is made, but must authorise an estado de sítio before it is decreed — two different sequences in one constitution.',
      },
      {
        claim: 'If the legislature cannot meet, no emergency can be declared.',
        reality:
          'Germany provides for exactly that case. The Joint Committee may make the determination where the Bundestag cannot convene, and where no competent federal organ can act during an attack the determination is deemed made at the moment the attack began.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six systems, and no two answers alike.',
      },
      {
        kind: 'list',
        items: [
          'Three tiers, three authorities — Czechia, ústavní zákon č. 110/1998 Sb. Čl. 5 and 7 with Ústava Čl. 43.',
          'Three regimes, ascending from government decree to a decision of the Congress — Spain, LO 4/1981 with CE Art. 116.',
          'A parliamentary determination on a two-thirds majority, with a substitute committee and a deeming provision — Germany, GG Art. 115a.',
          'A resolution of each House of the legislature — Ireland, Bunreacht na hÉireann Art. 28.3.3.',
          'A presidential proclamation under statute, with the constitutional conditions sitting elsewhere — South Africa, State of Emergency Act 64 of 1997 with Constitution s. 37.',
          'Decree first with congressional decision after, or congressional authorisation first, depending on the regime — Brazil, CF Arts. 136 and 137.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each allocation is the law of its own country. The variety on this page is the finding, and it is the reason no sentence here should be carried across to a system that is not named.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Requiring someone other than the declaring authority to agree is the oldest control on this power, and the thresholds show how seriously each system takes it. An absolute majority of all members, a two-thirds vote, prior authorisation, a resolution of both chambers — each is a different judgement about how much friction extraordinary power should meet.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Friction is not the same as obstruction, and the graded systems are the evidence. A government that needs to act quickly can declare the mildest regime alone; what it cannot do is reach the powers of the severest regime without going to the chamber. The design lets urgency and control coexist rather than trading one for the other.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how emergency powers end](/public-safety/how-emergency-powers-end), [reviewing an emergency declaration](/justice/reviewing-an-emergency-declaration), and [why government is bound by law](/justice/why-government-is-bound-by-law).',
      },
    ],
  },
  {
    slug: 'how-emergency-powers-end',
    title: 'How emergency powers end',
    shortTitle: 'How they end',
    question:
      'Does a state of emergency actually end, and what happens to what was done under it?',
    summary:
      'Initial limits run from fourteen days to no fixed term at all, so "temporary" carries no common content. Renewal is where the systems differ most — and Brazil answers the harder question by preserving liability for unlawful acts after the regime is over.',
    entityType: 'concept',
    section: 'public-safety',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-can-declare-a-state-of-emergency',
      'what-a-state-of-emergency-changes',
      'reviewing-an-emergency-declaration',
    ],
    sources: [
      'br-cf-1988',
      'ie-constitution',
      'ch-rvog-notrecht',
      'us-national-emergencies-act',
      'ke-constitution',
      'za-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['legal-certainty', 'accountability', 'rule-of-law'],
    countryExamples: [
      {
        countrySlug: 'brazil',
        note: 'Caps the estado de defesa at thirty days renewable ONCE — a hard sixty-day ceiling — and then answers the aftermath question in Art. 141: when the regime ceases its effects cease, expressly without prejudice to liability for unlawful acts committed by those who executed it.',
      },
      {
        countrySlug: 'switzerland',
        note: 'Makes lapse the default rather than the exception: a Federal Council security ordinance ceases to have effect six months after entry into force unless a draft statutory basis has by then been put before the Federal Assembly, and lapses outright if the Assembly rejects it.',
      },
      {
        countrySlug: 'kenya',
        note: 'Makes each extension harder than the last: the National Assembly may extend for no longer than two months at a time, the first extension by two-thirds of all members and any subsequent extension by three-quarters, in each case following a public debate.',
      },
      {
        countrySlug: 'south-africa',
        note: 'Uses the same escalating design with different numbers — three months at a time, the first extension by a majority of members and any subsequent extension by at least sixty per cent — and adds that a declaration and anything done under it may take effect only prospectively.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'ireland',
        note: 'The counter-case to temporariness. The Art. 28.3.3 shield does not lapse when the war, armed conflict or rebellion ends: the constitutional definition extends it until each of the Houses of the Oireachtas has resolved that the national emergency has ceased to exist.',
      },
    ],
    uncertainty: [
      'Six systems are described from primary text. How long any declaration has actually lasted anywhere was not researched and is not stated.',
      'This page describes rules about duration and aftermath. It states no deadline applicable to anyone, describes no procedure, and says nothing about any particular measure.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'An emergency power ends in one of three ways: the clock runs out, someone revokes it, or a chamber refuses to continue it. The interesting question is which of those is the default — and the second interesting question, which fewer texts answer, is what happens to everything that was done while it was running.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes duration, renewal and lapse rules in six legal systems. The periods stated are features of those instruments, not deadlines applicable to anyone, and nothing here is a route of challenge or legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A power granted for a crisis outlives the crisis unless something makes it stop, and the thing that makes it stop has to be built in at the start. The design question is who bears the burden of inertia: whether the power continues unless somebody ends it, or ends unless somebody continues it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which way the default points is the whole design',
        text: 'A regime that lapses unless renewed puts the burden of argument on the government at every interval. A regime that continues unless terminated puts it on everyone else, and puts it on them at a moment when the political cost of ending an emergency is highest. The texts below sit on both sides of that line.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The initial limits alone are enough to show that "temporary" has no shared meaning. Kenya’s Article 58(2) provides that a declaration and anything done under it is effective only prospectively and for not longer than fourteen days. South Africa’s section 37(2) sets twenty-one. Brazil’s estado de defesa may not exceed thirty days. Switzerland’s security ordinances run six months. A United States national emergency terminates on its anniversary.',
        claim: 'fact',
        sources: ['ke-constitution', 'za-constitution', 'br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'Renewal is where the systems separate. Kenya makes each extension harder than the last: the National Assembly may extend for no longer than two months at a time, by resolution following a public debate, the first extension supported by at least two-thirds of all members and any subsequent extension by at least three-quarters.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'South Africa uses the same escalating shape with different numbers — three months at a time, the first extension by a majority of the members of the Assembly and any subsequent extension by at least sixty per cent.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A rising threshold is a statement about time',
        text: 'It says that the longer an emergency lasts, the more of the chamber must agree that it is still an emergency. That is a different instrument from a fixed cap: it does not forbid a long emergency, it makes each further step cost more political capital than the last.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil takes the other route and caps it outright. The *estado de defesa* may not exceed thirty days *podendo ser prorrogado uma vez, por igual período, se persistirem as razões que justificaram a sua decretação* — renewable once, for an equal period, if the reasons that justified it persist. Sixty days is the ceiling.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'Switzerland inverts the default entirely, for one class of instrument. Under Article 7d of the Regierungs- und Verwaltungsorganisationsgesetz a Federal Council ordinance made directly on Article 185(3) of the Constitution — to counter serious disturbances of public order or of internal or external security — ceases to have effect six months after entry into force unless the Federal Council has by then submitted to the Federal Assembly a draft statutory basis for its content or a draft Assembly ordinance replacing it, and it lapses on rejection of that draft or on the entry into force of the statutory basis. Article 7c, which governs ordinances made on Article 184(3) to safeguard the interests of the country, sets its own and longer clock.',
        claim: 'fact',
        sources: ['ch-rvog-notrecht'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Sunset by default, with the legislature holding the veto',
        text: 'Nobody has to act to end a Swiss security ordinance. Somebody has to act to keep it, and what they must do is put a bill before the chamber — which converts an emergency instrument into an ordinary one or lets it die.',
      },
      {
        kind: 'paragraph',
        text: 'The United States points the default the other way. Under 50 U.S.C. § 1622(d) a declared national emergency terminates on the anniversary of its declaration if, within the ninety-day period before each anniversary, the President does not publish in the Federal Register and transmit to Congress a notice stating that the emergency is to continue in effect. Termination otherwise requires a joint resolution enacted into law, or a presidential proclamation.',
        claim: 'fact',
        sources: ['us-national-emergencies-act'],
      },
      {
        kind: 'paragraph',
        text: 'So continuation runs on a notice by the person who declared it, and ending it against that person’s wishes requires legislation. That is the exact inverse of the Swiss design, where nobody need act for the ordinance to lapse and somebody must act to keep it — and the contrast is between the two defaults rather than between two levels of scrutiny.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Ireland shows that a limit can be constitutional and still not be a clock. Article 28.3.3 provides that "time of war or armed rebellion" includes such time after the termination of the war, conflict or rebellion as may elapse until each of the Houses of the Oireachtas shall have resolved that the national emergency occasioned by it has ceased to exist.',
        claim: 'fact',
        sources: ['ie-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The end of the conflict is not the end of the emergency',
        text: 'The constitutional definition keeps the state of affairs alive until two chambers say otherwise. Temporary, in that text, means "until resolved to have ceased" — which can be a great deal longer than the events that prompted it, and is the clearest available illustration that temporary does not mean short.',
      },
      {
        kind: 'paragraph',
        text: 'The hardest question is what happens to what was already done, and Brazil answers it directly. Article 141 provides that on cessation of the *estado de defesa* or the *estado de sítio* their effects also cease, *sem prejuízo da responsabilidade pelos ilícitos cometidos por seus executores ou agentes* — without prejudice to liability for unlawful acts committed by those who executed the measures or their agents.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'No amnesty flows from the emergency',
        text: 'Ending the regime ends the powers; it does not retrospectively make lawful what was unlawful when it was done. South Africa reaches the same result from the other direction, barring any emergency legislation from indemnifying the state or any person for an unlawful act.',
      },
      {
        kind: 'paragraph',
        text: 'The two halves belong together. Duration limits attach to the declaration, not to what was done under it — so a lapsed declaration does not by itself undo a detention, a prohibition or a requisition, and a system that wants those answered has to say so separately, as both of these do.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'A state of emergency is temporary, so it will be short.',
        reality:
          'Temporary is not a length. The initial limits described here run from fourteen days to no fixed term, and Ireland’s constitutional definition keeps the state of affairs alive until each House resolves that it has ceased to exist.',
      },
      {
        claim: 'An emergency ends when the crisis ends.',
        reality:
          'Not under Ireland’s Article 28.3.3, which expressly extends "time of war or armed rebellion" past the end of the conflict until both Houses resolve otherwise.',
      },
      {
        claim: 'Renewing an emergency needs the same approval as declaring one.',
        reality:
          'Frequently it needs more. Kenya requires two-thirds of all members for the first extension and three-quarters for any subsequent one; South Africa requires a majority and then at least sixty per cent.',
      },
      {
        claim: 'Emergency measures lapse automatically when the declaration ends.',
        reality:
          'The declaration and the measures are different objects. Brazil states expressly that liability for unlawful acts survives the end of the regime, and South Africa bars any emergency legislation from indemnifying anyone for an unlawful act.',
      },
      {
        claim: 'Someone always has to vote to keep an emergency going.',
        reality:
          'Not in the United States. Under 50 U.S.C. § 1622(d) continuation runs on a presidential notice published in the Federal Register, and ending it against the President’s wishes requires a joint resolution enacted into law.',
      },
      {
        claim: 'Once an emergency ends, the people who acted under it are protected.',
        reality:
          'Brazil’s Article 141 provides the opposite in terms: effects cease without prejudice to liability for unlawful acts committed by those who executed the measures.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six systems, and the default points both ways.',
      },
      {
        kind: 'list',
        items: [
          'Fourteen days, extendable two months at a time on two-thirds then three-quarters of all members — Kenya, Art. 58(2)–(3).',
          'Twenty-one days, extendable three months at a time on a majority then at least sixty per cent — South Africa, s. 37(2).',
          'Thirty days, renewable once only, for a hard sixty-day ceiling — Brazil, CF Art. 136 §2.',
          'Six months for a security ordinance, lapsing unless a draft statutory basis is put before the chamber — Switzerland, RVOG Art. 7d.',
          'One year, continuing on a presidential notice with no legislative approval — United States, 50 U.S.C. § 1622(d).',
          'No fixed term, ending only when both Houses resolve the emergency has ceased — Ireland, Art. 28.3.3.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not established here',
        text: 'No source used on this page establishes how long any emergency has in fact lasted in any system, or how often any renewal power has been used. That was not researched and is not stated.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Where the default points determines who has to win the argument. Under a lapse-unless-renewed rule the government must persuade someone at every interval; under a continue-unless-terminated rule everyone else must assemble a majority against it. The same emergency lasts different lengths of time under those two rules for reasons that have nothing to do with the emergency.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The aftermath provisions are what make the whole structure worth having. A time limit with no liability rule would let a government act unlawfully for thirty days and then close the file; the Brazilian and South African provisions ensure that the end of the regime is the beginning of the accounting rather than the end of it.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'None of which implies that ending an emergency promptly is always the right call. These are constitutional judgements about a genuine dilemma, and a system that made renewal impossible would face the opposite failure — a government unable to continue protecting people because a clock ran out.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who can declare a state of emergency](/public-safety/who-can-declare-a-state-of-emergency), [reviewing an emergency declaration](/justice/reviewing-an-emergency-declaration), and [legal certainty](/justice/legal-certainty).',
      },
    ],
  },
];
