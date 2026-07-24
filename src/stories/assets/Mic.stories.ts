import type { Meta, StoryObj } from '@storybook/react-vite'
import { Mic } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Mic',
  component: Mic,
  tags: ['autodocs'],
} satisfies Meta<typeof Mic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
