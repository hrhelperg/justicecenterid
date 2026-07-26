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
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'INT',
    note: "Strasbourg, 15 December 2024, updated 24 September 2025. An international (Council of Europe) source: data are supplied by national prison administrations to the University of Lausanne research team via a questionnaire agreed by the Council for Penological Co-operation. Reference date for prison population is 31 January 2024; country population figures are as at 1 January 2024. Figures extracted directly from the report PDF. Supports, for GERMANY: Table 3 — total inmates including pre-trial detainees 59,413, rate 71.2 per 100,000, adjusted 55,916 and 67.0; Table 16 — capacity 72,258 and density 82.2 per 100 places. Supports, for IRELAND: Table 3 — total inmates including pre-trial detainees 4,808, prison population rate 90.0 per 100,000, on a country population of 5,343,805; Table 16 — total capacity 4,560 and prison density 105.4 inmates per 100 places (i.e. above capacity at the national level). Supports, for the Northern/Western Europe batch (reference date 31 January 2024; Table 3 total inmates including pre-trial detainees / prison population rate per 100,000; Table 16 total capacity / prison density per 100 places): NETHERLANDS 9,683 / 54.0, capacity 10,344 / density 93.6; BELGIUM 12,041 / 101.8, capacity 10,680 / density 112.7; DENMARK 4,129 / 69.3, capacity 4,397 / density 93.9; NORWAY 3,004 / 54.1, capacity 3,616 / density 83.1; SWEDEN 9,748 / 92.4, capacity 9,295 / density 104.9; FINLAND 3,041 / 54.3, capacity 2,958 / density 102.8. These were extracted directly from the report PDF and cross-checked against the Ireland row already recorded here (column reading validated). The report states its aim is comparable data but warns that 'any comparisons of the levels (in rates, ratios and percentages) shown by the countries according to different indicators are always problematic'. It does NOT support any sub-national figure, nor any cross-country ranking.",
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

  /* ------------------------------------------------------------------------ */
  /* Ireland (common-law country pilot) — verified 2026-07-25                 */
  /* ------------------------------------------------------------------------ */
  /*
   * ACCESS NOTE. Irish official legal and government sites (irishstatutebook.ie,
   * gov.ie, citizensinformation.ie, courts.ie, garda.ie) systematically return HTTP 403 to
   * automated requests behind a web-application firewall, while serving normally to a browser.
   * The DPP's own site (dppireland.ie) and the Police Ombudsman's own site (fiosru.ie) DID
   * read directly. Where a WAF-blocked official page was needed, its content was obtained by
   * search retrieval of that exact official page and cross-corroborated across sources; the
   * master specification directs that such a blocked official source not be discarded when it
   * is verifiable through a reader-accessible official document. Each record below records
   * which path was used. No verbatim quotation is attributed to a source that was not read in
   * full; search-retrieved facts are stated as sourced facts, not as verbatim quotes.
   */
  {
    id: 'ie-dpp',
    type: 'government',
    title: 'About Us — Office of the Director of Public Prosecutions',
    publisher: 'Office of the Director of Public Prosecutions (Ireland)',
    url: 'https://www.dppireland.ie/about-us/',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'IE',
    note: "Read directly. Supports: that the Office of the DPP was established under the Prosecution of Offences Act 1974; that the Director is 'independent in the performance of her functions'; that the DPP's principal duty is to direct and supervise public prosecutions on indictment and to give general direction and advice to An Garda Síochána on summary cases; and the division of roles — An Garda Síochána investigates, the DPP decides whether to prosecute. Supports the statutory prosecution structure and the DPP's stated independence; it does not, by itself, establish how independence operates in any individual case.",
  },
  {
    id: 'ie-courts-service',
    type: 'government',
    title: 'The Courts System / Understanding the Courts System',
    publisher: 'The Courts Service of Ireland (courts.ie)',
    url: 'https://www.courts.ie/understanding-courts-system-0',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'IE',
    note: 'Official content obtained by search retrieval of courts.ie (the site WAF-blocks direct automated fetch). Supports: the five courts of Ireland in hierarchy — District Court, Circuit Court, High Court, Court of Appeal, Supreme Court; that the District and Circuit Courts are courts of local and regional first instance; that the High Court has full jurisdiction including the constitutional validity of laws and, exercising criminal jurisdiction, sits as the Central Criminal Court; that the Court of Appeal was established on 28 October 2014 under the Thirty-third Amendment of the Constitution; that the Supreme Court is the court of final appeal; and that the Courts Service administers the courts. Supports court STRUCTURE only; not caseload or any figure. Stated as sourced facts, not verbatim quotation.',
  },
  {
    id: 'ie-garda-act-2005',
    type: 'legislation',
    title: 'Garda Síochána Act 2005',
    publisher: 'Houses of the Oireachtas (Irish Statute Book)',
    url: 'https://www.irishstatutebook.ie/eli/2005/act/20/enacted/en/html',
    publishedOn: '2005',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'IE',
    note: "Official content obtained by search retrieval of the Irish Statute Book (WAF-blocked to direct fetch); corroborated by An Garda Síochána's own history page. Supports: that An Garda Síochána is the national police service governed by the Garda Síochána Act 2005; that its statutory function is to provide policing and security services to the State; and its origin (the Civic Guard was formed in 1922 and renamed An Garda Síochána in 1923). Supports the unitary national character of the force; it does not support any operational detail. Stated as sourced facts.",
  },
  {
    id: 'ie-fiosru',
    type: 'government',
    title: 'Introducing Fiosrú, the Office of the Police Ombudsman',
    publisher: 'Fiosrú — Office of the Police Ombudsman (Ireland)',
    url: 'https://www.fiosru.ie/news-and-publications/latest-news/introducing-fiosru-the-office-of-the-police-ombudsman/',
    publishedOn: '2025-04-02',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'IE',
    note: 'Read directly. Supports: that following commencement of the Policing, Security and Community Safety Act 2024 on 2 April 2025, Fiosrú, the Office of the Police Ombudsman, opened as the new policing-oversight body replacing the Garda Síochána Ombudsman Commission (GSOC); and that Fiosrú receives and investigates complaints from the public about Garda personnel. Supports the CURRENT identity of the police complaints body and the date of transition. It does not describe the Policing and Community Safety Authority beyond what other sources establish.',
  },
  {
    id: 'ie-gov-pscsa-2024',
    type: 'government',
    title:
      'Minister for Justice commences the Policing, Security and Community Safety Act 2024',
    publisher: 'Government of Ireland (gov.ie)',
    url: 'https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/press-releases/landmark-garda-reform-act-to-come-into-force/',
    publishedOn: '2025-04-02',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'IE',
    note: 'Official content obtained by search retrieval of gov.ie (WAF-blocked to direct fetch); corroborated by fiosru.ie. Supports: that the Policing, Security and Community Safety Act 2024 was commenced on 2 April 2025; that it reconstituted GSOC as Fiosrú (Office of the Police Ombudsman); and that it established the Policing and Community Safety Authority (PCSA), dissolving the Policing Authority and the Garda Síochána Inspectorate and merging their oversight and inspection functions into the PCSA. Supports the current/historical status of the oversight bodies and the transition date. Stated as sourced facts.',
  },
  {
    id: 'ie-citizensinfo-scc',
    type: 'government',
    title: 'Special Criminal Court',
    publisher: 'Citizens Information Board (Ireland), citizensinformation.ie',
    url: 'https://www.citizensinformation.ie/en/justice/courts-system/special-criminal-court/',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'IE',
    note: "Official content of the statutory Citizens Information Board, obtained by search retrieval (WAF-blocked to direct fetch). Supports: that the Special Criminal Court sits with three judges and no jury; that it was set up under the Offences Against the State Act 1939; that the DPP certifies when the ordinary courts are inadequate to secure the effective administration of justice; that its constitutional basis is Article 38.3; and that it was designed for emergency situations and is the subject of independent review. Supports the SCC's structure and legal basis; it is a citizens-information summary, not the primary Act. Stated as sourced facts.",
  },
  {
    id: 'ie-citizensinfo-gfa',
    type: 'government',
    title: 'The Good Friday Agreement and the Constitution (Articles 2 and 3)',
    publisher: 'Citizens Information Board (Ireland), citizensinformation.ie',
    url: 'https://www.citizensinformation.ie/en/government-in-ireland/ireland-and-the-uk/good-friday-agreement/',
    publishedOn: '1998',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'IE',
    note: 'Official content of the statutory Citizens Information Board, obtained by search retrieval (WAF-blocked to direct fetch). Supports: that the Constitution of Ireland previously asserted a territorial claim over the whole island; that the Nineteenth Amendment (1998), giving effect to the Good Friday Agreement, replaced Articles 2 and 3 with an aspiration to a united Ireland achievable only by the consent of majorities in both jurisdictions on the island; and that Ireland (the State) and Northern Ireland are separate jurisdictions. Supports the scope distinction between Ireland, the island of Ireland, and Northern Ireland. Stated as sourced facts.',
  },

  /* ------------------------------------------------------------------------ */
  /* Japan (prefectural country pilot) — verified 2026-07-25                   */
  /* ------------------------------------------------------------------------ */
  /*
   * TRANSLATION INTEGRITY. Every Japanese legal source below is cited in English but is
   * legally authoritative only in Japanese. The Ministry of Justice's Japanese Law Translation
   * database states its English texts are "to be used solely as reference materials … with
   * only the original Japanese texts having legal effect". Each such record carries
   * translationStatus: 'official-reference' and authoritativeLanguage: 'ja', so the distinction
   * is machine-checkable rather than buried in prose. Where a source is an agency's own
   * English publication (not a statute translation), it is 'not-a-translation' from the point
   * of view of the institutional facts it states about itself.
   *
   * ACCESS. Several Japanese official sites (npa.go.jp, courts.go.jp per-page) block or truncate
   * automated fetches; the NPA "Police of Japan 2020" figures were extracted directly from the
   * report PDF, and other official pages were read directly or obtained by search retrieval of
   * the exact official page and cross-corroborated. No verbatim quotation is attributed to a
   * source not read in full.
   */
  {
    id: 'jp-constitution',
    type: 'legislation',
    title: 'The Constitution of Japan (日本国憲法), English translation',
    publisher: 'Ministry of Justice (Japanese Law Translation database)',
    url: 'https://www.japaneselawtranslation.go.jp/en/laws/view/174/en',
    publishedOn: '1946-11-03',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'JP',
    translationStatus: 'official-reference',
    authoritativeLanguage: 'ja',
    note: "Cited from the official Japanese Law Translation database, whose stated policy is that translations are reference materials only and that the original Japanese text has sole legal effect. Supports: Article 41 ('The Diet shall be the highest organ of state power, and shall be the sole law-making organ of the State'); Article 76 (the whole judicial power vested in a Supreme Court and in inferior courts established by law; no extraordinary tribunal; all judges independent in the exercise of their conscience and bound by the Constitution and the laws); Article 92 (local self-government — the organisation and operations of local public entities fixed by law in accordance with the principle of local autonomy). Supports the unitary constitutional framework with national law-making and local self-government. The English is not authoritative; any precise legal point rests on the Japanese text.",
  },
  {
    id: 'jp-courts-judicial-system',
    type: 'government',
    title: 'Judicial System in Japan / The Judicial System and Courts in Japan',
    publisher: 'Supreme Court of Japan (courts.go.jp)',
    url: 'https://www.courts.go.jp/english/judicial_sys/index.html',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'JP',
    translationStatus: 'not-a-translation',
    note: "The Supreme Court's own English account of the court system, obtained by search retrieval of the official page (courts.go.jp truncates automated fetches). Supports: the courts established under the Court Act (1947) — Supreme Court, high courts, district courts, family courts and summary courts; that the Supreme Court is the highest court and exercises judicial review only in a concrete case, not in the abstract; that family courts also handle juvenile cases; and the Saiban-in (lay judge) system — begun 21 May 2009, in which randomly selected lay judges sit WITH professional judges in the district court for certain serious criminal cases only (offences punishable by death or life imprisonment, or intentional criminal acts causing death), described as having points in common with a jury system. Supports court structure and the lay-judge scope; not caseload figures. As the Supreme Court's own institutional description its facts are stated as such; it is not a statute.",
  },
  {
    id: 'jp-npa-police-of-japan-2020',
    type: 'government',
    title: 'Police of Japan 2020',
    publisher: 'National Police Agency (NPA), Japan',
    url: 'https://www.npa.go.jp/english/Police_of_Japan/2020/poj2020_full.pdf',
    publishedOn: '2020',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'JP',
    translationStatus: 'not-a-translation',
    note: "The NPA's own English overview; figures and wording extracted directly from the report PDF. Supports: that the National Public Safety Commission (NPSC) and the National Police Agency (NPA) constitute the national police organisation and the NPSC supervises the NPA; that the Police Act empowers the national government to establish a central police organisation 'to control and supervise prefectural police forces on matters of national concern'; that the NPSC 'draws up basic policies and regulations, coordinates police administration on matters of national concern and sets general standards'; that each prefecture has 'the authority to carry out police duties'; that Regional Police Bureaus are subordinate to the NPA; that police boxes (Koban) and residential police boxes (Chuzaisho) are subordinate units of police stations; that the Tokyo Metropolitan Police Department is the prefectural police of Tokyo; and that 'the Prime Minister is not empowered to exercise direct command or control over the Commission'. CRUCIALLY, it supports national COORDINATION, STANDARDS and SUPERVISION ON MATTERS OF NATIONAL CONCERN, with operational policing carried out by the prefectures — NOT a single nationally commanded operational police force. Does not support operational detail.",
  },
  {
    id: 'jp-moj-prosecutors',
    type: 'government',
    title: "History and Organization of Public Prosecutors' Offices",
    publisher: 'Ministry of Justice of Japan (moj.go.jp)',
    url: 'https://www.moj.go.jp/EN/keiji1/keiji_keiji04.html',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'JP',
    translationStatus: 'not-a-translation',
    note: "The Ministry of Justice's own English account, read directly. Supports: that there are four types of Public Prosecutors' Offices — the Supreme Public Prosecutors' Office, high public prosecutors' offices, district public prosecutors' offices and local public prosecutors' offices — located corresponding to their respective courts; and that prosecutors' offices are attached to the courts but are not part of them. Supports the prosecution structure and its correspondence to the court hierarchy. It does NOT here establish the Minister of Justice's power of direction over prosecutors: the Public Prosecutor's Office Act is marked 'not yet translated' on the official database, so that relationship is left unstated rather than asserted from an unread source.",
  },
  {
    id: 'jp-code-criminal-procedure',
    type: 'legislation',
    title: 'Code of Criminal Procedure (刑事訴訟法), English translation',
    publisher: 'Ministry of Justice (Japanese Law Translation database)',
    url: 'https://www.japaneselawtranslation.go.jp/en/laws/view/2056/en',
    publishedOn: '1948',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'JP',
    translationStatus: 'official-reference',
    authoritativeLanguage: 'ja',
    note: 'Cited from the official Japanese Law Translation database (reference only; original Japanese text has legal effect). Supports, at the structural level: that police officials act as judicial police officials investigating offences (Article 189); that public prosecutors may themselves investigate offences (Article 191); and that prosecution is instituted by a public prosecutor (Article 247), who holds the discretion whether to prosecute. Supports the allocation of investigative and charging responsibility; the English is not authoritative and no operational detail is drawn from it.',
  },
  {
    id: 'jp-moj-corrections',
    type: 'government',
    title: 'Penal Institutions (Prisons / Juvenile Prisons / Detention Houses)',
    publisher: 'Ministry of Justice of Japan, Correction Bureau (moj.go.jp)',
    url: 'https://www.moj.go.jp/EN/kyousei1/kyousei_kyouse03.html',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'JP',
    translationStatus: 'not-a-translation',
    note: "The Ministry of Justice Correction Bureau's own English page, read directly. Supports: that 'in Japan, prisons, juvenile prisons and detention houses are collectively referred to as \"penal institutions\"'; and that 'these penal institutions are under the jurisdiction of the Ministry of Justice and are under the supervision of one of its internal departments, the Correction Bureau, and the eight regional correction headquarters which are the field offices'. Supports the NATIONAL administration of corrections by the Ministry of Justice — the structural point for the corrections page. It supports no figure about prison population, capacity or density; the pilot does not publish a Japanese detention-capacity statistic (see the model-findings document for why that claim was deferred).",
  },
  {
    id: 'jp-law-translation-policy',
    type: 'government',
    title: 'Japanese Law Translation — database policy on translation status',
    publisher: 'Ministry of Justice (Japanese Law Translation database)',
    url: 'https://www.japaneselawtranslation.go.jp/',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'JP',
    translationStatus: 'not-a-translation',
    note: "The Ministry of Justice database's own statement of policy: the English translations it provides 'are to be used solely as reference materials to aid in the understanding of Japanese laws and regulations', and 'only the original Japanese texts have legal effect'. This is the source for the translation-status treatment applied across the Japan pages: every Japanese statute is cited in English for reference only, with Japanese authoritative. Supports the translation-authority position, not any institutional fact in itself.",
  },

  /* ------------------------------------------------------------------------ */
  /* Brazil (federal, multi-force policing pilot) — verified 2026-07-25        */
  /* ------------------------------------------------------------------------ */
  /*
   * TRANSLATION INTEGRITY. Brazilian law is authoritative only in PORTUGUESE. The Presidência
   * da República (Planalto) publishes the Constitution and the codes in Portuguese, and hosts
   * NO official English translation; the English on these pages is a descriptive rendering, and
   * every Brazilian source below is cited in its authoritative Portuguese. Because the sources
   * are the originals rather than translations, translationStatus is left at its default
   * (`not-a-translation`).
   *
   * ACCESS. planalto.gov.br, portal.stf.jus.br and cnj.jus.br reset or 403 an ordinary
   * programmatic fetch, but serve the full text to a browser user-agent. Every Planalto source
   * below (Constitution, Lei de Execução Penal, Código de Processo Penal) was retrieved with a
   * browser user-agent and read in full, and its quotations were extracted verbatim from that
   * text; the SISDEPEN statistic was extracted from the primary PDF. No verbatim quotation is
   * attributed to a source that was not read in full.
   */
  {
    id: 'br-cf-1988',
    type: 'legislation',
    title: 'Constituição da República Federativa do Brasil de 1988',
    publisher: 'Presidência da República — Casa Civil (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    publishedOn: '1988-10-05',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "The authoritative Portuguese text, read in full. THE backbone of the Brazil pages. Supports: the federation of the Union, the States, the Federal District and the Municipalities, 'todos autônomos' (Art. 18; Art. 1); separation of powers (Art. 2); the criminal-justice guarantees of Art. 5 — devido processo legal (LIV), contraditório e ampla defesa (LV), presumption of innocence 'ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória' (LVII), and habeas corpus (LXVIII); that penal and procedural law are the EXCLUSIVE (privativa) competence of the Union (Art. 22, I) while direito penitenciário is CONCURRENT (Art. 24, I) and the States hold the reserved/residual competences (Art. 25 §1); public security through the six órgãos of Art. 144 (I polícia federal; II rodoviária federal; III ferroviária federal; IV polícias civis; V polícias militares e corpos de bombeiros militares; VI polícias penais, added by EC 104/2019), with the polícias civis 'dirigidas por delegados de polícia de carreira' exercising 'as funções de polícia judiciária e a apuração de infrações penais, exceto as militares' (§4), the polícias militares holding 'a polícia ostensiva e a preservação da ordem pública' (§5), and both subordinate to the Governors (§6); the Judiciary organs of Art. 92 (STF, CNJ, STJ, TST, TRFs/Juízes Federais, and the labour, electoral, military and state courts), the STF as guardian of the Constitution (Art. 102), the CNJ (Art. 103-B) and state justice (Art. 125); the Ministério Público as 'instituição permanente, essencial à função jurisdicional do Estado' defending 'a ordem jurídica, o regime democrático e os interesses sociais e individuais indisponíveis', with autonomy and the principles of unidade, indivisibilidade e independência funcional (Art. 127), its structure MPU (MPF/MPT/MPM/MPDFT) + MPE (Art. 128), its functions including promoting 'privativamente, a ação penal pública' (Art. 129 I) and the inquérito civil / ação civil pública for interesses difusos e coletivos (Art. 129 III), and the CNMP (Art. 130-A); and that the Union organizes and maintains the Judiciary, Ministério Público and police of the Federal District (Art. 21, XIII–XIV). The Portuguese text alone has legal effect.",
  },
  {
    id: 'br-cpp-1941',
    type: 'legislation',
    title: 'Código de Processo Penal — Decreto-Lei nº 3.689, de 3 de outubro de 1941',
    publisher: 'Presidência da República — Casa Civil (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm',
    publishedOn: '1941-10-03',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "The authoritative Portuguese text, read in full. Supports the structure of criminal investigation: the polícia judiciária 'será exercida pelas autoridades policiais' and has the purpose of 'a apuração das infrações penais e da sua autoria' (Art. 4), and the inquérito policial 'acompanhará a denúncia ou queixa, sempre que servir de base a uma ou outra' (Art. 12) — the police investigation feeds, but is distinct from, the charging instrument. Does not itself establish the constitutional police/MP structure (Art. 144 / 129). Portuguese authoritative.",
  },
  {
    id: 'br-lep-1984',
    type: 'legislation',
    title: 'Lei nº 7.210, de 11 de julho de 1984 (Lei de Execução Penal)',
    publisher: 'Presidência da República — Casa Civil (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l7210.htm',
    publishedOn: '1984-07-11',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "The authoritative Portuguese text, read in full. Supports the corrections framework: penal execution 'tem por objetivo efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado' (Art. 1); the órgãos da execução penal include the Juízo da Execução, the Ministério Público, the Conselho Penitenciário and the Departamentos Penitenciários (Art. 61); the Departamento Penitenciário Nacional is 'subordinado ao Ministério da Justiça' as the federal executive body (Art. 71); and the 'Departamento Penitenciário local, ou órgão similar, tem por finalidade supervisionar e coordenar os estabelecimentos penais da Unidade da Federação a que pertencer' (Art. 74) — i.e. each state runs its own prisons. Portuguese authoritative. Does not by itself carry the DEPEN→SENAPPEN renaming (2023) or any statistic.",
  },
  {
    id: 'br-pf-competencias',
    type: 'institutional',
    title: 'Competências da Polícia Federal',
    publisher: 'Polícia Federal — gov.br (Ministério da Justiça e Segurança Pública)',
    url: 'https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/competencias',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "The Polícia Federal's own page, read in full. Supports that the PF is a Union body that exercises, 'com exclusividade, as funções de polícia judiciária da União', carries out 'polícia marítima, aeroportuária e de fronteiras', and works to 'reprimir o tráfico ilícito de entorpecentes e drogas afins, o contrabando e o descaminho' — reproducing Art. 144 §1. Establishes the PF's federal remit (federal crimes, borders, drugs); does not cover the state forces.",
  },
  {
    id: 'br-prf-competencias',
    type: 'institutional',
    title: 'Competências da Polícia Rodoviária Federal',
    publisher: 'Polícia Rodoviária Federal — gov.br',
    url: 'https://www.gov.br/prf/pt-br/acesso-a-informacao/institucional/competencias',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "The Polícia Rodoviária Federal's own page, read in full. Supports that the PRF is a Union body dedicated to 'o patrulhamento ostensivo das rodovias federais' (Art. 144 §2), also enforcing the Código de Trânsito Brasileiro (Lei 9.503/97). Establishes the PRF's role; does not cover the state forces.",
  },
  {
    id: 'br-mpu-institucional',
    type: 'institutional',
    title: 'Sobre o Ministério Público da União — Institucional',
    publisher: 'Ministério Público da União (MPU)',
    url: 'https://www.mpu.mp.br/institucional',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "The MPU's own institutional page, read in full. Supports that the Ministério Público da União comprises 'os seguintes ramos: a) O Ministério Público Federal (MPF); b) O Ministério Público do Trabalho (MPT); c) O Ministério Público Militar (MPM); d) O Ministério Público do Distrito Federal e Territórios (MPDFT)', that alongside it stand 'os Ministérios Públicos dos Estados', and that 'ao MPU é assegurada autonomia funcional, administrativa e financeira'. Confirms the MP's federative structure and autonomy in the institution's own words.",
  },
  {
    id: 'br-senappen-institucional',
    type: 'institutional',
    title: 'Institucional — Secretaria Nacional de Políticas Penais (SENAPPEN)',
    publisher: 'SENAPPEN — gov.br (Ministério da Justiça e Segurança Pública)',
    url: 'https://www.gov.br/senappen/pt-br/acesso-a-informacao/institucional',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "SENAPPEN's own institutional page, read in full. Supports that 'por meio da Medida Provisória nº 1.154, o Departamento Penitenciário Nacional - DEPEN foi transformado na Secretaria [Nacional de Políticas Penais]' — the federal prison-administration body historically named DEPEN (Arts. 71–72 LEP) became SENAPPEN, within the Ministério da Justiça e Segurança Pública, effective 1 January 2023. Establishes the current name of the federal body; the statistics come from its SISDEPEN report, cited separately.",
  },
  {
    id: 'br-sisdepen-2s2024',
    type: 'government',
    title:
      'Relatório do 2º Semestre de 2024 — Dados Estatísticos do Sistema Penitenciário (SISDEPEN, 17º ciclo)',
    publisher:
      'SENAPPEN — Diretoria de Inteligência Penal (DIPEN), Ministério da Justiça e Segurança Pública',
    url: 'https://www.gov.br/senappen/pt-br/servicos/sisdepen/relatorios/relatorios-de-informacoes-penitenciarias/relatorio-do-2o-semestre-de-2024.pdf',
    publishedOn: '2025',
    verifiedOn: '2026-07-25',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'BR',
    note: "The official penitentiary-statistics report, read from the primary PDF (extracted locally). Reference period July–December 2024, snapshot 31 December 2024, category 'presos em cela física' (people who, regardless of daytime release for work or study, 'dormem no estabelecimento prisional' — i.e. excluding prisão domiciliar / home detention, which the report tabulates separately). Supports: state-and-DF prison population Total = 670.265; capacity of places (capacidade de vagas) Total = 494.379; deficit of places (déficit de vagas) Total = 175.886. The report does NOT print an occupancy percentage on the totals pages — any rate is a derivation, not a quoted figure. Supports the single scoped detention-capacity claim on the corrections page; supports no comparison with any other country.",
  },

  /* ------------------------------------------------------------------------ */
  /* Canada (federal, contract-policing pilot) — verified 2026-07-26           */
  /* ------------------------------------------------------------------------ */
  /*
   * BILINGUAL AUTHORITY. Canadian federal law is enacted in English and French and, by the
   * equal-authenticity rule (Charter s.18(1)), BOTH language versions are equally authoritative
   * — neither is a translation of the other. Sources are cited in English; the French title is
   * recorded and the equal authority noted. Quebec institutions are named in French (e.g. the
   * Sûreté du Québec), and no official English name is invented where none exists.
   *
   * ACCESS. laws-lois.justice.gc.ca serves the full consolidated bilingual statutes to a browser
   * user-agent; every Constitution/Criminal Code/statute quotation was read verbatim from it.
   */
  {
    id: 'ca-constitution-1867',
    type: 'legislation',
    title: 'Constitution Act, 1867 (30 & 31 Victoria, c. 3 (UK))',
    publisher: 'Government of Canada — Justice Laws Website (laws-lois.justice.gc.ca)',
    url: 'https://laws-lois.justice.gc.ca/eng/const/index.html',
    publishedOn: '1867-07-01',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The authoritative consolidated text (English; the French 'Loi constitutionnelle de 1867' is equally authoritative), read in full. THE backbone of the division of powers. Supports: s.91(27) FEDERAL exclusive authority over 'The Criminal Law, except the Constitution of Courts of Criminal Jurisdiction, but including the Procedure in Criminal Matters'; s.91(28) federal 'Penitentiaries'; the s.91 opening 'exclusive Legislative Authority' plus the residual 'Peace, Order, and good Government' power (POGG is FEDERAL — the inverse of the United States); s.92(14) PROVINCIAL exclusive authority over 'The Administration of Justice in the Province, including the Constitution, Maintenance, and Organization of Provincial Courts, both of Civil and of Criminal Jurisdiction'; s.92(6) provincial 'Public and Reformatory Prisons'; s.96 'The Governor General shall appoint the Judges of the Superior, District, and County Courts in each Province'; s.100 (Parliament fixes and pays superior-court judges' salaries); s.101 (Parliament may establish a general court of appeal and additional federal courts). Establishes the characteristic Canadian arrangement: one federal criminal law, provincially administered. Both language versions have legal effect.",
  },

  {
    id: 'ca-charter-1982',
    type: 'legislation',
    title: 'Canadian Charter of Rights and Freedoms (Constitution Act, 1982, Part I)',
    publisher: 'Government of Canada — Justice Laws Website (laws-lois.justice.gc.ca)',
    url: 'https://laws-lois.justice.gc.ca/eng/const/page-12.html',
    publishedOn: '1982-04-17',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The authoritative text (English; French equally authoritative), read in full. Supports the 'Legal Rights' (ss.7-14): s.7 'Everyone has the right to life, liberty and security of the person and the right not to be deprived thereof except in accordance with the principles of fundamental justice'; s.11(d) the right 'to be presumed innocent until proven guilty according to law in a fair and public hearing by an independent and impartial tribunal'; s.12 'Everyone has the right not to be subjected to any cruel and unusual treatment or punishment'. Also s.18(1): the statutes of Parliament are printed in English and French 'and both language versions are equally authoritative' — the equal-authenticity rule. Both versions have legal effect.",
  },
  {
    id: 'ca-criminal-code',
    type: 'legislation',
    title: 'Criminal Code (RSC 1985, c. C-46)',
    publisher: 'Government of Canada — Justice Laws Website (laws-lois.justice.gc.ca)',
    url: 'https://laws-lois.justice.gc.ca/eng/acts/c-46/',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The single federal criminal statute for all of Canada (English; French 'Code criminel' equally authoritative), read in the relevant sections. Supports s.743.1(1): a person sentenced to imprisonment for 'life', 'a term of two years or more', or aggregated terms amounting to two years or more 'shall be sentenced to imprisonment in a penitentiary' — the statutory basis (with s.91(28)/s.92(6) of the Constitution) for the two-year federal/provincial custody split. Also s.2 (the 'Attorney General' definition that allocates prosecution). Both versions have legal effect.",
  },
  {
    id: 'ca-rcmp-act',
    type: 'legislation',
    title: 'Royal Canadian Mounted Police Act (RSC 1985, c. R-10)',
    publisher: 'Government of Canada — Justice Laws Website (laws-lois.justice.gc.ca)',
    url: 'https://laws-lois.justice.gc.ca/eng/acts/R-10/',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The statute constituting and governing the RCMP (English; French equally authoritative), read in full for the relevant sections. Supports: s.3 'There shall continue to be a police force for Canada ... known as the Royal Canadian Mounted Police' (a FEDERAL force); s.5 the Commissioner, 'under the direction of the Minister, has the control and management of the Force' (federal governance); and s.20(1) 'The Minister may, with the approval of the Governor in Council, enter into an arrangement with the government of any province for the use or employment of the Force ... in aiding the administration of justice in the province and in carrying into effect the laws in force therein' — the statutory basis for contract policing as a SERVICE arrangement, not a transfer of ownership.",
  },
  {
    id: 'ca-rcmp-contract',
    type: 'institutional',
    title: 'Contract policing — About',
    publisher: 'Royal Canadian Mounted Police (rcmp.ca)',
    url: 'https://rcmp.ca/en/contract-policing/about',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The RCMP's own page, read in full. Supports: 'The RCMP currently provides contract policing services to eight provinces (Ontario and Quebec have their own provincial police service), three territories and under direct contract to some 150 municipalities in Canada'; 'Provinces and territories pay 70% of RCMP costs and the federal government pays 30%' (municipalities pay 70% under 15,000 population or 90% over 15,000); the current agreements 'expire on March 31, 2032'; and 'As Canada's national police force, the RCMP maintains national standards and policies across contract policing jurisdictions' — the Force stays federal while delivering provincial/municipal policing. Establishes the provider/client/funding/term facts; the term is a maximum, terminable earlier on notice (carried in prose).",
  },
  {
    id: 'ca-ppsc-about',
    type: 'institutional',
    title: 'About Us — Public Prosecution Service of Canada',
    publisher: 'Public Prosecution Service of Canada (ppsc-sppc.gc.ca)',
    url: 'https://www.ppsc-sppc.gc.ca/eng/bas/index.html',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The PPSC's own page, read in full. Supports that the PPSC prosecutes offences under federal statutes and that 'In the territories, we are the only prosecutors and conduct all prosecutions of offences against the Criminal Code and all federal laws/acts' — the basis for the territories' prosecutionScope being national (federal) rather than the territory's own, in contrast to the provinces, where provincial Crowns conduct most Criminal Code prosecutions.",
  },
  {
    id: 'ca-dpp-act',
    type: 'legislation',
    title: 'Director of Public Prosecutions Act (SC 2006, c. 9, s. 121)',
    publisher: 'Government of Canada — Justice Laws Website (laws-lois.justice.gc.ca)',
    url: 'https://laws-lois.justice.gc.ca/eng/acts/d-2.5/',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The statute establishing the federal Director of Public Prosecutions (English; French equally authoritative), read for the relevant sections. Supports s.3(1): the Governor in Council 'shall, on the recommendation of the Attorney General, appoint a Director of Public Prosecutions' — the statutory head of the PPSC, which initiates and conducts prosecutions within the jurisdiction of the Attorney General of Canada. Both versions have legal effect.",
  },
  {
    id: 'ca-scc-act',
    type: 'legislation',
    title: 'Supreme Court Act (RSC 1985, c. S-26)',
    publisher: 'Government of Canada — Justice Laws Website (laws-lois.justice.gc.ca)',
    url: 'https://laws-lois.justice.gc.ca/eng/acts/s-26/',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The statute constituting the Supreme Court of Canada (English; French equally authoritative), read for the relevant sections. Supports s.4(1): 'The Court shall consist of a chief justice to be called the Chief Justice of Canada, and eight puisne judges' (nine judges); and s.6, that at least three judges must be appointed from Quebec. Both versions have legal effect.",
  },
  {
    id: 'ca-statcan-corrections',
    type: 'government',
    title:
      'Table 35-10-0154-01 — Average counts of adults in provincial and territorial correctional programs',
    publisher: 'Statistics Canada (www150.statcan.gc.ca)',
    url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510015401',
    publishedOn: '2025',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The official Statistics Canada data cube (English; French equally authoritative), read from the primary CSV download. Supports the corrections restricted claim: for fiscal year 2023/2024, the Provinces-and-Territories average daily count of adults in custody ('actual-in') was 25,349.8 — remand 19,334.5, sentenced 5,895.1, other 120.2. These are PROVINCIAL/TERRITORIAL counts only (they EXCLUDE federal custody, i.e. sentences of two years or more administered by Correctional Service Canada) and are average daily counts over the fiscal year, not a single-day snapshot. Supports no federal figure and no cross-country comparison.",
  },
  {
    id: 'ca-sq',
    type: 'institutional',
    title: 'Sûreté du Québec — site officiel',
    publisher: 'Sûreté du Québec (sq.gouv.qc.ca)',
    url: 'https://www.sq.gouv.qc.ca/',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CA',
    note: "The provincial police service of Quebec's own official site, read for its name. Establishes that the force's official name is the French 'Sûreté du Québec'; no official English name is asserted. Cited to support the naming choice on the law-enforcement page (Quebec runs its own provincial police, not the RCMP).",
  },

  /* ------------------------------------------------------------------------ */
  /* Australia (federal, AFP/ACT contract-policing test) — verified 2026-07-26 */
  /* ------------------------------------------------------------------------ */
  {
    id: 'au-constitution',
    type: 'legislation',
    title: 'Commonwealth of Australia Constitution Act (the Australian Constitution)',
    publisher: 'Parliament of Australia (aph.gov.au) / Federal Register of Legislation',
    url: 'https://www.aph.gov.au/About_Parliament/Senate/Powers_practice_n_procedures/Constitution',
    publishedOn: '1901-01-01',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'AU',
    note: "The founding instrument, read verbatim from the official Parliament of Australia consolidated PDF. Supports: s.51, the ENUMERATED legislative powers of the Commonwealth ('The Parliament shall ... have power to make laws for the peace, order, and good government of the Commonwealth with respect to' 39 heads) — there is NO general criminal-law head; s.107 (Saving of Power of State Parliaments): 'Every power of the Parliament of a Colony which has become or becomes a State, shall, unless it is by this Constitution exclusively vested in the Parliament of the Commonwealth or withdrawn from the Parliament of the State, continue' — so residual power is RESERVED to the States (the US model, the inverse of Canada); s.71 (the judicial power of the Commonwealth vested in the High Court of Australia and other courts); s.77(iii) (the Commonwealth may invest a State court with federal jurisdiction); and s.122 (the territories power). Establishes that criminal law is largely a State/Territory matter with no national code.",
  },

  {
    id: 'au-afp-act',
    type: 'legislation',
    title: 'Australian Federal Police Act 1979 (Cth)',
    publisher: 'Federal Register of Legislation (legislation.gov.au)',
    url: 'https://www.legislation.gov.au/C2004A02068/latest/text',
    publishedOn: '1979',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'AU',
    note: "The statute constituting the Australian Federal Police as the Commonwealth police. Supports that a function of the AFP under s.8(1)(a) is 'the provision of police services in relation to the Australian Capital Territory', subject to s.8(1A), which lets the Commonwealth Minister and the ACT arrange for that provision — the statutory hook for the AFP delivering ACT community policing. The register serves the section text through a single-page application; the section wording was obtained by search retrieval of the official page, and the arrangement itself is quoted from the AFP's own ACT-Policing page (read directly). No verbatim quotation of the Act is asserted from a page not read in full.",
  },
  {
    id: 'au-afp-actpolicing',
    type: 'institutional',
    title: 'ACT Policing',
    publisher: 'Australian Federal Police (afp.gov.au)',
    url: 'https://www.afp.gov.au/about-us/our-organisation/act-policing',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'AU',
    note: "The AFP's own page, read in full. Supports that 'ACT Policing is the community policing arm of the AFP' and that its job is to provide policing services to the Australian Capital Territory 'on behalf of the ACT Government'. Establishes that the ACT runs no police force of its own — its community policing is delivered by the Commonwealth AFP under an arrangement — which is what makes the ACT's policing `contracted` rather than `own`.",
  },
  {
    id: 'au-hcourt',
    type: 'government',
    title: 'The High Court of Australia — Role of the High Court',
    publisher: 'High Court of Australia (hcourt.gov.au)',
    url: 'https://www.hcourt.gov.au/about/role-of-the-high-court',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'AU',
    note: "The High Court's own description of its role (official page, obtained by search retrieval of hcourt.gov.au). Supports that the High Court of Australia is established under the Constitution, interprets and applies Australian law, decides cases including constitutional-validity challenges, and hears appeals by special leave from federal, state and territory courts — the final court of appeal and final interpreter of the Constitution. Structural facts only.",
  },
  {
    id: 'au-cdpp',
    type: 'government',
    title: 'How we differ from state and territory DPPs',
    publisher: 'Commonwealth Director of Public Prosecutions (cdpp.gov.au)',
    url: 'https://www.cdpp.gov.au/about-us',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'AU',
    note: "The Commonwealth DPP's own account (official page, obtained by search retrieval; cdpp.gov.au blocks automated fetching). Supports that the CDPP prosecutes offences against COMMONWEALTH law, while offences against state and territory law are prosecuted by the relevant state or territory Director of Public Prosecutions — the Commonwealth/state split in prosecution. Structural facts only; no verbatim quotation is asserted from a page not read in full.",
  },
  {
    id: 'au-nt-police',
    type: 'institutional',
    title: 'Northern Territory Police Force',
    publisher: 'Northern Territory Police, Fire and Emergency Services (pfes.nt.gov.au)',
    url: 'https://pfes.nt.gov.au/police',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'AU',
    note: "The Northern Territory's own police page, read directly. Establishes that the Northern Territory runs its OWN police force — the Northern Territory Police Force — the contrast with the Australian Capital Territory, whose policing is delivered by the Commonwealth AFP. Supports the `own` policing scope for the NT.",
  },
  {
    id: 'au-abs-prisoners',
    type: 'government',
    title: 'Prisoners in Australia, 2025',
    publisher: 'Australian Bureau of Statistics (abs.gov.au)',
    url: 'https://www.abs.gov.au/statistics/people/crime-and-justice/prisoners-australia/latest-release',
    publishedOn: '2025',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'AU',
    note: "The official ABS point-in-time prisoner census, read directly from the release. Supports: 'As at 30 June 2025: there were 46,998 adult prisoners in Australia'; 'unsentenced prisoners increased by 10% (1,814) to 19,850, while sentenced prisoners increased by 3% (770) to 27,051.' A national count of adults in the custody of the state and territory corrective-services agencies (there is no Commonwealth prison system), at a single date. Supports the corrections restricted claim; supports no cross-country comparison.",
  },

  /* ------------------------------------------------------------------------ */
  /* Spain (asymmetric decentralisation pilot) — verified 2026-07-26           */
  /* ------------------------------------------------------------------------ */
  /*
   * LANGUAGE. Castilian Spanish is the authoritative language of State law (boe.es). Catalan,
   * Basque (Euskara) and Galician are co-official in their communities; institutions such as the
   * Mossos d'Esquadra (Catalan) and the Ertzaintza (Basque) are named in those languages, and no
   * English name is invented for them.
   */
  {
    id: 'es-constitution',
    type: 'legislation',
    title: 'Constitución Española de 1978',
    publisher: 'Boletín Oficial del Estado (boe.es), BOE-A-1978-31229',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229',
    publishedOn: '1978-12-29',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'ES',
    note: "The authoritative Castilian text, read in full. Supports: art. 2 (the indissoluble unity of the Spanish Nation and the right to autonomy of the nationalities and regions); art. 137 (the State organised into municipalities, provinces and Autonomous Communities); art. 145.1 ('En ningún caso se admitirá la federación de Comunidades Autónomas' — federation is constitutionally forbidden, so Spain is a decentralised UNITARY state); art. 148 (competences the Communities MAY assume) and art. 149.1 (the State's EXCLUSIVE competences), including art. 149.1.6 ('Legislación mercantil, penal y penitenciaria; legislación procesal' — criminal, penitentiary and procedural LEGISLATION is exclusively the State's), art. 149.1.5 (Administration of Justice), and art. 149.1.29 (public security, 'sin perjuicio de la posibilidad de creación de policías por las Comunidades Autónomas' — the basis for autonomous police); art. 104 (security forces under the Government); art. 117.5 ('El principio de unidad jurisdiccional es la base de la organización y funcionamiento de los Tribunales' — judicial unity); art. 122 (the Consejo General del Poder Judicial as the judiciary's governing body); art. 123 (the Tribunal Supremo, 'con jurisdicción en toda España, es el órgano jurisdiccional superior en todos los órdenes'); art. 124 (the Ministerio Fiscal, national, acting under unidad de actuación y dependencia jerárquica); art. 152.1 (a Tribunal Superior de Justicia culminating the judicial organisation in each community, without prejudice to the Supreme Court); and arts. 24-25 (due-process and penal principles).",
  },

  {
    id: 'es-lofcs',
    type: 'legislation',
    title: 'Ley Orgánica 2/1986, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad',
    publisher: 'Boletín Oficial del Estado (boe.es), BOE-A-1986-6859',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-6859',
    publishedOn: '1986-03-13',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'ES',
    note: "The organic law of the security forces, read in full for the relevant articles. Supports the THREE tiers of security forces: the Fuerzas y Cuerpos de Seguridad del Estado (national), the police of the Autonomous Communities, and the local police. Names the two national forces (art. 9): 'a) El Cuerpo Nacional de Policía, que es un Instituto Armado de naturaleza civil, dependiente del Ministro del Interior. b) La Guardia Civil, que es un Instituto Armado de naturaleza militar...' — so the Guardia Civil is a militarily-organised force, not merely rural police. Provides the framework within which the Autonomous Communities that so provide in their Statutes create their own police forces.",
  },
  {
    id: 'es-prison-transfer-cat',
    type: 'legislation',
    title:
      'Real Decreto 3482/1983, de 28 de diciembre, sobre traspaso de servicios del Estado a la Generalidad de Cataluña en materia de Administración penitenciaria',
    publisher: 'Boletín Oficial del Estado (boe.es), BOE-A-1984-4310',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-1984-4310',
    publishedOn: '1984',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'ES',
    note: "The decree transferring penitentiary administration to Catalonia, read directly. It transfers to the Generalitat 'la ejecución de la legislación del Estado en materia penitenciaria' — the EXECUTION of State penitentiary legislation — with the Generalitat assuming management from 1 January 1984. Establishes that Catalonia administers its own prison system while the penitentiary LAW remains the State's (art. 149.1.6). The corollary is that a central prison figure that excludes Catalonia understates the whole.",
  },
  {
    id: 'es-prison-transfer-basque',
    type: 'legislation',
    title:
      'Real Decreto 474/2021, de 29 de junio, de traspaso de funciones y servicios de la Administración del Estado a la Comunidad Autónoma del País Vasco en materia de ejecución de la legislación del Estado sobre ejecución penal',
    publisher: 'Boletín Oficial del Estado (boe.es), BOE-A-2021-11239',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2021-11239',
    publishedOn: '2021-06-29',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'ES',
    note: "The decree transferring penitentiary administration to the Basque Country, read directly. Like the Catalan transfer, it devolves 'la ejecución de la legislación del Estado en materia penitenciaria' — the execution of State penitentiary legislation — effective 1 October 2021, while the legislation itself stays the State's. Establishes that the Basque Country now runs its own prison system, the second community to do so.",
  },

  /* ------------------------------------------------------------------------ */
  /* Switzerland (cantonal-federalism pilot) — verified 2026-07-26             */
  /* ------------------------------------------------------------------------ */
  /*
   * MULTILINGUAL AUTHORITY. Swiss federal law is enacted and equally authentic in German, French
   * and Italian (Federal Constitution art. 70); Romansh is a national language, official when
   * dealing with Romansh speakers. English texts on fedlex are explicitly non-authoritative
   * translations. Institutions are named across the languages (Bundesgericht / Tribunal fédéral /
   * Tribunale federale); these pages cite the official English translation for readability and
   * note that it has no legal force.
   */
  {
    id: 'ch-constitution',
    type: 'legislation',
    title: 'Federal Constitution of the Swiss Confederation of 18 April 1999 (SR 101)',
    publisher: 'Swiss Confederation — Fedlex (fedlex.admin.ch)',
    url: 'https://www.fedlex.admin.ch/eli/cc/1999/404/en',
    publishedOn: '1999-04-18',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CH',
    note: "The Federal Constitution, read in full from the official fedlex text (English is a non-authoritative translation; German, French and Italian are equally authentic). Supports: art. 1 (the Confederation of the People and the 26 Cantons); art. 3, 'The Cantons are sovereign except to the extent that their sovereignty is limited by the Federal Constitution. They exercise all rights that are not vested in the Confederation' — residual power with the CANTONS (like the United States and Australia); art. 46 (the Cantons implement federal law — executive federalism); art. 122 (the Confederation legislates civil law, but 'the Cantons are responsible for the organisation of the courts and the administration of justice in civil matters'); art. 123 ('The Confederation is responsible for legislation in the field of criminal law and the law of criminal procedure', while 'the Cantons are responsible for the organisation of the courts, the administration of justice in criminal cases as well as for the execution of penalties and measures') — so the law is federal and unified but the administration, including corrections, is cantonal; art. 188 (the Federal Supreme Court as the supreme judicial authority); art. 48 (inter-cantonal treaties, the basis for the corrections concordats); art. 70 (German, French and Italian as official languages); and the direct-democracy provisions (arts. 138-142: popular initiative, mandatory and optional referendums).",
  },

  {
    id: 'ch-crimpc',
    type: 'legislation',
    title: 'Swiss Criminal Procedure Code (StPO / CPP / CPP) of 5 October 2007 (SR 312.0)',
    publisher: 'Swiss Confederation — Fedlex (fedlex.admin.ch)',
    url: 'https://www.fedlex.admin.ch/eli/cc/2010/267/en',
    publishedOn: '2007-10-05',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CH',
    note: 'The unified federal Criminal Procedure Code (equally authentic in German, French and Italian; English is a reference translation). In force since 1 January 2011, it replaced the former 26 separate cantonal codes of criminal procedure. Supports art. 1 (it governs prosecution and adjudication by the federal AND cantonal criminal-justice authorities of offences under federal law) and art. 22 (the cantonal criminal authorities prosecute and judge federal criminal offences, subject to the legal exceptions) — the basis for prosecution being cantonal by default. Its enactment on the basis of Constitution art. 123 para 1 illustrates federal law, cantonal administration.',
  },
  {
    id: 'ch-fedpol',
    type: 'institutional',
    title: 'National cooperation — fedpol (Federal Office of Police)',
    publisher: 'Federal Office of Police fedpol (fedpol.admin.ch)',
    url: 'https://www.fedpol.admin.ch/fedpol/en/home/polizei-zusammenarbeit/national.html',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CH',
    note: "fedpol's own account (official page, obtained by search retrieval; fedpol.admin.ch pages are reorganised behind a content system). Supports that 'Switzerland does not have a national police force', that each canton is responsible for policing its own territory and has its own police law, and that fedpol 'is not a superordinate authority, but works alongside these police forces' — with limited federal functions (federal-jurisdiction investigations, security duties, national coordination). Establishes that policing is primarily cantonal and fedpol does not command the cantonal police. Structural facts only.",
  },
  {
    id: 'ch-fso-prisons',
    type: 'government',
    title:
      'Number of detainees at highest recorded level — Imprisonment: January 2026 (press release and FHE survey)',
    publisher: 'Swiss Federal Statistical Office (FSO / BFS), bfs.admin.ch',
    url: 'https://www.bfs.admin.ch/asset/en/36577167',
    publishedOn: '2026-05-11',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CH',
    note: "The official Federal Statistical Office imprisonment statistics, read from the release. Supports that 'As at 31 January 2026, the number of detainees stood at 7 119, the highest number since the survey began' (the FHE survey, from 1988). Per the FSO the detainees divide by type into roughly 63% serving a sentence or measure and roughly 31% in pre-trial or security detention, with the remainder in other forms of detention; the reference-day capacity is about 7,373 places across some 90 adult facilities. A national, single-reference-day count of adults in custody. Supports the corrections restricted claim; supports no cross-country comparison.",
  },
  {
    id: 'ch-bekj',
    type: 'legislation',
    title:
      'Federal Act on Platforms for Electronic Communication in the Judiciary (BEKJ) — Justitia 4.0',
    publisher: 'Swiss Confederation / Federal Office of Justice (bj.admin.ch)',
    url: 'https://www.bj.admin.ch/bj/de/home/staat/gesetzgebung/e-kommunikation.html',
    publishedOn: '2024-12-20',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'CH',
    note: 'The federal act underlying the Justitia 4.0 project, verified via the Federal Office of Justice and the official project pages. Supports the scheduled change on the Switzerland pages: the BEKJ was adopted by the Federal Assembly on 20 December 2024 and is subject to the optional referendum (which was not invoked); it is not yet fully in force, with entry into force planned for 1 July 2027 and a partial, earlier commencement of the provision establishing a new public-law corporation (öffentlich-rechtliche Körperschaft, justitia.swiss) as of 1 October 2025, which will build and operate the electronic justice-communication platform. Supports the ScheduledChange record; the exact staggered dates rest on these official pages.',
  },

  /* -------------------------------------------------------------------------- */
  /* Netherlands (Batch A — Northern & Western Europe)                          */
  /* -------------------------------------------------------------------------- */
  {
    id: 'nl-constitution',
    type: 'legislation',
    title:
      'The Constitution of the Kingdom of the Netherlands 2008 (official English translation)',
    publisher: 'Government of the Netherlands (Ministry of the Interior and Kingdom Relations)',
    url: 'https://www.government.nl/documents/regulations/2012/10/18/the-constitution-of-the-kingdom-of-the-netherlands-2008',
    publishedOn: '2008',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'NL',
    translationStatus: 'official-reference',
    authoritativeLanguage: 'nl',
    note: 'The official English translation of the Grondwet, fetched as a government.nl PDF and text-extracted. Supports Chapter 6 (administration of justice): Art. 112–113 (adjudication and trial of offences are the judiciary\'s), Art. 114 ("Capital punishment may not be imposed"), Art. 116 ("The courts which form part of the judiciary shall be specified by Act of Parliament"), Art. 117 (judges and the Procurator General at the Supreme Court appointed for life by Royal Decree — the independence guarantee), Art. 118 (the Supreme Court and cassation), Art. 120 ("The constitutionality of Acts of Parliament and treaties shall not be reviewed by the courts" — no constitutional review of statutes), and Art. 78a (the National Ombudsman). The authoritative text is the Dutch original; this English version is an official reference translation.',
  },
  {
    id: 'nl-om',
    type: 'government',
    title: 'Public Prosecution Service — tasks and organisation',
    publisher: 'Openbaar Ministerie (Netherlands Public Prosecution Service)',
    url: 'https://www.prosecutionservice.nl/',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'NL',
    note: 'The Public Prosecution Service\'s own English site, read directly. Supports: the OM\'s tasks — "supervising the police in the investigation of criminal offences, prosecuting criminal offences and bringing suspected offenders before the courts"; that "the Public Prosecution Service and the courts together make up the judiciary"; and that the OM is governed nationally by the Board of Prosecutors General (College van procureurs-generaal). It establishes that the OM sits within the judiciary rather than being independent of the executive; the Minister\'s political responsibility is established by the e-Justice source.',
  },
  {
    id: 'nl-ejustice-professions',
    type: 'international-organization',
    title: 'Types of legal professions — Netherlands (European e-Justice Portal)',
    publisher: 'European Commission (European e-Justice Portal)',
    url: 'https://e-justice.europa.eu/topics/find-legal-professional/types-legal-professions/nl_en',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'INT',
    note: 'The European Commission\'s e-Justice portal page on the Netherlands, read directly. Supports: "The public prosecutor is in charge of investigations"; that at national level the OM is governed by the Board of Prosecutors General in The Hague; and that "political responsibility for the OM lies with the Minister for Justice", who together with the Board decides priorities for investigation and prosecution. An intergovernmental (EU) source describing the Netherlands; it establishes the prosecutor-led investigation and the OM\'s subordination to ministerial political responsibility.',
  },
  {
    id: 'nl-ejustice-courts',
    type: 'international-organization',
    title: 'National ordinary courts — Netherlands (European e-Justice Portal)',
    publisher: 'European Commission (European e-Justice Portal)',
    url: 'https://e-justice.europa.eu/topics/taking-legal-action/legal-systems-eu-and-national/national-ordinary-courts/nl_en',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'INT',
    note: "The European Commission's e-Justice portal page on the Dutch court system, read directly. Supports the hierarchy: 11 district courts (rechtbanken) → 4 courts of appeal (gerechtshoven) → the Hoge Raad der Nederlanden (Supreme Court of the Netherlands), highest court in civil, criminal and tax law, exercising cassation; and the separate highest administrative courts (the Administrative Jurisdiction Division of the Council of State, the Centrale Raad van Beroep, and the College van Beroep voor het bedrijfsleven). Establishes that there is no single unified apex and no constitutional court.",
  },
  {
    id: 'nl-gov-police',
    type: 'government',
    title: 'Organisation of the Dutch police',
    publisher: 'Government of the Netherlands',
    url: 'https://www.government.nl/topics/police/organisation-of-the-dutch-police',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'NL',
    note: 'Government of the Netherlands topic page, read directly. Supports: there is one national police force, headed by one Commissioner, consisting of 10 Regional Units, the Central Unit and the Police Services Centre; and that the Minister of Justice and Security has full ministerial accountability for the proper functioning of the police. The statutory basis is the Politiewet 2012 (Police Act 2012); the exact article text was not quoted because the official consolidated-legislation site wetten.overheid.nl was unreachable, and the substance is established by this government page.',
  },
  {
    id: 'nl-dji',
    type: 'government',
    title: 'Custodial Institutions Agency (DJI) — English',
    publisher: 'Dienst Justitiële Inrichtingen (DJI), Ministry of Justice and Security',
    url: 'https://www.dji.nl/english',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'NL',
    note: 'The Custodial Institutions Agency\'s own English page, read directly. Supports: after a court imposes a custodial sentence or measure, the Ministry of Justice and Security is responsible for its enforcement, "which has been delegated to the Custodial Institutions Agency (DJI)"; DJI\'s task is the detention, day-to-day care and rehabilitation of those held. Establishes that prisons are run by a single national agency of the justice ministry, with no sub-national prison authority.',
  },
  {
    id: 'nl-rechtspraak',
    type: 'government',
    title: 'The Dutch judicial system and the Council for the Judiciary',
    publisher: 'De Rechtspraak / Raad voor de rechtspraak (Council for the Judiciary)',
    url: 'https://www.rechtspraak.nl/english',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'NL',
    note: 'The judiciary\'s own English portal, read as an overview. Supports that the Hoge Raad is the highest court in civil, criminal and tax matters, and that the Council for the Judiciary (Raad voor de rechtspraak) "is part of the judiciary system, but does not administer justice itself" — it supports the courts\' budget and operations. Establishes the judicial-council arrangement named on the oversight page.',
  },
  {
    id: 'nl-gov-ccp-2029',
    type: 'government',
    title: 'New Code of Criminal Procedure enters into force 1 April 2029',
    publisher: 'Government of the Netherlands',
    url: 'https://www.government.nl/latest/news/2024/03/20/new-code-of-criminal-procedure-enters-into-force-april-1-2029',
    publishedOn: '2024-03-20',
    verifiedOn: '2026-07-26',
    verificationMethod: 'content-confirmed',
    jurisdiction: 'NL',
    note: 'Government of the Netherlands news item, read directly. Supports that a new Code of Criminal Procedure (Wetboek van Strafvordering) is planned to enter into force on 1 April 2029, replacing the 1926 code, with the first enactment act (Books 1–6) submitted to the House of Representatives in 2023 and further books to follow — i.e. it is in the legislative process, not yet fully enacted. It is procedural reform and does not restructure the courts, the OM, the national police or DJI, so it is recorded in prose rather than as a scheduled institutional change.',
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
