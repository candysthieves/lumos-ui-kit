import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const TrashSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'M21 6h-5V4.33A2.4 2.4 0 0 0 13.5 2h-3A2.4 2.4 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2M10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z'
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

const Trash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<TrashSvg />} {...props} />
))

Trash.displayName = 'Trash'
export { Trash }
