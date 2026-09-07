import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PROFESSIONS } from '@/content/professions';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 32: police functions, described from named services.
 *
 * THREE RISKS, AND THE FIRST IS OWNERSHIP.
 *
 * Four pages already stand on this ground. `rank-role-and-specialisation` owns the four-way
 * distinction; `what-a-police-unit-is` owns the organisational form; `how-specialist-units-cover-a-country`
 * owns unit geography; `specialist-roles-in-policing` owns the enumeration of areas of work. This
 * wave adds named services and citations to a corpus that deliberately had neither — that page says
 * so itself — and it must not re-answer any of the four questions above.
 *
 * SECOND: FALSE EQUIVALENCE. A similarly named unit in two countries may sit in a different
 * institution, hold different powers and recruit differently. The brief asks for functional
 * analogues rather than translations, so a guard rejects any sentence equating a named unit or
 * role in one country with one in another.
 *
 * THIRD: EVERY SOURCE READ FOR THIS WAVE CONTAINS OPERATIONAL MATERIAL. The dog page describes
 * handling, the maritime page gives berths and staffing, the transport force describes response.
 * None of it is used, and the guards make that a rule rather than a choice made once.
 *
 * CONTRADICTION HARDENING, carried forward from Waves 29-31: a cited paragraph can be correct while
 * a summary, list or misconception says the opposite. Presence of the right fact is not enough, so
 * the categorical claims this wave depends on are checked across summary, body and list.
 */

const WAVE_32 = [
  'transport-and-railway-policing',
  'police-dog-sections',
  'neighbourhood-policing-as-a-function',
  'maritime-and-marine-policing',
  'police-search-and-rescue',
  'when-a-specialisation-is-a-later-assignment',
] as const;

const NEW_SOURCES = [
  'uk-btp-what-makes-us-different',
  'nz-police-dog-section',
  'nl-politie-wijkagent',
  'nz-police-maritime-units',
  'nz-police-search-and-rescue',
] as const;

/** The four pages whose questions this wave must leave alone. */
const PRIOR_OWNERS = [
  'rank-role-and-specialisation',
  'what-a-police-unit-is',
  'how-specialist-units-cover-a-country',
  'specialist-roles-in-policing',
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
/** Denials invert meaning: right for "does this page ASSERT X", wrong for "does it DISCUSS X". */
const DENIES =
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately|unused)\b/i;

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

/** Prose the platform asserts: the misconception being corrected is excluded. */
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

describe('the cluster exists and is routed', () => {
  it.each(WAVE_32)('%s is published, safety-cleared and routed', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('law-enforcement');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
    expect(g.factsVerifiedOn).toBeTruthy();
  });

  it('creates no new route family', () => {
    /*
     * The brief warns against /units and /specialisations "simply for neatness". These are
     * functions within policing and they live with the other law-enforcement pages.
     */
    for (const prefix of ['/units/', '/specialisations/', '/functions/', '/roles/']) {
      expect(
        PUBLIC_ROUTE_PATHS.filter((p) => p.startsWith(prefix)),
        `a ${prefix} route family was created`,
      ).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Taxonomy: the distinctions the corpus already depends on                    */
/* -------------------------------------------------------------------------- */

describe('the taxonomy is not collapsed', () => {
  const EQUATES = (a: string, b: string) =>
    new RegExp(`\\b${a}\\b[^.]{0,25}\\b(?:is|are|means?|:)\\s+(?:a |an |the )?\\b${b}\\b`, 'i');

  /*
   * Mutation M1 SURVIVED the first version of this block, and the reason is worth recording.
   *
   * The guards were scoped to this wave's six pages. M1 collapsed rank into role on
   * `rank-role-and-specialisation` — the page that OWNS the distinction — and nothing fired,
   * because that page was not in the set being checked. A wave-scoped guard on a corpus-wide
   * invariant protects the newest pages and leaves the load-bearing one exposed.
   */
  const TAXONOMY_SCOPE = [...WAVE_32, ...PRIOR_OWNERS, 'how-policing-careers-develop'] as const;

  it.each([
    ['rank', 'role'],
    ['role', 'profession'],
    ['unit', 'profession'],
    ['assignment', 'rank'],
    ['specialisation', 'promotion'],
  ])('no page equates %s with %s', (a, b) => {
    for (const slug of TAXONOMY_SCOPE) {
      const offenders = asserted(guide(slug)).filter((s) => EQUATES(a, b).test(s));
      expect(offenders, `${slug} equates ${a} with ${b}`).toEqual([]);
    }
  });

  it('detective is not presented as a universal rank', () => {
    for (const slug of WAVE_32) {
      const offenders = asserted(guide(slug)).filter((s) =>
        /\bdetective is (?:a|the) rank\b|\bdetective,? a rank\b|rank of detective in (?:all|every)/i.test(
          s,
        ),
      );
      expect(offenders, `${slug} makes detective a universal rank`).toEqual([]);
    }
  });

  it('dog handling is not presented as a profession or an entry route', () => {
    /*
     * The brief's K-9 caution. A dog section is a body and dog handling is an assignment reached by
     * serving officers; it is not one of the corpus's eight professions and not a way into policing.
     */
    const professionSlugs = PROFESSIONS.map((p) => p.slug);
    expect(professionSlugs).not.toContain('dog-handler');
    expect(professionSlugs).not.toContain('k9-handler');
    const t = allText(guide('police-dog-sections'));
    expect(t, 'the page does not state the handler precondition').toMatch(
      /five years policing experience/i,
    );
    const offenders = asserted(guide('police-dog-sections')).filter((s) =>
      /\bjoin the police as a dog handler\b|\bdog handling is a profession\b|\bapply directly to the dog\b/i.test(
        s,
      ),
    );
    expect(offenders, 'dog handling presented as an entry route or profession').toEqual([]);
  });

  it('a unit is never called a profession, and a function never called a unit', () => {
    for (const slug of WAVE_32) {
      const offenders = asserted(guide(slug)).filter((s) =>
        /\b(?:unit|section|squad) is a profession\b|\bprofession called a (?:unit|section)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${slug} collapses unit and profession`).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* False equivalence between countries                                        */
/* -------------------------------------------------------------------------- */

describe('named units and roles are not equated across countries', () => {
  const COUNTRIES =
    '(?:New Zealand|Dutch|Netherlands|British|England|Wales|Scotland|German|Germany|Japan|French|France)';

  it('no sentence declares a named body in one country the equivalent of one in another', () => {
    const EQUIV = new RegExp(
      `${COUNTRIES}[^.]{0,80}\\b(?:is|are)\\s+(?:the\\s+)?(?:equivalent|same as|identical to|counterpart)\\b`,
      'i',
    );
    for (const slug of WAVE_32) {
      const offenders = asserted(guide(slug)).filter((s) => EQUIV.test(s));
      expect(offenders, `${slug} equates bodies across countries`).toEqual([]);
    }
  });

  it('each page states that its findings do not generalise', () => {
    for (const slug of WAVE_32) {
      expect(
        (guide(slug).uncertainty ?? []).join('\n'),
        `${slug} does not limit itself to the systems researched`,
      ).toMatch(/NOT RESEARCHED|NOT ESTABLISHED/);
    }
  });

  it('the wave declares only jurisdictions its sources carry', () => {
    const jurisOf = (id: string) => getSource(id)?.jurisdiction;
    for (const slug of WAVE_32) {
      const g = guide(slug);
      const covered = new Set(g.sources.map(jurisOf).filter(Boolean) as string[]);
      for (const code of g.jurisdiction ?? []) {
        expect(covered, `${slug} declares ${code} with no source carrying it`).toContain(code);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Safety: no tactical, deployment or operational detail                      */
/* -------------------------------------------------------------------------- */

describe('nothing operational survives from sources that contain it', () => {
  it.each(WAVE_32)('%s describes no deployment, handling or tactic', (slug) => {
    const TACTICAL =
      /\b(?:deploy(?:ed|ment|s)? to|how (?:a|the) dog is (?:worked|handled|deployed)|handling technique|tracking technique|search pattern|boarding|interception|pursuit|formation of officers|entry team|takedown|apprehension technique)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => TACTICAL.test(s));
    expect(offenders, `${slug} contains operational detail`).toEqual([]);
  });

  it('no berth, base address or unit establishment is published', () => {
    /*
     * The maritime source gives both. Neither is reproduced: precise siting is operational, and one
     * unit's establishment does not describe the function.
     */
    const t = allText(guide('maritime-and-marine-policing'));
    expect(t, 'a berth or building is named').not.toMatch(
      /Mechanics Bay|Waterloo Quay|Old Ferry Building|Marine Rescue Centre/i,
    );
    expect(t, 'unit staffing establishment is reproduced').not.toMatch(
      /\b(?:a senior sergeant|10 constables|ten constables)\b/i,
    );
    expect(
      (guide('maritime-and-marine-policing').uncertainty ?? []).join('\n'),
      'the omission is not recorded',
    ).toMatch(/berth|staffing composition/i);
  });

  it('the dog page claims no capability', () => {
    const offenders = asserted(guide('police-dog-sections')).filter((s) =>
      /\b(?:a dog can|dogs can|capable of detecting|able to track|accuracy of)\b/i.test(s),
    );
    expect(offenders, 'a capability claim is made about a dog').toEqual([]);
  });

  it('no page drifts into procedural law', () => {
    const PROC =
      /\b(?:step \d|you (?:must|should) (?:file|apply|appeal)|grounds of appeal|burden of proof|admissibility|warrant application)\b/i;
    for (const slug of WAVE_32) {
      const offenders = asserted(guide(slug)).filter((s) => PROC.test(s));
      expect(offenders, `${slug} drifts into procedure`).toEqual([]);
    }
  });

  it('the search and rescue page is not written for someone in difficulty', () => {
    const g = guide('police-search-and-rescue');
    expect(allText(g), 'the page does not redirect an emergency reader').toMatch(
      /local emergency services/i,
    );
    const offenders = asserted(g).filter((s) =>
      /\bif you are (?:lost|missing|in difficulty)\b|\bwhat to do if\b|\byou should call\b/i.test(
        s,
      ),
    );
    expect(offenders, 'the page instructs a reader in difficulty').toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Contradiction hardening                                                    */
/* -------------------------------------------------------------------------- */

describe('summary, body and list agree with the cited fact', () => {
  it('the dog page keeps patrol teams as the majority everywhere it says so', () => {
    /*
     * The categorical claim this page turns on. A mutation that flips it in the summary or the list
     * while leaving the cited paragraph intact is the Wave 29/30 defect class, so every part that
     * mentions the proportion is checked, not the union.
     */
    const g = guide('police-dog-sections');
    const parts: [string, string][] = [
      ['summary', g.summary],
      ['howItWorks', blockText(g.howItWorks)],
      ['variation', blockText(g.variation)],
      ['misconceptions', g.misconceptions.map((m) => m.reality).join('\n')],
    ];
    for (const [where, text] of parts) {
      for (const s of sentences(text)) {
        if (
          /\b(?:90|ninety)\b/i.test(s) &&
          /\b(?:detector|detection)\b/i.test(s) &&
          !/\bpatrol\b/i.test(s)
        ) {
          throw new Error(
            `${where} attributes the ninety per cent to detection: ${s.slice(0, 120)}`,
          );
        }
      }
    }
    expect(g.summary + blockText(g.howItWorks)).toMatch(
      /patrol[^.]{0,80}(?:90|ninety) percent|(?:90|ninety) percent of capability/i,
    );
  });

  it('the later-assignment finding is not contradicted anywhere on its page', () => {
    const g = guide('when-a-specialisation-is-a-later-assignment');
    const everywhere = [
      g.summary,
      blockText(g.howItWorks),
      blockText(g.variation),
      g.misconceptions.map((m) => m.reality).join('\n'),
    ].join('\n');
    const offenders = sentences(everywhere).filter(
      /*
       * Mutation M4 SURVIVED the first version, which matched "dog handler" but not "dog handling".
       * The mutation wrote "Dog handling is an entry route you can apply directly to" into the
       * summary list while the cited paragraph above still carried the five-year precondition — the
       * contradiction class again, defeated by one missing inflection.
       */
      (s) =>
        /\bdog\s+(?:handler|handling|section|unit)\b/i.test(s) &&
        /\b(?:entry route|join directly|apply directly|straight into|joined directly)\b/i.test(
          s,
        ) &&
        !DENIES.test(s),
    );
    expect(offenders, 'the page asserts dog handling is an entry route').toEqual([]);
  });

  it('the Dutch tension is preserved, not resolved', () => {
    /*
     * Two official statements point different ways and the wave does not choose between them. A
     * page that quietly reconciled them would be asserting something no source establishes.
     */
    for (const slug of [
      'neighbourhood-policing-as-a-function',
      'when-a-specialisation-is-a-later-assignment',
    ]) {
      const g = guide(slug);
      expect((g.uncertainty ?? []).join('\n'), `${slug} does not record the tension`).toMatch(
        /NOT ESTABLISHED|not resolved|does not reconcile/i,
      );
      const offenders = asserted(g).filter((s) =>
        /\bthe (?:bachelor|degree|programme)[^.]{0,60}\b(?:leads directly|places (?:a person|graduates) in|means you become)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${slug} resolves the tension without evidence`).toEqual([]);
    }
  });

  it('search and rescue is coordination in every part of its page', () => {
    const g = guide('police-search-and-rescue');
    const parts = [
      g.summary,
      blockText(g.howItWorks),
      blockText(g.variation),
      g.misconceptions.map((m) => m.reality).join('\n'),
    ];
    for (const text of parts) {
      const offenders = sentences(text).filter(
        (s) =>
          /\bpolice\b/i.test(s) &&
          /\b(?:conduct|carry out|perform) (?:all|every) (?:search|searches)\b/i.test(s),
      );
      expect(offenders, 'a part of the page makes police the executor of all searches').toEqual(
        [],
      );
    }
    expect(g.summary + blockText(g.howItWorks)).toMatch(/coordinat/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Ownership, sourcing, linkage, characters                                   */
/* -------------------------------------------------------------------------- */

describe('a taxonomy collapse stated as a belief is actually corrected', () => {
  /*
   * Mutation M16 SURVIVED by rewriting a misconception CLAIM into "The maritime unit is a
   * profession you can join", leaving beside it a `reality` that answers a different question.
   * Every guard passed, because `assertedText` deliberately excludes claims — a claim is a belief
   * being corrected, not something the platform asserts. That exclusion is right, and it left a
   * hole: a claim nobody corrects is a false statement printed under a heading promising an answer.
   *
   * FIRST ATTEMPT, RECORDED BECAUSE IT WAS WRONG. The guard originally required a claim and its
   * reality to share content words. Measured against the corpus, 20 of 30 existing pairs share
   * none — because a good correction reframes rather than echoes. "Most police dogs are detection
   * dogs" is answered by "patrol teams make up ninety per cent of the capability", which is exactly
   * right and has no vocabulary in common. That guard was measuring prose style, not coherence,
   * and lowering its threshold until it passed would have made it vacuous.
   *
   * What M16 actually did was smuggle a taxonomy collapse into the one field the taxonomy guards
   * do not read. So the invariant is narrow and real: if a claim states one of the equations this
   * corpus depends on being false, the reality beside it has to deny it.
   */
  const EQUATIONS: [string, string][] = [
    ['unit', 'profession'],
    ['rank', 'role'],
    ['role', 'profession'],
    ['assignment', 'rank'],
  ];
  const DENIAL = /\b(?:not|never|no|neither|nor|rather than|is a body|different)\b/i;

  it.each(WAVE_32)('%s corrects any taxonomy collapse it states as a belief', (slug) => {
    const uncorrected: string[] = [];
    for (const m of guide(slug).misconceptions) {
      for (const [a, b] of EQUATIONS) {
        const states = new RegExp(
          `\\b${a}\\b[^.]{0,25}\\b(?:is|are)\\s+(?:a |an |the )?\\b${b}\\b`,
          'i',
        );
        if (states.test(m.claim) && !DENIAL.test(m.reality)) {
          uncorrected.push(`${m.claim.slice(0, 80)} (${a}/${b})`);
        }
      }
    }
    expect(uncorrected, `${slug} states a taxonomy collapse its reality does not deny`).toEqual(
      [],
    );
  });
});

describe('the wave does not re-answer what four pages already own', () => {
  it.each(PRIOR_OWNERS)('%s still exists and keeps its question', (slug) => {
    expect(getGuide(slug), `${slug} has disappeared`).toBeDefined();
  });

  it('no new page re-enumerates the ten areas of specialist work', () => {
    const AREAS = [
      'investigation',
      'community policing',
      'roads and traffic',
      'public order',
      'cybercrime',
      'intelligence',
      'forensic support',
      'specialist operational',
      'training, supervision',
      'public information',
    ];
    for (const slug of WAVE_32) {
      const low = allText(guide(slug)).toLowerCase();
      const hit = AREAS.filter((a) => low.includes(a));
      expect(
        hit.length,
        `${slug} re-enumerates the specialisation list: ${hit}`,
      ).toBeLessThanOrEqual(2);
    }
  });

  it('no new page redefines what a unit is', () => {
    const DEFINES_UNIT = /\ba unit is (?:an? )?(?:organisational|body|team|container)\b/i;
    for (const slug of WAVE_32) {
      const offenders = asserted(guide(slug)).filter((s) => DEFINES_UNIT.test(s));
      expect(offenders, `${slug} redefines what a unit is`).toEqual([]);
    }
  });

  it('no two pages in this wave ask the same question', () => {
    const qs = WAVE_32.map((s) => guide(s).question.toLowerCase());
    expect(new Set(qs).size).toBe(qs.length);
  });
});

describe('sourcing and linkage', () => {
  it.each(WAVE_32)('%s attaches a source to every fact block', (slug) => {
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

  it('every new source is an official body', () => {
    for (const id of NEW_SOURCES) {
      const s = getSource(id);
      expect(s, `${id} missing`).toBeDefined();
      expect(['government', 'legislation']).toContain(s!.type);
      expect(s!.verificationMethod, `${id} is not content-confirmed`).toBe('content-confirmed');
    }
  });

  it('no source anywhere is hosted on a commerce, teaching or membership site', () => {
    const BAD =
      /\b(?:shop|store|buy|amazon|ebay|courses?|tutor|coaching|academy|bootcamp|association|membership)\b/i;
    const offenders = SOURCES.filter((s) => {
      if (!s.url) return false;
      try {
        return BAD.test(new URL(s.url).hostname);
      } catch {
        return true;
      }
    }).map((s) => `${s.id} -> ${s.url}`);
    expect(offenders).toEqual([]);
  });

  it('pages that predate this wave link into it', () => {
    const NEW_PATHS = WAVE_32.map((s) => guidePath(guide(s)));
    const older = ALL_GUIDES.filter((g) => !(WAVE_32 as readonly string[]).includes(g.slug))
      .map((g) => allText(g))
      .join('\n');
    for (const path of NEW_PATHS) {
      expect(older, `nothing that predates this wave links to ${path}`).toContain(path);
    }
  });

  it('the cluster is character-clean', () => {
    /*
     * The corpus-wide invariant covers this too. Asserted here as well because this wave authored
     * German, Dutch and Māori-adjacent place names, which is exactly where the Wave 29 fault landed.
     */
    for (const slug of WAVE_32) {
      const bad = [...allText(guide(slug))].filter(
        (c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f,
      );
      expect(bad, `${slug} contains C1 control characters`).toEqual([]);
    }
  });
});
