import type { CountryDossier } from '../types';

/**
 * The Spain dossier — the asymmetric-decentralisation pilot.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-26.
 *
 * Source access: the Constitution, the organic law of the security forces, and the two prison-
 * transfer decrees were read verbatim from the Boletín Oficial del Estado (boe.es). The Spanish
 * statistical portals (interior.gob.es, institucionpenitenciaria.es) block automated fetching, so
 * no prison-population figure is published — the reason is set out on the corrections page.
 *
 * Two things define this dossier:
 *
 *  1. DECENTRALISED, NOT FEDERAL. Spain is a unitary state whose Constitution (art. 145.1)
 *     expressly forbids federation of the Autonomous Communities. Criminal, penitentiary and
 *     procedural LEGISLATION is exclusively the State's (art. 149.1.6), and the judiciary is
 *     unitary (art. 117.5).
 *
 *  2. ASYMMETRY. What is devolved differs by community. Catalonia and the Basque Country run their
 *     own police AND their own prisons; Navarre runs its own police but not its prisons; most
 *     communities run neither. These pages never say the autonomous communities have identical
 *     competences, and never say the national police command the autonomous police.
 */

export const SPAIN: CountryDossier = {
  countryCode: 'ES',
  slug: 'spain',
  name: 'Spain',
  officialName: 'Kingdom of Spain (Reino de España)',
  summary:
    'Spain is a decentralised unitary state — not a federation — in which criminal law and the judiciary are national, but the administration of policing and prisons is devolved to the Autonomous Communities asymmetrically. Catalonia and the Basque Country run their own police and their own prisons; Navarre runs its own police only; most communities run neither and rely on the national forces.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['es', 'es-catalonia', 'es-basque', 'es-navarre', 'es-andalusia'],
  sources: ['es-constitution'],
  uncertainty: [
    'State law is authoritative in Castilian Spanish; the co-official languages (Catalan, Basque, Galician) are used for institutions in their communities, and their names are kept in those languages.',
    'No Spanish prison-population figure is published: the official series are split between a central administration that excludes Catalonia and the Basque Country and an all-Spain figure, and no single properly scoped figure could be verified from a directly readable official source. The reason is set out on the corrections page.',
    'The forensic system, border and customs arrangements, oversight machinery and institutional history have not been researched to the required standard and are not described. No individual autonomous community has been researched beyond the constitutional and transfer structure.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'Decentralised, but not a federation',
      text: 'Spain is often described loosely as quasi-federal, but the Constitution is precise, and this page follows it. Spain is a single, indissoluble nation (art. 2) organised into municipalities, provinces and Autonomous Communities (art. 137), and art. 145.1 states flatly that "en ningún caso se admitirá la federación de Comunidades Autónomas" — federation of the communities is not permitted. It is a decentralised unitary state. What that decentralisation devolves, and to whom, is where the interesting structure lies.',
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'The asymmetry — the thing to understand about Spain',
      text: 'The communities do not all have the same powers. Two functions are devolved unevenly. Catalonia and the Basque Country run their own ordinary police (the Mossos d’Esquadra and the Ertzaintza) and their own prison systems; Navarre runs its own police (the Policía Foral) but not its prisons; and most of the seventeen communities run neither, relying on the national police forces and the central prison administration. So "who polices Spain" and "who runs its prisons" have different answers in different communities. This site records that community by community, because a single national statement would be false for some of them.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'What is NOT devolved: the law, the courts, the prosecutors',
      text: 'Against that asymmetry stand three things that are uniform and national. The criminal, penitentiary and procedural LAW is exclusively the State’s (art. 149.1.6) — there is one Criminal Code for all of Spain, and a community that runs its own prisons still applies the State’s penitentiary law. The judiciary is unitary (art. 117.5, "unidad jurisdiccional") — no community has its own separate courts, though each has a Tribunal Superior de Justicia within the single national system. And prosecution is a single national institution, the Ministerio Fiscal (art. 124). So even the most autonomous community has its own police and prisons but national courts and prosecutors.',
    },
    {
      kind: 'paragraph',
      text: 'The module pages take each function in turn: the split policing, the unitary courts and prosecution, and the partly devolved prisons.',
      claim: 'fact',
      sources: ['es-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Spain',
      summary:
        'A decentralised unitary state in which criminal law and the judiciary are national, but the administration of some functions is devolved asymmetrically to the Autonomous Communities.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['es-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Spain is a constitutional monarchy and a decentralised unitary state under the Constitution of 1978. It is organised into Autonomous Communities (Comunidades Autónomas), each with its own Statute of Autonomy and elected assembly, but it is not a federation: article 145.1 forbids the federation of the communities, and article 2 grounds the whole arrangement in the indissoluble unity of the Spanish Nation together with the right to autonomy of its nationalities and regions.',
          claim: 'fact',
          sources: ['es-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Legislation is national; administration is partly devolved',
          text: 'The key to the Spanish system is the distinction between making the law and administering it. Article 149.1.6 makes criminal, penitentiary and procedural LEGISLATION an exclusive competence of the State — one Criminal Code, one penitentiary law, for the whole country. But article 149.1.29 lets communities create their own police "in the manner established in their respective Statutes", and the administration of prisons has been transferred to two communities. So the communities do not write the criminal law; some of them administer parts of the system that applies it.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Due-process rights (art. 24)',
              description:
                'The Constitution guarantees effective judicial protection without defencelessness, the right to the ordinary judge predetermined by law, the presumption of innocence and the other fair-trial rights — nationally, for the whole country.',
            },
            {
              term: 'Penal principles (art. 25)',
              description:
                'Article 25 sets legality (no punishment without a prior law) and directs that custodial penalties be oriented towards re-education and social reintegration. These bind the prison systems whether they are run centrally or by a community.',
            },
            {
              term: 'Judicial unity (art. 117.5)',
              description:
                'The single most important structural fact after the asymmetry: the principle of jurisdictional unity is the basis of the organisation of the courts. There is one national judiciary; the communities do not have their own.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states the constitutional framework. The precise line between State and community competence is the subject of a large body of Constitutional Court case law that has not been researched here, and the distribution of competences differs in detail between the Statutes of the seventeen communities.',
        },
      ],
      uncertainty: [
        'Constitutional provisions are cited from the authoritative Castilian text; the extensive case law of the Constitutional Court on the division of competences is not described.',
        'The Statutes of Autonomy differ between communities; only the four sampled communities are considered, and only for policing and prisons.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Spain',
      summary:
        'The national forces — Policía Nacional and Guardia Civil — alongside the autonomous police of Catalonia, the Basque Country and Navarre, and why most communities have no force of their own.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['es-lofcs', 'es-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Spanish policing has three tiers, set out in the Ley Orgánica 2/1986 de Fuerzas y Cuerpos de Seguridad: the national forces of the State, the police of the Autonomous Communities, and the local (municipal) police. The two national forces are the Cuerpo Nacional de Policía — "un Instituto Armado de naturaleza civil, dependiente del Ministro del Interior" — and the Guardia Civil, which the same law describes as "un Instituto Armado de naturaleza militar".',
          claim: 'fact',
          sources: ['es-lofcs'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The Guardia Civil is not simply rural police',
          text: 'It is common to describe the Guardia Civil as the police of the countryside and small towns, in contrast to the urban Policía Nacional. That is a rough description of where each is deployed, but it understates the Guardia Civil: it is a militarily-organised national security force with responsibilities that include the coasts and borders, traffic on interurban roads, arms and explosives, and more. Its character, not its patch, is the point.',
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Autonomous police — and why only some communities have them',
          text: 'Article 149.1.29 keeps public security as a State competence "without prejudice to the possibility of the Autonomous Communities creating police forces" as their Statutes provide. Three communities have created a full force that acts as the ordinary police in their territory: the Mossos d’Esquadra in Catalonia, the Ertzaintza in the Basque Country, and the Policía Foral in Navarre (each named in its own language). Where they operate, the national forces keep only reserved, supra-community responsibilities, and the national forces do NOT command the autonomous police — coordination runs through a parity body, the Junta de Seguridad, not a chain of command. Most of the other communities have no full force of their own and are policed by the national Policía Nacional and Guardia Civil.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the constitutional and statutory structure of Spanish policing and how it varies between communities. It does not describe deployment, tactics, surveillance capability, operational procedure, or anything that would help a person anticipate, frustrate or evade the police, and it will not.',
        },
      ],
      uncertainty: [
        'The precise division of "own" and "reserved" functions between the autonomous and national forces varies by Statute and was not researched in detail.',
        'The local (municipal) police and the coordination bodies are named but not described in detail.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Spain',
      summary:
        'A single national judiciary under the principle of jurisdictional unity — the Supreme Court and the ordinary courts — with a separate Constitutional Court, and a governing council that is not a court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['es-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Unlike its police and prisons, Spain’s judiciary is not decentralised. Article 117.5 makes the principle of jurisdictional unity ("unidad jurisdiccional") the basis of the organisation of the courts: there is one national judiciary, and the Autonomous Communities do not have their own separate court systems. The distinctions that matter are between different national bodies that are easy to confuse.',
          claim: 'fact',
          sources: ['es-constitution'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Tribunal Supremo (Supreme Court)',
              description:
                'The highest court of the ordinary judiciary. Article 123 states it has "jurisdicción en toda España" and is "el órgano jurisdiccional superior en todos los órdenes", except in matters of constitutional guarantees, which belong to the Constitutional Court.',
            },
            {
              term: 'Tribunal Constitucional (Constitutional Court)',
              description:
                'A separate body, OUTSIDE the ordinary judiciary, that is the supreme interpreter of the Constitution (regulated in Title IX and by its own organic law). It is not the top of the court system; it rules on the constitutionality of laws and on constitutional rights, and must not be confused with the Supreme Court.',
            },
            {
              term: 'Consejo General del Poder Judicial (CGPJ)',
              description:
                'Article 122 makes the CGPJ the GOVERNING body of the judiciary — it manages appointments, discipline and administration of judges. It is not a court and does not decide cases; confusing it with the Supreme Court is a common error.',
            },
            {
              term: 'Tribunales Superiores de Justicia',
              description:
                'Each community has a Tribunal Superior de Justicia which, under article 152, culminates the judicial organisation within that community — but as part of the single national judiciary, not as a community court system. There is also a specialised national court, the Audiencia Nacional.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court and tribunal, the composition and appointment of the higher courts beyond the constitutional outline, and the ongoing debate over the renewal of the CGPJ have not been researched from the primary sources and are not described.',
        },
      ],
      uncertainty: [
        'The relationship and boundary between the Tribunal Supremo and the Tribunal Constitucional is stated at the level of the constitutional text, not the case law.',
        'The Audiencia Nacional is named but its jurisdiction is not described in detail.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Spain',
      summary:
        'The Ministerio Fiscal — a single national prosecution service, the same in every community, acting under the principles of unity of action and hierarchical dependence.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['es-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Spain is national and unitary — the one part of the system that is the same everywhere, even in the communities with their own police and prisons. The Ministerio Fiscal (Public Prosecution) has its constitutional basis in article 124, which gives it the mission of promoting the action of justice in defence of legality and the public interest, and provides that it acts "conforme a los principios de unidad de actuación y dependencia jerárquica" — unity of action and hierarchical dependence.',
          claim: 'fact',
          sources: ['es-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'One prosecution service, whatever the community',
          text: 'Because the Ministerio Fiscal is a single national body, the asymmetry that runs through policing and prisons does not reach prosecution: a case in Catalonia, investigated by the Mossos d’Esquadra, is prosecuted by the same national Ministerio Fiscal as a case anywhere else. Its unity of action and hierarchical structure are constitutional features. This page states that structure; it does not characterise the independence of the office or the debates about the appointment of its head.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states the constitutional character and national reach of the Ministerio Fiscal. It does not describe the appointment of the Fiscal General del Estado, the relationship with the Government, or the role of the investigating judge (juez de instrucción) in Spanish criminal procedure, which were not researched from primary sources.',
        },
      ],
      uncertainty: [
        'The role of the investigating judge in the Spanish inquisitorial-influenced procedure is not described.',
        'The independence of the Ministerio Fiscal and the appointment of its head are the subject of debate not researched here.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Spain',
      summary:
        'Who investigates — the national forces or, in the communities that have them, the autonomous police — under the direction of the investigating judge and the Ministerio Fiscal.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['es-constitution', 'es-lofcs'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Which police investigate a crime in Spain depends on where it happens: in Catalonia, the Basque Country and Navarre the autonomous police (the Mossos d’Esquadra, the Ertzaintza, the Policía Foral) are the ordinary investigating police; elsewhere it is the national Cuerpo Nacional de Policía and Guardia Civil. But the criminal law and procedure they apply are the same national ones across the whole country.',
          claim: 'fact',
          sources: ['es-lofcs', 'es-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The judge and the prosecutor above the police',
          text: 'Spanish criminal procedure places the investigation under judicial and prosecutorial direction: an investigating judge (juez de instrucción) and the national Ministerio Fiscal oversee the inquiry, and the police — national or autonomous — act as judicial police under that direction. So the identity of the investigating force varies by community, but the legal framework and the judicial and prosecutorial oversight are national and uniform. This page describes that allocation at a structural level.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and the national framework of judicial and prosecutorial direction. It does not describe investigative techniques, surveillance, or detention practice, and nothing here would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The precise roles of the investigating judge and the Ministerio Fiscal in directing the investigation are stated only structurally and were not researched from the procedural law.',
        'The coordination between autonomous and national police in cross-community matters is not described.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Spain',
      summary:
        'A prison system administered centrally for most of Spain but by Catalonia and the Basque Country for their own territory — under one national penitentiary law — and why no single prison figure is published here.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['es-constitution', 'es-prison-transfer-cat', 'es-prison-transfer-basque'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Spain’s prisons are administered by more than one authority. For most of the country they are run by the central Secretaría General de Instituciones Penitenciarias, within the Ministry of the Interior. But the administration of prisons has been transferred to two communities: to Catalonia by Real Decreto 3482/1983 (the Generalitat took over on 1 January 1984), and to the Basque Country by Real Decreto 474/2021 (effective 1 October 2021). Both decrees transfer "la ejecución de la legislación del Estado en materia penitenciaria" — the execution of the State’s penitentiary legislation.',
          claim: 'fact',
          sources: ['es-prison-transfer-cat', 'es-prison-transfer-basque'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Transferred administration, national law',
          text: 'The transfer is of administration, not of law-making. The penitentiary LAW remains exclusively the State’s (art. 149.1.6): Catalonia and the Basque Country run their own prison services, but they apply the same national penitentiary law, and their prisoners are held under the same legal regime as prisoners in the central system. This is the administration-versus-legislation distinction that runs through the whole Spanish system.',
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why this page publishes no prison figure',
          text: 'It would be easy to state "the Spanish prison population is X", and easy to get it wrong. Because administration is split three ways — the central service, Catalonia and the Basque Country — the official statistics are split too: the most-cited central series covers only the territory the central service administers and EXCLUDES Catalonia and the Basque Country, while an all-Spain figure requires combining three administrations. The two are readily confused (a central average is a smaller number than an all-Spain year-end total). No single, properly scoped figure could be verified here from a directly readable official source, so this page publishes none rather than a misleading one. The split in the statistics is itself a consequence of the asymmetry this dossier describes.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'No prison-population figure is stated. The individual prison systems, the regimes and re-integration programmes, community sanctions, and the oversight of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'No prison-population figure is published; the official series are split by administration and could not be reconciled to one verified, properly scoped number here.',
        'The differences between the central, Catalan and Basque prison administrations, beyond the fact of the transfer, have not been researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Spain',
      summary:
        'Every source used for the Spain pages, what each supports, and the note that State law is authoritative in Castilian while some institutions are named in the co-official languages.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'es-constitution',
        'es-lofcs',
        'es-prison-transfer-cat',
        'es-prison-transfer-basque',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Spain pages rest on four sources, all from the Boletín Oficial del Estado: the Constitution of 1978; the Ley Orgánica 2/1986 of the security forces; and the two decrees transferring penitentiary administration to Catalonia (1983) and the Basque Country (2021). Each was read in full and confirmed on 26 July 2026.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Castilian is authoritative; some institutions are named in other languages',
          text: 'State law is authoritative in Castilian Spanish, and these pages cite it in Castilian. Catalan, Basque and Galician are co-official in their communities, and the institutions of those communities are named in their own languages — the Mossos d’Esquadra (Catalan) and the Ertzaintza (Basque) — without an English name being invented for them.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/spain-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Spain',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Forensic science in Spain is delivered through the Instituto Nacional de Toxicología y Ciencias Forenses and the Institutos de Medicina Legal, and has not been read to the standard required. Forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Spain',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Spain involve the Guardia Civil, the Policía Nacional, the customs service and the European Union external-border framework (including the enclaves of Ceuta and Melilla), and could not be distinguished to the required standard here. It is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Spain',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Oversight in Spain runs through several channels — the Defensor del Pueblo and the community ombudsmen, parliamentary control, the internal-affairs units of the national and autonomous police, and judicial review — that must be distinguished precisely and, given the asymmetry, would need the community bodies researched to avoid implying a national uniformity that does not exist. It was not researched to that standard and is deferred.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Spain',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Spanish institutional history — the Franco dictatorship, the Transition, the 1978 Constitution and the building of the Estado de las Autonomías — cannot be written responsibly from general knowledge and requires careful, well-sourced treatment not undertaken here; the constitutional-transition and regional questions are especially sensitive.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Spain',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established here — the 1978 Constitution, the 1986 security-forces law, and the prison transfers of 1984 (Catalonia) and 2021 (Basque Country) — are only a beginning; a responsible timeline needs primary sources for each entry, which were not gathered.',
    },
  ],
};
