'use client'

import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useState } from 'react'
import { ArrowIosBack, ArrowIosForward } from '@/assets'
import { Button } from '@/components/Button'
import s from './Carousel.module.scss'

export type CarouselProps = {
  slides: ReactNode[]
  controlsSize?: 'l' | 'm' | 's'
}

// must match .slide { width: 100% } in Carousel.module.scss
const SLIDE_WIDTH_PERCENT = 100

export const Carousel = ({ slides, controlsSize = 'l' }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length)
  }

  if (!slides.length) {
    return null
  }

  const hasControls = slides.length > 1

  return (
    <div className={clsx(s.root, s[controlsSize])}>
      {hasControls && (
        <Button type={'button'} className={clsx(s.arrowButton, s.prev)} onClick={handlePrev}>
          <ArrowIosBack />
        </Button>
      )}

      <div className={s.slideWrapper}>
        <div
          className={s.track}
          style={{ transform: `translateX(-${currentIndex * SLIDE_WIDTH_PERCENT}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={s.slide}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {hasControls && (
        <Button type={'button'} className={clsx(s.arrowButton, s.next)} onClick={handleNext}>
          <ArrowIosForward />
        </Button>
      )}

      {hasControls && (
        <div className={s.dots}>
          {slides.map((_, index) => (
            <Button
              key={index}
              type={'button'}
              className={clsx(s.dot, index === currentIndex && s.dotActive)}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              {null}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
