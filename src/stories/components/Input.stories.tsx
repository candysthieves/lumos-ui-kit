import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    type: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
}

export const WithValue: Story = {
  args: {
    value: 'example text',
  },
}

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    error: 'Invalid email',
    type: 'email',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}
