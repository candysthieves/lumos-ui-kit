import type { Meta, StoryObj } from '@storybook/react-vite'
import { PasswordInput } from '@/components/PasswordInput'

const meta = {
  title: 'UI/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Password input component with visibility toggle, label support, validation error state and disabled state.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Optional text label displayed above the input.',
    },
    error: {
      control: 'text',
      description: 'ErrorIcon message displayed below the input. Changes the input state to error.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and applies disabled styles.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the input is empty.',
    },
    value: {
      control: 'text',
      description: 'Current password value.',
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
