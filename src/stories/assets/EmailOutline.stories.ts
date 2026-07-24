import type { Meta, StoryObj } from '@storybook/react-vite'
import { EmailOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/EmailOutline',
  component: EmailOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof EmailOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
