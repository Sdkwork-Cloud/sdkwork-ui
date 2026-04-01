import * as React from 'react';
import { cn } from '../../../lib/utils';
import { EmptySearch, InlineAlert, LoadingBlock } from '../../ui/feedback';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';

export type AnchoredPickerSurfaceSize = 'sm' | 'md' | 'lg' | 'xl';

interface AnchoredPickerSurfacePositioningProps {
  align?: React.ComponentPropsWithoutRef<typeof PopoverContent>['align'];
  alignOffset?: React.ComponentPropsWithoutRef<typeof PopoverContent>['alignOffset'];
  avoidCollisions?: React.ComponentPropsWithoutRef<typeof PopoverContent>['avoidCollisions'];
  collisionPadding?: React.ComponentPropsWithoutRef<typeof PopoverContent>['collisionPadding'];
  side?: React.ComponentPropsWithoutRef<typeof PopoverContent>['side'];
  sideOffset?: React.ComponentPropsWithoutRef<typeof PopoverContent>['sideOffset'];
}

export interface AnchoredPickerSurfaceProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Popover>, 'children'>,
    AnchoredPickerSurfacePositioningProps {
  actions?: React.ReactNode;
  badge?: React.ReactNode;
  bodyClassName?: string;
  bodyScrollable?: boolean;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  description?: React.ReactNode;
  empty?: boolean;
  emptyAction?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  emptyKeyword?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  error?: React.ReactNode;
  errorTitle?: React.ReactNode;
  filters?: React.ReactNode;
  filtersClassName?: string;
  footer?: React.ReactNode;
  footerClassName?: string;
  headerClassName?: string;
  loading?: boolean;
  loadingLabel?: React.ReactNode;
  maxHeight?: React.CSSProperties['maxHeight'];
  resultsSummary?: React.ReactNode;
  size?: AnchoredPickerSurfaceSize;
  title?: React.ReactNode;
  trigger: React.ReactElement;
}

const anchoredPickerSurfaceSizeClassNames: Record<AnchoredPickerSurfaceSize, string> = {
  sm: 'w-[min(92vw,20rem)]',
  md: 'w-[min(92vw,28rem)]',
  lg: 'w-[min(92vw,36rem)]',
  xl: 'w-[min(92vw,44rem)]',
};

function AnchoredPickerSurface({
  actions,
  align = 'start',
  alignOffset,
  avoidCollisions,
  badge,
  bodyClassName,
  bodyScrollable = true,
  children,
  className,
  collisionPadding = 12,
  contentClassName,
  defaultOpen = false,
  description,
  empty = false,
  emptyAction,
  emptyDescription,
  emptyKeyword,
  emptyTitle,
  error,
  errorTitle = 'Unable to load options',
  filters,
  filtersClassName,
  footer,
  footerClassName,
  headerClassName,
  loading = false,
  loadingLabel = 'Loading options...',
  maxHeight = 'min(30rem, var(--radix-popover-content-available-height, 30rem))',
  modal,
  onOpenChange,
  open,
  resultsSummary,
  side = 'bottom',
  sideOffset = 8,
  size = 'lg',
  title,
  trigger,
}: AnchoredPickerSurfaceProps) {
  const resolvedContent = loading ? (
    <LoadingBlock label={loadingLabel} />
  ) : error ? (
    <InlineAlert
      description={error}
      title={errorTitle}
      tone="danger"
    />
  ) : empty ? (
    <EmptySearch
      actions={emptyAction}
      description={emptyDescription}
      keyword={emptyKeyword}
      title={emptyTitle}
    />
  ) : (
    children
  );

  const hasHeader =
    title !== undefined ||
    description !== undefined ||
    badge !== undefined ||
    resultsSummary !== undefined ||
    actions !== undefined ||
    filters !== undefined;

  return (
    <Popover
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={onOpenChange}
      open={open}
    >
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        className={cn(
          'overflow-hidden border-[color-mix(in_srgb,var(--sdk-color-border-default)_88%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_98%,white_2%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_90%,transparent)_100%)] p-0 shadow-[var(--sdk-shadow-md)]',
          anchoredPickerSurfaceSizeClassNames[size],
          contentClassName,
        )}
        collisionPadding={collisionPadding}
        side={side}
        sideOffset={sideOffset}
      >
        <div
          className={cn('flex min-h-0 min-w-0 flex-col overflow-hidden', className)}
          data-sdk-pattern="anchored-picker-surface"
          style={{ maxHeight }}
        >
          {hasHeader ? (
            <div
              className={cn(
                'flex shrink-0 flex-col gap-3 border-b border-[color-mix(in_srgb,var(--sdk-color-border-default)_72%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_96%,white_4%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)_100%)] px-4 py-3',
                headerClassName,
              )}
              data-sdk-region="anchored-picker-header"
            >
              {title !== undefined || description !== undefined || badge !== undefined || resultsSummary !== undefined || actions !== undefined ? (
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {title ? (
                        <div className="text-sm font-semibold tracking-tight text-[var(--sdk-color-text-primary)]">
                          {title}
                        </div>
                      ) : null}
                      {badge ? <div className="shrink-0">{badge}</div> : null}
                      {resultsSummary ? (
                        <div className="text-xs font-medium text-[var(--sdk-color-text-secondary)]">
                          {resultsSummary}
                        </div>
                      ) : null}
                    </div>
                    {description ? (
                      <div className="mt-1.5 text-xs leading-5 text-[var(--sdk-color-text-secondary)]">
                        {description}
                      </div>
                    ) : null}
                  </div>
                  {actions ? (
                    <div className="flex shrink-0 items-center gap-2">{actions}</div>
                  ) : null}
                </div>
              ) : null}

              {filters ? (
                <div
                  className={cn(
                    'flex flex-wrap items-center gap-2 rounded-[calc(var(--sdk-radius-panel)-0.125rem)] border border-[color-mix(in_srgb,var(--sdk-color-border-default)_72%,transparent)] bg-[color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)] px-3 py-2.5',
                    filtersClassName,
                  )}
                  data-sdk-region="anchored-picker-filters"
                >
                  {filters}
                </div>
              ) : null}
            </div>
          ) : null}

          <div
            className={cn(
              'min-h-0 min-w-0 flex-1 px-3 py-3',
              bodyScrollable ? 'overflow-y-auto' : 'overflow-hidden',
              bodyClassName,
            )}
            data-sdk-region="anchored-picker-body"
          >
            {resolvedContent}
          </div>

          {footer ? (
            <div
              className={cn(
                'shrink-0 border-t border-[color-mix(in_srgb,var(--sdk-color-border-default)_72%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_94%,white_4%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)_100%)] px-4 py-3',
                footerClassName,
              )}
              data-sdk-region="anchored-picker-footer"
            >
              {footer}
            </div>
          ) : null}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export { AnchoredPickerSurface };
