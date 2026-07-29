import type { Meta, StoryObj } from '@storybook/react-vite'
import { MicrosoftEdge } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'
import s from './Icon.module.scss'
const meta = {
  ...iconMeta,
  title: 'Components/Icons/MicrosoftEdge',
  component: MicrosoftEdge,
  tags: ['autodocs'],
} satisfies Meta<typeof MicrosoftEdge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 36,
  },
}

export const WithStyle: Story = {
  args: {
    size: 36,
    backgroundColor: 'var(--color-dark-500)',
    svgProps: {
      style: {
        borderRadius: '2px',
        opacity: 0.8,
        padding: '5px',
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
      style: {
        padding: '5px',
      },
    },
  },
}
