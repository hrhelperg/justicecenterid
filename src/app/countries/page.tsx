import type { Metadata } from 'next';
import Link from 'next/link';
import { CoverageNotice } from '@/components/content/CoverageNotice';
import { ContentPage } from '@/components/pages/ContentPage';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  COUNTRY_MODULES,
  PRESENCE_STATE_DESCRIPTIONS,
  PRESENCE_STATE_LABELS,
  countriesByRegion,
} from '@/content/countries';
import { PRESENCE_STATES } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/countries';
const DESCRIPTION =
  'How JusticeCenterID models national justice systems, and the current coverage status. No country has been researched yet, and this page says so rather than implying otherwise.';

export const metadata: Metadata = buildMetadata({
  title: 'Countries',
  description: DESCRIPTION,
  path: PATH,
});

export default function CountriesPage() {
  const regions = countriesByRegion();

  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Countries"
      lead={DESCRIPTION}
      description={DESCRIPTION}
    >
      <CoverageNotice title="No country has been researched yet">
        <p>
          This page publishes the country <em>model</em> and the current coverage status — not
          knowledge we do not have. Every country below is at coverage status{' '}
          <strong>planned</strong>, which means it is in the research queue and nothing has been
          written about it.
        </p>
        <p>
          A country page appears when its modules have been researched and sourced to primary
          material. Generating a page for every country by template would produce a few thousand
          URLs and no knowledge, which is the failure mode this architecture exists to prevent.
        </p>
      </CoverageNotice>

      <section aria-labelledby="model" className="mt-14">
        <SectionHeading
          id="model"
          description="Country coverage is built from fixed modules, so the same question can be compared across countries without the comparison being an assumption."
        >
          How a country is modelled
        </SectionHeading>
        <div className="max-w-measure">
          <p className="text-ink-muted">
            Each country hub will be assembled from the modules below. A module exists only
            where it has been researched: a country with sourced material on its courts and
            nothing on its corrections system will have a courts module and no corrections
            module. Absence is visible rather than filled with a stub.
          </p>
        </div>
        <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {COUNTRY_MODULES.map((module) => (
            <li key={module.id}>
              <h3 className="font-semibold text-ink">{module.title}</h3>
              <p className="text-sm text-ink-muted">{module.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="presence" className="mt-14">
        <SectionHeading
          id="presence"
          description="Not every country has sheriffs. Not every country has a gendarmerie. The same institutional name can denote a materially different role."
        >
          Recording what is not there
        </SectionHeading>
        <div className="max-w-measure">
          <p className="text-ink-muted">
            For each institution type, a country record can carry one of five states. This is
            the part of the model that makes honest comparison possible, because a blank cell
            and a researched &ldquo;this does not exist here&rdquo; are completely different
            claims.
          </p>
        </div>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {PRESENCE_STATES.map((state) => (
            <div
              key={state}
              className="grid gap-2 py-4 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-6"
            >
              <dt>
                <span className="font-semibold text-ink">{PRESENCE_STATE_LABELS[state]}</span>
              </dt>
              <dd className="text-ink-muted">{PRESENCE_STATE_DESCRIPTIONS[state]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="difficulties" className="mt-14">
        <SectionHeading id="difficulties">What makes country coverage difficult</SectionHeading>
        <ul className="max-w-measure list-disc space-y-2 pl-6 text-ink-muted">
          <li>
            National, federal, regional, and municipal structures divide responsibility
            differently, so &ldquo;who polices this street&rdquo; has a different kind of answer
            in each country.
          </li>
          <li>
            Institutional names transfer between countries while the roles do not. Equivalence
            is a claim requiring a source, never an assumption.
          </li>
          <li>
            Historical structures must never be presented as current ones, and continuity across
            a name change, a merger, or a change of political system is itself a claim.
          </li>
          <li>
            Disputed and transitional jurisdictions require careful, attributed treatment. Where
            we cannot describe one neutrally and accurately, we will not cover it.
          </li>
          <li>
            Official sources are often available only in the national language, and translating
            an institutional term is an interpretive act rather than a lookup.
          </li>
        </ul>
      </section>

      <section aria-labelledby="queue" className="mt-14">
        <SectionHeading
          id="queue"
          description="The research queue, chosen for diversity of legal tradition and institutional structure rather than for size or search demand."
        >
          Coverage status
        </SectionHeading>
        <div className="space-y-8">
          {regions.map((region) => (
            <div key={region.region}>
              <h3 className="text-lg font-semibold text-ink">{region.region}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {region.countries.map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center justify-between gap-3 rounded-sm border border-line bg-surface px-3 py-2"
                  >
                    <span className="text-ink">{country.name}</span>
                    <Badge tone="neutral">Planned</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-measure text-ink-muted">
          Legal-system family and institution presence are deliberately not recorded above.
          Classifying a country&rsquo;s legal tradition is a research output requiring sources,
          not an input we can supply from general impression. See our{' '}
          <Link href="/methodology" className="link-inline">
            research methodology
          </Link>
          .
        </p>
      </section>
    </ContentPage>
  );
}
