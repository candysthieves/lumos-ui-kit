import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowBackOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowBackOutline',
  component: ArrowBackOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowBackOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
