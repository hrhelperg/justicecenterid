import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Italy dossier — a regionalised unitary state whose justice is fully national (Batch B).
 *
 * Research date: facts checked against sources on 2026-07-26 and independently re-verified (no
 * factual errors; every primary source — the Constitutional Court's own English Constitution PDF,
 * the official Law 121/1981 PDF, the Ministry pages and the EU e-Justice Portal — matched verbatim).
 *
 * The model result: Italy is a "Regional State" with five special-autonomy regions, but the four
 * justice functions are ALL exclusive State competence (Constitution art. 117), so it is unitary
 * for justice — the exact opposite of Finland's Åland. Distinctive features held in prose: the
 * prosecution is part of the independent judiciary (prosecutors and judges are both magistrates
 * under the same self-governing council) with mandatory prosecution (art. 112); there are multiple
 * national police forces; and there are three top courts plus a dedicated Constitutional Court.
 */
const IT_PRISON_DENSITY: RestrictedClaim = {
  id: 'it-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Italian prisons held 60,637 people including those on remand, against a total capacity of 51,347 places — a prison density of 118.1 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'IT',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the Department of Prison Administration, DAP), at one reference date. A density of 118.1 means the system as a whole held substantially more people than its stated capacity on that day — Italy is well above capacity at the national level. It does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const ITALY: CountryDossier = {
  countryCode: 'IT',
  slug: 'italy',
  name: 'Italy',
  officialName: 'the Italian Republic',
  independentBodyNoun: 'an Italian government body',
  summary:
    'Italy is a regionalised unitary, civil-law republic — a "Regional State" with five special-autonomy regions — but its justice functions are all national: even the autonomous regions hold no competence over the courts, prosecution, national police or prisons. Its prosecutors are magistrates within the independent judiciary, with a constitutional duty to prosecute, and it has three top courts plus a dedicated Constitutional Court.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['it'],
  sources: ['it-constitution', 'it-ejustice-courts'],
  uncertainty: [
    'A national general ombudsman and an independent national police-complaints body were not established from the sources; complaints route through the independent judiciary and internal channels. The detention-oversight body (the National Guarantor for the rights of persons deprived of liberty) is noted but was not fetched directly.',
    'The "Nordio" constitutional reform (separation of magistrates\' careers) was published on 30 October 2025 but is not in force, pending a possible confirmatory referendum; it is described neutrally and is not treated as current law.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Italy is a regionalised unitary state — a "Regional State" — with a civil-law legal tradition, governed by the Constitution of the Italian Republic of 1948. Under Article 101, justice is administered in the name of the people and the members of the judiciary are subject only to the law.',
      claim: 'fact',
      sources: ['it-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Twenty regions, five autonomous — but justice is entirely national',
      text: 'Italy has twenty regions, five of which (Sicily, Sardinia, Trentino-Alto Adige/South Tyrol, Aosta Valley and Friuli-Venezia Giulia) have special autonomy under Article 116. It is tempting to expect some of that autonomy to reach the justice system — but it does not. Article 117 reserves to the State, as exclusive competences, "jurisdiction and procedural law; civil and criminal law; administrative justice" and "public order and security". Even the most that Article 116 allows a region over "justice" is the administrative organisation of the lay Justices of the Peace. So the courts, the prosecution, the national police and the prisons are all national — the exact opposite of Finland\'s Åland, which does run its own policing.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Two things that surprise readers',
      text: "First, Italian prosecutors are not part of the executive: they are magistrates, drawn from the same competitive examination and governed by the same self-governing council as the judges, and the Constitution guarantees the prosecution's independence. Second, prosecution is not discretionary: Article 112 imposes a constitutional obligation to initiate criminal proceedings. Both features are set out on the prosecution page.",
    },
    {
      kind: 'paragraph',
      text: 'The system runs through several national bodies. Multiple police forces — the Polizia di Stato, the Arma dei Carabinieri and the Guardia di Finanza — police the country under the coordination of the Interior Ministry. The Pubblico Ministero prosecutes and directs the judicial police. The ordinary courts run up to the Court of Cassation, alongside a separate Constitutional Court and a separate supreme administrative court. And the Department of Prison Administration runs the prisons.',
      claim: 'fact',
      sources: ['it-legge-121-1981', 'it-ejustice-courts', 'it-giustizia-dap'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Italy',
      summary:
        'A regionalised unitary republic under the 1948 Constitution whose justice is entirely national — an independent judiciary that includes the prosecution, two orders of courts, and a Constitutional Court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['it-constitution', 'it-gazzetta-nordio-2025'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Italy is a parliamentary republic with a civil-law tradition, governed by the Constitution of 1948. Article 104 provides that "the judiciary is an independent branch of government and shall not be subject to any other", and establishes the High Council of the Judiciary (Consiglio Superiore della Magistratura), presided over by the President of the Republic, as the body that governs the magistracy.',
          claim: 'fact',
          sources: ['it-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'One magistracy: judges and prosecutors together',
          text: 'A defining feature of the Italian system is that judges (giudici) and prosecutors (pubblici ministeri) are both magistrates — recruited by the same examination, subject to the same guarantees, and governed by the same self-governing council. The prosecution is therefore inside the independent judiciary, not under the executive. That single-magistracy design is what a proposed reform (below) would change, so it is worth stating as the current position.',
        },
        {
          kind: 'callout',
          variant: 'disputed',
          title: 'A proposed reform, stated neutrally and not as current law',
          text: "A constitutional bill to separate the careers of judging and prosecuting magistrates — splitting the self-governing council into two and creating a separate High Disciplinary Court — was approved by Parliament and published in the official gazette on 30 October 2025. Because it passed on second reading by an absolute but less-than-two-thirds majority, under Article 138 of the Constitution it is published for the purpose of a possible confirmatory referendum and is NOT in force. The current law remains the single-magistracy, single-council system described above. This page records the reform's existence and status without taking any position on it; its referendum date is not officially fixed.",
        },
      ],
      uncertainty: [
        "The constitutional articles are cited from the Constitutional Court's official English translation; the authoritative text is Italian.",
        "The referendum date for the proposed reform, and the reform's eventual outcome, are not established.",
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Italy',
      summary:
        'Several national police forces — the Polizia di Stato, the military Carabinieri, and the Guardia di Finanza — coordinated by the Interior Ministry, plus the local-police carve-out.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['it-legge-121-1981', 'it-interno-pubblica-sicurezza', 'it-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Italy is a national function, and — unusually — it is shared among several national police forces. Law 121 of 1981 (Article 16) lists, alongside the Polizia di Stato (the civilian State Police), "the Arma dei Carabinieri, as an armed force in permanent service of public security" and "the Corps of the Guardia di Finanza". These forces are coordinated centrally by the Department of Public Security of the Ministry of the Interior.',
          claim: 'fact',
          sources: ['it-legge-121-1981', 'it-interno-pubblica-sicurezza'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Three national forces, distinct roles — kept in prose',
          text: 'The Polizia di Stato is the civilian national police under the Interior Ministry. The Carabinieri are a national force with military status, providing general policing across the whole country and also serving as the military police of the armed forces. The Guardia di Finanza is a military-status force responsible for financial, fiscal and economic crime, under the Ministry of Economy and Finance. These are distinct institutions with overlapping general-policing remits; this platform describes their existence and status, and keeps the detail of their roles in prose rather than trying to rank or merge them.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The one local carve-out',
          text: 'Article 117 reserves public order and security to the State "save for local administrative police". So the municipal police (polizia locale / municipale) is the single policing element that is a regional/local matter — it handles local administrative functions and limited judicial-police duties, and is not part of the national criminal-investigation architecture.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which national forces exist and their legal status. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The precise division of labour among the Polizia di Stato, the Carabinieri and the Guardia di Finanza was not researched from the primary statutes beyond their statutory listing.',
        'The 2016 absorption of the State Forestry Corps into the Carabinieri is noted historically but not verified from a fetched source.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Italy',
      summary:
        'Two orders of courts — ordinary up to the Court of Cassation, administrative up to the Council of State — plus a dedicated Constitutional Court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'it-ejustice-courts',
        'it-ejustice-specialised',
        'it-cassazione',
        'it-constitution',
      ],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Italy has two separate orders of courts. The ordinary courts hear civil and criminal cases: the Justice of the Peace (giudice di pace), the tribunal (tribunale), the court of appeal (corte d\'appello), and at the apex the Court of Cassation (Corte Suprema di Cassazione), which ensures "the exact observance and uniform interpretation of the law" and reviews points of law, not fact. The administrative courts hear disputes with public authorities: the Regional Administrative Court (TAR) at first instance and the Council of State (Consiglio di Stato) on appeal.',
          claim: 'fact',
          sources: ['it-ejustice-courts', 'it-cassazione', 'it-ejustice-specialised'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A dedicated Constitutional Court',
          text: 'Above and apart from the two orders sits the Constitutional Court (Corte costituzionale), which under Articles 134–135 rules on the constitutional legitimacy of State and regional laws, on conflicts of powers between the State and the regions, and on charges against the President of the Republic. It has fifteen judges, appointed in equal thirds by the President, by Parliament, and by the supreme ordinary and administrative courts. Unlike the Nordic systems that fold constitutional review into their ordinary courts, Italy has a dedicated constitutional tribunal — closer to the German or Belgian model.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the Court of Auditors (Corte dei conti), the assize courts, and the specialised sections have not been researched from the primary statutes and are not described.',
        },
      ],
      uncertainty: [
        'The court hierarchy is cited from the EU e-Justice Portal and the Court of Cassation; the primary judicial-organisation statutes were not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Italy',
      summary:
        'The Pubblico Ministero — a magistrate within the independent judiciary, not the executive — with a constitutional duty to prosecute every offence.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['it-ejustice-professions', 'it-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Italy is conducted by the Public Prosecutor (Pubblico Ministero), whose offices are attached to the tribunals, the courts of appeal and the Court of Cassation. Crucially, prosecutors are magistrates: they and the judges are both magistrati, and the Constitution "enshrines the principles of the independence and autonomy of the public prosecution service". Article 107 guarantees the prosecutor the protections that attach to the organisation of the judiciary.',
          claim: 'fact',
          sources: ['it-ejustice-professions', 'it-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independent — and obliged to prosecute',
          text: "Two things make the Italian prosecutor distinctive on this site. It is independent because it is part of the judiciary, not the executive — a stronger form of independence than a prosecution that merely cannot be instructed by a minister, because the prosecutor is a magistrate governed by the judiciary's own self-governing council. And under Article 112 it is under a constitutional obligation to initiate criminal proceedings — prosecution is mandatory, not discretionary. That combination — an independent magistrate-prosecutor with a duty to prosecute — is the opposite of a system where a minister-led service exercises charging discretion.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "This page states the prosecutor's constitutional position. It does not research how the mandatory-prosecution principle operates in practice given finite resources, nor the internal organisation of the prosecution offices.",
        },
      ],
      uncertainty: [
        'The role of the National Anti-Mafia Directorate and specialised prosecution offices was not researched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Italy',
      summary:
        'The judicial police investigate, but under the direction of the prosecuting magistrate, with a preliminary-investigation judge providing oversight.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['it-constitution', 'it-legge-121-1981'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Italy is carried out by the judicial police (polizia giudiziaria) — personnel drawn from the national police forces — but it is directed by the magistracy. The Constitution provides (Article 109) that "judicial authorities may directly avail themselves of the judicial police", and Law 121/1981 (Article 17) provides that judicial-police functions "are carried out under the dependence and direction of the judicial authority". So the prosecutor directs the investigation the police perform.',
          claim: 'fact',
          sources: ['it-constitution', 'it-legge-121-1981'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Directed by a magistrate, watched by a judge',
          text: 'Because the prosecutor is a magistrate and directs the judicial police, the direction of the investigation sits inside the independent judiciary. A separate figure, the judge for preliminary investigations (giudice per le indagini preliminari), provides judicial oversight of the pre-trial phase — authorising intrusive measures and guarding the rights of the person under investigation. This page describes that allocation; it is our framing, grounded in the constitutional and statutory sources.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who directs and oversees the investigation. It does not describe investigative techniques, surveillance or forensic methods, or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The detailed powers of the prosecutor and the preliminary-investigation judge rest in the Code of Criminal Procedure, which was not read in full.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Italy',
      summary:
        'The Department of Prison Administration under the Ministry of Justice — and a properly scoped Council of Europe figure showing the system well above capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['it-giustizia-dap', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [IT_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prisons in Italy are run by the Department of Prison Administration (Dipartimento dell'Amministrazione Penitenziaria, DAP), a department set up within the Ministry of Justice by Article 30 of Law 395 of 1990. It implements order, security and treatment policies within the prisons and is organised territorially through regional prison-administration offices. Because the system is national, a figure for the whole system describes the whole system.",
          claim: 'fact',
          sources: ['it-giustizia-dap'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Italian prisons held 60,637 people, including those on remand, against a total capacity of 51,347 places — a prison density of 118.1 inmates per 100 places, the highest in this Central/Southern-European group. That density above 100 means the system as a whole held substantially more people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual institutions and their regimes, the separate juvenile-justice department, community sanctions, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The internal structure of the DAP and the Penitentiary Police Corps was not researched.',
        'Juvenile detention, handled by a separate Ministry of Justice department, was not researched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Italy',
      summary:
        'The High Council of the Judiciary governs the magistracy; a national guarantor monitors detention. What this pilot could not confirm is stated honestly.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['it-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'paragraph',
          text: "The central oversight body of the Italian justice system is the High Council of the Judiciary (Consiglio Superiore della Magistratura, CSM), a constitutional body (Articles 104–105). It is presided over by the President of the Republic; its members are two-thirds elected by sitting magistrates and one-third by Parliament in joint session, with the First President and the General Prosecutor of the Court of Cassation as members by right. Under Article 105 it appoints, assigns, transfers, promotes and takes disciplinary action against the magistrates — the self-government that guarantees the judiciary's and the prosecution's independence.",
          claim: 'fact',
          sources: ['it-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: "The minister's limited role",
          text: 'The organisation and functioning of the services of justice belong to the Minister of Justice (Article 110), but expressly "without prejudice to the authority of the High Council of the Judiciary", and the Minister may only initiate — not decide — disciplinary action against magistrates (Article 107). So the executive administers the courts\' buildings and staff, but does not govern the magistrates.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'An honest gap',
          text: "Italy has a National Guarantor for the rights of persons deprived of personal liberty, which monitors prisons and police custody as the country's torture-prevention body — noted here, though this pilot reached it only through a search, not a fetched official page. Beyond that, this pilot did not establish a single national general ombudsman (civic-defender offices exist at regional level) or a dedicated independent national police-complaints commission; those are stated as unconfirmed rather than asserted or denied.",
        },
      ],
      uncertainty: [
        'The National Guarantor for the rights of persons deprived of liberty was identified via search, not a fetched official page.',
        'Whether a national general ombudsman or an independent police-complaints commission exists was not established from an official source.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Italy',
      summary:
        'Every source used for the Italy pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'it-constitution',
        'it-cassazione',
        'it-ejustice-professions',
        'it-ejustice-courts',
        'it-ejustice-specialised',
        'it-interno-pubblica-sicurezza',
        'it-legge-121-1981',
        'it-giustizia-dap',
        'it-gazzetta-nordio-2025',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Italy pages rest on ten sources: the Constitution (the Constitutional Court's own official English translation), the Court of Cassation, three European e-Justice Portal pages (legal professions, ordinary courts and specialised courts), the Interior Ministry on the police, Law 121/1981, the Ministry of Justice on the prison administration, the official-gazette publication of the proposed 2025 reform, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass that found no factual errors.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: "The Constitution was fetched as the Constitutional Court's official English PDF (the Senate's English PDF was bot-walled) and Law 121/1981 as the official government PDF, both text-extracted; the courts, ministry and e-Justice pages were read directly; the 2025 reform from the official gazette. The National Guarantor (detention oversight) was reached only through a search, so it is flagged as not directly fetched. The source register records the access path for each.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/italy-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Italy',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Italy (the scientific police services of the several forces and the medico-legal institutes) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Italy',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "Border and customs in Italy involve the Polizia di Stato's border police, the Guardia di Finanza, the Customs Agency, the Schengen and EU customs context, and Italy's central-Mediterranean maritime frontier, and could not be researched to the standard required here.",
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Italy',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Italian institutional history — unification, the Fascist period and the codes it left, the 1948 republican Constitution, and the development of the anti-mafia institutions — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Italy',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1948 Constitution, Law 121/1981 on the police, Law 395/1990 creating the DAP, and the 2025 publication of the proposed judicial-careers reform — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
