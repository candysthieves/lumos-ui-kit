import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from '@/assets'
import { logoIconMeta } from '@/storybook-utils'

const meta = {
  ...logoIconMeta,
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultDay: Story = {}

export const Night: Story = {
  args: {
    theme: 'night',
  },
}
