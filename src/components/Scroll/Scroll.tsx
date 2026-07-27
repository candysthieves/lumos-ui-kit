import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import s from './Scroll.module.scss'

type Props = {
  orientation?: 'both' | 'horizontal' | 'vertical'
  children?: React.ReactNode
}

export const Scroll = ({ orientation = 'both', children }: Props) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const verticalThumbRef = useRef<HTMLDivElement>(null)
  const horizontalThumbRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const updateThumbs = () => {
    const viewport = viewportRef.current
    if (!viewport) return

    const clientHeight = viewport.clientHeight
    const scrollHeight = viewport.scrollHeight
    const scrollTop = viewport.scrollTop

    const clientWidth = viewport.clientWidth
    const scrollWidth = viewport.scrollWidth
    const scrollLeft = viewport.scrollLeft

    // Vertical
    if (scrollHeight > clientHeight) {
      const thumbHeight = (clientHeight / scrollHeight) * clientHeight
      const maxThumbOffsetY = clientHeight - thumbHeight
      const maxScrollOffsetY = scrollHeight - clientHeight
      const thumbTop = (scrollTop / maxScrollOffsetY) * maxThumbOffsetY

      if (verticalThumbRef.current) {
        verticalThumbRef.current.style.display = ''
        verticalThumbRef.current.style.height = `${thumbHeight}px`
        verticalThumbRef.current.style.transform = `translateY(${thumbTop}px)`
      }
    } else if (verticalThumbRef.current) {
      verticalThumbRef.current.style.display = 'none'
    }

    // Horizontal
    if (scrollWidth > clientWidth) {
      const thumbWidth = (clientWidth / scrollWidth) * clientWidth
      const maxThumbOffsetX = clientWidth - thumbWidth
      const maxScrollOffsetX = scrollWidth - clientWidth
      const thumbLeft = (scrollLeft / maxScrollOffsetX) * maxThumbOffsetX

      if (horizontalThumbRef.current) {
        horizontalThumbRef.current.style.display = ''
        horizontalThumbRef.current.style.width = `${thumbWidth}px`
        horizontalThumbRef.current.style.transform = `translateX(${thumbLeft}px)`
      }
    } else if (horizontalThumbRef.current) {
      horizontalThumbRef.current.style.display = 'none'
    }
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
          <div className={clsx(s.scrollThumb, s.verticalThumb)} ref={verticalThumbRef} />
        </div>
      )}
    </div>
  )
}
