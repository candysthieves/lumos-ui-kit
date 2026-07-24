import type { Meta, StoryObj } from '@storybook/react-vite'
import { PauseCircle } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PauseCircle',
  component: PauseCircle,
  tags: ['autodocs'],
} satisfies Meta<typeof PauseCircle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
