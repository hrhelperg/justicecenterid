import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ROUTED_PROFESSIONS, professionPath } from '@/content/professions';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/professions';
const DESCRIPTION =
  'Roles across justice and public safety: what each is responsible for, what it can decide, what constrains that authority, and who reviews it.';

export const metadata: Metadata = buildMetadata({
  title: 'Professions',
  description: DESCRIPTION,
  path: PATH,
});

/**
 * An index, for the same reason as the institutions hub: the detail now lives on the
 * per-role pages, and repeating it here would make the hub compete with every one of them.
 */
export default function ProfessionsPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Professions"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      schemaType="CollectionPage"
    >
      <div className="max-w-measure">
        <p className="text-ink-muted">
          Public-service work in this field carries real responsibility, real constraint, and
          real pressure. It is also work that holds authority over other people, which is why
          every role below is described alongside the limits on that authority and the bodies
          that review it. Both belong in the same description.
        </p>
        <p className="mt-4 text-ink-muted">
          There are deliberately no pay figures, staffing levels, attrition rates, or entry
          requirements on these pages. Those are country-specific and time-sensitive, and they
          are the most common site of invented detail in writing about these roles. They will
          appear on{' '}
          <Link href="/countries" className="link-inline">
            country pages
          </Link>
          , with a jurisdiction and a dated official source, or not at all.
        </p>
      </div>

      <div className="mt-12">
        <SectionHeading id="roles">Roles</SectionHeading>
        <dl className="max-w-measure space-y-6">
          {ROUTED_PROFESSIONS.map((profession) => (
            <div key={profession.slug}>
              <dt className="text-lg font-semibold">
                <Link href={professionPath(profession)} className="link-inline">
                  {profession.title}
                </Link>
              </dt>
              <dd className="mt-1 text-ink-muted">{profession.summary}</dd>
            </div>
          ))}
        </dl>
      </div>
    </ContentPage>
  );
}
