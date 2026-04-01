import * as React from 'react';
import { CalendarDays } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { inputBaseClassName, type InputProps } from '../input';
import {
  maybeOpenNativeDatePicker,
  shouldOpenDatePickerFromKey,
} from './date-input-interaction';

export type TemporalInputType = 'date' | 'datetime-local';

export interface DateInputProps extends Omit<InputProps, 'type'> {
  calendarLabel?: string;
}

interface DateInputCalendarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DateInputCalendarButton = React.forwardRef<HTMLButtonElement, DateInputCalendarButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={cn(
        'absolute right-1.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[calc(var(--sdk-radius-control)-0.125rem)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)] text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-brand-primary-soft)] hover:text-[var(--sdk-color-text-primary)]',
        className,
      )}
      ref={ref}
      type="button"
      {...props}
    >
      <CalendarDays className="h-4 w-4" />
    </button>
  ),
);

DateInputCalendarButton.displayName = 'DateInputCalendarButton';

interface TemporalInputProps extends DateInputProps {
  type: TemporalInputType;
}

const TemporalInput = React.forwardRef<HTMLInputElement, TemporalInputProps>(
  (
    {
      calendarLabel,
      className,
      onClick,
      onKeyDown,
      onPointerDown,
      type,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const openedOnPointerDownRef = React.useRef(false);

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    function setInputRef(node: HTMLInputElement | null) {
      inputRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
        return;
      }

      if (ref) {
        ref.current = node;
      }
    }

    function handlePointerDown(event: React.PointerEvent<HTMLInputElement>) {
      onPointerDown?.(event);
      openedOnPointerDownRef.current = false;

      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      openedOnPointerDownRef.current = maybeOpenNativeDatePicker(event.currentTarget);
    }

    function handleClick(event: React.MouseEvent<HTMLInputElement>) {
      onClick?.(event);

      if (!event.defaultPrevented && !openedOnPointerDownRef.current) {
        maybeOpenNativeDatePicker(event.currentTarget);
      }

      openedOnPointerDownRef.current = false;
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      onKeyDown?.(event);

      if (event.defaultPrevented || !shouldOpenDatePickerFromKey(event.key)) {
        return;
      }

      if (maybeOpenNativeDatePicker(event.currentTarget)) {
        event.preventDefault();
      }
    }

    function handleCalendarPointerDown(event: React.PointerEvent<HTMLButtonElement>) {
      event.preventDefault();
    }

    function handleCalendarClick() {
      const input = inputRef.current;

      if (!input || input.disabled || input.readOnly) {
        return;
      }

      input.focus({ preventScroll: true });

      if (!maybeOpenNativeDatePicker(input)) {
        input.click();
      }
    }

    return (
      <div className="group relative" data-slot="date-input">
        <input
          {...props}
          className={cn(
            inputBaseClassName,
            'cursor-pointer pr-14 [appearance:none] [color-scheme:light] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-14 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 dark:[color-scheme:dark]',
            className,
          )}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          ref={setInputRef}
          type={type}
        />
        <DateInputCalendarButton
          aria-label={
            calendarLabel ?? (type === 'datetime-local' ? 'Open date and time picker' : 'Open calendar')
          }
          onClick={handleCalendarClick}
          onPointerDown={handleCalendarPointerDown}
        />
      </div>
    );
  },
);

TemporalInput.displayName = 'TemporalInput';

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>((props, ref) => (
  <TemporalInput
    {...props}
    ref={ref}
    type="date"
  />
));

DateInput.displayName = 'DateInput';

const DateTimeInput = React.forwardRef<HTMLInputElement, DateInputProps>((props, ref) => (
  <TemporalInput
    {...props}
    ref={ref}
    type="datetime-local"
  />
));

DateTimeInput.displayName = 'DateTimeInput';

export { DateInput, DateInputCalendarButton, DateTimeInput };
