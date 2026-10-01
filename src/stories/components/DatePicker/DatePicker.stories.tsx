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

const SELECTED_DATE = new Date(2026, 9, 1)
const SELECTED_RANGE = {
  end: new Date(2026, 9, 8),
  start: new Date(2026, 9, 2),
}

export const Default: Story = {
  args: {
    label: 'Date select',
  },
}

export const SelectedDate: Story = {
  args: {
    defaultValue: SELECTED_DATE,
    label: 'Date',
  },
}

export const DateRange: Story = {
  args: {
    defaultValue: SELECTED_RANGE,
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
    defaultValue: SELECTED_DATE,
    error: 'Error!',
    label: 'Date',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: SELECTED_DATE,
    disabled: true,
    label: 'Date',
  },
}

export const RangeError: Story = {
  args: {
    defaultValue: SELECTED_RANGE,
    error: 'Select the current month or last month',
    label: 'Date range',
    mode: 'range',
  },
}

export const RangeDisabled: Story = {
  args: {
    defaultValue: SELECTED_RANGE,
    disabled: true,
    label: 'Date range',
    mode: 'range',
  },
}

export const RangeHover: Story = {
  args: {
    defaultValue: SELECTED_RANGE,
    label: 'Date range',
    mode: 'range',
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.hover(canvas.getByRole('button'))
  },
}

export const RangeFocus: Story = {
  args: {
    defaultValue: SELECTED_RANGE,
    label: 'Date range',
    mode: 'range',
  },
  play: ({ canvas }) => {
    canvas.getByRole('button').focus()
  },
}
