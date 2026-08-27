import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MicrosoftEdgeSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <g clipPath={'url(#microsoft-edge-a)'}>
        <path
          fill={fill}
          d={
            'M32.48 26.79q-.71.38-1.47.66-2.44.9-5.05.91c-6.65 0-12.45-4.57-12.45-10.44.02-1.6.9-3.08 2.31-3.84-6.02.25-7.57 6.52-7.57 10.2 0 10.38 9.58 11.44 11.65 11.44 1.1 0 2.78-.32 3.8-.65l.18-.05a18 18 0 0 0 9.36-7.43.56.56 0 0 0-.16-.77.6.6 0 0 0-.6-.03'
          }
        />
        <path
          fill={fill}
          d={
            'M32.48 26.79q-.71.38-1.47.66-2.44.9-5.05.91c-6.65 0-12.45-4.57-12.45-10.44.02-1.6.9-3.08 2.31-3.84-6.02.25-7.57 6.52-7.57 10.2 0 10.38 9.58 11.44 11.65 11.44 1.1 0 2.78-.32 3.8-.65l.18-.05a18 18 0 0 0 9.36-7.43.56.56 0 0 0-.16-.77.6.6 0 0 0-.6-.03'
          }
          opacity={0.35}
        />
        <path
          fill={fill}
          d={
            'M14.86 33.95a11 11 0 0 1-3.19-3 11.35 11.35 0 0 1 4.15-16.87c.44-.21 1.18-.58 2.18-.57a4.6 4.6 0 0 1 4.51 4.46c0-.03 3.45-11.2-11.25-11.2-6.17 0-11.25 5.87-11.25 11a18.01 18.01 0 0 0 23.7 17.31c-2.97.93-6.2.53-8.85-1.13'
          }
        />
        <g filter={'url(#microsoft-edge-b)'} opacity={0.41}>
          <path
            fill={fill}
            d={
              'M14.86 33.95a11 11 0 0 1-3.19-3 11.35 11.35 0 0 1 4.15-16.87c.44-.21 1.18-.58 2.18-.57a4.6 4.6 0 0 1 4.51 4.46c0-.03 3.45-11.2-11.25-11.2-6.17 0-11.25 5.87-11.25 11a18.01 18.01 0 0 0 23.7 17.31c-2.97.93-6.2.53-8.85-1.13'
            }
          />
        </g>
        <path
          fill={fill}
          d={
            'M21.42 20.94c-.12.14-.47.35-.47.8q.01.56.66 1.01c2.03 1.4 5.84 1.23 5.85 1.23a8.62 8.62 0 0 0 8.54-8.6c.04-3.16-1.12-5.25-1.59-6.18C31.43 3.36 25 0 18 0A18 18 0 0 0 0 17.75c.07-5.14 5.18-9.28 11.25-9.28.5 0 3.3.04 5.9 1.42 2.3 1.2 3.5 2.65 4.34 4.1a9 9 0 0 1 1.02 4.15c0 .75-.38 1.87-1.1 2.8'
          }
        />
        <g filter={'url(#microsoft-edge-c)'}>
          <path
            fill={fill}
            d={
              'M21.42 20.94c-.12.14-.47.35-.47.8q.01.56.66 1.01c2.03 1.4 5.84 1.23 5.85 1.23a8.62 8.62 0 0 0 8.54-8.6c.04-3.16-1.12-5.25-1.59-6.18C31.43 3.36 25 0 18 0A18 18 0 0 0 0 17.75c.07-5.14 5.18-9.28 11.25-9.28.5 0 3.3.04 5.9 1.42 2.3 1.2 3.5 2.65 4.34 4.1a9 9 0 0 1 1.02 4.15c0 .75-.38 1.87-1.1 2.8'
            }
          />
        </g>
      </g>
      <defs>
        <filter
          id={'microsoft-edge-b'}
          width={31.7}
          height={37.23}
          x={-3.99}
          y={6.78}
          colorInterpolationFilters={'sRGB'}
          filterUnits={'userSpaceOnUse'}
        >
          <feFlood floodOpacity={0} result={'BackgroundImageFix'} />
          <feColorMatrix
            in={'SourceAlpha'}
            result={'hardAlpha'}
            values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2={'hardAlpha'} operator={'out'} />
          <feColorMatrix values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'} />
          <feBlend in2={'BackgroundImageFix'} result={'effect1_dropShadow_122149_8868'} />
          <feBlend in={'SourceGraphic'} in2={'effect1_dropShadow_122149_8868'} result={'shape'} />
        </filter>
        <filter
          id={'microsoft-edge-c'}
          width={44}
          height={31.98}
          x={-4}
          y={0}
          colorInterpolationFilters={'sRGB'}
          filterUnits={'userSpaceOnUse'}
        >
          <feFlood floodOpacity={0} result={'BackgroundImageFix'} />
          <feColorMatrix
            in={'SourceAlpha'}
            result={'hardAlpha'}
            values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2={'hardAlpha'} operator={'out'} />
          <feColorMatrix values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'} />
          <feBlend in2={'BackgroundImageFix'} result={'effect1_dropShadow_122149_8868'} />
          <feBlend in={'SourceGraphic'} in2={'effect1_dropShadow_122149_8868'} result={'shape'} />
        </filter>
        <clipPath id={'microsoft-edge-a'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h36v36H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const MicrosoftEdge = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MicrosoftEdgeSvg />} {...props} />
))

MicrosoftEdge.displayName = 'MicrosoftEdge'
export { MicrosoftEdge }
