import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Button, Typography } from '@/components'
import { getNavItemClickHandler } from '@/utils/getNavItemClickHandler'
import s from './Sidebar.module.scss'

const TAB_INDEX = {
  ENABLED: 0,
  DISABLED: -1,
} as const

export type SidebarItem = {
  activeIcon?: ReactNode
  disabled?: boolean
  href?: string
  icon: ReactNode
  id: string
  label: string
}

type Props = {
  activeId: string
  items: SidebarItem[]
  logOutIcon: ReactNode
  onLogout: () => void
  onValueChange?: (id: string) => void
}

export const Sidebar = ({ items, activeId, onValueChange, onLogout, logOutIcon }: Props) => {
  return (
    <nav className={s.navBar}>
      <ul>
        {items.map(item => {
          const isActive = activeId === item.id
          const isDisabled = Boolean(item.disabled)
          const { handleClick: baseHandleClick, resolvedHref } = getNavItemClickHandler(
            item.href,
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
                as={'a'}
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
