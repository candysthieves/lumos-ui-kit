'use client'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import s from './RadioGroup.module.scss'

export type RadioOption = {
  disabled?: boolean
  label?: ReactNode
  value: string
}

export type RadioGroupProps = Omit<
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
  'children'
> & {
  className?: string
  options: RadioOption[]
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, options, disabled, ...props }, ref) => {
    const id = useId()

    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        disabled={disabled}
        className={clsx(s.root, className, disabled && s.groupDisabled)}
        {...props}
      >
        {options.map(option => {
          const itemId = `${id}-${option.value}`
          const isDisabled = disabled || option.disabled

          return (
            <div key={option.value} className={clsx(s.option, isDisabled && s.disabled)}>
              <RadioGroupPrimitive.Item
                id={itemId}
                className={s.item}
                value={option.value}
                disabled={isDisabled}
              >
                <span className={s.radio}>
                  <RadioGroupPrimitive.Indicator className={s.indicator} />
                </span>
              </RadioGroupPrimitive.Item>

              {option.label && (
                <label htmlFor={itemId} className={s.label}>
                  {option.label}
                </label>
              )}
            </div>
          )
        })}
      </RadioGroupPrimitive.Root>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
