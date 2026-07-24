import type { Meta, StoryObj } from '@storybook/react-vite'
import { PaperPlaneOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/PaperPlaneOutline',
  component: PaperPlaneOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof PaperPlaneOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
