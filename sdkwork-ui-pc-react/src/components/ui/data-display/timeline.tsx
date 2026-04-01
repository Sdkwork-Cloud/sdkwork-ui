import * as React from 'react';
import { cn } from '../../../lib/utils';

export type TimelineItemStatus =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'pending'
  | 'done'
  | 'current'
  | 'error';

export interface TimelineItem {
  id?: React.Key;
  title: React.ReactNode;
  description?: React.ReactNode;
  timestamp?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  status?: TimelineItemStatus;
}

export interface TimelineProps extends React.OlHTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
}

type ResolvedTimelineStatus = 'default' | 'success' | 'warning' | 'danger' | 'pending';

const timelineStatusAlias: Record<Exclude<TimelineItemStatus, ResolvedTimelineStatus>, ResolvedTimelineStatus> = {
  current: 'warning',
  done: 'success',
  error: 'danger',
};

const timelineIndicatorShellClassName: Record<ResolvedTimelineStatus, string> = {
  default:
    'border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-muted)]',
  success:
    'border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-state-success)]',
  warning:
    'border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-state-warning)]',
  danger:
    'border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-state-danger)]',
  pending:
    'border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-brand-primary)]',
};

const timelineIndicatorDotClassName: Record<ResolvedTimelineStatus, string> = {
  default: 'bg-[var(--sdk-color-text-muted)]',
  success: 'bg-[var(--sdk-color-state-success)]',
  warning: 'bg-[var(--sdk-color-state-warning)]',
  danger: 'bg-[var(--sdk-color-state-danger)]',
  pending: 'bg-[var(--sdk-color-brand-primary)]',
};

function resolveTimelineStatus(status?: TimelineItemStatus): ResolvedTimelineStatus {
  if (!status) {
    return 'default';
  }

  return timelineStatusAlias[status as keyof typeof timelineStatusAlias] ?? status;
}

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(({ className, items, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn('space-y-0', className)}
    data-sdk-ui="timeline"
    {...props}
  >
    {items.map((item, index) => {
      const status = resolveTimelineStatus(item.status);

      return (
        <li
          key={item.id ?? index}
          className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 pb-5 last:pb-0"
          data-sdk-ui="timeline-item"
          data-status={status}
        >
          <div className="flex flex-col items-center">
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border',
                timelineIndicatorShellClassName[status],
              )}
            >
              {item.icon ? (
                item.icon
              ) : (
                <span
                  aria-hidden="true"
                  className={cn('h-2.5 w-2.5 rounded-full', timelineIndicatorDotClassName[status])}
                />
              )}
            </span>
            {index < items.length - 1 ? (
              <span
                aria-hidden="true"
                className="mt-2 w-px flex-1 rounded-full bg-[var(--sdk-color-border-default)]"
              />
            ) : null}
          </div>
          <div className="min-w-0 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-4 py-3 shadow-[var(--sdk-shadow-soft)]">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="text-sm font-semibold text-[var(--sdk-color-text-primary)]">{item.title}</div>
              {item.timestamp ? (
                <div className="text-xs font-medium text-[var(--sdk-color-text-muted)]">{item.timestamp}</div>
              ) : null}
            </div>
            {item.description ? (
              <div className="mt-1.5 text-sm text-[var(--sdk-color-text-secondary)]">{item.description}</div>
            ) : null}
            {item.content ? <div className="mt-3">{item.content}</div> : null}
          </div>
        </li>
      );
    })}
  </ol>
));

Timeline.displayName = 'Timeline';

export { Timeline };
