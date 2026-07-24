import type { RestrictedClaim, RestrictedClaimCategory } from './types';
import { RESTRICTED_CLAIM_CATEGORIES } from './types';

/**
 * Automated enforcement for the nine restricted claim categories (precondition A4).
 *
 * Two mechanisms, because one is not enough:
 *
 *   1. **Schema enforcement.** A restricted claim may only be published as a fully specified
 *      `RestrictedClaim` record: category, claim type, sources, source scope, jurisdiction,
 *      temporal scope, verification date, metric period, and a limitation note.
 *
 *   2. **Lexical enforcement.** Schema enforcement alone is trivially evaded by dropping the
 *      number and keeping the assertion — "widespread corruption", "highly trusted",
 *      "chronically understaffed". Those carry the same claim with none of the evidence, and
 *      are harder to challenge precisely because they look like description rather than
 *      measurement. The patterns below scan published prose and require that any text making
 *      such an assertion be backed by a declared claim in the same category.
 *
 * The lexical layer is a tripwire, not a language model. It will not catch every phrasing, and
 * it is not the primary control — editorial review is. Its job is to make the *easy* evasion
 * fail loudly.
 */

export interface RestrictedPattern {
  category: RestrictedClaimCategory;
  /** Case-insensitive. Matched against rendered prose. */
  pattern: RegExp;
  /** Why this phrasing is restricted, shown in the test failure. */
  reason: string;
}

export const RESTRICTED_PATTERNS: readonly RestrictedPattern[] = [
  {
    category: 'compensation',
    pattern:
      /\b(?:well|poorly|badly)[- ]paid|\bsalar(?:y|ies)\s+(?:of|are|is)\b|\bearns?\s+(?:around|about|roughly)\b/i,
    reason: 'A pay claim requires a dated official source and a stated jurisdiction.',
  },
  {
    category: 'crime-levels',
    pattern:
      /\b(?:high|low|rising|falling|soaring|plummeting)\s+(?:crime|homicide|offend\w*)\b|\bcrime\s+(?:rate|level)s?\s+(?:are|is|has|have)\b|\b(?:safest|most dangerous)\b/i,
    reason:
      'A crime-level claim requires an official statistical source, the collection period, and the counting definition used.',
  },
  {
    category: 'corruption',
    pattern:
      /\b(?:widespread|systemic|endemic|rampant|pervasive|little|no)\s+corruption\b|\bcorrupt\s+(?:police|force|judiciary|officials?|system)\b|\b(?:notoriously|famously)\s+corrupt\b/i,
    reason:
      'A corruption claim requires a dated finding from an official or intergovernmental body, attributed as such.',
  },
  {
    category: 'institutional-effectiveness',
    pattern:
      /\b(?:very|highly|extremely|remarkably|notably)\s+(?:effective|efficient|ineffective|inefficient)\b|\b(?:one of the )?(?:best|worst|most effective|least effective)\s+(?:police|court|justice|prison|system)/i,
    reason:
      'An effectiveness claim requires a stated measure, a source that applies that measure, and the period measured.',
  },
  {
    category: 'public-trust',
    pattern:
      /\b(?:highly|widely|deeply|little|not)\s+trusted\b|\bpublic\s+(?:trust|confidence)\s+(?:is|are|remains|has)\b|\benjoys?\s+(?:high|low|strong|weak)\s+(?:public\s+)?(?:trust|confidence)\b/i,
    reason:
      'A public-trust claim requires a dated survey source, the population surveyed, and the question asked.',
  },
  {
    category: 'occupational-harm',
    pattern:
      /\b(?:dangerous|deadly|high[- ]risk)\s+(?:profession|job|work|occupation)\b|\bofficers?\s+(?:are\s+)?killed\b|\bline[- ]of[- ]duty\s+deaths?\b|\b(?:injury|fatality|mortality)\s+rates?\b/i,
    reason:
      'A claim about occupational death or injury requires an official dated statistic and a stated population.',
  },
  {
    category: 'staffing',
    pattern:
      /\b(?:under|over)staffed\b|\bstaff(?:ing)?\s+(?:shortage|crisis|shortfall)\b|\b(?:too few|not enough)\s+(?:officers|judges|prosecutors|staff)\b|\bshortage\s+of\s+(?:officers|judges|prosecutors)\b/i,
    reason:
      'A staffing claim requires an official establishment figure, the date, and the baseline it is measured against.',
  },
  {
    category: 'political-control',
    pattern:
      /\bpolitically\s+(?:controlled|directed|driven|motivated)\b|\bunder\s+political\s+control\b|\btakes?\s+orders\s+from\s+(?:the\s+)?(?:government|minister|executive)\b|\b(?:puppet|rubber[- ]stamp)\b/i,
    reason:
      'A political-control claim requires the specific legal provision or the specific official finding it rests on, precisely scoped.',
  },
  {
    category: 'human-rights-performance',
    pattern:
      /\b(?:good|poor|bad|strong|weak)\s+human[- ]rights\s+record\b|\bhuman[- ]rights\s+(?:abuses|violations)\s+(?:are|is|remain)\s+(?:common|widespread|rare)\b|\b(?:routinely|systematically)\s+(?:violates?|abuses?)\b/i,
    reason:
      'A human-rights performance claim requires a dated finding from a court, treaty body, or official inspectorate, attributed to it.',
  },
];

/**
 * Validate one restricted-claim record. Returns human-readable problems; empty means valid.
 *
 * Pure, so invalid combinations can be exercised directly with synthetic records rather than
 * only asserted against a registry that happens to be correct today.
 */
export function validateRestrictedClaim(
  claim: RestrictedClaim,
  knownSourceIds: readonly string[],
): string[] {
  const problems: string[] = [];

  if (!RESTRICTED_CLAIM_CATEGORIES.includes(claim.category)) {
    problems.push(`unknown restricted-claim category "${claim.category}"`);
  }
  if (claim.statement.trim().length === 0) {
    problems.push('statement must not be empty');
  }
  if (claim.sources.length === 0) {
    problems.push('a restricted claim requires at least one source');
  }
  for (const id of claim.sources) {
    if (!knownSourceIds.includes(id)) {
      problems.push(`source "${id}" does not resolve to a source record`);
    }
  }
  if (claim.sourceScope.trim().length === 0) {
    problems.push('sourceScope must state what the source actually establishes');
  }
  if (!/^(?:[A-Z]{2}|INT)$/.test(claim.jurisdiction)) {
    problems.push(
      `jurisdiction "${claim.jurisdiction}" must be an ISO 3166-1 alpha-2 code or "INT"`,
    );
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(claim.verifiedOn)) {
    problems.push(`verifiedOn "${claim.verifiedOn}" must be an ISO date`);
  }
  if (claim.limitation.trim().length === 0) {
    problems.push('limitation is required: state what the claim does NOT establish');
  }

  /*
   * A measurement without the period it measures is not checkable. `fact` is the claim type
   * used for measured assertions, so it is the one that requires a metric period.
   */
  if (claim.claimType === 'fact' && !claim.metricPeriod) {
    problems.push(
      'a factual restricted claim requires metricPeriod — the year or period the figure describes',
    );
  }

  return problems;
}

/**
 * Scan a block of prose for restricted phrasing.
 *
 * `declaredCategories` are the categories the owning entity has declared restricted claims
 * for. A match in a declared category is allowed; a match in an undeclared category is a
 * violation.
 */
export function findRestrictedPhrasing(
  text: string,
  declaredCategories: readonly RestrictedClaimCategory[] = [],
): { category: RestrictedClaimCategory; match: string; reason: string }[] {
  const violations: { category: RestrictedClaimCategory; match: string; reason: string }[] = [];

  for (const { category, pattern, reason } of RESTRICTED_PATTERNS) {
    if (declaredCategories.includes(category)) continue;
    const found = text.match(pattern);
    if (found) {
      violations.push({ category, match: found[0], reason });
    }
  }

  return violations;
}
