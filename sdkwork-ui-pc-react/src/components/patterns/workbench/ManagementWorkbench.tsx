import * as React from 'react';
import { cn } from '../../../lib/utils';
import { PageHeader } from '../app-shell/PageHeader';
import { InspectorRail, type InspectorRailProps } from '../workspace/InspectorRail';
import { WorkspacePanel, type WorkspacePanelProps } from '../workspace/WorkspacePanel';

export interface ManagementWorkbenchMainProps
  extends Omit<WorkspacePanelProps, 'className'> {
  className?: string;
}

export interface ManagementWorkbenchDetailProps
  extends Omit<InspectorRailProps, 'className'> {
  className?: string;
}

export interface ManagementWorkbenchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'title'> {
  actions?: React.ReactNode;
  description?: React.ReactNode;
  detail?: ManagementWorkbenchDetailProps;
  detailWidth?: number | string;
  eyebrow?: React.ReactNode;
  filters?: React.ReactNode;
  footer?: React.ReactNode;
  main: ManagementWorkbenchMainProps;
  selectionBar?: React.ReactNode;
  title: React.ReactNode;
}

function resolveWorkbenchDetailWidth(detailWidth: number | string) {
  return typeof detailWidth === 'number' ? `${detailWidth}px` : detailWidth;
}

export function ManagementWorkbench({
  actions,
  className,
  description,
  detail,
  detailWidth = 320,
  eyebrow,
  filters,
  footer,
  main,
  selectionBar,
  title,
  ...props
}: ManagementWorkbenchProps) {
  const {
    actions: mainActions,
    children,
    className: mainClassName,
    description: mainDescription,
    title: mainTitle,
  } = main;
  const detailGridStyle = detail
    ? { gridTemplateColumns: `minmax(0, 1fr) ${resolveWorkbenchDetailWidth(detailWidth)}` }
    : undefined;

  return (
    <div
      className={cn('flex h-full min-h-0 min-w-0 flex-col gap-4', className)}
      data-sdk-pattern="management-workbench"
      {...props}
    >
      <PageHeader
        actions={actions}
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
      {filters ? (
        <div data-sdk-region="management-workbench-filters">{filters}</div>
      ) : null}
      {selectionBar ? (
        <div data-sdk-region="management-workbench-selection-bar">{selectionBar}</div>
      ) : null}
      <div
        className={cn('min-h-0 min-w-0', detail ? 'grid gap-4 xl:grid' : null)}
        style={detailGridStyle}
      >
        <WorkspacePanel
          actions={mainActions}
          className={cn('h-full', mainClassName)}
          description={mainDescription}
          title={mainTitle}
        >
          {children}
        </WorkspacePanel>
        {detail ? (
          <InspectorRail
            actions={detail.actions}
            bodyClassName={detail.bodyClassName}
            className={cn('h-full', detail.className)}
            description={detail.description}
            eyebrow={detail.eyebrow}
            footer={detail.footer}
            footerClassName={detail.footerClassName}
            headerClassName={detail.headerClassName}
            meta={detail.meta}
            side={detail.side}
            stickyHeader={detail.stickyHeader}
            summary={detail.summary}
            title={detail.title}
            variant={detail.variant}
          >
            {detail.children}
          </InspectorRail>
        ) : null}
      </div>
      {footer ? <div data-sdk-region="management-workbench-footer">{footer}</div> : null}
    </div>
  );
}
