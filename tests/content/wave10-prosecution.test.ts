import { describe, expect, it } from 'vitest';
import { PROSECUTION_GUIDES } from '@/content/guides/prosecution';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { PUBLISHED_PROFESSIONS, getProfession } from '@/content/professions';
import { PUBLISHED_GLOSSARY } from '@/content/glossary';
import { getSource } from '@/content/sources';
import { getDossier } from '@/content/dossiers';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 10: prosecution systems.
 *
 * Three failure modes drive this suite.
 *
 * A CHARGE IS NOT A FINDING. The cluster's whole subject is an institution that accuses people
 * before anything has been determined, so the language has to hold that line everywhere.
 *
 * UNIVERSALISM. Two specific errors are available in this material and the site already carried
 * one of them: a single charging test presented as what prosecutors do, and a
 * common-law/civil-law binary for discretion. Germany's code contradicts both.
 *
 * INDEPENDENCE AS PERFORMANCE. A constitution establishes an arrangement. Eight systems here
 * answer differently and two are openly contested, so no page may say a country has an
 * independent prosecution.
 */

const WAVE_10 = [
  'why-public-prosecution-exists',
  'how-charging-decisions-work',
  'prosecutorial-discretion-and-legality',
  'why-prosecutorial-independence-matters',
  'prosecutorial-accountability',
  'prosecutorial-objectivity',
  'prosecution-and-presumption-of-innocence',
  'how-prosecution-systems-are-organised',
] as const;

function guide(slug: string): Guide {
  const found = PROSECUTION_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 10 guide missing: ${slug}`);
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

const ALL_PROSE = WAVE_10.map((s) => prose(guide(s))).join('\n');
const ALL_ASSERTED = WAVE_10.map((s) => asserted(guide(s))).join('\n');

/* -------------------------------------------------------------------------- */
/* Routes                                                                      */
/* -------------------------------------------------------------------------- */

describe('the Wave 10 routes exist and sit under the existing hub', () => {
  it.each(WAVE_10)('%s is published and routed under /prosecution', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('prosecution');
    expect(PUBLIC_ROUTE_PATHS).toContain(`/prosecution/${slug}`);
    expect(guidePath(g)).toBe(`/prosecution/${slug}`);
  });

  it('creates no parallel prosecution hub', () => {
    for (const path of PUBLIC_ROUTE_PATHS) {
      expect(path.startsWith('/prosecutors')).toBe(false);
      expect(path.startsWith('/prosecute')).toBe(false);
    }
  });

  it('publishes no route for a candidate the audit merged, deferred or rejected', () => {
    for (const slug of [
      'public-prosecutor-explained',
      'prosecutor-vs-police',
      'prosecutor-vs-judge',
      'prosecution-vs-investigation',
      'prosecutor-led-investigations',
      'police-led-vs-prosecutor-led-investigations',
      'federal-vs-state-prosecution',
      'hierarchical-prosecution-systems',
      'independent-prosecution-services',
      'prosecutorial-review',
      'prosecutorial-ethics',
      'prosecutorial-appointments',
      'prosecutorial-tenure',
      'prosecutorial-discipline',
      'prosecutorial-immunity',
      'private-prosecution',
      'special-prosecutors',
      'prosecutors-and-victims',
      'prosecutors-and-plea-agreements',
      'decision-not-to-prosecute',
      'withdrawal-of-prosecution',
    ]) {
      expect(
        PUBLIC_ROUTE_PATHS,
        `${slug} was published despite being merged, deferred or rejected`,
      ).not.toContain(`/prosecution/${slug}`);
    }
  });

  it('creates no prosecution institution route, which is the audit’s finding', () => {
    for (const slug of [
      'public-prosecution-service',
      'prosecutor-general-office',
      'director-of-public-prosecutions',
      'federal-prosecution-service',
      'state-prosecution-service',
      'special-prosecutor',
      'independent-prosecutor',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
  });

  it('gives every page a distinct question and summary', () => {
    const questions = WAVE_10.map((s) => guide(s).question);
    expect(new Set(questions).size).toBe(questions.length);
    const summaries = WAVE_10.map((s) => guide(s).summary);
    expect(new Set(summaries).size).toBe(summaries.length);
  });

  it('keeps summaries within the meta-description limit', () => {
    for (const slug of WAVE_10) expect(guide(slug).summary.length).toBeLessThanOrEqual(320);
  });
});

/* -------------------------------------------------------------------------- */
/* Cannibalization: profession, glossary, Wave 8, Wave 9                       */
/* -------------------------------------------------------------------------- */

describe('the profession route and the glossary keep what they own', () => {
  it('shares no question with any guide or profession route', () => {
    const guideQuestions = ALL_GUIDES.filter(
      (g) => !(WAVE_10 as readonly string[]).includes(g.slug),
    ).map((g) => g.question.toLowerCase().trim());
    const professionQuestions = PUBLISHED_PROFESSIONS.map((p) =>
      (p.question ?? '').toLowerCase().trim(),
    ).filter(Boolean);
    expect(professionQuestions.length).toBeGreaterThan(0);
    for (const slug of WAVE_10) {
      const q = guide(slug).question.toLowerCase().trim();
      expect(guideQuestions, `${slug} restates an existing guide question`).not.toContain(q);
      expect(professionQuestions, `${slug} restates a profession question`).not.toContain(q);
    }
  });

  it('does not describe the prosecutorial career, which the profession route owns', () => {
    const judge = getProfession('prosecutor');
    expect(judge, 'the prosecutor profession is missing').toBeDefined();
    for (const pattern of [
      /to become a prosecutor/i,
      /prosecutorial career path/i,
      /qualif\w+ (as|to be) a prosecutor/i,
      /training (route |requirements )?for prosecutors/i,
    ]) {
      expect(ALL_PROSE, `profession material: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('never reproduces a glossary definition verbatim', () => {
    for (const entry of PUBLISHED_GLOSSARY) {
      if (!entry.definition || entry.definition.length < 40) continue;
      expect(
        ALL_PROSE,
        `a Wave 10 page reproduces the glossary definition of "${entry.slug}"`,
      ).not.toContain(entry.definition);
    }
  });

  it('links to Wave 8 rather than restating who investigates', () => {
    expect(ALL_PROSE).toContain('/investigations/');
    for (const pattern of [
      /who (?:may |is legally competent to )?investigates? (?:a )?crime is explained here/i,
      /this page explains who directs (?:the )?investigation/i,
    ]) {
      expect(ALL_PROSE, `Wave 8 material: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('does not consume the courts cluster', () => {
    for (const pattern of [
      /court hierarchy is/i,
      /appellate structure/i,
      /trial procedure/i,
      /rules of evidence/i,
    ]) {
      expect(ALL_PROSE, `Wave 9 material: ${pattern}`).not.toMatch(pattern);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Role: prosecutor is not police, not judge, and prosecution is not conviction */
/* -------------------------------------------------------------------------- */

describe('misconception fields never carry markdown links', () => {
  it('no guide anywhere puts a markdown link in a misconception', () => {
    /*
     * Found by a Wave 10 e2e assertion that failed for an unexpected reason. `Misconception`
     * claim and reality are rendered as PLAIN TEXT — unlike `Block` prose, they do not pass
     * through the internal-link resolver — so a markdown link there reaches the reader as raw
     * "[text](/url)" syntax on the page.
     *
     * The check is corpus-wide rather than Wave 10 only, because the failure that surfaced it
     * also existed on an older law-enforcement guide, where it had been rendering raw markdown
     * to readers. Links belong in prose blocks, where they resolve.
     */
    const offenders: string[] = [];
    for (const g of ALL_GUIDES) {
      for (const m of g.misconceptions) {
        if (/\]\(\//.test(m.claim)) offenders.push(`${g.slug}: claim`);
        if (/\]\(\//.test(m.reality)) offenders.push(`${g.slug}: reality`);
      }
    }
    expect(offenders, 'markdown links render as raw syntax in misconceptions').toEqual([]);
  });

  it('the check is not vacuous — it detects the shape it forbids', () => {
    expect(/\]\(\//.test('see [the guide](/courts/court-hierarchy) for more')).toBe(true);
    expect(/\]\(\//.test('a sentence with no link at all')).toBe(false);
  });
});

describe('the prosecuting role is kept distinct from policing and adjudication', () => {
  it('states that prosecution is separate from the investigation and from the court', () => {
    const p = prose(guide('why-public-prosecution-exists'));
    expect(p).toMatch(/Separate from the investigation/i);
    expect(p).toMatch(/Separate from the court/i);
  });

  it('never says the prosecutor’s purpose is to convict', () => {
    for (const pattern of [
      /(?:job|purpose|role|aim|goal) (?:of the prosecutor )?is to (?:secure |obtain |win )?convict/i,
      /prosecutors? (?:exist|are there) to convict/i,
    ]) {
      expect(ALL_ASSERTED, `conviction framing: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('carries the conviction framing as a corrected misconception', () => {
    const hit = guide('why-public-prosecution-exists').misconceptions.find((m) =>
      /secure convictions/i.test(m.claim),
    );
    expect(hit, 'the conviction framing is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/according to law|decide whether/i);
  });

  it('never claims prosecutors do not investigate', () => {
    /*
     * Forced by mutation proof M6, which applied cleanly and did not fail — the suite had no
     * guard here. Wave 8 established from primary sources that German law places legal
     * responsibility for the investigation on the prosecution (§ 160 StPO), that French law has
     * the police judiciaire exercised under the direction of the procureur (CPP Art. 12), and
     * that a Japanese public prosecutor may investigate an offence himself. A prosecution
     * cluster implying investigation is always someone else's work would contradict the site's
     * own sourced material.
     */
    for (const pattern of [
      /prosecutors? never investigate/i,
      /investigation is always the work of the police/i,
      /prosecutors? do not investigate/i,
      /prosecutors? are not involved in (?:the )?investigation/i,
    ]) {
      expect(ALL_ASSERTED, `denies prosecutorial investigation: ${pattern}`).not.toMatch(
        pattern,
      );
    }
  });

  it('positively acknowledges that prosecutors direct or conduct investigations somewhere', () => {
    const p = prose(guide('why-public-prosecution-exists'));
    expect(p).toMatch(
      /legal responsibility for the investigation on the prosecution|under the direction of the procureur|may investigate an offence themselves/i,
    );
    /* And hands the subject to the wave that owns it rather than restating it. */
    expect(ALL_PROSE).toContain('/investigations/police-vs-prosecutor-investigation');
  });

  it('never describes prosecutors as working for the police', () => {
    expect(ALL_ASSERTED).not.toMatch(/prosecutors? work for the police/i);
  });
});

/* -------------------------------------------------------------------------- */
/* A charge is not a finding                                                   */
/* -------------------------------------------------------------------------- */

describe('an accused person is never treated as an offender', () => {
  it('uses no language equating a charge with guilt', () => {
    for (const pattern of [
      /charged means guilty/i,
      /prosecuted means guilty/i,
      /indicted means guilty/i,
      /the criminal (?:was|is) charged/i,
      /\bthe criminal\b(?! justice| law| procedure| code| offence| case| process| trial| court| proceedings| investigation| act)/i,
      /once charged, the offender/i,
      /the accused offender/i,
    ]) {
      expect(ALL_ASSERTED, `guilt-implying language: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('the guilt-language patterns are not vacuous', () => {
    /* Each pattern is proved live against text that must match it. */
    const fixture = [
      'Being charged means guilty in the eyes of the law.',
      'Having been prosecuted means guilty of the offence.',
      'Being indicted means guilty until shown otherwise.',
      'The criminal was charged the following morning.',
      'The criminal then appeared before the court.',
      'Once charged, the offender is brought before a judge.',
      'The accused offender was released on bail.',
    ].join('\n');
    for (const pattern of [
      /charged means guilty/i,
      /prosecuted means guilty/i,
      /indicted means guilty/i,
      /the criminal (?:was|is) charged/i,
      /\bthe criminal\b(?! justice| law| procedure| code| offence| case| process| trial| court| proceedings| investigation| act)/i,
      /once charged, the offender/i,
      /the accused offender/i,
    ]) {
      expect(fixture, `pattern matches nothing and is dead: ${pattern}`).toMatch(pattern);
    }
  });

  it('states explicitly that a charge is an allegation the state undertakes to prove', () => {
    const p = prose(guide('prosecution-and-presumption-of-innocence'));
    expect(p).toMatch(/undertak\w+ to (?:establish|prove)/i);
    expect(p).toMatch(/obligation to prove rests with the state|burden sits/i);
  });

  it('states that a decision not to charge is not a finding either', () => {
    expect(ALL_PROSE).toMatch(
      /does not establish that nothing happened|not a finding about what happened/i,
    );
  });

  it('carries the terminology rule the cluster follows', () => {
    const p = prose(guide('prosecution-and-presumption-of-innocence'));
    for (const term of [
      /\bsuspect\b/i,
      /\baccused\b/i,
      /\bdefendant\b/i,
      /convicted person/i,
    ]) {
      expect(p, `stage terminology missing: ${term}`).toMatch(term);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* No universal charging standard, no legal-family binary                      */
/* -------------------------------------------------------------------------- */

describe('no charging test is presented as universal', () => {
  it('says in terms that there is no universal charging test', () => {
    const p = prose(guide('how-charging-decisions-work'));
    expect(p).toMatch(/no universal charging test/i);
  });

  it('attributes the prospect-of-conviction formulation rather than generalising it', () => {
    /*
     * The site previously stated that prosecution services "typically" apply this test, on the
     * authority of two international instruments and no country-scoped source. Wherever the
     * phrase now appears it must be attributed.
     */
    const hits = [...ALL_PROSE.matchAll(/prospects? of conviction/gi)];
    expect(hits.length, 'the formulation is never discussed').toBeGreaterThan(0);
    for (const h of hits) {
      const around = ALL_PROSE.slice(Math.max(0, h.index! - 400), h.index! + 200);
      expect(
        around,
        `unattributed prospect-of-conviction claim: ${around.slice(0, 120)}`,
      ).toMatch(
        /systems that|services that|belongs to|does not describe|asks nothing about|not a global rule|do not describe/i,
      );
    }
  });

  it('carries Germany’s threshold as the counter-case, in the original', () => {
    const p = prose(guide('how-charging-decisions-work'));
    expect(p).toMatch(/zureichende tatsächliche Anhaltspunkte/);
    expect(p).toMatch(/sufficient factual indications/i);
    expect(p).toMatch(/verpflichtet|obliged/i);
  });

  it('never asserts a single global charging standard', () => {
    for (const pattern of [
      /prosecutors everywhere ask/i,
      /the universal (?:charging )?test/i,
      /all prosecution services apply/i,
      /prosecution services typically apply a two-stage test/i,
    ]) {
      expect(ALL_ASSERTED, `universal charging claim: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('cites country-scoped German sources for the German provisions', () => {
    const sources = guide('how-charging-decisions-work').sources;
    expect(sources).toContain('de-stpo-152-legalitaetsgrundsatz');
    expect(sources).toContain('de-stpo-170-anklageerhebung');
  });
});

describe('discretion and legality are not a legal-family binary', () => {
  it('carries the binary as a corrected misconception', () => {
    const hit = guide('prosecutorial-discretion-and-legality').misconceptions.find((m) =>
      /common-law systems give prosecutors discretion/i.test(m.claim),
    );
    expect(hit, 'the binary is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/Germany/);
  });

  it('shows the archetype contradicting the binary', () => {
    const p = prose(guide('prosecutorial-discretion-and-legality'));
    expect(p).toMatch(/§ 153|section 153/i);
    expect(p).toMatch(/kein öffentliches Interesse|no public interest/i);
    expect(p).toMatch(/discretionary judgement inside a mandatory framework|binary fails/i);
  });

  it('never asserts the binary', () => {
    for (const pattern of [
      /common[- ]law systems? (?:have|give) (?:prosecutors )?discretion and civil[- ]law/i,
      /civil[- ]law systems? (?:follow|apply) (?:the )?legality principle and common[- ]law/i,
    ]) {
      expect(ALL_ASSERTED).not.toMatch(pattern);
    }
  });

  it('never says a legality system prosecutes everything', () => {
    expect(ALL_ASSERTED).not.toMatch(/prosecutes? every offence it learns of/i);
    expect(prose(guide('prosecutorial-discretion-and-legality'))).toMatch(
      /unless the law provides otherwise/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Independence: arrangement, never performance; hierarchy is not control      */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  France: 'FR',
  Spain: 'ES',
  Brazil: 'BR',
  Kenya: 'KE',
  Ireland: 'IE',
  Nigeria: 'NG',
};

describe('independence claims describe arrangements, never performance', () => {
  it('never asserts that a named country HAS an independent prosecution', () => {
    for (const country of Object.keys(COUNTRIES)) {
      for (const pattern of [
        new RegExp(
          `${country}(?:'s|’s)? (?:prosecution|prosecutors?|prosecution service) (?:is|are) independent`,
          'i',
        ),
        new RegExp(`${country} has an independent (?:prosecution|prosecutor)`, 'i'),
        new RegExp(`the independent ${country}(?:n)? (?:prosecution|prosecutor)`, 'i'),
      ]) {
        expect(ALL_ASSERTED, `unsourced independence claim about ${country}`).not.toMatch(
          pattern,
        );
      }
    }
  });

  it('reports Ireland’s independence as the office’s own statement', () => {
    const p = prose(guide('why-prosecutorial-independence-matters'));
    expect(p).toMatch(/office('|’)s own statement|states that she is/i);
    expect(p).toMatch(/different claim from establishing it/i);
  });

  it('records the French and German positions as contested without resolving them', () => {
    const p = prose(guide('why-prosecutorial-independence-matters'));
    expect(p).toMatch(/disputed|debate/i);
    expect(p).toMatch(/neither wholly independent|either wholly independent of government/i);
  });

  it('says that a formal arrangement is not a working one', () => {
    const p = prose(guide('why-prosecutorial-independence-matters'));
    expect(p).toMatch(
      /empirical question|cannot be read off a text|describing the arrangement/i,
    );
  });

  it('is not vacuous — the page discusses independence at length', () => {
    expect(prose(guide('why-prosecutorial-independence-matters')).length).toBeGreaterThan(4000);
  });
});

describe('hierarchy is never equated with political control', () => {
  it('states the distinction explicitly', () => {
    const p = prose(guide('why-prosecutorial-independence-matters'));
    expect(p).toMatch(/Hierarchy is not political control/i);
    expect(p).toMatch(/chain of supervision inside an institution/i);
  });

  it('carries Spain’s constitutional hierarchy as a principle, not a defect', () => {
    const p = ALL_PROSE;
    expect(p).toMatch(/unidad de actuación y dependencia jerárquica/);
    expect(p).toMatch(
      /principle of the institution, not recorded as a shortcoming|not recorded as a shortcoming/i,
    );
  });

  it('never asserts that a hierarchical service is politically controlled', () => {
    for (const pattern of [
      /hierarchical prosecution (?:services?|systems?) (?:are|is) politically controlled/i,
      /hierarchy means political control/i,
      /under political control/i,
    ]) {
      expect(ALL_ASSERTED, `political-control claim: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('records that France’s instructions may not reach individual files', () => {
    expect(ALL_PROSE).toMatch(/en aucun cas dans les dossiers judiciaires/);
  });
});

describe('independence and accountability are not opposites', () => {
  it('states that independence does not mean absence of accountability', () => {
    const p = prose(guide('prosecutorial-accountability'));
    expect(p).toMatch(/does not mean an absence of accountability|Neither implies the other/i);
    expect(p).toMatch(/does not necessarily mean political direction/i);
  });

  it('carries the claim as a corrected misconception', () => {
    const hit = guide('prosecutorial-accountability').misconceptions.find((m) =>
      /unaccountable/i.test(m.claim),
    );
    expect(hit).toBeDefined();
  });

  it('does not claim every prosecutorial decision is reviewable', () => {
    const hit = guide('prosecutorial-accountability').misconceptions.find((m) =>
      /challenged in court/i.test(m.claim),
    );
    expect(hit, 'the reviewability overstatement is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/varies by system|not a general right of review/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Terminology                                                                 */
/* -------------------------------------------------------------------------- */

describe('country-specific prosecutor terminology is not universalised', () => {
  it('does not flatten the Ministério Público', () => {
    const p = ALL_PROSE;
    expect(p).toMatch(/Ministério Público/);
    /* The wider remit must be present wherever it is named as a prosecution body. */
    expect(p).toMatch(
      /diffuse and collective interests|inalienable social and individual interests/i,
    );
    expect(p).toMatch(/outside (?:the executive|all three branches)/i);
    expect(p).toMatch(/true and radically incomplete|wider than/i);
  });

  it('never calls the Ministério Público a generic prosecution or police agency', () => {
    for (const pattern of [
      /Ministério Público,? (?:the )?Brazil(?:'s|ian)? (?:district attorneys|prosecution agency)/i,
      /Brazilian district attorney/i,
      /Ministério Público is (?:simply |just )?(?:the )?Brazil(?:'s|ian)? prosecution service\b/i,
    ]) {
      expect(ALL_ASSERTED, `flattened Ministério Público: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('does not universalise the American local prosecutor title', () => {
    const p = ALL_PROSE;
    expect(p).toMatch(
      /district attorney, county attorney, commonwealth attorney, or state’s attorney/,
    );
    expect(p).toMatch(/title varies by state|no single American term/i);
  });

  it('does not treat DPP or Crown prosecutor as a universal institution type', () => {
    for (const pattern of [
      /the Director of Public Prosecutions model/i,
      /every country has a Director of Public Prosecutions/i,
      /Crown prosecutors? (?:is|are) the (?:global|universal) term/i,
    ]) {
      expect(ALL_ASSERTED).not.toMatch(pattern);
    }
  });

  it('warns against reading one country’s vocabulary onto another', () => {
    expect(ALL_PROSE).toMatch(
      /another country('|’)s vocabulary|forcing all of them into one label|does not say and contradicts something it does/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Country claims are country-sourced                                          */
/* -------------------------------------------------------------------------- */

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
  const WITH_US = { ...COUNTRIES, 'United States': 'US' };

  it.each(WAVE_10)('%s cites a scoped source for every country it names', (slug) => {
    const g = guide(slug);
    const text = prose(g);
    for (const [country, iso] of Object.entries(WITH_US)) {
      if (!new RegExp(`\\b${country}\\b`).test(text)) continue;
      expect(
        hasSourceFor(g.sources, iso, country),
        `${slug} discusses ${country} with no source scoped to or naming it`,
      ).toBe(true);
    }
  });

  it('the rule still rejects a generic instrument standing in for a country', () => {
    for (const [country, iso] of Object.entries(WITH_US)) {
      expect(
        hasSourceFor(['un-prosecutors-guidelines', 'iccpr', 'udhr'], iso, country),
        `${country} laundered through an international instrument`,
      ).toBe(false);
    }
  });

  it('states that international instruments are not domestic law', () => {
    expect(ALL_PROSE).toMatch(
      /not the law of any of the countries|are not the domestic law of any country|It does not establish the law of/i,
    );
  });

  it('is not vacuous — the pages do make country claims', () => {
    const named = Object.keys(WITH_US).filter((c) => new RegExp(`\\b${c}\\b`).test(ALL_PROSE));
    expect(named.length).toBeGreaterThanOrEqual(6);
  });

  it('names only countries with a published dossier, and resolves every source', () => {
    const slugs: Record<string, string> = {
      Germany: 'germany',
      France: 'france',
      Spain: 'spain',
      Brazil: 'brazil',
      Kenya: 'kenya',
      Ireland: 'ireland',
      Nigeria: 'nigeria',
      'United States': 'united-states',
    };
    for (const [country, slug] of Object.entries(slugs)) {
      if (!new RegExp(`\\b${country}\\b`).test(ALL_PROSE)) continue;
      expect(getDossier(slug), `${country} named with no dossier`).toBeDefined();
    }
    for (const slug of WAVE_10) {
      for (const id of guide(slug).sources) {
        expect(getSource(id), `${slug} cites unknown source ${id}`).toBeDefined();
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Defence boundary, neutrality, restricted claims                             */
/* -------------------------------------------------------------------------- */

describe('the defence cluster is acknowledged but not consumed', () => {
  it('acknowledges that the accused has rights', () => {
    expect(ALL_PROSE).toMatch(/answer the case|test the evidence|legal help/i);
    expect(ALL_PROSE).toMatch(/presum\w+ (?:as )?(?:not guilty|innocent)/i);
  });

  it('does not build the defence cluster', () => {
    for (const pattern of [
      /public defender/i,
      /legal aid (?:is|scheme|application)/i,
      /attorney[- ]client privilege/i,
      /defence strategy/i,
      /how to (?:instruct|choose|find) (?:a )?(?:lawyer|counsel|solicitor)/i,
      /equality of arms is/i,
    ]) {
      expect(ALL_PROSE, `defence-cluster material: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('says the defence side is a separate subject', () => {
    expect(ALL_PROSE).toMatch(/develop.{0,30}separately|subject in its own right|own cluster/i);
  });
});

describe('the cluster is neutral and free of restricted claims', () => {
  it('uses no ranking or superlative language', () => {
    for (const pattern of [
      /best prosecution system/i,
      /strongest prosecutor/i,
      /most independent prosecution/i,
      /most effective prosecutors/i,
      /toughest prosecutors/i,
      /weakest prosecution/i,
      /\bultimate\b/i,
      /\bdefinitive\b/i,
    ]) {
      expect(ALL_PROSE, `ranking language: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('states that no arrangement is ranked', () => {
    expect(ALL_PROSE).toMatch(
      /takes no position between them|No arrangement is ranked|neither is presented here as better/i,
    );
  });

  it('publishes no statistic that would need restricted-claim handling', () => {
    expect(ALL_PROSE).not.toMatch(/\d+\s?%/);
    expect(ALL_PROSE).not.toMatch(
      /conviction rate|charging rate|declination rate|plea rate|case backlog|prosecutorial workload|public trust/i,
    );
  });

  it('does not characterise any prosecution service politically', () => {
    for (const pattern of [
      /pro[- ]government prosecut/i,
      /anti[- ]government prosecut/i,
      /left[- ]wing prosecut/i,
      /right[- ]wing prosecut/i,
      /politicised prosecution service/i,
    ]) {
      expect(ALL_PROSE, `political characterisation: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('gives no prosecution tactics or legal advice', () => {
    for (const pattern of [
      /how to (?:secure|obtain|maximise) (?:a )?conviction/i,
      /you should (?:contact|instruct|appeal)/i,
      /your case/i,
      /negotiat\w+ a (?:plea|deal)/i,
    ]) {
      expect(ALL_PROSE, `advice or tactics: ${pattern}`).not.toMatch(pattern);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Knowledge graph and metadata                                                */
/* -------------------------------------------------------------------------- */

describe('the cluster is connected without link spam', () => {
  it('gives every page at least two published relatives', () => {
    for (const slug of WAVE_10) {
      const g = guide(slug);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      for (const rel of g.related) {
        expect(getGuide(rel), `${slug} relates to unpublished ${rel}`).toBeDefined();
      }
    }
  });

  it('links the corrected foundational guide into the cluster', () => {
    const foundational = getGuide('what-does-a-prosecutor-do');
    expect(foundational).toBeDefined();
    expect(foundational?.related).toContain('why-public-prosecution-exists');
    /* And it now carries country-scoped sources, which it previously did not. */
    expect(foundational?.sources).toContain('de-stpo-152-legalitaetsgrundsatz');
  });

  it('does not spam links', () => {
    for (const slug of WAVE_10) {
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
    for (const slug of WAVE_10) {
      const g = guide(slug);
      expect(g.question.length).toBeGreaterThan(0);
      expect(g.sources.length).toBeGreaterThan(0);
      expect(g.updatedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.reviewedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.readingTimeMinutes).toBeGreaterThan(0);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThan(0);
    }
  });
});
