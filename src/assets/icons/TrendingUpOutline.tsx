'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const TrendingUpOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#trending-up-outline)'}>
        <path
          fill={fill}
          d={
            'M21 7v-.4l-.1-.1-.2-.2h-.1l-.2-.2h-.2L20 6h-5a1 1 0 1 0 0 2h2.8l-4 4.7-4.3-2.6a1 1 0 0 0-1.3.3l-5 6a1 1 0 1 0 1.6 1.2l4.4-5.3 4.3 2.6a1 1 0 0 0 1.3-.2l4.2-5V12a1 1 0 1 0 2 0z'
          }
        />
      </g>
      <defs>
        <clipPath id={'trending-up-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const TrendingUpOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<TrendingUpOutlineSvg />} {...props} />
))

TrendingUpOutline.displayName = 'TrendingUpOutline'
export { TrendingUpOutline }
