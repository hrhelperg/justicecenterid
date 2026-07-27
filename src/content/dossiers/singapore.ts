import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Singapore dossier — a unitary common-law city-state whose Attorney-General is also its Public
 * Prosecutor (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the Constitution and the Criminal Procedure
 * Code (Singapore Statutes Online), the Attorney-General's Chambers, the Judiciary, the Singapore
 * Police Force, and the World Prison Brief; independently re-verified in an adversarial pass
 * (Articles 35, 94 and 98 and the World Prison Brief figures re-confirmed verbatim; Art. 35(8)
 * re-confirmed by hand). One correction from verification was applied: the State Courts' caseload
 * share is stated in the Judiciary's own words (more than 80% of the overall and more than 90% of
 * the criminal caseload), not the over-generalised "90% of all cases" figure that turned out to be
 * a misquote.
 *
 * The model result: Singapore is unitary — all four functions national, no sub-national record. Its
 * distinctive features are the fusion of the Attorney-General and the Public Prosecutor in one
 * constitutional officer, a diffuse constitutional review with no constitutional court, and three
 * honestly recorded absences (no general ombudsman, no national human-rights institution, no
 * independent police-complaints body).
 */
const SG_PRISON_POPULATION: RestrictedClaim = {
  id: 'sg-prison-population-2024',
  category: 'detention-capacity',
  statement:
    'On 31 December 2024, Singapore prisons held 10,792 people including those on remand — a prison population rate of 178 per 100,000 inhabitants. The most recent official system capacity the source records is from 2013 (16,249 places), so no current occupancy level or density can be stated.',
  claimType: 'fact',
  sources: ['wpb-singapore'],
  sourceScope:
    'World Prison Brief (ICPR) country page for Singapore: total prison population 10,792 including pre-trial detainees at 31 December 2024 (source: the national prison administration); rate 178 per 100,000 based on an estimated national population of 6.06 million (UN figures); official capacity 16,249 dated September 2013. No occupancy figure is taken, because the capacity date is more than a decade earlier than the population date.',
  jurisdiction: 'SG',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2024-12-31',
  limitation:
    'A national count and rate for a single, nationally administered prison system, at one reference date. The only official capacity the source carries is from 2013, so nothing is said here about whether the system was over or under capacity — no occupancy or density claim is made (the 79.2% the source lists is against the 2013 capacity, not the 2024 population). The rate uses an estimated population denominator. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const SINGAPORE: CountryDossier = {
  countryCode: 'SG',
  slug: 'singapore',
  name: 'Singapore',
  officialName: 'the Republic of Singapore',
  independentBodyNoun: 'a Singaporean government body',
  summary:
    "Singapore is a unitary, common-law city-state with all justice functions national. Its most distinctive feature is that the Attorney-General is at once the Government's legal adviser and the Public Prosecutor. It has a single national judiciary topped by the Court of Appeal, diffuse constitutional review with no constitutional court, and police and prisons both under the Ministry of Home Affairs — and, recorded honestly, no general ombudsman, no national human-rights institution, and no independent police-complaints body.",
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['sg'],
  sources: ['sg-constitution', 'sg-cpc'],
  uncertainty: [
    'The current sitting Attorney-General is not named — no source stating the incumbent was fetched — and the substance of the 2024 constitutional amendment is not described.',
    "The World Prison Brief capacity figure is from 2013, so no current occupancy is claimed; the Commissioner of Prisons' name on that page is not independently re-verified and is not used.",
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Singapore is a unitary, common-law sovereign city-state. The Constitution vests judicial power in a single Supreme Court and such subordinate courts as written law provides (Article 93), and establishes one Legislature — there is no federal, state or provincial tier, and no distribution-of-powers lists. So all four justice functions sit at the national level, and judicial independence is protected by tenure and a removal procedure requiring a tribunal of Supreme Court judges (Article 98).',
      claim: 'fact',
      sources: ['sg-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: "One officer is both the Government's lawyer and the prosecutor",
      text: 'Singapore\'s most distinctive feature is a deliberate fusion: the Attorney-General is at once the Government\'s legal adviser (Article 35(7)) and the Public Prosecutor, with the power "exercisable at his discretion, to institute, conduct or discontinue any proceedings for any offence" (Article 35(8); Criminal Procedure Code section 11). The same constitutional officer advises the executive and controls all criminal prosecutions. The prosecution page sets this out.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions: a single judiciary topped by the Court of Appeal, the Attorney-General as Public Prosecutor, the Singapore Police Force, and the Singapore Prison Service — the last two both under the Ministry of Home Affairs. Constitutional review is diffuse, decided by the ordinary Supreme Court, with no dedicated constitutional court.',
      claim: 'fact',
      sources: ['sg-judiciary', 'sg-spf'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Singapore',
      summary:
        'A unitary common-law city-state with a single Supreme Court, protected judicial tenure, and diffuse constitutional review.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['sg-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Singapore is a unitary state: judicial power is vested in a single Supreme Court and subordinate courts (Article 93), and there are no constituent states or provinces running any justice function. A Supreme Court judge cannot be removed except by a tribunal of at least five persons who hold or have held Supreme Court office, on the ground of misbehaviour or inability (Article 98) — the constitutional guarantee of judicial independence.',
          claim: 'fact',
          sources: ['sg-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Review without a constitutional court',
          text: 'There is no dedicated constitutional court. Constitutional questions are decided by the ordinary Supreme Court — the High Court and, on appeal, the Court of Appeal — so review is diffuse. (Article 100 lets the President refer a constitutional question to a tribunal of Supreme Court judges for an advisory opinion, but that is not a standing constitutional court.)',
        },
      ],
      uncertainty: [
        'The Constitution is cited from Singapore Statutes Online; the site was intermittently in maintenance during research, but the load-bearing articles were retrieved.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Singapore',
      summary:
        'A single national force, the Singapore Police Force, under the Ministry of Home Affairs, alongside specialist national law-enforcement agencies.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['sg-spf'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing is a single national function. The Singapore Police Force (SPF) is, in its own words, "a uniformed organisation under the purview of the Ministry of Home Affairs"; there is no state or municipal police. Specialist national agencies handle particular fields — for example the Central Narcotics Bureau for drugs and the Corrupt Practices Investigation Bureau for corruption.',
          claim: 'fact',
          sources: ['sg-spf'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which national bodies exist and their ministry. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The internal organisation of the SPF and the specialist agencies was not researched beyond the ministry placement.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Singapore',
      summary:
        'A single national judiciary — the Supreme Court (Court of Appeal + High Court) over the State Courts and the Family Justice Courts — with the Court of Appeal as the final court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['sg-constitution', 'sg-judiciary'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Supreme Court consists of the Court of Appeal and the High Court, the latter (since a 2019/2021 restructuring) divided into an Appellate Division and a General Division (Article 94). The Court of Appeal is the final court, hearing civil and criminal appeals; the Appellate Division has no criminal jurisdiction. Below the Supreme Court, the State Courts (District and Magistrates' Courts) handle the bulk of first-instance work — the Judiciary reports more than 80% of the overall caseload and more than 90% of the total criminal caseload — and the Family Justice Courts handle family and youth matters.",
          claim: 'fact',
          sources: ['sg-constitution', 'sg-judiciary'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: "One judiciary, appointed by the President on the Prime Minister's advice",
          text: 'Judges and Judicial Commissioners are appointed by the President on the advice of the Prime Minister. There is a single national judiciary — a Singapore International Commercial Court sits as a division of the High Court for international commercial disputes — and no separate constitutional or administrative supreme court.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court and the specialist tribunals were not set out beyond the hierarchy and the apex.',
        },
      ],
      uncertainty: [
        "The court hierarchy is cited from the Constitution and the Judiciary's own site; the Supreme Court of Judicature Act was not read in full.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Singapore',
      summary:
        'The Attorney-General is the Public Prosecutor — the same constitutional officer who advises the Government — with discretionary control over all criminal prosecutions.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['sg-constitution', 'sg-cpc', 'sg-agc'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution is the work of the Public Prosecutor, an office the Constitution and statute vest in the Attorney-General: the Attorney-General "is the Public Prosecutor and has the control and direction of criminal prosecutions and proceedings" (Criminal Procedure Code section 11), with the constitutional power "to institute, conduct or discontinue any proceedings for any offence" (Article 35(8)). The work is done through the Attorney-General\'s Chambers, whose Crime Division evaluates the evidence secured by law-enforcement agencies and conducts prosecutions in the courts.',
          claim: 'fact',
          sources: ['sg-cpc', 'sg-constitution', 'sg-agc'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Adviser and prosecutor fused',
          text: 'The distinctive design is that one constitutional officer holds both roles: the Attorney-General advises the Government on legal matters (Article 35(7)) and is the Public Prosecutor (Article 35(8)). The office is not a Cabinet minister and is not part of the judiciary; the Attorney-General is appointed from persons qualified as a Supreme Court judge and can be removed only via a judicial tribunal (Article 35(1), (6)). Prosecutorial discretion is exercised independently even though the same officer advises the executive — a fusion no other country on this site currently shows.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "The current sitting Attorney-General is not named, and the internal organisation of the Attorney-General's Chambers beyond the Crime Division's prosecution role was not researched.",
        },
      ],
      uncertainty: [
        'The incumbent Attorney-General is not asserted; no source naming the sitting office-holder was fetched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Singapore',
      summary:
        'The police and specialist agencies investigate; the Public Prosecutor then evaluates the evidence and decides on charges — the common-law police-led model.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['sg-agc'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Singapore is police-led, in the common-law manner. The Singapore Police Force, or the relevant specialist agency, conducts and directs the investigation and gathers the evidence; the Public Prosecutor then evaluates that evidence "to assess whether an offence is disclosed" and decides whether and what to charge, conducting the prosecution in court. The Public Prosecutor directs the prosecution, not the investigation, though it may take over or discontinue any prosecution.',
          claim: 'fact',
          sources: ['sg-agc'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Police-led, like other common-law systems',
          text: 'As in New Zealand, the investigating and the charging roles are institutionally separate: the police investigate, and the prosecutor decides. This is the common-law counterpart to the prosecutor- or magistrate-directed investigation of the civil-law systems on this site.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who charges. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The statutory investigative powers of the police and the specialist agencies were not set out beyond the investigate/charge division.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Singapore',
      summary:
        'The Singapore Prison Service under the Ministry of Home Affairs — and a prison-population figure reported with an honest gap where the capacity data is stale.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['wpb-singapore'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [SG_PRISON_POPULATION],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Singapore are run nationally by the Singapore Prison Service, under the Ministry of Home Affairs — the same ministry as the police. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['wpb-singapore'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A figure reported only as far as the source allows',
          text: 'The World Prison Brief records that on 31 December 2024 Singapore prisons held 10,792 people including those on remand — a rate of 178 per 100,000 inhabitants. The most recent official capacity it carries, however, is from 2013 (16,249 places), so no current occupancy level is stated here: the 79.2% the source lists is against the 2013 capacity, not the 2024 population, and dividing across reference dates would mislead. The count is a single-day snapshot, and because the World Prison Brief compiles national figures collected under differing definitions, these levels are not reliably comparable between countries.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons, the treatment of detainees, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The administering service and ministry are taken from the World Prison Brief; the Prisons Act was not fetched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Singapore',
      summary:
        "Corruption oversight through an independent bureau in the Prime Minister's Office, legislative scrutiny for minority rights — and, recorded honestly, no general ombudsman, no national human-rights institution, and no independent police-complaints body.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['sg-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Recorded absences, not gaps',
          text: "Singapore's oversight landscape is defined as much by what it lacks as by what it has, and this site records those absences explicitly rather than leaving a blank: there is no general public-sector ombudsman, no Paris-Principles national human-rights institution, and no dedicated independent police-complaints commission (complaints against the police are handled internally within the force and the Ministry of Home Affairs, and through the courts). Stating a researched absence is the honest alternative to implying an institution that does not exist.",
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Corrupt Practices Investigation Bureau (CPIB)',
              description:
                "An independent anti-corruption agency within the Prime Minister's Office, whose Director reports directly to the Prime Minister and which is independent of the police.",
            },
            {
              term: 'Presidential Council for Minority Rights',
              description:
                'A constitutional body (Constitution Part 7) that reviews Bills and subsidiary legislation for measures that would disadvantage racial or religious communities — a legislative-scrutiny body, not a human-rights ombudsman.',
            },
            {
              term: 'Judicial and Legal Service Commissions',
              description:
                "The Constitution establishes a Judicial Service Commission and a Legal Service Commission for the Legal Service and subordinate-court judicial officers; Supreme Court judges are appointed by the President on the Prime Minister's advice.",
            },
          ],
        },
      ],
      uncertainty: [
        'The absences (ombudsman, national human-rights institution, independent police-complaints body) are recorded as researched negatives; the CPIB and the Presidential Council details rest partly on secondary reading, and the commission provision numbers were not re-fetched from the primary.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Singapore',
      summary:
        'Every source used for the Singapore pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [
        'sg-constitution',
        'sg-cpc',
        'sg-agc',
        'sg-judiciary',
        'sg-spf',
        'wpb-singapore',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Singapore pages rest on the Constitution and the Criminal Procedure Code (Singapore Statutes Online), the Attorney-General's Chambers for the prosecution, the Judiciary's own site for the courts, the Singapore Police Force for policing, and the World Prison Brief for the prison figures. Each was read or retrieved and confirmed on 27 July 2026 and independently re-checked; Articles 35, 94 and 98 and the World Prison Brief figures were re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Access notes and one correction',
          text: "Singapore's statutes are in English, so no translation is involved. Singapore Statutes Online was intermittently in maintenance during research, and the Singapore Prison Service and Ministry of Home Affairs organisation pages returned 404, so the prison administering body is taken from the World Prison Brief. One correction from verification: an over-generalised \"90% of all cases in the State Courts\" figure was replaced with the Judiciary's own wording (more than 80% of the overall and more than 90% of the criminal caseload). The 2024 constitutional amendment's substance and the sitting Attorney-General's name are not asserted.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/singapore-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Singapore',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "The organisation of forensic science in Singapore (the Health Sciences Authority's forensic services) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.",
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Singapore',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Singapore involve the Immigration & Checkpoints Authority and Singapore Customs, and could not be researched to the standard required here without risking an inaccurate description of a security-adjacent function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Singapore',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Singapore's institutional history — independence in 1965, the reception of English common law, the end of Privy Council appeals, and the 2019/2021 restructuring of the Supreme Court — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Singapore',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — independence in 1965, the 2019/2021 Supreme Court restructuring — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
