'use client'

import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import { Button } from '@/components'
import { getNavItemClickHandler } from '@/utils/getNavItemClickHandler'
import s from './Menu.module.scss'

export type MenuItem = {
  activeIcon?: ReactNode
  href?: ((userId: string) => string) | string
  icon: ReactNode
  id: string
}

type MenuProps = {
  userId: string
  activeId: string
  items: MenuItem[]
  onValueChange?: (id: string) => void
  linkTag?: ElementType
}

export const Menu = ({
  userId,
  items,
  activeId,
  onValueChange,
  linkTag: LinkTag = 'a',
}: MenuProps) => {
  return (
    <div>
      <nav className={s.navBar}>
        <ul className={s.list}>
          {items.map(item => {
            const isActive = activeId === item.id

            const hrefLinkedToCurrentUserId =
              typeof item.href === 'function' ? (userId ? item.href(userId) : undefined) : item.href

            const { handleClick, resolvedHref } = getNavItemClickHandler(
              hrefLinkedToCurrentUserId,
              () => onValueChange?.(item.id)
            )

            return (
              <li key={item.id}>
                <Button
                  as={LinkTag}
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
