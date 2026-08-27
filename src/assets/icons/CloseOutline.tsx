import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const CloseOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#close-outline)'}>
        <path
          fill={fill}
          d={
            'm13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29A1 1 0 0 0 7 18.01a1 1 0 0 0 .71-.3l4.29-4.3 4.29 4.3a1 1 0 1 0 1.42-1.42z'
          }
        />
      </g>
    </svg>
  )
}

const CloseOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<CloseOutlineSvg />} {...props} />
))

CloseOutline.displayName = 'CloseOutline'
export { CloseOutline }
