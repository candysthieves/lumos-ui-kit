'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const EyeOffOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#eye-off-outline)'}>
        <path
          d={
            'M4.71 3.29a1 1 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 1 0 1.42-1.42zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z'
          }
        />
        <path
          d={
            'M12.22 17c-4.3.1-7.12-3.59-8-5q.95-1.5 2.24-2.72L5 7.87a16 16 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25q1.67-.05 3.23-.67l-1.58-1.58q-.84.22-1.7.25m9.65-5.5c-.64-1.11-4.17-6.68-10.14-6.5q-1.67.05-3.23.67l1.58 1.58a8 8 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a14 14 0 0 1-2.29 2.72L19 16.13a16 16 0 0 0 2.91-3.63 1 1 0 0 0-.04-1'
          }
        />
      </g>
      <defs>
        <clipPath id={'eye-off-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const EyeOffOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<EyeOffOutlineSvg />} {...props} />
))

EyeOffOutline.displayName = 'EyeOffOutline'
export { EyeOffOutline }
