'use client'

import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import type { Variant } from '@/components/Button'
import s from './Button.module.scss'

/**
 * A flexible and reusable button component that supports multiple variants (button, a, div, etc.),
 * custom root components via the `as` prop, and full-width styling.
 *
 *  Uses React 19's ref prop forwarding, allowing refs to be passed directly
 *  to the underlying DOM element or component.
 *
 * @typeParam C - The element type or component to render (defaults to 'button')
 */

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: Variant
  fullWidth?: boolean
  disabled?: boolean
} & ComponentPropsWithRef<T>

export const Button = <C extends ElementType = 'button'>(
  props: ButtonProps<C> & Omit<ComponentPropsWithRef<C>, keyof ButtonProps<C>>
) => {
  const {
    ref,
    as: Component = 'button',
    variant = 'primary',
    disabled = false,
    fullWidth,
    ...rest
  } = props

  const isLink = typeof Component === 'string' && Component.toLowerCase() === 'a'
  return (
    <Component
      ref={ref}
      className={clsx(s.button, 'typography-h3', s[variant], fullWidth && s.fullWidth)}
      {...(isLink ? { 'aria-disabled': disabled } : { disabled })}
      {...rest}
    />
  )
}
