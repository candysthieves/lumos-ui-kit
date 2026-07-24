import type { Meta, StoryObj } from '@storybook/react-vite'
import { Block } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Block',
  component: Block,
  tags: ['autodocs'],
} satisfies Meta<typeof Block>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
