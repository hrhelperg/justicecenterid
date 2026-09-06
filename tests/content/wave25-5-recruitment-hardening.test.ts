import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, CountryModuleContent, Guide } from '@/content/types';

/**
 * Wave 25.5: recruitment coverage completion and country architecture hardening.
 *
 * This wave has one subject and it is not new content: it is the geography of a claim.
 *
 * ENGLAND AND WALES IS NOT THE UNITED KINGDOM, and the distinction is the reason this wave exists.
 * Wave 25 researched England and Wales to a publishable standard and could not publish a country
 * module, because `CountryDossier.countryCode` is documented as ISO 3166-1 alpha-2 and England and
 * Wales has no alpha-2 code. The temptation at that point is to widen the claim to the country that
 * does have one — and the national criteria for England and Wales say nothing whatever about
 * Police Scotland or the Police Service of Northern Ireland.
 *
 * ARCHIVED SOURCES CANNOT ESTABLISH CURRENT REQUIREMENTS. Wave 25 deferred Czechia because every
 * reachable page redirected into an archive carrying "Obsah zde nemusí být aktuální". Wave 25.5
 * publishes Czechia on a live portal instead. The guard below makes that a rule rather than a
 * habit: a source whose note records an archive warning may not support a published requirement.
 *
 * FRESHNESS MUST BE EARNED. A `factsVerifiedOn` later than every source's own `verifiedOn` is a
 * claim about work that was not done. Wave 25 tested that for its five countries; this wave keeps
 * it true as the set grows, and adds the rule that a published module must carry the field at all.
 */

const RECRUITMENT_COUNTRIES = [
  'ireland',
  'netherlands',
  'new-zealand',
  'germany',
  'united-states',
  'czechia',
  'norway',
] as const;

const EW_PAGE = 'police-recruitment-in-england-and-wales';

const WAVE_25_5_SOURCES = [
  'cz-police-recruitment-requirements',
  'no-politihogskolen-opptakskrav',
] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`guide missing: ${slug}`);
  return found;
}

function recruitmentModule(countrySlug: string): CountryModuleContent {
  const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === countrySlug);
  if (!dossier) throw new Error(`dossier missing: ${countrySlug}`);
  const mod = dossier.modules.find((m) => m.moduleId === 'police-recruitment');
  if (!mod) throw new Error(`police-recruitment module missing: ${countrySlug}`);
  return mod;
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

function moduleProse(m: CountryModuleContent): string {
  return [m.title, m.summary, ...blocks(m.blocks), ...(m.uncertainty ?? [])]
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

/** Carried forward from Wave 25: a negation cannot govern across a clause boundary. */
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
  if (labels.some((l) => new RegExp(pattern.source, 'i').test(l))) return false;
  const quoted = [...sentence.matchAll(/["“‘']([^"”’']{4,200})["”’']/g)].map((m) => m[1] ?? '');
  const inQuote = quoted.some((q) => new RegExp(pattern.source, 'i').test(q));
  const corrects =
    /\b(?:wrong|incorrect|excludes|misdescrib\w+|flatten\w*|would be false|is not what|rather than|error|misleading|inverts)\b/i.test(
      sentence,
    );
  return !(inQuote && corrects);
}

const COMPARATIVE_GUIDES = [
  'who-recruits-police-officers',
  'citizenship-nationality-and-residency-in-police-recruitment',
  'when-a-recruitment-requirement-is-campaign-specific',
  'how-police-selection-is-structured',
  'police-entry-requirements-across-systems',
];

/**
 * Two unit sets, and the split matters here more than usual.
 *
 * FRAMING units exclude misconception CLAIMS, because the schema guarantees the reality denies
 * them. This wave's England and Wales page carries the claim "These are the UK police entry
 * requirements." precisely so that it can refute it — and a scope guard reading that as an
 * assertion would make the correction unwritable, which is the same failure Waves 23, 24 and 25
 * each recorded in a different form.
 *
 * SAFETY units keep everything, because an instruction, a vacancy claim or a pay figure is what it
 * is wherever it sits — including inside a misconception.
 */
const FRAMING_UNITS = [
  ...RECRUITMENT_COUNTRIES.flatMap((c) => sentences(moduleProse(recruitmentModule(c)))),
  ...tripwireUnits(guide(EW_PAGE)),
  ...COMPARATIVE_GUIDES.flatMap((s) => tripwireUnits(guide(s))),
];

const RECRUITMENT_UNITS = [
  ...RECRUITMENT_COUNTRIES.flatMap((c) => sentences(moduleProse(recruitmentModule(c)))),
  ...sentences(prose(guide(EW_PAGE))),
  ...COMPARATIVE_GUIDES.flatMap((s) => sentences(prose(guide(s)))),
];

function offending(pattern: RegExp, units: string[] = FRAMING_UNITS): string[] {
  return units.filter(
    (s) => pattern.test(s) && isAsserted(s, pattern) && !deniesForward(s, pattern),
  );
}

/* -------------------------------------------------------------------------- */
/* 1-3. England & Wales is not the UK, not Scotland, not Northern Ireland     */
/* -------------------------------------------------------------------------- */

const UK_WIDENING = [
  /\bUK police (?:require|must|need|officers must)\b/i,
  /\b(?:the )?United Kingdom police (?:entry )?requirements? (?:are|is)\b/i,
  /\bin the (?:UK|United Kingdom),? (?:applicants|candidates|officers) (?:must|need|have to)\b/i,
  /\b(?:British|UK) police entry requirements\b/i,
  /\bacross the (?:UK|United Kingdom),? (?:the )?(?:requirement|criteria)\b/i,
];

describe('England and Wales is never widened to the United Kingdom', () => {
  it.each(UK_WIDENING.map((p) => [p.source, p] as const))(
    'the recruitment layer never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('the England and Wales page says in terms that it is not a UK page', () => {
    const g = prose(guide(EW_PAGE));
    /*
     * Positive AND negative. The first form accepted any of three phrasings, which W255M9 satisfied
     * while asserting the opposite in the same callout. A disclaimer the page can keep while
     * contradicting it is not a disclaimer.
     */
    expect(g).toMatch(/not a United Kingdom page/i);
    expect(g).toMatch(/Scotland/);
    expect(g).toMatch(/Northern Ireland/);
    expect(g).not.toMatch(/England and Wales is a sovereign/i);
  });

  it('states no requirement for Scotland or Northern Ireland', () => {
    for (const place of ['Scotland', 'Northern Ireland']) {
      const claiming = RECRUITMENT_UNITS.filter(
        (u) =>
          new RegExp(`\\b${place}\\b`).test(u) &&
          /\b(?:must|require|need|applicants must)\b/i.test(u) &&
          !/separate|not researched|NOT RESEARCHED|does not|neither|nothing here/i.test(u),
      );
      expect(claiming, `${place} is given a requirement`).toEqual([]);
    }
  });

  /*
   * HOLE FOUND BY W255M8. The patterns above guard the widening everyone expects — England and
   * Wales to the United Kingdom. They did not guard the widening one level DOWN, which is the one
   * the source itself warns about: "Police forces are also allowed to apply their own local
   * criteria in addition to the national eligibility aspects."
   *
   * A single force proves that force. The mutation wrote "One force requires applicants to hold a
   * full driving licence, so England and Wales police require a full driving licence" and every
   * test passed. Source scope must cover claim scope at every level, not only the national one.
   */
  it('a single force is never generalised to England and Wales', () => {
    const forceWidening =
      /\b(?:one|a|some|certain|individual|this) forces?\b[^.]{0,120}\bso\b[^.]{0,80}\b(?:England and Wales|all forces|every force)\b/i;
    const bareClaim =
      /\bEngland and Wales police (?:require|must|need)\b|\ball 43 forces (?:require|must|need)\b/i;
    expect(offending(forceWidening, RECRUITMENT_UNITS)).toEqual([]);
    expect(offending(bareClaim, RECRUITMENT_UNITS)).toEqual([]);
  });

  /*
   * HOLE FOUND BY W255M9, and kept alongside the strengthened self-description check below. What
   * matters is not what the page says about itself but that England and Wales is never described as
   * a sovereign state — that is the whole reason it has no dossier, and the reason the entity model
   * was not bent to give it one.
   */
  it('no jurisdiction in the recruitment layer is upgraded to a sovereign state', () => {
    const sovereign =
      /\b(?:England and Wales|Berlin|Bavaria|Scotland|Northern Ireland) is an? (?:sovereign |independent )?(?:country|state|nation)\b/i;
    expect(offending(sovereign, RECRUITMENT_UNITS)).toEqual([]);
  });

  it('the England and Wales page is tagged to a real jurisdiction and scoped in its text', () => {
    const g = guide(EW_PAGE);
    expect(g.jurisdiction).toEqual(['GB']);
    expect(prose(g)).toMatch(/England and Wales/);
  });
});

/* -------------------------------------------------------------------------- */
/* 4, 11. The entity model is respected: no invented country                  */
/* -------------------------------------------------------------------------- */

describe('no sovereign country is invented to carry a jurisdiction', () => {
  it('no dossier exists for England and Wales or the United Kingdom', () => {
    const slugs = PUBLISHED_DOSSIERS.map((d) => d.slug);
    expect(slugs).not.toContain('england-and-wales');
    expect(slugs).not.toContain('united-kingdom');
    expect(slugs).not.toContain('great-britain');
  });

  it('every dossier country code is a two-letter ISO alpha-2 code', () => {
    for (const d of PUBLISHED_DOSSIERS) {
      expect(d.countryCode, `${d.slug} has a non-alpha-2 code`).toMatch(/^[A-Z]{2}$/);
    }
  });

  it('no country carries a recruitment module without the research behind it', () => {
    const withModule = PUBLISHED_DOSSIERS.filter((d) =>
      d.modules.some((m) => m.moduleId === 'police-recruitment' && m.status === 'published'),
    ).map((d) => d.slug);
    expect(withModule.sort()).toEqual([...RECRUITMENT_COUNTRIES].sort());
  });

  it('the England and Wales page records why it is not a country module', () => {
    expect((guide(EW_PAGE).uncertainty ?? []).join(' ')).toMatch(
      /no country module|ISO 3166-1|alpha-2/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 5. Berlin is still not Germany                                             */
/* -------------------------------------------------------------------------- */

describe('sub-national sources stay sub-national', () => {
  it('never states a German national requirement', () => {
    expect(
      offending(
        /\bGerman police (?:require|must|need)\b|\bin Germany,? (?:applicants|candidates) must\b/i,
      ),
    ).toEqual([]);
  });

  it('the Germany module still names the Land beside its facts', () => {
    const m = moduleProse(recruitmentModule('germany'));
    expect(m).toMatch(/Berlin/);
    expect(m).toMatch(/Bavaria|Bayer/);
  });
});

/* -------------------------------------------------------------------------- */
/* 6. Campaign-specific is still not permanent, and cycles are distinguished  */
/* -------------------------------------------------------------------------- */

describe('campaign and cycle scope are preserved', () => {
  it('the Irish age figures never appear without their campaign anchor', () => {
    for (const s of sentences(moduleProse(recruitmentModule('ireland')))) {
      if (!/\b18 years of age\b|\b50 years of age\b/.test(s)) continue;
      expect(s, `Irish age without anchor: ${s}`).toMatch(/2024|competition|campaign/i);
    }
  });

  it('Norway records its deadlines as recurring rather than one-off', () => {
    const m = moduleProse(recruitmentModule('norway'));
    expect(m).toMatch(/annual admission cycle|recur|cycle deadlines/i);
  });

  it('the Norwegian source records the distinction in its own note', () => {
    expect(getSource('no-politihogskolen-opptakskrav')!.note).toMatch(/CYCLE-ANCHORED/);
  });

  it('never presents any dated requirement as permanent', () => {
    expect(
      offending(/\bthe requirement (?:is|remains) (?:always|permanently|the standing)\b/i),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 7. An archived source cannot establish a current requirement               */
/* -------------------------------------------------------------------------- */

describe('archived sources cannot support published requirements', () => {
  /*
   * The rule Wave 25 applied editorially, made mechanical. A source whose own note records that it
   * is archived, or carries an archive warning, may not be cited by a published recruitment module.
   * Wave 25 deferred Czechia on exactly this ground; Wave 25.5 publishes it on a live portal, and
   * this guard is what stops the archived pages being reached for later.
   */
  const ARCHIVED =
    /\barchivn[íi]\b|\barchive version\b|\bmay not be current\b|nemus[íi] b[ýy]t aktu[áa]ln[íi]|\bthis is an archived\b/i;

  it('no published recruitment module cites a source recorded as archived', () => {
    const problems: string[] = [];
    for (const country of RECRUITMENT_COUNTRIES) {
      for (const id of recruitmentModule(country).sources) {
        const src = getSource(id);
        if (!src) continue;
        /* A note may DESCRIBE the archive problem; it may not be the source's own status. */
        if (ARCHIVED.test(src.url ?? '')) {
          problems.push(`${country} cites archived URL ${src.url}`);
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it('no source URL anywhere in the corpus points at a known archive host', () => {
    const archiveHosts = /archiv\.policie\.gov\.cz|web\.archive\.org|archive\.today/i;
    expect(SOURCES.filter((s) => archiveHosts.test(s.url ?? '')).map((s) => s.id)).toEqual([]);
  });

  it('the Czech source records that it was checked for the archive notice', () => {
    const s = getSource('cz-police-recruitment-requirements')!;
    expect(s.note).toMatch(/CURRENT, not archived/i);
    expect(s.note).toMatch(/archivn|archive/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 8, 10. Source scope covers claim scope; sources are real and current       */
/* -------------------------------------------------------------------------- */

const COUNTRY_ISO: Record<string, string> = {
  ireland: 'IE',
  netherlands: 'NL',
  'new-zealand': 'NZ',
  germany: 'DE',
  'united-states': 'US',
  czechia: 'CZ',
  norway: 'NO',
};

describe('source scope covers claim scope', () => {
  it.each(RECRUITMENT_COUNTRIES)(
    '%s cites a source scoped to its own jurisdiction',
    (country) => {
      const m = recruitmentModule(country);
      const scoped = m.sources
        .map((id) => getSource(id))
        .filter((s) => s?.jurisdiction === COUNTRY_ISO[country]);
      expect(
        scoped.length,
        `${country} cites no source for ${COUNTRY_ISO[country]}`,
      ).toBeGreaterThan(0);
    },
  );

  it('the England and Wales page cites only GB-scoped sources', () => {
    for (const id of guide(EW_PAGE).sources) {
      expect(getSource(id)?.jurisdiction, `${id} is not GB-scoped`).toBe('GB');
    }
  });

  it.each(WAVE_25_5_SOURCES)(
    '%s is official, content-confirmed and records its scope',
    (id) => {
      const s = getSource(id);
      expect(s, `missing source ${id}`).toBeDefined();
      expect(s!.type).toBe('government');
      expect(s!.verificationMethod).toBe('content-confirmed');
      expect(s!.jurisdiction).toBeTruthy();
      expect(s!.url).toMatch(/^https:\/\//);
      expect(s!.note).toMatch(/SCOPE:/);
    },
  );

  it.each(RECRUITMENT_COUNTRIES)(
    '%s cites only sources it declares, block by block',
    (country) => {
      const m = recruitmentModule(country);
      for (const block of m.blocks) {
        if (block.kind !== 'paragraph' || !block.sources) continue;
        for (const id of block.sources) {
          expect(m.sources, `${country} block cites undeclared ${id}`).toContain(id);
        }
      }
    },
  );

  it('every published requirement paragraph carries a source', () => {
    for (const country of RECRUITMENT_COUNTRIES) {
      for (const b of recruitmentModule(country).blocks) {
        if (b.kind !== 'paragraph' || b.claim !== 'fact') continue;
        expect(b.sources?.length, `${country}: fact without a source`).toBeGreaterThan(0);
      }
    }
    for (const b of allBlocks(guide(EW_PAGE))) {
      if (b.kind !== 'paragraph' || b.claim !== 'fact') continue;
      expect(b.sources?.length, 'England and Wales: fact without a source').toBeGreaterThan(0);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 9. Freshness must be real                                                  */
/* -------------------------------------------------------------------------- */

describe('freshness is earned, not asserted', () => {
  it.each(RECRUITMENT_COUNTRIES)('%s carries an ISO factsVerifiedOn', (country) => {
    expect(recruitmentModule(country).factsVerifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each(RECRUITMENT_COUNTRIES)(
    '%s does not claim verification later than its newest source',
    (country) => {
      const m = recruitmentModule(country);
      const latest = m.sources
        .map((id) => getSource(id)?.verifiedOn)
        .filter((d): d is string => Boolean(d))
        .sort()
        .at(-1);
      expect(latest, `${country} cites no source with verifiedOn`).toBeTruthy();
      expect(
        m.factsVerifiedOn! <= latest!,
        `${country}: factsVerifiedOn ${m.factsVerifiedOn} is later than its newest source (${latest})`,
      ).toBe(true);
    },
  );

  it('the England and Wales page is dated no later than its sources', () => {
    const g = guide(EW_PAGE);
    const latest = g.sources
      .map((id) => getSource(id)?.verifiedOn)
      .filter((d): d is string => Boolean(d))
      .sort()
      .at(-1);
    expect(g.factsVerifiedOn! <= latest!).toBe(true);
  });

  it.each(RECRUITMENT_COUNTRIES)('%s tells the reader when it was checked', (country) => {
    expect(moduleProse(recruitmentModule(country))).toMatch(/6 September 2026/);
  });

  it('no page claims continuous monitoring or a relative freshness state', () => {
    expect(
      RECRUITMENT_UNITS.filter((s) =>
        /\b(?:updated today|always up to date|continuously monitored|we monitor|kept up to date automatically|live data)\b/i.test(
          s,
        ),
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* No fake current recruitment state, and the safety line holds               */
/* -------------------------------------------------------------------------- */

describe('no fake recruitment state, and no gaming', () => {
  it('states no live vacancy, deadline or place count', () => {
    for (const p of [
      /\b(?:now recruiting|currently recruiting|applications? (?:are )?(?:now )?open|apply now)\b/i,
      /\b\d+ (?:positions?|posts?|places?) available\b/i,
      /\b(?:open|closed) for applications\b/i,
    ]) {
      expect(
        RECRUITMENT_UNITS.filter((s) => p.test(s)),
        `matched ${p.source}`,
      ).toEqual([]);
    }
  });

  it('publishes no pay, including from portals that state it', () => {
    for (const p of [
      /[€$£]\s?[\d,]+/,
      /\b\d[\d,.]*\s?(?:Kč|CZK|NOK|kroner)\b/i,
      /\b(?:salary|pay scale|starting pay)\b/i,
    ]) {
      expect(
        RECRUITMENT_UNITS.filter((s) => p.test(s)),
        `matched ${p.source}`,
      ).toEqual([]);
    }
  });

  it('helps nobody game selection', () => {
    for (const p of [
      /\bhow to (?:pass|beat|get through) (?:police )?(?:vetting|the medical|the interview|selection)\b/i,
      /\b(?:conceal|hide|leave out|omit)\b(?:\W+\w+){0,4}\W+(?:conviction|medical|history|condition)\b/i,
      /\bmodel answers?\b/i,
    ]) {
      expect(
        RECRUITMENT_UNITS.filter((s) => p.test(s)),
        `matched ${p.source}`,
      ).toEqual([]);
    }
  });

  it('tells no individual whether they qualify', () => {
    expect(
      offending(/\byou (?:will|would|can) (?:qualify|be eligible|be accepted)\b/i),
    ).toEqual([]);
  });

  it('the Czech look-back periods are stated as statutory conditions, not predictions', () => {
    const m = moduleProse(recruitmentModule('czechia'));
    expect(m).toMatch(/ten years|10 years/i);
    expect(m).toMatch(/conditions of the statute|statutory|zákona/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Canonical ownership and inbound linkage                                    */
/* -------------------------------------------------------------------------- */

describe('canonical ownership holds and the new pages are joined to the corpus', () => {
  it('the England and Wales page is routed and unique', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(guide(EW_PAGE)));
    expect(ALL_GUIDES.filter((g) => /england-and-wales/.test(g.slug)).length).toBe(1);
  });

  it('no UK-variant recruitment page exists', () => {
    for (const bad of [
      'uk-police-requirements',
      'police-recruitment-in-the-united-kingdom',
      'england-police-requirements',
      'british-police-requirements',
    ]) {
      expect(ALL_GUIDES.map((g) => g.slug)).not.toContain(bad);
    }
  });

  it('the police-recruitment module type is registered exactly once', () => {
    expect(COUNTRY_MODULES.filter((m) => m.id === 'police-recruitment').length).toBe(1);
  });

  it.each([EW_PAGE])('%s is linked from a page that predates this wave', (slug) => {
    const inbound = ALL_GUIDES.filter(
      (g) => g.slug !== slug && prose(g).includes(`/law-enforcement/${slug})`),
    );
    expect(inbound.length, `${slug} has no inbound link`).toBeGreaterThan(0);
  });

  it.each(['czechia', 'norway'])(
    '%s recruitment page links back to the global layer',
    (country) => {
      const m = recruitmentModule(country);
      expect((m.relatedGuides ?? []).length).toBeGreaterThan(0);
      for (const slug of m.relatedGuides ?? []) {
        expect(getGuide(slug), `${country} -> unknown guide ${slug}`).toBeDefined();
      }
    },
  );
});
