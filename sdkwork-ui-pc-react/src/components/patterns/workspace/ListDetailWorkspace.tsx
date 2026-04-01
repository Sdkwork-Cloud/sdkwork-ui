import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Panel, PanelGroup, PanelResizeHandle } from '../../ui/layout';
import type { PanelProps, PanelGroupProps } from '../../ui/layout/panel-group';
import { InspectorRail, type InspectorRailProps } from './InspectorRail';
import { WorkspacePanel, type WorkspacePanelProps } from './WorkspacePanel';

type ListDetailWorkspaceDirection = NonNullable<PanelGroupProps['direction']>;

interface ListDetailWorkspacePaneSizing {
  collapsedSize?: PanelProps['collapsedSize'];
  collapsible?: PanelProps['collapsible'];
  defaultSize?: PanelProps['defaultSize'];
  maxSize?: PanelProps['maxSize'];
  minSize?: PanelProps['minSize'];
  panelClassName?: string;
}

export interface ListDetailWorkspaceSidebarProps
  extends ListDetailWorkspacePaneSizing,
    Omit<WorkspacePanelProps, 'className'> {
  className?: string;
}

export interface ListDetailWorkspaceContentProps
  extends ListDetailWorkspacePaneSizing,
    Omit<WorkspacePanelProps, 'className'> {
  className?: string;
}

export interface ListDetailWorkspaceDetailProps
  extends ListDetailWorkspacePaneSizing,
    Omit<InspectorRailProps, 'className'> {
  className?: string;
}

export interface ListDetailWorkspaceProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'content'> {
  content: ListDetailWorkspaceContentProps;
  detail?: ListDetailWorkspaceDetailProps;
  direction?: ListDetailWorkspaceDirection;
  panelGroupClassName?: string;
  resizeHandleMode?: 'line' | 'grip';
  sidebar?: ListDetailWorkspaceSidebarProps;
}

function renderWorkspacePane(
  region: 'sidebar' | 'content',
  {
    actions,
    children,
    className,
    collapsedSize,
    collapsible,
    defaultSize,
    description,
    maxSize,
    minSize,
    panelClassName,
    title,
    ...panelProps
  }: ListDetailWorkspaceSidebarProps | ListDetailWorkspaceContentProps,
  defaults: Pick<PanelProps, 'defaultSize' | 'minSize'>,
) {
  return (
    <Panel
      collapsedSize={collapsedSize}
      className={panelClassName}
      collapsible={collapsible}
      defaultSize={defaultSize ?? defaults.defaultSize}
      maxSize={maxSize}
      minSize={minSize ?? defaults.minSize}
    >
      <div className="h-full" data-sdk-region={region}>
        <WorkspacePanel
          actions={actions}
          className={cn('h-full', className)}
          description={description}
          title={title}
          {...panelProps}
        >
          {children}
        </WorkspacePanel>
      </div>
    </Panel>
  );
}

function renderDetailPane({
  children,
  className,
  collapsedSize,
  collapsible,
  defaultSize,
  footer,
  headerClassName,
  meta,
  side,
  stickyHeader,
  summary,
  maxSize,
  minSize,
  panelClassName,
  title,
  variant,
  ...panelProps
}: ListDetailWorkspaceDetailProps, defaults: Pick<PanelProps, 'defaultSize' | 'minSize'>) {
  return (
    <Panel
      collapsedSize={collapsedSize}
      className={panelClassName}
      collapsible={collapsible}
      defaultSize={defaultSize ?? defaults.defaultSize}
      maxSize={maxSize}
      minSize={minSize ?? defaults.minSize}
    >
      <div className="h-full" data-sdk-region="detail">
        <InspectorRail
          className={cn('h-full', className)}
          footer={footer}
          headerClassName={headerClassName}
          meta={meta}
          side={side}
          stickyHeader={stickyHeader}
          summary={summary}
          title={title}
          variant={variant}
          {...panelProps}
        >
          {children}
        </InspectorRail>
      </div>
    </Panel>
  );
}

export function ListDetailWorkspace({
  className,
  content,
  detail,
  direction = 'horizontal',
  panelGroupClassName,
  resizeHandleMode = 'grip',
  sidebar,
  ...props
}: ListDetailWorkspaceProps) {
  const withHandle = resizeHandleMode === 'grip';
  const hasSidebar = Boolean(sidebar);
  const hasDetail = Boolean(detail);

  return (
    <div
      className={cn('h-full min-h-0 min-w-0', className)}
      data-sdk-pattern="list-detail-workspace"
      {...props}
    >
      <PanelGroup
        className={cn('h-full', panelGroupClassName)}
        direction={direction}
      >
        {hasSidebar
          ? renderWorkspacePane('sidebar', sidebar!, {
              defaultSize: 24,
              minSize: 18,
            })
          : null}
        {hasSidebar ? <PanelResizeHandle withHandle={withHandle} /> : null}
        {renderWorkspacePane('content', content, {
          defaultSize: hasSidebar && hasDetail ? 52 : hasSidebar || hasDetail ? 72 : 100,
          minSize: 28,
        })}
        {hasDetail ? <PanelResizeHandle withHandle={withHandle} /> : null}
        {hasDetail
          ? renderDetailPane(detail!, {
              defaultSize: 24,
              minSize: 18,
            })
          : null}
      </PanelGroup>
    </div>
  );
}
