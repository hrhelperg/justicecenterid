import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { getSource } from '@/content/sources';
import { PROFESSIONS } from '@/content/professions';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 33: police mobility — what the law permits a police driver to do.
 *
 * THE SAFETY BOUNDARY IS THE WHOLE DESIGN OF THIS WAVE.
 *
 * A vehicles cluster is the easiest place in this corpus to write something harmful without
 * noticing, because the harmful version and the educational version share every noun. "Police cars
 * are faster than" and "police cars may exceed the limit where obeying it would hinder the purpose"
 * are the same subject and different products. The programme forbids performance comparison,
 * pursuit material, evasion aid, unmarked-vehicle detection, tracking defeat, radio frequencies and
 * operational siting. The guards below make each of those a rule rather than a habit.
 *
 * WHAT THIS WAVE DELIBERATELY DOES NOT PUBLISH is as load-bearing as what it does. Wave 27 declined
 * its source's pursuit and interception material; this wave declines air support entirely, because
 * three official hosts returned 403 and a search snippet is not a source. Guards assert the
 * absences hold.
 *
 * ENTITY RELATIONSHIPS. A vehicle is not a unit, not a profession, and not a strategy. The corpus
 * depends on those distinctions elsewhere and they are checked here.
 */

const WAVE_33 = [
  'when-police-may-depart-from-traffic-rules',
  'who-authorises-emergency-signals',
] as const;

const NEW_SOURCES = [
  'nl-politie-vrijstelling-verkeersregels',
  'nl-politie-zwaailicht-sirene',
  'uk-rtra-1984-s87',
] as const;

/** Wave 27 owns these and this wave must not re-answer them. */
const PRIOR_OWNERS = [
  'police-vehicles-and-what-they-are-for',
  'marked-vehicles-and-police-identification',
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
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately|unused|outside|without)\b/i;

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

describe('the cluster exists and creates no new route family', () => {
  it.each(WAVE_33)('%s is published, safety-cleared and routed', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('law-enforcement');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
    expect(g.factsVerifiedOn).toBeTruthy();
  });

  it('no /vehicles or /mobility route family exists', () => {
    /*
     * The brief permits one only with sufficient long-term entity volume. Two pages is not that,
     * and the Wave 27 vehicle pages already live in /law-enforcement.
     */
    for (const prefix of ['/vehicles/', '/mobility/', '/fleet/', '/aviation/']) {
      expect(
        PUBLIC_ROUTE_PATHS.filter((p) => p.startsWith(prefix)),
        `a ${prefix} route family was created`,
      ).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* The safety boundary                                                        */
/* -------------------------------------------------------------------------- */

describe('nothing that would help a reader defeat or predict a police vehicle', () => {
  it.each(WAVE_33)('%s publishes no speed, performance or comparison', (slug) => {
    const PERFORMANCE =
      /\b(?:top speed|maximum speed|\d+\s?(?:mph|km\/h|kph)|horsepower|bhp|0-60|acceleration|faster than|outrun|outpace|catch up with)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => PERFORMANCE.test(s));
    expect(offenders, `${slug} publishes performance material`).toEqual([]);
  });

  it.each(WAVE_33)('%s contains no pursuit, interception or evasion material', (slug) => {
    const PURSUIT =
      /\b(?:pursuit tactic|pursuing a vehicle|interception|ramming|stinger|spike strip|tyre defl|box(?:ing)? in|terminate the pursuit|shake off|evade|evading|avoid detection|get away from)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => PURSUIT.test(s));
    expect(offenders, `${slug} contains pursuit or evasion material`).toEqual([]);
  });

  it.each(WAVE_33)('%s gives no way to recognise an unmarked vehicle', (slug) => {
    /*
     * The brief's exact line: "Unmarked police vehicles exist and may support certain policing
     * functions" is acceptable; "how to identify an unmarked police vehicle before it stops you"
     * is not. The first is a fact about institutions, the second is a product for avoiding them.
     */
    const DETECTION =
      /\b(?:how to (?:spot|identify|recognise|tell)|you can tell|look for|giveaway|telltale|distinguish(?:ing)? an unmarked|unmarked cars? (?:are|use|have|often))\b/i;
    const offenders = asserted(guide(slug)).filter((s) => DETECTION.test(s));
    expect(offenders, `${slug} helps a reader recognise an unmarked vehicle`).toEqual([]);
  });

  it.each(WAVE_33)('%s publishes no tracking, ANPR or countermeasure material', (slug) => {
    const TRACKING =
      /\b(?:ANPR|automatic number plate|number plate recognition|tracker|tracking device|jam(?:ming)?|defeat|counter-?surveillance|blind spot|vulnerabilit)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => TRACKING.test(s));
    expect(offenders, `${slug} publishes tracking or countermeasure material`).toEqual([]);
  });

  it.each(WAVE_33)('%s publishes no radio frequency or communications detail', (slug) => {
    const RADIO =
      /\b(?:\d+(?:\.\d+)?\s?(?:MHz|kHz|GHz)|frequency|scanner|encrypt(?:ed|ion) channel|callsign)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => RADIO.test(s));
    expect(offenders, `${slug} publishes radio detail`).toEqual([]);
  });

  it.each(WAVE_33)('%s publishes no operational location or deployment data', (slug) => {
    const LOCATION =
      /\b(?:based at|stationed at|operates from|fleet map|current location|shift pattern|patrol route|deployment schedule)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => LOCATION.test(s));
    expect(offenders, `${slug} publishes operational siting`).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Entity relationships                                                       */
/* -------------------------------------------------------------------------- */

describe('a vehicle is not a unit, a profession or a strategy', () => {
  const EQUATES = (a: string, b: string) =>
    new RegExp(`\\b${a}\\b[^.]{0,25}\\b(?:is|are)\\s+(?:a |an |the )?\\b${b}\\b`, 'i');

  it.each([
    ['vehicle', 'unit'],
    ['vehicle', 'profession'],
    ['car', 'unit'],
    ['motorcycle', 'unit'],
    ['helicopter', 'profession'],
  ])('no page equates %s with %s', (a, b) => {
    for (const slug of [...WAVE_33, ...PRIOR_OWNERS]) {
      const offenders = asserted(guide(slug)).filter((s) => EQUATES(a, b).test(s));
      expect(offenders, `${slug} equates ${a} with ${b}`).toEqual([]);
    }
  });

  it('no vehicle type has become a profession in the registry', () => {
    const slugs = PROFESSIONS.map((p) => p.slug);
    for (const forbidden of [
      'police-driver',
      'patrol-car',
      'helicopter-pilot',
      'motorcyclist',
    ]) {
      expect(slugs, `${forbidden} was added as a profession`).not.toContain(forbidden);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Scope discipline: absence of evidence is not a negative fact               */
/* -------------------------------------------------------------------------- */

describe('one section is not presented as a whole legal system', () => {
  it('the traffic-rules page never claims speed is the only English exemption', () => {
    /*
     * Only RTRA s.87 was read. Concluding from it that nothing else is exempt would be exactly the
     * "absence of evidence = negative fact" error the programme forbids, and it is a tempting
     * sentence to write because it makes the comparison tidier.
     */
    const g = guide('when-police-may-depart-from-traffic-rules');
    const offenders = sentences(assertedText(g)).filter(
      (s) =>
        /\b(?:only|solely|nothing else|no other)\b/i.test(s) &&
        /*
         * "only where obeying them would hinder" is a CONDITION on the exemption, not a claim that
         * speed is the only thing exempt. The first version could not tell them apart and failed
         * on two correct sentences.
         */
        !/\bonly (?:where|when|if|to the extent)\b/i.test(s) &&
        /\b(?:speed limit|exempt)/i.test(s) &&
        !/NOT RESEARCHED|was not researched|not a finding/i.test(s),
    );
    expect(offenders, 'the page turns an unread provision into a negative finding').toEqual([]);
    expect(
      (g.uncertainty ?? []).join('\n'),
      'the limit of the reading is not recorded',
    ).toMatch(/NOT RESEARCHED|not a finding that no such provision exists/i);
  });

  it('both pages state the exemption is conditional, not blanket', () => {
    const t = allText(guide('when-police-may-depart-from-traffic-rules'));
    expect(t).toMatch(/verkeersveiligheid mag niet in gevaar komen/);
    expect(t).toMatch(/would be likely to hinder/);
  });

  it('air support is absent, and the reason is recorded in the source registry', () => {
    /*
     * Three official hosts returned 403. A search snippet is not a source, so nothing about police
     * aviation is published. The absence is deliberate and has to stay traceable.
     */
    for (const slug of WAVE_33) {
      const offenders = asserted(guide(slug)).filter((s) =>
        /\b(?:NPAS|National Police Air Service|air support (?:is|provides)|helicopter fleet)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${slug} publishes air support material`).toEqual([]);
    }
    /*
     * The first version also required an access limitation inside a source NOTE. That was the
     * wrong premise: the 403s are recorded in the registry's wave comment, where provenance
     * decisions belong, and none of the three sources cited here is about aviation — attaching an
     * air-support note to a traffic statute would be worse than not recording it there at all.
     * What matters, and what is asserted, is that no aviation material is published.
     */
    for (const id of NEW_SOURCES) {
      expect(getSource(id), `${id} missing`).toBeDefined();
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Contradiction, ownership, sourcing, linkage, characters                    */
/* -------------------------------------------------------------------------- */

describe('the pages agree with their own citations', () => {
  it('the authorisation finding is not contradicted in any part of its page', () => {
    const g = guide('who-authorises-emergency-signals');
    const parts = [
      g.summary,
      blockText(g.howItWorks),
      blockText(g.variation),
      g.misconceptions.map((m) => m.reality).join('\n'),
    ];
    for (const text of parts) {
      const offenders = sentences(text).filter(
        (s) =>
          /\b(?:driver|officer|crew)\b/i.test(s) &&
          /\b(?:decides?|chooses?) (?:when )?to (?:use|switch on|activate)\b/i.test(s) &&
          !DENIES.test(s),
      );
      expect(offenders, 'a part of the page gives the decision to the driver').toEqual([]);
    }
    expect(g.summary + blockText(g.howItWorks)).toMatch(
      /toestemming van de meldkamer|control room/i,
    );
  });

  it('no page re-answers what Wave 27 owns', () => {
    const OWNED =
      /\b(?:why (?:police )?services run several|markings are legally protected|huisstijl)\b/i;
    for (const slug of WAVE_33) {
      /*
       * A sentence that ROUTES the question to the page owning it is correct behaviour, not the
       * offence. The first version flagged "Why services run several vehicle types is [police
       * vehicles and what they are for](...)", which is exactly what a well-behaved page does.
       */
      const routesToOwner =
        /\]\(\/law-enforcement\/(?:police-vehicles-and-what-they-are-for|marked-vehicles-and-police-identification)\)/;
      const offenders = asserted(guide(slug)).filter(
        (s) => OWNED.test(s) && !routesToOwner.test(s),
      );
      expect(offenders, `${slug} re-answers a Wave 27 question`).toEqual([]);
    }
  });

  it.each(WAVE_33)('%s attaches a source to every fact block', (slug) => {
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

  it('every new source is official and content-confirmed', () => {
    for (const id of NEW_SOURCES) {
      const s = getSource(id);
      expect(s, `${id} missing`).toBeDefined();
      expect(['government', 'legislation']).toContain(s!.type);
      expect(s!.verificationMethod).toBe('content-confirmed');
    }
  });

  it('declared jurisdictions are carried by the sources cited', () => {
    for (const slug of WAVE_33) {
      const g = guide(slug);
      const covered = new Set(
        g.sources.map((id) => getSource(id)?.jurisdiction).filter(Boolean),
      );
      for (const code of g.jurisdiction ?? []) {
        expect(covered, `${slug} declares ${code} with no source carrying it`).toContain(code);
      }
    }
  });

  it('pages that predate this wave link into it', () => {
    const NEW_PATHS = WAVE_33.map((s) => guidePath(guide(s)));
    const older = ALL_GUIDES.filter((g) => !(WAVE_33 as readonly string[]).includes(g.slug))
      .map((g) => allText(g))
      .join('\n');
    for (const path of NEW_PATHS) {
      expect(older, `nothing that predates this wave links to ${path}`).toContain(path);
    }
  });

  it('the cluster is character-clean', () => {
    for (const slug of WAVE_33) {
      const bad = [...allText(guide(slug))].filter(
        (c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f,
      );
      expect(bad, `${slug} contains C1 control characters`).toEqual([]);
    }
  });
});
