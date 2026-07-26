import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Finland dossier — a unitary, bilingual, EU republic with an autonomous region (Batch A).
 *
 * Research date: facts checked against sources on 2026-07-26 and independently re-verified (no
 * factual errors found).
 *
 * Finland is the richest pilot in the batch. It is bilingual (Finnish and Swedish, Constitution
 * s. 17); it has two co-equal supreme courts (the Supreme Court and the Supreme Administrative
 * Court, s. 3 / s. 99) and no constitutional court; two constitutional guardians of legality (the
 * Chancellor of Justice, s. 108, and the Parliamentary Ombudsman, s. 109); its police sit under a
 * DIFFERENT ministry (the Interior) from its courts, prosecution and prisons (the Justice
 * ministry); and its autonomous region, Åland, holds legislative competence over policing while
 * courts, prosecution and corrections stay with the State — the batch's one genuine asymmetry,
 * modelled by reusing the `autonomous-community` level the Spain pilot minted (see the fi-aland
 * jurisdiction record and docs/research/finland-model-findings.md).
 *
 * Source access: the Constitution and the Åland Autonomy Act are cited from the Ministry of
 * Justice's official English translations (fetched as PDFs and text-extracted, confirmed by me).
 */
const FI_PRISON_DENSITY: RestrictedClaim = {
  id: 'fi-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Finnish prisons held 3,041 people including those on remand, against a total capacity of 2,958 places — a prison density of 102.8 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'FI',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison and probation system (the Prison and Probation Service of Finland), at one reference date. A density of 102.8 means the system as a whole held more people than its stated capacity on that day — Finland is above capacity at the national level. It does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const FINLAND: CountryDossier = {
  countryCode: 'FI',
  slug: 'finland',
  name: 'Finland',
  officialName: 'the Republic of Finland',
  independentBodyNoun: 'a Finnish government body',
  summary:
    'Finland is a unitary, bilingual (Finnish and Swedish), civil-law republic and an EU member state. It has two co-equal supreme courts — one for general and one for administrative cases — and no constitutional court, two constitutional guardians of legality, and a police service under a different ministry from its courts and prosecution. Its autonomous region, Åland, runs its own policing while the courts, prosecution and prisons stay with the State.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['fi', 'fi-aland'],
  sources: ['fi-constitution', 'fi-courts'],
  uncertainty: [
    'On Åland, only the competence allocation is modelled (policing is a regional competence; courts, prosecution and corrections are State). The name and administration of a distinct Åland police organisation were not confirmed from a primary source.',
    'A dedicated standalone police-complaints body was not established from the sources; complaints of unlawful police conduct fall to the two guardians of legality, and suspected police offences are prosecutor-led investigations.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Finland is a unitary, parliamentary republic with a civil-law legal tradition, governed by the Constitution of 1999. It is a member state of the European Union (Constitution, Section 1) and has two national languages: Section 17 provides that "the national languages of Finland are Finnish and Swedish", and these pages give institution names in both alongside the English.',
      claim: 'fact',
      sources: ['fi-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Two supreme courts, two guardians of legality',
      text: 'Two features are worth carrying into the modules. First, Finland has two co-equal supreme courts, not one: the Supreme Court (korkein oikeus) is final in civil, commercial and criminal matters, and the Supreme Administrative Court (korkein hallinto-oikeus) is final in administrative matters (Section 3). There is no constitutional court. Second, Finland has not one but two constitutional guardians of the law — the Chancellor of Justice (Section 108) and the Parliamentary Ombudsman (Section 109) — each overseeing the lawfulness of official action. The courts and oversight modules set these out.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Police under a different ministry, and an autonomous region',
      text: 'Two structural points distinguish Finland from the other Nordic pilots. The police are guided by the Ministry of the Interior, while the courts, the prosecution and the prisons come under the Ministry of Justice — a split of ministries rather than a single justice department. And Finland has an autonomous region, Åland, which under its Autonomy Act legislates its own policing, while criminal law, the courts, prosecution and the enforcement of sentences remain with the State. The law-enforcement module and the jurisdiction table below record that asymmetry.',
    },
    {
      kind: 'paragraph',
      text: 'On the mainland, four institutions carry the system. The police, under the National Police Board, conduct investigations. The National Prosecution Authority (Syyttäjälaitos) prosecutes. The two branches of courts run up to their respective supreme courts. And the Prison and Probation Service of Finland (Rikosseuraamuslaitos) enforces sentences. All but the police sit under the Ministry of Justice.',
      claim: 'fact',
      sources: ['fi-intermin-police', 'fi-prosecution', 'fi-courts', 'fi-rise'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Finland',
      summary:
        'A bilingual, unitary EU republic under the 1999 Constitution: independent courts in two branches, two guardians of legality, and constitutional review without a constitutional court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['fi-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Finland is governed by the Constitution of 1999. Section 3 provides that "the judicial powers are exercised by independent courts of law, with the Supreme Court and the Supreme Administrative Court as the highest instances", establishing both judicial independence and the two-branch, two-apex court structure. Section 1 records that Finland is a member state of the European Union, and Section 17 that its national languages are Finnish and Swedish.',
          claim: 'fact',
          sources: ['fi-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Constitutional review without a constitutional court',
          text: 'Finland has no constitutional court. Constitutional review works in two ways instead: it is done in advance, mainly by Parliament\'s Constitutional Law Committee when a bill is passed, and in the courts under Section 106, which provides that where the application of an Act would be "in evident conflict with the Constitution, the court of law shall give primacy to the provision in the Constitution". So a court, deciding an ordinary case, may set aside a statute in evident conflict with the Constitution, but there is no dedicated constitutional tribunal.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Two guardians of legality',
          text: 'Distinctively, Finland has two supreme overseers of the lawfulness of public action: the Chancellor of Justice of the Government (Section 108) and the Parliamentary Ombudsman (Section 109). Both ensure that the courts, the authorities and civil servants obey the law, both monitor fundamental and human rights, and both may bring charges — including, in defined circumstances, against a judge. The oversight module explains the division between them.',
        },
      ],
      uncertainty: [
        "The Constitution is cited from the Ministry of Justice's official English translation; the authoritative texts are Finnish and Swedish.",
        'The High Court of Impeachment (Section 101) and the special courts (Insurance, Labour, Market) are noted as existing but not described.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Finland',
      summary:
        'A national police under the Ministry of the Interior — a different ministry from the rest of the justice system — plus the one place where Finland is asymmetric: Åland runs its own policing.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['fi-intermin-police', 'fi-autonomy-act'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'On the Finnish mainland the police are a national service, guided and directed by the Ministry of the Interior — which "guides and directs the police service, and prepares related legislation". Operational policing is directed by the National Police Board (Poliisihallitus), under which sit the eleven local police departments, the National Bureau of Investigation (Keskusrikospoliisi), the Police University College and the Finnish Security Intelligence Service.',
          claim: 'fact',
          sources: ['fi-intermin-police'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A police service in a different ministry',
          text: 'A structural point that sets Finland apart from the other Nordic pilots: the police come under the Ministry of the Interior, whereas the courts, the prosecution and the prisons come under the Ministry of Justice. The bodies that investigate, prosecute, try and imprison are therefore split across two ministries rather than gathered under a single justice department.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The one asymmetry: Åland',
          text: 'Finland is unitary, but its autonomous region, Åland (Ahvenanmaa), is the exception for policing. Under the Act on the Autonomy of Åland, Åland holds legislative competence over "public order and security" (Section 18(6), with State exceptions for firearms and rescue services), so policing on Åland is a regional matter. Criminal law, the courts, the prosecution framework and the enforcement of sentences are reserved to the State (Section 27). The jurisdiction table on the country page records this: Åland is "own" for policing but "national" for courts, prosecution and corrections. The name and administration of a distinct Åland police organisation were not confirmed from a primary source, so only the competence is stated.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the structure of the police and its ministry. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The name and administration of a distinct Åland police organisation were not confirmed from a primary source; only the competence allocation (Autonomy Act Section 18(6)) is stated.',
        'The internal organisation of the mainland police departments and the National Bureau of Investigation was not researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Finland',
      summary:
        "Two branches, two supreme courts — the Supreme Court and the Supreme Administrative Court — with no constitutional court and courts administered by an arm's-length body since 2020.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['fi-constitution', 'fi-courts'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Finland has two branches of courts (Constitution, Section 98). The general courts hear civil, commercial and criminal cases: district courts (käräjäoikeus), courts of appeal (hovioikeus), and at the apex the Supreme Court (korkein oikeus). The administrative courts hear disputes with public authorities: the regional administrative courts (hallinto-oikeus) and, at the apex, the Supreme Administrative Court (korkein hallinto-oikeus). Section 99 makes each supreme court final within its branch.',
          claim: 'fact',
          sources: ['fi-constitution', 'fi-courts'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Two apex courts, no constitutional court',
          text: 'There are two co-equal supreme courts, one per branch, and no constitutional court. As on the justice-system page, constitutional questions are handled in advance by Parliament\'s Constitutional Law Committee and, in litigation, by every court under Section 106. The courts themselves state their independence plainly: "the courts are independent … bound only by the law in force. No outside party can intervene in the decision-making of the courts."',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: "Court administration at arm's length since 2020",
          text: 'Since 1 January 2020 the central administration of the courts has been the responsibility of the National Courts Administration (Tuomioistuinvirasto), which "began its operations on 1 January 2020" within the administrative branch of the Ministry of Justice — a reform to strengthen the institutional independence of the judiciary by moving court-administration tasks out of direct ministry handling.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the special courts (Insurance, Labour, Market), the lay-member system, and the High Court of Impeachment have not been researched from the primary statutes and are not described.',
        },
      ],
      uncertainty: [
        'The court structure is cited from the Constitution and the courts portal; the Courts Act was not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Finland',
      summary:
        "The National Prosecution Authority — decisionally independent, but within the Ministry of Justice's administrative branch — headed by a Prosecutor-General the President appoints.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['fi-prosecution', 'fi-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Finland is conducted by the National Prosecution Authority (Syyttäjälaitos), created in its current single-authority form by the Act on the National Prosecution Authority (32/2019). It is headed by the Prosecutor-General, who under Section 104 of the Constitution is the highest prosecutor and is appointed by the President of the Republic. It comprises the Office of the Prosecutor General and five prosecution districts — Southern, Western, Northern and Eastern Finland, and Åland.',
          claim: 'fact',
          sources: ['fi-prosecution', 'fi-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independent in the decision, inside a ministry branch',
          text: 'The Authority describes itself as "the independent National Prosecution Authority … a State authority and part of the judicial system", and says that "in the decisions they make in prosecution matters, prosecutors are autonomous and independent administrators of justice". At the same time it "belongs to the administrative branch of the Ministry of Justice". So the Finnish prosecutor has decisional independence — no one may direct the prosecution decision in a case — while sitting, administratively, within a ministry. That is a different balance again from the Norwegian (King-in-Council) and Swedish (constitutional ministerstyre bar) models, reaching a similar decisional independence by another route.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "This page states the independence and structure as the official sources describe them. It does not research how the boundary between the ministry's administrative role and the prosecutor's decisional independence operates in practice.",
        },
      ],
      uncertainty: [
        'The detailed powers of the Prosecutor-General to direct subordinate prosecutors were not researched from the primary Act.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Finland',
      summary:
        'Police-led pre-trial investigation — with the prosecutor cooperating rather than directing, except where a police officer is the suspect.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['fi-prosecution-investigation'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Finland runs through a "pre-trial investigation" (esitutkinta), which "is carried out by pre-trial investigation authorities, usually the police" — the others being the Border Guard, Customs and the Defence Forces. The prosecutor "is not a pre-trial investigation authority"; the head of the investigation (tutkinnanjohtaja) is usually a police officer. The prosecutor and the investigation authority cooperate so that the suspected offence is investigated thoroughly enough to charge.',
          claim: 'fact',
          sources: ['fi-prosecution-investigation'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Police-led — with one telling exception',
          text: 'Finland is the police-led counterpart to the prosecutor-led Nordic systems: the police normally lead the investigation and the prosecutor steers rather than directs. The exception is revealing — the prosecutor usually acts as head of the investigation where a police officer is suspected of an offence, so that the police are not investigating themselves. This page describes that allocation; it is our framing, grounded in the official description of who leads.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who leads the investigation and who takes over when a police officer is suspected. It does not describe investigative techniques, surveillance or forensic methods, or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The point at which the prosecutor becomes involved in an ordinary investigation, and the judicial controls on coercive measures, were not researched from the primary Criminal Investigation Act.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Finland',
      summary:
        'The Prison and Probation Service of Finland (Rikosseuraamuslaitos) under the Ministry of Justice — and a properly scoped Council of Europe figure showing the system above capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['fi-rise', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [FI_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Corrections in Finland are run by a single national body, the Prison and Probation Service of Finland (Rikosseuraamuslaitos, "Rise"), under the Ministry of Justice. It "is responsible for the enforcement of prison sentences and community sanctions", and it adopted its current English name on 1 September 2022 (its Finnish and Swedish names unchanged). Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['fi-rise'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Finnish prisons held 3,041 people, including those on remand, against a total capacity of 2,958 places — a prison density of 102.8 inmates per 100 places. That density above 100 means the system as a whole held more people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual institutions and their regimes, community sanctions in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The internal structure of the Prison and Probation Service was not researched.',
        'The enforcement of sentences on Åland (a State competence under the Autonomy Act) was not separately researched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Finland',
      summary:
        'Two constitutional guardians of legality — the Chancellor of Justice and the Parliamentary Ombudsman — each ensuring that the courts and authorities obey the law.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['fi-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Chancellor of Justice of the Government (oikeuskansleri / justitiekansler)',
              description:
                'A constitutional office (Section 108) that oversees the lawfulness of the official acts of the Government and the President of the Republic, and ensures that the courts, the authorities and public-task performers obey the law and fulfil their obligations, monitoring fundamental and human rights.',
            },
            {
              term: 'Parliamentary Ombudsman (eduskunnan oikeusasiamies / riksdagens justitieombudsman)',
              description:
                'A constitutional office elected by Parliament (Sections 38, 109) that ensures the courts, the authorities and civil servants obey the law and fulfil their obligations, monitors fundamental and human rights, and reports annually to Parliament.',
            },
            {
              term: 'Overlapping, deliberately',
              description:
                'The two guardians have wide, overlapping mandates and comparable powers — both may bring or order charges, including against a judge in defined circumstances (Section 110), and both have broad information rights (Section 111). Having two supreme overseers of legality, one attached to the Government and one to Parliament, is a distinctive feature of the Finnish (and Nordic) constitutional order.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Where police complaints go',
          text: 'This pilot did not establish a dedicated standalone police-complaints commission. Complaints of unlawful conduct by the police fall within the legality oversight of the Chancellor of Justice and the Parliamentary Ombudsman; and where a police officer is suspected of a crime, the investigation is led by a prosecutor rather than the police (see the investigations page). The absence of a separate complaints commission from these pages is a limit of our research, stated rather than filled.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: "It states which bodies supervise the legality of official action and their constitutional basis. It does not assess how effective they are, nor research the boundary between the two guardians' jurisdictions in detail.",
        },
      ],
      uncertainty: [
        'The precise division of labour between the Chancellor of Justice and the Parliamentary Ombudsman was not researched.',
        'Any dedicated police-complaints channel, and any separate judicial-discipline council beyond Sections 102 and 110, were not established from the sources.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Finland',
      summary:
        'Every source used for the Finland pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'fi-constitution',
        'fi-autonomy-act',
        'fi-prosecution',
        'fi-prosecution-investigation',
        'fi-intermin-police',
        'fi-courts',
        'fi-rise',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Finland pages rest on eight sources: the 1999 Constitution and the Act on the Autonomy of Åland (both the Ministry of Justice's official English translations), the National Prosecution Authority (two pages), the Ministry of the Interior on the police, the Finnish courts portal, the Prison and Probation Service, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass that found no factual errors.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: "The Constitution and the Åland Autonomy Act were fetched as the Ministry of Justice's official English-translation PDFs and text-extracted; the prosecution, interior-ministry police, courts and prison-and-probation pages were read from their own official sites, all bilingual (Finnish and Swedish). The Åland source establishes the competence allocation only, not the administration of a distinct Åland police organisation. The source register records the access path for each source.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/finland-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Finland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "The organisation of forensic science in Finland (the National Bureau of Investigation's forensic laboratory and the forensic-medicine arrangements) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.",
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Finland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "Border and customs in Finland involve the Finnish Border Guard (which is also a pre-trial investigation authority), Customs, and Finland's long external EU/Schengen border with Russia, and could not be researched to the standard required here.",
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Finland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Finnish institutional history — the Swedish and Russian inheritances, independence in 1917, the 1999 Constitution replacing the earlier constitutional acts, and the development of Åland autonomy — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Finland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1999 Constitution, the 2019 prosecution reorganisation, the 2020 National Courts Administration and the 2022 corrections rebrand — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
