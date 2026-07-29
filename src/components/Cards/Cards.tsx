import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Cards.module.scss'

type Props = {
  children: ReactNode
  as?: ElementType
} & HTMLAttributes<HTMLElement>

export const Cards = ({ children, as: Component = 'div', className, ...props }: Props) => {
  return (
    <Component className={clsx(s.card, className)} {...props}>
      {children}
    </Component>
  )
}
