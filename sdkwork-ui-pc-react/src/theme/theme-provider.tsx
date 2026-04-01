import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';
import {
  SDKWORK_DARK_THEME,
  SDKWORK_LIGHT_THEME,
  createSdkworkTheme,
  createThemeStyle,
  type SdkworkColorMode,
  type SdkworkThemeOverrides,
} from './sdkwork-theme';

export type SdkworkThemeSelection = SdkworkColorMode | 'system';

interface SdkworkThemeContextValue {
  colorMode: SdkworkColorMode;
  setThemeSelection: (next: SdkworkThemeSelection) => void;
  themeSelection: SdkworkThemeSelection;
}

const SdkworkThemeContext = createContext<SdkworkThemeContextValue | null>(null);

export interface SdkworkThemeProviderProps extends PropsWithChildren {
  className?: string;
  defaultTheme?: SdkworkThemeSelection;
  overrides?: SdkworkThemeOverrides;
}

function resolveSystemColorMode(): SdkworkColorMode {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    return 'light';
  }

  return 'dark';
}

export function SdkworkThemeProvider({
  children,
  className,
  defaultTheme = 'system',
  overrides,
}: SdkworkThemeProviderProps) {
  const [themeSelection, setThemeSelection] = useState<SdkworkThemeSelection>(defaultTheme);
  const colorMode = themeSelection === 'system' ? resolveSystemColorMode() : themeSelection;
  const baseTheme = colorMode === 'light' ? SDKWORK_LIGHT_THEME : SDKWORK_DARK_THEME;
  const theme = useMemo(
    () => createSdkworkTheme({ ...baseTheme, ...overrides, colorMode }),
    [baseTheme, colorMode, overrides],
  );

  const value = useMemo(
    () => ({
      colorMode,
      setThemeSelection,
      themeSelection,
    }),
    [colorMode, themeSelection],
  );

  return (
    <SdkworkThemeContext.Provider value={value}>
      <div
        className={className}
        data-sdk-color-mode={colorMode}
        data-sdk-theme-provider=""
        style={createThemeStyle(theme)}
      >
        {children}
      </div>
    </SdkworkThemeContext.Provider>
  );
}

export function useSdkworkTheme() {
  return (
    useContext(SdkworkThemeContext) ?? {
      colorMode: 'dark' as const,
      setThemeSelection: () => undefined,
      themeSelection: 'dark' as const,
    }
  );
}
