'use client'

import type { ComponentRef, ComponentPropsWithoutRef, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { forwardRef } from 'react'
import s from './Tooltip.module.scss'

export type TooltipProps = Omit<
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
  'children'
> & {
  children: ReactNode
  content?: ReactNode
  delayDuration?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>['delayDuration']
}

export const Tooltip = forwardRef<ComponentRef<typeof TooltipPrimitive.Content>, TooltipProps>(
  ({ children, content, delayDuration = 200, className, sideOffset = 8, ...props }, ref) => {
    if (!content) return <>{children}</>

    return (
      <TooltipPrimitive.Provider delayDuration={delayDuration}>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              ref={ref}
              sideOffset={sideOffset}
              className={clsx(s.content, className)}
              {...props}
            >
              {content}
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    )
  }
)

Tooltip.displayName = 'Tooltip'
