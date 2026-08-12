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

afterEach(() => {
  document.body.style.pointerEvents = '';
  cleanup();
});

describe('SelectContent', () => {
  it('dismisses the select but keeps the host dialog open on outside clicks', async () => {
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
    expect(selectOpenChange).toHaveBeenLastCalledWith(true);

    // Clicking outside the options panel (e.g. on the dialog backdrop) must
    // dismiss the select while keeping the hosting dialog open.
    const outsideTarget = document.body.appendChild(document.createElement('div'));
    fireEvent.pointerDown(outsideTarget);
    fireEvent.click(outsideTarget);
    document.body.removeChild(outsideTarget);

    await waitFor(() => expect(selectOpenChange).toHaveBeenLastCalledWith(false));
    expect(dialogOpenChange).not.toHaveBeenCalledWith(false);
  });
});
