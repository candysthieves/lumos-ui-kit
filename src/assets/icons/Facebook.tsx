'use client'

import { forwardRef, type SVGProps } from 'react'
import { ColorIconBase, type ColorIconProps } from '@/utils'

const FacebookSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#facebook)'}>
        <path fill={'#fff'} d={'M8 4h13v20H8z'} />
        <path
          fill={'#475993'}
          d={
            'M20.77 0H3.23A3.23 3.23 0 0 0 0 3.23v17.54A3.23 3.23 0 0 0 3.23 24h8.65l.02-8.58H9.67a.53.53 0 0 1-.53-.52v-2.76c-.01-.3.23-.53.52-.53h2.22V8.94c0-3.1 1.9-4.8 4.66-4.8h2.27c.29 0 .52.24.52.53v2.34c0 .29-.23.52-.52.52h-1.4c-1.5 0-1.79.72-1.79 1.77v2.3h3.3c.32 0 .56.28.53.6l-.33 2.76a.53.53 0 0 1-.52.46h-2.96L15.62 24h5.15A3.23 3.23 0 0 0 24 20.77V3.23A3.23 3.23 0 0 0 20.77 0'
          }
        />
      </g>
      <defs>
        <clipPath id={'facebook'}>
          <path fill={'#fff'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Facebook = forwardRef<SVGSVGElement, ColorIconProps>((props, ref) => (
  <ColorIconBase ref={ref} icon={<FacebookSvg />} {...props} />
))

Facebook.displayName = 'Facebook'
export { Facebook }
