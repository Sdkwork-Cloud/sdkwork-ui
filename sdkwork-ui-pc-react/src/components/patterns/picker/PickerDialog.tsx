import * as React from 'react';
import { cn } from '../../../lib/utils';
import { EmptySearch, InlineAlert, LoadingBlock } from '../../ui/feedback';
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../ui/overlays';

export type PickerDialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface PickerDialogProps extends React.ComponentPropsWithoutRef<typeof Modal> {
  actions?: React.ReactNode;
  badge?: React.ReactNode;
  bodyClassName?: string;
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
  resultsSummary?: React.ReactNode;
  sidebar?: React.ReactNode;
  sidebarClassName?: string;
  size?: PickerDialogSize;
  title: React.ReactNode;
}

function PickerDialog({
  actions,
  badge,
  bodyClassName,
  children,
  className,
  contentClassName,
  description,
  empty = false,
  emptyAction,
  emptyDescription,
  emptyKeyword,
  emptyTitle,
  error,
  errorTitle = 'Unable to load picker data',
  filters,
  filtersClassName,
  footer,
  footerClassName,
  headerClassName,
  loading = false,
  loadingLabel = 'Loading options...',
  resultsSummary,
  sidebar,
  sidebarClassName,
  size = 'xl',
  title,
  ...props
}: PickerDialogProps) {
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

  return (
    <Modal {...props}>
      <ModalContent
        {...(description ? {} : { 'aria-describedby': undefined })}
        className={cn(
          'gap-0 overflow-hidden border-[color-mix(in_srgb,var(--sdk-color-border-default)_88%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_98%,white_2%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_90%,transparent)_100%)]',
          contentClassName,
        )}
        size={size}
      >
        <div
          className={cn('flex h-full min-h-0 min-w-0 flex-col overflow-hidden', className)}
          data-sdk-pattern="picker-dialog"
        >
          <ModalHeader
            className={cn(
              'gap-3 border-b-[color-mix(in_srgb,var(--sdk-color-border-default)_78%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_96%,white_4%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)_100%)] px-5 py-4 xl:px-6',
              headerClassName,
            )}
          >
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <ModalTitle className="text-[1.35rem] tracking-tight">{title}</ModalTitle>
                  {badge ? <div className="shrink-0">{badge}</div> : null}
                  {resultsSummary ? (
                    <div className="text-sm font-medium text-[var(--sdk-color-text-secondary)]">
                      {resultsSummary}
                    </div>
                  ) : null}
                </div>
                {description ? (
                  <ModalDescription className="mt-2 max-w-4xl text-sm leading-6">
                    {description}
                  </ModalDescription>
                ) : null}
              </div>
              {actions ? <div className="flex shrink-0 items-center gap-2 pr-8">{actions}</div> : null}
            </div>
            {filters ? (
              <div
                className={cn(
                  'flex flex-wrap items-center gap-3 rounded-[var(--sdk-radius-panel)] border border-[color-mix(in_srgb,var(--sdk-color-border-default)_72%,transparent)] bg-[color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)] px-3 py-3',
                  filtersClassName,
                )}
                data-sdk-region="picker-dialog-filters"
              >
                {filters}
              </div>
            ) : null}
          </ModalHeader>

          <div className="flex min-h-0 flex-1 overflow-hidden">
            {sidebar ? (
              <aside
                className={cn(
                  'hidden w-[18rem] shrink-0 border-r border-[color-mix(in_srgb,var(--sdk-color-border-default)_72%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_92%,transparent)_0%,color-mix(in_srgb,var(--sdk-color-surface-canvas)_86%,transparent)_100%)] lg:flex lg:min-h-0 lg:flex-col',
                  sidebarClassName,
                )}
                data-sdk-region="picker-dialog-sidebar"
              >
                <div className="min-h-0 flex-1 overflow-y-auto p-5">{sidebar}</div>
              </aside>
            ) : null}

            <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">
              <div
                className={cn('min-h-full px-5 py-5 xl:px-6', bodyClassName)}
                data-sdk-region="picker-dialog-body"
              >
                {resolvedContent}
              </div>
            </div>
          </div>

          {footer ? (
            <ModalFooter
              className={cn(
                'border-t-[color-mix(in_srgb,var(--sdk-color-border-default)_78%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_94%,white_4%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)_100%)] px-5 py-3.5 xl:px-6',
                footerClassName,
              )}
            >
              {footer}
            </ModalFooter>
          ) : null}
        </div>
      </ModalContent>
    </Modal>
  );
}

export { PickerDialog };
