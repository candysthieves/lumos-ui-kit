import type { Meta, StoryObj } from '@storybook/react-vite'
import { PersonRemoveOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PersonRemoveOutline',
  component: PersonRemoveOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonRemoveOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
