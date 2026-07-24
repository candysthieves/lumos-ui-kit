import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioButtonChecked } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/RadioButtonChecked',
  component: RadioButtonChecked,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButtonChecked>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
