import type { Meta, StoryObj } from '@storybook/react-vite'
import { EyeOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/EyeOutline',
  component: EyeOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof EyeOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
