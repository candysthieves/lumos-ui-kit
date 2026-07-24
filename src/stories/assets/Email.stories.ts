import type { Meta, StoryObj } from '@storybook/react-vite'
import { Email } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Email',
  component: Email,
  tags: ['autodocs'],
} satisfies Meta<typeof Email>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
