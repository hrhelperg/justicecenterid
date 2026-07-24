import type { CountryDossier } from '../types';

/**
 * The France dossier.
 *
 * Research date: every institutional fact below was checked against its cited source on
 * 2026-07-24. That date is recorded as `factsVerifiedOn` and is NOT the build date.
 *
 * Publication discipline: six of the twelve modules are `draft`. They are not thin pages
 * waiting to be filled — they produce no route at all, and each carries a `deferredReason`
 * rendered on the hub so a reader can see precisely what has not been researched. The
 * temptation this resists is publishing a plausible module about French forensic organisation
 * or prison administration from general knowledge; on a platform whose whole claim is sourced
 * accuracy, that would be the most damaging thing we could do.
 */
export const FRANCE: CountryDossier = {
  countryCode: 'FR',
  slug: 'france',
  name: 'France',
  officialName: 'French Republic (République française)',
  summary:
    'France is a unitary republic whose justice and policing institutions are organised nationally, with two separate court orders, several law-enforcement bodies of different legal status, and overseas territories under distinct constitutional regimes.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-24',
  reviewedOn: '2026-07-24',
  factsVerifiedOn: '2026-07-24',
  jurisdictionIds: [
    'fr',
    'fr-region',
    'fr-departement',
    'fr-commune',
    'fr-guadeloupe',
    'fr-martinique',
    'fr-guyane',
    'fr-la-reunion',
    'fr-mayotte',
    'fr-polynesie-francaise',
    'fr-saint-pierre-et-miquelon',
    'fr-saint-barthelemy',
    'fr-saint-martin',
    'fr-wallis-et-futuna',
    'fr-nouvelle-caledonie',
  ],
  sources: ['fr-constitution-1958', 'fr-justice-courts'],
  uncertainty: [
    'Institutional arrangements in the overseas collectivities and New Caledonia have not been researched. Nothing on these pages should be read as describing them.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'France is a unitary republic. Article 1 of the Constitution of 4 October 1958 states that France is "une République indivisible" and that "Son organisation est décentralisée" — an indivisible Republic whose organisation is decentralised. Both halves of that sentence matter, and they are frequently misread as contradicting each other.',
      claim: 'fact',
      sources: ['fr-constitution-1958'],
    },
    {
      kind: 'paragraph',
      text: 'Decentralisation in the French sense distributes administrative competences to territorial collectivities. It does not create separate legal systems. There is no French equivalent of a state legal code, a state supreme court, or a state prosecution service: courts, prosecution and prison administration are organised nationally, and a région or département is not a level of any of them.',
      claim: 'fact',
      sources: ['fr-constitution-1958'],
    },
    {
      kind: 'callout',
      variant: 'scope',
      title: 'What these pages cover',
      text: 'These pages describe the arrangements that apply in metropolitan France, checked against their sources on 24 July 2026. The overseas departments, the overseas collectivities and New Caledonia sit under distinct constitutional regimes, and their institutional detail has not been researched here. Where a page is silent about them, that silence means "not researched", not "the same".',
    },
    {
      kind: 'paragraph',
      text: 'Article 72 names the categories of territorial collectivity: communes, départements, régions, collectivities with a special status, and the overseas collectivities governed by Article 74. Only one of these tiers has a policing function of its own — the commune, which may establish a police municipale.',
      claim: 'fact',
      sources: ['fr-constitution-1958'],
    },
    {
      kind: 'paragraph',
      text: 'Two features of the French system surprise readers arriving from a common-law jurisdiction. The first is that there are two separate court orders rather than one: the ordre judiciaire hears civil and criminal cases, and the ordre administratif hears disputes between individuals and the administration. They have separate hierarchies, separate supreme courts, and a dedicated body to settle disputes about which of them has competence.',
      claim: 'fact',
      sources: ['fr-justice-courts'],
    },
    {
      kind: 'paragraph',
      text: 'The second is that prosecutors and judges belong to a single professional body, the magistrature, divided into the magistrats du siège who decide cases and the magistrats du parquet who prosecute. They are not two separate careers in the way that a judiciary and a prosecution service are separate in many other systems.',
      claim: 'fact',
      sources: ['fr-justice-parquet'],
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Civil law, without the stereotype',
      text: 'France belongs to the civil-law tradition, and its codes are central to how law is stated and found. That is a real and useful description. It is not a licence for the familiar shorthand that civil-law judges "merely apply the code" while common-law judges "make law": French courts interpret, and the Cour de cassation\'s case law is a working part of the legal order. Where these pages describe a French arrangement, they describe it from French sources rather than by contrast with an assumed common-law default.',
    },
    {
      kind: 'paragraph',
      text: 'Law enforcement is distributed across bodies with genuinely different legal status. The gendarmerie nationale is an armed force. The police municipale acts under the authority of a mayor. Treating them as variations on one idea of "the police" is the single most common error made about French policing, and the law-enforcement module sets out what actually separates them.',
      claim: 'fact',
      sources: ['fr-code-defense-l3211-3', 'fr-csi-l511-1'],
    },
    {
      kind: 'callout',
      variant: 'uncertainty',
      title: 'A change already scheduled',
      text: 'Several of the provisions cited across these pages carry a scheduled end date of 1 January 2029, when a recodification takes effect. They are in force now. Where that applies, the page says so and gives the date, rather than presenting the current text as though it were permanent.',
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of France',
      summary:
        'How the French justice system is constituted: the constitutional position of judicial authority, the two separate court orders, and the boundary between them.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['fr-constitution-1958', 'fr-justice-courts'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The French Constitution devotes its Title VIII to "De l\'autorité judiciaire" — judicial authority. The wording is deliberate and is worth pausing on: the Constitution speaks of a judicial *authority* rather than a judicial *power*, and that choice has been the subject of sustained constitutional debate in France.',
          claim: 'fact',
          sources: ['fr-constitution-1958'],
        },
        {
          kind: 'paragraph',
          text: 'Article 64 provides that the President of the Republic is "garant de l\'indépendance de l\'autorité judiciaire" — guarantor of the independence of the judicial authority — and is assisted in this by the Conseil supérieur de la magistrature.',
          claim: 'fact',
          sources: ['fr-constitution-1958'],
        },
        {
          kind: 'paragraph',
          text: 'Article 66 states that no one may be arbitrarily detained, and that the judicial authority, "gardienne de la liberté individuelle", ensures respect for this principle. This is the constitutional basis for the role of the judicial order in supervising deprivation of liberty.',
          claim: 'fact',
          sources: ['fr-constitution-1958'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why the two orders exist',
          text: 'The separation of administrative from judicial justice is not an administrative convenience. It reflects a long-standing French constitutional principle that the ordinary courts should not sit in judgment on the administration, which produced a separate body of administrative law and a separate hierarchy to apply it. This paragraph is our framing of why the structure looks as it does; the structure itself is set out below from official sources.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Ordre judiciaire',
              description:
                'The judicial order. Competent, in the Ministry of Justice\'s own words, "pour régler les litiges opposant les personnes privées et pour sanctionner les auteurs d\'infractions pénales" — to settle disputes between private persons and to sanction those who commit criminal offences. It divides into civil and criminal courts.',
            },
            {
              term: 'Ordre administratif',
              description:
                "The administrative order. Competent for disputes between the administration and individuals or legal persons. Organised in three levels: tribunal administratif, cour administrative d'appel, Conseil d'État.",
            },
            {
              term: 'Tribunal des conflits',
              description:
                'A dedicated body that resolves conflicts of competence between the two orders. Its existence is the clearest sign that the boundary between them is a real legal question rather than a filing convention.',
            },
          ],
        },
        {
          kind: 'paragraph',
          text: 'The Ministry of Justice administers the courts and the prison service, and carries responsibility for justice policy. Administering a court system is not the same as deciding cases, and French constitutional law treats the two as distinct — but the boundary between administration and independence is precisely where the recurring French debate about the status of the parquet is located. That debate is set out in the prosecution module rather than resolved here.',
          claim: 'analysis',
        },
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in France',
      summary:
        "The two court orders of France, the courts that sit in each, and the routes of appeal — described from the Ministry of Justice's own account rather than by analogy with another country.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['fr-justice-courts', 'fr-constitution-1958'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'France has two court orders with separate hierarchies. Which order hears a case depends on the nature of the dispute, not on where it arises or how serious it is.',
          claim: 'fact',
          sources: ['fr-justice-courts'],
        },
        {
          kind: 'paragraph',
          text: "Within the judicial order, the Ministry of Justice lists the tribunal judiciaire and the tribunal de proximité as the general civil courts, alongside specialised civil jurisdictions: the conseil de prud'hommes for employment matters, the tribunal de commerce, and the tribunal paritaire des baux ruraux for rural leases.",
          claim: 'fact',
          sources: ['fr-justice-courts'],
        },
        {
          kind: 'paragraph',
          text: "The criminal courts of the judicial order are the tribunal de police, the tribunal correctionnel, the cour criminelle départementale and the cour d'assises. These are not four levels of one ladder: they are distinguished principally by the seriousness and classification of the offence.",
          claim: 'fact',
          sources: ['fr-justice-courts'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A name that does not mean what it looks like',
          text: 'The cour criminelle départementale carries "départementale" in its name, but the département is not the body that constitutes or administers it. French courts sit in judicial districts — ressorts — that are drawn separately from the administrative map. Reading the court\'s name as evidence that departments run courts is a category error, and it is one the jurisdiction model on this site is explicitly built to prevent.',
        },
        {
          kind: 'paragraph',
          text: "Appeals within the judicial order go to the cour d'appel, which the Ministry describes as a second-degree jurisdiction hearing appeals against judgments of first-instance courts. At the top of the judicial order sits the Cour de cassation.",
          claim: 'fact',
          sources: ['fr-justice-courts'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Cassation is not a third hearing',
          text: 'The Cour de cassation is the highest court of the judicial order. Describing it as "the French supreme court" invites a false equivalence with courts that re-decide cases: cassation review is directed at whether the law was correctly applied. Readers should treat any one-to-one mapping onto another country\'s apex court with caution.',
        },
        {
          kind: 'paragraph',
          text: "The administrative order runs from the tribunal administratif, through the cour administrative d'appel, to the Conseil d'État as its highest jurisdiction. Where the two orders disagree about which of them is competent, the Tribunal des conflits decides.",
          claim: 'fact',
          sources: ['fr-justice-courts'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The Conseil constitutionnel is not a third order',
          text: "The Conseil constitutionnel is not the apex of a third court hierarchy and is not an appeal court above the Cour de cassation or the Conseil d'État. It exercises a distinct constitutional function. It is mentioned here only to place it correctly; these pages do not describe its procedures, because that has not been researched from primary sources.",
        },
      ],
      uncertainty: [
        'The competences of each individual court, and the thresholds that allocate cases between them, have not been researched from the procedural codes and are not stated here.',
        'The role and procedures of the Conseil constitutionnel have not been researched.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in France',
      summary:
        'The main law-enforcement bodies of France, what legally separates them — including one that is an armed force and one that answers to a mayor — and why the familiar town-versus-countryside summary is inadequate.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['fr-code-defense-l3211-3', 'fr-csi-l511-1', 'fr-constitution-1958'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'France does not have a single police service. Enforcement is distributed across bodies whose legal status differs fundamentally — not merely in rank structure or uniform, but in what kind of institution they are.',
          claim: 'fact',
          sources: ['fr-code-defense-l3211-3', 'fr-csi-l511-1'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Gendarmerie nationale',
              description:
                'An armed force. Article L3211-3 of the Code de la défense states: "La gendarmerie nationale est une force armée instituée pour veiller à l\'exécution des lois" — an armed force instituted to ensure the execution of the laws. Its military missions are carried out throughout the national territory. This is a statement of legal character, not a description of equipment or manner.',
            },
            {
              term: 'Police nationale',
              description:
                'The other principal national body. These pages do not characterise its internal organisation, because that has not been researched from primary sources; what is stated here is only that it and the gendarmerie both hold general competence, which Article L511-1 of the Code de la sécurité intérieure confirms by referring to "la compétence générale de la police nationale et de la gendarmerie nationale".',
            },
            {
              term: 'Police municipale',
              description:
                'A municipal force established at the option of a commune. Under Article L511-1 of the Code de la sécurité intérieure, its agents act "sous l\'autorité" of the mayor, carrying out tasks within the mayor\'s competence relating to prevention and surveillance of public order, tranquillity, security and public health. Not every commune has one.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why "police in towns, gendarmes in the countryside" is not good enough',
          text: 'The summary is not invented — territorial allocation is a real feature of how the two national bodies are deployed. But taken as the explanation it misleads in three ways. It implies the difference is geographic when the defining difference is legal status: one is an armed force under the Code de la défense. It ignores national and specialised competences that do not follow a town/countryside line at all. And it presents a settled picture of arrangements that have changed over time, including in how the gendarmerie relates to the interior and defence ministries. Where these pages cannot state the current allocation from a primary source, they say so rather than repeating the shorthand.',
        },
        {
          kind: 'paragraph',
          text: 'The municipal force does not displace the national ones. Article L511-1 opens with the words "Sans préjudice de la compétence générale de la police nationale et de la gendarmerie nationale" — without prejudice to the general competence of the national police and the national gendarmerie. A commune adding a police municipale adds a layer under mayoral authority; it does not carve out territory from national competence.',
          claim: 'fact',
          sources: ['fr-csi-l511-1'],
        },
        {
          kind: 'callout',
          variant: 'uncertainty',
          title: 'This provision has a scheduled end date',
          text: 'Légifrance records Article L511-1 of the Code de la sécurité intérieure as in force from 1 July 2021 until 1 January 2029. It is the current law. The 2029 date reflects a scheduled recodification, and anything written about French police powers should be re-checked against the replacement text as that date approaches.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes institutional status, mandate and accountability. It does not describe deployment patterns, patrol practice, surveillance capability, tactics, checkpoint procedure, internal communications or facility arrangements, and it will not. Those are operational matters with no educational value that outweighs their misuse.',
        },
      ],
      uncertainty: [
        'The internal organisation and directorates of the Police nationale and the Gendarmerie nationale have not been researched from primary sources and are not described.',
        'The current division of territorial responsibility between the two national bodies has not been established from a primary source and is deliberately not stated.',
        'Specialised and supporting services have not been researched.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in France',
      summary:
        'The ministère public, how the parquet is organised, how it differs from the judges of the siège, and what official sources say about the instructions it may and may not receive.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['fr-justice-parquet', 'fr-cpp-art-12', 'fr-constitution-1958'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The prosecuting authority in France is the ministère public, also called the parquet. The Ministry of Justice describes the parquet as "les magistrats ayant pour mission de demander l\'application de la loi" — magistrates whose mission is to request the application of the law and to conduct criminal proceedings in the public interest.',
          claim: 'fact',
          sources: ['fr-justice-parquet'],
        },
        {
          kind: 'paragraph',
          text: 'Prosecutors and judges are both magistrats, drawn from the same body, but they occupy different positions. The magistrats du siège decide cases. The magistrats du parquet do not: they are known as the "magistrature debout" because, as the Ministry puts it, they "prennent la parole debout pendant les audiences" — they speak standing during hearings, while the judges remain seated.',
          claim: 'fact',
          sources: ['fr-justice-parquet'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not a district attorney, not a Crown prosecutor',
          text: 'The procureur de la République is routinely translated into whichever prosecuting office the reader already knows. The equivalence does not hold: those offices are typically separate from the judiciary, whereas the parquet is part of the magistrature and its members can move between prosecuting and judging roles over a career. Where this page uses French terms, it is because the English substitutes carry the wrong institutional baggage.',
        },
        {
          kind: 'paragraph',
          text: 'The parquet is hierarchical. The Ministry describes a structure running from the procureur général at the courts of appeal and the Cour de cassation, down through the procureur de la République at first-instance level, assisted by deputies and substitutes.',
          claim: 'fact',
          sources: ['fr-justice-parquet'],
        },
        {
          kind: 'paragraph',
          text: 'On the relationship with government, the Ministry of Justice states that magistrats du parquet act "sous l\'autorité du ministre de la Justice" and receive "des instructions générales du ministre de la Justice mais en aucun cas dans les dossiers judiciaires" — general instructions from the minister, but in no case instructions in individual judicial files.',
          claim: 'fact',
          sources: ['fr-justice-parquet'],
        },
        {
          kind: 'callout',
          variant: 'disputed',
          title: 'A contested question, stated as contested',
          text: 'The status of the parquet — how far it is independent of the executive, and whether the safeguards are sufficient — is a live and long-running debate in France, and has been examined by European human-rights bodies. This page does not resolve it. It states what the official source says the rule is, and records that the adequacy of that rule is disputed. Any page asserting either that French prosecutors are wholly independent of government, or that ministers direct them in individual cases, would be stating a conclusion the sources cited here do not support.',
        },
        {
          kind: 'paragraph',
          text: 'One structural difference is recorded plainly by the Ministry: unlike the magistrats du siège, members of the parquet do not have the guarantee of irremovability — they "ne bénéficient pas de la garantie d\'inamovibilité" and may be reassigned without their consent. That is a concrete institutional fact rather than a characterisation, and it is central to why the debate above exists.',
          claim: 'fact',
          sources: ['fr-justice-parquet'],
        },
      ],
      uncertainty: [
        'The composition and powers of the Conseil supérieur de la magistrature in relation to parquet appointments and discipline have not been researched from primary sources and are not described here.',
        'The findings of European human-rights bodies on the status of the parquet are referred to as existing but are not summarised, because they have not been read in the original for this pilot.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in France',
      summary:
        'Who conducts criminal investigations in France, under whose legal direction, and why "police judiciaire" names a function rather than a single agency.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['fr-cpp-art-12', 'fr-justice-parquet'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'callout',
          variant: 'scope',
          title: 'A function, not an agency',
          text: 'English-language writing often treats "police judiciaire" as the name of a single French detective agency. In the Code de procédure pénale it is a legal function — a capacity exercised by designated officers and agents, who may belong to different bodies. Reading it as one organisation is the most common structural error made about French criminal investigation.',
        },
        {
          kind: 'paragraph',
          text: 'Article 12 of the Code de procédure pénale states: "La police judiciaire est exercée, sous la direction du procureur de la République, par les officiers, fonctionnaires et agents désignés au présent titre." The judicial police function is exercised, under the direction of the procureur de la République, by the officers, officials and agents designated in that title of the code.',
          claim: 'fact',
          sources: ['fr-cpp-art-12'],
        },
        {
          kind: 'paragraph',
          text: 'Two things follow from that single sentence. First, investigation is legally directed by a magistrate of the parquet, not organised as an independent police activity that a prosecutor later reviews. Second, who may exercise the function is a matter of legal designation, which is why the same function can be carried out by personnel from more than one institution.',
          claim: 'analysis',
          sources: ['fr-cpp-art-12'],
        },
        {
          kind: 'paragraph',
          text: 'The Ministry of Justice describes the prosecutor\'s role in the same terms: the procureur "directs the investigation" and has the necessary acts performed to identify and pursue those responsible for offences. The Ministry also records that the prosecutor exercises discretion over what happens next — including closing a case without further action, using an alternative to prosecution, sending a case to court, or referring a matter to an investigating judge.',
          claim: 'fact',
          sources: ['fr-justice-parquet'],
        },
        {
          kind: 'callout',
          variant: 'uncertainty',
          title: 'Article 12 is in force, and is scheduled to be repealed',
          text: 'Légifrance records Article 12 as in force since 8 April 1958 and as due to be repealed by Ordonnance n° 2025-1091 of 19 November 2025, with effect from 1 January 2029. The provision quoted above is the current law. The scheduled repeal is part of a wider recodification, and this page will need re-checking against the replacement text before that date.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who has legal responsibility for investigation and what supervises it. It does not describe investigative techniques, surveillance capability, evidential thresholds at an operational level, or anything that would assist a person seeking to anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        "The role of the juge d'instruction, and the categories of case in which one is appointed, have not been researched from the Code de procédure pénale and are referred to only as the Ministry of Justice describes them.",
        'The categories of officer and agent designated under the relevant title of the code have not been enumerated from the code itself.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for France',
      summary:
        'Every source used for the France pages, what each one supports, how it was verified, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [
        'fr-constitution-1958',
        'fr-cpp-art-12',
        'fr-code-defense-l3211-3',
        'fr-csi-l511-1',
        'fr-justice-courts',
        'fr-justice-parquet',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The France pages rest on six sources: the Constitution, three legislative provisions, and two official Ministry of Justice pages. Every one was read directly and confirmed to say what it is cited for, on 24 July 2026.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Why "it returned HTTP 200" is not verification',
          text: 'Two of these sources sit on hosts that refuse automated requests: legifrance.gouv.fr and the interior ministry return an error to a script while serving the document normally to a reader. A status-code check would have wrongly rejected the most authoritative French legal sources available, just as a status-code check elsewhere wrongly accepts a page that no longer contains the cited text. Each source below records how it was verified, and only "content confirmed" means the document was actually read.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, including the precise scope and the stated limitations of each source, is published in the repository at docs/research/france-source-register.md. Limitations are recorded there in the same detail as the claims, because a source used beyond its scope is the failure mode this platform is built to avoid.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in France',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'No primary source describing the institutional organisation of forensic services in France has been read for this pilot. Writing this module from general knowledge of how forensic science works would produce a page that is plausible, unsourced, and — in a safety-sensitive section — exactly the kind of content the editorial policy forbids.',
    },
    {
      moduleId: 'corrections',
      title: 'Corrections and probation in France',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The prison administration, sentence-execution arrangements and probation structures have not been researched from official sources. This module also touches several restricted claim categories — prison population, overcrowding, staffing, conditions — each of which requires a dated official statistic with its counting definition. Publishing it without those would breach the restricted-claim rules this phase introduced.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in France',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The division of competence between customs, border policing and maritime authorities has not been established from primary sources, and the Schengen and EU dimension has not been researched. Collapsing these into a single "border force" is precisely the error the module exists to prevent, so it is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in France',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Several relevant bodies were identified — the Conseil supérieur de la magistrature, the Contrôleur général des lieux de privation de liberté, the Défenseur des droits, and the internal inspectorates — but their legal bases, mandates and powers were not confirmed from primary sources within this pilot. An oversight page that lists bodies without establishing what each can actually do would imply effective accountability without evidence, which the editorial policy specifically prohibits.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of France',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Institutional history requires archival and scholarly sources that were not consulted for this pilot. The risk here is specific: a history assembled from general knowledge tends toward a tidy progression from older institutions to present ones, which is the teleological framing the editorial standards forbid.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for France',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source. The two dated facts established in this pilot — the Constitution of 4 October 1958 and the 1 January 2029 recodification date — are not a timeline, and padding them out with dates recalled rather than sourced is the decorative-timeline failure the standards warn against.',
    },
  ],
};
