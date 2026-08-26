import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LIFECYCLE_LAYERS, LIFECYCLE_STAGES } from '@/content/lifecycle';
import { getRoute } from '@/lib/routes';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/justice-system';
const DESCRIPTION =
  'How a justice system works: the stages a case may pass through, the exits at every one of them, and the rights, review and oversight that constrain each institution. An educational map, not a universal procedure.';

export const metadata: Metadata = buildMetadata({
  title: 'How a Justice System Works',
  description: DESCRIPTION,
  path: PATH,
});

/**
 * Link text is the target page's own title, resolved from the route registry.
 *
 * Two reasons rather than one. It keeps anchor text honest — the link says what the page is
 * called — and it means a renamed page cannot leave a stale description behind on the most
 * heavily linking page on the site.
 */
function RouteLink({ path }: { path: string }) {
  const route = getRoute(path);
  return (
    <Link href={path} className="link-inline">
      {route?.title ?? path}
    </Link>
  );
}

function RouteList({ paths, label }: { paths: readonly string[]; label: string }) {
  return (
    <div className="mt-3">
      <p className="text-sm font-semibold text-ink">{label}</p>
      <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-muted">
        {paths.map((path) => (
          <li key={path}>
            <RouteLink path={path} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function JusticeSystemPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="How a justice system works"
      lead={DESCRIPTION}
      description={DESCRIPTION}
    >
      <div className="max-w-measure">
        <p className="text-lg text-ink-muted">
          A justice system is not one institution. It is several, each doing a different job,
          each able to act only where the law says it may, and each answerable to somebody other
          than itself. This page sets out the stages a case may pass through and what constrains
          the institutions at every one of them.
        </p>

        <Callout variant="scope" title="This is a map, not a procedure">
          No two countries run a justice system the same way, and this page describes none of
          them. It is a way of organising what the rest of this site explains — an educational
          model of stages a case <em>may</em> pass through, with the exits and the variation
          stated at each. It is not legal advice, it is not a procedural code, and it does not
          describe what would happen in any particular case anywhere.
        </Callout>

        <SectionHeading id="not-a-line">The first thing to unlearn</SectionHeading>
        <p className="mt-4 text-ink-muted">
          The familiar picture is a line: police, then a prosecutor, then a jury, then prison.
          Almost every part of it is wrong somewhere, and the rest of this site is the evidence.
          Juries do not exist in most systems. In several, the prosecutor is legally responsible
          for the investigation from the outset rather than receiving a finished file. Most
          sentences are not custodial. Most reported matters never reach a court at all.
        </p>
        <p className="mt-4 text-ink-muted">
          So the model below branches. Every stage carries the ways a case can leave it, because
          leaving is the normal outcome rather than the exception, and every stage carries a
          note on how systems differ, because they always do.
        </p>

        <SectionHeading id="separation">Why the jobs are kept apart</SectionHeading>
        <p className="mt-4 text-ink-muted">
          The separations below are the reason a justice system has as many institutions as it
          does. Each one exists so that no single body both creates a case and judges it.
        </p>
        <ul className="mt-4 space-y-3 text-ink-muted">
          <li>
            <strong className="text-ink">Police are not courts.</strong> Enforcement bodies
            exercise powers conferred by statute; they do not determine guilt, and the powers
            they hold are bounded precisely because they act before anything has been decided.
          </li>
          <li>
            <strong className="text-ink">Prosecutors are not judges.</strong> The body that
            decides a case should be brought is not the body that decides whether it is proved.
            In several systems the prosecution owes duties to the accused that follow from
            exactly that separation.
          </li>
          <li>
            <strong className="text-ink">Defence is not prosecution.</strong> The two are not
            mirror images. The prosecution acts in the public interest, which is not the same as
            acting to convict; the defence protects the accused person’s legal interests, which
            is not the same as securing an acquittal whatever the facts.
          </li>
          <li>
            <strong className="text-ink">Courts do not ordinarily investigate.</strong> Some
            systems give a judge an investigative role, and where they do it is a defined office
            rather than the ordinary work of a trial court. A court that gathered its own case
            would be reviewing its own work.
          </li>
          <li>
            <strong className="text-ink">
              Correctional authorities do not determine guilt.
            </strong>{' '}
            They carry out a decision a court has already made. That is why the same body must
            not make it.
          </li>
          <li>
            <strong className="text-ink">Oversight is not operational command.</strong> A body
            that inspects an institution does not run it and does not decide its cases.
            Confusing the two produces the expectation that an oversight body can overturn an
            outcome, which is not what it is for.
          </li>
          <li>
            <strong className="text-ink">Rights constrain every stage.</strong> They are not a
            benefit conferred at the end. Several of them operate hardest at the points furthest
            from a courtroom, which is where nobody is watching.
          </li>
        </ul>
      </div>

      <section aria-labelledby="stages" className="mt-14">
        <SectionHeading id="stages">The stages, and the ways out of them</SectionHeading>
        <p className="mt-4 max-w-measure text-ink-muted">
          Read the arrows as <em>may</em>. Nothing here asserts that a case moves from one stage
          to the next, only that the sequence is one a system may use.
        </p>
        <ol className="mt-8 space-y-10 border-l-2 border-line pl-6">
          {LIFECYCLE_STAGES.map((stage, index) => (
            <li key={stage.id} id={`stage-${stage.id}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[1.9rem] block h-3 w-3 rounded-full border-2 border-accent bg-surface"
              />
              <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                Stage {index + 1} · {stage.required ? 'Always present' : 'Not always present'}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink">{stage.title}</h3>
              <p className="mt-1 text-sm text-ink-subtle italic">{stage.question}</p>
              <p className="mt-2 max-w-measure text-ink-muted">{stage.summary}</p>

              <div className="mt-3 max-w-measure">
                <p className="text-sm font-semibold text-ink">Ways a case leaves here</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-ink-muted">
                  {stage.exits.map((exit) => (
                    <li key={exit}>{exit}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-3 max-w-measure text-sm text-ink-muted">
                <span className="font-semibold text-ink">How systems differ: </span>
                {stage.variation}
              </p>

              {stage.mayPrecede.length > 0 && (
                <p className="mt-3 text-sm text-ink-muted">
                  <span className="font-semibold text-ink">May be followed by: </span>
                  {stage.mayPrecede
                    .map((id) => LIFECYCLE_STAGES.find((s) => s.id === id)?.title ?? id)
                    .join(' · ')}
                </p>
              )}

              <RouteList paths={stage.explainedBy} label="Explained on this site" />
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="layers" className="mt-14">
        <SectionHeading id="layers">What applies across all of it</SectionHeading>
        <p className="mt-4 max-w-measure text-ink-muted">
          These are not stages. They constrain the institutions at whichever stage those
          institutions are acting, which is why modelling them as steps would teach the wrong
          thing.
        </p>
        <div className="mt-8 space-y-8">
          {LIFECYCLE_LAYERS.map((layer) => (
            <div key={layer.id} id={`layer-${layer.id}`}>
              <h3 className="text-xl font-semibold text-ink">{layer.title}</h3>
              <p className="mt-2 max-w-measure text-ink-muted">{layer.summary}</p>
              <p className="mt-2 text-sm text-ink-subtle">
                {layer.appliesTo === 'all'
                  ? 'Applies at every stage.'
                  : `Applies at: ${layer.appliesTo
                      .map((id) => LIFECYCLE_STAGES.find((s) => s.id === id)?.title ?? id)
                      .join(' · ')}.`}
              </p>
              <RouteList paths={layer.explainedBy} label="Explained on this site" />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14 max-w-measure">
        <SectionHeading id="what-it-is-for">What the whole thing is for</SectionHeading>
        <p className="mt-4 text-ink-muted">
          A justice system is frequently described as an apparatus for punishment. That
          describes one stage of one branch, and the rest of this site is the reason it is too
          narrow. Taken together, the arrangements above are how a society maintains lawful
          public order, establishes what happened when something is alleged, decides whether an
          allegation justifies bringing a case, lets that case be answered, resolves the
          question through a body that did not create it, corrects its own errors, enforces the
          outcome, and returns the person to ordinary life.
        </p>
        <p className="mt-4 text-ink-muted">
          None of that is a claim that any particular system does these things well. It is a
          description of what the institutions are for, which is the thing you need before you
          can judge whether they are doing it.
        </p>

        <Callout
          variant="analysis"
          title="Authority, legality, procedure, review, accountability"
        >
          Those five together are what makes an exercise of public power legitimate rather than
          merely effective. Each of the stages above is an exercise of public power, and each is
          bounded by all five. That is the structure this site describes — not a claim that
          authority is owed obedience, and not a claim that it is inherently suspect.
        </Callout>

        <p className="mt-6 text-ink-muted">
          Where to go next:{' '}
          <Link href="/justice/no-single-path-through-a-justice-system" className="link-inline">
            why there is no single path through a justice system
          </Link>
          ,{' '}
          <Link href="/justice/how-justice-institutions-work-together" className="link-inline">
            how the institutions hand work to one another
          </Link>
          , or{' '}
          <Link href="/countries" className="link-inline">
            the country pages
          </Link>{' '}
          for how specific systems are actually arranged.
        </p>
      </div>
    </ContentPage>
  );
}
