import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export interface WorkspacePanelProps extends PropsWithChildren {
  actions?: ReactNode;
  bodyClassName?: string;
  className?: string;
  description?: ReactNode;
  headerClassName?: string;
  title?: ReactNode;
}

export function WorkspacePanel({
  actions,
  bodyClassName,
  children,
  className,
  description,
  headerClassName,
  title,
}: WorkspacePanelProps) {
  return (
    <section
      className={cn(
        'flex h-full flex-col rounded-[var(--sdk-radius-panel)] bg-[var(--sdk-color-surface-panel)]',
        className,
      )}
      data-sdk-pattern="workspace-panel"
    >
      {title || description || actions ? (
        <div
          className={cn(
            'flex flex-wrap items-start justify-between gap-4 border-b border-[var(--sdk-color-border-subtle)] px-6 py-5',
            headerClassName,
          )}
        >
          <div className="space-y-1">
            {title ? <div className="text-base font-semibold">{title}</div> : null}
            {description ? (
              <div className="text-sm text-[var(--sdk-color-text-secondary)]">{description}</div>
            ) : null}
          </div>
          {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
        </div>
      ) : null}
      <div className={cn('min-h-0 flex-1 px-6 py-5', bodyClassName)}>{children}</div>
    </section>
  );
}
