import type { Meta, StoryObj } from '@storybook/react-vite'
import { Trash } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Trash',
  component: Trash,
  tags: ['autodocs'],
} satisfies Meta<typeof Trash>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
