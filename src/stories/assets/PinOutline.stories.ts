import type { Meta, StoryObj } from '@storybook/react-vite'
import { PinOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PinOutline',
  component: PinOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PinOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
