import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-label',
  '@radix-ui/react-popover',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slider',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-tooltip',
  'class-variance-authority',
  'clsx',
  'cmdk',
  'lucide-react',
  'react-resizable-panels',
  'react-hook-form',
  'sonner',
  'tailwind-merge',
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      outDir: 'dist',
      entryRoot: 'src',
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        theme: resolve(__dirname, 'src/theme/index.ts'),
        'components-ui': resolve(__dirname, 'src/components/ui/index.ts'),
        'ui-actions': resolve(__dirname, 'src/components/ui/actions/index.ts'),
        'ui-data-display': resolve(__dirname, 'src/components/ui/data-display/index.ts'),
        'ui-data-entry': resolve(__dirname, 'src/components/ui/data-entry/index.ts'),
        'ui-form': resolve(__dirname, 'src/components/ui/form/index.ts'),
        'ui-feedback': resolve(__dirname, 'src/components/ui/feedback/index.ts'),
        'ui-layout': resolve(__dirname, 'src/components/ui/layout/index.ts'),
        'ui-navigation': resolve(__dirname, 'src/components/ui/navigation/index.ts'),
        'ui-overlays': resolve(__dirname, 'src/components/ui/overlays/index.ts'),
        'ui-catalog': resolve(__dirname, 'src/components/ui/catalog.ts'),
        'components-patterns': resolve(__dirname, 'src/components/patterns/index.ts'),
        'patterns-app-shell': resolve(__dirname, 'src/components/patterns/app-shell/index.ts'),
        'patterns-command': resolve(__dirname, 'src/components/patterns/command/index.ts'),
        'patterns-desktop-shell': resolve(__dirname, 'src/components/patterns/desktop-shell/index.ts'),
        'patterns-detail': resolve(__dirname, 'src/components/patterns/detail/index.ts'),
        'patterns-picker': resolve(__dirname, 'src/components/patterns/picker/index.ts'),
        'patterns-settings': resolve(__dirname, 'src/components/patterns/settings/index.ts'),
        'patterns-system': resolve(__dirname, 'src/components/patterns/system/index.ts'),
        'patterns-workbench': resolve(__dirname, 'src/components/patterns/workbench/index.ts'),
        'patterns-workspace': resolve(__dirname, 'src/components/patterns/workspace/index.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: 'sdkwork-ui',
    },
    rollupOptions: {
      external,
    },
  },
});
