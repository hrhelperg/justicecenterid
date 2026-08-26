import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide } from '@/content/guides';
import { HISTORY_ENTRIES } from '@/content/history';
import { SOURCES, getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide, HistoryEntry } from '@/content/types';

/**
 * Cross-wave adversarial checks for Waves 16–18.
 *
 * Each wave's own suite guards its own pages. These are the checks that only make sense once all
 * three exist, and they are asserted against the LIVE corpus so a later edit fails here rather
 * than nowhere.
 *
 * The contradictions worth testing for across these three waves are not the same as the ones
 * across Waves 12–15. Forensics, corrections and history each make claims the others could
 * quietly undo: a history page could assert the descent a forensics page refuses; a corrections
 * page could universalise something a history page shows was local; and all three could drift
 * into presenting institutions as inevitable rather than chosen.
 */

function blocks(list: Block[] | undefined): string[] {
  return (list ?? []).flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((i) => [i.term, i.description]);
  });
}

function guideProse(g: Guide): string {
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

function historyProse(e: HistoryEntry): string {
  return [
    e.title,
    e.summary,
    e.scope,
    ...blocks(e.definition),
    ...blocks(e.whatTheSourcesSay),
    ...blocks(e.whyItMatters),
    ...e.continuity.flatMap((c) => [c.modernCounterpart, c.basis]),
    ...e.misconceptions.flatMap((m) => [m.claim, m.reality]),
    ...e.uncertainty,
  ].join('\n');
}

const CORPUS = [
  ...ALL_GUIDES.filter((g) => g.status === 'published').map(guideProse),
  ...HISTORY_ENTRIES.map(historyProse),
].join('\n');

/* -------------------------------------------------------------------------- */
/* 1. History does not undo what the modern pages establish                   */
/* -------------------------------------------------------------------------- */

describe('history contextualises the modern pages without contradicting them', () => {
  it('never asserts institutional descent anywhere in the corpus', () => {
    for (const pattern of [
      /\bis the ancestor of\b/i,
      /\bdirect(?:ly)? descend(?:s|ed|ant)? from\b/i,
      /\bunbroken (?:line|lineage|continuity)\b/i,
    ]) {
      const hits = CORPUS.split(/(?<=[.!?])\s+|\n+/).filter(
        (s) =>
          pattern.test(s) &&
          !/\bnot\b|\bno\b|\bnothing\b|\bnever\b|\bwithout\b|\brefus/i.test(
            s.replace(new RegExp(pattern.source, 'gi'), ' '),
          ),
      );
      expect(hits, 'an institutional descent claim').toEqual([]);
    }
  });

  it('agrees with the policing guide that there is no single founding moment', () => {
    const guide = guideProse(getGuide('how-policing-institutions-changed') as Guide);
    expect(guide).toMatch(/not a schedule|single founding moment|features accumulating/i);
    const history = HISTORY_ENTRIES.map(historyProse).join('\n');
    expect(history).toMatch(/no evidence of any link to Robert Peel/i);
  });

  it('keeps the 1829 Act scoped the same way in both the guide and the history pages', () => {
    const texts = [
      guideProse(getGuide('how-policing-institutions-changed') as Guide),
      ...HISTORY_ENTRIES.filter((e) => /1829/.test(historyProse(e))).map(historyProse),
    ];
    for (const text of texts) {
      expect(
        /Metropolitan area of London/i.test(text),
        'a page mentions the 1829 Act without scoping it to the Metropolitan area',
      ).toBe(true);
    }
  });

  it('never treats a historical body as a current institution', () => {
    for (const e of HISTORY_ENTRIES) {
      for (const guideSlug of e.relatedGuides ?? []) {
        expect(
          getGuide(guideSlug),
          `${e.slug} relates to ${guideSlug}, which is not a published guide`,
        ).toBeDefined();
      }
    }
    expect(PUBLIC_ROUTE_PATHS).not.toContain('/institutions/dikasterion');
    expect(PUBLIC_ROUTE_PATHS).not.toContain('/institutions/railway-police');
  });
});

/* -------------------------------------------------------------------------- */
/* 2. The three waves agree about what institutions are                       */
/* -------------------------------------------------------------------------- */

describe('institutions are presented as chosen, not inevitable', () => {
  const INEVITABILITY: RegExp[] = [
    /\b(?:inevitably|naturally) (?:led to|produced|became)\b/i,
    /\bwas (?:always|bound to be) going to\b/i,
    /\bthe natural (?:evolution|progression) of\b/i,
    /\bevery (?:justice )?system (?:must|has to) have (?:a|an)\b/i,
  ];

  it.each(INEVITABILITY.map((p) => [p.source, p] as const))(
    'no undenied inevitability claim matching %s',
    (_src, pattern) => {
      const hits = CORPUS.split(/(?<=[.!?])\s+|\n+/).filter(
        (s) =>
          pattern.test(s) &&
          !/\bnot\b|\bno\b|\bnever\b|\bnothing\b/i.test(
            s.replace(new RegExp(pattern.source, 'gi'), ' '),
          ),
      );
      expect(hits, 'an institution presented as inevitable').toEqual([]);
    },
  );

  it('detects an inevitability claim when planted', () => {
    const planted = 'Professional policing was the natural evolution of earlier arrangements.';
    expect(/\bthe natural (?:evolution|progression) of\b/i.test(planted)).toBe(true);
  });

  it('records nine consecutive waves of no new institution record', () => {
    const institutionRoutes = PUBLIC_ROUTE_PATHS.filter((p) => p.startsWith('/institutions/'));
    expect(
      institutionRoutes.length,
      'an institution record was added; the QA documents say none was',
    ).toBe(15);
  });
});

/* -------------------------------------------------------------------------- */
/* 3. Source discipline holds across all three waves                          */
/* -------------------------------------------------------------------------- */

describe('every source added by these waves states what it does not support', () => {
  const WAVE_16_18_SOURCES = [
    'uk-fsr-act-2021',
    'uk-fsr-about',
    'uk-crimpr-2025-part19',
    'uk-coroners-justice-act-2009',
    'de-stpo-87-leichenschau',
    'de-stpo-73-78-sachverstaendiger',
    'de-stpo-81e-dna',
    'nist-ir-8351-dna-mixtures',
    'nist-scientific-foundation-reviews',
    'nl-nfi-about',
    'de-stgb-40-43-geldstrafe',
    'uk-sentencing-act-2020-thresholds',
    'uk-sentencing-act-2020-reports-guidelines',
    'uk-cja-2009-sentencing-council',
    'uk-prison-act-1952-s5a',
    'perseus-aristotle-athenian-constitution',
    'avalon-twelve-tables',
    'uk-habeas-corpus-act-1679',
    'uk-bill-of-rights-1689',
    'uk-homeoffice-policing-by-consent',
  ] as const;

  it.each(WAVE_16_18_SOURCES)('%s exists, is dated, and states its limits', (id) => {
    const s = getSource(id);
    expect(s, `${id} has gone`).toBeDefined();
    expect(s?.verifiedOn, `${id} has no verification date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(s?.note?.length ?? 0, `${id} has no note`).toBeGreaterThan(200);
    /*
     * The corpus's source notes state their negative scope in several genuine forms — "supports
     * nothing about", "establishes no line of descent", "no such claim is made", "does NOT
     * establish". The first version of this pattern accepted only some of them and reported five
     * notes as missing a limit they actually stated. Two of the five genuinely lacked one and
     * were extended; the pattern now matches the forms the corpus really uses.
     */
    expect(s?.note, `${id} does not say what it does NOT support`).toMatch(
      /supports? no\b|supports nothing|does not support|establishes no\b|does NOT establish|no such claim|nothing about|nothing is quoted|no claim/i,
    );
  });

  it('records every access limitation encountered rather than hiding it', () => {
    const notes = SOURCES.map((s) => s.note ?? '').join('\n');
    expect(notes, 'the NFI JavaScript limitation is not recorded').toMatch(/ACCESS NOTE/i);
    const inspection = guideProse(getGuide('who-inspects-a-prison') as Guide);
    expect(inspection, 'the OHCHR 403 is not recorded on the page').toMatch(/403/);
  });

  it('never cites a source whose own note says it was not used', () => {
    for (const g of ALL_GUIDES.filter((x) => x.status === 'published')) {
      for (const id of g.sources) {
        const note = getSource(id)?.note ?? '';
        expect(
          /is NOT used|Nothing is quoted from that draft/i.test(note) && !/final/i.test(note),
          `${g.slug} cites ${id}, whose note says it was not used`,
        ).toBe(false);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 4. The corpus stays internally consistent                                  */
/* -------------------------------------------------------------------------- */

describe('the three waves leave the corpus consistent', () => {
  it('no two published guides ask the same question', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    expect(questions.filter((q, i) => questions.indexOf(q) !== i)).toEqual([]);
  });

  it('no history entry duplicates a guide question', () => {
    const guideQuestions = new Set(
      ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
        g.question.toLowerCase().trim(),
      ),
    );
    for (const e of HISTORY_ENTRIES) {
      expect(
        guideQuestions.has(e.question.toLowerCase().trim()),
        `${e.slug} asks a question a guide already asks`,
      ).toBe(false);
    }
  });

  it('every guide in a safety-sensitive section carries a cleared safety review', () => {
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
    expect(ALL_GUIDES.filter((g) => g.status === 'published').length).toBeGreaterThan(100);
    expect(HISTORY_ENTRIES.length).toBe(7);
    expect(CORPUS.length).toBeGreaterThan(700_000);
  });
});
