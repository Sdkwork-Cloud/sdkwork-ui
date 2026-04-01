import * as React from 'react';
import { cn } from '../../lib/utils';

const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'animate-pulse rounded-[calc(var(--sdk-radius-control)-0.125rem)] bg-[var(--sdk-color-surface-panel-muted)]',
        className,
      )}
      {...props}
    />
  ),
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
