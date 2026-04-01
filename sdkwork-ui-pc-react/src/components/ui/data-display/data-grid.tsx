import * as React from 'react';
import { EmptyState, LoadingBlock } from '../../patterns/feedback';
import { cn } from '../../../lib/utils';

export interface DataGridProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  emptyActions?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  getItemKey?: (item: T, index: number) => React.Key;
  gridClassName?: string;
  loading?: boolean;
  loadingLabel?: React.ReactNode;
  pagination?: React.ReactNode;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function DataGrid<T>({
  className,
  data,
  emptyActions,
  emptyDescription,
  emptyTitle = 'No items',
  getItemKey,
  gridClassName = 'grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3',
  loading = false,
  loadingLabel,
  pagination,
  renderItem,
  ...props
}: DataGridProps<T>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} data-sdk-ui="data-grid" {...props}>
      {loading ? (
        <LoadingBlock label={loadingLabel} />
      ) : data.length === 0 ? (
        <EmptyState actions={emptyActions} description={emptyDescription} title={emptyTitle} />
      ) : (
        <>
          <div className={cn('grid', gridClassName)}>
            {data.map((item, index) => (
              <React.Fragment key={getItemKey?.(item, index) ?? (item as { id?: React.Key }).id ?? index}>
                {renderItem(item, index)}
              </React.Fragment>
            ))}
          </div>
          {pagination ? <div>{pagination}</div> : null}
        </>
      )}
    </div>
  );
}

export { DataGrid };
