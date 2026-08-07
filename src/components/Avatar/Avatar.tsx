import clsx from 'clsx'
import { Avatar as AvatarItem } from 'radix-ui'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react'
import type { AvatarSize } from '@/types'
import { Typography } from '@/components'
import { getFirstLetterCapitalized } from '@/utils'
import s from './Avatar.module.scss'

export type AvatarProps = {
  src?: string
  alt?: string
  userName: string
  delayMs?: number
  size?: AvatarSize
} & Omit<ComponentPropsWithoutRef<typeof AvatarItem.Root>, 'asChild'>

export const Avatar = forwardRef<ComponentRef<typeof AvatarItem.Root>, AvatarProps>(
  ({ src, alt, userName, delayMs = 600, size = 's', className, ...props }, ref) => {
    const fallBack = getFirstLetterCapitalized(userName)

    return (
      <AvatarItem.Root ref={ref} className={clsx(s.root, s[size], className)} {...props}>
        {src && <AvatarItem.Image className={s.image} src={src} alt={alt || userName} />}
        <AvatarItem.Fallback className={s.fallback} delayMs={delayMs}>
          <Typography variant={'body3'} color={'var(--color-light-100)'}>
            {fallBack}
          </Typography>
        </AvatarItem.Fallback>
      </AvatarItem.Root>
    )
  }
)

Avatar.displayName = 'Avatar'
