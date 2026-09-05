'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'
import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef, type ReactNode } from 'react'
import s from './Tabs.module.scss'

export type Tab = {
  value: string
  label: string
  content: ReactNode
  disabled?: boolean
  icon?: ReactNode
}

export type TabsProps = Omit<
  ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  'defaultValue' | 'onValueChange'
> & {
  tabs: Tab[]
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export const Tabs = forwardRef<ComponentRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ tabs, defaultValue, onValueChange, className, ...props }, ref) => {
    return (
      <TabsPrimitive.Root
        ref={ref}
        defaultValue={defaultValue ?? tabs[0]?.value}
        onValueChange={onValueChange}
        className={clsx(className)}
        {...props}
      >
        <TabsPrimitive.List className={s.list} loop>
          {tabs.map(tab => (
            <TabsPrimitive.Trigger
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              className={clsx(s.trigger, 'typography-h3')}
            >
              {tab.icon && <span className={s.icon}>{tab.icon}</span>}
              {tab.label}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>

        {tabs.map(tab => (
          <TabsPrimitive.Content key={tab.value} value={tab.value}>
            {tab.content}
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    )
  }
)

Tabs.displayName = 'Tabs'
