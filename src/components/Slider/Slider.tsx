import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'
import { forwardRef } from 'react'
import s from './Slider.module.scss'

export type SliderProps = Omit<
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  'children' | 'orientation'
>
type SliderElement = ComponentRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<SliderElement, SliderProps>(({ className, ...props }, ref) => {
  return (
    <SliderPrimitive.Root ref={ref} className={clsx(s.root, className)} {...props}>
      <SliderPrimitive.Track className={s.track}>
        <SliderPrimitive.Range className={s.range} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={s.thumb} />
    </SliderPrimitive.Root>
  )
})

Slider.displayName = 'Slider'
