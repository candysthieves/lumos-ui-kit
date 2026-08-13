'use client'

import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const FileIconSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#file-icon)'}>
        <path
          stroke={fill}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          strokeWidth={2}
          d={
            'm15 19 2 2 4-4M13 3H8.2q-1.6 0-2.1.2a2 2 0 0 0-.9.9Q5 4.6 5 6.2v11.6q0 1.6.2 2.1t.9.9q.5.3 2.1.2h3.3M13 3l6 6m-6-6v4.4l.1 1 .4.5 1.1.1H19m0 0v4.4M9 17h2.5M9 13h6M9 9h1'
          }
        />
      </g>
      <defs>
        <clipPath id={'file-icon'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const FileIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<FileIconSvg />} {...props} />
))

FileIcon.displayName = 'FileIcon'
export { FileIcon }
