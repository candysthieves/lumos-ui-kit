import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PlayCircleSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#play-circle)'}>
        <path d={'m11.5 14.6 2.81-2.6-2.81-2.6z'} />
        <path
          d={
            'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4 11.18-3.64 3.37q-.5.44-1.16.45-.36 0-.69-.15a1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48 1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36'
          }
        />
      </g>
      <defs>
        <clipPath id={'play-circle'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const PlayCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PlayCircleSvg />} {...props} />
))

PlayCircle.displayName = 'PlayCircle'
export { PlayCircle }
