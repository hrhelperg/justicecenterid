import { describe, expect, it } from 'vitest';
import { getDossier, getModule, countryModulePath } from '@/content/dossiers';
import { getInstitutionType } from '@/content/institutions';
import { LAW_ENFORCEMENT_GUIDES } from '@/content/guides/law-enforcement';
import { ROUTED_INSTITUTION_TYPES } from '@/content/institutions';
import { getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { Block, CountryModuleContent, InstitutionType } from '@/content/types';

/**
 * Wave 6: France oversight.
 *
 * The failure mode this wave is built against is not missing content — it is a French
 * institution described through an English label that does not fit it. So most of these
 * assertions are about the two facts a label would destroy: that the inspections générales
 * are INSIDE the forces they examine, and that in France the external bodies hold fewer
 * powers than the internal ones.
 */

const FRANCE = 'france';
const OVERSIGHT_PATH = countryModulePath(FRANCE, 'oversight');

function franceOversight(): CountryModuleContent {
  const dossier = getDossier(FRANCE);
  if (!dossier) throw new Error('France dossier missing');
  const mod = getModule(dossier, 'oversight');
  if (!mod) throw new Error('France oversight module missing');
  return mod;
}

/** Prose a reader actually sees, excluding field names and metadata. */
function moduleProse(mod: CountryModuleContent): string {
  const parts = mod.blocks.flatMap((block: Block) => {
    if (block.kind === 'paragraph') return [block.text];
    if (block.kind === 'list') return block.items;
    if (block.kind === 'callout') return [block.title, block.text];
    return block.items.flatMap((i) => [i.term, i.description]);
  });
  return [mod.title, mod.summary, ...parts, ...(mod.uncertainty ?? [])].join('\n');
}

function inst(slug: string): InstitutionType {
  const found = getInstitutionType(slug);
  if (!found) throw new Error(`institution missing: ${slug}`);
  return found;
}

/* -------------------------------------------------------------------------- */
/* The module exists and is routed                                            */
/* -------------------------------------------------------------------------- */

describe('the France oversight module', () => {
  it('is published and routed', () => {
    const mod = franceOversight();
    expect(mod.status).toBe('published');
    expect(mod.review).toBe('fact-checked');
    expect(PUBLIC_ROUTE_PATHS).toContain(OVERSIGHT_PATH);
  });

  it('carries no deferredReason, because it is no longer deferred', () => {
    expect(franceOversight().deferredReason).toBeUndefined();
  });

  it('names all four bodies the old deferral said were unconfirmed', () => {
    const prose = moduleProse(franceOversight());
    for (const body of ['IGPN', 'IGGN', 'Défenseur des droits', 'CGLPL']) {
      expect(prose, `${body} is not named`).toContain(body);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* M1 — every French claim is backed by a French source                       */
/* -------------------------------------------------------------------------- */

describe('France sourcing', () => {
  /**
   * MUTATION PROOF M1. Deleting any France source from the module, or repointing one at a
   * non-FR jurisdiction, fails this test. Observed to fail by removing
   * `fr-decret-2013-784-igpn` from the module's sources.
   */
  it('cites only sources that exist and are scoped to France', () => {
    const mod = franceOversight();
    expect(mod.sources.length).toBeGreaterThanOrEqual(10);

    for (const id of mod.sources) {
      const source = getSource(id);
      expect(source, `unknown source ${id}`).toBeDefined();
      expect(source!.jurisdiction, `${id} is not scoped to France`).toBe('FR');
      expect(source!.verificationMethod, `${id} was not read`).toBe('content-confirmed');
    }
  });

  it('rests on the specific instruments the claims come from', () => {
    /* Named individually: a count would survive swapping one instrument for another. */
    const mod = franceOversight();
    for (const id of [
      'fr-decret-2013-784-igpn',
      'fr-code-defense-iggn',
      'fr-arrete-2025-iggn',
      'fr-loi-organique-2011-333',
      'fr-igpn-signalement',
      'fr-csi-r434-1',
    ]) {
      expect(mod.sources, `missing instrument ${id}`).toContain(id);
    }
  });

  it('backs the France entries on the pages that gained one', () => {
    /* A country example is worthless without a country-scoped source on the same record. */
    const complaints = inst('independent-police-complaints-body');
    const ombuds = inst('ombuds-and-rights-institution');
    const guide = LAW_ENFORCEMENT_GUIDES.find((g) => g.slug === 'who-investigates-police');

    expect(complaints.counterExamples?.some((e) => e.countrySlug === FRANCE)).toBe(true);
    expect(complaints.sources.some((id) => getSource(id)?.jurisdiction === 'FR')).toBe(true);

    expect(ombuds.countryExamples?.some((e) => e.countrySlug === FRANCE)).toBe(true);
    expect(ombuds.sources.some((id) => getSource(id)?.jurisdiction === 'FR')).toBe(true);

    expect(guide?.countryExamples?.some((e) => e.countrySlug === FRANCE)).toBe(true);
    expect(guide?.sources.some((id) => getSource(id)?.jurisdiction === 'FR')).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* M2 — the internal/external axis cannot be flipped                          */
/* -------------------------------------------------------------------------- */

describe('position of each body', () => {
  /**
   * MUTATION PROOF M2. Rewriting the IGPN as external — or dropping the sentence placing it
   * inside the DGPN — fails this test. Observed to fail by changing "un service actif de la
   * direction générale de la police nationale" to "a body independent of the police".
   *
   * The rule reads the prose for the statutory attachment rather than blocklisting the word
   * "independent", because a blocklist is beaten by a paraphrase and would also flag the
   * page's own accurate use of the word about the Défenseur des droits.
   */
  it('states in the page prose that the IGPN sits inside the police it examines', () => {
    const prose = moduleProse(franceOversight());
    expect(prose).toContain('service actif de la direction générale de la police nationale');
  });

  it('states that the gendarmerie’s director general disposes of the IGGN', () => {
    const prose = moduleProse(franceOversight());
    expect(prose).toContain(
      "Le directeur général de la gendarmerie nationale dispose de l'inspection générale de la gendarmerie nationale",
    );
  });

  it('never describes either inspection générale as independent or external', () => {
    const mod = franceOversight();
    const internalEntries = mod.blocks.flatMap((block: Block) =>
      block.kind === 'definitionList'
        ? block.items.filter((i) => i.term.startsWith('IGPN') || i.term.startsWith('IGGN'))
        : [],
    );
    expect(internalEntries).toHaveLength(2);
    for (const entry of internalEntries) {
      expect(entry.term).toContain('(internal)');
      expect(entry.description).not.toMatch(/\bindependent\b/i);
    }
  });

  it('keeps the two external authorities marked external and general-mandate', () => {
    const mod = franceOversight();
    const external = mod.blocks.flatMap((block: Block) =>
      block.kind === 'definitionList'
        ? block.items.filter((i) => i.term.includes('external'))
        : [],
    );
    expect(external).toHaveLength(2);
    for (const entry of external) {
      expect(entry.term).toContain('general mandate');
    }
  });

  it('says on the page that external does not mean more powerful', () => {
    /* The wave's central finding. If this sentence goes, the page teaches the opposite. */
    const prose = moduleProse(franceOversight());
    expect(prose).toMatch(/Being outside is not the same as being more powerful/i);
  });

  it('records that the external authorities cannot sanction', () => {
    const prose = moduleProse(franceOversight());
    expect(prose).toMatch(/cannot impose a sanction/i);
    expect(prose).toMatch(/no power to sanction/i);
  });
});

/* -------------------------------------------------------------------------- */
/* M3 — abrogated and superseded texts cannot read as current                 */
/* -------------------------------------------------------------------------- */

describe('temporal integrity of the French instruments', () => {
  /**
   * MUTATION PROOF M3. Citing the abrogated arrêté of 15 January 2019 as the IGGN's current
   * basis fails this test. Observed to fail by changing the module's "arrêté of 23 April
   * 2025" to "arrêté of 15 January 2019".
   *
   * The rule is positive — the current instrument must be named as current — rather than a
   * blocklist on the old date, because the page is allowed to mention the old text as
   * abrogated, and a blocklist would forbid exactly the sentence that keeps a reader right.
   */
  it('names the 23 April 2025 arrêté as the IGGN’s current basis', () => {
    const prose = moduleProse(franceOversight());
    expect(prose).toMatch(/arrêté of 23 April 2025/);
  });

  it('mentions the superseded 2019 arrêté only as abrogated', () => {
    const prose = moduleProse(franceOversight());
    const sentences = prose.split(/(?<=[.!?])\s+/).filter((s) => /15 January 2019/.test(s));
    expect(sentences.length).toBeGreaterThan(0);
    for (const sentence of sentences) {
      expect(sentence, `2019 arrêté presented without its abrogation: ${sentence}`).toMatch(
        /abrogat/i,
      );
    }
  });

  it('dates the IGPN provisions to the versions actually in force', () => {
    const prose = moduleProse(franceOversight());
    expect(prose).toMatch(/in force since 1 July 2023/);
  });

  it('keeps the source notes honest about which version was read', () => {
    expect(getSource('fr-arrete-2025-iggn')?.note).toMatch(
      /abrogates the arrêté of 15 January 2019/i,
    );
    expect(getSource('fr-decret-2013-784-igpn')?.note).toMatch(/1 July 2023/);
  });
});

/* -------------------------------------------------------------------------- */
/* M4 — the English labels stay rejected                                      */
/* -------------------------------------------------------------------------- */

describe('taxonomy is not forced onto the French institutions', () => {
  /**
   * MUTATION PROOF M4. Publishing an institution type for any of the labels the research
   * rejected fails this test. Observed to fail by adding a `police-inspectorate` record with
   * `review: 'fact-checked'`, which routes it.
   */
  it('routes no institution type for a label the French evidence rejected', () => {
    const rejected = [
      'police-inspectorate',
      'internal-affairs-unit',
      'internal-affairs',
      'professional-standards-unit',
      'police-integrity-commission',
      'police-standards-commission',
    ];
    const routed = ROUTED_INSTITUTION_TYPES.map((i) => i.slug);
    for (const slug of rejected) {
      expect(routed, `${slug} was routed on one country's evidence`).not.toContain(slug);
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/institutions/${slug}`);
    }
  });

  it('leaves the institution routes Wave 6 inherited exactly as it found them', () => {
    /*
     * Wave 6 strengthened existing pages and added no institution route of its own. That
     * intent used to be expressed as a count of routed types, which made every LATER wave
     * fail a Wave 6 test for doing legitimate work. The intent is the same and the guard is
     * no weaker: the thirteen types Wave 6 inherited must all still be routed, and — asserted
     * by the test above — none of the families Wave 6 rejected may be.
     */
    const inheritedAtWave6 = [
      'municipal-police',
      'national-police',
      'gendarmerie',
      'federal-investigative-agency',
      'transport-police',
      'prosecution-service',
      'correctional-service',
      'state-police',
      'provincial-police',
      'prefectural-police',
      'autonomous-community-police',
      'independent-police-complaints-body',
      'ombuds-and-rights-institution',
    ];
    const routed = ROUTED_INSTITUTION_TYPES.map((i) => i.slug);
    for (const slug of inheritedAtWave6) {
      expect(routed, `${slug} stopped being routed after Wave 6`).toContain(slug);
    }
  });

  it('warns the reader that inspection générale and inspectorate are not the same thing', () => {
    const prose = moduleProse(franceOversight());
    expect(prose).toMatch(/inspection générale/i);
    expect(prose).toMatch(/inspectorate/i);
    /* The warning must say they differ, not merely use both words. */
    expect(prose).toMatch(/inverts|not the same category|is not an/i);
  });

  it('does not call the Défenseur des droits a police complaints body', () => {
    const mod = franceOversight();
    const ddd = mod.blocks.flatMap((block: Block) =>
      block.kind === 'definitionList'
        ? block.items.filter((i) => i.term.includes('Défenseur des droits'))
        : [],
    );
    expect(ddd).toHaveLength(1);
    expect(ddd[0]!.description).not.toMatch(/police complaints body/i);
    /* It must say the mandate reaches beyond police, which is why the label fails. */
    expect(ddd[0]!.description).toMatch(/private security/i);
  });

  it('keeps France as a counterexample on the complaints-body page, not an example', () => {
    const complaints = inst('independent-police-complaints-body');
    expect(complaints.countryExamples?.some((e) => e.countrySlug === FRANCE)).toBe(false);
    const counter = complaints.counterExamples?.find((e) => e.countrySlug === FRANCE);
    expect(counter).toBeDefined();
    expect(counter!.note).toMatch(/No external, police-specific complaints body/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Restraint                                                                   */
/* -------------------------------------------------------------------------- */

describe('restraint', () => {
  it('makes no effectiveness, trust or caseload claim', () => {
    const prose = moduleProse(franceOversight());
    const asserted = franceOversight()
      .blocks.filter((b): b is Extract<Block, { kind: 'paragraph' }> => b.kind === 'paragraph')
      .filter((b) => b.claim === 'fact')
      .map((b) => b.text)
      .join('\n');

    for (const forbidden of [
      /\beffective(ly|ness)?\b/i,
      /public (confidence|trust)/i,
      /substantiation rate/i,
      /\b\d+ complaints\b/i,
    ]) {
      expect(asserted, `asserted prose matches ${forbidden}`).not.toMatch(forbidden);
    }

    /* The page must say so in terms, not merely omit it. */
    expect(prose).toMatch(/does not assess how well any of them works/i);
  });

  it('carries no restricted claims', () => {
    expect(franceOversight().restrictedClaims ?? []).toHaveLength(0);
  });

  it('records what it did not establish', () => {
    const uncertainty = franceOversight().uncertainty ?? [];
    expect(uncertainty.length).toBeGreaterThanOrEqual(3);
    /* The honest gap found during research must survive into the page. */
    expect(uncertainty.join('\n')).toMatch(/deontology mandate is not established/i);
  });

  it('does not claim the Défenseur des droits is a national human-rights institution', () => {
    const ombuds = inst('ombuds-and-rights-institution');
    const france = ombuds.countryExamples?.find((e) => e.countrySlug === FRANCE);
    expect(france).toBeDefined();
    expect(france!.note).not.toMatch(/national human[- ]rights institution/i);
  });
});
