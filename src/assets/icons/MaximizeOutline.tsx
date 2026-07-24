import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MaximizeOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#maximize-outline)'}>
        <path
          d={
            'm20.71 19.29-3.4-3.39a7.9 7.9 0 0 0 .34-9.34A8 8 0 1 0 15.9 17.3l3.39 3.4a1 1 0 1 0 1.42-1.42M5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0'
          }
        />
        <path
          d={'M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2'}
        />
      </g>
      <defs>
        <clipPath id={'maximize-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const MaximizeOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MaximizeOutlineSvg />} {...props} />
))

MaximizeOutline.displayName = 'MaximizeOutline'
export { MaximizeOutline }
