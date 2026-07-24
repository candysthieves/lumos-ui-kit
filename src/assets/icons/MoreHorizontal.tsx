import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MoreHorizontalSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#more-horizontal)'}>
        <path
          d={
            'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
          }
        />
      </g>
      <defs>
        <clipPath id={'more-horizontal'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const MoreHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MoreHorizontalSvg />} {...props} />
))

MoreHorizontal.displayName = 'MoreHorizontal'
export { MoreHorizontal }
