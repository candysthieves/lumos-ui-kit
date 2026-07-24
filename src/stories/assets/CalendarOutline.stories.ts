import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/CalendarOutline',
  component: CalendarOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
