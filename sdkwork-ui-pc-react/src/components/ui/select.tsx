import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const Select = SelectPrimitive.Root;

export type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;
export type SelectGroupProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;
export type SelectValueProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;
export type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
export type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
export type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
export type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  SelectGroupProps
>(({ ...props }, ref) => (
  <SelectPrimitive.Group
    ref={ref}
    data-sdk-ui="select-group"
    data-slot="select-group"
    {...props}
  />
));

SelectGroup.displayName = 'SelectGroup';

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  SelectValueProps
>(({ ...props }, ref) => (
  <SelectPrimitive.Value
    ref={ref}
    data-sdk-ui="select-value"
    data-slot="select-value"
    {...props}
  />
));

SelectValue.displayName = 'SelectValue';

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between gap-2 rounded-[var(--sdk-radius-field)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] px-3 py-2 text-sm text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-sm)] outline-none ring-offset-[var(--sdk-color-surface-canvas)] placeholder:text-[var(--sdk-color-text-muted)] focus:ring-2 focus:ring-[var(--sdk-color-border-focus)] disabled:cursor-not-allowed disabled:opacity-60',
      className,
    )}
    data-sdk-ui="select-trigger"
    data-slot="select-trigger"
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 text-[var(--sdk-color-text-muted)]" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = 'SelectTrigger';

/** Interaction events that could reach a hosting Modal/Drawer overlay and
 *  close it when fired outside an open select panel. Intercepted in the
 *  document capture phase (before any dialog overlay handler runs). */
const OUTSIDE_INTERACTION_EVENTS = ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'] as const;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, position = 'popper', onPointerDownOutside, onEscapeKeyDown, ...props }, ref) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const guardListenersRef = React.useRef<Array<[string, (event: Event) => void]>>([]);
  const guardTimerRef = React.useRef<number | undefined>(undefined);

  const detachOutsideGuard = () => {
    for (const [type, handler] of guardListenersRef.current) {
      document.removeEventListener(type, handler, true);
    }
    guardListenersRef.current = [];
    if (guardTimerRef.current !== undefined) {
      window.clearTimeout(guardTimerRef.current);
      guardTimerRef.current = undefined;
    }
  };

  const attachOutsideGuard = (node: HTMLDivElement) => {
    // When the select lives inside a Modal/Drawer, interacting outside the
    // options panel must only dismiss the select — never let the interaction
    // reach the dialog overlay (or the dialog's own outside-interaction
    // layer) and close the whole dialog. Radix's `disableOutsidePointerEvents`
    // (body pointer-events) covers real browsers, but stopping propagation in
    // the document capture phase is a deterministic guard that works
    // regardless of the hosting dialog's z-index or stacking context.
    //
    // The dismiss happens on `click` — the last event of an outside
    // interaction sequence (pointerdown → pointerup → mousedown → mouseup →
    // click) — so every event of the sequence is stopped first; dismissing
    // earlier would unmount this component and remove the capture listeners,
    // letting the remaining events fall through to the dialog layer. A
    // timeout fallback covers touch interactions that never emit a click.
    const dismiss = () => {
      if (guardTimerRef.current === undefined) return;
      window.clearTimeout(guardTimerRef.current);
      guardTimerRef.current = undefined;
      // Dismiss the options via the Escape handler, which closes the select
      // before the event can cascade (the host dialog's Escape listener is
      // stopped by onEscapeKeyDown).
      node.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
      );
    };
    const handleOutsideInteraction = (event: Event) => {
      // The panel may already be unmounted (e.g. the select was closed through
      // Radix while this capture listener is still attached, or the ref-cleanup
      // callback did not run in the current environment). A detached node must
      // never keep intercepting interactions for the rest of the page.
      if (!node.isConnected) return;
      const target = event.target;
      if (target instanceof Node && node.contains(target)) return;
      // A mouse click opens the panel on pointerdown, so the remaining events
      // of that same interaction (pointerup/mousedown/mouseup/click) still
      // target the trigger. Radix marks the open trigger with aria-expanded;
      // events on it are the opening sequence, not an outside interaction, and
      // must not dismiss the freshly opened panel.
      const openTrigger = document.querySelector('[role="combobox"][aria-expanded="true"]');
      if (openTrigger && target instanceof Node && openTrigger.contains(target)) return;
      event.stopPropagation();
      if (event.type === 'click') {
        dismiss();
      } else if (guardTimerRef.current === undefined) {
        guardTimerRef.current = window.setTimeout(dismiss, 200);
      }
    };
    for (const type of OUTSIDE_INTERACTION_EVENTS) {
      document.addEventListener(type, handleOutsideInteraction, true);
      guardListenersRef.current.push([type, handleOutsideInteraction]);
    }
  };

  const setContentRef = (node: HTMLDivElement | null) => {
    // Radix mounts the portal content after passive effects run, so the guard
    // is attached from the ref callback (commit phase) instead of useEffect.
    if (node) {
      contentRef.current = node;
      attachOutsideGuard(node);
    } else {
      contentRef.current = null;
      detachOutsideGuard();
    }
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={setContentRef}
        position={position}
        className={cn(
          'relative z-[200] min-w-[8rem] overflow-hidden rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] text-[var(--sdk-color-text-primary)] shadow-[var(--sdk-shadow-lg)]',
          // In popper mode the panel aligns with the trigger width so the
          // options never render narrower or wider than the field itself.
          position === 'popper' && 'w-[var(--radix-select-trigger-width)]',
          className,
        )}
        data-sdk-ui="select-content"
        data-slot="select-content"
        onPointerDownOutside={(event) => {
          onPointerDownOutside?.(event);
          event.stopPropagation();
        }}
        // Pressing Escape inside an open select dismisses the options only; the
        // event must not cascade into the hosting Modal/Drawer and close it too.
        onEscapeKeyDown={(event) => {
          onEscapeKeyDown?.(event);
          event.stopPropagation();
        }}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
          <ChevronUp className="h-4 w-4" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
          <ChevronDown className="h-4 w-4" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});

SelectContent.displayName = 'SelectContent';

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-xs font-semibold text-[var(--sdk-color-text-secondary)]', className)}
    data-sdk-ui="select-label"
    data-slot="select-label"
    {...props}
  />
));

SelectLabel.displayName = 'SelectLabel';

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-[var(--sdk-radius-field)] py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--sdk-color-brand-primary-soft)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    data-sdk-ui="select-item"
    data-slot="select-item"
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = 'SelectItem';

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('mx-1 my-1 h-px bg-[var(--sdk-color-border-subtle)]', className)}
    data-sdk-ui="select-separator"
    data-slot="select-separator"
    {...props}
  />
));

SelectSeparator.displayName = 'SelectSeparator';

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
Select.displayName = 'Select';
