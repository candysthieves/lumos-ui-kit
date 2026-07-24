import type { Meta, StoryObj } from '@storybook/react-vite'
import { MicOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/MicOutline',
  component: MicOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof MicOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
