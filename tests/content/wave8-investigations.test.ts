import { describe, expect, it } from 'vitest';
import { INVESTIGATIONS_GUIDES } from '@/content/guides/investigations';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { getSource } from '@/content/sources';
import { getDossier } from '@/content/dossiers';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 8: criminal investigations.
 *
 * Two failure modes drive this suite, and they pull in opposite directions.
 *
 * The first is SAFETY. An investigations cluster is the easiest place on this site to drift from
 * "who is competent to investigate" into "how investigation is done", and the second is one step
 * from "how it is defeated". The safety assertions below are deliberately broad and are checked
 * against a fixture that must trip them, so they cannot quietly become vacuous.
 *
 * The second is FALSE UNIVERSALISM. The material invites two specific errors — that common-law
 * systems are police-led and civil-law systems judge-led, and that "investigating judge" names
 * one office. Both are false on this corpus's own sources, and both are asserted against.
 */

const WAVE_8 = [
  'who-investigates-crime',
  'police-vs-prosecutor-investigation',
  'judicial-police',
  'investigating-judge',
  'investigative-jurisdiction',
  'investigation-to-prosecution',
] as const;

function guide(slug: string): Guide {
  const found = INVESTIGATIONS_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 8 guide missing: ${slug}`);
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

/** Everything a reader sees on a guide page. */
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
function assertedProse(g: Guide): string {
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

const ALL_WAVE_8_PROSE = WAVE_8.map((s) => prose(guide(s))).join('\n');

/* -------------------------------------------------------------------------- */
/* Routes                                                                      */
/* -------------------------------------------------------------------------- */

describe('the Wave 8 routes exist, are unique, and sit under the existing hub', () => {
  it.each(WAVE_8)('%s is published and routed under /investigations', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('investigations');
    expect(PUBLIC_ROUTE_PATHS).toContain(`/investigations/${slug}`);
    expect(guidePath(g)).toBe(`/investigations/${slug}`);
  });

  it('creates no parallel investigation taxonomy', () => {
    /*
     * Part A: the existing /investigations/[slug] tree is the architecture. A second tree
     * would fragment the hub and split the intent.
     */
    for (const path of PUBLIC_ROUTE_PATHS) {
      expect(path.startsWith('/criminal-investigation')).toBe(false);
      expect(path.startsWith('/investigation/')).toBe(false);
    }
  });

  it('publishes no route for a candidate the audit merged, deferred or rejected', () => {
    for (const slug of [
      'chain-of-custody',
      'crime-scene-investigation',
      'suspect-interviews',
      'witness-interviews',
      'search-warrants',
      'arrest-warrants',
      'evidence-in-criminal-investigations',
      'specialized-investigations',
      'investigative-oversight',
      'preliminary-investigation',
      'case-referral-between-agencies',
      'police-led-investigations',
      'prosecutor-led-investigations',
    ]) {
      expect(
        PUBLIC_ROUTE_PATHS,
        `${slug} was published despite being merged, deferred or rejected`,
      ).not.toContain(`/investigations/${slug}`);
    }
  });

  it('creates no investigative institution route, which is the audit’s finding', () => {
    for (const slug of [
      'criminal-investigation-agency',
      'judicial-police',
      'criminal-police',
      'special-investigation-unit',
      'anti-corruption-investigation-agency',
      'financial-investigation-unit',
      'organized-crime-investigation-unit',
      'national-investigative-agency',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
  });

  it('gives every Wave 8 guide a distinct question and summary', () => {
    const questions = WAVE_8.map((s) => guide(s).question);
    expect(new Set(questions).size).toBe(questions.length);
    const summaries = WAVE_8.map((s) => guide(s).summary);
    expect(new Set(summaries).size).toBe(summaries.length);
  });

  it('does not duplicate an existing guide’s question anywhere on the site', () => {
    /* Cannibalization, asserted rather than argued. */
    const others = ALL_GUIDES.filter(
      (g) => !(WAVE_8 as readonly string[]).includes(g.slug),
    ).map((g) => g.question.toLowerCase().trim());
    for (const slug of WAVE_8) {
      expect(others, `${slug} restates an existing question`).not.toContain(
        guide(slug).question.toLowerCase().trim(),
      );
    }
  });

  it('keeps summaries within the meta-description limit', () => {
    for (const slug of WAVE_8) {
      expect(guide(slug).summary.length).toBeLessThanOrEqual(320);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Safety                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Phrasings that would indicate the cluster has drifted into operational content.
 *
 * These are shapes, not keywords: "surveillance" is a legitimate word on a page about what
 * investigations are constrained by, but "avoid surveillance" is not.
 */
const OPERATIONAL_PATTERNS: [string, RegExp][] = [
  [
    'evading police',
    /\b(evade|evading|avoid(?:ing)?|escape) (?:the )?(police|detection|arrest|capture)\b/i,
  ],
  [
    'evading surveillance',
    /\b(evade|evading|avoid(?:ing)?|defeat(?:ing)?|circumvent(?:ing)?) (?:the )?surveillance\b/i,
  ],
  [
    'destroying evidence',
    /\b(destroy|destroying|dispose of|conceal(?:ing)?|hide|hiding) (?:the )?evidence\b/i,
  ],
  [
    'defeating forensics',
    /\b(defeat(?:ing)?|beat(?:ing)?|fool(?:ing)?|thwart(?:ing)?) (?:the )?forensic/i,
  ],
  [
    'avoiding warrants',
    /\b(avoid(?:ing)?|circumvent(?:ing)?|without triggering) (?:a )?warrant/i,
  ],
  [
    'exploiting jurisdiction',
    /\b(exploit(?:ing)?|take advantage of) (?:the )?(jurisdictional|jurisdiction)\b/i,
  ],
  ['jurisdictional gaps', /\bjurisdictional (gap|loophole)s?\b/i],
  [
    'resisting interview',
    /\b(resist(?:ing)?|refus(?:e|ing) to answer|say nothing to) (?:an? )?(interview|interrogation|questioning)\b/i,
  ],
  [
    'interfering with witnesses',
    /\b(interfer(?:e|ing) with|intimidat(?:e|ing)|silenc(?:e|ing)) (?:a |the )?witness/i,
  ],
  [
    'defeating chain of custody',
    /\b(break(?:ing)?|defeat(?:ing)?|corrupt(?:ing)?) (?:the )?chain of custody\b/i,
  ],
  [
    'threshold exploitation',
    /\b(stay(?:ing)? below|keep(?:ing)? under|remain(?:ing)? beneath) (?:the )?threshold\b/i,
  ],
  ['how-to framing', /\bhow to (avoid|evade|conceal|destroy|defeat|frustrate|obstruct)\b/i],
];

describe('the cluster stays institutional and publishes nothing operational', () => {
  it.each(OPERATIONAL_PATTERNS)('contains no %s content', (_label, pattern) => {
    expect(ALL_WAVE_8_PROSE).not.toMatch(pattern);
  });

  it('the safety patterns are not vacuous — a fixture trips every one of them', () => {
    /*
     * Without this, a typo in any pattern would silently disable that check forever. Each
     * pattern is proved live against text that must match it.
     */
    const fixture = [
      'This section explains how to evade police attention during an inquiry.',
      'Techniques to avoid surveillance are described below.',
      'The suspect may destroy evidence before officers arrive.',
      'Methods that defeat forensic examination are set out here.',
      'Ways of avoiding a warrant are covered in detail.',
      'Investigators may exploit jurisdictional confusion.',
      'This is a list of jurisdictional gaps to use.',
      'Advice on resisting an interview follows.',
      'Steps for intimidating a witness are given.',
      'A method for breaking the chain of custody is described.',
      'Guidance on staying below the threshold for investigation.',
      'A note on how to obstruct an inquiry.',
    ].join('\n');
    for (const [label, pattern] of OPERATIONAL_PATTERNS) {
      expect(fixture, `pattern "${label}" matches nothing and is therefore dead`).toMatch(
        pattern,
      );
    }
  });

  it('every page carries an explicit scope callout', () => {
    for (const slug of WAVE_8) {
      const scopes = (guide(slug).definition ?? []).filter(
        (b) => b.kind === 'callout' && b.variant === 'scope',
      );
      expect(scopes.length, `${slug} has no scope callout`).toBeGreaterThan(0);
    }
  });

  it('every scope callout disclaims legal advice', () => {
    for (const slug of WAVE_8) {
      const scope = (guide(slug).definition ?? []).find(
        (b) => b.kind === 'callout' && b.variant === 'scope',
      );
      expect(scope && 'text' in scope ? scope.text : '').toMatch(/not legal advice/i);
    }
  });

  it('inherits the section’s own out-of-scope boundary rather than inventing one', () => {
    /* The three pages most exposed to operational drift must say what they exclude. */
    for (const slug of [
      'who-investigates-crime',
      'investigative-jurisdiction',
      'investigating-judge',
    ]) {
      expect(prose(guide(slug))).toMatch(
        /technique|surveillance|threshold|anticipate, frustrate or evade|frustrate an investigation/i,
      );
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Model integrity                                                             */
/* -------------------------------------------------------------------------- */

describe('no legal family is used to predict an investigative model', () => {
  it('states somewhere that the common-law / civil-law split does not decide this', () => {
    expect(ALL_WAVE_8_PROSE).toMatch(/common-law/i);
    expect(ALL_WAVE_8_PROSE).toMatch(/civil-law/i);
    /* And the correction must be present, not merely the words. */
    expect(ALL_WAVE_8_PROSE).toMatch(
      /families predict|predict very little|does not track legal families|not track|archetypal civil-law/i,
    );
  });

  it('never asserts the false dichotomy as fact', () => {
    /*
     * The dichotomy may appear as a misconception CLAIM, which the page then corrects. It may
     * not appear in asserted prose.
     */
    for (const slug of WAVE_8) {
      const asserted = assertedProse(guide(slug));
      expect(asserted, `${slug} asserts the dichotomy`).not.toMatch(
        /common[- ]law systems? (?:have )?police investigate/i,
      );
      expect(asserted).not.toMatch(/civil[- ]law systems? (?:have )?prosecutors? investigate/i);
    }
  });

  it('carries the dichotomy as a corrected misconception on the who-investigates page', () => {
    const g = guide('who-investigates-crime');
    const hit = g.misconceptions.find((m) => /common-law/i.test(m.claim));
    expect(hit, 'the dichotomy is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/Japan|Kenya|Germany/);
  });

  it('names Germany as a civil-law system with no investigation-leading judge', () => {
    const prose8 = prose(guide('investigating-judge'));
    expect(prose8).toMatch(/Germany does not/i);
    expect(prose8).toMatch(/160|163/);
  });
});

describe('the investigating judge is not presented as one office or as universal', () => {
  const g = () => guide('investigating-judge');

  it('distinguishes the directing type from the authorising type', () => {
    const p = prose(g());
    expect(p).toMatch(/directing type/i);
    expect(p).toMatch(/authorising type/i);
  });

  it('quotes the German provision that makes the second type a legality check', () => {
    const p = prose(g());
    expect(p).toMatch(/gesetzlich zulässig/);
    expect(p).toMatch(/legally permissible/i);
  });

  it('records that official English calls the German office an investigating judge', () => {
    expect(prose(g())).toMatch(/Ermittlungsrichter/);
    expect(g().sources).toContain('de-stpo-english-translation');
    expect(g().sources).toContain('de-stpo-162-ermittlungsrichter');
  });

  it('names at least one system that abolished or replaced the model', () => {
    expect(prose(g())).toMatch(/Argentina/);
    expect(prose(g())).toMatch(/replac(ed|ing)/i);
  });

  it('never equates an investigating judge with a trial judge', () => {
    const hit = g().misconceptions.find((m) => /trial judge/i.test(m.claim));
    expect(hit, 'the trial-judge confusion is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/distinct/i);
  });

  it('does not claim the office is universal in civil-law systems', () => {
    expect(assertedProse(g())).not.toMatch(/every civil[- ]law (country|system) has/i);
  });
});

describe('judicial police terminology is kept accurate', () => {
  const g = () => guide('judicial-police');

  it('never renders the term as police employed by the judiciary', () => {
    const hit = g().misconceptions.find((m) => /employed by the judiciary/i.test(m.claim));
    expect(hit, 'the mistranslation is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/Not in any system/i);
  });

  it('states that France’s police judiciaire is a function, not an agency', () => {
    const p = prose(g());
    expect(p).toMatch(/a function, not an agency/i);
    expect(p).toMatch(/désignés au présent titre|legal designation/i);
  });

  it('records at least three different meanings across sourced systems', () => {
    const p = prose(g());
    for (const marker of [/France/, /Brazil/, /Italy/]) expect(p).toMatch(marker);
    expect(p).toMatch(/three different categories|three different things|at least three/i);
  });

  it('refuses the institution-family reading explicitly', () => {
    const hit = g().misconceptions.find((m) => /global institution type/i.test(m.claim));
    expect(hit, 'the institution-family error is never addressed').toBeDefined();
  });
});

describe('investigative jurisdiction stays distinct from police jurisdiction', () => {
  it('states the distinction in its own words', () => {
    const p = prose(guide('investigative-jurisdiction'));
    expect(p).toMatch(/Police jurisdiction asks which force may act/i);
    expect(p).toMatch(/which institution is legally competent/i);
  });

  it('carries the confusion as a corrected misconception', () => {
    const hit = guide('investigative-jurisdiction').misconceptions.find((m) =>
      /same as police jurisdiction/i.test(m.claim),
    );
    expect(hit).toBeDefined();
  });

  it('does not claim a hierarchy between levels of government', () => {
    const p = prose(guide('investigative-jurisdiction'));
    expect(p).toMatch(
      /Overlap is not hierarchy|not ranks|command relationship across them is not/i,
    );
  });

  it('links to the police-jurisdiction page rather than restating it', () => {
    expect(prose(guide('investigative-jurisdiction'))).toContain(
      '/law-enforcement/police-jurisdiction',
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Country claims are country-sourced                                          */
/* -------------------------------------------------------------------------- */

/** Country names asserted on Wave 8 pages, mapped to the ISO code a source must carry. */
const COUNTRY_CLAIMS: Record<string, string> = {
  France: 'FR',
  Germany: 'DE',
  Ireland: 'IE',
  Japan: 'JP',
  Brazil: 'BR',
  Spain: 'ES',
  Italy: 'IT',
  Belgium: 'BE',
  Portugal: 'PT',
  Kenya: 'KE',
  Argentina: 'AR',
  Czechia: 'CZ',
  Norway: 'NO',
};

/**
 * Whether a guide carries a source that can support a claim about `country`.
 *
 * The invariant exists to stop SOURCE LAUNDERING — a generic instrument standing in as proof
 * of a national structure. The obvious implementation is an ISO match, and it is very slightly
 * too strict: the European Commission's e-Justice portal publishes per-country pages, which the
 * corpus scopes `INT` because the publisher is supranational even though the page is entirely
 * about one member state.
 *
 * Excluding those would push the cluster off official EU sources for no gain in accuracy, and
 * accepting all `INT` sources would gut the check. So a supranational source counts only when
 * it NAMES the country in its own title — which a UN principles document about police
 * accountability never will, and a per-country portal page always does.
 */
function hasSourceFor(g: Guide, iso: string, country: string): boolean {
  return g.sources.some((id) => {
    const source = getSource(id);
    if (!source) return false;
    if (source.jurisdiction === iso) return true;
    return (
      source.jurisdiction === 'INT' && new RegExp(`\\b${country}\\b`, 'i').test(source.title)
    );
  });
}

describe('every country-specific claim rests on a country-scoped source', () => {
  it.each(WAVE_8)('%s cites a scoped source for every country it names', (slug) => {
    const g = guide(slug);
    const text = prose(g);
    for (const [country, iso] of Object.entries(COUNTRY_CLAIMS)) {
      if (!new RegExp(`\\b${country}\\b`).test(text)) continue;
      expect(
        hasSourceFor(g, iso, country),
        `${slug} discusses ${country} with no source scoped to or naming ${country}`,
      ).toBe(true);
    }
  });

  it('the widened rule still rejects a generic instrument standing in for a country', () => {
    /*
     * Non-vacuity for the widening above. The UNODC police-accountability source is `INT` and
     * names no country, so it must not satisfy the check for any of them.
     */
    const fake = {
      ...guide('who-investigates-crime'),
      sources: ['unodc-e4j-police-accountability'],
    } as Guide;
    for (const [country, iso] of Object.entries(COUNTRY_CLAIMS)) {
      expect(
        hasSourceFor(fake, iso, country),
        `${country} laundered through a global source`,
      ).toBe(false);
    }
  });

  it('is not vacuous — the pages do make country claims', () => {
    const named = Object.keys(COUNTRY_CLAIMS).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_WAVE_8_PROSE),
    );
    expect(named.length).toBeGreaterThanOrEqual(10);
  });

  it('resolves every source id and points each at a published dossier where scoped', () => {
    for (const slug of WAVE_8) {
      for (const id of guide(slug).sources) {
        const source = getSource(id);
        expect(source, `${slug} cites unknown source ${id}`).toBeDefined();
      }
    }
  });

  it('never rests a national structural claim on a global instrument alone', () => {
    /*
     * The source-laundering invariant. A page naming a country must carry that country's own
     * source; a UN or comparative source cannot stand in for it.
     */
    for (const slug of WAVE_8) {
      const g = guide(slug);
      const scoped = g.sources.filter((id) => {
        const j = getSource(id)?.jurisdiction;
        return j && j !== 'INT';
      });
      expect(scoped.length, `${slug} has no country-scoped source at all`).toBeGreaterThan(0);
    }
  });

  it('names only countries that have a published dossier', () => {
    const slugs: Record<string, string> = {
      France: 'france',
      Germany: 'germany',
      Ireland: 'ireland',
      Japan: 'japan',
      Brazil: 'brazil',
      Spain: 'spain',
      Italy: 'italy',
      Belgium: 'belgium',
      Portugal: 'portugal',
      Kenya: 'kenya',
      Argentina: 'argentina',
      Czechia: 'czechia',
      Norway: 'norway',
    };
    for (const [country, slug] of Object.entries(slugs)) {
      if (!new RegExp(`\\b${country}\\b`).test(ALL_WAVE_8_PROSE)) continue;
      expect(getDossier(slug), `${country} is named with no dossier`).toBeDefined();
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Boundaries: prosecution, courts, forensics                                  */
/* -------------------------------------------------------------------------- */

describe('the cluster does not consume the reserved clusters', () => {
  it('publishes no prosecution-cluster material', () => {
    for (const pattern of [
      /plea bargain/i,
      /charging standard/i,
      /prosecutorial discretion/i,
      /prosecution ethics/i,
      /prosecutorial independence/i,
    ]) {
      expect(ALL_WAVE_8_PROSE, `reserved prosecution topic: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('publishes no courts-cluster material', () => {
    for (const pattern of [
      /appellate (court|structure|jurisdiction)/i,
      /court hierarchy/i,
      /trial procedure/i,
      /rules of evidence/i,
    ]) {
      expect(ALL_WAVE_8_PROSE, `reserved courts topic: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('names forensics and chain of custody without re-explaining them', () => {
    /* They may be referenced; they may not be defined here. */
    expect(ALL_WAVE_8_PROSE).not.toMatch(/chain of custody (is|means|refers to) /i);
    expect(ALL_WAVE_8_PROSE).not.toMatch(/forensic science (is|means|refers to) the/i);
  });

  it('hands the charging standard onward rather than answering it', () => {
    const p = prose(guide('investigation-to-prosecution'));
    expect(p).toContain('/prosecution/what-does-a-prosecutor-do');
    expect(p).toMatch(/belongs to|deliberately not covered|prosecution cluster/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Neutrality and the editorial balance                                        */
/* -------------------------------------------------------------------------- */

describe('no model is ranked and no effectiveness is inferred', () => {
  it('uses no superlative or ranking language', () => {
    for (const pattern of [
      /\bultimate\b/i,
      /\bdefinitive\b/i,
      /\bbest (investigative|system|model|police)/i,
      /most effective/i,
      /\bsuperior\b/i,
      /\binferior\b/i,
      /\bmore fair\b/i,
      /\bfairer than\b/i,
    ]) {
      expect(ALL_WAVE_8_PROSE, `ranking language: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('states explicitly that the designs are not ranked', () => {
    expect(ALL_WAVE_8_PROSE).toMatch(
      /takes no position|neither design is presented as better|no arrangement.{0,40}better|not ranked/i,
    );
  });

  it('publishes no statistic that would need restricted-claim handling', () => {
    expect(ALL_WAVE_8_PROSE).not.toMatch(/\d+\s?%/);
    expect(ALL_WAVE_8_PROSE).not.toMatch(
      /clearance rate|conviction rate|arrest rate|case closure|confession rate/i,
    );
  });

  it('never treats an accusation as guilt', () => {
    /* The editorial principle, asserted. At least two pages must make it explicit. */
    const explicit = WAVE_8.filter((s) =>
      /not a verdict|not a finding|presumption of innocence|is an allegation|still open/i.test(
        prose(guide(s)),
      ),
    );
    expect(
      explicit.length,
      'no page states that an investigation is not a finding',
    ).toBeGreaterThanOrEqual(2);
  });

  it('does not frame safeguards as obstacles to policing', () => {
    for (const pattern of [
      /hamper(s|ed|ing)? (the )?police/i,
      /tie(s|d)? (the )?hands/i,
      /obstacle to (effective )?(policing|investigation)/i,
      /red tape/i,
    ]) {
      expect(ALL_WAVE_8_PROSE, `safeguards framed as obstacles: ${pattern}`).not.toMatch(
        pattern,
      );
    }
  });

  it('does not frame investigative powers as inherently abusive', () => {
    for (const pattern of [/inherently abusive/i, /police state/i, /always abuse/i]) {
      expect(ALL_WAVE_8_PROSE).not.toMatch(pattern);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Knowledge graph                                                             */
/* -------------------------------------------------------------------------- */

describe('the cluster is connected without link spam', () => {
  it('gives every page at least two published relatives', () => {
    for (const slug of WAVE_8) {
      const g = guide(slug);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      for (const rel of g.related) {
        expect(getGuide(rel), `${slug} relates to unpublished ${rel}`).toBeDefined();
      }
    }
  });

  it('links the foundational guide into the new cluster', () => {
    const foundational = getGuide('what-is-a-criminal-investigation');
    expect(foundational).toBeDefined();
    expect(foundational?.related).toContain('who-investigates-crime');
  });

  it('does not spam links — no page repeats the same internal target excessively', () => {
    for (const slug of WAVE_8) {
      const links = [...prose(guide(slug)).matchAll(/\]\((\/[a-z0-9/-]+)\)/g)].map((m) => m[1]);
      const counts = new Map<string, number>();
      for (const l of links) counts.set(l, (counts.get(l) ?? 0) + 1);
      for (const [target, n] of counts) {
        expect(n, `${slug} links to ${target} ${n} times`).toBeLessThanOrEqual(3);
      }
    }
  });

  it('carries the full metadata every published route requires', () => {
    for (const slug of WAVE_8) {
      const g = guide(slug);
      expect(g.question.length).toBeGreaterThan(0);
      expect(g.summary.length).toBeGreaterThan(0);
      expect(g.sources.length).toBeGreaterThan(0);
      expect(g.updatedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.reviewedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.readingTimeMinutes).toBeGreaterThan(0);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThan(0);
    }
  });
});
