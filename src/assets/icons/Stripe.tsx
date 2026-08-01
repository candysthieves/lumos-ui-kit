import { forwardRef, type SVGProps } from 'react'
import { ColorIconBaseSmall, type ColorIconProps } from '@/utils'

const StripeSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 16'} fill={'none'} {...props}>
      <g clipPath={'url(#stripe)'}>
        <path
          fill={'#fff'}
          stroke={'#f3f3f3'}
          d={
            'M1.91.5H22.1c.79 0 1.41.62 1.41 1.37v12.26a1.4 1.4 0 0 1-1.41 1.37H1.9a1.4 1.4 0 0 1-1.4-1.37V1.87C.5 1.12 1.12.5 1.91.5Z'
          }
        />
        <path
          fill={'#6461fc'}
          fillRule={'evenodd'}
          d={
            'm12.73 5.35-1.22.27v-1l1.22-.25zm2.53.55c-.47 0-.78.22-.95.38l-.06-.3h-1.07v5.65l1.21-.26V10c.18.13.44.3.87.3.87 0 1.66-.7 1.66-2.23 0-1.4-.8-2.17-1.66-2.17m-.29 3.34a.7.7 0 0 1-.57-.23v-1.8q.17-.22.57-.23c.44 0 .75.5.75 1.13 0 .65-.3 1.13-.75 1.13m5.78-1.12c0-1.24-.6-2.22-1.76-2.22-1.15 0-1.85.98-1.85 2.21 0 1.46.82 2.2 2 2.2q.87-.02 1.35-.32v-.97q-.47.26-1.19.27c-.47 0-.89-.17-.94-.74h2.38v-.43m-2.4-.46c0-.55.33-.77.64-.77.3 0 .6.22.6.77zM11.5 5.98h1.22v4.24H11.5zm-1.39 0 .08.36c.29-.52.86-.41 1.01-.36V7.1c-.15-.05-.64-.12-.92.25v2.87H9.07V5.98zM7.77 4.93l-1.18.25v3.89c0 .71.53 1.24 1.25 1.24q.6-.01.85-.16v-.98c-.16.06-.92.28-.92-.43V7.02h.92V5.98h-.92zM4.9 6.95q-.4 0-.41.27c0 .2.27.3.6.4.54.19 1.25.43 1.25 1.32 0 .87-.69 1.37-1.7 1.37q-.63.01-1.33-.28V8.89c.41.22.93.39 1.33.39.27 0 .47-.07.47-.3s-.3-.33-.64-.46c-.54-.19-1.21-.43-1.21-1.24 0-.85.66-1.37 1.64-1.37q.6-.01 1.2.22v1.14c-.36-.2-.83-.3-1.2-.3'
          }
          clipRule={'evenodd'}
        />
      </g>
      <defs>
        <clipPath id={'stripe'}>
          <path fill={'#fff'} d={'M0 0h24v16H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const Stripe = forwardRef<SVGSVGElement, ColorIconProps>((props, ref) => (
  <ColorIconBaseSmall ref={ref} icon={<StripeSvg />} {...props} />
))

Stripe.displayName = 'Stripe'
export { Stripe }
