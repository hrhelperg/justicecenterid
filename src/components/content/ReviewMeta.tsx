import { Badge, type BadgeTone } from '@/components/ui/Badge';
import { formatDate } from '@/lib/content';
import type { ReviewStatus, SafetyReview } from '@/content/types';

/**
 * Exported so every surface that renders review state derives it from one place. The
 * glossary previously hardcoded a "Fact-checked" badge on every entry regardless of the
 * term's actual review status.
 */
export const REVIEW_LABELS: Record<ReviewStatus, { label: string; tone: BadgeTone }> = {
  unreviewed: { label: 'Not yet reviewed', tone: 'neutral' },
  'editorial-review': { label: 'Editorial review', tone: 'accent' },
  'fact-checked': { label: 'Fact-checked', tone: 'affirm' },
  'needs-update': { label: 'Needs update', tone: 'gold' },
};

/**
 * Review state is rendered to the reader, not merely stored. A page that has not been
 * fact-checked says so.
 */
export function ReviewMeta({
  review,
  updatedOn,
  reviewedOn,
  safetyReview,
}: {
  review: ReviewStatus;
  updatedOn: string;
  reviewedOn?: string;
  safetyReview?: SafetyReview;
}) {
  const { label, tone } = REVIEW_LABELS[review];

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-subtle">
      <Badge tone={tone}>{label}</Badge>
      {safetyReview === 'cleared' && <Badge tone="neutral">Safety review cleared</Badge>}
      <span>
        Last updated <time dateTime={updatedOn}>{formatDate(updatedOn)}</time>
      </span>
      {reviewedOn && (
        <span>
          Last reviewed <time dateTime={reviewedOn}>{formatDate(reviewedOn)}</time>
        </span>
      )}
    </div>
  );
}
