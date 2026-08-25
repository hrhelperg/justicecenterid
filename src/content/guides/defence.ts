import type { Guide } from '../types';

/**
 * Wave 11 — the defence cluster.
 *
 * These guides own DEFENCE AS AN INSTITUTIONAL FUNCTION. Wave 10 owns prosecution, Wave 9 the
 * court, Wave 8 the investigation, and `/glossary/disclosure` and
 * `/justice/what-is-the-presumption-of-innocence` own those terms.
 *
 * THREE STANDING RULES, all enforced by tests.
 *
 * "Right to counsel" names three separate rights — to consult, to have one appointed, and to
 * have the state pay. No page may collapse them, and none may say anyone has a universal right
 * to a free lawyer.
 *
 * Publicly funded is not publicly employed. Germany appoints a private Rechtsanwalt and France
 * pays a private avocat; only Brazil employs its defenders, through a constitutional career
 * service. Court appointment, state funding and state employment are three separate facts.
 *
 * Nothing here is tactical. Every page describes what a right IS and what bounds it, never how
 * to use one to frustrate a lawful process.
 */
export const DEFENCE_GUIDES: readonly Guide[] = [
  {
    slug: 'why-the-right-to-defence-matters',
    title: 'Why the right to defence matters',
    shortTitle: 'Why the right to defence matters',
    question: 'Why does a person accused of a crime get to answer the case at all?',
    summary:
      'Because a system that can accuse but cannot be answered turns an accusation into a punishment. Defence rights are not a concession to the accused; they are among the conditions that let a conviction mean something.',
    entityType: 'concept',
    section: 'defence',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'right-to-counsel',
      'defence-counsel-and-prosecutor',
      'prosecution-and-presumption-of-innocence',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-137-verteidiger',
      'de-stpo-147-akteneinsicht',
      'br-cf-1988',
      'fr-service-public-aide-juridictionnelle',
      'udhr',
      'iccpr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['due-process', 'presumption-of-innocence'],
    uncertainty: [
      'This page explains why the right exists and what it is for. It establishes nothing about whether any system provides it adequately, and compares no country against another.',
      'Only Germany, Brazil and France were reached from primary sources for this wave. Where a country is named, the statement is limited to what its own source establishes.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A criminal accusation is made by the state, with the state’s investigators, powers and resources behind it, against a person who at that point has been found to have done nothing. The right to defence is the answer to a question that follows immediately from that description: what is the accused person able to do about it?',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The right is not immunity',
        text: 'It does not mean freedom from prosecution, an entitlement to acquittal, or permission to obstruct a lawful process. It means that coercive public power operates through procedures, and that the person on the receiving end has a genuine opportunity to answer. A system with strong defence rights still investigates, prosecutes, tries, convicts and punishes when the legal standards are met.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why defence rights exist as part of a justice system. It is not legal advice, it does not tell anyone facing a case what to do, and it contains nothing about answering questions, handling evidence, or dealing with witnesses.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The usual framing sets defence against public safety, as though every right granted to the accused were something taken from everyone else. That framing does not survive contact with what the rights actually do.',
        claim: 'analysis',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A conviction has to be worth something',
            description:
              'A verdict reached without the case being tested tells you what one side asserted, not what happened. Every mechanism that lets an accusation be answered — seeing the material, putting a contrary account, being represented by someone who knows the law — is a mechanism that makes the eventual finding reliable enough to act on.',
          },
          {
            term: 'The accusation is not the finding',
            description:
              'The state charges on an assessment made by one side, before anything has been determined. If that assessment were also the conclusion, the process that follows would have nothing left to do. The [presumption of innocence](/prosecution/prosecution-and-presumption-of-innocence) places the obligation to prove on the prosecuting side, and defence rights are what make that allocation operative rather than declaratory.',
          },
          {
            term: 'Rights have to be usable',
            description:
              'A person entitled to challenge evidence who cannot read the file, or entitled to make legal arguments without knowing the law, holds a right in name. Representation and access are what convert an entitlement into something a person can actually exercise.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Both halves are the design',
        text: 'A society that cannot prosecute crime fails the people it did not protect. A society whose prosecutions cannot be answered produces findings no one has reason to credit. The same systems that prosecute vigorously provide for the defence, and they do so for the same reason — not as a balance between competing goods, but because neither half works without the other.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'What the right amounts to in practice is a set of specific, written entitlements. Germany’s code is the clearest illustration in this corpus of how concrete they are, and of how they come with their limits attached.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Assistance, at any stage',
            description:
              'Section 137(1) of the German Code of Criminal Procedure provides that the accused "kann sich in jeder Lage des Verfahrens des Beistandes eines Verteidigers bedienen" — may avail himself of the assistance of defence counsel at any stage of the proceedings. Not only at trial, and not only once charged.',
          },
          {
            term: 'Sight of the material',
            description:
              'Section 147(1) entitles defence counsel to inspect the files before the court, or that would be submitted on indictment, and to view officially held items of evidence. Section 147(2) permits refusal before the investigation is concluded where access may endanger its purpose — and requires that where the accused is in remand detention, the information essential to assessing the lawfulness of the detention be made accessible anyway.',
          },
          {
            term: 'An institution, in some systems',
            description:
              'Brazil goes further than a procedural entitlement. Article 134 of the Constitution makes the Defensoria Pública a permanent institution essential to the jurisdictional function of the State, described as an expression and instrument of the democratic regime. The defence function is not only protected there; it is constitutionally constituted.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'International instruments state the principle without settling how any state implements it. The Universal Declaration of Human Rights states the declared principle of a fair and public hearing by an independent and impartial tribunal, and of the presumption of innocence until guilt is proved according to law in a trial at which the accused has had the guarantees necessary for their defence. The International Covenant on Civil and Political Rights carries fair-trial guarantees including adequate time and facilities to prepare a defence. Both bind only states party to them, and neither establishes what any particular country provides.',
        claim: 'fact',
        sources: ['udhr', 'iccpr'],
      },
    ],
    misconceptions: [
      {
        claim: 'Defence rights help guilty people escape justice.',
        reality:
          'They apply before anyone knows who is guilty, which is the entire point. A system that granted them only to the innocent would need to have already decided the question the process exists to answer.',
      },
      {
        claim: 'The right to defence means a right to be acquitted.',
        reality:
          'It means the case must be put and answered through lawful procedures. Systems with strong defence rights convict people every day, on evidence that has been tested.',
      },
      {
        claim: 'Defence rights and public safety are in tension.',
        reality:
          'Both depend on findings that can be relied on. A conviction reached without the case being answered is a weaker basis for punishing someone, not a stronger one.',
      },
      {
        claim: 'These rights only exist in adversarial systems.',
        reality:
          'Germany does not run an adversarial trial in the common-law sense, and its code grants counsel at any stage, file access with defined limits, and mandatory defence in enumerated situations. The rights are not a feature of one procedural tradition.',
      },
      {
        claim: 'Defending someone means asserting they did not do it.',
        reality:
          'Defence counsel protects a person’s legal interests, which includes ensuring the case is proved to the required standard, that procedures were followed, and that consequences are lawful. That work is the same whatever the eventual finding.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Where systems differ most is not whether the right exists but how far it is institutionalised — whether it is a procedural entitlement, a funded scheme, or a standing institution.',
      },
      {
        kind: 'list',
        items: [
          'A procedural entitlement with a statutory appointment scheme — Germany, where sections 137, 140 and 141 grant assistance, define when defence is mandatory, and govern appointment.',
          'A funded scheme paying private practitioners — France, where aide juridictionnelle covers all or part of an avocat’s fees on conditions including resource ceilings.',
          'A constitutional institution — Brazil, where the Defensoria Pública has its own article of the Constitution and a remit reaching beyond criminal defence.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Those are different depths of commitment, not different degrees of the same one, and [how defence is funded and provided](/defence/how-defence-is-funded) sets the comparison out in full.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The clearest institutional statement of what defence is for comes from the systems that placed it beside the prosecution rather than beneath it. Brazil describes the Defensoria Pública and the Ministério Público in the same constitutional terms — each a permanent institution essential to the jurisdictional function of the State. Two institutions with opposite roles in a case, given the same standing, because the process needs both.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What this does not license',
        text: 'None of the above suggests that a person may obstruct an investigation, conceal evidence, or interfere with a proceeding. Those are unlawful in the systems described here and are not defence rights. The right is to answer the case through the procedures the law provides.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [the right to counsel](/defence/right-to-counsel), [defence counsel and prosecutor](/defence/defence-counsel-and-prosecutor), and [prosecution and the presumption of innocence](/prosecution/prosecution-and-presumption-of-innocence).',
      },
    ],
  },
  {
    slug: 'right-to-counsel',
    title: 'The right to counsel',
    shortTitle: 'Right to counsel',
    question: 'Does everyone accused of a crime get a lawyer, and does the state pay?',
    summary:
      'Three different rights hide inside that question — to consult a lawyer, to have one appointed, and to have the state pay. Systems grant them separately, on different conditions, and no system in this corpus grants all three to everyone.',
    entityType: 'concept',
    section: 'defence',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-the-right-to-defence-matters',
      'how-defence-is-funded',
      'what-defence-counsel-does',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-137-verteidiger',
      'de-stpo-140-notwendige-verteidigung',
      'de-stpo-141-pflichtverteidiger',
      'br-cf-1988',
      'fr-service-public-aide-juridictionnelle',
      'iccpr',
      'udhr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['due-process'],
    uncertainty: [
      'Only Germany, Brazil and France were reached from primary sources. Where a country is named the statement is limited to what its own source establishes, and the underlying procedural right to counsel in France and Brazil was not researched.',
      'This page describes what systems provide. It does not state what anyone is entitled to in any particular situation, and it is not a guide to obtaining representation.',
      'The European Convention on Human Rights could not be read from an authoritative source for this wave, so no Convention provision is quoted or relied on.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The phrase "right to counsel" is used for at least three things that are granted separately and on different conditions. Keeping them apart is the difference between describing a system and asserting something about it that is not true.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The right to consult a lawyer',
            description:
              'That a person may speak to a lawyer at all, and from what point in the process. This is the broadest of the three and the one most often granted without conditions.',
          },
          {
            term: 'The right to have counsel appointed',
            description:
              'That where a person has no lawyer, one is assigned. What triggers this differs sharply — in some systems the seriousness of the case, in others the person’s means.',
          },
          {
            term: 'The right to have the state pay',
            description:
              'That the cost falls on public funds rather than on the accused. This is the narrowest and the most heavily conditioned, and it is frequently partial rather than total.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'No system here grants all three to everyone',
        text: 'Germany grants assistance at any stage to any accused person, and appointment only in enumerated situations. France pays all or part of an avocat’s fees where resources fall below ceilings. Brazil provides state assistance to those who prove insufficiency of resources. A sentence saying everyone has the right to a free lawyer is wrong about all three, in three different ways.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how systems distinguish between these rights. It is not legal advice, it does not describe anyone’s entitlement in any situation, and it is not a guide to applying for representation.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The three rights answer different problems. Consultation answers the problem of a person facing a legal process they do not understand. Appointment answers the problem of a person with no practical means of obtaining one, or who is detained and cannot. Payment answers the problem of a person who cannot afford one.',
      },
      {
        kind: 'paragraph',
        text: 'A system can solve any of those without solving the others, and most solve them at different points and to different extents. That is why the conditions attach where they do rather than uniformly.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany separates the first two rights cleanly, and the separation is visible in the code. Section 137(1) grants assistance: the accused "kann sich in jeder Lage des Verfahrens des Beistandes eines Verteidigers bedienen" — at any stage of the proceedings — with chosen counsel capped at three. That is not conditioned on means, on the seriousness of the charge, or on anything else.',
        claim: 'fact',
        sources: ['de-stpo-137-verteidiger'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Germany’s appointment trigger is not poverty',
        text: 'Section 140 defines the cases of *notwendige Verteidigung* — necessary defence — by the situation rather than by the accused’s finances. Among them: where the first-instance trial is expected before the higher regional court, the regional court or the Schöffengericht; where a Verbrechen is charged; where the proceedings may lead to a professional ban; where the accused is to be brought before a court on detention; where he is held in an institution by judicial order; where placement for a psychiatric assessment is in question. A wealthy accused facing such a case has counsel appointed on the same terms as anyone else. Publicly organised defence is not everywhere a poverty programme.',
      },
      {
        kind: 'paragraph',
        text: 'Section 141 then governs when the appointment happens, and the timing is the substantive part. In cases of necessary defence a Pflichtverteidiger is appointed without delay to an accused who has been informed of the allegation and has no counsel, where he expressly requests it after instruction — and the request must be decided at the latest before any questioning of the accused or confrontation with him. Independently of any request, appointment follows once he is to be brought before a court on detention, once it becomes known that he is held in an institution, where it is apparent in the preliminary proceedings that he cannot defend himself, or where he has been called on to respond to the indictment.',
        claim: 'fact',
        sources: ['de-stpo-141-pflichtverteidiger'],
      },
      {
        kind: 'paragraph',
        text: 'The funding right is where means enter, and it enters differently. France grants aide juridictionnelle on three conditions, one of which is that resources not exceed the admission ceilings — and the State then takes charge of "tout ou partie", all or part, of the costs and of the avocat’s fees, with the amount varying by reference tax income and household size. Brazil states the entitlement in the Constitution itself: under Article 5º LXXIV the State provides full and free legal assistance to those who prove insufficiency of resources.',
        claim: 'fact',
        sources: ['fr-service-public-aide-juridictionnelle', 'br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'One French detail is worth isolating, because it shows conditions applying unevenly by design: the habitual-residence condition does not apply to minors, to beneficiaries of a protection order, or to persons involved in criminal proceedings. A condition on a funding scheme is not necessarily a condition on every route into it.',
        claim: 'fact',
        sources: ['fr-service-public-aide-juridictionnelle'],
      },
    ],
    misconceptions: [
      {
        claim: 'Everyone has the right to a free lawyer.',
        reality:
          'No system in this corpus provides that. France’s aid is means-tested and covers all or part of the fees; Brazil’s constitutional entitlement requires proof of insufficient resources; Germany’s appointment scheme is triggered by the situation rather than by means, and its guarantee of assistance under section 137 says nothing about who pays.',
      },
      {
        claim: 'Publicly funded defence is for poor people.',
        reality:
          'In Germany the cases of necessary defence under section 140 are defined by the seriousness of the matter and the accused’s circumstances. The trigger is what the case is, not what the accused earns.',
      },
      {
        claim: 'The right to a lawyer starts when you are charged.',
        reality:
          'Section 137(1) grants assistance at any stage of German proceedings, and section 141 requires an appointment request to be decided at the latest before questioning. Where the right begins is a question each system answers, and it is frequently earlier than charge.',
      },
      {
        claim: 'If the state pays, the state chooses and controls the lawyer.',
        reality:
          'Appointment, funding and employment are different facts. France pays a private avocat’s fees; Germany appoints a Rechtsanwalt. The funding page on this site sets out which systems couple them and which do not.',
      },
      {
        claim: 'International law guarantees a free lawyer everywhere.',
        reality:
          'International instruments state principles and bind only states party to them; they do not establish what any country provides. This site states each country’s position from that country’s own sources.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three questions locate a system, and its answers are independent of one another.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'From what point may the accused consult a lawyer at all?',
          'What triggers an appointment — the seriousness of the case, the person’s situation, or their means?',
          'Who pays, and is the coverage total or partial?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Germany answers: any stage; the situation, by an enumerated list; and the funding question is answered elsewhere in its law rather than in these provisions. France answers: not established here; means; and all or part. Two systems, and no shared answer among the three.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The distinctions are not pedantry. A person told they have "a right to a lawyer" may hold a right to consult one at their own expense, a right to have one appointed because of what they are charged with, or a right to have the state pay — and which of those it is determines whether the right is usable by them.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'What this page cannot tell you',
        text: 'It does not state anyone’s entitlement in any situation, in any country, including the three described. Entitlements depend on facts, on the stage of a process, and on provisions this page does not set out. This is an explanation of how systems are built, not a source of advice.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how defence is funded and provided](/defence/how-defence-is-funded), [what defence counsel does](/defence/what-defence-counsel-does), and [why the right to defence matters](/defence/why-the-right-to-defence-matters).',
      },
    ],
  },
  {
    slug: 'how-defence-is-funded',
    title: 'How defence is funded and provided',
    shortTitle: 'How defence is funded',
    question:
      'What is the difference between legal aid, a public defender and court-appointed counsel?',
    summary:
      'They are not synonyms. Legal aid is a funding scheme, public defence is an institution, and appointment is a procedure — and a system can have any one without the others. Only some states employ the lawyers they pay for.',
    entityType: 'concept',
    section: 'defence',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'right-to-counsel',
      'what-defence-counsel-does',
      'why-the-right-to-defence-matters',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-140-notwendige-verteidigung',
      'de-stpo-141-pflichtverteidiger',
      'br-cf-1988',
      'br-mpu-institucional',
      'fr-service-public-aide-juridictionnelle',
      'us-bjs-prosecutors',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['due-process'],
    uncertainty: [
      'Three systems were reached from primary sources — Germany, Brazil and France. Canada, Australia, Ireland, Japan, Spain, Switzerland and the United States were not researched for this wave, and their arrangements are not described.',
      'This page describes how representation is organised and paid for. It states no eligibility rule, no financial threshold and no application procedure, and it is not a guide to obtaining representation.',
      'Nothing here establishes that any arrangement works well, is adequately funded, or produces better outcomes than another.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'English-language writing uses legal aid, public defender, court-appointed counsel, assigned counsel, duty solicitor and state-funded lawyer more or less interchangeably. They describe different things, and a system can have one without any of the others.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Funding — who pays',
            description:
              'Whether the cost falls on the accused, on public funds in whole, or on public funds in part. This is what "legal aid" usually names, and it is a question about money rather than about institutions.',
          },
          {
            term: 'Appointment — who assigns',
            description:
              'Whether a lawyer is chosen by the accused or assigned by a court or another body, and on what trigger. This is a procedural question, and it is independent of who pays.',
          },
          {
            term: 'Employment — who the lawyer works for',
            description:
              'Whether the lawyer is a private practitioner or an officer of a public body. This is the question the term "public defender" implies an answer to, and it is the one most often assumed rather than checked.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This compares how states organise and pay for criminal defence. It is not legal advice, it states no eligibility rules or financial thresholds, and it contains no information about choosing, finding or paying a lawyer.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Every system that takes defence seriously faces the same problem: a right to a lawyer is worthless to a person who cannot obtain one. The three questions above are the components of every answer, and states have combined them in genuinely different ways rather than converging on a model.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Appointment without employment — Germany',
            description:
              'Section 140 of the Code of Criminal Procedure defines the cases of necessary defence, and section 141 governs when a Pflichtverteidiger is appointed — without delay on request after instruction, and independently of any request in defined situations including detention. The lawyer appointed is a Rechtsanwalt: a member of the private legal profession, assigned to the case. Germany has an appointment scheme and no defence institution.',
          },
          {
            term: 'Funding without employment — France',
            description:
              'Aide juridictionnelle is granted on conditions including that resources not exceed the admission ceilings, and the State then takes charge of all or part of the costs and of the avocat’s fees. The avocat is a private practitioner. France has a funding scheme and no defence institution.',
          },
          {
            term: 'A constitutional institution — Brazil',
            description:
              'Article 134 makes the Defensoria Pública a permanent institution essential to the jurisdictional function of the State. Its members hold career posts filled at the initial class by public competitive examination, are guaranteed *inamovibilidade*, and are FORBIDDEN to practise privately. Brazil is the case in this corpus where funding, appointment and employment are all coupled — and it is coupled at constitutional level, not administratively.',
          },
          {
            term: 'Locally organised and locally varied — the United States',
            description:
              'This corpus establishes for prosecution that the United States organises the function separately in each state, with titles and selection methods varying by state and no national standard. The same caution applies to defence: there is no single national model, and this wave did not research any state’s arrangements. The public defender office is one American arrangement among several, not a description of the country.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Court-appointed does not mean government-employed',
        text: 'This is the single most common error in the vocabulary. Germany’s Pflichtverteidiger is appointed by operation of the code and is a private Rechtsanwalt. France’s aid pays a private avocat. Appointment is a procedure that assigns a lawyer to a case; employment is a relationship between a lawyer and an employer. Only Brazil, among the systems reached here, has the second — and it reached it by creating a constitutional institution rather than by appointing anyone.',
      },
      {
        kind: 'paragraph',
        text: 'The Brazilian arrangement is worth stating carefully, because its shape is unusual. Article 134 gives the Defensoria Pública a remit far wider than criminal defence: legal guidance, the promotion of human rights, and the defence of individual and collective rights, judicial and extrajudicial, in all degrees, integrally and free, to those in need. The constitutional formula describing it — a permanent institution essential to the jurisdictional function of the State — is the same one Article 127 uses for the Ministério Público.',
        claim: 'fact',
        sources: ['br-cf-1988', 'br-mpu-institucional'],
      },
    ],
    misconceptions: [
      {
        claim: 'Legal aid and public defenders are the same thing.',
        reality:
          'France operates a means-tested funding scheme paying private lawyers, with no defence institution. Brazil operates a constitutional institution employing career defenders. Germany operates an appointment scheme that is neither. Three different arrangements, and only one of them is a public defence institution.',
      },
      {
        claim: 'A court-appointed lawyer works for the government.',
        reality:
          'Germany’s Pflichtverteidiger and France’s aided avocat are private practitioners. Appointment assigns a lawyer to a case; it does not employ them.',
      },
      {
        claim: 'Brazil’s Defensoria Pública is Brazil’s public defender office.',
        reality:
          'It is a permanent constitutional institution with the standing Article 134 gives it, a mandate covering the promotion of human rights and collective and extrajudicial matters, members holding irremovability, and a bar on private practice. A public defender office provides criminal defence to indigent defendants. The shared function conceals a difference in kind.',
      },
      {
        claim: 'Publicly funded defence means the state controls the defence.',
        reality:
          'Nothing in the provisions reached here supports that, and the arrangements cut against it: two of the three systems pay or appoint private practitioners, and the third gives its defenders irremovability and forbids them other employment. Whether funding affects independence in practice is an empirical question this wave did not research and does not answer.',
      },
      {
        claim: 'Every country has a public defence institution.',
        reality:
          'Germany and France do not. They have a statutory appointment scheme and a funding scheme respectively, both operating through the private profession.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Setting the three components side by side shows how little they move together.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Germany',
            description:
              'Appointment: statutory, triggered by the situation under section 140. Employment: private. Institution: none.',
          },
          {
            term: 'France',
            description:
              'Funding: means-tested and graduated, covering all or part. Employment: private. Institution: none.',
          },
          {
            term: 'Brazil',
            description:
              'Funding: constitutional, on proof of insufficient resources. Employment: career officers of the institution, barred from private practice. Institution: constitutional, with a remit beyond criminal defence.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'A vocabulary that treats these as three names for one thing cannot express the differences, which is why this site uses each country’s own terms and explains them rather than translating them.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Each arrangement carries a different question about independence. Where the state pays a private lawyer, the question is whether the payment is adequate and whether it is conditioned. Where the state employs the defender, the question is what protects them — which is why Brazil’s guarantee of irremovability and its bar on private practice are constitutional rather than administrative provisions.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'No arrangement is ranked here',
        text: 'An institution buys continuity, specialisation and a standing voice, and concentrates the function. A funding scheme uses the existing profession and disperses it. Both trade-offs are real, this corpus contains no evidence on outcomes, and this site takes no position between them.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [the right to counsel](/defence/right-to-counsel), [what defence counsel does](/defence/what-defence-counsel-does), and [Brazil](/countries/brazil).',
      },
    ],
  },
  {
    slug: 'what-defence-counsel-does',
    title: 'What defence counsel does',
    shortTitle: 'What defence counsel does',
    question: 'What is the job of a defence lawyer in a criminal case?',
    summary:
      'To protect the accused person’s legal interests: to advise, to see the material, to test whether the case is proved to the required standard, and to ensure the procedures the law provides are actually followed.',
    entityType: 'concept',
    section: 'defence',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['right-to-counsel', 'access-to-the-case-file', 'defence-counsel-and-prosecutor'],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-137-verteidiger',
      'de-stpo-147-akteneinsicht',
      'de-stpo-148-verkehr-verteidiger',
      'br-cf-1988',
      'fr-service-public-aide-juridictionnelle',
      'iccpr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['due-process', 'evidence'],
    uncertainty: [
      'This page describes the function at the level the sources establish it. Professional duties, ethics rules and conflict-of-interest regimes are set by each jurisdiction and were not researched; none is described.',
      'It contains no account of how any of these activities is carried out. That is deliberate and is the boundary this section is built against.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Defence counsel represents the legal interests of a person the state has accused. That is a narrower job than it is often taken to be, and a more structural one: the work is largely about whether the process is doing what it claims to be doing.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains a function within a justice system. It is not legal advice, it is not a description of how any of this work is done, and it contains nothing about evidence, questioning or witnesses beyond naming that those things exist.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The role exists because the rights an accused person holds are technical. Knowing that material exists, that a threshold applies, that a step was required and skipped, or that a consequence exceeds what the law permits are all things a person is unlikely to know about their own case. Counsel is how an entitlement becomes exercisable.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Advising',
            description:
              'Explaining what is alleged, what the process involves and what options exist. German law makes this possible early: section 137(1) permits the accused to use counsel’s assistance at any stage of the proceedings.',
          },
          {
            term: 'Seeing the material',
            description:
              'Section 147(1) entitles defence counsel to inspect the files before the court, or that would be submitted on indictment, and to view officially held items of evidence. Without this, none of the rest of the function is possible — which is why [access to the case file](/defence/access-to-the-case-file) is treated separately.',
          },
          {
            term: 'Communicating in confidence',
            description:
              'Section 148(1) permits the accused written and oral communication with counsel even when not at liberty. A lawyer who cannot speak to their client privately cannot advise them.',
          },
          {
            term: 'Testing whether the case is proved',
            description:
              'The prosecution carries the obligation to establish its case to the applicable standard. Counsel’s core work is examining whether it has — which is a question about the state’s case, not an assertion about what happened.',
          },
          {
            term: 'Protecting procedural rights',
            description:
              'Ensuring the steps the law requires were taken, within the times it sets, by the bodies it names. Where they were not, saying so through the procedures provided.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The job is not to assert innocence',
        text: 'Counsel protects legal interests, and that work is the same whatever the eventual finding: that the case be proved to the standard the law sets, that the procedures be followed, and that any consequence be lawful. A defence lawyer representing a person who has admitted the offence is doing the same job as one representing a person who denies it.',
      },
      {
        kind: 'paragraph',
        text: 'Some systems attach the function to an institution with a wider mandate. Article 134 of Brazil’s Constitution gives the Defensoria Pública legal guidance, the promotion of human rights, and the defence of individual and collective rights, judicial and extrajudicial — so a defender there may act in matters that are not criminal cases at all.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Defence lawyers try to get guilty people off.',
        reality:
          'The function is to ensure the case is proved to the required standard and the procedures followed. Whether the person did it is what the process is for determining, and counsel is not in a position to know it in advance any more than anyone else is.',
      },
      {
        claim: 'A defence lawyer must believe the client.',
        reality:
          'The job concerns the state’s case: whether it has been established, and whether the law was followed. Belief about the facts is not a component of it.',
      },
      {
        claim: 'Defence counsel and the prosecution are enemies.',
        reality:
          'They perform different roles in one process, and in several systems they are bound by duties to the court alongside their duties to their side. This site sets out the relationship on its defence, prosecution and court page.',
      },
      {
        claim: 'Defence work is mostly courtroom argument.',
        reality:
          'The provisions that make the function possible are about access and communication — reading the file, viewing exhibits, speaking to a client in detention. Most of what the sources here establish concerns what counsel may see and say, not what happens at a hearing.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What counsel may do differs with what the system permits them to see and when they may be involved, which is why the same job looks different across jurisdictions.',
      },
      {
        kind: 'list',
        items: [
          'When counsel may first act — Germany permits assistance at any stage of the proceedings.',
          'What counsel may see, and when — Germany grants file access with a defined investigation-purpose limit.',
          'Whether counsel may communicate freely with a detained client — Germany permits it, subject to a narrow statutory exception.',
          'Whether the function sits inside an institution with a broader mandate — Brazil, where it does.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The International Covenant on Civil and Political Rights carries fair-trial guarantees including the requirement of adequate time and facilities to prepare a defence. That states a principle for states party to it; what any country actually provides is established from that country’s own instruments, as above.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What the role does not include',
        text: 'Representing someone does not extend to concealing evidence, interfering with witnesses, or obstructing a proceeding. Those are unlawful in the systems described here, they are not defence functions, and nothing on this site describes how any of them would be done.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [access to the case file](/defence/access-to-the-case-file), [lawyer–client confidentiality](/defence/lawyer-client-confidentiality), and [the right to counsel](/defence/right-to-counsel).',
      },
    ],
  },
  {
    slug: 'defence-counsel-and-prosecutor',
    title: 'Defence counsel, prosecutor and court',
    shortTitle: 'Defence, prosecution and court',
    question: 'How do defence counsel, the prosecutor and the judge relate to each other?',
    summary:
      'Three roles in one process, not two sides and a referee. The prosecution puts the public case, the defence protects the accused person’s legal interests, and the court decides — and in several systems all three owe duties to the process itself.',
    entityType: 'concept',
    section: 'defence',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-the-right-to-defence-matters',
      'what-defence-counsel-does',
      'prosecutorial-objectivity',
    ],
    relatedInstitutions: ['prosecution-service', 'constitutional-court'],
    sources: [
      'de-stpo-160',
      'de-stpo-137-verteidiger',
      'br-cf-1988',
      'br-mpu-institucional',
      'fr-justice-parquet',
      'un-prosecutors-guidelines',
      'iccpr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['prosecutor', 'court'],
    uncertainty: [
      'This page describes how the three roles are allocated. It does not describe trial procedure, which differs profoundly between systems and belongs to a later cluster.',
      'No claim is made that any system achieves a fair balance between the roles in practice. The arrangements described are institutional.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The familiar picture is a contest: prosecution against defence, with the judge holding the scales. It is a useful shorthand and it misleads in one specific way — it implies that each side’s job is to win, and that the process is the residue of the fight.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The prosecution puts the public case',
            description:
              'It decides whether the case should proceed and presents it, on behalf of the public rather than of any complainant. In several systems it carries duties that cut against winning — Germany’s section 160(2) requires the prosecution to establish exculpatory as well as incriminating circumstances.',
          },
          {
            term: 'The defence protects the accused person’s legal interests',
            description:
              'It tests whether the case has been established to the required standard and whether the procedures were followed. It does not carry a burden of proving anything.',
          },
          {
            term: 'The court decides',
            description:
              'It determines the case on the law and the material, and gives reasons. It is not a participant in the contest and does not represent anyone.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how three institutional roles relate. It is not legal advice, and it does not describe trial procedure, hearing conduct or advocacy.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The separation exists because a single body doing all three would have no way of checking itself. If the institution that decided to accuse also assessed the answer and reached the finding, the finding would tell you only what that institution already thought at the outset.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Not a moral division',
        text: 'It is tempting to read the roles as taking sides on whether crime should be punished. They do not. A prosecutor who declines a weak case and a defence lawyer who insists a case be proved are both doing what the process requires of them. Describing either as the opponent of justice — or of public safety — misdescribes an allocation of function as a conflict of values.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The clearest evidence that these are functions rather than camps is that the sources give the accusing side duties that only make sense for a public office. Section 160(2) of the German Code of Criminal Procedure requires the prosecution to investigate exculpatory circumstances as well as incriminating ones. The United Nations Guidelines on the Role of Prosecutors address the impartiality expected of prosecutors and the separation of prosecutorial from judicial functions — a statement of international standard rather than of any state’s law.',
        claim: 'fact',
        sources: ['de-stpo-160', 'un-prosecutors-guidelines'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil makes the parallel explicit in constitutional text. Article 127 describes the Ministério Público as a permanent institution essential to the jurisdictional function of the State; Article 134 uses the same formula for the Defensoria Pública. Two institutions with opposite roles in a case, given the same constitutional standing, because the process requires both.',
        claim: 'fact',
        sources: ['br-cf-1988', 'br-mpu-institucional'],
      },
      {
        kind: 'paragraph',
        text: 'What the roles do not share is the burden. The prosecution undertakes to establish its case; the defence does not undertake to establish anything. That asymmetry is deliberate and follows from the presumption of innocence, which [the prosecution cluster](/prosecution/prosecution-and-presumption-of-innocence) sets out from the prosecuting side.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Defence and prosecution are equally matched opponents.',
        reality:
          'They hold different powers and different burdens. The state has investigative capacity and the obligation to prove; the accused has neither. The arrangement is not symmetrical and was not designed to be.',
      },
      {
        claim: 'The prosecutor is on the victim’s side and the defence is on the offender’s.',
        reality:
          'The prosecution acts for the public interest rather than for a complainant, and the defence acts for a person whose guilt has not been determined. Neither description survives contact with what the offices actually are.',
      },
      {
        claim: 'The judge is neutral because the two sides balance out.',
        reality:
          'Judicial independence is a structural arrangement in its own right, described in the courts cluster. It does not depend on the parties being evenly matched.',
      },
      {
        claim:
          'A prosecutor who drops a case has failed; a defence lawyer who loses has failed.',
        reality:
          'Both descriptions assume the roles exist to win. A prosecution discontinued because the threshold was not met and a conviction reached on tested evidence are each the process working.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'How sharply the three are separated differs, and the difference is institutional rather than procedural.',
      },
      {
        kind: 'list',
        items: [
          'All three constituted separately, two of them constitutionally — Brazil, where Articles 127 and 134 give the Ministério Público and the Defensoria Pública the same standing.',
          'Prosecution and defence as functions within one profession — France, where the parquet is part of the magistrature while the avocat is not.',
          'A prosecution carrying an express two-sided investigative duty — Germany, under section 160(2).',
        ],
      },
      {
        kind: 'paragraph',
        text: 'What the systems share is that the deciding body is not the accusing body. That much is common to every arrangement described anywhere on this site.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a reader, the practical value of the distinction is knowing what to expect of whom. A prosecutor is not failing in their duty by disclosing material that damages their case; a defence lawyer is not obstructing by requiring the case to be proved; a court is not siding with anyone by holding the prosecution to its burden.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Roles, not allegiances',
        text: 'This site describes prosecution, defence and adjudication as institutional functions. It does not characterise any of them as pro- or anti-anything, and the neutrality is deliberate: the roles exist to make a finding reliable, and none of them is the adversary of that goal.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [prosecutorial objectivity](/prosecution/prosecutorial-objectivity), [why courts matter](/courts/why-courts-matter), and [what defence counsel does](/defence/what-defence-counsel-does).',
      },
    ],
  },
  {
    slug: 'access-to-the-case-file',
    title: 'Access to the case file',
    shortTitle: 'Access to the case file',
    question: 'Can defence counsel see the evidence the prosecution has gathered?',
    summary:
      'Generally yes, and generally not without limits. The German code grants counsel access to the files and officially held evidence, permits refusal where it would endanger an ongoing investigation, and then requires access anyway where liberty is at stake.',
    entityType: 'concept',
    section: 'defence',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['what-defence-counsel-does', 'lawyer-client-confidentiality', 'right-to-counsel'],
    relatedInstitutions: ['prosecution-service'],
    sources: ['de-stpo-147-akteneinsicht', 'de-stpo-137-verteidiger', 'de-stpo-160', 'iccpr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['evidence', 'disclosure'],
    uncertainty: [
      'Only Germany was reached from a primary source on file access. Every other system’s arrangements were not researched and are not described; the German provisions are not presented as a general model.',
      'This page states what a right covers and what bounds it. It gives no account of how access is requested, timed or contested, and nothing here would assist anyone seeking material in a live matter.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A person cannot answer a case they cannot see. Access to the material the state has gathered is therefore less a courtesy than a precondition — and because the material is gathered during an investigation that may still be running, it is one of the more carefully bounded rights in criminal procedure.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains what a file-access right covers and what limits it. It is not legal advice, it describes no procedure for obtaining material, and it contains nothing that would assist anyone in a live matter.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Two interests meet here and both are legitimate. An accused person needs to know what is said against them in order to respond to it. An investigation that is still running can be defeated by disclosing what it has and has not established. Systems resolve this by timing rather than by choosing a side — access broadens as the investigation closes.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The harder case is detention, because there the person is already suffering a consequence while the investigation continues. That is where systems tend to place their firmest requirement.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Section 147 of the German Code of Criminal Procedure states the right, the limit and the limit on the limit, in that order — and the third part is where the provision does its work.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The right — § 147(1)',
            description:
              'Defence counsel is entitled to inspect the files that are before the court, or that would be submitted to it on the preferment of charges, and to view officially held items of evidence. The entitlement runs to counsel, and it covers exhibits as well as documents.',
          },
          {
            term: 'The limit — § 147(2), first sentence',
            description:
              'Where the conclusion of the investigation is not yet noted in the files, inspection of the files or of individual parts, and viewing of officially held evidence, may be refused so far as this may endanger the purpose of the investigation. The limit is tied to a stage of the process and to a stated reason.',
          },
          {
            term: 'The limit on the limit — § 147(2), second sentence',
            description:
              'Where those conditions apply and the accused is in remand detention, or detention has been applied for following provisional arrest, the information essential for assessing the lawfulness of the deprivation of liberty must be made accessible in a suitable manner — and as a rule, access to the files is to be granted to that extent.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The structure is the point',
        text: 'A right stated without limits would be unusable in an ongoing investigation and would not survive contact with practice. A limit stated without a floor would swallow the right precisely when it matters most — when someone is detained on the strength of material they cannot see. The provision does both, and reading only the first sentence of it produces a false picture in either direction.',
      },
      {
        kind: 'paragraph',
        text: 'Access also connects to a duty on the other side. Germany’s section 160(2) requires the prosecution to establish exculpatory circumstances as well as incriminating ones — so the file counsel is entitled to see is a file the prosecution was obliged to build in both directions. The general term for the wider obligation is defined at [disclosure](/glossary/disclosure).',
        claim: 'fact',
        sources: ['de-stpo-160'],
      },
    ],
    misconceptions: [
      {
        claim: 'The defence sees everything the prosecution has, immediately.',
        reality:
          'German law permits refusal before the investigation is concluded where access may endanger its purpose. Access is bounded by stage and by reason.',
      },
      {
        claim: 'The defence sees nothing until trial.',
        reality:
          'Equally wrong for Germany. Where the accused is in remand detention, the information essential to assessing the lawfulness of the detention must be made accessible, and as a rule file access is granted to that extent.',
      },
      {
        claim: 'Access to the file is the same as disclosure.',
        reality:
          'They are related and not identical. Disclosure is an obligation on the prosecution to provide material; file access is an entitlement of the defence to inspect what is held. A system can arrange either without arranging the other the same way.',
      },
      {
        claim: 'These rules are broadly the same everywhere.',
        reality:
          'Only Germany was researched for this wave. Nothing here describes any other system, and the German structure is not offered as a model that others follow.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three questions locate a system’s arrangement, and the German provisions answer all three explicitly, which is unusual enough to be worth noting.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Who holds the entitlement — the accused, or counsel?',
          'What may be withheld, and for what stated reason?',
          'What must be provided regardless, and when?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Germany answers: counsel; material whose disclosure may endanger the purpose of an unconcluded investigation; and the information essential to assessing the lawfulness of detention, where the accused is detained.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The detention provision is the one that shows what the right is for. A person held before any determination is suffering the process’s heaviest consequence at its earliest stage, on material assembled by one side. Requiring that they be able to assess the lawfulness of that is what distinguishes detention under law from detention on assertion.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Not a route to material',
        text: 'This page describes how a right is structured in one country’s code. It is not a description of any procedure for obtaining material, and it should not be read as one by anyone involved in a matter.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [disclosure](/glossary/disclosure), [what defence counsel does](/defence/what-defence-counsel-does), and [prosecutorial objectivity](/prosecution/prosecutorial-objectivity).',
      },
    ],
  },
  {
    slug: 'lawyer-client-confidentiality',
    title: 'Lawyer–client confidentiality',
    shortTitle: 'Lawyer–client confidentiality',
    question:
      'Can an accused person speak to their lawyer privately, and is it ever protected absolutely?',
    summary:
      'Confidential communication is what makes advice possible, and German law guarantees it even in detention. It is not absolute anywhere researched here — and a professional duty of confidentiality is not the same thing as an evidentiary privilege.',
    entityType: 'concept',
    section: 'defence',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['what-defence-counsel-does', 'access-to-the-case-file', 'right-to-counsel'],
    relatedInstitutions: ['prosecution-service'],
    sources: ['de-stpo-148-verkehr-verteidiger', 'de-stpo-137-verteidiger', 'iccpr'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['due-process', 'evidence'],
    uncertainty: [
      'Only Germany was reached from a primary source. The scope of professional secrecy, evidentiary privilege and their exceptions is set by each jurisdiction and differs substantially; no system other than Germany is described.',
      'The German exception is stated as to its existence, its confinement to named offences and its routing through a court. Its operation is deliberately not described, and nothing here indicates how any protection could be obtained, extended or circumvented.',
      'This page does not state what is or is not protected in any situation, in any country.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A person cannot get useful legal advice without describing their situation honestly, and will not describe it honestly if the description can be used against them. Confidential communication is therefore not a perk of representation; it is the condition that makes representation work at all.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two different things share the ground',
        text: 'A professional DUTY OF CONFIDENTIALITY binds the lawyer: it is an obligation not to disclose, enforced through professional regulation. An EVIDENTIARY PRIVILEGE binds the process: it is a rule about what may be compelled or admitted. They frequently coexist and they are not the same claim — a communication can be covered by a professional duty in a system that treats the evidentiary question differently. The Anglo-American vocabulary of "attorney–client privilege" and the continental vocabulary of professional secrecy are not translations of each other.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why confidential communication exists and that it is bounded. It is not legal advice, it does not state what is protected in any situation, and it contains no information about how any protection operates in practice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason is practical rather than sentimental. Advice given on a partial account is bad advice, and a person who conceals the difficult part of their situation from their own lawyer is usually concealing the part that most affects what should be done. Protection exists so that the advice can be given on the real facts.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The detained case matters most, and for the same reason as with file access: it is where the person has least ability to act for themselves and most need of someone who can.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Section 148(1) of the German Code of Criminal Procedure states the right in one sentence, and the important clause is at the end: the accused is permitted written and oral communication with defence counsel, "auch wenn er sich nicht auf freiem Fuß befindet" — even when he is not at liberty. Detention does not remove it.',
        claim: 'fact',
        sources: ['de-stpo-148-verkehr-verteidiger'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And it is not absolute',
        text: 'Section 148(2) provides a narrow exception where a detained person is strongly suspected of an offence under section 129a of the Criminal Code: a court is to order that documents and other objects be rejected unless the sender agrees to their being submitted first to a court designated by section 148a. Three features of that are worth noticing — it is created by statute rather than by discretion, it is confined to named offences, and it is routed through a court rather than through the investigating authority. This site states that the exception exists and takes that shape. It does not describe how it operates.',
      },
      {
        kind: 'paragraph',
        text: 'The relationship to the right to counsel is direct. Section 137(1) permits the accused to use counsel’s assistance at any stage of the proceedings; section 148(1) is what makes that assistance meaningful when the person is held. A right to a lawyer one cannot speak to privately would be a right to a witness.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Everything said to a lawyer is absolutely protected.',
        reality:
          'Not in any system researched here. German law guarantees communication with counsel including in detention, and then provides a statutory exception confined to named offences and supervised by a court. Systems set the boundaries differently and all of them set some.',
      },
      {
        claim: 'Confidentiality and privilege are the same thing.',
        reality:
          'A professional duty binds the lawyer not to disclose; an evidentiary privilege governs what a process may compel or admit. They are related and distinct, and the terminology differs between legal traditions in ways that do not map onto each other.',
      },
      {
        claim: 'Detention suspends the right to speak to a lawyer.',
        reality:
          'Section 148(1) is explicit that written and oral communication is permitted even when the accused is not at liberty.',
      },
      {
        claim: 'Involving a lawyer makes material protected.',
        reality:
          'Protection attaches to communication for the purpose of legal advice within the boundaries each system sets. It is not a mechanism for changing the status of material, and this site describes no such mechanism.',
      },
      {
        claim: 'The rules are broadly the same across countries.',
        reality:
          'Only Germany was researched. Professional secrecy regimes differ substantially, and nothing here describes any other jurisdiction.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three questions distinguish systems, and this wave answers them only for Germany.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Is the protection a duty on the lawyer, a rule of evidence, or both?',
          'Does it survive detention?',
          'What exceptions exist, who creates them, and who supervises their use?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'For Germany: section 148 addresses communication, and it survives detention; the exception is statutory, confined to named offences, and routed through a court. Whether the evidentiary question is arranged the same way is a separate matter that was not researched.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'That the exception runs through a court is the feature worth dwelling on. A protection that an investigating authority could set aside on its own assessment would not be a protection against that authority. Placing the decision with a body outside the investigation is what keeps the exception an exception.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A boundary this site keeps',
        text: 'This page names that limits exist and where they come from. It does not enumerate them operationally, and it describes nothing about how a protection might be obtained, preserved or defeated. That restraint is deliberate: explaining a safeguard is educational, and mapping its edges for use is not.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what defence counsel does](/defence/what-defence-counsel-does), [access to the case file](/defence/access-to-the-case-file), and [the right to counsel](/defence/right-to-counsel).',
      },
    ],
  },
];
