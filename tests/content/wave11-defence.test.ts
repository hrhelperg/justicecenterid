import { describe, expect, it } from 'vitest';
import { DEFENCE_GUIDES } from '@/content/guides/defence';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { PUBLISHED_PROFESSIONS } from '@/content/professions';
import { PUBLISHED_GLOSSARY } from '@/content/glossary';
import { getSection } from '@/content/sections';
import { SECTION_IDS, SAFETY_SENSITIVE_SECTIONS } from '@/content/types';
import { getSource } from '@/content/sources';
import { getDossier } from '@/content/dossiers';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 11: right to defence and legal representation.
 *
 * Four failure modes drive this suite.
 *
 * CONFLATION. "Right to counsel", "legal aid", "public defender" and "court-appointed" name
 * different things, and the vocabulary invites treating them as synonyms. Germany, Brazil and
 * France answer differently on every axis, so every conflation is falsifiable here.
 *
 * OVERCLAIM. "Everyone has the right to a free lawyer" and "everything you tell a lawyer is
 * privileged" are both false in every system reached, and both are the kind of sentence a page
 * like this drifts into.
 *
 * TACTICS. A defence cluster is one step from a manual for answering questions, handling
 * evidence and frustrating a process. The safety patterns are broad and proved against a fixture.
 *
 * COMMERCE. A page about private representation is one step from lawyer marketing.
 */

const WAVE_11 = [
  'why-the-right-to-defence-matters',
  'right-to-counsel',
  'how-defence-is-funded',
  'what-defence-counsel-does',
  'defence-counsel-and-prosecutor',
  'access-to-the-case-file',
  'lawyer-client-confidentiality',
] as const;

function guide(slug: string): Guide {
  const found = DEFENCE_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 11 guide missing: ${slug}`);
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

const ALL_PROSE = WAVE_11.map((s) => prose(guide(s))).join('\n');
const ALL_ASSERTED = WAVE_11.map((s) => asserted(guide(s))).join('\n');

/* -------------------------------------------------------------------------- */
/* The section itself                                                          */
/* -------------------------------------------------------------------------- */

describe('the defence section is registered canonically', () => {
  it('exists in the section registry, not only as a route', () => {
    expect(SECTION_IDS).toContain('defence');
    const section = getSection('defence');
    expect(section, 'defence is not in sections.ts').toBeDefined();
    expect(section?.title).toBe('Defence');
    expect(section?.keyIdeas.length).toBeGreaterThanOrEqual(4);
    expect(section?.outOfScope.length).toBeGreaterThanOrEqual(3);
  });

  it('is marked safety-sensitive, so a safety review is mandatory', () => {
    expect(SAFETY_SENSITIVE_SECTIONS).toContain('defence');
    for (const slug of WAVE_11) expect(guide(slug).safetyReview).toBe('cleared');
  });

  it('routes the section index and every guide beneath it', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain('/defence');
    for (const slug of WAVE_11) {
      expect(PUBLIC_ROUTE_PATHS).toContain(`/defence/${slug}`);
      expect(guidePath(guide(slug))).toBe(`/defence/${slug}`);
    }
  });

  it('creates no competing hub under another spelling or name', () => {
    /*
     * The hub was chosen on evidence: the corpus is consistently British English (defence 39,
     * defense 14 — all French proper nouns), and every section is a bare function noun. Both
     * rejected candidates must stay absent.
     */
    for (const path of PUBLIC_ROUTE_PATHS) {
      expect(path.startsWith('/defense')).toBe(false);
      expect(path.startsWith('/legal-defence')).toBe(false);
      expect(path.startsWith('/legal-defense')).toBe(false);
    }
  });

  it('states its own out-of-scope boundary, including advice and tactics', () => {
    const out = (getSection('defence')?.outOfScope ?? []).join('\n');
    expect(out).toMatch(/advice/i);
    expect(out).toMatch(/tactic/i);
    expect(out).toMatch(/obstruct|evade|frustrate/i);
    expect(out).toMatch(/commercial|referral|fees/i);
  });

  it('publishes every guide with full metadata', () => {
    for (const slug of WAVE_11) {
      const g = guide(slug);
      expect(g.status).toBe('published');
      expect(g.review).toBe('fact-checked');
      expect(g.section).toBe('defence');
      expect(g.sources.length).toBeGreaterThan(0);
      expect(g.summary.length).toBeLessThanOrEqual(320);
      expect(g.uncertainty?.length ?? 0).toBeGreaterThan(0);
      expect(g.updatedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Cannibalization                                                             */
/* -------------------------------------------------------------------------- */

describe('nothing already owned is restated', () => {
  it('shares no question with any guide or profession route', () => {
    const guideQuestions = ALL_GUIDES.filter(
      (g) => !(WAVE_11 as readonly string[]).includes(g.slug),
    ).map((g) => g.question.toLowerCase().trim());
    const professionQuestions = PUBLISHED_PROFESSIONS.map((p) =>
      (p.question ?? '').toLowerCase().trim(),
    ).filter(Boolean);
    expect(professionQuestions.length).toBeGreaterThan(0);
    for (const slug of WAVE_11) {
      const q = guide(slug).question.toLowerCase().trim();
      expect(guideQuestions, `${slug} restates a guide question`).not.toContain(q);
      expect(professionQuestions, `${slug} restates a profession question`).not.toContain(q);
    }
  });

  it('never reproduces a glossary definition verbatim', () => {
    for (const entry of PUBLISHED_GLOSSARY) {
      if (!entry.definition || entry.definition.length < 40) continue;
      expect(
        ALL_PROSE,
        `a Wave 11 page reproduces the glossary definition of "${entry.slug}"`,
      ).not.toContain(entry.definition);
    }
  });

  it('links to the presumption page rather than restating it', () => {
    expect(ALL_PROSE).toContain('/prosecution/prosecution-and-presumption-of-innocence');
    for (const pattern of [
      /the presumption of innocence (?:is|means) (?:the rule|that a person)/i,
      /this page explains the presumption of innocence/i,
    ]) {
      expect(ALL_ASSERTED, `restates the presumption: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('does not consume the prosecution or courts clusters', () => {
    /*
     * Denial-aware. A page saying "this does not describe trial procedure" is observing the
     * boundary, not crossing it, and a check that fired on that would forbid the sentence which
     * states the boundary. Each hit is therefore read in context and must sit inside a denial.
     */
    for (const pattern of [
      /charging standard/i,
      /prosecutorial discretion is/i,
      /plea bargain/i,
      /court hierarchy/i,
      /appellate structure/i,
      /trial procedure/i,
    ]) {
      for (const hit of ALL_PROSE.matchAll(new RegExp(pattern.source, 'gi'))) {
        const around = ALL_PROSE.slice(Math.max(0, hit.index! - 220), hit.index! + 60);
        expect(around, `reserved cluster material used, not disclaimed: ${hit[0]}`).toMatch(
          /does not|not describe|belongs to|reserved|no |never/i,
        );
      }
    }
  });

  it('defers the trial and appeal stages rather than absorbing them', () => {
    for (const slug of [
      'defence-rights-at-trial',
      'defence-rights-on-appeal',
      'equality-of-arms',
      'self-representation',
      'right-to-examine-witnesses',
      'right-to-challenge-evidence',
      'effective-assistance-of-counsel',
      'public-defender',
      'legal-aid',
      'court-appointed-counsel',
      'private-defence-lawyer',
      'attorney-client-privilege',
    ]) {
      expect(
        PUBLIC_ROUTE_PATHS,
        `${slug} was published despite being merged or deferred`,
      ).not.toContain(`/defence/${slug}`);
    }
  });

  it('creates no defence institution or profession route', () => {
    for (const slug of [
      'public-defender-office',
      'legal-aid-authority',
      'legal-aid-commission',
      'public-defence-institution',
      'court-appointed-counsel-system',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
    for (const slug of [
      'defence-lawyer',
      'defense-lawyer',
      'public-defender',
      'legal-aid-lawyer',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/professions/${slug}`);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Rights: counsel is not free counsel, and free counsel is not universal      */
/* -------------------------------------------------------------------------- */

describe('the three rights inside "right to counsel" are kept apart', () => {
  it('names all three explicitly', () => {
    const p = prose(guide('right-to-counsel'));
    expect(p).toMatch(/right to consult a lawyer/i);
    expect(p).toMatch(/right to have counsel appointed/i);
    expect(p).toMatch(/right to have the state pay/i);
  });

  it('never claims a universal right to a free lawyer', () => {
    for (const pattern of [
      /everyone has (?:a|the) right to a free lawyer/i,
      /everyone is entitled to a free lawyer/i,
      /a free lawyer is guaranteed/i,
      /the state always provides a lawyer/i,
      /everyone gets a free lawyer/i,
    ]) {
      for (const hit of ALL_ASSERTED.matchAll(new RegExp(pattern.source, 'gi'))) {
        const around = ALL_ASSERTED.slice(Math.max(0, hit.index! - 200), hit.index! + 140);
        expect(around, `universal free-counsel claim asserted: ${hit[0]}`).toMatch(
          /wrong|no system|does not|not (?:true|provide)|is false|misconception/i,
        );
      }
    }
  });

  it('the free-counsel patterns are not vacuous', () => {
    const fixture = [
      'Everyone has the right to a free lawyer in criminal cases.',
      'Everyone is entitled to a free lawyer if charged.',
      'A free lawyer is guaranteed under international law.',
      'The state always provides a lawyer to anyone accused.',
      'In practice everyone gets a free lawyer.',
    ].join('\n');
    for (const pattern of [
      /everyone has (?:a|the) right to a free lawyer/i,
      /everyone is entitled to a free lawyer/i,
      /a free lawyer is guaranteed/i,
      /the state always provides a lawyer/i,
      /everyone gets a free lawyer/i,
    ]) {
      expect(fixture, `dead pattern: ${pattern}`).toMatch(pattern);
    }
  });

  it('carries the overclaim as a corrected misconception', () => {
    const hit = guide('right-to-counsel').misconceptions.find((m) =>
      /right to a free lawyer/i.test(m.claim),
    );
    expect(hit, 'the overclaim is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/means-tested|insufficien|no system/i);
  });

  it('records that Germany’s appointment trigger is not means', () => {
    const p = ALL_PROSE;
    expect(p).toMatch(/notwendige Verteidigung|necessary defence/i);
    expect(p).toMatch(
      /not (?:by|on) (?:the accused's )?means|rather than by means|not what the accused earns/i,
    );
  });

  it('never says defence rights guarantee acquittal or immunity', () => {
    for (const pattern of [
      /right to defence means (?:a )?right to be acquitted/i,
      /defence rights guarantee/i,
      /immunity from prosecution/i,
    ]) {
      expect(ALL_ASSERTED, `overclaim: ${pattern}`).not.toMatch(pattern);
    }
    expect(ALL_PROSE).toMatch(/not (?:mean )?immunity|does not mean freedom from prosecution/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Representation taxonomy                                                     */
/* -------------------------------------------------------------------------- */

describe('legal aid, public defence and appointment are not conflated', () => {
  it('separates funding, appointment and employment as three questions', () => {
    const p = prose(guide('how-defence-is-funded'));
    expect(p).toMatch(/Funding — who pays/i);
    expect(p).toMatch(/Appointment — who assigns/i);
    expect(p).toMatch(/Employment — who the lawyer works for/i);
  });

  it('never equates legal aid with a public defender', () => {
    for (const pattern of [
      /legal aid (?:is|means) (?:the same as )?(?:a )?public defender/i,
      /public defenders? (?:are|is) (?:the )?legal aid/i,
      /legal aid and public defender are the same/i,
    ]) {
      expect(ALL_ASSERTED, `conflation: ${pattern}`).not.toMatch(pattern);
    }
    const hit = guide('how-defence-is-funded').misconceptions.find((m) =>
      /legal aid and public defenders are the same/i.test(m.claim),
    );
    expect(hit, 'the conflation is never addressed').toBeDefined();
  });

  it('never equates court appointment with state employment', () => {
    for (const pattern of [
      /court[- ]appointed lawyers? (?:is|are) (?:a |an )?(?:state|government) employee/i,
      /appointed by the court, (?:and )?therefore employed by/i,
      /a Pflichtverteidiger is a (?:state|government) employee/i,
      /Pflichtverteidiger.{0,40}public defender/i,
    ]) {
      expect(ALL_ASSERTED, `appointment/employment conflation: ${pattern}`).not.toMatch(
        pattern,
      );
    }
    expect(ALL_PROSE).toMatch(/Court-appointed does not mean government-employed/i);
  });

  it('states that two of the three systems use private practitioners', () => {
    const p = prose(guide('how-defence-is-funded'));
    expect(p).toMatch(/Rechtsanwalt/);
    expect(p).toMatch(/avocat/);
    expect(p).toMatch(/private practitioner/i);
  });

  it('does not universalise the public defender model', () => {
    for (const pattern of [
      /every country has a public defender/i,
      /the public defender model is standard/i,
      /public defenders? exist everywhere/i,
    ]) {
      expect(ALL_ASSERTED).not.toMatch(pattern);
    }
    expect(ALL_PROSE).toMatch(/Germany and France do not|no defence institution/i);
  });
});

describe('Brazil’s Defensoria Pública is not flattened', () => {
  it('carries its constitutional standing, not just its function', () => {
    const p = ALL_PROSE;
    expect(p).toMatch(/permanent institution essential to the jurisdictional function/i);
    expect(p).toMatch(/inamovibilidade/);
    expect(p).toMatch(
      /forbidden to practise privately|bar on private practice|FORBIDDEN to practise/i,
    );
  });

  it('records the wider-than-criminal remit', () => {
    expect(ALL_PROSE).toMatch(/promotion of human rights/i);
    expect(ALL_PROSE).toMatch(/collective/i);
    expect(ALL_PROSE).toMatch(/extrajudicial/i);
  });

  it('never calls it a public defender office', () => {
    for (const pattern of [
      /Defensoria Pública is (?:simply |just )?Brazil(?:'s|’s)? public defender office/i,
      /Brazil(?:'s|’s)? public defender office/i,
      /Brazilian public defenders? office/i,
    ]) {
      expect(ALL_ASSERTED, `flattened Defensoria: ${pattern}`).not.toMatch(pattern);
    }
    const hit = guide('how-defence-is-funded').misconceptions.find((m) =>
      /public defender office/i.test(m.claim),
    );
    expect(hit, 'the flattening is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/difference in kind|conceals/i);
  });

  it('draws the parallel with the Ministério Público, which is the finding', () => {
    expect(ALL_PROSE).toMatch(/Ministério Público/);
    expect(ALL_PROSE).toMatch(/same (?:constitutional )?(?:formula|terms|standing)/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Privilege and confidentiality                                               */
/* -------------------------------------------------------------------------- */

describe('confidentiality and privilege are distinguished, and neither is absolute', () => {
  it('states that they are two different things', () => {
    const p = prose(guide('lawyer-client-confidentiality'));
    expect(p).toMatch(/professional duty of confidentiality|DUTY OF CONFIDENTIALITY/i);
    expect(p).toMatch(/evidentiary privilege|EVIDENTIARY PRIVILEGE/i);
    expect(p).toMatch(/not the same claim|are related and distinct/i);
  });

  it('never claims absolute protection', () => {
    for (const pattern of [
      /absolutely protected/i,
      /always protected/i,
      /cannot ever be disclosed/i,
      /nothing said to a lawyer can/i,
      /privilege is absolute/i,
    ]) {
      const hits = [...ALL_ASSERTED.matchAll(new RegExp(pattern.source, 'gi'))];
      for (const h of hits) {
        const around = ALL_ASSERTED.slice(Math.max(0, h.index! - 180), h.index! + 120);
        expect(around, `absolute-privilege claim: ${h[0]}`).toMatch(/not|never|no system/i);
      }
    }
  });

  it('carries the absolute claim as a corrected misconception', () => {
    const hit = guide('lawyer-client-confidentiality').misconceptions.find((m) =>
      /absolutely protected/i.test(m.claim),
    );
    expect(hit, 'the absolute claim is never addressed').toBeDefined();
    expect(hit?.reality).toMatch(/Not in any system|statutory exception/i);
  });

  it('states the German exception without describing its operation', () => {
    const p = prose(guide('lawyer-client-confidentiality'));
    expect(p).toMatch(/confined to named offences/i);
    expect(p).toMatch(/routed through a court|through a court rather than/i);
    expect(p).toMatch(/does not describe how it operates|deliberately not/i);
  });

  it('does not universalise Anglo-American privilege vocabulary', () => {
    expect(ALL_PROSE).toMatch(/are not translations of each other|do not map onto each other/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Safety                                                                      */
/* -------------------------------------------------------------------------- */

const TACTICAL_PATTERNS: [string, RegExp][] = [
  ['avoiding admissions', /\b(avoid|avoiding|prevent(?:ing)?) (?:making )?(?:an? )?admission/i],
  [
    'resisting questioning',
    /\b(resist(?:ing)?|defeat(?:ing)?|beat(?:ing)?) (?:police )?(?:questioning|interrogation)/i,
  ],
  [
    'staying silent as tactic',
    /\b(?:you should|it is best to) (?:say nothing|remain silent|refuse to answer)/i,
  ],
  ['hiding evidence', /\b(hide|hiding|conceal(?:ing)?|withhold(?:ing)?) evidence from/i],
  [
    'manufacturing privilege',
    /\b(manufactur(?:e|ing)|creat(?:e|ing)|establish(?:ing)?) privilege\b/i,
  ],
  ['exploiting disclosure', /\b(exploit(?:ing)?|take advantage of) (?:the )?disclosure/i],
  [
    'manipulating witnesses',
    /\b(coach(?:ing)?|manipulat(?:e|ing)|influenc(?:e|ing)) (?:a |the )?witness/i,
  ],
  ['false alibi', /\bfalse alibi\b/i],
  [
    'obstructing proceedings',
    /\bhow to (?:obstruct|delay|frustrate) (?:the |a )?(?:proceeding|process|case)/i,
  ],
  ['beating charges', /\b(beat|beating|fight(?:ing)?) (?:the |your )?charges?\b/i],
  ['avoiding conviction', /\bhow to avoid (?:a )?conviction/i],
];

describe('the cluster publishes nothing tactical', () => {
  it.each(TACTICAL_PATTERNS)('contains no %s content', (_label, pattern) => {
    expect(ALL_PROSE).not.toMatch(pattern);
  });

  it('the tactical patterns are not vacuous — a fixture trips every one', () => {
    const fixture = [
      'This explains how to avoid making an admission during questioning.',
      'Techniques for resisting police interrogation are set out below.',
      'You should say nothing until a lawyer arrives.',
      'A suspect may conceal evidence from investigators.',
      'A method for manufacturing privilege over documents.',
      'Ways to exploit the disclosure timetable.',
      'Guidance on coaching a witness before a hearing.',
      'Constructing a false alibi is covered here.',
      'A note on how to obstruct the process.',
      'This page explains how to beat the charges.',
      'Advice on how to avoid a conviction.',
    ].join('\n');
    for (const [label, pattern] of TACTICAL_PATTERNS) {
      expect(fixture, `pattern "${label}" matches nothing and is dead`).toMatch(pattern);
    }
  });

  it('every page carries a scope callout disclaiming advice', () => {
    for (const slug of WAVE_11) {
      const scope = (guide(slug).definition ?? []).find(
        (b) => b.kind === 'callout' && b.variant === 'scope',
      );
      expect(scope, `${slug} has no scope callout`).toBeDefined();
      expect(scope && 'text' in scope ? scope.text : '').toMatch(/not legal advice/i);
    }
  });

  it('states that the right does not extend to obstruction', () => {
    expect(ALL_PROSE).toMatch(
      /obstruct an investigation|conceal evidence, or interfere|are unlawful in the systems described/i,
    );
  });
});

describe('the private-representation material stays institutional', () => {
  it('carries no commercial or referral content', () => {
    for (const pattern of [
      /\b(?:you (?:can|should|may)|how to) (?:hire|find|choose|instruct) a lawyer\b/i,
      /\btips? for (?:hiring|finding|choosing) a lawyer\b/i,
      /choosing the right lawyer/i,
      /\bfees? (?:start|range|typically cost)/i,
      /contact (?:a|our) (?:lawyer|firm)/i,
      /free consultation/i,
      /\bbest defen[cs]e lawyer\b/i,
    ]) {
      expect(ALL_PROSE, `commercial content: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('the commercial patterns are not vacuous', () => {
    const fixture = [
      'You can find a lawyer through the directory below.',
      'Tips for choosing a lawyer are set out here.',
      'Choosing the right lawyer matters more than anything.',
      'Fees start at a few hundred euros.',
      'Contact our lawyer for a free consultation.',
      'We list the best defence lawyer in each city.',
    ].join('\n');
    for (const pattern of [
      /\b(?:you (?:can|should|may)|how to) (?:hire|find|choose|instruct) a lawyer\b/i,
      /\btips? for (?:hiring|finding|choosing) a lawyer\b/i,
      /choosing the right lawyer/i,
      /\bfees? (?:start|range|typically cost)/i,
      /contact (?:a|our) (?:lawyer|firm)/i,
      /free consultation/i,
      /\bbest defen[cs]e lawyer\b/i,
    ]) {
      expect(fixture, `dead commercial pattern: ${pattern}`).toMatch(pattern);
    }
  });

  it('says it states no fees or eligibility thresholds', () => {
    expect(ALL_PROSE).toMatch(
      /no eligibility rule|states no eligibility|no financial threshold/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Accusation is not guilt                                                     */
/* -------------------------------------------------------------------------- */

describe('an accused person is never treated as guilty', () => {
  it('uses no guilt-implying language', () => {
    for (const pattern of [
      /charged means guilty/i,
      /accused means guilty/i,
      /\bthe criminal\b(?! justice| law| procedure| code| offence| case| process| trial| court| proceedings| investigation| act)/i,
      /the accused offender/i,
      /once charged, the offender/i,
    ]) {
      expect(ALL_ASSERTED, `guilt-implying language: ${pattern}`).not.toMatch(pattern);
    }
  });

  it('states that the accusation is not the finding', () => {
    expect(ALL_PROSE).toMatch(
      /accusation is not the finding|found to have done nothing|has not been determined/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Country claims are country-sourced                                          */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  Brazil: 'BR',
  France: 'FR',
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
  it.each(WAVE_11)('%s cites a scoped source for every country it names', (slug) => {
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

  it('the rule still rejects an international instrument standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(
        hasSourceFor(['iccpr', 'udhr', 'un-prosecutors-guidelines'], iso, country),
        `${country} laundered through an international instrument`,
      ).toBe(false);
    }
  });

  it('states that international instruments do not establish domestic law', () => {
    expect(ALL_PROSE).toMatch(
      /bind only states party|does not establish what any (?:particular )?country provides|not the law of any/i,
    );
  });

  it('names only countries with a published dossier, and resolves every source', () => {
    for (const [country, slug] of Object.entries({
      Germany: 'germany',
      Brazil: 'brazil',
      France: 'france',
    })) {
      if (!new RegExp(`\\b${country}\\b`).test(ALL_PROSE)) continue;
      expect(getDossier(slug), `${country} named with no dossier`).toBeDefined();
    }
    for (const slug of WAVE_11) {
      for (const id of guide(slug).sources) {
        expect(getSource(id), `${slug} cites unknown source ${id}`).toBeDefined();
      }
    }
  });

  it('records that the ECHR was not reached, rather than quoting it', () => {
    /*
     * Five paths to an authoritative ECHR text returned 403 or scanned images. A search summary
     * supplied wording; nothing was quoted from it, and the equality-of-arms page was deferred.
     */
    expect(ALL_PROSE).not.toMatch(/European Convention on Human Rights,? Article 6/i);
    expect(ALL_PROSE).not.toMatch(/interests of justice so require/i);
    expect(prose(guide('right-to-counsel'))).toMatch(
      /European Convention on Human Rights could not be read/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Neutrality and knowledge graph                                              */
/* -------------------------------------------------------------------------- */

describe('the cluster is neutral and connected', () => {
  it('portrays none of the three roles as hostile', () => {
    for (const pattern of [
      /defence lawyers are anti[- ]police/i,
      /prosecutors are anti[- ]defendant/i,
      /courts are pro[- ]state/i,
      /the enemy of justice/i,
      /defence.{0,20}obstruction of justice/i,
    ]) {
      expect(ALL_ASSERTED, `hostile framing: ${pattern}`).not.toMatch(pattern);
    }
    expect(ALL_PROSE).toMatch(
      /Not a moral division|Roles, not allegiances|none of them is the adversary/i,
    );
  });

  it('uses no ranking or superlative language', () => {
    for (const pattern of [
      /best defen[cs]e/i,
      /strongest defen[cs]e system/i,
      /most effective/i,
      /\bultimate\b/i,
      /\bdefinitive\b/i,
    ]) {
      expect(ALL_PROSE, `ranking language: ${pattern}`).not.toMatch(pattern);
    }
    expect(ALL_PROSE).toMatch(/No arrangement is ranked|takes no position between them/i);
  });

  it('publishes no statistic needing restricted-claim handling', () => {
    expect(ALL_PROSE).not.toMatch(/\d+\s?%/);
    expect(ALL_PROSE).not.toMatch(
      /acquittal rate|conviction rate|caseload|legal aid spending/i,
    );
  });

  it('gives every page at least two published relatives', () => {
    for (const slug of WAVE_11) {
      const g = guide(slug);
      expect(g.related.length).toBeGreaterThanOrEqual(2);
      for (const rel of g.related) {
        expect(getGuide(rel), `${slug} relates to unpublished ${rel}`).toBeDefined();
      }
    }
  });

  it('connects outward to prosecution, courts and the glossary', () => {
    expect(ALL_PROSE).toContain('/prosecution/');
    expect(ALL_PROSE).toContain('/glossary/disclosure');
  });

  it('does not spam links', () => {
    for (const slug of WAVE_11) {
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
});
