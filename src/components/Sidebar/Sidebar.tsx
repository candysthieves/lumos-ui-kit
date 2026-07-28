import type { ReactNode } from 'react'
import clsx from 'clsx'
import s from './Sidebar.module.scss'

export type SidebarItem = {
  activeIcon?: ReactNode
  disabled?: boolean
  icon: ReactNode
  id: string
  label: string
}

type Props = {
  items: SidebarItem[]
  activeId: string
  onValueChange: (id: string) => void
  onLogout: () => void
  logOutIcon: ReactNode
}

export const Sidebar = ({ items, activeId, onValueChange, onLogout, logOutIcon }: Props) => {
  return (
    <nav className={s.navBar}>
      <ul>
        {items.map(item => {
          const isActive = activeId === item.id

          return (
            <li key={item.id}>
              <button
                type={'button'}
                className={clsx(s.navItem, isActive && s.activeItem)}
                onClick={() => onValueChange(item.id)}
                disabled={item.disabled}
              >
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
                <span className={'typography-body2'}>{item.label}</span>
              </button>
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
