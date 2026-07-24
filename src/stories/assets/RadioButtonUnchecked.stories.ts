import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioButtonUnchecked } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/RadioButtonUnchecked',
  component: RadioButtonUnchecked,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButtonUnchecked>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
