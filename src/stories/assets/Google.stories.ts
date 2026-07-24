import type { Meta, StoryObj } from '@storybook/react-vite'
import { Google } from '@/assets/icons'
import { coloredIconMeta } from '@/storybook-utils'
import s from './Icon.module.scss'

const meta = {
  ...coloredIconMeta,
  title: 'Components/Icons/Google',
  component: Google,
  tags: ['autodocs'],
} satisfies Meta<typeof Google>

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
