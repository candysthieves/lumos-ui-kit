import type { Meta, StoryObj } from '@storybook/react-vite'
import { Maximize } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Maximize',
  component: Maximize,
  tags: ['autodocs'],
} satisfies Meta<typeof Maximize>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
