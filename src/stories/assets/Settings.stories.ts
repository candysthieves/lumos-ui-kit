import type { Meta, StoryObj } from '@storybook/react-vite'
import { Settings } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Settings',
  component: Settings,
  tags: ['autodocs'],
} satisfies Meta<typeof Settings>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
