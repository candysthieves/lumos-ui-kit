import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const LogOutSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path
          d={
            'M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6zm13.8 5.4-2.8-4a1 1 0 1 0-1.6 1.2L18 11h-8a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 0-1.2'
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

const LogOut = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<LogOutSvg />} {...props} />
))

LogOut.displayName = 'LogOut'
export { LogOut }
