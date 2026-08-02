import type { AttachmentProps } from '@/components/Message/types'
import { isAudioAttachment } from '@/utils'
import s from './Message.module.scss'

export const AttachmentItem = ({ attachment }: AttachmentProps) => {
  if (isAudioAttachment(attachment)) {
    return <>{attachment.component}</>
  }

  if (attachment.type === 'image') {
    return (
      <div className={s.attachment}>
        <img className={s.image} src={attachment.url} alt={attachment.name} />
      </div>
    )
  }
}
