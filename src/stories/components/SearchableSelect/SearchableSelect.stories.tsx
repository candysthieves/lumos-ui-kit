import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { SearchableSelect, type SelectItem, Typography } from '@/components'
import { OPTIONS_QUANTITY } from '@/constants'

const meta: Meta<typeof SearchableSelect> = {
  title: 'UI/SearchableSelect',
  component: SearchableSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    debounceDelay: { control: { type: 'number', min: 0, step: 50 } },
    searchPlaceholder: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    onSearchChange: { action: 'searchChanged' },
    onValueChange: { action: 'valueChanged' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const COUNTRIES: SelectItem[] = [
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'pl', label: 'Poland' },
  { value: 'ua', label: 'Ukraine' },
  { value: 'by', label: 'Belarus' },
  { value: 'kz', label: 'Kazakhstan' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'br', label: 'Brazil' },
]

const GROUPED_OPTIONS: SelectItem[] = [
  {
    type: 'group',
    label: 'Europe',
    options: [
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'es', label: 'Spain' },
      { value: 'it', label: 'Italy' },
      { value: 'pl', label: 'Poland' },
    ],
  },
  {
    type: 'group',
    label: 'North America',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
    ],
  },
  {
    type: 'group',
    label: 'Asia',
    options: [
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
      { value: 'kr', label: 'South Korea' },
      { value: 'in', label: 'India' },
    ],
  },
]

const OPTIONS_WITH_DISABLED: SelectItem[] = [
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'ru', label: 'Russia', disabled: true },
  { value: 'by', label: 'Belarus', disabled: true },
  { value: 'de', label: 'Germany' },
]

const OPTIONS_WITH_SEPARATORS: SelectItem[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { type: 'separator' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { type: 'separator' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
]

export const Default: Story = {
  args: {
    options: COUNTRIES,
    placeholder: 'Select a country',
  },
}

export const WithLabel: Story = {
  args: {
    options: COUNTRIES,
    label: 'Country',
    placeholder: 'Select a country',
  },
}

export const WithSearchPlaceholder: Story = {
  args: {
    options: COUNTRIES,
    label: 'Country',
    placeholder: 'Select a country',
    searchPlaceholder: 'Type to filter…',
  },
}

export const Grouped: Story = {
  args: {
    options: GROUPED_OPTIONS,
    label: 'Country',
    placeholder: 'Select a country',
  },
}

export const WithDisabledOptions: Story = {
  args: {
    options: OPTIONS_WITH_DISABLED,
    label: 'Country',
    placeholder: 'Select a country',
  },
}

export const WithSeparators: Story = {
  args: {
    options: OPTIONS_WITH_SEPARATORS,
    label: 'Country',
    placeholder: 'Select a country',
  },
}

export const Disabled: Story = {
  args: {
    options: COUNTRIES,
    label: 'Country',
    placeholder: 'Select a country',
    disabled: true,
  },
}

export const WithDefaultValue: Story = {
  args: {
    options: COUNTRIES,
    label: 'Country',
    defaultValue: 'de',
  },
}

export const Controlled: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>('us')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SearchableSelect
          {...args}
          value={value}
          onValueChange={next => {
            setValue(next)
            args.onValueChange?.(next)
          }}
        />
        <div style={{ fontSize: 12, color: 'var(--color-success-500)' }}>
          Selected: <code>{value ?? 'none'}</code>
        </div>
      </div>
    )
  },
  args: {
    options: COUNTRIES,
    label: 'Country',
    placeholder: 'Select a country',
  },
}

export const LongList: Story = {
  args: {
    options: Array.from({ length: OPTIONS_QUANTITY }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    label: 'Options',
    placeholder: 'Select an option',
  },
}

export const LongLabels: Story = {
  args: {
    options: [
      {
        value: '1',
        label: 'The United Kingdom of Great Britain and Northern Ireland',
      },
      {
        value: '2',
        label: 'The United States of America — long name to test overflow',
      },
      {
        value: '3',
        label: 'Federative Republic of Brazil',
      },
    ],
    label: 'Country',
    placeholder: 'Select a country',
  },
}

export const EmptyOptions: Story = {
  args: {
    options: [],
    label: 'Country',
    placeholder: 'Nothing to show',
  },
}

export const WithError: Story = {
  args: {
    options: COUNTRIES,
    label: 'Country',
    placeholder: 'Select a country',
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Story />
        <Typography variant={'form-error'} color={'var(--color-danger-500)'} role={'alert'}>
          Please select a country
        </Typography>
      </div>
    ),
  ],
}
