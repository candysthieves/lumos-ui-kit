import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Reusable input component with support for label, validation error, disabled state and custom adornments.',
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
      description: 'Error message displayed below the input. Changes the input state to error.',
    },
    startAdornment: {
      description: 'Custom element displayed at the start of the input.',
    },
    endAdornment: {
      description: 'Custom element displayed at the end of the input.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and applies disabled styles.',
    },
    type: {
      control: 'text',
      description: 'Defines the input type attribute.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the input is empty.',
    },
    value: {
      control: 'text',
      description: 'Current input value.',
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
