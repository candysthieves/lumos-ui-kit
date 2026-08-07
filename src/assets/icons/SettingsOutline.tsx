import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const SettingsOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#settings-outline)'}>
        <path
          d={
            'M8.61 22q-.75 0-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2 2 0 0 0 .23-1.86l-.06-.16a1.8 1.8 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.2 2.2 0 0 1 2.8-1.53 2 2 0 0 0 1.78-.29l.13-.1a2 2 0 0 0 .73-1.51v-.24A2.3 2.3 0 0 1 10.66 2h2.55a2.3 2.3 0 0 1 1.6.67c.44.45.68 1.05.68 1.68v.28a1.8 1.8 0 0 0 .69 1.43l.11.08a1.7 1.7 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.9 1.9 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.4 2.4 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-2.3-.57 2 2 0 0 0-.63.56l-.23.33A2.3 2.3 0 0 1 9 22zM4.4 11.62a3.8 3.8 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.4.4 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18q.06.09.18.12a.3.3 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38a4 4 0 0 1 1.96-6.03l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.4.4 0 0 0-.2-.19.2.2 0 0 0-.19 0l-.34.11a3.7 3.7 0 0 1-3.43-.57L15 7.65a3.8 3.8 0 0 1-1.49-3v-.31q0-.15-.1-.26A.3.3 0 0 0 13.2 4h-2.54a.3.3 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.9 3.9 0 0 1-3.63.59.2.2 0 0 0-.14 0 .3.3 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z'
          }
        />
        <path
          d={'M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'}
        />
      </g>
      <defs>
        <clipPath id={'settings-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const SettingsOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<SettingsOutlineSvg />} {...props} />
))

SettingsOutline.displayName = 'SettingsOutline'
export { SettingsOutline }
