import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from '../button';
import { DataTable } from './data-table';

interface AssetRow {
  id: string;
  name: string;
  owner: string;
  status: string;
}

const rows: AssetRow[] = [
  { id: 'asset-1', name: 'Launch Brief', owner: 'SDKWORK Ops', status: 'Ready' },
  { id: 'asset-2', name: 'Moodboard', owner: 'Design Team', status: 'Review' },
];

afterEach(() => {
  cleanup();
});

describe('DataTable', () => {
  it('renders a desktop data table with toolbar, row actions, and bulk selection state', () => {
    const onSelectedRowIdsChange = vi.fn();

    render(
      <DataTable
        columns={[
          { id: 'name', header: 'Name', cell: (row) => row.name },
          { id: 'owner', header: 'Owner', cell: (row) => row.owner },
          { id: 'status', header: 'Status', cell: (row) => row.status },
        ]}
        footer={<div>Page 1 of 1</div>}
        getRowId={(row) => row.id}
        getRowSelectionLabel={(row) => row.name}
        rowActions={(row) => (
          <Button size="sm" variant="ghost">
            Open {row.name}
          </Button>
        )}
        rows={rows}
        selectable
        selectedRowIds={['asset-1']}
        selectionBar={{
          actions: <Button size="sm">Archive selection</Button>,
          description: 'Apply actions to the currently selected assets.',
          title: 'Selected assets',
        }}
        title="Assets"
        toolbar={<Button variant="secondary">New asset</Button>}
        onSelectedRowIdsChange={onSelectedRowIdsChange}
      />,
    );

    expect(screen.getByText('Assets')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'New asset' })).toBeInTheDocument();
    expect(screen.getByText('Launch Brief')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open Launch Brief' })).toBeInTheDocument();
    expect(screen.getByText('Selected assets')).toBeInTheDocument();
    expect(screen.getByText('Archive selection')).toBeInTheDocument();
    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'Select row Moodboard' }));

    expect(onSelectedRowIdsChange).toHaveBeenCalledWith(['asset-1', 'asset-2']);
  });

  it('supports hidden columns and select-all interactions', () => {
    const onSelectedRowIdsChange = vi.fn();

    render(
      <DataTable
        columnVisibility={{ status: false }}
        columns={[
          { id: 'name', header: 'Name', cell: (row) => row.name },
          { id: 'owner', header: 'Owner', cell: (row) => row.owner },
          { id: 'status', header: 'Status', cell: (row) => row.status },
        ]}
        getRowId={(row) => row.id}
        rows={rows}
        selectable
        selectedRowIds={[]}
        title="Assets"
        onSelectedRowIdsChange={onSelectedRowIdsChange}
      />,
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Owner')).toBeInTheDocument();
    expect(screen.queryByText('Status')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'Select all rows' }));

    expect(onSelectedRowIdsChange).toHaveBeenCalledWith(['asset-1', 'asset-2']);
  });

  it('renders loading and empty states', () => {
    const { rerender } = render(
      <DataTable
        columns={[{ id: 'name', header: 'Name', cell: (row: AssetRow) => row.name }]}
        loading
        loadingLabel="Loading assets"
        rows={[]}
        title="Assets"
      />,
    );

    expect(screen.getByText('Loading assets')).toBeInTheDocument();

    rerender(
      <DataTable
        columns={[{ id: 'name', header: 'Name', cell: (row: AssetRow) => row.name }]}
        emptyDescription="Create a new asset or adjust your filters."
        emptyTitle="No assets"
        rows={[]}
        title="Assets"
      />,
    );

    expect(screen.getByText('No assets')).toBeInTheDocument();
    expect(screen.getByText('Create a new asset or adjust your filters.')).toBeInTheDocument();
  });
});
