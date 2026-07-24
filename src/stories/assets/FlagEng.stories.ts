import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlagEng } from '@/assets/icons'
import { coloredIconMeta } from '@/storybook-utils'

const meta = {
  ...coloredIconMeta,
  title: 'Components/Icons/FlagEng',
  component: FlagEng,
  tags: ['autodocs'],
} satisfies Meta<typeof FlagEng>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
