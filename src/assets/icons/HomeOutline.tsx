import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const HomeOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'M20.42 10.18 12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38c0-.54-.2-1.05-.58-1.44M10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z'
          }
        />
      </g>
    </svg>
  )
}

const HomeOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<HomeOutlineSvg />} {...props} />
))

HomeOutline.displayName = 'HomeOutline'
export { HomeOutline }
