import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowIosUp } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowIosUp',
  component: ArrowIosUp,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowIosUp>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
