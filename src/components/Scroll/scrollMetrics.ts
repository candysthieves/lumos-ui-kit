export type VerticalMetrics = {
  thumbHeight: number
  maxThumbOffsetY: number
  maxScrollOffsetY: number
}

export type HorizontalMetrics = {
  thumbWidth: number
  maxThumbOffsetX: number
  maxScrollOffsetX: number
}

export const getVerticalMetrics = (viewport: HTMLDivElement): null | VerticalMetrics => {
  const { clientHeight, scrollHeight } = viewport
  if (scrollHeight <= clientHeight) return null

  const thumbHeight = (clientHeight / scrollHeight) * clientHeight
  const maxThumbOffsetY = clientHeight - thumbHeight
  const maxScrollOffsetY = scrollHeight - clientHeight

  return { thumbHeight, maxThumbOffsetY, maxScrollOffsetY }
}

export const getHorizontalMetrics = (viewport: HTMLDivElement): HorizontalMetrics | null => {
  const { clientWidth, scrollWidth } = viewport
  if (scrollWidth <= clientWidth) return null

  const thumbWidth = (clientWidth / scrollWidth) * clientWidth
  const maxThumbOffsetX = clientWidth - thumbWidth
  const maxScrollOffsetX = scrollWidth - clientWidth

  return { thumbWidth, maxThumbOffsetX, maxScrollOffsetX }
}
