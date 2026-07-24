import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The United States dossier — the decentralisation pilot.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-24
 * (recorded as `factsVerifiedOn`, not a build date).
 *
 * Source discipline: justice.gov and fbi.gov bot-wall automated requests, so the federal
 * statutory basis for US Attorneys and the FBI is cited from the United States Code on the
 * Legal Information Institute, which reproduces the enacted text verbatim. Court structure,
 * policing fragmentation, the sheriff's elected character, tribal jurisdiction, DC's status
 * and the prison figure are all from official federal sources.
 *
 * Structural discipline: this dossier does not reuse the France or Germany page shape. The US
 * is more decentralised than either. Its recurring theme is not "federal versus one tier of
 * sub-national government" but fragmentation across thousands of separately governed
 * institutions, several kinds of sovereignty, and offices filled by local election. Every
 * module refuses the national-uniformity claim that a summary invites.
 */

/**
 * The pilot's real restricted claim.
 *
 * Prison population is the natural US corrections statistic and the one most often mangled: it
 * is routinely quoted as "the US incarcerates X" without noting that the prison count excludes
 * local jails entirely, or that it sums fifty separately administered state systems.
 */
const US_PRISON_POPULATION: RestrictedClaim = {
  id: 'us-prison-population-2023',
  category: 'detention-capacity',
  statement:
    'At yearend (31 December) 2023, 1,254,200 people were under the jurisdiction of state and federal prison authorities in the United States, of whom 143,300 were under the Federal Bureau of Prisons.',
  claimType: 'fact',
  sources: ['us-bjs-prisoners-2023'],
  sourceScope:
    'Bureau of Justice Statistics, Prisoners in 2023 — Statistical Tables, reference date 31 December 2023, published September 2025; collected through the National Prisoner Statistics program. Counts persons under the jurisdiction of state and federal correctional authorities.',
  jurisdiction: 'US',
  temporalScope: 'current',
  verifiedOn: '2026-07-24',
  metricPeriod: '2023-12-31',
  limitation:
    'This is a PRISON count and is NOT the total number of people incarcerated in the United States. It excludes local jail populations, which BJS counts in a separate Jail Inmates series and which hold several hundred thousand more people, many unconvicted. It aggregates fifty separately administered state prison systems plus the federal Bureau of Prisons, and describes none individually — the great majority (about 1.1 million) are in state systems, not federal. It is a jurisdiction count (legal authority over the prisoner) rather than a physical-custody count, and the two differ. It is not a rate, and it supports no comparison with any other country.',
};

export const UNITED_STATES: CountryDossier = {
  countryCode: 'US',
  slug: 'united-states',
  name: 'United States',
  officialName: 'United States of America',
  summary:
    'The United States is a federation in which the states hold reserved powers, most policing, prosecution, courts and prisons are organised below the federal level, many law-enforcement and prosecution offices are filled by local election, and tribal nations exercise inherent sovereignty.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-24',
  reviewedOn: '2026-07-24',
  factsVerifiedOn: '2026-07-24',
  jurisdictionIds: ['us', 'us-ca', 'us-la', 'us-dc', 'us-tribal'],
  sources: ['us-const-amend-10', 'us-courts-comparing'],
  uncertainty: [
    'Only a deliberate sample of sub-national jurisdictions is modelled — the federal level, two states, the District of Columbia and tribal jurisdiction as a category. Nothing here describes the other 48 states, and no sample is representative of them.',
    'No specific named tribe, county, parish or municipality is described. Tribal jurisdiction is modelled as a category to test the model, not as an account of any particular nation.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'The United States is a federation, and its defining feature for justice is decentralisation. The Tenth Amendment to the Constitution provides that "the powers not delegated to the United States by the Constitution, nor prohibited by it to the states, are reserved to the states respectively, or to the people." The federal government holds enumerated powers; general authority rests with the states.',
      claim: 'fact',
      sources: ['us-const-amend-10'],
    },
    {
      kind: 'callout',
      variant: 'scope',
      title: 'There is no "the American police", and no national one',
      text: 'In June 2018 there were 17,541 general-purpose state and local law-enforcement agencies in the United States (Bureau of Justice Statistics). Roughly two-thirds are municipal police departments, a sixth are sheriffs’ offices, and the rest are state, tribal, special-jurisdiction and other bodies. Federal agencies exist alongside all of these with defined federal responsibilities. Any sentence beginning "the US police…" is describing thousands of separately governed institutions as if they were one.',
    },
    {
      kind: 'paragraph',
      text: 'Two features make the US harder to summarise than the federal systems described elsewhere on this site. First, many of the officials who run local justice institutions are elected, not appointed: the head of a sheriff’s office is usually an elected sheriff, and chief local prosecutors are commonly elected too. Second, the country contains more than one kind of sovereign.',
      claim: 'fact',
      sources: ['us-bjs-agency-characteristics', 'us-bjs-prosecutors'],
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'More than two levels, and more than one kind of sovereignty',
      text: 'Alongside the federal government and the fifty states there are: the District of Columbia, which is not a state and sits under the plenary authority of Congress; territories; and tribal nations, whose sovereignty is inherent — it predates the Constitution and is not derived from either the federal government or a state. A tribe located within a state is not for that reason a subdivision of it. Geographic inclusion is not legal subordination, and the jurisdiction model on this site is built to keep the two apart.',
    },
    {
      kind: 'paragraph',
      text: 'The court system is doubled. As the federal judiciary puts it, the federal government and each state government have their own separate court systems. A matter is heard in a federal court or a state court depending chiefly on the law involved, and most criminal, contract, family and probate cases are matters for state courts.',
      claim: 'fact',
      sources: ['us-courts-comparing'],
    },
    {
      kind: 'paragraph',
      text: 'Prosecution is doubled in the same way. Federal prosecutors — the United States Attorneys — are appointed by the President and confirmed by the Senate and prosecute federal offences. State and local prosecution is organised separately by each state, and its chief prosecutors carry different titles from one state to the next.',
      claim: 'fact',
      sources: ['us-attorneys-28usc541-547', 'us-bjs-prosecutors'],
    },
    {
      kind: 'callout',
      variant: 'uncertainty',
      title: 'What this dossier does not tell you',
      text: 'It describes the constitutional and statutory allocation of functions and the shape of federal institutions. It does not describe how any individual state, county, parish, municipality or named tribe organises its justice institutions. Five jurisdictions are modelled as samples — the federal level, California, Louisiana, the District of Columbia and tribal jurisdiction as a category — and even for those, only the structural point each one tests is asserted.',
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of the United States',
      summary:
        'How US federalism divides justice: reserved state powers, two separate court systems, and why most criminal justice is a matter for the states.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['us-const-amend-10', 'us-courts-comparing'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The starting point for the US justice system is not a grant of power to the centre but a reservation of power to the states. The Tenth Amendment reserves to the states, or to the people, every power not delegated to the federal government. The federal government’s authority over crime and justice is therefore the exception carved out by enumerated powers; the general authority is the states’.',
          claim: 'fact',
          sources: ['us-const-amend-10'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The inversion, compared with the federal systems described elsewhere',
          text: 'This is the opposite emphasis from the German case set out on this site. In Germany, criminal law and court organisation sit under federal legislative power while the Länder administer. In the United States, each state legislates AND administers its own justice system — its own courts, its own police powers, its own prosecution, its own prisons — and federal criminal law is a comparatively narrow overlay of federal offences. Recording California’s legislative competence over its courts as "exclusive-subnational", where a German Länd’s was "concurrent", is the model capturing that difference.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Two court systems',
              description:
                'The federal judiciary states that the federal government and each state government have their own separate court systems. Federal courts hear cases arising under the Constitution, federal law and treaties, disputes between states, admiralty, bankruptcy and habeas matters; state courts hear most criminal, contract, tort, family and probate cases.',
            },
            {
              term: 'Federal structure',
              description:
                'Created under Article III, the federal system runs from the U.S. district courts, through the U.S. courts of appeals, to the Supreme Court of the United States. This is set out on the courts module.',
            },
            {
              term: 'State variation',
              description:
                'Each state establishes its own courts through its own constitution and laws, and the systems vary. There is no single national template a state is required to follow.',
            },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Because most criminal law is state law, most of the justice system a person encounters — the police, the prosecutor, the trial court, the prison — is a state or local institution, not a federal one. The federal justice system is large and consequential, but it operates within enumerated federal competence rather than as the general criminal-justice system of the country.',
          claim: 'analysis',
          sources: ['us-const-amend-10', 'us-courts-comparing'],
        },
      ],
      uncertainty: [
        'The internal structure of any individual state’s justice system has not been researched.',
        'The relationship between state supreme courts and the federal courts on questions of federal law has not been described and requires its own sourcing.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in the United States',
      summary:
        'Why US policing is thousands of separately governed agencies rather than one force: federal agencies with defined roles, state police, elected sheriffs, municipal police, and tribal police.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [
        'us-bjs-csllea-2018',
        'us-bjs-agency-characteristics',
        'us-usmarshals-duties',
        'us-fbi-28usc533',
        'us-bia-pl280',
        'us-const-amend-10',
      ],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'US law enforcement is not a force but a field. In June 2018 the Bureau of Justice Statistics counted 17,541 general-purpose state and local law-enforcement agencies. About 67% were local (municipal) police departments, about 17% were sheriffs’ offices, and the remaining 15% were primary state, tribal, special-jurisdiction agencies, constables and marshals. Federal agencies operate alongside all of these.',
          claim: 'fact',
          sources: ['us-bjs-csllea-2018'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Elected local law enforcement',
          text: 'One feature has no equivalent in the French or German systems described on this site: the sheriff is normally an elected official. The Bureau of Justice Statistics states that the head of a sheriff’s office "is a sheriff who is usually an elected official", with countywide jurisdiction, empowered by the state to serve counties and independent cities. An elected sheriff answers to a county electorate, not to a state or federal chain of command — which is part of why the system is so decentralised, and why "who does the sheriff report to?" often has no vertical answer.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Federal agencies (defined roles, not general jurisdiction)',
              description:
                'Federal law-enforcement authority is tied to federal offences. The statutory basis for federal investigators (28 U.S.C. § 533) authorises officials "to detect and prosecute crimes against the United States". The U.S. Marshals Service is the enforcement arm of the federal courts — protecting the federal judiciary, apprehending federal fugitives, and transporting federal prisoners — and it ASSISTS state and local agencies with fugitives rather than commanding them.',
            },
            {
              term: 'State police',
              description:
                'Each state may maintain its own police or highway patrol under its own law. These are state institutions; they are not branches of a federal force and they do not command local police.',
            },
            {
              term: 'Sheriffs and municipal police',
              description:
                'Below the state level, sheriffs (usually elected, countywide) and municipal police departments do most day-to-day policing. Their powers derive from state and local law and vary between and within states.',
            },
            {
              term: 'Tribal police',
              description:
                'Tribal nations maintain their own law enforcement as an exercise of inherent sovereignty. Their jurisdiction turns on Indian country, on whether Public Law 280 applies, and on federal law; it is addressed with care below and is not a subordinate local arrangement.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Why "the FBI is in charge" is wrong',
          text: 'A common assumption is that federal agencies sit atop state and local police. They do not. The Tenth Amendment leaves general policing to the states, federal investigative authority reaches "crimes against the United States" rather than all crime, and the Marshals’ relationship to local agencies is assistance, not command. No source read for this pilot establishes any federal power to direct state or local police. Cooperation across levels is common; a chain of command across them is not the structure.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Tribal jurisdiction is not a local carve-out',
          text: 'The Bureau of Indian Affairs records that tribal courts and tribal authority operate over "Indian country", that Public Law 280 (1953) transferred certain criminal and civil jurisdiction to named states — Alaska, California, Minnesota, Nebraska, Oregon and Wisconsin, each with exceptions — without terminating tribal jurisdiction, and that this jurisdiction may be exercised concurrently. The law did not give those states general regulatory or taxing power over tribes. Tribal law enforcement is an exercise of inherent sovereignty, not a delegation from the state it sits within.',
          // Reference: Public Law 280 concurrent-jurisdiction structure.
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes constitutional allocation, institutional status and the fragmentation of US policing. It does not describe deployment, tactics, surveillance capability, jurisdictional gaps that could be exploited, checkpoint procedure or investigative countermeasures, and it will not.',
        },
      ],
      uncertainty: [
        'The statutory competences of individual federal agencies (FBI, DEA, ATF and others) have not been researched beyond the general investigative basis in 28 U.S.C. § 533.',
        'No individual state, county or municipal police organisation has been researched.',
        'The detailed allocation of criminal jurisdiction in Indian country — including the Major Crimes Act, the effect of Public Law 280 in specific states, and recent Supreme Court decisions — has not been researched and is not stated.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in the United States',
      summary:
        'The two separate court systems of the United States — federal and state — how the federal system is structured, and why most cases are heard in state courts.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['us-courts-comparing', 'us-const-amend-10'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The United States has two court systems, not one. The federal judiciary states plainly that the federal government and each of the state governments have their own court systems. Which system hears a case depends chiefly on the law at issue.',
          claim: 'fact',
          sources: ['us-courts-comparing'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'The federal courts',
              description:
                'Established under Article III of the Constitution, the federal system runs from the U.S. district courts (the trial courts), through the U.S. courts of appeals, to the Supreme Court of the United States at its head. Federal courts hear cases involving the Constitution, federal laws and treaties, disputes between states, ambassadors, admiralty, bankruptcy and habeas corpus.',
            },
            {
              term: 'The state courts',
              description:
                'Each state establishes its own courts through its own constitution and laws. Most have a court of last resort (often called a supreme court), commonly with intermediate appellate courts and trial courts below. State courts hear most criminal cases, most contract and tort cases, and family and probate matters.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Most cases are state cases',
          text: 'Because most criminal and civil law is state law, most litigation — including most criminal prosecutions — takes place in state courts, not federal ones. The federal courts are powerful and their reach on federal questions is decisive, but they are not the ordinary courts of the country in the way a unitary state’s national courts are.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'State systems are not copies of the federal one',
          text: 'The federal three-tier shape is not a template the states are required to follow. State court structures vary in the number of tiers, the names of the courts, and how judges reach the bench (some elected, some appointed). This page describes the federal structure and the fact of state variation; it does not describe any individual state’s court system, which would require that state’s own sources.',
        },
      ],
      uncertainty: [
        'The court structure of any individual state, including the two sample states, has not been researched.',
        'The specialised federal courts, and the routes by which state cases reach the Supreme Court on federal questions, have not been researched and are not described.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in the United States',
      summary:
        'Federal prosecutors appointed by the President, state and local prosecutors organised by each state and often elected — and why there is no single national prosecution service.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['us-attorneys-28usc541-547', 'us-bjs-prosecutors', 'us-const-amend-10'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'There is no single prosecution service in the United States. Prosecution is split between the federal system and the states, and within the states it is organised locally.',
          claim: 'analysis',
          sources: ['us-const-amend-10'],
        },
        {
          kind: 'paragraph',
          text: 'Federal prosecution is conducted by the United States Attorneys. Under 28 U.S.C. § 541, the President appoints, with the advice and consent of the Senate, a United States attorney for each judicial district, for a four-year term and subject to removal by the President. Under 28 U.S.C. § 547, each United States attorney is to prosecute "for all offences against the United States" within the district — that is, federal offences.',
          claim: 'fact',
          sources: ['us-attorneys-28usc541-547'],
        },
        {
          kind: 'paragraph',
          text: 'State and local prosecution is organised separately by each state, in the executive branch of state government, and handles the great majority of criminal cases. The Bureau of Justice Statistics records that the chief local prosecutor — "also referred to as the district attorney, county attorney, commonwealth attorney, or state’s attorney" — represents the state in criminal cases, is "answerable to the public as an elected or appointed public official", and holds broad discretion over who is charged.',
          claim: 'fact',
          sources: ['us-bjs-prosecutors'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Not every prosecutor is a "district attorney", and many are elected',
          text: 'The title varies by state — district attorney, county attorney, commonwealth’s attorney, state’s attorney — and so does the selection method: most chief local prosecutors are locally elected, though some are appointed. This is a sharp contrast with the appointed federal United States Attorneys, and with the career prosecution services of France and Germany described elsewhere on this site. Forcing all of them into one label, or into the French or German model, would misdescribe the office.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The relationship between United States Attorneys and the Attorney General and Department of Justice, and the degree of independence of elected local prosecutors, are important questions this pilot has not researched from primary sources. The page states who is appointed or elected and what they prosecute; it does not characterise the independence of either.',
        },
      ],
      uncertainty: [
        'The relationship between United States Attorneys and the Department of Justice hierarchy has not been researched from primary sources.',
        'The proportion of chief local prosecutors who are elected rather than appointed has not been sourced to a figure and is stated only qualitatively.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in the United States',
      summary:
        'Who investigates crime in a country with no national police: state and local agencies for most crime, federal investigators for federal offences, and the prosecutor’s role.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [
        'us-fbi-28usc533',
        'us-usmarshals-duties',
        'us-bjs-csllea-2018',
        'us-const-amend-10',
      ],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Most criminal investigation in the United States is done by state and local agencies — the 17,541 general-purpose state and local law-enforcement agencies counted by the Bureau of Justice Statistics — because most crime is a matter of state law. There is no national police force with general investigative authority over all crime.',
          claim: 'fact',
          sources: ['us-bjs-csllea-2018', 'us-const-amend-10'],
        },
        {
          kind: 'paragraph',
          text: 'Federal investigative authority is tied to federal offences. The statutory basis for federal investigators (28 U.S.C. § 533) authorises the appointment of officials "to detect and prosecute crimes against the United States", and preserves the investigative authority assigned by law to other agencies. Federal investigators therefore work within enumerated federal competence rather than across all crime.',
          claim: 'fact',
          sources: ['us-fbi-28usc533'],
        },
        {
          kind: 'paragraph',
          text: 'The U.S. Marshals Service, the enforcement arm of the federal courts, is the federal government’s primary agency for fugitive investigations and holds the broadest arrest authority among federal law-enforcement agencies; it assists state and local agencies in locating and apprehending their most violent fugitives. Assistance across levels is routine; a command relationship across them is not.',
          claim: 'fact',
          sources: ['us-usmarshals-duties'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The consequence of fragmentation',
          text: 'Because investigative responsibility is split across the federal government and thousands of state and local agencies, coordination is a standing feature of US criminal investigation rather than an exception — and its absence, at the seams between jurisdictions, is a recurring subject of official inquiry. This page states the structural allocation; it does not describe investigative methods, and it does not identify where jurisdictional seams could be exploited.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who holds investigative responsibility and the safeguard that federal authority is tied to federal offences. It does not describe investigative technique, surveillance capability, evidential thresholds, or anything that would help a person anticipate, frustrate or evade an investigation — including any exploitation of the gaps between overlapping jurisdictions.',
        },
      ],
      uncertainty: [
        'The role of the grand jury, and of judicial authorisation for investigative measures, has not been researched from primary sources and is not described.',
        'The specific investigative jurisdiction of individual federal agencies has not been enumerated.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in the United States',
      summary:
        'Why US incarceration is many systems rather than one, the difference between prisons and jails, and a properly scoped figure for the prison population.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['us-const-amend-10', 'us-bjs-prisoners-2023'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [US_PRISON_POPULATION],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Incarceration in the United States is administered at more than one level, and by many separate authorities. Each state runs its own prison system under its own law; the federal Bureau of Prisons runs the federal system; and counties and cities run local jails. Reserved state powers under the Tenth Amendment put the general administration of criminal punishment with the states.',
          claim: 'fact',
          sources: ['us-const-amend-10', 'us-bjs-prisoners-2023'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Prisons and jails are not the same thing',
          text: 'This distinction is essential to reading any US incarceration figure. PRISONS hold people under the jurisdiction of state or federal correctional authorities, typically serving sentences of more than a year. JAILS are locally run and hold a separate population — people awaiting trial and those serving short sentences. The Bureau of Justice Statistics counts them in separate series. A "prison population" figure is therefore never the total number of people incarcerated in the country.',
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The prison population, stated with its limits',
          text: 'At yearend 2023 the Bureau of Justice Statistics recorded 1,254,200 people under the jurisdiction of state and federal prison authorities, of whom 143,300 were under the Federal Bureau of Prisons — meaning about 1.1 million were in state systems, not federal (Prisoners in 2023, reference date 31 December 2023). Four qualifications travel with that figure. It excludes local jails entirely, so it is not the total incarcerated population. It aggregates fifty separately administered state systems plus the federal one and describes none individually. It counts legal jurisdiction over a prisoner rather than physical custody, and the two differ. And it is not a rate and supports no comparison with any other country.',
        },
        {
          kind: 'paragraph',
          text: 'Because prison administration is a state function, conditions, regimes and organisation differ between the states, and a national total is a starting point for a state-level question rather than an answer to it. This pilot has researched no individual state’s corrections system and describes none.',
          claim: 'analysis',
          sources: ['us-const-amend-10'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'Local jails as a system, probation and parole, community supervision, the death penalty (which varies by state and by the federal government), prison oversight and inspection, and juvenile justice have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'No individual state corrections system has been researched.',
        'Local jail populations, probation and parole are named but not described.',
        'The legislative-competence position for corrections is recorded per jurisdiction in the model, but the detailed federal/state division of correctional law has not been researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for the United States',
      summary:
        'Every source used for the United States pages, what each supports, how it was verified, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [
        'us-const-amend-10',
        'us-courts-comparing',
        'us-usmarshals-duties',
        'us-attorneys-28usc541-547',
        'us-fbi-28usc533',
        'us-bjs-csllea-2018',
        'us-bjs-agency-characteristics',
        'us-bjs-prosecutors',
        'us-bia-pl280',
        'us-dc-home-rule',
        'us-bjs-prisoners-2023',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The United States pages rest on eleven sources: the Tenth Amendment, four provisions of the United States Code, the federal judiciary’s own account of court structure, the U.S. Marshals Service, four Bureau of Justice Statistics publications, a Bureau of Indian Affairs statement on Public Law 280, and the Council of the District of Columbia. Each was read directly and confirmed on 24 July 2026.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Why some federal texts are cited from Cornell rather than the agency',
          text: 'justice.gov and fbi.gov return an error to an automated request while serving their pages to a browser — the same bot-wall pattern documented for French legal sources. Where the enacted statutory text was needed (the appointment and duties of United States Attorneys, the basis for federal investigators), it is cited from the United States Code as reproduced verbatim by the Legal Information Institute at Cornell Law School. The enacted text is authoritative regardless of who reproduces it, and each record says where it was read.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/united-states-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in the United States',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Forensic services in the US are distributed across federal, state, county and municipal laboratories with no single national organisation, and no source on that structure has been read. A description assembled from general knowledge would assert a uniformity that does not exist, in a safety-sensitive section where the editorial policy forbids exactly that.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in the United States',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The federal border, customs, immigration and coast functions are carried by several distinct agencies whose statutory roles have not been researched. Collapsing customs, immigration enforcement, border policing and maritime security into one description is the specific error this module exists to prevent, so it is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in the United States',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Oversight in the US is as fragmented as the institutions it watches — federal inspectors general, state and local mechanisms, courts, civilian review boards that exist in some cities and not others, and elections themselves as a form of accountability for sheriffs and prosecutors. A single national oversight page would imply a uniform national model that does not exist, and none of these mechanisms has been researched to the standard required.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of the United States',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'US institutional history is inseparable from the history of slavery, Reconstruction, segregation, and the treatment of Native nations, and cannot be written responsibly from general knowledge. It requires archival and scholarly sources not consulted here, and a national summary would erase exactly the state, tribal, constitutional and racial complexity that makes the history matter.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for the United States',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and jurisdiction. The dated facts established in this pilot — the Tenth Amendment (1791), Public Law 280 (1953), the DC Home Rule Act (1973) — are not a timeline, and filling the gap with recalled dates is the decorative-timeline failure the standards warn against.',
    },
  ],
};
