import type { Meta, StoryObj } from '@storybook/react-vite'
import { Paypal } from '@/assets/icons'
import { coloredIconMeta } from '@/storybook-utils'

const meta = {
  ...coloredIconMeta,
  title: 'Components/Icons/Paypal',
  component: Paypal,
  tags: ['autodocs'],
} satisfies Meta<typeof Paypal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
