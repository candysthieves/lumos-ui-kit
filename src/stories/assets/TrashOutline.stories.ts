import type { Meta, StoryObj } from '@storybook/react-vite'
import { TrashOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/TrashOutline',
  component: TrashOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof TrashOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
