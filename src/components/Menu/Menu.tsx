import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Button } from '@/components'
import s from './Menu.module.scss'

const NON_NAVIGABLE_HREF = '#'

export type MenuItem = {
  activeIcon?: ReactNode
  href?: string
  icon: ReactNode
  id: string
}

type Props = {
  activeId: string
  items: MenuItem[]
  onValueChange?: (id: string) => void
}

export const Menu = ({ items, activeId, onValueChange }: Props) => {
  return (
    <div>
      <nav className={s.navBar}>
        <ul className={s.list}>
          {items.map(item => {
            const isActive = activeId === item.id
            const hasRealHref = Boolean(item.href) && item.href !== NON_NAVIGABLE_HREF

            const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
              if (!hasRealHref) {
                event.preventDefault()
              }

              onValueChange?.(item.id)
            }

            return (
              <li key={item.id} className={s.navItem}>
                <Button
                  as={'a'}
                  href={item.href ?? NON_NAVIGABLE_HREF}
                  className={clsx(s.navItem, isActive && s.activeItem)}
                  onClick={handleClick}
                >
                  {isActive && item.activeIcon ? item.activeIcon : item.icon}
                </Button>
              </li>
            )
          })}
        </ul>
        <div className={s.line}></div>
      </nav>
    </div>
  )
}
