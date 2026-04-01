import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Combobox } from './index';

describe('Combobox', () => {
  it('opens shared desktop options and updates the selected value', () => {
    const handleValueChange = vi.fn();

    render(
      <Combobox
        options={[
          { label: 'GPT-5.4', value: 'gpt-5.4' },
          { label: 'Claude Desktop', value: 'claude-desktop' },
        ]}
        placeholder="Select model"
        onValueChange={handleValueChange}
      />,
    );

    fireEvent.click(screen.getByRole('combobox', { name: 'Select model' }));
    fireEvent.click(screen.getByText('Claude Desktop'));

    expect(handleValueChange).toHaveBeenCalledWith('claude-desktop');
    expect(screen.getByRole('combobox')).toHaveTextContent('Claude Desktop');
  });
});
