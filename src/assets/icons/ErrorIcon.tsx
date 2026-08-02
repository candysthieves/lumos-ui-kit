import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ErrorIconSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <circle cx={128} cy={128} r={96} opacity={0.2} />
      <path
        fill={fill}
        fillOpacity={0.2}
        stroke={fill}
        strokeLinejoin={'round'}
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d={
          'M3.2 8 8 3.1l.6-.2h7q.4 0 .6.2L20.8 8l.2.6v7q0 .3-.2.6L16 20.8l-.6.2h-7l-.6-.2L3.2 16l-.2-.6v-7q0-.3.2-.6Z'
        }
      />
      <path
        stroke={fill}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d={'M12 16h0m0-8v5'}
      />
    </svg>
  )
}

const ErrorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ErrorIconSvg />} {...props} />
))

ErrorIcon.displayName = 'ErrorIcon'
export { ErrorIcon }
