import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ExplorerSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props

  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 36 36'} fill={'none'} {...props}>
      <path
        fill={fill}
        d={
          'M34.05 8.07C37.37-.56 30.9.04 30.9.04c-4.14 0-9.32 3.78-9.32 3.78S15.41 2.15 9.24 5.89c-6.73 4.29-6.51 11.9-6.51 11.9 5.47-7.82 13.1-11 13.1-11v.51C4.57 15 1.9 26.23 1.24 28.53s-.22 7.43 4.51 7.43c4.74 0 9.54-3.8 9.54-3.8s1.04.21 3.85.21C31 32.37 33.8 21.94 33.8 21.94H23.3s-.75 3.4-4.52 3.4c-5.18 0-4.88-5.4-4.88-5.4h20.05c.96-13.9-11.17-15.9-11.17-15.9S27.06 1 30.77 1c5.86 0 3.09 6.87 3.09 6.87zM14.72 32s-7.23 4.38-10.47 1.34C2.5 30.31 5.33 26 5.33 26s2.4 4.43 9.39 6m8.68-16.8h-9.54s-.12-4.64 4.9-4.64c4.83 0 4.64 4.64 4.64 4.64'
        }
      />
    </svg>
  )
}

const Explorer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ExplorerSvg />} {...props} />
))

Explorer.displayName = 'Explorer'
export { Explorer }
