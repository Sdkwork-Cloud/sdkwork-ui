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

/**
 * A real mouse click opens the Radix panel on pointerdown, so the remaining
 * events of the same interaction (pointerup/mousedown/mouseup/click) still
 * target the trigger. Regression: the outside-interaction guard once treated
 * those opening-sequence events as outside clicks and dismissed the panel
 * immediately after it opened.
 *
 * Note: native PointerEvent dispatch is required here — testing-library's
 * fireEvent.pointerDown creates events without a pointerType in jsdom, which
 * never exercises Radix's mouse-pointerdown opening path. The panel commit is
 * awaited after pointerdown to mirror the browser, where the remaining events
 * of the click reach the trigger after the freshly opened panel is mounted.
 */
async function openWithMouseClick(trigger: HTMLElement) {
  const pointerDown = new PointerEvent('pointerdown', {
    bubbles: true,
    button: 0,
    cancelable: true,
    pointerId: 1,
    pointerType: 'mouse',
  });
  trigger.dispatchEvent(pointerDown);
  await screen.findByRole('listbox');
  fireEvent.pointerUp(trigger, { button: 0, pointerId: 1, pointerType: 'mouse' });
  fireEvent.mouseDown(trigger);
  fireEvent.mouseUp(trigger);
  fireEvent.click(trigger);
}

describe('SelectContent', () => {
  it('keeps the options panel open after the mouse interaction that opened it', async () => {
    render(
      <Select defaultValue="a">
        <SelectTrigger>Pick</SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox');
    await openWithMouseClick(trigger);
    await screen.findByRole('listbox');

    expect(screen.getByText('Option A')).toBeTruthy();
    expect(screen.getByText('Option B')).toBeTruthy();
  });

  it('still dismisses the select but keeps the host dialog open on outside clicks', async () => {
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

    const trigger = screen.getByRole('combobox');
    await openWithMouseClick(trigger);
    await screen.findByRole('listbox');
    expect(selectOpenChange).toHaveBeenLastCalledWith(true);

    // Clicking outside the options panel (e.g. on the dialog backdrop) must
    // dismiss the select while keeping the hosting dialog open.
    const outsideTarget = document.body.appendChild(document.createElement('div'));
    fireEvent.pointerDown(outsideTarget, { button: 0, pointerType: 'mouse' });
    fireEvent.pointerUp(outsideTarget, { button: 0, pointerType: 'mouse' });
    fireEvent.click(outsideTarget);
    document.body.removeChild(outsideTarget);

    await waitFor(() => expect(selectOpenChange).toHaveBeenLastCalledWith(false));
    expect(dialogOpenChange).not.toHaveBeenCalledWith(false);
  });
});
