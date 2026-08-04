import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowIosForwardOutline } from '@/assets'
import { iconMeta } from '@/storybook-utils'
import s from './Icon.module.scss'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowIosForwardOutline',
  component: ArrowIosForwardOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowIosForwardOutline>

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
