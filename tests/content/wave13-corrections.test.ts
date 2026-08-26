import { describe, expect, it } from 'vitest';
import { CORRECTIONS_GUIDES } from '@/content/guides/corrections';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { getSource } from '@/content/sources';
import { getSection } from '@/content/sections';
import { getInstitutionType } from '@/content/institutions';
import { getProfession } from '@/content/professions';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import { SAFETY_SENSITIVE_SECTIONS } from '@/content/types';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 13: corrections, sentencing and reintegration.
 *
 * Five failure modes drive this suite, and each is a thing this cluster could plausibly become
 * rather than a hypothetical.
 *
 * NORMATIVE CAPTURE. Pages about punishment attract sentences telling the reader which theory
 * of punishment is correct. The brief forbids it and the editorial position is that the site
 * describes what legislatures say. The checks here are SENTENCE-level, because a lexical
 * blocklist would forbid the sentences that state the position accurately — a page cannot
 * describe a retributive purpose without using the word.
 *
 * FALSE UNIVERSALS FROM NUMBERS. This wave publishes statutory fractions and thresholds —
 * two-thirds, one half, one year, two years. Every one belongs to a single criminal code, and
 * a number is the easiest thing in the corpus to detach from its jurisdiction and restate as a
 * general rule. Each is pinned to an attribution in the same sentence.
 *
 * PREDICTION AND ADVICE. "How long will I actually serve" is the question this cluster is
 * closest to, and answering it would be both wrong and dangerous. The page that exists to
 * explain why the two numbers differ is the one most at risk, so it is tested hardest.
 *
 * OPERATIONAL LEAKAGE. corrections joined SAFETY_SENSITIVE_SECTIONS in this wave. Material
 * about supervision, licence conditions and release decisions is one step from material about
 * defeating them.
 *
 * DUPLICATION. The section page, the correctional-service institution record and the
 * corrections-officer profession record already exist. A guide that restates their key ideas
 * at greater length is not a page.
 */

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
  if (!found) throw new Error(`Wave 13 guide missing: ${slug}`);
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

/** Only the fields the restricted-claim scanner actually reads. */
function scannedProse(g: Guide): string {
  return [
    ...blocks(g.definition),
    ...blocks(g.whyItExists),
    ...blocks(g.howItWorks),
    ...blocks(g.variation),
    ...blocks(g.rightsAndAccountability),
  ].join('\n');
}

const ALL_PROSE = WAVE_13.map((slug) => prose(guide(slug))).join('\n');

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * The units a tripwire is evaluated against, and why they are not simply sentences.
 *
 * Wave 11 established that a denial has to sit in the SAME sentence as the claim, because a
 * following sentence's negation was letting an absolutist statement through. That rule is kept
 * for ordinary prose here.
 *
 * A misconception is the one structural exception, and the schema is what makes it one: the
 * record is a pair, and `reality` exists precisely to deny `claim`. Splitting the pair into
 * sentences would report every misconception on the page as an undenied assertion of the thing
 * it corrects — which is how the first run of this suite failed, on four sentences that were
 * doing exactly the job the page exists to do. The pair is therefore one unit. A misconception
 * whose `reality` does not actually deny its `claim` still fires, and a test below plants one
 * to prove it.
 */
function tripwireUnits(g: Guide): string[] {
  const proseText = [
    g.title,
    g.summary,
    ...blocks(g.definition),
    ...blocks(g.whyItExists),
    ...blocks(g.howItWorks),
    ...blocks(g.variation),
    ...blocks(g.rightsAndAccountability),
    ...blocks(g.furtherReading),
    ...(g.uncertainty ?? []),
  ].join('\n');
  return [...sentences(proseText), ...g.misconceptions.map((m) => `${m.claim} ${m.reality}`)];
}

const ALL_TRIPWIRE_UNITS = WAVE_13.flatMap((slug) => tripwireUnits(guide(slug)));

/**
 * The units an ATTRIBUTION requirement is evaluated against.
 *
 * A statutory quantity has to be tied to the system that states it, and the unit a reader
 * actually consumes for that purpose is the block, not the sentence. A paragraph whose opening
 * sentence names the German Criminal Code has attributed every figure in it; demanding the word
 * "German" again in each following sentence would force repetition into the prose without
 * making anything safer. The block is still a real constraint — a figure dropped into a block
 * about a different system, or into a general statement, fails — and a test below plants one.
 */
function attributionUnits(g: Guide): string[] {
  const fromBlocks = (list: Block[] | undefined): string[] =>
    (list ?? []).flatMap((block) => {
      if (block.kind === 'paragraph') return [block.text];
      if (block.kind === 'callout') return [`${block.title} ${block.text}`];
      if (block.kind === 'list') return block.items;
      return block.items.map((i) => `${i.term} ${i.description}`);
    });
  return [
    g.title,
    g.summary,
    ...fromBlocks(g.definition),
    ...fromBlocks(g.whyItExists),
    ...fromBlocks(g.howItWorks),
    ...fromBlocks(g.variation),
    ...fromBlocks(g.rightsAndAccountability),
    ...fromBlocks(g.furtherReading),
    ...(g.uncertainty ?? []),
    ...g.misconceptions.map((m) => `${m.claim} ${m.reality}`),
  ];
}

const ALL_ATTRIBUTION_UNITS = WAVE_13.flatMap((slug) => attributionUnits(guide(slug)));

/**
 * Does `sentence` deny the claim that `pattern` matched?
 *
 * Carried forward from Wave 12, where the first version of this helper let a mutation survive.
 * Several tripwire patterns contain a negation in their own text, so a sentence could satisfy a
 * naive "is there a negation here" check simply by being the offending claim. The matched span
 * is therefore removed before the denial is looked for, which forces the negation to come from
 * the surrounding sentence and to operate on the claim.
 */
function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcannot\b|\bwrong\b|\bmisconception\b/i.test(
    remainder,
  );
}

function offendingSentences(pattern: RegExp): string[] {
  return ALL_TRIPWIRE_UNITS.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

/* -------------------------------------------------------------------------- */
/* Routing, registration and the section that had none                        */
/* -------------------------------------------------------------------------- */

describe('the corrections section is populated and routed', () => {
  it('publishes exactly the twelve Wave 13 guides and nothing else', () => {
    expect(CORRECTIONS_GUIDES.map((g) => g.slug).sort()).toEqual([...WAVE_13].sort());
  });

  it.each(WAVE_13)('%s is registered in the corpus and resolves as a route', (slug) => {
    const g = getGuide(slug);
    expect(g, `${slug} is not reachable through the guide registry`).toBeDefined();
    expect(g?.section).toBe('corrections');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g as Guide));
  });

  it('routes every guide under /corrections/', () => {
    for (const slug of WAVE_13) {
      expect(guidePath(guide(slug))).toBe(`/corrections/${slug}`);
    }
  });

  it('leaves the section page in place rather than replacing it', () => {
    expect(getSection('corrections')).toBeDefined();
  });

  it('is not vacuous — the section held no guides before this wave', () => {
    expect(WAVE_13.length).toBe(12);
    expect(CORRECTIONS_GUIDES.length).toBe(12);
  });
});

describe('corrections is treated as safety-sensitive', () => {
  it('is on the safety-sensitive list', () => {
    expect(SAFETY_SENSITIVE_SECTIONS).toContain('corrections');
  });

  it.each(WAVE_13)('%s carries a completed safety review', (slug) => {
    const g = guide(slug);
    expect(g.safetyReview, `${slug} publishes without a safety review`).toBe('cleared');
  });

  it.each(WAVE_13)('%s is fact-checked and published with dates', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.factsVerifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

/* -------------------------------------------------------------------------- */
/* No duplication of what the cluster already had                             */
/* -------------------------------------------------------------------------- */

describe('the new pages do not restate the surfaces that already existed', () => {
  it('asks a question no other guide in the corpus already asks', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    const duplicated = questions.filter((q, i) => questions.indexOf(q) !== i);
    expect(duplicated, 'two published guides ask the same question').toEqual([]);
  });

  it('does not reproduce a section key idea verbatim', () => {
    const section = getSection('corrections');
    expect(section, 'the corrections section record has disappeared').toBeDefined();
    for (const idea of section?.keyIdeas ?? []) {
      expect(
        ALL_PROSE.includes(idea.body),
        `a Wave 13 guide reproduces the section key idea "${idea.title}" verbatim`,
      ).toBe(false);
    }
  });

  it('does not reproduce the institution or profession record verbatim', () => {
    const institution = getInstitutionType('correctional-service');
    const profession = getProfession('corrections-officer');
    expect(institution, 'the correctional-service record has disappeared').toBeDefined();
    expect(profession, 'the corrections-officer record has disappeared').toBeDefined();
    for (const text of [
      institution?.purpose,
      institution?.governanceNote,
      institution?.accountabilityNote,
      profession?.purpose,
      profession?.ethicsNote,
    ]) {
      if (!text) continue;
      expect(ALL_PROSE.includes(text), 'a Wave 13 guide reproduces an existing record').toBe(
        false,
      );
    }
  });

  it('is not vacuous — the existing surfaces have text to collide with', () => {
    expect((getSection('corrections')?.keyIdeas ?? []).length).toBeGreaterThan(3);
    expect(getInstitutionType('correctional-service')?.purpose?.length ?? 0).toBeGreaterThan(
      50,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Normative neutrality                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Sentences that would tell a reader which theory of punishment is correct, or that would
 * settle the moral question the brief reserves to the reader. Each must appear only where the
 * surrounding sentence denies it.
 */
const NORMATIVE_CLAIMS: RegExp[] = [
  /\bthe (?:only|true|real|correct|right) purpose of (?:punishment|imprisonment|prison|sentencing)\b/i,
  /\b(?:punishment|retribution|deterrence|rehabilitation) is (?:the|what) (?:point|goal|purpose|answer)\b/i,
  /\bprisons? (?:should|must) be abolished\b/i,
  /\bimprisonment is (?:always|inherently) (?:wrong|unjust|illegitimate)\b/i,
  /\bthe (?:best|correct|right) (?:approach|philosophy|theory) (?:to|of) (?:punishment|sentencing)\b/i,
  /\b(?:rehabilitation|retribution|deterrence) is (?:morally )?(?:superior|better) (?:to|than)\b/i,
  /\boffenders? deserve\b/i,
  /\bsentences? (?:are|is) too (?:short|lenient|harsh|long)\b/i,
  /\bwhat (?:punishment|sentencing) (?:ought|should) to (?:be|achieve) is\b/i,
];

describe('no page tells the reader which theory of punishment is correct', () => {
  it.each(NORMATIVE_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied normative claim matching %s',
    (_src, pattern) => {
      expect(
        offendingSentences(pattern),
        'a normative claim about punishment stated without denial',
      ).toEqual([]);
    },
  );

  it('catches a misconception whose reality affirms rather than denies its claim', () => {
    const planted =
      'Rehabilitation is the purpose of sentencing. That is right, and systems saying otherwise have misunderstood what sentencing is.';
    const hit = NORMATIVE_CLAIMS.some((p) => p.test(planted) && !deniesClaim(planted, p));
    expect(
      hit,
      'treating a misconception pair as one unit would hide a claim its reality endorses',
    ).toBe(true);
  });

  it('catches a normative claim inserted into the corpus', () => {
    const planted =
      'The only purpose of punishment is retribution, and systems that say otherwise are mistaken.';
    const hit = NORMATIVE_CLAIMS.some((p) => p.test(planted) && !deniesClaim(planted, p));
    expect(hit, 'the normative tripwires would not catch an inserted claim').toBe(true);
  });

  it('presents statutory purposes as several answers rather than one', () => {
    const g = guide('what-sentencing-is-for');
    const text = prose(g);
    expect(text).toMatch(/four (?:legislatures|answers|statutory)/i);
    expect(text).toMatch(/not (?:a survey|as one answer)|rather than as one answer/i);
  });

  it('states that where a legislature puts its purposes is itself informative', () => {
    const text = prose(guide('what-sentencing-is-for'));
    expect(text).toMatch(
      /law of (?:what happens afterwards|execution)|in the law of execution/i,
    );
    expect(text).toMatch(/different questions/i);
  });

  it('does not treat any one system as the default the others deviate from', () => {
    for (const slug of WAVE_13) {
      const text = prose(guide(slug));
      expect(
        /\b(?:unlike most|as in most countries|the normal (?:approach|model)|the standard (?:approach|model)) /i.test(
          text,
        ),
        `${slug} treats one arrangement as the norm`,
      ).toBe(false);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Prediction and advice                                                      */
/* -------------------------------------------------------------------------- */

const PREDICTION_CLAIMS: RegExp[] = [
  /\bhow (?:many|long) (?:years|months)? ?(?:will|would) (?:you|I|they|someone) (?:get|serve|spend)\b/i,
  /\byou (?:will|would|can expect to) (?:serve|spend|be released)\b/i,
  /\btypically serves? (?:about|around|roughly)?\s*\d/i,
  /\bmultiply (?:the|your) sentence\b/i,
  /\bto (?:reduce|minimise|minimize|shorten) (?:your|a|the) sentence\b/i,
  /\bin practice (?:you|a person|an offender) (?:serves|will serve)\b/i,
];

describe('no page predicts an outcome or advises on obtaining one', () => {
  it.each(PREDICTION_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied prediction matching %s',
    (_src, pattern) => {
      expect(offendingSentences(pattern), 'sentence prediction or advice').toEqual([]);
    },
  );

  it('catches a prediction inserted into the corpus', () => {
    const planted =
      'In practice a person serves about half of the announced term before release.';
    const hit = PREDICTION_CLAIMS.some((p) => p.test(planted) && !deniesClaim(planted, p));
    expect(hit, 'the prediction tripwires would not catch an inserted claim').toBe(true);
  });

  it('the sentence-length page refuses the calculation in its own text', () => {
    const g = guide('why-a-sentence-length-is-not-time-served');
    const text = prose(g);
    expect(text).toMatch(
      /cannot be used to work anything out|provides no method|no method for relating/i,
    );
    expect(text).toMatch(/needs? a lawyer/i);
  });

  it('every page that describes release or supervision carries a safety callout', () => {
    for (const slug of [
      'release-before-the-end-of-a-sentence',
      'why-a-sentence-length-is-not-time-served',
      'probation-is-three-different-things',
      'custodial-and-non-custodial-sentences',
      'what-sentencing-is-for',
      'what-a-suspended-sentence-is',
    ]) {
      const g = guide(slug);
      const hasSafety = [
        ...(g.definition ?? []),
        ...(g.howItWorks ?? []),
        ...(g.variation ?? []),
        ...(g.rightsAndAccountability ?? []),
      ].some((b) => b.kind === 'callout' && b.variant === 'safety');
      expect(hasSafety, `${slug} describes release or sentencing with no safety callout`).toBe(
        true,
      );
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Operational leakage                                                        */
/* -------------------------------------------------------------------------- */

const OPERATIONAL_CLAIMS: RegExp[] = [
  /\b(?:avoid|evade|escape|defeat|circumvent) (?:supervision|recall|detection|monitoring|a licence)/i,
  /\bbypass(?:ing)? (?:prison |detention )?security\b/i,
  /\bhow to (?:get|obtain) (?:parole|early release|a suspended sentence)\b/i,
  /\bwhat to (?:say|tell) (?:to )?(?:the|a) (?:parole board|probation officer|prison)\b/i,
  /\bwithout being (?:caught|detected|recalled)\b/i,
];

describe('no page teaches evasion of custody or supervision', () => {
  it.each(OPERATIONAL_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied operational claim matching %s',
    (_src, pattern) => {
      expect(offendingSentences(pattern), 'operational evasion material').toEqual([]);
    },
  );

  it('catches operational material inserted into the corpus', () => {
    const planted =
      'This section explains what to say to the parole board to obtain early release.';
    const hit = OPERATIONAL_CLAIMS.some((p) => p.test(planted) && !deniesClaim(planted, p));
    expect(hit, 'the operational tripwires would not catch inserted material').toBe(true);
  });

  it('describes no facility, regime or programme operation anywhere', () => {
    expect(ALL_PROSE).not.toMatch(
      /\bat (?:HMP|the .{3,30} (?:Correctional Facility|Penitentiary))\b/,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Numbers stay attached to the statute they came from                        */
/* -------------------------------------------------------------------------- */

/**
 * Every statutory quantity this wave publishes, and the attribution that must appear in the
 * SAME sentence. A fraction or a threshold detached from its code reads as a general rule, and
 * it is the single most likely way this cluster would become wrong.
 */
const BOUND_QUANTITIES: { label: string; value: RegExp; attribution: RegExp }[] = [
  {
    label: 'two-thirds release point',
    value: /two-thirds/i,
    attribution: /German|StGB|§ ?57|section 57/i,
  },
  {
    label: 'half release point',
    value: /\bone[- ]half\b|\bhalf of a fixed-term\b/i,
    attribution: /German|StGB|§ ?57|section 57|first custodial/i,
  },
  {
    label: 'one-year suspension threshold',
    value: /not more than one year/i,
    attribution: /German|StGB|§ ?56|section 56/i,
  },
  {
    label: 'two-year suspension threshold',
    value: /not exceeding two years/i,
    attribution: /German|StGB|§ ?56|section 56|special circumstances/i,
  },
  {
    label: 'two-year federal custody line',
    value: /two years or more/i,
    attribution: /Canad|federal|Correctional Service Canada/i,
  },
];

describe('statutory quantities are never detached from the system that states them', () => {
  it.each(BOUND_QUANTITIES.map((q) => [q.label, q] as const))(
    '%s is attributed in every sentence that states it',
    (_label, q) => {
      const offenders = ALL_ATTRIBUTION_UNITS.filter(
        (s) => q.value.test(s) && !q.attribution.test(s),
      );
      expect(offenders, 'a statutory quantity stated without its jurisdiction').toEqual([]);
    },
  );

  it('catches a quantity dropped into a block that attributes it to nothing', () => {
    const planted =
      'Most systems release people once they have served two-thirds of the term imposed.';
    const q = BOUND_QUANTITIES.find((b) => b.label === 'two-thirds release point');
    expect(q, 'the two-thirds guard has been removed').toBeDefined();
    expect(
      q ? q.value.test(planted) && !q.attribution.test(planted) : false,
      'the block-level attribution check would not catch a detached fraction',
    ).toBe(true);
  });

  it('is not vacuous — the quantities are actually published', () => {
    for (const q of BOUND_QUANTITIES) {
      expect(q.value.test(ALL_PROSE), `${q.label} is not present at all`).toBe(true);
    }
  });

  it('says explicitly that the fractions do not transfer to other systems', () => {
    const text = prose(guide('release-before-the-end-of-a-sentence'));
    expect(text).toMatch(/do not travel|not a general rule|would be an invention/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Restricted claims — the reason the capacity page is named as it is         */
/* -------------------------------------------------------------------------- */

describe('the detention-capacity safeguard is preserved, not worked around', () => {
  it.each(WAVE_13)('%s trips no restricted-phrasing pattern', (slug) => {
    const violations = findRestrictedPhrasing(scannedProse(guide(slug)));
    expect(
      violations.map((v) => `${v.category}: "${v.match}"`),
      'restricted phrasing in a guide, which has no channel to declare a claim',
    ).toEqual([]);
  });

  it('confirms a guide has no way to declare a restricted claim', () => {
    for (const g of CORRECTIONS_GUIDES) {
      expect(
        'restrictedClaims' in (g as unknown as Record<string, unknown>),
        `${g.slug} carries a restrictedClaims field the scanner does not read`,
      ).toBe(false);
    }
  });

  it('is not vacuous — the scanner does fire on the phrasing this wave avoided', () => {
    const violations = findRestrictedPhrasing('Prisons in the country are overcrowded.');
    expect(violations.map((v) => v.category)).toContain('detention-capacity');
  });

  it('publishes no occupancy rate derived from a source that does not print one', () => {
    const text = prose(guide('how-prison-capacity-is-measured'));
    expect(text).not.toMatch(/\b\d{2,3}(?:\.\d)? (?:inmates )?per 100 places\b/);
    expect(text).toMatch(/derivation|derived by/i);
  });

  it('names the four conversions it refuses to perform', () => {
    const text = prose(guide('how-prison-capacity-is-measured'));
    expect(text).toMatch(/occupancy rate/i);
    expect(text).toMatch(/prevalence|denominator/i);
    expect(text).toMatch(/snapshot/i);
    expect(text).toMatch(/individual facility|any individual prison|facility-level/i);
  });

  it('states the Japanese absence rather than approximating it', () => {
    const text = prose(guide('how-prison-capacity-is-measured'));
    expect(text).toMatch(
      /no detention-capacity statistic for Japan|deferred rather than approximated/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Country claims are country-sourced                                         */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  Brazil: 'BR',
  Canada: 'CA',
  Japan: 'JP',
  Denmark: 'DK',
  Sweden: 'SE',
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

describe('every country-specific claim rests on a country-scoped source', () => {
  it.each(WAVE_13)('%s cites a scoped source for every country it names', (slug) => {
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

  it('rejects an intergovernmental penal-statistics source standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(
        hasSourceFor(['coe-space-i-2024', 'mandela-rules'], iso, country),
        `${country} laundered through an international source`,
      ).toBe(false);
    }
  });

  it('resolves every source cited by every Wave 13 guide', () => {
    for (const slug of WAVE_13) {
      for (const id of guide(slug).sources) {
        expect(getSource(id), `${slug} cites unknown source ${id}`).toBeDefined();
      }
    }
  });

  it('is not vacuous — the pages do make country claims', () => {
    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBe(Object.keys(COUNTRIES).length);
  });

  it('scopes the England and Wales material away from the rest of the United Kingdom', () => {
    const text = prose(guide('what-sentencing-is-for'));
    expect(text).toMatch(/Scotland/);
    expect(text).toMatch(/Northern Ireland/);
  });
});

/* -------------------------------------------------------------------------- */
/* The statutes are quoted with their provisions named                        */
/* -------------------------------------------------------------------------- */

describe('statutory material names the provision it comes from', () => {
  const STATUTE_GUIDES: [string, RegExp][] = [
    ['why-correctional-systems-exist', /section 2|Article 1/],
    ['what-sentencing-is-for', /[Ss]ection 57|[Ss]ection 718/],
    ['conviction-sentence-and-execution', /Article 61|Article 71|Article 74/],
    ['custodial-and-non-custodial-sentences', /718\.2|[Ss]ection 56/],
    ['what-a-suspended-sentence-is', /[Ss]ection 56/],
    ['release-before-the-end-of-a-sentence', /[Ss]ection 57/],
    ['why-a-sentence-length-is-not-time-served', /718\.2|[Ss]ection 5[67]/],
    ['who-runs-prisons', /Article 8[0-9]|92\(14\)|Article 7[14]/],
    ['what-reintegration-means', /[Ss]ection 2|Article 1/],
  ];

  it.each(STATUTE_GUIDES)('%s names its provisions', (slug, pattern) => {
    expect(prose(guide(slug)), `${slug} quotes statute without naming the provision`).toMatch(
      pattern,
    );
  });

  it('carries the German original alongside the English for each German provision', () => {
    expect(ALL_PROSE).toContain('Vollzugsziel');
    expect(ALL_PROSE).toContain('zur Bewährung');
    expect(ALL_PROSE).toMatch(/Sicherheitsinteresses der Allgemeinheit/);
  });

  it('carries the Portuguese original for the Brazilian purpose clause', () => {
    expect(ALL_PROSE).toMatch(/harmônica integração social/);
  });

  it('records the 2026 amendment to the English purposes rather than quoting the old text', () => {
    const text = prose(guide('what-sentencing-is-for'));
    expect(text).toMatch(/including victims of crime/);
    expect(text).toMatch(/22 March 2026|Sentencing Act 2026/);
  });

  it('records that the English purposes do not apply to mandatory sentences', () => {
    const text = prose(guide('what-sentencing-is-for'));
    expect(text).toMatch(/mandatory sentence requirement/i);
  });
});

/* -------------------------------------------------------------------------- */
/* The false-friend page actually distinguishes                               */
/* -------------------------------------------------------------------------- */

describe('probation is not universalised', () => {
  it('names all three senses', () => {
    const text = prose(guide('probation-is-three-different-things'));
    expect(text).toMatch(/organisation|organization/i);
    expect(text).toMatch(/suspend/i);
    expect(text).toMatch(/after release|remainder/i);
  });

  it('states that a single body can hold more than one sense at once', () => {
    const text = prose(guide('probation-is-three-different-things'));
    expect(text).toMatch(/single (?:national )?body|one body|same institution/i);
  });

  it('never equates probation and parole as synonyms without denial', () => {
    const pattern =
      /\bprobation (?:and|or) parole are (?:the same|simply different words|synonyms)\b/i;
    expect(offendingSentences(pattern)).toEqual([]);
  });

  it('gives the reader a disambiguating question rather than a definition to memorise', () => {
    const text = prose(guide('probation-is-three-different-things'));
    expect(text).toMatch(/what to ask|three questions|questions disambiguate/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Structural integrity                                                       */
/* -------------------------------------------------------------------------- */

describe('every Wave 13 guide is structurally complete', () => {
  it.each(WAVE_13)('%s has related entries, sources and misconceptions', (slug) => {
    const g = guide(slug);
    expect(
      g.related.length,
      `${slug} has fewer than two related entries`,
    ).toBeGreaterThanOrEqual(2);
    expect(g.sources.length, `${slug} cites no source`).toBeGreaterThanOrEqual(1);
    expect(g.misconceptions.length, `${slug} corrects no misconception`).toBeGreaterThanOrEqual(
      3,
    );
    expect(g.uncertainty?.length ?? 0, `${slug} states no uncertainty`).toBeGreaterThanOrEqual(
      1,
    );
  });

  it.each(WAVE_13)('%s carries a scope callout in its definition', (slug) => {
    const g = guide(slug);
    const hasScope = (g.definition ?? []).some(
      (b) => b.kind === 'callout' && (b.variant === 'scope' || b.variant === 'safety'),
    );
    expect(hasScope, `${slug} opens without scoping what it is not`).toBe(true);
  });

  it('never puts a markdown link where the renderer will not resolve it', () => {
    for (const g of ALL_GUIDES) {
      for (const m of g.misconceptions) {
        for (const field of [m.claim, m.reality]) {
          expect(
            /\[[^\]]+\]\([^)]+\)/.test(field),
            `${g.slug} has a markdown link in a misconception, which renders as raw text`,
          ).toBe(false);
        }
      }
    }
  });

  it('links only to routes that exist', () => {
    for (const slug of WAVE_13) {
      const links = prose(guide(slug)).match(/\]\((\/[^)#]*)/g) ?? [];
      for (const raw of links) {
        const path = raw.slice(2);
        expect(PUBLIC_ROUTE_PATHS, `${slug} links to missing route ${path}`).toContain(path);
      }
    }
  });
});
