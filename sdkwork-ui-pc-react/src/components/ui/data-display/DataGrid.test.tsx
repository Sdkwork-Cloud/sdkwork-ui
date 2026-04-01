import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DataGrid } from './index';

describe('DataGrid', () => {
  it('renders a loading state for desktop collection views', () => {
    render(<DataGrid data={[]} loading loadingLabel="Loading assets..." renderItem={() => null} />);

    expect(screen.getByText('Loading assets...')).toBeInTheDocument();
  });

  it('renders grid items, empty state copy, and pagination content', () => {
    const { rerender } = render(
      <DataGrid
        data={[]}
        emptyDescription="Try changing your filters or create a new item."
        emptyTitle="No assets"
        renderItem={() => null}
      />,
    );

    expect(screen.getByText('No assets')).toBeInTheDocument();
    expect(screen.getByText('Try changing your filters or create a new item.')).toBeInTheDocument();

    rerender(
      <DataGrid
        data={[
          { id: 'a', name: 'Alpha' },
          { id: 'b', name: 'Beta' },
        ]}
        pagination={<div>Pagination slot</div>}
        renderItem={(item) => <div>{item.name}</div>}
      />,
    );

    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();
    expect(screen.getByText('Pagination slot')).toBeInTheDocument();
  });
});
