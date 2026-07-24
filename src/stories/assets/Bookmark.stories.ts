import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bookmark } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Bookmark',
  component: Bookmark,
  tags: ['autodocs'],
} satisfies Meta<typeof Bookmark>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
