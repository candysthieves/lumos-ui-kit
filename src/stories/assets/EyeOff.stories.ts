import type { Meta, StoryObj } from '@storybook/react-vite'
import { EyeOff } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/EyeOff',
  component: EyeOff,
  tags: ['autodocs'],
} satisfies Meta<typeof EyeOff>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
