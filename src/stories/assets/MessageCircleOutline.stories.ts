import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessageCircleOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/MessageCircleOutline',
  component: MessageCircleOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof MessageCircleOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
