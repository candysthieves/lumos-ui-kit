'use client'

import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Button } from '@/components'
import { getNavItemClickHandler } from '@/utils/getNavItemClickHandler'
import s from './Menu.module.scss'

export type MenuItem = {
  activeIcon?: ReactNode
  href?: string
  icon: ReactNode
  id: string
}

type MenuProps = {
  activeId: string
  items: MenuItem[]
  onValueChange?: (id: string) => void
}

export const Menu = ({ items, activeId, onValueChange }: MenuProps) => {
  return (
    <div>
      <nav className={s.navBar}>
        <ul className={s.list}>
          {items.map(item => {
            const isActive = activeId === item.id
            const { handleClick, resolvedHref } = getNavItemClickHandler(item.href, () =>
              onValueChange?.(item.id)
            )

            return (
              <li key={item.id}>
                <Button
                  as={'a'}
                  href={resolvedHref}
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
