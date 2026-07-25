import type { Meta, StoryObj } from '@storybook/react-vite'
import { TestMixins } from '@/components'

const meta = {
  title: 'Styles/TestMixins',
  component: TestMixins,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestMixins>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
