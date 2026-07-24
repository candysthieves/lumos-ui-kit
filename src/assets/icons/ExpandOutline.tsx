import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ExpandOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path
          d={
            'M20 5a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 .71 1.72 1 1 0 0 0 .71-.3L18 7.42V10a1 1 0 0 0 2 0zm-9.29 8.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42'
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

const ExpandOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ExpandOutlineSvg />} {...props} />
))

ExpandOutline.displayName = 'ExpandOutline'
export { ExpandOutline }
