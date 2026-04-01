import * as React from 'react';
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCheck,
  CheckCircle2,
  ExternalLink,
  Info,
  Trash2,
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export type NotificationCenterTone = 'default' | 'info' | 'success' | 'warning' | 'danger';

export interface NotificationCenterItem {
  actionHref?: string;
  actionLabel?: string;
  actionTarget?: React.HTMLAttributeAnchorTarget;
  content: React.ReactNode;
  id: string;
  timeLabel?: React.ReactNode;
  title: React.ReactNode;
  tone?: NotificationCenterTone;
  unread?: boolean;
}

export interface NotificationCenterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  clearLabel?: string;
  emptyDescription?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  items: NotificationCenterItem[];
  markAllAsReadLabel?: string;
  onClear?: () => void;
  onItemSelect?: (id: string) => void;
  onMarkAllAsRead?: () => void;
  title?: React.ReactNode;
}

const toneIcon = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
} as const;

const toneClass = {
  default: 'text-[var(--sdk-color-state-info)]',
  info: 'text-[var(--sdk-color-state-info)]',
  success: 'text-[var(--sdk-color-state-success)]',
  warning: 'text-[var(--sdk-color-state-warning)]',
  danger: 'text-[var(--sdk-color-state-danger)]',
} as const;

const NotificationCenter = React.forwardRef<HTMLDivElement, NotificationCenterProps>(
  (
    {
      className,
      clearLabel = 'Clear notifications',
      emptyDescription = 'New alerts, updates, and workflow events will appear here.',
      emptyTitle = 'No notifications',
      items,
      markAllAsReadLabel = 'Mark all as read',
      onClear,
      onItemSelect,
      onMarkAllAsRead,
      title = 'Notifications',
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={cn(
        'overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] shadow-[var(--sdk-shadow-lg)]',
        className,
      )}
      data-sdk-ui="notification-center"
      {...props}
    >
      <header className="flex items-center justify-between gap-3 border-b border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel-muted)] px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <Bell className="h-4 w-4 text-[var(--sdk-color-text-muted)]" />
          <div className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sdk-color-text-secondary)]">
            {title}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {items.length > 0 && onMarkAllAsRead ? (
            <button
              aria-label={markAllAsReadLabel}
              className="rounded-[var(--sdk-radius-control)] p-2 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]"
              onClick={onMarkAllAsRead}
              type="button"
            >
              <CheckCheck className="h-4 w-4" />
            </button>
          ) : null}
          {items.length > 0 && onClear ? (
            <button
              aria-label={clearLabel}
              className="rounded-[var(--sdk-radius-control)] p-2 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-state-danger)]"
              onClick={onClear}
              type="button"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
          <Bell className="h-8 w-8 text-[var(--sdk-color-text-muted)] opacity-40" />
          <div className="mt-3 text-sm font-semibold text-[var(--sdk-color-text-primary)]">{emptyTitle}</div>
          <div className="mt-1 max-w-xs text-sm text-[var(--sdk-color-text-secondary)]">{emptyDescription}</div>
        </div>
      ) : (
        <div className="max-h-[26rem] overflow-y-auto">
          <div className="divide-y divide-[var(--sdk-color-border-subtle)]">
            {items.map((item) => {
              const tone = item.tone ?? 'default';
              const Icon = toneIcon[tone];

              return (
                <div
                  className={cn(
                    'relative px-4 py-4 transition-colors',
                    onItemSelect ? 'hover:bg-[var(--sdk-color-surface-panel-muted)]' : undefined,
                  )}
                  key={item.id}
                >
                  {item.unread ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-[var(--sdk-color-brand-primary)]"
                    />
                  ) : null}

                  <button
                    className={cn(
                      'flex w-full items-start gap-3 text-left',
                      onItemSelect ? 'cursor-pointer' : 'cursor-default',
                    )}
                    onClick={() => onItemSelect?.(item.id)}
                    type="button"
                  >
                    <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', toneClass[tone])} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 text-sm font-medium text-[var(--sdk-color-text-primary)]">
                          {item.title}
                        </div>
                        {item.timeLabel ? (
                          <div className="shrink-0 text-[11px] text-[var(--sdk-color-text-muted)]">
                            {item.timeLabel}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-[var(--sdk-color-text-secondary)]">
                        {item.content}
                      </div>
                    </div>
                  </button>

                  {item.actionHref ? (
                    <a
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--sdk-color-brand-primary)] transition-colors hover:text-[var(--sdk-color-brand-primary-strong)]"
                      href={item.actionHref}
                      rel="noreferrer"
                      target={item.actionTarget ?? '_blank'}
                    >
                      {item.actionLabel ?? 'View details'}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  ),
);

NotificationCenter.displayName = 'NotificationCenter';

export { NotificationCenter };
