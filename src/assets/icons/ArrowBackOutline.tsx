import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ArrowBackOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'M19 11H7.14l3.63-4.36a1 1 0 0 0-1.54-1.28l-5 6-.09.15q.02.06-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36q-.02.07.07.13l.09.15 5 6a1 1 0 0 0 1.54-1.28L7.14 13H19a1 1 0 0 0 0-2'
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

const ArrowBackOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ArrowBackOutlineSvg />} {...props} />
))

ArrowBackOutline.displayName = 'ArrowBackOutline'
export { ArrowBackOutline }
