import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PROFESSIONS } from '@/content/professions';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { REQUIRED_PUBLISHED_MODULES } from '@/content/publication-gate';
import { findRestrictedPhrasing } from '@/content/restricted-claims';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, CountryModuleContent, Guide } from '@/content/types';

/**
 * Wave 25: country police recruitment and entry paths.
 *
 * The corpus has never carried content that decays this fast, and the risks follow from that.
 *
 * SCOPE LEAKAGE is the wave's defining failure mode and has no precedent here. A Berlin source
 * proves Berlin. A municipal department proves that department. A 2024 competition booklet proves
 * that competition. Every one of those is a true statement that becomes false the moment it is
 * widened, and widening is exactly what summarising does. Nothing in the corpus previously needed
 * a guard for it, because no earlier wave published facts whose truth depended on who was asking.
 *
 * TEMPORAL LEAKAGE is the same failure in the time dimension. The Irish age window is measured
 * "at midnight on Thursday, 8th of February 2024". Copied without that clause it becomes a
 * standing rule the source never stated, and it survives fact-checking because every word of it
 * was once true.
 *
 * SELECTION GAMING. Recruitment content sits one sentence from telling people how to pass vetting,
 * conceal a medical history, or answer an interview. The guards below fire on that and not on
 * saying the stage exists, because a guard that could not tell those apart would make the honest
 * page unwritable.
 *
 * INDIVIDUALISED ADVICE. Every reader of these pages wants to know whether THEY qualify. That is
 * the one question this platform must never answer, and the guard runs on the denial-aware unit
 * set so a misconception that names the error is not itself flagged.
 */

const WAVE_25_GUIDES = [
  'who-recruits-police-officers',
  'citizenship-nationality-and-residency-in-police-recruitment',
  'when-a-recruitment-requirement-is-campaign-specific',
  'how-police-selection-is-structured',
  'police-entry-requirements-across-systems',
] as const;

const WAVE_25_COUNTRIES = [
  'ireland',
  'netherlands',
  'new-zealand',
  'germany',
  'united-states',
] as const;

const WAVE_25_SOURCES = [
  'ie-garda-eligibility-regulations',
  'ew-police-eligibility-criteria',
  'nz-police-eligibility',
  'nl-politie-toelatingseisen',
  'de-bayern-polizei-ausbildung',
] as const;

/** Systems researched. Anything else may not be described. */
const NOT_RESEARCHED = ['France', 'Poland', 'Spain', 'Canada', 'Australia'];

function guide(slug: string): Guide {
  const found = getGuide(slug);
  if (!found) throw new Error(`Wave 25 guide missing: ${slug}`);
  return found;
}

function recruitmentModule(countrySlug: string): CountryModuleContent {
  const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === countrySlug);
  if (!dossier) throw new Error(`dossier missing: ${countrySlug}`);
  const mod = dossier.modules.find((m) => m.moduleId === 'police-recruitment');
  if (!mod) throw new Error(`police-recruitment module missing: ${countrySlug}`);
  return mod;
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

function moduleProse(m: CountryModuleContent): string {
  return [m.title, m.summary, ...blocks(m.blocks), ...(m.uncertainty ?? [])]
    .filter(Boolean)
    .join('\n');
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Framing units exclude misconception claims, which the schema guarantees are denied. */
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

/**
 * A governing negation sits NEXT TO the stance, not anywhere earlier in the sentence.
 *
 * Mutation W25M4 defeated the first form. It injected "police officers need a degree in every
 * system" into a sentence that opened "the comparison confirms rather than complicates" — and
 * "rather than", scanned across the whole preceding text, neutralised a claim it had nothing to do
 * with. Weak markers like "rather than" and "unlike" appear incidentally all the time; strong ones
 * do too, just less often.
 *
 * The window is what makes the check mean anything. English puts a governing negation immediately
 * before what it governs, so only the preceding clause is examined.
 */
const NEGATION_WINDOW = 60;

function deniesForward(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  const before = sentence.slice(Math.max(0, match.index - NEGATION_WINDOW), match.index);
  return /\b(?:not|never|no|nothing|neither|nor|cannot)\b|\bdoes not\b|\brather than\b|\bunlike\b/i.test(
    before,
  );
}

/** Carried forward from Wave 23: a research-boundary disclosure contains what it disclaims. */
function framedAsUnknown(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  if (!/\b(?:whether|if)\b/i.test(sentence.slice(0, match.index))) return false;
  return /\bnot researched\b|\bnot established\b|\bnot known\b|\bwas not\b|\bwere not\b/i.test(
    sentence,
  );
}

/**
 * Carried forward from Wave 24 — a question is not an assertion, a link label is not a claim — and
 * extended here for a construction this wave needs constantly.
 *
 * These pages teach by quoting the WRONG formulation and then correcting it: 'Writing that as "you
 * must be an Irish citizen" excludes, on paper, most of the people the rule actually admits.' The
 * page asserts the opposite of the string it contains, and a guard that cannot see that would make
 * it impossible to name the error the page exists to correct.
 *
 * The exemption is narrow: the match must sit INSIDE quotation marks, and the sentence must carry a
 * correcting verb outside them. A bare quoted claim with no correction is still an assertion.
 */
function isAsserted(sentence: string, pattern: RegExp): boolean {
  const match = new RegExp(pattern.source, 'i').exec(sentence);
  if (!match) return false;
  if (/\?\s*$/.test(sentence.trim())) return false;
  const labels = [...sentence.matchAll(/\[([^\]]*)\]\([^)]*\)/g)].map((m) => m[1] ?? '');
  if (labels.some((l) => new RegExp(pattern.source, 'i').test(l))) return false;
  const quoted = [
    ...sentence.matchAll(/["\u201c\u2018']([^"\u201d\u2019']{4,200})["\u201d\u2019']/g),
  ].map((m) => m[1] ?? '');
  const inQuote = quoted.some((q) => new RegExp(pattern.source, 'i').test(q));
  const corrects =
    /\b(?:wrong|incorrect|excludes|misdescrib\w+|flatten\w*|would be false|is not what|rather than|error|misleading|inverts)\b/i.test(
      sentence,
    );
  if (inQuote && corrects) return false;
  return true;
}

const GUIDE_UNITS = WAVE_25_GUIDES.flatMap((s) => tripwireUnits(guide(s)));
const MODULE_UNITS = WAVE_25_COUNTRIES.flatMap((c) =>
  sentences(moduleProse(recruitmentModule(c))),
);
const ALL_UNITS = [...GUIDE_UNITS, ...MODULE_UNITS];
const SAFETY_UNITS = [
  ...WAVE_25_GUIDES.flatMap((s) => sentences(prose(guide(s)))),
  ...MODULE_UNITS,
];

function offending(pattern: RegExp, units: string[] = ALL_UNITS): string[] {
  return units.filter(
    (s) =>
      pattern.test(s) &&
      isAsserted(s, pattern) &&
      !deniesForward(s, pattern) &&
      !framedAsUnknown(s, pattern),
  );
}

/* -------------------------------------------------------------------------- */
/* 1. The cluster exists, is routed, and is architecturally sound             */
/* -------------------------------------------------------------------------- */

describe('the Wave 25 recruitment layer exists and is routed', () => {
  it('registers the police-recruitment module exactly once', () => {
    const defs = COUNTRY_MODULES.filter((m) => m.id === 'police-recruitment');
    expect(defs.length).toBe(1);
    expect(defs[0]!.slug).toBe('police-recruitment');
  });

  it('does NOT make the module required, so unresearched countries are not forced to fake one', () => {
    expect(REQUIRED_PUBLISHED_MODULES).not.toContain('police-recruitment');
  });

  it.each(WAVE_25_COUNTRIES)('%s publishes a routed recruitment module', (country) => {
    const m = recruitmentModule(country);
    expect(m.status).toBe('published');
    expect(m.review).toBe('fact-checked');
    expect(m.safetyReview).toBe('cleared');
    expect(PUBLIC_ROUTE_PATHS).toContain(`/countries/${country}/police-recruitment`);
  });

  it.each(WAVE_25_GUIDES)('%s is published with a route', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
  });

  it('publishes five country modules and five comparative guides', () => {
    expect(WAVE_25_COUNTRIES.length).toBe(5);
    expect(WAVE_25_GUIDES.length).toBe(5);
  });

  it('only the researched countries carry a recruitment module', () => {
    const withModule = PUBLISHED_DOSSIERS.filter((d) =>
      d.modules.some((m) => m.moduleId === 'police-recruitment' && m.status === 'published'),
    ).map((d) => d.slug);
    expect(withModule.sort()).toEqual([...WAVE_25_COUNTRIES].sort());
  });
});

/* -------------------------------------------------------------------------- */
/* 2-7. SOURCE SCOPE >= CLAIM SCOPE — the wave's central invariant            */
/* -------------------------------------------------------------------------- */

const SCOPE_LEAKAGE = [
  /\bGerman police (?:require|must|need|officers must)\b/i,
  /\bin Germany,? (?:applicants|candidates|officers) (?:must|need|have to)\b/i,
  /\b(?:the )?German (?:entry|police) requirements? (?:are|is)\b/i,
  /\bU\.?S\.? police (?:require|must|need)\b/i,
  /\bin the United States,? (?:applicants|candidates|officers) (?:must|need|have to)\b/i,
  /\b(?:American|United States) police (?:entry )?requirements? (?:are|is)\b/i,
  /\bCanadian police (?:require|must|need)\b/i,
  /\bAustralian police (?:require|must|need)\b/i,
];

describe('a narrow source is never widened into a national claim', () => {
  it.each(SCOPE_LEAKAGE.map((p) => [p.source, p] as const))(
    'the wave never asserts %s',
    (_label, pattern) => {
      expect(offending(pattern, SAFETY_UNITS)).toEqual([]);
    },
  );

  it('the Germany page names the Land beside every requirement it states', () => {
    const m = moduleProse(recruitmentModule('germany'));
    expect(m).toMatch(/Berlin/);
    expect(m).toMatch(/Bavaria|Bayer/);
    /* And says outright that no national requirement exists. */
    expect(m).toMatch(
      /no national|not about German requirements|no German police recruitment/i,
    );
  });

  it('the Germany page states no age, nationality or licence requirement', () => {
    const m = moduleProse(recruitmentModule('germany'));
    expect(m).not.toMatch(/\bmust be (?:at least )?\d{2} years/i);
    expect(m).toMatch(/NOT RESEARCHED|not researched/);
  });

  it('the United States page states NO entry requirement at all', () => {
    const m = moduleProse(recruitmentModule('united-states'));
    expect(m).toMatch(/states NO|no entry requirement|No entry requirement/i);
    expect(m).not.toMatch(/\bapplicants must be (?:at least )?\d{2}\b/i);
    expect(m).not.toMatch(/\brequires? a (?:high school diploma|GED|degree)\b/i);
  });

  it('every country module names its own country and does not claim another', () => {
    for (const country of WAVE_25_COUNTRIES) {
      const m = recruitmentModule(country);
      const others = WAVE_25_COUNTRIES.filter((c) => c !== country);
      for (const other of others) {
        const otherName =
          other === 'united-states'
            ? 'United States'
            : other === 'new-zealand'
              ? 'New Zealand'
              : other[0]!.toUpperCase() + other.slice(1);
        const claiming = sentences(moduleProse(m)).filter(
          (u) =>
            new RegExp(`\\b${otherName}\\b`).test(u) &&
            /\b(?:must|require|need|applicants)\b/i.test(u),
        );
        expect(claiming, `${country} states a requirement for ${otherName}`).toEqual([]);
      }
    }
  });

  it('describes no system that was not researched', () => {
    for (const country of NOT_RESEARCHED) {
      const claiming = SAFETY_UNITS.filter(
        (u) =>
          new RegExp(`\\b${country}\\b`).test(u) &&
          !/NOT RESEARCHED|not researched|not described|DEFER|deferred|were not researched|is not described/i.test(
            u,
          ),
      );
      expect(claiming, `${country} is described but was not researched`).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 8. CAMPAIGN SCOPE != PERMANENT REQUIREMENT                                 */
/* -------------------------------------------------------------------------- */

describe('a campaign term is never restated as a standing rule', () => {
  it('no Irish age requirement is stated as a rule', () => {
    const m = moduleProse(recruitmentModule('ireland'));
    /* The campaign figures may appear only inside a sentence that carries the campaign date. */
    const ageSentences = sentences(m).filter((s) =>
      /\b18 years of age\b|\b50 years of age\b/.test(s),
    );
    for (const s of ageSentences) {
      expect(s, `Irish age stated without its campaign anchor: ${s}`).toMatch(
        /2024|competition|campaign/i,
      );
    }
  });

  it('the Ireland page says in terms that it states no standing age requirement', () => {
    expect(moduleProse(recruitmentModule('ireland'))).toMatch(
      /does not state an Irish police age requirement|belongs to a competition|not state.{0,40}age/i,
    );
  });

  it('the campaign-scope guide carries the anchoring clause verbatim', () => {
    expect(prose(guide('when-a-recruitment-requirement-is-campaign-specific'))).toMatch(
      /at midnight on Thursday, 8th of February 2024/,
    );
  });

  it('never presents a campaign-specific source as permanent', () => {
    expect(
      offending(
        /\b(?:the|this) requirement (?:is|remains) (?:always|permanently|the standing)\b/i,
        SAFETY_UNITS,
      ),
    ).toEqual([]);
  });

  it('the campaign-specific source records its own campaign scope', () => {
    const s = getSource('ie-garda-eligibility-regulations');
    expect(s!.note).toMatch(/CAMPAIGN-SPECIFIC/);
    expect(s!.note).toMatch(/never be restated as a standing rule/i);
  });
});

/* -------------------------------------------------------------------------- */
/* 9-11. Citizenship != nationality != residency != right to work             */
/* -------------------------------------------------------------------------- */

describe('status concepts are not collapsed into each other', () => {
  it('never flattens a status rule into "must be a citizen"', () => {
    expect(
      offending(
        /\b(?:you|applicants|candidates) must be an? (?:Irish|British|UK|Dutch|New Zealand) citizen\b/i,
        SAFETY_UNITS,
      ),
    ).toEqual([]);
  });

  it('preserves each system’s own formulation', () => {
    const g = prose(guide('citizenship-nationality-and-residency-in-police-recruitment'));
    expect(g).toMatch(/right to live and work/i);
    expect(g).toMatch(/residency or New Zealand permanent residency/i);
    expect(g).toMatch(/tweede nationaliteit/);
    expect(g).toMatch(/subsidiary protection|refugee/i);
  });

  it('treats the four systems as four different rules, not one', () => {
    const g = prose(guide('citizenship-nationality-and-residency-in-police-recruitment'));
    for (const system of ['Ireland', 'England and Wales', 'New Zealand', 'Netherlands']) {
      expect(g, `status page omits ${system}`).toContain(system);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 12-13. Application age != appointment age; degree != universal             */
/* -------------------------------------------------------------------------- */

describe('two age thresholds stay distinct, and no universal qualification appears', () => {
  it('records the application/appointment split where the source states it', () => {
    const nz = moduleProse(recruitmentModule('new-zealand'));
    expect(nz).toMatch(/at least 17 years old to apply and 18 when you start/i);
    expect(nz).toMatch(/no upper age limit/i);
  });

  it('never states a single global police age', () => {
    expect(
      offending(
        /police officers must be (?:between )?\d{2}(?:\s?[-–]\s?\d{2})? years old/i,
        SAFETY_UNITS,
      ),
    ).toEqual([]);
  });

  it('never infers a maximum age from silence', () => {
    expect(offending(/there is (?:a|an) (?:upper|maximum) age limit\b/i, SAFETY_UNITS)).toEqual(
      [],
    );
  });

  it('does not regress the Wave 24 finding on degrees', () => {
    expect(
      offending(
        /\b(?:police officers|applicants|you) (?:need|require|must have) (?:a )?(?:university |college )?degree\b/i,
        SAFETY_UNITS,
      ),
    ).toEqual([]);
    expect(prose(guide('police-entry-requirements-across-systems'))).toMatch(
      /no researched system requires a degree|none of the researched systems requires a degree/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 14-16. Sourcing: country claim, declared source, real official source      */
/* -------------------------------------------------------------------------- */

const COUNTRY_ISO: Record<string, string> = {
  ireland: 'IE',
  netherlands: 'NL',
  'new-zealand': 'NZ',
  germany: 'DE',
  'united-states': 'US',
};

describe('every country claim rests on a source scoped to that country', () => {
  it.each(WAVE_25_COUNTRIES)(
    '%s cites at least one source for its own jurisdiction',
    (country) => {
      const m = recruitmentModule(country);
      expect(m.sources.length).toBeGreaterThan(0);
      const scoped = m.sources
        .map((id) => getSource(id))
        .filter((s) => s?.jurisdiction === COUNTRY_ISO[country]);
      expect(
        scoped.length,
        `${country} cites no source scoped to ${COUNTRY_ISO[country]}`,
      ).toBeGreaterThan(0);
    },
  );

  it.each(WAVE_25_COUNTRIES)('%s cites only sources it declares, block by block', (country) => {
    const m = recruitmentModule(country);
    for (const block of m.blocks) {
      if (block.kind !== 'paragraph' || !block.sources) continue;
      for (const id of block.sources) {
        expect(m.sources, `${country} block cites undeclared ${id}`).toContain(id);
      }
    }
  });

  it.each(WAVE_25_GUIDES)('%s cites only sources it declares, block by block', (slug) => {
    const g = guide(slug);
    for (const block of allBlocks(g)) {
      if (block.kind !== 'paragraph' || !block.sources) continue;
      for (const id of block.sources) {
        expect(g.sources, `${slug} block cites undeclared ${id}`).toContain(id);
      }
    }
  });

  it.each(WAVE_25_COUNTRIES)('%s marks every factual paragraph with a source', (country) => {
    for (const block of recruitmentModule(country).blocks) {
      if (block.kind !== 'paragraph' || block.claim !== 'fact') continue;
      expect(block.sources?.length, `${country}: fact without a source`).toBeGreaterThan(0);
    }
  });

  it.each(WAVE_25_SOURCES)(
    '%s is an official content-confirmed source with a scope note',
    (id) => {
      const s = getSource(id);
      expect(s, `missing source ${id}`).toBeDefined();
      expect(s!.type).toBe('government');
      expect(s!.verificationMethod).toBe('content-confirmed');
      expect(s!.jurisdiction).toBeTruthy();
      expect(s!.url).toMatch(/^https:\/\//);
      expect(s!.note, `${id} records no scope`).toMatch(/SCOPE:/);
    },
  );
});

/* -------------------------------------------------------------------------- */
/* 17-19. Freshness is real, and never faked                                  */
/* -------------------------------------------------------------------------- */

describe('freshness metadata is derived from verification, not from editing', () => {
  it.each(WAVE_25_COUNTRIES)('%s carries an ISO factsVerifiedOn', (country) => {
    const m = recruitmentModule(country);
    expect(m.factsVerifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each(WAVE_25_COUNTRIES)(
    '%s does not claim verification after its sources were read',
    (country) => {
      const m = recruitmentModule(country);
      const latest = m.sources
        .map((id) => getSource(id)?.verifiedOn)
        .filter((d): d is string => Boolean(d))
        .sort()
        .at(-1);
      expect(latest, `${country} cites no source with a verifiedOn date`).toBeTruthy();
      expect(
        m.factsVerifiedOn! <= latest!,
        `${country} claims factsVerifiedOn ${m.factsVerifiedOn} but its newest source was verified ${latest}`,
      ).toBe(true);
    },
  );

  it.each(WAVE_25_COUNTRIES)('%s tells the reader when it was checked', (country) => {
    expect(moduleProse(recruitmentModule(country))).toMatch(
      /verified.{0,40}6 September 2026|checked.{0,30}6 September 2026|on 6 September 2026/i,
    );
  });

  it('displays no relative or fabricated freshness wording', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /\b(?:updated today|last updated just now|updated recently|always up to date)\b/i.test(
          s,
        ),
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 20-25. No vacancies, jobs, academies, courses, salary or deadlines         */
/* -------------------------------------------------------------------------- */

const VACANCY = [
  /\b(?:now recruiting|currently recruiting|applications? (?:are )?(?:now )?open|apply now|vacanc(?:y|ies) available)\b/i,
  /\bapplications? close(?:s)? on\b|\bclosing date is\b|\bdeadline (?:is|for applications)\b/i,
  /\b\d+ (?:positions?|posts?|places?) available\b/i,
  /\b(?:open|closed) for applications\b/i,
];

describe('the wave makes no live-vacancy or job-board claim', () => {
  it.each(VACANCY.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('publishes no salary or pay information', () => {
    const money = [
      /[€$£]\s?[\d,]+/,
      /\b\d[\d,.]*\s?(?:euros?|dollars?|pounds?)\b/i,
      /\b(?:salary|salaries|pay scale|starting pay|wage|wages|allowance of)\b/i,
    ];
    for (const p of money) {
      expect(
        SAFETY_UNITS.filter((s) => p.test(s)),
        `matched ${p.source}`,
      ).toEqual([]);
    }
  });

  it('names no academy, employer or programme that no source establishes', () => {
    const PERMITTED =
      /Garda College|Templemore|Politieacademie|Police College|Bureau of Justice Statistics|Public Appointments Service|Politiekunde|Rechercheur|Politieleider|Wijkagent|Politieagent/;
    const suspicious = SAFETY_UNITS.filter(
      (u) => /\bthe [A-Z][a-z]+ (?:Academy|College|Institute)\b/.test(u) && !PERMITTED.test(u),
    );
    expect(suspicious).toEqual([]);
  });

  it('makes no restricted claim anywhere', () => {
    for (const unit of SAFETY_UNITS) {
      expect(findRestrictedPhrasing(unit), unit.slice(0, 100)).toEqual([]);
    }
  });

  it('publishes no acceptance, rejection or applicant statistic', () => {
    const stat =
      /\b\d+(?:\.\d+)?\s?%\s+of\s+(?:applicants|candidates|recruits)\b|\b(?:acceptance|rejection|success|failure) rate\b|\b[\d,]{3,}\s+applicants\b/i;
    expect(SAFETY_UNITS.filter((s) => stat.test(s))).toEqual([]);
  });

  it('publishes no recruitment ranking', () => {
    /* Denial-aware: the comparison page says "there is no easiest system to join", which contains
     * the phrase in order to refuse it. */
    expect(
      offending(
        /\b(?:easiest|hardest|best|worst) (?:country|force|department|service|system) (?:to join|for a police career)\b/i,
        SAFETY_UNITS,
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 26-30. Selection-gaming safety (Parts Q, R, S, T, U, AL)                   */
/* -------------------------------------------------------------------------- */

const GAMING = [
  /\bhow to (?:pass|beat|get through|clear) (?:police )?(?:vetting|the vetting|background|the medical|the fitness|the interview|selection)\b/i,
  /\b(?:vetting|background) (?:investigators|checks?) (?:usually|typically|first|will) (?:check|look at|start with)\b/i,
  /* W25M9 slipped through "leave out disclosing ANY medical condition": the object need not follow
   * the verb immediately, and a determiner or adjective between them changes nothing about what the
   * sentence is advising. */
  /\b(?:avoid|omit|leave out|conceal|hide|downplay|do not disclose|need not disclose)\b(?:\W+\w+){0,4}\W+(?:conviction|medical|history|condition|diagnosis|record)\b/i,
  /\b(?:say|answer|tell them) (?:that )?["']?[^.]{0,40}["']? when (?:asked|they ask)\b/i,
  /\bmodel answers?\b|\bwhat to say (?:at|in) (?:the )?interview\b|\binterview questions? (?:and answers|leaked)\b/i,
  /\b(?:minimum|least) (?:effort|preparation) (?:to|needed to) pass\b/i,
  /\b(?:dehydrat|cut weight|water load|mask|disguise)\w*\b.{0,30}\b(?:test|medical|assessment)\b/i,
];

describe('nothing here helps anyone game selection', () => {
  it.each(GAMING.map((p) => [p.source, p] as const))(
    'the wave contains nothing matching %s',
    (_label, pattern) => {
      expect(SAFETY_UNITS.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it.each(GAMING.map((p) => [p.source, p] as const))(
    'no published page anywhere in the corpus contains %s',
    (_label, pattern) => {
      const corpus = [
        ...ALL_GUIDES.filter((g) => g.status === 'published').flatMap((g) =>
          sentences(prose(g)),
        ),
        ...PUBLISHED_DOSSIERS.flatMap((d) =>
          d.modules
            .filter((m) => m.status === 'published')
            .flatMap((m) => sentences(moduleProse(m))),
        ),
      ];
      expect(corpus.filter((s) => pattern.test(s))).toEqual([]);
    },
  );

  it('states no fitness standard, protocol or threshold', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /\b\d+\s*(?:push-?ups?|sit-?ups?|press-?ups?|pull-?ups?|repetitions|reps)\b|\b(?:run|complete|cover)\s+\d+(?:\.\d+)?\s*(?:km|miles?|metres|meters)\b|\bin under \d+ (?:seconds|minutes)\b/i.test(
          s,
        ),
      ),
    ).toEqual([]);
  });

  it('states no medical criterion or disqualifying condition', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /\b(?:disqualif\w+|excluded|rejected) (?:if|for|because of) (?:you|a|an) (?:have|has)?\s?(?:condition|diagnosis|asthma|diabetes|colour blindness|eyesight of)\b/i.test(
          s,
        ),
      ),
    ).toEqual([]);
  });

  it('the selection page carries an explicit refusal of assessment detail', () => {
    expect(prose(guide('how-police-selection-is-structured'))).toMatch(
      /does not describe what any assessment contains|not what any of them assesses|how it is scored/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* 31-32. No individualised advice, no recruitment appeal procedure           */
/* -------------------------------------------------------------------------- */

const INDIVIDUAL = [
  /\byou (?:will|would|can|could) (?:qualify|be eligible|be accepted|be rejected)\b/i,
  /\bif you have a (?:conviction|caution|criminal record|medical condition|tattoo)\b/i,
  /\bcheck (?:whether|if) you (?:qualify|are eligible)\b/i,
  /\byou (?:are|would be) eligible (?:if|provided|as long as)\b/i,
];

describe('no individual is told whether they qualify', () => {
  it.each(INDIVIDUAL.map((p) => [p.source, p] as const))(
    'the wave asserts nothing matching %s',
    (_label, pattern) => {
      expect(offending(pattern, SAFETY_UNITS)).toEqual([]);
    },
  );

  it.each(WAVE_25_COUNTRIES)('%s points the reader at the official authority', (country) => {
    expect(moduleProse(recruitmentModule(country))).toMatch(
      /official recruitment|publishes.{0,60}recruitment|the current position is|where the current requirements live/i,
    );
  });

  it.each(WAVE_25_COUNTRIES)('%s disclaims affiliation and application handling', (country) => {
    expect(moduleProse(recruitmentModule(country))).toMatch(
      /not affiliated|does not accept applications|no single national source/i,
    );
  });

  it('no page describes appealing or challenging a recruitment decision', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /\b(?:appeal|challenge|contest|review) (?:a |your |the )?(?:recruitment |selection |vetting )?(?:decision|rejection|refusal)\b/i.test(
          s,
        ),
      ),
    ).toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* 33. Procedural-depth guard, carried forward from Wave 24                   */
/* -------------------------------------------------------------------------- */

const PROCEDURAL_DEPTH =
  /\b(?:filing|file a motion|motions?|notice of appeal|appeal deadline|limitation period|procedural deadline|evidentiary objection|warrant application|grounds of appeal|pleadings?|service of process|judicial review of)\b/i;

/*
 * `serve` needs its legal object. The first form matched "Trainees attest after 36 weeks and THEN
 * SERVE a probationary period" — an ordinary sentence about a career stage, caught by a guard aimed
 * at serving legal process. A guard that fires on that would push honest recruitment prose out of
 * shape, which is the failure mode Wave 24 recorded for keyword guards generally.
 */
/*
 * `file` needs to be a VERB. Run corpus-wide, the first form matched "police investigate, then hand
 * a FILE to a prosecutor" and "then close the FILE" — the noun, in sentences about how a case moves
 * between institutions. `serve` needed its legal object for the same reason (W25M13's sibling), and
 * so does this: a guard against procedural how-tos must not fire on the corpus describing procedure
 * existing.
 */
const PROCEDURAL_HOWTO =
  /\b(?:step \d|first(?:ly)?|then|next|finally|begin by|start by)\b[^.]{0,80}\b(?:file (?:a|an|the|your) (?:notice|motion|claim|appeal|application|complaint|petition)|submit (?:a|an|the|your) (?:notice|motion|claim|appeal|application|form)|lodge (?:a|an|the|your)|apply for (?:a|an|the) (?:warrant|review|order)|appeal against|object to|serve (?:the |a )?(?:notice|pleadings?|papers|process|summons|claim))\b/i;

/**
 * Corpus-wide units. Mutation W25M13 inserted a recruitment appeal filing procedure into a WAVE 24
 * page and survived, because the procedural guards ran only over Wave 25's own units. A
 * product-scope rule that only applies to the newest pages is not a product-scope rule — the drift
 * it exists to prevent will simply happen somewhere older.
 */
const CORPUS_UNITS = [
  ...ALL_GUIDES.filter((g) => g.status === 'published').flatMap((g) => sentences(prose(g))),
  ...PUBLISHED_DOSSIERS.flatMap((d) =>
    d.modules.filter((m) => m.status === 'published').flatMap((m) => sentences(moduleProse(m))),
  ),
];

describe('the recruitment layer does not drift into procedural law', () => {
  it('no published page anywhere in the corpus carries a procedural how-to', () => {
    expect(CORPUS_UNITS.filter((u) => PROCEDURAL_HOWTO.test(u))).toEqual([]);
  });

  it('no published page anywhere describes appealing a RECRUITMENT decision', () => {
    /*
     * Recruitment-scoped. Without the context requirement this matched "People are able in practice
     * to bring a claim or contest a decision" — a rule-of-law sentence about access to justice,
     * which is core corpus content and nothing to do with recruitment appeals.
     */
    const appeal =
      /\b(?:appeal|challenge|contest) (?:a |your |the )?(?:recruitment|selection|vetting|application) (?:decision|rejection|refusal|outcome)\b/i;
    expect(CORPUS_UNITS.filter((s) => appeal.test(s))).toEqual([]);
  });

  it.each(WAVE_25_GUIDES)('%s is not substantially about legal procedure', (slug) => {
    const units = sentences(prose(guide(slug)));
    const hits = units.filter((u) => PROCEDURAL_DEPTH.test(u));
    expect(hits.length / units.length).toBeLessThan(0.08);
    expect(hits.length, `${slug}: ${hits.join(' | ')}`).toBeLessThanOrEqual(2);
  });

  it.each(WAVE_25_COUNTRIES)('%s is not substantially about legal procedure', (country) => {
    const units = sentences(moduleProse(recruitmentModule(country)));
    const hits = units.filter((u) => PROCEDURAL_DEPTH.test(u));
    expect(hits.length, `${country}: ${hits.join(' | ')}`).toBeLessThanOrEqual(2);
  });

  it('contains no step-sequenced procedural instruction', () => {
    expect(SAFETY_UNITS.filter((u) => PROCEDURAL_HOWTO.test(u))).toEqual([]);
  });

  it('the guard still does not fire on a legitimate sentence about a role', () => {
    const legitimate = 'A detective may prepare material used by prosecutors and courts.';
    expect(PROCEDURAL_DEPTH.test(legitimate)).toBe(false);
    expect(PROCEDURAL_HOWTO.test(legitimate)).toBe(false);
  });
});

/* -------------------------------------------------------------------------- */
/* 34. No duplicate country recruitment intent                                */
/* -------------------------------------------------------------------------- */

describe('one canonical owner per recruitment question', () => {
  it('no guide slug duplicates a country recruitment intent', () => {
    const forbidden =
      /^how-to-become-a-police-officer-in-|^police-recruitment-in-|^join-the-police-in-/;
    expect(ALL_GUIDES.filter((g) => forbidden.test(g.slug)).map((g) => g.slug)).toEqual([]);
  });

  it('no /careers or duplicate recruitment route family exists', () => {
    expect(PUBLIC_ROUTE_PATHS.filter((p) => p.startsWith('/careers'))).toEqual([]);
    expect(PUBLIC_ROUTE_PATHS.filter((p) => /^\/police-recruitment/.test(p))).toEqual([]);
  });

  it('no two Wave 25 guides ask the same question', () => {
    const qs = WAVE_25_GUIDES.map((s) => guide(s).question?.toLowerCase().trim());
    expect(new Set(qs).size).toBe(qs.length);
  });

  it('each country recruitment page has exactly one route', () => {
    for (const country of WAVE_25_COUNTRIES) {
      const matches = PUBLIC_ROUTE_PATHS.filter(
        (p) => p === `/countries/${country}/police-recruitment`,
      );
      expect(matches.length).toBe(1);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* 38. Meaningful inbound links from pages that predate this wave             */
/* -------------------------------------------------------------------------- */

describe('the recruitment layer is joined to the corpus', () => {
  const NEW = new Set<string>(WAVE_25_GUIDES);

  it.each(WAVE_25_GUIDES)('%s is linked from a page that predates this wave', (slug) => {
    const inbound = [
      ...ALL_GUIDES.filter(
        (g) => !NEW.has(g.slug) && prose(g).includes(`/law-enforcement/${slug})`),
      ).map((g) => g.slug),
      ...PROFESSIONS.filter((p) => JSON.stringify(p).includes(`/law-enforcement/${slug})`)).map(
        (p) => `prof:${p.slug}`,
      ),
    ];
    expect(inbound.length, `${slug} has no pre-existing inbound link`).toBeGreaterThan(0);
  });

  it.each(WAVE_25_COUNTRIES)(
    '%s recruitment page links back out to the global layer',
    (country) => {
      const m = recruitmentModule(country);
      expect(
        (m.relatedGuides ?? []).length,
        `${country} links to no global guide`,
      ).toBeGreaterThan(0);
      for (const slug of m.relatedGuides ?? []) {
        expect(getGuide(slug), `${country} -> unknown guide ${slug}`).toBeDefined();
      }
    },
  );
});

/* -------------------------------------------------------------------------- */
/* 40. Official destinations are not presented as a partnership               */
/* -------------------------------------------------------------------------- */

describe('official sources are pointed to, never impersonated', () => {
  it('claims no partnership or affiliation with any recruiting body', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /\b(?:in partnership with|our partner|official partner|working with) (?:An Garda|New Zealand Police|the police|Politie)\b/i.test(
          s,
        ),
      ),
    ).toEqual([]);
  });

  it('offers no application affordance', () => {
    expect(
      SAFETY_UNITS.filter((s) =>
        /\b(?:apply now|start your application|submit your application here)\b/i.test(s),
      ),
    ).toEqual([]);
  });

  it('country pages carry no external link markup in content', () => {
    for (const country of WAVE_25_COUNTRIES) {
      expect(
        sentences(moduleProse(recruitmentModule(country))).filter((s) =>
          /\]\(https?:\/\//.test(s),
        ),
        `${country} embeds an external link in content`,
      ).toEqual([]);
    }
  });

  it('the commercial opportunity mapping does not leak into published content', () => {
    const LEAK =
      /\b(?:monetis|monetiz|commercial opportunity|revenue|affiliate|sponsorship|HIGH opportunity|MEDIUM opportunity)\b/i;
    expect(SAFETY_UNITS.filter((s) => LEAK.test(s))).toEqual([]);
    expect(SOURCES.filter((s) => LEAK.test(s.note ?? '')).map((s) => s.id)).toEqual([]);
  });
});
