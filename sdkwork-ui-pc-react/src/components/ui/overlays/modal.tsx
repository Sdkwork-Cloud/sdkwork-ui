import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertTriangle, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../button';

const Modal = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;
const ModalPortal = DialogPrimitive.Portal;
const ModalClose = DialogPrimitive.Close;

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-[var(--sdk-color-surface-overlay)] backdrop-blur-sm', className)}
    {...props}
  />
));

ModalOverlay.displayName = 'ModalOverlay';

const modalContentVariants = cva(
  'fixed left-1/2 z-50 grid max-h-[min(88vh,56rem)] w-[min(92vw,40rem)] -translate-x-1/2 overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)] outline-none',
  {
    defaultVariants: {
      align: 'center',
      size: 'md',
    },
    variants: {
      align: {
        center: 'top-1/2 -translate-y-1/2',
        top: 'top-[max(2rem,8vh)]',
      },
      size: {
        sm: 'w-[min(92vw,28rem)]',
        md: 'w-[min(92vw,40rem)]',
        lg: 'w-[min(92vw,56rem)]',
        xl: 'w-[min(94vw,72rem)]',
        full: 'h-[min(96vh,64rem)] w-[min(96vw,96rem)]',
      },
    },
  },
);

export interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalContentVariants> {
  showCloseButton?: boolean;
}

const ModalContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, ModalContentProps>(
  ({ align, children, className, showCloseButton = true, size, ...props }, ref) => (
    <ModalPortal>
      <ModalOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(modalContentVariants({ align, size }), className)}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1.5 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </ModalPortal>
  ),
);

ModalContent.displayName = 'ModalContent';

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex shrink-0 flex-col gap-1.5 border-b border-[var(--sdk-color-border-default)] px-6 py-5 pr-14',
      className,
    )}
    {...props}
  />
);

const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('min-h-0 flex-1 overflow-y-auto px-6 py-5', className)} {...props} />
);

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex shrink-0 items-center justify-end gap-3 border-t border-[var(--sdk-color-border-default)] px-6 py-4',
      className,
    )}
    {...props}
  />
);

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold', className)} {...props} />
));

ModalTitle.displayName = 'ModalTitle';

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-[var(--sdk-color-text-secondary)]', className)}
    {...props}
  />
));

ModalDescription.displayName = 'ModalDescription';

const confirmIconToneClass = {
  danger:
    'border-[color-mix(in_srgb,var(--sdk-color-state-danger)_24%,transparent)] bg-[color-mix(in_srgb,var(--sdk-color-state-danger)_16%,transparent)] text-[var(--sdk-color-state-danger)]',
  default:
    'border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-secondary)]',
  warning:
    'border-[color-mix(in_srgb,var(--sdk-color-state-warning)_24%,transparent)] bg-[color-mix(in_srgb,var(--sdk-color-state-warning)_16%,transparent)] text-[var(--sdk-color-state-warning)]',
} as const;

export interface ConfirmDialogProps {
  cancelLabel?: React.ReactNode;
  closeOnConfirm?: boolean;
  confirmLabel?: React.ReactNode;
  confirmLoading?: boolean;
  description?: React.ReactNode;
  open?: boolean;
  onConfirm: () => void;
  onOpenChange?: (open: boolean) => void;
  title: React.ReactNode;
  tone?: 'default' | 'danger' | 'warning';
}

export function ConfirmDialog({
  cancelLabel = 'Cancel',
  closeOnConfirm = true,
  confirmLabel = 'Confirm',
  confirmLoading = false,
  description,
  onConfirm,
  onOpenChange,
  open,
  title,
  tone = 'default',
}: ConfirmDialogProps) {
  const confirmVariant = tone === 'danger' ? 'danger' : 'primary';

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent size="sm">
        <ModalHeader>
          <div className="flex items-start gap-3">
            <div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border',
                confirmIconToneClass[tone],
              )}
            >
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <ModalTitle>{title}</ModalTitle>
              {description ? <ModalDescription>{description}</ModalDescription> : null}
            </div>
          </div>
        </ModalHeader>
        <ModalFooter>
          <Button type="button" variant="secondary" onClick={() => onOpenChange?.(false)}>
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={confirmVariant}
            loading={confirmLoading}
            onClick={() => {
              onConfirm();
              if (closeOnConfirm) {
                onOpenChange?.(false);
              }
            }}
          >
            {confirmLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalPortal,
  ModalTitle,
  ModalTrigger,
};
