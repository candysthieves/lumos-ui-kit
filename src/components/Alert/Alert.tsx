import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { CloseOutline } from '@/assets'
import { Typography } from '@/components'
import s from './Alert.module.scss'

export type FieldError = { field: string; message: string }
export type AlertMessage = FieldError[] | string

export type AlertVariant = 'error' | 'success' | 'warning'

export type AlertProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children?: AlertMessage
  onClose?: () => void
  title?: string
  variant?: AlertVariant
}

export const Alert = ({
  className,
  onClose,
  title,
  children,
  variant = 'success',
  ...props
}: AlertProps) => {
  const isFieldErrors = Array.isArray(children) && children.length > 0
  const isStringContent = typeof children === 'string' && children.trim().length > 0

  if (!title && !isStringContent && !isFieldErrors) return null

  return (
    <div
      className={clsx(s.root, s[variant], className)}
      role={variant === 'error' ? 'alert' : 'status'}
      {...props}
    >
      <div className={s.content}>
        {title && (
          <Typography className={s.title} variant={'subtitle2'}>
            {title}
          </Typography>
        )}

        {isStringContent && <Typography variant={'subtitle1'}>{children}</Typography>}

        {isFieldErrors && (
          <ul className={s.errorList}>
            {children.map((err, index) => (
              <li key={`${err.field}-${index}`}>
                <Typography variant={'subtitle1'}>
                  <b className={s.errorField}>{err.field}:</b> {err.message}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </div>

      {onClose && (
        <button type={'button'} aria-label={'Close'} className={s.closeBtn} onClick={onClose}>
          <CloseOutline />
        </button>
      )}
    </div>
  )
}
