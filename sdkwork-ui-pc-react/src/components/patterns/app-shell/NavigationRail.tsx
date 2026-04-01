import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export interface NavigationRailProps extends PropsWithChildren {
  className?: string;
  footer?: ReactNode;
  header?: ReactNode;
}

export function NavigationRail({ children, className, footer, header }: NavigationRailProps) {
  return (
    <nav
      className={cn(
        'flex h-full flex-col gap-4 px-4 py-5 text-[var(--sdk-color-text-secondary)]',
        className,
      )}
      data-sdk-pattern="navigation-rail"
    >
      {header ? <div className="shrink-0">{header}</div> : null}
      <div className="flex min-h-0 flex-1 flex-col gap-2">{children}</div>
      {footer ? <div className="shrink-0 pt-2">{footer}</div> : null}
    </nav>
  );
}
