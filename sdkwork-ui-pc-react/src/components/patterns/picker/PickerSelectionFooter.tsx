import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Button, type ButtonProps } from '../../ui/button';

export interface PickerSelectionFooterProps {
  cancelLabel?: React.ReactNode;
  className?: string;
  clearLabel?: React.ReactNode;
  confirmDisabled?: boolean;
  confirmLabel?: React.ReactNode;
  confirmLoading?: boolean;
  confirmVariant?: ButtonProps['variant'];
  onCancel?: () => void;
  onClear?: () => void;
  onConfirm?: () => void;
  showClear?: boolean;
  summary?: React.ReactNode;
}

function PickerSelectionFooter({
  cancelLabel = 'Cancel',
  className,
  clearLabel = 'Clear selection',
  confirmDisabled = false,
  confirmLabel = 'Confirm selection',
  confirmLoading = false,
  confirmVariant = 'primary',
  onCancel,
  onClear,
  onConfirm,
  showClear = false,
  summary = null,
}: PickerSelectionFooterProps) {
  return (
    <div
      className={cn('flex w-full flex-wrap items-center justify-between gap-3', className)}
      data-sdk-pattern="picker-selection-footer"
    >
      <div className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-[var(--sdk-color-text-secondary)]">
        <div className="font-medium text-[var(--sdk-color-text-primary)]">{summary}</div>
        {showClear ? (
          <Button
            onClick={onClear}
            size="sm"
            type="button"
            variant="ghost"
          >
            {clearLabel}
          </Button>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={onCancel}
          type="button"
          variant="secondary"
        >
          {cancelLabel}
        </Button>
        <Button
          disabled={confirmDisabled}
          loading={confirmLoading}
          onClick={onConfirm}
          type="button"
          variant={confirmVariant}
        >
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
}

export { PickerSelectionFooter };
