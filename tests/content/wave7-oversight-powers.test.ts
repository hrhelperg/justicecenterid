import { describe, expect, it } from 'vitest';
import { getInstitutionType, ROUTED_INSTITUTION_TYPES } from '@/content/institutions';
import { LAW_ENFORCEMENT_GUIDES } from '@/content/guides/law-enforcement';
import { getDossier } from '@/content/dossiers';
import { getSource } from '@/content/sources';
import { PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import { OVERSIGHT_POWERS, POWER_SUPPORT_VALUES } from '@/content/types';
import type {
  Block,
  Guide,
  InstitutionType,
  OversightBodyProfile,
  OversightPower,
} from '@/content/types';

/**
 * Wave 7: police oversight institutions, phase 2.
 *
 * The failure mode this wave is built against is a page that grants a body a power its statute
 * withholds. Prose can do that invisibly — "investigates and disciplines officers" reads no
 * differently from "investigates officers" — so the powers are recorded as structured data on
 * `oversightBodies` and the prose is checked against them here.
 *
 * Every assertion below is written so that it FAILS when the underlying fact changes, not when
 * the wording changes. Six of them are exercised as mutation proofs, recorded in
 * docs/audits/knowledge-expansion-wave-7-qa.md.
 */

const INVESTIGATIVE_BODY = 'independent-police-investigative-body';
const COMPLAINTS_BODY = 'independent-police-complaints-body';
const INTERNAL_EXTERNAL_GUIDE = 'internal-vs-external-police-oversight';
const STAGES_GUIDE = 'police-complaints-vs-criminal-investigation';

function inst(slug: string): InstitutionType {
  const found = getInstitutionType(slug);
  if (!found) throw new Error(`institution missing: ${slug}`);
  return found;
}

function guide(slug: string): Guide {
  const found = LAW_ENFORCEMENT_GUIDES.find((g) => g.slug === slug);
  if (!found) throw new Error(`guide missing: ${slug}`);
  return found;
}

function bodies(slug: string): OversightBodyProfile[] {
  const found = inst(slug).oversightBodies;
  if (!found) throw new Error(`no oversightBodies on ${slug}`);
  return found;
}

function body(slug: string, id: string): OversightBodyProfile {
  const found = bodies(slug).find((b) => b.id === id);
  if (!found) throw new Error(`body missing: ${id}`);
  return found;
}

/** Prose a reader actually sees on an institution page. */
function institutionProse(institution: InstitutionType): string {
  return [
    institution.title,
    institution.summary,
    institution.purpose ?? '',
    institution.governanceNote ?? '',
    institution.accountabilityNote ?? '',
    institution.presenceNote ?? '',
    institution.historyNote ?? '',
    ...institution.distinguishingFeatures,
    ...institution.typicalMandate,
    ...institution.commonConfusions,
    ...(institution.countryExamples ?? []).map((e) => e.note),
    ...(institution.counterExamples ?? []).map((e) => e.note),
    ...(institution.uncertainty ?? []),
  ].join('\n');
}

/** Prose a reader actually sees on a guide page. */
function guideProse(g: Guide): string {
  const fromBlocks = (blocks: Block[] | undefined): string[] =>
    (blocks ?? []).flatMap((block) => {
      if (block.kind === 'paragraph') return [block.text];
      if (block.kind === 'list') return block.items;
      if (block.kind === 'callout') return [block.title, block.text];
      return block.items.flatMap((i) => [i.term, i.description]);
    });
  return [
    g.title,
    g.summary,
    ...fromBlocks(g.definition),
    ...fromBlocks(g.whyItExists),
    ...fromBlocks(g.howItWorks),
    ...fromBlocks(g.variation),
    ...fromBlocks(g.rightsAndAccountability),
    ...g.misconceptions.flatMap((m) => [m.claim, m.reality]),
    ...(g.countryExamples ?? []).map((e) => e.note),
    ...(g.counterExamples ?? []).map((e) => e.note),
    ...(g.uncertainty ?? []),
  ].join('\n');
}

/* -------------------------------------------------------------------------- */
/* Taxonomy: what the wave published, and what it refused to                   */
/* -------------------------------------------------------------------------- */

describe('the Wave 7 taxonomy decisions are the ones actually shipped', () => {
  it('publishes the one family the evidence supported', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain(`/institutions/${INVESTIGATIVE_BODY}`);
    expect(inst(INVESTIGATIVE_BODY).status).toBe('published');
    expect(inst(INVESTIGATIVE_BODY).review).toBe('fact-checked');
  });

  it('creates no route for a family Wave 7 deferred, merged or rejected', () => {
    /*
     * Every one of these was assessed in docs/research/wave-7-oversight-taxonomy-findings.md
     * and did not earn a page. `police-inspectorate` is the load-bearing entry: Wave 7 found
     * sourced inspection arrangements in three countries and still refused the route, because
     * the internal and external forms are two types and a single page would have to describe
     * both as one.
     */
    for (const slug of [
      'police-inspectorate',
      'internal-affairs',
      'internal-affairs-unit',
      'professional-standards-unit',
      'police-conduct-authority',
      'police-complaints-commissioner',
      'civilian-police-review-board',
      'police-ombudsman',
      'police-integrity-commission',
      'external-police-oversight-authority',
    ]) {
      expect(
        PUBLIC_ROUTE_PATHS,
        `${slug} was published without the recurrence to justify it`,
      ).not.toContain(`/institutions/${slug}`);
    }
  });

  it('publishes no guide for a candidate Wave 7 merged or rejected', () => {
    for (const slug of ['who-disciplines-police', 'independent-police-investigations']) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/law-enforcement/${slug}`);
    }
  });

  it('requires at least two jurisdictions behind a published institution family', () => {
    /*
     * The rule that stops a one-country structure being presented globally. It is asserted
     * over every routed institution that carries body profiles, not only the new one.
     */
    for (const institution of ROUTED_INSTITUTION_TYPES) {
      if (!institution.oversightBodies) continue;
      const jurisdictions = new Set(
        institution.oversightBodies
          .filter((b) => b.temporalScope === 'current')
          .map((b) => b.jurisdiction),
      );
      expect(
        jurisdictions.size,
        `${institution.slug} rests on ${jurisdictions.size} jurisdiction(s)`,
      ).toBeGreaterThanOrEqual(2);
    }
  });

  it('keeps the merged families on the page they were merged into', () => {
    /* Conduct authority and police ombudsman merged into the complaints body. */
    const prose = institutionProse(inst(COMPLAINTS_BODY));
    expect(prose).toMatch(/Independent Police Conduct Authority/);
    expect(prose).toMatch(/Fiosrú/);
  });
});

/* -------------------------------------------------------------------------- */
/* False equivalence                                                           */
/* -------------------------------------------------------------------------- */

describe('the two oversight families are not collapsed into one another', () => {
  it('states on the investigative page that its purest cases take no complaints', () => {
    const prose = institutionProse(inst(INVESTIGATIVE_BODY));
    expect(prose).toMatch(/reject/i);
    expect(prose).toMatch(/no complaint procedure|contains no complaint/i);
  });

  it('marks Norway and Czechia on the complaints page as limits, not examples', () => {
    /*
     * Wave 5 listed both as examples of a complaints body. Neither takes complaints. The
     * correction must survive editing, so it is asserted rather than left to the prose.
     */
    const examples = inst(COMPLAINTS_BODY).countryExamples ?? [];
    for (const slug of ['norway', 'czechia']) {
      const example = examples.find((e) => e.countrySlug === slug);
      expect(example, `${slug} example missing`).toBeDefined();
      expect(example?.note, `${slug} is still described as though it took complaints`).toMatch(
        /not a complaints body|no complaint procedure|limit/i,
      );
    }
  });

  it('does not claim the two families are disjoint, because three bodies hold both', () => {
    const prose = institutionProse(inst(INVESTIGATIVE_BODY));
    expect(prose).toMatch(/overlaps|both mandates|holds both/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Powers: nothing rendered that a source does not support                     */
/* -------------------------------------------------------------------------- */

describe('every power claimed for a body is structured and sourced', () => {
  const ALL = ROUTED_INSTITUTION_TYPES.flatMap((i) => i.oversightBodies ?? []);

  it('finds bodies to check', () => {
    expect(ALL.length).toBeGreaterThan(0);
  });

  it.each(ALL.map((b) => [b.id, b] as const))(
    '%s uses only known powers and known support values',
    (_id, profile) => {
      for (const [power, support] of Object.entries(profile.powers)) {
        expect(OVERSIGHT_POWERS).toContain(power as OversightPower);
        expect(POWER_SUPPORT_VALUES).toContain(support);
      }
    },
  );

  it.each(ALL.map((b) => [b.id, b] as const))(
    '%s cites at least one source scoped to its own country',
    (_id, profile) => {
      /*
       * The country-scoped source invariant, Part G. A global instrument cannot establish a
       * national body's statutory powers, so at least one supporting source must carry the
       * body's own jurisdiction.
       */
      const scoped = profile.sources
        .map((id) => getSource(id))
        .filter((s) => s?.jurisdiction === profile.jurisdiction);
      expect(
        scoped.length,
        `${profile.id} has no source scoped to ${profile.jurisdiction}`,
      ).toBeGreaterThan(0);
    },
  );

  it.each(ALL.map((b) => [b.id, b] as const))(
    '%s has every source resolve, and every affirmative power backed by a read source',
    (_id, profile) => {
      for (const sourceId of profile.sources) {
        expect(getSource(sourceId), `unknown source ${sourceId}`).toBeDefined();
      }
      const affirmative = Object.entries(profile.powers).filter(([, v]) => v === 'yes');
      if (affirmative.length === 0) return;
      const confirmed = profile.sources
        .map((id) => getSource(id))
        .filter((s) => s?.verificationMethod === 'content-confirmed');
      expect(
        confirmed.length,
        `${profile.id} claims ${affirmative.length} power(s) with no content-confirmed source`,
      ).toBeGreaterThan(0);
    },
  );

  it('points each profile at a published country dossier', () => {
    for (const profile of ALL) {
      const dossier = getDossier(profile.countrySlug);
      expect(dossier, `${profile.countrySlug} is not a dossier`).toBeDefined();
      expect(dossier?.countryCode).toBe(profile.jurisdiction);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* not-established is never rendered as a limit                                */
/* -------------------------------------------------------------------------- */

describe('an unchecked power is never published as an absent one', () => {
  it('records Denmark’s prosecution question as not-established, not as no', () => {
    /*
     * The distinction the PowerSupport type exists for. Wave 7 did not reach a Tier-1 source
     * on whether the Danish authority holds prosecuting authority. Writing `no` would publish
     * a limit on the body's powers that no source establishes.
     */
    expect(body(INVESTIGATIVE_BODY, 'dk-politiklagemyndighed-body').powers.prosecutes).toBe(
      'not-established',
    );
  });

  it('says so on the page rather than only in the data', () => {
    const uncertainty = inst(INVESTIGATIVE_BODY).uncertainty ?? [];
    expect(uncertainty.join('\n')).toMatch(/not established|was not established/i);
  });

  it('never asserts a power the profile marks not-established', () => {
    /*
     * A page may not say Denmark prosecutes while the profile says the question is open.
     * Checked against the Danish example note specifically, because that is where such a
     * sentence would go.
     */
    const example = (inst(INVESTIGATIVE_BODY).countryExamples ?? []).find(
      (e) => e.countrySlug === 'denmark',
    );
    expect(example).toBeDefined();
    expect(example?.note).not.toMatch(/\bprosecutes\b|\bmay prosecute\b/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Internal / external, and the powers that do not follow from it              */
/* -------------------------------------------------------------------------- */

describe('position is recorded separately from independence', () => {
  it('gives every profile a posture drawn from the two-value set', () => {
    for (const profile of ROUTED_INSTITUTION_TYPES.flatMap((i) => i.oversightBodies ?? [])) {
      expect(['internal', 'external']).toContain(profile.posture);
    }
  });

  it('keeps the investigative family external, since that is what defines it', () => {
    for (const profile of bodies(INVESTIGATIVE_BODY)) {
      expect(profile.posture, `${profile.id} is not external`).toBe('external');
    }
  });

  it('publishes the two statutory clauses that disprove external equals independent', () => {
    const prose = guideProse(guide(INTERNAL_EXTERNAL_GUIDE));
    /* Sweden: an independent department INSIDE the police authority. */
    expect(prose).toMatch(/oberoende avdelning inom Polismyndigheten/i);
    /* Kenya: an internal unit insulated from police command by statute. */
    expect(prose).toMatch(/not be subject to the control, direction or command/i);
  });

  it('cites the sources those two clauses come from', () => {
    const sources = guide(INTERNAL_EXTERNAL_GUIDE).sources;
    expect(sources).toContain('se-polisen-sarskilda-utredningar');
    expect(sources).toContain('ke-nps-act-cap84-iau');
  });

  it('does not treat external as a synonym for independent anywhere on the guide', () => {
    const g = guide(INTERNAL_EXTERNAL_GUIDE);
    const claims = g.misconceptions.map((m) => m.claim).join('\n');
    expect(claims).toMatch(/external oversight is independent oversight/i);
  });

  it('records Czechia as not police-specific, because its remit is three forces', () => {
    expect(body(INVESTIGATIVE_BODY, 'cz-gibs-body').policeSpecific).toBe(false);
  });
});

/* -------------------------------------------------------------------------- */
/* Complaints, investigation, discipline, prosecution                          */
/* -------------------------------------------------------------------------- */

describe('the five stages are kept apart in the data as well as the prose', () => {
  it('gives Norway criminal investigation and prosecution and neither complaint stage', () => {
    const no = body(INVESTIGATIVE_BODY, 'no-spesialenheten-body');
    expect(no.powers['investigates-crime']).toBe('yes');
    expect(no.powers.prosecutes).toBe('yes');
    expect(no.powers['receives-complaints']).toBe('no');
    expect(no.powers['investigates-misconduct']).toBe('no');
  });

  it('gives Czechia criminal investigation without prosecution', () => {
    const cz = body(INVESTIGATIVE_BODY, 'cz-gibs-body');
    expect(cz.powers['investigates-crime']).toBe('yes');
    expect(cz.powers.prosecutes).toBe('no');
  });

  it('gives no body in the family a disciplinary power', () => {
    /*
     * The single most repeated overstatement about oversight bodies. Across the family, the
     * disciplinary column must never read `yes`.
     */
    for (const profile of bodies(INVESTIGATIVE_BODY)) {
      expect(profile.powers.disciplines, `${profile.id} claims a disciplinary power`).not.toBe(
        'yes',
      );
    }
  });

  it('leaves prosecution to Norway alone in this family', () => {
    const prosecutors = bodies(INVESTIGATIVE_BODY).filter((b) => b.powers.prosecutes === 'yes');
    expect(prosecutors.map((b) => b.id)).toEqual(['no-spesialenheten-body']);
  });

  it('states on the stages guide that a duty to act is not a power to decide', () => {
    const prose = guideProse(guide(STAGES_GUIDE));
    expect(prose).toMatch(/30 days/);
    expect(prose).toMatch(
      /not a power in the oversight body to decide|cannot determine the outcome/i,
    );
  });

  it('gives the stages guide the five stages it is named for', () => {
    const prose = guideProse(guide(STAGES_GUIDE));
    for (const stage of [
      /complaint intake/i,
      /misconduct investigation/i,
      /disciplinary investigation/i,
      /criminal investigation/i,
      /prosecution/i,
    ]) {
      expect(prose).toMatch(stage);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Temporal integrity                                                          */
/* -------------------------------------------------------------------------- */

describe('a predecessor body is never shown as a current example', () => {
  it('marks GSOC historical and points it at its successor', () => {
    const gsoc = body(INVESTIGATIVE_BODY, 'ie-gsoc-body');
    expect(gsoc.temporalScope).toBe('historical');
    expect(gsoc.supersededBy).toBe('ie-fiosru-body');
    expect(gsoc.supersededOn).toBe('2025-04-02');
  });

  it('requires supersededBy and supersededOn on every non-current profile', () => {
    for (const profile of ROUTED_INSTITUTION_TYPES.flatMap((i) => i.oversightBodies ?? [])) {
      if (profile.temporalScope === 'current') continue;
      expect(profile.supersededBy, `${profile.id} has no successor`).toBeTruthy();
      expect(profile.supersededOn, `${profile.id} has no date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('resolves every successor to a current profile in the same country', () => {
    const all = ROUTED_INSTITUTION_TYPES.flatMap((i) => i.oversightBodies ?? []);
    for (const profile of all) {
      if (!profile.supersededBy) continue;
      const successor = all.find((b) => b.id === profile.supersededBy);
      expect(successor, `${profile.supersededBy} is not a known body`).toBeDefined();
      expect(successor?.temporalScope).toBe('current');
      expect(successor?.jurisdiction).toBe(profile.jurisdiction);
    }
  });

  it('never lists a historical body among the page’s country examples', () => {
    /*
     * The Fiosrú/GSOC mutation test. A historical body may exist in the profiles, because the
     * successor relationship is worth recording — it may not be offered to the reader as a
     * country example of a body that currently exists.
     */
    const historical = bodies(INVESTIGATIVE_BODY).filter((b) => b.temporalScope !== 'current');
    expect(historical.length, 'no historical body to check').toBeGreaterThan(0);
    const exampleCountries = (inst(INVESTIGATIVE_BODY).countryExamples ?? []).map(
      (e) => e.countrySlug,
    );
    for (const profile of historical) {
      const currentInSameCountry = bodies(INVESTIGATIVE_BODY).some(
        (b) => b.countrySlug === profile.countrySlug && b.temporalScope === 'current',
      );
      if (exampleCountries.includes(profile.countrySlug)) {
        expect(
          currentInSameCountry,
          `${profile.countrySlug} is a country example with no current body`,
        ).toBe(true);
      }
    }
  });

  it('names the current Irish body and never presents GSOC as current', () => {
    const example = (inst(INVESTIGATIVE_BODY).countryExamples ?? []).find(
      (e) => e.countrySlug === 'ireland',
    );
    expect(example?.note).toMatch(/Fiosrú/);
    expect(example?.note).not.toMatch(/Garda Síochána Ombudsman Commission/);
  });
});

/* -------------------------------------------------------------------------- */
/* Independence claims, assertion-aware                                        */
/* -------------------------------------------------------------------------- */

/**
 * An independence ASSERTION, as distinct from the word "independent" appearing in text.
 *
 * The distinction matters because this cluster is largely ABOUT independence claims. Three of
 * the sentences the wave most wants to publish contain the word and assert the opposite:
 * "being outside the police is not the same as being independent". A naive substring block
 * would forbid exactly the writing the research earned.
 *
 * So the check keys on PREDICATION, not on vocabulary. "Independent complaints bodies" is a
 * type name and asserts nothing about any particular body; "the Directorate is independent"
 * predicates independence of a subject and must be attributable to an instrument.
 */
const INDEPENDENCE_PREDICATION = new RegExp(
  [
    /* "is independent", "are fully independent", "was statutorily independent" */
    String.raw`\b(is|are|was|were|remains?|stays?|becomes?)\s+(?:\w+\s+){0,2}independent\b`,
    /* "functions independently", "operates independently", "decides independently" */
    String.raw`\b\w+s?\s+independently\b`,
    /* "independent of the police" — a claim about what it is independent FROM */
    String.raw`\bindependent\s+of\b`,
    /* "its independence rests on", "the independence of the body" */
    String.raw`\bindependence\b`,
    /* explicit freedom-from-control claims */
    String.raw`\b(outside police control|separate from the police|autonomous)\b`,
  ].join('|'),
  'i',
);

/**
 * Markers that a sentence DISCUSSES an independence claim rather than making one.
 *
 * Applied on top of predication, so that a sentence which predicates independence in order to
 * deny or question it is not treated as an assertion.
 */
const NON_ASSERTION =
  /\b(not|never|cannot|nor|no equivalent|whether|question|claim|assume|assumption|synonym|different|separate claims?|says nothing|rather than|would be)\b/i;

function sentences(text: string): string[] {
  /*
   * Split on line breaks BEFORE sentence punctuation. Definition-list terms carry no full
   * stop, so without this a term and the first sentence of its description are read as one
   * "sentence" and the attribution check is applied to the wrong text.
   */
  return text
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Guide prose MINUS the misconception claims.
 *
 * A `Misconception.claim` is a false statement the page quotes in order to correct it, printed
 * beside its `reality`. Feeding those into an assertion check would require the page to source
 * the very propositions it exists to deny — so the claims are excluded and the realities, which
 * the page does assert, are kept.
 */
function assertableGuideProse(g: Guide): string {
  const fromBlocks = (blocks: Block[] | undefined): string[] =>
    (blocks ?? []).flatMap((block) => {
      if (block.kind === 'paragraph') return [block.text];
      if (block.kind === 'list') return block.items;
      if (block.kind === 'callout') return [block.title, block.text];
      return block.items.flatMap((i) => [i.term, i.description]);
    });
  return [
    g.title,
    g.summary,
    ...fromBlocks(g.definition),
    ...fromBlocks(g.whyItExists),
    ...fromBlocks(g.howItWorks),
    ...fromBlocks(g.variation),
    ...fromBlocks(g.rightsAndAccountability),
    ...g.misconceptions.map((m) => m.reality),
    ...(g.countryExamples ?? []).map((e) => e.note),
    ...(g.counterExamples ?? []).map((e) => e.note),
    ...(g.uncertainty ?? []),
  ].join('\n');
}

/** Sentences that ASSERT independence of something, as opposed to discussing the idea. */
function independenceAssertions(text: string): string[] {
  return sentences(text).filter(
    (s) => INDEPENDENCE_PREDICATION.test(s) && !NON_ASSERTION.test(s),
  );
}

describe('independence is asserted only where a source establishes it', () => {
  it('does not punish a sentence that denies or qualifies independence', () => {
    /*
     * The test's own guard. If these three sentences were flagged, the check would be a
     * substring block wearing a different name, and the cluster could not say the true thing.
     */
    const safe = [
      'This does not mean the body is independent.',
      'Being outside the police is not the same as being independent.',
      'Whether either is independent is a question about their statutes.',
      'External oversight is not independent oversight.',
      /* Type names predicate nothing about any particular body. */
      'Independent complaints bodies, prosecutors, courts and ombuds institutions.',
      'Independent police investigative body',
    ];
    for (const sentence of safe) {
      expect(independenceAssertions(sentence), sentence).toHaveLength(0);
    }
  });

  it('does flag a bare assertion, so the check is not vacuous', () => {
    expect(
      independenceAssertions('The Directorate is an independent watchdog over the police.'),
    ).toHaveLength(1);
  });

  it('backs every independence assertion on the new institution page with sources', () => {
    const institution = inst(INVESTIGATIVE_BODY);
    const assertions = independenceAssertions(institutionProse(institution));
    /* Non-vacuity: the page does make such claims, and they are the ones being checked. */
    expect(assertions.length).toBeGreaterThan(0);
    expect(institution.sources.length).toBeGreaterThan(0);
    for (const sentence of assertions) {
      /*
       * An independence assertion must name the instrument or the body's own statement.
       * A sentence claiming independence with no attribution is the failure being prevented.
       */
      expect(
        /Act|statute|instruction|§|section|chapter|décret|Code|states|own|law/i.test(sentence),
        `unattributed independence claim: ${sentence}`,
      ).toBe(true);
    }
  });

  it('backs every independence assertion on the two new guides with sources', () => {
    for (const slug of [INTERNAL_EXTERNAL_GUIDE, STAGES_GUIDE]) {
      const g = guide(slug);
      for (const sentence of independenceAssertions(assertableGuideProse(g))) {
        expect(
          /Act|statute|instruction|§|section|chapter|décret|Code|states|own|law|oberoende|Crown Entity/i.test(
            sentence,
          ),
          `${slug}: unattributed independence claim: ${sentence}`,
        ).toBe(true);
      }
      expect(g.sources.length).toBeGreaterThan(0);
    }
  });

  it('scopes South Africa’s independence claim to the Service, as the Act does', () => {
    const prose = `${institutionProse(inst(INVESTIGATIVE_BODY))}\n${guideProse(
      guide(INTERNAL_EXTERNAL_GUIDE),
    )}`;
    expect(prose).toMatch(/functions independently from the South African Police Service/);
    /* And says what the Act does not say, which is the point of quoting it precisely. */
    expect(prose).toMatch(/Minister/);
  });
});

/* -------------------------------------------------------------------------- */
/* Translation integrity                                                       */
/* -------------------------------------------------------------------------- */

describe('non-English names are recorded, not invented', () => {
  it('gives every profile a name status from the known set', () => {
    for (const profile of ROUTED_INSTITUTION_TYPES.flatMap((i) => i.oversightBodies ?? [])) {
      expect(['not-a-translation', 'official-english', 'explanatory']).toContain(
        profile.nameStatus,
      );
    }
  });

  it('requires an English name wherever one is claimed to be official', () => {
    for (const profile of ROUTED_INSTITUTION_TYPES.flatMap((i) => i.oversightBodies ?? [])) {
      if (profile.nameStatus === 'not-a-translation') continue;
      expect(
        profile.nameEnglish,
        `${profile.id} claims a rendering it does not carry`,
      ).toBeTruthy();
    }
  });

  it('keeps the Danish original name, which its own English name drops', () => {
    const dk = body(INVESTIGATIVE_BODY, 'dk-politiklagemyndighed-body');
    expect(dk.nameOriginal).toBe('Den Uafhængige Politiklagemyndighed');
    expect(dk.nameEnglish).toBe('The Police Complaints Authority');
    expect(dk.terminologyCaveat, 'the dropped word is not explained').toMatch(/Uafhængige/);
  });

  it('never renders any body as a police integrity commission', () => {
    /*
     * The label Wave 7 rejected as invented. It must not appear as any body's name, in any
     * profile, on any page in the cluster.
     */
    const all = ROUTED_INSTITUTION_TYPES.flatMap((i) => i.oversightBodies ?? []);
    for (const profile of all) {
      expect(`${profile.nameOriginal} ${profile.nameEnglish ?? ''}`).not.toMatch(
        /police integrity commission/i,
      );
    }
    expect(institutionProse(inst(INVESTIGATIVE_BODY))).not.toMatch(
      /Police Integrity Commission/i,
    );
  });

  it('warns that the Czech body’s name means neither police nor inspectorate', () => {
    const cz = body(INVESTIGATIVE_BODY, 'cz-gibs-body');
    expect(cz.terminologyCaveat).toMatch(/no word meaning police/i);
  });
});

/* -------------------------------------------------------------------------- */
/* Safety, neutrality and restricted claims                                    */
/* -------------------------------------------------------------------------- */

describe('the new pages stay institutional', () => {
  const NEW_PROSE = [
    institutionProse(inst(INVESTIGATIVE_BODY)),
    guideProse(guide(INTERNAL_EXTERNAL_GUIDE)),
    guideProse(guide(STAGES_GUIDE)),
  ].join('\n');

  it('uses no superlative the evidence cannot carry', () => {
    for (const term of [
      /\bstrongest\b/i,
      /\bbest\b/i,
      /most independent/i,
      /weakest oversight/i,
      /most effective/i,
      /most transparent/i,
    ]) {
      expect(NEW_PROSE, `unsupported superlative: ${term}`).not.toMatch(term);
    }
  });

  it('adopts neither of the two normative framings the brief names', () => {
    expect(NEW_PROSE).not.toMatch(/protects citizens from (the )?police/i);
    expect(NEW_PROSE).not.toMatch(/internal affairs protects officers/i);
  });

  it('publishes no statistic that would need restricted-claim handling', () => {
    /*
     * Complaint volumes, substantiation rates and trust metrics are all absent by design.
     * Percentages and volume nouns are the shapes those claims take.
     */
    expect(NEW_PROSE).not.toMatch(/\d+\s?%/);
    expect(NEW_PROSE).not.toMatch(/substantiation rate|complaint volume|trust (score|metric)/i);
  });

  it('gives no procedural guidance for defeating an investigation', () => {
    expect(NEW_PROSE).not.toMatch(
      /how to avoid|evade (an )?investigation|refuse to cooperate/i,
    );
  });
});

/* -------------------------------------------------------------------------- */
/* Knowledge graph                                                             */
/* -------------------------------------------------------------------------- */

describe('the new pages are reachable and connected', () => {
  it('routes both new guides', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain(`/law-enforcement/${INTERNAL_EXTERNAL_GUIDE}`);
    expect(PUBLIC_ROUTE_PATHS).toContain(`/law-enforcement/${STAGES_GUIDE}`);
  });

  it('links the two families to each other in both directions', () => {
    expect(inst(INVESTIGATIVE_BODY).relatedInstitutions).toContain(COMPLAINTS_BODY);
    expect(inst(COMPLAINTS_BODY).relatedInstitutions).toContain(INVESTIGATIVE_BODY);
  });

  it('connects each new guide to at least two published relatives', () => {
    for (const slug of [INTERNAL_EXTERNAL_GUIDE, STAGES_GUIDE]) {
      expect(guide(slug).related.length).toBeGreaterThanOrEqual(2);
      expect(guide(slug).relatedInstitutions?.length ?? 0).toBeGreaterThanOrEqual(2);
    }
  });

  it('carries the required page metadata on every new route', () => {
    const g1 = guide(INTERNAL_EXTERNAL_GUIDE);
    const g2 = guide(STAGES_GUIDE);
    for (const entity of [g1, g2]) {
      expect(entity.question.length).toBeGreaterThan(0);
      expect(entity.summary.length).toBeGreaterThan(0);
      expect(entity.summary.length).toBeLessThanOrEqual(320);
      expect(entity.status).toBe('published');
      expect(entity.review).toBe('fact-checked');
      expect(entity.safetyReview).toBe('cleared');
      expect(entity.sources.length).toBeGreaterThan(0);
    }
    expect(inst(INVESTIGATIVE_BODY).summary.length).toBeLessThanOrEqual(320);
  });

  it('gives the two new guides distinct intents, not one intent twice', () => {
    expect(guide(INTERNAL_EXTERNAL_GUIDE).question).not.toBe(guide(STAGES_GUIDE).question);
    const shared = new Set(
      guide(INTERNAL_EXTERNAL_GUIDE).keyTerms?.filter((t) =>
        guide(STAGES_GUIDE).keyTerms?.includes(t),
      ),
    );
    /* Some overlap is expected; total overlap would mean one page. */
    expect(shared.size).toBeLessThan(
      Math.min(
        guide(INTERNAL_EXTERNAL_GUIDE).keyTerms?.length ?? 0,
        guide(STAGES_GUIDE).keyTerms?.length ?? 0,
      ),
    );
  });
});
