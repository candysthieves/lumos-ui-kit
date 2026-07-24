import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusCircleOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PlusCircleOutline',
  component: PlusCircleOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PlusCircleOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
