import type { Meta, StoryObj } from '@storybook/react-vite'
import { ImageOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ImageOutline',
  component: ImageOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
