import type { Meta, StoryObj } from '@storybook/react-vite'
import { Paid } from '@/assets'
import { coloredIconMeta } from '@/storybook-utils'
import s from './Icon.module.scss'

const meta = {
  ...coloredIconMeta,
  title: 'Components/Icons/Paid',
  component: Paid,
  tags: ['autodocs'],
} satisfies Meta<typeof Paid>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithStyle: Story = {
  args: {
    size: 36,
    svgProps: {
      style: {
        borderRadius: '2px',
        opacity: 0.8,
      },
    },
  },
}

export const WithClassName: Story = {
  args: {
    size: 36,
    svgProps: {
      className: s.icon,
    },
  },
}
