'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const CreditCardSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#credit-card)'}>
        <path
          fill={fill}
          d={
            'M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-8 10H7a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m3-6H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z'
          }
        />
      </g>
      <defs>
        <clipPath id={'credit-card'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const CreditCard = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<CreditCardSvg />} {...props} />
))

CreditCard.displayName = 'CreditCard'
export { CreditCard }
