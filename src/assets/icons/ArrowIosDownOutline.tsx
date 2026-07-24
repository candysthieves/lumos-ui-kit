import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ArrowIosDownOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <svg xmlns={'http://www.w3.org/2000/svg'} width={'24'} height={'24'} fill={'none'}>
        <g clip-path={'url(#arrow-ios-down-outline)'}>
          <path
            fill={fill}
            d={
              'M5.51 9.46a1 1 0 0 1 1.64-.77l5.36 4.48 5.37-4.32A1 1 0 0 1 19.3 9a1 1 0 0 1-.15 1.46l-6 4.83a1 1 0 0 1-1.27 0l-6-5a1 1 0 0 1-.36-.83'
            }
          />
        </g>
        <defs>
          <clipPath id={'arrow-ios-down-outline'}>
            <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
          </clipPath>
        </defs>
      </svg>
    </svg>
  )
}

const ArrowIosDownOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ArrowIosDownOutlineSvg />} {...props} />
))

ArrowIosDownOutline.displayName = 'ArrowIosDownOutline'
export { ArrowIosDownOutline }
