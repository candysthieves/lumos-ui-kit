import { forwardRef, memo, type Ref, type SVGProps } from 'react'

export type IconProps = {
  autoSize?: boolean
  backgroundColor?: string
  color?: string
  size?: number
  svgProps?: SVGProps<SVGSVGElement>
}

const SvgComponent = (
  {
    autoSize,
    backgroundColor = 'transparent',
    color = 'currentColor',
    size = 24,
    svgProps,
  }: IconProps,
  ref: Ref<SVGSVGElement>
) => {
  const svgSize = autoSize ? '1em' : `${size}px`

  const mergedStyles = {
    backgroundColor: backgroundColor,
    ...(svgProps?.style || {}),
  }

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={svgSize}
      height={svgSize}
      viewBox={'0 0 24 24'}
      fill={'none'}
      ref={ref}
      {...svgProps}
      style={mergedStyles}
    >
      <g clipPath={"url(#a)"}>
        <path
          fill={color}
          d={"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 0 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"}
        />
      </g>
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
Memo.displayName = 'CheckmarkOutline'

export default Memo
