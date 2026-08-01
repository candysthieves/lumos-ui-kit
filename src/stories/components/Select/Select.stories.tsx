import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Select } from '@/components/Select'
import s from './Select.stories.module.scss'

const flagRussia = new URL('../../../assets/icons/flags/flag-russia.png', import.meta.url).href
const flagUnitedKingdom = new URL(
  '../../../assets/icons/flags/flag-united-kingdom.png',
  import.meta.url
).href

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    options: {
      control: false,
    },
    onValueChange: {
      action: 'value changed',
    },
    className: {
      control: false,
    },
    contentClassName: {
      control: false,
    },
    contentProps: {
      control: false,
    },
    groupLabelClassName: {
      control: false,
    },
    iconProps: {
      control: false,
    },
    itemClassName: {
      control: false,
    },
    labelProps: {
      control: false,
    },
    portalProps: {
      control: false,
    },
    separatorClassName: {
      control: false,
    },
    triggerIcon: {
      control: false,
    },
    triggerProps: {
      control: false,
    },
    valueProps: {
      control: false,
    },
    viewportProps: {
      control: false,
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { value: 'first', label: 'Select-box' },
  { value: 'second', label: 'Select-box' },
  { value: 'third', label: 'Select-box' },
]

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select-box',
  },
  render: args => {
    const [value, setValue] = useState<string>()

    return <Select {...args} value={value} onValueChange={setValue} />
  },
}

export const WithTitle: Story = {
  args: {
    label: 'Select-box',
    options,
    placeholder: 'Select-box',
  },
  render: args => {
    const [value, setValue] = useState<string>()

    return <Select {...args} value={value} onValueChange={setValue} />
  },
}

export const Active: Story = {
  args: {
    defaultOpen: true,
    defaultValue: 'first',
    options,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Select-box',
    options,
    placeholder: 'Select-box',
  },
}

export const Language: Story = {
  args: {
    className: s.languageTrigger,
    defaultValue: 'russian',
    options: [
      {
        value: 'russian',
        label: 'Russian',
        icon: <img src={flagRussia} className={s.flag} alt={''} />,
      },
      {
        value: 'english',
        label: 'English',
        icon: <img src={flagUnitedKingdom} className={s.flag} alt={''} />,
      },
    ],
  },
}
