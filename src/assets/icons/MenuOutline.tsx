import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MenuOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path
          d={
            'M20.05 11H3.95a.95.95 0 0 0-.95.95v.1c0 .52.43.95.95.95h16.1c.52 0 .95-.43.95-.95v-.1a.95.95 0 0 0-.95-.95m0 5H3.95a.95.95 0 0 0-.95.95v.1c0 .52.43.95.95.95h16.1c.52 0 .95-.43.95-.95v-.1a.95.95 0 0 0-.95-.95m0-10H3.95a.95.95 0 0 0-.95.95v.1c0 .52.43.95.95.95h16.1c.52 0 .95-.43.95-.95v-.1a.95.95 0 0 0-.95-.95'
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

const MenuOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MenuOutlineSvg />} {...props} />
))

MenuOutline.displayName = 'MenuOutline'
export { MenuOutline }
