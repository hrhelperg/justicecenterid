import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The India dossier — a federation where police, prosecution and prisons are State subjects while
 * the criminal codes are national (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the official Constitution of India (Ministry of
 * Law and Justice PDF), the Government's Press Information Bureau, and the World Prison Brief;
 * independently re-verified in an adversarial pass. The Seventh Schedule entries and the cited
 * articles were re-confirmed verbatim, and the World Prison Brief figures re-confirmed by hand.
 *
 * The model result: India is the batch's flagship FEDERAL case — the first Batch C country that
 * genuinely needs sub-national jurisdiction records. The Seventh Schedule makes police, public order
 * and prisons exclusive State subjects, so each State runs its own police, prosecution directorate
 * and prison administration; the criminal codes and subordinate-court organisation are Concurrent
 * (national); and the judiciary is integrated (a single hierarchy under the Supreme Court, not two
 * parallel systems). Modelled as a Union record plus three illustrative State records.
 */
const IN_PRISON_DENSITY: RestrictedClaim = {
  id: 'in-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 December 2024, Indian prisons held 511,542 people including those on remand, against an official capacity of 453,769 places — an occupancy level of 112.7%, that is, above capacity.',
  claimType: 'fact',
  sources: ['wpb-india'],
  sourceScope:
    "World Prison Brief (ICPR), compiled from the National Crime Records Bureau's Prison Statistics India: total prison population 511,542 including pre-trial detainees at 31 December 2024; official capacity 453,769 at the same date; occupancy level 112.7% at 31 December 2024. Prisons are administered by the governments of the States and Union Territories, so this is a national aggregate across many separate prison systems.",
  jurisdiction: 'IN',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2024-12-31',
  limitation:
    'A national total aggregated across the separately administered prison systems of the States and Union Territories, at one reference date. An occupancy of 112.7% for the aggregate does not establish the position of any State system or of any individual prison, nor the position on any other date; State-level occupancy varies widely around this national figure. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const INDIA: CountryDossier = {
  countryCode: 'IN',
  slug: 'india',
  name: 'India',
  officialName: 'the Republic of India',
  independentBodyNoun: 'an Indian government body',
  summary:
    'India is a federation with a strong centre and a common-law tradition. Its defining feature for this site is a split competence: the criminal codes are national, but police, prosecution and prisons are run by the States — so who runs the police or the prisons depends on which State you are in. The judiciary is integrated under a single Supreme Court, and three new national criminal codes came into force in 2024.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['in', 'in-mh', 'in-tn', 'in-up'],
  sources: ['in-constitution', 'wpb-india'],
  uncertainty: [
    'The State layer is modelled with three illustrative States (Maharashtra, Tamil Nadu, Uttar Pradesh); their specific institutional detail is not researched, and the Union Territories — where some justice functions are Union-administered — are noted but not modelled.',
    'The federal investigative agencies (the CBI under the Delhi Special Police Establishment Act 1946; the NIA under the NIA Act 2008), the Directorate of Prosecution provision (BNSS s. 20), the police-investigation provisions (BNSS s. 175), the National Legal Services Authority, and the State Police Complaints Authorities (mandated by Prakash Singh v. Union of India, 2006) are described from secondary/reputable sources, not primary-fetched statutes; the Constitution and the Press Information Bureau release are primary.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'India is a federation of a Union and States with a common-law tradition and a written, supreme Constitution (in force since 26 January 1950). Legislative power is divided by the Seventh Schedule (Article 246) into a Union List, a State List and a Concurrent List — and the way the four justice functions fall across that division is the key to the whole system.',
      claim: 'fact',
      sources: ['in-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'National codes, State institutions',
      text: "India's defining split is this: criminal law and criminal procedure are Concurrent subjects, so Parliament enacts the codes for the whole country — the Bharatiya Nyaya Sanhita, the Bharatiya Nagarik Suraksha Sanhita and the Bharatiya Sakshya Adhiniyam of 2023, in force since 1 July 2024. But police (State List Entry 2), public order (Entry 1) and prisons (Entry 4) are exclusive State subjects. So the same national codes are applied by police, prosecutors and prison services that belong to each State, not to the Union. This is why this dossier models a Union record plus State records.",
    },
    {
      kind: 'paragraph',
      text: 'The judiciary, by contrast, is integrated: a single hierarchy under the Supreme Court of India, with a High Court for each State and the subordinate courts beneath them — not two parallel federal and state court systems. The Union also runs limited federal investigative agencies (the CBI and the NIA) alongside the State police.',
      claim: 'fact',
      sources: ['in-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of India',
      summary:
        'A federation whose Seventh Schedule makes police, prosecution and prisons State subjects while the criminal codes are national — with an integrated judiciary on top.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution', 'in-pib-criminal-laws'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Constitution directs the State to separate the judiciary from the executive (Article 50), and the Seventh Schedule (Article 246) divides legislative power. In the State List, "Public order" (Entry 1), "Police" (Entry 2) and "Prisons, reformatories, Borstal institutions… and persons detained therein" (Entry 4) are exclusive State subjects. In the Concurrent List, "Criminal law" (Entry 1), "Criminal procedure" (Entry 2) and "Administration of Justice; constitution and organisation of all courts, except the Supreme Court and the High Courts" (Entry 11A) are shared, with the Union prevailing — which is how a single set of criminal codes applies nationwide.',
          claim: 'fact',
          sources: ['in-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'New national criminal codes (2024)',
          text: "The Government's Press Information Bureau records that the Bharatiya Nyaya Sanhita 2023, the Bharatiya Nagarik Suraksha Sanhita 2023 and the Bharatiya Sakshya Adhiniyam 2023 were notified in the Gazette on 25 December 2023 and came into force (with a narrow exception) on 1 July 2024, replacing the Indian Penal Code 1860, the Code of Criminal Procedure 1973 and the Indian Evidence Act 1872. These are national codes, applied by the States' own institutions.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'How this is modelled',
          text: 'Because police, prosecution and prisons are State-run, a single country record cannot answer "who runs the police here" — the answer differs by State. This dossier models a Union record (framework, apex courts, national codes, federal agencies) plus three illustrative State records (Maharashtra, Tamil Nadu, Uttar Pradesh). The 28 States and the Union Territories are not all modelled, and Union Territories — where some functions are Union-administered — differ.',
        },
      ],
      uncertainty: [
        'Constitutional articles and Seventh Schedule entries are cited from the official Ministry of Law and Justice text and were re-confirmed verbatim.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in India',
      summary:
        'Policing is an exclusive State subject: each State runs its own police force, with a few limited federal investigative agencies alongside them.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "Policing is an exclusive State subject (State List Entry 2), so each State (and Union Territory) runs its own police force under its own Home Department; there is no general national police force. Alongside the State forces, the Union maintains limited federal investigative agencies — the Central Bureau of Investigation (based on the Delhi Special Police Establishment Act 1946, which generally needs a State's consent to operate within it) and the National Investigation Agency (under the NIA Act 2008, for terrorism and specified offences).",
          claim: 'fact',
          sources: ['in-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A different police force in each State',
          text: 'Because police is a State subject, "the Indian police" is not one institution but many: the answer to "who polices here" is a different State force in each State. The federal agencies are exceptions with limited, statutory reach, not a national police over the States. This is the clearest instance on this site of a function that a country-level answer would misdescribe.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which tier holds the police function and which agencies exist. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        "The CBI and NIA statutory bases are described from reputable secondary sources; the bare Acts were not primary-fetched, and no individual State force's organisation was researched.",
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in India',
      summary:
        'An integrated judiciary — one hierarchy under the Supreme Court of India, with a High Court for each State — and no separate constitutional court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Unlike its police and prisons, India\'s judiciary is integrated — a single hierarchy, not separate federal and state systems. At the apex is the Supreme Court of India (Article 124), whose declared law "shall be binding on all courts within the territory of India" (Article 141). Below it, "there shall be a High Court for each State" (Article 214) — about twenty-five High Courts — each with "control over district courts and courts subordinate thereto" in its jurisdiction (Article 235), with the subordinate courts administered at State level under that control.',
          claim: 'fact',
          sources: ['in-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The Supreme Court is also the constitutional court',
          text: 'There is no separate constitutional court. Constitutional review is exercised by the Supreme Court and the High Courts through their writ jurisdiction (Articles 32 and 226); the same courts that decide ordinary cases decide constitutional ones. So the apex bodies to record are the Supreme Court and the High Courts — an integrated review, not a concentrated constitutional tribunal.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The specialised tribunals, the detailed jurisdiction of each High Court, and the structure of the subordinate courts were not set out beyond the constitutional articles.',
        },
      ],
      uncertainty: [
        'The number of High Courts (about twenty-five) is from established record; the court hierarchy is cited from the Constitution.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in India',
      summary:
        'Prosecution is run by the States — each maintains a Directorate of Prosecution under its Home Department — while the Union prosecutes for its own agencies.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prosecution follows the State structure. Each State government establishes a Directorate of Prosecution, headed by a Director of Prosecution and functioning under the administrative control of the State's Home Department (Bharatiya Nagarik Suraksha Sanhita, section 20); the Union runs prosecution only for its own central agencies. The prosecution is an executive body, not part of the judiciary and not constitutionally independent.",
          claim: 'fact',
          sources: ['in-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'State-run, and common-law in style',
          text: "Two things follow. First, because prosecution tracks the State Home administration, there is no single national prosecution service — each State has its own directorate. Second, in the common-law manner the prosecutor does not direct the police investigation; the directorate's role is trial advocacy, monitoring serious cases and advising on appeals, while the investigation is the police's.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "The Directorate of Prosecution provision (BNSS s. 20) is described from reputable secondary sources, not a primary-fetched statute, and no individual State's prosecution service was researched.",
        },
      ],
      uncertainty: [
        'BNSS s. 20 is described from secondary sources; the bare Act was not primary-fetched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in India',
      summary:
        'The police investigate; a magistrate provides oversight and can order an investigation; the prosecutor does not run it — the common-law model, State-policed.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Criminal investigation is police-led. The officer in charge of a police station may investigate a cognizable offence without prior permission (Bharatiya Nagarik Suraksha Sanhita, section 175(1)), and a magistrate may order an investigation (section 175(3), after considering the officer's submissions). So the police direct the investigation, the magistrate provides oversight and can compel it, and the prosecutor — in the common-law manner — does not run it.",
          claim: 'fact',
          sources: ['in-constitution'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who oversees. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The BNSS s. 175 provisions are described from reputable secondary sources; the bare Act was not primary-fetched.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in India',
      summary:
        'Prisons are an exclusive State subject — run by the governments of the States and Union Territories — and the national aggregate stood above capacity at the end of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution', 'wpb-india'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [IN_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons are an exclusive State subject (State List Entry 4), so the governments of the States and Union Territories — not the Union — run the jails, each under its own prison or correctional department. A national figure is therefore an aggregate across many separate systems.',
          claim: 'fact',
          sources: ['in-constitution', 'wpb-india'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A national aggregate, above capacity',
          text: 'The World Prison Brief, drawing on the National Crime Records Bureau, records that on 31 December 2024 Indian prisons held 511,542 people including those on remand, against an official capacity of 453,769 — an occupancy of 112.7%, above capacity. Because prisons are State-run, this is a national total across separate State and Union-Territory systems: it does not establish the position of any one State or prison, and State-level occupancy varies widely around it. It is a single-day snapshot, and these levels are not reliably comparable between countries.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual State prison systems, the pre-trial (undertrial) population in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The prison figure is a national aggregate; no State-level system was researched separately.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in India',
      summary:
        'A statutory National Human Rights Commission, a judge-led collegium for the higher judiciary, and State-level police-complaints authorities of uneven coverage.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'National Human Rights Commission (NHRC)',
              description:
                'A statutory body under the Protection of Human Rights Act 1993, whose Chairperson must be a former Chief Justice of India or a Supreme Court judge; State Human Rights Commissions exist under the same Act. Described from reputable secondary sources.',
            },
            {
              term: 'Judicial appointments (the collegium)',
              description:
                'India has no statutory judicial-appointments council: judges of the Supreme Court and the High Courts are appointed through a judge-led collegium, restored after the Supreme Court struck down the National Judicial Appointments Commission in 2015. Control of the subordinate judiciary rests with the High Courts (Article 235).',
            },
            {
              term: 'Police-complaints authorities',
              description:
                'There is no single national police-complaints body; State Police Complaints Authorities were mandated by the Supreme Court in Prakash Singh v. Union of India (2006) and implemented unevenly through State police laws. Described from established record, not a primary-fetched judgment.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the principal oversight bodies and their basis. It does not assess how effective any of them is, and several — the NHRC, the collegium restoration, and the Prakash Singh directions — are described from reputable secondary sources rather than primary-fetched instruments.',
        },
      ],
      uncertainty: [
        'The NHRC, the collegium/NJAC history, and the Prakash Singh directions are from secondary sources; the Constitution supplies Article 235.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for India',
      summary:
        'Every source used for the India pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['in-constitution', 'in-pib-criminal-laws', 'wpb-india'],
      blocks: [
        {
          kind: 'paragraph',
          text: "The India pages rest on three primary/official sources: the official Constitution of India (Ministry of Law and Justice), for the federalism and the courts; the Government's Press Information Bureau, for the 2024 criminal codes; and the World Prison Brief (drawing on the National Crime Records Bureau), for the prison figures and the State/Union-Territory administration of prisons. Each was read or retrieved and confirmed on 27 July 2026 and independently re-checked; the Seventh Schedule entries, the cited articles, and the World Prison Brief figures were re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'What is primary and what is secondary',
          text: 'The federalism tier allocation — the load-bearing point that police, prosecution and prisons are State subjects — is verbatim from the primary constitutional text. The institutional detail beyond it (the CBI and NIA Acts, the Directorate of Prosecution and police-investigation provisions of the BNSS, the NHRC Act, the collegium history, and the Prakash Singh police-complaints directions) is described from reputable secondary sources rather than primary-fetched statutes, and is flagged as such. Several official sites (the Ministry of Home Affairs, the CBI, the NIA) were bot-walled or JavaScript-rendered.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/india-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in India',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "The organisation of forensic science in India (the central and State Forensic Science Laboratories, and the new criminal codes' forensic-visit requirements) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.",
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in India',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in India involve the Central Armed Police Forces (the Border Security Force and others), the immigration bureau and the customs administration, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of India',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "India's institutional history — the 1950 Constitution, the reception and reform of the colonial criminal codes, and the 2024 replacement of the Indian Penal Code, the Code of Criminal Procedure and the Evidence Act — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for India',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1950 Constitution and the 2024 commencement of the BNS/BNSS/BSA — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
