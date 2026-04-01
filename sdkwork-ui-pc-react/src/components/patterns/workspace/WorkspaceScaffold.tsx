import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Panel, PanelGroup, PanelResizeHandle } from '../../ui/layout';
import type { PanelProps, PanelGroupProps } from '../../ui/layout/panel-group';
import { InspectorRail, type InspectorRailProps } from './InspectorRail';
import { WorkspacePanel, type WorkspacePanelProps } from './WorkspacePanel';

type WorkspaceScaffoldDirection = NonNullable<PanelGroupProps['direction']>;

interface WorkspaceScaffoldPaneSizing {
  collapsedSize?: PanelProps['collapsedSize'];
  collapsible?: PanelProps['collapsible'];
  defaultSize?: PanelProps['defaultSize'];
  maxSize?: PanelProps['maxSize'];
  minSize?: PanelProps['minSize'];
  panelClassName?: string;
}

export interface WorkspaceScaffoldSidebarProps
  extends WorkspaceScaffoldPaneSizing,
    Omit<WorkspacePanelProps, 'className'> {
  className?: string;
}

export interface WorkspaceScaffoldMainProps
  extends WorkspaceScaffoldPaneSizing,
    Omit<WorkspacePanelProps, 'className'> {
  className?: string;
}

export interface WorkspaceScaffoldBottomProps
  extends WorkspaceScaffoldPaneSizing,
    Omit<WorkspacePanelProps, 'className'> {
  className?: string;
}

export interface WorkspaceScaffoldInspectorProps
  extends WorkspaceScaffoldPaneSizing,
    Omit<InspectorRailProps, 'className'> {
  className?: string;
}

export interface WorkspaceScaffoldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'content' | 'title'> {
  banner?: React.ReactNode;
  bottomPanel?: WorkspaceScaffoldBottomProps;
  header?: React.ReactNode;
  inspector?: WorkspaceScaffoldInspectorProps;
  main: WorkspaceScaffoldMainProps;
  mainPanelGroupClassName?: string;
  panelGroupClassName?: string;
  resizeHandleMode?: 'line' | 'grip';
  sidebar?: WorkspaceScaffoldSidebarProps;
  statusBar?: React.ReactNode;
  toolbar?: React.ReactNode;
  workspaceDirection?: WorkspaceScaffoldDirection;
}

function renderWorkspacePane(
  region: 'sidebar' | 'main' | 'bottom',
  {
    actions,
    bodyClassName,
    children,
    className,
    collapsedSize,
    collapsible,
    defaultSize,
    description,
    headerClassName,
    maxSize,
    minSize,
    panelClassName,
    title,
    ...panelProps
  }: WorkspaceScaffoldSidebarProps | WorkspaceScaffoldMainProps | WorkspaceScaffoldBottomProps,
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
          bodyClassName={bodyClassName}
          className={cn('h-full', className)}
          description={description}
          headerClassName={headerClassName}
          title={title}
          {...panelProps}
        >
          {children}
        </WorkspacePanel>
      </div>
    </Panel>
  );
}

function renderInspectorPane(
  {
    actions,
    bodyClassName,
    children,
    className,
    collapsedSize,
    collapsible,
    defaultSize,
    description,
    eyebrow,
    footer,
    footerClassName,
    headerClassName,
    maxSize,
    meta,
    minSize,
    panelClassName,
    side,
    stickyHeader,
    summary,
    title,
    variant,
  }: WorkspaceScaffoldInspectorProps,
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
      <div className="h-full" data-sdk-region="inspector">
        <InspectorRail
          actions={actions}
          bodyClassName={bodyClassName}
          className={cn('h-full', className)}
          description={description}
          eyebrow={eyebrow}
          footer={footer}
          footerClassName={footerClassName}
          headerClassName={headerClassName}
          meta={meta}
          side={side}
          stickyHeader={stickyHeader}
          summary={summary}
          title={title}
          variant={variant}
        >
          {children}
        </InspectorRail>
      </div>
    </Panel>
  );
}

export function WorkspaceScaffold({
  banner,
  bottomPanel,
  className,
  header,
  inspector,
  main,
  mainPanelGroupClassName,
  panelGroupClassName,
  resizeHandleMode = 'grip',
  sidebar,
  statusBar,
  toolbar,
  workspaceDirection = 'horizontal',
  ...props
}: WorkspaceScaffoldProps) {
  const withHandle = resizeHandleMode === 'grip';
  const hasSidebar = Boolean(sidebar);
  const hasInspector = Boolean(inspector);
  const hasBottomPanel = Boolean(bottomPanel);

  const mainSplit = (
    <PanelGroup
      className={cn('h-full', mainPanelGroupClassName)}
      direction={workspaceDirection}
    >
      {hasSidebar
        ? renderWorkspacePane('sidebar', sidebar!, {
            defaultSize: 22,
            minSize: 16,
          })
        : null}
      {hasSidebar ? <PanelResizeHandle withHandle={withHandle} /> : null}
      {renderWorkspacePane('main', main, {
        defaultSize: hasSidebar && hasInspector ? 56 : hasSidebar || hasInspector ? 72 : 100,
        minSize: 32,
      })}
      {hasInspector ? <PanelResizeHandle withHandle={withHandle} /> : null}
      {hasInspector
        ? renderInspectorPane(inspector!, {
            defaultSize: 22,
            minSize: 18,
          })
        : null}
    </PanelGroup>
  );

  return (
    <div
      className={cn('flex h-full min-h-0 min-w-0 flex-col gap-4', className)}
      data-sdk-pattern="workspace-scaffold"
      {...props}
    >
      {header ? <div data-sdk-region="workspace-header">{header}</div> : null}
      {banner ? <div data-sdk-region="workspace-banner">{banner}</div> : null}
      {toolbar ? <div data-sdk-region="workspace-toolbar">{toolbar}</div> : null}
      <div className="min-h-0 min-w-0 flex-1">
        {hasBottomPanel ? (
          <PanelGroup
            className={cn('h-full', panelGroupClassName)}
            direction="vertical"
          >
            <Panel defaultSize={72} minSize={34}>
              <div className="h-full" data-sdk-region="workspace-main-split">
                {mainSplit}
              </div>
            </Panel>
            <PanelResizeHandle withHandle={withHandle} />
            {renderWorkspacePane('bottom', bottomPanel!, {
              defaultSize: 28,
              minSize: 18,
            })}
          </PanelGroup>
        ) : (
          <div className={cn('h-full', panelGroupClassName)} data-sdk-region="workspace-main-split">
            {mainSplit}
          </div>
        )}
      </div>
      {statusBar ? <div data-sdk-region="workspace-status-bar">{statusBar}</div> : null}
    </div>
  );
}
