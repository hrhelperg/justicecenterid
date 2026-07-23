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
];
