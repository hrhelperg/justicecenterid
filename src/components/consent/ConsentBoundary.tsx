'use client';

/**
 * The consent UI: the banner (when there is anything to consent to) and the preferences
 * dialog (always reachable, from the footer's "Cookie settings" control).
 *
 * WHY THE BANNER IS USUALLY ABSENT. `hasOptionalTechnologies` is false while
 * src/content/optional-technologies.ts is empty, which it is: this site loads no
 * analytics, marketing or advertising technology and writes nothing to the device except
 * the consent record itself. Consent is required for storing or accessing information on
 * a device; with nothing stored there is nothing to ask about, and asking anyway would
 * contradict the privacy page. Register one optional technology and the banner arms
 * itself with no change to this component.
 *
 * NO DARK PATTERNS. "Accept all" and "Reject non-essential" are the same element, the
 * same size, the same weight and the same prominence — neither is a ghost button, and
 * rejection is never hidden behind "Manage preferences". Nothing is pre-checked; the
 * optional toggles start off and stay off until the reader turns them on. The banner
 * does not block the page: it is a bottom-anchored region, not a full-screen wall, and
 * every word of every article is readable without interacting with it.
 */

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import {
  acceptAll,
  consentFromSnapshot,
  getConsentSnapshot,
  getServerConsentSnapshot,
  getStoredConsent,
  rejectOptional,
  setConsent,
  subscribeToConsent,
} from '@/lib/consent';
import { announceOverlayOpen, lockScroll, onOverlayDisplaced, trapFocus } from '@/lib/overlay';
import {
  OPTIONAL_TECHNOLOGIES,
  hasOptionalTechnologies,
} from '@/content/optional-technologies';

export const OPEN_COOKIE_SETTINGS_EVENT = 'jc:open-cookie-settings';

const OVERLAY_ID = 'consent-preferences';

/*
 * The technology registry is imported rather than passed as a prop, for the same payload
 * reason documented in the ecosystem product-view module: a prop on a client component is
 * serialised into the RSC payload of all 318 exported routes, while an import lands once
 * in the shared, immutably-cached JavaScript chunk. The module is deliberately tiny — and
 * currently empty — so the cost either way is small; the point is that it stays small when
 * a real technology is registered later.
 */
export function ConsentBoundary() {
  /*
   * Consent lives in localStorage, which does not exist during the static export.
   * useSyncExternalStore renders the server snapshot (null — no choice made) during
   * hydration so the prerendered HTML and the first client render agree, then swaps to
   * the real value. See the adapter comment in @/lib/consent.
   */
  const snapshot = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const stored = useMemo(() => consentFromSnapshot(snapshot), [snapshot]);

  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const titleId = useId();
  const dialogId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstControlRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const closePrefs = useCallback(() => {
    setPrefsOpen(false);
    openerRef.current?.focus();
    openerRef.current = null;
  }, []);

  const openPrefs = useCallback(() => {
    openerRef.current = (document.activeElement as HTMLElement) ?? null;
    const record = getStoredConsent();
    setAnalytics(record?.analytics ?? false);
    setMarketing(record?.marketing ?? false);
    setPrefsOpen(true);
  }, []);

  /* The footer's "Cookie settings" control reaches this island by event. */
  useEffect(() => {
    const handler = () => openPrefs();
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handler);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handler);
  }, [openPrefs]);

  useEffect(() => onOverlayDisplaced(OVERLAY_ID, () => setPrefsOpen(false)), []);

  useEffect(() => {
    if (!prefsOpen) return;
    const panel = panelRef.current;
    if (!panel) return;

    announceOverlayOpen(OVERLAY_ID);
    const releaseScroll = lockScroll();
    const releaseFocus = trapFocus(panel);
    firstControlRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        closePrefs();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      releaseFocus();
      releaseScroll();
    };
  }, [prefsOpen, closePrefs]);

  /*
   * `stored` updates itself: setConsent writes and dispatches, the store subscription
   * fires, and useSyncExternalStore re-renders. Only the panel's own toggle state has to
   * be synced here, so the dialog reflects the choice if it stays open.
   */
  const record = (next: { analytics: boolean; marketing: boolean }) => {
    setAnalytics(next.analytics);
    setMarketing(next.marketing);
  };

  const bannerVisible = hasOptionalTechnologies && stored === null && !prefsOpen;

  return (
    <>
      {bannerVisible ? (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-consent border-t border-line-strong bg-surface shadow-sm"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="mx-auto flex max-w-shell flex-col gap-3 px-5 py-4 sm:px-8 nav:flex-row nav:items-center nav:justify-between">
            <p className="max-w-measure text-sm text-ink">
              We use optional cookies only with your permission. Necessary storage keeps the
              site working and cannot be switched off.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => record(rejectOptional())}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong px-4 text-sm font-medium text-ink"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => record(acceptAll())}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong px-4 text-sm font-medium text-ink"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={openPrefs}
                className="link-inline inline-flex min-h-11 items-center justify-center px-2 text-sm font-medium"
              >
                Manage preferences
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {prefsOpen ? (
        <div className="fixed inset-0 z-overlay">
          <div
            className="absolute inset-0 bg-brand-deep/40"
            onClick={closePrefs}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-end justify-center p-0 sm:items-center sm:p-6">
            <div
              id={dialogId}
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-t-lg border border-line bg-surface shadow-sm sm:rounded-lg"
              style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
              <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
                <h2 id={titleId} className="text-base font-semibold text-ink">
                  Cookie settings
                </h2>
                <button
                  ref={firstControlRef}
                  type="button"
                  onClick={closePrefs}
                  className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-line-strong px-3 text-sm font-medium text-ink"
                >
                  Close
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
                {!hasOptionalTechnologies ? (
                  <p className="max-w-measure text-sm text-ink-muted">
                    No optional cookies or tracking technologies are active on this site.
                    JusticeCenterID loads no analytics, no advertising or marketing tags, and
                    nothing from a third party. The only thing this site can store on your
                    device is the record of a choice made on this panel, and nothing is stored
                    until you make one. The optional categories below are listed so you can see
                    they exist and are switched off — not because anything is currently using
                    them.
                  </p>
                ) : (
                  <ul className="mb-4 space-y-2">
                    {OPTIONAL_TECHNOLOGIES.map((technology) => (
                      <li key={technology.id} className="text-sm text-ink-muted">
                        <span className="font-medium text-ink">{technology.name}</span> —{' '}
                        {technology.provider}. {technology.purpose}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-4 space-y-3">
                  <CategoryRow
                    name="Necessary"
                    description="Required for the site to function and to remember this choice. Always active."
                    checked
                    disabled
                    onChange={() => {}}
                  />
                  <CategoryRow
                    name="Analytics"
                    description="Measurement of how the site is used. Nothing is loaded unless you turn this on."
                    checked={analytics}
                    disabled={!hasOptionalTechnologies}
                    onChange={setAnalytics}
                  />
                  <CategoryRow
                    name="Marketing"
                    description="Advertising and cross-site tracking. Nothing is loaded unless you turn this on."
                    checked={marketing}
                    disabled={!hasOptionalTechnologies}
                    onChange={setMarketing}
                  />
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-line px-5 py-4">
                <button
                  type="button"
                  onClick={() => {
                    record(rejectOptional());
                    closePrefs();
                  }}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong px-4 text-sm font-medium text-ink"
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  onClick={() => {
                    record(acceptAll());
                    closePrefs();
                  }}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong px-4 text-sm font-medium text-ink"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => {
                    record(setConsent({ analytics, marketing }));
                    closePrefs();
                  }}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent bg-accent-soft px-4 text-sm font-medium text-accent-strong"
                >
                  Save preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function CategoryRow({
  name,
  description,
  checked,
  disabled,
  onChange,
}: {
  name: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
}) {
  const id = useId();
  return (
    <li className="rounded-md border border-line px-3 py-3">
      <div className="flex items-start gap-3">
        {/*
          A real checkbox. A styled div with role="switch" would need its own keyboard
          handling and state announcement; the native control already has both, and the
          disabled state is announced rather than merely looking greyed out.
        */}
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-accent-strong"
        />
        <div>
          <label htmlFor={id} className="block text-sm font-medium text-ink">
            {name}
            {disabled ? (
              <span className="ml-2 text-xs font-normal text-ink-subtle">
                {name === 'Necessary' ? 'Always active' : 'Not in use'}
              </span>
            ) : null}
          </label>
          <p className="mt-0.5 text-xs text-ink-muted">{description}</p>
        </div>
      </div>
    </li>
  );
}
