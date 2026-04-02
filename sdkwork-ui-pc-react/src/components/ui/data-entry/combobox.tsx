import * as React from 'react';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../actions/command';
import { inputBaseClassName } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

export interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  keywords?: string[];
}

export type ComboboxValueChangeHandler = (value: string) => void;

export interface ComboboxProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'defaultValue' | 'onChange' | 'value'> {
  clearable?: boolean;
  defaultValue?: string;
  emptyText?: string;
  options: ComboboxOption[];
  onValueChange?: ComboboxValueChangeHandler;
  placeholder?: string;
  searchPlaceholder?: string;
  value?: string;
}

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(({
  className,
  clearable = false,
  defaultValue,
  disabled,
  emptyText = 'No options found.',
  onValueChange,
  options,
  placeholder = 'Select option',
  searchPlaceholder = 'Search option...',
  value,
  ...props
}, ref) => {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const selectedValue = value ?? internalValue;
  const selectedOption = options.find((option) => option.value === selectedValue);

  function handleValueChange(nextValue: string) {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  }

  function clearValue(event: React.MouseEvent<SVGSVGElement>) {
    event.preventDefault();
    event.stopPropagation();
    handleValueChange('');
  }

  return (
    <Popover modal open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          ref={ref}
          aria-expanded={open}
          aria-label={selectedOption?.label ?? placeholder}
          className={cn(inputBaseClassName, 'justify-between gap-2 text-left', className)}
          data-sdk-ui="combobox"
          disabled={disabled}
          role="combobox"
          type="button"
          {...props}
        >
          <span className={cn('truncate', !selectedOption && 'text-[var(--sdk-color-text-muted)]')}>
            {selectedOption?.label ?? placeholder}
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-1 text-[var(--sdk-color-text-muted)]">
            {clearable && selectedValue ? (
              <X
                aria-label="Clear selection"
                className="h-4 w-4 cursor-pointer transition-colors hover:text-[var(--sdk-color-text-primary)]"
                onClick={clearValue}
              />
            ) : null}
            <ChevronsUpDown className="h-4 w-4" />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] p-0" sideOffset={6}>
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  disabled={option.disabled}
                  key={option.value}
                  keywords={option.keywords}
                  onSelect={() => {
                    handleValueChange(option.value);
                    setOpen(false);
                  }}
                  value={option.value}
                >
                  <Check className={cn('h-4 w-4', selectedValue === option.value ? 'opacity-100' : 'opacity-0')} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate">{option.label}</div>
                    {option.description ? (
                      <div className="truncate text-xs text-[var(--sdk-color-text-muted)]">{option.description}</div>
                    ) : null}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

Combobox.displayName = 'Combobox';

export { Combobox };
