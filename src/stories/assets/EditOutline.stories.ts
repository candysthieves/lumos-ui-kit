import type { Meta, StoryObj } from '@storybook/react-vite'
import { EditOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/EditOutline',
  component: EditOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof EditOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
