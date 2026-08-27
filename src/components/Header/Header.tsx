import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { OutlineBell } from '@/assets'
import { ActionMenu, type ActionMenuItem } from '@/components/ActionMenu'
import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import s from './Header.module.scss'

export type HeaderProps = {
  brandName?: string
  isAuthenticated?: boolean
  logoHref?: string
  logInLabel?: string
  mobileAuthenticatedMenuItems?: ActionMenuItem[]
  mobileMenuLabel?: string
  notificationCount?: number
  notificationLabel?: string
  onLogInClick?: () => void
  onNotificationClick?: () => void
  onSignUpClick?: () => void
  signUpLabel?: string
} & Omit<ComponentPropsWithoutRef<'header'>, 'children'>

export const Header = ({
  brandName = 'Lumos',
  className,
  isAuthenticated = true,
  logoHref,
  logInLabel = 'Log in',
  mobileAuthenticatedMenuItems,
  mobileMenuLabel = 'Open menu',
  notificationCount = 0,
  notificationLabel = 'Notifications',
  onLogInClick,
  onNotificationClick,
  onSignUpClick,
  signUpLabel = 'Sign up',
  ...props
}: HeaderProps) => {
  const notificationAccessibleLabel =
    notificationCount > 0 ? `${notificationLabel}, ${notificationCount} unread` : notificationLabel

  const mobileAuthMenuItems: ActionMenuItem[] = [
    {
      id: 'log-in',
      label: logInLabel,
      onSelect: onLogInClick,
    },
    {
      id: 'sign-up',
      label: signUpLabel,
      onSelect: onSignUpClick,
    },
  ]
  const mobileAuthenticatedFallbackItems: ActionMenuItem[] = [
    {
      id: 'notifications',
      label:
        notificationCount > 0 ? `${notificationLabel} (${notificationCount})` : notificationLabel,
      onSelect: onNotificationClick,
    },
  ]
  const mobileMenuItems = isAuthenticated
    ? (mobileAuthenticatedMenuItems ?? mobileAuthenticatedFallbackItems)
    : mobileAuthMenuItems

  return (
    <header className={clsx(s.header, className)} {...props}>
      <div className={s.container}>
        <Typography variant={'large'} className={s.logo}>
          {logoHref ? (
            <a href={logoHref} className={s.logoLink}>
              {brandName}
            </a>
          ) : (
            brandName
          )}
        </Typography>

        <div className={s.actions}>
          {isAuthenticated && (
            <Button
              type={'button'}
              variant={'text'}
              className={s.notificationButton}
              aria-label={notificationAccessibleLabel}
              onClick={onNotificationClick}
            >
              <OutlineBell size={24} msgCounter={notificationCount} />
            </Button>
          )}

          {!isAuthenticated && (
            <div className={s.authActions}>
              <Button
                type={'button'}
                variant={'text'}
                style={{ minWidth: '6.25rem' }}
                onClick={onLogInClick}
              >
                {logInLabel}
              </Button>
              <Button
                type={'button'}
                variant={'primary'}
                style={{ minWidth: '6.25rem' }}
                onClick={onSignUpClick}
              >
                {signUpLabel}
              </Button>
            </div>
          )}

          <ActionMenu
            ariaLabel={mobileMenuLabel}
            items={mobileMenuItems}
            triggerClassName={s.mobileMenuButton}
            contentClassName={s.mobileMenu}
          />
        </div>
      </div>
    </header>
  )
}
