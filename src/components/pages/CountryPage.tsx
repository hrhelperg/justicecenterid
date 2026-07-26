import Link from 'next/link';
import { BlockRenderer } from '@/components/content/BlockRenderer';
import { ReviewMeta } from '@/components/content/ReviewMeta';
import { SourceList } from '@/components/content/SourceList';
import { JsonLd } from '@/components/seo/JsonLd';
import { Badge } from '@/components/ui/Badge';
import { Callout } from '@/components/ui/Callout';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/ui/PageIntro';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { COUNTRY_MODULES } from '@/content/country-modules';
import {
  deferredModules,
  publishedModuleDefinitions,
  publishedModules,
} from '@/content/dossiers';
import { getGuide } from '@/content/guides';
import { getJurisdiction } from '@/content/jurisdictions';
import type { CountryDossier, CountryModuleContent } from '@/content/types';
import { formatDate } from '@/lib/content';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import {
  breadcrumbSchema,
  collectionPageSchema,
  jsonLdGraph,
  webPageSchema,
} from '@/lib/jsonld';

/**
 * Shared presentation for country pages.
 *
 * Design constraints, all deliberate: no flag, no map, no seal, no crest, no tricolour
 * decoration, and no statistics cards. A country page on this platform must read as an
 * independent reference explaining a state's institutions, never as something published by
 * that state. The only country "identity" is its name in a heading.
 */

/*
 * The country name is a PROP, not a literal.
 *
 * This notice hardcoded "a French public body" from the France pilot, so every Germany page
 * shipped claiming independence from the wrong state. No test caught it — they checked that a
 * disclosure was present, not what it said. A disclosure that names the wrong country is worse
 * than none, because it reads as carelessness on exactly the point where the platform asks to
 * be trusted.
 */
/**
 * How to say "not a <country> public body" for a given dossier. Derived from the dossier so a
 * new country cannot inherit the previous one's demonym.
 */
const DEMONYMS: Record<string, string> = {
  FR: 'a French public body',
  DE: 'a German public body',
  US: 'a United States government body',
  IE: 'an Irish government body',
  JP: 'a Japanese government body',
  BR: 'a Brazilian government body',
};

function independentOfDemonym(dossier: CountryDossier): string {
  // The fallback keeps a grammatical article rather than "a public body of United States".
  return DEMONYMS[dossier.countryCode] ?? `a government body of ${dossier.name}`;
}

function IndependenceNotice({ demonym }: { demonym: string }) {
  return (
    <Callout variant="note" title="An independent explanation, not an official one">
      JusticeCenterID is an independent educational publisher. It is not {demonym} and has no
      connection to any institution described on this page. These pages explain general
      institutional structure and are not legal advice; for a specific legal matter, consult a
      qualified professional in the relevant jurisdiction or the responsible official authority.
    </Callout>
  );
}

function ModuleNav({
  dossier,
  currentModuleSlug,
}: {
  dossier: CountryDossier;
  currentModuleSlug?: string;
}) {
  const definitions = publishedModuleDefinitions(dossier);
  if (definitions.length === 0) return null;

  return (
    <nav aria-label={`${dossier.name} sections`} className="mt-10">
      <SectionHeading id="modules">Sections</SectionHeading>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {definitions.map((definition) => {
          const active = definition.slug === currentModuleSlug;
          return (
            <li key={definition.id}>
              <Link
                href={`/countries/${dossier.slug}/${definition.slug}`}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-11 flex-col justify-center rounded-md border p-4 ${
                  active
                    ? 'border-accent bg-accent-soft'
                    : 'border-line hover:border-line-strong hover:bg-surface-raised'
                }`}
              >
                <span className="font-medium text-ink">{definition.shortTitle}</span>
                <span className="mt-1 text-sm text-ink-muted">{definition.purpose}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function NotResearched({ dossier }: { dossier: CountryDossier }) {
  const deferred = deferredModules(dossier);
  if (deferred.length === 0) return null;

  return (
    <section className="mt-14">
      <SectionHeading id="not-researched">What has not been researched</SectionHeading>
      <p className="mt-3 max-w-measure text-ink-muted">
        These areas have no page. That is a statement about our research, not about{' '}
        {dossier.articleName ?? dossier.name}: each of these institutions exists, and we have
        simply not established enough from primary sources to write about it responsibly.
      </p>
      <dl className="mt-6 max-w-measure divide-y divide-line border-y border-line">
        {deferred.map((content) => {
          const definition = COUNTRY_MODULES.find((d) => d.id === content.moduleId);
          return (
            <div key={content.moduleId} className="py-5">
              <dt className="flex flex-wrap items-center gap-3">
                <span className="font-medium text-ink">
                  {definition?.title ?? content.moduleId}
                </span>
                <Badge tone="neutral">Not researched</Badge>
              </dt>
              <dd className="mt-2 text-sm text-ink-muted">{content.deferredReason}</dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

function RelatedGuides({ slugs }: { slugs?: string[] }) {
  if (!slugs || slugs.length === 0) return null;
  const guides = slugs.map((slug) => getGuide(slug)).filter((g) => g !== undefined);
  if (guides.length === 0) return null;

  return (
    <section className="mt-12">
      <SectionHeading id="related">The same idea, explained generally</SectionHeading>
      <ul className="mt-4 max-w-measure space-y-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/${guide.section}/${guide.slug}`} className="link-inline font-medium">
              {guide.title}
            </Link>
            <p className="mt-1 text-sm text-ink-muted">{guide.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Uncertainty({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-10 max-w-measure">
      <Callout variant="uncertainty" title="What we could not establish">
        <ul className="mt-2 list-disc space-y-2 pl-5">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Callout>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Country hub                                                                */
/* -------------------------------------------------------------------------- */

export function CountryHub({ dossier }: { dossier: CountryDossier }) {
  const path = `/countries/${dossier.slug}`;
  // Grammatical form for "...in X" contexts; some country names take a definite article.
  const inName = dossier.articleName ?? dossier.name;
  const modules = publishedModules(dossier);
  const jurisdictions = dossier.jurisdictionIds
    .map((id) => getJurisdiction(id))
    .filter((j) => j !== undefined);

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          collectionPageSchema({
            path,
            title: `Justice and public safety in ${inName}`,
            description: dossier.summary,
            parts: modules.map((content) => {
              const definition = COUNTRY_MODULES.find((d) => d.id === content.moduleId);
              return {
                path: `${path}/${definition?.slug ?? content.moduleId}`,
                title: content.title,
                description: content.summary,
              };
            }),
          }),
          breadcrumbSchema(buildBreadcrumbs(path)),
        ])}
      />
      <PageIntro
        width="wide"
        path={path}
        eyebrow="Country"
        title={`Justice and public safety in ${inName}`}
        lead={dossier.summary}
        meta={
          <ReviewMeta
            review={dossier.review}
            updatedOn={dossier.updatedOn}
            reviewedOn={dossier.reviewedOn}
            safetyReview={dossier.safetyReview}
          />
        }
      />
      <Container width="wide">
        <div className="mt-8 max-w-measure">
          <IndependenceNotice demonym={independentOfDemonym(dossier)} />
        </div>

        {dossier.factsVerifiedOn && (
          <p className="mt-6 max-w-measure text-sm text-ink-subtle">
            Institutional facts on these pages were checked against their sources on{' '}
            <time dateTime={dossier.factsVerifiedOn}>
              {formatDate(dossier.factsVerifiedOn)}
            </time>
            . Where a cited provision carries a scheduled change, the page states the date.
          </p>
        )}

        <div className="mt-10 max-w-measure">
          <BlockRenderer blocks={dossier.blocks} />
        </div>

        <ModuleNav dossier={dossier} />

        <section className="mt-14">
          <SectionHeading id="jurisdictions">Jurisdictions modelled</SectionHeading>
          <p className="mt-3 max-w-measure text-ink-muted">
            A territory can exist administratively without being a separate legal jurisdiction.
            This table records, for each modelled tier and territory, whether it has its own
            arrangement for a function, whether the function is organised nationally, or whether
            we have simply not researched it.
          </p>
          {/*
            A scrollable region must be reachable by keyboard (WCAG 2.2 SC 2.1.1). When the
            table is wider than the viewport this container scrolls, and without tabIndex a
            keyboard user cannot reach the columns that are off-screen. role="region" plus a
            label means it is also announced rather than being an anonymous scroll box.
            WCAG 1.4.10 explicitly permits two-dimensional scrolling for data tables, so the
            table keeps its minimum width instead of collapsing into unreadable columns.
          */}
          <div
            className="mt-6 overflow-x-auto"
            tabIndex={0}
            role="region"
            aria-label={`Functional scope of each modelled ${dossier.name} jurisdiction`}
          >
            <table className="w-full min-w-[46rem] border-collapse text-sm">
              <caption className="sr-only">
                Functional scope of each modelled French jurisdiction
              </caption>
              <thead>
                <tr className="border-b border-line-strong text-left">
                  <th scope="col" className="py-2 pr-4 font-semibold text-ink">
                    Jurisdiction
                  </th>
                  <th scope="col" className="py-2 pr-4 font-semibold text-ink">
                    Level
                  </th>
                  <th scope="col" className="py-2 pr-4 font-semibold text-ink">
                    Courts
                  </th>
                  <th scope="col" className="py-2 pr-4 font-semibold text-ink">
                    Prosecution
                  </th>
                  <th scope="col" className="py-2 font-semibold text-ink">
                    Policing
                  </th>
                </tr>
              </thead>
              <tbody>
                {jurisdictions.map((jurisdiction) => (
                  <tr key={jurisdiction.id} className="border-b border-line align-top">
                    <th scope="row" className="py-3 pr-4 text-left font-medium text-ink">
                      {jurisdiction.name}
                    </th>
                    <td className="py-3 pr-4 text-ink-muted">{jurisdiction.level}</td>
                    <td className="py-3 pr-4 text-ink-muted">{jurisdiction.courtScope}</td>
                    <td className="py-3 pr-4 text-ink-muted">
                      {jurisdiction.prosecutionScope}
                    </td>
                    <td className="py-3 text-ink-muted">{jurisdiction.policingScope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-measure text-sm text-ink-subtle">
            <strong className="font-medium text-ink">unknown</strong> means not researched. It
            is never a synonym for <strong className="font-medium text-ink">none</strong>: an
            unresearched territory does not inherit the metropolitan arrangement.
          </p>
        </section>

        <NotResearched dossier={dossier} />
        <Uncertainty items={dossier.uncertainty} />

        <section className="mt-14 max-w-measure">
          <SectionHeading id="sources">Sources</SectionHeading>
          <SourceList ids={dossier.sources} />
        </section>
      </Container>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Country module                                                             */
/* -------------------------------------------------------------------------- */

export function CountryModulePage({
  dossier,
  content,
  moduleSlug,
}: {
  dossier: CountryDossier;
  content: CountryModuleContent;
  moduleSlug: string;
}) {
  const path = `/countries/${dossier.slug}/${moduleSlug}`;

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          webPageSchema({
            path,
            title: content.title,
            description: content.summary,
            type: 'WebPage',
          }),
          breadcrumbSchema(buildBreadcrumbs(path)),
        ])}
      />
      <PageIntro
        width="measure"
        path={path}
        eyebrow={dossier.name}
        title={content.title}
        lead={content.summary}
        meta={
          <ReviewMeta
            review={content.review}
            updatedOn={content.updatedOn}
            reviewedOn={content.reviewedOn}
            safetyReview={content.safetyReview}
          />
        }
      />
      <Container width="measure">
        <div className="mt-8">
          <IndependenceNotice demonym={independentOfDemonym(dossier)} />
        </div>

        {content.factsVerifiedOn && (
          <p className="mt-6 text-sm text-ink-subtle">
            Facts on this page were checked against their sources on{' '}
            <time dateTime={content.factsVerifiedOn}>
              {formatDate(content.factsVerifiedOn)}
            </time>
            .
          </p>
        )}

        <div className="mt-10">
          <BlockRenderer blocks={content.blocks} />
        </div>

        <Uncertainty items={content.uncertainty} />
        <RelatedGuides slugs={content.relatedGuides} />

        <section className="mt-12">
          <SectionHeading id="sources">Sources</SectionHeading>
          <SourceList ids={content.sources} />
        </section>

        <ModuleNav dossier={dossier} currentModuleSlug={moduleSlug} />
      </Container>
    </>
  );
}
