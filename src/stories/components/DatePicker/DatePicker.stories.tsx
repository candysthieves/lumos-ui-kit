import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { DatePicker, type DateRange as DateRangeValue } from '@/components/DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: false },
    defaultValue: { control: false },
    maxDate: { control: false },
    minDate: { control: false },
    onChange: { action: 'date changed' },
    value: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Date select',
  },
}

export const SelectedDate: Story = {
  args: {
    defaultValue: new Date(2026, 9, 1),
    label: 'Date',
  },
}

export const DateRange: Story = {
  args: {
    defaultValue: {
      end: new Date(2026, 9, 8),
      start: new Date(2026, 9, 2),
    },
    label: 'Date range',
    mode: 'range',
  },
  render: args => {
    const [value, setValue] = useState<DateRangeValue>(args.defaultValue as DateRangeValue)

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={nextValue => setValue(nextValue as DateRangeValue)}
      />
    )
  },
}

export const Error: Story = {
  args: {
    defaultValue: new Date(2022, 11, 22),
    error: 'Error!',
    label: 'Date',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: new Date(2022, 11, 22),
    disabled: true,
    label: 'Date',
  },
}
