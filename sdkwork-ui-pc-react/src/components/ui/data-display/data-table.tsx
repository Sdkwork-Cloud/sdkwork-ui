import * as React from 'react';
import { mergeSlotProps, type SlotProps } from '../../../lib/slot-props';
import { cn } from '../../../lib/utils';
import { EmptyState, LoadingBlock } from '../../patterns/feedback';
import type { BulkActionBarProps } from '../actions';
import { BulkActionBar } from '../actions';
import { Button } from '../button';
import { Checkbox } from '../checkbox';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '../pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  type TableHeadProps,
  TableHeader,
  TableRow,
  type TableRowProps,
  type TableCellProps,
  type TableProps,
} from '../table';

export type DataTableDensity = 'comfortable' | 'compact';
export type DataTableAlign = 'left' | 'center' | 'right';

export interface DataTableColumn<T = any> {
  align?: DataTableAlign;
  cell: DataTableCellRenderer<T>;
  cellProps?: DataTableCellProps | DataTableCellPropsResolver<T>;
  header: React.ReactNode;
  headerProps?: DataTableHeaderProps;
  id: string;
  width?: number | string;
}

export type DataTableRegionSlotProps = SlotProps<Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>>;
export type DataTableTableSlotProps = SlotProps<TableProps>;
export type DataTableHeaderProps = SlotProps<Omit<TableHeadProps, 'children'>>;
export type DataTableCellProps = SlotProps<Omit<TableCellProps, 'children'>>;
export type DataTableRowProps = SlotProps<Omit<TableRowProps, 'children'>>;
export type DataTableCellRenderer<T = any> = (row: T, index: number) => React.ReactNode;
export type DataTableCellPropsResolver<T = any> = (row: T, index: number) => DataTableCellProps | undefined;
export type DataTableRowIdResolver<T = any> = (row: T, index: number) => React.Key;
export type DataTableRowPropsResolver<T = any> = (row: T, index: number) => DataTableRowProps | undefined;
export type DataTableRowSelectionLabelResolver<T = any> = (row: T, index: number) => string;
export type DataTableRowActionsRenderer<T = any> = (row: T, index: number) => React.ReactNode;
export type DataTableRowClickHandler<T = any> = (row: T, index: number) => void;
export type DataTableSelectedRowIdsChangeHandler = (ids: React.Key[]) => void;
export type DataTablePageChangeHandler = (page: number) => void;
export type DataTablePageSizeChangeHandler = (pageSize: number) => void;
export type DataTablePaginationMode = 'client' | 'server';

export interface DataTablePaginationProps {
  defaultPage?: number;
  defaultPageSize?: number;
  mode?: DataTablePaginationMode;
  onPageChange?: DataTablePageChangeHandler;
  onPageSizeChange?: DataTablePageSizeChangeHandler;
  page?: number;
  pageSize?: number;
  pageSizeOptions?: readonly number[];
  rowCount?: number;
}

export interface DataTableSlotProps {
  footer?: DataTableRegionSlotProps;
  header?: DataTableRegionSlotProps;
  pagination?: DataTableRegionSlotProps;
  surface?: DataTableRegionSlotProps;
  table?: DataTableTableSlotProps;
  toolbar?: DataTableRegionSlotProps;
}

export interface DataTableProps<T = any> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  columnVisibility?: Partial<Record<string, boolean>>;
  columns: DataTableColumn<T>[];
  density?: DataTableDensity;
  description?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  emptyState?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  footer?: React.ReactNode;
  getRowId?: DataTableRowIdResolver<T>;
  getRowProps?: DataTableRowPropsResolver<T>;
  getRowSelectionLabel?: DataTableRowSelectionLabelResolver<T>;
  loading?: boolean;
  loadingLabel?: React.ReactNode;
  onRowClick?: DataTableRowClickHandler<T>;
  onSelectedRowIdsChange?: DataTableSelectedRowIdsChangeHandler;
  pagination?: DataTablePaginationProps;
  rowActions?: DataTableRowActionsRenderer<T>;
  rowActionsLabel?: React.ReactNode;
  rows: T[];
  selectable?: boolean;
  selectedRowIds?: React.Key[];
  selectionBar?: Omit<BulkActionBarProps, 'count' | 'onClear'>;
  slotProps?: DataTableSlotProps;
  stickyHeader?: boolean;
  title?: React.ReactNode;
  toolbar?: React.ReactNode;
}

const densityClassName: Record<DataTableDensity, string> = {
  comfortable: 'p-4',
  compact: 'px-4 py-2.5',
};

const alignClassName: Record<DataTableAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

function resolveStyleWidth(width?: number | string) {
  if (width === undefined) {
    return undefined;
  }

  return typeof width === 'number' ? `${width}px` : width;
}

function defaultGetRowId<T>(row: T, index: number) {
  return (row as { id?: React.Key }).id ?? index;
}

function clampPage(page: number, pageCount: number) {
  return Math.min(Math.max(page, 1), pageCount);
}

function normalizePageSize(pageSize: number) {
  return Math.max(1, Math.trunc(pageSize) || 1);
}

function resolvePageSizeOptions(options: readonly number[] | undefined, currentPageSize: number) {
  if (options?.length === 0) {
    return [];
  }

  return Array.from(new Set([...(options ?? [10, 20, 50]), currentPageSize]))
    .map(normalizePageSize)
    .sort((left, right) => left - right);
}

function resolvePaginationItems(currentPage: number, pageCount: number) {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, 'end-ellipsis', pageCount] as const;
  }

  if (currentPage >= pageCount - 3) {
    return [1, 'start-ellipsis', pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount] as const;
  }

  return [
    1,
    'start-ellipsis',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    'end-ellipsis',
    pageCount,
  ] as const;
}

type DataTableComponent = React.ForwardRefExoticComponent<DataTableProps & React.RefAttributes<HTMLDivElement>> & {
  <T = any>(props: DataTableProps<T> & React.RefAttributes<HTMLDivElement>): React.ReactNode;
};

const DataTable: DataTableComponent = React.forwardRef<HTMLDivElement, DataTableProps>(({
  className,
  columnVisibility,
  columns,
  density = 'comfortable',
  description,
  emptyDescription,
  emptyState,
  emptyTitle = 'No rows',
  footer,
  getRowId = defaultGetRowId,
  getRowProps,
  getRowSelectionLabel,
  loading = false,
  loadingLabel,
  onRowClick,
  onSelectedRowIdsChange,
  pagination,
  rowActions,
  rowActionsLabel = 'Actions',
  rows,
  selectable = false,
  selectedRowIds = [],
  selectionBar,
  slotProps,
  stickyHeader = false,
  title,
  toolbar,
  ...props
}, ref) => {
  const indexedRows = React.useMemo(
    () => rows.map((row, index) => ({
      index,
      row,
      rowId: getRowId(row, index),
    })),
    [getRowId, rows],
  );
  const visibleColumns = columns.filter((column) => columnVisibility?.[column.id] ?? true);
  const [uncontrolledPage, setUncontrolledPage] = React.useState(pagination?.defaultPage ?? 1);
  const [uncontrolledPageSize, setUncontrolledPageSize] = React.useState(
    normalizePageSize(pagination?.defaultPageSize ?? 10),
  );
  const resolvedPageSize = normalizePageSize(pagination?.pageSize ?? uncontrolledPageSize);
  const totalRowCount = pagination?.mode === 'server'
    ? pagination.rowCount ?? indexedRows.length
    : indexedRows.length;
  const pageCount = pagination
    ? Math.max(1, Math.ceil(Math.max(totalRowCount, 1) / resolvedPageSize))
    : 1;
  const resolvedPage = pagination ? pagination.page ?? uncontrolledPage : 1;
  const currentPage = pagination ? clampPage(resolvedPage, pageCount) : 1;
  const resolvedPageSizeOptions = pagination
    ? resolvePageSizeOptions(pagination.pageSizeOptions, resolvedPageSize)
    : [];
  const displayedRows = React.useMemo(() => {
    if (!pagination) {
      return indexedRows;
    }

    if (pagination.mode === 'server') {
      return indexedRows;
    }

    const startIndex = (currentPage - 1) * resolvedPageSize;
    return indexedRows.slice(startIndex, startIndex + resolvedPageSize);
  }, [currentPage, indexedRows, pagination, resolvedPageSize]);
  const rowIds = indexedRows.map(({ rowId }) => rowId);
  const displayedRowIds = displayedRows.map(({ rowId }) => rowId);
  const selectedRowIdSet = new Set(selectedRowIds);
  const selectedRowCount = rowIds.filter((rowId) => selectedRowIdSet.has(rowId)).length;
  const allRowsSelected = displayedRowIds.length > 0 && displayedRowIds.every((rowId) => selectedRowIdSet.has(rowId));
  const someRowsSelected = !allRowsSelected && displayedRowIds.some((rowId) => selectedRowIdSet.has(rowId));
  const paginationSummary = displayedRows.length > 0
    ? `Showing ${(currentPage - 1) * resolvedPageSize + 1}-${(currentPage - 1) * resolvedPageSize + displayedRows.length} of ${totalRowCount}`
    : `Showing 0-0 of ${totalRowCount}`;

  React.useEffect(() => {
    if (!pagination || pagination.page !== undefined) {
      return;
    }

    if (uncontrolledPage !== currentPage) {
      setUncontrolledPage(currentPage);
    }
  }, [currentPage, pagination, uncontrolledPage]);

  React.useEffect(() => {
    if (!pagination || pagination.pageSize !== undefined) {
      return;
    }

    if (uncontrolledPageSize !== resolvedPageSize) {
      setUncontrolledPageSize(resolvedPageSize);
    }
  }, [pagination, resolvedPageSize, uncontrolledPageSize]);

  function handleSelectedRowIdsChange(nextSelectedIds: React.Key[]) {
    onSelectedRowIdsChange?.(nextSelectedIds);
  }

  function handleToggleAllRows(checked: boolean | 'indeterminate') {
    if (checked) {
      const nextSelectedIds = [...selectedRowIds];

      displayedRowIds.forEach((rowId) => {
        if (!nextSelectedIds.includes(rowId)) {
          nextSelectedIds.push(rowId);
        }
      });

      handleSelectedRowIdsChange(nextSelectedIds);
      return;
    }

    handleSelectedRowIdsChange(
      selectedRowIds.filter((selectedRowId) => !displayedRowIds.includes(selectedRowId)),
    );
  }

  function handleToggleRow(rowId: React.Key, checked: boolean | 'indeterminate') {
    if (checked) {
      handleSelectedRowIdsChange([...selectedRowIds, rowId]);
      return;
    }

    handleSelectedRowIdsChange(selectedRowIds.filter((selectedRowId) => selectedRowId !== rowId));
  }

  function handlePageChange(nextPage: number) {
    if (!pagination) {
      return;
    }

    const clampedPage = clampPage(nextPage, pageCount);

    if (pagination.page === undefined) {
      setUncontrolledPage(clampedPage);
    }

    pagination.onPageChange?.(clampedPage);
  }

  function handlePageSizeChange(nextPageSizeValue: string) {
    if (!pagination) {
      return;
    }

    const nextPageSize = normalizePageSize(Number(nextPageSizeValue));

    if (nextPageSize === resolvedPageSize && currentPage === 1) {
      return;
    }

    if (pagination.pageSize === undefined) {
      setUncontrolledPageSize(nextPageSize);
    }

    if (pagination.page === undefined) {
      setUncontrolledPage(1);
    }

    pagination.onPageSizeChange?.(nextPageSize);

    if (currentPage !== 1) {
      pagination.onPageChange?.(1);
    }
  }

  const hasPagination = !!pagination && totalRowCount > 0;
  const hasFooter = !!footer || hasPagination;
  const hasPageSizeSelector = hasPagination && resolvedPageSizeOptions.length > 1;
  const paginationItems = hasPagination ? resolvePaginationItems(currentPage, pageCount) : [];

  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-4', className)}
      data-sdk-ui="data-table"
      {...props}
    >
      {title || description || toolbar ? (
        <div
          data-sdk-region="data-table-header"
          {...mergeSlotProps<DataTableRegionSlotProps>(
            {
              className: 'flex flex-wrap items-start justify-between gap-3',
            },
            slotProps?.header,
          )}
        >
          <div className="min-w-0">
            {title ? (
              <div className="text-base font-semibold text-[var(--sdk-color-text-primary)]">{title}</div>
            ) : null}
            {description ? (
              <div className="mt-1 text-sm text-[var(--sdk-color-text-secondary)]">{description}</div>
            ) : null}
          </div>
          {toolbar ? (
            <div
              data-sdk-region="data-table-toolbar"
              {...mergeSlotProps<DataTableRegionSlotProps>(
                {},
                slotProps?.toolbar,
              )}
            >
              {toolbar}
            </div>
          ) : null}
        </div>
      ) : null}

      {selectedRowCount > 0 ? (
        <BulkActionBar
          count={selectedRowCount}
          description={selectionBar?.description}
          meta={selectionBar?.meta}
          onClear={onSelectedRowIdsChange ? () => handleSelectedRowIdsChange([]) : undefined}
          sticky={selectionBar?.sticky}
          title={selectionBar?.title ?? 'Selected rows'}
          tone={selectionBar?.tone}
          actions={selectionBar?.actions}
          clearLabel={selectionBar?.clearLabel}
        />
      ) : null}

      <div
        data-sdk-region="data-table-surface"
        {...mergeSlotProps<DataTableRegionSlotProps>(
          {
            className:
              'overflow-hidden rounded-[var(--sdk-radius-control)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] shadow-[var(--sdk-shadow-sm)]',
          },
          slotProps?.surface,
        )}
      >
        {loading ? (
          <div className="px-4 py-6">
            <LoadingBlock label={loadingLabel} />
          </div>
        ) : rows.length === 0 ? (
          <div className="px-4 py-6">
            {emptyState ?? <EmptyState description={emptyDescription} title={emptyTitle} />}
          </div>
        ) : (
          <Table
            {...mergeSlotProps<DataTableTableSlotProps>(
              {},
              slotProps?.table,
            )}
          >
            <TableHeader>
              <TableRow>
                {selectable ? (
                  <TableHead className="w-12">
                    <Checkbox
                      aria-label="Select all rows"
                      checked={allRowsSelected ? true : someRowsSelected ? 'indeterminate' : false}
                      onCheckedChange={handleToggleAllRows}
                    />
                  </TableHead>
                ) : null}
                {visibleColumns.map((column) => (
                  <TableHead
                    {...mergeSlotProps<DataTableHeaderProps>(
                      {
                        className: cn(
                          alignClassName[column.align ?? 'left'],
                          stickyHeader ? 'sticky top-0 z-10 bg-[var(--sdk-color-surface-panel)]' : null,
                        ),
                        style: { width: resolveStyleWidth(column.width) },
                      },
                      column.headerProps,
                    )}
                    key={column.id}
                  >
                    {column.header}
                  </TableHead>
                ))}
                {rowActions ? (
                  <TableHead
                    className={cn(
                      'w-1 whitespace-nowrap text-right',
                      stickyHeader ? 'sticky top-0 z-10 bg-[var(--sdk-color-surface-panel)]' : null,
                    )}
                  >
                    {rowActionsLabel}
                  </TableHead>
                ) : null}
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedRows.map(({ index, row, rowId }) => {
                const selected = selectedRowIdSet.has(rowId);
                const rowSelectionLabel = getRowSelectionLabel?.(row, index) ?? String(rowId);
                const resolvedRowProps = getRowProps?.(row, index);

                return (
                  <TableRow
                    {...mergeSlotProps<DataTableRowProps>(
                      {
                        className: cn(
                          'hover:bg-[var(--sdk-color-brand-primary-soft)]',
                          onRowClick ? 'cursor-pointer' : null,
                        ),
                        'data-sdk-row-id': String(rowId),
                        'data-state': selected ? 'selected' : 'unselected',
                      },
                      resolvedRowProps,
                    )}
                    key={String(rowId)}
                    onClick={onRowClick ? () => onRowClick(row, index) : undefined}
                  >
                    {selectable ? (
                      <TableCell className={densityClassName[density]}>
                        <Checkbox
                          aria-label={`Select row ${rowSelectionLabel}`}
                          checked={selected}
                          onCheckedChange={(checked) => handleToggleRow(rowId, checked)}
                          onClick={(event) => event.stopPropagation()}
                        />
                      </TableCell>
                    ) : null}
                    {visibleColumns.map((column) => {
                      const resolvedCellProps =
                        typeof column.cellProps === 'function'
                          ? column.cellProps(row, index)
                          : column.cellProps;

                      return (
                        <TableCell
                          {...mergeSlotProps<DataTableCellProps>(
                            {
                              className: cn(
                                densityClassName[density],
                                alignClassName[column.align ?? 'left'],
                              ),
                            },
                            resolvedCellProps,
                          )}
                          key={column.id}
                        >
                          {column.cell(row, index)}
                        </TableCell>
                      );
                    })}
                    {rowActions ? (
                      <TableCell className={cn(densityClassName[density], 'text-right')}>
                        <div className="flex justify-end" onClick={(event) => event.stopPropagation()}>
                          {rowActions(row, index)}
                        </div>
                      </TableCell>
                    ) : null}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}

        {hasFooter ? (
          <div
            data-sdk-region="data-table-footer"
            {...mergeSlotProps<DataTableRegionSlotProps>(
              {
                className:
                  'flex flex-col gap-3 border-t border-[var(--sdk-color-border-default)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between',
              },
              slotProps?.footer,
            )}
          >
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3 text-sm text-[var(--sdk-color-text-secondary)]">
              {footer}
              {hasPagination ? <span>{paginationSummary}</span> : null}
            </div>
            {hasPagination ? (
              <div
                data-sdk-region="data-table-pagination"
                {...mergeSlotProps<DataTableRegionSlotProps>(
                  {},
                  slotProps?.pagination,
                )}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  {hasPageSizeSelector ? (
                    <div className="flex items-center gap-2 text-sm text-[var(--sdk-color-text-secondary)]">
                      <span className="whitespace-nowrap">Rows per page</span>
                      <Select value={String(resolvedPageSize)} onValueChange={handlePageSizeChange}>
                        <SelectTrigger
                          aria-label="Rows per page"
                          className="h-9 w-[5.5rem] bg-[var(--sdk-color-surface-panel-muted)] shadow-none"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="min-w-[5.5rem]">
                          {resolvedPageSizeOptions.map((pageSizeOption) => (
                            <SelectItem key={pageSizeOption} value={String(pageSizeOption)}>
                              {pageSizeOption}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ) : null}
                  <Pagination className="justify-start sm:justify-end">
                    <PaginationContent>
                      <PaginationItem>
                        <Button
                          aria-label="Previous page"
                          className="h-9 rounded-[var(--sdk-radius-field)] px-3"
                          disabled={currentPage <= 1}
                          onClick={() => handlePageChange(currentPage - 1)}
                          size="sm"
                          type="button"
                          variant="outline"
                        >
                          Previous
                        </Button>
                      </PaginationItem>
                      {paginationItems.map((item, itemIndex) => (
                        <PaginationItem key={`${item}-${itemIndex}`}>
                          {typeof item === 'number' ? (
                            <Button
                              aria-current={item === currentPage ? 'page' : undefined}
                              aria-label={`Page ${item}`}
                              className="h-9 min-w-9 rounded-[var(--sdk-radius-field)] px-3"
                              onClick={() => handlePageChange(item)}
                              size="sm"
                              type="button"
                              variant={item === currentPage ? 'secondary' : 'ghost'}
                            >
                              {item}
                            </Button>
                          ) : (
                            <PaginationEllipsis />
                          )}
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <Button
                          aria-label="Next page"
                          className="h-9 rounded-[var(--sdk-radius-field)] px-3"
                          disabled={currentPage >= pageCount}
                          onClick={() => handlePageChange(currentPage + 1)}
                          size="sm"
                          type="button"
                          variant="outline"
                        >
                          Next
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export { DataTable };
DataTable.displayName = 'DataTable';
