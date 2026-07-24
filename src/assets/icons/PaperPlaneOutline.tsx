import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PaperPlaneOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={fill}
          d={
            'm21 4-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a1 1 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18zm-4.7 2.29-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z'
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

const PaperPlaneOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PaperPlaneOutlineSvg />} {...props} />
))

PaperPlaneOutline.displayName = 'PaperPlaneOutline'
export { PaperPlaneOutline }
