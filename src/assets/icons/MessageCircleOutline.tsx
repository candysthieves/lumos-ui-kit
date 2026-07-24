import { forwardRef, type SVGProps } from 'react'
import { IconBase, type IconProps } from '@/utils'

const MessageCircleOutlineSvg = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} {...props}>
      <g fill={fill} clipPath={'url(#message-circle-outline)'}>
        <path
          d={
            'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
          }
        />
        <path
          d={
            'M19.07 4.93a10 10 0 0 0-16.28 11q.15.3.09.64L2 20.8A1 1 0 0 0 3 22h.2l4.28-.86q.34-.05.64.09a10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.3 3.3 0 0 0-1.81-.21l-2.82.57.57-2.82c.11-.61.04-1.24-.21-1.81a8 8 0 1 1 15.27-1.81'
          }
        />
      </g>
      <defs>
        <clipPath id={'message-circle-outline'}>
          <path fill={'var(--color-light-100)'} d={'M0 0h24v24H0z'} />
        </clipPath>
      </defs>
    </svg>
  )
}

const MessageCircleOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} icon={<MessageCircleOutlineSvg />} {...props} />
))

MessageCircleOutline.displayName = 'MessageCircleOutline'
export { MessageCircleOutline }
