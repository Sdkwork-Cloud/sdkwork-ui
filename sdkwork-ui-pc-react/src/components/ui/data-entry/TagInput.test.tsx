import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TagInput } from './index';

describe('TagInput', () => {
  it('adds and removes tags with desktop-friendly keyboard interactions', () => {
    const onValueChange = vi.fn();

    render(
      <TagInput
        onValueChange={onValueChange}
        placeholder="Add tag"
        value={['design']}
      />,
    );

    const input = screen.getByPlaceholderText('Add tag');

    fireEvent.change(input, { target: { value: 'react' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(onValueChange).toHaveBeenCalledWith(['design', 'react']);

    fireEvent.click(screen.getByRole('button', { name: 'Remove design' }));
    expect(onValueChange).toHaveBeenCalledWith([]);
  });
});
