import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Search',
  component: Search,
  tags: ['autodocs'],
} satisfies Meta<typeof Search>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
