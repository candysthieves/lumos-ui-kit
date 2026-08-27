'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const EyeOffSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#eye-off)'}>
        <path
          d={
            'M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m3.29 4.62L14 16.78l-.07-.07-1.27-1.27q-.3.06-.61.06a3.5 3.5 0 0 1-3.49-4.11l-2-2L5 7.87a16 16 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25q1.67-.05 3.23-.67zM8.59 5.76l2.8 2.8q.3-.06.61-.06a3.5 3.5 0 0 1 3.44 4.11l2.68 2.68.84.84a16 16 0 0 0 2.91-3.63 1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5q-1.67.05-3.23.67z'
          }
        />
        <path
          d={
            'M20.71 19.29 19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 1 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 1 0 1.42-1.42'
          }
        />
      </g>
      <defs>
        <clipPath id={'eye-off'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const EyeOff = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<EyeOffSvg />} {...props} />
))

EyeOff.displayName = 'EyeOff'
export { EyeOff }
