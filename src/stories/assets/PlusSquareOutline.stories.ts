import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusSquareOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PlusSquareOutline',
  component: PlusSquareOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PlusSquareOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
