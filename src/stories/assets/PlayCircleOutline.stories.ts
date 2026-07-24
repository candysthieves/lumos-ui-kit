import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayCircleOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PlayCircleOutline',
  component: PlayCircleOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PlayCircleOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
