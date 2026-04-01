import * as React from 'react';
import { cn } from '../../../lib/utils';
import { DataTable, type DataTableProps } from '../../ui/data-display';
import { WorkspacePanel, type WorkspacePanelProps } from '../workspace/WorkspacePanel';
import {
  ManagementWorkbench,
  type ManagementWorkbenchProps,
} from './ManagementWorkbench';

export interface CrudWorkbenchTableProps<T>
  extends Omit<DataTableProps<T>, 'title' | 'description'> {
  className?: string;
  description?: React.ReactNode;
  title?: React.ReactNode;
}

export interface CrudWorkbenchEditorProps
  extends Omit<WorkspacePanelProps, 'className'> {
  className?: string;
}

export interface CrudWorkbenchProps<T>
  extends Omit<ManagementWorkbenchProps, 'main'> {
  editor?: CrudWorkbenchEditorProps;
  mainClassName?: string;
  table: CrudWorkbenchTableProps<T>;
}

export function CrudWorkbench<T>({
  detail,
  editor,
  mainClassName,
  table,
  ...props
}: CrudWorkbenchProps<T>) {
  const {
    className: tableClassName,
    description: tableDescription,
    title: tableTitle,
    ...tableProps
  } = table;

  return (
    <ManagementWorkbench
      {...props}
      detail={detail}
      main={{
        className: mainClassName,
        description: tableDescription,
        title: tableTitle,
        children: (
          <div className="flex h-full min-h-0 flex-col gap-4">
            <DataTable
              {...tableProps}
              className={cn('min-h-0', tableClassName)}
            />
            {editor ? (
              <WorkspacePanel
                actions={editor.actions}
                bodyClassName={editor.bodyClassName}
                className={cn('shrink-0', editor.className)}
                description={editor.description}
                headerClassName={editor.headerClassName}
                title={editor.title}
              >
                {editor.children}
              </WorkspacePanel>
            ) : null}
          </div>
        ),
      }}
    />
  );
}
