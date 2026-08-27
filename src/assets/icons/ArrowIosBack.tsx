'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ArrowIosBackSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#arrow-ios-back)'}>
        <path
          fill={fill}
          d={
            'm13.8 19-.7-.4-4.9-6a1 1 0 0 1 0-1.2l5-6a1 1 0 0 1 1.6 1.2L10.3 12l4.3 5.4a1 1 0 0 1-.8 1.6'
          }
        />
      </g>
      <defs>
        <clipPath id={'arrow-ios-back'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const ArrowIosBack = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ArrowIosBackSvg />} {...props} />
))

ArrowIosBack.displayName = 'ArrowIosBack'
export { ArrowIosBack }
