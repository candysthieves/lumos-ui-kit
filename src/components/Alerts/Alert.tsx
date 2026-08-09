import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import { CloseOutline } from '@/assets'
import { Button, Typography } from '@/components'
import s from './Alert.module.scss'

export interface AlertsProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
  onClose?: () => void
  title?: string
  variant?: 'error' | 'success'
}

export const Alerts = ({
  className,
  onClose,
  title,
  children,
  variant = 'success',
  ...props
}: AlertsProps) => {
  if (!title && !children) return null

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

        {children && <Typography variant={'subtitle1'}>{children}</Typography>}
      </div>

      {onClose && (
        <Button type={'button'} aria-label={'Close'} className={s.closeBtn} onClick={onClose}>
          <CloseOutline />
        </Button>
      )}
    </div>
  )
}
