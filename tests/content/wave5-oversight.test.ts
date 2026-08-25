import { describe, expect, it } from 'vitest';
import { getInstitutionType, institutionPath } from '@/content/institutions';
import { LAW_ENFORCEMENT_GUIDES } from '@/content/guides/law-enforcement';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { SCHEDULED_CHANGES } from '@/content/scheduled-changes';
import { getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide, InstitutionType } from '@/content/types';

/**
 * Wave 5: police oversight institutions.
 *
 * The failure modes here are specific — overclaiming independence, presenting a
 * predecessor body as current, and treating a general rights institution as a police
 * complaints authority — so most of these assertions are about restraint.
 */

const OVERSIGHT = ['independent-police-complaints-body', 'ombuds-and-rights-institution'];
const WAVE_5_GUIDE = 'who-investigates-police';

function inst(slug: string): InstitutionType {
  const found = getInstitutionType(slug);
  if (!found) throw new Error(`Wave 5 institution missing: ${slug}`);
  return found;
}

function guide(slug: string): Guide {
  const found = LAW_ENFORCEMENT_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`Wave 5 guide missing: ${slug}`);
  return found;
}

function instText(i: InstitutionType): string {
  return JSON.stringify(i);
}

function guideText(g: Guide): string {
  const blocks: Block[] = [
    ...g.definition,
    ...g.whyItExists,
    ...g.howItWorks,
    ...g.variation,
    ...g.rightsAndAccountability,
  ];
  const parts = blocks.flatMap((b) => {
    if (b.kind === 'paragraph') return [b.text];
    if (b.kind === 'list') return b.items;
    if (b.kind === 'callout') return [b.title, b.text];
    return b.items.flatMap((i) => [i.term, i.description]);
  });
  return [...parts, ...g.misconceptions.map((m) => m.reality)].join('\n');
}

/* -------------------------------------------------------------------------- */
/* Routes and taxonomy                                                        */
/* -------------------------------------------------------------------------- */

describe('routes', () => {
  it('routes both oversight institution types', () => {
    for (const slug of OVERSIGHT) {
      expect(PUBLIC_ROUTE_PATHS).toContain(institutionPath(inst(slug)));
    }
  });

  it('routes the who-investigates guide', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain(`/law-enforcement/${WAVE_5_GUIDE}`);
  });

  it('extends the existing registry rather than creating a competing taxonomy', () => {
    /* Both are ordinary InstitutionType records resolved by the same accessor. */
    for (const slug of OVERSIGHT) {
      expect(inst(slug).slug).toBe(slug);
      expect(inst(slug).status).toBe('published');
    }
  });

  it('creates no route for a candidate the matrix deferred or rejected', () => {
    for (const path of [
      '/institutions/internal-affairs',
      '/institutions/professional-standards-unit',
      '/institutions/police-inspectorate',
      '/institutions/police-ombudsman',
      '/institutions/police-integrity-commission',
      '/institutions/anti-corruption-commission',
      '/institutions/data-protection-authority',
      '/institutions/public-audit-institution',
      '/institutions/judicial-oversight',
      '/institutions/prosecutorial-oversight',
      '/institutions/civilian-police-review-board',
      '/law-enforcement/how-police-complaints-are-investigated',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, `${path} was deferred or rejected`).not.toContain(path);
    }
  });

  /*
   * `/law-enforcement/internal-vs-external-police-oversight` was on the list above until
   * Wave 7. Wave 5 deferred it as a restatement of `how-police-are-held-to-account`, which was
   * correct on Wave 5's evidence: that evidence established which bodies exist and what each
   * can do, and a page about the internal/external split would have added a heading and no
   * fact.
   *
   * Wave 7 reversed it on new evidence, not on a change of view. Sweden's police authority
   * describes its investigating department as "en oberoende avdelning INOM Polismyndigheten",
   * and section 87 of Kenya's National Police Service Act insulates an INTERNAL unit from
   * police command by statute. Those two clauses make "external means independent" a
   * demonstrably false proposition rather than an imprecise one, and that proposition is not
   * addressed anywhere in `how-police-are-held-to-account`.
   *
   * The reversal is asserted here rather than deleted silently, so that the guide cannot be
   * unpublished without someone reading why it was published.
   */
  it('publishes internal-vs-external only while the evidence that reversed Wave 5 is present', () => {
    const path = '/law-enforcement/internal-vs-external-police-oversight';
    if (!PUBLIC_ROUTE_PATHS.includes(path)) return;
    const guide = LAW_ENFORCEMENT_GUIDES.find(
      (g) => g.slug === 'internal-vs-external-police-oversight',
    );
    expect(guide, 'the route exists but the guide does not').toBeDefined();
    expect(guide?.sources).toContain('se-polisen-sarskilda-utredningar');
    expect(guide?.sources).toContain('ke-nps-act-cap84-iau');
  });
});

/* -------------------------------------------------------------------------- */
/* Internal vs external                                                       */
/* -------------------------------------------------------------------------- */

describe('oversight posture is recorded, not left to prose', () => {
  it.each(OVERSIGHT)('%s declares an oversight posture', (slug) => {
    expect(['internal', 'external', 'mixed']).toContain(inst(slug).oversightPosture);
  });

  it('classifies both published types as external', () => {
    for (const slug of OVERSIGHT) {
      expect(inst(slug).oversightPosture).toBe('external');
    }
  });

  it('never sets a posture on a non-oversight institution type', () => {
    /* The field is for oversight bodies; a police force does not oversee itself by type. */
    for (const slug of ['municipal-police', 'gendarmerie', 'state-police']) {
      expect(getInstitutionType(slug)!.oversightPosture).toBeUndefined();
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Independence is claimed only where sourced                                 */
/* -------------------------------------------------------------------------- */

describe('independence is not overclaimed', () => {
  /*
   * The brief's rule: a body is not independent merely because its name says so, because
   * it sits outside the police, or because it has civilian members. Where the pages use
   * the word, they attach a statutory or constitutional basis.
   */
  it('states a statutory or constitutional basis wherever it claims independence', () => {
    for (const slug of OVERSIGHT) {
      const text = instText(inst(slug));
      if (!/independen/i.test(text)) continue;
      expect(
        /Act\s|statut|constitutional|under law|B-VG|Instrument of Government/i.test(text),
        `${slug} claims independence with no basis stated`,
      ).toBe(true);
    }
  });

  it('distinguishes position from independence explicitly', () => {
    const text = instText(inst('independent-police-complaints-body'));
    expect(text).toMatch(/Position and independence are different|being outside the police/i);
  });

  it('makes no comparative or superlative independence claim', () => {
    for (const slug of OVERSIGHT) {
      const text = instText(inst(slug)).toLowerCase();
      for (const phrase of [
        'most independent',
        'least independent',
        'weakest oversight',
        'strongest oversight',
        'best oversight',
        'more independent than',
      ]) {
        expect(text, `${slug}: "${phrase}"`).not.toContain(phrase);
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Effectiveness is never inferred from design                                */
/* -------------------------------------------------------------------------- */

describe('no effectiveness inference', () => {
  it('states that existence is a fact about design, not outcomes', () => {
    const text = instText(inst('independent-police-complaints-body'));
    expect(text).toMatch(
      /design, not about outcomes|does not establish that any of these bodies is effective/i,
    );
  });

  it('introduces no restricted claim on any Wave 5 page', () => {
    const texts = [
      ...OVERSIGHT.map((s) => instText(inst(s)).toLowerCase()),
      guideText(guide(WAVE_5_GUIDE)).toLowerCase(),
    ];
    for (const text of texts) {
      for (const phrase of [
        'substantiation rate',
        'complaints upheld',
        'public confidence in',
        'more effective than',
        'reduces misconduct',
        'corruption rate',
      ]) {
        expect(text, `restricted claim: "${phrase}"`).not.toContain(phrase);
      }
    }
  });

  it('the guide corrects the effectiveness inference directly', () => {
    const realities = guide(WAVE_5_GUIDE)
      .misconceptions.map((m) => m.reality)
      .join(' ');
    expect(realities).toMatch(/fact about institutional design|separate, empirical question/i);
  });
});

/* -------------------------------------------------------------------------- */
/* General mandate is not a police mandate                                    */
/* -------------------------------------------------------------------------- */

describe('general rights bodies are not presented as police bodies', () => {
  it('the ombuds page states its mandate is general rather than police-specific', () => {
    const text = instText(inst('ombuds-and-rights-institution'));
    expect(text).toMatch(
      /general mandate|not a police-specific mandate|not because it was built for them/i,
    );
  });

  it('warns against treating an ombuds as a police complaints body', () => {
    expect(instText(inst('ombuds-and-rights-institution'))).toMatch(
      /With a police complaints body|overstates what it was created to do/i,
    );
  });

  it('does not assert that every rights institution covers police', () => {
    const text = instText(inst('ombuds-and-rights-institution'));
    expect(text).toMatch(/depends on that body|founding instrument|question about that body/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Temporal integrity                                                         */
/* -------------------------------------------------------------------------- */

describe('current and historical bodies are kept apart', () => {
  it('names Fiosru as current and GSOC as replaced', () => {
    const text = instText(inst('independent-police-complaints-body'));
    expect(text).toMatch(/Fiosr/);
    expect(text).toMatch(/GSOC|Garda Síochána Ombudsman Commission/);
    /* GSOC must appear as a predecessor, never as the current body. */
    expect(text).toMatch(/replaced the Garda Síochána Ombudsman Commission|became Fiosr/i);
    expect(text).toMatch(/2 April 2025/);
  });

  /*
   * Checked SENTENCE BY SENTENCE over the real prose fields, not over JSON.
   *
   * Two earlier versions failed, and both failures were instructive. A blocklist looking
   * for "GSOC is the current" was defeated by an obvious paraphrase. A positive rule then
   * flagged the page's own warning — "A page naming GSOC as the current complaints body
   * would now be wrong" — which is exactly the sentence a reader most benefits from, so
   * that construction counts as marking the body past.
   *
   * Presenting a dissolved body as current is the failure the brief made Ireland the test
   * case for, so the rule is positive: every sentence naming the predecessor must mark it
   * as no longer current.
   */
  it('marks the predecessor as past in every sentence that names it', () => {
    const i = inst('independent-police-complaints-body');
    const prose = [
      i.summary,
      i.purpose ?? '',
      i.governanceNote ?? '',
      i.accountabilityNote ?? '',
      i.presenceNote ?? '',
      i.historyNote ?? '',
      ...i.commonConfusions,
      ...(i.countryExamples ?? []).map((e) => e.note),
      ...(i.counterExamples ?? []).map((e) => e.note),
      ...(i.uncertainty ?? []),
    ].join(' ');

    const sentences = prose
      .split(/(?<=\.)\s+/)
      .filter((sentence) => /GSOC|Garda Síochána Ombudsman Commission/.test(sentence));

    expect(
      sentences.length,
      'the predecessor must actually be named somewhere',
    ).toBeGreaterThan(0);

    for (const sentence of sentences) {
      expect(
        /replaced|became|historical|predecessor|former|no longer|would now be wrong|would be wrong/i.test(
          sentence,
        ),
        `predecessor named without a past marker: ${sentence.slice(0, 140)}`,
      ).toBe(true);
    }
  });

  it('is consistent with the ScheduledChange already modelled', () => {
    const change = SCHEDULED_CHANGES.find((c) => c.id === 'ie-policing-oversight-reform-2025');
    expect(change, 'the Ireland oversight reform must be modelled').toBeDefined();
    expect(change!.effectiveOn).toBe('2025-04-02');
    /* The page's transition date must match the modelled change. */
    expect(instText(inst('independent-police-complaints-body'))).toMatch(/2 April 2025/);
  });
});

/* -------------------------------------------------------------------------- */
/* Evidence                                                                   */
/* -------------------------------------------------------------------------- */

describe('country evidence', () => {
  it.each(OVERSIGHT)('%s backs every country example with a country-scoped source', (slug) => {
    const i = inst(slug);
    const scopes = new Set(i.sources.map((id) => getSource(id)!.jurisdiction));
    for (const example of [...(i.countryExamples ?? []), ...(i.counterExamples ?? [])]) {
      const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug)!;
      expect(
        scopes.has(dossier.countryCode),
        `${slug} cites ${example.countrySlug} without a ${dossier.countryCode} source`,
      ).toBe(true);
    }
  });

  it('backs every country example on the guide with a country-scoped source', () => {
    const g = guide(WAVE_5_GUIDE);
    const scopes = new Set(g.sources.map((id) => getSource(id)!.jurisdiction));
    for (const example of [...(g.countryExamples ?? []), ...(g.counterExamples ?? [])]) {
      const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug)!;
      expect(
        scopes.has(dossier.countryCode),
        `${WAVE_5_GUIDE} cites ${example.countrySlug} without a ${dossier.countryCode} source`,
      ).toBe(true);
    }
  });

  it.each([...OVERSIGHT, WAVE_5_GUIDE])('%s carries at least one counterexample', (slug) => {
    const record = OVERSIGHT.includes(slug) ? inst(slug) : guide(slug);
    expect((record.counterExamples ?? []).length).toBeGreaterThan(0);
  });

  it('uses Nigeria as the no-dedicated-body counterexample, sourced', () => {
    const i = inst('independent-police-complaints-body');
    expect((i.counterExamples ?? []).map((e) => e.countrySlug)).toContain('nigeria');
    expect(i.sources).toContain('ng-constitution');
    expect(instText(i)).toMatch(/no separate independent police-complaints board/i);
  });

  it('records that powers differ rather than implying a shared mandate', () => {
    const text = instText(inst('independent-police-complaints-body'));
    expect(text).toMatch(/Investigating is not the same as recommending/i);
    expect(text).toMatch(/shared label is the weakest thing/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Safety and neutrality                                                      */
/* -------------------------------------------------------------------------- */

describe('safety and neutrality', () => {
  it('contains no framing of oversight bodies as pro- or anti-police', () => {
    const texts = [
      ...OVERSIGHT.map((s) => instText(inst(s)).toLowerCase()),
      guideText(guide(WAVE_5_GUIDE)).toLowerCase(),
    ];
    for (const text of texts) {
      for (const phrase of ['anti-police', 'protectors of police', 'police apologist']) {
        expect(text, `"${phrase}"`).not.toContain(phrase);
      }
    }
  });

  it('contains no guidance for defeating or avoiding an investigation', () => {
    const texts = [
      ...OVERSIGHT.map((s) => instText(inst(s)).toLowerCase()),
      guideText(guide(WAVE_5_GUIDE)).toLowerCase(),
    ];
    for (const text of texts) {
      for (const phrase of [
        'avoid investigation',
        'defeat the investigation',
        'destroy evidence',
        'how to avoid',
        'loophole',
      ]) {
        expect(text, `"${phrase}"`).not.toContain(phrase);
      }
    }
  });

  it('the guide states it is not legal advice and does not explain how to complain', () => {
    expect(JSON.stringify(guide(WAVE_5_GUIDE))).toMatch(
      /not legal advice|does not describe how to make a complaint/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Hygiene                                                                    */
/* -------------------------------------------------------------------------- */

describe('editorial hygiene', () => {
  it.each(OVERSIGHT)('%s cites at least three resolvable sources', (slug) => {
    const i = inst(slug);
    expect(i.sources.length).toBeGreaterThanOrEqual(3);
    for (const id of i.sources) expect(getSource(id), id).toBeDefined();
  });

  it('does not duplicate the accountability guides', () => {
    /* The institution pages must not restate the mechanism-level overview. */
    for (const slug of OVERSIGHT) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/law-enforcement/${slug}`);
    }
    /* And the guide links to them rather than redefining them. */
    expect(guide(WAVE_5_GUIDE).relatedInstitutions).toContain(
      'independent-police-complaints-body',
    );
  });

  it('gives the Wave 5 pages distinct titles and questions', () => {
    const titles = [...OVERSIGHT.map((s) => inst(s).title), guide(WAVE_5_GUIDE).title];
    expect(new Set(titles).size).toBe(titles.length);
  });
});
