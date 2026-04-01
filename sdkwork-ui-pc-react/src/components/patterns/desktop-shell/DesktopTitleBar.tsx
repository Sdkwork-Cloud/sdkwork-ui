import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import {
  DesktopWindowControls,
  type DesktopWindowControlLabels,
  type DesktopWindowController,
} from './DesktopWindowControls';

export interface DesktopTitleBarProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'style'> {
  bordered?: boolean;
  center?: ReactNode;
  centerClassName?: string;
  centerContainerClassName?: string;
  centerInteractive?: boolean;
  centerMaxWidth?: CSSProperties['maxWidth'];
  leading?: ReactNode;
  leadingClassName?: string;
  size?: 'comfortable' | 'compact' | 'default';
  style?: CSSProperties;
  trailing?: ReactNode;
  trailingClassName?: string;
  translucent?: boolean;
  windowController?: DesktopWindowController | null;
  windowControlLabels?: Partial<DesktopWindowControlLabels>;
  windowControls?: ReactNode;
}

const sizeClassName: Record<NonNullable<DesktopTitleBarProps['size']>, string> = {
  comfortable: 'h-14 px-4 sm:px-5',
  compact: 'h-11 px-3 sm:px-4',
  default: 'h-12 px-3 sm:px-4',
};

export function DesktopTitleBar({
  bordered = true,
  center,
  centerClassName,
  centerContainerClassName,
  centerInteractive = true,
  centerMaxWidth = '36rem',
  className,
  leading,
  leadingClassName,
  size = 'default',
  style,
  trailing,
  trailingClassName,
  translucent = true,
  windowController,
  windowControlLabels,
  windowControls,
  ...props
}: DesktopTitleBarProps) {
  const resolvedWindowControls =
    windowControls ??
    (windowController ? (
      <DesktopWindowControls controller={windowController} labels={windowControlLabels} />
    ) : null);
  const hasTrailingRegion = Boolean(trailing || resolvedWindowControls);

  return (
    <header
      className={cn(
        'relative flex items-center',
        sizeClassName[size],
        bordered ? 'border-b border-[var(--sdk-color-border-subtle)]' : null,
        translucent
          ? 'bg-[var(--sdk-color-surface-panel)]/90 backdrop-blur-xl'
          : 'bg-[var(--sdk-color-surface-panel)]',
        className,
      )}
      data-sdk-pattern="desktop-title-bar"
      style={style}
      {...props}
    >
      {leading ? (
        <div
          className={cn('flex min-w-0 flex-1 items-center gap-3', leadingClassName)}
          data-sdk-slot="leading"
          data-tauri-drag-region
        >
          {leading}
        </div>
      ) : (
        <div className="flex min-w-0 flex-1" data-sdk-slot="leading-spacer" data-tauri-drag-region />
      )}

      {center ? (
        <div
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center px-24 lg:px-32',
            centerContainerClassName,
          )}
          data-sdk-slot="center-shell"
          style={{ maxWidth: centerMaxWidth }}
        >
          <div
            className={cn('w-full', centerInteractive ? 'pointer-events-auto' : null, centerClassName)}
            data-sdk-slot="center"
            data-tauri-drag-region={centerInteractive ? 'false' : true}
          >
            {center}
          </div>
        </div>
      ) : null}

      {hasTrailingRegion ? (
        <div
          className={cn(
            'ml-auto flex h-full shrink-0 items-center justify-end gap-2',
            trailingClassName,
          )}
          data-sdk-slot="trailing"
          data-tauri-drag-region="false"
        >
          {trailing}
          {resolvedWindowControls}
        </div>
      ) : null}
    </header>
  );
}
