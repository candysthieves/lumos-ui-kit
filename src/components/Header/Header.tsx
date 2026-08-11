import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { useId, useState } from 'react'
import type { HeaderLanguage, HeaderLanguageOption } from '@/types'
import { ArrowIosDownOutline, MoreHorizontalOutline, OutlineBell } from '@/assets'
import { Button } from '@/components/Button'
import { Select, type SelectItem } from '@/components/Select'
import { Typography } from '@/components/Typography'
import { DEFAULT_HEADER_LANGUAGE_OPTIONS } from '@/constants'
import s from './Header.module.scss'

export type HeaderProps = {
  brandName?: string
  defaultLanguage?: HeaderLanguage
  isAuthenticated?: boolean
  language?: HeaderLanguage
  languageOptions?: HeaderLanguageOption[]
  logInLabel?: string
  notificationCount?: number
  notificationLabel?: string
  onLanguageChange?: (value: HeaderLanguage) => void
  onLogInClick?: () => void
  onNotificationClick?: () => void
  onSignUpClick?: () => void
  signUpLabel?: string
} & Omit<ComponentPropsWithoutRef<'header'>, 'children'>

export const Header = ({
  brandName = 'Lumos',
  className,
  defaultLanguage = 'english',
  isAuthenticated = true,
  language,
  languageOptions = DEFAULT_HEADER_LANGUAGE_OPTIONS,
  logInLabel = 'Log in',
  notificationCount = 0,
  notificationLabel = 'Notifications',
  onLanguageChange,
  onLogInClick,
  onNotificationClick,
  onSignUpClick,
  signUpLabel = 'Sign up',
  ...props
}: HeaderProps) => {
  const [internalLanguage, setInternalLanguage] = useState<HeaderLanguage>(defaultLanguage)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuId = useId()
  const selectedLanguage = language ?? internalLanguage
  const notificationAccessibleLabel =
    notificationCount > 0 ? `${notificationLabel}, ${notificationCount} unread` : notificationLabel
  const selectOptions: SelectItem[] = languageOptions.map(option => ({
    icon: option.icon,
    label: option.label,
    value: option.value,
  }))

  const handleLanguageChange = (value: string) => {
    const nextLanguage = value as HeaderLanguage

    if (language === undefined) {
      setInternalLanguage(nextLanguage)
    }

    onLanguageChange?.(nextLanguage)
  }

  const handleMobileNotificationClick = () => {
    setIsMobileMenuOpen(false)
    onNotificationClick?.()
  }

  const handleMobileLogInClick = () => {
    setIsMobileMenuOpen(false)
    onLogInClick?.()
  }

  const handleMobileSignUpClick = () => {
    setIsMobileMenuOpen(false)
    onSignUpClick?.()
  }

  return (
    <header className={clsx(s.header, className)} {...props}>
      <div className={s.container}>
        <Typography variant={'large'} className={s.logo}>
          {brandName}
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

          <Select
            className={s.languageSelect}
            value={selectedLanguage}
            options={selectOptions}
            triggerProps={{ 'aria-label': 'Language' }}
            valueProps={{ className: s.languageValue }}
            iconProps={{ className: s.languageIcon }}
            triggerIcon={<ArrowIosDownOutline size={24} />}
            onValueChange={handleLanguageChange}
          />

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

          <Button
            type={'button'}
            variant={'text'}
            className={s.mobileMenuButton}
            aria-controls={mobileMenuId}
            aria-expanded={isMobileMenuOpen}
            aria-label={'Open menu'}
            onClick={() => setIsMobileMenuOpen(isOpen => !isOpen)}
          >
            <MoreHorizontalOutline size={24} />
          </Button>

          {isMobileMenuOpen && (
            <div id={mobileMenuId} className={s.mobileMenu} role={'menu'}>
              {isAuthenticated ? (
                <Button
                  type={'button'}
                  variant={'text'}
                  className={s.mobileMenuItem}
                  role={'menuitem'}
                  onClick={handleMobileNotificationClick}
                >
                  {notificationCount > 0
                    ? `${notificationLabel} (${notificationCount})`
                    : notificationLabel}
                </Button>
              ) : (
                <>
                  <Button
                    type={'button'}
                    variant={'text'}
                    className={s.mobileMenuItem}
                    role={'menuitem'}
                    onClick={handleMobileLogInClick}
                  >
                    {logInLabel}
                  </Button>
                  <Button
                    type={'button'}
                    variant={'text'}
                    className={s.mobileMenuItem}
                    role={'menuitem'}
                    onClick={handleMobileSignUpClick}
                  >
                    {signUpLabel}
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
