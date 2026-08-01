import type { ReactNode } from 'react'
import type { MessageStatusProps } from '@/components/Message/types'
import { CheckmarkOutline, DoneAllOutline, ErrorIcon, Sending } from '@/assets/icons'
import type { MessageStatus as Status } from './types'
import s from './Message.module.scss'

const LABELS: Record<Status, ReactNode> = {
  sending: <Sending color={'var(--color-accent-100)'} size={16} />,
  sent: <CheckmarkOutline color={'var(--color-accent-100)'} size={16} />,
  delivered: <DoneAllOutline color={'var(--color-accent-100)'} size={16} />,
  read: <DoneAllOutline color={'var(--color-success-500)'} size={16} />,
  error: <ErrorIcon color={'var(--color-danger-500)'} size={16} />,
}

export const MessageStatus = ({ status }: MessageStatusProps) => {
  return <span className={s.status}>{LABELS[status]}</span>
}
