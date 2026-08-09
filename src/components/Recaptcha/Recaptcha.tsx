import clsx from 'clsx'
import { forwardRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Typography } from '@/components'
import s from './Recaptcha.module.scss'

export interface RecaptchaProps {
  siteKey: string
  onChange?: (token: null | string) => void
  onExpired?: () => void
  onError?: () => void
  errorMessage?: string
  expiredMessage?: string
  theme?: 'dark' | 'light'
  className?: string
}

export const Recaptcha = forwardRef<ReCAPTCHA, RecaptchaProps>(
  (
    {
      siteKey,
      onChange,
      onExpired,
      onError,
      errorMessage,
      expiredMessage,
      theme = 'dark',
      className,
    },
    ref
  ) => {
    const isError = errorMessage
    return (
      <div className={clsx(s.captchaWrapper, className)}>
        <div className={clsx({ [s.errorBorder]: isError })}>
          {expiredMessage && <span className={s.expiredMessage}>{expiredMessage}</span>}
          <ReCAPTCHA
            ref={ref}
            sitekey={siteKey}
            onChange={onChange}
            onExpired={onExpired}
            onErrored={onError}
            theme={theme}
          />
          {isError && (
            <Typography variant={'caution-error'} className={s.errorMessage}>
              {errorMessage}
            </Typography>
          )}
        </div>
      </div>
    )
  }
)

Recaptcha.displayName = 'Recaptcha'
