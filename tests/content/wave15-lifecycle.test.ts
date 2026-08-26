import { describe, expect, it } from 'vitest';
import {
  LIFECYCLE_EDGES,
  LIFECYCLE_ENTRY_POINTS,
  LIFECYCLE_LAYERS,
  LIFECYCLE_STAGES,
  getLifecycleStage,
  validateLifecycle,
} from '@/content/lifecycle';
import { ALL_GUIDES, getGuide } from '@/content/guides';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { LifecycleLayer, LifecycleStage, Block, Guide } from '@/content/types';

/**
 * Wave 15: the lifecycle model and the integrative pages.
 *
 * The brief names one error as the highest risk in this wave: producing "police → prosecutor →
 * jury → prison" as if it were the global justice system. Most of this suite exists to make that
 * failure loud rather than to check that the model is well formed.
 *
 * The neutrality tripwires here run in BOTH directions, which is the brief's requirement and
 * also the harder half. A site that only guarded against "police are always right" would drift
 * into the opposite framing without a single test firing. Both lists are sentence-level and
 * denial-aware for the reason Wave 12 established: a lexical blocklist would forbid the exact
 * sentences that state the correction.
 */

const WAVE_15_GUIDES = [
  'no-single-path-through-a-justice-system',
  'how-justice-institutions-work-together',
] as const;

const HUB = '/justice-system';

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 15 guide missing: ${slug}`);
  return found;
}

function blocks(list: Block[] | undefined): string[] {
  return (list ?? []).flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((i) => [i.term, i.description]);
  });
}

function prose(g: Guide): string {
  return [
    g.title,
    g.summary,
    ...blocks(g.definition),
    ...blocks(g.whyItExists),
    ...blocks(g.howItWorks),
    ...blocks(g.variation),
    ...blocks(g.rightsAndAccountability),
    ...blocks(g.furtherReading),
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

/** Wave 12's helper, unchanged. The matched span is stripped so the denial cannot be the claim. */
function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brarely\b|\bfew\b/i.test(
    remainder,
  );
}

/** Wave 13's rule: prose sentence by sentence, a misconception as one claim+reality unit. */
function tripwireUnits(g: Guide): string[] {
  const text = [
    g.title,
    g.summary,
    ...blocks(g.definition),
    ...blocks(g.whyItExists),
    ...blocks(g.howItWorks),
    ...blocks(g.variation),
    ...blocks(g.rightsAndAccountability),
    ...(g.uncertainty ?? []),
  ].join('\n');
  return [...sentences(text), ...g.misconceptions.map((m) => `${m.claim} ${m.reality}`)];
}

/** The lifecycle model's own prose counts: it is published text like any other. */
const LIFECYCLE_TEXT = [
  ...LIFECYCLE_STAGES.flatMap((s) => [s.title, s.question, s.summary, s.variation, ...s.exits]),
  ...LIFECYCLE_LAYERS.flatMap((l) => [l.title, l.summary]),
].join('\n');

const ALL_UNITS = [
  ...WAVE_15_GUIDES.flatMap((slug) => tripwireUnits(guide(slug))),
  ...sentences(LIFECYCLE_TEXT),
];

const ALL_PROSE = [...WAVE_15_GUIDES.map((slug) => prose(guide(slug))), LIFECYCLE_TEXT].join(
  '\n',
);

const JURY_QUALIFIES_EXPLICITLY =
  /do not exist|minority|not every|some systems|almost every part of it is wrong|unlike things|where they do/i;

const NON_JURY_MODES = [
  /professional judges?/i,
  /lay judges?/i,
  /mixed panels?/i,
  /magistrates?/i,
  /single judge/i,
];

/**
 * A jury mention is qualified either by saying so, or by naming the alternatives beside it.
 *
 * The second half is not a loophole. This guard exists to stop a jury being presented as THE
 * way adjudication happens, and a block that names professional judges, lay judges and mixed
 * panels in the same breath has already made that impossible. A claim that juries are
 * universal is caught by the universalising tripwires instead, which is where it belongs.
 */
function JURY_QUALIFIED_test(unit: string): boolean {
  if (JURY_QUALIFIES_EXPLICITLY.test(unit)) return true;
  return NON_JURY_MODES.filter((p) => p.test(unit)).length >= 2;
}

const JURY_QUALIFIED = { test: JURY_QUALIFIED_test };

function offending(pattern: RegExp): string[] {
  return ALL_UNITS.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* The model is well formed                                                   */
/* -------------------------------------------------------------------------- */

describe('the lifecycle model validates against the real route registry', () => {
  it('has no problems', () => {
    expect(validateLifecycle(LIFECYCLE_STAGES, LIFECYCLE_LAYERS, PUBLIC_ROUTE_PATHS)).toEqual(
      [],
    );
  });

  it('cites only published routes', () => {
    for (const stage of LIFECYCLE_STAGES) {
      for (const route of stage.explainedBy) {
        expect(PUBLIC_ROUTE_PATHS, `stage ${stage.id} cites unpublished ${route}`).toContain(
          route,
        );
      }
    }
    for (const layer of LIFECYCLE_LAYERS) {
      for (const route of layer.explainedBy) {
        expect(PUBLIC_ROUTE_PATHS, `layer ${layer.id} cites unpublished ${route}`).toContain(
          route,
        );
      }
    }
  });

  it('resolves every successor', () => {
    for (const { from, to } of LIFECYCLE_EDGES) {
      expect(getLifecycleStage(to), `${from} may precede unknown ${to}`).toBeDefined();
    }
  });

  it('has exactly one entry point', () => {
    expect(LIFECYCLE_ENTRY_POINTS).toEqual(['law']);
  });

  /* --- the rejection cases, exercised with synthetic stages --- */

  const stage = (over: Partial<LifecycleStage>): LifecycleStage => ({
    id: 'x',
    title: 'X',
    question: 'x?',
    summary: 'x',
    required: false,
    mayPrecede: [],
    exits: ['out'],
    variation: 'varies',
    explainedBy: ['/justice-system'],
    ...over,
  });

  it('rejects a stage that precedes itself', () => {
    const problems = validateLifecycle([stage({ mayPrecede: ['x'] })], [], ['/justice-system']);
    expect(problems.join(' ')).toMatch(/precedes itself/);
  });

  it('rejects a successor that does not exist', () => {
    const problems = validateLifecycle(
      [stage({ mayPrecede: ['nope'] })],
      [],
      ['/justice-system'],
    );
    expect(problems.join(' ')).toMatch(/may precede unknown stage/);
  });

  it('rejects a stage citing an unpublished route', () => {
    const problems = validateLifecycle([stage({ explainedBy: ['/nope'] })], [], []);
    expect(problems.join(' ')).toMatch(/which is not published/);
  });

  it('rejects a dead end', () => {
    const problems = validateLifecycle(
      [stage({ exits: [], mayPrecede: [] })],
      [],
      ['/justice-system'],
    );
    expect(problems.join(' ')).toMatch(/dead end/);
  });

  it('rejects a stage that states no variation', () => {
    const problems = validateLifecycle([stage({ variation: '   ' })], [], ['/justice-system']);
    expect(problems.join(' ')).toMatch(/states no variation/);
  });

  it('rejects a layer applying to a stage that does not exist', () => {
    const layer: LifecycleLayer = {
      id: 'l',
      title: 'L',
      summary: 's',
      appliesTo: ['ghost'],
      explainedBy: ['/justice-system'],
    };
    const problems = validateLifecycle([stage({})], [layer], ['/justice-system']);
    expect(problems.join(' ')).toMatch(/applies to unknown stage/);
  });

  it('rejects a model that has collapsed into a single path', () => {
    const chain: LifecycleStage[] = ['a', 'b', 'c', 'd'].map((id, i, all) =>
      stage({
        id,
        mayPrecede: i < all.length - 1 ? [all[i + 1]!] : [],
        exits: i < all.length - 1 ? [] : ['end'],
      }),
    );
    const problems = validateLifecycle(chain, [], ['/justice-system']);
    expect(problems.join(' ')).toMatch(/collapsed into a single path/);
  });

  it('permits the cycles the model genuinely contains', () => {
    const backEdges = LIFECYCLE_EDGES.filter(({ from, to }) => {
      const order = LIFECYCLE_STAGES.map((s) => s.id);
      return order.indexOf(to) < order.indexOf(from);
    });
    expect(backEdges.length, 'the model has no review loop at all').toBeGreaterThanOrEqual(2);
    expect(validateLifecycle(LIFECYCLE_STAGES, LIFECYCLE_LAYERS, PUBLIC_ROUTE_PATHS)).toEqual(
      [],
    );
  });
});

/* -------------------------------------------------------------------------- */
/* It is not a single universal path                                          */
/* -------------------------------------------------------------------------- */

describe('the model cannot be read as one universal procedure', () => {
  it('marks almost every stage as not always present', () => {
    const optional = LIFECYCLE_STAGES.filter((s) => !s.required);
    expect(optional.length).toBeGreaterThanOrEqual(LIFECYCLE_STAGES.length - 2);
  });

  it('gives every stage at least one way out', () => {
    for (const s of LIFECYCLE_STAGES) {
      expect(s.exits.length, `stage ${s.id} offers no exit`).toBeGreaterThanOrEqual(1);
    }
  });

  it('gives every stage a variation note', () => {
    for (const s of LIFECYCLE_STAGES) {
      expect(s.variation.length, `stage ${s.id} states no variation`).toBeGreaterThan(40);
    }
  });

  it('branches at more than half the stages', () => {
    const branching = LIFECYCLE_STAGES.filter((s) => s.mayPrecede.length + s.exits.length > 1);
    expect(branching.length).toBeGreaterThan(LIFECYCLE_STAGES.length / 2);
  });

  /**
   * Qualification is required in the BLOCK, not the sentence.
   *
   * The same conclusion Waves 13 and 14 reached, arriving here from a third direction. The
   * no-single-path page states the false picture — "police investigate, a prosecutor charges, a
   * jury decides" — in order to demolish it in the next sentence. A same-sentence rule flagged
   * the set-up as an unqualified claim. A paragraph is what a reader consumes, so a jury mention
   * is unqualified only if nothing in its own block qualifies it; a jury asserted in a paragraph
   * of its own still fires, and the test below plants one.
   */
  it('never presents a jury as a universal element of adjudication', () => {
    expect(LIFECYCLE_TEXT).not.toMatch(/\bthe jury (?:then|decides|must)\b/i);
    const units = [
      ...WAVE_15_GUIDES.flatMap((slug) => {
        const g = guide(slug);
        return [
          ...blocks(g.definition),
          ...blocks(g.whyItExists),
          ...blocks(g.howItWorks),
          ...blocks(g.variation),
          ...blocks(g.rightsAndAccountability),
          ...g.misconceptions.map((m) => `${m.claim} ${m.reality}`),
        ];
      }),
      /*
       * Each field separately, not concatenated.
       *
       * Forced by mutation proof W15-M5, which applied cleanly and PASSED. Joining a stage's
       * summary, variation and exits into one unit let the variation field — which names
       * professional judges, lay judges and mixed panels — qualify a summary that had been
       * replaced with "a jury hears the evidence and decides". They render as separate elements
       * on the page, so they are separate units here.
       */
      ...LIFECYCLE_STAGES.flatMap((s) => [s.summary, s.variation, ...s.exits]),
    ];
    for (const unit of units.filter((u) => /\bjur(?:y|ies)\b/i.test(u))) {
      expect(
        JURY_QUALIFIED.test(unit),
        `a jury is mentioned with nothing in its block qualifying it: ${unit}`,
      ).toBe(true);
    }
  });

  it('would catch a jury asserted in a block of its own', () => {
    const planted = 'The jury then decides whether the case is proved.';
    expect(
      /\bjur(?:y|ies)\b/i.test(planted) && !JURY_QUALIFIED.test(planted),
      'the block-level jury guard would not catch an unqualified assertion',
    ).toBe(true);
  });

  it('states in terms that the familiar line is wrong', () => {
    const text = prose(guide('no-single-path-through-a-justice-system'));
    expect(text).toMatch(
      /police, then a prosecutor, then a jury, then prison|almost every link in it is wrong/i,
    );
  });

  it('says the arrows mean "may"', () => {
    const stageWithSuccessors = LIFECYCLE_STAGES.filter((s) => s.mayPrecede.length > 0);
    expect(stageWithSuccessors.length).toBeGreaterThan(5);
    // The field is named for what it asserts; the page must say so too.
    expect(ALL_PROSE.length).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* Neutrality, in both directions                                             */
/* -------------------------------------------------------------------------- */

const DEFERENCE_CLAIMS: RegExp[] = [
  /\bpolice are always right\b/i,
  /\bcourts are always right\b/i,
  /\bgovernment must always be obeyed\b/i,
  /\bevery law is just\b/i,
  /\baccused persons are guilty\b/i,
  /\bprosecutors represent (?:the )?truth\b/i,
  /\bdefence lawyers obstruct justice\b/i,
  /\bprisoners have no rights\b/i,
  /\bpunishment always prevents crime\b/i,
  /\bimprisonment always rehabilitates\b/i,
  /\blegal aid guarantees justice\b/i,
  /\bappeals undermine courts\b/i,
];

const DELEGITIMISING_CLAIMS: RegExp[] = [
  /\bpolice are inherently illegitimate\b/i,
  /\bprosecution is inherently oppressive\b/i,
  /\bcourts merely serve (?:the )?government\b/i,
  /\bimprisonment has no legitimate public function\b/i,
  /\blegal authority is inherently incompatible with liberty\b/i,
  /\bthe (?:whole )?system exists to (?:punish|oppress|control)\b/i,
];

describe('the site explains institutions rather than campaigning for or against them', () => {
  it.each(DEFERENCE_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied deference claim matching %s',
    (_src, pattern) => {
      expect(
        offending(pattern),
        'an unsupported claim that an institution is always right',
      ).toEqual([]);
    },
  );

  it.each(DELEGITIMISING_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied delegitimising claim matching %s',
    (_src, pattern) => {
      expect(
        offending(pattern),
        'an unsupported claim that an institution is illegitimate',
      ).toEqual([]);
    },
  );

  it('catches a deference claim inserted into the corpus', () => {
    expect(
      catches(DEFERENCE_CLAIMS, 'Courts are always right, and appeals undermine courts.'),
      'the deference tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('catches a delegitimising claim inserted into the corpus', () => {
    expect(
      catches(
        DELEGITIMISING_CLAIMS,
        'Prosecution is inherently oppressive and courts merely serve the government.',
      ),
      'the delegitimising tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('does not fire on the sentences that state the correction', () => {
    const correction =
      'Institutional respect does not mean courts are always right, and saying so is not a claim that courts merely serve the government.';
    expect(catches([...DEFERENCE_CLAIMS, ...DELEGITIMISING_CLAIMS], correction)).toBe(false);
  });

  it('states the five-part formulation the site is built on', () => {
    expect(ALL_PROSE.length).toBeGreaterThan(0);
    const guides = WAVE_15_GUIDES.map((s) => prose(guide(s))).join('\n');
    expect(guides + LIFECYCLE_TEXT).toMatch(/oversight|accountab/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Integration rather than concatenation                                      */
/* -------------------------------------------------------------------------- */

describe('the integrative pages integrate rather than repeat', () => {
  it('asks questions no earlier page asks', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    const duplicated = questions.filter((q, i) => questions.indexOf(q) !== i);
    expect(duplicated).toEqual([]);
  });

  it('reproduces no paragraph from the pages it draws on', () => {
    const drawnFrom = [
      'what-is-justice',
      'what-is-due-process',
      'why-justice-systems-need-oversight',
      'investigation-to-prosecution',
      'how-charging-decisions-work',
      'what-do-courts-do',
      'what-sentencing-is-for',
      'conviction-sentence-and-execution',
    ];
    for (const slug of drawnFrom) {
      const source = getGuide(slug);
      if (!source) continue;
      for (const text of blocks(source.howItWorks)) {
        if (text.length < 140) continue;
        expect(
          ALL_PROSE.includes(text),
          `a Wave 15 page reproduces a paragraph of ${slug}`,
        ).toBe(false);
      }
    }
  });

  it('is not vacuous — the pages it draws on have long paragraphs', () => {
    const long = blocks(getGuide('what-do-courts-do')?.howItWorks).filter(
      (t) => t.length >= 140,
    );
    expect(long.length).toBeGreaterThan(0);
  });

  it.each(WAVE_15_GUIDES)('%s is published, routed and structurally complete', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.related.length).toBeGreaterThanOrEqual(2);
    expect(g.sources.length).toBeGreaterThanOrEqual(1);
    expect(g.misconceptions.length).toBeGreaterThanOrEqual(3);
    expect(g.uncertainty?.length ?? 0).toBeGreaterThanOrEqual(1);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/justice/${slug}`);
  });

  it.each(WAVE_15_GUIDES)('%s sources every block it marks as fact', (slug) => {
    const g = guide(slug);
    const unsourced = [
      ...(g.definition ?? []),
      ...(g.whyItExists ?? []),
      ...(g.howItWorks ?? []),
      ...(g.variation ?? []),
      ...(g.rightsAndAccountability ?? []),
    ]
      .filter((b) => b.kind === 'paragraph' && b.claim === 'fact')
      .filter((b) => !((b as { sources?: string[] }).sources ?? []).length);
    expect(unsourced, `${slug} asserts a fact with no source`).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* The hub, and the link graph it repairs                                     */
/* -------------------------------------------------------------------------- */

describe('the hub is registered and does the linking work it exists for', () => {
  it('is a route', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain(HUB);
  });

  it('does not collide with the country module of the same name', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain('/countries/france/justice-system');
    expect(PUBLIC_ROUTE_PATHS.filter((p) => p === HUB).length).toBe(1);
  });

  it('links to at least thirty distinct published pages', () => {
    const cited = new Set([
      ...LIFECYCLE_STAGES.flatMap((s) => s.explainedBy),
      ...LIFECYCLE_LAYERS.flatMap((l) => l.explainedBy),
    ]);
    expect(cited.size).toBeGreaterThanOrEqual(30);
    for (const route of cited) expect(PUBLIC_ROUTE_PATHS).toContain(route);
  });

  it('reaches every content section that has published guides', () => {
    const cited = [
      ...LIFECYCLE_STAGES.flatMap((s) => s.explainedBy),
      ...LIFECYCLE_LAYERS.flatMap((l) => l.explainedBy),
    ];
    for (const section of [
      'justice',
      'courts',
      'law-enforcement',
      'investigations',
      'prosecution',
      'defence',
      'corrections',
      'forensics',
    ]) {
      expect(
        cited.some((r) => r.startsWith(`/${section}/`) || r === `/${section}`),
        `the lifecycle never reaches /${section}`,
      ).toBe(true);
    }
  });

  it('renders relatedInstitutions on guides, which the link audit found it did not', () => {
    const withInstitutions = ALL_GUIDES.filter(
      (g) => g.status === 'published' && (g.relatedInstitutions?.length ?? 0) > 0,
    );
    expect(
      withInstitutions.length,
      'no published guide declares relatedInstitutions, so the regression guard is vacuous',
    ).toBeGreaterThan(30);
    for (const g of withInstitutions) {
      for (const slug of g.relatedInstitutions ?? []) {
        expect(
          PUBLIC_ROUTE_PATHS,
          `${g.slug} declares institution "${slug}", which is not a route — a guide must not point at a page that does not exist`,
        ).toContain(`/institutions/${slug}`);
      }
    }
  });
});
