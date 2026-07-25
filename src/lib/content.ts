import { COUNTRIES } from '@/content/countries';
import { PUBLISHED_GLOSSARY } from '@/content/glossary';
import { PUBLISHED_GUIDES } from '@/content/guides';
import { PUBLISHED_INSTITUTION_TYPES } from '@/content/institutions';
import { PUBLISHED_PROFESSIONS } from '@/content/professions';
import { SOURCES } from '@/content/sources';
import type { Block } from '@/content/types';

/**
 * Site statistics, computed from the content registry at build time.
 *
 * Never hand-written. A hand-written count is how "200 countries covered" appears on a site
 * that covers none, and it is a content-validation failure by policy.
 *
 * `countriesResearched` was itself a hand-written `0` in the original foundation. It was
 * accurate on the day it was written and would have become a false claim the moment the
 * first country pilot landed — precisely the failure this comment warns about. It is now
 * derived, like every other figure here.
 */
export const SITE_STATS = {
  guides: PUBLISHED_GUIDES.length,
  glossaryTerms: PUBLISHED_GLOSSARY.length,
  sources: SOURCES.length,
  professions: PUBLISHED_PROFESSIONS.length,
  institutionTypes: PUBLISHED_INSTITUTION_TYPES.length,
  countriesTracked: COUNTRIES.length,
  countriesResearched: COUNTRIES.filter(
    (country) => country.coverage === 'partial' || country.coverage === 'established',
  ).length,
} as const;

const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export interface InlineSegment {
  text: string;
  href?: string;
}

/**
 * Splits `[text](/route)` markers out of a block's text.
 *
 * Content carries no HTML: links are written as markers and resolved at render time. That is
 * what allows tests/content/links.test.ts to validate every internal link against the route
 * registry without parsing rendered output.
 */
export function parseInline(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(INLINE_LINK)) {
    const [full, label, href] = match;
    const index = match.index;
    if (index > lastIndex) segments.push({ text: text.slice(lastIndex, index) });
    if (label && href) segments.push({ text: label, href });
    lastIndex = index + full.length;
  }

  if (lastIndex < text.length) segments.push({ text: text.slice(lastIndex) });
  return segments;
}

/**
 * Japanese script: hiragana, katakana, the iteration mark 々, CJK ideographs (incl. Ext. A)
 * and half-width katakana. Latin romanizations ("Keishicho", "todofuken") are NOT matched —
 * only actual Japanese script — so this affects the Japan pages and leaves every other page
 * untouched.
 */
const JAPANESE_SCRIPT = /[々぀-ゟ゠-ヿ㐀-䶿一-鿿ｦ-ﾟ]/;

export interface ScriptRun {
  text: string;
  /** BCP-47 language tag when the run is in a script other than the page default. */
  lang?: string;
}

/**
 * Splits a string into consecutive runs, tagging runs of Japanese script with `lang: 'ja'`.
 *
 * This is what lets the renderer mark inline Japanese with `lang="ja"` for accessibility
 * (WCAG 3.1.2, Language of Parts) without the content carrying any HTML. A string with no
 * Japanese script returns a single untagged run, so the common case is unchanged.
 */
export function splitJapaneseRuns(text: string): ScriptRun[] {
  const runs: ScriptRun[] = [];
  let current = '';
  let currentIsJa: boolean | undefined;

  for (const char of text) {
    const isJa = JAPANESE_SCRIPT.test(char);
    if (currentIsJa === undefined) {
      currentIsJa = isJa;
      current = char;
      continue;
    }
    if (isJa === currentIsJa) {
      current += char;
    } else {
      runs.push(currentIsJa ? { text: current, lang: 'ja' } : { text: current });
      current = char;
      currentIsJa = isJa;
    }
  }
  if (current.length > 0) {
    runs.push(currentIsJa ? { text: current, lang: 'ja' } : { text: current });
  }
  return runs;
}

/** Every internal link target in a set of blocks. Used by the link validator. */
export function extractInternalLinks(blocks: readonly Block[]): string[] {
  const links: string[] = [];
  for (const block of blocks) {
    if (block.kind !== 'paragraph' && block.kind !== 'callout') continue;
    const text = block.kind === 'paragraph' ? block.text : block.text;
    for (const match of text.matchAll(INLINE_LINK)) {
      const href = match[2];
      if (href) links.push(href);
    }
  }
  return links;
}

export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
