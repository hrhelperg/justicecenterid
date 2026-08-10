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
        text: 'Related: [why police accountability matters](/law-enforcement/why-police-accountability-matters), [police use of force](/law-enforcement/police-use-of-force), and [the institution types reference](/institutions).',
      },
    ],
  },
];
