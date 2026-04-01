import * as React from 'react';
import { cn } from '../../../lib/utils';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '../../ui/overlays';

export type OperationDrawerSide = 'left' | 'right';
export type OperationDrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface OperationDrawerProps extends React.ComponentPropsWithoutRef<typeof Drawer> {
  actions?: React.ReactNode;
  badge?: React.ReactNode;
  bodyClassName?: string;
  className?: string;
  contentClassName?: string;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  footerClassName?: string;
  headerClassName?: string;
  side?: OperationDrawerSide;
  sidebar?: React.ReactNode;
  sidebarClassName?: string;
  size?: OperationDrawerSize;
  title: React.ReactNode;
}

function OperationDrawer({
  actions,
  badge,
  bodyClassName,
  children,
  className,
  contentClassName,
  description,
  eyebrow,
  footer,
  footerClassName,
  headerClassName,
  side = 'right',
  sidebar,
  sidebarClassName,
  size = 'xl',
  title,
  ...props
}: OperationDrawerProps) {
  return (
    <Drawer {...props}>
      <DrawerContent
        {...(description ? {} : { 'aria-describedby': undefined })}
        className={cn(
          'gap-0 overflow-hidden border-[color-mix(in_srgb,var(--sdk-color-border-default)_88%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_98%,white_2%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_90%,transparent)_100%)]',
          contentClassName,
        )}
        side={side}
        size={size}
      >
        <div
          className={cn('relative flex h-full min-h-0 min-w-0 flex-col overflow-hidden', className)}
          data-sdk-pattern="operation-drawer"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--sdk-color-brand-primary)_18%,transparent),transparent_62%)]" />
          <DrawerHeader
            className={cn(
              'relative border-b-[color-mix(in_srgb,var(--sdk-color-border-default)_78%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_96%,white_4%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)_100%)] px-5 py-4 xl:px-6',
              headerClassName,
            )}
          >
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                {eyebrow ? (
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--sdk-color-text-muted)]">
                    {eyebrow}
                  </div>
                ) : null}
                <div className={cn('flex flex-wrap items-center gap-3', eyebrow ? 'mt-2' : null)}>
                  <DrawerTitle className="text-[1.45rem] tracking-tight">{title}</DrawerTitle>
                  {badge ? <div className="shrink-0">{badge}</div> : null}
                </div>
                {description ? (
                  <DrawerDescription className="mt-2 max-w-4xl text-sm leading-6">
                    {description}
                  </DrawerDescription>
                ) : null}
              </div>
              {actions ? <div className="flex shrink-0 items-center gap-2 pr-8">{actions}</div> : null}
            </div>
          </DrawerHeader>
          <div className="relative flex min-h-0 flex-1 overflow-hidden">
            <DrawerBody
              className={cn(
                'min-h-0 flex-1 px-4 py-4 xl:px-5',
                sidebar ? 'xl:border-r xl:border-[color-mix(in_srgb,var(--sdk-color-border-default)_72%,transparent)]' : null,
                bodyClassName,
              )}
              data-sdk-region="operation-drawer-body"
            >
              {children}
            </DrawerBody>
            {sidebar ? (
              <aside
                className={cn(
                  'hidden w-[320px] shrink-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_92%,transparent)_0%,color-mix(in_srgb,var(--sdk-color-surface-canvas)_86%,transparent)_100%)] xl:flex xl:min-h-0 xl:flex-col',
                  sidebarClassName,
                )}
                data-sdk-region="operation-drawer-sidebar"
              >
                <div className="min-h-0 flex-1 overflow-y-auto p-5">{sidebar}</div>
              </aside>
            ) : null}
          </div>
          {footer ? (
            <DrawerFooter
              className={cn(
                'border-t-[color-mix(in_srgb,var(--sdk-color-border-default)_78%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sdk-color-surface-panel)_94%,white_4%)_0%,color-mix(in_srgb,var(--sdk-color-surface-panel-muted)_88%,transparent)_100%)] px-5 py-3.5 xl:px-6',
                footerClassName,
              )}
            >
              {footer}
            </DrawerFooter>
          ) : null}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export { OperationDrawer };
