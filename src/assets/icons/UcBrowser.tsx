'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const UcBrowserSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <path
        fill={fill}
        stroke={fill}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        d={'M15.5 32c3.59 0 6.5-2.46 6.5-5.5S19.09 21 15.5 21 9 23.46 9 26.5s2.91 5.5 6.5 5.5'}
      />
      <path
        fill={fill}
        d={
          'M22.04 28.94s4.49-.83 4.49 2.93H12.39a8.4 8.4 0 0 1-6.2-14.04C8.8 14.95 10 13.93 10 11.55s-2.96-3.85-6-2c2.6-4.54 4.68-5.43 8.92-5.43s6.23 3.54 6.23 6.63c0 6.14-9.9 6.67-9.9 15.69'
        }
      />
      <path
        stroke={fill}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        d={
          'M22.04 28.94s4.49-.83 4.49 2.93H12.39a8.4 8.4 0 0 1-6.2-14.04C8.8 14.95 10 13.93 10 11.55s-2.96-3.85-6-2c2.6-4.54 4.68-5.43 8.92-5.43s6.23 3.54 6.23 6.63c0 6.14-9.9 6.67-9.9 15.69'
        }
      />
      <path fill={fill} d={'M22.04 28.94a6.85 6.85 0 0 0-11.68-7.14'} />
      <path
        stroke={fill}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        d={'M22.04 28.94a6.85 6.85 0 0 0-11.68-7.14'}
      />
      <path
        fill={fill}
        stroke={fill}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        d={
          'M13.6 19.14c3.96-2.78 9.44-1.67 12.93 1.64 4.02-.7 5.47 1.77 5.47 1.77-1.7-.14-3.77.49-5.14 1-.88.34-1.87.1-2.5-.59-2.7-2.97-6.85-5.69-10.75-3.82'
        }
      />
      <path
        fill={fill}
        d={
          'M17.24 17.68s2.09-2.15 6.72-4.63c-.17-2.25-.06-3.1 1.06-3.8 2 .5 2.39 2.87 2.39 2.87 3.67 1.24 5.12 6.23 3.76 6.94-1.37.7-5.81.19-8.52-.74'
        }
      />
      <path
        stroke={fill}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        d={
          'M17.24 17.68s2.09-2.15 6.72-4.63c-.17-2.25-.06-3.1 1.06-3.8 2 .5 2.39 2.87 2.39 2.87 3.67 1.24 5.12 6.23 3.76 6.94-1.37.7-5.81.19-8.52-.74'
        }
      />
      <path
        fill={fill}
        stroke={fill}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        d={'M14.69 28.4a1.97 1.97 0 1 0 0-3.93 1.97 1.97 0 0 0 0 3.94'}
      />
    </svg>
  )
}

const UcBrowser = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<UcBrowserSvg />} {...props} />
))

UcBrowser.displayName = 'UcBrowser'
export { UcBrowser }
