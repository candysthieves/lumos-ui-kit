import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ArrowIosUpSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <svg xmlns={'http://www.w3.org/2000/svg'} width={'24'} height={'24'} fill={'none'}>
        <g clipPath={'url(arrow-ios-up)'}>
          <path
            fill={fill}
            d={
              'M19.54 14.51a1 1 0 0 1-1.64.77l-5.36-4.48-5.37 4.32a1 1 0 0 1-1.4-.15 1 1 0 0 1 .14-1.46l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .36.83'
            }
          />
        </g>
        <defs>
          <clipPath id={'arrow-ios-up'}>
            <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
          </clipPath>
        </defs>
      </svg>
    </svg>
  )
}

const ArrowIosUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ArrowIosUpSvg />} {...props} />
))

ArrowIosUp.displayName = 'ArrowIosUp'
export { ArrowIosUp }
