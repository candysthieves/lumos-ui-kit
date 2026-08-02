import type { ReplyPreviewProps } from '@/components/Message/types'
import { Typography } from '@/components'
import s from './Message.module.scss'

export const ReplyPreview = ({ reply }: ReplyPreviewProps) => {
  return (
    <div className={s.reply}>
      <Typography color={'var(--color-success-500)'} variant={'caption1'}>
        {reply.author}
      </Typography>

      <Typography color={'var(--color-light-900)'} variant={'caption1'} className={s.replyText}>
        {reply.text}
      </Typography>
    </div>
  )
}
