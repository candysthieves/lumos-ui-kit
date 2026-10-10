'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const BillPaySvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <path
        d={
          'M10.5 4.3 12 3.1l1.5 1.2h1.3L12 2 9.2 4.3m1.9 3-.4.2-.2.3-.1.4.1.4.2.3.3.2.5.1h.1V7.1zm1.5 2.9-.3-.1v2.3l.4-.1.5-.2.3-.4.1-.5q0-.5-.3-.6 0-.2-.7-.4'
        }
      />
      <path
        d={
          'm10.3 15.5 1.7-1.1 1.7 1.1 4.2-3V5.1H6.2v7.4zm1.3-5.5h-.2l-.6-.2-.5-.3-.5-.5-.1-.7v-.4l.3-.6.6-.5.9-.3v-.4h.7v.4q.8 0 1.3.5t.7 1.6v.2h-.7v-.2q0-.7-.4-1-.3-.3-.8-.3v2.2l.5.1.8.3.5.4.3.5.1.6-.2.9-.5.6-.7.3-.6.1v.8h-.7v-.8l-.7-.2-.7-.4-.5-.7-.2-1v-.2h.7v.2q0 .8.4 1.1.3.3 1 .4z'
        }
      />
      <path
        d={
          'M18.7 7.3v1.1l2.5 2v.1l-6.8 5.4 6.5 4.3.2.6H21l-9-5.3-9.1 5.4.2-.6L9.6 16l-6.8-5.4v-.1l2.5-2V7.3L2 10v10.4q.1 1.5 1.6 1.6h16.9q1.5-.1 1.6-1.6V10z'
        }
      />
    </svg>
  )
}

const BillPay = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<BillPaySvg />} {...props} />
))

BillPay.displayName = 'BillPay'
export { BillPay }
