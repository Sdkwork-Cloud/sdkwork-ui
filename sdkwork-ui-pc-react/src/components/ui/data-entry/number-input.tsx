import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { inputBaseClassName } from '../input';

function clampValue(value: number, min?: number, max?: number) {
  if (typeof min === 'number' && value < min) {
    return min;
  }

  if (typeof max === 'number' && value > max) {
    return max;
  }

  return value;
}

function parseNumericConstraint(value: number | string | undefined) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number(value);

    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return undefined;
}

export interface NumberInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'onChange' | 'type' | 'value'
  > {
  defaultValue?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onValueChange?: (value: number | null) => void;
  value?: number | null;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      defaultValue,
      max,
      min,
      onChange,
      onValueChange,
      step = 1,
      value,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    const inputValueProps =
      value === undefined
        ? { defaultValue }
        : { value: value ?? '' };
    const numericMin = parseNumericConstraint(min);
    const numericMax = parseNumericConstraint(max);

    const commitInputValue = React.useCallback((nextValue: number | null) => {
      const input = inputRef.current;

      if (!input) {
        return false;
      }

      const valueAsString = nextValue === null ? '' : String(nextValue);
      const prototype =
        input.ownerDocument.defaultView?.HTMLInputElement?.prototype ??
        HTMLInputElement.prototype;
      const valueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

      if (valueSetter) {
        valueSetter.call(input, valueAsString);
      } else {
        input.value = valueAsString;
      }

      input.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }, []);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.target.value.trim();

        onChange?.(event);

        if (nextValue === '') {
          onValueChange?.(null);
          return;
        }

        const parsed = Number(nextValue);

        if (!Number.isNaN(parsed)) {
          onValueChange?.(parsed);
        }
      },
      [onChange, onValueChange],
    );

    const handleStep = React.useCallback(
      (direction: 1 | -1) => {
        const stepValue = parseNumericConstraint(step);
        const safeStep = stepValue ?? 1;
        const rawCurrentValue = inputRef.current?.value.trim();
        const parsedCurrentValue =
          rawCurrentValue && !Number.isNaN(Number(rawCurrentValue))
            ? Number(rawCurrentValue)
            : null;
        const current =
          parsedCurrentValue ??
          (typeof value === 'number'
            ? value
            : typeof defaultValue === 'number'
              ? defaultValue
              : 0);
        const next = clampValue(current + safeStep * direction, numericMin, numericMax);

        if (commitInputValue(next)) {
          return;
        }

        onValueChange?.(next);
      },
      [commitInputValue, defaultValue, numericMax, numericMin, onValueChange, step, value],
    );

    return (
      <div className="relative">
        <input
          ref={inputRef}
          className={cn(
            inputBaseClassName,
            'pr-11 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            className,
          )}
          inputMode="decimal"
          max={max}
          min={min}
          onChange={handleChange}
          step={step}
          type="number"
          {...inputValueProps}
          {...props}
        />
        <div className="absolute inset-y-1 right-1 flex w-8 flex-col overflow-hidden rounded-[calc(var(--sdk-radius-control)-0.25rem)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel-muted)]">
          <button
            aria-label="Increase value"
            className="flex flex-1 items-center justify-center text-[var(--sdk-color-text-secondary)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]"
            type="button"
            onClick={() => handleStep(1)}
          >
            <ChevronUp className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label="Decrease value"
            className="flex flex-1 items-center justify-center border-t border-[var(--sdk-color-border-default)] text-[var(--sdk-color-text-secondary)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]"
            type="button"
            onClick={() => handleStep(-1)}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  },
);

NumberInput.displayName = 'NumberInput';

export { NumberInput };
