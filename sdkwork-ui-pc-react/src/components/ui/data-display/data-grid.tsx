import * as React from 'react';
import { EmptyState, LoadingBlock } from '../../patterns/feedback';
import { mergeSlotProps, type SlotProps } from '../../../lib/slot-props';
import { cn } from '../../../lib/utils';

export type DataGridRegionSlotProps = SlotProps<Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>>;
export type DataGridItemKeyResolver<T = any> = (item: T, index: number) => React.Key;
export type DataGridItemRenderer<T = any> = (item: T, index: number) => React.ReactNode;

export interface DataGridSlotProps {
  grid?: DataGridRegionSlotProps;
  pagination?: DataGridRegionSlotProps;
}

export interface DataGridProps<T = any> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  emptyActions?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  getItemKey?: DataGridItemKeyResolver<T>;
  loading?: boolean;
  loadingLabel?: React.ReactNode;
  pagination?: React.ReactNode;
  renderItem: DataGridItemRenderer<T>;
  slotProps?: DataGridSlotProps;
}

type DataGridComponent = React.ForwardRefExoticComponent<DataGridProps & React.RefAttributes<HTMLDivElement>> & {
  <T = any>(props: DataGridProps<T> & React.RefAttributes<HTMLDivElement>): React.ReactNode;
};

const DataGrid: DataGridComponent = React.forwardRef<HTMLDivElement, DataGridProps>(({
  className,
  data,
  emptyActions,
  emptyDescription,
  emptyTitle = 'No items',
  getItemKey,
  loading = false,
  loadingLabel,
  pagination,
  renderItem,
  slotProps,
  ...props
}, ref) => {
  return (
    <div ref={ref} className={cn('flex flex-col gap-6', className)} data-sdk-ui="data-grid" {...props}>
      {loading ? (
        <LoadingBlock label={loadingLabel} />
      ) : data.length === 0 ? (
        <EmptyState actions={emptyActions} description={emptyDescription} title={emptyTitle} />
      ) : (
        <>
          <div
            {...mergeSlotProps<DataGridRegionSlotProps>(
              {
                className: 'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3',
              },
              slotProps?.grid,
            )}
            data-sdk-region="data-grid-grid"
          >
            {data.map((item, index) => (
              <React.Fragment key={getItemKey?.(item, index) ?? (item as { id?: React.Key }).id ?? index}>
                {renderItem(item, index)}
              </React.Fragment>
            ))}
          </div>
          {pagination ? (
            <div
              {...mergeSlotProps<DataGridRegionSlotProps>(
                {},
                slotProps?.pagination,
              )}
              data-sdk-region="data-grid-pagination"
            >
              {pagination}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
});

export { DataGrid };
DataGrid.displayName = 'DataGrid';
