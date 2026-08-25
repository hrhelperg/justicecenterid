import type { Guide } from '../types';

export const LAW_ENFORCEMENT_GUIDES: readonly Guide[] = [
  {
    slug: 'why-societies-need-law-enforcement',
    title: 'Why do societies need law enforcement?',
    shortTitle: 'Why law enforcement exists',
    question: 'Why do societies need law enforcement?',
    summary:
      'Law enforcement exists so that rules apply to everyone rather than to whoever can be compelled. This guide explains the function, the conditions that make it legitimate, and what it cannot do.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'police-and-law-enforcement-difference',
      'how-policing-institutions-changed',
      'why-justice-systems-need-oversight',
    ],
    sources: ['unodc-cpcj', 'udhr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['law-enforcement', 'police', 'public-safety', 'accountability'],
    definition: [
      {
        kind: 'paragraph',
        text: 'Law enforcement is the function of applying the law in practice: preventing and detecting offences, protecting people from harm, maintaining public order, and bringing matters into the justice system so they can be decided by a court.',
      },
      {
        kind: 'paragraph',
        text: 'A society needs this function because published rules do nothing on their own. Without a body responsible for applying them, rules bind only those who choose to be bound, and the people least willing to comply are the ones the rules most needed to reach.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The argument for law enforcement is easiest to see by considering its absence. If no institution is responsible for responding to harm, three things follow.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Response falls to those affected, which means resolution depends on private capacity — strength, money, or connections — rather than on what happened.',
          'Private response tends to escalate. Retaliation invites counter-retaliation, and there is no neutral point at which the sequence stops.',
          'Protection becomes something people buy rather than something they have, which reproduces the inequality the rules were supposed to override.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'A public enforcement body is the arrangement societies use to avoid those outcomes: a single institution, accountable to law, with the authority to intervene, so that response does not depend on the resources of the person harmed.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this argument does not establish',
        text: 'That a society needs an enforcement function says nothing about how much of it, in what form, with what powers, or how it should be held to account. Those are separate questions on which reasonable people and different countries disagree, and this platform takes no position on them.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Law enforcement bodies do considerably more than respond to crime, and the balance of the work is frequently misunderstood.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Response and public order',
            description:
              'Attending incidents, resolving immediate risk, and managing events and public gatherings.',
          },
          {
            term: 'Prevention',
            description:
              'Visible presence, problem-solving with other agencies, and work aimed at conditions rather than individual incidents.',
          },
          {
            term: 'Investigation',
            description:
              'Establishing what happened and gathering evidence to a standard that can be tested in court.',
          },
          {
            term: 'Protection and safeguarding',
            description:
              'Missing persons, people at risk, domestic abuse, and coordination with health and social services.',
          },
          {
            term: 'Regulatory and administrative work',
            description:
              'Road policing, licensing, permits, and statutory functions that are enforcement work without being crime work.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'What makes this function legitimate rather than simply powerful is the conditions attached to it: authority granted by law for stated purposes, thresholds that must be met before powers are used, records that allow decisions to be reviewed afterwards, and bodies with the standing to examine those records.',
      },
      {
        kind: 'paragraph',
        text: 'The United Nations crime prevention and criminal justice programme maintains international standards and norms in this area, spanning policing, courts, and prisons.',
        claim: 'fact',
        sources: ['unodc-cpcj'],
      },
    ],
    misconceptions: [
      {
        claim: 'Most police work is investigating serious crime.',
        reality:
          'Across many services the majority of demand is public order, road policing, missing persons, safeguarding, incidents involving mental health, and disputes that never become criminal cases. The investigative work that dominates fiction is a minority of the workload.',
      },
      {
        claim: 'Law enforcement decides who is punished.',
        reality:
          'In most systems enforcement bodies bring matters into the justice system; a prosecutor decides whether to charge and a court decides guilt and consequence. Where that separation exists, it is a deliberate safeguard rather than an inefficiency.',
      },
      {
        claim: 'More enforcement automatically means less crime.',
        reality:
          'The relationship between enforcement activity and harm is contested and studied, and depends on what is done, where, and alongside what else. This platform does not make effectiveness claims without a dated source of appropriate standing, because they are among the most commonly asserted and least commonly evidenced statements in this field.',
      },
      {
        claim: 'Officers can do whatever is necessary to prevent harm.',
        reality:
          'Powers are conditional. Stop, search, arrest, detention, and force each have a legal basis, a threshold, and a review mechanism. Officers routinely cannot do things that fictional officers do without comment, and acting outside those limits has consequences for the officer and frequently for the case.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The enforcement function is close to universal. Almost everything about how it is organised is not.',
      },
      {
        kind: 'list',
        items: [
          'Structure ranges from a single national service, to a national service alongside a military-status gendarmerie, to federal systems with thousands of separate local agencies.',
          'Whether officers routinely carry firearms is a national policy question answered differently across countries, including between neighbours.',
          'Whether enforcement bodies direct their own investigations or work under the direction of a prosecutor or investigating judge is one of the deepest structural differences between systems.',
          'Local accountability arrangements differ: elected officials, appointed boards, ministry oversight, or municipal government.',
          'Which functions belong to policing at all varies — traffic, immigration, customs, coast guard, and civil protection sit inside the police in some countries and in entirely separate institutions in others.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Because enforcement bodies hold powers that private people do not, the same legal framework that grants those powers also constrains them. The constraint and the power are created by the same instrument.',
      },
      {
        kind: 'list',
        items: [
          'Powers must be exercised for the purpose for which they were granted, and at the threshold the law specifies.',
          'Intrusive steps generally require authorisation from outside the immediate team — a supervisor, a prosecutor, or a judge.',
          'Encounters generate records: custody records, search records, interview recordings, and use-of-force reports.',
          'Complaints can be made to bodies outside the organisation, with powers that vary between investigating directly and reviewing an internal investigation.',
          'Evidence obtained in breach of the rules may be excluded, which links the constraint directly to the outcome of the case.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights sets out the declared principles most directly engaged by enforcement action, including the prohibition of arbitrary arrest and detention and the right to an effective remedy.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Enforcement powers and accountability mechanisms are frequently discussed as if they were in tension, with more of one meaning less of the other. Structurally they are the same instrument: the record that allows an officer’s decision to be reviewed is also the record that demonstrates the decision was justified. Both readers who distrust these institutions and readers who defend them tend to underestimate how much the paperwork is doing.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [the difference between police and law enforcement](/law-enforcement/police-and-law-enforcement-difference), [how policing institutions changed](/law-enforcement/how-policing-institutions-changed), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },

  {
    slug: 'police-and-law-enforcement-difference',
    title: 'What is the difference between police and law enforcement?',
    shortTitle: 'Police vs law enforcement',
    question: 'What is the difference between police and law enforcement?',
    summary:
      '“Police” is one kind of institution. “Law enforcement” is a function that many bodies perform. This guide explains the distinction and why it matters when comparing countries.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-societies-need-law-enforcement',
      'how-policing-institutions-changed',
      'what-is-a-criminal-investigation',
    ],
    sources: ['unodc-cpcj', 'met-police-act-1829'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 7,
    keyTerms: ['police', 'law-enforcement', 'gendarmerie', 'jurisdiction'],
    definition: [
      {
        kind: 'paragraph',
        text: 'Law enforcement is a function: applying and upholding the law. Police are one type of institution that performs it. The two words are used interchangeably in everyday speech, and the conflation causes real confusion when comparing countries.',
      },
      {
        kind: 'paragraph',
        text: 'Many bodies that are not police perform law enforcement: customs authorities, border agencies, tax and financial-crime investigators, environmental and food-safety regulators, immigration enforcement, coast guards, and prison and probation services. They hold specific statutory powers over a defined subject or territory.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The distinction exists because enforcement responsibility is divided by subject matter and by territory, not concentrated in a single organisation.',
      },
      {
        kind: 'paragraph',
        text: 'A general police service covers a defined area and a broad range of offences. A specialised body covers a narrow subject across a wider area, and typically holds powers a general police officer does not — to examine goods, to compel financial records, or to enter regulated premises.',
      },
      {
        kind: 'paragraph',
        text: 'Which arrangement a country uses reflects its own institutional history rather than a general principle. The creation of a full-time, centrally organised police force for the Metropolitan area of London by the Metropolitan Police Act 1829 is one frequently cited example of a general municipal model; it applied to that area, and says nothing about arrangements elsewhere.',
        claim: 'fact',
        sources: ['met-police-act-1829'],
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'General police services',
            description:
              'Broad jurisdiction over a defined territory: response, public order, investigation, and safeguarding. Usually the body a member of the public contacts first.',
          },
          {
            term: 'Gendarmeries and constabularies of military status',
            description:
              'Police forces that are formally part of, or historically derived from, the armed forces, typically with a rural or national remit alongside a civilian police service. Present in a number of countries and entirely absent from others.',
          },
          {
            term: 'Federal and national investigative agencies',
            description:
              'Bodies with jurisdiction over specified offences across a whole country, often those crossing internal borders or involving national institutions.',
          },
          {
            term: 'Border, customs, and immigration authorities',
            description:
              'Enforcement powers over the movement of people and goods. Immigration control and customs are distinct legal regimes, frequently exercised by different bodies at the same location.',
          },
          {
            term: 'Regulatory enforcement bodies',
            description:
              'Tax, competition, environmental, workplace-safety, and financial-conduct authorities, holding investigative powers within their subject area and often able to bring proceedings directly.',
          },
          {
            term: 'Sheriffs, marshals, and similar offices',
            description:
              'Offices whose function differs completely between countries — from an elected county law-enforcement head, to court security and warrant execution, to a largely ceremonial role. The name transfers between countries; the role does not.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has a single national police force.',
        reality:
          'Arrangements range from one national service to several national bodies with overlapping remits to thousands of separate local agencies. Assuming one structure and applying it to another country produces incorrect conclusions about who is responsible for what.',
      },
      {
        claim: 'A sheriff is the same thing everywhere.',
        reality:
          'The office differs fundamentally between countries: an elected county law-enforcement official in some, a court officer executing warrants in others, a judicial office in others again, and a ceremonial position elsewhere. This platform records institutional presence with an explicit state for "same name, different function" because the confusion is so common.',
      },
      {
        claim: 'Federal or national agencies outrank local police.',
        reality:
          'They usually have different jurisdiction rather than superior authority. A national agency may have exclusive competence over certain offences and none at all over others. Hierarchy between forces exists in some countries and not in others.',
      },
      {
        claim: 'A gendarmerie is a military unit doing police work.',
        reality:
          'Gendarmeries are police forces with military status, performing ordinary civilian policing under legal frameworks that in most cases resemble those of civilian police services. Their status affects the chain of command and discipline more than the day-to-day work.',
      },
    ],
    variation: [
      {
        kind: 'callout',
        variant: 'note',
        title: 'How this platform handles institutional names',
        text: 'We use each institution’s own name, with an English gloss on first use, and we never translate an institution into the nearest foreign equivalent. Calling a gendarmerie "the state police" or a prosecution service "the district attorney’s office" is an equivalence claim, and an equivalence claim needs a source like any other.',
      },
      {
        kind: 'list',
        items: [
          'Whether customs and immigration are one body or two, and whether either is part of the police, varies by country.',
          'Coast guards range from armed military services to civilian search-and-rescue and regulatory bodies.',
          'Railway, transport, military, and parliamentary police exist as separate forces in some countries and as units within a general service elsewhere.',
          'The power to prosecute sits with the enforcement body in some systems and exclusively with a separate prosecution service in others.',
          'Some countries have specialised anti-corruption bodies with police powers; others handle the same offences through general police and prosecutors.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'International standards-and-norms work in crime prevention and criminal justice spans this whole institutional landscape rather than police services alone.',
        claim: 'fact',
        sources: ['unodc-cpcj'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The distinction matters for accountability as much as for description. Different enforcement bodies are usually overseen by different mechanisms, and a complaint sent to the wrong one may simply be returned.',
      },
      {
        kind: 'list',
        items: [
          'A police complaints body typically has no jurisdiction over customs, tax, or immigration enforcement.',
          'Regulatory bodies are often overseen by a sector regulator, a tribunal, or an ombudsman rather than by a policing oversight body.',
          'Where several bodies operate at the same location, which one exercised a power determines which complaint route applies — and that is not always obvious to the person affected.',
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The practical cost of conflating "police" with "law enforcement" is not terminological. It is that people cannot identify which institution acted, which means they cannot identify which oversight body can examine it. Institutional literacy has a direct bearing on whether a right can be exercised.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why societies need law enforcement](/law-enforcement/why-societies-need-law-enforcement), [how policing institutions changed](/law-enforcement/how-policing-institutions-changed), and the [institution types reference](/institutions).',
      },
    ],
  },

  {
    slug: 'how-policing-institutions-changed',
    title: 'How have policing institutions changed over time?',
    shortTitle: 'How policing changed',
    question: 'How have policing institutions changed over time?',
    summary:
      'Policing shifted from community obligation and private arrangement towards permanent, salaried, publicly accountable organisations. This guide traces the structural changes and the caution needed in telling that story.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'mixed',
    historicalPeriod: 'Pre-modern to present',
    related: [
      'police-and-law-enforcement-difference',
      'why-societies-need-law-enforcement',
      'what-is-the-rule-of-law',
    ],
    sources: ['met-police-act-1829', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-07-23',
    publishedOn: '2026-07-23',
    reviewedOn: '2026-07-23',
    readingTimeMinutes: 8,
    keyTerms: ['police', 'law-enforcement', 'accountability', 'jurisdiction'],
    uncertainty: [
      'This guide describes structural changes that are well documented in general terms. It deliberately avoids assigning founding dates to "the first police force", because that claim depends entirely on the definition used and is contested between historians.',
      'Coverage of non-European policing history is a known gap in this platform. The examples available to us at this stage are weighted towards European institutional development, and that is a limitation of our current sourcing rather than a judgement about where the relevant history lies.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Over several centuries, responsibility for enforcing law in public shifted from shared community obligation and private arrangement towards permanent, salaried organisations with defined legal powers and, eventually, external accountability.',
      },
      {
        kind: 'paragraph',
        text: 'That is a description of a direction of travel, not a schedule. The change happened at different times, at different speeds, and through different institutions in different places, and in some places it went into partial reverse before continuing.',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Why we do not name the first police force',
        text: 'Whether an institution counts as a police force depends on which features you treat as essential: permanence, salary, uniform, public funding, preventive patrol, or legal accountability. Different definitions produce different "firsts" in different centuries and different countries. We describe the features instead, because the features are what actually changed.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The pressures that produced permanent policing institutions are reasonably well understood in general terms.',
      },
      {
        kind: 'list',
        items: [
          'Urban growth made arrangements based on mutual recognition within a small community unworkable at scale.',
          'Movement of people and goods meant that offences and offenders crossed the boundaries of local jurisdictions.',
          'States developed the administrative capacity to fund, organise, and supervise permanent bodies.',
          'Private and improvised enforcement produced outcomes that were inconsistent and open to purchase.',
          'Where military forces were used for public order, the results were frequently regarded afterwards as unacceptable, which was itself an argument for a distinct civil body.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Metropolitan Police Act 1829 is a documented example of the shift to a permanent, centrally organised force, in that case for the Metropolitan area of London. It illustrates the pattern; it did not create it, and it did not apply beyond the area it named.',
        claim: 'fact',
        sources: ['met-police-act-1829'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The useful way to read this history is as a series of features accumulating, in varying order, rather than as a single founding moment.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'From obligation to occupation',
            description:
              'Enforcement duties owed by residents in turn were replaced by full-time paid staff, which made training, standards, and discipline possible for the first time.',
          },
          {
            term: 'From private to public funding',
            description:
              'Payment by results, by fee, or by private subscription gave way to public funding, which changed whose interests enforcement served.',
          },
          {
            term: 'From reaction to prevention',
            description:
              'Patrol and visible presence were introduced as a deliberate preventive strategy rather than only responding after an event.',
          },
          {
            term: 'From local to layered jurisdiction',
            description:
              'National, regional, and specialised bodies were added above and alongside local forces to handle offences crossing boundaries.',
          },
          {
            term: 'From discretion to regulated power',
            description:
              'Statutory codification of powers to stop, search, arrest, and detain, with defined thresholds and record-keeping requirements.',
          },
          {
            term: 'From internal to external accountability',
            description:
              'Independent complaints bodies, inspectorates, and statutory oversight were added, in most cases substantially later than the powers they examine.',
          },
          {
            term: 'From general to specialised',
            description:
              'Distinct functions — investigation, forensics, custody, control rooms, financial crime, digital evidence — became separate professional disciplines.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Modern policing was invented in one country and copied everywhere.',
        reality:
          'Several models developed in parallel — municipal, national, gendarmerie, and colonial — and countries drew on more than one. Diffusion happened, including through colonial administration, but describing it as a single origin and a single line of copying flattens genuinely distinct traditions.',
      },
      {
        claim: 'Policing has continuously improved.',
        reality:
          'Capability, training, and accountability have expanded in many places, and there are also well-documented periods where policing institutions were used against political opponents or minority populations. Both belong in the same account; presenting either alone produces a story that will not survive contact with the sources.',
      },
      {
        claim: 'An institution founded centuries ago is the same institution today.',
        reality:
          'Continuity of name is not continuity of function, powers, or accountability. Institutions merge, are abolished and recreated, and change mandate completely while keeping a name. Continuity is a claim that needs evidence, not an assumption.',
      },
      {
        claim: 'Accountability mechanisms arrived with the powers.',
        reality:
          'In most systems, statutory powers substantially predate independent oversight of those powers. External complaints bodies and inspectorates are, in historical terms, recent additions.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Countries with a strong municipal tradition developed many small local forces; countries with a strong central-state tradition developed national ones. Both patterns persist.',
          'Gendarmerie models, in which a military-status force performs civilian policing, developed on a different institutional path from municipal policing and remain distinct.',
          'In many countries, policing institutions were established under colonial administration with priorities set by that administration, and the post-independence history of those institutions is a distinct subject requiring its own sources.',
          'Some countries reconstructed their policing institutions entirely after a change of political system, which makes claims of institutional continuity across that break particularly unsafe.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'International standards-and-norms work in this area is comparatively recent and continues to develop.',
        claim: 'fact',
        sources: ['unodc-cpcj'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The clearest way to read the history is through the gap between when a power was granted and when a mechanism to examine its use was created. That gap is usually measured in decades, and in several systems the mechanism arrived only after a documented failure made its absence untenable.',
      },
      {
        kind: 'paragraph',
        text: 'This is why safeguards that now appear ordinary — recorded interviews, custody records, disclosure obligations, independent complaint investigation — each have a specific history. They were introduced in response to identified problems, and understanding them as responses rather than as abstract courtesies explains why they are drafted as they are.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Institutional histories written by institutions tend to emphasise continuity and public service; histories written by their critics tend to emphasise control and coercion. Both draw on real evidence. The more useful question for a reader is narrower and answerable: what could this institution do at a given time, and who could examine whether it did so lawfully?',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [the difference between police and law enforcement](/law-enforcement/police-and-law-enforcement-difference), the [historical timeline](/timeline), and [the history section](/history).',
      },
    ],
  },

  /* ==========================================================================
     Wave 1 of the law-enforcement cluster (2026-08-10).

     Scope decisions are recorded in docs/research/law-enforcement-cluster-plan.md
     and docs/seo/law-enforcement-cluster-cannibalization.md. Two are load-bearing
     for the pages below:

       - Arrest and detention are ONE page, not two. The instrument that governs
         them treats them as one subject ("arbitrary arrest or detention"), and
         two pages would have restated each other.
       - Internal affairs, civilian oversight, complaints bodies and judicial
         supervision are ONE page. They are not four reader questions; they are
         four answers to "who can examine what the police did?".
     ========================================================================== */

  {
    slug: 'police-use-of-force',
    title: 'When may police use force?',
    shortTitle: 'Police use of force',
    question: 'When may police use force, and what limits apply?',
    summary:
      'Force is the most consequential thing an enforcement body does. This guide explains the international principles that govern it — necessity, proportionality and precaution — and why the limits are part of the power rather than an exception to it.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-societies-need-law-enforcement',
      'why-police-accountability-matters',
      'arrest-and-detention',
    ],
    sources: ['unodc-e4j-use-of-force', 'un-code-of-conduct-1979', 'udhr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    readingTimeMinutes: 9,
    keyTerms: ['police', 'law-enforcement', 'accountability', 'oversight'],
    uncertainty: [
      'This guide states the international framework. It does not state the legal test that applies in any particular country, because that test is set by domestic law and differs — sometimes substantially — between jurisdictions that have all accepted the same international principles.',
      'The primary instruments quoted here are published by OHCHR, whose site refuses automated access. The wording below is quoted as it appears in a United Nations Office on Drugs and Crime teaching module that reproduces it, and is attributed that way rather than to a copy we could not open.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Law-enforcement officials are, in most systems, permitted to use force that would be unlawful if used by anyone else. That permission is narrow, conditional, and defined by its purpose: force is available to achieve a lawful objective, and only to the extent that achieving it requires.',
      },
      {
        kind: 'paragraph',
        text: 'The international framework rests on three principles — necessity, proportionality and precaution. Necessity itself has three interrelated elements: a duty to use non-violent means wherever possible, a duty to use force only for a legitimate law-enforcement purpose, and a duty to use no more than the minimum force reasonable in the prevailing circumstances.',
        claim: 'fact',
        sources: ['unodc-e4j-use-of-force'],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This is an explanation of an institutional framework, not legal advice and not guidance for any encounter. It describes the standards against which a use of force is judged afterwards; it does not tell you what the law permits where you live, and it deliberately contains no operational or tactical detail.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason force is regulated so tightly is that it is the point at which the state acts on a person directly and irreversibly. A wrongful arrest can be undone by a court. A wrongful use of force frequently cannot be undone at all.',
      },
      {
        kind: 'paragraph',
        text: 'The framework therefore does not treat force as a tool to be used efficiently. It treats it as a last resort whose use has to be justified afterwards, which is why the rules are written as duties on the official rather than as entitlements.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The 1979 United Nations Code of Conduct for Law Enforcement Officials, a General Assembly resolution of 17 December 1979, is the earliest of the two central instruments in this area. It is a resolution rather than a treaty, so it binds no state by itself.',
        claim: 'fact',
        sources: ['un-code-of-conduct-1979'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The duty to try something else first is stated in the plainest terms the instruments contain.',
      },
      {
        kind: 'paragraph',
        text: 'Principle 4 of the 1990 Basic Principles provides that officials "shall, as far as possible, apply non-violent means before resorting to the use of force and firearms", and "may use force and firearms only if other means remain ineffective or without any promise of achieving the intended result". The non-violent means contemplated are ordinary ones: the visible symbols of police authority, body language, and verbal persuasion.',
        claim: 'fact',
        sources: ['unodc-e4j-use-of-force'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Legitimate purpose',
            description:
              'Article 3 of the 1979 Code of Conduct permits force only "to the extent required for the performance of their duty". Its official commentary reads that as no more force than "is reasonably necessary under the circumstances" — for example to prevent crime or to effect a lawful arrest.',
          },
          {
            term: 'Minimum reasonable force',
            description:
              'When force is necessary at all, it must be the least that will do. The requirement is not that some force was justified, but that this much force was.',
          },
          {
            term: 'The need can expire',
            description:
              'No additional force is lawful once the need has passed — for instance once a person is safely and lawfully detained. Force is licensed by a continuing purpose, not by the earlier existence of one.',
          },
          {
            term: 'Precaution',
            description:
              'Planning and equipment are part of the assessment, not preliminaries to it. Principle 3 addresses self-defensive equipment such as shields, helmets and bulletproof vests, on the reasoning that better-protected officials need to resort to force less often.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The same framework states four things force may never be: used vindictively, used as a form of extrajudicial punishment, applied in a discriminatory manner, or applied to a person offering no resistance.',
        claim: 'fact',
        sources: ['unodc-e4j-use-of-force'],
      },
      {
        kind: 'paragraph',
        text: 'The obligation runs in both directions. Officials are themselves entitled to the protection of their rights to life and to bodily integrity, which is part of why equipment and planning are treated as duties of the institution rather than choices of the individual.',
        claim: 'fact',
        sources: ['unodc-e4j-use-of-force'],
      },
    ],
    misconceptions: [
      {
        claim:
          'If an officer was legally entitled to use force, the amount used does not matter.',
        reality:
          'Entitlement and extent are separate questions, and the second is where most assessments actually turn. A use of force can begin lawfully and become unlawful — most obviously once the need that justified it has passed.',
      },
      {
        claim:
          'The rules are the same everywhere because the international standards are the same.',
        reality:
          'The international principles are widely shared; the domestic tests that apply to a specific incident are not. Countries that all accept necessity and proportionality still differ on thresholds, on when firearms may be drawn, on reporting duties, and on who reviews the decision afterwards.',
      },
      {
        claim: 'Use-of-force rules exist to protect the public from the police.',
        reality:
          'They do that, and they also define the officer’s protection. A use of force that meets the standard is defensible precisely because a standard exists; without one, every incident would be judged by hindsight and public reaction.',
      },
      {
        claim: 'Compliance with the standard is a matter of the officer’s judgement alone.',
        reality:
          'The framework places duties on the institution as well: equipment, training, planning, and the reporting that allows a decision to be reviewed. Treating force as purely an individual decision is one of the commonest ways an institutional failure is recorded as a personal one.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Almost everything below the level of the principles varies, and the variation is not cosmetic.',
      },
      {
        kind: 'list',
        items: [
          'Whether officers routinely carry firearms at all is a national policy question answered differently by neighbouring countries with similar legal traditions.',
          'The domestic legal test — how "necessary" and "proportionate" are defined, and against whose perspective they are measured — is set by national law and case law.',
          'What must be reported after force is used, to whom, and within what period, differs widely; so does whether an external body is notified automatically.',
          'Which body reviews a serious incident ranges from the officer’s own service, to a separate national investigative body, to a prosecutor or investigating judge.',
          'Regional instruments add their own standards. The 2001 European Code of Police Ethics, for example, provides that police may use force "only when strictly necessary and only to the extent required to obtain a legitimate objective".',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Because the domestic test is what governs any actual incident, the country pages are the right place to look for a specific system — for example [law enforcement in France](/countries/france/law-enforcement), [in Japan](/countries/japan/law-enforcement), or [in the United States](/countries/united-states/law-enforcement).',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A standard that is never checked is a statement of intent. What converts the use-of-force framework into an accountability mechanism is the record: what happened, what was tried first, what was decided, and by whom.',
      },
      {
        kind: 'list',
        items: [
          'Reporting requirements are what make review possible at all; an unreported use of force is not reviewable regardless of whether it was justified.',
          'The Universal Declaration of Human Rights states the declared principles most directly engaged, including the right to an effective remedy.',
          'Serious incidents are, in many systems, removed from the employing service and given to an external investigator — a design choice examined in [how police are held to account](/law-enforcement/how-police-are-held-to-account).',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The right to an effective remedy for acts violating fundamental rights is stated in the Universal Declaration of Human Rights.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Use of force is usually debated as a question about individual officers in individual moments. The instruments read differently: most of what they require happens before the moment — equipment, planning, training — and after it, in reporting and review. That framing is uncomfortable for both the institutions, because it makes preventable outcomes institutional, and for their critics, because it makes the fix administrative rather than dramatic.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why police accountability matters](/law-enforcement/why-police-accountability-matters), [arrest and detention](/law-enforcement/arrest-and-detention), and [why societies need law enforcement](/law-enforcement/why-societies-need-law-enforcement).',
      },
    ],
  },

  {
    slug: 'arrest-and-detention',
    title: 'What are arrest and detention?',
    shortTitle: 'Arrest and detention',
    question: 'What is the difference between arrest and detention, and what limits both?',
    summary:
      'Arrest is an act; detention is the state that follows it. This guide explains the distinction, the safeguards attached to each, and why the specific thresholds are set by national law rather than by any universal rule.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['police-use-of-force', 'how-police-are-held-to-account', 'what-is-due-process'],
    sources: ['udhr', 'iccpr', 'uk-pace-1984', 'unodc-e4j-police-accountability'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    readingTimeMinutes: 9,
    keyTerms: ['law-enforcement', 'police', 'due-process', 'jurisdiction'],
    uncertainty: [
      'The thresholds that actually decide whether an arrest is lawful — what suspicion is required, how long a person may be held before seeing a court, what must be recorded — are set by domestic law and differ substantially between countries. This guide states the shape of the safeguards, not the test in any jurisdiction.',
      'Terms in this area translate badly. "Arrest", "detention", "custody" and "remand" do not map cleanly between legal systems, and a word that names a specific procedure in one country may be a general description in another.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Arrest is an act: the moment a person is deprived of their liberty by an official exercising a legal power. Detention is the continuing state that follows — being held, somewhere, by someone, under some authority.',
      },
      {
        kind: 'paragraph',
        text: 'The distinction matters because different safeguards attach to each. The safeguards on arrest ask whether the deprivation was justified at the moment it began; the safeguards on detention ask repeatedly whether it remains justified, and for how much longer.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Not legal advice, and not jurisdiction-specific',
        text: 'This page explains an institutional concept. It does not state the law of any country, does not tell you what your rights are in a particular place, and is not a substitute for advice from a qualified professional in the relevant jurisdiction.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Depriving someone of liberty is, after the use of force, the most serious ordinary power an enforcement body holds. It is also the power most easily used for purposes other than the one it was granted for — to punish without trial, to obtain a statement, or to remove someone from circulation.',
      },
      {
        kind: 'paragraph',
        text: 'That is why the safeguards are structured around time and review rather than around the initial decision alone. An arrest is a single judgement made quickly, often on incomplete information; the framework accepts that and compensates by requiring the judgement to be re-examined by someone else, soon, and in a form that leaves a record.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle that no one shall be subjected to arbitrary arrest, detention or exile, alongside the right to an effective remedy.',
        claim: 'fact',
        sources: ['udhr'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Across systems that differ in almost every detail, the safeguards tend to appear in the same five places.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A legal basis, stated in advance',
            description:
              'The power must come from law, and the grounds must be ones the law recognises. "There was a good reason" is not a legal basis; it is a description of one.',
          },
          {
            term: 'A threshold of suspicion',
            description:
              'Some level of objective justification is required before liberty may be removed. The level, and the words used to describe it, are set nationally — which is why the terminology in this area travels so badly.',
          },
          {
            term: 'Being told why',
            description:
              'A person deprived of liberty is generally entitled to be told the reason. Without it, none of the other safeguards can be exercised, because the person cannot challenge a reason they have not been given.',
          },
          {
            term: 'A time limit and external review',
            description:
              'Police detention is bounded, and continuing it beyond a point normally requires authorisation from outside the investigating team — a senior officer, a prosecutor, or a court. This is the safeguard that most reliably distinguishes systems.',
          },
          {
            term: 'A record',
            description:
              'Times, decisions, and the identity of the decision-maker are recorded. The record is what makes every preceding safeguard checkable rather than asserted.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The International Covenant on Civil and Political Rights is the treaty in which many of these guarantees are expressed for states that have ratified it; it binds only those states, and says nothing about how any individual state applies it.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'paragraph',
        text: 'How much of this is left to statute rather than practice is itself a design choice. In England and Wales, for example, stop and search, entry and search, arrest, detention, and the questioning and treatment of detained persons are each dealt with in separate Parts of a single named Act, the Police and Criminal Evidence Act 1984, with codes of practice made under it.',
        claim: 'fact',
        sources: ['uk-pace-1984'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Why one country appears here as an example',
        text: 'The Act above is cited to show that these powers are typically conferred and bounded by a named domestic statute — not to suggest its rules apply anywhere else. They do not apply in Scotland or Northern Ireland, which have separate arrangements, let alone outside the United Kingdom.',
      },
    ],
    misconceptions: [
      {
        claim: 'Arrest and detention are two words for the same thing.',
        reality:
          'They are an act and a state. A person can be arrested and released within minutes, or detained for a period during which the justification has to be revisited more than once. Most of the safeguards that matter attach to the second, not the first.',
      },
      {
        claim: 'Being arrested means being charged.',
        reality:
          'In most systems arrest is an investigative step, not an accusation that has been tested. Whether a charge follows is usually a separate decision, frequently taken by a different person — in many countries a [prosecutor](/prosecution/what-does-a-prosecutor-do) rather than the arresting body.',
      },
      {
        claim: 'The thresholds are the same everywhere, just translated differently.',
        reality:
          'They are not. Standards of suspicion, maximum periods in police custody, and the point at which a court must become involved differ substantially between countries — including between countries that have ratified the same treaties.',
      },
      {
        claim: 'If a detention was lawful when it began, it stays lawful.',
        reality:
          'Lawfulness is a continuing requirement. Detention that was justified on arrest can become unlawful because its purpose has been achieved, because a time limit has expired, or because the authorisation that extended it was never obtained.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether a prosecutor, an investigating judge, or the police themselves direct the investigation changes who authorises continued detention and when.',
          'Maximum periods in police custody before a person must be brought before a judicial authority differ by country, and often by offence within a country.',
          'Some systems draw a sharp line between administrative detention and criminal detention, with different rules and different oversight bodies; others do not use the distinction at all.',
          'What must be recorded, and whether interviews are audio or video recorded, is a matter of national law and practice rather than international requirement.',
          'Whether a lawyer may be present during questioning, and from what moment, is one of the deepest structural differences between systems.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'For how these choices are actually made in a given system, the country dossiers are the appropriate place — for example [law enforcement in Germany](/countries/germany/law-enforcement) or [in France](/countries/france/law-enforcement).',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Detention is the setting in which record-keeping does the most work, because the person affected is least able to evidence what happened to them and the institution holds all of the documentation.',
      },
      {
        kind: 'paragraph',
        text: 'United Nations guidance on police accountability treats this as a matter of institutional design rather than individual conduct: because statutory provisions are often insufficient for the day-to-day exercise of powers, services are expected to issue professional standards giving practical guidance — and its own worked example of where such guidance is needed is arrest and detention procedure.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
      {
        kind: 'list',
        items: [
          'Custody records establish times, decisions and decision-makers, and are frequently the only contemporaneous account.',
          'Independent inspection of places of detention exists in many systems as a standing function rather than a response to complaints.',
          'Evidence obtained through a breach of detention safeguards may be excluded, which links the safeguard directly to the outcome of the case.',
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The safeguards on detention are often described as protections against wrongdoing. Structurally they are better read as protections against a specific failure mode: the investigating body being the only party with an account of what happened. Almost every safeguard here — the record, the clock, the external authorisation — exists to introduce a second party into a situation that would otherwise have only one.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [police use of force](/law-enforcement/police-use-of-force), [what is due process](/justice/what-is-due-process), and [what is a criminal investigation](/investigations/what-is-a-criminal-investigation).',
      },
    ],
  },

  {
    slug: 'why-police-accountability-matters',
    title: 'Why does police accountability matter?',
    shortTitle: 'Why police accountability matters',
    question: 'Why does police accountability matter, and what is it actually for?',
    summary:
      'Accountability is usually framed as a response to misconduct. This guide explains the structural argument: enforcement bodies hold discretionary powers that cannot be fully specified in advance, and accountability is the mechanism that makes discretion answerable.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-police-are-held-to-account',
      'police-use-of-force',
      'why-justice-systems-need-oversight',
    ],
    sources: ['unodc-e4j-police-accountability', 'un-rule-of-law', 'udhr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    readingTimeMinutes: 8,
    keyTerms: ['accountability', 'oversight', 'police', 'rule-of-law'],
    uncertainty: [
      'This guide explains why accountability mechanisms are created and what they are designed to do. It makes no claim that they work, in general or in any particular country: whether a given mechanism is effective is an empirical question requiring evidence about that mechanism, and this platform does not assert it without one.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Police accountability is the set of arrangements by which an enforcement body, and the individuals in it, can be required to explain and justify what they did — to someone with the standing to ask, and with consequences attached to the answer.',
      },
      {
        kind: 'paragraph',
        text: 'It is broader than discipline and broader than complaints. United Nations guidance frames it across three stages: before the act, during it, and after it — ex-ante, ongoing and ex-post oversight. Most public discussion concerns only the third.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The structural argument does not depend on any assumption about how often police do wrong. It depends on two features of the work that are true even where everyone acts in good faith.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Enforcement bodies hold powers that private people do not — to stop, to search, to detain, to use force — and those powers are exercised on people who cannot decline them.',
          'The powers cannot be fully specified in advance. Officers necessarily hold wide discretion, because the situations are too varied for a rule to cover each one.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Discretion that cannot be eliminated has to be made answerable instead. United Nations guidance makes this point directly: legal provisions alone are often insufficient for the day-to-day exercise of policing powers, which is why services are expected to develop professional standards and codes of ethics that guide the exercise of discretion in practice.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
      {
        kind: 'paragraph',
        text: 'The United Nations working definition of the rule of law includes accountability to law and equal enforcement of it. That is one institution’s formulation, and it is attributed here as such rather than presented as the definition.',
        claim: 'fact',
        sources: ['un-rule-of-law'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Reading accountability across the three stages makes visible how much of it happens before anything goes wrong.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Before the act (ex-ante)',
            description:
              'The legal basis for powers, the professional standards and codes of conduct that translate law into practical guidance, the code of ethics addressing situations where rules run out, training, and the equipment decisions that shape what options an officer has.',
          },
          {
            term: 'During the act (ongoing)',
            description:
              'Supervision, authorisation requirements for intrusive steps, and the contemporaneous records — custody records, search records, recordings — that fix what happened while it is happening.',
          },
          {
            term: 'After the act (ex-post)',
            description:
              'Complaints, internal investigation, external review, judicial supervision, inspection, and prosecution where an offence is alleged. This is the part the public sees, and it is the last of three.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Codes of ethics exist for the residue that rules cannot reach. UNODC identifies the recurring dilemmas explicitly: the temptation to bend a rule in pursuit of what an officer perceives as a greater law-enforcement objective, and the use of deceptive interrogation tactics to extract information or a confession. A code of ethics addresses these by setting standards built on impartiality, fairness, equality, justice and honesty.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
    ],
    misconceptions: [
      {
        claim:
          'Accountability mechanisms exist because police are assumed to be untrustworthy.',
        reality:
          'The argument for them does not rest on any assumption about conduct. It rests on the combination of coercive power and unavoidable discretion, which would call for answerability even in an institution where nobody ever did anything wrong.',
      },
      {
        claim: 'The existence of a complaints body shows that a system is accountable.',
        reality:
          'It shows that a mechanism exists. Whether it has the power to investigate directly, whether it can compel evidence, whether its findings bind anyone, and whether it is resourced are separate questions — and the answers vary enormously between systems that all have such a body.',
      },
      {
        claim: 'Accountability is in tension with effective policing.',
        reality:
          'They are frequently the same artefacts. The record that allows a decision to be reviewed is also the record that demonstrates the decision was justified, and evidence gathered within the rules is the evidence that survives in court.',
      },
      {
        claim: 'Misconduct is either widespread or vanishingly rare.',
        reality:
          'Both claims are made confidently and neither is established in general. Prevalence is measurable only within a specific system, for a specific period, using a defined method — and this platform does not assert a figure without one.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Who the police answer to politically — a national ministry, a regional government, a municipality, an elected official, or a board — differs by country and often within one.',
          'Whether an external body investigates complaints itself or reviews an investigation conducted internally is one of the sharpest structural differences between oversight systems.',
          'Whether prosecutors or investigating judges supervise police investigative work varies, and where they do, a substantial part of accountability sits inside the ordinary criminal process rather than in a dedicated body.',
          'Inspectorates that examine institutional performance rather than individual cases exist in some systems and not in others.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Because these arrangements are country-specific, the dossiers are the right place to see one whole: for example [law enforcement in the United States](/countries/united-states/law-enforcement), a system with thousands of separate agencies, against [Japan](/countries/japan/law-enforcement), where policing is administered at prefectural level.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For an individual, accountability is only meaningful if it is reachable. That depends on knowing which body acted, which mechanism covers it, and what may be asked of it.',
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle of a right to an effective remedy for acts violating fundamental rights.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Accountability is usually discussed as though it were a synonym for punishment after a scandal. The framework treats it as mostly preventive — standards, supervision, authorisation, records — with sanction as the smallest and last component. That reframing is unwelcome in both directions: it denies critics the assumption that accountability means consequences for individuals, and it denies institutions the claim that having a complaints process is the same as being accountable.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how police are held to account](/law-enforcement/how-police-are-held-to-account), [why justice systems need oversight](/justice/why-justice-systems-need-oversight), and [police use of force](/law-enforcement/police-use-of-force).',
      },
    ],
  },

  {
    slug: 'how-police-are-held-to-account',
    title: 'How are police held to account?',
    shortTitle: 'How police are held to account',
    question:
      'Which bodies can examine what the police did, and what can each of them actually do?',
    summary:
      'Internal investigation, independent complaints bodies, inspectorates, prosecutors and courts examine police conduct in different ways and with different powers. This guide explains what each mechanism is for and why the differences between them matter to anyone trying to use one.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-police-accountability-matters',
      'police-use-of-force',
      'police-and-law-enforcement-difference',
    ],
    sources: ['unodc-e4j-police-accountability', 'udhr', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    readingTimeMinutes: 9,
    keyTerms: ['accountability', 'oversight', 'inspectorate', 'law-enforcement'],
    uncertainty: [
      'This guide describes categories of mechanism, not the arrangements of any country. The names used here are generic: a body called an "independent complaints commission" in one country may have powers that a similarly named body elsewhere does not.',
      'Nothing here asserts that any mechanism is effective. Design and performance are different questions, and the second requires evidence about a specific body over a specific period.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Several different bodies can examine police conduct, and they are not alternatives to one another. They ask different questions, hold different powers, and produce different kinds of outcome.',
      },
      {
        kind: 'paragraph',
        text: 'Internal control within the police service is, in United Nations framing, the first degree of control in any accountability system, and it operates both preventively and reactively rather than only after an allegation.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason more than one mechanism exists is that no single one can answer every question that arises about police conduct.',
      },
      {
        kind: 'list',
        items: [
          'Whether an officer broke a rule of the organisation is a disciplinary question, and the organisation is the body that can answer and act on it.',
          'Whether an officer committed a criminal offence is a question for prosecutors and courts, on the ordinary criminal standard, and cannot be resolved by an employer.',
          'Whether an institution has a pattern of problems is neither, and is answered by inspection or thematic review rather than by examining one case.',
          'Whether a person’s rights were breached may be a question for a court in proceedings the person brings themselves.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'A system that had only one of these would be unable to answer the others — which is why the mechanisms coexist rather than compete.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Internal control and professional standards',
            description:
              'The service’s own supervision, standards and internal investigation. Preventive as well as reactive, and the mechanism with the most direct access to records and personnel — and the one most exposed to the objection that an institution is examining itself.',
          },
          {
            term: 'Independent complaints bodies',
            description:
              'External bodies receiving complaints from the public. The decisive variable is whether the body investigates directly or reviews an investigation carried out by the police, and whether it can compel evidence and testimony.',
          },
          {
            term: 'Inspectorates',
            description:
              'Bodies examining institutional performance and compliance rather than individual cases. Their output is typically a published report about a service, not a finding about a person.',
          },
          {
            term: 'Prosecutorial and judicial supervision',
            description:
              'Where a prosecutor or investigating judge directs or supervises investigations, a large part of accountability sits inside the ordinary criminal process. Courts also supervise indirectly by excluding evidence obtained in breach of the rules.',
          },
          {
            term: 'Criminal prosecution',
            description:
              'Where conduct is alleged to be an offence, the ordinary criminal process applies, with the ordinary standard of proof. This is why a disciplinary finding and a criminal outcome can differ on the same facts without either being wrong.',
          },
          {
            term: 'Political and democratic accountability',
            description:
              'Ministries, municipalities, elected officials or boards answer for policing in a different register — budgets, priorities and appointments rather than individual incidents.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Underpinning all of them is the preventive layer: professional standards and codes of conduct that give practical guidance on exercising powers, because legal provisions alone are frequently insufficient for day-to-day practice.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
      {
        kind: 'paragraph',
        text: 'International standards-and-norms work in crime prevention and criminal justice spans this whole institutional landscape rather than police services alone.',
        claim: 'fact',
        sources: ['unodc-cpcj'],
      },
    ],
    misconceptions: [
      {
        claim: 'An "independent" oversight body always investigates complaints itself.',
        reality:
          'Many independent bodies principally review investigations carried out by the police, and only investigate the most serious matters directly — if any. The word in the title does not tell you which model applies.',
      },
      {
        claim: 'If no officer is prosecuted, the oversight body found nothing wrong.',
        reality:
          'Disciplinary breach and criminal offence are different findings on different standards, reached by different bodies. A sustained complaint with no prosecution is a coherent outcome, not a contradiction.',
      },
      {
        claim: 'One complaint route covers every enforcement body.',
        reality:
          'A police complaints body typically has no jurisdiction over customs, tax, immigration or regulatory enforcement. Where several bodies operate in the same place, which one acted determines which route applies — and that is often not obvious to the person affected.',
      },
      {
        claim: 'Internal investigation is worthless because the institution is judging itself.',
        reality:
          'It is the mechanism with the fastest access to records and the only one that can change supervision, training or procedure directly. Its structural weakness is real and is the reason external mechanisms exist alongside it — not instead of it.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether the external body investigates or reviews is the single largest difference between oversight systems, and it is not predictable from the body’s name.',
          'Powers to compel documents and testimony, to enter premises, and to require an officer to answer differ substantially.',
          'Whether findings are binding, advisory, or merely published varies, as does whether the complainant sees the outcome.',
          'Some systems concentrate oversight in one national body; others distribute it across regional or municipal bodies, so the applicable route depends on which force was involved.',
          'Where prosecutors direct investigations, much of what an external oversight body does elsewhere is instead done inside the criminal process.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The [institution types reference](/institutions) sets out how the bodies themselves differ, and the country dossiers show whole arrangements — for example [France](/countries/france) or [Germany](/countries/germany).',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The practical consequence for an individual is that identifying the right mechanism comes before using it. A complaint sent to a body without jurisdiction is not a weak complaint; it is one that will be returned.',
      },
      {
        kind: 'list',
        items: [
          'Establish which body acted — not which uniform was present, since several enforcement bodies may operate in the same location.',
          'Establish what is being alleged: a breach of internal standards, a criminal offence, or a breach of rights, since these go to different places.',
          'Time limits apply in many systems and differ between routes.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle of a right to an effective remedy by a competent tribunal for acts violating fundamental rights.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Debate about police oversight tends to concentrate on independence, as though independence alone determined whether a mechanism works. Powers matter at least as much: an independent body that can only review a file the police assembled is differently constrained from an internal unit that can compel testimony and seize records. Both facts belong in any honest description, and a system is best judged on the combination rather than on the label.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why police accountability matters](/law-enforcement/why-police-accountability-matters), [who investigates the police](/law-enforcement/who-investigates-police), and [independent police complaints bodies](/institutions/independent-police-complaints-body).',
      },
    ],
  },

  /* ==========================================================================
     WAVE 4 — the jurisdiction relationship cluster (2026-08-10).

     These are RELATIONSHIP guides, not institution pages. An institution page
     answers "what is a municipal police force?"; these answer "how does it
     relate to the national one, who controls it, and what happens when two
     agencies both have authority in the same street?".

     The characteristic failure of a comparative page in this area is
     generalising one country's arrangement into a rule, so every guide here
     carries typed countryExamples and counterExamples, each backed by a source
     scoped to that country.

     Scope decisions are in docs/research/local-municipal-policing-cluster-plan.md
     and docs/seo/knowledge-expansion-wave-4-cannibalization.md.
     ========================================================================== */

  {
    slug: 'police-jurisdiction',
    title: 'What does police jurisdiction mean?',
    shortTitle: 'Police jurisdiction',
    question: 'What does police jurisdiction mean, and can two agencies have it at once?',
    summary:
      'Jurisdiction is several different things at once — where an agency may act, what it may act on, and under whose authority. This guide separates them, and explains why two agencies can both hold valid authority in the same place.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-policing-is-divided-between-levels',
      'police-command-and-coordination',
      'police-and-law-enforcement-difference',
    ],
    relatedInstitutions: [
      'municipal-police',
      'national-police',
      'federal-investigative-agency',
    ],
    sources: ['us-bjs-csllea-2018', 'ch-fedpol', 'fr-csi-l511-1', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 8,
    keyTerms: ['jurisdiction', 'police', 'law-enforcement'],
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'The United States shows territorial jurisdiction at its most fragmented: 17,541 general-purpose state and local law-enforcement agencies, about 67% of them local police departments and 17% sheriffs offices, each separately governed. Overlap is not an anomaly there; it is the ordinary condition.',
      },
      {
        countrySlug: 'switzerland',
        note: 'Switzerland has no national police force. Each canton polices its own territory under its own police law, and the federal office works alongside the cantonal forces rather than above them — jurisdiction distributed without a hierarchy to resolve it.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'kenya',
        note: 'Kenya devolved substantial government to 47 counties and kept policing national: the Constitution places police services, criminal law and correctional services with the national government. Sub-national government does not create sub-national police jurisdiction.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Jurisdiction is one word doing at least three jobs. It can mean the territory an agency may act in, the subject matter it may act on, or the legal authority under which it acts at all. Most confusion about policing comes from collapsing them.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Territorial jurisdiction',
            description:
              'Where the agency may act — a city, a county, a state, a whole country, or a defined network such as a railway.',
          },
          {
            term: 'Subject-matter jurisdiction',
            description:
              'What it may act on. A federal investigative agency is usually defined this way: its authority follows a list of offences rather than a boundary on a map.',
          },
          {
            term: 'Legal competence',
            description:
              'The instrument that creates the power in the first place — a constitution, a statute, a regional statute of autonomy. Two agencies in the same street may derive authority from different instruments.',
          },
          {
            term: 'Administrative responsibility',
            description:
              'Who funds, staffs and directs the organisation. Distinct from who wrote the law it enforces.',
          },
          {
            term: 'Operational responsibility',
            description:
              'Who actually attends and does the work, which is not always the body that holds the competence — see contract policing.',
          },
          {
            term: 'Command authority',
            description:
              'Who may give an order. The most commonly assumed and least commonly present of these. Jurisdiction rarely implies command over anyone else.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is not',
        text: 'This is an explanation of how authority is structured, not guidance for any encounter, and it is not legal advice. It does not describe how boundaries between agencies could be used to any person’s advantage, and it does not state the law of any country.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Societies rarely design policing once. They add layers — a city force, then a state or provincial one, then a national body for offences that cross boundaries, then specialised agencies for networks and functions. Each layer is created by a different instrument for a different reason, and the result is not a hierarchy so much as an accumulation.',
      },
      {
        kind: 'paragraph',
        text: 'The alternative to overlap is worse. A boundary that no one may cross is a boundary an offence can be organised around, and a single agency with authority over everything is the arrangement most systems have deliberately avoided.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Two agencies can hold valid authority in the same place because their authority comes from different sources and covers different things. That is concurrent jurisdiction, and it is a design feature rather than a defect.',
      },
      {
        kind: 'list',
        items: [
          'A municipal force and a national force may both act in a city, one under local competence and the other under general national competence.',
          'A federal agency may act anywhere in the country, but only on the offences its statute names.',
          'A transport or network force may hold authority defined by infrastructure that crosses every local boundary on its route.',
          'Where several agencies may act, which one does is normally settled by protocol, seniority of offence, or agreement — not by one commanding the other.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The scale of this is easy to underestimate. In the United States there were 17,541 general-purpose state and local law-enforcement agencies at the 2018 census — roughly two-thirds local police departments and a sixth sheriffs offices — each separately governed rather than branches of one organisation.',
        claim: 'fact',
        sources: ['us-bjs-csllea-2018'],
      },
      {
        kind: 'paragraph',
        text: 'Switzerland shows the same plurality without a federal apex: the country has no national police force, each canton polices its own territory under its own police law, and the federal office of police states that it is not a superordinate authority but works alongside the cantonal forces.',
        claim: 'fact',
        sources: ['ch-fedpol'],
      },
    ],
    misconceptions: [
      {
        claim: 'Only one agency can have jurisdiction in a given place.',
        reality:
          'Concurrent jurisdiction is normal. Several agencies may each hold valid authority over the same location for different matters, derived from different instruments.',
      },
      {
        claim: 'The agency with the widest jurisdiction is in charge.',
        reality:
          'Breadth of jurisdiction is not seniority. A national agency may have authority over a narrow list of offences and none at all over the matter actually in front of a local officer.',
      },
      {
        claim: 'Jurisdiction means the right to give orders to other agencies.',
        reality:
          'It almost never does. Authority to act and authority to command are separate, and most systems keep them separate deliberately.',
      },
      {
        claim: 'Sub-national government implies sub-national police.',
        reality:
          'It does not. Kenya devolved substantial powers to 47 counties while keeping policing national, and Nigeria is a federation whose constitution forbids any police force other than the national one.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether local government may create a police force at all is a constitutional question answered differently by different states.',
          'Whether a national force has general competence everywhere, or only where no local force operates, varies.',
          'France divides the question by authority rather than by map: municipal police agents act under the mayor for prevention and surveillance of public order, expressly without prejudice to the general competence of the national police.',
          'Where several forces operate in one territory, the rules on which takes primacy for which offence are national and are not portable between countries.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The French provision is a useful model of how these boundaries are actually drawn: the municipal tier is defined as an addition to national policing rather than a local replacement for it.',
        claim: 'fact',
        sources: ['fr-csi-l511-1'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a person affected by police action, the practical consequence of all this is narrow and important: the oversight body that can examine what happened follows the agency, not the place.',
      },
      {
        kind: 'list',
        items: [
          'Establishing which agency acted comes before any complaint, and in a fragmented system it is genuinely hard.',
          'A complaints body for one force commonly has no jurisdiction over another operating in the same street.',
          'Where an agency acts outside its jurisdiction, the consequence is usually litigated as a question about the validity of what was done rather than as a disciplinary matter alone.',
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Overlapping jurisdiction is usually discussed as inefficiency. Structurally it is closer to redundancy: several bodies with independent authority and no single point at which all of it can be switched off. That has real costs in coordination, and it is also the reason no one office can quietly stop a matter being pursued at all.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how policing is divided between levels of government](/law-enforcement/how-policing-is-divided-between-levels), [police command and coordination](/law-enforcement/police-command-and-coordination), and the [institution types reference](/institutions).',
      },
    ],
  },

  {
    slug: 'how-policing-is-divided-between-levels',
    title: 'How is policing divided between levels of government?',
    shortTitle: 'Policing across levels of government',
    question: 'How is policing divided between national, regional and local government?',
    summary:
      'Federations and unitary states allocate policing very differently, and having a level of government tells you nothing about whether it polices. This guide sets out the main patterns and the countries that break them.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['police-jurisdiction', 'contract-policing', 'municipal-and-national-police'],
    relatedInstitutions: ['state-police', 'national-police', 'federal-investigative-agency'],
    sources: [
      'us-bjs-csllea-2018',
      'br-cf-1988',
      'de-grundgesetz',
      'ng-constitution',
      'ke-constitution',
      'unodc-cpcj',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 9,
    keyTerms: ['police', 'law-enforcement', 'jurisdiction'],
    uncertainty: [
      'This guide describes allocation patterns, not a ranking. It does not claim that any distribution of policing is better than another, and it does not describe how any country performs.',
    ],
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'Policing is dispersed across 17,541 general-purpose state and local agencies, about two-thirds of them municipal police departments — with federal authority tied to federal offences by statute rather than sitting above them as a general tier.',
      },
      {
        countrySlug: 'brazil',
        note: 'Article 144 of the 1988 Constitution divides state policing by FUNCTION rather than by place: the polícias civis exercise judicial-police functions and investigate offences, the polícias militares hold ostensive policing and preservation of public order, and both answer to the state Governors.',
      },
      {
        countrySlug: 'germany',
        note: 'Germany separates who legislates from who administers. Criminal law and court organisation sit under concurrent legislative power while the Länder execute federal law in their own right — so state-level policing does not imply state-level criminal law.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'nigeria',
        note: 'Nigeria is a federation of 36 states whose constitution forecloses state police in terms: section 214(1) provides that "There shall be a police force for Nigeria … no other police force shall be established for the Federation or any part thereof".',
      },
      {
        countrySlug: 'kenya',
        note: 'Kenya devolved substantial competences to 47 counties and did not devolve policing: the Fourth Schedule keeps police services, criminal law and correctional services with the national government.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Every state has to decide which level of government is responsible for policing. The answer is set by constitutional design rather than by the size of the country, and it varies more than almost any other part of a justice system.',
      },
      {
        kind: 'paragraph',
        text: 'The single most useful thing to know is negative: **having a level of government does not imply that the level polices.** A federation may keep policing entirely national. A strongly devolved unitary state may keep it national too.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'A comparative page, not a national one',
        text: 'The patterns below are drawn from several systems deliberately. Terms such as "federal", "state" and "local" mean materially different things between countries, and a page built on one country’s vocabulary would misdescribe the others.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Policing is coercive, local in delivery and national in consequence, and the allocation question is really about which of those pressures a constitution chose to prioritise. Placing it locally ties decisions to the people affected; placing it nationally produces consistency of standards and powers.',
      },
      {
        kind: 'paragraph',
        text: 'Most systems answer with a mixture, and the mixture is rarely tidy — which is why the terminology travels so badly.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Four patterns recur, and several countries use more than one at once.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Dispersed sub-national policing',
            description:
              'Policing belongs to states or provinces and to municipalities, with a national body limited to specified offences. The United States is the clearest case, with 17,541 general-purpose state and local agencies at the 2018 census.',
          },
          {
            term: 'Functional division at one level',
            description:
              'Sub-national policing exists but is split by function rather than territory. Brazil divides state policing between the polícias civis and the polícias militares under Article 144.',
          },
          {
            term: 'National framework, sub-national administration',
            description:
              'One legal system, administered locally. Japan is the standard example: prefectural forces under a national framework, with no sub-national criminal law.',
          },
          {
            term: 'Wholly national policing',
            description:
              'Policing stays with the centre regardless of how much else is devolved. Kenya and Nigeria are the clearest cases, and both are constitutionally explicit.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Germany adds a distinction the others obscure: the Basic Law separates who may legislate from who administers, placing criminal law and court organisation under concurrent legislative power while providing that the Länder execute federal laws in their own right.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil fixes the division in the constitutional text itself, listing the organs of public security and assigning the polícias civis judicial-police functions and the polícias militares ostensive policing and preservation of public order, both subordinate to the Governors.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Federations always have sub-national police.',
        reality:
          'Nigeria is a federation of 36 states whose constitution provides that no police force other than the national one shall be established for any part of the Federation.',
      },
      {
        claim: 'Devolution decentralises policing.',
        reality:
          'Kenya devolved substantial government to 47 counties while keeping police services, criminal law and corrections national. The two are separable and are frequently separated.',
      },
      {
        claim: 'A national agency sits above local police.',
        reality:
          'Usually it holds different jurisdiction rather than superior authority. Where a national body does have a general supervisory role, that is a specific national arrangement rather than a consequence of being national.',
      },
      {
        claim: '"State police" means the same thing in every federation.',
        reality:
          'It does not. Brazilian state policing is divided between two constitutionally distinct forces with different functions; American state policing is a single general force per state alongside county and municipal agencies.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether criminal law itself is national or sub-national is a separate question from who polices, and the two do not track each other.',
          'Whether a municipality may create its own force is set nationally, and in some countries it is prohibited.',
          'Federal or national investigative bodies vary enormously in the breadth of the offence list that defines them.',
          'Some systems place a coordinating body above the sub-national forces; others explicitly do not.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Allocation determines oversight. Where policing is sub-national, the complaints and inspection bodies usually are too — which means a country can contain many separate regimes with no common standard between them, and a route that exists in one region may not exist in the next.',
      },
      {
        kind: 'paragraph',
        text: 'Where policing is national, the oversight is normally national as well, which produces the opposite trade-off: one standard, and one body whose independence carries the whole weight.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Debate about centralised versus decentralised policing usually proceeds as though one is obviously more accountable. Neither is. Dispersion multiplies the number of bodies that can examine a force and the number of places a complaint can fail; centralisation does the reverse. What matters in a specific system is which bodies actually hold powers, not how many levels the map has.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police jurisdiction means](/law-enforcement/police-jurisdiction), [contract policing](/law-enforcement/contract-policing), and [state police](/institutions/state-police).',
      },
    ],
  },

  {
    slug: 'contract-policing',
    title: 'What is contract policing?',
    shortTitle: 'Contract policing',
    question:
      'What is contract policing, and does it mean the local government owns the force?',
    summary:
      'A government responsible for policing can deliver it by buying the service from another order of government. This guide explains the provider/client distinction, why it is not ownership, and how it differs from shared services.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-policing-is-divided-between-levels',
      'police-command-and-coordination',
      'police-jurisdiction',
    ],
    relatedInstitutions: ['provincial-police', 'national-police'],
    sources: ['ca-rcmp-contract', 'au-afp-actpolicing', 'ch-fedpol', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 8,
    keyTerms: ['police', 'jurisdiction', 'accountability'],
    countryExamples: [
      {
        countrySlug: 'canada',
        note: 'The canonical case. The RCMP provides contract policing to eight provinces (Ontario and Quebec have their own provincial services), three territories, and around 150 municipalities. Provinces and territories pay 70% of costs and the federal government 30%; municipalities pay 70% below 15,000 population and 90% above. The current agreements run to 31 March 2032, and the RCMP maintains national standards and policies across contract jurisdictions — the Force stays federal throughout.',
      },
      {
        countrySlug: 'australia',
        note: 'ACT Policing is the community policing arm of the Australian Federal Police, providing policing services to the Australian Capital Territory on behalf of the ACT Government. The Territory runs no force of its own, which is the same arrangement reached from a different constitutional starting point.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'switzerland',
        note: 'Switzerland is the contrast that makes the category clear. There is no national police force; each canton polices its own territory under its own police law, and the federal office states it is not a superordinate authority but works alongside the cantonal forces. That is cooperation between peers, not a service bought from a provider — shared, not contracted.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Contract policing is an arrangement in which the government responsible for policing does not run a force itself, but purchases the service from an institution belonging to another order of government under an agreement.',
      },
      {
        kind: 'paragraph',
        text: 'Three things stay separate throughout, and conflating them is the whole difficulty: who holds the RESPONSIBILITY, who OWNS the institution, and who DELIVERS the service.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'A service agreement, not a transfer',
        text: 'A client government that contracts policing does not acquire the provider force. The provider remains owned, governed and disciplined by its own order of government, and it retains its own standards. The client funds and directs the service it has bought.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Running a police force is expensive and specialised, and a small jurisdiction may hold the constitutional responsibility without having the scale to discharge it well. Contracting lets the responsibility stay where the constitution put it while the delivery comes from an organisation large enough to sustain training, forensics and specialist units.',
      },
      {
        kind: 'paragraph',
        text: 'The cost is a genuine one and is not hidden: the client buys a service governed by someone else, and the room to shape how that service works is narrower than owning a force would allow.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Client jurisdiction',
            description:
              'The government that holds the policing responsibility and buys the service. It sets local priorities and pays most of the cost.',
          },
          {
            term: 'Provider institution',
            description:
              'The force that delivers. It remains part of, and governed by, its own order of government — which is why its national standards continue to apply inside the client jurisdiction.',
          },
          {
            term: 'The agreement',
            description:
              'A funded, time-limited contract setting scope, cost-sharing and duration. In Canada the split is 70/30 between province or territory and the federal government, with municipalities paying 70% below 15,000 population and 90% above, under agreements running to 31 March 2032.',
          },
          {
            term: 'What does not transfer',
            description:
              'Institutional ownership, discipline, and the provider’s own chain of command. The client is buying policing, not acquiring a police force.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The Canadian arrangement states the provider/client split explicitly: the RCMP provides contract policing to eight provinces, three territories and some 150 municipalities, and as the national police force it maintains national standards and policies across those contract jurisdictions.',
        claim: 'fact',
        sources: ['ca-rcmp-contract'],
      },
      {
        kind: 'paragraph',
        text: 'Australia reaches the same shape differently: ACT Policing is described by the Australian Federal Police as its community policing arm, providing policing services to the Australian Capital Territory on behalf of the ACT Government.',
        claim: 'fact',
        sources: ['au-afp-actpolicing'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Contracted is not shared',
        text: 'A shared service is one several jurisdictions run together as peers; a contracted service is one jurisdiction buying from another. Switzerland is the clearest contrast — no national force, cantonal policing under cantonal law, and a federal office that expressly works alongside rather than above.',
      },
    ],
    misconceptions: [
      {
        claim: 'A province or city that contracts policing has its own police force.',
        reality:
          'It has policing. The force belongs to the provider and remains governed by it, which is why the provider’s national standards continue to apply.',
      },
      {
        claim: 'Contract policing means the national government has taken over local policing.',
        reality:
          'The responsibility stays with the client government, which holds the competence, sets priorities and pays the larger share. What it has bought is delivery.',
      },
      {
        claim: 'Contracted and shared arrangements are the same thing.',
        reality:
          'They are structurally opposite. Shared services are run jointly between peers; contracted services have a provider and a client, and a bill.',
      },
      {
        claim: 'Every province or territory in a country arranges this the same way.',
        reality:
          'Canada is asymmetric: Ontario and Quebec run their own provincial services while eight provinces contract. Assuming uniformity within one country is the commonest error here.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether contracting is available at all depends on there being a national or regional force willing and legally able to provide it.',
          'Cost-sharing formulas differ, and in Canada they differ by population band within one country.',
          'Agreements are time-limited, so the arrangement is periodically renegotiable rather than permanent.',
          'Whether the oversight body examining the contracted service is the client’s or the provider’s is a national question, and the answer is frequently the provider’s.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Contract policing splits the thing a complainant needs to identify. The service is local; the institution is not. Where a resident of a contracted jurisdiction complains, the body with jurisdiction is commonly the provider’s national one rather than a local body.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Contract policing is often described as a jurisdiction "having" a national force, and both halves of that are wrong: it does not have it, and what it has bought is a service. The arrangement is best read as a purchase, which is also why the funding split and the expiry date are the most informative facts about it — they are the terms on which a government’s policing can be renegotiated.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [provincial police](/institutions/provincial-police), [how policing is divided between levels of government](/law-enforcement/how-policing-is-divided-between-levels), and [Canada](/countries/canada).',
      },
    ],
  },

  {
    slug: 'police-command-and-coordination',
    title: 'Command and coordination between police agencies',
    shortTitle: 'Command and coordination',
    question: 'When police agencies work together, is one of them in charge?',
    summary:
      'Cooperation between agencies is routinely mistaken for hierarchy. This guide separates command from coordination, and explains why a national body can set standards for forces it cannot give orders to.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['police-jurisdiction', 'contract-policing', 'how-police-are-held-to-account'],
    relatedInstitutions: [
      'national-police',
      'prefectural-police',
      'federal-investigative-agency',
    ],
    sources: [
      'jp-npa-police-of-japan-2020',
      'ch-fedpol',
      'au-afp-act',
      'fr-code-defense-l3211-3',
      'unodc-cpcj',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 8,
    keyTerms: ['police', 'accountability', 'oversight'],
    countryExamples: [
      {
        countrySlug: 'japan',
        note: 'The National Public Safety Commission and the National Police Agency form the national police organisation, the Commission supervising the Agency, while operational policing is administered by the prefectures. National coordination and standard-setting, exercised through a civilian commission, is not the same thing as commanding each operational act.',
      },
      {
        countrySlug: 'switzerland',
        note: 'The federal office of police states plainly that it is not a superordinate authority but works alongside the cantonal forces, each canton policing its own territory under its own police law. Cooperation between peers, with no apex to appeal to.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'france',
        note: 'France is the contrast: a national police force with a single chain of command under national authority, alongside a gendarmerie defined by statute as an armed force instituted to ensure the execution of the laws. Where a system genuinely is hierarchical, command really does run downwards — which is why hierarchy has to be established for a given system rather than assumed from the existence of a national body.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Command is the authority to give an order that must be obeyed. Coordination is the arrangement by which separate bodies align what they do without any of them acquiring that authority. Both look like cooperation from outside, and they are not the same.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Why the distinction matters to a reader',
        text: 'It decides who is answerable. If two agencies coordinate, each remains responsible for its own decisions. If one commands the other, responsibility travels up the chain. Describing coordination as command misplaces accountability, and describing command as coordination hides it.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Offences cross the boundaries that jurisdiction draws, so systems need some way for separate forces to act coherently. What they mostly build is coordination, because the alternative — giving one force authority over the others — would undo the reason the forces were separated in the first place.',
      },
      {
        kind: 'paragraph',
        text: 'The result is a set of arrangements that produce cooperation without concentrating authority: shared standards, shared information, mutual assistance, and temporary command structures created for a specific operation and dissolved afterwards.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Standard-setting',
            description:
              'A national body defines training, procedure or equipment standards that separate forces adopt. Influence over how policing is done, without authority over any particular decision.',
          },
          {
            term: 'Information sharing',
            description:
              'Access to records and intelligence. Frequently the most consequential form of cooperation, and it confers no command at all.',
          },
          {
            term: 'Mutual assistance',
            description:
              'One force supports another on request. The requesting force normally retains responsibility for the operation.',
          },
          {
            term: 'Joint operations',
            description:
              'A temporary command structure created for a specific operation, under which officers of several forces work. It ends with the operation; the underlying legal authority of each force is unchanged.',
          },
          {
            term: 'Supervision',
            description:
              'A body reviewing another’s conduct after the fact. Distinct from command, which is contemporaneous and directive.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Japan is the clearest worked example of coordination that is not command: the National Public Safety Commission supervises the National Police Agency, which together constitute the national police organisation, while policing itself is administered at prefectural level.',
        claim: 'fact',
        sources: ['jp-npa-police-of-japan-2020'],
      },
      {
        kind: 'paragraph',
        text: 'Switzerland states the negative directly. The country has no national police force, each canton is responsible for policing its own territory under its own police law, and the federal office of police is not a superordinate authority but works alongside those forces.',
        claim: 'fact',
        sources: ['ch-fedpol'],
      },
    ],
    misconceptions: [
      {
        claim: 'If a national agency assists a local force, it has taken over the case.',
        reality:
          'Assistance is normally provided on request, with the requesting force retaining responsibility. Which body leads is settled by law and protocol, not by which is larger.',
      },
      {
        claim: 'National standards mean national command.',
        reality:
          'A body can set training and procedural standards for forces it has no authority to direct. Japan’s national organisation coordinates and supervises while prefectures administer the policing.',
      },
      {
        claim: 'Sharing information means one agency controls the other.',
        reality:
          'Information sharing is the most common form of cooperation and confers no authority whatsoever over another force’s decisions.',
      },
      {
        claim: 'A federal police force is the boss of local police.',
        reality:
          'In most systems it holds different jurisdiction rather than superior authority — and in Switzerland the federal office says in terms that it is not superordinate.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Some systems place a national body with genuine directive powers over sub-national forces; most do not, and the difference must be established rather than assumed.',
          'Where a prosecutor or investigating judge directs investigations, a form of command exists that is judicial rather than police.',
          'Joint operation arrangements differ in whether a single commander is appointed and what happens to officers’ home-force powers while seconded.',
          'A unitary state with one national force may have genuine hierarchical command throughout, which is a different situation from any of the above.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Australia illustrates a federal force whose own authority is statutory and bounded rather than supervisory over the state forces.',
        claim: 'fact',
        sources: ['au-afp-act'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Because responsibility follows command, the question "who was in charge?" is the first thing an oversight body has to settle after a joint operation — and it is frequently contested precisely because coordination leaves each force answerable for its own part.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Coverage of multi-agency policing tends to describe cooperation as though a hierarchy were operating quietly in the background. Usually there is none, and that is deliberate: the arrangements exist to produce coherence without producing a single authority over all of it. The cost is coordination failure; the benefit is that no single office can direct every force at once.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police jurisdiction means](/law-enforcement/police-jurisdiction), [prefectural police](/institutions/prefectural-police), and [how police are held to account](/law-enforcement/how-police-are-held-to-account).',
      },
    ],
  },

  {
    slug: 'municipal-and-national-police',
    title: 'How municipal and national police relate',
    shortTitle: 'Municipal and national police',
    question: 'If a city has its own police, what does the national force still do there?',
    summary:
      'A municipal force is normally an addition to national policing rather than a local replacement for it. This guide explains how the two tiers divide work, and why the division is by authority rather than by map.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'police-jurisdiction',
      'how-policing-is-divided-between-levels',
      'local-police-governance',
    ],
    relatedInstitutions: ['municipal-police', 'national-police', 'autonomous-community-police'],
    sources: ['fr-csi-l511-1', 'es-lofcs', 'jp-npa-police-of-japan-2020', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 7,
    keyTerms: ['police', 'jurisdiction', 'public-safety'],
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'Article L511-1 of the Code de la sécurité intérieure places municipal police agents under the mayor’s authority for prevention and surveillance of public order, tranquillity, security and public health — and opens by preserving the general competence of the national police. The municipal tier is defined in law as an addition, not a substitute.',
      },
      {
        countrySlug: 'spain',
        note: 'Organic Law 2/1986 structures policing in three tiers — state security forces, the police of the autonomous communities, and local police — so a Spanish city force operates in a territory where a regional force may also be present. Three tiers, not two.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'japan',
        note: 'Japanese municipalities do not own ordinary police forces. Policing is administered at prefectural level under a national framework, so the presence of city government implies nothing about a city police department. "Municipality" and "municipal police" are not linked.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Where both exist, a municipal force and a national force are not two halves of one organisation. They are separate bodies with different powers, different employers and different accountability, operating in the same streets.',
      },
      {
        kind: 'paragraph',
        text: 'The division between them is usually drawn by AUTHORITY and SUBJECT rather than by territory. The national force does not stop at the city limit; the municipal force is added inside it, with a narrower set of powers.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Some policing problems are irreducibly local — markets, noise, parking, licensed premises, neighbourhood disorder — and a national force has little reason to prioritise them. A municipal tier ties those decisions to the authority that answers to the people affected.',
      },
      {
        kind: 'paragraph',
        text: 'What that tier is not given is the serious end of criminal policing, which almost everywhere stays national or regional. That is why municipal forces so often hold narrower powers rather than the same powers in a smaller area.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The French provision is unusually explicit about the relationship and is worth reading closely: municipal police agents act under the authority of the mayor on tasks within the mayor’s competence relating to prevention and surveillance of public order, tranquillity, security and public health — expressly without prejudice to the general competence of the national police.',
        claim: 'fact',
        sources: ['fr-csi-l511-1'],
      },
      {
        kind: 'list',
        items: [
          'The national force keeps general competence everywhere, including inside the municipality.',
          'The municipal force is defined by the mayor’s competences, which are narrower than the criminal law.',
          'Serious criminal investigation normally sits with the national or regional force regardless of where the offence occurred.',
          'Where a third tier exists, as in Spain, the picture is not two forces dividing work but three bodies with distinct legal bases.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Spain sets that three-tier structure out in its organic law on security forces, naming state security forces, the police of the autonomous communities, and local police.',
        claim: 'fact',
        sources: ['es-lofcs'],
      },
    ],
    misconceptions: [
      {
        claim: 'A city police force replaces the national police inside the city.',
        reality:
          'It does not. In France the provision creating municipal police expressly preserves the general competence of the national police in the same territory.',
      },
      {
        claim: 'Municipal officers have the same powers as national officers.',
        reality:
          'Municipal powers are normally narrower, defined by the local authority’s competences rather than by the criminal law.',
      },
      {
        claim: 'Every country with municipalities has municipal police.',
        reality:
          'Japan administers policing at prefectural level and its municipalities do not own ordinary police forces. The existence of city government implies nothing about a city force.',
      },
      {
        claim: 'Where two forces operate, one is a junior branch of the other.',
        reality:
          'They answer to different authorities. A municipal agent answers to the mayor, not to the national force operating in the same street.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether a municipality may create a force at all is set nationally, and in many countries it may not.',
          'The powers available to municipal officers vary from full police powers to a narrow regulatory set.',
          'Whether municipal officers are armed is a national policy question answered differently across neighbouring countries.',
          'A third regional tier may exist between municipal and national, as in Spain, which changes the relationship entirely.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The practical consequence is the one that recurs across this cluster: the complaint route follows the force. A municipal officer and a national officer standing in the same street may be answerable to entirely different bodies, and the person affected frequently cannot tell them apart.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The phrase "local police" invites a reader to imagine a small version of the national force. The French drafting suggests a better model: a distinct authority created for the mayor’s responsibilities, sharing streets with a national force that never left. Two tiers occupying one place is the normal case, not an anomaly.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [municipal police](/institutions/municipal-police), [local police governance](/law-enforcement/local-police-governance), and [France](/countries/france).',
      },
    ],
  },

  {
    slug: 'local-police-governance',
    title: 'Who controls local police?',
    shortTitle: 'Local police governance',
    question: 'Who controls local police — a mayor, a council, a commission, or a ministry?',
    summary:
      'There is no general answer, and that is the answer. This guide sets out the arrangements that actually recur, and why "local police report to the mayor" is true in some countries and false in most.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'municipal-and-national-police',
      'police-command-and-coordination',
      'how-police-are-held-to-account',
    ],
    relatedInstitutions: ['municipal-police', 'prefectural-police', 'national-police'],
    sources: [
      'fr-csi-l511-1',
      'jp-npa-police-of-japan-2020',
      'es-lofcs',
      'unodc-e4j-police-accountability',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 7,
    keyTerms: ['police', 'accountability', 'oversight'],
    uncertainty: [
      'Governance arrangements are among the most nationally specific parts of any policing system, and this guide describes recurring patterns rather than a comparative survey. It does not establish who controls the police in any country not named here.',
    ],
    countryExamples: [
      {
        countrySlug: 'france',
        note: 'Municipal police agents act under the authority of the mayor, on tasks within the mayor’s competence relating to prevention and surveillance of public order, tranquillity, security and public health — an unusually direct statutory link between an elected local official and a police body.',
      },
      {
        countrySlug: 'japan',
        note: 'Japan interposes a civilian commission rather than a politician: the National Public Safety Commission supervises the National Police Agency, and policing is administered at prefectural level. Control is exercised through a commission structure, not by a mayor.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'spain',
        note: 'Spain shows that "local" control is not a single relationship either: local police sit in a three-tier structure alongside autonomous-community police and state security forces, so the question "who controls the police here?" has up to three simultaneous answers depending on which force is meant.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Control of a police force is several things: who appoints its head, who sets its priorities, who funds it, and who may examine what it did. Different bodies frequently hold different pieces, and the arrangement is set nationally.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'No universal rule, on purpose',
        text: 'Statements such as "local police report to the mayor" are true in some systems and simply wrong in others. This page describes patterns that recur and names the countries they are drawn from; it does not offer a rule to apply to an unfamiliar system.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Police hold coercive power, so someone has to answer for how it is used — and whoever that is acquires influence over policing itself. Every governance design is a judgement about how close that person should be to elected politics.',
      },
      {
        kind: 'paragraph',
        text: 'Placing control with an elected official makes policing answerable to voters and exposes it to electoral pressure. Placing it with a commission or a ministry does the reverse. Neither is neutral, and the international guidance treats the accountability framework as something to be designed rather than assumed.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Direct authority of an elected local official',
            description:
              'A mayor or equivalent directs the force within that official’s own competences. France states this arrangement in statute for municipal police.',
          },
          {
            term: 'Civilian commission',
            description:
              'A standing body interposed between the police organisation and the government of the day. Japan uses public safety commissions at national and prefectural level.',
          },
          {
            term: 'Ministerial control',
            description:
              'A national or regional ministry directs the force. Common where policing is national.',
          },
          {
            term: 'Board or council',
            description:
              'A mixed body, sometimes including elected members, holding appointment and budget powers without day-to-day direction.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Whatever the arrangement, United Nations guidance frames control as only one part of accountability, which it treats as operating before, during and after the act — through professional standards and codes of conduct as much as through whoever sits at the top.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
    ],
    misconceptions: [
      {
        claim: 'Local police everywhere report to the mayor.',
        reality:
          'This is a French-style arrangement, not a general one. Japan places supervision with a civilian commission; in many countries local forces do not exist at all.',
      },
      {
        claim: 'Whoever pays for a force controls it.',
        reality:
          'Funding, appointment, direction and review are frequently held by different bodies — and under contract policing the funder is not the owner.',
      },
      {
        claim: 'Political control means political interference.',
        reality:
          'Democratic control of policing is a deliberate design feature in many systems. The relevant question is what the controlling body may and may not direct, not whether control exists.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether the head of a force is appointed, elected, or a career officer promoted internally differs fundamentally.',
          'Whether the controlling body may direct operations, or only set priorities and budgets, is the distinction that matters most and is rarely visible from the title of the body.',
          'Where several tiers of police exist, each may answer to a different order of government in the same city.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Spain’s three-tier structure is the clearest illustration that "local control" can mean several different relationships operating simultaneously in one territory.',
        claim: 'fact',
        sources: ['es-lofcs'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Control and oversight are not the same thing, and conflating them is common. The body that directs a force is frequently not the body that can investigate a complaint against it — and where it is both, that is itself a structural weakness worth noticing.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Because governance arrangements are so various, the useful question about an unfamiliar system is not "who is in charge?" but "what may that body actually direct?". A commission that appoints a chief and approves a budget has real power and no ability to change what happens on a street corner; a minister with directive authority is a different object entirely, and both are routinely described with the same word.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how municipal and national police relate](/law-enforcement/municipal-and-national-police), [how police are held to account](/law-enforcement/how-police-are-held-to-account), and [municipal police](/institutions/municipal-police).',
      },
    ],
  },

  {
    slug: 'sheriffs-and-city-police',
    title: 'Sheriffs and city police in the United States',
    shortTitle: 'Sheriffs and city police (US)',
    question: 'What is the difference between a sheriff’s office and a city police department?',
    summary:
      'A United States page, deliberately. The sheriff/city-police distinction is a feature of American county government with no general equivalent elsewhere, and even inside the country the office varies by state.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['US'],
    temporalScope: 'current',
    related: [
      'police-jurisdiction',
      'how-policing-is-divided-between-levels',
      'police-and-law-enforcement-difference',
    ],
    relatedInstitutions: ['municipal-police', 'state-police'],
    sources: ['us-bjs-agency-characteristics', 'us-bjs-csllea-2018', 'fr-csi-l511-1'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 7,
    keyTerms: ['police', 'law-enforcement', 'jurisdiction'],
    uncertainty: [
      'The functions of a sheriff’s office are set by state law and vary between states. This page states what the national statistical sources support — that the head of a sheriff’s office is usually elected and that the office has countywide jurisdiction — and does not assert that every county has a sheriff or that sheriffs perform identical functions nationally.',
    ],
    countryExamples: [
      {
        countrySlug: 'united-states',
        note: 'At the 2018 census there were 17,541 general-purpose state and local law-enforcement agencies: about 67% local police departments, 17% sheriffs offices, and 15% primary state, tribal, special-jurisdiction agencies, constables and marshals. City police departments are the largest category by count; sheriffs offices are the second.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'france',
        note: 'France has no analogue. Local policing there is the municipal police agent acting under the mayor’s authority, and there is no elected county-level law-enforcement office. The sheriff/city-police distinction does not travel — it is a feature of American county government rather than a general category of local policing.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A city police department is created by a municipality and polices that municipality. A sheriff’s office is a county-level body, and in the United States its head is usually an elected official rather than an appointed chief.',
      },
      {
        kind: 'paragraph',
        text: 'The most useful structural difference is the basis of the office. A police chief is appointed by and answerable to a city government; a sheriff is generally empowered by the state to serve the county, and where the office is elective, answers to county voters.',
        claim: 'fact',
        sources: ['us-bjs-agency-characteristics'],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'A United States page, and not a global one',
        text: 'This page is scoped to the United States on purpose. "Sheriff" names categorically different offices in different countries — a court officer, a judicial office, a ceremonial position — and treating the American office as the general case is one of the commonest errors in comparative writing about policing.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'American policing was built from the county and the municipality upwards rather than from a national force downwards, and both offices survive from that history. The result is that two bodies with different legal bases and different constituencies frequently police overlapping ground.',
      },
      {
        kind: 'paragraph',
        text: 'That overlap is the ordinary condition rather than an anomaly: with 17,541 general-purpose state and local agencies, a single county can contain a sheriff’s office, several municipal departments, and state and special-jurisdiction agencies as well.',
        claim: 'fact',
        sources: ['us-bjs-csllea-2018'],
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Territory',
            description:
              'A sheriff’s office has countywide jurisdiction; a city department polices the municipality. Where a city sits inside a county, both may have authority in the same streets.',
          },
          {
            term: 'How the head of the agency holds office',
            description:
              'The head of a sheriff’s office is usually an elected official. A municipal chief is normally appointed by the city government.',
          },
          {
            term: 'Legal basis',
            description:
              'Sheriffs offices are generally empowered by the state to serve counties and independent cities; municipal departments are created under municipal authority.',
          },
          {
            term: 'Functions',
            description:
              'These vary by state and are the part most often over-generalised. Jail operation, court security, service of process, patrol and criminal investigation are distributed differently between the two offices in different states.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What the national sources do not establish',
        text: 'The statistical sources cited here support the elected character of the office and its county-level jurisdiction. They do not support a claim that every county has a sheriff, that all sheriffs run jails or provide court security, or that the office performs identical functions from state to state. Those are matters of state law, and this page does not assert them.',
      },
    ],
    misconceptions: [
      {
        claim: 'All sheriffs run jails and provide court security.',
        reality:
          'These functions are assigned by state law and are distributed differently between sheriffs offices, municipal departments and separate corrections agencies depending on the state.',
      },
      {
        claim: 'A sheriff outranks a city police chief.',
        reality:
          'They head separate agencies with different legal bases and different constituencies. Neither commands the other.',
      },
      {
        claim: 'Every county has a sheriff and every city has a police department.',
        reality:
          'Neither is universal. Arrangements differ by state, and some municipalities are policed by a county or state agency rather than by a department of their own.',
      },
      {
        claim: 'The sheriff/city-police split is how local policing works generally.',
        reality:
          'It is an American arrangement. France, for example, has no equivalent elected county-level office — local policing there is the municipal agent under the mayor.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'State law determines what a sheriff’s office does, so the office differs across the fifty states.',
          'Some states place jail operation with the sheriff; others with a separate corrections agency.',
          'Whether the sheriff is elected, and for how long, is set by state law and in some places by county charter.',
          'Where a municipality has no department of its own, county or state agencies police it directly.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The accountability routes differ with the office. An elected sheriff answers to county voters at an election and to the courts in law; an appointed chief answers to the city government that appointed them. Neither route is a substitute for the other, and a complaint sent to the wrong agency is simply returned.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'The elective character of most sheriffs is usually discussed as a question about politics. Structurally it is a question about who may remove the office-holder: an appointed chief can be dismissed by the appointing authority, and an elected sheriff generally cannot be, between elections. That single difference explains more about how the two offices behave than any list of duties.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police jurisdiction means](/law-enforcement/police-jurisdiction), [municipal police](/institutions/municipal-police), and [the United States dossier](/countries/united-states).',
      },
    ],
  },

  /* ==========================================================================
     WAVE 5 — who does the investigating (2026-08-10).
     ========================================================================== */

  {
    slug: 'who-investigates-police',
    title: 'Who investigates the police?',
    shortTitle: 'Who investigates police',
    question: 'When a police officer is accused of wrongdoing, who investigates?',
    summary:
      'There is no single answer, and the differences matter. This guide sets out the arrangements that recur — internal units, external statutory bodies, prosecutors, and bodies that investigate and prosecute at once — and the systems that use none of them.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-police-are-held-to-account',
      'why-police-accountability-matters',
      'police-command-and-coordination',
    ],
    relatedInstitutions: [
      'independent-police-complaints-body',
      'ombuds-and-rights-institution',
      'prosecution-service',
    ],
    sources: [
      'unodc-e4j-police-accountability',
      'no-spesialenheten',
      'za-ipid',
      'cz-gibs',
      'nz-ipca',
      'ng-constitution',
      'fr-decret-2013-784-igpn',
      'fr-arrete-2025-iggn',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-10',
    publishedOn: '2026-08-10',
    reviewedOn: '2026-08-10',
    factsVerifiedOn: '2026-08-10',
    readingTimeMinutes: 8,
    keyTerms: ['police', 'accountability', 'oversight'],
    uncertainty: [
      'This guide describes arrangements that recur across the systems this platform has researched. It does not establish who investigates police in any country not named here, and it makes no claim that any arrangement produces better outcomes than another.',
    ],
    countryExamples: [
      {
        countrySlug: 'norway',
        note: 'Norway places both functions in one external body: the Bureau for the Investigation of Police Affairs is a national investigation and prosecution agency for offences by police and prosecuting-authority employees, sitting outside the ordinary police and prosecution chain.',
      },
      {
        countrySlug: 'south-africa',
        note: 'South Africa uses an external statutory investigator with a bounded remit — the Independent Police Investigative Directorate, created by Act 1 of 2011, for deaths in custody or resulting from police action, discharge of official firearms, and allegations of torture, assault or corruption.',
      },
      {
        countrySlug: 'czechia',
        note: 'Czechia’s General Inspection of Security Forces investigates suspected crimes by officers of the Police, the Prison Service and the Customs Administration and opens their criminal prosecutions — an external investigator whose remit is wider than policing.',
      },
      {
        countrySlug: 'new-zealand',
        note: 'New Zealand separates the watching from the prosecuting: the Independent Police Conduct Authority, established by Parliament in 1989, is not part of the New Zealand Police and receives and investigates complaints, while criminal decisions rest elsewhere.',
      },
      {
        countrySlug: 'france',
        note: 'France shows two of these categories operating at once, which is why they are not mutually exclusive. Each national force has its own inspection générale, and each is inside the force it examines — the IGPN is by décret “un service actif de la direction générale de la police nationale”. Those internal bodies also act as judicial police: the IGPN conducts criminal investigations “d’initiative ou sur instruction de l’autorité judiciaire”, and the gendarmerie’s inspection conducts those entrusted to it and informs the judicial authority where the failings found may amount to an offence. So the service investigates itself and a prosecutor directs, in the same arrangement.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'nigeria',
        note: 'Nigeria has constitutional police oversight and no body of this kind: the Police Service Commission appoints, promotes and disciplines officers other than the Inspector-General, and the Nigeria Police Council handles policy and general supervision, with no separate independent police-complaints board. A country can take oversight seriously in its constitution and still have no external investigator.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'When a police officer is accused of wrongdoing, the investigation may be conducted by the officer’s own service, by a different police service, by a dedicated external body, by a prosecutor, or by a body that investigates and prosecutes at once. Which of these applies is set nationally, and the answer changes what the process can produce.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains institutional arrangements. It is not legal advice, it does not describe how to make a complaint in any particular country, and it does not assess how well any of these arrangements works.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The difficulty is structural rather than moral. An organisation investigating its own members has an interest in the result, and the people conducting the investigation share an employer, a culture and often a workplace with the person under investigation. None of that requires bad faith to be a problem: it is enough that the findings are hard for an outsider to rely on.',
      },
      {
        kind: 'paragraph',
        text: 'Every arrangement below is an attempt to introduce distance. They differ in how much distance, at what cost, and for which categories of allegation.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'United Nations guidance treats internal control as the first degree of control in any police accountability system, operating preventively as well as reactively. It is the layer everything else is built on top of, not an alternative to external scrutiny.',
        claim: 'fact',
        sources: ['unodc-e4j-police-accountability'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The service investigates itself',
            description:
              'An internal unit conducts the investigation. Fastest access to records and personnel, and the arrangement with the least distance from the subject.',
          },
          {
            term: 'Another police service investigates',
            description:
              'A neighbouring or national force is asked to investigate. More distance than an internal unit, and still an investigation by police of police.',
          },
          {
            term: 'An external statutory body investigates',
            description:
              'A body outside the police, created by statute, investigates defined categories of matter. The remit is usually narrower than the name suggests — South Africa’s Directorate is confined to deaths, firearm discharges and allegations of torture, assault or corruption.',
          },
          {
            term: 'An external body investigates and prosecutes',
            description:
              'The strongest form of separation. Norway’s Bureau is a national investigation and prosecution agency for offences by police and prosecuting-authority employees.',
          },
          {
            term: 'A prosecutor or investigating judge directs',
            description:
              'Where prosecutors lead investigations generally, they lead these too, and the separation comes from the ordinary criminal process rather than from a dedicated body.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The categories are not mutually exclusive. Czechia’s General Inspection of Security Forces investigates suspected crimes by officers of the police, the prison service and the customs administration and opens their criminal prosecutions — an external investigator whose remit extends beyond policing.',
        claim: 'fact',
        sources: ['cz-gibs'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has an independent body that investigates the police.',
        reality:
          'Many do not. Nigeria has constitutional police oversight through the Police Service Commission and the Nigeria Police Council, and no separate independent police-complaints board.',
      },
      {
        claim: 'An external body investigates every complaint against the police.',
        reality:
          'Most are confined by statute to defined categories — commonly deaths, serious injury and alleged criminality — and everyday conduct complaints return to the police service.',
      },
      {
        claim: 'Investigating is the same as being able to act on the result.',
        reality:
          'Investigation, discipline and prosecution are separate powers held by different bodies in most systems. A body may establish what happened and have no authority to do anything about it beyond reporting.',
      },
      {
        claim: 'An independent investigator means the process is effective.',
        reality:
          'The existence of a body is a fact about institutional design. Whether it works is a separate, empirical question that depends on powers, resourcing and access, and this platform does not infer one from the other.',
      },
    ],
    variation: [
      {
        kind: 'list',
        items: [
          'Whether a dedicated external body exists at all is the first and largest difference.',
          'Where one exists, its remit may be a short statutory list rather than all police conduct.',
          'Whether it can compel evidence and testimony, and from whom, differs and is rarely apparent from the body’s name.',
          'Whether it prosecutes, refers to a prosecutor, or only reports is a fundamental difference in what an investigation can lead to.',
          'Some bodies cover several security services rather than police alone.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'New Zealand illustrates the separation of watching from prosecuting: the Independent Police Conduct Authority was established by Parliament in 1989, states that it is not part of the New Zealand Police, and receives and investigates complaints.',
        claim: 'fact',
        sources: ['nz-ipca'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a person making a complaint, the practical questions are narrow: which body receives it, whether that body can investigate this category of matter, and what it is able to do with a finding. The three have different answers in most systems, and the third is the one most often assumed.',
      },
      {
        kind: 'paragraph',
        text: 'Where a matter is criminal, it normally enters the ordinary criminal process regardless of which body investigated, which is why the relationship between the investigating body and the prosecution service is worth establishing in any specific system.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Our reading',
        text: 'Public debate treats the existence of an independent investigator as the question. The institutional evidence suggests the more informative questions are narrower: what may it investigate, what may it compel, and what happens to its findings. A body with a broad name and a short statutory list does less than a narrowly named body that can compel evidence and prosecute — and the names give no reliable indication of which is which.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how police are held to account](/law-enforcement/how-police-are-held-to-account), [independent police complaints bodies](/institutions/independent-police-complaints-body), and [ombuds and rights institutions](/institutions/ombuds-and-rights-institution).',
      },
    ],
  },
];
