import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Heart',
  component: Heart,
  tags: ['autodocs'],
} satisfies Meta<typeof Heart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
