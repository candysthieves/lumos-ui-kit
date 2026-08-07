import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import type { ProgressSizeVariant, ProgressThemeColor } from '@/types'
import { COLOR_MAP } from '@/constants'
import { isThemeColor } from '@/utils'
import s from './LinearProgress.module.scss'

export type LinearProgressProps = {
  size?: ProgressSizeVariant
  color?: ProgressThemeColor | string
  value?: number
  determinate?: boolean
} & Omit<ComponentPropsWithoutRef<'div'>, 'aria-label' | 'aria-live' | 'role'>

export const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(
  (
    { className, size = 'md', color = 'primary', value = 0, determinate = false, ...props },
    ref
  ) => {
    const barColor = isThemeColor(color) ? COLOR_MAP[color] : color
    const clampedValue = Math.min(100, Math.max(0, value))

    return (
      <div
        ref={ref}
        role={'progressbar'}
        aria-label={'Loading'}
        aria-live={'polite'}
        aria-valuenow={determinate ? clampedValue : undefined}
        aria-valuemin={determinate ? 0 : undefined}
        aria-valuemax={determinate ? 100 : undefined}
        className={clsx(s.root, s[size], className)}
        {...props}
      >
        <div
          className={clsx(s.bar, determinate ? s.determinate : s.indeterminate)}
          style={{
            backgroundColor: barColor,
            width: determinate ? `${clampedValue}%` : undefined,
          }}
        />
      </div>
    )
  }
)

LinearProgress.displayName = 'LinearProgress'
