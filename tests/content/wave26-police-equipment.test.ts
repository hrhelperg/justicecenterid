import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PROFESSIONS } from '@/content/professions';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 26: police equipment, uniforms and professional technology.
 *
 * This is the first wave whose subject is things you can buy, and that changes the risk profile
 * completely. Every previous wave's guards protected accuracy. These protect a boundary.
 *
 * THE COMMERCE BOUNDARY IS ABSOLUTE FOR RESTRICTED CATEGORIES AND STRICT FOR EVERYTHING ELSE. The
 * brief permits informational institutional coverage — that a service issues a baton is a fact
 * about a police service — and forbids procurement guidance, product recommendations, operational
 * setup, performance optimisation and tactical configuration. The guards below draw exactly that
 * line: naming a category is allowed, and every construction that would help someone acquire,
 * choose, configure or use one is not.
 *
 * CAPABILITY DESCRIPTION IS THE SUBTLER FAILURE. A page can avoid every commercial word and still
 * become an equipment-intelligence database by describing what things do, how well, and to what
 * specification. The corpus already refuses to be a surveillance capability database; this wave
 * refuses to be an equipment one, and the difference between "services issue body-worn cameras"
 * and describing what a camera can capture is the whole distinction.
 *
 * IDENTIFICATION MATERIAL CUTS BOTH WAYS. A page explaining how officers are identified is one
 * edit away from a page explaining how to appear to be one. The security-feature guard exists for
 * that reason and runs corpus-wide.
 */

const WAVE_26 = [
  'what-police-equipment-is-for',
  'why-police-wear-a-uniform',
  'how-police-officers-are-identified',
  'issued-equipment-and-personal-equipment',
  'equipment-standards-and-testing',
  'documentation-equipment-in-policing',
  'body-worn-video-as-institutional-equipment',
] as const;

const WAVE_26_SOURCES = [
  'ie-garda-uniform-dress-code-policy',
  'nl-politie-uniform-purpose',
  'nl-politie-legitimatiebewijs',
  'us-nij-body-armor-standards',
  'us-bjs-local-police-technology-2020',
] as const;

/** Categories the brief bars from commerce and from operational description. */
const RESTRICTED_CATEGORIES =
  /\b(?:firearms?|ammunition|silencers?|suppressors?|batons?|restraints?|handcuffs?|tasers?|pepper spray|incapacitant spray|tactical weapons?|breaching tools?|surveillance equipment|interception equipment|counter-surveillance)\b/i;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 26 guide missing: ${slug}`);
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

const FRAMING_UNITS = WAVE_26.flatMap((s) => tripwireUnits(guide(s)));
const SAFETY_UNITS = WAVE_26.flatMap((s) => sentences(prose(guide(s))));
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

describe('the Wave 26 equipment layer exists and is routed', () => {
  it.each(WAVE_26)('%s is published with a route', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('law-enforcement');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('publishes seven guides and no more', () => {
    expect(WAVE_26.length).toBe(7);
  });

  it.each(WAVE_26)('%s states what it did not research', (slug) => {
    const u = guide(slug).uncertainty ?? [];
    expect(u.length).toBeGreaterThan(0);
    expect(u.join(' ')).toMatch(
      /NOT RESEARCHED|not researched|NOT ESTABLISHED|was not|were not|\bno\b/i,
    );
  });

  it.each(WAVE_26)('%s is linked from a page that predates this wave', (slug) => {
    const NEW = new Set<string>(WAVE_26);
    const inbound = [
      ...ALL_GUIDES.filter(
        (g) => !NEW.has(g.slug) && prose(g).includes(`/law-enforcement/${slug})`),
      ).map((g) => g.slug),
      ...PROFESSIONS.filter((p) => JSON.stringify(p).includes(`/law-enforcement/${slug})`)).map(
        (p) => `prof:${p.slug}`,
      ),
    ];
    expect(inbound.length, `${slug} has no pre-existing inbound link`).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* 2. NO COMMERCE — the absolute boundary                                     */
/* -------------------------------------------------------------------------- */

const COMMERCE = [
  /*
   * `order` is dropped deliberately. It is a LEGAL verb throughout this corpus — "order a search",
   * "order a person to submit specified computer data", "order content preserved" — and a commerce
   * guard that fires on it flags most of the investigations layer. Commerce needs a commercial
   * object, not a transactional-sounding verb.
   */
  /\b(?:buy|purchase|shop for|shopping for) (?:this|our|the|a|an|your|one)\b|\bplace an order for\b/i,
  /\badd to (?:cart|basket)\b|\bshop now\b|\bin stock\b|\bfree shipping\b/i,
  /\b(?:affiliate link|sponsored (?:by|content|post)|partner link|discount code|promo code|referral link)\b/i,
  /\b(?:best|top|recommended|our pick|editor'?s choice) (?:\w+\s+){0,3}(?:vest|armour|armor|camera|flashlight|torch|boots|holster|belt|gear|kit|equipment)\b/i,
  /\b(?:price|cost|costs|priced at|RRP|MSRP)\b[^.]{0,30}[€$£]/i,
  /\bwhere to (?:buy|get|order)\b|\bwhich (?:one )?should (?:you|i) (?:buy|choose|get)\b/i,
];

describe('the equipment layer sells nothing and recommends nothing', () => {
  it.each(COMMERCE.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it.each(COMMERCE.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus contains %s',
    (_label, pattern) => {
      expect(CORPUS_SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('names no manufacturer, brand or model anywhere', () => {
    const brandish =
      /\b(?:Axon|Taser International|Motorola Solutions|Safariland|Point Blank|Second Chance|Streamlight|Maglite|Peli|Pelican|Glock|Sig Sauer|Heckler ?& ?Koch|Beretta|Smith ?& ?Wesson)\b/i;
    expect(CORPUS_SAFETY_UNITS.filter((s) => brandish.test(s))).toEqual([]);
  });

  it('links to no external site from any equipment page', () => {
    expect(SAFETY_UNITS.filter((s) => /\]\(https?:\/\//.test(s))).toEqual([]);
  });

  it('publishes no price, cost or budget figure', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /[€$£]\s?[\d,]+|\b\d[\d,.]*\s?(?:euros?|dollars?|pounds?)\b/i.test(s),
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 3. RESTRICTED CATEGORIES — nameable, never explicable                      */
/* -------------------------------------------------------------------------- */

const RESTRICTED_MISUSE = [
  /\bhow to (?:use|deploy|carry|draw|apply|fit|configure|set up|maintain) (?:a|an|the|your)\b/i,
  /\b(?:aim|fire|discharge|strike|swing|deploy|apply) (?:the|a|your) (?:weapon|firearm|baton|taser|spray|restraint)/i,
  /\b(?:optimal|best|correct|proper) (?:setup|configuration|placement|position|loadout|carry)\b/i,
  /\b(?:choosing|selecting|picking) (?:the right|a|an) (?:vest|armour|armor|baton|taser|camera|firearm)/i,
  /*
   * Denial-aware by construction: the standards page says in terms that "NO protection level,
   * product, model, specification or performance figure appears on this page", which contains the
   * phrase in order to refuse it. What must never appear is an ACTUAL level, so the pattern now
   * requires the value rather than the words.
   */
  /\bNIJ Level\s*(?:I{1,3}A?|IV)\b|\bLevel\s*(?:IIIA|IIA|II|III|IV)\s+(?:armou?r|vest|protection|rated)\b/i,
  /\b(?:rounds? per|muzzle velocity|joules|calibre|caliber|magazine capacity)\b/i,
];

describe('restricted categories may be named but never explained', () => {
  it.each(RESTRICTED_MISUSE.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it.each(RESTRICTED_MISUSE.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus contains %s',
    (_label, pattern) => {
      expect(CORPUS_SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('mentions restricted categories only as issued items, never with a purchasing verb', () => {
    const offenders = SAFETY_UNITS.filter(
      (s) =>
        RESTRICTED_CATEGORIES.test(s) &&
        /\b(?:buy|purchase|order|price|supplier|vendor|stockist|available from|recommend)\b/i.test(
          s,
        ),
    );
    expect(offenders).toEqual([]);
  });

  it('the equipment page routes the force question to the legal page instead of answering it', () => {
    const g = prose(guide('what-police-equipment-is-for'));
    expect(g).toMatch(/\/law-enforcement\/police-use-of-force/);
    expect(g).toMatch(/not described here|are not described/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 4. NO CAPABILITY OR SPECIFICATION DESCRIPTION                              */
/* -------------------------------------------------------------------------- */

const CAPABILITY = [
  /\b(?:can (?:record|capture|detect|penetrate|stop|resist|transmit)|capable of (?:recording|detecting|capturing))\b/i,
  /\b(?:battery life|recording time|resolution|field of view|range of \d|effective range|weighs? \d)\b/i,
  /\b(?:stops?|defeats?|resists?) (?:a |an )?(?:round|bullet|blade|knife|stab)/i,
  /\b(?:hours? of (?:footage|recording)|megapixel|frames? per second|GB of storage)\b/i,
];

describe('the wave describes no capability and no specification', () => {
  it.each(CAPABILITY.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('the body-worn video page says so in terms', () => {
    const g = prose(guide('body-worn-video-as-institutional-equipment'));
    expect(g).toMatch(
      /no device, no capability|describes no device|no device, capability or specification/i,
    );
  });

  it('the standards page reproduces no performance requirement', () => {
    const g = prose(guide('equipment-standards-and-testing'));
    expect(g).toMatch(/reproduces \*\*no\*\*|no performance requirement|NO protection level/i);
    expect(g).not.toMatch(/\bLevel (?:II|III|IV)\b/);
  });
});

/* -------------------------------------------------------------------------- */
/* 5. IDENTIFICATION MATERIAL MUST NOT ASSIST IMPERSONATION                   */
/* -------------------------------------------------------------------------- */

const IMPERSONATION = [
  /\bhow to (?:tell|spot|check|verify) (?:a )?(?:real|fake|genuine|counterfeit) (?:police )?(?:card|badge|warrant card|identification)\b/i,
  /\bthe hologram (?:shows|looks like|appears as|displays|depicts)\b/i,
  /\b(?:security|authenticity) features? (?:include|are|consist of|comprise)\b/i,
  /\bwhat (?:a )?(?:police )?(?:badge|warrant card|identity card) looks like\b/i,
  /\b(?:obtain|make|replicate|reproduce|forge) (?:a|an) (?:police )?(?:uniform|badge|card|identification)\b/i,
];

describe('identification pages do not help anyone imitate an officer', () => {
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

  it('the identification page states its own omission explicitly', () => {
    const g = prose(guide('how-police-officers-are-identified'));
    expect(g).toMatch(
      /does \*\*not\*\* describe what those features look like|not describe what those features/i,
    );
    expect(g).toMatch(/imitat|impersonat/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 6. Scope: one service's policy is not a global rule                        */
/* -------------------------------------------------------------------------- */

const SCOPE_LEAKAGE = [
  /\b(?:all|every) police (?:services?|forces?) (?:issue|carry|wear|use)\b/i,
  /\bpolice officers (?:everywhere|worldwide|in every country) (?:carry|wear|are issued)\b/i,
  /\b(?:the )?standard police (?:uniform|equipment|kit) (?:is|includes)\b/i,
  /\b(?:Irish|Dutch|American|US) (?:policy|practice) (?:means|shows) (?:that )?(?:all|every|police generally)\b/i,
];

describe('one service is never generalised to all services', () => {
  it.each(SCOPE_LEAKAGE.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('every equipment claim names the service it belongs to', () => {
    const g = prose(guide('what-police-equipment-is-for'));
    expect(g).toMatch(/An Garda Síochána/);
    expect(g).toMatch(/NOT RESEARCHED|not researched|one service/i);
  });

  it('the body-worn video figures are scoped to United States local departments', () => {
    const g = prose(guide('body-worn-video-as-institutional-equipment'));
    expect(g).toMatch(/local police departments/i);
    expect(g).toMatch(/United States/);
    expect(g).toMatch(/establish(?:es)? nothing about|nothing here establishes/i);
  });

  it('never claims firearms carriage as a general fact', () => {
    expect(
      offending(/\bpolice officers (?:routinely )?carry firearms\b/i, SAFETY_UNITS),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 7. Sourcing and restricted claims                                          */
/* -------------------------------------------------------------------------- */

describe('every equipment claim is traceable to an institutional source', () => {
  it.each(WAVE_26_SOURCES)('%s is official, content-confirmed and scoped', (id) => {
    const s = getSource(id);
    expect(s, `missing source ${id}`).toBeDefined();
    expect(s!.type).toBe('government');
    expect(s!.verificationMethod).toBe('content-confirmed');
    expect(s!.jurisdiction).toBeTruthy();
    expect(s!.url).toMatch(/^https:\/\//);
    expect(s!.note).toMatch(/SCOPE:/);
  });

  it('no Wave 26 source is a supplier, retailer or review', () => {
    for (const id of WAVE_26_SOURCES) {
      const s = getSource(id)!;
      expect(s.url).not.toMatch(/shop|store|buy|amazon|ebay|review/i);
    }
  });

  it.each(WAVE_26)('%s cites only sources it declares, block by block', (slug) => {
    const g = guide(slug);
    for (const block of allBlocks(g)) {
      if (block.kind !== 'paragraph' || !block.sources) continue;
      for (const id of block.sources) {
        expect(g.sources, `${slug} block cites undeclared ${id}`).toContain(id);
      }
    }
  });

  it.each(WAVE_26)('%s marks every factual paragraph with a source', (slug) => {
    for (const block of allBlocks(guide(slug))) {
      if (block.kind !== 'paragraph' || block.claim !== 'fact') continue;
      expect(block.sources?.length, `${slug}: fact without a source`).toBeGreaterThan(0);
    }
  });

  it('makes no restricted claim anywhere', () => {
    for (const unit of SAFETY_UNITS) {
      expect(findRestrictedPhrasing(unit), unit.slice(0, 100)).toEqual([]);
    }
  });

  it('adds exactly five sources and the registry stays unique', () => {
    for (const id of WAVE_26_SOURCES) expect(SOURCES.some((s) => s.id === id)).toBe(true);
    expect(new Set(SOURCES.map((s) => s.id)).size).toBe(SOURCES.length);
  });
});

/* -------------------------------------------------------------------------- */
/* 8. No procedural-law drift, carried forward                                */
/* -------------------------------------------------------------------------- */

const PROCEDURAL_DEPTH =
  /\b(?:filing|file a motion|motions?|notice of appeal|appeal deadline|limitation period|procedural deadline|evidentiary objection|warrant application|grounds of appeal|pleadings?|service of process)\b/i;

/*
 * Carried forward from Waves 25 and 25.5. W26M10 inserted a step-sequenced appeal procedure into an
 * equipment page and survived THIS suite, because only the proportional depth check had been
 * carried over and one sentence sits inside its allowance.
 *
 * The corpus-wide guard in the Wave 25 suite does catch it — verified by re-running that suite
 * against the same mutation — so the content was never unprotected in a full run. What was missing
 * is self-containment: a wave's own suite should fail on a wave's own regression, because mutation
 * proofs run per-suite and a guard that lives only in a sibling file is easy to lose in a later
 * refactor.
 */
const PROCEDURAL_HOWTO =
  /\b(?:step \d|first(?:ly)?|then|next|finally|begin by|start by)\b[^.]{0,80}\b(?:file (?:a|an|the|your) (?:notice|motion|claim|appeal|application|complaint|petition)|submit (?:a|an|the|your) (?:notice|motion|claim|appeal|application|form)|lodge (?:a|an|the|your)|apply for (?:a|an|the) (?:warrant|review|order)|appeal against|object to|serve (?:the |a )?(?:notice|pleadings?|papers|process|summons|claim))\b/i;

describe('the equipment layer does not drift into procedural law', () => {
  it('carries no step-sequenced procedural instruction', () => {
    expect(SAFETY_UNITS.filter((u) => PROCEDURAL_HOWTO.test(u))).toEqual([]);
  });

  it('no published page anywhere in the corpus carries one either', () => {
    expect(CORPUS_SAFETY_UNITS.filter((u) => PROCEDURAL_HOWTO.test(u))).toEqual([]);
  });

  it.each(WAVE_26)('%s is not substantially about legal procedure', (slug) => {
    const units = sentences(prose(guide(slug)));
    const hits = units.filter((u) => PROCEDURAL_DEPTH.test(u));
    expect(hits.length, `${slug}: ${hits.join(' | ')}`).toBeLessThanOrEqual(2);
  });

  it('the documentation page declines the records question rather than answering it', () => {
    const g = prose(guide('documentation-equipment-in-policing'));
    expect(g).toMatch(
      /procedural questions this (?:wave|platform)|does not (?:describe|enter)/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 9. Canonical ownership                                                     */
/* -------------------------------------------------------------------------- */

describe('one canonical owner per equipment question', () => {
  it('no equipment route family was created', () => {
    expect(PUBLIC_ROUTE_PATHS.filter((p) => /^\/equipment/.test(p))).toEqual([]);
    expect(PUBLIC_ROUTE_PATHS.filter((p) => /^\/gear/.test(p))).toEqual([]);
    expect(PUBLIC_ROUTE_PATHS.filter((p) => /^\/shop/.test(p))).toEqual([]);
  });

  it('no two Wave 26 guides ask the same question', () => {
    const qs = WAVE_26.map((s) => guide(s).question?.toLowerCase().trim());
    expect(new Set(qs).size).toBe(qs.length);
  });

  it('no guide slug reads as a buying guide', () => {
    /*
     * `-review$` was matching `cassation-review` and `constitutional-review`, which are legal-review
     * pages and among the oldest in the corpus. A product-review slug says what it reviews.
     */
    const buying =
      /^best-|^top-\d|^buying-|^how-to-choose-|(?:gear|equipment|product|kit|vest|camera|torch|boot)s?-(?:review|comparison)$/;
    expect(ALL_GUIDES.filter((g) => buying.test(g.slug)).map((g) => g.slug)).toEqual([]);
  });

  it('the commercial opportunity mapping does not leak into published content', () => {
    const LEAK =
      /\b(?:monetis|monetiz|commercial opportunity|revenue|affiliate|sponsorship|HIGH opportunity|MEDIUM opportunity)\b/i;
    expect(SAFETY_UNITS.filter((s) => LEAK.test(s))).toEqual([]);
    expect(SOURCES.filter((s) => LEAK.test(s.note ?? '')).map((s) => s.id)).toEqual([]);
  });
});
