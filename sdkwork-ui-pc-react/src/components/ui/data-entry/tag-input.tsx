import * as React from 'react';
import { Hash, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { mergeSlotProps, type SlotProps } from '../../../lib/slot-props';
import { inputBaseClassName } from '../input';

const DEFAULT_SEPARATOR_KEYS = ['Enter', 'Tab', ','] as const;
export type TagInputValueChangeHandler = (value: string[]) => void;
export type TagInputRootSlotProps = SlotProps<Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>>;

export interface TagInputSlotProps {
  root?: TagInputRootSlotProps;
}

export interface TagInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange' | 'value'> {
  allowDuplicates?: boolean;
  defaultValue?: string[];
  maxTags?: number;
  onValueChange?: TagInputValueChangeHandler;
  slotProps?: TagInputSlotProps;
  value?: string[];
}

function normalizeTag(nextTag: string) {
  return nextTag.trim().replace(/^#+/, '');
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      allowDuplicates = false,
      className,
      defaultValue,
      maxTags,
      onValueChange,
      placeholder = 'Add tag',
      slotProps,
      value,
      ...props
    },
    ref,
  ) => {
    const [draft, setDraft] = React.useState('');
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? []);
    const tags = value ?? internalValue;
    const canAddMore = maxTags === undefined || tags.length < maxTags;

    function commitTags(nextTags: string[]) {
      if (value === undefined) {
        setInternalValue(nextTags);
      }

      onValueChange?.(nextTags);
    }

    function addTag(rawTag: string) {
      const nextTag = normalizeTag(rawTag);

      if (!nextTag || !canAddMore) {
        return;
      }

      if (!allowDuplicates && tags.some((tag) => tag.toLowerCase() === nextTag.toLowerCase())) {
        return;
      }

      commitTags([...tags, nextTag]);
      setDraft('');
    }

    function removeTag(tagToRemove: string) {
      commitTags(tags.filter((tag) => tag !== tagToRemove));
    }

    return (
      <div
        {...mergeSlotProps(
          {
            className: cn(
              inputBaseClassName,
              'h-auto min-h-10 flex-wrap items-center gap-2 px-2 py-2',
              className,
            ),
            'data-sdk-ui': 'tag-input',
          },
          slotProps?.root,
        )}
      >
        {tags.map((tag) => (
          <span
            className="inline-flex items-center gap-1 rounded-full border border-[var(--sdk-color-border-subtle)] bg-[var(--sdk-color-surface-panel-muted)] px-2.5 py-1 text-xs font-medium text-[var(--sdk-color-text-secondary)]"
            key={tag}
          >
            <Hash className="h-3 w-3" />
            <span>{tag}</span>
            <button
              aria-label={`Remove ${tag}`}
              className="rounded-full p-0.5 text-[var(--sdk-color-text-muted)] transition-colors hover:bg-[var(--sdk-color-surface-elevated)] hover:text-[var(--sdk-color-text-primary)]"
              onClick={() => removeTag(tag)}
              type="button"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        {canAddMore ? (
          <input
            ref={ref}
            className="min-w-[8rem] flex-1 bg-transparent text-sm text-[var(--sdk-color-text-primary)] outline-none placeholder:text-[var(--sdk-color-text-muted)]"
            onChange={(event) => {
              const nextDraft = event.target.value;
              const hasSeparator = nextDraft.includes(',');

              if (hasSeparator) {
                const segments = nextDraft.split(',');
                const commitSegment = segments.shift();

                if (commitSegment) {
                  addTag(commitSegment);
                }

                setDraft(segments.join(','));
                return;
              }

              setDraft(nextDraft);
            }}
            onKeyDown={(event) => {
              if (DEFAULT_SEPARATOR_KEYS.includes(event.key as (typeof DEFAULT_SEPARATOR_KEYS)[number])) {
                if (draft.trim()) {
                  event.preventDefault();
                  addTag(draft);
                }
                return;
              }

              if (event.key === 'Backspace' && !draft && tags.length > 0) {
                event.preventDefault();
                removeTag(tags[tags.length - 1]!);
              }
            }}
            placeholder={placeholder}
            type="text"
            value={draft}
            {...props}
          />
        ) : null}
      </div>
    );
  },
);

TagInput.displayName = 'TagInput';

export { TagInput };
