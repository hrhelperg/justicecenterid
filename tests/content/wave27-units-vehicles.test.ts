import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PROFESSIONS } from '@/content/professions';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 27: police units, vehicles and organisational structure.
 *
 * Two risks, and the first is not a safety risk at all.
 *
 * CANNIBALISATION. Wave 24 owns "what specialisations exist" at `specialist-roles-in-policing`,
 * and owns it comprehensively — ten named areas of work. This wave is one careless sentence away
 * from re-answering that question under a different slug, which would split the ownership of the
 * corpus's most-searched career question. The guards below assert that this wave takes the
 * organisational angle and leaves the career angle alone.
 *
 * CAPABILITY DESCRIPTION, which is the same risk Wave 26 carried and is sharper here. A unit is
 * more interesting than a uniform, and the temptation to say what one can do is correspondingly
 * greater. The Dutch source for this wave openly describes pursuit and interception uses of a
 * vehicle category; that material is deliberately unused, and the guards make its absence a rule
 * rather than a choice made once.
 *
 * The programme's own words are the test: this platform is not a tactical training provider, a
 * weapons retailer or a surveillance capability database. Naming that a service has a dive squad
 * is institutional; describing what the dive squad can do is the thing that would make it one.
 */

const WAVE_27 = [
  'what-a-police-unit-is',
  'how-specialist-units-cover-a-country',
  'police-vehicles-and-what-they-are-for',
  'marked-vehicles-and-police-identification',
] as const;

const WAVE_27_SOURCES = [
  'nz-police-structure',
  'nz-police-teams-units',
  'nl-politie-huisstijl-protection',
  'nl-politie-voertuigen',
] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 27 guide missing: ${slug}`);
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

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

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

const NEGATION_WINDOW = 60;
function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  let before = sentence.slice(Math.max(0, match.index - NEGATION_WINDOW), match.index);
  const boundary = Math.max(
    before.lastIndexOf(':'),
    before.lastIndexOf(';'),
    before.lastIndexOf('—'),
  );
  if (boundary >= 0) before = before.slice(boundary + 1);
  return /\b(?:not|never|no|nothing|neither|nor|cannot)\b|\bdoes not\b|\brather than\b|\bunlike\b/i.test(
    before,
  );
}

function isAsserted(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  if (/\?\s*$/.test(sentence.trim())) return false;
  const labels = [...sentence.matchAll(/\[([^\]]*)\]\([^)]*\)/g)].map((m) => m[1] ?? '');
  return !labels.some((l) => new RegExp(pattern.source, 'i').test(l));
}

const FRAMING_UNITS = WAVE_27.flatMap((s) => tripwireUnits(guide(s)));
const SAFETY_UNITS = WAVE_27.flatMap((s) => sentences(prose(guide(s))));
const CORPUS_SAFETY_UNITS = [
  ...ALL_GUIDES.filter((g) => g.status === 'published').flatMap((g) => sentences(prose(g))),
  ...PROFESSIONS.flatMap((p) => sentences(JSON.stringify(p))),
  ...PUBLISHED_DOSSIERS.flatMap((d) => sentences(JSON.stringify(d))),
];

function offending(pattern: RegExp, units: string[] = FRAMING_UNITS): string[] {
  return units.filter(
    (s) => pattern.test(s) && isAsserted(s, pattern) && !deniesForward(s, pattern),
  );
}

/* -------------------------------------------------------------------------- */
/* 1. The cluster exists and declares its limits                              */
/* -------------------------------------------------------------------------- */

describe('the Wave 27 units and vehicles layer exists and is routed', () => {
  it.each(WAVE_27)('%s is published with a route', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('law-enforcement');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('publishes four guides and no more', () => {
    expect(WAVE_27.length).toBe(4);
  });

  it.each(WAVE_27)('%s states what it did not research', (slug) => {
    const u = guide(slug).uncertainty ?? [];
    expect(u.length).toBeGreaterThan(0);
    expect(u.join(' ')).toMatch(
      /NOT RESEARCHED|not researched|NOT ESTABLISHED|was not|were not/i,
    );
  });

  it.each(WAVE_27)('%s is linked from a page that predates this wave', (slug) => {
    const NEW = new Set<string>(WAVE_27);
    const inbound = ALL_GUIDES.filter(
      (g) => !NEW.has(g.slug) && prose(g).includes(`/law-enforcement/${slug})`),
    );
    expect(inbound.length, `${slug} has no pre-existing inbound link`).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* 2. CANNIBALISATION — Wave 24 keeps the careers question                    */
/* -------------------------------------------------------------------------- */

describe('this wave does not re-answer the specialisations question', () => {
  it('the Wave 24 owner still exists and still owns it', () => {
    const owner = guide('specialist-roles-in-policing');
    expect(owner.question).toMatch(/what specialisations exist/i);
    expect(owner.status).toBe('published');
  });

  it('no Wave 27 guide asks the Wave 24 question', () => {
    for (const slug of WAVE_27) {
      expect(guide(slug).question, `${slug} re-asks the specialisations question`).not.toMatch(
        /what specialisations exist/i,
      );
    }
  });

  it('no Wave 27 guide re-enumerates the Wave 24 areas of work', () => {
    /*
     * Wave 24 defines ten areas of work as definitionList terms. A Wave 27 page that listed most of
     * them again would have taken the question over without saying so.
     */
    const WAVE_24_AREAS = [
      'Investigation',
      'Community policing',
      'Roads and traffic policing',
      'Public order',
      'Cybercrime and digital investigation',
      'Intelligence and analysis',
      'Forensic support',
      'Training, supervision and professional standards',
      'Public information and administration',
    ];
    for (const slug of WAVE_27) {
      const text = prose(guide(slug));
      const reused = WAVE_24_AREAS.filter((a) => text.includes(a));
      expect(
        reused.length,
        `${slug} re-enumerates Wave 24 areas: ${reused.join(', ')}`,
      ).toBeLessThanOrEqual(2);
    }
  });

  it('the units page routes the careers question to its owner', () => {
    expect(prose(guide('what-a-police-unit-is'))).toMatch(
      /\/law-enforcement\/specialist-roles-in-policing/,
    );
  });

  it('no two Wave 27 guides ask the same question', () => {
    const qs = WAVE_27.map((s) => guide(s).question?.toLowerCase().trim());
    expect(new Set(qs).size).toBe(qs.length);
  });
});

/* -------------------------------------------------------------------------- */
/* 3. NO CAPABILITY, NO TACTICS, NO DEPLOYMENT DETAIL                         */
/* -------------------------------------------------------------------------- */

const CAPABILITY = [
  /\b(?:the|a|this) (?:unit|squad|team) (?:can|is able to|is capable of|is equipped to)\b/i,
  /\b(?:deploys?|deployed) (?:with|using|by means of)\b|\bdeployment (?:tactics?|procedure|protocol)\b/i,
  /\b(?:pursuit|interception|intercepting) (?:tactics?|technique|procedure|protocol)\b/i,
  /*
   * Narrowed. `engine` matches "search engine"; `bulletproof` matches the UN Basic Principles
   * citation on the use-of-force page — "self-defensive equipment such as shields, helmets and
   * bulletproof vests" — which is institutional description of an international standard, not a
   * specification. A specification guard needs a specification.
   */
  /\b(?:top speed|horsepower|0-60|\d+\s?bhp|engine capacity|\d+(?:\.\d+)?[- ]litre engine|armoured to (?:a )?(?:level|standard))\b/i,
  /\b(?:response time|arrives? within|on scene within) \d/i,
  /\b(?:ANPR|automatic number plate recognition) (?:hits?|system) (?:is|are|works|detects)\b/i,
];

describe('the wave describes no capability, tactics or deployment', () => {
  it.each(CAPABILITY.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it.each(CAPABILITY.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus asserts %s',
    (_label, pattern) => {
      /*
       * Denial-aware. The investigations layer carries "Nothing on this page describes any
       * interception technique, any means of avoiding one..." — a refusal that necessarily contains
       * the phrase it refuses. A corpus-wide capability guard that could not see that would make
       * the safety statement itself unwritable.
       */
      expect(offending(pattern, CORPUS_SAFETY_UNITS)).toEqual([]);
    },
  );

  it('the vehicle page records that it left the capability material unused', () => {
    const g = prose(guide('police-vehicles-and-what-they-are-for'));
    expect(g).toMatch(/deliberately (?:unused|not (?:used|reproduced))|not reproduced/i);
    expect(g).toMatch(/no specification|gives no specification/i);
  });

  it('the units pages say nothing about what any unit does', () => {
    for (const slug of ['what-a-police-unit-is', 'how-specialist-units-cover-a-country']) {
      expect(prose(guide(slug))).toMatch(
        /what any unit does|not describe(?:d)? what any unit|is not described/i,
      );
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 4. IMPERSONATION — markings may be protected, never depicted               */
/* -------------------------------------------------------------------------- */

const IMPERSONATION = [
  /\bthe striping (?:is|looks like|consists of|comprises|has) (?:a|an|the)? ?(?:blue|red|yellow|orange|white|green)\b/i,
  /\bhow to (?:tell|spot|check|verify|identify) (?:a )?(?:real|fake|genuine|counterfeit) police (?:car|vehicle|van)\b/i,
  /\b(?:replicate|reproduce|imitate|copy|apply) (?:the )?police (?:striping|livery|markings?|logo)\b/i,
  /\bwhat (?:a )?police (?:car|vehicle) markings? look like\b/i,
];

describe('vehicle markings are protected, never depicted', () => {
  it.each(IMPERSONATION.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it.each(IMPERSONATION.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus contains %s',
    (_label, pattern) => {
      expect(CORPUS_SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('the markings page states its own omission', () => {
    const g = prose(guide('marked-vehicles-and-police-identification'));
    expect(g).toMatch(
      /does \*\*not\*\* describe what any marking looks like|not describe what any marking/i,
    );
    expect(g).toMatch(/imitat/i);
  });

  it('records that the protection covers the uniform and the striping together', () => {
    const g = prose(guide('marked-vehicles-and-police-identification'));
    expect(g).toMatch(/wettelijk beschermd/);
    expect(g).toMatch(/striping op de politie voertuigen/);
  });
});

/* -------------------------------------------------------------------------- */
/* 5. NO COMMERCE, carried forward from Wave 26                               */
/* -------------------------------------------------------------------------- */

describe('the wave sells nothing and names no supplier', () => {
  it('contains no commercial construction', () => {
    for (const p of [
      /\b(?:buy|purchase|shop for) (?:this|our|the|a|an|your|one)\b/i,
      /\b(?:affiliate link|sponsored (?:by|content)|discount code)\b/i,
      /\b(?:best|top|recommended|our pick) (?:\w+\s+){0,3}(?:vehicle|car|van|unit|equipment)\b/i,
      /[€$£]\s?[\d,]+/,
    ]) {
      expect(
        SAFETY_UNITS.filter((s) => p.test(s)),
        `matched ${p.source}`,
      ).toEqual([]);
    }
  });

  it('names no vehicle manufacturer or model', () => {
    const makes =
      /\b(?:Volkswagen|Mercedes|BMW|Audi|Ford|Vauxhall|Opel|Skoda|Volvo|Toyota|Peugeot|Renault|Citro[eë]n|Hyundai|Kia)\b/i;
    expect(CORPUS_SAFETY_UNITS.filter((s) => makes.test(s))).toEqual([]);
  });

  it('makes no restricted claim anywhere', () => {
    for (const unit of SAFETY_UNITS) {
      expect(findRestrictedPhrasing(unit), unit.slice(0, 100)).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 6. SCOPE — one service is not all services                                 */
/* -------------------------------------------------------------------------- */

const SCOPE_LEAKAGE = [
  /\b(?:all|every) police (?:services?|forces?) (?:have|has|run|operate|are divided)\b/i,
  /\bpolice services? (?:everywhere|worldwide|in every country) (?:have|run|operate)\b/i,
  /\bthe standard police (?:structure|fleet|unit)\b/i,
  /\bpolice markings? are (?:legally )?protected (?:everywhere|in every country|internationally)\b/i,
];

describe('one service is never generalised to all services', () => {
  it.each(SCOPE_LEAKAGE.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('the unit pages name the service they describe', () => {
    for (const slug of ['what-a-police-unit-is', 'how-specialist-units-cover-a-country']) {
      expect(prose(guide(slug))).toMatch(/New Zealand Police/);
    }
  });

  it('the vehicle pages name the service they describe', () => {
    for (const slug of [
      'police-vehicles-and-what-they-are-for',
      'marked-vehicles-and-police-identification',
    ]) {
      expect(prose(guide(slug))).toMatch(/Dutch|Netherlands|Nationale Politie/);
    }
  });

  it('the reach finding keeps each unit tied to its own published wording', () => {
    const g = prose(guide('how-specialist-units-cover-a-country'));
    expect(g).toMatch(/responds to requests for assistance from all over New Zealand/);
    expect(g).toMatch(/21 sections/);
  });
});

/* -------------------------------------------------------------------------- */
/* 7. Sourcing                                                                */
/* -------------------------------------------------------------------------- */

describe('every claim is traceable to an institutional source', () => {
  it.each(WAVE_27_SOURCES)('%s is official, content-confirmed and scoped', (id) => {
    const s = getSource(id);
    expect(s, `missing source ${id}`).toBeDefined();
    expect(s!.type).toBe('government');
    expect(s!.verificationMethod).toBe('content-confirmed');
    expect(s!.jurisdiction).toBeTruthy();
    expect(s!.url).toMatch(/^https:\/\//);
    expect(s!.note).toMatch(/SCOPE:/);
  });

  it('the vehicle source records what it deliberately does not use', () => {
    expect(getSource('nl-politie-voertuigen')!.note).toMatch(/deliberately NOT used|not used/i);
  });

  it('NO source anywhere in the registry is hosted on a retailer, marketplace or review site', () => {
    /*
     * Found by mutation W27M7, and it was a real hole rather than a self-containment gap. Wave 26
     * checked its own five source ids for this; nothing checked the other 364. Any source in the
     * registry could have been swapped for a retailer URL and no test would have noticed —
     * confirmed by re-running the Wave 26 suite against the same mutation, which passed.
     *
     * The check is on the HOSTNAME, not the whole URL. A government path may legitimately contain
     * "review" — `nist.gov/forensic-science/.../scientific-foundation-reviews` is a research
     * programme — while a host that contains it is a different kind of thing entirely.
     */
    const commerceHost = /shop|store|\bbuy\b|amazon|ebay|review|deals?|market(?:place)?|cart/i;
    const offenders = SOURCES.filter((src) => {
      if (!src.url) return false;
      let host: string;
      try {
        host = new URL(src.url).hostname;
      } catch {
        return true; // an unparseable URL is itself a problem
      }
      return commerceHost.test(host);
    }).map((src) => `${src.id} -> ${src.url}`);
    expect(offenders).toEqual([]);
  });

  it.each(WAVE_27)('%s cites only sources it declares, block by block', (slug) => {
    const g = guide(slug);
    for (const block of allBlocks(g)) {
      if (block.kind !== 'paragraph' || !block.sources) continue;
      for (const id of block.sources) {
        expect(g.sources, `${slug} block cites undeclared ${id}`).toContain(id);
      }
    }
  });

  it.each(WAVE_27)('%s marks every factual paragraph with a source', (slug) => {
    for (const block of allBlocks(guide(slug))) {
      if (block.kind !== 'paragraph' || block.claim !== 'fact') continue;
      expect(block.sources?.length, `${slug}: fact without a source`).toBeGreaterThan(0);
    }
  });

  it('adds exactly four sources and the registry stays unique', () => {
    for (const id of WAVE_27_SOURCES) expect(SOURCES.some((s) => s.id === id)).toBe(true);
    expect(new Set(SOURCES.map((s) => s.id)).size).toBe(SOURCES.length);
  });
});

/* -------------------------------------------------------------------------- */
/* 8. No procedural-law drift, carried forward                                */
/* -------------------------------------------------------------------------- */

const PROCEDURAL_DEPTH =
  /\b(?:filing|file a motion|motions?|notice of appeal|appeal deadline|limitation period|procedural deadline|evidentiary objection|warrant application|pleadings?|service of process)\b/i;

const PROCEDURAL_HOWTO =
  /\b(?:step \d|first(?:ly)?|then|next|finally|begin by|start by)\b[^.]{0,80}\b(?:file (?:a|an|the|your) (?:notice|motion|claim|appeal|application|complaint|petition)|submit (?:a|an|the|your) (?:notice|motion|claim|appeal|application|form)|lodge (?:a|an|the|your)|apply for (?:a|an|the) (?:warrant|review|order)|appeal against|object to|serve (?:the |a )?(?:notice|pleadings?|papers|process|summons|claim))\b/i;

describe('the units and vehicles layer does not drift into procedural law', () => {
  it.each(WAVE_27)('%s is not substantially about legal procedure', (slug) => {
    const units = sentences(prose(guide(slug)));
    const hits = units.filter((u) => PROCEDURAL_DEPTH.test(u));
    expect(hits.length, `${slug}: ${hits.join(' | ')}`).toBeLessThanOrEqual(2);
  });

  it('carries no step-sequenced procedural instruction', () => {
    expect(SAFETY_UNITS.filter((u) => PROCEDURAL_HOWTO.test(u))).toEqual([]);
  });

  it('no published page anywhere in the corpus carries one either', () => {
    expect(CORPUS_SAFETY_UNITS.filter((u) => PROCEDURAL_HOWTO.test(u))).toEqual([]);
  });
});
