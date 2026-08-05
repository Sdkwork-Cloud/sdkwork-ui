/**
 * 回归测试：Dialog 内的 Select（账户模式同款）展开时，点击面板外的表单区域
 * 不应级联关闭父 Dialog；点击面板内选中不应关闭 Dialog。
 *
 * 注：Radix Select 打开时会对面板外内容做 aria-hidden（设计行为，不影响
 * 视觉与指针事件），因此用 DOM 查询而非 accessible-role 查询判断 Dialog 存活。
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

afterEach(() => {
  cleanup();
});

const dialogInDom = () => document.querySelector('[data-sdk-ui="dialog-content"]') !== null;

function renderDialogWithSelect(handleOpenChange: (open: boolean) => void) {
  render(
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create provider account</DialogTitle>
          <DialogDescription>Provider account form dialog.</DialogDescription>
        </DialogHeader>
        <Select defaultValue="direct">
          <SelectTrigger id="provider-account-mode">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="direct">Direct</SelectItem>
            <SelectItem value="partner">Partner</SelectItem>
          </SelectContent>
        </Select>
        <button type="button">Save</button>
      </DialogContent>
    </Dialog>,
  );
}

describe('Dialog + Select outside-click isolation', () => {
  it('keeps the dialog open when clicking inside the dialog panel while the select popup is open', () => {
    const handleOpenChange = vi.fn();
    renderDialogWithSelect(handleOpenChange);

    expect(dialogInDom()).toBe(true);

    // 打开账户模式 Select 面板
    fireEvent.click(screen.getByRole('combobox'));
    expect(screen.getByText('Partner')).toBeTruthy();

    // 点击 Dialog 面板内的另一个元素（Select 面板外）→ Dialog 保持打开
    const saveButton = document.querySelector('button') as HTMLElement;
    const saveButtons = [...document.querySelectorAll('button')].find((b) => b.textContent === 'Save');
    fireEvent.pointerDown(saveButtons ?? saveButton);
    fireEvent.pointerUp(saveButtons ?? saveButton);

    expect(handleOpenChange).not.toHaveBeenCalledWith(false);
    expect(dialogInDom()).toBe(true);
  });

  it('keeps the dialog open when clicking inside the select popup panel', () => {
    const handleOpenChange = vi.fn();
    renderDialogWithSelect(handleOpenChange);

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.pointerDown(screen.getByText('Partner'));
    fireEvent.pointerUp(screen.getByText('Partner'));

    expect(handleOpenChange).not.toHaveBeenCalledWith(false);
    expect(dialogInDom()).toBe(true);
  });
});
