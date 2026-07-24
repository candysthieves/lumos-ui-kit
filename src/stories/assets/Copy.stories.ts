import type { Meta, StoryObj } from '@storybook/react-vite'
import { Copy } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Copy',
  component: Copy,
  tags: ['autodocs'],
} satisfies Meta<typeof Copy>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
