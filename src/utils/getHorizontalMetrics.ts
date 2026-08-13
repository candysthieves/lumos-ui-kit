import type { HorizontalMetrics } from '@/components/types'

export const getHorizontalMetrics = (viewport: HTMLDivElement): HorizontalMetrics | null => {
  const { clientWidth, scrollWidth } = viewport
  if (scrollWidth <= clientWidth) return null

  const thumbWidth = (clientWidth / scrollWidth) * clientWidth
  const maxThumbOffsetX = clientWidth - thumbWidth
  const maxScrollOffsetX = scrollWidth - clientWidth

  return { thumbWidth, maxThumbOffsetX, maxScrollOffsetX }
}
