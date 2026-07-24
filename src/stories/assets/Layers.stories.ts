import type { Meta, StoryObj } from '@storybook/react-vite'
import { Layers } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Layers',
  component: Layers,
  tags: ['autodocs'],
} satisfies Meta<typeof Layers>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
