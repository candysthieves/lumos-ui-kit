import type { Meta, StoryObj } from '@storybook/react-vite'
import { MenuOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/MenuOutline',
  component: MenuOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof MenuOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
