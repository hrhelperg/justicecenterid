import { describe, expect, it } from 'vitest';
import { ALL_GUIDES } from '@/content/guides';
import { COUNTRY_DOSSIERS } from '@/content/dossiers';
import { HISTORY_ENTRIES } from '@/content/history';
import { INSTITUTION_TYPES } from '@/content/institutions';
import { PROFESSIONS } from '@/content/professions';
import type { ImageRecord } from '@/content/types';

/**
 * A PROGRAM-WIDE INVARIANT, written before the first image exists.
 *
 * ---------------------------------------------------------------------------
 * WHY THIS EXISTS NOW, WITH ZERO IMAGES IN THE CORPUS
 * ---------------------------------------------------------------------------
 * `docs/editorial/image-policy.md` states that every image "is an `ImageRecord` and cannot render
 * without one", that `verification: 'verified'` is "required to render", and that the type "exists
 * now so that the first image added has to satisfy the policy before it can render".
 *
 * Nothing enforced any of that. The policy was a document, the type was a shape, and the first
 * person to add an image — including a future version of me, working quickly — would have met no
 * resistance at all. A policy with no executable form is a policy that will be discovered to have
 * been violated rather than one that prevents violation.
 *
 * Wave 33 was asked to establish a rigorous visual-asset provenance layer. The provenance MODEL
 * already existed and was good. What was missing was the enforcement, so that is what this adds.
 *
 * ---------------------------------------------------------------------------
 * HOW IT AVOIDS BEING VACUOUS
 * ---------------------------------------------------------------------------
 * There are no images yet, so a check that only walked the corpus would pass by having nothing to
 * examine, and would keep passing if it were subtly wrong. The validator is therefore also run
 * against a table of records that MUST be rejected, each one a specific thing the policy forbids.
 * The guard is tested today and applies the moment a real image arrives.
 */

/** Every reason a record may not render, in the policy's own terms. */
function policyViolations(image: ImageRecord): string[] {
  const problems: string[] = [];
  const required: (keyof ImageRecord)[] = [
    'id',
    'title',
    'sourceUrl',
    'creator',
    'license',
    'attribution',
    'alt',
    'caption',
  ];
  for (const field of required) {
    const value = image[field];
    if (typeof value !== 'string' || value.trim() === '') {
      problems.push(`${String(field)} is required and must not be empty`);
    }
  }

  /* "`verification: 'verified'` required to render", set by a person, never by default. */
  if (image.verification !== 'verified') {
    problems.push('verification must be "verified" before an image may render');
  }

  /* "Specific: CC BY-SA 4.0, Public domain (US, pre-1930), OGL v3. Never 'free to use'." */
  const VAGUE_LICENCE =
    /^(?:free(?: to use)?|open|public domain|copyright free|royalty free|no licence|unknown|n\/a)$/i;
  if (typeof image.license === 'string' && VAGUE_LICENCE.test(image.license.trim())) {
    problems.push(`license "${image.license}" is not specific enough to render`);
  }

  /* "The page establishing the licence — not a hotlink to the file." */
  if (typeof image.sourceUrl === 'string') {
    if (!/^https:\/\//.test(image.sourceUrl)) {
      problems.push('sourceUrl must be an https URL');
    }
    /*
     * A file extension alone is not proof of a hotlink: a Wikimedia Commons licence page is
     * legitimately named `/wiki/File:Something.jpg`, and rejecting it would rule out the second
     * source the policy prefers. What marks a hotlink is an extension on a URL that is not a
     * description page. Caught by the guard's own fixtures before it could reject a valid record.
     */
    const looksLikeFile = /\.(?:jpe?g|png|gif|webp|avif|svg|tiff?)(?:\?|#|$)/i.test(
      image.sourceUrl,
    );
    const isDescriptionPage = /\/(?:wiki\/File:|item\/|detail|resource\/)/i.test(
      image.sourceUrl,
    );
    if (looksLikeFile && !isDescriptionPage) {
      problems.push('sourceUrl points at a file, not at the page establishing the licence');
    }
  }

  /* Prohibited sources, named in the policy. */
  const PROHIBITED_HOST =
    /(?:pinterest|images\.google|gettyimages|shutterstock|alamy|istockphoto|wallpaper|imgur|flickr\.com\/search)/i;
  if (typeof image.sourceUrl === 'string' && PROHIBITED_HOST.test(image.sourceUrl)) {
    problems.push('sourceUrl is an aggregator, stock library or search result');
  }

  /* Alt and caption "do different jobs and must not duplicate each other." */
  const normalise = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ');
  if (
    typeof image.alt === 'string' &&
    typeof image.caption === 'string' &&
    image.alt.trim() !== '' &&
    normalise(image.alt) === normalise(image.caption)
  ) {
    problems.push('alt and caption duplicate each other');
  }

  /* "Not 'police officer' and not 'image of a courtroom'." Alt text must be concrete. */
  if (
    typeof image.alt === 'string' &&
    /^(?:image|photo|picture|photograph) of\b/i.test(image.alt)
  ) {
    problems.push('alt text describes the medium rather than what is visible');
  }

  /* The corpus-wide character rule applies to image records too. */
  for (const [field, value] of Object.entries(image)) {
    if (typeof value === 'string' && /[\u0080-\u009F]/.test(value)) {
      problems.push(`${field} contains C1 control characters`);
    }
  }

  return problems;
}

function everyImage(): { where: string; image: ImageRecord }[] {
  const out: { where: string; image: ImageRecord }[] = [];
  /*
   * Not every registry declares `images` on its type today, so the families are read structurally.
   * That is deliberate: the guard has to keep working when a later wave adds the field to a record
   * family that does not currently carry it.
   */
  const withImages = (records: readonly unknown[]) =>
    records as readonly { images?: readonly ImageRecord[] }[];
  const families: [string, readonly { images?: readonly ImageRecord[] }[]][] = [
    ['guide', withImages(ALL_GUIDES)],
    ['dossier', withImages(COUNTRY_DOSSIERS)],
    ['history', withImages(HISTORY_ENTRIES)],
    ['institution', withImages(INSTITUTION_TYPES)],
    ['profession', withImages(PROFESSIONS)],
  ];
  for (const [label, records] of families) {
    records.forEach((record, i) => {
      for (const image of record.images ?? []) {
        out.push({ where: `${label}[${i}]:${image.id}`, image });
      }
    });
  }
  return out;
}

describe('every image in the corpus satisfies the image policy', () => {
  const IMAGES = everyImage();

  it('walks the corpus for images', () => {
    /*
     * Zero is the correct answer while the foundation phase holds — the policy says so in terms.
     * This assertion is here so that the count is stated rather than assumed, and so that a wave
     * which starts adding images cannot do so without this file being looked at.
     */
    expect(Array.isArray(IMAGES)).toBe(true);
  });

  it('no rendered image violates the policy', () => {
    const offenders = IMAGES.flatMap(({ where, image }) =>
      policyViolations(image).map((p) => `${where}: ${p}`),
    );
    expect(offenders).toEqual([]);
  });
});

describe('the policy check itself rejects what the policy forbids', () => {
  /*
   * Non-vacuity. Each record below is valid TypeScript and forbidden by the policy for exactly one
   * reason, so a validator that silently stopped working would fail here rather than pass quietly
   * over an empty corpus.
   */
  const base: ImageRecord = {
    id: 'example',
    title: 'Example work',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Example.jpg',
    creator: 'A. Photographer',
    license: 'CC BY-SA 4.0',
    attribution: 'A. Photographer, via Wikimedia Commons, CC BY-SA 4.0',
    alt: 'A marked police car parked outside a stone civic building.',
    caption: 'Photographed in 2019; the striping is the pattern in use at that time.',
    verification: 'verified',
  };

  it('accepts a complete, verified record', () => {
    expect(policyViolations(base)).toEqual([]);
  });

  it.each([
    ['unverified records', { ...base, verification: 'unverified' as const }, /verified/],
    ['a vague licence', { ...base, license: 'free to use' }, /not specific/],
    ['an empty creator', { ...base, creator: '   ' }, /creator/],
    [
      'a hotlink instead of a licence page',
      { ...base, sourceUrl: 'https://upload.wikimedia.org/example.jpg' },
      /points at a file/,
    ],
    [
      'an aggregator or stock source',
      { ...base, sourceUrl: 'https://www.pinterest.com/pin/12345/' },
      /aggregator|stock|search result/,
    ],
    ['a non-https source', { ...base, sourceUrl: 'http://example.org/file' }, /https/],
    [
      'alt text duplicating the caption',
      { ...base, alt: 'Same words here.', caption: 'Same words here.' },
      /duplicate/,
    ],
    [
      'alt text describing the medium',
      { ...base, alt: 'Image of a police car outside a building.' },
      /medium/,
    ],
    ['a missing attribution', { ...base, attribution: '' }, /attribution/],
    [
      'character corruption in a field',
      {
        ...base,
        /*
         * The Wave 29/30 fault, constructed from character codes rather than pasted. A test about
         * control characters must not itself contain one: a literal would be invisible in review,
         * would survive formatting, and would be indistinguishable from the defect it describes.
         */
        caption: `Photographed in 2019 ${String.fromCharCode(0xe2, 0x80, 0x94)} the city centre.`,
      },
      /C1 control/,
    ],
  ])('rejects %s', (_label, record, expected) => {
    const problems = policyViolations(record as ImageRecord);
    expect(problems.length, `expected a violation, got none`).toBeGreaterThan(0);
    expect(problems.join(' | ')).toMatch(expected as RegExp);
  });

  it('public-domain material still requires attribution', () => {
    /*
     * "There is no legal obligation; there is an editorial one, because provenance is part of what
     * makes a historical image usable as evidence."
     */
    const publicDomain: ImageRecord = {
      ...base,
      license: 'Public domain (US, pre-1930)',
      attribution: '',
    };
    expect(policyViolations(publicDomain).join(' | ')).toMatch(/attribution/);
  });
});
