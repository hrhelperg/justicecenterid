import type { Guide } from '../types';

/**
 * Wave 8 — the criminal-investigation cluster.
 *
 * These guides own COMPARATIVE and RELATIONAL intent. `what-is-a-criminal-investigation`
 * (in process.ts) already owns what an investigation is; the glossary owns chain of custody,
 * warrants, evidence and disclosure; law-enforcement owns arrest and police jurisdiction.
 * What was left unowned — and what every page here holds — is which institution is legally
 * competent to investigate, and how systems differ in answering that.
 *
 * SAFETY. The `investigations` section already carries an `outOfScope` list naming investigative
 * technique, surveillance capability and anything assisting evasion. Every page here was drafted
 * against it and re-read adversarially afterwards. The operative rule: describe WHO may act and
 * WHAT constrains them, never HOW an act is performed or WHAT THRESHOLD triggers it.
 */
export const INVESTIGATIONS_GUIDES: readonly Guide[] = [
  {
    slug: 'who-investigates-crime',
    title: 'Who investigates crime?',
    shortTitle: 'Who investigates crime',
    question: 'Who is legally responsible for investigating a crime?',
    summary:
      '“The police” is an incomplete answer almost everywhere. Legal responsibility for an investigation may rest with police, with a prosecutor, or with a judge — and the body that performs the work is often not the body that owns it.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-is-a-criminal-investigation',
      'police-vs-prosecutor-investigation',
      'investigative-jurisdiction',
    ],
    relatedInstitutions: [
      'federal-investigative-agency',
      'prosecution-service',
      'national-police',
    ],
    sources: [
      'fr-cpp-art-12',
      'de-stpo-160',
      'de-stpo-163',
      'ie-garda-act-2005',
      'ie-dpp',
      'jp-code-criminal-procedure',
      'br-cpp-1941',
      'br-cf-1988',
      'ke-constitution',
      'us-fbi-28usc533',
      'us-bjs-csllea-2018',
      'es-constitution',
      'pt-cpp',
      'be-ejustice-justice',
      'it-constitution',
      'unodc-e4j-police-accountability',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 9,
    keyTerms: ['criminal-investigation', 'prosecutor', 'jurisdiction'],
    uncertainty: [
      'This page describes where legal responsibility sits. It establishes nothing about how well any arrangement works, and makes no comparison of effectiveness between them.',
      'Each country statement rests on that country’s own instruments. Nothing here should be read across from one system to another.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Ask who investigates crime and the natural answer is “the police”. In most systems that is true of the work and false of the responsibility. Three questions come apart, and different systems answer them with different institutions: who is legally responsible for the investigation, who carries out the investigative acts, and who decides whether a charge follows.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains where legal competence to investigate sits, and how systems allocate it. It is not legal advice, it does not describe investigative technique, surveillance, thresholds of suspicion, or anything that would help a person anticipate, frustrate or evade an investigation.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The allocation exists because investigating is a coercive activity carried out against people who are, at that stage, only suspected. Someone has to be answerable for it in law, and systems differ on whether that someone should be inside the police, inside the prosecution service, or on the bench.',
      },
      {
        kind: 'paragraph',
        text: 'A second and quieter reason is evidential. An investigation produces a record that will later be examined by people who were not present. Placing legal responsibility with an identifiable office is what makes that record attributable.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The police hold the investigation',
            description:
              'Ireland is the clearest case: An Garda Síochána investigates as part of its statutory policing function, and there is no separate national investigation bureau standing apart from the police. New Zealand and, in the ordinary case, the United States work the same way. The charging decision then goes elsewhere — in Ireland, to the Director of Public Prosecutions for indictable matters.',
          },
          {
            term: 'The prosecution holds the investigation',
            description:
              'Germany places it there by statute. Section 160(1) of the Strafprozessordnung requires the Staatsanwaltschaft to investigate the facts as soon as it learns of a suspected offence, and section 160(2) requires it to investigate exculpatory circumstances as well as incriminating ones. The police are not merely instructed: section 163(1) gives them a duty of their own, and Land police do the great bulk of the work.',
          },
          {
            term: 'A magistrate directs a police function',
            description:
              'France allocates it by legal function rather than by organisation. Article 12 of the Code de procédure pénale provides that the police judiciaire is exercised "sous la direction du procureur de la République" by the officers, officials and agents designated in that title. Italy is comparable: the Constitution provides that judicial authorities may directly avail themselves of the judicial police.',
          },
          {
            term: 'The police investigate and the prosecutor may too',
            description:
              'Japan shares it. The prefectural police act as judicial police officials investigating offences under the Code of Criminal Procedure, and a public prosecutor may, when necessary, investigate an offence himself. The decision to institute prosecution rests with the prosecutor alone.',
          },
          {
            term: 'The police conduct a formal inquiry the prosecution then owns',
            description:
              'Brazil runs both. Under Article 4 of the Código de Processo Penal the polícia judiciária — the state Polícia Civil for ordinary crime, the Polícia Federal for federal offences, each led by a delegado — conducts the inquérito. But the public criminal action belongs exclusively to the Ministério Público under Article 129 I of the Constitution, which may also requisition investigative measures and the opening of an inquérito.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Performing the work and owning the case are different facts',
        text: 'Germany is the clearest demonstration. Legal responsibility for the investigation sits with the prosecution, and almost all of the investigative work is done by Land police under their own statutory duty. Someone reading only the statute would overestimate how much prosecutors do; someone watching only the practice would miss who is answerable. Both facts are needed, and most systems require the same double reading.',
      },
      {
        kind: 'paragraph',
        text: 'One system gives a prosecutor an unusually precise power over a police investigation. Kenya’s Constitution allows the Director of Public Prosecutions to direct the Inspector-General of the National Police Service to investigate an allegation of criminal conduct, while providing that no person may direct the Inspector-General about a particular investigation. The prosecutor is the single office that can lawfully set a specific investigation in motion — a power Ireland’s Director of Public Prosecutions is not recorded as holding, in an otherwise similar allocation.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'The police investigate crime and prosecutors prosecute it.',
        reality:
          'That describes Ireland and New Zealand reasonably well and Germany badly. Section 160(1) of the German Strafprozessordnung places the duty to investigate on the prosecution, and section 163(1) places a parallel duty on the police.',
      },
      {
        claim:
          'Common-law systems have police investigate; civil-law systems have prosecutors or judges investigate.',
        reality:
          'The families predict very little. Japan applies a civil-law-derived code with police doing most investigation. Kenya is a common-law system whose prosecutor may constitutionally direct a specific police investigation. Germany, an archetypal civil-law system, has no judge who leads an investigation.',
      },
      {
        claim: 'A national investigative agency investigates the serious crime in its country.',
        reality:
          'Federal or national agencies usually work within enumerated competence rather than across all crime. In the United States most investigation is done by state and local agencies because most crime is a matter of state law, and federal investigative authority is tied to federal offences.',
      },
      {
        claim: 'Whoever investigates decides whether to charge.',
        reality:
          'In Ireland, Kenya, Japan, Brazil and New Zealand the body that gathers the evidence is not the body that decides the charge. Where the same magistracy holds both, as in France, that is a different design rather than a missing safeguard.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The clearest way to see the variation is to ask a single question of each system: if an investigation goes wrong, whose responsibility was it in law?',
      },
      {
        kind: 'list',
        items: [
          'Ireland, New Zealand: the police service.',
          'Germany: the prosecution service, though the police did most of the work under their own duty.',
          'France, Italy: a magistrate of the prosecuting office, who directs the function.',
          'Belgium, Portugal, Spain: the prosecutor, or an investigating judge where one has been seised.',
          'Brazil: the police for the inquérito; the Ministério Público for the action, and for external control of police activity.',
          'United States: whichever agency held competence over that offence, at whichever level.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Every arrangement on this page places intrusive investigative steps behind an authorisation held by someone outside the investigating team. What differs is who that person is and how early they appear — not whether the gate exists.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The German provision is worth stating because it is explicit about something most systems leave implicit: the duty to investigate runs in both directions. Section 160(2) requires the prosecution to establish exculpatory circumstances as well as incriminating ones. An investigation that only looks for guilt is not a thorough investigation; in that system it is an incomplete performance of a statutory duty.',
        claim: 'fact',
        sources: ['de-stpo-160'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'An investigation is not a finding',
        text: 'Being investigated establishes nothing about a person. The whole structure described here exists because an accusation has to be tested before it counts, and because the testing has to be done by identifiable offices that can be held to it afterwards.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a criminal investigation is](/investigations/what-is-a-criminal-investigation), [police and prosecutor investigation](/investigations/police-vs-prosecutor-investigation), and [investigative jurisdiction](/investigations/investigative-jurisdiction).',
      },
    ],
  },
  {
    slug: 'police-vs-prosecutor-investigation',
    title: 'Police and prosecutor investigation',
    shortTitle: 'Police and prosecutor investigation',
    question:
      'What is the difference between a police investigation and a prosecutor-led investigation?',
    summary:
      'Systems differ on who owns an investigation, who performs it, and who may direct whom. These are three separate questions, and the answers do not track each other — the body doing the work is frequently not the body responsible for it.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['who-investigates-crime', 'investigation-to-prosecution', 'judicial-police'],
    relatedInstitutions: ['prosecution-service', 'national-police', 'gendarmerie'],
    sources: [
      'fr-cpp-art-12',
      'fr-justice-parquet',
      'de-stpo-160',
      'de-stpo-163',
      'it-constitution',
      'it-legge-121-1981',
      'ie-garda-act-2005',
      'ie-dpp',
      'jp-code-criminal-procedure',
      'ke-constitution',
      'br-cf-1988',
      'ar-cppf',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 10,
    keyTerms: ['prosecutor', 'criminal-investigation'],
    uncertainty: [
      'No arrangement on this page is presented as better than another. Whether prosecutorial direction improves investigations is an empirical question this page does not answer and no source here addresses.',
      'Whether Ireland’s Director of Public Prosecutions may direct an ordinary Garda investigation was not established, and is not claimed. The Irish sources establish the separation of investigation from the charging decision, not a direction power.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The phrase “prosecutor-led investigation” suggests prosecutors doing the investigating. That is rarely what it means. In almost every system where prosecutors lead, police officers still knock on the doors, take the statements and examine the material. What changes is who is legally responsible for the investigation, and who may lawfully tell whom what to do.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ownership: which office is legally responsible for the investigation.',
          'Execution: which personnel actually perform the investigative acts.',
          'Direction: whether one of those offices may lawfully instruct the other.',
          'Authorisation: who must approve the intrusive steps.',
          'Charging: who decides whether a prosecution follows.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how responsibility for investigation is allocated between police and prosecutors. It is not legal advice, and it describes no investigative technique, threshold or method.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Both designs answer the same worry from opposite directions. Investigation is a legal process that produces a case, and a case has to be built to a standard someone else will test. If prosecutors are involved only at the end, they inherit a record they had no hand in shaping. If they direct from the beginning, the office that will argue the case also shaped the evidence.',
      },
      {
        kind: 'paragraph',
        text: 'Neither risk is imaginary and neither design eliminates both. Systems have chosen differently, and the choice is usually much older than any modern argument for it.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Direction written into the definition — France',
            description:
              'Article 12 of the Code de procédure pénale does not say that prosecutors may direct investigations. It says the police judiciaire is exercised "sous la direction du procureur de la République" by designated officers, officials and agents. Direction is part of what the function is. The Ministry of Justice describes the procureur as directing the investigation and having the necessary acts performed, and as deciding what happens next — closing the case, using an alternative to prosecution, sending it to court, or referring it to an investigating judge.',
          },
          {
            term: 'Responsibility with the prosecution, duty on the police — Germany',
            description:
              'Section 160(1) of the Strafprozessordnung obliges the Staatsanwaltschaft to investigate once it learns of a suspected offence. Section 163(1) separately obliges the police to investigate offences and take measures that permit no delay. Two duties in one code: the prosecution carries legal responsibility and the charging decision, the Land police carry out the great bulk of the work.',
          },
          {
            term: 'Direction from inside the judiciary — Italy',
            description:
              'Article 109 of the Constitution provides that judicial authorities may directly avail themselves of the judicial police, and Article 17 of Law 121/1981 provides that judicial-police functions are carried out under the dependence and direction of the judicial authority. Because the Italian prosecutor is a magistrate, direction of the investigation sits inside the independent judiciary rather than in the executive.',
          },
          {
            term: 'Investigation and charging in different hands — Ireland',
            description:
              'An Garda Síochána investigates and assembles the evidence; the Director of Public Prosecutions decides whether a serious case is prosecuted on indictment. The investigating officer does not make the charging decision for indictable matters. The sources establish that separation. They do not establish a power in the Director to direct ordinary Garda investigations, and none is claimed here.',
          },
          {
            term: 'A bounded direction power — Kenya',
            description:
              'Kenya’s Constitution allows the Director of Public Prosecutions to direct the Inspector-General to investigate an allegation of criminal conduct, and separately provides that no person may direct the Inspector-General about a particular investigation. The exception and the rule appear in the same constitution. The result is a police-led system with exactly one office able to require a specific investigation.',
          },
          {
            term: 'Both may investigate — Japan',
            description:
              'The prefectural police investigate as judicial police officials, and a public prosecutor may, when necessary, investigate an offence himself. The prosecutor alone institutes the prosecution.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A system can change which model it uses',
        text: 'Argentina’s federal jurisdiction moved from an inquisitorial to an accusatory process: under the Federal Code of Criminal Procedure the prosecution directs the criminal investigation and the police act as its auxiliaries, replacing the older model in which an investigating judge led. Models are choices a legislature can revisit, not properties of a legal tradition.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil shows a further variant, in which the prosecutor’s relationship to the police is not confined to a single case. The Ministério Público holds the public criminal action exclusively, may requisition investigative measures and the opening of an inquérito, and exercises external control over police activity. That is direction over a case and oversight of an institution, held by the same office.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Prosecutor-led means prosecutors do the investigating.',
        reality:
          'In Germany the prosecution carries the legal responsibility and Land police do the great bulk of the work. Ownership and execution are different facts, and conflating them overstates what prosecutors do everywhere.',
      },
      {
        claim: 'Police-led systems have no prosecutorial involvement until charge.',
        reality:
          'Kenya’s Director of Public Prosecutions may constitutionally direct the Inspector-General to investigate an allegation. A system can be police-led and still give a prosecutor a specific statutory power over investigation.',
      },
      {
        claim: 'Prosecutorial direction makes investigations more objective.',
        reality:
          'No source on this page establishes that, and this site makes no such claim. Germany’s objectivity duty is written into the statute rather than derived from who directs; whether direction changes outcomes is an empirical question, not a structural one.',
      },
      {
        claim: 'The relationship between police and prosecutors is adversarial.',
        reality:
          'In every system described here the two are parts of one process with a shared statutory purpose. Where the law allocates direction, it is allocating responsibility, not settling a contest.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Placing the systems on the three axes separately shows how little they move together.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Owned by police, executed by police',
            description: 'Ireland, New Zealand, and the ordinary case in the United States.',
          },
          {
            term: 'Owned by the prosecution, executed by police',
            description:
              'Germany, where the police duty is statutory rather than delegated; France and Italy, where direction is part of the definition of the function.',
          },
          {
            term: 'Owned by police, with a statutory prosecutorial direction power',
            description: 'Kenya.',
          },
          {
            term: 'Shared ownership',
            description: 'Japan, where both police and prosecutor may investigate.',
          },
          {
            term: 'Police inquiry, exclusive prosecutorial action',
            description:
              'Brazil, where the polícia judiciária conducts the inquérito and the Ministério Público alone brings the action.',
          },
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a reader, the practical value of the distinction is that it tells you which office to look at when asking who was answerable. In Germany that is the prosecution even though police did the work. In Ireland it is the Gardaí even though the Director of Public Prosecutions decided the charge.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Neither design is presented as better',
        text: 'Prosecutorial direction places the investigation under an office trained in what a court will require, and concentrates the process in one institution. Police-led investigation separates the gathering of evidence from the decision to use it, and disperses it. Both are real trade-offs, and this site takes no position between them.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who investigates crime](/investigations/who-investigates-crime), [judicial police](/investigations/judicial-police), and [from investigation to prosecution](/investigations/investigation-to-prosecution).',
      },
    ],
  },
  {
    slug: 'judicial-police',
    title: 'Judicial police',
    shortTitle: 'Judicial police',
    question: 'What does “judicial police” mean, and is it a police force?',
    summary:
      'One term, at least three different things. In France it is a legal function exercised by designated personnel; in Brazil an institutional role held by named forces; in Italy personnel drawn from other forces who fall under judicial direction. It almost never means police employed by the judiciary.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'police-vs-prosecutor-investigation',
      'who-investigates-crime',
      'investigating-judge',
    ],
    relatedInstitutions: ['national-police', 'gendarmerie', 'prosecution-service'],
    sources: [
      'fr-cpp-art-12',
      'fr-justice-parquet',
      'br-cpp-1941',
      'br-pf-competencias',
      'it-constitution',
      'it-legge-121-1981',
      'es-constitution',
      'es-lofcs',
      'jp-code-criminal-procedure',
      'be-ejustice-justice',
      'pt-loic',
      'de-stpo-160',
      'de-stpo-163',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 8,
    keyTerms: ['police', 'criminal-investigation', 'prosecutor'],
    uncertainty: [
      'This page explains what the term denotes in the systems researched. It is not a claim that these systems form a single institutional family — the evidence is that they do not, which is why this is a page about terminology rather than an institution type.',
      'Portugal’s and Belgium’s arrangements are stated only as far as their sources establish. The detailed statutory allocation among Portuguese criminal police bodies was read only in part.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Judicial police — police judiciaire, polizia giudiziaria, polícia judiciária, policía judicial — is one of the most reliably mistranslated terms in comparative criminal justice. The English words suggest police who work for the courts. That is not what it means in any system on this page.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The term does not name one kind of thing',
        text: 'In France it is a legal FUNCTION, and who may exercise it is a matter of designation. In Brazil it is an INSTITUTIONAL ROLE discharged by named forces under a delegado. In Italy it is PERSONNEL drawn from the national police forces who fall, for these purposes, under the direction of the judicial authority. Those are three different categories of thing, and no single institution page could describe them without being wrong about two.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains what the term denotes across systems. It is not legal advice, and it describes no investigative technique, power of entry, or operational threshold.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The term exists to mark a distinction most systems need: the same officers who patrol streets and keep order also gather evidence for criminal proceedings, and those two activities answer to different authorities. Judicial police names the second activity, and the label carries the answerability with it.',
      },
      {
        kind: 'paragraph',
        text: 'That is why the term is legal rather than organisational in several systems. It is describing a capacity in which someone acts, not the building they work in.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'France — a function, not an agency',
            description:
              'Article 12 of the Code de procédure pénale provides that "la police judiciaire est exercée, sous la direction du procureur de la République, par les officiers, fonctionnaires et agents désignés au présent titre". Two things follow. Investigation is legally directed by a magistrate of the parquet. And who may exercise the function is a matter of legal designation — which is why personnel from more than one institution, including both the police nationale and the gendarmerie nationale, can carry it out. English-language writing that treats police judiciaire as the name of a single French detective agency is making the most common structural error about French criminal investigation.',
          },
          {
            term: 'Brazil — an institutional role with a named office-holder',
            description:
              'Article 4 of the Código de Processo Penal provides that "a polícia judiciária será exercida pelas autoridades policiais" with the purpose of "a apuração das infrações penais e da sua autoria". In practice that means the state Polícia Civil for ordinary crime and the Polícia Federal for federal offences, each led by a delegado de polícia. Here the term attaches to identifiable forces and a defined office — much closer to an institution than the French usage, and still not a translation of “detective police”.',
          },
          {
            term: 'Italy — personnel under judicial direction',
            description:
              'The judicial police are personnel drawn from the Polizia di Stato, the Arma dei Carabinieri and the Guardia di Finanza. Article 109 of the Constitution provides that judicial authorities may directly avail themselves of the judicial police, and Article 17 of Law 121/1981 provides that judicial-police functions are carried out under the dependence and direction of the judicial authority.',
          },
          {
            term: 'Spain — a capacity in which several different forces act',
            description:
              'Which force investigates depends on where the offence happens: the Mossos d’Esquadra and the Ertzaintza in Catalonia and the Basque Country, the Policía Foral in Navarre, and the Cuerpo Nacional de Policía and Guardia Civil elsewhere. All of them act as judicial police under the direction of an investigating judge and the Ministerio Fiscal. The identity of the force varies by community; the capacity and the direction do not.',
          },
          {
            term: 'Japan — an official status under the code',
            description:
              'Police investigating offences under the Code of Criminal Procedure act as judicial police officials. The status is conferred by the code and describes the capacity in which they investigate.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Belgium shows what happens when the term is attached to a standing organisation and the organisation is then abolished. Before 2001 Belgium had a separate judicial police attached to the prosecutors’ offices, alongside the gendarmerie and the municipal police. The Law of 7 December 1998 merged all three into a single integrated service on federal and local levels with effect from 1 January 2001. A reader who meets the Belgian judicial police in an older text is meeting a body that no longer exists.',
        claim: 'fact',
        sources: ['be-ejustice-justice'],
      },
    ],
    misconceptions: [
      {
        claim: 'Judicial police are police employed by the judiciary.',
        reality:
          'Not in any system on this page. In France the personnel belong to the police nationale, the gendarmerie and other bodies; in Italy to the national police forces; in Brazil to the Polícia Civil and Polícia Federal. What the judiciary or the parquet holds is direction, not employment.',
      },
      {
        claim: 'Judicial police is the local term for detectives.',
        reality:
          'The French term is a legal function that designated officers exercise, not a job title. Detective as a role is a different subject, and this site treats it as one.',
      },
      {
        claim:
          'Because several countries use the term, judicial police is a global institution type.',
        reality:
          'The opposite conclusion follows from the evidence. A function, an institutional role and a personnel status cannot be one institution family, which is why this is a page about a term rather than an entry in the institution taxonomy.',
      },
      {
        claim: 'Judicial police exist wherever there is a civil-law system.',
        reality:
          'Germany allocates investigation between the prosecution and the Land police under sections 160 and 163 of the Strafprozessordnung without using this category to do it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The most reliable way to read the term in an unfamiliar system is to ask three questions of it, because the answers differ even among systems that share the words.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Is it a function someone exercises, a status someone holds, or an organisation someone belongs to?',
          'Who directs it — a prosecutor, a judge, or a police hierarchy?',
          'Does the personnel remain in their home force while exercising it?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'For France the answers are: a function, the procureur, yes. For Brazil: an institutional role, the police authority itself with the Ministério Público holding the action and external control, yes. For Italy: a status, the judicial authority, yes. Three systems, three different first answers.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The reason the distinction matters beyond translation is that it determines who is answerable for an investigative act. Where the function is directed by a magistrate, an act done badly is a failure within the magistracy’s responsibility. Where it belongs to a police institution, it is that institution’s.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'A note on reading across',
        text: 'Nothing on this page licenses assuming that a country using this term has the French arrangement. The term travelled between legal systems more successfully than the structure behind it did, and the structure is what determines who may do what.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [police and prosecutor investigation](/investigations/police-vs-prosecutor-investigation), [the investigating judge](/investigations/investigating-judge), and [France](/countries/france).',
      },
    ],
  },
  {
    slug: 'investigating-judge',
    title: 'The investigating judge',
    shortTitle: 'Investigating judge',
    question: 'What is an investigating judge, and do all civil-law systems have one?',
    summary:
      'Two incompatible offices share this English name. In France and Belgium a judge conducts an investigation. In Germany a judge acts on the prosecution’s application and checks whether the requested act is lawful. Both are officially called investigating judges.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['who-investigates-crime', 'judicial-police', 'investigation-to-prosecution'],
    relatedInstitutions: ['prosecution-service', 'national-police'],
    sources: [
      'de-stpo-162-ermittlungsrichter',
      'de-stpo-english-translation',
      'de-stpo-160',
      'fr-cpp-art-12',
      'fr-justice-parquet',
      'be-ejustice-justice',
      'pt-cpp',
      'es-constitution',
      'it-constitution',
      'ar-cppf',
      'nl-ejustice-professions',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 10,
    keyTerms: ['court', 'judicial-independence', 'criminal-investigation'],
    uncertainty: [
      'The Dutch rechter-commissaris is recorded in the corpus as existing, and its powers were not researched from the primary statutes. It is named here as an instance of the office and nothing is claimed about what it may do.',
      'The detailed powers of the Belgian and Portuguese investigating judges rest on official descriptions rather than on a full reading of the codes of criminal procedure.',
      'This page describes what the office is and where it exists. It makes no claim that investigations supervised by a judge are fairer, more thorough or more reliable than those that are not.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'An investigating judge is a member of the judiciary with a role in the investigation of a criminal case, before any trial. That is as far as a single definition can safely go, because the English phrase is used for two offices whose relationship to the investigation is opposite.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The directing type',
            description:
              'A judge who conducts a judicial investigation: seised of a case, directing the gathering of evidence both for and against the suspect, and authorising the most intrusive measures. Belgium’s juge d’instruction / onderzoeksrechter and Portugal’s judge in the instrução phase work this way, and France may refer a case to an investigating judge.',
          },
          {
            term: 'The authorising type',
            description:
              'A judge who does not own the investigation at all. The prosecution applies; the judge decides whether the requested act is legally permissible and performs the judicial acts. Germany’s Ermittlungsrichter under section 162 of the Strafprozessordnung is this kind of office.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains an office and its variation. It is not legal advice, it does not describe what evidence a judge will authorise or on what showing, and it contains nothing that would help a person anticipate or frustrate an investigation.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The directing type exists because of a judgement that the most intrusive stage of a criminal process should be conducted by someone with judicial independence rather than by a party to it. The judge is charged with gathering evidence in both directions, which is a different posture from an investigator building a case.',
      },
      {
        kind: 'paragraph',
        text: 'The authorising type exists for a narrower reason: that an intrusive act should be checked by someone outside the investigating institution before it is done. That is a gate, not a leadership role, and it is compatible with the investigation belonging entirely to the prosecution.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany is the case that settles the terminology, because its own law uses the term for the second kind of office. Section 162 of the Strafprozessordnung is headed "Ermittlungsrichter", which the Federal Ministry of Justice’s official English translation renders as "Investigating judge".',
        claim: 'fact',
        sources: ['de-stpo-162-ermittlungsrichter', 'de-stpo-english-translation'],
      },
      {
        kind: 'paragraph',
        text: 'What that judge does is set out in the same section. Under section 162(1), where the Staatsanwaltschaft considers a judicial investigative act necessary, it "stellt sie ihre Anträge" — submits its applications — to the local court. Under section 162(2), "Das Gericht hat zu prüfen, ob die beantragte Handlung nach den Umständen des Falles gesetzlich zulässig ist": the court must examine whether the requested act is legally permissible in the circumstances of the case. The judge is asked a question by the prosecution and answers it. The investigation itself belongs to the prosecution under section 160.',
        claim: 'fact',
        sources: ['de-stpo-162-ermittlungsrichter', 'de-stpo-160'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Same words, opposite office',
        text: 'A Belgian investigating judge is seised of a case and conducts the judicial investigation; the police carry out acts under that direction. A German investigating judge waits to be asked and rules on legality. Both offices are called investigating judges in official English. Reading a German case through the Belgian model — or the reverse — gets the central fact backwards.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Belgium — two tracks',
            description:
              'Criminal investigation is directed by the magistracy rather than the police. In the ordinary investigation the public prosecutor directs the enquiry; where more intrusive coercive measures are needed, an investigating judge is appointed to conduct a judicial investigation. The police carry out the investigative acts under that direction.',
          },
          {
            term: 'Portugal — an optional phase',
            description:
              'A two-phase, magistrate-directed model. The prosecution directs the inquérito, and an investigating judge conducts the optional judicial-investigation phase, the instrução. The second phase is not automatic.',
          },
          {
            term: 'France — a referral',
            description:
              'The procureur directs the investigation and decides what happens next, and one of the available paths is referring the matter to an investigating judge. The office is a destination for particular cases, not the default route for all of them.',
          },
          {
            term: 'Spain — alongside the prosecution',
            description:
              'Spanish criminal procedure places the investigation under judicial and prosecutorial direction together: an investigating judge and the Ministerio Fiscal oversee the inquiry, and the police act as judicial police under that direction.',
          },
          {
            term: 'Italy — a different office again',
            description:
              'The prosecutor directs the judicial police, and a separate figure — the giudice per le indagini preliminari, the judge for preliminary investigations — provides judicial oversight of the pre-trial phase, authorising intrusive measures and guarding the rights of the person under investigation. This is oversight and authorisation, not direction of the inquiry.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The office is also not permanent. Argentina’s federal jurisdiction moved to an accusatory process under the Federal Code of Criminal Procedure, in which the prosecution directs the investigation and the police act as its auxiliaries — replacing the older model in which an investigating judge led. Where the office exists, it exists because a legislature has kept it.',
        claim: 'fact',
        sources: ['ar-cppf'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every civil-law country has an investigating judge who leads investigations.',
        reality:
          'Germany does not. Sections 160 and 163 of the Strafprozessordnung allocate the investigation between the prosecution and the police, and the judge under section 162 acts on application. Argentina’s federal system replaced its investigating-judge model. Italy has a judge for preliminary investigations who authorises and supervises rather than directs.',
      },
      {
        claim: 'An investigating judge is a trial judge who investigates.',
        reality:
          'They are distinct offices with distinct functions. The point of a judicial investigation is that it produces a record for a court; a judge who conducted the investigation is not the judge who tries the case.',
      },
      {
        claim:
          'If a country calls someone an investigating judge, that person runs the investigation.',
        reality:
          'Germany’s official English translation applies the term to a judge who rules on applications made by the prosecution. The label does not tell you which of the two offices you are looking at.',
      },
      {
        claim: 'Judicial supervision makes an investigation fairer.',
        reality:
          'No source here establishes that, and this site does not claim it. What judicial involvement changes is who is answerable and at what point; whether outcomes differ is an empirical question outside the scope of these sources.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The useful question about any judge in an investigation is not what they are called but which of three things they do.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Conduct the investigation — Belgium in the judicial-investigation track, Portugal in the instrução, France where a case is referred.',
          'Authorise particular acts on application — Germany under section 162, Italy through the judge for preliminary investigations.',
          'Neither, with authorisation held elsewhere in the judiciary — the common-law systems on this site, where warrants are issued by courts that have no other role in the inquiry.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands has a rechter-commissaris, recorded in this corpus as existing with its powers not researched from the primary statutes. It is listed here as an instance of the office; which of the three roles above it performs is not established and is not asserted.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Both types perform the same underlying safeguard, at different points. Someone outside the investigating team has to approve the intrusive steps. Whether that person also directs the inquiry is a second question, and systems that answer it differently are not thereby providing more or less protection — they are locating it differently.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The German provision states the safeguard unusually plainly. The court’s task under section 162(2) is to examine whether the requested act is legally permissible in the circumstances of the case. Not whether it would be useful, and not whether the suspicion is strong enough to satisfy the investigator — whether the law permits it.',
        claim: 'fact',
        sources: ['de-stpo-162-ermittlungsrichter'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'An investigation is not a verdict',
        text: 'A judge’s involvement at the investigative stage is not a finding about the person investigated. In systems with a directing investigating judge the office is charged with gathering what exonerates as well as what incriminates, which is the clearest institutional statement that the question is still open.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [judicial police](/investigations/judicial-police), [who investigates crime](/investigations/who-investigates-crime), and [what courts do](/courts/what-do-courts-do).',
      },
    ],
  },
  {
    slug: 'investigative-jurisdiction',
    title: 'Investigative jurisdiction',
    shortTitle: 'Investigative jurisdiction',
    question: 'Which institution is legally competent to investigate a particular crime?',
    summary:
      'Competence to investigate follows the offence, the level of government and sometimes the suspect — not simply the place. Two agencies can both be lawfully present at the same scene, and neither commands the other.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['who-investigates-crime', 'police-jurisdiction', 'investigation-to-prosecution'],
    relatedInstitutions: [
      'federal-investigative-agency',
      'state-police',
      'independent-police-investigative-body',
    ],
    sources: [
      'us-fbi-28usc533',
      'us-bjs-csllea-2018',
      'us-const-amend-10',
      'us-usmarshals-duties',
      'br-pf-competencias',
      'br-cpp-1941',
      'es-lofcs',
      'es-constitution',
      'de-stpo-163',
      'cz-act-341-2011-consolidated',
      'no-pataleinstruksen-kap34',
      'ke-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 9,
    keyTerms: ['jurisdiction', 'criminal-investigation'],
    uncertainty: [
      'This page describes how competence is allocated. It does not describe how agencies resolve disputes about it in practice, which is largely a matter of protocol and negotiation rather than published rule.',
      'Nothing here identifies a gap in coverage, and no arrangement is described in a way intended to show where competence is uncertain.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Police jurisdiction asks which force may act in a given place. Investigative jurisdiction asks a different question: which institution is legally competent to investigate a particular matter. The two answers come apart constantly, and the second is the one that determines who owns a case.',
      },
      {
        kind: 'list',
        items: [
          'The offence — many systems assign competence by what is alleged rather than by where it happened.',
          'The level of government — whether the offence is against national or sub-national law.',
          'The suspect — several systems route cases involving officials to a different institution entirely.',
          'The stage — competence can move once a matter passes to a prosecutor or a judge.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how legal competence to investigate is allocated between institutions. It is not legal advice. It describes no investigative technique, surveillance capability or operational threshold, and nothing here is intended or usable as a guide to which authority might fail to act in a given situation.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Competence rules exist because more than one body is usually capable of investigating and only one can be answerable for it. Without an allocation, two agencies working the same matter would each be able to assume the other was doing it, and neither could be held to the result.',
      },
      {
        kind: 'paragraph',
        text: 'They also exist because some cases should not be investigated by the obvious body. Where the suspect is a police officer, the institution best placed to investigate is often the one least able to be seen doing it independently.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Competence by offence and level — the United States',
            description:
              'Most criminal investigation is done by state and local agencies — the Bureau of Justice Statistics counted 17,541 general-purpose state and local law-enforcement agencies — because most crime is a matter of state law. Federal investigative authority is tied to federal offences: the statutory basis for federal investigators authorises appointment "to detect and prosecute crimes against the United States", and preserves the investigative authority assigned by law to other agencies. Federal investigators work within enumerated competence, not across all crime.',
          },
          {
            term: 'Competence by offence within one country — Brazil',
            description:
              'The polícia judiciária conducts the inquérito, and which force does so depends on the offence: the state Polícia Civil for ordinary crimes, the Polícia Federal for federal ones. The same act of investigating is allocated between two institutions by the character of what is alleged.',
          },
          {
            term: 'Competence by territory within one legal framework — Spain',
            description:
              'Which police investigate depends on where the offence happens: the Mossos d’Esquadra and Ertzaintza in Catalonia and the Basque Country, the Policía Foral in Navarre, and the Cuerpo Nacional de Policía and Guardia Civil elsewhere. The criminal law and procedure they apply are the same national ones throughout.',
          },
          {
            term: 'Competence by suspect — Czechia and Norway',
            description:
              'Some systems move a case out of the ordinary police entirely when the suspect is an official. Czechia’s General Inspection of Security Forces investigates crimes by officers of the police, the customs administration and the prison service. Norway’s Spesialenheten investigates criminal acts committed in the course of duty by employees of the police or the prosecuting authority. In both, competence follows who is suspected rather than what was done or where.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Overlap is not hierarchy',
        text: 'That two agencies may both be competent does not mean one directs the other. In the United States the Marshals Service assists state and local agencies in locating fugitives, and assistance across levels is routine — a command relationship across them is not. Reading co-operation as supervision is the commonest error made about federal and local investigation.',
      },
      {
        kind: 'paragraph',
        text: 'Competence can also be assigned by an office rather than by a rule. Kenya’s Constitution allows the Director of Public Prosecutions to direct the Inspector-General to investigate an allegation of criminal conduct, while providing that no one else may direct the Inspector-General about a particular investigation. That is a competence question answered by naming who may decide it.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'Investigative jurisdiction is the same as police jurisdiction.',
        reality:
          'Police jurisdiction is about where a force may act. Investigative jurisdiction is about which institution owns a matter. A force can be lawfully present at a scene it has no competence to investigate.',
      },
      {
        claim: 'A national agency can take any serious case it wants.',
        reality:
          'Federal and national investigative bodies generally work within enumerated competence. The United States ties federal investigative authority to federal offences and expressly preserves authority assigned by law to other agencies.',
      },
      {
        claim: 'Where jurisdictions overlap, the higher level is in charge.',
        reality:
          'Levels of government are not ranks. Assistance between them is routine and a command relationship is not; in federal systems the levels answer to different authorities entirely.',
      },
      {
        claim: 'Competence is decided by where the crime happened.',
        reality:
          'Place is one factor among several. Brazil allocates by offence, Czechia and Norway by who is suspected, and several systems shift competence when a matter reaches a prosecutor.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The most consequential variation is whether competence is exclusive or shared, because that determines what happens when two bodies could act.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Exclusive by suspect',
            description:
              'Czechia and Norway remove offences by named categories of official from the ordinary police entirely.',
          },
          {
            term: 'Exclusive by offence',
            description:
              'Brazil divides ordinary and federal crime between the Polícia Civil and the Polícia Federal.',
          },
          {
            term: 'Concurrent, with no hierarchy',
            description:
              'The United States, where state, local and federal agencies may each hold competence over conduct that violates more than one body of law.',
          },
          {
            term: 'Territorial within a uniform legal framework',
            description:
              'Spain, where the investigating force changes by autonomous community but the law and the judicial direction do not.',
          },
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Competence rules are an accountability mechanism before they are an administrative one. An identifiable institution owning a matter is what makes it possible to ask afterwards why something was or was not done, and to ask it of someone who cannot answer that it belonged to someone else.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The clearest examples are the ones that route cases away from the obvious investigator. Where a police officer is the suspect, systems that assign competence elsewhere are accepting a loss of familiarity with the material in exchange for an investigation whose independence does not have to be taken on trust.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Related, and not the same',
        text: 'This page sits alongside [police jurisdiction](/law-enforcement/police-jurisdiction), which explains where a force may act, and [who investigates the police](/law-enforcement/who-investigates-police), which explains the special case where the suspect is an officer.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [police jurisdiction](/law-enforcement/police-jurisdiction), [who investigates crime](/investigations/who-investigates-crime), and [federal investigative agencies](/institutions/federal-investigative-agency).',
      },
    ],
  },
  {
    slug: 'investigation-to-prosecution',
    title: 'From investigation to prosecution',
    shortTitle: 'Investigation to prosecution',
    question: 'How does a criminal investigation become a prosecution?',
    summary:
      'The familiar picture is a relay: police investigate, then hand a file to a prosecutor who decides. That describes some systems. In others the prosecutor was legally responsible from the first day, and there is no handover to describe.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'police-vs-prosecutor-investigation',
      'who-investigates-crime',
      'what-does-a-prosecutor-do',
    ],
    relatedInstitutions: ['prosecution-service', 'national-police'],
    sources: [
      'ie-dpp',
      'ie-garda-act-2005',
      'de-stpo-160',
      'fr-justice-parquet',
      'br-cpp-1941',
      'br-cf-1988',
      'jp-code-criminal-procedure',
      'pt-cpp',
      'nz-crown-law',
      'ke-constitution',
      'it-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 9,
    keyTerms: ['prosecutor', 'evidence', 'disclosure'],
    uncertainty: [
      'This page stops at the charging decision. What standard a prosecutor applies to it, how discretion is exercised and how charges are later resolved belong to the prosecution cluster and are deliberately not covered here.',
      'The formal contents of an investigative case file were established only where a source describes them. Where a system’s file is not described in the sources, nothing is claimed about it.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Most descriptions of criminal justice run in a line: investigation, then evidence, then a prosecutor, then a court. The line is a useful summary of some systems and a misleading one for others, because it assumes a moment of handover that several systems do not have.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Whether there is a handover at all is the first question',
        text: 'In Ireland the Gardaí investigate and the Director of Public Prosecutions decides whether a serious case is prosecuted on indictment: there is a real transfer between institutions. In Germany the Staatsanwaltschaft has been legally responsible for the investigation since it learned of the offence, so what looks like a handover is the same office moving from one of its duties to another.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains the transition from investigation to a charging decision. It is not legal advice; it does not describe what evidence is sufficient, what standard a prosecutor applies, or how a case is later resolved.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The transition exists because investigating and charging answer different questions. An investigation asks what happened. A charging decision asks whether what has been established would justify putting a person on trial. The second question cannot be answered until the first has been attempted, and answering it well requires a different kind of judgement.',
      },
      {
        kind: 'paragraph',
        text: 'Where the two are held by different institutions, that separation is itself a safeguard: the body deciding whether the evidence justifies a prosecution is not the body that gathered it. Where they are held by the same magistracy, the safeguard is placed elsewhere — commonly in judicial authorisation and in a statutory duty to pursue exculpatory material.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A file passes between institutions',
            description:
              'Ireland: the Gardaí investigate and assemble the evidence, and the Director of Public Prosecutions decides whether a serious case is prosecuted on indictment. The investigating officer does not make the charging decision for indictable matters, and that separation is deliberate.',
          },
          {
            term: 'A formal record accompanies the charge',
            description:
              'Brazil gives the artefact a name and a legal role. Article 12 of the Código de Processo Penal provides that the inquérito "acompanhará a denúncia ou queixa, sempre que servir de base a uma ou outra" — the police inquiry accompanies the charge whenever it serves as its basis. The charge itself belongs to the Ministério Público, which holds the public criminal action exclusively.',
          },
          {
            term: 'A phase ends rather than a file moves',
            description:
              'Portugal runs a two-phase, magistrate-directed model: the prosecution directs the inquérito, and an optional judicial-investigation phase, the instrução, may follow before the case proceeds. The transition is between procedural phases within a magistrate-directed process.',
          },
          {
            term: 'The same office continues',
            description:
              'Germany: section 160(1) makes the prosecution responsible for investigating in order to decide whether to bring a public charge. Investigating and deciding are two parts of a single statutory task, and the police duty under section 163 runs alongside it rather than preceding it.',
          },
          {
            term: 'Investigation is shared and charging is not',
            description:
              'Japan: the police investigate as judicial police officials and a prosecutor may investigate when necessary, but the prosecutor alone institutes the prosecution. The narrowing happens at the charging point rather than at a transfer of the file.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'France shows how many outcomes the decision point actually has. The Ministry of Justice records that the procureur, having directed the investigation, exercises discretion over what happens next — including closing a case without further action, using an alternative to prosecution, sending the case to court, or referring the matter to an investigating judge. Prosecution is one branch among several, not the default terminus of an investigation.',
        claim: 'fact',
        sources: ['fr-justice-parquet'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every investigation ends in a decision to charge or not to charge.',
        reality:
          'Several systems offer more than two exits. France’s procureur may close a case without action, use an alternative to prosecution, send it to court, or refer it to an investigating judge.',
      },
      {
        claim: 'The police decide who gets prosecuted.',
        reality:
          'In Ireland, Japan, Brazil, Kenya and New Zealand the charging decision for serious matters belongs to a prosecuting authority, not to the investigators.',
      },
      {
        claim: 'A completed investigation means the prosecutor has a strong case.',
        reality:
          'An investigation establishes what could be found, not what a court will accept. The charging decision exists precisely because those are different judgements, made by a body that was not committed to the theory being tested.',
      },
      {
        claim: 'A decision not to prosecute means the investigation failed.',
        reality:
          'It may mean the investigation worked. An investigation that establishes there is no case to answer has answered the question it was set, and in Germany the duty to establish exculpatory circumstances is written into the same provision that requires the investigation.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Whether a system has a handover at all depends on where responsibility sat during the investigation, which is the subject of the [police and prosecutor](/investigations/police-vs-prosecutor-investigation) page.',
      },
      {
        kind: 'list',
        items: [
          'A genuine inter-institutional transfer: Ireland, New Zealand, Kenya.',
          'A transfer of a formal record with legal status: Brazil, where the inquérito accompanies the charge when it serves as its basis.',
          'A movement between phases of one magistrate-directed process: France, Portugal, Italy.',
          'A continuation by the same responsible office: Germany.',
          'A narrowing at the charging point after shared investigation: Japan.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Whatever the shape, one feature recurs: the decision to charge is recorded and attributable. That is what allows it to be questioned afterwards, and it is why systems that separate the two functions describe the separation as a check rather than as an administrative convenience.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A charge is an allegation',
        text: 'A charging decision states that a case is fit to be tested, not that the person is guilty. Everything after this point exists to test it, and the presumption of innocence is not suspended because an investigation concluded.',
      },
      {
        kind: 'paragraph',
        text: 'What a prosecutor does with the decision — the standard applied, how discretion is exercised, and what obligations follow — belongs to [what a prosecutor does](/prosecution/what-does-a-prosecutor-do) and to the prosecution cluster rather than to this page.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [police and prosecutor investigation](/investigations/police-vs-prosecutor-investigation), [what a prosecutor does](/prosecution/what-does-a-prosecutor-do), and [disclosure](/glossary/disclosure).',
      },
    ],
  },
];
