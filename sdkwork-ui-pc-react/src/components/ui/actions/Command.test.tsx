import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from './index';

describe('Command', () => {
  it('renders grouped desktop actions and invokes item selection handlers', () => {
    const handleSelect = vi.fn();

    render(
      <Command>
        <CommandInput placeholder="Search commands" />
        <CommandList>
          <CommandEmpty>No matching actions.</CommandEmpty>
          <CommandGroup heading="Workspace">
            <CommandItem value="open-settings" onSelect={handleSelect}>
              <span>Open Settings</span>
              <CommandShortcut>Ctrl+,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    fireEvent.click(screen.getByText('Open Settings'));

    expect(screen.getByPlaceholderText('Search commands')).toBeInTheDocument();
    expect(screen.getByText('Workspace')).toBeInTheDocument();
    expect(screen.getByText('Ctrl+,')).toBeInTheDocument();
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
