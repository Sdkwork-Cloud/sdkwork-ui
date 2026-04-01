import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../button';
import {
  ConfirmDialog,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from './index';

describe('Modal', () => {
  it('renders a desktop modal shell with structured header body footer and sizing controls', () => {
    const handleOpenChange = vi.fn();

    render(
      <Modal open onOpenChange={handleOpenChange}>
        <ModalContent align="top" size="lg">
          <ModalHeader>
            <ModalTitle>Workspace Template</ModalTitle>
            <ModalDescription>Configure the reusable modal shell for desktop workflows.</ModalDescription>
          </ModalHeader>
          <ModalBody>Modal body content</ModalBody>
          <ModalFooter>
            <Button variant="secondary">Cancel</Button>
            <Button>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');

    expect(dialog).toHaveClass('w-[min(92vw,56rem)]');
    expect(dialog).toHaveClass('top-[max(2rem,8vh)]');
    expect(screen.getByText('Modal body content')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('provides a confirm dialog abstraction for high-frequency destructive confirmations', () => {
    const handleOpenChange = vi.fn();
    const handleConfirm = vi.fn();

    render(
      <ConfirmDialog
        confirmLabel="Delete workspace"
        description="This action cannot be undone."
        onConfirm={handleConfirm}
        onOpenChange={handleOpenChange}
        open
        title="Delete workspace"
        tone="danger"
      />,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('This action cannot be undone.')).toBeInTheDocument();

    const confirmButton = screen.getByRole('button', { name: 'Delete workspace' });
    expect(confirmButton).toHaveClass('sdk-btn--danger');

    fireEvent.click(confirmButton);
    expect(handleConfirm).toHaveBeenCalledTimes(1);
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });
});
