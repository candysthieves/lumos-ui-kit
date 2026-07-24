import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowIosBack } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ArrowIosBack',
  component: ArrowIosBack,
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowIosBack>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
