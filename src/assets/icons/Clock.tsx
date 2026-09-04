'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ClockSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 16 16'} fill={'none'} {...props}>
      <path
        fill={fill}
        fillRule={'evenodd'}
        d={'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 3v5.4l3.3 3.3 1.4-1.4L9 7.6V3z'}
        clipRule={'evenodd'}
      />
    </svg>
  )
}
const Clock = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ClockSvg />} {...props} />
))

Clock.displayName = 'Clock'
export { Clock }
