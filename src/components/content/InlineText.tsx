import Link from 'next/link';
import { Fragment } from 'react';
import { ScriptText } from '@/components/content/ScriptText';
import { parseInline } from '@/lib/content';

/**
 * Resolves `[text](/route)` link markers and `**strong**` / `*em*` emphasis markers written in
 * content into real elements. A segment never carries both — emphasis is not parsed inside a
 * link label — so the two cases are exclusive.
 *
 * Internal paths only: `parseInline` matches `](/…)` and nothing else, so an external URL written
 * into content renders as literal text rather than as a link. That is deliberate, and it means the
 * rule is enforced by the renderer rather than by review.
 *
 * WAVE 24 moved this out of BlockRenderer, where it had lived since guides needed it. Two other
 * surfaces were rendering content text without it and shipping literal `[text](/path)` syntax to
 * readers: `DefinitionList`, on four pages that predate Wave 24, and the reference-record bullets,
 * on eight profession pages after Wave 24 added cross-references to them. One implementation now
 * serves all three, so a surface cannot silently miss it again.
 */
export function InlineText({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((segment, index) => {
        const content = <ScriptText text={segment.text} />;
        return (
          <Fragment key={index}>
            {segment.href ? (
              <Link href={segment.href} className="link-inline">
                {content}
              </Link>
            ) : segment.emphasis === 'strong' ? (
              <strong className="font-semibold">{content}</strong>
            ) : segment.emphasis === 'em' ? (
              <em>{content}</em>
            ) : (
              content
            )}
          </Fragment>
        );
      })}
    </>
  );
}
