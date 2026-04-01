import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export interface SectionHeaderProps
  extends PropsWithChildren<Omit<HTMLAttributes<HTMLDivElement>, 'title'>> {
  actions?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  meta?: ReactNode;
  sticky?: boolean;
  title?: ReactNode;
}

export function SectionHeader({
  actions,
  children,
  className,
  description,
  eyebrow,
  meta,
  sticky = false,
  title,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'border-b border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel)]/95 px-4 py-4 sm:px-6',
        sticky ? 'sticky top-0 z-20 backdrop-blur-xl' : null,
        className,
      )}
      data-sdk-pattern="section-header"
      {...props}
    >
      {(eyebrow || title || description || meta || actions) ? (
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            {eyebrow ? (
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sdk-color-text-muted)]">
                {eyebrow}
              </div>
            ) : null}
            {title ? (
              <div className="mt-1 text-sm font-semibold text-[var(--sdk-color-text-primary)]">
                {title}
              </div>
            ) : null}
            {description ? (
              <div className="mt-1 text-sm text-[var(--sdk-color-text-secondary)]">{description}</div>
            ) : null}
            {meta ? <div className="mt-2">{meta}</div> : null}
          </div>
          {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
        </div>
      ) : null}
      {children ? <div className={cn(title || description || actions ? 'mt-4' : null)}>{children}</div> : null}
    </div>
  );
}
