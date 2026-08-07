import type { ReactNode } from 'react'

export type ProgressThemeColor = 'error' | 'inherit' | 'primary' | 'success' | 'warning'
export type ProgressSizeVariant = 'lg' | 'md' | 'sm'
export type AvatarSize = 'l' | 'm' | 's' | 'xs'
export type MainAvatarSize = 'xl' | 'xxl'
export type ModalSize = 'l' | 'm' | 's' | 'xl' | 'xs'
export type HeaderLanguage = 'english' | 'russian'

export type HeaderLanguageOption = {
  icon?: ReactNode
  label: string
  value: HeaderLanguage
}
