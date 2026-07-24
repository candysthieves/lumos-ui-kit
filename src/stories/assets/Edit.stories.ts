import type { Meta, StoryObj } from '@storybook/react-vite'
import { Edit } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Edit',
  component: Edit,
  tags: ['autodocs'],
} satisfies Meta<typeof Edit>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
