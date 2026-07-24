import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlagRus } from '@/assets/icons'
import { coloredIconMeta } from '@/storybook-utils'

const meta = {
  ...coloredIconMeta,
  title: 'Components/Icons/FlagRus',
  component: FlagRus,
  tags: ['autodocs'],
} satisfies Meta<typeof FlagRus>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
