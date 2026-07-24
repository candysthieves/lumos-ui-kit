import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const RadioButtonUncheckedSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#radio-button-unchecked)'}>
        <path
          fill={fill}
          d={'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16'}
        />
      </g>
      <defs>
        <clipPath id={'radio-button-unchecked'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const RadioButtonUnchecked = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<RadioButtonUncheckedSvg />} {...props} />
))

RadioButtonUnchecked.displayName = 'RadioButtonUnchecked'
export { RadioButtonUnchecked }
