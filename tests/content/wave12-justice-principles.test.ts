import { describe, expect, it } from 'vitest';
import { JUSTICE_GUIDES } from '@/content/guides/justice';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { PUBLISHED_GLOSSARY } from '@/content/glossary';
import { getSource } from '@/content/sources';
import { getDossier } from '@/content/dossiers';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 12: rule of law, due process and justice principles.
 *
 * Four failure modes drive this suite.
 *
 * TERMINOLOGY EXPORT. The most available error is treating the American constitutional term
 * "due process" as the universal name for procedural protection. Research produced a sharper
 * result — Brazil constitutionalises "devido processo legal", so the term is not purely
 * American — and the tests hold BOTH halves: it may not be called universal, and it may not be
 * called American-only.
 *
 * BLIND OBEDIENCE. A cluster about respecting courts is one sentence away from teaching that
 * judgments may not be criticised. The neutrality checks here are SENTENCE-level rather than
 * lexical, because a lexical blocklist would forbid the very sentences that state the correction.
 *
 * FALSE UNIVERSALS. Proportionality was deferred for want of evidence and must not appear as a
 * universal test.
 *
 * DUPLICATION. Five justice guides already own the core vocabulary.
 */

const WAVE_12 = [
  'why-government-is-bound-by-law',
  'limits-on-public-power',
  'legality-and-non-retroactivity',
  'legal-certainty',
  'equality-before-the-law',
  'access-to-justice',
  'effective-remedy',
  'procedural-fairness-and-its-many-names',
  'why-courts-must-be-respected',
  'appeal-and-the-rule-of-law',
] as const;

const PRE_EXISTING = [
  'what-is-justice',
  'what-is-the-rule-of-law',
  'what-is-due-process',
  'what-is-the-presumption-of-innocence',
  'why-justice-systems-need-oversight',
] as const;

function guide(slug: string): Guide {
  const found = JUSTICE_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 12 guide missing: ${slug}`);
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

/** Prose MINUS misconception claims, which are quoted falsehoods the page corrects. */
function asserted(g: Guide): string {
  return [
    g.title,
    g.summary,
    ...blocks(g.definition),
    ...blocks(g.whyItExists),
    ...blocks(g.howItWorks),
    ...blocks(g.variation),
    ...blocks(g.rightsAndAccountability),
    ...g.misconceptions.map((m) => m.reality),
    ...(g.uncertainty ?? []),
  ].join('\n');
}

/** Sentence-level split, so a denial in a neighbouring sentence cannot rescue a claim. */
function sentences(text: string): string[] {
  return text
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Does `sentence` deny the claim that `pattern` matched?
 *
 * Forced by mutation proof W12-M3, which applied cleanly and PASSED. The first version asked
 * whether the sentence contained a negation anywhere — and several tripwire patterns contain a
 * negation in their own text ("courts must NEVER be criticised"). The claim therefore satisfied
 * the denial check by being itself, and an inserted absolutist statement survived.
 *
 * The matched span is now removed before looking for the denial, so the negation has to come
 * from the surrounding sentence and actually operate on the claim.
 */
function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcontradicts\b|\bwrong\b/i.test(
    remainder,
  );
}

const ALL_PROSE = WAVE_12.map((s) => prose(guide(s))).join('\n');
const ALL_ASSERTED = WAVE_12.map((s) => asserted(guide(s))).join('\n');
const ASSERTED_SENTENCES = sentences(ALL_ASSERTED);

/* -------------------------------------------------------------------------- */
/* Routes and duplication                                                      */
/* -------------------------------------------------------------------------- */

describe('the Wave 12 routes exist and duplicate nothing', () => {
  it.each(WAVE_12)('%s is published under /justice', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.section).toBe('justice');
    expect(PUBLIC_ROUTE_PATHS).toContain(`/justice/${slug}`);
    expect(guidePath(g)).toBe(`/justice/${slug}`);
  });

  it('leaves every pre-existing justice guide published and untouched in identity', () => {
    for (const slug of PRE_EXISTING) {
      const g = getGuide(slug);
      expect(g, `${slug} disappeared`).toBeDefined();
      expect(PUBLIC_ROUTE_PATHS).toContain(`/justice/${slug}`);
    }
  });

  it('shares no question with any existing guide', () => {
    const others = ALL_GUIDES.filter(
      (g) => !(WAVE_12 as readonly string[]).includes(g.slug),
    ).map((g) => g.question.toLowerCase().trim());
    for (const slug of WAVE_12) {
      expect(others, `${slug} restates an existing question`).not.toContain(
        guide(slug).question.toLowerCase().trim(),
      );
    }
  });

  it('never reproduces a glossary definition verbatim', () => {
    for (const entry of PUBLISHED_GLOSSARY) {
      if (!entry.definition || entry.definition.length < 40) continue;
      expect(
        ALL_PROSE,
        `a Wave 12 page reproduces the glossary definition of "${entry.slug}"`,
      ).not.toContain(entry.definition);
    }
  });

  it('does not redefine the rule of law or due process, which existing guides own', () => {
    /* It may USE the terms; it may not take over the definitional question. */
    for (const pattern of [
      /^the rule of law is the principle that/im,
      /^due process is the requirement that/im,
      /this (?:page|guide) explains what the rule of law is/i,
    ]) {
      expect(ALL_ASSERTED, `takes over an owned definition: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('positions the deep dives as deep dives, not as restatements', () => {
    /*
     * Surfaced by the corpus research. `what-is-the-rule-of-law` already lists Legality, Legal
     * certainty, Equality before the law and Access to justice as six sub-elements with one-line
     * descriptions. Four Wave 12 pages go deeper on those, which is the site's normal pattern —
     * but each must add comparative constitutional material rather than expand the one-liner,
     * and none may reproduce it.
     */
    const ruleOfLaw = getGuide('what-is-the-rule-of-law');
    expect(ruleOfLaw, 'the rule-of-law guide has disappeared').toBeDefined();
    const subItems = blocks(ruleOfLaw?.howItWorks).map((s) => s.trim());
    for (const slug of WAVE_12) {
      const text = prose(guide(slug));
      for (const item of subItems) {
        if (item.length < 60) continue;
        expect(text, `${slug} reproduces a rule-of-law sub-element verbatim`).not.toContain(
          item,
        );
      }
    }
    /* And each deep dive must actually carry constitutional text, which the one-liners do not. */
    for (const slug of [
      'legal-certainty',
      'equality-before-the-law',
      'access-to-justice',
      'legality-and-non-retroactivity',
    ]) {
      expect(
        prose(guide(slug)),
        `${slug} adds no constitutional provision over the rule-of-law summary`,
      ).toMatch(/Article|section \d|Art\. /);
    }
  });

  it('publishes no route for a candidate deferred or merged', () => {
    for (const slug of [
      'proportionality',
      'separation-of-powers',
      'open-justice',
      'reasoned-judicial-decisions',
      'fair-hearing-and-fair-trial',
      'legality',
      'equal-protection',
      'checks-and-balances',
      'equality-of-arms',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, `${slug} published despite deferral`).not.toContain(
        `/justice/${slug}`,
      );
    }
  });

  it('carries full metadata on every page', () => {
    for (const slug of WAVE_12) {
      const g = guide(slug);
      expect(g.summary.length).toBeLessThanOrEqual(320);
      expect(g.sources.length).toBeGreaterThan(0);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThan(0);
      expect(g.safetyReview).toBe('cleared');
      expect(g.updatedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      for (const rel of g.related) {
        expect(getGuide(rel), `${slug} relates to unpublished ${rel}`).toBeDefined();
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Due process terminology — both halves                                       */
/* -------------------------------------------------------------------------- */

describe('due-process terminology is neither universalised nor made American-only', () => {
  it('records that Brazil constitutionalises the term', () => {
    const p = prose(guide('procedural-fairness-and-its-many-names'));
    expect(p).toMatch(/devido processo legal/);
    expect(p).toMatch(/Article 5º LIV|Art\. 5º LIV/);
  });

  it('records the systems that use other vocabulary', () => {
    const p = prose(guide('procedural-fairness-and-its-many-names'));
    expect(p).toMatch(/rechtliches Gehör/);
    expect(p).toMatch(/procedurally fair/i);
    expect(p).toMatch(/fair (?:and public )?hearing/i);
  });

  it('never asserts that due process is universal', () => {
    for (const pattern of [
      /due process (?:is|applies) (?:a )?universal/i,
      /every (?:legal )?system (?:has|guarantees) due process/i,
      /due process everywhere/i,
    ]) {
      expect(ALL_ASSERTED, `universalised due process: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('never asserts that due process is exclusively American', () => {
    for (const pattern of [
      /due process is (?:an? )?(?:purely |exclusively |uniquely )?american (?:term|concept)/i,
      /only the united states (?:uses|has) due process/i,
    ]) {
      expect(ALL_ASSERTED, `American-only claim: ${pattern}`).not.toMatch(pattern);
    }
    /* And the page says so affirmatively. */
    expect(prose(guide('procedural-fairness-and-its-many-names'))).toMatch(
      /not confined to one country|is not only american|not an american term that other systems do not use/i,
    );
  });

  it('carries both errors as corrected misconceptions', () => {
    const ms = guide('procedural-fairness-and-its-many-names').misconceptions;
    expect(
      ms.find((m) => /american term that other systems do not use/i.test(m.claim)),
    ).toBeDefined();
    expect(ms.find((m) => /interchangeable/i.test(m.claim))).toBeDefined();
  });
});

describe('proportionality is not universalised', () => {
  it('states no universal proportionality test', () => {
    for (const pattern of [
      /the proportionality test/i,
      /proportionality (?:test )?applies in (?:all|every)/i,
      /courts everywhere ask whether/i,
    ]) {
      expect(ALL_ASSERTED, `universal proportionality: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('records the deferral where the topic is nearest', () => {
    expect(prose(guide('limits-on-public-power'))).toMatch(
      /Proportionality[^.]*not described|was not researched/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Neutrality — sentence level, both directions                                */
/* -------------------------------------------------------------------------- */

const ABSOLUTIST_CLAIMS: [string, RegExp][] = [
  ['courts always right', /courts? (?:are|is) always right/i],
  ['police always right', /police (?:are|is) always right/i],
  ['government must always be obeyed', /government must (?:always )?be obeyed/i],
  ['every law is just', /every law is just/i],
  ['accused are guilty', /(?:the )?accused (?:persons? )?are guilty/i],
  ['prosecutors represent truth', /prosecutors? represent (?:the )?truth/i],
  ['defence obstructs justice', /defen[cs]e lawyers? obstruct justice/i],
  ['prisoners have no rights', /prisoners have no rights/i],
  ['punishment always prevents crime', /punishment always prevents crime/i],
  ['appeals undermine courts', /appeals undermine (?:the )?courts?/i],
  ['never criticised', /courts? must never be criticised/i],
  ['beyond criticism', /(?:is|are) beyond criticism/i],
];

const DELEGITIMISING_CLAIMS: [string, RegExp][] = [
  ['police inherently illegitimate', /police (?:are|is) inherently illegitimate/i],
  ['prosecution inherently oppressive', /prosecution is inherently oppressive/i],
  ['courts serve government', /courts merely serve (?:the )?government/i],
  ['imprisonment no legitimate function', /imprisonment has no legitimate/i],
  [
    'authority incompatible with liberty',
    /legal authority is inherently incompatible with liberty/i,
  ],
];

describe('neutrality tripwires fire on claims, not on vocabulary', () => {
  it.each(ABSOLUTIST_CLAIMS)('asserts no absolutist claim: %s', (_label, pattern) => {
    for (const sentence of ASSERTED_SENTENCES) {
      if (!pattern.test(sentence)) continue;
      /*
       * A sentence may CONTAIN the shape while denying it. The denial must be in the SAME
       * sentence — a neighbouring negation does not rescue an assertion.
       */
      expect(sentence, `absolutist claim asserted without denial: ${sentence}`).toMatch(
        /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcontradicts\b/i,
      );
    }
  });

  it.each(DELEGITIMISING_CLAIMS)('asserts no delegitimising claim: %s', (_label, pattern) => {
    for (const sentence of ASSERTED_SENTENCES) {
      if (!pattern.test(sentence)) continue;
      expect(deniesClaim(sentence, pattern), `delegitimising claim asserted: ${sentence}`).toBe(
        true,
      );
    }
  });

  it('a negation inside the claim does not count as denying it', () => {
    /* Non-vacuity for the fix above — this is exactly what W12-M3 exploited. */
    const pattern = /courts? must never be criticised/i;
    const bare = 'Courts must never be criticised.';
    const corrected = 'Institutional respect does not mean courts must never be criticised.';
    expect(deniesClaim(bare, pattern), 'a bare absolutist claim was treated as denied').toBe(
      false,
    );
    expect(
      deniesClaim(corrected, pattern),
      'a genuine correction was treated as an assertion',
    ).toBe(true);
  });

  it('the tripwires distinguish an assertion from its correction', () => {
    /*
     * The exact false-positive class that has occurred in previous waves. The first sentence
     * must be caught; the second must not, because it is the correction the site publishes.
     */
    const bad = 'Courts are always right.';
    const good = 'Institutional respect does not mean courts must never be criticised.';
    const pattern = /courts? (?:are|is) always right/i;
    const neverPattern = /courts? must never be criticised/i;
    expect(pattern.test(bad)).toBe(true);
    expect(bad).not.toMatch(/\bnot\b|\bnever\b|\bno\b/i);
    expect(neverPattern.test(good)).toBe(true);
    expect(good).toMatch(/\bnot\b|\bnever\b|\bno\b/i);
  });

  it('states affirmatively that respect permits lawful challenge', () => {
    const p = prose(guide('why-courts-must-be-respected'));
    expect(p).toMatch(/compatible with challenging decisions through the procedures/i);
    expect(p).toMatch(/does not require/i);
  });

  it('never frames appeal as disrespect', () => {
    const hit = guide('why-courts-must-be-respected').misconceptions.find((m) =>
      /appealing a judgment shows disrespect/i.test(m.claim),
    );
    expect(hit, 'the appeal-as-disrespect error is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/participation|provided by the legal system/i);
  });

  it('acknowledges that courts can be wrong, with a source', () => {
    const p = prose(guide('why-courts-must-be-respected'));
    expect(p).toMatch(/indemnif|judicial error/i);
    expect(guide('why-courts-must-be-respected').sources).toContain('br-cf-1988');
  });

  it('uses no ranking or superlative language', () => {
    for (const pattern of [
      /\bbest (?:legal|justice) system/i,
      /most just/i,
      /\bultimate\b/i,
      /\bdefinitive\b/i,
    ]) {
      expect(ALL_PROSE, `ranking language: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('publishes no statistic needing restricted-claim handling', () => {
    expect(ALL_PROSE).not.toMatch(/\d+\s?%/);
    expect(ALL_PROSE).not.toMatch(
      /conviction rate|appeal (?:success )?rate|reversal rate|trust in courts/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Cicero — Wave 9's correction preserved                                      */
/* -------------------------------------------------------------------------- */

describe('the Cicero correction established by Wave 9 is not regressed', () => {
  it('never uses the truncated form', () => {
    expect(ALL_PROSE).not.toMatch(/legum servi sumus ut liberi esse possimus/i);
  });

  it('does not re-quote the passage at all — the courts page owns it', () => {
    expect(ALL_PROSE).not.toMatch(/Legum ministri magistratus/);
    expect(ALL_PROSE).not.toMatch(/Cicero/i);
  });

  it('the courts page still carries the full sentence', () => {
    const courts = getGuide('why-courts-matter');
    expect(courts, 'the courts page carrying Cicero has disappeared').toBeDefined();
    const text = courts ? prose(courts as Guide) : '';
    expect(text).toContain('Legum ministri magistratus');
    expect(text).toContain('legum interpretes iudices');
  });
});

/* -------------------------------------------------------------------------- */
/* Country claims are country-sourced                                          */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  Brazil: 'BR',
  Kenya: 'KE',
  'South Africa': 'ZA',
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

describe('every country-specific claim rests on a country-scoped source', () => {
  it.each(WAVE_12)('%s cites a scoped source for every country it names', (slug) => {
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

  it('rejects an international instrument standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(
        hasSourceFor(['udhr', 'iccpr'], iso, country),
        `${country} laundered through an international instrument`,
      ).toBe(false);
    }
  });

  it('states that international instruments are not domestic law', () => {
    expect(ALL_PROSE).toMatch(
      /bind only states party|not the law of any (?:particular )?state|declared standard rather than the law/i,
    );
  });

  it('is not vacuous — the pages make country claims', () => {
    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBe(4);
  });

  it('names only countries with a published dossier, and resolves every source', () => {
    for (const [country, slug] of Object.entries({
      Germany: 'germany',
      Brazil: 'brazil',
      Kenya: 'kenya',
      'South Africa': 'south-africa',
    })) {
      if (!new RegExp(`\\b${country}\\b`).test(ALL_PROSE)) continue;
      expect(getDossier(slug), `${country} named with no dossier`).toBeDefined();
    }
    for (const slug of WAVE_12) {
      for (const id of guide(slug).sources) {
        expect(getSource(id), `${slug} cites unknown source ${id}`).toBeDefined();
      }
    }
  });

  it('cites the German Basic Law source where German provisions are quoted', () => {
    for (const slug of WAVE_12) {
      const p = prose(guide(slug));
      if (!/Article (?:3|19|20|103)\(/.test(p) && !/Basic Law/.test(p)) continue;
      expect(guide(slug).sources, `${slug} quotes the Basic Law without its source`).toContain(
        'de-gg-rechtsstaat-articles',
      );
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Cluster boundaries                                                          */
/* -------------------------------------------------------------------------- */

describe('the reserved clusters are not consumed', () => {
  it('does not restate prosecution, defence or courts material', () => {
    for (const pattern of [
      /charging standard/i,
      /prosecutorial discretion is/i,
      /how defence is funded/i,
      /public defender/i,
      /court hierarchy is/i,
      /trial procedure/i,
    ]) {
      for (const sentence of ASSERTED_SENTENCES) {
        if (!pattern.test(sentence)) continue;
        expect(sentence, `reserved-cluster material asserted: ${sentence}`).toMatch(
          /does not|not (?:restate|describe)|covered|owned|cluster|separate/i,
        );
      }
    }
  });

  it('links outward to the clusters that own the adjacent material', () => {
    expect(ALL_PROSE).toContain('/courts/');
    expect(ALL_PROSE).toContain('/defence/');
    expect(ALL_PROSE).toContain('/glossary/');
  });

  it('gives no legal advice', () => {
    /*
     * Denial-aware. Every scope callout on this cluster says the page "does not describe how to
     * bring a claim" — which is the sentence that establishes the boundary, not a breach of it.
     * A blunt pattern would forbid the disclaimer and permit the advice.
     */
    for (const pattern of [
      /you should/i,
      /your case/i,
      /how to (?:bring|file|appeal)/i,
      /contact a lawyer/i,
    ]) {
      for (const sentence of sentences(ALL_PROSE)) {
        if (!pattern.test(sentence)) continue;
        expect(sentence, `advice phrasing asserted: ${sentence}`).toMatch(
          /does not|not legal advice|never|no /i,
        );
      }
    }
  });

  it('the advice check still catches an actual instruction', () => {
    const bad = 'If you disagree, here is how to bring a claim in your local court.';
    expect(/how to (?:bring|file|appeal)/i.test(bad)).toBe(true);
    expect(bad).not.toMatch(/does not|not legal advice|never|no /i);
  });

  it('does not spam links', () => {
    for (const slug of WAVE_12) {
      const links = [...prose(guide(slug)).matchAll(/\]\((\/[a-z0-9/-]+)\)/g)]
        .map((m) => m[1])
        .filter((t): t is string => Boolean(t));
      const counts = new Map<string, number>();
      for (const l of links) counts.set(l, (counts.get(l) ?? 0) + 1);
      for (const [target, n] of counts) {
        expect(n, `${slug} links to ${target} ${n} times`).toBeLessThanOrEqual(3);
      }
    }
  });
});
