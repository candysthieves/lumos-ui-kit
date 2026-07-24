import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowIosBackOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowIosBackOutline',
  component: ArrowIosBackOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowIosBackOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
