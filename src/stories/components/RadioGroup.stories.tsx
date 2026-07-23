import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { RadioGroup } from '@/components/RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
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
