import type { CSSProperties } from 'react';
import { cn } from './utils';

type DataAttributeValue = string | number | boolean | undefined;

export type DataAttributes = {
  [K in `data-${string}`]?: DataAttributeValue;
};

export type SlotProps<T extends object> = T & DataAttributes;

type MergeableSlotProps = {
  className?: string;
  style?: CSSProperties;
};

export function mergeSlotProps<T extends MergeableSlotProps>(
  baseProps: T,
  overrideProps?: Partial<T>,
): T {
  if (!overrideProps) {
    return baseProps;
  }

  const mergedStyle =
    baseProps.style || overrideProps.style
      ? {
          ...baseProps.style,
          ...overrideProps.style,
        }
      : undefined;

  return {
    ...baseProps,
    ...overrideProps,
    className: cn(baseProps.className, overrideProps.className),
    style: mergedStyle,
  };
}

export function mergeOptionalSlotProps<T extends MergeableSlotProps>(
  baseProps?: T,
  overrideProps?: Partial<T>,
): T | undefined {
  if (baseProps && overrideProps) {
    return mergeSlotProps(baseProps, overrideProps);
  }

  return overrideProps ? ({ ...overrideProps } as T) : baseProps;
}
