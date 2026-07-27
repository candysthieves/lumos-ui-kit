import clsx from 'clsx'
import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  type PropsWithChildren,
  type ReactElement,
} from 'react'
import { forwardRef } from 'react'
import s from './Button.module.scss'

type Variant = 'outlined' | 'primary' | 'secondary' | 'text'

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

type AsProp<C extends ElementType> = {
  as?: C
}

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

/* eslint-disable @typescript-eslint/no-empty-object-type */
type PolymorphicComponentProp<C extends ElementType, Props = {}> = PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type PolymorphicComponentPropWithRef<C extends ElementType, Props = {}> = PolymorphicComponentProp<
  C,
  Props
> & { ref?: PolymorphicRef<C> }

type ButtonProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    variant?: 'primary' | Variant
    fullWidth?: boolean
  }
>

type ButtonComponent = (<C extends ElementType = 'button'>(
  props: ButtonProps<C>
) => null | ReactElement) & {
  displayName?: string
}

/**
 * A polymorphic button component that renders as any HTML element or custom component.
 *
 * **Ref Forwarding:**
 * Uses React's `forwardRef` API for ref forwarding, which is the standard approach
 * for ref handling in React versions below 19.
 *
 * **React 19 Compatibility:**
 * This component uses `@ts-expect-error` because React's `forwardRef` doesn't
 * preserve polymorphic generic parameters in React 19. In React 19, refs are
 * passed directly via props, but the type definitions for `forwardRef` with
 * generics are still evolving. The error is safely ignored as the component
 * works correctly at runtime.
 *
 * @description
 * A flexible and reusable button component that supports multiple variants (button, a, div, etc.),
 * custom root components, and full-width styling.
 *
 * @typeParam C - The element type or component to render (defaults to 'button')
 */

export const ButtonLegacy = forwardRef(
  // @ts-expect-error React.forwardRef doesn't preserve polymorphic generic parameters in react 19
  <C extends ElementType = 'button'>(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => {
    const {
      variant = 'primary',
      fullWidth,
      className,
      as: Component = 'button',
      disabled = false,
      ...rest
    } = props
    const isLink = Component === 'a'

    return (
      <Component
        className={clsx(s.button, 'typography-h3', s[variant], className, fullWidth && s.fullWidth)}
        ref={ref}
        {...(isLink ? { 'aria-disabled': disabled } : { disabled })}
        {...rest}
      />
    )
  }
) as ButtonComponent

ButtonLegacy.displayName = 'ButtonLegacy'
