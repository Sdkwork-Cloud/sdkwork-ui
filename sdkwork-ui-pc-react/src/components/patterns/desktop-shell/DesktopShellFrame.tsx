import * as React from 'react';
import { cn } from '../../../lib/utils';
import { AppShell, type AppShellProps } from '../app-shell/AppShell';
import { NavigationRail } from '../app-shell/NavigationRail';
import {
  DesktopAppHeader,
  type DesktopAppHeaderProps,
} from './DesktopAppHeader';

export interface DesktopShellFrameProps
  extends Omit<AppShellProps, 'className' | 'content' | 'footer' | 'header' | 'sidebar'>,
    Omit<DesktopAppHeaderProps, 'className' | 'content'> {
  className?: string;
  content: React.ReactNode;
  contentClassName?: string;
  headerClassName?: string;
  navigation?: React.ReactNode;
  navigationClassName?: string;
  navigationFooter?: React.ReactNode;
  navigationHeader?: React.ReactNode;
  sidebar?: React.ReactNode;
  statusBar?: React.ReactNode;
}

export function DesktopShellFrame({
  actions,
  badge,
  brand,
  brandClassName,
  brandMark,
  className,
  content,
  contentClassName,
  headerClassName,
  leading,
  navigation,
  navigationClassName,
  navigationFooter,
  navigationHeader,
  sidebar,
  sidebarWidth = 280,
  statusBar,
  style,
  subtitle,
  subtitleClassName,
  theme,
  title,
  titleClassName,
  windowController,
  windowControls,
  ...props
}: DesktopShellFrameProps) {
  const hasHeader =
    brand !== undefined ||
    brandMark !== undefined ||
    title !== undefined ||
    subtitle !== undefined ||
    badge !== undefined ||
    leading !== undefined ||
    props.center !== undefined ||
    actions !== undefined ||
    windowController !== undefined ||
    windowControls !== undefined;

  const resolvedSidebar =
    sidebar ??
    (navigation || navigationHeader || navigationFooter ? (
      <NavigationRail
        className={navigationClassName}
        footer={navigationFooter}
        header={navigationHeader}
      >
        {navigation}
      </NavigationRail>
    ) : undefined);

  return (
    <AppShell
      className={className}
      content={
        <div
          className={cn('h-full min-h-0 min-w-0', contentClassName)}
          data-sdk-region="desktop-shell-content"
        >
          {content}
        </div>
      }
      footer={statusBar}
      header={
        hasHeader ? (
          <DesktopAppHeader
            actions={actions}
            badge={badge}
            brand={brand}
            brandClassName={brandClassName}
            brandMark={brandMark}
            className={headerClassName}
            leading={leading}
            subtitle={subtitle}
            subtitleClassName={subtitleClassName}
            title={title}
            titleClassName={titleClassName}
            windowController={windowController}
            windowControls={windowControls}
            {...props}
          />
        ) : undefined
      }
      sidebar={resolvedSidebar}
      sidebarWidth={sidebarWidth}
      style={style}
      theme={theme}
    />
  );
}
