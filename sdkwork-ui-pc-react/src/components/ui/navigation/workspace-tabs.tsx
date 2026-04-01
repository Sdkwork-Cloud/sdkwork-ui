import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../../lib/utils';

export interface WorkspaceTabItem {
  closeLabel?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  id: string;
  label: React.ReactNode;
  meta?: React.ReactNode;
  modified?: boolean;
}

export interface WorkspaceTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode;
  emptyState?: React.ReactNode;
  items: WorkspaceTabItem[];
  onCloseTab?: (id: string) => void;
  onValueChange?: (id: string) => void;
  value?: string | null;
}

const WorkspaceTabs = React.forwardRef<HTMLDivElement, WorkspaceTabsProps>(
  (
    {
      actions,
      className,
      emptyState = 'Workspace',
      items,
      onCloseTab,
      onValueChange,
      value,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-3', className)}
      data-sdk-ui="workspace-tabs"
      {...props}
    >
      <div
        aria-label={props['aria-label'] ?? 'Workspace tabs'}
        className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto"
        role="tablist"
      >
        {items.length === 0 ? (
          <span className="px-1 text-sm text-[var(--sdk-color-text-muted)]">{emptyState}</span>
        ) : (
          items.map((item) => {
            const active = item.id === value;

            return (
              <div
                className={cn(
                  'group inline-flex items-center gap-1 rounded-[calc(var(--sdk-radius-control)+0.25rem)] border pr-1.5 transition-colors',
                  active
                    ? 'border-[var(--sdk-color-brand-primary)]/25 bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-text-primary)]'
                    : 'border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-secondary)]',
                )}
                data-state={active ? 'active' : 'inactive'}
                key={item.id}
              >
                <button
                  aria-selected={active}
                  className={cn(
                    'inline-flex min-w-0 items-center gap-2 rounded-[calc(var(--sdk-radius-control)+0.125rem)] px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)]',
                    active
                      ? 'text-[var(--sdk-color-text-primary)]'
                      : 'hover:text-[var(--sdk-color-text-primary)]',
                  )}
                  disabled={item.disabled}
                  onClick={() => onValueChange?.(item.id)}
                  role="tab"
                  type="button"
                >
                  {item.icon ? <span className="shrink-0">{item.icon}</span> : null}
                  <span className="truncate">{item.label}</span>
                  {item.modified ? (
                    <span
                      aria-hidden="true"
                      className="inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--sdk-color-state-warning)]"
                    />
                  ) : null}
                  {item.meta ? <span className="shrink-0">{item.meta}</span> : null}
                </button>

                {onCloseTab ? (
                  <button
                    aria-label={item.closeLabel ?? `Close ${item.label}`}
                    className="rounded-full p-1 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]"
                    onClick={(event) => {
                      event.stopPropagation();
                      onCloseTab(item.id);
                    }}
                    type="button"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                ) : null}
              </div>
            );
          })
        )}
      </div>

      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </div>
  ),
);

WorkspaceTabs.displayName = 'WorkspaceTabs';

export { WorkspaceTabs };
