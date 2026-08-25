import { describe, expect, it } from 'vitest';
import { COURTS_GUIDES } from '@/content/guides/courts';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { getInstitutionType, ROUTED_INSTITUTION_TYPES } from '@/content/institutions';
import { PUBLISHED_GLOSSARY } from '@/content/glossary';
import { getProfession, PUBLISHED_PROFESSIONS } from '@/content/professions';
import { getSource } from '@/content/sources';
import { getDossier } from '@/content/dossiers';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide, InstitutionType } from '@/content/types';

/**
 * Wave 9: courts and judicial systems.
 *
 * Three failure modes drive this suite.
 *
 * UNIVERSALISM. The material invites a single-pyramid picture rising to one supreme court that
 * is also the constitutional court, reached by an appeal that is a fresh trial. Every one of
 * those four propositions is false on this corpus's own sources, and each is asserted against.
 *
 * CANNIBALIZATION. Seven court-related terms are already owned by the glossary and the judicial
 * role by `/professions/judge`. The tests assert the new pages do not restate them.
 *
 * INDEPENDENCE. A constitution saying a judiciary is independent is a fact about a document.
 * Treating it as a fact about a country is the error this cluster is most exposed to.
 */

const WAVE_9 = [
  'why-courts-matter',
  'court-hierarchy',
  'trial-and-appellate-courts',
  'court-jurisdiction',
  'supreme-courts-and-final-appeal',
  'administrative-courts',
  'specialized-courts',
  'federal-and-state-court-systems',
  'why-judicial-independence-matters',
] as const;

const CONSTITUTIONAL_COURT = 'constitutional-court';

function guide(slug: string): Guide {
  const found = COURTS_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 9 guide missing: ${slug}`);
  return found;
}

function inst(slug: string): InstitutionType {
  const found = getInstitutionType(slug);
  if (!found) throw new Error(`institution missing: ${slug}`);
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

function institutionProse(i: InstitutionType): string {
  return [
    i.title,
    i.summary,
    i.purpose ?? '',
    i.governanceNote ?? '',
    i.accountabilityNote ?? '',
    i.presenceNote ?? '',
    i.historyNote ?? '',
    ...i.distinguishingFeatures,
    ...i.typicalMandate,
    ...i.commonConfusions,
    ...(i.countryExamples ?? []).map((e) => e.note),
    ...(i.counterExamples ?? []).map((e) => e.note),
    ...(i.uncertainty ?? []),
  ].join('\n');
}

const ALL_PROSE = [
  ...WAVE_9.map((s) => prose(guide(s))),
  institutionProse(inst(CONSTITUTIONAL_COURT)),
].join('\n');

const ALL_ASSERTED = [
  ...WAVE_9.map((s) => asserted(guide(s))),
  institutionProse(inst(CONSTITUTIONAL_COURT)),
].join('\n');

/* -------------------------------------------------------------------------- */
/* Routes                                                                      */
/* -------------------------------------------------------------------------- */

describe('the Wave 9 routes exist and sit under the existing hub', () => {
  it.each(WAVE_9)('%s is published and routed under /courts', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('courts');
    expect(PUBLIC_ROUTE_PATHS).toContain(`/courts/${slug}`);
    expect(guidePath(g)).toBe(`/courts/${slug}`);
  });

  it('routes the one institution family the evidence supported', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain(`/institutions/${CONSTITUTIONAL_COURT}`);
    expect(inst(CONSTITUTIONAL_COURT).status).toBe('published');
    expect(inst(CONSTITUTIONAL_COURT).review).toBe('fact-checked');
  });

  it('creates no parallel courts hub', () => {
    for (const path of PUBLIC_ROUTE_PATHS) {
      expect(path.startsWith('/judiciary')).toBe(false);
      expect(path.startsWith('/court/')).toBe(false);
    }
  });

  it('publishes no route for a candidate the audit merged, deferred or rejected', () => {
    for (const slug of [
      'what-is-a-court',
      'what-is-an-appeal',
      'what-is-judicial-independence',
      'judicial-review-explained',
      'why-appeals-matter',
      'original-jurisdiction',
      'appellate-jurisdiction',
      'territorial-jurisdiction',
      'subject-matter-jurisdiction',
      'judicial-appointments',
      'judicial-tenure',
      'court-accountability',
      'open-justice',
      'court-decisions-and-precedent',
      'judges-and-judicial-decision-making',
      'court-system-explained',
      'courts-of-cassation',
      'constitutional-courts',
    ]) {
      expect(
        PUBLIC_ROUTE_PATHS,
        `${slug} was published despite being merged, deferred or rejected`,
      ).not.toContain(`/courts/${slug}`);
    }
  });

  it('creates no court institution route beyond the one that recurs structurally', () => {
    for (const slug of [
      'trial-court',
      'appellate-court',
      'supreme-court',
      'court-of-cassation',
      'administrative-court',
      'specialized-court',
      'federal-court',
      'state-court',
      'local-court',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
  });

  it('gives every Wave 9 page a distinct question and summary', () => {
    const questions = WAVE_9.map((s) => guide(s).question);
    expect(new Set(questions).size).toBe(questions.length);
    const summaries = WAVE_9.map((s) => guide(s).summary);
    expect(new Set(summaries).size).toBe(summaries.length);
  });

  it('does not duplicate an existing guide’s question anywhere on the site', () => {
    const others = ALL_GUIDES.filter(
      (g) => !(WAVE_9 as readonly string[]).includes(g.slug),
    ).map((g) => g.question.toLowerCase().trim());
    for (const slug of WAVE_9) {
      expect(others, `${slug} restates an existing question`).not.toContain(
        guide(slug).question.toLowerCase().trim(),
      );
    }
  });

  it('keeps summaries within the meta-description limit', () => {
    for (const slug of WAVE_9) expect(guide(slug).summary.length).toBeLessThanOrEqual(320);
    expect(inst(CONSTITUTIONAL_COURT).summary.length).toBeLessThanOrEqual(320);
  });
});

/* -------------------------------------------------------------------------- */
/* Cannibalization                                                             */
/* -------------------------------------------------------------------------- */

describe('the glossary and the judge profession keep what they own', () => {
  it('never restates a glossary definition verbatim', () => {
    /*
     * The glossary owns seven court-related terms. A guide may USE them; it may not reproduce
     * the definition, which would put the same sentence at two URLs.
     */
    for (const entry of PUBLISHED_GLOSSARY) {
      if (!entry.definition || entry.definition.length < 40) continue;
      expect(
        ALL_PROSE,
        `a Wave 9 page reproduces the glossary definition of "${entry.slug}"`,
      ).not.toContain(entry.definition);
    }
  });

  it('does not redefine the judicial role, which the profession route owns', () => {
    const judge = getProfession('judge');
    expect(judge, 'the judge profession is missing').toBeDefined();
    /* Judicial qualifications, careers and training belong to that page, not to these. */
    for (const pattern of [
      /to become a judge/i,
      /judicial career/i,
      /qualif\w+ (as|to be) a judge/i,
      /training (route |requirements )?for judges/i,
    ]) {
      expect(ALL_PROSE, `judicial-role material: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('shares no question with any profession route', () => {
    /*
     * Forced by mutation proof M7. The duplicate-question test above compares Wave 9 against
     * other GUIDES, which left the profession routes unguarded — and `/professions/judge`
     * already asks how a judge can be accountable and independent at once, which is the
     * question a court-independence page is most likely to drift into.
     */
    const professionQuestions = PUBLISHED_PROFESSIONS.map((p) =>
      (p.question ?? '').toLowerCase().trim(),
    ).filter(Boolean);
    expect(
      professionQuestions.length,
      'no profession questions to compare against',
    ).toBeGreaterThan(0);
    for (const slug of WAVE_9) {
      expect(
        professionQuestions,
        `${slug} restates a profession route's question`,
      ).not.toContain(guide(slug).question.toLowerCase().trim());
    }
    expect(professionQuestions).not.toContain(
      (inst(CONSTITUTIONAL_COURT).question ?? '').toLowerCase().trim(),
    );
  });

  it('links to the judge profession rather than restating it', () => {
    expect(prose(guide('why-judicial-independence-matters'))).toContain('/professions/judge');
  });

  it('keeps the constitutional-court institution distinct from the hierarchy guide', () => {
    /* One is a body type, the other is how systems are organised. Different questions. */
    expect(inst(CONSTITUTIONAL_COURT).question).not.toBe(guide('court-hierarchy').question);
    expect(inst(CONSTITUTIONAL_COURT).section).toBe('courts');
  });
});

/* -------------------------------------------------------------------------- */
/* Court structure — the four universalisms                                    */
/* -------------------------------------------------------------------------- */

describe('no system is presented as a single pyramid', () => {
  it('states that several systems have more than one hierarchy', () => {
    const p = prose(guide('court-hierarchy'));
    expect(p).toMatch(/three distinct categories/i);
    expect(p).toMatch(/two court orders/i);
    expect(p).toMatch(/five federal supreme courts/i);
  });

  it('carries the single-pyramid assumption as a corrected misconception', () => {
    const hit = guide('court-hierarchy').misconceptions.find((m) =>
      /single pyramid|one supreme court at the top/i.test(m.claim),
    );
    expect(hit, 'the pyramid assumption is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/Germany|France|Netherlands|Brazil/);
  });

  it('never asserts that every system has one hierarchy', () => {
    for (const pattern of [
      /every (country|system).{0,30}(one|a single) (court )?(hierarchy|pyramid)/i,
      /all court systems are organised as a pyramid/i,
    ]) {
      expect(ALL_ASSERTED, `single-pyramid assertion: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('keeps Germany multi-branch wherever Germany is described structurally', () => {
    /*
     * M2. If Germany is flattened into one hierarchy anywhere, this fails: the corpus's own
     * source says treating the three categories as one hierarchy is the commonest error.
     */
    const p = prose(guide('court-hierarchy'));
    expect(p).toMatch(/Article 92/);
    expect(p).toMatch(/Article 95\(1\)/);
    expect(p).toMatch(/Federal Court of Justice/);
    expect(p).toMatch(/Federal Administrative Court/);
    expect(p).toMatch(/Federal Labour Court/);
    expect(p).toMatch(/Federal Social Court/);
    expect(p).toMatch(/Federal Finance Court/);
  });
});

describe('constitutional court and supreme court are never equated', () => {
  it('states that they are separate in some systems and merged in others', () => {
    const p = institutionProse(inst(CONSTITUTIONAL_COURT));
    expect(p).toMatch(/not among them|is not among/i);
    expect(p).toMatch(/Brazil|Japan/);
  });

  it('records that the BVerfG is not one of the five', () => {
    /* M3. */
    const p = ALL_PROSE;
    expect(p).toMatch(/named separately in Article 92|is not among them|not among the five/i);
  });

  it('carries the equation as a corrected misconception on both pages', () => {
    const onGuide = guide('supreme-courts-and-final-appeal').misconceptions.find((m) =>
      /supreme court is the constitutional court/i.test(m.claim),
    );
    expect(onGuide, 'the guide never addresses the equation').toBeDefined();
    expect(inst(CONSTITUTIONAL_COURT).commonConfusions.join('\n')).toMatch(
      /With the supreme court/i,
    );
  });

  it('never asserts the equation', () => {
    for (const pattern of [
      /the supreme court is the constitutional court/i,
      /constitutional court, (?:that is|i\.e\.|meaning) the supreme court/i,
    ]) {
      expect(ALL_ASSERTED).not.toMatch(pattern);
    }
  });

  it('names a system where constitutional review is forbidden outright', () => {
    expect(ALL_PROSE).toMatch(/Article 120/);
    expect(ALL_PROSE).toMatch(/forbids the courts from reviewing/i);
  });

  it('does not claim every court can strike down legislation', () => {
    const hit = guide('why-courts-matter').misconceptions.find((m) =>
      /strike down a law/i.test(m.claim),
    );
    expect(hit).toBeDefined();
    expect(hit?.reality).toMatch(/Article 120|Netherlands/);
  });
});

describe('appeal scope is never overstated', () => {
  it('states that appeal is neither universally a retrial nor universally law-only', () => {
    /* M4. */
    const p = prose(guide('trial-and-appellate-courts'));
    expect(p).toMatch(/not universally a complete new trial|not a new trial/i);
    expect(p).toMatch(/not universally confined to points of law|only raise points of law/i);
  });

  it('carries both overstatements as corrected misconceptions', () => {
    const ms = guide('trial-and-appellate-courts').misconceptions;
    expect(ms.find((m) => /appeal is a new trial/i.test(m.claim))).toBeDefined();
    expect(ms.find((m) => /only raise points of law/i.test(m.claim))).toBeDefined();
  });

  it('never asserts a universal appeal scope', () => {
    for (const pattern of [
      /an appeal is a (complete )?new trial\b(?!\.)/i,
      /appeals are always/i,
      /every(?:one|body) has (a|the) right to appeal/i,
      /unlimited right(s)? of appeal/i,
    ]) {
      expect(ALL_ASSERTED, `universal appeal claim: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('states that appeal rights are bounded', () => {
    expect(prose(guide('trial-and-appellate-courts'))).toMatch(
      /Appeal rights are created by law and are bounded|require permission|final at the tier/i,
    );
  });
});

describe('court jurisdiction stays distinct from the other two jurisdiction pages', () => {
  it('names all three and says they answer different questions', () => {
    const p = prose(guide('court-jurisdiction'));
    expect(p).toContain('/law-enforcement/police-jurisdiction');
    expect(p).toContain('/investigations/investigative-jurisdiction');
    expect(p).toMatch(/different questions/i);
  });

  it('carries the confusion as a corrected misconception', () => {
    expect(
      guide('court-jurisdiction').misconceptions.find((m) =>
        /same as police jurisdiction/i.test(m.claim),
      ),
    ).toBeDefined();
  });

  it('does not restate the police or investigative jurisdiction pages', () => {
    const p = prose(guide('court-jurisdiction'));
    /* It may reference them; it may not take over their subject. */
    expect(p).not.toMatch(/which force may act where[^.]*\bis explained here\b/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Independence: formal guarantee is not empirical performance                 */
/* -------------------------------------------------------------------------- */

describe('independence claims describe arrangements, never performance', () => {
  it('says explicitly that a formal guarantee is not a working one', () => {
    /* M5. */
    const p = prose(guide('why-judicial-independence-matters'));
    expect(p).toMatch(/formal (arrangement|guarantee)/i);
    expect(p).toMatch(/empirical question|cannot be read off the text|practice/i);
  });

  it('carries the inference as a corrected misconception', () => {
    const hit = guide('why-judicial-independence-matters').misconceptions.find((m) =>
      /constitution guaranteeing judicial independence/i.test(m.claim),
    );
    expect(hit, 'the inference is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/empirical|practice|cannot answer/i);
  });

  it('never asserts that a named country HAS an independent judiciary', () => {
    /*
     * The assertion this cluster is most exposed to. Describing an arrangement is fine;
     * asserting the outcome is not, because no source here establishes it.
     */
    const countries = [
      'Germany',
      'France',
      'Spain',
      'Brazil',
      'Japan',
      'Ireland',
      'Netherlands',
      'Belgium',
      'Canada',
      'Switzerland',
      'Australia',
    ];
    for (const c of countries) {
      const patterns = [
        new RegExp(`${c}(?:'s|’s)? (?:judiciary|courts) (?:is|are) independent`, 'i'),
        new RegExp(`${c} has an independent judiciary`, 'i'),
        new RegExp(`the independent ${c}(?:n)? judiciary`, 'i'),
      ];
      for (const p of patterns) {
        expect(ALL_ASSERTED, `unsourced independence claim about ${c}`).not.toMatch(p);
      }
    }
  });

  it('is not vacuous — the page does discuss independence at length', () => {
    expect(prose(guide('why-judicial-independence-matters')).length).toBeGreaterThan(3000);
    expect(ALL_PROSE).toMatch(/independen/i);
  });

  it('ranks no country and no appointment method', () => {
    for (const pattern of [
      /most independent/i,
      /least independent/i,
      /strongest judiciary/i,
      /best appointment (method|system)/i,
      /guarantees independence/i,
    ]) {
      expect(ALL_PROSE, `ranking or guarantee language: ${pattern}`).not.toMatch(pattern);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Country claims are country-sourced                                          */
/* -------------------------------------------------------------------------- */

const COUNTRY_CLAIMS: Record<string, string> = {
  Germany: 'DE',
  France: 'FR',
  Spain: 'ES',
  Brazil: 'BR',
  Japan: 'JP',
  Ireland: 'IE',
  Netherlands: 'NL',
  Belgium: 'BE',
  Canada: 'CA',
  Switzerland: 'CH',
  Australia: 'AU',
};

/** A source can support a country claim if it is scoped to it, or names it in its title. */
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
  it.each(WAVE_9)('%s cites a scoped source for every country it names', (slug) => {
    const g = guide(slug);
    const text = prose(g);
    for (const [country, iso] of Object.entries(COUNTRY_CLAIMS)) {
      if (!new RegExp(`\\b${country}\\b`).test(text)) continue;
      expect(
        hasSourceFor(g.sources, iso, country),
        `${slug} discusses ${country} with no source scoped to or naming it`,
      ).toBe(true);
    }
  });

  it('the constitutional-court institution cites a scoped source for every country it names', () => {
    const i = inst(CONSTITUTIONAL_COURT);
    const text = institutionProse(i);
    for (const [country, iso] of Object.entries(COUNTRY_CLAIMS)) {
      if (!new RegExp(`\\b${country}\\b`).test(text)) continue;
      expect(
        hasSourceFor(i.sources, iso, country),
        `constitutional-court discusses ${country} with no scoped source`,
      ).toBe(true);
    }
  });

  it('the rule still rejects a generic instrument standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRY_CLAIMS)) {
      expect(
        hasSourceFor(['udhr'], iso, country),
        `${country} laundered through a global instrument`,
      ).toBe(false);
    }
  });

  it('is not vacuous — the pages do make country claims', () => {
    const named = Object.keys(COUNTRY_CLAIMS).filter((c) =>
      new RegExp(`\\b${c}\\b`).test(ALL_PROSE),
    );
    expect(named.length).toBeGreaterThanOrEqual(9);
  });

  it('names only countries with a published dossier, and resolves every source', () => {
    const slugs: Record<string, string> = {
      Germany: 'germany',
      France: 'france',
      Spain: 'spain',
      Brazil: 'brazil',
      Japan: 'japan',
      Ireland: 'ireland',
      Netherlands: 'netherlands',
      Belgium: 'belgium',
      Canada: 'canada',
      Switzerland: 'switzerland',
      Australia: 'australia',
    };
    for (const [country, slug] of Object.entries(slugs)) {
      if (!new RegExp(`\\b${country}\\b`).test(ALL_PROSE)) continue;
      expect(getDossier(slug), `${country} named with no dossier`).toBeDefined();
    }
    for (const slug of WAVE_9) {
      for (const id of guide(slug).sources) {
        expect(getSource(id), `${slug} cites unknown source ${id}`).toBeDefined();
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Boundaries: prosecution, defence, investigations, professions              */
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
      expect(ALL_PROSE, `reserved prosecution topic: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('acknowledges defence rights without explaining how defence works', () => {
    /*
     * Part Y: acknowledge, do not build. It names five rights that court pages should
     * acknowledge, and an adversarial pass found only three present — which left the page
     * explaining why courts matter without the two that most directly answer "matter to whom".
     */
    for (const right of [
      /legal help|counsel/i,
      /test the evidence|challenge the evidence/i,
      /be heard before a decision/i,
      /presumption of innocence/i,
      /to appeal/i,
    ]) {
      expect(
        prose(guide('why-courts-matter')),
        `defence right not acknowledged: ${right}`,
      ).toMatch(right);
    }
    for (const pattern of [
      /how to (instruct|choose|find) (a )?(lawyer|counsel|solicitor)/i,
      /legal aid (is available|application)/i,
      /defence strategy/i,
    ]) {
      expect(ALL_PROSE, `defence-cluster material: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('does not pull investigations material back into courts', () => {
    for (const pattern of [
      /how an investigation is conducted/i,
      /investigative technique/i,
      /surveillance capability/i,
    ]) {
      expect(ALL_PROSE).not.toMatch(pattern);
    }
  });

  it('states the three-function model as a model, not a universal rule', () => {
    const p = prose(guide('why-courts-matter'));
    expect(p).toMatch(/The police investigate/i);
    expect(p).toMatch(/The court adjudicates/i);
    expect(p).toMatch(/educational model|rather than a universal/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Neutrality, the Cicero passage, and restricted claims                       */
/* -------------------------------------------------------------------------- */

describe('courts are neither idealised nor disparaged', () => {
  it('uses no superlative or ranking language', () => {
    for (const pattern of [
      /\bultimate\b/i,
      /\bdefinitive\b/i,
      /best courts?/i,
      /most fair/i,
      /most effective/i,
      /\bworld[- ]class\b/i,
    ]) {
      expect(ALL_PROSE, `ranking language: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('never claims courts are always right', () => {
    for (const pattern of [
      /courts are always right/i,
      /judges are never wrong/i,
      /beyond question/i,
    ]) {
      /* "beyond question" is permitted only inside a denial. */
      const hits = [...ALL_ASSERTED.matchAll(new RegExp(pattern.source, 'gi'))];
      for (const h of hits) {
        const around = ALL_ASSERTED.slice(Math.max(0, h.index! - 160), h.index! + 80);
        expect(around, `unqualified claim: ${h[0]}`).toMatch(/not|never|would have/i);
      }
    }
  });

  it('does not frame respect for courts as blind obedience', () => {
    const p = prose(guide('why-courts-matter'));
    expect(p).toMatch(/lawful means of challenging|appeal, review/i);
    expect(p).toMatch(/does not mean agreeing|not mean that a decision is beyond criticism/i);
    for (const pattern of [/must be obeyed without question/i, /should never be criticised/i]) {
      expect(ALL_ASSERTED).not.toMatch(pattern);
    }
  });

  it('treats lawful criticism and appeal as participation, not disrespect', () => {
    expect(ALL_PROSE).toMatch(
      /form of taking a court seriously|participation in the process, not defiance/i,
    );
  });

  it('publishes no statistic that would need restricted-claim handling', () => {
    expect(ALL_PROSE).not.toMatch(/\d+\s?%/);
    expect(ALL_PROSE).not.toMatch(
      /backlog|conviction rate|reversal rate|court speed|judicial trust|corruption index/i,
    );
  });

  it('does not infer performance from structure', () => {
    expect(ALL_PROSE).toMatch(
      /Structure is not performance|structure does not determine|independent variables|cannot be read off/i,
    );
  });
});

describe('the Cicero passage is published whole and in context', () => {
  const g = () => guide('why-courts-matter');

  it('quotes the full sentence, not the common truncation', () => {
    const p = prose(g());
    expect(p).toContain('Legum ministri magistratus');
    expect(p).toContain('legum interpretes iudices');
    expect(p).toContain('omnes servi sumus');
  });

  it('names the truncation and says what it removes', () => {
    const p = prose(g());
    expect(p).toMatch(/truncat|drops "omnes"|drops “omnes”/i);
    expect(p).toMatch(/magistrates and judges|about officials/i);
  });

  it('uses the passage against the obedience reading, not for it', () => {
    expect(prose(g())).toMatch(
      /argument about the authority of courts|opposite of what the passage is doing/i,
    );
  });

  it('cites the verified source', () => {
    expect(g().sources).toContain('cicero-pro-cluentio-146');
    const source = getSource('cicero-pro-cluentio-146');
    expect(source?.verificationMethod).toBe('content-confirmed');
    expect(source?.note).toMatch(/does not support the common truncated rendering/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Knowledge graph and metadata                                                */
/* -------------------------------------------------------------------------- */

describe('the cluster is connected without link spam', () => {
  it('gives every page at least two published relatives', () => {
    for (const slug of WAVE_9) {
      const g = guide(slug);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      for (const rel of g.related) {
        expect(getGuide(rel), `${slug} relates to unpublished ${rel}`).toBeDefined();
      }
    }
    expect(inst(CONSTITUTIONAL_COURT).relatedInstitutions?.length ?? 0).toBeGreaterThanOrEqual(
      2,
    );
  });

  it('links the foundational guide into the new cluster', () => {
    const foundational = getGuide('what-do-courts-do');
    expect(foundational).toBeDefined();
    expect(foundational?.related).toContain('why-courts-matter');
  });

  it('does not spam links', () => {
    for (const slug of WAVE_9) {
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

  it('carries the metadata every published route requires', () => {
    for (const slug of WAVE_9) {
      const g = guide(slug);
      expect(g.question.length).toBeGreaterThan(0);
      expect(g.sources.length).toBeGreaterThan(0);
      expect(g.updatedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.reviewedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.readingTimeMinutes).toBeGreaterThan(0);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThan(0);
    }
    const i = inst(CONSTITUTIONAL_COURT);
    expect(i.sources.length).toBeGreaterThan(0);
    expect(i.uncertainty?.length ?? 0).toBeGreaterThan(0);
    expect(i.countryExamples?.length ?? 0).toBeGreaterThanOrEqual(3);
    expect(i.counterExamples?.length ?? 0).toBeGreaterThanOrEqual(3);
  });

  it('requires the institution family to recur across at least three jurisdictions', () => {
    const examples = inst(CONSTITUTIONAL_COURT).countryExamples ?? [];
    expect(new Set(examples.map((e) => e.countrySlug)).size).toBeGreaterThanOrEqual(3);
  });

  it('every routed institution still resolves', () => {
    for (const i of ROUTED_INSTITUTION_TYPES) {
      expect(PUBLIC_ROUTE_PATHS).toContain(`/institutions/${i.slug}`);
    }
  });
});
