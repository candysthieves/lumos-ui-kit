import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontal } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/MoreHorizontal',
  component: MoreHorizontal,
  tags: ['autodocs'],
} satisfies Meta<typeof MoreHorizontal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
