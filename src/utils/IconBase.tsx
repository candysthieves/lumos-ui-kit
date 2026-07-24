import { cloneElement, forwardRef, memo, type ReactElement, type Ref, type SVGProps } from 'react'

export type IconProps = {
  autoSize?: boolean
  backgroundColor?: string
  color?: string
  size?: number
  svgProps?: SVGProps<SVGSVGElement>
}

type Props = IconProps & {
  icon: ReactElement<SVGProps<SVGSVGElement>>
}

const IconBase = (
  {
    icon,
    autoSize,
    backgroundColor = 'transparent',
    color = 'currentColor',
    size = 24,
    svgProps,
  }: Props,
  ref: Ref<SVGSVGElement>
) => {
  const svgSize = autoSize ? '1em' : `${size}px`

  return cloneElement(icon, {
    ref,
    width: svgSize,
    height: svgSize,
    fill: color,
    ...svgProps,
    style: {
      backgroundColor,
      ...svgProps?.style,
    },
  })
}

const MemoizedIconBase = memo(forwardRef(IconBase))
export { MemoizedIconBase as IconBase }
