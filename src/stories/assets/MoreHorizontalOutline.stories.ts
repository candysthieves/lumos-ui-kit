import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontalOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/MoreHorizontalOutline',
  component: MoreHorizontalOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof MoreHorizontalOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
