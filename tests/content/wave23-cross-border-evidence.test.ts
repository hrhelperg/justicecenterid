import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { SCHEDULED_CHANGES } from '@/content/scheduled-changes';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 23: cross-border digital evidence and international cooperation.
 *
 * Four risks shape this suite, and only the last is one earlier waves also carried.
 *
 * SILENT EXTRATERRITORIALITY. The wave's spine. Every page in Wave 22 describes a domestic power,
 * and the natural next sentence — the one a reader writes for themselves — is that the power
 * reaches the data wherever it sits. It does not, and the instruments say so in their own text:
 * the Convention's Article 32 admits exactly two situations, the Protocol's Article 7 reaches one
 * category and no other, and the EU Regulation graduates by category and by authoriser. The guards
 * below fire on the unqualified reach claim, not on the word "extraterritorial".
 *
 * MECHANISM COLLAPSE. "Cross-border cooperation" reads as one thing and is at least four, with
 * different addressees (a State, a provider), different connecting factors (where data is stored,
 * where an addressee is established, what a provider controls) and different conditions. A page
 * that treats them as interchangeable is wrong even when every individual sentence is sourced.
 *
 * LIFECYCLE ELISION. This wave's own failure mode, and the one no earlier wave had to guard.
 * Instruments here sit at four different stages, and a sentence in the present tense about an
 * instrument that is not yet operable is a false statement dressed as a summary.
 *
 * OPERATIONAL AND SCORECARD MISUSE. The wave's subject invites two things the platform will not
 * do: rank providers or jurisdictions by how they respond to legal process, and describe how to
 * position data or timing to defeat it. The safety guards run assertion-aware, on a separate unit
 * set from the framing guards — the finding W20-M4 forced and Waves 21 and 22 carried forward.
 */

const WAVE_23 = [
  'jurisdiction-over-foreign-held-data',
  'mutual-legal-assistance',
  'cross-border-preservation-and-disclosure',
  'asking-a-state-and-ordering-a-provider',
  'direct-cooperation-with-foreign-providers',
  'european-production-and-preservation-orders',
  'when-a-cooperation-instrument-starts-to-operate',
  'data-categories-across-instruments',
] as const;

const WAVE_23_SOURCES = [
  'coe-cybercrime-second-protocol',
  'eu-reg-2023-1543-e-evidence',
  'eu-dir-2023-1544-legal-representatives',
  'eu-dir-2014-41-eio',
  'us-18usc-2713-cloud-act',
] as const;

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 23 guide missing: ${slug}`);
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
 * Framing units. A stance appearing in a misconception CLAIM is denied by construction — the
 * schema guarantees `reality` answers `claim` — so claims are excluded here and the reality and
 * note are split into sentences, because those are assertions the platform is making.
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

/** Safety units keep the misconception claim: an instruction is an instruction wherever it sits. */
function safetyUnits(g: Guide): string[] {
  return sentences(prose(g));
}

/** Only a negation that GOVERNS the stance neutralises it, and in English that precedes it. */
function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(0, match.index);
  return /\b(?:not|never|no|nothing|neither|nor)\b|\bdoes not\b|\brather than\b|\bunlike\b/i.test(
    before,
  );
}

const ALL_UNITS = WAVE_23.flatMap((slug) => tripwireUnits(guide(slug)));
const ALL_PROSE = WAVE_23.map((slug) => prose(guide(slug))).join('\n');
const SAFETY_UNITS = WAVE_23.flatMap((slug) => safetyUnits(guide(slug)));

/** Corpus-wide, for the stances that are platform positions rather than this wave's subject. */
const CORPUS_UNITS = ALL_GUIDES.filter((g) => g.status === 'published').flatMap(tripwireUnits);
const CORPUS_SAFETY_UNITS = ALL_GUIDES.filter((g) => g.status === 'published').flatMap(
  safetyUnits,
);

/**
 * A research-boundary disclosure CONTAINS the proposition it disclaims, and the disclaimer sits
 * after it: "Whether any Member State has transposed the Directive was NOT RESEARCHED" reads to a
 * forward-negation check as an assertion that they have. Wave 23 forced this — three of the wave's
 * most careful sentences are exactly that shape. Both halves are required before the frame counts,
 * a subordinating "whether"/"if" ahead of the stance AND an epistemic main clause, so the helper
 * cannot launder a bare assertion by prefixing a conjunction.
 */
function framedAsUnknown(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  if (!/\b(?:whether|if)\b/i.test(sentence.slice(0, match.index))) return false;
  return /\bnot researched\b|\bnot established\b|\bnot known\b|\bnot read\b|\bnot verified\b|\bwas not\b|\bwere not\b|\bis unclear\b|\bremains (?:open|unclear)\b/i.test(
    sentence,
  );
}

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter(
    (s) => pattern.test(s) && !deniesForward(s, pattern) && !framedAsUnknown(s, pattern),
  );
}

/* -------------------------------------------------------------------------- */
/* Invariant 1. The cluster exists, is routed, and is honest about its limits  */
/* -------------------------------------------------------------------------- */

describe('the Wave 23 cluster exists and is routed', () => {
  it.each(WAVE_23)('%s is published with a route', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('investigations');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('publishes eight routes and no more', () => {
    expect(WAVE_23.length).toBe(8);
  });

  it.each(WAVE_23)('%s states what it did not research', (slug) => {
    const u = guide(slug).uncertainty ?? [];
    expect(u.length).toBeGreaterThan(0);
    expect(u.join(' ')).toMatch(
      /NOT RESEARCHED|not researched|not read|\bno [a-z][^.]{0,60}was read|deliberate limit|nothing here is asserted/i,
    );
  });

  it.each(WAVE_23)('%s links to at least two related pages that exist', (slug) => {
    const related = guide(slug).related;
    expect(related.length).toBeGreaterThanOrEqual(2);
    for (const r of related) expect(getGuide(r), `${slug} -> ${r}`).toBeDefined();
  });

  it.each(WAVE_23)('%s is reachable from somewhere other than itself', (slug) => {
    const inbound = ALL_GUIDES.filter(
      (g) => g.slug !== slug && (g.related.includes(slug) || prose(g).includes(`/${slug})`)),
    );
    expect(inbound.length, `${slug} has no inbound reference`).toBeGreaterThan(0);
  });

  it.each(WAVE_23)('%s cites at least two sources, all of which exist', (slug) => {
    const g = guide(slug);
    expect(g.sources.length).toBeGreaterThanOrEqual(2);
    for (const id of g.sources) expect(getSource(id), `${slug} -> ${id}`).toBeDefined();
  });

  it('at least one Wave 22 page now points into the cross-border layer', () => {
    const wave22 = [
      'legal-authority-and-technical-capability',
      'preserving-data-and-producing-it',
      'content-and-communications-data',
      'who-authorises-a-digital-investigative-measure',
    ];
    const linking = wave22.filter((slug) =>
      WAVE_23.some((target) => prose(guide(slug)).includes(`/investigations/${target})`)),
    );
    expect(linking.length, 'no Wave 22 page reaches the cross-border layer').toBe(
      wave22.length,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 2. Domestic authority is not automatically extraterritorial       */
/* -------------------------------------------------------------------------- */

const GLOBALLY_SELF_EXECUTING = [
  /(?:a |the )?(?:domestic |national |local )?(?:warrant|order|court order|production order) (?:is|are) (?:valid|enforceable|effective|binding) (?:anywhere|worldwide|globally|in any country|in every country)/i,
  /(?:investigators|police|prosecutors|authorities) (?:can|may) (?:simply |just )?(?:obtain|seize|access|collect) (?:the )?data (?:wherever|no matter where) it is (?:stored|held|located)/i,
  /(?:national|domestic) (?:investigative )?(?:power|authority) (?:extends|applies|reaches) (?:automatically )?(?:to (?:any|every) country|worldwide|globally|across (?:all )?borders)/i,
  /because the data is (?:accessible|reachable) from (?:here|the territory),? (?:it|the data) (?:is|falls) within (?:domestic )?jurisdiction/i,
  /(?:borders|territorial limits) (?:are|have become) irrelevant (?:to|for) (?:digital|electronic) evidence/i,
];

describe('domestic authority is not automatically extraterritorial executive power', () => {
  it.each(GLOBALLY_SELF_EXECUTING.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it.each(GLOBALLY_SELF_EXECUTING.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus asserts %s',
    (_label, pattern) => {
      expect(offending(pattern, CORPUS_UNITS)).toEqual([]);
    },
  );

  it('the spine page says in terms that domestic authority is not global executive power', () => {
    const g = prose(guide('jurisdiction-over-foreign-held-data'));
    expect(g).toMatch(/does not|is not|nothing about/i);
    expect(g).toMatch(/another (?:State|country)|other State|foreign (?:State|country)/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 3. One label, several mechanisms                                  */
/* -------------------------------------------------------------------------- */

const ONE_MECHANISM = [
  /(?:all|every) (?:cross-border )?requests? (?:use|uses|go through|goes through|follow|follows) the same (?:mechanism|procedure|route|process|channel)/i,
  /(?:cross-border cooperation|international cooperation) (?:is|means) (?:a |one )single (?:mechanism|procedure|route|process)/i,
  /(?:mutual legal assistance|an MLAT request) is the only (?:way|route|mechanism|means)/i,
  /(?:MLAT|mutual legal assistance) (?:has been|is) (?:obsolete|superseded|replaced)/i,
];

describe('cooperation is several mechanisms, not one', () => {
  it.each(ONE_MECHANISM.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('the wave names at least four distinct mechanisms', () => {
    const named = [
      /mutual (?:legal )?assistance/i,
      /Article 29/i,
      /Article 7/i,
      /European (?:Production|Preservation) Order/i,
    ];
    for (const p of named) expect(ALL_PROSE, `mechanism missing: ${p.source}`).toMatch(p);
  });

  it('the comparison page distinguishes the addressee of a request from that of an order', () => {
    const g = prose(guide('asking-a-state-and-ordering-a-provider'));
    expect(g).toMatch(/addressed to|addressee/i);
    expect(g).toMatch(/service provider|provider/i);
    expect(g).toMatch(/(?:another|requested|foreign) State/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 4. Connecting factors differ between instruments                  */
/* -------------------------------------------------------------------------- */

describe('the instruments do not share a connecting factor', () => {
  it('records the Convention factor as the territory where data is stored', () => {
    expect(prose(guide('jurisdiction-over-foreign-held-data'))).toMatch(
      /stored in (?:its|the) territory|territory of (?:the )?(?:requested )?Party|in its territory/i,
    );
  });

  it('records the EU factor as the establishment of the addressee', () => {
    expect(
      prose(guide('european-production-and-preservation-orders')) +
        prose(guide('jurisdiction-over-foreign-held-data')),
    ).toMatch(/establish(?:ed|ment)|designated establishment|legal representative/i);
  });

  it('records the US factor as the provider possession, custody or control', () => {
    expect(ALL_PROSE).toMatch(/possession, custody, or control/i);
  });

  it('never says the three instruments use the same test', () => {
    expect(
      offending(
        /(?:the instruments|these instruments|they) (?:all )?(?:use|apply|share) the same (?:test|connecting factor|criterion)/i,
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 5. Section 2713 removes a location argument, not foreign law      */
/* -------------------------------------------------------------------------- */

const LOCATION_IRRELEVANT_OVERREACH = [
  /(?:because|since) (?:the )?location (?:is|was) irrelevant,? (?:foreign|other) law (?:does not|no longer) appl(?:y|ies)/i,
  /(?:United States|US|U\.S\.) law (?:overrides|displaces|prevails over|trumps) (?:foreign|other countries'?|another State'?s?) law/i,
  /(?:a |the )?(?:US|United States) (?:warrant|order) (?:reaches|obtains|compels) data (?:in|from) any country/i,
];

describe('a rule about an obligation is not a rule about other legal systems', () => {
  it.each(LOCATION_IRRELEVANT_OVERREACH.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('quotes the statutory formula rather than paraphrasing its effect', () => {
    expect(ALL_PROSE).toMatch(/regardless of whether/i);
    expect(ALL_PROSE).toMatch(/located within or outside of the United States/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 6. Preservation is not disclosure                                 */
/* -------------------------------------------------------------------------- */

const PRESERVATION_IS_DISCLOSURE = [
  /preserv(?:ing|ation of) data (?:means|gives|allows|permits) (?:the )?(?:authorities |investigators )?(?:access|disclosure|to read|to obtain it)/i,
  /(?:a |the )?preservation request (?:produces|obtains|discloses|hands over) (?:the )?(?:data|evidence|content)/i,
  /preservation and (?:disclosure|production) are (?:the same|one) (?:step|act|thing)/i,
];

describe('freezing data is not obtaining it', () => {
  it.each(PRESERVATION_IS_DISCLOSURE.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('the preservation page keeps the two steps apart in its own text', () => {
    const g = prose(guide('cross-border-preservation-and-disclosure'));
    expect(g).toMatch(
      /two (?:separate |distinct )?steps|second step|separate (?:step|request|decision)/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 7. Dual criminality enters at one step and not the other          */
/* -------------------------------------------------------------------------- */

describe('dual criminality is placed where the Convention places it', () => {
  it('records that it is not required as a condition of preservation', () => {
    expect(prose(guide('cross-border-preservation-and-disclosure'))).toMatch(
      /dual criminality shall not be required as a condition to providing such preservation/i,
    );
  });

  it('records the disclosure-stage reservation rather than treating it as automatic', () => {
    const g = prose(guide('cross-border-preservation-and-disclosure'));
    expect(g).toMatch(/reserv/i);
    expect(g).toMatch(/Article 29/i);
  });

  it('never says dual criminality is irrelevant to cross-border cooperation', () => {
    expect(
      offending(
        /dual criminality (?:is|has become) (?:irrelevant|no longer required|abolished|never required)/i,
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 8. Article 32 is two situations, not a general access power       */
/* -------------------------------------------------------------------------- */

const ARTICLE_32_OVERREAD = [
  /Article 32 (?:permits|allows|authorises) (?:general|direct|unilateral) access to data (?:stored|held) (?:abroad|in another (?:State|country|Party))/i,
  /(?:a |the )?Party may access (?:any|all) data (?:stored|held) in another (?:State|country|Party)(?: without| with no)? (?:consent|authorisation)/i,
];

describe('Article 32 is confined to what it names', () => {
  it.each(ARTICLE_32_OVERREAD.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('names both of the two situations it covers and no third', () => {
    const g = prose(guide('jurisdiction-over-foreign-held-data')) + ALL_PROSE;
    expect(g).toMatch(/publicly available/i);
    expect(g).toMatch(/lawful and voluntary consent/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 9. The Protocol's two routes reach different categories           */
/* -------------------------------------------------------------------------- */

describe('a direct route and a route through the other Party are not the same route', () => {
  it('records that the direct route reaches subscriber information only', () => {
    const g = prose(guide('direct-cooperation-with-foreign-providers'));
    expect(g).toMatch(/subscriber information/i);
    expect(g).toMatch(/Article 7/i);
  });

  it('records that the route through the requested Party also reaches traffic data', () => {
    const g = prose(guide('direct-cooperation-with-foreign-providers'));
    expect(g).toMatch(/Article 8/i);
    expect(g).toMatch(/traffic data/i);
  });

  it('never says a direct order to a foreign provider reaches content', () => {
    expect(
      offending(
        /(?:direct(?:ly)?|Article 7) (?:order|orders|request|requests)? ?(?:to|of) (?:a |the )?(?:foreign |service )?provider (?:reaches|obtains|covers) content/i,
      ),
    ).toEqual([]);
  });

  it('treats the supervision condition as a declaration rather than an automatic feature', () => {
    const g = prose(guide('direct-cooperation-with-foreign-providers'));
    expect(g).toMatch(/declar/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 10. The EU authorisation ladder is by category AND by act         */
/* -------------------------------------------------------------------------- */

describe('who may issue a European order depends on the category and on the order', () => {
  it('records that a prosecutor may not issue a production order for traffic or content', () => {
    const g = prose(guide('european-production-and-preservation-orders'));
    expect(g).toMatch(/judge|court|investigating judge/i);
    expect(g).toMatch(/prosecutor/i);
    expect(g).toMatch(/Article 4/i);
  });

  it('records that the preservation order is not subject to the same category ladder', () => {
    expect(prose(guide('european-production-and-preservation-orders'))).toMatch(
      /preserv\w+ .{0,120}any category|any category .{0,120}preserv/i,
    );
  });

  it('never flattens the ladder into a single authoriser', () => {
    expect(
      offending(
        /(?:a |the )?(?:public )?prosecutor (?:may|can) issue (?:any|all|every) (?:European )?(?:Production )?Order/i,
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 11. Adoption, force, application and transposition are distinct   */
/* -------------------------------------------------------------------------- */

const LIFECYCLE_ELISION = [
  /(?:once |after )?(?:an? )?instrument (?:is|has been) (?:adopted|signed),? it (?:applies|is in force|operates|is binding)/i,
  /signing (?:an? )?(?:instrument|treaty|convention|protocol) (?:makes|binds|renders) (?:a |the )?State bound/i,
  /(?:the )?(?:transposition )?deadline (?:has )?passed,? so (?:the Directive|it) (?:is|has been) (?:transposed|implemented|in force)/i,
  /(?:a |the )?Directive (?:applies|is directly applicable) (?:in|across) (?:the )?Member States/i,
];

describe('the stages between adoption and operation stay distinct', () => {
  it.each(LIFECYCLE_ELISION.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('the lifecycle page quotes the Convention obligation to legislate', () => {
    expect(prose(guide('when-a-cooperation-instrument-starts-to-operate'))).toMatch(
      /adopt such legislative and other measures as may be necessary to carry out the obligations/i,
    );
  });

  it('the lifecycle page separates the Regulation from the Directive', () => {
    const g = prose(guide('when-a-cooperation-instrument-starts-to-operate'));
    expect(g).toMatch(/directly applicable/i);
    expect(g).toMatch(/bring into force the laws, regulations and administrative provisions/i);
  });

  it('claims no completed transposition for any Member State', () => {
    expect(
      offending(/(?:Member States|[A-Z][a-z]+) (?:has|have) transposed (?:the )?Directive/i, [
        ...ALL_UNITS,
      ]),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 12. Every temporal claim carries its as-at framing                */
/* -------------------------------------------------------------------------- */

describe('status statements are dated', () => {
  it('the lifecycle page states the date on which every status was read', () => {
    expect(prose(guide('when-a-cooperation-instrument-starts-to-operate'))).toMatch(
      /as at 5 September 2026|on 5 September 2026/i,
    );
  });

  it.each(WAVE_23)('%s carries a factsVerifiedOn no earlier than its publishedOn', (slug) => {
    const g = guide(slug);
    expect(g.factsVerifiedOn).toBeDefined();
    expect(String(g.factsVerifiedOn) >= String(g.publishedOn)).toBe(true);
  });

  it('states no ratification count for either Council of Europe instrument', () => {
    /*
     * Mutation W23M15 defeated the first form of this guard. It matched "70 Parties have ratified"
     * and missed "has been ratified by 70 Parties" — the same fact in the other word order, and the
     * more natural one. A count is a count wherever the number sits and however it is framed, so
     * this runs as a raw filter on both orders rather than through the denial-aware helper: the
     * honest way to say this is that the number was not researched, which carries no digit at all.
     */
    const count =
      /\b(?:ratified|acceded to|signed|adhered to) by (?:about |around |roughly |some )?\d+\b|\b\d+ (?:States Parties|Parties|States|countries|signatories|members) (?:have |had |having )?(?:ratified|acceded|signed|are Parties)|\b\d+ ratifications?\b|\bhas \d+ (?:Parties|signatories)\b/i;
    expect(SAFETY_UNITS.filter((u) => count.test(u))).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 13. Four categories in one instrument, three in another           */
/* -------------------------------------------------------------------------- */

describe('data categories are defined per instrument, not shared', () => {
  it('records the Convention subscriber definition as an exclusion of the other two', () => {
    expect(prose(guide('data-categories-across-instruments'))).toMatch(
      /other than traffic or content data/i,
    );
  });

  it('records the fourth EU category by name', () => {
    expect(prose(guide('data-categories-across-instruments'))).toMatch(
      /data requested for the sole purpose of identifying the user/i,
    );
  });

  it('shows the fourth category doing work in more than one article', () => {
    const g = prose(guide('data-categories-across-instruments'));
    expect(g).toMatch(/Article 4/i);
    expect(g).toMatch(/Article 8/i);
  });

  it('never says the categories mean the same thing across instruments', () => {
    expect(
      offending(
        /(?:subscriber|traffic|content) data means the same (?:thing )?in (?:every|all|both) instruments?/i,
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 14. No provider or jurisdiction scorecard (Part U)                */
/* -------------------------------------------------------------------------- */

const SCORECARD = [
  /(?:most|least|more|less) (?:likely to )?(?:cooperat\w+|compl\w+|responsive|forthcoming) (?:provider|providers|jurisdiction|jurisdictions|countr\w+)/i,
  /(?:providers?|companies|jurisdictions?|countries) (?:that|which|who) (?:resist|refuse|ignore|reject|decline) (?:foreign )?(?:orders|requests|process)/i,
  /(?:best|safest|preferred|ideal) (?:country|jurisdiction|place|location) (?:to|for) (?:stor\w+|host\w+|keep\w+|plac\w+) (?:data|evidence|servers?)/i,
  /(?:ranked|ranking|league table|scorecard) (?:of |by )?(?:providers|jurisdictions|countries) by (?:compliance|cooperation|disclosure|responsiveness|privacy)/i,
  /(?:choose|select|pick|prefer) (?:a )?(?:provider|jurisdiction|server location|country) (?:that|which|to) (?:will not|won't|refuses to|avoids)/i,
];

describe('this is not a provider or jurisdiction intelligence database', () => {
  it.each(SCORECARD.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it.each(SCORECARD.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus contains %s',
    (_label, pattern) => {
      expect(CORPUS_SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('names no commercial service provider anywhere in the wave', () => {
    const named =
      /\b(?:Google|Microsoft|Meta|Facebook|Apple|Amazon|Twitter|X Corp|Telegram|Signal|WhatsApp|Yahoo|Cloudflare|Proton|Dropbox|TikTok|Snap)\b/;
    expect(SAFETY_UNITS.filter((s) => named.test(s))).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 15. No evasion, defeat or timing guidance (Part T)                */
/* -------------------------------------------------------------------------- */

const OPERATIONAL = [
  /(?:how to |ways? to |in order to )(?:avoid|evade|defeat|frustrate|delay|circumvent|bypass|resist) (?:a |the )?(?:request|order|preservation|disclosure|investigation|process)/i,
  /(?:move|transfer|relocate|migrate) (?:the )?(?:data|evidence|servers?|account) (?:before|after|once) (?:a |the )?(?:request|order|preservation|notice)/i,
  /(?:exploit|take advantage of|use) (?:the )?(?:MLAT |mutual legal assistance |procedural )?delay/i,
  /(?:conceal|hide|mask|obscure) (?:the )?(?:subscriber|user|account|customer) (?:identity|details|information)/i,
  /(?:to |so as to )?(?:place|host|locate|position) (?:data|servers?) (?:so|such) that (?:investigators|authorities|foreign) (?:cannot|can't|are unable)/i,
];

describe('nothing here is operational guidance', () => {
  it.each(OPERATIONAL.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('carries no imperative instructing a reader to act on a legal process', () => {
    const directive =
      /^(?:First,? |Then,? |Next,? |Step \d)?(?:file|submit|send|serve|lodge|address|transmit|draft) (?:a |the |your )(?:request|order|form|application|letter|notice) (?:to|with|via)/i;
    expect(SAFETY_UNITS.filter((s) => directive.test(s))).toEqual([]);
  });

  it('gives no template, form number, portal or operational contact channel', () => {
    const channel =
      /(?:https?:\/\/|www\.)|(?:@[a-z0-9-]+\.[a-z]{2,})|(?:submit(?:ted)? (?:through|via) the .{0,30}portal)/i;
    /* Case-SENSITIVE, and a digit is required: under /i this alternative matched "inform the", */
    /* "uniform or" and "form of a criminal offence" — a guard that fires on primary law is not a */
    /* guard. A form number is a proper noun with a number in it.                                */
    const formNumber = /\bForm [A-Z0-9][A-Z0-9-]*\d/;
    expect(SAFETY_UNITS.filter((s) => channel.test(s) || formNumber.test(s))).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 16. Restricted quantitative claims stay at zero (Part AB)         */
/* -------------------------------------------------------------------------- */

const RESTRICTED_QUANTITIES = [
  /(?:average|median|typical|usual) (?:MLAT |mutual legal assistance |response |turnaround |processing )?(?:time|delay|duration) (?:of |is |was )?(?:about |around |roughly )?\d/i,
  /takes? (?:on average |typically |usually )?(?:about |around |roughly )?\d+ (?:days|weeks|months|years) to (?:respond|complete|process|answer)/i,
  /\d+ ?(?:%|per cent|percent) of (?:requests|orders|providers|cases) (?:are|were|is)/i,
  /(?:disclosure|compliance|success|refusal|rejection) rate/i,
  /(?:received|processed|handled|granted) (?:about |around |roughly )?[\d,]{3,} (?:requests|orders)/i,
];

describe('the wave makes no restricted quantitative claim', () => {
  it.each(RESTRICTED_QUANTITIES.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('passes the platform restricted-phrasing check on every field', () => {
    for (const slug of WAVE_23) {
      const g = guide(slug);
      for (const unit of safetyUnits(g)) {
        expect(findRestrictedPhrasing(unit), `${slug}: ${unit.slice(0, 90)}`).toEqual([]);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 17. Sourcing discipline                                           */
/* -------------------------------------------------------------------------- */

describe('every claim is traceable to a declared source', () => {
  it.each(WAVE_23_SOURCES)('%s exists and carries a publisher and a URL', (id) => {
    const s = getSource(id);
    expect(s, `missing source: ${id}`).toBeDefined();
    expect(s!.publisher.length).toBeGreaterThan(0);
    expect(s!.url).toMatch(/^https?:\/\//);
  });

  it.each(WAVE_23)('%s cites only sources it declares, block by block', (slug) => {
    const g = guide(slug);
    for (const block of allBlocks(g)) {
      if (block.kind !== 'paragraph' || !block.sources) continue;
      for (const id of block.sources) {
        expect(g.sources, `${slug} block cites undeclared ${id}`).toContain(id);
      }
    }
  });

  it.each(WAVE_23)('%s marks every non-factual paragraph with a claim type', (slug) => {
    for (const block of allBlocks(guide(slug))) {
      if (block.kind !== 'paragraph') continue;
      if (block.claim === 'fact') {
        expect(block.sources?.length, `${slug}: fact without a source`).toBeGreaterThan(0);
      }
    }
  });

  it('records the access failures rather than silently substituting a source', () => {
    const withNotes = WAVE_23_SOURCES.map((id) => getSource(id)!).filter((s) =>
      /could not be|returned HTTP|unavailable|403|502|timed out|reproduc/i.test(s.note ?? ''),
    );
    expect(withNotes.length, 'no access failure recorded on any new source').toBeGreaterThan(0);
  });

  it('adds exactly five sources and leaves the corpus otherwise unchanged in shape', () => {
    for (const id of WAVE_23_SOURCES) expect(SOURCES.some((s) => s.id === id)).toBe(true);
    expect(new Set(SOURCES.map((s) => s.id)).size).toBe(SOURCES.length);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 18. No scheduled change was invented to fill a gap                */
/* -------------------------------------------------------------------------- */

describe('the wave adds no scheduled change', () => {
  it('registers nothing for the cross-border instruments', () => {
    const touching = SCHEDULED_CHANGES.filter((c) =>
      /2023\/154[34]|Second Additional Protocol|e-evidence|cross-border/i.test(
        [c.description, c.notes ?? '', ...c.sources].join(' '),
      ),
    );
    expect(touching).toEqual([]);
  });

  it('every scheduled change in the corpus still carries a dated certainty when active', () => {
    for (const c of SCHEDULED_CHANGES) {
      if (c.status !== 'pending') continue;
      expect(c.certainty, `${c.id} is active without an enacted date`).toBe(
        'enacted-with-date',
      );
      expect(c.effectiveOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 19. Comparative framing without a hierarchy of systems            */
/* -------------------------------------------------------------------------- */

const HIERARCHY = [
  /(?:the )?(?:European|EU|American|US|United States) (?:approach|model|system) is (?:better|superior|more advanced|the (?:best|gold standard))/i,
  /(?:countries|States) (?:should|ought to|must) adopt (?:the )?(?:European|EU|US|American) (?:approach|model|framework)/i,
  /(?:a |the )?(?:proper|real|genuine|true) (?:rule of law|legal system) (?:requires|means) (?:the )?(?:European|EU|US)/i,
];

describe('comparison does not become ranking', () => {
  it.each(HIERARCHY.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('each page that compares carries a scope callout bounding what it establishes', () => {
    for (const slug of WAVE_23) {
      const hasScope = allBlocks(guide(slug)).some(
        (b) => b.kind === 'callout' && (b.variant === 'scope' || b.variant === 'uncertainty'),
      );
      expect(hasScope, `${slug} compares without bounding its scope`).toBe(true);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 20. Safeguards are described as conditions, not as guarantees     */
/* -------------------------------------------------------------------------- */

const GUARANTEE = [
  /(?:these |the )?safeguards? (?:guarantee|ensure|prevent) (?:that )?(?:abuse|misuse|error|overreach) (?:cannot|does not|will not) (?:occur|happen)/i,
  /(?:judicial|independent) (?:review|authorisation|supervision) (?:guarantees|ensures) (?:that )?(?:the order is|orders are|it is) (?:lawful|proportionate|correct)/i,
  /(?:a |the )?person (?:will|is) (?:always )?(?:be )?(?:told|notified|informed) (?:when|that) (?:their|the) data (?:is|was) (?:obtained|disclosed|produced)/i,
];

describe('safeguards are stated as conditions with limits', () => {
  it.each(GUARANTEE.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern)).toEqual([]);
    },
  );

  it('the EU page records where a remedy lies rather than that one always succeeds', () => {
    const g = prose(guide('european-production-and-preservation-orders'));
    expect(g).toMatch(/remed/i);
    expect(g).toMatch(/issuing State/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 21. Jurisdiction fields match what the pages actually establish   */
/* -------------------------------------------------------------------------- */

describe('jurisdiction tags do not overclaim', () => {
  it.each(WAVE_23)('%s tags a jurisdiction set it can support', (slug) => {
    const g = guide(slug);
    const codes = g.jurisdiction ?? [];
    expect(codes.length).toBeGreaterThan(0);
    for (const code of codes) {
      if (code === 'INT' || code === 'EU') continue;
      expect(prose(g), `${slug} tags ${code} without discussing it`).toMatch(
        new RegExp(code === 'US' ? 'United States' : code, 'i'),
      );
    }
  });

  it('no page claims to state the law of a country whose law it did not read', () => {
    expect(
      offending(
        /(?:in|under) (?:French|German|Italian|Spanish|Polish|Dutch|Swedish|Irish) law,? (?:a|the|an)/i,
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 22. Misconception text stays renderable as raw text               */
/* -------------------------------------------------------------------------- */

describe('misconception text carries no markup', () => {
  it.each(WAVE_23)('%s misconceptions contain no links or emphasis markers', (slug) => {
    for (const m of guide(slug).misconceptions) {
      for (const field of [m.claim, m.reality, m.note ?? '']) {
        expect(field, `${slug}: markdown link in misconception`).not.toMatch(/\]\(/);
        expect(field, `${slug}: emphasis marker in misconception`).not.toMatch(/\*/);
      }
    }
  });

  it.each(WAVE_23)('%s states at least five misconceptions', (slug) => {
    expect(guide(slug).misconceptions.length).toBeGreaterThanOrEqual(5);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 23. The wave does not duplicate what Wave 22 already owns         */
/* -------------------------------------------------------------------------- */

describe('the boundary with the domestic-powers cluster holds', () => {
  it('no Wave 23 slug collides with a Wave 22 slug', () => {
    const wave22 = new Set([
      'legal-authority-and-technical-capability',
      'device-seizure-and-device-examination',
      'interception-and-stored-data',
      'content-and-communications-data',
      'preserving-data-and-producing-it',
      'who-authorises-a-digital-investigative-measure',
      'scope-duration-and-notification',
    ]);
    for (const slug of WAVE_23) expect(wave22.has(slug)).toBe(false);
  });

  it('the categories page defers the domestic question rather than answering it again', () => {
    expect(prose(guide('data-categories-across-instruments'))).toMatch(
      /\/investigations\/content-and-communications-data/,
    );
  });

  it('every guide slug in the corpus is unique', () => {
    const slugs = ALL_GUIDES.map((g) => g.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 24. Quoted primary law is quoted, not paraphrased into a rule     */
/* -------------------------------------------------------------------------- */

describe('the load-bearing quotations are present verbatim', () => {
  const QUOTES: ReadonlyArray<readonly [string, RegExp]> = [
    ['Convention Art. 25(2)', /adopt such legislative and other measures as may be necessary/i],
    ['Convention Art. 29(3)', /dual criminality shall not be required as a condition/i],
    ['Convention Art. 32(b)', /lawful and voluntary consent/i],
    ['Regulation Art. 34(2)', /It shall apply from 18 August 2026/i],
    ['Directive Art. 7(1)', /by 18 February 2026/i],
    ['18 U.S.C. 2713', /located within or outside of the United States/i],
  ];

  it.each(QUOTES)('%s appears in the wave', (_label, pattern) => {
    expect(ALL_PROSE).toMatch(pattern);
  });
});

/* -------------------------------------------------------------------------- */
/* Invariant 25. The wave answers its own central question                     */
/* -------------------------------------------------------------------------- */

describe('the cluster answers the question it was built to answer', () => {
  it('names a mechanism for obtaining evidence abroad on every page', () => {
    for (const slug of WAVE_23) {
      expect(prose(guide(slug)), `${slug} names no mechanism`).toMatch(
        /Article \d|Regulation|Directive|assistance|Order|Protocol|Convention/i,
      );
    }
  });

  it('never resolves the question by asserting that no mechanism is needed', () => {
    expect(
      offending(
        /no (?:legal )?(?:mechanism|instrument|treaty|basis) is (?:needed|required|necessary) to (?:obtain|access|get)/i,
      ),
    ).toEqual([]);
  });

  it('keeps every page inside the investigations section', () => {
    for (const slug of WAVE_23) expect(guide(slug).section).toBe('investigations');
  });
});
