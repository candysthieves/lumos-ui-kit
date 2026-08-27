'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PlusCircleSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#plus-circle)'}>
        <path
          fill={fill}
          d={
            'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2'
          }
        />
      </g>
      <defs>
        <clipPath id={'plus-circle'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const PlusCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PlusCircleSvg />} {...props} />
))

PlusCircle.displayName = 'PlusCircle'
export { PlusCircle }
