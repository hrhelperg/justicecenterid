import Link from 'next/link';
import type { ReactNode } from 'react';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ReviewMeta } from '@/components/content/ReviewMeta';
import { SourceList } from '@/components/content/SourceList';
import { ContentPage } from './ContentPage';
import { getDossier } from '@/content/dossiers';
import { getInstitutionType, institutionPath } from '@/content/institutions';
import { getProfession, professionPath } from '@/content/professions';
import type { CountryExample, InstitutionType, Profession } from '@/content/types';

/**
 * The shared template for the two Wave 2 reference families: institution types and
 * professions.
 *
 * DESIGN INTENT. These pages must read as part of the same knowledge system as a country
 * dossier, not as a new kind of object. So: long-form prose in a single column, ordinary
 * headings, no cards, no tiles, no statistic call-outs. The only visually distinct blocks
 * are the ones that carry an editorial obligation — scope, uncertainty, review state and
 * sources — because those are the parts a reader must not be able to skim past.
 *
 * The country examples are the load-bearing section and the reason these pages exist. A
 * global page describes a recurring PATTERN; the examples are where it is anchored to
 * systems the platform has actually researched, each linking to the dossier that carries
 * the detail. Following one is the whole point of the knowledge graph.
 */

/* -------------------------------------------------------------------------- */
/* Shared pieces                                                              */
/* -------------------------------------------------------------------------- */

function Prose({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-10 first:mt-0">
      <SectionHeading id={id}>{heading}</SectionHeading>
      <div className="max-w-measure text-ink-muted">{children}</div>
    </section>
  );
}

function Bullets({ id, heading, items }: { id: string; heading: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby={id} className="mt-10">
      <SectionHeading id={id}>{heading}</SectionHeading>
      <ul className="max-w-measure list-disc space-y-2 pl-6 text-ink-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Country examples, each linking to the dossier it draws on.
 *
 * An example whose dossier is not published renders nothing rather than a dead link. The
 * publication gate already rejects that case, so this is a second line of defence rather
 * than the primary one.
 */
function CountryExamples({ examples }: { examples: CountryExample[] }) {
  const resolved = examples
    .map((example) => ({ example, dossier: getDossier(example.countrySlug) }))
    .filter((entry) => entry.dossier !== undefined);

  if (resolved.length === 0) return null;

  return (
    <section aria-labelledby="examples" className="mt-10">
      <SectionHeading
        id="examples"
        description="Systems this platform has researched. Each example shows how one country actually arranges this — including where it departs from the general pattern."
      >
        Worked examples
      </SectionHeading>
      <dl className="max-w-measure space-y-5">
        {resolved.map(({ example, dossier }) => (
          <div key={example.countrySlug}>
            <dt className="font-semibold text-ink">
              <Link href={`/countries/${example.countrySlug}`} className="link-inline">
                {dossier!.name}
              </Link>
            </dt>
            <dd className="mt-1 text-ink-muted">{example.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/**
 * Contextual onward links.
 *
 * Deliberately small and specific rather than a "Related pages" block repeated sitewide:
 * only the roles that work inside this institution, or the institutions this role works
 * within, and only where the target is actually routed.
 */
function Connections({
  institutions = [],
  professions = [],
}: {
  institutions?: string[];
  professions?: string[];
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

function Uncertainty({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-10 max-w-measure">
      <Callout variant="uncertainty" title="What this page does not establish">
        <ul className="list-disc space-y-2 pl-6">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Callout>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Institution type                                                           */
/* -------------------------------------------------------------------------- */

export function InstitutionTypePage({ institution }: { institution: InstitutionType }) {
  const path = institutionPath(institution);

  return (
    <ContentPage
      path={path}
      eyebrow="Institution type"
      title={institution.title}
      lead={institution.summary}
      description={institution.summary}
      width="measure"
      meta={
        <ReviewMeta
          review={institution.review}
          updatedOn={institution.updatedOn}
          reviewedOn={institution.reviewedOn}
        />
      }
    >
      <div className="max-w-measure">
        <Callout variant="scope" title="A type, not an organisation">
          This page describes a recurring kind of institution, not any named agency. Bodies
          bearing the same name in different countries frequently differ in powers, command and
          oversight — where this platform has researched a specific system, the worked examples
          below link to it.
        </Callout>
      </div>

      {institution.purpose ? (
        <Prose id="purpose" heading="Why this kind of body exists">
          <p>{institution.purpose}</p>
        </Prose>
      ) : null}

      <Bullets
        id="distinguishing"
        heading="What distinguishes it"
        items={[...institution.distinguishingFeatures]}
      />
      <Bullets id="mandate" heading="Typical mandate" items={[...institution.typicalMandate]} />

      {institution.governanceNote ? (
        <Prose id="governance" heading="How authority reaches it">
          <p>{institution.governanceNote}</p>
        </Prose>
      ) : null}

      <Bullets
        id="confusions"
        heading="Commonly confused with"
        items={[...institution.commonConfusions]}
      />

      <Prose id="presence" heading="Where it exists">
        <p>{institution.presenceNote}</p>
      </Prose>

      {institution.historyNote ? (
        <Prose id="history" heading="Historical background">
          <p>{institution.historyNote}</p>
        </Prose>
      ) : null}

      {institution.accountabilityNote ? (
        <Prose id="accountability" heading="What examines it">
          <p>{institution.accountabilityNote}</p>
        </Prose>
      ) : null}

      <CountryExamples examples={[...(institution.countryExamples ?? [])]} />
      <Connections
        institutions={institution.relatedInstitutions}
        professions={institution.relatedProfessions}
      />
      <Uncertainty items={institution.uncertainty} />
      <SourceList ids={institution.sources} />
    </ContentPage>
  );
}

/* -------------------------------------------------------------------------- */
/* Profession                                                                 */
/* -------------------------------------------------------------------------- */

export function ProfessionPage({ profession }: { profession: Profession }) {
  const path = professionPath(profession);

  return (
    <ContentPage
      path={path}
      eyebrow="Profession"
      title={profession.title}
      lead={profession.summary}
      description={profession.summary}
      width="measure"
      meta={
        <ReviewMeta
          review={profession.review}
          updatedOn={profession.updatedOn}
          reviewedOn={profession.reviewedOn}
        />
      }
    >
      <div className="max-w-measure">
        <Callout variant="scope" title="No pay, staffing or entry requirements">
          This page carries no salary figures, staffing levels, attrition rates or entry
          requirements. Those are country-specific and time-sensitive, and they are the most
          common site of invented detail in writing about these roles. Where this platform
          publishes them they sit on a country page, with a jurisdiction and a dated official
          source, or they do not appear at all.
        </Callout>
      </div>

      {profession.purpose ? (
        <Prose id="purpose" heading="Why the role exists">
          <p>{profession.purpose}</p>
        </Prose>
      ) : null}

      {profession.institutionalContext ? (
        <Prose id="context" heading="Where the role sits">
          <p>{profession.institutionalContext}</p>
        </Prose>
      ) : null}

      <Bullets
        id="responsibilities"
        heading="Responsibilities"
        items={[...profession.responsibilities]}
      />
      <Bullets
        id="authority"
        heading="What the role decides"
        items={[...profession.decisionAuthority]}
      />
      <Bullets
        id="constraints"
        heading="What constrains it"
        items={[...profession.constraints]}
      />

      {profession.ethicsNote ? (
        <Prose id="ethics" heading="Professional standards">
          <p>{profession.ethicsNote}</p>
        </Prose>
      ) : null}

      <Bullets id="oversight" heading="Who reviews it" items={[...profession.oversight]} />
      <Bullets
        id="training"
        heading="Shape of the training route"
        items={[...profession.trainingRouteShape]}
      />

      {profession.commonMisunderstandings && profession.commonMisunderstandings.length > 0 ? (
        <Bullets
          id="misunderstandings"
          heading="Commonly misunderstood"
          items={[...profession.commonMisunderstandings]}
        />
      ) : null}

      <Prose id="jurisdiction" heading="How much this varies">
        <p>{profession.jurisdictionNote}</p>
      </Prose>

      <CountryExamples examples={[...(profession.countryExamples ?? [])]} />
      <Connections
        institutions={profession.relatedInstitutions}
        professions={profession.relatedProfessions}
      />
      <Uncertainty items={profession.uncertainty} />
      <SourceList ids={profession.sources} />
    </ContentPage>
  );
}
