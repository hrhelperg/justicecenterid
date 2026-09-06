import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PROFESSIONS, ROUTED_PROFESSIONS } from '@/content/professions';
import { INSTITUTION_TYPES } from '@/content/institutions';
import { GLOSSARY } from '@/content/glossary';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide, Profession } from '@/content/types';

/**
 * Wave 24: law enforcement careers, training and professional pathways.
 *
 * This wave changes direction, and the risks change with it. Waves 21-23 defended against getting
 * the law wrong. The risks here are different in kind, and three of them are new to the corpus.
 *
 * FALSE UNIVERSALITY, in its most consequential form yet. "You need a degree", "the police
 * academy", "detective is a rank", "the fitness test" — every one of these is a real arrangement
 * somewhere and none is general. A reader can act on a false universal here in a way they cannot
 * act on a misdescribed treaty: by spending three years and considerable money on a qualification
 * that was never required.
 *
 * OPERATIONAL DRIFT. Career content about policing sits one sentence away from tactical
 * instruction. "Recruits are instructed in defensive tactics for an average of 64 hours" is a
 * curriculum fact from a government census; describing a technique is instruction. The guards
 * below fire on the second and not the first, because a guard that cannot tell them apart would
 * make the honest sentence unwritable.
 *
 * PRODUCT-SCOPE DRIFT, which is this wave's own failure mode and has no precedent in the corpus.
 * Every career page touches procedure, and every procedural detail invites another. The
 * proportion-aware guard below exists because keyword censorship would break the legitimate
 * sentence — "a detective may prepare material used by prosecutors and courts" — while a page that
 * has quietly become a filing manual would pass any keyword check that sentence survives.
 *
 * COMMERCIAL CONTAMINATION. This is the first wave written with a commercial layer in view, and
 * the internal opportunity mapping must never reach the public corpus. A separate guard asserts
 * that it has not.
 */

const WAVE_24_GUIDES = [
  'what-a-police-academy-is',
  'do-police-officers-need-a-degree',
  'police-training-and-police-education',
  'what-police-recruits-are-taught',
  'rank-role-and-specialisation',
  'how-policing-careers-develop',
  'specialist-roles-in-policing',
  'civilian-roles-in-police-organisations',
  'skills-that-policing-relies-on',
  'physical-readiness-in-policing-careers',
  'working-life-in-policing',
  'professional-standards-in-policing-work',
] as const;

const WAVE_24_SOURCES = [
  'ew-joining-police-entry-routes',
  'ie-garda-trainee-booklet-2024',
  'ie-garda-educational-requirements',
  'de-berlin-polizei-ausbildung',
  'de-berlin-polizei-studium',
  'nl-politieacademie-basisopleidingen',
  'nl-politie-opleidingsoverzicht',
  'nl-politie-meldkamer',
  'us-bjs-training-academies-2022',
] as const;

/** Systems researched to content-confirmed Tier 1 evidence. Nothing else may be described. */
const RESEARCHED = ['England and Wales', 'Ireland', 'Berlin', 'Netherlands', 'United States'];

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 24 guide missing: ${slug}`);
  return found;
}

function profession(slug: string): Profession {
  const found = PROFESSIONS.find((p) => p.slug === slug);
  if (!found) throw new Error(`profession missing: ${slug}`);
  return found;
}

function blocks(list: readonly Block[] | undefined): string[] {
  return (list ?? []).flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((i) => [i.term, i.description]);
  });
}

function allBlocks(g: Guide): Block[] {
  return [
    ...(g.definition ?? []),
    ...(g.whyItExists ?? []),
    ...(g.howItWorks ?? []),
    ...(g.variation ?? []),
    ...(g.rightsAndAccountability ?? []),
    ...(g.furtherReading ?? []),
  ];
}

function prose(g: Guide): string {
  return [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality, m.note ?? '']),
    ...(g.uncertainty ?? []),
  ]
    .filter(Boolean)
    .join('\n');
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
    ...(p.workingEnvironment ?? []),
    ...(p.skills ?? []),
    ...(p.careerProgressionShape ?? []),
    ...(p.adjacentCareers ?? []),
    ...(p.commonMisunderstandings ?? []),
    ...(p.uncertainty ?? []),
    ...(p.countryExamples ?? []).map((c) => c.note),
  ]
    .filter(Boolean)
    .join('\n');
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Framing units exclude misconception claims, which the schema guarantees are denied. */
function tripwireUnits(g: Guide): string[] {
  const text = [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...(g.uncertainty ?? []),
  ].join('\n');
  return [
    ...sentences(text),
    ...g.misconceptions.flatMap((m) =>
      sentences([m.reality, m.note ?? ''].filter(Boolean).join(' ')),
    ),
  ];
}

/** Safety units keep everything: an instruction is an instruction wherever it sits. */
function safetyUnits(g: Guide): string[] {
  return sentences(prose(g));
}

function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  return /\b(?:not|never|no|nothing|neither|nor)\b|\bdoes not\b|\brather than\b|\bunlike\b/i.test(
    before,
  );
}

/** Carried forward from Wave 23: a research-boundary disclosure contains what it disclaims. */
function framedAsUnknown(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  if (!/\b(?:whether|if)\b/i.test(sentence.slice(0, match.index))) return false;
  return /\bnot researched\b|\bnot established\b|\bnot known\b|\bnot read\b|\bwas not\b|\bwere not\b|\bis unclear\b/i.test(
    sentence,
  );
}

const WAVE_PROFESSIONS = PROFESSIONS.map((p) => p.slug);
const ALL_UNITS = WAVE_24_GUIDES.flatMap((slug) => tripwireUnits(guide(slug)));
const SAFETY_UNITS = [
  ...WAVE_24_GUIDES.flatMap((slug) => safetyUnits(guide(slug))),
  ...PROFESSIONS.flatMap((p) => sentences(professionProse(p))),
];
const CORPUS_SAFETY_UNITS = [
  ...ALL_GUIDES.filter((g) => g.status === 'published').flatMap(safetyUnits),
  ...PROFESSIONS.flatMap((p) => sentences(professionProse(p))),
];

/**
 * A question is not an assertion, and a link label is not a claim.
 *
 * The false-universal guards fired on this wave's own page titles — "Do police officers need a
 * degree?" is the question the page answers, and every cross-reference to it repeats the phrase
 * inside `[link text](/path)`. A guard that cannot tell an interrogative from an assertion makes
 * the honest page unwritable, which is the same failure mode Wave 23 found in its emphasis guard.
 */
function isAsserted(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  /* Interrogative: the sentence asks rather than states. */
  if (/\?\s*$/.test(sentence.trim())) return false;
  /* Inside a markdown link label, i.e. a cross-reference to the page that answers it. */
  const labels = [...sentence.matchAll(/\[([^\]]*)\]\([^)]*\)/g)].map((m) => m[1] ?? '');
  if (labels.some((l) => new RegExp(pattern.source, 'i').test(l))) return false;
  return true;
}

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter(
    (s) =>
      pattern.test(s) &&
      isAsserted(s, pattern) &&
      !deniesForward(s, pattern) &&
      !framedAsUnknown(s, pattern),
  );
}

/* -------------------------------------------------------------------------- */
/* 1. The cluster exists, is routed, and is honest about its limits           */
/* -------------------------------------------------------------------------- */

describe('the Wave 24 career cluster exists and is routed', () => {
  it.each(WAVE_24_GUIDES)('%s is published with a route', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('law-enforcement');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('publishes twelve career guides and no more', () => {
    expect(WAVE_24_GUIDES.length).toBe(12);
  });

  it.each(WAVE_24_GUIDES)('%s states what it did not research', (slug) => {
    const u = guide(slug).uncertainty ?? [];
    expect(u.length).toBeGreaterThan(0);
    expect(u.join(' ')).toMatch(
      /NOT RESEARCHED|not researched|not obtained|was attempted|HTTP 403|establishes? nothing|\bno .{0,60}(?:was|were|is|are)\b|only\b.{0,40}\bwas researched/i,
    );
  });

  it.each(WAVE_24_GUIDES)('%s is reachable from a page that predates this wave', (slug) => {
    const newSlugs = new Set<string>(WAVE_24_GUIDES);
    const inbound = [
      ...ALL_GUIDES.filter(
        (g) =>
          !newSlugs.has(g.slug) &&
          (g.related.includes(slug) || prose(g).includes(`/law-enforcement/${slug})`)),
      ).map((g) => g.slug),
      ...PROFESSIONS.filter((p) =>
        professionProse(p).includes(`/law-enforcement/${slug})`),
      ).map((p) => p.slug),
    ];
    expect(inbound.length, `${slug} is only reachable from Wave 24 pages`).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* 2-3. Profession is not institution; rank is not role or specialisation     */
/* -------------------------------------------------------------------------- */

describe('a profession is not an institution', () => {
  it('no profession slug collides with an institution slug', () => {
    const institutions = new Set(INSTITUTION_TYPES.map((i) => i.slug));
    for (const p of PROFESSIONS) {
      expect(institutions.has(p.slug), `${p.slug} exists as both`).toBe(false);
    }
  });

  it('every routed profession names the institutions it works within', () => {
    for (const p of ROUTED_PROFESSIONS) {
      expect(
        (p.relatedInstitutions ?? []).length,
        `${p.slug} names no institution`,
      ).toBeGreaterThan(0);
    }
  });
});

const RANK_CONFLATION = [
  /detective is (?:a |the )?rank(?:\b|\.)/i,
  /(?:rank|ranks) and (?:role|roles|specialisation|specialisations) are the same/i,
  /(?:a )?more senior officer is (?:a )?more (?:expert|experienced) investigator/i,
  /promotion (?:to|into) detective/i,
  /(?:the )?police rank (?:ladder|structure) (?:is|runs) (?:the same|broadly the same|similar) (?:in|across|between) (?:all |most )?(?:countries|services|systems)/i,
];

describe('rank, role and specialisation stay distinct', () => {
  it.each(RANK_CONFLATION.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('the flagship page names all four things it separates', () => {
    const g = prose(guide('rank-role-and-specialisation'));
    for (const term of [/\brank\b/i, /\brole\b/i, /\bspecialisation\b/i, /\bassignment\b/i]) {
      expect(g, `missing ${term.source}`).toMatch(term);
    }
  });

  it('states no rank ladder for any country anywhere in the wave', () => {
    expect(
      offending(
        /(?:ranks?|rank structure) (?:are|is|runs) ?:? ?(?:constable|officer|sergeant|inspector|lieutenant|captain)/i,
        SAFETY_UNITS,
      ),
    ).toEqual([]);
  });

  it('records the Dutch entry route that refutes the promotion assumption', () => {
    expect(prose(guide('rank-role-and-specialisation'))).toMatch(/bachelor Rechercheur/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 4-8. No universal training model, degree, or physical standard             */
/* -------------------------------------------------------------------------- */

const FALSE_UNIVERSALS = [
  /(?:every|each|all) (?:country|countries|system|systems|service|services) (?:has|have|use|uses|runs?) (?:a |an )?police academy/i,
  /(?:police officers|officers|you) (?:need|require|must have) (?:a )?(?:university |college )?degree/i,
  /(?:a )?(?:criminal justice )?degree is (?:required|necessary|needed) (?:to|for) (?:join|become|enter)/i,
  /(?:the |a )?standard police fitness test/i,
  /(?:police )?(?:fitness|physical) (?:standards?|requirements?) (?:are|is) (?:the same|universal|standardised)/i,
  /police training (?:takes|lasts) (?:about |roughly |around )?\w+ (?:weeks|months|years) (?:everywhere|in every country|worldwide)/i,
  /(?:recruitment|entry) requirements are (?:the same|identical|standardised) (?:everywhere|across countries|in all)/i,
];

describe('no universal training model, qualification or standard is asserted', () => {
  it.each(FALSE_UNIVERSALS.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(
        offending(pattern, [
          ...ALL_UNITS,
          ...PROFESSIONS.flatMap((p) => sentences(professionProse(p))),
        ]),
      ).toEqual([]);
    },
  );

  it('the degree page carries the official sentence that settles it', () => {
    expect(prose(guide('do-police-officers-need-a-degree'))).toMatch(
      /You don.{1,3}t need a degree to join the police/i,
    );
  });

  it('the degree page distinguishes the award from the requirement', () => {
    const g = prose(guide('do-police-officers-need-a-degree'));
    expect(g).toMatch(/output|awards? on completion|what the route awards/i);
    expect(g).toMatch(/Level 3/);
  });

  it('the academy page shows more than one training structure', () => {
    const g = prose(guide('what-a-police-academy-is'));
    const named = RESEARCHED.filter((r) => g.includes(r));
    expect(
      named.length,
      'the academy page describes fewer than four systems',
    ).toBeGreaterThanOrEqual(4);
  });

  it('the physical-readiness page states no standard, test or programme', () => {
    const g = prose(guide('physical-readiness-in-policing-careers'));
    expect(g).not.toMatch(
      /\b\d+\s*(?:push-?ups?|sit-?ups?|press-?ups?|pull-?ups?|repetitions|reps)\b/i,
    );
    expect(g).not.toMatch(
      /\b(?:run|complete|cover)\s+\d+(?:\.\d+)?\s*(?:km|miles?|metres|meters)\b/i,
    );
    expect(g).not.toMatch(/\bin under \d+ (?:seconds|minutes)\b/i);
    expect(g).toMatch(/no fitness standard|No fitness standard|no standard is stated/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 9. Recruitment requirements are jurisdiction-specific and dated            */
/* -------------------------------------------------------------------------- */

describe('recruitment facts are scoped to a system and a date', () => {
  it('every entry-requirement claim names the system it belongs to', () => {
    const g = prose(guide('do-police-officers-need-a-degree'));
    for (const system of ['England and Wales', 'Ireland', 'Berlin', 'Netherlands']) {
      expect(g, `entry requirements stated without naming ${system}`).toContain(system);
    }
  });

  it('the degree page dates its statements', () => {
    expect(prose(guide('do-police-officers-need-a-degree'))).toMatch(/6 September 2026/);
  });

  it('describes no system that was not researched', () => {
    const NOT_RESEARCHED = [
      'France',
      'Czechia',
      'Poland',
      'Spain',
      'Canada',
      'Australia',
      'New Zealand',
      'Japan',
      'South Africa',
      'Brazil',
    ];
    /*
     * Scoped to what THIS WAVE asserts. The first form ran over every profession record and caught
     * a sourced Canadian sentence in the pre-existing corrections-officer record — a correct catch
     * against the wrong target. Canada was not researched for Wave 24; it was researched for an
     * earlier one, and that record carries its own country example and sources. The rule this wave
     * must satisfy is that IT describes no system it did not research.
     */
    const WAVE_24_UNITS = [
      ...WAVE_24_GUIDES.flatMap((slug) => safetyUnits(guide(slug))),
      ...PROFESSIONS.flatMap((p) =>
        sentences(
          [
            ...(p.workingEnvironment ?? []),
            ...(p.skills ?? []),
            ...(p.careerProgressionShape ?? []),
            ...(p.adjacentCareers ?? []),
          ].join('\n'),
        ),
      ),
      ...sentences(professionProse(profession('emergency-dispatcher'))),
    ];
    for (const country of NOT_RESEARCHED) {
      const claiming = WAVE_24_UNITS.filter(
        (u) =>
          new RegExp(`\\b${country}\\b`).test(u) &&
          !/not researched|NOT RESEARCHED|none of those was researched|was attempted|HTTP 403|not described|nowhere in this wave|establishes? nothing/i.test(
            u,
          ),
      );
      expect(claiming, `${country} is described but was not researched`).toEqual([]);
    }
  });

  /*
   * Mutation W24M8 changed a country example's countrySlug from netherlands to france while
   * leaving the Dutch note and the Dutch sources in place, and every test passed. The publication
   * gate checks only that the example points at a PUBLISHED dossier, and France is published — so
   * the record claimed a French example supported entirely by Dutch sources.
   *
   * The missing rule is the one the platform already applies to guides: a country claim needs a
   * source scoped to that country. Asserted here for the records this wave touches.
   */
  it('every country example is supported by a source scoped to that country', () => {
    const ISO: Record<string, string> = {
      netherlands: 'NL',
      ireland: 'IE',
      germany: 'DE',
      'united-states': 'US',
      france: 'FR',
      japan: 'JP',
      brazil: 'BR',
      canada: 'CA',
      australia: 'AU',
      spain: 'ES',
      poland: 'PL',
      czechia: 'CZ',
      'new-zealand': 'NZ',
      'south-africa': 'ZA',
    };
    const problems: string[] = [];
    for (const p of [profession('emergency-dispatcher')]) {
      for (const example of p.countryExamples ?? []) {
        const iso = ISO[example.countrySlug];
        if (!iso) {
          problems.push(`${p.slug}: unmapped country ${example.countrySlug}`);
          continue;
        }
        const scoped = p.sources
          .map((id) => getSource(id))
          .filter((src) => src?.jurisdiction === iso);
        if (scoped.length === 0) {
          problems.push(
            `${p.slug}: country example "${example.countrySlug}" cites no source scoped to ${iso}`,
          );
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it('every Wave 24 source is content-confirmed and carries a jurisdiction', () => {
    for (const id of WAVE_24_SOURCES) {
      const s = getSource(id);
      expect(s, `missing source ${id}`).toBeDefined();
      expect(s!.verificationMethod, `${id} is not content-confirmed`).toBe('content-confirmed');
      expect(s!.jurisdiction, `${id} has no jurisdiction`).toBeTruthy();
      expect(s!.url).toMatch(/^https:\/\//);
    }
  });

  it.each(WAVE_24_GUIDES)('%s cites only sources it declares, block by block', (slug) => {
    const g = guide(slug);
    for (const block of allBlocks(g)) {
      if (block.kind !== 'paragraph' || !block.sources) continue;
      for (const id of block.sources) {
        expect(g.sources, `${slug} block cites undeclared ${id}`).toContain(id);
      }
    }
  });

  it.each(WAVE_24_GUIDES)('%s marks every factual paragraph with a source', (slug) => {
    for (const block of allBlocks(guide(slug))) {
      if (block.kind !== 'paragraph' || block.claim !== 'fact') continue;
      expect(block.sources?.length, `${slug}: fact without a source`).toBeGreaterThan(0);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 10-11. Civilian careers exist; police work is not weapons and arrests      */
/* -------------------------------------------------------------------------- */

describe('police organisations are not described as entirely sworn', () => {
  it('a page exists that says so', () => {
    const g = prose(guide('civilian-roles-in-police-organisations'));
    expect(g).toMatch(/analyst/i);
    expect(g).toMatch(/control.room|contact/i);
    expect(g).toMatch(/not (?:composed )?only|do not have to be|no(?:t)? sworn/i);
  });

  it('a civilian role is routed as a profession in its own right', () => {
    expect(ROUTED_PROFESSIONS.map((p) => p.slug)).toContain('emergency-dispatcher');
  });

  it('never says civilian roles are support rather than professional', () => {
    expect(offending(/civilian (?:roles|staff) are (?:just |merely |only )?support/i)).toEqual(
      [],
    );
  });
});

const WEAPONS_FRAMING = [
  /police(?: work| officers)? (?:is|are) (?:mainly|mostly|primarily|chiefly) (?:about )?(?:weapons|firearms|arrests|force|pursuits)/i,
  /(?:the job|policing) (?:is|consists of) (?:mainly |mostly |primarily )?(?:making )?arrests and (?:using )?(?:weapons|force)/i,
  /most of (?:a |an )?(?:officer|police officer).{0,20}(?:time|day|shift) is spent (?:making arrests|using force|with weapons)/i,
];

describe('policing is not modelled as weapons and arrests', () => {
  it.each(WEAPONS_FRAMING.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(
        offending(pattern, [
          ...ALL_UNITS,
          ...PROFESSIONS.flatMap((p) => sentences(professionProse(p))),
        ]),
      ).toEqual([]);
    },
  );

  it('the curriculum page shows legal instruction outweighing the skills subjects', () => {
    const g = prose(guide('what-police-recruits-are-taught'));
    expect(g).toMatch(/87/);
    expect(g).toMatch(/73 hours|73/);
    expect(g).toMatch(/criminal and constitutional law/i);
  });

  it('the flagship role describes communication and documentation as the substance', () => {
    const p = professionProse(profession('patrol-officer'));
    expect(p).toMatch(/[Cc]ommunication/);
    expect(p).toMatch(/writing|record/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 12, 25. Training description is never tactical instruction                 */
/* -------------------------------------------------------------------------- */

const TACTICAL_INSTRUCTION = [
  /(?:how to|steps? to|technique for|method for) (?:restrain|handcuff|subdue|disarm|breach|clear a room|take down|control a suspect)/i,
  /(?:hold|grip|place your|position your|apply the) (?:hands?|arm|wrist|weapon|firearm|baton)/i,
  /(?:aim|fire|discharge|draw) (?:the |your )?(?:weapon|firearm|gun|pistol)/i,
  /(?:to|when) (?:pursue|follow|tail) (?:a|the) (?:suspect|vehicle|target),? (?:you should|first|begin by)/i,
  /(?:surveillance|counter-surveillance|interrogation) technique/i,
  /(?:step \d|first,|then,|next,)[^.]{0,60}(?:restrain|strike|handcuff|breach|entry|takedown)/i,
];

describe('training content describes what is taught, never how', () => {
  it.each(TACTICAL_INSTRUCTION.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it.each(TACTICAL_INSTRUCTION.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus contains %s',
    (_label, pattern) => {
      expect(CORPUS_SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('the curriculum page names subjects without describing any of them', () => {
    const g = prose(guide('what-police-recruits-are-taught'));
    expect(g).toMatch(/defensive tactics/i);
    expect(g).toMatch(/does not describe how|no technique|describes no technique/i);
  });

  it('the specialist page carries an explicit capability boundary', () => {
    const g = prose(guide('specialist-roles-in-policing'));
    expect(g).toMatch(/no method|describes no method|not described here|no capability/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 13. Positive institutional framing is not propaganda                       */
/* -------------------------------------------------------------------------- */

const PROPAGANDA = [
  /police (?:officers )?are heroes/i,
  /(?:a )?noble (?:profession|calling)/i,
  /(?:the )?(?:brave|courageous) men and women/i,
  /(?:join|serve) (?:us|the force|today)/i,
  /(?:a )?rewarding career (?:awaits|for you)/i,
  /police(?: officers)? are (?:dangerous|the enemy|a threat)/i,
  /(?:policing|the police) (?:is|are) (?:inherently|fundamentally) (?:corrupt|racist|violent)/i,
];

describe('institutional framing is professional rather than promotional or hostile', () => {
  it.each(PROPAGANDA.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('describes demands as well as purpose', () => {
    const g = prose(guide('working-life-in-policing'));
    expect(g).toMatch(/shift/i);
    expect(g).toMatch(/distress|demanding|cumulative/i);
  });

  it('makes no institutional-effectiveness or public-trust claim', () => {
    for (const unit of SAFETY_UNITS) {
      expect(findRestrictedPhrasing(unit), unit.slice(0, 100)).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 14, 29. Canonical ownership: no duplicate search intent                    */
/* -------------------------------------------------------------------------- */

describe('career pages do not duplicate profession pages', () => {
  it('no /careers route family exists', () => {
    expect(PUBLIC_ROUTE_PATHS.filter((p) => p.startsWith('/careers'))).toEqual([]);
  });

  it('no guide slug restates a profession slug', () => {
    const collisions: string[] = [];
    for (const slug of WAVE_24_GUIDES) {
      for (const p of WAVE_PROFESSIONS) {
        if (slug === p || slug === `what-does-a-${p}-do` || slug === `${p}-career`) {
          collisions.push(`${slug} duplicates /professions/${p}`);
        }
      }
    }
    expect(collisions).toEqual([]);
  });

  it('no two Wave 24 guides ask the same question', () => {
    const questions = WAVE_24_GUIDES.map((s) => guide(s).question?.toLowerCase().trim());
    expect(new Set(questions).size).toBe(questions.length);
  });

  it('every Wave 24 guide has a distinct title and short title', () => {
    const titles = WAVE_24_GUIDES.map((s) => guide(s).title);
    const shorts = WAVE_24_GUIDES.map((s) => guide(s).shortTitle ?? guide(s).title);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(shorts).size).toBe(shorts.length);
  });

  it('the role-level question is answered on the profession page, not duplicated in a guide', () => {
    for (const slug of WAVE_24_GUIDES) {
      expect(
        guide(slug).entityType,
        `${slug} is modelled as a profession rather than a concept`,
      ).toBe('concept');
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 17-18. No salary, no unsupported employment statistic                      */
/* -------------------------------------------------------------------------- */

const MONEY = [
  /[€$£]\s?[\d,]+/,
  /\b\d[\d,.]*\s?(?:euros?|dollars?|pounds?)\b/i,
  /\b(?:salary|salaries|pay scale|starting pay|annual pay|wage|wages|allowance of)\b/i,
  /\bearns?\b|\bpaid\s+[€$£]?\d/i,
];

describe('the wave publishes no pay information', () => {
  it.each(MONEY.map((p) => [p.source, p] as const))(
    'career content contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('no employment statistic appears without a source', () => {
    const stat =
      /\b[\d,]{2,}\s+(?:officers|staff|employees|vacancies|applicants|recruits)\b|\b\d+(?:\.\d+)?\s?%\s+of\s+(?:officers|staff|police)/i;
    const offenders = WAVE_24_GUIDES.flatMap((slug) => {
      const g = guide(slug);
      return allBlocks(g)
        .filter(
          (b): b is Extract<Block, { kind: 'paragraph' }> =>
            b.kind === 'paragraph' && stat.test(b.text) && !(b.sources && b.sources.length > 0),
        )
        .map((b) => `${slug}: ${b.text.slice(0, 80)}`);
    });
    expect(offenders).toEqual([]);
  });

  it('every numeric training figure sits in a sourced paragraph', () => {
    const hours = /\b\d{2,4}\s*(?:hours|hrs)\b/i;
    for (const slug of WAVE_24_GUIDES) {
      const g = guide(slug);
      for (const b of allBlocks(g)) {
        if (b.kind !== 'paragraph' || !hours.test(b.text)) continue;
        expect(b.sources?.length, `${slug}: hour figure without a source`).toBeGreaterThan(0);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 19-24. Nothing commercial, invented, or affiliate                          */
/* -------------------------------------------------------------------------- */

/*
 * Narrowed after the first run matched ordinary English throughout the corpus: "public order",
 * "in what order", "Referral of concerns about welfare", "whether the academy is run by the
 * police". A commercial guard that fires on "public order" is noise, and noise gets deleted. Each
 * pattern now requires a genuinely transactional construction.
 */
const COMMERCIAL = [
  /\b(?:buy|purchase) (?:this|our|the|a|now)\b|\badd to (?:cart|basket)\b|\bshop now\b/i,
  /\b(?:affiliate link|sponsored (?:by|content|post)|partner link|discount code|promo code|referral (?:link|fee|bonus))\b/i,
  /\b(?:enrol|enroll|sign up|register) (?:now|today|here)\b/i,
  /\bbest (?:academy|academies|course|courses|training provider|preparation)\b/i,
  /\brecommended (?:course|book|product|equipment|provider|programme)\b/i,
  /\bour (?:course|programme|academy|preparation pack|study guide|training)\b/i,
];

describe('the public corpus carries nothing commercial', () => {
  it.each(COMMERCIAL.map((p) => [p.source, p] as const))(
    'career content contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('names no academy, course, employer or vacancy that was not researched', () => {
    /*
     * Named institutions are permitted ONLY where a content-confirmed source establishes them.
     * These four are: the Garda College at Templemore, the Politieacademie, and the two named
     * England and Wales entry programmes. Anything else would be an invented institution.
     */
    const PERMITTED =
      /Garda College|Politieacademie|Police Constable Degree Apprenticeship|Degree Holder Entry Programme|Police Constable Entry Programme|Bureau of Justice Statistics|National Academy of Sciences/;
    const suspicious = SAFETY_UNITS.filter(
      (u) =>
        /\b(?:Academy|College|Institute|University|School) of\b|\bthe [A-Z][a-z]+ (?:Academy|College)\b/.test(
          u,
        ) && !PERMITTED.test(u),
    );
    expect(suspicious).toEqual([]);
  });

  it('links to no external site from any career page', () => {
    expect(SAFETY_UNITS.filter((s) => /\]\(https?:\/\//.test(s))).toEqual([]);
  });

  it('offers no equipment, weapon or tactical product of any kind', () => {
    const commerce =
      /\b(?:body armour|body armor|handcuffs|baton|holster|duty belt|tactical (?:gear|vest|equipment))\b.{0,40}\b(?:buy|shop|price|available|recommended|our)\b/i;
    expect(CORPUS_SAFETY_UNITS.filter((s) => commerce.test(s))).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 26, and Part AJ: the procedural-depth guard                                */
/* -------------------------------------------------------------------------- */

/**
 * PRODUCT-SCOPE CONTROL, not keyword censorship.
 *
 * The purpose is to detect a career page that has become substantially about legal procedure, not
 * to forbid the word "prosecutor". "A detective may prepare material used by prosecutors and
 * courts" is a legitimate sentence about a role and must survive; a page explaining filing
 * deadlines and motion practice has left the product, however carefully each sentence is written.
 *
 * The guard is therefore PROPORTIONAL. It counts sentences carrying procedural-depth markers
 * against the page's total, and fires when they exceed a share no genuine career page reaches. It
 * additionally fires, at any proportion, on step-sequenced procedural instruction, because that
 * is a how-to regardless of how little of the page it occupies.
 */
const PROCEDURAL_DEPTH =
  /\b(?:filing|file a motion|motions?|notice of appeal|appeal deadline|limitation period|procedural deadline|evidentiary objection|objection to evidence|warrant application|apply for a warrant|grounds of appeal|pleadings?|service of process|interlocutory)\b/i;

/*
 * Mutation W24M6 defeated the first form of this pattern by omitting one comma. It required
 * "first," and the injected text read "To appeal, first file a notice of appeal" — so a filing
 * manual dropped into a career page passed every test. The sequencing word is the signal; the
 * punctuation after it is not.
 */
const PROCEDURAL_HOWTO =
  /\b(?:step \d|first(?:ly)?|then|next|finally|begin by|start by)\b[^.]{0,80}\b(?:file|submit|lodge|serve|apply for|appeal against|object to)\b/i;

describe('the procedural-depth guard keeps career pages inside the product', () => {
  it.each(WAVE_24_GUIDES)('%s is not substantially about legal procedure', (slug) => {
    const units = sentences(prose(guide(slug)));
    const hits = units.filter((u) => PROCEDURAL_DEPTH.test(u));
    const share = hits.length / units.length;
    expect(
      share,
      `${slug} is ${(share * 100).toFixed(1)}% procedural: ${hits.slice(0, 3).join(' | ')}`,
    ).toBeLessThan(0.08);
    /*
     * Proportion alone was not enough. W24M6 added three procedural paragraphs to a long page and
     * stayed under the share threshold while reading as a filing guide. A career page should carry
     * almost no procedural-depth sentences at all, so the absolute count is the tighter constraint
     * on a long page and the proportion is the tighter one on a short page. Both apply.
     */
    expect(
      hits.length,
      `${slug} carries ${hits.length} procedural sentences: ${hits.join(' | ')}`,
    ).toBeLessThanOrEqual(2);
  });

  it.each(WAVE_24_GUIDES)('%s contains no step-sequenced procedural instruction', (slug) => {
    const offenders = sentences(prose(guide(slug))).filter((u) => PROCEDURAL_HOWTO.test(u));
    expect(offenders).toEqual([]);
  });

  it('the guard does not fire on a legitimate sentence about a role', () => {
    /* The exact sentence the brief names. If this ever fails, the guard has become censorship. */
    const legitimate = 'A detective may prepare material used by prosecutors and courts.';
    expect(PROCEDURAL_DEPTH.test(legitimate)).toBe(false);
    expect(PROCEDURAL_HOWTO.test(legitimate)).toBe(false);
  });

  it('the guard does fire on a page that has become a filing manual', () => {
    const drifted = [
      'To begin, file a notice of appeal within the limitation period.',
      'The appeal deadline runs from the date of the order.',
      'Next, serve the pleadings on the other party.',
    ];
    expect(drifted.filter((s) => PROCEDURAL_DEPTH.test(s)).length).toBeGreaterThanOrEqual(2);
    expect(drifted.some((s) => PROCEDURAL_HOWTO.test(s))).toBe(true);
  });

  it('career professions are equally inside the product', () => {
    for (const p of PROFESSIONS) {
      const units = sentences(professionProse(p));
      const share = units.filter((u) => PROCEDURAL_DEPTH.test(u)).length / units.length;
      expect(share, `${p.slug} is ${(share * 100).toFixed(1)}% procedural`).toBeLessThan(0.08);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 27. No individualised recruitment or eligibility advice                    */
/* -------------------------------------------------------------------------- */

const INDIVIDUAL_ADVICE = [
  /\byou (?:will|would|can|could) (?:qualify|be eligible|be accepted|pass|be rejected)\b/i,
  /\bif you have a (?:conviction|caution|medical condition|tattoo|criminal record)\b/i,
  /\b(?:how to|steps? to) (?:appeal|challenge|overturn) (?:a |your )?(?:rejection|decision|screening|vetting)\b/i,
  /\b(?:you should|we recommend you) (?:apply|prepare|train|study)\b/i,
  /\bcheck (?:whether|if) you (?:qualify|are eligible)\b/i,
];

describe('no individual is told whether they qualify', () => {
  /*
   * Framing units, not safety units. "A page like this can tell you whether you would pass" is a
   * misconception CLAIM, which the schema guarantees the reality denies — the page says the
   * opposite of the pattern it contains. Advice is a stance rather than an instruction, so the
   * denial-aware unit set is the correct one here.
   */
  it.each(INDIVIDUAL_ADVICE.map((p) => [p.source, p] as const))(
    'career content asserts nothing matching %s',
    (_label, pattern) => {
      expect(
        offending(pattern, [
          ...ALL_UNITS,
          ...PROFESSIONS.flatMap((p) => sentences(professionProse(p))),
        ]),
      ).toEqual([]);
    },
  );

  it('directs readers to the official recruitment source instead', () => {
    const g = `${prose(guide('do-police-officers-need-a-degree'))}\n${prose(guide('physical-readiness-in-policing-careers'))}`;
    expect(g).toMatch(
      /official recruitment|the employer|official material|official information/i,
    );
  });

  it('states no vetting, medical or background screening criterion', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /\b(?:vetting|background check|medical standard|screening) (?:requires|excludes|means you)\b/i.test(
          s,
        ),
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 30. Internal commercial mapping never reaches the public corpus            */
/* -------------------------------------------------------------------------- */

describe('commercial opportunity documentation does not leak into content', () => {
  const LEAK =
    /\b(?:monetis|monetiz|commercial opportunity|revenue|affiliate|sponsorship|HIGH opportunity|MEDIUM opportunity|LOW opportunity|INAPPROPRIATE)\b/i;

  it('no published guide contains monetisation vocabulary', () => {
    expect(CORPUS_SAFETY_UNITS.filter((s) => LEAK.test(s))).toEqual([]);
  });

  it('no profession record contains monetisation vocabulary', () => {
    expect(PROFESSIONS.filter((p) => LEAK.test(professionProse(p))).map((p) => p.slug)).toEqual(
      [],
    );
  });

  it('no source note references a commercial plan', () => {
    expect(SOURCES.filter((s) => LEAK.test(s.note ?? '')).map((s) => s.id)).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Carrying Wave 20's guard forward rather than only relaxing it              */
/* -------------------------------------------------------------------------- */

describe('the civil-protection coordination function still has no invented entity', () => {
  it('no institution type asserts a cross-country identity for it', () => {
    expect(
      INSTITUTION_TYPES.filter((i) =>
        /civil-protection|emergency-management|disaster|emergency-coordination/i.test(i.slug),
      ).map((i) => i.slug),
    ).toEqual([]);
  });

  it('no profession or glossary term does either', () => {
    expect(
      PROFESSIONS.filter((p) =>
        /civil-protection|emergency-management|disaster|emergency-coordination/i.test(p.slug),
      ).map((p) => p.slug),
    ).toEqual([]);
    expect(
      GLOSSARY.filter((t) =>
        /^(?:state-of-emergency|emergency-powers|civil-protection|derogation)$/.test(t.slug),
      ).map((t) => t.slug),
    ).toEqual([]);
  });

  it('the dispatcher record does not assert an employment classification it did not establish', () => {
    const p = profession('emergency-dispatcher');
    expect((p.uncertainty ?? []).join(' ')).toMatch(/NOT ESTABLISHED|not established/i);
    expect(professionProse(p)).not.toMatch(
      /(?:dispatchers|the role) (?:are|is) (?:usually |normally |generally )?civilian/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Career fields are populated and structural                                 */
/* -------------------------------------------------------------------------- */

describe('the profession records carry career orientation', () => {
  it.each(ROUTED_PROFESSIONS.map((p) => p.slug))(
    '%s describes what the work is like',
    (slug) => {
      const p = profession(slug);
      expect(
        (p.workingEnvironment ?? []).length,
        `${slug} has no working environment`,
      ).toBeGreaterThan(0);
      expect((p.skills ?? []).length, `${slug} lists no skills`).toBeGreaterThan(0);
      expect(
        (p.careerProgressionShape ?? []).length,
        `${slug} describes no progression`,
      ).toBeGreaterThan(0);
      expect(
        (p.adjacentCareers ?? []).length,
        `${slug} names no adjacent career`,
      ).toBeGreaterThan(0);
    },
  );

  it('no profession record states a country-specific entry requirement', () => {
    /*
     * The prior decision at the top of professions.ts, asserted rather than trusted: entry
     * requirements are country-specific, time-sensitive and the most common site of fabrication,
     * so they belong on a country module with a jurisdiction and a dated source.
     */
    const requirement =
      /\b(?:you (?:need|must have)|applicants? (?:need|must have)|requires?) (?:a |an )?(?:Leaving Certificate|Abitur|Fachhochschulreife|Level \d|A-levels?|high school diploma|degree)\b/i;
    expect(
      PROFESSIONS.filter((p) => requirement.test(professionProse(p))).map((p) => p.slug),
    ).toEqual([]);
  });

  it('progression is described without a universal ladder', () => {
    for (const p of ROUTED_PROFESSIONS) {
      const text = (p.careerProgressionShape ?? []).join(' ');
      expect(text, `${p.slug} asserts a universal progression`).not.toMatch(
        /(?:in every|in all) (?:system|systems|service|services|countries)/i,
      );
    }
  });
});
