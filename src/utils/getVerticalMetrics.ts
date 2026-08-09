import type { VerticalMetrics } from '@/components/types'

export const getVerticalMetrics = (viewport: HTMLDivElement): null | VerticalMetrics => {
  const { clientHeight, scrollHeight } = viewport
  if (scrollHeight <= clientHeight) return null

  const thumbHeight = (clientHeight / scrollHeight) * clientHeight
  const maxThumbOffsetY = clientHeight - thumbHeight
  const maxScrollOffsetY = scrollHeight - clientHeight

  return { thumbHeight, maxThumbOffsetY, maxScrollOffsetY }
}
