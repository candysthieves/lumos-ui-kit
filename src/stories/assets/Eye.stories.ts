import type { Meta, StoryObj } from '@storybook/react-vite'
import { Eye } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Eye',
  component: Eye,
  tags: ['autodocs'],
} satisfies Meta<typeof Eye>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
