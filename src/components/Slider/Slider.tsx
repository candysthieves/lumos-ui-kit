import type { ComponentPropsWithoutRef } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { forwardRef } from 'react'
import s from './Slider.module.scss'

export type SliderProps = Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'children'>

export const Slider = forwardRef<HTMLSpanElement, SliderProps>((props, ref) => {
  return (
    <SliderPrimitive.Root ref={ref} className={s.root} {...props}>
      <SliderPrimitive.Track className={s.track}>
        <SliderPrimitive.Range className={s.range} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={s.thumb} />
    </SliderPrimitive.Root>
  )
})

Slider.displayName = 'Slider'
