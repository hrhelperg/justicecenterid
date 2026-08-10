import type { CountryExample, InstitutionType, Profession } from './types';

/**
 * The publication gate for routed reference pages — institution types and professions.
 *
 * Modelled on `validateCountryPublication`, and for the same reason: `status: 'published'`
 * is a boolean anyone can flip, so it must not be what decides whether a page exists.
 * These functions check SUBSTANCE and return the conditions a record does NOT satisfy.
 * The gate tests bind the two together by asserting that every record whose status is
 * `published` returns an empty list — so flipping the flag on an incomplete record does
 * not publish it, it breaks the build.
 *
 * ---------------------------------------------------------------------------
 * WHY THIS GATE EXISTS NOW AND NOT BEFORE
 * ---------------------------------------------------------------------------
 * Until Wave 2 these records had no routes. They rendered as summaries on a hub, where a
 * thin citation was survivable because the page made no standalone claim to authority.
 * Giving each one a canonical URL, a sitemap entry and its own structured data changes
 * that: the page now asserts that this platform has researched this subject.
 *
 * The Wave 2 baseline audit found six of the eight institution records citing a single
 * general UNODC landing page for detailed institutional claims it does not support. That
 * is survivable on a hub and is not survivable on a canonical page, so the source floor
 * below is two, and the gate additionally requires the fields that make a page honest
 * about scope: a presence note, a jurisdiction note, and at least one worked country
 * example drawn from a dossier the platform has actually researched.
 */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export interface ReferencePublicationContext {
  /** Every known source id, so citations can be resolved. */
  knownSourceIds: readonly string[];
  /** Slugs of PUBLISHED country dossiers, so an example cannot cite unresearched work. */
  publishedCountrySlugs: readonly string[];
  /** Registered public route paths, when the route layer is available. */
  routePaths?: readonly string[];
}

function checkCommon(
  kind: string,
  slug: string,
  record: {
    summary: string;
    sources: string[];
    review: string;
    updatedOn: string;
    reviewedOn?: string;
    factsVerifiedOn?: string;
    countryExamples?: CountryExample[];
  },
  ctx: ReferencePublicationContext,
): string[] {
  const problems: string[] = [];

  if (record.summary.trim().length === 0) {
    problems.push('the summary is empty');
  }

  /*
   * Two sources, not one. A single general citation is what the baseline audit found and
   * is precisely what a canonical page must not rest on.
   */
  if (record.sources.length < 2) {
    problems.push(`cites ${record.sources.length} source(s); a routed page needs at least 2`);
  }
  for (const id of record.sources) {
    if (!ctx.knownSourceIds.includes(id)) {
      problems.push(`cites unknown source "${id}"`);
    }
  }

  if (record.review === 'unreviewed') {
    problems.push('is unreviewed');
  }
  if (!record.reviewedOn || !ISO_DATE.test(record.reviewedOn)) {
    problems.push('has no ISO reviewedOn date');
  }
  if (!record.factsVerifiedOn || !ISO_DATE.test(record.factsVerifiedOn)) {
    problems.push('has no ISO factsVerifiedOn date');
  }
  if (!ISO_DATE.test(record.updatedOn)) {
    problems.push('has no ISO updatedOn date');
  }

  /*
   * At least one worked example, and it must point at a dossier that is actually
   * published. This is what stops a global page from being an unanchored abstraction,
   * and it is what stops an example from citing research that does not exist.
   */
  const examples = record.countryExamples ?? [];
  if (examples.length === 0) {
    problems.push('has no country example, so the pattern is never anchored to a real system');
  }
  for (const example of examples) {
    if (!ctx.publishedCountrySlugs.includes(example.countrySlug)) {
      problems.push(`country example "${example.countrySlug}" is not a published dossier`);
    }
    if (example.note.trim().length === 0) {
      problems.push(`country example "${example.countrySlug}" has no note`);
    }
  }

  if (ctx.routePaths) {
    const path = `/${kind}/${slug}`;
    if (!ctx.routePaths.includes(path)) {
      problems.push(`published but has no registered route (${path})`);
    }
  }

  return problems;
}

export function validateInstitutionPublication(
  institution: InstitutionType,
  ctx: ReferencePublicationContext,
): string[] {
  const problems = checkCommon('institutions', institution.slug, institution, ctx);

  if (!institution.question || institution.question.trim().length === 0) {
    problems.push('has no reader question');
  }
  if (!institution.purpose || institution.purpose.trim().length === 0) {
    problems.push('does not state why this kind of body exists');
  }
  if (institution.presenceNote.trim().length === 0) {
    problems.push('has no presence note');
  }
  if (!institution.governanceNote || institution.governanceNote.trim().length === 0) {
    problems.push('does not state how authority reaches this body');
  }
  if (!institution.accountabilityNote || institution.accountabilityNote.trim().length === 0) {
    problems.push('does not state what examines this body');
  }
  if (institution.distinguishingFeatures.length === 0) {
    problems.push('lists nothing that distinguishes it from the adjacent type');
  }
  if (institution.commonConfusions.length === 0) {
    problems.push('lists nothing it is confused with');
  }
  if ((institution.relatedProfessions ?? []).length === 0) {
    problems.push('links to no profession, so the knowledge graph has a dead end');
  }

  return problems;
}

export function validateProfessionPublication(
  profession: Profession,
  ctx: ReferencePublicationContext,
): string[] {
  const problems = checkCommon('professions', profession.slug, profession, ctx);

  if (!profession.question || profession.question.trim().length === 0) {
    problems.push('has no reader question');
  }
  if (!profession.purpose || profession.purpose.trim().length === 0) {
    problems.push('does not state why the role exists');
  }
  if (!profession.institutionalContext || profession.institutionalContext.trim().length === 0) {
    problems.push('does not state where the role sits institutionally');
  }
  if (!profession.ethicsNote || profession.ethicsNote.trim().length === 0) {
    problems.push('does not state the professional standards the role is held to');
  }
  if (profession.jurisdictionNote.trim().length === 0) {
    problems.push('has no jurisdiction note');
  }
  if (profession.responsibilities.length === 0) {
    problems.push('lists no responsibilities');
  }
  if (profession.oversight.length === 0) {
    problems.push('lists no oversight, so authority is described without its check');
  }
  if ((profession.relatedInstitutions ?? []).length === 0) {
    problems.push('links to no institution, so the knowledge graph has a dead end');
  }

  return problems;
}
