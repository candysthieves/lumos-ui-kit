import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { Avatar } from '@/components/Avatar'
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
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const AvatarBlock = forwardRef<HTMLDivElement, AvatarBlockProps>(
  ({ users, className, ...props }, ref) => {
    const lastUsers = users.slice(-3)

    return (
      <div ref={ref} className={clsx(s.avatarGroup, className)} {...props}>
        {lastUsers.map((user, index) => (
          <div key={index} className={s.rootBlock}>
            <Avatar
              src={user.src}
              className={s.blockImage}
              alt={user.alt || user.userName}
              userName={user.userName}
              delayMs={user.delayMs}
              size={'xs'}
            />
          </div>
        ))}
      </div>
    )
  }
)

AvatarBlock.displayName = 'AvatarBlock'
