import type { Block, CountryDossier } from './types';

/**
 * Scaffold-residue and template-leak detection.
 *
 * The country scaffold (scripts/scaffold-country.mjs) emits an unmistakably UNFINISHED skeleton:
 * mustache tokens (`{{name}}`), `TODO:` lines, and a `SCAFFOLD` sentinel, with no sources and no
 * verification date. This module is the tripwire that stops such a skeleton — or any half-edited
 * draft — from being marked published with residue still in it.
 *
 * ## Why it scans editorial strings, not rendered HTML
 *
 * The output-level backstop in scripts/verify-output.mjs deliberately uses only very specific
 * markers (`TODO:`, `lorem ipsum`, `Placeholder text`) because rendered HTML is full of
 * innocent noise: minified CSS contains `}}`, Tailwind ships a `::placeholder` rule, React's RSC
 * payload contains `todo`-like fragments. Scanning that surface with broad markers would be all
 * false positives.
 *
 * This module scans the CONTENT LAYER — the editorial strings an author actually writes (block
 * text, summaries, titles, deferred-module reasons, restricted-claim prose). That surface is
 * clean by construction, so it can carry broad, high-confidence markers (`TODO`, bare
 * `placeholder`, `{{`) without use/mention false positives. The ten published countries produce
 * zero matches; a scaffolded skeleton produces many.
 */

export interface PlaceholderMatch {
  /** The marker family that fired. */
  marker: string;
  /** The exact substring that matched, for the failure message. */
  match: string;
  /** Why published content may not contain it. */
  reason: string;
}

interface PlaceholderPattern {
  marker: string;
  pattern: RegExp;
  reason: string;
}

/**
 * High-confidence residue markers. Each is safe against real editorial prose (verified: the ten
 * published countries match none of them) and is exactly what an unfinished draft or the
 * scaffold skeleton contains.
 */
export const PLACEHOLDER_PATTERNS: readonly PlaceholderPattern[] = [
  {
    marker: 'todo',
    pattern: /\bTODO\b/i,
    reason: 'a TODO marks unfinished work and must not survive into published content',
  },
  {
    marker: 'tbd',
    pattern: /\bTB[DC]\b/,
    reason:
      '"TBD"/"TBC" marks an undecided value; publish a researched value or defer the module',
  },
  {
    marker: 'fixme',
    pattern: /\bFIXME\b/i,
    reason: 'a FIXME marks a known defect and must be resolved before publication',
  },
  {
    marker: 'lorem-ipsum',
    pattern: /lorem ipsum|lipsum/i,
    reason: 'filler text must never be published',
  },
  {
    marker: 'mustache-token',
    pattern: /\{\{[^}]*\}\}|\}\}|\{\{/,
    reason: 'an unresolved {{template}} token means a scaffold field was never filled in',
  },
  {
    marker: 'angle-token',
    pattern: /<[A-Z][A-Z0-9_]{2,}>/,
    reason: 'an <UPPERCASE_TOKEN> is a template placeholder that was never replaced',
  },
  {
    marker: 'placeholder-word',
    pattern: /\bplaceholder\b/i,
    reason: 'the word "placeholder" in published prose almost always marks unwritten content',
  },
  {
    marker: 'replace-me',
    pattern: /\breplace[ -](?:me|this|with the)\b/i,
    reason: 'a "replace me" instruction is scaffold residue',
  },
  {
    marker: 'example-source',
    pattern: /\bexample source\b/i,
    reason: 'a source must be a real, verified citation, never an example',
  },
  {
    marker: 'scaffold-sentinel',
    pattern: /\bSCAFFOLD\b/,
    reason: 'the SCAFFOLD sentinel means an unresearched skeleton is being published',
  },
];

/** Scan one string. Returns every marker that fired; empty means clean. */
export function findPlaceholderResidue(text: string): PlaceholderMatch[] {
  const matches: PlaceholderMatch[] = [];
  for (const { marker, pattern, reason } of PLACEHOLDER_PATTERNS) {
    const found = text.match(pattern);
    if (found) matches.push({ marker, match: found[0], reason });
  }
  return matches;
}

function blockText(block: Block): string[] {
  switch (block.kind) {
    case 'paragraph':
      return [block.text];
    case 'list':
      return block.items;
    case 'definitionList':
      return block.items.flatMap((item) => [item.term, item.description]);
    case 'callout':
      return [block.title, block.text];
  }
}

/**
 * Every reader-facing editorial string a published dossier puts on a page: the hub, each
 * module (published prose AND deferred-module reasons, both of which render), and restricted
 * claims. This is the exact surface the publication gate scans for residue.
 */
export function collectDossierText(dossier: CountryDossier): string[] {
  const strings: string[] = [dossier.name, dossier.summary];
  if (dossier.officialName) strings.push(dossier.officialName);
  if (dossier.independentBodyNoun) strings.push(dossier.independentBodyNoun);
  strings.push(...(dossier.uncertainty ?? []));
  strings.push(...dossier.blocks.flatMap(blockText));

  for (const m of dossier.modules) {
    strings.push(m.title, m.summary);
    if (m.deferredReason) strings.push(m.deferredReason);
    strings.push(...(m.uncertainty ?? []));
    strings.push(...m.blocks.flatMap(blockText));
    for (const rc of m.restrictedClaims ?? []) {
      strings.push(rc.statement, rc.sourceScope, rc.limitation);
    }
  }
  return strings.filter((s) => s.length > 0);
}

/** Residue found anywhere in a dossier's reader-facing text, with the field it came from. */
export function findDossierResidue(dossier: CountryDossier): PlaceholderMatch[] {
  return collectDossierText(dossier).flatMap((text) => findPlaceholderResidue(text));
}
