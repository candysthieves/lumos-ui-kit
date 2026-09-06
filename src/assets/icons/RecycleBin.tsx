'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const RecycleBinSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'-3 0 32 32'} fill={'none'} {...props}>
      <path
        fillRule={'evenodd'}
        d={
          'M7 15a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0zm5 0a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0zm5 0a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0zM2 28a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V12H2zM16 4h-6V3q0-1 1-1h4q1 0 1 1zm8 0h-6V2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v2q.2 1.8 2 2h22a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2'
        }
      />
    </svg>
  )
}
const RecycleBin = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<RecycleBinSvg />} {...props} />
))

RecycleBin.displayName = 'RecycleBin'
export { RecycleBin }
