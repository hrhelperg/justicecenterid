import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Poland dossier — a unitary civil-law republic whose judiciary governance is a live, contested
 * question, handled here only by dated attribution (Batch B).
 *
 * Research date: facts checked against primary Polish statute (the Sejm's official ELI legal-acts
 * service), the Constitutional Tribunal's English text of the Constitution, and EU sources (the CJEU
 * via the FRA case-law reference; the European Commission's 2025 Rule of Law Report) on 2026-07-26,
 * and independently re-verified in an adversarial pass. Four load-bearing Polish statutory passages
 * were additionally re-confirmed by hand at authoring time.
 *
 * NEUTRALITY IS LOAD-BEARING FOR THIS COUNTRY. Two measures are stated as enacted facts with their
 * statutory citations (the 2016 personal union of Prosecutor-General and Minister of Justice; the
 * 2017 change to how the National Council of the Judiciary's judicial members are chosen). Every
 * contested assessment is attributed to a named, dated source (the CJEU judgment in C-204/21; the
 * Commission's 2025 report) and the site adds no characterisation of its own — no "capture",
 * "backsliding", party names, or crisis language. Enacted and proposed are kept strictly distinct.
 *
 * Naming caveat: the official English text of the Constitution renders the Naczelny Sąd
 * Administracyjny as "Chief Administrative Court"; the institution's conventional English name
 * "Supreme Administrative Court" was not independently verified, so both are shown.
 */
const PL_PRISON_DENSITY: RestrictedClaim = {
  id: 'pl-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Polish prisons held 73,822 people including those on remand, against a total capacity of 86,109 places — a prison density of 85.7 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024.',
  jurisdiction: 'PL',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the Prison Service, Służba Więzienna), at one reference date. A density of 85.7 means the system as a whole held fewer people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const POLAND: CountryDossier = {
  countryCode: 'PL',
  slug: 'poland',
  name: 'Poland',
  officialName: 'the Republic of Poland',
  independentBodyNoun: 'a Polish government body',
  summary:
    'Poland is a unitary, civil-law republic under its 1997 Constitution, with all justice functions national. Its head of prosecution is, by statute, the Minister of Justice; it has three separate top courts; and the governance of its judiciary is a contested question, which these pages describe only by attribution to dated official and EU sources.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['pl'],
  sources: ['pl-constitution', 'pl-prokuratura'],
  uncertainty: [
    'The conventional English name of the Naczelny Sąd Administracyjny ("Supreme Administrative Court") was not independently verified; the official constitutional translation renders it "Chief Administrative Court", so both are shown.',
    'The tier names of the common-court hierarchy (district, regional, appellate courts) were not fetched from a primary source and are not asserted.',
    'Developments in the judiciary dispute reported only by news media (rather than a primary or official source) are deliberately excluded; the pages carry only what dated official and EU sources state.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Poland is a unitary parliamentary republic with a civil-law tradition, governed by the Constitution of 2 April 1997. Article 3 provides that "the Republic of Poland shall be a unitary State", and Article 10 bases the system of government on the separation of the legislative, executive and judicial powers. The courts and tribunals "constitute a separate power and shall be independent of other branches of power" (Article 173).',
      claim: 'fact',
      sources: ['pl-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'The head of the prosecution is the Minister of Justice',
      text: "Poland's most distinctive institutional feature is that the office of Prosecutor-General is held, by statute, by the Minister of Justice — a personal union of the two roles (Law on the Prosecutor's Office 2016, Article 1 § 2). Where Czechia's prosecution is part of the justice ministry and Austria's answers to the minister, in Poland the same person is both the government's justice minister and the supreme organ of the prosecution. The prosecution page sets this out.",
    },
    {
      kind: 'callout',
      variant: 'scope',
      title: 'A contested area, described only by attribution',
      text: 'The governance of the Polish judiciary has been the subject of sustained legal dispute. This site takes no position on it and adds no characterisation of its own; the oversight page records only what dated official and EU sources state, distinguishing measures that are enacted and in force from those that are proposed.',
    },
    {
      kind: 'paragraph',
      text: "The system runs through national institutions: a single national police force under the Minister of Internal Affairs, three separate top courts, a prosecution service headed by the Minister of Justice, and a national Prison Service under the same minister. Oversight runs through the Commissioner for Citizens' Rights and the National Council of the Judiciary.",
      claim: 'fact',
      sources: ['pl-constitution', 'pl-police'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Poland',
      summary:
        'A unitary republic under the 1997 Constitution, with a constitutional separation of powers and courts that constitute a separate, independent branch.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pl-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Poland is a unitary state (Article 3): it has three-tier territorial self-government (commune, county and voivodeship), but the Constitution assigns no justice competence to it. The administration of justice is a State function, implemented by the Supreme Court, the common courts, the administrative courts and the military courts (Article 175(1)). Judges are "independent and subject only to the Constitution and statutes" (Article 178) and are appointed for an indefinite period by the President on the motion of the National Council of the Judiciary (Article 179).',
          claim: 'fact',
          sources: ['pl-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Two ministries, one central government',
          text: 'Executive responsibility for justice is split between two ministers, not between territorial tiers: the Minister of Justice for court administration, the prosecution and the prison service, and the Minister of Internal Affairs for the police. This is a functional division within the central government — Poland is unitary, and no region holds any justice power.',
        },
      ],
      uncertainty: [
        "Constitutional articles are cited from the Constitutional Tribunal's official English translation; the authoritative text is Polish.",
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Poland',
      summary:
        'A single national police force (Policja) under the Minister of Internal Affairs, headed by the Chief Commissioner of Police.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pl-police'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "Policing in Poland is national. The Law on the Police of 1990 establishes the Police (Policja) as a single uniformed, armed formation to protect citizens' safety and maintain public order (Article 1(1)). Its central organ is the Chief Commissioner of Police (Komendant Główny Policji), subordinate to the Minister of Internal Affairs (Article 5(1)); the voivodeship and county commands below it are internal territorial units of the one national force.",
          claim: 'fact',
          sources: ['pl-police'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Municipal guards are not police',
          text: 'Local governments may run municipal or communal guards (straż gminna/miejska) for public order, but these are local-government bodies, not part of the Police, and they have no criminal-investigation competence. The one force with general criminal-investigation competence is the national Police.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the force's national structure and statutory basis. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        'Specialised armed services outside the general-competence Police (for example the Border Guard) exist under separate statutes and were not researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Poland',
      summary:
        'Four court pillars under the Supreme Court, a separate supreme administrative court, and a separate Constitutional Tribunal.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pl-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Constitution defines four court pillars: the Supreme Court, the common courts, the administrative courts and the military courts (Article 175(1)), with proceedings having at least two stages (Article 176). The Supreme Court (Sąd Najwyższy) exercises supervision over the common and military courts regarding judgments (Article 183); the common courts hear all matters not statutorily reserved to another court (Article 177).',
          claim: 'fact',
          sources: ['pl-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Three separate top bodies',
          text: 'Poland has three top bodies in distinct domains: the Supreme Court for the ordinary and military courts; a separate supreme administrative court, the Naczelny Sąd Administracyjny (Article 184 — rendered "Chief Administrative Court" in the official English translation of the Constitution, and conventionally called the "Supreme Administrative Court"); and the Constitutional Tribunal (Trybunał Konstytucyjny), which adjudicates the conformity of statutes to the Constitution and whose judgments are "of universally binding application and shall be final" (Articles 188, 190). The Tribunal is constitutionally distinct from the "courts".',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The tier names of the common-court hierarchy (district, regional and appellate courts) were not fetched from a primary source and are not asserted; the detailed jurisdiction of each pillar is likewise not set out.',
        },
      ],
      uncertainty: [
        'The common-court tier names and the military-court structure were not fetched from a primary source.',
        'The conventional English name of the Naczelny Sąd Administracyjny was not independently verified; both renderings are shown.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Poland',
      summary:
        'The Prokuratura — a statutory (not constitutional) service whose supreme organ, the Prosecutor-General, is by law the Minister of Justice.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pl-prokuratura', 'pl-ec-rol-2025'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prosecution is conducted by the Prokuratura. Unlike the courts, it has no dedicated basis in the 1997 Constitution; its legal basis is statutory, in the Law on the Prosecutor's Office of 28 January 2016. The service is hierarchical, and its supreme organ, the Prosecutor-General, directs it and is the superior of the prosecutors, assisted by the National Prosecutor (Prokurator Krajowy).",
          claim: 'fact',
          sources: ['pl-prokuratura'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prosecutor-General and Minister of Justice — the same office',
          text: 'The Law on the Prosecutor\'s Office provides that "the Prosecutor-General is the supreme organ of the prosecution" and that "the office of Prosecutor-General is held by the Minister of Justice" (Article 1 § 2). That is a personal union: the head of the prosecution is, by statute, a member of the government. This is the most executive-fused of the prosecution models on this site — beyond Czechia\'s prosecution-within-the-ministry and Austria\'s prosecution-under-the-minister.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A proposed separation, recorded as proposed',
          text: 'The European Commission\'s 2025 Rule of Law Report (8 July 2025) records that steps have been taken toward separating the office of the Minister of Justice from that of the Prosecutor-General, but that "a law to that end is yet to be adopted". So as of the sources read, the 2016 personal union still stands; a separation is proposed, not enacted. This is stated by attribution, with its date, and nothing beyond it is implied.',
        },
      ],
      uncertainty: [
        'Later developments in the separation proposal, reported only by news media, are excluded; the page carries only what the dated Commission report states.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Poland',
      summary:
        'The prosecutor directs the pre-trial phase and personally conducts the more serious investigation; the Police execute investigative acts under prosecutorial supervision.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pl-kpk'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Poland is directed by the prosecutor. Under the Code of Criminal Procedure, preparatory proceedings are conducted by the prosecutor and, to the extent statute provides, by the Police (Article 298 § 1). The more serious form of investigation, the śledztwo, is conducted by the prosecutor; the lighter inquiry, the dochodzenie, is conducted by the Police unless the prosecutor conducts it; and the prosecutor may entrust the Police with either (Article 311). Where the prosecutor does not conduct the proceedings personally, the prosecutor supervises them (Article 326 § 1).',
          claim: 'fact',
          sources: ['pl-kpk'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who directs and supervises the investigation and who carries out its acts. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The detailed powers exercised during preparatory proceedings, and the judicial authorisations required for coercive measures, were not set out beyond the cited provisions.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Poland',
      summary:
        'The Prison Service (Służba Więzienna) under the Minister of Justice — and a properly scoped Council of Europe figure showing the system under capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pl-sluzba-wiezienna', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [PL_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Poland are run by a single national service, the Prison Service (Służba Więzienna), a uniformed, armed, apolitical formation subordinate to the Minister of Justice under the Law on the Prison Service of 2010 (Article 1). It executes remand detention and custodial sentences through a Central Board and its subordinate establishments, headed by a Director-General. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['pl-sluzba-wiezienna'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Polish prisons held 73,822 people, including those on remand, against a total capacity of 86,109 places — a prison density of 85.7 inmates per 100 places. That density below 100 means the system as a whole held fewer people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons and their regimes, the execution of sentences in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The Executive Penal Code governing the execution of sentences was referenced but not separately fetched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Poland',
      summary:
        "The Commissioner for Citizens' Rights, the National Council of the Judiciary, and a contested judiciary-governance question recorded strictly by dated attribution.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pl-constitution', 'pl-krs-2017', 'pl-cjeu-c204-21', 'pl-ec-rol-2025'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: "Commissioner for Citizens' Rights (Rzecznik Praw Obywatelskich)",
              description:
                "The constitutional ombudsman (Article 208), who safeguards the freedoms and rights specified in the Constitution and other normative acts, is appointed by the Sejm with the Senate's consent for a five-year term (Article 209), and is independent of other State organs, accountable only to the Sejm (Article 210).",
            },
            {
              term: 'National Council of the Judiciary (Krajowa Rada Sądownictwa)',
              description:
                'The constitutional body that "shall safeguard the independence of courts and judges" (Article 186). Its composition is fixed by the Constitution (Article 187): senior office-holders, fifteen members chosen from among the judges, and members chosen by the Sejm and the Senate — with the manner of choosing the judicial members delegated to statute.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'What is enacted, stated as fact',
          text: 'Two changes are enacted and in force, and are stated here as facts with their statutory basis. Since a 2017 amendment (Dz.U. 2018 poz. 3), the fifteen judicial members of the National Council of the Judiciary are elected by the Sejm (Article 9a), whereas under the original 2011 law they were elected by assemblies of judges. And since 2016 the office of Prosecutor-General has been held by the Minister of Justice (see the prosecution page).',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What is contested, stated only by attribution',
          text: 'The assessment of these and related judiciary changes is contested, and this site adds no view of its own. The Court of Justice of the EU held, in Commission v Poland (Case C-204/21, judgment of 5 June 2023), that Poland had failed to fulfil obligations under Article 19(1) TEU read with Article 47 of the Charter by, among other things, conferring on the Disciplinary Chamber of the Supreme Court, "whose independence and impartiality are not guaranteed", jurisdiction over matters affecting judges\' status. The European Commission\'s 2025 Rule of Law Report (8 July 2025) records that certain judiciary laws had not entered into force because the President referred them to the Constitutional Tribunal, and that a law to separate the Prosecutor-General from the Minister of Justice "is yet to be adopted". Each statement is attributed and dated; the site takes no position.',
        },
      ],
      uncertainty: [
        "A dedicated statutory police-complaints body was not confirmed from a source read; oversight of police conduct runs through the prosecution and courts and the Commissioner for Citizens' Rights.",
        'Developments after the dated sources above, reported only by news media, are excluded.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Poland',
      summary:
        'Every source used for the Poland pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'pl-constitution',
        'pl-prokuratura',
        'pl-police',
        'pl-kpk',
        'pl-sluzba-wiezienna',
        'pl-krs-2017',
        'pl-cjeu-c204-21',
        'pl-ec-rol-2025',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Poland pages rest on the Constitution (the Constitutional Tribunal's official English text) and four primary statutes fetched from the Sejm's official ELI legal-acts service — the Law on the Prosecutor's Office, the Law on the Police, the Code of Criminal Procedure, and the amending law on the National Council of the Judiciary — together with the Law on the Prison Service, the CJEU's judgment in C-204/21 (via the EU Fundamental Rights Agency reference), the European Commission's 2025 Rule of Law Report, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026 and independently re-checked; four load-bearing Polish statutory passages were re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How the contested material is handled',
          text: "Enacted measures (the 2016 personal union, the 2017 change to the National Council of the Judiciary) are stated as facts with their statutory citations. Contested assessments are carried only by attribution to the CJEU judgment and the Commission report, each dated, and the site adds no characterisation. Developments reported only by news media are excluded. The EU direct full-text of C-204/21 was bot-walled, so the EU Fundamental Rights Agency's official reference was used; the naming of the Naczelny Sąd Administracyjny follows the official constitutional translation, with the conventional name shown alongside.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/poland-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Poland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Poland (the Central Forensic Laboratory of the Police and the institutes of forensic research) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Poland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "Border and customs in Poland involve the Border Guard (Straż Graniczna), the tax-and-customs administration, and Poland's position on the EU external border, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.",
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Poland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Polish institutional history — the 1989 transition, the 1997 Constitution, and the successive reforms of the judiciary and prosecution — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here, and it is an area where neutrality demands especially careful sourcing.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Poland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1997 Constitution, the 2016 Law on the Prosecutor's Office, the 2017 amendment on the National Council of the Judiciary, and the 2023 CJEU judgment — are a start, but a responsible and neutral timeline needs primary sources for each milestone, which were not assembled here.",
    },
  ],
};
