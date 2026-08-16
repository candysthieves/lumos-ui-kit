'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const HeartSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#heart)'}>
        <path
          fill={fill}
          d={
            'M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 7.4l-7.77 7.78A1 1 0 0 1 12 21'
          }
        />
      </g>
      <defs>
        <clipPath id={'heart'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Heart = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<HeartSvg />} {...props} />
))

Heart.displayName = 'Heart'
export { Heart }
