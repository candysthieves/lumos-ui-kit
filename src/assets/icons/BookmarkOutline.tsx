import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const BookmarkOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#bookmark-outline)'}>
        <path
          fill={fill}
          d={
            'M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1 1 0 0 1-.51.15m5.76-5.55q.26 0 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63q.24-.14.51-.14'
          }
        />
      </g>
      <defs>
        <clipPath id={'bookmark-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const BookmarkOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<BookmarkOutlineSvg />} {...props} />
))

BookmarkOutline.displayName = 'BookmarkOutline'
export { BookmarkOutline }
