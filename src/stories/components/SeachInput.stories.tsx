import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchInput } from '@/components/SearchInput'

const meta = {
  title: 'UI/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Reusable search input component with a built-in search icon. Based on the Input component.',
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
      description: 'Current input value.',
    },
  },
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
  },
}

export const WithValue: Story = {
  args: {
    value: 'React',
  },
}

export const Error: Story = {
  args: {
    label: 'Search',
    value: 'React',
    error: 'Search query is invalid',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Search...',
    disabled: true,
  },
}
