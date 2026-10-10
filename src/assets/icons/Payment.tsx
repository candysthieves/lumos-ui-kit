'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PaymentSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'nones'} {...props}>
      <path
        d={
          'M20 4H4a2 2 0 0 0-2 2v12q.2 1.8 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4v-6h16zm0-10H4V6h16z'
        }
      />
    </svg>
  )
}

const Payment = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PaymentSvg />} {...props} />
))

Payment.displayName = 'Payment'
export { Payment }
