'use client'

import clsx from 'clsx'
import { Avatar } from 'radix-ui'
import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent,
  forwardRef,
  useState,
} from 'react'
import type { MainAvatarSize } from '@/types'
import { CloseOutline, ImageOutline } from '@/assets'
import { Modal } from '@/components'
import { Button } from '@/components/Button'
import s from './Avatar.module.scss'

export type MainAvatarProps = {
  src?: string
  alt?: string
  userName: string
  delayMs?: number
  showCloseButton?: boolean
  isScalable?: boolean
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
      isScalable = false,
      onClose,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const handleAvatarClick = () => {
      if (isScalable) {
        openModal()
      }
    }

    const handleAvatarKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (!isScalable) return

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openModal()
      }
    }

    // Protects from opening the modal window by click on avatar cross button
    const handleCloseButtonClick = (event: MouseEvent<HTMLSpanElement>) => {
      event.stopPropagation()
      onClose?.()
    }

    return (
      <div ref={ref} className={s.wrapper}>
        <Avatar.Root
          className={clsx(s.root, s[size], isScalable && s.scalable, className)}
          onClick={handleAvatarClick}
          onKeyDown={handleAvatarKeyDown}
          role={isScalable ? 'button' : undefined}
          tabIndex={isScalable ? 0 : undefined}
          aria-label={isScalable ? `View ${alt || userName} avatar` : undefined}

          {...props}
        >
          {src && <Avatar.Image className={s.image} src={src} alt={alt || userName} />}
          <Avatar.Fallback className={s.fallback} delayMs={delayMs}>
            <ImageOutline size={48} />
          </Avatar.Fallback>

          {showCloseButton && (
            <Button
              as={'span'}
              onClick={handleCloseButtonClick}
              className={clsx(
                s.closeButton,
                isScalable && s.closeButtonScalable,
                s[`closeButton-${size}`]
              )}
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

        {isScalable && (
          <Modal open={isOpen} onClose={closeModal} size={'m'} closeButtonOutside fullSize>
            <div className={s.imageContent}>
              <img src={src} alt={alt || userName} className={s.imageItem} />
            </div>
          </Modal>
        )}
      </div>
    )
  }
)

MainAvatar.displayName = 'MainAvatar'
