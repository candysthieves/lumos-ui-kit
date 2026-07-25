import { cloneElement, forwardRef, memo, type ReactElement, type Ref, type SVGProps } from 'react'
import type { IconProps } from '@/utils'

export type ColorIconProps = Omit<IconProps, 'backgroundColor' | 'color'>

type Props = ColorIconProps & {
  icon: ReactElement<SVGProps<SVGSVGElement>>
}

const ColorIconBaseSmall = (
  { icon, autoSize, size = 24, svgProps }: Props,
  ref: Ref<SVGSVGElement>
) => {
  const svgWidthSize = autoSize ? '1em' : `${size}px`
  const svgHeightSize = autoSize ? '1em' : `${size / 1.5}px`

  return cloneElement(icon, {
    ref,
    width: svgWidthSize,
    height: svgHeightSize,
    ...svgProps,
    style: {
      ...svgProps?.style,
    },
  })
}

const MemoizedIconBase = memo(forwardRef(ColorIconBaseSmall))
MemoizedIconBase.displayName = 'ColorIconBaseSmall'
export { MemoizedIconBase as ColorIconBaseSmall }
