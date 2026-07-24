import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowIosForward } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowIosForward',
  component: ArrowIosForward,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowIosForward>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
