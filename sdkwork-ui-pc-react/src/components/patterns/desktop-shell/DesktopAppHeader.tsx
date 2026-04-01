import type { ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import {
  DesktopTitleBar,
  type DesktopTitleBarProps,
} from './DesktopTitleBar';

export interface DesktopAppHeaderProps
  extends Omit<DesktopTitleBarProps, 'leading' | 'title' | 'trailing' | 'windowControls'> {
  actions?: ReactNode;
  badge?: ReactNode;
  brand?: ReactNode;
  brandClassName?: string;
  brandMark?: ReactNode;
  className?: string;
  leading?: ReactNode;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  title?: ReactNode;
  titleClassName?: string;
  windowControls?: ReactNode;
}

export function DesktopAppHeader({
  actions,
  badge,
  brand,
  brandClassName,
  brandMark,
  className,
  leading,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  windowControls,
  ...props
}: DesktopAppHeaderProps) {
  const brandBlock =
    brand ??
    (title || subtitle || brandMark || badge ? (
      <div className={cn('flex min-w-0 items-center gap-3', brandClassName)}>
        {brandMark ? <div className="shrink-0">{brandMark}</div> : null}
        {(title || subtitle || badge) ? (
          <div className="min-w-0">
            {(title || badge) ? (
              <div className="flex min-w-0 items-center gap-2">
                {title ? (
                  <span
                    className={cn(
                      'truncate text-sm font-semibold leading-none text-[var(--sdk-color-text-primary)]',
                      titleClassName,
                    )}
                  >
                    {title}
                  </span>
                ) : null}
                {badge}
              </div>
            ) : null}
            {subtitle ? (
              <div
                className={cn(
                  'mt-1 truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sdk-color-text-muted)]',
                  subtitleClassName,
                )}
              >
                {subtitle}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    ) : null);

  return (
    <div className="relative z-30" data-sdk-pattern="desktop-app-header">
      <DesktopTitleBar
        className={className}
        leading={
          brandBlock || leading ? (
            <>
              {brandBlock}
              {leading}
            </>
          ) : undefined
        }
        trailing={actions}
        windowControls={windowControls}
        {...props}
      />
    </div>
  );
}
