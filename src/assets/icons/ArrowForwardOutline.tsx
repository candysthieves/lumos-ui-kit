import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ArrowForwardOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'M5 13h11.9l-3.7 4.4a1 1 0 1 0 1.6 1.2l5-6v-.1l.1-.1.1-.4v-.4h-.1l-.1-.2-5-6a1 1 0 0 0-1.6 1.2L17 11H5a1 1 0 0 0 0 2'
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

const ArrowForwardOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ArrowForwardOutlineSvg />} {...props} />
))

ArrowForwardOutline.displayName = 'ArrowForwardOutline'
export { ArrowForwardOutline }
