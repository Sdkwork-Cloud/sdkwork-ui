import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from './index';

describe('Drawer', () => {
  it('renders desktop drawer structure and closes through the shared close action', () => {
    const handleOpenChange = vi.fn();

    render(
      <Drawer open onOpenChange={handleOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Workspace Settings</DrawerTitle>
            <DrawerDescription>Adjust desktop defaults for this workspace.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody>Content Area</DrawerBody>
          <DrawerFooter>
            <button type="button">Save</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Content Area')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });
});
