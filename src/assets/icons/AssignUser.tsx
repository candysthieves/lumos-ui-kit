'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const AssignUserSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <circle cx={18} cy={10.4} r={6.8} className={'clr-i-solid clr-i-solid-path-1'} />
      <path
        d={
          'M12 26.7a2.8 2.8 0 0 1 4.9-1.9l3.8 4.2 6.9-7.6a17 17 0 0 0-9.6-2.8A16 16 0 0 0 5.5 24l-.2.6V30a2 2 0 0 0 2 2h8.5l-3-3.3a3 3 0 0 1-.8-2'
        }
        className={'clr-i-solid clr-i-solid-path-2'}
      />
      <path
        d={'M28.8 32a2 2 0 0 0 1.9-2v-3.8L25.6 32Z'}
        className={'clr-i-solid clr-i-solid-path-3'}
      />
      <path
        d={
          'M33.8 18.6a1 1 0 0 0-1.4.1l-11.7 13-5.2-5.6a1 1 0 0 0-1.4-.1 1 1 0 0 0 0 1.4l6.7 7.2 13-14.6a1 1 0 0 0 0-1.4'
        }
        className={'clr-i-solid clr-i-solid-path-4'}
      />
      <path fill={'none'} d={'M0 0h36v36H0z'} />
    </svg>
  )
}

const AssignUser = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<AssignUserSvg />} {...props} />
))

AssignUser.displayName = 'AssignUser'
export { AssignUser }
