import type { LifecycleLayer, LifecycleStage } from './types';

/**
 * The justice-system lifecycle: an educational map, not a procedural code.
 *
 * Read the note on `LifecycleStage` in types.ts first — it explains why `mayPrecede` is the
 * only relationship this model adds, and why it is named for what it asserts.
 *
 * THREE THINGS THIS MODEL IS BUILT TO PREVENT.
 *
 * A single path. Every stage but two is `required: false`, every stage carries at least one
 * exit, and the successor lists branch. A reader who follows the model cannot arrive at police
 * → prosecutor → jury → prison, because the model does not contain that as a privileged route.
 *
 * A hidden universalism. Every stage carries a `variation` note drawn from what the corpus
 * already established — that who investigates differs, that charging tests differ, that
 * adjudication is not everywhere a trial in the same sense. The variation is a field rather
 * than a paragraph so it cannot be dropped.
 *
 * A dead end. Every stage has somewhere to go: a successor, an exit, or both. The graph
 * contains genuine cycles — a disposition may lead back to adjudication on appeal or retrial,
 * and decisions during execution are judicial in some systems — and those are correct rather
 * than a modelling accident, so the validator permits them and requires only that no stage
 * traps a reader.
 */
export const LIFECYCLE_STAGES: readonly LifecycleStage[] = [
  {
    id: 'law',
    title: 'Law and legal authority',
    question: 'Where does any of this come from?',
    summary:
      'Nothing in a justice system happens without a legal basis that existed beforehand. Before any institution acts, a law defines the conduct, confers the power, and bounds it.',
    required: true,
    mayPrecede: ['event'],
    exits: [
      'Most law never produces a case at all — conduct is regulated, permitted or prohibited without anything further happening',
    ],
    variation:
      'What counts as law, who makes it, and how it is changed differ fundamentally between systems. Constitutions bind legislatures in some countries and not in others.',
    explainedBy: [
      '/justice/what-is-the-rule-of-law',
      '/justice/legality-and-non-retroactivity',
      '/justice/why-government-is-bound-by-law',
      '/justice/limits-on-public-power',
    ],
  },
  {
    id: 'event',
    title: 'A reported event or suspected offence',
    question: 'How does a justice system find out that something happened?',
    summary:
      'Usually because somebody tells it. Most of what a justice system deals with enters through a report rather than through discovery, which makes reporting one of the most consequential and least examined parts of the whole arrangement.',
    required: false,
    mayPrecede: ['enforcement', 'investigation'],
    exits: [
      'Nothing is reported, and the system never learns of the event',
      'What is reported turns out not to describe an offence',
      'The matter is resolved without any justice institution — privately, by a regulator, or by a civil claim',
    ],
    variation:
      'Which body receives a report, and whether it must act on one, differ. So does whether an event reaches the system through policing at all rather than through a regulator, an inspectorate or a private complaint.',
    explainedBy: [
      '/law-enforcement/why-societies-need-law-enforcement',
      '/public-safety',
      '/law-enforcement/police-and-law-enforcement-difference',
    ],
  },
  {
    id: 'enforcement',
    title: 'Law enforcement response',
    question: 'Who turns up, and what may they actually do?',
    summary:
      'Police and other enforcement bodies hold powers that are conferred by statute and bounded by it. What they may do at this point is narrower than most accounts suggest, and the boundaries are the substance of the stage.',
    required: false,
    mayPrecede: ['investigation', 'charging'],
    exits: [
      'No further action is taken',
      'The matter is dealt with by a warning, a caution or an administrative penalty where the system provides one',
      'The matter is referred to a body that is not a criminal justice institution',
    ],
    variation:
      'Whether policing is national, sub-national or both, whether a gendarmerie exists, and which body holds which power vary more here than almost anywhere else in the system.',
    explainedBy: [
      '/law-enforcement/why-societies-need-law-enforcement',
      '/law-enforcement/police-use-of-force',
      '/law-enforcement/arrest-and-detention',
      '/law-enforcement/police-jurisdiction',
    ],
  },
  {
    id: 'investigation',
    title: 'Investigation',
    question: 'Who investigates, and under whose direction?',
    summary:
      'Establishing what happened, under legal constraints on how it may be established. The familiar picture — police investigate and hand a file to a prosecutor — describes some systems and not others.',
    required: false,
    mayPrecede: ['charging'],
    exits: [
      'The investigation closes without a suspect or without sufficient evidence',
      'No offence is established',
      'The matter is discontinued for a reason the applicable law provides',
    ],
    variation:
      'In some systems a prosecutor or an investigating judge directs the investigation from the outset; in others the police investigate substantially independently and involve a prosecutor later. This is a difference in legal responsibility, not in professional courtesy.',
    explainedBy: [
      '/investigations/what-is-a-criminal-investigation',
      '/investigations/who-investigates-crime',
      '/investigations/police-vs-prosecutor-investigation',
      '/investigations/investigation-to-prosecution',
      '/forensics/what-is-forensic-science',
    ],
  },
  {
    id: 'charging',
    title: 'The decision whether to prosecute',
    question: 'Who decides whether a case goes to court, and on what test?',
    summary:
      'A decision made against a legal standard, by a body that is not the investigator and not the court. There is no universal charging test, and whether the decision is a duty or a discretion differs by system.',
    required: false,
    mayPrecede: ['adversarial'],
    exits: [
      'No charge is brought',
      'The case is diverted — conditionally discontinued, resolved by an agreed measure, or dealt with outside the criminal courts where the law provides for it',
      'The matter proceeds as an administrative or civil matter instead',
    ],
    variation:
      'Germany makes prosecution a duty and then creates statutory exceptions requiring a public-interest judgement; other systems apply an evidential test and a separate public-interest test. Who holds the decision — a prosecution service, an investigating magistrate, in some systems the police — also differs.',
    explainedBy: [
      '/prosecution/how-charging-decisions-work',
      '/prosecution/prosecutorial-discretion-and-legality',
      '/prosecution/why-public-prosecution-exists',
      '/prosecution/prosecution-and-presumption-of-innocence',
    ],
  },
  {
    id: 'adversarial',
    title: 'Prosecution and defence',
    question: 'What happens between the charge and the hearing?',
    summary:
      'Two functions prepare the case from opposite positions, under duties that are not mirror images of one another. In several systems the prosecution owes duties to the accused that the defence does not owe to anyone.',
    required: false,
    mayPrecede: ['adjudication'],
    exits: [
      'The prosecution is discontinued before any hearing',
      'The case is resolved by an agreed procedure where the system provides one',
    ],
    variation:
      'Whether the prosecution is obliged to investigate exonerating circumstances, what the defence may see and when, and whether representation is mandatory all vary. So does whether a public defence institution exists at all.',
    explainedBy: [
      '/defence/what-defence-counsel-does',
      '/defence/defence-counsel-and-prosecutor',
      '/defence/access-to-the-case-file',
      '/defence/right-to-counsel',
      '/prosecution/prosecutorial-objectivity',
    ],
  },
  {
    id: 'adjudication',
    title: 'Adjudication',
    question: 'How is it decided?',
    summary:
      'A body that did not investigate and did not charge decides whether the case is proved. What that body is, how it is composed, and what it does with the material differ so much that "trial" is a word covering unlike things.',
    required: false,
    mayPrecede: ['disposition'],
    exits: [
      'Proceedings are terminated by the court without a decision on the merits',
      'The matter is remitted to another body',
    ],
    variation:
      'Professional judges, lay judges, mixed panels and juries all appear among functioning systems. Whether the court examines the file, hears evidence afresh, or does both varies with the procedural tradition.',
    explainedBy: [
      '/courts/what-do-courts-do',
      '/courts/court-hierarchy',
      '/courts/why-judicial-independence-matters',
      '/courts/court-language-and-interpretation',
      '/justice/what-is-due-process',
    ],
  },
  {
    id: 'disposition',
    title: 'Judgment or other disposition',
    question: 'What comes out of the hearing?',
    summary:
      'An outcome, which is frequently not a conviction. Acquittal, discontinuance and findings that lead nowhere further are outcomes of the system working, not of it failing.',
    required: false,
    mayPrecede: ['sentencing', 'adjudication'],
    exits: [
      'Acquittal — the case ends and the person leaves the system',
      'The finding is one that carries no sanction',
      'A remedy is ordered against the state rather than a sanction against the person',
    ],
    variation:
      'What may be appealed, by whom, and on what grounds differ. Some systems permit appeal against acquittal and others do not, which changes what "final" means.',
    explainedBy: [
      '/justice/what-is-the-presumption-of-innocence',
      '/justice/effective-remedy',
      '/courts/trial-and-appellate-courts',
      '/justice/appeal-and-the-rule-of-law',
    ],
  },
  {
    id: 'sentencing',
    title: 'Sentencing, where applicable',
    question: 'What follows a conviction?',
    summary:
      'A separate decision from the finding of guilt, made on wider material, and structured by law in most systems. It reaches custody far less often than accounts of criminal justice imply.',
    required: false,
    mayPrecede: ['execution'],
    exits: [
      'A financial penalty or other order that requires no supervision',
      'A custodial term whose execution is suspended, so no custody follows',
      'An order made under mental-health or other legislation rather than as a sentence',
    ],
    variation:
      'England and Wales lists five purposes a court must have regard to; Canada states one fundamental purpose with six objectives and proportionality as a fundamental principle; Germany names culpability as the basis of measurement and places its reintegration goal in the law of execution instead.',
    explainedBy: [
      '/corrections/what-sentencing-is-for',
      '/corrections/custodial-and-non-custodial-sentences',
      '/corrections/what-a-suspended-sentence-is',
      '/corrections/conviction-sentence-and-execution',
    ],
  },
  {
    id: 'execution',
    title: 'Corrections and supervision',
    question: 'Who carries out a sentence, and what happens during it?',
    summary:
      'A separate function from deciding the case, with its own decisions and in some systems its own courts. Most of the decisions affecting a sentenced person are taken here rather than at the hearing.',
    required: false,
    mayPrecede: ['release', 'adjudication'],
    exits: [
      'A non-custodial sentence is completed',
      'A financial penalty is paid and the matter ends',
    ],
    variation:
      'Who administers custody differs — nationally in Japan, by sentence length in Canada, by federal unit in Brazil and Germany — and whether an execution court exists at all differs with it.',
    explainedBy: [
      '/corrections/why-correctional-systems-exist',
      '/corrections/who-runs-prisons',
      '/corrections/what-remand-detention-is',
      '/institutions/correctional-service',
    ],
  },
  {
    id: 'release',
    title: 'Release and reintegration',
    question: 'How does it end?',
    summary:
      'Almost every custodial sentence ends, and where release is early it is a judicial decision on stated criteria rather than an administrative one. Two legislatures state in their own text what the period was supposed to achieve.',
    required: false,
    mayPrecede: ['adjudication'],
    exits: [
      'The sentence is served to its end and the person leaves the system',
      'Supervision is completed and no further obligation remains',
    ],
    variation:
      'German law suspends the remainder of a fixed-term sentence at stated fractions, subject to a public-security condition and to the convicted person’s consent. Whether release is decided by a court, a board or the administration differs by system.',
    explainedBy: [
      '/corrections/release-before-the-end-of-a-sentence',
      '/corrections/what-reintegration-means',
      '/corrections/why-a-sentence-length-is-not-time-served',
    ],
  },
];

/**
 * The layers that apply across stages rather than at one of them.
 *
 * These are the reason the lifecycle is not simply a sequence. Rights do not attach at a point
 * in the process; they constrain every institution that acts. Modelling them as stages would
 * have been the easier design and would have taught the wrong thing.
 */
export const LIFECYCLE_LAYERS: readonly LifecycleLayer[] = [
  {
    id: 'legality',
    title: 'Legality',
    summary:
      'Every act of public power needs a legal basis that existed before the act. This is the condition the rest of the system is built on rather than a stage within it.',
    appliesTo: 'all',
    explainedBy: [
      '/justice/legality-and-non-retroactivity',
      '/justice/why-government-is-bound-by-law',
      '/justice/legal-certainty',
    ],
  },
  {
    id: 'rights',
    title: 'Rights',
    summary:
      'Rights constrain what each institution may do at the point it acts. They are not a benefit conferred at the end of the process, and several of them operate hardest at the stages furthest from a courtroom.',
    appliesTo: 'all',
    explainedBy: [
      '/justice/limits-on-public-power',
      '/justice/equality-before-the-law',
      '/justice/what-is-due-process',
      '/justice/procedural-fairness-and-its-many-names',
    ],
  },
  {
    id: 'access',
    title: 'Access and representation',
    summary:
      'Whether a person can use the institutions at all: the language proceedings run in, what they cost, whether the person can take part, and how representation is provided and paid for.',
    appliesTo: ['charging', 'adversarial', 'adjudication', 'disposition', 'sentencing'],
    explainedBy: [
      '/justice/access-to-justice',
      '/courts/court-language-and-interpretation',
      '/courts/taking-part-in-your-own-case',
      '/courts/the-cost-of-going-to-court',
      '/defence/how-defence-is-funded',
      '/defence/representing-yourself',
    ],
  },
  {
    id: 'evidence',
    title: 'Evidence and forensic science',
    summary:
      'What may be used to establish what happened, and the controls that govern it. The constraints run from the moment material is collected, not from the moment it is offered to a court.',
    appliesTo: ['enforcement', 'investigation', 'adversarial', 'adjudication'],
    explainedBy: [
      '/forensics/what-is-forensic-science',
      '/glossary/evidence',
      '/glossary/chain-of-custody',
      '/glossary/standard-of-proof',
    ],
  },
  {
    id: 'review',
    title: 'Review and appeal',
    summary:
      'The mechanisms by which a legal system says its own decisions were wrong. They create the cycles in this model, and their existence is what makes deference to a decision reasonable rather than blind.',
    appliesTo: ['disposition', 'sentencing', 'execution', 'release'],
    explainedBy: [
      '/justice/appeal-and-the-rule-of-law',
      '/justice/why-courts-must-be-respected',
      '/courts/trial-and-appellate-courts',
      '/courts/supreme-courts-and-final-appeal',
      '/glossary/judicial-review',
    ],
  },
  {
    id: 'accountability',
    title: 'Oversight and accountability',
    summary:
      'Bodies that examine how institutions used their powers, separately from whether any individual case was decided correctly. Oversight is not operational command and does not decide cases.',
    appliesTo: 'all',
    explainedBy: [
      '/justice/why-justice-systems-need-oversight',
      '/law-enforcement/why-police-accountability-matters',
      '/law-enforcement/internal-vs-external-police-oversight',
      '/prosecution/prosecutorial-accountability',
      '/courts/who-runs-the-courts',
    ],
  },
  {
    id: 'remedies',
    title: 'Remedies',
    summary:
      'What a person can actually obtain when an institution gets something wrong. A right whose breach produces nothing is a description of how things ought to be.',
    appliesTo: ['enforcement', 'investigation', 'adjudication', 'disposition', 'execution'],
    explainedBy: [
      '/justice/effective-remedy',
      '/justice/access-to-justice',
      '/justice/victims-in-the-justice-process',
    ],
  },
];

const STAGE_INDEX = new Map(LIFECYCLE_STAGES.map((stage) => [stage.id, stage]));

export function getLifecycleStage(id: string): LifecycleStage | undefined {
  return STAGE_INDEX.get(id);
}

/** Stages nothing else may precede — where a reader enters the model. */
export const LIFECYCLE_ENTRY_POINTS: readonly string[] = LIFECYCLE_STAGES.filter(
  (stage) => !LIFECYCLE_STAGES.some((other) => other.mayPrecede.includes(stage.id)),
).map((stage) => stage.id);

/** Every declared successor edge, as pairs. Used by the validator and the page. */
export const LIFECYCLE_EDGES: readonly { from: string; to: string }[] =
  LIFECYCLE_STAGES.flatMap((stage) => stage.mayPrecede.map((to) => ({ from: stage.id, to })));

/**
 * Problems with the model, as human-readable strings. Empty means valid.
 *
 * Pure, so the tests can exercise rejection with synthetic stages rather than only asserting
 * that the registry that exists today happens to be correct.
 */
export function validateLifecycle(
  stages: readonly LifecycleStage[],
  layers: readonly LifecycleLayer[],
  knownRoutes: readonly string[],
): string[] {
  const problems: string[] = [];
  const ids = new Set<string>();
  const routes = new Set(knownRoutes);

  for (const stage of stages) {
    if (ids.has(stage.id)) problems.push(`duplicate stage id "${stage.id}"`);
    ids.add(stage.id);
    if (!stage.variation.trim()) problems.push(`stage "${stage.id}" states no variation`);
    if (stage.exits.length === 0 && stage.mayPrecede.length === 0) {
      problems.push(`stage "${stage.id}" is a dead end: no successor and no exit`);
    }
    if (stage.explainedBy.length === 0) {
      problems.push(`stage "${stage.id}" is explained by no page`);
    }
  }

  for (const stage of stages) {
    for (const next of stage.mayPrecede) {
      if (next === stage.id) problems.push(`stage "${stage.id}" precedes itself`);
      else if (!ids.has(next)) {
        problems.push(`stage "${stage.id}" may precede unknown stage "${next}"`);
      }
    }
    for (const route of stage.explainedBy) {
      if (!routes.has(route)) {
        problems.push(`stage "${stage.id}" cites route "${route}", which is not published`);
      }
    }
  }

  for (const layer of layers) {
    if (layer.explainedBy.length === 0)
      problems.push(`layer "${layer.id}" is explained by no page`);
    for (const route of layer.explainedBy) {
      if (!routes.has(route)) {
        problems.push(`layer "${layer.id}" cites route "${route}", which is not published`);
      }
    }
    if (layer.appliesTo !== 'all') {
      for (const stageId of layer.appliesTo) {
        if (!ids.has(stageId)) {
          problems.push(`layer "${layer.id}" applies to unknown stage "${stageId}"`);
        }
      }
    }
  }

  /*
   * Branching is the property that stops this being a single path, so its absence is a defect
   * rather than a stylistic matter. A model in which every stage had exactly one successor and
   * no exit would validate against every other rule here and would teach exactly the thing this
   * wave exists to prevent.
   */
  const branching = stages.filter((s) => s.mayPrecede.length + s.exits.length > 1);
  if (branching.length < stages.length / 2) {
    problems.push(
      'fewer than half the stages branch: the model has collapsed into a single path',
    );
  }

  return problems;
}
