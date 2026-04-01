import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './index';

describe('ContextMenu', () => {
  it('renders desktop context actions and invokes selection handlers', () => {
    const handleSelect = vi.fn();

    render(
      <ContextMenu>
        <ContextMenuTrigger>Workspace Tree</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onSelect={handleSelect}>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByText('Workspace Tree'));
    expect(screen.getByRole('menuitem', { name: 'Rename' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('menuitem', { name: 'Rename' }));

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
