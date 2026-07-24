import type { Meta, StoryObj } from '@storybook/react-vite'
import { EyeOffOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/EyeOffOutline',
  component: EyeOffOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof EyeOffOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
