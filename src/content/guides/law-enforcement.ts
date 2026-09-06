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
      'what-public-safety-covers',
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
        text: 'Related: [the difference between police and law enforcement](/law-enforcement/police-and-law-enforcement-difference), [how policing institutions changed](/law-enforcement/how-policing-institutions-changed), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight). For a procedure that had courts and no enforcement apparatus at all, see [Roman procedure without a police force](/history/roman-procedure-without-a-police-force). For what the people who do this work actually do all day, see [working life in policing](/law-enforcement/working-life-in-policing).',
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
      'what-public-safety-covers',
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
        text: 'Related: [why societies need law enforcement](/law-enforcement/why-societies-need-law-enforcement), [how policing institutions changed](/law-enforcement/how-policing-institutions-changed), and the [institution types reference](/institutions). The word itself has a history: see [when “policeman” meant something else](/history/when-policeman-meant-something-else). A police organisation is also not composed only of people with police powers: see [civilian roles in police organisations](/law-enforcement/civilian-roles-in-police-organisations).',
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
        text: 'Related: [the difference between police and law enforcement](/law-enforcement/police-and-law-enforcement-difference), the [historical timeline](/timeline), [what a police academy is](/law-enforcement/what-a-police-academy-is) and [police training and police education](/law-enforcement/police-training-and-police-education) for how initial preparation is organised today, and [the history section](/history). On the most repeated claim in this history, see [who wrote the principles of policing](/history/who-wrote-the-principles-of-policing).',
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
      'military-assistance-to-civil-authorities',
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
        text: 'Related: [why police accountability matters](/law-enforcement/why-police-accountability-matters), [arrest and detention](/law-enforcement/arrest-and-detention), and [why societies need law enforcement](/law-enforcement/why-societies-need-law-enforcement). The necessity and proportionality on this page measure an action against its objective; the constitutional doctrine that measures a rule against a right is [what proportionality requires](/justice/what-proportionality-requires). How much training time is measurably spent on this, and on the law that limits it, is [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught).',
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
    related: [
      'police-use-of-force',
      'how-police-are-held-to-account',
      'what-is-due-process',
      'detention-under-emergency-powers',
    ],
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
          'In most systems arrest is an investigative step, not an accusation that has been tested. Whether a charge follows is usually a separate decision, frequently taken by a different person — in many countries a prosecutor rather than the arresting body.',
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
        text: 'Related: [police use of force](/law-enforcement/police-use-of-force), [what is due process](/justice/what-is-due-process), and [what is a criminal investigation](/investigations/what-is-a-criminal-investigation). For the constitutional periods this page deliberately does not state, see [how soon a detained person sees a judge](/justice/how-soon-a-detained-person-sees-a-judge).',
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
        text: 'Related: [how police are held to account](/law-enforcement/how-police-are-held-to-account), [why justice systems need oversight](/justice/why-justice-systems-need-oversight), and [police use of force](/law-enforcement/police-use-of-force). What the standards ask of an individual officer, as distinct from what the machinery does afterwards, is [professional standards in policing work](/law-enforcement/professional-standards-in-policing-work). A complaint also depends on being able to say who was involved: see [how police officers are identified](/law-enforcement/how-police-officers-are-identified).',
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
    sources: [
      'unodc-e4j-police-accountability',
      'udhr',
      'unodc-cpcj',
      'nz-ipca-legislative-functions',
      'za-ipid-act-gazette',
      'ke-ipoa-act-cap86',
      'ke-nps-act-cap84-iau',
      'no-pataleinstruksen-kap34',
      'ie-pscsa-2024-act',
    ],
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
      {
        kind: 'paragraph',
        text: 'One question recurs often enough to be worth answering directly: who actually disciplines a police officer? Across the oversight bodies researched for this cluster, the answer is almost never the oversight body.',
        claim: 'analysis',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The police hierarchy decides, in nearly every case',
            description:
              'New Zealand’s Independent Police Conduct Authority is denied the power to take disciplinary action by section 27 of its Act. Kenya’s Independent Policing Oversight Authority recommends disciplinary action. Ireland’s Fiosrú refers. Norway’s bureau sends a case to the officer’s own commander where it calls for an administrative response. Four external bodies, four referrals.',
          },
          {
            term: 'A duty to act is not a power to decide',
            description:
              'South Africa comes closest to an exception and is the case worth stating precisely. Under section 30 of the Independent Police Investigative Directorate Act, the Commissioner who receives a disciplinary recommendation must initiate proceedings within 30 days and report quarterly to the Minister. The Directorate can compel the process to start. It cannot determine the outcome.',
          },
          {
            term: 'The one conditional exception found is internal',
            description:
              'Kenya’s Internal Affairs Unit, established by section 87 of the National Police Service Act, recommends disciplinary action to the Inspector-General — and the Inspector-General may in exceptional cases authorise the Unit to conduct disciplinary proceedings itself. An internal unit, acting on the head of service’s authority.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why oversight bodies usually cannot discipline',
        text: 'Discipline is an employer’s power over an employee, exercised under the employment relationship. A body outside the organisation has no such relationship, so giving it a disciplinary power would mean giving an external body authority over another organisation’s staff. Most systems have chosen instead to give it the power to establish facts and to require the employer to respond. Whether that is sufficient is a real question; this page does not answer it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why police accountability matters](/law-enforcement/why-police-accountability-matters), [who investigates the police](/law-enforcement/who-investigates-police), and [independent police complaints bodies](/institutions/independent-police-complaints-body). Because most operational decisions are taken without a supervisor present, the standards that apply unobserved matter as much as the machinery: see [professional standards in policing work](/law-enforcement/professional-standards-in-policing-work), and, for the recording instrument adopted largely for this reason, [body-worn video as institutional equipment](/law-enforcement/body-worn-video-as-institutional-equipment).',
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
    slug: 'internal-vs-external-police-oversight',
    title: 'Internal and external police oversight',
    shortTitle: 'Internal vs external oversight',
    question:
      'What is the difference between internal and external police oversight, and does external mean independent?',
    summary:
      'Internal bodies sit inside the police; external ones sit outside. The distinction is real and worth knowing, but it does not tell you which body is independent, and in several countries it does not tell you which one holds the stronger powers.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-police-are-held-to-account',
      'who-investigates-police',
      'police-complaints-vs-criminal-investigation',
    ],
    relatedInstitutions: [
      'independent-police-complaints-body',
      'independent-police-investigative-body',
      'ombuds-and-rights-institution',
    ],
    sources: [
      'se-polisen-sarskilda-utredningar',
      'ke-nps-act-cap84-iau',
      'ke-ipoa-act-cap86',
      'fr-decret-2013-784-igpn',
      'fr-code-defense-iggn',
      'fr-ddd-deontologie-securite',
      'za-ipid-act-gazette',
      'nz-ipca-legislative-functions',
      'no-pataleinstruksen-kap34',
      'unodc-e4j-police-accountability',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 8,
    keyTerms: ['police', 'oversight', 'accountability', 'inspectorate'],
    uncertainty: [
      'This page describes where bodies sit and what their founding instruments give them. It establishes nothing about whether internal or external arrangements work better, and no such comparison is made.',
      'Independence is treated here as a claim about statute — basis, appointment, removal, budget and freedom from instruction. Whether a body is independent in practice is a different question, and not one this page answers.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'An internal oversight body is part of the police organisation it examines. Its staff are usually police, its budget usually comes from the force, and its head usually answers to the force’s own leadership. An external body sits outside that organisation, with its own statutory basis and its own staff.',
      },
      {
        kind: 'paragraph',
        text: 'That is the whole of the distinction. It describes POSITION, and position alone. It does not say who is independent, who has more power, or whose findings carry further — and in each of those three cases there is a country where the obvious guess is wrong.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains a structural distinction between kinds of oversight body. It is not legal advice, it does not tell you where to take a complaint in any country, and it does not rank internal against external arrangements.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Both kinds exist because they answer different questions. An organisation needs to know whether its own rules were followed, and it is the only body that can act on the answer by disciplining an employee. The public needs to know whether the account it is given is reliable, and an organisation reporting on itself cannot settle that no matter how honestly it works.',
      },
      {
        kind: 'paragraph',
        text: 'So most systems run both, and the interesting question is not which one is better but what each is for and where the boundary between them is drawn.',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Internal — inside the organisation',
            description:
              'Internal affairs units, professional standards units, internal inspectorates and the ordinary disciplinary hierarchy. These bodies can reach an employee directly. France’s Inspection générale de la Police nationale is, by the décret that created it, "un service actif de la direction générale de la police nationale" — a service of the force it examines. Kenya’s Internal Affairs Unit is established by section 87 of the National Police Service Act and reports through an assistant Inspector-General to the Inspector-General.',
          },
          {
            term: 'External — outside the organisation',
            description:
              'Independent complaints bodies, dedicated investigative bodies, prosecutors, courts and ombuds institutions. These bodies can say what happened without the organisation’s permission, and most of them cannot make the organisation do anything about it. New Zealand’s Independent Police Conduct Authority is an Independent Crown Entity accountable only to Parliament, and section 27 of its Act denies it the power to lay charges or take disciplinary action.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'External does not mean independent, and internal does not mean captured',
        text: 'Sweden’s Department for Special Investigations is described by the police authority itself as "en oberoende avdelning inom Polismyndigheten, avskild från övrig polisverksamhet" — an independent department INSIDE the Police Authority, separated from other police activity. Kenya’s Internal Affairs Unit is internal, and its statute provides that it "shall not be subject to the control, direction or command of the Kenya Police, Administration Police or the Directorate". Two internal bodies, both carrying a statutory insulation from police command. Whether either is independent is a question about their statutes, and it is not answered by the word "internal".',
      },
      {
        kind: 'paragraph',
        text: 'The assumption fails in the other direction too. South Africa’s Act states that the Independent Police Investigative Directorate "functions independently from the South African Police Service" — independence from the Service, stated in those words, with nothing equivalent said about the Minister who nominates its Executive Director and may remove them. Norway’s bureau sits wholly outside the police, and the Director of Public Prosecutions may order it to open an investigation, to carry it out, and to stop it. External position and freedom from direction are separate facts, and the instruments keep them separate.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'France inverts the power assumption entirely',
        text: 'In France the bodies inside the police hold the investigative powers and the bodies outside it do not. The IGPN conducts judicial investigations "d’initiative ou sur instruction de l’autorité judiciaire" — on its own initiative. The Défenseur des droits, an autorité administrative indépendante that receives no instructions, may require explanations, carry out verifications, recommend, enjoin, publish a special report and refer facts to a prosecutor — and cannot impose a sanction or investigate a crime. Note what that external body is, though: security deontology is one of five mandates, and it covers security activity generally — national and municipal police, gendarmes, prison staff, customs officers, transport surveillance agents and private security employees alike. It is not a police body. Being outside is not the same as being stronger.',
      },
      {
        kind: 'paragraph',
        text: 'A third arrangement belongs to neither column cleanly. Sweden has no external police-oversight body at all: suspected crimes by police employees are investigated by that ring-fenced department inside the police authority, and a prosecutor at the Särskilda åklagarkammaren — inside the prosecution service, outside the police — always leads the preliminary investigation. The oversight is external to the police and internal to the state, which is a shape neither word describes.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Where both kinds exist, the relationship between them is often set out in the statute. Kenya’s Independent Policing Oversight Authority is required to monitor, review and audit the Internal Affairs Unit’s own investigations, may refer a complaint back to that Unit for redress, and may take over an internal investigation that is inordinately delayed or manifestly unreasonable. That is an external body whose job includes checking the internal one — which only works if both exist.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where the line between internal and external falls is itself a national choice, and three of the countries here draw it in a place the others do not.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Both, with the external body auditing the internal one',
            description:
              'Kenya. The Internal Affairs Unit under section 87 of the National Police Service Act sits inside the Service; the Independent Policing Oversight Authority sits outside it and is required by section 6(d) of its Act to monitor, review and audit the Unit’s investigations and to keep a record of complaints regardless of where they were first reported.',
          },
          {
            term: 'Internal bodies holding the criminal powers',
            description:
              'France. The inspections générales belong to the forces they examine and conduct judicial investigations; the external authorities — both of which hold general mandates rather than police-specific ones — have no criminal-investigation power and no power to sanction.',
          },
          {
            term: 'No external police body at all',
            description:
              'Sweden. The investigating department is inside the police authority and the prosecutor who directs it is inside the prosecution service. Nothing in the arrangement sits outside the state’s law-enforcement structures, and the police authority still describes the department as independent.',
          },
          {
            term: 'External, statutory, and deliberately limited',
            description:
              'New Zealand. An Independent Crown Entity accountable only to Parliament, which must reach a finding on whether police conduct was unlawful, unreasonable, unjustified, unfair or undesirable, and which section 27 forbids to lay charges or take disciplinary action.',
          },
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a reader trying to work out what a particular body can do, the position of the body is the wrong place to start. The founding instrument is the right place, and four questions in it settle most of what matters: what triggers the body, what powers it has once triggered, what it must do with its findings, and who may give it instructions.',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What this distinction cannot tell you',
        text: 'That a country has both internal and external oversight establishes nothing about whether either functions. This page describes design. The existence of a body is a fact about a statute, and no inference about outcomes follows from it.',
      },
    ],
    misconceptions: [
      {
        claim: 'External oversight is independent oversight.',
        reality:
          'Position and independence are different claims. Independence rests on statutory basis, appointment, removal, budget and freedom from instruction, and an external body can be weak on all five. Norway’s external bureau can be ordered to stop an investigation by the Director of Public Prosecutions.',
      },
      {
        claim: 'Internal oversight means the police marking their own homework.',
        reality:
          'Sometimes, and sometimes not. Sweden’s and Kenya’s internal units both carry statutory separation from ordinary police command. Whether that separation is sufficient is a real question; assuming it is absent because the body is internal is not an answer to it.',
      },
      {
        claim: 'External bodies have more power than internal ones.',
        reality:
          'In France the reverse is true: the internal inspections can open criminal investigations, and the external authorities cannot investigate a crime or impose a sanction.',
      },
      {
        claim: 'Every country has both.',
        reality:
          'Sweden has no dedicated external police-oversight body. The function is divided between a department inside the police and a chamber inside the prosecution service.',
      },
    ],
    countryExamples: [
      {
        countrySlug: 'sweden',
        note: 'The clearest evidence that independent and external are different words. The Department for Special Investigations is an independent department inside the Police Authority, separated from other police activity, and a prosecutor from outside the police always leads its cases.',
      },
      {
        countrySlug: 'kenya',
        note: 'The only country here with both halves named in statute. The Internal Affairs Unit sits inside the National Police Service under section 87 of the National Police Service Act, insulated by law from the operational commands; the Independent Policing Oversight Authority sits outside and is required to audit it.',
      },
      {
        countrySlug: 'france',
        note: 'The inversion. The two inspections générales belong to the forces they examine and hold criminal-investigation powers; the Défenseur des droits and the Contrôleur général are outside the police and can recommend, enjoin, verify and publish, but not sanction.',
      },
      {
        countrySlug: 'new-zealand',
        note: 'External and statutorily independent, and still unable to act on its own findings. The Independent Police Conduct Authority is an Independent Crown Entity accountable only to Parliament, and section 27 of its Act withholds the power to lay charges or take disciplinary action.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'south-africa',
        note: 'Shows how precisely these claims need reading. Section 4(1) of the Act states that the Directorate "functions independently from the South African Police Service" — that is independence from the Service, and the Act makes no equivalent statement about the Minister, who nominates the Executive Director and may remove them on stated grounds.',
      },
    ],
  },
  {
    slug: 'police-complaints-vs-criminal-investigation',
    title: 'Complaints, investigations and prosecutions are not the same thing',
    shortTitle: 'Complaints vs criminal investigation',
    question:
      'What is the difference between a police complaint, a misconduct investigation and a criminal investigation?',
    summary:
      'Five things get called "an investigation into the police": complaint intake, misconduct investigation, disciplinary investigation, criminal investigation and prosecution. They are separate stages held by different bodies, and some bodies hold one without the others.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-investigates-police',
      'how-police-are-held-to-account',
      'internal-vs-external-police-oversight',
    ],
    relatedInstitutions: [
      'independent-police-investigative-body',
      'independent-police-complaints-body',
      'prosecution-service',
    ],
    sources: [
      'no-pataleinstruksen-kap34',
      'cz-act-341-2011-consolidated',
      'za-ipid-act-gazette',
      'ke-ipoa-act-cap86',
      'ie-pscsa-2024-act',
      'nz-ipca-legislative-functions',
      'dk-politiklagemyndighed-about',
      'unodc-e4j-police-accountability',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 9,
    keyTerms: ['police', 'criminal-investigation', 'prosecutor', 'accountability'],
    uncertainty: [
      'The five stages described here are drawn from the instruments of the countries researched. They are a way of reading those instruments accurately, not a universal legal scheme, and a system may divide the same ground differently.',
      'This page does not describe how to make a complaint anywhere, and it does not say what outcome any stage should produce.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A single phrase — "the police are being investigated" — covers five different things. Keeping them apart is the difference between understanding what a body can do and assuming it can do everything.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Complaint intake: someone tells a body that something was wrong. The body records it and decides whether it is admissible and who should handle it.',
          'Misconduct investigation: establishing what happened, measured against standards of conduct rather than against the criminal law.',
          'Disciplinary investigation: establishing whether an employee broke the organisation’s rules, in a process that can end in a sanction against them.',
          'Criminal investigation: establishing whether an offence was committed, under criminal procedure and with the powers that go with it.',
          'Prosecution: the decision to bring a criminal charge, and the conduct of the case in court.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how oversight systems divide the work. It is not legal advice, it does not describe any country’s complaint procedure, and it does not assess outcomes.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The stages exist separately because they answer different questions to different standards. Whether an officer was rude, whether an officer broke a workplace rule, and whether an officer committed an assault are three questions, and the third one carries a criminal standard of proof and a set of procedural protections the first two do not.',
      },
      {
        kind: 'paragraph',
        text: 'This is why a complaint can be upheld while no one is prosecuted, and why an acquittal does not mean a complaint was baseless. Different findings on different standards by different bodies is a coherent result, not a contradiction.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The clearest proof that the stages are genuinely separable is that some bodies are required to refuse the ones they do not hold.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A body that must turn away non-criminal complaints',
            description:
              'Norway’s Spesialenheten for politisaker investigates and prosecutes criminal acts committed in the course of duty by police and prosecution employees. Chapter 34 of the prosecution instruction requires its chief to reject cases outside that competence, "for eksempel fordi det anmeldte forhold ikke er straffbart" — for example because the reported matter is not criminal. A complaint that alleges no offence is not refused because the body is unwilling; it is outside the body’s statutory competence.',
          },
          {
            term: 'A body with no complaint procedure at all',
            description:
              'Czechia’s General Inspection of Security Forces investigates crimes by officers of the police, the customs administration and the prison service. Its Act provides no complaints mechanism for those forces. A member of the public may alert the inspection to conduct by another force’s officer only where that conduct amounts to a CRIMINAL offence — while for the inspection’s own members the same provision extends to administrative and disciplinary offences. The asymmetry is written into the statute.',
          },
          {
            term: 'A body that investigates and cannot charge',
            description:
              'New Zealand’s Independent Police Conduct Authority receives complaints, investigates incidents causing death or serious bodily harm with the powers of a Commission of Inquiry, and must determine whether police conduct was unlawful, unreasonable, unjustified, unfair or undesirable. Section 27 of its Act denies it the power to lay criminal charges or take disciplinary action. It reaches a finding and hands the decision on.',
          },
          {
            term: 'A body that investigates and prosecutes',
            description:
              'Norway’s bureau again, at the other end. Its chief decides the prosecution question except where that belongs to the Director of Public Prosecutions, and where the unit indicts, a lawyer from the unit conducts the case in court. Investigation and prosecution in one body is the exception in this set, not the pattern.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Complaint intake is a routing decision, not a promise to investigate',
        text: 'Ireland’s 2024 Act routes defined categories of admissible complaint back to An Garda Síochána for resolution rather than to the Ombudsman. South Africa’s Act sends ordinary service complaints about the police to the police service and, where appropriate, the Secretariat — the Directorate’s own list is deaths, firearm discharges, rape, torture, assault and corruption. Kenya’s Authority may refer a complaint back to the Service’s Internal Affairs Unit for redress. In each case the complaint was received by the external body and handled by the police, which is a normal design and not a failure of one.',
      },
      {
        kind: 'paragraph',
        text: 'The last two stages separate almost everywhere. Of the bodies researched for this cluster, one prosecutes; the rest must refer to a prosecution service — the National Prosecuting Authority in South Africa, the Director of Public Prosecutions in Kenya and Ireland, the state prosecutor in Czechia. And the disciplinary decision belongs to the police in every single case. South Africa comes closest to an exception and is worth stating precisely: on a disciplinary recommendation the Commissioner must begin proceedings within 30 days and report quarterly to the Minister. That is a duty on the police to act. It is not a power in the oversight body to decide.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Some bodies do hold several stages at once, and the page would be misleading if it implied a clean division. Denmark’s authority handles conduct complaint cases and investigates criminal cases against police and prosecution personnel. Ireland’s Fiosrú takes complaints and investigates with powers equivalent to a Garda member. Kenya’s Authority investigates disciplinary and criminal offences alike, inspects police premises and audits the internal unit. The stages are separable, which is not the same as always separated.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Systems differ less in whether they recognise these stages than in how many of them they put in one body, and where they place the boundary between complaint and crime.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Criminal stages only',
            description:
              'Norway and Czechia. Both bodies investigate crimes by officers and neither takes conduct complaints; Norway’s must refuse them by statute and Czechia’s Act does not provide for them.',
          },
          {
            term: 'Complaint and misconduct stages, without the criminal decision',
            description:
              'New Zealand. The Authority receives complaints, investigates, and determines whether conduct was unlawful, unreasonable, unjustified, unfair or undesirable — and cannot lay a charge or impose a sanction.',
          },
          {
            term: 'Complaint and criminal stages together',
            description:
              'Denmark and Ireland. Denmark’s authority handles conduct complaints and investigates criminal cases against police and prosecution personnel. Ireland’s Fiosrú determines admissibility, investigates with police-equivalent powers, and refers to the Director of Public Prosecutions.',
          },
          {
            term: 'The widest mandate found, still without the final decisions',
            description:
              'Kenya. Complaints from the public and from officers, disciplinary and criminal investigation, inspection of police premises, audit of the internal unit, and the power to take over a delayed internal investigation — with prosecution recommended to the Director of Public Prosecutions and discipline recommended to the Service.',
          },
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The practical consequence of these distinctions is that "who investigates the police" has no single answer even inside one country, because it depends on which stage is meant. The same incident may produce a complaint handled by the police under a statutory arrangement, a criminal investigation by an external body, a prosecution decision by a prosecutor, and a disciplinary process run by the force — four processes, four bodies, four standards.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Separable, not ranked',
        text: 'Nothing here says that a body holding more stages is better, or that separating them is a weakness. Combining investigation and prosecution removes a step and concentrates a decision; separating them adds a check and adds a handover. Both trade-offs are real and this page takes no position on them.',
      },
    ],
    misconceptions: [
      {
        claim: 'If a body is independent, it can investigate any complaint about the police.',
        reality:
          'Two bodies in this cluster that sit wholly outside the police cannot. Norway’s must reject a report disclosing no offence, and Czechia’s Act contains no complaint procedure for the forces it investigates.',
      },
      {
        claim: 'An investigation that finds wrongdoing leads to a prosecution.',
        reality:
          'In most systems the investigating body refers the file to a prosecutor, who takes the charging decision. Kenya’s Authority may require the Director of Public Prosecutions to respond to its recommendation, which is a duty to answer, not a duty to charge.',
      },
      {
        claim: 'Oversight bodies discipline officers.',
        reality:
          'Almost none do. Across the bodies researched, discipline is referred to the police hierarchy. The one conditional exception found is an internal unit — Kenya’s — and only where the Inspector-General authorises it.',
      },
      {
        claim: 'A complaint sent back to the police has been dismissed.',
        reality:
          'Several statutes route defined categories to the police deliberately, with arrangements for how they must be handled. Referral is a step in the process, not the end of it.',
      },
    ],
    countryExamples: [
      {
        countrySlug: 'norway',
        note: 'Holds criminal investigation and prosecution and neither of the complaint stages. Its chief must reject a report that discloses no criminal offence, and where a case calls for an administrative response it goes to the officer’s own commander.',
      },
      {
        countrySlug: 'czechia',
        note: 'Holds criminal investigation only. The Act gives the public a right to alert the inspection to an officer’s CRIMINAL conduct, and no complaint procedure beyond it — while the same provision covers administrative and disciplinary offences when the person complained of belongs to the inspection itself.',
      },
      {
        countrySlug: 'ireland',
        note: 'Shows intake and investigation as separate decisions. Fiosrú determines admissibility, routes defined categories back to An Garda Síochána for resolution, investigates the rest with powers equivalent to a Garda member, and refers to the Director of Public Prosecutions.',
      },
      {
        countrySlug: 'south-africa',
        note: 'Shows the disciplinary boundary at its sharpest. The Directorate recommends; the Commissioner must initiate proceedings within 30 days and report quarterly to the Minister; the disciplinary decision remains the police service’s.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'denmark',
        note: 'Holds the complaint and criminal stages together in one body, which is why the stages should be read as separable rather than always separate. The authority handles conduct complaint cases and investigates criminal cases against police and prosecution personnel alike.',
      },
    ],
  },
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
      /*
       * Added by Wave 15's link-graph audit. A transport police force is jurisdiction
       * defined by function rather than by territory, which is the distinction this page
       * exists to draw — so the link is contextual rather than added to raise a count.
       */
      'transport-police',
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
    related: [
      'police-jurisdiction',
      'contract-policing',
      'municipal-and-national-police',
      'national-and-local-emergency-authority',
    ],
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
    related: [
      'police-jurisdiction',
      'contract-policing',
      'how-police-are-held-to-account',
      'who-is-in-charge-in-an-emergency',
    ],
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
        text: 'Related: [what police jurisdiction means](/law-enforcement/police-jurisdiction), [prefectural police](/institutions/prefectural-police), and [how police are held to account](/law-enforcement/how-police-are-held-to-account). Where a single specialist unit serves a whole country by request rather than by command, see [how specialist units cover a country](/law-enforcement/how-specialist-units-cover-a-country).',
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
      /* Wave 15 link audit: the same municipal tier, worked through in one country. */
      'sheriffs-and-city-police',
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
  /*
   * ==========================================================================
   * WAVE 24 — law enforcement careers, training and professional pathways.
   * ==========================================================================
   *
   * A different kind of wave from 21-23. Those built legal and institutional depth; this builds
   * outward, into the layer the baseline found empty: `police academy`, `recruitment`, `career
   * progression`, `physical fitness`, `shift work` and `report writing` each occurred ZERO times
   * across 148 guides and every reference record.
   *
   * OWNERSHIP. `/professions/[slug]` owns one role — what it is, what it is like, where it leads.
   * These pages own the questions that are NOT about one role: academies, training models, the
   * degree question, ranks against roles, skills, working life, civilian careers. The decision and
   * its alternatives are recorded in docs/research/careers-training-research-plan.md.
   *
   * THE SAFETY BOUNDARY IS THE POINT, NOT A CONSTRAINT ON IT. These pages say WHAT is trained and
   * WHY it is trained. They never say HOW anything is done. "Recruits are instructed in defensive
   * tactics for an average of 64 hours" is a fact about a curriculum from a government census;
   * describing a technique would be instruction, and no page here does it.
   *
   * PRODUCT SCOPE. Wave 24 does not deepen procedural law. Where research met procedural material
   * it was used only as the minimum context needed to explain a role. A procedural-depth guard in
   * tests/content/wave24-careers-training.test.ts enforces that mechanically.
   *
   * EVIDENCE. Five systems, content-confirmed to Tier 1 sources: England & Wales, Ireland, Germany
   * (Berlin), the Netherlands, and the United States. France was attempted and returned HTTP 403
   * on every path and is described NOWHERE in this wave. Ten other systems were not researched.
   *
   * NO PAY. Recruitment material states pay; this wave publishes none of it. `compensation` is a
   * restricted claim category, and Part AA of the brief defers salary to a dedicated layer.
   */
  {
    slug: 'what-a-police-academy-is',
    title: 'What a police academy is',
    shortTitle: 'Police academies',
    question: 'What is a police academy, and does every country have one?',
    summary:
      'A police academy is an institution that delivers initial police training — but the five systems researched here organise that training in five different ways, and one of them awards a university degree for it.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'police-training-and-police-education',
      'what-police-recruits-are-taught',
      'do-police-officers-need-a-degree',
      'how-policing-careers-develop',
    ],
    sources: [
      'us-bjs-training-academies-2022',
      'ie-garda-trainee-booklet-2024',
      'nl-politieacademie-basisopleidingen',
      'nl-politie-opleidingsoverzicht',
      'de-berlin-polizei-studium',
      'ew-joining-police-entry-routes',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 9,
    uncertainty: [
      'Five systems were researched: England and Wales, Ireland, Germany (Berlin only), the Netherlands and the United States. France was attempted and every official path returned HTTP 403, so France is not described here.',
      'The German material is for Berlin only. Each of the sixteen Länder recruits separately, as does the Bundespolizei, and nothing here establishes what any other Land does.',
      'Nothing here states any country’s entry requirements beyond what the quoted official pages say, and no page in this wave states pay.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A police academy is an institution that delivers initial training to people entering a police service. That much is common. Almost nothing else is: whether the academy is run by the police or by a college, whether it is national or regional, how long training lasts, and whether it awards an academic qualification all differ, and they differ between neighbouring countries as much as between distant ones.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes how initial police training is organised in five researched systems. It is educational orientation, not recruitment advice, and it is not legal advice. It describes no technique and no operational method. Anyone considering applying should consult the official recruitment service for the country and force concerned, because requirements change and are set by the employer.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason a police service trains people in an institution rather than only on the job is that the role carries legal powers from the first day it is exercised. A new officer may be the only person present when a decision has to be taken against a legal threshold, and there is no way to acquire that judgement by observation alone.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which is also why the models differ so much',
        text: 'Every system is solving the same problem — how do you prepare a person to exercise legal authority responsibly — and the answers reflect what each system thinks the job mainly is. A system that treats policing as a graduate profession builds a degree. A system that treats it as a public-service craft builds an apprenticeship. Both are answers to the same question.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'In the United States there is no single academy and no national programme. The Bureau of Justice Statistics 2022 census of training academies found academies operated both by law enforcement agencies and by colleges and technical schools, and recorded an average of **806 hours** of core basic training across all of them.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the average conceals the finding',
        text: 'The same census records 681 hours at state POST or equivalent academies, 734 at sheriff’s office academies, 759 at academies run by two-year colleges, and 969 at state police and highway patrol academies. The longest is roughly 40% longer than the shortest — inside one country. "How long is police training in the United States" has no single answer, and the average is the least informative way to state it.',
      },
      {
        kind: 'paragraph',
        text: 'Ireland runs one national programme at one place. The Garda Trainee 2024 information booklet describes a Foundation Training Programme whose Phase I, Stages 1 to 3 runs "for a period of 36 weeks (or such period of time as the Garda Commissioner may determine)", with Stage 1 residential at the Garda College in Templemore, Stage 2 an observational placement in an operational Garda station, and Stage 3 residential again. Trainees "attest after 36 weeks".',
        claim: 'fact',
        sources: ['ie-garda-trainee-booklet-2024'],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands runs a national Politieacademie and offers several distinct programmes rather than one. The basispolitieopleiding is at "niveau 4" and lasts "twee jaar", taught at a Politieacademie location with practical lessons in the region where the student is posted. Alongside it sit four three-year hbo bachelor programmes — Politiekunde Politieagent, Politiekunde Wijkagent, Rechercheur and Politieleider.',
        claim: 'fact',
        sources: ['nl-politieacademie-basisopleidingen', 'nl-politie-opleidingsoverzicht'],
      },
      {
        kind: 'paragraph',
        text: 'Berlin has two separate tracks entered at different education levels. The mittlerer Dienst runs a Vorbereitungsdienst of "2 ½ Jahre". The gehobener Dienst is a course of study: "Das Studium dauert 3 Jahre und ist in 15 abgeschlossene Module gegliedert", and on completion "wird dir der Grad „Bachelor of Arts (B. A.)“ verliehen".',
        claim: 'fact',
        sources: ['de-berlin-polizei-studium'],
      },
      {
        kind: 'paragraph',
        text: 'England and Wales has neither one academy nor one programme, but several parallel entry routes into the same job. The Police Constable Degree Apprenticeship "normally takes three years to complete, with the option to specialise in your third year", and an apprentice is "a police officer from your first day on the job".',
        claim: 'fact',
        sources: ['ew-joining-police-entry-routes'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The word "academy" does not travel well',
            description:
              'Of the five systems here, only the United States material uses "academy" as the ordinary term. Ireland has a College, the Netherlands has an Academie that awards bachelor degrees, Berlin has a Studium, and England and Wales has apprenticeships and entry programmes delivered with higher education providers. Asking "what is the police academy like in country X" presupposes a structure that four of the five do not have.',
          },
          {
            term: 'Training in an institution is usually not the whole of training',
            description:
              'Ireland alternates residential stages with a placement in an operational station. The Netherlands splits between academy and the region of posting. In the United States, the 2022 census found 89.2% of academies reported mandatory field training after basic training for some or all recruits, averaging 503 hours. Classroom time is one component of a longer structure in every system researched.',
          },
          {
            term: 'Who runs it changes what it is',
            description:
              'An academy operated by an employing agency, a national institution serving one service, and a programme delivered jointly with a university are three different institutional arrangements, and they answer to different people. The United States census counted academies in both of the first two categories; the Netherlands and Ireland are national institutions; England and Wales delivers with higher education providers.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has a police academy.',
        reality:
          'Of the five systems researched, one uses academies as the ordinary structure, two run national institutions under other names, one runs a course of study awarding a Bachelor of Arts, and one runs parallel entry routes delivered with higher education providers.',
      },
      {
        claim: 'Police training takes about the same time everywhere.',
        reality:
          'Among the researched systems the initial programmes ranged from a 36-week Phase I in Ireland to two-year and three-year programmes in the Netherlands and Berlin. Within the United States alone, the 2022 census recorded academy averages from 681 to 969 hours by academy type.',
      },
      {
        claim: 'Police training happens in a classroom.',
        reality:
          'Every researched system combines instruction with supervised practice. Ireland places trainees in an operational station between residential stages, the Netherlands splits between the Politieacademie and the region of posting, and 89.2% of United States academies reported mandatory field training after basic training.',
      },
      {
        claim: 'A police academy is run by the police.',
        reality:
          'The 2022 United States census counted academies operated by law enforcement entities and academies operated by colleges and technical schools. In England and Wales the programmes are delivered in collaboration with higher education providers.',
      },
      {
        claim: 'You are not a police officer until training ends.',
        reality:
          'It depends on the system. In England and Wales an apprentice is "a police officer from your first day on the job". In Ireland a trainee attests after 36 weeks and then enters a probationary period.',
      },
      {
        claim: 'Police training does not lead to a qualification.',
        reality:
          'In Berlin the gehobener Dienst awards a Bachelor of Arts. The Dutch routes include four hbo bachelor programmes. The Police Constable Degree Apprenticeship leads to a Level 6 degree in professional policing practice.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five systems, five structures, as researched on 6 September 2026.',
      },
      {
        kind: 'list',
        items: [
          'Decentralised academies with no national programme, run by agencies and by colleges — United States.',
          'One national college running a phased programme that alternates residential training with an operational placement — Ireland.',
          'A national academy offering an mbo-level route and four bachelor routes — Netherlands.',
          'Two separate tracks entered at different education levels, one of them a three-year degree course — Berlin.',
          'Parallel entry routes into the same rank, delivered with higher education providers, with the recruit employed from day one — England and Wales.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each describes the system named and no other. Nothing here establishes what France, Czechia, Poland, Spain, Canada, Australia, New Zealand, Japan, South Africa or Brazil do — none of those was researched for this wave.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Training is where a police service decides what kind of officer it wants, and it is one of the few places the public can see that decision written down. A curriculum that devotes measured time to law, to communication and to community interaction is making a claim about the job that can be checked against what officers actually do.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What is actually taught is [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught). Whether the qualification is education or training is [police training and police education](/law-enforcement/police-training-and-police-education). Whether a degree is needed to start is [do police officers need a degree](/law-enforcement/do-police-officers-need-a-degree).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught), [do police officers need a degree](/law-enforcement/do-police-officers-need-a-degree), and [the patrol officer role](/professions/patrol-officer). Who runs the training is closely tied to who does the recruiting: see [who recruits police officers](/law-enforcement/who-recruits-police-officers), and, for the college this page names, [police recruitment in Ireland](/countries/ireland/police-recruitment). Equipment arrives during training rather than after it — see [issued equipment and personal equipment](/law-enforcement/issued-equipment-and-personal-equipment).',
      },
    ],
  },
  {
    slug: 'do-police-officers-need-a-degree',
    title: 'Do police officers need a degree?',
    shortTitle: 'Degrees and policing',
    question: 'Do you need a university degree to become a police officer?',
    summary:
      'In none of the five systems researched is a university degree required to enter. Two of them award one for completing training, which is a different thing and is the source of most of the confusion.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-a-police-academy-is',
      'police-training-and-police-education',
      'how-policing-careers-develop',
      'skills-that-policing-relies-on',
    ],
    sources: [
      'ew-joining-police-entry-routes',
      'ie-garda-educational-requirements',
      'de-berlin-polizei-ausbildung',
      'de-berlin-polizei-studium',
      'nl-politie-opleidingsoverzicht',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'Four systems were researched for entry qualifications: England and Wales, Ireland, Germany (Berlin only) and the Netherlands. In the United States requirements are set by each state’s standards body and each employing agency, and no single national requirement exists; no United States entry requirement is stated here.',
      'Requirements change, and are set by the employer. Every statement here is as at 6 September 2026 and is not a substitute for the official recruitment service for the force concerned.',
      'The Dutch prior qualification required for each route was NOT RESEARCHED — only the level and duration of the programmes themselves.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'This question is asked more often than almost any other about policing careers, and it has a clear answer in the systems researched here: no. What makes it confusing is that two of those systems award a degree for completing police training — so a degree is associated with policing, without being required to start.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes entry qualifications in four researched systems, as at 6 September 2026. It is educational orientation, not recruitment advice, and it cannot tell any individual whether they qualify — that depends on the employer, the jurisdiction and personal circumstances this platform does not assess. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The belief that policing requires a criminal justice degree is worth addressing directly because acting on it costs money. Someone who believes it may spend three years and considerable expense on a qualification that was never a condition of entry to the job they wanted.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which is exactly why this page names its sources',
        text: 'A page about education is a page with a commercial shadow: education is something that can be sold. The defence against that is to state what official recruitment services actually say, cite them, and let the answer be whatever it is. Here the answer happens to be that the expensive route is not required.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The official recruitment service for England and Wales states it in five words: **"You don’t need a degree to join the police."** The Police Constable Degree Apprenticeship requires "a Level 3 qualification (which is two A-levels or equivalent) in at least two subjects", or equivalent relevant experience or training assessed individually.',
        claim: 'fact',
        sources: ['ew-joining-police-entry-routes'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the degree in the name is the output',
        text: 'The apprenticeship leads to a Level 6 Degree in Professional Policing Practice, funded by the force, with the apprentice employed as a police officer from the first day. The word "degree" appears in the route’s name because the route awards one — not because one is needed to enter it. That single ambiguity probably generates more of this misunderstanding than anything else.',
      },
      {
        kind: 'paragraph',
        text: 'Ireland sets a secondary-level requirement with two alternatives. An applicant must "have obtained an Irish Leaving Certificate with a grade D3 or O6 minimum in five subjects at Ordinary Level", or "hold a minimum of a Level 5 Major award (120 Credits) on the National Framework of Qualifications (NFQ)", or "hold a recognised qualification (at Level 5 or greater), deemed comparable to the above" — and be proficient in Irish or English.',
        claim: 'fact',
        sources: ['ie-garda-educational-requirements'],
      },
      {
        kind: 'paragraph',
        text: 'Berlin answers the question twice, because it has two tracks. For the mittlerer Dienst the minimum is the erweiterte Berufsbildungsreife, or the Berufsbildungsreife together with a completed two-year vocational training and two years of work. For the gehobener Dienst, a candidate needs "mindestens die Fachhochschulreife bzw. das Abitur" — a school-leaving qualification, not a degree — and the three-year Studium then awards the Bachelor of Arts.',
        claim: 'fact',
        sources: ['de-berlin-polizei-ausbildung', 'de-berlin-polizei-studium'],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands offers entry at two education levels: a two-year mbo-4 route, and four three-year hbo bachelor programmes. The bachelor is the programme, not the prerequisite.',
        claim: 'fact',
        sources: ['nl-politie-opleidingsoverzicht'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Entry qualification and training award are different facts',
            description:
              'In England and Wales, Berlin and the Netherlands a person can enter without a degree and hold one at the end. Reading the award as the requirement inverts the arrangement completely, and it is the specific error this page exists to correct.',
          },
          {
            term: 'A degree route existing does not make a degree required',
            description:
              'England and Wales also has a Degree Holder Entry Programme for people whose first degree is in another subject, and a pre-join professional policing degree. Those are routes for people who have a degree, offered alongside routes for people who do not.',
          },
          {
            term: 'Where a higher qualification does something, it opens a different track, not the only track',
            description:
              'Berlin’s Fachhochschulreife or Abitur requirement is for the gehobener Dienst specifically. The mittlerer Dienst exists alongside it with a lower requirement. The higher qualification changes which track, not whether entry is possible.',
          },
          {
            term: 'In some systems there is no national answer at all',
            description:
              'In the United States, minimum selection standards are set by each state’s peace officer standards body and by each employing agency. No single national education requirement exists, and none is stated here.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'You need a criminal justice degree to become a police officer.',
        reality:
          'No researched system requires a degree in any subject to enter. The official recruitment service for England and Wales states: "You don\'t need a degree to join the police."',
      },
      {
        claim: 'The Police Constable Degree Apprenticeship requires a degree.',
        reality:
          'It requires a Level 3 qualification in at least two subjects, or equivalent relevant experience. The degree is what the route awards on completion.',
      },
      {
        claim: 'A degree is required somewhere, so it is effectively required everywhere.',
        reality:
          'Ireland sets a Leaving Certificate or NFQ Level 5 requirement. Berlin’s mittlerer Dienst accepts the erweiterte Berufsbildungsreife. Neither is a degree.',
      },
      {
        claim: 'Having a degree makes no difference to entry.',
        reality:
          'It can change which route is open. England and Wales runs a separate Degree Holder Entry Programme, and Berlin’s gehobener Dienst requires the Fachhochschulreife or Abitur, which the mittlerer Dienst does not.',
      },
      {
        claim: 'Requirements are the same across a country.',
        reality:
          'In Germany each Land recruits separately and the material here is Berlin only. In the United States standards are set by each state body and each employing agency.',
      },
      {
        claim: 'These requirements are permanent.',
        reality:
          'Entry requirements are set by employers and change. Everything here is stated as at 6 September 2026 and should be checked against the official recruitment service for the force concerned.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Minimum entry qualification, in the four systems where a national or regional answer exists.',
      },
      {
        kind: 'list',
        items: [
          'Level 3 qualification in at least two subjects, or equivalent experience — England and Wales.',
          'Leaving Certificate at grade D3 or O6 in five subjects at Ordinary Level, or an NFQ Level 5 Major award, or a comparable qualification at Level 5 or above — Ireland.',
          'Erweiterte Berufsbildungsreife, or Berufsbildungsreife plus a completed two-year vocational training and two years of work — Berlin, mittlerer Dienst.',
          'Mindestens die Fachhochschulreife bzw. das Abitur — Berlin, gehobener Dienst.',
          'Entry at mbo-4 or hbo bachelor level; the specific prior qualification per route was not researched — Netherlands.',
          'No national requirement; set by each state standards body and each employing agency — United States.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What this list is not',
        text: 'It is not a checklist of eligibility. Entry also involves selection, vetting, medical and other assessments that this wave deliberately did not research, and no page here can tell an individual whether they qualify.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'How a society sets the entry qualification for policing is a decision about who can hold public authority. A high academic threshold narrows the field in ways that may not track the qualities the work requires; a low one places more weight on training and selection. The systems here have made visibly different choices, and each is defensible on its own terms.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What training actually consists of is [what a police academy is](/law-enforcement/what-a-police-academy-is). The distinction between being trained and being educated is [police training and police education](/law-enforcement/police-training-and-police-education). The qualities the work relies on are [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a police academy is](/law-enforcement/what-a-police-academy-is), [police training and police education](/law-enforcement/police-training-and-police-education), and [the patrol officer role](/professions/patrol-officer). How the education threshold sits alongside the other entry requirements in six systems is [police entry requirements across systems](/law-enforcement/police-entry-requirements-across-systems), and the criterion that varies most between systems is status: [citizenship, nationality and residency in police recruitment](/law-enforcement/citizenship-nationality-and-residency-in-police-recruitment). The system this page quotes most often is set out in full in [police recruitment in England and Wales](/law-enforcement/police-recruitment-in-england-and-wales).',
      },
    ],
  },
  {
    slug: 'police-training-and-police-education',
    title: 'Police training and police education',
    shortTitle: 'Training and education',
    question: 'What is the difference between police training and police education?',
    summary:
      'Training prepares a person to do a defined thing competently; education develops judgement that transfers to situations nobody anticipated. Some systems deliver both under one programme, and whether they are the same activity is a live question that different countries have answered differently.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-a-police-academy-is',
      'do-police-officers-need-a-degree',
      'what-police-recruits-are-taught',
      'skills-that-policing-relies-on',
    ],
    sources: [
      'de-berlin-polizei-studium',
      'de-berlin-polizei-ausbildung',
      'nl-politie-opleidingsoverzicht',
      'ew-joining-police-entry-routes',
      'us-bjs-training-academies-2022',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'This page draws a conceptual distinction and then tests it against four researched systems. The distinction itself is analysis, not a finding, and is presented as such.',
      'No system researched here labels its own programmes as "training" or "education" in the terms used on this page. The German words Ausbildung and Studium are the closest, and even they are the names of two tracks rather than a theory about them.',
      'Whether either approach produces better outcomes was NOT RESEARCHED and is not claimed. This page compares structures, not results.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Training answers "how do I do this correctly". Education answers "how do I think about a situation I have not seen before". Both matter in policing, and the interesting question is not which is better but how each system combines them — because a police officer meets defined tasks and undefined situations in the same shift.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This compares how initial preparation is structured across four researched systems, and offers a distinction for thinking about it. The distinction is this platform’s analysis, not a finding from any source. Nothing here describes technique, and this is not legal or career advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The distinction matters because the two are assessed differently. You can test whether someone can perform a procedure correctly. Testing whether someone will exercise judgement well in a situation nobody has described to them is much harder, and a programme that measures only the first can look rigorous while leaving the harder question unexamined.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And most of policing is the second kind',
        text: 'A patrol officer arrives at a situation nobody has classified yet, involving people whose circumstances are unknown, and has to decide what is happening before deciding what to do. That is a judgement problem before it is a procedure problem, which is the case for education inside a vocational role.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Berlin names the difference in its own structure. The mittlerer Dienst is an **Ausbildung** — a Vorbereitungsdienst of "2 ½ Jahre" leading to appointment as Polizeimeisterin or Polizeimeister. The gehobener Dienst is a **Studium**: "Das Studium dauert 3 Jahre und ist in 15 abgeschlossene Module gegliedert", awarding a Bachelor of Arts.',
        claim: 'fact',
        sources: ['de-berlin-polizei-ausbildung', 'de-berlin-polizei-studium'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two tracks, not two opinions',
        text: 'Berlin does not treat one as a superior version of the other. They are separate entry tracks with different entry qualifications leading to different parts of the service. A system can hold both models simultaneously and staff itself from both, which is a more interesting arrangement than choosing.',
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands makes the same split by level rather than by name: a two-year mbo-4 route and four three-year hbo bachelor programmes, all leading into the police. England and Wales combines them inside one route — the Police Constable Degree Apprenticeship is an apprenticeship delivered with a higher education provider that awards a Level 6 degree, with the apprentice employed as an officer throughout.',
        claim: 'fact',
        sources: ['nl-politie-opleidingsoverzicht', 'ew-joining-police-entry-routes'],
      },
      {
        kind: 'paragraph',
        text: 'The United States data shows the mixture measured in hours. The 2022 census records that over 97% of recruits were instructed in legal subjects, receiving an average of 51 hours in criminal and constitutional law, 26 in traffic law and 10 in juvenile justice law, alongside skills instruction. It also records that 97% of academies formally tested recruits with an average of 16 skill or proficiency assessments, and that 95% required written and physical fitness assessments.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Where the assessment weight sits tells you what a programme thinks it is doing',
        text: 'Skill or proficiency assessment was the most common formal testing method in the 2022 census. That is a training instrument: it establishes that a recruit can perform something to a standard. Written assessment is the instrument that reaches understanding. A curriculum can be read, in part, from which instruments it relies on.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The distinction is not classroom against practical',
            description:
              'Scenario exercises are practical and are squarely about judgement. A written examination can test recall of procedure and nothing else. Where the learning happens does not determine which kind of learning it is.',
          },
          {
            term: 'Nor is it academic against vocational',
            description:
              'The Police Constable Degree Apprenticeship is simultaneously an apprenticeship and a degree, and the apprentice is employed as an officer from day one. Berlin’s Studium is a university-level qualification that exists to staff a public service. The categories cut across each other.',
          },
          {
            term: 'A qualification is evidence of one and not automatically the other',
            description:
              'A degree awarded for police study evidences education in the sense used here. Certification in a specific power evidences training. Systems issue both, and they are not interchangeable even when one programme produces both.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Police training and police education are the same thing.',
        reality:
          'Berlin runs them as two separate entry tracks with different names, different durations and different entry qualifications: a 2½-year Ausbildung and a 3-year Studium awarding a Bachelor of Arts.',
      },
      {
        claim: 'Education means classroom and training means practical.',
        reality:
          'Scenario exercises are practical and are about judgement; a written test can examine only recall of procedure. The setting does not determine the kind of learning.',
      },
      {
        claim: 'A system must choose between the two models.',
        reality:
          'Berlin staffs itself from both tracks simultaneously, and the Netherlands offers an mbo route alongside four bachelor routes.',
      },
      {
        claim: 'An apprenticeship cannot be academic.',
        reality:
          'The Police Constable Degree Apprenticeship is delivered with a higher education provider and awards a Level 6 degree in professional policing practice, while the apprentice is employed as a police officer.',
      },
      {
        claim: 'More education produces better policing.',
        reality:
          'Whether either approach produces better outcomes was not researched for this page and is not claimed. The comparison here is between structures.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'How four researched systems combine the two.',
      },
      {
        kind: 'list',
        items: [
          'Two named tracks, Ausbildung and Studium, entered separately — Berlin.',
          'Two education levels, mbo-4 and hbo bachelor, entered separately — Netherlands.',
          'One route that is both, an apprenticeship awarding a degree while employed — England and Wales.',
          'Measured hours of legal instruction alongside skills instruction, with proficiency assessment the most common formal test — United States.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'This distinction reaches accountability directly. An officer who has been trained to follow a procedure can say what the procedure was. An officer who has been educated to exercise judgement can be asked why this decision, in these circumstances — and a system that expects officers to answer that question has to prepare them to.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The institutional structures are [what a police academy is](/law-enforcement/what-a-police-academy-is). The subjects themselves are [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught). What accountability asks of an officer afterwards is [why police accountability matters](/law-enforcement/why-police-accountability-matters).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a police academy is](/law-enforcement/what-a-police-academy-is), [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught), and [do police officers need a degree](/law-enforcement/do-police-officers-need-a-degree). The two German tracks this page contrasts are entered separately by each Land: see [police recruitment in Germany](/countries/germany/police-recruitment).',
      },
    ],
  },
  {
    slug: 'what-police-recruits-are-taught',
    title: 'What police recruits are taught',
    shortTitle: 'What recruits are taught',
    question: 'What subjects are studied in police training?',
    summary:
      'One government census publishes the subject headings and the hours. The result is not the curriculum most people expect: legal instruction, community topics and health occupy substantial measured time alongside the skills subjects.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-a-police-academy-is',
      'police-training-and-police-education',
      'skills-that-policing-relies-on',
      'physical-readiness-in-policing-careers',
    ],
    sources: ['us-bjs-training-academies-2022', 'ie-garda-trainee-booklet-2024'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'The subject-hour figures are for state and local law enforcement academies in the UNITED STATES in 2022 only, from the Bureau of Justice Statistics census published June 2025. They establish nothing about federal agencies and nothing about any other country.',
      'No comparable published subject-hour breakdown was obtained for any other researched system, so this page compares one country’s curriculum against nothing.',
      'These are averages across academies with substantially different programme lengths. An average hour count is not a statement about any particular academy.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A curriculum is a statement of what an organisation believes the job consists of, expressed in the only currency training has: time. Where a police service publishes the hours, that statement can be read.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'This page names subjects and states how much time is spent on them. It does not describe how anything is done. There is no technique, no tactic, no procedure and no instruction of any kind here — the difference between "recruits are instructed in defensive tactics" and describing a defensive tactic is the whole boundary of this wave, and this page stays on the first side of it.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Most people picture police training from film, where it consists of weapons and physical confrontation. The published figures are the cheapest available correction to that picture, and they matter to anyone deciding whether the job is what they think it is.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Bureau of Justice Statistics 2022 census records the average hours devoted to the largest skills subjects: **73 hours** to firearms skills, **64 hours** to defensive tactics, and **56 hours** to health and fitness.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'paragraph',
        text: 'It records legal instruction on a comparable scale. Over 97% of recruits were instructed in legal subjects, receiving an average of **51 hours** in criminal and constitutional law, **26 hours** in traffic law, and **10 hours** in juvenile justice law. Over 80% of recruits were trained in at least one community-related topic.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Add the legal subjects together',
        text: 'Criminal and constitutional law, traffic law and juvenile justice law come to 87 average hours — more than firearms skills, and more than defensive tactics. A recruit in these academies spent more measured time learning what the law permits than learning either of the two subjects the popular image is built from.',
      },
      {
        kind: 'paragraph',
        text: 'The census also records how learning was tested. Skill or proficiency assessments were the most common formal testing method in 2022, with 97% of academies requiring an average of 16 of them. Ninety-five percent required written and physical fitness assessments as part of the basic training curriculum.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'paragraph',
        text: 'Where a curriculum is not published as hours, the structure still says something. The Irish Foundation Training Programme alternates residential stages at the Garda College with an observational placement in an operational Garda station — a design in which part of what is taught is what the work actually looks like.',
        claim: 'fact',
        sources: ['ie-garda-trainee-booklet-2024'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Hours measure emphasis, not importance',
            description:
              'A subject can be indispensable and take little time. Ten average hours on juvenile justice law does not mean it matters less than 73 on firearms skills; some subjects are inherently longer to train to a standard than to understand.',
          },
          {
            term: 'An average across academies is not a programme',
            description:
              'The same census records academy averages from 681 to 969 hours of core basic training by academy type. Subject averages drawn across that range describe no single academy’s timetable.',
          },
          {
            term: 'Formal instruction is not the whole of preparation',
            description:
              'The same census found 89.2% of academies reported mandatory field training after basic training for some or all recruits, averaging 503 hours. Measured against that, classroom hours are a minority of total supervised preparation.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Police training is mostly weapons and physical confrontation.',
        reality:
          'In the 2022 United States census, firearms skills averaged 73 hours and defensive tactics 64. Criminal and constitutional law, traffic law and juvenile justice law together averaged 87.',
      },
      {
        claim: 'Recruits get little legal instruction.',
        reality:
          'Over 97% of recruits were instructed in legal subjects, averaging 51 hours in criminal and constitutional law alone.',
      },
      {
        claim: 'Community topics are an optional extra.',
        reality:
          'The census records that over 80% of recruits were trained in at least one community-related topic.',
      },
      {
        claim: 'These figures describe police training generally.',
        reality:
          'They describe state and local law enforcement academies in the United States in 2022. No comparable published breakdown was obtained for any other country, and none is implied.',
      },
      {
        claim: 'Training ends when the academy ends.',
        reality:
          '89.2% of academies reported mandatory field training after basic training for some or all recruits, averaging 503 hours.',
      },
      {
        claim: 'An average hour figure tells you what a given academy teaches.',
        reality:
          'The same census recorded academy averages ranging from 681 to 969 hours of core basic training by academy type, so a subject average across that range describes no individual programme.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Average hours of instruction, state and local law enforcement academies, United States, 2022.',
      },
      {
        kind: 'list',
        items: [
          'Firearms skills — 73 hours.',
          'Defensive tactics — 64 hours.',
          'Health and fitness — 56 hours.',
          'Criminal and constitutional law — 51 hours.',
          'Traffic law — 26 hours.',
          'Juvenile justice law — 10 hours.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these figures',
        text: 'Bureau of Justice Statistics, Census of Law Enforcement Training Academies, 2022, published June 2025. State and local academies in the United States only. Averages across academies of substantially different lengths.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A published curriculum is a form of accountability that costs nothing to exercise. It lets anyone ask whether what a service says it values matches what it spends its training time on — and it lets that question be asked before anything goes wrong rather than only afterwards.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'How the training is organised is [what a police academy is](/law-enforcement/what-a-police-academy-is). What the legal instruction is about is covered across [when may police use force](/law-enforcement/police-use-of-force) and [what are arrest and detention](/law-enforcement/arrest-and-detention). The professional qualities involved are [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a police academy is](/law-enforcement/what-a-police-academy-is), [police training and police education](/law-enforcement/police-training-and-police-education), and [physical readiness in policing careers](/law-enforcement/physical-readiness-in-policing-careers).',
      },
    ],
  },
  {
    slug: 'rank-role-and-specialisation',
    title: 'Rank, role and specialisation',
    shortTitle: 'Rank, role, specialisation',
    question: 'Is "detective" a rank, a job, or something else?',
    summary:
      'Four different things get described with the same words: rank, role, specialisation and assignment. "Detective" is a different one of them in different countries — and in the Netherlands it is an entry route you can be admitted to from the start.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-policing-careers-develop',
      'specialist-roles-in-policing',
      'civilian-roles-in-police-organisations',
      'what-a-police-academy-is',
    ],
    sources: [
      'nl-politie-opleidingsoverzicht',
      'de-berlin-polizei-studium',
      'de-berlin-polizei-ausbildung',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 9,
    uncertainty: [
      'The four-way distinction on this page is analysis. It is a way of reading arrangements that exist, not a claim any system makes about itself.',
      'The Dutch entry routes are content-confirmed. Whether "detective" is formally a rank, a role or an assignment was NOT RESEARCHED for any individual system, including the Netherlands and Germany, and no system is described here as using one arrangement rather than another.',
      'No rank ladder for any country is stated anywhere in this wave. Rank structures differ substantially and a general one would be wrong everywhere.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Four things are routinely described with the same vocabulary, and they come apart: **rank** is a position of authority in a hierarchy; **role** is the kind of work a person does; **specialisation** is expertise in a particular field of that work; and **assignment** is where a person is currently posted. A single officer holds all four at once, and they can change independently.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This offers a way of distinguishing four things that get confused, illustrated with researched examples. It states no country’s rank structure, because rank structures differ substantially and a general ladder would misdescribe every system. It is not career advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The confusion has practical consequences. Someone who believes detective is a promotion will assume the route runs through seniority. Someone who believes it is a job will look for a vacancy. Depending on the country, either could be right — and the answer determines what a person would actually do about it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the English vocabulary makes it worse',
        text: 'English uses "detective" for all four senses without marking which. It is a rank in some services, a designation held at an ordinary rank in others, a specialisation reached by selection in others, and elsewhere the name of a separate occupational structure. The word carries no information about which arrangement is in use.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Netherlands supplies the clearest single counter-example to the promotion assumption. Among the national police entry routes are four three-year hbo bachelor programmes — bachelor Politiekunde Politieagent, bachelor Politiekunde Wijkagent, **bachelor Rechercheur**, and bachelor Politieleider — alongside a two-year mbo-4 route.',
        claim: 'fact',
        sources: ['nl-politie-opleidingsoverzicht'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Read that list again',
        text: 'Investigator and community officer are not stages someone reaches after years in uniform. They are programmes a person can be admitted to at the start. So is police leader. In this system the branch point sits at entry, where other systems put it years later — which means "how do I become a detective" has a completely different answer depending on where it is asked.',
      },
      {
        kind: 'paragraph',
        text: 'Berlin shows a different structure again: two tracks entered at different education levels, the mittlerer Dienst through a 2½-year Vorbereitungsdienst and the gehobener Dienst through a three-year Studium awarding a Bachelor of Arts. Which track a person enters is decided at entry and is not a promotion from one to the other.',
        claim: 'fact',
        sources: ['de-berlin-polizei-ausbildung', 'de-berlin-polizei-studium'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Rank is about authority, not about expertise',
            description:
              'A rank determines what a person may direct, authorise and be accountable for. Someone can hold considerable expertise at a junior rank, and a senior rank does not imply expertise in any particular field of the work.',
          },
          {
            term: 'Specialisation is about expertise, not about authority',
            description:
              'A specialist in economic crime, digital investigation or public order has depth in a field. That is a different axis from supervisory authority, and in most systems a person can move along one without moving along the other.',
          },
          {
            term: 'Role is the kind of work; assignment is the current posting',
            description:
              'Two officers of the same rank may do entirely different work, and the same officer may do different work next year without any change of rank. Where a system uses "detective" as a designation rather than a rank, this is the axis it sits on.',
          },
          {
            term: 'Because the axes are independent, progression is not one ladder',
            description:
              'A career can advance by taking supervisory responsibility, or by deepening specialist expertise, or by moving between roles — and systems differ in which of these they reward, which they formalise, and whether moving along one requires moving along another.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What this means for reading any job title',
        text: 'A title alone does not tell you whether you are looking at a rank, a role, a specialisation or a posting. That is a question about the particular service, answered by that service’s own material — which is also why this page names no ladder.',
      },
    ],
    misconceptions: [
      {
        claim: 'Detective is a rank.',
        reality:
          'It is in some services. In others it is a designation held at an ordinary rank, or a specialisation reached by selection, or the name of a separate occupational structure. The word does not say which.',
      },
      {
        claim: 'You have to serve in uniform before you can investigate.',
        reality:
          'In many systems that is the route. In the Netherlands, bachelor Rechercheur is one of the entry programmes into the national police, so a person may be admitted to investigative education at the start.',
      },
      {
        claim: 'Rank and seniority in a specialism are the same ladder.',
        reality:
          'They are different axes. Rank concerns authority to direct and authorise; specialisation concerns depth of expertise in a field. Systems differ in how, and whether, movement along one requires the other.',
      },
      {
        claim: 'Police ranks are broadly the same across countries.',
        reality:
          'Rank structures differ substantially, and this page states none. Berlin alone runs two separate service tracks entered at different education levels, which is not a rank ladder at all.',
      },
      {
        claim: 'A more senior officer is a more expert investigator.',
        reality:
          'Seniority is authority over the direction of work. Expertise in a field of investigation is acquired separately, and a system may place deep specialists at ordinary ranks.',
      },
      {
        claim: 'Community policing is a junior role people move on from.',
        reality:
          'In the Netherlands, bachelor Politiekunde Wijkagent is a three-year higher-professional bachelor programme and one of the named entry routes, alongside the investigator and police-leader programmes.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where the branch point sits, in the two systems researched for this question.',
      },
      {
        kind: 'list',
        items: [
          'At entry, by programme — the Netherlands offers separate bachelor routes for police officer, community officer, investigator and police leader.',
          'At entry, by service track — Berlin separates mittlerer Dienst and gehobener Dienst, entered at different education levels.',
          'Later, by selection after service — the pattern in systems where investigation follows time in uniform. Which systems those are was not researched here.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What is not claimed',
        text: 'That the Netherlands and Berlin are typical, or that the third pattern belongs to any named country. Two systems were researched for this question and the third pattern is stated as a shape, without attribution.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'These distinctions matter to accountability as much as to careers. Knowing whether a decision was taken by someone with authority to take it requires knowing what rank means in that service — and complaints, inquiries and courts all have to make that distinction precisely, in a vocabulary that does not mark it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'How careers move along these axes is [how policing careers develop](/law-enforcement/how-policing-careers-develop). The specialisations themselves are [specialist roles in policing](/law-enforcement/specialist-roles-in-policing). The investigator role is [detective](/professions/detective).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how policing careers develop](/law-enforcement/how-policing-careers-develop), [specialist roles in policing](/law-enforcement/specialist-roles-in-policing), and [the detective role](/professions/detective). The Dutch entry programmes this page relies on are set out in [police recruitment in the Netherlands](/countries/netherlands/police-recruitment).',
      },
    ],
  },
  {
    slug: 'how-policing-careers-develop',
    title: 'How policing careers develop',
    shortTitle: 'Career development',
    question: 'What career paths exist in policing, and how does promotion work?',
    summary:
      'Progression runs along more than one axis, and the systems researched here put the branch point in different places — at entry in some, after years of service in others.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'rank-role-and-specialisation',
      'specialist-roles-in-policing',
      'civilian-roles-in-police-organisations',
      'do-police-officers-need-a-degree',
    ],
    sources: [
      'nl-politie-opleidingsoverzicht',
      'de-berlin-polizei-studium',
      'ew-joining-police-entry-routes',
      'ie-garda-trainee-booklet-2024',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'No promotion system was researched for any country. This page describes where entry-stage branch points sit, using content-confirmed evidence, and describes progression in structural terms only.',
      'No rank ladder, qualifying period, promotion examination or selection process is stated for any system, because none was researched.',
      'Whether any of these structures produces better outcomes was not researched and is not claimed.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A policing career can develop in several directions at once: upward into supervisory authority, sideways into a different kind of work, and downward into depth in a specialism. Which of those a system formalises, and when it makes a person choose, is where the real differences lie.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes structural shapes of progression, illustrated where evidence supports it. It states no promotion process, no qualifying period and no rank ladder for any country, because none was researched. It is not career advice and cannot tell any individual what their prospects are.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'People considering the career usually ask about progression in the terms of the jobs they already know: does it work like a corporate ladder. Policing does not map neatly onto that, because supervisory authority and professional expertise are separated more sharply than in most occupations.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Every researched system begins with a supervised period. Ireland’s trainees "attest after 36 weeks" and then enter a probationary period. In England and Wales the Police Constable Degree Apprenticeship "normally takes three years to complete, with the option to specialise in your third year", with the apprentice employed as an officer throughout.',
        claim: 'fact',
        sources: ['ie-garda-trainee-booklet-2024', 'ew-joining-police-entry-routes'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The third-year specialisation option is the shape in miniature',
        text: 'A route that is three years long and offers a choice of direction in its final year has put a branch point inside initial training. That is neither "everyone does the same thing for years" nor "you choose before you start" — it is a third arrangement, and it exists because systems disagree about when a person can sensibly choose.',
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands puts the branch point at the very beginning: bachelor Politiekunde Politieagent, bachelor Politiekunde Wijkagent, bachelor Rechercheur and bachelor Politieleider are separate three-year entry programmes. A person can be admitted directly to the police-leader programme rather than reaching leadership after service.',
        claim: 'fact',
        sources: ['nl-politie-opleidingsoverzicht'],
      },
      {
        kind: 'paragraph',
        text: 'Berlin separates by service track at entry — mittlerer Dienst and gehobener Dienst, with the latter requiring the Fachhochschulreife or Abitur and awarding a Bachelor of Arts after three years.',
        claim: 'fact',
        sources: ['de-berlin-polizei-studium'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Upward is not the only direction, and not always the most valued',
            description:
              'Moving into supervision means directing work rather than doing it. Someone who wants to investigate may find that promotion moves them away from the work they joined for, which is a genuine trade-off rather than a complaint.',
          },
          {
            term: 'Specialisation can be a career in itself',
            description:
              'Depth in a field — economic crime, digital investigation, public order, training — is a direction of development that does not require supervisory rank, and systems differ in how formally they recognise it.',
          },
          {
            term: 'Moving between roles is normal, not a failure',
            description:
              'Police organisations contain many kinds of work, and moving between them over a career is an ordinary pattern rather than an interruption of one.',
          },
          {
            term: 'Continuing development is usually a requirement',
            description:
              'Periodic re-certification in specific powers and continuing professional development are standard features rather than optional additions, because legal frameworks and expectations change during a career.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'A policing career means climbing a rank ladder.',
        reality:
          'Rank is one axis. Specialisation and role are others, and in the Netherlands the choice between officer, community officer, investigator and police leader is made at entry through separate bachelor programmes.',
      },
      {
        claim: 'You must serve for years before you can specialise.',
        reality:
          'It depends where. In England and Wales the three-year apprenticeship offers "the option to specialise in your third year", and in the Netherlands the specialisation is the entry programme.',
      },
      {
        claim: 'Leadership roles are reached only after long service.',
        reality:
          'The Netherlands runs bachelor Politieleider as one of its named three-year entry programmes.',
      },
      {
        claim: 'Promotion works about the same way in most police services.',
        reality:
          'No promotion system was researched for this page and none is described. What the evidence does show is that systems place the first branch point at entry, during initial training, or after service — three different arrangements.',
      },
      {
        claim: 'Once trained, an officer is finished with training.',
        reality:
          'Continuing professional development and periodic re-certification in specific powers are standard features of the researched systems rather than optional additions.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where the first branch point sits.',
      },
      {
        kind: 'list',
        items: [
          'At entry, by separate bachelor programme — Netherlands.',
          'At entry, by service track — Berlin.',
          'Inside initial training, as an option in the final year — England and Wales, PCDA.',
          'After attestation and probation — Ireland, where Phase I runs 36 weeks before a probationary period.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'How a service structures progression shapes what it is good at. A system that can only reward people by promoting them into supervision loses its best practitioners from practice; a system that recognises specialist depth can keep them. That is an institutional design question with public consequences, not only a career question.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The distinction the whole page rests on is [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation). The specialisations are [specialist roles in policing](/law-enforcement/specialist-roles-in-policing). The starting point is [the patrol officer role](/professions/patrol-officer).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation), [specialist roles in policing](/law-enforcement/specialist-roles-in-policing), and [civilian roles in police organisations](/law-enforcement/civilian-roles-in-police-organisations). Where the branch point sits at entry, the recruitment page shows it directly: [police recruitment in the Netherlands](/countries/netherlands/police-recruitment).',
      },
    ],
  },
  {
    slug: 'specialist-roles-in-policing',
    title: 'Specialist roles in policing',
    shortTitle: 'Specialist roles',
    question: 'What specialisations exist in policing?',
    summary:
      'Police organisations contain many kinds of work beyond general patrol. This describes what those areas are for and what the work involves at a professional level — not how any of it is carried out.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'rank-role-and-specialisation',
      'how-policing-careers-develop',
      'civilian-roles-in-police-organisations',
      'working-life-in-policing',
    ],
    sources: ['nl-politie-opleidingsoverzicht', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'Which specialisations exist in any particular service was NOT RESEARCHED. This describes areas of work that recur across police organisations generally; no service is claimed to have any specific one.',
      'How a person enters any specialisation, what selection it involves, and what training it requires were not researched for any system.',
      'Nothing here describes any capability, method, technique or equipment. That boundary is deliberate and is enforced by a test.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'General patrol is defined by breadth: attending whatever happens. Specialist roles are defined by depth in a particular kind of work. Both exist in most police organisations of any size, and the specialist areas are where a long career usually acquires its shape.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'This says what each area of work is for and what kind of professional it suits. It describes no method, no technique, no tactic, no equipment and no capability. That is not an omission for brevity — describing operational capability would be useful to the wrong reader, and it is outside what this platform publishes.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Specialisation exists because some work cannot be done well by someone doing everything else as well. Financial investigation, work with children, and analysis across many cases each require knowledge that takes years to build and that a generalist cannot maintain alongside general availability.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And that has a cost the organisation has to manage',
        text: 'Every specialist is someone not available for general demand. A service that specialises heavily gains depth and loses flexibility, which is why the balance is an institutional decision rather than a matter of individual preference.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'In the Netherlands two areas are formalised as entry routes rather than later assignments: bachelor Rechercheur for investigation and bachelor Politiekunde Wijkagent for community policing are named three-year bachelor programmes alongside the general police officer route.',
        claim: 'fact',
        sources: ['nl-politie-opleidingsoverzicht'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Investigation',
            description:
              'Establishing what happened in reported offences and assembling material capable of being tested in court. Sub-specialisms are extensive — economic crime, cybercrime, serious violence, child protection — and each requires distinct knowledge. Suits people who are methodical, sceptical of their own conclusions, and comfortable with long timescales.',
          },
          {
            term: 'Community policing',
            description:
              'Sustained work with a defined area or population, so that the relationship exists before it is needed. The work is relational and long-horizon, and its results are harder to measure than incident counts, which makes it a genuinely different professional discipline from response work.',
          },
          {
            term: 'Roads and traffic policing',
            description:
              'Work directed at road safety and offences connected with vehicles. It combines a high volume of public contact with specialised legal and technical knowledge, and in most systems accounts for a large share of the public’s direct contact with police.',
          },
          {
            term: 'Public order',
            description:
              'Policing of events, gatherings and demonstrations, where the professional task is to allow lawful activity to proceed safely. It is planning-intensive and coordination-intensive.',
          },
          {
            term: 'Cybercrime and digital investigation',
            description:
              'Investigation where the evidence is digital. It requires both investigative method and technical understanding, and it is the area where the gap between what is technically possible and what is legally permitted matters most directly.',
          },
          {
            term: 'Intelligence and analysis',
            description:
              'Working across many incidents rather than within one, to identify patterns invisible from inside a single case. Frequently a civilian professional field as much as a sworn one.',
          },
          {
            term: 'Forensic support',
            description:
              'Recovery and handling of physical material so that it can be examined and relied on. Distinct from the laboratory science that follows, and distinct again from the investigation that commissions it.',
          },
          {
            term: 'Specialist operational units',
            description:
              'Services maintain units for situations general patrol is not equipped for, including marine, mounted, transport, dog and firearms units. What each exists for is a matter of public record; how any of them operates is not described here.',
          },
          {
            term: 'Training, supervision and professional standards',
            description:
              'Experienced officers move into preparing others, supervising work, and examining conduct. These are career directions in their own right rather than the end of an operational career.',
          },
          {
            term: 'Public information and administration',
            description:
              'Communication with the public and the media, and the administrative functions any large organisation requires. Frequently civilian roles.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'How people reach these areas differs completely',
        text: 'Entry may be at recruitment, by selection after a qualifying period, by application to a vacancy, or by posting. Which applies is a question about the particular service — see [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation).',
      },
    ],
    misconceptions: [
      {
        claim: 'Specialist roles are senior roles.',
        reality:
          'Specialisation is depth of expertise; rank is supervisory authority. They are different axes, and a system may place deep specialists at ordinary ranks.',
      },
      {
        claim: 'Every police service has all of these.',
        reality:
          'Which specialisations exist in any particular service was not researched. These are areas of work that recur across police organisations generally, and no service is claimed to have any specific one.',
      },
      {
        claim: 'Specialist work means operational and tactical work.',
        reality:
          'Analysis, community policing, training, professional standards, public information and administration are all specialist areas, and several are commonly civilian.',
      },
      {
        claim: 'You have to leave general policing to specialise.',
        reality:
          'In the Netherlands, investigation and community policing are entry routes — bachelor Rechercheur and bachelor Politiekunde Wijkagent — rather than departures from a general career.',
      },
      {
        claim: 'Community policing is a soft version of real policing.',
        reality:
          'It is a distinct professional discipline with a different time horizon, formalised in the Netherlands as a three-year higher-professional bachelor programme.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'How specialist work is reached, as a set of structural possibilities.',
      },
      {
        kind: 'list',
        items: [
          'As an entry programme — the Netherlands formalises investigation and community policing this way.',
          'As an option within initial training — England and Wales offers specialisation in the third year of the PCDA.',
          'By selection after a qualifying period of general service.',
          'By posting, where the organisation assigns rather than the individual applies.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Attribution',
        text: 'Only the first two are attributed, because only those two were researched. The last two are stated as shapes without being assigned to any country.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Specialisation concentrates capability, and capability concentrated in a unit needs the same authorisation and review as capability exercised by anyone else. The existence of a specialist unit is not by itself an expansion of what police may lawfully do — the legal authority for a measure is the same question regardless of who carries it out.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The authority question is [legal authority and technical capability](/investigations/legal-authority-and-technical-capability). Who reviews specialist work is [how are police held to account](/law-enforcement/how-police-are-held-to-account). Civilian specialists are [civilian roles in police organisations](/law-enforcement/civilian-roles-in-police-organisations).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation), [civilian roles in police organisations](/law-enforcement/civilian-roles-in-police-organisations), and [the detective role](/professions/detective). Plain-clothes work removes the identification a uniform provides, which is why the duty shifts — see [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform). Where these areas of work sit as organisational bodies, and how far each reaches, is [what a police unit is](/law-enforcement/what-a-police-unit-is).',
      },
    ],
  },
  {
    slug: 'civilian-roles-in-police-organisations',
    title: 'Civilian roles in police organisations',
    shortTitle: 'Civilian police roles',
    question: 'Do you have to be a police officer to work for the police?',
    summary:
      'No. Police organisations employ substantial numbers of people who are not sworn officers, in roles that are professional in their own right rather than support for someone else’s.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'specialist-roles-in-policing',
      'rank-role-and-specialisation',
      'how-policing-careers-develop',
      'working-life-in-policing',
    ],
    sources: ['nl-politie-meldkamer', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'No country’s civilian staffing arrangements, proportions or entry requirements were researched. No number or proportion of civilian staff is stated anywhere on this page.',
      'Which specific roles are civilian rather than sworn differs between services and sometimes within one country. The Dutch page describing the meldkamer role does NOT state whether it is held by civilian staff or sworn officers, and that is not assumed here.',
      'Whether civilian and sworn staff have comparable career structures within a service was NOT RESEARCHED.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A police organisation is not composed only of people with police powers. Analysts, control-room staff, forensic personnel, technologists, records staff, trainers, legal advisers and administrators all work inside police organisations, and much of what a police service produces depends on them.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes kinds of work that exist inside police organisations. It states no proportion of civilian staff for any service, no entry requirement, and no vacancy. It is educational orientation, not recruitment information.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Describing a police organisation as consisting only of sworn officers is inaccurate before it is anything else. It also misleads two audiences at once: people who assume the only way in is to become an officer, and people forming a picture of how policing actually works.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The distinction that actually matters is powers, not status',
        text: 'What separates a sworn officer from other staff is the possession of legal powers — to stop, to search, to arrest, to use force within limits. That is a real and important line. It is not a line about whether the work is skilled, professional, or central to what the organisation does.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Dutch national police describe the meldkamer role, centralist meldkamer, in a single sentence containing both halves of the job: "je neemt de spoedeisende meldingen (112) aan en stuurt de eenheden op straat aan" — you take the emergency 112 reports and direct the units on the street.',
        claim: 'fact',
        sources: ['nl-politie-meldkamer'],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'And the page does not say who holds it',
        text: 'That official page does not state whether the role is held by civilian staff or by sworn officers, so this platform does not assert it. The example is here because it shows a decision-making role inside a police organisation that is defined by neither rank nor police powers — not because its employment classification is established.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Control room and contact roles',
            description:
              'Taking emergency and non-emergency contacts, classifying and prioritising them against published criteria, and directing or recommending a response. The classification decision is taken before any responder has seen anything — see [emergency dispatcher](/professions/emergency-dispatcher).',
          },
          {
            term: 'Analysis',
            description:
              'Examining patterns across many incidents rather than investigating one, and producing assessments that inform decisions taken by others. Requires analytical and data skills rather than police training, and the conclusion together with its confidence level is the analyst’s own professional product.',
          },
          {
            term: 'Forensic and scientific staff',
            description:
              'Recovery, handling and examination of material, and reporting what findings do and do not establish — see [forensic scientist](/professions/forensic-scientist).',
          },
          {
            term: 'Digital and technology roles',
            description:
              'Building and maintaining the systems police work depends on, and supporting the examination of digital material. A field in which police organisations compete for the same people as every other employer.',
          },
          {
            term: 'Records, information and data protection',
            description:
              'Managing information that is legally sensitive, subject to retention limits and disclosure obligations, and relied on in proceedings. Errors here have direct legal consequences.',
          },
          {
            term: 'Training, legal advice and professional standards',
            description:
              'Preparing officers, advising the organisation, and examining conduct. Some of these roles are held by former officers and some by professionals from other fields entirely.',
          },
          {
            term: 'Communication, finance, estates and human resources',
            description:
              'The functions any large public organisation requires, carried out in an organisation whose subject matter is unusual and often confidential.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The boundary moves between services',
        text: 'A role that is civilian in one service is sworn in another, and services change the line over time. There is no general rule about which roles are which, and none is offered here.',
      },
    ],
    misconceptions: [
      {
        claim: 'Everyone who works for the police is a police officer.',
        reality:
          'Police organisations employ analysts, control-room staff, forensic personnel, technologists, records staff, trainers and administrators, in roles that are not sworn.',
      },
      {
        claim: 'Civilian roles are support roles.',
        reality:
          'An analyst’s assessment and its confidence level are that analyst’s own professional product. A control-room role classifies and prioritises incidents against published criteria before any responder arrives.',
      },
      {
        claim: 'Civilian staff have police powers.',
        reality:
          'What distinguishes a sworn officer is the possession of legal powers such as stop, search, arrest and the use of force within limits. That is the line, and it is a line about powers rather than about skill or importance.',
      },
      {
        claim: 'The same roles are civilian everywhere.',
        reality:
          'A role that is civilian in one service is sworn in another, and services change the line over time. No general rule is offered here.',
      },
      {
        claim: 'Civilian work is a way in to becoming an officer.',
        reality:
          'It may be, in services that allow it, but these are careers in their own right with their own professional development. Neither framing should be assumed, and no country’s arrangements were researched.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Kinds of work inside police organisations that do not depend on police powers.',
      },
      {
        kind: 'list',
        items: [
          'Contact and control-room work — classification and prioritisation against published criteria.',
          'Analysis — pattern across cases rather than depth within one.',
          'Forensic and scientific work — examination and reporting.',
          'Digital and technology — systems, and support for digital examination.',
          'Records, information and data protection — legally sensitive information handling.',
          'Training, legal advice and professional standards.',
          'Communication, finance, estates and human resources.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What is not stated',
        text: 'No proportion of civilian staff in any service, no entry requirement, no pay, and no claim that any named service employs any of these roles. None of that was researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The sworn/civilian line matters for accountability precisely because it is a line about powers. A person without police powers cannot exercise them, and cannot be held to account for exercising them — which is why the question "who actually took this decision, and under what authority" is answered by the powers a person holds rather than by where they work.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The control-room role in detail is [emergency dispatcher](/professions/emergency-dispatcher). The specialist areas are [specialist roles in policing](/law-enforcement/specialist-roles-in-policing). What police powers are is [what are arrest and detention](/law-enforcement/arrest-and-detention).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [emergency dispatcher](/professions/emergency-dispatcher), [specialist roles in policing](/law-enforcement/specialist-roles-in-policing), and [forensic scientist](/professions/forensic-scientist).',
      },
    ],
  },
  {
    slug: 'skills-that-policing-relies-on',
    title: 'Skills that policing relies on',
    shortTitle: 'Skills in policing',
    question: 'What skills do police officers need?',
    summary:
      'The measured training curriculum and the professional standards point the same way: communication, judgement and written accuracy carry more of the work than the physical capabilities the popular image is built from.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-police-recruits-are-taught',
      'working-life-in-policing',
      'professional-standards-in-policing-work',
      'physical-readiness-in-policing-careers',
    ],
    sources: [
      'us-bjs-training-academies-2022',
      'un-code-of-conduct-1979',
      'unodc-e4j-use-of-force',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'No official competency framework for any country was researched. This page reasons from a published curriculum and from international professional standards, and says so where it is reasoning rather than reporting.',
      'The hour figures are United States state and local academies, 2022, and support a claim about that curriculum only.',
      'Nothing here should be read as a list of what any employer assesses. Selection processes were not researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Asking what skills a job needs usually produces a list nobody could disagree with. The more useful question is which skills the work actually spends its time on — and for policing there are two places to look that are harder to argue with than intuition: what training measurably devotes time to, and what professional standards require.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This reasons about professional skills from a published curriculum and international standards. It is not a competency framework, not a list of what any employer assesses, and not advice on preparing an application. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The picture most people bring to this question comes from fiction, which selects for the rarest parts of the job because they are the most dramatic. Someone deciding whether the work suits them is better served by knowing what it consists of most of the time.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'This is also where career pages usually go wrong',
        text: 'A skills list is the easiest place in a career page to write encouraging filler — resilience, teamwork, passion. The discipline applied here is to tie each item to something checkable: an hour count in a government census, or a professional standard in an international instrument.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Start with the curriculum. In the 2022 United States census, criminal and constitutional law, traffic law and juvenile justice law together averaged **87 hours** against 73 for firearms skills and 64 for defensive tactics, and over 97% of recruits received legal instruction. The largest single block of measured instruction is about what the law permits.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which implies a skill, not just a subject',
        text: 'Knowing the law is knowledge. Applying a legal threshold to a situation unfolding in front of you, on incomplete information, in the time available, is a skill — and it is the one the curriculum spends most measured time preparing.',
      },
      {
        kind: 'paragraph',
        text: 'The professional standards point the same way. The United Nations Code of Conduct for Law Enforcement Officials provides that officials perform the duty imposed on them by law, and that force may be used only to the extent required for the performance of their duty. A standard framed in terms of necessity and limits describes a role in which judgement, not capability, is the operative professional quality.',
        claim: 'fact',
        sources: ['un-code-of-conduct-1979', 'unodc-e4j-use-of-force'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Communication',
            description:
              'The skill used most and taught least visibly. Explaining, questioning, calming, and being understood by people who are frightened, angry, unwell or unwilling. Most incidents are resolved through it, and every incident begins with it.',
          },
          {
            term: 'Judgement against a legal threshold',
            description:
              'Deciding whether the conditions for an action are met, on the information available, in the time available. The census figures show this is where measured training time concentrates.',
          },
          {
            term: 'Observation and recall',
            description:
              'Noticing what is present, what is absent and what changed — and being able to account for it accurately weeks later, in a form that can be tested.',
          },
          {
            term: 'Written accuracy',
            description:
              'The record is the durable output of most police work. It is read by supervisors, prosecutors, defence lawyers and courts, months afterwards, by people who were not there. A record that cannot be followed damages a case and the officer’s credibility.',
          },
          {
            term: 'Teamwork and handover',
            description:
              'Incidents pass between shifts and units. Work that is not handed over accurately is work partially lost.',
          },
          {
            term: 'Emotional steadiness',
            description:
              'Continuing to behave professionally when the other person is not, and continuing to function across repeated exposure to distress. This is a professional requirement rather than a personal virtue.',
          },
          {
            term: 'Physical readiness',
            description:
              'Real, and one component among several. Health and fitness averaged 56 hours in the 2022 census — less than legal instruction. See [physical readiness in policing careers](/law-enforcement/physical-readiness-in-policing-careers).',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Policing is mainly a physical job.',
        reality:
          'In the 2022 United States census, health and fitness averaged 56 hours while legal subjects together averaged 87, and over 97% of recruits received legal instruction.',
      },
      {
        claim: 'Communication is a soft skill, secondary to the real work.',
        reality:
          'Most incidents are resolved through it and every incident begins with it. International standards frame the role in terms of necessity and limits, which is a judgement-and-communication description of the work.',
      },
      {
        claim: 'Writing is paperwork, separate from the job.',
        reality:
          'The record is the durable output of most police work and is relied on by prosecutors, defence lawyers and courts months later, by people who were not present.',
      },
      {
        claim: 'These skills are the same as what employers test for.',
        reality:
          'No selection process was researched. This page reasons from a published curriculum and international standards, not from any employer’s assessment framework.',
      },
      {
        claim: 'Skills lists like this apply to every police service.',
        reality:
          'The curriculum evidence is United States state and local academies in 2022. The standards are international instruments. Neither establishes what any particular service requires.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Measured instruction time, United States state and local academies, 2022, as an indication of emphasis.',
      },
      {
        kind: 'list',
        items: [
          'Legal subjects combined — 87 average hours, delivered to over 97% of recruits.',
          'Firearms skills — 73 average hours.',
          'Defensive tactics — 64 average hours.',
          'Health and fitness — 56 average hours.',
          'Community-related topics — delivered to over 80% of recruits.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What hours do and do not show',
        text: 'Hours measure how long something takes to train, not how important it is. Communication is used constantly and does not appear as a separate line in this table at all, which is a limitation of reading a curriculum this way.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Every skill here is also a safeguard. Accurate records make review possible; judgement against a legal threshold is what keeps a power inside its limits; communication is what most often makes force unnecessary. The professional qualities and the protections are the same list read twice.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The curriculum evidence is [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught). The standards are [professional standards in policing work](/law-enforcement/professional-standards-in-policing-work). The legal limit on force is [when may police use force](/law-enforcement/police-use-of-force).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught), [working life in policing](/law-enforcement/working-life-in-policing), and [the patrol officer role](/professions/patrol-officer). The means of making the record is issued equipment too: see [documentation equipment in policing](/law-enforcement/documentation-equipment-in-policing).',
      },
    ],
  },
  {
    slug: 'physical-readiness-in-policing-careers',
    title: 'Physical readiness in policing careers',
    shortTitle: 'Physical readiness',
    question: 'How fit do you have to be to work in policing?',
    summary:
      'Fitness matters and standards exist, but they are set by each employer and differ. This explains why physical readiness is part of the job without stating a standard, prescribing a programme, or implying a universal test.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-police-recruits-are-taught',
      'skills-that-policing-relies-on',
      'working-life-in-policing',
      'what-a-police-academy-is',
    ],
    sources: ['us-bjs-training-academies-2022', 'ie-garda-trainee-booklet-2024'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'NO fitness standard, test content, pass mark or entry requirement is stated on this page for any country. Those are set by each employer, change over time, and publishing one invites it to be read as a target.',
      'Whether standards differ by age, sex, role or stage of career was NOT RESEARCHED for any system.',
      'This page contains no training programme, exercise prescription or preparation plan, and none should be inferred from it. Building preparation material would require a separate evidence and safety review.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Physical readiness in policing means being able to do the physical parts of the job safely, over a long career, including on a night shift in the eighth hour. It is a component of the work rather than its centre, and it is assessed differently by every employer that assesses it.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page deliberately does not contain',
        text: 'No fitness standard, no test description, no pass mark, no exercise, no programme and no preparation plan. Publishing a standard invites people to train to a number that may not be their employer’s, and publishing a programme means giving physical training advice to strangers whose health this platform knows nothing about. Anyone preparing for a specific process should use the official material for that employer, and anyone changing their physical activity should take advice appropriate to their own health.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The question is asked constantly, and it is usually answered badly — either with a single invented standard, or with a training programme aimed at a test the reader may not be taking. Both are worse than explaining why fitness is part of the job and where the actual requirements live.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the honest answer is more useful than a number',
        text: 'A number without an employer attached tells a reader nothing they can act on, and may tell them something wrong. What is genuinely portable is the reason fitness is assessed at all — which does transfer between systems, even though the standards do not.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Training curricula treat physical preparation as a taught subject with measured time. The 2022 United States census records an average of **56 hours** devoted to health and fitness, and records that 95% of academies required written and physical fitness assessments as part of the basic training curriculum.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The subject is called health and fitness, not fitness',
        text: 'That framing is worth noticing. It describes something maintained across a career in a role with shift work, irregular sleep and irregular eating — not a threshold cleared once at entry.',
      },
      {
        kind: 'paragraph',
        text: 'Assessment also appears at the selection stage in some systems. The Garda Trainee 2024 process includes a Physical Competency Test, conducted at Templemore, with candidates directed to official information on the test and how to prepare for it.',
        claim: 'fact',
        sources: ['ie-garda-trainee-booklet-2024'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where the actual requirement lives',
        text: 'With the employer, in its own published material for the specific process a person is entering. That is the only place a current, correct standard exists, and it is where the Irish material itself directs candidates.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Why endurance matters more than peak capability',
            description:
              'The demand is a long shift, repeated, often at night — not a single maximal effort. General cardiovascular and musculoskeletal health serves that better than any specific capability.',
          },
          {
            term: 'Why it is a career-long question',
            description:
              'A standard met at entry is not maintained automatically across a career that includes shift work and irregular routines. Curricula treating it as health rather than as a test reflect that.',
          },
          {
            term: 'Why standards differ legitimately',
            description:
              'Employers assess against the demands of their own role in their own context. A standard that suits one service’s duties may be irrelevant to another’s, which is one reason a universal figure does not exist.',
          },
          {
            term: 'Why fitness is not the main qualification',
            description:
              'In the same census, health and fitness averaged 56 hours while legal subjects together averaged 87. Physical readiness is necessary and is not what most of the training time is about.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'There is a standard police fitness test.',
        reality:
          'Standards are set by each employer, differ between and within countries, and change. No standard is stated on this page for any country.',
      },
      {
        claim: 'You need to be exceptionally athletic to work in policing.',
        reality:
          'Curricula treat this as health and fitness maintained across a career rather than as peak performance. In the 2022 United States census the subject averaged 56 hours, against 87 for legal subjects.',
      },
      {
        claim: 'Fitness is assessed once, at entry.',
        reality:
          'The 2022 census records that 95% of academies required physical fitness assessments as part of the basic training curriculum, and the subject is framed as health and fitness rather than as a single threshold.',
      },
      {
        claim: 'Policing is mainly a physical job.',
        reality:
          'Measured training time concentrates on legal subjects, and most incidents are resolved through communication.',
      },
      {
        claim: 'A page like this can tell you whether you would pass.',
        reality:
          'It cannot. Requirements are set by the employer for a specific process, and no page here assesses any individual’s health, circumstances or eligibility.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where physical assessment appears in the two systems where it was observed.',
      },
      {
        kind: 'list',
        items: [
          'At selection, before training — Ireland includes a Physical Competency Test in the Garda Trainee process, with official preparation information provided by the service.',
          'During training, as an assessed subject — 95% of United States academies required physical fitness assessments within basic training in 2022, with an average of 56 hours of health and fitness instruction.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope',
        text: 'Two systems, and no standard from either. Whether other systems assess at selection, during training, both or neither was not researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Fitness standards are also a question of fair access. A requirement that is not genuinely related to the demands of the role excludes people for no good reason, which is why standards are periodically revisited and why they are properly the employer’s published business rather than folklore.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The curriculum context is [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught). The wider professional picture is [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on). The working pattern that makes health a career-long question is [working life in policing](/law-enforcement/working-life-in-policing).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on), [working life in policing](/law-enforcement/working-life-in-policing), and [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught). Where a physical assessment sits within a recruitment process is [how police selection is structured](/law-enforcement/how-police-selection-is-structured). Standards published for one recruitment round are not necessarily standing rules — see [when a recruitment requirement is campaign-specific](/law-enforcement/when-a-recruitment-requirement-is-campaign-specific).',
      },
    ],
  },
  {
    slug: 'working-life-in-policing',
    title: 'Working life in policing',
    shortTitle: 'Working life',
    question: 'What is the working life of a police officer actually like?',
    summary:
      'Shift work, continuous public contact, a great deal of writing, and long periods of ordinary work punctuated by incidents that are not ordinary. The demanding parts are not always the ones people expect.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'skills-that-policing-relies-on',
      'professional-standards-in-policing-work',
      'how-policing-careers-develop',
      'civilian-roles-in-police-organisations',
    ],
    sources: ['ie-garda-trainee-booklet-2024', 'unodc-cpcj', 'un-code-of-conduct-1979'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'No employer’s shift pattern, working hours, leave arrangement or conditions of service were researched for any country. This describes the shape of the work, not any service’s terms.',
      'What support services provide for exposure to distressing incidents was NOT RESEARCHED for any system, although the exposure itself is inherent to the role.',
      'No pay, allowance or condition-of-service figure appears anywhere in this wave.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Working life is the part of a job that decides whether someone stays in it, and it is usually the part career descriptions leave out. For policing it is shaped by one structural fact: the function is availability, and availability has to be provided around the clock.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes the shape of working life in policing in general terms. It states no employer’s shift pattern, hours, leave, conditions or pay, none of which were researched. It is orientation for someone deciding whether the work suits them, not information about any particular job.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'People leave jobs over working conditions far more often than over the content of the work. Someone considering policing is better served by an honest account of shift work and documentation than by another description of incidents.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And an honest account is not a discouraging one',
        text: 'The point is not that the work is hard. It is that the demanding parts are frequently not the ones people anticipate — the writing, the shift rotation, and the accumulation of ordinary distress rather than the exceptional incidents.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Shift work is the defining feature. Because the function is availability, cover has to exist at every hour, which means rotating shifts including nights, weekends and public holidays. Patterns are set by the employer, and none is described here.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What shift work actually costs',
        text: 'Not the hours themselves so much as their rotation. Sleep, meals, exercise and time with other people all have to be organised around a pattern that changes, and the effect is cumulative rather than immediate. It is the single most common reason the working life differs from what people expect.',
      },
      {
        kind: 'paragraph',
        text: 'Training structures show how early the working reality begins. In Ireland, Phase I Stage 1 is "a mandatory residential training component, normally conducted on a Monday to Friday basis in the Garda College", and Stage 2 is "a mandatory observational placement training component, normally conducted within a commutable distance from home in an Operational Garda Station" — residential life, then an operational station, before attestation.',
        claim: 'fact',
        sources: ['ie-garda-trainee-booklet-2024'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Most of the work is not what the job is famous for',
            description:
              'Public order, road policing, missing persons, safeguarding, incidents involving mental health, and assistance to people in difficulty make up much of the demand. Serious crime investigation is a smaller part of most officers’ time than the popular picture suggests.',
          },
          {
            term: 'There is a great deal of writing',
            description:
              'What was done and why has to be recorded in a form that can be read by a supervisor, a prosecutor, a defence lawyer and sometimes a court, months later. This is a substantial share of the working day and is not separable from the work.',
          },
          {
            term: 'Contact with the public is continuous, and mostly not with suspects',
            description:
              'Callers, witnesses, people in distress, people who are lost or injured. The proportion of contact that involves anyone suspected of anything is smaller than expected.',
          },
          {
            term: 'Decisions are often taken alone and reviewed later',
            description:
              'A supervisor typically reviews recorded decisions afterwards rather than directing them at the time. That is why professional standards that hold when nobody is watching matter more here than supervision does.',
          },
          {
            term: 'Exposure to distress is cumulative',
            description:
              'The difficulty is less any single incident than the accumulation across a career. What support any employer provides was not researched, and it varies.',
          },
          {
            term: 'The team is a real part of the working life',
            description:
              'Shift-based work with shared risk produces strong working relationships, and handover between shifts and units is part of the job rather than an administrative afterthought.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Police work is mostly responding to serious crime.',
        reality:
          'Public order, road policing, missing persons, safeguarding, mental-health incidents and public assistance make up much of the demand across many services.',
      },
      {
        claim: 'Paperwork is a minor part of the job.',
        reality:
          'The record is the durable output of most police work, relied on by prosecutors, defence lawyers and courts months later, and writing it occupies a substantial share of the working day.',
      },
      {
        claim: 'Shift work is just working different hours.',
        reality:
          'The rotation is what makes it demanding — sleep, meals, exercise and social life all have to be organised around a pattern that changes, and the effect accumulates.',
      },
      {
        claim: 'Officers are supervised as decisions are made.',
        reality:
          'In much operational work a supervisor reviews recorded decisions afterwards rather than directing them at the time.',
      },
      {
        claim: 'The hardest part is dangerous incidents.',
        reality:
          'The cumulative exposure to ordinary distress is what most accounts identify as the harder feature, and it is continuous rather than exceptional.',
      },
      {
        claim: 'This describes what a particular job would be like.',
        reality:
          'No employer’s shift pattern, hours, leave or conditions were researched. This is the general shape of the work, not any service’s terms.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What differs between services, and what does not.',
      },
      {
        kind: 'list',
        items: [
          'Differs: shift patterns, hours, leave arrangements, conditions of service, and support provision — all employer-set, none researched here.',
          'Differs: how much of a role is response, community or investigative work.',
          'Differs: whether officers routinely carry firearms, which is set nationally.',
          'Does not differ much: the requirement for continuous cover, the volume of documentation, the predominance of contact with people who are not suspects, and the fact that decisions are reviewed after the event.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The documentation burden that officers experience as workload is the same thing the public experiences as accountability. A record made contemporaneously is what allows a decision to be examined later — by a supervisor, a court, or a complaints body — and there is no version of the job that has the accountability without the writing.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The professional qualities involved are [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on). The standards that apply when nobody is watching are [professional standards in policing work](/law-enforcement/professional-standards-in-policing-work). The role in detail is [patrol officer](/professions/patrol-officer).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [the patrol officer role](/professions/patrol-officer), [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on), and [professional standards in policing work](/law-enforcement/professional-standards-in-policing-work). What a service issues for the work is [what police equipment is for](/law-enforcement/what-police-equipment-is-for).',
      },
    ],
  },
  {
    slug: 'professional-standards-in-policing-work',
    title: 'Professional standards in policing work',
    shortTitle: 'Professional standards',
    question: 'What does professional conduct mean in policing?',
    summary:
      'International standards frame the role in terms of duty, necessity and limits. Because so many decisions are taken alone, the standards have to work when nobody is watching — which is a different requirement from being supervised.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'skills-that-policing-relies-on',
      'working-life-in-policing',
      'why-police-accountability-matters',
      'how-police-are-held-to-account',
    ],
    sources: ['un-code-of-conduct-1979', 'unodc-e4j-use-of-force', 'unodc-cpcj'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'No national code of conduct or professional standards framework was researched for any country. This page uses international instruments, which bind states in a different way and are not any service’s own code.',
      'How standards are enforced in any particular system was NOT RESEARCHED, and enforcement is what makes a standard operative.',
      'Nothing here assesses how any service performs against any standard. That would be an institutional-effectiveness claim, which this platform does not publish without a stated measure and a source that applies it.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Professional standards are what a role requires of a person beyond obeying the law. For policing they matter unusually much, because the role combines significant powers with decisions that are frequently taken alone, immediately, and reviewed only afterwards.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what professional standards ask of an individual doing this work, using international instruments. It is not an assessment of any police service, not a national code, and not a claim about how well any system performs. The institutional machinery of accountability is covered separately.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Supervision cannot be the primary control in a role where most decisions happen without a supervisor present. What fills that gap is a professional standard the officer applies to their own conduct — which is why these standards are framed as duties rather than as rules enforced by observation.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'This is a claim about design, not about virtue',
        text: 'The point is structural. A system that relied on watching officers would need more watchers than officers. Recruitment, training and professional standards exist because the alternative does not scale — not because anyone assumes the people involved are unusually good or unusually bad.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The United Nations Code of Conduct for Law Enforcement Officials sets the baseline: officials perform the duty imposed on them by law, and force may be used only to the extent required for the performance of their duty.',
        claim: 'fact',
        sources: ['un-code-of-conduct-1979', 'unodc-e4j-use-of-force'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Read what that formulation does',
        text: 'It does not say force is permitted when justified in the officer’s view. It ties the permission to a duty imposed by law and then limits it to the extent required for performing that duty. Both halves are constraints, and the second constrains even where the first is satisfied.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Lawful authority, and only for its purpose',
            description:
              'A power is granted for a purpose and may be exercised for that purpose. Using a power for something else is a breach of standards even where the formal conditions for it happen to be met.',
          },
          {
            term: 'Necessity and proportion',
            description:
              'That an action is permitted does not mean it is required. The standard asks what is needed, which frequently means acting less than the maximum the law would allow.',
          },
          {
            term: 'Impartiality',
            description:
              'Treating people according to what they have done rather than who they are. This is a professional obligation as well as a legal one, and it is tested most where discretion is widest.',
          },
          {
            term: 'Honesty in the record',
            description:
              'Because so much is reviewed only through what was written, the integrity of the record is close to the whole of accountability. A false or convenient record defeats every other safeguard at once.',
          },
          {
            term: 'Confidentiality',
            description:
              'Officers hold information about people at their most vulnerable, obtained under legal authority for a purpose. Handling it accordingly is a professional duty.',
          },
          {
            term: 'Behaving consistently when unobserved',
            description:
              'The operative test. A standard that is met only when someone is watching is not a professional standard, and in this role most of the time nobody is.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Standards are not the same as accountability machinery',
        text: 'A standard states what conduct is required. Accountability is what happens when it is not met — complaints bodies, inspectorates, courts and disciplinary systems, which differ substantially between countries and are covered separately.',
      },
    ],
    misconceptions: [
      {
        claim: 'Professional standards are the same as the law.',
        reality:
          'The Code of Conduct requires that force be used only to the extent required for the performance of duty. That is a standard about what is necessary, which can be narrower than what is permitted.',
      },
      {
        claim: 'Standards are enforced mainly by supervision.',
        reality:
          'Most operational decisions are taken without a supervisor present and are reviewed afterwards through the record, which is why the standards are framed as duties the officer applies to their own conduct.',
      },
      {
        claim: 'All police services share the same code of conduct.',
        reality:
          'No national code was researched for this page. The instruments used here are international, which bind states in a different way and are not any service’s own code.',
      },
      {
        claim: 'A code of conduct means conduct is good.',
        reality:
          'A standard states what is required. Whether it is met is an empirical question about a particular system, which this page does not assess and this platform does not assert without a stated measure and a source applying it.',
      },
      {
        claim: 'If an action is lawful, it meets professional standards.',
        reality:
          'A power granted for a purpose may be used for that purpose, and the necessity standard asks what is needed rather than what is maximally permitted.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What the international instruments state, and what they leave to national systems.',
      },
      {
        kind: 'list',
        items: [
          'Stated internationally: that officials perform the duty imposed on them by law, and that force may be used only to the extent required for the performance of that duty.',
          'Left to national systems: the code that actually binds an officer, the disciplinary process, the complaints machinery, and the sanctions available.',
          'Not addressed here at all: how any system performs against any standard.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Professional standards and public confidence in policing are two ends of one subject. A service can only ask to be trusted with powers exercised out of sight if the people exercising them hold to standards that do not depend on being observed — and that is a claim about recruitment, training and professional culture rather than about rules.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The institutional side is [why police accountability matters](/law-enforcement/why-police-accountability-matters) and [how are police held to account](/law-enforcement/how-police-are-held-to-account). The legal limit on force is [when may police use force](/law-enforcement/police-use-of-force). The professional qualities are [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why police accountability matters](/law-enforcement/why-police-accountability-matters), [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on), and [working life in policing](/law-enforcement/working-life-in-policing).',
      },
    ],
  },
  /*
   * ==========================================================================
   * WAVE 25 — country recruitment and police career entry paths.
   * ==========================================================================
   *
   * These are the COMPARATIVE pages. The country-specific answers live on country modules at
   * /countries/{country}/police-recruitment, which is where jurisdiction-specific facts belong
   * and where the freshness field `factsVerifiedOn` is already mandatory. These pages own the
   * questions that are not about one country.
   *
   * THE WAVE'S CENTRAL DISCIPLINE IS SCOPE. A Berlin source proves Berlin. A municipal department
   * proves that department. A 2024 campaign booklet proves that campaign. Every claim below names
   * the system it belongs to, and the guards in tests/content/wave25-police-recruitment.test.ts
   * fail the build when a narrow source is stretched to a wide claim.
   *
   * ENGLAND AND WALES appears here rather than as a country module because the corpus has no
   * England-and-Wales dossier to attach one to. That is an architectural fact, recorded rather
   * than worked around by inventing a dossier.
   *
   * WHAT THESE PAGES REFUSE TO DO. They explain the official path and never how to game it. No
   * page states a fitness standard, a medical criterion, a vetting method, or anything a reader
   * could use to present themselves falsely. No page tells any individual whether they qualify.
   */
  {
    slug: 'who-recruits-police-officers',
    title: 'Who recruits police officers',
    shortTitle: 'Who recruits',
    question: 'Who actually recruits police officers?',
    summary:
      'In some countries one national body does, and in others the question has no single answer at all — which changes what "the entry requirements" can even mean.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'police-entry-requirements-across-systems',
      'citizenship-nationality-and-residency-in-police-recruitment',
      'how-police-selection-is-structured',
      'what-a-police-academy-is',
    ],
    sources: [
      'ie-garda-trainee-booklet-2024',
      'ew-police-eligibility-criteria',
      'nz-police-eligibility',
      'nl-politie-opleidingsoverzicht',
      'de-berlin-polizei-studium',
      'de-bayern-polizei-ausbildung',
      'us-bjs-training-academies-2022',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'Six systems were researched: Ireland, England and Wales, New Zealand, the Netherlands, Germany (Berlin and Bavaria only) and the United States. Everything here is stated as at 6 September 2026.',
      'Czechia was researched and DEFERRED: the only reachable official page redirects into an archive carrying a notice that its content may not be current, and it does not contain the conditions.',
      'France, Poland, Spain, Canada and Australia were NOT RESEARCHED and are not described anywhere in this wave.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Before asking what the requirements are, it is worth asking whose requirements they would be. In a country with one national police service the answer is simple. In a country with hundreds of separate employers there is no single answer, and a page claiming to give one is describing something that does not exist.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes how recruitment is organised in six researched systems, as at 6 September 2026. It states no eligibility requirement — those are on the country pages, where each is tied to its own source and verification date. It is educational orientation, not recruitment advice, and this platform is not affiliated with any police service and accepts no applications.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The structure determines what any answer can mean. Where one body recruits, a requirement is the requirement. Where many bodies recruit, a requirement found on one employer’s site is that employer’s, and repeating it as a national rule is the single most common error in writing about police recruitment.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the error is easy to make honestly',
        text: 'Whichever employer publishes most clearly gets quoted most often. Clarity of publication is not the same as breadth of authority, and a page that does not name the recruiter beside the rule cannot tell the difference.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Ireland is the clearest single-recruiter case. There is one national service, and the Garda Trainee competition is run by the Public Appointments Service on behalf of the Garda Commissioner rather than by the service itself — so even here, the recruiter and the employer are not the same body.',
        claim: 'fact',
        sources: ['ie-garda-trainee-booklet-2024'],
      },
      {
        kind: 'paragraph',
        text: 'England and Wales sits between the two models, and the official recruitment service says so: there are national eligibility criteria, and "Police forces are also allowed to apply their own local criteria in addition to the national eligibility aspects, so make sure you check your chosen force’s website for a full list of the role criteria."',
        claim: 'fact',
        sources: ['ew-police-eligibility-criteria'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'That sentence is the whole problem in miniature',
        text: 'A national criterion here is a floor, not the requirement. Someone who reads only the national criteria has read something true and incomplete, and the source itself is the thing telling you so. Any page that quotes a national criterion without that caveat has quietly changed its meaning.',
      },
      {
        kind: 'paragraph',
        text: 'Germany has no national police recruitment to describe. Each Land recruits on its own terms and the federal police recruits separately again — Berlin runs a mittlerer Dienst and a gehobener Dienst entered at different education levels, while Bavaria organises entry by Qualifikationsebene with a 2. Qualifikationsebene Ausbildung of "2,5 Jahre" in five six-month sections. Different vocabulary, different structures, separate recruiters.',
        claim: 'fact',
        sources: ['de-berlin-polizei-studium', 'de-bayern-polizei-ausbildung'],
      },
      {
        kind: 'paragraph',
        text: 'The United States is the far end of the range. The Bureau of Justice Statistics 2022 census of training academies found academies operated both by law enforcement agencies and by colleges and technical schools, with average core basic training running from 681 hours at state POST or equivalent academies to 969 at state police and highway patrol academies.',
        claim: 'fact',
        sources: ['us-bjs-training-academies-2022'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'One national recruiter',
            description:
              'Ireland and New Zealand each have a single national police service recruiting centrally. A requirement published by that service is the requirement, for that service.',
          },
          {
            term: 'National criteria plus local criteria',
            description:
              'England and Wales publishes national eligibility criteria and permits forces to add their own. Both layers are real, and the second is invisible to anyone reading only the first.',
          },
          {
            term: 'Separate sub-national recruiters',
            description:
              'Germany: each Land recruits independently, with its own tracks and terminology, and the Bundespolizei separately again. There is no national layer to quote.',
          },
          {
            term: 'Many independent employers',
            description:
              'The United States: municipal, county, state and federal employers hiring on their own terms, with academies of substantially different lengths and governance.',
          },
          {
            term: 'Recruitment through an education system',
            description:
              'The Netherlands admits candidates to named police education programmes rather than to a post, so the entry decision and the career-direction decision are made together.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A national police service is not every law-enforcement body',
        text: 'Even where one service dominates, other bodies with enforcement functions usually recruit separately — border and customs authorities, prison services, military police and specialist investigative bodies among them. A page about joining a national police service does not describe those, and none of the country pages in this wave claims to.',
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has national police entry requirements.',
        reality:
          'Germany has no national police recruitment at all — each Land recruits separately, as does the federal police. In the United States, employers at municipal, county, state and federal level each hire on their own terms.',
      },
      {
        claim:
          'If a country has one national police service, one set of rules covers policing there.',
        reality:
          'It covers that service. Border, customs, prison and specialist bodies generally recruit separately, and the country pages in this wave state their scope for that reason.',
      },
      {
        claim: 'National eligibility criteria are the complete requirement.',
        reality:
          'In England and Wales the official recruitment service states that forces are also allowed to apply their own local criteria in addition to the national ones.',
      },
      {
        claim: 'The police service always runs its own recruitment.',
        reality:
          'In Ireland the Garda Trainee competition is run by the Public Appointments Service on behalf of the Garda Commissioner.',
      },
      {
        claim: 'A requirement found on a police website applies across that country.',
        reality:
          'It applies to whoever published it. A Land, a force or a department speaks for itself, and this wave names the recruiter beside every requirement for that reason.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'How recruitment is organised in the six researched systems.',
      },
      {
        kind: 'list',
        items: [
          'One national service, competition run by a central public appointments body — Ireland.',
          'One national service recruiting centrally — New Zealand.',
          'National eligibility criteria, with forces permitted to add local criteria — England and Wales.',
          'Admission to named national police education programmes — Netherlands.',
          'Separate recruitment by each Land, and separately again by the federal police — Germany.',
          'Many independent employers at municipal, county, state and federal level — United States.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these statements',
        text: 'Each describes the system named and no other. The German row rests on Berlin and Bavaria only; the United States row rests on a federal survey of training academies, not on any employer’s requirements.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Who recruits is also a question about accountability. A single national recruiter can be held to one standard and examined as one process. Fragmented recruitment distributes that scrutiny across many employers, which is a genuine trade-off rather than a defect — local hiring answers to local governance, and national hiring answers to national oversight.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The requirements themselves are on the country pages: [Ireland](/countries/ireland/police-recruitment), [the Netherlands](/countries/netherlands/police-recruitment), [New Zealand](/countries/new-zealand/police-recruitment), [Germany](/countries/germany/police-recruitment) and [the United States](/countries/united-states/police-recruitment). How policing is divided between levels of government is [how policing is divided between levels of government](/law-enforcement/how-policing-is-divided-between-levels).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [police entry requirements across systems](/law-enforcement/police-entry-requirements-across-systems), [how police selection is structured](/law-enforcement/how-police-selection-is-structured), and [what a police academy is](/law-enforcement/what-a-police-academy-is). The system that runs a national layer and a local layer at once is set out in [police recruitment in England and Wales](/law-enforcement/police-recruitment-in-england-and-wales).',
      },
    ],
  },
  {
    slug: 'citizenship-nationality-and-residency-in-police-recruitment',
    title: 'Citizenship, nationality and residency in police recruitment',
    shortTitle: 'Citizenship and residency',
    question: 'Do you have to be a citizen to become a police officer?',
    summary:
      'Four researched systems ask four different questions — nationality, right to work, citizenship-or-residency, and nationality possibly held as a second one. Collapsing them into "you must be a citizen" is wrong in three of the four.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-recruits-police-officers',
      'police-entry-requirements-across-systems',
      'when-a-recruitment-requirement-is-campaign-specific',
      'how-police-selection-is-structured',
    ],
    sources: [
      'ie-garda-eligibility-regulations',
      'ew-police-eligibility-criteria',
      'nz-police-eligibility',
      'nl-politie-toelatingseisen',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'Four systems were researched for this question: Ireland, England and Wales, New Zealand and the Netherlands. Stated as at 6 September 2026.',
      'The Irish criterion was read from a 2024 competition booklet. The underlying Admissions and Appointments Regulations were named but NOT read directly.',
      'How any of these rules is applied in an individual case was NOT RESEARCHED, and no page here can assess anyone’s status.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Four words get used interchangeably and mean different things. **Citizenship** is a legal membership of a state. **Nationality** is often the same thing but is used in some rules as a category covering several states at once. **Residency** is lawful presence over time. **The right to work** is a permission that can exist without any of the others. Recruitment rules pick between these deliberately, and a summary that flattens them changes who is eligible.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This compares how four researched systems frame the requirement, as at 6 September 2026, using each system’s own words. It cannot tell any individual whether their status qualifies them anywhere — that depends on current rules and on personal circumstances this platform does not assess, and the recruiting authority is the only place that question is answered.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'This is one of the first questions anyone born outside the country asks, and it is answered wrongly more often than almost any other recruitment question — usually by someone paraphrasing a rule into the word they expected rather than the word the rule uses.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The paraphrase is the failure',
        text: 'Ireland’s rule admits nationals of a group of states, or people holding international protection, or people with a defined period of residence. Writing that as "you must be an Irish citizen" excludes, on paper, most of the people the rule actually admits. Nothing was mistranslated; a category was simply replaced with a narrower one.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Ireland states three alternatives in one condition. An applicant must be a national of an EU Member State, an EEA State, the United Kingdom or the Swiss Confederation; **or** hold refugee or subsidiary protection status, or be a family member of such a person, with the declaration in force throughout the process; **or** have had one continuous year of residence in the State and, in the eight years before it, four years of total residence.',
        claim: 'fact',
        sources: ['ie-garda-eligibility-regulations'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Three different legal concepts, one requirement',
        text: 'Nationality of a group of states, an international-protection status, and a residence history are not variations on a theme — they are separate routes to the same threshold, and a person may satisfy the condition through any one of them. This is the most structurally interesting eligibility rule read for this wave.',
      },
      {
        kind: 'paragraph',
        text: 'England and Wales does not ask about citizenship at all in its national criteria. The official recruitment service frames it as permission: an applicant may apply "providing you have no restrictions on your right to live and work in the UK". A separate residency point exists for vetting, where candidates who have lived abroad may be required to have resided in the UK for three years.',
        claim: 'fact',
        sources: ['ew-police-eligibility-criteria'],
      },
      {
        kind: 'paragraph',
        text: 'New Zealand asks for citizenship **or** residency, and counts a neighbour’s citizenship: "You must be a New Zealand or Australian citizen or have New Zealand residency or New Zealand permanent residency."',
        claim: 'fact',
        sources: ['nz-police-eligibility'],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands requires nationality, and says explicitly that it need not be the only one: "je de Nederlandse nationaliteit moet hebben. Dit mag ook je tweede nationaliteit zijn" — you must have Dutch nationality, and this may also be your second nationality.',
        claim: 'fact',
        sources: ['nl-politie-toelatingseisen'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Why the distinctions exist at all',
            description:
              'Police officers exercise coercive powers on behalf of a state, and states differ on how closely that should be tied to formal membership. Some tie it to nationality, some to lawful settlement, some to a permission to work. Each answer is a defensible position about what the office requires.',
          },
          {
            term: 'Residency requirements often serve a different purpose',
            description:
              'A residence period may exist so that a background check can actually be carried out, rather than as a statement about belonging. In England and Wales the three-year point is connected to vetting.',
          },
          {
            term: 'Dual nationality is treated explicitly where it is treated at all',
            description:
              'The Dutch rule says a second nationality is acceptable. Where a source is silent on dual nationality, this platform does not infer a position either way.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page will not do',
        text: 'It will not tell you whether your status qualifies you, will not interpret an immigration position, and will not suggest how to present one. Those questions belong to the recruiting authority, and in some cases to a qualified adviser.',
      },
    ],
    misconceptions: [
      {
        claim: 'You have to be a citizen of the country to become a police officer.',
        reality:
          'Of the four researched systems, only the Netherlands requires nationality outright. England and Wales asks about the right to live and work, New Zealand accepts residency or Australian citizenship, and Ireland accepts a nationality category, an international-protection status, or a residence history.',
      },
      {
        claim: 'Nationality and citizenship mean the same thing in these rules.',
        reality:
          'The Irish condition uses nationality as a category covering EU, EEA, UK and Swiss states at once, which is broader than the citizenship of any one of them.',
      },
      {
        claim: 'Holding another nationality disqualifies you.',
        reality:
          'The Dutch rule states that Dutch nationality "mag ook je tweede nationaliteit zijn" — it may also be your second nationality. Where a source says nothing about dual nationality, nothing is inferred here.',
      },
      {
        claim: 'Residency requirements are about loyalty.',
        reality:
          'They may serve a practical purpose. In England and Wales, the three-year residency point for people who have lived abroad is connected to vetting.',
      },
      {
        claim: 'These rules are stable.',
        reality:
          'The Irish condition was read from a 2024 competition booklet, and eligibility rules are set by recruiting authorities and change. Everything here is stated as at 6 September 2026.',
      },
      {
        claim: 'A page like this can tell you whether you are eligible.',
        reality:
          'It cannot. Eligibility depends on current rules and on individual circumstances that this platform does not assess, and the recruiting authority is the only source that answers it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four systems, four different questions asked.',
      },
      {
        kind: 'list',
        items: [
          'Nationality of a group of states, OR international-protection status, OR a defined residence history — Ireland.',
          'No restrictions on the right to live and work, with a separate residency point for vetting — England and Wales.',
          'New Zealand or Australian citizenship, OR New Zealand residency or permanent residency — New Zealand.',
          'Dutch nationality, which may be held as a second nationality — Netherlands.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What is not claimed',
        text: 'That these four are representative. Germany and the United States were not researched for this question, and the German and United States pages in this wave state no nationality requirement at all.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A recruitment rule about status is also a statement about who a police service is drawn from, and services increasingly say they want to reflect the populations they police. The Irish material makes that connection explicitly, describing a commitment to reflecting the diversity of Irish society. Whether any rule achieves that is an empirical question this page does not assess.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'Each rule in full sits on its country page: [Ireland](/countries/ireland/police-recruitment), [the Netherlands](/countries/netherlands/police-recruitment) and [New Zealand](/countries/new-zealand/police-recruitment). Who sets the rule in the first place is [who recruits police officers](/law-enforcement/who-recruits-police-officers).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who recruits police officers](/law-enforcement/who-recruits-police-officers), [police entry requirements across systems](/law-enforcement/police-entry-requirements-across-systems), and [when a recruitment requirement is campaign-specific](/law-enforcement/when-a-recruitment-requirement-is-campaign-specific). Two systems that require citizenship in the strict sense are [Czechia](/countries/czechia/police-recruitment) and [Norway](/countries/norway/police-recruitment).',
      },
    ],
  },
  {
    slug: 'when-a-recruitment-requirement-is-campaign-specific',
    title: 'When a recruitment requirement is campaign-specific',
    shortTitle: 'Campaign-specific rules',
    question:
      'Is a police entry requirement permanent, or does it belong to one recruitment round?',
    summary:
      'Some requirements come from law and outlast every competition. Others are terms of a single campaign, anchored to its closing date. Official documents usually contain both, and rarely label which is which.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-recruits-police-officers',
      'citizenship-nationality-and-residency-in-police-recruitment',
      'police-entry-requirements-across-systems',
      'how-police-selection-is-structured',
    ],
    sources: [
      'ie-garda-eligibility-regulations',
      'ie-garda-trainee-booklet-2024',
      'nz-police-eligibility',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'The worked example is Irish. Whether other systems separate durable and campaign terms as visibly was NOT RESEARCHED.',
      'The Garda Síochána (Admissions & Appointments) Regulations were named by the recruitment material but NOT read directly, so what they contain beyond the booklet’s account is NOT ESTABLISHED.',
      'This page states no current requirement for any system. It is about how to read requirements, not what they are.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A recruitment document usually mixes two kinds of statement. Some come from law or standing policy and will still be true next year. Others are terms of the particular competition being advertised, and expire with it. Both appear in the same list, in the same tone, and the reader is left to tell them apart.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This is about how to read a recruitment source, not about any current requirement. It states no eligibility rule as applying today anywhere. It is educational, not advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'This distinction is why so much recruitment information on the internet is confidently wrong. A campaign term gets copied, the campaign closes, and the copy remains — presented as a standing rule long after the document it came from expired.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the copy is usually accurate at the moment it is made',
        text: 'That is what makes it durable. Nobody invented anything; a true statement about one competition was simply detached from the competition it described. The error is one of scope, not of fact, which is why it survives fact-checking.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Irish material shows both layers in one document. It names the durable basis — entry is governed by the Garda Síochána (Admissions & Appointments) Regulations 2013, as amended by S.I. 602/2020, S.I. 757/2021 and S.I. 611/2023 — and then sets out the competition’s own terms.',
        claim: 'fact',
        sources: ['ie-garda-eligibility-regulations'],
      },
      {
        kind: 'paragraph',
        text: 'One of those terms carries its expiry inside it. An applicant must "be 18 years of age but not yet 50 years of age at midnight on Thursday, 8th of February 2024". The age window is measured against one competition’s closing date.',
        claim: 'fact',
        sources: ['ie-garda-eligibility-regulations'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'So "the Irish police age limit is 18 to 49" is the wrong shape of sentence',
        text: 'Not because the numbers are wrong for that competition, but because the sentence claims something the source does not support: that the window is a property of the service rather than of one round of hiring. This platform therefore states no Irish age requirement at all, and points to the current competition instead.',
      },
      {
        kind: 'paragraph',
        text: 'Contrast a statement built to outlast a campaign. New Zealand Police state that an applicant "must be at least 17 years old to apply and 18 when you start at Police College", and add "There’s no upper age limit". Nothing there is tied to a closing date, and the second sentence closes off the inference a silent source would leave open.',
        claim: 'fact',
        sources: ['nz-police-eligibility'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Signals that a term belongs to a campaign',
            description:
              'A specific date, especially a closing date. A reference to "this competition". A document titled for a year. Numbers of posts. Anything measured "at" a moment rather than stated as a condition.',
          },
          {
            term: 'Signals that a term is durable',
            description:
              'A citation to legislation or regulations. A statement framed as a standing condition of the role. Publication outside a campaign document, on a permanent careers page.',
          },
          {
            term: 'Silence is not a signal either way',
            description:
              'A source that states a minimum age and says nothing about a maximum has not told you there is none. New Zealand says so explicitly; most sources do not, and no maximum is inferred from their silence.',
          },
          {
            term: 'What follows for a reader',
            description:
              'Anything volatile should be taken from the current campaign, not from a summary of a past one — including this platform’s. The country pages here name the authority for that reason.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'An entry requirement published by a police service is a permanent rule.',
        reality:
          'The Irish age window is stated as applying "at midnight on Thursday, 8th of February 2024" — a term of one competition, in a document that separately names the Regulations governing admission.',
      },
      {
        claim: 'If a requirement was accurate when it was written, it is safe to repeat.',
        reality:
          'A true statement about one competition becomes a false statement about the service when the competition closes. The error is one of scope, which is why it survives fact-checking.',
      },
      {
        claim: 'A source that gives a minimum age but no maximum means there is no maximum.',
        reality:
          'It means the source did not say. New Zealand Police state "There’s no upper age limit" explicitly; where a source is silent, nothing is inferred here.',
      },
      {
        claim: 'Legislation and campaign documents say the same things.',
        reality:
          'The Irish booklet names the Admissions and Appointments Regulations as governing entry and then sets out the competition’s own terms alongside them. The two layers have different lifespans.',
      },
      {
        claim: 'This page tells you the current requirements.',
        reality:
          'It states no current requirement for any system. It is about how to read a recruitment source, and the current position is always the one the recruiting authority publishes.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two layers, and how they were distinguishable in the sources read.',
      },
      {
        kind: 'list',
        items: [
          'Durable: entry governed by the Garda Síochána (Admissions & Appointments) Regulations 2013 as amended — named in the campaign document itself.',
          'Campaign: an age window measured at a stated closing date in February 2024.',
          'Durable, and explicitly so: New Zealand’s application and college-start ages, with an express statement that no upper age limit exists.',
          'Not determinable: any requirement published without a date, a citation, or a campaign reference — treated here as unverified rather than as either.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The distinction protects applicants. A person who plans around a copied campaign term may organise their circumstances against a rule that no longer applies, and the cost of that falls entirely on them. Publishing volatile terms without their scope transfers a maintenance problem onto the reader.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The Irish rules in full are on [police recruitment in Ireland](/countries/ireland/police-recruitment), and the New Zealand ones on [police recruitment in New Zealand](/countries/new-zealand/police-recruitment). How the status rules differ is [citizenship, nationality and residency](/law-enforcement/citizenship-nationality-and-residency-in-police-recruitment).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who recruits police officers](/law-enforcement/who-recruits-police-officers), [police entry requirements across systems](/law-enforcement/police-entry-requirements-across-systems), and [police recruitment in Ireland](/countries/ireland/police-recruitment). For deadlines that recur annually rather than expiring with one competition, see [police recruitment in Norway](/countries/norway/police-recruitment).',
      },
    ],
  },
  {
    slug: 'how-police-selection-is-structured',
    title: 'How police selection is structured',
    shortTitle: 'Selection stages',
    question: 'What happens between applying to the police and starting training?',
    summary:
      'Selection runs in stages, and a candidate must be found suitable at each before reaching the next. This describes what the stages are for — not what any of them assesses, or how.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-recruits-police-officers',
      'police-entry-requirements-across-systems',
      'when-a-recruitment-requirement-is-campaign-specific',
      'physical-readiness-in-policing-careers',
    ],
    sources: [
      'ie-garda-trainee-booklet-2024',
      'nz-police-eligibility',
      'nl-politie-toelatingseisen',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'Three systems informed this page: Ireland, New Zealand and the Netherlands. The order and content of stages elsewhere were NOT RESEARCHED.',
      'No assessment content, scoring method, standard or threshold was researched for any system, and none is described. That is a deliberate limit, not a gap in the research.',
      'How long selection takes, and what proportion of candidates proceed, were NOT RESEARCHED and are not stated.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Police selection is not one decision. It is a sequence of separate assessments, each of which a candidate must pass before the next begins, and each of which exists to establish something different about suitability for an office that carries coercive powers.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'It names stages and explains why each exists. It does not describe what any assessment contains, how it is scored, what answers or performances are sought, or how to prepare. That boundary is the point of the page rather than a limitation on it: material of that kind helps a candidate present something other than themselves, which is the opposite of what selection is for.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The stages are sequential because they are expensive in different ways. Checking a documentary criterion is cheap; a medical examination, a physical assessment and a background enquiry are not. Ordering them from cheapest to most involved is how a process handles many applicants without doing the most demanding work on all of them.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which explains something applicants often experience as arbitrary',
        text: 'Being told at a late stage that an early criterion was not met feels like a failure of the process. It usually reflects the ordering: documentary eligibility is often re-checked against evidence that only arrives later. The Irish material makes the standing obligation explicit — the onus is on candidates to show they continue to meet the requirements throughout, and to report changes affecting eligibility.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Irish process shows the shape end to end. Selection is conducted in stages by the Public Appointments Service; candidates reaching the later stages undergo a Physical Competence Test at Templemore, a medical examination and a substance-misuse test, with vetting carried out during that period. Candidates "must be found suitable on all of the grounds above" to be offered a place, and success at any stage is expressly not a guarantee of acceptance.',
        claim: 'fact',
        sources: ['ie-garda-trainee-booklet-2024'],
      },
      {
        kind: 'paragraph',
        text: 'New Zealand shows the same components framed as requirements rather than as a sequence: disclosure of previous criminal and traffic convictions, police clearance for any country where the applicant has lived or worked for more than three months, at least five years of medical history, physical fitness and eyesight.',
        claim: 'fact',
        sources: ['nz-police-eligibility'],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands lists what admission considers rather than the order in which it does so: mental and physical fitness, medical requirements, integrity and reliability, and neutrality.',
        claim: 'fact',
        sources: ['nl-politie-toelatingseisen'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Eligibility screening',
            description:
              'Whether the documentary criteria are met at all — age, status, education, licence. Usually first, because it is the cheapest to check and disposes of applications no later stage could rescue.',
          },
          {
            term: 'Assessment of aptitude',
            description:
              'Whether a candidate can do the reasoning, communication and judgement the role requires. Systems use written assessments, interviews and exercises in various combinations; what any of them contains is not described here.',
          },
          {
            term: 'Physical assessment',
            description:
              'Whether a candidate meets the physical requirement the employer has set. Ireland names a Physical Competence Test; New Zealand states a fitness requirement. No standard, protocol or preparation guidance appears anywhere in this wave.',
          },
          {
            term: 'Medical examination',
            description:
              'A professional judgement about health and suitability, made by a medical practitioner rather than by a recruiter. The Irish condition requires certification by a Registered Medical Practitioner that the candidate is in good health, of sound constitution, and suited physically and mentally to the duties.',
          },
          {
            term: 'Background and integrity assessment',
            description:
              'Exists because the office carries powers that can be seriously misused, and because an officer’s account must be capable of being relied on in court. Why it exists is a public matter; how it is conducted is not described here.',
          },
          {
            term: 'The decision itself',
            description:
              'Reaching a final stage is not an offer. The Irish material states plainly that success through to any stage is not a guarantee of acceptance.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where the medical judgement actually sits',
        text: 'With a medical practitioner, on criteria set by the service. Whether any particular condition affects an application is not a question a website can answer, and this platform will not attempt it.',
      },
    ],
    misconceptions: [
      {
        claim: 'Police selection is an interview and a fitness test.',
        reality:
          'The researched systems describe eligibility screening, aptitude assessment, physical assessment, medical examination and background enquiry as separate components, each of which must be satisfied.',
      },
      {
        claim: 'Passing every stage means you are in.',
        reality:
          'The Irish material states that candidates must be found suitable on all grounds to be offered a place, and that success through to any stage is not a guarantee of acceptance.',
      },
      {
        claim: 'Eligibility is settled at the start.',
        reality:
          'The Irish material places the onus on candidates to provide evidence that they continue to meet the requirements throughout the process and to report changes affecting eligibility.',
      },
      {
        claim: 'The recruiter decides the medical question.',
        reality:
          'In Ireland the condition is certification by a Registered Medical Practitioner nominated by the Commissioner. It is a professional judgement, not a recruitment one.',
      },
      {
        claim: 'A page like this can help you prepare for the assessments.',
        reality:
          'It describes what stages are for and not what they contain. Material that helps a candidate present something other than themselves defeats the purpose of selection, and none appears here.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What the researched systems name, without claiming a common order.',
      },
      {
        kind: 'list',
        items: [
          'Staged selection run by a central public appointments body, with physical, medical, substance-misuse and vetting components at the later stages — Ireland.',
          'Conviction disclosure, overseas police clearance, five years of medical history, fitness and eyesight — New Zealand.',
          'Mental and physical fitness, medical requirements, integrity, reliability and neutrality as areas of assessment — Netherlands.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope',
        text: 'Three systems. Nothing here describes the order, content or duration of selection in any system not named, and nothing describes what any assessment measures.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Selection is the first point at which a justice system decides who may exercise its powers, and it is one of the few such decisions taken before anyone is accountable for anything. That is why the components are separate, why several are judged by people other than recruiters, and why the process is documented at all.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The stages as each system sets them out are on the country pages — [Ireland](/countries/ireland/police-recruitment), [New Zealand](/countries/new-zealand/police-recruitment), [the Netherlands](/countries/netherlands/police-recruitment). Why physical readiness matters at all is [physical readiness in policing careers](/law-enforcement/physical-readiness-in-policing-careers).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who recruits police officers](/law-enforcement/who-recruits-police-officers), [police entry requirements across systems](/law-enforcement/police-entry-requirements-across-systems), and [physical readiness in policing careers](/law-enforcement/physical-readiness-in-policing-careers). A system whose entry conditions sit in statute rather than in recruitment policy is [Czechia](/countries/czechia/police-recruitment).',
      },
    ],
  },
  {
    slug: 'police-entry-requirements-across-systems',
    title: 'Police entry requirements across systems',
    shortTitle: 'Entry requirements compared',
    question: 'How do police entry requirements differ between countries?',
    summary:
      'Six systems, compared only on the questions where the evidence is genuinely comparable — and two of the six have no national requirement to compare at all.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'who-recruits-police-officers',
      'citizenship-nationality-and-residency-in-police-recruitment',
      'when-a-recruitment-requirement-is-campaign-specific',
      'do-police-officers-need-a-degree',
    ],
    sources: [
      'ie-garda-eligibility-regulations',
      'ie-garda-educational-requirements',
      'ew-police-eligibility-criteria',
      'nz-police-eligibility',
      'nl-politie-toelatingseisen',
      'de-berlin-polizei-studium',
      'us-bjs-training-academies-2022',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 9,
    uncertainty: [
      'Six systems, stated as at 6 September 2026. Germany is represented by Berlin and Bavaria only, and the United States by a federal survey of training academies rather than by any employer’s requirements.',
      'The German and United States rows are deliberately empty for most questions, because no national requirement was established for either.',
      'The Irish age entry is deliberately absent: the only figure available is anchored to one competition’s closing date.',
      'No fitness standard, medical criterion or vetting criterion appears for any system. None was researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A comparison is only useful where the things compared are genuinely comparable. This one is confined to questions where the researched sources answer the same question — and it leaves cells empty rather than filling them, because an empty cell is information and a guessed one is not.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This compares six researched systems as at 6 September 2026. It is not a ranking, and this platform does not publish one — there is no easiest system to join and no best country for a police career. It cannot tell any individual whether they qualify anywhere.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Comparison is where false universals come from. Once four systems agree, the fifth gets assumed rather than checked, and the assumption is what ends up being repeated. Laying the evidence out with its gaps visible is the cheapest defence against that.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The empty cells are the most useful part',
        text: 'Germany and the United States have no national entry requirement, so their rows are mostly blank. That is not missing research — it is the finding. A table that filled those cells with one Land’s or one department’s rules would be the exact error this wave exists to prevent.',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Ireland — one national service',
            description:
              'Status: national of an EU, EEA, UK or Swiss state, OR international-protection status, OR a defined residence history. Education: Leaving Certificate at D3/O6 in five subjects at Ordinary Level, OR NFQ Level 5 Major award, OR a comparable Level 5+ qualification. Language: Irish or English. Degree required: no, stated expressly. Age: not stated here — the available figure belongs to one competition.',
          },
          {
            term: 'England and Wales — national criteria plus force criteria',
            description:
              'Status: no restrictions on the right to live and work in the UK; a three-year UK residency point applies for vetting where a candidate has lived abroad. Education: Level 3 minimum, defined as two A levels or equivalent. Age: 17 to apply, 18 to become an officer. Degree required: no. And forces may add their own local criteria on top.',
          },
          {
            term: 'New Zealand — one national service',
            description:
              'Status: New Zealand or Australian citizenship, OR New Zealand residency or permanent residency. Language: English. Age: 17 to apply, 18 at the start of Police College, with no upper age limit. Driving licence: restricted to apply, full before Police College.',
          },
          {
            term: 'Netherlands — admission to an education programme',
            description:
              'Status: Dutch nationality, which may be a second nationality. Education: vmbo-tl/gl, mbo-3 or mbo-4, or a transfer certificate to 4 havo/vwo, or an admission test. Language: Dutch at B1 written and spoken. Age: 18 at the start of training. Driving licence: category B within nine months of starting.',
          },
          {
            term: 'Germany — no national requirement exists',
            description:
              'Each Land recruits separately and the federal police separately again. Berlin requires the erweiterte Berufsbildungsreife for the mittlerer Dienst and "mindestens die Fachhochschulreife bzw. das Abitur" for the gehobener Dienst. That is Berlin. No status, age, language or licence requirement is stated here for Germany, because none exists nationally.',
          },
          {
            term: 'United States — no national requirement established',
            description:
              'Many independent employers at municipal, county, state and federal level. No entry requirement appears here for any of them: none was established from a current official source, and one employer’s rules would not describe the country.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What the comparable rows actually show',
        text: 'Four systems state an education threshold, and all four set it below a degree. Four state a status requirement, and each asks a different question. Two state an application age and an appointment age as separate thresholds. Two require a driving licence, and both require it later than the application rather than before it.',
      },
      {
        kind: 'paragraph',
        text: 'On the degree question the comparison confirms rather than complicates: no researched system requires one to enter, and Ireland says so in terms — "There is no requirement to have a degree prior to entering An Garda Síochána as a Garda Trainee."',
        claim: 'fact',
        sources: ['ie-garda-educational-requirements', 'ie-garda-eligibility-regulations'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A pattern worth noticing about licences and ages',
        text: 'Both the New Zealand licence rule and the two-age rules attach obligations to the start of training rather than to the application. A system that wants a wide applicant pool but a qualified intake can do exactly that — admit people who do not yet meet a requirement, provided they meet it before they start.',
      },
    ],
    misconceptions: [
      {
        claim: 'Police entry requirements are broadly similar across countries.',
        reality:
          'Of six researched systems, four state a national requirement and each frames status differently; the other two have no national requirement at all.',
      },
      {
        claim: 'Every country sets a maximum age.',
        reality:
          'New Zealand Police state "There’s no upper age limit". The only maximum found in this research was anchored to one Irish competition’s closing date and is not stated here as a rule.',
      },
      {
        claim: 'A degree is required somewhere among these systems.',
        reality:
          'None of the researched systems requires a degree to enter. Ireland states expressly that there is no such requirement.',
      },
      {
        claim: 'A comparison table like this can tell you where it is easiest to join.',
        reality:
          'It cannot, and this platform does not publish rankings of that kind. Requirements differ in what they ask, not in difficulty on a single scale.',
      },
      {
        claim: 'The blank cells mean the research was incomplete.',
        reality:
          'For Germany and the United States they mean no national requirement exists to state. Filling them with one Land’s or one department’s rules would misdescribe both countries.',
      },
      {
        claim: 'These requirements will still be current when you read this.',
        reality:
          'They were verified on 6 September 2026 and are set by recruiting authorities that change them. The authority named on each country page is the current source.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Which questions the evidence could answer, per system.',
      },
      {
        kind: 'list',
        items: [
          'Status, education, language, degree: answered for Ireland, England and Wales, New Zealand and the Netherlands.',
          'Application age and appointment age as separate thresholds: answered for England and Wales and New Zealand.',
          'Driving licence: answered for New Zealand and the Netherlands.',
          'Education only, and for one Land: Germany, via Berlin.',
          'No entry requirement answerable at national level: Germany and the United States.',
          'Fitness standards, medical criteria and vetting criteria: not researched for any system, and not published for any system.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Entry requirements decide who is eligible to hold coercive public authority, which makes them a public-interest question rather than only an applicant’s question. Where they are published clearly and set out with their legal basis, that decision can be examined. Where they are fragmented across hundreds of employers, it is harder to examine — not because anything is hidden, but because there is no single thing to look at.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'Each system in full: [Ireland](/countries/ireland/police-recruitment), [the Netherlands](/countries/netherlands/police-recruitment), [New Zealand](/countries/new-zealand/police-recruitment), [Germany](/countries/germany/police-recruitment), [the United States](/countries/united-states/police-recruitment). The degree question is [do police officers need a degree](/law-enforcement/do-police-officers-need-a-degree).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who recruits police officers](/law-enforcement/who-recruits-police-officers), [citizenship, nationality and residency](/law-enforcement/citizenship-nationality-and-residency-in-police-recruitment), [police recruitment in England and Wales](/law-enforcement/police-recruitment-in-england-and-wales), and [how police selection is structured](/law-enforcement/how-police-selection-is-structured).',
      },
    ],
  },
  /*
   * ==========================================================================
   * WAVE 25.5 — recruitment coverage completion and country architecture hardening.
   * ==========================================================================
   *
   * WHY THIS PAGE IS HERE AND NOT UNDER /countries.
   *
   * Wave 25 researched England and Wales to a publishable standard and could not publish a country
   * recruitment module, because `CountryDossier.countryCode` is documented as ISO 3166-1 alpha-2 —
   * a sovereign-state model. England and Wales has no alpha-2 code; GB-EWL is a subdivision code.
   * Creating a dossier would have meant inventing a country, which is exactly the semantic
   * corruption the brief forbids.
   *
   * The geographically correct container would be a United Kingdom dossier with jurisdiction
   * records for its three police systems. That is a full country pilot — the publication gate
   * requires six researched modules — and is recorded in the research plan as the proper future
   * home rather than half-built here.
   *
   * So the page lives in the global section, following the precedent this section already set with
   * `sheriffs-and-city-police`: "A United States page, deliberately", for a feature with no general
   * equivalent elsewhere. `jurisdiction: ['GB']` is honest — GB is the state; the page's own text
   * scopes to England and Wales within it, and says so in its first callout.
   *
   * THE SCOPE DISCIPLINE IS THE POINT. England and Wales is not the United Kingdom. Scotland and
   * Northern Ireland have separate services and are not described. The source itself supplies that
   * boundary: it addresses 43 forces and mentions neither.
   */
  {
    slug: 'police-recruitment-in-england-and-wales',
    title: 'Police recruitment in England and Wales',
    shortTitle: 'Recruitment (England & Wales)',
    question: 'How do you join the police in England and Wales?',
    summary:
      'National eligibility criteria that 43 separate forces each recruit under, and are each allowed to add to — so the national rules are a floor rather than the whole requirement. Scotland and Northern Ireland are separate systems.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['GB'],
    temporalScope: 'current',
    related: [
      'who-recruits-police-officers',
      'police-entry-requirements-across-systems',
      'citizenship-nationality-and-residency-in-police-recruitment',
      'do-police-officers-need-a-degree',
    ],
    sources: ['ew-police-eligibility-criteria', 'ew-joining-police-entry-routes'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'This page covers England and Wales only. Scotland and Northern Ireland have separate police services and separate recruitment, and neither was researched. Nothing here describes either.',
      'The national criteria were re-verified on 6 September 2026. Individual forces may add their own criteria, and NO force’s local criteria were researched.',
      'Selection stage content, vetting criteria, medical standards and fitness standards were deliberately not researched and are not described.',
      'This page has no country module because the corpus models countries on ISO 3166-1 alpha-2 codes and England and Wales has none. The reasoning is in docs/research/police-recruitment-research-plan.md.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'England and Wales is a single legal system policed by 43 separate territorial forces. Recruitment is neither fully national nor fully local: a set of national eligibility criteria applies across the system, and each force recruits under them while being permitted to add its own.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page covers, and what it deliberately does not',
        text: 'England and Wales, and nothing else. **This is not a United Kingdom page.** Scotland and Northern Ireland have their own police services with their own recruitment, and neither was researched. Verified against the official national recruitment service on 6 September 2026; the current position is the one that service and the individual force publish. This platform is not affiliated with any police force and does not accept applications.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'This system sits between the two models the rest of the corpus describes, and the middle is where most misunderstanding lives. Someone reading only the national criteria has read something true and incomplete; someone reading only one force’s page has read something true and local.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the source says so itself, which is unusual',
        text: 'Most recruitment material states its rules without stating their reach. This one states both: "Police forces are also allowed to apply their own local criteria in addition to the national eligibility aspects, so make sure you check your chosen force’s website for a full list of the role criteria." A page quoting the national criteria without that sentence has quietly changed what they mean.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Two ages, not one. The official position is that "You can now apply to join the police service at age 17, though you’ll need to wait until you’re 18 before you can officially become a police officer."',
        claim: 'fact',
        sources: ['ew-police-eligibility-criteria'],
      },
      {
        kind: 'paragraph',
        text: 'Status is framed as permission rather than membership. An applicant may apply "providing you have no restrictions on your right to live and work in the UK". A separate residency point attaches to vetting: candidates who have lived abroad may be required to have resided in the UK for three years, and time spent on an extended holiday, or abroad while serving with the armed forces or on government service, is treated as maintaining UK residence.',
        claim: 'fact',
        sources: ['ew-police-eligibility-criteria'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Note what that residency point is for',
        text: 'It is connected to vetting rather than to belonging — a background check is harder to carry out across a long period abroad. Reading it as a loyalty requirement misreads a practical one, and the distinction matters to anyone deciding whether it applies to them.',
      },
      {
        kind: 'paragraph',
        text: 'On education the position is stated twice over. The minimum is "a Level 3 Qualification. This is defined as two A levels", with equivalents accepted — and on degrees specifically: **"No, you don’t need to have a degree before you apply."** Successful completion of the Police Constable Degree Apprenticeship then leads to a degree in professional policing practice.',
        claim: 'fact',
        sources: ['ew-police-eligibility-criteria', 'ew-joining-police-entry-routes'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The award is the output, not the entry ticket',
        text: 'This is the same arrangement the degree page sets out at greater length: the route is named for what it awards. A reader who takes "Degree Apprenticeship" as a prerequisite has inverted it, and may spend three years and considerable money on a qualification that was never a condition of entry.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: '43 forces, one set of national criteria',
            description:
              'The national criteria cover age, nationality, criminal records and finances, and the process for medical, vetting and fitness testing. Each force applies them, and each may add to them.',
          },
          {
            term: 'Which means "the requirement" has two layers',
            description:
              'The national floor, and whatever the chosen force adds. A candidate who meets the first has established that they are not excluded nationally — not that they meet the requirement for the force they are applying to.',
          },
          {
            term: 'Entry routes are plural',
            description:
              'The Police Constable Degree Apprenticeship, the Degree Holder Entry Programme, the Police Constable Entry Programme and a pre-join professional policing degree are separate routes into the same rank. Which routes a force runs is a matter for that force.',
          },
          {
            term: 'And none of this describes Scotland or Northern Ireland',
            description:
              'Police Scotland and the Police Service of Northern Ireland are separate services with separate recruitment. The national criteria described here are the criteria for England and Wales, and the source that publishes them does not mention either.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page will not tell you',
        text: 'It does not describe what vetting examines, what a medical assessment looks for, what any fitness test involves, or what to say at any stage. Nor can it tell any individual whether they are eligible — that depends on current national criteria, on the chosen force’s own criteria, and on circumstances this platform does not assess.',
      },
    ],
    misconceptions: [
      {
        claim: 'These are the UK police entry requirements.',
        reality:
          'They are the national criteria for England and Wales. Scotland and Northern Ireland have separate police services with separate recruitment, and the official source that publishes these criteria addresses 43 forces and mentions neither.',
      },
      {
        claim: 'Meeting the national criteria means you meet the requirements.',
        reality:
          'The official recruitment service states that forces are also allowed to apply their own local criteria in addition to the national eligibility aspects.',
      },
      {
        claim: 'You need a degree to join, because the main route is a degree apprenticeship.',
        reality:
          'The official position is stated directly: "No, you don\'t need to have a degree before you apply." The minimum is a Level 3 qualification, and the degree is what the route awards.',
      },
      {
        claim: 'You must be a British citizen.',
        reality:
          'The national criteria are framed as permission rather than citizenship: an applicant may apply providing there are no restrictions on their right to live and work in the UK.',
      },
      {
        claim: 'You have to be 18 to apply.',
        reality:
          'You can apply at 17, and must wait until 18 before becoming a police officer. Applying and being appointed are separate events with separate rules.',
      },
      {
        claim: 'The three-year residency point is about nationality.',
        reality:
          'It attaches to vetting, and applies to candidates who have lived abroad. Time on an extended holiday, or abroad with the armed forces or on government service, is treated as maintaining UK residence.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where this system sits against the others researched.',
      },
      {
        kind: 'list',
        items: [
          'One national service, central competition — Ireland.',
          'One national service, central recruitment — New Zealand.',
          'National criteria plus force-level criteria, across 43 forces — England and Wales.',
          'National admission to police education programmes — Netherlands.',
          'Admission through the national university admissions service — Norway.',
          'A statutory service relationship with conditions set in legislation — Czechia.',
          'Separate recruitment by each Land — Germany.',
          'Many independent employers, no national requirement — United States.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of this comparison',
        text: 'Each row describes the system named. The England and Wales row is the only one of the eight where a national layer and a local layer both apply to the same applicant, which is why this page states both.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A two-layer requirement is harder to scrutinise than a single one. National criteria can be examined nationally; 43 sets of additional local criteria cannot be examined in one place. That is a real cost of local policing governance rather than an argument against it — and it is why the national service tells applicants to go and read the force’s own page.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'How recruitment is organised elsewhere is [who recruits police officers](/law-enforcement/who-recruits-police-officers). The degree question in depth is [do police officers need a degree](/law-enforcement/do-police-officers-need-a-degree). The entry routes themselves are [what a police academy is](/law-enforcement/what-a-police-academy-is).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [police entry requirements across systems](/law-enforcement/police-entry-requirements-across-systems), [citizenship, nationality and residency in police recruitment](/law-enforcement/citizenship-nationality-and-residency-in-police-recruitment), and [who recruits police officers](/law-enforcement/who-recruits-police-officers).',
      },
    ],
  },
  /*
   * ==========================================================================
   * WAVE 26 — police equipment, uniforms and professional technology.
   * ==========================================================================
   *
   * An EQUIPMENT KNOWLEDGE FOUNDATION, not a commerce wave and not a gear guide.
   *
   * THE LINE THIS WAVE IS BUILT ON. These pages say WHAT equipment categories exist, WHY they
   * exist, WHO issues them, under WHAT policy, and to WHAT standard. They never say how anything
   * is used, carried, configured, selected or bought. Naming that a service issues a baton is
   * institutional description of what a police service is; describing how one is used is
   * instruction, and no page here does it.
   *
   * NO COMMERCE, AND NOT MERELY NONE YET. The wave brief permits informational institutional
   * coverage of restricted categories and forbids procurement guidance, product recommendations,
   * operational setup, performance optimisation and tactical configuration around them. There is
   * no product name anywhere in this wave, no supplier, no price, no protection level, and no
   * "what to buy" of any kind — for regulated and unregulated items alike.
   *
   * THE SOURCES ARE INSTITUTIONAL BY CONSTRUCTION. An official uniform policy, a police service's
   * own statement of what its uniform is for, a national standards body's compliance-testing
   * regime, and a federal survey of adoption. None is a review, a catalogue or a supplier.
   */
  {
    slug: 'what-police-equipment-is-for',
    title: 'What police equipment is for',
    shortTitle: 'What equipment is for',
    question: 'What equipment do police officers actually carry, and why?',
    summary:
      'Equipment is issued to do a job, and the job explains the categories: to be identifiable, to record what happened, to be protected, to communicate, and to deal with what a shift brings. One police service publishes its own list.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-police-wear-a-uniform',
      'issued-equipment-and-personal-equipment',
      'documentation-equipment-in-policing',
      'working-life-in-policing',
    ],
    sources: ['ie-garda-uniform-dress-code-policy', 'nl-politie-uniform-purpose'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 8,
    uncertainty: [
      'The itemised list is An Garda Síochána’s, from its own published policy. No other service’s equipment list was researched, and services differ substantially in what they issue.',
      'Nothing here describes how any item is used, carried or configured, and that is a deliberate limit rather than a gap in the research.',
      'Whether officers routinely carry firearms differs between and within countries and is set nationally. It was NOT RESEARCHED for this wave and is not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Police equipment is not a collection of gear. It is the set of things a service issues so that an officer can do the job it has given them — and because the job is mostly communication, observation and recording, most of the equipment is too.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'It names categories of equipment and explains what each is for. It describes no technique, no method of use, no configuration, no specification and no product. It recommends nothing, compares nothing and links to no supplier. Where a category is regulated — and several are — the page records that a service issues it and stops there.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The popular picture of police equipment is a belt of weapons. The published lists do not look like that: they are dominated by clothing, protection, recording and the ordinary means of being seen and reaching someone.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the imbalance is the same one the training data showed',
        text: 'Measured academy instruction gives more hours to law than to firearms or defensive tactics — see [what police recruits are taught](/law-enforcement/what-police-recruits-are-taught). The equipment lists point the same way: what a service issues is a better guide to what the job consists of than what fiction selects from it.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'An Garda Síochána publishes what a member takes on duty. Its Uniform and Dress Code policy states that "A member going on duty will carry the appropriate PPE, in the official utility belt, and pouches issued including extendible baton, handcuffs, incapacitant spray, anti-spit guard (where applicable), a notebook, pen, medi-pouch and general purpose safety helmet."',
        claim: 'fact',
        sources: ['ie-garda-uniform-dress-code-policy'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Read the list rather than skimming it',
        text: 'A notebook and a pen sit in the same sentence as the protective and restraint items, and a medical pouch sits beside both. That is one service saying, in its own policy, that recording what happened and treating an injury are equipment questions of the same order as the rest.',
      },
      {
        kind: 'paragraph',
        text: 'The uniform itself is equipment, and the same policy divides it into three named categories — Operational, Dress and Formal — with the Operational Uniform listing items including a baseball cap, polo shirt, epaulettes, a Personal Protective Vest (Body Armour), utility trousers, a soft shell jacket, an operational gilet, waterproof jacket and over-trousers, and high-visibility summer and winter jackets.',
        claim: 'fact',
        sources: ['ie-garda-uniform-dress-code-policy'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Identification',
            description:
              'The largest category by volume, and the one most easily overlooked. Uniform, insignia, epaulettes and an identity card exist so that a member of the public can tell who they are dealing with — see [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform).',
          },
          {
            term: 'Protection',
            description:
              'Protective vests, helmets and weather clothing. The Garda policy lists a Personal Protective Vest as part of the Operational Uniform rather than as an addition to it, which is a statement about how routine the category is.',
          },
          {
            term: 'Documentation',
            description:
              'A notebook and pen, and increasingly digital equivalents. The durable output of most police work is a record, so the means of making one is core equipment — see [documentation equipment in policing](/law-enforcement/documentation-equipment-in-policing).',
          },
          {
            term: 'Communication',
            description:
              'Radio and related equipment, which is what connects an officer to the control room that dispatched them and to everyone else working the same incident.',
          },
          {
            term: 'Recording',
            description:
              'Body-worn video where a service uses it — a category that barely existed two decades ago and is now majority practice in at least one country. See [body-worn video as institutional equipment](/law-enforcement/body-worn-video-as-institutional-equipment).',
          },
          {
            term: 'Medical',
            description:
              'A medical pouch is on the Garda list. An officer is frequently the first person present at an injury, which makes first-aid capability an equipment question rather than an afterthought.',
          },
          {
            term: 'Restraint and force options',
            description:
              'Services issue items in this category, and the Garda policy names extendible baton, handcuffs and incapacitant spray among what a member carries. **What any of them is, how it is used, and when it may lawfully be used are not described here** — the legal question is [when may police use force](/law-enforcement/police-use-of-force).',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Weather and visibility clothing is not trivial equipment',
        text: 'The Operational Uniform list carries waterproofs and separate high-visibility summer and winter jackets. An officer works outdoors for most of a shift in whatever the weather is doing, and being visible in it is both a safety function and an identification one.',
      },
    ],
    misconceptions: [
      {
        claim: 'Police equipment is mostly weapons.',
        reality:
          'The published Garda list for a member going on duty includes a notebook, pen, medi-pouch and safety helmet alongside protective and restraint items, and the Operational Uniform itself is a list of clothing and protection.',
      },
      {
        claim: 'The uniform is clothing rather than equipment.',
        reality:
          'The Garda policy defines uniform as items "issued to Garda Personnel to wear for the purpose of carrying out their duties", and lists the Personal Protective Vest as part of the Operational Uniform.',
      },
      {
        claim: 'Every police service issues the same things.',
        reality:
          'Only one service’s list was researched for this page. Services differ substantially in what they issue, and whether officers routinely carry firearms is set nationally and was not researched.',
      },
      {
        claim: 'Officers choose their own equipment.',
        reality:
          'Equipment is issued under policy. The Garda document is a policy approved by the Garda Executive with a named policy owner and an effective date.',
      },
      {
        claim: 'A page about equipment will tell you what to buy.',
        reality:
          'This one names no product, no supplier, no specification and no price, for regulated and unregulated categories alike. It describes what services issue and why.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What the researched evidence establishes, and what it does not.',
      },
      {
        kind: 'list',
        items: [
          'Established: one service’s published categories of uniform, and the items a member carries on duty — An Garda Síochána.',
          'Established: the stated purpose of a uniform in one other service — the Netherlands.',
          'Not established: what any other service issues.',
          'Not researched: firearms carriage, which is set nationally and differs sharply.',
          'Not described anywhere: how any item is used, carried, configured or obtained.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Equipment is a public question because it is issued with public authority and used in public. A service that publishes its uniform policy openly — as this one does, marked unrestricted — lets anyone see what its officers are equipped to do, which is a modest but real form of accountability that costs nothing to exercise.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The identification function is [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform). Who owns and replaces equipment is [issued equipment and personal equipment](/law-enforcement/issued-equipment-and-personal-equipment). The legal limit on force is [when may police use force](/law-enforcement/police-use-of-force).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform), [documentation equipment in policing](/law-enforcement/documentation-equipment-in-policing), and [working life in policing](/law-enforcement/working-life-in-policing). The largest single category a service issues is its fleet — see [police vehicles and what they are for](/law-enforcement/police-vehicles-and-what-they-are-for).',
      },
    ],
  },
  {
    slug: 'why-police-wear-a-uniform',
    title: 'Why police wear a uniform',
    shortTitle: 'Why a uniform',
    question: 'What is a police uniform actually for?',
    summary:
      'One police service answers in its own words: visibility and recognisability first, then the fact that the wearer represents public authority, then protection. Each function does something different, and the third is the one people forget.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-police-equipment-is-for',
      'how-police-officers-are-identified',
      'issued-equipment-and-personal-equipment',
      'professional-standards-in-policing-work',
    ],
    sources: ['nl-politie-uniform-purpose', 'ie-garda-uniform-dress-code-policy'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'Two services were researched: the Netherlands for the stated purpose of the uniform, and An Garda Síochána for its uniform policy. No other service’s position was researched.',
      'Uniform design, specification, colour schemes and insignia systems were NOT RESEARCHED for any country and are not described.',
      'Nothing here describes how a uniform or any item on it is worn in any operational sense.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A uniform is the most visible thing a police service issues, and the only piece of equipment that works on everyone who sees it rather than on the person wearing it. That is what makes it worth asking what it is actually for.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains the functions two police services attribute to their own uniforms. It describes no design, specification or insignia system, and it is not about how a uniform is worn. It is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The question sounds trivial and is not. A uniform decides whether a stranger approaching you at night is identifiable as a police officer, and whether you can say afterwards who it was. Both of those are conditions for the rest of the system working.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Dutch national police name the primary function directly: "Zichtbaarheid en herkenbaarheid zijn daarmee de belangrijkste functies van het uniform" — visibility and recognisability are the most important functions of the uniform.',
        claim: 'fact',
        sources: ['nl-politie-uniform-purpose'],
      },
      {
        kind: 'paragraph',
        text: 'The same page adds a second function that is about authority rather than sight: "Het uniform ‘zegt’ ook dat de politieagent de autoriteit is op straat. De politieagent vertegenwoordigt het gezag (de overheid)" — the uniform also says that the officer is the authority on the street, and that the officer represents public authority. And a third: "Daarnaast biedt het uniform ook veiligheid en bescherming" — it also provides safety and protection.',
        claim: 'fact',
        sources: ['nl-politie-uniform-purpose'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Three functions, and they can pull against each other',
        text: 'Maximum visibility, unmistakable authority and physical protection are not automatically the same garment. High-visibility clothing serves the first; protective equipment serves the third; and a service has to decide how much of each an officer carries at once. The Garda policy resolves it by having three uniform categories rather than one.',
      },
      {
        kind: 'paragraph',
        text: 'That policy divides the uniform into Operational, Dress and Formal categories, and defines uniform itself as any item "issued to Garda Personnel to wear for the purpose of carrying out their duties". The Operational Uniform is where the protective and weather items sit — including the Personal Protective Vest and separate high-visibility summer and winter jackets.',
        claim: 'fact',
        sources: ['ie-garda-uniform-dress-code-policy'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Recognisability is a two-way function',
            description:
              'It lets a person in trouble find help quickly, and it lets a person who has been dealt with badly say who dealt with them. The second is the accountability half, and it depends on the same garment as the first.',
          },
          {
            term: 'Representing authority is a claim, not just a signal',
            description:
              'The Dutch wording is that the officer represents the state. A uniform asserts something about the wearer’s powers, which is precisely why impersonation is treated seriously and why identification documents exist alongside the uniform.',
          },
          {
            term: 'Protection is genuine but partial',
            description:
              'A uniform provides some protection, and specific protective equipment provides more. Treating the uniform as protective equipment in itself would overstate it; treating it as clothing would understate it.',
          },
          {
            term: 'Plain clothes removes the first two functions',
            description:
              'An officer not in uniform is neither visible nor recognisable as one, which is why systems attach a stronger identification duty to plain-clothes work — see [how police officers are identified](/law-enforcement/how-police-officers-are-identified).',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'A police uniform is mainly about looking authoritative.',
        reality:
          'The Dutch national police put visibility and recognisability first, and name authority second. The service’s own ordering is the opposite of the assumption.',
      },
      {
        claim: 'The uniform is just clothing.',
        reality:
          'The Garda policy defines it as items issued for the purpose of carrying out duties, and places the Personal Protective Vest inside the Operational Uniform rather than outside it.',
      },
      {
        claim: 'Recognisability is for the officer’s benefit.',
        reality:
          'It works in both directions: it lets someone find help, and it lets someone say afterwards who dealt with them. The second is what makes it an accountability function.',
      },
      {
        claim: 'All police uniforms are broadly the same.',
        reality:
          'Only two services were researched here, and one of them divides its uniform into three named categories for different purposes. No design or specification is described for any country.',
      },
      {
        claim:
          'Officers in plain clothes are the same as officers in uniform for identification purposes.',
        reality:
          'They are not, and systems reflect that. In the Netherlands an officer in plain clothes must show the police identity card on their own initiative, while a uniformed officer need only show it on request.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Functions and structures, as the two researched services state them.',
      },
      {
        kind: 'list',
        items: [
          'Visibility and recognisability as the primary functions — Netherlands.',
          'Representing public authority — Netherlands.',
          'Safety and protection — Netherlands.',
          'Three uniform categories: Operational, Dress and Formal — An Garda Síochána.',
          'Protective vest and high-visibility clothing inside the Operational Uniform — An Garda Síochána.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope',
        text: 'Two services. Nothing here establishes what any other service’s uniform is for, how it is designed, or what its insignia mean.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Recognisability is where a uniform stops being a matter of appearance and becomes a matter of rights. A person who cannot identify the officer who dealt with them cannot complain effectively about it, and a service that made its officers harder to identify would be reducing its own accountability whatever else it intended.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The identification duty in detail is [how police officers are identified](/law-enforcement/how-police-officers-are-identified). What else is issued is [what police equipment is for](/law-enforcement/what-police-equipment-is-for). Why accountability needs identifiability at all is [why police accountability matters](/law-enforcement/why-police-accountability-matters).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police equipment is for](/law-enforcement/what-police-equipment-is-for), [how police officers are identified](/law-enforcement/how-police-officers-are-identified), and [professional standards in policing work](/law-enforcement/professional-standards-in-policing-work).',
      },
    ],
  },
  {
    slug: 'how-police-officers-are-identified',
    title: 'How police officers are identified',
    shortTitle: 'Identifying an officer',
    question: 'How can you tell someone is really a police officer?',
    summary:
      'Uniform, insignia and an identity card do different parts of the job — and in at least one system the duty to produce the card is stronger for an officer in plain clothes than for one in uniform.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-police-wear-a-uniform',
      'what-police-equipment-is-for',
      'why-police-accountability-matters',
      'how-police-are-held-to-account',
    ],
    sources: [
      'nl-politie-legitimatiebewijs',
      'nl-politie-uniform-purpose',
      'ie-garda-uniform-dress-code-policy',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'The identification rules described are the Netherlands’. Identification duties differ between systems and NO other country’s rule was researched.',
      'The security features of any identity document are described only as existing. Nothing here describes what they look like or how they are checked, and that limit is deliberate.',
      'What a person may do if they doubt an officer’s identity is a matter for the police service concerned and was NOT RESEARCHED.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Identification is three overlapping systems doing slightly different work: a uniform that says "police" at a distance, insignia that say which officer and what rank, and a document that proves it close up. A system needs all three because each fails where the others work.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'It describes that identity documents carry authenticity features and what the duty to produce one is. It does **not** describe what those features look like, how they are verified, or anything else that would assist someone attempting to imitate a police officer. That omission is the point of the page, not a gap in it.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Every police power depends on the person exercising it actually holding it. Identification is where that is settled in practice, at the moment it matters, usually by someone who has no other way to check.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which is why the duty is asymmetric',
        text: 'A uniform already answers the question, so the document is a backstop. Plain clothes answers nothing, so the document becomes the whole of the answer — and the duty to produce it moves accordingly. That asymmetry is a design decision, and at least one system states it explicitly.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Dutch national police describe the identity card as "een kaart met de naam, het personeelsnummer en de pasfoto van de politiemedewerker" — a card carrying the officer’s name, personnel number and photograph. It also carries visible and invisible authenticity features, of which the hologram is described as the most important.',
        claim: 'fact',
        sources: ['nl-politie-legitimatiebewijs'],
      },
      {
        kind: 'paragraph',
        text: 'The duty then differs by dress: "Een politiemedewerker in uniform hoeft zich niet uit zichzelf te legitimeren maar als u ernaar vraagt, moet het politielegitimatiebewijs wel getoond worden. Een politiemedewerker in ‘burgerkleding’ moet wel uit eigen beweging het politielegitimatiebewijs tonen." A uniformed officer need not identify themselves unprompted but must show the card if asked; an officer in plain clothes must show it of their own initiative.',
        claim: 'fact',
        sources: ['nl-politie-legitimatiebewijs'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Note what the uniformed rule still guarantees',
        text: 'Not that identification is optional, but that the uniform has already done part of it. The card remains available on request, which means a person always has a route to a name and a number — and that is the part accountability actually needs.',
      },
      {
        kind: 'paragraph',
        text: 'The uniform carries its own identifying elements. The Garda Operational Uniform includes epaulettes, and the same policy applies dress standards to "uniformed and plain-clothes members, and Garda staff", so the identification question reaches everyone the service employs rather than only officers on patrol.',
        claim: 'fact',
        sources: ['ie-garda-uniform-dress-code-policy'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The uniform: identification at a distance',
            description:
              'It works before any interaction begins, on everyone who sees it, without anyone asking. Visibility and recognisability are the functions the Dutch police name first.',
          },
          {
            term: 'Insignia: which officer, and what rank',
            description:
              'Epaulettes and similar markings narrow "a police officer" to a particular one with a particular position. Systems differ in what they display and this wave describes no insignia system.',
          },
          {
            term: 'The identity document: proof close up',
            description:
              'A name, a personnel number and a photograph — the elements that let an interaction be traced to a person afterwards. Its authenticity features exist and are not described here.',
          },
          {
            term: 'And plain clothes, where only the third works',
            description:
              'No uniform, no insignia, so the document carries the whole load — which is why the duty to produce it without being asked attaches there.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Impersonation is the reason all of this is formalised',
        text: 'A system that assumed good faith would need none of it. Identity documents carry authenticity features, and services publish what their officers look like, precisely because the authority a uniform asserts is worth imitating. What to do about a specific doubt is a matter for the police service concerned, and this platform does not advise on it.',
      },
    ],
    misconceptions: [
      {
        claim: 'A police officer must always identify themselves without being asked.',
        reality:
          'In the Netherlands a uniformed officer need not do so unprompted, but must show the identity card if asked. An officer in plain clothes must show it of their own initiative.',
      },
      {
        claim: 'The uniform is enough on its own.',
        reality:
          'It identifies a police officer at a distance but not which one. The identity card carries the name and personnel number, which is what an account of an interaction afterwards depends on.',
      },
      {
        claim: 'Identification rules are the same everywhere.',
        reality:
          'Only the Dutch rule was researched. Identification duties differ between systems and none is described here for any other country.',
      },
      {
        claim: 'Identification only applies to officers on patrol.',
        reality:
          'The Garda dress standards policy applies to uniformed and plain-clothes members and to Garda staff, so the question reaches everyone the service employs.',
      },
      {
        claim: 'A page like this can help you verify a specific person.',
        reality:
          'It cannot, and does not try. It describes that documents carry authenticity features without describing them, and what to do about a doubt is a matter for the police service concerned.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The three layers, and what each does alone.',
      },
      {
        kind: 'list',
        items: [
          'Uniform — identifies a police officer, at a distance, to everyone, without being asked.',
          'Insignia — narrows it to a rank and, where displayed, an individual.',
          'Identity card — name, personnel number and photograph, on request or unprompted depending on dress.',
          'Plain clothes — only the third applies, and the duty is correspondingly stronger.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Every accountability mechanism in the corpus assumes the complainant can say who they are complaining about. Identification is what makes that assumption true, and it is the point at which an abstract right to complain becomes a usable one.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What a uniform is for is [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform). What complaints machinery does with an identification is [how are police held to account](/law-enforcement/how-police-are-held-to-account). Plain-clothes work as a career reality is [specialist roles in policing](/law-enforcement/specialist-roles-in-policing).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform), [why police accountability matters](/law-enforcement/why-police-accountability-matters), and [what police equipment is for](/law-enforcement/what-police-equipment-is-for). The same question at vehicle scale is [marked vehicles and police identification](/law-enforcement/marked-vehicles-and-police-identification).',
      },
    ],
  },
  {
    slug: 'issued-equipment-and-personal-equipment',
    title: 'Issued equipment and personal equipment',
    shortTitle: 'Issued and personal',
    question: 'Do police officers buy their own equipment?',
    summary:
      'Core equipment is issued under policy, not purchased by the officer — and the policy that issues it also governs replacement, disposal and what happens at the start of training.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-police-equipment-is-for',
      'why-police-wear-a-uniform',
      'equipment-standards-and-testing',
      'what-a-police-academy-is',
    ],
    sources: ['ie-garda-uniform-dress-code-policy'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 6,
    uncertainty: [
      'One service’s policy was researched — An Garda Síochána. Whether other services issue on the same terms was NOT RESEARCHED.',
      'What, if anything, an officer may add at their own expense, and under what permission, was NOT ESTABLISHED for any system.',
      'No supplier, product, specification or cost appears anywhere in this wave, and none was researched.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The equipment that matters is issued. It belongs to the service, is governed by the service’s policy, and is replaced through the service’s process — which makes "what do officers buy" a smaller question than it sounds, and "who decides what they carry" a much larger one.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes how one service governs the issue of equipment. It names no supplier, no product, no specification and no price, and it offers no purchasing guidance of any kind — for personal items as much as for regulated ones. It is not advice to anyone about anything they might buy.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'If officers chose their own equipment, a service could not say what its officers were equipped to do, could not hold them to a standard, and could not answer for the consequences. Issuing is what makes equipment an institutional fact rather than a personal preference.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And it is the same logic as the uniform',
        text: 'A uniform only identifies if everyone wearing it has the same one. Equipment only supports accountability if the service knows what was issued to whom. Both follow from the fact that the public is dealing with an institution rather than with an individual.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Garda policy defines uniform as any item "issued to Garda Personnel to wear for the purpose of carrying out their duties" — the definition is framed around issue, not around ownership or purchase.',
        claim: 'fact',
        sources: ['ie-garda-uniform-dress-code-policy'],
      },
      {
        kind: 'paragraph',
        text: 'The same document carries sections on the issue and replacement of uniform items to members, on the disposal of uniform, and on the issue of uniform to student and probationer Gardaí — so the lifecycle from first issue through replacement to disposal is governed by one policy, approved by the Garda Executive with a named policy owner and an effective date of 24 January 2025.',
        claim: 'fact',
        sources: ['ie-garda-uniform-dress-code-policy'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Disposal is in there for a reason',
        text: 'A uniform that leaves the service without being disposed of is a uniform someone else can wear. Governing the end of the lifecycle is the same problem as governing identification at the start of it, which is why a dress-code policy carries a disposal section at all.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Issued during training, not on appointment',
            description:
              'The policy provides for issue to student and probationer Gardaí, so equipment arrives with the training rather than after it. That fits the Irish structure, where trainees attest partway through a programme.',
          },
          {
            term: 'Replacement runs through a process, not a shop',
            description:
              'Lost or damaged items are replaced through the service’s own procedure. The point is not the paperwork but that the service knows what each member holds.',
          },
          {
            term: 'The standard applies to plain clothes too',
            description:
              'The policy’s standards apply to uniformed and plain-clothes members and to Garda staff, so being out of uniform does not put a member outside the equipment governance.',
          },
          {
            term: 'What an individual may add is a separate question',
            description:
              'Whether and how an officer may use anything they have obtained themselves is governed by each service, and was NOT RESEARCHED here. No page in this wave suggests anything anyone should acquire.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Police officers buy their own equipment.',
        reality:
          'The Garda policy defines uniform as items issued to personnel for carrying out their duties, and governs issue, replacement and disposal through the service.',
      },
      {
        claim: 'Equipment is issued once, at the end of training.',
        reality:
          'The same policy provides separately for the issue of uniform to student and probationer Gardaí.',
      },
      {
        claim: 'Officers in plain clothes are outside equipment policy.',
        reality:
          'The Garda standards apply to uniformed and plain-clothes members and to Garda staff alike.',
      },
      {
        claim: 'Every police service issues equipment the same way.',
        reality:
          'One service’s policy was researched. Whether others issue on the same terms was not established.',
      },
      {
        claim: 'A page about issued equipment will tell you what to get.',
        reality:
          'This one names no supplier, product, specification or price, and offers no purchasing guidance for any category.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What one published policy governs, end to end.',
      },
      {
        kind: 'list',
        items: [
          'Definition of uniform as items issued for carrying out duties.',
          'Issue to student and probationer members during training.',
          'Issue and replacement of items to serving members.',
          'Disposal of uniform.',
          'Standards applying to uniformed members, plain-clothes members and staff.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope',
        text: 'An Garda Síochána, from its own published policy version 1.2, effective 24 January 2025. Nothing here describes any other service.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Knowing what was issued to whom is a precondition of answering for what was done with it. An equipment policy is therefore part of the accountability architecture even though it reads like administration — and publishing it openly, as this one is, lets that be checked rather than assumed.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What is issued is [what police equipment is for](/law-enforcement/what-police-equipment-is-for). How equipment is tested to a standard before a service buys it is [equipment standards and testing](/law-enforcement/equipment-standards-and-testing). When equipment arrives in a career is [what a police academy is](/law-enforcement/what-a-police-academy-is).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police equipment is for](/law-enforcement/what-police-equipment-is-for), [equipment standards and testing](/law-enforcement/equipment-standards-and-testing), and [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform).',
      },
    ],
  },
  {
    slug: 'equipment-standards-and-testing',
    title: 'Equipment standards and testing',
    shortTitle: 'Equipment standards',
    question: 'Who decides whether police equipment actually works?',
    summary:
      'In the United States a national body has set voluntary standards for one category since 1972 and tests products against them — a system that exists because a service buying protective equipment cannot test it itself.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'issued-equipment-and-personal-equipment',
      'what-police-equipment-is-for',
      'body-worn-video-as-institutional-equipment',
      'who-regulates-forensic-science',
    ],
    sources: ['us-nij-body-armor-standards'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'One standards regime was researched — the United States NIJ programme for body armor. Whether comparable regimes exist elsewhere, and for which categories, was NOT RESEARCHED.',
      'NO protection level, product, model, specification or performance figure appears on this page. The standard’s content was deliberately not reproduced, and no purchasing guidance is given.',
      'How any service actually procures equipment, and on what terms, was NOT RESEARCHED for any country.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A police service buying protective equipment faces a problem it cannot solve alone: it has no way to establish whether the thing works, and it will only find out when it matters. Standards and independent testing exist to move that question away from the moment of use.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'It describes that a standards and compliance-testing system exists, who runs it, and how it works institutionally. It reproduces **no** performance requirement, protection level, test method, product name or model, and gives **no** guidance on selecting or buying anything. The page is about governance, not about equipment specification.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The buyer cannot verify the product, the user finds out too late, and the manufacturer knows more than either. That combination is the classic case for an independent standard — and it is why the arrangement looks the same here as it does for forensic accreditation elsewhere in the corpus.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the same logic explains why it is voluntary',
        text: 'A standard nobody is compelled to meet still works if buyers prefer products that meet it. The pressure runs through procurement rather than through law, which is a lighter instrument than regulation and depends on services actually caring what they buy.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The National Institute of Justice states that it "has been setting voluntary body armor standards since 1972", and that "the NIJ standard is the only nationally accepted standard for the body armor worn by law enforcement and corrections officers".',
        claim: 'fact',
        sources: ['us-nij-body-armor-standards'],
      },
      {
        kind: 'paragraph',
        text: 'Standards alone would settle nothing, so the same body tests against them: NIJ "administers a program to test commercially available armor for compliance with the standards to determine whether the vests will perform as expected". Manufacturers take part voluntarily — registering with the programme, submitting documents, sending samples to approved laboratories, and agreeing to follow-up inspections.',
        claim: 'fact',
        sources: ['us-nij-body-armor-standards'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The follow-up regime is the part that makes it mean anything',
        text: 'A manufacturer whose model meets the standard "is subject to six follow-up inspections and testing over a five-year period". Certifying a submitted sample proves something about that sample; re-testing recently manufactured items proves something about what is actually being sold. Without the second, the first is a one-off.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A standard says what "works" means',
            description:
              'Before anything can be tested, someone has to define the performance being claimed. That definitional step is why standards bodies exist at all, and it is separate from the testing that follows.',
          },
          {
            term: 'Compliance testing is independent of the seller',
            description:
              'Samples go to laboratories recognised by the programme rather than to the manufacturer’s own testing. The independence is the value.',
          },
          {
            term: 'Voluntary does not mean optional in practice',
            description:
              'Where a standard is the only nationally accepted one, buyers can require it even though the law does not. The obligation arrives through purchasing decisions.',
          },
          {
            term: 'Continuing surveillance, not a certificate',
            description:
              'Six follow-up inspections across five years treats compliance as a state to be maintained rather than a badge to be earned once.',
          },
          {
            term: 'This is one category, in one country',
            description:
              'The regime described is for body armor in the United States. Whether other categories or other countries have equivalents was not researched, and none is claimed.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The same shape appears elsewhere in the corpus',
        text: 'Forensic science solves a structurally identical problem — a court cannot verify a laboratory’s competence itself — with accreditation and regulation. See [who regulates forensic science](/forensics/who-regulates-forensic-science). Independent verification of a claim the buyer cannot check is a recurring institutional pattern rather than a feature of one field.',
      },
    ],
    misconceptions: [
      {
        claim: 'Police equipment must meet legally mandatory standards.',
        reality:
          'The NIJ body armor standards are described by NIJ itself as voluntary. They carry weight because they are the only nationally accepted standard, not because the law compels them.',
      },
      {
        claim: 'A standard is a test.',
        reality:
          'The standard defines the performance; the compliance-testing programme establishes whether a product meets it. NIJ runs both, and they are separate functions.',
      },
      {
        claim: 'Certification is permanent once granted.',
        reality:
          'A compliant manufacturer is subject to six follow-up inspections and testing over a five-year period, including testing of recently manufactured items.',
      },
      {
        claim: 'These standards apply internationally.',
        reality:
          'The regime described is the United States NIJ programme. Whether comparable regimes exist elsewhere was not researched, and none is described.',
      },
      {
        claim: 'A page about standards will tell you which equipment is best.',
        reality:
          'This one names no product, model, protection level or specification, and gives no purchasing guidance. It describes how the verification system is arranged.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What was established, and the boundaries around it.',
      },
      {
        kind: 'list',
        items: [
          'Voluntary standards for one equipment category, set since 1972 — United States, NIJ.',
          'Described by the body itself as the only nationally accepted standard for that category.',
          'An administered compliance-testing programme, with manufacturers participating voluntarily.',
          'Six follow-up inspections and testing across five years for a compliant model.',
          'Not researched: any other category, any other country, and how any service procures.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Equipment standards protect the officer who relies on the equipment, and they protect the public interest in a service that spends public money on things that work. Both depend on someone independent of the seller being able to say so — which is the same reason courts do not take a laboratory’s word for its own competence.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'How equipment reaches an officer is [issued equipment and personal equipment](/law-enforcement/issued-equipment-and-personal-equipment). The same verification problem in another field is [who regulates forensic science](/forensics/who-regulates-forensic-science).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [issued equipment and personal equipment](/law-enforcement/issued-equipment-and-personal-equipment), [what police equipment is for](/law-enforcement/what-police-equipment-is-for), and [who regulates forensic science](/forensics/who-regulates-forensic-science).',
      },
    ],
  },
  {
    slug: 'documentation-equipment-in-policing',
    title: 'Documentation equipment in policing',
    shortTitle: 'Documentation equipment',
    question: 'Why is a notebook police equipment?',
    summary:
      'Because the durable output of most police work is a record, and the means of making one is issued alongside everything else — one service lists a notebook and pen in the same sentence as its protective equipment.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-police-equipment-is-for',
      'body-worn-video-as-institutional-equipment',
      'working-life-in-policing',
      'skills-that-policing-relies-on',
    ],
    sources: ['ie-garda-uniform-dress-code-policy'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 6,
    uncertainty: [
      'One service’s equipment list was researched. What documentation equipment other services issue, and how far digital devices have replaced paper, was NOT RESEARCHED.',
      'Rules on how records are made, retained, disclosed or used in proceedings were NOT RESEARCHED and are not described — that is procedural ground this wave does not enter.',
      'Nothing here describes what an officer writes, how, or in what form.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A notebook is easy to overlook on an equipment list. It is also, for most of what police do, the thing that outlasts the incident — and the reason a decision taken alone at three in the morning can be examined at all.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why documentation equipment is issued and what function it serves. It does not describe what officers record, how records are made, retained, disclosed or challenged, or anything about their use in proceedings. Those are procedural questions this platform deliberately does not expand into.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A substantial share of a police officer’s working day is writing — see [working life in policing](/law-enforcement/working-life-in-policing) — and the record is read months later by supervisors, prosecutors, defence lawyers and courts — by people who were not there. Documentation equipment is what makes that possible, which is why it is issued rather than assumed.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The accountability point is exact',
        text: 'Most operational decisions are taken without a supervisor present and reviewed afterwards through what was written. A service that issues protective equipment but not the means of recording would have equipped its officers for the incident and not for the review — and the review is where the accountability lives.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'An Garda Síochána puts it plainly in its own policy. A member going on duty carries, in the official utility belt and pouches issued, items "including extendible baton, handcuffs, incapacitant spray, anti-spit guard (where applicable), a notebook, pen, medi-pouch and general purpose safety helmet".',
        claim: 'fact',
        sources: ['ie-garda-uniform-dress-code-policy'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'One sentence, three categories, no hierarchy',
        text: 'Protection, restraint, medical and documentation appear in a single list with no suggestion that one matters more. That is the service’s own ordering, and it is a more accurate picture of the job than any ranking an outsider would produce.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Contemporaneous recording is the point',
            description:
              'A record made at the time is worth more than one reconstructed later, which is why the means of making it travels with the officer rather than waiting at the station.',
          },
          {
            term: 'The reader is always someone else',
            description:
              'Supervisors, prosecutors, defence lawyers and courts read what was written, generally without having been present. That audience is what sets the standard the record has to meet.',
          },
          {
            term: 'Digital equipment sits alongside, not simply instead',
            description:
              'Services increasingly issue devices, and body-worn video records a different kind of account. How far any service has replaced paper was not researched here.',
          },
          {
            term: 'What officers write is out of scope',
            description:
              'This page is about the equipment and its function. The content of records, their retention and their use in proceedings are procedural matters the corpus does not expand into.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'A notebook is a personal item, not equipment.',
        reality:
          'The Garda policy lists a notebook and pen among the items a member going on duty carries in the official utility belt and pouches issued.',
      },
      {
        claim: 'Paperwork is separate from the real work.',
        reality:
          'The record is the durable output of most police work and is what allows a decision taken alone to be reviewed afterwards.',
      },
      {
        claim: 'Body-worn video has replaced written records.',
        reality:
          'How far any service has replaced paper with digital equipment was not researched. The Garda policy still lists a notebook and pen among issued items.',
      },
      {
        claim: 'This page will tell you what officers write in their notebooks.',
        reality:
          'It will not. What is recorded, how, and what happens to it afterwards are procedural questions this wave deliberately does not enter.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What one published policy establishes.',
      },
      {
        kind: 'list',
        items: [
          'A notebook and pen are issued items carried on duty — An Garda Síochána.',
          'They are listed alongside protective, restraint and medical items without distinction.',
          'Not researched: documentation equipment in any other service.',
          'Not described: what is recorded, or what happens to a record afterwards.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The documentation burden officers experience as workload is the same thing the public experiences as accountability. There is no version of reviewable policing that does not involve someone writing things down, and issuing the means to do it is where that begins.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The writing itself as a professional skill is [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on). The other recording technology is [body-worn video as institutional equipment](/law-enforcement/body-worn-video-as-institutional-equipment). The working reality is [working life in policing](/law-enforcement/working-life-in-policing).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what police equipment is for](/law-enforcement/what-police-equipment-is-for), [skills that policing relies on](/law-enforcement/skills-that-policing-relies-on), and [working life in policing](/law-enforcement/working-life-in-policing).',
      },
    ],
  },
  {
    slug: 'body-worn-video-as-institutional-equipment',
    title: 'Body-worn video as institutional equipment',
    shortTitle: 'Body-worn video',
    question: 'How common are body-worn cameras, and what changed when they arrived?',
    summary:
      'In United States local police departments adoption rose from 43.1% to 61.8% between 2016 and 2020 — and reached 100% among departments serving a million or more people. The institutional question it raises is about written policy, not about hardware.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'documentation-equipment-in-policing',
      'what-police-equipment-is-for',
      'how-police-are-held-to-account',
      'equipment-standards-and-testing',
    ],
    sources: ['us-bjs-local-police-technology-2020'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-06',
    publishedOn: '2026-09-06',
    reviewedOn: '2026-09-06',
    factsVerifiedOn: '2026-09-06',
    readingTimeMinutes: 7,
    uncertainty: [
      'The adoption figures are for LOCAL POLICE DEPARTMENTS IN THE UNITED STATES, from the LEMAS survey for 2016 and 2020. They establish nothing about federal or state agencies, and nothing about any other country.',
      'What any policy actually requires — when cameras are activated, how footage is retained, who may access it — was NOT RESEARCHED and is not described.',
      'Whether body-worn video changes outcomes was NOT RESEARCHED. This page describes adoption and governance, not effects.',
      'No device, model, specification or capability is described anywhere on this page.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Body-worn video is the newest category on a police equipment list, and the only one whose main institutional question is not what it does but what rules govern it. A camera is simple; deciding when it runs, who may see the result and how long it is kept is not.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'It describes how widely the equipment was adopted and that written policy governs it. It describes no device, no capability, no specification, and no rule about activation, retention or access — those were not researched, and describing capability would be equipment intelligence rather than institutional knowledge.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Policing had a recording problem long before cameras: most decisions are taken without a supervisor present and reviewed afterwards through an account written by the person being reviewed. Body-worn video is an institutional answer to that, which is why it arrived as an accountability instrument rather than as an operational tool.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And that explains the shape of the adoption curve',
        text: 'Equipment adopted for accountability spreads fastest where scrutiny is greatest. The largest departments reached complete adoption first, which is what one would expect if the driver were public accountability rather than operational advantage.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Bureau of Justice Statistics measured adoption across local police departments in 2016 and 2020. Across all sizes, the share using body-worn cameras rose from **43.1% to 61.8%**.',
        claim: 'fact',
        sources: ['us-bjs-local-police-technology-2020'],
      },
      {
        kind: 'paragraph',
        text: 'The distribution matters more than the average. Among departments serving 1 million or more residents, use rose from 73.3% in 2016 to **100.0%** in 2020 — complete adoption in the largest departments, while the overall figure remained under two-thirds.',
        claim: 'fact',
        sources: ['us-bjs-local-police-technology-2020'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Which means "do police wear cameras" has no single answer even in one country',
        text: 'A resident of a large city and a resident of a small town were, in 2020, in materially different positions on this — and both were being policed under the same national framework. It is the same decentralisation the recruitment layer found, showing up in equipment.',
      },
      {
        kind: 'paragraph',
        text: 'The same survey treats body-worn cameras as a subject of **written policy**, alongside topics such as use-of-force reporting, vehicle pursuits and mass demonstrations — that is, as something a department is expected to have written rules about rather than merely to possess.',
        claim: 'fact',
        sources: ['us-bjs-local-police-technology-2020'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Adoption is not the same as governance',
            description:
              'Owning cameras and having a written policy on them are separate facts, and the survey asks about both. A department with equipment and no policy has bought hardware rather than adopted an accountability instrument.',
          },
          {
            term: 'The record it makes is different in kind',
            description:
              'A written account is the officer’s; a recording is not authored by anyone. That is what makes it valuable and also what makes the rules about access and retention contested.',
          },
          {
            term: 'It does not replace the written record',
            description:
              'Documentation equipment remains on issue lists. A recording captures what a camera saw, not what an officer knew, decided or was told — see [documentation equipment in policing](/law-enforcement/documentation-equipment-in-policing).',
          },
          {
            term: 'What the rules say is out of scope here',
            description:
              'Activation, retention, access and disclosure are governed by policy and in places by law. None was researched, and none is described.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'All police officers wear body cameras now.',
        reality:
          'Across United States local police departments, 61.8% used them in 2020 — up from 43.1% in 2016, but well short of universal.',
      },
      {
        claim: 'Adoption is broadly even.',
        reality:
          'Among departments serving 1 million or more residents it reached 100.0% in 2020, while the figure across all sizes stayed under two-thirds.',
      },
      {
        claim: 'These figures describe policing generally.',
        reality:
          'They describe local police departments in the United States, from the LEMAS survey. Nothing here establishes adoption in any other country or for federal and state agencies.',
      },
      {
        claim: 'Body-worn video replaces written records.',
        reality:
          'Documentation equipment remains issued, and a recording captures what a camera saw rather than what an officer knew or decided.',
      },
      {
        claim: 'Having cameras means having rules about them.',
        reality:
          'The survey treats adoption and written policy as separate questions, which is why it asks about both.',
      },
      {
        claim: 'This page will tell you what body-worn cameras can do.',
        reality:
          'It describes no device, capability or specification. Adoption and governance are institutional facts; capability description would be something else.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'United States local police departments, LEMAS, 2016 and 2020.',
      },
      {
        kind: 'list',
        items: [
          'All department sizes: 43.1% in 2016, rising to 61.8% in 2020.',
          'Departments serving 1 million or more residents: 73.3% rising to 100.0%.',
          'Body-worn cameras surveyed as a written-policy topic alongside use-of-force reporting and vehicle pursuits.',
          'Not established: adoption outside United States local departments, or in any other country.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope of these figures',
        text: 'Bureau of Justice Statistics, Local Police Departments, Procedures, Policies, and Technology, 2020 — Statistical Tables, November 2023. Local police departments in the United States only.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Body-worn video is unusual among equipment in that its principal beneficiaries are not only the officers carrying it. It produces evidence about how public authority was exercised, which is why the questions that matter about it are governance questions — and why adoption without written policy is the least useful version of it.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The older recording instrument is [documentation equipment in policing](/law-enforcement/documentation-equipment-in-policing). What accountability machinery does with a record is [how are police held to account](/law-enforcement/how-police-are-held-to-account).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [documentation equipment in policing](/law-enforcement/documentation-equipment-in-policing), [what police equipment is for](/law-enforcement/what-police-equipment-is-for), and [how are police held to account](/law-enforcement/how-police-are-held-to-account).',
      },
    ],
  },
  /*
   * ==========================================================================
   * WAVE 27 — police units, vehicles and organisational structure.
   * ==========================================================================
   *
   * THE BOUNDARY WITH WAVE 24 IS THE FIRST THING TO GET RIGHT. Wave 24 already owns "what
   * specialisations exist" at /law-enforcement/specialist-roles-in-policing, and owns it
   * comprehensively — investigation, community policing, traffic, public order, cybercrime,
   * intelligence, forensic support, specialist units, training, public information. This wave does
   * NOT re-cut that question. It takes the institutional angle Wave 24 explicitly left alone: what
   * a unit IS as an organisational form, where it sits, how far it reaches, and what a vehicle is
   * for.
   *
   * THE SAFETY BOUNDARY IS WAVE 26'S, UNCHANGED. What exists, why, and how it is organised —
   * never what any unit or vehicle can do, how it is equipped, deployed, or used. The Dutch source
   * describes pursuit and interception uses of one vehicle category; that material is deliberately
   * unused. Naming a unit is institutional description; describing its capability would be
   * exactly the "surveillance capability database" the programme forbids.
   *
   * THE FINDING. A unit's geography is a separate question from its existence. One service has 21
   * dog sections nationwide, two maritime units, one dive squad based in a single city that
   * "responds to requests for assistance from all over New Zealand", and an air support unit that
   * usually works one metropolitan area but may be deployed nationally. "Does the police have a
   * dive squad" and "is there one near you" are different questions with different answers.
   */
  {
    slug: 'what-a-police-unit-is',
    title: 'What a police unit is',
    shortTitle: 'What a unit is',
    question: 'What does it actually mean for a police service to have a "unit"?',
    summary:
      'A unit is an organisational form, not a job title. It has a place in a structure, a commander, and — the part most easily missed — a defined reach that may be far smaller or far larger than the service itself.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-specialist-units-cover-a-country',
      'specialist-roles-in-policing',
      'rank-role-and-specialisation',
      'police-command-and-coordination',
    ],
    sources: ['nz-police-structure', 'nz-police-teams-units'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-07',
    publishedOn: '2026-09-07',
    reviewedOn: '2026-09-07',
    factsVerifiedOn: '2026-09-07',
    readingTimeMinutes: 7,
    uncertainty: [
      'One service’s structure was researched — New Zealand Police. How any other service organises units was NOT RESEARCHED, and structures differ substantially.',
      'What any named unit does, how it is equipped, trained or deployed was NOT RESEARCHED and is not described. That is a deliberate limit.',
      'How units are created, funded or disbanded, and who decides, was NOT ESTABLISHED for any service.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The corpus already separates rank, role, specialisation and assignment as four different things — see [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation). A **unit** is a fifth: an organisational body with a place in a structure, distinct from the work its members do and from the ranks they hold. Two officers doing identical work can sit in different units, and one unit can contain several ranks and more than one kind of specialist.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what a unit is as an organisational form, using one service’s published structure. It does not describe what any unit does operationally, how it is equipped, or how it is deployed — and it does not re-cut the question of what specialisations exist, which is [specialist roles in policing](/law-enforcement/specialist-roles-in-policing).',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A service of any size cannot be a single undifferentiated body: someone has to be accountable for a defined set of work, and that accountability needs an organisational container. A unit is that container, which is why it has a commander and a place in a structure rather than merely a name.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And the container is not the same as the expertise it holds',
        text: 'Expertise can exist without a unit — a service can have officers trained in something who sit in ordinary teams. Creating a unit is a decision to make that expertise permanent, located and commanded. That is an organisational choice with costs, which is why not every specialism becomes one.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'New Zealand Police publishes its structure: the service "is divided into 12 districts, 9 in the North Island and 3 in the South", with the Commissioner of Police as chief executive.',
        claim: 'fact',
        sources: ['nz-police-structure'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Districts are the default container; units are what does not fit in one',
        text: 'A geographic division works for the work that happens everywhere. Everything else — the capability needed occasionally, in one place at a time, by people who must stay practised — needs a different arrangement, and that is where named units appear.',
      },
      {
        kind: 'paragraph',
        text: 'The same service publishes a list of teams and units alongside the districts, including a Dive Squad, Police Dog Section, Police Negotiation Teams, Armed Offenders Squads, Forensics, a Financial Crime Group, Communications Centres, Search and Rescue, a Dignitary Protection Service, the Royal New Zealand Police College and a Police Prosecution Service.',
        claim: 'fact',
        sources: ['nz-police-teams-units'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Read that list for what it is: a range of organisational kinds',
        text: 'It contains an operational squad, a training college, a prosecution service and a call-handling centre. "Unit" is a structural word covering all of them, which is why it tells you where something sits and not what it does.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A unit has a place, not just a purpose',
            description:
              'It sits inside a district, or alongside districts at national level, or across several. Where it sits determines who commands it and who can call on it.',
          },
          {
            term: 'A unit is not a specialisation',
            description:
              'A specialisation is a field of expertise a person has. A unit is a body an organisation maintains. A service can have the first without the second — and often does, for capabilities used rarely.',
          },
          {
            term: 'A unit is not a rank ladder',
            description:
              'Units contain several ranks, and a rank exists independently of any unit. The corpus draws this distinction for individuals at [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation); it holds for organisational bodies too.',
          },
          {
            term: 'Some units are not operational at all',
            description:
              'The same published list contains a police college and a prosecution service. Treating "unit" as a synonym for an operational team misreads most of the list.',
          },
          {
            term: 'And a unit has a reach',
            description:
              'The least obvious property, and the most consequential: how much of the country a unit actually serves. See [how specialist units cover a country](/law-enforcement/how-specialist-units-cover-a-country).',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'A police unit is a team of specialists who do one operational job.',
        reality:
          'The published list for one service includes a police college, a prosecution service and communications centres alongside operational squads. "Unit" is an organisational word, not an operational one.',
      },
      {
        claim: 'Every specialisation has a unit.',
        reality:
          'Expertise can exist without a permanent body holding it. Creating a unit makes a capability permanent, located and commanded, which is an organisational decision with costs.',
      },
      {
        claim: 'A unit is a rank or a job title.',
        reality:
          'Units contain several ranks, and ranks exist independently of units. It is the same distinction the corpus draws between rank, role, specialisation and assignment, applied to organisational bodies.',
      },
      {
        claim: 'Police services are organised the same way.',
        reality:
          'One service’s structure was researched. Nothing here establishes how any other service divides itself, and structures differ substantially.',
      },
      {
        claim: 'A page about units will tell you what each unit can do.',
        reality:
          'It will not. What any unit does operationally, how it is equipped and how it is deployed were not researched and are not described.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What one published structure shows.',
      },
      {
        kind: 'list',
        items: [
          '12 districts, 9 in the North Island and 3 in the South — New Zealand Police.',
          'Named teams and units published alongside the districts.',
          'Those units include operational squads, a college, a prosecution service and call-handling centres.',
          'Not researched: how any other service is organised, and what any unit does.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Structure is an accountability question because it determines who answers for what. A capability held inside a named unit with a commander can be asked about; the same capability spread informally across a service is harder to examine, even where it is used identically. Publishing the structure is what makes the first possible.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What specialist work consists of, as a career, is [specialist roles in policing](/law-enforcement/specialist-roles-in-policing). The individual-level distinction is [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation). How services coordinate across boundaries is [command and coordination between police agencies](/law-enforcement/police-command-and-coordination).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how specialist units cover a country](/law-enforcement/how-specialist-units-cover-a-country), [specialist roles in policing](/law-enforcement/specialist-roles-in-policing), and [rank, role and specialisation](/law-enforcement/rank-role-and-specialisation).',
      },
    ],
  },
  {
    slug: 'how-specialist-units-cover-a-country',
    title: 'How specialist units cover a country',
    shortTitle: 'Unit reach',
    question: 'If a police service has a specialist unit, is there one near you?',
    summary:
      'Not necessarily, and one service’s published list shows four different answers at once: a capability in 21 places, one in two places, one in a single city that serves the whole country on request, and one that usually works a single metropolitan area but can go anywhere.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-a-police-unit-is',
      'police-command-and-coordination',
      'specialist-roles-in-policing',
      'how-policing-is-divided-between-levels',
    ],
    sources: ['nz-police-teams-units', 'nz-police-structure'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-07',
    publishedOn: '2026-09-07',
    reviewedOn: '2026-09-07',
    factsVerifiedOn: '2026-09-07',
    readingTimeMinutes: 7,
    uncertainty: [
      'One service was researched — New Zealand Police. Whether other services distribute specialist capability the same way was NOT RESEARCHED.',
      'Response times, availability, staffing levels and how a request for assistance is actually handled were NOT RESEARCHED and are not described.',
      'Nothing here describes what any unit does, how it is equipped, or what it is capable of.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Whether a police service "has" a specialist capability and whether that capability is available where you are turn out to be different questions. The gap between them is a matter of organisational design, and one service publishes enough to see the design.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes how specialist units are distributed geographically in one service. It says nothing about what any unit does, how quickly anything happens, or what any capability amounts to — and it is not a guide to what is available anywhere.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Specialist capability is expensive and perishable. It needs people who stay practised, which means enough work to stay practised on — and outside dense areas there is often not enough. That constraint, rather than any view about how important the work is, is what shapes where units sit.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'So the real design question is not whether to have it',
        text: 'It is how thinly it can be spread before it stops working. A capability in every district is available immediately and practised rarely; one in a single place is practised constantly and has to travel. Both are defensible, and a service usually runs several of the arrangements at once.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'New Zealand Police publishes its teams and units, and the reach statements differ from one to the next. The Police Dog Section has **21 sections nationwide**. Maritime Units are located in **Auckland and Wellington**.',
        claim: 'fact',
        sources: ['nz-police-teams-units'],
      },
      {
        kind: 'paragraph',
        text: 'The Dive Squad is described as "based in Wellington, but responds to requests for assistance from all over New Zealand". The air support unit "usually operates throughout the metropolitan Auckland area" and "may also be deployed nationally".',
        claim: 'fact',
        sources: ['nz-police-teams-units'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Four arrangements, one service, published side by side',
        text: 'Distributed across the country; present in two cities; single-sited and nationally available on request; and normally local with a national option. A reader who assumed "the police have a dive squad" meant one near them would be wrong in the way the published wording is careful to avoid.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Distributed',
            description:
              'The capability exists in many places at once. Available locally, and each location handles a smaller share of the total work.',
          },
          {
            term: 'Concentrated in a few places',
            description:
              'Present where demand is greatest. Elsewhere it is a journey away, and the two locations carry the national workload between them.',
          },
          {
            term: 'Single-sited, nationally available',
            description:
              'One team, serving everywhere by request. The most practised arrangement and the least immediate — the published wording for the Dive Squad is exactly this.',
          },
          {
            term: 'Locally based with a national option',
            description:
              'Normally works one area, deployable further when needed. This is the arrangement the air support description states.',
          },
          {
            term: 'And the district structure sits underneath all of them',
            description:
              'Twelve districts do the work that happens everywhere. Specialist units are the exceptions layered over that, which is why their geography has to be stated separately.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What "responds to requests for assistance" implies organisationally',
        text: 'That a district cannot simply direct the unit: it asks, and someone decides. That is a coordination relationship rather than a command one, and it is the same structural problem the corpus describes between separate agencies — see [command and coordination between police agencies](/law-enforcement/police-command-and-coordination).',
      },
    ],
    misconceptions: [
      {
        claim: 'If a police service has a specialist unit, it is available everywhere.',
        reality:
          'In one published structure, Maritime Units are located in Auckland and Wellington, and the Dive Squad is based in Wellington and responds to requests from all over the country.',
      },
      {
        claim: 'Specialist units are spread evenly across a country.',
        reality:
          'The same service publishes a dog section with 21 locations nationwide alongside a single-sited dive squad. Distribution is decided capability by capability.',
      },
      {
        claim: 'A national unit is commanded by whoever needs it.',
        reality:
          'The published wording is that the Dive Squad "responds to requests for assistance" — a coordination relationship rather than a command one.',
      },
      {
        claim: 'Where a unit sits reflects how important the work is.',
        reality:
          'It largely reflects where there is enough work to keep a team practised. That is a capability-maintenance constraint, not a judgement about importance.',
      },
      {
        claim: 'This page tells you what is available in a given place.',
        reality:
          'It does not. Availability, response times and staffing were not researched, and one service’s arrangements establish nothing about any other.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Reach, as one service publishes it.',
      },
      {
        kind: 'list',
        items: [
          '21 sections nationwide — Police Dog Section.',
          'Two locations, Auckland and Wellington — Maritime Units.',
          'Based in Wellington, responding to requests from all over New Zealand — Dive Squad.',
          'Usually metropolitan Auckland, deployable nationally — air support.',
          'Twelve districts underneath all of it, 9 in the North Island and 3 in the South.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope',
        text: 'New Zealand Police, from its own published pages. Nothing here describes how any other service distributes specialist capability, and nothing describes what any of these units does.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Uneven distribution of specialist capability is a real question about equal service, and it is one a published structure lets the public ask. It is also a question with an honest answer that is rarely about neglect: keeping a rarely used capability practised in a thinly populated area is genuinely hard, and saying so openly is better than implying uniform coverage that does not exist.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'What a unit is as an organisational form is [what a police unit is](/law-enforcement/what-a-police-unit-is). How services coordinate when one needs another is [command and coordination between police agencies](/law-enforcement/police-command-and-coordination). How policing is split between levels of government is [how policing is divided between levels](/law-enforcement/how-policing-is-divided-between-levels).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a police unit is](/law-enforcement/what-a-police-unit-is), [command and coordination between police agencies](/law-enforcement/police-command-and-coordination), and [specialist roles in policing](/law-enforcement/specialist-roles-in-policing).',
      },
    ],
  },
  {
    slug: 'police-vehicles-and-what-they-are-for',
    title: 'Police vehicles and what they are for',
    shortTitle: 'Police vehicles',
    question: 'Why do police services run several kinds of vehicle?',
    summary:
      'Because the tasks differ. One service publishes its categories: ordinary cars and vans for patrol and calls, motorcycles for roads outside built-up areas, a helicopter supporting regional units — and vehicles used only for training.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'marked-vehicles-and-police-identification',
      'what-police-equipment-is-for',
      'what-a-police-unit-is',
      'issued-equipment-and-personal-equipment',
    ],
    sources: ['nl-politie-voertuigen'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-07',
    publishedOn: '2026-09-07',
    reviewedOn: '2026-09-07',
    factsVerifiedOn: '2026-09-07',
    readingTimeMinutes: 6,
    uncertainty: [
      'One service’s published vehicle categories were researched — the Dutch national police. No other service’s fleet was researched.',
      'NO vehicle specification, performance figure, model or capability appears on this page. The source describes operational uses of one vehicle category including pursuit and interception; that material is deliberately unused.',
      'How fleets are procured, funded, maintained or replaced was NOT RESEARCHED for any service.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A police vehicle is equipment, in exactly the sense the equipment layer already uses: something a service provides so that officers can do the job it has given them. What makes vehicles worth their own page is that the categories are visible from the street, and each one answers a different problem.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'It names categories of vehicle and what each is generally for. It gives no specification, no performance figure, no model and no capability — and where the source describes operational uses such as pursuit or interception, that material is not reproduced. Naming a category is institutional description; describing what a vehicle can do is not something this platform publishes.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A single vehicle type would have to be good at incompatible things: carrying people and equipment, moving on motorways, working in narrow streets, and being seen. Services solve that by running categories, and the categories are a readable statement of what the service expects to be doing.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Dutch national police describe the car and the van as the ordinary vehicles — used for patrol, for responding to 112 calls, and for traffic checks. These are the vehicles most people see.',
        claim: 'fact',
        sources: ['nl-politie-voertuigen'],
      },
      {
        kind: 'paragraph',
        text: 'Motorcycles are described as used mainly on motorways and on roads outside built-up areas, for patrol, dealing with traffic collisions and traffic checks. The helicopter is described as providing air support to the regional police units.',
        claim: 'fact',
        sources: ['nl-politie-voertuigen'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Air support belongs to the reach question, not the vehicle question',
        text: 'A helicopter supporting *regional* units is the same organisational pattern as a single-sited specialist unit serving a whole country: a capability held centrally and made available outward. Where it is based matters more than what it is — see [how specialist units cover a country](/law-enforcement/how-specialist-units-cover-a-country).',
      },
      {
        kind: 'paragraph',
        text: 'And there is a category that exists to be distinguishable from the others. Training vehicles are identifiable by what the service calls secondary striping — blue and white — and the inscription "trainingsvoertuig".',
        claim: 'fact',
        sources: ['nl-politie-voertuigen'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'That is an identification decision, not a fleet decision',
        text: 'A training vehicle marked so that nobody mistakes it for an operational one is the vehicle equivalent of the identification problem the uniform solves. The service went to the trouble of a distinct marking and a written word on the side, which tells you how seriously the recognisability question is taken — see [marked vehicles and police identification](/law-enforcement/marked-vehicles-and-police-identification).',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The ordinary vehicles are the ones that matter most',
            description:
              'Cars and vans do patrol, emergency response and traffic checks. They are the least remarkable category and the one nearly all public contact happens through.',
          },
          {
            term: 'Some categories exist because of the road, not the incident',
            description:
              'Motorcycles are described for motorways and roads outside built-up areas. The vehicle follows the environment.',
          },
          {
            term: 'Air support is a shared resource',
            description:
              'Described as supporting the regional units rather than belonging to one, which makes it an organisational arrangement as much as a vehicle.',
          },
          {
            term: 'And one category exists to be told apart',
            description:
              'Training vehicles carry different striping and a written label so that they are not mistaken for operational vehicles.',
          },
        ],
      },
    ],
    misconceptions: [
      {
        claim: 'Police vehicles are mostly fast pursuit cars.',
        reality:
          'The published categories put the ordinary car and van first, used for patrol, responding to emergency calls and traffic checks — the vehicles nearly all public contact happens through.',
      },
      {
        claim: 'A helicopter belongs to whichever unit needs it.',
        reality:
          'It is described as providing air support to the regional units, which makes it a shared central resource rather than a local one.',
      },
      {
        claim: 'Every marked vehicle is an operational police vehicle.',
        reality:
          'Training vehicles carry distinct secondary striping and the inscription "trainingsvoertuig" specifically so they are not mistaken for operational ones.',
      },
      {
        claim: 'Police fleets are broadly the same everywhere.',
        reality:
          'One service’s categories were researched. Nothing here establishes what any other service runs.',
      },
      {
        claim: 'This page will tell you what police vehicles can do.',
        reality:
          'It gives no specification, performance figure, model or capability, and the operational uses the source describes for one category are deliberately not reproduced.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Categories as one service publishes them.',
      },
      {
        kind: 'list',
        items: [
          'Car and van — patrol, 112 calls, traffic checks.',
          'Motorcycle — mainly motorways and roads outside built-up areas.',
          'Helicopter — air support to the regional units.',
          'Training vehicle — secondary blue-and-white striping and the inscription "trainingsvoertuig".',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope',
        text: 'The Dutch national police, from its own published page. No specification, capability or model is described for any category, and no other service’s fleet was researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A fleet is a public asset bought with public money, and its composition is a readable statement of priorities: what a service expects to be doing, where, and how visibly. Publishing the categories openly, as this service does, makes that statement checkable rather than inferred.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'Markings and recognisability are [marked vehicles and police identification](/law-enforcement/marked-vehicles-and-police-identification). Vehicles as one category among many is [what police equipment is for](/law-enforcement/what-police-equipment-is-for). Centrally held capability is [how specialist units cover a country](/law-enforcement/how-specialist-units-cover-a-country).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [marked vehicles and police identification](/law-enforcement/marked-vehicles-and-police-identification), [what police equipment is for](/law-enforcement/what-police-equipment-is-for), and [what a police unit is](/law-enforcement/what-a-police-unit-is).',
      },
    ],
  },
  {
    slug: 'marked-vehicles-and-police-identification',
    title: 'Marked vehicles and police identification',
    shortTitle: 'Vehicle markings',
    question: 'Why are police markings legally protected?',
    summary:
      'Because a marked vehicle does the same job as a uniform. In the Netherlands the same legal protection covers the uniform, the logo and the striping on police vehicles — and the stated reason is that people must be able to trust it really is the police.',
    entityType: 'concept',
    section: 'law-enforcement',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-police-officers-are-identified',
      'why-police-wear-a-uniform',
      'police-vehicles-and-what-they-are-for',
      'why-police-accountability-matters',
    ],
    sources: ['nl-politie-huisstijl-protection', 'nl-politie-voertuigen'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-09-07',
    publishedOn: '2026-09-07',
    reviewedOn: '2026-09-07',
    factsVerifiedOn: '2026-09-07',
    readingTimeMinutes: 6,
    uncertainty: [
      'The legal protection described is the Netherlands’. Whether comparable protection exists elsewhere, and in what form, was NOT RESEARCHED.',
      'Nothing here describes what any marking looks like, beyond what the service itself publishes about categories. Detail that would assist imitation is deliberately absent.',
      'What a person should do if they doubt a vehicle is genuine is a matter for the police service concerned and was NOT RESEARCHED.',
      'Unmarked vehicles, and the rules governing their use, were NOT RESEARCHED for any service.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A marked police vehicle is identification equipment. It answers the same question a uniform answers — is this really the police — for a person who can see a vehicle before they can see anyone in it, and often from further away.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page describes, and what it deliberately does not',
        text: 'It describes that markings are protected and why. It does **not** describe what any marking looks like in detail, how to check one, or anything else that would assist someone attempting to imitate a police vehicle. As with the identity-card page, that omission is the point rather than a gap.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The equipment layer established that recognisability is an accountability function as much as a convenience: it lets a person find help, and it lets them say afterwards who dealt with them. A vehicle extends that to a distance and a speed at which nothing else works.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And it is the point at which imitation becomes worth preventing legally',
        text: 'Anything that reliably signals police authority is worth counterfeiting to someone who wants that authority without holding it. That is a reason to protect the signal by law rather than to rely on the difficulty of copying it.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The Dutch national police state the reason first: "De politie heeft bijzondere taken en bevoegdheden, dus moet u er op kunnen vertrouwen dat het echt om de politie gaat" — the police have special tasks and powers, so you must be able to trust that it really is the police.',
        claim: 'fact',
        sources: ['nl-politie-huisstijl-protection'],
      },
      {
        kind: 'paragraph',
        text: 'And then the extent: "De rechten op het uniform van de politie, zowel het operationele uniform als representatieve uniform (tenue met het witte overhemd), zijn wettelijk beschermd. Dit geldt ook voor het politielogo en de striping op de politie voertuigen." The rights to the uniform — both the operational and the representative uniform — are legally protected, and this applies equally to the police logo and to the striping on police vehicles.',
        claim: 'fact',
        sources: ['nl-politie-huisstijl-protection'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'One rule, covering a garment and a vehicle',
        text: 'That is the finding. The service does not treat the uniform as identification and the vehicle as branding — both are protected by the same provision, for the same stated reason. A marked vehicle is a uniform the size of a car.',
      },
      {
        kind: 'paragraph',
        text: 'The same logic reaches inside the fleet. Training vehicles carry secondary blue-and-white striping and the inscription "trainingsvoertuig", so that a vehicle which is genuinely the police but is not operational is still distinguishable from one that is.',
        claim: 'fact',
        sources: ['nl-politie-voertuigen'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The signal has to be exclusive to work',
            description:
              'An identifier anyone may use identifies nothing. Legal protection is what makes the marking mean something, which is why the protection and the function are the same subject.',
          },
          {
            term: 'It covers the whole house style, not one item',
            description:
              'The uniform in both its forms, the logo and the vehicle striping are named together. Protecting only some of them would leave the others available to imitate.',
          },
          {
            term: 'Distance is what vehicles add',
            description:
              'A uniform works at conversational range. A marked vehicle works at the range at which someone decides whether to stop, approach or wait — which is usually earlier and matters more.',
          },
          {
            term: 'And unmarked vehicles are outside this page',
            description:
              'Their existence follows from the same logic in reverse, and their governance was NOT RESEARCHED. Nothing here describes them.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The same asymmetry as officers in plain clothes',
        text: 'A uniformed officer is already identified and produces a card on request; an officer in plain clothes must produce it unprompted. A marked vehicle already identifies itself; anything unmarked cannot, and systems handle that gap in their own way. See [how police officers are identified](/law-enforcement/how-police-officers-are-identified).',
      },
    ],
    misconceptions: [
      {
        claim: 'Police markings are branding.',
        reality:
          'In the Netherlands the logo and vehicle striping are legally protected under the same rule as the uniform, and the stated reason is that people must be able to trust it really is the police.',
      },
      {
        claim: 'Only the uniform is protected.',
        reality:
          'The published wording names the operational uniform, the representative uniform, the police logo and the striping on police vehicles together.',
      },
      {
        claim: 'A vehicle in police markings is always an operational police vehicle.',
        reality:
          'Training vehicles carry different striping and the inscription "trainingsvoertuig" precisely so that they are distinguishable.',
      },
      {
        claim: 'Markings are protected everywhere in the same way.',
        reality:
          'The protection described is the Netherlands’. Whether comparable protection exists elsewhere was not researched.',
      },
      {
        claim: 'This page will help you check whether a vehicle is genuine.',
        reality:
          'It will not, and does not try. It describes that markings are protected and why, without describing what any marking looks like or how to verify one.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What the Dutch rule covers, as published.',
      },
      {
        kind: 'list',
        items: [
          'The operational uniform.',
          'The representative uniform.',
          'The police logo.',
          'The striping on police vehicles.',
          'And, inside the fleet, a distinct marking for training vehicles.',
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'Scope',
        text: 'The Netherlands. Nothing here establishes the position in any other country, and nothing describes any marking in detail.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Protecting the markings protects the public rather than the institution. The value of an identifier lies entirely in its being reliable, and a person deciding whether to comply with what appears to be a police vehicle is relying on exactly that reliability — usually with no time and no other means of checking.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where this connects',
        text: 'The person-level version is [how police officers are identified](/law-enforcement/how-police-officers-are-identified) and [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform). The vehicle categories themselves are [police vehicles and what they are for](/law-enforcement/police-vehicles-and-what-they-are-for).',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how police officers are identified](/law-enforcement/how-police-officers-are-identified), [why police wear a uniform](/law-enforcement/why-police-wear-a-uniform), and [police vehicles and what they are for](/law-enforcement/police-vehicles-and-what-they-are-for).',
      },
    ],
  },
];
