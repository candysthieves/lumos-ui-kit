import clsx from 'clsx'
import { Avatar as AvatarItem } from 'radix-ui'
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
  hasCloseButton?: boolean
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
      hasCloseButton = false,
      onClose,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={s.wrapper}>
        <AvatarItem.Root className={clsx(s.root, s[size], className)} {...props}>
          {src && <AvatarItem.Image className={s.image} src={src} alt={alt || userName} />}
          <AvatarItem.Fallback className={s.fallback} delayMs={delayMs}>
            <ImageOutline size={48} />
          </AvatarItem.Fallback>

          {hasCloseButton && (
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
        </AvatarItem.Root>
      </div>
    )
  }
)

MainAvatar.displayName = 'MainAvatar'
