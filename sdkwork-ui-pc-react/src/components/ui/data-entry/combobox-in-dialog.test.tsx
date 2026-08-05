/**
 * 回归测试：Dialog 内的下拉（Combobox/Select）展开时，点击面板外的表单区域
 * 不应级联关闭父 Dialog。
 *
 * 覆盖用户报告：编辑支付机构账户表单中"账户模式"下拉展开 → 点击 outside
 * → 父窗口被一并隐藏。
 */
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog';
import { Combobox } from './combobox';

afterEach(() => {
  cleanup();
});

function renderDialogWithCombobox(handleOpenChange: (open: boolean) => void) {
  render(
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit provider account</DialogTitle>
          <DialogDescription>Provider account form dialog.</DialogDescription>
        </DialogHeader>
        <Combobox
          options={[
            { label: 'Direct', value: 'direct' },
            { label: 'Partner', value: 'partner' },
          ]}
          placeholder="Account mode"
          onValueChange={() => {}}
        />
        <button type="button">Save</button>
      </DialogContent>
    </Dialog>,
  );
}

describe('Dialog + Combobox outside-click isolation', () => {
  it('keeps the dialog open when clicking inside the dialog panel while the combobox popover is open', () => {
    const handleOpenChange = vi.fn();
    renderDialogWithCombobox(handleOpenChange);

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // 打开 Combobox 面板
    fireEvent.click(screen.getByRole('combobox', { name: 'Account mode' }));
    expect(screen.getByText('Direct')).toBeTruthy();

    // Dialog 面板内的其他元素不被 modal 屏蔽（可正常查询/交互）
    const saveButton = screen.getByRole('button', { name: 'Save' });

    // 点击 Dialog 面板内的另一个元素（Combobox 面板外）→ Combobox 关闭、Dialog 保持
    fireEvent.pointerDown(saveButton);
    fireEvent.pointerUp(saveButton);

    expect(handleOpenChange).not.toHaveBeenCalledWith(false);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('keeps the dialog open when clicking inside the combobox popover panel', () => {
    const handleOpenChange = vi.fn();
    renderDialogWithCombobox(handleOpenChange);

    fireEvent.click(screen.getByRole('combobox', { name: 'Account mode' }));
    fireEvent.pointerDown(screen.getByText('Direct'));
    fireEvent.pointerUp(screen.getByText('Direct'));

    expect(handleOpenChange).not.toHaveBeenCalledWith(false);
  });
});
