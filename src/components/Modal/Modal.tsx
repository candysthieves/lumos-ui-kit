'use client'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, type ReactNode } from 'react'
import type { ModalSize } from '@/types'
import { Close } from '@/assets'
import { Button, Typography } from '@/components'
import s from './Modal.module.scss'

export type ModalProps = {
  open: boolean
  onClose: () => void
  size?: ModalSize
  modalTitle?: ReactNode
  children: ReactNode
  showHeader?: boolean
  showCloseButton?: boolean
  fullSize?: boolean
  closeButtonOutside?: boolean
} & Omit<ComponentPropsWithoutRef<typeof Dialog.Content>, 'children'>

export const Modal = forwardRef<ComponentRef<typeof Dialog.Content>, ModalProps>(
  (
    {
      open,
      onClose,
      modalTitle = '',
      children,
      size = 'm',
      className,
      showHeader,
      showCloseButton = true,
      fullSize = false,
      closeButtonOutside = false,
      ...rest
    },
    ref
  ) => (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content
          className={clsx(s.content, s[`size-${size}`], className)}
          ref={ref}
          {...rest}
        >
          {showHeader && (
            <Dialog.Title asChild>
              {typeof modalTitle === 'string' ? (
                <Typography
                  className={s.title}
                  variant={'h1'}
                  noWrap
                  color={'var(--color-light-100)'}
                >
                  {modalTitle}
                </Typography>
              ) : (
                <div className={s.title}>{modalTitle}</div>
              )}
            </Dialog.Title>
          )}
          <div className={clsx(s.childContent, fullSize && s.fullSize)}>{children}</div>
          {showCloseButton && (
            <Dialog.Close asChild>
              <Button
                type={'button'}
                className={clsx(s.iconButton, closeButtonOutside && s.closeButtonOutside)}
                aria-label={'Close'}
              >
                <Close />
              </Button>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
)

Modal.displayName = 'Modal'
