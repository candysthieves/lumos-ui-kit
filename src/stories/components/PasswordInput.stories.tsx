import type { Meta, StoryObj } from '@storybook/react-vite'
import { PasswordInput } from '@/components/PasswordInput'

const meta = {
  title: 'UI/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PasswordInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter password',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    value: 'mypassword123',
  },
}

export const Error: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password is too short',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Password',
    disabled: true,
  },
}
