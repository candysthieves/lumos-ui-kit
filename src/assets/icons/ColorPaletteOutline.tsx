import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const ColorPaletteOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path
          d={
            'M19.54 5.08A10.6 10.6 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.6 2.6 0 0 0 2.53-1.89 2.5 2.5 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.5 8.5 0 0 0-2.46-6.25M15.88 15h-1.65a2.49 2.49 0 0 0-1.87 4.15.5.5 0 0 1 .12.49c-.05.21-.28.34-.59.36a8 8 0 0 1-7.82-9.11A8.1 8.1 0 0 1 11.92 4H12a8.5 8.5 0 0 1 6.1 2.48 6.5 6.5 0 0 1 1.9 4.77A4.17 4.17 0 0 1 15.88 15'
          }
        />
        <path
          d={
            'M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m3.25-.8a1.5 1.5 0 1 0 1.5 2.6 1.5 1.5 0 0 0-1.5-2.6m-6.5 0a1.5 1.5 0 1 0-1.5 2.6 1.5 1.5 0 0 0 1.5-2.6m-2.59 4.06a1.5 1.5 0 1 0 1.68 2.49 1.5 1.5 0 0 0-1.68-2.49'
          }
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const ColorPaletteOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<ColorPaletteOutlineSvg />} {...props} />
))

ColorPaletteOutline.displayName = 'ColorPaletteOutline'
export { ColorPaletteOutline }
