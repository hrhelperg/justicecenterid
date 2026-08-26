import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { GLOSSARY } from '@/content/glossary';
import { HISTORY_ENTRIES } from '@/content/history';
import { INSTITUTION_TYPES } from '@/content/institutions';
import { PROFESSIONS } from '@/content/professions';
import { COUNTRY_DOSSIERS } from '@/content/dossiers/index';
import { getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import { parseInline } from '@/lib/content';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 19: remedies, appeals and review.
 *
 * The central principle is that LAWFUL CHALLENGE IS PART OF THE JUSTICE SYSTEM. Two opposite
 * failures follow from it, and this suite guards both ends rather than one:
 *
 *   - framing review as hostility toward courts or government, and
 *   - framing institutional respect as acceptance of unreviewable power.
 *
 * The distinctive risk of the subject is FALSE UNIFICATION. Appeal, judicial review, cassation,
 * constitutional review, detention review and evidentiary exclusion all correct errors, so the
 * pull is to describe them as one machine with regional accents. They are not one machine. Some
 * are jurisdictions, some are modes of review, some are grounds, some are legal effects and some
 * are procedural postures — and several are two at once. No taxonomy is added by this wave for
 * exactly that reason, so the invariants below are the only thing standing between the corpus
 * and a flattening that the sources do not support.
 *
 * The second risk is AUTOMATICITY: that a breach voids a proceeding, that unlawfully obtained
 * evidence is always excluded, that a right of appeal means a fresh trial. Every one of those is
 * false of at least one system this wave describes from primary text, and each has a group here.
 *
 * The safety guard is assertion-aware, per the brief: a disclaimer must not fail merely because
 * it contains the vocabulary it is refusing.
 */

const WAVE_19_COURTS = [
  'appeal-and-judicial-review-are-different',
  'cassation-review',
  'what-a-reviewing-court-can-do',
] as const;

const WAVE_19_JUSTICE = [
  'constitutional-review',
  'reviewing-detention',
  'when-a-procedural-error-changes-the-outcome',
  'what-happens-to-unlawfully-obtained-evidence',
] as const;

const WAVE_19 = [...WAVE_19_COURTS, ...WAVE_19_JUSTICE] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 19 guide missing: ${slug}`);
  return found;
}

function blocks(list: readonly Block[] | undefined): string[] {
  return (list ?? []).flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((i) => [i.term, i.description]);
  });
}

function allBlocks(g: Guide): Block[] {
  return [
    ...(g.definition ?? []),
    ...(g.whyItExists ?? []),
    ...(g.howItWorks ?? []),
    ...(g.variation ?? []),
    ...(g.rightsAndAccountability ?? []),
    ...(g.furtherReading ?? []),
  ];
}

/**
 * The same blocks WITHOUT furtherReading, for the duplication checks.
 *
 * A furtherReading block is a list of link markers by construction — "Related: [a](/x), [b](/y)"
 * — so two pages that point at overlapping neighbours share word 5-grams for a reason that has
 * nothing to do with restating each other's content. Including them made the overlap measure
 * report a Wave 19 page as a 32% duplicate of a corrections page on the strength of the word
 * "Related" and two shared link targets. That is the check not knowing about a content family
 * and reporting the content as wrong rather than itself.
 */
function proseBlocks(g: Guide): Block[] {
  return [
    ...(g.definition ?? []),
    ...(g.whyItExists ?? []),
    ...(g.howItWorks ?? []),
    ...(g.variation ?? []),
    ...(g.rightsAndAccountability ?? []),
  ];
}

function prose(g: Guide): string {
  return [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality]),
    ...(g.uncertainty ?? []),
  ].join('\n');
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Wave 13's rule, re-established every wave since: prose is scanned sentence by sentence, but a
 * misconception is ONE unit of claim + reality. The schema guarantees that `reality` denies
 * `claim`, so splitting the pair would report the corpus's own corrections as violations.
 */
function tripwireUnits(g: Guide): string[] {
  const text = [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...(g.uncertainty ?? []),
  ].join('\n');
  return [...sentences(text), ...g.misconceptions.map((m) => `${m.claim} ${m.reality}`)];
}

/**
 * The matched span is stripped before looking for a negation, because these tripwires contain
 * negations in their own text ("does not give a new trial", "shall not be reviewed"). Without
 * the strip, a pattern would clear itself.
 */
function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brather than\b|\bunlike\b|\binverts?\b|\bmisleads?\b|\bdoes not follow\b|\bit is not\b/i.test(
    remainder,
  );
}

/**
 * A stricter denial test, for tripwires whose OWN TEXT contains a negation.
 *
 * `deniesClaim` strips the match and asks whether a negation survives elsewhere in the sentence.
 * That is right for a plain assertion. It is wrong for a pattern like "respecting the decision
 * means not challenging it", because the sentence that states that stance naturally goes on to
 * say "and there is no legitimate reason to review a judgment" — and the incidental `no` clears
 * the whole sentence. That is not hypothetical: it is how the live-catch test below first failed.
 *
 * Such a stance is neutralised only by a negation that governs it, and in English that negation
 * precedes it. So only the text BEFORE the match is examined, on the reasoning Wave 14
 * established for directives.
 */
function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  return /\b(?:not|never|no|nothing|neither|nor)\b|\bdoes not\b|\brather than\b/i.test(before);
}

const ALL_UNITS = WAVE_19.flatMap((slug) => tripwireUnits(guide(slug)));
const ALL_PROSE = WAVE_19.map((slug) => prose(guide(slug))).join('\n');

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* Routing                                                                    */
/* -------------------------------------------------------------------------- */

describe('Wave 19 routes exist in the sections they belong to', () => {
  it.each(WAVE_19_COURTS)('%s is published and routed under /courts/', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.section).toBe('courts');
    expect(guidePath(g)).toBe(`/courts/${slug}`);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/courts/${slug}`);
  });

  it.each(WAVE_19_JUSTICE)('%s is published and routed under /justice/', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.section).toBe('justice');
    expect(guidePath(g)).toBe(`/justice/${slug}`);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/justice/${slug}`);
  });

  it.each(WAVE_19)('%s declares a safety review decision', (slug) => {
    expect(['cleared', 'not-required']).toContain(guide(slug).safetyReview);
  });

  it('is not vacuous — seven routes, three in courts and four in justice', () => {
    expect(WAVE_19.length).toBe(7);
    expect(new Set(WAVE_19).size).toBe(7);
    expect(WAVE_19_COURTS.length).toBe(3);
    expect(WAVE_19_JUSTICE.length).toBe(4);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 1: appeal and judicial review are different things               */
/* Invariant 2: cassation is a mode of review, not a rank of court            */
/* -------------------------------------------------------------------------- */

const FALSE_EQUIVALENCES: RegExp[] = [
  /\bjudicial review (?:is|means|is just|is simply) (?:an? )?appeal\b/i,
  /\ban? appeal (?:is|means) judicial review\b/i,
  /\bjudicial review and appeals? are (?:the same|synonyms|interchangeable|two names)\b/i,
  /\bappeals? and judicial review are (?:the same|synonyms|interchangeable|two names)\b/i,
  /\bcassation (?:is|means) (?:the )?(?:supreme|highest|apex) court\b/i,
  /\bcassation (?:only )?(?:happens|takes place|is heard) (?:in|at|before) the (?:supreme|highest|apex) court\b/i,
  /\ba court of cassation is (?:always|necessarily) the (?:supreme|highest|apex) court\b/i,
  /\bcassation is (?:a )?rank\b/i,
  /\bconstitutional review (?:is|means) (?:an? )?appeal\b/i,
  /\bevery (?:appeal|review) (?:goes|ends) (?:up )?(?:at|in|to) the (?:supreme|highest|apex) court\b/i,
];

describe('the corrective mechanisms are not flattened into one another', () => {
  it.each(FALSE_EQUIVALENCES.map((p) => [p.source, p] as const))(
    'no undenied equivalence matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a false equivalence stated without denial').toEqual([]);
    },
  );

  it('catches each equivalence when planted', () => {
    for (const planted of [
      'Judicial review is an appeal by another name.',
      'Appeals and judicial review are the same, only the label differs.',
      'Cassation is the supreme court, so cassation is a rank.',
      'A court of cassation is always the highest court in the system.',
      'Constitutional review is an appeal against the statute.',
    ]) {
      expect(catches(FALSE_EQUIVALENCES, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentences that state the distinction', () => {
    for (const correction of [
      'Judicial review is not an appeal: it asks whether the power was exercised lawfully, not whether the decision was right.',
      'Cassation is a description of what the review does, not a rank of court.',
    ]) {
      expect(catches(FALSE_EQUIVALENCES, correction), `fired on: ${correction}`).toBe(false);
    }
  });

  /*
   * The load-bearing evidence, pinned individually. StPO § 333 is what makes the cassation
   * claim a finding rather than an assertion: Revision lies against first-instance judgments of
   * the Oberlandesgerichte, so a review confined to legal error is available against courts
   * that are not the apex and is heard by courts that are not the apex either.
   */
  it('rests the cassation finding on the provision that establishes it', () => {
    const g = guide('cassation-review');
    expect(g.sources).toContain('de-stpo-revision');
    expect(prose(g)).toMatch(/Oberlandesgericht/);
    const note = getSource('de-stpo-revision')?.note ?? '';
    expect(note, 'the source does not support what the page rests on it').toMatch(
      /not confined to the highest court/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 3: an appeal is not a retrial                                    */
/* -------------------------------------------------------------------------- */

const RETRIAL_CLAIMS: RegExp[] = [
  /\bappeals? (?:always |automatically )?(?:gives?|means?|results? in|leads? to) (?:a )?(?:new|fresh|second) (?:trial|hearing)\b/i,
  /\bon appeal the (?:case|evidence|facts) (?:is|are) (?:always |automatically )?(?:reheard|retried|reopened)\b/i,
  /\ban appeal (?:is|means) (?:a )?(?:retrial|rehearing|new trial)\b/i,
  /\bevery appeal (?:reopens|reconsiders) the facts\b/i,
  /\ba successful appeal (?:always |automatically )?(?:means|results in) (?:an )?acquittal\b/i,
];

describe('appeal is not described as a second trial', () => {
  it.each(RETRIAL_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied retrial claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'an appeal-as-retrial claim without denial').toEqual([]);
    },
  );

  it('catches a retrial claim when planted', () => {
    for (const planted of [
      'An appeal gives a new trial before a different judge.',
      'On appeal the facts are reheard from the beginning.',
      'A successful appeal always means an acquittal.',
    ]) {
      expect(catches(RETRIAL_CLAIMS, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentence that refuses it', () => {
    const refusal =
      'An appeal is not a retrial: StPO § 337 confines the Revision to a violation of the law, and facts established below are not reopened.';
    expect(catches(RETRIAL_CLAIMS, refusal)).toBe(false);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 4: no automatic nullity, no automatic exclusion                  */
/* -------------------------------------------------------------------------- */

const AUTOMATICITY: RegExp[] = [
  /\b(?:any|every|a) (?:procedural )?(?:breach|violation|error|irregularity) (?:automatically )?(?:voids?|invalidates?|nullifies?|quashes?)\b/i,
  /\bthe (?:proceeding|trial|decision|judgment|sentence) is (?:automatically )?void (?:if|when|where|because)\b/i,
  /\bbreaking (?:a|the) rule (?:automatically )?(?:voids?|invalidates?)\b/i,
  /\bunlawfully obtained evidence is (?:always |automatically )?(?:excluded|inadmissible|thrown out)\b/i,
  /\bevidence obtained (?:unlawfully|illegally) (?:must|will) (?:always )?be excluded\b/i,
  /\bexclusion (?:of evidence )?(?:is|follows) automatic(?:ally)?\b/i,
  /\bevery (?:legal )?system (?:excludes|has an exclusionary rule)\b/i,
];

describe('nothing is described as following automatically from a violation', () => {
  it.each(AUTOMATICITY.map((p) => [p.source, p] as const))(
    'no undenied automaticity claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'an automatic consequence stated without denial').toEqual([]);
    },
  );

  it('catches each automaticity claim when planted', () => {
    for (const planted of [
      'Any procedural violation voids the proceeding.',
      'Unlawfully obtained evidence is always excluded.',
      'Evidence obtained unlawfully must always be excluded, so exclusion is automatic.',
      'Every legal system has an exclusionary rule.',
    ]) {
      expect(catches(AUTOMATICITY, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentences that state the conditional rule', () => {
    for (const correction of [
      'It does not follow that the decision falls, and Sentencing Act 2020 s. 30(4) says so: no custodial sentence is invalidated by the failure to obtain a report.',
      'Unlawfully obtained evidence is not always excluded — South Africa and Kenya both condition exclusion on the effect of admission.',
    ]) {
      expect(catches(AUTOMATICITY, correction), `fired on: ${correction}`).toBe(false);
    }
  });

  /*
   * Both halves of the German structure must be present. Section 337's "beruhe" without § 338
   * would describe a system with no absolute grounds; § 338 without "beruhe" would describe one
   * where any listed defect is the whole test. Requiring BOTH is deliberate: Wave 16's mutation
   * W16-M10 survived because an assertion accepted either of two phrases, and inverting one left
   * the other matching.
   */
  it('states both halves of the German test, not just one', () => {
    const text = prose(guide('when-a-procedural-error-changes-the-outcome'));
    expect(text, 'the general causation test is missing').toMatch(/beruhe/);
    expect(text, 'the absolute grounds are missing').toMatch(
      /Absolute Revisionsgründe|§\s*338/,
    );
  });

  it('names the two English statutes that save validity expressly', () => {
    const g = guide('when-a-procedural-error-changes-the-outcome');
    const text = prose(g);
    expect(text).toMatch(/no custodial sentence or community sentence is invalidated/i);
    expect(text).toMatch(/does not of itself make that person liable/i);
    expect(g.sources).toContain('uk-sentencing-act-2020-reports-guidelines');
    expect(g.sources).toContain('uk-fsr-act-2021');
  });

  it('records the conditional exclusion in the words of both constitutions', () => {
    const text = prose(guide('what-happens-to-unlawfully-obtained-evidence'));
    expect(text).toMatch(/would render the trial unfair/i);
    expect(text).toMatch(/detrimental to the administration of justice/i);
    // And the unconditional one, so the page is a comparison and not a single rule restated.
    expect(text).toMatch(/inadmissible in the process/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 5: habeas corpus is one tradition's name, not the universal      */
/* -------------------------------------------------------------------------- */

const HABEAS_UNIVERSALITY: RegExp[] = [
  /\bhabeas corpus (?:is|exists|is available) (?:in )?(?:every|all) (?:country|countries|system|systems|jurisdictions?)\b/i,
  /\b(?:every|all) (?:country|countries|systems?|jurisdictions?) (?:has|have) habeas corpus\b/i,
  /\bhabeas corpus is the (?:universal|standard|normal) (?:remedy|protection|route)\b/i,
  /\bwithout habeas corpus (?:there is|a system has) no (?:protection|remedy)\b/i,
  /\bhabeas corpus (?:was created|originated) (?:by|in) the (?:Habeas Corpus )?Act (?:of )?1679\b/i,
  /\bthe (?:Habeas Corpus )?Act (?:of )?1679 (?:created|invented|introduced) (?:the writ|habeas corpus)\b/i,
];

describe('detention review is not reduced to one tradition’s name', () => {
  it.each(HABEAS_UNIVERSALITY.map((p) => [p.source, p] as const))(
    'no undenied universality claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a habeas-universality claim without denial').toEqual([]);
    },
  );

  it('catches each universality claim when planted', () => {
    for (const planted of [
      'Habeas corpus exists in every country with a functioning judiciary.',
      'Habeas corpus is the universal remedy against unlawful detention.',
      'The Habeas Corpus Act 1679 created habeas corpus.',
    ]) {
      expect(catches(HABEAS_UNIVERSALITY, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentences that refuse it', () => {
    for (const refusal of [
      'It is not the universal remedy: South Africa gives a right to challenge detention in person and be released without using the phrase.',
      'The Act of 1679 did not create habeas corpus — its own recital describes writs already being directed to officers and evaded.',
    ]) {
      expect(catches(HABEAS_UNIVERSALITY, refusal), `fired on: ${refusal}`).toBe(false);
    }
  });

  it('describes at least two systems that protect against detention without the name', () => {
    const g = guide('reviewing-detention');
    const text = prose(g);
    expect(text).toMatch(/South Africa/);
    expect(text).toMatch(/France/);
    expect(text, 'the South African route is not stated').toMatch(
      /including every sentenced prisoner/i,
    );
    expect(text, 'the French route is not stated').toMatch(/guardian of individual liberty/i);
    expect(g.sources).toContain('za-constitution');
    expect(g.sources).toContain('fr-constitution-1958');
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 6: both ends of the framing rule                                 */
/* -------------------------------------------------------------------------- */

const HOSTILE_FRAMING: RegExp[] = [
  /\b(?:appealing|an appeal|challenging a decision|judicial review) (?:is|shows|signals) (?:disrespect|contempt|hostility|an attack)\b/i,
  /\b(?:questioning|challenging) (?:a|the) (?:court|judge|judgment) (?:is|means) (?:attacking|undermining)\b/i,
  /\b(?:courts|judges) (?:are|is) (?:corrupt|rigged|not to be trusted)\b/i,
  /\bthe (?:system|judiciary) (?:cannot|does not) be trusted to correct\b/i,
];

const DEFERENCE_FRAMING: RegExp[] = [
  /\b(?:courts|judges|governments?) (?:should|must) (?:not )?be (?:beyond|above) (?:review|challenge|question)\b/i,
  /\b(?:a|the) (?:decision|judgment|power) (?:is|should be) (?:simply )?(?:final|unreviewable) and that is (?:right|correct|proper)\b/i,
  /\b(?:accepting|respecting) (?:the|a) (?:decision|court) means not (?:challenging|questioning|reviewing)\b/i,
  /\bthere is no (?:proper |legitimate )?reason to (?:challenge|review|question) (?:a|the) (?:decision|judgment)\b/i,
];

describe('review is framed as part of the system, at both ends', () => {
  it.each(HOSTILE_FRAMING.map((p) => [p.source, p] as const))(
    'no undenied hostility framing matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'review framed as hostility toward courts').toEqual([]);
    },
  );

  it.each(DEFERENCE_FRAMING.map((p) => [p.source, p] as const))(
    'no undenied unreviewable-power framing matching %s',
    (_src, pattern) => {
      expect(
        ALL_UNITS.filter((u) => pattern.test(u) && !deniesForward(u, pattern)),
        'respect framed as acceptance of unreviewable power',
      ).toEqual([]);
    },
  );

  it('catches framing at both ends when planted', () => {
    expect(
      catches(HOSTILE_FRAMING, 'Appealing is disrespect for the court that decided the case.'),
    ).toBe(true);
    expect(catches(HOSTILE_FRAMING, 'Courts are rigged, which is why appeals exist.')).toBe(
      true,
    );
    const deferential =
      'Respecting the decision means not challenging it, and there is no legitimate reason to review a judgment.';
    expect(
      DEFERENCE_FRAMING.some((p) => p.test(deferential) && !deniesForward(deferential, p)),
      'the deference guard would not catch an inserted stance',
    ).toBe(true);
    // And the reason the forward-only test is needed here: deniesClaim clears this sentence,
    // because the stance's own second clause supplies a `no` that has nothing to do with denying
    // the first.
    expect(catches(DEFERENCE_FRAMING, deferential)).toBe(false);
  });

  it('does NOT fire on the sentences that state the principle', () => {
    for (const correct of [
      'Asking what happens when a rule is broken is not an attack on the rule or on the court applying it.',
      'Neither design implies distrust of courts.',
      'This platform does not say that respecting the decision means not challenging it.',
    ]) {
      expect(catches(HOSTILE_FRAMING, correct), `fired: ${correct}`).toBe(false);
      expect(
        DEFERENCE_FRAMING.some((p) => p.test(correct) && !deniesForward(correct, p)),
        `fired: ${correct}`,
      ).toBe(false);
    }
  });

  it('states positively that challenge is part of the system', () => {
    expect(ALL_PROSE).toMatch(
      /not an attack|is not hostility|part of the (?:justice )?system|does not imply distrust/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 7: no actionable procedure, tactic or evasion                    */
/* -------------------------------------------------------------------------- */

const ACTIONABLE_TOPICS: RegExp[] = [
  /\bhow to (?:file|lodge|bring|commence) (?:an? )?(?:appeal|application|petition|complaint)\b/i,
  /\b(?:you|your lawyer) (?:should|must|can) (?:file|lodge|apply|appeal) (?:within|by|before)\b/i,
  /\bthe deadline (?:for|to) (?:appeal|apply|file) is\b/i,
  /\bwithin \d+ (?:days?|weeks?|months?) of (?:the )?(?:judgment|decision|sentence|conviction)\b/i,
  /\bhow to (?:create|preserve|manufacture) (?:a |an )?(?:reversible error|appellate issue|ground of appeal)\b/i,
  /\bhow to (?:avoid|evade|escape|delay) (?:finality|enforcement|the judgment)\b/i,
  /\bforum shop|choose the (?:most )?favourable (?:court|forum) to\b/i,
  /\bhow to (?:get|have) evidence (?:excluded|suppressed|thrown out)\b/i,
  /\bto (?:maximise|improve) (?:your|the) chances? (?:of|on) appeal\b/i,
  /\bthe best ground(?:s)? (?:of|for) appeal (?:is|are)\b/i,
];

/**
 * Is `sentence` an AFFIRMATIVE operational instruction on a prohibited topic?
 *
 * Wave 16's design, kept: a negation that governs the match precedes it, and these pages also
 * refuse in disclaimer vocabulary that carries no negation at all. Both signals are needed, and
 * both are exercised separately below — an untested branch of a safety guard is an unproven one.
 */
function isActionable(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  const negatedForwards =
    /\b(?:not|never|no|nothing|neither|without)\b|\bdoes not\b|\brather than\b/i.test(before);
  const disclaims =
    /\bnames? no\b|\bdescribes? no\b|\bstates? no\b|\bdoes not (?:describe|explain|provide|tell|address|indicate|name)\b|\bis not (?:a guide|guidance|legal advice|advice)\b|\bnothing (?:here|on this page)\b|\bout of scope\b|\bcannot (?:answer|indicate)\b|\bwill not\b/i.test(
      sentence,
    );
  return !negatedForwards && !disclaims;
}

describe('no page is usable as a procedure, a tactic or an evasion', () => {
  it.each(ACTIONABLE_TOPICS.map((p) => [p.source, p] as const))(
    'no affirmative instruction matching %s',
    (_src, pattern) => {
      expect(
        ALL_UNITS.filter((s) => isActionable(s, pattern)),
        'an actionable instruction on a prohibited topic',
      ).toEqual([]);
    },
  );

  it('catches an instruction inserted into the corpus', () => {
    for (const planted of [
      'How to file an appeal: complete the notice and serve it on the other party.',
      'You must lodge the appeal within 28 days of the judgment.',
      'How to have evidence excluded is the first question defence counsel asks.',
      'To maximise your chances on appeal, raise every available ground.',
    ]) {
      const hit = ACTIONABLE_TOPICS.some((p) => isActionable(planted, p));
      expect(hit, `the safety guard would not catch: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the safety disclaimers these pages actually carry', () => {
    for (const disclaimer of [
      'It names no procedure, no form, no time limit and no route, it cannot indicate whether any detention is lawful, and it is not legal advice.',
      'This page does not describe how to file an appeal.',
      'Nothing here is a technique for obtaining or resisting a ruling on evidence.',
    ]) {
      const hit = ACTIONABLE_TOPICS.some((p) => isActionable(disclaimer, p));
      expect(hit, `a disclaimer was reported as an instruction: ${disclaimer}`).toBe(false);
    }
  });

  it('clears a refusal that negates forwards but carries no disclaimer vocabulary', () => {
    // "Nothing on this platform" carries a negation but matches no disclaimer pattern — the
    // disclaimer half requires "nothing here" or "nothing on this page" — so only the
    // forward-negation branch can clear it.
    const sentence = 'Nothing on this platform sets out how to file an appeal in any country.';
    const matching = ACTIONABLE_TOPICS.filter((p) => new RegExp(p.source, 'i').test(sentence));
    expect(matching.length, 'the sentence exercises no topic pattern').toBeGreaterThan(0);
    expect(
      matching.some((p) => isActionable(sentence, p)),
      'the forward-negation half of the guard is inert',
    ).toBe(false);
  });

  it('clears a refusal that uses disclaimer vocabulary but no forward negation', () => {
    const sentence = 'How to file an appeal is out of scope for this platform.';
    const matching = ACTIONABLE_TOPICS.filter((p) => new RegExp(p.source, 'i').test(sentence));
    expect(matching.length, 'the sentence exercises no topic pattern').toBeGreaterThan(0);
    expect(
      matching.some((p) => isActionable(sentence, p)),
      'the disclaimer half of the guard is inert',
    ).toBe(false);
  });

  it('states no deadline anywhere in the wave', () => {
    expect(ALL_PROSE).not.toMatch(/\bwithin \d+ (?:days?|weeks?|months?)\b/i);
  });

  it('every page carries a scope or safety callout naming what it is not', () => {
    for (const slug of WAVE_19) {
      const g = guide(slug);
      const guards = allBlocks(g).filter(
        (b) => b.kind === 'callout' && (b.variant === 'safety' || b.variant === 'scope'),
      );
      expect(
        guards.length,
        `${slug} carries no safety or scope callout`,
      ).toBeGreaterThanOrEqual(1);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 8: country claims rest on country-scoped sources                 */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  France: 'FR',
  Spain: 'ES',
  Brazil: 'BR',
  'South Africa': 'ZA',
  Kenya: 'KE',
  Belgium: 'BE',
  'England and Wales': 'GB',
};

/** The Netherlands is named in prose without the definite article in every occurrence. */
const NETHERLANDS = { name: 'Dutch', iso: 'NL' };

function hasSourceFor(sources: readonly string[], iso: string, country: string): boolean {
  return sources.some((id) => {
    const source = getSource(id);
    if (!source) return false;
    if (source.jurisdiction === iso) return true;
    return (
      source.jurisdiction === 'INT' && new RegExp(`\\b${country}\\b`, 'i').test(source.title)
    );
  });
}

/**
 * Naming a country is not always claiming something about its law.
 *
 * "Germany appears in this platform's comparative material for review of legal error, but no
 * source here establishes its position on unlawfully obtained evidence" names Germany in order to
 * record a GAP. Requiring a German source for that sentence would force the page either to delete
 * an honest NOT ESTABLISHED statement or to cite a source that supports nothing about it — which
 * is the laundering this invariant exists to prevent, arrived at from the other direction.
 *
 * So the scan is sentence-level and assertion-aware: a sentence that disclaims establishing
 * anything is not a claim, and only claims need a scoped source.
 */
function disclaimsEstablishment(sentence: string): boolean {
  return /\bnot established\b|\bno source\b|\bwas not researched\b|\bwere not researched\b|\bis not evidence that\b|\bgap in this platform\b|\bestablishes no\b|\bsupports? no\b|\bnothing here\b|\bno claim is made\b/i.test(
    sentence,
  );
}

describe('every country claim rests on a country-scoped source', () => {
  it.each(WAVE_19)('%s cites a scoped source for every country it claims about', (slug) => {
    const g = guide(slug);
    const units = sentences(prose(g)).filter((u) => !disclaimsEstablishment(u));
    const claimed = units.join('\n');
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      if (!new RegExp(`\\b${country}\\b`).test(claimed)) continue;
      expect(
        hasSourceFor(g.sources, iso, country),
        `${slug} claims about ${country} with no source scoped to or naming it`,
      ).toBe(true);
    }
    if (new RegExp(`\\b${NETHERLANDS.name}\\b`).test(claimed)) {
      expect(
        hasSourceFor(g.sources, NETHERLANDS.iso, 'Netherlands'),
        `${slug} claims about the Netherlands with no source scoped to it`,
      ).toBe(true);
    }
  });

  it('still requires a source for a country claim dressed up next to a disclaimer', () => {
    // The exemption is per sentence, not per page: a real claim in its own sentence is not
    // excused by a NOT ESTABLISHED sentence elsewhere on the page.
    expect(disclaimsEstablishment('German law excludes such evidence outright.')).toBe(false);
    expect(
      disclaimsEstablishment(
        'No source used on this page establishes the position in Germany.',
      ),
    ).toBe(true);
  });

  it('is exercised — the wave does record a NOT ESTABLISHED position for a named country', () => {
    const g = guide('what-happens-to-unlawfully-obtained-evidence');
    const disclaimed = sentences(prose(g)).filter(
      (u) => /\bGermany\b/.test(u) && disclaimsEstablishment(u),
    );
    expect(disclaimed.length, 'the exemption is never used, so it is untested').toBeGreaterThan(
      0,
    );
    expect(
      hasSourceFor(g.sources, 'DE', 'Germany'),
      'the page cites a German source after all, so the exemption proves nothing',
    ).toBe(false);
  });

  it('rejects a treaty standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(
        hasSourceFor(['iccpr'], iso, country),
        `${country} laundered through a treaty`,
      ).toBe(false);
    }
  });

  it.each(WAVE_19)('%s sources every block it marks as fact', (slug) => {
    const unsourced = allBlocks(guide(slug))
      .filter((b) => b.kind === 'paragraph' && b.claim === 'fact')
      .filter((b) => !((b as { sources?: string[] }).sources ?? []).length)
      .map((b) => (b as { text: string }).text.slice(0, 80));
    expect(unsourced, `${slug} asserts a fact with no source`).toEqual([]);
  });

  it.each(WAVE_19)('%s cites only sources that exist', (slug) => {
    for (const id of guide(slug).sources) {
      expect(getSource(id), `${slug} cites unknown source ${id}`).toBeDefined();
    }
  });

  it('is not vacuous — the wave makes claims about at least six countries', () => {
    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBeGreaterThanOrEqual(6);
  });

  /*
   * The new source record must state what it does NOT support. Waves 16–18 found four notes
   * missing that clause, and a note without one invites the next author to stretch it.
   */
  it('the new source record states its own limits', () => {
    const note = getSource('de-stpo-revision')?.note ?? '';
    expect(note.length).toBeGreaterThan(400);
    expect(note, 'de-stpo-revision states no negative scope').toMatch(
      /\b(?:establishes no|states no|describes no|supports no|it establishes nothing|does not establish)\b/i,
    );
    expect(getSource('de-stpo-revision')?.jurisdiction).toBe('DE');
  });

  it('every Wave 19 source is actually used by a Wave 19 page', () => {
    const used = new Set(WAVE_19.flatMap((slug) => guide(slug).sources));
    for (const id of [
      'de-stpo-revision',
      'de-grundgesetz',
      'fr-constitution-1958',
      'es-constitution',
      'nl-constitution',
      'iccpr',
      'ke-constitution',
      'za-constitution',
      'br-cf-1988',
    ]) {
      expect(used.has(id), `${id} was extended or added for Wave 19 but no page cites it`).toBe(
        true,
      );
    }
  });

  /*
   * The two extensions that landed on the wrong record.
   *
   * The append helper matched only single-quoted note literals, so when the target's note was
   * double-quoted it silently attached the text to the NEXT record in the file — the Spanish
   * Art. 53.2 text to `ch-crimpc`, the Kenyan Art. 50(4) text to `ke-odpp`. Both are fixed;
   * this pins the fix, because the failure was invisible to the typechecker and to every
   * existing test.
   */
  it('attributes each constitutional text to the constitution that contains it', () => {
    expect(getSource('es-constitution')?.note ?? '').toMatch(/preferencia y sumariedad/);
    expect(getSource('ke-constitution')?.note ?? '').toMatch(/Art\. 50\(4\)/);
    expect(
      getSource('ch-crimpc')?.note ?? '',
      'Spanish text is back on a Swiss record',
    ).not.toMatch(/preferencia y sumariedad/);
    expect(
      getSource('ke-odpp')?.note ?? '',
      'Kenyan Art. 50(4) is back on the ODPP record',
    ).not.toMatch(/Art\. 50\(4\)/);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 9: no taxonomy was invented, and nothing is restated             */
/* -------------------------------------------------------------------------- */

describe('the wave adds no taxonomy and duplicates no existing page', () => {
  it('asks a question no other published guide already asks', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    expect(questions.filter((q, i) => questions.indexOf(q) !== i)).toEqual([]);
  });

  it('does not restate a routed glossary term’s definition', () => {
    const routed = GLOSSARY.filter((t) => PUBLIC_ROUTE_PATHS.includes(`/glossary/${t.slug}`));
    expect(routed.length, 'no routed glossary terms to compare against').toBeGreaterThan(0);
    for (const term of routed) {
      const definition = term.definition;
      if (typeof definition !== 'string' || definition.length < 120) continue;
      expect(
        ALL_PROSE.includes(definition),
        `a Wave 19 page reproduces the definition of /glossary/${term.slug}`,
      ).toBe(false);
    }
  });

  it('reproduces no long paragraph from any other published guide', () => {
    const others = ALL_GUIDES.filter(
      (g) => g.status === 'published' && !WAVE_19.includes(g.slug as (typeof WAVE_19)[number]),
    );
    for (const other of others) {
      for (const text of blocks(proseBlocks(other))) {
        if (text.length < 140) continue;
        expect(
          ALL_PROSE.includes(text),
          `a Wave 19 page reproduces a paragraph of ${guidePath(other)}`,
        ).toBe(false);
      }
    }
  });

  const shingles = (text: string): Set<string> => {
    const words = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(Boolean);
    const out = new Set<string>();
    for (let i = 0; i + 5 <= words.length; i += 1) out.add(words.slice(i, i + 5).join(' '));
    return out;
  };

  it('does not near-duplicate a paragraph of any other published guide', () => {
    const wave = new Set<string>();
    for (const slug of WAVE_19) {
      for (const text of blocks(proseBlocks(guide(slug)))) {
        for (const s of shingles(text)) wave.add(s);
      }
    }
    for (const other of ALL_GUIDES) {
      if (other.status !== 'published') continue;
      if (WAVE_19.includes(other.slug as (typeof WAVE_19)[number])) continue;
      for (const text of blocks(proseBlocks(other))) {
        const src = shingles(text);
        if (src.size < 20) continue;
        let shared = 0;
        for (const s of src) if (wave.has(s)) shared += 1;
        const ratio = shared / src.size;
        expect(
          ratio,
          `a Wave 19 page overlaps ${Math.round(ratio * 100)}% with a paragraph of ${guidePath(other)}: "${text.slice(0, 90)}…"`,
        ).toBeLessThan(0.3);
      }
    }
  });

  it('would catch a lightly edited paragraph from elsewhere in the corpus', () => {
    const source = blocks(proseBlocks(guide('cassation-review'))).find((b) => b.length > 200);
    expect(source, 'no long paragraph to test against').toBeDefined();
    const src = shingles(source as string);
    const planted = shingles(`In addition, ${source}`);
    let shared = 0;
    for (const s of src) if (planted.has(s)) shared += 1;
    expect(
      shared / src.size,
      'the overlap measure would not notice a lightly edited paragraph',
    ).toBeGreaterThan(0.3);
  });

  /*
   * No enum, no shared vocabulary, no relationship field.
   *
   * The brief's twenty-one terms are different KINDS of thing, and several are two at once. The
   * architectural decision was to add nothing, so the check is that nothing was added: the wave
   * introduced no institution type, no profession and no glossary term, and every entityType it
   * uses is one the schema already had.
   */
  it('introduces no new entity kind to carry a taxonomy', () => {
    for (const slug of WAVE_19) {
      expect(guide(slug).entityType, `${slug} is not modelled as a concept`).toBe('concept');
    }
    expect(
      INSTITUTION_TYPES.some((i) => /cassation|appellate|review/i.test(i.slug)),
      'an institution type was invented to carry a review taxonomy',
    ).toBe(false);
    expect(
      PROFESSIONS.some((p) => /appellate|cassation/i.test(p.slug)),
      'a profession was invented to carry a review taxonomy',
    ).toBe(false);
    expect(
      GLOSSARY.some((t) => /^(?:cassation|constitutional-review|remedy-type)$/.test(t.slug)),
      'a glossary term was invented to carry a review taxonomy',
    ).toBe(false);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 10: markers resolve, corpus-wide                                 */
/* -------------------------------------------------------------------------- */

/**
 * Content carries no HTML: `[text](/route)` and `**strong**` / `*em*` are markers the renderer
 * resolves. A marker the renderer does not resolve reaches the reader as punctuation.
 *
 * That is not hypothetical. This wave found 93 emphasis pairs across the corpus, none of which
 * parseInline knew about, all of them printing literal asterisks on live pages. The renderer was
 * fixed; this is the check that stops it silently regressing, and it is deliberately corpus-wide
 * rather than Wave 19 only — the defect was never confined to one wave.
 *
 * Misconception text renders RAW: no link parsing and no emphasis parsing. So the rule there is
 * stricter — no marker of either kind may appear at all.
 */
function everyBlockText(): { where: string; text: string }[] {
  const out: { where: string; text: string }[] = [];
  const isBlockArray = (v: unknown): v is Block[] =>
    Array.isArray(v) &&
    v.length > 0 &&
    typeof v[0] === 'object' &&
    v[0] !== null &&
    'kind' in v[0];
  const push = (where: string, list: Block[]) => {
    for (const b of list) {
      if (b.kind === 'paragraph') out.push({ where, text: b.text });
      else if (b.kind === 'callout')
        out.push({ where, text: b.title }, { where, text: b.text });
      else if (b.kind === 'list') for (const i of b.items) out.push({ where, text: i });
      else for (const i of b.items) out.push({ where, text: `${i.term} ${i.description}` });
    }
  };
  const walk = (label: string, records: readonly Record<string, unknown>[]) => {
    for (const record of records) {
      const id = (record.slug ?? record.countryCode ?? '?') as string;
      for (const [key, value] of Object.entries(record)) {
        if (isBlockArray(value)) push(`${label}:${id}:${key}`, value);
      }
    }
  };
  walk('guide', ALL_GUIDES as unknown as Record<string, unknown>[]);
  walk('history', HISTORY_ENTRIES as unknown as Record<string, unknown>[]);
  walk('institution', INSTITUTION_TYPES as unknown as Record<string, unknown>[]);
  walk('profession', PROFESSIONS as unknown as Record<string, unknown>[]);
  walk('glossary', GLOSSARY as unknown as Record<string, unknown>[]);
  walk('dossier', COUNTRY_DOSSIERS as unknown as Record<string, unknown>[]);
  return out;
}

const BLOCK_TEXTS = everyBlockText();

describe('every marker written in content is resolved by the renderer', () => {
  it('is not vacuous — the corpus is scanned and it does use emphasis', () => {
    expect(BLOCK_TEXTS.length).toBeGreaterThan(2500);
    expect(BLOCK_TEXTS.filter((t) => t.text.includes('*')).length).toBeGreaterThan(50);
  });

  it('leaves no asterisk unresolved in any block of the corpus', () => {
    const residual = BLOCK_TEXTS.filter((t) =>
      parseInline(t.text).some((segment) => segment.text.includes('*')),
    ).map((t) => `${t.where}: ${t.text.slice(0, 90)}`);
    expect(residual, 'an asterisk would reach the reader as punctuation').toEqual([]);
  });

  it('leaves no unresolved link marker in any block of the corpus', () => {
    const residual = BLOCK_TEXTS.filter((t) =>
      parseInline(t.text).some((segment) => !segment.href && /\]\(/.test(segment.text)),
    ).map((t) => `${t.where}: ${t.text.slice(0, 90)}`);
    expect(residual, 'a link marker would reach the reader as punctuation').toEqual([]);
  });

  it('catches an unresolved marker when planted', () => {
    expect(parseInline('a stray * asterisk').some((s) => s.text.includes('*'))).toBe(true);
    expect(
      parseInline('a [broken](relative/path) link').some((s) => !s.href && /\]\(/.test(s.text)),
    ).toBe(true);
  });

  it('carries no marker at all in misconception text, which renders raw', () => {
    const offenders: string[] = [];
    const scan = (
      label: string,
      items: readonly { claim: string; reality: string; note?: string }[],
    ) => {
      for (const m of items ?? []) {
        for (const [key, value] of Object.entries({
          claim: m.claim,
          reality: m.reality,
          note: m.note,
        })) {
          if (typeof value !== 'string') continue;
          if (/\*/.test(value) || /\]\(/.test(value))
            offenders.push(`${label}.${key}: ${value.slice(0, 80)}`);
        }
      }
    };
    for (const g of ALL_GUIDES) scan(`guide:${g.slug}`, g.misconceptions);
    for (const h of HISTORY_ENTRIES) scan(`history:${h.slug}`, h.misconceptions);
    expect(offenders, 'markdown in text that is rendered raw').toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 11: the pages are reachable and say what they do not cover       */
/* -------------------------------------------------------------------------- */

describe('the wave is linked into the corpus and states its own limits', () => {
  it.each(WAVE_19)('%s links to at least two related pages that exist', (slug) => {
    const g = guide(slug);
    expect(g.related.length).toBeGreaterThanOrEqual(2);
    for (const target of g.related) {
      expect(getGuide(target), `${slug} relates to missing guide ${target}`).toBeDefined();
    }
  });

  it.each(WAVE_19)('%s states what it did not research', (slug) => {
    const g = guide(slug);
    expect(g.uncertainty?.length ?? 0, `${slug} states no uncertainty`).toBeGreaterThanOrEqual(
      1,
    );
  });

  it.each(WAVE_19)('%s is reachable from somewhere other than itself', (slug) => {
    const inbound = ALL_GUIDES.filter(
      (g) => g.status === 'published' && g.slug !== slug && g.related.includes(slug),
    );
    expect(
      inbound.length,
      `/${guide(slug).section}/${slug} has no inbound related link`,
    ).toBeGreaterThanOrEqual(1);
  });

  it('uses NOT ESTABLISHED reasoning rather than converting an unknown into a no', () => {
    // The matrix rule, carried into prose: where a position was not researched, the page must say
    // so rather than report an absence of any rule.
    const text = prose(guide('what-happens-to-unlawfully-obtained-evidence'));
    expect(text).toMatch(/not established|was not established|not researched/i);
    expect(text, 'an unresearched position is reported as an absence').toMatch(
      /is not evidence that|gap in this platform/i,
    );
  });
});
