import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const HeartOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#heart-outline)'}>
        <path
          fill={fill}
          d={
            'M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 7.4l-7.77 7.78A1 1 0 0 1 12 21M7.22 6A3.2 3.2 0 0 0 4 9.23c0 .85.34 1.67.94 2.28L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.3 3.3 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6'
          }
        />
      </g>
      <defs>
        <clipPath id={'heart-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const HeartOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<HeartOutlineSvg />} {...props} />
))

HeartOutline.displayName = 'HeartOutline'
export { HeartOutline }
