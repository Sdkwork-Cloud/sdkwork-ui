import * as React from 'react';
import { ChevronRight, FileText, Folder, FolderOpen, LoaderCircle } from 'lucide-react';
import { EmptyState } from '../../patterns/feedback';
import { cn } from '../../../lib/utils';
import { Checkbox } from '../checkbox';

export interface RichTreeItem {
  id: string;
  label: React.ReactNode;
  badge?: React.ReactNode;
  children?: RichTreeItem[];
  description?: React.ReactNode;
  disabled?: boolean;
  endContent?: React.ReactNode;
  hasChildren?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

export interface RichTreeItemState {
  checked: boolean;
  depth: number;
  disabled: boolean;
  expanded: boolean;
  indeterminate: boolean;
  isBranch: boolean;
  isLeaf: boolean;
  loading: boolean;
  selected: boolean;
}

export type RichTreeSelectionMode = 'single' | 'multiple';

export interface RichTreeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  cascadeCheck?: boolean;
  checkable?: boolean;
  checkedIds?: string[];
  defaultCheckedIds?: string[];
  defaultExpandedIds?: string[];
  defaultSelectedIds?: string[];
  emptyDescription?: React.ReactNode;
  emptyState?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  expandOnSelect?: boolean;
  expandedIds?: string[];
  items: RichTreeItem[];
  loadChildren?: (item: RichTreeItem) => Promise<void> | void;
  onCheckedIdsChange?: (checkedIds: string[]) => void;
  onExpandedIdsChange?: (expandedIds: string[]) => void;
  onSelectedIdsChange?: (selectedIds: string[]) => void;
  renderActions?: (item: RichTreeItem, state: RichTreeItemState) => React.ReactNode;
  renderLabel?: (item: RichTreeItem, state: RichTreeItemState) => React.ReactNode;
  selectedIds?: string[];
  selectionMode?: RichTreeSelectionMode;
}

export interface TreeProps extends Omit<RichTreeProps, 'items'> {
  data: RichTreeItem[];
  defaultSelectedId?: string | null;
  onSelectedIdChange?: (selectedId: string) => void;
  selectedId?: string | null;
}

export type TreeNodeData = RichTreeItem;

interface VisibleTreeNode {
  depth: number;
  id: string;
  parentId: string | null;
}

interface TreeMaps {
  childrenById: Map<string, string[]>;
  itemById: Map<string, RichTreeItem>;
  parentById: Map<string, string | null>;
}

interface CheckState {
  checked: boolean;
  indeterminate: boolean;
}

function uniqueIds(ids: readonly string[]) {
  return Array.from(new Set(ids.filter(Boolean)));
}

function useControllableState<T>(controlledValue: T | undefined, defaultValue: T, onChange?: (value: T) => void) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const setValue = React.useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      onChange?.(nextValue);
    },
    [isControlled, onChange],
  );

  return [value, setValue] as const;
}

function buildTreeMaps(items: RichTreeItem[]) {
  const childrenById = new Map<string, string[]>();
  const itemById = new Map<string, RichTreeItem>();
  const parentById = new Map<string, string | null>();

  function visit(nodes: RichTreeItem[], parentId: string | null) {
    nodes.forEach((node) => {
      itemById.set(node.id, node);
      parentById.set(node.id, parentId);
      childrenById.set(
        node.id,
        (node.children ?? []).map((child) => child.id),
      );

      if (node.children?.length) {
        visit(node.children, node.id);
      }
    });
  }

  visit(items, null);

  return {
    childrenById,
    itemById,
    parentById,
  } satisfies TreeMaps;
}

function collectVisibleNodes(
  items: RichTreeItem[],
  expandedIdSet: Set<string>,
  depth = 1,
  parentId: string | null = null,
  result: VisibleTreeNode[] = [],
) {
  items.forEach((item) => {
    result.push({
      depth,
      id: item.id,
      parentId,
    });

    if (item.children?.length && expandedIdSet.has(item.id)) {
      collectVisibleNodes(item.children, expandedIdSet, depth + 1, item.id, result);
    }
  });

  return result;
}

function collectTerminalIds(nodeId: string, childrenById: Map<string, string[]>): string[] {
  const childIds = childrenById.get(nodeId) ?? [];

  if (childIds.length === 0) {
    return [nodeId];
  }

  return childIds.flatMap((childId) => collectTerminalIds(childId, childrenById));
}

function resolveAccessibleLabel(item: RichTreeItem) {
  if (typeof item.label === 'string' || typeof item.label === 'number') {
    return String(item.label);
  }

  return item.id;
}

function resolveCheckState(
  nodeId: string,
  explicitCheckedIdSet: Set<string>,
  childrenById: Map<string, string[]>,
  cascadeCheck: boolean,
  cache: Map<string, CheckState>,
): CheckState {
  const cached = cache.get(nodeId);
  if (cached) {
    return cached;
  }

  const childIds = childrenById.get(nodeId) ?? [];
  if (!cascadeCheck || childIds.length === 0) {
    const nextState = {
      checked: explicitCheckedIdSet.has(nodeId),
      indeterminate: false,
    };
    cache.set(nodeId, nextState);
    return nextState;
  }

  let allChildrenChecked = childIds.length > 0;
  let someChildrenChecked = false;

  childIds.forEach((childId) => {
    const childState = resolveCheckState(
      childId,
      explicitCheckedIdSet,
      childrenById,
      cascadeCheck,
      cache,
    );

    if (childState.checked || childState.indeterminate) {
      someChildrenChecked = true;
    }

    if (!childState.checked || childState.indeterminate) {
      allChildrenChecked = false;
    }
  });

  const nextState = {
    checked: allChildrenChecked,
    indeterminate: !allChildrenChecked && someChildrenChecked,
  };
  cache.set(nodeId, nextState);
  return nextState;
}

function defaultRenderLabel(item: RichTreeItem) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex min-w-0 items-center gap-2">
        <span className="truncate">{item.label}</span>
        {item.badge ? <span className="shrink-0">{item.badge}</span> : null}
      </div>
      {item.description ? (
        <div className="truncate text-xs text-[var(--sdk-color-text-muted)]">{item.description}</div>
      ) : null}
    </div>
  );
}

function RichTree({
  cascadeCheck = true,
  checkable = false,
  checkedIds: checkedIdsProp,
  className,
  defaultCheckedIds = [],
  defaultExpandedIds = [],
  defaultSelectedIds = [],
  emptyDescription,
  emptyState,
  emptyTitle = 'No items',
  expandOnSelect = false,
  expandedIds: expandedIdsProp,
  items,
  loadChildren,
  onCheckedIdsChange,
  onExpandedIdsChange,
  onSelectedIdsChange,
  renderActions,
  renderLabel,
  selectedIds: selectedIdsProp,
  selectionMode = 'single',
  ...props
}: RichTreeProps) {
  const [selectedIds, setSelectedIds] = useControllableState<string[]>(
    selectedIdsProp,
    uniqueIds(defaultSelectedIds),
    onSelectedIdsChange,
  );
  const [expandedIds, setExpandedIds] = useControllableState<string[]>(
    expandedIdsProp,
    uniqueIds(defaultExpandedIds),
    onExpandedIdsChange,
  );
  const [checkedIds, setCheckedIds] = useControllableState<string[]>(
    checkedIdsProp,
    uniqueIds(defaultCheckedIds),
    onCheckedIdsChange,
  );
  const [loadingIds, setLoadingIds] = React.useState<string[]>([]);
  const [focusedId, setFocusedId] = React.useState<string | null>(null);

  const expandedIdSet = React.useMemo(() => new Set(expandedIds), [expandedIds]);
  const selectedIdSet = React.useMemo(() => new Set(selectedIds), [selectedIds]);
  const explicitCheckedIdSet = React.useMemo(() => new Set(checkedIds), [checkedIds]);
  const loadingIdSet = React.useMemo(() => new Set(loadingIds), [loadingIds]);
  const { childrenById, itemById, parentById } = React.useMemo(() => buildTreeMaps(items), [items]);
  const visibleNodes = React.useMemo(
    () => collectVisibleNodes(items, expandedIdSet),
    [expandedIdSet, items],
  );
  const visibleIndexById = React.useMemo(
    () => new Map(visibleNodes.map((node, index) => [node.id, index])),
    [visibleNodes],
  );
  const checkStateCache = React.useMemo(() => new Map<string, CheckState>(), [checkedIds, items]);
  const itemRefs = React.useRef(new Map<string, HTMLDivElement>());

  React.useEffect(() => {
    if (visibleNodes.length === 0) {
      setFocusedId(null);
      return;
    }

    setFocusedId((currentFocusedId) => {
      if (currentFocusedId && visibleIndexById.has(currentFocusedId)) {
        return currentFocusedId;
      }

      return selectedIds[0] ?? visibleNodes[0]?.id ?? null;
    });
  }, [selectedIds, visibleIndexById, visibleNodes]);

  const registerItemRef = React.useCallback((nodeId: string, element: HTMLDivElement | null) => {
    if (!element) {
      itemRefs.current.delete(nodeId);
      return;
    }

    itemRefs.current.set(nodeId, element);
  }, []);

  const focusNode = React.useCallback((nodeId: string | null) => {
    if (!nodeId) {
      return;
    }

    const element = itemRefs.current.get(nodeId);
    if (!element) {
      return;
    }

    element.focus();
    setFocusedId(nodeId);
  }, []);

  const triggerLoadChildren = React.useCallback(
    async (item: RichTreeItem) => {
      const childIds = childrenById.get(item.id) ?? [];
      if (!loadChildren || item.loading || !item.hasChildren || childIds.length > 0 || loadingIdSet.has(item.id)) {
        return;
      }

      setLoadingIds((currentLoadingIds) =>
        currentLoadingIds.includes(item.id) ? currentLoadingIds : [...currentLoadingIds, item.id],
      );

      try {
        await loadChildren(item);
      } finally {
        setLoadingIds((currentLoadingIds) => currentLoadingIds.filter((loadingId) => loadingId !== item.id));
      }
    },
    [childrenById, loadChildren, loadingIdSet],
  );

  const setExpandedState = React.useCallback(
    (item: RichTreeItem, nextExpanded: boolean) => {
      const nextExpandedIds = nextExpanded
        ? uniqueIds([...expandedIds, item.id])
        : expandedIds.filter((expandedId) => expandedId !== item.id);

      setExpandedIds(nextExpandedIds);

      if (nextExpanded) {
        void triggerLoadChildren(item);
      }
    },
    [expandedIds, setExpandedIds, triggerLoadChildren],
  );

  const toggleExpanded = React.useCallback(
    (item: RichTreeItem) => {
      const childIds = childrenById.get(item.id) ?? [];
      const isBranch = childIds.length > 0 || item.hasChildren;
      if (!isBranch) {
        return;
      }

      setExpandedState(item, !expandedIdSet.has(item.id));
    },
    [childrenById, expandedIdSet, setExpandedState],
  );

  const handleSelect = React.useCallback(
    (item: RichTreeItem) => {
      if (item.disabled) {
        return;
      }

      const childIds = childrenById.get(item.id) ?? [];
      const isBranch = childIds.length > 0 || item.hasChildren;
      const isSelected = selectedIdSet.has(item.id);

      const nextSelectedIds = selectionMode === 'multiple'
        ? isSelected
          ? selectedIds.filter((selectedId) => selectedId !== item.id)
          : [...selectedIds, item.id]
        : [item.id];

      setSelectedIds(uniqueIds(nextSelectedIds));

      if (expandOnSelect && isBranch) {
        toggleExpanded(item);
      }
    },
    [childrenById, expandOnSelect, selectedIdSet, selectedIds, selectionMode, setSelectedIds, toggleExpanded],
  );

  const handleCheckedChange = React.useCallback(
    (item: RichTreeItem, nextChecked: boolean | 'indeterminate') => {
      if (item.disabled) {
        return;
      }

      const shouldCheck = nextChecked === true;
      const targetIds = cascadeCheck ? collectTerminalIds(item.id, childrenById) : [item.id];
      const nextCheckedIdSet = new Set(explicitCheckedIdSet);

      targetIds.forEach((targetId) => {
        if (shouldCheck) {
          nextCheckedIdSet.add(targetId);
          return;
        }

        nextCheckedIdSet.delete(targetId);
      });

      setCheckedIds(uniqueIds([...nextCheckedIdSet]));
    },
    [cascadeCheck, childrenById, explicitCheckedIdSet, setCheckedIds],
  );

  const handleItemKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, item: RichTreeItem) => {
      const currentIndex = visibleIndexById.get(item.id) ?? -1;
      const childIds = childrenById.get(item.id) ?? [];
      const isBranch = childIds.length > 0 || item.hasChildren;
      const isExpanded = expandedIdSet.has(item.id);

      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();
          const nextVisibleNode = visibleNodes[currentIndex + 1];
          focusNode(nextVisibleNode?.id ?? null);
          return;
        }
        case 'ArrowUp': {
          event.preventDefault();
          const previousVisibleNode = visibleNodes[currentIndex - 1];
          focusNode(previousVisibleNode?.id ?? null);
          return;
        }
        case 'ArrowRight': {
          event.preventDefault();
          if (isBranch && !isExpanded) {
            setExpandedState(item, true);
            return;
          }

          if (isBranch && isExpanded && childIds.length > 0) {
            focusNode(childIds[0]);
          }
          return;
        }
        case 'ArrowLeft': {
          event.preventDefault();
          if (isBranch && isExpanded) {
            setExpandedState(item, false);
            return;
          }

          focusNode(parentById.get(item.id) ?? null);
          return;
        }
        case 'Enter':
        case ' ': {
          event.preventDefault();
          handleSelect(item);
          return;
        }
        default:
          return;
      }
    },
    [childrenById, expandedIdSet, focusNode, handleSelect, parentById, setExpandedState, visibleIndexById, visibleNodes],
  );

  const renderBranch = React.useCallback(
    (branchItems: RichTreeItem[], depth: number) => {
      return (
        <ul className="space-y-1" role={depth === 1 ? 'tree' : 'group'}>
          {branchItems.map((item) => {
            const childIds = childrenById.get(item.id) ?? [];
            const isBranch = childIds.length > 0 || Boolean(item.hasChildren);
            const isExpanded = isBranch ? expandedIdSet.has(item.id) : false;
            const checkState = resolveCheckState(
              item.id,
              explicitCheckedIdSet,
              childrenById,
              cascadeCheck,
              checkStateCache,
            );
            const state: RichTreeItemState = {
              checked: checkState.checked,
              depth,
              disabled: Boolean(item.disabled),
              expanded: isExpanded,
              indeterminate: checkState.indeterminate,
              isBranch,
              isLeaf: !isBranch,
              loading: Boolean(item.loading) || loadingIdSet.has(item.id),
              selected: selectedIdSet.has(item.id),
            };
            const defaultIcon = state.loading
              ? <LoaderCircle className="h-4 w-4 animate-spin" />
              : isBranch
                ? isExpanded
                  ? <FolderOpen className="h-4 w-4" />
                  : <Folder className="h-4 w-4" />
                : <FileText className="h-4 w-4" />;
            const actions = renderActions?.(item, state);

            return (
              <li className="space-y-1" key={item.id} role="none">
                <div
                  aria-checked={checkable ? (state.indeterminate ? 'mixed' : state.checked) : undefined}
                  aria-disabled={item.disabled ? 'true' : undefined}
                  aria-expanded={isBranch ? isExpanded : undefined}
                  aria-level={depth}
                  aria-selected={state.selected}
                  className={cn(
                    'group flex min-h-10 items-center gap-2 rounded-[var(--sdk-radius-control)] px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--sdk-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sdk-color-surface-panel)]',
                    state.selected
                      ? 'bg-[var(--sdk-color-brand-primary-soft)] text-[var(--sdk-color-text-primary)]'
                      : 'text-[var(--sdk-color-text-secondary)] hover:bg-[var(--sdk-color-surface-panel-muted)] hover:text-[var(--sdk-color-text-primary)]',
                    state.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                  )}
                  data-depth={depth}
                  data-expanded={state.expanded ? 'true' : 'false'}
                  data-selected={state.selected ? 'true' : 'false'}
                  onClick={() => handleSelect(item)}
                  onFocus={() => setFocusedId(item.id)}
                  onKeyDown={(event) => handleItemKeyDown(event, item)}
                  ref={(element) => registerItemRef(item.id, element)}
                  role="treeitem"
                  style={{ paddingLeft: `${depth * 0.75}rem` }}
                  tabIndex={focusedId === item.id ? 0 : -1}
                >
                  {isBranch ? (
                    <button
                      aria-label={isExpanded ? `Collapse ${resolveAccessibleLabel(item)}` : `Expand ${resolveAccessibleLabel(item)}`}
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-panel-muted)]"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleExpanded(item);
                      }}
                      type="button"
                    >
                      <ChevronRight
                        className={cn(
                          'h-4 w-4 transition-transform',
                          isExpanded && 'rotate-90',
                        )}
                      />
                    </button>
                  ) : (
                    <span className="h-5 w-5 shrink-0" />
                  )}

                  {checkable ? (
                    <Checkbox
                      aria-label={`Check item ${resolveAccessibleLabel(item)}`}
                      checked={state.indeterminate ? 'indeterminate' : state.checked}
                      className="shrink-0"
                      onCheckedChange={(nextChecked) => handleCheckedChange(item, nextChecked)}
                      onClick={(event) => event.stopPropagation()}
                    />
                  ) : null}

                  <span className="shrink-0 text-[var(--sdk-color-text-muted)]">{item.icon ?? defaultIcon}</span>
                  <div className="min-w-0 flex-1">
                    {renderLabel ? renderLabel(item, state) : defaultRenderLabel(item)}
                  </div>
                  {item.endContent ? (
                    <div className="shrink-0 text-[var(--sdk-color-text-muted)]">{item.endContent}</div>
                  ) : null}
                  {actions ? (
                    <div
                      className="shrink-0"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {actions}
                    </div>
                  ) : null}
                </div>

                {isBranch && isExpanded && item.children?.length ? renderBranch(item.children, depth + 1) : null}
              </li>
            );
          })}
        </ul>
      );
    },
    [
      cascadeCheck,
      checkStateCache,
      checkable,
      childrenById,
      explicitCheckedIdSet,
      expandedIdSet,
      focusedId,
      handleCheckedChange,
      handleItemKeyDown,
      handleSelect,
      loadingIdSet,
      registerItemRef,
      renderActions,
      renderLabel,
      selectedIdSet,
      toggleExpanded,
    ],
  );

  if (items.length === 0) {
    return (
      <div
        className={cn(
          'rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-2',
          className,
        )}
        data-sdk-ui="rich-tree"
        {...props}
      >
        {emptyState ?? <EmptyState description={emptyDescription} title={emptyTitle} />}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-[var(--sdk-radius-panel)] border border-[var(--sdk-color-border-default)] bg-[var(--sdk-color-surface-panel)] p-2',
        className,
      )}
      data-sdk-ui="rich-tree"
      {...props}
    >
      <div aria-multiselectable={selectionMode === 'multiple' ? 'true' : undefined}>
        {renderBranch(items, 1)}
      </div>
    </div>
  );
}

function Tree({
  data,
  defaultSelectedId = null,
  onSelectedIdChange,
  onSelectedIdsChange,
  selectedId,
  selectedIds,
  ...props
}: TreeProps) {
  const normalizedSelectedIds = selectedIds ?? (
    selectedId === undefined ? undefined : selectedId ? [selectedId] : []
  );
  const normalizedDefaultSelectedIds = props.defaultSelectedIds ?? (
    defaultSelectedId ? [defaultSelectedId] : []
  );

  const handleSelectedIdsChange = React.useCallback(
    (nextSelectedIds: string[]) => {
      onSelectedIdsChange?.(nextSelectedIds);

      const nextSelectedId = nextSelectedIds[0];
      if (nextSelectedId) {
        onSelectedIdChange?.(nextSelectedId);
      }
    },
    [onSelectedIdChange, onSelectedIdsChange],
  );

  return (
    <RichTree
      {...props}
      defaultSelectedIds={normalizedDefaultSelectedIds}
      expandOnSelect={props.expandOnSelect ?? true}
      items={data}
      onSelectedIdsChange={handleSelectedIdsChange}
      selectedIds={normalizedSelectedIds}
    />
  );
}

export { RichTree, Tree };
