import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from './index';

describe('Menubar', () => {
  it('renders desktop menu triggers and opens the selected menu content', () => {
    render(
      <Menubar value="file">
        <MenubarMenu value="file">
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New workspace
              <MenubarShortcut>Ctrl+N</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    fireEvent.focus(screen.getByRole('menuitem', { name: 'File' }));

    expect(screen.getByRole('menubar')).toBeInTheDocument();
    expect(screen.getByText('New workspace')).toBeInTheDocument();
    expect(screen.getByText('Ctrl+N')).toBeInTheDocument();
  });
});
