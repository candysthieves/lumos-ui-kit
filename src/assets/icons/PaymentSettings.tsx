'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PaymentSettingsSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 475.7 475.7'} fill={'nones'} {...props}>
      <path
        d={
          'M112.7 193.2q8.3 0 16.3-1.7l14 33.6 27.7-11.5-14-33.6q14.1-9.2 23.3-23.3l33.7 14 11.5-27.7-33.7-14q3.5-16.5 0-32.9l33.6-14-11.4-27.6L180 68.4A80 80 0 0 0 156.8 45l13.9-33.6L143 0l-14 33.6a82 82 0 0 0-32.9 0L82.2 0 54.5 11.5l14 33.6a80 80 0 0 0-23.3 23.3l-33.7-14L0 82.3l33.7 14a80 80 0 0 0 0 32.8L0 143l11.5 27.7 33.6-14Q54.5 171 68.4 180l-14 33.6 27.8 11.5 14-33.6a81 81 0 0 0 16.5 1.7m-46.9-100a50 50 0 0 1 46.7-31.3 50.5 50.5 0 1 1-46.7 31.3M465.2 170l-9-19.4-70 70-26.6-26.5 70-70-19.4-9A112.7 112.7 0 0 0 282 137.8 114 114 0 0 0 255.3 256L118.8 392.5a48.4 48.4 0 0 0 0 69 48.4 48.4 0 0 0 69 0l136.5-136.6q18.3 6.5 38 6.6a113.9 113.9 0 0 0 103-161.4m-43.9 107a83 83 0 0 1-94.3 16.7l-9.5-4.4-151 151a18.6 18.6 0 0 1-26.5 0 18.6 18.6 0 0 1 0-26.6l151-151-4.4-9.5a83.8 83.8 0 0 1 75.7-118.7q6.8 0 13.4 1l-58.5 58.6 69 69 58.5-58.6c4.2 26-4.2 53.3-23.4 72.5'
        }
      />
    </svg>
  )
}

const PaymentSettings = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PaymentSettingsSvg />} {...props} />
))

PaymentSettings.displayName = 'PaymentSettings'
export { PaymentSettings }
