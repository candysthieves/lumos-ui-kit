import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const TrendingUpSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#trending-up)'}>
        <path
          fill={fill}
          d={
            'M21 7v-.21l-.05-.17-.09-.14-.14-.17-.12-.07-.19-.1h-.2A1 1 0 0 0 20 6h-5a1 1 0 1 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 1 0 1.54 1.28l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 1 0 2 0z'
          }
        />
      </g>
      <defs>
        <clipPath id={'trending-up'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const TrendingUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<TrendingUpSvg />} {...props} />
))

TrendingUp.displayName = 'TrendingUp'
export { TrendingUp }
