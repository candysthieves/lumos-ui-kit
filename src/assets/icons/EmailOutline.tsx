import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const EmailOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#email-outline)'}>
        <path
          fill={fill}
          d={
            'M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 1.2 0L20 7.25V17a1 1 0 0 1-1 1'
          }
        />
      </g>
      <defs>
        <clipPath id={'email-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const EmailOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<EmailOutlineSvg />} {...props} />
))

EmailOutline.displayName = 'EmailOutline'
export { EmailOutline }
