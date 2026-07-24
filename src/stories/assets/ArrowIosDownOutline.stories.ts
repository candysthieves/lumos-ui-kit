import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowIosDownOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowIosDownOutline',
  component: ArrowIosDownOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowIosDownOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
