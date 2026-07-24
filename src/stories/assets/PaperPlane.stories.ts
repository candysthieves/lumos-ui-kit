import type { Meta, StoryObj } from '@storybook/react-vite'
import { PaperPlane } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PaperPlane',
  component: PaperPlane,
  tags: ['autodocs'],
} satisfies Meta<typeof PaperPlane>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
