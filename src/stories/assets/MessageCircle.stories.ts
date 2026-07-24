import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessageCircle } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/MessageCircle',
  component: MessageCircle,
  tags: ['autodocs'],
} satisfies Meta<typeof MessageCircle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
