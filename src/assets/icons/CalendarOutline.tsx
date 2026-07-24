import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const CalendarOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#calendar-outline)'}>
        <path
          d={
            'M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1m12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1'
          }
        />
        <path d={'M8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8-2h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2'} />
      </g>
      <defs>
        <clipPath id={'calendar-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const CalendarOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<CalendarOutlineSvg />} {...props} />
))

CalendarOutline.displayName = 'CalendarOutline'
export { CalendarOutline }
