import { RAIL_PRODUCTS } from '@/content/ecosystem';
import { Container } from '@/components/ui/Container';
import { EcosystemMenu } from './EcosystemMenu';
import { toView, type ProductView } from './product-view';

/**
 * The HELPERG ecosystem utility bar — "Variant 7", the ordered ecosystem timeline.
 *
 * A SERVER component. The identity, the rail and the current-product indicator are all
 * rendered to static HTML at build time; only the drawer's open/closed state is
 * client-side. The rail is deliberately the FEATURED subset, so the 29-record registry is
 * never written into 318 pages of HTML — the drawer imports it into the shared, cached
 * JavaScript chunk instead (see ./product-view for the payload arithmetic).
 *
 * DESIGN INTENT. This is a corporate utility layer, not a promotion. It is a single row of
 * quiet chrome: one type size, no colour beyond the existing tokens, no animation, no
 * auto-scrolling, no marquee, no dismissal. JusticeCenterID stays visually primary — the
 * bar sits above the masthead and is deliberately smaller, lighter and lower-contrast than
 * it. It must also never be mistaken for the consent banner, which is why the two differ
 * on every available axis: this one is top-anchored, non-modal, monochrome and permanent;
 * the consent UI is bottom-anchored, accent-bordered, and dismissible.
 *
 * TIMELINE, NOT DATES. No launch dates were supplied for any product, so the rail presents
 * ORDER and nothing else. Inventing dates to make a timeline look like a timeline is
 * exactly the fabrication the brief forbids.
 */
export function EcosystemBar() {
  const rail = RAIL_PRODUCTS.map(toView);

  return (
    <div className="border-b border-line bg-surface-raised">
      <Container width="shell">
        {/*
          `flex-wrap` rather than a fixed row: at 200% text size the bar must grow
          downwards instead of pushing the document into horizontal scroll. The rail
          itself is hidden below the `nav` breakpoint, so it can never overflow on mobile.
        */}
        <div className="flex min-h-9 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wide text-ink uppercase">
              HELPERG
            </span>
            <span aria-hidden="true" className="text-ink-subtle">
              ·
            </span>
            <span className="text-xs text-ink-muted">Ecosystem</span>
          </div>

          {/*
            The ordered rail. `hidden nav:block` keeps it off small screens entirely — the
            brief's "no horizontally overflowing timeline on mobile" is met by not
            rendering a rail there, rather than by letting one scroll sideways.

            `min-w-0` + `flex-wrap` handle the case that hiding cannot. A CSS media query
            resolves `rem` against the browser's INITIAL font size, not the root element's
            computed size, so the `nav:` breakpoint does not move when a reader sets 200%
            text (WCAG 2.2 SC 1.4.4): the rail stays rendered and, at double size, pushed
            the whole document into horizontal scroll by 51px. Wrapping lets the bar grow
            downwards instead — the same choice its outer row already makes — and keeps
            every node visible and focusable rather than clipping them out of reach.
          */}
          <nav aria-label="HELPERG ecosystem" className="hidden min-w-0 nav:block">
            <ol className="flex flex-wrap items-center justify-end">
              {rail.map((product, index) => (
                <li key={product.id} className="flex items-center">
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="mx-1 h-px w-4 shrink-0 bg-line-strong"
                    />
                  ) : null}
                  <RailNode product={product} />
                </li>
              ))}
            </ol>
          </nav>

          <EcosystemMenu />
        </div>
      </Container>
    </div>
  );
}

function RailNode({ product }: { product: ProductView }) {
  if (product.isCurrent) {
    return (
      <span
        aria-current="true"
        className="inline-flex min-h-9 items-center gap-1.5 rounded-sm px-1.5 text-xs font-semibold text-accent-strong"
      >
        <span aria-hidden="true" className="block size-1.5 rounded-full bg-accent-strong" />
        {product.shortName}
        <span className="sr-only"> — you are here</span>
      </span>
    );
  }

  if (!product.href) {
    return (
      <span className="inline-flex min-h-9 items-center gap-1.5 px-1.5 text-xs text-ink-subtle">
        <span aria-hidden="true" className="block size-1.5 rounded-full bg-line-strong" />
        {product.shortName}
      </span>
    );
  }

  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-9 items-center gap-1.5 rounded-sm px-1.5 text-xs text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink"
    >
      <span aria-hidden="true" className="block size-1.5 rounded-full bg-line-strong" />
      {product.shortName}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
