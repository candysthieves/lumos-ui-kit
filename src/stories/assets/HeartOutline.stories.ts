import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeartOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/HeartOutline',
  component: HeartOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof HeartOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
