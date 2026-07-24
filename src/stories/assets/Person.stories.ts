import type { Meta, StoryObj } from '@storybook/react-vite'
import { Person } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Person',
  component: Person,
  tags: ['autodocs'],
} satisfies Meta<typeof Person>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
