import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookmarkOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/BookmarkOutline',
  component: BookmarkOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof BookmarkOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
