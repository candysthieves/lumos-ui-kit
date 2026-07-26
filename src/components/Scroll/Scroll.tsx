import clsx from 'clsx'
import { useRef } from 'react'
import s from './Scroll.module.scss'

type Props = {
  orientation?: 'both' | 'horizontal' | 'vertical'
  children?: React.ReactNode
}

export const Scroll = ({ orientation = 'both', children }: Props) => {
  const viewportRef = useRef<HTMLDivElement>(null)

  return (
    <div className={s.scrollContainer}>
      <div className={s.scrollArea} ref={viewportRef}>
        {children}
      </div>
      {(orientation === 'horizontal' || orientation === 'both') && (
        <div className={s.horizontalScrollTrack}>
          <div className={clsx(s.scrollThumb, s.horizontalThumb)} />
        </div>
      )}
      {(orientation === 'vertical' || orientation === 'both') && (
        <div className={s.verticalScrollTrack}>
          <div className={clsx(s.scrollThumb, s.verticalThumb)} />
        </div>
      )}
    </div>
  )
}
