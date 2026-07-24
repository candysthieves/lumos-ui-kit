import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusCircle } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PlusCircle',
  component: PlusCircle,
  tags: ['autodocs'],
} satisfies Meta<typeof PlusCircle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
