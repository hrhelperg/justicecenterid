import type { Metadata } from 'next';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PUBLISHED_PROFESSIONS } from '@/content/professions';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/professions';
const DESCRIPTION =
  'Roles across justice and public safety: what each is responsible for, what it can decide, what constrains that authority, and who reviews it.';

export const metadata: Metadata = buildMetadata({
  title: 'Professions',
  description: DESCRIPTION,
  path: PATH,
});

export default function ProfessionsPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Professions"
      lead={DESCRIPTION}
      description={DESCRIPTION}
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
          requirements on this page. Those are country-specific and time-sensitive, and they are
          the most common site of invented detail in writing about these roles. They will appear
          on country pages, with a jurisdiction and a dated official source, or not at all.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {PUBLISHED_PROFESSIONS.map((profession) => (
          <section key={profession.slug} aria-labelledby={profession.slug}>
            <SectionHeading id={profession.slug} description={profession.summary}>
              {profession.title}
            </SectionHeading>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  Responsibilities
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {profession.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  What the role decides
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {profession.decisionAuthority.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  Training route (structure only)
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {profession.trainingRouteShape.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  Constraints on that authority
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {profession.constraints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  Who reviews the role
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {profession.oversight.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {profession.commonMisunderstandings && (
                  <>
                    <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink-muted uppercase">
                      Commonly misunderstood
                    </h4>
                    <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                      {profession.commonMisunderstandings.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <p className="mt-6 max-w-measure rounded-md border border-line bg-surface-raised p-4 text-sm text-ink-muted">
              <span className="font-semibold text-ink">Across jurisdictions: </span>
              {profession.jurisdictionNote}
            </p>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
