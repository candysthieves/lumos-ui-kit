import type { Meta, StoryObj } from '@storybook/react-vite'
import { LayersOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/LayersOutline',
  component: LayersOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof LayersOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
