import { createElement, type ComponentProps, type ReactElement, type ReactNode } from 'react';
import { Toaster as SonnerToaster, toast as sonnerToast, type ExternalToast } from 'sonner';
import { useSdkworkTheme } from '../../../theme';

type SonnerToasterProps = ComponentProps<typeof SonnerToaster>;
type SonnerToastOptions = NonNullable<SonnerToasterProps['toastOptions']>;
type SonnerToastClassNames = NonNullable<SonnerToastOptions['classNames']>;

export type SdkworkToastResult<ToastData = unknown> =
  | number
  | string
  | {
      unwrap: () => Promise<ToastData>;
    };

export type SdkworkToastPromise<ToastData = unknown> =
  | Promise<ToastData>
  | (() => Promise<ToastData>);

export type SdkworkToastPromiseRenderer<ToastData = unknown> =
  | ReactNode
  | ((data: ToastData) => ReactNode | Promise<ReactNode>);

export interface SdkworkToastPromiseOptions<ToastData = unknown>
  extends Omit<ExternalToast, 'description'> {
  description?: SdkworkToastPromiseRenderer<ToastData>;
  error?: ReactNode | ((error: unknown) => ReactNode | Promise<ReactNode>);
  finally?: () => void | Promise<void>;
  loading?: ReactNode;
  success?: SdkworkToastPromiseRenderer<ToastData>;
}

export interface SdkworkToastApi {
  (message: ReactNode, data?: ExternalToast): string | number;
  custom: (jsx: (id: number | string) => ReactElement, data?: ExternalToast) => string | number;
  dismiss: (id?: number | string) => string | number;
  error: (message: ReactNode, data?: ExternalToast) => string | number;
  info: (message: ReactNode, data?: ExternalToast) => string | number;
  loading: (message: ReactNode, data?: ExternalToast) => string | number;
  message: (message: ReactNode, data?: ExternalToast) => string | number;
  promise: <ToastData = unknown>(
    promise: SdkworkToastPromise<ToastData>,
    data?: SdkworkToastPromiseOptions<ToastData>,
  ) => SdkworkToastResult<ToastData>;
  success: (message: ReactNode, data?: ExternalToast) => string | number;
  warning: (message: ReactNode, data?: ExternalToast) => string | number;
}

const sdkworkToastClassNames: Partial<SonnerToastClassNames> = {
  actionButton:
    'rounded-[calc(var(--sdk-radius-control)-0.125rem)] bg-[var(--sdk-color-brand-primary)] px-3 py-1 text-xs font-medium text-[var(--sdk-color-text-inverse)] transition-colors hover:bg-[var(--sdk-color-brand-primary-hover)]',
  cancelButton:
    'rounded-[calc(var(--sdk-radius-control)-0.125rem)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] px-3 py-1 text-xs font-medium text-[var(--sdk-color-text-secondary)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]',
  closeButton:
    'rounded-full border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]',
  description: 'text-sm leading-6 text-[var(--sdk-color-text-secondary)]',
  loader: 'text-[var(--sdk-color-brand-primary)]',
  success: 'border-[color-mix(in_srgb,var(--sdk-color-state-success)_32%,transparent)]',
  error: 'border-[color-mix(in_srgb,var(--sdk-color-state-danger)_32%,transparent)]',
  info: 'border-[color-mix(in_srgb,var(--sdk-color-state-info)_32%,transparent)]',
  title: 'text-sm font-semibold text-[var(--sdk-color-text-primary)]',
  toast:
    'group rounded-[calc(var(--sdk-radius-panel)-0.5rem)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-md)]',
  warning: 'border-[color-mix(in_srgb,var(--sdk-color-state-warning)_32%,transparent)]',
};

function mergeToastOptions(
  toastOptions?: SonnerToasterProps['toastOptions'],
): SonnerToasterProps['toastOptions'] {
  return {
    classNames: {
      ...sdkworkToastClassNames,
      ...(toastOptions?.classNames ?? {}),
    },
    ...toastOptions,
  };
}

export interface ToasterProps extends SonnerToasterProps {}

export function Toaster({
  closeButton = true,
  expand = true,
  position = 'bottom-right',
  richColors = true,
  theme,
  toastOptions,
  ...props
}: ToasterProps) {
  const { colorMode } = useSdkworkTheme();

  return createElement(SonnerToaster, {
    closeButton,
    expand,
    position,
    richColors,
    theme: theme ?? colorMode,
    toastOptions: mergeToastOptions(toastOptions),
    ...props,
  });
}

export const SdkworkToaster = Toaster;

const sdkworkToastApi = Object.assign(
  (message: ReactNode, data?: ExternalToast) => sonnerToast(message, data),
  {
    custom: (jsx: (id: number | string) => ReactElement, data?: ExternalToast) =>
      sonnerToast.custom(jsx, data),
    dismiss: (id?: number | string) => sonnerToast.dismiss(id),
    error: (message: ReactNode, data?: ExternalToast) => sonnerToast.error(message, data),
    info: (message: ReactNode, data?: ExternalToast) => sonnerToast.info(message, data),
    loading: (message: ReactNode, data?: ExternalToast) => sonnerToast.loading(message, data),
    message: (message: ReactNode, data?: ExternalToast) => sonnerToast.message(message, data),
    promise: <ToastData = unknown>(
      promise: SdkworkToastPromise<ToastData>,
      data?: SdkworkToastPromiseOptions<ToastData>,
    ) => sonnerToast.promise(promise, data) as SdkworkToastResult<ToastData>,
    success: (message: ReactNode, data?: ExternalToast) => sonnerToast.success(message, data),
    warning: (message: ReactNode, data?: ExternalToast) => sonnerToast.warning(message, data),
  },
) as SdkworkToastApi;

export const toast: SdkworkToastApi = sdkworkToastApi;
export const sdkToast: SdkworkToastApi = toast;
