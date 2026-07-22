import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckmarkOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/CheckmarkOutline',
  component: CheckmarkOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckmarkOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
