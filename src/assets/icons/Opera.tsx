'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const OperaSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <g clipPath={'url(#opera-icon)'}>
        <path
          fill={fill}
          d={
            'M30 4.58a12.71 12.71 0 0 0-7.18-2.21h-.07c-2.14 0-4.16.54-5.92 1.5l.06-.03a15.5 15.5 0 0 0-4.8 3.99l-.02.03q-1.52 1.9-2.37 4.27l-.03.1a17 17 0 0 0-.97 5.33v.86q.08 2.9 1.01 5.46l-.04-.12q.89 2.5 2.42 4.41l-.02-.03q1.98 2.5 4.74 3.98l.08.04a12.2 12.2 0 0 0 5.85 1.47h.08c2.68 0 5.16-.83 7.21-2.24l-.04.03a18 18 0 0 1-5.39 3.34l-.12.04c-1.9.76-4.1 1.2-6.4 1.2H18q-.57 0-.86-.02c-2.45-.1-4.73-.7-6.8-1.69l.11.05a17.8 17.8 0 0 1-9.06-9.4l-.04-.13a17.83 17.83 0 0 1 .12-13.92l-.04.12a17.8 17.8 0 0 1 9.47-9.54l.11-.04C13.05.53 15.44 0 17.94 0h.11c4.6.02 8.78 1.75 11.95 4.6l-.02-.02zM36 18v.1c0 2.6-.57 5.07-1.6 7.3l.05-.12a18 18 0 0 1-4.26 5.95l-.02.01a8.62 8.62 0 0 1-9.6-.44l.02.02a9.8 9.8 0 0 0 5.07-4.63l.02-.05a16 16 0 0 0 2-8.16V18v-.3c0-2.86-.73-5.56-2.03-7.9l.04.09a10 10 0 0 0-5.01-4.68l-.07-.02a8.57 8.57 0 0 1 9.68-.34l-.04-.03c1.77 1.64 3.2 3.6 4.19 5.82l.04.1c.96 2.12 1.52 4.58 1.52 7.17z'
          }
        />
      </g>
      <defs>
        <clipPath id={'opera-icon'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h36v36H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Opera = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<OperaSvg />} {...props} />
))

Opera.displayName = 'Opera'
export { Opera }
