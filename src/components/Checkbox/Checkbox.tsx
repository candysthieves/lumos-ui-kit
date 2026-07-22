import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import styles from './Checkbox.module.scss'

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
    <div className={styles.container}>
      <label htmlFor={checkboxId} className={styles.buttonWrapper}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          className={clsx(styles.root, className)}
          onCheckedChange={checked => onCheckedChange?.(checked === true)}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={styles.indicator}>
            <svg width={'16'} height={'12'} viewBox={'0 0 10 8'} fill={'none'}>
              <path
                d={'M1 4L3.5 6.5L9 1'}
                stroke={'currentColor'}
                strokeWidth={'1.5'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
              />
            </svg>
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </label>

      {label && (
        <label htmlFor={checkboxId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'
