import type { Meta, StoryObj } from '@storybook/react-vite'
import { ImageIcon } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ImageIcon',
  component: ImageIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
