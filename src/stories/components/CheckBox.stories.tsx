import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from '@/components/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable checkbox component built with Radix UI. Supports controlled and uncontrolled modes, labels, disabled state, and keyboard navigation.',
      },
    },
  },
  args: {
    id: 'checkbox',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controls the checked state.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Sets the initial checked state in uncontrolled mode.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox.',
    },
    label: {
      control: 'text',
      description: 'Content displayed next to the checkbox.',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Called when the checked state changes.',
    },
    className: {
      control: false,
      description: 'Additional CSS class for the root element.',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default checkbox.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkbox that cannot be interacted with.',
      },
    },
  },
}

export const Interactive: Story = {
  args: {
    label: 'Click here',
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled checkbox example using React state.',
      },
    },
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}
