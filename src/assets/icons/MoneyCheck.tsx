'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MoneyCheckSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'nones'} {...props}>
      <path
        stroke={'#000'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={2}
        d={
          'M14 14h3m-3-4h3m-8-.5v-1m0 1h2m-2 0c-1.8 0-2 .4-2 1.3S7 12 9 12s2 .2 2 1.2c0 .7 0 1.3-2 1.3m0 0v1m0-1H7M6.2 19h11.6q1.6 0 2.1-.2t.9-.9q.3-.5.2-2.1V8.2q0-1.6-.2-2.1a2 2 0 0 0-.9-.9q-.5-.3-2.1-.2H6.2q-1.6 0-2.1.2a2 2 0 0 0-.9.9Q3 6.6 3 8.2v7.6q0 1.6.2 2.1t.9.9q.5.3 2.1.2'
        }
      />
    </svg>
  )
}

const MoneyCheck = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MoneyCheckSvg />} {...props} />
))

MoneyCheck.displayName = 'MoneyCheck'
export { MoneyCheck }
