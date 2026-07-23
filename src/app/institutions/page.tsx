import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PUBLISHED_INSTITUTION_TYPES } from '@/content/institutions';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/institutions';
const DESCRIPTION =
  'Institution types across justice and public safety — what distinguishes each from the adjacent one, and where a familiar name means something materially different.';

export const metadata: Metadata = buildMetadata({
  title: 'Institutions',
  description: DESCRIPTION,
  path: PATH,
});

export default function InstitutionsPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Institutions"
      lead={DESCRIPTION}
      description={DESCRIPTION}
    >
      <div className="max-w-measure">
        <p className="text-ink-muted">
          These are institution <em>types</em>, not named agencies. A type page describes what
          distinguishes it from the bodies it is routinely confused with, and — the most useful
          field for a reader — where the type does and does not exist.
        </p>
        <p className="mt-4 text-ink-muted">
          Named institutions will be covered under their country, where a jurisdiction and dated
          official sources are mandatory. See{' '}
          <Link href="/countries" className="link-inline">
            the country model
          </Link>
          .
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {PUBLISHED_INSTITUTION_TYPES.map((institution) => (
          <section key={institution.slug} aria-labelledby={institution.slug}>
            <SectionHeading id={institution.slug} description={institution.summary}>
              {institution.title}
            </SectionHeading>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  What distinguishes it
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {institution.distinguishingFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  Typical mandate
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {institution.typicalMandate.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  Commonly confused with
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-ink-muted">
                  {institution.commonConfusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink-muted uppercase">
                  Where it exists
                </h4>
                <p className="mt-2 text-ink-muted">{institution.presenceNote}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
