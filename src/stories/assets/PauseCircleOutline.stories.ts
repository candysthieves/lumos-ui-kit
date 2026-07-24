import type { Meta, StoryObj } from '@storybook/react-vite'
import { PauseCircleOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PauseCircleOutline',
  component: PauseCircleOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PauseCircleOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
