import type { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Container } from './Container';

/**
 * Guarantees exactly one h1 per page and a consistent opening structure:
 * breadcrumbs, optional eyebrow, h1, lead paragraph, optional metadata slot.
 */
export function PageIntro({
  path,
  eyebrow,
  title,
  lead,
  meta,
  children,
  width = 'wide',
}: {
  path: string;
  eyebrow?: string;
  title: string;
  lead: string;
  meta?: ReactNode;
  children?: ReactNode;
  /**
   * 'wide' keeps the intro left-aligned above a full-width layout (section and reference
   * hubs). 'measure' centres it, for pages whose whole body is a single prose column —
   * left-aligning those leaves half the viewport empty on a desktop screen.
   */
  width?: 'measure' | 'wide';
}) {
  return (
    <header className="border-b border-line bg-surface-raised py-10 sm:py-14">
      <Container width={width === 'measure' ? 'measure' : 'wide'}>
        <div className={width === 'measure' ? '' : 'max-w-measure'}>
          <Breadcrumbs path={path} />
          {eyebrow && (
            <p className="mt-6 text-sm font-medium tracking-wide text-brand uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className={`text-3xl text-ink ${eyebrow ? 'mt-2' : 'mt-6'}`}>{title}</h1>
          <p className="mt-4 text-lg text-ink-muted [text-wrap:pretty]">{lead}</p>
          {meta && <div className="mt-6">{meta}</div>}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </Container>
    </header>
  );
}
