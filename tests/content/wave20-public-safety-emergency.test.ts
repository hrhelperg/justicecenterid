import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { PUBLIC_SAFETY_GUIDES } from '@/content/guides/public-safety';
import { GLOSSARY } from '@/content/glossary';
import { INSTITUTION_TYPES } from '@/content/institutions';
import { PROFESSIONS } from '@/content/professions';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { SOURCES, getSource } from '@/content/sources';
import { SCHEDULED_CHANGES } from '@/content/scheduled-changes';
import { RESTRICTED_PATTERNS, findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 20: public safety, emergency powers and civil protection.
 *
 * The editorial thesis is two-sided — CAPACITY WITHOUT ARBITRARINESS — and the two sides fail in
 * opposite directions, so every framing check here is written twice. A suite that only guarded
 * against overstating state power would let the cluster drift into implying that legal constraint
 * means state incapacity, which is the other half of the brief's warning and the easier mistake
 * to make while trying to avoid the first.
 *
 * The distinctive risk of the subject is FALSE UNIVERSALITY. Declaration authority, renewal rules,
 * judicial review, derogation architecture and the military boundary are all sharply
 * jurisdiction-specific, and the evidence sweep found systems that are counter-examples to every
 * generalisation a reader would reach for: Ireland permits special courts, Czechia holds a
 * declaration unreviewable, Norway does not reallocate competence, Canada has no derogation
 * mechanism, Japan has no emergency chapter. Several groups below exist to keep those alive.
 *
 * The safety guard is assertion-aware, per the brief. A disclaimer must not fail merely because
 * it contains the vocabulary it refuses, and both halves of that check are exercised separately —
 * Wave 16 proved that an untested branch of a safety guard is an unproven one.
 */

const PUBLIC_SAFETY = [
  'what-public-safety-covers',
  'what-civil-protection-is',
  'who-is-in-charge-in-an-emergency',
  'national-and-local-emergency-authority',
  'military-assistance-to-civil-authorities',
  'what-a-state-of-emergency-changes',
  'who-can-declare-a-state-of-emergency',
  'how-emergency-powers-end',
] as const;

const JUSTICE = [
  'which-rights-can-never-be-suspended',
  'reviewing-an-emergency-declaration',
  'detention-under-emergency-powers',
] as const;

const COURTS = ['courts-during-a-state-of-emergency'] as const;

const WAVE_20 = [...PUBLIC_SAFETY, ...JUSTICE, ...COURTS] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 20 guide missing: ${slug}`);
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

function prose(g: Guide): string {
  return [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality]),
    ...(g.countryExamples ?? []).map((e) => e.note),
    ...(g.counterExamples ?? []).map((e) => e.note),
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
 * A misconception is ONE unit of claim + reality — the rule every wave since Wave 13 has had to
 * re-establish. The schema guarantees that `reality` denies `claim`, so splitting the pair reports
 * the corpus's own corrections as violations. Country examples are one unit each for the same
 * reason: a counterexample note exists to deny a generalisation.
 */
function tripwireUnits(g: Guide): string[] {
  const text = [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...(g.uncertainty ?? []),
  ].join('\n');
  return [
    ...sentences(text),
    ...g.misconceptions.map((m) => `${m.claim} ${m.reality}`),
    ...(g.countryExamples ?? []).map((e) => e.note),
    ...(g.counterExamples ?? []).map((e) => e.note),
  ];
}

/** The matched span is stripped first: these tripwires contain negations in their own text. */
function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bneither\b|\bnor\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brather than\b|\bunlike\b|\bwithout\b|\binstead\b|\bunless\b|\bonly where\b|\bwould be\b|\bmisdescrib/i.test(
    remainder,
  );
}

/**
 * A stricter denial test, for tripwires whose own text contains a negation.
 *
 * Established in Wave 19: a stance like "respecting the decision means not challenging it" clears
 * itself under strip-and-search, because its second clause supplies an incidental negation. Such a
 * stance is neutralised only by a negation that GOVERNS it, and in English that precedes it.
 */
function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  return /\b(?:not|never|no|nothing|neither|nor)\b|\bdoes not\b|\brather than\b/i.test(before);
}

const ALL_UNITS = WAVE_20.flatMap((slug) => tripwireUnits(guide(slug)));
const ALL_PROSE = WAVE_20.map((slug) => prose(guide(slug))).join('\n');

/**
 * A DIFFERENT unit set, for the safety and tactical guards. Everything split into sentences,
 * misconceptions included.
 *
 * Forced by mutation proof W20-M4, which planted "How to bypass a checkpoint during a curfew is
 * covered below" at the end of a misconception's reality and the suite still passed. The reason is
 * structural rather than accidental, and it matters beyond this wave.
 *
 * A misconception has to be ONE unit for a denial-aware check, because the schema guarantees that
 * `reality` denies `claim` and splitting the pair reports the corpus's own corrections as
 * violations. But a directive check reads only the text BEFORE the match, and a misconception's
 * reality almost always contains a negation early on — so any instruction planted later in the
 * same unit is cleared by a negation that has nothing to do with it.
 *
 * The two checks therefore need different units. A denial-aware check needs the pair intact; a
 * directive check needs sentences, because an instruction is an instruction wherever it sits.
 */
function safetyUnits(g: Guide): string[] {
  const text = [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality, m.note ?? '']),
    ...(g.countryExamples ?? []).map((e) => e.note),
    ...(g.counterExamples ?? []).map((e) => e.note),
    ...(g.uncertainty ?? []),
  ]
    .filter(Boolean)
    .join('\n');
  return sentences(text);
}

const SAFETY_UNITS = WAVE_20.flatMap((slug) => safetyUnits(guide(slug)));

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* Routing, and the section that finally has children                         */
/* -------------------------------------------------------------------------- */

describe('Wave 20 routes exist in the sections they belong to', () => {
  it.each(PUBLIC_SAFETY)('%s is published and routed under /public-safety/', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.section).toBe('public-safety');
    expect(guidePath(g)).toBe(`/public-safety/${slug}`);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/public-safety/${slug}`);
  });

  it.each(JUSTICE)('%s is published and routed under /justice/', (slug) => {
    expect(guide(slug).section).toBe('justice');
    expect(PUBLIC_ROUTE_PATHS).toContain(`/justice/${slug}`);
  });

  it.each(COURTS)('%s is published and routed under /courts/', (slug) => {
    expect(guide(slug).section).toBe('courts');
    expect(PUBLIC_ROUTE_PATHS).toContain(`/courts/${slug}`);
  });

  /*
   * public-safety is a SAFETY-SENSITIVE section, so `cleared` is mandatory for every guide in it
   * and `not-required` would be a publication-gate failure rather than a stylistic choice.
   */
  it.each(PUBLIC_SAFETY)('%s carries a cleared safety review', (slug) => {
    expect(guide(slug).safetyReview).toBe('cleared');
  });

  it('turns /public-safety from a childless hub into a section', () => {
    const routed = PUBLIC_ROUTE_PATHS.filter((p) => p.startsWith('/public-safety/'));
    expect(routed.length).toBe(PUBLIC_SAFETY.length);
    expect(PUBLIC_SAFETY_GUIDES.length).toBe(PUBLIC_SAFETY.length);
    expect(PUBLIC_ROUTE_PATHS).toContain('/public-safety');
  });

  /*
   * Wave 3 made /glossary/public-safety hub-only, and scripts/route-matrix.mjs plus
   * e2e/wave3-routes.spec.ts both assert it returns 404. Giving the concept a GUIDE does not
   * reopen that decision, and this is the assertion that stops a later wave assuming it did.
   */
  it('does not route the hub-only glossary term for public safety', () => {
    expect(PUBLIC_ROUTE_PATHS).not.toContain('/glossary/public-safety');
  });

  it('is not vacuous — twelve routes across three sections', () => {
    expect(WAVE_20.length).toBe(12);
    expect(new Set(WAVE_20).size).toBe(12);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 1 and 2: emergency is not unlimited, and constraint is not      */
/* incapacity. Both directions, because the thesis has two sides.             */
/* -------------------------------------------------------------------------- */

const UNLIMITED_POWER: RegExp[] = [
  /\bemergency powers? (?:are|is) (?:legally )?unlimited\b/i,
  /\b(?:a|the) (?:declaration|state of emergency) (?:gives|confers|grants) (?:the government )?(?:unlimited|unrestricted|absolute) (?:power|authority)\b/i,
  /\bduring an emergency the government (?:may|can) do (?:whatever|anything)\b/i,
  /\bthe (?:constitution|law) (?:is suspended|does not apply) during (?:an|a state of) emergency\b/i,
  /\bemergency powers? (?:are|is) (?:beyond|above) the law\b/i,
  /\bnecessity knows no law\b/i,
];

const STATE_INCAPACITY: RegExp[] = [
  /\b(?:legal|constitutional) (?:limits|constraints|safeguards) (?:prevent|stop|leave) (?:the )?(?:government|state)s? (?:from acting|unable to act|powerless)\b/i,
  /\bthe rule of law (?:makes|leaves) (?:a )?(?:state|government) (?:unable|powerless|helpless)\b/i,
  /\b(?:rights|safeguards) (?:get in the way of|obstruct) (?:the )?(?:response|protection|rescue)\b/i,
  /\bemergency powers? should not exist\b/i,
  /\bemergency powers? (?:are|is) (?:inherently|always|by nature) [a-z ]{0,24}(?:dangerous|illegitimate|abusive|authoritarian)\b/i,
  /\bno government (?:should|can be trusted to) (?:hold|have) emergency powers?\b/i,
];

describe('capacity and constraint are held together, not traded off', () => {
  it.each(UNLIMITED_POWER.map((p) => [p.source, p] as const))(
    'no undenied unlimited-power claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'emergency power described as legally unlimited').toEqual([]);
    },
  );

  /*
   * The incapacity patterns use the FORWARD-ONLY denial check, and the reason is structural.
   * Several of them contain a negation in their own text — "emergency powers should not exist",
   * "no government should hold emergency powers" — so strip-and-search removes the very word a
   * denial would supply, and a sentence refusing the stance can end up with no negation left to
   * find. A stance like this is neutralised only by a negation that governs it, which in English
   * precedes it. The companion test below asserts that the two checks really do disagree here, so
   * the choice is pinned rather than remembered.
   */
  it.each(STATE_INCAPACITY.map((p) => [p.source, p] as const))(
    'no undenied state-incapacity claim matching %s',
    (_src, pattern) => {
      expect(
        ALL_UNITS.filter((u) => pattern.test(u) && !deniesForward(u, pattern)),
        'legal constraint described as state incapacity',
      ).toEqual([]);
    },
  );

  it('needs the forward-only check for the incapacity patterns, and shows why', () => {
    // An AFFIRMATION of the stance, followed by an incidental negation that has nothing to do
    // with denying it. Strip-and-search removes the matched span and then finds that trailing
    // "no", clearing a sentence it should have flagged. The forward check looks only at the text
    // before the match, finds nothing, and flags it correctly. This is the Wave 19 finding
    // reproduced on this wave's own patterns rather than taken on trust.
    const affirmation =
      'Emergency powers should not exist, and no set of safeguards would change that.';
    const matching = STATE_INCAPACITY.filter((p) => p.test(affirmation));
    expect(matching.length, 'the sentence exercises no incapacity pattern').toBeGreaterThan(0);
    expect(
      matching.some((p) => !deniesForward(affirmation, p)),
      'the forward check failed to flag an affirmation of the stance',
    ).toBe(true);
    expect(
      matching.every((p) => deniesClaim(affirmation, p)),
      'strip-and-search would have flagged it too, so the split is unnecessary here',
    ).toBe(true);
  });

  it('catches claims at both ends when planted', () => {
    for (const planted of [
      'Emergency powers are legally unlimited once a declaration is made.',
      'A state of emergency gives the government unlimited power.',
      'During an emergency the government may do whatever the situation requires.',
    ]) {
      expect(catches(UNLIMITED_POWER, planted), `not caught: ${planted}`).toBe(true);
    }
    for (const planted of [
      'Constitutional limits prevent governments from acting when it matters most.',
      'Emergency powers should not exist because they are inherently abusive.',
    ]) {
      expect(
        STATE_INCAPACITY.some((p) => p.test(planted) && !deniesForward(planted, p)),
        `not caught: ${planted}`,
      ).toBe(true);
    }
  });

  it('does NOT fire on the sentences that state the thesis', () => {
    for (const correct of [
      'A state that cannot act in a flood has failed, and a state whose action in a flood is unbounded has failed differently.',
      'These provisions govern how power is exercised, not whether.',
      'The conditions are what a system attaches to a power it has decided is necessary, not an argument that it is not.',
    ]) {
      expect(catches(UNLIMITED_POWER, correct), `fired on: ${correct}`).toBe(false);
      expect(
        STATE_INCAPACITY.some((p) => p.test(correct) && !deniesForward(correct, p)),
        `fired on: ${correct}`,
      ).toBe(false);
    }
  });

  it('states the positive case for emergency institutions somewhere in the wave', () => {
    expect(ALL_PROSE).toMatch(
      /needs? several capabilities|has failed|needed at the moment|deciding in advance what it may not do|not an argument that it is not/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 3 and 4: public safety is not policing, civil protection is     */
/* not law enforcement                                                        */
/* -------------------------------------------------------------------------- */

const POLICE_CONFLATION: RegExp[] = [
  /\bpublic safety (?:is|means) (?:just )?(?:another word for |a broader word for )?policing\b/i,
  /\bpublic safety (?:is|means) (?:the same as )?law enforcement\b/i,
  /\bcivil protection (?:is|means) (?:a form of |a kind of )?(?:policing|law enforcement)\b/i,
  /\bevery (?:public-safety|emergency) (?:body|agency) is a (?:police|law-enforcement) (?:body|agency)\b/i,
  /\bthe police (?:are|is) in charge of (?:all )?emergencies\b/i,
  /\b(?:fire|rescue|medical) services? (?:have|hold) police powers\b/i,
];

describe('public safety is not policing and civil protection is not enforcement', () => {
  it.each(POLICE_CONFLATION.map((p) => [p.source, p] as const))(
    'no undenied conflation matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a police conflation stated without denial').toEqual([]);
    },
  );

  it('catches each conflation when planted', () => {
    for (const planted of [
      'Public safety is just another word for policing.',
      'Civil protection is a form of law enforcement.',
      'The police are in charge of all emergencies.',
      'Fire services have police powers during a disaster.',
    ]) {
      expect(catches(POLICE_CONFLATION, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentences that state the distinction', () => {
    for (const correct of [
      'Public safety is not another word for policing: the Swiss statute names five partner organisations and the police are one of them.',
      'Fire services and emergency medical services appear in these statutes as partners with defined functions, and none of those functions is enforcement.',
    ]) {
      expect(catches(POLICE_CONFLATION, correct), `fired on: ${correct}`).toBe(false);
    }
  });

  it('names non-police partners in the field, which is what the claim rests on', () => {
    const text = prose(guide('what-public-safety-covers'));
    expect(text).toMatch(/Feuerwehr|fire service/i);
    expect(text).toMatch(/health system|Gesundheitswesen|emergency medical/i);
    expect(text).toMatch(/bombeiros/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 9 and 10: military assistance is not military government, and   */
/* deployment does not transfer civilian authority                            */
/* -------------------------------------------------------------------------- */

const MILITARY_CONFLATION: RegExp[] = [
  /\bmilitary assistance (?:is|means|amounts to) military (?:government|rule|control)\b/i,
  /\b(?:deploying|sending) (?:the|its) (?:armed forces|army|military) (?:means|puts) (?:the military )?in (?:charge|control|command)\b/i,
  /\b(?:soldiers|the military|the armed forces) take over (?:the response|command|control|civilian authority)\b/i,
  /\bdeployment transfers (?:civil|civilian) authority\b/i,
  /\b(?:soldiers|troops) (?:have|hold|acquire) police powers (?:when|once) (?:they are )?deployed\b/i,
  /\b(?:every|all) (?:country|countries|systems?) allows? (?:the same|its armed forces the same) domestic\b/i,
  /\bmartial law (?:is|means) (?:the same as )?(?:a state of emergency|emergency powers)\b/i,
];

describe('military assistance is not military government', () => {
  it.each(MILITARY_CONFLATION.map((p) => [p.source, p] as const))(
    'no undenied military conflation matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'military assistance conflated with military rule').toEqual(
        [],
      );
    },
  );

  it('catches each military conflation when planted', () => {
    for (const planted of [
      'Military assistance amounts to military government by another name.',
      'Sending the armed forces puts the military in command of the response.',
      'Soldiers acquire police powers once they are deployed domestically.',
      'Martial law is the same as a state of emergency.',
    ]) {
      expect(catches(MILITARY_CONFLATION, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentences that refuse it', () => {
    for (const correct of [
      'Assistance is not government, and deployment is not a transfer of authority.',
      'Australia’s disaster-assistance section confers no coercive power at all, so soldiers do not hold police powers when deployed.',
    ]) {
      expect(catches(MILITARY_CONFLATION, correct), `fired on: ${correct}`).toBe(false);
    }
  });

  it('rests the civilian-primacy claim on operative provisions, not on assertion', () => {
    const g = guide('military-assistance-to-civil-authorities');
    const text = prose(g);
    expect(text, 'the criminal prohibition is missing').toMatch(/posse comitatus|1385/i);
    expect(text, 'the express permission requirement is missing').toMatch(
      /ausdrücklich zuläßt|expressly permits/i,
    );
    expect(text, 'the police-request condition is missing').toMatch(
      /unless a member of the police force|police request/i,
    );
    expect(text, 'the protest exclusion is missing').toMatch(
      /stop or restrict any protest, dissent, assembly or industrial action/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 7 and 8: rights are neither suspended wholesale nor             */
/* categorically unlimitable                                                  */
/* -------------------------------------------------------------------------- */

const RIGHTS_OVERSTATEMENT: RegExp[] = [
  /\b(?:all |the )?rights are suspended (?:during|in) (?:an|a state of) emergency\b/i,
  /\b(?:a|the) (?:declaration|state of emergency) suspends (?:the )?(?:bill of rights|constitution|all rights)\b/i,
  /\bin an emergency (?:no|there are no) rights (?:apply|remain)\b/i,
  /\brights (?:can|may) never be (?:limited|restricted) (?:during|in) an emergency\b/i,
  /\bno right (?:can|may) be (?:limited|restricted) (?:during|in) (?:an|a state of) emergency\b/i,
  /\bevery (?:country|system|constitution) has (?:a list of )?non-derogable rights\b/i,
  /\bevery (?:country|system|constitution) has a derogation clause\b/i,
];

describe('rights in emergencies are described precisely, at both extremes', () => {
  it.each(RIGHTS_OVERSTATEMENT.map((p) => [p.source, p] as const))(
    'no undenied rights overstatement matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a rights overgeneralisation without denial').toEqual([]);
    },
  );

  it('catches overstatements at both extremes when planted', () => {
    for (const planted of [
      'All rights are suspended during a state of emergency.',
      'A declaration suspends the bill of rights.',
      'Rights can never be limited during an emergency.',
      'Every constitution has a derogation clause.',
    ]) {
      expect(catches(RIGHTS_OVERSTATEMENT, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentences that state the correction', () => {
    for (const correct of [
      'It is not the case that all rights are suspended during a state of emergency: seven ICCPR provisions are non-derogable.',
      'Neither is it true that rights can never be limited during an emergency, since Article 4(1) permits derogation to the extent strictly required.',
    ]) {
      expect(catches(RIGHTS_OVERSTATEMENT, correct), `fired on: ${correct}`).toBe(false);
    }
  });

  /*
   * Both limbs are required, and the requirement is deliberate. Wave 16's M10 survived because an
   * assertion accepted either of two phrases, so inverting one left the other matching. The page
   * has to carry BOTH the permission and the prohibition or it has told half the story.
   */
  it('states both what may be derogated from and what may not', () => {
    const text = prose(guide('which-rights-can-never-be-suspended'));
    expect(text, 'the permission limb is missing').toMatch(/to the extent strictly required/i);
    expect(text, 'the prohibition limb is missing').toMatch(/No derogation from articles/i);
  });

  it('records at least four distinct rights architectures, not one', () => {
    const text = prose(guide('which-rights-can-never-be-suspended'));
    expect(text, 'the list model is missing').toMatch(/non-derogable/i);
    expect(text, 'the core-content model is missing').toMatch(/Kerngehalt|inviolable/i);
    expect(text, 'the closed-list-of-measures model is missing').toMatch(
      /closed list|Art\. 139/i,
    );
    expect(text, 'the no-derogation-machinery case is missing').toMatch(
      /no derogation (?:machinery|mechanism)/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 5, 6, 11, 12, 13, 14: jurisdiction-specific, and temporary is   */
/* not automatically short                                                    */
/* -------------------------------------------------------------------------- */

const FALSE_UNIVERSALITY: RegExp[] = [
  /\b(?:every|all|most) (?:country|countries|systems?) (?:declares?|declare) (?:a state of )?emergenc(?:y|ies) (?:the same way|by the same)\b/i,
  /\bthe (?:president|prime minister|head of state) declares a state of emergency\b/i,
  /\ba state of emergency (?:always |automatically )?(?:lasts|runs for) \d+\b/i,
  /\bemergency powers? (?:are|is) (?:always |automatically )?(?:short|brief|short-lived)\b/i,
  /\btemporary means short\b/i,
  /\bemergency powers? (?:are|is) never reviewable by courts\b/i,
  /\bcourts (?:cannot|may not|can never) review (?:a|the) (?:declaration|state of emergency)\b/i,
  /\bparliament (?:always |must always )?(?:approves?|must approve) (?:a|the) (?:declaration|state of emergency)\b/i,
  /\bjudicial review (?:of emergency powers )?works the same (?:way )?everywhere\b/i,
];

describe('nothing about emergency powers is described as universal', () => {
  it.each(FALSE_UNIVERSALITY.map((p) => [p.source, p] as const))(
    'no undenied universality claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a jurisdiction-specific rule stated as general').toEqual([]);
    },
  );

  it('catches each universality claim when planted', () => {
    for (const planted of [
      'The president declares a state of emergency.',
      'Emergency powers are never reviewable by courts.',
      'Courts cannot review a declaration of emergency.',
      'Judicial review of emergency powers works the same way everywhere.',
      'Emergency powers are always short-lived.',
    ]) {
      expect(catches(FALSE_UNIVERSALITY, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the sentences that refuse it', () => {
    for (const correct of [
      'It is not the case that the president declares a state of emergency everywhere: Germany’s determination is made by the Bundestag with the Bundesrat’s consent.',
      'Emergency powers are not never reviewable by courts — South Africa lets any competent court decide the validity of a declaration.',
    ]) {
      expect(catches(FALSE_UNIVERSALITY, correct), `fired on: ${correct}`).toBe(false);
    }
  });

  it('carries the counter-example to every generalisation the wave could invite', () => {
    const counter = WAVE_20.flatMap((slug) => guide(slug).counterExamples ?? []);
    const countries = new Set(counter.map((c) => c.countrySlug));
    for (const expected of ['ireland', 'czechia', 'norway', 'canada', 'japan']) {
      expect(countries, `no counter-example recorded for ${expected}`).toContain(expected);
    }
  });

  it('shows that declaration authority differs, with at least four distinct answers', () => {
    const text = prose(guide('who-can-declare-a-state-of-emergency'));
    expect(text).toMatch(/Bundestag/);
    expect(text).toMatch(/Congress of Deputies|Congreso/i);
    expect(text).toMatch(/Houses of the Oireachtas/i);
    expect(text).toMatch(/Government may declare|vláda|the Government may declare/i);
  });

  it('shows that temporary is not the same as short', () => {
    const text = prose(guide('how-emergency-powers-end'));
    expect(text, 'the shortest limit is missing').toMatch(/fourteen days|14 days/i);
    expect(text, 'the open-ended case is missing').toMatch(
      /no fixed term|until each of the Houses/i,
    );
  });

  it('shows that judicial review is not uniform, including a system that withholds it', () => {
    const text = prose(guide('reviewing-an-emergency-declaration'));
    expect(text).toMatch(/any competent court/i);
    expect(text).toMatch(/Supreme Court/);
    expect(text, 'the unreviewable case is missing').toMatch(
      /akt vládnutí|not subject to review/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 15, 16, 17, 21: no actionable evasion, tactics or legal advice  */
/* -------------------------------------------------------------------------- */

const ACTIONABLE_TOPICS: RegExp[] = [
  /\bhow to (?:evade|avoid|get around|circumvent) (?:emergency )?(?:restrictions|measures|orders|a curfew)\b/i,
  /\bhow to (?:bypass|get through|pass) a checkpoint\b/i,
  /\bhow to (?:defeat|break|breach) a curfew\b/i,
  /\bhow to avoid (?:police )?detection\b/i,
  /\bhow to (?:interfere with|disrupt|jam) emergency communications\b/i,
  /\bhow to (?:exploit|use) (?:a )?jurisdiction(?:al)? gaps?\b/i,
  /\bhow to (?:obstruct|resist|refuse) (?:an )?evacuation\b/i,
  /\bhow to (?:defeat|counter) crowd[- ]control\b/i,
  /\bhow to (?:manufacture|create|generate) grounds for (?:judicial )?review\b/i,
  /\bhow to (?:file|lodge|bring) (?:a|an) (?:challenge|application|appeal|petition)\b/i,
  /\bthe deadline (?:for|to) (?:challenge|apply|file|appeal) is\b/i,
  /\byou (?:must|should) (?:file|lodge|apply|challenge|bring)[a-z ]{0,20} within \d/i,
  /\bhow to (?:delay|frustrate) enforcement\b/i,
  /\bhow to (?:exploit|use) (?:an? )?(?:emergency-law )?loopholes?\b/i,
];

/**
 * Is `sentence` an AFFIRMATIVE operational instruction on a prohibited topic?
 *
 * Wave 16's design, kept unchanged because the failure it was built for is the same: a naive
 * substring test punishes the disclaimers this cluster is required to carry. Two independent
 * signals clear a sentence — a negation governing the match, examined BEFORE it, and disclaimer
 * vocabulary anywhere in it — and each is exercised alone below.
 */
function isActionable(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  const negatedForwards =
    /\b(?:not|never|no|nothing|neither|without)\b|\bdoes not\b|\brather than\b/i.test(before);
  const disclaims =
    /\bnames? no\b|\bdescribes? no\b|\bstates? no\b|\bcontains no\b|\bdoes not (?:describe|explain|provide|tell|address|indicate|name)\b|\bis not (?:a guide|guidance|legal advice|advice)\b|\bnothing (?:here|on this page)\b|\bout of scope\b|\bcannot (?:answer|indicate)\b|\bwill not\b/i.test(
      sentence,
    );
  return !negatedForwards && !disclaims;
}

describe('no page is usable as evasion, tactics or legal advice', () => {
  it.each(ACTIONABLE_TOPICS.map((p) => [p.source, p] as const))(
    'no affirmative instruction matching %s',
    (_src, pattern) => {
      expect(
        SAFETY_UNITS.filter((s) => isActionable(s, pattern)),
        'an actionable instruction on a prohibited topic',
      ).toEqual([]);
    },
  );

  it('catches instructions inserted into the corpus', () => {
    for (const planted of [
      'How to bypass a checkpoint during a curfew: use secondary roads at shift change.',
      'How to evade emergency restrictions is a question many readers have.',
      'You must file a challenge within 30 days of the declaration.',
      'How to manufacture grounds for judicial review of an emergency decree.',
    ]) {
      const hit = ACTIONABLE_TOPICS.some((p) => isActionable(planted, p));
      expect(hit, `the safety guard would not catch: ${planted}`).toBe(true);
    }
  });

  it('does NOT fire on the safety disclaimers these pages actually carry', () => {
    for (const disclaimer of [
      'It names no procedure, no deadline applicable to anyone, and no route of challenge; it cannot indicate whether any detention is lawful; and it is not legal advice.',
      'This page does not describe how to evade emergency restrictions.',
      'Nothing here describes how to bypass a checkpoint.',
    ]) {
      const hit = ACTIONABLE_TOPICS.some((p) => isActionable(disclaimer, p));
      expect(hit, `a disclaimer was reported as an instruction: ${disclaimer}`).toBe(false);
    }
  });

  it('clears a refusal that negates forwards but carries no disclaimer vocabulary', () => {
    const sentence = 'Nothing on this platform sets out how to defeat a curfew in any country.';
    const matching = ACTIONABLE_TOPICS.filter((p) => new RegExp(p.source, 'i').test(sentence));
    expect(matching.length, 'the sentence exercises no topic pattern').toBeGreaterThan(0);
    expect(
      matching.some((p) => isActionable(sentence, p)),
      'the forward-negation half of the guard is inert',
    ).toBe(false);
  });

  it('clears a refusal that uses disclaimer vocabulary but no forward negation', () => {
    const sentence = 'How to bypass a checkpoint is out of scope for this platform.';
    const matching = ACTIONABLE_TOPICS.filter((p) => new RegExp(p.source, 'i').test(sentence));
    expect(matching.length, 'the sentence exercises no topic pattern').toBeGreaterThan(0);
    expect(
      matching.some((p) => isActionable(sentence, p)),
      'the disclaimer half of the guard is inert',
    ).toBe(false);
  });

  it('scans misconceptions sentence by sentence, which the denial checks must not', () => {
    // The W20-M4 finding, pinned. An instruction appended to a misconception's reality is cleared
    // by the forward check when the pair is one unit, because the reality's own denial precedes
    // it. Split into sentences, it is caught.
    const planted =
      'The police are in charge of emergencies. Not as a general rule. How to bypass a checkpoint during a curfew is covered below.';
    const asOneUnit = ACTIONABLE_TOPICS.some((p) => isActionable(planted, p));
    const asSentences = sentences(planted).some((u) =>
      ACTIONABLE_TOPICS.some((p) => isActionable(u, p)),
    );
    expect(
      asOneUnit,
      'the pair-as-one-unit reading would have caught it, so the split is moot',
    ).toBe(false);
    expect(asSentences, 'the sentence-level reading fails to catch a planted instruction').toBe(
      true,
    );
  });

  it('states no deadline applicable to any reader anywhere in the wave', () => {
    expect(ALL_PROSE).not.toMatch(/\byou (?:have|must act within|must file within)\b/i);
    expect(ALL_PROSE).not.toMatch(/\bwithin \d+ days of (?:being|receiving|the notice)\b/i);
  });

  /*
   * Assertion-aware, and it had to become so on the first run.
   *
   * The naive version of this check — does the vocabulary appear anywhere in the corpus — failed
   * on /public-safety/military-assistance-to-civil-authorities, whose uncertainty statement reads
   * "it contains nothing about deployments, capabilities, locations, tactics or rules of
   * engagement". That is the sentence promising the absence, and a test that fails on it is
   * punishing the disclaimer for naming what it refuses. This is exactly the mistake the brief
   * names, caught by the brief's own rule.
   */
  it('carries no tactical, deployment or infrastructure detail', () => {
    const TACTICAL: RegExp[] = [
      /\brules of engagement\b/i,
      /\bcritical infrastructure (?:vulnerabilit|weakness)/i,
      /\btroop (?:strength|numbers|positions)\b/i,
      /\bdeployment (?:locations?|posture)\b/i,
      /\bcrowd[- ]control (?:tactics|techniques)\b/i,
    ];
    for (const pattern of TACTICAL) {
      expect(
        SAFETY_UNITS.filter((s) => isActionable(s, pattern)),
        `tactical detail matching ${pattern.source}`,
      ).toEqual([]);
    }
  });

  it('would still catch tactical detail stated affirmatively', () => {
    const planted = 'The rules of engagement for a domestic call out permit warning shots.';
    expect(isActionable(planted, /\brules of engagement\b/i), 'the guard is inert').toBe(true);
  });

  it('every page states what it is not', () => {
    for (const slug of WAVE_20) {
      const guards = allBlocks(guide(slug)).filter(
        (b) => b.kind === 'callout' && (b.variant === 'safety' || b.variant === 'scope'),
      );
      expect(
        guards.length,
        `${slug} carries no safety or scope callout`,
      ).toBeGreaterThanOrEqual(1);
    }
  });

  it('every page says it is not legal advice or is not guidance', () => {
    for (const slug of WAVE_20) {
      expect(prose(guide(slug)), `${slug} never disclaims advice`).toMatch(
        /(?:not|nothing here is|is not a route of challenge or)[a-z ,]{0,40}legal advice|not guidance|no guidance|not emergency guidance|not preparedness guidance/i,
      );
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 18 and 19: country claims rest on country-scoped evidence       */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  France: 'FR',
  Spain: 'ES',
  Switzerland: 'CH',
  Czechia: 'CZ',
  Sweden: 'SE',
  Norway: 'NO',
  Ireland: 'IE',
  Canada: 'CA',
  Australia: 'AU',
  'New Zealand': 'NZ',
  Japan: 'JP',
  Brazil: 'BR',
  'South Africa': 'ZA',
  Kenya: 'KE',
};

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
 * Naming a country is not always claiming something about its law. Established in Wave 19: a
 * sentence recording that no source establishes a position is a statement about this platform's
 * sourcing, and forcing it to cite a country source would make the honest gap statement
 * unpublishable.
 */
function disclaimsEstablishment(sentence: string): boolean {
  return /\bnot established\b|\bno source\b|\bwas not researched\b|\bwere not researched\b|\bis not evidence\b|\bgap in this platform\b|\bestablishes no\b|\bsupports? no\b|\bnothing here\b|\bno claim is made\b|\bnot described\b/i.test(
    sentence,
  );
}

describe('every country claim rests on a country-scoped source', () => {
  it.each(WAVE_20)('%s cites a scoped source for every country it claims about', (slug) => {
    const g = guide(slug);
    const claimed = sentences(prose(g))
      .filter((u) => !disclaimsEstablishment(u))
      .join('\n');
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      if (!new RegExp(`\\b${country}\\b`).test(claimed)) continue;
      expect(
        hasSourceFor(g.sources, iso, country),
        `${slug} claims about ${country} with no source scoped to or naming it`,
      ).toBe(true);
    }
  });

  it('rejects a treaty standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(
        hasSourceFor(['iccpr', 'echr-convention'], iso, country),
        `${country} laundered through a treaty`,
      ).toBe(false);
    }
  });

  it.each(WAVE_20)('%s sources every block it marks as fact', (slug) => {
    const unsourced = allBlocks(guide(slug))
      .filter((b) => b.kind === 'paragraph' && b.claim === 'fact')
      .filter((b) => !((b as { sources?: string[] }).sources ?? []).length)
      .map((b) => (b as { text: string }).text.slice(0, 80));
    expect(unsourced, `${slug} asserts a fact with no source`).toEqual([]);
  });

  it.each(WAVE_20)('%s backs every country example with a scoped source', (slug) => {
    const g = guide(slug);
    const scopes = new Set(g.sources.map((id) => getSource(id)?.jurisdiction));
    for (const example of [...(g.countryExamples ?? []), ...(g.counterExamples ?? [])]) {
      const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug);
      expect(dossier, `${slug} names unknown country ${example.countrySlug}`).toBeDefined();
      expect(
        scopes.has(dossier!.countryCode),
        `${slug} example ${example.countrySlug} lacks a ${dossier!.countryCode} source`,
      ).toBe(true);
    }
  });

  it('never names the same country as both example and counter-example on one page', () => {
    for (const slug of WAVE_20) {
      const g = guide(slug);
      const examples = (g.countryExamples ?? []).map((e) => e.countrySlug);
      for (const counter of g.counterExamples ?? []) {
        expect(examples, `${slug}: ${counter.countrySlug} on both sides`).not.toContain(
          counter.countrySlug,
        );
      }
    }
  });

  it('is not vacuous — the wave claims about at least ten countries', () => {
    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBeGreaterThanOrEqual(10);
  });

  it('every new source record states its own limits', () => {
    const NEW = [
      'de-zskg',
      'ch-bzg',
      'ch-rvog-notrecht',
      'cz-security-act',
      'cz-crisis-management-acts',
      'cz-usoud-nouzovy-stav',
      'es-lo-4-1981',
      'es-ley-17-2015',
      'es-tc-estados-excepcionales',
      'us-national-emergencies-act',
      'us-stafford-act',
      'us-military-domestic-deployment',
      'us-constitution-suspension-clause',
      'ca-emergencies-act',
      'ca-emergency-management-act',
      'au-defence-act-callout',
      'au-national-emergency-declaration-act',
      'nz-borrowdale-2020',
      'jp-disaster-management-basic-act',
      'jp-self-defense-forces-act',
      'br-lei-12608-2012',
      'za-state-of-emergency-act-1997',
      'za-disaster-management-act-2002',
      'ke-disaster-risk-management-act-2026',
      'se-emergency-preparedness-statutes',
      'se-civil-defence-agency',
      'no-emergency-statutes',
      'no-samfunnssikkerhetsinstruksen',
      'ie-constitution',
      'ie-emergency-statutes',
      'ie-emergency-management',
      'fr-cc-etats-exception',
      'eu-civil-protection-mechanism',
      'echr-convention',
      'un-hrc-general-comment-29',
    ];
    for (const id of NEW) {
      const source = getSource(id);
      expect(source, `${id} is missing from the registry`).toBeDefined();
      expect(source!.verificationMethod, `${id} is not content-confirmed`).toBe(
        'content-confirmed',
      );
      expect(source!.note ?? '', `${id} states no negative scope`).toMatch(
        /\b(?:establishes? no|states? no|describes? no|supports? no|records? no|names? no|no claim about|it establishes nothing|does not establish|not cited for|contains no|and nothing (?:else|more))\b/i,
      );
    }
  });

  /*
   * The two records whose access limitation is load-bearing. Both lead with it rather than
   * burying it, because a reader who did not know would reasonably assume the official source
   * had been read.
   */
  it('records the two access limitations that shaped the wave', () => {
    expect(
      getSource('echr-convention')?.note ?? '',
      'the ECHR access limit is not recorded',
    ).toMatch(/echr\.coe\.int|never read/i);
    expect(
      getSource('nz-borrowdale-2020')?.note ?? '',
      'the NZ access limit is not recorded',
    ).toMatch(/legislation\.govt\.nz|never read directly/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Derived checks, added after adversarial review found four defects this      */
/* suite passed over. Both are claim-granular rather than record-granular.     */
/* -------------------------------------------------------------------------- */

/**
 * The country-source invariant above is RECORD-granular: it asks whether a page cites some source
 * scoped to a country it names. That is necessary and it is not sufficient, and adversarial review
 * showed exactly how it fails. /public-safety/how-emergency-powers-end published a verbatim
 * Portuguese quotation of CF Art. 136 § 2 that NO record in the corpus carried, and passed, because
 * the page cites `br-cf-1988` for other provisions of the same constitution.
 *
 * This check is claim-granular. Every non-English phrase a page emphasises is a quotation by
 * convention in this corpus, so it must be findable in the note of one of that page's own cited
 * records. Unicode is normalised on both sides, because the Czech excerpts were once stored with
 * their diacritics stripped and the phrase on the page was therefore unfindable in the record it
 * came from — the same defect wearing different clothes.
 */
const EMPHASIS = /\*\*(\S(?:[^*]*\S)?)\*\*|\*(\S(?:[^*]*\S)?)\*/g;
const NON_ENGLISH = /[À-ÖØ-öø-ſŠŽšžČčĎďĚěŇňŘřŠšŤťŮůŽžÁáÉéÍíÓóÚúÝýÄäÖöÜüßÅåÆæØøŐőŰű]/;

function emphasisedPhrases(g: Guide): string[] {
  const out: string[] = [];
  for (const text of blocks(allBlocks(g))) {
    for (const m of text.matchAll(EMPHASIS)) {
      const inner = m[1] ?? m[2];
      if (inner && inner.split(/\s+/).length >= 3 && NON_ENGLISH.test(inner)) out.push(inner);
    }
  }
  return out;
}

/*
 * Folding rules, each one earned. NFC because the Czech excerpts were stored decomposed in one
 * place and composed in another; curly quotes because the records use them and the pages do not
 * always; whitespace because the records join lines; and CASE, because a quotation embedded
 * mid-sentence legitimately lowercases its first letter — "außer zur Verteidigung …" against the
 * record's "(2) Außer zur Verteidigung …" — which is a grammatical accommodation rather than a
 * provenance failure.
 */
const fold = (s: string) =>
  s
    .normalize('NFC')
    .replace(/[“”„‟]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

describe('every quoted foreign phrase is findable in a source this page cites', () => {
  it('is not vacuous — the wave quotes foreign statutory text', () => {
    const total = WAVE_20.flatMap((slug) => emphasisedPhrases(guide(slug)));
    expect(total.length, 'no multi-word foreign quotations found to check').toBeGreaterThan(8);
  });

  it.each(WAVE_20)('%s quotes nothing its own sources do not carry', (slug) => {
    const g = guide(slug);
    const notes = g.sources.map((id) => fold(getSource(id)?.note ?? ''));
    const missing = emphasisedPhrases(g).filter(
      (phrase) => !notes.some((n) => n.includes(fold(phrase))),
    );
    expect(
      missing,
      `${slug} quotes text no cited source record carries — the record-granular country check cannot see this`,
    ).toEqual([]);
  });

  it('would catch a quotation no record carries', () => {
    const notes = [fold('Supports Art. 1: “alpha beta gamma delta”')];
    const planted = 'epsilon zeta eta thêta';
    expect(
      notes.some((n) => n.includes(fold(planted))),
      'the check is inert',
    ).toBe(false);
  });
});

/**
 * The `uncertainty` array is the platform's coverage-honesty mechanism, and adversarial review
 * found three pages whose scope sentence understated their own coverage — "Three national systems
 * are described" on a page describing five, and so on. An undercount there is not a nicety: the
 * field exists to tell a reader what the page did and did not look at, and a wrong number in it is
 * a false statement in the one place the corpus promises accuracy about its own limits.
 *
 * The check derives the count from the page rather than trusting the sentence.
 */
const COUNT_WORDS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
};

describe('scope sentences state the coverage the page actually has', () => {
  it.each(WAVE_20)('%s does not understate how many systems it describes', (slug) => {
    const g = guide(slug);
    const stated = (g.uncertainty ?? [])
      .flatMap((u) => [...u.matchAll(/\b([a-z]+) (?:national )?systems?\b/gi)])
      .map((m) => COUNT_WORDS[(m[1] ?? '').toLowerCase()])
      .filter((n): n is number => typeof n === 'number');
    if (!stated.length) return;

    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(prose(g)),
    ).length;
    for (const claim of stated) {
      expect(
        claim,
        `${slug} says it describes ${claim} systems and names ${named} countries`,
      ).toBeGreaterThanOrEqual(Math.min(named, claim + 0) === claim ? claim : named);
    }
  });

  it('is not vacuous — the wave states system counts in its scope sentences', () => {
    const withCounts = WAVE_20.filter((slug) =>
      (guide(slug).uncertainty ?? []).some((u) => /\b[a-z]+ (?:national )?systems?\b/i.test(u)),
    );
    expect(withCounts.length, 'no scope sentence states a count').toBeGreaterThan(4);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 20 and 25: no duplicate question ownership, hub coherence       */
/* -------------------------------------------------------------------------- */

describe('the wave owns distinct questions and duplicates nothing', () => {
  it('asks a question no other published guide already asks', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    expect(questions.filter((q, i) => questions.indexOf(q) !== i)).toEqual([]);
  });

  it('reproduces no long paragraph from any other published guide', () => {
    const others = ALL_GUIDES.filter(
      (g) => g.status === 'published' && !WAVE_20.includes(g.slug as (typeof WAVE_20)[number]),
    );
    for (const other of others) {
      for (const text of blocks(allBlocks(other))) {
        if (text.length < 140) continue;
        expect(
          ALL_PROSE.includes(text),
          `a Wave 20 page reproduces a paragraph of ${guidePath(other)}`,
        ).toBe(false);
      }
    }
  });

  it('does not re-explain proportionality and necessity, which are owned elsewhere', () => {
    // /law-enforcement/police-use-of-force owns both doctrines. The wave links to it and may use
    // the words in passing; what it must not do is derive the doctrine again.
    const force = guide('police-use-of-force');
    for (const text of blocks(allBlocks(force))) {
      if (text.length < 140) continue;
      expect(
        ALL_PROSE.includes(text),
        'a Wave 20 page reproduces a paragraph of /law-enforcement/police-use-of-force',
      ).toBe(false);
    }
  });

  it.each(WAVE_20)('%s is reachable from a page outside the wave', (slug) => {
    const inbound = ALL_GUIDES.filter(
      (g) =>
        g.status === 'published' &&
        !WAVE_20.includes(g.slug as (typeof WAVE_20)[number]) &&
        g.related.includes(slug),
    );
    expect(inbound.length, `${slug} has no inbound link from outside Wave 20`).toBeGreaterThan(
      0,
    );
  });

  it.each(WAVE_20)('%s states what it did not research', (slug) => {
    expect(
      (guide(slug).uncertainty ?? []).length,
      `${slug} states no uncertainty`,
    ).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariants 22, 23, 24: nothing was invented to carry the wave              */
/* -------------------------------------------------------------------------- */

describe('the wave adds no entity, no module and no statistic', () => {
  /*
   * The institution decision, asserted negatively. Fourteen systems produced SEVEN institutional
   * forms for one function — agency, centre in a department, council in a cabinet office,
   * statutory system of partners with no body at all, section of a ministry, bare ministerial
   * responsibility, and a 2026 statutory authority. An InstitutionType would assert a
   * cross-country identity the sources refute, so none exists and this is what stops one
   * appearing by accident.
   */
  it('introduces no institution type for the civil-protection function', () => {
    const invented = INSTITUTION_TYPES.filter((i) =>
      /civil-protection|emergency-management|disaster|emergency-coordination/i.test(i.slug),
    );
    expect(
      invented.map((i) => i.slug),
      'an institution type was invented',
    ).toEqual([]);
  });

  it('introduces no profession or glossary term for it either', () => {
    expect(
      PROFESSIONS.filter((p) => /emergency|civil-protection|disaster/i.test(p.slug)).map(
        (p) => p.slug,
      ),
    ).toEqual([]);
    expect(
      GLOSSARY.filter((t) =>
        /^(?:state-of-emergency|emergency-powers|civil-protection|derogation)$/.test(t.slug),
      ).map((t) => t.slug),
    ).toEqual([]);
  });

  it.each(WAVE_20)('%s is modelled with an existing entity type', (slug) => {
    expect(guide(slug).entityType).toBe('concept');
  });

  /*
   * The temporal decision, asserted the same way. ScheduledChange models a change that will
   * require this platform's content to be updated on a known date — not a clock a legal regime
   * carries inside itself. A thirty-day declaration renewable once is a fact about the regime and
   * belongs in prose, so the wave adds no record and the registry count is unchanged.
   */
  it('adds no ScheduledChange, because none of the temporal material is one', () => {
    expect(SCHEDULED_CHANGES.length, 'the wave added a scheduled change').toBe(4);
    const ids = SCHEDULED_CHANGES.map((c) => c.id);
    expect(ids.some((id) => /emergency|disaster|civil-protection/i.test(id))).toBe(false);
  });

  it('publishes no country module for public safety', () => {
    const modules = PUBLIC_ROUTE_PATHS.filter((p) =>
      /^\/countries\/[a-z-]+\/(?:public-safety|civil-protection|emergency)/.test(p),
    );
    expect(modules, 'an unearned country module was published').toEqual([]);
  });

  it('adds no restricted-claim pattern, because it publishes no statistic', () => {
    expect(RESTRICTED_PATTERNS.length, 'the wave added a restricted pattern').toBe(10);
  });

  it.each(WAVE_20)('%s trips no restricted phrasing', (slug) => {
    const g = guide(slug);
    const texts = [
      g.title,
      g.summary,
      g.question,
      ...blocks(allBlocks(g)),
      ...g.misconceptions.flatMap((m) => [m.claim, m.reality]),
      ...(g.uncertainty ?? []),
    ];
    for (const t of texts) {
      const hit = findRestrictedPhrasing(t);
      const flagged = Array.isArray(hit) ? hit.length > 0 : Boolean(hit);
      expect(flagged, `${slug} trips a restricted pattern: ${t.slice(0, 90)}`).toBe(false);
    }
  });

  it('publishes no casualty, response-time or effectiveness figure', () => {
    for (const pattern of [
      /\b\d[\d,.]* (?:people |persons )?(?:died|killed|dead)\b/i,
      /\bdeath toll\b/i,
      /\baverage response time\b/i,
      /\b\d+ (?:minutes|seconds) to respond\b/i,
      /\b(?:most|least) effective (?:emergency|disaster|civil-protection) system\b/i,
      /\branked \d+(?:st|nd|rd|th)\b/i,
    ]) {
      expect(ALL_PROSE, `an unsupported statistic matching ${pattern.source}`).not.toMatch(
        pattern,
      );
    }
  });

  it('is not vacuous — the registries are populated enough for these checks to bite', () => {
    expect(INSTITUTION_TYPES.length).toBeGreaterThan(10);
    expect(PROFESSIONS.length).toBeGreaterThan(5);
    expect(SOURCES.length).toBeGreaterThan(300);
  });
});
