import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Label } from '../label';
import { SegmentedControl } from './segmented-control';
import {
  DateInput,
  DateTimeInput,
  type DateInputProps,
  type TemporalInputType,
} from './date-input';

export interface DateRangeValue {
  end: string;
  start: string;
}

export interface DateRangePreset {
  description?: React.ReactNode;
  disabled?: boolean;
  label: React.ReactNode;
  range: Partial<DateRangeValue>;
  value: string;
}

export interface DateRangeSpanLimit {
  amount: number;
  unit: 'day' | 'hour';
}

export type DateRangeFieldInvalidBehavior = 'preserve' | 'swap';

type DateRangeInputProps = Omit<
  DateInputProps,
  'aria-invalid' | 'className' | 'defaultValue' | 'onChange' | 'type' | 'value'
>;

interface BaseDateRangeFieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  actions?: React.ReactNode;
  defaultPresetValue?: string | null;
  defaultValue?: Partial<DateRangeValue>;
  disabled?: boolean;
  endInputProps?: DateRangeInputProps;
  endLabel?: React.ReactNode;
  invalidBehavior?: DateRangeFieldInvalidBehavior;
  max?: string;
  maxSpan?: DateRangeSpanLimit;
  min?: string;
  mode?: TemporalInputType;
  onPresetValueChange?: (value: string | null) => void;
  onValidationChange?: (message: string | null) => void;
  onValueChange?: (value: DateRangeValue) => void;
  presetLabel?: React.ReactNode;
  presetValue?: string | null;
  presets?: DateRangePreset[];
  startInputProps?: DateRangeInputProps;
  startLabel?: React.ReactNode;
  validate?: (value: DateRangeValue) => string | null;
  value?: Partial<DateRangeValue>;
}

export interface DateRangeFieldProps extends Omit<BaseDateRangeFieldProps, 'mode'> {}

export interface DateTimeRangeFieldProps extends Omit<BaseDateRangeFieldProps, 'mode'> {}

export interface DateRangePickerProps extends BaseDateRangeFieldProps {}

interface BaseDateRangeFieldInternalProps extends BaseDateRangeFieldProps {
  forwardedRef?: React.ForwardedRef<HTMLDivElement>;
}

function normalizeDateRangeValue(value: Partial<DateRangeValue> | null | undefined): DateRangeValue {
  return {
    end: value?.end ?? '',
    start: value?.start ?? '',
  };
}

function isDateRangeValueEqual(left: DateRangeValue, right: DateRangeValue) {
  return left.start === right.start && left.end === right.end;
}

function findMatchingPresetValue(presets: DateRangePreset[] | undefined, value: DateRangeValue) {
  return (
    presets?.find((preset) => isDateRangeValueEqual(normalizeDateRangeValue(preset.range), value))?.value ??
    null
  );
}

function parseTemporalValue(value: string, mode: TemporalInputType) {
  if (!value) {
    return null;
  }

  const normalizedValue = mode === 'date' ? `${value}T00:00` : value;
  const parsedValue = new Date(normalizedValue).getTime();

  return Number.isNaN(parsedValue) ? null : parsedValue;
}

function resolveRangeValidationMessage(
  value: DateRangeValue,
  mode: TemporalInputType,
  maxSpan: DateRangeSpanLimit | undefined,
  validate: ((value: DateRangeValue) => string | null) | undefined,
) {
  if (maxSpan && value.start && value.end) {
    const start = parseTemporalValue(value.start, mode);
    const end = parseTemporalValue(value.end, mode);

    if (start !== null && end !== null) {
      const spanLimitMs = maxSpan.amount * (maxSpan.unit === 'day' ? 24 * 60 * 60 * 1000 : 60 * 60 * 1000);
      const rangeSpan = Math.abs(end - start);

      if (rangeSpan > spanLimitMs) {
        return `Range cannot exceed ${maxSpan.amount} ${maxSpan.unit}${maxSpan.amount === 1 ? '' : 's'}`;
      }
    }
  }

  return validate?.(value) ?? null;
}

function resolveNextDateRangeValue(
  currentValue: DateRangeValue,
  nextKey: keyof DateRangeValue,
  nextPartValue: string,
  invalidBehavior: DateRangeFieldInvalidBehavior,
) {
  const nextValue = {
    ...currentValue,
    [nextKey]: nextPartValue,
  };

  if (invalidBehavior === 'swap' && nextValue.start && nextValue.end && nextValue.start > nextValue.end) {
    return {
      end: nextValue.start,
      start: nextValue.end,
    };
  }

  return nextValue;
}

function BaseDateRangeField(
  {
    actions,
    className,
    defaultPresetValue,
    defaultValue,
    disabled = false,
    endInputProps,
    endLabel = 'End date',
    forwardedRef,
    invalidBehavior = 'preserve',
    max,
    maxSpan,
    min,
    mode = 'date',
    onPresetValueChange,
    onValidationChange,
    onValueChange,
    presetLabel = 'Range presets',
    presetValue,
    presets,
    startInputProps,
    startLabel = 'Start date',
    validate,
    value,
    ...props
  }: BaseDateRangeFieldInternalProps,
) {
  const normalizedDefaultValue = normalizeDateRangeValue(defaultValue);
  const [internalValue, setInternalValue] = React.useState(normalizedDefaultValue);
  const [internalPresetValue, setInternalPresetValue] = React.useState<string | null>(
    defaultPresetValue ?? findMatchingPresetValue(presets, normalizedDefaultValue),
  );
  const currentValue = value === undefined ? internalValue : normalizeDateRangeValue(value);
  const currentPresetValue = presetValue === undefined ? internalPresetValue : presetValue;
  const validationMessage = resolveRangeValidationMessage(currentValue, mode, maxSpan, validate);
  const startInputId = React.useId();
  const endInputId = React.useId();
  const startFieldId = startInputProps?.id ?? startInputId;
  const endFieldId = endInputProps?.id ?? endInputId;
  const TemporalField = mode === 'datetime-local' ? DateTimeInput : DateInput;

  React.useEffect(() => {
    onValidationChange?.(validationMessage);
  }, [onValidationChange, validationMessage]);

  React.useEffect(() => {
    if (presetValue !== undefined || value === undefined) {
      return;
    }

    setInternalPresetValue(findMatchingPresetValue(presets, normalizeDateRangeValue(value)));
  }, [presetValue, presets, value]);

  function commitValue(nextValue: DateRangeValue, nextPresetValue: string | null) {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    if (presetValue === undefined) {
      setInternalPresetValue(nextPresetValue);
    }

    onValueChange?.(nextValue);
    onPresetValueChange?.(nextPresetValue);
  }

  function handlePresetValueChange(nextPresetValue: string) {
    const preset = presets?.find((item) => item.value === nextPresetValue);

    if (!preset) {
      return;
    }

    commitValue(normalizeDateRangeValue(preset.range), preset.value);
  }

  function handleFieldChange(nextKey: keyof DateRangeValue, nextPartValue: string) {
    const nextValue = resolveNextDateRangeValue(currentValue, nextKey, nextPartValue, invalidBehavior);
    commitValue(nextValue, findMatchingPresetValue(presets, nextValue));
  }

  return (
    <div
      ref={forwardedRef}
      className={cn('space-y-3', className)}
      data-sdk-ui="date-range-field"
      {...props}
    >
      {presets?.length ? (
        <div className="space-y-2">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--sdk-color-text-muted)]">
            {presetLabel}
          </div>
          <SegmentedControl
            fullWidth={false}
            onValueChange={handlePresetValueChange}
            options={presets.map((preset) => ({
              disabled: disabled || preset.disabled,
              label: preset.label,
              value: preset.value,
            }))}
            size="sm"
            value={currentPresetValue ?? ''}
          />
        </div>
      ) : null}
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-end">
        <div className="space-y-2">
          <Label htmlFor={startFieldId}>{startLabel}</Label>
          <TemporalField
            {...startInputProps}
            aria-invalid={validationMessage ? 'true' : undefined}
            disabled={disabled || startInputProps?.disabled}
            id={startFieldId}
            max={max}
            min={min}
            value={currentValue.start}
            onChange={(event) => handleFieldChange('start', event.target.value)}
          />
        </div>
        <div className="hidden pb-2 text-sm text-[var(--sdk-color-text-muted)] md:block">to</div>
        <div className="space-y-2">
          <Label htmlFor={endFieldId}>{endLabel}</Label>
          <TemporalField
            {...endInputProps}
            aria-invalid={validationMessage ? 'true' : undefined}
            disabled={disabled || endInputProps?.disabled}
            id={endFieldId}
            max={max}
            min={min}
            value={currentValue.end}
            onChange={(event) => handleFieldChange('end', event.target.value)}
          />
        </div>
      </div>
      {actions ? <div className="flex flex-wrap items-center justify-end gap-2">{actions}</div> : null}
      {validationMessage ? (
        <p
          className="text-sm text-[var(--sdk-color-state-danger)]"
          role="alert"
        >
          {validationMessage}
        </p>
      ) : null}
    </div>
  );
}

const DateRangeField = React.forwardRef<HTMLDivElement, DateRangeFieldProps>((props, ref) => (
  <BaseDateRangeField
    {...props}
    forwardedRef={ref}
    mode="date"
  />
));

DateRangeField.displayName = 'DateRangeField';

const DateTimeRangeField = React.forwardRef<HTMLDivElement, DateTimeRangeFieldProps>((props, ref) => (
  <BaseDateRangeField
    {...props}
    forwardedRef={ref}
    mode="datetime-local"
  />
));

DateTimeRangeField.displayName = 'DateTimeRangeField';

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>((props, ref) => (
  <BaseDateRangeField
    {...props}
    forwardedRef={ref}
  />
));

DateRangePicker.displayName = 'DateRangePicker';

export { DateRangeField, DateRangePicker, DateTimeRangeField };
