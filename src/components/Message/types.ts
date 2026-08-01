import type { ReactNode } from 'react'

export type MessageStatus = 'delivered' | 'error' | 'read' | 'sending' | 'sent'
export type Message = 'incoming' | 'outgoing'

export type Attachment = {
  id: number | string
  name: string
  url: string
  type: 'image'
}

export type AudioAttachment = {
  id: number | string
  type: 'audio'
  component: ReactNode
}

export type AttachmentFile = Attachment | AudioAttachment

export type ReplyTo = {
  id: number | string
  author: string
  text: string
}

export type AttachmentProps = {
  attachment: AttachmentFile
}

export type MessageProps = {
  author: string
  text?: string
  timestamp: string
  type?: Message
  avatar?: string
  status?: MessageStatus
  replyTo?: ReplyTo
  attachments?: AttachmentFile
  className?: string
}

export type MessageStatusProps = {
  status: MessageStatus
}

export type ReplyPreviewProps = {
  reply: ReplyTo
}
