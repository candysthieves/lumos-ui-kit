import type { Meta, StoryObj } from '@storybook/react-vite'
import { CreditCardOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/CreditCardOutline',
  component: CreditCardOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof CreditCardOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
