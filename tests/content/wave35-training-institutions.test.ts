import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { INSTITUTION_TYPES } from '@/content/institutions';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 35: training institutions, as institutions rather than as courses.
 *
 * THE RISK HERE IS DIRECTORY INTEGRITY, AND IT APPLIES EVEN THOUGH NO DIRECTORY WAS BUILT.
 *
 * Two named institutions are described. The moment a corpus names real organisations, a set of
 * failures becomes available that the rest of the site never faced: a fake or unverified body, a
 * historical one presented as operating, an invented acceptance rate or tuition figure, an implied
 * ranking, a claimed relationship between an institution and a recruiting body that no source
 * establishes. Each of those is guarded below, and the guards are written to keep working if a
 * later wave does build the entity family.
 *
 * NO RANKING, PERMANENTLY. The brief allows an evidence-based ranking only under an explicitly
 * approved methodology that does not exist. Until it does, comparing named institutions for quality
 * is not a scoping decision that a later wave may revisit casually — it is closed.
 *
 * THE ARCHITECTURE DECISION IS TESTED, NOT ONLY DOCUMENTED. `/institutions` is a type taxonomy with
 * no field for an official website or an operating status, and this wave deliberately did not
 * corrupt it to store named organisations. A guard asserts it is still a taxonomy.
 */

const WAVE_35 = [
  'what-a-police-training-institution-is-in-law',
  'most-police-training-is-not-recruit-training',
] as const;

const NEW_SOURCES = [
  'nl-politieacademie-organisatiestructuur',
  'no-politihogskolen-om-oss',
] as const;

/** The named institutions this wave describes. Any addition must be verified the same way. */
const NAMED_INSTITUTIONS = [
  {
    name: 'Politieacademie',
    jurisdiction: 'NL',
    source: 'nl-politieacademie-organisatiestructuur',
  },
  { name: 'Politihøgskolen', jurisdiction: 'NO', source: 'no-politihogskolen-om-oss' },
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

const sentences = (t: string): string[] => t.split(/(?<=[.!?])\s+|\n+/);
const DENIES =
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately|without|outside)\b/i;

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
const asserted = (g: Guide): string[] =>
  sentences(assertedText(g)).filter((s) => !DENIES.test(s));

describe('the cluster exists and the architecture decision holds', () => {
  it.each(WAVE_35)('%s is published, safety-cleared and routed', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
    expect(g.factsVerifiedOn).toBeTruthy();
  });

  it('no academies, directory or ranking route family was created', () => {
    for (const prefix of ['/academies', '/training-institutions', '/directory', '/colleges']) {
      expect(
        PUBLIC_ROUTE_PATHS.filter((p) => p === prefix || p.startsWith(`${prefix}/`)),
        `a ${prefix} route family was created`,
      ).toEqual([]);
    }
  });

  it('/institutions is still a type taxonomy, not a directory of named bodies', () => {
    /*
     * The decision this wave took was NOT to store named organisations in a registry built for
     * kinds of body. If a later wave adds an official website or an operating status to
     * InstitutionType, that decision has been silently reversed and this is where it shows.
     */
    for (const t of INSTITUTION_TYPES) {
      const record = t as unknown as Record<string, unknown>;
      for (const field of [
        'officialWebsite',
        'officialUrl',
        'website',
        'operator',
        'operatingStatus',
      ]) {
        expect(
          record[field],
          `InstitutionType.${t.slug} has acquired ${field}`,
        ).toBeUndefined();
      }
      /* A type slug names a category, never an organisation. */
      expect(t.slug, `${t.slug} looks like a named organisation`).not.toMatch(
        /politieacademie|politihogskolen|garda-college|police-college-of/i,
      );
    }
  });

  it('the architecture decision is recorded with the threshold that would reverse it', () => {
    const doc = join(process.cwd(), 'docs/research/training-institution-architecture.md');
    expect(existsSync(doc), 'the architecture decision is undocumented').toBe(true);
    const body = readFileSync(doc, 'utf8');
    expect(body, 'no build threshold is stated').toMatch(/12 or more institutions/i);
    expect(body, 'the status model is not specified').toMatch(/status-not-established/);
  });
});

/* -------------------------------------------------------------------------- */
/* Directory integrity, applied to named institutions                        */
/* -------------------------------------------------------------------------- */

describe('every named institution is real, current and sourced', () => {
  it.each(NAMED_INSTITUTIONS)(
    '$name is carried by a content-confirmed official source',
    (inst) => {
      const s = getSource(inst.source);
      expect(s, `${inst.source} missing`).toBeDefined();
      expect(s!.type).toBe('government');
      expect(s!.verificationMethod, `${inst.source} is not content-confirmed`).toBe(
        'content-confirmed',
      );
      expect(s!.jurisdiction).toBe(inst.jurisdiction);
      expect(s!.url, `${inst.source} has no official URL`).toMatch(/^https:\/\//);
      expect(s!.verifiedOn, `${inst.source} has no verification date`).toBeTruthy();
    },
  );

  it('no institution is named that no source establishes', () => {
    /*
     * The fake-institution guard. Any organisation named on these pages must appear in a source
     * note, which is what stops a plausible-sounding academy being invented to fill a comparison.
     */
    const registry = SOURCES.map(
      (s) => `${s.title ?? ''} ${s.publisher ?? ''} ${s.note ?? ''}`,
    ).join('\n');
    const INSTITUTION_LIKE =
      /\b(?:[A-ZÅØÆ][\wåøæé]+(?:\s+[A-ZÅØÆ][\wåøæé]+)*\s+(?:Police College|Police Academy|Police University College|Politieacademie|Politihøgskolen))\b/g;
    const unsourced: string[] = [];
    for (const slug of WAVE_35) {
      for (const m of allText(guide(slug)).matchAll(INSTITUTION_LIKE)) {
        const name = m[0].trim();
        if (!registry.includes(name)) unsourced.push(`${slug}: ${name}`);
      }
    }
    expect(unsourced, 'an institution is named that no source establishes').toEqual([]);
  });

  it('no historical institution is presented as operating', () => {
    /*
     * Statens politiskole is named as an origin dated 1920. It must never read as a body that
     * currently trains anyone.
     */
    const g = guide('most-police-training-is-not-recruit-training');
    const offenders = asserted(g).filter(
      (s) =>
        /Statens politiskole/i.test(s) &&
        /\b(?:trains|operates|runs|currently|today|provides)\b/i.test(s),
    );
    expect(offenders, 'a historical institution is presented as operating').toEqual([]);
    expect(allText(g), 'the origin is not dated').toMatch(/1920/);
  });

  it('an old and a new name are not treated as two institutions', () => {
    const t = allText(guide('most-police-training-is-not-recruit-training'));
    expect(t, 'the relationship between the names is not stated as origin').toMatch(
      /traces its origins|origins to 1920/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* No ranking, no fabricated directory data                                  */
/* -------------------------------------------------------------------------- */

describe('nothing ranks, rates or fabricates', () => {
  it.each(WAVE_35)('%s publishes no ranking, rating or recommendation', (slug) => {
    const RANKING =
      /\b(?:best (?:police )?(?:academy|college|school)|top \d+|leading (?:academy|institution)|world-class|highly rated|ranked|our pick|we recommend)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => RANKING.test(s));
    expect(offenders, `${slug} ranks or rates an institution`).toEqual([]);
  });

  it.each(WAVE_35)('%s publishes no tuition, acceptance rate or outcome figure', (slug) => {
    const FABRICABLE =
      /\b(?:tuition|acceptance rate|admission rate|graduation rate|employment rate|job guarantee|placement rate|[£$€]\s?\d|% of (?:applicants|graduates))\b/i;
    const offenders = asserted(guide(slug)).filter((s) => FABRICABLE.test(s));
    expect(offenders, `${slug} publishes a figure of the kind directories invent`).toEqual([]);
  });

  it.each(WAVE_35)('%s makes no quality comparison between institutions', (slug) => {
    const COMPARES =
      /\b(?:better than|worse than|stronger than|more rigorous than|the best|superior to|inferior to)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => COMPARES.test(s));
    expect(offenders, `${slug} compares institutions for quality`).toEqual([]);
  });

  it('no degree-awarding claim is made beyond what a source states', () => {
    /*
     * The Norwegian page names bachelor and master programmes but does not describe itself as a
     * høgskole in that self-description. Turning a name into a university-status claim is exactly
     * the inference the brief forbids.
     */
    const g = guide('most-police-training-is-not-recruit-training');
    const offenders = asserted(g).filter((s) =>
      /\b(?:is a university|university status|accredited university|awards degrees|degree-awarding)\b/i.test(
        s,
      ),
    );
    expect(offenders, 'a university or degree-awarding status is asserted').toEqual([]);
    expect((g.uncertainty ?? []).join('\n'), 'the status limit is not recorded').toMatch(
      /høgskole|degree-awarding|university-status/i,
    );
  });

  it('the commercial strategy stays internal', () => {
    const CLASSIFICATION =
      /\bPAID VISIBILITY|sponsored profile|B2B model|commercial potential|affiliate\b/i;
    const leaked: string[] = [];
    for (const g of ALL_GUIDES) {
      for (const s of sentences(allText(g))) if (CLASSIFICATION.test(s)) leaked.push(g.slug);
    }
    expect(leaked, 'internal commercial strategy vocabulary appears in content').toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Ownership, scope, linkage, characters                                     */
/* -------------------------------------------------------------------------- */

describe('the findings are not reversible, and figures are not inventable', () => {
  it('the both-at-once finding is not contradicted in any part of its page', () => {
    /*
     * Mutation M8 SURVIVED. The wave's central finding — that an institution can be part of the
     * police AND a legally independent body — was reversed in a definition list item while the
     * cited paragraph above still carried it. This is the Wave 29/30 contradiction class again,
     * and the page most worth protecting from it was unguarded.
     *
     * Checked per part rather than over the union, because a union search cannot see one part
     * disagreeing with another.
     */
    const g = guide('what-a-police-training-institution-is-in-law');
    const parts: [string, string][] = [
      ['summary', g.summary],
      ['definition', blockText(g.definition)],
      ['howItWorks', blockText(g.howItWorks)],
      ['variation', blockText(g.variation)],
      ['misconceptions', g.misconceptions.map((m) => m.reality).join('\n')],
    ];
    const REVERSES =
      /\b(?:simply a department|merely a department|no separate standing|not independent|has no autonomy|wholly (?:inside|within) the police)\b/i;
    for (const [where, text] of parts) {
      const offenders = sentences(text).filter((x) => REVERSES.test(x));
      expect(offenders, `${where} reverses the both-at-once finding`).toEqual([]);
    }
    expect(g.summary + blockText(g.howItWorks)).toMatch(
      /zelfstandig bestuursorgaan|independent/i,
    );
  });

  it('no legal consequence is inferred from the zbo label', () => {
    /*
     * Mutation M9 SURVIVED. The page's own uncertainty says what the form entails in
     * administrative law was NOT ESTABLISHED, and the statute was not read — but nothing stopped
     * the body asserting a consequence anyway. Recording a limit does not enforce it.
     */
    const g = guide('what-a-police-training-institution-is-in-law');
    const INFERRED =
      /\bzbo\b[^.]{0,80}\b(?:means|entails|implies|cannot be|may not be|is protected from|guarantees)\b/i;
    /*
     * Disclaimer-aware. The page says "The page glosses what zbo means for this body" and "what the
     * zbo form entails in law" was not researched. Both are the limit being STATED; a flat match
     * read them as the limit being broken.
     */
    const DISCLAIMS =
      /\b(?:glosses|not researched|NOT ESTABLISHED|was not read|beyond that label)\b/i;
    const offenders = sentences(assertedText(g)).filter(
      (x) => INFERRED.test(x) && !DISCLAIMS.test(x),
    );
    expect(offenders, 'a legal consequence is inferred from the zbo label').toEqual([]);
  });

  it('no figure appears in prose that a cited source does not carry', () => {
    /*
     * Mutation M15 SURVIVED by changing 5,190 students to 50,190 and adding "the largest police
     * academy in the world". Neither a fabricated figure nor a superlative was caught: the ranking
     * pattern did not know "largest ... in the world", and nothing checked numbers against sources.
     *
     * Directory data is the easiest thing in this corpus to invent convincingly, so every number a
     * page states must appear in a note of a source that page cites.
     */
    for (const slug of WAVE_35) {
      const g = guide(slug);
      const notes = g.sources.map((id) => getSource(id)?.note ?? '').join('\n');
      const figures = new Set<string>();
      for (const b of [
        ...(g.howItWorks ?? []),
        ...(g.variation ?? []),
        ...(g.definition ?? []),
      ]) {
        const text =
          b.kind === 'paragraph' ? b.text : b.kind === 'list' ? b.items.join(' ') : '';
        for (const m of text.matchAll(/\b(\d[\d,]{2,})\b/g)) figures.add(m[1]!);
      }
      const untraced = [...figures].filter((f) => !notes.includes(f));
      expect(untraced, `${slug} states a figure no cited source carries`).toEqual([]);
    }
  });

  it('no superlative or universal claim is made about any institution', () => {
    /*
     * The superlative has to be applied to an INSTITUTION, not to a proportion inside one. The
     * first version flagged "the largest category of students" and "the largest part of its work",
     * which are this wave's central finding about one institution's own distribution — the opposite
     * of a comparison between institutions.
     */
    /*
     * The institution word must be the superlative's HEAD NOUN, not merely nearby. A 40-character
     * window still flagged "the largest category of students in the institution researched here",
     * which is an internal proportion and this wave's central finding. "Largest police academy" is
     * the offence; "largest category ... in the institution" is not.
     */
    const INSTITUTION_SUPERLATIVE =
      /\b(?:largest|biggest|oldest|best|most prestigious|leading)\s+(?:\w+\s+){0,2}(?:academy|college|institution|school|university)\b|\b(?:academy|college|institution|school)\b[^.]{0,30}\b(?:in the world|in Europe|of any country|anywhere)\b/i;
    const UNIVERSAL = /\bin every country\b|\ball countries (?:have|do)\b/i;
    /*
     * Scope includes the pages this wave depends on, not only its own. Mutation M12 put "delivers
     * initial training in every country" onto `what-a-police-academy-is` — the page that OWNS the
     * question — and survived, because the guard iterated the new pages alone. That is the Wave 32
     * lesson repeating: a corpus-relevant invariant guarded only on the newest pages protects the
     * least load-bearing ones and leaves the owner exposed.
     */
    const SCOPE = [
      ...WAVE_35,
      'what-a-police-academy-is',
      'police-training-and-police-education',
    ];
    for (const slug of SCOPE) {
      const offenders = asserted(guide(slug)).filter(
        (x) => INSTITUTION_SUPERLATIVE.test(x) || UNIVERSAL.test(x),
      );
      expect(
        offenders,
        `${slug} makes a superlative or universal claim about an institution`,
      ).toEqual([]);
    }
  });
});

describe('ownership and sourcing', () => {
  it('what-a-police-academy-is still exists and keeps its question', () => {
    const g = getGuide('what-a-police-academy-is');
    expect(g, 'the Wave 24 academy page has disappeared').toBeDefined();
    expect(g!.question).toMatch(/what is a police academy/i);
  });

  it('no new page re-answers what a police academy is', () => {
    /*
     * Mutation M12 SURVIVED the first version, which required the exact phrase "delivers initial
     * POLICE training". The mutation wrote "delivers initial training in every country" and slipped
     * past one missing word — the same one-inflection failure Wave 32 hit.
     */
    const OWNED =
      /\b(?:a police academy is an institution that delivers|delivers initial (?:police )?training|the word "academy" does not travel|does every country have one)\b/i;
    const routes = /\]\(\/law-enforcement\/what-a-police-academy-is\)/;
    for (const slug of WAVE_35) {
      const offenders = asserted(guide(slug)).filter((s) => OWNED.test(s) && !routes.test(s));
      expect(offenders, `${slug} re-answers the Wave 24 question`).toEqual([]);
    }
  });

  it.each(WAVE_35)('%s attaches a source to every fact block', (slug) => {
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

  it('declared jurisdictions are carried by the sources cited', () => {
    for (const slug of WAVE_35) {
      const g = guide(slug);
      const covered = new Set(
        g.sources.map((id) => getSource(id)?.jurisdiction).filter(Boolean),
      );
      for (const code of g.jurisdiction ?? []) {
        expect(covered, `${slug} declares ${code} with no source carrying it`).toContain(code);
      }
    }
  });

  it('no recruitment relationship is claimed that a source does not establish', () => {
    const RELATION =
      /\b(?:trains (?:all|every) (?:recruit|officer)s? for|is the (?:sole|only) (?:route|entry) into|graduates? (?:are|is) automatically)\b/i;
    for (const slug of WAVE_35) {
      const offenders = asserted(guide(slug)).filter((s) => RELATION.test(s));
      expect(offenders, `${slug} infers an institutional relationship`).toEqual([]);
    }
  });

  it('pages that predate this wave link into it', () => {
    const NEW_PATHS = WAVE_35.map((s) => guidePath(guide(s)));
    const older = ALL_GUIDES.filter((g) => !(WAVE_35 as readonly string[]).includes(g.slug))
      .map((g) => allText(g))
      .join('\n');
    for (const path of NEW_PATHS) {
      expect(older, `nothing that predates this wave links to ${path}`).toContain(path);
    }
  });

  it('the cluster is character-clean, including its Nordic and Dutch names', () => {
    for (const slug of WAVE_35) {
      const bad = [...allText(guide(slug))].filter(
        (c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f,
      );
      expect(bad, `${slug} contains C1 control characters`).toEqual([]);
    }
    expect(allText(guide('most-police-training-is-not-recruit-training'))).toContain(
      'Politihøgskolen',
    );
  });
});
