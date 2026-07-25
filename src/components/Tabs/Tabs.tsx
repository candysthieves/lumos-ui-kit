import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import s from './Tabs.module.scss'

export type Tab = {
  value: string
  label: string
  content: ReactNode
  disabled?: boolean
}

type TabsProps = Omit<
  ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  'defaultValue' | 'onValueChange'
> & {
  tabs: Tab[]
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export const Tabs = ({ tabs, defaultValue, onValueChange, className, ...props }: TabsProps) => {
  return (
    <TabsPrimitive.Root
      {...props}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={className}
    >
      <TabsPrimitive.List className={s.list} loop>
        {tabs.map(tab => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            className={s.trigger}
          >
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
