import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/SearchOutline',
  component: SearchOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
