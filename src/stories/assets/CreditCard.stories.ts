import type { Meta, StoryObj } from '@storybook/react-vite'
import { CreditCard } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CreditCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
