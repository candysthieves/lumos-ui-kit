import { cloneElement, forwardRef, memo, type ReactElement, type Ref, type SVGProps } from 'react'
import type { IconProps } from '@/utils'

export type ColorIconProps = Omit<IconProps, 'backgroundColor' | 'color'>

type Props = ColorIconProps & {
  icon: ReactElement<SVGProps<SVGSVGElement>>
}

const ColorIconBase = ({ icon, autoSize, size = 24, svgProps }: Props, ref: Ref<SVGSVGElement>) => {
  const svgSize = autoSize ? '1em' : `${size}px`

  return cloneElement(icon, {
    ref,
    width: svgSize,
    height: svgSize,
    ...svgProps,
    style: {
      ...svgProps?.style,
    },
  })
}

const MemoizedIconBase = memo(forwardRef(ColorIconBase))
MemoizedIconBase.displayName = 'ColorIconBase'
export { MemoizedIconBase as ColorIconBase }
