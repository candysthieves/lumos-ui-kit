import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusSquare } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PlusSquare',
  component: PlusSquare,
  tags: ['autodocs'],
} satisfies Meta<typeof PlusSquare>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
