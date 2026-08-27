'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const YandexSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <g clipPath={'url(#yandex-icon)'}>
        <path
          stroke={'#f8604a'}
          strokeWidth={2}
          d={'M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17Z'}
        />
        <path
          fill={'#f8604a'}
          d={
            'm9.637 7.131-3.181 3.181 9.3 9.301V30.67h4.5V19.6l9.289-9.288-3.182-3.182L18 15.494 9.637 7.131Z'
          }
        />
      </g>
      <defs>
        <clipPath id={'yandex-icon'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h36v36H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Yandex = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<YandexSvg />} {...props} />
))

Yandex.displayName = 'Yandex'
export { Yandex }
