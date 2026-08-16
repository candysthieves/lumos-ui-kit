import type { Meta, StoryObj } from '@storybook/react-vite'
import { OutlineBell } from '@/assets'
import { iconMeta } from '@/storybook-utils'
import s from './Icon.module.scss'
const meta = {
  ...iconMeta,
  title: 'Components/Icons/OutlineBell',
  component: OutlineBell,
  tags: ['autodocs'],
  argTypes: {
    ...iconMeta.argTypes,
    msgCounter: {
      control: {
        type: 'range' as const,
        min: -2,
        max: 102,
        step: 2,
      },
      description: 'Set the count of income messages',
    },
  },
  args: {
    msgCounter: 2,
  },
} satisfies Meta<typeof OutlineBell>

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
