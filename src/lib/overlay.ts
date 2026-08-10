'use client';

/**
 * The global overlay coordinator.
 *
 * The site has two independent client islands that can each open a modal surface: the
 * ecosystem drawer and the consent preferences panel. They are deliberately unaware of
 * one another — neither imports the other, and either can be removed without touching
 * the other's code.
 *
 * That independence creates exactly one hazard, and this module removes it. If both
 * opened at once there would be two focus traps competing for Tab, two Escape handlers,
 * and two components each restoring `document.body.style.overflow` on unmount — the
 * classic body-scroll deadlock, where the second restore writes back the *locked* value
 * it captured while the first was still open.
 *
 * The rule is therefore: at most one modal overlay is open at any time. Opening one
 * announces itself, and any other open overlay closes. Coordination is by DOM event
 * rather than shared state so neither island needs to import the other, and so the
 * whole mechanism is three functions with no provider and no context.
 *
 * Scroll locking lives here too, for the same reason: one owner, one reference count,
 * one restore.
 */

const OPEN_EVENT = 'jc:overlay-open';

/** Announce that `id` is opening. Every other overlay must close. */
export function announceOverlayOpen(id: string): void {
  window.dispatchEvent(new CustomEvent<string>(OPEN_EVENT, { detail: id }));
}

/**
 * Subscribe to "some other overlay opened" and run `onDisplaced`.
 * Returns an unsubscribe function.
 */
export function onOverlayDisplaced(id: string, onDisplaced: () => void): () => void {
  const handler = (event: Event) => {
    const opened = (event as CustomEvent<string>).detail;
    if (opened !== id) onDisplaced();
  };
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

/**
 * Lock body scroll while a modal is open, and restore it exactly once.
 *
 * The saved value is captured on the FIRST lock only. Without the counter, opening B
 * while A is open would capture `hidden` as the "original" value and leave the page
 * permanently unscrollable after both closed.
 */
let lockCount = 0;
let savedOverflow = '';

export function lockScroll(): () => void {
  if (lockCount === 0) {
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  lockCount += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) document.body.style.overflow = savedOverflow;
  };
}

/** Selector for everything that can hold focus inside a dialog. */
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Trap Tab within `container` until the returned function is called.
 *
 * Implemented by wrapping at the edges rather than by rewriting tabindex, so the
 * document's natural focus order inside the dialog is preserved.
 */
export function trapFocus(container: HTMLElement): () => void {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;
    const items = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement,
    );
    if (items.length === 0) return;

    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    const active = document.activeElement;

    if (event.shiftKey && (active === first || !container.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  container.ownerDocument.addEventListener('keydown', onKeyDown);
  return () => container.ownerDocument.removeEventListener('keydown', onKeyDown);
}
