import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import s from './Scroll.module.scss'

type Props = {
  orientation?: 'both' | 'horizontal' | 'vertical'
  children?: React.ReactNode
}

type DragState = {
  startY: number
  startScrollTop: number
}

export const Scroll = ({ orientation = 'both', children }: Props) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const verticalThumbRef = useRef<HTMLDivElement>(null)
  const horizontalThumbRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef<DragState | null>(null)

  const getVerticalMetrics = (viewport: HTMLDivElement) => {
    const { clientHeight, scrollHeight } = viewport
    if (scrollHeight <= clientHeight) return null

    const thumbHeight = (clientHeight / scrollHeight) * clientHeight
    const maxThumbOffsetY = clientHeight - thumbHeight
    const maxScrollOffsetY = scrollHeight - clientHeight

    return { thumbHeight, maxThumbOffsetY, maxScrollOffsetY }
  }

  const getHorizontalMetrics = (viewport: HTMLDivElement) => {
    const { clientWidth, scrollWidth } = viewport
    if (scrollWidth <= clientWidth) return null

    const thumbWidth = (clientWidth / scrollWidth) * clientWidth
    const maxThumbOffsetX = clientWidth - thumbWidth
    const maxScrollOffsetX = scrollWidth - clientWidth

    return { thumbWidth, maxThumbOffsetX, maxScrollOffsetX }
  }

  const updateThumbs = () => {
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
  }

  const handleVerticalMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const viewport = viewportRef.current
    if (!viewport) return

    dragStartRef.current = {
      startY: event.clientY,
      startScrollTop: viewport.scrollTop,
    }

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dragStart = dragStartRef.current
      const metrics = getVerticalMetrics(viewport)
      if (!dragStart || !metrics) return

      const { maxThumbOffsetY, maxScrollOffsetY } = metrics
      const deltaY = moveEvent.clientY - dragStart.startY
      const scrollRatio = maxScrollOffsetY / maxThumbOffsetY
      const newScrollTop = dragStart.startScrollTop + deltaY * scrollRatio

      viewport.scrollTop = Math.max(0, Math.min(newScrollTop, maxScrollOffsetY))
    }

    const handleMouseUp = () => {
      dragStartRef.current = null
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

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
  }, [])

  return (
    <div className={s.scrollContainer}>
      <div className={s.scrollArea} ref={viewportRef}>
        <div ref={contentRef}>{children}</div>
      </div>
      {(orientation === 'horizontal' || orientation === 'both') && (
        <div className={s.horizontalScrollTrack}>
          <div className={clsx(s.scrollThumb, s.horizontalThumb)} ref={horizontalThumbRef} />
        </div>
      )}
      {(orientation === 'vertical' || orientation === 'both') && (
        <div className={s.verticalScrollTrack}>
          <div
            className={clsx(s.scrollThumb, s.verticalThumb)}
            ref={verticalThumbRef}
            onMouseDown={handleVerticalMouseDown}
          />
        </div>
      )}
    </div>
  )
}
