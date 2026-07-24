import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowForwardOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowForwardOutline',
  component: ArrowForwardOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowForwardOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
