import type { Meta, StoryObj } from '@storybook/react-vite'
import { PersonAdd } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PersonAdd',
  component: PersonAdd,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonAdd>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
