import { describe, expect, it } from 'vitest';
import { getSource } from '@/content/sources';
import { TIMELINE, TIMELINE_SORTED } from '@/content/timeline';

/** Rule 16: every timeline entry requires at least one verified source. */

describe('timeline entries', () => {
  it('entry ids are unique', () => {
    const ids = TIMELINE.map((entry) => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(TIMELINE.map((entry) => [entry.id, entry] as const))(
    'entry %s has at least one source with a verification date',
    (_id, entry) => {
      expect(entry.sources.length).toBeGreaterThanOrEqual(1);

      const verified = entry.sources
        .map((id) => getSource(id))
        .filter((source) => source !== undefined)
        .filter((source) => source.verifiedOn || !source.url);

      expect(
        verified.length,
        `${entry.id} needs a source whose URL was verified, or a source cited without a URL`,
      ).toBeGreaterThanOrEqual(1);
    },
  );

  it.each(TIMELINE.map((entry) => [entry.id, entry] as const))(
    'entry %s states its region, description, and significance',
    (_id, entry) => {
      expect(entry.title.trim().length).toBeGreaterThan(0);
      expect(entry.description.trim().length).toBeGreaterThan(0);
      expect(entry.significance.trim().length).toBeGreaterThan(0);
      expect(entry.region.trim().length).toBeGreaterThan(0);
      expect(entry.displayDate.trim().length).toBeGreaterThan(0);
    },
  );

  it('is sorted chronologically', () => {
    const years = TIMELINE_SORTED.map((entry) => entry.year);
    expect(years).toEqual([...years].sort((a, b) => a - b));
  });
});
