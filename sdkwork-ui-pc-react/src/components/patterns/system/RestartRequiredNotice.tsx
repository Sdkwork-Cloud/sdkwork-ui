import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Button } from '../../ui/button';
import { InlineAlert } from '../../ui/feedback';

export interface RestartRequiredNoticeProps
  extends Omit<React.ComponentPropsWithoutRef<typeof InlineAlert>, 'actions' | 'showIcon' | 'title' | 'tone'> {
  actions?: React.ReactNode;
  dismissLabel?: React.ReactNode;
  onDismiss?: () => void;
  onRestart?: () => void;
  restartLabel?: React.ReactNode;
  sticky?: boolean;
  title?: React.ReactNode;
}

export function RestartRequiredNotice({
  actions,
  className,
  description = 'Some changes will only take effect after the application restarts.',
  dismissLabel = 'Later',
  onDismiss,
  onRestart,
  restartLabel = 'Restart now',
  sticky = false,
  title = 'Restart required',
  ...props
}: RestartRequiredNoticeProps) {
  const resolvedActions =
    actions ??
    (onDismiss || onRestart ? (
      <>
        {onDismiss ? (
          <Button
            onClick={onDismiss}
            size="sm"
            type="button"
            variant="ghost"
          >
            {dismissLabel}
          </Button>
        ) : null}
        {onRestart ? (
          <Button
            onClick={onRestart}
            size="sm"
            type="button"
          >
            {restartLabel}
          </Button>
        ) : null}
      </>
    ) : null);

  return (
    <InlineAlert
      actions={resolvedActions}
      className={cn(sticky ? 'sticky bottom-0 z-10' : null, className)}
      description={description}
      showIcon
      title={title}
      tone="warning"
      {...props}
    />
  );
}
