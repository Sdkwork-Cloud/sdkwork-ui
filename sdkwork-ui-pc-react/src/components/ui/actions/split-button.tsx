import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button, type ButtonProps } from '../button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '../dropdown-menu';

export interface SplitButtonItem {
  key: string;
  label: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
}

export interface SplitButtonProps extends Omit<ButtonProps, 'children'> {
  children: React.ReactNode;
  defaultMenuOpen?: boolean;
  items: SplitButtonItem[];
  menuAlign?: 'start' | 'center' | 'end';
  menuClassName?: string;
  menuLabel?: string;
  menuModal?: boolean;
  menuOpen?: boolean;
  onMenuOpenChange?: (open: boolean) => void;
}

const SplitButton = React.forwardRef<HTMLButtonElement, SplitButtonProps>(
  (
    {
      children,
      className,
      defaultMenuOpen,
      disabled,
      items,
      loading,
      menuAlign = 'end',
      menuClassName,
      menuLabel = 'Open more actions',
      menuModal = false,
      menuOpen,
      onMenuOpenChange,
      size,
      variant,
      ...props
    },
    ref,
  ) => (
    <DropdownMenu defaultOpen={defaultMenuOpen} modal={menuModal} onOpenChange={onMenuOpenChange} open={menuOpen}>
      <div className={cn('inline-flex items-stretch', className)} data-sdk-ui="split-button">
        <Button
          ref={ref}
          className="rounded-r-none"
          disabled={disabled}
          loading={loading}
          size={size}
          variant={variant}
          {...props}
        >
          {children}
        </Button>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label={menuLabel}
            className="w-10 rounded-l-none border-l border-[var(--sdk-color-border-default)] px-0"
            disabled={disabled || items.length === 0}
            size={size}
            variant={variant}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align={menuAlign} className={menuClassName}>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.key}
            disabled={item.disabled}
            onSelect={() => {
              item.onSelect?.();
            }}
          >
            {item.icon}
            <span>{item.label}</span>
            {item.shortcut ? <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
);

SplitButton.displayName = 'SplitButton';

export { SplitButton };
