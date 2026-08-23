'use client'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui'
import { MoreHorizontalOutline } from '@/assets'
import { Button } from '@/components/Button'
import s from './ActionMenu.module.scss'

export type ActionMenuItem = {
  disabled?: boolean
  icon?: ReactNode
  id: string
  itemProps?: Omit<
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    'children' | 'disabled' | 'onSelect' | 'textValue'
  >
  label: ReactNode
  onSelect?: () => void
  textValue?: string
}

export type ActionMenuProps = Omit<
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>,
  'children'
> & {
  ariaLabel: string
  className?: string
  contentClassName?: string
  contentProps?: Omit<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>, 'children'>
  itemClassName?: string
  items: ActionMenuItem[]
  portalProps?: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>
  trigger?: ReactNode
  triggerClassName?: string
}

export const ActionMenu = ({
  ariaLabel,
  className,
  contentClassName,
  contentProps,
  itemClassName,
  items,
  modal = true,
  portalProps,
  trigger,
  triggerClassName,
  ...props
}: ActionMenuProps) => {
  const {
    align = 'end',
    className: contentPropsClassName,
    side = 'bottom',
    sideOffset = 6,
    ...restContentProps
  } = contentProps ?? {}

  return (
    <DropdownMenuPrimitive.Root modal={modal} {...props}>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger ?? (
          <Button
            type={'button'}
            variant={'text'}
            className={clsx(s.trigger, triggerClassName)}
            aria-label={ariaLabel}
          >
            <MoreHorizontalOutline size={24} />
          </Button>
        )}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal {...portalProps}>
        <DropdownMenuPrimitive.Content
          className={clsx(s.content, className, contentClassName, contentPropsClassName)}
          side={side}
          align={align}
          sideOffset={sideOffset}
          {...restContentProps}
        >
          {items.map(item => {
            const { className: itemPropsClassName, ...restItemProps } = item.itemProps ?? {}

            return (
              <DropdownMenuPrimitive.Item
                key={item.id}
                disabled={item.disabled}
                textValue={item.textValue}
                className={clsx(s.item, 'typography-body1', itemClassName, itemPropsClassName)}
                onSelect={item.onSelect}
                {...restItemProps}
              >
                {item.icon && (
                  <span className={s.itemIcon} aria-hidden>
                    {item.icon}
                  </span>
                )}
                <span className={s.itemLabel}>{item.label}</span>
              </DropdownMenuPrimitive.Item>
            )
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
