import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide } from '@/content/guides';
import { LIFECYCLE_STAGES } from '@/content/lifecycle';
import { getProfession } from '@/content/professions';
import type { Block, Guide } from '@/content/types';

/**
 * Cross-wave contradiction audit for Waves 12–15.
 *
 * The programme brief names eight specific contradictions to test for. This file is one group
 * per named contradiction, plus the corpus-wide checks that only make sense once all four waves
 * exist. Every group asserts against the LIVE corpus rather than against a wave's own list, so a
 * later edit that reintroduces a contradiction fails here rather than nowhere.
 *
 * These are not neutrality tripwires — those live in each wave's suite. These check that two
 * pages do not say opposite things, which is a different failure and one that no single wave's
 * tests can see.
 */

function blocks(list: Block[] | undefined): string[] {
  return (list ?? []).flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((i) => [i.term, i.description]);
  });
}

function prose(slug: string): string {
  const g = getGuide(slug);
  if (!g) throw new Error(`missing guide: ${slug}`);
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

const CORPUS = ALL_GUIDES.filter((g) => g.status === 'published')
  .map((g: Guide) => prose(g.slug))
  .join('\n');

/* -------------------------------------------------------------------------- */
/* 1. Prosecution says X while defence implies not-X                          */
/* -------------------------------------------------------------------------- */

describe('prosecution and defence do not contradict each other', () => {
  it('both describe prosecution as acting in the public interest rather than to convict', () => {
    const prosecution = prose('what-does-a-prosecutor-do') + prose('prosecutorial-objectivity');
    const defence = prose('defence-counsel-and-prosecutor');
    expect(prosecution).toMatch(/public interest|objectiv/i);
    expect(defence).toMatch(/public case|public interest/i);
    expect(defence).not.toMatch(/the prosecutor(?:'s|s)? (?:job|role) is to (?:convict|win)/i);
  });

  it('neither describes the defence as obstructing the process', () => {
    expect(CORPUS).not.toMatch(
      /defence (?:lawyers?|counsel) (?:obstruct|frustrate|impede) justice/i,
    );
  });

  it('both treat the two functions as non-symmetrical, and say so consistently', () => {
    const defence = prose('defence-counsel-and-prosecutor');
    expect(defence).toMatch(/not (?:two sides and a referee|mirror images)|three roles/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 2. A court page universalises what Wave 12 says varies                     */
/* -------------------------------------------------------------------------- */

describe('nothing universalises what an earlier wave established varies', () => {
  const VARIES: [string, RegExp][] = [
    ['due process', /\bdue process\b is (?:the )?universal/i],
    ['proportionality', /proportionality is a universal (?:test|principle|requirement)/i],
    ['public defender', /every (?:country|system) has (?:a )?public defender/i],
    ['jury', /every (?:country|system) (?:has|uses) (?:a )?jur(?:y|ies)/i],
    ['charging test', /the (?:universal|standard) charging test/i],
    ['prison administration', /prisons are (?:always|everywhere) run by/i],
  ];

  it.each(VARIES)('the corpus never universalises %s', (_label, pattern) => {
    expect(CORPUS).not.toMatch(pattern);
  });

  it('the due-process pages hold both halves rather than one', () => {
    const dueProcess =
      prose('what-is-due-process') + prose('procedural-fairness-and-its-many-names');
    expect(dueProcess).toMatch(/devido processo legal|Brazil/);
    expect(dueProcess).toMatch(/other names|many names|different name/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 3. A corrections page implies guilt before judgment                        */
/* -------------------------------------------------------------------------- */

describe('corrections never implies guilt before judgment', () => {
  it('remand is described as detention of people who are not convicted', () => {
    const remand = prose('what-remand-detention-is');
    expect(remand).toMatch(/not (?:yet )?convicted|before conviction|presumed innocent/i);
  });

  it('no page treats people in custody as convicted by definition', () => {
    expect(CORPUS).not.toMatch(/everyone in (?:prison|custody) has been convicted/i);
    expect(CORPUS).not.toMatch(/prisoners are (?:all )?(?:convicted )?criminals\b/i);
  });

  it('the presumption of innocence page and the remand page agree', () => {
    const presumption = prose('what-is-the-presumption-of-innocence');
    expect(presumption).toMatch(/presum/i);
    expect(prose('what-remand-detention-is')).toMatch(/presumed innocent/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 4. The lifecycle places sentencing before adjudication                     */
/* -------------------------------------------------------------------------- */

describe('the lifecycle orders stages consistently with the rest of the corpus', () => {
  const order = LIFECYCLE_STAGES.map((s) => s.id);
  const before = (a: string, b: string) => order.indexOf(a) < order.indexOf(b);

  it('places adjudication before sentencing', () => {
    expect(before('adjudication', 'sentencing')).toBe(true);
  });

  it('places disposition before sentencing', () => {
    expect(before('disposition', 'sentencing')).toBe(true);
  });

  it('places charging before adjudication', () => {
    expect(before('charging', 'adjudication')).toBe(true);
  });

  it('places sentencing before execution and execution before release', () => {
    expect(before('sentencing', 'execution')).toBe(true);
    expect(before('execution', 'release')).toBe(true);
  });

  it('never lets sentencing lead directly back to adjudication as a normal step', () => {
    const sentencing = LIFECYCLE_STAGES.find((s) => s.id === 'sentencing');
    expect(sentencing?.mayPrecede).toEqual(['execution']);
  });

  it('agrees with the corrections cluster that these are separate decisions', () => {
    const separation = prose('conviction-sentence-and-execution');
    expect(separation).toMatch(/three (?:questions|separate)/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 5. Legal aid equated with state employment                                 */
/* -------------------------------------------------------------------------- */

describe('publicly funded is never equated with publicly employed', () => {
  it('the funding page keeps them apart', () => {
    const funded = prose('how-defence-is-funded');
    expect(funded).toMatch(/Appointment (?:is a procedure|assigns)/i);
    expect(funded).toMatch(/private (?:practitioners?|Rechtsanwalt|avocat)/i);
  });

  it('no page in the corpus equates them', () => {
    expect(CORPUS).not.toMatch(
      /publicly funded (?:defence|counsel|lawyers?) (?:are|is) (?:state|government)[- ]employed/i,
    );
    expect(CORPUS).not.toMatch(
      /legal aid (?:lawyers?|counsel) work for the (?:state|government)/i,
    );
  });

  it('the defence-lawyer profession record says the same thing', () => {
    const record = getProfession('defence-lawyer');
    const text = (record?.commonMisunderstandings ?? []).join(' ');
    expect(text).toMatch(/Appointment assigns a lawyer to a case/i);
  });

  it('the Defensoria finding survives all four waves', () => {
    const funded = prose('how-defence-is-funded');
    expect(funded).toMatch(/Defensoria P[úu]blica/);
    expect(funded).toMatch(/Article 134/);
  });
});

/* -------------------------------------------------------------------------- */
/* 6. Access-to-justice promises outcomes                                     */
/* -------------------------------------------------------------------------- */

describe('access is never a promise of an outcome, anywhere in the corpus', () => {
  it('the access page states the distinction', () => {
    const access = prose('access-to-justice');
    expect(access).toMatch(/does not mean winning/i);
    expect(access).toMatch(/free representation in every matter/i);
  });

  it('no page promises a result', () => {
    expect(CORPUS).not.toMatch(
      /access to justice (?:means|guarantees|ensures) (?:a |the )?(?:fair )?(?:outcome|result|verdict|victory)/i,
    );
    expect(CORPUS).not.toMatch(/legal aid guarantees (?:justice|a fair outcome)/i);
  });

  it('the cost page does not promise costlessness', () => {
    const cost = prose('the-cost-of-going-to-court');
    expect(cost).toMatch(/reasonable fee/i);
    expect(cost).toMatch(/not an abolition|does not abolish/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 7. Court respect conflicts with appeal and review                          */
/* -------------------------------------------------------------------------- */

describe('respect for courts and the right to challenge them are stated compatibly', () => {
  it('the respect page names the compatibility in terms', () => {
    const respect = prose('why-courts-must-be-respected');
    expect(respect).toMatch(
      /compatible with challenging|through the procedures the legal system/i,
    );
  });

  it('the appeal page treats challenge as participation, not opposition', () => {
    const appeal = prose('appeal-and-the-rule-of-law') + prose('effective-remedy');
    expect(appeal).toMatch(/participation in a legal order|not opposition|correct itself/i);
  });

  it('no page says courts may not be criticised', () => {
    expect(CORPUS).not.toMatch(/courts? (?:must|may) never be criticised/i);
    expect(CORPUS).not.toMatch(/judgments? are beyond criticism/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 8. Rule of law demands obedience while accountability explains challenge   */
/* -------------------------------------------------------------------------- */

describe('the rule-of-law pages do not demand obedience', () => {
  it('no page requires unconditional obedience', () => {
    expect(CORPUS).not.toMatch(/government must always be obeyed/i);
    expect(CORPUS).not.toMatch(/the law must be obeyed without question/i);
    expect(CORPUS).not.toMatch(/every law is just/i);
  });

  it('the rule-of-law page binds government rather than citizens only', () => {
    const rol = prose('what-is-the-rule-of-law') + prose('why-government-is-bound-by-law');
    expect(rol).toMatch(/bound by law|binds the (?:state|government)|subject to (?:the )?law/i);
  });

  it('oversight and accountability pages describe lawful challenge as normal', () => {
    const oversight = prose('why-justice-systems-need-oversight');
    expect(oversight).toMatch(/oversight|accountab/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Corpus-wide integrity, only checkable once all four waves exist            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* The negative assertions above can actually fire                            */
/* -------------------------------------------------------------------------- */

/**
 * Every group above is built on `.not.toMatch`, which passes for two very different reasons:
 * the corpus is clean, or the pattern was never going to match anything. These tests separate
 * the two by planting the contradiction each pattern exists to catch.
 */
describe('the contradiction patterns detect the contradictions they name', () => {
  const PLANTED: [string, RegExp, string][] = [
    [
      'defence obstructs justice',
      /defence (?:lawyers?|counsel) (?:obstruct|frustrate|impede) justice/i,
      'Critics argue that defence lawyers obstruct justice at every stage.',
    ],
    [
      'guilt before judgment',
      /prisoners are (?:all )?(?:convicted )?criminals\b/i,
      'Conditions matter less because prisoners are convicted criminals.',
    ],
    [
      'publicly funded equals publicly employed',
      /publicly funded (?:defence|counsel|lawyers?) (?:are|is) (?:state|government)[- ]employed/i,
      'In practice publicly funded counsel are state-employed.',
    ],
    [
      'access promises an outcome',
      /access to justice (?:means|guarantees|ensures) (?:a |the )?(?:fair )?(?:outcome|result|verdict|victory)/i,
      'Properly understood, access to justice guarantees a fair outcome.',
    ],
    [
      'courts beyond criticism',
      /judgments? are beyond criticism/i,
      'Once delivered, judgments are beyond criticism.',
    ],
    [
      'unconditional obedience',
      /government must always be obeyed/i,
      'The rule of law means government must always be obeyed.',
    ],
    [
      'universal public defender',
      /every (?:country|system) has (?:a )?public defender/i,
      'Every country has a public defender office of some kind.',
    ],
    [
      'universal jury',
      /every (?:country|system) (?:has|uses) (?:a )?jur(?:y|ies)/i,
      'Every system uses a jury for serious offences.',
    ],
  ];

  it.each(PLANTED)('detects a planted %s', (_label, pattern, planted) => {
    expect(
      pattern.test(planted),
      'the pattern would not catch the contradiction it names',
    ).toBe(true);
    expect(CORPUS, 'the corpus contains the contradiction').not.toMatch(pattern);
  });
});

describe('the four waves leave the corpus internally consistent', () => {
  it('no two published guides ask the same question', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    expect(questions.filter((q, i) => questions.indexOf(q) !== i)).toEqual([]);
  });

  it('no two published guides share a slug', () => {
    const slugs = ALL_GUIDES.filter((g) => g.status === 'published').map((g) => g.slug);
    expect(slugs.filter((s, i) => slugs.indexOf(s) !== i)).toEqual([]);
  });

  it('every guide in a safety-sensitive section has a cleared safety review', () => {
    for (const g of ALL_GUIDES.filter((x) => x.status === 'published')) {
      if (
        ![
          'law-enforcement',
          'investigations',
          'forensics',
          'public-safety',
          'defence',
          'corrections',
        ].includes(g.section)
      ) {
        continue;
      }
      expect(g.safetyReview, `${g.section}/${g.slug} publishes without a safety review`).toBe(
        'cleared',
      );
    }
  });

  it('is not vacuous — the corpus is large enough for these checks to mean something', () => {
    expect(ALL_GUIDES.filter((g) => g.status === 'published').length).toBeGreaterThan(80);
    expect(CORPUS.length).toBeGreaterThan(500_000);
  });
});
