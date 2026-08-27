'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MoreHorizontalOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#more-horizontal-outline)'}>
        <path
          d={
            'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
          }
        />
      </g>
      <defs>
        <clipPath id={'more-horizontal-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const MoreHorizontalOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MoreHorizontalOutlineSvg />} {...props} />
))

MoreHorizontalOutline.displayName = 'MoreHorizontalOutline'
export { MoreHorizontalOutline }
