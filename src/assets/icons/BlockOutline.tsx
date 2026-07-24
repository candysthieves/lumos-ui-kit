import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const BlockOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16'}
        />
        <path
          stroke={fill}
          strokeDasharray={'6 6'}
          strokeLinecap={'round'}
          strokeWidth={2.3}
          d={'m7.68 18.41 8.73-13.09'}
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

const BlockOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<BlockOutlineSvg />} {...props} />
))

BlockOutline.displayName = 'BlockOutline'
export { BlockOutline }
