import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useState } from 'react'
import { ArrowIosBack, ArrowIosForward } from '@/assets/icons'
import s from './Carousel.module.scss'

export type CarouselProps = {
  slides: ReactNode[]
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length)
  }

  return (
    <div className={s.root}>
      <button type={'button'} className={s.arrowButton} onClick={handlePrev}>
        <ArrowIosBack />
      </button>

      <div className={s.slideWrapper}>
        <div className={s.track} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className={s.slide}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button type={'button'} className={s.arrowButton} onClick={handleNext}>
        <ArrowIosForward />
      </button>

      <div className={s.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            type={'button'}
            className={clsx(s.dot, index === currentIndex && s.dotActive)}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
