import type { Meta, StoryObj } from '@storybook/react-vite'
import { ExpandOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ExpandOutline',
  component: ExpandOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpandOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
