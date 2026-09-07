import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { COUNTRY_DOSSIERS } from '@/content/dossiers';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 30: lay participation in judging.
 *
 * THE VOCABULARY IS THE PRIMARY RISK, and it is unusual in being a risk of correctness rather than
 * of safety or commerce. "Jury" is the word every English speaker reaches for, and it names one of
 * two arrangements. A jury is a separate lay body; a Schöffengericht and a saiban-in panel are
 * mixed benches on which lay members and professional judges sit together. Japan's own Supreme
 * Court is careful to say its system has points in common with a jury system rather than being
 * one, and the Japan dossier already tells readers it is "not a jury".
 *
 * So the guards below do something no previous wave needed: they police a word. A page in this
 * cluster may use "jury" for the separate-body family and must not use it for a mixed panel, and
 * must not present the two as the same thing under different names.
 *
 * THE SECOND RISK IS AN UNSOURCED NUMBER. Jury size is the fact a reader most expects here, and
 * the wave could not source it — the section of the Juries Act read governs qualification, not
 * size. A number would be trivially easy to supply from memory and impossible to justify, so a
 * guard asserts no jury size appears anywhere in the cluster.
 *
 * SCOPE. /courts places litigation strategy and advice on conducting a case out of scope. This
 * cluster is one sentence from telling a reader what to do about a summons, so deliberation,
 * verdict rules, summons, excusal and deferral are all guarded against.
 */

const WAVE_30 = [
  'lay-participation-in-judging',
  'how-a-lay-court-is-composed',
  'what-a-lay-judge-decides',
  'who-may-serve-on-a-lay-court',
] as const;

const NEW_SOURCES = [
  'de-gvg-schoeffengericht',
  'ew-juries-act-1974-s1',
  'jp-saiban-in-act',
] as const;

const guide = (slug: string): Guide => {
  const g = getGuide(slug);
  if (!g) throw new Error(`missing guide ${slug}`);
  return g;
};

function blockText(blocks: readonly Block[] | undefined): string {
  if (!blocks) return '';
  const out: string[] = [];
  for (const b of blocks) {
    if (b.kind === 'paragraph') out.push(b.text);
    else if (b.kind === 'callout') out.push(b.title, b.text);
    else if (b.kind === 'list') out.push(...b.items);
    else for (const i of b.items) out.push(i.term, i.description);
  }
  return out.join('\n');
}

const sentences = (text: string): string[] => text.split(/(?<=[.!?])\s+|\n+/);

/** Everything a reader sees, misconception claims included. */
function allText(g: Guide): string {
  return [
    g.title,
    g.summary,
    g.question,
    blockText(g.definition),
    blockText(g.whyItExists),
    blockText(g.howItWorks),
    blockText(g.variation),
    blockText(g.rightsAndAccountability),
    blockText(g.furtherReading),
    ...(g.uncertainty ?? []),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality]),
  ].join('\n');
}

/** What the platform asserts in its own voice: the misconception being corrected is excluded. */
function assertedText(g: Guide): string {
  return [
    g.title,
    g.summary,
    g.question,
    blockText(g.definition),
    blockText(g.whyItExists),
    blockText(g.howItWorks),
    blockText(g.variation),
    blockText(g.rightsAndAccountability),
    blockText(g.furtherReading),
    ...(g.uncertainty ?? []),
    ...g.misconceptions.map((m) => m.reality),
  ].join('\n');
}

describe('the cluster exists and is routed', () => {
  it.each(WAVE_30)('%s is published and routed under /courts', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.section).toBe('courts');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
    expect(g.factsVerifiedOn).toBeTruthy();
  });

  it('gives the corpus somewhere to link a concept it already leaned on', () => {
    /*
     * Not decorative. Before this wave the concept appeared across sixteen files with no page
     * behind it, and the /courts section's own variationNote names it as an axis of variation.
     */
    const anchor = guidePath(guide('lay-participation-in-judging'));
    expect(PUBLIC_ROUTE_PATHS).toContain(anchor);
  });
});

/* -------------------------------------------------------------------------- */
/* The word                                                                   */
/* -------------------------------------------------------------------------- */

describe('"jury" is used for the separate-body family and nothing else', () => {
  const MIXED_TERMS =
    /\b(?:Schöffe|Schöffen|Schöffengericht|saiban-in|mixed panel|mixed bench|lay judge)\b/i;

  it('no sentence calls a mixed-panel arrangement a jury', () => {
    /*
     * The characteristic error in this subject. A sentence naming a mixed-panel institution and
     * calling it a jury is wrong about the thing it names, and it is the single most likely
     * mistake for an editor working quickly.
     */
    for (const slug of WAVE_30) {
      const offenders = sentences(assertedText(guide(slug))).filter(
        (s) =>
          MIXED_TERMS.test(s) &&
          /\b(?:is|are|was|were|forms?|constitutes?)\s+(?:a|the)\s+jury\b/i.test(s),
      );
      expect(offenders, `${slug} calls a mixed panel a jury`).toEqual([]);
    }
  });

  it('the anchor page states the distinction explicitly rather than implying it', () => {
    const t = allText(guide('lay-participation-in-judging'));
    expect(t, 'the separate-body definition is missing').toMatch(/separate (?:lay )?body/i);
    expect(t, 'the mixed-bench definition is missing').toMatch(
      /mixed (?:panel|bench)|sit(?:s|ting)? (?:on the bench )?with professional judges/i,
    );
    expect(t, 'the page does not warn that the names are not interchangeable').toMatch(
      /not interchangeable|is not the general word|not a jury|points in common with a jury/i,
    );
  });

  it('Japan is never presented as having a jury system', () => {
    for (const slug of WAVE_30) {
      const offenders = sentences(assertedText(guide(slug))).filter(
        (s) =>
          /japan[^.]{0,60}\bjury system\b/i.test(s) && !/points in common|not a jury/i.test(s),
      );
      expect(offenders, `${slug} gives Japan a jury system`).toEqual([]);
    }
  });

  it('the corpus-wide claim this wave makes about the word still holds in the dossiers', () => {
    /*
     * The Japan dossier says the saiban-in system is "not a jury". If a later edit removed that,
     * these pages would be drawing a distinction the corpus no longer draws anywhere else.
     */
    const japan = COUNTRY_DOSSIERS.find((d) => d.slug === 'japan');
    expect(japan, 'the Japan dossier has disappeared').toBeDefined();
    expect(JSON.stringify(japan)).toMatch(/not a jury|points in common with a jury/i);
  });
});

/* -------------------------------------------------------------------------- */
/* The unsourced number                                                       */
/* -------------------------------------------------------------------------- */

describe('no number appears that no source establishes', () => {
  it('no jury size is published anywhere in the cluster', () => {
    /*
     * Twelve is the number every reader expects and the one this wave cannot support: the section
     * of the Juries Act read here governs qualification, not size. This guard exists because the
     * failure mode is supplying it from general knowledge without noticing.
     */
    for (const slug of WAVE_30) {
      const offenders = sentences(allText(guide(slug))).filter(
        (s) =>
          /\b(?:twelve|fifteen|\d{1,2})\s+(?:jurors|members of a jury|people (?:sit )?on a jury)\b/i.test(
            s,
          ) || /\bjury of (?:twelve|fifteen|\d{1,2})\b/i.test(s),
      );
      expect(offenders, `${slug} publishes a jury size`).toEqual([]);
    }
  });

  it('the cluster says why the number is absent, rather than leaving a silent hole', () => {
    const t = allText(guide('how-a-lay-court-is-composed'));
    expect(t, 'the missing jury size is not acknowledged').toMatch(
      /jury size[^.]{0,80}NOT ESTABLISHED|no source stating a number|will not[^.]{0,60}how many people sit on a jury/i,
    );
  });

  it('every composition number that IS published is carried by a cited source', () => {
    const composed = guide('how-a-lay-court-is-composed');
    const cited = (composed.howItWorks ?? [])
      .filter(
        (b): b is Extract<Block, { kind: 'paragraph' }> =>
          b.kind === 'paragraph' && (b.sources ?? []).length > 0,
      )
      .map((b) => b.text)
      .join('\n');
    expect(cited).toMatch(/zwei Schöffen|two lay judges/i);
    expect(cited).toMatch(/three judges and six saiban-in/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Scope: advice, procedure, and the individual reader                        */
/* -------------------------------------------------------------------------- */

describe('the cluster gives no advice and describes no procedure', () => {
  it.each(WAVE_30)('%s tells no reader what to do about a summons', (slug) => {
    const ADVICE =
      /\b(?:if you (?:are|have been) (?:summoned|called|selected)|you (?:must|should|can) (?:attend|apply|ask to be excused|defer)|how to (?:be excused|defer)|your jury service|write to the court)\b/i;
    const offenders = sentences(assertedText(guide(slug))).filter((s) => ADVICE.test(s));
    expect(offenders, `${slug} advises a reader about their own service`).toEqual([]);
  });

  it.each(WAVE_30)('%s describes no deliberation or verdict rule', (slug) => {
    const PROCEDURE =
      /\b(?:majority verdict|unanimous verdict|hung jury|retire to consider|jury directions?|the foreman|voting threshold is|deliberation room)\b/i;
    const offenders = sentences(assertedText(guide(slug))).filter((s) => PROCEDURE.test(s));
    expect(offenders, `${slug} describes deliberation or verdict rules`).toEqual([]);
  });

  it.each(WAVE_30)('%s makes no claim about which arrangement performs better', (slug) => {
    const RANKS =
      /\b(?:more (?:accurate|reliable|just)|less (?:accurate|reliable|just)|better verdicts?|worse verdicts?|superior to|inferior to|the fairest)\b/i;
    const offenders = sentences(assertedText(guide(slug))).filter((s) => RANKS.test(s));
    expect(offenders, `${slug} ranks the arrangements`).toEqual([]);
  });

  it('the eligibility page does not describe disqualifications it never read', () => {
    const g = guide('who-may-serve-on-a-lay-court');
    expect((g.uncertainty ?? []).join('\n'), 'the unread Schedule is not recorded').toMatch(
      /Schedule that was NOT READ|disqualifications/i,
    );
    /*
     * DISCLOSURE-AWARE, and it had to become so on the first run. The page says "The
     * disqualifications are set out in a Schedule that was NOT READ", which is the disclosure this
     * guard exists to require — and a flat match reads it as the offence. This is the
     * prohibition-shaped case named in the previous wave: a guard asking whether a page ASSERTS
     * something must skip the sentence saying it does not.
     */
    const DISCLOSES = /\bNOT READ\b|not (?:read|researched|described)|were not\b/i;
    const offenders = sentences(assertedText(g)).filter(
      (s) =>
        /\b(?:disqualified (?:if|because|where)|the disqualifications are|a person is disqualified for)\b/i.test(
          s,
        ) && !DISCLOSES.test(s),
    );
    expect(offenders, 'the page describes disqualifications from an unread Schedule').toEqual(
      [],
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Sourcing and honesty about what could not be reached                       */
/* -------------------------------------------------------------------------- */

describe('sourcing', () => {
  it.each(WAVE_30)('%s attaches a source to every fact block', (slug) => {
    const g = guide(slug);
    for (const blocks of [
      g.definition,
      g.whyItExists,
      g.howItWorks,
      g.variation,
      g.rightsAndAccountability,
    ]) {
      for (const b of blocks ?? []) {
        if (b.kind === 'paragraph' && b.claim === 'fact') {
          expect(b.sources?.length, `a fact block in ${slug} cites nothing`).toBeGreaterThan(0);
        }
      }
    }
  });

  it.each(WAVE_30)('%s states what it could not establish', (slug) => {
    const g = guide(slug);
    expect(g.uncertainty?.length, `${slug} publishes no uncertainty`).toBeGreaterThanOrEqual(4);
    expect((g.uncertainty ?? []).join('\n')).toMatch(/NOT RESEARCHED|NOT ESTABLISHED|NOT READ/);
  });

  it('Austria is named as unreachable, and no Austrian provision is relied on', () => {
    /*
     * The Austria dossier says lay participation there is constitutionally required, so its
     * absence from this cluster needs explaining rather than passing unnoticed. RIS returned 503
     * across three paths this wave.
     */
    const anchor = guide('lay-participation-in-judging');
    expect(
      (anchor.uncertainty ?? []).join('\n'),
      'the Austrian access limitation is unrecorded',
    ).toMatch(/Austria[^.]{0,120}(?:503|could NOT be researched|access limitation)/i);
    for (const slug of WAVE_30) {
      expect(
        guide(slug).jurisdiction ?? [],
        `${slug} claims Austria without a source`,
      ).not.toContain('AT');
    }
  });

  it('the translated Japanese source is marked as a reference translation, not as law', () => {
    const s = getSource('jp-saiban-in-act');
    expect(s).toBeDefined();
    expect(s!.translationStatus).toBe('official-reference');
    expect(s!.authoritativeLanguage).toBe('ja');
    expect(s!.note, 'the database disclaimer is not recorded').toMatch(
      /Tentative translation|proofread/i,
    );
  });

  it('every new source is legislation or an official body', () => {
    for (const id of NEW_SOURCES) {
      const s = getSource(id);
      expect(s, `${id} missing`).toBeDefined();
      expect(['legislation', 'government']).toContain(s!.type);
    }
  });

  it('the German provisions are quoted in German, not paraphrased into English only', () => {
    /*
     * The equal-vote provision is the cluster's strongest fact and its force is in the wording.
     * A paraphrase would be citable but would lose "in vollem Umfang und mit gleichem Stimmrecht".
     */
    const t = allText(guide('what-a-lay-judge-decides'));
    expect(t).toMatch(/in vollem Umfang und mit gleichem Stimmrecht/);
  });

  it('no source anywhere in the registry lost its verification method', () => {
    const unverified = SOURCES.filter((s) => s.url && !s.verifiedOn).map((s) => s.id);
    expect(unverified).toEqual([]);
  });
});

describe('the cluster is joined to the corpus', () => {
  it('pages that predate this wave link into it', () => {
    const NEW_PATHS = WAVE_30.map((s) => guidePath(guide(s)));
    const older = ALL_GUIDES.filter((g) => !(WAVE_30 as readonly string[]).includes(g.slug))
      .map((g) => allText(g))
      .join('\n');
    for (const path of NEW_PATHS) {
      expect(older, `nothing that predates this wave links to ${path}`).toContain(path);
    }
  });
});
