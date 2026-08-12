'use client'

import clsx from 'clsx'
import type { MessageProps } from '@/components/Message/types'
import { Typography } from '@/components'
import { Avatar } from '@/components/Avatar'
import { AttachmentItem } from './AttachmentItem'
import s from './Message.module.scss'
import { MessageStatus } from './MessageStatus'
import { ReplyPreview } from './ReplyPreview'

export const Message = ({
  author,
  avatar,
  text,
  timestamp,
  type = 'incoming',
  status = 'sent',
  replyTo,
  attachments,
  className,
}: MessageProps) => {
  const own = type === 'outgoing'
  const timeColor = own ? 'var(--color-accent-100)' : 'var(--color-light-900)'

  return (
    <article className={clsx(s.message, own && s.outgoing, className)}>
      {!own && (
        <Avatar src={avatar} userName={author} alt={author} size={'s'} className={s.avatar} />
      )}

      <div className={s.content}>
        <div className={clsx(s.bubble, attachments?.type === 'image' && s.card)}>
          {attachments && <AttachmentItem attachment={attachments} />}
          {replyTo && <ReplyPreview reply={replyTo} />}
          {text && (
            <Typography variant={'body1'} color={'var(--color-light-100)'} className={s.text}>
              {text}
            </Typography>
          )}

          <div className={s.messageInfo}>
            <time className={s.time}>
              <Typography variant={'caption1'} color={timeColor}>
                {timestamp}
              </Typography>
            </time>
            {status && own && <MessageStatus status={status} />}
          </div>
        </div>
      </div>
    </article>
  )
}
