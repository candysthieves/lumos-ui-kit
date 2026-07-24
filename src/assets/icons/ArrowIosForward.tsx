import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ArrowIosForwardSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'M10 19a1 1 0 0 1-.8-1.6l4.5-5.4-4.3-5.4a1 1 0 0 1 .1-1.4 1 1 0 0 1 1.5.2l4.8 6a1 1 0 0 1 0 1.2l-5 6a1 1 0 0 1-.8.4'
          }
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const ArrowIosForward = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ArrowIosForwardSvg />} {...props} />
))

ArrowIosForward.displayName = 'ArrowIosForward'
export { ArrowIosForward }
