import type { Meta, StoryObj } from '@storybook/react-vite'
import { Expand } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Expand',
  component: Expand,
  tags: ['autodocs'],
} satisfies Meta<typeof Expand>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
