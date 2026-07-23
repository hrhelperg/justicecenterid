import Link from 'next/link';
import { Fragment } from 'react';
import { Callout } from '@/components/ui/Callout';
import { DefinitionList } from '@/components/ui/DefinitionList';
import { parseInline } from '@/lib/content';
import type { Block, ClaimType } from '@/content/types';

const CLAIM_LABELS: Partial<Record<ClaimType, string>> = {
  analysis: 'Analysis',
  'attributed-opinion': 'Attributed opinion',
  uncertain: 'Uncertain',
  disputed: 'Disputed',
};

/** Resolves `[text](/route)` markers written in content into real links. */
function InlineText({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((segment, index) => (
        <Fragment key={index}>
          {segment.href ? (
            <Link href={segment.href} className="link-inline">
              {segment.text}
            </Link>
          ) : (
            segment.text
          )}
        </Fragment>
      ))}
    </>
  );
}

function BlockItem({ block }: { block: Block }) {
  switch (block.kind) {
    case 'paragraph': {
      const label = block.claim ? CLAIM_LABELS[block.claim] : undefined;
      return (
        <p className="mb-[1.15em] last:mb-0">
          {label && (
            <span className="mr-2 inline-flex items-center rounded-sm border border-line-strong bg-surface-sunken px-1.5 py-0.5 align-baseline text-xs font-medium text-ink-muted">
              {label}
            </span>
          )}
          <InlineText text={block.text} />
        </p>
      );
    }
    case 'list':
      return block.ordered ? (
        <ol className="my-5 list-decimal space-y-2 pl-6 text-ink">
          {block.items.map((item) => (
            <li key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </ol>
      ) : (
        <ul className="my-5 list-disc space-y-2 pl-6 text-ink">
          {block.items.map((item) => (
            <li key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case 'definitionList':
      return <DefinitionList items={block.items} />;
    case 'callout':
      return (
        <Callout variant={block.variant} title={block.title}>
          <InlineText text={block.text} />
        </Callout>
      );
  }
}

export function BlockRenderer({ blocks }: { blocks: readonly Block[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockItem key={index} block={block} />
      ))}
    </>
  );
}
