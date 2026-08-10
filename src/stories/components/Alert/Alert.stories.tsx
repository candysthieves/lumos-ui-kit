import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from '../../../components/Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'error'],
      description: 'Вариант стиля алерта',
    },
    title: {
      control: 'text',
      description: 'Заголовок уведомления (жирный текст)',
    },
    children: {
      control: 'text',
      description: 'Основной текст сообщения',
    },
    onClose: {
      action: 'closed',
      description: 'Колбэк при клике на крестик',
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
    onClose: () => alert('Alert closed!'),
  },
}

export const SuccessSimple: Story = {
  args: {
    variant: 'success',
    children: 'Your settings are saved',
    onClose: () => alert('Alert closed!'),
  },
}

export const WithoutCloseButton: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Operation completed successfully.',
  },
}
