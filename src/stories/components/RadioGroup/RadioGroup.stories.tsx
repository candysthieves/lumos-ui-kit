import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { RadioGroup } from '@/components/RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A RadioGroup component built on top of Radix UI. Allows users to select a single option from a list. Supports disabled state for the whole group or individual options.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value.',
    },
    defaultValue: {
      control: 'text',
      description: 'Initial selected value for uncontrolled mode.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the entire radio group.',
    },
    options: {
      control: false,
      description:
        'Array of radio options. Each option contains value, label and optional disabled state.',
      table: {
        type: {
          summary: 'RadioOption[]',
        },
      },
    },
    onValueChange: {
      action: 'value changed',
      description: 'Callback fired when the selected value changes.',
    },
    className: {
      control: false,
      description: 'Additional CSS class for the root element.',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
]

export const Default: Story = {
  args: {
    options,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default RadioGroup with three selectable options.',
      },
    },
  },
  render: args => {
    const [value, setValue] = useState('1')

    return (
      <>
        <RadioGroup {...args} value={value} onValueChange={setValue} />
        <p>Selected value: {value}</p>
      </>
    )
  },
}

const disabledOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
]

export const Disabled: Story = {
  args: {
    options: disabledOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'The entire RadioGroup is disabled.',
      },
    },
  },
  render: args => {
    const [value, setValue] = useState('2')

    return (
      <>
        <RadioGroup {...args} value={value} onValueChange={setValue} disabled />
        <p>Selected value: {value}</p>
      </>
    )
  },
}

const partiallyDisabledOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2', disabled: true },
  { value: '3', label: 'Option 3' },
]

export const DisabledItem: Story = {
  args: {
    options: partiallyDisabledOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Only one option is disabled while the others remain interactive.',
      },
    },
  },
  render: args => {
    const [value, setValue] = useState('1')

    return (
      <>
        <RadioGroup {...args} value={value} onValueChange={setValue} />
        <p>Selected value: {value}</p>
      </>
    )
  },
}
