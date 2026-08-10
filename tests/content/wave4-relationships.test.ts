import { describe, expect, it } from 'vitest';
import { LAW_ENFORCEMENT_GUIDES } from '@/content/guides/law-enforcement';
import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { getInstitutionType } from '@/content/institutions';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 4: the jurisdiction relationship cluster.
 *
 * These guides are unusually exposed to one failure — generalising a single country's
 * arrangement into a rule — so most of what is asserted here is about scope and evidence
 * rather than about structure.
 */

const WAVE_4 = [
  'police-jurisdiction',
  'how-policing-is-divided-between-levels',
  'contract-policing',
  'police-command-and-coordination',
  'municipal-and-national-police',
  'local-police-governance',
  'sheriffs-and-city-police',
];

/** Pages that make a comparative claim and therefore owe a counterexample. */
const COMPARATIVE = WAVE_4.filter((slug) => slug !== 'police-jurisdiction');

function guide(slug: string): Guide {
  const found = LAW_ENFORCEMENT_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 4 guide missing: ${slug}`);
  return found;
}

function allText(g: Guide): string {
  const blocks: Block[] = [
    ...g.definition,
    ...g.whyItExists,
    ...g.howItWorks,
    ...g.variation,
    ...g.rightsAndAccountability,
    ...(g.furtherReading ?? []),
  ];
  const parts = blocks.flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((item) => [item.term, item.description]);
  });
  return [
    g.title,
    g.summary,
    ...parts,
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality]),
    ...(g.countryExamples ?? []).map((e) => e.note),
    ...(g.counterExamples ?? []).map((e) => e.note),
    ...(g.uncertainty ?? []),
  ].join('\n');
}

/**
 * The text the page ASSERTS, excluding misconception claims.
 *
 * A misconception's `claim` field is a false statement quoted in order to be refuted, so
 * searching it for forbidden assertions produces false positives — "All sheriffs run jails"
 * appears on the page precisely because the page says it is wrong. Tests about what a page
 * claims must read what it claims.
 */
function assertedText(g: Guide): string {
  const blocks: Block[] = [
    ...g.definition,
    ...g.whyItExists,
    ...g.howItWorks,
    ...g.variation,
    ...g.rightsAndAccountability,
    ...(g.furtherReading ?? []),
  ];
  const parts = blocks.flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((item) => [item.term, item.description]);
  });
  return [
    g.title,
    g.summary,
    ...parts,
    ...g.misconceptions.map((m) => m.reality),
    ...(g.countryExamples ?? []).map((e) => e.note),
    ...(g.counterExamples ?? []).map((e) => e.note),
    ...(g.uncertainty ?? []),
  ].join('\n');
}

/* -------------------------------------------------------------------------- */
/* Routes                                                                     */
/* -------------------------------------------------------------------------- */

describe('routes', () => {
  it('publishes and registers all seven', () => {
    for (const slug of WAVE_4) {
      expect(guide(slug).status).toBe('published');
      expect(PUBLIC_ROUTE_PATHS).toContain(`/law-enforcement/${slug}`);
    }
  });

  it('keeps every guide path unique', () => {
    const paths = PUBLISHED_GUIDES.map(guidePath);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('creates no route for a candidate the matrix merged or rejected', () => {
    for (const path of [
      '/law-enforcement/overlapping-police-jurisdiction',
      '/law-enforcement/police-agency-coordination',
      '/law-enforcement/shared-policing-services',
      '/law-enforcement/county-law-enforcement',
      '/law-enforcement/city-police-and-municipal-government',
      '/law-enforcement/who-controls-local-police',
      '/law-enforcement/state-police-vs-local-police',
      '/law-enforcement/campus-police-jurisdiction',
      '/law-enforcement/transport-police-jurisdiction',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, `${path} was merged or rejected`).not.toContain(path);
    }
  });

  it('resolves every relatedInstitution to a routed institution page', () => {
    for (const slug of WAVE_4) {
      for (const inst of guide(slug).relatedInstitutions ?? []) {
        expect(getInstitutionType(inst), `${slug} -> ${inst}`).toBeDefined();
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Evidence                                                                   */
/* -------------------------------------------------------------------------- */

describe('country evidence', () => {
  it.each(WAVE_4)('%s anchors itself to at least one published dossier', (slug) => {
    const examples = guide(slug).countryExamples ?? [];
    expect(examples.length).toBeGreaterThan(0);
    const published = PUBLISHED_DOSSIERS.map((d) => d.slug);
    for (const example of examples) {
      expect(published, `${slug} -> ${example.countrySlug}`).toContain(example.countrySlug);
      expect(example.note.length).toBeGreaterThan(60);
    }
  });

  /*
   * The Wave 2/3 invariant, carried into guides. A worked example asserts a fact about a
   * named country; the page must cite a source scoped to that country.
   */
  it.each(WAVE_4)('%s backs every country example with a country-scoped source', (slug) => {
    const g = guide(slug);
    const scopes = new Set(g.sources.map((id) => getSource(id)!.jurisdiction));
    for (const example of g.countryExamples ?? []) {
      const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug)!;
      expect(
        scopes.has(dossier.countryCode),
        `${slug} cites ${example.countrySlug} without a ${dossier.countryCode} source`,
      ).toBe(true);
    }
  });

  it.each(COMPARATIVE)('%s carries at least one counterexample', (slug) => {
    expect((guide(slug).counterExamples ?? []).length).toBeGreaterThan(0);
  });

  it.each(COMPARATIVE)('%s backs its counterexample with a country-scoped source', (slug) => {
    const g = guide(slug);
    const scopes = new Set(g.sources.map((id) => getSource(id)!.jurisdiction));
    for (const example of g.counterExamples ?? []) {
      const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug)!;
      expect(
        scopes.has(dossier.countryCode),
        `${slug} counterexample ${example.countrySlug} lacks a ${dossier.countryCode} source`,
      ).toBe(true);
    }
  });

  it('never names the same country as both example and counterexample', () => {
    for (const slug of WAVE_4) {
      const g = guide(slug);
      const examples = (g.countryExamples ?? []).map((e) => e.countrySlug);
      for (const counter of g.counterExamples ?? []) {
        expect(examples, `${slug}: ${counter.countrySlug} on both sides`).not.toContain(
          counter.countrySlug,
        );
      }
    }
  });

  it('never rests a comparative page solely on national sources', () => {
    for (const slug of WAVE_4) {
      if (guide(slug).jurisdiction?.includes('US')) continue; // the US-scoped page is exempt
      const scopes = guide(slug).sources.map((id) => getSource(id)!.jurisdiction);
      expect(
        scopes.some((j) => j === undefined || j === 'INT'),
        `${slug} cites only national sources`,
      ).toBe(true);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Contract policing                                                          */
/* -------------------------------------------------------------------------- */

describe('contract policing keeps provider, client and owner apart', () => {
  const g = () => guide('contract-policing');

  it('cites both Canada and Australia', () => {
    expect(g().sources).toContain('ca-rcmp-contract');
    expect(g().sources).toContain('au-afp-actpolicing');
  });

  it('states the provider/client distinction explicitly', () => {
    const text = allText(g()).toLowerCase();
    expect(text).toContain('provider');
    expect(text).toContain('client');
  });

  it('denies that contracting transfers ownership', () => {
    expect(allText(g())).toMatch(
      /does not (acquire|transfer)|not acquiring|belongs to the provider/i,
    );
  });

  /*
   * The distinction the brief asked for by name.
   *
   * Pins the SUBSTANCE of the distinction, not the presence of the words. An earlier
   * version checked only that "shared" and "contracted" appeared somewhere, and a mutation
   * that deleted the sentence explaining the difference still passed — the words survived
   * in the counterexample note. A test that a paraphrase can satisfy is not a test.
   */
  it('distinguishes contracted from shared, with Switzerland as the shared case', () => {
    const text = allText(g());
    /* Shared: run jointly, between peers. */
    expect(text).toMatch(/run together as peers|run jointly|between peers/i);
    /* Contracted: one jurisdiction buying from another. */
    expect(text).toMatch(/buying from another|purchases the service|buys the service/i);
    expect((g().counterExamples ?? []).map((e) => e.countrySlug)).toContain('switzerland');
  });

  it('records the Canadian asymmetry rather than implying uniformity', () => {
    expect(allText(g())).toMatch(/Ontario and Quebec/);
  });
});

/* -------------------------------------------------------------------------- */
/* Command vs coordination                                                    */
/* -------------------------------------------------------------------------- */

describe('command and coordination stay distinct', () => {
  const g = () => guide('police-command-and-coordination');

  it('states that coordination is not command', () => {
    const text = allText(g());
    expect(text).toMatch(/not the same|is not command|confers no command|no authority/i);
  });

  it('uses Japan and Switzerland as coordination cases, sourced', () => {
    const slugs = (g().countryExamples ?? []).map((e) => e.countrySlug);
    expect(slugs).toContain('japan');
    expect(slugs).toContain('switzerland');
    expect(g().sources).toContain('jp-npa-police-of-japan-2020');
    expect(g().sources).toContain('ch-fedpol');
  });

  it('never describes national coordination as operational command', () => {
    const text = allText(g()).toLowerCase();
    expect(text).not.toContain('the npa commands');
    expect(text).not.toContain('commands local police');
    expect(text).not.toContain('commands the state police');
  });
});

/* -------------------------------------------------------------------------- */
/* The sheriff page is scoped, and says so                                    */
/* -------------------------------------------------------------------------- */

describe('sheriffs and city police is explicitly US-scoped', () => {
  const g = () => guide('sheriffs-and-city-police');

  it('declares US jurisdiction rather than INT', () => {
    expect(g().jurisdiction).toEqual(['US']);
  });

  it('says on the page that it is not a global category', () => {
    expect(allText(g())).toMatch(/not a global one|does not travel|United States page/i);
  });

  it('records that functions vary by state', () => {
    expect((g().uncertainty ?? []).join(' ')).toMatch(/vary between states|set by state law/i);
  });

  /*
   * The claims the cited sources explicitly do NOT support.
   *
   * Checked against the page's SOURCED ASSERTIONS — the paragraphs marked `claim: 'fact'` —
   * rather than against its full text. A substring search over everything fails here for an
   * instructive reason: the page's own disclaimer contains the sentence "the sources do not
   * support a claim that ... all sheriffs run jails", so a naive check flags the very
   * safeguard it is meant to reward. A safety test that punishes disclaimers will be
   * satisfied by deleting them.
   */
  it('asserts no universal claim about sheriff functions as sourced fact', () => {
    const factual = [
      ...g().definition,
      ...g().whyItExists,
      ...g().howItWorks,
      ...g().variation,
      ...g().rightsAndAccountability,
    ]
      .filter(
        (b): b is Extract<Block, { kind: 'paragraph' }> =>
          b.kind === 'paragraph' && b.claim === 'fact',
      )
      .map((b) => b.text.toLowerCase())
      .join('\n');

    expect(factual.length, 'the page states no sourced fact at all').toBeGreaterThan(0);
    for (const phrase of [
      'all sheriffs run jails',
      'every county has a sheriff',
      'sheriffs are always elected',
      'all sheriffs provide court security',
    ]) {
      expect(factual, `asserted as fact: "${phrase}"`).not.toContain(phrase);
    }
  });

  it('disclaims universality explicitly rather than staying silent', () => {
    expect(allText(g())).toMatch(/do not support a claim that every county has a sheriff/i);
  });

  it('qualifies the elected character rather than asserting it absolutely', () => {
    expect(allText(g())).toMatch(/usually an elected official|usually elected/i);
  });

  it('carries a counterexample showing the office does not travel', () => {
    expect((g().counterExamples ?? []).length).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* Safety                                                                     */
/* -------------------------------------------------------------------------- */

describe('no operational or evasion guidance', () => {
  it.each(WAVE_4)('%s contains no evasion framing', (slug) => {
    const text = allText(guide(slug)).toLowerCase();
    for (const phrase of [
      'avoid arrest',
      'evade',
      'cannot follow you',
      'out of their jurisdiction so they',
      'to avoid investigation',
      'gap you can use',
      'exploit the boundary',
      'how to avoid',
    ]) {
      expect(text, `${slug} contains "${phrase}"`).not.toContain(phrase);
    }
  });

  it('the jurisdiction page states it is not guidance for an encounter', () => {
    expect(allText(guide('police-jurisdiction'))).toMatch(
      /not guidance for any encounter|not legal advice/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Editorial hygiene                                                          */
/* -------------------------------------------------------------------------- */

describe('editorial hygiene', () => {
  it.each(WAVE_4)('%s is fact-checked with a cleared safety review', (slug) => {
    const g = guide(slug);
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.factsVerifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each(WAVE_4)('%s cites at least two resolvable sources', (slug) => {
    const g = guide(slug);
    expect(g.sources.length).toBeGreaterThanOrEqual(2);
    for (const id of g.sources) expect(getSource(id), id).toBeDefined();
  });

  it.each(WAVE_4)('%s uses no banned promotional phrasing', (slug) => {
    const text = allText(guide(slug)).toLowerCase();
    for (const phrase of [
      'ultimate guide',
      'complete guide',
      'definitive guide',
      'everything you need to know',
      'most effective',
      'official justicecenterid',
    ]) {
      expect(text, `${slug}: "${phrase}"`).not.toContain(phrase);
    }
  });

  it('gives every Wave 4 guide a distinct title and question', () => {
    const titles = WAVE_4.map((s) => guide(s).title);
    const questions = WAVE_4.map((s) => guide(s).question);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(questions).size).toBe(questions.length);
  });

  it('introduces no restricted claim', () => {
    for (const slug of WAVE_4) {
      const text = allText(guide(slug)).toLowerCase();
      /* No crime-rate, trust, effectiveness or corruption framing. */
      expect(text).not.toMatch(
        /crime rate|more effective than|less corrupt|public trust in police is/,
      );
    }
  });
});
