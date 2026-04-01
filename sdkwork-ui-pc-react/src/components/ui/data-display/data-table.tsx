import * as React from 'react';
import { cn } from '../../../lib/utils';
import { EmptyState, LoadingBlock } from '../../patterns/feedback';
import type { BulkActionBarProps } from '../actions';
import { BulkActionBar } from '../actions';
import { Checkbox } from '../checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../table';

export type DataTableDensity = 'comfortable' | 'compact';
export type DataTableAlign = 'left' | 'center' | 'right';

export interface DataTableColumn<T> {
  align?: DataTableAlign;
  cell: (row: T, index: number) => React.ReactNode;
  className?: string;
  header: React.ReactNode;
  headerClassName?: string;
  id: string;
  width?: number | string;
}

export interface DataTableProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  columnVisibility?: Partial<Record<string, boolean>>;
  columns: DataTableColumn<T>[];
  density?: DataTableDensity;
  description?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  emptyState?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  footer?: React.ReactNode;
  getRowId?: (row: T, index: number) => React.Key;
  getRowSelectionLabel?: (row: T, index: number) => string;
  loading?: boolean;
  loadingLabel?: React.ReactNode;
  onRowClick?: (row: T, index: number) => void;
  onSelectedRowIdsChange?: (ids: React.Key[]) => void;
  rowActions?: (row: T, index: number) => React.ReactNode;
  rowActionsLabel?: React.ReactNode;
  rowClassName?: (row: T, index: number) => string | undefined;
  rows: T[];
  selectable?: boolean;
  selectedRowIds?: React.Key[];
  selectionBar?: Omit<BulkActionBarProps, 'count' | 'onClear'>;
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

function DataTable<T>({
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
  getRowSelectionLabel,
  loading = false,
  loadingLabel,
  onRowClick,
  onSelectedRowIdsChange,
  rowActions,
  rowActionsLabel = 'Actions',
  rowClassName,
  rows,
  selectable = false,
  selectedRowIds = [],
  selectionBar,
  stickyHeader = false,
  title,
  toolbar,
  ...props
}: DataTableProps<T>) {
  const visibleColumns = columns.filter((column) => columnVisibility?.[column.id] ?? true);
  const rowIds = rows.map((row, index) => getRowId(row, index));
  const selectedRowIdSet = new Set(selectedRowIds);
  const selectedRowCount = rowIds.filter((rowId) => selectedRowIdSet.has(rowId)).length;
  const allRowsSelected = rowIds.length > 0 && rowIds.every((rowId) => selectedRowIdSet.has(rowId));
  const someRowsSelected = !allRowsSelected && rowIds.some((rowId) => selectedRowIdSet.has(rowId));

  function handleSelectedRowIdsChange(nextSelectedIds: React.Key[]) {
    onSelectedRowIdsChange?.(nextSelectedIds);
  }

  function handleToggleAllRows(checked: boolean | 'indeterminate') {
    handleSelectedRowIdsChange(checked ? rowIds : []);
  }

  function handleToggleRow(rowId: React.Key, checked: boolean | 'indeterminate') {
    if (checked) {
      handleSelectedRowIdsChange([...selectedRowIds, rowId]);
      return;
    }

    handleSelectedRowIdsChange(selectedRowIds.filter((selectedRowId) => selectedRowId !== rowId));
  }

  return (
    <div
      className={cn('flex flex-col gap-4', className)}
      data-sdk-ui="data-table"
      {...props}
    >
      {title || description || toolbar ? (
        <div
          className="flex flex-wrap items-start justify-between gap-3"
          data-sdk-region="data-table-header"
        >
          <div className="min-w-0">
            {title ? (
              <div className="text-base font-semibold text-[var(--sdk-color-text-primary)]">{title}</div>
            ) : null}
            {description ? (
              <div className="mt-1 text-sm text-[var(--sdk-color-text-secondary)]">{description}</div>
            ) : null}
          </div>
          {toolbar ? <div data-sdk-region="data-table-toolbar">{toolbar}</div> : null}
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

      {loading ? (
        <LoadingBlock label={loadingLabel} />
      ) : rows.length === 0 ? (
        emptyState ?? <EmptyState description={emptyDescription} title={emptyTitle} />
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
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
                  className={cn(
                    alignClassName[column.align ?? 'left'],
                    stickyHeader ? 'sticky top-0 z-10 bg-[var(--sdk-color-surface-panel)]' : null,
                    column.headerClassName,
                  )}
                  key={column.id}
                  style={{ width: resolveStyleWidth(column.width) }}
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
            {rows.map((row, index) => {
              const rowId = rowIds[index];
              const selected = selectedRowIdSet.has(rowId);
              const rowSelectionLabel = getRowSelectionLabel?.(row, index) ?? String(rowId);

              return (
                <TableRow
                  className={cn(onRowClick ? 'cursor-pointer' : null, rowClassName?.(row, index))}
                  data-sdk-row-id={String(rowId)}
                  data-state={selected ? 'selected' : 'unselected'}
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
                  {visibleColumns.map((column) => (
                    <TableCell
                      className={cn(
                        densityClassName[density],
                        alignClassName[column.align ?? 'left'],
                        column.className,
                      )}
                      key={column.id}
                    >
                      {column.cell(row, index)}
                    </TableCell>
                  ))}
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

      {footer ? <div data-sdk-region="data-table-footer">{footer}</div> : null}
    </div>
  );
}

export { DataTable };
