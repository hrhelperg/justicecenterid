import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ROUTED_PROFESSIONS, professionPath } from '@/content/professions';
import { SECTIONS } from '@/content/sections';
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
 * Roles grouped by the part of the system they work in, in the corpus's own section order so the
 * hub and the navigation agree. Computed at module scope because it is derived from static
 * content and never changes at runtime.
 */
const GROUPED = SECTIONS.map((section) => ({
  section,
  roles: ROUTED_PROFESSIONS.filter((p) => p.section === section.id),
})).filter((group) => group.roles.length > 0);

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

      {/*
       * WAVE 24. Grouped by the part of the system the role works in, rather than listed flat.
       *
       * A flat list of eight roles reads as eight unrelated jobs. Grouped, it shows the shape of
       * the field — that a case passes through investigation, prosecution, courts, defence and
       * corrections, and that each stage employs different professions. That is the first thing
       * someone exploring these careers needs to see, and it is information the corpus already
       * held without ever showing it.
       *
       * Each role also shows the reader's own question, which is what a person scanning for a
       * career actually reads. Still a static server component: no client JS, no new dependency.
       */}
      <div className="mt-12">
        <SectionHeading id="roles">Roles</SectionHeading>
        {GROUPED.map(({ section, roles }) => (
          <section key={section.id} className="mt-8 first:mt-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {section.shortTitle}
            </h3>
            <dl className="mt-3 max-w-measure space-y-5">
              {roles.map((profession) => (
                <div key={profession.slug}>
                  <dt className="text-lg font-semibold">
                    <Link href={professionPath(profession)} className="link-inline">
                      {profession.title}
                    </Link>
                  </dt>
                  {profession.question ? (
                    <dd className="mt-1 text-sm text-ink-muted italic">
                      {profession.question}
                    </dd>
                  ) : null}
                  <dd className="mt-1 text-ink-muted">{profession.summary}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
