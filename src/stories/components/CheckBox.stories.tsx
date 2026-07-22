import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from '@/components/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'checkbox',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Interactive: Story = {
  args: {
    label: 'Click here',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}
