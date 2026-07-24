import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const BookmarkSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'M6 21a1 1 0 0 1-1-1V5.33A2.3 2.3 0 0 1 7.2 3h9.6A2.3 2.3 0 0 1 19 5.33V20a1 1 0 0 1-1.5.86l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21'
          }
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Bookmark = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<BookmarkSvg />} {...props} />
))

Bookmark.displayName = 'Bookmark'
export { Bookmark }
