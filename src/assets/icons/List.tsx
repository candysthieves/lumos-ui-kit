'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ListSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <path
        stroke={fill}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={2}
        d={
          'M8 6h13M8 12h13M8 18h13M4 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        }
      />
    </svg>
  )
}
const List = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ListSvg />} {...props} />
))

List.displayName = 'List'
export { List }
