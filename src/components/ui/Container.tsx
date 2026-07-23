import type { ReactNode } from 'react';

type Width = 'measure' | 'wide' | 'shell';

const WIDTHS: Record<Width, string> = {
  measure: 'max-w-measure',
  wide: 'max-w-wide',
  shell: 'max-w-shell',
};

/**
 * The only place horizontal padding is defined. Pages never set their own gutters.
 * Gutters: 20px below 640px, 32px to 1024px, 40px above.
 */
export function Container({
  children,
  width = 'wide',
  className = '',
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 lg:px-10 ${WIDTHS[width]} ${className}`}>
      {children}
    </div>
  );
}
