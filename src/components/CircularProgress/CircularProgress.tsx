import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { COLOR_MAP } from '@/constants'
import { isThemeColor } from '@/utils'
import s from './CircularProgress.module.scss'

type SizeVariant = 'lg' | 'md' | 'sm'

export type ThemeColor = 'error' | 'inherit' | 'primary' | 'success' | 'warning'

export type Props = {
  size?: SizeVariant
  color?: string | ThemeColor
} & Omit<ComponentPropsWithoutRef<'span'>, 'aria-label' | 'aria-live' | 'role'>

export const CircularProgress = forwardRef<HTMLSpanElement, Props>(
  ({ className, size = 'md', color = 'primary', style, ...props }, ref) => {
    const borderTopColor = isThemeColor(color) ? COLOR_MAP[color] : color

    return (
      <span
        ref={ref}
        aria-label={'Loading'}
        aria-live={'polite'}
        role={'status'}
        className={clsx(s.spinner, s[size], className)}
        style={{ ...style, borderTopColor }}
        {...props}
      />
    )
  }
)

CircularProgress.displayName = 'CircularProgress'
