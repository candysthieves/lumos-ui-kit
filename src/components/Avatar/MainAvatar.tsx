import clsx from 'clsx'
import { Avatar } from 'radix-ui'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import type { MainAvatarSize } from '@/types'
import { CloseOutline, ImageOutline } from '@/assets/icons'
import { Button } from '@/components/Button'
import s from './Avatar.module.scss'

type MainAvatarProps = {
  src?: string
  alt?: string
  userName: string
  delayMs?: number
  showCloseButton?: boolean
  onClose?: () => void
  size?: MainAvatarSize
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const MainAvatar = forwardRef<HTMLDivElement, MainAvatarProps>(
  (
    {
      src,
      alt,
      userName,
      delayMs = 600,
      size = 'xl',
      className,
      showCloseButton = false,
      onClose,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={s.wrapper}>
        <Avatar.Root className={clsx(s.root, s[size], className)} {...props}>
          {src && <Avatar.Image className={s.image} src={src} alt={alt || userName} />}
          <Avatar.Fallback className={s.fallback} delayMs={delayMs}>
            <ImageOutline size={48} />
          </Avatar.Fallback>

          {showCloseButton && (
            <Button
              as={'span'}
              onClick={onClose}
              className={clsx(s.closeButton, s[`closeButton-${size}`])}
            >
              <CloseOutline
                color={'var(--color-light-100)'}
                backgroundColor={'var(--color-danger-500)'}
                svgProps={{
                  className: s.closeButtonIcon,
                }}
              />
            </Button>
          )}
        </Avatar.Root>
      </div>
    )
  }
)

MainAvatar.displayName = 'MainAvatar'
