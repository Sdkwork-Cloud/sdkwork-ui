import * as React from 'react';
import { cn } from '../../../lib/utils';

export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperItemStatus = 'complete' | 'current' | 'upcoming' | 'error';

export interface StepperProps extends React.OlHTMLAttributes<HTMLOListElement> {
  orientation?: StepperOrientation;
}

export interface StepperItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'title'> {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  meta?: React.ReactNode;
  status?: StepperItemStatus;
  title: React.ReactNode;
}

interface StepperItemInternalProps extends StepperItemProps {
  last?: boolean;
  stepNumber?: number;
}

const StepperContext = React.createContext<StepperOrientation>('horizontal');

const indicatorShellClassName: Record<StepperItemStatus, string> = {
  complete:
    'border-[var(--sdk-color-state-success)] bg-[color-mix(in_srgb,var(--sdk-color-state-success)_14%,var(--sdk-color-surface-panel))] text-[var(--sdk-color-state-success)]',
  current:
    'border-[var(--sdk-color-brand-primary)] bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-brand-primary)]',
  error:
    'border-[var(--sdk-color-state-danger)] bg-[color-mix(in_srgb,var(--sdk-color-state-danger)_14%,var(--sdk-color-surface-panel))] text-[var(--sdk-color-state-danger)]',
  upcoming:
    'border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-muted)]',
};

const connectorClassName: Record<Exclude<StepperItemStatus, 'error'>, string> = {
  complete: 'bg-[var(--sdk-color-state-success)]/35',
  current: 'bg-[var(--sdk-color-brand-primary)]/25',
  upcoming: 'bg-[var(--sdk-color-border-default)]',
};

const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  ({ children, className, orientation = 'horizontal', ...props }, ref) => {
    const items = React.Children.toArray(children).map((child, index, collection) => {
      if (!React.isValidElement<StepperItemInternalProps>(child)) {
        return child;
      }

      return React.cloneElement(child, {
        last: index === collection.length - 1,
        stepNumber: index + 1,
      });
    });

    return (
      <StepperContext.Provider value={orientation}>
        <ol
          ref={ref}
          className={cn(
            orientation === 'horizontal' ? 'flex flex-wrap items-start gap-3' : 'space-y-3',
            className,
          )}
          data-orientation={orientation}
          data-sdk-ui="stepper"
          {...props}
        >
          {items}
        </ol>
      </StepperContext.Provider>
    );
  },
);

Stepper.displayName = 'Stepper';

const StepperItem = React.forwardRef<HTMLLIElement, StepperItemInternalProps>(
  (
    {
      className,
      description,
      icon,
      last = false,
      meta,
      status = 'upcoming',
      stepNumber = 1,
      title,
      ...props
    },
    ref,
  ) => {
    const orientation = React.useContext(StepperContext);
    const indicator = icon ?? stepNumber;

    if (orientation === 'vertical') {
      return (
        <li
          ref={ref}
          className={cn('grid grid-cols-[auto_minmax(0,1fr)] gap-3', className)}
          data-orientation={orientation}
          data-sdk-ui="stepper-item"
          data-status={status}
          {...props}
        >
          <div className="flex flex-col items-center">
            <span
              className={cn(
                'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold shadow-[var(--sdk-shadow-soft)]',
                indicatorShellClassName[status],
              )}
            >
              {indicator}
            </span>
            {!last ? (
              <span
                aria-hidden="true"
                className={cn(
                  'mt-2 w-px flex-1 rounded-full',
                  status === 'error' ? connectorClassName.upcoming : connectorClassName[status],
                )}
              />
            ) : null}
          </div>
          <div className="min-w-0 rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-4 py-3 shadow-[var(--sdk-shadow-soft)]">
            <div className="flex flex-wrap items-center gap-2">
              <div className="text-sm font-semibold text-[var(--sdk-color-text-primary)]">{title}</div>
              {meta ? (
                <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]">
                  {meta}
                </div>
              ) : null}
            </div>
            {description ? (
              <div className="mt-1.5 text-sm text-[var(--sdk-color-text-secondary)]">{description}</div>
            ) : null}
          </div>
        </li>
      );
    }

    return (
      <li
        ref={ref}
        className={cn('flex min-w-[12rem] flex-1 items-start gap-3', className)}
        data-orientation={orientation}
        data-sdk-ui="stepper-item"
        data-status={status}
        {...props}
      >
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <span
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold shadow-[var(--sdk-shadow-soft)]',
              indicatorShellClassName[status],
            )}
          >
            {indicator}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="text-sm font-semibold text-[var(--sdk-color-text-primary)]">{title}</div>
              {meta ? (
                <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--sdk-color-text-muted)]">
                  {meta}
                </div>
              ) : null}
            </div>
            {description ? (
              <div className="mt-1.5 text-sm text-[var(--sdk-color-text-secondary)]">{description}</div>
            ) : null}
          </div>
        </div>
        {!last ? (
          <span
            aria-hidden="true"
            className={cn(
              'mt-[1.125rem] h-px min-w-6 flex-1 rounded-full',
              status === 'error' ? connectorClassName.upcoming : connectorClassName[status],
            )}
          />
        ) : null}
      </li>
    );
  },
);

StepperItem.displayName = 'StepperItem';

export { Stepper, StepperItem };
