import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { LAW_ENFORCEMENT_GUIDES } from '@/content/guides/law-enforcement';
import { getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * The law-enforcement cluster, Wave 1.
 *
 * Scoping decisions live in docs/research/law-enforcement-cluster-plan.md. These tests
 * pin the ones that are checkable, so a later wave cannot quietly undo them — in
 * particular the jurisdiction-scoping obligations, which are the difference between an
 * educational page and one that reads as legal advice.
 */

const WAVE_1 = [
  'police-use-of-force',
  'arrest-and-detention',
  'why-police-accountability-matters',
  'how-police-are-held-to-account',
];

/** The pages whose subject is a coercive power, and which therefore carry extra duties. */
const JURISDICTION_SENSITIVE = ['police-use-of-force', 'arrest-and-detention'];

function guide(slug: string): Guide {
  const found = LAW_ENFORCEMENT_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 1 guide missing: ${slug}`);
  return found;
}

function allText(g: Guide): string {
  const blocks: Block[] = [
    ...g.definition,
    ...g.whyItExists,
    ...g.howItWorks,
    ...g.variation,
    ...g.rightsAndAccountability,
    ...(g.furtherReading ?? []),
  ];
  const parts = blocks.flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((item) => [item.term, item.description]);
  });
  return [
    g.title,
    g.summary,
    ...parts,
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality]),
  ].join('\n');
}

describe('Wave 1 shipped what the plan says it shipped', () => {
  it('publishes exactly the four planned pages', () => {
    const published = LAW_ENFORCEMENT_GUIDES.filter((g) => g.status === 'published').map(
      (g) => g.slug,
    );
    for (const slug of WAVE_1) expect(published).toContain(slug);
    /* Three pre-existing guides plus four new ones. */
    expect(published).toHaveLength(7);
  });

  it('registers a unique route for each, and only for published guides', () => {
    for (const slug of WAVE_1) {
      expect(PUBLIC_ROUTE_PATHS).toContain(`/law-enforcement/${slug}`);
    }
    const paths = PUBLISHED_GUIDES.map(guidePath);
    expect(new Set(paths).size).toBe(paths.length);

    const unpublished = ALL_GUIDES.filter((g) => g.status !== 'published');
    for (const g of unpublished) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(guidePath(g));
    }
  });

  it('creates no route for a candidate the plan rejected or deferred', () => {
    const rejected = [
      '/law-enforcement/probable-cause',
      '/law-enforcement/reasonable-suspicion',
      '/law-enforcement/why-police-matter',
      '/law-enforcement/stop-and-search',
      '/law-enforcement/gendarmerie',
      '/law-enforcement/police-officer',
      '/law-enforcement/what-is-policing',
      '/law-enforcement/arrest',
      '/law-enforcement/detention',
      '/law-enforcement/civilian-oversight',
      '/law-enforcement/internal-affairs',
    ];
    for (const path of rejected) {
      expect(PUBLIC_ROUTE_PATHS, `${path} was deferred or rejected`).not.toContain(path);
    }
  });
});

describe('sourcing', () => {
  it.each(WAVE_1)('%s cites at least two resolvable sources', (slug) => {
    const g = guide(slug);
    expect(g.sources.length).toBeGreaterThanOrEqual(2);
    for (const id of g.sources) {
      expect(getSource(id), `unresolved source: ${id}`).toBeDefined();
    }
  });

  it.each(WAVE_1)('%s cites only sources with a recorded verification', (slug) => {
    for (const id of guide(slug).sources) {
      const source = getSource(id)!;
      if (source.url) {
        expect(source.verifiedOn, `${id} has a URL but no verifiedOn`).toBeTruthy();
      }
    }
  });

  it.each(WAVE_1)('%s carries block-level citations on its factual claims', (slug) => {
    const g = guide(slug);
    const blocks = [...g.definition, ...g.whyItExists, ...g.howItWorks, ...g.variation];
    const factual = blocks.filter(
      (b): b is Extract<Block, { kind: 'paragraph' }> =>
        b.kind === 'paragraph' && b.claim === 'fact',
    );
    expect(factual.length, `${slug} states no sourced fact`).toBeGreaterThan(0);
    for (const block of factual) {
      expect(block.sources?.length, `unsourced fact in ${slug}`).toBeGreaterThan(0);
    }
  });

  /*
   * The cluster cites UN instruments through a UNODC module because OHCHR refuses
   * automated requests. Pages that rely on that route must say so, or the reader cannot
   * tell that the quotation is second-hand.
   */
  it('discloses the second-hand citation wherever the UNODC module is relied on', () => {
    for (const slug of WAVE_1) {
      const g = guide(slug);
      if (!g.sources.includes('unodc-e4j-use-of-force')) continue;
      const disclosure = (g.uncertainty ?? []).join(' ');
      expect(disclosure, `${slug} must disclose the indirect citation`).toMatch(/UNODC|quote/i);
    }
  });
});

describe('jurisdiction scoping', () => {
  it.each(JURISDICTION_SENSITIVE)('%s carries a scope callout', (slug) => {
    const hasScope = [...guide(slug).definition, ...guide(slug).whyItExists].some(
      (b) => b.kind === 'callout' && b.variant === 'scope',
    );
    expect(hasScope).toBe(true);
  });

  it.each(JURISDICTION_SENSITIVE)('%s states that it is not legal advice', (slug) => {
    expect(allText(guide(slug))).toMatch(/not legal advice/i);
  });

  it.each(JURISDICTION_SENSITIVE)(
    '%s records in uncertainty that thresholds are domestic',
    (slug) => {
      const uncertainty = (guide(slug).uncertainty ?? []).join(' ');
      expect(uncertainty.length).toBeGreaterThan(0);
      expect(uncertainty).toMatch(/domestic|national law|jurisdiction|differ/i);
    },
  );

  it.each(WAVE_1)('%s is scoped INT, not to a single country', (slug) => {
    expect(guide(slug).jurisdiction).toEqual(['INT']);
  });

  /*
   * The brief's sharpest content instruction: do not present US legal concepts as
   * universal law. These terms are jurisdiction-bound terms of art. They may appear in
   * prose that explicitly frames them as national — they may not appear at all in Wave 1,
   * which is what this asserts.
   */
  it.each(WAVE_1)('%s presents no US-bound term of art as a universal rule', (slug) => {
    const text = allText(guide(slug));
    for (const term of [
      'probable cause',
      'reasonable suspicion',
      'Miranda',
      'Fourth Amendment',
      'Fifth Amendment',
      'stop and frisk',
    ]) {
      expect(text.toLowerCase(), `${slug} uses "${term}"`).not.toContain(term.toLowerCase());
    }
  });

  it('links a national statute only with an explicit scope limit in its note', () => {
    const pace = getSource('uk-pace-1984')!;
    expect(pace.jurisdiction).toBe('GB');
    expect(pace.note).toMatch(/nothing whatever about any other country/i);
    expect(pace.note).toMatch(/Scotland or Northern Ireland/i);
  });
});

describe('editorial safeguards', () => {
  it.each(WAVE_1)('%s has cleared safety review and is fact-checked', (slug) => {
    const g = guide(slug);
    expect(g.safetyReview).toBe('cleared');
    expect(g.review).toBe('fact-checked');
    expect(g.reviewedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(g.publishedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each(WAVE_1)('%s separates the platform voice from sourced fact', (slug) => {
    const g = guide(slug);
    const hasReading = g.rightsAndAccountability.some(
      (b) => b.kind === 'callout' && b.variant === 'analysis',
    );
    expect(hasReading, `${slug} states no explicitly-marked reading`).toBe(true);
  });

  it.each(WAVE_1)('%s corrects at least three misconceptions', (slug) => {
    expect(guide(slug).misconceptions.length).toBeGreaterThanOrEqual(3);
  });

  it.each(WAVE_1)('%s relates to at least two other pages', (slug) => {
    expect(guide(slug).related.length).toBeGreaterThanOrEqual(2);
  });

  it.each(WAVE_1)('%s uses no banned superlative or promotional phrasing', (slug) => {
    const text = allText(guide(slug)).toLowerCase();
    for (const phrase of [
      'ultimate guide',
      'definitive guide',
      'complete guide',
      'everything you need to know',
      "world's best",
      'official justicecenterid',
      'most effective police',
      'safest police system',
    ]) {
      expect(text, `${slug} uses banned phrase "${phrase}"`).not.toContain(phrase);
    }
  });

  /*
   * Effectiveness and trust are restricted claims. Wave 1 makes none, and the
   * accountability page says so in terms.
   */
  it('makes no unsourced effectiveness claim about oversight', () => {
    const g = guide('why-police-accountability-matters');
    expect((g.uncertainty ?? []).join(' ')).toMatch(/no claim that|does not claim/i);
  });
});

describe('internal link architecture', () => {
  it('links the cluster outward to country dossiers', () => {
    const text = WAVE_1.map((slug) => allText(guide(slug))).join('\n');
    expect(text).toMatch(/\(\/countries\/[a-z-]+/);
  });

  it('links the cluster to other sections rather than only to itself', () => {
    const text = WAVE_1.map((slug) => allText(guide(slug))).join('\n');
    const sections = ['/justice/', '/investigations/', '/prosecution/', '/institutions'];
    const hit = sections.filter((section) => text.includes(section));
    expect(hit.length, 'cluster does not link outside its own section').toBeGreaterThanOrEqual(
      2,
    );
  });

  it('cross-links the accountability parent and child', () => {
    expect(guide('why-police-accountability-matters').related).toContain(
      'how-police-are-held-to-account',
    );
    expect(guide('how-police-are-held-to-account').related).toContain(
      'why-police-accountability-matters',
    );
  });
});
