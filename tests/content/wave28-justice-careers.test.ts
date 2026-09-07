import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PROFESSIONS } from '@/content/professions';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 28: how the justice professions are entered.
 *
 * THE COMMERCIAL BOUNDARY IS THE HARD ONE, and it is harder here than in any previous wave.
 * Police recruitment has no surrounding market to speak of. Legal qualification has a large one —
 * preparation courses, conversion courses, tutoring, application coaching, "which route is right
 * for you" quizzes. Every page in this wave sits one sentence away from becoming a lead magnet
 * for it. The rule is therefore absolute rather than balanced: no provider is named, no route is
 * recommended, and no published fee, salary, pupillage award or trainee wage is reproduced, even
 * though every regulator publishes them and reproducing them would be trivially accurate.
 *
 * CANNIBALISATION runs in two directions here, which is new.
 *
 *   Upward, against the profession records. Those carry `trainingRouteShape` — deliberately
 *   country-free, and the defence-lawyer record says so in terms: "qualification routes were not
 *   researched for any country ... trainingRouteShape is structural only and names no country".
 *   These guides are the country-specific answer. A guide that stopped naming systems would be
 *   restating the record above it.
 *
 *   Sideways, against /defence/who-may-act-as-a-lawyer, whose scope callout says it "does not
 *   describe qualification routes". That page owns who is permitted to act. This wave owns how a
 *   person comes to be permitted. The guards below hold both lines.
 *
 * NEGATIVE FINDINGS. Two sources support a claim by not making one: the prison service publishes
 * no academic requirement, and the prosecution service publishes no qualification threshold. An
 * absence is reportable as an absence and never as a positive finding, and the difference is
 * exactly where this kind of page goes wrong.
 */

const WAVE_28 = [
  'how-you-become-a-judge',
  'judges-and-prosecutors-one-career-or-two',
  'what-qualifying-as-a-lawyer-requires',
  'the-supervised-stage-in-legal-qualification',
  'entering-prison-work-as-a-career',
] as const;

const WAVE_28_SOURCES = [
  'fr-enm-concours-professionnel',
  'fr-lajusticerecrute-magistrat',
  'fr-ordonnance-58-1270-statut-magistrature',
  'ew-jac-check-eligible',
  'ew-jac-selection-process',
  'ew-sra-sqe-qualifying',
  'ew-bsb-becoming-a-barrister',
  'ew-hmpps-prison-officer-apply',
  'ew-cps-prosecutor-role',
  'ew-cps-legal-trainee-scheme',
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

/** Everything a reader sees on the page, misconceptions included. */
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

/** Prose the platform asserts in its own voice — excludes the misconception being corrected. */
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

/** A sentence that DENIES doing something is the opposite of doing it. Used by several guards. */
const DENIES = /\b(?:no|not|never|nothing|none|neither|nor)\b/i;
const sentences = (text: string): string[] => text.split(/(?<=[.!?])\s+|\n+/);

describe('the cluster exists and is routed', () => {
  it.each(WAVE_28)('%s is published and routed', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('is spread across four sections rather than piled into one', () => {
    const sections = new Set(WAVE_28.map((s) => guide(s).section));
    expect(sections).toEqual(new Set(['courts', 'prosecution', 'defence', 'corrections']));
  });

  it.each(WAVE_28)('%s records when its facts were verified', (slug) => {
    expect(guide(slug).factsVerifiedOn).toBeTruthy();
  });
});

/* -------------------------------------------------------------------------- */
/* The commercial boundary                                                    */
/* -------------------------------------------------------------------------- */

describe('nothing in this wave sells anything', () => {
  /*
   * Named providers. The list is of kinds of thing, not of companies: the failure mode is naming
   * ANY specific provider, so the guard looks for the shapes a provider name arrives in.
   */
  const PROVIDER =
    /\b(?:university of|college of law|law school|academy|bootcamp|prep course|preparation course|tutoring|coaching|masterclass|revision course|course provider|training provider)\b/i;

  /*
   * Denial-aware, and it had to become so on the first run: these pages say "no preparation
   * course, tutoring service or provider is named" in their own scope and uncertainty text, and a
   * flat match flagged the disclaimer as the offence. The same correction was needed in each of
   * the two preceding waves, which is why it is written once here and applied per sentence — a
   * sentence that DENIES naming a provider is the opposite of the thing being guarded against.
   */

  it.each(WAVE_28)('%s names no course, provider or preparation service', (slug) => {
    const hits = sentences(allText(guide(slug)))
      .filter((sentence) => PROVIDER.test(sentence) && !DENIES.test(sentence))
      .map((sentence) => sentence.trim().slice(0, 120));
    expect(hits, `${slug} names a provider or course`).toEqual([]);
  });

  /*
   * Money. Every regulator here publishes fees, and the ENM and Bar publish pay and minimum
   * awards. Reproducing any of it would be accurate and would also turn an institutional page
   * into a comparison of what routes cost and pay. The wave reproduces none of it.
   */
  const MONEY =
    /(?:[£$€]\s?\d|\b\d[\d,.]*\s?(?:€|£|\$|EUR|GBP|USD)\b|\bper annum\b|\bsalary of\b|\bpaid\s+[£$€]|\bcosts?\s+[£$€])/i;

  it.each(WAVE_28)('%s reproduces no fee, salary or award figure', (slug) => {
    const hits = allText(guide(slug)).match(MONEY) ?? [];
    expect(hits, `${slug} reproduces a money figure`).toEqual([]);
  });

  it.each(WAVE_28)('%s recommends no route and gives no personal advice', (slug) => {
    const ADVICE =
      /\b(?:we recommend|our advice|you should (?:apply|choose|consider|take)|the best route|your best|right for you|which route is right|is the easier route|we suggest)\b/i;
    const hits = assertedText(guide(slug)).match(ADVICE) ?? [];
    expect(hits, `${slug} gives careers advice`).toEqual([]);
  });

  it.each(WAVE_28)('%s describes no application step the reader could follow', (slug) => {
    const HOWTO =
      /\b(?:to apply,|you (?:must|should|need to) (?:apply|submit|register|enrol|sign up)|click|visit the (?:website|portal)|application form|apply (?:here|now|online)|deadline for applications)\b/i;
    const hits = assertedText(guide(slug)).match(HOWTO) ?? [];
    expect(hits, `${slug} describes an application step`).toEqual([]);
  });

  it('every source is a regulator, court service, ministry or public body', () => {
    for (const id of WAVE_28_SOURCES) {
      const s = getSource(id);
      expect(s, `${id} missing`).toBeDefined();
      expect(['government', 'legislation'], `${id} is not an official source type`).toContain(
        s!.type,
      );
    }
  });

  /*
   * The corpus-wide host guard added in the previous wave catches retailers. It does not catch a
   * course provider, which is this wave's equivalent risk: a source repointed at a preparation
   * company would pass every existing check.
   */
  it('NO source anywhere in the registry is hosted on a training or coaching site', () => {
    const TEACHING_HOST =
      /\b(?:courses?|tutor|tutoring|coaching|academy|bootcamp|revision|prep)\b/i;
    const offenders = SOURCES.filter((src) => {
      if (!src.url) return false;
      let host: string;
      try {
        host = new URL(src.url).hostname;
      } catch {
        return true;
      }
      return TEACHING_HOST.test(host);
    }).map((src) => `${src.id} -> ${src.url}`);
    expect(offenders).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Cannibalisation, in both directions                                        */
/* -------------------------------------------------------------------------- */

describe('this wave does not restate what the corpus already owns', () => {
  it('every guide names at least one system, which is what the profession records do not do', () => {
    for (const slug of WAVE_28) {
      const g = guide(slug);
      expect(g.jurisdiction, `${slug} declares no jurisdiction`).toBeTruthy();
      expect(g.jurisdiction!.length, `${slug} names no country`).toBeGreaterThan(0);
      expect(g.jurisdiction, `${slug} is scoped INT like a profession record`).not.toContain(
        'INT',
      );
    }
  });

  it('the profession records still name no country in their training route shape', () => {
    /*
     * The boundary only holds while the record above stays country-free. If a later edit adds a
     * country to a trainingRouteShape, the record and these guides start answering the same
     * question and this test is the thing that notices.
     */
    const COUNTRY =
      /\b(?:France|French|England|Wales|Germany|German|Japan|Brazil|Netherlands|Dutch|ENM|SQE|pupillage)\b/i;
    for (const p of PROFESSIONS) {
      const shape =
        (p as unknown as { trainingRouteShape?: string[] }).trainingRouteShape ?? [];
      for (const line of shape) {
        expect(
          COUNTRY.test(line),
          `${p.slug} trainingRouteShape now names a system: ${line}`,
        ).toBe(false);
      }
    }
  });

  it('no guide re-answers who may act as a lawyer', () => {
    /*
     * That page owns the reserved-activity question from primary statutory text. This wave may
     * link to it and must not restate it.
     */
    const RESERVED =
      /\b(?:reserved (?:legal )?activit|protected title|rights of audience|conduct of litigation|reserved to those inscribed|monopoly on)\b/i;
    for (const slug of WAVE_28) {
      const hits = assertedText(guide(slug)).match(RESERVED) ?? [];
      expect(hits, `${slug} restates the reserved-activity question`).toEqual([]);
    }
  });

  it('no guide re-answers police recruitment, which two earlier waves own', () => {
    const POLICE_ENTRY =
      /\b(?:police (?:recruit|constable|officer) (?:entry|requirement|selection)|join the police|police academy entry|policing degree)\b/i;
    for (const slug of WAVE_28) {
      const hits = assertedText(guide(slug)).match(POLICE_ENTRY) ?? [];
      expect(hits, `${slug} drifts into police recruitment`).toEqual([]);
    }
  });

  it('the judicial and lawyer pages cross-link rather than duplicating each other', () => {
    expect(allText(guide('how-you-become-a-judge'))).toContain(
      '/prosecution/judges-and-prosecutors-one-career-or-two',
    );
    expect(allText(guide('what-qualifying-as-a-lawyer-requires'))).toContain(
      '/defence/who-may-act-as-a-lawyer',
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Accuracy traps specific to this material                                   */
/* -------------------------------------------------------------------------- */

describe('the numbers are not merged, softened or generalised', () => {
  it('the two French training durations are kept apart', () => {
    /*
     * 31 months belongs to the initial route and 12 months to the mid-career one. Presenting
     * either as "the training a French judge receives" is wrong about the other, and the two
     * numbers sit close enough together in the material to be merged by accident.
     */
    const t = allText(guide('how-you-become-a-judge'));
    expect(t).toMatch(/31 months/);
    expect(t).toMatch(/12 months/);
    expect(
      t,
      'the page does not warn that the two durations belong to different routes',
    ).toMatch(/must not be merged|different (?:routes|entries)|belong to different/i);
  });

  it('the any-subject degree finding is not softened into "usually a law degree"', () => {
    const t = allText(guide('what-qualifying-as-a-lawyer-requires'));
    expect(t).toMatch(/can be in any subject/i);
    expect(t, 'the finding has been softened').not.toMatch(
      /usually (?:a|requires a) law degree|normally a law degree/i,
    );
  });

  it('the published "usually" on each half of pupillage is preserved', () => {
    const t = allText(guide('the-supervised-stage-in-legal-qualification'));
    expect(t).toMatch(/usually of six months/);
  });

  it.each(WAVE_28)('%s never generalises two systems into a universal rule', (slug) => {
    const UNIVERSAL =
      /\b(?:in (?:all|every) (?:country|system|jurisdiction)|universally required|every country requires|all systems require|worldwide, )/i;
    const hits = assertedText(guide(slug)).match(UNIVERSAL) ?? [];
    expect(hits, `${slug} generalises`).toEqual([]);
  });
});

describe('a negative finding is reported as an absence, never as a positive claim', () => {
  it('the prison page says the criteria state none, not that qualifications do not matter', () => {
    const g = guide('entering-prison-work-as-a-career');
    const t = allText(g);
    expect(t).toMatch(
      /no (?:published )?academic (?:qualification )?(?:requirement|threshold)/i,
    );
    /*
     * Also denial-aware. The uncertainty list says in terms that this is "NOT a finding that
     * qualifications are irrelevant", which a flat match reads as the very claim it forbids. The
     * check is therefore for an ASSERTED version of the claim rather than any occurrence of it.
     */
    const assertsIrrelevance = sentences(t).some(
      (sentence) =>
        /qualifications (?:are|do not) (?:irrelevant|not matter|not needed)\b/i.test(
          sentence,
        ) && !/\b(?:not a finding|never|is not|does not mean|rather than)\b/i.test(sentence),
    );
    expect(assertsIrrelevance, 'absence has been turned into a positive claim').toBe(false);
    expect(
      (g.uncertainty ?? []).join('\n'),
      'the uncertainty list does not record how the absence is to be read',
    ).toMatch(/NOT a finding that qualifications are irrelevant|absence/i);
  });

  it('the prosecution page does not invent a threshold its source declines to state', () => {
    const g = guide('judges-and-prosecutors-one-career-or-two');
    expect(allText(g)).toMatch(
      /states no qualification threshold|sets out no qualification|no qualification threshold/i,
    );
    expect(
      (g.uncertainty ?? []).join('\n'),
      'the missing threshold is not recorded as uncertainty',
    ).toMatch(/NO qualification threshold|states NO/i);
  });

  it('the campaign-specific scheme is not presented as an open opportunity', () => {
    const t = allText(guide('judges-and-prosecutors-one-career-or-two'));
    expect(t).toMatch(/applications were closed|campaign-specific/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Sourcing and scope                                                         */
/* -------------------------------------------------------------------------- */

describe('every claim of fact is carried by a source', () => {
  it.each(WAVE_28)('%s attaches a source to every fact block', (slug) => {
    const g = guide(slug);
    const sections: (readonly Block[] | undefined)[] = [
      g.definition,
      g.whyItExists,
      g.howItWorks,
      g.variation,
      g.rightsAndAccountability,
    ];
    for (const blocks of sections) {
      for (const b of blocks ?? []) {
        if (b.kind === 'paragraph' && b.claim === 'fact') {
          expect(b.sources?.length, `a fact block in ${slug} cites nothing`).toBeGreaterThan(0);
        }
      }
    }
  });

  it.each(WAVE_28)('%s states its own limits', (slug) => {
    const g = guide(slug);
    expect(g.uncertainty?.length, `${slug} publishes no uncertainty`).toBeGreaterThanOrEqual(3);
    expect(
      (g.uncertainty ?? []).join('\n'),
      `${slug} does not say what was not researched`,
    ).toMatch(/NOT RESEARCHED|NOT ESTABLISHED|were not researched/);
  });

  it.each(WAVE_28)(
    '%s carries a scope callout that disclaims affiliation or advice',
    (slug) => {
      const t = allText(guide(slug));
      expect(t, `${slug} does not disclaim`).toMatch(
        /not (?:careers )?advice|not affiliated|accepts no applications|is not a recruitment page|not a route into/i,
      );
    },
  );

  it('the wave rests on two systems and says so', () => {
    for (const slug of WAVE_28) {
      const g = guide(slug);
      for (const code of g.jurisdiction ?? []) {
        expect(['FR', 'GB'], `${slug} claims a system this wave did not research`).toContain(
          code,
        );
      }
    }
  });
});

describe('procedural drift', () => {
  it.each(WAVE_28)('%s does not slide into procedure or legal advice', (slug) => {
    const PROC =
      /\b(?:step \d|first,? (?:file|submit)|you (?:must|should) (?:file|appeal|serve)|grounds of appeal|burden of proof|admissibility)\b/i;
    const hits = assertedText(guide(slug)).match(PROC) ?? [];
    expect(hits, `${slug} drifts into procedure`).toEqual([]);
  });

  it('the whole corpus still refuses to give individual legal advice on these pages', () => {
    for (const slug of WAVE_28) {
      const t = assertedText(guide(slug));
      expect(t, `${slug} addresses the reader's own situation`).not.toMatch(
        /\byour (?:case|application|eligibility|situation)\b/i,
      );
    }
  });
});

describe('the cluster is joined to the corpus', () => {
  it('pages that predate this wave link into it', () => {
    const NEW_PATHS = WAVE_28.map((s) => guidePath(guide(s)));
    const olderText = ALL_GUIDES.filter((g) => !(WAVE_28 as readonly string[]).includes(g.slug))
      .map((g) => allText(g))
      .join('\n');
    for (const path of NEW_PATHS) {
      expect(olderText, `nothing that predates this wave links to ${path}`).toContain(path);
    }
  });
});
