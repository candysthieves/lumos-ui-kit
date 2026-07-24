import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const PersonSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#person-icon)'}>
        <path
          d={'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m6 10a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1z'}
        />
      </g>
      <defs>
        <clipPath id={'person-icon'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Person = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<PersonSvg />} {...props} />
))

Person.displayName = 'Person'
export { Person }
