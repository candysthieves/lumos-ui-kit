'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PauseCircleSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#pause-circle)'}>
        <path
          fill={fill}
          d={
            'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-2 13a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z'
          }
        />
      </g>
      <defs>
        <clipPath id={'pause-circle'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const PauseCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PauseCircleSvg />} {...props} />
))

PauseCircle.displayName = 'PauseCircle'
export { PauseCircle }
