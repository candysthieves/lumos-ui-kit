import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorPaletteOutline } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/ColorPaletteOutline',
  component: ColorPaletteOutline,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPaletteOutline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
