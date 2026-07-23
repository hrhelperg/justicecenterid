import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getGuide, guidePath } from '@/content/guides';

/**
 * Cross-links are authored and validated, never auto-generated. Link text is the topic's
 * own question, so it is descriptive and unique in context.
 */
export function RelatedTopics({ slugs }: { slugs: readonly string[] }) {
  const guides = slugs.map((slug) => getGuide(slug)).filter((guide) => guide !== undefined);
  if (guides.length === 0) return null;

  return (
    <section aria-labelledby="related" className="mt-14 border-t border-line pt-8">
      <SectionHeading id="related">Related topics</SectionHeading>
      <ul className="space-y-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={guidePath(guide)} className="link-inline font-medium">
              {guide.question}
            </Link>
            <p className="mt-1 text-sm text-ink-muted">{guide.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
