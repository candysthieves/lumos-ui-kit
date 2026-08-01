import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import { Select as SelectPrimitive } from 'radix-ui'
import { forwardRef, useId, useState } from 'react'
import s from './Select.module.scss'

export type SelectOption = {
  disabled?: boolean
  icon?: ReactNode
  itemIndicator?: ReactNode
  itemIndicatorProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>
  itemProps?: Omit<
    ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    'children' | 'disabled' | 'textValue' | 'value'
  >
  itemTextProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.ItemText>
  label: ReactNode
  textValue?: string
  type?: 'item'
  value: string
}

export type SelectOptionGroup = {
  groupProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
  label: ReactNode
  labelProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
  options: SelectOption[]
  type: 'group'
}

export type SelectOptionSeparator = {
  separatorProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
  type: 'separator'
}

export type SelectItem = SelectOption | SelectOptionGroup | SelectOptionSeparator

export type SelectProps = Omit<
  ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  'children'
> & {
  className?: string
  contentProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
  contentClassName?: string
  groupLabelClassName?: string
  iconProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>
  itemClassName?: string
  label?: ReactNode
  labelProps?: ComponentPropsWithoutRef<'label'>
  options: SelectItem[]
  placeholder?: ReactNode
  portalProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>
  separatorClassName?: string
  triggerIcon?: ReactNode
  triggerProps?: Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'children'>
  valueProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
  viewportProps?: ComponentPropsWithoutRef<typeof SelectPrimitive.Viewport>
}

const getOptions = (items: SelectItem[]) =>
  items.flatMap(item => {
    if (item.type === 'group') {
      return item.options
    }

    if (item.type === 'separator') {
      return []
    }

    return item
  })

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      contentClassName,
      contentProps,
      defaultValue,
      groupLabelClassName,
      iconProps,
      itemClassName,
      label,
      labelProps,
      onValueChange,
      options,
      placeholder = 'Select-box',
      portalProps,
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
    const selectedValue = value ?? internalValue
    const flatOptions = getOptions(options)
    const selectedOption = flatOptions.find(option => option.value === selectedValue)
    const triggerId = triggerProps?.id ?? `select-${generatedId}`

    const handleValueChange = (nextValue: string) => {
      setInternalValue(nextValue)
      onValueChange?.(nextValue)
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
          className={clsx(s.item, itemClassName, optionClassName)}
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
        value={value}
        onValueChange={handleValueChange}
      >
        {label && (
          <label htmlFor={triggerId} className={clsx(s.label, labelClassName)} {...restLabelProps}>
            {label}
          </label>
        )}

        <SelectPrimitive.Trigger
          ref={ref}
          id={triggerId}
          className={clsx(s.trigger, label && s.hasLabel, className, triggerClassName)}
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
            <SelectPrimitive.Viewport
              className={clsx(s.viewport, viewportClassName)}
              {...restViewportProps}
            >
              {options.map((option, index) => {
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
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)

Select.displayName = 'Select'
