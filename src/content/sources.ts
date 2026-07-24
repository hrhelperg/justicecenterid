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
