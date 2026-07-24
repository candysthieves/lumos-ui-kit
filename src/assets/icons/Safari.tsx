import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const SafariSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path
          d={
            'M30.72 5.28a17.95 17.95 0 0 0-25.44 0 17.95 17.95 0 0 0 0 25.44 17.95 17.95 0 0 0 25.44 0 17.95 17.95 0 0 0 0-25.44m-1.74 23.7a15.5 15.5 0 0 1-21.96 0 15.5 15.5 0 0 1 0-21.96 15.5 15.5 0 0 1 21.96 0 15.5 15.5 0 0 1 0 21.96'
          }
        />
        <path
          d={
            'M18 4.32a13.68 13.68 0 1 0 0 27.36 13.68 13.68 0 0 0 0-27.36M29.89 16.5l-2.87.5-.2-1.17 2.86-.5zm-1.83-5 .6 1.02L26.14 14l-.6-1.03zm-6.53-4.96 1.12.41-1 2.73-1.11-.4zm-4.13-.52h1.2v2.91h-1.2zm-2.93.52 1 2.74-1.13.4-1-2.73zm-3.7 1.9 1.86 2.23-.9.76-1.88-2.22zM7.93 11.5l2.51 1.46-.6 1.03-2.51-1.46zm-1.62 3.84 2.86.5-.2 1.17-2.87-.5zm-.2 4.15 2.86-.5.2 1.17-2.86.5zm1.81 5-.59-1.02L9.86 22l.6 1.03zm6.54 4.96-1.12-.41 1-2.73 1.11.4zm4.12.52H17.4v-2.91h1.2zm-8.55-2.68 6.75-10.34 9.25-8.18L19.3 19.1zm11.5 2.16-1-2.74 1.12-.4 1 2.73zm3.7-1.9-1.87-2.23.9-.76 1.88 2.22zm2.82-3.05-2.51-1.46.6-1.03 2.5 1.46zm1.62-3.84-2.86-.5.2-1.17 2.87.5z'
          }
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h36v36H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Safari = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<SafariSvg />} {...props} />
))

Safari.displayName = 'Safari'
export { Safari }
