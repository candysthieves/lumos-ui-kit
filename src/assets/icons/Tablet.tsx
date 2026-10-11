'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const TabletSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 489.4 489.4'} fill={'none'} {...props}>
      <path
        d={
          'M488.9 444.2V170.9a38 38 0 0 0-37.1-38.4H325a38 38 0 0 0-37.1 38.4V451a38 38 0 0 0 37.1 38.4h126.8a38 38 0 0 0 37.1-38.4zm-84.5 29.1h-35.8c-5.3 0-9.6-4.5-9.6-10s4.3-10 9.6-10h35.8c5.3 0 9.6 4.5 9.6 10s-4.3 10-9.6 10m50.8-36-.7.1H322.3l-.7-.1V184.9l.7-.1h132.2l.6.1zm-349.5 52.1h159.7a77 77 0 0 1-10.3-38.4v-22.9H42.3v-375h271.8V99q5.4-.8 10.9-.9h30.4V39.4c0-16.3-9.6-30.3-23.3-36.3q-7-3-14.9-3.1H38.7q-8 0-14.9 3.1C10.1 9.1.5 23.1.5 39.4V450a39 39 0 0 0 38.1 39.4zm54.3-39.8h35.8c5.3 0 9.6 4.5 9.6 10s-4.3 10-9.6 10H160c-5.3 0-9.6-4.5-9.6-10s4.3-10 9.6-10'
        }
      />
    </svg>
  )
}

const Tablet = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<TabletSvg />} {...props} />
))

Tablet.displayName = 'Tablet'
export { Tablet }
