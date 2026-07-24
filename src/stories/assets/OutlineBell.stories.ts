import type { Meta, StoryObj } from '@storybook/react-vite'
import { OutlineBell } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

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
} satisfies Meta<typeof OutlineBell>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    msgCounter: 2,
  },
}
