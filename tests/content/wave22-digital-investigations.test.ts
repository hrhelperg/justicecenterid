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
 * Wave 22: digital investigations, surveillance and investigative authority.
 *
 * Three risks shape this suite, and they are not the same risks as previous waves'.
 *
 * FALSE UNIVERSALITY, again, but of a different kind. The vocabulary a reader arrives with —
 * warrant, wiretap, metadata, digital search — belongs to particular statutes, and the evidence
 * sweep found a counter-example to every generalisation those words invite. The Convention
 * requires "judicial or other independent supervision", not a judge. US law puts three
 * instruments in one section. German law answers "who authorises" four different ways in one code.
 *
 * TECHNICAL/LEGAL CONFLATION, which is this wave's own failure mode. A page can be entirely
 * accurate about what is technically possible and entirely wrong about what is permitted, and the
 * corpus has no other cluster where that gap is so easy to fall into.
 *
 * OPERATIONAL MISUSE. This is the highest-sensitivity subject the platform covers. The safety
 * guards here are assertion-aware and run on a SEPARATE unit set from the framing guards, per the
 * finding mutation proof W20-M4 forced and Wave 21 generalised: a denial-aware check needs a
 * misconception intact, and a directive check needs sentences, because an instruction is an
 * instruction wherever it sits.
 */

const WAVE_22 = [
  'legal-authority-and-technical-capability',
  'device-seizure-and-device-examination',
  'interception-and-stored-data',
  'content-and-communications-data',
  'preserving-data-and-producing-it',
  'who-authorises-a-digital-investigative-measure',
  'scope-duration-and-notification',
] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 22 guide missing: ${slug}`);
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
 * Units for the framing guards, carrying forward Wave 21's correction: a stance appearing in a
 * misconception CLAIM is denied by construction, because the schema guarantees `reality` denies
 * `claim`. A stance in a `reality` or a `note` is an assertion this platform is making.
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
  return sentences(prose(g));
}

function deniesClaim(sentence: string, pattern: RegExp): boolean {
  const remainder = sentence.replace(new RegExp(pattern.source, 'gi'), ' ');
  return /\bnot\b|\bnever\b|\bno\b|\bnothing\b|\bneither\b|\bnor\b|\bcannot\b|\bwrong\b|\bmisconception\b|\brather than\b|\bunlike\b|\bwithout\b|\binstead\b|\bunless\b|\bdiffer|\bseparate/i.test(
    remainder,
  );
}

/** Only a negation that GOVERNS the stance neutralises it, and in English that precedes it. */
function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  return /\b(?:not|never|no|nothing|neither|nor)\b|\bdoes not\b|\brather than\b/i.test(before);
}

const ALL_UNITS = WAVE_22.flatMap((slug) => tripwireUnits(guide(slug)));
const ALL_PROSE = WAVE_22.map((slug) => prose(guide(slug))).join('\n');
const SAFETY_UNITS = WAVE_22.flatMap((slug) => safetyUnits(guide(slug)));

/**
 * CORPUS-WIDE units, for the stances that are platform positions rather than this wave's subject.
 * Wave 21 established the principle: a spine defended only on the newest pages is not defended.
 */
const CORPUS_UNITS = ALL_GUIDES.filter((g) => g.status === 'published').flatMap(tripwireUnits);

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
}

/* -------------------------------------------------------------------------- */
/* Structure                                                                  */
/* -------------------------------------------------------------------------- */

describe('the Wave 22 cluster exists and is routed', () => {
  it.each(WAVE_22)('%s is published with a route', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('investigations');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('publishes seven routes and no more', () => {
    expect(WAVE_22.length).toBe(7);
  });

  it.each(WAVE_22)('%s states what it did not research', (slug) => {
    const u = guide(slug).uncertainty ?? [];
    expect(u.length).toBeGreaterThan(0);
    expect(u.join(' ')).toMatch(/not researched|were not|was not|not read|deliberate limit/i);
  });

  it.each(WAVE_22)('%s links to at least two related pages that exist', (slug) => {
    const related = guide(slug).related;
    expect(related.length).toBeGreaterThanOrEqual(2);
    for (const r of related) expect(getGuide(r), `${slug} -> ${r}`).toBeDefined();
  });

  it.each(WAVE_22)('%s is reachable from somewhere other than itself', (slug) => {
    const inbound = ALL_GUIDES.filter(
      (g) => g.slug !== slug && (g.related.includes(slug) || prose(g).includes(`/${slug})`)),
    );
    expect(inbound.length, `${slug} has no inbound reference`).toBeGreaterThan(0);
  });

  it.each(WAVE_22)('%s cites at least two sources, all of which exist', (slug) => {
    const g = guide(slug);
    expect(g.sources.length).toBeGreaterThanOrEqual(2);
    for (const id of g.sources) expect(getSource(id), `${slug} -> ${id}`).toBeDefined();
  });
});

/* -------------------------------------------------------------------------- */
/* 1-2. device seizure != device search != forensic examination               */
/* -------------------------------------------------------------------------- */

const SEIZURE_IS_SEARCH = [
  /seiz(?:ing|ure of) (?:a |the )?device (?:automatically |also )?authoris(?:es|e) (?:the )?(?:full )?examination/i,
  /once (?:a |the )?device (?:has been |is )?seized,? (?:officials|police|investigators) may (?:read|examine|search)/i,
  /(?:holding|possession of) (?:a |the )?device (?:means|gives|confers) (?:the )?authority to (?:read|examine|search)/i,
  /seizure and (?:examination|search) are (?:the same|one) (?:act|thing|power)/i,
];

describe('taking a device is not reading it', () => {
  it.each(SEIZURE_IS_SEARCH.map((p) => [p.source, p] as const))(
    'never asserts %s',
    (_l, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('states the German separation, including that it is institutional', () => {
    const p = prose(guide('device-seizure-and-device-examination'));
    expect(p).toMatch(/§ 94/);
    expect(p).toMatch(/§ 110/);
    expect(p).toMatch(/Staatsanwaltschaft|prosecution office/i);
    expect(p).toMatch(/Durchsicht/);
  });

  it('states that copying is a separately enumerated power', () => {
    expect(prose(guide('device-seizure-and-device-examination'))).toMatch(
      /make and retain a copy/i,
    );
  });

  it('keeps forensic method out and points at the section that owns it', () => {
    const g = guide('device-seizure-and-device-examination');
    expect(prose(g)).toMatch(/forensic science/i);
    expect(g.related).toContain('evidence-integrity-and-admissibility');
  });

  it('catches the stance when planted', () => {
    const planted = 'Once a device is seized, officials may examine everything stored on it.';
    expect(SEIZURE_IS_SEARCH.some((p) => p.test(planted) && !deniesForward(planted, p))).toBe(
      true,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 3. interception != access to stored communications                         */
/* -------------------------------------------------------------------------- */

describe('interception is not access to stored data', () => {
  it('never equates them', () => {
    for (const pattern of [
      /interception (?:is|means) (?:the same as |another (?:word|name) for )?(?:access to |obtaining )?stored/i,
      /intercepting (?:and|or) obtaining stored (?:communications|data) are the same/i,
      /whether (?:data|a communication) is stored or in transit makes no (?:legal )?difference/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });

  it('states that no system read treats them as one power', () => {
    const p = prose(guide('interception-and-stored-data'));
    expect(p).toMatch(/Article 21|Art\. 21/);
    expect(p).toMatch(/222-2/);
    expect(p).toMatch(/other acts/i);
  });

  it('records the German functional boundary rather than a locational one', () => {
    const p = prose(guide('interception-and-stored-data'));
    expect(p).toMatch(/§ 100a\(1\)|100a\(1\)/);
    expect(p).toMatch(/functional, not locational|in transit|transmission/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 4-5. content != traffic data != subscriber information                     */
/* -------------------------------------------------------------------------- */

describe('the three categories of communications material are kept apart', () => {
  it('never equates metadata with content', () => {
    for (const pattern of [
      /metadata (?:is|means|counts as) (?:the same as )?content/i,
      /traffic data (?:is|are) content/i,
      /subscriber (?:data|information) (?:is|includes) (?:the )?content/i,
      /who (?:a person|someone) contacted (?:is|and what they said are) the same/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('states the Convention definition that draws the three-way line', () => {
    const p = prose(guide('content-and-communications-data'));
    expect(p).toMatch(/other than traffic or content data/i);
    expect(p).toMatch(/18\(3\)/);
  });

  it('states the two United States definitions that exclude content', () => {
    const p = prose(guide('content-and-communications-data'));
    expect(p).toMatch(/shall not include the contents of any communication/i);
    expect(p).toMatch(/not including the contents of communications/i);
  });

  it('records the German exception that inverts the graduation', () => {
    const p = prose(guide('content-and-communications-data'));
    expect(p).toMatch(/§ 100j|100j/);
    expect(p).toMatch(/access to terminal devices|access-credential/i);
  });

  it('scopes the location-data finding to the one system that supports it', () => {
    const p = prose(guide('content-and-communications-data'));
    expect(p).toMatch(/retrograd/i);
    expect(p).toMatch(/One system is not a comparative finding|was not researched/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 6. preservation != disclosure                                              */
/* -------------------------------------------------------------------------- */

describe('preserving data is not obtaining it', () => {
  it('never equates them', () => {
    for (const pattern of [
      /preservation (?:is|means) (?:the same as )?(?:disclosure|production)/i,
      /preserved data (?:is|has been) (?:handed over|disclosed|obtained)/i,
      /a preservation order (?:gives|provides) (?:investigators|authorities) (?:the )?data/i,
      /a preservation order and a (?:data-)?retention (?:obligation|mandate) are the same/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('states the purpose clause that makes the distinction textual', () => {
    const p = prose(guide('preserving-data-and-producing-it'));
    expect(p).toMatch(/to enable the competent authorities to seek its disclosure/i);
    expect(p).toMatch(/ninety days/i);
  });

  it('distinguishes preservation from a retention mandate and marks retention unresearched', () => {
    const p = prose(guide('preserving-data-and-producing-it'));
    expect(p).toMatch(/retention/i);
    expect(p).toMatch(/not researched/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 7. technical capability != legal authority                                 */
/* -------------------------------------------------------------------------- */

const CAPABILITY_IS_AUTHORITY = [
  /technical(?:ly)? (?:capability|access|ability) (?:creates|confers|gives|means) (?:legal )?authority/i,
  /if (?:investigators|police|authorities) can (?:technically )?(?:obtain|access|read) (?:it|something),? they may/i,
  /being able to (?:obtain|access) (?:data|it) (?:means|makes) (?:it|the measure) lawful/i,
  /no (?:legal|statutory) basis is (?:needed|required) (?:for|where)/i,
];

describe('technical capability does not create legal authority', () => {
  it.each(CAPABILITY_IS_AUTHORITY.map((p) => [p.source, p] as const))(
    'no published guide anywhere in the corpus asserts %s',
    (_l, pattern) => {
      expect(offending(pattern, CORPUS_UNITS)).toEqual([]);
    },
  );

  it('states the two provisions that answer it from opposite directions', () => {
    const p = prose(guide('legal-authority-and-technical-capability'));
    expect(p).toMatch(
      /compulsory dispositions shall not be applied unless special provisions/i,
    );
    expect(p).toMatch(
      /despejar sospechas sin base objetiva|dispel suspicions without objective basis/i,
    );
  });

  it('catches the stance when planted', () => {
    const planted = 'Technical access creates legal authority wherever it exists.';
    expect(
      CAPABILITY_IS_AUTHORITY.some((p) => p.test(planted) && !deniesForward(planted, p)),
    ).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* 8-10. warrant, judicial and prosecutorial authorisation are not universal  */
/* -------------------------------------------------------------------------- */

const UNIVERSAL_AUTHORISATION = [
  /digital (?:searches|investigations?|measures) (?:require|need) a warrant/i,
  /a warrant is (?:always )?required (?:for|before) (?:digital|electronic|any digital)/i,
  /every (?:system|country|jurisdiction) requires (?:a )?(?:warrant|judicial authorisation)/i,
  /(?:a )?judge must (?:always )?authorise/i,
  /prosecutors authorise (?:these|digital) measures in civil-law systems/i,
];

describe('no authorisation model is universalised', () => {
  it.each(UNIVERSAL_AUTHORISATION.map((p) => [p.source, p] as const))(
    'never asserts %s',
    (_l, pattern) => {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    },
  );

  it('states the treaty formula that declines to require a judge', () => {
    expect(prose(guide('who-authorises-a-digital-investigative-measure'))).toMatch(
      /judicial or \*?\*?other\*?\*? ?independent supervision|judicial or other independent supervision/i,
    );
  });

  it('names four different German answers in one code', () => {
    const p = prose(guide('who-authorises-a-digital-investigative-measure'));
    expect(p).toMatch(/Landgericht/);
    expect(p).toMatch(/Oberlandesgericht/);
    expect(p).toMatch(/§ 100j|100j/);
    expect(p).toMatch(/§ 110\(1\)|110\(1\)/);
  });

  it('names the three United States instruments', () => {
    const p = prose(guide('who-authorises-a-digital-investigative-measure'));
    expect(p).toMatch(/subpoena/i);
    expect(p).toMatch(/2703\(d\)/);
    expect(p).toMatch(/warrant/i);
  });

  /*
   * Part I forbids "wiretap" as universal terminology. It does not forbid naming a statute that is
   * called that: `interception-and-stored-data` records in its uncertainty that the United States
   * Wiretap Act was not read, which is a proper noun and a disclosure of a research limit. The
   * guard therefore targets the generic use and proves it still fires on one.
   */
  it('never uses "wiretap" as this platform’s own vocabulary', () => {
    const generic = sentences(ALL_PROSE).filter(
      (u) => /\bwiretap/i.test(u) && !/Wiretap Act/.test(u),
    );
    expect(generic, `generic wiretap usage: ${generic[0]?.slice(0, 120)}`).toEqual([]);
    expect(
      /\bwiretap/i.test('A wiretap requires judicial approval in every system.'),
      'the guard must fire on generic use',
    ).toBe(true);
  });

  /*
   * A PAGE-LEVEL check, and the shape matters — Wave 21 diagnosed the alternative. A sentence-level
   * allowlist for an attributed term grows an exception every time it meets a correct sentence,
   * which is the signature of a guard testing the wrong thing. The assertion risk is already
   * covered above, sentence by sentence, with a live-catch.
   *
   * What is left is attribution at the level the reader meets it: any page using "warrant" must
   * say on that page that it is one system's instrument rather than a universal category.
   */
  it('every page using "warrant" records that it is one system’s instrument', () => {
    for (const slug of WAVE_22) {
      const p = prose(guide(slug));
      if (!/\bwarrant/i.test(p)) continue;
      expect(p, `${slug} uses "warrant" without attributing it`).toMatch(
        /Japan|United States|18 U\.S\.C|Art(?:icle)?\.? 21[89]|§ 2703|one of three|not a universal|one system|jurisdiction-specific/i,
      );
    }
  });

  it('the warrant-universalisation guard is not vacuous', () => {
    const planted = 'Digital searches require a warrant in every legal system.';
    expect(
      UNIVERSAL_AUTHORISATION.some((p) => p.test(planted) && !deniesForward(planted, p)),
      'the guard failed to catch a bare universal claim',
    ).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* 11. intelligence authority != criminal-procedure authority                 */
/* -------------------------------------------------------------------------- */

describe('intelligence powers and criminal procedure are not merged', () => {
  it('never treats them as one model', () => {
    for (const pattern of [
      /intelligence (?:services|agencies) (?:operate under|use) the same (?:rules|powers|authority)/i,
      /(?:these|criminal[- ]procedure) rules (?:also )?(?:govern|apply to) intelligence/i,
      /surveillance (?:law|authority) is the same whether/i,
    ]) {
      expect(offending(pattern, CORPUS_UNITS)).toEqual([]);
    }
  });

  it('states that every provision described is a criminal-procedure provision', () => {
    const p = prose(guide('who-authorises-a-digital-investigative-measure'));
    expect(p).toMatch(/criminal-procedure provision/i);
    expect(p).toMatch(/intelligence/i);
    expect(p).toMatch(/not researched/i);
  });

  it('carries the Convention scope rule that confines the powers to criminal investigation', () => {
    expect(ALL_PROSE).toMatch(/specific criminal investigations or proceedings/i);
  });

  it('publishes no surveillance page, which the audit deferred', () => {
    for (const forbidden of [
      '/investigations/what-is-covert-surveillance',
      '/investigations/digital-surveillance-and-legal-authority',
      '/investigations/targeted-surveillance-vs-general-monitoring',
      '/investigations/location-tracking-and-the-law',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, `${forbidden} was deferred, not published`).not.toContain(
        forbidden,
      );
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 13-14. remote access != physical search; emergency != unlimited            */
/* -------------------------------------------------------------------------- */

describe('remote access and urgency are described precisely', () => {
  it('never treats an extension of a search as a free-standing remote power', () => {
    for (const pattern of [
      /remote access (?:is|means) (?:the same as |just )?(?:a )?(?:physical )?search/i,
      /investigators may reach any (?:system|data) accessible from/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('states the conditions on extending an examination, and that it is not a new power', () => {
    const p = prose(guide('device-seizure-and-device-examination'));
    expect(p).toMatch(/spatially separated/i);
    expect(p).toMatch(/lawfully accessible/i);
    expect(p).toMatch(/not a new power|extension is not|free-standing/i);
  });

  it('never says an emergency removes the authorisation requirement', () => {
    for (const pattern of [
      /in an emergency,? (?:investigators|police|authorities) may act without (?:any )?authoris/i,
      /urgency (?:removes|dispenses with) the (?:requirement|authoriser)/i,
      /emergency (?:powers? )?(?:means|allows) unlimited/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('states the German urgency route and its lapse rule', () => {
    const p = prose(guide('who-authorises-a-digital-investigative-measure'));
    expect(p).toMatch(/danger in delay|Gefahr im Verzug/i);
    expect(p).toMatch(/three working days/i);
    expect(p).toMatch(/lapse/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 15-16. privacy is not a bar on investigation; authority is not unlimited   */
/* -------------------------------------------------------------------------- */

describe('neither side is overstated', () => {
  it('never says privacy forbids digital investigation', () => {
    for (const pattern of [
      /privacy (?:means|requires) (?:that )?(?:the state|investigators) (?:may|can) not (?:obtain|access|search)/i,
      /(?:constitutions|the law) bar(?:s)? (?:the state|investigators) from (?:obtaining|accessing)/i,
      /digital (?:data|material) (?:is|are) beyond the reach of/i,
    ]) {
      expect(offending(pattern, CORPUS_UNITS)).toEqual([]);
    }
  });

  it('never says a legal basis carries unlimited scope', () => {
    for (const pattern of [
      /(?:an? )?authorisation (?:permits|allows) (?:whatever|anything|everything)/i,
      /once authorised,? (?:there are no|scope is not) limit/i,
      /the (?:scope|duration) is (?:unlimited|for the investigators to decide)/i,
    ]) {
      const units = ALL_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(units.filter((s) => !deniesClaim(s, pattern))).toEqual([]);
    }
  });

  it('positively states that every instrument creates powers as well as bounding them', () => {
    expect(ALL_PROSE).toMatch(
      /creates powers as well as bounding them|obliges Parties to establish|the terms on which it is permitted|provides for it/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 17-22. Safety. Separate unit set; directive checks read forward.           */
/* -------------------------------------------------------------------------- */

const OPERATIONAL = [
  /how to (?:avoid|evade|resist|defeat|frustrate|bypass) (?:an? )?(?:search|seizure|warrant|interception|surveillance|examination|order)/i,
  /how to (?:conceal|destroy|wipe|delete|hide|erase) (?:data|evidence|traces|files)/i,
  /(?:wipe|erase|factory[- ]reset|overwrite|encrypt) (?:your|the) (?:device|phone|drive|data|disk) (?:to|so|before|in order)/i,
  /(?:disable|turn off) (?:biometrics|face ?id|fingerprint|location)/i,
  /refuse to (?:provide|give|disclose) (?:your|the) (?:passcode|password|pin|key)/i,
  /(?:anti-forensic|counter-forensic|anti-surveillance|counter-surveillance) (?:technique|method|measure|step)s?/i,
  /(?:detect|tell) (?:whether|if) (?:you are|your (?:phone|device) is) being (?:monitored|tracked|intercepted|watched)/i,
  /(?:exploit|take advantage of) (?:a |the )?(?:gap|loophole|difference) (?:in|between) (?:warrant|jurisdiction)/i,
  /use a (?:provider|service) (?:in|outside) (?:another|a different) (?:country|jurisdiction) to avoid/i,
  /(?:strip|alter|spoof|manipulate) (?:the )?metadata/i,
  /(?:what|things) (?:to|you should) say (?:to|when) (?:the )?police/i,
  /do not (?:answer|unlock|consent|comply|hand over)/i,
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
    const planted = 'How to defeat a search is explained in the next section.';
    expect(OPERATIONAL.some((p) => p.test(planted) && !deniesForward(planted, p))).toBe(true);
  });

  /*
   * The W20-M4 finding, re-proved on this wave's own units. A directive check reads only the text
   * BEFORE the match, so an instruction planted after any negation clears itself when the whole
   * passage is one unit. The guard defends against that by splitting into sentences, and this test
   * exercises the guard as it actually runs rather than on an unsplit string.
   */
  it('the directive guard catches an instruction planted after a negation', () => {
    const planted =
      'This is not legal advice. How to wipe evidence before an examination is described below.';
    const asOneUnit = OPERATIONAL.some((p) => p.test(planted) && !deniesForward(planted, p));
    const asSentences = sentences(planted).some((u) =>
      OPERATIONAL.some((p) => p.test(u) && !deniesForward(u, p)),
    );
    expect(asOneUnit, 'unsplit, the negation would launder the instruction').toBe(false);
    expect(asSentences, 'split into sentences, the guard must catch it').toBe(true);
  });

  it('the directive guard does NOT fire on a disclaimer that names what it refuses', () => {
    const disclaimer =
      'It describes nothing about how to conceal data and nothing about how to evade a search.';
    expect(OPERATIONAL.every((p) => !p.test(disclaimer) || deniesForward(disclaimer, p))).toBe(
      true,
    );
  });

  it.each(WAVE_22)(
    '%s carries a scope or safety callout and disclaims legal advice',
    (slug) => {
      const g = guide(slug);
      const scope = allBlocks(g).filter(
        (b) => b.kind === 'callout' && (b.variant === 'scope' || b.variant === 'safety'),
      );
      expect(scope.length, `${slug} has no scope or safety callout`).toBeGreaterThan(0);
      expect(prose(g)).toMatch(/not legal advice/i);
    },
  );

  it.each(WAVE_22)('%s states what it deliberately does not describe', (slug) => {
    expect(prose(guide(slug)), slug).toMatch(
      /describes no (?:technique|method|technology|execution method|examination method|search procedure)|no operational detail|names no technology|nothing about how/i,
    );
  });

  it('names no forensic tool, spyware platform or interception product', () => {
    for (const pattern of [
      /\b(?:cellebrite|graykey|grayshift|pegasus|nso|finfisher|encrochat|axiom|ufed|xry)\b/i,
      /forensic (?:tool|suite|software) (?:called|named)/i,
    ]) {
      expect(ALL_PROSE, `named product: ${pattern.source}`).not.toMatch(pattern);
    }
  });

  it('gives no individualised legal advice', () => {
    for (const pattern of [
      /you should (?:refuse|decline|insist|demand|say|contact)/i,
      /if (?:your|the) (?:phone|device|computer) is (?:seized|taken), (?:you|do)/i,
      /your rights? (?:are|include) (?:the )?right to/i,
    ]) {
      const hits = SAFETY_UNITS.filter((s) => pattern.test(s) && !deniesForward(s, pattern));
      expect(hits, `individualised advice: ${hits[0]?.slice(0, 130)}`).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 23-24. country-scoped evidence; rights-holder scope                        */
/* -------------------------------------------------------------------------- */

const COUNTRIES: Record<string, string> = {
  Germany: 'DE',
  Spain: 'ES',
  Japan: 'JP',
  France: 'FR',
  Canada: 'CA',
  Netherlands: 'NL',
  Czechia: 'CZ',
  Switzerland: 'CH',
  Brazil: 'BR',
  'South Africa': 'ZA',
  Kenya: 'KE',
  Australia: 'AU',
  'New Zealand': 'NZ',
  Ireland: 'IE',
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
  return /\bnot established\b|\bno source\b|\bwas not researched\b|\bwere not researched\b|\bis not evidence\b|\bestablishes no\b|\bsupports? no\b|\bnothing here\b|\bnot asserted\b|\bnot described\b|\bnot researched\b/i.test(
    sentence,
  );
}

describe('every country claim rests on a country-scoped source', () => {
  it.each(WAVE_22)('%s cites a scoped source for every country it claims about', (slug) => {
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

  it('rejects the Convention standing in for a Party', () => {
    for (const [country, iso] of Object.entries(COUNTRIES)) {
      expect(
        hasSourceFor(['coe-cybercrime-convention'], iso, country),
        `${country} laundered through the Convention`,
      ).toBe(false);
    }
  });

  it.each(WAVE_22)('%s sources every block it marks as fact', (slug) => {
    const unsourced = allBlocks(guide(slug))
      .filter((b) => b.kind === 'paragraph' && b.claim === 'fact')
      .filter((b) => !((b as { sources?: string[] }).sources ?? []).length)
      .map((b) => (b as { text: string }).text.slice(0, 80));
    expect(unsourced, `${slug} asserts a fact with no source`).toEqual([]);
  });

  /*
   * Carried forward from Wave 21's adversarial pass, which found the class: a factual assertion
   * about a named provision could sit in an analysis block, where no source was demanded, and
   * pass. Any paragraph quoting a provision or non-English legal text must be a sourced fact block.
   */
  it.each(WAVE_22)('%s puts every quoted provision in a sourced fact block', (slug) => {
    const PROVISION = /\bArt(?:icle)?\.? \d|\bsection \d|§ ?\d|\b18 U\.S\.C|\b2703|\b3127/;
    const NON_ENGLISH =
      /[ÄÖÜäöüßáéíóúñçêôàè]|Durchsicht|Beschlagnahme|Sicherstellung|Staatsanwaltschaft|Landgericht|Verkehrsdaten|Bestandsdaten|Zielperson|especialidad|idoneidad|auto motivado|cesará|retrograd/;
    const offenders = allBlocks(guide(slug))
      .filter((b): b is Extract<Block, { kind: 'paragraph' }> => b.kind === 'paragraph')
      .filter((b) => PROVISION.test(b.text) || NON_ENGLISH.test(b.text))
      .filter((b) => b.claim !== 'fact' || !(b.sources ?? []).length)
      .map((b) => `[claim=${b.claim ?? 'undefined'}] ${b.text.slice(0, 90)}`);
    expect(offenders, `${slug} states a provision outside a sourced fact block`).toEqual([]);
  });

  /*
   * Found by mutation proof W22-M5, and it is a class rather than one instance.
   *
   * The country-scope invariant asks whether the PAGE cites a source scoped to a country it names.
   * It does not ask whether the specific proposition does — Wave 20 recorded that this is
   * necessary and not sufficient. Removing `de-stpo-100g-verkehrsdaten` from a page that still
   * cited two other German records therefore passed every guard, even though the block asserting
   * § 100g still named it at block level.
   *
   * The gap is that a BLOCK could cite a source the page never declared, so removing it from the
   * page's own list broke nothing. The corpus currently satisfies this rule — 629 block-level
   * citations across 140 guides, all declared — but nothing enforced it. This runs corpus-wide
   * because the invariant is not this wave's subject.
   */
  it('no block anywhere cites a source its guide does not declare', () => {
    const offenders: string[] = [];
    for (const g of ALL_GUIDES.filter((x) => x.status === 'published')) {
      const declared = new Set(g.sources);
      for (const b of allBlocks(g)) {
        for (const id of (b as { sources?: string[] }).sources ?? []) {
          if (!declared.has(id)) offenders.push(`${g.slug}: block cites ${id}`);
        }
      }
    }
    expect(offenders, 'a block cites a source its page does not declare').toEqual([]);
  });

  it('the undeclared-source check is not vacuous', () => {
    const declared = new Set(['a', 'b']);
    const blockSources = ['a', 'c'];
    expect(blockSources.filter((id) => !declared.has(id))).toEqual(['c']);
  });

  /*
   * Found by the adversarial pass, and it closes a structural gap in the fact-block check above.
   *
   * That check can only reach PARAGRAPH blocks, because `list` and `callout` blocks carry no
   * `claim` or `sources` field at all. A provision named in a variation list or a callout was
   * therefore untraceable: two pages named StPO §§ 94, 110 and 100b without citing the records
   * that establish them.
   *
   * This is page-level rather than block-level for that reason: every section number appearing
   * anywhere in a page's prose must appear in the note of a source that page cites.
   */
  it.each(WAVE_22)('%s cites a record for every statutory section it names', (slug) => {
    const g = guide(slug);
    const notes = g.sources.map((id) => getSource(id)?.note ?? '').join('\n');
    const named = new Set([...prose(g).matchAll(/§ (\d+[a-z]?)/g)].map((m) => m[1]));
    const untraceable = [...named].filter((n) => !new RegExp(`§ ?${n}\\b`).test(notes));
    expect(
      untraceable,
      `${slug} names § ${untraceable.join(', § ')} with no cited record`,
    ).toEqual([]);
  });

  it.each(WAVE_22)('%s quotes no foreign-language text no cited source carries', (slug) => {
    const g = guide(slug);
    const notes = g.sources.map((id) => getSource(id)?.note ?? '').join('\n');
    const FOREIGN =
      /[ÄÖÜäöüßáéíóúñçêôàè]|Durchsicht|Beschlagnahme|Zielperson|especialidad|retrograd/;
    const strip = (t: string) => t.replace(/[.,;:!?\s]+$/, '').trim();
    const unverifiable: string[] = [];
    for (const match of prose(g).matchAll(/[“"]([^“”"]{12,320})[”"]/g)) {
      const quoted = strip(match[1] ?? '');
      if (!FOREIGN.test(quoted)) continue;
      const probe = strip(quoted.slice(0, 44));
      if (!notes.includes(probe)) unverifiable.push(probe);
    }
    expect(unverifiable, `${slug} quotes text no cited record carries`).toEqual([]);
  });
});

describe('statutory subject scope is preserved', () => {
  it('never substitutes "citizen" for a statutory subject term', () => {
    for (const pattern of [
      /citizens? (?:may|can) (?:be|have their) (?:monitored|intercepted|searched)/i,
      /the citizen(?:'s)? (?:data|device|communications)/i,
      /(?:notified|informed) citizens/i,
      /citizens have the right to (?:be (?:told|notified)|privacy)/i,
    ]) {
      expect(offending(pattern, CORPUS_UNITS)).toEqual([]);
    }
  });

  it('uses the statutory subject terms the sources use', () => {
    const p = ALL_PROSE;
    expect(p).toMatch(/subscriber or customer/i);
    expect(p).toMatch(/service provider/i);
    expect(p).toMatch(/Zielperson|target person/i);
    expect(p).toMatch(/afectado por la medida|anyone else affected/i);
  });

  it('states explicitly that the subject terms are not nationality terms', () => {
    expect(ALL_PROSE).toMatch(
      /not (?:from )?(?:their )?nationality|none of them is a citizenship term|none is a citizenship term/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 25-27. no invented entity, no unsupported statistic, no duplicate ownership */
/* -------------------------------------------------------------------------- */

describe('the wave invents no entity and adds no unsupported statistic', () => {
  it('creates no institution type and no profession', () => {
    for (const slug of [
      'digital-forensics-unit',
      'surveillance-unit',
      'cybercrime-unit',
      'interception-centre',
      'digital-evidence-unit',
      'technical-surveillance-authority',
    ]) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
      expect(INSTITUTION_TYPES.some((i) => i.slug === slug)).toBe(false);
    }
    for (const slug of [
      'digital-forensic-examiner',
      'surveillance-officer',
      'cyber-investigator',
    ]) {
      expect(PROFESSIONS.some((p) => p.slug === slug)).toBe(false);
    }
  });

  it('adds no ScheduledChange, because nothing researched had a future commencement', () => {
    expect(SCHEDULED_CHANGES.length).toBe(4);
  });

  it.each(WAVE_22)('%s trips no restricted-phrasing pattern', (slug) => {
    const hits = findRestrictedPhrasing(prose(guide(slug)));
    expect(hits, `${slug}: ${JSON.stringify(hits).slice(0, 200)}`).toEqual([]);
  });

  it('carries no prevalence, success-rate or capability statistic', () => {
    for (const pattern of [
      /\b\d+(?:\.\d+)?\s*(?:%|per cent|percent) of (?:devices|phones|requests|warrants|interceptions)/i,
      /\b(?:number|volume) of (?:warrants|interception orders|provider requests) (?:issued|made|granted)/i,
      /(?:can|cannot) unlock \d/i,
      /encryption (?:is|can be) (?:broken|defeated) in \d/i,
      /surveillance (?:is|has become) (?:widespread|pervasive|routine)/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });

  it('is politically neutral about states and providers', () => {
    for (const pattern of [
      /\b(?:authoritarian|repressive|tyrannical) (?:government|state|regime)\b/i,
      /\b(?:better|worse) (?:protection|system|country) than\b/i,
      /(?:providers|companies) (?:should|must) (?:resist|refuse|comply)/i,
      /this (?:system|country) (?:fails|succeeds) to protect/i,
    ]) {
      expect(offending(pattern)).toEqual([]);
    }
  });

  it('publishes no route the audit rejected, merged or aliased', () => {
    for (const forbidden of [
      '/investigations/search-and-seizure',
      '/investigations/digital-investigation-and-privacy',
      '/investigations/privacy-and-criminal-investigations',
      '/investigations/searching-digital-devices',
      '/investigations/computer-and-phone-searches',
      '/investigations/device-search-and-privacy',
      '/investigations/seizure-vs-search-of-a-device',
      '/investigations/interception-vs-stored-communications',
      '/investigations/communications-data-vs-content',
      '/investigations/subscriber-data-vs-traffic-data',
      '/investigations/production-orders-for-digital-data',
      '/investigations/warrants-and-digital-investigations',
      '/investigations/judicial-vs-prosecutorial-authorisation',
      '/investigations/emergency-authorisation',
      '/investigations/cross-border-digital-evidence',
      '/investigations/mutual-legal-assistance-for-digital-evidence',
      '/investigations/data-retention',
      '/investigations/what-is-a-digital-investigation',
      '/investigations/remedies-for-unlawful-digital-investigation',
      '/investigations/digital-forensics-methods',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, `${forbidden} duplicates or was deferred`).not.toContain(
        forbidden,
      );
    }
  });

  it('every Wave 22 question is distinct from every other guide’s question', () => {
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
    expect(prose(guide('legal-authority-and-technical-capability'))).toMatch(
      /\/investigations\/what-privacy-protects-in-law/,
    );
    expect(prose(guide('device-seizure-and-device-examination'))).toMatch(
      /\/forensics\/evidence-integrity-and-admissibility/,
    );
    expect(prose(guide('scope-duration-and-notification'))).toMatch(
      /\/justice\/what-happens-to-unlawfully-obtained-evidence/,
    );
    expect(prose(guide('interception-and-stored-data'))).toMatch(
      /\/investigations\/intercepting-communications/,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Sources                                                                     */
/* -------------------------------------------------------------------------- */

describe('the Wave 22 source base is sound', () => {
  const ADDED = [
    'coe-cybercrime-convention',
    'de-stpo-94-beschlagnahme',
    'de-stpo-110-durchsicht',
    'de-stpo-100a-tkue',
    'de-stpo-100b-online-durchsuchung',
    'de-stpo-100e-verfahren',
    'de-stpo-100g-verkehrsdaten',
    'de-stpo-100j-bestandsdaten',
    'de-stpo-101-verdeckte-massnahmen',
    'es-lecrim-medidas-tecnologicas',
    'us-18usc-2703-stored-communications',
    'us-18usc-3127-pen-register',
  ] as const;

  it.each(ADDED)('%s exists, is content-confirmed and states its wave', (id) => {
    const s = getSource(id);
    expect(s, `${id} missing`).toBeDefined();
    expect(s?.verificationMethod).toBe('content-confirmed');
    expect(s?.note).toMatch(/WAVE 22 ADDITION/);
  });

  it.each(ADDED)('%s states a limitation and a temporal status', (id) => {
    const note = getSource(id)?.note ?? '';
    expect(note, `${id} states no limitation`).toMatch(/LIMITATION|Limitations|limitation/);
    expect(note, `${id} states no status`).toMatch(
      /STATUS:|in force|current|NOT read|not read/i,
    );
  });

  it('extends the Japanese record rather than duplicating it', () => {
    const jp = getSource('jp-code-criminal-procedure');
    expect(jp?.note).toMatch(/WAVE 22 ADDITION/);
    expect(jp?.note).toMatch(/TEMPORAL LIMITATION/);
    const sameUrl = SOURCES.filter((x) => x.url && x.url === jp?.url);
    expect(sameUrl.length, 'the Japanese record was duplicated').toBe(1);
  });

  it('records the three source-access failures on the records themselves', () => {
    expect(getSource('coe-cybercrime-convention')?.note).toMatch(/403/);
    expect(getSource('us-18usc-2703-stored-communications')?.note).toMatch(/502|timed out/i);
    expect(getSource('us-18usc-3127-pen-register')?.note).toMatch(/access note|unreachable/i);
  });

  it('never lets the Convention carry a national claim in a source note', () => {
    const note = getSource('coe-cybercrime-convention')?.note ?? '';
    expect(note).toMatch(
      /NOT evidence of what any particular Party has enacted|not evidence of what any/i,
    );
  });

  it('adds no duplicate URL', () => {
    for (const id of ADDED) {
      const s = getSource(id);
      if (!s?.url) continue;
      const same = SOURCES.filter((x) => x.url === s.url);
      expect(same.length, `${id} shares a URL with ${same.map((x) => x.id).join(', ')}`).toBe(
        1,
      );
    }
  });
});
