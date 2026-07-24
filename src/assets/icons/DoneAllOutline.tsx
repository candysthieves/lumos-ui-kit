import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const DoneAllOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#done-all-outline)'}>
        <path
          d={
            'M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41m5 0a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 1.56-.01l7.83-10a1 1 0 0 0-.21-1.4'
          }
        />
        <path d={'M8.71 13.06 10 11.44l-.2-.24a1 1 0 0 0-1.68.1 1 1 0 0 0 .1 1.11z'} />
      </g>
      <defs>
        <clipPath id={'done-all-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const DoneAllOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<DoneAllOutlineSvg />} {...props} />
))

DoneAllOutline.displayName = 'DoneAllOutline'
export { DoneAllOutline }
