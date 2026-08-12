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
  it('aligns the popper panel width with the trigger', async () => {
    render(
      <Select defaultValue="a">
        <SelectTrigger data-testid="trigger">Pick</SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B with a very long label</SelectItem>
        </SelectContent>
      </Select>,
    );
    fireEvent.click(screen.getByTestId('trigger'));
    const content = await screen.findByRole('listbox');
    // The width variable makes the panel follow the trigger width.
    expect(content.className).toContain('w-[var(--radix-select-trigger-width)]');
    expect(content.className).toContain('min-w-[8rem]');
    // Close the panel before unmounting so Radix tears its layers down cleanly.
    fireEvent.keyDown(document.activeElement ?? content, { key: 'Escape' });
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
  });
});
