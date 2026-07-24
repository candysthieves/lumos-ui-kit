import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const CheckmarkOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 0 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z'
          }
        />
      </g>
    </svg>
  )
}

const CheckmarkOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<CheckmarkOutlineSvg />} {...props} />
))

CheckmarkOutline.displayName = 'CheckmarkOutline'
export { CheckmarkOutline }
