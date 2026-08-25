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
    related: ['administrative-courts', 'court-hierarchy', 'court-jurisdiction'],
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
];
