import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaximizeOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/MaximizeOutline',
  component: MaximizeOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof MaximizeOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
