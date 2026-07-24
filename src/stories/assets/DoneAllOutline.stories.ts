import type { Meta, StoryObj } from '@storybook/react-vite'
import { DoneAllOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/DoneAllOutline',
  component: DoneAllOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof DoneAllOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
