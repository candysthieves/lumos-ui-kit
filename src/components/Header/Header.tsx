import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import { useState } from 'react'
import { ArrowIosDownOutline, FlagEng, FlagRus, OutlineBell } from '@/assets'
import { Button } from '@/components/Button'
import { Select, type SelectItem } from '@/components/Select'
import { Typography } from '@/components/Typography'
import s from './Header.module.scss'

export type HeaderLanguage = 'english' | 'russian'

export type HeaderLanguageOption = {
  icon?: ReactNode
  label: string
  value: HeaderLanguage
}

const defaultLanguageOptions: HeaderLanguageOption[] = [
  {
    value: 'english',
    label: 'English',
    icon: <FlagEng size={20} />,
  },
  {
    value: 'russian',
    label: 'Russian',
    icon: <FlagRus size={20} />,
  },
]

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
} & ComponentPropsWithoutRef<'header'>

export const Header = ({
  brandName = 'Inctagram',
  className,
  defaultLanguage = 'english',
  isAuthenticated = true,
  language,
  languageOptions = defaultLanguageOptions,
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
  const selectedLanguage = language ?? internalLanguage
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

  return (
    <header className={clsx(s.header, className)} {...props}>
      <div className={s.content}>
        <Typography variant={'large'} className={s.logo}>
          {brandName}
        </Typography>

        <div className={s.actions}>
          {isAuthenticated && (
            <button
              type={'button'}
              className={s.notificationButton}
              aria-label={notificationLabel}
              onClick={onNotificationClick}
            >
              <OutlineBell size={24} msgCounter={notificationCount} />
            </button>
          )}

          <Select
            className={s.languageSelect}
            value={selectedLanguage}
            options={selectOptions}
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
        </div>
      </div>
    </header>
  )
}
