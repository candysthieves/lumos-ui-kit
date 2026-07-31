import clsx from 'clsx'
import { Avatar } from 'radix-ui'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { Typography } from '@/components'
import { getFirstLetterCapitalized } from '@/utils'
import s from './Avatar.module.scss'

type AvatarItem = {
  src?: string
  alt?: string
  userName: string
  delayMs?: number
}

type AvatarBlockProps = {
  users: AvatarItem[]
  className?: string
} & Omit<ComponentPropsWithoutRef<typeof Avatar.Root>, 'asChild' | 'children'>

export const AvatarBlock = forwardRef<HTMLDivElement, AvatarBlockProps>(
  ({ users, className, ...props }, ref) => {
    const lastUsers = [...users].slice(-3)

    return (
      <div ref={ref} className={clsx(s.avatarGroup, className)}>
        {lastUsers.map((user, index) => (
          <Avatar.Root key={index} className={clsx(s.rootBlock)} {...props}>
            {user.src && (
              <Avatar.Image
                className={s.blockImage}
                src={user.src}
                alt={user.alt || user.userName}
              />
            )}
            <Avatar.Fallback className={s.fallback} delayMs={user.delayMs}>
              <Typography variant={'body3'} color={'var(--color-light-100)'}>
                {getFirstLetterCapitalized(user.userName)}
              </Typography>
            </Avatar.Fallback>
          </Avatar.Root>
        ))}
      </div>
    )
  }
)

AvatarBlock.displayName = 'AvatarBlock'
