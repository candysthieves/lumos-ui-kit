import type { Meta, StoryObj } from '@storybook/react-vite'
import { PersonOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PersonOutline',
  component: PersonOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
