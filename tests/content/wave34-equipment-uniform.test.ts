import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { ALL_GUIDES, getGuide, guidePath } from '@/content/guides';
import { SOURCES, getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, Guide } from '@/content/types';

/**
 * Wave 34: uniforms and insignia as institutional history.
 *
 * TWO RISKS, AND THE FIRST IS IMPERSONATION.
 *
 * Every source read for this wave sits beside material this platform must not publish. The Garda
 * uniform policy gives badge placement, chevron positions and nameplate dimensions; the insignia
 * page could easily have become a rank-recognition chart. Wave 26 already ruled that out — "detail
 * that would assist imitation is deliberately absent" — and the image policy permits insignia only
 * as documentation, never arranged so a page could be mistaken for an official communication. The
 * guards make that a rule.
 *
 * THE SECOND IS COMMERCE, and this is the first wave designed with future commerce optionality in
 * mind. That makes the separation more important, not less. The rule the whole classification
 * exists to protect is that an editorial entity page must never silently become a commercial one:
 * "What is a police flashlight?" and "Best police flashlights to buy" must never be the same URL.
 * Nothing in this wave sells, ranks, recommends or names a product — and one guard asserts that the
 * internal classification document never reaches the published output.
 */

const WAVE_34 = [
  'police-insignia-and-where-it-comes-from',
  'when-a-police-uniform-changes',
  'whether-a-uniform-is-the-same-for-everyone',
] as const;

const NEW_SOURCES = [
  'nz-police-insignia',
  'ie-garda-new-operational-uniform-2022',
  'ie-garda-uniform-overview',
  'nz-police-women-in-uniform',
] as const;

/** Wave 26 owns these; this wave must not re-answer them. */
const WAVE_26 = [
  'what-police-equipment-is-for',
  'why-police-wear-a-uniform',
  'how-police-officers-are-identified',
  'issued-equipment-and-personal-equipment',
  'equipment-standards-and-testing',
  'documentation-equipment-in-policing',
  'body-worn-video-as-institutional-equipment',
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

/** Every equipment or uniform page in the corpus, not only this wave's. */
const EQUIPMENT_CLUSTER = [...WAVE_34, ...WAVE_26] as const;

describe('the cluster exists and creates no new route family', () => {
  it.each(WAVE_34)('%s is published, safety-cleared and routed', (slug) => {
    const g = guide(slug);
    expect(g.status).toBe('published');
    expect(g.review).toBe('fact-checked');
    expect(g.safetyReview).toBe('cleared');
    expect(g.section).toBe('law-enforcement');
    expect(PUBLIC_ROUTE_PATHS).toContain(guidePath(g));
    expect(g.factsVerifiedOn).toBeTruthy();
  });

  it('no /equipment, /gear or /shop route family exists', () => {
    /*
     * The brief asked whether equipment now justifies a first-class hub. Ten pages across two waves
     * does not compel one, and moving the seven Wave 26 pages would churn canonicals that have been
     * live and linked since. Recorded as a decision rather than an omission.
     */
    for (const prefix of ['/equipment', '/gear', '/shop', '/products', '/uniforms']) {
      expect(
        PUBLIC_ROUTE_PATHS.filter((p) => p === prefix || p.startsWith(`${prefix}/`)),
        `a ${prefix} route family was created`,
      ).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Impersonation: no reproducible detail about official markings              */
/* -------------------------------------------------------------------------- */

describe('nothing that would help someone imitate a police uniform', () => {
  it.each(WAVE_34)('%s describes no placement, dimension or appearance', (slug) => {
    const REPRODUCIBLE =
      /\b(?:worn (?:on|above|below) the|above the right breast|epaulette|chevron|shoulder loop|\d+\s?cm|embossed|embroidered|gold or polished brass|font)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => REPRODUCIBLE.test(s));
    expect(offenders, `${slug} publishes reproducible marking detail`).toEqual([]);
  });

  it.each(WAVE_34)('%s is not a rank-recognition guide', (slug) => {
    const RECOGNITION =
      /\b(?:you can tell .{0,30}rank|identified by (?:the )?(?:number|bars|pips|crowns)|means the officer is a|indicates? the rank of)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => RECOGNITION.test(s));
    expect(offenders, `${slug} teaches rank recognition`).toEqual([]);
  });

  it('the insignia page states its own limit', () => {
    const g = guide('police-insignia-and-where-it-comes-from');
    expect(allText(g), 'the imitation limit is not recorded').toMatch(
      /assists imitation|reproducible detail|NOT described/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Commerce: the separation this wave exists to protect                      */
/* -------------------------------------------------------------------------- */

describe('nothing in the equipment cluster sells, ranks or recommends', () => {
  it.each(EQUIPMENT_CLUSTER)('%s names no manufacturer, model or supplier', (slug) => {
    /*
     * Narrowed after the first run flagged equipment-standards-and-testing, which says "A
     * manufacturer whose model meets the standard is subject to six follow-up inspections". That
     * is regulatory oversight OF manufacturers — the opposite of commerce — and the bare nouns
     * could not tell it apart from naming one. The risk is a specific supplier or a purchasing
     * route, so the pattern now looks for naming and for commercial action.
     */
    const COMMERCIAL =
      /\b(?:available from|priced at|costs? [£$€]|purchase from|order from|buy (?:it|them|from)|supplied by [A-Z]|made by [A-Z]|manufactured by [A-Z]|stocked by|our (?:partner|affiliate))\b/;
    const offenders = asserted(guide(slug)).filter((s) => COMMERCIAL.test(s));
    expect(offenders, `${slug} contains commercial material`).toEqual([]);
  });

  it.each(EQUIPMENT_CLUSTER)('%s publishes no ranking or recommendation', (slug) => {
    const RANKING =
      /\b(?:best (?:police |tactical )?\w+|top \d+|our pick|we recommend|highly rated|most popular|worth buying)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => RANKING.test(s));
    expect(offenders, `${slug} ranks or recommends`).toEqual([]);
  });

  it('no route in the corpus is shaped like a shopping page', () => {
    const SHOPPING = /\/(?:best|top|buy|shop|deals|review|compare)-/i;
    expect(PUBLIC_ROUTE_PATHS.filter((p) => SHOPPING.test(p))).toEqual([]);
  });

  it('no outbound source is a retailer or marketplace', () => {
    const BAD = /\b(?:shop|store|buy|amazon|ebay|aliexpress|etsy|checkout|cart)\b/i;
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

  it('the internal commercial classification never reaches the published output', () => {
    /*
     * The brief requires the opportunity map to exist and requires it not to be exposed. `docs/` is
     * not routed, but "not routed today" is an assumption worth turning into an assertion, because
     * exposing an internal commercial strategy would be a serious and quiet failure.
     */
    const mapPath = join(
      process.cwd(),
      'docs/research/equipment-commercial-opportunity-map.md',
    );
    expect(existsSync(mapPath), 'the opportunity map is missing').toBe(true);

    /*
     * Mutation M14 SURVIVED the first version, which examined only the built `out/` directory. Two
     * things were wrong with that. A mutation run against the unit suite does not rebuild, so the
     * export was stale and could not contain the injected text; and the export is the LAST place a
     * leak appears, not the first. Content is where it would arrive, so content is checked first.
     */
    const CLASSIFICATION =
      /\b(?:tier [abc]\b|commerce-compatible|commercial opportunity|affiliate suitability|editorial-separation requirement|INAPPROPRIATE\b)/i;
    const leaked: string[] = [];
    for (const g of ALL_GUIDES) {
      for (const s of sentences(allText(g))) {
        if (CLASSIFICATION.test(s)) leaked.push(`${g.slug}: ${s.trim().slice(0, 100)}`);
      }
    }
    for (const src of SOURCES) {
      if (src.note && CLASSIFICATION.test(src.note)) leaked.push(`source:${src.id}`);
    }
    expect(leaked, 'internal commercial classification vocabulary appears in content').toEqual(
      [],
    );

    const out = join(process.cwd(), 'out');
    if (!existsSync(out)) return; // no build in this run; the content check above is the primary one
    const marker = 'commercial opportunity map';
    const offenders: string[] = [];
    const walk = (dir: string): void => {
      for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) walk(full);
        else if (/\.(?:html|json|txt|xml)$/i.test(entry)) {
          const body = readFileSync(full, 'utf8').toLowerCase();
          if (body.includes(marker) || body.includes('tier a — future commerce')) {
            offenders.push(full);
          }
        }
      }
    };
    walk(out);
    expect(offenders, 'the internal classification appears in the exported site').toEqual([]);
  });
});

/* -------------------------------------------------------------------------- */
/* Safety across the whole equipment cluster, not only this wave              */
/* -------------------------------------------------------------------------- */

describe('no equipment page explains use, defeat or exploitation', () => {
  it.each(EQUIPMENT_CLUSTER)('%s describes no use or configuration technique', (slug) => {
    const TECHNIQUE =
      /\b(?:how to (?:use|wear|fit|configure|mount)|worn by placing|technique for|grip the|switch it to|set it to)\b/i;
    const offenders = asserted(guide(slug)).filter((s) => TECHNIQUE.test(s));
    expect(offenders, `${slug} explains use or configuration`).toEqual([]);
  });

  it.each(EQUIPMENT_CLUSTER)(
    '%s contains no defeat, disabling or exploitation material',
    (slug) => {
      const DEFEAT =
        /\b(?:defeat|penetrat(?:e|ing) (?:the )?armour|disable the camera|switch off the camera|intercept(?:ing)? (?:the )?radio|scanner|jam(?:ming)?|bypass|vulnerabilit|weak point)\b/i;
      const offenders = asserted(guide(slug)).filter((s) => DEFEAT.test(s));
      expect(offenders, `${slug} contains defeat or exploitation material`).toEqual([]);
    },
  );

  it('no equipment page publishes a protection level, specification or performance figure', () => {
    const SPEC =
      /\b(?:level (?:II|III|IV)A?\b|NIJ 0101|ballistic rating|lumens|calibre|caliber|joules|decibels|rated to stop)\b/i;
    for (const slug of EQUIPMENT_CLUSTER) {
      const offenders = asserted(guide(slug)).filter((s) => SPEC.test(s));
      expect(offenders, `${slug} publishes a specification`).toEqual([]);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Ownership, sourcing, scope, linkage, characters                           */
/* -------------------------------------------------------------------------- */

describe('ownership and sourcing', () => {
  it.each(WAVE_26)('%s still exists and keeps its question', (slug) => {
    expect(getGuide(slug), `${slug} has disappeared`).toBeDefined();
  });

  it('no new page re-answers what a uniform is for', () => {
    /*
     * why-police-wear-a-uniform owns that. These pages may link to it and may not restate it.
     */
    const OWNED =
      /\b(?:the (?:first|main) (?:stated )?function of (?:the|a) uniform|a uniform is for|visibility and recognisability are)\b/i;
    const routes = /\]\(\/law-enforcement\/why-police-wear-a-uniform\)/;
    for (const slug of WAVE_34) {
      const offenders = asserted(guide(slug)).filter((s) => OWNED.test(s) && !routes.test(s));
      expect(offenders, `${slug} re-answers what a uniform is for`).toEqual([]);
    }
  });

  it.each(WAVE_34)('%s attaches a source to every fact block', (slug) => {
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

  it('the source notes record what a search summary claimed and the page did not', () => {
    /*
     * Content-confirming caught three claims that existed only in search summaries. A record that
     * a claim was rejected is more useful than silence, because the next editor will meet the same
     * summary and needs to know it was already checked.
     */
    const notes = NEW_SOURCES.map((id) => getSource(id)?.note ?? '').join('\n');
    expect(notes).toMatch(/DOES NOT SUPPORT/);
    expect(notes, 'the rejected search-summary claims are not recorded').toMatch(
      /search summary/i,
    );
  });

  it('declared jurisdictions are carried by the sources cited', () => {
    for (const slug of WAVE_34) {
      const g = guide(slug);
      const covered = new Set(
        g.sources.map((id) => getSource(id)?.jurisdiction).filter(Boolean),
      );
      for (const code of g.jurisdiction ?? []) {
        expect(covered, `${slug} declares ${code} with no source carrying it`).toContain(code);
      }
    }
  });

  it('the dated announcement is treated as dated, not as the present', () => {
    /*
     * Mutation M8 SURVIVED the first version, which checked only that the uncertainty list
     * recorded the date. It said nothing about the BODY, so "The uniform was changed again last
     * year and is the current design" passed while the page had begun asserting a present state
     * from a 2022 announcement. Recording a temporal limit in one field does not stop another
     * field breaking it.
     */
    const g = guide('when-a-police-uniform-changes');
    expect((g.uncertainty ?? []).join('\n'), 'the temporal limit is not recorded').toMatch(
      /dated|2022|since was NOT RESEARCHED/i,
    );
    expect(getSource('ie-garda-new-operational-uniform-2022')?.publishedOn).toBe('2022-08-15');

    const VAGUE_RECENCY =
      /\b(?:last year|this year|recently|just changed|newly introduced|is (?:now )?the current (?:design|uniform)|at present)\b/i;
    for (const slug of WAVE_34) {
      const offenders = asserted(guide(slug)).filter((s) => VAGUE_RECENCY.test(s));
      expect(offenders, `${slug} presents a dated event as the present`).toEqual([]);
    }
  });

  it('pages that predate this wave link into it', () => {
    const NEW_PATHS = WAVE_34.map((s) => guidePath(guide(s)));
    const older = ALL_GUIDES.filter((g) => !(WAVE_34 as readonly string[]).includes(g.slug))
      .map((g) => allText(g))
      .join('\n');
    for (const path of NEW_PATHS) {
      expect(older, `nothing that predates this wave links to ${path}`).toContain(path);
    }
  });

  it('the cluster is character-clean', () => {
    for (const slug of WAVE_34) {
      const bad = [...allText(guide(slug))].filter(
        (c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f,
      );
      expect(bad, `${slug} contains C1 control characters`).toEqual([]);
    }
  });
});
