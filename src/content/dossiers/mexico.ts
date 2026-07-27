import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Mexico dossier — a federation where all four justice functions are dual (federal + state), and
 * the batch's second Poland-class neutrality case (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the Constitution (Supreme Court per-article
 * texts + a current-text mirror), the official gazette (DOF) for the 2024 judicial reform, the IACHR
 * and OAS for the contested assessments, and the World Prison Brief; independently re-verified in an
 * adversarial pass. Corrections applied from verification: the Art. 21 investigation clause is
 * paraphrased rather than quoted from stale text, and the Guardia Nacional article-list is not
 * enumerated. The World Prison Brief figures had updated since research, so the current values (31
 * May 2026) are used, re-confirmed by hand.
 *
 * NEUTRALITY IS LOAD-BEARING. The 2024 judicial reform (popular election of judges) is stated as
 * enacted fact with its gazette citation and dates; every assessment is attributed to a named, dated
 * source (the IACHR press release; the OAS Electoral Observation Mission), and the site adds no view
 * of its own.
 *
 * The model result: a genuine dual-tier federation — every function replicated federally and in each
 * of 32 entities — modelled as a federal record plus two representative State records, harmonised by
 * a single national procedural code.
 */
const MX_PRISON_DENSITY: RestrictedClaim = {
  id: 'mx-prison-density-2026',
  category: 'detention-capacity',
  statement:
    'On 31 May 2026, Mexican prisons held 268,245 people including those on remand, against an official capacity of 227,658 places — an occupancy level of 117.8%, that is, above capacity.',
  claimType: 'fact',
  sources: ['wpb-mexico'],
  sourceScope:
    'World Prison Brief (ICPR), from the national prison administration: total prison population 268,245 including pre-trial detainees at 31 May 2026; official capacity 227,658 at the same date; occupancy level 117.8% at 31 May 2026. Prisons are run at both the federal (CEFERESOs) and state levels, so this is a national aggregate across many systems.',
  jurisdiction: 'MX',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2026-05-31',
  limitation:
    'A national aggregate across the federal and the 32 state prison systems, at one reference date. An occupancy of 117.8% for the aggregate does not establish the position of any one system or of any individual prison, nor the position on any other date. About four in ten of those held were in pre-trial detention. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const MEXICO: CountryDossier = {
  countryCode: 'MX',
  slug: 'mexico',
  name: 'Mexico',
  officialName: 'the United Mexican States',
  independentBodyNoun: 'a Mexican government body',
  summary:
    'Mexico is a federation in which all four justice functions are duplicated — federal courts, prosecution, police and prisons alongside those of each of 32 states — but harmonised by a single national code of criminal procedure and an accusatory oral process. Its federal prosecution is constitutionally autonomous, the prosecutor directs investigations, and a 2024 constitutional reform introduced the election of judges by popular vote, a change this site records only by attribution to dated official and intergovernmental sources.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['mx', 'mx-jal', 'mx-nle'],
  sources: ['mx-constitution', 'wpb-mexico'],
  uncertainty: [
    'The state layer is modelled with two illustrative states (Jalisco, Nuevo León); their specific institutional detail is not researched, and the 32 entities are not all modelled.',
    "The turnout figure and the specific criticisms of the 2024 reform are attributed to the OAS Electoral Observation Mission and the IACHR; the exact turnout sub-range and some specific concerns were not independently re-confirmed and are stated as those bodies' reports.",
    'The individual state fiscalías, courts and prison systems, and the 2027 second round of judicial elections and the secondary-legislation harmonisation, were not individually researched.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Mexico (the United Mexican States) is a federation with a civil-law tradition, governed by the Constitution of 1917. Article 40 makes it "a representative, democratic, secular and federal Republic composed of free and sovereign States … and Mexico City", and Article 124 reserves residual powers to the states. Federal and local laws must guarantee the independence of the courts (Article 17).',
      claim: 'fact',
      sources: ['mx-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Every function, twice — but on one national code',
      text: 'Unlike a federation where the states run some functions and the union others, Mexico duplicates all four: there are federal courts and a judiciary in each of the 32 entities; a federal prosecution and 32 state ones; federal, state and municipal police; and federal and state prisons. What holds it together is unusually strong harmonisation — a single national code of criminal procedure and sentence execution governs both orders (Article 73-XXI-c), and the criminal process has been accusatory and oral nationwide since 2016 (Article 20). This dossier therefore models a federal record plus representative state records.',
    },
    {
      kind: 'callout',
      variant: 'scope',
      title: 'A contested reform, recorded only by attribution',
      text: "A 2024 constitutional reform introduced the election of judges by popular vote. It is legally in force and has been implemented, and this site records that as fact — but the reform is contested, and every assessment of it here is attributed to a named, dated source (the Inter-American Commission on Human Rights; the OAS Electoral Observation Mission), with no view added in the site's own voice. The courts page sets this out.",
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Mexico',
      summary:
        'A federation that duplicates every justice function federally and in 32 states, harmonised by a single national procedural code and an accusatory oral process.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['mx-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Mexico is a federation of free and sovereign states plus Mexico City (Article 40), with residual powers reserved to the entities (Article 124). Substantive criminal law is split — Congress legislates federal crimes and organized crime, while each state has its own penal code for common-order (fuero común) crimes — but a single national code governs criminal procedure, alternative dispute resolution, sentence execution and juvenile justice for both orders (Article 73-XXI-c). The criminal process is constitutionally accusatory and oral (Article 20), a transition completed nationwide by 2016.',
          claim: 'fact',
          sources: ['mx-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Dual institutions, one procedure',
          text: 'Because every function is duplicated, "who runs the courts / prosecution / police / prisons" has two answers in Mexico — federal and state — and which applies depends on whether the crime is a federal or a common-order offence. What makes the system coherent is the single national procedural code and the uniform accusatory-oral model, which apply in both orders.',
        },
      ],
      uncertainty: [
        "Constitutional articles are cited from the Supreme Court's texts and a current-text mirror; the Spanish text is authoritative.",
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Mexico',
      summary:
        'Public security is a shared function of the federation, the states and the municipalities — a federal Guardia Nacional alongside state and municipal police — with the prosecutor directing investigations.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['mx-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Public security in Mexico is a shared function "of the Federation, the states and the municipalities" (Article 21). At the federal level the principal force is the Guardia Nacional, created in 2019 and, by a constitutional reform published in the official gazette in September 2024, placed under the Secretariat of National Defence. Alongside it are the 32 state police forces and the municipal police. The investigation of crimes corresponds to the Public Prosecutor (Ministerio Público), with the police acting under its "conduct and command" (Article 21).',
          claim: 'fact',
          sources: ['mx-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Police at three tiers, an investigation the prosecutor directs',
          text: 'Two things distinguish the Mexican model. First, policing exists at three tiers — federal, state and municipal — as a shared constitutional function. Second, in the civil-law manner the prosecutor directs the investigation and the police act under its command, which is the opposite of the common-law police-led model elsewhere in this batch.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which bodies exist and at which tier. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The Guardia Nacional reform is described from the constitutional text and the gazette date; individual state and municipal forces were not researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Mexico',
      summary:
        'Federal courts under the Supreme Court, a judiciary in each state, and — since a 2024 reform recorded here only by attribution — judges elected by popular vote.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [
        'mx-constitution',
        'mx-dof-judicial-reform-2024',
        'mx-iachr-2024',
        'mx-oas-eom-2025',
      ],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The federal judiciary is headed by the Supreme Court of Justice of the Nation (Suprema Corte de Justicia de la Nación), which since the 2024 reform has nine Ministers (Article 94); there is also a specialised electoral tribunal, and each of the 32 states has its own judiciary headed by a Superior Court of Justice (Article 116). There is no separate constitutional court — the Supreme Court is the constitutional apex, hearing constitutional controversies and actions of unconstitutionality, and constitutional rights are protected through the amparo jurisdiction.',
          claim: 'fact',
          sources: ['mx-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The 2024 judicial reform — the enacted facts',
          text: 'A constitutional decree published in the official gazette (Diario Oficial de la Federación) on 15 September 2024 provides that Ministers of the Supreme Court, circuit magistrates and district judges "shall be elected in a free, direct and secret manner by the citizenry" (Article 96), and requires the states to adopt the same elected-judiciary model and to create a Judicial Discipline Tribunal and a judicial-administration body (Article 116-III), replacing the former Council of the Federal Judiciary. The first judicial elections were held on 1 June 2025, and the newly elected Supreme Court took office on 1 September 2025, presided over by Hugo Aguilar Ortiz — the first Indigenous person to hold the office. A second round is scheduled for 2027.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'The assessments — attributed, not adopted',
          text: 'The reform is contested, and this site takes no position. The Inter-American Commission on Human Rights, in a press release of 12 September 2024, expressed concerns about threats to judicial independence, access to justice and the rule of law, and about the speed of the process. The OAS Electoral Observation Mission, reporting on the June 2025 elections, recorded a turnout of about 13% ("one of the lowest … in the region"), described the process as "extremely complex" and "polarizing", and concluded that it does not recommend this model of judge selection be replicated in other countries in the region. Each statement is attributed and dated.',
        },
      ],
      uncertainty: [
        "The elected-judiciary implementation and the assessments are attributed to the gazette, the IACHR and the OAS; the exact turnout sub-range and some specific concerns are stated as those bodies' reports, not independently re-confirmed.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Mexico',
      summary:
        'A constitutionally autonomous federal prosecution (the Fiscalía General de la República) and a prosecution in each state — with the prosecutor directing the investigation.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['mx-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'At the federal level, prosecution is conducted by the Fiscalía General de la República, which the Constitution organises "as an autonomous public body, with its own legal personality and assets" (Article 102-A) — the successor, since 2018, to the former Attorney-General\'s Office that had sat under the executive. Its head, the Fiscal General, serves a nine-year term. Each of the 32 states has its own prosecution (Fiscalía), most now autonomous under their state constitutions.',
          claim: 'fact',
          sources: ['mx-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Autonomous, and master of the investigation',
          text: 'Two features stand out. First, the federal prosecution is constitutionally autonomous — neither part of the judiciary nor under a ministry — a design Mexico adopted in moving from the executive-attached Attorney-General\'s Office to the Fiscalía General. Second, the prosecution directs the investigation: the police act under the Public Prosecutor\'s "conduct and command", and the exercise of criminal action before the courts corresponds to the Public Prosecutor (Article 21).',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The internal structure of the federal prosecution and the individual state fiscalías were not researched beyond the constitutional autonomy and the investigation-directing role.',
        },
      ],
      uncertainty: [
        'The state prosecutions are described from the constitutional framework; no individual state fiscalía was researched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Mexico',
      summary:
        'The prosecutor directs the investigation and the police act under its command, within a nationwide accusatory oral process.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['mx-constitution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Mexico is prosecutor-directed. The investigation of crimes corresponds to the Public Prosecutor (Ministerio Público), and the police act under its "conduct and command" (Article 21); the exercise of criminal action before the courts also corresponds to the Public Prosecutor. Since the constitutional transition completed in 2016, the process is accusatory and oral throughout the country (Article 20).',
          claim: 'fact',
          sources: ['mx-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Civil-law direction, common national procedure',
          text: 'This is the civil-law arrangement — the prosecutor directs and the police execute — carried out under a single national procedural code that applies in both the federal and the state orders. So while the institutions are dual, the way an investigation is run is uniform across the country.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who directs the investigation and who charges. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The operative provisions of the national procedural code were not read in full; the direction of investigation is stated from the Constitution.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Mexico',
      summary:
        "A dual prison system — federal centres and each state's own prisons — aimed at social reinsertion, and above capacity at the national level.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['mx-constitution', 'wpb-mexico'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [MX_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prisons in Mexico are run at both levels: federal centres (CEFERESOs) and each state's own prison system, in keeping with the federal structure. The Constitution organises the penitentiary system on the basis of respect for human rights and of work, training, education, health and sport as means to the social reinsertion of the sentenced person (Article 18), and sentence execution is now under judicial control through the single national code.",
          claim: 'fact',
          sources: ['mx-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A national aggregate, above capacity',
          text: "The World Prison Brief records that on 31 May 2026 Mexican prisons held 268,245 people including those on remand, against an official capacity of 227,658 — an occupancy of 117.8%, above capacity, with about four in ten of those held in pre-trial detention. Because prisons are run at both the federal and the state level, this is a national aggregate across many systems and does not establish the position of any one of them. It is a single-day snapshot, and these levels are not reliably comparable between countries. (The World Prison Brief\'s own ministry label is out of date.)",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual federal and state prison systems, the high pre-trial share in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The World Prison Brief figures updated between research and authoring; the current (31 May 2026) values are used and were re-confirmed by hand.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Mexico',
      summary:
        'A national human-rights commission (and one per state) with non-binding recommendations, and — since 2024 — a Judicial Discipline Tribunal in place of the former judicial council.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['mx-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'National Human Rights Commission (CNDH)',
              description:
                'The federal human-rights body (Article 102-B), to which anyone may complain of administrative acts or omissions by the authorities (except the federal judiciary); its recommendations are public but non-binding. Each state also has its own human-rights commission.',
            },
            {
              term: 'Judicial Discipline Tribunal and judicial-administration body',
              description:
                'Since the 2024 reform, the discipline of the federal judiciary is exercised by a Judicial Discipline Tribunal and its administration by a separate judicial-administration body (Article 94), replacing the former Council of the Federal Judiciary; the states must create equivalents (Article 116-III).',
            },
            {
              term: 'Police complaints',
              description:
                'There is no single dedicated national police-complaints authority; complaints against the police run through the Public Prosecutor, internal-affairs units, and the national and state human-rights commissions.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the oversight bodies and their basis. It does not assess how effective any of them is, and the new judicial-discipline and administration bodies are described from the constitutional text as reformed in 2024.',
        },
      ],
      uncertainty: [
        'The oversight bodies are described from the Constitution; the operation of the new judicial-discipline and administration bodies was not researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Mexico',
      summary:
        'Every source used for the Mexico pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [
        'mx-constitution',
        'mx-dof-judicial-reform-2024',
        'mx-iachr-2024',
        'mx-oas-eom-2025',
        'wpb-mexico',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Mexico pages rest on the 1917 Constitution (the Supreme Court's per-article texts and a current-text mirror), the official gazette for the 2024 judicial reform, the IACHR and the OAS for the contested assessments, and the World Prison Brief for the prison figures. Each was confirmed on 27 July 2026 and independently re-checked; the federalism articles and the reform texts were confirmed verbatim, and the World Prison Brief figures re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How the contested reform is handled',
          text: 'The 2024 judicial reform is stated as enacted fact with its gazette citation and dates; the assessments are attributed to the IACHR and the OAS by name and date, and the site adds no view of its own. Two currency points: the World Prison Brief prison figures had updated since the research pass, so the current 31 May 2026 values are used; and the World Prison Brief\'s "ministry responsible" label names a body dissolved in 2018 and is not used. The consolidated official Constitution PDF was unreachable, so the articles were read from the Supreme Court\'s per-article texts and a current-text mirror.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/mexico-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Mexico',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Mexico (the federal and state forensic services, and the identification of the disappeared) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Mexico',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Mexico involve the National Migration Institute, the customs agency and the Guardia Nacional, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Mexico',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Mexico's institutional history — the 1917 Constitution, the 2008–2016 transition to an accusatory oral criminal process, the 2018 creation of the autonomous Fiscalía General, and the 2024 judicial reform — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here, and the recent reform is an area where neutrality demands especially careful sourcing.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Mexico',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1917 Constitution, the 2016 completion of the accusatory-oral transition, the 2024 judicial reform and the 2025 judicial elections — are a start, but a responsible and neutral timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
