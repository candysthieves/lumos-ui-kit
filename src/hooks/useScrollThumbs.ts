import { useCallback, useEffect, type RefObject } from 'react'
import { getHorizontalMetrics } from '@/utils/getHorizontalMetrics'
import { getVerticalMetrics } from '@/utils/getVerticalMetrics'

type UseScrollThumbsParams = {
  viewportRef: RefObject<HTMLDivElement | null>
  contentRef: RefObject<HTMLDivElement | null>
  verticalThumbRef: RefObject<HTMLDivElement | null>
  horizontalThumbRef: RefObject<HTMLDivElement | null>
}

export const useScrollThumbs = ({
  viewportRef,
  contentRef,
  verticalThumbRef,
  horizontalThumbRef,
}: UseScrollThumbsParams) => {
  const updateThumbs = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const verticalMetrics = getVerticalMetrics(viewport)
    if (verticalMetrics && verticalThumbRef.current) {
      const { thumbHeight, maxThumbOffsetY, maxScrollOffsetY } = verticalMetrics
      const thumbTop = (viewport.scrollTop / maxScrollOffsetY) * maxThumbOffsetY

      verticalThumbRef.current.style.display = ''
      verticalThumbRef.current.style.height = `${thumbHeight}px`
      verticalThumbRef.current.style.transform = `translateY(${thumbTop}px)`
    } else if (verticalThumbRef.current) {
      verticalThumbRef.current.style.display = 'none'
    }

    const horizontalMetrics = getHorizontalMetrics(viewport)
    if (horizontalMetrics && horizontalThumbRef.current) {
      const { thumbWidth, maxThumbOffsetX, maxScrollOffsetX } = horizontalMetrics
      const thumbLeft = (viewport.scrollLeft / maxScrollOffsetX) * maxThumbOffsetX

      horizontalThumbRef.current.style.display = ''
      horizontalThumbRef.current.style.width = `${thumbWidth}px`
      horizontalThumbRef.current.style.transform = `translateX(${thumbLeft}px)`
    } else if (horizontalThumbRef.current) {
      horizontalThumbRef.current.style.display = 'none'
    }
  }, [viewportRef, verticalThumbRef, horizontalThumbRef])

  useEffect(() => {
    const viewport = viewportRef.current
    const observer = new ResizeObserver(() => {
      updateThumbs()
    })

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    updateThumbs()
    viewport?.addEventListener('scroll', updateThumbs)

    return () => {
      viewport?.removeEventListener('scroll', updateThumbs)
      observer.disconnect()
    }
  }, [updateThumbs, viewportRef, contentRef])
}
