import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getInstitutionType, institutionPath } from '@/content/institutions';
import { getProfession, professionPath } from '@/content/professions';
import type { InstitutionType, Profession } from '@/content/types';

/**
 * The typed institution and profession links an entity declares.
 *
 * Extracted from ReferencePage by Wave 15's link-graph audit, which found that `Guide` carries
 * `relatedInstitutions` on 58 records — validated, cross-checked, and never rendered. The field
 * was dead data on every guide: readers could not follow it and crawlers could not see it, and
 * three institution pages were reachable only from the institutions index as a direct result.
 *
 * Institution and profession pages already rendered it. Guides now use the same component, so
 * the two cannot drift apart again.
 */
export function Connections({
  institutions = [],
  professions = [],
}: {
  institutions?: readonly string[];
  professions?: readonly string[];
}) {
  const inst = institutions.map(getInstitutionType).filter(Boolean) as InstitutionType[];
  const prof = professions.map(getProfession).filter(Boolean) as Profession[];
  if (inst.length === 0 && prof.length === 0) return null;

  return (
    <section aria-labelledby="connections" className="mt-10">
      <SectionHeading id="connections">Where this connects</SectionHeading>
      <div className="max-w-measure space-y-3 text-ink-muted">
        {prof.length > 0 ? (
          <p>
            Roles:{' '}
            {prof.map((p, i) => (
              <span key={p.slug}>
                {i > 0 ? ', ' : ''}
                <Link href={professionPath(p)} className="link-inline">
                  {p.shortTitle ?? p.title}
                </Link>
              </span>
            ))}
            .
          </p>
        ) : null}
        {inst.length > 0 ? (
          <p>
            Institutions:{' '}
            {inst.map((institution, i) => (
              <span key={institution.slug}>
                {i > 0 ? ', ' : ''}
                <Link href={institutionPath(institution)} className="link-inline">
                  {institution.shortTitle ?? institution.title}
                </Link>
              </span>
            ))}
            .
          </p>
        ) : null}
      </div>
    </section>
  );
}
