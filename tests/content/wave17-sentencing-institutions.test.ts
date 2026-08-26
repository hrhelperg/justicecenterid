import { describe, expect, it } from 'vitest';
import { CORRECTIONS_GUIDES } from '@/content/guides/corrections';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { getSource } from '@/content/sources';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 17: sentencing institutions and community corrections.
 *
 * The brief names eight invariants. Each has a group below and each group has a live-catch
 * companion, because a tripwire nobody has fired is a tripwire nobody knows works.
 *
 * The distinctive risk here is not overclaim — it is COLLAPSE. Probation into parole, sentencing
 * into corrections administration, oversight into management, community sentence into leniency.
 * Every one of those is a real conflation that a page written quickly would commit, and Wave 13
 * already paid for establishing the first of them. The checks are sentence-level and
 * denial-aware for the reason Wave 12 established: a lexical blocklist would forbid the exact
 * sentences that state the correction.
 */

const WAVE_17 = [
  'how-fines-are-calculated',
  'when-a-court-may-imprison',
  'sentencing-guidelines-and-who-writes-them',
  'what-a-community-order-requires',
  'what-a-pre-sentence-report-is',
  'who-inspects-a-prison',
  'how-a-prisoner-raises-a-complaint',
] as const;

/** Wave 13. Preserved, not restated. */
const WAVE_13 = [
  'why-correctional-systems-exist',
  'what-sentencing-is-for',
  'conviction-sentence-and-execution',
  'custodial-and-non-custodial-sentences',
  'what-a-suspended-sentence-is',
  'probation-is-three-different-things',
  'release-before-the-end-of-a-sentence',
  'why-a-sentence-length-is-not-time-served',
  'what-remand-detention-is',
  'who-runs-prisons',
  'how-prison-capacity-is-measured',
  'what-reintegration-means',
] as const;

function guide(slug: string): Guide {
  const found = CORRECTIONS_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 17 guide missing: ${slug}`);
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

function scannedProse(g: Guide): string {
  return [
    ...blocks(g.definition),
    ...blocks(g.whyItExists),
    ...blocks(g.howItWorks),
    ...blocks(g.variation),
    ...blocks(g.rightsAndAccountability),
  ].join('\n');
}

function guideBlocks(g: Guide): string[] {
  const all = [
    ...(g.definition ?? []),
    ...(g.whyItExists ?? []),
    ...(g.howItWorks ?? []),
    ...(g.variation ?? []),
    ...(g.rightsAndAccountability ?? []),
  ];
  return all.flatMap((b) => {
    if (b.kind === 'paragraph') return [b.text];
    if (b.kind === 'callout') return [`${b.title} ${b.text}`];
    if (b.kind === 'list') return [b.items.join(' ')];
    return [b.items.map((i) => `${i.term} ${i.description}`).join(' ')];
  });
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brather than\b|\bunlike\b/i.test(
    remainder,
  );
}

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

const ALL_UNITS = WAVE_17.flatMap((slug) => tripwireUnits(guide(slug)));
const ALL_PROSE = WAVE_17.map((slug) => prose(guide(slug))).join('\n');
/** The whole corrections section — the conflation checks must hold across Waves 13 and 17. */
const SECTION_UNITS = CORRECTIONS_GUIDES.flatMap((g) => tripwireUnits(g));

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* Routing                                                                    */
/* -------------------------------------------------------------------------- */

describe('Wave 17 routes exist and Wave 13 is untouched', () => {
  it.each(WAVE_17)('%s is published, routed and safety-reviewed', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.section).toBe('corrections');
    expect(g.safetyReview, `${slug} publishes in a safety-sensitive section unreviewed`).toBe(
      'cleared',
    );
    expect(guidePath(g)).toBe(`/corrections/${slug}`);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/corrections/${slug}`);
  });

  it.each(WAVE_13)('%s survives from Wave 13', (slug) => {
    expect(getGuide(slug), `Wave 13 guide ${slug} has disappeared`).toBeDefined();
  });

  it('is not vacuous — seven routes were added to a section that had twelve', () => {
    expect(WAVE_17.length).toBe(7);
    expect(CORRECTIONS_GUIDES.length).toBe(WAVE_13.length + WAVE_17.length);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 1: probation is not parole                                       */
/* Invariant 2: sentencing is not corrections administration                  */
/* Invariant 3: parole is not universal                                       */
/* Invariant 5: prison oversight is not prison management                     */
/* -------------------------------------------------------------------------- */

const CONFLATIONS: RegExp[] = [
  /\bprobation (?:and|or) parole are (?:the same|synonyms|interchangeable)\b/i,
  /\bprobation (?:is|means) parole\b/i,
  /\bparole (?:is|means) probation\b/i,
  /\bevery (?:country|system) has (?:a )?parole\b/i,
  /\bparole (?:exists|is available) (?:in every|everywhere)\b/i,
  /\bsentencing (?:is|means) (?:the same as )?corrections\b/i,
  /\bthe court (?:administers|runs|manages) the sentence\b/i,
  /\bprison (?:oversight|inspection) (?:is|means) (?:prison )?management\b/i,
  /\bthe inspectorate (?:runs|manages|operates) (?:the )?prisons?\b/i,
  /\ban? (?:oversight|inspection) body can (?:overturn|reverse|change) (?:the )?(?:decision|outcome|sentence)\b/i,
  /\bcommunity (?:sentence|order)s? (?:are|is) (?:a )?(?:leniency|lenient|let off|no real)\b/i,
  /\bcommunity (?:sentence|order)s? mean no (?:real )?consequence/i,
];

describe('the four collapses this wave exists to prevent', () => {
  it.each(CONFLATIONS.map((p) => [p.source, p] as const))(
    'no undenied conflation matching %s across the whole corrections section',
    (_src, pattern) => {
      expect(offending(pattern, SECTION_UNITS), 'a conflation stated without denial').toEqual(
        [],
      );
    },
  );

  it('catches each conflation when planted', () => {
    for (const planted of [
      'Probation and parole are the same, and every system has parole.',
      'Sentencing is corrections, because the court administers the sentence.',
      'Prison oversight is prison management, and the inspectorate runs the prisons.',
      'Community orders are lenient and community sentences mean no real consequence.',
    ]) {
      expect(catches(CONFLATIONS, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does not fire on the sentences that state the corrections', () => {
    const correction =
      'Probation and parole are not the same thing, community orders are not leniency, and prison oversight is not prison management.';
    expect(catches(CONFLATIONS, correction)).toBe(false);
  });

  it('preserves the Wave 13 probation finding rather than restating it', () => {
    const w13 = prose(getGuide('probation-is-three-different-things') as Guide);
    expect(w13).toMatch(/three/i);
    for (const text of blocks(
      (getGuide('probation-is-three-different-things') as Guide).howItWorks,
    )) {
      if (text.length < 140) continue;
      expect(ALL_PROSE.includes(text), 'Wave 17 reproduces the Wave 13 probation page').toBe(
        false,
      );
    }
  });

  it('states the oversight/management separation in the block that describes inspection', () => {
    const g = guide('who-inspects-a-prison');
    const block = guideBlocks(g).find((b) => /twofold/i.test(b));
    expect(block, 'the block stating the twofold system has gone').toBeDefined();
    expect(
      block,
      'the twofold system is described without saying the external body is independent of the administration',
    ).toMatch(/independent of the prison administration/i);
  });

  it('would catch the independence clause being dropped from that block', () => {
    const stripped =
      'Rule 83 states that there shall be a twofold system for regular inspections of prisons and penal services.';
    expect(/independent of the prison administration/i.test(stripped)).toBe(false);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 4: community sanctions are not universally one institution       */
/* Invariant: no institution family the evidence does not carry               */
/* -------------------------------------------------------------------------- */

describe('no institution family is invented', () => {
  it('creates no parole, probation or inspectorate institution route', () => {
    for (const slug of [
      'parole-board',
      'probation-service',
      'probation-agency',
      'prison-inspectorate',
      'sentencing-council',
      'community-corrections-agency',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
    for (const slug of ['probation-officer', 'parole-board-member']) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/professions/${slug}`);
    }
  });

  it('records the statutory formulation that argues against a probation institution', () => {
    const text = prose(guide('what-a-pre-sentence-report-is'));
    expect(text).toMatch(/a provider of probation services/i);
    expect(text).toMatch(/presupposes|may be several/i);
  });

  it('declares only institutions that are routes', () => {
    for (const slug of WAVE_17) {
      for (const inst of guide(slug).relatedInstitutions ?? []) {
        expect(PUBLIC_ROUTE_PATHS, `${slug} declares missing institution ${inst}`).toContain(
          `/institutions/${inst}`,
        );
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 6: no unsupported restricted claims                              */
/* -------------------------------------------------------------------------- */

describe('the restricted-claim safeguards are preserved, not worked around', () => {
  it.each(WAVE_17)('%s trips no restricted-phrasing pattern', (slug) => {
    expect(
      findRestrictedPhrasing(scannedProse(guide(slug))).map(
        (v) => `${v.category}: "${v.match}"`,
      ),
      'restricted phrasing in a guide, which has no channel to declare a claim',
    ).toEqual([]);
  });

  it('publishes no prison population, capacity or caseload figure', () => {
    expect(ALL_PROSE).not.toMatch(
      /\b\d{1,3}(?:,\d{3})+\s+(?:prisoners|people in custody|inmates)\b/i,
    );
    expect(ALL_PROSE).not.toMatch(/\bper 100,?000\b/i);
    expect(ALL_PROSE).not.toMatch(/\boccupancy rate\b/i);
  });

  it('carries no guide-level restrictedClaims field, which the scanner would not read', () => {
    for (const slug of WAVE_17) {
      expect(
        'restrictedClaims' in (guide(slug) as unknown as Record<string, unknown>),
        `${slug} carries a restrictedClaims field the scanner does not read`,
      ).toBe(false);
    }
  });

  it('is not vacuous — the scanner fires on the phrasing this wave avoided', () => {
    expect(findRestrictedPhrasing('Prisons are overcrowded.').map((v) => v.category)).toContain(
      'detention-capacity',
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 7: country claims carry scoped sources                           */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = { Germany: 'DE', 'England and Wales': 'GB' };

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

describe('every country claim rests on a country-scoped source', () => {
  it.each(WAVE_17)('%s cites a scoped source for every country it names', (slug) => {
    const g = guide(slug);
    const text = prose(g);
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      if (!new RegExp(`\\b${country}\\b`).test(text)) continue;
      expect(
        hasSourceFor(g.sources, iso, country),
        `${slug} discusses ${country} with no source scoped to or naming it`,
      ).toBe(true);
    }
  });

  it('rejects the Mandela Rules standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(hasSourceFor(['mandela-rules'], iso, country), `${country} laundered`).toBe(false);
    }
  });

  it.each(WAVE_17)('%s sources every block it marks as fact', (slug) => {
    const g = guide(slug);
    const unsourced = [
      ...(g.definition ?? []),
      ...(g.whyItExists ?? []),
      ...(g.howItWorks ?? []),
      ...(g.variation ?? []),
      ...(g.rightsAndAccountability ?? []),
    ]
      .filter((b) => b.kind === 'paragraph' && b.claim === 'fact')
      .filter((b) => !((b as { sources?: string[] }).sources ?? []).length)
      .map((b) => (b as { text: string }).text.slice(0, 80));
    expect(unsourced, `${slug} asserts a fact with no source`).toEqual([]);
  });

  it('records that the repealed guidelines duty was not used', () => {
    const s = getSource('uk-cja-2009-sentencing-council');
    expect(s, 'the Sentencing Council source has gone').toBeDefined();
    expect(s?.note, 'the repeal of CJA 2009 s.125 is not recorded').toMatch(/REPEALED/);
    const guidelines = prose(guide('sentencing-guidelines-and-who-writes-them'));
    expect(guidelines, 'the guidelines page does not cite the current duty').toMatch(
      /Sentencing Act 2020/,
    );
  });

  it('states the OHCHR access limitation rather than asserting anything about OPCAT', () => {
    const g = guide('who-inspects-a-prison');
    const text = prose(g);
    expect(text).toMatch(/403/);
    expect(text).toMatch(/access limitation/i);
    for (const id of g.sources) {
      expect(id, 'an OPCAT source is cited despite the fetch failing').not.toMatch(
        /opcat|ohchr/i,
      );
    }
  });

  it('is not vacuous — the pages make country claims', () => {
    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBe(Object.keys(COUNTRIES).length);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 8: no duplicate Wave 13 content                                  */
/* -------------------------------------------------------------------------- */

describe('Wave 13 is not restated', () => {
  it('asks a question no published guide already asks', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    expect(questions.filter((q, i) => questions.indexOf(q) !== i)).toEqual([]);
  });

  it('reproduces no long paragraph from any Wave 13 page', () => {
    for (const slug of WAVE_13) {
      const source = getGuide(slug) as Guide;
      for (const text of [...blocks(source.howItWorks), ...blocks(source.definition)]) {
        if (text.length < 140) continue;
        expect(
          ALL_PROSE.includes(text),
          `a Wave 17 page reproduces a paragraph of /corrections/${slug}`,
        ).toBe(false);
      }
    }
  });

  it('is not vacuous — Wave 13 pages have long paragraphs to collide with', () => {
    const long = blocks((getGuide('what-sentencing-is-for') as Guide).howItWorks).filter(
      (t) => t.length >= 140,
    );
    expect(long.length).toBeGreaterThan(2);
  });
});

/* -------------------------------------------------------------------------- */
/* Normative balance                                                          */
/* -------------------------------------------------------------------------- */

const IDEOLOGICAL: RegExp[] = [
  /\ball imprisonment is (?:wrong|illegitimate|unjustified)\b/i,
  /\bimprisonment (?:is|should be) (?:always )?(?:desirable|the answer)\b/i,
  /\brehabilitation (?:is|will be) guaranteed\b/i,
  /\bpunishment and rehabilitation (?:are|is) (?:mutually exclusive|incompatible)\b/i,
  /\bprison (?:does not|never) work\b/i,
  /\bprobation is freedom without consequence/i,
];

describe('the wave takes no ideological position', () => {
  it.each(IDEOLOGICAL.map((p) => [p.source, p] as const))(
    'no undenied ideological framing matching %s',
    (_src, pattern) => {
      expect(offending(pattern, SECTION_UNITS), 'ideological framing').toEqual([]);
    },
  );

  it('catches ideological framing when planted', () => {
    expect(
      catches(
        IDEOLOGICAL,
        'All imprisonment is wrong, and punishment and rehabilitation are mutually exclusive.',
      ),
      'the ideological tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('presents the community-order requirement list as obligations rather than as leniency', () => {
    const text = prose(guide('what-a-community-order-requires'));
    expect(text).toMatch(/unpaid work/i);
    expect(text).toMatch(/curfew/i);
    expect(text).toMatch(/electronic whereabouts monitoring/i);
    expect(text).toMatch(/restrictions on liberty/i);
  });

  it('keeps the day-fine number and value distinction in one block', () => {
    const g = guide('how-fines-are-calculated');
    const block = guideBlocks(g).find((b) =>
      /number of units is the sentence|number is the sentence/i.test(b),
    );
    expect(block, 'the block making the number/value distinction has gone').toBeDefined();
    expect(block, 'the distinction is stated without the requirement to record both').toMatch(
      /state both|states both|40\(4\)/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Structural integrity                                                       */
/* -------------------------------------------------------------------------- */

describe('every Wave 17 page is structurally complete', () => {
  it.each(WAVE_17)(
    '%s has related entries, sources, misconceptions and uncertainty',
    (slug) => {
      const g = guide(slug);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      expect(g.sources.length).toBeGreaterThanOrEqual(1);
      expect(g.misconceptions.length).toBeGreaterThanOrEqual(3);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThanOrEqual(1);
    },
  );

  it.each(WAVE_17)('%s opens by scoping what it is not', (slug) => {
    const hasScope = (guide(slug).definition ?? []).some(
      (b) => b.kind === 'callout' && (b.variant === 'scope' || b.variant === 'safety'),
    );
    expect(hasScope, `${slug} opens without a scope or safety callout`).toBe(true);
  });

  it('the two pages closest to personal advice carry a safety callout', () => {
    for (const slug of ['when-a-court-may-imprison', 'how-a-prisoner-raises-a-complaint']) {
      const hasSafety = (guide(slug).definition ?? []).some(
        (b) => b.kind === 'callout' && b.variant === 'safety',
      );
      expect(hasSafety, `${slug} has no safety callout`).toBe(true);
    }
  });

  it('gives no sentence prediction and no personalised advice', () => {
    for (const pattern of [
      /\byou (?:will|would) (?:get|receive|serve)\b/i,
      /\bhow (?:many|long) (?:years|months) (?:will|would) (?:you|they)\b/i,
      /\byou should (?:apply|appeal|ask|request)\b/i,
    ]) {
      expect(offending(pattern), 'prediction or advice').toEqual([]);
    }
  });

  it('links only to routes that exist', () => {
    for (const slug of WAVE_17) {
      for (const raw of prose(guide(slug)).match(/\]\((\/[^)#]*)/g) ?? []) {
        const path = raw.slice(2);
        expect(PUBLIC_ROUTE_PATHS, `${slug} links to missing route ${path}`).toContain(path);
      }
    }
  });

  it('puts no markdown link where the renderer will not resolve it', () => {
    for (const g of ALL_GUIDES) {
      for (const m of g.misconceptions) {
        for (const field of [m.claim, m.reality]) {
          expect(
            /\[[^\]]+\]\([^)]+\)/.test(field),
            `${g.slug} has a link in a misconception`,
          ).toBe(false);
        }
      }
    }
  });
});
