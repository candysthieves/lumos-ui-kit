import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import { CheckmarkOutline } from '@/assets/icons'
import s from './Checkbox.module.scss'

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  'onCheckedChange'
> & {
  label?: ReactNode
  onCheckedChange?: (checked: boolean) => void
}

export const Checkbox = forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ label, id, className, onCheckedChange, ...props }, ref) => {
  const generatedId = useId()
  const checkboxId = id ?? generatedId

  return (
    <div className={s.container}>
      <label htmlFor={checkboxId} className={s.label}>
        <span className={s.buttonWrapper}>
          <CheckboxPrimitive.Root
            ref={ref}
            id={checkboxId}
            className={clsx(s.root, className)}
            onCheckedChange={checked => onCheckedChange?.(checked === true)}
            {...props}
          >
            <CheckboxPrimitive.Indicator className={s.indicator}>
              <CheckmarkOutline color={'var(--color-dark-900)'} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        </span>

        {label && <span>{label}</span>}
      </label>
    </div>
  )
})

Checkbox.displayName = 'Checkbox'
