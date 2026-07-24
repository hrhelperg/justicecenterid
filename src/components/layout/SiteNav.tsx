'use client';

/**
 * The only client component on the site.
 *
 * Two browser-dependent behaviours make it necessary:
 *   1. `usePathname` for active-navigation state and `aria-current`.
 *   2. Disclosure state, focus management, and Escape handling for the mobile panel.
 *
 * Navigation items arrive as a PROP from the server-rendered header, and `isActivePath` is
 * imported from a content-free module. Both are deliberate: this component previously
 * imported `@/lib/navigation`, which imports `SECTIONS` from `@/content/sections`, so the
 * entire section content registry was bundled into the client JavaScript on every page.
 * Nothing imported here may reach a content module.
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { isActivePath } from '@/lib/active-path';
import type { NavItem } from '@/lib/navigation';

export function SiteNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape closes the panel and returns focus to the control that opened it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  // Move focus into the panel on open.
  useEffect(() => {
    if (open) panelRef.current?.querySelector('a')?.focus();
  }, [open]);

  return (
    <>
      <nav aria-label="Primary" className="hidden nav:block">
        {/*
          flex-wrap is required, not cosmetic. At 200% text size (WCAG 2.2 SC 1.4.4) the six
          nav links exceed a 1280px viewport and pushed the whole document into horizontal
          scroll on every page, including the home page. Wrapping only engages when the row
          no longer fits, so normal rendering is unchanged.
        */}
        <ul className="flex flex-wrap items-center justify-end gap-1">
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex min-h-11 items-center rounded-sm border-b-2 px-3 text-sm font-medium transition-colors ${
                    active
                      ? 'border-accent bg-accent-soft text-accent-strong'
                      : 'border-transparent text-ink-muted hover:bg-surface-sunken hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/*
        The accessible name stays "Menu" in both states. A disclosure control should convey
        its state through aria-expanded, not by renaming itself — a name that changes on
        activation is announced as a different control and is harder to return to.
      */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-line-strong px-3 text-sm font-medium text-ink nav:hidden"
      >
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span className="block h-0.5 w-4 bg-ink" />
          <span className="block h-0.5 w-4 bg-ink" />
          <span className="block h-0.5 w-4 bg-ink" />
        </span>
        Menu
      </button>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-full rounded-b-md border border-line bg-surface shadow-sm nav:hidden"
      >
        <nav aria-label="Primary (mobile)" className="px-5 py-3 sm:px-8">
          <ul className="flex flex-col">
            {items.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    // Closed here rather than in an effect on pathname: navigation is the
                    // event, so handling it in the handler avoids a cascading render.
                    onClick={() => setOpen(false)}
                    className={`flex min-h-11 items-center py-2 text-base font-medium ${
                      active ? 'text-accent-strong' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
