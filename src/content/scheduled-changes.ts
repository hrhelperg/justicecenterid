import type { ScheduledChange } from './types';

/**
 * Known future changes to law or institutional arrangement.
 *
 * This resolves France finding F3. The France pilot found two cited provisions carrying a
 * scheduled repeal date, recorded it in prose, and deliberately deferred a structured field
 * until a second country showed the same need. Germany did: the Basic Law translation carries
 * a "reflects amendments up to" date, and German codes are amended continuously, so the same
 * class of staleness applies. The field is now earned rather than speculative.
 *
 * Scope discipline: this is NOT a legislative-tracking system. It exists to stop exactly one
 * failure — a page that states current law correctly and is still wrong later because a repeal
 * date was already known when it was written.
 */
export const SCHEDULED_CHANGES: readonly ScheduledChange[] = [
  {
    id: 'fr-recodification-2029',
    changeType: 'repeal',
    effectiveOn: '2029-01-01',
    enactedOn: '2025-11-19',
    affectedEntityIds: [
      'fr-cpp-art-12',
      'fr-csi-l511-1',
      'france/investigations',
      'france/law-enforcement',
    ],
    description:
      'Ordonnance n° 2025-1091 of 19 November 2025 repeals Article 12 of the Code de procédure pénale with effect from 1 January 2029. Légifrance records Article L511-1 of the Code de la sécurité intérieure as in force only until the same date. Both provisions are cited as current law on the France pages and both carry a stated end date there.',
    sources: ['fr-cpp-art-12', 'fr-csi-l511-1'],
    certainty: 'enacted-with-date',
    status: 'pending',
    notes:
      'Recorded from the version information Légifrance publishes against each article. The replacement text has not been read, so nothing is asserted about what the law will say after the effective date — only that the cited provisions will cease to apply in their current form.',
  },
];

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

/** Statuses in which a change is still expected to happen. */
const ACTIVE_STATUSES = ['pending'] as const;

/** Statuses meaning the change will not happen as originally scheduled. */
const INACTIVE_STATUSES = ['superseded', 'cancelled'] as const;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Validate one scheduled change. Returns human-readable problems; empty means valid.
 *
 * `today` is injected rather than read from the clock so the staleness rule can be tested
 * deterministically — a validator whose behaviour depends on the wall clock is a validator
 * that passes in CI today and fails silently in January.
 */
export function validateScheduledChange(
  change: ScheduledChange,
  options: {
    today: string;
    knownSourceIds: readonly string[];
    knownEntityIds?: readonly string[];
  },
): string[] {
  const problems: string[] = [];
  const { today, knownSourceIds, knownEntityIds } = options;

  if (!ISO_DATE.test(change.effectiveOn)) {
    problems.push(`effectiveOn "${change.effectiveOn}" must be an ISO date`);
  }
  for (const [field, value] of [
    ['enactedOn', change.enactedOn],
    ['announcedOn', change.announcedOn],
    ['reviewedAfterEffect', change.reviewedAfterEffect],
  ] as const) {
    if (value !== undefined && !ISO_DATE.test(value)) {
      problems.push(`${field} "${value}" must be an ISO date`);
    }
  }

  if (change.sources.length === 0) {
    problems.push('a scheduled change requires at least one authoritative source');
  }
  for (const id of change.sources) {
    if (!knownSourceIds.includes(id)) {
      problems.push(`source "${id}" does not resolve to a source record`);
    }
  }

  if (change.affectedEntityIds.length === 0) {
    problems.push('a scheduled change must name at least one affected entity');
  }
  if (knownEntityIds) {
    for (const id of change.affectedEntityIds) {
      if (!knownEntityIds.includes(id)) {
        problems.push(`affected entity "${id}" does not resolve`);
      }
    }
  }

  if (change.description.trim().length === 0) {
    problems.push('description must not be empty');
  }

  /*
   * Certainty gate. Not every announced reform takes effect, so only a change that has
   * actually been enacted with a date may sit in the `pending` pipeline as something the
   * site tells readers will happen. A proposal is tracked, not promised.
   */
  const active = (ACTIVE_STATUSES as readonly string[]).includes(change.status);
  if (active && change.certainty !== 'enacted-with-date') {
    problems.push(
      `status "${change.status}" requires certainty "enacted-with-date" — a change that is ` +
        `only "${change.certainty}" must not be presented as scheduled`,
    );
  }
  if (change.certainty === 'enacted-with-date' && !change.enactedOn) {
    problems.push('certainty "enacted-with-date" requires enactedOn');
  }

  /*
   * The staleness gate — the reason this model exists.
   *
   * Once the effective date has passed, a still-pending change means the site is describing
   * law that may no longer be in force. Validation fails until the affected content has been
   * re-reviewed on or after the effective date.
   */
  if (active && change.effectiveOn <= today) {
    if (!change.reviewedAfterEffect) {
      problems.push(
        `effectiveOn ${change.effectiveOn} has passed (today ${today}) and the change is still ` +
          `pending: affected content must be re-reviewed and reviewedAfterEffect recorded`,
      );
    } else if (change.reviewedAfterEffect < change.effectiveOn) {
      problems.push(
        `reviewedAfterEffect ${change.reviewedAfterEffect} predates effectiveOn ` +
          `${change.effectiveOn} — the re-review happened before the change took effect`,
      );
    }
  }

  if (change.supersedes && change.supersedes === change.id) {
    problems.push('a change cannot supersede itself');
  }

  if ((INACTIVE_STATUSES as readonly string[]).includes(change.status) && !change.notes) {
    problems.push(
      `status "${change.status}" requires notes explaining why the change will not take effect`,
    );
  }

  return problems;
}

export function getScheduledChange(id: string): ScheduledChange | undefined {
  return SCHEDULED_CHANGES.find((c) => c.id === id);
}

/** Changes still expected to happen, for rendering a reader-facing notice. */
export function pendingChangesFor(entityId: string): ScheduledChange[] {
  return SCHEDULED_CHANGES.filter(
    (c) => c.status === 'pending' && c.affectedEntityIds.includes(entityId),
  );
}
