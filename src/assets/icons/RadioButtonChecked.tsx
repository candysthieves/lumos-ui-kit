import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const RadioButtonCheckedSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#radio-button-checked)'}>
        <path
          fill={fill}
          d={
            'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16'
          }
        />
      </g>
      <defs>
        <clipPath id={'radio-button-checked'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const RadioButtonChecked = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<RadioButtonCheckedSvg />} {...props} />
))

RadioButtonChecked.displayName = 'RadioButtonChecked'
export { RadioButtonChecked }
