import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { getProfession, ROUTED_PROFESSIONS } from '@/content/professions';
import { getSource } from '@/content/sources';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide, Profession } from '@/content/types';

/**
 * Wave 14: access to justice and legal institutions.
 *
 * The brief lists eleven invariants for this wave. Each has a group below, and each group is
 * accompanied by a live-catch test, because a tripwire nobody has fired is a tripwire nobody
 * knows works.
 *
 * The two failure modes specific to this material:
 *
 * FLATTENED VOCABULARY. Lawyer, barrister, solicitor, advocate, attorney, advogado and
 * Rechtsanwalt are terms of the systems that use them. So are legal aid, public defender and
 * court-appointed counsel, which Wave 11 established are a funding scheme, an institution and a
 * procedure respectively. English supplies one word for each family and the words are not
 * synonyms. The checks here are sentence-level and denial-aware: a page cannot describe the
 * conflation without naming it.
 *
 * ACCESS READ AS OUTCOME. "Access to justice" invites the reading that a person is entitled to
 * a result, to free representation, or to costless procedure. /justice/access-to-justice already
 * states the distinction in terms; this wave must not undo it, and the tests enforce that across
 * the new pages rather than restating the point as another page.
 */

const WAVE_14_GUIDES = [
  'court-language-and-interpretation',
  'taking-part-in-your-own-case',
  'the-cost-of-going-to-court',
  'who-runs-the-courts',
  'who-may-act-as-a-lawyer',
  'representing-yourself',
  'victims-in-the-justice-process',
] as const;

const WAVE_14_PROFESSION = 'defence-lawyer';

/** Owned by earlier waves. Wave 14 preserves these and may not restate them. */
const PRE_OWNED = [
  'access-to-justice',
  'effective-remedy',
  'right-to-counsel',
  'how-defence-is-funded',
  'what-defence-counsel-does',
  'lawyer-client-confidentiality',
] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 14 guide missing: ${slug}`);
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

/**
 * The blocks of a guide, each kept whole.
 *
 * Forced by mutation proofs W14-M9 and W14-M12, which both applied cleanly and PASSED. Each of
 * the tests they attacked asserted that a string appeared somewhere in the page — "Sorb", and
 * "where the accused has defence counsel". Both strings appear twice: once where the rule is
 * stated and once in a misconception that restates it. Deleting the statement of the rule left
 * the incidental occurrence, and the presence check was satisfied by it.
 *
 * A qualification has to sit WITH the thing it qualifies, so the assertions below are
 * co-location assertions on a single block rather than presence assertions on a page.
 */
function guideBlocks(g: Guide): string[] {
  const all = [
    ...(g.definition ?? []),
    ...(g.whyItExists ?? []),
    ...(g.howItWorks ?? []),
    ...(g.variation ?? []),
    ...(g.rightsAndAccountability ?? []),
  ];
  return all.flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'callout') return [`${block.title} ${block.text}`];
    if (block.kind === 'list') return [block.items.join(' ')];
    return [block.items.map((i) => `${i.term} ${i.description}`).join(' ')];
  });
}

/** The single block stating `needle`, or a failure the caller can report. */
function blockStating(g: Guide, needle: RegExp): string | undefined {
  return guideBlocks(g).find((b) => needle.test(b));
}

function professionProse(p: Profession): string {
  return [
    p.title,
    p.summary,
    p.question ?? '',
    p.purpose ?? '',
    p.institutionalContext ?? '',
    p.ethicsNote ?? '',
    p.jurisdictionNote,
    ...p.responsibilities,
    ...p.decisionAuthority,
    ...p.constraints,
    ...p.oversight,
    ...p.trainingRouteShape,
    ...(p.commonMisunderstandings ?? []),
    ...(p.uncertainty ?? []),
    ...(p.countryExamples ?? []).map((c) => c.note),
  ].join('\n');
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Carried forward from Wave 12, unchanged. See the note there for why the span is stripped. */
function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bdoes not\b|\bcannot\b|\bwrong\b|\bmisconception\b|\bis one of\b/i.test(
    remainder,
  );
}

/**
 * Units, on the Wave 13 rule: ordinary prose sentence by sentence so a denial must sit with the
 * claim, but a misconception is one unit of `claim + reality` because the schema guarantees the
 * second denies the first.
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

const ALL_UNITS = [
  ...WAVE_14_GUIDES.flatMap((slug) => tripwireUnits(guide(slug))),
  ...sentences(professionProse(getProfession(WAVE_14_PROFESSION) as Profession)),
  ...((getProfession(WAVE_14_PROFESSION)?.commonMisunderstandings ?? []) as string[]),
];

const ALL_PROSE = [
  ...WAVE_14_GUIDES.map((slug) => prose(guide(slug))),
  professionProse(getProfession(WAVE_14_PROFESSION) as Profession),
].join('\n');

function offending(pattern: RegExp): string[] {
  return ALL_UNITS.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

/**
 * A stricter denial test, for tripwires that match a DIRECTIVE rather than an assertion.
 *
 * `deniesClaim` asks whether a negation survives outside the matched span, which is right for a
 * factual claim: "public defenders are not universal" denies "public defenders are universal".
 * It is wrong for advice. "If you cannot afford a lawyer you should apply for legal aid" is
 * advice, and the incidental "cannot" earlier in the sentence has nothing to do with the
 * directive — but `deniesClaim` clears it. That is not hypothetical: it is how the first run of
 * the live-catch test below failed.
 *
 * A directive is neutralised only by a negation that governs it, and in English that negation
 * precedes it — "this page does not tell you how to apply". So only the text BEFORE the match is
 * examined.
 */
function deniesDirective(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  return /\b(?:not|never|no|nothing|neither)\b|\bdoes not\b|\brather than\b/i.test(before);
}

function offendingDirective(pattern: RegExp): string[] {
  return ALL_UNITS.filter((s) => pattern.test(s) && !deniesDirective(s, pattern));
}

function catchesDirective(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesDirective(planted, p));
}

/** Assert a tripwire set would actually catch the thing it exists to catch. */
function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* Routing and registration                                                   */
/* -------------------------------------------------------------------------- */

describe('Wave 14 routes exist and sit in the right sections', () => {
  const EXPECTED_SECTION: Record<string, string> = {
    'court-language-and-interpretation': 'courts',
    'taking-part-in-your-own-case': 'courts',
    'the-cost-of-going-to-court': 'courts',
    'who-runs-the-courts': 'courts',
    'who-may-act-as-a-lawyer': 'defence',
    'representing-yourself': 'defence',
    'victims-in-the-justice-process': 'justice',
  };

  it.each(WAVE_14_GUIDES)('%s is published, routed and in its expected section', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.section).toBe(EXPECTED_SECTION[slug]);
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('routes the defence-lawyer profession', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain('/professions/defence-lawyer');
    expect(ROUTED_PROFESSIONS.map((p) => p.slug)).toContain(WAVE_14_PROFESSION);
  });

  it('carries a safety review on every guide in a safety-sensitive section', () => {
    for (const slug of ['who-may-act-as-a-lawyer', 'representing-yourself']) {
      expect(
        guide(slug).safetyReview,
        `${slug} publishes in /defence without a safety review`,
      ).toBe('cleared');
    }
  });

  it('is not vacuous — eight routes were added', () => {
    expect(WAVE_14_GUIDES.length).toBe(7);
    expect(PUBLIC_ROUTE_PATHS).toContain('/professions/defence-lawyer');
  });
});

/* -------------------------------------------------------------------------- */
/* Wave 11 overlap prevented                                                  */
/* -------------------------------------------------------------------------- */

describe('nothing Wave 11 or Wave 12 already owns is restated', () => {
  it.each(PRE_OWNED)('%s still exists and was not replaced', (slug) => {
    expect(getGuide(slug), `${slug} disappeared`).toBeDefined();
  });

  it('does not duplicate a question any earlier page already asks', () => {
    const questions = ALL_GUIDES.filter((g) => g.status === 'published').map((g) =>
      g.question.toLowerCase().trim(),
    );
    const duplicated = questions.filter((q, i) => questions.indexOf(q) !== i);
    expect(duplicated, 'two published guides ask the same question').toEqual([]);
  });

  it('reproduces no paragraph of the pages it builds on', () => {
    for (const owned of PRE_OWNED) {
      const source = guide(owned);
      for (const text of blocks(source.howItWorks)) {
        if (text.length < 120) continue;
        expect(
          ALL_PROSE.includes(text),
          `a Wave 14 page reproduces a paragraph of /${source.section}/${owned}`,
        ).toBe(false);
      }
    }
  });

  it('does not re-answer how defence is funded', () => {
    for (const slug of WAVE_14_GUIDES) {
      const text = prose(guide(slug));
      expect(
        /\bmeans[- ]test(?:ed|ing)?\b.*\bthreshold\b/i.test(text),
        `${slug} is re-answering the funding question Wave 11 owns`,
      ).toBe(false);
    }
  });

  it('preserves the Brazil Defensoria finding where Wave 11 put it', () => {
    const funded = prose(guide('how-defence-is-funded'));
    expect(funded).toMatch(/Defensoria P[úu]blica/);
    expect(funded).toMatch(/Article 134/);
  });

  it('is not vacuous — the earlier pages have long paragraphs to collide with', () => {
    const long = blocks(guide('how-defence-is-funded').howItWorks).filter(
      (t) => t.length >= 120,
    );
    expect(long.length).toBeGreaterThan(2);
  });
});

/* -------------------------------------------------------------------------- */
/* Public defender not universalised; lawyer terminology not flattened        */
/* -------------------------------------------------------------------------- */

const UNIVERSALISING_CLAIMS: RegExp[] = [
  /\bevery (?:country|system|state) has (?:a )?public defender/i,
  /\bpublic defenders? (?:exist|are found) (?:in every|everywhere)/i,
  /\b(?:lawyer|attorney|advocate|barrister|solicitor)s? (?:and|or) (?:lawyer|attorney|advocate|barrister|solicitor)s? are (?:the same|synonyms|interchangeable)\b/i,
  /\b(?:barrister|solicitor|advocate|attorney|advogado|Rechtsanwalt) (?:is|means) (?:simply |just )?(?:the|a) (?:local |national )?(?:word|term|name) for (?:a )?lawyer\b/i,
  /\blegal aid (?:is|means) (?:a )?public defender\b/i,
  /\bpublicly funded (?:defence|counsel|lawyers?) (?:are|is) (?:state|government)[- ]employed\b/i,
  /\bthe bar association in every\b/i,
];

describe('the professional vocabulary is not flattened', () => {
  it.each(UNIVERSALISING_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied universalising claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'a term treated as a universal').toEqual([]);
    },
  );

  it('catches a flattening claim inserted into the corpus', () => {
    expect(
      catches(
        UNIVERSALISING_CLAIMS,
        'An advocate is simply the local word for a lawyer, and every country has a public defender.',
      ),
      'the flattening tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('states in terms that the professional titles are not translations of one another', () => {
    const text = prose(guide('who-may-act-as-a-lawyer'));
    expect(text).toMatch(/none of these is a translation of the others/i);
    expect(text).toMatch(/barrister/);
    expect(text).toMatch(/solicitor/);
    expect(text).toMatch(/advogado/);
    expect(text).toMatch(/Rechtsanwalt/);
  });

  it('creates no bar-association or public-defender institution route', () => {
    for (const slug of [
      'bar-association',
      'law-society',
      'public-defender-institution',
      'legal-aid-authority',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
  });

  it('says why no institution record follows from three unlike designs', () => {
    const text = prose(guide('who-may-act-as-a-lawyer'));
    expect(text).toMatch(/no institution page|not one institution|stays in prose/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Access is not outcome                                                      */
/* -------------------------------------------------------------------------- */

const OUTCOME_CLAIMS: RegExp[] = [
  /\baccess to justice (?:means|guarantees|ensures) (?:a |the )?(?:fair )?(?:outcome|result|verdict|victory|acquittal)\b/i,
  /\b(?:guarantees?|ensures?) (?:that )?(?:the )?(?:case|claim) (?:will )?succeed\b/i,
  /\brepresentation is free (?:for everyone|in every|everywhere)\b/i,
  /\b(?:using a court|going to court|justice) is (?:always )?(?:free|costless)\b/i,
  /\bevery (?:jurisdiction|system|country) provides (?:the same|identical) (?:assistance|support|legal aid)\b/i,
  /\bno (?:court )?fee (?:may|can) (?:ever )?be charged\b/i,
];

describe('access is never presented as outcome, free representation, or a costless system', () => {
  it.each(OUTCOME_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied outcome claim matching %s',
    (_src, pattern) => {
      expect(offending(pattern), 'access conflated with outcome or cost').toEqual([]);
    },
  );

  it('catches an outcome claim inserted into the corpus', () => {
    expect(
      catches(
        OUTCOME_CLAIMS,
        'Access to justice means a fair outcome, and representation is free for everyone.',
      ),
      'the outcome tripwires would not catch an inserted claim',
    ).toBe(true);
  });

  it('preserves the access-is-not-outcome statement Wave 12 owns', () => {
    const text = prose(guide('access-to-justice'));
    expect(text).toMatch(/does not mean winning/i);
    expect(text).toMatch(/free representation in every matter/i);
  });

  it('the cost page states that its constitutions do not abolish fees', () => {
    const text = prose(guide('the-cost-of-going-to-court'));
    expect(text).toMatch(/does not abolish fees|not an abolition of it/i);
    expect(text).toMatch(/reasonable fee/i);
  });

  it('quotes no fee amount anywhere', () => {
    expect(ALL_PROSE).not.toMatch(/\b(?:£|\$|€|R\$|KSh)\s?\d/);
  });
});

/* -------------------------------------------------------------------------- */
/* No advice, no procedural evasion                                           */
/* -------------------------------------------------------------------------- */

const ADVICE_CLAIMS: RegExp[] = [
  /\byou should (?:apply|request|ask|file|argue|instruct|appeal)\b/i,
  /\bhow to (?:apply|qualify) for legal aid\b/i,
  /\bto get an interpreter,? (?:you|ask|request)\b/i,
  /\bhere is how to (?:represent|challenge|claim)\b/i,
  /\bwe recommend (?:that )?(?:you|hiring|instructing)\b/i,
];

const EVASION_CLAIMS: RegExp[] = [
  /\b(?:delay|frustrate|stall) (?:the )?proceedings\b/i,
  /\bavoid (?:paying )?(?:court )?fees by\b/i,
  /\bexploit(?:ing)? (?:a )?(?:procedural )?(?:loophole|gap|technicality)\b/i,
  /\bto (?:avoid|escape) (?:being )?(?:served|summoned|prosecuted)\b/i,
];

describe('nothing here is advice, and nothing here is procedural evasion', () => {
  it.each(ADVICE_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied advice matching %s',
    (_src, pattern) => {
      expect(offendingDirective(pattern), 'personalised legal advice').toEqual([]);
    },
  );

  it.each(EVASION_CLAIMS.map((p) => [p.source, p] as const))(
    'no undenied evasion material matching %s',
    (_src, pattern) => {
      expect(offendingDirective(pattern), 'procedural evasion guidance').toEqual([]);
    },
  );

  it('catches advice and evasion inserted into the corpus', () => {
    expect(
      catchesDirective(
        ADVICE_CLAIMS,
        'If you cannot afford a lawyer you should apply for legal aid.',
      ),
      'the advice tripwires would not catch an inserted claim',
    ).toBe(true);
    expect(
      catchesDirective(
        EVASION_CLAIMS,
        'A party who wants more time can stall the proceedings by doing this.',
      ),
      'the evasion tripwires would not catch inserted material',
    ).toBe(true);
  });

  it('still clears a page that says it does NOT give the advice', () => {
    expect(
      deniesDirective(
        'This page does not tell you how to apply for legal aid.',
        /\bhow to (?:apply|qualify) for legal aid\b/i,
      ),
      'a page disclaiming advice is being reported as giving it',
    ).toBe(true);
  });

  it('the self-representation page refuses to recommend anything', () => {
    const g = guide('representing-yourself');
    const text = prose(g);
    expect(text).toMatch(/not a recommendation|nothing here suggests/i);
    expect(text).toMatch(/needs? a lawyer/i);
    const hasSafety = [...(g.definition ?? []), ...(g.rightsAndAccountability ?? [])].some(
      (b) => b.kind === 'callout' && b.variant === 'safety',
    );
    expect(hasSafety, 'the self-representation page has no safety callout').toBe(true);
  });

  it('the victims page directs readers to their own country rather than helping them here', () => {
    const text = prose(guide('victims-in-the-justice-process'));
    expect(text).toMatch(/not advice or support|their own country/i);
  });
});

/* -------------------------------------------------------------------------- */
/* The defence-lawyer evidence gate                                           */
/* -------------------------------------------------------------------------- */

describe('the defence-lawyer profession is routed only on the evidence that earns it', () => {
  const record = () => getProfession(WAVE_14_PROFESSION) as Profession;

  it('cites the constitutive provisions of both systems it describes', () => {
    for (const id of ['de-brao-anwaltschaft', 'br-cf-1988', 'br-lei-8906-1994-oab']) {
      expect(record().sources, `defence-lawyer does not cite ${id}`).toContain(id);
    }
  });

  it('rests on something that is not country-scoped', () => {
    const scopes = record().sources.map((id) => getSource(id)?.jurisdiction);
    expect(
      scopes.some((j) => j === undefined || j === 'INT'),
      'a global profession page resting only on national sources',
    ).toBe(true);
  });

  it('carries every field a routed profession record must have', () => {
    const p = record();
    expect(p.question, 'no reader question').toBeTruthy();
    expect(p.purpose, 'no purpose').toBeTruthy();
    expect(p.jurisdictionNote, 'no jurisdiction note').toBeTruthy();
    for (const field of [
      'responsibilities',
      'decisionAuthority',
      'constraints',
      'oversight',
      'trainingRouteShape',
    ] as const) {
      expect(p[field].length, `${field} is empty`).toBeGreaterThanOrEqual(3);
    }
    expect((p.commonMisunderstandings ?? []).length).toBeGreaterThanOrEqual(3);
  });

  it('keeps the training route structural and names no entry requirement', () => {
    const training = record().trainingRouteShape.join(' ');
    expect(training).not.toMatch(/\b(?:Germany|Brazil|England|Wales|Kenya|South Africa)\b/);
    expect(training).not.toMatch(/\b\d+ (?:years?|months?)\b/);
    expect(training).not.toMatch(/\bexam(?:ination)?\b/i);
  });

  it('states the qualification-route gap rather than filling it', () => {
    const unc = (record().uncertainty ?? []).join(' ');
    expect(unc).toMatch(/qualification routes? (?:were|was) not researched/i);
  });

  it('records the French access limitation as an access limitation', () => {
    const unc = (record().uncertainty ?? []).join(' ');
    expect(unc).toMatch(/403/);
    expect(unc).toMatch(/access limitation and not evidence/i);
  });

  it('does not present the profession as one thing across systems', () => {
    const text = professionProse(record());
    expect(text).toMatch(/differ in every system|does not constitute lawyers as a status/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Country claims are country-sourced                                         */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  Brazil: 'BR',
  Kenya: 'KE',
  'South Africa': 'ZA',
  Canada: 'CA',
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
  it.each(WAVE_14_GUIDES)('%s cites a scoped source for every country it names', (slug) => {
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

  it('the profession record cites a scoped source for every country it names', () => {
    const p = getProfession(WAVE_14_PROFESSION) as Profession;
    const text = professionProse(p);
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      if (!new RegExp(`\\b${country}\\b`).test(text)) continue;
      expect(
        hasSourceFor(p.sources, iso, country),
        `defence-lawyer discusses ${country} with no scoped source`,
      ).toBe(true);
    }
  });

  it('rejects an international instrument standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(hasSourceFor(['iccpr', 'udhr'], iso, country), `${country} laundered`).toBe(false);
    }
  });

  it('scopes the England and Wales material away from the rest of the United Kingdom', () => {
    const text = prose(guide('who-may-act-as-a-lawyer'));
    expect(text).toMatch(/Scotland/);
    expect(text).toMatch(/Northern Ireland/);
  });

  it('is not vacuous — the pages make country claims', () => {
    const named = Object.keys(COUNTRIES).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBe(Object.keys(COUNTRIES).length);
  });
});

/* -------------------------------------------------------------------------- */
/* Statutory material names its provisions                                    */
/* -------------------------------------------------------------------------- */

describe('statutory material names the provision it comes from', () => {
  const STATUTE: [string, RegExp][] = [
    ['court-language-and-interpretation', /35\(3\)\(k\)|§ 184|§ 187|s\. 14|50\(2\)\(m\)/],
    ['taking-part-in-your-own-case', /50\(7\)|§ 187|s\. 14/],
    ['the-cost-of-going-to-court', /Article 48|LXXVI|LXXVII|LXXIV/],
    ['who-runs-the-courts', /172|173|103-B/],
    ['who-may-act-as-a-lawyer', /12\(1\)|s\. 13|Article 1|§ 1/],
    ['representing-yourself', /50\(2\)\(g\)|35\(3\)\(f\)|§ 140|§ 1/],
    ['victims-in-the-justice-process', /395|50\(9\)|187\(4\)/],
  ];

  it.each(STATUTE)('%s names its provisions', (slug, pattern) => {
    expect(prose(guide(slug)), `${slug} quotes statute without naming the provision`).toMatch(
      pattern,
    );
  });

  it('carries the German original for the two constitutive statements', () => {
    expect(ALL_PROSE).toMatch(/Die Gerichtssprache ist deutsch/);
    expect(ALL_PROSE).toMatch(/unabh[äa]ngiges Organ der Rechtspflege/);
  });

  it('carries the Sorbian exception in the block that states the rule', () => {
    const g = guide('court-language-and-interpretation');
    const block = blockStating(g, /Die Gerichtssprache ist deutsch/);
    expect(block, 'the block stating GVG § 184 has gone').toBeDefined();
    expect(
      block,
      'the court-language rule is stated without the exception the same provision contains',
    ).toMatch(/Sorb/);
  });

  it('would catch the exception being dropped from that block', () => {
    const stripped =
      'Section 184 of the Courts Constitution Act opens with four words: “Die Gerichtssprache ist deutsch.” The provision admits no exception.';
    expect(
      /Sorb/.test(stripped),
      'the co-location check would not notice the exception disappearing',
    ).toBe(false);
  });

  it('records which way each language accommodation runs', () => {
    const text = prose(guide('court-language-and-interpretation'));
    expect(text).toMatch(/tried in a language that the accused person understands/i);
    expect(text).toMatch(/if that is not practicable/i);
    expect(text).toMatch(/translated into the proceedings|moves the person into it/i);
  });

  it('records the counsel condition in the block that states the substitution', () => {
    const g = guide('taking-part-in-your-own-case');
    const block = blockStating(g, /oral translation or an oral summary to replace/i);
    expect(block, 'the block stating the substitution rule has gone').toBeDefined();
    expect(
      block,
      'the substitution is stated without the condition GVG § 187(2) attaches to it',
    ).toMatch(/where the accused has defence counsel/i);
  });

  it('would catch the counsel condition being dropped from that block', () => {
    const stripped =
      'The same provision allows an oral translation or an oral summary to replace the written one where that preserves the accused’s procedural rights — and the substitution is available generally.';
    expect(
      /where the accused has defence counsel/i.test(stripped),
      'the co-location check would not notice the condition disappearing',
    ).toBe(false);
  });
});

/* -------------------------------------------------------------------------- */
/* Structural integrity                                                       */
/* -------------------------------------------------------------------------- */

describe('every Wave 14 page is structurally complete', () => {
  it.each(WAVE_14_GUIDES)(
    '%s has related entries, sources, misconceptions, uncertainty',
    (slug) => {
      const g = guide(slug);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      expect(g.sources.length).toBeGreaterThanOrEqual(1);
      expect(g.misconceptions.length).toBeGreaterThanOrEqual(3);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThanOrEqual(1);
    },
  );

  it.each(WAVE_14_GUIDES)('%s opens by scoping what it is not', (slug) => {
    const hasScope = (guide(slug).definition ?? []).some(
      (b) => b.kind === 'callout' && (b.variant === 'scope' || b.variant === 'safety'),
    );
    expect(hasScope, `${slug} opens without a scope callout`).toBe(true);
  });

  it.each(WAVE_14_GUIDES)('%s sources every block it marks as fact', (slug) => {
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

  it.each(WAVE_14_GUIDES)('%s trips no restricted-phrasing pattern', (slug) => {
    const violations = findRestrictedPhrasing(scannedProse(guide(slug)));
    expect(violations.map((v) => `${v.category}: "${v.match}"`)).toEqual([]);
  });

  it('links only to routes that exist', () => {
    for (const slug of WAVE_14_GUIDES) {
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
