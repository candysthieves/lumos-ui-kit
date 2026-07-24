import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pin } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Pin',
  component: Pin,
  tags: ['autodocs'],
} satisfies Meta<typeof Pin>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
