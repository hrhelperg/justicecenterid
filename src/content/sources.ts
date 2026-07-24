import type { SourceRecord } from './types';

/**
 * The source registry.
 *
 * Every URL below was opened and confirmed on the date in `verifiedOn`. Where a document's
 * identity could not be confirmed — because the official host blocks automated access, or
 * because the file is an image-only scan — the source is not listed here at all. Nothing is
 * inferred from a URL pattern.
 *
 * `note` records what each source actually supports. It exists so that a source cannot be
 * reused later for a claim it does not cover.
 *
 * See docs/editorial/source-policy.md.
 */
export const SOURCES: readonly SourceRecord[] = [
  {
    id: 'udhr',
    type: 'international-organization',
    title: 'Universal Declaration of Human Rights',
    publisher: 'United Nations',
    url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights',
    publishedOn: '1948-12-10',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: 'Supports the existence and wording of the declared principles of equality before the law (Art. 7), the right to an effective remedy (Art. 8), the right to a fair and public hearing by an independent and impartial tribunal (Art. 10), and the presumption of innocence (Art. 11). A declaration, not a treaty: it does not establish binding obligations, and it does not support any claim about how a particular state implements these principles.',
  },
  {
    id: 'iccpr',
    type: 'international-organization',
    title:
      'International Covenant on Civil and Political Rights (United Nations Treaty Series, vol. 999, No. I-14668)',
    publisher: 'United Nations',
    url: 'https://treaties.un.org/doc/publication/unts/volume%20999/volume-999-i-14668-english.pdf',
    publishedOn: '1966',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: 'Authentic treaty text as registered in the UN Treaty Series; registered ex officio 23 March 1976. Supports the fair-trial guarantees of Article 14, including the right to a competent, independent and impartial tribunal established by law, and the presumption of innocence (Art. 14(2)). Binding only on states party to it; does not support claims about states that have not ratified, nor about how any individual state applies it.',
  },
  {
    id: 'un-rule-of-law',
    type: 'international-organization',
    title: 'What is the Rule of Law',
    publisher: 'United Nations (Rule of Law Unit)',
    url: 'https://www.un.org/ruleoflaw/what-is-the-rule-of-law/',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: "Supports the United Nations' own working definition of the rule of law, including the requirements of accountability to law, equal enforcement, independent adjudication, and consistency with international human-rights norms. It is one institution's definition, and the guide attributes it as such rather than presenting it as the definition.",
  },
  {
    id: 'un-prosecutors-guidelines',
    type: 'international-organization',
    title: 'Guidelines on the Role of Prosecutors',
    publisher:
      'United Nations (adopted by the Eighth United Nations Congress on the Prevention of Crime and the Treatment of Offenders, Havana, 27 August – 7 September 1990)',
    url: 'https://www.unodc.org/pdf/criminal_justice/Guidelines_on_the_Role_of_Prosecutors.pdf',
    publishedOn: '1990',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: 'Supports the international standards expected of prosecutors: impartiality, protection of the public interest, respect for human dignity, and the separation of prosecutorial from judicial functions. Non-binding guidance, not a description of any national prosecution service.',
  },
  {
    id: 'mandela-rules',
    type: 'international-organization',
    title:
      'The United Nations Standard Minimum Rules for the Treatment of Prisoners (the Nelson Mandela Rules)',
    publisher: 'United Nations Office on Drugs and Crime',
    url: 'https://www.unodc.org/documents/justice-and-prison-reform/Nelson_Mandela_Rules-E-ebook.pdf',
    publishedOn: '2015',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: 'Supports the internationally agreed minimum standards for the treatment of people in detention, including the requirement of independent inspection of prisons. Standards, not a description of conditions in any particular prison system.',
  },
  {
    id: 'rome-statute',
    type: 'international-organization',
    title: 'Rome Statute of the International Criminal Court, 1998',
    publisher: 'United Nations (Office of Legal Affairs)',
    url: 'https://legal.un.org/icc/statute/99_corr/cstatute.htm',
    publishedOn: '1998',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: "Supports the existence, constitution, and jurisdictional limits of the International Criminal Court, including its complementarity to national jurisdictions. Does not support claims about the Court's effectiveness or about states that are not party to it.",
  },
  {
    id: 'met-police-act-1829',
    type: 'legislation',
    title: 'Metropolitan Police Act 1829 (1829 c. 44, 10 Geo. 4)',
    publisher: 'The National Archives (legislation.gov.uk)',
    url: 'https://www.legislation.gov.uk/ukpga/1829/44/enacted',
    publishedOn: '1829',
    verifiedOn: '2026-07-23',
    jurisdiction: 'GB',
    note: 'Supports the statutory creation of a full-time, centrally organised police force for the Metropolitan area of London in 1829. Supports nothing about policing outside that area, nothing about the model being adopted elsewhere, and nothing about earlier or parallel arrangements. The full text is available on the cited page only as a scanned PDF.',
  },
  {
    id: 'magna-carta-1297',
    type: 'legislation',
    title: 'Magna Carta (1297)',
    publisher: 'The National Archives (legislation.gov.uk)',
    url: 'https://www.legislation.gov.uk/aep/Edw1cc1929/25/9/contents',
    publishedOn: '1297',
    verifiedOn: '2026-07-23',
    jurisdiction: 'GB',
    note: 'Supports the fact that clauses of Magna Carta, in the 1297 confirmation, remain on the statute book of England and Wales. Note that this is the 1297 text, not the 1215 text; the two differ, and conflating them is a common error.',
  },
  {
    id: 'tna-magna-carta',
    type: 'archive',
    title: 'Magna Carta, 1215 and beyond',
    publisher: 'The National Archives (United Kingdom)',
    url: 'https://www.nationalarchives.gov.uk/education/resources/magna-carta/',
    verifiedOn: '2026-07-23',
    jurisdiction: 'GB',
    note: 'Archival educational resource supporting the historical context of the 1215 charter and its later reissues. Supports historical narrative about the document; does not support claims about its legal effect today.',
  },
  {
    id: 'loc-magna-carta',
    type: 'archive',
    title: 'Magna Carta: Muse and Mentor',
    publisher: 'Library of Congress (United States)',
    url: 'https://www.loc.gov/exhibits/magna-carta-muse-and-mentor/',
    verifiedOn: '2026-07-23',
    note: 'Library of Congress exhibition supporting the later influence and reinterpretation of Magna Carta, particularly its reception outside England. Useful precisely because it documents reinterpretation rather than continuity.',
  },
  {
    id: 'nas-forensic-2009',
    type: 'academic',
    title: 'Strengthening Forensic Science in the United States: A Path Forward',
    publisher:
      'National Research Council (National Academy of Sciences); hosted by the Office of Justice Programs, U.S. Department of Justice',
    url: 'https://www.ojp.gov/library/publications/strengthening-forensic-science-united-states-path-forward',
    publishedOn: '2009',
    verifiedOn: '2026-07-23',
    jurisdiction: 'US',
    note: 'Supports the finding that forensic disciplines varied widely in scientific foundation, standardisation, and quality assurance, and that interpretation of evidence varied between jurisdictions. Its findings concern the United States as of 2009; they do not describe forensic practice in other countries or the position today.',
  },
  {
    id: 'nist-forensic-science',
    type: 'government',
    title: 'Forensic science',
    publisher: 'National Institute of Standards and Technology (United States)',
    url: 'https://www.nist.gov/topics/forensic-science',
    verifiedOn: '2026-07-23',
    jurisdiction: 'US',
    note: 'Supports the existence of standards-development and scientific-foundation review work in forensic science, including the Organization of Scientific Area Committees for Forensic Science (OSAC) and published foundation reviews. A United States source describing United States arrangements.',
  },
  {
    id: 'enfsi',
    type: 'institutional',
    title: 'European Network of Forensic Science Institutes',
    publisher: 'ENFSI',
    url: 'https://enfsi.eu/',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: "Institutional self-description. Supports the existence of a European network of forensic institutes engaged in quality assurance and best-practice work. Attributed in the text as the organisation's own account of itself.",
  },
  {
    id: 'unodc-cpcj',
    type: 'international-organization',
    title: 'Crime Prevention and Criminal Justice',
    publisher: 'United Nations Office on Drugs and Crime',
    url: 'https://www.unodc.org/unodc/en/justice-and-prison-reform/index.html',
    verifiedOn: '2026-07-23',
    jurisdiction: 'INT',
    note: 'Supports the existence of the UN crime prevention and criminal justice programme and its standards-and-norms work across policing, courts, and prisons. Does not support any country-level claim.',
  },

  /* ------------------------------------------------------------------------ */
  /* France (country pilot) — all verified 2026-07-24                         */
  /* ------------------------------------------------------------------------ */
  /*
   * Every French source below was read directly and confirmed to contain the text it is
   * cited for; `verificationMethod: 'content-confirmed'` records that.
   *
   * legifrance.gouv.fr returns HTTP 403 to an automated request while serving the document
   * normally to a reader. A status-code probe would therefore have rejected the authentic
   * text of French legislation — the exact inverse of the "HTTP 200 does not mean verified"
   * rule. Both directions are unreliable, which is why the method is now recorded.
   */
  {
    id: 'fr-constitution-1958',
    type: 'legislation',
    title: 'Constitution du 4 octobre 1958 (texte intégral en vigueur)',
    publisher: 'Conseil constitutionnel',
    url: 'https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur',
    publishedOn: '1958-10-04',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'FR',
    note: "Authentic consolidated text published by the Conseil constitutionnel. Supports: Article 1 (indivisible Republic; decentralised organisation); Article 64 (President as guarantor of the independence of the judicial authority, assisted by the Conseil supérieur de la magistrature); Article 66 (judicial authority as guardian of individual liberty); Article 72 (categories of territorial collectivity); Article 72-3 (the ten named overseas territories); Articles 73 and 74 (the two overseas regimes); the title of Title VIII ('De l'autorité judiciaire') and of Title XIII (transitional provisions on New Caledonia). Does NOT support any claim about how these provisions are applied in practice, nor about the internal organisation of any institution.",
  },
  {
    id: 'fr-cpp-art-12',
    type: 'legislation',
    title: 'Article 12 du Code de procédure pénale',
    publisher: 'République française (Légifrance)',
    url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006574849',
    publishedOn: '1958-04-08',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'FR',
    note: "Supports the exact wording that the police judiciaire is exercised 'sous la direction du procureur de la République' by the officers, officials and agents designated in that title. Légifrance records the provision as in force from 8 April 1958 and as scheduled for repeal by Ordonnance n° 2025-1091 of 19 November 2025 with effect from 1 January 2029; any citation must state that it is current law carrying a scheduled end date. Does NOT support any claim about which bodies those designated officers belong to, nor about investigative practice.",
  },
  {
    id: 'fr-code-defense-l3211-3',
    type: 'legislation',
    title: 'Article L3211-3 du Code de la défense',
    publisher: 'République française (Légifrance)',
    url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037201047',
    publishedOn: '2018-07-15',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'FR',
    note: "Supports the exact wording 'La gendarmerie nationale est une force armée instituée pour veiller à l'exécution des lois', and that its military missions are executed throughout the national territory. Version in force from 15 July 2018, last modified by Loi n° 2018-607 of 13 July 2018, article 42. Supports the gendarmerie's legal character as an armed force ONLY; it does not support any claim about territorial allocation between the gendarmerie and the police nationale, nor about equipment, tactics or deployment.",
  },
  {
    id: 'fr-csi-l511-1',
    type: 'legislation',
    title: 'Article L511-1 du Code de la sécurité intérieure',
    publisher: 'République française (Légifrance)',
    url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041587492',
    publishedOn: '2021-07-01',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'FR',
    note: "Supports that agents de police municipale act under the authority of the mayor on tasks within the mayor's competence relating to prevention and surveillance of public order, tranquillity, security and public health, and the opening clause 'Sans préjudice de la compétence générale de la police nationale et de la gendarmerie nationale'. Légifrance records it as in force from 1 July 2021 to 1 January 2029. Does NOT support any claim about how many communes maintain a municipal force, nor about the powers of individual agents beyond the cited wording.",
  },
  {
    id: 'fr-justice-courts',
    type: 'government',
    title: "L'organisation des cours et tribunaux",
    publisher: 'Ministère de la justice (France)',
    url: 'https://www.justice.gouv.fr/justice-france/lorganisation-cours-tribunaux',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'FR',
    note: "The Ministry of Justice's own account of court organisation. Supports: the division into ordre judiciaire and ordre administratif; the naming of the tribunal judiciaire, tribunal de proximité, conseil de prud'hommes, tribunal de commerce, tribunal paritaire des baux ruraux, tribunal de police, tribunal correctionnel, cour criminelle départementale, cour d'assises, cour d'appel and Cour de cassation; the three administrative levels (tribunal administratif, cour administrative d'appel, Conseil d'État); and the role of the Tribunal des conflits. A structural self-description: it does not support claims about caseload, effectiveness, or the competence thresholds allocating cases between courts. Undated on the page, so it supports current structure as at the verification date only.",
  },
  {
    id: 'fr-justice-parquet',
    type: 'government',
    title: 'Les magistrats du parquet',
    publisher: 'Ministère de la justice (France)',
    url: 'https://www.justice.gouv.fr/justice-france/acteurs-justice/magistrats/magistrats-du-parquet',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'FR',
    note: "Supports: the definition of the parquet / ministère public; the 'magistrature debout' description and the siège/parquet distinction; the hierarchy from procureur général to procureur de la République; that parquet magistrates act 'sous l'autorité du ministre de la Justice' and receive 'des instructions générales du ministre de la Justice mais en aucun cas dans les dossiers judiciaires'; that they do not benefit from the guarantee of inamovibilité; and the prosecutor's direction of investigation and discretion over case outcomes. An official self-description of the formal rule. It does NOT establish that the rule is observed in practice, and cannot settle the contested question of prosecutorial independence in either direction.",
  },

  /* ------------------------------------------------------------------------ */
  /* Germany (federal country pilot) — all verified 2026-07-24                */
  /* ------------------------------------------------------------------------ */
  /*
   * Translation status is recorded explicitly on each record. Two different situations
   * appear here and they are not equivalent:
   *   - the Basic Law English text is a named academic translation produced with the
   *     Bundestag Language Service, offered under conditions of use;
   *   - the StPO and GVG English texts are official BMJV translations.
   * In every case the GERMAN text is legally authoritative and the translation may lag later
   * amendments, so the GVG and StPO provisions below are cited from the German original.
   */
  {
    id: 'de-grundgesetz',
    type: 'legislation',
    title: 'Basic Law for the Federal Republic of Germany (Grundgesetz), English translation',
    publisher: 'Bundesministerium der Justiz / Bundesamt für Justiz (Gesetze im Internet)',
    url: 'https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.html',
    publishedOn: '1949-05-23',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'DE',
    note: 'Translation by Professors Christian Tomuschat, David P. Currie, Donald P. Kommers and Raymond Kerr in cooperation with the Language Service of the German Bundestag; offered subject to stated conditions of use. The page states the text reflects amendments up to 22 March 2025. THE GERMAN TEXT IS AUTHORITATIVE and the translation may lag later amendments. Supports: Art. 20(1) federal state; Art. 30 (exercise of state powers is a matter for the Länder except as otherwise provided); Art. 70 (Länder legislate unless the Basic Law confers power on the Federation; exclusive vs concurrent); Art. 73(1) no. 10 (cooperation in criminal police matters; establishment of a Federal Criminal Police Office); Art. 74(1) no. 1 (concurrent legislation over criminal law and court organisation and procedure, EXCEPT the law on pre-trial detention); Art. 83 (Länder execute federal laws in their own right); Art. 87(1) (federal law may establish Federal Border Police authorities and central police offices); Art. 92 (judicial power vested in the Federal Constitutional Court, federal courts and the courts of the Länder); Art. 95(1) (the five federal supreme courts); Art. 96 (further federal courts); Art. 97 (judicial independence); Art. 35 (mutual legal and administrative assistance). Does NOT support any claim about how a particular Land organises its institutions.',
  },
  {
    id: 'de-gvg-141',
    type: 'legislation',
    title: 'Gerichtsverfassungsgesetz (GVG) § 141 (German original text)',
    publisher: 'Bundesministerium der Justiz / Bundesamt für Justiz (Gesetze im Internet)',
    url: 'https://www.gesetze-im-internet.de/gvg/__141.html',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'DE',
    note: "Authoritative German text. Supports the single sentence 'Bei jedem Gericht soll eine Staatsanwaltschaft bestehen' — a public prosecution office shall exist at every court. Supports the structural pairing of prosecution offices to courts and nothing more; it does not say who staffs, funds or supervises them, and it does not describe any Land's arrangements. The page displays no Stand/version date, so currency rests on the publisher rather than a printed date.",
  },
  {
    id: 'de-gvg-147',
    type: 'legislation',
    title: 'Gerichtsverfassungsgesetz (GVG) § 147 (German original text)',
    publisher: 'Bundesministerium der Justiz / Bundesamt für Justiz (Gesetze im Internet)',
    url: 'https://www.gesetze-im-internet.de/gvg/__147.html',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'DE',
    note: 'Authoritative German text. Supports that the right of supervision and direction (Aufsicht und Leitung) belongs to: (1) the Federal Minister of Justice regarding the Generalbundesanwalt and the Bundesanwälte; (2) the Landesjustizverwaltung regarding all prosecution officials of the Land concerned; (3) the senior official of the prosecution office at the Oberlandesgerichte and Landgerichte regarding all prosecution officials in their district. Supports the EXISTENCE and ALLOCATION of that formal power only. It does not establish how often, or whether, the power is exercised, and it cannot settle the contested question of prosecutorial independence in either direction. The page displays no Stand/version date.',
  },
  {
    id: 'de-stpo-160',
    type: 'legislation',
    title:
      'Strafprozessordnung (StPO) § 160 — Pflicht zur Sachverhaltsaufklärung (German original text)',
    publisher: 'Bundesministerium der Justiz / Bundesamt für Justiz (Gesetze im Internet)',
    url: 'https://www.gesetze-im-internet.de/stpo/__160.html',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'DE',
    note: 'Authoritative German text. Supports § 160(1): once the Staatsanwaltschaft learns of a suspected offence it must investigate the facts in order to decide whether to bring a public charge; and § 160(2): it must investigate exculpatory as well as incriminating circumstances and secure evidence. Supports the allocation of investigative responsibility and the objectivity duty. Does NOT support any description of investigative technique, thresholds, or practice.',
  },
  {
    id: 'de-stpo-163',
    type: 'legislation',
    title:
      'Strafprozessordnung (StPO) § 163 — Aufgaben der Polizei im Ermittlungsverfahren (German original text)',
    publisher: 'Bundesministerium der Justiz / Bundesamt für Justiz (Gesetze im Internet)',
    url: 'https://www.gesetze-im-internet.de/stpo/__163.html',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'DE',
    note: "Authoritative German text. Supports § 163(1): the authorities and officials of the police service must investigate offences and take all measures that permit no delay in order to prevent the matter being obscured. Supports that the police hold their own statutory first-access investigative duty alongside the prosecution's direction. Does NOT support operational detail of any kind.",
  },
  {
    id: 'de-destatis-strafvollzug-2024',
    type: 'government',
    title: 'Statistischer Bericht — Strafvollzug — 2024',
    publisher: 'Statistisches Bundesamt (Destatis)',
    url: 'https://www.destatis.de/DE/Themen/Staat/Justiz-Rechtspflege/Publikationen/Downloads-Strafverfolgung-Strafvollzug/statistischer-bericht-strafvollzug-2100410247005.html',
    publishedOn: '2024-12-11',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'DE',
    note: "Reference date (Stichtag) 31 March 2024; published 11 December 2024. Crucially, Destatis states 'Die Daten der Strafvollzugsstatistik werden von den Statistischen Ämtern der Länder übermittelt' — the national statistic is an AGGREGATION of data transmitted by the Länder statistical offices, not a measurement of a single national prison system. Cited here for that methodological fact and for the existence and scope of the series. The landing page publishes no headline total, so NO numeric figure is taken from this source.",
  },
  {
    id: 'coe-space-i-2024',
    type: 'international-organization',
    title:
      'Prison Populations — SPACE I 2024 (Council of Europe Annual Penal Statistics), PC-CP (2024) 5',
    publisher: 'Council of Europe / University of Lausanne (Marcelo F. Aebi and Edoardo Cocco)',
    url: 'https://wp.unil.ch/space/files/2025/09/250924_rapport-space-i-2024.pdf',
    publishedOn: '2024-12-15',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'DE',
    note: "Strasbourg, 15 December 2024, updated 24 September 2025. Data supplied by national prison administrations to the University of Lausanne research team via a questionnaire agreed by the Council for Penological Co-operation. Reference date for prison population is 31 January 2024; country population figures are as at 1 January 2024. Supports, for Germany: Table 3 — total inmates including pre-trial detainees 59,413, prison population rate 71.2 per 100,000, adjusted figures 55,916 and 67.0; Table 16 — total capacity of penal institutions 72,258 and prison density 82.2 inmates per 100 places. The report states its aim is comparable data but warns that 'any comparisons of the levels (in rates, ratios and percentages) shown by the countries according to different indicators are always problematic'. It does NOT support any Land-level figure, nor any cross-country ranking.",
  },

  /* ------------------------------------------------------------------------ */
  /* United States (multilevel country pilot) — all verified 2026-07-24       */
  /* ------------------------------------------------------------------------ */
  /*
   * justice.gov, fbi.gov and several other official hosts return HTTP 403 to an automated
   * request while serving the documents to a browser — the same bot-wall pattern documented
   * for legifrance.gouv.fr in the France pilot. Where a primary text was needed from such a
   * host, it was read from the United States Code on the Legal Information Institute (Cornell
   * Law School), which reproduces the enacted statutory text verbatim. Each record states its
   * verification method and, where the text is hosted by a secondary publisher, says so.
   */
  {
    id: 'us-const-amend-10',
    type: 'legislation',
    title: 'Tenth Amendment to the Constitution of the United States',
    publisher:
      'Legal Information Institute, Cornell Law School (reproducing the enacted constitutional text)',
    url: 'https://www.law.cornell.edu/constitution/tenth_amendment',
    publishedOn: '1791-12-15',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Verbatim text: 'The powers not delegated to the United States by the Constitution, nor prohibited by it to the states, are reserved to the states respectively, or to the people.' Supports the reserved-powers structure of US federalism — that the states, not the federal government, hold residual authority. Cornell LII reproduces the enacted text; the constitutional text itself is authoritative. Does NOT support any claim about how a particular power is allocated in practice.",
  },
  {
    id: 'us-courts-comparing',
    type: 'government',
    title: 'Comparing Federal & State Courts',
    publisher: 'Administrative Office of the U.S. Courts (uscourts.gov)',
    url: 'https://www.uscourts.gov/about-federal-courts/court-role-and-structure/comparing-federal-state-courts',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "The federal judiciary's own account. Supports: that the federal and state governments each have their own separate court systems; the federal structure of U.S. district courts, U.S. courts of appeals and the Supreme Court created under Article III; that each state establishes its own courts through its constitution and laws and that state systems vary; and the broad division of case types (federal courts hear cases on the Constitution, federal law, disputes between states, admiralty, bankruptcy, habeas; state courts hear most criminal, contract, tort, family and probate matters). Supports court STRUCTURE only; not caseload, effectiveness or the competence thresholds within any state.",
  },
  {
    id: 'us-usmarshals-duties',
    type: 'government',
    title: 'What We Do — Duties and Operations, U.S. Marshals Service',
    publisher: 'United States Marshals Service (usmarshals.gov)',
    url: 'https://www.usmarshals.gov/what-we-do',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "The agency's own description. Supports that the U.S. Marshals Service is the enforcement arm of the federal courts, and that its duties include protecting the federal judiciary, apprehending federal fugitives (with the broadest arrest authority among federal law-enforcement agencies), housing and transporting federal prisoners, managing seized assets and operating the Witness Security Program; and that it ASSISTS state and local agencies with fugitives rather than commanding them. Supports the federal judicial-enforcement role only; not operational detail.",
  },
  {
    id: 'us-attorneys-28usc541-547',
    type: 'legislation',
    title: '28 U.S. Code §§ 541 and 547 (United States attorneys: appointment and duties)',
    publisher:
      'Legal Information Institute, Cornell Law School (reproducing the United States Code)',
    url: 'https://www.law.cornell.edu/uscode/text/28/541',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Verbatim: § 541 — 'The President shall appoint, by and with the advice and consent of the Senate, a United States attorney for each judicial district', for a four-year term, subject to removal by the President. § 547 — each U.S. attorney shall 'prosecute for all offenses against the United States' within the district. Supports that federal prosecutors are Presidentially appointed and Senate-confirmed, one per federal judicial district, prosecuting FEDERAL offences only. Does NOT support any claim about state or local prosecutors, who are separately organised.",
  },
  {
    id: 'us-fbi-28usc533',
    type: 'legislation',
    title: '28 U.S. Code § 533 (Investigative and other officials; appointment)',
    publisher:
      'Legal Information Institute, Cornell Law School (reproducing the United States Code)',
    url: 'https://www.law.cornell.edu/uscode/text/28/533',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Verbatim: the Attorney General may appoint officials '(1) to detect and prosecute crimes against the United States'. The statutory basis for federal investigative authority (the FBI is established under this and related provisions). Supports that federal investigative authority is tied to crimes AGAINST THE UNITED STATES — i.e. federal offences — and preserves the investigative authority assigned by law to other agencies. Does NOT support any claim of general federal jurisdiction over all crime, nor any operational detail.",
  },
  {
    id: 'us-bjs-csllea-2018',
    type: 'government',
    title: 'Census of State and Local Law Enforcement Agencies, 2018 — Statistical Tables',
    publisher: 'Bureau of Justice Statistics, U.S. Department of Justice',
    url: 'https://bjs.ojp.gov/library/publications/census-state-and-local-law-enforcement-agencies-2018-statistical-tables',
    publishedOn: '2018',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Reference date June 2018. Supports that 17,541 general-purpose state and local law-enforcement agencies performed law-enforcement functions in the United States, of which about 67% were local (municipal) police departments, 17% sheriffs' offices, and 15% primary state, tribal, special-jurisdiction agencies, constables and marshals, together employing about 1,214,000 full-time personnel. Supports the FRAGMENTATION of US policing across thousands of separately governed agencies. Does NOT support any per-state figure or any claim about a specific agency.",
  },
  {
    id: 'us-bjs-agency-characteristics',
    type: 'government',
    title: 'Law Enforcement — Agency Characteristics',
    publisher: 'Bureau of Justice Statistics, U.S. Department of Justice',
    url: 'https://bjs.ojp.gov/topics/law-enforcement/agency-characteristics',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Supports that 'the head of a sheriff\'s office is a sheriff who is usually an elected official', that sheriffs' offices have countywide jurisdiction, and that they are generally empowered by the state to serve counties and independent cities. Supports the elected character of the sheriff's office and its county-level jurisdiction. Does NOT support any claim that every county has a sheriff, or that sheriffs perform identical functions nationally.",
  },
  {
    id: 'us-bjs-prosecutors',
    type: 'government',
    title: 'Prosecution (National Census of State Court Prosecutors)',
    publisher: 'Bureau of Justice Statistics, U.S. Department of Justice',
    url: 'https://bjs.ojp.gov/topics/courts/prosecution',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Supports that the chief state-court prosecutor is 'also referred to as the district attorney, county attorney, commonwealth attorney, or state's attorney', represents the state in criminal cases, serves in the executive branch of state government, is 'answerable to the public as an elected or appointed public official', and is afforded broad charging discretion. Supports that local prosecution titles and selection methods VARY and are not uniformly 'district attorney'. Does NOT support a figure for how many are elected versus appointed.",
  },
  {
    id: 'us-bia-pl280',
    type: 'government',
    title: 'What is Public Law 280 and where does it apply? (Frequently Asked Questions)',
    publisher: 'Bureau of Indian Affairs, U.S. Department of the Interior',
    url: 'https://www.bia.gov/faqs/what-public-law-280-and-where-does-it-apply',
    publishedOn: '1953',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Supports: that Congress enacted Public Law 83-280 (1953) to grant certain states criminal jurisdiction over American Indians on reservations and to allow certain civil litigation to be handled by state courts; the mandatory states (Alaska with the Metlakatla exception, California, Minnesota except Red Lake, Nebraska, Oregon except Warm Springs, and Wisconsin); that the law did NOT grant states regulatory power over tribes, trust lands, tribal hunting/fishing rights, basic tribal governmental functions, or the power to tax; and that subsequent acts, court decisions and retrocessions have strengthened tribes' jurisdiction. Supports the STRUCTURE of tribal/state/federal jurisdiction and that tribal jurisdiction was not terminated. Does NOT support any claim about a specific named tribe's institutions.",
  },
  {
    id: 'us-dc-home-rule',
    type: 'government',
    title: 'D.C. Home Rule',
    publisher: 'Council of the District of Columbia (dccouncil.gov)',
    url: 'https://dccouncil.gov/dc-home-rule/',
    publishedOn: '1973',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: "Supports: that the District of Columbia Home Rule Act of 1973 established an elected mayor and council (first elected in 1974); that Congress reviews all legislation passed by the Council before it can become law and retains authority over the District's budget; and that the District is not a state and has no voting representation in Congress. Supports DC's status as a non-state jurisdiction under congressional plenary authority. Does NOT support any claim about DC's specific court, police or prosecution arrangements, which are distinctive and unresearched here.",
  },
  {
    id: 'us-bjs-prisoners-2023',
    type: 'government',
    title: 'Prisoners in 2023 — Statistical Tables',
    publisher: 'Bureau of Justice Statistics, U.S. Department of Justice',
    url: 'https://bjs.ojp.gov/library/publications/prisoners-2023-statistical-tables',
    publishedOn: '2025-09-30',
    verifiedOn: '2026-07-24',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'US',
    note: 'Reference date 31 December 2023 (yearend); published September 2025; 98th in a series begun in 1926. Supports: the US prison population under the jurisdiction of state and federal correctional authorities was 1,254,200 at yearend 2023, up 2% from 1,230,100 in 2022; persons sentenced to more than one year were 1,210,300 (96%); those under Federal Bureau of Prisons jurisdiction sentenced to more than one year were 143,300 (down 2% from 146,100). This is a PRISON count (state and federal correctional authorities); it does NOT include local jail populations, which BJS counts in a separate Jail Inmates series. It aggregates 50 separately administered state systems plus the federal system and describes none individually. Not a rate; supports no cross-jurisdiction comparison.',
  },
];

const SOURCE_INDEX = new Map(SOURCES.map((source) => [source.id, source]));

export function getSource(id: string): SourceRecord | undefined {
  return SOURCE_INDEX.get(id);
}

export function getSources(ids: readonly string[]): SourceRecord[] {
  return ids.map((id) => SOURCE_INDEX.get(id)).filter((s): s is SourceRecord => Boolean(s));
}

export const SOURCE_TYPE_LABELS: Record<SourceRecord['type'], string> = {
  legislation: 'Legislation',
  government: 'Government publication',
  'court-record': 'Court record',
  'international-organization': 'International organisation',
  academic: 'Academic',
  archive: 'Archive',
  museum: 'Museum',
  book: 'Book',
  journalism: 'Journalism',
  institutional: 'Institutional (self-description)',
  other: 'Other',
};
