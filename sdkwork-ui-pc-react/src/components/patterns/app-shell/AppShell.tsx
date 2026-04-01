import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import {
  SDKWORK_DARK_THEME,
  createThemeStyle,
  type SdkworkTheme,
} from '../../../theme/sdkwork-theme';

export interface AppShellProps extends PropsWithChildren {
  className?: string;
  content?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  sidebarWidth?: number | string;
  style?: CSSProperties;
  theme?: SdkworkTheme;
}

export function AppShell({
  className,
  content,
  footer,
  header,
  sidebar,
  sidebarWidth = 280,
  style,
  theme = SDKWORK_DARK_THEME,
}: AppShellProps) {
  return (
    <div
      className={cn(
        'flex min-h-screen w-full flex-col bg-[var(--sdk-color-surface-canvas)] text-[var(--sdk-color-text-primary)]',
        className,
      )}
      data-sdk-color-mode={theme.colorMode}
      data-sdk-shell="app"
      style={{ ...createThemeStyle(theme), ...style }}
    >
      {header ? (
        <header
          className="border-b border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel)]/90 backdrop-blur"
          data-sdk-region="header"
        >
          {header}
        </header>
      ) : null}
      <div className="flex min-h-0 flex-1" data-sdk-region="body">
        {sidebar ? (
          <aside
            className="min-h-0 shrink-0 border-r border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel)]"
            data-sdk-region="sidebar"
            style={{ width: sidebarWidth }}
          >
            {sidebar}
          </aside>
        ) : null}
        <main className="min-h-0 min-w-0 flex-1" data-sdk-region="content">
          {content ?? null}
        </main>
      </div>
      {footer ? (
        <footer
          className="border-t border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel)]/80"
          data-sdk-region="footer"
        >
          {footer}
        </footer>
      ) : null}
    </div>
  );
}
