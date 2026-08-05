import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { useState } from 'react'
import { ArrowIosDownOutline, FlagEng, FlagRus, OutlineBell } from '@/assets'
import { Button } from '@/components/Button'
import { Select, type SelectItem } from '@/components/Select'
import { Typography } from '@/components/Typography'
import s from './Header.module.scss'

export type HeaderLanguage = 'english' | 'russian'

export type HeaderProps = {
  isAuthenticated?: boolean
  language?: HeaderLanguage
  notificationCount?: number
  onLanguageChange?: (value: HeaderLanguage) => void
  onLogInClick?: () => void
  onNotificationClick?: () => void
  onSignUpClick?: () => void
} & ComponentPropsWithoutRef<'header'>

const languageOptions: SelectItem[] = [
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

export const Header = ({
  className,
  isAuthenticated = true,
  language,
  notificationCount = 0,
  onLanguageChange,
  onLogInClick,
  onNotificationClick,
  onSignUpClick,
  ...props
}: HeaderProps) => {
  const [internalLanguage, setInternalLanguage] = useState<HeaderLanguage>('english')
  const selectedLanguage = language ?? internalLanguage

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
          Inctagram
        </Typography>

        <div className={s.actions}>
          {isAuthenticated && (
            <button
              type={'button'}
              className={s.notificationButton}
              aria-label={'Notifications'}
              onClick={onNotificationClick}
            >
              <OutlineBell size={24} msgCounter={notificationCount} />
            </button>
          )}

          <Select
            className={s.languageSelect}
            value={selectedLanguage}
            options={languageOptions}
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
                Log in
              </Button>
              <Button
                type={'button'}
                variant={'primary'}
                style={{ minWidth: '6.25rem' }}
                onClick={onSignUpClick}
              >
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
