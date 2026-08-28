'use client'

import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import { Button, Typography } from '@/components'
import { TAB_INDEX } from '@/constants'
import { getNavItemClickHandler } from '@/utils/getNavItemClickHandler'
import s from './Sidebar.module.scss'

export type SidebarItem = {
  activeIcon?: ReactNode
  disabled?: boolean
  href?: ((userId: string) => string) | string
  icon: ReactNode
  id: string
  label: string
}

type SidebarProps = {
  userId?: string
  activeId: string
  items: SidebarItem[]
  logOutIcon: ReactNode
  onLogout: () => void
  onValueChange?: (id: string) => void
  linkTag?: ElementType
}

export const Sidebar = ({
  items,
  userId,
  activeId,
  onValueChange,
  onLogout,
  logOutIcon,
  linkTag: LinkTag = 'a',
}: SidebarProps) => {
  return (
    <nav className={s.navBar}>
      <ul>
        {items.map(item => {
          const isActive = activeId === item.id
          const isDisabled = Boolean(item.disabled)

          const hrefLinkedToCurrentUserId =
            typeof item.href === 'function' ? (userId ? item.href(userId) : undefined) : item.href

          const { handleClick: baseHandleClick, resolvedHref } = getNavItemClickHandler(
            hrefLinkedToCurrentUserId,
            () => onValueChange?.(item.id)
          )

          const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
            if (isDisabled) {
              event.preventDefault()

              return
            }

            baseHandleClick(event)
          }

          return (
            <li key={item.id}>
              <Button
                as={LinkTag}
                href={isDisabled ? undefined : resolvedHref}
                className={clsx(s.navItem, isActive && s.activeItem, isDisabled && s.disabled)}
                onClick={handleClick}
                tabIndex={isDisabled ? TAB_INDEX.DISABLED : TAB_INDEX.ENABLED}
                aria-disabled={isDisabled}
              >
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
                <Typography variant={'body2'}>{item.label}</Typography>
              </Button>
            </li>
          )
        })}
      </ul>

      <Button type={'button'} className={s.logOutBtn} onClick={onLogout}>
        {logOutIcon}
        <Typography variant={'body2'}>{'Log Out'}</Typography>
      </Button>
      <div className={s.line}></div>
    </nav>
  )
}
