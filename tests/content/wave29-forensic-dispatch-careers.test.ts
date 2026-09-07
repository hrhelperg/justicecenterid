import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PROFESSIONS } from '@/content/professions';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 29: completing the professions arc — forensic science and emergency call handling.
 *
 * THE ARC CLAIM. Every profession record now has a sourced entry route somewhere in the corpus.
 * That is a claim worth testing rather than asserting in a document, because it is the kind of
 * thing that silently stops being true when a profession is added later. One test below fails if
 * a new profession appears without one.
 *
 * THE COMPARATIVE CLAIM, which is what makes this a wave rather than two pages: competence
 * guarantees attach in three different places across the professions this corpus has researched.
 * To the person, by admission (lawyers, judges). To the unit and the activity, with personnel
 * assessed inside it (forensic science). To the employing service, which trains the person itself
 * (emergency call handling). The forensic pages are the ones carrying that idea, so they are
 * guarded against collapsing back into "forensic scientists are licensed like lawyers".
 *
 * CANNIBALISATION, and it is close here. /forensics/who-regulates-forensic-science already owns
 * the regulator, the code's legal status and what follows a breach. Its own uncertainty says
 * accreditation standards "were not researched and are not described" — which is the gap this
 * wave fills — but the line between "what accreditation covers" and "what happens when the code
 * is breached" is one sentence wide. The guards hold it.
 *
 * SECTION LIMITS bind harder in this wave than in any before it, because both target sections are
 * safety-sensitive and both declare relevant things out of scope: /forensics excludes laboratory
 * protocols and method detail, /public-safety excludes emergency instructions of any kind and the
 * operational procedures of any public-safety body.
 */

const FORENSIC = [
  'what-forensic-accreditation-requires',
  'how-forensic-competence-is-established',
] as const;
const DISPATCH = [
  'entering-emergency-call-handling',
  'taking-the-call-and-sending-the-unit',
] as const;
const WAVE_29 = [...FORENSIC, ...DISPATCH] as const;

const NEW_SOURCES = [
  'uk-fsr-code-of-practice-v2',
  'nz-police-comms-roles',
  'nz-police-communications-centres',
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

const sections = (text: string): string[] => text.split(/(?<=[.!?])\s+|\n+/);
/** A sentence that DENIES doing something is the opposite of doing it. */
const DENIES =
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately|outside)\b/i;

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

/** Sentences the platform asserts, with denials stripped out. */
const asserted = (g: Guide): string[] =>
  sections(assertedText(g)).filter((s) => !DENIES.test(s));

describe('the cluster exists and is routed', () => {
  it.each(WAVE_29)('%s is published, safety-cleared and routed', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    /* Both sections are safety-sensitive, so this is mandatory rather than conventional. */
    expect(g.safetyReview).toBe('cleared');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
    expect(g.factsVerifiedOn).toBeTruthy();
  });

  it('lands two guides in each of the two thinnest sections', () => {
    expect(FORENSIC.map((s) => guide(s).section)).toEqual(['forensics', 'forensics']);
    expect(DISPATCH.map((s) => guide(s).section)).toEqual(['public-safety', 'public-safety']);
  });
});

/* -------------------------------------------------------------------------- */
/* The arc claim                                                              */
/* -------------------------------------------------------------------------- */

describe('every profession record now has a sourced entry route', () => {
  /*
   * The pairing is stated here rather than derived, because there is no field linking a profession
   * to the guide that describes its entry. Stating it makes the claim checkable and makes a new
   * profession without an entry route fail loudly instead of quietly widening the gap again.
   */
  const ENTRY_ROUTE: Record<string, string> = {
    'patrol-officer': 'how-police-selection-is-structured',
    detective: 'specialist-roles-in-policing',
    prosecutor: 'judges-and-prosecutors-one-career-or-two',
    judge: 'how-you-become-a-judge',
    'defence-lawyer': 'what-qualifying-as-a-lawyer-requires',
    'corrections-officer': 'entering-prison-work-as-a-career',
    'forensic-scientist': 'how-forensic-competence-is-established',
    'emergency-dispatcher': 'entering-emergency-call-handling',
  };

  it('the arc is complete — no profession is left without one', () => {
    const uncovered = PROFESSIONS.map((p) => p.slug).filter((slug) => !ENTRY_ROUTE[slug]);
    expect(uncovered, 'a profession has no entry route recorded in this map').toEqual([]);
  });

  it.each(Object.entries(ENTRY_ROUTE))(
    '%s → %s exists and is published',
    (_profession, slug) => {
      const g = getGuide(slug);
      expect(g, `${slug} does not exist`).toBeDefined();
      expect(g!.status).toBe('published');
    },
  );

  it('each entry-route guide names at least one system, unlike the record above it', () => {
    for (const slug of Object.values(ENTRY_ROUTE)) {
      const g = guide(slug);
      expect(g.jurisdiction, `${slug} declares no jurisdiction`).toBeTruthy();
      expect(g.jurisdiction!.length, `${slug} names no system`).toBeGreaterThan(0);
    }
  });

  it('the profession records still keep their training route country-free', () => {
    /*
     * The Wave 28 boundary, re-asserted for the two records this wave answers. It holds only while
     * the record above stays country-free; if one starts naming a system, the record and the guide
     * are answering the same question and this is what notices.
     */
    const NAMES_A_SYSTEM =
      /\b(?:France|French|England|Wales|Netherlands|Dutch|New Zealand|Germany|Japan|Brazil|UKAS|ISO|mbo|ENM|SQE|pupillage)\b/;
    for (const p of PROFESSIONS) {
      const shape =
        (p as unknown as { trainingRouteShape?: string[] }).trainingRouteShape ?? [];
      for (const line of shape) {
        expect(
          NAMES_A_SYSTEM.test(line),
          `${p.slug} trainingRouteShape now names a system: ${line}`,
        ).toBe(false);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* The comparative claim                                                      */
/* -------------------------------------------------------------------------- */

describe('the guarantee is not described as attaching to the person', () => {
  it('the competence page states the unit/activity architecture explicitly', () => {
    const t = allText(guide('how-forensic-competence-is-established'));
    expect(t).toMatch(/forensic unit|the unit/i);
    expect(t, 'the activity-specific framing is missing').toMatch(
      /activity-specific|held against the activity|forensic science activit/i,
    );
    expect(t, 'the individual declaration is missing').toMatch(/declar/i);
  });

  it('no forensic page claims individuals are licensed, admitted or certified as practitioners', () => {
    const LICENSED =
      /\b(?:forensic scientists? (?:are|is) (?:licensed|admitted|certified)|licence to practise|admitted to the profession)\b/i;
    for (const slug of FORENSIC) {
      const hits = asserted(guide(slug)).filter((s) => LICENSED.test(s));
      expect(hits, `${slug} asserts individual licensing`).toEqual([]);
    }
  });

  it('the comparison is drawn without ranking the designs', () => {
    const t = allText(guide('how-forensic-competence-is-established'));
    expect(t).toMatch(/what qualifying as a lawyer requires/i);
    const RANKS =
      /\b(?:more rigorous than|less rigorous than|weaker than|stronger than|better than|inferior to|superior to)\b/i;
    const hits = asserted(guide('how-forensic-competence-is-established')).filter((s) =>
      RANKS.test(s),
    );
    expect(hits, 'the page ranks one professional design against another').toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Cannibalisation                                                            */
/* -------------------------------------------------------------------------- */

describe('this wave does not re-answer what the corpus already owns', () => {
  it('no new forensic page describes enforcement or the consequence of a breach', () => {
    /*
     * who-regulates-forensic-science owns this: the code is admissible, and a court may take a
     * failure into account. These pages may link to it and may not restate it.
     */
    const ENFORCEMENT =
      /\b(?:enforcement action|breaching the code is|is not an offence|admissible in evidence|the court may take .{0,30}into account|sanction)\b/i;
    for (const slug of FORENSIC) {
      const hits = asserted(guide(slug)).filter((s) => ENFORCEMENT.test(s));
      expect(hits, `${slug} restates the enforcement question`).toEqual([]);
    }
  });

  it('the accreditation page routes the enforcement question rather than answering it', () => {
    expect(allText(guide('what-forensic-accreditation-requires'))).toContain(
      '/forensics/who-regulates-forensic-science',
    );
  });

  it('no dispatch page re-answers who is legally in charge in an emergency', () => {
    const COMMAND =
      /\b(?:legally responsible for the response|assumes command|declares? a state of emergency|emergency powers)\b/i;
    for (const slug of DISPATCH) {
      const hits = asserted(guide(slug)).filter((s) => COMMAND.test(s));
      expect(hits, `${slug} drifts into emergency authority`).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Section limits: method detail, and emergency instructions                  */
/* -------------------------------------------------------------------------- */

describe('the section limits are respected', () => {
  it('no forensic page describes a method, protocol or technique', () => {
    const METHOD =
      /\b(?:the sample is|swab|reagent|extraction protocol|pipette|centrifuge|amplif|sequenc|the procedure is to|prepared by|is performed by (?:placing|applying))\b/i;
    for (const slug of FORENSIC) {
      const hits = asserted(guide(slug)).filter((s) => METHOD.test(s));
      expect(hits, `${slug} describes method detail`).toEqual([]);
    }
  });

  it('no dispatch page gives an emergency instruction or describes call handling', () => {
    /*
     * /public-safety declares emergency instructions of any kind out of scope, and says readers in
     * an emergency should contact their local services. A page about who is employed to answer
     * calls is one careless sentence from telling people how to make one.
     */
    const INSTRUCTION =
      /\b(?:if you (?:are|have|need|witness)|when you call|stay on the line|tell the (?:operator|call handler)|dial \d|you should call|give your location)\b/i;
    for (const slug of DISPATCH) {
      const hits = asserted(guide(slug)).filter((s) => INSTRUCTION.test(s));
      expect(hits, `${slug} instructs a reader in an emergency`).toEqual([]);
    }
  });

  it('no dispatch page describes how a call is classified, prioritised or processed', () => {
    const OPERATIONAL =
      /\b(?:priority (?:one|code)|triage (?:the|a) call|classification criteria are|the call is (?:coded|graded)|escalation procedure)\b/i;
    for (const slug of DISPATCH) {
      const hits = asserted(guide(slug)).filter((s) => OPERATIONAL.test(s));
      expect(hits, `${slug} describes operational call handling`).toEqual([]);
    }
  });

  it('both dispatch pages tell a reader in an emergency to go elsewhere', () => {
    for (const slug of DISPATCH) {
      expect(allText(guide(slug)), `${slug} does not redirect an emergency reader`).toMatch(
        /contact (?:their|your) local emergency|emergency number directly|not guidance for anyone contacting/i,
      );
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Sourcing, absences and commerce                                            */
/* -------------------------------------------------------------------------- */

describe('sourcing and honesty about absence', () => {
  it.each(WAVE_29)('%s attaches a source to every fact block', (slug) => {
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

  it.each(WAVE_29)('%s states what it could not establish', (slug) => {
    const g = guide(slug);
    expect(g.uncertainty?.length, `${slug} publishes no uncertainty`).toBeGreaterThanOrEqual(4);
    expect((g.uncertainty ?? []).join('\n')).toMatch(
      /NOT RESEARCHED|NOT ESTABLISHED|were not researched/,
    );
  });

  it('the two published absences are reported as absences, never as positive claims', () => {
    /*
     * Two sources support a claim by not making one: the NZ page states no academic requirement,
     * and the forensic code states no entry qualification. Denial-aware, because both pages say in
     * terms that this is NOT a finding that education is irrelevant.
     */
    for (const [slug, pattern] of [
      [
        'entering-emergency-call-handling',
        /education (?:is|does not) (?:irrelevant|not matter)/i,
      ],
      [
        'how-forensic-competence-is-established',
        /no qualification is needed|anyone can do forensic/i,
      ],
    ] as [string, RegExp][]) {
      const hits = asserted(guide(slug)).filter((s) => pattern.test(s));
      expect(hits, `${slug} turned an absence into a claim`).toEqual([]);
      expect(allText(guide(slug)), `${slug} does not record the absence at all`).toMatch(
        /states? NO|no (?:published )?academic|no entry qualification|states no/i,
      );
    }
  });

  it('the wave names no course, provider, employer-as-recruiter or preparation service', () => {
    const PROVIDER =
      /\b(?:prep course|preparation course|tutoring|coaching|bootcamp|masterclass|course provider|training provider|university of)\b/i;
    for (const slug of WAVE_29) {
      const hits = asserted(guide(slug)).filter((s) => PROVIDER.test(s));
      expect(hits, `${slug} names a provider`).toEqual([]);
    }
  });

  it('the wave reproduces no pay figure', () => {
    const MONEY = /(?:[£$€]\s?\d|\bper annum\b|\bsalary of\b|\bwage of\b)/i;
    for (const slug of WAVE_29) {
      const hits = allText(guide(slug)).match(MONEY) ?? [];
      expect(hits, `${slug} reproduces pay`).toEqual([]);
    }
  });

  it('every new source is an official body, and none is a membership or course organisation', () => {
    for (const id of NEW_SOURCES) {
      const s = getSource(id);
      expect(s, `${id} missing`).toBeDefined();
      expect(['government', 'legislation']).toContain(s!.type);
    }
  });

  it('NO source anywhere in the registry is hosted on a membership or trade-association site', () => {
    /*
     * This wave's near miss. The obvious source for dispatcher training standards is a membership
     * association that also sells courses, and it was excluded for that reason. Nothing in the
     * corpus-wide guards would have caught it, because such a host is neither a retailer nor
     * obviously a teaching site.
     */
    const MEMBERSHIP_HOST =
      /\b(?:association|membership|institute-of|society-of|guild|federation-of)\b/i;
    const offenders = SOURCES.filter((src) => {
      if (!src.url) return false;
      let host: string;
      try {
        host = new URL(src.url).hostname;
      } catch {
        return true;
      }
      return MEMBERSHIP_HOST.test(host);
    }).map((src) => `${src.id} -> ${src.url}`);
    expect(offenders).toEqual([]);
  });

  it('the count of NZ communications centres is not published, because the source contradicts itself', () => {
    /*
     * The source names four locations and also states a total that does not match them. Publishing
     * either number would be publishing a number the page does not support.
     */
    for (const slug of DISPATCH) {
      const hits = asserted(guide(slug)).filter((s) =>
        /\b(?:four|five|\d+) (?:communications? )?centres\b/i.test(s),
      );
      expect(hits, `${slug} publishes a centre count`).toEqual([]);
    }
    expect(getSource('nz-police-communications-centres')!.note).toMatch(
      /DELIBERATELY UNUSED|does not match/i,
    );
  });
});

describe('the cluster is joined to the corpus', () => {
  it('pages that predate this wave link into it', () => {
    const NEW_PATHS = WAVE_29.map((s) => guidePath(guide(s)));
    const older = ALL_GUIDES.filter((g) => !(WAVE_29 as readonly string[]).includes(g.slug))
      .map((g) => allText(g))
      .join('\n');
    for (const path of NEW_PATHS) {
      expect(older, `nothing that predates this wave links to ${path}`).toContain(path);
    }
  });
});
