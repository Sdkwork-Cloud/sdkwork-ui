import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  Dialog,
  DialogContent,
} from './dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from './select';

afterEach(cleanup);

describe('SelectContent Escape inside a dialog', () => {
  it('dismisses only the select on Escape inside a dialog', async () => {
    const dialogOpenChange = vi.fn();
    const selectOpenChange = vi.fn();
    render(
      <Dialog open onOpenChange={dialogOpenChange}>
        <DialogContent>
          <Select defaultValue="a" onOpenChange={selectOpenChange}>
            <SelectTrigger>Pick</SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
        </DialogContent>
      </Dialog>,
    );
    fireEvent.click(screen.getByRole('combobox'));
    await screen.findByRole('listbox');

    fireEvent.keyDown(document.activeElement ?? screen.getByRole('listbox'), { key: 'Escape' });

    await waitFor(() => expect(selectOpenChange).toHaveBeenLastCalledWith(false));
    expect(dialogOpenChange).not.toHaveBeenCalledWith(false);
  });
});
