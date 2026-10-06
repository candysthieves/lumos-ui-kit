'use client'

import clsx from 'clsx'
import { Select as SelectPrimitive } from 'radix-ui'
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Input, type SelectItem, type SelectOption } from '@/components'
import { DEBOUNCE_DELAY } from '@/constants'
import { useDebounce } from '@/hooks'
import { getOptions } from '@/utils'
import s from './SearchableSelect.module.scss'

export type SearchableSelectProps = Omit<
  ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  'children'
> & {
  className?: string
  contentProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
  contentClassName?: string
  debounceDelay?: number
  groupLabelClassName?: string
  iconProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>
  itemClassName?: string
  label?: ReactNode
  labelProps?: ComponentPropsWithoutRef<'label'>
  onSearchChange?: (value: string) => void
  options: SelectItem[]
  placeholder?: ReactNode
  portalProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>
  searchPlaceholder?: string
  separatorClassName?: string
  triggerIcon?: ReactNode
  triggerProps?: Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'children'>
  valueProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
  viewportProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Viewport>
}

const filterItems = (items: SelectItem[], search: string): SelectItem[] => {
  if (!search.trim()) {
    return items
  }

  const normalizedSearch = search.toLowerCase().trim()

  return items.flatMap<SelectItem>(item => {
    if (item.type === 'separator') {
      return []
    }

    if (item.type === 'group') {
      const filteredOptions = item.options.filter(option =>
        String(option.label).toLowerCase().includes(normalizedSearch)
      )

      if (filteredOptions.length === 0) {
        return []
      }

      return [{ ...item, options: filteredOptions }]
    }

    return String(item.label).toLowerCase().includes(normalizedSearch) ? [item] : []
  })
}

export const SearchableSelect = forwardRef<HTMLButtonElement, SearchableSelectProps>(
  (
    {
      className,
      contentClassName,
      contentProps,
      defaultValue,
      debounceDelay = DEBOUNCE_DELAY,
      groupLabelClassName,
      iconProps,
      itemClassName,
      label,
      labelProps,
      onSearchChange,
      onValueChange,
      options,
      placeholder = 'Select-box',
      portalProps,
      searchPlaceholder = 'Search...',
      separatorClassName,
      triggerIcon,
      triggerProps,
      valueProps,
      value,
      viewportProps,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()

    const [internalValue, setInternalValue] = useState(defaultValue)
    const [searchValue, setSearchValue] = useState('')

    // Debounce input for select value
    const debouncedSearchValue = useDebounce(searchValue, debounceDelay)

    const selectedValue = value ?? internalValue

    const flatOptions = getOptions(options)

    const selectedOption = flatOptions.find(option => option.value === selectedValue)

    // Filter by debounced entered value
    const filteredOptions = useMemo(
      () => filterItems(options, debouncedSearchValue),
      [options, debouncedSearchValue]
    )

    const triggerId = triggerProps?.id ?? `searchable-select-${generatedId}`
    const onSearchChangeRef = useRef(onSearchChange)

    useEffect(() => {
      onSearchChangeRef.current = onSearchChange
    }, [onSearchChange])

    // Уведомляем родителя, когда дебаунсенное значение изменилось.
    useEffect(() => {
      onSearchChangeRef.current?.(debouncedSearchValue)
    }, [debouncedSearchValue])

    const handleValueChange = (nextValue: string) => {
      console.log('🔥 SearchableSelect handleValueChange', {
        nextValue,
        value,
        internalValue,
      })

      setInternalValue(nextValue)
      onValueChange?.(nextValue)
    }

    const handleOpenChange = (open: boolean) => {
      if (!open) {
        setSearchValue('')
      }

      props.onOpenChange?.(open)
    }

    const { className: triggerClassName, ...restTriggerProps } = triggerProps ?? {}

    const { className: labelClassName, ...restLabelProps } = labelProps ?? {}

    const { children: iconChildren, className: iconClassName, ...restIconProps } = iconProps ?? {}

    const {
      className: contentPropsClassName,
      position = 'popper',
      sideOffset = -1,
      ...restContentProps
    } = contentProps ?? {}

    const { className: viewportClassName, ...restViewportProps } = viewportProps ?? {}

    const renderOption = (option: SelectOption) => {
      const { className: optionClassName, ...restItemProps } = option.itemProps ?? {}

      return (
        <SelectPrimitive.Item
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          textValue={option.textValue}
          className={clsx(s.item, 'typography-subtitle1', itemClassName, optionClassName)}
          {...restItemProps}
        >
          {option.icon && (
            <span className={s.itemIcon} aria-hidden>
              {option.icon}
            </span>
          )}

          <SelectPrimitive.ItemText {...option.itemTextProps}>
            {option.label}
          </SelectPrimitive.ItemText>

          {option.itemIndicator && (
            <SelectPrimitive.ItemIndicator
              className={s.itemIndicator}
              {...option.itemIndicatorProps}
            >
              {option.itemIndicator}
            </SelectPrimitive.ItemIndicator>
          )}
        </SelectPrimitive.Item>
      )
    }

    return (
      <SelectPrimitive.Root
        {...props}
        defaultValue={defaultValue}
        value={value ?? ''}
        onValueChange={handleValueChange}
        onOpenChange={handleOpenChange}
      >
        {label && (
          <label
            htmlFor={triggerId}
            className={clsx(s.label, 'typography-body1', labelClassName)}
            {...restLabelProps}
          >
            {label}
          </label>
        )}

        <SelectPrimitive.Trigger
          ref={ref}
          id={triggerId}
          className={clsx(
            s.trigger,
            'typography-subtitle1',
            label && s.hasLabel,
            className,
            triggerClassName
          )}
          {...restTriggerProps}
        >
          <span className={s.textBlock}>
            <span className={s.valueRow}>
              {selectedOption?.icon && (
                <span className={s.startIcon} aria-hidden>
                  {selectedOption.icon}
                </span>
              )}

              <SelectPrimitive.Value placeholder={placeholder} {...valueProps} />
            </span>
          </span>

          <SelectPrimitive.Icon
            className={clsx(s.icon, iconClassName)}
            aria-hidden
            {...restIconProps}
          >
            {triggerIcon ?? iconChildren ?? <span />}
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal {...portalProps}>
          <SelectPrimitive.Content
            className={clsx(s.content, contentClassName, contentPropsClassName)}
            position={position}
            sideOffset={sideOffset}
            {...restContentProps}
          >
            <div className={s.searchField}>
              <Input
                type={'text'}
                value={searchValue}
                placeholder={searchPlaceholder}
                className={s.searchInput}
                containerClassName={s.searchInputContainer}
                onChange={event => setSearchValue(event.target.value)}
                onKeyDown={event => {
                  event.stopPropagation()
                }}
              />
            </div>

            <SelectPrimitive.Viewport
              className={clsx(s.viewport, viewportClassName)}
              {...restViewportProps}
            >
              {filteredOptions.map((option, index) => {
                if (option.type === 'separator') {
                  const { className: separatorPropsClassName, ...restSeparatorProps } =
                    option.separatorProps ?? {}

                  return (
                    <SelectPrimitive.Separator
                      key={`separator-${index}`}
                      className={clsx(s.separator, separatorClassName, separatorPropsClassName)}
                      {...restSeparatorProps}
                    />
                  )
                }

                if (option.type === 'group') {
                  const { className: groupLabelPropsClassName, ...restGroupLabelProps } =
                    option.labelProps ?? {}

                  return (
                    <SelectPrimitive.Group key={`group-${index}`} {...option.groupProps}>
                      <SelectPrimitive.Label
                        className={clsx(
                          s.groupLabel,
                          'typography-body1',
                          groupLabelClassName,
                          groupLabelPropsClassName
                        )}
                        {...restGroupLabelProps}
                      >
                        {option.label}
                      </SelectPrimitive.Label>

                      {option.options.map(renderOption)}
                    </SelectPrimitive.Group>
                  )
                }

                return renderOption(option)
              })}

              {filteredOptions.length === 0 && <div className={s.noResults}>No results found</div>}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)

SearchableSelect.displayName = 'SearchableSelect'
