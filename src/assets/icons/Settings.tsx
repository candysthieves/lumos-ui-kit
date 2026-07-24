import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const SettingsSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#a)'}>
        <path d={'M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'} />
        <path
          d={
            'M21.89 10.32 21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.7 1.7 0 0 1-1.59-.26l-.11-.08a1.8 1.8 0 0 1-.69-1.43v-.28a2.4 2.4 0 0 0-1.41-2.17A2 2 0 0 0 13.2 2h-2.55a2.3 2.3 0 0 0-2.29 2.33v.24a2 2 0 0 1-.73 1.51l-.13.1a2 2 0 0 1-1.78.29 2.1 2.1 0 0 0-1.68.12 2.2 2.2 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.8 1.8 0 0 1 1.12 1.22l.06.16a2 2 0 0 1-.23 1.86 2.37 2.37 0 0 0 .49 3.3l2.07 1.57q.62.44 1.35.43H9a2.3 2.3 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 2.28-.57q.4.2.65.58l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.4 2.4 0 0 0 .5-3.23l-.26-.38a2 2 0 0 1 .2-2.44q.33-.34.77-.49l.2-.07a2.36 2.36 0 0 0 1.48-2.93M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7'
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

const Settings = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<SettingsSvg />} {...props} />
))

Settings.displayName = 'Settings'
export { Settings }
