import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowIosForwardOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowIosForwardOutline',
  component: ArrowIosForwardOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowIosForwardOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
