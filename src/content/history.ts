import type { HistoryEntry } from './types';

/**
 * History of justice institutions — Wave 18.
 *
 * The `/history` hub already declared the standards these pages are written to: continuity is a
 * claim rather than an assumption, founding dates are frequently contested, modern categories
 * are not read backwards, historical is never written as current, both directions of the record
 * belong in the same account, and archives are preferred over commemoration. This file is the
 * first material written against them.
 *
 * THREE RULES THE FILE ENFORCES ON ITSELF.
 *
 * Every entry carries at least one `ContinuityClaim`, naming the modern institution a reader will
 * connect the material to and stating what the evidence supports about the connection. On six of
 * the seven pages the honest answer is `none-established`, and saying so is the point rather than
 * an admission.
 *
 * Every period carries its own precision. Where a date is traditional rather than verifiable it
 * is marked `disputed` and the datingNote says why. No month or day is invented anywhere.
 *
 * Nothing here claims a first, an origin, or an invention. Where a source hedges — "tradition
 * tells us", "likely devised by" — the hedge is reproduced rather than hardened, because
 * hardening someone else's hedge is the most common way a reference site fabricates history.
 */
export const HISTORY_ENTRIES: readonly HistoryEntry[] = [
  /* ---------------------------------------------------------------------- */
  /* Ancient                                                                */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'how-athenian-courts-worked',
    title: 'How Athenian courts worked',
    shortTitle: 'Athenian courts',
    question: 'Did ancient Athens have juries?',
    summary:
      'It had something the standard English translation calls a jury-court, and the resemblance stops quickly. Hundreds of citizens over thirty, allotted by an elaborate machine of urns and inscribed tokens, decided verdict and penalty with no judge directing them and no public prosecutor bringing the case.',
    period: {
      fromYear: -400,
      toYear: -320,
      display: 'Fourth century BCE',
      precision: 'approximate',
      datingNote:
        'The Athenian Constitution describes arrangements at the time of writing, generally placed in the later fourth century BCE, and reports earlier arrangements at second hand. The century is given rather than a year because the text supports no closer dating.',
    },
    scope: 'Athens. Not Greece, and not the ancient world.',
    continuity: [
      {
        modernCounterpart: 'The modern jury',
        relationship: 'none-established',
        basis:
          'Nothing in the source establishes a line of descent, and the differences are structural rather than incidental: the Athenian body numbered in the hundreds, was allotted rather than summoned from a roll, sat without a judge directing it on law, and assessed the penalty as well as the verdict. "Jury" is the translator’s English word for a Greek institution, not a finding about lineage.',
      },
      {
        modernCounterpart: 'A public prosecution service',
        relationship: 'none-established',
        basis:
          'The source names as a democratic feature "the liberty allowed to anybody who wished to exact redress on behalf of injured persons". Prosecution was open to any willing person. There was no standing public official whose function was to bring cases.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Fourth-century Athens decided legal disputes through large panels of citizens selected by lot. The standard English translation calls them jury-courts and their members jurymen, and those words carry two thousand years of later meaning that the Greek institution did not have. Almost everything a modern reader assumes on hearing "jury" is absent here.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what one ancient source says about Athenian courts. It is not a history of Athenian law, it is not evidence about any other ancient system, and it asserts no connection to any modern institution.',
      },
    ],
    whatTheSourcesSay: [
      {
        kind: 'paragraph',
        text: 'The Athenian Constitution attributed to Aristotle names three features as the most democratic in Solon’s constitution: the prohibition of loans secured upon the person, the liberty allowed to anybody who wished to exact redress on behalf of injured persons, and the right of appeal to the jury-court — "for the people, having the power of the vote, becomes sovereign in the government".',
        claim: 'fact',
        sources: ['perseus-aristotle-athenian-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'The same passage records that the jury-court "is the umpire in all business both public and private", and that because the laws were not drafted simply or clearly, many disputes inevitably arose. It reports that some people thought the obscurity deliberate, so that the people might be sovereign over the verdict — and rejects that reading.',
        claim: 'fact',
        sources: ['perseus-aristotle-athenian-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The source warns against presentism, in the source',
        text: 'Rejecting the deliberate-obscurity theory, the text says: "it is not fair to study his intention in the light of what happens at the present day, but to judge it from the rest of his constitution." An ancient author telling later readers not to judge an earlier lawgiver by present-day outcomes is the oldest statement of this platform’s own historical standard, and it is worth noticing that the temptation is not a modern invention.',
      },
      {
        kind: 'paragraph',
        text: 'Chapter 63 describes the selection machinery in detail. The jury-courts are allotted by the Nine Archons by tribes. The courts have ten entrances, one for each tribe; twenty rooms, two for each tribe; a hundred small boxes, ten for each tribe; further boxes into which jurymen’s tickets drawn by lot are thrown; and two urns. Staves are placed at each entrance, as many as there are jurymen, and acorns inscribed with letters of the alphabet are thrown into the urn, one for each court to be filled.',
        claim: 'fact',
        sources: ['perseus-aristotle-athenian-constitution'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The machinery is the argument',
        text: 'Urns, staves, boxes, inscribed acorns and named tickets are not administrative fussiness. An elaborate physical apparatus of randomisation is what a system builds when it has decided that nobody — including the officials running the allotment — should be able to determine who hears which case. The design is a statement about what the institution was afraid of.',
      },
      {
        kind: 'paragraph',
        text: 'Eligibility is stated plainly: "Right to sit on juries belongs to all those over thirty years old who are not in debt to the Treasury or disfranchised." Each juryman held a box-wood ticket bearing his own name, his father’s name and his deme, and the jurymen of each tribe were divided into ten lettered sections of approximately equal size.',
        claim: 'fact',
        sources: ['perseus-aristotle-athenian-constitution'],
      },
      {
        kind: 'paragraph',
        text: 'The rule was enforced by the panel itself. Where an unqualified person sat, information was laid against him and he was brought before the jury-court; if convicted, the jurymen assessed whatever punishment or fine he was thought to deserve, and a money fine carried imprisonment until both the original debt and the new fine were paid.',
        claim: 'fact',
        sources: ['perseus-aristotle-athenian-constitution'],
      },
    ],
    whyItMatters: [
      {
        kind: 'paragraph',
        text: 'The value of the material is not that Athens anticipated anything. It is that a functioning court system existed with almost none of the components a modern reader treats as necessary — no public prosecutor, no professional judge directing the panel on law, no separation between deciding guilt and fixing the penalty, and no roll of summoned citizens.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'That makes it useful as a control. When this platform describes a modern arrangement as structural rather than accidental — the separation of prosecution from adjudication, for instance — Athens is the reminder that the arrangement is a choice a system makes rather than a condition of having courts at all.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Athens invented the jury.',
        reality:
          'The source establishes nothing of the kind, and the English word is the translator’s. The Athenian body was allotted rather than summoned, numbered in the hundreds, sat without a judge directing it on law, and assessed the penalty as well as the verdict.',
      },
      {
        claim: 'Athenian courts were open to all citizens.',
        reality:
          'The text limits the right to sit to those over thirty years old who were not in debt to the Treasury or disfranchised. It also describes a society in which citizenship itself was narrow.',
      },
      {
        claim: 'Someone must have brought the prosecution on the state’s behalf.',
        reality:
          'The source names as a democratic feature the liberty allowed to anybody who wished to exact redress on behalf of injured persons. Bringing a case was open to any willing person rather than assigned to an official.',
      },
      {
        claim: 'The elaborate allotment procedure was ceremonial.',
        reality:
          'It was a randomisation apparatus. Ten entrances, a hundred boxes, two urns, inscribed acorns and named tickets are what a system builds to stop anyone determining who hears which case.',
      },
    ],
    uncertainty: [
      'The Athenian Constitution is a single ancient work whose authorship has been debated since its rediscovery. This page cites what the text says, attributed to it, and does not treat it as an independent record of practice.',
      'The text is used here in H. Rackham’s English translation. "Jury", "jury-court" and "juryman" are his renderings of Greek institutional terms and carry English connotations the Greek did not.',
      'Athenian legal procedure beyond the two chapters read here — the categories of action, the role of the archons, the conduct of a hearing — was not researched and is not described.',
    ],
    relatedGuides: ['what-do-courts-do', 'why-public-prosecution-exists'],
    sources: ['perseus-aristotle-athenian-constitution'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
  },
  {
    slug: 'roman-procedure-without-a-police-force',
    title: 'Roman procedure without a police force',
    shortTitle: 'Getting to a Roman court',
    question: 'Who made a defendant turn up to court in early Rome?',
    summary:
      'The plaintiff did, personally. On the text as printed, a defendant who would not go could be seized by the person suing him, and the hearing had to finish by sunset. Courts can exist without any state machinery for getting people into them.',
    period: {
      fromYear: -451,
      toYear: -449,
      display: 'Traditionally 451–449 BCE',
      precision: 'disputed',
      datingNote:
        'The Avalon Project text itself says only that "tradition tells us" the code was composed in 451–450 BCE and ratified in 449 BCE. The tablets do not survive and the dating is traditional rather than documented, so this platform reproduces the hedge instead of adopting the years as fact.',
    },
    scope:
      'Rome, as reported by the reconstructed text of the Twelve Tables. Not the later empire.',
    continuity: [
      {
        modernCounterpart: 'Police enforcement of court attendance',
        relationship: 'none-established',
        basis:
          'The text as printed places the burden of producing the defendant on the plaintiff, who calls a witness and then seizes him. No state body performs that function in the provisions read here, and nothing establishes a line from these arrangements to any modern enforcement institution.',
      },
      {
        modernCounterpart: 'Modern civil procedure',
        relationship: 'none-established',
        basis:
          'Roman law influenced later European legal systems by routes this platform has not researched, and no claim of descent is made from Table I. The provisions are cited for what a system without state summons enforcement looked like, not as an ancestor of anything.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'A court needs the parties in front of it. Modern systems solve that with a state apparatus — summonses issued by a court office, enforcement by officers, sanctions for non-attendance — so completely that the problem is invisible. The earliest Roman procedural text solves it differently, and reading it is the quickest way to see that the modern solution is a choice.',
      },
      {
        kind: 'callout',
        variant: 'uncertainty',
        title: 'Read the provenance before the provisions',
        text: 'The Twelve Tables do not survive. No tablet and no contemporary copy exists, and every printed text is a modern reconstruction assembled from quotations in later Roman authors. The Avalon Project page used here names no translator and no reconstruction, and its own introduction says only that "tradition tells us" when the code was composed. Everything below is therefore what this printed text says the Tables provided — not established wording, and not evidence of what any original tablet said.',
      },
    ],
    whatTheSourcesSay: [
      {
        kind: 'paragraph',
        text: 'Table I is headed "Proceedings Preliminary to Trial", and its first provision reads: "If the plaintiff summons the defendant to court the defendant shall go. If the defendant does not go the plaintiff shall call a witness thereto. Only then the plaintiff shall seize the defendant." The second adds that if the defendant attempts evasion or takes flight, the plaintiff shall lay hand on him.',
        claim: 'fact',
        sources: ['avalon-twelve-tables'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Notice the sequence, which is the whole point. The defendant is obliged to go; if he does not, the plaintiff must first call a witness; only then may he seize him. Private force is available, and it is available only after the obligation has been established and a witness has observed the refusal. This is not lawlessness — it is a procedure with a state-shaped hole where an enforcement body would be, and the witness requirement is what fills it.',
      },
      {
        kind: 'paragraph',
        text: 'The text moderates the rule where the defendant cannot easily travel: where sickness or age is an impediment, the person summoning shall grant him a vehicle — though, as printed, he need not spread a carriage with cushions.',
        claim: 'fact',
        sources: ['avalon-twelve-tables'],
      },
      {
        kind: 'paragraph',
        text: 'The magistrate appears only once the parties are before him. Where the parties agree on the matter, the magistrate announces it; where they do not, they state their case before the assembly in the meeting place or before the magistrate in the market place, before noon, both present and pleading together. If one party does not appear, the magistrate adjudges the case after noon in favour of the one present.',
        claim: 'fact',
        sources: ['avalon-twelve-tables'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Procedure measured by the sun',
        text: 'Before noon to begin, after noon to decide against an absent party, and — Table I.9 — "If both parties are present sunset shall be the time limit of the proceedings." Time limits exist, and they are set by the only clock everyone could consult. A procedural deadline does not require a calendar; it requires a shared way of knowing when the deadline has arrived.',
      },
    ],
    whyItMatters: [
      {
        kind: 'paragraph',
        text: 'The lifecycle this platform describes assumes an apparatus around the court: something that brings people in, something that enforces what the court decides. Table I as printed shows a system that had courts and magistrates and time limits and none of that apparatus, which is a useful correction to the assumption that the apparatus is what makes something a legal system.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also shows where the modern arrangement came from as a problem rather than as a plan. A procedure that permits a plaintiff to seize a defendant works while disputes are between people of comparable standing and fails as soon as they are not — which is the practical argument for putting enforcement in public hands, made without anyone having to assert that it was inevitable.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'The Twelve Tables survive and we know what they said.',
        reality:
          'No tablet and no contemporary copy exists. Every printed text is a reconstruction assembled from quotations in later authors, and the Avalon text used here names neither translator nor reconstruction.',
      },
      {
        claim: 'The Twelve Tables date from 451–450 BCE.',
        reality:
          'That is what tradition holds, and the source says so in those words. This platform reports the traditional dating as traditional rather than adopting it.',
      },
      {
        claim: 'Early Rome must have had officials to bring defendants to court.',
        reality:
          'On the text as printed the obligation falls on the defendant and the enforcement on the plaintiff, who calls a witness and only then seizes him. No such official appears in the provisions read here.',
      },
      {
        claim: 'A system that lets a plaintiff seize a defendant has no procedure.',
        reality:
          'It has a strict one. Seizure follows the defendant’s refusal and the calling of a witness, hearings run to fixed points of the day, and an absent party loses only after noon.',
      },
    ],
    uncertainty: [
      'The provenance limits on this source are severe and are stated on the page rather than only here: the Tables do not survive, the printed text is a reconstruction, and no translator is named.',
      'Only Table I was used. The other tables, later Roman procedure, and the relationship between the republican and imperial systems were not researched and are not described.',
      'Nothing here supports a claim about origins, priority or influence. Roman law reached later European systems by routes this platform has not researched.',
    ],
    relatedGuides: ['what-do-courts-do', 'why-societies-need-law-enforcement'],
    sources: ['avalon-twelve-tables'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
  },
  /* ---------------------------------------------------------------------- */
  /* Medieval and early modern                                              */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'which-magna-carta',
    title: 'Which Magna Carta',
    shortTitle: 'Which Magna Carta',
    question: 'Is Magna Carta still law?',
    summary:
      'Clauses of one are — and it is not the famous one. The 1215 charter was annulled within months; what remains on the statute book of England and Wales is the 1297 confirmation, a different text that later generations have repeatedly reinterpreted.',
    period: {
      fromYear: 1215,
      toYear: 1297,
      display: '1215 and 1297',
      precision: 'exact',
    },
    scope: 'England, and later the statute book of England and Wales.',
    continuity: [
      {
        modernCounterpart: 'A written constitution',
        relationship: 'none-established',
        basis:
          'The surviving clauses are provisions of an ordinary statute on the statute book of England and Wales, subject to repeal like any other. Nothing about their status makes them constitutional in the sense used of an entrenched document.',
      },
      {
        modernCounterpart: 'Modern due-process guarantees',
        relationship: 'contested',
        basis:
          'Later generations read the charter as a source of such guarantees, and that reading is itself a historical fact with consequences. Whether the 1215 or 1297 text established anything a modern reader would recognise as due process is a question about later interpretation as much as about the document, and this platform does not resolve it.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Magna Carta is cited more often than it is read, and almost always in a form that does not exist. The document people mean is the 1215 charter; the document with continuing legal effect is the 1297 confirmation. The two differ, and conflating them is the most common error made about the most-cited legal text in the English-speaking world.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This distinguishes two texts and states what remains in force where. It is not a history of the charter, not an account of its clauses, and not a claim about its influence on any other legal system.',
      },
    ],
    whatTheSourcesSay: [
      {
        kind: 'paragraph',
        text: 'The version that entered the statute book is the 1297 confirmation. Clauses of Magna Carta in that form remain in force in England and Wales, and the text is on the statute book under that year rather than under 1215.',
        claim: 'fact',
        sources: ['magna-carta-1297'],
      },
      {
        kind: 'paragraph',
        text: 'The 1215 charter was annulled shortly after it was agreed and was reissued afterwards in altered forms. The National Archives’ educational resource on the charter supports the historical narrative of the 1215 document and its later reissues; it does not support claims about legal effect today.',
        claim: 'fact',
        sources: ['tna-magna-carta', 'magna-carta-1297'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'A document annulled within months of being agreed is an odd foundation for anything, and the significance of Magna Carta comes substantially from what later generations made of it rather than from what it achieved. That is not a debunking. It is a more interesting fact than the myth: the charter matters because of a reception history, and reception history is a legitimate historical subject with its own evidence.',
      },
      {
        kind: 'paragraph',
        text: 'The reinterpretation is itself documented. The Library of Congress exhibition material on the charter’s later use supports the historical narrative of how it was invoked over time — again as a source about interpretation and reception rather than about legal effect now.',
        claim: 'fact',
        sources: ['loc-magna-carta'],
      },
    ],
    whyItMatters: [
      {
        kind: 'paragraph',
        text: 'This platform states elsewhere that continuity of name is not continuity of institution. Magna Carta is the same problem applied to a text: two documents share a name, one was annulled, the other is in force, and public reference to "Magna Carta" almost always means the first while any legal claim must rest on the second.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It is also the clearest available case of a founding story assembled backwards. Being able to see that in a document everyone has heard of makes the same pattern easier to notice in institutions nobody has.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Magna Carta of 1215 is still in force.',
        reality:
          'It was annulled shortly after it was agreed. What remains on the statute book of England and Wales is the 1297 confirmation, which is a different text.',
      },
      {
        claim: 'Magna Carta is a constitution.',
        reality:
          'The surviving clauses sit on an ordinary statute book and are subject to repeal like other statutory provisions. Being old is not the same as being entrenched.',
      },
      {
        claim: 'Magna Carta applies across the United Kingdom.',
        reality:
          'The clauses that remain are on the statute book of England and Wales. Scotland and Northern Ireland have their own legal histories, which this page does not describe.',
      },
      {
        claim: 'Saying the 1215 charter was annulled diminishes it.',
        reality:
          'It relocates its significance. The charter matters substantially because of how later generations reinterpreted and invoked it, which is a documented historical process rather than a myth.',
      },
    ],
    uncertainty: [
      'This page distinguishes two texts and states what remains in force. It does not describe the content of any clause, and it makes no claim about influence on the legal system of any other country.',
      'The reception history — how, by whom and to what end the charter was reinterpreted — is referred to but not researched here beyond what the cited archival material supports.',
    ],
    relatedGuides: ['what-is-the-rule-of-law', 'limits-on-public-power'],
    sources: ['magna-carta-1297', 'tna-magna-carta', 'loc-magna-carta'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 7,
  },
  {
    slug: 'what-the-habeas-corpus-act-1679-actually-did',
    title: 'What the Habeas Corpus Act 1679 actually did',
    shortTitle: 'The 1679 Act',
    question: 'Did the Habeas Corpus Act create habeas corpus?',
    summary:
      'No, and the Act says so in its own opening words. It recites that the writ already existed and that gaolers were evading it — and then attaches a three-day deadline. It is an enforcement statute, which is a more interesting thing than a founding one.',
    period: {
      fromYear: 1679,
      toYear: 1679,
      display: '1679',
      precision: 'exact',
    },
    scope: 'England, and later the statute book of England and Wales.',
    continuity: [
      {
        modernCounterpart: 'Modern habeas corpus and detention-review rights',
        relationship: 'contested',
        basis:
          'Rights to challenge the lawfulness of detention appear in many modern constitutions, and this platform documents several. Whether any of them descends from this Act, rather than converging on the same problem, is a question requiring evidence about each system that has not been gathered. The Act is cited for what it did, not as an ancestor.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'The Habeas Corpus Act 1679 is routinely described as creating the right to challenge unlawful detention. Its own first sentence contradicts that, and the contradiction is not a technicality — it changes what the Act is an example of.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what one statute recites and provides. It is not a history of the writ, not an account of detention law in any period, and not legal advice about any modern remedy.',
      },
    ],
    whatTheSourcesSay: [
      {
        kind: 'paragraph',
        text: 'The long title is "An Act for the better secureing the Liberty of the Subject and for Prevention of Imprisonments beyond the Seas". The operative word is *better*: the Act presents itself as improving something that exists.',
        claim: 'fact',
        sources: ['uk-habeas-corpus-act-1679'],
      },
      {
        kind: 'paragraph',
        text: 'The recital says what was wrong. Great delays had been used by "Sheriffes Goalers and other Officers" in making returns of writs of habeas corpus directed to them, "by standing out an Alias and Pluries Habeas Corpus and sometimes more and by other shifts to avoid their yeilding Obedience to such Writts contrary to their Duty and the knowne Lawes of the Land" — whereby many had been and might be "long detained in Prison in such Cases where by Law they are baylable to their great charge and vexation".',
        claim: 'fact',
        sources: ['uk-habeas-corpus-act-1679'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'Read the recital as evidence rather than as preamble. It states that the writ existed, that obedience to it was a duty, that the duty was part of "the knowne Lawes of the Land", and that officers were evading it by procedural means. Every one of those is inconsistent with the Act having created the remedy. What it created was a consequence for ignoring one.',
      },
      {
        kind: 'paragraph',
        text: 'The consequence is a deadline. Section I provides that on service of the writ the officer, or their under-officers, under-keepers or deputies, shall within three days bring up the body before the court to which the writ is returnable and certify the true causes of the imprisonment — subject to exceptions where the commitment was for treason or felony plainly and specially expressed in the warrant, to provisions for distance, and to payment or tender of the charges of bringing the prisoner, not exceeding twelvepence per mile, on security by bond.',
        claim: 'fact',
        sources: ['uk-habeas-corpus-act-1679'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A right without a deadline is a right with a delay',
        text: 'The evasion described was not refusal. Officers were complying eventually, through repeated writs and other shifts, while the person stayed in prison. That is the failure mode of every remedy that specifies what must happen without specifying when, and it is why "three days" is the substance of this Act rather than its detail.',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'A note on the text quoted',
        text: 'The statute book records that abbreviations and contractions in the original form of the Act have been expanded into modern lettering in the text set out there, and that the short title by which the Act is known was given later, by the Short Titles Act 1896. The spelling above is the printed statute-book spelling.',
      },
    ],
    whyItMatters: [
      {
        kind: 'paragraph',
        text: 'This platform repeatedly makes a point about modern institutions that this Act makes about a seventeenth-century one: the interesting question is rarely whether a right exists, but what happens when it is ignored. A remedy with no timetable and no consequence for delay is a remedy an institution can outlast.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It is also a worked example of why founding stories mislead. Attributing the creation of habeas corpus to 1679 turns a documented enforcement problem into a myth of invention, and loses the part that generalises — that rights fail through procedural attrition rather than through denial.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'The Habeas Corpus Act 1679 created habeas corpus.',
        reality:
          'The Act recites that writs of habeas corpus were already being directed to officers, that obedience was their duty under the known laws of the land, and that they were evading it. It attached a three-day deadline to an existing remedy.',
      },
      {
        claim: 'Before 1679 people could be detained without any remedy.',
        reality:
          'The recital describes people who were "by Law baylable" being long detained despite the writ. The complaint is about delay and evasion, not about the absence of a remedy.',
      },
      {
        claim: 'The Act imposed an absolute three-day rule.',
        reality:
          'Section I carries exceptions where the commitment was for treason or felony plainly and specially expressed in the warrant, provisions relating to distance, and conditions about the charges of bringing the prisoner.',
      },
      {
        claim: 'The Act has always been known by that name.',
        reality:
          'The short title was given by the Short Titles Act 1896, more than two centuries later. Statutes acquire their familiar names by later legislation as often as by their own.',
      },
    ],
    uncertainty: [
      'One statute is described. The earlier history of the writ, its use before 1679, and its development afterwards were not researched and are not described.',
      'No claim is made that any modern detention-review right descends from this Act. Several constitutions documented on this platform contain such rights; whether any is connected to this text would require evidence about each that has not been gathered.',
    ],
    relatedGuides: ['limits-on-public-power', 'effective-remedy'],
    sources: ['uk-habeas-corpus-act-1679'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
  },
  {
    slug: 'the-1689-declarations-and-what-caused-them',
    title: 'The 1689 declarations, and what caused them',
    shortTitle: 'The 1689 declarations',
    question: 'Where does "cruel and unusual punishment" come from?',
    summary:
      'From a list of complaints. The Bill of Rights recites what had been done — excessive bail to defeat the liberty of the subject, packed juries, fines granted before conviction — and then declares, clause by clause, that each ought not to happen. The grievances are printed immediately above the remedies.',
    period: {
      fromYear: 1688,
      toYear: 1689,
      display: '1688 or 1689, depending on the dating convention',
      precision: 'disputed',
      datingNote:
        'legislation.gov.uk titles the Act "Bill of Rights [1688]" while it is conventionally cited as 1689. The discrepancy follows the old-style calendar then in use. This platform records both rather than choosing one, because choosing one would conceal a real ambiguity in how the Act is cited.',
    },
    scope: 'England, and later the statute book of England and Wales.',
    continuity: [
      {
        modernCounterpart: 'Constitutional prohibitions on cruel and unusual punishment',
        relationship: 'contested',
        basis:
          'The phrase "cruell and unusuall Punishments" appears in this text, and similar wording appears in later constitutions — the Canadian Charter, documented elsewhere on this platform, guarantees the right not to be subjected to any cruel and unusual treatment or punishment. Whether any later provision descends from this one, or converges on it, requires evidence about each drafting process that this platform has not gathered. The resemblance is recorded; the descent is not asserted.',
      },
      {
        modernCounterpart: 'A bill of rights in the modern sense',
        relationship: 'none-established',
        basis:
          'The declarations are addressed to specific recited abuses of royal power and are framed as assertions of existing rights and liberties rather than as a general enumeration of individual rights against the state. Nothing here establishes it as an early instance of the modern form.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Rights provisions are usually read as statements of principle. This one is easier to understand as a reply. The Bill of Rights sets out, at length and in order, what had been done that the framers objected to — and then sets out, in matching order, what ought not to be done. The two lists sit on the same page.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes the structure of one seventeenth-century statute and quotes its text in the original spelling. It is not a constitutional history, it makes no claim about influence on any other country, and it is not a guide to any modern right.',
      },
    ],
    whatTheSourcesSay: [
      {
        kind: 'paragraph',
        text: 'The recitals name the grievances. Among them: that "of late yeares Partiall Corrupt and Unqualifyed Persons have beene returned and served on Juryes in Tryalls", particularly jurors in trials for high treason who were not freeholders; that "excessive Baile hath beene required of Persons committed in Criminall Cases to elude the Benefitt of the Lawes made for the Liberty of the Subjects"; that "excessive Fines have beene imposed"; and that "illegall and cruell Punishments" had been inflicted.',
        claim: 'fact',
        sources: ['uk-bill-of-rights-1689'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'Read the phrase "to elude the Benefitt of the Lawes"',
        text: 'The complaint about bail is not that it was set high. It is that it was set high **in order to defeat laws that already protected liberty** — the same evasion-by-procedure the Habeas Corpus Act had addressed ten years earlier. Two statutes a decade apart, both responding to institutions complying with the letter of a protection while defeating it. That is a pattern, not a coincidence.',
      },
      {
        kind: 'paragraph',
        text: 'The declarations answer the grievances. Among them: "That excessive Baile ought not to be required nor excessive Fines imposed nor cruell and unusuall Punishments inflicted"; "That Jurors ought to be duely impannelled and returned" — words which follow being repealed, as the revised text records; and "That all Grants and Promises of Fines and Forfeitures of particular persons before Conviction are illegall and void".',
        claim: 'fact',
        sources: ['uk-bill-of-rights-1689'],
      },
      {
        kind: 'paragraph',
        text: 'The declarations extend beyond criminal procedure to the exercise of power itself: "That the pretended Power of Suspending of Laws or the Execution of Laws by Regall Authority without Consent of Parlyament is illegall", and "That it is the Right of the Subjects to petition the King and all Commitments and Prosecutions for such Petitioning are Illegall".',
        claim: 'fact',
        sources: ['uk-bill-of-rights-1689'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'A declaration that fines and forfeitures granted before conviction are illegal and void is not an abstract commitment to the presumption of innocence. It is a response to grants and promises that had been made. Rights language in this document is the shape of a complaint turned around — which is worth knowing before treating any rights instrument as a philosophical statement rather than a record of what somebody was doing.',
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'Even the year is contested',
        text: 'The statute book titles this Act "Bill of Rights [1688]"; it is conventionally cited as 1689. The difference follows the old-style calendar. This platform gives both, because a page that silently picked one would be concealing an ambiguity a reader will meet the moment they look it up elsewhere.',
      },
    ],
    whyItMatters: [
      {
        kind: 'paragraph',
        text: 'The phrase "cruel and unusual punishment" is now in constitutions on several continents, and it is usually encountered as a principle with no history. Finding it in a list of answers to recited abuses does not diminish it. It explains what kind of thing it is: a prohibition drafted by people who had watched something specific happen.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'This platform records that a similar formulation appears in the Canadian Charter of Rights and Freedoms, which guarantees the right not to be subjected to any cruel and unusual treatment or punishment. Recording the resemblance is not asserting descent, and the difference between those two operations is most of what separates history from folklore.',
        claim: 'fact',
        sources: ['ca-charter-1982', 'uk-bill-of-rights-1689'],
      },
    ],
    misconceptions: [
      {
        claim: 'The Bill of Rights was passed in 1689.',
        reality:
          'It is conventionally cited as 1689 and the statute book titles it 1688, following the old-style calendar. Both are in use and this platform gives both.',
      },
      {
        claim: 'The declarations are statements of abstract principle.',
        reality:
          'Each answers a grievance recited immediately above it — packed juries, excessive bail used to defeat existing laws, excessive fines, illegal and cruel punishments, and grants of fines and forfeitures before conviction.',
      },
      {
        claim: 'The prohibition on cruel and unusual punishment originated here and spread.',
        reality:
          'The phrase appears in this text, and similar wording appears in later instruments including the Canadian Charter. Whether any of them descends from this one is a question about each drafting process, and this platform has not gathered that evidence.',
      },
      {
        claim: 'Everything declared in 1689 is still on the statute book in that form.',
        reality:
          'The revised text records repeals. The words following the declaration that jurors ought to be duly impanelled and returned have been repealed.',
      },
    ],
    uncertainty: [
      'One statute is described, in the spelling in which the statute book prints it. The political events surrounding it are referred to only as the Act itself recites them.',
      'No claim is made about influence on the constitutional texts of any other country. The resemblance to later wording is recorded; the causal question is left open because the evidence to answer it was not gathered.',
      'Which clauses of the Act remain in force today was not comprehensively researched; the page records only the repeal the revised text marks in the passage quoted.',
    ],
    relatedGuides: ['limits-on-public-power', 'what-is-the-rule-of-law'],
    sources: ['uk-bill-of-rights-1689', 'ca-charter-1982'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
  },
  /* ---------------------------------------------------------------------- */
  /* Professionalisation                                                    */
  /* ---------------------------------------------------------------------- */
  {
    slug: 'who-wrote-the-principles-of-policing',
    title: 'Who wrote the principles of policing',
    shortTitle: 'The principles of policing',
    question: 'Did Robert Peel write the principles of policing?',
    summary:
      'The Home Office says there is no evidence of any link to him. Its official statement attributes the nine principles, hedged, to the first Commissioners of the Metropolis — and locates them in the General Instructions issued to every new officer from 1829.',
    period: {
      fromYear: 1829,
      toYear: 1829,
      display: 'From 1829',
      precision: 'exact',
      datingNote:
        'The Home Office statement dates the General Instructions containing the principles to 1829, the year of the Metropolitan Police Act. It does not date the composition of the principles themselves, and this page does not either.',
    },
    scope:
      'The Metropolitan Police district of London. Not England and Wales, not Britain, and not policing generally.',
    continuity: [
      {
        modernCounterpart: 'Robert Peel as author',
        relationship: 'none-established',
        basis:
          'The Home Office states in an official publication that "there is no evidence of any link to Robert Peel". That is the department responsible for policing, saying so about the attribution that carries its own minister’s predecessor’s name.',
      },
      {
        modernCounterpart: 'Charles Rowan and Richard Mayne as authors',
        relationship: 'contested',
        basis:
          'The same publication says the principles were "likely devised by" the first Commissioners of Police of the Metropolis. "Likely" is the department’s word and this platform keeps it. A probable attribution is not an established one.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Nine statements about policing by consent circulate under Robert Peel’s name, and they are quoted in police training, in political speeches and in journalism as his. The government department responsible for policing has published a statement saying there is no evidence connecting them to him.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This is about the provenance of a text and what an official source says the text contains. It is not a history of the Metropolitan Police, not an assessment of whether the principles were followed, and not a claim that any police service today operates according to them.',
      },
    ],
    whatTheSourcesSay: [
      {
        kind: 'paragraph',
        text: 'The Home Office publication is direct: "When saying ‘policing by consent’, the Home Secretary was referring to a long standing philosophy of British policing, known as the Robert Peel’s 9 Principles of Policing. However, there is no evidence of any link to Robert Peel and it was likely devised by the first Commissioners of Police of the Metropolis (Charles Rowan and Richard Mayne)."',
        claim: 'fact',
        sources: ['uk-homeoffice-policing-by-consent'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'This is an unusually clean case. The attribution is universal, the correction comes from the department that would benefit most from leaving it alone, and the correction is published rather than buried. It is also hedged in the right direction: the department says there is no evidence for Peel and that Rowan and Mayne are the *likely* authors. Replacing one confident attribution with another would repeat the error in the opposite direction.',
      },
      {
        kind: 'paragraph',
        text: 'The publication locates the text: the principles "were set out in the ‘General Instructions’ that were issued to every new police officer from 1829". That places them in an operational document given to officers rather than in a statute, a speech or a founding charter — which is consistent with authorship by the people running the force.',
        claim: 'fact',
        sources: ['uk-homeoffice-policing-by-consent'],
      },
      {
        kind: 'paragraph',
        text: 'One of the nine is worth setting beside the rest of this platform. The eighth requires officers "to recognise always the need for strict adherence to police-executive functions, and to refrain from even seeming to usurp the powers of the judiciary of avenging individuals or the State, and of authoritatively judging guilt and punishing the guilty".',
        claim: 'fact',
        sources: ['uk-homeoffice-policing-by-consent'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'A separation stated in an operational instruction',
        text: 'This platform describes the separation of policing from adjudication as a structural feature of justice systems. Here it is, in 1829, in a document handed to new constables — and framed as a duty to avoid *even seeming* to usurp judicial powers. That the separation appears in an instruction to officers rather than in a constitutional text is itself informative about how such separations get established.',
      },
      {
        kind: 'paragraph',
        text: 'The publication also forecloses the most common misreading of "policing by consent": it "refers to the power of the police coming from the common consent of the public, as opposed to the power of the state. It does not mean the consent of an individual. No individual can chose to withdraw his or her consent from the police, or from a law."',
        claim: 'fact',
        sources: ['uk-homeoffice-policing-by-consent'],
      },
      {
        kind: 'paragraph',
        text: 'The statement quotes the police historian Charles Reith, writing in 1956, describing a philosophy of policing "unique in history and throughout the world because it derived not from fear but almost exclusively from public co-operation with the police". That is Reith’s characterisation, quoted by the department; it is a historian’s claim of uniqueness rather than a departmental finding, and it is repeated here attributed rather than adopted.',
        claim: 'fact',
        sources: ['uk-homeoffice-policing-by-consent'],
      },
      {
        kind: 'paragraph',
        text: 'The statutory backdrop is narrower than the principles’ reputation. The Metropolitan Police Act 1829 created a full-time, centrally organised police force for the Metropolitan area of London. It supports nothing about policing outside that area, nothing about the model being adopted elsewhere, and nothing about earlier or parallel arrangements.',
        claim: 'fact',
        sources: ['met-police-act-1829'],
      },
    ],
    whyItMatters: [
      {
        kind: 'paragraph',
        text: 'A misattribution this durable is worth examining for its mechanism rather than for the fact of it. A famous name attached to an anonymous institutional document makes the document quotable, and quotability is what keeps a text alive. The cost is that the principles are read as one politician’s philosophy rather than as what an official source says they were: instructions written by the people who had to make a new institution work.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also demonstrates the standard this platform applies to founding claims. The correction here was available in an official publication the whole time. Where a "first" or an "invented by" cannot be traced to a source that says it, the right response is to say what the sources do say — which in this case is more specific, better evidenced, and more interesting.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'Robert Peel wrote the nine principles of policing.',
        reality:
          'The Home Office states in an official publication that there is no evidence of any link to Robert Peel, and that they were likely devised by the first Commissioners of Police of the Metropolis.',
      },
      {
        claim: 'Charles Rowan and Richard Mayne wrote them.',
        reality:
          'The Home Office says "likely devised by" those Commissioners. That is a probable attribution, and replacing one confident claim with another would repeat the original error in the opposite direction.',
      },
      {
        claim: 'Policing by consent means an individual can withhold consent.',
        reality:
          'The same publication says it refers to the power of the police coming from the common consent of the public rather than from the power of the state, and that no individual can choose to withdraw consent from the police or from a law.',
      },
      {
        claim: 'The principles were a statute or a founding charter.',
        reality:
          'The Home Office locates them in the General Instructions issued to every new police officer from 1829 — an operational document, not legislation.',
      },
      {
        claim: 'The 1829 Act established modern policing.',
        reality:
          'It created a full-time, centrally organised force for the Metropolitan area of London. It supports nothing about policing outside that area and nothing about the model being adopted elsewhere.',
      },
    ],
    uncertainty: [
      'The provenance rests on one official statement. It says there is no evidence of a link to Peel and that the Commissioners are the likely authors; it does not cite the archival basis for either, and this platform has not examined the General Instructions themselves.',
      'Whether the principles describe how the Metropolitan Police actually behaved, in 1829 or since, is a separate question this page does not address and the source does not answer.',
      'The Reith quotation is a historian’s claim of uniqueness, quoted by the department. It is attributed rather than adopted, and this platform has not assessed it.',
    ],
    relatedGuides: [
      'how-policing-institutions-changed',
      'why-societies-need-law-enforcement',
      'why-police-accountability-matters',
    ],
    sources: ['uk-homeoffice-policing-by-consent', 'met-police-act-1829'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 9,
  },
  {
    slug: 'when-policeman-meant-something-else',
    title: 'When "policeman" meant something else',
    shortTitle: 'What "police" meant',
    question: 'If a document from 1826 mentions policemen, what does it mean?',
    summary:
      'Possibly men directing trains. A national archive records that from as early as 1826 railway companies employed men called "Policemen" whose role was to police — that is, to direct — trains, like a signalman, which is why their records sit among railway staff records rather than police ones.',
    period: {
      fromYear: 1826,
      toYear: 1958,
      display: '1826 to 1958',
      precision: 'exact',
      datingNote:
        'The endpoints are the two dates the archival guide gives: employment of men called Policemen on the railways from as early as 1826, and the absorption of the London Transport Police into the British Transport Police in 1958.',
    },
    scope:
      'Britain, and specifically the railway and transport forces. Not policing generally.',
    continuity: [
      {
        modernCounterpart: 'A modern police officer',
        relationship: 'none-established',
        basis:
          'The archival guide describes men employed on the railways from as early as 1826 whose role was to direct trains. Sharing a job title with a modern constable establishes nothing about function, powers or institution, and the guide itself explains that their records are held among railway staff records for that reason.',
      },
      {
        modernCounterpart: 'The British Transport Police',
        relationship: 'documented',
        basis:
          'This is the one documented institutional line on the page, and the archival guide states it: the British Transport Commission Police was created in 1949, incorporating the former railway forces together with several minor canal and dock forces, and the London Transport Police was absorbed into the British Transport Police in 1958. Incorporation and absorption are documented events, not inferred continuity.',
      },
    ],
    definition: [
      {
        kind: 'paragraph',
        text: 'Words move. "Police" once described an activity — regulating, ordering, directing — before it settled onto a particular kind of institution, and the transition left documents behind in which the word means something a modern reader will misread. A national archive has to explain this to researchers, which is how we know it is a practical problem rather than a linguistic curiosity.',
      },
      {
        kind: 'callout',
        variant: 'scope',
        title: 'What this page is and is not',
        text: 'This describes what one archival research guide records about British railway and transport policing. It is not a history of policing, not a history of the railways, and not a claim about the word’s use anywhere else.',
      },
    ],
    whatTheSourcesSay: [
      {
        kind: 'paragraph',
        text: 'The National Archives’ own research guide to police records states that from as early as 1826 men were employed as "Policemen" on the railways whose role was to police — that is, to direct — trains, like a signalman, and that their records therefore sit among railway staff records.',
        claim: 'fact',
        sources: ['tna-police-records'],
      },
      {
        kind: 'callout',
        variant: 'analysis',
        title: 'The finding this page exists to make',
        text: 'A finding aid exists to tell researchers where records are. This one has to explain that documents naming policemen may not be police records at all — which means the confusion is common enough that an archive built a warning into its guide. If the word misleads professional researchers looking in the right catalogue, it will mislead anyone reading a date and a job title and drawing a line to the present.',
      },
      {
        kind: 'paragraph',
        text: 'A separate railway police function did develop. The same guide records that a police force specifically for transport began with the railways and that the first railway police force in Britain was formed in 1830, and that before nationalisation the four largest railway companies each had their own force under a Chief of Police.',
        claim: 'fact',
        sources: ['tna-police-records'],
      },
      {
        kind: 'paragraph',
        text: 'Consolidation is documented and dated. The British Transport Commission Police was created in 1949, incorporating the former railway forces together with several minor canal and dock forces; and the London Transport Police was absorbed into the British Transport Police in 1958.',
        claim: 'fact',
        sources: ['tna-police-records'],
      },
      {
        kind: 'callout',
        variant: 'note',
        title: 'What the same guide says about coverage',
        text: 'The archive holds police records only for the Metropolitan Police, the Royal Irish Constabulary, the Palestine Police and the transport police; records of other British forces are held elsewhere. A national archive is not a national collection, and an absence in it is not an absence in the record.',
      },
      {
        kind: 'paragraph',
        text: 'The statutory landmark of the same period is narrower than it is usually made to sound. The Metropolitan Police Act 1829 created a full-time, centrally organised police force for the Metropolitan area of London — supporting nothing about policing outside that area, nothing about the model being adopted elsewhere, and nothing about earlier or parallel arrangements.',
        claim: 'fact',
        sources: ['met-police-act-1829'],
      },
    ],
    whyItMatters: [
      {
        kind: 'paragraph',
        text: 'Institutional history is usually written from names, because names are what survive in indexes. This page is a warning about the method: a job title in 1826, a force in 1830, and a statute in 1829 look like a sequence, and two of the three are about different things.',
        claim: 'analysis',
      },
      {
        kind: 'paragraph',
        text: 'It also shows what a documented institutional line looks like, by contrast. Incorporation in 1949 and absorption in 1958 are events an archive can point to. Everything else on this page is a resemblance — and the difference between the two is the whole of what this platform means when it says continuity is a claim rather than an assumption.',
        claim: 'analysis',
      },
    ],
    misconceptions: [
      {
        claim: 'A document naming policemen in the 1820s is a police record.',
        reality:
          'The National Archives’ guide records that men employed as "Policemen" on the railways from as early as 1826 were directing trains, like a signalman, and that their records sit among railway staff records.',
      },
      {
        claim: 'Transport policing grew out of the Metropolitan Police.',
        reality:
          'The guide records that a police force specifically for transport began with the railways, with the first railway police force in Britain formed in 1830, and that the four largest railway companies each had their own force under a Chief of Police before nationalisation.',
      },
      {
        claim: 'Transport policing was always one national force.',
        reality:
          'The British Transport Commission Police was created in 1949 by incorporating the former railway forces and several minor canal and dock forces, and the London Transport Police was absorbed in 1958.',
      },
      {
        claim:
          'If a police force’s records are not in the national archive, the force is undocumented.',
        reality:
          'The guide states that the archive holds police records only for the Metropolitan Police, the Royal Irish Constabulary, the Palestine Police and the transport police, and that records of other British forces are held elsewhere.',
      },
    ],
    uncertainty: [
      'This page rests on one archival finding aid and one statute. It describes British railway and transport policing only, and nothing about the use of the word "police" in any other country or language.',
      'The guide is a description of holdings and the administrative history behind them. It supports the institutional facts and dates recorded here and no wider claim about policing.',
      'What the railway "Policemen" of the 1820s actually did day to day, beyond the guide’s description of directing trains, was not researched.',
    ],
    relatedGuides: [
      'how-policing-institutions-changed',
      'police-and-law-enforcement-difference',
    ],
    sources: ['tna-police-records', 'met-police-act-1829'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    publishedOn: '2026-08-26',
    reviewedOn: '2026-08-26',
    factsVerifiedOn: '2026-08-26',
    readingTimeMinutes: 8,
  },
];

const HISTORY_INDEX = new Map(HISTORY_ENTRIES.map((entry) => [entry.slug, entry]));

/** Only published entries become routes. */
export const PUBLISHED_HISTORY: readonly HistoryEntry[] = HISTORY_ENTRIES.filter(
  (entry) => entry.status === 'published',
);

export function getHistoryEntry(slug: string): HistoryEntry | undefined {
  const found = HISTORY_INDEX.get(slug);
  return found?.status === 'published' ? found : undefined;
}

export function historyPath(entry: HistoryEntry): string {
  return `/history/${entry.slug}`;
}

/** Oldest first. Ties broken by the end of the period, then by slug, so the order is stable. */
export const HISTORY_CHRONOLOGICAL: readonly HistoryEntry[] = [...PUBLISHED_HISTORY].sort(
  (a, b) =>
    a.period.fromYear - b.period.fromYear ||
    a.period.toYear - b.period.toYear ||
    a.slug.localeCompare(b.slug),
);

/**
 * Problems with the history registry, as human-readable strings. Empty means valid.
 *
 * Pure, so the tests can exercise rejection with synthetic entries rather than only asserting
 * that the registry which exists today happens to be correct.
 */
export function validateHistoryEntry(
  entry: HistoryEntry,
  knownSources: readonly string[],
): string[] {
  const problems: string[] = [];
  const sources = new Set(knownSources);

  if (entry.period.fromYear > entry.period.toYear) {
    problems.push(`${entry.slug}: period runs backwards`);
  }
  if (entry.period.precision !== 'exact' && !entry.period.datingNote?.trim()) {
    problems.push(
      `${entry.slug}: period is ${entry.period.precision} but states no datingNote`,
    );
  }
  if (!entry.scope.trim()) problems.push(`${entry.slug}: states no scope`);
  if (entry.continuity.length === 0) {
    problems.push(
      `${entry.slug}: makes no continuity claim, so a reader assumption goes unanswered`,
    );
  }
  for (const claim of entry.continuity) {
    if (!claim.basis.trim()) {
      problems.push(
        `${entry.slug}: continuity claim "${claim.modernCounterpart}" states no basis`,
      );
    }
  }
  if (entry.uncertainty.length === 0) problems.push(`${entry.slug}: states no uncertainty`);
  if (entry.sources.length === 0) problems.push(`${entry.slug}: cites no source`);
  for (const id of entry.sources) {
    if (!sources.has(id)) problems.push(`${entry.slug}: cites unknown source "${id}"`);
  }
  return problems;
}
