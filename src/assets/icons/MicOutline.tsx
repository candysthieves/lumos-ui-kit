import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MicOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path
          d={
            'M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4m-2-9a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0z'
          }
        />
        <path
          d={
            'M19 11a1 1 0 0 0-2 0 5 5 0 1 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.9.9 0 0 0-.89.89v.22a.9.9 0 0 0 .89.89h6.22a.9.9 0 0 0 .89-.89v-.22a.9.9 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11'
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

const MicOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MicOutlineSvg />} {...props} />
))

MicOutline.displayName = 'MicOutline'
export { MicOutline }
