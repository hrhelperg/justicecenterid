import { describe, expect, it } from 'vitest';
import {
  SCHEDULED_CHANGES,
  pendingChangesFor,
  validateScheduledChange,
} from '@/content/scheduled-changes';
import { SOURCES } from '@/content/sources';
import type { ScheduledChange } from '@/content/types';

/**
 * Precondition A1 — resolves France finding F3.
 *
 * `today` is injected everywhere so the staleness rule is deterministic. A validator that
 * reads the wall clock is one that passes in CI today and fails silently on some future date
 * nobody is watching.
 */

const SOURCE_IDS = SOURCES.map((s) => s.id);
const BEFORE = '2026-07-24';
const AFTER = '2029-06-01';

const valid: ScheduledChange = {
  id: 'example-change',
  changeType: 'repeal',
  effectiveOn: '2029-01-01',
  enactedOn: '2025-11-19',
  affectedEntityIds: ['fr-cpp-art-12'],
  description: 'An example scheduled repeal.',
  sources: ['fr-cpp-art-12'],
  certainty: 'enacted-with-date',
  status: 'pending',
};

const opts = { today: BEFORE, knownSourceIds: SOURCE_IDS };

describe('scheduled-change registry', () => {
  it('is not empty, so the registry assertions below are not vacuous', () => {
    expect(SCHEDULED_CHANGES.length).toBeGreaterThan(0);
  });

  it.each(SCHEDULED_CHANGES.map((c) => [c.id, c] as const))(
    'scheduled change %s is valid as at the research date',
    (_id, change) => {
      expect(validateScheduledChange(change, opts)).toEqual([]);
    },
  );

  it('records the French 2029 recodification that finding F3 identified', () => {
    const change = SCHEDULED_CHANGES.find((c) => c.id === 'fr-recodification-2029');
    expect(change).toBeDefined();
    expect(change?.effectiveOn).toBe('2029-01-01');
    expect(change?.certainty).toBe('enacted-with-date');
    expect(change?.affectedEntityIds).toContain('fr-cpp-art-12');
  });

  it('exposes pending changes by affected entity, for a reader-facing notice', () => {
    expect(pendingChangesFor('fr-cpp-art-12').map((c) => c.id)).toContain(
      'fr-recodification-2029',
    );
    expect(pendingChangesFor('not-an-entity')).toEqual([]);
  });
});

describe('scheduled-change validation rejects invalid combinations', () => {
  it('accepts the baseline, so the rejections below mean something', () => {
    expect(validateScheduledChange(valid, opts)).toEqual([]);
  });

  it('rejects a change with no source', () => {
    expect(validateScheduledChange({ ...valid, sources: [] }, opts).join(' ')).toMatch(
      /requires at least one authoritative source/,
    );
  });

  it('rejects a change citing a source that does not exist', () => {
    expect(validateScheduledChange({ ...valid, sources: ['nope'] }, opts).join(' ')).toMatch(
      /does not resolve/,
    );
  });

  it('rejects a change naming no affected entity', () => {
    expect(
      validateScheduledChange({ ...valid, affectedEntityIds: [] }, opts).join(' '),
    ).toMatch(/must name at least one affected entity/);
  });

  it('rejects an affected entity that does not resolve, when a list is supplied', () => {
    const problems = validateScheduledChange(valid, {
      ...opts,
      knownEntityIds: ['something-else'],
    });
    expect(problems.join(' ')).toMatch(/affected entity "fr-cpp-art-12" does not resolve/);
  });

  it('rejects a malformed effective date', () => {
    expect(
      validateScheduledChange({ ...valid, effectiveOn: 'January 2029' }, opts).join(' '),
    ).toMatch(/must be an ISO date/);
  });

  /*
   * The model must not assume every announced reform takes effect. A proposal may be tracked;
   * it may not sit in the pending pipeline as something the site tells readers will happen.
   */
  it('refuses to treat a merely announced or proposed reform as scheduled', () => {
    for (const certainty of ['announced', 'proposed', 'uncertain'] as const) {
      expect(
        validateScheduledChange({ ...valid, certainty }, opts).join(' '),
        `certainty "${certainty}" must not be publishable as pending`,
      ).toMatch(/must not be presented as scheduled/);
    }
  });

  it('requires an enactment date when certainty claims the change is enacted', () => {
    const { enactedOn: _omitted, ...withoutEnacted } = valid;
    expect(validateScheduledChange(withoutEnacted as ScheduledChange, opts).join(' ')).toMatch(
      /requires enactedOn/,
    );
  });

  /* ---------------------------------------------------------------------- */
  /* The staleness gate — the reason this model exists                      */
  /* ---------------------------------------------------------------------- */

  it('passes while the effective date is still in the future', () => {
    expect(validateScheduledChange(valid, { ...opts, today: BEFORE })).toEqual([]);
  });

  it('FAILS once the effective date has passed and nothing has been re-reviewed', () => {
    const problems = validateScheduledChange(valid, { ...opts, today: AFTER });
    expect(problems.join(' ')).toMatch(/has passed .* still pending/s);
  });

  it('still fails when the re-review predates the effective date', () => {
    const problems = validateScheduledChange(
      { ...valid, reviewedAfterEffect: '2028-12-31' },
      { ...opts, today: AFTER },
    );
    expect(problems.join(' ')).toMatch(/predates effectiveOn/);
  });

  it('passes once affected content has been re-reviewed on or after the effective date', () => {
    expect(
      validateScheduledChange(
        { ...valid, reviewedAfterEffect: '2029-01-15' },
        { ...opts, today: AFTER },
      ),
    ).toEqual([]);
  });

  /* ---------------------------------------------------------------------- */
  /* Cancelled and superseded must be distinguishable from active           */
  /* ---------------------------------------------------------------------- */

  it('does not apply the staleness gate to a cancelled change', () => {
    expect(
      validateScheduledChange(
        { ...valid, status: 'cancelled', notes: 'Struck down before commencement.' },
        { ...opts, today: AFTER },
      ),
    ).toEqual([]);
  });

  it('does not apply the staleness gate to a superseded change', () => {
    expect(
      validateScheduledChange(
        { ...valid, status: 'superseded', notes: 'Replaced by a later instrument.' },
        { ...opts, today: AFTER },
      ),
    ).toEqual([]);
  });

  it('requires an explanation before a change may be recorded as not happening', () => {
    for (const status of ['cancelled', 'superseded'] as const) {
      expect(validateScheduledChange({ ...valid, status }, opts).join(' ')).toMatch(
        /requires notes explaining/,
      );
    }
  });

  it('rejects a change that supersedes itself', () => {
    expect(validateScheduledChange({ ...valid, supersedes: valid.id }, opts).join(' ')).toMatch(
      /cannot supersede itself/,
    );
  });
});
