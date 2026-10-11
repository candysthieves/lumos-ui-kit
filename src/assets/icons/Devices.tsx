'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const DevicesSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <path
        d={
          'M32 13h-8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2m0 2v13h-8V15Z'
        }
        className={'clr-i-solid clr-i-solid-path-1'}
      />
      <path
        d={
          'M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v2H9.3A1.2 1.2 0 0 0 8 27a1.2 1.2 0 0 0 1.3 1H20v-.4h.1V22H4V6h24v5h2V6a2 2 0 0 0-2-2'
        }
        className={'clr-i-solid clr-i-solid-path-2'}
      />
      <path fill={'none'} d={'M0 0h36v36H0z'} />
    </svg>
  )
}

const Devices = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<DevicesSvg />} {...props} />
))

Devices.displayName = 'Devices'
export { Devices }
