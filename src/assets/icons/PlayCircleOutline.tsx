import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PlayCircleOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#play-circle-outline)'}>
        <path d={'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16'} />
        <path
          d={
            'M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.7 1.7 0 0 0 1.85-.3L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z'
          }
        />
      </g>
      <defs>
        <clipPath id={'play-circle-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const PlayCircleOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PlayCircleOutlineSvg />} {...props} />
))

PlayCircleOutline.displayName = 'PlayCircleOutline'
export { PlayCircleOutline }
