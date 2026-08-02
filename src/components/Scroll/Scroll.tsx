import clsx from 'clsx'
import { useRef } from 'react'
import { useScrollThumbs, useThumbDrag } from '@/hooks'
import s from './Scroll.module.scss'

type Props = {
  orientation?: 'both' | 'horizontal' | 'vertical'
  children?: React.ReactNode
}

export const Scroll = ({ orientation = 'both', children }: Props) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const verticalThumbRef = useRef<HTMLDivElement>(null)
  const horizontalThumbRef = useRef<HTMLDivElement>(null)

  useScrollThumbs({ viewportRef, contentRef, verticalThumbRef, horizontalThumbRef })
  const { handleVerticalMouseDown, handleHorizontalMouseDown } = useThumbDrag({ viewportRef })

  return (
    <div className={s.scrollContainer}>
      <div className={s.scrollArea} ref={viewportRef}>
        <div ref={contentRef}>{children}</div>
      </div>
      {(orientation === 'horizontal' || orientation === 'both') && (
        <div className={s.horizontalScrollTrack}>
          <div
            className={clsx(s.scrollThumb, s.horizontalThumb)}
            ref={horizontalThumbRef}
            onMouseDown={handleHorizontalMouseDown}
          />
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
