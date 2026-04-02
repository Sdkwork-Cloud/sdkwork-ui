import type { CSSProperties } from 'react';

export type SdkworkColorMode = 'light' | 'dark';
export type SdkworkThemePreset = 'claw';

export interface SdkworkTheme {
  colorMode: SdkworkColorMode;
  brand: {
    primary: string;
    primaryHover: string;
    primarySoft: string;
    accent: string;
  };
  surface: {
    canvas: string;
    panel: string;
    panelMuted: string;
    elevated: string;
    overlay: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
  };
  border: {
    subtle: string;
    default: string;
    strong: string;
    focus: string;
  };
  state: {
    success: string;
    warning: string;
    danger: string;
    info: string;
  };
  radius: {
    control: string;
    field: string;
    panel: string;
    pill: string;
  };
  shadow: {
    soft: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export interface SdkworkThemeOverrides {
  brand?: Partial<SdkworkTheme['brand']>;
  surface?: Partial<SdkworkTheme['surface']>;
  text?: Partial<SdkworkTheme['text']>;
  border?: Partial<SdkworkTheme['border']>;
  state?: Partial<SdkworkTheme['state']>;
  radius?: Partial<SdkworkTheme['radius']>;
  shadow?: Partial<SdkworkTheme['shadow']>;
}

export interface CreateSdkworkThemeOptions extends SdkworkThemeOverrides {
  colorMode?: SdkworkColorMode;
  preset?: SdkworkThemePreset;
}

export const CLAW_DARK_THEME: SdkworkTheme = {
  colorMode: 'dark',
  brand: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    primarySoft: 'rgba(59, 130, 246, 0.14)',
    accent: '#22d3ee',
  },
  surface: {
    canvas: '#09090b',
    panel: '#18181b',
    panelMuted: '#27272a',
    elevated: '#3f3f46',
    overlay: 'rgba(9, 9, 11, 0.45)',
  },
  text: {
    primary: '#fafafa',
    secondary: '#d4d4d8',
    muted: '#a1a1aa',
    inverse: '#ffffff',
  },
  border: {
    subtle: 'rgba(244, 244, 245, 0.08)',
    default: 'rgba(244, 244, 245, 0.12)',
    strong: 'rgba(244, 244, 245, 0.18)',
    focus: 'rgba(59, 130, 246, 0.4)',
  },
  state: {
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#38bdf8',
  },
  radius: {
    control: '0.5rem',
    field: '0.375rem',
    panel: '1rem',
    pill: '999px',
  },
  shadow: {
    soft: '0 4px 16px rgba(9, 9, 11, 0.1)',
    sm: '0 8px 24px rgba(9, 9, 11, 0.12)',
    md: '0 18px 50px rgba(9, 9, 11, 0.16)',
    lg: '0 32px 80px rgba(9, 9, 11, 0.22)',
  },
};

export const CLAW_LIGHT_THEME: SdkworkTheme = {
  colorMode: 'light',
  brand: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    primarySoft: 'rgba(37, 99, 235, 0.1)',
    accent: '#0891b2',
  },
  surface: {
    canvas: '#f5f5f5',
    panel: '#ffffff',
    panelMuted: '#fafafa',
    elevated: '#f4f4f5',
    overlay: 'rgba(9, 9, 11, 0.18)',
  },
  text: {
    primary: '#18181b',
    secondary: '#3f3f46',
    muted: '#71717a',
    inverse: '#ffffff',
  },
  border: {
    subtle: 'rgba(24, 24, 27, 0.05)',
    default: 'rgba(24, 24, 27, 0.1)',
    strong: 'rgba(24, 24, 27, 0.16)',
    focus: 'rgba(37, 99, 235, 0.45)',
  },
  state: {
    success: '#16a34a',
    warning: '#d97706',
    danger: '#dc2626',
    info: '#0284c7',
  },
  radius: {
    control: '0.5rem',
    field: '0.375rem',
    panel: '1rem',
    pill: '999px',
  },
  shadow: {
    soft: '0 4px 16px rgba(24, 24, 27, 0.08)',
    sm: '0 8px 24px rgba(24, 24, 27, 0.06)',
    md: '0 18px 50px rgba(24, 24, 27, 0.1)',
    lg: '0 28px 80px rgba(24, 24, 27, 0.14)',
  },
};

export const SDKWORK_DARK_THEME = CLAW_DARK_THEME;
export const SDKWORK_LIGHT_THEME = CLAW_LIGHT_THEME;

function getPresetTheme(
  preset: SdkworkThemePreset,
  colorMode: SdkworkColorMode,
): SdkworkTheme {
  if (preset === 'claw') {
    return colorMode === 'light' ? CLAW_LIGHT_THEME : CLAW_DARK_THEME;
  }

  return colorMode === 'light' ? SDKWORK_LIGHT_THEME : SDKWORK_DARK_THEME;
}

function mergeTheme(base: SdkworkTheme, overrides?: SdkworkThemeOverrides): SdkworkTheme {
  if (!overrides) {
    return base;
  }

  return {
    ...base,
    ...overrides,
    brand: {
      ...base.brand,
      ...overrides.brand,
    },
    surface: {
      ...base.surface,
      ...overrides.surface,
    },
    text: {
      ...base.text,
      ...overrides.text,
    },
    border: {
      ...base.border,
      ...overrides.border,
    },
    state: {
      ...base.state,
      ...overrides.state,
    },
    radius: {
      ...base.radius,
      ...overrides.radius,
    },
    shadow: {
      ...base.shadow,
      ...overrides.shadow,
    },
  };
}

export function createSdkworkTheme(
  options: CreateSdkworkThemeOptions = {},
) {
  const {
    colorMode = 'dark',
    preset = 'claw',
    ...overrides
  } = options;
  const base = getPresetTheme(preset, colorMode);

  return mergeTheme(base, overrides);
}

export function createThemeCssVariables(theme: SdkworkTheme) {
  return {
    '--sdk-color-brand-primary': theme.brand.primary,
    '--sdk-color-brand-primary-hover': theme.brand.primaryHover,
    '--sdk-color-brand-primary-soft': theme.brand.primarySoft,
    '--sdk-color-brand-accent': theme.brand.accent,
    '--sdk-color-surface-canvas': theme.surface.canvas,
    '--sdk-color-surface-panel': theme.surface.panel,
    '--sdk-color-surface-panel-muted': theme.surface.panelMuted,
    '--sdk-color-surface-elevated': theme.surface.elevated,
    '--sdk-color-surface-overlay': theme.surface.overlay,
    '--sdk-color-text-primary': theme.text.primary,
    '--sdk-color-text-secondary': theme.text.secondary,
    '--sdk-color-text-muted': theme.text.muted,
    '--sdk-color-text-inverse': theme.text.inverse,
    '--sdk-color-border-subtle': theme.border.subtle,
    '--sdk-color-border-default': theme.border.default,
    '--sdk-color-border-strong': theme.border.strong,
    '--sdk-color-border-focus': theme.border.focus,
    '--sdk-color-state-success': theme.state.success,
    '--sdk-color-state-warning': theme.state.warning,
    '--sdk-color-state-danger': theme.state.danger,
    '--sdk-color-state-info': theme.state.info,
    '--sdk-radius-control': theme.radius.control,
    '--sdk-radius-field': theme.radius.field,
    '--sdk-radius-panel': theme.radius.panel,
    '--sdk-radius-pill': theme.radius.pill,
    '--sdk-shadow-soft': theme.shadow.soft,
    '--sdk-shadow-sm': theme.shadow.sm,
    '--sdk-shadow-md': theme.shadow.md,
    '--sdk-shadow-lg': theme.shadow.lg,
  } as const;
}

export function createThemeStyle(theme: SdkworkTheme): CSSProperties {
  return createThemeCssVariables(theme) as CSSProperties;
}
