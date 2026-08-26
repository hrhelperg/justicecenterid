import { describe, expect, it } from 'vitest';
import { parseInline } from '@/lib/content';

/**
 * Content carries no HTML. Links are written `[text](/route)` and emphasis `**strong**` / `*em*`,
 * and parseInline is the single place both are resolved.
 *
 * Emphasis was added in Wave 19. Before it, 93 marker pairs across the corpus — italics for
 * foreign legal terms and quoted statutory phrases, bold for emphasis — were reaching readers as
 * literal asterisks, because parseInline knew only about links. These tests exist so that the
 * parser cannot quietly regress to that state, and so that the deliberate limits below (a stray
 * asterisk stays literal; a marker spanning an asterisk is not emphasis) are pinned rather than
 * incidental.
 */
describe('parseInline', () => {
  it('leaves text with no markers as a single segment', () => {
    expect(parseInline('A judgment is not a decree.')).toEqual([
      { text: 'A judgment is not a decree.' },
    ]);
  });

  it('resolves a link marker', () => {
    expect(parseInline('See [appeal](/glossary/appeal) first.')).toEqual([
      { text: 'See ' },
      { text: 'appeal', href: '/glossary/appeal' },
      { text: ' first.' },
    ]);
  });

  it('resolves single-asterisk emphasis', () => {
    expect(parseInline('The German *Revision* is confined to legal error.')).toEqual([
      { text: 'The German ' },
      { text: 'Revision', emphasis: 'em' },
      { text: ' is confined to legal error.' },
    ]);
  });

  it('resolves double-asterisk emphasis', () => {
    expect(parseInline('may be based **only** on a violation')).toEqual([
      { text: 'may be based ' },
      { text: 'only', emphasis: 'strong' },
      { text: ' on a violation' },
    ]);
  });

  it('prefers strong over em when both would match the same run', () => {
    // Without the `**` alternative first, `*x*` would match the opening pair of `**x**` and
    // leave a stray `*` on either side.
    const segments = parseInline('**final**');
    expect(segments).toEqual([{ text: 'final', emphasis: 'strong' }]);
  });

  it('resolves several runs of mixed kinds in one string', () => {
    expect(parseInline('*a* then **b** then [c](/courts) then *d*')).toEqual([
      { text: 'a', emphasis: 'em' },
      { text: ' then ' },
      { text: 'b', emphasis: 'strong' },
      { text: ' then ' },
      { text: 'c', href: '/courts' },
      { text: ' then ' },
      { text: 'd', emphasis: 'em' },
    ]);
  });

  it('emphasises a single character', () => {
    expect(parseInline('*a*')).toEqual([{ text: 'a', emphasis: 'em' }]);
  });

  it('keeps an unpaired asterisk literal', () => {
    expect(parseInline('a 3 * 4 grid')).toEqual([{ text: 'a 3 * 4 grid' }]);
  });

  it('does not open emphasis on an asterisk followed by a space', () => {
    expect(parseInline('* not a list item *')).toEqual([{ text: '* not a list item *' }]);
  });

  it('does not span a paragraph when only one marker is closed', () => {
    const text = 'one *two three four';
    expect(parseInline(text)).toEqual([{ text }]);
  });

  it('never emits a segment carrying both a link and emphasis', () => {
    // Emphasis inside a label would need several segments sharing one href, which would render
    // as several adjacent links. The label is left alone, and the corpus guard rejects the
    // asterisk that survives.
    const segments = parseInline('[an *emphasised* label](/courts)');
    expect(segments).toEqual([{ text: 'an *emphasised* label', href: '/courts' }]);
    expect(segments.every((segment) => !(segment.href && segment.emphasis))).toBe(true);
  });

  it('resolves emphasis on both sides of a link', () => {
    expect(parseInline('*a* [b](/courts) **c**')).toEqual([
      { text: 'a', emphasis: 'em' },
      { text: ' ' },
      { text: 'b', href: '/courts' },
      { text: ' ' },
      { text: 'c', emphasis: 'strong' },
    ]);
  });

  it('loses no characters, whatever the markers', () => {
    const cases = [
      'plain',
      '*a* b **c** d',
      'a 3 * 4 grid',
      '[x](/courts) *y*',
      'one *two three four',
      '**a** *b* **c**',
    ];
    for (const text of cases) {
      const rebuilt = parseInline(text)
        .map((segment) =>
          segment.emphasis === 'strong'
            ? `**${segment.text}**`
            : segment.emphasis === 'em'
              ? `*${segment.text}*`
              : segment.text,
        )
        .join('');
      // Link labels are rebuilt without their marker, so compare only the emphasis cases.
      if (!text.includes('](')) expect(rebuilt).toBe(text);
    }
  });
});
