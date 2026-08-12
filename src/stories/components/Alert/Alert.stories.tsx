import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from '@storybook/test'
import { Alert } from '@/components/Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'error', 'warning'],
      description: 'Alert style variant',
    },
    title: {
      control: 'text',
      description: 'Notification title (bold text)',
    },
    children: {
      control: 'text',
      description: 'Main message text (string)',
    },
    errors: {
      control: 'object',
      description: 'List of validation errors in the form of { field, message }',
    },
    onClose: {
      description:
        'Callback fired on close icon click. If not provided, the close button is not rendered',
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorWithTitle: Story = {
  args: {
    variant: 'error',
    title: 'Error!',
    children: 'Server is not available',
    onClose: () => window.alert('Close button clicked!'),
  },
}

export const SuccessSimple: Story = {
  args: {
    variant: 'success',
    children: 'Your settings are saved',
    onClose: () => window.alert('Close button clicked!'),
  },
}

export const WarningSimple: Story = {
  args: {
    variant: 'warning',
    title: 'Warning!',
    children: 'This action cannot be undone',
    onClose: () => window.alert('Close button clicked!'),
  },
}

export const WithoutCloseButton: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Operation completed successfully.',
  },
}

export const WithFieldErrors: Story = {
  args: {
    variant: 'error',
    title: 'Validation error',
    errors: [
      { field: 'email', message: 'Invalid email format' },
      { field: 'password', message: 'Password is too short' },
    ],
    onClose: () => window.alert('Close button clicked!'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Validation error')).toBeInTheDocument()

    const listItems = canvas.getAllByRole('listitem')
    await expect(listItems).toHaveLength(2)

    await expect(canvas.getByText('email:')).toBeInTheDocument()
    await expect(canvas.getByText('Invalid email format')).toBeInTheDocument()
    await expect(canvas.getByText('password:')).toBeInTheDocument()
    await expect(canvas.getByText('Password is too short')).toBeInTheDocument()
  },
}
