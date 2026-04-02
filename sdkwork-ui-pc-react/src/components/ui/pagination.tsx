import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { buttonVariants } from './button';

export type PaginationContentProps = React.ComponentPropsWithoutRef<'ul'>;
export type PaginationItemProps = React.ComponentPropsWithoutRef<'li'>;
export type PaginationProps = React.ComponentPropsWithoutRef<'nav'>;

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    data-sdk-ui="pagination"
    role="navigation"
    {...props}
  />
));

Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLOListElement, PaginationContentProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      data-sdk-ui="pagination-content"
      {...props}
    />
  ),
);

PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('', className)}
      data-sdk-ui="pagination-item"
      {...props}
    />
  ),
);

PaginationItem.displayName = 'PaginationItem';

export type PaginationLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  isActive?: boolean;
} & Pick<VariantProps<typeof buttonVariants>, 'size'>;

export type PaginationPreviousProps = React.ComponentProps<typeof PaginationLink>;
export type PaginationNextProps = React.ComponentProps<typeof PaginationLink>;
export type PaginationEllipsisProps = React.ComponentPropsWithoutRef<'span'>;

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(({
  className,
  isActive,
  size = 'sm',
  ...props
}, ref) => (
  <a
    ref={ref}
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        size,
        variant: isActive ? 'outline' : 'ghost',
      }),
      'h-9 min-w-9 rounded-[var(--sdk-radius-field)] px-3',
      className,
    )}
    data-sdk-ui="pagination-link"
    {...props}
  />
));

PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: PaginationPreviousProps) => (
  <PaginationLink
    aria-label="Previous page"
    className={cn('gap-1.5 rounded-[var(--sdk-radius-field)] px-3', className)}
    data-sdk-ui="pagination-previous"
    size="sm"
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);

PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: PaginationNextProps) => (
  <PaginationLink
    aria-label="Next page"
    className={cn('gap-1.5 rounded-[var(--sdk-radius-field)] px-3', className)}
    data-sdk-ui="pagination-next"
    size="sm"
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);

PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden="true"
    className={cn(
      'flex h-9 w-9 items-center justify-center rounded-[var(--sdk-radius-field)] text-[var(--sdk-color-text-muted)]',
      className,
    )}
    data-sdk-ui="pagination-ellipsis"
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
));

PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
