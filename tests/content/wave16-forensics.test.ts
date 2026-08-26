import { describe, expect, it } from 'vitest';
import { FORENSICS_GUIDES } from '@/content/guides/forensics';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { getSource } from '@/content/sources';
import { getSection } from '@/content/sections';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import { SAFETY_SENSITIVE_SECTIONS } from '@/content/types';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 16: forensics and evidence systems.
 *
 * Three failure modes drive this suite.
 *
 * SCIENTIFIC OVERCLAIM, IN BOTH DIRECTIONS. "DNA proves guilt" is the obvious error. "Forensic
 * science has been shown to be unreliable" is the same error with the sign flipped, and it is
 * the one a site that talks carefully about limits is most likely to drift into. Both lists are
 * tested, and a test confirms that the sentence stating the correction fires neither.
 *
 * ANTI-FORENSIC LEAKAGE. This is the wave's distinctive risk and it needs a distinctive guard.
 * A naive substring test would flag the safety disclaimers — every page here contains a sentence
 * saying it does not describe how a result could be affected — which is why the check below is
 * DIRECTIONAL: it asks whether a sentence is an affirmative operational instruction, not whether
 * it contains the words. Mutation-tested in both directions.
 *
 * FALSE TERMINOLOGICAL EQUIVALENCE. Coroner and medical examiner are different offices in the
 * one jurisdiction where both words are native. Court-appointed and party-instructed experts are
 * different arrangements. Integrity and admissibility are different questions. Each is pinned.
 */

const WAVE_16 = [
  'what-forensic-science-cannot-decide',
  'expert-evidence-in-court',
  'who-regulates-forensic-science',
  'what-forensic-laboratories-do',
  'the-limits-of-forensic-evidence',
  'what-dna-analysis-establishes',
  'who-investigates-a-death',
  'evidence-integrity-and-admissibility',
] as const;

/** Owned by the pre-existing guide. Wave 16 preserves it and may not restate it. */
const PRE_EXISTING = 'what-is-forensic-science';

function guide(slug: string): Guide {
  const found = FORENSICS_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 16 guide missing: ${slug}`);
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

/** Only the fields the restricted-claim scanner reads. */
function scannedProse(g: Guide): string {
  return [
    ...blocks(g.definition),
    ...blocks(g.whyItExists),
    ...blocks(g.howItWorks),
    ...blocks(g.variation),
    ...blocks(g.rightsAndAccountability),
  ].join('\n');
}

/** Whole blocks, kept intact — the unit Waves 13 to 15 converged on for co-location checks. */
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

/** Wave 12's helper, unchanged: the matched span is stripped so the denial cannot be the claim. */
function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brarely\b|\bless\b/i.test(
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

const ALL_UNITS = WAVE_16.flatMap((slug) => tripwireUnits(guide(slug)));
const ALL_PROSE = WAVE_16.map((slug) => prose(guide(slug))).join('\n');

function offending(pattern: RegExp): string[] {
  return ALL_UNITS.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* Routing and registration                                                   */
/* -------------------------------------------------------------------------- */

describe('the forensics section is populated and routed', () => {
  it('publishes exactly the eight Wave 16 guides', () => {
    expect(FORENSICS_GUIDES.map((g) => g.slug).sort()).toEqual([...WAVE_16].sort());
  });

  it.each(WAVE_16)('%s is registered and routes under /forensics/', (slug) => {
    const g = getGuide(slug);
    expect(g, `${slug} is not reachable through the guide registry`).toBeDefined();
    expect(g?.section).toBe('forensics');
    expect(guidePath(g as Guide)).toBe(`/forensics/${slug}`);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/forensics/${slug}`);
  });

  it('leaves the pre-existing guide and the section page in place', () => {
    expect(getGuide(PRE_EXISTING), 'the original forensics guide has gone').toBeDefined();
    expect(getGuide(PRE_EXISTING)?.section).toBe('forensics');
    expect(getSection('forensics')).toBeDefined();
  });

  it('is not vacuous — the section held one guide before this wave', () => {
    const published = ALL_GUIDES.filter(
      (g) => g.status === 'published' && g.section === 'forensics',
    );
    expect(published.length).toBe(WAVE_16.length + 1);
  });
});

describe('forensics is treated as safety-sensitive', () => {
  it('is on the safety-sensitive list', () => {
    expect(SAFETY_SENSITIVE_SECTIONS).toContain('forensics');
  });

  it.each(WAVE_16)('%s carries a completed safety review', (slug) => {
    expect(guide(slug).safetyReview, `${slug} publishes without a safety review`).toBe(
      'cleared',
    );
  });

  it.each(WAVE_16)('%s is fact-checked and dated', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.factsVerifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

/* -------------------------------------------------------------------------- */
/* Anti-forensic leakage — the wave's distinctive guard                       */
/* -------------------------------------------------------------------------- */

/**
 * Operational shapes this section must never carry.
 *
 * These match a TOPIC, not an instruction. The direction check below is what separates
 * "here is how to defeat X" from "this page does not describe how to defeat X" — and every page
 * in this wave contains a sentence of the second kind, so a lexical-only guard would report the
 * safety disclaimers as the violation.
 */
const ANTI_FORENSIC_TOPICS: RegExp[] = [
  /\b(?:destroy|degrade|remove|eliminate)\s+(?:the\s+)?DNA\b/i,
  /\bavoid(?:ing)?\s+(?:fingerprint|print)\s+(?:recovery|detection|deposit)/i,
  /\b(?:defeat|beat|circumvent|evade)\s+(?:a\s+|the\s+)?(?:toxicology|drug\s+test|forensic|digital\s+forensic|chain[- ]of[- ]custody)/i,
  /\b(?:wipe|sanitis|sanitiz|scrub)\w*\s+(?:a\s+|the\s+)?(?:device|drive|phone|computer|trace)/i,
  /\banti[- ]forensic\w*\b/i,
  /\bcontaminat\w+\s+(?:the\s+)?(?:scene|sample|evidence)\b/i,
  /\b(?:exploit|abuse)\s+(?:a\s+|the\s+)?(?:laboratory|detection|reporting)\s+threshold/i,
  /\bgunshot residue\s+(?:can be|is)\s+removed\b/i,
];

/**
 * Is `sentence` an AFFIRMATIVE operational instruction on the matched topic?
 *
 * The brief requires a guard that distinguishes an instruction from a disclaimer, and warns
 * against naive substring tests that punish safety language. Two signals are used together:
 *
 *   1. a negation or refusal governing the match — the text BEFORE it, on the reasoning Wave 14
 *      established for directives, because "this page does not describe how to …" negates
 *      forwards and an incidental later negation does not;
 *   2. explicit disclaimer vocabulary anywhere in the sentence, which is how these pages
 *      actually phrase the refusal.
 *
 * Anything that is neither is treated as an instruction and fails.
 */
function isOperationalInstruction(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  const negatedForwards =
    /\b(?:not|never|no|nothing|neither|without)\b|\bdoes not\b|\brather than\b/i.test(before);
  const disclaims =
    /\bdescribes? no\b|\bdoes not (?:describe|explain|provide|tell|address)\b|\bis not (?:a guide|guidance|advice)\b|\bnothing (?:here|on this page)\b|\bout of scope\b|\bwill not\b/i.test(
      sentence,
    );
  return !negatedForwards && !disclaims;
}

describe('no page teaches how to defeat a forensic process', () => {
  it.each(ANTI_FORENSIC_TOPICS.map((p) => [p.source, p] as const))(
    'no affirmative operational instruction matching %s',
    (_src, pattern) => {
      const offenders = ALL_UNITS.filter((s) => isOperationalInstruction(s, pattern));
      expect(offenders, 'affirmative anti-forensic instruction').toEqual([]);
    },
  );

  it('catches an operational instruction inserted into the corpus', () => {
    const planted = 'To wipe a device before examination, follow these steps.';
    const hit = ANTI_FORENSIC_TOPICS.some((p) => isOperationalInstruction(planted, p));
    expect(hit, 'the anti-forensic guard would not catch an inserted instruction').toBe(true);
  });

  it('does NOT fire on the safety disclaimers these pages actually carry', () => {
    for (const disclaimer of [
      'It describes no laboratory technique, no collection procedure, and nothing about how any result could be affected, avoided or altered.',
      'This page does not describe how to defeat a chain-of-custody record.',
      'Nothing here describes how to contaminate the scene.',
    ]) {
      const hit = ANTI_FORENSIC_TOPICS.some((p) => isOperationalInstruction(disclaimer, p));
      expect(hit, `a safety disclaimer was reported as an instruction: ${disclaimer}`).toBe(
        false,
      );
    }
  });

  it('is not vacuous — the disclaimers really do match the topic patterns', () => {
    const disclaimer =
      'Nothing here describes how to contaminate the scene or defeat a chain-of-custody record.';
    const matched = ANTI_FORENSIC_TOPICS.some((p) =>
      new RegExp(p.source, 'i').test(disclaimer),
    );
    expect(
      matched,
      'the direction check is untested because no disclaimer matches any topic pattern',
    ).toBe(true);
  });

  it('every page states what it does not describe', () => {
    for (const slug of WAVE_16) {
      const g = guide(slug);
      const hasScope = (g.definition ?? []).some(
        (b) => b.kind === 'callout' && (b.variant === 'scope' || b.variant === 'safety'),
      );
      expect(hasScope, `${slug} opens without a scope or safety callout`).toBe(true);
    }
  });

  it('the two highest-risk pages carry an explicit safety callout, not merely a scope one', () => {
    for (const slug of [
      'what-dna-analysis-establishes',
      'evidence-integrity-and-admissibility',
    ]) {
      const hasSafety = (guide(slug).definition ?? []).some(
        (b) => b.kind === 'callout' && b.variant === 'safety',
      );
      expect(hasSafety, `${slug} has no safety callout`).toBe(true);
    }
  });

  it('describes no technique, protocol or step sequence', () => {
    expect(ALL_PROSE).not.toMatch(/\bstep (?:one|two|1|2)\b|\bfollow these steps\b/i);
    expect(ALL_PROSE).not.toMatch(/\bprotocol (?:is|involves|requires) (?:to|:)/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Scientific overclaim, in both directions                                   */
/* -------------------------------------------------------------------------- */

const OVERCLAIMS: RegExp[] = [
  /\bDNA (?:proves|establishes|shows) (?:guilt|who did it)\b/i,
  /\bfingerprints? (?:are|is) infallible\b/i,
  /\bballistics can always identify\b/i,
  /\bforensic science is objective\b/i,
  /\bscientific evidence cannot be wrong\b/i,
  /\bthe expert witness decides the case\b/i,
  /\ba match (?:proves|means) (?:the|that the) (?:person|suspect|defendant)\b/i,
  /\bforensic (?:evidence|science) is (?:the )?(?:gold standard|conclusive|definitive)\b/i,
  /\bconclusively identifies the (?:person|individual|source)\b/i,
];

const UNDERCLAIMS: RegExp[] = [
  /\bforensic science (?:has been shown to be|is) unreliable\b/i,
  /\bforensic evidence (?:should|must) (?:be )?(?:ignored|disregarded|never be relied)\b/i,
  /\bDNA evidence is (?:meaningless|worthless|useless)\b/i,
  /\bno forensic (?:method|discipline) (?:is|has been) (?:reliable|validated)\b/i,
  /\bforensic science is (?:junk|pseudo)[- ]?science\b/i,
];

describe('the science is neither overstated nor dismissed', () => {
  it.each(OVERCLAIMS.map((p) => [p.source, p] as const))(
    'no undenied overclaim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a forensic overclaim stated without denial').toEqual([]);
    },
  );

  it.each(UNDERCLAIMS.map((p) => [p.source, p] as const))(
    'no undenied dismissal matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'forensic science dismissed wholesale').toEqual([]);
    },
  );

  it('catches an overclaim inserted into the corpus', () => {
    expect(
      catches(
        OVERCLAIMS,
        'A match proves the defendant handled the object, and DNA proves guilt.',
      ),
      'the overclaim tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('catches a wholesale dismissal inserted into the corpus', () => {
    expect(
      catches(
        UNDERCLAIMS,
        'Forensic science is unreliable and forensic evidence should be ignored.',
      ),
      'the dismissal tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('does not fire on the sentences that state the correction', () => {
    const correction =
      'Saying that forensic science cannot decide guilt is not a claim that forensic science is unreliable, and a match does not prove the person handled anything.';
    expect(catches([...OVERCLAIMS, ...UNDERCLAIMS], correction)).toBe(false);
  });

  it('states the exculpatory value of forensic science, not only its limits', () => {
    expect(ALL_PROSE).toMatch(/exclude innocent people|exonerat/i);
  });

  it('reports the DNA reliability finding with BOTH halves in the same block', () => {
    const g = guide('the-limits-of-forensic-evidence');
    const block = guideBlocks(g).find((b) => /wide range of results/i.test(b));
    expect(block, 'the block reporting the mixture finding has gone').toBeDefined();
    expect(
      block,
      'the mixture finding is stated without the single-source finding that gives it meaning',
    ).toMatch(/single-source/i);
  });

  it('would catch the single-source half being dropped from that block', () => {
    const stripped =
      'Multiple interlaboratory studies have demonstrated that different laboratories can produce a wide range of results when interpreting the same DNA mixtures.';
    expect(/single-source/i.test(stripped), 'the co-location check would not notice').toBe(
      false,
    );
  });

  it('never cites the draft bitemark review as authority', () => {
    for (const slug of WAVE_16) {
      for (const id of guide(slug).sources) {
        expect(id, `${slug} cites a bitemark source`).not.toMatch(/bitemark|8352/i);
      }
    }
    const mentions = sentences(ALL_PROSE).filter((s) => /bitemark/i.test(s));
    for (const s of mentions) {
      expect(
        /draft/i.test(s),
        `bitemark mentioned without saying the review is a draft: ${s}`,
      ).toBe(true);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Terminology is not flattened                                               */
/* -------------------------------------------------------------------------- */

const FALSE_EQUIVALENCES: RegExp[] = [
  /\bcoroners? (?:are|is) (?:the same as|another name for|equivalent to) (?:a )?medical examiners?\b/i,
  /\bmedical examiners? (?:are|is) (?:the same as|another name for) (?:a )?coroners?\b/i,
  /\bforensic scientists? (?:are|is) (?:a )?police officers?\b/i,
  /\bevery (?:country|system) has (?:a )?coroner\b/i,
  /\bevery (?:country|system) has (?:a )?national forensic laborator/i,
  /\baccreditation (?:is|means) (?:the same as )?regulation\b/i,
  /\bchain of custody (?:is|means) admissibility\b/i,
];

describe('the terminology differences are preserved', () => {
  it.each(FALSE_EQUIVALENCES.map((p) => [p.source, p] as const))(
    'no undenied false equivalence matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a terminology difference flattened').toEqual([]);
    },
  );

  it('catches a false equivalence inserted into the corpus', () => {
    expect(
      catches(FALSE_EQUIVALENCES, 'A coroner is another name for a medical examiner.'),
      'the equivalence tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('keeps coroner and medical examiner apart, in the same jurisdiction', () => {
    const text = prose(guide('who-investigates-a-death'));
    expect(text).toMatch(/both (?:offices )?exist|both exist/i);
    expect(text).toMatch(/judicial office/i);
    expect(text).toMatch(/registered medical practitioner/i);
  });

  it('states that one described system has neither office', () => {
    const text = prose(guide('who-investigates-a-death'));
    expect(text).toMatch(/no coroner and no medical examiner|Germany has (?:none|neither)/i);
  });

  it('keeps court-appointed and party-instructed experts apart', () => {
    const text = prose(guide('expert-evidence-in-court'));
    expect(text).toMatch(/selection of the experts .* is made by the judge|made by the judge/i);
    expect(text).toMatch(/overrides any obligation/i);
  });

  it('keeps integrity and admissibility apart', () => {
    const text = prose(guide('evidence-integrity-and-admissibility'));
    expect(text).toMatch(/different questions/i);
    expect(text).toMatch(/admissibility/i);
  });

  it('creates no forensic institution or profession route the evidence does not carry', () => {
    for (const slug of [
      'forensic-laboratory',
      'forensic-institute',
      'medical-examiner-office',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
    for (const slug of [
      'medical-examiner',
      'coroner',
      'forensic-pathologist',
      'fingerprint-examiner',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/professions/${slug}`);
    }
  });

  it('says why no forensic-laboratory institution record follows', () => {
    const text = prose(guide('what-forensic-laboratories-do'));
    expect(text).toMatch(/no "?forensic laboratory"? institution page|not two designs of one/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Cannibalization                                                            */
/* -------------------------------------------------------------------------- */

describe('the new pages do not restate what already existed', () => {
  it('asks a question no published guide already asks', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    expect(questions.filter((q, i) => questions.indexOf(q) !== i)).toEqual([]);
  });

  it('reproduces no paragraph of the pre-existing forensics guide', () => {
    const original = getGuide(PRE_EXISTING) as Guide;
    for (const text of [...blocks(original.howItWorks), ...blocks(original.definition)]) {
      if (text.length < 140) continue;
      expect(ALL_PROSE.includes(text), 'a Wave 16 page reproduces the original guide').toBe(
        false,
      );
    }
  });

  it('reproduces no section key idea verbatim', () => {
    const section = getSection('forensics');
    expect(section).toBeDefined();
    for (const idea of section?.keyIdeas ?? []) {
      expect(
        ALL_PROSE.includes(idea.body),
        `a Wave 16 guide reproduces the section key idea "${idea.title}"`,
      ).toBe(false);
    }
  });

  it('is not vacuous — the surfaces it must not copy have long text', () => {
    const original = getGuide(PRE_EXISTING) as Guide;
    expect(blocks(original.howItWorks).filter((t) => t.length >= 140).length).toBeGreaterThan(
      1,
    );
    expect((getSection('forensics')?.keyIdeas ?? []).length).toBeGreaterThan(3);
  });
});

/* -------------------------------------------------------------------------- */
/* Sourcing                                                                   */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  Netherlands: 'NL',
  'England and Wales': 'GB',
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

describe('every claim rests on a source scoped to what it describes', () => {
  it.each(WAVE_16)('%s cites a scoped source for every country it names', (slug) => {
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

  it('rejects an international body standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(hasSourceFor(['enfsi'], iso, country), `${country} laundered through ENFSI`).toBe(
        false,
      );
    }
  });

  it.each(WAVE_16)('%s sources every block it marks as fact', (slug) => {
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

  it('resolves every source cited, and cites the current Criminal Procedure Rules', () => {
    for (const slug of WAVE_16) {
      for (const id of guide(slug).sources) {
        expect(getSource(id), `${slug} cites unknown source ${id}`).toBeDefined();
      }
    }
    const crimpr = getSource('uk-crimpr-2025-part19');
    expect(crimpr, 'the CrimPR source has gone').toBeDefined();
    expect(crimpr?.note, 'the revocation of the 2020 Rules is not recorded').toMatch(/REVOKED/);
    for (const slug of WAVE_16) {
      expect(guide(slug).sources, `${slug} cites the revoked 2020 Rules`).not.toContain(
        'uk-crimpr-2020-part19',
      );
    }
  });

  it('uses the final NIST DNA review, not the draft', () => {
    const s = getSource('nist-ir-8351-dna-mixtures');
    expect(s).toBeDefined();
    expect(s?.url, 'the source points at the draft').not.toMatch(/draft/i);
    expect(s?.note).toMatch(/FINAL report/);
  });

  it('scopes England and Wales away from the rest of the United Kingdom', () => {
    const scoped = WAVE_16.map((s) => prose(guide(s))).join('\n');
    expect(scoped).toMatch(/Scotland/);
  });

  it('is not vacuous — the pages make country claims', () => {
    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBe(Object.keys(COUNTRIES).length);
  });
});

/* -------------------------------------------------------------------------- */
/* Structural integrity                                                       */
/* -------------------------------------------------------------------------- */

describe('every Wave 16 page is structurally complete', () => {
  it.each(WAVE_16)(
    '%s has related entries, sources, misconceptions and uncertainty',
    (slug) => {
      const g = guide(slug);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      expect(g.sources.length).toBeGreaterThanOrEqual(1);
      expect(g.misconceptions.length).toBeGreaterThanOrEqual(3);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThanOrEqual(1);
    },
  );

  it.each(WAVE_16)('%s trips no restricted-phrasing pattern', (slug) => {
    expect(findRestrictedPhrasing(scannedProse(guide(slug))).map((v) => v.category)).toEqual(
      [],
    );
  });

  it('links only to routes that exist', () => {
    for (const slug of WAVE_16) {
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

  it('declares only institutions that are routes', () => {
    for (const slug of WAVE_16) {
      for (const inst of guide(slug).relatedInstitutions ?? []) {
        expect(PUBLIC_ROUTE_PATHS, `${slug} declares missing institution ${inst}`).toContain(
          `/institutions/${inst}`,
        );
      }
    }
  });
});
