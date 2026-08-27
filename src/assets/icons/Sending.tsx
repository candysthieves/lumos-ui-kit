'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const SendingSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 256 256'} fill={'none'} {...props}>
      <circle cx={128} cy={128} r={96} opacity={0.2} />
      <path
        fill={fill}
        d={
          'M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88 88 0 0 1-88 88'
        }
      />
      <path fill={fill} d={'M184 120h-48V72a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16'} />
    </svg>
  )
}

const Sending = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<SendingSvg />} {...props} />
))

Sending.displayName = 'Sending'
export { Sending }
