'use client'

import { forwardRef, type SVGProps } from 'react'
import { ColorIconBase, type ColorIconProps } from '@/utils'

const PaidSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <path
        fill={'#397df6'}
        d={
          'M11.37.52a1 1 0 0 1 1.26 0l2.15 1.76a1 1 0 0 0 .69.22l2.76-.16a1 1 0 0 1 1.03.75l.7 2.68a1 1 0 0 0 .43.59l2.33 1.49a1 1 0 0 1 .4 1.2l-1.02 2.59a1 1 0 0 0 0 .72l1.01 2.58a1 1 0 0 1-.39 1.21l-2.33 1.5a1 1 0 0 0-.43.58l-.7 2.68a1 1 0 0 1-1.03.75l-2.76-.16a1 1 0 0 0-.7.22l-2.14 1.76a1 1 0 0 1-1.26 0l-2.15-1.76a1 1 0 0 0-.69-.22l-2.76.16a1 1 0 0 1-1.03-.75l-.7-2.68a1 1 0 0 0-.43-.59l-2.33-1.49a1 1 0 0 1-.4-1.2l1.02-2.59a1 1 0 0 0 0-.72L.89 9.06a1 1 0 0 1 .39-1.21l2.33-1.5a1 1 0 0 0 .43-.58l.7-2.68a1 1 0 0 1 1.03-.75l2.76.16a1 1 0 0 0 .7-.22z'
        }
      />
      <g fill={'#fff'} clipPath={'url(#paid)'}>
        <path
          d={
            'M15.08 8.14a.67.67 0 0 0-.94.11l-4.67 6-2.28-2.78a.67.67 0 1 0-1.04.83l2.78 3.45a.7.7 0 0 0 .52.25.7.7 0 0 0 .55-.25l5.22-6.67a.67.67 0 0 0-.14-.94m3.33 0a.67.67 0 0 0-.94.11l-4.66 6-.41-.5-.84 1.08.73.92a.67.67 0 0 0 1.04-.01l5.22-6.67a.67.67 0 0 0-.14-.93'
          }
        />
        <path d={'m9.8 12.7.87-1.07-.14-.16a.67.67 0 0 0-1.2.31.7.7 0 0 0 .15.5z'} />
      </g>
      <defs>
        <clipPath id={'paid'}>
          <path fill={'#fff'} d={'M4 4h16v16H4z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Paid = forwardRef<SVGSVGElement, ColorIconProps>((props, ref) => (
  <ColorIconBase ref={ref} icon={<PaidSvg />} {...props} />
))

Paid.displayName = 'Paid'
export { Paid }
