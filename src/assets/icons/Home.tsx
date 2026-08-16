'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const HomeSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}

      viewBox={'0 0 24 24'}
      fill={'none'}
      {...props}
    >
      <g fill={fill} clipPath={'url(#a)'}>
        <path d={'M14 14h-4v7h4z'} />
        <path
          d={
            'm20.4 10.2-7.7-7.9a1 1 0 0 0-1.4 0l-7.7 7.9a2 2 0 0 0-.6 1.4V20a2 2 0 0 0 1.9 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.1a2 2 0 0 0 1.9-2v-8.4q0-.8-.6-1.4'
          }
        />
      </g>
    </svg>
  )
}

const Home = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<HomeSvg />} {...props} />
))

Home.displayName = 'Home'
export { Home }
