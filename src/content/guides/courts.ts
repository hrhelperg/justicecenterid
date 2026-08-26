import type { Guide } from '../types';

/**
 * Wave 9 — the courts cluster.
 *
 * These guides own STRUCTURAL and COMPARATIVE intent. The glossary already owns `court`,
 * `judicial-independence`, `judicial-review`, `appeal`, `jurisdiction`, `due-process` and
 * `rule-of-law`; `/professions/judge` owns the judicial role; `what-do-courts-do` owns the
 * function question. What was left unowned is how court systems are organised and how they
 * differ — which is what every page here holds.
 *
 * NEUTRALITY. No system is ranked. Formal legal guarantees are never presented as evidence of
 * empirical performance, and no country is described as having an independent judiciary except
 * where a source establishes the arrangement being described.
 */
export const COURTS_GUIDES: readonly Guide[] = [
  {
    slug: 'why-courts-matter',
    title: 'Why courts matter',
    shortTitle: 'Why courts matter',
    question: 'Why do courts matter — to public order, and to individual liberty?',
    summary:
      'Courts settle disputes without force, test accusations before they count, and measure the state’s own acts against law. They matter to order and to liberty for the same reason: a decision no one can review is not a decision anyone has to justify.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['what-do-courts-do', 'why-judicial-independence-matters', 'court-hierarchy'],
    relatedInstitutions: ['constitutional-court', 'prosecution-service'],
    sources: [
      'cicero-pro-cluentio-146',
      'de-grundgesetz',
      'ie-courts-service',
      'nl-constitution',
      'es-constitution',
      'udhr',
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
    keyTerms: ['court', 'rule-of-law', 'due-process'],
    uncertainty: [
      'This page explains what courts are for. It establishes nothing about whether any particular court or system performs well, and it makes no comparison between countries.',
      'The functions described here are what courts are designed to do. That a function exists is a fact about institutional design, not evidence that it is discharged.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Courts matter for a reason that sounds procedural and is not. Almost every other way of settling a serious disagreement — force, wealth, rank, or whoever holds office this year — resolves it in favour of whoever is stronger. A court is an attempt to make the outcome turn on something else: what the law says, applied to what actually happened, with reasons given.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why adjudication matters as an institution. It is not legal advice, it does not describe how to bring or defend a case, and it does not assess the performance of any court or country.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The usual framing sets order against liberty, as though courts served one at the expense of the other. They serve both, and by the same mechanism.',
        claim: 'analysis',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'For public order',
            description:
              'A society needs disputes to end. Not to end correctly every time — to end, in a way the losing side can live with because the process was one they could take part in. A court that gives reasons and can be appealed converts a conflict into a decision. Without that, the alternatives are private settlement or nothing.',
          },
          {
            term: 'For individual liberty',
            description:
              'An accusation is not a finding. The state can investigate, arrest and prosecute, and every one of those steps happens before anything has been established. A court is where the state has to show its case to someone who did not build it, against a person entitled to answer.',
          },
          {
            term: 'For the state itself',
            description:
              'Courts also decide whether public bodies acted within their powers. That is the part most easily forgotten: the same institution that determines whether a person broke the law determines whether the government did.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Three functions, deliberately separated',
        text: 'A simplified model runs through this whole site. The police investigate. The prosecution presents the public case. The defence protects the accused person’s legal interests. The court adjudicates. Separating these means the body that decides is not the body that accused — and is not the body that gathered the evidence either. This is an educational model rather than a universal procedural rule: systems allocate these functions differently, and several of the arrangements described elsewhere on this site combine two of them in one magistracy.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'What courts contribute is not certainty. It is a set of conditions under which a decision can be relied on, each of which is worth naming separately.',
      },
      {
        kind: 'list',
        items: [
          'The decision is made by someone who is not a party to it.',
          'Both sides can put their case, and can see and challenge what is said against them.',
          'Reasons are given, so the decision can be examined rather than merely obeyed.',
          'The decision can be challenged through a defined process rather than by force or influence.',
          'Like cases are decided alike, so people can predict where they stand before they act.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Those conditions also explain what the defence is for, which is a subject this site will develop separately. A person facing the state’s case needs to be able to answer it: to know what is alleged, to have legal help, to be heard before a decision is made, to test the evidence against them, and where the law provides for it, to appeal. They are also entitled to be treated as innocent until the case is proved — the presumption of innocence is not a courtesy extended to the accused but a statement about where the burden lies. None of these rights is an obstacle to the court’s work. They are the conditions under which its conclusion means anything.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Courts are not assumed to be right',
        text: 'Nothing on this page implies that courts reach correct outcomes. Appeal, review and the correction of error exist precisely because they do not always. A system that treated its own decisions as beyond question would have removed the mechanism that makes them worth relying on.',
      },
    ],
    misconceptions: [
      {
        claim: 'Courts exist mainly to punish people who break the law.',
        reality:
          'Punishment is one outcome of one kind of case. Courts also settle civil disputes between private parties and decide whether public bodies acted within their powers — including against the government that appointed the judges.',
      },
      {
        claim: 'Respecting courts means accepting their decisions without criticism.',
        reality:
          'Appeal, review and public argument are the lawful ways of disagreeing, and using them is a form of taking a court seriously. What respect for courts rules out is ignoring decisions or attacking the institution rather than the reasoning.',
      },
      {
        claim: 'If a court decided it, it was correct.',
        reality:
          'Appeal and review exist because courts make mistakes. A system that treated its decisions as beyond question would have removed the mechanism that makes them worth relying on.',
      },
      {
        claim: 'Every court can strike down a law that conflicts with the constitution.',
        reality:
          'Article 120 of the Netherlands Constitution forbids the courts from reviewing the constitutionality of Acts of Parliament. Where the power exists it is allocated deliberately, sometimes to one court alone.',
      },
      {
        claim: 'A person accused in court has effectively been found guilty.',
        reality:
          'The court is where an accusation is tested, not where it is confirmed. The whole structure — hearing both sides, giving reasons, allowing appeal — exists because the question is still open when proceedings begin.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'What courts are for is broadly shared. How much power they hold over the other branches is not, and the range is wider than most readers expect.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Courts that can annul legislation',
            description:
              'Germany’s Basic Law vests judicial power in the Federal Constitutional Court, the federal courts and the courts of the Länder, and the Constitutional Court exercises constitutional jurisdiction over legislation.',
          },
          {
            term: 'Courts forbidden to review legislation',
            description:
              'The Netherlands. Article 120 of the Constitution forbids the courts from reviewing the constitutionality of Acts of Parliament. The place a constitutional court occupies in other systems is, there, deliberately empty — and the Dutch courts are not thereby less courts.',
          },
          {
            term: 'One judiciary or several',
            description:
              'Spain makes the unity of jurisdiction the basis of its court organisation. Germany runs several separate branches. Both are recognisable court systems, and a description that fits one will not fit the other.',
          },
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The oldest surviving statement of why this matters is also the most misquoted. In Pro Cluentio Cicero writes: "Legum ministri magistratus, legum interpretes iudices, legum denique idcirco omnes servi sumus ut liberi esse possimus" — magistrates are the ministers of the laws, judges are the interpreters of the laws, and finally we are all servants of the laws, so that we may be free.',
        claim: 'fact',
        sources: ['cicero-pro-cluentio-146'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The sentence is usually quoted with its point removed',
        text: 'It circulates as "legum servi sumus ut liberi esse possimus" — we are servants of the laws so that we may be free — which drops "omnes" and both preceding clauses. What is dropped is the half about officials. Cicero names magistrates and judges as bound by law BEFORE he says anything about the rest of us, and the sentences immediately following ask the presiding judge and the jurors what entitles them to sit and to judge at all. Read whole, it is an argument about the authority of courts being derived from and limited by law. Read truncated, it becomes an argument for obedience, which is the opposite of what the passage is doing.',
      },
      {
        kind: 'paragraph',
        text: 'That distinction matters for what respect for courts means. It does not mean agreeing with judgments, and it does not mean that a decision is beyond criticism. It means using the lawful means of challenging a decision — appeal, review, and argument in public — rather than ignoring it or attacking the institution that made it. Criticising a judgment and appealing it are both forms of taking a court seriously.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle of a right to an effective remedy by a competent tribunal for acts violating fundamental rights, and to a fair and public hearing by an independent and impartial tribunal in the determination of any criminal charge.',
        claim: 'fact',
        sources: ['udhr'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [what courts do](/courts/what-do-courts-do), [why judicial independence matters](/courts/why-judicial-independence-matters), and [what the rule of law is](/justice/what-is-the-rule-of-law).',
      },
    ],
  },
  {
    slug: 'court-hierarchy',
    title: 'Court hierarchy',
    shortTitle: 'Court hierarchy',
    question: 'How are court systems structured — and is every system one pyramid?',
    summary:
      'Most descriptions show a single pyramid rising to one supreme court. Six of the twelve systems examined here have more than one hierarchy, and what usually decides the route is the nature of the dispute rather than its seriousness.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['why-courts-matter', 'trial-and-appellate-courts', 'administrative-courts'],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'de-grundgesetz',
      'fr-constitution-1958',
      'fr-justice-courts',
      'nl-constitution',
      'nl-rechtspraak',
      'es-constitution',
      'br-cf-1988',
      'jp-courts-judicial-system',
      'ie-courts-service',
      'us-courts-comparing',
      'ca-scc-act',
      'ch-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 10,
    keyTerms: ['court', 'jurisdiction'],
    uncertainty: [
      'Several systems described here are recorded in this corpus with their detailed competences and appeal routes unresearched — Germany’s Land tiers, Switzerland’s cantonal detail, Canada’s appeal routes and Spain’s higher-court composition among them. Those gaps are carried forward rather than filled in.',
      'This page describes structure. It establishes nothing about how well any structure works, and ranks none of them.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A court hierarchy is the arrangement that determines where a case starts, where it can go next, and what ends it. The familiar picture is a pyramid: local courts at the base, appeal courts above, one supreme court at the top. That picture is accurate for some systems and structurally wrong for others.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The question that actually decides the route',
        text: 'In several systems the route is chosen by the NATURE OF THE DISPUTE rather than by how serious it is or where it arose. France has two court orders with separate hierarchies, and which one hears a case depends on the kind of dispute. Germany runs several branches in parallel. Asking "how high can this go?" assumes there is only one direction upward, and in those systems the first question is which hierarchy you are in at all.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how court systems are organised. It is not legal advice, it does not tell you where to bring or appeal a case, and it does not describe any country’s procedural rules.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Tiers exist for two reasons that pull in different directions. Cases have to be decided somewhere near the people involved, by a court that can hear evidence and manage volume. And decisions have to be capable of correction and of consistency across a whole country, which requires courts that see few cases and decide them for everyone.',
      },
      {
        kind: 'paragraph',
        text: 'Separate branches exist for a third reason. Disputes about tax, employment, social entitlement and the acts of public authorities each involve a distinct body of law, and several systems concluded that specialised judges applying it consistently produce better law than generalists applying all of it.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Germany — three categories and five apex courts',
            description:
              'Article 92 of the Basic Law vests judicial power "in the Federal Constitutional Court, in the federal courts provided for in this Basic Law, and in the courts of the Länder" — three distinct categories, and treating them as one hierarchy is the commonest structural error made about German courts. Article 95(1) then names five federal supreme courts, each at the head of a separate branch: the Federal Court of Justice, the Federal Administrative Court, the Federal Labour Court, the Federal Social Court and the Federal Finance Court. Article 96 permits further federal courts.',
          },
          {
            term: 'France — two orders, chosen by the nature of the dispute',
            description:
              'France has two court orders with separate hierarchies, and which order hears a case depends on the nature of the dispute, not on where it arises or how serious it is. The Cour de cassation is the highest court of the judicial order.',
          },
          {
            term: 'Netherlands — an apex that does not receive everything',
            description:
              'Eleven district courts at first instance, four courts of appeal, and the Hoge Raad at the apex for civil, criminal and tax law. Administrative law does not funnel into the Hoge Raad: its highest courts are separate, including the Administrative Jurisdiction Division of the Council of State and the Central Appeals Tribunal.',
          },
          {
            term: 'Brazil — federal, state and three specialised branches',
            description:
              'Federal justice runs through the Tribunais Regionais Federais and federal judges; state justice is organised by each state under its own constitution, topped by a Tribunal de Justiça, and hears the bulk of ordinary cases. Alongside both, three subject-matter jurisdictions run with their own hierarchies: labour, electoral and military justice.',
          },
          {
            term: 'Ireland — a recognisable single ladder',
            description:
              'District Court, Circuit Court, High Court, Court of Appeal and Supreme Court. The Court of Appeal was established on 28 October 2014 under the Thirty-third Amendment, recently enough that older descriptions of the Irish courts omit it.',
          },
          {
            term: 'Japan — tiers plus distinct court types',
            description:
              'Summary courts, district courts, high courts and the Supreme Court form the main tiers. Family courts handle domestic-relations and juvenile cases and are a distinct part of the system rather than a division of the ordinary civil or criminal courts.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Who administers a court is a separate question from where it sits',
        text: 'In Germany the courts that hear most cases are courts of the Länder, administered by the Länder — and they apply federal law. Court administration and adjudicative hierarchy are separate things there, and a diagram showing one will not show the other. Spain makes the same separation from the other direction: the Consejo General del Poder Judicial governs appointments, discipline and administration of judges, and is not a court and does not decide cases.',
      },
    ],
    misconceptions: [
      {
        claim:
          'Every country’s courts form a single pyramid with one supreme court at the top.',
        reality:
          'Germany has three constitutional categories and five federal supreme courts. France has two separate orders. The Netherlands sends administrative law to entirely different apex courts. Brazil runs specialised branches alongside the ordinary courts.',
      },
      {
        claim: 'Cases move up the hierarchy as they get more serious.',
        reality:
          'Seriousness determines the starting tier in several systems, but in France and Germany the first question is which hierarchy the dispute belongs to at all — and that is decided by its nature.',
      },
      {
        claim: 'The court at the top of the hierarchy is the constitutional court.',
        reality:
          'Germany’s Federal Constitutional Court is named separately in Article 92 and is not among the five supreme courts in Article 95(1). Spain’s Constitutional Court sits outside the ordinary judiciary and is expressly not the top of the court system.',
      },
      {
        claim: 'A court named after a region is run by that region.',
        reality:
          'France’s cour criminelle départementale carries "départementale" in its name, and the département is not the body that constitutes or administers it. French courts sit in judicial districts drawn separately from the administrative map.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The most useful way to read an unfamiliar system is to ask three questions in order, because the answers are independent of one another.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'How many hierarchies are there, and what decides which one a case enters?',
          'What sits at the top of each — and is the constitutional function inside one of them or outside all of them?',
          'Who administers the courts, as distinct from who hears appeals from them?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Spain is the useful counter-case to everything above. Article 117.5 makes the principle of jurisdictional unity the basis of the organisation of the courts: there is one national judiciary, and the Autonomous Communities do not have their own separate court systems — in a state that is otherwise substantially decentralised.',
        claim: 'fact',
        sources: ['es-constitution'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Hierarchy is a safeguard before it is an organisational chart. A first-instance decision that no one can take further is final in a way that carries no guarantee of having been examined at all, and consistency across a country depends on some court being able to settle what a provision means for everyone.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Structure is not performance',
        text: 'A system with many tiers is not thereby more careful, and a system with one apex court is not thereby more consistent. This page describes how systems are built. Whether any of them works well is a different question, and one this site does not answer from structure alone.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [trial and appellate courts](/courts/trial-and-appellate-courts), [supreme courts and final appeal](/courts/supreme-courts-and-final-appeal), and [constitutional courts](/institutions/constitutional-court).',
      },
    ],
  },
  {
    slug: 'trial-and-appellate-courts',
    title: 'Trial courts and appellate courts',
    shortTitle: 'Trial and appellate courts',
    question:
      'What is the difference between a trial court and an appellate court, and how far does an appeal actually go?',
    summary:
      'Trial courts generally establish facts; appellate courts generally review decisions. Both halves need qualifying: appeal is neither a fresh trial nor a review of law alone as a universal rule, and how far it goes is set by each system.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['court-hierarchy', 'supreme-courts-and-final-appeal', 'court-jurisdiction'],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'ie-courts-service',
      'ie-citizensinfo-scc',
      'jp-courts-judicial-system',
      'fr-justice-courts',
      'nl-rechtspraak',
      'de-grundgesetz',
      'us-courts-comparing',
      'be-cassation',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 9,
    keyTerms: ['court', 'appeal', 'evidence'],
    uncertainty: [
      'The scope of appeal in each system is set by that system’s procedural law, and this corpus records appeal routes as unresearched for several countries. Nothing here states what may be appealed in any particular country.',
      'The general descriptions below are patterns drawn from the systems in this corpus. They are not rules, and a system may allocate the work differently.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The working distinction is that a trial court decides what happened and what follows from it, while an appellate court examines a decision that has already been made. That is a useful starting point and it is not a rule — the second half in particular varies more than almost any other feature of court systems.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Trial courts generally',
            description:
              'Hear evidence, resolve disputed facts, apply law to the facts found, and decide the case at first instance. This is where witnesses appear and where the record is made. Ireland’s District and Circuit Courts, Japan’s district and summary courts and the Netherlands’ eleven rechtbanken all sit here.',
          },
          {
            term: 'Appellate courts generally',
            description:
              'Examine whether the decision below was reached correctly, on the record made there. They typically do not hear witnesses afresh. Ireland’s Court of Appeal, Japan’s high courts and the Netherlands’ four gerechtshoven sit here.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains a structural distinction and its limits. It is not legal advice, it does not describe any country’s appeal rights or time limits, and it does not tell you whether a decision can be appealed.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The division exists because two different tasks need different conditions. Establishing what happened requires being in the room: seeing witnesses, handling exhibits, managing a live process. Deciding whether a decision was properly reached requires distance from all of that, and a court that sees many cases and can say what the law means across them.',
      },
      {
        kind: 'paragraph',
        text: 'A court doing both at once would have to re-run every case to check it, which no system could sustain. So appellate courts almost everywhere work from the record rather than from the events.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two things an appeal is not, universally',
        text: 'It is not universally a complete new trial. It is also not universally confined to points of law. Both statements are true of some systems and false of others, and several systems provide different appeal scopes at different tiers of the same hierarchy — a broader review at the first appeal and a narrower one above it. Anyone reading about an appeal in an unfamiliar system has to establish the scope from that system, not from a general rule.',
      },
      {
        kind: 'paragraph',
        text: 'The clearest evidence that scope varies is the existence of a distinct mode of review at the top. The Cour de cassation is the highest court of the judicial order in France, and describing it as "the French supreme court" invites a false equivalence with courts that re-decide cases: cassation review is directed at whether the law was correctly applied. A court can sit at the apex of a hierarchy and still not be a court that hears the case again.',
        claim: 'fact',
        sources: ['fr-justice-courts'],
      },
      {
        kind: 'paragraph',
        text: 'Tiers also do more than one job at once. Ireland’s Circuit Court handles higher-value civil claims and more serious criminal trials, and hears appeals from the District Court — so the same court is a trial court in some cases and an appellate court in others. The categories describe functions, not buildings.',
        claim: 'fact',
        sources: ['ie-courts-service'],
      },
      {
        kind: 'paragraph',
        text: 'And a first-instance court may hold powers usually associated with the top of a system. Ireland’s High Court has full original jurisdiction in all matters, civil or criminal, and jurisdiction to determine the validity of any law having regard to the Constitution. Constitutional review does not necessarily belong to the apex.',
        claim: 'fact',
        sources: ['ie-courts-service'],
      },
    ],
    misconceptions: [
      {
        claim: 'An appeal is a new trial.',
        reality:
          'Appellate courts typically work from the record made below rather than hearing witnesses again. Where a system does provide a rehearing, that is a feature of that system’s procedure and not a general property of appeals.',
      },
      {
        claim: 'An appeal can only raise points of law.',
        reality:
          'Equally not universal. Several systems allow a broader review at the first appeal and a narrower one above it, so the scope depends on which appeal is being taken, in which system.',
      },
      {
        claim: 'Everyone has a right to appeal any decision.',
        reality:
          'Appeal rights are created by law and are bounded. Some routes require permission, some are limited to defined categories, and some decisions are final at the tier that made them.',
      },
      {
        claim: 'A court is either a trial court or an appellate court.',
        reality:
          'Ireland’s Circuit Court tries cases and hears appeals from the District Court. The distinction is between functions, and one court can perform both.',
      },
      {
        claim: 'Losing an appeal means the original decision was correct.',
        reality:
          'An appellate court decides whether the decision below can stand on the grounds argued, within its own scope of review. That is a narrower question than whether the outcome was right.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three questions establish what an appeal is in an unfamiliar system, and none of them can be answered from the word itself.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Is the appellate court reviewing the record, or hearing the case again?',
          'May it revisit findings of fact, or only the application of law?',
          'Does the route require permission, and does the scope narrow at higher tiers?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Systems also differ on where the review function sits structurally. Japan’s high courts hear appeals as their principal work; Ireland created a dedicated Court of Appeal only in 2014; the Netherlands routes administrative appeals away from its ordinary appellate courts entirely.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Appeal is the mechanism by which a court system corrects itself, and that is why it belongs in any account of why courts matter. A first-instance decision is made once, by one court, often quickly. Review is the acknowledgement built into the system that this is not always enough.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It is also bounded on purpose. Proceedings have to end, evidence decays, and a dispute that can be reopened indefinitely has not been resolved. Every system therefore balances correction against finality, and the appeal rules are where that balance is struck.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Using an appeal is not disrespecting a court',
        text: 'An appeal is the lawful means a system provides for disagreeing with a decision. Taking one is participation in the process, not defiance of it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [court hierarchy](/courts/court-hierarchy), [supreme courts and final appeal](/courts/supreme-courts-and-final-appeal), and [appeal](/glossary/appeal).',
      },
    ],
  },
  {
    slug: 'court-jurisdiction',
    title: 'Court jurisdiction',
    shortTitle: 'Court jurisdiction',
    question: 'Which court is legally competent to hear a particular case?',
    summary:
      'Court jurisdiction runs on several dimensions at once — territory, subject matter, tier and constitutional competence. It is a different question from where police may act, and from which institution may investigate.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'court-hierarchy',
      'trial-and-appellate-courts',
      'federal-and-state-court-systems',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'de-grundgesetz',
      'fr-justice-courts',
      'es-constitution',
      'ie-courts-service',
      'br-cf-1988',
      'au-constitution',
      'us-courts-comparing',
      'ch-constitution',
      'jp-courts-judicial-system',
      'nl-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 9,
    keyTerms: ['jurisdiction', 'court'],
    uncertainty: [
      'The detailed competence of individual courts is recorded as unresearched for several systems in this corpus, including Germany’s Land tiers and Spain’s higher courts. This page describes the dimensions on which competence is allocated, not the allocation in any country.',
      'Nothing here identifies a court that would lack competence in a given situation, and no arrangement is described in a way intended to show where competence is uncertain.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Jurisdiction is the authority of a body to act in a matter. For courts, that authority is allocated on several dimensions simultaneously, and a court needs to satisfy all of them — not one — before it can hear a case.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Territorial',
            description:
              'Where the court’s authority runs. Worth noting that judicial districts are frequently drawn separately from administrative maps: French courts sit in ressorts drawn independently of the département boundaries, and a court’s name can carry an administrative word without the administrative body having anything to do with it.',
          },
          {
            term: 'Subject matter',
            description:
              'What kind of dispute the court may decide. In systems with several branches this is the dimension that chooses the hierarchy: France’s two court orders are separated by the nature of the dispute, and Germany’s five federal supreme courts each head a branch defined by subject.',
          },
          {
            term: 'Tier — original and appellate',
            description:
              'Whether the court hears the matter first or on review. The same court can hold both: Ireland’s Circuit Court tries cases and hears appeals from the District Court. Ireland’s High Court holds full original jurisdiction in all matters, civil or criminal.',
          },
          {
            term: 'Constitutional and special competence',
            description:
              'Whether the court may decide constitutional questions at all. This is allocated deliberately and differently: to a separate court in Germany and Spain, to the apex court in Brazil and Japan, to the High Court in Ireland, and to no court over Acts of Parliament in the Netherlands.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains how judicial competence is allocated. It is not legal advice, it does not tell you where to bring a case, and it describes no country’s rules of procedure.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Competence rules exist so that a case has one right destination, decided in advance rather than chosen by a party. A litigant able to select the court would be selecting the outcome by other means, and a court able to take any case would be a court with no defined authority at all.',
      },
      {
        kind: 'paragraph',
        text: 'They also make appeal possible. A review structure only works if it is settled which court a decision came from and which court may examine it.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Three jurisdictions, three different questions',
        text: 'This site now carries three pages with jurisdiction in the title, and they answer different questions. [Police jurisdiction](/law-enforcement/police-jurisdiction) asks which force may act where. [Investigative jurisdiction](/investigations/investigative-jurisdiction) asks which institution is legally competent to investigate a matter. Court jurisdiction asks which court may decide it. The three can point at different bodies in the same case — a matter investigated by a national agency may be tried in a local court, and the force that attended the scene may have no role in either.',
      },
      {
        kind: 'paragraph',
        text: 'Where several hierarchies exist, subject matter does the heaviest work. In France the order that hears a case depends on the nature of the dispute rather than on where it arises or how serious it is. In Germany, Article 95(1) of the Basic Law names five federal supreme courts, each at the head of a branch defined by the kind of law involved.',
        claim: 'fact',
        sources: ['fr-justice-courts', 'de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'In federal systems a further dimension applies before any of the others: which system the case belongs to. In the United States, which system hears a case depends chiefly on the law at issue, and because most criminal and civil law is state law, most litigation takes place in state courts. Australia reaches a comparable result by a different route, investing state courts with federal jurisdiction under section 77(iii) rather than building a full parallel system.',
        claim: 'fact',
        sources: ['us-courts-comparing', 'au-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'And a system can decline the dimension entirely. Spain’s Article 117.5 makes jurisdictional unity the basis of court organisation: there is one national judiciary, and the Autonomous Communities do not have their own court systems. Each community has a Tribunal Superior de Justicia that culminates the judicial organisation within it — as part of the single national judiciary, not as a community court system.',
        claim: 'fact',
        sources: ['es-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'Court jurisdiction is the same as police jurisdiction.',
        reality:
          'They answer different questions and can point at different bodies in the same case. A force may lawfully attend an incident it has no role in investigating, in a matter that will be decided by a court in a different district entirely.',
      },
      {
        claim: 'Jurisdiction is mainly about geography.',
        reality:
          'Territory is one dimension among four. In systems with several court orders, subject matter decides which hierarchy the case enters before territory decides anything.',
      },
      {
        claim: 'A court named after a region is that region’s court.',
        reality:
          'France’s cour criminelle départementale carries the word in its name, and the département does not constitute or administer it. Judicial districts are drawn separately from administrative maps.',
      },
      {
        claim: 'Any court can decide a constitutional question if one arises.',
        reality:
          'Constitutional competence is allocated deliberately. Article 120 of the Netherlands Constitution forbids the courts from reviewing the constitutionality of Acts of Parliament, and in Germany and Spain constitutional jurisdiction belongs to a separate court.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'The order in which the dimensions apply differs, and that ordering is the most practically important thing about a system’s jurisdiction rules.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Federal systems ask first which system the case belongs to — United States, Brazil, Switzerland, Australia.',
          'Multi-order systems ask first which hierarchy the dispute belongs to — France, Germany, the Netherlands.',
          'Unitary single-order systems ask first which tier is appropriate — Ireland, Spain, Japan.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Switzerland shows that these dimensions are separable from the law being applied. The cantons organise and run their own trial and appeal courts under Articles 122 and 123, and since 1 January 2011 a unified federal criminal procedure code applies across all of them. The institutions are cantonal; the law they apply is federal.',
        claim: 'fact',
        sources: ['ch-constitution'],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Jurisdiction rules are a safeguard against the selection of a favourable forum, by either side. A defendant who could be tried anywhere, or a claimant who could choose any court, would face or enjoy an advantage that has nothing to do with the merits.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Competence is decided before the case is',
        text: 'That competence is settled in advance, by rules rather than by choice, is one of the conditions that lets a decision be relied on. A court chosen for the case is not a court deciding it.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [police jurisdiction](/law-enforcement/police-jurisdiction), [investigative jurisdiction](/investigations/investigative-jurisdiction), and [court hierarchy](/courts/court-hierarchy).',
      },
    ],
  },
  {
    slug: 'supreme-courts-and-final-appeal',
    title: 'Supreme courts and final appeal',
    shortTitle: 'Supreme courts',
    question:
      'What does a supreme court actually do — and does the name mean the same thing everywhere?',
    summary:
      'It does not. “Supreme court” covers a final appellate court, a constitutional court, both at once, and one apex among several. Some apex courts review whether the law was correctly applied rather than deciding the case again.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'court-hierarchy',
      'trial-and-appellate-courts',
      'why-judicial-independence-matters',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'fr-justice-courts',
      'de-grundgesetz',
      'es-constitution',
      'br-cf-1988',
      'jp-courts-judicial-system',
      'ca-scc-act',
      'ch-constitution',
      'nl-rechtspraak',
      'ie-citizensinfo-scc',
      'au-hcourt',
      'be-cassation',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 10,
    keyTerms: ['court', 'appeal', 'jurisdiction'],
    uncertainty: [
      'The detailed jurisdiction and appeal routes of several apex courts here are recorded in this corpus as unresearched, including Canada’s and Switzerland’s. Their composition and constitutional position are described; their case-selection rules are not.',
      'No apex court on this page is described as stronger, more independent or more effective than another. The page is about what the label covers, not about how well any court works.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A supreme court is the court from which there is no further appeal within a system. That is almost the only thing the term reliably means, because what such a court is *for* differs from system to system — and in several systems there is more than one of them.',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Four different things the label covers',
        text: 'A final appellate court for ordinary law, and nothing more — France’s Cour de cassation for the judicial order. A court that is both the apex and the constitutional court — Brazil’s Supremo Tribunal Federal. A court that is the apex and holds constitutional review only in concrete cases — Japan’s Supreme Court. And one apex among several, where each branch of jurisdiction has its own — Germany, where Article 95(1) names five federal supreme courts.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains what apex courts do and how the term varies. It is not legal advice, it does not describe how to reach any court, and it ranks no court system.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Every system needs somewhere for questions to stop. Two distinct needs drive that: proceedings have to end, and a provision has to mean the same thing in every court that applies it. The first argues for finality, the second for a court that decides comparatively few cases and decides them for everyone.',
      },
      {
        kind: 'paragraph',
        text: 'That second purpose explains a feature of apex courts that surprises readers: many of them are not primarily interested in the individual case in front of them. They are interested in the question it raises.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The most consequential distinction is between apex courts that re-decide cases and apex courts that review whether the law was correctly applied. The Cour de cassation is the highest court of the French judicial order, and describing it as "the French supreme court" invites a false equivalence with courts that re-decide cases: cassation review is directed at whether the law was correctly applied. Any one-to-one mapping onto another country’s apex court should be treated with caution.',
        claim: 'fact',
        sources: ['fr-justice-courts'],
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Brazil — apex and constitutional court together',
            description:
              'The Supremo Tribunal Federal’s primary role is "a guarda da Constituição" under Article 102. Brazil has no separate constitutional court: the STF is both the highest court and the constitutional court, exercising review in the abstract and in concrete cases. Below it, the Superior Tribunal de Justiça is the highest court for non-constitutional federal law and stands above both the federal and the state courts on questions of federal statutory law — two apex courts, with different subject matter.',
          },
          {
            term: 'Japan — apex with concrete constitutional review',
            description:
              'The Supreme Court is the highest court and the court of final appeal, and holds the power of constitutional review — but exercises it only when deciding an actual case before it, not by ruling on a law in the abstract. There is no separate constitutional court.',
          },
          {
            term: 'Germany — five, plus one that is not among them',
            description:
              'Article 95(1) names five federal supreme courts, each heading a branch: the Federal Court of Justice, the Federal Administrative Court, the Federal Labour Court, the Federal Social Court and the Federal Finance Court. The Federal Constitutional Court is named separately in Article 92 and is not among them. Calling any single one of these "the German supreme court" misdescribes the system.',
          },
          {
            term: 'Switzerland — an apex over other people’s courts',
            description:
              'Article 188 of the Constitution makes the Federal Supreme Court "the supreme judicial authority of the Confederation". Below it the courts are the cantons’, which organise and run their own trial and appeal courts. The Federal Supreme Court ensures the uniform application of federal law across cantonal institutions.',
          },
          {
            term: 'Canada — composition written into statute',
            description:
              'Under the Supreme Court Act the Court "shall consist of a chief justice to be called the Chief Justice of Canada, and eight puisne judges" — nine judges — and at least three of them must be appointed from Quebec, reflecting Quebec’s distinct civil-law tradition.',
          },
          {
            term: 'Ireland — final appeal, with a narrow direct route',
            description:
              'The Supreme Court is the court of final appeal, hearing appeals from the Court of Appeal and, in limited constitutionally defined circumstances, directly from the High Court.',
          },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Spain shows the same distinction from the other direction. Article 123 makes the Tribunal Supremo the highest judicial organ in all orders — except in matters of constitutional guarantees, which belong to the Constitutional Court. The apex of the ordinary judiciary and the supreme interpreter of the constitution are two different courts, and the exception is written into the article that establishes the first.',
        claim: 'fact',
        sources: ['es-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has one supreme court.',
        reality:
          'Germany has five federal supreme courts under Article 95(1), plus a Federal Constitutional Court named separately. Brazil has an apex constitutional court and a separate highest court for federal statutory law.',
      },
      {
        claim: 'The supreme court is the constitutional court.',
        reality:
          'In Germany, Spain and Belgium they are separate bodies. In Brazil and Japan they are the same court. In the Netherlands no court may review Acts of Parliament at all.',
      },
      {
        claim: 'An apex court re-decides the case.',
        reality:
          'Cassation review is directed at whether the law was correctly applied rather than at re-deciding the dispute. A court can be final without being a court that hears the case again.',
      },
      {
        claim:
          'Translating a country’s highest court as “court of cassation” is safe if the system is civil-law.',
        reality:
          'Cassation names a mode of review, not a rank. Not every civil-law apex court works that way, and calling one a court of cassation asserts something specific about what it does.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four questions identify what an apex court actually is, and the name answers none of them.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Is it final for all law, or for one branch of it?',
          'Does it re-decide the case, or review whether the law was correctly applied?',
          'Does it hold constitutional jurisdiction, and if so in the abstract or only in a live case?',
          'Is there another court at the same height with different subject matter?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'For France the answers are: one branch, review of legal correctness, no, and yes — the administrative order has its own apex. For Brazil: constitutional matters, both modes, yes in both modes, and yes — the STJ. Two systems, and no shared answer among the four.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Finality is a safeguard and a cost at the same time. It protects people from indefinite litigation and from having a settled question reopened by whoever has the resources to keep asking. It also means the last court to decide is not itself subject to appeal, which is why the composition, appointment and reasoning of apex courts attract the scrutiny they do.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Final is not infallible',
        text: 'An apex court is the end of the process, not a guarantee that the process reached the right answer. Systems accept that trade because the alternative — no end — is worse, not because the last decision is assumed to be correct.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [court hierarchy](/courts/court-hierarchy), [constitutional courts](/institutions/constitutional-court), and [trial and appellate courts](/courts/trial-and-appellate-courts).',
      },
    ],
  },
  {
    slug: 'administrative-courts',
    title: 'Administrative courts',
    shortTitle: 'Administrative courts',
    question: 'Why do some countries have separate courts for disputes with the state?',
    summary:
      'Several systems route disputes with public authorities into a distinct jurisdiction with its own hierarchy and its own apex. Others send them through the ordinary courts. Neither arrangement is the default.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['court-hierarchy', 'specialized-courts', 'court-jurisdiction'],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'de-grundgesetz',
      'fr-constitution-1958',
      'fr-justice-courts',
      'nl-rechtspraak',
      'nl-ejustice-courts',
      'ie-courts-service',
      'jp-courts-judicial-system',
      'be-ejustice-specialised',
      'es-constitution',
      'nl-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 8,
    keyTerms: ['court', 'judicial-review', 'jurisdiction'],
    uncertainty: [
      'The detailed competence of administrative courts and the boundary rules between orders were not researched from primary procedural law for any system here, and are not described.',
      'The systems named as having no separate administrative order are described that way on the strength of their court structures as recorded in this corpus. Absence of a separate order is not a claim that administrative disputes are handled less well.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'An administrative court decides disputes between people and public authorities — whether a permit was lawfully refused, a benefit correctly withdrawn, an official decision properly made. What varies is whether those disputes go to a distinct set of courts with their own appeals and their own apex, or through the ordinary courts alongside everything else.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains a structural choice about where public-law disputes are heard. It is not legal advice, and it does not describe how to challenge any decision in any country.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The argument for a separate order is that disputes with the state are not like disputes between private parties. One side wrote the rules, holds the records and acts in the public interest; the questions are about the legality of an exercise of public power rather than about competing private claims. Systems that separate the order concluded that judges who do this work continuously produce more consistent public law.',
      },
      {
        kind: 'paragraph',
        text: 'The argument against is that it creates a boundary, and boundaries generate disputes of their own about which order a case belongs to. Systems without a separate order accept generalist judges in exchange for having no such boundary to police.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'France — a separate order of courts',
            description:
              'France has two court orders with separate hierarchies, and which order hears a case depends on the nature of the dispute, not on where it arises or how serious it is. The judicial order is headed by the Cour de cassation; administrative disputes run through the other.',
          },
          {
            term: 'Germany — a branch with its own federal supreme court',
            description:
              'Article 95(1) of the Basic Law names the Federal Administrative Court as one of five federal supreme courts, each heading a separate branch of jurisdiction. Administrative jurisdiction is not an exception to the German court system; it is one of its constituent branches.',
          },
          {
            term: 'Netherlands — three separate administrative apexes',
            description:
              'Administrative law does not funnel into the Hoge Raad. Its highest courts are separate: the Administrative Jurisdiction Division of the Council of State for general administrative law, and the Central Appeals Tribunal for social-security and civil-service matters among them. A country can have several highest administrative courts and only one for civil, criminal and tax law.',
          },
          {
            term: 'Ireland and Japan — through the ordinary courts',
            description:
              'No separate administrative order is recorded for either. Ireland’s High Court holds full original jurisdiction in all matters, civil or criminal; Japan’s district courts are the principal courts of first instance for most serious civil and criminal matters. Challenges to official decisions run through these courts rather than through a distinct jurisdiction.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A separate order is not more review, or less',
        text: 'Whether a country has administrative courts says nothing about how searching the review of official action is. The Netherlands maintains three separate highest administrative courts and forbids its courts from reviewing the constitutionality of Acts of Parliament. Ireland has no separate administrative order and gives its High Court jurisdiction to determine the validity of any law having regard to the Constitution. Structure and scope of review are independent variables.',
      },
    ],
    misconceptions: [
      {
        claim: 'Every country has administrative courts.',
        reality:
          'Ireland and Japan run administrative challenges through the ordinary courts, as recorded in this corpus. A separate administrative order is a design choice, not a feature of developed legal systems.',
      },
      {
        claim: 'Administrative courts are part of the executive.',
        reality:
          'They are courts within the judicial structures of their systems. Germany’s administrative branch is headed by one of the five federal supreme courts named in the Basic Law.',
      },
      {
        claim: 'A separate administrative order means stronger review of the state.',
        reality:
          'Nothing on this page establishes that, and the Netherlands and Ireland run in opposite directions on the two variables. Structure does not determine scope.',
      },
      {
        claim: 'Administrative courts and constitutional courts do the same work.',
        reality:
          'Administrative jurisdiction concerns the legality of decisions by public authorities. Constitutional jurisdiction concerns conformity with the constitution, and in Germany and Spain belongs to a different court entirely.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three arrangements appear in this corpus, and they are genuinely different designs rather than degrees of one.',
      },
      {
        kind: 'list',
        items: [
          'A separate order with its own hierarchy and apex — France.',
          'A branch within a multi-branch system, with its own federal supreme court — Germany.',
          'Several separate administrative apexes alongside one ordinary apex — the Netherlands.',
          'No separate order; administrative challenges through the ordinary courts — Ireland, Japan.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Wherever they sit, these courts perform the function that most directly constrains the state: deciding whether a public body acted within its powers. That a government can lose in its own courts, to a person it has decided against, is one of the more demanding things a legal system asks of itself.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Where the boundary matters to a reader',
        text: 'In systems with two orders, taking a case to the wrong one is a real problem, and the rules allocating cases between them are part of the law rather than a formality. This page names that the boundary exists; it does not tell anyone which side of it a case falls on.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [court hierarchy](/courts/court-hierarchy), [specialised courts](/courts/specialized-courts), and [judicial review](/glossary/judicial-review).',
      },
    ],
  },
  {
    slug: 'specialized-courts',
    title: 'Specialised courts',
    shortTitle: 'Specialised courts',
    question: 'Why do some legal systems create separate courts for particular subjects?',
    summary:
      'Labour, social, tax, family, electoral and military matters are routed to dedicated courts in several systems — sometimes as full parallel hierarchies with their own apex courts, sometimes as distinct courts within one system.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'administrative-courts',
      'court-hierarchy',
      'court-jurisdiction',
      'courts-during-a-state-of-emergency',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'de-grundgesetz',
      'br-cf-1988',
      'jp-courts-judicial-system',
      'es-constitution',
      'be-ejustice-specialised',
      'ie-courts-service',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 8,
    keyTerms: ['court', 'jurisdiction'],
    uncertainty: [
      'This page describes which subjects are separated in the systems researched. The internal structure, procedure and appeal routes of the specialised branches were not researched from primary sources and are not described.',
      'No claim is made that specialisation improves outcomes. It is a structural choice with trade-offs, and this corpus carries no evidence on its effects.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A specialised court hears one kind of subject matter and nothing else. The variation is in how far the specialisation goes: a distinct court within an ordinary system, or an entire parallel hierarchy running from first instance to its own supreme court.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains why systems separate subjects and how far they take it. It is not legal advice, and it does not describe the procedure of any specialised court.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Some subjects carry their own body of law, their own evidence and their own parties. Employment disputes recur between the same categories of people on the same questions; tax turns on a code few generalists read; juvenile cases need a different posture from criminal trials. Specialisation concentrates that expertise.',
      },
      {
        kind: 'paragraph',
        text: 'The cost is fragmentation. Every specialised branch is another boundary to police, another apex whose case law may diverge, and another route a litigant can be in the wrong part of.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Germany — specialisation at the level of the constitution',
            description:
              'Article 95(1) of the Basic Law gives labour, social and fiscal jurisdiction their own federal supreme courts alongside the ordinary and administrative branches. Article 96 permits the federation to establish further federal courts, including a Federal Patent Court and military courts for defence matters, whose members administering military penal law must be judges.',
          },
          {
            term: 'Brazil — three full parallel hierarchies',
            description:
              'Three subject-matter jurisdictions run alongside the ordinary courts, each with its own hierarchy: the labour courts topped by the Tribunal Superior do Trabalho, the electoral courts topped by the Tribunal Superior Eleitoral, and the military courts topped by the Superior Tribunal Militar.',
          },
          {
            term: 'Japan — distinct courts within one system',
            description:
              'Family courts handle domestic-relations and juvenile cases and are a distinct part of the system rather than a division of the ordinary civil or criminal courts. Summary courts handle minor civil claims and lighter criminal cases as the lowest and most numerous tier.',
          },
          {
            term: 'Spain — a specialised court inside a unified judiciary',
            description:
              'The Audiencia Nacional is a specialised national court, existing within the single national judiciary that Article 117.5 establishes rather than as a separate order.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Specialisation and separate orders are different things',
        text: 'Administrative courts separate disputes by WHO is involved — a public authority on one side. Specialised courts separate them by WHAT the dispute is about. Germany does both at once, which is why it has five federal supreme courts rather than two. Reading either as a version of the other loses the distinction that produced the structure.',
      },
    ],
    misconceptions: [
      {
        claim: 'Specialised courts are lower courts.',
        reality:
          'Brazil’s labour, electoral and military branches each run to their own superior court. Germany gives labour, social and fiscal jurisdiction federal supreme courts named in the constitution.',
      },
      {
        claim: 'Specialised courts sit under the ordinary supreme court.',
        reality:
          'In Germany and Brazil each branch has its own apex. Placing them beneath the ordinary apex court reproduces the single-pyramid error the structures themselves contradict.',
      },
      {
        claim: 'Military courts are a feature of authoritarian systems.',
        reality:
          'Germany’s Basic Law permits military courts for defence matters and requires that members administering military penal law be judges; Brazil maintains a military justice branch with its own superior court. Their existence says nothing on its own about a system’s character.',
      },
      {
        claim:
          'A country with specialised courts has a more complicated system than one without.',
        reality:
          'It has a differently shaped one. Systems without specialised branches place the same subjects before generalist judges, which trades one kind of complexity for another.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Which subjects get separated is itself revealing, because it records what a system treats as distinctive enough to need its own judges.',
      },
      {
        kind: 'list',
        items: [
          'Labour — Germany and Brazil, each with a dedicated supreme court.',
          'Social security — Germany, with the Federal Social Court.',
          'Tax and fiscal matters — Germany, with the Federal Finance Court.',
          'Electoral matters — Brazil, with the Tribunal Superior Eleitoral.',
          'Military matters — Germany under Article 96, and Brazil’s military justice branch.',
          'Family and juvenile matters — Japan’s family courts.',
        ],
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Specialisation carries a safeguard and a risk in the same feature. Judges who see only one subject develop a command of it that generalists cannot match — and see the same categories of party repeatedly, which is exactly the condition under which a court can drift toward one of them without noticing. Systems that specialise generally keep an appellate structure inside the branch for that reason.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Still courts',
        text: 'A specialised court is bound by the same requirements as any other: deciding on the law, hearing both sides, giving reasons, and being subject to review within its branch. Specialisation narrows the subject, not the obligations.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [administrative courts](/courts/administrative-courts), [court hierarchy](/courts/court-hierarchy), and [Germany](/countries/germany).',
      },
    ],
  },
  {
    slug: 'federal-and-state-court-systems',
    title: 'Courts in federal systems',
    shortTitle: 'Federal and state courts',
    question:
      'How do federal countries organise courts between the national and sub-national levels?',
    summary:
      'Five different designs, not one. Some build parallel systems, some invest sub-national courts with national jurisdiction, some keep the institutions local and the law national — and one federal state declines to decentralise its judiciary at all.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['court-jurisdiction', 'court-hierarchy', 'supreme-courts-and-final-appeal'],
    relatedInstitutions: ['constitutional-court', 'state-police'],
    sources: [
      'us-courts-comparing',
      'us-const-amend-10',
      'au-constitution',
      'au-hcourt',
      'ch-constitution',
      'ch-crimpc',
      'de-grundgesetz',
      'br-cf-1988',
      'es-constitution',
      'ca-constitution-1867',
      'ca-scc-act',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 10,
    keyTerms: ['court', 'jurisdiction'],
    uncertainty: [
      'This page describes the design of each arrangement, not the internal structure of any sub-national court system. It does not describe any individual American state’s, Swiss canton’s or Brazilian state’s courts, which would require that jurisdiction’s own sources.',
      'Canada’s appeal routes, appointment process and judicial administrative bodies are recorded in this corpus as unresearched beyond the constitutional outline, and are not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A federal state has two levels of law. That does not settle how many levels of courts it has, and the systems in this corpus answer the question in ways that share almost nothing beyond the problem.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This compares designs for allocating judicial power in federal systems. It is not legal advice, it is not a description of any one country’s courts in detail, and it does not rank the arrangements.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Federal systems face a choice their unitary neighbours do not. National law needs to be applied consistently across the whole country; sub-national law needs to be applied by institutions accountable within their own unit. Those pull toward duplication and toward integration respectively, and every design here is a different resolution.',
      },
    ],
    howItWorks: [
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Duplication — the United States',
            description:
              'Two court systems, not one: the federal judiciary states plainly that the federal government and each of the state governments have their own court systems, and which system hears a case depends chiefly on the law at issue. Because most criminal and civil law is state law, most litigation — including most criminal prosecutions — takes place in state courts. The federal courts are decisive on federal questions and are not the ordinary courts of the country in the way a unitary state’s national courts are.',
          },
          {
            term: 'Investiture — Australia',
            description:
              'Section 71 vests the judicial power of the Commonwealth in the High Court and other federal courts. But rather than build a full parallel system, the Commonwealth invests state courts with federal jurisdiction under section 77(iii), so a state court may decide a federal matter. This is a defining feature of the Australian judicature.',
          },
          {
            term: 'Local institutions, national law — Switzerland',
            description:
              'Article 188 makes the Federal Supreme Court the supreme judicial authority of the Confederation; below it the courts are the cantons’, which organise and run their own trial and appeal courts under Articles 122 and 123. The distinctively Swiss point is that cantonal courts apply federal procedure: until 2011 each canton had its own code of criminal procedure, and since 1 January 2011 a unified national code applies, so a criminal trial in Geneva and one in Zürich follow the same rules. The institutions are cantonal; the law they apply is federal.',
          },
          {
            term: 'Separated administration — Germany',
            description:
              'The courts that hear most cases are courts of the Länder, administered by the Länder, applying federal statutes. Court administration and adjudicative hierarchy are separate things in Germany, and a diagram showing one will not show the other.',
          },
          {
            term: 'Both, plus specialisation — Brazil',
            description:
              'Federal justice runs through the Tribunais Regionais Federais and federal judges, hearing matters involving the Union and federal interests. State justice is organised by each state under its own constitution, topped by a Tribunal de Justiça, and hears the bulk of ordinary civil and criminal cases. Above both, the Superior Tribunal de Justiça standardises the interpretation of non-constitutional federal law.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The counter-case: a federal state with one judiciary',
        text: 'Spain is substantially decentralised — its police and prisons are not uniform, and several Autonomous Communities run their own forces. Its judiciary is not decentralised at all. Article 117.5 makes jurisdictional unity the basis of court organisation: one national judiciary, and no separate Autonomous Community court systems. Each community has a Tribunal Superior de Justicia that culminates the judicial organisation within it — as part of the single national judiciary. Decentralising a state does not entail decentralising its courts.',
      },
    ],
    misconceptions: [
      {
        claim: 'Federal courts sit above state courts.',
        reality:
          'In the United States they are two systems, not two tiers, and which one hears a case depends chiefly on the law at issue. Most litigation is in state courts because most law is state law.',
      },
      {
        claim: 'A federal system needs a full parallel set of courts.',
        reality:
          'Australia invests state courts with federal jurisdiction under section 77(iii) instead of duplicating the system, and Switzerland leaves the courts cantonal while unifying the procedure they apply.',
      },
      {
        claim: 'The court that applies federal law is administered by the federal government.',
        reality:
          'In Germany, Land courts apply federal statutes and are administered by the Länder. Who runs a court and where its appeals go are different questions.',
      },
      {
        claim: 'One state’s court structure describes the country’s.',
        reality:
          'The federal three-tier shape in the United States is not a template the states are required to follow: state structures vary in the number of tiers, the names of the courts, and how judges reach the bench — some elected, some appointed.',
      },
      {
        claim: 'Every federal country decentralises its judiciary.',
        reality:
          'Spain does not. Article 117.5 establishes one national judiciary in a state that decentralises much else.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two questions separate all five designs, and they are independent of each other.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Are there two sets of courts, or one set applying two bodies of law?',
          'Who administers the courts that apply national law — the nation, or the unit?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'The United States answers two sets, each administered at its own level. Australia answers one set for most purposes, with federal jurisdiction conferred on state courts. Switzerland answers one set, cantonally administered, nationally regulated. Germany answers Land-administered courts applying federal law. Brazil answers both sets. Spain answers one set, nationally unified.',
        claim: 'analysis',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a person, the consequence of these designs is which court will hear their case and under whose rules — which is why the allocation is made by law rather than by choice. For a federal system, the consequence is whether national law means the same thing everywhere, which is the problem the Swiss unification of procedure and the Brazilian Superior Tribunal de Justiça were each built to address.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Levels are not ranks',
        text: 'A national court is not a superior officer of a sub-national one. Where a national apex court reviews sub-national decisions, it does so on defined questions of national law, under rules that say when it may — not by virtue of sitting at a higher level of government.',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [court jurisdiction](/courts/court-jurisdiction), [how policing is divided between levels](/law-enforcement/how-policing-is-divided-between-levels), and [supreme courts and final appeal](/courts/supreme-courts-and-final-appeal).',
      },
    ],
  },
  {
    slug: 'why-judicial-independence-matters',
    title: 'Why judicial independence matters',
    shortTitle: 'Why judicial independence matters',
    question:
      'What arrangements make a judiciary independent, and does having them mean it is?',
    summary:
      'Independence is built from appointment, tenure, pay, administration and the separation of governing bodies from adjudicating ones. Every one of those is a formal guarantee, and a formal guarantee is not the same as a working one.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['why-courts-matter', 'supreme-courts-and-final-appeal', 'court-hierarchy'],
    relatedInstitutions: ['constitutional-court'],
    sources: [
      'es-constitution',
      'de-grundgesetz',
      'ca-scc-act',
      'us-courts-comparing',
      'ie-courts-service',
      'br-cf-1988',
      'ch-constitution',
      'udhr',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'cleared',
    updatedOn: '2026-08-25',
    publishedOn: '2026-08-25',
    reviewedOn: '2026-08-25',
    factsVerifiedOn: '2026-08-25',
    readingTimeMinutes: 10,
    keyTerms: ['judicial-independence', 'court', 'rule-of-law'],
    uncertainty: [
      'This page describes formal arrangements recorded in constitutions and statutes. It makes no assessment of whether any judiciary is independent in practice, and it ranks no country. Those are empirical questions that constitutional wording cannot answer.',
      'Appointment and disciplinary procedures were researched only as far as the constitutional outline in this corpus. For several countries the corpus records them as unresearched, and they are not described.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Judicial independence is not a quality a judge has. It is a set of arrangements that make it possible to decide a case against the interests of whoever appointed you, and difficult for anyone to make you regret it.',
      },
      {
        kind: 'definitionList',
        items: [
          {
            term: 'Decisional independence',
            description:
              'That no one may direct the outcome of a particular case. This is the part most people mean by the phrase, and the part that formal structures exist to protect.',
          },
          {
            term: 'Institutional independence',
            description:
              'That the judiciary as a body is not subordinate to the executive or the legislature in its functioning — including who decides its budget, its staffing and its case allocation.',
          },
          {
            term: 'Personal security',
            description:
              'Appointment on defined criteria, tenure that cannot be ended at will, and pay that cannot be reduced as a response to decisions.',
          },
        ],
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This explains the institutional arrangements and their limits. It is not legal advice, it assesses no country’s judiciary, and it makes no claim about how any judiciary performs.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Courts decide cases in which the state is a party — criminal prosecutions, challenges to official decisions, disputes about the limits of public power. A court that could be directed, removed or defunded by the losing party in those cases would not be deciding them.',
      },
      {
        kind: 'paragraph',
        text: 'The requirement is therefore structural rather than moral. It does not assume officials would interfere; it removes the means, so that the question of whether they would need not be answered case by case.',
        claim: 'analysis',
      },
    ],
    howItWorks: [
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Governing a judiciary and adjudicating in it are separate jobs',
        text: 'Spain makes this explicit and is the clearest example in this corpus. Article 122 makes the Consejo General del Poder Judicial the GOVERNING body of the judiciary — appointments, discipline and administration of judges — and it is not a court and does not decide cases. Confusing it with the Tribunal Supremo is a common error. Separating the two means the body that manages judges’ careers is not the body that hears appeals from them.',
      },
      {
        kind: 'paragraph',
        text: 'Germany separates a different pair. The courts that hear most cases are administered by the Länder while applying federal law, so court administration and adjudicative hierarchy do not coincide. A judiciary can be administered at one level and answerable, on the law, to courts at another.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'Composition can also be fixed by statute rather than left to the appointing power. Under the Supreme Court Act, the Supreme Court of Canada "shall consist of a chief justice to be called the Chief Justice of Canada, and eight puisne judges", and at least three of them must be appointed from Quebec, reflecting Quebec’s distinct civil-law tradition. Writing the number and the composition into law removes two things an appointing authority might otherwise adjust.',
        claim: 'fact',
        sources: ['ca-scc-act'],
      },
      {
        kind: 'paragraph',
        text: 'How judges reach the bench varies widely even inside one country. In the United States, state court structures vary in the number of tiers, the names of the courts, and how judges reach the bench — some elected, some appointed. A single national description of judicial selection would be wrong about most of the country.',
        claim: 'fact',
        sources: ['us-courts-comparing'],
      },
    ],
    misconceptions: [
      {
        claim:
          'A constitution guaranteeing judicial independence means the judiciary is independent.',
        reality:
          'A constitutional guarantee is a formal arrangement. Whether it holds is an empirical question about practice, appointments, budgets and pressure, which the text cannot answer. This site describes the arrangements and does not infer performance from them.',
      },
      {
        claim: 'Independence means judges are not accountable.',
        reality:
          'Judges give reasons that can be read and criticised, their decisions can be appealed, and most systems provide disciplinary procedures and grounds for removal. What independence rules out is being directed on the outcome of a case, not being answerable for conduct.',
      },
      {
        claim: 'One appointment method produces independence.',
        reality:
          'No source here establishes that, and this site does not rank appointment systems. Executive appointment, legislative involvement, judicial councils, commissions and election all appear among functioning systems, and each carries different risks.',
      },
      {
        claim: 'Criticising a judgment undermines judicial independence.',
        reality:
          'Reasoned public criticism of a decision is a normal part of legal life, and appeal is the mechanism the system itself provides for disagreement. What independence protects against is direction and reprisal, not disagreement.',
      },
      {
        claim: 'The body that governs the judiciary is its highest court.',
        reality:
          'In Spain the CGPJ governs appointments, discipline and administration and is expressly not a court. The Tribunal Supremo is the highest court of the ordinary judiciary. They are different institutions doing different work.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four levers appear across the systems in this corpus, and systems pull them in different combinations.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Who appoints, and on whose nomination or confirmation.',
          'How long the appointment lasts, and on what grounds it can end.',
          'Who administers the courts and manages judges’ appointments and discipline.',
          'Who controls the budget and the allocation of cases.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Spain separates the third lever into a dedicated constitutional body. Canada fixes composition in statute. Germany splits administration from hierarchy. The United States allows the levers to be set differently in every state. None of these is presented here as better than another.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The Universal Declaration of Human Rights states the declared principle of a fair and public hearing by an independent and impartial tribunal in the determination of any criminal charge. That places independence among the conditions of a fair hearing rather than among the privileges of judges — it exists for the person before the court, not for the person on the bench.',
        claim: 'fact',
        sources: ['udhr'],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Formal guarantee and working practice are different claims',
        text: 'This page describes what constitutions and statutes provide. Whether those provisions function — whether appointments are made on the stated criteria, whether budgets are used as leverage, whether judges in fact decide free of pressure — cannot be read off the text, and nothing here should be taken as an assessment of any country. Where this site says a country provides an arrangement, it is describing the arrangement.',
      },
      {
        kind: 'paragraph',
        text: 'Independence and accountability are often presented as a trade, where more of one means less of the other. The arrangements above suggest a different reading: they are answers to different questions. Independence asks who may influence the outcome of a case. Accountability asks who may examine how a judge behaved and how a decision was reasoned. A system can and generally does answer both.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [judicial independence](/glossary/judicial-independence), [what a judge does](/professions/judge), and [why courts matter](/courts/why-courts-matter).',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     Wave 14 — the mechanics of access.

     The concept of access to justice is owned by /justice/access-to-justice, and
     how defence is paid for is owned by the defence cluster. What neither covers,
     and what these pages add, is the set of arrangements that determine whether a
     person can actually use a forum: the language it runs in, whether they can
     follow and take part, what it costs, and who administers it.
     ------------------------------------------------------------------------ */
  {
    slug: 'court-language-and-interpretation',
    title: 'Court language and interpretation',
    shortTitle: 'Court language',
    question: 'What happens if you do not speak the language the court uses?',
    summary:
      'Four systems answer differently, and the difference is not how much protection they give. It is whether the proceedings move towards the person or the person is translated into the proceedings.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'taking-part-in-your-own-case',
      'the-cost-of-going-to-court',
      'what-do-courts-do',
    ],
    sources: [
      'de-gvg-gerichtssprache',
      'za-constitution',
      'ca-charter-1982',
      'ke-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['fair-trial', 'due-process'],
    uncertainty: [
      'Four systems are described from primary constitutional and statutory text. Nothing here describes the availability, quality, cost or organisation of interpretation in practice anywhere, which would require evidence the platform does not hold.',
      'Interpretation in civil and administrative proceedings is described only where the provision quoted covers them. Most of the material here concerns criminal proceedings.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A court runs in a language. If the person whose case it is does not understand that language, everything else the system provides — the right to be heard, to answer the case, to test evidence — becomes unusable, because all of it happens in words the person cannot follow. Provision for language is therefore not a courtesy attached to a hearing; it is a condition of the hearing being one.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes constitutional and statutory provisions on the language of proceedings. It is not legal advice, it does not describe how to request an interpreter anywhere, and it makes no assessment of interpretation services in any country.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Every other procedural guarantee assumes comprehension. A person who cannot follow the proceedings cannot exercise a right to be present in any meaningful sense, cannot instruct anyone, and cannot know what has been decided about them until afterwards. The guarantee is what converts physical presence into participation.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the provisions sit at constitutional level so often',
        text: 'Language provision costs money and is easy to ration quietly. Three of the four systems here put it in the constitution or in a code rather than leaving it to court practice, which makes it a claim a person can assert rather than a service that may or may not be resourced. That placement is the substance of the protection, not its packaging.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'South Africa starts from the person. Section 35(3)(k) of the Constitution gives every accused person the right to be tried in a language that the accused person understands — and only *if that is not practicable* the right to have the proceedings interpreted in that language. Interpretation is the fallback; the primary entitlement is that the trial itself is conducted in a language the accused follows.',
        claim: 'fact',
        sources: ['za-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Germany starts from the court, and says so in one sentence. Section 184 of the Courts Constitution Act opens with four words: “Die Gerichtssprache ist deutsch.” The language of the court is German. The same provision then guarantees a single exception: the right of the Sorbs to speak Sorbian before a court in the home districts of the Sorbian population.',
        claim: 'fact',
        sources: ['de-gvg-gerichtssprache'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'These two are not different amounts of the same protection. South Africa contemplates moving the proceedings to the person’s language where practicable; Germany fixes the language of the court and moves the person into it through translation. A comparison that reported both as "the right to an interpreter" would erase the difference — and it is the difference that determines what a person is actually entitled to ask for.',
      },
      {
        kind: 'paragraph',
        text: 'Because Germany fixes the court language, section 187 has to carry the whole mechanism. The court engages an interpreter or translator for an accused or convicted person not in command of German so far as this is necessary for the exercise of their rights in criminal procedure, and must instruct the accused, in a language they understand, that they may claim the *unentgeltliche* — free of charge — engagement of an interpreter or translator for the whole of the proceedings.',
        claim: 'fact',
        sources: ['de-gvg-gerichtssprache'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Being told about the right is part of the right',
        text: 'The German provision requires the instruction to be given in a language the accused understands, and Kenya and South Africa each require that any information their provisions mandate be given in a language the person understands. A right a person is informed of only in a language they do not speak has not been conferred in any practical sense.',
      },
      {
        kind: 'paragraph',
        text: 'Canada writes the entitlement more widely than the others. Section 14 of the Charter provides that a party *or witness* in *any proceedings* who does not understand or speak the language in which the proceedings are conducted, *or who is deaf*, has the right to the assistance of an interpreter. Three expansions sit in one sentence: it is not confined to criminal proceedings, it is not confined to the accused, and it treats deafness alongside not speaking the language.',
        claim: 'fact',
        sources: ['ca-charter-1982'],
      },
      {
        kind: 'paragraph',
        text: 'Kenya says who pays. Article 50(2)(m) gives an accused person the right to the assistance of an interpreter *without payment* if the accused cannot understand the language used at the trial, and Article 50(3) requires information the Article mandates to be given in a language the person understands.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
    ],
    misconceptions: [
      {
        claim: 'Every system gives the same thing: an interpreter when you need one.',
        reality:
          'South Africa’s primary entitlement is to be tried in a language the accused understands, with interpretation only where that is not practicable. Germany fixes the court language by statute and supplies translation into it. Those are different starting points, not different wordings.',
      },
      {
        claim: 'Interpretation rights apply only to the accused in a criminal trial.',
        reality:
          'Canada’s Charter section 14 covers a party or witness in any proceedings. Whether the entitlement extends beyond criminal cases depends entirely on how the provision is drafted.',
      },
      {
        claim: 'Language provision is about foreign nationals.',
        reality:
          'Canada’s provision covers deafness in the same clause, and Germany’s guarantees the right of the Sorbs — a domestic minority — to speak Sorbian before a court. The question is comprehension, not nationality.',
      },
      {
        claim: 'If a court provides an interpreter, the person will be charged for it.',
        reality:
          'Kenya’s Article 50(2)(m) gives the assistance of an interpreter without payment, and the German provision requires the accused to be told they may claim it free of charge for the whole proceedings. Who pays is a question each system answers in its own text.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four techniques for the same problem.',
      },
      {
        kind: 'list',
        items: [
          'Try the case in a language the accused understands, and interpret only where that is not practicable — South Africa, s 35(3)(k).',
          'Fix a single court language by statute, with one named minority exception, and translate into it — Germany, GVG § 184 with § 187.',
          'Give any party or witness in any proceedings an interpreter, deafness included — Canada, Charter s. 14.',
          'Give the accused an interpreter without payment, and require information to be given in a language they understand — Kenya, Art. 50(2)(m) and 50(3).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Text is not service',
        text: 'Every statement here is about what a provision says. Whether interpreters are available, qualified, timely or adequately paid in any of these systems is a separate empirical question, and this page makes no claim about it.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A language provision drafted as a right is contestable in a way a service is not. Where the entitlement is constitutional, a proceeding conducted without it has a defect that can be raised, independently of whether the outcome looks correct.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The German waiver rule shows what taking the entitlement seriously looks like in drafting. A waiver of written translation is effective only where the accused has first been instructed about the right and about the consequences of waiving it, and both the instruction and the waiver must be documented.',
        claim: 'fact',
        sources: ['de-gvg-gerichtssprache'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [taking part in your own case](/courts/taking-part-in-your-own-case), [access to justice](/justice/access-to-justice), and [what courts do](/courts/what-do-courts-do).',
      },
    ],
  },
  {
    slug: 'taking-part-in-your-own-case',
    title: 'Taking part in your own case',
    shortTitle: 'Taking part',
    question:
      'What does a court do when someone cannot follow proceedings in the ordinary way?',
    summary:
      'Presence is not participation. Systems provide intermediaries, interpretation for deafness, and written translation of key documents — and in German law one of those entitlements changes depending on whether the person has a lawyer.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'court-language-and-interpretation',
      'the-cost-of-going-to-court',
      'what-do-courts-do',
    ],
    sources: [
      'ca-charter-1982',
      'ke-constitution',
      'de-gvg-gerichtssprache',
      'za-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['fair-trial'],
    uncertainty: [
      'Three systems are described from primary text. Physical accessibility of court buildings, assistive technology, support for people with cognitive or psychiatric conditions, and the training of court staff were not researched and are not described.',
      'This page describes provisions that exist. It makes no claim about whether they are used, resourced or effective anywhere.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A person can be in the room and still be absent from the proceedings. Participation means being able to follow what is said, understand what is being decided, communicate with the court, and know what the documents say. Provisions for participation are the arrangements that close the gap between attending a hearing and being party to one.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes constitutional and statutory provisions on participation. It is not legal advice, it describes no process for requesting any form of assistance, and it assesses no court’s facilities or practices.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The right to be present at one’s own trial is among the oldest procedural guarantees, and on its own it is close to empty. It secures a body in a seat. What makes presence worth having is the ability to understand and to be understood, and that is not distributed equally among the people courts deal with.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Two different problems, often conflated',
        text: 'Not understanding the language of the court and not being able to communicate with the court are different obstacles requiring different remedies. An interpreter solves the first. Someone who cannot give evidence in the ordinary way — because of age, disability, or the nature of the case — needs something else, and systems that provide only interpretation have answered only half the question.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'South Africa and Kenya both guarantee presence, and both bound it. Section 35(3)(e) of the South African Constitution gives every accused person the right to be present when being tried; Kenya’s Article 50(2)(f) gives the same right unless the conduct of the accused person makes it impossible for the trial to proceed. Presence is the baseline the rest of this page builds on.',
        claim: 'fact',
        sources: ['za-constitution', 'ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Kenya provides for an intermediary. Article 50(7) states that in the interest of justice, a court may allow an intermediary to assist a complainant or an accused person to communicate with the court. It is drafted as a judicial discretion rather than an entitlement, it covers complainants as well as accused people, and it addresses communication generally rather than language specifically.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Canada folds one accessibility question into its interpretation clause. Charter section 14 gives the right to the assistance of an interpreter to a party or witness in any proceedings who does not understand or speak the language in which the proceedings are conducted *or who is deaf*. Deafness is named in the constitutional text, not left to be inferred from a general equality provision.',
        claim: 'fact',
        sources: ['ca-charter-1982'],
      },
      {
        kind: 'paragraph',
        text: 'Documents are the third element, and German law is unusually specific about them. Section 187(2) of the Courts Constitution Act provides that written translation of custodial orders, indictments, penal orders and non-final judgments is as a rule necessary for an accused not in command of German; an extract suffices where that preserves their procedural rights; and the translation is to be provided without delay.',
        claim: 'fact',
        sources: ['de-gvg-gerichtssprache'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'One entitlement changes because of another',
        text: 'The same provision allows an oral translation or an oral summary to replace the written one where that preserves the accused’s procedural rights — and states that this is as a rule to be assumed **where the accused has defence counsel**. Having a lawyer alters what the court must translate. It is a rare case of a statute making the interaction between two access mechanisms explicit, and it cuts both ways: the assistance is calibrated to what the person can already reach, and a person without counsel is entitled to more from the court.',
      },
      {
        kind: 'paragraph',
        text: 'Waiver is guarded. Under section 187(3) an accused can effectively waive written translation only after being instructed about the right and about the consequences of waiving it, and both the instruction and the waiver must be documented.',
        claim: 'fact',
        sources: ['de-gvg-gerichtssprache'],
      },
    ],
    misconceptions: [
      {
        claim: 'If a person is present at their trial, they are taking part in it.',
        reality:
          'Presence secures attendance. Following the proceedings, communicating with the court and knowing what the documents say are separate matters that systems address with separate provisions.',
      },
      {
        claim: 'An interpreter covers every participation problem.',
        reality:
          'Kenya provides separately for an intermediary to assist a complainant or an accused person to communicate with the court — a different remedy for a different obstacle, framed as a judicial discretion rather than a right.',
      },
      {
        claim: 'Support for participation is only for the accused.',
        reality:
          'Canada’s provision covers a party or witness in any proceedings, and Kenya’s intermediary provision covers complainants as well as accused people.',
      },
      {
        claim: 'What the court must translate is fixed.',
        reality:
          'Under the German provision an oral translation or summary may replace a written one where procedural rights are preserved, which is as a rule assumed where the accused has defence counsel. The entitlement varies with what else the person has.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three mechanisms, drafted at different strengths.',
      },
      {
        kind: 'list',
        items: [
          'A constitutional right, naming deafness alongside language, for any party or witness — Canada, Charter s. 14.',
          'A judicial discretion to allow an intermediary, covering complainants and accused people — Kenya, Art. 50(7).',
          'A statutory rule on written translation of named documents, with a guarded waiver — Germany, GVG § 187(2)–(3).',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'A narrow slice of a wide subject',
        text: 'Physical access to court buildings, assistive technology, support for people with cognitive or psychiatric conditions, and remote participation are all part of this subject and none was researched here. Their absence from this page is a gap in the research, not evidence that systems lack them.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The value of these provisions to a person is that they convert a practical difficulty into a legal question. Whether someone could follow their own trial becomes something a court can be asked about, rather than something that is noticed only if it goes badly wrong.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The documentation requirement does similar work from the record’s side. A waiver that must be recorded, with the instruction that preceded it, leaves evidence that the question was put — which is what makes it reviewable later.',
        claim: 'fact',
        sources: ['de-gvg-gerichtssprache'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [court language and interpretation](/courts/court-language-and-interpretation), [representing yourself](/defence/representing-yourself), and [access to justice](/justice/access-to-justice).',
      },
    ],
  },
  {
    slug: 'the-cost-of-going-to-court',
    title: 'The cost of going to court',
    shortTitle: 'The cost of court',
    question: 'Does using a court cost money, and what do constitutions say about that?',
    summary:
      'Usually yes, and two constitutions address it directly — one by requiring any fee to be reasonable and not to impede access, the other by naming specific things that must be free. Neither makes justice costless, and neither claims to.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'court-language-and-interpretation',
      'taking-part-in-your-own-case',
      'who-runs-the-courts',
    ],
    sources: ['ke-constitution', 'br-cf-1988'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
    keyTerms: ['fair-trial'],
    uncertainty: [
      'No fee schedule was obtained for any jurisdiction and none is quoted. This page describes how two constitutions treat cost, not what anything costs.',
      'Lawyers’ fees, costs orders between parties, and litigation funding were not researched and are not described. How states pay for defence representation is covered in the defence cluster and is not restated here.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Using a court usually involves paying something: a fee to start proceedings, a fee for a copy of the record, the cost of getting there, and in most matters the cost of a lawyer. Cost is the most ordinary barrier to using a legal institution and the least dramatic, which is part of why it is often left out of accounts of access.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what two constitutions say about the cost of using courts. It states no fee, no threshold and no eligibility rule, it is not legal advice, and it does not describe how to apply for anything.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'Fees exist for reasons that are not disreputable. They recover part of the cost of running a system, and they impose a small check on bringing proceedings with nothing at stake. The difficulty is that a fee set at a level that does either of those things is, for some people, the whole difference between having a remedy and not having one.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why this is a constitutional question rather than an administrative one',
        text: 'A fee is set by whoever runs the courts, and the effect of setting it too high is that certain claims are never brought — which is invisible, because the cases that were priced out leave no record. A constitutional constraint on fees is a response to a barrier that does not show up in any of the system’s own statistics.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Kenya addresses fees in the access provision itself. Article 48 of the Constitution states, in full: "The State shall ensure access to justice for all persons and, if any fee is required, it shall be reasonable and shall not impede access to justice." Two constraints in one clause — the fee must be reasonable, and separately it must not impede access.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Read the conditional',
        text: 'The provision says "if any fee is required". It does not abolish fees, and it does not presume they are wrong. It accepts that a system may charge and then constrains what charging may do — which is a more workable constitutional standard than a prohibition would be, and a more demanding one than a general commitment to access.',
      },
      {
        kind: 'paragraph',
        text: 'The same constitution shows that access-protective drafting does not mean everything is free. Article 50(5)(b) gives a right to a copy of the record of proceedings within a reasonable period after they are concluded — "in return for a reasonable fee as prescribed by law". The record is guaranteed; it is not guaranteed gratis.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil takes the other approach and names specific gratuities. Article 5º LXXVII provides that actions of habeas corpus and habeas data are free, as are, in the form of the law, the acts necessary to the exercise of citizenship. Article 5º LXXVI makes civil birth registration and the death certificate free, in the form of the law, for the recognisedly poor.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'What the Brazilian selection tells you',
        text: 'Habeas corpus is the remedy against unlawful detention and habeas data the remedy for access to one’s own records held by the state. Both are proceedings a person brings against public power, and both are made free unconditionally rather than on proof of poverty. The choice is not random: a charge for challenging your own detention would be a charge for using the one remedy the state has the strongest interest in your not using.',
      },
      {
        kind: 'paragraph',
        text: 'Alongside those specific gratuities sits Brazil’s general provision on assistance. Article 5º LXXIV states that the State shall provide full and free legal assistance to those who prove insufficiency of resources — an entitlement conditioned on proof, and one that concerns assistance rather than the cost of the proceedings themselves.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
    ],
    misconceptions: [
      {
        claim: 'Access to justice means using a court is free.',
        reality:
          'Kenya’s Article 48 is drafted as "if any fee is required, it shall be reasonable and shall not impede access to justice" — a constraint on charging, not an abolition of it. The same constitution gives a right to a copy of the record in return for a reasonable fee.',
      },
      {
        claim: 'A constitution that protects access will not put a price on anything.',
        reality:
          'Brazil names specific things that are free — habeas corpus, habeas data, and for the recognisedly poor civil birth registration and the death certificate. Naming some things as free implies the others are not.',
      },
      {
        claim: 'Free legal assistance and free proceedings are the same guarantee.',
        reality:
          'They are separate. Brazil’s Article 5º LXXIV provides assistance to those who prove insufficiency of resources; Article 5º LXXVII makes two named actions free to everyone. One is about help, the other about the cost of the proceeding.',
      },
      {
        claim: 'Court fees are an administrative matter, not a rights question.',
        reality:
          'Two of the constitutions read here treat them as a rights question and put constraints in the constitutional text. Whether that is the right approach is a policy question this page does not take a position on.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Two constitutional techniques for the same problem.',
      },
      {
        kind: 'list',
        items: [
          'A general standard applying to any fee — Kenya, Art. 48: reasonable, and not impeding access.',
          'Named gratuities for specific proceedings and documents — Brazil, Art. 5º LXXVI and LXXVII.',
          'A means-conditioned entitlement to assistance, which is a different thing from a fee rule — Brazil, Art. 5º LXXIV.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'No prices here',
        text: 'This page quotes no fee schedule for any jurisdiction, because none was obtained to the standard the platform requires. It describes constitutional treatment of cost and nothing about what using a court actually costs anywhere.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A constitutional constraint on fees gives a person something to argue about that is separate from the merits. Where a fee is set at a level that impedes access, that is a challengeable defect in the fee rather than a complaint about the outcome of a case.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also constrains whoever administers the courts. A body that sets fees under a rule requiring them to be reasonable and non-impeding is exercising a bounded power, which is the same structure that governs every other exercise of public authority described on this site.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [who runs the courts](/courts/who-runs-the-courts), [access to justice](/justice/access-to-justice), and [how defence is funded](/defence/how-defence-is-funded).',
      },
    ],
  },
  {
    slug: 'who-runs-the-courts',
    title: 'Who runs the courts',
    shortTitle: 'Who runs the courts',
    question: 'Who administers a court system, if not the judges deciding cases?',
    summary:
      'Somebody has to appoint staff, set budgets, handle complaints and keep the buildings open, and doing that is not judging. Two constitutions create a body for it — and give that body the uncomfortable job of protecting judicial independence while also disciplining judges.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'the-cost-of-going-to-court',
      'why-judicial-independence-matters',
      'court-hierarchy',
    ],
    sources: ['ke-constitution', 'br-cf-1988', 'de-grundgesetz'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['judicial-independence', 'accountability', 'oversight'],
    uncertainty: [
      'Three systems are described from primary constitutional text. How these bodies operate, how they are composed in practice, and how their decisions are received were not researched and are not described.',
      'Systems where court administration sits with a justice ministry rather than a dedicated body exist and are not described here.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Deciding cases is one activity. Appointing and disciplining staff, preparing budgets, setting fees, running registries, handling complaints and maintaining buildings are others, and they are what makes deciding cases possible. Court administration is the name for the second group, and the question of who holds it is separate from the question of who judges.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes constitutional arrangements for administering court systems. It does not describe how any of these bodies operates, does not assess any of them, and is not a route for making a complaint about a court anywhere.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A judiciary that administered nothing would depend entirely on another branch for its staff, its premises and its money — which is a substantial lever over an institution the same constitution declares independent. A judiciary that administered everything with no external check would be answerable to nobody for how it spent public funds or how it treated the people who work in it. Every arrangement in this area is a position between those two problems.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The tension is built into the mandate',
        text: 'These bodies are typically asked to do two things that pull apart: to protect judicial independence, and to discipline judicial officers. A body that only protected would be a shield; a body that only disciplined would be a threat to the independence it operates inside. Constitutions that create one are declining to separate the functions, and the composition of the body is where that choice is actually made.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Kenya states the double mandate in the first line. Article 172(1) provides that the Judicial Service Commission shall promote and facilitate the independence and accountability of the judiciary and the efficient, effective and transparent administration of justice — and then lists what it shall do: recommend persons to the President for appointment as judges; review and make recommendations on the conditions of service of judges, judicial officers and the staff of the Judiciary, other than their remuneration; appoint, receive complaints against, investigate and remove from office or otherwise discipline registrars, magistrates, other judicial officers and other staff; prepare and implement programmes for the continuing education and training of judges and judicial officers; and advise the national government on improving the efficiency of the administration of justice.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'One exclusion worth noticing',
        text: 'The Commission reviews conditions of service "other than their remuneration". Pay is deliberately placed outside its remit — which is a recurring device in constitutional design, because control over what judges are paid is one of the more direct forms of leverage over them.',
      },
      {
        kind: 'paragraph',
        text: 'Kenya also separates the money. Article 173 establishes a Judiciary Fund administered by the Chief Registrar of the Judiciary and used for the administrative expenses of the Judiciary; the Chief Registrar prepares annual estimates and submits them to the National Assembly for approval, and once approved the expenditure of the Judiciary is a charge on the Consolidated Fund paid directly into the Judiciary Fund.',
        claim: 'fact',
        sources: ['ke-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why "paid directly" is the operative phrase',
        text: 'A budget that is approved by the legislature and then routed through an executive department can be delayed, conditioned or reduced in transit. Making the expenditure a charge on the Consolidated Fund paid directly into a judiciary-administered fund removes an intermediary. The legislature still approves the amount — the accountability is intact — but nobody stands between the approval and the money.',
      },
      {
        kind: 'paragraph',
        text: 'Brazil creates a body with a control mandate rather than a service one. Article 103-B § 4º gives the Conselho Nacional de Justiça competence for the control of the administrative and financial activity of the Judiciary and of judges’ compliance with their functional duties. It may safeguard the autonomy of the Judiciary and issue regulatory acts within its competence; review the legality of administrative acts of members or organs of the Judiciary and annul them, revise them or set a period for compliance; and receive complaints against members or organs of the Judiciary, including its auxiliary services and delegated notarial and registry services, take over disciplinary proceedings already under way, and order removal, availability or retirement or apply other administrative sanctions.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'Germany does not create such a body at national level, and administers courts through the general constitutional rule instead. The courts that hear most cases are administered by the Länder while applying federal law, following Article 83 of the Basic Law under which the Länder execute federal laws in their own right. Administration and adjudicative hierarchy therefore do not coincide.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
    ],
    misconceptions: [
      {
        claim: 'Judges run the courts.',
        reality:
          'Judges decide cases. Appointment of staff, budgets, complaints and training are handled elsewhere — in Kenya by a Judicial Service Commission, in Brazil by a national council, in Germany by the Länder.',
      },
      {
        claim: 'A body that disciplines judges is a threat to judicial independence.',
        reality:
          'Kenya’s constitution gives the same commission both mandates in one sentence: promoting independence and accountability. Whether a particular design achieves the balance is a real question, but the pairing is deliberate rather than an oversight.',
      },
      {
        claim: 'Court administration is an internal matter with no effect on the public.',
        reality:
          'It determines staffing, fees, registries and how complaints are handled — which is most of what a person encounters before reaching a judge at all.',
      },
      {
        claim: 'Every country has a judicial council.',
        reality:
          'Germany administers its ordinary courts through the Länder under the general rule of Article 83 of the Basic Law rather than through a national council. The body is one solution to the problem, not the definition of it.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Three arrangements for the same set of tasks.',
      },
      {
        kind: 'list',
        items: [
          'A commission with a stated double mandate plus a directly funded judiciary fund — Kenya, Arts. 172 and 173.',
          'A national council with a control mandate over administrative and financial activity and functional duties — Brazil, Art. 103-B § 4º.',
          'No national body; administration follows the general rule that the Länder execute federal law — Germany, Basic Law Art. 83.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Composition is where the design actually lives',
        text: 'Who sits on these bodies — judges, lawyers, appointees of other branches, lay members — determines what they are in practice, and that was not researched here. This page describes mandates, not compositions, and a mandate tells you what a body may do rather than what it will.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'For a person with a complaint about a court, the first question is which body receives it, and the answer follows from the administrative arrangement rather than from the court hierarchy. Kenya’s commission receives complaints against registrars, magistrates, other judicial officers and staff; Brazil’s council receives complaints against members and organs of the Judiciary including its auxiliary and delegated services.',
        claim: 'fact',
        sources: ['ke-constitution', 'br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'The wider point is that judicial independence is not only about deciding cases without instruction. It also depends on who controls the conditions under which cases are decided, which is why constitutions that take independence seriously tend to say something about administration and money as well as about adjudication.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [why judicial independence matters](/courts/why-judicial-independence-matters), [the cost of going to court](/courts/the-cost-of-going-to-court), and [why justice systems need oversight](/justice/why-justice-systems-need-oversight).',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     Wave 19 — remedies, appeals and review.

     Nine existing pages already establish WHY correction mechanisms exist, what a
     remedy is, that appeal is not universally a retrial, and that respect for
     courts is compatible with challenging them. None of that is repeated.

     What was missing is the layer between "correction mechanisms exist" and "here
     is a court": the distinction between appeal and review, the models of
     constitutional review, what a reviewing court can actually order, and three
     misconceptions no page refuted — that a procedural breach voids a proceeding,
     that unlawfully obtained evidence is always excluded, and that habeas corpus
     is the universal detention remedy.
     ------------------------------------------------------------------------ */
  {
    slug: 'appeal-and-judicial-review-are-different',
    title: 'Appeal and judicial review are different',
    shortTitle: 'Appeal vs judicial review',
    question: 'Is judicial review just another word for appeal?',
    summary:
      'No. An appeal asks whether a decision was right; judicial review asks whether a body acted within its powers and followed a lawful process. German law makes the difference structural — a court that thinks a statute is unconstitutional may not disapply it, and must stop and refer.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'cassation-review',
      'what-a-reviewing-court-can-do',
      'trial-and-appellate-courts',
    ],
    relatedInstitutions: ['constitutional-court'],
    sources: ['de-stpo-revision', 'de-grundgesetz', 'nl-constitution', 'es-constitution'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['appeal', 'judicial-review', 'jurisdiction'],
    uncertainty: [
      'Four systems are described from primary text. How courts apply these distinctions in practice is case law this platform has not researched.',
      'This page states no time limit, no procedure and no route for bringing anything. It describes what the mechanisms are, not how to use them.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Two questions can be asked about a decision that went against you, and English blurs them. One is whether the decision was correct — the right law applied to the right facts, reaching a defensible result. The other is whether the body was entitled to decide at all, and whether it went about it lawfully. Those are different questions, they are usually answered by different procedures, and the second one can succeed where the first would fail.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This distinguishes two kinds of challenge using provisions from four systems. It is not legal advice, it describes no procedure, time limit or route in any jurisdiction, and it cannot indicate whether anything is challengeable in any case.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A system needs both because decisions fail in two unrelated ways. A tribunal that heard the case properly can still get the answer wrong. And a body that would have reached a perfectly sensible answer can lack the power to decide the question, or reach it without hearing the person affected. Only the first is an error in the decision; the second is a defect in the decision-making.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why the second question is the more powerful one',
        text: 'A challenge to the correctness of a decision has to persuade a reviewing body that a considered judgement was wrong, which is hard and is meant to be. A challenge to the lawfulness of the process does not have to show the outcome was wrong at all — it can succeed while leaving open what the right answer was. That is why the distinction is worth having and why collapsing it into "appeal" loses something.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Start with what an appeal-type review examines when it is drawn narrowly. Section 337 of the German Code of Criminal Procedure provides that a *Revision* may be based **only** on the judgment resting on a violation of the law, and that the law is violated where a legal norm was not applied or was not correctly applied. The object under examination is the judgment, and the question is whether it is legally sound.',
        claim: 'fact',
        sources: ['de-stpo-revision'],
      },
      {
        kind: 'paragraph',
        text: 'Now take a different defect: the statute the court applied may itself be unconstitutional. That is not a complaint about the judgment, and the German Basic Law does not let the trial court treat it as one. Under Article 100(1), if a court concludes that a law on whose validity its decision depends is unconstitutional, the proceedings **shall be stayed** and a decision obtained from the Federal Constitutional Court where the Basic Law is held to be violated.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'The ordinary court may not simply decline to apply a statute it believes unconstitutional. It must stop and ask a different court. That is the cleanest available demonstration that reviewing a judgment and reviewing a norm are separate jurisdictions rather than degrees of the same thing — the same judge, the same case, and a question that has to leave the room.',
      },
      {
        kind: 'paragraph',
        text: 'The third route is different again: a complaint that public authority infringed a right, brought by the person affected rather than routed through a court. Article 94(1)4a provides that the Federal Constitutional Court rules on constitutional complaints, which may be filed by *any person* alleging that one of their basic rights or one of the listed rights has been infringed by public authority.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A numbering note worth having',
        text: 'Most references cite Article 93 for the jurisdiction of the German Federal Constitutional Court. In the current text of the Basic Law, Article 93 sets out its composition and Article 94 its jurisdiction — the two were swapped. This page cites the current text.',
      },
      {
        kind: 'paragraph',
        text: 'These routes are ordered rather than parallel, and Spain states the ordering in its constitution. Article 53.2 provides that any citizen may seek protection of the rights in Article 14 and Section 1 of Chapter 2 before the **ordinary courts**, by a procedure based on the principles of *preferencia y sumariedad* — preference and summariness, and *where appropriate* thereafter through the *recurso de amparo* before the Constitutional Court.',
        claim: 'fact',
        sources: ['es-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'German law contemplates the same sequencing. Article 93(5) provides that the federal law regulating the Court may require that all other legal remedies be exhausted before a constitutional complaint may be filed, and may provide a separate proceeding to decide whether a complaint is accepted at all.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'And one system removes the question entirely',
        text: 'Article 120 of the Dutch Constitution provides that the constitutionality of Acts of Parliament and treaties **shall not be reviewed by the courts**. There is no referral, no complaint and no filter, because there is no jurisdiction to route anything into. Any account of "judicial review" as a feature of rule-of-law systems has to survive that sentence, and the general accounts usually do not.',
      },
    ],
    misconceptions: [
      {
        claim: 'Judicial review is a kind of appeal.',
        reality:
          'They examine different things. A German Revision may be based only on the judgment resting on a violation of the law; a challenge to the constitutionality of the statute the court applied cannot be raised that way at all and must go to a different court under Article 100.',
      },
      {
        claim: 'A court that thinks a law is unconstitutional will simply not apply it.',
        reality:
          'Not in Germany. Article 100(1) requires the proceedings to be stayed and a decision obtained from the Federal Constitutional Court. Whether an ordinary court may disapply a statute is one of the sharpest differences between systems.',
      },
      {
        claim: 'Every system lets courts review whether a statute is constitutional.',
        reality:
          'Article 120 of the Dutch Constitution provides that the constitutionality of Acts of Parliament and treaties shall not be reviewed by the courts.',
      },
      {
        claim: 'A person can take a rights complaint straight to a constitutional court.',
        reality:
          'Spain routes protection through the ordinary courts first, by a preferential and summary procedure, with amparo available where appropriate. German law permits the statute governing the Federal Constitutional Court to require all other remedies to be exhausted first.',
      },
      {
        claim: 'Winning a review means the decision was wrong.',
        reality:
          'A challenge to the lawfulness of a process can succeed without establishing what the right answer was. That is the difference between saying a decision was incorrect and saying it was not properly made.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Four systems, four positions on who may review what.',
      },
      {
        kind: 'list',
        items: [
          'Review of a judgment confined to legal error, before the ordinary courts — Germany, StPO § 337.',
          'Review of a statute reserved to a separate court, reached by compulsory referral — Germany, Basic Law Art. 100(1).',
          'A complaint by any person that public authority infringed a basic right — Germany, Art. 94(1)4a, with exhaustion permitted by Art. 93(5).',
          'Rights protection before the ordinary courts first, amparo where appropriate — Spain, Art. 53.2.',
          'No review of the constitutionality of Acts of Parliament by any court — the Netherlands, Art. 120.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Four systems, not a survey',
        text: 'Four systems, picked because each writes its answer into a constitution or a code rather than leaving it to be inferred. The rest are absent from this page, and the English phrase "judicial review" is stretched over arrangements elsewhere that none of these four resembles.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Identifying which question is being asked comes before anything else, because the routes are not interchangeable. A complaint that a decision was unfair, sent to a body that examines only legal correctness, is not a weak complaint — it is one that body has no power to answer.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The referral rule is an accountability mechanism in both directions. It stops individual courts quietly disapplying statutes they dislike, and it stops an unconstitutional statute surviving simply because no ordinary court would take responsibility for saying so.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [constitutional review](/justice/constitutional-review), [what a reviewing court can do](/courts/what-a-reviewing-court-can-do), and [judicial review](/glossary/judicial-review).',
      },
    ],
  },
  {
    slug: 'cassation-review',
    title: 'Cassation review',
    shortTitle: 'Cassation',
    question: 'What is cassation, and does a cassation court sit at the top?',
    summary:
      'Cassation is a way of examining a judgment, not a rank a court holds. German law proves the point: the Revision is confined to legal error and is heard against first-instance judgments of courts that are not the apex of anything.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'appeal-and-judicial-review-are-different',
      'supreme-courts-and-final-appeal',
      'what-a-reviewing-court-can-do',
    ],
    sources: ['de-stpo-revision', 'fr-justice-courts', 'be-cassation', 'nl-constitution'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
    keyTerms: ['appeal', 'court', 'jurisdiction'],
    uncertainty: [
      'Four systems are described from primary or official sources. What a cassation court does with a case after quashing, and how often it does so, were not researched.',
      'Civil cassation, and cassation in systems not named here, are not described. Nothing on this page transfers to a system it does not name.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Cassation is a mode of review in which a court examines whether the law was correctly applied and does not re-establish the facts. The word comes from *casser*, to break: the characteristic outcome is that the judgment below is broken rather than replaced. What it is not is a level in a hierarchy, and the English habit of treating "the Court of Cassation" as a translation of "the Supreme Court" loses the distinction entirely.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes a mode of review and where it sits in four systems. It is not legal advice, describes no procedure or time limit, and states nothing about whether any decision can be challenged.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'A system that let every dissatisfied party have the facts examined again would need as many second courts as first ones, and would never finish anything. But legal questions have a different property from factual ones: the answer should be the same everywhere, and a court that hears them from across the system can make it so. Cassation is the arrangement that follows from taking that difference seriously.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The consequence readers find surprising',
        text: 'A court reviewing legal correctness is not primarily interested in whether this litigant was treated justly. It is interested in whether the rule was applied properly, because that answer governs every other case. That is why such a court may quash a judgment and send the case back rather than deciding it — the thing it fixed was the law, and the case still needs deciding.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'German law states the confinement precisely. Section 337 of the Code of Criminal Procedure provides that a *Revision* may be based **only** on the judgment resting on a violation of the law, and that the law is violated where a legal norm was not applied or was not correctly applied. Facts established below are not reopened.',
        claim: 'fact',
        sources: ['de-stpo-revision'],
      },
      {
        kind: 'paragraph',
        text: 'The scope of examination is narrower still. Section 352 provides that the review court examines only the applications actually made, and — where the Revision rests on procedural defects — only the facts designated when those applications were brought. The court does not go looking.',
        claim: 'fact',
        sources: ['de-stpo-revision'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Section 333 provides that Revision lies against the judgments of the Strafkammern and Schwurgerichte **and against first-instance judgments of the Oberlandesgerichte**. So a review confined to legal error — cassation in substance — is available against decisions of courts that are not the apex of the system, and is heard by courts that are not necessarily the apex either. Cassation is a description of what the review does, not of where the court sits.',
      },
      {
        kind: 'paragraph',
        text: 'France supplies the institution most people mean by the word. The Cour de cassation is the highest court of the judicial order, and what makes it distinctive is the mode rather than the position: it reviews whether the law was correctly applied rather than re-deciding the case.',
        claim: 'fact',
        sources: ['fr-justice-courts'],
      },
      {
        kind: 'paragraph',
        text: 'The Netherlands names the same mode in its constitution. Article 118 of the Grondwet provides for the Supreme Court and cassation — so a system can hold cassation at the apex and still be describing a mode of review rather than defining what an apex court is. Belgium likewise operates a Court of Cassation as its highest court in this mode.',
        claim: 'fact',
        sources: ['nl-constitution', 'be-cassation'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two questions, and the name answers neither',
        text: 'Ask what the court examines — the law only, or the facts as well — and ask where it sits. Those are independent. A cassation-mode review can be heard below the apex, as in Germany; an apex court can re-decide cases rather than review them. Reading either answer off the word "cassation" produces a mistake in one direction or the other.',
      },
    ],
    misconceptions: [
      {
        claim: 'A Court of Cassation is that country’s Supreme Court.',
        reality:
          'The name describes the mode of review, not the rank. France’s Cour de cassation is the highest court of the judicial order; German Revision — the same mode — lies against first-instance judgments of the Oberlandesgerichte, which are not the apex.',
      },
      {
        claim: 'Cassation is just the last appeal.',
        reality:
          'It is confined to legal error. German law provides that a Revision may be based only on the judgment resting on a violation of the law, and the review court examines only the applications made.',
      },
      {
        claim: 'Cassation courts decide the case.',
        reality:
          'The characteristic outcome is that the judgment below is broken rather than replaced, which is why the case may return to a lower court to be decided again.',
      },
      {
        claim: 'Only some systems have anything like cassation.',
        reality:
          'The mode appears under different names and in different positions — the German Revision below the apex, the French Cour de cassation and the Belgian Court of Cassation at it, and cassation named in the Dutch Constitution.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Same mode, different positions in the hierarchy.',
      },
      {
        kind: 'list',
        items: [
          'Confined to legal error and available below the apex — Germany, StPO §§ 333, 337, 352.',
          'The highest court of the judicial order, reviewing legal correctness rather than re-deciding — France, Cour de cassation.',
          'Named in the constitution alongside the Supreme Court — the Netherlands, Grondwet Art. 118.',
          'A Court of Cassation as the highest court operating in this mode — Belgium.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Criminal procedure, mostly',
        text: 'The German provisions described here are from the Code of Criminal Procedure. Civil cassation, and the position in systems not named on this page, were not researched.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'A review confined to legal error is a real protection and a limited one, and both halves matter to a person relying on it. It will not reopen a finding about what happened, and it will examine whether the rule applied to that finding was the right one — applied the same way it would be for anyone else.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The narrowing in section 352 is the same trade in procedural form. A court that examined only what was raised is a court whose decisions can be predicted and prepared for, and one whose silence on other points is not a ruling on them.',
        claim: 'fact',
        sources: ['de-stpo-revision'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [supreme courts and final appeal](/courts/supreme-courts-and-final-appeal), [what a reviewing court can do](/courts/what-a-reviewing-court-can-do), and [trial and appellate courts](/courts/trial-and-appellate-courts).',
      },
    ],
  },
  {
    slug: 'what-a-reviewing-court-can-do',
    title: 'What a reviewing court can do',
    shortTitle: 'What review can produce',
    question: 'If a challenge succeeds, what actually changes?',
    summary:
      'Less predictably than the word "won" suggests. Outcomes divide by legal effect — set aside, send back, declare, compensate — and in one constitution the same court striking down the same provision produces different consequences depending on which route the case arrived by.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: [
      'appeal-and-judicial-review-are-different',
      'cassation-review',
      'trial-and-appellate-courts',
      'reviewing-an-emergency-declaration',
    ],
    sources: ['fr-constitution-1958', 'de-stpo-revision', 'iccpr', 'br-cf-1988'],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
    keyTerms: ['appeal', 'judicial-review', 'court'],
    uncertainty: [
      'This page groups outcomes by legal effect using provisions from three systems and one treaty. It is not a catalogue of the remedies available in any jurisdiction.',
      'The English words used for these effects — quash, annul, vacate, set aside, cassate — overlap between systems and are not interchangeable. This page groups by what happens, not by what it is called.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Asking whether a challenge succeeded is less useful than asking what it produced. A reviewing body can leave a decision standing, remove it, replace it, send it back, say what the law is without disturbing anything, or order money paid — and those are different results with different consequences for the person who brought it. "Won" covers all of them and distinguishes none.',
      },
      {
        kind: 'callout',
        variant: 'safety',
        title: 'What this page is and is not',
        text: 'This describes categories of outcome. It states no time limit, names no procedure, and cannot indicate what any challenge would produce in any case. It is not legal advice, and anyone with a real matter needs a lawyer in that jurisdiction rather than a comparative description.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The mismatch between what a person wants and what a forum can give is one of the most common sources of frustration with legal systems, and it is usually a matter of jurisdiction rather than sympathy. A body confined to reviewing legal correctness cannot award compensation; a body that can award compensation may be unable to undo the decision that caused the loss.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The vocabulary problem is real and is not pedantry',
        text: 'Quash, annul, vacate, set aside and cassate all describe removing a decision, and they are not equivalents. Each belongs to a system with its own rules about what survives the removal, whether anything replaces it, and whether effects already produced are reopened. Grouping them by the English word would produce a tidy list and a false one, so this page groups by what actually happens.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'The clearest evidence that outcome depends on route comes from a single constitution. Article 62 of the French Constitution provides that a provision declared unconstitutional on the basis of Article 61 — before promulgation — *ne peut être promulguée ni mise en application* — it may not be promulgated or applied. It never enters the legal order.',
        claim: 'fact',
        sources: ['fr-constitution-1958'],
      },
      {
        kind: 'paragraph',
        text: 'The same article treats the other route differently. A provision declared unconstitutional on the basis of Article 61-1 — raised in proceedings already under way — *is abrogated from the publication of the decision or a later date the decision fixes*, and the Conseil constitutionnel determines the conditions and limits within which the effects the provision has already produced may be called into question.',
        claim: 'fact',
        sources: ['fr-constitution-1958'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Same court, same constitution, same conclusion that a provision is unconstitutional — and two different legal effects, because the case arrived by different routes. One provision never takes effect; the other stops having effect, from a date the court chooses, with the court controlling how far back the consequences reach. Anyone who thinks "struck down" is a single outcome has not met Article 62.',
      },
      {
        kind: 'paragraph',
        text: 'Finality is part of the design rather than an obstacle to it, and the same article says so: the decisions of the Conseil constitutionnel *are not susceptible to any appeal* and bind the public powers and all administrative and judicial authorities. A body that corrects the law is itself a stopping point.',
        claim: 'fact',
        sources: ['fr-constitution-1958'],
      },
      {
        kind: 'paragraph',
        text: 'Where a review is confined to legal error, the natural outcome is removal rather than replacement. German law defines the ground in those terms — a Revision may be based only on the judgment resting on a violation of the law — which is why the characteristic result is that the judgment goes and the case may need deciding again by a court equipped to establish facts.',
        claim: 'fact',
        sources: ['de-stpo-revision'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Sending it back is a real outcome, not a failure to decide',
        text: 'A reviewing court that returns a case has not declined to do its job. It has answered the question it was equipped to answer — was the law applied correctly — and left the question it was not equipped to answer to a court that can hear evidence. That division is the reason the review could be quick enough to be worth having.',
      },
      {
        kind: 'paragraph',
        text: 'Money is a distinct category, and it appears where undoing is impossible. Article 14(6) of the International Covenant on Civil and Political Rights provides that where a person has by a **final** decision been convicted and the conviction is subsequently reversed, or they are pardoned, on the ground that a new or newly discovered fact shows conclusively that there has been a miscarriage of justice, the person who suffered punishment shall be compensated according to law — unless the non-disclosure of the unknown fact in time is wholly or partly attributable to them.',
        claim: 'fact',
        sources: ['iccpr'],
      },
      {
        kind: 'paragraph',
        text: 'Some constitutions state the same remedy directly. Brazil’s Article 5º LXXV provides that the State shall indemnify a person convicted by judicial error, and one held beyond the term fixed in the sentence — compensation as a constitutional entitlement rather than a discretionary consolation.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'paragraph',
        text: 'And review itself is bounded. Article 14(5) of the Covenant gives everyone convicted of a crime the right to have the conviction and sentence reviewed by a higher tribunal *according to law* — a right to review as the state’s law provides, not a right to appeal without limit or by a route of one’s choosing.',
        claim: 'fact',
        sources: ['iccpr'],
      },
    ],
    misconceptions: [
      {
        claim: 'Winning a challenge means the decision is replaced with the right one.',
        reality:
          'Frequently it means the decision is removed and the case returns to a court that can establish facts. A review confined to legal error is not equipped to substitute a different outcome.',
      },
      {
        claim: 'Striking down a law is a single kind of outcome.',
        reality:
          'Under French Article 62 a provision struck down before promulgation may not be promulgated or applied, while one struck down on a question raised in proceedings is abrogated from the publication of the decision or a later date, with the Council controlling whether effects already produced are reopened.',
      },
      {
        claim: 'Quash, annul, vacate and set aside are interchangeable.',
        reality:
          'They describe removing a decision in systems with different rules about what survives, what replaces it and whether past effects are reopened. This page groups outcomes by legal effect for that reason.',
      },
      {
        claim: 'A right to appeal means as many appeals as it takes.',
        reality:
          'Article 14(5) of the Covenant gives a right to review by a higher tribunal "according to law". The qualifier is part of the provision: the route and its limits are the state’s to set.',
      },
      {
        claim:
          'Compensation is what you get when the system cannot be bothered to fix the error.',
        reality:
          'It is the category that exists where undoing is impossible. Brazil makes indemnity for judicial error a constitutional obligation, and the Covenant requires compensation after a final conviction is reversed on a newly discovered fact.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Outcomes grouped by what they actually do.',
      },
      {
        kind: 'list',
        items: [
          'Prevent something taking effect at all — France, Art. 62 for provisions reviewed before promulgation.',
          'End its effect from a chosen date, with control over what is reopened — France, Art. 62 for provisions reviewed in proceedings.',
          'Remove a judgment for legal error, leaving the case to be decided again — Germany, StPO § 337.',
          'Compensate where undoing is impossible — ICCPR Art. 14(6); Brazil, Art. 5º LXXV.',
          'Stop: decisions of the Conseil constitutionnel are subject to no appeal and bind all authorities.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Categories, not a catalogue',
        text: 'What remedies are available in any particular system, on what conditions, is not stated here and was not researched. The categories travel; the entitlements do not.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'Knowing what a forum can produce is what makes it possible to choose one sensibly. A person seeking compensation from a body that can only quash, or seeking to undo a decision from a body that can only award money, will get an answer that looks like refusal and is actually jurisdiction.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The compensation provisions are the clearest statement that a system expects to be wrong sometimes. A constitution that promises indemnity for judicial error has conceded in advance that judicial error occurs, which is a stronger admission than any appeal right.',
        claim: 'fact',
        sources: ['br-cf-1988', 'iccpr'],
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [effective remedy](/justice/effective-remedy), [appeal and judicial review are different](/courts/appeal-and-judicial-review-are-different), and [appeal and the rule of law](/justice/appeal-and-the-rule-of-law).',
      },
    ],
  },
  {
    slug: 'courts-during-a-state-of-emergency',
    title: 'Courts during a state of emergency',
    shortTitle: 'Courts in an emergency',
    question:
      'Do the courts keep sitting in an emergency, and can an emergency court try you instead?',
    summary:
      'Four constitutions prohibit courts of exception outright, one protects its constitutional court by name even in a defence emergency — and one permits special courts where the ordinary ones are determined inadequate. The general rule and its exception both need stating.',
    entityType: 'concept',
    section: 'courts',
    jurisdiction: ['INT'],
    temporalScope: 'current',
    related: ['reviewing-an-emergency-declaration', 'specialized-courts', 'access-to-justice'],
    sources: [
      'jp-constitution',
      'br-cf-1988',
      'es-constitution',
      'de-grundgesetz',
      'ie-constitution',
      'ie-emergency-statutes',
      'un-hrc-general-comment-29',
      'za-constitution',
    ],
    status: 'published',
    review: 'fact-checked',
    safetyReview: 'not-required',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 10,
    keyTerms: ['court', 'fair-trial', 'judicial-independence'],
    countryExamples: [
      {
        countrySlug: 'japan',
        note: 'States the prohibition without qualification: Art. 76 vests the whole judicial power in the Supreme Court and inferior courts established by law, provides that no extraordinary tribunal shall be established, and bars any organ or agency of the Executive from being given final judicial power. There is no emergency exception because there is no emergency chapter.',
      },
      {
        countrySlug: 'germany',
        note: 'Prohibits extraordinary courts in Art. 101(1) and then protects the constitutional court by name for the one situation where the pressure would be greatest: Art. 115g provides that even in the Verteidigungsfall the constitutional position and the discharge of the constitutional functions of the Bundesverfassungsgericht and its judges may not be impaired.',
      },
      {
        countrySlug: 'brazil',
        note: 'Pairs the prohibition with an access guarantee. Art. 5º XXXVII provides that there shall be no court or tribunal of exception, and Art. 5º XXXV that the law shall not exclude from the appraisal of the Judiciary any injury or threat to a right — and neither is among the guarantees suspendable under the estado de sítio.',
      },
    ],
    counterExamples: [
      {
        countrySlug: 'ireland',
        note: 'The counter-case, and it is constitutional rather than an irregularity. Art. 38.3.1 permits special courts to be established by law where it may be determined that the ordinary courts are inadequate to secure the effective administration of justice and the preservation of public peace and order; Part V of the Offences Against the State Act 1939 is dormant until the Government proclaims that it is satisfied of exactly that.',
      },
    ],
    uncertainty: [
      'Five systems are described from primary text. Whether courts in fact continued to sit anywhere during any emergency was not researched and is not stated.',
      'This page describes what the texts provide about forums. It says nothing about how any court has operated, about any case, or about anyone’s access to a court in practice.',
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Two questions hide inside one. Whether the courts keep sitting is about continuity. Whether a different tribunal may try you instead is about the forum — and it is the second that constitutions answer most emphatically, because a system that permitted emergency tribunals would have found a way round every other protection it grants.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes constitutional provisions about courts and tribunals. It says nothing about any case, any proceeding, or anyone’s access to a court, and it is not legal advice.',
      },
    ],
    whyItExists: [
      {
        kind: 'paragraph',
        text: 'The historical worry is specific rather than abstract: a tribunal constituted for a situation, staffed by people chosen for it, applying a procedure written for it. Each of those features is separately objectionable, and a prohibition on courts of exception addresses all three at once by requiring that the forum exist before the case does.',
        claim: 'analysis',
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Why continuity gets less textual attention',
        text: 'Most constitutions assume courts keep sitting rather than saying so. The obligations that presuppose it — review of a detention within ten days, validity challenges to a declaration — do the work implicitly, which is why this page states the continuity point more cautiously than the forum point.',
      },
    ],
    howItWorks: [
      {
        kind: 'paragraph',
        text: 'Japan states the prohibition in the same article that vests judicial power. Article 76 provides that the whole judicial power is vested in a Supreme Court and in such inferior courts as are established by law; that *no extraordinary tribunal shall be established*, nor shall any organ or agency of the Executive be given final judicial power; and that all judges are independent in the exercise of their conscience and bound only by the Constitution and the laws.',
        claim: 'fact',
        sources: ['jp-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Because the Constitution contains no emergency chapter, there is no provision anywhere in it that qualifies that sentence. The same Constitution gives the Supreme Court power to determine the constitutionality of any law, order, regulation or official act, with no carve-out for emergency measures.',
        claim: 'fact',
        sources: ['jp-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Brazil pairs the prohibition with an access guarantee, and puts both in the fundamental-rights article. Article 5º XXXVII provides that *não haverá juízo ou tribunal de exceção*; Article 5º XXXV provides that the law shall not exclude from the appraisal of the Judiciary any injury or threat to a right.',
        claim: 'fact',
        sources: ['br-cf-1988'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Two halves of one protection',
        text: 'A guarantee of access to the Judiciary is worth little if a special tribunal can be created to receive the case, and a prohibition on special tribunals is worth little if the route to the ordinary courts can be legislated away. Brazil closes both at once, in consecutive clauses.',
      },
      {
        kind: 'paragraph',
        text: 'Spain prohibits courts of exception in Article 117(6) and then draws the one line it does allow with care: Article 117(5) confines military jurisdiction to the strictly military sphere and to cases of *estado de sitio*, and the organic law permits the Congress, in declaring that state, to determine the offences that during it fall under military jurisdiction.',
        claim: 'fact',
        sources: ['es-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'Germany prohibits extraordinary courts in Article 101(1) — *Ausnahmegerichte sind unzulässig* — adds that no one may be removed from the jurisdiction of their lawful judge, and provides that courts for particular subject matters may be established only by statute. The Basic Law contains no emergency exception to that article.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'paragraph',
        text: 'It then protects the constitutional court by name in the one situation where the pressure would be greatest. Article 115g provides that the constitutional position and the discharge of the constitutional functions of the Bundesverfassungsgericht and its judges may not be impaired, even in the *Verteidigungsfall*.',
        claim: 'fact',
        sources: ['de-grundgesetz'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Naming the institution rather than the principle',
        text: 'A general guarantee of judicial independence would already cover this. Saying it again, about one court, for one situation, is a drafter deciding that the general statement is not enough where the stakes are highest — which is the same instinct that produces a list of non-derogable rights.',
      },
      {
        kind: 'paragraph',
        text: 'Ireland is the counter-example, and it is constitutional. Article 38.3.1 provides that special courts may be established by law for the trial of offences in cases where it may be determined in accordance with such law that the ordinary courts are inadequate to secure the effective administration of justice and the preservation of public peace and order.',
        claim: 'fact',
        sources: ['ie-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'The statutory machinery matches that structure exactly. Part V of the Offences Against the State Act 1939 is dormant: section 35 provides that it shall not come into or be in force save as and when provided by the section, and it comes into force when the Government makes and publishes a proclamation declaring that it is satisfied that the ordinary courts are inadequate.',
        claim: 'fact',
        sources: ['ie-emergency-statutes'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What makes this different from a court of exception',
        text: 'The court is provided for by law in advance, the condition for switching it on is stated in advance, and the act of switching it on is a published proclamation. Those are precisely the features whose absence defines a court of exception — which is why a constitution can prohibit the one and permit the other without contradicting itself.',
      },
      {
        kind: 'paragraph',
        text: 'On continuity, most of these texts speak by implication rather than directly. South Africa’s requirement that a court review an emergency detention within ten days and at ten-day intervals presupposes a functioning court; so does its provision that any competent court may decide the validity of a declaration. Spain says it expressly for the legislature — the Congress may not be dissolved and the functioning of the constitutional powers may not be interrupted — and this platform found no equivalent express clause about the courts in most of the constitutions read.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'The clearest statement of the forum point at international level comes from a treaty body rather than a treaty. In General Comment No. 29 the United Nations Human Rights Committee states that the principles of legality and the rule of law require that fundamental requirements of fair trial be respected during a state of emergency, that *only a court of law may try and convict a person for a criminal offence*, and that the presumption of innocence must be respected.',
        claim: 'fact',
        sources: ['un-hrc-general-comment-29'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Attributed to the Committee, not to the Covenant',
        text: 'A general comment is the treaty body’s authoritative interpretation of a provision; it is not the text of the Covenant, and neither is evidence of any particular state’s domestic law. It is quoted here as the Committee’s reading because the reading is what the sentence is worth — the Covenant’s Article 14 does not say it in those words.',
      },
    ],
    misconceptions: [
      {
        claim: 'A state of emergency lets a government set up special courts.',
        reality:
          'Four of the constitutions described here forbid courts of exception outright, and Germany and Japan carve out no emergency exception at all. Ireland is the exception, and it permits them only where the ordinary courts are determined inadequate under a law made in advance.',
      },
      {
        claim: 'Special courts and courts of exception are the same thing.',
        reality:
          'They are distinguished by when they are created and how. Ireland’s Special Criminal Court exists in statute in advance, is dormant until a published proclamation, and rests on a condition stated in the Constitution — none of which is true of a tribunal constituted for a particular situation.',
      },
      {
        claim: 'Constitutional courts can be suspended during a defence emergency.',
        reality:
          'Not under the Basic Law. Article 115g provides that even in the Verteidigungsfall the constitutional position and the discharge of the constitutional functions of the Bundesverfassungsgericht and its judges may not be impaired.',
      },
      {
        claim: 'Military courts can try civilians whenever an emergency is declared.',
        reality:
          'Spain confines military jurisdiction to the strictly military sphere and to cases of estado de sitio — the severest of its three regimes and the one declared by the Congress itself, not by the Government.',
      },
      {
        claim:
          'Constitutions guarantee in terms that ordinary courts keep sitting during an emergency.',
        reality:
          'Most do not say so directly. The obligation is usually implicit in duties that presuppose a functioning court, and this page states that more cautiously than the prohibition on exceptional tribunals for that reason.',
      },
    ],
    variation: [
      {
        kind: 'paragraph',
        text: 'Five systems, and the exception is as instructive as the rule.',
      },
      {
        kind: 'list',
        items: [
          'No extraordinary tribunal, and no executive organ with final judicial power — Japan, Art. 76.',
          'No court or tribunal of exception, paired with a guarantee of access to the Judiciary — Brazil, CF Art. 5º XXXVII and XXXV.',
          'Courts of exception prohibited, military jurisdiction confined to the military sphere and to the estado de sitio — Spain, CE Art. 117(5)–(6).',
          'Extraordinary courts prohibited, the lawful judge guaranteed, and the constitutional court protected by name in the defence emergency — Germany, GG Arts. 101 and 115g.',
          'Special courts permitted where the ordinary courts are determined inadequate, through a statute dormant until proclamation — Ireland, Art. 38.3.1 with OASA 1939 s. 35.',
        ],
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Not established here',
        text: 'Whether Ireland’s Special Criminal Court is currently sitting, and anything about any proceeding before it, was not researched and is not stated. The 1939 Act is quoted as enacted, and later amendments to it were not read.',
      },
    ],
    rightsAndAccountability: [
      {
        kind: 'paragraph',
        text: 'The prohibition on courts of exception is unusual among constitutional guarantees in that it protects nobody in particular and everybody generally. It does not say what a court must decide; it says the forum must have existed before the dispute, which is a structural guarantee rather than a procedural one.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'Ireland shows that the guarantee can be given up deliberately and openly, on a stated condition and by a published act. That is a materially different thing from a tribunal appearing without warning, and recording the difference is the reason this page states both the rule and its exception rather than the rule alone.',
        claim: 'analysis',
      },
    ],
    furtherReading: [
      {
        kind: 'paragraph',
        text: 'Related: [reviewing an emergency declaration](/justice/reviewing-an-emergency-declaration), [specialized courts](/courts/specialized-courts), and [access to justice](/justice/access-to-justice).',
      },
    ],
  },
];
