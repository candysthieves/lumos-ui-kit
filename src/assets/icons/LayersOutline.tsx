'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const LayersOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#layers-outline)'}>
        <path
          fill={fill}
          d={
            'M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .32-1.44 1 1 0 0 0-.43-.34l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.49 1.4 1 1 0 0 0 .38.38l2.26 1.3-2.15.92a1 1 0 0 0-.49 1.4 1 1 0 0 0 .38.38l2.26 1.3-2.15.92a1 1 0 0 0-.49 1.4 1 1 0 0 0 .38.38l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .32-1.44 1 1 0 0 0-.43-.34l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92m-9-6.26 5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z'
          }
        />
      </g>
      <defs>
        <clipPath id={'layers-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const LayersOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<LayersOutlineSvg />} {...props} />
))

LayersOutline.displayName = 'LayersOutline'
export { LayersOutline }
