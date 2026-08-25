import type { Guide } from '../types';

/**
 * Wave 10 — the prosecution cluster.
 *
 * These guides own PROSECUTION AS AN INSTITUTIONAL FUNCTION. `/professions/prosecutor` owns who
 * the prosecutor is; `what-does-a-prosecutor-do` owns what the role does; the glossary owns
 * `prosecutor`, `presumption-of-innocence`, `due-process` and `disclosure`; Wave 8 owns who
 * investigates and who directs; Wave 9 owns the court. What was left is how the power to charge
 * is constituted, bounded, insulated and answered for.
 *
 * TWO STANDING RULES, both enforced by tests.
 *
 * A charge is not a finding. No page may use language treating an accused person as an offender,
 * and the cluster carries the presumption explicitly rather than assuming it.
 *
 * A provision establishes an ARRANGEMENT, never a performance. No country is described as having
 * an independent prosecution; the sources support what a text says, what an office states, or
 * that a question is contested — and the pages say which.
 */
export const PROSECUTION_GUIDES: readonly Guide[] = [
  {
    slug: 'why-public-prosecution-exists',
    title: 'Why public prosecution exists',
    shortTitle: 'Why public prosecution exists',
    question: 'Why is the decision to bring a criminal case a public function?',
    summary:
      'Someone has to decide whether the state’s case should proceed, and the choice of who has consequences. Placing it in a public office separates it from the people who investigated, from the person harmed, and from the court that will decide.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'what-does-a-prosecutor-do',
      'how-charging-decisions-work',
      'prosecution-and-presumption-of-innocence',
    ],
    relatedInstitutions: ['prosecution-service', 'national-police'],
    sources: [
      'de-gvg-141',
      'de-stpo-152-legalitaetsgrundsatz',
      'br-cf-1988',
      'br-mpu-institucional',
      'ke-constitution',
      'ie-dpp',
      'us-bjs-prosecutors',
      'fr-justice-parquet',
      'ng-constitution',
      'es-constitution',
      'un-prosecutors-guidelines',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['prosecutor', 'criminal-investigation'],
    uncertainty: [
      'This page explains why the function is public and where it sits. It establishes nothing about how well any prosecution system works, and compares no country against another.',
      'The historical development of public prosecution differed between legal systems and is not traced here. No claim is made that public prosecution replaced private action in one linear sequence anywhere, still less everywhere.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'After an investigation there is a decision to make that the investigation cannot make for itself: whether the state should now accuse someone, and of what. In almost every system that decision belongs to a public office rather than to the investigators, to the person harmed, or to the court.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why the charging function is public and how it is separated from adjacent roles. It is not legal advice, it does not describe how to bring or respond to a prosecution, and it assesses no prosecution service.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The case for making it public rests on three separations, each answering a different problem.',
        claim: 'analysis',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Separate from the investigation',
            description:
              'A team that has spent months building a theory is not well placed to judge whether the theory holds. Placing the decision with someone who did not build it inserts a check between the body that formed a view and the court that will test it — which is the argument the site makes at greater length under [investigation to prosecution](/investigations/investigation-to-prosecution). Separate does not mean distant, and in several systems it does not mean uninvolved: German law places legal responsibility for the investigation on the prosecution itself, French law has the police judiciaire exercised under the direction of the procureur, and Japanese prosecutors may investigate an offence themselves. What is separated is the decision to charge from the work of building the case, and how far apart those sit is a national choice.',
          },
          {
            term: 'Separate from the person harmed',
            description:
              'A criminal case is brought in the name of the public, not of the complainant. That is why a prosecutor may decline a case a victim wants brought, and why prosecution does not depend on the victim’s means or persistence. It is also why the office is answerable to the public rather than to a client.',
          },
          {
            term: 'Separate from the court',
            description:
              'The body that accuses cannot be the body that decides, or the decision is not a decision. This separation is the reason the rest of the [courts cluster](/courts/why-courts-matter) exists in the shape it does.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Both halves of the design',
        text: 'A society unable to prosecute crime lawfully cannot answer the wrong done to the people it failed to protect. A society whose prosecutions cannot be checked produces accusations no one has reason to credit. The safeguards described across this cluster — thresholds, duties of objectivity, reasons, review — are not restraints imposed on prosecution from outside it. They are the conditions under which a prosecution means anything. Capacity and constraint are the same design, not competing goods.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Where the public office sits differs so much that "the prosecution service" is not a safe description of every system.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Attached to the courts — Germany',
            description:
              'Section 141 of the Courts Constitution Act states the arrangement in a sentence: "Bei jedem Gericht soll eine Staatsanwaltschaft bestehen" — a public prosecution office shall exist at every court. Because the courts are overwhelmingly Land courts, the offices attached to them are overwhelmingly Land institutions, and there is no single national prosecution service.',
          },
          {
            term: 'Outside all three branches — Brazil',
            description:
              'Article 127 of the Constitution defines the Ministério Público as an "instituição permanente, essencial à função jurisdicional do Estado", charged with defending the legal order, the democratic regime and inalienable social and individual interests. It is not part of the executive, the legislature or the judiciary, and under Article 129 it holds the public criminal action exclusively — alongside civil functions this page does not describe.',
          },
          {
            term: 'A constitutionally insulated office — Kenya',
            description:
              'Article 157(10) provides that in exercising its powers the Director of Public Prosecutions "shall not require the consent of any person or authority for the commencement of criminal proceedings and … shall not be under the direction or control of any person or authority".',
          },
          {
            term: 'Within the magistrature — France',
            description:
              'The ministère public, or parquet, is composed of magistrats drawn from the same body as the judges, and the Ministry of Justice describes their mission as requesting the application of the law and conducting criminal proceedings in the public interest. They are not judges: the magistrats du siège decide, the magistrats du parquet do not.',
          },
          {
            term: 'Locally elected — much of the United States',
            description:
              'There is no national prosecution service. The Bureau of Justice Statistics records that the chief local prosecutor — "also referred to as the district attorney, county attorney, commonwealth attorney, or state’s attorney" — represents the state in criminal cases and is "answerable to the public as an elected or appointed public official". Most are locally elected.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Making the function public also makes it statable. Germany writes the duty into the code: under section 152(1) of the Code of Criminal Procedure the Staatsanwaltschaft is the body called upon to bring the public charge. A power located in a named office, on a written basis, can be described, trained for, and asked about afterwards in a way that an informal one cannot.',
        claim: 'fact',
        sources: ['de-stpo-152-legalitaetsgrundsatz'],
      },
    ],
    misconceptions: [
      {
        claim: 'The prosecutor is the victim’s lawyer.',
        reality:
          'A criminal case is brought on behalf of the public. That is why a prosecutor may decline a case the complainant wants brought, and why the decision does not depend on the complainant’s resources.',
      },
      {
        claim: 'The prosecutor’s job is to secure convictions.',
        reality:
          'The function is to decide whether the public case should proceed and to conduct it according to law. Several systems place duties on prosecutors that cut against maximising convictions, including duties concerning material that damages their own case.',
      },
      {
        claim: 'Prosecutors work for the police.',
        reality:
          'They are different institutions with different functions, and in several systems the direction runs the other way. Who controls an investigation is a separate question, and this site covers it under police and prosecutor investigation.',
      },
      {
        claim: 'Every country has a national prosecution service.',
        reality:
          'Germany has prosecution offices attached to each court and no single national service. The United States has federal prosecutors and separately organised state and local prosecution. In Nigeria the prosecuting authority is a serving government minister.',
      },
      {
        claim:
          'Public prosecution everywhere replaced private vengeance in one historical step.',
        reality:
          'Legal systems developed differently, and this site does not trace that development. The arrangements described here are the current ones, established from current instruments.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'One question separates the systems more sharply than any other: is the prosecuting authority a distinct institution at all?',
      },
      {
        kind: 'list',
        items: [
          'A body outside the executive, legislature and judiciary — Brazil.',
          'A constitutionally insulated office — Kenya.',
          'An office that states its own independence in performing its functions — Ireland.',
          'A hierarchical body within the magistrature, under the authority of a minister — France.',
          'Offices attached to each court, supervised through the federal structure — Germany.',
          'A serving minister of government — Nigeria, where the Attorney-General of the Federation is "the Chief Law Officer of the Federation and a Minister of the Government of the Federation".',
        ],
      },
      {
        kind: 'paragraph',
        text: 'That last entry is worth pausing on, because it shows the limits of the category. Making the charging function public does not by itself place it outside government. Where it sits, and what protects it, are further questions — which is the subject of [prosecutorial independence](/prosecution/why-prosecutorial-independence-matters).',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The United Nations Guidelines on the Role of Prosecutors, adopted by the Eighth United Nations Congress on the Prevention of Crime and the Treatment of Offenders in 1990, address the impartiality expected of prosecutors, their duty to protect the public interest, and the separation of prosecutorial from judicial functions. That is a statement of an international standard. It is not the law of any of the countries named on this page, and nothing here treats it as such.',
        claim: 'fact',
        sources: ['un-prosecutors-guidelines'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A decision to prosecute is not a finding',
        text: 'Everything on this page concerns whether a case should be put. Whether the accusation is true is a question for a court, and the person accused is entitled to answer the case, to have the evidence against them tested, and to be treated as not guilty until the case is proved. This site will develop the defence side of that in its own right; here it is stated because a page about prosecution that omitted it would be describing half a process.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what a prosecutor does](/prosecution/what-does-a-prosecutor-do), [how charging decisions work](/prosecution/how-charging-decisions-work), and [police and prosecutor investigation](/investigations/police-vs-prosecutor-investigation).',
      },
    ],
  },
  {
    slug: 'how-charging-decisions-work',
    title: 'How charging decisions work',
    shortTitle: 'Charging decisions',
    question: 'What has to be true before a criminal charge is brought?',
    summary:
      'There is no universal charging test. Germany obliges its prosecutors to act on sufficient factual indications; other systems apply an evidential assessment and a public-interest judgement; some give local prosecutors broad discretion with no national standard at all.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-public-prosecution-exists',
      'prosecutorial-discretion-and-legality',
      'prosecution-and-presumption-of-innocence',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-152-legalitaetsgrundsatz',
      'de-stpo-170-anklageerhebung',
      'de-stpo-153-geringfuegigkeit',
      'us-bjs-prosecutors',
      'us-attorneys-28usc541-547',
      'ke-constitution',
      'ie-dpp',
      'fr-justice-parquet',
      'es-constitution',
      'br-cf-1988',
      'un-prosecutors-guidelines',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['prosecutor', 'evidence'],
    uncertainty: [
      'Charging standards are set by each system, and this corpus carries primary charging provisions only for Germany. Where a threshold is stated below it is attributed to the system whose source establishes it, and no threshold is generalised.',
      'Ireland’s, Kenya’s, France’s, Spain’s and Brazil’s charging tests were not established from primary sources and are not described. Their absence here is a gap in the research, not a finding about those systems.',
      'This page describes what has to be established before a charge. It says nothing about how often charges follow, are declined, or succeed.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A charging decision converts an investigation into an accusation. Two questions sit inside it and they are not the same: whether the material is sufficient, and whether the case should be brought. Systems differ on both — and on whether the second question is even permitted.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'There is no universal charging test',
        text: 'English-language writing frequently describes a two-stage test in which a prosecutor asks whether there is a realistic prospect of conviction and then whether prosecution is in the public interest. That describes the systems that use it. It does not describe Germany, whose code obliges the prosecution to act on sufficient factual indications and asks nothing about prospects of conviction; and it does not describe the United States, which has no national charging standard at all. A phrase from one system is not a global rule.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how charging thresholds differ between systems. It is not legal advice, it does not state the test applied in any country not named, and it offers no guidance on how a decision might be influenced.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A threshold exists because a prosecution imposes serious costs on a person before anything has been determined. Requiring something to be established first is what separates an accusation from a suspicion, and writing the requirement down is what makes it possible to ask afterwards whether it was met.',
      },
      {
        kind: 'paragraph',
        text: 'The second question — whether a case that could be brought should be — exists because not every provable offence is worth the machinery of a criminal trial. Systems disagree sharply about whether prosecutors may ask it, which is the subject of [discretion and legality](/prosecution/prosecutorial-discretion-and-legality).',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany is the system this corpus establishes from primary sources, and it is the clearest case that the familiar formulation is not universal. Section 152(2) of the Code of Criminal Procedure provides that the prosecution "ist, soweit nicht gesetzlich ein anderes bestimmt ist, verpflichtet, wegen aller verfolgbaren Straftaten einzuschreiten, sofern zureichende tatsächliche Anhaltspunkte vorliegen" — it is obliged, unless the law provides otherwise, to take action in respect of all prosecutable offences where sufficient factual indications are present.',
        claim: 'fact',
        sources: ['de-stpo-152-legalitaetsgrundsatz'],
      },
      {
        kind: 'paragraph',
        text: 'Two features of that sentence are worth separating. The threshold is factual indications, not an estimate of what a court would do. And the verb is obliged: where the threshold is met, acting is a duty rather than a judgement. Section 170(1) then governs the indictment itself, which follows where the investigations offer "genügenden Anlaß" — sufficient reason — to bring the public charge.',
        claim: 'fact',
        sources: ['de-stpo-152-legalitaetsgrundsatz', 'de-stpo-170-anklageerhebung'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Deciding not to charge is a decision, not an absence of one',
        text: 'Section 170(2) StPO provides that where the investigations do not offer sufficient reason, the prosecution terminates the proceedings — and must notify the accused where he has been questioned as such, where a warrant of arrest had been issued, where he has asked for a decision, or where a particular interest in notification is apparent. A decision not to charge is a defined outcome with its own duties attached. It is not the case quietly stopping.',
      },
      {
        kind: 'paragraph',
        text: 'The United States sits at the other end and shows that a threshold need not be national at all. Under 28 U.S.C. § 547 each United States attorney prosecutes for all offences against the United States within their district; under § 541 they are appointed by the President with the advice and consent of the Senate for a four-year term. State and local prosecution is organised separately by each state, and the Bureau of Justice Statistics records that the chief local prosecutor holds broad discretion over who is charged.',
        claim: 'fact',
        sources: ['us-attorneys-28usc541-547', 'us-bjs-prosecutors'],
      },
      {
        kind: 'paragraph',
        text: 'A charging power can also carry stated considerations without those amounting to a threshold. Kenya’s Constitution requires the Director of Public Prosecutions, in exercising the powers conferred by Article 157, to have regard to the public interest, the interests of the administration of justice and the need to prevent and avoid abuse of the legal process. That is a direction about how the power is exercised rather than a test of evidential sufficiency, and this page does not present it as one.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim:
          'Prosecutors everywhere ask whether there is a realistic prospect of conviction.',
        reality:
          'Germany’s code asks whether sufficient factual indications are present and makes acting a duty. The formulation belongs to the systems that adopted it, and applying it to a system that did not misdescribes the decision being made.',
      },
      {
        claim: 'The public-interest question is part of every charging decision.',
        reality:
          'Under the German principle of legality the prosecution is obliged to act where the threshold is met. A public-interest judgement enters through defined statutory exceptions such as section 153, not as a general second stage.',
      },
      {
        claim: 'A charge means the prosecutor believes the person is guilty.',
        reality:
          'A charging threshold is an assessment of material, not a verdict. Guilt is determined by a court, and the presumption of innocence continues to apply throughout.',
      },
      {
        claim: 'A decision not to charge means no offence occurred.',
        reality:
          'It means the applicable threshold was not met on the available material, or that a statutory basis for not proceeding applied. Those are different propositions, and neither establishes what happened.',
      },
      {
        claim: 'Charging standards are set nationally everywhere.',
        reality:
          'The United States has no national charging standard binding state and local prosecutors, who handle the great majority of criminal cases and are organised separately by each state.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three questions distinguish the systems, and a system’s answers to them are independent of each other.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'What must be established — factual indications, an assessment of the evidence, or something else the system defines?',
          'Is acting on it a duty or a choice?',
          'Is the threshold set nationally, or by each prosecuting authority?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Germany answers: factual indications, a duty, nationally by code. The United States answers: no single standard, a choice, and not nationally for the prosecutions that make up most of the caseload. Two systems, and no shared answer among the three.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Thresholds are a safeguard for the person accused before they are an administrative rule. A requirement that something be established first is what stands between a suspicion and the serious consequences that follow from being charged — and because it is written down, a decision to charge can be examined against it rather than merely accepted.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'They also protect the public function. A threshold that is applied consistently is the difference between a prosecution service and a series of individual judgements, and it is the reason systems publish their standards where they have them.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What follows a charge',
        text: 'A charging decision opens a process; it does not conclude one. The accused may answer the case and have the evidence against them tested before a court that has taken no part in building it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [discretion and legality](/prosecution/prosecutorial-discretion-and-legality), [prosecution and the presumption of innocence](/prosecution/prosecution-and-presumption-of-innocence), and [from investigation to prosecution](/investigations/investigation-to-prosecution).',
      },
    ],
  },
  {
    slug: 'prosecutorial-discretion-and-legality',
    title: 'Discretion and legality in prosecution',
    shortTitle: 'Discretion and legality',
    question: 'Do prosecutors choose whether to bring a case, or are they required to?',
    summary:
      'Both, depending on the system — and often within the same system. Germany’s code makes prosecution a duty and then creates statutory exceptions requiring a public-interest judgement. The legal family a country belongs to does not predict the answer.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-charging-decisions-work',
      'prosecutorial-accountability',
      'why-public-prosecution-exists',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-152-legalitaetsgrundsatz',
      'de-stpo-153-geringfuegigkeit',
      'de-stpo-170-anklageerhebung',
      'us-bjs-prosecutors',
      'ke-constitution',
      'es-constitution',
      'un-prosecutors-guidelines',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['prosecutor'],
    uncertainty: [
      'Only Germany’s legality provisions and the United States position on local prosecutorial discretion are established from sources in this corpus. Other systems are named on this page only where a source supports the specific statement made.',
      'This page describes what systems permit. It says nothing about how discretion is exercised in practice anywhere, which is an empirical question these sources cannot answer.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Two principles are usually contrasted. Under a principle of legality, a prosecutor who finds the threshold met must proceed. Under a principle of opportunity or discretion, a prosecutor who finds the threshold met may still decide not to. The contrast is real, and treating it as a clean division between legal families is where the description goes wrong.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains the difference between a duty to prosecute and a choice, and how systems combine them. It is not legal advice and describes no country’s practice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A duty to prosecute answers a specific worry: that whether a case proceeds might depend on who the suspect is. If the prosecution must act whenever the threshold is met, the question of who is favoured does not arise, because no one is being chosen.',
      },
      {
        kind: 'paragraph',
        text: 'Discretion answers the opposite worry: that a system obliged to prosecute everything would prosecute trivia at the cost of what matters, and would remove any capacity to decide that a criminal trial is the wrong response to what happened. Both concerns are legitimate, and most systems end up accommodating both.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany states the duty and then, in the same code, provides the exception — which is why it is the useful case rather than a simple example of one pole.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The duty — section 152(2) StPO',
            description:
              'The prosecution "ist, soweit nicht gesetzlich ein anderes bestimmt ist, verpflichtet, wegen aller verfolgbaren Straftaten einzuschreiten, sofern zureichende tatsächliche Anhaltspunkte vorliegen": obliged, unless the law provides otherwise, to act on all prosecutable offences where sufficient factual indications are present. Note the qualifier built into the duty itself — "unless the law provides otherwise".',
          },
          {
            term: 'The exception — section 153 StPO',
            description:
              'Where the proceedings concern a Vergehen, the prosecution "kann … mit Zustimmung des für die Eröffnung des Hauptverfahrens zuständigen Gerichts von der Verfolgung absehen, wenn die Schuld des Täters als gering anzusehen wäre und kein öffentliches Interesse an der Verfolgung besteht" — may, with the consent of the court competent to open the main proceedings, refrain from prosecution where guilt would be regarded as minor and there is no public interest in prosecution. The court’s consent is not required for a Vergehen carrying no increased minimum penalty where the consequences caused are minor.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The binary fails on its own archetype',
        text: 'Germany is the system most often cited as the legality model, and its code gives prosecutors a statutory power to weigh minor guilt against the public interest and decline to proceed — with a court checking the judgement in the general case. That is a discretionary judgement inside a mandatory framework. Meanwhile the United States, cited as the discretion model, structures prosecution around offices whose remit is set by statute and whose federal officers are appointed and removable under defined provisions. Neither country is a pure type, and the family a system belongs to predicts neither answer.',
      },
      {
        kind: 'paragraph',
        text: 'Where discretion exists, its breadth still varies. The Bureau of Justice Statistics records that the chief local prosecutor in the United States holds broad discretion over who is charged, and that most are answerable to the public as elected officials — a form of control over discretion that no other system in this corpus uses.',
        claim: 'fact',
        sources: ['us-bjs-prosecutors'],
      },
      {
        kind: 'paragraph',
        text: 'And a system can constrain how a discretion is exercised without removing it. Kenya’s Constitution requires the Director of Public Prosecutions to have regard to the public interest, the interests of the administration of justice and the need to prevent and avoid abuse of the legal process in exercising the Article 157 powers. Spain’s Constitution gives the Ministerio Fiscal the mission of promoting the action of justice in defence of legality and the public interest, acting under the principles of unity of action and hierarchical dependence — structuring the judgement through the institution rather than through a stated test.',
        claim: 'fact',
        sources: ['ke-constitution', 'es-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'Common-law systems give prosecutors discretion and civil-law systems do not.',
        reality:
          'Germany, the standard example of a legality system, gives its prosecutors a statutory power to refrain from prosecuting minor offences where there is no public interest. The families do not predict the answer, and using them as a shortcut produces a wrong description of the archetype.',
      },
      {
        claim: 'A legality system prosecutes every offence it learns of.',
        reality:
          'Section 152(2) itself is qualified — "unless the law provides otherwise" — and section 153 is one of the provisions that provides otherwise. A duty with statutory exceptions is not an absolute rule.',
      },
      {
        claim: 'Discretion means a prosecutor may do as they please.',
        reality:
          'Where it exists it is exercised within a legal framework, and systems structure it in different ways: stated considerations in Kenya’s constitution, hierarchical unity of action in Spain’s, court consent for the German exception, electoral answerability for most chief local prosecutors in the United States.',
      },
      {
        claim: 'A discretion not to prosecute is a decision that no offence occurred.',
        reality:
          'The German provision applies where guilt would be regarded as minor and there is no public interest in prosecution — a judgement about whether to proceed, not a finding about what happened.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Rather than sorting systems into two boxes, the useful reading asks three questions of each.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Is acting on a met threshold a duty or a choice?',
          'If a duty, what exceptions does the law itself provide, and who checks their use?',
          'If a choice, what structures it — stated considerations, hierarchy, court consent, published guidance, or answerability to an electorate?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Germany answers: a duty; statutory exceptions for minor matters; and in the general case a court’s consent. The United States answers: a choice; and for most chief local prosecutors, election. Those are genuinely different designs, and neither is presented here as better.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Discretion is where a prosecution system is least visible. A case that is never brought produces no hearing, no judgment and no public reasoning, which is why systems that permit discretion generally attach something to it — published standards, a requirement of consent, a hierarchy that can be asked, or an office that must stand for election.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Neither pole is presented as better',
        text: 'A duty to prosecute removes the question of who is being favoured and removes the capacity to judge that a trial is the wrong response. A discretion supplies that judgement and creates the question. Both trade-offs are real, and this site takes no position between them.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [how charging decisions work](/prosecution/how-charging-decisions-work), [prosecutorial accountability](/prosecution/prosecutorial-accountability), and [Germany](/countries/germany).',
      },
    ],
  },
  {
    slug: 'why-prosecutorial-independence-matters',
    title: 'Why prosecutorial independence matters',
    shortTitle: 'Prosecutorial independence',
    question: 'What does it mean for a prosecutor to be independent, and independent of whom?',
    summary:
      'Eight systems in this corpus answer differently, and two of them are openly contested. Independence can mean a constitutional bar on direction, functional autonomy, an office’s own statement, or a hierarchy inside which instructions may not reach individual files.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'prosecutorial-accountability',
      'how-prosecution-systems-are-organised',
      'why-public-prosecution-exists',
    ],
    relatedInstitutions: ['prosecution-service', 'constitutional-court'],
    sources: [
      'ke-constitution',
      'ke-odpp',
      'br-cf-1988',
      'br-mpu-institucional',
      'ie-dpp',
      'es-constitution',
      'fr-justice-parquet',
      'de-gvg-147',
      'de-gvg-141',
      'ng-constitution',
      'us-attorneys-28usc541-547',
      'un-prosecutors-guidelines',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 11,
    keyTerms: ['prosecutor', 'rule-of-law'],
    uncertainty: [
      'This page describes constitutional and statutory arrangements, and in two cases an office’s statement about itself. It assesses no country’s prosecution service, ranks none, and does not establish that any prosecution is independent in practice.',
      'For France and Germany the adequacy of the arrangements is a live and long-running debate examined by European bodies. This site records the provisions and the existence of the dispute. It does not resolve it, in either direction.',
      'The relationship between United States Attorneys and the Attorney General, the degree of independence of elected local prosecutors, the appointment of Spain’s Fiscal General del Estado, and the relationship between Brazil’s Procurador-Geral and the executive that appoints them were not researched from primary sources and are not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Independence is not one property. A prosecution service can be free of instruction in individual cases and answerable for its general policy; it can be constitutionally insulated and internally hierarchical; it can be formally separate from government and led by an official the government appoints. Asking whether a prosecution service is independent, without saying of whom and in respect of what, produces an answer that cannot be checked.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Institutional independence',
            description:
              'Where the body sits — inside the executive, attached to the courts, or on its own constitutional footing — and who controls its budget and staffing.',
          },
          {
            term: 'Functional independence',
            description:
              'Whether the body may be directed in how it exercises its powers, and by whom.',
          },
          {
            term: 'Individual autonomy',
            description:
              'Whether a particular prosecutor may be instructed on a particular file, and by whom within the service.',
          },
          {
            term: 'Security of position',
            description:
              'Whether the people holding the office can be moved or removed, and on what grounds.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes arrangements recorded in constitutions, statutes and official sources. It is not legal advice, it assesses no country, and it makes no claim about how any prosecution service behaves.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The prosecuting power reaches individuals with serious consequences before anything has been determined, and it reaches them selectively — every prosecution is a case someone decided to bring. The risk that follows is specific: that the decision might turn on who the suspect is, or on who wants the case brought.',
      },
      {
        kind: 'paragraph',
        text: 'This is why prosecutorial independence is a harder institutional problem than judicial independence rather than a copy of it. Judges are visible: they sit in public, give reasons, and can be appealed. A decision not to prosecute produces no hearing and no judgment. So the safeguards have to be structural, because there is often nothing else to examine.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The arrangements in this corpus fall into positions that share almost nothing but the word.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A constitutional bar on direction — Kenya',
            description:
              'Article 157(10) provides that in exercising its powers the Director "shall not require the consent of any person or authority for the commencement of criminal proceedings and … shall not be under the direction or control of any person or authority". The bar is stated in the constitution and it is stated absolutely.',
          },
          {
            term: 'Functional autonomy outside all three branches — Brazil',
            description:
              'Article 127 makes the Ministério Público a permanent institution essential to the jurisdictional function of the State, with unity, indivisibility and functional independence as its institutional principles, and guarantees it functional and administrative autonomy. It is not part of the executive, the legislature or the judiciary.',
          },
          {
            term: 'An office’s own statement — Ireland',
            description:
              'The Director of Public Prosecutions states that she is "independent in the performance of her functions". This site reports that the office states it, which is a different claim from establishing it independently, and the difference is deliberate.',
          },
          {
            term: 'Hierarchy as a constitutional principle — Spain',
            description:
              'Article 124 gives the Ministerio Fiscal the mission of promoting the action of justice in defence of legality and the public interest, and provides that it acts "conforme a los principios de unidad de actuación y dependencia jerárquica" — unity of action and hierarchical dependence. Hierarchical dependence is written into the constitution as a principle of the institution, not recorded as a shortcoming of it.',
          },
          {
            term: 'Ministerial authority with a stated limit — France',
            description:
              'The Ministry of Justice states that magistrats du parquet act "sous l\'autorité du ministre de la Justice" and receive "des instructions générales du ministre de la Justice mais en aucun cas dans les dossiers judiciaires" — general instructions from the minister, but in no case instructions in individual judicial files. The same source records that, unlike the magistrats du siège, they do not have the guarantee of irremovability and may be reassigned without their consent.',
          },
          {
            term: 'Supervision allocated by statute — Germany',
            description:
              'Section 147 of the Courts Constitution Act allocates the right of supervision and direction explicitly, and the allocation follows the federal structure: the Federal Minister of Justice regarding the Generalbundesanwalt and the Bundesanwälte; the Land justice administration regarding all prosecution officials of that Land; and the senior official of the prosecution office at the higher regional and regional courts regarding officials in their district.',
          },
          {
            term: 'Inside the executive — Nigeria',
            description:
              'The Attorney-General of the Federation is "the Chief Law Officer of the Federation and a Minister of the Government of the Federation" under section 150, and holds the power to institute, take over or discontinue criminal proceedings for federal offences under section 174. Each state mirrors the arrangement.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Hierarchy is not political control',
        text: 'These are separate propositions and the sources keep them separate. Spain’s hierarchical dependence is a constitutional principle of a body whose mission is defence of legality. France’s hierarchy runs under ministerial authority, and the same source that establishes the authority establishes that instructions may never be given in individual files. Germany’s supervision is allocated by statute — and because the courts are overwhelmingly Land courts, no single ministry supervises prosecution across the country at all. A chain of supervision inside an institution is not evidence of direction from outside it, and describing it as such would state a conclusion these sources do not support.',
      },
      {
        kind: 'paragraph',
        text: 'Two of these arrangements are openly disputed, and this site says so rather than resolving them. Whether the French parquet is sufficiently independent of the executive, and whether German prosecutors are sufficiently insulated from executive influence, are live and long-running debates that European courts and bodies have examined. No page on this platform describes French or German prosecutors as either wholly independent of government or as taking ministerial instructions in individual cases, because the sources establish neither.',
        claim: 'fact',
        sources: ['fr-justice-parquet', 'de-gvg-147'],
      },
    ],
    misconceptions: [
      {
        claim: 'A prosecution service outside the executive is independent.',
        reality:
          'Position is one arrangement among four. Brazil’s Ministério Público sits outside all three branches and this corpus expressly does not characterise how its autonomy operates. Where a body sits does not establish how it behaves.',
      },
      {
        claim: 'A hierarchical prosecution service is politically controlled.',
        reality:
          'Spain’s hierarchical dependence is a constitutional principle of an institution whose stated mission is the defence of legality. France’s hierarchy operates under a rule that instructions may never be given in individual judicial files. Hierarchy describes an internal chain, not an external one.',
      },
      {
        claim: 'A constitution saying a prosecutor is independent settles the question.',
        reality:
          'It establishes an arrangement. Whether the arrangement functions is an empirical question about appointments, budgets, pressure and practice, which no constitutional text can answer and which this site does not attempt from text alone.',
      },
      {
        claim: 'Independence means a prosecution service answers to no one.',
        reality:
          'The arrangements described on this site coexist with reporting duties, hierarchies, court consent requirements and, for most chief local prosecutors in the United States, election. What independence protects against is improper direction, not being answerable, which the prosecutorial accountability page sets out.',
      },
      {
        claim: 'Prosecutorial independence works the same way as judicial independence.',
        reality:
          'Judges decide in public and give reasons that can be appealed. A decision not to prosecute produces no hearing and no reasoned judgment, so the same guarantees do not do the same work.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The disciplined way to read a claim of prosecutorial independence is to ask what kind of statement is being made.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A constitutional or statutory bar on direction — Kenya, Article 157(10).',
          'A constitutional guarantee of functional and administrative autonomy — Brazil, Article 127.',
          'A statement by the office about itself — Ireland.',
          'A stated limit inside a relationship of authority — France, where instructions may not reach individual files.',
          'A statutory allocation of who may supervise whom — Germany, section 147 GVG.',
          'A constitutional principle of hierarchical dependence — Spain, Article 124.',
          'No separation claimed — Nigeria, where the prosecuting authority is a serving minister.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Those are seven different kinds of proposition, not seven degrees of one. Reading any of them through another country’s vocabulary — describing Spain’s Ministerio Fiscal in the language used for Ireland’s DPP, for instance — asserts something the Spanish constitution does not say and contradicts something it does.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The United Nations Guidelines on the Role of Prosecutors address the impartiality expected of prosecutors and the separation of prosecutorial from judicial functions. That is an international standard, and it establishes what is expected rather than what any state provides. Where this page describes a country, it does so from that country’s own instruments.',
        claim: 'fact',
        sources: ['un-prosecutors-guidelines'],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Formal arrangement and working practice are different claims',
        text: 'Everything above is drawn from constitutions, statutes and official descriptions. Whether appointments are made on the stated criteria, whether budgets are used as leverage, whether informal expectations do work that formal instructions may not — none of that can be read off a text, and none of it is claimed here. Where this site says a country provides an arrangement, it is describing the arrangement.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [prosecutorial accountability](/prosecution/prosecutorial-accountability), [why judicial independence matters](/courts/why-judicial-independence-matters), and [how prosecution systems are organised](/prosecution/how-prosecution-systems-are-organised).',
      },
    ],
  },
  {
    slug: 'prosecutorial-accountability',
    title: 'Prosecutorial accountability',
    shortTitle: 'Prosecutorial accountability',
    question: 'If prosecutors are independent, who holds them to account?',
    summary:
      'Independence and accountability answer different questions, so a system can provide both. What varies is the mechanism — hierarchy, court consent, reporting, published standards, or an office that must stand for election.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-prosecutorial-independence-matters',
      'prosecutorial-objectivity',
      'prosecutorial-discretion-and-legality',
    ],
    relatedInstitutions: ['prosecution-service', 'ombuds-and-rights-institution'],
    sources: [
      'de-stpo-153-geringfuegigkeit',
      'de-stpo-170-anklageerhebung',
      'de-gvg-147',
      'us-bjs-prosecutors',
      'us-attorneys-28usc541-547',
      'es-constitution',
      'ke-constitution',
      'br-cf-1988',
      'ie-dpp',
      'un-prosecutors-guidelines',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['prosecutor', 'accountability'],
    uncertainty: [
      'Disciplinary systems, complaint procedures, inspectorates and the reviewability of prosecutorial decisions were not researched from primary sources for any system here. The mechanisms described are those the corpus establishes, and the absence of others is a gap in the research.',
      'Nothing here establishes that any mechanism works. A mechanism existing and a mechanism functioning are different claims, and only the first is made.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The two ideas are often set against each other, as though holding a prosecution service to account meant reducing its independence. They answer different questions. Independence asks who may direct a decision. Accountability asks who may examine it afterwards, and on what basis.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Neither implies the other’s absence',
        text: 'Prosecutorial independence does not mean an absence of accountability, and prosecutorial accountability does not necessarily mean political direction. A service can be barred from taking instructions on a file and still be required to publish standards, report on its work, obtain a court’s consent for defined decisions, and answer for how it exercised a power. Those are examinations of a decision already made, not directions about how to make it.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes mechanisms that exist. It is not legal advice, it does not explain how to complain about a prosecution decision, and it assesses no service.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Accountability is harder here than for courts, and for a structural reason worth stating plainly: the most consequential prosecutorial decisions are frequently the least visible. A case that is never brought produces no hearing, no judgment and no public reasoning. There is often nothing to appeal, because nothing happened.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'That is why the mechanisms in this area tend to be built in advance rather than applied afterwards — a threshold written down, a consent required, a standard published, a report owed. They create something to examine where the decision itself would leave no trace.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'A court’s consent to a decision not to proceed',
            description:
              'Germany’s section 153 StPO generally requires the consent of the court competent to open the main proceedings before the prosecution may refrain from prosecuting a minor matter. The check is placed on the decision most likely to escape notice, and it is placed with a body outside the prosecution.',
          },
          {
            term: 'A duty to notify the person affected',
            description:
              'Section 170(2) StPO requires the prosecution, on terminating proceedings, to notify the accused where he was questioned as such, where a warrant of arrest had been issued, where he asked for a decision, or where a particular interest in notification is apparent. A decision that must be communicated is a decision someone can question.',
          },
          {
            term: 'A statutory line of supervision',
            description:
              'Germany’s section 147 GVG names who holds the right of supervision and direction over which prosecutors. Hierarchy here functions as an accountability mechanism inside the institution — someone identifiable is answerable for a subordinate’s decisions.',
          },
          {
            term: 'Constitutional unity of action',
            description:
              'Spain’s Article 124 binds the Ministerio Fiscal to unity of action and hierarchical dependence. A single national body acting as one is answerable as one, and inconsistency between offices is a matter the institution itself must resolve.',
          },
          {
            term: 'Answerability to an electorate',
            description:
              'The Bureau of Justice Statistics records that the chief local prosecutor in the United States is "answerable to the public as an elected or appointed public official". Most are locally elected — a mechanism no other system in this corpus uses for prosecutors, and one that ties accountability directly to the public rather than through an institution.',
          },
          {
            term: 'Appointment and removal under defined provisions',
            description:
              'United States Attorneys are appointed by the President with the advice and consent of the Senate under 28 U.S.C. § 541, for a four-year term, and are subject to removal by the President. Who appoints and who may remove is itself a form of answerability, and a different one from election.',
          },
          {
            term: 'Constitutionally stated considerations',
            description:
              'Kenya’s Constitution requires the Director to have regard to the public interest, the interests of the administration of justice and the need to prevent and avoid abuse of the legal process. A power exercised against stated considerations can be assessed against them.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Brazil adds a mechanism that runs in the other direction. The Ministério Público exercises external control over police activity — an accountability function held by the prosecuting institution over another institution, rather than over itself. It is a reminder that a prosecution service can be a mechanism of accountability as well as a subject of one.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'An independent prosecutor is unaccountable.',
        reality:
          'The systems described here combine insulation from direction with reporting, published standards, hierarchies, consent requirements and — in most of the United States — election. Independence bars direction on a decision; it does not bar examination of one.',
      },
      {
        claim: 'Holding prosecutors to account means letting politicians direct them.',
        reality:
          'Court consent, notification duties, stated statutory considerations and published standards are all accountability mechanisms, and none of them is a political direction. Conflating the two argues for removing safeguards in the name of installing them.',
      },
      {
        claim: 'Every prosecutorial decision can be challenged in court.',
        reality:
          'The reviewability of prosecutorial decisions varies by system and was not researched here. Germany places a court’s consent on a specific class of decision under section 153; that is a defined requirement, not a general right of review, and this site claims nothing broader.',
      },
      {
        claim: 'A decision not to prosecute is unexaminable because nothing happened.',
        reality:
          'That is the risk the mechanisms are built against. Germany requires notification under section 170(2) and, for minor matters under section 153, a court’s consent — so the decision leaves a record and, in the general case, passes through another body.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Mechanisms fall into three kinds, and systems combine them differently rather than choosing one.',
      },
      {
        kind: 'list',
        items: [
          'Before the decision: written thresholds, published standards, stated considerations.',
          'At the decision: a court’s consent, a hierarchy that must approve, a duty to notify.',
          'After the decision: reporting, election, appointment and removal, external control functions.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Germany uses all three. The United States relies heavily on the third for local prosecutors and on statutory remit for federal ones. Spain places the weight on institutional unity. Those are different answers to the same problem.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a person affected by a prosecution decision, the mechanisms above are what make it possible to ask why. That is a modest thing and it is not nothing: a decision that must be recorded, communicated, or consented to is a decision that has to be capable of being explained.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Criticism is not interference',
        text: 'Examining a prosecution decision, publishing an assessment of it, or asking an office to account for it are not attacks on prosecutorial independence. What independence protects against is direction and reprisal in the exercise of the power, not scrutiny of how it was exercised.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why prosecutorial independence matters](/prosecution/why-prosecutorial-independence-matters), [prosecutorial objectivity](/prosecution/prosecutorial-objectivity), and [how police are held to account](/law-enforcement/how-police-are-held-to-account).',
      },
    ],
  },
  {
    slug: 'prosecutorial-objectivity',
    title: 'Prosecutorial objectivity',
    shortTitle: 'Prosecutorial objectivity',
    question: 'Is a prosecutor a party to the case, or something else?',
    summary:
      'Several systems impose duties that cut against winning — establishing what exonerates as well as what incriminates, and disclosing material that damages the prosecution’s own case. Those duties are national, and this page attributes each to its source.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'prosecutorial-accountability',
      'prosecution-and-presumption-of-innocence',
      'why-public-prosecution-exists',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-160',
      'de-stpo-152-legalitaetsgrundsatz',
      'es-constitution',
      'br-cf-1988',
      'ke-constitution',
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
    keyTerms: ['prosecutor', 'disclosure', 'evidence'],
    uncertainty: [
      'Duties of objectivity and disclosure are creatures of each national system. Germany’s statutory objectivity duty is established here from the code; other systems appear only where a source supports the specific statement made about them.',
      'This page does not describe any system’s disclosure rules in operational detail, and it does not state what a prosecutor must disclose in any jurisdiction.',
      'That a duty exists in law establishes nothing about compliance with it, which this corpus does not examine.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'In an ordinary lawsuit each side puts its own case and the tribunal decides between them. Criminal prosecution is not straightforwardly that, and several systems say so in their own law: the prosecutor is not simply the state’s advocate but the holder of a public function, with duties that would make no sense for a party trying to win.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains duties that distinguish prosecution from advocacy for one side. It is not legal advice, it states no jurisdiction’s disclosure rules, and it does not describe how to comply with or challenge them.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason is asymmetry. The state has investigators, powers of compulsion, forensic capacity and the file. The person accused has, at the outset, none of that and frequently does not know what exists. A process where both sides simply advanced their strongest case would not be a fair contest, because the contest is not between equals.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Duties of objectivity are one of the ways systems answer that. They do not make the prosecutor neutral between the parties. They make the prosecutor answerable for the completeness of what the process is given to work with.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Germany writes the duty into the provision that requires the investigation itself. Section 160(2) of the Code of Criminal Procedure requires the Staatsanwaltschaft to establish not only incriminating but also exculpatory circumstances, and to secure evidence. The obligation to look for what exonerates sits in the same section that obliges the prosecution to investigate at all — it is part of the duty, not a qualification on it.',
        claim: 'fact',
        sources: ['de-stpo-160'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A duty that only makes sense for a public function',
        text: 'An advocate for one side who searched for material assisting the other would be doing their job badly. A prosecutor under section 160(2) who did not would be failing a statutory duty. That difference is the clearest statement available of what the prosecuting role is: the office is answerable for the integrity of the case, not for its success.',
      },
      {
        kind: 'paragraph',
        text: 'Other systems locate the same idea in the institution’s constitutional mission rather than in a procedural duty. Spain’s Article 124 gives the Ministerio Fiscal the mission of promoting the action of justice in defence of legality and the public interest. Brazil’s Article 127 charges the Ministério Público with defending the legal order, the democratic regime and inalienable social and individual interests. Kenya requires its Director to have regard to the interests of the administration of justice and the need to prevent and avoid abuse of the legal process.',
        claim: 'fact',
        sources: ['es-constitution', 'br-cf-1988', 'ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Internationally, the United Nations Guidelines on the Role of Prosecutors address the impartiality expected of prosecutors and their duty to protect the public interest. That establishes an expected standard. It does not establish the law of Germany, Spain, Brazil or Kenya, and where this page states what those systems require, it does so from their own instruments.',
        claim: 'fact',
        sources: ['un-prosecutors-guidelines'],
      },
    ],
    misconceptions: [
      {
        claim:
          'The prosecutor is the state’s advocate and should argue as forcefully as possible.',
        reality:
          'Germany’s section 160(2) requires the prosecution to establish exculpatory circumstances as well as incriminating ones. A duty to look for what damages your own case is not an advocate’s duty.',
      },
      {
        claim: 'Objectivity means the prosecutor is neutral about the outcome.',
        reality:
          'A prosecutor who has charged a case presents it. What the duties require is completeness and legality in how it is presented, not indifference to whether it succeeds.',
      },
      {
        claim: 'International standards impose these duties everywhere.',
        reality:
          'The United Nations Guidelines state an expected standard for prosecutors. They are not the domestic law of any country, and a page treating them as such would be asserting law that does not exist.',
      },
      {
        claim: 'A duty written into a code means it is observed.',
        reality:
          'That a duty exists is a fact about the law. Whether it is complied with is a separate question, and one this site does not examine.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Systems locate the same commitment in different instruments, and where they locate it changes what it does.',
      },
      {
        kind: 'list',
        items: [
          'As a procedural duty inside the investigation provision — Germany, section 160(2) StPO.',
          'As the constitutional mission of the institution — Spain, Article 124; Brazil, Article 127.',
          'As considerations governing the exercise of a power — Kenya, Article 157(11).',
          'As an international expected standard — the United Nations Guidelines, which bind no state directly.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'A duty written into the code governs an individual prosecutor handling a file. A constitutional mission governs the institution and shapes what its officers are for. Both are real, and they are not interchangeable.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Fair-trial guarantees under the International Covenant on Civil and Political Rights, including the requirement of adequate time and facilities to prepare a defence, are among the obligations that shape prosecutorial practice in states party to it.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'The other side of this',
        text: 'The duties described here exist because someone is answering the state’s case. What that person is entitled to — to know what is alleged, to see and test the material, to have legal help — is a subject in its own right that this site will develop separately. It is named here because a page about prosecutorial objectivity that never mentioned the accused would have lost the reason the duties exist.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [disclosure](/glossary/disclosure), [prosecutorial accountability](/prosecution/prosecutorial-accountability), and [what a prosecutor does](/prosecution/what-does-a-prosecutor-do).',
      },
    ],
  },
  {
    slug: 'prosecution-and-presumption-of-innocence',
    title: 'Prosecution and the presumption of innocence',
    shortTitle: 'Prosecution and the presumption',
    question:
      'What does the presumption of innocence require of the institution bringing the case?',
    summary:
      'A charge is an allegation the state undertakes to prove, not a finding it has been proved. The presumption is not a courtesy extended to the accused — it places the obligation on the prosecuting side and keeps it there.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'how-charging-decisions-work',
      'prosecutorial-objectivity',
      'why-public-prosecution-exists',
    ],
    relatedInstitutions: ['prosecution-service'],
    sources: [
      'de-stpo-170-anklageerhebung',
      'de-stpo-160',
      'ke-constitution',
      'br-cf-1988',
      'udhr',
      'iccpr',
      'un-prosecutors-guidelines',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['presumption-of-innocence', 'prosecutor', 'due-process'],
    uncertainty: [
      'The general principle is stated here from international instruments. How the presumption operates procedurally — what must be proved, to what standard, and by whom at each stage — is set by each system and is not described.',
      'This page addresses what the presumption asks of the prosecuting institution. The rights of the person answering the case are named but not developed; that is a subject in its own right.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The presumption of innocence is usually explained from the accused person’s side: they are treated as not guilty until guilt is proved. Stated from the other side it says something more demanding about the institution bringing the case — the obligation to prove rests with the state, and it does not shift because a charge has been brought.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Where the burden sits is the whole of it',
        text: 'A charge is not a preliminary finding that the accused must now displace. It is the state undertaking to establish something. That is why a decision to charge, however carefully made and however high the threshold, changes nothing about who has to prove what.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains what the presumption asks of a prosecuting institution. It is not legal advice, it describes no country’s rules of proof, and it says nothing about any individual case.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The reason is what a prosecution costs a person before anything is decided. Being charged is public, disruptive and frequently ruinous, and it happens on the strength of an assessment made by one side. If that assessment also shifted the obligation to prove, the assessment would effectively be the verdict.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle that everyone charged with a penal offence has the right to be presumed innocent until proved guilty according to law in a public trial at which they have had all the guarantees necessary for their defence. The International Covenant on Civil and Political Rights carries fair-trial guarantees including the requirement of adequate time and facilities to prepare a defence.',
        claim: 'fact',
        sources: ['udhr', 'iccpr'],
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Three consequences follow for the prosecuting institution, and each is visible in the arrangements described elsewhere in this cluster.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'The threshold is not a finding',
            description:
              'Charging tests assess material. Germany’s section 170(1) asks whether the investigations offer sufficient reason to bring the public charge — a judgement about whether to put the case, not about whether it is true. Meeting a threshold and proving a case are different acts performed by different bodies.',
          },
          {
            term: 'The duty to look both ways survives the charge',
            description:
              'Germany’s section 160(2) requires the prosecution to establish exculpatory as well as incriminating circumstances. A body that has charged is still obliged to find what tells against its own case, which only makes sense if the question is genuinely open.',
          },
          {
            term: 'Not proceeding is not a finding either',
            description:
              'Section 170(2) has the prosecution terminate proceedings where the investigations do not offer sufficient reason. That establishes that a threshold was not met on the available material. It does not establish that nothing happened, and it does not clear or condemn anyone.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'The point extends to how institutions describe their own work. Kenya’s Constitution requires the Director of Public Prosecutions to have regard to the need to prevent and avoid abuse of the legal process, and Brazil charges the Ministério Público with defending the legal order. A prosecuting institution that treated a charge as a conclusion would be misdescribing its own function under either provision.',
        claim: 'fact',
        sources: ['ke-constitution', 'br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Being charged means the authorities have concluded the person did it.',
        reality:
          'A charging decision assesses whether a case should be put. It is the beginning of a process for establishing what happened, not the result of one.',
      },
      {
        claim: 'A person who has been charged is a criminal.',
        reality:
          'They are an accused person, or a defendant, depending on the stage and the system. The word for someone convicted of an offence does not apply to someone answering an allegation, and using it treats a process as though it had already concluded.',
      },
      {
        claim: 'The presumption is a technicality that makes prosecution harder.',
        reality:
          'It allocates the obligation to prove. Without that allocation, a charge would be enough on its own, and the process that follows would have nothing left to determine.',
      },
      {
        claim: 'A case dropped before trial means the person was cleared.',
        reality:
          'It means the applicable threshold was not met on the available material, or that a statutory basis for not proceeding applied. Neither is a finding about what happened.',
      },
      {
        claim: 'The presumption only matters at trial.',
        reality:
          'The duties that survive the charge — to establish exculpatory circumstances, to act within stated considerations — operate during the prosecution, not only in the courtroom.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The principle is widely shared; the vocabulary is not, and the vocabulary matters because it carries assumptions.',
      },
      {
        kind: 'list',
        items: [
          'Suspect — a person under investigation, before any charge.',
          'Accused or defendant — a person against whom a case has been brought.',
          'Convicted person — a person a court has found guilty.',
          'Complainant or victim — terms that also differ between systems and stages.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'This site uses these terms according to the stage rather than interchangeably, and does not use the language of offending for a person who has not been convicted. That is an editorial rule rather than a stylistic preference: describing an accused person as an offender states the conclusion the process exists to reach.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The presumption is also what makes the rest of the process intelligible. Testing evidence, requiring reasons, permitting appeal and imposing duties of objectivity are all activities that presuppose the question is open. A system confident of the answer at the point of charge would need none of them.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Answering the case',
        text: 'The presumption sits alongside the ability to answer: to know what is alleged, to see and test the material relied on, and to have legal help in doing so. Those rights are the subject of their own cluster on this site. They are named here because a presumption without the means to exercise it would be a statement rather than a safeguard.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what the presumption of innocence is](/justice/what-is-the-presumption-of-innocence), [how charging decisions work](/prosecution/how-charging-decisions-work), and [why courts matter](/courts/why-courts-matter).',
      },
    ],
  },
  {
    slug: 'how-prosecution-systems-are-organised',
    title: 'How prosecution systems are organised',
    shortTitle: 'How prosecution is organised',
    question: 'Does a country have one prosecution service, several, or none?',
    summary:
      'All three answers occur. Spain has a single national body; Germany has offices attached to every court and no national service; the United States has federal prosecutors and separately organised state and local prosecution; Nigeria places the power in serving ministers.',
    entityType: 'concept',
    section: 'prosecution',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'why-prosecutorial-independence-matters',
      'why-public-prosecution-exists',
      'federal-and-state-court-systems',
    ],
    relatedInstitutions: ['prosecution-service', 'federal-investigative-agency'],
    sources: [
      'de-gvg-141',
      'de-gvg-147',
      'es-constitution',
      'us-attorneys-28usc541-547',
      'us-bjs-prosecutors',
      'us-const-amend-10',
      'ng-constitution',
      'br-cf-1988',
      'ke-constitution',
      'ie-dpp',
      'fr-justice-parquet',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['prosecutor', 'jurisdiction'],
    uncertainty: [
      'This page describes how prosecuting authority is distributed. It does not describe any individual American state’s, German Land’s or Nigerian state’s prosecution arrangements, which would require that jurisdiction’s own sources.',
      'Switzerland’s, Canada’s and Australia’s prosecution structures were not researched from primary sources for this wave and are not described. Their absence is a gap in the research rather than a finding.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'It is natural to assume every country has a prosecution service in the way it has an army or a central bank — one institution, nationally organised. Several do not, and the ways they do not are structurally different from each other rather than variations on a theme.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This compares how prosecuting authority is distributed. It is not legal advice, it describes no jurisdiction’s internal structure in detail, and it ranks no arrangement.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The distribution question has two drivers. Criminal law may be made at more than one level, and prosecution has to reach each body of law. And prosecution has to be organised near the courts that will hear the cases, which in federal systems are frequently not national courts.',
      },
      {
        kind: 'paragraph',
        text: 'Those pull in different directions — toward national consistency and toward local organisation — and each system’s structure is a resolution of that tension rather than an administrative accident.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'One national body — Spain',
            description:
              'The Ministerio Fiscal is a single national institution with its constitutional basis in Article 124, acting under unity of action and hierarchical dependence. Spain is substantially decentralised in policing and prisons; prosecution is the part that is the same everywhere. A case in Catalonia investigated by the Mossos d’Esquadra is prosecuted by the same national body as a case anywhere else.',
          },
          {
            term: 'No national service, offices attached to courts — Germany',
            description:
              'Section 141 GVG: "Bei jedem Gericht soll eine Staatsanwaltschaft bestehen" — a prosecution office shall exist at every court. Because the courts are overwhelmingly Land courts, the offices are overwhelmingly Land institutions. The Generalbundesanwalt sits at federal level with defined competences, and the great majority of prosecution is conducted by Land offices.',
          },
          {
            term: 'Two systems, one federal and fifty state — the United States',
            description:
              'There is no single prosecution service. Federal prosecution is conducted by United States Attorneys, one per judicial district, appointed under 28 U.S.C. § 541 and prosecuting for offences against the United States under § 547. State and local prosecution is organised separately by each state, in the executive branch of state government, and handles the great majority of criminal cases.',
          },
          {
            term: 'Dual, and inside the executive — Nigeria',
            description:
              'The Attorney-General of the Federation is the Chief Law Officer and a Minister of the Government of the Federation, with power to institute, take over or discontinue proceedings for federal offences. Each state mirrors this with a State Attorney-General who is Chief Law Officer and Commissioner for Justice, holding the same powers for state offences.',
          },
          {
            term: 'One body, on its own constitutional footing — Brazil',
            description:
              'The Ministério Público holds the public criminal action exclusively and sits outside the executive, the legislature and the judiciary, with functional and administrative autonomy.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Supervision follows the structure, and can run out',
        text: 'Germany’s section 147 GVG allocates the right of supervision and direction along the federal structure exactly: the Federal Minister of Justice regarding federal prosecutors, the Land justice administration regarding that Land’s prosecutors, and senior prosecution officials within their district. Read alongside the fact that the offices are overwhelmingly Land institutions, something follows that has no counterpart in a unitary system — the federal minister’s supervisory power reaches federal prosecutors and stops there. No single ministry supervises prosecution across Germany.',
      },
      {
        kind: 'paragraph',
        text: 'Titles vary with structure, and the variation defeats translation. The Bureau of Justice Statistics records that the chief local prosecutor in the United States is "also referred to as the district attorney, county attorney, commonwealth attorney, or state’s attorney", that the title varies by state, and that so does the selection method — most are locally elected, some appointed. That is a sharp contrast with the appointed federal United States Attorneys and with the career services of France and Germany, and forcing all of them into one label would misdescribe the office.',
        claim: 'fact',
        sources: ['us-bjs-prosecutors'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has a national prosecution service.',
        reality:
          'Germany has prosecution offices attached to each court rather than a national service. The United States has no national prosecution service either; most criminal cases are handled by separately organised state and local prosecutors.',
      },
      {
        claim: 'A federal country has federal prosecutors supervising state ones.',
        reality:
          'In Germany the federal minister’s supervisory power under section 147 GVG reaches federal prosecutors and stops. In Nigeria the federal and state Attorneys-General hold parallel powers over their own bodies of offences.',
      },
      {
        claim: 'Decentralised countries have decentralised prosecution.',
        reality:
          'Spain is the counter-case. Policing and prisons are asymmetric across the Autonomous Communities; the Ministerio Fiscal is a single national body under Article 124.',
      },
      {
        claim: '"District attorney" is the American word for prosecutor.',
        reality:
          'It is one of several state titles alongside county attorney, commonwealth attorney and state’s attorney, and none of them describes the federal United States Attorneys. There is no single American term.',
      },
      {
        claim: 'Ministério Público is Portuguese for prosecution service.',
        reality:
          'It holds the public criminal action exclusively, and also conducts civil proceedings for diffuse and collective interests and exercises external control over police activity. Describing it as Brazil’s prosecution service is true and radically incomplete.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two questions separate every arrangement here, and they are independent of each other.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Is prosecuting authority held by one body, several parallel bodies, or officers attached to individual courts?',
          'Where does that authority sit — inside the executive, within the magistrature, or on a separate constitutional footing?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Spain answers one body, national. Germany answers offices per court, supervised through the federal structure. The United States answers two systems with no national standard for the larger one. Nigeria answers two, both inside the executive. Brazil answers one, outside all three branches. Five systems, five different pairs of answers.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Structure determines what consistency is possible and what accountability is available. A single national body can be asked why two similar cases were treated differently. A country with thousands of separately organised prosecuting offices cannot answer that question institutionally at all, and relies on other mechanisms — in most of the United States, election.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'No arrangement is ranked here',
        text: 'A single national service buys consistency and concentrates the power. Dispersed prosecution places the decision near the community affected and gives up national uniformity. Both trade-offs are real, and this site takes no position between them.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [courts in federal systems](/courts/federal-and-state-court-systems), [why prosecutorial independence matters](/prosecution/why-prosecutorial-independence-matters), and [Brazil](/countries/brazil).',
      },
    ],
  },
];
