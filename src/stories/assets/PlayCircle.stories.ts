import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayCircle } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PlayCircle',
  component: PlayCircle,
  tags: ['autodocs'],
} satisfies Meta<typeof PlayCircle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
