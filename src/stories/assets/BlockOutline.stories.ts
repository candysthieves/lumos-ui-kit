import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlockOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/BlockOutline',
  component: BlockOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof BlockOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
