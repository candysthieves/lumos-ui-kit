import { forwardRef, type SVGProps } from 'react'
import { ColorIconBase, type ColorIconProps } from '@/utils'

const GoogleSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g clipPath={'url(#a)'}>
        <path
          fill={'#ea4335'}
          d={'M5.27 9.76A7.08 7.08 0 0 1 16.42 6.5L19.9 3A11.97 11.97 0 0 0 1.24 6.65z'}
        />
        <path
          fill={'#34a853'}
          d={
            'M16.04 18.01A7.4 7.4 0 0 1 12 19.1a7.1 7.1 0 0 1-6.72-4.82l-4.04 3.07A12 12 0 0 0 12 24c2.93 0 5.74-1.04 7.83-3z'
          }
        />
        <path
          fill={'#4a90e2'}
          d={
            'M19.83 21c2.2-2.05 3.62-5.1 3.62-9 0-.7-.1-1.47-.27-2.18H12v4.63h6.44a5.4 5.4 0 0 1-2.4 3.56z'
          }
        />
        <path
          fill={'#fbbc05'}
          d={'M5.28 14.27a7 7 0 0 1-.01-4.5L1.24 6.64A12 12 0 0 0 0 12c0 1.92.44 3.73 1.24 5.34z'}
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path fill={'#fff'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Google = forwardRef<SVGSVGElement, ColorIconProps>((props, ref) => (
  <ColorIconBase ref={ref} icon={<GoogleSvg />} {...props} />
))

Google.displayName = 'Google'
export { Google }
