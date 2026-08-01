import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'
import s from './Icon.module.scss'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithStyle: Story = {
  args: {
    size: 36,
    backgroundColor: 'var(--color-dark-500)',
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
    backgroundColor: 'var(--color-dark-500)',
    svgProps: {
      className: s.icon,
    },
  },
}
