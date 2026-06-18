import { Command as CommandPrimitive } from 'cmdk';
import { SlotProps } from '../../../lib/slot-props';
import { Dialog, DialogContentProps } from '../dialog';
import * as React from 'react';
export type CommandProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
export type CommandDialogContentProps = SlotProps<Omit<DialogContentProps, 'children'>>;
export interface CommandDialogSlotProps {
    command?: SlotProps<CommandProps>;
    content?: CommandDialogContentProps;
}
export type CommandDialogProps = React.ComponentProps<typeof Dialog> & {
    slotProps?: CommandDialogSlotProps;
};
export type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;
export type CommandListProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
export type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
export type CommandGroupProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
export type CommandSeparatorProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
export type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
export type CommandShortcutProps = React.HTMLAttributes<HTMLSpanElement>;
declare const Command: React.ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<never>>;
declare function CommandDialog({ children, slotProps, ...props }: CommandDialogProps): import("react/jsx-runtime").JSX.Element;
declare namespace CommandDialog {
    var displayName: string;
}
declare const CommandInput: React.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import('react').InputHTMLAttributes<HTMLInputElement>> & {
    ref?: import('react').Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof import('react').InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & import('react').RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<never>>;
declare const CommandList: React.ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<never>>;
declare const CommandEmpty: React.ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & import('react').RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<never>>;
declare const CommandGroup: React.ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof import('react').HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: import('react').ReactNode;
    value?: string;
    forceMount?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<never>>;
declare const CommandSeparator: React.ForwardRefExoticComponent<Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<never>>;
declare const CommandItem: React.ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof import('react').HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<never>>;
declare const CommandShortcut: React.ForwardRefExoticComponent<CommandShortcutProps & React.RefAttributes<HTMLSpanElement>>;
export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, };
