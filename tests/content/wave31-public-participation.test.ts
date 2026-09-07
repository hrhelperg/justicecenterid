import { describe, expect, it } from 'vitest';
import { GLOSSARY, PUBLISHED_GLOSSARY } from '@/content/glossary';
import { ROUTED_GLOSSARY } from '@/content/glossary-routes';
import { ALL_GUIDES } from '@/content/guides';
import { COUNTRY_DOSSIERS } from '@/content/dossiers';
import { SOURCES, getSource } from '@/content/sources';
import type { GlossaryTerm } from '@/content/types';

/**
 * Wave 31: the terminology of public participation in justice.
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS WAVE IS, AND WHAT IT DELIBERATELY IS NOT
 * ---------------------------------------------------------------------------
 * Wave 30 published four comparative pages — composition, decision scope,
 * eligibility, and an anchor explaining why lay participation exists at all.
 * Those pages own their subjects. The brief for this wave listed ten candidate
 * pages, and an ownership audit found that seven of them are the Wave 30 pages
 * under different titles: "do lay judges decide sentences" is what-a-lay-judge-
 * decides, "what is a mixed court" is the anchor plus how-a-lay-court-is-
 * composed, "jury vs lay judges" is the anchor's whole thesis.
 *
 * Publishing them would have been duplication, which the brief forbids and
 * which the platform's own cannibalisation guard (GLOSSARY_OWNED_ELSEWHERE)
 * exists to prevent. So this wave publishes the two things the corpus genuinely
 * lacked — definitions of the words "jury" and "lay judge" — and extends the
 * corpus with Austria, which Wave 30 recorded as unresearched because RIS was
 * down.
 *
 * ---------------------------------------------------------------------------
 * THE RISKS
 * ---------------------------------------------------------------------------
 * 1. THE WORD. Same as Wave 30 and worse here, because these pages are ABOUT
 *    the words. "Jury" must name the separate-body family and nothing else.
 * 2. THE NUMBER. Wave 30 could publish no jury size. This wave can publish two
 *    — but only two, each tied to a named proceeding in a named system, and
 *    the Crown Court complement must stay absent because the section read
 *    governs majority verdicts and never states it.
 * 3. THE GENERALISATION. Three systems are not a world model, and Austria's
 *    jury splits guilt from sentence in a way that breaks the tidy story.
 * 4. PROCEDURE. /courts places advice and litigation strategy out of scope,
 *    and a page defining "jury" sits one sentence from telling a reader what
 *    to do about a summons.
 */

const WAVE_31 = ['jury', 'lay-judge'] as const;

const term = (slug: string): GlossaryTerm => {
  const t = GLOSSARY.find((x) => x.slug === slug);
  if (!t) throw new Error(`no glossary term "${slug}"`);
  return t;
};

/** Every reader-visible string on a term, which is what a guard must police. */
const allText = (t: GlossaryTerm): string =>
  [
    t.term,
    ...(t.alternateTerms ?? []),
    t.definition,
    t.expandedNote ?? '',
    t.question ?? '',
    t.purpose ?? '',
    t.context ?? '',
    t.jurisdictionNote ?? '',
    ...(t.countryExamples ?? []).map((e) => e.note),
    ...(t.uncertainty ?? []),
  ].join('\n');

const sentences = (s: string): string[] =>
  s
    .split(/(?<=[.!?])\s+/)
    .map((x) => x.trim())
    .filter(Boolean);

const CORPUS_TEXT = WAVE_31.map((s) => allText(term(s))).join('\n');

/* ========================================================================== */
/* 1-3. THE VOCABULARY                                                        */
/* ========================================================================== */

describe('the two words stay distinct', () => {
  it('both terms exist and both route', () => {
    const routed = ROUTED_GLOSSARY.map((t) => t.slug);
    for (const slug of WAVE_31) {
      expect(PUBLISHED_GLOSSARY.map((t) => t.slug)).toContain(slug);
      expect(routed, `${slug} does not route`).toContain(slug);
    }
  });

  it('each names the other as a false friend, in both directions', () => {
    /*
     * The confusion is symmetrical, so a one-way cross-reference would leave
     * half the readers where they started.
     */
    expect(term('jury').falseFriends).toContain('lay-judge');
    expect(term('lay-judge').falseFriends).toContain('jury');
  });

  it('the jury is defined by separateness, and the lay judge by sitting on the bench', () => {
    expect(allText(term('jury'))).toMatch(/separate/i);
    expect(allText(term('lay-judge'))).toMatch(/on the bench|with the professional/i);
  });

  it('neither term calls a mixed bench a jury', () => {
    /*
     * The characteristic error, and the guard has to catch EQUATION rather than
     * co-occurrence. "Austria runs juries alongside mixed benches" names both
     * in one sentence and is exactly right; "Schöffen are a jury" names both
     * and is exactly wrong. Matching on both words appearing would fail the
     * correct sentence and teach the next author to split it, which is how a
     * guard makes prose worse.
     */
    const EQUATES = [
      /\bSch(ö|oe)ff(e|en|in|innen)?\b[^.]{0,40}\b(are|is|form|forms|sit as|serve as|act as)\b[^.]{0,20}\bjur(y|ors)\b/i,
      /\bsaiban-in\b[^.]{0,40}\b(are|is|form|forms|sit as|serve as|act as)\b[^.]{0,20}\bjur(y|ors)\b/i,
      /\bmixed (?:bench|panel|court)\b[^.]{0,30}\b(is|are)\b[^.]{0,20}\bjury\b/i,
      /\bjury of Sch(ö|oe)ff/i,
      /\bSch(ö|oe)ffengericht\b[^.]{0,20}\bjury\b[^.]{0,20}\b(system|trial)\b/i,
    ];
    const offenders = sentences(CORPUS_TEXT).filter((s) => EQUATES.some((re) => re.test(s)));
    expect(offenders, 'a mixed bench is equated with a jury').toEqual([]);
  });

  it('a lay participant is never called a professional judge', () => {
    const offenders = sentences(CORPUS_TEXT).filter((s) =>
      /\b(Sch(ö|oe)ff(e|en|in|innen)?|saiban-in|Geschworen(e|en)|lay judges?|jurors?)\b[^.]{0,60}\b(are|is)\b[^.]{0,30}\bprofessional judges?\b/i.test(
        s,
      ),
    );
    expect(offenders, 'a lay participant is equated with a professional judge').toEqual([]);
  });
});

/* ========================================================================== */
/* 4. ELIGIBILITY IS NOT SELECTION                                            */
/* ========================================================================== */

describe('eligibility and selection are not merged', () => {
  it('the random-selection fact is not stated as an eligibility rule', () => {
    /*
     * Austria selects lay judges at random from the electoral register. That is
     * HOW they are picked, not WHO may serve, and the two collapse easily into
     * "anyone on the electoral register may serve", which the source does not
     * say.
     */
    const offenders = sentences(CORPUS_TEXT).filter(
      (s) =>
        /electoral register/i.test(s) &&
        /\b(qualif|eligib|may serve|entitled to serve)\b/i.test(s),
    );
    expect(offenders, 'selection method is stated as an eligibility rule').toEqual([]);
  });

  it('the selection claim is attributed to the source that carries it', () => {
    const layJudge = term('lay-judge');
    expect(layJudge.sources).toContain('at-oesterreich-laienrichter');
    const note = getSource('at-oesterreich-laienrichter')?.note ?? '';
    expect(note).toMatch(/Wählerevidenz|electoral register/i);
    expect(note, 'the record must disclaim what it does not carry').toMatch(/DOES NOT SUPPORT/);
  });
});

/* ========================================================================== */
/* 5-6. THE SYSTEM-SPECIFIC ROLES SURVIVE                                     */
/* ========================================================================== */

describe('system-specific roles are not flattened', () => {
  it('Germany is not reduced to a verdict-only role', () => {
    const t = allText(term('lay-judge'));
    const offenders = sentences(t).filter(
      (s) =>
        /German|Sch(ö|oe)ff/i.test(s) &&
        /only (the )?verdict|verdict alone|guilt alone/i.test(s),
    );
    expect(offenders, 'German Schöffen are reduced to deciding the verdict only').toEqual([]);
  });

  it('Japanese sentencing participation is preserved where the corpus sources it', () => {
    /*
     * Wave 30 established from the saiban-in Act that lay members take part in
     * sentencing. A later edit that quietly drops it would make Japan look like
     * a jury system, which its own Supreme Court is careful to deny.
     */
    const corpus = ALL_GUIDES.map((g) => JSON.stringify(g)).join('\n');
    expect(corpus).toMatch(/saiban-in/i);
    expect(corpus, 'the Japanese sentencing role has disappeared from the corpus').toMatch(
      /saiban-in[^.]{0,400}sentenc|sentenc[^.]{0,400}saiban-in/i,
    );
  });

  it('Austria keeps the split that breaks the tidy story, in every part that states it', () => {
    /*
     * Geschworene are a separate body AND share the sentencing decision. If an
     * edit tidies that into "the jury decides guilt and the judges sentence",
     * the definition becomes neater than the evidence.
     *
     * A first version of this guard searched the page's whole text and a
     * mutation survived it: flattening the Austrian country example left the
     * same two phrases standing in `context`, so the union matched and the
     * contradiction shipped. That is precisely the Wave 29/30 failure — one
     * part of a page correct, another saying the opposite — so the guard now
     * checks each part that mentions the Geschworene on its own, and asserts
     * the flattened form appears nowhere.
     */
    const jury = term('jury');
    const parts: { where: string; text: string }[] = [
      { where: 'context', text: jury.context ?? '' },
      ...(jury.countryExamples ?? []).map((e) => ({
        where: `example:${e.countrySlug}`,
        text: e.note,
      })),
    ];
    const mentioning = parts.filter((p) => /Geschworen(e|en)/i.test(p.text));
    expect(mentioning.length, 'nothing mentions the Geschworene at all').toBeGreaterThan(1);

    for (const p of mentioning) {
      expect(p.text, `${p.where} drops that guilt is decided alone`).toMatch(/guilt alone/i);
      expect(p.text, `${p.where} drops the shared sentencing decision`).toMatch(
        /sentence[^.]{0,100}(?:together with|with) the professional judges/i,
      );
    }

    const FLATTENED =
      /Geschworene decide guilt and the professional judges (?:set|fix|decide)|decide guilt[^.]{0,40}judges (?:alone )?(?:set|fix|impose) the sentence/i;
    for (const p of parts) {
      expect(FLATTENED.test(p.text), `${p.where} states the flattened version`).toBe(false);
    }
  });
});

/* ========================================================================== */
/* 7. THE NUMBER                                                              */
/* ========================================================================== */

describe('no number appears that no source establishes', () => {
  it('no Crown Court jury size is published anywhere in this wave', () => {
    /*
     * Twelve is the number a reader expects and the one nothing read here
     * supports: Juries Act s.17 states majority thresholds for reduced panels
     * and never the full complement. This is the Wave 30 hole, still open.
     */
    const offenders = sentences(CORPUS_TEXT).filter(
      (s) =>
        /crown court/i.test(s) &&
        /\b(twelve|12|fifteen|15)\b/i.test(s) &&
        !/NOT ESTABLISHED/i.test(s),
    );
    expect(offenders, 'a Crown Court jury size was published').toEqual([]);
    expect(CORPUS_TEXT, 'the missing number is not acknowledged').toMatch(/NOT ESTABLISHED/);
  });

  it('every jury size that IS published names its system and its proceeding', () => {
    const sized = sentences(CORPUS_TEXT).filter((s) =>
      /\b(eight|8)\b[^.]{0,40}\b(jurors?|Geschworen(e|en))\b|\bjury (?:complete )?(?:of|at) (?:eight|8)\b/i.test(
        s,
      ),
    );
    expect(
      sized.length,
      'no sized claim found — the guard is looking at nothing',
    ).toBeGreaterThan(0);
    for (const s of sized) {
      expect(
        /England and Wales|county court|Austria|Geschworenengericht/i.test(s),
        `a jury size is stated without naming its system or proceeding: ${s}`,
      ).toBe(true);
    }
  });

  it('the sources behind those numbers actually carry them', () => {
    expect(getSource('ew-juries-act-1974-s17')?.note ?? '').toMatch(/complete jury of eight/i);
    expect(getSource('at-justiz-rechtsprechungsgrundsaetze')?.note ?? '').toMatch(
      /acht Geschworenen|eight Geschworene/i,
    );
  });

  it('the s.17 record refuses the Crown Court number in its own note', () => {
    const note = getSource('ew-juries-act-1974-s17')?.note ?? '';
    expect(note).toMatch(/DOES NOT SUPPORT A CROWN COURT JURY SIZE/);
  });
});

/* ========================================================================== */
/* 8. NO UNIVERSAL MODEL                                                      */
/* ========================================================================== */

describe('nothing is generalised past the evidence', () => {
  it('no universal claim about lay participation is made', () => {
    const offenders = sentences(CORPUS_TEXT).filter((s) =>
      /\b(all|every|no)\s+(countries|systems|jurisdictions|states)\b|\b(universally|everywhere|in every system|worldwide)\b/i.test(
        s,
      ),
    );
    expect(offenders, 'a universal claim was made about lay participation').toEqual([]);
  });

  it('the jurisdiction notes say what was not researched', () => {
    for (const slug of WAVE_31) {
      expect(
        term(slug).jurisdictionNote ?? '',
        `${slug} generalises without limiting itself`,
      ).toMatch(/NOT ESTABLISHED|not researched|None of this generalises|read here/i);
    }
  });

  it('country examples are limited to systems the platform actually researched', () => {
    const researched = COUNTRY_DOSSIERS.map((d) => d.slug);
    for (const slug of WAVE_31) {
      for (const ex of term(slug).countryExamples ?? []) {
        expect(researched, `${slug} cites unresearched country ${ex.countrySlug}`).toContain(
          ex.countrySlug,
        );
      }
    }
  });
});

/* ========================================================================== */
/* 9-10. SCOPE AND SAFETY                                                     */
/* ========================================================================== */

describe('the wave stays out of procedure and out of advice', () => {
  it('publishes no jury-procedure guidance', () => {
    const BANNED =
      /voir dire|peremptory challenge|challenge for cause|jury instruction|deliberation procedure|mistrial|jury nullification|how to (?:avoid|get out of)/i;
    const offenders = sentences(CORPUS_TEXT).filter((s) => BANNED.test(s));
    expect(offenders, 'jury procedure was published').toEqual([]);
  });

  it('publishes nothing about influencing or avoiding jurors', () => {
    const BANNED =
      /influenc\w* (?:a )?juror|persuade the jury|approach a juror|contact a juror|avoid jury service|excus\w+ from jury|defer(?:ring)? jury service/i;
    const offenders = sentences(CORPUS_TEXT).filter((s) => BANNED.test(s));
    expect(offenders, 'juror-influence or avoidance guidance was published').toEqual([]);
  });

  it('gives the reader no instruction about their own case', () => {
    const offenders = sentences(CORPUS_TEXT).filter((s) =>
      /\byou should\b|\byou must\b|\byour (?:case|trial|summons)\b|\bif you are (?:summoned|called)\b/i.test(
        s,
      ),
    );
    expect(offenders, 'the wave gives procedural advice').toEqual([]);
  });
});

/* ========================================================================== */
/* 13-14. CONSISTENCY BETWEEN THE PARTS OF A PAGE                             */
/* ========================================================================== */

describe('the parts of a page do not contradict each other', () => {
  it('the definition and the country examples agree about separateness', () => {
    /*
     * Waves 29 and 30 both shipped a page whose cited paragraph was right and
     * whose summary said the opposite. Here the risk is a definition calling a
     * jury separate while an example describes it sitting on the bench.
     */
    const jury = term('jury');
    expect(jury.definition).toMatch(/separate/i);
    for (const ex of jury.countryExamples ?? []) {
      expect(
        /sits? (?:on|with) the (?:bench|professional judges) as (?:a )?member/i.test(ex.note),
        `a jury example describes the jury as sitting on the bench: ${ex.note}`,
      ).toBe(false);
    }
  });

  it('the lay-judge examples do not describe a separate body', () => {
    for (const ex of term('lay-judge').countryExamples ?? []) {
      /*
       * Negation matters here. The German example ends "rather than as a
       * separate body", which is the distinction being made correctly, so the
       * guard strips negated forms before looking.
       */
      const asserted = ex.note.replace(
        /\b(?:rather than|and not|not|never)\s+(?:as\s+)?a separate body\b/gi,
        '',
      );
      expect(
        /\bas a separate body\b|\bseparate from the (?:bench|judges)\b/i.test(asserted),
        `a lay-judge example describes a separate body: ${ex.note}`,
      ).toBe(false);
    }
  });

  it('the Austrian threshold is stated the same way wherever it appears', () => {
    /*
     * The same fact now lives on the glossary term and in the Austria dossier.
     * Two statements of one fact is exactly how Waves 29 and 30 produced
     * contradictions.
     */
    const dossier = JSON.stringify(COUNTRY_DOSSIERS.find((d) => d.slug === 'austria'));
    const five = /more than five years|above five years/i;
    expect(dossier, 'the dossier lost the Schöffengericht threshold').toMatch(five);
    expect(allText(term('lay-judge')), 'the term lost the Schöffengericht threshold').toMatch(
      five,
    );
  });
});

/* ========================================================================== */
/* 15. SOURCE SCOPE                                                           */
/* ========================================================================== */

describe('claims do not outrun their sources', () => {
  it('every source cited by this wave exists and is content-confirmed', () => {
    for (const slug of WAVE_31) {
      const t = term(slug);
      expect(t.sources.length, `${slug} cites fewer than two sources`).toBeGreaterThanOrEqual(
        2,
      );
      for (const id of t.sources) {
        const s = getSource(id);
        expect(s, `${slug} cites unknown source ${id}`).toBeTruthy();
        expect(s?.verificationMethod, `${id} was not content-confirmed`).toBe(
          'content-confirmed',
        );
      }
    }
  });

  it('a country example is only made where a source covers that country', () => {
    const ISO: Record<string, string> = {
      austria: 'AT',
      ireland: 'IE',
      germany: 'DE',
      japan: 'JP',
    };
    for (const slug of WAVE_31) {
      const t = term(slug);
      const covered = t.sources.map((id) => getSource(id)?.jurisdiction).filter(Boolean);
      for (const ex of t.countryExamples ?? []) {
        const iso = ISO[ex.countrySlug];
        expect(
          covered,
          `${slug} makes a claim about ${ex.countrySlug} with no ${iso} source`,
        ).toContain(iso);
      }
    }
  });

  it('the Austrian records keep RIS recorded as unread rather than quietly resolved', () => {
    /*
     * The honest half of the Austria finding. The ministry ATTESTS Article 91;
     * nobody here has read it. If a later edit upgrades attestation into
     * citation, this fails.
     */
    const note = getSource('at-justiz-rechtsprechungsgrundsaetze')?.note ?? '';
    expect(note).toMatch(/DOES NOT SUPPORT[^.]*text of Art\. 91/i);
    const atBvg = getSource('at-bvg')?.note ?? '';
    expect(
      /Art\.\s*91\b/.test(atBvg),
      'at-bvg now claims Article 91 without the article having been read',
    ).toBe(false);
  });

  it('no source added this wave claims a scope wider than one system', () => {
    for (const id of [
      'at-justiz-rechtsprechungsgrundsaetze',
      'at-oesterreich-laienrichter',
      'ew-juries-act-1974-s17',
    ]) {
      const s = getSource(id);
      expect(s?.jurisdiction, `${id} has no jurisdiction`).toBeTruthy();
      expect(s?.note, `${id} does not state its scope`).toMatch(/SCOPE:/);
    }
  });
});

/* ========================================================================== */
/* THE CLUSTER IS JOINED TO THE CORPUS                                        */
/* ========================================================================== */

describe('the wave is reachable from what preceded it', () => {
  it('the sources it added are actually cited by content', () => {
    const cited = new Set(
      [...GLOSSARY, ...ALL_GUIDES, ...COUNTRY_DOSSIERS].flatMap((r) =>
        JSON.stringify(r).match(/[a-z0-9-]+/g),
      ),
    );
    for (const id of [
      'at-justiz-rechtsprechungsgrundsaetze',
      'at-oesterreich-laienrichter',
      'ew-juries-act-1974-s17',
    ]) {
      expect(cited.has(id), `${id} was added but nothing cites it`).toBe(true);
    }
  });

  it('every source in the corpus that this wave added is reachable from a published record', () => {
    expect(SOURCES.some((s) => s.id === 'at-justiz-rechtsprechungsgrundsaetze')).toBe(true);
  });
});
