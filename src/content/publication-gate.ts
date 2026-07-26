import { COUNTRY_MODULES } from './country-modules';
import { findDossierResidue } from './placeholders';
import { validateRestrictedClaim } from './restricted-claims';
import type { CountryDossier, CountryModuleId } from './types';

/**
 * The single country publication gate.
 *
 * `validateCountryPublication` returns the list of conditions a dossier does NOT satisfy;
 * empty means it may be published. It checks SUBSTANCE, never the `status` boolean — the two are
 * bound together by the gate test, which asserts that every dossier whose status is `published`
 * produces an empty result. That is what makes accidental publication impossible: flipping the
 * boolean on an incomplete dossier does not silence the gate, it makes the gate test fail.
 *
 * The conditions are a coherent set drawn from the ten working countries, not arbitrary
 * thresholds. There is deliberately no word-count minimum — an empty-content check catches a
 * blank placeholder, but length cannot establish quality, which is the job of editorial review.
 */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Modules every published country must carry, computed as the intersection actually published
 * by all ten countries (see docs/architecture/country-publication-gate.md). It excludes
 * `corrections` because France legitimately defers it — the floor is what a country cannot be a
 * useful reference without, not an aspiration.
 */
export const REQUIRED_PUBLISHED_MODULES: readonly CountryModuleId[] = [
  'justice-system',
  'law-enforcement',
  'courts',
  'prosecution',
  'investigations',
  'sources',
];

export interface PublicationContext {
  /** Every known source id, so restricted-claim citations can be resolved. */
  knownSourceIds: readonly string[];
  /**
   * The registered public route paths. When supplied, the gate additionally checks that every
   * published module has a route — closing the gap where a module is published in data but its
   * route was never generated.
   */
  routePaths?: readonly string[];
}

export function validateCountryPublication(
  dossier: CountryDossier,
  ctx: PublicationContext,
): string[] {
  const problems: string[] = [];
  const slugOf = (id: CountryModuleId) => COUNTRY_MODULES.find((m) => m.id === id)?.slug;

  /* Hub-level substance. */
  if (!dossier.factsVerifiedOn || !ISO_DATE.test(dossier.factsVerifiedOn)) {
    problems.push('the dossier has no ISO factsVerifiedOn date');
  }
  if (dossier.summary.trim().length === 0) {
    problems.push('the hub summary is empty');
  }
  if (dossier.blocks.length === 0) {
    problems.push('the hub has no substantive content');
  }
  if (dossier.sources.length === 0) {
    problems.push('the hub cites no source');
  }
  if (dossier.review === 'unreviewed') {
    problems.push('the dossier is unreviewed');
  }
  if (dossier.jurisdictionIds.length === 0) {
    problems.push('the dossier models no jurisdiction record');
  }

  /* The required minimum module set must be present and published. */
  const publishedIds = new Set(
    dossier.modules.filter((m) => m.status === 'published').map((m) => m.moduleId),
  );
  for (const required of REQUIRED_PUBLISHED_MODULES) {
    if (!publishedIds.has(required)) {
      problems.push(`required module "${required}" is not published`);
    }
  }

  /* Every published module must itself be complete; every deferred module must be a real gap. */
  for (const m of dossier.modules) {
    if (m.status === 'published') {
      if (m.blocks.length === 0)
        problems.push(`published module "${m.moduleId}" has no content`);
      if (m.sources.length === 0)
        problems.push(`published module "${m.moduleId}" cites no source`);
      if (!m.factsVerifiedOn || !ISO_DATE.test(m.factsVerifiedOn)) {
        problems.push(`published module "${m.moduleId}" has no ISO factsVerifiedOn date`);
      }
      if (m.review !== 'fact-checked') {
        problems.push(
          `published module "${m.moduleId}" is not fact-checked (review "${m.review}")`,
        );
      }
      if (m.safetyReview === 'pending') {
        problems.push(`published module "${m.moduleId}" has a pending safety review`);
      }
      if (ctx.routePaths) {
        const slug = slugOf(m.moduleId);
        const path = `/countries/${dossier.slug}/${slug}`;
        if (!slug || !ctx.routePaths.includes(path)) {
          problems.push(`published module "${m.moduleId}" has no registered route (${path})`);
        }
      }
    } else {
      if (!m.deferredReason || m.deferredReason.trim().length === 0) {
        problems.push(`deferred module "${m.moduleId}" has no stated reason`);
      }
      if (m.blocks.length > 0) {
        problems.push(`deferred module "${m.moduleId}" is not published but carries content`);
      }
      if (m.sources.length > 0) {
        problems.push(`deferred module "${m.moduleId}" is not published but cites sources`);
      }
    }
  }

  /* Restricted claims must each be a fully specified, resolvable record. */
  for (const m of dossier.modules) {
    for (const rc of m.restrictedClaims ?? []) {
      for (const issue of validateRestrictedClaim(rc, ctx.knownSourceIds)) {
        problems.push(`restricted claim "${rc.id}" (${m.moduleId}): ${issue}`);
      }
    }
  }

  /* No scaffold residue or template leak in any reader-facing string. */
  for (const residue of findDossierResidue(dossier)) {
    problems.push(
      `placeholder residue (${residue.marker}) in published content: "${residue.match}" — ${residue.reason}`,
    );
  }

  return problems;
}

/** Convenience predicate: true when the dossier satisfies every publication condition. */
export function isPublicationReady(dossier: CountryDossier, ctx: PublicationContext): boolean {
  return validateCountryPublication(dossier, ctx).length === 0;
}
