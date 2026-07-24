import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PersonRemoveSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path
          d={
            'M21 6h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2m-11 5a4 4 0 1 0 0-8 4 4 0 0 0 0 8m6 10a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1'
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

const PersonRemove = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PersonRemoveSvg />} {...props} />
))

PersonRemove.displayName = 'PersonRemove'
export { PersonRemove }
