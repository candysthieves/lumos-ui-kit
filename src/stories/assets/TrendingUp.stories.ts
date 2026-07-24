import type { Meta, StoryObj } from '@storybook/react-vite'
import { TrendingUp } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/TrendingUp',
  component: TrendingUp,
  tags: ['autodocs'],
} satisfies Meta<typeof TrendingUp>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
