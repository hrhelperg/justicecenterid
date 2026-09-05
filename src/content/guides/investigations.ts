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
        text: 'A society that cannot investigate crime cannot answer the question of what happened, and cannot offer anyone harmed by an offence a process that takes it seriously. Investigative capacity is not a concession a legal system makes; it is one of the things a legal system is for. The institutions on this page exist because that capacity has to be located somewhere identifiable.',
      },
      {
        kind: 'paragraph',
        text: 'The allocation exists because investigating is at the same time a coercive activity carried out against people who are, at that stage, only suspected. Someone has to be answerable for it in law, and systems differ on whether that someone should be inside the police, inside the prosecution service, or on the bench.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Both halves are the design',
        text: 'The safeguards described across this cluster are not restraints imposed on investigation from outside it. Authorisation requirements, duties to pursue exculpatory material and separated charging decisions are what allow an investigation’s conclusions to be relied on afterwards. A system with no capacity to investigate fails the people it was built to protect; a system whose investigations cannot be checked produces findings no one has reason to accept. Every arrangement here is an attempt at both.',
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
  /* ==========================================================================
     WAVE 21 — investigation as a rights problem
     ==========================================================================
     Before this wave /investigations was entirely institutional: who investigates,
     which body is competent, what an investigating judge is. It said nothing about
     what protected interest an investigative act touches or what authorisation it
     needs — `seizure` appeared zero times in the whole corpus and `privacy` twice,
     both incidental.

     These three pages are deliberately NOT called "search and seizure". That title
     was rejected in the cannibalization audit on Part B grounds, and rejecting it
     is what produced the wave's central finding: two of the constitutions here
     reach searches through privacy and never state a warrant rule, two state a
     warrant rule and never use the word privacy, and one requires a judge for
     communications but not, textually, for the home — the reverse emphasis from
     its neighbour.

     SAFETY. Every page here describes legal architecture and nothing operational.
     None of them describes how a search is conducted, how any authorisation is
     obtained or resisted, how evidence is handled, or anything a person could use
     to frustrate a lawful investigative act. The Wave 16 anti-forensics guard
     applies to this cluster and is re-asserted in the Wave 21 test file.
     ========================================================================== */
  {
    slug: 'what-privacy-protects-in-law',
    title: 'What privacy protects in law',
    shortTitle: 'What privacy protects',
    question: 'What exactly does a legal system protect when it protects privacy?',
    summary:
      'Not one interest but several, bundled differently in each text. Switzerland puts private life, the home, mail and telecommunications in one article; South Africa defines privacy by the searches it forbids; Brazil separates intimacy from the house and both from communications.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'searching-a-home',
      'intercepting-communications',
      'what-is-a-criminal-investigation',
    ],
    sources: [
      'ch-constitution',
      'de-grundgesetz',
      'nl-constitution',
      'es-constitution',
      'br-cf-1988',
      'cz-listina',
      'za-constitution',
      'ke-constitution',
      'ca-charter-1982',
      'us-bill-of-rights',
      'echr-convention',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 10,
    uncertainty: [
      'Every statement here is constitutional or treaty text. No case law was researched, and in several of these systems the operative content of the right is judicial.',
      'Data-protection statutes are outside this page. Several texts direct the legislature to make rules about personal data; what those rules say was not researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: '"Privacy" is a single English word covering interests that constitutions treat as distinct. Reading across the texts, the recurring components are a person’s private and family life, the place they live, what they say to other people, their reputation and image, and information recorded about them — and no two instruments bundle those the same way.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains what constitutional and treaty texts protect under the heading of privacy. It describes no investigative technique, states no country’s procedure, is not data-protection law, and is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'An investigation works by finding out things people have not volunteered. That is not an incidental feature of investigation; it is what investigation is. A legal system that wanted crimes solved and also wanted people left alone therefore has to say which parts of a life are protected, and what has to happen before an investigator may reach into them.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Naming the interest is what makes the authorisation rule possible',
        text: 'A system cannot require judicial authorisation for entering a home unless it has first said that a home is protected. This is why the privacy articles and the search articles are usually the same article, or adjacent ones: the protected interest defines what counts as an interference, and the authorisation rule then says who may commit one.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Switzerland bundles the widest set into one provision. Article 13(1) of the Bundesverfassung: "Jede Person hat Anspruch auf Achtung ihres Privat- und Familienlebens, ihrer Wohnung sowie ihres Brief-, Post- und Fernmeldeverkehrs" — every person is entitled to respect for their private and family life, their home, and their mail, post and telecommunications. Article 13(2) adds a second interest: protection against the misuse of personal data.',
        claim: 'fact',
        sources: ['ch-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'The European Convention groups the same four in one sentence at Article 8(1): "Everyone has the right to respect for his private and family life, his home and his correspondence."',
        claim: 'fact',
        sources: ['echr-convention'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Where a text draws the bundle changes what a single decision settles',
        text: 'Where private life, the home and correspondence sit in one provision, a question about any of them is a question about that provision. Where they sit in three provisions with three different authorisation rules — as they do in Germany and in Brazil — the answer for one does not carry to the others. That is a structural difference, not a stylistic one.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'South Africa — privacy defined by what may not be done',
            description:
              'Section 14 does not describe an interest and then protect it. It reads: "Everyone has the right to privacy, which includes the right not to have — (a) their person or home searched; (b) their property searched; (c) their possessions seized; or (d) the privacy of their communications infringed." Search and seizure are stated as components of privacy rather than as a separate guarantee.',
          },
          {
            term: 'Kenya — the same structure, with an information limb',
            description:
              'Article 31 uses South Africa’s shape and adds one: "(c) information relating to their family or private affairs unnecessarily required or revealed". The word doing the work there is "unnecessarily", and it appears in the definition of the right rather than in a limitation clause.',
          },
          {
            term: 'Brazil — three separate incisos, three different rules',
            description:
              'Article 5º X protects intimacy, private life, honour and image, and attaches a right to indemnity for material or moral damage from their violation. Article 5º XI protects the house as the inviolable asylum of the individual. Article 5º XII protects the secrecy of correspondence and of telegraphic, data and telephone communications. Each carries its own exceptions.',
          },
          {
            term: 'Czechia — the person, the private life, the data, the dwelling and the letters, in four articles',
            description:
              'Article 7(1) guarantees the inviolability of the person and of her privacy; Article 10(2) protection from unauthorized intrusion into private and family life and 10(3) from the unauthorized gathering, public revelation or other misuse of personal data; Article 12 the dwelling; Article 13 the confidentiality of letters, papers and records and of telephone and telegraph communications.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands puts the limitation inside the right rather than in a separate clause. Article 10(1) of the Grondwet reads: "Ieder heeft, behoudens bij of krachtens de wet te stellen beperkingen, recht op eerbiediging van zijn persoonlijke levenssfeer" — everyone has, subject to restrictions laid down by or pursuant to statute, the right to respect for their personal sphere of life. Article 10(2) and 10(3) then direct the legislature to make rules protecting that sphere in relation to the recording and supplying of personal data, and rules on access to and correction of recorded data.',
        claim: 'fact',
        sources: ['nl-constitution'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two texts protect the searches without naming privacy',
        text: 'Neither the Fourth Amendment nor section 8 of the Canadian Charter uses the word. The Fourth Amendment secures "the right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures"; section 8 states that "Everyone has the right to be secure against unreasonable search or seizure". They reach the subject from the opposite end from South Africa and Kenya, which name privacy and define it by the searches it excludes.',
      },
      {
        kind: 'paragraph',
        text: 'Germany names neither a general privacy right nor a search-and-seizure right in the provisions read for this wave. It states two inviolabilities without naming a holder: Article 10(1), "Das Briefgeheimnis sowie das Post- und Fernmeldegeheimnis sind unverletzlich", and Article 13(1), "Die Wohnung ist unverletzlich". Spain does the reverse and names the interests directly: Article 18(1) guarantees the rights to honour, to personal and family intimacy, and to one’s own image.',
        claim: 'fact',
        sources: ['de-grundgesetz', 'es-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'Privacy means one thing, and legal systems protect more or less of it.',
        reality:
          'They protect differently shaped bundles. Switzerland and the European Convention put private life, the home and communications in one provision; Brazil splits them across three incisos with different exceptions; Czechia across four articles.',
      },
      {
        claim: 'A constitution that does not use the word "privacy" does not protect it.',
        reality:
          'The Fourth Amendment and section 8 of the Canadian Charter never use the word and are the provisions those systems’ search rules rest on. Germany states two inviolabilities — of the home and of the secrecy of communications — without a general privacy article in the provisions read here.',
      },
      {
        claim: 'Search and seizure is a separate subject from privacy.',
        reality:
          'In two of these constitutions it is a component of it. South Africa’s section 14 and Kenya’s Article 31 both define the right to privacy as including the right not to have one’s person, home or property searched or possessions seized.',
        note: 'Which is why this site does not carry a page called "search and seizure": the phrase adopts one family of texts as the taxonomy for all of them.',
      },
      {
        claim: 'Protecting privacy means the state may not gather information about people.',
        reality:
          'Every text here contemplates lawful interference. Kenya’s Article 31(c) protects against information being "unnecessarily" required or revealed, which presupposes that requiring it is sometimes necessary; the Dutch Article 10(1) states the right "behoudens bij of krachtens de wet te stellen beperkingen".',
      },
      {
        claim: 'Data protection and constitutional privacy are the same thing.',
        reality:
          'Several texts separate them expressly. Switzerland’s Article 13(2) is a distinct paragraph on misuse of personal data; the Dutch Article 10(2) and 10(3) direct the legislature to make data rules; Czechia states data misuse in Article 10(3), separately from private life in 10(2).',
        note: 'What any of those statutes contain was not researched for this page.',
      },
      {
        claim: 'A violation of privacy is remedied the same way everywhere.',
        reality:
          'Brazil states a remedy in the right itself: Article 5º X assures "o direito a indenização pelo dano material ou moral decorrente de sua violação". None of the other provisions read here names a remedy inside the privacy article.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four ways to organise the same subject.',
      },
      {
        kind: 'list',
        items: [
          'One provision covering private life, the home and communications together — Switzerland, BV Art. 13; European Convention, Art. 8(1).',
          'A named right to privacy defined by the searches and seizures it excludes — South Africa, s. 14; Kenya, Art. 31, which adds an information limb.',
          'Separate provisions for separate interests, each with its own exceptions — Brazil, CF Art. 5º X, XI and XII; Czechia, Listina Arts. 7, 10, 12 and 13; Germany, GG Arts. 10 and 13.',
          'A search-and-seizure provision that never uses the word privacy — United States, Amendment IV; Canada, Charter s. 8.',
          'The limitation written inside the right rather than in a separate clause — Netherlands, Gw Art. 10(1).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each constitutional provision is the law of its own country. The European Convention binds the states party to it and is not evidence of any state’s domestic law. Nothing here supports a claim about a system not named.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'What a protected interest gives an oversight body is a category to ask about. If the constitution names the home, the correspondence and the personal data separately, an investigation that touched all three engaged three provisions and may have required three different authorisations — and a review that treated it as one act would have asked one question where the text asks three.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What has to happen before a home is entered is [searching a home](/investigations/searching-a-home); the separate question for letters and calls is [intercepting communications](/investigations/intercepting-communications). What happens to material obtained unlawfully is [what happens to unlawfully obtained evidence](/justice/what-happens-to-unlawfully-obtained-evidence).',
      },
      {
        kind: 'paragraph',
        text: 'Several of these texts say in terms that the interference they regulate is an investigative one. Brazil’s Article 5º XII permits interference with telephone communications, by judicial order, "para fins de investigação criminal ou instrução processual penal" — for the purposes of criminal investigation or criminal procedural instruction.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'None of this makes investigation suspect. The provisions on this page exist alongside institutions that are expected to find out what happened, and the protected interest and the investigative power are drafted together, by the same drafters, in the same document.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [searching a home](/investigations/searching-a-home), [intercepting communications](/investigations/intercepting-communications), and [what is a criminal investigation](/investigations/what-is-a-criminal-investigation). For the statutory authority that operates beneath these constitutional protections, see [legal authority and technical capability](/investigations/legal-authority-and-technical-capability).',
      },
    ],
  },
  {
    slug: 'searching-a-home',
    title: 'Searching a home',
    shortTitle: 'Searching a home',
    question: 'What has to happen before officials may enter and search someone’s home?',
    summary:
      'Different things in different systems, and the differences are textual. Germany and Czechia require a judge; Spain accepts consent, a judicial decision or flagrante delicto; Brazil confines judicial authorisation to daytime; the Netherlands requires identification and a written report but no judge.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-privacy-protects-in-law',
      'intercepting-communications',
      'investigative-jurisdiction',
    ],
    sources: [
      'de-grundgesetz',
      'cz-listina',
      'es-constitution',
      'br-cf-1988',
      'nl-constitution',
      'ie-constitution',
      'jp-constitution',
      'us-bill-of-rights',
      'ca-charter-1982',
      'za-constitution',
      'ke-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 11,
    uncertainty: [
      'These are constitutional provisions. The procedural codes that operate under them — which is where most of the detail of any real authorisation lives — were not researched for any system here.',
      'Nothing on this page describes how a search is carried out, and no operational detail was sought. That is a deliberate limit on the research, not a gap in it.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Almost every constitution read for this wave says something about entering the place a person lives, and the provisions are unusually specific — more specific, in several systems, than the provisions about liberty. What they specify is who may authorise the entry, and on what.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains what constitutional texts require before a home may be entered and searched. It describes no search procedure, no technique, and nothing about how any authorisation is obtained, challenged, delayed or avoided. It states no country’s operational law and is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Investigators need to be able to enter premises, because a great deal of evidence is in places its owner would prefer they did not look. Occupants need the entry to be bounded, because a power to enter a home at will is a power over everything and everyone inside it. Every provision on this page is an attempt to hold both propositions at once.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why so many texts reach for a judge',
        text: 'The recurring answer is to move the decision to somebody who is not conducting the investigation. That is the same design principle as the clock before a judge in a detention case: not that the investigator’s judgement is worthless, but that a decision made by the only interested party leaves no record that anyone else was persuaded.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany states the strongest and most detailed version. Article 13(1) of the Grundgesetz: "Die Wohnung ist unverletzlich." Article 13(2) then sets the authorisation rule: "Durchsuchungen dürfen nur durch den Richter, bei Gefahr im Verzuge auch durch die in den Gesetzen vorgesehenen anderen Organe angeordnet und nur in der dort vorgeschriebenen Form durchgeführt werden" — searches may be ordered only by a judge, or where time is of the essence by other authorities designated by the laws, and carried out only in the prescribed form.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'The same article then does something no other text here does: it grades the authorisation by the severity of the measure. Technical acoustic surveillance of a home under Article 13(3) requires particular facts justifying suspicion of an especially serious crime specifically defined by a law, is available only where alternative methods would be disproportionately difficult or unproductive, must be for a limited time, and must be ordered by a panel of three judges — a single judge only where time is of the essence. Article 13(6) requires the Federal Government to report annually to the Bundestag, and an elected panel to exercise parliamentary oversight on that basis.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'One judge, three judges, and a report to parliament',
        text: 'Article 13 treats "who authorises this" as a scale rather than a switch. An ordinary search needs a judge; listening inside the home needs three, plus a time limit and a threshold about the offence; and the whole category is reported annually to a parliamentary panel. A summary that recorded only "Germany requires a warrant" would have described the least interesting thing the article does.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Czechia — a written, reasoned judicial warrant, and only for a criminal proceeding',
            description:
              'Article 12(1) of the Listina makes the dwelling inviolable and bars entry without the permission of the person living there. Article 12(2): "A dwelling may be searched only for the purposes of a criminal proceeding on the basis of a search warrant issued by a judge in writing and giving the reasons therefore." Article 12(3) then handles everything that is not a criminal search separately, permitting other encroachments by law only where "necessary in a democratic society" for the life or health of individuals, the rights and freedoms of others, or to avert a serious threat to public security and order.',
          },
          {
            term: 'Spain — three gateways, stated as a closed set',
            description:
              'Article 18(2): "El domicilio es inviolable. Ninguna entrada o registro podrá hacerse en él sin consentimiento del titular o resolución judicial, salvo en caso de flagrante delito." Consent of the holder, a judicial decision, or flagrante delicto — and the sentence admits nothing else.',
          },
          {
            term: 'Brazil — the only text here that fixes the time of day',
            description:
              'Article 5º XI: "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial." Consent, flagrante delicto, disaster, or to render assistance — and judicial determination, expressly during the day.',
          },
          {
            term: 'Ireland — inviolability with the rule left to statute',
            description:
              'Article 40.5: "The dwelling of every citizen is inviolable and shall not be forcibly entered save in accordance with law." The constitution states the protection and refers the conditions to law rather than setting them.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands is the case that makes the comparison worth drawing, because it does not require a judge and does require things nobody else does. Article 12(1) of the Grondwet permits entry without the occupant’s consent only in cases laid down by or pursuant to statute, by persons designated by or pursuant to statute. Article 12(2) requires prior identification and a statement of the purpose of the entry. Article 12(3) requires that the occupant be given a written report of the entry as soon as possible — deferrable, under statutory rules, where the entry was in the interest of national security or of criminal procedure.',
        claim: 'fact',
        sources: ['nl-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two safeguards doing the same job by opposite routes',
        text: 'A judicial-warrant rule puts an independent decision before the entry. The Dutch rule puts an identified official and a written record around it. One protects by requiring someone else to agree in advance; the other by making the entry documented and attributable afterwards. Calling only the first a safeguard would misdescribe what Article 12 is for.',
      },
      {
        kind: 'paragraph',
        text: 'Japan and the United States both state a warrant rule, and their texts are not the same. The Fourth Amendment secures the people against unreasonable searches and seizures of "their persons, houses, papers, and effects", and provides that no warrants shall issue but upon probable cause, supported by oath or affirmation, and particularly describing the place to be searched and the persons or things to be seized. Article 35 of the Constitution of Japan protects "the right of all persons to be secure in their homes, papers and effects" — the list does not include persons — and adds a requirement with no American counterpart: "Each search or seizure shall be made upon separate warrant issued by a competent judicial officer."',
        claim: 'fact',
        sources: ['us-bill-of-rights', 'jp-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'And three constitutions state no authorisation rule for the home at all. Canada’s section 8 reads in its entirety: "Everyone has the right to be secure against unreasonable search or seizure." South Africa’s section 14 and Kenya’s Article 31 list the searches privacy excludes and say nothing about who may authorise one; in both, the answer runs through the general limitation clause and whatever statute the legislature has enacted under it.',
        claim: 'fact',
        sources: ['ca-charter-1982', 'za-constitution', 'ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'A warrant is required to search a home.',
        reality:
          'It depends on the text. Germany and Czechia require a judicial order; Spain accepts consent or flagrante delicto as alternatives to one; the Dutch Article 12 requires no judicial authorisation at all; and Canada’s section 8 states only that a search must not be unreasonable.',
      },
      {
        claim: 'Warrant rules are essentially the same wherever they exist.',
        reality:
          'Japan requires a separate warrant for each search or seizure, which the Fourth Amendment does not. Czechia confines its judicial search warrant to the purposes of a criminal proceeding. Germany requires three judges rather than one for acoustic surveillance of a home.',
      },
      {
        claim: 'If there is no judge in the provision, the entry is unregulated.',
        reality:
          'The Dutch Article 12 requires statutory authority, statutorily designated officials, prior identification, a statement of purpose, and a written report to the occupant. That is four requirements, none of which is judicial authorisation.',
      },
      {
        claim: 'The American search-and-seizure model is the standard other systems vary from.',
        reality:
          'It is one of several. Two constitutions here reach searches through a right to privacy and never state a warrant rule; one states inviolability and refers the conditions to statute; one requires a written reasoned judicial warrant and confines it to criminal proceedings.',
        note: 'This site does not use "search and seizure" as its own heading for this subject, because the phrase adopts one family of texts as the taxonomy for all of them.',
      },
      {
        claim: 'A home may only be entered to investigate a crime.',
        reality:
          'Brazil’s Article 5º XI permits entry in case of disaster or to render assistance. Czechia’s Article 12(3) permits other encroachments where necessary in a democratic society for the life or health of individuals or to avert a serious threat to public security and order. Germany’s Article 13(4) permits technical surveillance to avert acute dangers to public safety.',
        note: 'Several of these provisions are about rescue and danger rather than about evidence.',
      },
      {
        claim:
          'Constitutional protection of the home means the same thing for everyone in the country.',
        reality:
          'The wording differs. Ireland’s Article 40.5 protects "the dwelling of every citizen"; Germany’s Article 13(1) states that the dwelling is inviolable without naming a holder; South Africa and Kenya word their privacy provisions for everyone and every person.',
        note: 'What any court has made of those words was not researched.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six authorisation architectures, and the axis is who decides rather than how strict the standard is.',
      },
      {
        kind: 'list',
        items: [
          'A judge, with the requirement graded by the severity of the measure — Germany, GG Art. 13(2)–(4): one judge for a search, three for acoustic surveillance, with annual reporting to the Bundestag.',
          'A written, reasoned judicial warrant, confined to criminal proceedings — Czechia, Listina Art. 12(2), with non-criminal encroachments handled separately in Art. 12(3).',
          'A closed set of gateways of which a judicial decision is one — Spain, CE Art. 18(2); Brazil, CF Art. 5º XI, which additionally confines the judicial route to daytime.',
          'No judicial requirement; statutory authority, identified officials, prior notice of purpose and a written report to the occupant — Netherlands, Gw Art. 12.',
          'A warrant rule stated in the constitution itself — United States, Amendment IV; Japan, Art. 35, which adds a separate-warrant-per-measure requirement.',
          'No authorisation rule stated at all — Canada, Charter s. 8; South Africa, s. 14; Kenya, Art. 31; Ireland, Art. 40.5, which refers the conditions to law.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each constitutional provision is the law of its own country. The procedural codes operating under them were not researched, and no statement here describes how any search is actually conducted anywhere.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Three of these texts build the record into the requirement rather than leaving it to practice. Czechia requires the judicial warrant to be in writing and to give reasons. The Netherlands requires a written report of the entry to be given to the occupant. Germany requires annual reporting to the Bundestag on the use of technical means under Article 13(3) to (5), with a parliamentary panel exercising oversight on the basis of that report.',
        claim: 'fact',
        sources: ['cz-listina', 'nl-constitution', 'de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Parliamentary oversight of a category, not of a case',
        text: 'The German annual report is unusual in that its audience is a legislature rather than a court, and its subject is the aggregate use of a power rather than one exercise of it. Judicial authorisation asks whether this measure was justified; a reporting duty asks how often the power is being used at all, which is a question no individual case can answer.',
      },
      {
        kind: 'paragraph',
        text: 'What follows from an unlawful entry is a separate question with its own page, and the answers differ as much as the authorisation rules do: Brazil states in Article 5º LVI that evidence obtained by illicit means is inadmissible, while section 24(2) of the Canadian Charter excludes evidence only where its admission would bring the administration of justice into disrepute.',
        claim: 'fact',
        sources: ['br-cf-1988', 'ca-charter-1982'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what privacy protects in law](/investigations/what-privacy-protects-in-law), [intercepting communications](/investigations/intercepting-communications), and [what happens to unlawfully obtained evidence](/justice/what-happens-to-unlawfully-obtained-evidence). The procedural codes this page records as unresearched are the subject of [device seizure and device examination](/investigations/device-seizure-and-device-examination) and [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure).',
      },
    ],
  },
  {
    slug: 'intercepting-communications',
    title: 'Intercepting communications',
    shortTitle: 'Intercepting communications',
    question:
      'Is reading someone’s letters or listening to their calls treated like searching their home?',
    summary:
      'Not in the same way, and two neighbouring systems answer in opposite directions. The Netherlands requires a judge for communications but not for the home; Germany requires a judge for the home and, for some communications cases, replaces court recourse with parliamentary review.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'searching-a-home',
      'what-privacy-protects-in-law',
      'what-is-a-criminal-investigation',
    ],
    sources: [
      'de-grundgesetz',
      'nl-constitution',
      'es-constitution',
      'br-cf-1988',
      'cz-listina',
      'ch-constitution',
      'za-constitution',
      'ke-constitution',
      'echr-convention',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 10,
    uncertainty: [
      'These are constitutional provisions. The interception statutes operating under them were not researched, and in every system here the operative detail is statutory.',
      'Nothing on this page describes any interception technique, any means of avoiding one, or anything about how communications are secured or examined. That is a deliberate limit on the research.',
      'Whether any of these texts reaches a form of communication that did not exist when it was drafted is a question of interpretation, not of text, and was not researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Most constitutions that protect the home also protect what a person says to somebody else — letters, post, telephone calls, telegraph, and in some texts data. What almost none of them do is protect the two in the same way, and the differences are sharper here than anywhere else in this wave.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains what constitutional texts require before communications may be intercepted. It describes no technique, no system, no means of interception and nothing about avoiding, detecting or defeating one. It states no country’s operational law and is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A conversation has at least two parties, happens somewhere the state can reach without entering anyone’s house, and — unlike a search — can be listened to for weeks without the person ever knowing. Those three features are why systems that treat the home and communications under one heading still tend to write different rules for them.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The absence of notice is the structural problem',
        text: 'A person whose home is searched knows it happened and can complain about it. A person whose calls were listened to may never find out, which means the ordinary route of challenge is not available to them by default. That is why the interception provisions in several of these texts are unusually preoccupied with who authorises, who reviews, and whether anyone is told.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Netherlands requires a judge for communications and, in the article immediately before, requires none for the home. Article 13(1) of the Grondwet: "Ieder heeft recht op eerbiediging van zijn brief- en telecommunicatiegeheim." Article 13(2): restriction is possible in cases laid down by statute "met machtiging van de rechter" — with the authorisation of the court — or, in the interest of national security, by or with the authorisation of those designated for the purpose by statute.',
        claim: 'fact',
        sources: ['nl-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Germany runs the comparison in reverse. Article 13(2) requires a judge to order a search of the home. Article 10(2), for the secrecy of correspondence, posts and telecommunications, requires only that restrictions be ordered pursuant to a law — and then adds that where the restriction serves to protect the free democratic basic order or the existence or security of the Federation or of a Land, the law may provide that the person affected shall not be informed, and that recourse to the courts shall be replaced by review by agencies and auxiliary agencies appointed by the legislature. Article 19(4), which opens the courts to anyone whose rights are violated by public authority, expressly leaves that second sentence unaffected.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two neighbours, opposite emphases, and one substitution',
        text: 'The Dutch text puts the judge on communications and not on the home; the German text puts the judge on the home and, in one category of communications case, substitutes a legislature-appointed reviewer for the court entirely. That substitution is what makes Article 10(2) worth reading closely: it does not remove review, it changes who conducts it and removes the notification that would normally trigger it.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Spain — judicial decision, with no other route stated',
            description:
              'Article 18(3): "Se garantiza el secreto de las comunicaciones y, en especial, de las postales, telegráficas y telefónicas, salvo resolución judicial." The exception is a judicial decision and the text names no alternative — not consent, not urgency, and not a national-security route of the kind the Dutch and German provisions contain.',
          },
          {
            term: 'Brazil — one category, one authority, one purpose',
            description:
              'Article 5º XII protects the secrecy of correspondence and of telegraphic, data and telephone communications, "salvo, no último caso, por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal". The exception reaches the last-named category only, requires a judicial order, and is confined to criminal investigation or criminal procedural instruction.',
          },
          {
            term: 'Czechia — the same protection for old and new means',
            description:
              'Article 13 of the Listina bars violating the confidentiality of letters or of other papers or records, whether privately kept or sent by post or by some other means, except in the cases and manner designated by law — and then adds that "The confidentiality of communications sent by telephone, telegraph, or by other similar devices is guaranteed in the same way."',
          },
          {
            term: 'Switzerland — inside the general privacy provision',
            description:
              'Article 13(1) of the Bundesverfassung entitles every person to respect for their "Brief-, Post- und Fernmeldeverkehr" in the same sentence as their private and family life and their home. The authorisation question is therefore answered by the general limitation clause at Article 36 rather than by a rule specific to communications.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Brazil’s exception is the narrowest read in this wave',
        text: 'Three limits operate at once in one sentence: only telephone communications, only on judicial order, and only for criminal investigation or criminal procedural instruction. A measure that satisfied two of those and not the third would not be within the exception as written.',
      },
      {
        kind: 'paragraph',
        text: 'South Africa and Kenya, consistent with how they treat searches, state the interest and not the authorisation. Section 14(d) makes the privacy of a person’s communications a component of the right to privacy; Article 31(d) does the same. Neither states who may authorise an interference, which is left to the general limitation clause and to statute.',
        claim: 'fact',
        sources: ['za-constitution', 'ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'The European Convention places correspondence alongside private life and the home in Article 8(1) and applies the same limitation clause to all of them: an interference must be in accordance with the law and necessary in a democratic society for one of the aims Article 8(2) lists.',
        claim: 'fact',
        sources: ['echr-convention'],
      },
    ],
    misconceptions: [
      {
        claim: 'Interception is treated the same as a search of a home.',
        reality:
          'In most of these texts it is not. The Dutch Article 13(2) requires judicial authorisation where Article 12 does not; the German Article 10(2) requires only a legal basis where Article 13(2) requires a judge; Brazil’s Article 5º XII confines the exception to telephone communications and to criminal investigation.',
      },
      {
        claim: 'A judge must authorise interception.',
        reality:
          'Spain and Brazil require a judicial decision. The Netherlands requires one except in the interest of national security, where statutorily designated persons may authorise. Germany’s Article 10(2) requires a law rather than a judge, and in one category replaces court recourse with review by legislature-appointed agencies.',
      },
      {
        claim: 'A person whose communications were intercepted will be told.',
        reality:
          'Article 10(2) of the Grundgesetz expressly permits a law to provide that the person affected shall not be informed, in the cases it identifies. None of the other provisions read here states a notification duty for interception.',
        note: 'What the statutes operating under these provisions require was not researched.',
      },
      {
        claim: 'If a text protects "correspondence", it protects every form of communication.',
        reality:
          'The texts differ in what they enumerate. Brazil lists correspondence and telegraphic, data and telephone communications, and confines the exception to the last. Czechia lists letters, papers and records and adds telephone, telegraph "or other similar devices". Whether an enumeration reaches a technology invented later is interpretation, not text.',
      },
      {
        claim: 'Replacing a court with another reviewer means there is no review.',
        reality:
          'Article 10(2) substitutes review by agencies and auxiliary agencies appointed by the legislature. That is a different reviewer with a different relationship to the person affected — and Article 19(4) preserves the substitution expressly — but it is not an absence of review.',
        note: 'This page describes what the provision establishes and does not assess how the substituted review operates.',
      },
      {
        claim: 'Constitutions bar the state from ever intercepting communications.',
        reality:
          'Every provision read here contains an exception. Brazil’s exists specifically "para fins de investigação criminal ou instrução processual penal" — the constitution contemplates interception as an investigative tool and states the conditions on it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five ways to authorise an interference with communications.',
      },
      {
        kind: 'list',
        items: [
          'Judicial authorisation, with a national-security route to a statutorily designated authoriser — Netherlands, Gw Art. 13(2).',
          'Judicial decision, with no alternative route stated — Spain, CE Art. 18(3).',
          'Judicial order, confined to one category of communication and to criminal investigation or instruction — Brazil, CF Art. 5º XII.',
          'A legal basis rather than a judge, and in one category a substitution of parliamentary-appointed review for recourse to the courts, with no notification — Germany, GG Art. 10(2) with Art. 19(4).',
          'Cases and manner designated by law, with old and new means protected alike — Czechia, Listina Art. 13.',
          'No specific rule; the interest sits inside the general privacy provision and the general limitation clause — Switzerland, BV Art. 13 with Art. 36; South Africa, s. 14(d); Kenya, Art. 31(d); European Convention, Art. 8.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each constitutional provision is the law of its own country. The European Convention binds the states party to it and is not evidence of any state’s domestic law. Interception statutes were not researched, and nothing here describes any technique.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Where the person affected is not told, the ordinary accountability route — a complaint by the person wronged — is unavailable, and the systems that permit non-notification tend to name a substitute. Germany’s Article 10(2) names review by agencies and auxiliary agencies appointed by the legislature; the Dutch Article 13(2) keeps a judge in the ordinary case and names statutorily designated authorisers only for national security.',
        claim: 'fact',
        sources: ['de-grundgesetz', 'nl-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Who reviews is a design choice, not an oversight',
        text: 'A court is well placed to decide whether one measure against one person was justified, and badly placed to notice that a power is being used ten thousand times a year. A standing parliamentary reviewer is the reverse. The texts that choose the second for communications are choosing the reviewer that fits a power exercised without the subject’s knowledge.',
      },
      {
        kind: 'paragraph',
        text: 'It is worth restating what these provisions assume. Every one of them permits interception on conditions, because a legal system that could not read a letter or listen to a call would be unable to investigate a category of serious offences that leave no other trace. The constitutional question is not whether the power exists but who authorises it, for what, and who checks afterwards.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [searching a home](/investigations/searching-a-home), [what privacy protects in law](/investigations/what-privacy-protects-in-law), and [what is a criminal investigation](/investigations/what-is-a-criminal-investigation). The interception statutes this page records as unresearched are the subject of [interception and stored data](/investigations/interception-and-stored-data) and [content and communications data](/investigations/content-and-communications-data).',
      },
    ],
  },
  /* ==========================================================================
     WAVE 22 — digital investigation as a question of legal authority
     ==========================================================================
     Seven pages, from forty-eight candidates. The baseline found the corpus had
     no digital vocabulary at all — metadata, traffic data, subscriber, stored
     communications, remote access, location data, digital forensics, encryption,
     data retention, computer and device search each occurred ZERO times across
     133 guides — while Wave 21 had published the constitutional layer and
     recorded, in its own uncertainty statements, that the statutes beneath it
     were not researched. This wave is that layer.

     BOUNDARIES, kept explicit because the cannibalization audit turned on them:
       Wave 21 owns the constitutional right and its limit.
       Wave 22 owns the statutory authority operating beneath it.
       Wave 16 owns forensic science as evidence; method is out of scope in both
         sections' declared outOfScope and appears on none of these pages.
       Wave 19 owns review and remedy.

     SAFETY. The /investigations section already declares an outOfScope list
     naming investigative technique at operational specificity, surveillance
     capability and anything assisting evasion. Every page here was drafted
     against it. None describes how a measure is carried out, how data is
     obtained or protected, how any measure could be detected, anticipated or
     frustrated, or what any person should do in any encounter. Three candidate
     pages were rejected on that ground rather than written in a thinned form.
     ========================================================================== */
  {
    slug: 'legal-authority-and-technical-capability',
    title: 'Legal authority and technical capability',
    shortTitle: 'Authority and capability',
    question:
      'If investigators are technically able to obtain something, does that mean they may?',
    summary:
      'No, and two systems say so in terms. Japan’s Code permits compulsory measures only where the Code itself provides for them; Spain forbids authorising a technological measure to discover offences or to dispel suspicion that has no objective basis.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-authorises-a-digital-investigative-measure',
      'device-seizure-and-device-examination',
      'what-is-a-criminal-investigation',
      'what-privacy-protects-in-law',
    ],
    sources: [
      'jp-code-criminal-procedure',
      'es-lecrim-medidas-tecnologicas',
      'coe-cybercrime-convention',
      'de-stpo-100a-tkue',
      'de-stpo-100b-online-durchsuchung',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 9,
    keyTerms: ['criminal-investigation'],
    uncertainty: [
      'Four systems and one treaty were read for this wave, all as statutory or treaty text. No case law was researched in any of them, and in several the operative content of these rules is judicial.',
      'Nothing here describes any investigative technique, any technology, or anything about how data is obtained, held or protected. That is a deliberate limit on the research rather than a gap in it.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Digital investigation is not a legal category. It is the ordinary coercive powers of a criminal investigation, exercised on objects that did not exist when most of those powers were first written, and the question a legal system has to answer about each of them is the same question it answers about a search of a house: on what authority.',
      },
      {
        kind: 'paragraph',
        text: 'What makes the digital case feel different is that the technical answer and the legal answer come apart so visibly. An investigator may be able to obtain something without being permitted to, and may be permitted to obtain something without being able to. Legal systems answer only the second of those, and two of the systems read for this page say so in a single provision.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains how legal systems structure authority over digital investigative measures. It describes no technique, no technology and no method; it states nothing about how any measure is carried out, detected, anticipated or frustrated; and it is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason a system needs a rule here is that capability arrives faster than law and is distributed differently. A power written for letters does not obviously reach a message that was never posted; a power written for a filing cabinet does not obviously reach a storage medium in another country that happens to be readable from a laptop on the desk.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'A system can respond in one of two directions. It can treat the absence of a rule as permission, on the reasoning that nothing forbids it. Or it can treat the absence of a rule as prohibition, on the reasoning that a coercive act against a person requires a positive legal basis. The systems read here take the second route, and one of them states it as a general rule of its whole code.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the second route is the one that makes investigation defensible',
        text: 'A measure taken because nothing forbade it cannot be defended afterwards by reference to anything. A measure taken under a named provision can be tested against that provision — its conditions, its scope, its duration — which is what allows an investigation to survive being examined.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Japan states the rule for its entire criminal procedure in one sentence. Article 197(1) of the Code of Criminal Procedure provides that with regard to investigation, "such examination as is necessary to achieve its objective may be conducted; provided, however, that compulsory dispositions shall not be applied unless special provisions have been established in this Code."',
        claim: 'fact',
        sources: ['jp-code-criminal-procedure'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The proviso is the whole rule',
        text: 'The first half is permissive: investigators may do what the investigation needs. The second half withdraws that permission for anything compulsory, and requires a specific provision of the Code instead. Whether a measure is technically available never enters the sentence.',
      },
      {
        kind: 'paragraph',
        text: 'Spain approaches the same problem from the other end, in the chapter its Criminal Procedure Act devotes to technological investigation measures. Article 588 bis a(2) provides that the principle of especialidad requires a measure to relate to the investigation of a specific offence, and then states a prohibition: "No podrán autorizarse medidas de investigación tecnológica que tengan por objeto prevenir o descubrir delitos o despejar sospechas sin base objetiva" — technological investigation measures may not be authorised whose object is to prevent or discover offences, or to dispel suspicions without objective basis.',
        claim: 'fact',
        sources: ['es-lecrim-medidas-tecnologicas'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two rules, two failure modes',
        text: 'Japan’s provision addresses the measure that has no legal basis at all. Spain’s addresses the measure that has one and is used for something else — looking, rather than investigating a specific offence already suspected on objective grounds. A system needs both, because a power can be exceeded either by being invented or by being repurposed.',
      },
      {
        kind: 'paragraph',
        text: 'Germany shows what the first rule produces in practice. Its Code of Criminal Procedure does not contain a general digital-investigation power; it contains separate provisions for separate acts, each with its own conditions. Monitoring telecommunications under § 100a requires specific facts grounding suspicion of a serious offence from a closed catalogue, that the offence weigh seriously also in the individual case, and that other means would be substantially more difficult or futile. Intervening in an information-technology system to collect data from it under § 100b requires an especially serious offence from a **different and narrower** catalogue.',
        claim: 'fact',
        sources: ['de-stpo-100a-tkue', 'de-stpo-100b-online-durchsuchung'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two digital powers, two thresholds, one code',
        text: 'The most useful thing about the German pair is that neither is "the digital search power". They are different acts with different catalogues, and a measure lawful under one is not thereby lawful under the other. That is what a system looks like when it takes the view that each coercive act needs its own basis.',
      },
      {
        kind: 'paragraph',
        text: 'At treaty level the same premise appears as a scope rule. Article 14 of the Convention on Cybercrime obliges Parties to establish the powers it describes "for the purpose of specific criminal investigations or proceedings", and applies them to the offences the Convention establishes, to other offences committed by means of a computer system, and to the collection of evidence in electronic form of a criminal offence. Article 15 then subjects every one of those powers to conditions and safeguards under domestic law incorporating the principle of proportionality.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
    ],
    misconceptions: [
      {
        claim: 'If investigators can technically obtain something, they are allowed to.',
        reality:
          'Japan’s Code provides that compulsory dispositions shall not be applied unless special provisions have been established in the Code. Technical availability is not one of the conditions in any provision read for this wave.',
      },
      {
        claim: 'Digital investigation is a special legal category with its own rules.',
        reality:
          'It is the ordinary coercive powers applied to new objects. Germany places them inside the general procedure code, Spain in a dedicated chapter of it, the United States across three separate statutory chapters, and Japan puts the interception power outside its code altogether. There is no common location and no single power.',
      },
      {
        claim:
          'A power that covers physical things automatically covers their digital equivalents.',
        reality:
          'The systems read here legislate specifically rather than by analogy. Germany added § 110(3) to extend the examination of papers to electronic storage media, and Spain inserted an entire chapter in 2015 for technological measures. Neither treated the existing provisions as already sufficient.',
        note: 'Whether a given provision reaches an object it does not name is a question of interpretation, and no case law was researched for this wave.',
      },
      {
        claim: 'A legal basis means investigators may use the power to look for wrongdoing.',
        reality:
          'Spain’s article 588 bis a(2) forbids authorising technological measures whose object is to prevent or discover offences, or to dispel suspicions without objective basis. Having the power and having a reason to use it are separate requirements.',
      },
      {
        claim:
          'Because these powers are limited, the state cannot investigate digital offences.',
        reality:
          'Every instrument read here creates powers as well as bounding them. The Convention obliges Parties to establish the power to search computer systems, to order production of stored data, to preserve data expeditiously, to collect traffic data in real time and to intercept content data. The question these rules answer is not whether but on what terms.',
      },
      {
        claim: 'Rules like these exist because investigators are not trusted.',
        reality:
          'They also make a completed investigation defensible. A measure taken under a named provision can be tested against that provision’s conditions afterwards; a measure taken because nothing forbade it cannot be tested against anything.',
        note: 'That is analysis of what the provisions do, not a claim about anyone’s motives.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four systems, four different places to put the same powers — which is itself the first finding.',
      },
      {
        kind: 'list',
        items: [
          'Inside the general procedure code, as separately conditioned powers — Germany, StPO §§ 94, 100a, 100b, 100g, 100j, 110.',
          'In a dedicated chapter of the procedure code, under shared guiding principles — Spain, LECrim arts. 588 bis a and following, inserted by Ley Orgánica 13/2015 and in force from 6 December 2015.',
          'Across separate statutory chapters, each with its own instrument — United States, 18 U.S.C. chs. 119, 121 and 206.',
          'Partly outside the procedure code: Japan’s Art. 222-2 provides that compulsory measures for the interception of electronic communications without the consent of either party "shall be executed based upon other acts".',
          'As a treaty obligation on Parties to establish powers in their own law, subject to Arts. 14 and 15 — Council of Europe, Convention on Cybercrime.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each national provision is the law of its own country. The Convention obliges its Parties to legislate; it is not evidence of what any Party has enacted, and no country claim here rests on it. Twelve of the sixteen jurisdictions this wave was asked to consider were not researched and nothing is asserted about them.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The reason a legal basis matters to accountability is that it supplies the standard against which the measure is later judged. Article 15(2) of the Convention states what those standards must include: judicial or other independent supervision, grounds justifying application, and limitation of the scope and the duration of the power or procedure.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'Why the state’s reach is bounded at all is [what privacy protects in law](/investigations/what-privacy-protects-in-law) and [how a constitutional right can be limited](/justice/how-a-right-can-be-limited). What follows when a power was exceeded is [what happens to unlawfully obtained evidence](/justice/what-happens-to-unlawfully-obtained-evidence). This page is the layer between them: what authority exists, and where it comes from.',
      },
      {
        kind: 'paragraph',
        text: 'It is worth saying plainly what these provisions assume. Each of them exists because a society wanted the offences in question investigated. Germany’s catalogues are lists of offences serious enough to justify the measure, not lists of measures the state is reluctant to permit; the Convention’s Article 14 extends the powers to the collection of evidence in electronic form of any criminal offence. The constraint and the capability were drafted together.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure), [device seizure and device examination](/investigations/device-seizure-and-device-examination), and [what privacy protects in law](/investigations/what-privacy-protects-in-law).',
      },
    ],
  },
  {
    slug: 'device-seizure-and-device-examination',
    title: 'Device seizure and device examination',
    shortTitle: 'Seizure and examination',
    question: 'Officials have taken a device. Does that mean they may read what is on it?',
    summary:
      'Taking a thing and reading it are separate legal acts, and in German law they belong to separate authorities: the examination of electronic storage media is the prosecution office’s, not the officers’ who hold the device.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'legal-authority-and-technical-capability',
      'who-authorises-a-digital-investigative-measure',
      'searching-a-home',
      'evidence-integrity-and-admissibility',
    ],
    sources: [
      'de-stpo-94-beschlagnahme',
      'de-stpo-110-durchsicht',
      'coe-cybercrime-convention',
      'jp-code-criminal-procedure',
      'es-lecrim-medidas-tecnologicas',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 10,
    keyTerms: ['evidence', 'chain-of-custody'],
    uncertainty: [
      'Germany and the Convention are described from primary text; Japan from an official reference translation whose version indicator reflects amendments to 2006 and may lag later ones. Spain’s chapter on technological measures was read for its guiding principles only, not for the article governing seizure of storage devices.',
      'United States device-search law rests largely on constitutional case law, which this wave did not research. Nothing here is asserted about it.',
      'Nothing on this page describes how any examination is performed, what any tool can do, or anything about how data on a device is stored or protected. That is a deliberate limit on the research.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Two different things happen to a device in an investigation, and legal systems treat them as two different acts. One is taking it — removing it from someone’s control and holding it. The other is examining what is on it. The first is about an object; the second is about its contents, and the contents are usually where the intrusion is.',
      },
      {
        kind: 'paragraph',
        text: 'The systems read for this page keep the two apart in their text, and one of them keeps them apart institutionally as well.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains how legal systems separate taking a device from examining it. It describes no examination method, no tool and no technology; it says nothing about how data on a device is stored, protected, recovered or altered; and it is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A device has to be taken before it can be examined, and the taking is often urgent — done at a scene, on the spot, by whoever is there. The examination is not urgent in the same way, is far more intrusive, and reaches material that has nothing to do with the offence: the same storage medium holds the thing being looked for and a person’s correspondence, photographs, finances and health.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the second act is the one that gets the safeguard',
        text: 'If the two were one act, the urgency of the first would set the standard for the second, and a decision made in seconds at a doorstep would authorise reading everything a person has. Separating them lets a system keep the taking fast and the reading conditioned.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'German law separates the two acts across two provisions and then does something further. § 94(1) of the Strafprozessordnung provides that objects which may be of significance as evidence are to be taken into custody or otherwise secured; § 94(2) provides that where the objects are in a person’s custody and are not surrendered voluntarily, "so bedarf es der Beschlagnahme" — seizure is required. That is the taking.',
        claim: 'fact',
        sources: ['de-stpo-94-beschlagnahme'],
      },
      {
        kind: 'paragraph',
        text: 'The examination is § 110, and it belongs to someone else. § 110(1) provides that the *Durchsicht* of the papers of the person affected by the search "steht der Staatsanwaltschaft und auf deren Anordnung ihren Ermittlungspersonen" — belongs to the public prosecution office and, on its order, its investigators. § 110(2) provides that other officials may examine found papers only where the holder consents; failing that, they must place the papers they consider it necessary to examine in an envelope, seal it with the official seal **in the holder’s presence**, and deliver them to the prosecution office. § 110(3) applies the same regime to electronic storage media.',
        claim: 'fact',
        sources: ['de-stpo-110-durchsicht'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The distinction is institutional, not just conceptual',
        text: 'In this system the officers who may hold the device are not, by that fact, the officials to whom reading it belongs. The sealed envelope in § 110(2) exists precisely to move the material from one to the other without either the reading happening early or the material being lost. A summary that said "the police seized the phone and searched it" would have described two acts and one authority where the code provides for two of each.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The Convention enumerates the powers separately',
            description:
              'Article 19 of the Convention on Cybercrime lists them one by one. Article 19(1) is the power to search or similarly access a computer system or a computer-data storage medium. Article 19(3) is the power to seize or similarly secure, and it contains four distinct sub-powers: to seize or similarly secure the system or medium; to make and retain a copy of the data; to maintain the integrity of the stored data; and to render inaccessible or remove the data in the accessed system.',
          },
          {
            term: 'Copying is its own power',
            description:
              'Article 19(3)(b) states the power to "make and retain a copy of those computer data" separately from the power to seize the medium in 19(3)(a). A system that has authorised one has not thereby authorised the other, and the Convention obliges Parties to provide for both because they do different things.',
          },
          {
            term: 'Japan distinguishes them inside the warrant',
            description:
              'Article 218(1) of the Code of Criminal Procedure permits search, seizure or inspection upon a warrant issued by a judge. Article 219(1) then requires the warrant to state the name of the suspect or accused, the charged offence, **the articles to be seized** and, separately, the place, body or articles to be searched — together with a valid period, after which the measure may not be commenced and the warrant is returned to the court.',
          },
          {
            term: 'Spain conditions the whole family at once',
            description:
              'Rather than separating the acts provision by provision, the LECrim chapter on technological measures subjects all of them to the same guiding principles in article 588 bis a — especialidad, idoneidad, excepcionalidad, necesidad and proporcionalidad — with idoneidad defining the objective and subjective scope of any measure by reference to its usefulness.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'One further question arises only in the digital case: what happens when the material sought is reachable from the device but is not on it. German law answers narrowly. The second sentence of § 110(3) permits the examination to be extended to spatially separated storage media, but only so far as they can be accessed from the electronic storage medium **and** only where the loss of the sought data would otherwise be feared. Article 19(2) of the Convention permits a comparable extension where the further data is "lawfully accessible from or available to the initial system".',
        claim: 'fact',
        sources: ['de-stpo-110-durchsicht', 'coe-cybercrime-convention'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'An extension is not a new power',
        text: 'Both provisions extend an examination that was already authorised, on stated conditions, to material the authorised examination can reach. Neither creates a free-standing power to reach into a system from a distance. Germany has such a power and it is a different provision with a much higher threshold — § 100b, discussed under [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure).',
      },
    ],
    misconceptions: [
      {
        claim: 'If officials have lawfully taken a device, they may examine what is on it.',
        reality:
          'German law treats these as separate acts under separate provisions, and assigns the examination of electronic storage media to the public prosecution office rather than to whoever holds the device. Officials without that competence may examine found material only with the holder’s consent, and must otherwise seal it in the holder’s presence and deliver it.',
      },
      {
        claim: 'Seizing a device and copying its data are the same thing.',
        reality:
          'Article 19(3) of the Convention on Cybercrime lists them as separate powers: to seize or similarly secure the system or medium at (a), and to make and retain a copy of the data at (b). Parties are obliged to provide for both.',
      },
      {
        claim: 'A warrant to search a place covers examining any device found there.',
        reality:
          'Japan’s Article 219(1) requires the warrant to state the articles to be seized and, separately, the place, body or articles to be searched. The two are specified as different things within one instrument.',
        note: 'What any particular warrant covers is a question about that warrant, and no case law was researched here.',
      },
      {
        claim: 'Examining a device is the same thing as forensic examination.',
        reality:
          'They are different questions with different owners on this site. Whether there is legal authority to examine, and whose competence it is, is what this page describes. What an examination can scientifically establish, and whether a court may receive the result, is forensic science, and the forensics section owns it.',
      },
      {
        claim: 'Data that can be reached from a seized device is covered by the seizure.',
        reality:
          'German law permits extending the examination to spatially separated storage media only where they are accessible from the medium being examined and where the loss of the sought data would otherwise be feared. The Convention’s Article 19(2) requires the further data to be lawfully accessible from the initial system. Both are conditioned extensions of an authorised act.',
      },
      {
        claim: 'Because examination is conditioned, devices cannot be examined.',
        reality:
          'Every instrument read here provides for it. The Convention obliges Parties to establish the power to search or similarly access a computer system and to seize, copy and preserve data found there; German law provides for the Durchsicht of electronic storage media and permits data of significance to be secured.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four ways of keeping the acts apart.',
      },
      {
        kind: 'list',
        items: [
          'Separate provisions and separate authorities — Germany, StPO § 94 for taking the object, § 110 for the examination, which belongs to the Staatsanwaltschaft.',
          'Separately enumerated powers in one article — Council of Europe, Convention Art. 19(1) access, 19(3)(a) seizure of the medium, 19(3)(b) making and retaining a copy, 19(3)(c) maintaining integrity, 19(3)(d) rendering data inaccessible.',
          'Separately specified within one warrant, with a valid period — Japan, CCP Arts. 218(1) and 219(1).',
          'A single set of guiding principles governing the whole family of technological measures — Spain, LECrim art. 588 bis a.',
          'Conditioned extension to storage not on the device — Germany, § 110(3) second sentence; Convention Art. 19(2).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each national provision is the law of its own country. The Convention obliges Parties to legislate and is not evidence of what any Party enacted. United States device-search law was not researched and nothing is asserted about it.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The safeguard German law attaches to the handover is worth noticing because it is procedural rather than substantive. § 110(2) requires the envelope to be sealed with the official seal **in the presence of the holder** — the person whose material it is witnesses the point at which it passes out of their sight. Nothing in that requirement decides whether the examination may happen; it decides whether what is examined is what was taken.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What a court does with material obtained beyond the authority is [what happens to unlawfully obtained evidence](/justice/what-happens-to-unlawfully-obtained-evidence). Whether an item is what it is said to be, and whether a court may receive it, is [evidence integrity and admissibility](/forensics/evidence-integrity-and-admissibility). The constitutional protection of the place where a device is usually found is [searching a home](/investigations/searching-a-home).',
      },
      {
        kind: 'paragraph',
        text: 'Article 19(4) of the Convention adds one power that sits oddly beside the others and is worth stating precisely: Parties shall empower their authorities to order any person who has knowledge about the functioning of the computer system, or the measures applied to protect data in it, to provide **as is reasonable** the necessary information to enable the search or access. What "as is reasonable" permits, and how it interacts with a person’s own protections against being compelled, is a question of each Party’s domestic law and was not researched.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [legal authority and technical capability](/investigations/legal-authority-and-technical-capability), [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure), and [evidence integrity and admissibility](/forensics/evidence-integrity-and-admissibility).',
      },
    ],
  },
  {
    slug: 'interception-and-stored-data',
    title: 'Interception and stored data',
    shortTitle: 'Interception and stored data',
    question:
      'Is listening to a conversation the same legal act as obtaining messages already stored?',
    summary:
      'No system read here treats them as one power. The Convention gives each its own article; Germany conditions them differently in the same code; and Japan’s Code excludes interception altogether, routing it to a separate Act.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'content-and-communications-data',
      'who-authorises-a-digital-investigative-measure',
      'intercepting-communications',
      'preserving-data-and-producing-it',
    ],
    sources: [
      'coe-cybercrime-convention',
      'de-stpo-100a-tkue',
      'de-stpo-110-durchsicht',
      'jp-code-criminal-procedure',
      'us-18usc-2703-stored-communications',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 10,
    uncertainty: [
      'The United States Wiretap Act was not read for this wave; only the stored-communications provisions were. Nothing here states the American standard for real-time interception.',
      'The Japanese Act to which Article 222-2 refers was not read. That the Code excludes interception is a fact about the Code and says nothing about the content of the separate Act.',
      'Nothing here describes any interception method, any technology, or anything about how a communication is transmitted, secured or obtained. That is a deliberate limit on the research.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A communication can be reached at two different moments: while it is passing between the parties, and afterwards, when a copy of it is sitting somewhere. The two look similar to a reader and are not the same act in any legal system examined for this page.',
      },
      {
        kind: 'paragraph',
        text: 'The difference is not primarily technical. Interception reaches a communication that has not happened yet, for a period into the future, against a person who does not know. Obtaining stored material reaches something that already exists, in a definite quantity, usually from a third party who holds it. Those are different intrusions and they attract different rules.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains how legal systems categorise two investigative acts. It describes no method of interception or access, names no technology, and states nothing about how communications are transmitted, protected or obtained. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason systems separate them is that the future tense changes what an authorisation is doing. An order to obtain stored material is an order about a known quantity of existing data. An order to intercept is a licence to collect whatever occurs during a period — including communications with people who are not suspected of anything, about subjects that have nothing to do with the investigation, which have not happened yet and therefore cannot be described in advance.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which is why duration appears in one and not the other',
        text: 'An authorisation to intercept has to say when it stops, because it authorises collection of something not yet in existence. An order for stored material does not need a duration in the same sense; it needs a description of what is to be handed over. The shape of the safeguard follows the shape of the act.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Convention on Cybercrime allocates them to different articles in different titles. Stored computer data is reached under Article 19, the power to search or similarly access a computer system or storage medium, and under Article 18, the power to order a person to submit specified stored computer data. Real-time collection is Title 5: Article 20 for traffic data, and Article 21 for content data — the latter available only "in relation to a range of serious offences to be determined by domestic law".',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The Convention says which is the narrower power',
        text: 'Article 14(3)(a) permits a Party to restrict the real-time traffic-data power to specified offences only if the range is "not more restricted than" the range to which it applies content interception. The instrument therefore assumes content interception is the more constrained of the two and requires the other not to be constrained further.',
      },
      {
        kind: 'paragraph',
        text: 'Germany places both inside its Code of Criminal Procedure and conditions them differently. Monitoring telecommunications under § 100a requires specific facts grounding suspicion of a serious offence from the § 100a(2) catalogue, that the offence weigh seriously also in the individual case, and that investigating by other means would be substantially more difficult or futile. Material already on a seized storage medium is reached instead through the examination regime of § 110, which has no offence catalogue at all and belongs to the prosecution office.',
        claim: 'fact',
        sources: ['de-stpo-100a-tkue', 'de-stpo-110-durchsicht'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title:
          'Where German law draws the boundary between them — and it is not "where the data sits"',
        text: 'The third sentence of § 100a(1) permits content and circumstances of communication **stored on** the person’s own system to be monitored under the interception power, but only where they could also have been monitored during the ongoing transmission in the public network in encrypted form. The category is defined by what the interception power would have reached in transit, not by the data’s present location. A system can draw this line by function rather than by geography, and this one does.',
      },
      {
        kind: 'paragraph',
        text: 'Japan makes the separation structural rather than conditional. Article 218(1) of the Code of Criminal Procedure provides the general power to conduct search, seizure or inspection upon a warrant issued by a judge. Article 222-2 then provides, in a single sentence, that "compulsory measures for the interception of electronic communications without the consent of either party shall be executed based upon other acts" — the Code does not contain the interception power at all.',
        claim: 'fact',
        sources: ['jp-code-criminal-procedure'],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What that absence establishes, and what it does not',
        text: 'It establishes that the Code excludes interception and directs it elsewhere. It establishes nothing about the separate Act — its conditions, its authorising body, or its safeguards — which was not read for this wave. An absence from one instrument is not an absence from a legal system.',
      },
      {
        kind: 'paragraph',
        text: 'United States law puts the two in different statutory chapters, and the stored side is graded internally. Under 18 U.S.C. § 2703(a), a governmental entity may require disclosure of the contents of a communication in electronic storage for one hundred and eighty days or less "only pursuant to a warrant"; contents held longer may be required by the means available under § 2703(b), which permit a warrant without notice, or a subpoena or court order with prior notice to the subscriber or customer, with delayed notice available under § 2705.',
        claim: 'fact',
        sources: ['us-18usc-2703-stored-communications'],
      },
    ],
    misconceptions: [
      {
        claim:
          'Interception and access to stored messages are the same power under a different name.',
        reality:
          'The Convention places them in different titles with different articles; Germany conditions interception on a serious-offence catalogue while reaching seized stored material through an examination regime with none; and Japan’s Code excludes interception entirely, directing it to other legislation.',
      },
      {
        claim:
          'Whether a communication is "stored" or "in transit" decides which power applies.',
        reality:
          'Not in every system. The third sentence of Germany’s § 100a(1) permits communication content stored on the person’s own system to be monitored under the interception power where it could also have been monitored in transit in encrypted form. The boundary there is functional, not locational.',
      },
      {
        claim: 'Obtaining stored communications is the lesser intrusion, so it needs less.',
        reality:
          'Not uniformly. In the United States a warrant is required for contents in electronic storage for 180 days or less — a higher instrument than the court order or subpoena available for other categories in the same statute.',
        note: 'This page states the statutory routes and does not rank intrusions.',
      },
      {
        claim: 'Every legal system keeps interception in its criminal procedure code.',
        reality:
          'Japan’s Article 222-2 provides that compulsory measures for the interception of electronic communications without the consent of either party shall be executed based upon other acts.',
      },
      {
        claim: 'Because interception is tightly conditioned, systems do not permit it.',
        reality:
          'Article 21 of the Convention obliges Parties to establish the power to intercept content data in relation to a range of serious offences determined by domestic law, and to compel a service provider within its existing technical capability to assist. The conditions are the terms on which it is permitted, not a refusal to permit it.',
      },
      {
        claim: 'A system that intercepts a person’s communications will tell them.',
        reality:
          'It depends on the provision. Germany imposes a notification duty on covert measures under § 101(4) and permits it to be withheld where overriding protectable interests require. The Convention instead obliges Parties to make service providers keep the execution of Articles 20 and 21 confidential — a duty on a different party, running the other way.',
        note: 'Notification and its deferral are the subject of a separate page on scope, duration and notification.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four ways to keep the two apart, and they are not variations on one design.',
      },
      {
        kind: 'list',
        items: [
          'Different articles in different titles, with content interception the narrower power — Council of Europe, Convention Arts. 18 and 19 against Arts. 20 and 21, read with Art. 14(3)(a).',
          'The same code, different conditions: a serious-offence catalogue and a subsidiarity test for interception, an examination regime with neither for seized storage — Germany, StPO §§ 100a and 110.',
          'A functional boundary rather than a locational one — Germany, § 100a(1) third sentence.',
          'The interception power placed outside the procedure code entirely — Japan, CCP Art. 222-2.',
          'Different statutory chapters, with the stored side graded by age of the material and by whether notice is given — United States, 18 U.S.C. § 2703(a) and (b).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each national provision is the law of its own country. The Convention obliges Parties to legislate and is not evidence of what any Party enacted. The US Wiretap Act and the Japanese interception Act were not read, and nothing is asserted about either.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The constitutional half of this question is Wave 21’s and is not repeated here: which interest a system protects when it protects communications, and whether a judge must authorise interference with it, is answered at [intercepting communications](/investigations/intercepting-communications). What this page adds is the statutory layer beneath — that the constitutional protection is implemented by more than one power, and that the powers are not interchangeable.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What is obtained — content, traffic data or subscriber information — is [content and communications data](/investigations/content-and-communications-data). Who may authorise each is [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure). Freezing data without obtaining it is [preserving data and producing it](/investigations/preserving-data-and-producing-it).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [intercepting communications](/investigations/intercepting-communications), [content and communications data](/investigations/content-and-communications-data), and [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure).',
      },
    ],
  },
  {
    slug: 'content-and-communications-data',
    title: 'Content and communications data',
    shortTitle: 'Content and communications data',
    question: 'Is who a person contacted treated the same as what they said?',
    summary:
      'No. Two instruments define the line in their own text — the Convention defines subscriber information as data "other than traffic or content data", and United States law excludes contents from the pen-register and subscriber-record definitions — and the three categories carry different conditions.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'interception-and-stored-data',
      'who-authorises-a-digital-investigative-measure',
      'preserving-data-and-producing-it',
      'what-privacy-protects-in-law',
    ],
    sources: [
      'coe-cybercrime-convention',
      'us-18usc-2703-stored-communications',
      'us-18usc-3127-pen-register',
      'de-stpo-100g-verkehrsdaten',
      'de-stpo-100j-bestandsdaten',
      'de-stpo-100a-tkue',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 11,
    uncertainty: [
      'The German definitions of Bestandsdaten and Verkehrsdaten sit in the telecommunications and digital-services statutes that §§ 100g and 100j cross-refer to. Those statutes were not read, and no claim here rests on the precise German definitions.',
      'Whether any system’s categories align with any other’s was not researched and is not assumed. The German and Convention categories are described separately for that reason.',
      'Nothing here describes how any category of data is generated, held, transmitted or obtained.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Legal systems do not treat a communication as one undifferentiated thing. They separate what was said from the record that a communication happened, and separate both from the account details of the person who holds the service. Three categories, three sets of conditions.',
      },
      {
        kind: 'paragraph',
        text: 'Two of the instruments read here draw the line in their own definitions rather than leaving it to be inferred, which is unusual and makes the categories checkable rather than argued.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains how legal instruments categorise communications material. It describes no technology, no method of obtaining any category, and nothing about how such data is generated or held. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The categories exist because the intrusions are different sizes and the investigative uses are different too. Establishing that a particular account belongs to a particular person is often the first step in an investigation and reveals little on its own. Establishing who contacted whom, when, and for how long reveals a great deal about associations without revealing a word of what was said. Obtaining what was said reveals the most.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The ordering is not a claim that the middle category is minor',
        text: 'A record of who a person contacted over months can be more revealing than one conversation, and the systems here do not treat traffic data as trivial: Germany conditions it on an offence of significant weight and on proportionality, and the Convention gives it a dedicated article. The graduation is about which conditions attach, not about which material matters.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Convention on Cybercrime defines the third category by excluding the other two. Article 18(3) provides that "subscriber information" means information held by a service provider relating to subscribers of its services **other than traffic or content data**, by which can be established the type of service used and the period of service; the subscriber’s identity, postal or geographic address, telephone and other access number and billing and payment information available on the basis of the service agreement; and any other information on the site of installation of communication equipment available on the same basis.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A three-way line inside one definition',
        text: 'The phrase "other than traffic or content data" does two things at once: it tells you what subscriber information is not, and it confirms that the drafters treated traffic and content as already-distinct categories requiring no further explanation. The Convention then gives each of the three its own power — Article 18 for subscriber information, Article 20 for traffic data, Article 21 for content.',
      },
      {
        kind: 'paragraph',
        text: 'United States law states the same boundary twice, in definitions rather than in argument. Section 3127(3) of Title 18 defines a pen register as a device or process recording or decoding "dialing, routing, addressing, or signaling information" transmitted by an instrument or facility, "provided, however, that such information shall not include the contents of any communication". Section 2703(c)(1) permits a governmental entity to require disclosure of "a record or other information pertaining to a subscriber to or customer of such service (not including the contents of communications)".',
        claim: 'fact',
        sources: ['us-18usc-3127-pen-register', 'us-18usc-2703-stored-communications'],
      },
      {
        kind: 'paragraph',
        text: 'The consequence in that statute is a ladder of instruments. Section 2703(c)(2) lists six items a provider shall disclose on an administrative, grand jury or trial **subpoena** — name; address; local and long distance telephone connection records, or records of session times and durations; length of service including start date and types of service utilised; telephone or instrument number or other subscriber number or identity, including any temporarily assigned network address; and means and source of payment. Other records under § 2703(c) require a warrant, a § 2703(d) **court order**, or the subscriber’s consent. Contents in electronic storage for 180 days or less require a **warrant**.',
        claim: 'fact',
        sources: ['us-18usc-2703-stored-communications'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'And the standards differ, not only the instruments',
        text: 'A § 2703(d) order issues only if the governmental entity offers "specific and articulable facts showing that there are reasonable grounds to believe" the material is "relevant and material to an ongoing criminal investigation". That is the statute’s own standard for that route, and it is not the standard for the warrant route in the same section.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Germany — three provisions, three thresholds',
            description:
              'Subscriber-type information under § 100j may be requested where necessary to investigate the facts or determine an accused’s whereabouts. Traffic data under § 100g requires specific facts grounding suspicion of an offence of significant weight also in the individual case, or of an offence committed by means of telecommunications, and requires the collection to stand in an appropriate relationship to the significance of the matter. Content monitoring under § 100a requires a serious offence from a closed catalogue, seriousness in the individual case, and subsidiarity.',
          },
          {
            term: 'And one exception that reverses the order',
            description:
              'Where a § 100j request reaches data by which access to terminal devices or their storage is protected, the ordinary low threshold does not apply: the information may be requested only where the statutory conditions for using those data are met, and for the digital-services limb only for the prosecution of an especially serious offence within the § 100b(2) categories. Material that is formally subscriber data is pulled up to the level of the code’s most intrusive power.',
          },
          {
            term: 'Location data is a traffic-data question, and Germany splits it by time',
            description:
              '§ 100g(1) provides that the collection of stored — *retrograd* — location data is permitted only on the stricter conditions of § 100g(2), and that otherwise location data may be collected only for future traffic data or in real time, and only in the case of an offence of significant weight. Historical and prospective location data are not the same request in this system.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'One system is not a comparative finding',
        text: 'The historical/prospective split for location data is established for Germany. Whether any other system draws that line, or draws it differently, was not researched and is not implied here.',
      },
    ],
    misconceptions: [
      {
        claim: 'Metadata is just data about data, so obtaining it raises no real question.',
        reality:
          'The systems read here condition it. Germany requires specific facts grounding suspicion of an offence of significant weight also in the individual case, and requires proportionality to the significance of the matter. The Convention gives real-time traffic data its own article and its own safeguards.',
      },
      {
        claim: 'Who a person contacted and what they said are legally the same material.',
        reality:
          'Article 18(3) of the Convention defines subscriber information as data "other than traffic or content data". Section 3127(3) of Title 18 defines a pen register as recording dialling, routing, addressing or signalling information "provided, however, that such information shall not include the contents of any communication".',
      },
      {
        claim: 'Subscriber information is a category of communication content.',
        reality:
          'Both instruments that define it exclude content expressly. Section 2703(c)(1) covers "a record or other information pertaining to a subscriber ... (not including the contents of communications)".',
      },
      {
        claim: 'Basic account details always require a court to authorise their disclosure.',
        reality:
          'Section 2703(c)(2) lists six items a provider shall disclose on an administrative, grand jury or trial subpoena. Germany’s § 100j states no judicial order for the ordinary subscriber-data request.',
        note: 'Both systems then impose higher requirements for other categories in the same statute.',
      },
      {
        claim: 'Because subscriber data is the least protected category, everything in it is.',
        reality:
          'Germany’s § 100j reverses the order for one class of material: where the request reaches data protecting access to terminal devices or their storage, the ordinary threshold does not apply and the especially-serious-offence conditions do.',
      },
      {
        claim: 'The categories mean the same thing in every legal system.',
        reality:
          'They are defined separately in each instrument, and this page describes them separately for that reason. The German definitions sit in telecommunications and digital-services statutes that were not read for this wave, and no alignment with the Convention’s categories is assumed.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three categories, and three different ways of making the line operative.',
      },
      {
        kind: 'list',
        items: [
          'By definition, excluding the other two — Council of Europe, Convention Art. 18(3): subscriber information is data "other than traffic or content data".',
          'By statutory definition of the instrument — United States, 18 U.S.C. § 3127(3): a pen register records dialling, routing, addressing or signalling information and "shall not include the contents of any communication".',
          'By the instrument required — United States, § 2703: subpoena for six enumerated items, § 2703(d) court order on specific and articulable facts, warrant for contents held 180 days or less.',
          'By separate provisions with separate thresholds — Germany, StPO § 100j, § 100g and § 100a.',
          'With an exception that inverts the graduation for access-credential data — Germany, § 100j.',
          'With location data split into stored and prospective, on different conditions — Germany, § 100g(1).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each national provision is the law of its own country. The Convention obliges Parties to legislate and is not evidence of what any Party enacted. No system’s categories are assumed to align with another’s.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'What makes these categories matter for accountability is that they are the unit an authorisation is written in. An order that names a category defines what may be collected, and an order that collects a different category has exceeded itself in a way that can be identified afterwards without any argument about degree.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What interest the law is protecting when it protects communications is [what privacy protects in law](/investigations/what-privacy-protects-in-law). Whether the material is reached in transit or at rest is [interception and stored data](/investigations/interception-and-stored-data). Who authorises each category is [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure).',
      },
      {
        kind: 'paragraph',
        text: 'It is worth noting who the statutory subjects are, because the terms are precise and none of them is a citizenship term. United States law speaks of a "subscriber or customer" and of a "governmental entity"; the Convention of "subscribers of its services" and of a "service provider offering its services in the territory of the Party"; German law of "der Beschuldigte" and of those who commercially provide telecommunications services. The category of person a provision protects is drawn from the service relationship, not from nationality.',
        claim: 'fact',
        sources: [
          'us-18usc-2703-stored-communications',
          'coe-cybercrime-convention',
          'de-stpo-100g-verkehrsdaten',
        ],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [interception and stored data](/investigations/interception-and-stored-data), [preserving data and producing it](/investigations/preserving-data-and-producing-it), and [what privacy protects in law](/investigations/what-privacy-protects-in-law).',
      },
    ],
  },
  {
    slug: 'preserving-data-and-producing-it',
    title: 'Preserving data and producing it',
    shortTitle: 'Preservation and production',
    question: 'If data has been "preserved", has anyone read it?',
    summary:
      'No. Preservation freezes material so that it still exists later; production hands it over. The Convention caps preservation at ninety days precisely because its purpose is to enable authorities to seek disclosure afterwards, by a separate power.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'content-and-communications-data',
      'who-authorises-a-digital-investigative-measure',
      'scope-duration-and-notification',
      'evidence-integrity-and-admissibility',
    ],
    sources: ['coe-cybercrime-convention', 'us-18usc-2703-stored-communications'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 8,
    keyTerms: ['disclosure'],
    uncertainty: [
      'This page rests mainly on one treaty. National preservation regimes were not researched in any of the four systems this wave examined, and nothing is asserted about them.',
      'A general retention mandate — an obligation on providers to keep data about everyone for a period — is a third and different instrument. Retention regimes were not researched and this page makes no claim about any of them.',
      'Nothing here describes how data is stored, preserved, transferred or obtained.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Preserving data and obtaining it are two steps, and a system that has taken the first has not taken the second. Preservation stops something being deleted. Production hands it over. Between them, nobody investigating has read anything.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains two distinct legal mechanisms. It describes no technology, no method of preserving, transferring or obtaining data, and nothing about how any provider operates. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The problem preservation answers is timing. Data that matters to an investigation may be deleted — routinely, automatically, or deliberately — long before the process required to obtain it can be completed. If the only available step were the full one, the material would often be gone by the time it was authorised.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'A separate, lighter step solves that without solving it too generously. Freezing material is a smaller intrusion than reading it: the holder keeps it, the investigators do not get it, and the question whether they may have it is answered afterwards on its own terms.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which is why the cap exists',
        text: 'A preservation order that never expired would become a way of holding material indefinitely without ever satisfying the conditions for obtaining it. Capping the period forces the second question to be asked while the first answer is still live.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Article 16 of the Convention on Cybercrime states the mechanism and its purpose in the same sentence. Parties must empower their authorities to order or similarly obtain the expeditious preservation of specified computer data, including traffic data, "in particular where there are grounds to believe that the computer data is particularly vulnerable to loss or modification". Where this is done by an order to a person, that person must preserve and maintain the integrity of the data "for a period of time as long as necessary, up to a maximum of ninety days, **to enable the competent authorities to seek its disclosure**". The order may be renewed.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The purpose clause is what makes the distinction textual',
        text: 'Article 16(2) does not say preservation gives authorities the data. It says preservation exists so that authorities can go and seek its disclosure — which is a different act, under a different article. The relationship between the two is stated inside the preservation power itself.',
      },
      {
        kind: 'paragraph',
        text: 'That different act is Article 18. It obliges Parties to empower their authorities to order a person in the territory to submit specified computer data in that person’s possession or control, and to order a service provider offering services in the territory to submit subscriber information relating to those services. Article 17 adds a narrow intermediate step for traffic data: where data has been preserved under Article 16, enough traffic data must be disclosed to enable the Party to identify the service providers and the path through which the communication was transmitted.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Article 17 is a deliberately partial disclosure',
        text: 'Its purpose is to find out who else holds relevant data when a communication passed through more than one provider. It discloses routing information sufficient to identify the providers and the path — not the preserved material itself.',
      },
      {
        kind: 'paragraph',
        text: 'Preservation also carries a confidentiality duty running the other way from the investigation. Article 16(3) obliges Parties to require the custodian or other person preserving the data to keep the undertaking of the procedure confidential for the period provided by domestic law.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
      {
        kind: 'paragraph',
        text: 'United States law shows what the production side looks like when a national statute grades it. Section 2703 of Title 18 provides different routes according to what is sought and whether notice is given: a warrant without required notice; a subpoena or a § 2703(d) court order with prior notice to the subscriber or customer, with delayed notice available under § 2705; and, for the six enumerated basic items, a subpoena with no notice requirement at all under § 2703(c)(3).',
        claim: 'fact',
        sources: ['us-18usc-2703-stored-communications'],
      },
    ],
    misconceptions: [
      {
        claim: 'If data has been preserved, investigators have it.',
        reality:
          'Article 16(2) of the Convention requires preservation for up to ninety days "to enable the competent authorities to seek its disclosure". Seeking disclosure is Article 18, a separate power with its own conditions.',
      },
      {
        claim: 'A preservation order is a lighter version of a production order.',
        reality:
          'They do different things. Preservation obliges the holder to keep material and maintain its integrity; production obliges someone to hand material over. One can be complied with entirely without the other ever being made.',
      },
      {
        claim: 'Preservation lasts as long as the investigation needs.',
        reality:
          'Article 16(2) caps it at a maximum of ninety days where it is effected by order to a person, though it permits a Party to provide for renewal.',
      },
      {
        claim: 'A preservation order and a data-retention obligation are the same thing.',
        reality:
          'A preservation order concerns specified data already held, in a particular case. A retention mandate is a general obligation to keep data about everyone for a period, whether or not any investigation exists. Retention regimes were not researched for this wave and nothing here describes one.',
      },
      {
        claim: 'The person whose data was preserved will be told.',
        reality:
          'Article 16(3) requires the opposite of the custodian: Parties must oblige the person preserving the data to keep the undertaking of the procedure confidential for the period their domestic law provides. Whether the subject is ever notified is a separate question answered by each system’s own rules.',
      },
      {
        claim: 'Because these steps are separated, data is lost while the process runs.',
        reality:
          'Separating them is what prevents that. Preservation exists precisely because the fuller process takes time, and Article 16 directs it at data "particularly vulnerable to loss or modification".',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four distinct mechanisms, and the Convention keeps them in four articles.',
      },
      {
        kind: 'list',
        items: [
          'Expedited preservation of specified stored data, up to ninety days, renewable, with a confidentiality duty on the custodian — Convention Art. 16.',
          'Expedited preservation with partial disclosure of enough traffic data to identify the providers and the path — Convention Art. 17.',
          'A production order: specified stored computer data from a person, or subscriber information from a service provider — Convention Art. 18.',
          'Graded national production routes differing by what is sought and whether notice is given — United States, 18 U.S.C. § 2703(b)–(c), with delayed notice under § 2705.',
          'A general retention mandate — a different instrument entirely, NOT researched for this wave and not described here.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'The Convention obliges its Parties to establish these powers in domestic law. It is not evidence of what any Party enacted, and no country claim rests on it. The United States provisions are the law of that country only.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Preservation is the step at which the integrity question and the authority question separate cleanly. Article 16(2) requires the person ordered to preserve to "preserve and maintain the integrity" of the data — an obligation about the material’s condition, owed while the question of who may have it is still open.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'Whether material is what it is said to be, and whether a court may receive it, is [evidence integrity and admissibility](/forensics/evidence-integrity-and-admissibility). What the categories of material are is [content and communications data](/investigations/content-and-communications-data). Who may order each step is [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [content and communications data](/investigations/content-and-communications-data), [scope, duration and notification](/investigations/scope-duration-and-notification), and [evidence integrity and admissibility](/forensics/evidence-integrity-and-admissibility).',
      },
    ],
  },
  {
    slug: 'who-authorises-a-digital-investigative-measure',
    title: 'Who authorises a digital investigative measure',
    shortTitle: 'Who authorises',
    question: 'Who decides that an investigator may take a digital investigative step?',
    summary:
      'Not always a judge, and not always the same judge. One German power needs a single court, another a three-judge panel with a higher court taking over after six months; United States law allocates three different instruments to three categories; and the Convention requires "judicial or other independent supervision".',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'legal-authority-and-technical-capability',
      'scope-duration-and-notification',
      'content-and-communications-data',
      'investigative-jurisdiction',
    ],
    sources: [
      'de-stpo-100e-verfahren',
      'de-stpo-100b-online-durchsuchung',
      'de-stpo-100j-bestandsdaten',
      'de-stpo-110-durchsicht',
      'es-lecrim-medidas-tecnologicas',
      'us-18usc-2703-stored-communications',
      'jp-code-criminal-procedure',
      'coe-cybercrime-convention',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 11,
    keyTerms: ['warrant', 'jurisdiction'],
    uncertainty: [
      'Urgency routes were established for Germany only. Whether the other systems provide one, and on what terms, was not researched.',
      'This page describes who may authorise, not what an applicant must show. Thresholds of suspicion are stated only where the cited provision states them, and no page on this site describes how any threshold is assessed in practice.',
      'Intelligence-service authority was not researched in any system and is not described here. Every provision on this page is a criminal-procedure provision.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Every system read for this wave requires someone other than the investigator to authorise the more intrusive digital measures. Which someone, and how much of a someone, varies more than the shared vocabulary of "warrants" suggests — and within a single legal system it varies from power to power.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains which body authorises which measure. It states no threshold of suspicion beyond what a cited provision states, describes no procedure for applying, and contains nothing about how any decision could be anticipated, influenced or avoided. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason authorisation is external is that the person best placed to judge whether a measure is needed is the person least placed to judge whether it is justified. An investigator has the information and the motive; what an investigator does not have is distance from the outcome.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'What follows from that is not "a judge must always decide", but something narrower: the decision has to be made by someone who is not conducting the investigation, and the intensity of that requirement can be calibrated to how intrusive the measure is. Every system here calibrates, and they calibrate differently.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Calibration is the design, not a compromise',
        text: 'Requiring a court for every request for an account name would make routine investigation impossible; requiring nothing for the most intrusive measures would make the safeguard meaningless. A ladder lets a system put the heaviest procedure where the heaviest intrusion is.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany runs the clearest ladder, and it runs it inside one code. Under § 100e(1), measures under § 100a — telecommunications monitoring — may be ordered only on application of the prosecution office **by the court**. Under § 100e(2), measures under § 100b — intervening in an information-technology system to collect data — may be ordered only on application of the prosecution office **by the chamber of the Landgericht** named in § 74a(4) of the Courts Constitution Act. Under § 100j, an ordinary request for subscriber-type information states no judicial order at all. And under § 110(1), the examination of electronic storage media belongs to the prosecution office rather than to a court.',
        claim: 'fact',
        sources: [
          'de-stpo-100e-verfahren',
          'de-stpo-100j-bestandsdaten',
          'de-stpo-110-durchsicht',
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Four different answers in one statute',
        text: 'A panel of judges, a single court, a prosecution office, and no stated judicial order — for four powers in the same code. Any sentence beginning "in Germany, digital investigation requires…" is going to be wrong about three of them.',
      },
      {
        kind: 'paragraph',
        text: 'The German ladder also escalates over time rather than only at the outset. A § 100a order is limited to a maximum of three months and may be extended by not more than three months at a time. A § 100b order is limited to a maximum of **one** month, extendable by one month at a time — and once its duration has been extended to six months in total, further extensions are decided by the **Oberlandesgericht**, a higher court than the one that made the original order.',
        claim: 'fact',
        sources: ['de-stpo-100e-verfahren'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Spain — always a judge, and the judge may act unprompted',
            description:
              'Article 588 bis a(1) of the LECrim requires judicial authorisation for the technological measures in the chapter. Article 588 bis b(1) provides that the judge may order them of his own motion or at the instance of the Ministerio Fiscal or the Policía Judicial — so the authorising body is not merely a check on an application, it can initiate.',
          },
          {
            term: 'The United States — three instruments for three categories',
            description:
              'Section 2703 allocates: an administrative, grand jury or trial **subpoena** for the six enumerated basic subscriber items; a **§ 2703(d) court order**, which issues only on "specific and articulable facts showing that there are reasonable grounds to believe" the material is "relevant and material to an ongoing criminal investigation"; and a **warrant** for contents in electronic storage for 180 days or less. Only one of the three is a warrant.',
          },
          {
            term: 'Japan — a judge’s warrant for the general power',
            description:
              'Article 218(1) permits a public prosecutor, a public prosecutor’s assistant officer or a judicial police official to conduct search, seizure or inspection upon a warrant issued by a judge, and Article 218(3) provides that the warrant is issued upon their request. Interception is not in the Code at all: Article 222-2 routes it to other legislation.',
          },
          {
            term: 'The Convention — independent, not necessarily judicial',
            description:
              'Article 15(2) provides that the conditions and safeguards shall, as appropriate in view of the nature of the power, "include judicial or **other independent** supervision, grounds justifying application, and limitation of the scope and the duration of such power or procedure".',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The treaty text is the clearest refutation of a universal judicial rule',
        text: 'An instrument written to harmonise these powers across many legal systems did not require a judge. It required independent supervision and left the form to domestic law — because the Parties do it differently and the drafters knew it.',
      },
      {
        kind: 'paragraph',
        text: 'Urgency does not remove the authoriser; in the one system where it was researched, it reorders the sequence and puts a deadline on the reordering. Under § 100e(1), where there is danger in delay a § 100a order may also be made by the prosecution office — and "soweit die Anordnung der Staatsanwaltschaft nicht binnen drei Werktagen von dem Gericht bestätigt wird, tritt sie außer Kraft": unless confirmed by the court within three working days, it lapses. Under § 100e(2) the same structure applies to § 100b measures, with the presiding judge ordering and the chamber confirming.',
        claim: 'fact',
        sources: ['de-stpo-100e-verfahren'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What the lapse rule does',
        text: 'It makes the confirmation the condition of continued validity rather than a formality that follows. The measure does not become lawful because it was urgent; it becomes unlawful again if the court does not agree in time. The judicial decision is deferred, not dispensed with.',
      },
    ],
    misconceptions: [
      {
        claim: 'Digital investigative measures require a warrant.',
        reality:
          '"Warrant" is one system’s instrument, not a universal category. In United States law it is one of three routes in a single section, alongside a subpoena and a § 2703(d) court order. German law uses no such instrument for these powers, and its § 100j states no judicial order for the ordinary subscriber-data request.',
      },
      {
        claim: 'A judge must authorise digital investigative measures.',
        reality:
          'Article 15(2) of the Convention requires "judicial or other independent supervision". German law assigns the examination of electronic storage media to the prosecution office under § 110(1), and states no judicial order for an ordinary § 100j request.',
      },
      {
        claim: 'Where a judge is required, any judge will do.',
        reality:
          'Germany’s § 100e(2) requires measures under § 100b to be ordered by the chamber of the Landgericht named in § 74a(4) GVG — a panel, not a single judge — and once the total duration reaches six months, further extensions are decided by the Oberlandesgericht.',
      },
      {
        claim:
          'Prosecutors authorise these measures in civil-law systems and judges in common-law ones.',
        reality:
          'Germany requires the court for § 100a and a chamber of the Landgericht for § 100b, on the prosecution office’s application; Spain requires the judge for the whole chapter. Meanwhile United States law permits an administrative subpoena, issued without any court, for the six enumerated subscriber items.',
      },
      {
        claim: 'In an emergency, investigators may act without any authorisation.',
        reality:
          'Germany’s urgency route substitutes the prosecution office for the court and then requires judicial confirmation within three working days, failing which the order lapses. The authoriser changes and the sequence changes; the requirement does not disappear.',
        note: 'Urgency routes were researched for Germany only. Nothing is asserted about the other systems.',
      },
      {
        claim:
          'Criminal-procedure authorisation rules describe what intelligence services may do.',
        reality:
          'They do not, and this wave did not research intelligence powers in any system. Every provision on this page is a criminal-procedure provision, and Article 14 of the Convention establishes its powers "for the purpose of specific criminal investigations or proceedings".',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Six answers to one question, four of them inside a single legal system.',
      },
      {
        kind: 'list',
        items: [
          'A court, on the prosecution office’s application, for up to three months — Germany, StPO § 100e(1) for § 100a measures.',
          'A panel of the Landgericht, for up to one month, with the Oberlandesgericht deciding extensions past six months — Germany, § 100e(2) for § 100b measures.',
          'The prosecution office itself, for the examination of electronic storage media — Germany, § 110(1).',
          'No judicial order stated for the ordinary case — Germany, § 100j.',
          'A judge always, who may also act of his own motion — Spain, LECrim arts. 588 bis a(1) and 588 bis b(1).',
          'Three instruments for three categories: subpoena, § 2703(d) court order, warrant — United States, 18 U.S.C. § 2703.',
          'A judge’s warrant for the general power, with interception routed to other legislation — Japan, CCP Arts. 218(1) and 222-2.',
          'Judicial **or other independent** supervision, form left to domestic law — Council of Europe, Convention Art. 15(2).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each national provision is the law of its own country. The Convention obliges Parties to legislate and is not evidence of what any Party enacted. Twelve of the jurisdictions this wave was asked to consider were not researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Authorisation is only half of what these provisions do. The other half is that they create a record: an application that had to state its grounds, and a decision by a body that had to be persuaded. That record is what a later review examines, and it exists whether or not anyone ever asks to see it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What the authorising decision must contain, how long it lasts and who is told afterwards is [scope, duration and notification](/investigations/scope-duration-and-notification). Which institution is competent to investigate at all is [investigative jurisdiction](/investigations/investigative-jurisdiction). Whether the constitutional right required a judge in the first place is [intercepting communications](/investigations/intercepting-communications) and [searching a home](/investigations/searching-a-home).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [legal authority and technical capability](/investigations/legal-authority-and-technical-capability), [scope, duration and notification](/investigations/scope-duration-and-notification), and [investigative jurisdiction](/investigations/investigative-jurisdiction).',
      },
    ],
  },
  {
    slug: 'scope-duration-and-notification',
    title: 'Scope, duration and notification',
    shortTitle: 'Scope, duration, notification',
    question: 'Once a measure is authorised, what bounds it — and is the person ever told?',
    summary:
      'German law requires the order to state the measure’s type, extent, duration and end-point, then names measure by measure who must be notified afterwards and gives them two weeks to ask a court whether it was lawful and properly executed.',
    entityType: 'concept',
    section: 'investigations',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-authorises-a-digital-investigative-measure',
      'preserving-data-and-producing-it',
      'reviewing-detention',
      'what-happens-to-unlawfully-obtained-evidence',
    ],
    sources: [
      'de-stpo-100e-verfahren',
      'de-stpo-101-verdeckte-massnahmen',
      'es-lecrim-medidas-tecnologicas',
      'coe-cybercrime-convention',
      'us-18usc-2703-stored-communications',
      'jp-code-criminal-procedure',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-05',
    publishedOn: '2026-09-05',
    reviewedOn: '2026-09-05',
    factsVerifiedOn: '2026-09-05',
    readingTimeMinutes: 11,
    uncertainty: [
      'The notification and post-hoc review architecture is established for Germany. Whether the other systems provide comparable duties, and in what form, was not researched, and their absence from this page is not a finding about them.',
      'Nothing here describes how a measure is executed, how compliance is monitored, or how any deadline could be anticipated or used. That is a deliberate limit on the research.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'An authorisation that said only "you may intercept this person" would authorise everything and bound nothing. What makes an authorisation a limit is that it has to specify: what kind of measure, reaching what, for how long, ending when. And what makes it reviewable is that somebody eventually finds out it happened.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This explains what an authorising decision must contain and what follows it. It describes no execution method, no technology, and nothing about how any measure or deadline could be anticipated, detected or frustrated. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Covert measures have a structural problem no other investigative act has: the person affected cannot complain about something they do not know happened. Every ordinary safeguard — objecting at the time, asking a court, challenging the evidence — assumes knowledge that a covert measure is designed to withhold.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Notification is what closes that gap, and it closes it late by design',
        text: 'Telling someone during the measure would defeat it. Never telling them would remove the remedy entirely. A duty to notify afterwards is the compromise, and its terms — who is told, when, and what they are told about their options — are where the compromise is actually made.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'German law writes the bounds into the order itself. § 100e(3) requires the order to be issued in writing, and requires its operative part to state, so far as possible, the name and address of the person against whom the measure is directed; the offence alleged; **the type, extent, duration and end-point of the measure**; the type of information to be collected and its significance for the proceedings; and, for § 100a measures, the number or other identifier of the connection or terminal device.',
        claim: 'fact',
        sources: ['de-stpo-100e-verfahren'],
      },
      {
        kind: 'paragraph',
        text: 'Spain requires the equivalent at the application stage. Article 588 bis b(2) of the LECrim requires the request to contain eight enumerated items, including the identity of the person investigated "o de cualquier otro afectado por la medida" — or of anyone else affected by it — the reasons justifying necessity under the guiding principles, the indicia, **the extension of the measure with specification of its content**, the unit of the Policía Judicial that will carry out the intervention, the form of execution, the duration sought, and the obliged subject who will carry it out.',
        claim: 'fact',
        sources: ['es-lecrim-medidas-tecnologicas'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two places to put the same requirement',
        text: 'Germany puts the specification in the decision; Spain puts it in the application. The practical effect is similar — nobody can authorise a measure whose scope has not been articulated — but they differ in who is made to do the articulating.',
      },
      {
        kind: 'paragraph',
        text: 'Duration is bounded in both. Germany limits a § 100a order to three months and a § 100b order to one, renewable in like periods only where the conditions persist "unter Berücksichtigung der gewonnenen Ermittlungsergebnisse" — in the light of the results obtained. Spain’s article 588 bis e provides that measures last the period specified for each and may not exceed the time indispensable for clarifying the facts; that extension is by **auto motivado** of the competent judge; and that once the period expires without extension the measure "cesará a todos los efectos" — ceases for all purposes.',
        claim: 'fact',
        sources: ['de-stpo-100e-verfahren', 'es-lecrim-medidas-tecnologicas'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Renewal is not automatic in either',
        text: 'Germany conditions extension on the results obtained so far, which makes a fruitless measure harder to continue than to start. Spain requires a reasoned order each time. A duration limit that renewed on request would be a formality; these do not.',
      },
      {
        kind: 'paragraph',
        text: 'Germany then builds the after-the-fact architecture, in § 101. Personal data collected by covert measures must be **marked**, and the marking maintained by any body it is transmitted to (§ 101(3)). Documents concerning the most intrusive measures are kept at the prosecution office and placed on the file only when the notification conditions are met (§ 101(2)).',
        claim: 'fact',
        sources: ['de-stpo-101-verdeckte-massnahmen'],
      },
      {
        kind: 'paragraph',
        text: '§ 101(4) then states a notification duty measure by measure, naming the categories of person who must be told. For § 100a it is "die Beteiligten der überwachten Telekommunikation" — the participants in the monitored telecommunication. For § 100b it is "die Zielperson sowie die erheblich mitbetroffenen Personen" — the target person and significantly co-affected persons. The notification must point out the possibility of subsequent judicial protection under § 101(7) and the period provided for it. Notification is withheld where overriding protectable interests of an affected person require.',
        claim: 'fact',
        sources: ['de-stpo-101-verdeckte-massnahmen'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The notification is not only that it happened — it is that a remedy exists',
        text: 'A person told only "you were monitored" would have to discover for themselves that anything could be done about it. § 101(4) requires the notification to state the possibility of subsequent judicial protection and its deadline, which turns the notice into the trigger for the remedy rather than merely an item of information.',
      },
      {
        kind: 'paragraph',
        text: 'And § 101(7) supplies that remedy. The persons named in § 101(4) may apply to the competent court, **even after the measure has ended** and up to two weeks after their notification, for review of "die Rechtmäßigkeit der Maßnahme sowie der Art und Weise ihres Vollzugs" — the lawfulness of the measure **and the manner of its execution**. Immediate complaint lies against the decision, and where public charges have been preferred and the accused notified, the court seised of the case decides in the decision closing the proceedings.',
        claim: 'fact',
        sources: ['de-stpo-101-verdeckte-massnahmen'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two questions, not one',
        text: 'Whether the measure should have been authorised, and whether what was done under it stayed within the authorisation, are separate questions. § 101(7) opens both, which matters because a measure can be lawfully ordered and unlawfully carried out.',
      },
      {
        kind: 'paragraph',
        text: 'Confidentiality duties run in the other direction, on the parties who assist. The Convention obliges Parties to require a custodian preserving data to keep the procedure confidential (Art. 16(3)), and to oblige a service provider to keep confidential the execution of the real-time traffic-data and content-interception powers and any information relating to it (Arts. 20(3) and 21(3)). United States law approaches notice from a third angle: § 2703(c)(3) provides that an entity receiving records under that subsection "is not required to provide notice to a subscriber or customer", and § 2703(b)(1)(B) permits prior notice with delayed notice available under § 2705.',
        claim: 'fact',
        sources: ['coe-cybercrime-convention', 'us-18usc-2703-stored-communications'],
      },
      {
        kind: 'paragraph',
        text: 'Japan bounds the measure through the warrant instrument instead. Article 219(1) requires the warrant to state a valid period, together with "a statement to the effect that the search, seizure or inspection of evidence shall not be commenced in any way after the lapse of such period and that in such case the warrant shall be returned to the court".',
        claim: 'fact',
        sources: ['jp-code-criminal-procedure'],
      },
    ],
    misconceptions: [
      {
        claim: 'An authorisation lets investigators do whatever the measure makes possible.',
        reality:
          'Germany’s § 100e(3) requires the order to state the type, extent, duration and end-point of the measure and the type of information to be collected. Spain’s 588 bis b(2) requires the application to specify the extension of the measure with specification of its content.',
      },
      {
        claim: 'A covert measure is never disclosed to the person affected.',
        reality:
          'Germany’s § 101(4) states a notification duty measure by measure and names who must be told for each. It permits notification to be withheld where overriding protectable interests of an affected person require — a stated exception to a stated duty, not the absence of one.',
      },
      {
        claim: 'Once a measure has ended, there is nothing to challenge.',
        reality:
          'Section 101(7) permits the persons entitled to notification to apply for review "even after the measure has ended", up to two weeks after notification, and to have both the lawfulness of the measure and the manner of its execution examined.',
      },
      {
        claim:
          'If the measure was properly authorised, how it was carried out is not reviewable.',
        reality:
          'German law opens both questions in the same provision: § 101(7) covers the lawfulness of the measure "sowie der Art und Weise ihres Vollzugs" — as well as the manner of its execution.',
      },
      {
        claim: 'A time limit means the measure ends and everyone moves on.',
        reality:
          'Extension is available in both systems that state a limit, but neither grants it automatically. Germany requires the conditions to persist in the light of the results obtained; Spain requires a reasoned order from the competent judge and provides that on expiry without extension the measure ceases for all purposes.',
      },
      {
        claim: 'Everyone affected by a measure is notified.',
        reality:
          'The German provision names categories rather than covering everyone: for § 100a the participants in the monitored telecommunication; for § 100b the target person and significantly co-affected persons. Who falls inside those categories is what the provision decides.',
        note: 'The statutory terms are precise and none of them is a citizenship term.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where each system puts the bound, and who it tells.',
      },
      {
        kind: 'list',
        items: [
          'In the written order: type, extent, duration and end-point, plus the connection or terminal identifier — Germany, StPO § 100e(3).',
          'In the application: eight enumerated items including the extension of the measure and the unit that will execute it — Spain, LECrim art. 588 bis b(2).',
          'In the warrant: a valid period, after which the measure may not be commenced and the warrant is returned — Japan, CCP Art. 219(1).',
          'Duration capped and renewable only on stated conditions — Germany, § 100e(1)–(2); Spain, art. 588 bis e.',
          'Data marked and the marking maintained on transmission — Germany, § 101(3).',
          'Notification naming categories of person, stating the remedy and its deadline, withheld only on stated grounds — Germany, § 101(4).',
          'Post-hoc review of lawfulness and of the manner of execution, available after the measure ends — Germany, § 101(7).',
          'Confidentiality imposed on custodians and providers, and notice to the subscriber not required for certain record categories — Convention Arts. 16(3), 20(3), 21(3); United States, 18 U.S.C. § 2703(c)(3).',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'The notification and review architecture is Germany’s. Its absence from the description of the other systems reflects what was researched, not a finding that they lack one. The Convention obliges Parties to legislate and is not evidence of any Party’s law.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'This is the point at which the investigative layer hands over to the review layer, and the handover is deliberate rather than incidental. A marked record, a named category of person, a notification that states the remedy, and a two-week window make the difference between a right that exists and a right that can be used.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What a court can do once asked is Wave 19’s subject: [what happens to unlawfully obtained evidence](/justice/what-happens-to-unlawfully-obtained-evidence), [effective remedy](/justice/effective-remedy) and [when a procedural error changes the outcome](/justice/when-a-procedural-error-changes-the-outcome). Who authorised the measure in the first place is [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure).',
      },
      {
        kind: 'paragraph',
        text: 'The statutory subjects are worth stating exactly, because the terms are narrow and none is a citizenship term: "die Beteiligten der überwachten Telekommunikation", "die Zielperson", "die erheblich mitbetroffenen Personen", "der Beschuldigte", and in Spain "el investigado o encausado" and "cualquier otro afectado por la medida". Whom a provision protects is drawn from the person’s relationship to the measure, not from their nationality.',
        claim: 'fact',
        sources: ['de-stpo-101-verdeckte-massnahmen', 'es-lecrim-medidas-tecnologicas'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who authorises a digital investigative measure](/investigations/who-authorises-a-digital-investigative-measure), [preserving data and producing it](/investigations/preserving-data-and-producing-it), and [what happens to unlawfully obtained evidence](/justice/what-happens-to-unlawfully-obtained-evidence).',
      },
    ],
  },
];
