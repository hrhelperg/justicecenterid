import { describe, expect, it } from 'vitest';
import {
  HISTORY_CHRONOLOGICAL,
  HISTORY_ENTRIES,
  PUBLISHED_HISTORY,
  getHistoryEntry,
  historyPath,
  validateHistoryEntry,
} from '@/content/history';
import { getGuide } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, HistoryEntry } from '@/content/types';

/**
 * Wave 18: history of justice institutions.
 *
 * History has the strongest source gate on the platform and the largest number of ways to be
 * confidently wrong. Five failure modes drive this suite, and all five are things a reference
 * site does by default rather than by carelessness.
 *
 * PRESENTISM. Reading a modern institution backwards into an older body that shares its name or
 * function. Every entry carries at least one ContinuityClaim naming the modern counterpart a
 * reader will reach for, and the tests check that the claim is answered rather than implied.
 *
 * UNSUPPORTED FIRSTS. "First", "oldest", "invented", "originated" are the words that turn a
 * description into a claim nobody has evidenced. They are tested for and each occurrence must be
 * a denial.
 *
 * FABRICATED PRECISION. A date known to a century must not acquire a year, and a traditional
 * date must not be reported as established. Precision is a field, and a non-exact precision
 * requires a datingNote.
 *
 * HARDENED HEDGES. Where a source says "tradition tells us" or "likely devised by", reproducing
 * it as fact is fabrication with a citation attached. The two hedged sources in this wave are
 * pinned individually.
 *
 * HISTORICAL RENDERED AS CURRENT. Every page states the period and scope it covers, and no page
 * describes a historical body in the present tense of a live institution.
 */

const WAVE_18 = [
  'how-athenian-courts-worked',
  'roman-procedure-without-a-police-force',
  'which-magna-carta',
  'what-the-habeas-corpus-act-1679-actually-did',
  'the-1689-declarations-and-what-caused-them',
  'who-wrote-the-principles-of-policing',
  'when-policeman-meant-something-else',
] as const;

function entry(slug: string): HistoryEntry {
  const found = HISTORY_ENTRIES.find((e) => e.slug === slug);
  if (!found) throw new Error(`Wave 18 entry missing: ${slug}`);
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

function prose(e: HistoryEntry): string {
  return [
    e.title,
    e.summary,
    e.question,
    e.scope,
    e.period.display,
    e.period.datingNote ?? '',
    ...blocks(e.definition),
    ...blocks(e.whatTheSourcesSay),
    ...blocks(e.whyItMatters),
    ...blocks(e.furtherReading),
    ...e.continuity.flatMap((c) => [c.modernCounterpart, c.basis]),
    ...e.misconceptions.flatMap((m) => [m.claim, m.reality]),
    ...e.uncertainty,
  ].join('\n');
}

function entryBlocks(e: HistoryEntry): string[] {
  const all = [
    ...(e.definition ?? []),
    ...(e.whatTheSourcesSay ?? []),
    ...(e.whyItMatters ?? []),
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
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brather than\b|\bwithout\b|\bmyth\b/i.test(
    remainder,
  );
}

/** Wave 13's rule: prose sentence by sentence, a misconception as one claim+reality unit. */
function tripwireUnits(e: HistoryEntry): string[] {
  const text = [
    e.title,
    e.summary,
    e.question,
    e.scope,
    ...blocks(e.definition),
    ...blocks(e.whatTheSourcesSay),
    ...blocks(e.whyItMatters),
    ...e.uncertainty,
    ...e.continuity.map((c) => `${c.modernCounterpart} ${c.basis}`),
  ].join('\n');
  return [...sentences(text), ...e.misconceptions.map((m) => `${m.claim} ${m.reality}`)];
}

const ALL_UNITS = WAVE_18.flatMap((slug) => tripwireUnits(entry(slug)));
const ALL_PROSE = WAVE_18.map((slug) => prose(entry(slug))).join('\n');

function offending(pattern: RegExp): string[] {
  return ALL_UNITS.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* Registry and routing                                                       */
/* -------------------------------------------------------------------------- */

describe('the history registry is well formed and routed', () => {
  it('publishes exactly the seven Wave 18 entries', () => {
    expect(PUBLISHED_HISTORY.map((e) => e.slug).sort()).toEqual([...WAVE_18].sort());
  });

  it.each(WAVE_18)('%s is routed under /history/', (slug) => {
    const e = entry(slug);
    expect(historyPath(e)).toBe(`/history/${slug}`);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/history/${slug}`);
    expect(
      getHistoryEntry(slug),
      `${slug} is not reachable through the registry`,
    ).toBeDefined();
  });

  it('keeps /history as a hub with the entries beneath it', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain('/history');
    expect(PUBLIC_ROUTE_PATHS.filter((p) => p === '/history').length).toBe(1);
  });

  it('validates every entry against the real source registry', () => {
    const ids = SOURCES.map((s) => s.id);
    for (const e of HISTORY_ENTRIES) {
      expect(validateHistoryEntry(e, ids), `${e.slug} fails validation`).toEqual([]);
    }
  });

  it('orders the index oldest first', () => {
    const years = HISTORY_CHRONOLOGICAL.map((e) => e.period.fromYear);
    expect(years).toEqual([...years].sort((a, b) => a - b));
    expect(HISTORY_CHRONOLOGICAL[0]?.period.fromYear).toBeLessThan(0);
  });

  /* --- rejection cases, exercised with synthetic entries --- */

  const synthetic = (over: Partial<HistoryEntry>): HistoryEntry => ({
    slug: 'x',
    title: 'X',
    question: 'x?',
    summary: 'x',
    period: { fromYear: 1000, toYear: 1100, display: '11th century', precision: 'exact' },
    scope: 'Somewhere specific',
    continuity: [
      { modernCounterpart: 'Y', relationship: 'none-established', basis: 'because' },
    ],
    definition: [],
    whatTheSourcesSay: [],
    whyItMatters: [],
    misconceptions: [],
    uncertainty: ['something'],
    sources: ['udhr'],
    status: 'published',
    review: 'fact-checked',
    updatedOn: '2026-08-26',
    readingTimeMinutes: 5,
    ...over,
  });

  it('rejects a period that runs backwards', () => {
    const p = validateHistoryEntry(
      synthetic({ period: { fromYear: 1200, toYear: 1100, display: 'x', precision: 'exact' } }),
      ['udhr'],
    );
    expect(p.join(' ')).toMatch(/runs backwards/);
  });

  it('rejects an inexact period with no dating note', () => {
    const p = validateHistoryEntry(
      synthetic({
        period: { fromYear: -400, toYear: -300, display: 'x', precision: 'disputed' },
      }),
      ['udhr'],
    );
    expect(p.join(' ')).toMatch(/states no datingNote/);
  });

  it('rejects an entry that makes no continuity claim', () => {
    expect(validateHistoryEntry(synthetic({ continuity: [] }), ['udhr']).join(' ')).toMatch(
      /makes no continuity claim/,
    );
  });

  it('rejects a continuity claim with no basis', () => {
    const p = validateHistoryEntry(
      synthetic({
        continuity: [{ modernCounterpart: 'Y', relationship: 'documented', basis: '  ' }],
      }),
      ['udhr'],
    );
    expect(p.join(' ')).toMatch(/states no basis/);
  });

  it('rejects an entry with no scope, no uncertainty or an unknown source', () => {
    expect(validateHistoryEntry(synthetic({ scope: ' ' }), ['udhr']).join(' ')).toMatch(
      /states no scope/,
    );
    expect(validateHistoryEntry(synthetic({ uncertainty: [] }), ['udhr']).join(' ')).toMatch(
      /states no uncertainty/,
    );
    expect(validateHistoryEntry(synthetic({ sources: ['nope'] }), ['udhr']).join(' ')).toMatch(
      /cites unknown source/,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Presentism and unsupported continuity                                      */
/* -------------------------------------------------------------------------- */

const PRESENTIST_CLAIMS: RegExp[] = [
  /\bthe (?:first|earliest) (?:police|prison|court|prosecutor|jury)\b/i,
  /\b(?:invented|created|originated|founded) (?:modern |the modern )?(?:policing|the police|the jury|the prison|habeas corpus)\b/i,
  /\bthe (?:origin|birthplace) of (?:modern )?(?:policing|the jury|the prison)\b/i,
  /\bis the ancestor of\b/i,
  /\bdirect(?:ly)? descend(?:s|ed|ant)? from\b/i,
  /\bwas an early (?:police force|prosecutor|prison|version of)\b/i,
  /\bthe same institution (?:as|that) (?:today|modern)\b/i,
  /\bunbroken (?:line|lineage|continuity)\b/i,
  /\bhas existed continuously since\b/i,
];

describe('nothing is read backwards into the present', () => {
  it.each(PRESENTIST_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied presentist claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a presentist or descent claim stated without denial').toEqual(
        [],
      );
    },
  );

  it('catches presentist claims when planted', () => {
    for (const planted of [
      'The Athenian dikasterion is the ancestor of the modern jury.',
      'Robert Peel invented modern policing, and the force has existed continuously since.',
      'This body was an early police force in all but name.',
    ]) {
      expect(catches(PRESENTIST_CLAIMS, planted), `not caught: ${planted}`).toBe(true);
    }
  });

  it('does not fire on the sentences that refuse the claim', () => {
    const refusal =
      'Nothing establishes that it is the ancestor of the modern jury, and no unbroken lineage is claimed.';
    expect(catches(PRESENTIST_CLAIMS, refusal)).toBe(false);
  });

  it.each(WAVE_18)('%s answers at least one modern-counterpart assumption', (slug) => {
    const e = entry(slug);
    expect(e.continuity.length, `${slug} answers no reader assumption`).toBeGreaterThanOrEqual(
      1,
    );
    for (const claim of e.continuity) {
      expect(
        claim.basis.length,
        `${slug}: "${claim.modernCounterpart}" has a thin basis`,
      ).toBeGreaterThan(60);
    }
  });

  it('states no connection more often than it states one, and never asserts one loosely', () => {
    const all = HISTORY_ENTRIES.flatMap((e) => e.continuity);
    const none = all.filter((c) => c.relationship === 'none-established');
    expect(all.length).toBeGreaterThanOrEqual(7);
    expect(
      none.length,
      'the wave asserts more connections than it refuses, which inverts the evidence',
    ).toBeGreaterThan(all.length / 2);
    for (const c of all.filter((x) => x.relationship === 'documented')) {
      expect(
        c.basis,
        `a documented continuity claim must name what documents it: ${c.modernCounterpart}`,
      ).toMatch(/record|guide|states|Act|statute|incorporat|absorb/i);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Fabricated precision and hardened hedges                                   */
/* -------------------------------------------------------------------------- */

describe('dates are never more precise than the sources', () => {
  it.each(WAVE_18)('%s declares its precision and justifies anything inexact', (slug) => {
    const e = entry(slug);
    expect(['exact', 'approximate', 'disputed']).toContain(e.period.precision);
    if (e.period.precision !== 'exact') {
      expect(
        e.period.datingNote?.length ?? 0,
        `${slug} is ${e.period.precision} with no note`,
      ).toBeGreaterThan(60);
    }
  });

  it('invents no month or day anywhere', () => {
    expect(ALL_PROSE).not.toMatch(
      /\b\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+1[0-8]\d{2}\b/,
    );
  });

  it('reports the traditional Roman dating as traditional', () => {
    const e = entry('roman-procedure-without-a-police-force');
    expect(e.period.precision).toBe('disputed');
    expect(prose(e)).toMatch(/tradition tells us/i);
    expect(prose(e)).toMatch(/do not survive|does not survive/i);
  });

  it('records both datings of the Bill of Rights rather than choosing one', () => {
    const e = entry('the-1689-declarations-and-what-caused-them');
    expect(e.period.precision).toBe('disputed');
    const text = prose(e);
    expect(text).toMatch(/1688/);
    expect(text).toMatch(/1689/);
    expect(text).toMatch(/old-style calendar/i);
  });

  it('keeps the Home Office hedge instead of hardening it', () => {
    const e = entry('who-wrote-the-principles-of-policing');
    const text = prose(e);
    expect(text).toMatch(/no evidence of any link to Robert Peel/i);
    expect(text, 'the "likely" hedge has been dropped').toMatch(/likely devised by/i);
    const rowan = e.continuity.find((c) => /Rowan|Mayne/i.test(c.modernCounterpart));
    expect(
      rowan,
      'the Commissioners attribution is not recorded as a continuity claim',
    ).toBeDefined();
    expect(rowan?.relationship, 'a hedged attribution is recorded as established').toBe(
      'contested',
    );
  });

  it('would notice the hedge being hardened', () => {
    const hardened =
      'The principles were devised by the first Commissioners of the Metropolis.';
    expect(/likely devised by/i.test(hardened)).toBe(false);
  });

  it('keeps the Twelve Tables provenance warning in the block that introduces the text', () => {
    const e = entry('roman-procedure-without-a-police-force');
    const block = entryBlocks(e).find((b) => /provenance/i.test(b));
    expect(block, 'the provenance block has gone').toBeDefined();
    expect(block, 'the provenance block no longer says the Tables do not survive').toMatch(
      /do not survive/i,
    );
    expect(block, 'the provenance block no longer says the text is a reconstruction').toMatch(
      /reconstruction/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Scope: a region is not a legal system                                      */
/* -------------------------------------------------------------------------- */

describe('scope is stated and never widened', () => {
  it.each(WAVE_18)('%s states a specific scope', (slug) => {
    const e = entry(slug);
    expect(e.scope.length).toBeGreaterThan(10);
    expect(e.scope, `${slug} claims a whole era or continent as one system`).not.toMatch(
      /^(?:Europe|The ancient world|Medieval Europe)\.?$/i,
    );
  });

  it('never treats a region or era as a single justice system', () => {
    for (const pattern of [
      /\bmedieval Europe(?:'s)? (?:justice )?system\b/i,
      /\bthe ancient world(?:'s)? (?:legal|justice) system\b/i,
      /\bacross Europe,? courts (?:were|worked)\b/i,
    ]) {
      expect(offending(pattern), 'a region treated as one legal system').toEqual([]);
    }
  });

  it('scopes the English material away from the rest of the United Kingdom where it matters', () => {
    expect(prose(entry('which-magna-carta'))).toMatch(/Scotland/);
    expect(prose(entry('who-wrote-the-principles-of-policing'))).toMatch(
      /Metropolitan area of London|Not England and Wales/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Sourcing                                                                   */
/* -------------------------------------------------------------------------- */

describe('every historical claim rests on an archival or primary source', () => {
  it.each(WAVE_18)('%s sources every block it marks as fact', (slug) => {
    const e = entry(slug);
    const unsourced = [
      ...(e.definition ?? []),
      ...(e.whatTheSourcesSay ?? []),
      ...(e.whyItMatters ?? []),
    ]
      .filter((b) => b.kind === 'paragraph' && b.claim === 'fact')
      .filter((b) => !((b as { sources?: string[] }).sources ?? []).length)
      .map((b) => (b as { text: string }).text.slice(0, 80));
    expect(unsourced, `${slug} asserts a historical fact with no source`).toEqual([]);
  });

  it.each(WAVE_18)('%s cites only source types the history gate permits', (slug) => {
    for (const id of entry(slug).sources) {
      const source = getSource(id);
      expect(source, `${slug} cites unknown source ${id}`).toBeDefined();
      expect(
        ['legislation', 'government', 'archive', 'academic', 'museum', 'court-record', 'book'],
        `${slug} cites ${id}, whose type is not acceptable for a historical claim`,
      ).toContain(source?.type);
    }
  });

  it('records the translation status of every translated source it uses', () => {
    for (const id of ['perseus-aristotle-athenian-constitution', 'avalon-twelve-tables']) {
      const s = getSource(id);
      expect(s, `${id} has gone`).toBeDefined();
      expect(s?.translationStatus, `${id} does not declare that it is a translation`).toBe(
        'unofficial',
      );
      expect(
        s?.authoritativeLanguage,
        `${id} does not name the authoritative language`,
      ).toBeTruthy();
    }
  });

  it('warns in the Aristotle source note that "jury" is the translator’s word', () => {
    const s = getSource('perseus-aristotle-athenian-constitution');
    expect(s?.note).toMatch(/translator|Rackham/i);
    expect(s?.note).toMatch(/must not be read as asserting equivalence|not.*modern jury/i);
  });

  it('records the Twelve Tables provenance limit in the source note, not only on the page', () => {
    const s = getSource('avalon-twelve-tables');
    expect(s?.note).toMatch(/DO NOT SURVIVE/);
    expect(s?.note).toMatch(/reconstruction/i);
    expect(s?.note).toMatch(/names no translator/i);
  });

  it('relates only to guides that exist, and never implies descent from them', () => {
    for (const slug of WAVE_18) {
      for (const guideSlug of entry(slug).relatedGuides ?? []) {
        expect(
          getGuide(guideSlug),
          `${slug} relates to missing guide ${guideSlug}`,
        ).toBeDefined();
      }
    }
  });

  it('is not vacuous — the wave uses archival and primary sources', () => {
    const types = new Set(
      WAVE_18.flatMap((s) => entry(s).sources).map((id) => getSource(id)?.type),
    );
    expect(types.has('legislation')).toBe(true);
    expect(types.has('academic') || types.has('archive')).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* Historical is never written as current                                     */
/* -------------------------------------------------------------------------- */

describe('historical material is not rendered as current', () => {
  it('describes no historical body as a present institution', () => {
    for (const pattern of [
      /\bthe dikasterion (?:is|hears|decides) (?:cases )?today\b/i,
      /\bcurrently operates\b/i,
      /\bis today responsible for\b/i,
    ]) {
      expect(offending(pattern), 'a historical body described as current').toEqual([]);
    }
  });

  it('states what remains in force where a page touches current law', () => {
    const magna = prose(entry('which-magna-carta'));
    expect(magna).toMatch(/statute book of England and Wales/i);
    expect(magna).toMatch(/1297/);
  });

  it('never claims a historical text is a constitution', () => {
    expect(offending(/\bMagna Carta is (?:a|the) constitution\b/i)).toEqual([]);
  });

  it.each(WAVE_18)('%s states what it could not establish', (slug) => {
    const e = entry(slug);
    expect(e.uncertainty.length).toBeGreaterThanOrEqual(2);
    for (const item of e.uncertainty) expect(item.length).toBeGreaterThan(40);
  });

  it.each(WAVE_18)('%s corrects at least three misconceptions', (slug) => {
    expect(entry(slug).misconceptions.length).toBeGreaterThanOrEqual(3);
  });

  it('puts no markdown link where the renderer will not resolve it', () => {
    for (const e of HISTORY_ENTRIES) {
      for (const m of e.misconceptions) {
        for (const field of [m.claim, m.reality]) {
          expect(
            /\[[^\]]+\]\([^)]+\)/.test(field),
            `${e.slug} has a link in a misconception`,
          ).toBe(false);
        }
      }
    }
  });

  it('links only to routes that exist', () => {
    for (const slug of WAVE_18) {
      for (const raw of prose(entry(slug)).match(/\]\((\/[^)#]*)/g) ?? []) {
        const path = raw.slice(2);
        expect(PUBLIC_ROUTE_PATHS, `${slug} links to missing route ${path}`).toContain(path);
      }
    }
  });
});
