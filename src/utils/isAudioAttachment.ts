import type { Attachment, AudioAttachment } from '@/components/Message/types'

export const isAudioAttachment = (
  attachment: Attachment | AudioAttachment
): attachment is AudioAttachment => {
  return attachment.type === 'audio' && 'component' in attachment
}
