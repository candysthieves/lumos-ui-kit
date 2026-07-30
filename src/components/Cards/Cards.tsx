import clsx from 'clsx'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, type ReactNode } from 'react'
import s from './Cards.module.scss'

export type CardsProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const Cards = forwardRef<ComponentRef<'div'>, CardsProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(s.card, className)} {...props}>
        {children}
      </div>
    )
  }
)

Cards.displayName = 'Cards'
