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
