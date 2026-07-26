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
  {
    /*
     * Ireland pilot. This record exercises the `taken-effect` lifecycle that the France entry
     * (pending) does not. The reform has ALREADY happened — it commenced on 2 April 2025, which
     * is in the past — so the model's job here is not to warn of a future change but to record
     * a completed transition, keeping the historical bodies distinguishable from their current
     * successors. `reviewedAfterEffect` records that the affected content was written with the
     * post-commencement position confirmed.
     */
    id: 'ie-policing-oversight-reform-2025',
    changeType: 'replacement',
    effectiveOn: '2025-04-02',
    enactedOn: '2024-01-01',
    affectedEntityIds: ['ireland/oversight', 'ireland/law-enforcement'],
    description:
      'The Policing, Security and Community Safety Act 2024 was commenced on 2 April 2025. It reconstituted the Garda Síochána Ombudsman Commission (GSOC) as Fiosrú, the Office of the Police Ombudsman, and established the Policing and Community Safety Authority (PCSA), dissolving the Policing Authority and the Garda Síochána Inspectorate and merging their functions into the PCSA. GSOC, the Policing Authority and the Garda Síochána Inspectorate are therefore historical; Fiosrú and the PCSA are current.',
    sources: ['ie-fiosru', 'ie-gov-pscsa-2024'],
    certainty: 'enacted-with-date',
    status: 'taken-effect',
    reviewedAfterEffect: '2026-07-25',
    notes:
      'enactedOn is recorded as 2024 for the Act; commencement (effectiveOn) was 2 April 2025. The Ireland oversight module names Fiosrú and the PCSA as the current bodies and GSOC, the Policing Authority and the Garda Síochána Inspectorate as their historical predecessors, with this transition date.',
  },
  {
    /*
     * Switzerland pilot. This record exercises the `pending` lifecycle against a change that
     * went through Switzerland's direct-democracy process — an enacted federal act whose optional
     * referendum lapsed unused, with a staggered commencement still partly in the future. It also
     * demonstrates that direct democracy needs no `directDemocracy` field: the referendum step is
     * recorded in the certainty (`enacted-with-date`, because the deadline passed) and the notes,
     * not the schema.
     */
    id: 'ch-bekj-justitia40-2027',
    changeType: 'reorganization',
    effectiveOn: '2027-07-01',
    enactedOn: '2024-12-20',
    affectedEntityIds: ['ch', 'switzerland/courts', 'switzerland/justice-system'],
    description:
      'The Federal Act on Platforms for Electronic Communication in the Judiciary (BEKJ), the legal basis of the Justitia 4.0 project, was adopted by the Federal Assembly on 20 December 2024. It creates a new joint Confederation–cantons public-law corporation (öffentlich-rechtliche Körperschaft, justitia.swiss) to build and operate a national electronic platform for communication with courts and authorities. Full entry into force is planned for 1 July 2027; the provision establishing the public-law corporation came into force earlier, on 1 October 2025, and each canton then sets its own date, within one to five years, on which electronic communication via the platform becomes mandatory.',
    sources: ['ch-bekj'],
    certainty: 'enacted-with-date',
    status: 'pending',
    notes:
      "This is the platform's test of the ScheduledChange model against a Swiss direct-democracy change: the BEKJ is a federal act subject to the OPTIONAL referendum, and the referendum deadline expired unused in April 2025, so it is enacted rather than put to a popular vote — hence certainty `enacted-with-date`. Commencement is STAGGERED: the öffentlich-rechtliche Körperschaft provision took effect on 1 October 2025 (already in the past), while the main obligations enter into force on 1 July 2027 (recorded as effectiveOn), with cantonal mandatory-use dates following between one and five years after that. Nothing is asserted about how the platform will operate; only that the institution is being created on these dates.",
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
