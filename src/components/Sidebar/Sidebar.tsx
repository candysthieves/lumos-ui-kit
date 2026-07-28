import type { ReactNode } from 'react'
import clsx from 'clsx'
import s from './Sidebar.module.scss'

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

          return (
            <li key={item.id}>
              <a
                href={item.disabled ? undefined : item.href || '#'}
                className={clsx(s.navItem, isActive && s.activeItem, item.disabled && s.disabled)}
                onClick={e => {
                  if (item.disabled || !item.href || item.href === '#') {
                    e.preventDefault()
                  }

                  if (!item.disabled) {
                    onValueChange?.(item.id)
                  }
                }}
                tabIndex={item.disabled ? -1 : 0}
                aria-disabled={item.disabled}
              >
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
                <span className={'typography-body2'}>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      <button type={'button'} className={s.logOutBtn} onClick={onLogout}>
        {logOutIcon}
        <span className={'typography-body2'}>Log Out</span>
      </button>
    </nav>
  )
}
