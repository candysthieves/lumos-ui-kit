import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const EditSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#edit)'}>
        <path
          d={
            'M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.9 1.9 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91A1 1 0 0 0 5 18M15.27 4 18 6.73l-2 1.95L13.32 6z'
          }
        />
      </g>
      <defs>
        <clipPath id={'edit'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Edit = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<EditSvg />} {...props} />
))

Edit.displayName = 'Edit'
export { Edit }
