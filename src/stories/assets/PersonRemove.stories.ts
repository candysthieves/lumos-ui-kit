import type { Meta, StoryObj } from '@storybook/react-vite'
import { PersonRemove } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PersonRemove',
  component: PersonRemove,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonRemove>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
