'use client';

/**
 * The ecosystem drawer: the only interactive part of the ecosystem layer.
 *
 * Everything else about the banner — the identity, the timeline rail, the current-product
 * indicator — is server-rendered static HTML. This island exists solely because a
 * disclosure needs open/closed state.
 *
 * It derives its product list by IMPORTING the registry rather than receiving it as a
 * prop. That inverts the rule SiteNav documents, deliberately and with measurements: see
 * ./product-view for why a prop costs ~6 MB across this 318-route static export while the
 * import costs 11 KB once in the immutably-cached chunk.
 *
 * Modal semantics are real, not decorative: the drawer takes `role="dialog"` with
 * `aria-modal`, traps Tab, closes on Escape, restores focus to the control that opened
 * it, and locks body scroll through the shared coordinator so it cannot deadlock against
 * the consent preferences panel.
 */

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { announceOverlayOpen, lockScroll, onOverlayDisplaced, trapFocus } from '@/lib/overlay';
import { groupViews, type ProductGroupView } from './product-view';

const OVERLAY_ID = 'ecosystem-drawer';

export function EcosystemMenu() {
  /*
   * Derived from the imported registry rather than received as a prop — see the payload
   * reasoning in ./product-view. useMemo because the registry is static: this runs once
   * per mount, not once per render.
   */
  const groups = useMemo(() => groupViews(), []);
  const productCount = useMemo(
    () => groups.reduce((total, group) => total + group.products.length, 0),
    [groups],
  );

  const [open, setOpen] = useState(false);
  const titleId = useId();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* Another overlay opened — stand down without stealing focus back. */
  useEffect(() => onOverlayDisplaced(OVERLAY_ID, () => setOpen(false)), []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    announceOverlayOpen(OVERLAY_ID);
    const releaseScroll = lockScroll();
    const releaseFocus = trapFocus(panel);
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        close();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      releaseFocus();
      releaseScroll();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        className="inline-flex min-h-9 items-center gap-1.5 rounded-sm px-2 text-xs font-medium text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink"
      >
        <span aria-hidden="true" className="grid grid-cols-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="block size-[3px] rounded-[1px] bg-ink-subtle" />
          ))}
        </span>
        All products
        <span className="sr-only"> — {productCount} in the HELPERG ecosystem</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-overlay">
          {/*
            The backdrop is a plain div, not a button. A button here would be announced as
            an unlabelled control and would appear in the focus order ahead of the dialog's
            own close control; Escape and the visible Close button are the accessible exits.
          */}
          <div
            className="absolute inset-0 bg-brand-deep/40"
            onClick={close}
            aria-hidden="true"
          />

          <div
            id={panelId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-line bg-surface shadow-sm"
            style={{
              paddingRight: 'env(safe-area-inset-right)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
              <div>
                <h2 id={titleId} className="text-base font-semibold text-ink">
                  HELPERG ecosystem
                </h2>
                <p className="mt-1 text-xs text-ink-muted">
                  JusticeCenterID is one of {productCount} products listed in this ecosystem.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-line-strong px-3 text-sm font-medium text-ink"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
              {groups.map((group) => (
                <section key={group.category} className="mb-6 last:mb-0">
                  <h3 className="text-xs font-semibold tracking-wide text-ink-subtle uppercase">
                    {group.label}
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {group.products.map((product) => (
                      <li key={product.id}>
                        <ProductRow product={product} />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ProductRow({ product }: { product: ProductGroupView['products'][number] }) {
  const meta = (
    <span className="mt-0.5 block text-xs text-ink-subtle">
      {product.isCurrent ? 'You are here' : product.typeLabel}
    </span>
  );

  /*
   * Checked before the href branch: the current product is never rendered as a link (you
   * are already on it), so a missing href here is expected rather than a data gap.
   */
  if (product.isCurrent) {
    return (
      <div
        aria-current="true"
        className="block rounded-md border border-accent bg-accent-soft px-3 py-2"
      >
        <span className="block text-sm font-semibold text-accent-strong">{product.name}</span>
        {meta}
      </div>
    );
  }

  /*
   * No verified URL means no link. The row still renders — omitting the product entirely
   * would hide part of the ecosystem — but it is text, because an empty or guessed href
   * is exactly the fabrication the registry refuses to carry.
   */
  if (!product.href) {
    return (
      <div className="block rounded-md px-3 py-2">
        <span className="block text-sm font-medium text-ink-muted">{product.name}</span>
        <span className="mt-0.5 block text-xs text-ink-subtle">Link not available</span>
      </div>
    );
  }

  return (
    <div className="rounded-md px-3 py-2 hover:bg-surface-sunken">
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm font-medium text-ink"
      >
        {product.name}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      {meta}
      {product.altHref ? (
        <a
          href={product.altHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link-inline mt-1 inline-block text-xs"
        >
          {product.altLabel}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}
