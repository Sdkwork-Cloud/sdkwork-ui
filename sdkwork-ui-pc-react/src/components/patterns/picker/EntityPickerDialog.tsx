import * as React from 'react';
import { cn } from '../../../lib/utils';
import type { ButtonProps } from '../../ui/button';
import { PickerDialog, type PickerDialogProps } from './PickerDialog';
import { PickerSelectionFooter } from './PickerSelectionFooter';

export type EntityPickerSelectionMode = 'single' | 'multiple';

export interface EntityPickerDialogSelectionContext<T> {
  clearSelection: () => void;
  selectedCount: number;
  selectedIds: React.Key[];
  selectedItems: T[];
  selectionMode: EntityPickerSelectionMode;
}

export interface EntityPickerDialogRenderItemContext<T>
  extends EntityPickerDialogSelectionContext<T> {
  deselect: () => void;
  index: number;
  item: T;
  itemId: React.Key;
  select: () => void;
  selected: boolean;
  toggleSelection: () => void;
}

export interface EntityPickerDialogProps<T>
  extends Omit<PickerDialogProps, 'children' | 'empty' | 'footer'> {
  cancelLabel?: React.ReactNode;
  clearLabel?: React.ReactNode;
  confirmLabel?:
    | React.ReactNode
    | ((context: EntityPickerDialogSelectionContext<T>) => React.ReactNode);
  confirmLoading?: boolean;
  confirmVariant?: ButtonProps['variant'];
  defaultSelectedIds?: React.Key[];
  getItemId?: (item: T, index: number) => React.Key;
  getItemLabel?: (item: T, index: number) => React.ReactNode;
  items: T[];
  itemsClassName?: string;
  layout?: 'grid' | 'list';
  onConfirm?: (selectedItems: T[], selectedIds: React.Key[]) => void;
  onSelectedIdsChange?: (selectedIds: React.Key[], selectedItems: T[]) => void;
  pagination?: React.ReactNode;
  renderItem: (context: EntityPickerDialogRenderItemContext<T>) => React.ReactNode;
  selectedIds?: React.Key[];
  selectionMode?: EntityPickerSelectionMode;
  selectionSummary?:
    | React.ReactNode
    | ((context: EntityPickerDialogSelectionContext<T>) => React.ReactNode);
}

interface EntityPickerItemRecord<T> {
  id: React.Key;
  item: T;
}

function resolveDefaultItemId<T>(item: T, index: number): React.Key {
  const resolvedId = (item as { id?: React.Key }).id;
  return resolvedId ?? index;
}

function EntityPickerDialog<T>({
  cancelLabel = 'Cancel',
  clearLabel = 'Clear selection',
  confirmLabel,
  confirmLoading = false,
  confirmVariant = 'primary',
  defaultSelectedIds = [],
  getItemId,
  getItemLabel,
  items,
  itemsClassName,
  layout = 'grid',
  onConfirm,
  onOpenChange,
  onSelectedIdsChange,
  pagination,
  renderItem,
  selectedIds: controlledSelectedIds,
  selectionMode = 'single',
  selectionSummary,
  ...pickerProps
}: EntityPickerDialogProps<T>) {
  const [uncontrolledSelectedIds, setUncontrolledSelectedIds] =
    React.useState<React.Key[]>(defaultSelectedIds);

  const resolveItemId = React.useCallback(
    (item: T, index: number) => getItemId?.(item, index) ?? resolveDefaultItemId(item, index),
    [getItemId],
  );

  const itemRecords = React.useMemo<EntityPickerItemRecord<T>[]>(
    () =>
      items.map((item, index) => ({
        id: resolveItemId(item, index),
        item,
      })),
    [items, resolveItemId],
  );

  const selectedIds = controlledSelectedIds ?? uncontrolledSelectedIds;

  const selectedIdSet = React.useMemo(() => new Set(selectedIds), [selectedIds]);

  const currentItemsById = React.useMemo(() => {
    const map = new Map<React.Key, T>();
    itemRecords.forEach(({ id, item }) => {
      map.set(id, item);
    });
    return map;
  }, [itemRecords]);

  const selectedItems = React.useMemo(
    () =>
      selectedIds.flatMap((id) => {
        const item = currentItemsById.get(id);
        return item === undefined ? [] : [item];
      }),
    [currentItemsById, selectedIds],
  );

  const commitSelection = React.useCallback(
    (nextSelectedIds: React.Key[]) => {
      if (controlledSelectedIds === undefined) {
        setUncontrolledSelectedIds(nextSelectedIds);
      }

      const nextSelectedItems = nextSelectedIds.flatMap((id) => {
        const item = currentItemsById.get(id);
        return item === undefined ? [] : [item];
      });

      onSelectedIdsChange?.(nextSelectedIds, nextSelectedItems);
    },
    [controlledSelectedIds, currentItemsById, onSelectedIdsChange],
  );

  const clearSelection = React.useCallback(() => {
    commitSelection([]);
  }, [commitSelection]);

  const selectionContext = React.useMemo<EntityPickerDialogSelectionContext<T>>(
    () => ({
      clearSelection,
      selectedCount: selectedIds.length,
      selectedIds,
      selectedItems,
      selectionMode,
    }),
    [clearSelection, selectedIds, selectedItems, selectionMode],
  );

  const isSelected = React.useCallback((id: React.Key) => selectedIdSet.has(id), [selectedIdSet]);

  const selectId = React.useCallback(
    (id: React.Key) => {
      if (selectionMode === 'single') {
        commitSelection([id]);
        return;
      }

      if (selectedIdSet.has(id)) {
        return;
      }

      commitSelection([...selectedIds, id]);
    },
    [commitSelection, selectedIdSet, selectedIds, selectionMode],
  );

  const deselectId = React.useCallback(
    (id: React.Key) => {
      commitSelection(selectedIds.filter((selectedId) => !Object.is(selectedId, id)));
    },
    [commitSelection, selectedIds],
  );

  const toggleId = React.useCallback(
    (id: React.Key) => {
      if (selectedIdSet.has(id)) {
        deselectId(id);
        return;
      }

      if (selectionMode === 'single') {
        commitSelection([id]);
        return;
      }

      commitSelection([...selectedIds, id]);
    },
    [commitSelection, deselectId, selectedIdSet, selectedIds, selectionMode],
  );

  const resolvedSelectionSummary =
    typeof selectionSummary === 'function'
      ? selectionSummary(selectionContext)
      : selectionSummary ?? (() => {
          if (selectedIds.length === 0) {
            return 'No items selected';
          }

          if (selectedIds.length === 1 && selectedItems.length === 1 && getItemLabel) {
            return (
              <>
                Selected: {getItemLabel(selectedItems[0], 0)}
              </>
            );
          }

          return `${selectedIds.length} item${selectedIds.length === 1 ? '' : 's'} selected`;
        })();

  const resolvedConfirmLabel =
    typeof confirmLabel === 'function'
      ? confirmLabel(selectionContext)
      : confirmLabel ??
        (selectionMode === 'multiple' && selectedIds.length > 0
          ? `Confirm selection (${selectedIds.length})`
          : 'Confirm selection');

  const resultsLayoutClassName =
    layout === 'list'
      ? 'flex flex-col gap-3'
      : 'grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3';

  return (
    <PickerDialog
      {...pickerProps}
      empty={!pickerProps.loading && !pickerProps.error && items.length === 0}
      footer={(
        <PickerSelectionFooter
          cancelLabel={cancelLabel}
          clearLabel={clearLabel}
          confirmDisabled={selectedIds.length === 0}
          confirmLabel={resolvedConfirmLabel}
          confirmLoading={confirmLoading}
          confirmVariant={confirmVariant}
          onCancel={() => onOpenChange?.(false)}
          onClear={clearSelection}
          onConfirm={() => {
            if (selectedIds.length === 0) {
              return;
            }

            onConfirm?.(selectedItems, selectedIds);
          }}
          showClear={selectedIds.length > 0}
          summary={resolvedSelectionSummary}
        />
      )}
    >
      <div className="flex flex-col gap-5" data-sdk-pattern="entity-picker-dialog">
        <div
          className={cn(resultsLayoutClassName, itemsClassName)}
          data-sdk-region="entity-picker-results"
        >
          {itemRecords.map((record, index) => (
            <React.Fragment key={record.id}>
              {renderItem({
                ...selectionContext,
                deselect: () => deselectId(record.id),
                index,
                item: record.item,
                itemId: record.id,
                select: () => selectId(record.id),
                selected: isSelected(record.id),
                toggleSelection: () => toggleId(record.id),
              })}
            </React.Fragment>
          ))}
        </div>
        {pagination ? <div data-sdk-region="entity-picker-pagination">{pagination}</div> : null}
      </div>
    </PickerDialog>
  );
}

export { EntityPickerDialog };
