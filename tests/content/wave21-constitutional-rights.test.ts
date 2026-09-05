import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { SOURCES, getSource } from '@/content/sources';
import { SCHEDULED_CHANGES } from '@/content/scheduled-changes';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import { INSTITUTION_TYPES } from '@/content/institutions';
import { PROFESSIONS } from '@/content/professions';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 21: constitutional rights, state powers and fundamental safeguards.
 *
 * The two failure directions are symmetrical and the suite is written twice for each, because a
 * cluster guarded only against overstating state power drifts into implying that a right is a zone
 * the state may never enter — which is the other half of the brief and the easier mistake to make
 * while avoiding the first.
 *
 * The distinctive risk of THIS subject is a third thing: FALSE UNIVERSALITY IMPORTED FROM ONE
 * SYSTEM. The vocabulary a reader arrives with — due process, search and seizure, Miranda,
 * proportionality — belongs to particular texts, and the evidence sweep found a counter-example to
 * every generalisation those words invite. The Grundgesetz has no self-incrimination provision.
 * The ECHR text has no proportionality. Canada immunises testimony where the United States permits
 * refusal. The Netherlands requires a judge for calls and not for the home. Several groups below
 * exist to keep those alive against a future edit that would smooth them away.
 *
 * The safety guards are assertion-aware and use a SEPARATE unit set from the framing guards, per
 * the finding mutation proof W20-M4 forced: a denial-aware check needs a misconception intact,
 * and a directive check needs sentences, because an instruction is an instruction wherever it sits.
 */

const JUSTICE = [
  'how-a-right-can-be-limited',
  'what-proportionality-requires',
  'who-a-constitutional-right-belongs-to',
  'who-fundamental-rights-bind',
  'international-rights-and-domestic-law',
  'how-soon-a-detained-person-sees-a-judge',
] as const;

const INVESTIGATIONS = [
  'what-privacy-protects-in-law',
  'searching-a-home',
  'intercepting-communications',
] as const;

const DEFENCE = ['the-right-to-silence', 'equality-of-arms'] as const;
const COURTS = ['why-hearings-are-public'] as const;

const WAVE_21 = [...JUSTICE, ...INVESTIGATIONS, ...DEFENCE, ...COURTS] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 21 guide missing: ${slug}`);
  return found;
}

function blocks(list: readonly Block[] | undefined): string[] {
  return (list ?? []).flatMap((block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((i) => [i.term, i.description]);
  });
}

function allBlocks(g: Guide): Block[] {
  return [
    ...(g.definition ?? []),
    ...(g.whyItExists ?? []),
    ...(g.howItWorks ?? []),
    ...(g.variation ?? []),
    ...(g.rightsAndAccountability ?? []),
    ...(g.furtherReading ?? []),
  ];
}

function prose(g: Guide): string {
  return [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality, m.note ?? '']),
    ...(g.uncertainty ?? []),
  ]
    .filter(Boolean)
    .join('\n');
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Units for the framing guards.
 *
 * WAVE 21 REFINEMENT of the rule Waves 13-20 carried, and it is a correction rather than a
 * loosening. Those waves made a misconception ONE unit — claim joined to reality — and relied on
 * `deniesClaim` finding a negation somewhere in the pair. That works only while every `reality`
 * happens to contain a negation token, and it silently stops working when a reality denies its
 * claim by asserting the opposite instead: "Most of the texts here provide expressly for
 * restriction" denies "the government cannot touch it" without using the word "not".
 *
 * The schema already guarantees what the join was approximating: `reality` denies `claim`. So a
 * stance appearing in a CLAIM is denied by construction and is excluded here, while a stance
 * appearing in a `reality` or a `note` is an assertion this platform is making and is included.
 * That is a strictly stronger check — it stops depending on the vocabulary of the correction — and
 * the live-catch test below proves it still fires on a stance planted in a reality.
 */
function tripwireUnits(g: Guide): string[] {
  const text = [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...(g.uncertainty ?? []),
  ].join('\n');
  return [
    ...sentences(text),
    ...g.misconceptions.flatMap((m) =>
      sentences([m.reality, m.note ?? ''].filter(Boolean).join(' ')),
    ),
  ];
}

/** Sentences, misconceptions split: an instruction is an instruction wherever it sits. */
function safetyUnits(g: Guide): string[] {
  const text = [
    g.title,
    g.summary,
    g.question,
    ...blocks(allBlocks(g)),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality, m.note ?? '']),
    ...(g.uncertainty ?? []),
  ]
    .filter(Boolean)
    .join('\n');
  return sentences(text);
}

function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bneither\b|\bnor\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brather than\b|\bunlike\b|\bwithout\b|\binstead\b|\bunless\b|\bonly where\b|\bmisdescrib|\bdiffer|\bwould be\b/i.test(
    remainder,
  );
}

/** For tripwires whose own text carries a negation: only a negation that PRECEDES it governs it. */
function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  return /\b(?:not|never|no|nothing|neither|nor)\b|\bdoes not\b|\brather than\b/i.test(before);
}

/**
 * CORPUS-WIDE units, for the two spine stances only.
 *
 * Forced by mutation proof W21-M1. The stance "constitutional rights prevent the state from
 * exercising coercive authority" was planted in `/justice/limits-on-public-power` — a Wave 12
 * page — and the suite passed, because a wave suite reads its own twelve pages.
 *
 * For most invariants that scoping is right: a wave is answerable for what it published. But the
 * two stances below are this platform's editorial spine rather than this wave's subject, and a
 * spine that is only defended on the newest twelve pages is not defended. These two guards
 * therefore run against every published guide, and the cost of that is one that should be paid:
 * a future wave cannot introduce either stance anywhere without this file failing.
 */
const CORPUS_UNITS = ALL_GUIDES.filter((g) => g.status === 'published').flatMap(tripwireUnits);

const ALL_UNITS = WAVE_21.flatMap((slug) => tripwireUnits(guide(slug)));
const ALL_PROSE = WAVE_21.map((slug) => prose(guide(slug))).join('\n');
const SAFETY_UNITS = WAVE_21.flatMap((slug) => safetyUnits(guide(slug)));

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter((s) => pattern.test(s) && !deniesClaim(s, pattern));
}

function catches(patterns: RegExp[], planted: string): boolean {
  return patterns.some((p) => p.test(planted) && !deniesClaim(planted, p));
}

/* -------------------------------------------------------------------------- */
/* Structure                                                                  */
/* -------------------------------------------------------------------------- */

describe('the Wave 21 cluster exists and is routed', () => {
  it.each(WAVE_21)('%s is published with a route', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('publishes twelve routes and no more', () => {
    expect(WAVE_21.length).toBe(12);
  });

  it.each(WAVE_21)('%s states what it did not research', (slug) => {
    expect(guide(slug).uncertainty?.length ?? 0).toBeGreaterThan(0);
  });

  it.each(WAVE_21)('%s links to at least two related pages that exist', (slug) => {
    const related = guide(slug).related;
    expect(related.length).toBeGreaterThanOrEqual(2);
    for (const r of related) expect(getGuide(r), `${slug} -> ${r}`).toBeDefined();
  });

  it.each(WAVE_21)('%s is reachable from somewhere other than itself', (slug) => {
    const inbound = ALL_GUIDES.filter(
      (g) => g.slug !== slug && (g.related.includes(slug) || prose(g).includes(`/${slug})`)),
    );
    expect(inbound.length, `${slug} has no inbound reference`).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* 1-2. Rights are not the absence of state authority, and authority is not    */
/*      unlimited discretion. Both directions, because both are failures.      */
/* -------------------------------------------------------------------------- */

const RIGHTS_DEFEAT_AUTHORITY = [
  /rights? (?:mean|means) the (?:state|government) (?:may|can) not act/i,
  /constitutional rights prevent the (?:state|government) from exercising coercive/i,
  /(?:the state|government) may not (?:arrest|search|detain|prosecute) (?:anyone|people)/i,
  /(?:a|every|any|each) right is a zone the state may never enter/i,
  /having a right means (?:the )?government can never limit it/i,
  /(?:police|prosecutors|courts) (?:have|hold) no (?:lawful )?authority/i,
];

const AUTHORITY_WITHOUT_LIMIT = [
  /(?:the state|government) may (?:limit|restrict) any right whenever/i,
  /lawful state power has no (?:constitutional )?limits/i,
  /(?:officials|police|the state) may act (?:however|as) (?:they|it) (?:see|sees) fit/i,
  /no (?:legal )?authorisation is (?:required|needed)/i,
  /discretion is unlimited/i,
  /public safety (?:overrides|suspends) constitutional law/i,
];

describe('rights are not the absence of state authority', () => {
  it.each(RIGHTS_DEFEAT_AUTHORITY.map((p) => [p.source, p] as const))(
    'no published guide anywhere in the corpus asserts %s',
    (_label, pattern) => {
      expect(offending(pattern, CORPUS_UNITS)).toEqual([]);
    },
  );

  it('positively states that the state exercises powers a private person may not', () => {
    expect(ALL_PROSE).toMatch(
      /arrest restricts liberty|could not run a criminal justice system|investigators need to be able to enter|permits interception on conditions/i,
    );
  });

  it('catches the stance when planted', () => {
    expect(
      catches(
        RIGHTS_DEFEAT_AUTHORITY,
        'Constitutional rights prevent the state from exercising coercive authority.',
      ),
    ).toBe(true);
  });
});

describe('state authority is not unlimited discretion', () => {
  it.each(AUTHORITY_WITHOUT_LIMIT.map((p) => [p.source, p] as const))(
    'no published guide anywhere in the corpus asserts %s',
    (_label, pattern) => {
      expect(offending(pattern, CORPUS_UNITS)).toEqual([]);
    },
  );

  it('catches the stance when planted', () => {
    expect(
      catches(AUTHORITY_WITHOUT_LIMIT, 'Lawful state power has no constitutional limits.'),
    ).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* 3-4. Due process is not uniquely American; American terminology is not the  */
/*      taxonomy.                                                             */
/* -------------------------------------------------------------------------- */

describe('no American vocabulary is presented as the universal taxonomy', () => {
  it('publishes no route whose slug adopts one system’s phrase', () => {
    for (const forbidden of [
      '/investigations/search-and-seizure',
      '/justice/search-and-seizure',
      '/justice/right-to-due-process',
      '/defence/miranda-rights',
      '/defence/miranda-warning',
      '/justice/probable-cause',
    ]) {
      expect(
        PUBLIC_ROUTE_PATHS,
        `${forbidden} adopts one system as the taxonomy`,
      ).not.toContain(forbidden);
    }
  });

  it('never treats "search and seizure" as this platform’s own heading', () => {
    for (const unit of ALL_UNITS) {
      if (!/search and seizure/i.test(unit)) continue;
      expect(
        unit,
        `"search and seizure" used without attribution to a text: ${unit.slice(0, 120)}`,
      ).toMatch(
        /Amendment|Japan|United States|Article 35|phrase|title|taxonomy|heading|not (?:carry|use)|does not|rejected|component|section 14|Article 31|privacy/i,
      );
    }
  });

  it('records that two constitutions reach searches through privacy instead', () => {
    const p = prose(guide('searching-a-home')) + prose(guide('what-privacy-protects-in-law'));
    expect(p).toMatch(/section 14/);
    expect(p).toMatch(/Article 31/);
    expect(p).toMatch(/privacy, which includes the right not to have/i);
  });

  it('never says due process is an American concept, nor that the phrase is universal', () => {
    for (const pattern of [
      /due process is (?:an? )?(?:uniquely )?american/i,
      /due process is a universal (?:phrase|term|standard)/i,
      /every (?:system|constitution) (?:has|guarantees) due process/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 5-7. Rights are not automatically absolute; a qualified right is not empty; */
/*      limitation is not derogation.                                         */
/* -------------------------------------------------------------------------- */

const ABSOLUTIST = [
  /all (?:constitutional )?rights are absolute/i,
  /(?:a|every) constitutional right cannot be (?:limited|restricted)/i,
  /rights may never be (?:limited|restricted)/i,
  /if something is a constitutional right, the government cannot touch it/i,
];

describe('rights are not absolute by default', () => {
  /*
   * FORWARD-ONLY denial, and mutation proof W21-M3 is why.
   *
   * "All constitutional rights are absolute and every right is a zone the state may never enter"
   * clears a strip-and-search helper, because removing the matched span leaves "and every right is
   * a zone the state may never enter" — a clause whose own "never" is read as a denial of the
   * stance it is actually restating. An absolutist stance is neutralised only by a negation that
   * GOVERNS it, and in English that precedes it.
   *
   * This is the Wave 19 finding in a new place, and the reason it recurs is that absolutist
   * language is made of negations, so the denial vocabulary and the stance vocabulary overlap.
   * Wherever they overlap, strip-and-search is the wrong helper.
   */
  it.each(ABSOLUTIST.map((p) => [p.source, p] as const))(
    'never asserts %s, and no trailing clause launders it',
    (_l, pattern) => {
      const offenders = CORPUS_UNITS.filter(
        (u) => pattern.test(u) && !deniesForward(u, pattern),
      );
      expect(offenders, `absolutist stance: ${offenders[0]?.slice(0, 140)}`).toEqual([]);
    },
  );

  it('the forward-only helper catches what strip-and-search misses', () => {
    const planted =
      'All constitutional rights are absolute and every right is a zone the state may never enter.';
    const p = /all (?:constitutional )?rights are absolute/i;
    expect(
      deniesClaim(planted, p),
      'strip-and-search is laundered by the trailing clause',
    ).toBe(true);
    expect(deniesForward(planted, p), 'forward-only must not be laundered').toBe(false);
  });

  it('carries the absolutist claim as a corrected misconception', () => {
    const m = guide('how-a-right-can-be-limited').misconceptions;
    expect(m.some((x) => /cannot touch it|government cannot/i.test(x.claim))).toBe(true);
  });

  it('states that something IS placed beyond limitation, in four named systems', () => {
    const p = prose(guide('how-a-right-can-be-limited'));
    expect(p).toMatch(/Kerngehalt/);
    expect(p).toMatch(/Wesensgehalt/);
    expect(p).toMatch(/contenido esencial/);
    expect(p).toMatch(/core or essential content/i);
  });

  it('catches the stance when planted', () => {
    expect(catches(ABSOLUTIST, 'All constitutional rights are absolute.')).toBe(true);
  });
});

describe('a qualified right is not a meaningless right', () => {
  it('never says a limitable right is empty', () => {
    for (const pattern of [
      /a right that can be limited is (?:not a right|meaningless|empty|worthless)/i,
      /qualified rights? (?:are|is) (?:meaningless|empty|worthless|not real)/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });

  it('states what a qualified right actually shifts', () => {
    const p = prose(guide('how-a-right-can-be-limited'));
    expect(p).toMatch(/burden|onus|demonstrate to the court/i);
    expect(p).toMatch(/less restrictive means/i);
  });
});

describe('limitation and derogation are kept apart', () => {
  it('states the distinction explicitly', () => {
    const p = prose(guide('how-a-right-can-be-limited'));
    expect(p).toMatch(/limitation clause applies at all times|applies at all times/i);
    expect(p).toMatch(
      /derogation.{0,80}set(?:s|ting)? (?:an )?obligation aside|sets an obligation aside/i,
    );
  });

  it('never treats the two as synonyms', () => {
    for (const pattern of [
      /derogation (?:is|means) (?:the same as |another word for )?limitation/i,
      /limitation and derogation are (?:the same|two words for)/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('does not recreate the emergency cluster', () => {
    for (const forbidden of [
      '/justice/emergency-powers-and-rights',
      '/justice/derogation',
      '/public-safety/proportionality-during-emergencies',
      '/public-safety/emergency-powers-and-rights',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(forbidden);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 8-9. Emergency is not suspension of all rights; public safety is not an     */
/*      exemption from constitutional law.                                     */
/* -------------------------------------------------------------------------- */

describe('an emergency is not a suspension of rights, and public safety is not an exemption', () => {
  it('never asserts either', () => {
    for (const pattern of [
      /rights (?:are|were) suspended during (?:a|an) (?:state of )?emergency/i,
      /rights (?:disappear|vanish)\b/i,
      /in an emergency the (?:state|government) may do anything/i,
      /public safety (?:is|constitutes) an exception to constitutional law/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });

  it('catches the stance when planted', () => {
    expect(
      catches(
        [/rights (?:disappear|vanish)\b/i],
        'Rights disappear when an emergency is declared.',
      ),
    ).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* 10-12. Investigative authority: legal basis, jurisdictional difference, and */
/*        judicial authorisation is not universally identical.                 */
/* -------------------------------------------------------------------------- */

describe('investigative powers are stated as requiring authority, and the authority differs', () => {
  it('never claims a universal warrant requirement', () => {
    for (const pattern of [
      /a warrant is (?:always )?required (?:to|before) search/i,
      /every (?:system|constitution) requires a warrant/i,
      /searches always require judicial authorisation/i,
      /judicial authorisation is (?:required|needed) everywhere/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('names at least three different home-entry authorisation architectures', () => {
    const p = prose(guide('searching-a-home'));
    expect(p).toMatch(/only by a judge|nur durch den Richter/i);
    expect(p).toMatch(/consent|consentimiento/i);
    expect(p).toMatch(/written report|schriftelijk verslag/i);
  });

  it('records that one system requires a judge for communications and not for the home', () => {
    const p = prose(guide('intercepting-communications'));
    expect(p).toMatch(/machtiging van de rechter/);
    expect(p).toMatch(/Article 12|Art\. 12/);
  });

  it('records that the German requirement is graded rather than binary', () => {
    expect(prose(guide('searching-a-home'))).toMatch(/panel of three judges|three judges/i);
  });

  it('records the systems whose texts state no authorisation rule at all', () => {
    const p = prose(guide('searching-a-home'));
    expect(p).toMatch(/unreasonable search or seizure/);
    expect(p).toMatch(/no authorisation rule/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 13-14. Silence is not the Miranda model; self-incrimination is not one      */
/*        doctrine.                                                           */
/* -------------------------------------------------------------------------- */

describe('silence and self-incrimination are not universalised', () => {
  it('never claims a universal right to be warned', () => {
    for (const pattern of [
      /everyone (?:has|is entitled to) (?:a|the) right to be (?:told|informed) they may remain silent/i,
      /(?:police|officials) must (?:always )?(?:warn|caution|inform) (?:a|the) (?:suspect|person) of the right to (?:remain )?silen/i,
      /every (?:system|constitution) requires a (?:warning|caution)/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('records the verified negative about the German constitutional text, and scopes it', () => {
    const p = prose(guide('the-right-to-silence'));
    expect(p).toMatch(/Grundgesetz contains no|contains none of it/i);
    expect(p).toMatch(/fact about (?:that|the) (?:document|text)|about the Grundgesetz/i);
    expect(p).toMatch(/German law recognises the principle/i);
  });

  it('never converts that absence into a claim about German law', () => {
    for (const pattern of [
      /German(?:y| law) (?:has|recognises) no (?:right to silence|privilege against self-incrimination)/i,
      /there is no right to silence in Germany/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });

  it('states the Canadian mechanism as immunity, not refusal', () => {
    const p = prose(guide('the-right-to-silence'));
    expect(p).toMatch(
      /use immunity|use-immunity|not to have any incriminating evidence so given used/i,
    );
    expect(p).toMatch(/section 13|s\. 13/i);
  });

  it('separates silence, non-compulsion, notification and evidentiary rules', () => {
    const p = prose(guide('the-right-to-silence'));
    expect(p).toMatch(/35\(1\)\(a\)/);
    expect(p).toMatch(/35\(3\)\(h\)/);
    expect(p).toMatch(/consequences of not remaining silent/i);
    expect(p).toMatch(/only proof against him is his own confession/i);
  });

  it('never presents the American model as the one others adopted', () => {
    for (const pattern of [
      /other systems adopted the (?:american|miranda)/i,
      /the miranda (?:model|rule) applies/i,
      /based on the (?:american|us) model/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 15-16. Equality before the law is not equal-protection doctrine, and        */
/*        equality of arms is not general equality.                            */
/* -------------------------------------------------------------------------- */

describe('the equalities are kept apart', () => {
  it('states that equality of arms is not equality before the law', () => {
    const p = prose(guide('equality-of-arms'));
    expect(p).toMatch(/equality before the law is (?:about|a claim about)/i);
    expect(p).toMatch(/different (?:chapters|idea|claim)|separately/i);
  });

  it('never promises equal resources', () => {
    for (const pattern of [
      /equality of arms means (?:the sides have )?equal resources/i,
      /the defence (?:has|must have) the same resources/i,
      /both sides are equal/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('records that the phrase is in neither treaty text', () => {
    const p = prose(guide('equality-of-arms'));
    expect(p).toMatch(/zero times/i);
    expect(p).toMatch(/under the same conditions/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 17-18. Proportionality is not one formula, and necessity is not             */
/*        proportionality.                                                     */
/* -------------------------------------------------------------------------- */

describe('proportionality is not universalised', () => {
  it('never states a single universal test', () => {
    for (const pattern of [
      /the proportionality test (?:is|has|consists of) (?:the )?(?:three|four) (?:steps|stages)/i,
      /every (?:system|court) applies the (?:same )?proportionality test/i,
      /proportionality (?:is|means) a (?:universal|single) (?:test|standard)/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('records the verified negative in both treaty texts, and scopes it', () => {
    const p = prose(guide('what-proportionality-requires'));
    expect(p).toMatch(/occurs nowhere in the Convention|zero times/i);
    expect(p).toMatch(/about the instruments|about these treaties|not researched/i);
  });

  it('records that one constitution uses it for state action generally, not only for rights', () => {
    const p = prose(guide('what-proportionality-requires'));
    expect(p).toMatch(/Art\. 5\(2\)|Article 5\(2\)/);
    expect(p).toMatch(/not conditioned on a right|is not about rights|all state activity/i);
  });

  it('does not collapse necessity into proportionality', () => {
    const p = prose(guide('what-proportionality-requires'));
    expect(p).toMatch(/necessity and proportionality are the same/i);
    expect(p).toMatch(/separate them where they state both|as a distinct factor/i);
  });

  it('keeps the use-of-force framework distinct from the constitutional doctrine', () => {
    const p = prose(guide('what-proportionality-requires'));
    expect(p).toMatch(/police-use-of-force/);
    expect(p).toMatch(
      /different objects|the thing being weighed does not|measures an action against its objective/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 19. An international right is not an identical domestic effect.             */
/* -------------------------------------------------------------------------- */

describe('treaty text is never given automatic domestic effect', () => {
  it('never says a treaty is automatically part of domestic law', () => {
    for (const pattern of [
      /(?:a|the) treaty (?:is|becomes) (?:automatically )?part of (?:the )?domestic law/i,
      /ratif(?:ying|ication) makes (?:it|the treaty) (?:domestic law|enforceable)/i,
      /treaty (?:wording|provisions) (?:has|have) the same (?:domestic )?effect/i,
      /signatories? (?:must|shall) apply it in their (?:own )?courts/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('states both poles by name', () => {
    const p = prose(guide('international-rights-and-domestic-law'));
    expect(p).toMatch(/No international agreement shall be part of the domestic law/);
    expect(p).toMatch(/vinden geen toepassing/);
  });

  it('catches the stance when planted', () => {
    expect(
      catches(
        [/(?:a|the) treaty (?:is|becomes) (?:automatically )?part of (?:the )?domestic law/i],
        'Once ratified, the treaty is automatically part of the domestic law of every signatory.',
      ),
    ).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* 20. "Citizen" is never the default rights-holder.                           */
/* -------------------------------------------------------------------------- */

describe('rights-holder scope is preserved', () => {
  it('never says citizens hold a right the cited text words more widely', () => {
    for (const pattern of [
      /citizens have the right to (?:remain silent|privacy|a fair (?:trial|hearing)|liberty)/i,
      /every citizen has the right to (?:remain silent|privacy|liberty|a fair trial)/i,
      /(?:the )?right belongs to citizens/i,
      /citizens are (?:presumed innocent|entitled to counsel)/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  /*
   * A page-level check, and the shape matters.
   *
   * The first draft of this guard read every sentence containing "citizen" and required each to
   * carry an attribution marker from an allowlist. That produced a growing list of exceptions for
   * sentences that were correct — naming the error, quoting a text, describing what a summary
   * erases — which is the signature of a guard testing the wrong thing. The assertion risk is
   * already covered above, sentence by sentence, with a live-catch.
   *
   * What is left to check is attribution at the level the reader meets it: a page that uses
   * "citizen" as a holder term must say on that page that the wording varies between texts, and
   * must not claim the textual holder is the operative one.
   */
  it('every page using "citizen" as a holder says the wording varies and does not claim it is operative', () => {
    for (const slug of WAVE_21) {
      const p = prose(guide(slug));
      if (!/\bcitizens?\b/i.test(p)) continue;
      expect(p, `${slug} uses "citizen" without recording that holder wording varies`).toMatch(
        /every person|everyone|any person|all persons|no person|wording|holder|Toda persona|Jede Person/i,
      );
      expect(p, `${slug} uses "citizen" without disclaiming judicial construction`).toMatch(
        /not researched|construed|interpretation|text says|constitutional TEXT|what the texts say/i,
      );
    }
  });

  it('the citizen-as-holder assertion guard is not vacuous', () => {
    const ASSERTIONS = [
      /citizens have the right to (?:remain silent|privacy|a fair (?:trial|hearing)|liberty)/i,
      /every citizen has the right to (?:remain silent|privacy|liberty|a fair trial)/i,
      /(?:the )?right belongs to citizens/i,
      /citizens are (?:presumed innocent|entitled to counsel)/i,
    ];
    for (const planted of [
      'Citizens have the right to remain silent when questioned.',
      'Every citizen has the right to privacy in their home.',
      'The right belongs to citizens of the state.',
      'Citizens are presumed innocent until proved guilty.',
    ]) {
      expect(
        ASSERTIONS.some((p) => p.test(planted) && !deniesForward(planted, p)),
        `the guard failed to catch: ${planted}`,
      ).toBe(true);
    }
    expect(
      ASSERTIONS.some((p) =>
        p.test(
          'Ireland words it for the citizen, but the right belongs to citizens only in the text.',
        ),
      ),
      'the guard must still fire inside an attributed sentence, which is why the page never writes one',
    ).toBe(true);
  });

  it('states the Irish right/remedy split, which is the wave’s sharpest scope finding', () => {
    const p = prose(guide('who-a-constitutional-right-belongs-to'));
    expect(p).toMatch(/No citizen shall be deprived of his personal liberty/);
    expect(p).toMatch(/by or on behalf of any person/);
  });

  it('states the German holder distinction from the authoritative German text', () => {
    const p = prose(guide('who-a-constitutional-right-belongs-to'));
    expect(p).toMatch(/Alle Deutschen/);
    expect(p).toMatch(/Jeder hat das Recht/);
    expect(p).toMatch(/Die Wohnung ist unverletzlich/);
  });

  it('refuses both universal generalisations about the holder', () => {
    const m = guide('who-a-constitutional-right-belongs-to').misconceptions;
    expect(m.some((x) => /belong to citizens/i.test(x.claim))).toBe(true);
    expect(m.some((x) => /belong to everyone/i.test(x.claim))).toBe(true);
  });

  it('never claims the textual holder is the operative holder', () => {
    const p = prose(guide('who-a-constitutional-right-belongs-to'));
    expect(p).toMatch(/was not researched|not researched/i);
    expect(p).toMatch(/construed|interpretation/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 21-25. Safety. Separate unit set; directive checks read forward.            */
/* -------------------------------------------------------------------------- */

const OPERATIONAL = [
  /how to (?:avoid|evade|resist|defeat|frustrate) (?:an? )?(?:arrest|search|warrant|seizure|检查)/i,
  /how to (?:conceal|destroy|wipe|delete|hide) evidence/i,
  /(?:avoid|evade|defeat|bypass) (?:a )?(?:checkpoint|surveillance|forensic|interception|wiretap)/i,
  /(?:encrypt|wipe|factory[- ]reset|overwrite) (?:your|the) (?:device|phone|drive|data) (?:to|so|before)/i,
  /(?:what|things) (?:to|you should) say (?:to|when) (?:the )?police/i,
  /tell (?:the )?(?:police|officers) that you/i,
  /refuse to (?:open|unlock|consent)/i,
  /do not (?:answer|open the door|consent|comply)/i,
  /interrogation (?:tactics?|techniques?) (?:include|are|work by)/i,
  /(?:anti-forensic|counter-forensic|anti-surveillance) (?:technique|method|measure)s?/i,
];

describe('the cluster contains no operational or evasion guidance', () => {
  it.each(OPERATIONAL.map((p) => [p.source, p] as const))(
    'contains nothing matching %s',
    (_label, pattern) => {
      const hits = SAFETY_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(hits, `operational content: ${hits[0]?.slice(0, 140)}`).toEqual([]);
    },
  );

  it('the directive guard catches a planted instruction', () => {
    const planted = 'How to defeat a search warrant is explained in the next section.';
    expect(OPERATIONAL.some((p) => p.test(planted) && !deniesForward(planted, p))).toBe(true);
  });

  /*
   * The finding mutation proof W20-M4 forced, re-proved on this wave's own guard.
   *
   * A directive check reads only the text BEFORE the match, so an instruction planted after any
   * negation clears itself when the whole passage is one unit. The guard defends against that by
   * splitting into SENTENCES, and this test exercises the guard as it actually runs rather than
   * on an unsplit string — which is the difference between proving the guard and proving nothing.
   */
  it('the directive guard catches an instruction planted after a negation', () => {
    const planted =
      'This is not legal advice. How to conceal evidence before a search is described below.';
    const asOneUnit = OPERATIONAL.some((p) => p.test(planted) && !deniesForward(planted, p));
    const asSentences = sentences(planted).some((u) =>
      OPERATIONAL.some((p) => p.test(u) && !deniesForward(u, p)),
    );
    expect(asOneUnit, 'unsplit, the negation would launder the instruction').toBe(false);
    expect(asSentences, 'split into sentences, the guard must catch it').toBe(true);
  });

  it('the directive guard does NOT fire on a disclaimer that names what it refuses', () => {
    const disclaimer =
      'It describes nothing about how to conceal evidence and nothing about how to evade a search.';
    expect(OPERATIONAL.every((p) => !p.test(disclaimer) || deniesForward(disclaimer, p))).toBe(
      true,
    );
  });

  it.each([...INVESTIGATIONS, 'the-right-to-silence'])(
    '%s carries an explicit scope disclaimer',
    (slug) => {
      const g = guide(slug);
      const callouts = allBlocks(g).filter((b) => b.kind === 'callout');
      const scope = callouts.filter(
        (b) => b.kind === 'callout' && (b.variant === 'scope' || b.variant === 'safety'),
      );
      expect(scope.length, `${slug} has no scope or safety callout`).toBeGreaterThan(0);
      expect(prose(g)).toMatch(/not legal advice/i);
    },
  );

  it('the three highest-risk pages say what they deliberately do not describe', () => {
    for (const slug of INVESTIGATIONS) {
      expect(prose(guide(slug)), `${slug}`).toMatch(
        /describes no (?:search procedure|technique|investigative technique)|no operational detail|nothing about how any authorisation is obtained|no means of interception/i,
      );
    }
  });

  it('gives no individualised legal advice anywhere', () => {
    for (const pattern of [
      /you should (?:refuse|decline|insist|demand|say)/i,
      /if you are (?:arrested|stopped|searched), (?:you|do)/i,
      /your rights? (?:are|include) (?:the )?right to/i,
    ]) {
      const hits = SAFETY_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(hits, `individualised advice: ${hits[0]?.slice(0, 130)}`).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 26-27. Country claims carry country-scoped evidence.                        */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  Switzerland: 'CH',
  Spain: 'ES',
  Czechia: 'CZ',
  Ireland: 'IE',
  Canada: 'CA',
  Brazil: 'BR',
  Japan: 'JP',
  Netherlands: 'NL',
  'South Africa': 'ZA',
  Kenya: 'KE',
  France: 'FR',
  Australia: 'AU',
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

function disclaimsEstablishment(sentence: string): boolean {
  return /\bnot established\b|\bno source\b|\bwas not researched\b|\bwere not researched\b|\bis not evidence\b|\bestablishes no\b|\bsupports? no\b|\bnothing here\b|\bno claim is made\b|\bnot described\b|\bnot researched\b/i.test(
    sentence,
  );
}

describe('every country claim rests on a country-scoped source', () => {
  it.each(WAVE_21)('%s cites a scoped source for every country it claims about', (slug) => {
    const g = guide(slug);
    const claimed = sentences(prose(g))
      .filter((u) => !disclaimsEstablishment(u))
      .join('\n');
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      if (!new RegExp(`\\b${country}\\b`).test(claimed)) continue;
      expect(
        hasSourceFor(g.sources, iso, country),
        `${slug} claims about ${country} with no source scoped to or naming it`,
      ).toBe(true);
    }
  });

  it('rejects a treaty standing in for a country', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(
        hasSourceFor(['iccpr', 'echr-convention'], iso, country),
        `${country} laundered through a treaty`,
      ).toBe(false);
    }
  });

  it.each(WAVE_21)('%s sources every block it marks as fact', (slug) => {
    const unsourced = allBlocks(guide(slug))
      .filter((b) => b.kind === 'paragraph' && b.claim === 'fact')
      .filter((b) => !((b as { sources?: string[] }).sources ?? []).length)
      .map((b) => (b as { text: string }).text.slice(0, 80));
    expect(unsourced, `${slug} asserts a fact with no source`).toEqual([]);
  });

  it.each(WAVE_21)('%s backs every country example with a scoped source', (slug) => {
    const g = guide(slug);
    const scopes = new Set(g.sources.map((id) => getSource(id)?.jurisdiction));
    for (const example of [...(g.countryExamples ?? []), ...(g.counterExamples ?? [])]) {
      const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug);
      expect(dossier, `${slug} names unknown country ${example.countrySlug}`).toBeDefined();
      expect(
        scopes.has(dossier!.countryCode),
        `${slug} example ${example.countrySlug} lacks a ${dossier!.countryCode} source`,
      ).toBe(true);
    }
  });

  it('every non-English phrase quoted is findable in a source the page cites', () => {
    const PHRASES: Record<string, string> = {
      Kerngehalt: 'ch-constitution',
      'Jede Person': 'ch-constitution',
      'Alle Deutschen': 'de-grundgesetz',
      'Die Wohnung ist unverletzlich': 'de-grundgesetz',
      Wesensgehalt: 'de-grundgesetz',
      Briefgeheimnis: 'de-grundgesetz',
      'contenido esencial': 'es-constitution',
      'Toda persona': 'es-constitution',
      'Los españoles': 'es-constitution',
      'El domicilio es inviolable': 'es-constitution',
      'permanecer calado': 'br-cf-1988',
      'asilo inviolável': 'br-cf-1988',
      'aplicação imediata': 'br-cf-1988',
      'vinden geen toepassing': 'nl-constitution',
      'machtiging van de rechter': 'nl-constitution',
      'persoonlijke levenssfeer': 'nl-constitution',
      'schriftelijk verslag': 'nl-constitution',
    };
    for (const [phrase, sourceId] of Object.entries(PHRASES)) {
      for (const slug of WAVE_21) {
        const g = guide(slug);
        if (!prose(g).includes(phrase)) continue;
        expect(g.sources, `${slug} quotes "${phrase}" without citing ${sourceId}`).toContain(
          sourceId,
        );
        const record = getSource(sourceId);
        expect(
          record?.note?.includes(phrase),
          `${sourceId} does not carry the phrase "${phrase}" it is cited for`,
        ).toBe(true);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 28. No duplicate question ownership.                                        */
/* -------------------------------------------------------------------------- */

describe('nothing already owned is restated', () => {
  it('publishes no route the cannibalization audit rejected', () => {
    for (const forbidden of [
      '/justice/rights-and-state-power',
      '/justice/why-fundamental-rights-matter',
      '/justice/rule-of-law-and-rights',
      '/justice/protection-against-arbitrary-power',
      '/justice/effective-remedies',
      '/justice/right-to-due-process',
      '/defence/privilege-against-self-incrimination',
      '/defence/right-to-be-informed-of-an-accusation',
      '/investigations/judicial-authorisation-of-searches',
      '/investigations/right-to-privacy',
      '/justice/necessity-in-public-law',
      '/justice/qualified-and-absolute-rights',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, `${forbidden} duplicates an owned question`).not.toContain(
        forbidden,
      );
    }
  });

  it('publishes no route the audit deferred for want of evidence', () => {
    for (const forbidden of [
      '/investigations/digital-investigations-and-rights',
      '/investigations/surveillance-and-legal-authority',
      '/investigations/bodily-samples-and-legal-safeguards',
      '/investigations/dna-and-legal-safeguards',
      '/law-enforcement/police-discretion-and-the-law',
      '/courts/independent-and-impartial-tribunal',
      '/justice/freedom-of-assembly',
      '/justice/reason-giving-and-public-authority',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, `${forbidden} was deferred, not published`).not.toContain(
        forbidden,
      );
    }
  });

  it('every Wave 21 question is distinct from every other guide’s question', () => {
    const norm = (q: string) =>
      q
        .toLowerCase()
        .replace(/[^a-z ]/g, '')
        .trim();
    const questions = new Map<string, string>();
    for (const g of ALL_GUIDES) {
      const key = norm(g.question);
      const prior = questions.get(key);
      expect(prior, `${g.slug} duplicates the question of ${prior}`).toBeUndefined();
      questions.set(key, g.slug);
    }
  });

  it('defers to the pages that own the neighbouring questions rather than restating them', () => {
    expect(prose(guide('how-soon-a-detained-person-sees-a-judge'))).toMatch(
      /\/justice\/reviewing-detention/,
    );
    expect(prose(guide('how-a-right-can-be-limited'))).toMatch(
      /\/justice\/which-rights-can-never-be-suspended/,
    );
    expect(prose(guide('what-proportionality-requires'))).toMatch(
      /\/law-enforcement\/police-use-of-force/,
    );
    expect(prose(guide('equality-of-arms'))).toMatch(/\/justice\/equality-before-the-law/);
  });

  it('does not reproduce the lawful-judge material Wave 20 owns', () => {
    const p = prose(guide('why-hearings-are-public'));
    expect(p).not.toMatch(/Ausnahmegerichte/);
    expect(p).not.toMatch(/tribunal de exceção/);
  });
});

/* -------------------------------------------------------------------------- */
/* 29-30. No invented institution or type; no unsupported restricted claim.    */
/* -------------------------------------------------------------------------- */

describe('the wave invents no entity and adds no unsupported statistic', () => {
  it('creates no institution type and no profession', () => {
    for (const slug of [
      'constitutional-rights-body',
      'rights-commission',
      'privacy-authority',
      'data-protection-authority',
      'warrant-court',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
      expect(INSTITUTION_TYPES.some((i) => i.slug === slug)).toBe(false);
    }
    for (const slug of ['constitutional-lawyer', 'rights-officer', 'privacy-officer']) {
      expect(PROFESSIONS.some((p) => p.slug === slug)).toBe(false);
    }
  });

  it('adds no ScheduledChange, because nothing researched had a future commencement', () => {
    expect(SCHEDULED_CHANGES.length).toBe(4);
  });

  it('trips no restricted-phrasing pattern', () => {
    for (const slug of WAVE_21) {
      const hits = findRestrictedPhrasing(prose(guide(slug)));
      expect(
        hits,
        `${slug} uses restricted phrasing: ${JSON.stringify(hits).slice(0, 200)}`,
      ).toEqual([]);
    }
  });

  it('carries no ranking, score or prevalence claim', () => {
    for (const pattern of [
      /\b(?:most|least) (?:protective|rights-respecting|free|democratic)\b/i,
      /\branks? (?:first|second|third|highest|lowest|above|below)\b/i,
      /\b(?:democracy|freedom|rights|rule[- ]of[- ]law) (?:score|index|ranking)\b/i,
      /\b\d+(?:\.\d+)?\s*(?:%|per cent|percent) of (?:arrests|searches|detentions|cases)\b/i,
      /\b(?:wrongful convictions?|arbitrary detentions?) (?:number|are estimated|per year)\b/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });

  it('is politically neutral: no government is praised or condemned', () => {
    for (const pattern of [
      /\b(?:authoritarian|dictatorial|repressive|tyrannical) (?:government|state|regime)\b/i,
      /\b(?:better|worse) (?:government|democracy|country) than\b/i,
      /this (?:system|country) (?:fails|succeeds) to protect/i,
      /\bshould be (?:reformed|abolished|condemned)\b/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Sources                                                                     */
/* -------------------------------------------------------------------------- */

describe('the Wave 21 source base is sound', () => {
  it('adds the two records the corpus genuinely lacked', () => {
    for (const id of ['cz-listina', 'us-bill-of-rights']) {
      const s = getSource(id);
      expect(s, `${id} missing`).toBeDefined();
      expect(s?.verificationMethod).toBe('content-confirmed');
      expect(s?.note).toMatch(/WAVE 21 ADDITION/);
    }
  });

  it('keeps the Czech Charter distinct from the Czech Constitution', () => {
    const listina = getSource('cz-listina');
    const ustava = getSource('cz-constitution');
    expect(listina?.url).not.toBe(ustava?.url);
    expect(listina?.note).toMatch(/SEPARATE INSTRUMENT/i);
  });

  it('extends rather than duplicates the twelve constitutions already held', () => {
    for (const id of [
      'de-grundgesetz',
      'ch-constitution',
      'za-constitution',
      'ke-constitution',
      'ca-charter-1982',
      'br-cf-1988',
      'es-constitution',
      'jp-constitution',
      'nl-constitution',
      'ie-constitution',
      'echr-convention',
      'iccpr',
    ]) {
      const s = getSource(id);
      expect(s?.note, `${id} was not extended`).toMatch(/WAVE 21 ADDITION/);
      const sameUrl = SOURCES.filter((x) => x.url && x.url === s?.url);
      expect(sameUrl.length, `${id} was duplicated rather than extended`).toBe(1);
    }
  });

  it('records every verified negative as a fact about a text, never about a legal system', () => {
    for (const id of ['de-grundgesetz', 'echr-convention', 'iccpr', 'us-bill-of-rights']) {
      const note = getSource(id)?.note ?? '';
      expect(note, `${id} states a negative without scoping it`).toMatch(
        /VERIFIED NEGATIVE|verified NEGATIVE/,
      );
      expect(note).toMatch(
        /about the text|about this constitutional text|textual only|about those texts|absent from this constitutional text|fact about|not evidence of any state|textual only|is textual only|about the legal system/i,
      );
    }
  });

  it.each(WAVE_21)('%s cites at least three sources', (slug) => {
    expect(guide(slug).sources.length).toBeGreaterThanOrEqual(3);
    for (const id of guide(slug).sources)
      expect(getSource(id), `${slug} -> ${id}`).toBeDefined();
  });
});
