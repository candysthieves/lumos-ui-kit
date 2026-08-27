'use client'

import { forwardRef, memo, type Ref, type SVGProps } from 'react'

type LogoSize = 'l' | 'm' | 's' | 'xl' | 'xs'
type LogoTheme = 'day' | 'night'

export type LogoProps = {
  size?: LogoSize
  theme?: LogoTheme
  svgProps?: SVGProps<SVGSVGElement>
}

const sizeMap: Record<LogoSize, number> = {
  xs: 16,
  s: 24,
  m: 48,
  l: 72,
  xl: 108,
}

const SvgComponent = (
  { size = 's', theme = 'day', svgProps }: LogoProps,
  ref: Ref<SVGSVGElement>
) => {
  const selectedSize = sizeMap[size]
  const fillSvg = theme === 'day' ? 'var(--color-dark-300)' : 'var(--color-light-100)'
  const strokeSvg = theme === 'day' ? 'var(--color-light-100)' : 'var(--color-dark-300)'

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={selectedSize}
      height={selectedSize}
      viewBox={'0 0 108 108'}
      fill={'none'}
      ref={ref}
      {...svgProps}
    >
      <rect width={108} height={108} fill={fillSvg} rx={15} />
      <circle
        cx={54}
        cy={54}
        r={25}
        fill={'var(--color-accent-300)'}
        stroke={strokeSvg}
        strokeWidth={10}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponent)
export const Logo = memo(ForwardRef)
Logo.displayName = 'Logo'
